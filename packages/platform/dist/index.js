import { jsx as A, jsxs as Ee, Fragment as zn } from "react/jsx-runtime";
import { forwardRef as Cn, useState as he, useRef as Y, useCallback as be, useEffect as B, useMemo as He, memo as Jb, createContext as $p, useContext as Ip, Children as Yb, isValidElement as Xb, cloneElement as Qb, useImperativeHandle as aa, useLayoutEffect as Vs } from "react";
import { assertSafeKey as et, isValidBookCode as Zb, MARKER_OBJECT_PROPS as ek, USJ_VERSION as lr, USJ_TYPE as ur, isUsjTextContentLocation as tk, indexesFromUsjJsonPath as Lp, isUsjAttributeKeyLocation as rk, isUsjAttributeMarkerLocation as nk, isUsjClosingAttributeMarkerLocation as ik, isUsjMarkerLocation as sk, isUsjClosingMarkerLocation as ok, isUsjPropertyValueLocation as ak, getUsjDocumentLocationTypeName as ck, usjJsonPathFromIndexes as On, EMPTY_USJ as Dp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Je, $parseSerializedNode as Kn, DecoratorNode as Ws, ElementNode as hr, isHTMLElement as ri, createState as ca, $getState as se, $setState as St, $isRangeSelection as P, $isElementNode as I, $isTextNode as E, $getSelection as N, $isNodeSelection as la, ParagraphNode as El, TextNode as qe, $createTextNode as ye, $getCommonAncestor as lk, $isLineBreakNode as ni, NODE_STATE_KEY as Hs, $getEditor as _n, $hasUpdateTag as uk, $getNodeByKey as ne, $getRoot as Ue, $createRangeSelection as Bn, $createPoint as ar, $setSelection as zr, SELECTION_CHANGE_COMMAND as Dt, $getCharacterOffsets as Al, KEY_DOWN_COMMAND as Or, COMMAND_PRIORITY_HIGH as Me, HISTORY_MERGE_TAG as Pl, CLICK_COMMAND as ua, COMMAND_PRIORITY_EDITOR as jn, DELETE_CHARACTER_COMMAND as da, DELETE_WORD_COMMAND as Nl, DELETE_LINE_COMMAND as Ao, COMMAND_PRIORITY_NORMAL as Mr, CONTROLLED_TEXT_INSERTION_COMMAND as wi, COMMAND_PRIORITY_CRITICAL as ke, PASTE_COMMAND as Gt, CUT_COMMAND as dr, REMOVE_TEXT_COMMAND as Up, isDOMNode as Fp, $getNearestNodeFromDOMNode as Wi, $isRootNode as zp, DROP_COMMAND as wl, $isDecoratorNode as ii, COPY_COMMAND as Oi, COMMAND_PRIORITY_LOW as kt, getDOMSelection as dk, isSelectionWithinEditor as Kp, $createRangeSelectionFromDom as Bp, isDOMTextNode as fk, BLUR_COMMAND as Ol, $addUpdateTag as vt, SKIP_DOM_SELECTION_TAG as Lr, CLEAR_HISTORY_COMMAND as pk, INSERT_PARAGRAPH_COMMAND as Mi, INSERT_LINE_BREAK_COMMAND as jp, $getPreviousSelection as hk, $isRootOrShadowRoot as gk, CAN_UNDO_COMMAND as mk, CAN_REDO_COMMAND as yk, DRAGSTART_COMMAND as bk, $createNodeSelection as Vp, getDOMSelectionFromTarget as kk, $onUpdate as Wp, KEY_ENTER_COMMAND as Hp, LineBreakNode as Gp, $copyNode as xk, FOCUS_COMMAND as Tk, createEditor as Ck, SELECT_ALL_COMMAND as _k, isExactShortcutMatch as vk, getDOMTextNode as Sk, KEY_ESCAPE_COMMAND as Jp, createCommand as Yp, HISTORIC_TAG as Rl, UNDO_COMMAND as Xp, REDO_COMMAND as Qp, CLEAR_EDITOR_COMMAND as Mk } from "lexical";
import { addClassNamesToElement as hi, removeClassNamesFromElement as Va, $findMatchingParent as Ae, $dfsIterator as fa, $dfs as si, mergeRegister as Oe, registerNestedElementResolver as Zp, $unwrapNode as Ec, IS_APPLE as Ri } from "@lexical/utils";
import { useLexicalNodeSelection as Ek } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as It } from "fast-equals";
import gs from "quill-delta";
import { copyToClipboard as Ak, $getLexicalContent as Pk } from "@lexical/clipboard";
import { graphemeSegments as Nk } from "unicode-segmenter/grapheme";
import { useLexicalComposerContext as ce } from "@lexical/react/LexicalComposerContext";
import { TreeView as wk } from "@lexical/react/LexicalTreeView";
import * as Ok from "react-dom";
import { createPortal as Fn } from "react-dom";
import { LexicalComposer as eh } from "@lexical/react/LexicalComposer";
import { ContentEditable as th } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as rh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as nh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as ih } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Rk } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as qk, createDOMRange as $k, createRectsFromDOMRange as Ik } from "@lexical/selection";
import { autoUpdate as Lk, computePosition as Dk, shift as Uk, flip as Fk } from "@floating-ui/dom";
import { $generateNodesFromDOM as zk } from "@lexical/html";
import { AutoFocusPlugin as Kk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Bk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as sh, LexicalCollaboration as jk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Vk } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Wk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Hk, $isRootTextContentEmpty as Gk } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Jk } from "@lexical/yjs";
import { Array as xd, Map as Td, YArrayEvent as Yk } from "yjs";
const Wa = (e) => Je(Kn(e)), Xk = {
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
  return Xk[e];
}
const D = " ", Po = "​", Qt = D, ql = `${D}|`, Lt = "p", vs = "+", ah = "-", No = "chapter", Ac = "verse", Cd = "invalid", Qk = "text-spacing", Zk = "formatted-font", ex = "marker-", $l = "external-usj-mutation", ch = "selection-change", Mt = "cursor-change", Pc = "annotation-change", Ss = "delta-change", lh = "marker-settle", tx = [
  $l,
  ch,
  Mt,
  Pc,
  Ss
], Vn = "zmsc-s", Ei = "zmsc-e", rx = [Vn, Ei], nx = [
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
], uh = 1, Il = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], ix = Il.filter((e) => e !== "sid" && e !== "eid");
class fr extends Ws {
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
    return new fr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return fh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (nx.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
  return rx.includes(e);
}
function fh(e, t, r, n, i) {
  return Je(new fr(e, t, r, n, void 0, i));
}
function Ze(e) {
  return e instanceof fr;
}
const Ll = "f", sx = [
  // Footnote
  Ll,
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
const ox = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], ph = 1;
class Pe extends hr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Ll, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (po(t) === "crossref" ? ah : vs), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => cx(t) ? {
        conversion: ax,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Dl().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (sx.includes(t) || (r?.includes(t) ?? !1));
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
function ax(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Dl(t, r, n) };
}
function Dl(e, t, r, n, i) {
  return Je(new Pe(e, t, r, n, i));
}
function cx(e) {
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
const Nc = {
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
}, _d = {
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
function Er(e) {
  const t = Object.hasOwn(Nc, e) ? Nc[e] : void 0, r = Object.hasOwn(_d, e) ? _d[e] : void 0;
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
const hh = "v", gh = "c", qn = "fig", vd = "tr", wc = "esb", mh = "esbe", Sd = "periph", Md = "alt", Ed = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, lx = {
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
const ux = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function dx(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Po && s + 1 < e.length && Pd(e[s + 1]) || (Pd(o) ? (r || (i = t.length, t += o), r = !0) : ux.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function fx(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function px(e, t) {
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
const hx = /^(?:qt[1-5]?|ts)-[se]$/;
function Ul(e) {
  return hx.test(e) || dh(e);
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
function gx(e, t, r) {
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
      a(dx(e.slice(i, g))), i = g;
      continue;
    }
    const c = i, { name: l, next: d } = px(e, i + 1);
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
      const { word: h, next: g } = Ha(e, i);
      i = g, n.push({ kind: "verse", number: h });
      continue;
    }
    if (l === gh) {
      const { word: h, next: g } = Ha(e, i);
      i = g, s = void 0, n.push({ kind: "chapter", number: h });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === x.Note || m === void 0 && Pe.isValidMarker(l)) {
      const { word: h, next: g } = Ha(e, i);
      i = g, s = l, n.push({ kind: "note", marker: l, caller: h || "+" });
      continue;
    }
    if (m === x.Milestone || m === void 0 && Ul(l)) {
      const h = _x(e, c, l, i);
      if (h)
        n.push(h.token), h.ejectedText && o(h.ejectedText), i = h.next;
      else {
        const g = e.indexOf("\\", i), b = g === -1 ? e.length : g;
        o(e.slice(c, b)), i = b;
      }
      continue;
    }
    m === x.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : m === x.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : wo(p) ? (u(), wo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === wc || l === mh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
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
function wo(e) {
  return Object.hasOwn(Nd, e) ? Nd[e] : void 0;
}
function mx(e) {
  return wo(e) !== void 0;
}
const yx = /([-\w]+)\s*=\s*"(.*?)"/g, bx = /[\s\u200B]*[\n\r][\s\u200B]*/g, yh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function pa(e) {
  return yh[e];
}
const kx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function xx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Ms(e, t, r = yh[t]) {
  const n = e.replace(bx, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(yx)];
  if (s.length > 0) {
    if (!xx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      kx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function ha(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Tx(e) {
  const t = Wr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Cx(e, t, r) {
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
function _x(e, t, r, n) {
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
  const l = Cx(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Cr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", D);
}
function cn(e) {
  return e.content || (e.content = []), e.content;
}
function Wr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d, u;
  const f = () => d ? cn(d) : u ? cn(u) : r;
  let p = !1;
  const m = () => {
    if (s)
      return o.length > a ? cn(o[o.length - 1].object) : cn(s);
    if (o.length > 0)
      return cn(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: Lt, content: [] }, f().push(i);
    }
    return cn(i);
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
    const [, le, Ne, lt] = te, Z = {
      type: "table:cell",
      marker: lt ? R.slice(0, R.indexOf("-")) : R,
      align: lx[le],
      content: []
    };
    lt && (Z.colspan = String(Number(lt) + 1 - Number(Ne))), cn(ee).push(Z), i = Z;
  }, C = (ee) => {
    d && (ee || (d.closed = "false"), d = void 0);
  }, $ = () => {
    u = void 0;
  };
  let w, z = "", v;
  const V = () => {
    z && h(Cr(z)), z = "";
  }, H = (ee = !1) => {
    w?.type === "sidebar" ? z = "" : ee && z.endsWith(`
`) && (z = z.slice(0, -1)), w = void 0, V();
  }, fe = () => {
    if (!v)
      return;
    const ee = { type: "char", marker: v.marker, content: [] };
    v.value && (ee.content = [Cr(v.value)]), m().push(ee), o.push({ object: ee }), v = void 0;
  }, Q = (ee, R) => {
    p = !1, _(), b(), k(!1), i = { type: "para", marker: ee, content: [] }, R && (i.content = [Cr(R)]), f().push(i);
  }, Fe = () => {
    v && (Q(v.marker, v.value), v = void 0);
  };
  let _e;
  const yr = (ee) => {
    if (!_e)
      return;
    let { value: R } = _e;
    _e = void 0, ee && R.endsWith(`
`) && (R = R.slice(0, -1));
    const te = R.indexOf("|"), le = te >= 0 ? Ms(R.slice(te + 1), Sd) : void 0, Ne = te >= 0 ? R.slice(0, te) : R, lt = te >= 0 && (!le || !!Ne && !!le[Md]), Z = lt ? void 0 : le, Ye = lt ? R : Ne, br = {
      type: "periph",
      ...Ye ? { [Md]: Cr(Ye) } : {},
      ...Z
    };
    br.content = [], f().push(br), u = br, i = void 0;
  };
  let We;
  const en = () => {
    if (We) {
      if (We.shape === "para")
        Q(qn, We.value);
      else {
        const ee = { type: "char", marker: qn, content: [] };
        We.value && (ee.content = [Cr(We.value)]), m().push(ee), o.push({ object: ee });
      }
      We = void 0;
    }
  }, tn = gx(e, t?.getMarker ?? Er, n);
  for (let ee = 0; ee < tn.length; ee++) {
    const R = tn[ee];
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
          [v.attrName]: Cr(v.value.trim())
        });
        const te = v.marker;
        if (v = void 0, te === "ca") {
          const le = tn[ee + 1];
          le?.kind === "text" && /^[\s\u200B]*$/.test(le.text) && ee++;
        }
        continue;
      }
      if (v.shape === "para" && (R.kind === "para" || R.kind === "chapter")) {
        const te = v.value.replace(/[\s\u200B]+$/, "");
        te === "" ? (Q(v.marker), v = void 0) : (Object.assign(v.target, { [v.attrName]: Cr(te) }), v = void 0);
      } else {
        w = void 0, (R.kind === "para" || R.kind === "chapter") && v.value.endsWith(`
`) && (v.value = v.value.slice(0, -1)), v.shape === "para" ? Fe() : fe(), ee--;
        continue;
      }
    }
    if (_e) {
      if (R.kind === "text" || R.kind === "optbreak") {
        _e.value += R.kind === "text" ? R.text : "//";
        continue;
      }
      yr(R.kind === "para" || R.kind === "chapter"), ee--;
      continue;
    }
    if (We) {
      if (R.kind === "text" || R.kind === "optbreak") {
        We.value += R.kind === "text" ? R.text : "//";
        continue;
      }
      if (R.kind === "end" && R.marker.replace(/^\+/, "") === qn) {
        const te = We.value.indexOf("|"), le = te >= 0 ? Ms(We.value.slice(te + 1), qn) : void 0;
        if (le) {
          const Ne = {};
          for (const [Ye, br] of Object.entries(le))
            Ne[Ye === "src" ? "file" : Ye] = br;
          const lt = {
            type: "figure",
            marker: qn,
            ...Ne
          }, Z = We.value.slice(0, te);
          Z && (lt.content = [Cr(Z)]), h(lt), We = void 0;
          continue;
        }
      }
      en(), ee--;
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
        const te = R.kind === "para" || !R.isNested ? wo(R.marker) : void 0;
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
    if (!s && !n && (R.kind === "charOpen" && !R.isNested && R.marker === qn || R.kind === "para" && R.marker === qn)) {
      b(), We = { shape: R.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (R.kind) {
      case "text": {
        let te = R.text;
        if (!s && te.endsWith(`
`)) {
          const le = tn[ee + 1];
          (le === void 0 || le.kind === "para" || le.kind === "chapter") && (te = te.slice(0, -1));
        }
        te && h(Cr(te));
        break;
      }
      case "para": {
        const te = !s && !n;
        if (te && R.marker === vd) {
          b(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: vd, content: [] }, cn(c).push(l), i = l, p = !1;
          break;
        }
        if (te && l) {
          const le = Ed.exec(R.marker);
          if (le && Ad(le)) {
            M(l, R.marker, le);
            break;
          }
        }
        if (_(), !n && R.marker === wc) {
          b(), k(!1), C(!1);
          const le = {
            type: "sidebar",
            marker: wc,
            content: []
          };
          f().push(le), d = le, i = void 0, w = d, p = !1;
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
        const te = m(), le = { type: "char", marker: R.marker, content: [] };
        te.push(le), o.push({ object: le });
        break;
      }
      case "end": {
        const te = R.marker.replace(/^\+/, ""), le = s ? a : 0, Ne = o.findLastIndex((lt, Z) => Z >= le && lt.object.marker === te);
        Ne >= 0 ? (vx(o[Ne].object), g(Ne + 1), o.length = Ne) : s && s.marker === te ? k(!0) : (g(le), o.length = le, h({ type: "unmatched", marker: `${R.marker}*` }));
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
  if (_e && yr(!0), We && en(), v)
    if (v.shape === "para") {
      const ee = v.value.replace(/[\s\u200B]+$/, "");
      ee === "" ? Q(v.marker) : Object.assign(v.target, { [v.attrName]: Cr(ee) }), v = void 0;
    } else
      v.value.endsWith(`
`) && (v.value = v.value.slice(0, -1)), fe();
  b(), k(!1), C(!1);
  const Mn = (ee) => {
    for (const R of ee)
      typeof R != "string" && R.content && (Mn(R.content), R.content.length === 0 && delete R.content);
  };
  return Mn(r), r;
}
function vx(e) {
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
}), ue = ca("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Rr = "marker-trailing-space", bh = 1, Sx = "marker", Fl = ca("isGutterMarker", {
  parse: (e) => e === !0
});
class Hr extends Ws {
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
    return new Hr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Px(t) ? {
        conversion: Mx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kr().updateFromJSON(t);
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
      version: bh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Mx(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Kr(t, r) };
}
function Kr(e, t) {
  return Je(new Hr(e, t));
}
function Ex(e) {
  return St(Kr(Sx, e), Fl, !0);
}
function Ax(e) {
  return Ut(e) && se(e, Fl);
}
function Px(e) {
  return e?.tagName === "span";
}
function Ut(e) {
  return e instanceof Hr;
}
function kh(e) {
  return e?.type === Hr.getType();
}
const pn = "internal-comment", Nx = [pn], xh = Object.freeze({}), Oc = Object.freeze({}), Rc = Object.freeze({}), qc = Object.freeze({}), $c = Object.freeze({}), wx = 1, gi = /* @__PURE__ */ new Map(), as = /* @__PURE__ */ new Map(), mi = /* @__PURE__ */ new Map(), yi = /* @__PURE__ */ new Map();
class at extends hr {
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
    super(o), this.__typedIDs = ho(t), this.__typedOnClicks = Ga(r), this.__typedOnRemoves = Ja(n), this.__typedOnMouseEnters = Ya(i), this.__typedOnMouseLeaves = Xa(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = ho(t.__typedIDs), n = Ga(t.__typedOnClicks), i = Ja(t.__typedOnRemoves), s = Ya(t.__typedOnMouseEnters), o = Xa(t.__typedOnMouseLeaves);
    return new at(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Nx.includes(t);
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
      version: wx
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
      for (const m of o)
        p.has(m) || Va(r, $n("annotationId", m));
      for (const m of a)
        f.has(m) || hi(r, $n("annotationId", m));
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
    return Ce(t) ? gi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Ja(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Ce(t) ? as.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Ya(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Ce(t) ? mi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Xa(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Ce(t) ? yi.get(t.getKey()) ?? {} : {};
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
    const i = Ox(t, r);
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
    const r = Rx(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = qx(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = $x(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ix(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function ho(e = xh) {
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
function Xa(e) {
  if (!e || e === $c)
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
function ln(e, t) {
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
function Ox(e, t) {
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
function $x(e, t) {
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
function Ix(e, t) {
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
function Rd(e) {
  return `external-${e}`;
}
function Es(e, t, r, n, i) {
  return Je(new at(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof at;
}
function Th(e) {
  return e?.type === at.getType();
}
function Oo(e) {
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
      (C == null || !C.is(m)) && (h = void 0), m = C, h === void 0 && (h = Es(), h.addID(t, r, n, i, s, o), M.insertBefore(h)), h.append(M);
    } else
      m = void 0, h = void 0;
  }
  t === pn && I(h) && (u ? h.selectStart() : h.selectEnd());
}
function Lx(e, t, r) {
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
const Dx = ["type", "marker", "content"], Ic = "unknown", _h = 1, Ux = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class oi extends hr {
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
      [Ic]: (t) => zx(t) ? {
        conversion: Fx,
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
    return Ux.has(this.getTag());
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
    if (la(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function Fx(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: zl(t, r) };
}
function zl(e, t, r) {
  return Je(new oi(e, t, r));
}
function zx(e) {
  return e?.tagName.toLowerCase() === Ic;
}
function Be(e) {
  return e instanceof oi;
}
const vh = 1, Kx = "attribute-run";
function Qa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Gr extends hr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Gr(r, n);
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
    t.classList.add(Kx);
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
  return Je(new Gr(e));
}
function Le(e) {
  return e instanceof Gr;
}
const As = "id", Mh = 1, Bx = [
  "type",
  "marker",
  "code",
  "content"
];
class Ft extends hr {
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
    return new Ft(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Eh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Zb(t);
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
function Kl(e) {
  return e?.type === Ft.getType();
}
const Ro = "c", Ah = 1, jx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class jt extends hr {
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
function Vx(e) {
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
], Wx = [
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
], Oh = 1, Hx = ["type", "marker", "content"];
class xe extends hr {
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
    return t !== void 0 && (Wx.includes(t) || (r?.includes(t) ?? !1));
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
      span: (t) => Jx(t) ? {
        conversion: Gx,
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
    return r && ri(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = this.getUnknownAttributes()?.closed === "false", i = Br(this.getMarker(), n ? { closed: "false" } : void 0);
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
function Gx(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Br(t) };
}
function Br(e, t) {
  return Je(new xe(e, t));
}
function Jx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return xe.isValidMarker(t) && e.classList.contains(xe.getType());
}
function F(e) {
  return e instanceof xe;
}
function Yx(e) {
  return e?.type === xe.getType();
}
const Rh = 1, Xx = "c", qh = "span";
class qr extends Ws {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Xx, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new qr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => $h(t) ? {
        conversion: Qx,
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
    const t = document.createElement(qh);
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
function Qx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Bl(t) };
}
function Bl(e, t, r, n, i, s) {
  return Je(new qr(e, t, r, n, i, s));
}
function $h(e) {
  return e ? e.classList.contains(No) && e.tagName.toLowerCase() === qh : !1;
}
function Gs(e) {
  return e instanceof qr;
}
function Zx(e) {
  return e?.type === qr.getType();
}
const Ih = 1;
class Pr extends El {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Pr(t.__key);
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
  return Je(new Pr());
}
function Zt(e) {
  return e instanceof Pr;
}
function ga(e) {
  return e?.type === Pr.getType();
}
const eT = [
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
], Lh = 1, tT = ["type", "marker", "content"];
class it extends El {
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
    return new it(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (eT.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: rT,
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
      version: Lh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Hn(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function rT(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Hn(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Hn(e, t) {
  return Je(new it(e, t));
}
function ae(e) {
  return e instanceof it;
}
function jl(e) {
  return e?.type === it.getType();
}
const qo = "v", Dh = 1, nT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class gt extends qe {
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
    return new gt(r, n, i, s, o, a, c);
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
      version: Dh
    };
  }
}
function Uh(e, t, r, n, i, s) {
  return Je(new gt(e, t, r, n, i, s));
}
function Ie(e) {
  return e instanceof gt;
}
function Fh(e) {
  return e?.type === gt.getType();
}
const iT = "​", qi = iT;
var $d;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})($d || ($d = {}));
var Id;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Id || (Id = {}));
function sT() {
  return ye(qi);
}
function oT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(qi, ""));
}
function Js(e) {
  return e.length > 0 && e.includes(qi) && e.replaceAll(qi, "") === "";
}
function Ys(e) {
  return E(e) && Js(e.getTextContent());
}
function zh(e) {
  return Vx(e) || Zx(e);
}
function Ge(e) {
  return we(e) || Gs(e);
}
function Kh(e, t) {
  return e.find((r) => Ge(r) && r.getNumber() === t.toString());
}
function aT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ge(r));
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
function cT(e) {
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
function lT(e) {
  return Te(e) || we(e) || F(e) || Gs(e) || Zt(e) || Ze(e) || ae(e) || K(e) || Ie(e) || Be(e);
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
function je(e) {
  return ct(e) || Te(e);
}
function ct(e) {
  return ae(e) || Zt(e);
}
function uT(e) {
  return jl(e) || ga(e);
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
  const r = se(t, Wn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function dT(e, t) {
  const r = I(e) ? e : e.getParent(), n = I(t) ? t : t.getParent(), i = r && n ? lk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function fT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function $i(e) {
  return e?.type === qe.getType();
}
function pT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function hT(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function De(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function nt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function jh(e, t, r) {
  const n = De(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Xt(e, t) {
  let r = De(e);
  return t && (r += `${D}${t}`), r += " ", r;
}
function gT(e) {
  const t = e[Hs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Vh(e) {
  return Hh(e) || $i(e) && gT(e) === "attribute" ? "" : $i(e) && e.text !== D ? e.text : Yx(e) ? e.children.map((t) => Vh(t)).join("") : "";
}
function mT(e) {
  return e.map((r) => Vh(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Kt(e) {
  return " " + e + D;
}
function Wl(e) {
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
  return O(e) || gr(e) || E(e) && se(e, ue) === "attribute" ? "" : E(e) ? e.getTextContent() : I(e) ? e.getChildren().map((t) => Wh(t)).join("") : "";
}
function gr(e) {
  return Ut(e) && e.getTextType() === "marker";
}
function Nt(e) {
  return O(e) || gr(e);
}
function Hl(e) {
  if (!e || !Nt(e))
    return !1;
  const t = e.getParent();
  return Te(t) && e.is(t.getFirstChild());
}
function Hh(e) {
  return Jl(e) || kh(e) && e.textType === "marker";
}
function Ld(e, t) {
  yT(e, t), e.setMarker(t);
}
function yT(e, t) {
  const r = e.getMarker(), n = De(r), i = De(r, !0), s = nt(r), o = nt(r, !0), a = xe.isNoteContentMarker(t);
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
      else if (gr(c)) {
        const f = l.startsWith(De("", !0));
        c.setTextContent(d ? De(t, f) : nt(t, f));
      }
    }
  });
}
function Ve(e, t = ek) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function $e(e) {
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
function bT(e, t) {
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
function kT(e) {
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
function Xs(e) {
  if (!e)
    return !1;
  if (ni(e) || O(e) || gr(e) || Le(e) || Ut(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = se(e, ue);
    if (t === Rr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === D || Js(r))
      return !0;
  }
  return !1;
}
function Qs() {
  const e = ye(D);
  return St(e, ue, Rr), e.setMode("token"), e;
}
function xT(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function $r(e) {
  return E(e) && se(e, ue) === Rr;
}
function Xh(e) {
  const t = e.getFirstChild();
  if (!Nt(t) || t === null || $r(t.getNextSibling()))
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
    if (!Xs(s)) {
      if (Ce(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (E(s) && s.getType() === qe.getType()) {
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
  for (; t && Ce(t); )
    t = t.getParent();
  return t;
}
function TT(e, t) {
  return Hi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function CT(e, t) {
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
function _T(e, t) {
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
  if (Xs(n))
    return Qh(e, t + 1);
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
function vT(e, t) {
  if (t <= 0)
    return 0;
  const r = Hi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? ST(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function ST(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const MT = 1;
class mr extends qe {
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
    return new mr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return mt().updateFromJSON(t);
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
      version: MT
    };
  }
}
function mt(e, t, r) {
  return Je(new mr(e, t, void 0, r));
}
function O(e) {
  return e instanceof mr;
}
function Jl(e) {
  return e?.type === mr.getType();
}
function Jr(e) {
  return e.getTextContent() === Dn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function ET(e) {
  e.setTextContent(Dn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Dn(e, t, r = !1) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : De(e, r);
}
const AT = /* @__PURE__ */ new Set(["closed"]);
function vr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !AT.has(n));
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
  const t = Object.keys(e).filter((n) => !ix.includes(n)), r = [
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
function ks(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function PT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : ks(e) === void 0 && rg(e) === void 0;
}
function rg(e) {
  return e.getChildren().find((t) => E(t) && se(t, ue) === "attribute");
}
function Ps(e, t) {
  return Zs(e.getNextSibling(), t);
}
const NT = /^[ \u00A0]+$/;
function Yl(e) {
  if (Jr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = De(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && NT.test(r.slice(t.length));
}
function Zs(e, t) {
  let r, n, i, s;
  return Le(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Yl(e) && (r = e, e = e.getNextSibling()), E(e) && se(e, ue) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Jr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function jr(e) {
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
function Xl(e) {
  const t = jr(e);
  return t ? Zs(t.getNextSibling(), "cat") : {};
}
function Gi(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || O(t)) && se(t, ue) !== "attribute")
    return t;
}
function Ql(e) {
  const t = Gi(e);
  return t ? Zs(t.getNextSibling(), "ca") : {};
}
function ng(e) {
  const t = Gi(e);
  if (!t)
    return;
  const r = Zs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Zl(e) {
  const t = ng(e);
  return t ? Zs(t.getNextSibling(), "cp") : {};
}
function ig(e) {
  const t = e.getParent();
  if (!F(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ie(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && se(n, ue) === "attribute" || F(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Le(n)))
        return;
    }
}
function ya(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Le(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Yl(s) && (t = s, s = s.getNextSibling()), E(s) && se(s, ue) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && Jr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function eu(e) {
  return F(ma(e));
}
function tu(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? eu(t) : t.getChildren().some((i) => F(i) && i.getMarker() === r) ? !0 : void 0;
}
function wT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = tu(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Ji(e) {
  return E(e) && e.getType() === qe.getType() && se(e, ue) !== "attribute";
}
function ba(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !O(t) || !F(r) || !sg(t, r) || !Ji(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function sg(e, t) {
  return e.getMarkerSyntax() === "opening" && tu(e, t) !== void 0;
}
function ru(e, t) {
  if (!sg(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? tu(r, t) === !0 ? "spacer" : void 0 : Ji(r) ? r.getTextContent().startsWith(D) ? void 0 : "prefix" : "spacer";
}
function OT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && ru(t, e) !== void 0)
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
    const r = ru(t, e);
    if (r !== void 0 && !og(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(D + n.getTextContent());
      } else
        t.insertAfter(ye(D));
  });
}
function cg(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && ru(t, e) !== void 0 && og(t, e)) : !1;
}
const RT = "file", qT = "src", $T = "colspan", IT = "category", LT = "alt", DT = "closed", UT = "false";
function FT(e) {
  return e[DT] !== UT;
}
function zT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === RT ? qT : t,
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
  const n = r ?? {}, i = FT(n);
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
        opening: `\\${lg(t, n[$T])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: vr(zT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [IT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + vr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [LT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: vr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: vr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const At = { wantsRun: !1, valueText: void 0 }, Yr = {};
function Za(e, t) {
  if (t === "va")
    return e;
  const r = Ps(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function nu(e) {
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
function ka(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function KT(e) {
  return Le(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && se(e, ue) === "attribute";
}
function BT(e) {
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
function ec(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ie(t))
      return t;
    if (!KT(t))
      return;
  }
}
function Ud(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ie(t),
    ownerOf: (t) => {
      if (Le(t))
        return t.getRunKind() === e ? ec(t) : void 0;
      const r = t.getParent();
      return Le(r) ? r.getRunKind() === e ? ec(r) : void 0 : BT(t) === e ? ec(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ie(t))
        return At;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? At : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (t) => Ie(t) ? Ps(Za(t, e), e) : Yr,
    graceSite: (t, r) => Ie(t) ? !r.opener && !r.closer ? nu(Za(t, e)) : ka(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ie(t) ? Za(t, e) : void 0
    }
  };
}
const jT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => At,
  scanPieces: () => Yr,
  graceSite: (e) => F(e) && cg(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, VT = {
  kind: "char",
  ownerPredicate: (e) => F(e),
  ownerOf: (e) => {
    if (!E(e) || se(e, ue) !== "attribute")
      return;
    const t = e.getParent();
    return F(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!F(e) || ks(e) === void 0)
      return At;
    const t = vr(e.getUnknownAttributes() ?? {}, pa(e.getMarker()));
    return t === "" ? At : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => F(e) ? { value: rg(e) } : Yr,
  graceSite: (e, t) => {
    if (!F(e) || t.value)
      return !1;
    const r = ks(e);
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
    insertRunBefore: (e) => F(e) ? ks(e) : void 0
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
function WT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = jr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!dg(n))
        return;
    }
}
const HT = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (Le(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Le(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : dg(e) ? WT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return At;
    const t = e.getCategory();
    return t === void 0 ? At : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => K(e) ? Xl(e) : Yr,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = jr(e);
      return r !== void 0 && nu(r);
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
    insertRunAfter: (e) => K(e) ? jr(e) : void 0
  }
};
function GT(e) {
  return Le(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && se(e, ue) === "attribute";
}
function JT(e) {
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
function YT(e) {
  const t = e.getParent();
  if (!we(t))
    return;
  const r = Gi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!GT(n))
        return;
    }
}
function Fd(e) {
  const t = (r) => we(r) ? e === "ca" ? Gi(r) : ng(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => we(r),
    ownerOf: (r) => {
      if (Le(r))
        return r.getRunKind() === e && we(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Le(n) ? n.getRunKind() === e && we(n.getParent()) ? n.getParent() ?? void 0 : void 0 : JT(r) === e ? YT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!we(r))
        return At;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? At : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (r) => we(r) ? e === "ca" ? Ql(r) : Zl(r) : Yr,
    graceSite: (r, n) => {
      if (!we(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && nu(i);
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
function fg(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && se(e, ue) === "attribute";
}
function XT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ze(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!fg(t))
      return;
  }
}
const QT = {
  kind: "milestone",
  ownerPredicate: (e) => Ze(e),
  ownerOf: (e) => {
    const t = Le(e) ? e.getRunKind() === "milestone" ? e : void 0 : Le(e.getParent()) ? e.getParent() : fg(e) ? e : void 0;
    if (!t || Le(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Le(t) ? Ze(r) ? r : void 0 : XT(t);
  },
  expectedPieces: (e) => {
    if (!Ze(e))
      return At;
    const t = tg(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = vr(t, ha(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : D + r };
  },
  scanPieces: (e) => {
    if (!Ze(e))
      return Yr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ya(e);
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
    return ka(t);
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
}, ZT = ug("optbreak", void 0, void 0).opening, eC = {
  kind: "optbreak",
  ownerPredicate: (e) => Be(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Be(t) || t.getTag() !== "optbreak"))
      return E(e) || Ut(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: ZT }),
  scanPieces: (e) => Be(e) ? { value: e.getFirstChild() ?? void 0 } : Yr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, tC = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Be(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => At,
  scanPieces: () => Yr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, rC = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => At,
  scanPieces: () => Yr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Ns = [
  jT,
  VT,
  Ud("va"),
  Ud("vp"),
  HT,
  Fd("ca"),
  Fd("cp"),
  QT,
  eC,
  tC,
  rC
], nC = new Map(Ns.map((e) => [e.kind, e]));
function Jn(e) {
  const t = nC.get(e);
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
function pg(e) {
  return Yn(e) !== void 0;
}
const Io = "unmatched", hg = 2;
function xs(e) {
  return `\\${e}`;
}
class Xr extends qe {
  __marker;
  constructor(t = "", r) {
    super(xs(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Xr(r, n);
  }
  static importDOM() {
    return {
      [Io]: (t) => sC(t) ? {
        conversion: iC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return iu().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? xs(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = xs(t), r;
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
    const t = document.createElement(Io);
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
  return e.getTextContent() === xs(e.getMarker());
}
function zd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function iC(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: iu(t) };
}
function iu(e) {
  return Je(new Xr(e));
}
function sC(e) {
  return e?.tagName.toLowerCase() === Io;
}
function Qr(e) {
  return e instanceof Xr;
}
const mg = "table", Dc = "immutable-table", yg = 1, oC = ["type", "marker", "content"];
class ai extends hr {
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
    return aC().updateFromJSON(t);
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
      version: yg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function aC(e) {
  return Je(new ai(e));
}
function bg(e) {
  return e instanceof ai;
}
function cC(e) {
  return e?.type === Dc;
}
const kg = "table:row", Kd = "immutable-table-row", xg = 1, Uc = "tr", lC = ["type", "marker", "content"];
class Yi extends hr {
  __marker;
  __unknownAttributes;
  constructor(t = Uc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Kd;
  }
  static clone(t) {
    return new Yi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return uC().updateFromJSON(t);
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
      type: Kd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: xg
    };
  }
}
function uC(e, t) {
  return Je(new Yi(e, t));
}
const Tg = "table:cell", Bd = "immutable-table-cell", Cg = 1, Fc = "tc1", dC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function fC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Xi extends hr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Fc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Bd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Xi(r, n, i, s, o);
  }
  static importJSON(t) {
    return pC().updateFromJSON(t);
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
    const n = fC(this.__align);
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
function pC(e, t, r, n) {
  return Je(new Xi(e, t, r, n));
}
function eo(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function er(e, t) {
  const r = eo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function ws(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function hC(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function gC(e) {
  return ws(e) ? void 0 : { closed: "false" };
}
function mC(e, t, r, n) {
  const i = t.getMarker(), s = eu(t), o = hC(t);
  if (n) {
    e.append(mt(i, "opening", s));
    const [a] = r;
    Ji(a) && !a.getTextContent().startsWith(D) && a.setTextContent(D + a.getTextContent());
  }
  e.append(...r), o && e.append(mt(i, "closing", s));
}
function Xn(e) {
  return Ae(e, F) ?? void 0;
}
function yC(e) {
  let t = e.getParent();
  for (; F(t); )
    t = t.getParent();
  return t;
}
function zc(e) {
  const t = _g(e);
  return e.getChildren().every((r) => O(r) || t && se(r, ue) === "attribute" || E(r) && r.getTextContent().replaceAll(D, "") === "");
}
function _g(e) {
  return ws(e);
}
function bC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? vr(r, pa(e.getMarker())) : "";
  n !== "" && t.insertAfter(ye(n)), e.remove();
}
function kC(e, t) {
  if (ws(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(mt(e.getMarker(), "closing", eu(e)));
}
function xC(e, t) {
  return F(e) && !ws(e) && !ws(t);
}
function TC(e, t, r) {
  zc(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && Ji(n) && !n.getTextContent().startsWith(D) && n.setTextContent(D + n.getTextContent()), e.append(...t);
}
function CC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = _g(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = O(l) && l.getMarkerSyntax() === "closing", f = s && se(l, ue) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = xC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      TC(e, o, n);
    else {
      const l = Br(t.getMarker(), gC(t));
      mC(l, t, o, n), e.insertAfter(l), zc(l) ? l.remove() : c = l;
    }
  i && !a && kC(t, n), zc(t) && bC(t, c);
}
function Ii(e, t) {
  let r = e.getParent();
  for (; F(r); )
    CC(e, r, t), r = e.getParent();
}
function xa(e) {
  if (E(e) && !O(e)) {
    const t = ba(e);
    e.select(t, t);
    return;
  }
  if (I(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      xa(t);
      return;
    }
    e.selectEnd();
  }
}
const Ai = /* @__PURE__ */ new WeakMap();
function _C(e, t) {
  return Ai.set(e, t), () => {
    Ai.get(e) === t && Ai.delete(e);
  };
}
function jd(e) {
  return Ai.get(e);
}
function vC(e) {
  return Ai.get(_n())?.has(e.getKey()) ?? !1;
}
function SC(e) {
  Ai.get(_n())?.add(e.getKey());
}
function MC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Kc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Vd(e) {
  return /^\s/.test(e);
}
function su(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Vd(t) || !Vd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Ta(e, t, r) {
  return r.wantsRun ? su(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : MC(t);
}
function EC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return su(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function vg(e, t) {
  return !Kc(e.scanPieces(t));
}
function to(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Ta(e, n, r))
    return !1;
  const i = N();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || $o(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function AC(e, t, r, n) {
  return !r.wantsRun || Kc(n) || uk(Ss) ? !1 : _n().getEditorState().read(() => {
    const i = ne(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Kc(e.scanPieces(i));
  });
}
function PC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Wd(e) {
  const t = ye(e);
  return St(t, ue, "attribute"), t;
}
function NC(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Sh(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function wC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Wd(n.valueText));
    return;
  }
  const l = NC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = mt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : E(u) ? su(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Wd(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(mt(a === "selfClosing" ? "" : o(t), a));
}
function Os(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Ta(e, i, n) && !vC(t)) {
    if (AC(e, t, n, i)) {
      SC(t);
      return;
    }
    if (!to(e, t)) {
      if (!n.wantsRun) {
        PC(i);
        return;
      }
      wC(e, t, i, n);
    }
  }
}
function OC(e, t, r) {
  Os(e, t), t.isAttached() && to(e, t) && r.add(t.getKey());
}
function ro(e) {
  if (!E(e))
    return !1;
  if (O(e) || Ie(e) || Qr(e))
    return !0;
  const t = se(e, ue);
  return t === "attribute" || t === Rr;
}
function ou(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Jr(e) && F(e.getParent())) : !1;
}
function RC() {
  const e = N();
  return P(e) ? ou(e.focus.getNode(), e.focus.offset) : !1;
}
function Sg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && ro(t) ? t : void 0;
}
function qC(e) {
  const t = Sg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function $C(e) {
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
function IC(e, t) {
  let r = $C(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!ro(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Jd(e, t) {
  const r = IC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function au(e) {
  if (e.isCollapsed()) {
    const a = qC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Hd(r), Hd(n)], s = Jd(r, "next"), o = Jd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Gd(r, i[0]), Gd(n, i[1]), !1) : !0;
}
const Lo = "verse-block", Mg = 1, LC = "verse-block";
class Qi extends hr {
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
    return DC().updateFromJSON(t);
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
    return t.classList.add(LC), Yd(t, this.__number), t;
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
      type: Lo,
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
function DC(e) {
  return Je(new Qi(e));
}
function Rs(e) {
  return e instanceof Qi;
}
function UC(e) {
  return e?.type === Lo;
}
const FC = [
  Ft,
  qr,
  jt,
  gt,
  xe,
  Pe,
  fr,
  mr,
  oi,
  Hr,
  Xr,
  it,
  Pr,
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
  Gr,
  {
    replace: El,
    with: () => Yt(),
    withKlass: Pr
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
}, zC = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function cu(e) {
  if (!e)
    return Er;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: Er(r)?.category ?? T.Uncategorized,
      type: zC[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: Er(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Qd(e, t, r) {
  const n = {
    type: ur,
    version: lr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return ga(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Eg = "v", Ag = 1, KC = "verse-selected";
class wt extends Ws {
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
      span: (t) => VC(t) ? {
        conversion: jC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return lu().updateFromJSON(t);
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
    const t = this.getShowMarker() ? Xt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Po + this.getNumber() + Po
    );
    return A(BC, { nodeKey: this.getKey(), text: t });
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
function BC({ nodeKey: e, text: t }) {
  const [r] = Ek(e);
  return A("span", { className: r ? KC : void 0, children: t });
}
function jC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: lu(t) };
}
function lu(e, t, r, n, i, s) {
  return Je(new wt(e, t, r, n, i, s));
}
function VC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Eg;
}
function ci(e) {
  return e instanceof wt;
}
function WC(e) {
  return e?.type === wt.getType();
}
function me(e) {
  return Ie(e) || ci(e);
}
function Pg(e) {
  return Fh(e) || WC(e);
}
function HC(e) {
  return GC(e).find((t) => ae(t));
}
function GC(e) {
  return e.some(Rs) ? e.flatMap((t) => Rs(t) ? t.getChildren() : t) : e;
}
function Ca(e) {
  return I(e) ? Rs(e) ? e.getChildren().flatMap(Ca) : e.getChildren() : [];
}
function JC(e, t) {
  return Ca(e).find((i) => me(i) && Gl(t, i.getNumber()));
}
function YC(e, t) {
  return t === 0 ? HC(e) : e.map((r) => JC(r, t)).filter((r) => r)[0];
}
function Do(e) {
  return Ca(e).find((r) => me(r));
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
function XC(e) {
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
    const n = Do(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Uo(e) {
  return Ca(e).findLast((t) => me(t));
}
function QC(e) {
  if (!Ie(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function ZC(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && I(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function e_(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return ZC(t, e, r);
  if (E(e)) {
    const n = QC(e);
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
function t_(e) {
  const t = Lc(e);
  if (!(!t || Ge(t)))
    return me(t) ? t : Uo(t) ?? fu(t);
}
function r_(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return tc(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (e_(e, t)) {
    const i = t_(e);
    return i ? tc(i) : { verseNum: n };
  }
  return tc(e);
}
function n_(e) {
  return lT(e) || ci(e);
}
function uu(e) {
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
function Bc(e, t) {
  return e.getEditorState().read(() => !ne(t));
}
function i_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = du(t, e);
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
        const o = Do(s);
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
      const o = Do(s);
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
function s_(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = du(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && I(i) && (n = Ng(i, r.getIndexWithinParent())), !n && i) {
      let o = ef(i);
      for (; o && !Ge(o); ) {
        const a = Uo(o);
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
function du(e, t) {
  if (I(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && me(n))
      return n;
    const i = Ng(e, t.anchor.offset);
    if (i)
      return i;
    const s = Do(e);
    if (s)
      return s;
  }
  return fu(e);
}
function fu(e) {
  if (!e || Ge(e))
    return;
  if (me(e))
    return e;
  let t = Lc(e);
  for (; t; ) {
    if (Ge(t))
      return;
    if (me(t))
      return t;
    const r = Uo(t);
    if (r)
      return r;
    t = Lc(t);
  }
}
const o_ = ["style"], a_ = ["style", "code"], Fo = ["style", "cid"], c_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], l_ = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], u_ = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], d_ = ["style", "caller", "category", "contents"], f_ = ["tag", "marker", "contents"], p_ = [
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
function h_(e, t) {
  const r = ne(e);
  if (!Bt(r))
    return;
  const n = pu(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function pu(e, t = "delta-doc") {
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
      if (Vr(l) || Bt(l))
        return n;
      je(l) && (a = l);
    }
    if (je(l) && (i.includes(l) || i.push(l)), Og(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += hu(l, t);
  }
  if (a)
    return n;
}
function tf(e, t, r = "delta-doc") {
  if (e.length < 2 || !y_(e[0]) || !m_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => g_(n, r)?.getKey());
}
function g_(e, t = "delta-doc") {
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
    if (je(a) && (i.includes(a) || i.push(a)), Og(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = hu(a, t);
    if (Vr(a) && l > 0 && e >= n && e < n + l || Bt(a) && n === e)
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
function Vr(e) {
  return E(e) && !Bt(e);
}
function Bt(e) {
  return Ge(e) || me(e) || Ze(e) || K(e) || Be(e) || Qr(e);
}
function dn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function m_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && p_.includes(t);
}
function y_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Og(e, t) {
  return K(e) || Be(e) ? !0 : t === "apply" && I(e) && Bt(e);
}
function Rg(e) {
  const t = e.getParent();
  return Nt(e) && ae(t) && t.getFirstChild() === e;
}
function jc(e) {
  const t = e.getParent();
  return t !== null && Ae(t, Le) !== null;
}
function b_(e) {
  const t = e.getParent();
  return F(t) && e.getTextContent() === Qt && t.getChildrenSize() === 1;
}
function k_(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === Kt(t.getCaller());
}
function x_(e) {
  return !pg(e) && hu(e, "delta-doc") === e.getTextContentSize();
}
function hu(e, t) {
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
    (Ys(e) || Rg(e) || se(e, ue) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    se(e, ue) === "attribute" || jc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(ql) || b_(e) || k_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Vc(e, t) {
  const r = { insert: e.__text }, n = se(e, gn);
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
  const t = new gs();
  return e.isEmpty() || e.read(() => {
    const r = Ue();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Zt(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = T_();
    for (const s of i)
      t.push(s);
  }), t;
}
function _a(e, t) {
  const r = [], n = si(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...nf(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...nf(c, n.length, n, i, s, o, a));
  return r;
}
function T_() {
  return _a();
}
function nf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return C_(e, a, n), __(e, a, i, s, o), v_(e, t, r, i, o, s, a), Ge(e) && a.push(A_(e)), me(e) && a.push(N_(e)), Ze(e) && a.push(w_(e)), Qr(e) && a.push(O_(e)), M_(e, a, s), S_(e, a, s), I_(c, s), a;
}
function C_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Te(n) ? t.push(E_(n)) : ae(n) ? t.push(P_(n)) : Zt(n) && t.push({ insert: qs });
  }
  je(e) && (r.includes(e) || r.push(e));
}
function __(e, t, r, n, i) {
  if (!E(e) || Ie(e) || Qr(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = zt(e) !== void 0;
  if (O(e) && (o || Rg(e) || jc(e) || pg(e)) || se(e, ue) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Js(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && O(c) && c === s.getFirstChild() && a === Kt(s.getCaller()))
    return;
  const l = F(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(ba(e)));
  const d = a.startsWith(ql) || se(e, ue) === "attribute" || jc(e), u = !!l && a === Qt && l.getChildrenSize() === 1, f = va(e, n), p = f ? r.filter((g) => f.children.includes(g)) : r, m = Vc(e, p);
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
function v_(e, t, r, n, i, s, o) {
  F(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Di(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = q_(c), d = va(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function S_(e, t, r) {
  if (!K(e))
    return;
  const n = R_(e), i = va(e, r), s = {
    node: e,
    children: si(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function M_(e, t, r) {
  if (!Be(e))
    return;
  const n = $_(e), i = va(e, r), s = {
    node: e,
    children: si(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function vn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function E_(e) {
  const t = { style: As, code: e.__code };
  return vn(t, e), { insert: qs, attributes: { book: t } };
}
function A_(e) {
  const t = { style: Ro, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), vn(t, e), { insert: { chapter: t } };
}
function P_(e) {
  const t = { style: e.__marker };
  return vn(t, e), { insert: qs, attributes: { para: t } };
}
function N_(e) {
  const t = { style: qo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), vn(t, e), { insert: { verse: t } };
}
function w_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), vn(t, e), { insert: { milestone: t } };
}
function O_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function R_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), vn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = se(e, gn);
  return n && (r.attributes = { segment: n }), r;
}
function q_(e) {
  const t = { insert: "" }, r = qg([e]);
  return r && (t.attributes = { char: r }), t;
}
function $_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), vn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function va(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function I_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Di(t[r].node, e) && t.splice(r, 1);
}
function qg(e) {
  if (e.length === 0)
    return;
  const t = e.map(L_);
  return t.length === 1 ? t[0] : t;
}
function L_(e) {
  const t = { style: e.__marker }, r = se(e, Wn);
  return r && (t.cid = r), vn(t, e), t;
}
function gu(e) {
  let t = 0;
  for (const { node: r } of fa())
    if (K(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function D_(e) {
  let t = 0;
  for (const { node: r } of fa())
    if (K(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const $g = 1;
class cr extends Ws {
  __caller;
  __previewText;
  __onClick;
  constructor(t = vs, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new cr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => F_(t) ? {
        conversion: U_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return mu().updateFromJSON(t);
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => z_(t, n), (l) => K_(t, n, s, l), () => B_(t, n), () => j_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return A("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === vs && i ? (
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
function U_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: mu(t, r) };
}
function mu(e, t, r) {
  return Je(new cr(e, t, r));
}
function F_(e) {
  return e ? e.classList.contains(cr.getType()) : !1;
}
function yt(e) {
  return e instanceof cr;
}
function z_(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function K_(e, t, r, n) {
  e.update(() => {
    const i = ne(t);
    if (!K(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ne(r);
    if (!yt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function B_(e, t) {
  return e.getEditorState().read(() => {
    const r = ne(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return _a(r);
  });
}
function j_(e, t) {
  return e.getEditorState().read(() => gu(t));
}
const V_ = [
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
], W_ = ["†"];
function Sa(e) {
  if (Ig())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = sf(t), [s, o] = sf(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = of(n, i), [s, o] = of(s, o);
  const a = Bn();
  return a.anchor = ar(n.getKey(), i, af(n)), a.focus = ar(s.getKey(), o, af(s)), a;
}
function yu() {
  if (Ig())
    return;
  const e = N();
  if (!e || !P(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = zo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = zo(i, s);
  return { start: n, end: o };
}
function sf(e) {
  if (tk(e)) {
    const t = Lp(e.jsonPath);
    let r = Ue();
    for (let n = 0; n < t.length; n++) {
      if (!r || !I(r))
        return [void 0, void 0];
      const i = Hi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : _T(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && I(r) ? [r, vT(r, e.offset)] : [void 0, void 0];
  }
  if (rk(e) || nk(e)) {
    const t = cs(e.jsonPath);
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
  if (ik(e)) {
    const t = cs(e.jsonPath);
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
  if (sk(e)) {
    const t = cs(e.jsonPath);
    if (!t || !I(t))
      return [void 0, void 0];
    const r = rc(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (ok(e)) {
    const t = cs(e.jsonPath);
    if (!t || !I(t))
      return [void 0, void 0];
    const r = rc(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (ak(e)) {
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
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${ck(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function of(e, t) {
  if (!gr(e))
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
function rc(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (gr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function cs(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Lp(r);
  let i = Ue();
  for (const s of n) {
    if (!i || !I(i))
      return;
    const o = Hi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function zo(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = H_(e), i = n ? On(In(n)) : On(In(e));
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
    if (gr(r)) {
      const i = r.getTextContent().endsWith("*"), s = On(In(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Qh(e, t);
    return n.type === "text" ? {
      jsonPath: On([...In(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: On(In(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = CT(e, t);
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
function H_(e) {
  const t = e.getParent();
  if (!t || !I(t))
    return;
  const r = G_(e);
  return r && !je(r) && !E(r) && !Ce(r) ? r : t;
}
function G_(e) {
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
    const i = TT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Ig() {
  for (let e = Ue().getFirstChild(); e; e = e.getNextSibling())
    if (Rs(e))
      return !0;
  return !1;
}
function J_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Lg(e, t, r, n, i, s, o) {
  if (!Pe.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Sa(r) : N();
  if (!P(a))
    return;
  const c = Q_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? J_(e, s), d = Dg(e, l, c, i, s, void 0, void 0);
  return X_(d, a, i), d;
}
function bu(e) {
  return e !== "expanded";
}
function Y_(e) {
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
function X_(e, t, r) {
  const n = bu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || fT(t), au(t);
  const i = Y_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(F)?.selectEnd();
}
function bi(e, t, r) {
  const n = Br(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(mt(e)) : r?.markerMode === "visible" && n.append(Kr("marker", De(e)));
  const s = t === "" ? Qt : i ? D + t : t;
  return n.append(ye(s)), n;
}
function Q_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(bi("fr", f, n)), !e.isCollapsed()) {
        const p = lf(e);
        p.length > 0 && o.push(bi("fq", p, n));
      }
      o.push(bi("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(bi("xo", f, n)), !e.isCollapsed()) {
        const p = lf(e);
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
function Dg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : bu(n?.noteMode), l = Dl(e, t, c);
  s && St(l, gn, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = mt(e), d && u.setMode("token"), a || (f = mt(e, "closing"))) : n?.markerMode === "visible" && (u = Kr("marker", De(e) + " "), a || (f = Kr("marker", nt(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    p = ye(Kt(l.__caller)), d && p.setMode("token"), l.append(p, ...r);
  else {
    const m = () => Qs(), h = r.flatMap(ov(m));
    if (t === "")
      l.append(...h);
    else {
      const g = Wl(r);
      let b = () => {
      };
      i?.noteCallerOnClick && (b = i.noteCallerOnClick), p = mu(l.__caller, g, b), l.append(p, m(), ...h);
    }
  }
  return f && l.append(f), l;
}
function _r(e) {
  if (typeof e == "string") {
    const t = ne(e);
    return K(t) ? t : void 0;
  }
  return D_(e);
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
      Z_(i);
    else {
      const s = ku(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function ku(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return O(r) && r.getMarkerSyntax() === "closing" || gr(r) && r.getTextContent() === nt(e.getMarker()) ? t : -1;
}
function Z_(e) {
  const t = ku(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  E(r) && !Xs(r) ? r.selectEnd() : e.select(t, t);
}
function Ug(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (E(r) && !ro(r)) {
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
  if (!K(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Bn();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), zr(i), r && _n().dispatchCommand(Dt, void 0);
}
function cf(e, t, r) {
  const n = jr(e), i = ev(e, n);
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
function ev(e, t) {
  const r = [];
  for (const { node: n } of si(e))
    !E(n) || Ae(n, Le) || (Tu(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: ba(n) }) : tv(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function tv(e, t) {
  return Qr(e) ? !0 : O(e) && !t.is(e.getParent());
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
    if (E(s) && (t?.is(s) || Tu(s, t)))
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
      return rv(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function rv(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function nv(e, t, r) {
  const { opener: n, value: i, closer: s } = Xl(e);
  if (!i)
    return !1;
  const o = iv(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = jr(e);
    if (zg(c, t, r, Fg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function iv(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function Tu(e, t) {
  return !E(e) || Xs(e) || ro(e) ? !1 : !t || !e.is(t);
}
function sv(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(F))
    return;
  const t = jr(e);
  for (const { node: n } of si(e))
    if (Tu(n, t))
      return;
  const r = ku(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function ov(e) {
  return (t) => Ut(t) ? [t] : [t, e()];
}
function av(e) {
  const t = e.getParent();
  return t !== null && Ae(t, K) !== null;
}
function lf(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Al(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || yt(c) || av(c)) && !O(c) && !Qr(c) && se(c, ue) !== "attribute") {
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
const Cu = [
  cr,
  wt,
  ...FC
], cv = [
  Qi,
  ...Cu
], lv = Cn((e, t) => {
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
function uv() {
  const [e, t] = he(void 0), [r, n] = he(), i = Y(null), s = be((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Lk(l, c, () => {
      Dk(l, c, {
        placement: "bottom-start",
        middleware: [Uk(), Fk()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = be(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return B(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function dv({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = uv();
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
const fv = Jb(lv);
function Kg({ isOpen: e = !1, children: t }) {
  const r = Y(null), { coords: n, placement: i } = dv({ isOpen: e, floatingBoxRef: r }), s = He(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Fn(
    A(fv, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Bg = $p(void 0);
function _u() {
  const e = Ip(Bg);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function pv(e, t) {
  const [r, n] = he(0), [i, s] = he(-1), o = He(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = be(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = be(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = be(() => {
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
function hv({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = pv(t, r);
  return A(Bg.Provider, { value: i, children: A("div", { ...n, children: e }) });
}
const jg = Cn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = _u(), d = be((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = be((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return A("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function gv({ children: e, autoIndex: t = !0, ...r }) {
  const n = Y(null), { state: { activeIndex: i, menuItems: s } } = _u(), o = He(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = He(() => {
    const c = o(s);
    return t ? Yb.map(c, (l, d) => Xb(l) && l.type === jg && l.props.index === void 0 ? Qb(l, { index: d }) : l) : c;
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
const mv = (e, t, r) => Co(e, r).toLowerCase().includes(t.toLowerCase()), uf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Co = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function yv(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? uf(r[0]) : "") : (d = n || (r.length > 0 ? uf(r[0]) : ""), u = (m, h) => mv(m, h, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return u(m, t);
    } catch (h) {
      return console.warn("Error filtering item:", m, h), !1;
    }
  }).sort((m, h) => {
    const g = (_) => (p.has(_) || p.set(_, Co(_, f).toLowerCase()), p.get(_) ?? ""), b = a ? Co(m, f) : g(m), k = a ? Co(h, f) : g(h);
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
const nc = {
  Root: hv,
  Options: gv,
  Option: jg
};
function bv(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return He(() => yv({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function kv() {
  const { moveUp: e, moveDown: t, select: r } = _u();
  return He(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const xv = () => {
  const e = kv(), [t] = ce();
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
    return t.registerCommand(Or, r, Me);
  }, [t, e]);
};
function Tv() {
  return xv(), null;
}
const Cv = ["Shift", "Control", "Alt", "Meta"];
function Vg(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ce(), d = s !== void 0, [u, f] = he(""), p = d ? s ?? "" : u, m = bv({ query: p, items: t, filterBy: "name" }), h = (g) => {
    n?.(), r ? r(g) : g.action(l);
  };
  return B(() => {
    a?.(p, m);
  }, [a, p, m]), B(() => l.registerCommand(Or, (g) => {
    if (d || c?.includes(g.key) || Cv.includes(g.key))
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
  }, Me), [l, d, p, o, n, c]), Ee(nc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (g) => h(g), children: [!d && A("input", { value: p, type: "text", disabled: !0 }), A(Tv, {}), A(nc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (g) => g.map((k, _) => Ee(nc.Option, { index: _, children: [A("span", { className: "label", children: k.label ?? k.name }), A("span", { className: "description", children: k.description })] }, k.name)) })] });
}
function _v({ trigger: e, items: t }) {
  const [r] = ce(), [n, i] = he(!1), s = be((o) => {
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
function vv({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: He(() => {
    if (!t || !e)
      return;
    const i = Er(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = Er(o), { action: c } = r(o, a);
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
function Ts(e, t) {
  return `${e}:${t}`;
}
function Sv(e, t) {
  B(() => {
    if (!e.hasNodes([at]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Oe(Zp(e, at, (n) => Es(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], m = a[l]?.[u], h = c[l]?.[u];
          i.addID(l, u, f, p, m, h);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(at, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ne(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Ce(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!at.isReservedType(c))
              for (const d of l) {
                let u = t.get(Ts(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(Ts(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(Ts(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const Mv = Cn(function({ logger: t }, r) {
  const [n] = ce(), i = He(() => /* @__PURE__ */ new Map(), []);
  Sv(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Ts(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = ne(d);
        Ce(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && Oo(u));
      }
  };
  return aa(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (at.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Sa(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Ch(p, a, c, l, d, u, f);
      }, { tag: Pc });
    },
    removeAnnotation(o, a) {
      if (at.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Ts(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Pc });
    }
  })), null;
}), Ev = [];
function Av({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = Ev, onChange: n }) {
  const [i] = ce();
  return Vs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(Pl) && !d.has(lh) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = Pv(i, s);
        u.length !== 0 && n(o, i, d, u, l);
      });
  }, [i, e, t, r, n]), null;
}
function Pv(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new gs();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ne(i), o = s !== null && zt(s) !== void 0;
    if (t.size === 1 && E(s) && !o && x_(s)) {
      const a = pu(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = ne(i);
          return new gs([E(u) ? Vc(u) : { insert: "" }]);
        }), l = new gs([Vc(s)]), d = new gs(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = rf(r), c = rf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const vu = "formatted", Wg = "unformatted", Hg = "paragraph-structure", Su = "standard", Gg = "block-verse", Nv = {
  [vu]: "Formatted",
  [Wg]: "Unformatted",
  [Hg]: "Paragraph Structure",
  [Su]: "Standard",
  [Gg]: "Block Verse"
};
function Sn(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Mu, Eu;
function wv(e) {
  const t = Au(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Mu = e, Eu = t;
}
wv(vu);
const vw = () => Mu, Ui = () => Eu;
function Au(e) {
  let t;
  switch (e ?? Mu) {
    case vu:
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
    case Su:
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
function Sw(e) {
  if (!e)
    return;
  const t = df(e);
  return Object.keys(Nv).find((r) => It(df(Au(r)), t));
}
const Ov = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function df(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...Ov, ...t };
}
function no(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function Rv(e) {
  if (e)
    return $s(e) ? wt : e.markerMode === "editable" ? gt : wt;
}
function $s(e) {
  return e?.verseLayout === "block";
}
function qv(e) {
  const t = [], r = e ?? Eu;
  return r && (t.push(`${ex}${r.markerMode}`), r.hasSpacing && t.push(Qk), r.isFormattedFont && t.push(Zk)), t;
}
function $v(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += Iv(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), Dv(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += Uv(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), zv(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function Iv(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), Lv(t, e.retain, e.attributes, r, n)), e.retain);
}
function Lv(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ue();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Vr(d)) {
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
          if (mn(r)) {
            const k = h.getParent();
            if (F(k)) {
              const _ = r.char;
              let M;
              Array.isArray(_) ? a >= 0 && a <= _.length - 1 && (M = _[a]) : a === 0 && (M = _);
              const C = M ? Gn(M, k) : !1;
              if (C && Array.isArray(_) && _.length > 1) {
                const $ = ye("");
                h.replace($);
                const w = typeof r.segment == "string" ? r.segment : void 0, z = Zi(_.slice(1), n, h, w);
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
              const _ = ye("");
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
        if (mn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Hc(d, p.style), typeof p.cid == "string" && St(d, Wn, () => p.cid);
            const m = Ve(p, Fo);
            m && Object.keys(m).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...m
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || Yv(r.char)) && (u = !0);
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
    } else if (je(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Zt(d))
          pf(d, r);
        else if (Pu(r)) {
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
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Zi(t.char, r, e, i), o = s.find(F);
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
  O(r) ? (r.setMarker(t), r.setTextContent(De(t))) : Ut(r) && r.getTextType() === "marker" && r.setTextContent(De(t) + D);
}
function Hc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = F(e.getParent()), i = e.getFirstChild();
  Ut(i) && i.getTextType() === "marker" && i.getTextContent() === De(r, n) && i.setTextContent(De(t, n));
  const s = e.getLastChild();
  Ut(s) && s.getTextType() === "marker" && s.getTextContent() === nt(r, n) && s.setTextContent(nt(t, n));
}
function pf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && F(e) && mn(t)) {
      const i = Gc(n);
      if (Hc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        St(e, Wn, () => o);
      }
      const s = Ve(i, Fo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ge(e) || me(e) || Ze(e) || K(e) || Be(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Te(e) || ae(e) || F(e)) && (r === "style" && ae(e) ? Jg(e, n) : r === "style" && F(e) ? Hc(e, n) : r === "code" && Te(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && St(e, gn, () => n));
  }
}
function Dv(e, t, r) {
  if (t <= 0)
    return;
  const n = Ue();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Vr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Bt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (je(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && je(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Yt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && ct(p)) {
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
              Vr(b) ? m += b.getTextContentSize() : Bt(b) && (m += 1), i = k;
            }
            const g = p.getChildren();
            for (const b of g)
              b.remove(), a.append(b);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Yt(), !0);
        } else ae(a) ? a.replace(Yt(), !0) : a.remove();
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
function Uv(e, t, r, n, i) {
  if (t === qs)
    return hf(e, r, n, i);
  if (t.endsWith(qs) && !Pu(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (mn(r))
        throw new Error("Text + LF should not have char attributes");
      o += Ko(e, s, r, i);
    }
    return o += hf(e + o, r, n, i), o;
  } else return mn(r) ? Fv(e, t, r, n, i) : Ko(e, t, r, i);
}
function Fv(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ye(t === "" ? Qt : t);
  Vt(r, s);
  let o;
  {
    let g = function(b) {
      if (Vr(b)) {
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
        je(b) && (h += 1);
      }
      return !1;
    };
    const m = Ue();
    let h = 0;
    g(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && Gn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Gn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Zi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(F);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Ko(e, t, void 0, i);
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
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Ko(e, t, void 0, i));
}
function Ko(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ue();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Vr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = ye(t);
        if (Vt(r, u), d === 0)
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
    } else if (Bt(c))
      s += 1;
    else if (F(c)) {
      if (!o && e === s) {
        const u = ye(t);
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
        const u = ye(t);
        return Vt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (je(c)) {
      if (!o && e === s) {
        const u = ye(t);
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
        const u = ye(t);
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
    const c = ye(t);
    Vt(r, c);
    const l = Yt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Yg(e, t, r) {
  const n = Ue();
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
          if (ct(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Yt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Vr(l)) {
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
      } else if (je(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (Zt(d) && je(t) && // Target is at the ImpliedPara's implicit newline
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
      ct(a) ? Zt(a) && ae(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ct(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (F(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ct(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function zv(e, t, r, n, i) {
  let s;
  return dn("chapter", t) ? s = Bv(t.insert.chapter, r) : dn("verse", t) ? s = jv(t.insert.verse, r) : dn("ms", t) ? s = Vv(t.insert.ms) : dn("note", t) ? s = Qg(t, r, n) : dn("unknown", t) ? s = Zg(t, r, n, i) : dn("unmatched", t) && (s = Hv(t.insert.unmatched, r)), s ? Yg(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function hf(e, t, r, n) {
  let i;
  Pu(t) ? i = Xg(t.para, r) : Jv(t) && (i = Kv(t.book)), i ??= Yt();
  const s = i, o = ae(s), a = Zt(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Vr(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (ae(p) && (o || a)) {
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
    else if (je(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Zt(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (ae(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ae(u) && s)
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
  return d(Ue()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function Kv(e) {
  const { style: t, code: r } = e;
  if (!t || t !== As || !r || !Ft.isValidBookCode(r))
    return;
  const n = Ve(e, a_);
  return Eh(r, n);
}
function Xg(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ve(e, o_), i = Hn(r, n);
  if (!Sn(t))
    return i;
  if (t.markerMode === "editable")
    i.append(mt(r), Qs());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = De(r) + D;
    i.append(t.hasGutterParaMarkers ? Ex(s) : Kr("marker", s));
  }
  return i;
}
function Bv(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ve(e, c_);
  let a;
  if (t.markerMode === "editable")
    a = Ph(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Bl(r, c, n, i, s, o);
  }
  return a;
}
function jv(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ve(e, l_);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Xt(r, n);
    c = Uh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = lu(n, l, i, s, o, a);
  }
  return c;
}
function Vv(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ve(e, u_);
  return fh(t, r, n, s, i);
}
function Qg(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = Ve(n.note, d_), l = typeof c?.closed == "string" ? c.closed : void 0, d = e.attributes?.segment;
  let u;
  d && typeof d == "string" && (u = d);
  const f = [];
  for (const m of a?.ops ?? [])
    if (typeof m.insert == "string")
      if (mn(m.attributes)) {
        const h = Zi(m.attributes.char, t, ye(m.insert), void 0, em(m.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...h);
      } else
        f.push(ye(m.insert));
  return Dg(i, s, f, t, r, u, l).setCategory(o).setUnknownAttributes(c);
}
function Zg(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ve(i, f_), l = zl(s, o, c), d = a?.ops ?? [];
  d.length > 0 && Wv(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && St(l, gn, () => u), l;
}
function Wv(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (mn(s.attributes)) {
        const o = ye(s.insert), a = Zi(s.attributes.char, t, o, void 0, em(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ye(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (dn("unknown", s)) {
        const o = Zg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (dn("note", s)) {
        const o = Qg(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function Hv(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = iu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function em(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Gc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Zi(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(Qt);
  const a = () => {
    o && E(r) && r.getTextContent() !== Qt && r.setTextContent(D + r.getTextContent());
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
    const u = c.reduceRight((f, p, m) => {
      const h = Br(p.style, Ve(p, Fo));
      return typeof p.cid == "string" && St(h, Wn, () => p.cid), n && m === c.length - 1 && St(h, gn, () => n), f && (F(f) && (oc(f.getMarker(), f, t, !0), sc(f, f, t, !0)), h.append(f)), h;
    }, r);
    return oc(l.style, u, t, s), sc(u, u, t, s), [u];
  } else {
    const c = Gc(e), l = i?.[i.length - 1];
    if (F(l) && Gn(c, l))
      return r && ic(l, [r]), [];
    a();
    const d = Br(c.style, Ve(c, Fo));
    return typeof c.cid == "string" && St(d, Wn, () => c.cid), n && St(d, gn, () => n), r && d.append(r), oc(c.style, d, t, s), sc(d, d, t, s), [d];
  }
}
function ic(e, t) {
  const r = e.getLastChild();
  O(r) && r.getMarkerSyntax() === "closing" || Ut(r) && r.getTextType() === "marker" && r.getTextContent() === nt(e.getMarker(), F(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function sc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && Gv(e.getMarker(), t, r, !1, n);
}
function oc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = mt(e, "opening", n) : r?.markerMode === "visible" && (i = Kr("marker", De(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function Gv(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = mt("", "selfClosing") : s = mt(e, "closing", i) : r?.markerMode === "visible" && (s = Kr("marker", n ? nt("") : nt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function Jv(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Pu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function mn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function Yv(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Vt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        St(t, gn, () => n);
        continue;
      }
      if (Xv(r)) {
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
function Xv(e) {
  return tm.includes(e);
}
function Fi(e) {
  return Ut(e) && Te(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function rm(e) {
  const t = eo(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function Nu(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(zp(r) && t.offset === 0 || Te(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Fi);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Te(s))
    return !1;
  const o = rm(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function _o(e) {
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
    const n = e ? Bh(t) : Vl(t);
    return Fi(n);
  }
  return Nu(t) && t.isCollapsed();
}
function Qv(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = Ae(t.anchor.getNode(), Te);
  if (!r || !Fi(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return _o(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Fi)) {
    const n = rm(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function go() {
  const e = N();
  return P(e) && Nu(e), !1;
}
function Zv() {
  const e = N();
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !Te(r) || !Fi(r.getFirstChild()) ? !1 : (er(r, 1), !0);
}
function eS(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => gr(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function tS() {
  const [e] = ce();
  return B(() => e.registerCommand(ua, (t) => (rS(t), !1), jn), [e]), B(() => Oe(
    e.registerCommand(da, _o, Me),
    e.registerCommand(Nl, _o, Me),
    e.registerCommand(Ao, _o, Me),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(Ao, Qv, Mr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(wi, go, ke),
    e.registerCommand(Gt, go, ke),
    e.registerCommand(dr, go, ke),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Up, go, ke)
  ), [e]), B(() => Oe(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(Dt, () => (Zv(), !1), Me),
    e.registerNodeTransform(Ft, eS)
  ), [e]), null;
}
function rS(e) {
  if (nS(e.target))
    return;
  const t = N();
  P(t) && iS(t);
}
function es(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Nt(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === D && (r++, t = t.getNextSibling());
    else if (me(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (er(e, r), !0);
}
function nS(e) {
  if (!Fp(e))
    return !1;
  const t = Wi(e);
  if (!Ax(t))
    return !1;
  const r = t.getParent();
  return r ? ct(r) ? es(r) : (er(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function iS(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ne(t.key);
  if (!je(r))
    return !1;
  const n = r.getFirstChild();
  return !gr(n) && !ci(n) ? !1 : es(r);
}
function sS() {
  const [e] = ce();
  return B(() => {
    const t = (r) => r instanceof KeyboardEvent && !oS(r) || !Is() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Oe(
      e.registerCommand(Or, t, Me),
      e.registerCommand(wi, t, Me),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(Gt, t, ke),
      e.registerCommand(dr, t, ke),
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
      }, Me),
      e.registerCommand(da, t, Me),
      e.registerCommand(Nl, t, Me),
      e.registerCommand(Ao, t, Me)
    );
  }, [e]), null;
}
function oS(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function yn(e) {
  return Ae(e, wu) ?? void 0;
}
function wu(e) {
  return Be(e) || bg(e);
}
function Is() {
  const e = N();
  return P(e) ? yn(e.anchor.getNode()) !== void 0 || yn(e.focus.getNode()) !== void 0 : !1;
}
function aS(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function cS(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), aS(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function lS(e, t, r, n) {
  if (!_S(t) || cS(e, r))
    return !1;
  const i = r === "up" ? s_(t) : i_(t);
  return i && n.preventDefault(), i;
}
function uS({ viewOptions: e }) {
  const [t] = ce();
  return dS(t, e), null;
}
function dS(e, t) {
  B(() => {
    if (!e.hasNodes([qr, wt, Pe]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = gf(o), u = bS(i, mf(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return lS(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = gf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return mf(a, n.key) ? l = !c && kf(i, "next") || !c && pS(i) || TS(i) || !c && s && bf(i, "next") : fS(a, n.key) && (l = !c && kf(i, "previous") || !c && hS(i) || CS(i, t) || !c && s && bf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Or, r, Me);
  }, [e, t]);
}
function gf(e) {
  return e.dir || "ltr";
}
function mf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function fS(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Jc(e) {
  if (!F(e) || e.getMarker() !== "fp")
    return;
  const t = zt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function pS(e) {
  const t = Jc(Vl(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (er(t, 0), !0);
}
function hS(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Jc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : yf(n);
  }
  if (t.offset === 0) {
    const n = Jc(r);
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
const Bo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function gS(e) {
  if (Bo)
    for (const { segment: r } of Bo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function mS(e) {
  if (Bo) {
    let n = 0;
    for (const { index: i } of Bo.segment(e))
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
  return !!e && O(e) && yn(e) !== void 0;
}
function zi(e) {
  return E(e) && !e.isToken() && !im(e) && e.getTextContentSize() > 0;
}
function sm(e) {
  return ni(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || im(e)) && e.getTextContentSize() > 0 : ii(e) ? !Ze(e) : !1;
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
    if (sm(n))
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
function Ou(e, t, r, n, i) {
  return r === "element" && I(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Ki(e, n, i) : r === "text" && sm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Ki(e, n, i);
}
function ac(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Ou(e.node, e.offset, e.kind, "previous", t), n = Ma(r, "previous", t);
  if (!n)
    return e;
  if (zi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function yS(e, t) {
  const r = e.getNode(), n = nm(r);
  if (!n)
    return;
  if (e.type === "text" && zi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ac({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Ou(r, e.offset, e.type, t, n), s = Ma(i, t, n);
  if (!s)
    return;
  if (zi(s)) {
    const c = s.getTextContent(), l = t === "next" ? gS(c) : mS(c);
    return ac({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ac({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function om(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = yS(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && I(i.node) ? xu(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function bf(e, t) {
  return om(e, t, "collapse");
}
function bS(e, t) {
  return om(e, t, "extend");
}
function kS(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && zi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Ou(n, e.offset, e.type, t, r);
  return Ma(i, t, r) === void 0;
}
function xS(e, t) {
  const r = Ue();
  for (let n = e; n; ) {
    const i = Ki(n, t, r), s = i && Ma(i, t, r);
    if (!s)
      return;
    if (n = yn(s), !n)
      return s;
  }
}
function kf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (yn(n))
    return !1;
  const i = nm(n);
  if (!i || !kS(r, t, i))
    return !1;
  const s = Ki(i, t, Ue()), o = s && yn(s);
  if (!o)
    return !1;
  const a = xS(o, t);
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
function xf(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  xu(t, r);
}
function TS(e) {
  const t = e.anchor.getNode(), r = Vl(e);
  if (K(r) && !O(r.getFirstChild())) {
    if (je(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(ct(i) && es(i)) && i.selectStart(), !0;
      }
    } else return Ut(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (je(t) && K(r) && r.getIsCollapsed()) {
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
function CS(e, t) {
  const r = Bh(e);
  if (Gs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && Fi(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Te(o) && !r)
    return !0;
  if (K(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!ci(c) && !Te(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const d = r.getIndexWithinParent();
    return l.select(d, d), !0;
  }
  if (je(r) && t?.noteMode === "collapsed") {
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
  if (yt(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function _S(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return me(t) && ii(t);
}
function vS() {
  const [e] = ce();
  return SS(e), null;
}
function SS(e) {
  B(() => {
    if (!e.hasNodes([xe]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Oe(
      e.registerNodeTransform(xe, AS),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(xe, wT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(xe, ag),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(xe, (t) => Os(Jn("char"), t)),
      e.registerNodeTransform(qe, PS)
    );
  }, [e]);
}
function cc(e) {
  return e.getChildren().some(O);
}
function MS(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Ji(n)) {
    const i = n.getTextContent();
    i.startsWith(D) && (i === D ? n.remove() : n.setTextContent(i.slice(D.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function ES(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function AS(e) {
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
  const r = se(e, Wn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (F(i) && Gn({ style: t, cid: r }, i) && It(n, i.getUnknownAttributes()))
    if (cc(i)) {
      if (MS(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  F(s) && Gn({ style: t, cid: r }, s) && It(n, s.getUnknownAttributes()) && (cc(s) ? ES(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function PS(e) {
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
  return Oe(e.registerCommand(Oi, t, kt), e.registerCommand(dr, t, kt));
}
const Ru = (e) => {
  e.dispatchCommand(Oi, null);
}, qu = (e) => {
  e.dispatchCommand(dr, null);
}, $u = (e) => {
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
}, Iu = (e) => {
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
function NS() {
  const [e] = ce();
  return B(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Ri ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Ru(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), qu(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Iu(e) : $u(e)));
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
function wS({ logger: e }) {
  const [t] = ce();
  return B(() => Oe(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Or, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Mr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Gt, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Mr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(wl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Mr)
  ), [t, e]), null;
}
const jo = "editor-context-menu";
function Yc(e) {
  return `${jo}-item-${e}`;
}
const OS = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function RS({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), A("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: Yc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: A("span", { className: "text", children: i.title }) });
}
function qS({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return A("div", { className: "typeahead-popover", children: A("ul", { id: jo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => A(RS, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let $S = 0;
class ls {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${$S++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function IS({ options: e } = {}) {
  const [t] = ce(), [r, n] = he(() => !t.isEditable()), [i, s] = he({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = he(void 0), c = He(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new ls("Cut", {
        onSelect: () => {
          qu(t);
        },
        isDisabled: r
      }),
      new ls("Copy", {
        onSelect: () => {
          Ru(t);
        }
      }),
      new ls("Paste", {
        onSelect: () => {
          $u(t);
        },
        isDisabled: r
      }),
      new ls("Paste as Plain Text", {
        onSelect: () => {
          Iu(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((m) => new ls(m.title, { onSelect: m.onSelect, isDisabled: m.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = Y(null), d = Y(null), u = be(() => {
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
          if (OS.has(p.key))
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
      return f.setAttribute("aria-controls", jo), () => {
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
    f.setAttribute("aria-activedescendant", Yc(o));
    const p = document.getElementById(jo), m = document.getElementById(Yc(o));
    if (!p || !m)
      return;
    const h = p.getBoundingClientRect(), g = m.getBoundingClientRect(), b = g.top - h.top + p.scrollTop, k = g.bottom - h.top + p.scrollTop;
    b < p.scrollTop ? p.scrollTop = b : k > p.scrollTop + p.clientHeight && (p.scrollTop = k - p.clientHeight);
  }, [t, i.isOpen, o]), B(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), Vs(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: m } = f.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - m));
    f.style.left = `${h}px`, f.style.top = `${g}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Ok.createPortal(A("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: A(qS, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), u());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function LS(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function DS(e) {
  if (!fk(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function US(e) {
  return yt(e);
}
function lc(e, t, r) {
  const n = Wi(t.node);
  if (!ii(n) || US(n))
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
function FS(e, t) {
  if (N())
    return !1;
  const r = e.getRootElement(), n = dk(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Kp(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let d, u;
  if (n.isCollapsed)
    d = lc(e, c, DS(c)), u = d;
  else {
    const g = LS(n.getRangeAt(0), c);
    d = lc(e, c, g ? "before" : "after"), u = lc(e, l, g ? "after" : "before");
  }
  if (!d && !u)
    return !1;
  const f = d ?? c, p = u ?? l, m = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, h = Bp(m, e);
  return h ? (zr(h), h.dirty = !t, t) : !1;
}
function zS() {
  const [e] = ce(), t = Y(!1), r = Y(!1);
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
  }, [e]), B(() => e.registerCommand(Dt, () => (FS(e, t.current) && (r.current = !0), !1), ke), [e]), null;
}
function KS() {
  const [e] = ce();
  return B(() => e.registerCommand(Or, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ri ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, ke), [e]), null;
}
function BS({ isEditable: e }) {
  const [t] = ce();
  return Vs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function um(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Fr(e, ...t) {
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
    const i = N();
    if (!P(i))
      return !1;
    const s = Bp(r, e);
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
function Tf(e) {
  return !!e && Ys(ne(e));
}
function Lu(e) {
  const [t] = ce(), r = Y(void 0), n = be((i) => {
    const s = N(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Tf(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = eo(d, u), p = Ys(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const m = sT();
        i.insertAfter(m), r.current = m.getKey(), l = m.getKey();
      }
      er(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = ne(a);
      E(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return B(() => {
    const i = () => {
      const a = e(), c = N(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (vt(Mt), Fr(t, Mt), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Js(c) || !c.includes(qi))
        return;
      const l = N(), d = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (oT(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(qi).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = Oe(t.registerCommand(Dt, () => (i(), !1), jn), t.registerCommand(Ol, () => {
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
    }, jn), t.registerNodeTransform(qe, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function jS() {
  const e = N();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = K(r) ? r : r.getParent();
  if (!K(n))
    return;
  const i = sv(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && Ys(s); )
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
function VS() {
  return Lu(jS), null;
}
function WS() {
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
  if (!me(i) || eo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || me(s))
    return i;
}
function HS() {
  return Lu(WS), null;
}
function GS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ce();
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
          d || vt(Lr), o.setEditorState(l), o.dispatchCommand(pk, void 0);
        }, { tag: $l });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const dc = "caller_highlight", JS = Cn(function(t, r) {
  const [n] = ce(), i = Y(void 0), s = Y(void 0), o = be(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const d = _r(a);
      return d ? (d.getChildren().find(yt) ?? jr(d))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(dc), l?.classList.add(dc), s.current = l;
  }, [n]);
  return aa(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Ci(n, () => _r(a)?.getKey()), o();
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
      const u = l.has($l) ? void 0 : c.read(() => gu(d)), f = u === void 0 ? void 0 : n.getEditorState().read(() => _r(u)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), B(() => () => s.current?.classList.remove(dc), []), null;
});
function YS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ce();
  return XS(t, n), QS(i, e, r, n), null;
}
function XS(e, t) {
  const r = Y(void 0), n = Y(void 0), i = e.noteCallers, s = e.crossRefCallers;
  B(() => {
    let o = i;
    (!o || o.length <= 0) && (o = V_), r.current !== o && (r.current = o, Cf("note-callers", o, t));
  }, [t, i]), B(() => {
    let o = s;
    (!o || o.length <= 0) && (o = W_), n.current !== o && (n.current = o, Cf("cross-ref-callers", o, t));
  }, [t, s]);
}
function QS(e, t, r, n) {
  B(() => {
    if (!e.hasNodes([xe, Pe, cr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => sM(s));
    return Oe(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Pe, (s) => ZS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(xe, eM),
      e.registerNodeTransform(qe, tM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(cr, rM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(cr, (s, { prevEditorState: o }) => nM(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Dt, () => iM(e, t, r, n), kt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function ZS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => yt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !O(i) && i.getTextContent() !== Kt(e.getCaller()) && e.insertBefore(i);
  }
}
function eM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => yt(s));
  if (!F(e) || !K(t) || !n)
    return;
  const i = Wl(r);
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
    if ($r(t)) {
      t.setTextContent(D);
      return;
    }
  }
  e.insertAfter(Qs());
}
function tM(e) {
  const t = zt(e), r = t?.getChildren(), n = r?.find((a) => yt(a));
  if (!E(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent(), s = $r(e) || dm(e);
  if (!O(e) && K(i) && s && e.getTextContent() !== D && (e.setTextContent(D), e.selectEnd()), F(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(Qt) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = Wl(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function rM(e) {
  yt(e) && fm(e);
}
function nM(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ne(r), a = o?.getParent();
      return yt(o) && K(a) && a.getCaller() === vs;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function iM(e, t, r, n) {
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
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), us(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, us(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, us(e, c, n);
    } else if (!a) {
      const c = Ae(o, (l) => K(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      je(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, us(e, l, n);
      }
    }
  }
  if (ct(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (ci(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, us(e, l, n);
    }
  }
  return !1;
}
function us(e, t, r) {
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
function sM(e) {
  const t = N();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && E(s)) {
    e.preventDefault();
    const o = Bn();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), zr(o);
  }
}
function Cf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (oM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function oM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Ar(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = jr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function aM(e) {
  const t = e.getParent();
  if (K(t))
    return Ar(t).some((r) => r.is(e)) ? t : void 0;
}
function Qn(e) {
  const t = Ar(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function cM(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function lM(e) {
  const t = hk();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= Qn(e);
  const i = cM(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= Qn(e);
}
function Si(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = aM(t);
  if (r)
    return pm(r, t, e.offset) ? void 0 : r;
}
function pm(e, t, r) {
  const n = Ar(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function uM(e) {
  const t = Ar(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : er(e, Qn(e));
}
function dM(e = !1) {
  const t = N();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return ym(t);
  const r = hm(t.anchor);
  if (r) {
    const i = Wo(r);
    return t.anchor.is(i) ? !1 : (gm(t, i), !0);
  }
  const n = Si(t.anchor);
  if (!n)
    return !1;
  if (!e && lM(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    er(i, n.getIndexWithinParent());
  } else
    uM(n);
  return !0;
}
function Vo(e) {
  const t = Ar(e), r = t[t.length - 1];
  return E(r) ? ar(r.getKey(), r.getTextContentSize(), "text") : ar(e.getKey(), Qn(e), "element");
}
function Bi(e) {
  const t = e.getLastChild();
  return O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function fc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === Bi(e) && O(r) && t.offset > 0;
}
function Xc(e) {
  const t = Bi(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Wo(e) {
  const t = Bi(e);
  if (t > Qn(e)) {
    const r = e.getChildAtIndex(t - 1), n = I(r) ? r.getLastDescendant() : r;
    if (E(n))
      return ar(n.getKey(), n.getTextContentSize(), "text");
  }
  return Vo(e);
}
function hm(e) {
  const t = e.getNode(), r = t.getParent();
  if (K(r) && Ar(r).length > 0 && Xc(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (K(t) && Ar(t).length > 0 && Xc(t))
    return e.offset > Bi(t) || e.offset === Bi(t) && e.offset > Qn(t) ? t : void 0;
  if (!I(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return K(n) && Ar(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function gm(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function mm(e) {
  const t = zt(e);
  return t && Ar(t).length > 0 ? t : void 0;
}
function fM(e) {
  const t = [], r = (n) => {
    const i = mm(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function ym(e) {
  const t = fM(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => ar(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const d = ar(l.getKey(), Qn(l), "element"), u = ar(l.getKey(), Bi(l), "element"), f = i.type === "text" && pm(l, i.getNode(), i.offset), p = i.isBefore(d) && !f;
    (Si(i) || fc(l, i) || p) && (!s.isBefore(d) || Si(s)) && (i = fc(l, i) ? Wo(l) : Vo(l), o = !0), (Si(s) || fc(l, s) || u.isBefore(s)) && (i.isBefore(u) || i.is(u)) && (s = Si(s) ? Vo(l) : Wo(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function _f(e, t) {
  const r = Bn();
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
function pM(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return I(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function hM(e, t, r, n) {
  const i = t.anchor, s = hm(i);
  if (s)
    return gm(t, Wo(s)), !0;
  const o = mm(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const u = pM(t.focus);
    return K(u) && Ar(u).length > 0;
  }
  if (Si(i))
    return !0;
  const a = Vo(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const u = _f(a, i);
    return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && Sf(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = Xc(o);
  if (!c)
    return !1;
  const l = ar(c.getKey(), 0, "text"), d = _f(i, l);
  return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && Sf(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function gM() {
  const [e] = ce(), t = Y(!1);
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
      return P(c) ? c.isCollapsed() ? hM(e, c, a, o) : i() : !1;
    };
    return Oe(e.registerCommand(wi, n, ke), e.registerCommand(Gt, n, ke), e.registerCommand(Mi, n, ke), e.registerCommand(jp, n, ke), e.registerCommand(da, s("character"), ke), e.registerCommand(Nl, s("word"), ke), e.registerCommand(Ao, s("line"), ke), e.registerCommand(Up, i, ke), e.registerCommand(dr, i, ke));
  }, [e]), B(() => e.registerCommand(Dt, () => (dM(t.current) && (vt(Mt), Fr(e, Mt)), !1), jn), [e]), null;
}
function mM({ onChange: e }) {
  const [t] = ce();
  return B(() => t.registerCommand(Dt, () => {
    const r = yu();
    return e?.(r), !1;
  }, kt), [t, e]), null;
}
function yM() {
  const [e] = ce();
  return bM(e), null;
}
function bM(e) {
  B(() => {
    if (!e.hasNodes([it]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(it, (t) => kM(t, e));
  }, [e]);
}
function kM(e, t) {
  Bc(t, e.getKey()) && wg(e.getFirstChild()), !(!ae(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ne(e.getKey());
    return ae(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function bm({ onStateChange: e }) {
  const [t] = ce(), [r, n] = he(t), i = Y(!1), s = Y(!1), o = Y(void 0), a = Y(void 0), c = be(() => {
    const l = N();
    let d;
    if (P(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : Ae(u, (b) => {
        const k = b.getParent();
        return k !== null && gk(k);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Rs(p) && (p = Ae(u, ae) ?? p);
      const m = p.getKey(), h = r.getElementByKey(m), g = dT(u, f);
      if (g && n_(g) && (d = g.getMarker()), h !== null && (ae(p) || Te(p) || Gs(p))) {
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
  }), r.registerCommand(mk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ke), r.registerCommand(yk, (l) => (s.current = l, e?.({
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
function bn(e) {
  return e ? je(e) ? e : Ae(e, (r) => je(r)) ?? void 0 : void 0;
}
function xm(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = bn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Du(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !la(e) ? !1 : e.getNodes().some((t) => me(t));
}
function Tm(e) {
  if (!P(e) || !e.isCollapsed())
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
function Cm(e) {
  if (!P(e) || !e.isCollapsed())
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
function Mf(e, t) {
  return !!Qc(e, t);
}
function Qc(e, t) {
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
function Ho(e, t) {
  if (!P(e))
    return !1;
  const r = bn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Pi(e) {
  return Du(e) || xm(e);
}
function _m(e, t) {
  if (Du(e) || xm(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Tm(e) && Ho(e, "backward") || Mf(e, "backward");
    case "deleteForward":
      return Cm(e) && Ho(e, "forward") || Mf(e, "forward");
    case "insertText":
      return !1;
  }
}
function xM(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Qc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Tm(e) && Ho(e, "backward")) {
        const n = bn(e.anchor.getNode());
        if (ct(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Qc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Cm(e) && Ho(e, "forward")) {
        const i = bn(e.anchor.getNode())?.getNextSibling();
        if (ct(i))
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
    return la(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!P(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!P(e) || e.isCollapsed())
    return !1;
  const r = bn(e.anchor.getNode()), n = bn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function vm(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else I(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function TM(e) {
  const t = e.getPreviousSibling();
  if (!je(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = Nt(n), s = e.getChildren().filter((o) => !$r(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? vm(r) : es(t) || t.selectStart();
}
function Sm(e) {
  return me(e) || Ge(e) ? [] : ct(e) ? e.getChildren().flatMap(Sm) : [e];
}
function CM(e) {
  const t = [];
  for (const r of e) {
    const n = Sm(r);
    n.length !== 0 && (ct(r) && t.length > 0 && t.push(ye(" ")), t.push(...n));
  }
  return t;
}
function Af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _M(e) {
  if (Array.isArray(e)) return e;
}
function vM(e, t) {
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
function SM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MM(e, t) {
  return _M(e) || vM(e, t) || EM(e, t) || SM();
}
function EM(e, t) {
  if (e) {
    if (typeof e == "string") return Af(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Af(e, t) : void 0;
  }
}
const Mm = Object.entries, Pf = Object.setPrototypeOf, AM = Object.isFrozen, PM = Object.getPrototypeOf, NM = Object.getOwnPropertyDescriptor;
let ut = Object.freeze, ft = Object.seal, _i = Object.create, Em = typeof Reflect < "u" && Reflect, Zc = Em.apply, el = Em.construct;
ut || (ut = function(t) {
  return t;
});
ft || (ft = function(t) {
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
const ki = tt(Array.prototype.forEach), wM = tt(Array.prototype.lastIndexOf), Nf = tt(Array.prototype.pop), xi = tt(Array.prototype.push), OM = tt(Array.prototype.splice), fn = Array.isArray, ms = tt(String.prototype.toLowerCase), pc = tt(String.prototype.toString), wf = tt(String.prototype.match), ds = tt(String.prototype.replace), Of = tt(String.prototype.indexOf), RM = tt(String.prototype.trim), qM = tt(Number.prototype.toString), $M = tt(Boolean.prototype.toString), Rf = typeof BigInt > "u" ? null : tt(BigInt.prototype.toString), qf = typeof Symbol > "u" ? null : tt(Symbol.prototype.toString), ot = tt(Object.prototype.hasOwnProperty), fs = tt(Object.prototype.toString), st = tt(RegExp.prototype.test), Ln = IM(TypeError);
function tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Zc(e, t, n);
  };
}
function IM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return el(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ms;
  if (Pf && Pf(e, null), !fn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (AM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function LM(e) {
  for (let t = 0; t < e.length; t++)
    ot(e, t) || (e[t] = null);
  return e;
}
function ht(e) {
  const t = _i(null);
  for (const n of Mm(e)) {
    var r = MM(n, 2);
    const i = r[0], s = r[1];
    ot(e, i) && (fn(s) ? t[i] = LM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ht(s) : t[i] = s);
  }
  return t;
}
function DM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return qM(e);
    case "boolean":
      return $M(e);
    case "bigint":
      return Rf ? Rf(e) : "0";
    case "symbol":
      return qf ? qf(e) : "Symbol()";
    case "undefined":
      return fs(e);
    case "function":
    case "object": {
      if (e === null)
        return fs(e);
      const t = e, r = ir(t, "toString");
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
function ir(e, t) {
  for (; e !== null; ) {
    const n = NM(e, t);
    if (n) {
      if (n.get)
        return tt(n.get);
      if (typeof n.value == "function")
        return tt(n.value);
    }
    e = PM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function UM(e) {
  try {
    return st(e, ""), !0;
  } catch {
    return !1;
  }
}
const $f = ut(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), hc = ut(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gc = ut(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), FM = ut(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), mc = ut(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), zM = ut(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), If = ut(["#text"]), Lf = ut(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), yc = ut(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Df = ut(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), mo = ut(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), KM = ft(/{{[\w\W]*|^[\w\W]*}}/g), BM = ft(/<%[\w\W]*|^[\w\W]*%>/g), jM = ft(/\${[\w\W]*/g), VM = ft(/^data-[\-\w.\u00B7-\uFFFF]+$/), WM = ft(/^aria-[\-\w]+$/), Uf = ft(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), HM = ft(/^(?:\w+script|data):/i), GM = ft(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), JM = ft(/^html$/i), YM = ft(/^[a-z][.\w]*(-[.\w]+)+$/i), Ff = ft(/<[/\w!]/g), zf = ft(/<[/\w]/g), XM = ft(/<\/no(script|embed|frames)/i), QM = ft(/\/>/i), $t = {
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
}, ZM = function() {
  return typeof window > "u" ? null : window;
}, eE = function(t, r) {
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
}, un = function(t, r, n, i) {
  return ot(t, r) && fn(t[r]) ? ge(i.base ? ht(i.base) : {}, t[r], i.transform) : n;
};
function Am() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ZM();
  const t = (j) => Am(j);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== $t.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = ir(f, "cloneNode"), m = ir(f, "remove"), h = ir(f, "nextSibling"), g = ir(f, "childNodes"), b = ir(f, "parentNode"), k = ir(f, "shadowRoot"), _ = ir(f, "attributes"), M = o && o.prototype ? ir(o.prototype, "nodeType") : null, C = o && o.prototype ? ir(o.prototype, "nodeName") : null, $ = o && o.prototype ? ir(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const j = r.createElement("template");
    j.content && j.content.ownerDocument && (r = j.content.ownerDocument);
  }
  let w, z = "", v, V = !1, H = 0;
  const fe = function() {
    if (H > 0)
      throw Ln('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Q = function(y) {
    fe(), H++;
    try {
      return w.createHTML(y);
    } finally {
      H--;
    }
  }, Fe = function(y) {
    fe(), H++;
    try {
      return w.createScriptURL(y);
    } finally {
      H--;
    }
  }, _e = function() {
    return V || (v = eE(u, i), V = !0), v;
  }, yr = r, We = yr.implementation, en = yr.createNodeIterator, tn = yr.createDocumentFragment, Mn = yr.getElementsByTagName, ee = n.importNode;
  let R = Kf();
  t.isSupported = typeof Mm == "function" && typeof b == "function" && We && We.createHTMLDocument !== void 0;
  const te = KM, le = BM, Ne = jM, lt = VM, Z = WM, Ye = HM, br = GM, ts = YM;
  let rn = Uf, ie = null;
  const pt = ge({}, [...$f, ...hc, ...gc, ...mc, ...If]);
  let pe = null;
  const li = ge({}, [...Lf, ...yc, ...Df, ...mo]);
  let ve = Object.seal(_i(null, {
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
  const rr = Object.seal(_i(null, {
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
  let nn = !0, sn = !0, io = !1, on = !0, Rt = !1, nr = !0, kr = !1, rs = !1, An = null, q = null, L = !1, W = !1, G = !1, de = !1, Xe = !0, Re = !1;
  const Qe = "user-content-";
  let qt = !0, Pn = !1, Ir = {}, rt = null;
  const ns = ge({}, [
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
  const Nn = ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ia = null;
  const ad = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), oo = "http://www.w3.org/1998/Math/MathML", ao = "http://www.w3.org/2000/svg", xr = "http://www.w3.org/1999/xhtml";
  let di = xr, La = !1, Da = null;
  const Rb = ge({}, [oo, ao, xr], pc), cd = ut(["mi", "mo", "mn", "ms", "mtext"]);
  let Ua = ge({}, cd);
  const ld = ut(["annotation-xml"]);
  let Fa = ge({}, ld);
  const qb = ge({}, ["title", "style", "font", "a", "script"]);
  let is = null;
  const $b = ["application/xhtml+xml", "text/html"], Ib = "text/html";
  let ze = null, fi = null;
  const Lb = r.createElement("form"), ud = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, za = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (fi && fi === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = ht(y), is = // eslint-disable-next-line unicorn/prefer-includes
    $b.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Ib : y.PARSER_MEDIA_TYPE, ze = is === "application/xhtml+xml" ? pc : ms, ie = un(y, "ALLOWED_TAGS", pt, {
      transform: ze
    }), pe = un(y, "ALLOWED_ATTR", li, {
      transform: ze
    }), Da = un(y, "ALLOWED_NAMESPACES", Rb, {
      transform: pc
    }), Ia = un(y, "ADD_URI_SAFE_ATTR", ad, {
      transform: ze,
      base: ad
    }), so = un(y, "ADD_DATA_URI_TAGS", Nn, {
      transform: ze,
      base: Nn
    }), rt = un(y, "FORBID_CONTENTS", ns, {
      transform: ze
    }), En = un(y, "FORBID_TAGS", ht({}), {
      transform: ze
    }), ui = un(y, "FORBID_ATTR", ht({}), {
      transform: ze
    }), Ir = ot(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? ht(y.USE_PROFILES) : y.USE_PROFILES : !1, nn = y.ALLOW_ARIA_ATTR !== !1, sn = y.ALLOW_DATA_ATTR !== !1, io = y.ALLOW_UNKNOWN_PROTOCOLS || !1, on = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Rt = y.SAFE_FOR_TEMPLATES || !1, nr = y.SAFE_FOR_XML !== !1, kr = y.WHOLE_DOCUMENT || !1, W = y.RETURN_DOM || !1, G = y.RETURN_DOM_FRAGMENT || !1, de = y.RETURN_TRUSTED_TYPE || !1, L = y.FORCE_BODY || !1, Xe = y.SANITIZE_DOM !== !1, Re = y.SANITIZE_NAMED_PROPS || !1, qt = y.KEEP_CONTENT !== !1, Pn = y.IN_PLACE || !1, rn = UM(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : Uf, di = typeof y.NAMESPACE == "string" ? y.NAMESPACE : xr, Ua = ot(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ht(y.MATHML_TEXT_INTEGRATION_POINTS) : ge({}, cd), Fa = ot(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? ht(y.HTML_INTEGRATION_POINTS) : ge({}, ld);
    const S = ot(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? ht(y.CUSTOM_ELEMENT_HANDLING) : _i(null);
    if (ve = _i(null), ot(S, "tagNameCheck") && ud(S.tagNameCheck) && (ve.tagNameCheck = S.tagNameCheck), ot(S, "attributeNameCheck") && ud(S.attributeNameCheck) && (ve.attributeNameCheck = S.attributeNameCheck), ot(S, "allowCustomizedBuiltInElements") && typeof S.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = S.allowCustomizedBuiltInElements), ft(ve), Rt && (sn = !1), G && (W = !0), Ir && (ie = ge({}, If), pe = _i(null), Ir.html === !0 && (ge(ie, $f), ge(pe, Lf)), Ir.svg === !0 && (ge(ie, hc), ge(pe, yc), ge(pe, mo)), Ir.svgFilters === !0 && (ge(ie, gc), ge(pe, yc), ge(pe, mo)), Ir.mathMl === !0 && (ge(ie, mc), ge(pe, Df), ge(pe, mo))), rr.tagCheck = null, rr.attributeCheck = null, ot(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? rr.tagCheck = y.ADD_TAGS : fn(y.ADD_TAGS) && (ie === pt && (ie = ht(ie)), ge(ie, y.ADD_TAGS, ze))), ot(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? rr.attributeCheck = y.ADD_ATTR : fn(y.ADD_ATTR) && (pe === li && (pe = ht(pe)), ge(pe, y.ADD_ATTR, ze))), ot(y, "ADD_URI_SAFE_ATTR") && fn(y.ADD_URI_SAFE_ATTR) && ge(Ia, y.ADD_URI_SAFE_ATTR, ze), ot(y, "FORBID_CONTENTS") && fn(y.FORBID_CONTENTS) && (rt === ns && (rt = ht(rt)), ge(rt, y.FORBID_CONTENTS, ze)), ot(y, "ADD_FORBID_CONTENTS") && fn(y.ADD_FORBID_CONTENTS) && (rt === ns && (rt = ht(rt)), ge(rt, y.ADD_FORBID_CONTENTS, ze)), qt && (ie["#text"] = !0), kr && ge(ie, ["html", "head", "body"]), ie.table && (ge(ie, ["tbody"]), delete En.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ln('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ln('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = w;
      w = y.TRUSTED_TYPES_POLICY;
      try {
        z = Q("");
      } catch (J) {
        throw w = U, J;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (w = void 0, z = "") : (w === void 0 && (w = _e()), w && typeof z == "string" && (z = Q("")));
    ut && ut(y), fi = y;
  }, dd = ge({}, [...hc, ...gc, ...FM]), fd = ge({}, [...mc, ...zM]), Db = function(y, S, U) {
    return S.namespaceURI === xr ? y === "svg" : S.namespaceURI === oo ? y === "svg" && (U === "annotation-xml" || Ua[U]) : !!dd[y];
  }, Ub = function(y, S, U) {
    return S.namespaceURI === xr ? y === "math" : S.namespaceURI === ao ? y === "math" && Fa[U] : !!fd[y];
  }, Fb = function(y, S, U) {
    return S.namespaceURI === ao && !Fa[U] || S.namespaceURI === oo && !Ua[U] ? !1 : !fd[y] && (qb[y] || !dd[y]);
  }, zb = function(y) {
    let S = b(y);
    (!S || !S.tagName) && (S = {
      namespaceURI: di,
      tagName: "template"
    });
    const U = ms(y.tagName), J = ms(S.tagName);
    return Da[y.namespaceURI] ? y.namespaceURI === ao ? Db(U, S, J) : y.namespaceURI === oo ? Ub(U, S, J) : y.namespaceURI === xr ? Fb(U, S, J) : !!(is === "application/xhtml+xml" && Da[y.namespaceURI]) : !1;
  }, an = function(y) {
    xi(t.removed, {
      element: y
    });
    try {
      b(y).removeChild(y);
    } catch {
      if (m(y), !b(y))
        throw Ln("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, co = function(y) {
    ss(y);
    const S = g(y);
    if (S) {
      const J = [];
      ki(S, (X) => {
        xi(J, X);
      }), ki(J, (X) => {
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
  }, wn = function(y, S) {
    try {
      xi(t.removed, {
        attribute: S.getAttributeNode(y),
        from: S
      });
    } catch {
      xi(t.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(y), y === "is")
      if (W || G)
        try {
          an(S);
        } catch {
        }
      else
        try {
          S.setAttribute(y, "");
        } catch {
        }
  }, Kb = function(y) {
    const S = _(y);
    if (S)
      for (let U = S.length - 1; U >= 0; --U) {
        const J = S[U], X = J && J.name;
        if (!(typeof X != "string" || pe[ze(X)]))
          try {
            y.removeAttribute(X);
          } catch {
          }
      }
  }, ss = function(y) {
    const S = [y];
    for (; S.length > 0; ) {
      const U = S.pop();
      (M ? M(U) : U.nodeType) === $t.element && Kb(U);
      const X = g(U);
      if (X)
        for (let oe = X.length - 1; oe >= 0; --oe)
          S.push(X[oe]);
    }
  }, Bb = function(y) {
    if (!nr)
      return;
    const S = [y];
    for (; S.length > 0; ) {
      const U = S.pop(), J = M ? M(U) : U.nodeType;
      if (J === $t.processingInstruction || J === $t.comment && st(zf, U.data)) {
        try {
          m(U);
        } catch {
        }
        continue;
      }
      if (J === $t.element) {
        const oe = U, Se = ze(C ? C(U) : U.nodeName);
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
    is === "application/xhtml+xml" && di === xr && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const J = w ? Q(y) : y;
    if (di === xr)
      try {
        S = new d().parseFromString(J, is);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = We.createDocument(di, "template", null);
      try {
        S.documentElement.innerHTML = La ? z : J;
      } catch {
      }
    }
    const X = S.body || S.documentElement;
    return y && U && X.insertBefore(r.createTextNode(U), X.childNodes[0] || null), di === xr ? Mn.call(S, kr ? "html" : "body")[0] : kr ? S.documentElement : X;
  }, hd = function(y) {
    const S = $ ? $(y) : y.ownerDocument;
    return en.call(
      S || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, lo = function(y) {
    return y = ds(y, te, " "), y = ds(y, le, " "), y = ds(y, Ne, " "), y;
  }, Ka = function(y) {
    var S;
    y.normalize();
    const U = $ ? $(y) : y.ownerDocument, J = en.call(
      U || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = J.nextNode();
    for (; X; )
      X.data = lo(X.data), X = J.nextNode();
    const oe = (S = y.querySelectorAll) === null || S === void 0 ? void 0 : S.call(y, "template");
    oe && ki(oe, (Se) => {
      pi(Se.content) && Ka(Se.content);
    });
  }, uo = function(y) {
    const S = C ? C(y) : null;
    return typeof S != "string" || ze(S) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, pi = function(y) {
    if (!M || typeof y != "object" || y === null)
      return !1;
    try {
      return M(y) === $t.documentFragment;
    } catch {
      return !1;
    }
  }, os = function(y) {
    if (!M || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof M(y) == "number";
    } catch {
      return !1;
    }
  };
  function Tr(j, y, S) {
    j.length !== 0 && ki(j, (U) => {
      U.call(t, y, S, fi);
    });
  }
  const jb = function(y, S) {
    return !!(nr && y.hasChildNodes() && !os(y.firstElementChild) && st(Ff, y.textContent) && st(Ff, y.innerHTML) || nr && y.namespaceURI === xr && S === "style" && os(y.firstElementChild) || y.nodeType === $t.processingInstruction || nr && y.nodeType === $t.comment && st(zf, y.data));
  }, Vb = function(y, S, U) {
    if (!En[S] && bd(S) && (ve.tagNameCheck instanceof RegExp && st(ve.tagNameCheck, S) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(S)))
      return !1;
    if (qt && !rt[S]) {
      const J = b(y), X = g(y);
      if (X && J) {
        const oe = X.length;
        for (let Se = oe - 1; Se >= 0; --Se) {
          const Ke = y === U ? p(X[Se], !0) : X[Se];
          J.insertBefore(Ke, h(y));
        }
      }
    }
    return an(y), !0;
  }, gd = function(y, S, U, J) {
    return y.length === 0 ? S : S === U || S === J ? ht(S) : S;
  }, md = function(y, S) {
    if (Tr(R.beforeSanitizeElements, y, null), y !== S && b(y) === null)
      return Pn && ss(y), !0;
    if (uo(y))
      return an(y), !0;
    const U = ze(C ? C(y) : y.nodeName);
    if (ie = gd(R.uponSanitizeElement, ie, pt, An), Tr(R.uponSanitizeElement, y, {
      tagName: U,
      allowedTags: ie
    }), y !== S && b(y) === null)
      return Pn && ss(y), !0;
    if (jb(y, U))
      return an(y), !0;
    if (En[U] || !(rr.tagCheck instanceof Function && rr.tagCheck(U)) && !ie[U]) {
      const X = Vb(y, U, S);
      return X === !1 && Tr(R.afterSanitizeElements, y, null), X;
    }
    if ((M ? M(y) : y.nodeType) === $t.element && !zb(y) || (U === "noscript" || U === "noembed" || U === "noframes") && st(XM, y.innerHTML))
      return an(y), !0;
    if (Rt && y.nodeType === $t.text) {
      const X = lo(y.textContent);
      y.textContent !== X && (xi(t.removed, {
        element: y.cloneNode()
      }), y.textContent = X);
    }
    return Tr(R.afterSanitizeElements, y, null), !1;
  }, yd = function(y, S, U) {
    if (ui[S] || nr && S === "patchsrc" || nr && S === "for" && y !== "label" && y !== "output" || Xe && (S === "id" || S === "name") && (U in r || U in Lb))
      return !1;
    const J = pe[S] || rr.attributeCheck instanceof Function && rr.attributeCheck(S, y);
    if (!(sn && st(lt, S))) {
      if (!(nn && st(Z, S))) {
        if (J) {
          if (!Ia[S]) {
            if (!st(rn, ds(U, br, ""))) {
              if (!((S === "src" || S === "xlink:href" || S === "href") && y !== "script" && Of(U, "data:") === 0 && so[y])) {
                if (!(io && !st(Ye, ds(U, br, "")))) {
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
          !(bd(y) && (ve.tagNameCheck instanceof RegExp && st(ve.tagNameCheck, y) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(y)) && (ve.attributeNameCheck instanceof RegExp && st(ve.attributeNameCheck, S) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(S, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          S === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && st(ve.tagNameCheck, U) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(U)))
        ) return !1;
      }
    }
    return !0;
  }, Wb = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), bd = function(y) {
    return !Wb[ms(y)] && st(ts, y);
  }, Hb = function(y, S, U, J) {
    if (w && typeof u == "object" && typeof u.getAttributeType == "function" && !U)
      switch (u.getAttributeType(y, S)) {
        case "TrustedHTML":
          return Q(J);
        case "TrustedScriptURL":
          return Fe(J);
      }
    return J;
  }, Gb = function(y, S, U, J) {
    try {
      U ? y.setAttributeNS(U, S, J) : y.setAttribute(S, J), uo(y) ? an(y) : Nf(t.removed);
    } catch {
      wn(S, y);
    }
  }, kd = function(y) {
    Tr(R.beforeSanitizeAttributes, y, null);
    const S = y.attributes;
    if (!S || uo(y))
      return;
    pe = gd(R.uponSanitizeAttribute, pe, li, q);
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: pe,
      forceKeepAttr: void 0
    };
    let J = S.length;
    const X = ze(y.nodeName);
    for (; J--; ) {
      const oe = S[J], Se = oe.name, Ke = oe.namespaceURI, Ct = oe.value, _t = ze(Se), ja = Ct;
      let bt = Se === "value" ? ja : RM(ja);
      if (U.attrName = _t, U.attrValue = bt, U.keepAttr = !0, U.forceKeepAttr = void 0, Tr(R.uponSanitizeAttribute, y, U), bt = U.attrValue, Re && (_t === "id" || _t === "name") && Of(bt, Qe) !== 0 && (wn(Se, y), bt = Qe + bt), nr && st(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, bt)) {
        wn(Se, y);
        continue;
      }
      if (_t === "attributename" && wf(bt, "href")) {
        wn(Se, y);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          wn(Se, y);
          continue;
        }
        if (!on && st(QM, bt)) {
          wn(Se, y);
          continue;
        }
        if (Rt && (bt = lo(bt)), !yd(X, _t, bt)) {
          wn(Se, y);
          continue;
        }
        bt = Hb(X, _t, Ke, bt), bt !== ja && Gb(y, Se, Ke, bt);
      }
    }
    Tr(R.afterSanitizeAttributes, y, null);
  }, fo = function(y) {
    let S = null;
    const U = hd(y);
    for (Tr(R.beforeSanitizeShadowDOM, y, null); S = U.nextNode(); )
      if (Tr(R.uponSanitizeShadowNode, S, null), md(S, y), kd(S), pi(S.content) && fo(S.content), (M ? M(S) : S.nodeType) === $t.element) {
        const X = k(S);
        pi(X) && (Ba(X), fo(X));
      }
    Tr(R.afterSanitizeShadowDOM, y, null);
  }, Ba = function(y) {
    const S = [{
      node: y,
      shadow: null
    }];
    for (; S.length > 0; ) {
      const U = S.pop();
      if (U.shadow) {
        fo(U.shadow);
        continue;
      }
      const J = U.node, oe = (M ? M(J) : J.nodeType) === $t.element, Se = g(J);
      if (Se)
        for (let Ke = Se.length - 1; Ke >= 0; --Ke)
          S.push({
            node: Se[Ke],
            shadow: null
          });
      if (oe) {
        const Ke = C ? C(J) : null;
        if (typeof Ke == "string" && ze(Ke) === "template") {
          const Ct = J.content;
          pi(Ct) && S.push({
            node: Ct,
            shadow: null
          });
        }
      }
      if (oe) {
        const Ke = k(J);
        pi(Ke) && S.push({
          node: null,
          shadow: Ke
        }, {
          node: Ke,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(j) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, U = null, J = null, X = null;
    if (La = !j, La && (j = "<!-->"), typeof j != "string" && !os(j) && (j = DM(j), typeof j != "string"))
      throw Ln("dirty is not a string, aborting");
    if (!t.isSupported)
      return j;
    rs ? (ie = An, pe = q) : za(y), (R.uponSanitizeElement.length > 0 || R.uponSanitizeAttribute.length > 0) && (ie = ht(ie)), R.uponSanitizeAttribute.length > 0 && (pe = ht(pe)), t.removed = [];
    const oe = Pn && typeof j != "string" && os(j);
    if (oe) {
      Bb(j);
      const Ct = C ? C(j) : j.nodeName;
      if (typeof Ct == "string") {
        const _t = ze(Ct);
        if (!ie[_t] || En[_t])
          throw co(j), Ln("root node is forbidden and cannot be sanitized in-place");
      }
      if (uo(j))
        throw co(j), Ln("root node is clobbered and cannot be sanitized in-place");
      try {
        Ba(j);
      } catch (_t) {
        throw co(j), _t;
      }
    } else if (os(j))
      S = pd("<!---->"), U = S.ownerDocument.importNode(j, !0), U.nodeType === $t.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? S = U : S.appendChild(U), Ba(U);
    else {
      if (!W && !Rt && !kr && // eslint-disable-next-line unicorn/prefer-includes
      j.indexOf("<") === -1)
        return w && de ? Q(j) : j;
      if (S = pd(j), !S)
        return W ? null : de ? z : "";
    }
    S && L && an(S.firstChild);
    const Se = oe ? j : S;
    try {
      const Ct = hd(Se);
      for (; J = Ct.nextNode(); )
        md(J, Se), kd(J), pi(J.content) && fo(J.content);
    } catch (Ct) {
      throw oe && (co(j), ki(t.removed, (_t) => {
        _t.element && ss(_t.element);
      })), Ct;
    }
    if (oe)
      return ki(t.removed, (Ct) => {
        Ct.element && ss(Ct.element);
      }), Rt && Ka(j), j;
    if (W) {
      if (Rt && Ka(S), G)
        for (X = tn.call(S.ownerDocument); S.firstChild; )
          X.appendChild(S.firstChild);
      else
        X = S;
      return (pe.shadowroot || pe.shadowrootmode) && (X = ee.call(n, X, !0)), X;
    }
    let Ke = kr ? S.outerHTML : S.innerHTML;
    return kr && ie["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && st(JM, S.ownerDocument.doctype.name) && (Ke = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + Ke), Rt && (Ke = lo(Ke)), w && de ? Q(Ke) : Ke;
  }, t.setConfig = function() {
    let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    za(j), rs = !0, An = ie, q = pe;
  }, t.clearConfig = function() {
    fi = null, rs = !1, An = null, q = null, w = v, z = "";
  }, t.isValidAttribute = function(j, y, S) {
    fi || za({});
    const U = ze(j), J = ze(y);
    return yd(U, J, S);
  }, t.addHook = function(j, y) {
    typeof y == "function" && ot(R, j) && xi(R[j], y);
  }, t.removeHook = function(j, y) {
    if (ot(R, j)) {
      if (y !== void 0) {
        const S = wM(R[j], y);
        return S === -1 ? void 0 : OM(R[j], S, 1)[0];
      }
      return Nf(R[j]);
    }
  }, t.removeHooks = function(j) {
    ot(R, j) && (R[j] = []);
  }, t.removeAllHooks = function() {
    R = Kf();
  }, t;
}
var tE = Am();
function rE({ structureProtectionMode: e = "off" }) {
  const [t] = ce(), r = Y(void 0), [n, i] = he(void 0), s = be((o) => {
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
        } else g.kind === "selection" ? P(h) && (Nu(h), h.removeText()) : ct(k) && TM(k);
        return !0;
      }
      if (!h)
        return !1;
      const b = xM(h, p);
      if (b) {
        if (b.kind === "verse") {
          const k = Vp();
          k.add(b.node.getKey()), zr(k);
        } else {
          const k = Bn();
          k.anchor.set(b.node.getKey(), 0, "element"), k.focus.set(b.node.getKey(), b.node.getChildrenSize(), "element"), zr(k);
        }
        return s({ key: b.node.getKey(), kind: b.kind, intent: p }), m.preventDefault(), !0;
      }
      if (P(h) && !h.isCollapsed() && Du(h)) {
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
      return !m || !Pi(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const h = tE.sanitize(p), g = new DOMParser().parseFromString(h, "text/html"), b = CM(zk(t, g)), k = N();
      return P(k) && k.insertNodes(b), m.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = N();
      return m && Pi(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = N();
      return m && Pi(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Ef(N(), p) || s(void 0);
      });
    };
    return Oe(
      t.registerCommand(Or, o, Me),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(dr, c, ke),
      t.registerCommand(Gt, d, Me),
      t.registerCommand(bk, c, Me),
      t.registerCommand(wl, u, Me),
      t.registerCommand(wi, c, Me),
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
const Mw = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function nE({ textDirection: e }) {
  const [t] = ce();
  return iE(t, e), null;
}
function iE(e, t) {
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
function sE() {
  const [e] = ce();
  return oE(e), null;
}
function oE(e) {
  B(() => {
    if (!e.hasNodes([xe, wt, Pe, qe, gt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Oe(
      e.registerNodeTransform(qe, aE),
      e.registerNodeTransform(qe, (t) => cE(t, e)),
      e.registerNodeTransform(gt, jf),
      e.registerNodeTransform(wt, jf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(gt, (t) => {
        Os(Jn("va"), t), Os(Jn("vp"), t);
      })
    );
  }, [e]);
}
function aE(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || K(r) || F(n) || F(r) || Ce(n) || Ce(r) || Be(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Be(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
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
  Le(n))
    return;
  if (me(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  me(r) && uu(e);
}
function cE(e, t) {
  const r = e.getParent();
  !Be(r) || !e.isAttached() || Bc(t, e.getKey()) && !Bc(t, r.getKey()) && r.insertAfter(e);
}
function jf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ce(t); )
    t = t.getLastChild();
  (F(t) || E(t) && Ce(t.getParent())) && e.insertBefore(ye(" "));
}
function Ea(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
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
function lE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (I(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function uE() {
  const e = N();
  if (!(!P(e) || !e.isCollapsed()))
    return Ea(lE(e.anchor));
}
function dE(e) {
  const t = N();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Pm(e.target)), r ? Ea(Ae(r, K)) : void 0;
}
function Pm(e) {
  const t = kk(e)?.anchorNode;
  if (Fp(t))
    return Wi(t) ?? void 0;
}
function fE(e) {
  if (N())
    return;
  const t = Pm(e);
  return t ? Ea(Ae(t, K)) : void 0;
}
function Vf(e) {
  const t = Ae(e.getNode(), K);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function pE() {
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
const hE = 500;
function gE(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function mE() {
  const e = N();
  if (!P(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (I(n))
    return Ea(n.getChildAtIndex(t.offset));
}
function yE() {
  const [e] = ce(), t = Lu(uE), r = Y(void 0);
  return B(() => {
    const n = (i) => {
      vt(Mt), Fr(e, Mt), t(i);
    };
    return Oe(e.registerCommand(
      Or,
      (i) => (r.current = gE(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      ke
    ), e.registerCommand(Dt, () => {
      if (r.current !== void 0 && performance.now() - r.current < hE) {
        const o = mE();
        if (o)
          return n(o), !1;
      }
      if (pE())
        return vt(Mt), Fr(e, Mt), !1;
      const s = fE(e.getRootElement());
      return s && n(s), !1;
    }, jn), e.registerCommand(ua, (i) => {
      const s = dE(i);
      return s && n(s), !1;
    }, jn));
  }, [e, t]), null;
}
function bE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = vv({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return A(_v, { trigger: e, items: i });
}
function kE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = He(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? A(CE, { trigger: e, harness: i }) : A(bE, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const xE = [" ", "*"];
function TE(e, t) {
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
function CE({ trigger: e, harness: t }) {
  const [r] = ce(), [n, i] = he(void 0), s = Y({ query: "", options: [] }), o = Y(0), a = be((f, p, m) => {
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
  B(() => Oe(r.registerCommand(Or, (f) => {
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
  }, Mr)), [r, e, t, n, a]);
  const c = be(() => i(void 0), []), l = be((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = be((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), u = He(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    TE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && A(Kg, { isOpen: !0, children: ({ placement: f }) => A(
    Vg,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? xE : void 0 },
    n.session
  ) });
}
function _E(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (r) => D.repeat(r.length));
}
function vE(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
function SE(e) {
  return e.replace(/ {2,}/g, " ");
}
let Go;
function ME(e) {
  e && (Go = e);
}
function tl(e) {
  return no(e);
}
function EE(e, t) {
  return e.isEmpty() ? Dp : Nm(e.toJSON(), t);
}
function Nm(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && ga(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Dp;
  if (r.some(UC)) {
    Go?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = wm(r), i = sr(n, t);
  return i ? { type: ur, version: lr, content: i } : void 0;
}
function AE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), $e({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function PE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return $e({
    type: jt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function NE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = jh(r, a, c), $e({
    type: jt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function wE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = jh(t, o, a), $e({
    type: gt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function OE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !tl(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(D) && (t[0] = a.slice(1));
  }
  return $e({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function RE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return $e({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function qE(e, t) {
  const { unknownAttributes: r } = e;
  return $e({ type: mg, ...r, content: t });
}
function $E(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return $e({ type: kg, marker: r, ...n, content: t });
}
function IE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return $e({
    type: Tg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function LE(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function DE(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return $e({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function vi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return $e({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Zh({ sid: n, eid: i, ...s }, o)
  });
}
function UE(e) {
  return e.text;
}
function FE(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return $e({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function zE(e) {
  const { marker: t } = e;
  return {
    type: Io,
    marker: t === "" ? void 0 : t
  };
}
function Wf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function KE(e, t, r, n, i) {
  const s = fr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = vi({
      type: s,
      marker: Ei,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = vi({
      type: s,
      marker: Vn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = vi({
      type: s,
      marker: Vn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = vi({
      type: s,
      marker: Ei
    });
    i.push(l);
  }
  (!n || !Th(n)) && t.forEach((l) => {
    const d = vi({
      type: s,
      marker: Ei,
      eid: l
    });
    i.push(d);
  });
}
function sr(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, p = a, m = a, h = a, g = a;
    switch (a.type) {
      case Ft.getType():
        i.push(
          AE(
            l,
            sr(l.children, t)
          )
        );
        break;
      case qr.getType():
        i.push(PE(a));
        break;
      case jt.getType():
        i.push(
          NE(
            d,
            sr(d.children, t)
          )
        );
        break;
      case wt.getType():
      case gt.getType():
        i.push(wE(a));
        break;
      case xe.getType():
        i.push(
          OE(
            u,
            sr(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case it.getType():
        i.push(
          RE(
            f,
            sr(f.children, t)
          )
        );
        break;
      case ai.getType():
        i.push(
          qE(
            a,
            sr(a.children, t)
          )
        );
        break;
      case Yi.getType():
        i.push(
          $E(
            a,
            sr(a.children, t)
          )
        );
        break;
      case Xi.getType():
        i.push(
          IE(
            a,
            sr(a.children, t)
          )
        );
        break;
      case Pe.getType(): {
        const b = sr(
          p.children,
          t,
          p.caller
        );
        i.push(
          DE(
            p,
            tl(t) && p.category === void 0 ? LE(b) : b
          )
        );
        break;
      }
      case Gr.getType():
      case Hr.getType():
      case cr.getType():
      case Gp.getType():
      case mr.getType():
        break;
      case at.getType():
        if (s = sr(
          h.children,
          t,
          r,
          n
        ), s) {
          const b = h.typedIDs[pn];
          if (b)
            KE(s, b, o, e[c + 1], i), o = b;
          else {
            const k = s.shift();
            k && (typeof k == "string" ? Wf(i, k) : i.push(k)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case fr.getType():
        i.push(vi(a));
        break;
      case qe.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Js(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== D && !m.text.startsWith(ql) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[Hs]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || m.text !== Kt(r))) {
          let b = UE(m);
          tl(t) && (n && b.startsWith(D) && (b = b.slice(1)), b = SE(vE(b))), Wf(i, b);
        }
        break;
      case oi.getType():
        i.push(
          FE(
            g,
            sr(g.children, t)
          )
        );
        break;
      case Xr.getType():
        i.push(zE(a));
        break;
      case Qi.getType():
        Go?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Go?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function wm(e) {
  const t = e.findIndex((r) => ga(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = wm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const vo = {
  initialize: ME,
  deserializeEditorState: EE
}, BE = /^sd\d*$/, jE = /* @__PURE__ */ new Set([
  ...Object.entries(Nc).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === x.Paragraph && !BE.test(e)
  ).map(([e]) => e),
  "qa"
]);
function VE(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Kl(i) || zh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!uT(i)) {
      t && Jo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (jl(i) && jE.has(i.marker) && !Jo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Om(i.children, t).forEach((s) => {
      const o = WE(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = HE(s.verse), r.push(n), o && n.children.push(o);
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
    t && Jo(i) && t?.warn(
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
function Jo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Rm(r) || Jo(r)) : !1;
}
function WE(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function HE(e) {
  return {
    type: Lo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Mg
  };
}
const Gf = Im([]), GE = {
  type: Gp.getType(),
  version: 1
};
let Uu = [], re, Zn, qm, Pt;
function JE(e, t) {
  Uu = [], QE(e), ZE(t);
}
function YE(e = 0) {
}
function XE(e, t) {
  re = t ?? Ui();
  let r;
  return e ? (e.type !== ur && Pt?.warn(`This USJ type '${e.type}' didn't match the expected type '${ur}'.`), e.version !== lr && Pt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${lr}'.`
  ), e.content.length > 0 ? (r = sl(Dr(e.content)), $s(re) && (r = VE(r, Pt))) : r = [Gf]) : r = [Gf], qm?.(Uu), {
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
function QE(e) {
  e && (Zn = e), e?.addMissingComments && (qm = e.addMissingComments);
}
function ZE(e) {
  e && (Pt = e);
}
function $m() {
  return no(re);
}
function eA(e, t) {
  let { marker: r } = e;
  r !== As && Pt?.warn(`Unexpected book marker '${r}'!`), r = r ?? As;
  const { code: n } = e;
  (!n || !Ft.isValidBookCode(n)) && Pt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  re?.markerMode === "editable" || re?.markerMode === "visible" ? i.push(
    Et("marker", De(r) + " " + n + D)
  ) : re?.hasGutterParaMarkers && i.push(Et("marker", De(r) + D, !0)), i.push(...t);
  const s = Ve(e, Bx);
  return $e({
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
function tA(e) {
  let { marker: t } = e;
  t !== Ro && Pt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Ro;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ve(e, jx);
  let a;
  re?.markerMode === "visible" && (a = !0);
  const c = [
    Tt(Xt(t, r) ?? "")
  ];
  return re?.markerMode === "editable" && bA(i, s, c), re?.markerMode === "editable" ? $e({
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
  }) : $e({
    type: qr.getType(),
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
function rA(e) {
  let { marker: t } = e;
  t !== qo && Pt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? qo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (Rv(re) ?? wt).getType(), c = re?.markerMode === "editable" ? Dh : Ag;
  let l, d;
  re?.markerMode === "editable" ? l = Xt(t, r) : re?.markerMode === "visible" && (d = !0);
  const u = Ve(e, nT);
  return $e({
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
function nA(e, t = [], r = !1) {
  let { marker: n } = e;
  xe.isValidMarker(n, Zn?.extraValidMarkers) || Pt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (re?.markerMode === "editable") {
    const [a] = t;
    $i(a) ? a.text = D + a.text : a && t.unshift(Tt(D));
  }
  t.length === 0 && t.push(Tt(Qt)), rl(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ve(e, Hx);
  return s || hA(n, o, i), s || nl(e.marker ?? "", i, !1, r), $e({
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
    type: Pr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Ih
  };
}
function iA(e, t = []) {
  let { marker: r } = e;
  it.isValidMarker(r, Zn?.extraValidMarkers) || Pt?.warn(`Unexpected para marker '${r}'!`), r = r ?? Lt;
  const n = [];
  if (Sn(re) && (re?.markerMode === "editable" ? n.push(
    xt(r),
    Tt(D, Rr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && n.push(
    Et(
      "marker",
      De(r) + D,
      re?.hasGutterParaMarkers
    )
  )), n.push(...t), $m()) {
    const s = n.find(
      (o) => !Jl(o) && !($i(o) && o.text === D)
    );
    $i(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = Ve(e, tT);
  return $e({
    type: it.getType(),
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
function sA(e, t = []) {
  const r = Ve(e, oC);
  return $e({
    ...Fu(),
    type: ai.getType(),
    unknownAttributes: r,
    children: t,
    version: yg
  });
}
function oA(e, t = []) {
  const r = Ve(e, lC), n = e.marker ?? Uc, i = [];
  return re?.markerMode === "editable" ? i.push(
    xt(n),
    Tt(D, Rr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && i.push(
    Et(
      "marker",
      De(n) + D,
      re?.hasGutterParaMarkers
    )
  ), i.push(...t), $e({
    ...Fu(),
    type: Yi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: xg
  });
}
function aA(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Fc, a = lg(o, i) ?? o;
  re?.markerMode === "editable" ? s.push(
    xt(a),
    Tt(D, Rr, "token")
  ) : (re?.markerMode === "visible" || re?.hasGutterParaMarkers) && s.push(
    Et(
      "marker",
      De(a) + D,
      re?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Ve(
    e,
    dC
  );
  return $e({
    ...Fu(),
    type: Xi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Cg
  });
}
function cA(e, t) {
  const r = mT(t);
  let n = () => {
  };
  return Zn?.noteCallerOnClick && (n = Zn.noteCallerOnClick), $e({
    type: cr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: $g
  });
}
function lA(e, t) {
  let { marker: r } = e;
  Pe.isValidMarker(r, Zn?.extraValidMarkers) || Pt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Ll;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : bu(re?.noteMode), a = Ve(e, ox), c = re?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  re?.markerMode === "editable" ? (l = xt(r, "opening", !1, c), s || (d = xt(r, "closing"))) : re?.markerMode === "visible" && (l = Et("marker", De(r) + " "), s || (d = Et("marker", nt(r))));
  const u = [];
  let f;
  if (l && u.push(l), re?.markerMode === "editable" && !o)
    f = Tt(Kt(i), void 0, c), u.push(f), yA(n, u), u.push(...t);
  else {
    const p = Tt(D, Rr, "token");
    f = cA(i, t), u.push(f, p, ...t.flatMap(uA(p)));
  }
  return d && u.push(d), $e({
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
function uA(e) {
  return (t) => kh(t) ? [t] : [t, e];
}
function dA(e) {
  let { marker: t } = e;
  (!t || !fr.isValidMarker(t, Zn?.extraValidMarkers)) && Pt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ve(e, Il), s = eg(e);
  return $e({
    type: fr.getType(),
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
    type: at.getType(),
    typedIDs: { [pn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function fA(e, t) {
  const { marker: r } = e, n = e.type, i = Ve(e, Dx), s = [];
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
    $i(o) && (o.mode = "token");
  }), $e({
    type: oi.getType(),
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
function pA(e) {
  return {
    type: Xr.getType(),
    marker: e,
    text: xs(e),
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
    type: mr.getType(),
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
    type: qe.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[Hs] = { textType: t }), n;
}
function Et(e, t, r = !1) {
  const n = {
    type: Hr.getType(),
    text: t,
    textType: e,
    version: bh
  };
  return r && (n[Hs] = { [Fl.key]: !0 }), n;
}
function Ls(e, t) {
  return {
    type: Gr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: vh
  };
}
function rl(e, t, r = !1) {
  re?.markerMode === "editable" ? t.push(xt(e, "opening", r)) : re?.markerMode === "visible" && t.push(Et("marker", De(e, r)));
}
function nl(e, t, r = !1, n = !1) {
  re?.markerMode === "editable" ? r ? t.push(xt("", "selfClosing")) : t.push(xt(e, "closing", n)) : re?.markerMode === "visible" && t.push(
    Et(
      "marker",
      r ? nt("") : nt(e, n)
    )
  );
}
function hA(e, t, r) {
  if (re?.markerMode !== "editable" || !t) return;
  const n = vr(t, pa(e));
  n && r.push(Tt(n, "attribute"));
}
function Yf(e, t) {
  if (e.type !== "ms" || re?.markerMode !== "editable" && re?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ve(e, Il), o = tg(
    n,
    i,
    s,
    eg(e)
  ), a = vr(o, ha(r ?? ""));
  if (!a) return;
  const c = D + a;
  re?.markerMode === "editable" ? t.push(Tt(c, "attribute")) : t.push(Et("attribute", c));
}
function gA(e, t) {
  const r = e.marker ?? "";
  if (re?.markerMode === "editable") {
    const n = [];
    rl(r, n), Yf(e, n), nl(r, n, !0), t.push(Ls("milestone", n));
  } else
    rl(r, t), Yf(e, t), nl(r, t, !0);
}
function Xf(e, t, r) {
  t !== void 0 && r.push(
    Ls(e, [
      xt(e, "opening"),
      Tt(D + t, "attribute"),
      xt(e, "closing")
    ])
  );
}
function mA(e, t) {
  re?.markerMode === "editable" && (Xf("va", e.altnumber, t), Xf("vp", e.pubnumber, t));
}
function yA(e, t) {
  e !== void 0 && t.push(
    Ls("cat", [
      xt("cat", "opening"),
      Tt(D + e, "attribute"),
      xt("cat", "closing")
    ])
  );
}
function bA(e, t, r) {
  e !== void 0 && r.push(
    Ls("ca", [
      xt("ca", "opening"),
      Tt(D + e, "attribute"),
      xt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Ls("cp", [
      xt("cp", "opening"),
      Tt(D + t, "attribute")
    ])
  );
}
function Qf(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function kA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Zf(e, t) {
  t.marker === Vn && t.sid !== void 0 && e.push(t.sid), t.marker === Ei && t.eid !== void 0 && kA(e, t.eid);
}
function il(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Jf(o, [...n])] : o, c = e[i];
  Zf(n, c);
  const l = il(
    e.slice(i + 1, s),
    Qf(t, i + 1),
    c.marker === Vn,
    n
  ), d = Jf(l, [...n]), u = e[s];
  Zf(n, u);
  const f = il(
    e.slice(s + 1),
    Qf(t, s + 1),
    u.marker === Vn,
    n
  );
  return [...a, d, ...f];
}
function Dr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(Tt($m() ? _E(i) : i));
    else if (!i.type)
      Pt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ft.getType():
          n.push(eA(i, Dr(i.content)));
          break;
        case jt.getType():
          n.push(tA(i));
          break;
        case gt.getType():
          re?.hasSpacing || n.push(GE), n.push(rA(i)), mA(i, n);
          break;
        case xe.getType():
          n.push(
            nA(i, Dr(i.content, !0), t)
          );
          break;
        case it.getType():
          n.push(iA(i, Dr(i.content)));
          break;
        case Pe.getType():
          n.push(lA(i, Dr(i.content)));
          break;
        case fr.getType():
          dh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Uu?.push(i.sid)), n.push(dA(i)), gA(i, n);
          break;
        case Xr.getType():
          n.push(pA(i.marker ?? ""));
          break;
        case mg:
          n.push(sA(i, Dr(i.content)));
          break;
        case kg:
          n.push(oA(i, Dr(i.content)));
          break;
        case Tg:
          n.push(aA(i, Dr(i.content)));
          break;
        default:
          Pt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(fA(i, Dr(i.content)));
      }
  }), il(n, r);
}
function sl(e) {
  const t = e.findIndex(
    (n) => Kl(n) || zh(n) || jl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    cC(n)
  );
  if (t >= 0) {
    const n = sl(e.slice(0, t)), i = e[t], s = sl(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Pg(n)))
    return [Im(e)];
  return e;
}
const pr = {
  initialize: JE,
  reset: YE,
  serializeEditorState: XE
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
function xA() {
  const e = N();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !O(t) ? Xn(t) : void 0) && E(t)) {
      const i = ye(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Ii(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
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
    if (!Xn(t)) continue;
    Ii(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(D) && r.setTextContent(n.slice(D.length));
  }
  return !0;
}
function Dm(e) {
  const [t, r] = Al(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
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
  return ct(t) ? t : void 0;
}
function TA() {
  const e = N();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return Xn(t) ? !!Fm(t) : !1;
}
function zm(e) {
  const t = ye(""), r = e.getNode(), n = e.offset;
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
    if (F(o)) Ii(t, { renderGlyphs: !0 });
    else if (!Ce(o) || !CA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function CA(e, t) {
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
  if (O(t) && !ou(t, e.anchor.offset)) {
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
  if (!E(r) || O(r) || !Xn(r)) return !1;
  const n = Fm(r);
  if (!n) return !1;
  const { moving: i } = zm(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Ce(o); ) o = o.getFirstChild() ?? void 0;
  return F(o) ? xa(o) : s.select(0, 0), !0;
}
const Ot = String.raw`\w-`, jm = "a-z0-9", _A = `[a-z][${jm}]*`, vA = new RegExp(
  String.raw`^\\(\+?[${Ot}]+)[ \u00A0]$`
), Vm = new RegExp(String.raw`^\\(\+?[${Ot}]+)$`), SA = new RegExp(String.raw`^\\\+?[${Ot}]*\*$`), MA = new RegExp(
  String.raw`^\\(\+?[${Ot}]+)(?:[ \u00A0]|$)`
), EA = new RegExp(
  String.raw`^\\(\+?)([${Ot}]+)`
), AA = new RegExp(
  String.raw`\\\+?[${Ot}]+(?:\\?\*|[ \u00A0])`
), PA = new RegExp(
  String.raw`\\\+?[${Ot}]*$`
), NA = new RegExp(
  String.raw`^\\(${_A})( |$)`
), wA = new RegExp(
  String.raw`\\[${jm}+*]*$`,
  "i"
), dt = "￼";
function Wm(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== dt ? e.slice(1) : e;
}
function ep(e) {
  return Jl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Hm(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = pr.serializeEditorState(
    {
      type: ur,
      version: lr,
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
  ), o = pr.serializeEditorState(
    {
      type: ur,
      version: lr,
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
  }, [o, ...a] = pr.serializeEditorState(
    { type: ur, version: lr, content: [s, ...r] },
    n
  ).root.children;
  if (!Kl(o)) return { failure: "shape" };
  const c = Hh(o.children[0]) ? o.children.slice(1) : o.children;
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
  PA.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += dt;
}
function Jt(e) {
  return e.replaceAll(D, " ");
}
function OA(e, t, r = !1) {
  if (no(t)) return Jt(e);
  if (e === D) return " ";
  const n = r && e.startsWith(D), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(D, "~");
}
function Cs(e) {
  const t = e.getTextContent();
  return $r(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function zu(e, t) {
  const r = e[t];
  if (!Ze(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ya(r);
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
function Ku(e, t) {
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
function Bu(e) {
  return !!e.getUnknownAttributes();
}
function Aa(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && Ul(e);
}
function ju(e, t) {
  return Ze(e) ? !Aa(e.getMarker(), t) : K(e) || Be(e) ? !0 : Ie(e) ? Bu(e) : F(e) ? Qm(e, t) : !1;
}
function Qm(e, t) {
  if (PT(e)) return !0;
  const r = e.getMarker();
  return mx(r) || t(r) !== void 0 || RA(e) && !qA(e) ? !1 : !$A(e);
}
function RA(e) {
  const t = e.getParent();
  return t !== null && zt(t) !== void 0;
}
function qA(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function $A(e) {
  const t = e.getChildren().filter((i) => O(i) && i.getMarker() === e.getMarker()).filter(O);
  if (t.some((i) => !Jr(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const Wt = "", Ht = "";
function tp(e) {
  return e.flatMap((t) => Le(t) ? t.getChildren() : [t]);
}
function ys(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ze(s)) {
      const o = zu(e, i);
      Aa(s.getMarker(), r) && Xm(o) ? (t.push(
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
      ), ys(tp(o), t, r), t.push(Ht)) : t.push(dt), i += o.length;
    } else if (Ie(s)) {
      const o = Ku(e, i);
      Bu(s) ? t.push(dt) : (t.push(
        Wt,
        "verse",
        Jt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ys(tp(o), t, r), t.push(Ht)), i += o.length;
    } else O(s) ? t.push(Wt, "marker", Jt(s.getTextContent()), Ht) : Qr(s) ? t.push(Wt, "unmatched", Jt(s.getTextContent()), Ht) : ju(s, r) ? t.push(dt) : ni(s) ? t.push(" ") : E(s) ? t.push(
      Jt(
        n ? Wm(Cs(s)) : Cs(s)
      )
    ) : F(s) ? (t.push(Wt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ys(s.getChildren(), t, r, !0), t.push(Ht)) : I(s) ? (t.push(Wt, s.getType()), ys(s.getChildren(), t, r), t.push(Ht)) : t.push(dt);
  }
}
function Nr(e, t) {
  const r = [];
  return ys(e, r, t), r.join("");
}
function tr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Sr(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function hn(e) {
  return e.type ?? "";
}
function Zm(e, t, r) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : De(e, r);
}
function bc(e, t) {
  const r = e[t];
  if (!(!r || hn(r) !== "attribute-run"))
    return tr(r) ?? [];
}
function wr(e, t) {
  const r = [];
  return bs(e, r, t), r.join("");
}
function bs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = hn(s);
    if (o === "ms") {
      const l = s, d = bc(e, i + 1);
      d && Aa(l.marker ?? "", r) ? (t.push(
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
      ), bs(d, t, r), t.push(Ht), i += 1) : t.push(dt);
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
      let d = 0, u = bc(e, i + 1 + d);
      for (; u; )
        bs(u, t, r), d++, u = bc(e, i + 1 + d);
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
      t.push(Wt, "char", JSON.stringify(l.unknownAttributes ?? null)), bs(tr(s) ?? [], t, r, !0), t.push(Ht);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(dt);
      continue;
    }
    if (o === "unmatched") {
      t.push(Wt, "unmatched", Jt(Sr(s) ?? "")), t.push(Ht);
      continue;
    }
    const a = Sr(s);
    if (a !== void 0) {
      t.push(Jt(n ? Wm(a) : a));
      continue;
    }
    const c = tr(s);
    c ? (t.push(Wt, o), bs(c, t, r), t.push(Ht)) : t.push(dt);
  }
}
function kn(e) {
  let t = 0;
  for (const r of e) {
    const n = tr(r);
    if (n) {
      t += kn(n);
      continue;
    }
    const i = Sr(r);
    if (i !== void 0)
      for (const s of i) s === dt && t++;
  }
  return t;
}
function Ds(e, t, r, n, i) {
  xn(e.getChildren(), t, r, n, i);
}
function xn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      yo(t, a, Jt(a.getTextContent()));
    else if (Ze(a)) {
      s();
      const c = zu(e, o);
      Aa(a.getMarker(), r) && Xm(c) ? xn(c, t, r, n) : ps(t, [a, ...c]), o += c.length;
    } else if (K(a) || Be(a))
      s(), ps(t, [a]);
    else if (Ie(a)) {
      s();
      const c = Ku(e, o);
      Bu(a) ? ps(t, [a, ...c]) : (yo(t, a, Jt(Cs(a))), xn(c, t, r, n)), o += c.length;
    } else if (F(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && Qm(a, r) ? ps(t, [a]) : Ds(a, t, r, n, { pending: !0 });
    else if (ni(a))
      s(), yo(t, a, " ");
    else if (E(a)) {
      const c = $r(a) || se(a, ue) === "attribute", l = s() && !c;
      yo(
        t,
        a,
        c ? Jt(Cs(a)) : OA(Cs(a), n, l)
      );
    } else I(a) ? Ds(a, t, r, n, i) : (s(), ps(t, [a]));
  }
}
function ey(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Be(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Ds(e, i, t, r), i;
}
function Pa(e, t, r, n) {
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
function Na(e, t) {
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
function Us(e, t = []) {
  for (const r of e)
    Ie(r) ? t.push(r) : I(r) && Us(r.getChildren(), t);
  return t;
}
function wa(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === dt && t++;
    else I(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Zr(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === dt && t++;
    else r.content && (t += Zr(r.content));
  return t;
}
function IA(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), I(s) && Ds(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const Fs = /\s/;
function ty(e) {
  return e.filter(Oa).length;
}
function Oa(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return E(t) && !O(t) && se(t, ue) === "attribute";
}
function LA(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return O(t) || Oa(e);
}
function rp(e, t, r, n) {
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
function DA(e, t, r, n) {
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
function Ra(e, t, r, n) {
  const { key: i, offset: s } = DA(
    e,
    t,
    r,
    n
  ), o = rp(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !LA(a) ? rp(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: ty(t.spans) };
}
function kc(e) {
  if (e.isSentinel) return !1;
  const t = ne(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function UA(e) {
  const t = ne(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return F(r) ? (r.selectNext(0, 0), !0) : !1;
}
function FA(e) {
  const t = ne(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Ie(t) ? Ku(r, n) : Ze(t) ? zu(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function ry(e, t, r) {
  const { text: n, spans: i } = e, s = ty(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && !kc(u);
    if (!(o && Oa(u))) {
      if (d) {
        if (!p) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const h = n[u.start + m];
        if (c === 0 && (l === 0 || !Fs.test(h))) {
          if (p) {
            a = { key: u.key, offset: m };
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
    if (u && kc(u) && UA(u) || u?.isSentinel && FA(u)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !kc(p));
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
      IA(e, n, i, s),
      t,
      e
    );
  }
}
function iy(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    zA(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  xn(e, o, n, i), ry({ text: o.text, spans: o.spans }, t, e);
}
function zA(e, t) {
  const r = e.find(I);
  if (r && ju(r, t)) {
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
  if (!Pa(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (P(c)) {
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
  const l = Wr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Zr(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = pr.serializeEditorState(
    { type: ur, version: lr, content: l },
    r
  );
  if (wr(d.root.children, n) === Nr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((h) => Kn(h));
  if (wa(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Us(e).map((h) => ({
    number: h.getNumber(),
    sid: h.getSid()
  })), p = e[0];
  u.forEach((h) => p.insertBefore(h)), Na(u, s.sentinels), e.forEach((h) => h.remove());
  const m = Us(u);
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
  if (!n || !(yt(n) || E(n) && n.getTextContent() === Kt(e.getCaller()))) return;
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
  return xn(n, i, t, r), { out: i, contentNodes: n };
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
function KA(e, t) {
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
    d.isCollapsed() && (c = Ra(
      [e],
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const u = Wr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Zr(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = u;
  if (u.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = cy(p), h = Gm(e, p);
  if (h)
    return BA(
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
  if (kn(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== m;
  if (b && e.setCategory(m), wr(g.children, n) === Nr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const k = g.children.map(($) => Kn($));
  if (wa(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const _ = a[0];
  if (_)
    k.forEach(($) => _.insertBefore($));
  else {
    const $ = e.getChildren().find((w) => O(w) && w.getMarkerSyntax() === "closing");
    k.forEach((w) => $ ? $.insertBefore(w) : e.append(w));
  }
  Na(k, o.sentinels);
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
function BA(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = Jm(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || kn(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const d = l.map((m) => Kn(m)), [u] = d;
  if (!K(u) || wa(d) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const m of d)
    f.insertAfter(m), f = m;
  Na(d, i);
  const p = e.getChildren();
  return e.append(...u.getChildren()), p.forEach((m) => m.remove()), e.setCaller(u.getCaller()).setCategory(u.getCategory()).setUnknownAttributes(u.getUnknownAttributes()).setIsCollapsed(u.getIsCollapsed()), u.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Wc(e, a) : Ug(e, { isContentChange: !0 })), !0;
}
function ly(e) {
  const t = e.getChildren();
  return Hl(t[0]) ? t.slice(1) : t;
}
function Vu(e, t, r) {
  const n = ly(e), i = { text: "", spans: [], sentinels: [] };
  return xn(n, i, t, r), { out: i, contentNodes: n };
}
const jA = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${Lt}(?=[\\s\\u200B\\\\|]|$)`
);
function uy(e, t) {
  const r = Wr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === Lt && !jA.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function dy(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = Vu(e, i, n);
  if (!Pa(o, r, i, n))
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
    u.isCollapsed() && (l = Ra(
      c,
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const f = uy(o.text, i);
  if (Zr(f.content) !== o.sentinels.length)
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
  if (kn(m) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && wr(p.followingBlocks, i) === Nr(r, i) && wr(p.children, i) === Nr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const h = p.children.map((w) => Kn(w)), g = p.followingBlocks.map((w) => Kn(w)), b = [...h, ...g];
  if (wa(b) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const k = Us([...a, ...r]).map((w) => ({
    number: w.getNumber(),
    sid: w.getSid()
  })), _ = a[0];
  _ ? h.forEach((w) => _.insertBefore(w)) : h.forEach((w) => e.append(w)), g.reduce((w, z) => w.insertAfter(z), e), Na(b, o.sentinels);
  const M = new Set(o.sentinels.flat().map((w) => w.getKey()));
  a.forEach((w) => {
    M.has(w.getKey()) || w.remove();
  }), r.forEach((w) => w.remove());
  const C = [...ly(e), ...g], $ = Us(C);
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
  if (!Zt(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Ds(e, t, Er, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Wr(r, { getMarker: Er }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Wu)
  );
}
function ji(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (F(r) && fy.has(r.getMarker()) || py(r)) {
      t.push(r);
      continue;
    }
    ae(r) && r.getMarker() === Wu && t.push(r);
    break;
  }
  return t;
}
function VA(e) {
  const t = (n) => F(n) && fy.has(n.getMarker()) || py(n);
  if (t(e) || ae(e) && e.getMarker() === Wu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n)) return n;
      if (!t(n)) return;
    }
}
function hy(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = ji(e);
  if (n.some((s) => ae(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (xn(e.getChildren(), i, t, r), xn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
const np = /^\\(?:\s|$)/, WA = /^\s*\\p(?:\s|$)/;
function gy(e, t) {
  const r = Wr(e, { getMarker: t }), [n, ...i] = r;
  if (typeof n != "object" || n.type !== "para" || n.marker !== "p" || WA.test(e))
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
function my(e, t, r) {
  return e === void 0 || /^\s/.test(r ?? "") ? !1 : t !== void 0 ? !/\s$/.test(t) : e !== mr.getType();
}
function yy(e) {
  return e === qe.getType() || e === gt.getType();
}
function HA(e) {
  if (!Zt(e)) return;
  const t = e.getPreviousSibling();
  if (!ae(t) && !Zt(t)) return;
  const r = e.getChildren(), n = t.getLastChild(), i = r.at(0), s = n?.getType();
  my(
    s,
    n && s && yy(s) ? n.getTextContent() : void 0,
    E(i) ? i.getTextContent() : void 0
  ) && t.append(ye(" ")), t.append(...r), e.remove();
}
function GA(e, t) {
  if (hn(e) !== qe.getType() || hn(t) !== qe.getType()) return !1;
  const { text: r, ...n } = e, { text: i, ...s } = t;
  return JSON.stringify(n) === JSON.stringify(s);
}
const JA = {
  type: "text",
  version: 1,
  detail: 0,
  format: 0,
  mode: "normal",
  style: "",
  text: " "
};
function YA(e, t) {
  const r = e.at(t), n = t > 0 ? e[t - 1] : void 0;
  if (!r || !n || hn(r) !== Pr.getType()) return;
  const i = hn(n);
  if (i !== it.getType() && i !== Pr.getType()) return;
  const s = tr(r), o = tr(n);
  if (!s || !o) return;
  const a = o.at(-1), c = s.at(0), l = a ? hn(a) : void 0;
  my(
    l,
    a && l && yy(l) ? Sr(a) : void 0,
    c ? Sr(c) : void 0
  ) && o.push({ ...JA });
  for (const d of s) {
    const u = o.at(-1);
    u && GA(u, d) ? Object.assign(u, { text: `${Sr(u) ?? ""}${Sr(d) ?? ""}` }) : o.push(d);
  }
  e.splice(t, 1);
}
function ip(e) {
  return typeof e == "object" && e.type === "chapter";
}
function by(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...ji(e)], o = hy(e, n, r);
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
    l.isCollapsed() && (a = Ra(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const d = gy(o.text, n);
  if (d.length === 0 && c)
    return i?.debug("[MarkerEdit] Chapter Tier 2 deferred: emptied chapter line holds the caret"), !1;
  if (Zr(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  const [u] = d, f = ip(u) ? u : void 0, p = d.find(ip);
  p && e.getSid() !== void 0 && (p.sid = e.getSid());
  const m = pr.serializeEditorState(
    { type: ur, version: lr, content: d },
    r
  );
  if (f && wr(m.root.children, n) === Nr(s, n)) {
    let g = !1;
    return e.getNumber() !== (f.number ?? "") && (e.setNumber(f.number ?? ""), g = !0), e.getAltnumber() !== f.altnumber && (e.setAltnumber(f.altnumber), g = !0), e.getPubnumber() !== f.pubnumber && (e.setPubnumber(f.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const h = m.root.children.map((g) => Kn(g));
  return h.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), ny(h, a, c, n, r), HA(h.at(0)), !0;
}
function zs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Be(n)) return;
    !t && (K(n) || ae(n) || we(n) || Te(n)) && (t = n), zp(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? VA(r) : void 0) ?? t;
}
function or(e, t) {
  const r = zs(e);
  return r ? K(r) ? KA(r, t) : we(r) ? by(r, t) : Te(r) ? dy(r, t) : sy([r], t) : !1;
}
const XA = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function sp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !XA.has(n[0])
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
          t.push(`\\${n}`), sp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), So(r.content, t), sp(r, t), i !== "false" && t.push(`\\${n}*`);
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
function op(e, t, r) {
  const n = zs(e);
  if (!je(n)) return !1;
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
  const a = Wr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    Fs.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  So(a, l);
  for (const d of l.join("").replaceAll(D, "~")) {
    if (Fs.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function Hu(e, t) {
  return ky(e, t, x.Paragraph);
}
function QA(e, t) {
  return ky(e, t, x.Character);
}
function ky(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !(Pe.isValidMarker(n) || Ul(n));
}
function ZA(e) {
  return [mt(e), Qs()];
}
function Gu(e) {
  er(e, 2);
}
function eP(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Ks(e) {
  const t = eP(e);
  e.splice(0, 0, ZA(e.getMarker())), t && Gu(e);
}
function qa(e, t) {
  e.setMarker(t), Ks(e), Gu(e);
}
function tP(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!$r(n)) {
    if (E(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(D), St(n, ue, Rr), n.setMode("token");
      return;
    }
    if (Xh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Qs());
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
function _s(e) {
  for (let t = e; t; t = t.getParent())
    if (ae(t)) return t;
}
function rP(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = _s(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = _s(r.getNode())?.is(s) ?? !1, a = _s(n.getNode())?.is(s) ?? !1;
    return !(o && !ap(r, s, "start") || a && !ap(n, s, "end"));
  });
}
function ol(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of rP(r)) t.add(n.getKey());
}
function nP(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!P(r) || !r.isCollapsed()) return;
  const n = _s(r.focus.getNode());
  n && t.add(n.getKey());
}
function iP(e) {
  const t = N();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (ol(e), t.removeText());
}
const sP = new RegExp(
  String.raw`^\\\+?([${Ot}]+)(?:[ \u00A0]|$)`
);
function oP(e, t) {
  const r = sP.exec(e.getTextContent());
  return !!r && Hu(r[1], t);
}
function aP(e, t) {
  if (!Sn(t.viewOptions)) return;
  if (Nt(e.getFirstChild())) {
    tP(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (oP(e, t.getMarker)) return;
    Ks(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ae(o) && !o.is(e))) {
      qa(e, Lt), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (je(r)) {
    const n = e.getChildren().filter((a) => !$r(a)), i = N();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : _s(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || I(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && er(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  e.setMarker(Lt), Ks(e);
}
function cP(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = vr(t, pa(e.getMarker()));
  return r === "" ? void 0 : r;
}
function xy(e) {
  const t = e.getChildren().filter((s) => !O(s) && se(s, ue) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(D) && r.setTextContent(r.getTextContent().slice(1));
  const n = cP(e);
  n && t.push(ye(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function lP(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && I(t) ? r = t.getChildAtIndex(e.offset) : O(t) && e.offset === 0 ? r = t : E(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), F(r) && (r = r.getFirstChild()), !O(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!F(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function uP() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = lP(e.anchor), r = t?.getParent();
  if (!t || !F(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), Ji(n) && n.getTextContent().startsWith(D) && n.setTextContent(` ${n.getTextContent().slice(D.length)}`), xy(r), E(n) && n.isAttached() && n.select(0, 0), !0;
}
function dP(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !O(c) && c.getTextContent() === Kt(s)
    ), a = si(e).some(({ node: c }) => O(c));
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
function fP(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    xy(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && or(e, t);
}
function al(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function Ty(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !Kp(e, n, i);
}
function Cy(e, t) {
  return e.length <= t ? e : e.slice(0, Ju(e, t));
}
function Ju(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of Nk(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const pP = 16;
function hP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (k) => t ? Yu(k, t).length : k.getTextContent().length;
  r ??= n;
  const i = N();
  if (!P(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Yo(s), l = Yo(o), d = i.getNodes(), u = new Map(d.map((k) => [k.getKey(), yP(k)])), f = d.length > 0 ? u.get(d[0].getKey()) : void 0, p = f && gP(s, f) ? f : void 0, m = (k) => {
    const _ = k > 0 ? mP(d, u, p, c, l, k, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), _ ? i.focus.set(_.node.getKey(), _.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!_;
  };
  let h = Math.min(e, n(i));
  if (m(h) && r(i) <= e) return !0;
  let g = 0, b = 0;
  h -= 1;
  for (let k = 0; k < pP && g <= h; k++) {
    const _ = Math.floor((g + h) / 2);
    m(_) && r(i) <= e ? (b = _, g = _ + 1) : h = _ - 1;
  }
  return m(b), !0;
}
function cl(e) {
  return e.isToken() || ro(e) || we(e.getParent());
}
function gP(e, t) {
  const r = I(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && ar(r.getKey(), 0, "text").isBefore(e);
}
function mP(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, d, u;
  const f = /* @__PURE__ */ new Map(), p = (h) => {
    const g = t.get(h.getKey());
    return g && r?.is(g) ? void 0 : g;
  }, m = (h) => {
    let g = u ? u.endBefore : h;
    for (; ; ) {
      const b = bP(g, e, n);
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
        const k = h === 0 ? n : 0, _ = h === a ? i : g.getTextContentSize(), M = _ - k, C = cl(g);
        if (C && c + M > s) return m(d);
        if (!C && c + M >= s) {
          const $ = Ju(g.getTextContent(), k + (s - c));
          return m({ node: g, offset: Math.max(k, $) });
        }
        c += M, d = { node: g, offset: _ };
      } else if (ii(g) || ni(g)) {
        const k = g.getTextContentSize();
        if (c + k > s) return m(d);
        c += k;
      }
    }
  }
  return m(d);
}
function yP(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (K(r) || wu(r)) && (t = r);
  return t;
}
function bP(e, t, r) {
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
  if (cl(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= d) {
    const g = f - d;
    return g >= (p(e.node) ? r : 0) ? { ...e, offset: g } : void 0;
  }
  const m = s > o ? i[s - 1] : void 0;
  if (!m || !t.some((g) => g.is(m))) return;
  if (cl(m))
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
          d === 0 ? Yo(i) : 0,
          d === n ? Yo(s) : u.length
        );
      } else (ii(l) || ni(l)) && (d !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function ll(e) {
  const t = e.getParent();
  return !!t && Ae(t, (r) => K(r) && !!r.getIsCollapsed()) !== null;
}
function _y(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    yt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), I(i)) for (const { node: s } of si(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function kP(e) {
  return e.getNodes().some(
    (t) => ii(t) || K(t) || me(t) || Ge(t) || wu(t)
  );
}
function Yo(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return I(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
function vy(e) {
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
const Xo = "usfm:", Sy = "usfmopen", My = "usfmclosed";
function xP(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const TP = new RegExp(
  [Xo, Sy, My].map(xP).join("|")
), CP = "\uFEFF", _P = /^usfm_(.+)$/;
function vP(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function SP(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function MP(e) {
  return e.startsWith(Xo) ? SP(e.slice(Xo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Ey(e) {
  for (const t of e.classList) {
    const r = _P.exec(t);
    if (r) return r[1];
  }
}
function EP(e) {
  const t = Ey(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function AP(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(Xo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Sy) && !n.contains(My)) && Ey(r) !== void 0)
      return !0;
  }
  return !1;
}
function Ay(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(MP(e.nodeValue ?? ""));
    return;
  }
  if (!vP(e)) return;
  const { classList: n } = e, i = (d) => e.childNodes.forEach((u) => Ay(u, d, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? EP(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function PP(e) {
  if (!TP.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !AP(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => Ay(n, !1, r)), r.join("").replaceAll(CP, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function NP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = se(e, ue);
  if (r === "attribute" || r === Rr || vy(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (we(o) || Be(o)) return;
  const n = t.startsWith(D) && F(e.getParent()), i = n ? t.slice(1) : t, s = (n ? D : "") + i.replace(/ (?=[ \u00A0])/g, D).replace(new RegExp("(?<=\\u00A0) ", "g"), D);
  s !== t && e.setTextContent(s);
}
function wP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function OP(e, t) {
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
    return Py(r, t);
}
function Py(e, t) {
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(e.getData("text/plain")), i = e.getData("text/html"), s = i ? PP(i) : void 0;
  return {
    text: s ? r(s) : n || (i ? r(wP(i)) : ""),
    isInternal: OP(
      e.getData("application/x-lexical-editor"),
      t
    )
  };
}
const cp = String.raw`\\(?:\+?[${Ot}]+\*?|\*)`, RP = new RegExp(
  String.raw`(?<=${cp})\u00A0|\u00A0(?=${cp})`,
  "g"
);
function Xu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(RP, " ").replaceAll(D, "~");
}
const Ny = new RegExp(
  String.raw`\\c(?![${Ot}])[ \u00A0]*[^\s\\]*`,
  "g"
), wy = new RegExp(String.raw`\\id(?![${Ot}])[^\n\\]*`, "g"), qP = new RegExp(
  String.raw`^(?:${Ny.source}|${wy.source})`
);
function Qo(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Ny, "").replace(wy, "");
    return qP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
const $P = new RegExp(
  String.raw`\\v(?![${Ot}*])[ \u00A0]*[^\s\\]*[ \u00A0]?`,
  "g"
), IP = new RegExp(
  String.raw`\\([${Ot}]+)(?![${Ot}*])[ \u00A0]?`,
  "g"
);
function Zo(e, t) {
  return e.replace($P, "").replace(
    IP,
    (r, n) => t(n)?.type === x.Paragraph ? "" : r
  );
}
function ul(e) {
  if (E(e) && se(e, ue) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Le(t)) return !0;
  return !1;
}
function LP(e) {
  return ul(e.anchor.getNode()) || ul(e.focus.getNode());
}
function DP(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && ul(t.getNode());
}
function UP(e, t, r, n) {
  const s = DP(e) ? r ? Zo(t, n) : t : Xu(
    r ? Zo(Qo(t), n) : Qo(t)
  );
  s && e.insertText(s.replace(/\n/g, " "));
}
function FP(e, t = !1, r = () => {
}, n = () => {
}) {
  const i = Mo(e, _n()._config.namespace);
  if (!i) return !1;
  const s = N(), o = P(s) && LP(s);
  if (!o && i.isInternal && !t || t && P(s) && Pi(s))
    return !1;
  const { text: a } = i;
  return !a || !P(s) ? !1 : (e?.preventDefault(), o ? (UP(s, a, t, n), !0) : (Oy(s, a, t, r, n), !0));
}
function Oy(e, t, r, n, i) {
  const s = Qo(t), o = Xu(
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
    const u = N();
    P(u) && u.insertText(l);
  });
}
function zP(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return K(t) ? !yt(e.getPreviousSibling()) : !1;
}
function KP(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const r = e.getParent();
  if (!K(r) || !yt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function BP(e) {
  const t = e.getParent();
  return (K(t) ? t.getCaller() : void 0) || vs;
}
function jP(e) {
  const t = e.getParent();
  return !t || yn(t) === void 0;
}
function Qu(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Al(e);
  let l = "", d = !0;
  for (const u of t) {
    if (I(u) && !u.isInline()) {
      !d && jP(u) && (l += `
`), d = !u.isEmpty();
      continue;
    }
    if (d = !1, yt(u))
      (u !== n || !e.isCollapsed()) && (l += (u === r ? "" : " ") + BP(u));
    else if (E(u)) {
      let f = u.getTextContent();
      u === r ? u === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : u === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += zP(u) ? "" : f.replaceAll(D, " ") + KP(u, u === n);
    } else (ii(u) || ni(u)) && (u !== n || !e.isCollapsed()) && (l += u.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function Ry(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function VP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => Te(r) || we(r)
    )
  );
}
function WP(e) {
  const t = N();
  if (!P(t) || t.isCollapsed()) return;
  const r = Qu(t), n = {
    "text/plain": r,
    "text/html": Ry(r)
  };
  if (Is() || VP(t)) return n;
  const i = Pk(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function lp(e, t, r, n) {
  const i = N();
  if (!P(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !cm();
  const s = WP(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], qy(e, t, i, s, r, n)) : !1;
}
function qy(e, t, r, n, i, s) {
  const o = al(s);
  if (o !== void 0 && Ty(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), dl(e, t, { "text/plain": Cy(a, o) })) : dl(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function dl(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || Ak(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function ei(e) {
  return Ae(e, we) ?? void 0;
}
function $y(e) {
  return [e.anchor.getNode(), e.focus.getNode(), ...e.getNodes()].some(
    (t) => ei(t) !== void 0
  );
}
function Zu() {
  const e = N();
  if (!P(e)) return;
  if (!e.isCollapsed()) {
    if (!$y(e)) return;
    e.removeText();
  }
  const t = N();
  return P(t) ? ei(t.focus.getNode()) : void 0;
}
function Iy(e, t) {
  const r = Zu();
  if (!r) return !1;
  const n = Hn(e);
  return r.insertAfter(n), Sn(t) ? qa(n, e) : n.selectStart(), !0;
}
function HP() {
  const e = N();
  return P(e) && !e.isCollapsed() && ei(e.anchor.getNode())?.is(ei(e.focus.getNode())) ? !0 : Zu() !== void 0;
}
function GP(e) {
  if (!$y(e)) return !1;
  if (!e.isCollapsed()) return !0;
  const t = e.focus.getNode(), r = ei(t), n = r && Gi(r);
  return !(n?.is(t) && e.focus.offset === n.getTextContentSize());
}
function Ly(e, t, r, n) {
  const i = N();
  if (t && P(i) && GP(i))
    return !0;
  if (!Zu()) return !1;
  const s = N();
  return e && P(s) && Oy(s, e, t, r, n), !0;
}
const bo = "﷐";
function JP(e, t) {
  const { opener: r, value: n, wrapper: i } = Zl(e), s = i ?? r;
  if (!s) return !1;
  const o = t.focus.getNode();
  return o.is(e) ? t.focus.offset > s.getIndexWithinParent() : [i, r, n].some(
    (a) => a && (a.is(o) || a.isParentOf(o))
  );
}
function YP(e, t, r) {
  const { closer: n, wrapper: i } = Ql(e), s = i ?? n;
  if (!s) return t;
  const o = r.focus.getNode();
  return (o.is(e) ? r.focus.offset > t.getIndexWithinParent() + 1 : !o.is(t)) ? s : t;
}
function fl(e) {
  const t = N();
  if (!P(t)) return !0;
  const r = ei(t.focus.getNode());
  if (!r || !r.is(ei(t.anchor.getNode()))) return !0;
  const n = Gi(r);
  if (!n) return !1;
  if (JP(r, t)) {
    const u = ye("");
    return (ji(r).at(-1) ?? r).insertAfter(
      Yt().append(u)
    ), u.select(0, 0), !0;
  }
  const i = r.getPreviousSibling(), s = (ji(r).at(-1) ?? r).getNextSibling(), o = YP(r, n, t), a = o.is(n) && !/\s$/.test(n.getTextContent()) ? " " : "", c = ye(a + bo);
  if (o.insertAfter(c), !by(r, e))
    return c.remove(), !1;
  const l = XP(i, s).flatMap((u) => I(u) ? u.getAllTextNodes() : [u]).find((u) => E(u) && u.getTextContent().includes(bo));
  if (!E(l)) return !1;
  const d = l.getTextContent().indexOf(bo);
  return l.setTextContent(l.getTextContent().replace(bo, "")), l.select(d, d), !0;
}
function XP(e, t) {
  const r = [];
  for (let n = e ? e.getNextSibling() : Ue().getFirstChild(); n && !n.is(t); n = n.getNextSibling())
    r.push(n);
  return r;
}
const Dy = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Kh(Ue().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = Jh(e), r = fu(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = bT(0, o);
        const a = XC(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || kT(c) && Gl(parseInt(n, 10), c);
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
  return Pe.isValidMarker(e, t) || !!Dy[e] || it.isValidMarker(e, t) || xe.isValidMarker(e, t);
}
function QP(e, t) {
  return xe.isNoteContentMarker(e) ? !1 : xe.isValidMarker(e, t);
}
function Uy(e, t, r, n, i, s) {
  const o = Lg(
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
    getMarker: cu(o ?? Li),
    logger: i
  };
  if (Pe.isValidMarker(e, n?.extraValidMarkers)) {
    let d;
    return { action: (f) => {
      f.editor.update(() => {
        fl(a) && (d = Uy(
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
  const c = i1(e, n?.extraValidMarkers);
  return c ? { action: (d) => {
    d.editor.update(() => {
      if (!fl(a)) return;
      const u = N();
      P(u) && (au(u), d.noteText = u.getTextContent());
      const { content: f, highlightInserted: p } = c.action(d), m = Qd(f, pr, r), h = Wa(m);
      if (P(u)) {
        const g = u.anchor.getNode(), b = g.getParent(), k = Xn(g), _ = u.anchor.key === u.focus.key;
        if (F(h) && k && _ && !xc(h, o))
          t1(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (F(h) && !_ && !xc(h, o) && r1(u))
          n1(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          s1(
            u,
            () => Wa(m)
          );
        else if (I(h) && !h.isInline()) {
          const M = u.insertParagraph();
          if (M) {
            const C = M.getChildren();
            h.append(...C), M.replace(h), ct(h) && es(h) || h.selectStart();
          }
        } else if (F(h) && E(g) && !O(g) && F(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        xc(h, o)) {
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
          const M = F(b) ? b : void 0, C = M ? ZP(g, u.anchor.offset) : [];
          let w = (M ?? g).insertAfter(h);
          if (gr(h)) {
            const z = {
              ...r || Ui(),
              markerMode: "hidden"
            }, v = Qd(
              f,
              pr,
              z
            ), V = Wa(v);
            w = w.insertAfter(V);
          }
          if (C.length > 0 && M) {
            const z = ea(M).append(...C);
            w.insertAfter(z), M.isEmpty() && M.remove();
          } else E(w.getNextSibling()) || w.insertAfter(ye(D));
          I(w) && w.selectEnd();
        } else if (u.insertNodes([h]), g1(h), p) {
          const M = Vp();
          M.add(h.getKey()), zr(M);
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
function ZP(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function xc(e, t) {
  return ((t ?? Li).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function e1(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(mt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function t1(e, t, r, n) {
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
    const [o, a] = Vi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Ii(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !O(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function r1(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || F(n)) continue;
    if (!E(n) || n.getType() !== qe.getType() || se(n, ue) === "attribute") return !1;
    const i = yC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Xn(n) && (r = !0);
  }
  return r;
}
function n1(e, t, r) {
  const n = Dm(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Xn(a)) return;
    Ii(a, { renderGlyphs: r });
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
function i1(e, t) {
  let r = Dy[e];
  return r || (it.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: it.getType(), marker: e, content: [] }] })
  } : xe.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: xe.getType(), marker: e };
      return (xe.isValidFootnoteMarker(e) || xe.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function s1(e, t) {
  const r = e.getNodes(), [n, i] = Vi(e);
  let s;
  r.forEach((o, a) => {
    if (I(s) && s.isParentOf(o))
      return;
    const c = Fy(
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
    s || (s = t(), c.insertBefore(s), l = !0, F(s) && s.getChildren().some((u) => O(u) && u.getMarkerSyntax() === "opening") && e1(s, F(s.getParent()))), a1(c, s, l);
  }), (E(s) || I(s)) && s.selectEnd();
}
function Vi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function ed(e) {
  return Ce(e) || K(e) || K(e.getParent());
}
function Fy(e, t, r, n, i) {
  if (!ed(e)) {
    if (E(e))
      return o1(e, t, r, n, i);
    if (I(e) && e.isInline())
      return e;
  }
}
function o1(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function a1(e, t, r) {
  if (E(t)) {
    const n = gl(e, t);
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
    gl(e, t), r && F(t) && t.getChildren().some((s) => O(s)) && E(e) && !O(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function gl(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    uu(n), E(n) || t.insertBefore(ye(" "));
  }
  return r;
}
function zy(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = ti(d, t);
    if (!f) return !1;
    const p = E(d) ? d.getTextContentSize() : 0;
    if (up(f, r), E(d) && d.isAttached()) {
      const m = d.getTextContentSize(), h = Math.max(p - m, 0), g = Math.max(0, Math.min(u - h, m)), b = N();
      P(b) && b.setTextNodeRange(d, g, d, g);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Vi(e);
  if (!rd(n, t, s, o)) return !1;
  const a = td(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = ti(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = Vy(u, a);
    f && (up(f, r), l = !0);
  }), Wy(a, i), l;
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
  }), Ec(e);
}
function td(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Fy(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function ti(e, t) {
  let r = e, n;
  for (; r && !ct(r); ) {
    if (K(r)) return;
    !n && F(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Ky(e) {
  const t = Ae(
    e,
    (r) => K(r) || ct(r)
  );
  return K(t);
}
function By(e) {
  return e.filter(
    (t) => !ed(t) && (E(t) || I(t) && t.isInline())
  );
}
function c1(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || ed(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function l1(e, t, r) {
  return e.getChildren().some(
    (n) => I(n) && t.some((i) => n.isParentOf(i)) && !jy(n, r)
  );
}
function rd(e, t, r, n, i) {
  const s = By(e), o = c1(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ti(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !l1(l, s, o);
  });
}
function jy(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Nt(r));
}
function Vy(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (I(d) && t.some((u) => d.isParentOf(u))) {
      if (!jy(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Nt(n[s - 1]) && (s -= 1), o < n.length - 1 && Nt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(ea(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(ea(e).append(...c)), e;
}
function ea(e) {
  return xk(e);
}
function Wy(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function u1(e, t, r) {
  if (e.isCollapsed()) {
    const l = ti(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Ld(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Vi(e);
  if (!rd(n, r, i, s, t)) return !1;
  const o = td(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = ti(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = Vy(d, o);
    u && (Ld(u, t), c = !0);
  }), c;
}
function d1(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (g) => g !== t
  ), s = e.getNodes(), [o, a] = Vi(e);
  if (!!!i?.some(
    (g) => rd(s, g, o, a)
  ) && !f1(s, t)) return !1;
  let l = !1;
  i?.forEach((g) => {
    const b = N();
    P(b) && zy(b, g, n) && (l = !0);
  });
  const d = N();
  if (!P(d)) return l;
  const u = d.isBackward(), [f, p] = Vi(d), m = td(
    d.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const h = m.filter(
    (g) => !Ky(g) && !ti(g, t)
  );
  return h.length > 0 && (p1(h).forEach((g) => h1(g, t)), l = !0), Wy(m, u), l;
}
function f1(e, t) {
  return By(e).some(
    (r) => !Ky(r) && !ti(r, t)
  );
}
function p1(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function h1(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => F(a) && a.getMarker() === t
  ), s = i ? ea(i) : Br(t);
  e[0].insertBefore(s), s.append(...e), i === r || gl(e[0], s);
}
function g1(e) {
  me(e) && (uu(e.getPreviousSibling()), wg(e.getNextSibling()));
}
const Hy = {
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
}, dp = "psc-active-text", ko = "psc-empty-text";
function m1({ viewOptions: e }) {
  const [t] = ce(), r = Y(void 0), n = e?.hasActiveTextFocusBox ?? !1;
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
        ua,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${ko}`);
          if (!c) return !1;
          const l = Wi(c);
          if (!me(l)) return !1;
          const d = l.getParent();
          if (!I(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        kt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = Tc(), f = y1(), p = [], m = [];
          return Ue().getChildren().forEach((h) => {
            if (!I(h)) return;
            const { emptyKeys: g, nonEmptyKeys: b } = k1(h);
            p.push(...g), m.push(...b);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(ko) : t.getElementByKey(u)?.classList.add(ko);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(ko));
      }),
      t.registerCommand(
        Ol,
        () => (i(void 0), !1),
        kt
      ),
      t.registerCommand(
        Tk,
        () => {
          const o = t.getEditorState().read(Tc);
          return o !== r.current && i(o), !1;
        },
        kt
      )
    ];
    return i(t.getEditorState().read(Tc)), Oe(...s);
  }, [t, n]), null;
}
function Tc() {
  return b1(N() ?? void 0)?.getKey();
}
function y1() {
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
function b1(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function k1(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (me(c)) break;
      if (!(Ut(c) || O(c)) && c.getTextContent().replaceAll(Po, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function ml(e, t) {
  const r = yu();
  if (!r?.end) return;
  const n = x1(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = Sa(r);
        return i ? Qu(i) : void 0;
      },
      { editor: n.editor }
    );
}
const Cc = /* @__PURE__ */ new WeakMap();
function x1(e, t) {
  const r = e.getEditorState();
  if (Cc.has(r)) {
    const i = Cc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = T1(r, t);
  return Cc.set(r, n), n;
}
function T1(e, t) {
  const r = Au(Su);
  if (!r) return;
  const n = vo.deserializeEditorState(e, t);
  if (!n) return;
  const i = Ck({
    namespace: "markers-view-copy",
    nodes: [at, ...Cu],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    pr.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function C1({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = ce();
  return B(() => {
    const n = (i, s) => {
      const o = N();
      if (!P(o) || o.isCollapsed()) return !1;
      const a = ml(r, e);
      return a === void 0 ? !1 : qy(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": Ry(a) },
        s,
        t
      );
    };
    return Oe(
      r.registerCommand(Oi, (i) => n(i, !1), Me),
      r.registerCommand(dr, (i) => n(i, !0), Me)
    );
  }, [r, e, t]), null;
}
const fp = /* @__PURE__ */ new WeakMap();
function _1({
  limit: e,
  viewOptions: t
}) {
  const [r] = ce(), n = Y(al(e)), i = Y(t), s = Y(!1), o = Y(void 0);
  return B(() => {
    n.current = al(e), i.current = t, o.current?.();
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
      if (!C || !M1(C, M)) return;
      b.preventDefault();
      const $ = Cy(
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
      n.current !== void 0 && vk(b, "a", { ctrlKey: !Ri, metaKey: Ri }) && (A1(c?.activeElement, r.getRootElement()) || b.preventDefault());
    }, u = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", d, !0), c = void 0;
    }, f = () => {
      const b = n.current === void 0 ? void 0 : a;
      b !== c && (u(), c = b, c?.addEventListener("copy", l), c?.addEventListener("keydown", d, !0));
    };
    o.current = f;
    const p = (b) => (b?.preventDefault(), !0), m = (b) => {
      const k = n.current;
      if (k === void 0 || (s.current = !1, Ty(r, b))) return !1;
      if (k <= 0) return p(b);
      const _ = N();
      if (la(_))
        return _.getTextContent().length + _y(_.getNodes()) <= k ? !1 : p(b);
      if (!P(_) || _.isCollapsed()) return !1;
      const M = v1(r, i.current);
      return M.$size(_) <= k ? !1 : (hP(k, M.options), _.isCollapsed() ? p(b) : (r.isEditable() || Wp(() => S1(r)), s.current = !0, !1));
    }, h = (b, k) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const _ = N();
      if (!P(_) || _.isCollapsed()) return !1;
      const M = k && r.isEditable() && !kP(_);
      return dl(
        b && typeof b == "object" && "clipboardData" in b ? b : null,
        r,
        { "text/plain": Yu(_, ll) },
        M ? () => _.removeText() : void 0
      );
    }, g = Oe(
      r.registerCommand(Oi, m, ke),
      r.registerCommand(dr, m, ke),
      r.registerCommand(
        Oi,
        (b) => h(b, !1),
        Mr
      ),
      r.registerCommand(
        dr,
        (b) => h(b, !0),
        Mr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        _k,
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
function v1(e, t) {
  if (no(t)) {
    const n = (i) => Qu(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && ml(e, r) !== void 0) {
    const n = (i) => ml(e, r)?.length ?? Yu(i, ll).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + _y(n.getNodes()),
    options: { $isHidden: ll }
  };
}
function S1(e) {
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
    const a = Sk(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = I(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function M1(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const E1 = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function A1(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? E1.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const P1 = /^\+/;
function nd(e, t) {
  const r = t.replace(P1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Gy(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Jy(e, t) {
  return Gy(e, t) !== void 0;
}
function yl(e, t) {
  const r = Gy(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ta(e, t, r) {
  const n = I(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function N1(e, t, r, n, i) {
  const s = nd(n, t);
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
      i || N1(s, o, t, r, n), Ni(s, t, r, n, i || o === "xq");
    } else if (me(s)) {
      if (i) continue;
      const o = nd(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? Ni(s, s.getMarker(), r, n, i) : Be(s) || I(s) && Ni(s, t, r, n, i);
}
function w1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = nd(e, a);
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
  for (const o of Ue().getChildren())
    Be(o) || (Te(o) ? (i(o, o.getMarker()), s(o) && Ni(o, void 0, e, r, !1)) : Ge(o) ? i(o, o.getMarker()) : ae(o) ? (i(o, o.getMarker()), s(o) && Ni(o, o.getMarker(), e, r, !1)) : I(o) && s(o) && Ni(o, "p", e, r, !1));
  return r;
}
function O1(e) {
  return !!e?.includes("(basic)");
}
function R1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Yy(e, t) {
  return !e.startsWith("zpa") && e !== "c" && pl(e, t);
}
function id(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Xy(e, t) {
  const r = [];
  for (const n of t) {
    const i = id(e, n);
    i && yl(r, i);
  }
  return r;
}
function Eo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: R1(e.description),
    isBasic: O1(e.description)
  };
}
function q1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function bl(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : q1(e.marker, t.marker);
}
function kl(e, t, r) {
  if (t.noteMarker) return [];
  const n = Xy(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Yy(i.marker, r)
  ).filter((i) => {
    const s = id(e, i.marker);
    return s !== void 0 && Jy(n, s);
  }).map((i) => Eo(i, "paragraph")).sort(bl);
}
function $1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Yy(c.marker, r)
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
function I1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function L1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function D1(e, t, r) {
  return [
    ...I1(e, t.openCharMarkers),
    ...$1(e, t, r)
  ].sort(L1);
}
function U1(e, t, r) {
  if (t.source === "paragraph") return kl(e, t, r);
  const n = D1(e, t, r);
  return n.length > 0 ? n : kl(e, t, r);
}
function F1(e, t, r) {
  const n = kl(e, t, r), i = Xy(e, t.previousParaMarkers), s = id(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Jy(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
function Qy(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && Sn(r)) {
    qa(e, t);
    return;
  }
  Jg(e, t);
}
function Zy() {
  const e = N();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = eb(e);
    return t !== "removed" ? t : (xl(), "handled");
  }
  return xl() ? "handled" : "declined";
}
function z1(e, t) {
  if (!t) return e;
  const r = NA.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function hp(e, t) {
  const r = N();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!tb())
      return "declined";
  } else {
    const s = eb(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => z1(s, t)
  );
  gp(n ?? "");
  for (const s of i)
    xl(), gp(s);
  return "handled";
}
function K1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Wi(n);
  if (!i) return !1;
  const s = zt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function eb(e) {
  const t = zt(e.anchor.getNode()), r = zt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), B1() ? "removed" : "needs-plain-split");
}
function gp(e) {
  if (e === "") return;
  const t = N();
  P(t) && t.insertText(e);
}
function B1() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = zt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function tb() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = zt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function xl() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = tb();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Br("fp", { closed: "false" });
  i.append(mt("fp"));
  const s = E(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
    d && (xT(d), i.append(d));
  }
  return i.getChildren().every(O) && i.append(ye(Qt)), rb(i), !0;
}
function rb(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (E(t)) {
    const r = ba(t);
    t.select(r, r);
    return;
  }
  if (I(t)) {
    rb(t);
    return;
  }
  e.selectEnd();
}
function j1(e) {
  const t = [];
  let r = e;
  for (; r; )
    F(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function V1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ue().getChildren()) {
    if (t && n.is(t)) {
      (Te(n) || we(n)) && r.push(n.getMarker());
      break;
    }
    (Te(n) || Ge(n) || ae(n)) && r.push(n.getMarker());
  }
  return r;
}
function W1(e) {
  let t = e;
  for (; I(t); ) {
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
  if (Nt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && $r(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(W1(i)) && r === 0 : !1;
}
function G1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Nt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && $r(i) && t.is(i) && r === 0;
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
  const e = N();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Ae(t, ae), s = i ? void 0 : Ae(t, Te), o = !n && !s && (!i || G1(i, t, r)) ? "paragraph" : "character", a = zt(t);
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
    inMarkerText: ou(t, r),
    anchorRect: J1()
  };
}
function X1() {
  const e = N();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = wA.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function Q1(e, t, r) {
  Qy(e, t, r), Gu(e);
}
function Z1(e, t, r) {
  const n = N();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = Ae(i, ae);
  if (t === "backslash" && s && H1(s, i, n.focus.offset)) {
    Q1(s, e, r);
    return;
  }
  Tl(e, r);
}
function nb(e, t) {
  const r = e.getNode(), n = Um(I(r) ? r : r.getParent());
  return t.is(n);
}
function e0(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !nb(e, t);
}
function ra(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function t0(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!O(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!F(r)) return e;
  const n = r.getParent();
  return n ? ar(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function r0(e, t, r) {
  const n = N();
  if (!P(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!nb(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && e0(s, e)) return !1;
  const o = Hl(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (ra(n.anchor, e, o), ra(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = N();
  if (!P(a) || !a.isCollapsed()) return !1;
  const c = Km(a);
  if (!c) return !1;
  const { parent: l, moving: d } = zm(
    t0(c.anchor)
  );
  if (!e.is(l)) return !1;
  const u = d.filter((m) => !m.is(o)), f = Hn(t);
  e.insertAfter(f), f.append(...u);
  const [p] = u;
  return F(p) ? xa(p) : f.select(0, 0), Sn(r) && Ks(f), !0;
}
function n0(e, t) {
  const r = N();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function ib(e) {
  const t = N();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function i0(e) {
  const t = Ae(e.anchor.getNode(), Te);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !Hl(r) || (ra(e.anchor, t, r), ra(e.focus, t, r));
}
function s0(e, t, r, n) {
  const i = N();
  if (P(i) ? i0(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && X1(), e.kind === "closeTag") {
    ib(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Zy() !== "declined") return;
  if (e.kind === "paragraph" && it.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    Z1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Pe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return fl({
      viewOptions: n.viewOptions ?? Ui(),
      getMarker: cu(n.styleInfo ?? Li),
      logger: n.logger
    }) ? Uy(
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
function Tl(e, t) {
  if (Iy(e, t)) return !0;
  const r = N();
  if (!P(r)) return !1;
  au(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!Ae(n, ae)) {
    const o = Ae(n, Te);
    if (o) return r0(o, e, t);
  }
  const i = Sn(t);
  if (Bm()) {
    const o = N();
    if (!P(o)) return !1;
    const a = Ae(o.anchor.getNode(), ae);
    return a ? (a.setMarker(e), i && Ks(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return ae(s) ? (i ? qa(s, e) : s.setMarker(e), !0) : !1;
}
function o0() {
  const [e] = ce();
  return B(() => e.registerCommand(Jp, () => !0, kt), [e]), null;
}
function a0(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = MA.exec(e)?.[1];
  return r === void 0 ? !1 : !Hu(r, t);
}
function sb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !a0(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ae(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!ae(i) && !Te(i)))
    return [i, r];
}
function ob(e, t) {
  const r = sb(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return Te(n) ? dy(n, t, [i]) : sy([n, i], t);
}
function c0(e, t) {
  const r = N();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function ab(e) {
  const t = EA.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function l0(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = ab(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function u0(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if (F(n)) {
      xa(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function mp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = ab(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  u0(e);
}
function yp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function cb(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return or(e, r);
  const n = l0(e), i = e.getParent();
  if (ae(i)) {
    if (!Hu(t, r.getMarker))
      return ob(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : or(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), yp(s, t) && mp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (F(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(F(i) ? QA(t, r.getMarker) : Pe.isValidMarker(s)))
      return or(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return or(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (c0(c, nt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), yp(a, s) && mp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return or(e, r);
}
function d0(e) {
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
function f0(e, t) {
  const r = e.getTextContent();
  if (Jr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Le(e.getParent()) && Yl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !d0(e)) {
    ET(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = vA.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), cb(e, n[1], t);
      return;
    }
    if (SA.test(r)) {
      t.pendingKeys.delete(e.getKey()), or(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = nt(e.getMarker(), e.getNested());
    if ((F(n) || K(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = N(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ye(r.slice(i.length));
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
  if (gg(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function lb(e) {
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
const hs = lb("v"), h0 = lb("c"), bp = /^[ \u00A0]*$/;
function Cl(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === qe.getType() && n.getMode() === "normal" && se(n, ue) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = ye(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function g0(e, t) {
  const r = e.getTextContent(), n = Xt("v", e.getNumber());
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
    if (l && bp.test(l[2] ?? "")) {
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
      const [, l, d, u] = c, f = N(), p = P(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(Xt("v", d));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Cl(e, u, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), or(e, t);
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
  e.setNumber(o), e.setTextContent(Xt("v", o)), a && Cl(e, a, a.length);
}
const m0 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function y0(e, t) {
  if (!vy(e)) return !1;
  const r = e.getParent();
  if (!K(r)) return !1;
  const n = e.getTextContent();
  if (n === Kt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = m0.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = N(), c = P(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Kt(s)), o) {
    const l = n.length - o.length, d = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const u = Cl(e, o, d);
    u.isUnmergeable() || u.toggleUnmergeable();
  }
  return !0;
}
function b0(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = Xt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = h0.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function ub(e) {
  if (Ze(e)) {
    const { wrapper: t } = ya(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = Xl(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (we(e)) {
    const t = [], r = Ql(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Zl(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Ie(e)) {
    const t = [], r = Ps(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Ps(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function k0(e) {
  const t = N();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return ub(e).some((n) => r.is(n));
}
function x0(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ae(e) && Xh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Ns)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && to(l, e) && (i || k0(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ub(e))
    l.remove(), n = !0;
  let s = !1;
  if (F(e)) {
    const l = OT(e);
    l !== void 0 && fx(l) && (ag(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Ns)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (EC(l, e)) {
        Os(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && vg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Ta(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function kp(e) {
  return E(e) && e.getType() === qe.getType() && e.getMode() === "normal" && se(e, ue) !== "attribute";
}
function T0(e) {
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
function xo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = T0(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ne(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Jr(c)) continue;
      const m = Vm.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = cb(c, m[1], e) || n : r === "idle" && op(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : ob(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = or(c, e) || n;
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
    const f = x0(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && op(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = or(d, e) || n;
    }
  }
  return n;
}
function db(e) {
  if (Qr(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (F(t)) return ks(t) !== void 0;
  return !1;
}
function C0(e) {
  const t = Yn(e);
  if (!t) return !1;
  const r = Jn(t.kind);
  return !Ta(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function xp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Be(t) || bg(t)) return !0;
  return !1;
}
function _0(e, t) {
  const r = e.getTextContent(), n = se(e, ue), i = e.getParent();
  if (n !== "attribute" && we(i)) {
    r.replace(/^[ \u00A0]+/, "") === Xt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (y0(e, t)) return;
  if (n === "attribute") {
    C0(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && db(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !xp(e))
      t.pendingKeys.add(e.getKey());
    else if (ig(e)) t.pendingKeys.add(e.getKey());
    else if (we(zs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      F(a) && cg(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (xp(e)) return;
  const s = N(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (AA.test(o)) {
    if (Tx(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), or(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function v0(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : vg(e, t);
}
function S0(e) {
  const t = (r) => {
    if (O(r)) {
      Jr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Qr(r)) {
      gg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Ns)
      n.settleScope !== "none" && n.ownerPredicate(r) && (to(n, r) || v0(n, r)) && e.pendingKeys.add(r.getKey());
    if (Ie(r)) {
      r.getTextContent() !== Xt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== qe.getType() || se(r, ue) === "attribute") return;
      const n = r.getParent();
      if (we(n)) {
        r.getTextContent() !== Xt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && db(r) || i.includes("//") || ig(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (F(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Be(r)) {
      if (Le(r) && r.getChildrenSize() === 0) {
        const n = Yn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      I(r) && r.getChildren().forEach(t);
    }
  };
  Ue().getChildren().forEach(t);
}
const fb = Yp(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function _c(e) {
  const t = e();
  return vt(Pl), vt(lh), t;
}
const Tp = 8, M0 = 1e3;
function Ti(e, t) {
  const r = Ie(e) ? ["va", "vp"] : Ze(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    OC(Jn(n), e, t.pendingKeys);
}
function E0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Rl) || i.updateTags.has(Ss)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ne(o);
        if (!c) continue;
        const l = Yn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ne(o.getKey());
        c?.isAttached() && Jn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(qe, r),
    e.registerMutationListener(mr, r),
    e.registerMutationListener(Hr, r),
    e.registerMutationListener(Gr, r)
  );
}
function na(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = N();
  return r ? t ? _m(r, t) : P(r) && Pi(r) : !1;
}
function A0(e, t, r) {
  return Oe(
    e.registerCommand(
      Gt,
      (n) => {
        if (Is() || na(t)) return !1;
        const i = Mo(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Qo(i.text) : i.text, o = r && t.structureProtectionMode === "protected" ? Zo(s, t.getMarker) : s, a = r ? Xu(o) : o;
        if (a.includes(`
`)) {
          const c = a.split(`
`);
          let l = hp(c, t.getMarker);
          if (l === "declined" && K1(e) && (l = hp(c, t.getMarker)), l === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      ke
    ),
    e.registerCommand(
      Gt,
      (n) => {
        if (Is() || na(t)) return !1;
        const i = Mo(n, e._config.namespace);
        if (!i) return !1;
        const s = Ly(
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
        const i = Mo(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !TA()) return !1;
        const o = N();
        return t.structureProtectionMode === "protected" && P(o) && Pi(o) ? !1 : (n?.preventDefault(), P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Mi, void 0), a === "") return;
          const l = N();
          P(l) && l.insertText(a);
        }), !0);
      },
      Me
    ),
    e.registerCommand(
      Gt,
      () => (t.splitExpected.current = !0, !1),
      kt
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
  const [o] = ce(), a = e?.markerMode === "editable", c = !!e && no(e), l = Y(void 0), d = Y(n), u = Y(s);
  return B(() => {
    d.current = n, u.current = s;
    const f = l.current;
    f && (e && (f.viewOptions = e), f.getMarker = t ?? Er, f.logger = r, f.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), B(() => {
    if (!a || !e) return;
    const f = {
      viewOptions: e,
      getMarker: t ?? Er,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = f;
    const p = _C(o, f.pendingKeys);
    let m, h = !1, g, b = !1, k = !1, _ = 0;
    const M = () => _ < Tp ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Tp} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), C = (v, V = "departure") => {
      o.update(() => {
        _ = _c(
          () => xo(f, v, V)
        ) ? _ + 1 : 0;
      });
    };
    let $;
    const w = () => {
      if ($ !== void 0 && clearTimeout($), $ = void 0, k || f.pendingKeys.size === 0) return;
      const v = d.current ?? M0;
      v < 0 || ($ = setTimeout(() => {
        $ = void 0, !(k || f.pendingKeys.size === 0) && (h || M() || C(void 0, "idle"));
      }, v));
    }, z = Oe(
      o.registerNodeTransform(mr, (v) => {
        if (o.isComposing()) return;
        f0(v, f);
        const V = Yn(v);
        V && (Ie(V.owner) || K(V.owner) || we(V.owner) || Ze(V.owner) && ya(V.owner).wrapper === void 0) && Ti(V.owner, f);
      }),
      o.registerNodeTransform(gt, (v) => {
        o.isComposing() || (g0(v, f), Ti(v, f));
      }),
      o.registerNodeTransform(jt, (v) => {
        o.isComposing() || (b0(v), v.isAttached() && Ti(v, f));
      }),
      o.registerNodeTransform(it, (v) => {
        o.isComposing() || aP(v, f);
      }),
      o.registerNodeTransform(xe, (v) => {
        if (!o.isComposing()) {
          fP(v, f);
          for (const V of ["separator", "char"])
            v.isAttached() && to(Jn(V), v) && f.pendingKeys.add(v.getKey());
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
      o.registerNodeTransform(fr, (v) => {
        o.isComposing() || Ti(v, f);
      }),
      o.registerNodeTransform(Gr, (v) => {
        if (o.isComposing()) return;
        const V = Yn(v);
        V && (Ze(V.owner) || Ie(V.owner) || K(V.owner) || we(V.owner)) && Ti(V.owner, f);
      }),
      o.registerNodeTransform(Pe, (v) => {
        o.isComposing() || (dP(v, f), Ti(v, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(Xr, (v) => {
        o.isComposing() || p0(v, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(qe, (v) => {
        o.isComposing() || _0(v, f);
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
        qe,
        (v) => {
          o.getEditorState().read(() => {
            for (const [V, H] of v) {
              if (H === "destroyed") continue;
              const fe = ne(V);
              !fe || se(fe, ue) !== "attribute" || Le(fe.getParent()) || o.getElementByKey(V)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      E0(o, f),
      ...c ? [
        o.registerNodeTransform(qe, (v) => {
          o.isComposing() || NP(v);
        }),
        o.registerCommand(
          Oi,
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
          dr,
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
          (v) => FP(
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
        dr,
        () => (!na(f) && !Is() && ol(f), !1),
        ke
      ),
      o.registerCommand(
        wi,
        () => (o.isComposing() || iP(f), !1),
        Mr
      ),
      o.registerCommand(
        da,
        (v) => v || o.isComposing() ? !1 : uP(),
        Mr
      ),
      o.registerCommand(
        ua,
        () => (h = !1, _ = 0, w(), !1),
        kt
      ),
      o.registerCommand(
        Or,
        (v) => (h = !1, _ = 0, w(), (v.key === "Backspace" || v.key === "Delete") && !na(f, km(v)) && (ol(f), nP(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !v.ctrlKey || v.altKey || v.shiftKey || v.metaKey || v.key !== " " && v.code !== "Space" || !xA() ? !1 : (v.preventDefault(), !0)),
        Me
      ),
      o.registerCommand(
        Hp,
        (v) => {
          const V = Zy();
          V === "needs-plain-split" && o.dispatchCommand(Mi, void 0);
          const H = V !== "declined" || RC();
          return H && v?.preventDefault(), xo(f), H;
        },
        Me
      ),
      // A chapter line cannot be split: Enter there starts a `\p` after it and a line break is
      // refused (see chapterLine.utils.ts). CRITICAL so both run ahead of every split, including
      // this plugin's own char-stack split below.
      o.registerCommand(
        Mi,
        () => Iy(Lt, f.viewOptions),
        ke
      ),
      o.registerCommand(
        jp,
        () => HP(),
        ke
      ),
      // A drop inserts through Lexical's clipboard path, which splits at every line break without
      // going through INSERT_PARAGRAPH_COMMAND, so a drop on a chapter line is claimed and goes in
      // as a paste there does. LOW: below structure protection's HIGH block and the NORMAL
      // replace-selection delete, above Lexical's own insertion at EDITOR.
      o.registerCommand(
        wi,
        (v) => {
          if (typeof v == "string" || !v.dataTransfer) return !1;
          const { text: V } = Py(v.dataTransfer, o._config.namespace);
          return !!V && Ly(
            V,
            f.structureProtectionMode === "protected",
            () => {
              f.splitExpected.current = !0;
            },
            f.getMarker
          );
        },
        kt
      ),
      o.registerCommand(
        Mi,
        () => (f.splitExpected.current = !0, Bm()),
        Me
      ),
      A0(o, f, c),
      o.registerCommand(
        fb,
        () => {
          if (h) return !0;
          const v = o.getRootElement(), V = v?.ownerDocument, H = !!v && !!V && V.hasFocus() && v.contains(V.activeElement);
          let fe;
          if (H) {
            const Q = N();
            fe = P(Q) ? Q.focus.key : m;
          }
          return _c(() => xo(f, fe)), !0;
        },
        kt
      ),
      o.registerCommand(
        Ol,
        () => {
          if (h) return !1;
          const v = N(), V = P(v) ? v.focus.key : m;
          return _c(() => xo(f, V)), !1;
        },
        kt
      ),
      o.registerUpdateListener(({ editorState: v, tags: V }) => {
        f.splitExpected.current = !1, f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear(), f.rebuildAttempted.clear();
        const H = v.read(() => {
          const Q = N();
          return P(Q) ? Q.focus.key : void 0;
        }), fe = g;
        if (H !== void 0 && (g = H), V.has(Rl)) {
          f.pendingKeys.clear(), v.read(() => S0(f)), h = !0, H !== void 0 && (m = H);
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
const N0 = ["status_unknown", "status_invalid"], pb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, w0 = Object.values(pb);
function O0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = pb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Cp(e) {
  e.classList.remove(...N0), e.removeAttribute("aria-description"), w0.includes(e.title) && e.removeAttribute("title");
}
function R0(e, t, r, n) {
  const i = (a) => a.read(() => Ue().getChildrenKeys()), s = i(t), o = i(e);
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
function q0(e) {
  const t = ne(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function $0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ce(), i = e?.markerMode === "editable";
  return B(() => {
    if (!i) return;
    const s = t ?? Li;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = w1(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || q0(f)) continue;
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
          m && O0(m, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          R0(l, d, u, f)
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
function hb(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = tr(o);
    a && I(s) && hb(s.getChildren(), a, r);
  }
}
function Bs(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = tr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Sr(a);
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
function gb(e, t) {
  const r = [];
  for (const n of e)
    ju(n, t) || ((ae(n) || F(n)) && r.push(n.getMarker()), I(n) && r.push(...gb(n.getChildren(), t)));
  return r;
}
function mb(e) {
  const t = [];
  for (const r of e) {
    const n = hn(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = tr(r);
    i && t.push(...mb(i));
  }
  return t;
}
function js(e, t, r) {
  const n = gb(e, r), i = mb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function I0(e, t) {
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
function $a(e, t) {
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
  if (!Pa(c, e, o, s)) return;
  const l = i ? $a(c, i) : c.text, d = Wr(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (Zr(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = pr.serializeEditorState(
    { type: ur, version: lr, content: d },
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
  if (wr(u, o) === Nr(e, o) && js(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Bs(u, f);
  const m = yb(e), h = sd(u);
  for (let g = 0; g < m.length && g < h.length; g++)
    m[g].sid !== void 0 && h[g].number === m[g].number && (h[g].sid = m[g].sid);
  return u;
}
function yb(e) {
  const t = [], r = (n) => {
    Ie(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : I(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function sd(e) {
  const t = [];
  for (const r of e) {
    Fh(r) && t.push(r);
    const n = tr(r);
    n && t.push(...sd(n));
  }
  return t;
}
function D0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = ay(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? $a(l, i) : l.text, f = Wr(u, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Zr(f) !== l.sentinels.length) {
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
  const k = Hm(e, m, h, s);
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
  const M = ia(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (wr(_, o) === Nr(d, o) && js(d, _, o)) {
    if (g)
      return { rebuilt: void 0, contentNodes: d, category: h, categoryChanged: g };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Bs(_, M), { rebuilt: _, contentNodes: d, category: h, categoryChanged: g };
}
function _p(e) {
  return e.$?.textType;
}
function U0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && _p(e) === _p(t);
}
function F0(e) {
  const t = [];
  for (const r of e) {
    const n = ne(r);
    n?.isAttached() && Be(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function z0(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (Jr(e)) return;
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
function K0(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Pe.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && vp(a.node, s);
  const c = n.getChildren().filter(O).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && vp(l.node, s);
}
function B0(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: d } = Vu(e, a, o);
  if (d.length === 0 && s.length === 0 || !Pa(l, s, a, o)) return;
  const u = i ? $a(l, i) : l.text, f = uy(u, a);
  if (Zr(f.content) !== l.sentinels.length) {
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
  if (kn([...m, ...h]) !== l.sentinels.length) {
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
  if (h.length === s.length && wr(h, a) === Nr(s, a) && js(s, h, a) && wr(m, a) === Nr(d, a) && js(d, m, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const b = Bs(m, g);
  Bs(h, g, b);
  const k = yb([...d, ...s]), _ = sd([...m, ...h]);
  for (let M = 0; M < k.length && M < _.length; M++)
    k[M].sid !== void 0 && _[M].number === k[M].number && (_[M].sid = k[M].sid);
  return { rebuilt: m, contentNodes: d, followingBlocks: h };
}
function j0(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = hy(e, i, n);
  if (!o) return;
  const a = r ? $a(o, r) : o.text, c = gy(a, i);
  if (Zr(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  const l = c.find(
    (m) => typeof m == "object" && m.type === "chapter"
  );
  l && e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = pr.serializeEditorState(
    { type: ur, version: lr, content: c },
    n
  ).root.children, [u] = c;
  if (typeof u != "object" || u.type !== "chapter") return d;
  const f = [e, ...ji(e)];
  if (!(e.getNumber() !== (u.number ?? "") || e.getAltnumber() !== u.altnumber || e.getPubnumber() !== u.pubnumber) && wr(d, i) === Nr(f, i) && js(f, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function V0(e, t, r, n, i) {
  const s = I0(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (k) => {
    K(k) ? c.set(k.getKey(), k) : we(k) ? l.set(k.getKey(), k) : Te(k) ? d.set(k.getKey(), k) : o.set(k.getKey(), [k]);
  };
  for (const k of t) {
    const _ = ne(k);
    if (!_?.isAttached()) continue;
    const M = zs(_);
    if (M) {
      if (p(M), O(_)) {
        const C = sb(_, r.getMarker);
        C && a.push(C);
      }
      if (K(M)) {
        const C = z0(_);
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
    const k = zs(s.node);
    k && !m.has(k.getKey()) && p(k);
  }
  const h = F0(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && d.size === 0 && h.length === 0)
    return;
  const g = new Set(h.map((k) => k.getKey())), b = /* @__PURE__ */ new Map();
  hb(Ue().getChildren(), e.root.children, b);
  for (const k of f.values()) K0(k, b);
  for (const k of c.values()) {
    const _ = b.get(k.getKey()), M = _ ? tr(_.node) : void 0;
    if (!_ || !M) continue;
    const C = D0(k, b, r, g, s);
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
    const M = L0(k, b, r, g, s);
    if (!M) continue;
    const C = _.siblings.indexOf(_.node);
    C < 0 || _.siblings.splice(C, k.length, ...M);
  }
  for (const k of d.values()) {
    const _ = b.get(k.getKey()), M = _ ? tr(_.node) : void 0;
    if (!_ || !M) continue;
    const C = u.get(k.getKey()) ?? [], $ = B0(k, b, r, g, s, C);
    if (!$) continue;
    const w = $.contentNodes.at(0), z = w ? b.get(w.getKey()) : void 0;
    if (w && !z) continue;
    const v = z ? M.indexOf(z.node) : M.length, V = _.siblings.indexOf(_.node);
    v < 0 || V < 0 || (M.splice(v, $.contentNodes.length, ...$.rebuilt), _.siblings.splice(V + 1, C.length, ...$.followingBlocks));
  }
  for (const k of l.values()) {
    const _ = b.get(k.getKey());
    if (!_) continue;
    const M = 1 + ji(k).length, C = j0(k, r, s);
    if (!C) continue;
    const $ = _.siblings.indexOf(_.node);
    $ < 0 || (_.siblings.splice($, M, ...C), YA(_.siblings, $));
  }
  for (const k of h) {
    const _ = b.get(k.getKey());
    if (!_) continue;
    const M = _.siblings.indexOf(_.node);
    if (M < 0) continue;
    _.siblings.splice(M, 1);
    const C = _.siblings[M - 1], $ = _.siblings[M], w = C && Sr(C), z = $ && Sr($);
    C && $ && w !== void 0 && z !== void 0 && U0(C, $) && (C.text = w + z, _.siblings.splice(M, 1));
  }
  return Nm(e, r.viewOptions);
}
function W0({
  viewOptions: e,
  logger: t
}) {
  const [r] = ce(), n = Sn(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return B(() => {
    if (n)
      return r.registerNodeTransform(
        it,
        (i) => H0(i, t)
      );
  }, [r, n, t]), null;
}
function H0(e, t) {
  e.getMarker() !== Lt && (e.isEmpty() || Nt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Lt}" (key ${e.getKey()})`
  ), e.setMarker(Lt)));
}
function G0({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ce(), n = Y({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return B(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, sa(s, e) || J0(i, r, e);
  }, [r, e, t]), B(
    () => r.registerMutationListener(
      Ft,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = _l(r);
        Sp(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: To(s) === To(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), B(() => {
    const i = (a) => a.read(
      () => new Set(
        Ue().getChildren().filter(Ge).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (_l(r) || Sp(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: To(a) === To(c)
      }));
    };
    return Oe(
      ...[jt, qr].map(
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
        return i.phase === "idle" && Z0(i, bb()), !1;
      },
      kt
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
      r.registerMutationListener(gt, i)
    );
  }, [r]), B(() => {
    const i = () => nN(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function J0(e, t, r) {
  if (Y0(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = _l(t);
  (!n || n === r.book) && t.update(() => kb(t, r.chapterNum, r.verseNum), {
    tag: Mt
  });
}
function Y0(e, t) {
  const r = e.pendingEchoes.findIndex((n) => sa(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function bb() {
  const e = N(), t = Jh(e);
  if (!t) return;
  const r = od(), n = cT(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = du(t, e), { verseNum: o, verse: a } = r_(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function _l(e) {
  return e.getEditorState().read(() => od()?.getCode() || void 0);
}
function od() {
  return Ue().getChildren().find(Te);
}
function Sp(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && vc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || vc(e, t), e.phase = "navigating") : i && vc(e, t), r && r !== e.scrRef.book && Cb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function vc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => kb(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Mt }
    );
  });
}
function kb(e, t, r) {
  const n = N()?.clone();
  X0(t, r);
  const i = N();
  i && !(n && i.is(n)) && Fr(e, Mt);
}
function X0(e, t) {
  const r = bb();
  if (r?.chapterNum === e && (r.verse ? Tb(t, r.verse) : r.verseNum === t))
    return;
  const n = Ue().getChildren(), i = Kh(n, e);
  if (!i) return;
  const s = hT(n, i), o = aT(s, !0);
  pT(s, o);
  let a;
  try {
    a = YC(s, t);
  } catch {
    return;
  }
  a && (ae(a) ? !E(a.getFirstChild()) && es(a) || er(a, 0) : Q0(a));
}
function Q0(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || me(n)) {
    E(e) ? e.selectEnd() : er(t, r);
    return;
  }
  const i = eo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    e.selectEnd();
    return;
  }
  const s = I(n) && !K(n) ? xb(n) : void 0;
  s ? s.select(0, 0) : er(t, r);
}
function xb(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (I(t) && !K(t)) return xb(t);
}
function To(e) {
  return e.read(() => {
    const t = Ue().getChildren().find(Ge);
    return `${od()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function Z0(e, t) {
  e.phase !== "navigating" && t && (eN(t, e.scrRef) || Cb(e, tN(t, e.scrRef)));
}
function eN(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Tb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Tb(e, t) {
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
function Cb(e, t) {
  return sa(t, e.scrRef) || e.pendingEchoes.some((r) => sa(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > rN && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function sa(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function nN(e) {
  e.phase = "idle";
}
function iN(e) {
  return Te(e) ? `${e.__code}` : we(e) ? `${e.__marker} "${e.__number}"` : F(e) ? `${e.__marker}` : Gs(e) ? `${e.__marker} "${e.__number}"` : yt(e) ? `${e.__caller}` : ci(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ae(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${sN(e)}` : Ce(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ie(e) ? `${e.__marker} "${e.__number}"` : "";
}
function sN(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[Hs]) : "";
}
function oN() {
  const [e] = ce();
  return /* @__PURE__ */ A(
    wk,
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
const _b = $p(null), Mp = 4;
function aN({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Y(null), s = Ip(_b);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return B(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ A("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function cN({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = he(), [s, o] = he(), a = be(
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
  }, l = He(() => ({ registerItem: a }), [a]);
  return B(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ A(_b.Provider, { value: l, children: /* @__PURE__ */ A("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
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
  }, [c, a, l]), /* @__PURE__ */ Ee(zn, { children: [
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
    l && Fn(
      /* @__PURE__ */ A(cN, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const vl = {
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
  ...vl,
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
  return /* @__PURE__ */ A(
    lN,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + dN(t),
      buttonLabel: fN(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(vl).map((n) => /* @__PURE__ */ Ee(
        aN,
        {
          className: "item block-marker " + pN(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ A("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ A("span", { className: "text usfm_" + n, children: vl[n] })
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
function Ep() {
  return /* @__PURE__ */ A("div", { className: "divider" });
}
const hN = Cn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ce(), [o, a] = he(s), [c, l] = he(), [d, u] = he(!1), [f, p] = he(!1), m = be(
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
  ), [s]), /* @__PURE__ */ Ee(zn, { children: [
    /* @__PURE__ */ A(bm, { onStateChange: m }),
    /* @__PURE__ */ Ee("div", { className: "toolbar", children: [
      /* @__PURE__ */ A(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(Xp, void 0);
          },
          title: Ri ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
          title: Ri ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ A("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ A(Ep, {}),
      o === s && /* @__PURE__ */ Ee(zn, { children: [
        /* @__PURE__ */ A(
          uN,
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
}), gN = Ui(), mN = {}, yN = {};
function bN() {
  return /* @__PURE__ */ A("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Sc(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function Ap(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = I(n) ? n.getLastDescendant() ?? n : n;
  return _a(r, i);
}
function Pp(e, t, r) {
  qk(e, () => Hn(t));
  const n = N();
  if (!P(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    ae(o) && i.add(o);
  }), i.forEach((s) => Qy(s, t, r));
}
const vb = Cn(function({
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
    hasSpellCheck: Fe = !1,
    textDirection: _e = "ltr",
    markerMenuTrigger: yr = "\\",
    view: We,
    nodes: en,
    debug: tn = !1,
    contextMenu: Mn,
    styleInfo: ee,
    markerSettleDelayMs: R,
    copyLimit: te
  } = a ?? yN, le = We ?? gN, Ne = $s(le) && (le.markerMode !== "hidden" || !le.hasSpacing || le.hasGutterParaMarkers || le.hasActiveTextFocusBox) ? {
    ...le,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : le, lt = Y(Ne);
  It(lt.current, Ne) || (lt.current = Ne);
  const Z = lt.current, Ye = He(() => en ?? mN, [en]), br = He(() => Mn, [Mn]), ts = He(
    () => cu(ee ?? Li),
    [ee]
  ), rn = Y(c);
  It(rn.current, c) || (rn.current = c);
  const ie = rn.current, pt = $s(Z), pe = H || pt, li = Ne !== le;
  B(() => {
    pt && !H && ie?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), li && ie?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), Z?.markerMode === "visible" && !H && ie?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [pt, H, li, ie, Z?.markerMode]);
  const ve = Y(null), En = He(() => {
    if (Z.markerMode !== "editable") return;
    const q = ee ?? Li;
    return {
      getContext: () => ve.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (L) => U1(
        q,
        L,
        Ye.extraValidMarkers
      ),
      getEnterItems: (L) => F1(
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
  }, [Z, ee, Ye.extraValidMarkers]), ui = (q) => {
    M.current || (M.current = !0, rn.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, rr = (q) => {
    if (pt)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, nn = (q) => {
    if (rr(q), pe) throw new Error(`Cannot ${q} in readonly mode`);
  }, sn = () => !!u.current && um(u.current), io = He(
    () => ({
      namespace: "platformEditor",
      theme: { ...Hy, showCharMarkerTitles: Z.showCharMarkerTitles },
      editable: !pe,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [at, ...pt ? cv : Cu]
    }),
    [pe, pt, Z.showCharMarkerTitles]
  );
  vo.initialize(ie);
  function on(q) {
    if (q !== void 0 && !QP(q, Ye.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const Rt = be(() => {
    const q = u.current;
    if (!q) return h.current;
    const L = jd(q), W = b.current;
    if ((!L || L.size === 0) && !W) return h.current;
    const G = q.getEditorState(), de = G.toJSON();
    return G.read(
      () => V0(
        de,
        L ?? /* @__PURE__ */ new Set(),
        { viewOptions: Z, getMarker: ts, logger: ie },
        W,
        k.current
      )
    ) ?? h.current;
  }, [Z, ts, ie]);
  function nr(q, L, W) {
    if (pt && L === "remote") {
      rn.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    rr("apply an update");
    const G = sn(), de = !G && u.current ? Fr(u.current, Lr) : void 0;
    u.current?.update(
      () => {
        L === "remote" && vt(Ss), G || vt(Lr), W && vt(W), $v(q, Z, Ye, ie);
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
          de?.(), !G && u.current && uc(u.current);
          const Xe = u.current?.getEditorState();
          if (!Xe) return;
          const Re = vo.deserializeEditorState(Xe, Z);
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
  const kr = {
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
      nn("cut"), u.current && qu(u.current);
    },
    copy() {
      u.current && Ru(u.current);
    },
    paste() {
      nn("paste"), u.current && $u(u.current);
    },
    pastePlainText() {
      nn("paste as plain text"), u.current && Iu(u.current);
    },
    getUsj() {
      return Rt();
    },
    commitPendingMarkerEdits() {
      const q = u.current;
      if (!q) return;
      const L = !sn(), W = L ? Fr(q, Lr) : void 0;
      q.update(
        () => {
          L && vt(Lr), q.dispatchCommand(fb, void 0);
        },
        { discrete: !0 }
      ), W?.(), L && uc(q);
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
      nr(q, L);
    },
    replaceEmbedUpdate(q, L) {
      const W = u.current?.read(() => h_(q, L));
      W ? this.applyUpdate(W) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (pt) {
        ui("get the selection");
        return;
      }
      return u.current?.read(yu);
    },
    setSelection(q) {
      if (pt) {
        ui("set the selection");
        return;
      }
      u.current?.update(() => {
        const L = Sa(q);
        L !== void 0 && (zr(L), vt(ch));
      });
    },
    setAnnotation(q, L, W, G, de) {
      if (pt) {
        ui("set an annotation");
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
      nn("format a paragraph"), u.current?.update(
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
            const de = L.isBackward() ? L.anchor : L.focus, Re = !L.isCollapsed() && !G.is(de.getNode()) && !G.isParentOf(de.getNode()) ? { key: de.key, offset: de.offset, type: de.type } : void 0, Qe = Bn();
            if (Qe.anchor.set(W.key, W.offset, W.type), Qe.focus.set(W.key, W.offset, W.type), zr(Qe), !Tl(q, Z)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${q}"`
              );
              return;
            }
            if (!Re) return;
            const qt = ne(Re.key);
            if (!qt?.isAttached()) return;
            const Pn = qt.getTopLevelElement();
            if (!Pn) return;
            const Ir = G.getNextSibling();
            if (!ae(Ir)) return;
            let rt = Ir.getNextSibling();
            for (; rt; ) {
              const ns = rt.is(Pn), so = rt.getNextSibling();
              if (ae(rt)) {
                const Nn = Bn();
                Nn.anchor.set(rt.getKey(), 0, "element"), Nn.focus.set(rt.getKey(), rt.getChildrenSize(), "element"), zr(Nn), Pp(Nn, q, Z);
              }
              if (ns) break;
              rt = so;
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
      on(q);
      let L = !1;
      return u.current?.update(
        () => {
          const W = N();
          P(W) && (L = zy(W, q, Z));
        },
        { discrete: !0 }
      ), L;
    },
    replaceCharacterMarker(q, L) {
      if (pe) throw new Error("Cannot replace character marker in readonly mode");
      on(q), on(L);
      let W = !1;
      return u.current?.update(
        () => {
          const G = N();
          P(G) && (W = u1(G, q, L));
        },
        { discrete: !0 }
      ), W;
    },
    extendCharacterMarker(q, L) {
      if (pe) throw new Error("Cannot extend character marker in readonly mode");
      on(q), L?.forEach(
        (G) => on(G)
      );
      let W = !1;
      return u.current?.update(
        () => {
          const G = N();
          P(G) && (W = d1(
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
      if (!pl(q, Ye.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const L = hl(
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
        return u.current?.getEditorState().read(() => Y1());
    },
    applyMarkerMenuSelection(q, L) {
      if (H) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (q.kind !== "closeTag" && !pl(q.marker, Ye.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let W;
      return u.current.update(() => {
        W = s0(q, L, r, {
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
        Tl(q, Z);
      });
    },
    commitTypedMarker(q, L) {
      if (H) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let W = !1;
      return u.current.update(() => {
        W = n0(q, L), W || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), W;
    },
    commitTypedCloser(q) {
      if (H) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let L = !1;
      return u.current.update(() => {
        L = ib(q), L || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), L;
    },
    insertNote(q, L, W) {
      nn("insert a note"), u.current?.update(
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
          Sc(G, g);
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      u.current?.update(() => {
        const L = _r(q);
        L && (Wc(L, Z), Sc(L, g));
      });
    },
    selectAfterNote(q) {
      const L = u.current;
      if (!L) return;
      const W = !sn(), G = W ? Fr(L, Lr) : void 0;
      if (L.update(
        () => {
          W && vt(Lr);
          const de = _r(q);
          de && Ug(de);
        },
        { discrete: !0 }
      ), G?.(), W) {
        uc(L);
        const de = Fr(
          L,
          Lr
        );
        L.update(
          () => {
            vt(Lr), L.dispatchCommand(Dt, void 0);
          },
          { discrete: !0 }
        ), de();
      }
    },
    selectNoteTextOffset(q, L, W) {
      u.current?.update(() => {
        const G = _r(q);
        if (!G) return;
        const de = W?.glyph;
        (W?.field === "category" ? nv(G, L, de) || cf(G, 0) : cf(G, L, de)) || Wc(G, Z), Sc(G, g);
      });
    },
    getNoteOps(q) {
      const L = u.current;
      return L ? Ci(L, () => {
        const W = _r(q);
        if (W)
          return _a(W);
      }) : void 0;
    },
    getOpsAfterNote(q) {
      const L = u.current;
      return L ? Ci(L, () => {
        const W = _r(q);
        return W ? Ap(W) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(q) {
      const L = u.current, W = L ? Ci(L, () => {
        const Re = _r(q);
        if (!Re) return;
        const Qe = pu(Re, "apply");
        return { ops: Ap(Re), notePosition: Qe };
      }) : void 0;
      if (!W) return;
      const { ops: G, notePosition: de } = W;
      if (G.length === 0 || de === void 0) return G;
      const Xe = G.reduce(
        (Re, Qe) => Re + (typeof Qe.insert == "string" ? Qe.insert.length : 1),
        0
      );
      return nr([{ retain: de + 1 }, { delete: Xe }], "remote", Pl), G;
    },
    getNoteIndex(q) {
      const L = u.current;
      return L ? Ci(L, () => gu(q)) : void 0;
    },
    getNoteKey(q) {
      const L = u.current;
      return L ? Ci(L, () => _r(q)?.getKey()) : void 0;
    },
    highlightNote(q) {
      p.current?.setHighlightedNote(q);
    },
    get toolbarEndRef() {
      return m;
    }
  };
  ve.current = kr, aa(d, () => kr), B(() => {
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
  const rs = be(
    (q, L, W, G, de) => {
      if (pt) return;
      const Xe = vo.deserializeEditorState(q, Z);
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
        !L.has(Rl) && (W.size === 0 && G.size === 0 || L.has(Ss) || !jd(q)?.size) || queueMicrotask(() => {
          const de = Rt();
          !de || It(_.current, de) || (_.current = de, s(de, void 0, "local", void 0));
        });
      });
  }, [s, Rt]);
  const An = be(
    (q) => {
      V(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Ee(eh, { initialConfig: io, children: [
      /* @__PURE__ */ A(BS, { isEditable: !pe }),
      /* @__PURE__ */ Ee("div", { className: "editor-container", children: [
        Q ? /* @__PURE__ */ A(bm, { onStateChange: An }) : /* @__PURE__ */ A(
          "div",
          {
            className: "editor-toolbar-container" + (pe ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ A(
              hN,
              {
                ref: m,
                editorRef: ve,
                isReadonly: pe,
                onStateChange: An
              }
            )
          }
        ),
        /* @__PURE__ */ Ee("div", { className: "editor-inner", children: [
          /* @__PURE__ */ A(rh, { editorRef: u }),
          /* @__PURE__ */ A(
            Rk,
            {
              contentEditable: /* @__PURE__ */ A(
                th,
                {
                  className: `editor-input usfm ${qv(Z).join(" ")}${Z.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${Z.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Fe
                }
              ),
              placeholder: /* @__PURE__ */ A(bN, {}),
              ErrorBoundary: nh
            }
          ),
          Q && /* @__PURE__ */ A(KS, {}),
          /* @__PURE__ */ A(ih, {}),
          r && n && /* @__PURE__ */ A(G0, { scrRef: r, onScrRefChange: n }),
          r && !Q && /* @__PURE__ */ A(
            kE,
            {
              trigger: yr,
              scrRef: r,
              contextMarker: v,
              getMarkerAction: (q) => hl(
                q,
                g,
                Z,
                Ye,
                ie,
                void 0,
                ee
              ),
              editableHarness: En
            }
          ),
          /* @__PURE__ */ A(
            GS,
            {
              scripture: C,
              scriptureRef: h,
              nodeOptions: Ye,
              editorAdaptor: pr,
              viewOptions: Z,
              logger: ie
            },
            w
          ),
          /* @__PURE__ */ A(mM, { onChange: i }),
          /* @__PURE__ */ A(
            Av,
            {
              onChange: rs,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: tx
            }
          ),
          /* @__PURE__ */ A(m1, { viewOptions: Z }),
          /* @__PURE__ */ A(Mv, { ref: f, logger: ie }),
          /* @__PURE__ */ A(uS, { viewOptions: Z }),
          /* @__PURE__ */ A(vS, {}),
          /* @__PURE__ */ A(NS, {}),
          Z?.markerMode !== "editable" && /* @__PURE__ */ A(wS, { logger: ie }),
          /* @__PURE__ */ A(IS, { options: br }),
          /* @__PURE__ */ A(_1, { limit: te, viewOptions: Z }),
          /* @__PURE__ */ A(zS, {}),
          /* @__PURE__ */ A(VS, {}),
          /* @__PURE__ */ A(HS, {}),
          /* @__PURE__ */ A(o0, {}),
          /* @__PURE__ */ A(
            P0,
            {
              viewOptions: Z,
              getMarker: ts,
              logger: ie,
              markerSettleDelayMs: R,
              structureProtectionMode: fe,
              copyLimit: te
            }
          ),
          Z?.markerMode === "visible" && /* @__PURE__ */ A(C1, { viewOptions: Z, copyLimit: te }),
          /* @__PURE__ */ A(
            $0,
            {
              styleInfo: ee,
              viewOptions: Z,
              logger: ie
            }
          ),
          /* @__PURE__ */ A(JS, { ref: p }),
          /* @__PURE__ */ A(
            YS,
            {
              expandedNoteKeyRef: g,
              nodeOptions: Ye,
              viewOptions: Z,
              logger: ie
            }
          ),
          /* @__PURE__ */ A(gM, {}),
          /* @__PURE__ */ A(sS, {}),
          /* @__PURE__ */ A(tS, {}),
          /* @__PURE__ */ A(W0, { viewOptions: Z, logger: ie }),
          /* @__PURE__ */ A(yM, {}),
          /* @__PURE__ */ A(rE, { structureProtectionMode: fe }),
          /* @__PURE__ */ A(nE, { textDirection: _e }),
          /* @__PURE__ */ A(sE, {}),
          /* @__PURE__ */ A(yE, {}),
          l
        ] }),
        tn && /* @__PURE__ */ A(oN, {})
      ] })
    ] }, Z.verseLayout ?? "inline")
  );
}), Ew = Cn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ A(vb, { ref: r, ...i });
});
function Sb() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function oa(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Sb() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Mb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Sb() : r,
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
function Mc(e) {
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
    return this._comments = n, Mc(this), t.type === "comment" ? {
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
      Jk,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      kt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Yk) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const m = p.insert, h = p.retain, g = p.delete, b = d.parent, k = d === r ? void 0 : b instanceof Td && this._comments.find((_) => _.id === b.get("id"));
              if (Array.isArray(m)) {
                const _ = f;
                m.slice().reverse().forEach((M) => {
                  const C = M.get("id"), w = M.get("type") === "thread" ? Mb(
                    M.get("quote"),
                    M.get("comments").toArray().map(
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
function TN(e) {
  const [t, r] = he(e.getComments());
  return B(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function CN({
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
function _N({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Fn(
    /* @__PURE__ */ A(CN, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Eb() {
  const [e, t] = he(null), r = be(() => {
    t(null);
  }, []), n = He(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ A(_N, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const vN = {
  ...Hy,
  paragraph: "CommentEditorTheme__paragraph"
};
function SN(...e) {
  return e.filter(Boolean).join(" ");
}
function Tn({
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
      className: SN(
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
  return /* @__PURE__ */ A(th, { className: e || "ContentEditable__root" });
}
function EN({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ A("div", { className: t || "Placeholder__root", children: e });
}
const wp = Yp("INSERT_INLINE_COMMAND");
function AN({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Y(null), s = be(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return B(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Vs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ A("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ A("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ A("i", { className: "icon add-comment" }) }) });
}
function PN({ onEscape: e }) {
  const [t] = ce();
  return B(() => t.registerCommand(
    Jp,
    (r) => e(r),
    Mr
  ), [t, e]), null;
}
function Ab({
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
    theme: vN
  }, children: /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ A(
      Wk,
      {
        contentEditable: /* @__PURE__ */ A(MN, { className: e }),
        placeholder: /* @__PURE__ */ A(EN, { children: s }),
        ErrorBoundary: nh
      }
    ),
    /* @__PURE__ */ A(Vk, { onChange: n }),
    /* @__PURE__ */ A(ih, {}),
    t !== !1 && /* @__PURE__ */ A(Kk, {}),
    /* @__PURE__ */ A(PN, { onEscape: r }),
    /* @__PURE__ */ A(Bk, {}),
    i !== void 0 && /* @__PURE__ */ A(rh, { editorRef: i })
  ] }) });
}
function Pb(e, t) {
  return be(
    (r, n) => {
      r.read(() => {
        e(Hk()), t(!Gk(n.isComposing(), !0));
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
  const [n, i] = he(""), [s, o] = he(!1), a = Y(null), c = He(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Y(null), d = wb(), u = be(() => {
    e.getEditorState().read(() => {
      const h = N();
      if (P(h)) {
        l.current = h.clone();
        const g = h.anchor, b = h.focus, k = $k(
          e,
          g.getNode(),
          g.offset,
          b.getNode(),
          b.offset
        ), _ = a.current;
        if (k !== null && _ !== null) {
          const { left: M, bottom: C, width: $ } = k.getBoundingClientRect(), w = Ik(e, k);
          let z = w.length === 1 ? M + $ / 2 - 125 : M - 125;
          z < 10 && (z = 10), _.style.left = `${z}px`, _.style.top = `${C + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const v = w.length, { container: V } = c, H = c.elements, fe = H.length;
          for (let Q = 0; Q < v; Q++) {
            const Fe = w[Q];
            let _e = H[Q];
            _e === void 0 && (_e = document.createElement("span"), H[Q] = _e, V.appendChild(_e));
            const We = `position:absolute;top:${Fe.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Fe.left}px;height:${Fe.height}px;width:${Fe.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            _e.style.cssText = We;
          }
          for (let Q = fe - 1; Q >= v; Q--) {
            const Fe = H[Q];
            V.removeChild(Fe), H.pop();
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
        Mb(h, [oa(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = Pb(i, o);
  return /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ A(
      Ab,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ A(Tn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ A(
        Tn,
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
  const [n, i] = he(""), [s, o] = he(!1), a = Y(null), c = wb(), l = Pb(i, o);
  return /* @__PURE__ */ Ee(zn, { children: [
    /* @__PURE__ */ A(
      Ab,
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
      Tn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(oa(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(Mk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ A("i", { className: "send" })
      }
    )
  ] });
}
function Nb({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Ee(zn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Ee("div", { className: "Modal__content", children: [
      /* @__PURE__ */ A(
        Tn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ A(
        Tn,
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Eb();
  return /* @__PURE__ */ Ee("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Ee("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ A("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Ee("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ A("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Ee(zn, { children: [
      /* @__PURE__ */ A(
        Tn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ A(
              Nb,
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
function ON({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ce(), [a, c] = he(0), [l, d] = Eb(), u = He(
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
              Tn,
              {
                onClick: () => {
                  d("Delete Thread", (h) => /* @__PURE__ */ A(
                    Nb,
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
function RN({
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
function wb() {
  const e = sh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function qN({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = sh(), [a] = ce(), c = He(() => {
    const z = new xN(a, s);
    return r && z.registerOnChange(r), t?.(z), z;
  }, [a, s, r, t]), l = TN(c), d = He(() => /* @__PURE__ */ new Map(), []), [u, f] = he(), [p, m] = he([]), [h, g] = he(!1), [b, k] = he(!1), { yjsDocMap: _ } = o;
  B(() => {
    if (e) {
      const z = e("comments", _);
      return c.registerCollaboration(z);
    }
    return () => {
    };
  }, [c, e, _]);
  const M = be(() => {
    a.update(() => {
      const z = N();
      z !== null && (z.dirty = !0);
    }), g(!1);
  }, [a]), C = be(
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
              Ce(Q) && (Q.deleteID(pn, V), Q.hasNoIDsForEveryType() && Oo(Q));
            }
          });
        });
      }
    },
    [c, a, d]
  ), $ = be(
    (z, v, V, H) => {
      c.addComment(z, V), v && (a.update(() => {
        P(H) && Ch(H, pn, z.id);
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
    if (!a.hasNodes([at]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const z = /* @__PURE__ */ new Map();
    return Oe(
      Zp(
        a,
        at,
        (v) => Es(v.getTypedIDs()),
        (v, V) => {
          for (const [H, fe] of Object.entries(v.getTypedIDs()))
            fe.forEach((Q) => {
              V.addID(H, Q);
            });
        }
      ),
      a.registerMutationListener(
        at,
        (v) => {
          a.getEditorState().read(() => {
            for (const [V, H] of v) {
              const fe = ne(V);
              let Q = [];
              H === "destroyed" ? Q = z.get(V) ?? [] : Ce(fe) && (Q = fe.getTypedIDs()[pn] ?? []);
              for (const Fe of Q) {
                let _e = d.get(Fe);
                z.set(V, Q), H === "destroyed" ? _e !== void 0 && (_e.delete(V), _e.size === 0 && d.delete(Fe)) : (_e === void 0 && (_e = /* @__PURE__ */ new Set(), d.set(Fe, _e)), _e.has(V) || _e.add(V));
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
            const Fe = H.anchor.getNode();
            if (E(Fe)) {
              const _e = Lx(Fe, pn, H.anchor.offset) ?? [];
              _e !== null && (m(_e), fe = !0), H.isCollapsed() || (f(Fe.getKey()), Q = !0);
            }
          }
          fe || m((Fe) => Fe.length === 0 ? Fe : []), Q || f(null), !V.has("collaboration") && P(H) && g(!1);
        });
      }),
      a.registerCommand(
        wp,
        () => {
          const v = window.getSelection();
          return v !== null && v.removeAllRanges(), g(!0), !0;
        },
        jn
      )
    );
  }, [a, d]);
  const w = () => {
    a.dispatchCommand(wp, void 0);
  };
  return /* @__PURE__ */ Ee(zn, { children: [
    h && Fn(
      /* @__PURE__ */ A(
        NN,
        {
          editor: a,
          cancelAddComment: M,
          submitAddComment: $
        }
      ),
      document.body
    ),
    u != null && !h && Fn(
      /* @__PURE__ */ A(
        AN,
        {
          anchorKey: u,
          editor: a,
          showComments: b,
          onAddComment: w
        }
      ),
      document.body
    ),
    n !== null && Fn(
      /* @__PURE__ */ A(
        Tn,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => k(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ A("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && Fn(
      /* @__PURE__ */ A(
        RN,
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
function $N() {
  const e = Y(void 0), t = be((r) => {
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
  B(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      IN(r, t);
    };
  }, [t, e]);
}
const Aw = Cn(function(t, r) {
  const n = Y(null), i = Y(!0), s = Y(null), [o, a] = he(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: m, view: h } = {} } = t, g = (m ?? !1) || $s(h), [b, k] = $N();
  LN(f, b), B(() => {
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
  const _ = be(
    (C, $, w, z) => {
      if (!d) return;
      const v = b.current?.getComments();
      d(C, v, $, w, z);
    },
    [b, d]
  ), M = be(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const C = b.current?.getComments();
    l(C);
  }, [b, i, l]);
  return B(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ A(jk, { children: /* @__PURE__ */ Ee(vb, { ref: n, onUsjChange: _, ...f, children: [
    /* @__PURE__ */ A(
      qN,
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
function Un(e) {
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
function Ur(e) {
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
function Ob(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${DN(i)}"`).join(", ")}, ${BN}`;
}
const Ml = ".editor-input.usfm", jN = /^[\w.#[\]="':()>+~*,\s-]+$/;
function VN(e) {
  return jN.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Ml}".`
  ), Ml);
}
function WN(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Ob(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (FN.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Ur(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Ur(t.firstLineIndent) && s.push(`text-indent: ${Un(t.firstLineIndent * 20 * r)}vw`), Ur(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Un(t.leftMargin * 20 * r)}vw`), Ur(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Un(t.rightMargin * 20 * r)}vw`
  ), Ur(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Un(t.spaceBefore * r)}pt`), Ur(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Un(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = zN[n ? KN[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Rp = { c: 150, ca: 133, cp: 150 };
function qp(e, t) {
  return e && Ur(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function HN(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Ur(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = qp(e.markers.c, Rp.c);
  return ["ca", "cp"].map((i) => {
    const s = qp(
      e.markers[i],
      Rp[i]
    ), o = Un(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function Pw(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Ml } = t, s = VN(i), o = [], a = [];
  e.defaultFont && a.push(Ob(e.defaultFont)), Ur(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Un(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = WN(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${UN(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...HN(e, s)), o.join(`
`);
}
export {
  Gg as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  Ew as Editorial,
  vs as GENERATOR_NOTE_CALLER,
  ah as HIDDEN_NOTE_CALLER,
  Aw as Marginal,
  x as MarkerType,
  Hg as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Su as STANDARD_VIEW_MODE,
  Li as defaultStyleInfo,
  Mw as directionToNames,
  yv as filterAndRankItems,
  Pw as generateUsjCss,
  vw as getDefaultViewMode,
  Ui as getDefaultViewOptions,
  F1 as getEnterMenuItems,
  U1 as getMarkerMenuItems,
  Sw as getViewMode,
  Au as getViewOptions,
  $s as isBlockVerseLayout,
  dn as isInsertEmbedOpOfType,
  Nv as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
