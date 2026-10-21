import { jsx as M, jsxs as $e, Fragment as Bn } from "react/jsx-runtime";
import { forwardRef as En, useState as ke, useRef as Q, useCallback as Se, useEffect as V, useMemo as et, memo as ik, createContext as Gp, useContext as Jp, Children as sk, isValidElement as ok, cloneElement as ak, useImperativeHandle as sa, useLayoutEffect as Ks } from "react";
import { assertSafeKey as ot, isValidBookCode as ck, MARKER_OBJECT_PROPS as lk, USJ_VERSION as yr, USJ_TYPE as br, isUsjTextContentLocation as uk, indexesFromUsjJsonPath as Yp, isUsjAttributeKeyLocation as dk, isUsjAttributeMarkerLocation as fk, isUsjClosingAttributeMarkerLocation as pk, isUsjMarkerLocation as hk, isUsjClosingMarkerLocation as gk, isUsjPropertyValueLocation as mk, getUsjDocumentLocationTypeName as yk, usjJsonPathFromIndexes as On, EMPTY_USJ as Xp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as nt, $parseSerializedNode as jn, DecoratorNode as Bs, ElementNode as Tr, isHTMLElement as si, createState as oa, $getState as ue, $setState as Ot, $isRangeSelection as A, $isElementNode as L, $isTextNode as v, $getSelection as N, $isNodeSelection as aa, ParagraphNode as Rl, TextNode as tt, $createTextNode as Ne, $getCommonAncestor as bk, $isLineBreakNode as oi, NODE_STATE_KEY as js, $getEditor as bn, $hasUpdateTag as kk, $getNodeByKey as ae, $getRoot as Ye, $createRangeSelection as Yr, $createPoint as hr, $setSelection as nr, SELECTION_CHANGE_COMMAND as Kt, $getCharacterOffsets as $l, KEY_DOWN_COMMAND as Cr, COMMAND_PRIORITY_HIGH as Re, HISTORY_MERGE_TAG as ql, CLICK_COMMAND as ca, COMMAND_PRIORITY_EDITOR as Vn, DELETE_CHARACTER_COMMAND as Jr, DELETE_WORD_COMMAND as Ts, DELETE_LINE_COMMAND as qi, COMMAND_PRIORITY_NORMAL as Rr, CONTROLLED_TEXT_INSERTION_COMMAND as Wn, COMMAND_PRIORITY_CRITICAL as ye, PASTE_COMMAND as zt, CUT_COMMAND as or, REMOVE_TEXT_COMMAND as Il, isDOMNode as Qp, $getNearestNodeFromDOMNode as Hi, $isRootNode as Ll, DROP_COMMAND as Dl, $isDecoratorNode as ai, COPY_COMMAND as Hn, COMMAND_PRIORITY_LOW as kt, getDOMSelection as xk, isSelectionWithinEditor as Zp, $createRangeSelectionFromDom as eh, isDOMTextNode as Tk, BLUR_COMMAND as Ul, $addUpdateTag as St, INSERT_PARAGRAPH_COMMAND as Gn, INSERT_LINE_BREAK_COMMAND as Nc, $getPreviousSelection as Ck, DRAGSTART_COMMAND as th, isExactShortcutMatch as hn, SKIP_DOM_SELECTION_TAG as fr, CLEAR_HISTORY_COMMAND as Sk, $isRootOrShadowRoot as _k, CAN_UNDO_COMMAND as vk, CAN_REDO_COMMAND as Mk, $createNodeSelection as rh, getDOMSelectionFromTarget as Ek, $onUpdate as nh, KEY_ENTER_COMMAND as ih, LineBreakNode as sh, $copyNode as Ak, FOCUS_COMMAND as oh, createEditor as Pk, SELECT_ALL_COMMAND as Nk, getDOMTextNode as wk, KEY_ESCAPE_COMMAND as ah, createCommand as Fl, HISTORIC_TAG as zl, UNDO_COMMAND as ch, REDO_COMMAND as lh, CLEAR_EDITOR_COMMAND as Ok } from "lexical";
import { addClassNamesToElement as xi, removeClassNamesFromElement as Ga, $findMatchingParent as qe, $dfsIterator as la, $dfs as ci, mergeRegister as Ie, registerNestedElementResolver as uh, $unwrapNode as wc, IS_APPLE as Nr } from "@lexical/utils";
import { useLexicalNodeSelection as Rk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Qt } from "fast-equals";
import fs from "quill-delta";
import { useLexicalComposerContext as fe } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as $k } from "unicode-segmenter/grapheme";
import { copyToClipboard as qk, $getLexicalContent as Ik } from "@lexical/clipboard";
import { TreeView as Lk } from "@lexical/react/LexicalTreeView";
import * as Dk from "react-dom";
import { createPortal as zn } from "react-dom";
import { LexicalComposer as dh } from "@lexical/react/LexicalComposer";
import { ContentEditable as fh } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as ph } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as hh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as gh } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Uk } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Fk, createDOMRange as zk, createRectsFromDOMRange as Kk } from "@lexical/selection";
import { autoUpdate as Bk, computePosition as jk, shift as Vk, flip as Wk } from "@floating-ui/dom";
import { $generateNodesFromDOM as Hk } from "@lexical/html";
import { AutoFocusPlugin as Gk } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Jk } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as mh, LexicalCollaboration as Yk } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Xk } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Qk } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Zk, $isRootTextContentEmpty as ex } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as tx } from "@lexical/yjs";
import { Array as Nd, Map as wd, YArrayEvent as rx } from "yjs";
const Ja = (e) => nt(jn(e)), nx = {
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
function yh(e) {
  return nx[e];
}
const D = " ", Eo = "​", ar = D, Kl = `${D}|`, ir = "p", Cs = "+", bh = "-", Ao = "chapter", Oc = "verse", Od = "invalid", ix = "text-spacing", sx = "formatted-font", ox = "marker-", Bl = "external-usj-mutation", kh = "selection-change", Rt = "cursor-change", Rc = "annotation-change", Ss = "delta-change", xh = "marker-settle", ax = [
  Bl,
  kh,
  Rt,
  Rc,
  Ss
], Jn = "zmsc-s", Oi = "zmsc-e", cx = [Jn, Oi], lx = [
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
  Jn,
  Oi
], Th = 1, jl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], ux = jl.filter((e) => e !== "sid" && e !== "eid");
class kr extends Bs {
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
    return new kr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Sh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (lx.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Th
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Ch(e) {
  return cx.includes(e);
}
function Sh(e, t, r, n, i) {
  return nt(new kr(e, t, r, n, void 0, i));
}
function st(e) {
  return e instanceof kr;
}
const Vl = "f", dx = [
  // Footnote
  Vl,
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
const fx = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], _h = 1;
class Le extends Tr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Vl, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (po(t) === "crossref" ? bh : Cs), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => hx(t) ? {
        conversion: px,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Wl().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (dx.includes(t) || (r?.includes(t) ?? !1));
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
    return r && si(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", po(this.getMarker()))), { element: r };
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
      version: _h
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
function px(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Wl(t, r, n) };
}
function Wl(e, t, r, n, i) {
  return nt(new Le(e, t, r, n, i));
}
function hx(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Le.isValidMarker(t) && e.classList.contains(Le.getType());
}
function j(e) {
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
const $c = {
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
}, Rd = {
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
function $r(e) {
  const t = Object.hasOwn($c, e) ? $c[e] : void 0, r = Object.hasOwn(Rd, e) ? Rd[e] : void 0;
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
const vh = "v", Mh = "c", $n = "fig", $d = "tr", qc = "esb", Eh = "esbe", qd = "periph", Id = "alt", Ld = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, gx = {
  "": "start",
  c: "center",
  r: "end"
};
function Dd(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Ud(e) {
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
const mx = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function yx(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Eo && s + 1 < e.length && Ud(e[s + 1]) || (Ud(o) ? (r || (i = t.length, t += o), r = !0) : mx.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function bx(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function kx(e, t) {
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
const xx = /^(?:qt[1-5]?|ts)-[se]$/;
function Hl(e) {
  return xx.test(e) || Ch(e);
}
function Ya(e, t) {
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
function Tx(e, t, r) {
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
      a(yx(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: d } = kx(e, i + 1);
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
    if (l === vh) {
      const { word: g, next: y } = Ya(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === Mh) {
      const { word: g, next: y } = Ya(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === x.Note || h === void 0 && Le.isValidMarker(l)) {
      const { word: g, next: y } = Ya(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === x.Milestone || h === void 0 && Hl(l)) {
      const g = Px(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    h === x.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : h === x.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Po(p) ? (u(), Po(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === qc || l === Eh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Fd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Po(e) {
  return Object.hasOwn(Fd, e) ? Fd[e] : void 0;
}
function Cx(e) {
  return Po(e) !== void 0;
}
const Sx = /([-\w]+)\s*=\s*"(.*?)"/g, _x = /[\s\u200B]*[\n\r][\s\u200B]*/g, Ah = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function ua(e) {
  return Ah[e];
}
const vx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Mx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function _s(e, t, r = Ah[t]) {
  const n = e.replace(_x, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Sx)];
  if (s.length > 0) {
    if (!Mx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      vx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function da(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Ex(e) {
  const t = Fr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Ax(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = _s(e.slice(n + 1, i), r, da(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Px(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = _s(s.slice(o + 1), r, da(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Ax(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Ar(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", D);
}
function dn(e) {
  return e.content || (e.content = []), e.content;
}
function Fr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d, u;
  const f = () => d ? dn(d) : u ? dn(u) : r;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? dn(o[o.length - 1].object) : dn(s);
    if (o.length > 0)
      return dn(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: ir, content: [] }, f().push(i);
    }
    return dn(i);
  }, g = (te) => {
    const P = h();
    typeof te == "string" && typeof P[P.length - 1] == "string" ? P[P.length - 1] = P[P.length - 1] + te : P.push(te);
  }, y = (te) => {
    for (let P = te; P < o.length; P += 1) {
      const ne = o[P].object;
      ne.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, b = (te) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, te || (s.closed = "false"), s = void 0);
  }, T = () => {
    c = void 0, l = void 0;
  }, E = (te, P, ne) => {
    k();
    const [, pe, he, Xe] = ne, yt = {
      type: "table:cell",
      marker: Xe ? P.slice(0, P.indexOf("-")) : P,
      align: gx[pe],
      content: []
    };
    Xe && (yt.colspan = String(Number(Xe) + 1 - Number(he))), dn(te).push(yt), i = yt;
  }, S = (te) => {
    d && (te || (d.closed = "false"), d = void 0);
  }, w = () => {
    u = void 0;
  };
  let $, z = "", B;
  const ce = () => {
    z && g(Ar(z)), z = "";
  }, Y = (te = !1) => {
    $?.type === "sidebar" ? z = "" : te && z.endsWith(`
`) && (z = z.slice(0, -1)), $ = void 0, ce();
  }, xe = () => {
    if (!B)
      return;
    const te = { type: "char", marker: B.marker, content: [] };
    B.value && (te.content = [Ar(B.value)]), h().push(te), o.push({ object: te }), B = void 0;
  }, se = (te, P) => {
    p = !1, T(), k(), b(!1), i = { type: "para", marker: te, content: [] }, P && (i.content = [Ar(P)]), f().push(i);
  }, q = () => {
    B && (se(B.marker, B.value), B = void 0);
  };
  let J;
  const W = (te) => {
    if (!J)
      return;
    let { value: P } = J;
    J = void 0, te && P.endsWith(`
`) && (P = P.slice(0, -1));
    const ne = P.indexOf("|"), pe = ne >= 0 ? _s(P.slice(ne + 1), qd) : void 0, he = ne >= 0 ? P.slice(0, ne) : P, Xe = ne >= 0 && (!pe || !!he && !!pe[Id]), yt = Xe ? void 0 : pe, ie = Xe ? P : he, Qe = {
      type: "periph",
      ...ie ? { [Id]: Ar(ie) } : {},
      ...yt
    };
    Qe.content = [], f().push(Qe), u = Qe, i = void 0;
  };
  let K;
  const ee = () => {
    if (K) {
      if (K.shape === "para")
        se($n, K.value);
      else {
        const te = { type: "char", marker: $n, content: [] };
        K.value && (te.content = [Ar(K.value)]), h().push(te), o.push({ object: te });
      }
      K = void 0;
    }
  }, oe = Tx(e, t?.getMarker ?? $r, n);
  for (let te = 0; te < oe.length; te++) {
    const P = oe[te];
    if (B) {
      if (P.kind === "text") {
        B.value += P.text;
        continue;
      }
      if (B.shape === "char" && P.kind === "end" && P.marker.replace(/^\+/, "") === B.marker) {
        if (B.value.trim() === "") {
          h().push({ type: "char", marker: B.marker, content: [] }), B = void 0, Y();
          continue;
        }
        Object.assign(B.target, {
          [B.attrName]: Ar(B.value.trim())
        });
        const ne = B.marker;
        if (B = void 0, ne === "ca") {
          const pe = oe[te + 1];
          pe?.kind === "text" && /^[\s\u200B]*$/.test(pe.text) && te++;
        }
        continue;
      }
      if (B.shape === "para" && (P.kind === "para" || P.kind === "chapter")) {
        const ne = B.value.replace(/[\s\u200B]+$/, "");
        ne === "" ? (se(B.marker), B = void 0) : (Object.assign(B.target, { [B.attrName]: Ar(ne) }), B = void 0);
      } else {
        $ = void 0, (P.kind === "para" || P.kind === "chapter") && B.value.endsWith(`
`) && (B.value = B.value.slice(0, -1)), B.shape === "para" ? q() : xe(), te--;
        continue;
      }
    }
    if (J) {
      if (P.kind === "text" || P.kind === "optbreak") {
        J.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      W(P.kind === "para" || P.kind === "chapter"), te--;
      continue;
    }
    if (K) {
      if (P.kind === "text" || P.kind === "optbreak") {
        K.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      if (P.kind === "end" && P.marker.replace(/^\+/, "") === $n) {
        const ne = K.value.indexOf("|"), pe = ne >= 0 ? _s(K.value.slice(ne + 1), $n) : void 0;
        if (pe) {
          const he = {};
          for (const [ie, Qe] of Object.entries(pe))
            he[ie === "src" ? "file" : ie] = Qe;
          const Xe = {
            type: "figure",
            marker: $n,
            ...he
          }, yt = K.value.slice(0, ne);
          yt && (Xe.content = [Ar(yt)]), g(Xe), K = void 0;
          continue;
        }
      }
      ee(), te--;
      continue;
    }
    if ($)
      if (P.kind === "text") {
        if (P.text.includes(`
`) && /^[\s\u200B]*$/.test(P.text)) {
          z += P.text;
          continue;
        }
        Y();
      } else if (P.kind === "charOpen" || P.kind === "para") {
        const ne = P.kind === "para" || !P.isNested ? Po(P.marker) : void 0;
        if (ne && ne.targetTypes.includes($.type)) {
          z = "", B = {
            target: $,
            attrName: ne.attrName,
            marker: P.marker,
            shape: ne.shape,
            value: ""
          };
          continue;
        }
        Y(P.kind === "para");
      } else
        Y(P.kind === "chapter");
    if (!s && !n && (P.kind === "charOpen" && !P.isNested && P.marker === $n || P.kind === "para" && P.marker === $n)) {
      k(), K = { shape: P.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (P.kind) {
      case "text": {
        let ne = P.text;
        if (!s && ne.endsWith(`
`)) {
          const pe = oe[te + 1];
          (pe === void 0 || pe.kind === "para" || pe.kind === "chapter") && (ne = ne.slice(0, -1));
        }
        ne && g(Ar(ne));
        break;
      }
      case "para": {
        const ne = !s && !n;
        if (ne && P.marker === $d) {
          k(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: $d, content: [] }, dn(c).push(l), i = l, p = !1;
          break;
        }
        if (ne && l) {
          const pe = Ld.exec(P.marker);
          if (pe && Dd(pe)) {
            E(l, P.marker, pe);
            break;
          }
        }
        if (T(), !n && P.marker === qc) {
          k(), b(!1), S(!1);
          const pe = {
            type: "sidebar",
            marker: qc,
            content: []
          };
          f().push(pe), d = pe, i = void 0, $ = d, p = !1;
          break;
        }
        if (P.marker === Eh && d) {
          k(), b(!1), S(!0), i = void 0;
          break;
        }
        if (!n && P.marker === qd) {
          k(), b(!1), S(!1), w(), J = { value: "" }, i = void 0, p = !1;
          break;
        }
        se(P.marker);
        break;
      }
      case "verse": {
        b(!1);
        const ne = { type: "verse", marker: vh, number: P.number };
        g(ne), $ = ne;
        break;
      }
      case "chapter": {
        k(), b(!1), T(), S(!1), w(), i = void 0;
        const ne = {
          type: "chapter",
          marker: Mh,
          number: P.number
        };
        r.push(ne), $ = ne, p = !0;
        break;
      }
      case "note": {
        b(!1);
        const ne = h();
        s = { type: "note", marker: P.marker, caller: P.caller, content: [] }, a = o.length, ne.push(s), $ = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !P.isNested) {
          const he = Ld.exec(P.marker);
          if (he && Dd(he)) {
            E(l, P.marker, he);
            break;
          }
        }
        if (!P.isNested) {
          const he = s ? a : 0;
          y(he), o.length = he;
        }
        const ne = h(), pe = { type: "char", marker: P.marker, content: [] };
        ne.push(pe), o.push({ object: pe });
        break;
      }
      case "end": {
        const ne = P.marker.replace(/^\+/, ""), pe = s ? a : 0, he = o.findLastIndex((Xe, yt) => yt >= pe && Xe.object.marker === ne);
        he >= 0 ? (Nx(o[he].object), y(he + 1), o.length = he) : s && s.marker === ne ? b(!0) : (y(pe), o.length = pe, g({ type: "unmatched", marker: `${P.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: P.marker, ...P.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (J && W(!0), K && ee(), B)
    if (B.shape === "para") {
      const te = B.value.replace(/[\s\u200B]+$/, "");
      te === "" ? se(B.marker) : Object.assign(B.target, { [B.attrName]: Ar(te) }), B = void 0;
    } else
      B.value.endsWith(`
`) && (B.value = B.value.slice(0, -1)), xe();
  k(), b(!1), S(!1);
  const Ke = (te) => {
    for (const P of te)
      typeof P != "string" && P.content && (Ke(P.content), P.content.length === 0 && delete P.content);
  };
  return Ke(r), r;
}
function Nx(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = _s(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Yn = oa("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), kn = oa("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), me = oa("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), zr = "marker-trailing-space", Ph = 1, wx = "marker", Gl = oa("isGutterMarker", {
  parse: (e) => e === !0
});
class tn extends Bs {
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
    return new tn(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => qx(t) ? {
        conversion: Ox,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Xr().updateFromJSON(t);
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
    return r && si(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Ph
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Ox(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Xr(t, r) };
}
function Xr(e, t) {
  return nt(new tn(e, t));
}
function Rx(e) {
  return Ot(Xr(wx, e), Gl, !0);
}
function $x(e) {
  return Bt(e) && ue(e, Gl);
}
function qx(e) {
  return e?.tagName === "span";
}
function Bt(e) {
  return e instanceof tn;
}
function Nh(e) {
  return e?.type === tn.getType();
}
const yn = "internal-comment", Ix = [yn], wh = Object.freeze({}), Ic = Object.freeze({}), Lc = Object.freeze({}), Dc = Object.freeze({}), Uc = Object.freeze({}), Lx = 1, Ti = /* @__PURE__ */ new Map(), is = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new Map();
class dt extends Tr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = wh, r, n, i, s, o) {
    super(o), this.__typedIDs = ho(t), this.__typedOnClicks = Xa(r), this.__typedOnRemoves = Qa(n), this.__typedOnMouseEnters = Za(i), this.__typedOnMouseLeaves = ec(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = ho(t.__typedIDs), n = Xa(t.__typedOnClicks), i = Qa(t.__typedOnRemoves), s = Za(t.__typedOnMouseEnters), o = ec(t.__typedOnMouseLeaves);
    return new dt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Ix.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return vs().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Lx
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      xi(n, qn(t.theme.typedMark, a)), c.length > 1 && xi(n, qn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        xi(n, qn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = qn(n.theme.typedMark, s), u = qn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && xi(r, d) : l === 0 && Ga(r, d), c === 1 ? l === 2 && xi(r, u) : l === 1 && Ga(r, u));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ga(r, qn("annotationId", h));
      for (const h of a)
        f.has(h) || xi(r, qn("annotationId", h));
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
    return Pe(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = ho(r.__typedIDs);
    r.__typedIDs = ho(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && No(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Xa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Pe(t) ? Ti.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Qa(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Pe(t) ? is.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Za(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Pe(t) ? Ci.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ec(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Pe(t) ? Si.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Pe(a))
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
    if (!Pe(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && No(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = vs(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Ti.delete(r.getKey()), is.delete(r.getKey()), Ci.delete(r.getKey()), Si.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
    const n = Ci.get(this.getKey());
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
    const n = Si.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ic) {
      const t = Ti.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Ti.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Ti.set(this.getKey(), this.__typedOnClicks);
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
    const i = fn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = fn(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Ic) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Lc) {
      const t = is.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      is.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    is.set(this.getKey(), this.__typedOnRemoves);
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
    const i = fn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = fn(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Lc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Dc) {
      const t = Ci.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Ci.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Ci.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = fn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = fn(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Dc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Uc) {
      const t = Si.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Si.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Si.set(this.getKey(), this.__typedOnMouseLeaves);
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
    const i = fn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = fn(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Uc) {
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
    const i = Dx(t, r);
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
    for (; Pe(t) && Kd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Pe(r) && Kd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Ux(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Fx(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = zx(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Kx(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function ho(e = wh) {
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
function Xa(e) {
  if (!e || e === Ic)
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
function Qa(e) {
  if (!e || e === Lc)
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
function Za(e) {
  if (!e || e === Dc)
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
function ec(e) {
  if (!e || e === Uc)
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
function fn(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function zd(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Dx(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Kd(e, t) {
  const r = zd(e), n = zd(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Ux(e, t) {
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
function Fx(e, t) {
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
function zx(e, t) {
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
function Kx(e, t) {
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
function qn(e, t) {
  return `${e}-${t}`;
}
function Bd(e) {
  return `external-${e}`;
}
function vs(e, t, r, n, i) {
  return nt(new dt(e, t, r, n, i));
}
function Pe(e) {
  return e instanceof dt;
}
function Oh(e) {
  return e?.type === dt.getType();
}
function No(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Rh(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let h, g;
  for (let y = 0; y < d; y++) {
    const k = a[y];
    if (L(g) && g.isParentOf(k))
      continue;
    const b = y === 0, T = y === d - 1;
    let E = null;
    if (v(k)) {
      const S = k.getTextContentSize(), w = b ? f : 0, $ = T ? p : S;
      if (w === 0 && $ === 0)
        continue;
      const z = k.splitText(w, $);
      E = z.length > 1 && (z.length === 3 || b && !T || $ === S) ? z[1] : z[0];
    } else {
      if (Pe(k))
        continue;
      L(k) && k.isInline() && (E = k);
    }
    if (E !== null) {
      if (E && E.is(h))
        continue;
      const S = E.getParent();
      (S == null || !S.is(h)) && (g = void 0), h = S, g === void 0 && (g = vs(), g.addID(t, r, n, i, s, o), E.insertBefore(g)), g.append(E);
    } else
      h = void 0, g = void 0;
  }
  t === yn && L(g) && (u ? g.selectStart() : g.selectEnd());
}
function Bx(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Pe(n))
      return n.getTypedIDs()[t];
    if (v(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Pe(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const jx = ["type", "marker", "content"], Fc = "unknown", $h = 1, Vx = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class li extends Tr {
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
    return new li(r, n, i, s);
  }
  static importDOM() {
    return {
      [Fc]: (t) => Hx(t) ? {
        conversion: Wx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Jl().updateFromJSON(t);
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
    return Vx.has(this.getTag());
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
    const t = document.createElement(Fc);
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
      version: $h
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
    if (aa(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function Wx(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Jl(t, r) };
}
function Jl(e, t, r) {
  return nt(new li(e, t, r));
}
function Hx(e) {
  return e?.tagName.toLowerCase() === Fc;
}
function ve(e) {
  return e instanceof li;
}
const qh = 1, Gx = "attribute-run";
function tc(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class rn extends Tr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new rn(r, n);
  }
  static importJSON(t) {
    return Ih(t.runKind).updateFromJSON(t);
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
    t.classList.add(Gx);
    const r = tc(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = tc(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = tc(this.__runKind);
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
      version: qh
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
function Ih(e) {
  return nt(new rn(e));
}
function je(e) {
  return e instanceof rn;
}
const Ms = "id", Lh = 1, Jx = [
  "type",
  "marker",
  "code",
  "content"
];
class jt extends Tr {
  __marker = Ms;
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
    return Dh(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return ck(t);
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
      version: Lh
    };
  }
}
function Dh(e, t) {
  return nt(new jt(e, t));
}
function Ee(e) {
  return e instanceof jt;
}
function Yl(e) {
  return e?.type === jt.getType();
}
const wo = "c", Uh = 1, Yx = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Gt extends Tr {
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
    return new Gt(r, n, i, s, o, a);
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
  createDOM() {
    const t = document.createElement("p");
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ao, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Uh
    };
  }
}
function Fh(e, t, r, n, i) {
  return nt(new Gt(e, t, r, n, i));
}
function Fe(e) {
  return e instanceof Gt;
}
function Xx(e) {
  return e?.type === Gt.getType();
}
const zh = [
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
], Kh = [
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
], Qx = [
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
  ...zh,
  ...Kh
], Bh = 1, Zx = ["type", "marker", "content"];
class Me extends Tr {
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
    return new Me(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Qx.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && zh.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Kh.includes(t);
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
    return Me.isValidFootnoteMarker(t) || Me.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => tT(t) ? {
        conversion: eT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Qr().updateFromJSON(t);
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
    return jd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), jd(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && si(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = this.getUnknownAttributes()?.closed === "false", i = Qr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function jd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function eT(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Qr(t) };
}
function Qr(e, t) {
  return nt(new Me(e, t));
}
function tT(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Me.isValidMarker(t) && e.classList.contains(Me.getType());
}
function F(e) {
  return e instanceof Me;
}
function rT(e) {
  return e?.type === Me.getType();
}
const jh = 1, nT = "c", Vh = "span";
class Kr extends Bs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = nT, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Kr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Wh(t) ? {
        conversion: iT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Xl().updateFromJSON(t);
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
    const t = document.createElement(Vh);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ao, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && si(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ao, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? sr(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: jh
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
function iT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Xl(t) };
}
function Xl(e, t, r, n, i, s) {
  return nt(new Kr(e, t, r, n, i, s));
}
function Wh(e) {
  return e ? e.classList.contains(Ao) && e.tagName.toLowerCase() === Vh : !1;
}
function Vs(e) {
  return e instanceof Kr;
}
function sT(e) {
  return e?.type === Kr.getType();
}
const Hh = 1;
class xn extends Rl {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new xn(t.__key);
  }
  static importJSON(t) {
    return gr().updateFromJSON(t);
  }
  getMarker() {
    return ir;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Hh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = gr();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function gr() {
  return nt(new xn());
}
function Ir(e) {
  return e instanceof xn;
}
function fa(e) {
  return e?.type === xn.getType();
}
const oT = [
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
  ir,
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
], Gh = 1, aT = ["type", "marker", "content"];
class pt extends Rl {
  __marker;
  __unknownAttributes;
  constructor(t = ir, r, n) {
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
    return t !== void 0 && (oT.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: cT,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Ii().updateFromJSON(t);
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
    return r && si(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Gh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ii(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function cT(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Ii(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Ii(e, t) {
  return nt(new pt(e, t));
}
function ge(e) {
  return e instanceof pt;
}
function Ql(e) {
  return e?.type === pt.getType();
}
const Oo = "v", Jh = 1, lT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class _t extends tt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Oo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new _t(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Yh().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Oc, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Jh
    };
  }
}
function Yh(e, t, r, n, i, s) {
  return nt(new _t(e, t, r, n, i, s));
}
function Be(e) {
  return e instanceof _t;
}
function Xh(e) {
  return e?.type === _t.getType();
}
const uT = "​", Li = uT;
var Vd;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Vd || (Vd = {}));
var Wd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Wd || (Wd = {}));
function dT() {
  return Ne(Li);
}
function fT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Li, ""));
}
function Ws(e) {
  return e.length > 0 && e.includes(Li) && e.replaceAll(Li, "") === "";
}
function Hs(e) {
  return v(e) && Ws(e.getTextContent());
}
function Qh(e) {
  return Xx(e) || sT(e);
}
function rt(e) {
  return Fe(e) || Vs(e);
}
function Zh(e, t) {
  return e.find((r) => rt(r) && r.getNumber() === t.toString());
}
function pT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && rt(r));
}
function zc(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function hT(e) {
  if (!e)
    return;
  if (rt(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !rt(t); )
    t = t.getPreviousSibling();
  if (t && rt(t))
    return t;
}
function Vt(e) {
  return qe(e, j) ?? void 0;
}
function gT(e) {
  return Ee(e) || Fe(e) || F(e) || Vs(e) || Ir(e) || st(e) || ge(e) || j(e) || Be(e) || ve(e);
}
function Zl(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function eg(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function we(e) {
  return ft(e) || Ee(e);
}
function ft(e) {
  return ge(e) || Ir(e);
}
function mT(e) {
  return Ql(e) || fa(e);
}
function Ro(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Xn(e, t) {
  const r = ue(t, Yn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function yT(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? bk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function bT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Di(e) {
  return e?.type === tt.getType();
}
function kT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function xT(e, t) {
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
function tg(e, t, r) {
  const n = Ve(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function sr(e, t) {
  let r = Ve(e);
  return t && (r += `${D}${t}`), r += " ", r;
}
function TT(e) {
  const t = e[js];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function rg(e) {
  return ig(e) || Di(e) && TT(e) === "attribute" ? "" : Di(e) && e.text !== D ? e.text : rT(e) ? e.children.map((t) => rg(t)).join("") : "";
}
function CT(e) {
  return e.map((r) => rg(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Wt(e) {
  return " " + e + D;
}
function eu(e) {
  const t = [];
  for (const r of e) {
    if (!F(r))
      continue;
    const n = ng(r);
    n !== ar && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function ng(e) {
  return O(e) || Sr(e) || v(e) && ue(e, me) === "attribute" ? "" : v(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => ng(t)).join("") : "";
}
function Sr(e) {
  return Bt(e) && e.getTextType() === "marker";
}
function Lt(e) {
  return O(e) || Sr(e);
}
function tu(e) {
  if (!e || !Lt(e))
    return !1;
  const t = e.getParent();
  return Ee(t) && e.is(t.getFirstChild());
}
function ig(e) {
  return nu(e) || Nh(e) && e.textType === "marker";
}
function Hd(e, t) {
  ST(e, t), e.setMarker(t);
}
function ST(e, t) {
  const r = e.getMarker(), n = Ve(r), i = Ve(r, !0), s = ct(r), o = ct(r, !0), a = Me.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Lt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (Sr(c)) {
        const f = l.startsWith(Ve("", !0));
        c.setTextContent(d ? Ve(t, f) : ct(t, f));
      }
    }
  });
}
function Je(e, t = lk) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function ze(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function sg(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function og(e) {
  if (!A(e))
    return Gd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return Gd(e) ?? t ?? void 0;
  } catch (n) {
    if (sg(n))
      return t ?? void 0;
    throw n;
  }
}
function _T(e, t) {
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
function ru(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function vT(e) {
  return !!e && e.includes("-");
}
function ag(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Gd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Gs(e) {
  if (!e)
    return !1;
  if (oi(e) || O(e) || Sr(e) || je(e) || Bt(e) && e.getTextType() === "attribute")
    return !0;
  if (v(e)) {
    const t = ue(e, me);
    if (t === zr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === D || Ws(r))
      return !0;
  }
  return !1;
}
function Js() {
  const e = Ne(D);
  return Ot(e, me, zr), e.setMode("token"), e;
}
function MT(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function Br(e) {
  return v(e) && ue(e, me) === zr;
}
function cg(e) {
  const t = e.getFirstChild();
  if (!Lt(t) || t === null || Br(t.getNextSibling()))
    return !1;
  const r = N();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Gi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Gs(s)) {
      if (Pe(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === tt.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function pa(e) {
  let t = e.getParent();
  for (; t && Pe(t); )
    t = t.getParent();
  return t;
}
function ET(e, t) {
  return Gi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function AT(e, t) {
  const r = pa(e);
  if (!r)
    return;
  const n = Gi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function PT(e, t) {
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
function lg(e, t) {
  const r = Gi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Gs(n))
    return lg(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Ro(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Ro(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function NT(e, t) {
  if (t <= 0)
    return 0;
  const r = Gi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? wT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function wT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const OT = 1;
class jr extends tt {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Un(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new jr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return xt().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || Un(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Un(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Un(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Un(r.__marker, r.__markerSyntax, t), r;
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
      version: OT
    };
  }
}
function xt(e, t, r) {
  return nt(new jr(e, t, void 0, r));
}
function O(e) {
  return e instanceof jr;
}
function nu(e) {
  return e?.type === jr.getType();
}
function nn(e) {
  return e.getTextContent() === Un(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function RT(e) {
  e.setTextContent(Un(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Un(e, t, r = !1) {
  return t === "closing" ? ct(e, r) : t === "selfClosing" ? ct("") : Ve(e, r);
}
const $T = /* @__PURE__ */ new Set(["closed"]);
function wr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !$T.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function ug(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function dg(e) {
  const t = Object.keys(e).filter((n) => !ux.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function fg(e, t, r, n) {
  return ug(
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
function ms(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function qT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : ms(e) === void 0 && pg(e) === void 0;
}
function pg(e) {
  return e.getChildren().find((t) => v(t) && ue(t, me) === "attribute");
}
function Es(e, t) {
  return Ys(e.getNextSibling(), t);
}
const IT = /^[ \u00A0]+$/;
function iu(e) {
  if (nn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ve(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && IT.test(r.slice(t.length));
}
function Ys(e, t) {
  let r, n, i, s;
  return je(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  iu(e) && (r = e, e = e.getNextSibling()), v(e) && ue(e, me) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && nn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Zr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!O(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (v(n) && n.getTextContent() === Wt(e.getCaller()))
    return n;
}
function su(e) {
  const t = Zr(e);
  return t ? Ys(t.getNextSibling(), "cat") : {};
}
function ha(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || O(t)) && ue(t, me) !== "attribute")
    return t;
}
function hg(e) {
  const t = ha(e);
  return t ? Ys(t.getNextSibling(), "ca") : {};
}
function gg(e) {
  const t = ha(e);
  if (!t)
    return;
  const r = Ys(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function mg(e) {
  const t = gg(e);
  return t ? Ys(t.getNextSibling(), "cp") : {};
}
function yg(e) {
  const t = e.getParent();
  if (!F(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Be(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && ue(n, me) === "attribute" || F(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || je(n)))
        return;
    }
}
function ga(e) {
  let t, r, n, i, s = e.getNextSibling();
  return je(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  iu(s) && (t = s, s = s.getNextSibling()), v(s) && ue(s, me) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && nn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function ou(e) {
  return F(pa(e));
}
function au(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? ou(t) : t.getChildren().some((i) => F(i) && i.getMarker() === r) ? !0 : void 0;
}
function LT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = au(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Ji(e) {
  return v(e) && e.getType() === tt.getType() && ue(e, me) !== "attribute";
}
function ma(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !O(t) || !F(r) || !bg(t, r) || !Ji(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function bg(e, t) {
  return e.getMarkerSyntax() === "opening" && au(e, t) !== void 0;
}
function cu(e, t) {
  if (!bg(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? au(r, t) === !0 ? "spacer" : void 0 : Ji(r) ? r.getTextContent().startsWith(D) ? void 0 : "prefix" : "spacer";
}
function DT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && cu(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function kg(e, t) {
  const r = N();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function xg(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = cu(t, e);
    if (r !== void 0 && !kg(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        v(n) && n.setTextContent(D + n.getTextContent());
      } else
        t.insertAfter(Ne(D));
  });
}
function Tg(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && cu(t, e) !== void 0 && kg(t, e)) : !1;
}
const UT = "file", FT = "src", zT = "colspan", KT = "category", BT = "alt", jT = "closed", VT = "false";
function WT(e) {
  return e[jT] !== VT;
}
function HT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === UT ? FT : t,
    r
  ]));
}
function Cg(e, t) {
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
function Sg(e, t, r) {
  const n = r ?? {}, i = WT(n);
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
        opening: `\\${Cg(t, n[zT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: wr(HT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [KT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + wr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [BT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: wr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: wr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const qt = { wantsRun: !1, valueText: void 0 }, sn = {};
function rc(e, t) {
  if (t === "va")
    return e;
  const r = Es(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function lu(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed())
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
function ya(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!A(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function GT(e) {
  return je(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && ue(e, me) === "attribute";
}
function JT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!v(e) || ue(e, me) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function nc(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Be(t))
      return t;
    if (!GT(t))
      return;
  }
}
function Jd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Be(t),
    ownerOf: (t) => {
      if (je(t))
        return t.getRunKind() === e ? nc(t) : void 0;
      const r = t.getParent();
      return je(r) ? r.getRunKind() === e ? nc(r) : void 0 : JT(t) === e ? nc(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Be(t))
        return qt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? qt : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (t) => Be(t) ? Es(rc(t, e), e) : sn,
    graceSite: (t, r) => Be(t) ? !r.opener && !r.closer ? lu(rc(t, e)) : ya(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Be(t) ? rc(t, e) : void 0
    }
  };
}
const YT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => qt,
  scanPieces: () => sn,
  graceSite: (e) => F(e) && Tg(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, XT = {
  kind: "char",
  ownerPredicate: (e) => F(e),
  ownerOf: (e) => {
    if (!v(e) || ue(e, me) !== "attribute")
      return;
    const t = e.getParent();
    return F(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!F(e) || ms(e) === void 0)
      return qt;
    const t = wr(e.getUnknownAttributes() ?? {}, ua(e.getMarker()));
    return t === "" ? qt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => F(e) ? { value: pg(e) } : sn,
  graceSite: (e, t) => {
    if (!F(e) || t.value)
      return !1;
    const r = ms(e);
    if (!r)
      return !1;
    const n = N();
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
    insertRunBefore: (e) => F(e) ? ms(e) : void 0
  }
};
function _g(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!v(e) || ue(e, me) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function QT(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Zr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!_g(n))
        return;
    }
}
const ZT = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (je(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return je(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : _g(e) ? QT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return qt;
    const t = e.getCategory();
    return t === void 0 ? qt : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => j(e) ? su(e) : sn,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Zr(e);
      return r !== void 0 && lu(r);
    }
    return ya(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => j(e) ? Zr(e) : void 0
  }
};
function eC(e) {
  return je(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && ue(e, me) === "attribute";
}
function tC(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!v(e) || ue(e, me) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function rC(e) {
  const t = e.getParent();
  if (!Fe(t))
    return;
  const r = ha(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!eC(n))
        return;
    }
}
function Yd(e) {
  const t = (r) => Fe(r) ? e === "ca" ? ha(r) : gg(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Fe(r),
    ownerOf: (r) => {
      if (je(r))
        return r.getRunKind() === e && Fe(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return je(n) ? n.getRunKind() === e && Fe(n.getParent()) ? n.getParent() ?? void 0 : void 0 : tC(r) === e ? rC(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Fe(r))
        return qt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? qt : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (r) => Fe(r) ? e === "ca" ? hg(r) : mg(r) : sn,
    graceSite: (r, n) => {
      if (!Fe(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && lu(i);
      }
      return ya(n);
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
function vg(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && ue(e, me) === "attribute";
}
function nC(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (st(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!vg(t))
      return;
  }
}
const iC = {
  kind: "milestone",
  ownerPredicate: (e) => st(e),
  ownerOf: (e) => {
    const t = je(e) ? e.getRunKind() === "milestone" ? e : void 0 : je(e.getParent()) ? e.getParent() : vg(e) ? e : void 0;
    if (!t || je(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return je(t) ? st(r) ? r : void 0 : nC(t);
  },
  expectedPieces: (e) => {
    if (!st(e))
      return qt;
    const t = fg(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = wr(t, da(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : D + r };
  },
  scanPieces: (e) => {
    if (!st(e))
      return sn;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ga(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!st(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = N();
      if (!A(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return ya(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => st(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, sC = Sg("optbreak", void 0, void 0).opening, oC = {
  kind: "optbreak",
  ownerPredicate: (e) => ve(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!ve(t) || t.getTag() !== "optbreak"))
      return v(e) || Bt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: sC }),
  scanPieces: (e) => ve(e) ? { value: e.getFirstChild() ?? void 0 } : sn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, aC = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => ve(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => qt,
  scanPieces: () => sn,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, cC = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => qt,
  scanPieces: () => sn,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, As = [
  YT,
  XT,
  Jd("va"),
  Jd("vp"),
  ZT,
  Yd("ca"),
  Yd("cp"),
  iC,
  oC,
  aC,
  cC
], lC = new Map(As.map((e) => [e.kind, e]));
function Qn(e) {
  const t = lC.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Zn(e) {
  for (const t of As) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Mg(e) {
  return Zn(e) !== void 0;
}
const $o = "unmatched", Eg = 2;
function ys(e) {
  return `\\${e}`;
}
class on extends tt {
  __marker;
  constructor(t = "", r) {
    super(ys(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new on(r, n);
  }
  static importDOM() {
    return {
      [$o]: (t) => dC(t) ? {
        conversion: uC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return uu().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? ys(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ys(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Od), r.title = Xd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Xd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement($o);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Od), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Eg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Ag(e) {
  return e.getTextContent() === ys(e.getMarker());
}
function Xd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function uC(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: uu(t) };
}
function uu(e) {
  return nt(new on(e));
}
function dC(e) {
  return e?.tagName.toLowerCase() === $o;
}
function an(e) {
  return e instanceof on;
}
const Pg = "table", Kc = "immutable-table", Ng = 1, fC = ["type", "marker", "content"];
class ui extends Tr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Kc;
  }
  static clone(t) {
    return new ui(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return pC().updateFromJSON(t);
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
      type: Kc,
      ...t !== void 0 && { unknownAttributes: t },
      version: Ng
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function pC(e) {
  return nt(new ui(e));
}
function wg(e) {
  return e instanceof ui;
}
function hC(e) {
  return e?.type === Kc;
}
const Og = "table:row", Qd = "immutable-table-row", Rg = 1, Bc = "tr", gC = ["type", "marker", "content"];
class Yi extends Tr {
  __marker;
  __unknownAttributes;
  constructor(t = Bc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Qd;
  }
  static clone(t) {
    return new Yi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return mC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Bc).setUnknownAttributes(t.unknownAttributes);
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
      type: Qd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Rg
    };
  }
}
function mC(e, t) {
  return nt(new Yi(e, t));
}
const $g = "table:cell", Zd = "immutable-table-cell", qg = 1, jc = "tc1", yC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function bC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Xi extends Tr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = jc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Zd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Xi(r, n, i, s, o);
  }
  static importJSON(t) {
    return kC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? jc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = bC(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Zd,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: qg
    };
  }
}
function kC(e, t, r, n) {
  return nt(new Xi(e, t, r, n));
}
function Xs(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function cr(e, t) {
  const r = Xs(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Ps(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function xC(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function TC(e) {
  return Ps(e) ? void 0 : { closed: "false" };
}
function CC(e, t, r, n) {
  const i = t.getMarker(), s = ou(t), o = xC(t);
  if (n) {
    e.append(xt(i, "opening", s));
    const [a] = r;
    Ji(a) && !a.getTextContent().startsWith(D) && a.setTextContent(D + a.getTextContent());
  }
  e.append(...r), o && e.append(xt(i, "closing", s));
}
function ei(e) {
  return qe(e, F) ?? void 0;
}
function SC(e) {
  let t = e.getParent();
  for (; F(t); )
    t = t.getParent();
  return t;
}
function Vc(e) {
  const t = Ig(e);
  return e.getChildren().every((r) => O(r) || t && ue(r, me) === "attribute" || v(r) && r.getTextContent().replaceAll(D, "") === "");
}
function Ig(e) {
  return Ps(e);
}
function _C(e, t) {
  const r = e.getUnknownAttributes(), n = r ? wr(r, ua(e.getMarker())) : "";
  n !== "" && t.insertAfter(Ne(n)), e.remove();
}
function vC(e, t) {
  if (Ps(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(xt(e.getMarker(), "closing", ou(e)));
}
function MC(e, t) {
  return F(e) && !Ps(e) && !Ps(t);
}
function EC(e, t, r) {
  Vc(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && Ji(n) && !n.getTextContent().startsWith(D) && n.setTextContent(D + n.getTextContent()), e.append(...t);
}
function AC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Ig(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = O(l) && l.getMarkerSyntax() === "closing", f = s && ue(l, me) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = MC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      EC(e, o, n);
    else {
      const l = Qr(t.getMarker(), TC(t));
      CC(l, t, o, n), e.insertAfter(l), Vc(l) ? l.remove() : c = l;
    }
  i && !a && vC(t, n), Vc(t) && _C(t, c);
}
function Ui(e, t) {
  let r = e.getParent();
  for (; F(r); )
    AC(e, r, t), r = e.getParent();
}
function ba(e) {
  if (v(e) && !O(e)) {
    const t = ma(e);
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      ba(t);
      return;
    }
    e.selectEnd();
  }
}
const Ri = /* @__PURE__ */ new WeakMap();
function PC(e, t) {
  return Ri.set(e, t), () => {
    Ri.get(e) === t && Ri.delete(e);
  };
}
function ef(e) {
  return Ri.get(e);
}
function NC(e) {
  return Ri.get(bn())?.has(e.getKey()) ?? !1;
}
function wC(e) {
  Ri.get(bn())?.add(e.getKey());
}
function OC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Wc(e) {
  return !!(e.opener || e.value || e.closer);
}
function tf(e) {
  return /^\s/.test(e);
}
function du(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !tf(t) || !tf(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function ka(e, t, r) {
  return r.wantsRun ? du(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : OC(t);
}
function RC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return du(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Lg(e, t) {
  return !Wc(e.scanPieces(t));
}
function Qs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!ka(e, n, r))
    return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Ro(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function $C(e, t, r, n) {
  return !r.wantsRun || Wc(n) || kk(Ss) ? !1 : bn().getEditorState().read(() => {
    const i = ae(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Wc(e.scanPieces(i));
  });
}
function qC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function rf(e) {
  const t = Ne(e);
  return Ot(t, me, "attribute"), t;
}
function IC(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Ih(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function LC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    v(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(rf(n.valueText));
    return;
  }
  const l = IC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = xt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : v(u) ? du(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = rf(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(xt(a === "selfClosing" ? "" : o(t), a));
}
function Ns(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (ka(e, i, n) && !NC(t)) {
    if ($C(e, t, n, i)) {
      wC(t);
      return;
    }
    if (!Qs(e, t)) {
      if (!n.wantsRun) {
        qC(i);
        return;
      }
      LC(e, t, i, n);
    }
  }
}
function DC(e, t, r) {
  Ns(e, t), t.isAttached() && Qs(e, t) && r.add(t.getKey());
}
function Zs(e) {
  if (!v(e))
    return !1;
  if (O(e) || Be(e) || an(e))
    return !0;
  const t = ue(e, me);
  return t === "attribute" || t === zr;
}
function fu(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && nn(e) && F(e.getParent())) : !1;
}
function UC() {
  const e = N();
  return A(e) ? fu(e.focus.getNode(), e.focus.offset) : !1;
}
function Dg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && Zs(t) ? t : void 0;
}
function FC(e) {
  const t = Dg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function zC(e) {
  const t = Dg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function nf(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function sf(e, t) {
  e.set(t.key, t.offset, t.type);
}
function KC(e, t) {
  let r = zC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!v(n))
      return;
    if (!Zs(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function of(e, t) {
  const r = KC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function pu(e) {
  if (e.isCollapsed()) {
    const a = FC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [nf(r), nf(n)], s = of(r, "next"), o = of(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (sf(r, i[0]), sf(n, i[1]), !1) : !0;
}
const qo = "verse-block", Ug = 1, BC = "verse-block";
class Qi extends Tr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return qo;
  }
  static clone(t) {
    return new Qi(t.__number, t.__key);
  }
  static importJSON(t) {
    return jC().updateFromJSON(t);
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
    return ag(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(BC), af(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && af(r, this.__number), !1;
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
      version: Ug
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function af(e, t) {
  const { start: r, end: n } = ag(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), cf(e, "data-verse-start", i ? r : NaN), cf(e, "data-verse-end", i ? n : NaN);
}
function cf(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function jC(e) {
  return nt(new Qi(e));
}
function ws(e) {
  return e instanceof Qi;
}
function VC(e) {
  return e?.type === qo;
}
const WC = [
  jt,
  Kr,
  Gt,
  _t,
  Me,
  Le,
  kr,
  jr,
  li,
  tn,
  on,
  pt,
  xn,
  ui,
  Yi,
  Xi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  rn,
  {
    replace: Rl,
    with: () => gr(),
    withKlass: xn
  }
], Io = {
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
}, HC = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function GC(e) {
  if (!e)
    return $r;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: $r(r)?.category ?? C.Uncategorized,
      type: HC[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: $r(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function lf(e, t, r) {
  const n = {
    type: br,
    version: yr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return fa(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Fg = "v", zg = 1, JC = "verse-selected";
class Dt extends Bs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Fg, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => QC(t) ? {
        conversion: XC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return hu().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Oc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && si(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Oc, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? sr(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Eo + this.getNumber() + Eo
    );
    return M(YC, { nodeKey: this.getKey(), text: t });
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
      version: zg
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (sg(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function YC({ nodeKey: e, text: t }) {
  const [r] = Rk(e);
  return M("span", { className: r ? JC : void 0, children: t });
}
function XC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: hu(t) };
}
function hu(e, t, r, n, i, s) {
  return nt(new Dt(e, t, r, n, i, s));
}
function QC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Fg;
}
function di(e) {
  return e instanceof Dt;
}
function ZC(e) {
  return e?.type === Dt.getType();
}
function Ce(e) {
  return Be(e) || di(e);
}
function Kg(e) {
  return Xh(e) || ZC(e);
}
function eS(e) {
  return tS(e).find((t) => ge(t));
}
function tS(e) {
  return e.some(ws) ? e.flatMap((t) => ws(t) ? t.getChildren() : t) : e;
}
function xa(e) {
  return L(e) ? ws(e) ? e.getChildren().flatMap(xa) : e.getChildren() : [];
}
function rS(e, t) {
  return xa(e).find((i) => Ce(i) && ru(t, i.getNumber()));
}
function nS(e, t) {
  return t === 0 ? eS(e) : e.map((r) => rS(r, t)).filter((r) => r)[0];
}
function Lo(e) {
  return xa(e).find((r) => Ce(r));
}
function Bg(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (Ce(i))
      return i;
  }
}
function iS(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (Ce(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !rt(r); ) {
    const n = Lo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Do(e) {
  return xa(e).findLast((t) => Ce(t));
}
function sS(e) {
  if (!Be(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function oS(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function aS(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return oS(t, e, r);
  if (v(e)) {
    const n = sS(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function ic(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function cS(e) {
  const t = zc(e);
  if (!(!t || rt(t)))
    return Ce(t) ? t : Do(t) ?? yu(t);
}
function lS(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!A(t))
    return ic(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (aS(e, t)) {
    const i = cS(e);
    return i ? ic(i) : { verseNum: n };
  }
  return ic(e);
}
function uS(e) {
  return gT(e) || di(e);
}
function gu(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(D) && e.setTextContent(`${t} `);
  }
}
function jg(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Hc(e, t) {
  return e.getEditorState().read(() => !ae(t));
}
function dS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = mu(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && L(i) && L(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && L(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (Ce(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = uf(i);
      for (; s && !rt(s); ) {
        const o = Lo(s);
        if (o) {
          n = o;
          break;
        }
        s = uf(s);
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
      if (s = s.getNextSibling(), s && rt(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function fS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = mu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = Bg(i, r.getIndexWithinParent())), !n && i) {
      let o = df(i);
      for (; o && !rt(o); ) {
        const a = Do(o);
        if (a) {
          n = a;
          break;
        }
        o = df(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !rt(s); ) {
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
function uf(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function df(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function mu(e, t) {
  if (L(e) && A(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && Ce(n))
      return n;
    const i = Bg(e, t.anchor.offset);
    if (i)
      return i;
    const s = Lo(e);
    if (s)
      return s;
  }
  return yu(e);
}
function yu(e) {
  if (!e || rt(e))
    return;
  if (Ce(e))
    return e;
  let t = zc(e);
  for (; t; ) {
    if (rt(t))
      return;
    if (Ce(t))
      return t;
    const r = Do(t);
    if (r)
      return r;
    t = zc(t);
  }
}
const pS = ["style"], hS = ["style", "code"], Uo = ["style", "cid"], gS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], mS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], yS = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], bS = ["style", "caller", "category", "contents"], kS = ["tag", "marker", "contents"], xS = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Os = `
`;
function TS(e, t) {
  const r = ae(e);
  if (!Ht(r))
    return;
  const n = bu(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function bu(e, t = "delta-doc") {
  if (!e)
    return;
  const r = la();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Fi(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Fi(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (en(l) || Ht(l))
        return n;
      we(l) && (a = l);
    }
    if (we(l) && (i.includes(l) || i.push(l)), Vg(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += ku(l, t);
  }
  if (a)
    return n;
}
function ff(e, t, r = "delta-doc") {
  if (e.length < 2 || !_S(e[0]) || !SS(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => CS(n, r)?.getKey());
}
function CS(e, t = "delta-doc") {
  const r = la();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Fi(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Fi(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (we(a) && (i.includes(a) || i.push(a)), Vg(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = ku(a, t);
    if (en(a) && l > 0 && e >= n && e < n + l || Ht(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Fi(e, t) {
  return e ? t ? !Ro(t.node, e.getKey()) : !0 : !1;
}
function en(e) {
  return v(e) && !Ht(e);
}
function Ht(e) {
  return rt(e) || Ce(e) || st(e) || j(e) || ve(e) || an(e);
}
function gn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function SS(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && xS.includes(t);
}
function _S(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Vg(e, t) {
  return j(e) || ve(e) ? !0 : t === "apply" && L(e) && Ht(e);
}
function Wg(e) {
  const t = e.getParent();
  return Lt(e) && ge(t) && t.getFirstChild() === e;
}
function Gc(e) {
  const t = e.getParent();
  return t !== null && qe(t, je) !== null;
}
function vS(e) {
  const t = e.getParent();
  return F(t) && e.getTextContent() === ar && t.getChildrenSize() === 1;
}
function MS(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === Wt(t.getCaller());
}
function ES(e) {
  return !Mg(e) && ku(e, "delta-doc") === e.getTextContentSize();
}
function ku(e, t) {
  if (Ht(e))
    return 1;
  if (v(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (Hs(e) || Wg(e) || ue(e, me) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ue(e, me) === "attribute" || Gc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Kl) || vS(e) || MS(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Jc(e, t) {
  const r = { insert: e.__text }, n = ue(e, kn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Hg(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function pf(e) {
  const t = new fs();
  return e.isEmpty() || e.read(() => {
    const r = Ye();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Ir(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = AS();
    for (const s of i)
      t.push(s);
  }), t;
}
function Ta(e, t) {
  const r = [], n = ci(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...hf(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...hf(c, n.length, n, i, s, o, a));
  return r;
}
function AS() {
  return Ta();
}
function hf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return PS(e, a, n), NS(e, a, i, s, o), wS(e, t, r, i, o, s, a), rt(e) && a.push(qS(e)), Ce(e) && a.push(LS(e)), st(e) && a.push(DS(e)), an(e) && a.push(US(e)), RS(e, a, s), OS(e, a, s), BS(c, s), a;
}
function PS(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Ee(n) ? t.push($S(n)) : ge(n) ? t.push(IS(n)) : Ir(n) && t.push({ insert: Os });
  }
  we(e) && (r.includes(e) || r.push(e));
}
function NS(e, t, r, n, i) {
  if (!v(e) || Be(e) || an(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Vt(e) !== void 0;
  if (O(e) && (o || Wg(e) || Gc(e) || Mg(e)) || ue(e, me) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Ws(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && O(c) && c === s.getFirstChild() && a === Wt(s.getCaller()))
    return;
  const l = F(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(ma(e)));
  const d = a.startsWith(Kl) || ue(e, me) === "attribute" || Gc(e), u = !!l && a === ar && l.getChildrenSize() === 1, f = Ca(e, n), p = f ? r.filter((y) => f.children.includes(y)) : r, h = Jc(e, p);
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
function wS(e, t, r, n, i, s, o) {
  F(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Fi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = zS(c), d = Ca(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function OS(e, t, r) {
  if (!j(e))
    return;
  const n = FS(e), i = Ca(e, r), s = {
    node: e,
    children: ci(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function RS(e, t, r) {
  if (!ve(e))
    return;
  const n = KS(e), i = Ca(e, r), s = {
    node: e,
    children: ci(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function An(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function $S(e) {
  const t = { style: Ms, code: e.__code };
  return An(t, e), { insert: Os, attributes: { book: t } };
}
function qS(e) {
  const t = { style: wo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), An(t, e), { insert: { chapter: t } };
}
function IS(e) {
  const t = { style: e.__marker };
  return An(t, e), { insert: Os, attributes: { para: t } };
}
function LS(e) {
  const t = { style: Oo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), An(t, e), { insert: { verse: t } };
}
function DS(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), An(t, e), { insert: { milestone: t } };
}
function US(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function FS(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), An(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ue(e, kn);
  return n && (r.attributes = { segment: n }), r;
}
function zS(e) {
  const t = { insert: "" }, r = Hg([e]);
  return r && (t.attributes = { char: r }), t;
}
function KS(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), An(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Ca(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function BS(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Fi(t[r].node, e) && t.splice(r, 1);
}
function Hg(e) {
  if (e.length === 0)
    return;
  const t = e.map(jS);
  return t.length === 1 ? t[0] : t;
}
function jS(e) {
  const t = { style: e.__marker }, r = ue(e, Yn);
  return r && (t.cid = r), An(t, e), t;
}
function xu(e) {
  let t = 0;
  for (const { node: r } of la())
    if (j(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function VS(e) {
  let t = 0;
  for (const { node: r } of la())
    if (j(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const Gg = 1;
class mr extends Bs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Cs, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new mr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => HS(t) ? {
        conversion: WS,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Tu().updateFromJSON(t);
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
    return r && si(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => GS(t, n), (l) => JS(t, n, s, l), () => YS(t, n), () => XS(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return M("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Cs && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === bh && i ? (
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
      version: Gg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function WS(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Tu(t, r) };
}
function Tu(e, t, r) {
  return nt(new mr(e, t, r));
}
function HS(e) {
  return e ? e.classList.contains(mr.getType()) : !1;
}
function Tt(e) {
  return e instanceof mr;
}
function GS(e, t) {
  return e.getEditorState().read(() => {
    const r = ae(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function JS(e, t, r, n) {
  e.update(() => {
    const i = ae(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ae(r);
    if (!Tt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function YS(e, t) {
  return e.getEditorState().read(() => {
    const r = ae(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return Ta(r);
  });
}
function XS(e, t) {
  return e.getEditorState().read(() => xu(t));
}
const QS = [
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
], ZS = ["†"];
function Sa(e) {
  if (Jg())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = gf(t), [s, o] = gf(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = mf(n, i), [s, o] = mf(s, o);
  const a = Yr();
  return a.anchor = hr(n.getKey(), i, yf(n)), a.focus = hr(s.getKey(), o, yf(s)), a;
}
function Cu() {
  if (Jg())
    return;
  const e = N();
  if (!e || !A(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Fo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Fo(i, s);
  return { start: n, end: o };
}
function gf(e) {
  if (uk(e)) {
    const t = Yp(e.jsonPath);
    let r = Ye();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = Gi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : PT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, NT(r, e.offset)] : [void 0, void 0];
  }
  if (dk(e) || fk(e)) {
    const t = ss(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (pk(e)) {
    const t = ss(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (hk(e)) {
    const t = ss(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = sc(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && v(n) ? [n, 0] : [void 0, void 0];
  }
  if (gk(e)) {
    const t = ss(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = sc(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && v(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (mk(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = ss(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = sc(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && v(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${yk(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function mf(e, t) {
  if (!Sr(e))
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
function yf(e) {
  return L(e) ? "element" : "text";
}
function sc(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Sr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function ss(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Yp(r);
  let i = Ye();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = Gi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Fo(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = e_(e), i = n ? On(In(n)) : On(In(e));
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
  if (Pe(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (v(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Fo(n, s);
    }
    const i = pa(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Fo(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (Sr(r)) {
      const i = r.getTextContent().endsWith("*"), s = On(In(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = lg(e, t);
    return n.type === "text" ? {
      jsonPath: On([...In(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: On(In(e)),
      offset: n.index
    };
  }
  if (v(e)) {
    const r = AT(e, t);
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
function e_(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = t_(e);
  return r && !we(r) && !v(r) && !Pe(r) ? r : t;
}
function t_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Gs(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function In(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = pa(r);
    if (!n)
      break;
    const i = ET(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Jg() {
  for (let e = Ye().getFirstChild(); e; e = e.getNextSibling())
    if (ws(e))
      return !0;
  return !1;
}
function r_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Yg(e, t, r, n, i, s, o) {
  if (!Le.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Sa(r) : N();
  if (!A(a))
    return;
  const c = s_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? r_(e, s), d = Xg(e, l, c, i, s, void 0, void 0);
  return i_(d, a, i), d;
}
function Su(e) {
  return e !== "expanded";
}
function n_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!v(r) || !F(r.getParent()))
    return;
  if (O(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return O(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function i_(e, t, r) {
  const n = Su(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || bT(t), pu(t);
  const i = n_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(F)?.selectEnd();
}
function _i(e, t, r) {
  const n = Qr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(xt(e)) : r?.markerMode === "visible" && n.append(Xr("marker", Ve(e)));
  const s = t === "" ? ar : i ? D + t : t;
  return n.append(Ne(s)), n;
}
function s_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(_i("fr", f, n)), !e.isCollapsed()) {
        const p = kf(e);
        p.length > 0 && o.push(_i("fq", p, n));
      }
      o.push(_i("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(_i("xo", f, n)), !e.isCollapsed()) {
        const p = kf(e);
        p.length > 0 && o.push(_i("xq", p, n));
      }
      o.push(_i("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Xg(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Su(n?.noteMode), l = Wl(e, t, c);
  s && Ot(l, kn, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = xt(e), d && u.setMode("token"), a || (f = xt(e, "closing"))) : n?.markerMode === "visible" && (u = Xr("marker", Ve(e) + " "), a || (f = Xr("marker", ct(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    p = Ne(Wt(l.__caller)), d && p.setMode("token"), l.append(p, ...r);
  else {
    const h = () => Js(), g = r.flatMap(p_(h));
    if (t === "")
      l.append(...g);
    else {
      const y = eu(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = Tu(l.__caller, y, k), l.append(p, h(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Pr(e) {
  if (typeof e == "string") {
    const t = ae(e);
    return j(t) ? t : void 0;
  }
  return VS(e);
}
function Yc(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (di(n) || !n) {
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
      o_(i);
    else {
      const s = _u(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function _u(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return O(r) && r.getMarkerSyntax() === "closing" || Sr(r) && r.getTextContent() === ct(e.getMarker()) ? t : -1;
}
function o_(e) {
  const t = _u(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  v(r) && !Gs(r) ? r.selectEnd() : e.select(t, t);
}
function Qg(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (v(r) && !Zs(r)) {
    r.select(0, 0);
    return;
  }
  const n = e.getParent();
  if (!n)
    return;
  const i = e.getIndexWithinParent() + 1;
  n.canBeEmpty() ? n.select(i, i) : vu(n, i, { announce: !t });
}
function vu(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!j(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Yr();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), nr(i), r && bn().dispatchCommand(Kt, void 0);
}
function bf(e, t, r) {
  const n = Zr(e), i = a_(e, n);
  if (r && em(i, t, r, Zg(e, n)))
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
function a_(e, t) {
  const r = [];
  for (const { node: n } of ci(e))
    !v(n) || qe(n, je) || (Mu(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: ma(n) }) : c_(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function c_(e, t) {
  return an(e) ? !0 : O(e) && !t.is(e.getParent());
}
function Zg(e, t) {
  return (r) => {
    let n = r;
    for (; !n.getPreviousSibling(); ) {
      const o = n.getParent();
      if (!o || o.is(e))
        return;
      n = o;
    }
    const i = n.getPreviousSibling(), s = L(i) ? i.getLastDescendant() : i;
    if (v(s) && (t?.is(s) || Mu(s, t)))
      return s;
  };
}
function em(e, t, r, n) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === r.index)
      return l_(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function l_(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function u_(e, t, r) {
  const { opener: n, value: i, closer: s } = su(e);
  if (!i)
    return !1;
  const o = d_(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = Zr(e);
    if (em(c, t, r, Zg(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function d_(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function Mu(e, t) {
  return !v(e) || Gs(e) || Zs(e) ? !1 : !t || !e.is(t);
}
function f_(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(F))
    return;
  const t = Zr(e);
  for (const { node: n } of ci(e))
    if (Mu(n, t))
      return;
  const r = _u(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function p_(e) {
  return (t) => Bt(t) ? [t] : [t, e()];
}
function h_(e) {
  const t = e.getParent();
  return t !== null && qe(t, j) !== null;
}
function kf(e) {
  if (!A(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = $l(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || Tt(c) || h_(c)) && !O(c) && !an(c) && ue(c, me) !== "attribute") {
      if (Ce(c)) {
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
const Eu = [
  mr,
  Dt,
  ...WC
], g_ = [
  Qi,
  ...Eu
], m_ = En((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return M("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function y_() {
  const [e, t] = ke(void 0), [r, n] = ke(), i = Q(null), s = Se((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Bk(l, c, () => {
      jk(l, c, {
        placement: "bottom-start",
        middleware: [Vk(), Wk()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = Se(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return V(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function b_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = y_();
  return V(() => {
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
const k_ = ik(m_);
function tm({ isOpen: e = !1, children: t }) {
  const r = Q(null), { coords: n, placement: i } = b_({ isOpen: e, floatingBoxRef: r }), s = et(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return zn(
    M(k_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const rm = Gp(void 0);
function Au() {
  const e = Jp(rm);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function x_(e, t) {
  const [r, n] = ke(0), [i, s] = ke(-1), o = et(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = Se(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = Se(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = Se(() => {
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
function T_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = x_(t, r);
  return M(rm.Provider, { value: i, children: M("div", { ...n, children: e }) });
}
const nm = En(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Au(), d = Se((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = Se((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return M("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function C_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Q(null), { state: { activeIndex: i, menuItems: s } } = Au(), o = et(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = et(() => {
    const c = o(s);
    return t ? sk.map(c, (l, d) => ok(l) && l.type === nm && l.props.index === void 0 ? ak(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return V(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), M("div", { ref: n, role: "menu", ...r, children: a });
}
const S_ = (e, t, r) => Co(e, r).toLowerCase().includes(t.toLowerCase()), xf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Co = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function __(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? xf(r[0]) : "") : (d = n || (r.length > 0 ? xf(r[0]) : ""), u = (h, g) => S_(h, g, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return u(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const y = (T) => (p.has(T) || p.set(T, Co(T, f).toLowerCase()), p.get(T) ?? ""), k = a ? Co(h, f) : y(h), b = a ? Co(g, f) : y(g);
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
const oc = {
  Root: T_,
  Options: C_,
  Option: nm
};
function v_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return et(() => __({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function M_() {
  const { moveUp: e, moveDown: t, select: r } = Au();
  return et(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const E_ = () => {
  const e = M_(), [t] = fe();
  V(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(Cr, r, Re);
  }, [t, e]);
};
function A_() {
  return E_(), null;
}
const P_ = ["Shift", "Control", "Alt", "Meta"];
function im(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = fe(), d = s !== void 0, [u, f] = ke(""), p = d ? s ?? "" : u, h = v_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return V(() => {
    a?.(p, h);
  }, [a, p, h]), V(() => l.registerCommand(Cr, (y) => {
    if (d || c?.includes(y.key) || P_.includes(y.key))
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
  }, Re), [l, d, p, o, n, c]), $e(oc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => g(y), children: [!d && M("input", { value: p, type: "text", disabled: !0 }), M(A_, {}), M(oc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((b, T) => $e(oc.Option, { index: T, children: [M("span", { className: "label", children: b.label ?? b.name }), M("span", { className: "description", children: b.description })] }, b.name)) })] });
}
function N_({ trigger: e, items: t }) {
  const [r] = fe(), [n, i] = ke(!1), s = Se((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return V(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), V(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = N();
      if (A(l))
        return l;
    });
    a.read(() => {
      const l = N();
      !A(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && M(tm, { isOpen: n, children: ({ placement: o }) => M(im, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function w_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: et(() => {
    if (!t || !e)
      return;
    const i = $r(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = $r(o), { action: c } = r(o, a);
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
function bs(e, t) {
  return `${e}:${t}`;
}
function O_(e, t) {
  V(() => {
    if (!e.hasNodes([dt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ie(uh(e, dt, (n) => vs(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
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
          const o = ae(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Pe(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!dt.isReservedType(c))
              for (const d of l) {
                let u = t.get(bs(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(bs(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(bs(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const R_ = En(function({ logger: t }, r) {
  const [n] = fe(), i = et(() => /* @__PURE__ */ new Map(), []);
  O_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(bs(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = ae(d);
        Pe(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && No(u));
      }
  };
  return sa(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (dt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Sa(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Rh(p, a, c, l, d, u, f);
      }, { tag: Rc });
    },
    removeAnnotation(o, a) {
      if (dt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(bs(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Rc });
    }
  })), null;
}), $_ = [];
function q_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = $_, onChange: n }) {
  const [i] = fe();
  return Ks(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(ql) && !d.has(xh) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = I_(i, s);
        u.length !== 0 && n(o, i, d, u, l);
      });
  }, [i, e, t, r, n]), null;
}
function I_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new fs();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ae(i), o = s !== null && Vt(s) !== void 0;
    if (t.size === 1 && v(s) && !o && ES(s)) {
      const a = bu(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = ae(i);
          return new fs([v(u) ? Jc(u) : { insert: "" }]);
        }), l = new fs([Jc(s)]), d = new fs(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = pf(r), c = pf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const Pu = "formatted", sm = "unformatted", om = "paragraph-structure", Nu = "standard", am = "block-verse", L_ = {
  [Pu]: "Formatted",
  [sm]: "Unformatted",
  [om]: "Paragraph Structure",
  [Nu]: "Standard",
  [am]: "Block Verse"
};
function fi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let wu, Ou;
function D_(e) {
  const t = Ru(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  wu = e, Ou = t;
}
D_(Pu);
const Fw = () => wu, _a = () => Ou;
function Ru(e) {
  let t;
  switch (e ?? wu) {
    case Pu:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case sm:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case om:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Nu:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case am:
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
function zw(e) {
  if (!e)
    return;
  const t = Tf(e);
  return Object.keys(L_).find((r) => Qt(Tf(Ru(r)), t));
}
const U_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Tf(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...U_, ...t };
}
function eo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function F_(e) {
  if (e)
    return Rs(e) ? Dt : e.markerMode === "editable" ? _t : Dt;
}
function Rs(e) {
  return e?.verseLayout === "block";
}
function z_(e) {
  const t = [], r = e ?? Ou;
  return r && (t.push(`${ox}${r.markerMode}`), r.hasSpacing && t.push(ix), r.isFormattedFont && t.push(sx)), t;
}
function K_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += B_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), V_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += W_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), G_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function B_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), j_(t, e.retain, e.attributes, r, n)), e.retain);
}
function j_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ye();
  function l(d) {
    if (s <= 0)
      return !0;
    if (en(d)) {
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
          if (Tn(r)) {
            const b = g.getParent();
            if (F(b)) {
              const T = r.char;
              let E;
              Array.isArray(T) ? a >= 0 && a <= T.length - 1 && (E = T[a]) : a === 0 && (E = T);
              const S = E ? Xn(E, b) : !1;
              if (S && Array.isArray(T) && T.length > 1) {
                const w = Ne("");
                g.replace(w);
                const $ = typeof r.segment == "string" ? r.segment : void 0, z = Zi(T.slice(1), n, g, $);
                let B = w;
                for (const ce of z)
                  B.insertAfter(ce), B = ce;
                w.remove(), Zt(r, g);
              } else if (S)
                Zt(r, g);
              else {
                g.remove();
                const w = Cf(g, r, n, i);
                if (w && w.length > 0) {
                  let $ = b;
                  for (const z of w)
                    $.insertAfter(z), $ = z;
                }
              }
            } else {
              const T = Ne("");
              g.replace(T);
              const E = Cf(g, r, n, i);
              if (E && E.length > 0) {
                let S = T;
                for (const w of E)
                  S.insertAfter(w), S = w;
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
      e <= o && o < e + t && s > 0 && (Sf(d, r), s -= 1), o += 1;
    else if (F(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (Tn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Xc(d, p.style), typeof p.cid == "string" && Ot(d, Yn, () => p.cid);
            const h = Je(p, Uo);
            h && Object.keys(h).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...h
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || nv(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && wc(d), !0;
        }
      }
      u && wc(d), a -= 1;
    } else if (we(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Ir(d))
          Sf(d, r);
        else if ($u(r)) {
          const p = um(r.para, n);
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
function Cf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Zi(t.char, r, e, i), o = s.find(F);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Zt(t, e);
    return;
  }
  const a = {};
  hm.forEach((d) => {
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
function cm(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(Ve(t))) : Bt(r) && r.getTextType() === "marker" && r.setTextContent(Ve(t) + D);
}
function Xc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = F(e.getParent()), i = e.getFirstChild();
  Bt(i) && i.getTextType() === "marker" && i.getTextContent() === Ve(r, n) && i.setTextContent(Ve(t, n));
  const s = e.getLastChild();
  Bt(s) && s.getTextType() === "marker" && s.getTextContent() === ct(r, n) && s.setTextContent(ct(t, n));
}
function Sf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && F(e) && Tn(t)) {
      const i = Qc(n);
      if (Xc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Ot(e, Yn, () => o);
      }
      const s = Je(i, Uo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (rt(e) || Ce(e) || st(e) || j(e) || ve(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Ee(e) || ge(e) || F(e)) && (r === "style" && ge(e) ? cm(e, n) : r === "style" && F(e) ? Xc(e, n) : r === "code" && Ee(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Ot(e, kn, () => n));
  }
}
function V_(e, t, r) {
  if (t <= 0)
    return;
  const n = Ye();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (en(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Ht(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (we(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && we(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(gr(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
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
              en(k) ? h += k.getTextContentSize() : Ht(k) && (h += 1), i = b;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(gr(), !0);
        } else ge(a) ? a.replace(gr(), !0) : a.remove();
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
function W_(e, t, r, n, i) {
  if (t === Os)
    return _f(e, r, n, i);
  if (t.endsWith(Os) && !$u(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Tn(r))
        throw new Error("Text + LF should not have char attributes");
      o += zo(e, s, r, i);
    }
    return o += _f(e + o, r, n, i), o;
  } else return Tn(r) ? H_(e, t, r, n, i) : zo(e, t, r, i);
}
function H_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Ne(t === "" ? ar : t);
  Zt(r, s);
  let o;
  {
    let y = function(k) {
      if (en(k)) {
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
        we(k) && (g += 1);
      }
      return !1;
    };
    const h = Ye();
    let g = 0;
    y(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Xn(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Xn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Zi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(F);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), zo(e, t, void 0, i);
  const f = {};
  for (const [h, g] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof g == "string" && (f[h] = g);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const h of d)
    if (!lm(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), zo(e, t, void 0, i));
}
function zo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ye();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (en(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = Ne(t);
        if (Zt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          F(f) && !Tn(r) ? f.insertAfter(u) : c.insertAfter(u);
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
        const u = Ne(t);
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
        const u = Ne(t);
        return Zt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (we(c)) {
      if (!o && e === s) {
        const u = Ne(t);
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
        const u = Ne(t);
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
    const c = Ne(t);
    Zt(r, c);
    const l = gr().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function lm(e, t, r) {
  const n = Ye();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(gr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
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
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(gr().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (en(l)) {
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
      } else if (we(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (Ir(d) && we(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(gr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      ft(a) ? Ir(a) && ge(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ft(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (F(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ft(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function G_(e, t, r, n, i) {
  let s;
  return gn("chapter", t) ? s = Y_(t.insert.chapter, r) : gn("verse", t) ? s = X_(t.insert.verse, r) : gn("ms", t) ? s = Q_(t.insert.ms) : gn("note", t) ? s = dm(t, r, n) : gn("unknown", t) ? s = fm(t, r, n, i) : gn("unmatched", t) && (s = ev(t.insert.unmatched, r)), s ? lm(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function _f(e, t, r, n) {
  let i;
  $u(t) ? i = um(t.para, r) : rv(t) && (i = J_(t.book)), i ??= gr();
  const s = i, o = ge(s), a = Ir(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (en(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (ge(p) && (o || a)) {
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
    else if (we(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Ir(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (ge(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ge(u) && s)
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
  return d(Ye()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function J_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Ms || !r || !jt.isValidBookCode(r))
    return;
  const n = Je(e, hS);
  return Dh(r, n);
}
function um(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Je(e, pS), i = Ii(r, n);
  if (!fi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(xt(r), Js());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ve(r) + D;
    i.append(t.hasGutterParaMarkers ? Rx(s) : Xr("marker", s));
  }
  return i;
}
function Y_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Je(e, gS);
  let a;
  if (t.markerMode === "editable")
    a = Fh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Xl(r, c, n, i, s, o);
  }
  return a;
}
function X_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Je(e, mS);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = sr(r, n);
    c = Yh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = hu(n, l, i, s, o, a);
  }
  return c;
}
function Q_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Je(e, yS);
  return Sh(t, r, n, s, i);
}
function dm(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = Je(n.note, bS), l = typeof c?.closed == "string" ? c.closed : void 0, d = e.attributes?.segment;
  let u;
  d && typeof d == "string" && (u = d);
  const f = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (Tn(h.attributes)) {
        const g = Zi(h.attributes.char, t, Ne(h.insert), void 0, pm(h.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...g);
      } else
        f.push(Ne(h.insert));
  return Xg(i, s, f, t, r, u, l).setCategory(o).setUnknownAttributes(c);
}
function fm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Je(i, kS), l = Jl(s, o, c), d = a?.ops ?? [];
  d.length > 0 && Z_(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && Ot(l, kn, () => u), l;
}
function Z_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Tn(s.attributes)) {
        const o = Ne(s.insert), a = Zi(s.attributes.char, t, o, void 0, pm(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Ne(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (gn("unknown", s)) {
        const o = fm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (gn("note", s)) {
        const o = dm(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function ev(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = uu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function pm(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Qc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Zi(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(ar);
  const a = () => {
    o && v(r) && r.getTextContent() !== ar && r.setTextContent(D + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Qc), l = c[0], d = i?.[i.length - 1];
    if (F(d) && Xn(l, d)) {
      if (c.length > 1) {
        const f = Zi(c.slice(1), t, r, void 0, void 0, !0, o);
        ac(d, f);
      } else
        r && ac(d, [r]);
      return [];
    }
    a();
    const u = c.reduceRight((f, p, h) => {
      const g = Qr(p.style, Je(p, Uo));
      return typeof p.cid == "string" && Ot(g, Yn, () => p.cid), n && h === c.length - 1 && Ot(g, kn, () => n), f && (F(f) && (lc(f.getMarker(), f, t, !0), cc(f, f, t, !0)), g.append(f)), g;
    }, r);
    return lc(l.style, u, t, s), cc(u, u, t, s), [u];
  } else {
    const c = Qc(e), l = i?.[i.length - 1];
    if (F(l) && Xn(c, l))
      return r && ac(l, [r]), [];
    a();
    const d = Qr(c.style, Je(c, Uo));
    return typeof c.cid == "string" && Ot(d, Yn, () => c.cid), n && Ot(d, kn, () => n), r && d.append(r), lc(c.style, d, t, s), cc(d, d, t, s), [d];
  }
}
function ac(e, t) {
  const r = e.getLastChild();
  O(r) && r.getMarkerSyntax() === "closing" || Bt(r) && r.getTextType() === "marker" && r.getTextContent() === ct(e.getMarker(), F(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function cc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && tv(e.getMarker(), t, r, !1, n);
}
function lc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = xt(e, "opening", n) : r?.markerMode === "visible" && (i = Xr("marker", Ve(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function tv(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = xt("", "selfClosing") : s = xt(e, "closing", i) : r?.markerMode === "visible" && (s = Xr("marker", n ? ct("") : ct(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function rv(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function $u(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Tn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function nv(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Zt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Ot(t, kn, () => n);
        continue;
      }
      if (iv(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const hm = [
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
function iv(e) {
  return hm.includes(e);
}
function zi(e) {
  return Bt(e) && Ee(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function gm(e) {
  const t = Xs(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function va(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(Ll(r) && t.offset === 0 || Ee(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(zi);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!Ee(s))
    return !1;
  const o = gm(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function So(e) {
  const t = N();
  if (!A(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : v(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? eg(t) : Zl(t);
    return zi(n);
  }
  return va(t) && t.isCollapsed();
}
function sv(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed())
    return !1;
  const r = qe(t.anchor.getNode(), Ee);
  if (!r || !zi(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return So(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(zi)) {
    const n = gm(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function go() {
  const e = N();
  return A(e) && va(e), !1;
}
function ov() {
  const e = N();
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !Ee(r) || !zi(r.getFirstChild()) ? !1 : (cr(r, 1), !0);
}
function av(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => Sr(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function cv() {
  const [e] = fe();
  return V(() => e.registerCommand(ca, (t) => (lv(t), !1), Vn), [e]), V(() => Ie(
    e.registerCommand(Jr, So, Re),
    e.registerCommand(Ts, So, Re),
    e.registerCommand(qi, So, Re),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(qi, sv, Rr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(Wn, go, ye),
    e.registerCommand(zt, go, ye),
    e.registerCommand(or, go, ye),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(Il, go, ye)
  ), [e]), V(() => Ie(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(Kt, () => (ov(), !1), Re),
    e.registerNodeTransform(jt, av)
  ), [e]), null;
}
function lv(e) {
  if (uv(e.target))
    return;
  const t = N();
  A(t) && dv(t);
}
function pi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Lt(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === D && (r++, t = t.getNextSibling());
    else if (Ce(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (cr(e, r), !0);
}
function uv(e) {
  if (!Qp(e))
    return !1;
  const t = Hi(e);
  if (!$x(t))
    return !1;
  const r = t.getParent();
  return r ? ft(r) ? pi(r) : (cr(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function dv(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ae(t.key);
  if (!we(r))
    return !1;
  const n = r.getFirstChild();
  return !Sr(n) && !di(n) ? !1 : pi(r);
}
function fv() {
  const [e] = fe();
  return V(() => {
    const t = (r) => r instanceof KeyboardEvent && !mm(r) || !to() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ie(
      e.registerCommand(Cr, t, Re),
      e.registerCommand(Wn, t, Re),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(zt, t, ye),
      e.registerCommand(or, t, ye),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Dl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Hi(r.target);
        return !n || !Cn(n) ? !1 : (r.preventDefault(), !0);
      }, Re),
      e.registerCommand(Jr, t, Re),
      e.registerCommand(Ts, t, Re),
      e.registerCommand(qi, t, Re)
    );
  }, [e]), null;
}
function mm(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Cn(e) {
  return qe(e, qu) ?? void 0;
}
function qu(e) {
  return ve(e) || wg(e);
}
function to() {
  const e = N();
  return A(e) ? Cn(e.anchor.getNode()) !== void 0 || Cn(e.focus.getNode()) !== void 0 : !1;
}
function pv(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function hv(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), pv(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function gv(e, t, r, n) {
  if (!Pv(t) || hv(e, r))
    return !1;
  const i = r === "up" ? fS(t) : dS(t);
  return i && n.preventDefault(), i;
}
function mv({ viewOptions: e }) {
  const [t] = fe();
  return yv(t, e), null;
}
function yv(e, t) {
  V(() => {
    if (!e.hasNodes([Kr, Dt, Le]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!A(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = vf(o), u = _v(i, Mf(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return gv(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = vf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Mf(a, n.key) ? l = !c && Pf(i, "next") || !c && kv(i) || Ev(i) || !c && s && Af(i, "next") : bv(a, n.key) && (l = !c && Pf(i, "previous") || !c && xv(i) || Av(i, t) || !c && s && Af(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Cr, r, Re);
  }, [e, t]);
}
function vf(e) {
  return e.dir || "ltr";
}
function Mf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function bv(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Zc(e) {
  if (!F(e) || e.getMarker() !== "fp")
    return;
  const t = Vt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function kv(e) {
  const t = Zc(Zl(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (cr(t, 0), !0);
}
function xv(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Zc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Ef(n);
  }
  if (t.offset === 0) {
    const n = Zc(r);
    return n ? Ef(n) : !1;
  }
  return !1;
}
function Ef(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (v(t))
    return t.select(), !0;
  if (L(t)) {
    const i = t.getLastDescendant();
    return v(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const Ko = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function Tv(e) {
  if (Ko)
    for (const { segment: r } of Ko.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function Cv(e) {
  if (Ko) {
    let n = 0;
    for (const { index: i } of Ko.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function ym(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function bm(e) {
  return !!e && O(e) && Cn(e) !== void 0;
}
function Ki(e) {
  return v(e) && !e.isToken() && !bm(e) && e.getTextContentSize() > 0;
}
function km(e) {
  return oi(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || bm(e)) && e.getTextContentSize() > 0 : ai(e) ? !st(e) : !1;
}
function Bi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Ma(e, t, r) {
  for (let n = e; n; ) {
    if (km(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? Bi(n, t, r);
      continue;
    }
    if (Ki(n))
      return n;
    n = Bi(n, t, r);
  }
}
function Iu(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? Bi(e, n, i) : r === "text" && km(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : Bi(e, n, i);
}
function uc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Iu(e.node, e.offset, e.kind, "previous", t), n = Ma(r, "previous", t);
  if (!n)
    return e;
  if (Ki(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function Sv(e, t) {
  const r = e.getNode(), n = ym(r);
  if (!n)
    return;
  if (e.type === "text" && Ki(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return uc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Iu(r, e.offset, e.type, t, n), s = Ma(i, t, n);
  if (!s)
    return;
  if (Ki(s)) {
    const c = s.getTextContent(), l = t === "next" ? Tv(c) : Cv(c);
    return uc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return uc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function xm(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = Sv(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && L(i.node) ? vu(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Af(e, t) {
  return xm(e, t, "collapse");
}
function _v(e, t) {
  return xm(e, t, "extend");
}
function vv(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && Ki(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Iu(n, e.offset, e.type, t, r);
  return Ma(i, t, r) === void 0;
}
function Mv(e, t) {
  const r = Ye();
  for (let n = e; n; ) {
    const i = Bi(n, t, r), s = i && Ma(i, t, r);
    if (!s)
      return;
    if (n = Cn(s), !n)
      return s;
  }
}
function Pf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Cn(n))
    return !1;
  const i = ym(n);
  if (!i || !vv(r, t, i))
    return !1;
  const s = Bi(i, t, Ye()), o = s && Cn(s);
  if (!o)
    return !1;
  const a = Mv(o, t);
  if (!a)
    return !0;
  if (Ki(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Nf(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  vu(t, r);
}
function Ev(e) {
  const t = e.anchor.getNode(), r = Zl(e);
  if (j(r) && !O(r.getFirstChild())) {
    if (we(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(ft(i) && pi(i)) && i.selectStart(), !0;
      }
    } else return Bt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (we(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Nf(r), !0;
  }
  const n = r?.getParent();
  if (Bt(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Nf(n) : n.selectEnd(), !0;
  }
  return !1;
}
function Av(e, t) {
  const r = eg(e);
  if (Vs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && zi(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Ee(o) && !r)
    return !0;
  if (j(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!di(c) && !Ee(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const d = r.getIndexWithinParent();
    return l.select(d, d), !0;
  }
  if (we(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = qe(c, (d) => j(d));
    if (j(l) && l.getIsCollapsed()) {
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
  if (Tt(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function Pv(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Ce(t) && ai(t);
}
function Nv() {
  const [e] = fe();
  return wv(e), null;
}
function wv(e) {
  V(() => {
    if (!e.hasNodes([Me]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ie(
      e.registerNodeTransform(Me, $v),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(Me, LT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(Me, xg),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(Me, (t) => Ns(Qn("char"), t)),
      e.registerNodeTransform(tt, qv)
    );
  }, [e]);
}
function dc(e) {
  return e.getChildren().some(O);
}
function Ov(e, t) {
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
function Rv(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function $v(e) {
  if (!F(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (dc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ue(e, Yn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (F(i) && Xn({ style: t, cid: r }, i) && Qt(n, i.getUnknownAttributes()))
    if (dc(i)) {
      if (Ov(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  F(s) && Xn({ style: t, cid: r }, s) && Qt(n, s.getUnknownAttributes()) && (dc(s) ? Rv(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function qv(e) {
  const t = e.getParent();
  if (!F(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(ar)) {
    const n = N();
    if (A(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function Tm(e) {
  return e.replaceAll("	", " ");
}
function Cm() {
  const e = N();
  return !!e && !e.isCollapsed();
}
function Sm(e) {
  const t = () => !Cm();
  return Ie(e.registerCommand(Hn, t, kt), e.registerCommand(or, t, kt));
}
const Lu = (e) => {
  e.dispatchCommand(Hn, null);
}, Du = (e) => {
  e.dispatchCommand(or, null);
}, Uu = (e) => {
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
      n.setData(o, Tm(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(zt, s);
  });
}, Fu = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Tm(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(zt, i);
  });
};
function Iv() {
  const [e] = fe();
  return V(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Nr ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Lu(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Du(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Fu(e) : Uu(e)));
    };
    return Ie(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Sm(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function el(e) {
  return e.includes("\\") || e.includes("/");
}
function Lv({ logger: e }) {
  const [t] = fe();
  return V(() => Ie(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Cr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Rr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(zt, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !el(n) ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Rr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Dl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !el(n) ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Rr)
  ), [t, e]), null;
}
const Bo = "editor-context-menu";
function tl(e) {
  return `${Bo}-item-${e}`;
}
const Dv = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function Uv({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), M("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: tl(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: M("span", { className: "text", children: i.title }) });
}
function Fv({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return M("div", { className: "typeahead-popover", children: M("ul", { id: Bo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => M(Uv, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let zv = 0;
class os {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${zv++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function Kv({ options: e } = {}) {
  const [t] = fe(), [r, n] = ke(() => !t.isEditable()), [i, s] = ke({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = ke(void 0), c = et(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new os("Cut", {
        onSelect: () => {
          Du(t);
        },
        isDisabled: r
      }),
      new os("Copy", {
        onSelect: () => {
          Lu(t);
        }
      }),
      new os("Paste", {
        onSelect: () => {
          Uu(t);
        },
        isDisabled: r
      }),
      new os("Paste as Plain Text", {
        onSelect: () => {
          Fu(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((h) => new os(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = Q(null), d = Q(null), u = Se(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return V(() => Sm(t), [t]), V(() => {
    const f = (p) => {
      const h = p.target;
      t.getRootElement() === h || Wh(h) || (p.preventDefault(), d.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, h) => {
      h?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), V(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const h = p.target;
      h instanceof Node && l.current?.contains(h) || u();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, u]), V(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      u();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, u]), V(() => {
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
          if (Dv.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, u, c, o, t]), V(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", Bo), () => {
        f.removeAttribute("aria-controls"), f.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), V(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (!f)
      return;
    if (o === void 0) {
      f.removeAttribute("aria-activedescendant");
      return;
    }
    f.setAttribute("aria-activedescendant", tl(o));
    const p = document.getElementById(Bo), h = document.getElementById(tl(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), y = h.getBoundingClientRect(), k = y.top - g.top + p.scrollTop, b = y.bottom - g.top + p.scrollTop;
    k < p.scrollTop ? p.scrollTop = k : b > p.scrollTop + p.clientHeight && (p.scrollTop = b - p.clientHeight);
  }, [t, i.isOpen, o]), V(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), Ks(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: h } = f.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), y = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    f.style.left = `${g}px`, f.style.top = `${y}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Dk.createPortal(M("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: M(Fv, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), u());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function Bv(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function jv(e) {
  if (!Tk(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function Vv(e) {
  return Tt(e);
}
function fc(e, t, r) {
  const n = Hi(t.node);
  if (!ai(n) || Vv(n))
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
function Wv(e, t) {
  if (N())
    return !1;
  const r = e.getRootElement(), n = xk(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Zp(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let d, u;
  if (n.isCollapsed)
    d = fc(e, c, jv(c)), u = d;
  else {
    const y = Bv(n.getRangeAt(0), c);
    d = fc(e, c, y ? "before" : "after"), u = fc(e, l, y ? "after" : "before");
  }
  if (!d && !u)
    return !1;
  const f = d ?? c, p = u ?? l, h = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = eh(h, e);
  return g ? (nr(g), g.dirty = !t, t) : !1;
}
function Hv() {
  const [e] = fe(), t = Q(!1), r = Q(!1);
  return V(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = N();
        A(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), V(() => e.registerCommand(Kt, () => (Wv(e, t.current) && (r.current = !0), !1), ye), [e]), null;
}
function Gv() {
  const [e] = fe();
  return V(() => e.registerCommand(Cr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Nr ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, ye), [e]), null;
}
function Jv({ isEditable: e }) {
  const [t] = fe();
  return Ks(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function zu(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Or(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function pc(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = N();
    if (!A(i))
      return !1;
    const s = eh(r, e);
    return !!s && i.is(s);
  }, { editor: e }) || r.removeAllRanges();
}
function Ai(e, t) {
  let r;
  try {
    r = bn();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function wf(e) {
  return !!e && Hs(ae(e));
}
function Ku(e) {
  const [t] = fe(), r = Q(void 0), n = Se((i) => {
    const s = N(), o = A(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = wf(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = Xs(d, u), p = Hs(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const h = dT();
        i.insertAfter(h), r.current = h.getKey(), l = h.getKey();
      }
      cr(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = ae(a);
      v(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return V(() => {
    const i = () => {
      const a = e(), c = N(), l = A(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (St(Rt), Or(t, Rt), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Ws(c) || !c.includes(Li))
        return;
      const l = N(), d = A(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (fT(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(Li).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = Ie(t.registerCommand(Kt, () => (i(), !1), Vn), t.registerCommand(Ul, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = wf(a);
      }), c && t.update(() => {
        const l = ae(a);
        v(l) && l.remove();
      }, { tag: Rt }), r.current = void 0, !1;
    }, Vn), t.registerNodeTransform(tt, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function Yv() {
  const e = N();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = j(r) ? r : r.getParent();
  if (!j(n))
    return;
  const i = f_(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && Hs(s); )
    s = s.getPreviousSibling();
  if (!s || v(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (r.is(n))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (r.is(s))
    return v(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = r.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function Xv() {
  return Ku(Yv), null;
}
function Qv() {
  const e = N();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!Ce(i) || Xs(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || Ce(s))
    return i;
}
function Zv() {
  return Ku(Qv), null;
}
function eM(e, t) {
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (Ll(n)) {
    const a = n.getChildAtIndex(t === "backward" ? r.offset - 1 : r.offset);
    return ve(a) ? Rf(a, t, !0) : void 0;
  }
  let i = $s(n);
  if (!i || r.type === "text" && !(t === "backward" ? r.offset === 0 : r.offset === n.getTextContentSize()))
    return;
  let s = _m(e, t, i);
  const o = [];
  for (; ; ) {
    for (; s; ) {
      if (ve(s))
        o.push(s);
      else if (!sM(s))
        break;
      s = ti(s, t, i);
    }
    if (s || !j(i))
      break;
    const a = $s(i.getParentOrThrow());
    if (!a)
      return;
    s = ti(i, t, a), i = a;
  }
  if (o.length > 0)
    return { nodes: t === "backward" ? o.reverse() : o, placement: "inline" };
  if (!(s || !we(i)))
    return Rf(i, t, !1);
}
function Dn(e) {
  if (!A(e) || e.isCollapsed())
    return [];
  const t = [];
  for (const r of e.getNodes()) {
    const n = oM(r);
    n && !t.some((i) => i.is(n)) && t.push(n);
  }
  return t;
}
function Of(e, t) {
  if (!A(e) || !e.isCollapsed())
    return [];
  const r = $s(e.anchor.getNode());
  if (!r)
    return [];
  const n = [];
  let i = _m(e, t, r);
  for (; i; )
    ve(i) && n.push(i), i = ti(i, t, r);
  return t === "backward" ? n.reverse() : n;
}
function tM(e, t) {
  const r = e.nodes[0], n = e.nodes[e.nodes.length - 1];
  if (e.placement === "inline") {
    const s = $s(r);
    return s ? (t === "backward" ? Mm(r, s) : Em(n, s), !0) : !1;
  }
  if (t === "backward") {
    const s = r.getPreviousSibling();
    return we(s) ? (aM(s), !0) : !1;
  }
  const i = n.getNextSibling();
  return we(i) ? (pi(i) || cM(i), !0) : !1;
}
function rM(e, t) {
  if (e.placement === "inline")
    return !0;
  const r = t === "backward" ? e.nodes[0].getPreviousSibling() : e.nodes[e.nodes.length - 1].getNextSibling();
  return we(r);
}
function nM(e, t) {
  const r = $s(t.anchor.getNode()), n = e.getNode();
  return !!r && (r.is(n) || r.isParentOf(n));
}
function iM(e) {
  return e.map((t) => {
    const r = t.getMarker();
    return r ? { tag: t.getTag(), marker: r } : { tag: t.getTag() };
  });
}
function $s(e) {
  return we(e) || j(e) ? e : qe(e, (t) => we(t) || j(t)) ?? void 0;
}
function _m(e, t, r) {
  const { anchor: n } = e, i = n.getNode();
  if (n.type === "text" || !L(i))
    return ti(i, t, r);
  const s = i.getChildAtIndex(t === "backward" ? n.offset - 1 : n.offset);
  return s ? Ea(s, t, r) : i.is(r) ? void 0 : ti(i, t, r);
}
function vm(e, t, r) {
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
function Ea(e, t, r) {
  let n = e;
  for (; n; ) {
    if (ve(n) || j(n) || !L(n))
      return n;
    n = (t === "backward" ? n.getLastChild() : n.getFirstChild()) ?? vm(n, t, r);
  }
}
function ti(e, t, r) {
  const n = vm(e, t, r);
  return n ? Ea(n, t, r) : void 0;
}
function Rf(e, t, r) {
  const n = [];
  let i = r ? e : t === "backward" ? e.getPreviousSibling() : e.getNextSibling();
  for (; ve(i); )
    n.push(i), i = t === "backward" ? i.getPreviousSibling() : i.getNextSibling();
  if (n.length !== 0)
    return { nodes: t === "backward" ? n.reverse() : n, placement: "block" };
}
function sM(e) {
  return v(e) && e.getTextContentSize() === 0;
}
function oM(e) {
  let t = ve(e) ? e : void 0;
  for (const r of e.getParents())
    ve(r) && (t = r);
  return t;
}
function Mm(e, t) {
  const r = ti(e, "backward", t);
  v(r) && !r.isToken() ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Aa(e.getParentOrThrow(), e.getIndexWithinParent());
}
function Em(e, t) {
  const r = ti(e, "forward", t);
  v(r) && !r.isToken() ? r.select(0, 0) : Aa(e.getParentOrThrow(), e.getIndexWithinParent() + 1);
}
function Aa(e, t) {
  const r = Yr();
  r.anchor.set(e.getKey(), t, "element"), r.focus.set(e.getKey(), t, "element"), nr(r);
}
function aM(e) {
  const t = e.getLastChild(), r = t ? Ea(t, "backward", e) : void 0;
  r ? v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Em(r, e) : Aa(e, e.getChildrenSize());
}
function cM(e) {
  const t = e.getFirstChild(), r = t ? Ea(t, "forward", e) : void 0;
  r ? v(r) ? r.select(0, 0) : Mm(r, e) : Aa(e, 0);
}
function qr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Zr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function lM(e) {
  const t = e.getParent();
  if (j(t))
    return qr(t).some((r) => r.is(e)) ? t : void 0;
}
function ri(e) {
  const t = qr(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function uM(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function dM(e) {
  const t = Ck();
  if (!A(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ri(e);
  const i = uM(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ri(e);
}
function wi(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = lM(t);
  if (r)
    return Am(r, t, e.offset) ? void 0 : r;
}
function Am(e, t, r) {
  const n = qr(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function fM(e) {
  const t = qr(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : cr(e, ri(e));
}
function pM(e = !1) {
  const t = N();
  if (!A(t))
    return !1;
  if (!t.isCollapsed())
    return Bu(t);
  const r = Pm(t.anchor);
  if (r) {
    const i = Vo(r);
    return t.anchor.is(i) ? !1 : (Nm(t, i), !0);
  }
  const n = wi(t.anchor);
  if (!n)
    return !1;
  if (!e && dM(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    cr(i, n.getIndexWithinParent());
  } else
    fM(n);
  return !0;
}
function jo(e) {
  const t = qr(e), r = t[t.length - 1];
  return v(r) ? hr(r.getKey(), r.getTextContentSize(), "text") : hr(e.getKey(), ri(e), "element");
}
function ji(e) {
  const t = e.getLastChild();
  return O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function hc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === ji(e) && O(r) && t.offset > 0;
}
function rl(e) {
  const t = ji(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function Vo(e) {
  const t = ji(e);
  if (t > ri(e)) {
    const r = e.getChildAtIndex(t - 1), n = L(r) ? r.getLastDescendant() : r;
    if (v(n))
      return hr(n.getKey(), n.getTextContentSize(), "text");
  }
  return jo(e);
}
function Pm(e) {
  const t = e.getNode(), r = t.getParent();
  if (j(r) && qr(r).length > 0 && rl(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (j(t) && qr(t).length > 0 && rl(t))
    return e.offset > ji(t) || e.offset === ji(t) && e.offset > ri(t) ? t : void 0;
  if (!L(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return j(n) && qr(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function Nm(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function wm(e) {
  const t = Vt(e);
  return t && qr(t).length > 0 ? t : void 0;
}
function hM(e) {
  const t = [], r = (n) => {
    const i = wm(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function Bu(e) {
  const t = hM(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => hr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const d = hr(l.getKey(), ri(l), "element"), u = hr(l.getKey(), ji(l), "element"), f = i.type === "text" && Am(l, i.getNode(), i.offset), p = i.isBefore(d) && !f;
    (wi(i) || hc(l, i) || p) && (!s.isBefore(d) || wi(s)) && (i = hc(l, i) ? Vo(l) : jo(l), o = !0), (wi(s) || hc(l, s) || u.isBefore(s)) && (i.isBefore(u) || i.is(u)) && (s = wi(s) ? jo(l) : Vo(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function $f(e, t) {
  const r = Yr();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function qf(e, t) {
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
function If(e, t, r) {
  const n = qf(e, t), i = qf(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function gM(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return L(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function mM(e, t, r, n) {
  const i = t.anchor, s = Pm(i);
  if (s)
    return Nm(t, Vo(s)), !0;
  const o = wm(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const u = gM(t.focus);
    return j(u) && qr(u).length > 0;
  }
  if (wi(i))
    return !0;
  const a = jo(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const u = $f(a, i);
    return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && If(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = rl(o);
  if (!c)
    return !1;
  const l = hr(c.getKey(), 0, "text"), d = $f(i, l);
  return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && If(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function yM() {
  const [e] = fe(), t = Q(!1);
  return V(() => {
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
  }, [e]), V(() => {
    const r = (o) => () => {
      const a = N();
      return !A(a) || a.isCollapsed() || !Bu(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = N();
      return A(c) ? c.isCollapsed() ? mM(e, c, a, o) : i() : !1;
    };
    return Ie(e.registerCommand(Wn, n, ye), e.registerCommand(zt, n, ye), e.registerCommand(Gn, n, ye), e.registerCommand(Nc, n, ye), e.registerCommand(Jr, s("character"), ye), e.registerCommand(Ts, s("word"), ye), e.registerCommand(qi, s("line"), ye), e.registerCommand(Il, i, ye), e.registerCommand(or, i, ye));
  }, [e]), V(() => e.registerCommand(Kt, () => (pM(t.current) && (St(Rt), Or(e, Rt)), !1), Vn), [e]), null;
}
function Wo(e, t) {
  return e.key === t.key && e.offset === t.offset && e.type === t.type;
}
function Om(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Sn(e) {
  return e ? we(e) ? e : qe(e, (r) => we(r)) ?? void 0 : void 0;
}
function Rm(e) {
  if (!A(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Sn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function ju(e) {
  return A(e) && e.isCollapsed() && e.anchor.type === "element" || !A(e) && !aa(e) ? !1 : e.getNodes().some((t) => Ce(t));
}
function $m(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Sn(r);
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
function qm(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Sn(r);
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
function Lf(e, t) {
  return !!nl(e, t);
}
function nl(e, t) {
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && L(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return Ce(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return Ce(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return Ce(i) ? i : void 0;
}
function Ho(e, t) {
  if (!A(e))
    return !1;
  const r = Sn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Kn(e) {
  return ju(e) || Rm(e);
}
function Vu(e, t) {
  if (ju(e) || Rm(e))
    return !0;
  if (!A(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return $m(e) && Ho(e, "backward") || Lf(e, "backward");
    case "deleteForward":
      return qm(e) && Ho(e, "forward") || Lf(e, "forward");
    case "insertText":
      return !1;
  }
}
function bM(e, t) {
  if (!(!A(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = nl(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if ($m(e) && Ho(e, "backward")) {
        const n = Sn(e.anchor.getNode());
        if (ft(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = nl(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (qm(e) && Ho(e, "forward")) {
        const i = Sn(e.anchor.getNode())?.getNextSibling();
        if (ft(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Df(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return aa(e) && e.has(t.key);
  if (t.kind === "selection")
    return !A(e) || e.isCollapsed() || !t.anchor || !t.focus ? !1 : Wo(e.anchor, t.anchor) && Wo(e.focus, t.focus);
  if (!A(e) || e.isCollapsed())
    return !1;
  const r = Sn(e.anchor.getNode()), n = Sn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Im(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function kM(e) {
  const t = e.getPreviousSibling();
  if (!we(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = Lt(n), s = e.getChildren().filter((o) => !Br(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? Im(r) : pi(t) || t.selectStart();
}
function Lm(e) {
  return Ce(e) || rt(e) ? [] : ft(e) ? e.getChildren().flatMap(Lm) : [e];
}
function xM(e) {
  const t = [];
  for (const r of e) {
    const n = Lm(r);
    n.length !== 0 && (ft(r) && t.length > 0 && t.push(Ne(" ")), t.push(...n));
  }
  return t;
}
const TM = /* @__PURE__ */ new Set(["​", " "]), Uf = 6e4;
function CM({ isEnabled: e, structureProtectionMode: t = "off", copyLimit: r, onHiddenContentDelete: n, logger: i }) {
  const [s] = fe(), o = Q(n), a = Q(t), c = Q(r), l = Q(i);
  V(() => {
    o.current = n, a.current = t, c.current = r, l.current = i;
  }, [n, t, r, i]);
  const d = !!n;
  return V(() => {
    if (!e || !d)
      return;
    let u = !1, f = !1, p = !1;
    const h = (W) => {
      u = !0;
      try {
        W();
      } finally {
        u = !1;
      }
    }, g = async (W) => {
      const K = o.current;
      if (!K)
        return "keep";
      try {
        await new Promise((oe) => setTimeout(oe, 0));
        const ee = await K(W);
        return ee !== "delete" && ee !== "keep" && l.current?.warn(`[HiddenContentDeleteGuard] onHiddenContentDelete answered ${JSON.stringify(ee)}, which is neither "delete" nor "keep"; keeping the hidden content.`), ee === "delete" ? "delete" : "keep";
      } catch (ee) {
        return l.current?.error("[HiddenContentDeleteGuard] onHiddenContentDelete failed; keeping the hidden content.", ee), "keep";
      }
    }, y = (W, K) => l.current?.info(`[HiddenContentDeleteGuard] Dropped the "${W}" answer: ${K}. Nothing was changed.`), k = (W, K, ee, oe, Ke = []) => {
      const te = [Wu(W), ...Ke], P = {
        ...te[0],
        hiddenKeys: K.map((he) => he.getKey()),
        ranges: te,
        covered: Um(te)
      }, ne = {
        items: iM(K),
        action: ee,
        canSkip: !!oe.$keep
      };
      f = !0;
      const pe = setTimeout(() => !p && l.current?.warn(`[HiddenContentDeleteGuard] onHiddenContentDelete has not answered after ${Uf / 1e3}s; editing stays held until it does.`), Uf);
      return g(ne).then((he) => {
        clearTimeout(pe), f = !1, p ? y(he, "the editor's guard was torn down while asking") : b(P, he, oe);
      }), !0;
    }, b = (W, K, ee) => {
      const oe = s.getEditorState().read(() => {
        if (!wM(W))
          return "the selection moved while asking";
        if (!Ff(W))
          return "the document changed while asking";
      });
      if (oe) {
        y(K, oe);
        return;
      }
      if (!s.getRootElement()) {
        y(K, "the editor has no root element to return focus to");
        return;
      }
      s.focus(() => queueMicrotask(() => T(W, K, ee)));
    }, T = (W, K, ee) => {
      if (p) {
        y(K, "the editor's guard was torn down while asking");
        return;
      }
      let oe = !1;
      s.update(() => {
        if (!s.isEditable()) {
          y(K, "the editor became read-only while asking");
          return;
        }
        if (!Ff(W)) {
          y(K, "the document changed while asking");
          return;
        }
        if (nr(Hu(W) ?? null), K === "keep") {
          ee.$keep?.();
          return;
        }
        ee.$delete?.(), oe = !0;
      }, { discrete: !0 });
      const { replay: Ke } = ee;
      oe && Ke && h(Ke);
    }, E = (W, K, ee) => {
      const oe = eM(W, K), Ke = ee === "character" || oe?.placement === "block" ? void 0 : MM(s, W, K, ee), te = PM([...oe?.nodes ?? [], ...Ke?.hidden ?? []]);
      if (te.length === 0)
        return !1;
      const P = te.map((Xe) => Xe.getKey()), ne = !!oe && te.length === oe.nodes.length && rM(oe, K), pe = oe?.nodes.map((Xe) => Xe.getKey()) ?? [], he = Ke?.range;
      return k(W, te, K === "backward" ? "deleteBackward" : "deleteForward", {
        $keep: oe && ne ? () => tM(OM(oe, pe), K) : void 0,
        $delete: () => {
          he && EM(he), AM(P);
        }
      }, [NM(W, te, K), ...he ? [he] : []]);
    }, S = (W, K, ee) => k(W, K, "replaceSelection", { replay: ee }), w = () => {
      if (u || !s.isEditable())
        return;
      const W = N();
      if (!(!A(W) || to()))
        return W;
    }, $ = (W) => (K) => !f || u ? W(K) : (K instanceof Event && K.preventDefault(), !0), z = (W) => a.current === "protected" && Kn(W), B = (W) => {
      if (u)
        return !1;
      const K = SM(W);
      if (f)
        return !K && !mm(W) ? !1 : (W.preventDefault(), !0);
      if (!K)
        return !1;
      const ee = w();
      if (!ee?.isCollapsed())
        return !1;
      const oe = K.direction === "backward" ? "deleteBackward" : "deleteForward";
      if (a.current === "protected" && Vu(ee, oe))
        return !1;
      const Ke = E(ee, K.direction, K.granularity);
      return Ke && W.preventDefault(), Ke;
    }, ce = (W, K) => $((ee) => {
      const oe = w();
      if (!oe)
        return !1;
      if (oe.isCollapsed())
        return E(oe, ee ? "backward" : "forward", K);
      const Ke = Dn(oe);
      return Ke.length === 0 ? !1 : S(oe, Ke, () => s.dispatchCommand(W, ee));
    }), Y = (W) => $((K) => {
      const ee = w();
      if (!ee || ee.isCollapsed())
        return !1;
      const oe = Dn(ee);
      return oe.length === 0 ? !1 : S(ee, oe, () => s.dispatchCommand(W, K));
    }), xe = (W) => {
      const K = w();
      if (!K || K.isCollapsed() || z(K))
        return !1;
      const ee = Dn(K);
      if (ee.length === 0)
        return !1;
      const oe = typeof W == "string" ? W : W.data ?? W.dataTransfer?.getData("text/plain") ?? "", Ke = s.isComposing() && TM.has(oe);
      return S(K, ee, () => Ke || oe === "" ? s.dispatchCommand(Jr, !0) : s.dispatchCommand(Wn, oe));
    }, se = (W) => {
      const K = w();
      return !K || Dn(K).length === 0 ? !1 : mo(W);
    }, q = (W) => {
      const K = w();
      if (!K || K.isCollapsed())
        return !1;
      const ee = a.current === "protected";
      if (z(K) || _M(W, ee))
        return !1;
      const oe = Dn(K);
      if (oe.length === 0)
        return !1;
      const Ke = vM(W);
      return mo(W), S(K, oe, () => s.dispatchCommand(zt, Ke));
    }, J = (W) => {
      const K = w();
      if (!K || K.isCollapsed() || z(K) || (Dm(K), K.isCollapsed()))
        return !1;
      const ee = Dn(K);
      return ee.length === 0 ? !1 : c.current !== void 0 ? mo(W) : (s.dispatchCommand(Hn, W), mo(W), S(K, ee, () => s.dispatchCommand(Jr, !0)));
    };
    return Ie(() => {
      p = !0;
    }, s.registerCommand(Cr, B, ye), s.registerCommand(Jr, ce(Jr, "character"), ye), s.registerCommand(Ts, ce(Ts, "word"), ye), s.registerCommand(qi, ce(qi, "line"), ye), s.registerCommand(Wn, $(xe), ye), s.registerCommand(Gn, Y(Gn), ye), s.registerCommand(Nc, Y(Nc), ye), s.registerCommand(th, se, ye), s.registerCommand(Il, se, ye), s.registerCommand(zt, $(q), ye), s.registerCommand(or, $(J), ye));
  }, [s, e, d]), null;
}
function SM(e) {
  const t = Nr ? { altKey: !0 } : { ctrlKey: !0 }, r = (n) => Nr && hn(e, n, { ctrlKey: !0 });
  if (hn(e, "Backspace", { shiftKey: "any" }) || r("h"))
    return { direction: "backward", granularity: "character" };
  if (hn(e, "Delete", {}) || r("d"))
    return { direction: "forward", granularity: "character" };
  if (hn(e, "Backspace", t))
    return { direction: "backward", granularity: "word" };
  if (hn(e, "Delete", t))
    return { direction: "forward", granularity: "word" };
  if (Nr && hn(e, "Backspace", { metaKey: !0 }))
    return { direction: "backward", granularity: "line" };
  if (Nr && hn(e, "Delete", { metaKey: !0 }) || r("k"))
    return { direction: "forward", granularity: "line" };
}
function mo(e) {
  return e?.preventDefault(), !0;
}
function _M(e, t) {
  if (typeof ClipboardEvent > "u" || !(e instanceof ClipboardEvent))
    return !1;
  const r = e.clipboardData;
  return r ? Array.from(r.types).every((n) => n === "Files") ? !0 : t && r.getData("text/html") ? !1 : el(r.getData("text/plain")) : !1;
}
function vM(e) {
  if (typeof ClipboardEvent > "u" || typeof DataTransfer > "u" || !(e instanceof ClipboardEvent) || !e.clipboardData)
    return e;
  const t = new DataTransfer();
  for (const r of e.clipboardData.types)
    r !== "Files" && t.setData(r, e.clipboardData.getData(r));
  for (const r of Array.from(e.clipboardData.files))
    t.items.add(r);
  return new ClipboardEvent("paste", { clipboardData: t, cancelable: !0 });
}
function MM(e, t, r, n) {
  const i = e.getRootElement()?.ownerDocument.defaultView?.getSelection();
  if (!i || typeof i.modify != "function")
    return { hidden: n === "line" ? Of(t, r) : [] };
  const s = t.clone();
  return s.dirty = !0, s.modify("extend", r === "backward", n === "line" ? "lineboundary" : "word"), t.dirty = !0, nM(s.focus, t) ? {
    hidden: Dn(s),
    range: s.isCollapsed() ? void 0 : Wu(s)
  } : { hidden: Of(t, r) };
}
function EM(e) {
  const t = Hu(e);
  t && (Dm(t), !t.isCollapsed() && (nr(t), t.removeText()));
}
function Dm(e) {
  va(e), Bu(e);
}
function AM(e) {
  for (const t of e) {
    const r = ae(t);
    ve(r) && r.isAttached() && r.remove();
  }
}
function PM(e) {
  return e.filter((r, n) => e.findIndex((i) => i.is(r)) === n).sort((r, n) => r.isBefore(n) ? -1 : 1);
}
function Wu({ anchor: e, focus: t }) {
  const r = ({ key: n, offset: i, type: s }) => ({ key: n, offset: i, type: s });
  return { anchor: r(e), focus: r(t) };
}
function Hu({ anchor: e, focus: t }) {
  const r = ({ key: i, offset: s, type: o }) => {
    const a = ae(i);
    return !a || !a.isAttached() ? !1 : o === "element" ? L(a) && s <= a.getChildrenSize() : v(a) && s <= a.getTextContentSize();
  };
  if (!r(e) || !r(t))
    return;
  const n = Yr();
  return n.anchor.set(e.key, e.offset, e.type), n.focus.set(t.key, t.offset, t.type), n;
}
function NM(e, t, r) {
  const n = r === "backward" ? t[0] : t[t.length - 1], i = n.getIndexWithinParent() + (r === "backward" ? 0 : 1), s = { key: n.getParentOrThrow().getKey(), offset: i, type: "element" }, { anchor: o } = Wu(e);
  return { anchor: o, focus: s };
}
function Um(e) {
  const t = [];
  for (const r of e) {
    const n = Hu(r);
    if (!n)
      return;
    for (const i of n.getNodes())
      t.push(i.getKey(), v(i) ? i.getTextContent() : "");
  }
  return t.join("\0");
}
function Ff(e) {
  return e.hiddenKeys.every((t) => ae(t)?.isAttached()) && e.covered !== void 0 && Um(e.ranges) === e.covered;
}
function wM(e) {
  const t = N();
  return t ? A(t) ? Wo(t.anchor, e.anchor) && Wo(t.focus, e.focus) : !1 : !0;
}
function OM(e, t) {
  return { nodes: t.map((n) => ae(n)).filter(ve), placement: e.placement };
}
function RM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = fe();
  return V(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), V(() => {
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
        const d = zu(o);
        o.update(() => {
          d || St(fr), o.setEditorState(l), o.dispatchCommand(Sk, void 0);
        }, { tag: Bl });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const gc = "caller_highlight", $M = En(function(t, r) {
  const [n] = fe(), i = Q(void 0), s = Q(void 0), o = Se(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const d = Pr(a);
      return d ? (d.getChildren().find(Tt) ?? Zr(d))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(gc), l?.classList.add(gc), s.current = l;
  }, [n]);
  return sa(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Ai(n, () => Pr(a)?.getKey()), o();
    }
  }), [n, o]), V(() => Ie(
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
      const u = l.has(Bl) ? void 0 : c.read(() => xu(d)), f = u === void 0 ? void 0 : n.getEditorState().read(() => Pr(u)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), V(() => () => s.current?.classList.remove(gc), []), null;
});
function qM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = fe();
  return IM(t, n), LM(i, e, r, n), null;
}
function IM(e, t) {
  const r = Q(void 0), n = Q(void 0), i = e.noteCallers, s = e.crossRefCallers;
  V(() => {
    let o = i;
    (!o || o.length <= 0) && (o = QS), r.current !== o && (r.current = o, zf("note-callers", o, t));
  }, [t, i]), V(() => {
    let o = s;
    (!o || o.length <= 0) && (o = ZS), n.current !== o && (n.current = o, zf("cross-ref-callers", o, t));
  }, [t, s]);
}
function LM(e, t, r, n) {
  V(() => {
    if (!e.hasNodes([Me, Le, mr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => jM(s));
    return Ie(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Le, (s) => DM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(Me, UM),
      e.registerNodeTransform(tt, FM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(mr, zM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(mr, (s, { prevEditorState: o }) => KM(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Kt, () => BM(e, t, r, n), kt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function DM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Tt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !O(i) && i.getTextContent() !== Wt(e.getCaller()) && e.insertBefore(i);
  }
}
function UM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => Tt(s));
  if (!F(e) || !j(t) || !n)
    return;
  const i = eu(r);
  n.getPreviewText() !== i && n.setPreviewText(i), zm(e);
}
function Fm(e) {
  const t = N();
  if (!A(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function zm(e) {
  const t = e.getNextSibling();
  if (v(t) && !O(t)) {
    if (t.getTextContent() === D || Fm(t))
      return;
    if (Br(t)) {
      t.setTextContent(D);
      return;
    }
  }
  e.insertAfter(Js());
}
function FM(e) {
  const t = Vt(e), r = t?.getChildren(), n = r?.find((a) => Tt(a));
  if (!v(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent(), s = Br(e) || Fm(e);
  if (!O(e) && j(i) && s && e.getTextContent() !== D && (e.setTextContent(D), e.selectEnd()), F(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(ar) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = eu(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function zM(e) {
  Tt(e) && zm(e);
}
function KM(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ae(r), a = o?.getParent();
      return Tt(o) && j(a) && a.getCaller() === Cs;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function BM(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = qe(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ae(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), as(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (j(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, as(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (j(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, as(e, c, n);
    } else if (!a) {
      const c = qe(o, (l) => j(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      we(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, as(e, l, n);
      }
    }
  }
  if (ft(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (di(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, as(e, l, n);
    }
  }
  return !1;
}
function as(e, t, r) {
  const n = ae(t);
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
function jM(e) {
  const t = N();
  if (!A(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && v(s)) {
    e.preventDefault();
    const o = Yr();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), nr(o);
  }
}
function zf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (VM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function VM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function WM({ onChange: e }) {
  const [t] = fe();
  return V(() => t.registerCommand(Kt, () => {
    const r = Cu();
    return e?.(r), !1;
  }, kt), [t, e]), null;
}
function HM() {
  const [e] = fe();
  return GM(e), null;
}
function GM(e) {
  V(() => {
    if (!e.hasNodes([pt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(pt, (t) => JM(t, e));
  }, [e]);
}
function JM(e, t) {
  Hc(t, e.getKey()) && jg(e.getFirstChild()), !(!ge(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ae(e.getKey());
    return ge(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Km({ onStateChange: e }) {
  const [t] = fe(), [r, n] = ke(t), i = Q(!1), s = Q(!1), o = Q(void 0), a = Q(void 0), c = Se(() => {
    const l = N();
    let d;
    if (A(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : qe(u, (k) => {
        const b = k.getParent();
        return b !== null && _k(b);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), ws(p) && (p = qe(u, ge) ?? p);
      const h = p.getKey(), g = r.getElementByKey(h), y = yT(u, f);
      if (y && uS(y) && (d = y.getMarker()), g !== null && (ge(p) || Ee(p) || Vs(p))) {
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
  return V(() => t.registerCommand(Kt, (l, d) => (c(), n(d), !1), ye), [t, c]), V(() => Ie(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(vk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ye), r.registerCommand(Mk, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ye)), [c, r, e]), null;
}
function Kf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function YM(e) {
  if (Array.isArray(e)) return e;
}
function XM(e, t) {
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
function QM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZM(e, t) {
  return YM(e) || XM(e, t) || eE(e, t) || QM();
}
function eE(e, t) {
  if (e) {
    if (typeof e == "string") return Kf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Kf(e, t) : void 0;
  }
}
const Bm = Object.entries, Bf = Object.setPrototypeOf, tE = Object.isFrozen, rE = Object.getPrototypeOf, nE = Object.getOwnPropertyDescriptor;
let ht = Object.freeze, mt = Object.seal, Pi = Object.create, jm = typeof Reflect < "u" && Reflect, il = jm.apply, sl = jm.construct;
ht || (ht = function(t) {
  return t;
});
mt || (mt = function(t) {
  return t;
});
il || (il = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
sl || (sl = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const vi = at(Array.prototype.forEach), iE = at(Array.prototype.lastIndexOf), jf = at(Array.prototype.pop), Mi = at(Array.prototype.push), sE = at(Array.prototype.splice), mn = Array.isArray, ps = at(String.prototype.toLowerCase), mc = at(String.prototype.toString), Vf = at(String.prototype.match), cs = at(String.prototype.replace), Wf = at(String.prototype.indexOf), oE = at(String.prototype.trim), aE = at(Number.prototype.toString), cE = at(Boolean.prototype.toString), Hf = typeof BigInt > "u" ? null : at(BigInt.prototype.toString), Gf = typeof Symbol > "u" ? null : at(Symbol.prototype.toString), ut = at(Object.prototype.hasOwnProperty), ls = at(Object.prototype.toString), lt = at(RegExp.prototype.test), Ln = lE(TypeError);
function at(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return il(e, t, n);
  };
}
function lE(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return sl(e, r);
  };
}
function Te(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ps;
  if (Bf && Bf(e, null), !mn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (tE(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function uE(e) {
  for (let t = 0; t < e.length; t++)
    ut(e, t) || (e[t] = null);
  return e;
}
function bt(e) {
  const t = Pi(null);
  for (const n of Bm(e)) {
    var r = ZM(n, 2);
    const i = r[0], s = r[1];
    ut(e, i) && (mn(s) ? t[i] = uE(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = bt(s) : t[i] = s);
  }
  return t;
}
function dE(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return aE(e);
    case "boolean":
      return cE(e);
    case "bigint":
      return Hf ? Hf(e) : "0";
    case "symbol":
      return Gf ? Gf(e) : "Symbol()";
    case "undefined":
      return ls(e);
    case "function":
    case "object": {
      if (e === null)
        return ls(e);
      const t = e, r = ur(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : ls(n);
      }
      return ls(e);
    }
    default:
      return ls(e);
  }
}
function ur(e, t) {
  for (; e !== null; ) {
    const n = nE(e, t);
    if (n) {
      if (n.get)
        return at(n.get);
      if (typeof n.value == "function")
        return at(n.value);
    }
    e = rE(e);
  }
  function r() {
    return null;
  }
  return r;
}
function fE(e) {
  try {
    return lt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Jf = ht(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yc = ht(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), bc = ht(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), pE = ht(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), kc = ht(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), hE = ht(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Yf = ht(["#text"]), Xf = ht(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), xc = ht(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Qf = ht(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), yo = ht(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gE = mt(/{{[\w\W]*|^[\w\W]*}}/g), mE = mt(/<%[\w\W]*|^[\w\W]*%>/g), yE = mt(/\${[\w\W]*/g), bE = mt(/^data-[\-\w.\u00B7-\uFFFF]+$/), kE = mt(/^aria-[\-\w]+$/), Zf = mt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), xE = mt(/^(?:\w+script|data):/i), TE = mt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), CE = mt(/^html$/i), SE = mt(/^[a-z][.\w]*(-[.\w]+)+$/i), ep = mt(/<[/\w!]/g), tp = mt(/<[/\w]/g), _E = mt(/<\/no(script|embed|frames)/i), vE = mt(/\/>/i), Ft = {
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
}, ME = function() {
  return typeof window > "u" ? null : window;
}, EE = function(t, r) {
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
}, rp = function() {
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
}, pn = function(t, r, n, i) {
  return ut(t, r) && mn(t[r]) ? Te(i.base ? bt(i.base) : {}, t[r], i.transform) : n;
};
function Vm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ME();
  const t = (H) => Vm(H);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Ft.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = ur(f, "cloneNode"), h = ur(f, "remove"), g = ur(f, "nextSibling"), y = ur(f, "childNodes"), k = ur(f, "parentNode"), b = ur(f, "shadowRoot"), T = ur(f, "attributes"), E = o && o.prototype ? ur(o.prototype, "nodeType") : null, S = o && o.prototype ? ur(o.prototype, "nodeName") : null, w = o && o.prototype ? ur(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const H = r.createElement("template");
    H.content && H.content.ownerDocument && (r = H.content.ownerDocument);
  }
  let $, z = "", B, ce = !1, Y = 0;
  const xe = function() {
    if (Y > 0)
      throw Ln('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, se = function(m) {
    xe(), Y++;
    try {
      return $.createHTML(m);
    } finally {
      Y--;
    }
  }, q = function(m) {
    xe(), Y++;
    try {
      return $.createScriptURL(m);
    } finally {
      Y--;
    }
  }, J = function() {
    return ce || (B = EE(u, i), ce = !0), B;
  }, W = r, K = W.implementation, ee = W.createNodeIterator, oe = W.createDocumentFragment, Ke = W.getElementsByTagName, te = n.importNode;
  let P = rp();
  t.isSupported = typeof Bm == "function" && typeof k == "function" && K && K.createHTMLDocument !== void 0;
  const ne = gE, pe = mE, he = yE, Xe = bE, yt = kE, ie = xE, Qe = TE, Ua = SE;
  let hi = Zf, Ae = null;
  const We = Te({}, [...Jf, ...yc, ...bc, ...kc, ...Yf]);
  let be = null;
  const Et = Te({}, [...Xf, ...xc, ...Qf, ...yo]);
  let De = Object.seal(Pi(null, {
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
  })), lr = null, ro = null;
  const Jt = Object.seal(Pi(null, {
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
  let es = !0, Vr = !0, Pn = !1, no = !0, At = !1, Yt = !0, vr = !1, gi = !1, mi = null, Nn = null, R = !1, I = !1, G = !1, X = !1, _e = !0, it = !1;
  const Ue = "user-content-";
  let Ze = !0, Pt = !1, Wr = {}, Ut = null;
  const Xt = Te({}, [
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
  const so = Te({}, ["audio", "video", "img", "source", "image", "track"]);
  let ln = null;
  const yd = Te({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), oo = "http://www.w3.org/1998/Math/MathML", ao = "http://www.w3.org/2000/svg", Mr = "http://www.w3.org/1999/xhtml";
  let yi = Mr, Fa = !1, za = null;
  const Kb = Te({}, [oo, ao, Mr], mc), bd = ht(["mi", "mo", "mn", "ms", "mtext"]);
  let Ka = Te({}, bd);
  const kd = ht(["annotation-xml"]);
  let Ba = Te({}, kd);
  const Bb = Te({}, ["title", "style", "font", "a", "script"]);
  let ts = null;
  const jb = ["application/xhtml+xml", "text/html"], Vb = "text/html";
  let He = null, bi = null;
  const Wb = r.createElement("form"), xd = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, ja = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (bi && bi === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = bt(m), ts = // eslint-disable-next-line unicorn/prefer-includes
    jb.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? Vb : m.PARSER_MEDIA_TYPE, He = ts === "application/xhtml+xml" ? mc : ps, Ae = pn(m, "ALLOWED_TAGS", We, {
      transform: He
    }), be = pn(m, "ALLOWED_ATTR", Et, {
      transform: He
    }), za = pn(m, "ALLOWED_NAMESPACES", Kb, {
      transform: mc
    }), ln = pn(m, "ADD_URI_SAFE_ATTR", yd, {
      transform: He,
      base: yd
    }), io = pn(m, "ADD_DATA_URI_TAGS", so, {
      transform: He,
      base: so
    }), Ut = pn(m, "FORBID_CONTENTS", Xt, {
      transform: He
    }), lr = pn(m, "FORBID_TAGS", bt({}), {
      transform: He
    }), ro = pn(m, "FORBID_ATTR", bt({}), {
      transform: He
    }), Wr = ut(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? bt(m.USE_PROFILES) : m.USE_PROFILES : !1, es = m.ALLOW_ARIA_ATTR !== !1, Vr = m.ALLOW_DATA_ATTR !== !1, Pn = m.ALLOW_UNKNOWN_PROTOCOLS || !1, no = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, At = m.SAFE_FOR_TEMPLATES || !1, Yt = m.SAFE_FOR_XML !== !1, vr = m.WHOLE_DOCUMENT || !1, I = m.RETURN_DOM || !1, G = m.RETURN_DOM_FRAGMENT || !1, X = m.RETURN_TRUSTED_TYPE || !1, R = m.FORCE_BODY || !1, _e = m.SANITIZE_DOM !== !1, it = m.SANITIZE_NAMED_PROPS || !1, Ze = m.KEEP_CONTENT !== !1, Pt = m.IN_PLACE || !1, hi = fE(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Zf, yi = typeof m.NAMESPACE == "string" ? m.NAMESPACE : Mr, Ka = ut(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? bt(m.MATHML_TEXT_INTEGRATION_POINTS) : Te({}, bd), Ba = ut(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? bt(m.HTML_INTEGRATION_POINTS) : Te({}, kd);
    const _ = ut(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? bt(m.CUSTOM_ELEMENT_HANDLING) : Pi(null);
    if (De = Pi(null), ut(_, "tagNameCheck") && xd(_.tagNameCheck) && (De.tagNameCheck = _.tagNameCheck), ut(_, "attributeNameCheck") && xd(_.attributeNameCheck) && (De.attributeNameCheck = _.attributeNameCheck), ut(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (De.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), mt(De), At && (Vr = !1), G && (I = !0), Wr && (Ae = Te({}, Yf), be = Pi(null), Wr.html === !0 && (Te(Ae, Jf), Te(be, Xf)), Wr.svg === !0 && (Te(Ae, yc), Te(be, xc), Te(be, yo)), Wr.svgFilters === !0 && (Te(Ae, bc), Te(be, xc), Te(be, yo)), Wr.mathMl === !0 && (Te(Ae, kc), Te(be, Qf), Te(be, yo))), Jt.tagCheck = null, Jt.attributeCheck = null, ut(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Jt.tagCheck = m.ADD_TAGS : mn(m.ADD_TAGS) && (Ae === We && (Ae = bt(Ae)), Te(Ae, m.ADD_TAGS, He))), ut(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Jt.attributeCheck = m.ADD_ATTR : mn(m.ADD_ATTR) && (be === Et && (be = bt(be)), Te(be, m.ADD_ATTR, He))), ut(m, "ADD_URI_SAFE_ATTR") && mn(m.ADD_URI_SAFE_ATTR) && Te(ln, m.ADD_URI_SAFE_ATTR, He), ut(m, "FORBID_CONTENTS") && mn(m.FORBID_CONTENTS) && (Ut === Xt && (Ut = bt(Ut)), Te(Ut, m.FORBID_CONTENTS, He)), ut(m, "ADD_FORBID_CONTENTS") && mn(m.ADD_FORBID_CONTENTS) && (Ut === Xt && (Ut = bt(Ut)), Te(Ut, m.ADD_FORBID_CONTENTS, He)), Ze && (Ae["#text"] = !0), vr && Te(Ae, ["html", "head", "body"]), Ae.table && (Te(Ae, ["tbody"]), delete lr.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ln('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ln('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = $;
      $ = m.TRUSTED_TYPES_POLICY;
      try {
        z = se("");
      } catch (Z) {
        throw $ = U, Z;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? ($ = void 0, z = "") : ($ === void 0 && ($ = J()), $ && typeof z == "string" && (z = se("")));
    ht && ht(m), bi = m;
  }, Td = Te({}, [...yc, ...bc, ...pE]), Cd = Te({}, [...kc, ...hE]), Hb = function(m, _, U) {
    return _.namespaceURI === Mr ? m === "svg" : _.namespaceURI === oo ? m === "svg" && (U === "annotation-xml" || Ka[U]) : !!Td[m];
  }, Gb = function(m, _, U) {
    return _.namespaceURI === Mr ? m === "math" : _.namespaceURI === ao ? m === "math" && Ba[U] : !!Cd[m];
  }, Jb = function(m, _, U) {
    return _.namespaceURI === ao && !Ba[U] || _.namespaceURI === oo && !Ka[U] ? !1 : !Cd[m] && (Bb[m] || !Td[m]);
  }, Yb = function(m) {
    let _ = k(m);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: yi,
      tagName: "template"
    });
    const U = ps(m.tagName), Z = ps(_.tagName);
    return za[m.namespaceURI] ? m.namespaceURI === ao ? Hb(U, _, Z) : m.namespaceURI === oo ? Gb(U, _, Z) : m.namespaceURI === Mr ? Jb(U, _, Z) : !!(ts === "application/xhtml+xml" && za[m.namespaceURI]) : !1;
  }, un = function(m) {
    Mi(t.removed, {
      element: m
    });
    try {
      k(m).removeChild(m);
    } catch {
      if (h(m), !k(m))
        throw Ln("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, co = function(m) {
    rs(m);
    const _ = y(m);
    if (_) {
      const Z = [];
      vi(_, (re) => {
        Mi(Z, re);
      }), vi(Z, (re) => {
        try {
          h(re);
        } catch {
        }
      });
    }
    const U = T(m);
    if (U)
      for (let Z = U.length - 1; Z >= 0; --Z) {
        const re = U[Z], de = re && re.name;
        if (typeof de == "string")
          try {
            m.removeAttribute(de);
          } catch {
          }
      }
  }, wn = function(m, _) {
    try {
      Mi(t.removed, {
        attribute: _.getAttributeNode(m),
        from: _
      });
    } catch {
      Mi(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(m), m === "is")
      if (I || G)
        try {
          un(_);
        } catch {
        }
      else
        try {
          _.setAttribute(m, "");
        } catch {
        }
  }, Xb = function(m) {
    const _ = T(m);
    if (_)
      for (let U = _.length - 1; U >= 0; --U) {
        const Z = _[U], re = Z && Z.name;
        if (!(typeof re != "string" || be[He(re)]))
          try {
            m.removeAttribute(re);
          } catch {
          }
      }
  }, rs = function(m) {
    const _ = [m];
    for (; _.length > 0; ) {
      const U = _.pop();
      (E ? E(U) : U.nodeType) === Ft.element && Xb(U);
      const re = y(U);
      if (re)
        for (let de = re.length - 1; de >= 0; --de)
          _.push(re[de]);
    }
  }, Qb = function(m) {
    if (!Yt)
      return;
    const _ = [m];
    for (; _.length > 0; ) {
      const U = _.pop(), Z = E ? E(U) : U.nodeType;
      if (Z === Ft.processingInstruction || Z === Ft.comment && lt(tp, U.data)) {
        try {
          h(U);
        } catch {
        }
        continue;
      }
      if (Z === Ft.element) {
        const de = U, Oe = He(S ? S(U) : U.nodeName);
        try {
          de.hasAttribute && de.hasAttribute("patchsrc") && de.removeAttribute("patchsrc"), de.hasAttribute && de.hasAttribute("for") && Oe !== "label" && Oe !== "output" && de.removeAttribute("for");
        } catch {
        }
      }
      const re = y(U);
      if (re)
        for (let de = re.length - 1; de >= 0; --de)
          _.push(re[de]);
    }
  }, Sd = function(m) {
    let _ = null, U = null;
    if (R)
      m = "<remove></remove>" + m;
    else {
      const de = Vf(m, /^[\r\n\t ]+/);
      U = de && de[0];
    }
    ts === "application/xhtml+xml" && yi === Mr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const Z = $ ? se(m) : m;
    if (yi === Mr)
      try {
        _ = new d().parseFromString(Z, ts);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = K.createDocument(yi, "template", null);
      try {
        _.documentElement.innerHTML = Fa ? z : Z;
      } catch {
      }
    }
    const re = _.body || _.documentElement;
    return m && U && re.insertBefore(r.createTextNode(U), re.childNodes[0] || null), yi === Mr ? Ke.call(_, vr ? "html" : "body")[0] : vr ? _.documentElement : re;
  }, _d = function(m) {
    const _ = w ? w(m) : m.ownerDocument;
    return ee.call(
      _ || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, lo = function(m) {
    return m = cs(m, ne, " "), m = cs(m, pe, " "), m = cs(m, he, " "), m;
  }, Va = function(m) {
    var _;
    m.normalize();
    const U = w ? w(m) : m.ownerDocument, Z = ee.call(
      U || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let re = Z.nextNode();
    for (; re; )
      re.data = lo(re.data), re = Z.nextNode();
    const de = (_ = m.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(m, "template");
    de && vi(de, (Oe) => {
      ki(Oe.content) && Va(Oe.content);
    });
  }, uo = function(m) {
    const _ = S ? S(m) : null;
    return typeof _ != "string" || He(_) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, ki = function(m) {
    if (!E || typeof m != "object" || m === null)
      return !1;
    try {
      return E(m) === Ft.documentFragment;
    } catch {
      return !1;
    }
  }, ns = function(m) {
    if (!E || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof E(m) == "number";
    } catch {
      return !1;
    }
  };
  function Er(H, m, _) {
    H.length !== 0 && vi(H, (U) => {
      U.call(t, m, _, bi);
    });
  }
  const Zb = function(m, _) {
    return !!(Yt && m.hasChildNodes() && !ns(m.firstElementChild) && lt(ep, m.textContent) && lt(ep, m.innerHTML) || Yt && m.namespaceURI === Mr && _ === "style" && ns(m.firstElementChild) || m.nodeType === Ft.processingInstruction || Yt && m.nodeType === Ft.comment && lt(tp, m.data));
  }, ek = function(m, _, U) {
    if (!lr[_] && Ad(_) && (De.tagNameCheck instanceof RegExp && lt(De.tagNameCheck, _) || De.tagNameCheck instanceof Function && De.tagNameCheck(_)))
      return !1;
    if (Ze && !Ut[_]) {
      const Z = k(m), re = y(m);
      if (re && Z) {
        const de = re.length;
        for (let Oe = de - 1; Oe >= 0; --Oe) {
          const Ge = m === U ? p(re[Oe], !0) : re[Oe];
          Z.insertBefore(Ge, g(m));
        }
      }
    }
    return un(m), !0;
  }, vd = function(m, _, U, Z) {
    return m.length === 0 ? _ : _ === U || _ === Z ? bt(_) : _;
  }, Md = function(m, _) {
    if (Er(P.beforeSanitizeElements, m, null), m !== _ && k(m) === null)
      return Pt && rs(m), !0;
    if (uo(m))
      return un(m), !0;
    const U = He(S ? S(m) : m.nodeName);
    if (Ae = vd(P.uponSanitizeElement, Ae, We, mi), Er(P.uponSanitizeElement, m, {
      tagName: U,
      allowedTags: Ae
    }), m !== _ && k(m) === null)
      return Pt && rs(m), !0;
    if (Zb(m, U))
      return un(m), !0;
    if (lr[U] || !(Jt.tagCheck instanceof Function && Jt.tagCheck(U)) && !Ae[U]) {
      const re = ek(m, U, _);
      return re === !1 && Er(P.afterSanitizeElements, m, null), re;
    }
    if ((E ? E(m) : m.nodeType) === Ft.element && !Yb(m) || (U === "noscript" || U === "noembed" || U === "noframes") && lt(_E, m.innerHTML))
      return un(m), !0;
    if (At && m.nodeType === Ft.text) {
      const re = lo(m.textContent);
      m.textContent !== re && (Mi(t.removed, {
        element: m.cloneNode()
      }), m.textContent = re);
    }
    return Er(P.afterSanitizeElements, m, null), !1;
  }, Ed = function(m, _, U) {
    if (ro[_] || Yt && _ === "patchsrc" || Yt && _ === "for" && m !== "label" && m !== "output" || _e && (_ === "id" || _ === "name") && (U in r || U in Wb))
      return !1;
    const Z = be[_] || Jt.attributeCheck instanceof Function && Jt.attributeCheck(_, m);
    if (!(Vr && lt(Xe, _))) {
      if (!(es && lt(yt, _))) {
        if (Z) {
          if (!ln[_]) {
            if (!lt(hi, cs(U, Qe, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && m !== "script" && Wf(U, "data:") === 0 && io[m])) {
                if (!(Pn && !lt(ie, cs(U, Qe, "")))) {
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
          !(Ad(m) && (De.tagNameCheck instanceof RegExp && lt(De.tagNameCheck, m) || De.tagNameCheck instanceof Function && De.tagNameCheck(m)) && (De.attributeNameCheck instanceof RegExp && lt(De.attributeNameCheck, _) || De.attributeNameCheck instanceof Function && De.attributeNameCheck(_, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && De.allowCustomizedBuiltInElements && (De.tagNameCheck instanceof RegExp && lt(De.tagNameCheck, U) || De.tagNameCheck instanceof Function && De.tagNameCheck(U)))
        ) return !1;
      }
    }
    return !0;
  }, tk = Te({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ad = function(m) {
    return !tk[ps(m)] && lt(Ua, m);
  }, rk = function(m, _, U, Z) {
    if ($ && typeof u == "object" && typeof u.getAttributeType == "function" && !U)
      switch (u.getAttributeType(m, _)) {
        case "TrustedHTML":
          return se(Z);
        case "TrustedScriptURL":
          return q(Z);
      }
    return Z;
  }, nk = function(m, _, U, Z) {
    try {
      U ? m.setAttributeNS(U, _, Z) : m.setAttribute(_, Z), uo(m) ? un(m) : jf(t.removed);
    } catch {
      wn(_, m);
    }
  }, Pd = function(m) {
    Er(P.beforeSanitizeAttributes, m, null);
    const _ = m.attributes;
    if (!_ || uo(m))
      return;
    be = vd(P.uponSanitizeAttribute, be, Et, Nn);
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: be,
      forceKeepAttr: void 0
    };
    let Z = _.length;
    const re = He(m.nodeName);
    for (; Z--; ) {
      const de = _[Z], Oe = de.name, Ge = de.namespaceURI, Nt = de.value, wt = He(Oe), Ha = Nt;
      let Ct = Oe === "value" ? Ha : oE(Ha);
      if (U.attrName = wt, U.attrValue = Ct, U.keepAttr = !0, U.forceKeepAttr = void 0, Er(P.uponSanitizeAttribute, m, U), Ct = U.attrValue, it && (wt === "id" || wt === "name") && Wf(Ct, Ue) !== 0 && (wn(Oe, m), Ct = Ue + Ct), Yt && lt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ct)) {
        wn(Oe, m);
        continue;
      }
      if (wt === "attributename" && Vf(Ct, "href")) {
        wn(Oe, m);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          wn(Oe, m);
          continue;
        }
        if (!no && lt(vE, Ct)) {
          wn(Oe, m);
          continue;
        }
        if (At && (Ct = lo(Ct)), !Ed(re, wt, Ct)) {
          wn(Oe, m);
          continue;
        }
        Ct = rk(re, wt, Ge, Ct), Ct !== Ha && nk(m, Oe, Ge, Ct);
      }
    }
    Er(P.afterSanitizeAttributes, m, null);
  }, fo = function(m) {
    let _ = null;
    const U = _d(m);
    for (Er(P.beforeSanitizeShadowDOM, m, null); _ = U.nextNode(); )
      if (Er(P.uponSanitizeShadowNode, _, null), Md(_, m), Pd(_), ki(_.content) && fo(_.content), (E ? E(_) : _.nodeType) === Ft.element) {
        const re = b(_);
        ki(re) && (Wa(re), fo(re));
      }
    Er(P.afterSanitizeShadowDOM, m, null);
  }, Wa = function(m) {
    const _ = [{
      node: m,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const U = _.pop();
      if (U.shadow) {
        fo(U.shadow);
        continue;
      }
      const Z = U.node, de = (E ? E(Z) : Z.nodeType) === Ft.element, Oe = y(Z);
      if (Oe)
        for (let Ge = Oe.length - 1; Ge >= 0; --Ge)
          _.push({
            node: Oe[Ge],
            shadow: null
          });
      if (de) {
        const Ge = S ? S(Z) : null;
        if (typeof Ge == "string" && He(Ge) === "template") {
          const Nt = Z.content;
          ki(Nt) && _.push({
            node: Nt,
            shadow: null
          });
        }
      }
      if (de) {
        const Ge = b(Z);
        ki(Ge) && _.push({
          node: null,
          shadow: Ge
        }, {
          node: Ge,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(H) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, U = null, Z = null, re = null;
    if (Fa = !H, Fa && (H = "<!-->"), typeof H != "string" && !ns(H) && (H = dE(H), typeof H != "string"))
      throw Ln("dirty is not a string, aborting");
    if (!t.isSupported)
      return H;
    gi ? (Ae = mi, be = Nn) : ja(m), (P.uponSanitizeElement.length > 0 || P.uponSanitizeAttribute.length > 0) && (Ae = bt(Ae)), P.uponSanitizeAttribute.length > 0 && (be = bt(be)), t.removed = [];
    const de = Pt && typeof H != "string" && ns(H);
    if (de) {
      Qb(H);
      const Nt = S ? S(H) : H.nodeName;
      if (typeof Nt == "string") {
        const wt = He(Nt);
        if (!Ae[wt] || lr[wt])
          throw co(H), Ln("root node is forbidden and cannot be sanitized in-place");
      }
      if (uo(H))
        throw co(H), Ln("root node is clobbered and cannot be sanitized in-place");
      try {
        Wa(H);
      } catch (wt) {
        throw co(H), wt;
      }
    } else if (ns(H))
      _ = Sd("<!---->"), U = _.ownerDocument.importNode(H, !0), U.nodeType === Ft.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? _ = U : _.appendChild(U), Wa(U);
    else {
      if (!I && !At && !vr && // eslint-disable-next-line unicorn/prefer-includes
      H.indexOf("<") === -1)
        return $ && X ? se(H) : H;
      if (_ = Sd(H), !_)
        return I ? null : X ? z : "";
    }
    _ && R && un(_.firstChild);
    const Oe = de ? H : _;
    try {
      const Nt = _d(Oe);
      for (; Z = Nt.nextNode(); )
        Md(Z, Oe), Pd(Z), ki(Z.content) && fo(Z.content);
    } catch (Nt) {
      throw de && (co(H), vi(t.removed, (wt) => {
        wt.element && rs(wt.element);
      })), Nt;
    }
    if (de)
      return vi(t.removed, (Nt) => {
        Nt.element && rs(Nt.element);
      }), At && Va(H), H;
    if (I) {
      if (At && Va(_), G)
        for (re = oe.call(_.ownerDocument); _.firstChild; )
          re.appendChild(_.firstChild);
      else
        re = _;
      return (be.shadowroot || be.shadowrootmode) && (re = te.call(n, re, !0)), re;
    }
    let Ge = vr ? _.outerHTML : _.innerHTML;
    return vr && Ae["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && lt(CE, _.ownerDocument.doctype.name) && (Ge = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + Ge), At && (Ge = lo(Ge)), $ && X ? se(Ge) : Ge;
  }, t.setConfig = function() {
    let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ja(H), gi = !0, mi = Ae, Nn = be;
  }, t.clearConfig = function() {
    bi = null, gi = !1, mi = null, Nn = null, $ = B, z = "";
  }, t.isValidAttribute = function(H, m, _) {
    bi || ja({});
    const U = He(H), Z = He(m);
    return Ed(U, Z, _);
  }, t.addHook = function(H, m) {
    typeof m == "function" && ut(P, H) && Mi(P[H], m);
  }, t.removeHook = function(H, m) {
    if (ut(P, H)) {
      if (m !== void 0) {
        const _ = iE(P[H], m);
        return _ === -1 ? void 0 : sE(P[H], _, 1)[0];
      }
      return jf(P[H]);
    }
  }, t.removeHooks = function(H) {
    ut(P, H) && (P[H] = []);
  }, t.removeAllHooks = function() {
    P = rp();
  }, t;
}
var AE = Vm();
function PE({ structureProtectionMode: e = "off" }) {
  const [t] = fe(), r = Q(void 0), [n, i] = ke(void 0), s = Se((o) => {
    r.current = o, i(o);
  }, []);
  return V(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = Om(p);
      if (!h)
        return !1;
      const g = N();
      return e === "protected" ? g && Vu(g, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const g = N(), y = r.current;
      if (y && g && Df(g, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const b = ae(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (b) {
            const T = b.getParent(), E = b.getPreviousSibling(), S = b.getNextSibling();
            b.remove(), E ? Im(E) : S && v(S) ? S.select(0, 0) : T?.selectStart();
          }
        } else y.kind === "selection" ? A(g) && (va(g), t.dispatchCommand(Jr, p === "deleteBackward")) : ft(b) && kM(b);
        return !0;
      }
      if (!g)
        return !1;
      const k = bM(g, p);
      if (k) {
        if (k.kind === "verse") {
          const b = rh();
          b.add(k.node.getKey()), nr(b);
        } else {
          const b = Yr();
          b.anchor.set(k.node.getKey(), 0, "element"), b.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), nr(b);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), h.preventDefault(), !0;
      }
      if (A(g) && !g.isCollapsed() && ju(g)) {
        const b = g.getNodes().filter(Ce).map((S) => S.getKey()), { anchor: T, focus: E } = g;
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
      return !h || !Kn(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const g = AE.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), k = xM(Hk(t, y)), b = N();
      return A(b) && b.insertNodes(k), h.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Kn(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && Kn(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Df(N(), p) || s(void 0);
      });
    };
    return Ie(
      t.registerCommand(Cr, o, Re),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(or, c, ye),
      t.registerCommand(zt, d, Re),
      t.registerCommand(th, c, Re),
      t.registerCommand(Dl, u, Re),
      t.registerCommand(Wn, c, Re),
      t.registerUpdateListener(f)
    );
  }, [t, e, s]), V(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const Kw = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function NE({ textDirection: e }) {
  const [t] = fe();
  return wE(t, e), null;
}
function wE(e, t) {
  V(() => (np(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && np(e, t);
  })), [e, t]);
}
function np(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function OE() {
  const [e] = fe();
  return RE(e), null;
}
function RE(e) {
  V(() => {
    if (!e.hasNodes([Me, Dt, Le, tt, _t]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ie(
      e.registerNodeTransform(tt, $E),
      e.registerNodeTransform(tt, (t) => qE(t, e)),
      e.registerNodeTransform(_t, ip),
      e.registerNodeTransform(Dt, ip),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(_t, (t) => {
        Ns(Qn("va"), t), Ns(Qn("vp"), t);
      })
    );
  }, [e]);
}
function $E(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || j(r) || F(n) || F(r) || Pe(n) || Pe(r) || ve(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  ve(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ue(e, me) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  je(n))
    return;
  if (Ce(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  Ce(r) && gu(e);
}
function qE(e, t) {
  const r = e.getParent();
  !ve(r) || !e.isAttached() || Hc(t, e.getKey()) && !Hc(t, r.getKey()) && r.insertAfter(e);
}
function ip(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Pe(t); )
    t = t.getLastChild();
  (F(t) || v(t) && Pe(t.getParent())) && e.insertBefore(Ne(" "));
}
function Pa(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !Hs(i)))
      return;
    const n = t.getParent();
    if (!n)
      return;
    if (!L(n) || !n.isInline())
      return e;
    t = n;
  }
}
function IE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function LE() {
  const e = N();
  if (!(!A(e) || !e.isCollapsed()))
    return Pa(IE(e.anchor));
}
function DE(e) {
  const t = N();
  let r;
  return A(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Wm(e.target)), r ? Pa(qe(r, j)) : void 0;
}
function Wm(e) {
  const t = Ek(e)?.anchorNode;
  if (Qp(t))
    return Hi(t) ?? void 0;
}
function UE(e) {
  if (N())
    return;
  const t = Wm(e);
  return t ? Pa(qe(t, j)) : void 0;
}
function sp(e) {
  const t = qe(e.getNode(), j);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function FE() {
  const e = N();
  if (!A(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = sp(t), i = sp(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const zE = 500;
function KE(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function BE() {
  const e = N();
  if (!A(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (L(n))
    return Pa(n.getChildAtIndex(t.offset));
}
function jE() {
  const [e] = fe(), t = Ku(LE), r = Q(void 0);
  return V(() => {
    const n = (i) => {
      St(Rt), Or(e, Rt), t(i);
    };
    return Ie(e.registerCommand(
      Cr,
      (i) => (r.current = KE(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      ye
    ), e.registerCommand(Kt, () => {
      if (r.current !== void 0 && performance.now() - r.current < zE) {
        const o = BE();
        if (o)
          return n(o), !1;
      }
      if (FE())
        return St(Rt), Or(e, Rt), !1;
      const s = UE(e.getRootElement());
      return s && n(s), !1;
    }, Vn), e.registerCommand(ca, (i) => {
      const s = DE(i);
      return s && n(s), !1;
    }, Vn));
  }, [e, t]), null;
}
function VE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = w_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return M(N_, { trigger: e, items: i });
}
function WE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = et(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? M(JE, { trigger: e, harness: i }) : M(VE, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const HE = [" ", "*"];
function GE(e, t) {
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
function JE({ trigger: e, harness: t }) {
  const [r] = fe(), [n, i] = ke(void 0), s = Q({ query: "", options: [] }), o = Q(0), a = Se((f, p, h) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = N();
      A(y) && y.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  V(() => Ie(r.registerCommand(Cr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), nh(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = N();
          A(y) && y.insertText(e);
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
  }, Re), r.registerCommand(ih, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Rr)), [r, e, t, n, a]);
  const c = Se(() => i(void 0), []), l = Se((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = Se((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), u = et(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    GE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && M(tm, { isOpen: !0, children: ({ placement: f }) => M(
    im,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? HE : void 0 },
    n.session
  ) });
}
function YE(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (r) => D.repeat(r.length));
}
function XE(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
function QE(e) {
  return e.replace(/ {2,}/g, " ");
}
let Go;
function ZE(e) {
  e && (Go = e);
}
function ol(e) {
  return eo(e);
}
function eA(e, t) {
  return e.isEmpty() ? Xp : Hm(e.toJSON(), t);
}
function Hm(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && fa(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Xp;
  if (r.some(VC)) {
    Go?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Gm(r), i = dr(n, t);
  return i ? { type: br, version: yr, content: i } : void 0;
}
function tA(e, t) {
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
function rA(e) {
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
function nA(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = tg(r, a, c), ze({
    type: Gt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function iA(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = tg(t, o, a), ze({
    type: _t.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function sA(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !ol(r) && t) {
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
function oA(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return ze({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function aA(e, t) {
  const { unknownAttributes: r } = e;
  return ze({ type: Pg, ...r, content: t });
}
function cA(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return ze({ type: Og, marker: r, ...n, content: t });
}
function lA(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return ze({
    type: $g,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function uA(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function dA(e, t) {
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
function Ni(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return ze({
    type: t,
    marker: r === "" ? void 0 : r,
    ...ug({ sid: n, eid: i, ...s }, o)
  });
}
function fA(e) {
  return e.text;
}
function pA(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return ze({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function hA(e) {
  const { marker: t } = e;
  return {
    type: $o,
    marker: t === "" ? void 0 : t
  };
}
function op(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function gA(e, t, r, n, i) {
  const s = kr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = Ni({
      type: s,
      marker: Oi,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = Ni({
      type: s,
      marker: Jn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = Ni({
      type: s,
      marker: Jn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Ni({
      type: s,
      marker: Oi
    });
    i.push(l);
  }
  (!n || !Oh(n)) && t.forEach((l) => {
    const d = Ni({
      type: s,
      marker: Oi,
      eid: l
    });
    i.push(d);
  });
}
function dr(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, p = a, h = a, g = a, y = a;
    switch (a.type) {
      case jt.getType():
        i.push(
          tA(
            l,
            dr(l.children, t)
          )
        );
        break;
      case Kr.getType():
        i.push(rA(a));
        break;
      case Gt.getType():
        i.push(
          nA(
            d,
            dr(d.children, t)
          )
        );
        break;
      case Dt.getType():
      case _t.getType():
        i.push(iA(a));
        break;
      case Me.getType():
        i.push(
          sA(
            u,
            dr(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case pt.getType():
        i.push(
          oA(
            f,
            dr(f.children, t)
          )
        );
        break;
      case ui.getType():
        i.push(
          aA(
            a,
            dr(a.children, t)
          )
        );
        break;
      case Yi.getType():
        i.push(
          cA(
            a,
            dr(a.children, t)
          )
        );
        break;
      case Xi.getType():
        i.push(
          lA(
            a,
            dr(a.children, t)
          )
        );
        break;
      case Le.getType(): {
        const k = dr(
          p.children,
          t,
          p.caller
        );
        i.push(
          dA(
            p,
            ol(t) && p.category === void 0 ? uA(k) : k
          )
        );
        break;
      }
      case rn.getType():
      case tn.getType():
      case mr.getType():
      case sh.getType():
      case jr.getType():
        break;
      case dt.getType():
        if (s = dr(
          g.children,
          t,
          r,
          n
        ), s) {
          const k = g.typedIDs[yn];
          if (k)
            gA(s, k, o, e[c + 1], i), o = k;
          else {
            const b = s.shift();
            b && (typeof b == "string" ? op(i, b) : i.push(b)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case kr.getType():
        i.push(Ni(a));
        break;
      case tt.getType():
        if (h.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Ws(h.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        h.text !== D && !h.text.startsWith(Kl) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        h[js]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || h.text !== Wt(r))) {
          let k = fA(h);
          ol(t) && (n && k.startsWith(D) && (k = k.slice(1)), k = QE(XE(k))), op(i, k);
        }
        break;
      case li.getType():
        i.push(
          pA(
            y,
            dr(y.children, t)
          )
        );
        break;
      case on.getType():
        i.push(hA(a));
        break;
      case Qi.getType():
        Go?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        Go?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Gm(e) {
  const t = e.findIndex((r) => fa(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Gm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const _o = {
  initialize: ZE,
  deserializeEditorState: eA
}, mA = /^sd\d*$/, yA = /* @__PURE__ */ new Set([
  ...Object.entries($c).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === x.Paragraph && !mA.test(e)
  ).map(([e]) => e),
  "qa"
]);
function bA(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Yl(i) || Qh(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!mT(i)) {
      t && Jo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Ql(i) && yA.has(i.marker) && !Jo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Jm(i.children, t).forEach((s) => {
      const o = kA(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = xA(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Jm(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Ym(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Oh(i)) {
      const s = Jm(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(ap(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [ap(i, c.nodes)] });
      });
      return;
    }
    t && Jo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function ap(e, t) {
  return { ...e, children: t };
}
function Ym(e) {
  return Kg(e) && e.number !== "";
}
function Jo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Ym(r) || Jo(r)) : !1;
}
function kA(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function xA(e) {
  return {
    type: qo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Ug
  };
}
const cp = Zm([]), TA = {
  type: sh.getType(),
  version: 1
};
let Gu = [], le, ni, Xm, It;
function CA(e, t) {
  Gu = [], vA(e), MA(t);
}
function SA(e = 0) {
}
function _A(e, t) {
  le = t ?? _a();
  let r;
  return e ? (e.type !== br && It?.warn(`This USJ type '${e.type}' didn't match the expected type '${br}'.`), e.version !== yr && It?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${yr}'.`
  ), e.content.length > 0 ? (r = ul(Hr(e.content)), Rs(le) && (r = bA(r, It))) : r = [cp]) : r = [cp], Xm?.(Gu), {
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
function vA(e) {
  e && (ni = e), e?.addMissingComments && (Xm = e.addMissingComments);
}
function MA(e) {
  e && (It = e);
}
function Qm() {
  return eo(le);
}
function EA(e, t) {
  let { marker: r } = e;
  r !== Ms && It?.warn(`Unexpected book marker '${r}'!`), r = r ?? Ms;
  const { code: n } = e;
  (!n || !jt.isValidBookCode(n)) && It?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  le?.markerMode === "editable" || le?.markerMode === "visible" ? i.push(
    $t("marker", Ve(r) + " " + n + D)
  ) : le?.hasGutterParaMarkers && i.push($t("marker", Ve(r) + D, !0)), i.push(...t);
  const s = Je(e, Jx);
  return ze({
    type: jt.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Lh
  });
}
function AA(e) {
  let { marker: t } = e;
  t !== wo && It?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? wo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Je(e, Yx);
  let a;
  le?.markerMode === "visible" && (a = !0);
  const c = [
    Mt(sr(t, r) ?? "")
  ];
  return le?.markerMode === "editable" && VA(i, s, c), le?.markerMode === "editable" ? ze({
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
    version: Uh
  }) : ze({
    type: Kr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: jh
  });
}
function PA(e) {
  let { marker: t } = e;
  t !== Oo && It?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Oo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (F_(le) ?? Dt).getType(), c = le?.markerMode === "editable" ? Jh : zg;
  let l, d;
  le?.markerMode === "editable" ? l = sr(t, r) : le?.markerMode === "visible" && (d = !0);
  const u = Je(e, lT);
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
function NA(e, t = [], r = !1) {
  let { marker: n } = e;
  Me.isValidMarker(n, ni?.extraValidMarkers) || It?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (le?.markerMode === "editable") {
    const [a] = t;
    Di(a) ? a.text = D + a.text : a && t.unshift(Mt(D));
  }
  t.length === 0 && t.push(Mt(ar)), al(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Je(e, Zx);
  return s || zA(n, o, i), s || cl(e.marker ?? "", i, !1, r), ze({
    type: Me.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Bh
  });
}
function Zm(e) {
  return {
    type: xn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Hh
  };
}
function wA(e, t = []) {
  let { marker: r } = e;
  pt.isValidMarker(r, ni?.extraValidMarkers) || It?.warn(`Unexpected para marker '${r}'!`), r = r ?? ir;
  const n = [];
  if (fi(le) && (le?.markerMode === "editable" ? n.push(
    vt(r),
    Mt(D, zr, "token")
  ) : (le?.markerMode === "visible" || le?.hasGutterParaMarkers) && n.push(
    $t(
      "marker",
      Ve(r) + D,
      le?.hasGutterParaMarkers
    )
  )), n.push(...t), Qm()) {
    const s = n.find(
      (o) => !nu(o) && !(Di(o) && o.text === D)
    );
    Di(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = Je(e, aT);
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
    version: Gh
  });
}
function Ju() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function OA(e, t = []) {
  const r = Je(e, fC);
  return ze({
    ...Ju(),
    type: ui.getType(),
    unknownAttributes: r,
    children: t,
    version: Ng
  });
}
function RA(e, t = []) {
  const r = Je(e, gC), n = e.marker ?? Bc, i = [];
  return le?.markerMode === "editable" ? i.push(
    vt(n),
    Mt(D, zr, "token")
  ) : (le?.markerMode === "visible" || le?.hasGutterParaMarkers) && i.push(
    $t(
      "marker",
      Ve(n) + D,
      le?.hasGutterParaMarkers
    )
  ), i.push(...t), ze({
    ...Ju(),
    type: Yi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Rg
  });
}
function $A(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? jc, a = Cg(o, i) ?? o;
  le?.markerMode === "editable" ? s.push(
    vt(a),
    Mt(D, zr, "token")
  ) : (le?.markerMode === "visible" || le?.hasGutterParaMarkers) && s.push(
    $t(
      "marker",
      Ve(a) + D,
      le?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Je(
    e,
    yC
  );
  return ze({
    ...Ju(),
    type: Xi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: qg
  });
}
function qA(e, t) {
  const r = CT(t);
  let n = () => {
  };
  return ni?.noteCallerOnClick && (n = ni.noteCallerOnClick), ze({
    type: mr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Gg
  });
}
function IA(e, t) {
  let { marker: r } = e;
  Le.isValidMarker(r, ni?.extraValidMarkers) || It?.warn(`Unexpected note marker '${r}'!`), r = r ?? Vl;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Su(le?.noteMode), a = Je(e, fx), c = le?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  le?.markerMode === "editable" ? (l = vt(r, "opening", !1, c), s || (d = vt(r, "closing"))) : le?.markerMode === "visible" && (l = $t("marker", Ve(r) + " "), s || (d = $t("marker", ct(r))));
  const u = [];
  let f;
  if (l && u.push(l), le?.markerMode === "editable" && !o)
    f = Mt(Wt(i), void 0, c), u.push(f), jA(n, u), u.push(...t);
  else {
    const p = Mt(D, zr, "token");
    f = qA(i, t), u.push(f, p, ...t.flatMap(LA(p)));
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
    version: _h
  });
}
function LA(e) {
  return (t) => Nh(t) ? [t] : [t, e];
}
function DA(e) {
  let { marker: t } = e;
  (!t || !kr.isValidMarker(t, ni?.extraValidMarkers)) && It?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Je(e, jl), s = dg(e);
  return ze({
    type: kr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Th
  });
}
function lp(e, t = []) {
  return {
    type: dt.getType(),
    typedIDs: { [yn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function UA(e, t) {
  const { marker: r } = e, n = e.type, i = Je(e, jx), s = [];
  if (le?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Sg(
      n,
      r,
      i
    );
    o && s.push($t("marker", o)), a && s.push($t("attribute", a)), s.push(...t), c && s.push($t("attribute", c)), l && s.push($t("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Di(o) && (o.mode = "token");
  }), ze({
    type: li.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: $h
  });
}
function FA(e) {
  return {
    type: on.getType(),
    marker: e,
    text: ys(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: le?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Eg
  };
}
function vt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: jr.getType(),
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
function Mt(e, t = void 0, r = "normal") {
  const n = {
    type: tt.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[js] = { textType: t }), n;
}
function $t(e, t, r = !1) {
  const n = {
    type: tn.getType(),
    text: t,
    textType: e,
    version: Ph
  };
  return r && (n[js] = { [Gl.key]: !0 }), n;
}
function qs(e, t) {
  return {
    type: rn.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: qh
  };
}
function al(e, t, r = !1) {
  le?.markerMode === "editable" ? t.push(vt(e, "opening", r)) : le?.markerMode === "visible" && t.push($t("marker", Ve(e, r)));
}
function cl(e, t, r = !1, n = !1) {
  le?.markerMode === "editable" ? r ? t.push(vt("", "selfClosing")) : t.push(vt(e, "closing", n)) : le?.markerMode === "visible" && t.push(
    $t(
      "marker",
      r ? ct("") : ct(e, n)
    )
  );
}
function zA(e, t, r) {
  if (le?.markerMode !== "editable" || !t) return;
  const n = wr(t, ua(e));
  n && r.push(Mt(n, "attribute"));
}
function up(e, t) {
  if (e.type !== "ms" || le?.markerMode !== "editable" && le?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Je(e, jl), o = fg(
    n,
    i,
    s,
    dg(e)
  ), a = wr(o, da(r ?? ""));
  if (!a) return;
  const c = D + a;
  le?.markerMode === "editable" ? t.push(Mt(c, "attribute")) : t.push($t("attribute", c));
}
function KA(e, t) {
  const r = e.marker ?? "";
  if (le?.markerMode === "editable") {
    const n = [];
    al(r, n), up(e, n), cl(r, n, !0), t.push(qs("milestone", n));
  } else
    al(r, t), up(e, t), cl(r, t, !0);
}
function dp(e, t, r) {
  t !== void 0 && r.push(
    qs(e, [
      vt(e, "opening"),
      Mt(D + t, "attribute"),
      vt(e, "closing")
    ])
  );
}
function BA(e, t) {
  le?.markerMode === "editable" && (dp("va", e.altnumber, t), dp("vp", e.pubnumber, t));
}
function jA(e, t) {
  e !== void 0 && t.push(
    qs("cat", [
      vt("cat", "opening"),
      Mt(D + e, "attribute"),
      vt("cat", "closing")
    ])
  );
}
function VA(e, t, r) {
  e !== void 0 && r.push(
    qs("ca", [
      vt("ca", "opening"),
      Mt(D + e, "attribute"),
      vt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    qs("cp", [
      vt("cp", "opening"),
      Mt(D + t, "attribute")
    ])
  );
}
function fp(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function WA(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function pp(e, t) {
  t.marker === Jn && t.sid !== void 0 && e.push(t.sid), t.marker === Oi && t.eid !== void 0 && WA(e, t.eid);
}
function ll(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [lp(o, [...n])] : o, c = e[i];
  pp(n, c);
  const l = ll(
    e.slice(i + 1, s),
    fp(t, i + 1),
    c.marker === Jn,
    n
  ), d = lp(l, [...n]), u = e[s];
  pp(n, u);
  const f = ll(
    e.slice(s + 1),
    fp(t, s + 1),
    u.marker === Jn,
    n
  );
  return [...a, d, ...f];
}
function Hr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(Mt(Qm() ? YE(i) : i));
    else if (!i.type)
      It?.error("Marker type is missing!");
    else
      switch (i.type) {
        case jt.getType():
          n.push(EA(i, Hr(i.content)));
          break;
        case Gt.getType():
          n.push(AA(i));
          break;
        case _t.getType():
          le?.hasSpacing || n.push(TA), n.push(PA(i)), BA(i, n);
          break;
        case Me.getType():
          n.push(
            NA(i, Hr(i.content, !0), t)
          );
          break;
        case pt.getType():
          n.push(wA(i, Hr(i.content)));
          break;
        case Le.getType():
          n.push(IA(i, Hr(i.content)));
          break;
        case kr.getType():
          Ch(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Gu?.push(i.sid)), n.push(DA(i)), KA(i, n);
          break;
        case on.getType():
          n.push(FA(i.marker ?? ""));
          break;
        case Pg:
          n.push(OA(i, Hr(i.content)));
          break;
        case Og:
          n.push(RA(i, Hr(i.content)));
          break;
        case $g:
          n.push($A(i, Hr(i.content)));
          break;
        default:
          It?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(UA(i, Hr(i.content)));
      }
  }), ll(n, r);
}
function ul(e) {
  const t = e.findIndex(
    (n) => Yl(n) || Qh(n) || Ql(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    hC(n)
  );
  if (t >= 0) {
    const n = ul(e.slice(0, t)), i = e[t], s = ul(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Kg(n)))
    return [Zm(e)];
  return e;
}
const xr = {
  initialize: CA,
  reset: SA,
  serializeEditorState: _A
};
function ey(e) {
  if (e && !O(e)) {
    if (v(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = ey(t);
        if (r) return r;
      }
  }
}
function HA() {
  const e = N();
  if (!A(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((v(t) && !O(t) ? ei(t) : void 0) && v(t)) {
      const i = Ne(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Ui(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = ey(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(D) ? D : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of ty(e)) {
    if (!ei(t)) continue;
    Ui(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(D) && r.setTextContent(n.slice(D.length));
  }
  return !0;
}
function ty(e) {
  const [t, r] = $l(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || O(a) || ue(a, me) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function ry(e) {
  let t = e;
  for (; F(t) || Pe(t); ) t = t.getParent();
  return t;
}
function ny(e) {
  const t = ry(e.getParent());
  return ft(t) ? t : void 0;
}
function GA() {
  const e = N();
  if (!A(e)) return !1;
  const t = e.focus.getNode();
  return ei(t) ? !!ny(t) : !1;
}
function iy(e) {
  const t = Ne(""), r = e.getNode(), n = e.offset;
  if (v(r))
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
    if (F(o)) Ui(t, { renderGlyphs: !0 });
    else if (!Pe(o) || !JA(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function JA(e, t) {
  const r = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (r.length === 0)
    return t.insertAfter(e), !0;
  const n = N();
  if (!A(n)) return !1;
  const i = t.insertNewAfter(n, !1);
  return i ? (i.append(...r), t.insertAfter(e), !0) : !1;
}
function sy(e) {
  const t = e.anchor.getNode();
  if (O(t) && !fu(t, e.anchor.offset)) {
    const r = t.getParent();
    if (F(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = N();
      return A(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function oy() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = sy(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!v(r) || O(r) || !ei(r)) return !1;
  const n = ny(r);
  if (!n) return !1;
  const { moving: i } = iy(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Pe(o); ) o = o.getFirstChild() ?? void 0;
  return F(o) ? ba(o) : s.select(0, 0), !0;
}
const ay = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Zh(Ye().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = og(e), r = yu(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = _T(0, o);
        const a = iS(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || vT(c) && ru(parseInt(n, 10), c);
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
function dl(e, t) {
  return Le.isValidMarker(e, t) || !!ay[e] || pt.isValidMarker(e, t) || Me.isValidMarker(e, t);
}
function YA(e, t) {
  return Me.isNoteContentMarker(e) ? !1 : Me.isValidMarker(e, t);
}
function cy(e, t, r, n, i, s) {
  const o = Yg(
    e,
    void 0,
    void 0,
    t,
    n ?? _a(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function fl(e, t, r, n, i, s, o) {
  if (Le.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = cy(
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
  const a = rP(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = N();
      A(d) && (pu(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = lf(u, xr, r), h = Ja(p);
      if (A(d)) {
        const g = d.anchor.getNode(), y = g.getParent(), k = ei(g), b = d.anchor.key === d.focus.key;
        if (F(h) && k && b && !Tc(h, o))
          ZA(
            d,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (F(h) && !b && !Tc(h, o) && eP(d))
          tP(d, h, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          nP(
            d,
            () => Ja(p)
          );
        else if (L(h) && !h.isInline()) {
          const T = d.insertParagraph();
          if (T) {
            const E = T.getChildren();
            h.append(...E), T.replace(h), ft(h) && pi(h) || h.selectStart();
          }
        } else if (F(h) && v(g) && !O(g) && F(g.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Tc(h, o)) {
          const T = g.getParent();
          if (F(T)) {
            const E = d.anchor.offset;
            if (E === 0) g.insertBefore(h);
            else if (E >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [w] = g.splitText(E);
              w.insertAfter(h);
            }
            h.getChildren().forEach((w) => {
              O(w) && w.setNested(!0);
            });
            const S = h.getChildren().find((w) => v(w) && !O(w));
            S && v(S) ? S.select(
              S.getTextContentSize(),
              S.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (v(g) && !O(g) && d.isCollapsed() && (j(y) || F(y) && j(y.getParent()))) {
          const T = F(y) ? y : void 0, E = T ? XA(g, d.anchor.offset) : [];
          let w = (T ?? g).insertAfter(h);
          if (Sr(h)) {
            const $ = {
              ...r || _a(),
              markerMode: "hidden"
            }, z = lf(
              u,
              xr,
              $
            ), B = Ja(z);
            w = w.insertAfter(B);
          }
          if (E.length > 0 && T) {
            const $ = Yo(T).append(...E);
            w.insertAfter($), T.isEmpty() && T.remove();
          } else v(w.getNextSibling()) || w.insertAfter(Ne(D));
          L(w) && w.selectEnd();
        } else if (d.insertNodes([h]), pP(h), f) {
          const T = rh();
          T.add(h.getKey()), nr(T);
        } else if (F(h)) {
          const T = h.getChildren().find((E) => v(E) && !O(E));
          T && v(T) ? T.select(
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
function XA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Tc(e, t) {
  return ((t ?? Io).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function QA(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(xt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function ZA(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && F(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !v(r)) {
    const o = e.anchor.offset;
    if (v(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else v(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = Vi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Ui(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !O(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function eP(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || F(n)) continue;
    if (!v(n) || n.getType() !== tt.getType() || ue(n, me) === "attribute") return !1;
    const i = SC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    ei(n) && (r = !0);
  }
  return r;
}
function tP(e, t, r) {
  const n = ty(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!ei(a)) return;
    Ui(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(D) && c.setTextContent(l.slice(D.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(D) || i.setTextContent(D + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !O(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function rP(e, t) {
  let r = ay[e];
  return r || (pt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: pt.getType(), marker: e, content: [] }] })
  } : Me.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: Me.getType(), marker: e };
      return (Me.isValidFootnoteMarker(e) || Me.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function nP(e, t) {
  const r = e.getNodes(), [n, i] = Vi(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = ly(
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
    s || (s = t(), c.insertBefore(s), l = !0, F(s) && s.getChildren().some((u) => O(u) && u.getMarkerSyntax() === "opening") && QA(s, F(s.getParent()))), sP(c, s, l);
  }), (v(s) || L(s)) && s.selectEnd();
}
function Vi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Yu(e) {
  return Pe(e) || j(e) || j(e.getParent());
}
function ly(e, t, r, n, i) {
  if (!Yu(e)) {
    if (v(e))
      return iP(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function iP(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function sP(e, t, r) {
  if (v(t)) {
    const n = pl(e, t);
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
    pl(e, t), r && F(t) && t.getChildren().some((s) => O(s)) && v(e) && !O(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function pl(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    gu(n), v(n) || t.insertBefore(Ne(" "));
  }
  return r;
}
function uy(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = ii(d, t);
    if (!f) return !1;
    const p = v(d) ? d.getTextContentSize() : 0;
    if (hp(f, r), v(d) && d.isAttached()) {
      const h = d.getTextContentSize(), g = Math.max(p - h, 0), y = Math.max(0, Math.min(u - g, h)), k = N();
      A(k) && k.setTextNodeRange(d, y, d, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Vi(e);
  if (!Qu(n, t, s, o)) return !1;
  const a = Xu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = ii(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = hy(u, a);
    f && (hp(f, r), l = !0);
  }), gy(a, i), l;
}
function hp(e, t) {
  e.getChildren().forEach((n) => {
    Lt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === ar) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    v(n) && i.startsWith(D) && n.setTextContent(i.slice(D.length));
  }), wc(e);
}
function Xu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = ly(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    v(o) && n.push(o);
  }), n;
}
function ii(e, t) {
  let r = e, n;
  for (; r && !ft(r); ) {
    if (j(r)) return;
    !n && F(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function dy(e) {
  const t = qe(
    e,
    (r) => j(r) || ft(r)
  );
  return j(t);
}
function fy(e) {
  return e.filter(
    (t) => !Yu(t) && (v(t) || L(t) && t.isInline())
  );
}
function oP(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || Yu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function aP(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !py(n, r)
  );
}
function Qu(e, t, r, n, i) {
  const s = fy(e), o = oP(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ii(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !aP(l, s, o);
  });
}
function py(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Lt(r));
}
function hy(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (L(d) && t.some((u) => d.isParentOf(u))) {
      if (!py(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Lt(n[s - 1]) && (s -= 1), o < n.length - 1 && Lt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(Yo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(Yo(e).append(...c)), e;
}
function Yo(e) {
  return Ak(e);
}
function gy(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!A(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function cP(e, t, r) {
  if (e.isCollapsed()) {
    const l = ii(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Hd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Vi(e);
  if (!Qu(n, r, i, s, t)) return !1;
  const o = Xu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = ii(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = hy(d, o);
    u && (Hd(u, t), c = !0);
  }), c;
}
function lP(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = Vi(e);
  if (!!!i?.some(
    (y) => Qu(s, y, o, a)
  ) && !uP(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = N();
    A(k) && uy(k, y, n) && (l = !0);
  });
  const d = N();
  if (!A(d)) return l;
  const u = d.isBackward(), [f, p] = Vi(d), h = Xu(
    d.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (y) => !dy(y) && !ii(y, t)
  );
  return g.length > 0 && (dP(g).forEach((y) => fP(y, t)), l = !0), gy(h, u), l;
}
function uP(e, t) {
  return fy(e).some(
    (r) => !dy(r) && !ii(r, t)
  );
}
function dP(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function fP(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => F(a) && a.getMarker() === t
  ), s = i ? Yo(i) : Qr(t);
  e[0].insertBefore(s), s.append(...e), i === r || pl(e[0], s);
}
function pP(e) {
  Ce(e) && (gu(e.getPreviousSibling()), jg(e.getNextSibling()));
}
const my = {
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
}, gp = "psc-active-text", bo = "psc-empty-text";
function hP({ viewOptions: e }) {
  const [t] = fe(), r = Q(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return V(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(gp), r.current = o, o && t.getElementByKey(o)?.classList.add(gp);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        ca,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${bo}`);
          if (!c) return !1;
          const l = Hi(c);
          if (!Ce(l)) return !1;
          const d = l.getParent();
          if (!L(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        kt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = Cc(), f = gP(), p = [], h = [];
          return Ye().getChildren().forEach((g) => {
            if (!L(g)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = yP(g);
            p.push(...y), h.push(...k);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(bo) : t.getElementByKey(u)?.classList.add(bo);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(bo));
      }),
      t.registerCommand(
        Ul,
        () => (i(void 0), !1),
        kt
      ),
      t.registerCommand(
        oh,
        () => {
          const o = t.getEditorState().read(Cc);
          return o !== r.current && i(o), !1;
        },
        kt
      )
    ];
    return i(t.getEditorState().read(Cc)), Ie(...s);
  }, [t, n]), null;
}
function Cc() {
  return mP(N() ?? void 0)?.getKey();
}
function gP() {
  const e = N();
  if (!A(e)) return;
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
    Ce(s[a]) && (o = s[a].getKey());
  return o;
}
function mP(e) {
  if (A(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function yP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Ce(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Ce(c)) break;
      if (!(Bt(c) || O(c)) && c.getTextContent().replaceAll(Eo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function hl(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function yy(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !Zp(e, n, i);
}
function by(e, t) {
  return e.length <= t ? e : e.slice(0, Zu(e, t));
}
function Zu(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of $k(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const bP = 16;
function kP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (b) => t ? ed(b, t).length : b.getTextContent().length;
  r ??= n;
  const i = N();
  if (!A(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = Xo(s), l = Xo(o), d = i.getNodes(), u = new Map(d.map((b) => [b.getKey(), CP(b)])), f = d.length > 0 ? u.get(d[0].getKey()) : void 0, p = f && xP(s, f) ? f : void 0, h = (b) => {
    const T = b > 0 ? TP(d, u, p, c, l, b, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), T ? i.focus.set(T.node.getKey(), T.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!T;
  };
  let g = Math.min(e, n(i));
  if (h(g) && r(i) <= e) return !0;
  let y = 0, k = 0;
  g -= 1;
  for (let b = 0; b < bP && y <= g; b++) {
    const T = Math.floor((y + g) / 2);
    h(T) && r(i) <= e ? (k = T, y = T + 1) : g = T - 1;
  }
  return h(k), !0;
}
function gl(e) {
  return e.isToken() || Zs(e) || Fe(e.getParent());
}
function xP(e, t) {
  const r = L(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && hr(r.getKey(), 0, "text").isBefore(e);
}
function TP(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, d, u;
  const f = /* @__PURE__ */ new Map(), p = (g) => {
    const y = t.get(g.getKey());
    return y && r?.is(y) ? void 0 : y;
  }, h = (g) => {
    let y = u ? u.endBefore : g;
    for (; ; ) {
      const k = SP(y, e, n);
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
      if (l = !1, v(y)) {
        const b = g === 0 ? n : 0, T = g === a ? i : y.getTextContentSize(), E = T - b, S = gl(y);
        if (S && c + E > s) return h(d);
        if (!S && c + E >= s) {
          const w = Zu(y.getTextContent(), b + (s - c));
          return h({ node: y, offset: Math.max(b, w) });
        }
        c += E, d = { node: y, offset: T };
      } else if (ai(y) || oi(y)) {
        const b = y.getTextContentSize();
        if (c + b > s) return h(d);
        c += b;
      }
    }
  }
  return h(d);
}
function CP(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (j(r) || qu(r)) && (t = r);
  return t;
}
function SP(e, t, r) {
  if (!e) return e;
  const n = qe(e.node, (y) => L(y) && !y.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((y) => y.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let y = o; y <= a; y++)
    l.push(c.length), c += i[y].getTextContent();
  const d = l[s - o], u = d + e.offset, f = Zu(c, u);
  if (f === u) return e;
  const p = (y) => t[0]?.is(y) ?? !1;
  if (gl(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= d) {
    const y = f - d;
    return y >= (p(e.node) ? r : 0) ? { ...e, offset: y } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((y) => y.is(h))) return;
  if (gl(h))
    return { node: h, offset: p(h) ? r : 0 };
  const g = f - l[0];
  return g >= (p(h) ? r : 0) ? { node: h, offset: g } : void 0;
}
function ed(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, d) => {
    if (!t(l)) {
      if (L(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, v(l)) {
        const u = l.getTextContent();
        o ? a += u : a += u.slice(
          d === 0 ? Xo(i) : 0,
          d === n ? Xo(s) : u.length
        );
      } else (ai(l) || oi(l)) && (d !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function ml(e) {
  const t = e.getParent();
  return !!t && qe(t, (r) => j(r) && !!r.getIsCollapsed()) !== null;
}
function ky(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    Tt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), L(i)) for (const { node: s } of ci(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function _P(e) {
  return e.getNodes().some(
    (t) => ai(t) || j(t) || Ce(t) || rt(t) || qu(t)
  );
}
function Xo(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const _r = String.raw`\w-`, xy = "a-z0-9", vP = `[a-z][${xy}]*`, MP = new RegExp(
  String.raw`^\\(\+?[${_r}]+)[ \u00A0]$`
), Ty = new RegExp(String.raw`^\\(\+?[${_r}]+)$`), EP = new RegExp(String.raw`^\\\+?[${_r}]*\*$`), AP = new RegExp(
  String.raw`^\\(\+?[${_r}]+)(?:[ \u00A0]|$)`
), PP = new RegExp(
  String.raw`^\\(\+?)([${_r}]+)`
), NP = new RegExp(
  String.raw`\\\+?[${_r}]+(?:\\?\*|[ \u00A0])`
), wP = new RegExp(
  String.raw`\\\+?[${_r}]*$`
), OP = new RegExp(
  String.raw`^\\(${vP})( |$)`
), RP = new RegExp(
  String.raw`\\[${xy}+*]*$`,
  "i"
);
function Cy(e) {
  const t = e.getParent();
  if (!j(t) || t.getIsCollapsed() !== !1 || !yh(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!O(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const Qo = "usfm:", Sy = "usfmopen", _y = "usfmclosed";
function $P(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const qP = new RegExp(
  [Qo, Sy, _y].map($P).join("|")
), IP = "\uFEFF", LP = /^usfm_(.+)$/;
function DP(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function UP(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function FP(e) {
  return e.startsWith(Qo) ? UP(e.slice(Qo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function vy(e) {
  for (const t of e.classList) {
    const r = LP.exec(t);
    if (r) return r[1];
  }
}
function zP(e) {
  const t = vy(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function KP(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(Qo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Sy) && !n.contains(_y)) && vy(r) !== void 0)
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
    r.push(FP(e.nodeValue ?? ""));
    return;
  }
  if (!DP(e)) return;
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? zP(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function BP(e) {
  if (!qP.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !KP(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => My(n, !1, r)), r.join("").replaceAll(IP, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function jP(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ue(e, me);
  if (r === "attribute" || r === zr || Cy(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Fe(o) || ve(o)) return;
  const n = t.startsWith(D) && F(e.getParent()), i = n ? t.slice(1) : t, s = (n ? D : "") + i.replace(/ (?=[ \u00A0])/g, D).replace(new RegExp("(?<=\\u00A0) ", "g"), D);
  s !== t && e.setTextContent(s);
}
function VP(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function WP(e, t) {
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
function yl(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? BP(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(VP(s)) : ""),
    isInternal: WP(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const mp = String.raw`\\(?:\+?[${_r}]+\*?|\*)`, HP = new RegExp(
  String.raw`(?<=${mp})\u00A0|\u00A0(?=${mp})`,
  "g"
);
function td(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(HP, " ").replaceAll(D, "~");
}
const Ey = new RegExp(
  String.raw`\\c(?![${_r}])[ \u00A0]*[^\s\\]*`,
  "g"
), Ay = new RegExp(String.raw`\\id(?![${_r}])[^\n\\]*`, "g"), GP = new RegExp(
  String.raw`^(?:${Ey.source}|${Ay.source})`
);
function rd(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Ey, "").replace(Ay, "");
    return GP.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function bl(e) {
  if (v(e) && ue(e, me) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (je(t)) return !0;
  return !1;
}
function JP(e) {
  return bl(e.anchor.getNode()) || bl(e.focus.getNode());
}
function YP(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && bl(t.getNode());
}
function XP(e, t) {
  const n = YP(e) ? t : td(rd(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function QP(e, t = !1, r = () => {
}) {
  const n = yl(e, bn()._config.namespace);
  if (!n) return !1;
  const i = N(), s = A(i) && JP(i);
  if (!s && n.isInternal || t && A(i) && Kn(i))
    return !1;
  const { text: o } = n;
  if (!o || !A(i)) return !1;
  if (e?.preventDefault(), s)
    return XP(i, o), !0;
  const a = td(rd(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = bn();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(Gn, void 0), d === "") return;
    const f = N();
    A(f) && f.insertText(d);
  }), !0;
}
function ZP(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return j(t) ? !Tt(e.getPreviousSibling()) : !1;
}
function e1(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const r = e.getParent();
  if (!j(r) || !Tt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function t1(e) {
  const t = e.getParent();
  return (j(t) ? t.getCaller() : void 0) || Cs;
}
function r1(e) {
  const t = e.getParent();
  return !t || Cn(t) === void 0;
}
function nd(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = $l(e);
  let l = "", d = !0;
  for (const u of t) {
    if (L(u) && !u.isInline()) {
      !d && r1(u) && (l += `
`), d = !u.isEmpty();
      continue;
    }
    if (d = !1, Tt(u))
      (u !== n || !e.isCollapsed()) && (l += (u === r ? "" : " ") + t1(u));
    else if (v(u)) {
      let f = u.getTextContent();
      u === r ? u === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : u === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += ZP(u) ? "" : f.replaceAll(D, " ") + e1(u, u === n);
    } else (ai(u) || oi(u)) && (u !== n || !e.isCollapsed()) && (l += u.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function Py(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function n1(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => Ee(r) || Fe(r)
    )
  );
}
function i1(e) {
  const t = N();
  if (!A(t) || t.isCollapsed()) return;
  const r = nd(t), n = {
    "text/plain": r,
    "text/html": Py(r)
  };
  if (to() || n1(t)) return n;
  const i = Ik(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function yp(e, t, r, n) {
  const i = N();
  if (!A(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Cm();
  const s = i1(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], Ny(e, t, i, s, r, n)) : !1;
}
function Ny(e, t, r, n, i, s) {
  const o = hl(s);
  if (o !== void 0 && yy(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), kl(e, t, { "text/plain": by(a, o) })) : kl(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function kl(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || qk(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function xl(e, t) {
  const r = Cu();
  if (!r?.end) return;
  const n = s1(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = Sa(r);
        return i ? nd(i) : void 0;
      },
      { editor: n.editor }
    );
}
const Sc = /* @__PURE__ */ new WeakMap();
function s1(e, t) {
  const r = e.getEditorState();
  if (Sc.has(r)) {
    const i = Sc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = o1(r, t);
  return Sc.set(r, n), n;
}
function o1(e, t) {
  const r = Ru(Nu);
  if (!r) return;
  const n = _o.deserializeEditorState(e, t);
  if (!n) return;
  const i = Pk({
    namespace: "markers-view-copy",
    nodes: [dt, ...Eu],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    xr.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function a1({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = fe();
  return V(() => {
    const n = (i, s) => {
      const o = N();
      if (!A(o) || o.isCollapsed()) return !1;
      const a = xl(r, e);
      return a === void 0 ? !1 : Ny(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": Py(a) },
        s,
        t
      );
    };
    return Ie(
      r.registerCommand(Hn, (i) => n(i, !1), Re),
      r.registerCommand(or, (i) => n(i, !0), Re)
    );
  }, [r, e, t]), null;
}
const bp = /* @__PURE__ */ new WeakMap();
function c1({
  limit: e,
  viewOptions: t
}) {
  const [r] = fe(), n = Q(hl(e)), i = Q(t), s = Q(!1), o = Q(void 0);
  return V(() => {
    n.current = hl(e), i.current = t, o.current?.();
  }, [e, t]), V(() => {
    let a, c;
    const l = (k) => {
      const b = n.current;
      if (b === void 0) return;
      const T = bp.get(k);
      if (k.defaultPrevented && T === void 0) return;
      const E = r.getRootElement();
      if (!E) return;
      const S = E.ownerDocument.getSelection();
      if (!S || !d1(S, E)) return;
      k.preventDefault();
      const w = by(
        T ?? S.toString().replaceAll(D, " "),
        b
      );
      bp.set(k, w);
      const $ = k.clipboardData;
      if ($) {
        if (!w) {
          T !== void 0 && $.clearData();
          return;
        }
        $.setData("text/plain", w);
      }
    }, d = (k) => {
      n.current !== void 0 && hn(k, "a", { ctrlKey: !Nr, metaKey: Nr }) && (p1(c?.activeElement, r.getRootElement()) || k.preventDefault());
    }, u = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", d, !0), c = void 0;
    }, f = () => {
      const k = n.current === void 0 ? void 0 : a;
      k !== c && (u(), c = k, c?.addEventListener("copy", l), c?.addEventListener("keydown", d, !0));
    };
    o.current = f;
    const p = (k) => (k?.preventDefault(), !0), h = (k) => {
      const b = n.current;
      if (b === void 0 || (s.current = !1, yy(r, k))) return !1;
      if (b <= 0) return p(k);
      const T = N();
      if (aa(T))
        return T.getTextContent().length + ky(T.getNodes()) <= b ? !1 : p(k);
      if (!A(T) || T.isCollapsed()) return !1;
      const E = l1(r, i.current);
      return E.$size(T) <= b ? !1 : (kP(b, E.options), T.isCollapsed() ? p(k) : (r.isEditable() || nh(() => u1(r)), s.current = !0, !1));
    }, g = (k, b) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const T = N();
      if (!A(T) || T.isCollapsed()) return !1;
      const E = b && r.isEditable() && !_P(T);
      return kl(
        k && typeof k == "object" && "clipboardData" in k ? k : null,
        r,
        { "text/plain": ed(T, ml) },
        E ? () => T.removeText() : void 0
      );
    }, y = Ie(
      r.registerCommand(Hn, h, ye),
      r.registerCommand(or, h, ye),
      r.registerCommand(
        Hn,
        (k) => g(k, !1),
        Rr
      ),
      r.registerCommand(
        or,
        (k) => g(k, !0),
        Rr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        Nk,
        (k) => n.current === void 0 ? !1 : (k?.preventDefault(), !0),
        ye
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
function l1(e, t) {
  if (eo(t)) {
    const n = (i) => nd(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && xl(e, r) !== void 0) {
    const n = (i) => xl(e, r)?.length ?? ed(i, ml).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + ky(n.getNodes()),
    options: { $isHidden: ml }
  };
}
function u1(e) {
  e.getEditorState().read(() => {
    const t = N(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!A(t) || !r) return;
    const n = kp(e, t.anchor), i = kp(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function kp(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = wk(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = L(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function d1(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const f1 = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function p1(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? f1.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const h1 = /^\+/;
function id(e, t) {
  const r = t.replace(h1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function wy(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Oy(e, t) {
  return wy(e, t) !== void 0;
}
function Tl(e, t) {
  const r = wy(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Zo(e, t, r) {
  const n = L(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function g1(e, t, r, n, i) {
  const s = id(n, t);
  if (!s) {
    Zo(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Zo(e, "invalid", i);
}
function $i(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (F(s)) {
      const o = s.getMarker();
      i || g1(s, o, t, r, n), $i(s, t, r, n, i || o === "xq");
    } else if (Ce(s)) {
      if (i) continue;
      const o = id(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? $i(s, s.getMarker(), r, n, i) : ve(s) || L(s) && $i(s, t, r, n, i);
}
function m1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = id(e, a);
    if (!c) {
      Zo(o, "unknown", r), Tl(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Tl(n, l) || Zo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ye().getChildren())
    ve(o) || (Ee(o) ? (i(o, o.getMarker()), s(o) && $i(o, void 0, e, r, !1)) : rt(o) ? i(o, o.getMarker()) : ge(o) ? (i(o, o.getMarker()), s(o) && $i(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && $i(o, "p", e, r, !1));
  return r;
}
function y1(e) {
  return !!e?.includes("(basic)");
}
function b1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Ry(e, t) {
  return !e.startsWith("zpa") && e !== "c" && dl(e, t);
}
function sd(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function $y(e, t) {
  const r = [];
  for (const n of t) {
    const i = sd(e, n);
    i && Tl(r, i);
  }
  return r;
}
function vo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: b1(e.description),
    isBasic: y1(e.description)
  };
}
function k1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Cl(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : k1(e.marker, t.marker);
}
function Sl(e, t, r) {
  if (t.noteMarker) return [];
  const n = $y(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Ry(i.marker, r)
  ).filter((i) => {
    const s = sd(e, i.marker);
    return s !== void 0 && Oy(n, s);
  }).map((i) => vo(i, "paragraph")).sort(Cl);
}
function x1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Ry(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => vo(c, "character")).sort(Cl);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => vo(c, "character")),
    ...a.map((c) => vo(c, "note"))
  ].sort(Cl);
}
function T1(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function C1(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function S1(e, t, r) {
  return [
    ...T1(e, t.openCharMarkers),
    ...x1(e, t, r)
  ].sort(C1);
}
function _1(e, t, r) {
  if (t.source === "paragraph") return Sl(e, t, r);
  const n = S1(e, t, r);
  return n.length > 0 ? n : Sl(e, t, r);
}
function v1(e, t, r) {
  const n = Sl(e, t, r), i = $y(e, t.previousParaMarkers), s = sd(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Oy(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const gt = "￼";
function qy(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== gt ? e.slice(1) : e;
}
function xp(e) {
  return nu(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Iy(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = xr.serializeEditorState(
    {
      type: br,
      version: yr,
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
  for (; xp(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Wt(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && xp(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function Ly(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function Dy(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([d]) => d !== "closed")
  ), o = xr.serializeEditorState(
    {
      type: br,
      version: yr,
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
function Uy(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = xr.serializeEditorState(
    { type: br, version: yr, content: [s, ...r] },
    n
  ).root.children;
  if (!Yl(o)) return { failure: "shape" };
  const c = ig(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function ko(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function us(e, t) {
  wP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += gt;
}
function rr(e) {
  return e.replaceAll(D, " ");
}
function M1(e, t, r = !1) {
  if (eo(t)) return rr(e);
  if (e === D) return " ";
  const n = r && e.startsWith(D), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(D, "~");
}
function ks(e) {
  const t = e.getTextContent();
  return Br(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function od(e, t) {
  const r = e[t];
  if (!st(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ga(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Fy(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function ad(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Es(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function cd(e) {
  return !!e.getUnknownAttributes();
}
function Na(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && Hl(e);
}
function ld(e, t) {
  return st(e) ? !Na(e.getMarker(), t) : j(e) || ve(e) ? !0 : Be(e) ? cd(e) : F(e) ? zy(e, t) : !1;
}
function zy(e, t) {
  if (qT(e)) return !0;
  const r = e.getMarker();
  return Cx(r) || t(r) !== void 0 || E1(e) && !A1(e) ? !1 : !P1(e);
}
function E1(e) {
  const t = e.getParent();
  return t !== null && Vt(t) !== void 0;
}
function A1(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function P1(e) {
  const t = e.getChildren().filter((i) => O(i) && i.getMarker() === e.getMarker()).filter(O);
  if (t.some((i) => !nn(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const er = "", tr = "";
function Tp(e) {
  return e.flatMap((t) => je(t) ? t.getChildren() : [t]);
}
function hs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (st(s)) {
      const o = od(e, i);
      Na(s.getMarker(), r) && Fy(o) ? (t.push(
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
      ), hs(Tp(o), t, r), t.push(tr)) : t.push(gt), i += o.length;
    } else if (Be(s)) {
      const o = ad(e, i);
      cd(s) ? t.push(gt) : (t.push(
        er,
        "verse",
        rr(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), hs(Tp(o), t, r), t.push(tr)), i += o.length;
    } else O(s) ? t.push(er, "marker", rr(s.getTextContent()), tr) : an(s) ? t.push(er, "unmatched", rr(s.getTextContent()), tr) : ld(s, r) ? t.push(gt) : oi(s) ? t.push(" ") : v(s) ? t.push(
      rr(
        n ? qy(ks(s)) : ks(s)
      )
    ) : F(s) ? (t.push(er, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), hs(s.getChildren(), t, r, !0), t.push(tr)) : L(s) ? (t.push(er, s.getType()), hs(s.getChildren(), t, r), t.push(tr)) : t.push(gt);
  }
}
function Lr(e, t) {
  const r = [];
  return hs(e, r, t), r.join("");
}
function Dr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function Wi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function ud(e) {
  return e.type ?? "";
}
function Ky(e, t, r) {
  return t === "closing" ? ct(e, r) : t === "selfClosing" ? ct("") : Ve(e, r);
}
function _c(e, t) {
  const r = e[t];
  if (!(!r || ud(r) !== "attribute-run"))
    return Dr(r) ?? [];
}
function Ur(e, t) {
  const r = [];
  return gs(e, r, t), r.join("");
}
function gs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = ud(s);
    if (o === "ms") {
      const l = s, d = _c(e, i + 1);
      d && Na(l.marker ?? "", r) ? (t.push(
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
      ), gs(d, t, r), t.push(tr), i += 1) : t.push(gt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(gt);
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
      let d = 0, u = _c(e, i + 1 + d);
      for (; u; )
        gs(u, t, r), d++, u = _c(e, i + 1 + d);
      t.push(tr), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        er,
        "marker",
        rr(
          Ky(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(er, "char", JSON.stringify(l.unknownAttributes ?? null)), gs(Dr(s) ?? [], t, r, !0), t.push(tr);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(gt);
      continue;
    }
    if (o === "unmatched") {
      t.push(er, "unmatched", rr(Wi(s) ?? "")), t.push(tr);
      continue;
    }
    const a = Wi(s);
    if (a !== void 0) {
      t.push(rr(n ? qy(a) : a));
      continue;
    }
    const c = Dr(s);
    c ? (t.push(er, o), gs(c, t, r), t.push(tr)) : t.push(gt);
  }
}
function _n(e) {
  let t = 0;
  for (const r of e) {
    const n = Dr(r);
    if (n) {
      t += _n(n);
      continue;
    }
    const i = Wi(r);
    if (i !== void 0)
      for (const s of i) s === gt && t++;
  }
  return t;
}
function Is(e, t, r, n, i) {
  vn(e.getChildren(), t, r, n, i);
}
function vn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      ko(t, a, rr(a.getTextContent()));
    else if (st(a)) {
      s();
      const c = od(e, o);
      Na(a.getMarker(), r) && Fy(c) ? vn(c, t, r, n) : us(t, [a, ...c]), o += c.length;
    } else if (j(a) || ve(a))
      s(), us(t, [a]);
    else if (Be(a)) {
      s();
      const c = ad(e, o);
      cd(a) ? us(t, [a, ...c]) : (ko(t, a, rr(ks(a))), vn(c, t, r, n)), o += c.length;
    } else if (F(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && zy(a, r) ? us(t, [a]) : Is(a, t, r, n, { pending: !0 });
    else if (oi(a))
      s(), ko(t, a, " ");
    else if (v(a)) {
      const c = Br(a) || ue(a, me) === "attribute", l = s() && !c;
      ko(
        t,
        a,
        c ? rr(ks(a)) : M1(ks(a), n, l)
      );
    } else L(a) ? Is(a, t, r, n, i) : (s(), us(t, [a]));
  }
}
function By(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (ve(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Is(e, i, t, r), i;
}
function wa(e, t, r, n) {
  for (const i of t) {
    const s = By(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Oa(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(gt);
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
function Ls(e, t = []) {
  for (const r of e)
    Be(r) ? t.push(r) : L(r) && Ls(r.getChildren(), t);
  return t;
}
function Ra(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === gt && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function cn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === gt && t++;
    else r.content && (t += cn(r.content));
  return t;
}
function N1(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), L(s) && Is(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const Ds = /\s/;
function jy(e) {
  return e.filter($a).length;
}
function $a(e) {
  if (e.isSentinel) return !1;
  const t = ae(e.key);
  return v(t) && !O(t) && ue(t, me) === "attribute";
}
function w1(e) {
  if (e.isSentinel) return !1;
  const t = ae(e.key);
  return O(t) || $a(e);
}
function Cp(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && $a(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      Ds.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function O1(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !L(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = ae(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function qa(e, t, r, n) {
  const { key: i, offset: s } = O1(
    e,
    t,
    r,
    n
  ), o = Cp(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !w1(a) ? Cp(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: jy(t.spans) };
}
function vc(e) {
  if (e.isSentinel) return !1;
  const t = ae(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function R1(e) {
  const t = ae(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return F(r) ? (r.selectNext(0, 0), !0) : !1;
}
function $1(e) {
  const t = ae(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Be(t) ? ad(r, n) : st(t) ? od(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Vy(e, t, r) {
  const { text: n, spans: i } = e, s = jy(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && !vc(u);
    if (!(o && $a(u))) {
      if (d) {
        if (!p) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let h = 0; h < f; h++) {
        const g = n[u.start + h];
        if (c === 0 && (l === 0 || !Ds.test(g))) {
          if (p) {
            a = { key: u.key, offset: h };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? Ds.test(g) || c-- : l--;
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
    if (u && vc(u) && R1(u) || u?.isSentinel && $1(u)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !vc(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const u = ae(a.key);
    if (u && v(u)) {
      u.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function Wy(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    Vy(
      N1(e, n, i, s),
      t,
      e
    );
  }
}
function Hy(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    q1(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  vn(e, o, n, i), Vy({ text: o.text, spans: o.spans }, t, e);
}
function q1(e, t) {
  const r = e.find(L);
  if (r && ld(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function Gy(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!wa(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (A(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = qa(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = Fr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (cn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = xr.serializeEditorState(
    { type: br, version: yr, content: l },
    r
  );
  if (Ur(d.root.children, n) === Lr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((g) => jn(g));
  if (Ra(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Ls(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  u.forEach((g) => p.insertBefore(g)), Oa(u, s.sentinels), e.forEach((g) => g.remove());
  const h = Ls(u);
  for (let g = 0; g < f.length && g < h.length; g++)
    h[g].getNumber() === f[g].number && h[g].setSid(f[g].sid);
  return Wy(
    u,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((g) => g.getKey()))
  ), !0;
}
function Jy(e) {
  if (e.getIsCollapsed() !== !1 || !Le.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!O(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(Tt(n) || v(n) && n.getTextContent() === Wt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!O(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function Yy(e, t, r) {
  const n = Jy(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return vn(n, i, t, r), { out: i, contentNodes: n };
}
function Xy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(gt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function I1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Yy(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = N();
  if (A(d)) {
    for (let w = d.anchor.getNode(); w; w = w.getParent())
      if (e.is(w)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = qa(
      [e],
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const u = Fr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (cn(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = u;
  if (u.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], h = Xy(p), g = Ly(e, p);
  if (g)
    return L1(
      e,
      g,
      h,
      o.sentinels,
      t,
      l
    );
  const y = Iy(e, p, h, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (_n(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const k = e.getCategory() !== h;
  if (k && e.setCategory(h), Ur(y.children, n) === Lr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), k;
  const b = y.children.map((w) => jn(w));
  if (Ra(b) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), k;
  const T = a[0];
  if (T)
    b.forEach((w) => T.insertBefore(w));
  else {
    const w = e.getChildren().find(($) => O($) && $.getMarkerSyntax() === "closing");
    b.forEach(($) => w ? w.insertBefore($) : e.append($));
  }
  Oa(b, o.sentinels);
  const E = new Set(o.sentinels.flat().map((w) => w.getKey()));
  a.forEach((w) => {
    E.has(w.getKey()) || w.remove();
  });
  const S = Jy(e) ?? b;
  return Hy(
    S,
    c,
    l,
    n,
    r,
    E
  ), !0;
}
function L1(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = Dy(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || _n(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const d = l.map((h) => jn(h)), [u] = d;
  if (!j(u) || Ra(d) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const h of d)
    f.insertAfter(h), f = h;
  Oa(d, i);
  const p = e.getChildren();
  return e.append(...u.getChildren()), p.forEach((h) => h.remove()), e.setCaller(u.getCaller()).setCategory(u.getCategory()).setUnknownAttributes(u.getUnknownAttributes()).setIsCollapsed(u.getIsCollapsed()), u.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? Yc(e, a) : Qg(e, { isContentChange: !0 })), !0;
}
function Qy(e) {
  const t = e.getChildren();
  return tu(t[0]) ? t.slice(1) : t;
}
function dd(e, t, r) {
  const n = Qy(e), i = { text: "", spans: [], sentinels: [] };
  return vn(n, i, t, r), { out: i, contentNodes: n };
}
const D1 = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${ir}(?=[\\s\\u200B\\\\|]|$)`
);
function Zy(e, t) {
  const r = Fr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === ir && !D1.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function eb(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = dd(e, i, n);
  if (!wa(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, d = !1;
  const u = N();
  if (A(u)) {
    for (let $ = u.anchor.getNode(); $; $ = $.getParent())
      if (c.some((z) => z.is($))) {
        d = !0;
        break;
      }
    u.isCollapsed() && (l = qa(
      c,
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const f = Zy(o.text, i);
  if (cn(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = Uy(
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
  if (p.followingBlocks.length === r.length && Ur(p.followingBlocks, i) === Lr(r, i) && Ur(p.children, i) === Lr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map(($) => jn($)), y = p.followingBlocks.map(($) => jn($)), k = [...g, ...y];
  if (Ra(k) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const b = Ls([...a, ...r]).map(($) => ({
    number: $.getNumber(),
    sid: $.getSid()
  })), T = a[0];
  T ? g.forEach(($) => T.insertBefore($)) : g.forEach(($) => e.append($)), y.reduce(($, z) => $.insertAfter(z), e), Oa(k, o.sentinels);
  const E = new Set(o.sentinels.flat().map(($) => $.getKey()));
  a.forEach(($) => {
    E.has($.getKey()) || $.remove();
  }), r.forEach(($) => $.remove());
  const S = [...Qy(e), ...y], w = Ls(S);
  for (let $ = 0; $ < b.length && $ < w.length; $++)
    w[$].getNumber() === b[$].number && w[$].setSid(b[$].sid);
  return Hy(
    S,
    l,
    d,
    i,
    n,
    E
  ), !0;
}
const tb = /* @__PURE__ */ new Set(["ca", "cp"]), fd = "cp";
function rb(e) {
  if (!Ir(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Is(e, t, $r, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Fr(r, { getMarker: $r }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === fd)
  );
}
function Ia(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (F(r) && tb.has(r.getMarker()) || rb(r)) {
      t.push(r);
      continue;
    }
    ge(r) && r.getMarker() === fd && t.push(r);
    break;
  }
  return t;
}
function U1(e) {
  const t = (n) => F(n) && tb.has(n.getMarker()) || rb(n);
  if (t(e) || ge(e) && e.getMarker() === fd)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Fe(n)) return n;
      if (!t(n)) return;
    }
}
function nb(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ia(e);
  if (n.some((s) => ge(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (vn(e.getChildren(), i, t, r), vn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function F1(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ia(e)], o = nb(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = N();
  if (A(l)) {
    for (let h = l.anchor.getNode(); h; h = h.getParent())
      if (s.some((g) => g.is(h))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = qa(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const d = Fr(o.text, { getMarker: n }), [u] = d;
  if (d.length === 0 || typeof u != "object" || u.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (cn(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (u.sid = e.getSid());
  const f = xr.serializeEditorState(
    { type: br, version: yr, content: d },
    r
  );
  if (Ur(f.root.children, n) === Lr(s, n)) {
    let h = !1;
    return e.getNumber() !== (u.number ?? "") && (e.setNumber(u.number ?? ""), h = !0), e.getAltnumber() !== u.altnumber && (e.setAltnumber(u.altnumber), h = !0), e.getPubnumber() !== u.pubnumber && (e.setPubnumber(u.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => jn(h));
  return Fe(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), Wy(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function Us(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (ve(n)) return;
    !t && (j(n) || ge(n) || Fe(n) || Ee(n)) && (t = n), Ll(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? U1(r) : void 0) ?? t;
}
function pr(e, t) {
  const r = Us(e);
  return r ? j(r) ? I1(r, t) : Fe(r) ? F1(r, t) : Ee(r) ? eb(r, t) : Gy([r], t) : !1;
}
const z1 = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Sp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !z1.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Mo(e, t) {
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
          t.push(`\\${n}`), Sp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Mo(r.content, t), Sp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Mo(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Mo(r.content, t);
      }
    }
}
function _p(e, t, r) {
  const n = Us(e);
  if (!we(n)) return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ee(n) ? dd(n, t, r).out : By(n, t, r);
  if (!o) return !1;
  const a = Fr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    Ds.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  Mo(a, l);
  for (const d of l.join("").replaceAll(D, "~")) {
    if (Ds.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function pd(e, t) {
  return ib(e, t, x.Paragraph);
}
function K1(e, t) {
  return ib(e, t, x.Character);
}
function ib(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !(Le.isValidMarker(n) || Hl(n));
}
function B1(e) {
  return [xt(e), Js()];
}
function hd(e) {
  cr(e, 2);
}
function j1(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function La(e) {
  const t = j1(e);
  e.splice(0, 0, B1(e.getMarker())), t && hd(e);
}
function ea(e, t) {
  e.setMarker(t), La(e), hd(e);
}
function V1(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Br(n)) {
    if (v(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(D), Ot(n, me, zr), n.setMode("token");
      return;
    }
    if (cg(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Js());
  }
}
function vp(e, t, r) {
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
function xs(e) {
  for (let t = e; t; t = t.getParent())
    if (ge(t)) return t;
}
function W1(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = xs(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = xs(r.getNode())?.is(s) ?? !1, a = xs(n.getNode())?.is(s) ?? !1;
    return !(o && !vp(r, s, "start") || a && !vp(n, s, "end"));
  });
}
function _l(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!A(r) || r.isCollapsed()))
    for (const n of W1(r)) t.add(n.getKey());
}
function H1(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!A(r) || !r.isCollapsed()) return;
  const n = xs(r.focus.getNode());
  n && t.add(n.getKey());
}
function G1(e) {
  const t = N();
  !A(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (_l(e), t.removeText());
}
const J1 = new RegExp(
  String.raw`^\\\+?([${_r}]+)(?:[ \u00A0]|$)`
);
function Y1(e, t) {
  const r = J1.exec(e.getTextContent());
  return !!r && pd(r[1], t);
}
function X1(e, t) {
  if (!fi(t.viewOptions)) return;
  if (Lt(e.getFirstChild())) {
    V1(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (Y1(e, t.getMarker)) return;
    La(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ge(o) && !o.is(e))) {
      ea(e, ir), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (we(r)) {
    const n = e.getChildren().filter((a) => !Br(a)), i = N();
    let s = !1;
    if (A(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : xs(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && cr(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  ea(e, ir);
}
function Q1(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = wr(t, ua(e.getMarker()));
  return r === "" ? void 0 : r;
}
function sb(e) {
  const t = e.getChildren().filter((s) => !O(s) && ue(s, me) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith(D) && r.setTextContent(r.getTextContent().slice(1));
  const n = Q1(e);
  n && t.push(Ne(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function Z1(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && L(t) ? r = t.getChildAtIndex(e.offset) : O(t) && e.offset === 0 ? r = t : v(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), F(r) && (r = r.getFirstChild()), !O(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!F(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function e0() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = Z1(e.anchor), r = t?.getParent();
  if (!t || !F(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), Ji(n) && n.getTextContent().startsWith(D) && n.setTextContent(` ${n.getTextContent().slice(D.length)}`), sb(r), v(n) && n.isAttached() && n.select(0, 0), !0;
}
function t0(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => v(c) && !O(c) && c.getTextContent() === Wt(s)
    ), a = ci(e).some(({ node: c }) => O(c));
    if (!o && !a) return;
    r.forEach((c) => {
      O(c) || (v(c) && c.getTextContent() === Wt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => O(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function r0(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    sb(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && pr(e, t);
}
function ob(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && fi(r)) {
    ea(e, t);
    return;
  }
  cm(e, t);
}
function ab() {
  const e = N();
  if (!A(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = cb(e);
    return t !== "removed" ? t : (vl(), "handled");
  }
  return vl() ? "handled" : "declined";
}
function n0(e, t) {
  if (!t) return e;
  const r = OP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function Mp(e, t) {
  const r = N();
  if (!A(r)) return "declined";
  if (r.isCollapsed()) {
    if (!lb())
      return "declined";
  } else {
    const s = cb(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => n0(s, t)
  );
  Ep(n ?? "");
  for (const s of i)
    vl(), Ep(s);
  return "handled";
}
function i0(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Hi(n);
  if (!i) return !1;
  const s = Vt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function cb(e) {
  const t = Vt(e.anchor.getNode()), r = Vt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), s0() ? "removed" : "needs-plain-split");
}
function Ep(e) {
  if (e === "") return;
  const t = N();
  A(t) && t.insertText(e);
}
function s0() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = Vt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function lb() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Vt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function vl() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = lb();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Qr("fp", { closed: "false" });
  i.append(xt("fp"));
  const s = v(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Ui(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [d] = l;
    d && (MT(d), i.append(d));
  }
  return i.getChildren().every(O) && i.append(Ne(ar)), ub(i), !0;
}
function ub(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (v(t)) {
    const r = ma(t);
    t.select(r, r);
    return;
  }
  if (L(t)) {
    ub(t);
    return;
  }
  e.selectEnd();
}
function o0(e) {
  const t = [];
  let r = e;
  for (; r; )
    F(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function a0(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ye().getChildren()) {
    if (t && n.is(t)) {
      Ee(n) && r.push(n.getMarker());
      break;
    }
    (Ee(n) || rt(n) || ge(n)) && r.push(n.getMarker());
  }
  return r;
}
function c0(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function l0(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Lt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Br(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(c0(i)) && r === 0 : !1;
}
function u0(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Lt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Br(i) && t.is(i) && r === 0;
}
function d0() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function f0() {
  const e = N();
  if (!A(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = qe(t, ge), s = i ? void 0 : qe(t, Ee), o = !n && !s && (!i || u0(i, t, r)) ? "paragraph" : "character", a = Vt(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: a0(t),
    openCharMarkers: o0(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: fu(t, r),
    anchorRect: d0()
  };
}
function p0() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = RP.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function h0(e, t, r) {
  ob(e, t, r), hd(e);
}
function g0(e, t, r) {
  const n = N();
  if (!A(n)) return;
  const i = n.focus.getNode(), s = qe(i, ge);
  if (t === "backslash" && s && l0(s, i, n.focus.offset)) {
    h0(s, e, r);
    return;
  }
  Ml(e, r);
}
function db(e, t) {
  const r = e.getNode(), n = ry(L(r) ? r : r.getParent());
  return t.is(n);
}
function m0(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !db(e, t);
}
function ta(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function y0(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!O(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!F(r)) return e;
  const n = r.getParent();
  return n ? hr(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function b0(e, t, r) {
  const n = N();
  if (!A(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!db(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && m0(s, e)) return !1;
  const o = tu(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (ta(n.anchor, e, o), ta(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = N();
  if (!A(a) || !a.isCollapsed()) return !1;
  const c = sy(a);
  if (!c) return !1;
  const { parent: l, moving: d } = iy(
    y0(c.anchor)
  );
  if (!e.is(l)) return !1;
  const u = d.filter((h) => !h.is(o)), f = Ii(t);
  e.insertAfter(f), f.append(...u);
  const [p] = u;
  return F(p) ? ba(p) : f.select(0, 0), fi(r) && La(f), !0;
}
function k0(e, t) {
  const r = N();
  return !A(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function fb(e) {
  const t = N();
  return A(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function x0(e) {
  const t = qe(e.anchor.getNode(), Ee);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !tu(r) || (ta(e.anchor, t, r), ta(e.focus, t, r));
}
function T0(e, t, r, n) {
  const i = N();
  if (A(i) ? x0(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && p0(), e.kind === "closeTag") {
    fb(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && ab() !== "declined") return;
  if (e.kind === "paragraph" && pt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    g0(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Le.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return cy(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  fl(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: bn(), reference: r });
}
function Ml(e, t) {
  const r = N();
  if (!A(r)) return !1;
  pu(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!qe(n, ge)) {
    const o = qe(n, Ee);
    if (o) return b0(o, e, t);
  }
  const i = fi(t);
  if (oy()) {
    const o = N();
    if (!A(o)) return !1;
    const a = qe(o.anchor.getNode(), ge);
    return a ? (a.setMarker(e), i && La(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return ge(s) ? (i ? ea(s, e) : s.setMarker(e), !0) : !1;
}
function C0() {
  const [e] = fe();
  return V(() => e.registerCommand(ah, () => !0, kt), [e]), null;
}
function S0(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = AP.exec(e)?.[1];
  return r === void 0 ? !1 : !pd(r, t);
}
function pb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !S0(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ge(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!ge(i) && !Ee(i)))
    return [i, r];
}
function hb(e, t) {
  const r = pb(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return Ee(n) ? eb(n, t, [i]) : Gy([n, i], t);
}
function _0(e, t) {
  const r = N();
  A(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function gb(e) {
  const t = PP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function v0(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = gb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function M0(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (F(n)) {
      ba(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Ap(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = gb(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  M0(e);
}
function Pp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function mb(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return pr(e, r);
  const n = v0(e), i = e.getParent();
  if (ge(i)) {
    if (!pd(t, r.getMarker))
      return hb(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : pr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Pp(s, t) && Ap(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (F(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!(F(i) ? K1(t, r.getMarker) : Le.isValidMarker(s)))
      return pr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return pr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (_0(c, ct(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Pp(a, s) && Ap(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return pr(e, r);
}
function E0(e) {
  const t = N();
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
function A0(e, t) {
  const r = e.getTextContent();
  if (nn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (je(e.getParent()) && iu(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !E0(e)) {
    RT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = MP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), mb(e, n[1], t);
      return;
    }
    if (EP.test(r)) {
      t.pendingKeys.delete(e.getKey()), pr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ct(e.getMarker(), e.getNested());
    if ((F(n) || j(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = N(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Ne(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function P0(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Ag(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function yb(e) {
  if (!yh(e)?.length)
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
const ds = yb("v"), N0 = yb("c"), Np = /^[ \u00A0]*$/;
function El(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === tt.getType() && n.getMode() === "normal" && ue(n, me) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = Ne(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function w0(e, t) {
  const r = e.getTextContent(), n = sr("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (ds.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = ds.valueAndRest.exec(c);
    if (l && Np.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (ds.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = ds.valueAndRest.exec(r);
  if (!s) {
    const c = ds.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = N(), p = A(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(sr("v", d));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      El(e, u, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), pr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Np.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(sr("v", o)), a && El(e, a, a.length);
}
const O0 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function R0(e, t) {
  if (!Cy(e)) return !1;
  const r = e.getParent();
  if (!j(r)) return !1;
  const n = e.getTextContent();
  if (n === Wt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = O0.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = N(), c = A(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Wt(s)), o) {
    const l = n.length - o.length, d = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const u = El(e, o, d);
    u.isUnmergeable() || u.toggleUnmergeable();
  }
  return !0;
}
function $0(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const r = sr("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = N0.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function bb(e) {
  if (st(e)) {
    const { wrapper: t } = ga(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = su(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Fe(e)) {
    const t = [], r = hg(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = mg(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Be(e)) {
    const t = [], r = Es(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Es(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function q0(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return bb(e).some((n) => r.is(n));
}
function I0(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ge(e) && cg(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of As)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Qs(l, e) && (i || q0(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of bb(e))
    l.remove(), n = !0;
  let s = !1;
  if (F(e)) {
    const l = DT(e);
    l !== void 0 && bx(l) && (xg(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of As)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (RC(l, e)) {
        Ns(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Lg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      ka(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function wp(e) {
  return v(e) && e.getType() === tt.getType() && e.getMode() === "normal" && ue(e, me) !== "attribute";
}
function L0(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ae(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && wp(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && wp(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function xo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = L0(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ae(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (nn(c)) continue;
      const h = Ty.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = mb(c, h[1], e) || n : r === "idle" && _p(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : hb(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = pr(c, e) || n;
      continue;
    }
    const l = Zn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = I0(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && _p(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = pr(d, e) || n;
    }
  }
  return n;
}
function kb(e) {
  if (an(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (F(t)) return ms(t) !== void 0;
  return !1;
}
function D0(e) {
  const t = Zn(e);
  if (!t) return !1;
  const r = Qn(t.kind);
  return !ka(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Op(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ve(t) || wg(t)) return !0;
  return !1;
}
function U0(e, t) {
  const r = e.getTextContent(), n = ue(e, me), i = e.getParent();
  if (n !== "attribute" && Fe(i)) {
    r.replace(/^[ \u00A0]+/, "") === sr("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (R0(e, t)) return;
  if (n === "attribute") {
    D0(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && kb(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Op(e))
      t.pendingKeys.add(e.getKey());
    else if (yg(e)) t.pendingKeys.add(e.getKey());
    else if (Fe(Us(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      F(a) && Tg(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Op(e)) return;
  const s = N(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (NP.test(o)) {
    if (Ex(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), pr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function F0(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Lg(e, t);
}
function z0(e) {
  const t = (r) => {
    if (O(r)) {
      nn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (an(r)) {
      Ag(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of As)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Qs(n, r) || F0(n, r)) && e.pendingKeys.add(r.getKey());
    if (Be(r)) {
      r.getTextContent() !== sr("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== tt.getType() || ue(r, me) === "attribute") return;
      const n = r.getParent();
      if (Fe(n)) {
        r.getTextContent() !== sr("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && kb(r) || i.includes("//") || yg(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (F(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!ve(r)) {
      if (je(r) && r.getChildrenSize() === 0) {
        const n = Zn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Ye().getChildren().forEach(t);
}
const xb = Fl(
  "COMMIT_PENDING_MARKERS_COMMAND"
), Tb = Fl(
  "SET_MARKER_SETTLE_SUSPENDED_COMMAND"
);
function Mc(e) {
  const t = e();
  return St(ql), St(xh), t;
}
const Rp = 8, $p = 1e3, K0 = 1e3;
function Ei(e, t) {
  const r = Be(e) ? ["va", "vp"] : st(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    DC(Qn(n), e, t.pendingKeys);
}
function B0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(zl) || i.updateTags.has(Ss)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ae(o);
        if (!c) continue;
        const l = Zn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ae(o.getKey());
        c?.isAttached() && Qn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(tt, r),
    e.registerMutationListener(jr, r),
    e.registerMutationListener(tn, r),
    e.registerMutationListener(rn, r)
  );
}
function Al(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = N();
  return r ? t ? Vu(r, t) : A(r) && Kn(r) : !1;
}
function j0(e, t, r) {
  return Ie(
    e.registerCommand(
      zt,
      (n) => {
        if (to() || Al(t)) return !1;
        const i = yl(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? td(rd(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Mp(o, t.getMarker);
          if (a === "declined" && i0(e) && (a = Mp(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      ye
    ),
    e.registerCommand(
      zt,
      (n) => {
        const i = yl(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !GA()) return !1;
        const o = N();
        return t.structureProtectionMode === "protected" && A(o) && Kn(o) ? !1 : (n?.preventDefault(), A(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Gn, void 0), a === "") return;
          const l = N();
          A(l) && l.insertText(a);
        }), !0);
      },
      Re
    ),
    e.registerCommand(
      zt,
      () => (t.splitExpected.current = !0, !1),
      kt
    )
  );
}
function V0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = fe(), a = e?.markerMode === "editable", c = !!e && eo(e), l = Q(void 0), d = Q(n), u = Q(!1), f = Q(s);
  return V(() => {
    d.current = n, f.current = s;
    const p = l.current;
    p && (e && (p.viewOptions = e), p.getMarker = t ?? $r, p.logger = r, p.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), V(() => {
    if (!a || !e) return;
    const p = {
      viewOptions: e,
      getMarker: t ?? $r,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = p;
    const h = PC(o, p.pendingKeys);
    let g, y = !1, k, b = !1, T = !1, E = 0;
    const S = () => E < Rp ? !1 : (p.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Rp} consecutive mutating passes; leaving ${p.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...p.pendingKeys].join(", ")}`
    ), !0), w = (q, J = "departure", W = !1) => {
      const K = W && !zu(o), ee = K ? Or(o, fr) : void 0;
      o.update(
        () => {
          K && St(fr), E = Mc(
            () => xo(p, q, J)
          ) ? E + 1 : 0;
        },
        // DISCRETE whenever the tag is in play, the way `commitPendingMarkerEdits` does it:
        // Lexical commits inside the call only for a discrete update (`_flushSync`) and otherwise
        // schedules the commit on a microtask, so the release below would disarm before the commit
        // it exists to catch. A settle that only moves the selection — which an update running
        // outside an event can produce on its own, by re-reading the DOM selection — would then
        // leave the tag pending to ride onto the next commit, where it stops a later `focus()`
        // from focusing the editor.
        K ? { discrete: !0 } : void 0
      ), ee?.();
    };
    let $ = !1, z;
    const B = () => {
      z !== void 0 && clearTimeout(z), z = void 0;
    }, ce = (q) => {
      u.current !== q && (u.current = q, $ = !1, B(), q ? (Y !== void 0 && clearTimeout(Y), Y = void 0) : queueMicrotask(() => {
        T || u.current || (!y && !S() && w(g, "departure", !0), xe());
      }));
    };
    let Y;
    const xe = () => {
      if (Y !== void 0 && clearTimeout(Y), Y = void 0, T || p.pendingKeys.size === 0 || u.current) return;
      const q = d.current ?? K0;
      q < 0 || (Y = setTimeout(() => {
        Y = void 0, !(T || p.pendingKeys.size === 0) && (y || S() || w(void 0, "idle"));
      }, q));
    }, se = Ie(
      o.registerNodeTransform(jr, (q) => {
        if (o.isComposing()) return;
        A0(q, p);
        const J = Zn(q);
        J && (Be(J.owner) || j(J.owner) || Fe(J.owner) || st(J.owner) && ga(J.owner).wrapper === void 0) && Ei(J.owner, p);
      }),
      o.registerNodeTransform(_t, (q) => {
        o.isComposing() || (w0(q, p), Ei(q, p));
      }),
      o.registerNodeTransform(Gt, (q) => {
        o.isComposing() || ($0(q), q.isAttached() && Ei(q, p));
      }),
      o.registerNodeTransform(pt, (q) => {
        o.isComposing() || X1(q, p);
      }),
      o.registerNodeTransform(Me, (q) => {
        if (!o.isComposing()) {
          r0(q, p);
          for (const J of ["separator", "char"])
            q.isAttached() && Qs(Qn(J), q) && p.pendingKeys.add(q.getKey());
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
      o.registerNodeTransform(kr, (q) => {
        o.isComposing() || Ei(q, p);
      }),
      o.registerNodeTransform(rn, (q) => {
        if (o.isComposing()) return;
        const J = Zn(q);
        J && (st(J.owner) || Be(J.owner) || j(J.owner) || Fe(J.owner)) && Ei(J.owner, p);
      }),
      o.registerNodeTransform(Le, (q) => {
        o.isComposing() || (t0(q, p), Ei(q, p));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(on, (q) => {
        o.isComposing() || P0(q, p);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(tt, (q) => {
        o.isComposing() || U0(q, p);
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
        tt,
        (q) => {
          o.getEditorState().read(() => {
            for (const [J, W] of q) {
              if (W === "destroyed") continue;
              const K = ae(J);
              !K || ue(K, me) !== "attribute" || je(K.getParent()) || o.getElementByKey(J)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      B0(o, p),
      ...c ? [
        o.registerNodeTransform(tt, (q) => {
          o.isComposing() || jP(q);
        }),
        o.registerCommand(
          Hn,
          (q) => yp(
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
          Re
        ),
        o.registerCommand(
          or,
          (q) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            yp(
              q && typeof q == "object" && "clipboardData" in q ? q : null,
              o,
              !0,
              f.current
            )
          ),
          Re
        ),
        o.registerCommand(
          zt,
          (q) => QP(
            // Same jsdom-safe duck-check as COPY above.
            q && typeof q == "object" && "clipboardData" in q ? q : null,
            p.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              p.splitExpected.current = !0;
            }
          ),
          Re
        )
      ] : [],
      o.registerCommand(
        or,
        () => (!Al(p) && !to() && _l(p), !1),
        ye
      ),
      o.registerCommand(
        Wn,
        () => (o.isComposing() || G1(p), !1),
        Rr
      ),
      o.registerCommand(
        Jr,
        (q) => q || o.isComposing() ? !1 : e0(),
        Rr
      ),
      o.registerCommand(
        ca,
        () => (y = !1, E = 0, xe(), !1),
        kt
      ),
      o.registerCommand(
        Cr,
        (q) => (y = !1, E = 0, xe(), (q.key === "Backspace" || q.key === "Delete") && !Al(p, Om(q)) && (_l(p), H1(p), queueMicrotask(() => {
          p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !q.ctrlKey || q.altKey || q.shiftKey || q.metaKey || q.key !== " " && q.code !== "Space" || !HA() ? !1 : (q.preventDefault(), !0)),
        Re
      ),
      o.registerCommand(
        ih,
        (q) => {
          const J = ab();
          J === "needs-plain-split" && o.dispatchCommand(Gn, void 0);
          const W = J !== "declined" || UC();
          return W && q?.preventDefault(), xo(p), W;
        },
        Re
      ),
      o.registerCommand(
        Gn,
        () => (p.splitExpected.current = !0, oy()),
        Re
      ),
      j0(o, p, c),
      o.registerCommand(
        Tb,
        (q) => (ce(q), !0),
        // LOW, matching the sibling host-dispatched `COMMIT_PENDING_MARKERS_COMMAND` below. This
        // command has exactly one handler, so priority decides nothing; CRITICAL is reserved in
        // this file for handlers that must beat Lexical's built-ins on NATIVE commands, and using
        // it here would imply a priority contest that does not exist.
        kt
      ),
      o.registerCommand(
        oh,
        () => (u.current && $ && (B(), z = setTimeout(() => {
          if (z = void 0, T || !u.current) return;
          const q = o.getRootElement(), J = q?.ownerDocument, W = J?.activeElement;
          !q || !J?.hasFocus() || !W || !(q === W || q.contains(W)) || (p.logger?.warn(
            `[MarkerEdit] marker settling has been suspended while the editor held focus for ${$p}ms, so the suspension was lifted and held edits settled. The host did not resume on one of its close paths.`
          ), ce(!1));
        }, $p)), !1),
        kt
      ),
      o.registerCommand(
        xb,
        () => {
          if (y) return !0;
          const q = o.getRootElement(), J = q?.ownerDocument, W = !!q && !!J && J.hasFocus() && q.contains(J.activeElement);
          let K;
          if (W) {
            const ee = N();
            K = A(ee) ? ee.focus.key : g;
          }
          return Mc(() => xo(p, K)), !0;
        },
        kt
      ),
      o.registerCommand(
        Ul,
        () => {
          if (u.current)
            return $ = !0, B(), !1;
          if (y) return !1;
          const q = N(), J = A(q) ? q.focus.key : g;
          return Mc(() => xo(p, J)), !1;
        },
        kt
      ),
      o.registerUpdateListener(({ editorState: q, tags: J }) => {
        p.splitExpected.current = !1, p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear(), p.rebuildAttempted.clear();
        const W = q.read(() => {
          const ee = N();
          return A(ee) ? ee.focus.key : void 0;
        }), K = k;
        if (W !== void 0 && (k = W), J.has(zl)) {
          p.pendingKeys.clear(), q.read(() => z0(p)), y = !0, W !== void 0 && (g = W);
          return;
        }
        if (J.has(Rt)) {
          W !== void 0 && W !== K && (y = !0);
          return;
        }
        y || (W !== void 0 && (g = W), xe(), !(b || W === void 0) && [...p.pendingKeys].some((ee) => ee !== W) && (b = !0, queueMicrotask(() => {
          b = !1, !T && (u.current || S() || w(g));
        })));
      })
    );
    return () => {
      T = !0, Y !== void 0 && clearTimeout(Y), Y = void 0, B(), h(), se(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const W0 = ["status_unknown", "status_invalid"], Cb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, H0 = Object.values(Cb);
function G0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Cb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function qp(e) {
  e.classList.remove(...W0), e.removeAttribute("aria-description"), H0.includes(e.title) && e.removeAttribute("title");
}
function J0(e, t, r, n) {
  const i = (a) => a.read(() => Ye().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const d = ae(l)?.getTopLevelElement();
        d && a.add(d.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function Y0(e) {
  const t = ae(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function X0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = fe(), i = e?.markerMode === "editable";
  return V(() => {
    if (!i) return;
    const s = t ?? Io;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = m1(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || Y0(f)) continue;
            const h = ae(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && qp(p);
        }
        for (const [f, p] of u) {
          const h = n.getElementByKey(f);
          h && G0(h, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          J0(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && qp(d);
      }
    };
  }, [n, i, t, r]), null;
}
function Sb(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Dr(o);
    a && L(s) && Sb(s.getChildren(), a, r);
  }
}
function Fs(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = Dr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = Wi(a);
      if (l === void 0 || !l.includes(gt)) continue;
      const d = l.split(gt), u = [];
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
function ra(e, t, r) {
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
function _b(e, t) {
  const r = [];
  for (const n of e)
    ld(n, t) || ((ge(n) || F(n)) && r.push(n.getMarker()), L(n) && r.push(..._b(n.getChildren(), t)));
  return r;
}
function vb(e) {
  const t = [];
  for (const r of e) {
    const n = ud(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Dr(r);
    i && t.push(...vb(i));
  }
  return t;
}
function zs(e, t, r) {
  const n = _b(e, r), i = vb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function Q0(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = N();
  let n, i;
  if (A(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = ae(t.key), i = t.offset;
  else
    return;
  if (!(!v(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Da(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function Z0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!wa(c, e, o, s)) return;
  const l = i ? Da(c, i) : c.text, d = Fr(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (cn(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = xr.serializeEditorState(
    { type: br, version: yr, content: d },
    s
  ).root.children;
  if (_n(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = ra(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ur(u, o) === Lr(e, o) && zs(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Fs(u, f);
  const h = Mb(e), g = gd(u);
  for (let y = 0; y < h.length && y < g.length; y++)
    h[y].sid !== void 0 && g[y].number === h[y].number && (g[y].sid = h[y].sid);
  return u;
}
function Mb(e) {
  const t = [], r = (n) => {
    Be(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function gd(e) {
  const t = [];
  for (const r of e) {
    Xh(r) && t.push(r);
    const n = Dr(r);
    n && t.push(...gd(n));
  }
  return t;
}
function eN(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Yy(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? Da(l, i) : l.text, f = Fr(u, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (cn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], g = Xy(h), y = e.getCategory() !== g, k = Ly(e, h);
  if (k) {
    const S = Dy(
      e,
      k.before,
      k.after,
      g,
      s
    );
    if (!S || _n(S) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const w = ra(l, t, n);
    return w ? (Fs(S, w), {
      rebuilt: void 0,
      contentNodes: d,
      category: g,
      categoryChanged: !1,
      closedAs: S
    }) : void 0;
  }
  const b = Iy(e, h, g, s);
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
  const E = ra(l, t, n);
  if (!E) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ur(T, o) === Lr(d, o) && zs(d, T, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: d, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Fs(T, E), { rebuilt: T, contentNodes: d, category: g, categoryChanged: y };
}
function Ip(e) {
  return e.$?.textType;
}
function tN(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Ip(e) === Ip(t);
}
function rN(e) {
  const t = [];
  for (const r of e) {
    const n = ae(r);
    n?.isAttached() && ve(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function nN(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (nn(e)) return;
  const n = Ty.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Lp(e, t) {
  const r = e;
  r.marker = t, r.text = Ky(t, r.markerSyntax, r.nested);
}
function iN(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Le.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Lp(a.node, s);
  const c = n.getChildren().filter(O).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Lp(l.node, s);
}
function sN(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: d } = dd(e, a, o);
  if (d.length === 0 && s.length === 0 || !wa(l, s, a, o)) return;
  const u = i ? Da(l, i) : l.text, f = Zy(u, a);
  if (cn(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = Uy(
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
  const y = ra(l, t, n);
  if (!y) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (g.length === s.length && Ur(g, a) === Lr(s, a) && zs(s, g, a) && Ur(h, a) === Lr(d, a) && zs(d, h, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const k = Fs(h, y);
  Fs(g, y, k);
  const b = Mb([...d, ...s]), T = gd([...h, ...g]);
  for (let E = 0; E < b.length && E < T.length; E++)
    b[E].sid !== void 0 && T[E].number === b[E].number && (T[E].sid = b[E].sid);
  return { rebuilt: h, contentNodes: d, followingBlocks: g };
}
function oN(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = nb(e, i, n);
  if (!o) return;
  const a = r ? Da(o, r) : o.text, c = Fr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (cn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = xr.serializeEditorState(
    { type: br, version: yr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...Ia(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ur(d, i) === Lr(u, i) && zs(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function aN(e, t, r, n, i) {
  const s = Q0(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (b) => {
    j(b) ? c.set(b.getKey(), b) : Fe(b) ? l.set(b.getKey(), b) : Ee(b) ? d.set(b.getKey(), b) : o.set(b.getKey(), [b]);
  };
  for (const b of t) {
    const T = ae(b);
    if (!T?.isAttached()) continue;
    const E = Us(T);
    if (E) {
      if (p(E), O(T)) {
        const S = pb(T, r.getMarker);
        S && a.push(S);
      }
      if (j(E)) {
        const S = nN(T);
        S && f.set(E.getKey(), S);
      }
    }
  }
  const h = /* @__PURE__ */ new Set();
  for (const [b, T] of a)
    h.has(b.getKey()) || h.has(T.getKey()) || ([b, T].forEach((E) => {
      h.add(E.getKey()), o.delete(E.getKey());
    }), Ee(b) ? (d.set(b.getKey(), b), u.set(b.getKey(), [T])) : o.set(b.getKey(), [b, T]));
  if (s) {
    const b = Us(s.node);
    b && !h.has(b.getKey()) && p(b);
  }
  const g = rN(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && d.size === 0 && g.length === 0)
    return;
  const y = new Set(g.map((b) => b.getKey())), k = /* @__PURE__ */ new Map();
  Sb(Ye().getChildren(), e.root.children, k);
  for (const b of f.values()) iN(b, k);
  for (const b of c.values()) {
    const T = k.get(b.getKey()), E = T ? Dr(T.node) : void 0;
    if (!T || !E) continue;
    const S = eN(b, k, r, y, s);
    if (!S) continue;
    if (S.closedAs) {
      const z = T.siblings.indexOf(T.node);
      if (z < 0) continue;
      const [B, ...ce] = S.closedAs, Y = T.node;
      for (const xe of Object.keys(Y)) Reflect.deleteProperty(Y, xe);
      Object.assign(Y, B), T.siblings.splice(z + 1, 0, ...ce);
      continue;
    }
    if (S.categoryChanged) {
      const z = T.node;
      S.category === void 0 ? delete z.category : z.category = S.category;
    }
    if (!S.rebuilt) continue;
    const w = k.get(S.contentNodes[0].getKey());
    if (!w) continue;
    const $ = E.indexOf(w.node);
    $ < 0 || E.splice($, S.contentNodes.length, ...S.rebuilt);
  }
  for (const b of o.values()) {
    const T = k.get(b[0].getKey());
    if (!T) continue;
    const E = Z0(b, k, r, y, s);
    if (!E) continue;
    const S = T.siblings.indexOf(T.node);
    S < 0 || T.siblings.splice(S, b.length, ...E);
  }
  for (const b of d.values()) {
    const T = k.get(b.getKey()), E = T ? Dr(T.node) : void 0;
    if (!T || !E) continue;
    const S = u.get(b.getKey()) ?? [], w = sN(b, k, r, y, s, S);
    if (!w) continue;
    const $ = w.contentNodes.at(0), z = $ ? k.get($.getKey()) : void 0;
    if ($ && !z) continue;
    const B = z ? E.indexOf(z.node) : E.length, ce = T.siblings.indexOf(T.node);
    B < 0 || ce < 0 || (E.splice(B, w.contentNodes.length, ...w.rebuilt), T.siblings.splice(ce + 1, S.length, ...w.followingBlocks));
  }
  for (const b of l.values()) {
    const T = k.get(b.getKey());
    if (!T) continue;
    const E = 1 + Ia(b).length, S = oN(b, r, s);
    if (!S) continue;
    const w = T.siblings.indexOf(T.node);
    w < 0 || T.siblings.splice(w, E, ...S);
  }
  for (const b of g) {
    const T = k.get(b.getKey());
    if (!T) continue;
    const E = T.siblings.indexOf(T.node);
    if (E < 0) continue;
    T.siblings.splice(E, 1);
    const S = T.siblings[E - 1], w = T.siblings[E], $ = S && Wi(S), z = w && Wi(w);
    S && w && $ !== void 0 && z !== void 0 && tN(S, w) && (S.text = $ + z, T.siblings.splice(E, 1));
  }
  return Hm(e, r.viewOptions);
}
function cN({
  viewOptions: e,
  logger: t
}) {
  const [r] = fe(), n = fi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return V(() => {
    if (n)
      return r.registerNodeTransform(
        pt,
        (i) => lN(i, t)
      );
  }, [r, n, t]), null;
}
function lN(e, t) {
  e.getMarker() !== ir && (e.isEmpty() || Lt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${ir}" (key ${e.getKey()})`
  ), e.setMarker(ir)));
}
function uN({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = fe(), n = Q({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return V(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, na(s, e) || dN(i, r, e);
  }, [r, e, t]), V(
    () => r.registerMutationListener(
      jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Pl(r);
        Dp(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: To(s) === To(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), V(() => {
    const i = (a) => a.read(
      () => new Set(
        Ye().getChildren().filter(rt).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (Pl(r) || Dp(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: To(a) === To(c)
      }));
    };
    return Ie(
      ...[Gt, Kr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), V(
    () => r.registerCommand(
      Kt,
      () => {
        const i = n.current;
        return i.phase === "idle" && gN(i, Eb()), !1;
      },
      kt
    ),
    [r]
  ), V(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Kt, void 0));
    };
    return Ie(
      r.registerMutationListener(Dt, i),
      r.registerMutationListener(_t, i)
    );
  }, [r]), V(() => {
    const i = () => kN(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function dN(e, t, r) {
  if (fN(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Pl(t);
  (!n || n === r.book) && t.update(() => Ab(t, r.chapterNum, r.verseNum), {
    tag: Rt
  });
}
function fN(e, t) {
  const r = e.pendingEchoes.findIndex((n) => na(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function Eb() {
  const e = N(), t = og(e);
  if (!t) return;
  const r = md(), n = hT(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = mu(t, e), { verseNum: o, verse: a } = lS(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Pl(e) {
  return e.getEditorState().read(() => md()?.getCode() || void 0);
}
function md() {
  return Ye().getChildren().find(Ee);
}
function Dp(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Ec(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Ec(e, t), e.phase = "navigating") : i && Ec(e, t), r && r !== e.scrRef.book && wb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Ec(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Ab(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Rt }
    );
  });
}
function Ab(e, t, r) {
  const n = N()?.clone();
  pN(t, r);
  const i = N();
  i && !(n && i.is(n)) && Or(e, Rt);
}
function pN(e, t) {
  const r = Eb();
  if (r?.chapterNum === e && (r.verse ? Nb(t, r.verse) : r.verseNum === t))
    return;
  const n = Ye().getChildren(), i = Zh(n, e);
  if (!i) return;
  const s = xT(n, i), o = pT(s, !0);
  kT(s, o);
  let a;
  try {
    a = nS(s, t);
  } catch {
    return;
  }
  a && (ge(a) ? !v(a.getFirstChild()) && pi(a) || cr(a, 0) : hN(a));
}
function hN(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || Ce(n)) {
    v(e) ? e.selectEnd() : cr(t, r);
    return;
  }
  const i = Xs(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    e.selectEnd();
    return;
  }
  const s = L(n) && !j(n) ? Pb(n) : void 0;
  s ? s.select(0, 0) : cr(t, r);
}
function Pb(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (L(t) && !j(t)) return Pb(t);
}
function To(e) {
  return e.read(() => {
    const t = Ye().getChildren().find(rt);
    return `${md()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function gN(e, t) {
  e.phase !== "navigating" && t && (mN(t, e.scrRef) || wb(e, yN(t, e.scrRef)));
}
function mN(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Nb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Nb(e, t) {
  try {
    return ru(e, t);
  } catch {
    return !1;
  }
}
function yN(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const bN = 8;
function wb(e, t) {
  return na(t, e.scrRef) || e.pendingEchoes.some((r) => na(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > bN && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function na(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function kN(e) {
  e.phase = "idle";
}
function xN(e) {
  return Ee(e) ? `${e.__code}` : Fe(e) ? `${e.__marker} "${e.__number}"` : F(e) ? `${e.__marker}` : Vs(e) ? `${e.__marker} "${e.__number}"` : Tt(e) ? `${e.__caller}` : di(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ge(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${TN(e)}` : Pe(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Be(e) ? `${e.__marker} "${e.__number}"` : "";
}
function TN(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[js]) : "";
}
function CN() {
  const [e] = fe();
  return /* @__PURE__ */ M(
    Lk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: xN,
      editor: e
    }
  );
}
const Ob = Gp(null), Up = 4;
function SN({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Q(null), s = Jp(Ob);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return V(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ M("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function _N({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = ke(), [s, o] = ke(), a = Se(
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
  }, l = et(() => ({ registerItem: a }), [a]);
  return V(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ M(Ob.Provider, { value: l, children: /* @__PURE__ */ M("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function vN({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Q(null), c = Q(null), [l, d] = ke(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return V(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: g } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Up}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), V(() => {
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
  }, [a, c, l, o]), V(() => {
    const f = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Up;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ $e(Bn, { children: [
    /* @__PURE__ */ $e(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => d(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ M("span", { className: i }),
          t && /* @__PURE__ */ M("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ M("i", { className: "chevron-down" })
        ]
      }
    ),
    l && zn(
      /* @__PURE__ */ M(_N, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const Nl = {
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
}, wl = {
  ...Nl,
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
function MN({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ M(
    vN,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + EN(t),
      buttonLabel: AN(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Nl).map((n) => /* @__PURE__ */ $e(
        SN,
        {
          className: "item block-marker " + PN(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ M("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ M("span", { className: "text usfm_" + n, children: Nl[n] })
          ]
        },
        n
      ))
    }
  );
}
function EN(e) {
  return e && e in wl ? e : "ban";
}
function AN(e) {
  return e && e in wl ? wl[e] : "No Style";
}
function PN(e) {
  return e ? "active dropdown-item-active" : "";
}
function Fp() {
  return /* @__PURE__ */ M("div", { className: "divider" });
}
const NN = En(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = fe(), [o, a] = ke(s), [c, l] = ke(), [d, u] = ke(!1), [f, p] = ke(!1), h = Se(
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
  return V(() => s.registerCommand(
    Kt,
    (g, y) => (a(y), !1),
    ye
  ), [s]), /* @__PURE__ */ $e(Bn, { children: [
    /* @__PURE__ */ M(Km, { onStateChange: h }),
    /* @__PURE__ */ $e("div", { className: "toolbar", children: [
      /* @__PURE__ */ M(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(ch, void 0);
          },
          title: Nr ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ M("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ M(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(lh, void 0);
          },
          title: Nr ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ M("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ M(Fp, {}),
      o === s && /* @__PURE__ */ $e(Bn, { children: [
        /* @__PURE__ */ M(
          MN,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ M(Fp, {})
      ] }),
      /* @__PURE__ */ M("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), wN = _a(), ON = {}, RN = {};
function $N() {
  return /* @__PURE__ */ M("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Ac(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function zp(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = L(n) ? n.getLastDescendant() ?? n : n;
  return Ta(r, i);
}
function Kp(e, t, r) {
  Fk(e, () => Ii(t));
  const n = N();
  if (!A(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    ge(o) && i.add(o);
  }), i.forEach((s) => ob(s, t, r));
}
const Rb = En(function({
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
  const u = Q(null), f = Q(null), p = Q(null), h = Q(null), g = Q(t), y = Q(void 0), k = Q(void 0), b = Q(void 0), T = Q(void 0), E = Q(!1), [S, w] = ke(t), [$, z] = ke(0), [B, ce] = ke(), {
    isReadonly: Y = !1,
    structureProtectionMode: xe = "off",
    onHiddenContentDelete: se,
    hasExternalUI: q = !1,
    hasSpellCheck: J = !1,
    textDirection: W = "ltr",
    markerMenuTrigger: K = "\\",
    view: ee,
    nodes: oe,
    debug: Ke = !1,
    contextMenu: te,
    styleInfo: P,
    markerSettleDelayMs: ne,
    copyLimit: pe
  } = a ?? RN, he = ee ?? wN, Xe = Rs(he) && (he.markerMode !== "hidden" || !he.hasSpacing || he.hasGutterParaMarkers || he.hasActiveTextFocusBox) ? {
    ...he,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : he, yt = Q(Xe);
  Qt(yt.current, Xe) || (yt.current = Xe);
  const ie = yt.current, Qe = et(() => oe ?? ON, [oe]), Ua = et(() => te, [te]), hi = et(
    () => GC(P ?? Io),
    [P]
  ), Ae = Q(c);
  Qt(Ae.current, c) || (Ae.current = c);
  const We = Ae.current, be = Rs(ie), Et = Y || be, De = Xe !== he;
  V(() => {
    be && !Y && We?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), De && We?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ie?.markerMode === "visible" && !Y && We?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [be, Y, De, We, ie?.markerMode]);
  const lr = Q(null), ro = et(() => {
    if (ie.markerMode !== "editable") return;
    const R = P ?? Io;
    return {
      getContext: () => lr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (I) => _1(
        R,
        I,
        Qe.extraValidMarkers
      ),
      getEnterItems: (I) => v1(
        R,
        I,
        Qe.extraValidMarkers
      ),
      apply: (I, G) => {
        const X = lr.current;
        X && (G.trigger === "enter" ? X.splitParagraphWithMarker(I.marker) : X.applyMarkerMenuSelection(I, G));
      },
      commitTypedCloser: (I) => {
        lr.current?.commitTypedCloser(I);
      }
    };
  }, [ie, P, Qe.extraValidMarkers]), Jt = (R) => {
    E.current || (E.current = !0, Ae.current?.warn(
      `Editor: cannot ${R} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, es = (R) => {
    if (be)
      throw new Error(
        `Cannot ${R} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Vr = (R) => {
    if (es(R), Et) throw new Error(`Cannot ${R} in readonly mode`);
  }, Pn = () => !!u.current && zu(u.current), no = et(
    () => ({
      namespace: "platformEditor",
      theme: { ...my, showCharMarkerTitles: ie.showCharMarkerTitles },
      editable: !Et,
      editorState: void 0,
      // Handling of errors during update
      onError(R) {
        throw R;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [dt, ...be ? g_ : Eu]
    }),
    [Et, be, ie.showCharMarkerTitles]
  );
  _o.initialize(We);
  function At(R) {
    if (R !== void 0 && !YA(R, Qe.extraValidMarkers))
      throw new Error(`Unsupported character marker '${R}'`);
  }
  const Yt = Se(() => {
    const R = u.current;
    if (!R) return g.current;
    const I = ef(R), G = k.current;
    if ((!I || I.size === 0) && !G) return g.current;
    const X = R.getEditorState(), _e = X.toJSON();
    return X.read(
      () => aN(
        _e,
        I ?? /* @__PURE__ */ new Set(),
        { viewOptions: ie, getMarker: hi, logger: We },
        G,
        b.current
      )
    ) ?? g.current;
  }, [ie, hi, We]);
  function vr(R, I, G) {
    if (be && I === "remote") {
      Ae.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    es("apply an update");
    const X = Pn(), _e = !X && u.current ? Or(u.current, fr) : void 0;
    u.current?.update(
      () => {
        I === "remote" && St(Ss), X || St(fr), G && St(G), K_(R, ie, Qe, We);
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
          _e?.(), !X && u.current && pc(u.current);
          const it = u.current?.getEditorState();
          if (!it) return;
          const Ue = _o.deserializeEditorState(it, ie);
          if (Ue) {
            const Ze = !Qt(g.current, Ue);
            if (Ze && (g.current = Ue), Ze || !Qt(S, Ue)) {
              const Pt = ff(R, it, "apply");
              T.current = Ue, s?.(Ue, R, I, Pt);
            }
          }
        }
      }
    );
  }
  const gi = {
    focus() {
      u.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return Pn();
    },
    undo() {
      u.current?.dispatchCommand(ch, void 0);
    },
    redo() {
      u.current?.dispatchCommand(lh, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      Vr("cut"), u.current && Du(u.current);
    },
    copy() {
      u.current && Lu(u.current);
    },
    paste() {
      Vr("paste"), u.current && Uu(u.current);
    },
    pastePlainText() {
      Vr("paste as plain text"), u.current && Fu(u.current);
    },
    getUsj() {
      return Yt();
    },
    commitPendingMarkerEdits() {
      const R = u.current;
      if (!R) return;
      const I = !Pn(), G = I ? Or(R, fr) : void 0;
      R.update(
        () => {
          I && St(fr), R.dispatchCommand(xb, void 0);
        },
        { discrete: !0 }
      ), G?.(), I && pc(R);
    },
    setMarkerSettleSuspended(R) {
      u.current?.dispatchCommand(Tb, R);
    },
    setTransientInput(R) {
      if (!R) {
        k.current = void 0;
        return;
      }
      const I = u.current?.getEditorState().read(() => {
        const G = N();
        return A(G) && G.isCollapsed() ? G.focus.key : void 0;
      });
      k.current = { input: R, nodeKey: I ?? b.current?.key };
    },
    setUsj(R) {
      if (!Qt(g.current, R)) {
        g.current = R, k.current = void 0;
        const I = Qt(S, R);
        w(R), I && z((G) => G + 1);
      }
    },
    applyUpdate(R, I = "remote") {
      vr(R, I);
    },
    replaceEmbedUpdate(R, I) {
      const G = u.current?.read(() => TS(R, I));
      G ? this.applyUpdate(G) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${R}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (be) {
        Jt("get the selection");
        return;
      }
      return u.current?.read(Cu);
    },
    setSelection(R) {
      if (be) {
        Jt("set the selection");
        return;
      }
      u.current?.update(() => {
        const I = Sa(R);
        I !== void 0 && (nr(I), St(kh));
      });
    },
    setAnnotation(R, I, G, X, _e) {
      if (be) {
        Jt("set an annotation");
        return;
      }
      let it, Ue, Ze, Pt;
      typeof X == "function" || X === void 0 ? (it = X, Ue = _e) : (it = X.onClick, Ue = X.onRemove, Ze = X.onMouseEnter, Pt = X.onMouseLeave), f.current?.setAnnotation(
        R,
        Bd(I),
        G,
        it,
        Ue,
        Ze,
        Pt
      );
    },
    removeAnnotation(R, I) {
      f.current?.removeAnnotation(Bd(R), I);
    },
    formatPara(R) {
      Vr("format a paragraph"), u.current?.update(
        () => {
          const I = N();
          if (!A(I)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${R}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const G = I.isBackward() ? I.focus : I.anchor, X = qe(G.getNode(), Ee);
          if (X) {
            const _e = I.isBackward() ? I.anchor : I.focus, Ue = !I.isCollapsed() && !X.is(_e.getNode()) && !X.isParentOf(_e.getNode()) ? { key: _e.key, offset: _e.offset, type: _e.type } : void 0, Ze = Yr();
            if (Ze.anchor.set(G.key, G.offset, G.type), Ze.focus.set(G.key, G.offset, G.type), nr(Ze), !Ml(R, ie)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${R}"`
              );
              return;
            }
            if (!Ue) return;
            const Pt = ae(Ue.key);
            if (!Pt?.isAttached()) return;
            const Wr = Pt.getTopLevelElement();
            if (!Wr) return;
            const Ut = X.getNextSibling();
            if (!ge(Ut)) return;
            let Xt = Ut.getNextSibling();
            for (; Xt; ) {
              const io = Xt.is(Wr), so = Xt.getNextSibling();
              if (ge(Xt)) {
                const ln = Yr();
                ln.anchor.set(Xt.getKey(), 0, "element"), ln.focus.set(Xt.getKey(), Xt.getChildrenSize(), "element"), nr(ln), Kp(ln, R, ie);
              }
              if (io) break;
              Xt = so;
            }
            return;
          }
          Kp(I, R, ie);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(R) {
      return u.current?.read(
        () => u.current?.getElementByKey(R) ?? void 0
      );
    },
    removeCharacterMarker(R) {
      if (Et) throw new Error("Cannot remove character marker in readonly mode");
      At(R);
      let I = !1;
      return u.current?.update(
        () => {
          const G = N();
          A(G) && (I = uy(G, R, ie));
        },
        { discrete: !0 }
      ), I;
    },
    replaceCharacterMarker(R, I) {
      if (Et) throw new Error("Cannot replace character marker in readonly mode");
      At(R), At(I);
      let G = !1;
      return u.current?.update(
        () => {
          const X = N();
          A(X) && (G = cP(X, R, I));
        },
        { discrete: !0 }
      ), G;
    },
    extendCharacterMarker(R, I) {
      if (Et) throw new Error("Cannot extend character marker in readonly mode");
      At(R), I?.forEach(
        (X) => At(X)
      );
      let G = !1;
      return u.current?.update(
        () => {
          const X = N();
          A(X) && (G = lP(
            X,
            R,
            I,
            ie
          ));
        },
        { discrete: !0 }
      ), G;
    },
    insertMarker(R) {
      if (Et) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!dl(R, Qe.extraValidMarkers))
        throw new Error(`Unsupported marker '${R}'`);
      const I = fl(
        R,
        y,
        ie,
        Qe,
        We,
        void 0,
        P
      );
      return I.action({ editor: u.current, reference: r }), I.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!Y)
        return u.current?.getEditorState().read(() => f0());
    },
    applyMarkerMenuSelection(R, I) {
      if (Y) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (R.kind !== "closeTag" && !dl(R.marker, Qe.extraValidMarkers))
        throw new Error(`Unsupported marker '${R.marker}'`);
      let G;
      return u.current.update(() => {
        G = T0(R, I, r, {
          expandedNoteKeyRef: y,
          viewOptions: ie,
          nodeOptions: Qe,
          logger: c,
          styleInfo: P
        });
      }), G;
    },
    splitParagraphWithMarker(R) {
      if (Y) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        Ml(R, ie);
      });
    },
    commitTypedMarker(R, I) {
      if (Y) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let G = !1;
      return u.current.update(() => {
        G = k0(R, I), G || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), G;
    },
    commitTypedCloser(R) {
      if (Y) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let I = !1;
      return u.current.update(() => {
        I = fb(R), I || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), I;
    },
    insertNote(R, I, G) {
      Vr("insert a note"), u.current?.update(
        () => {
          const X = Yg(
            R,
            I,
            G,
            r,
            ie,
            Qe,
            We
          );
          Ac(X, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(R) {
      u.current?.update(() => {
        const I = Pr(R);
        I && (Yc(I, ie), Ac(I, y));
      });
    },
    selectAfterNote(R) {
      const I = u.current;
      if (!I) return;
      const G = !Pn(), X = G ? Or(I, fr) : void 0;
      if (I.update(
        () => {
          G && St(fr);
          const _e = Pr(R);
          _e && Qg(_e);
        },
        { discrete: !0 }
      ), X?.(), G) {
        pc(I);
        const _e = Or(
          I,
          fr
        );
        I.update(
          () => {
            St(fr), I.dispatchCommand(Kt, void 0);
          },
          { discrete: !0 }
        ), _e();
      }
    },
    selectNoteTextOffset(R, I, G) {
      u.current?.update(() => {
        const X = Pr(R);
        if (!X) return;
        const _e = G?.glyph;
        (G?.field === "category" ? u_(X, I, _e) || bf(X, 0) : bf(X, I, _e)) || Yc(X, ie), Ac(X, y);
      });
    },
    getNoteOps(R) {
      const I = u.current;
      return I ? Ai(I, () => {
        const G = Pr(R);
        if (G)
          return Ta(G);
      }) : void 0;
    },
    getOpsAfterNote(R) {
      const I = u.current;
      return I ? Ai(I, () => {
        const G = Pr(R);
        return G ? zp(G) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(R) {
      const I = u.current, G = I ? Ai(I, () => {
        const Ue = Pr(R);
        if (!Ue) return;
        const Ze = bu(Ue, "apply");
        return { ops: zp(Ue), notePosition: Ze };
      }) : void 0;
      if (!G) return;
      const { ops: X, notePosition: _e } = G;
      if (X.length === 0 || _e === void 0) return X;
      const it = X.reduce(
        (Ue, Ze) => Ue + (typeof Ze.insert == "string" ? Ze.insert.length : 1),
        0
      );
      return vr([{ retain: _e + 1 }, { delete: it }], "remote", ql), X;
    },
    getNoteIndex(R) {
      const I = u.current;
      return I ? Ai(I, () => xu(R)) : void 0;
    },
    getNoteKey(R) {
      const I = u.current;
      return I ? Ai(I, () => Pr(R)?.getKey()) : void 0;
    },
    highlightNote(R) {
      p.current?.setHighlightedNote(R);
    },
    get toolbarEndRef() {
      return h;
    }
  };
  lr.current = gi, sa(d, () => gi), V(() => {
    const R = u.current;
    if (R)
      return R.registerUpdateListener(({ editorState: I }) => {
        I.read(() => {
          const G = N();
          if (!A(G) || !G.isCollapsed()) return;
          const X = G.focus.getNode();
          v(X) && (b.current = { key: X.getKey(), offset: G.focus.offset });
        });
      });
  }, []);
  const mi = Se(
    (R, I, G, X, _e) => {
      if (be) return;
      const it = _o.deserializeEditorState(R, ie);
      if (it) {
        const Ue = !Qt(g.current, it);
        if (Ue && (g.current = it), Ue || !Qt(S, it)) {
          const Ze = ff(X, R), Pt = Ze && !_e.read(() => ae(Ze)) ? Ze : void 0;
          T.current = it, s?.(it, X, "local", Pt);
        }
      }
    },
    [S, s, ie, be]
  );
  V(() => {
    const R = u.current;
    if (!(!R || !s))
      return R.registerUpdateListener(({ tags: I, dirtyElements: G, dirtyLeaves: X }) => {
        !I.has(zl) && (G.size === 0 && X.size === 0 || I.has(Ss) || !ef(R)?.size) || queueMicrotask(() => {
          const _e = Yt();
          !_e || Qt(T.current, _e) || (T.current = _e, s(_e, void 0, "local", void 0));
        });
      });
  }, [s, Yt]);
  const Nn = Se(
    (R) => {
      ce(R.contextMarker), o?.(R);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ $e(dh, { initialConfig: no, children: [
      /* @__PURE__ */ M(Jv, { isEditable: !Et }),
      /* @__PURE__ */ $e("div", { className: "editor-container", children: [
        q ? /* @__PURE__ */ M(Km, { onStateChange: Nn }) : /* @__PURE__ */ M(
          "div",
          {
            className: "editor-toolbar-container" + (Et ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ M(
              NN,
              {
                ref: h,
                editorRef: lr,
                isReadonly: Et,
                onStateChange: Nn
              }
            )
          }
        ),
        /* @__PURE__ */ $e("div", { className: "editor-inner", children: [
          /* @__PURE__ */ M(ph, { editorRef: u }),
          /* @__PURE__ */ M(
            Uk,
            {
              contentEditable: /* @__PURE__ */ M(
                fh,
                {
                  className: `editor-input usfm ${z_(ie).join(" ")}${ie.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ie.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: J
                }
              ),
              placeholder: /* @__PURE__ */ M($N, {}),
              ErrorBoundary: hh
            }
          ),
          q && /* @__PURE__ */ M(Gv, {}),
          /* @__PURE__ */ M(gh, {}),
          r && n && /* @__PURE__ */ M(uN, { scrRef: r, onScrRefChange: n }),
          r && !q && /* @__PURE__ */ M(
            WE,
            {
              trigger: K,
              scrRef: r,
              contextMarker: B,
              getMarkerAction: (R) => fl(
                R,
                y,
                ie,
                Qe,
                We,
                void 0,
                P
              ),
              editableHarness: ro
            }
          ),
          /* @__PURE__ */ M(
            RM,
            {
              scripture: S,
              scriptureRef: g,
              nodeOptions: Qe,
              editorAdaptor: xr,
              viewOptions: ie,
              logger: We
            },
            $
          ),
          /* @__PURE__ */ M(WM, { onChange: i }),
          /* @__PURE__ */ M(
            q_,
            {
              onChange: mi,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: ax
            }
          ),
          /* @__PURE__ */ M(hP, { viewOptions: ie }),
          /* @__PURE__ */ M(R_, { ref: f, logger: We }),
          /* @__PURE__ */ M(mv, { viewOptions: ie }),
          /* @__PURE__ */ M(Nv, {}),
          /* @__PURE__ */ M(Iv, {}),
          ie?.markerMode !== "editable" && /* @__PURE__ */ M(Lv, { logger: We }),
          /* @__PURE__ */ M(Kv, { options: Ua }),
          /* @__PURE__ */ M(c1, { limit: pe, viewOptions: ie }),
          /* @__PURE__ */ M(Hv, {}),
          /* @__PURE__ */ M(Xv, {}),
          /* @__PURE__ */ M(Zv, {}),
          /* @__PURE__ */ M(C0, {}),
          /* @__PURE__ */ M(
            CM,
            {
              isEnabled: ie?.markerMode !== "editable",
              structureProtectionMode: xe,
              copyLimit: pe,
              onHiddenContentDelete: se,
              logger: We
            }
          ),
          /* @__PURE__ */ M(
            V0,
            {
              viewOptions: ie,
              getMarker: hi,
              logger: We,
              markerSettleDelayMs: ne,
              structureProtectionMode: xe,
              copyLimit: pe
            }
          ),
          ie?.markerMode === "visible" && /* @__PURE__ */ M(a1, { viewOptions: ie, copyLimit: pe }),
          /* @__PURE__ */ M(
            X0,
            {
              styleInfo: P,
              viewOptions: ie,
              logger: We
            }
          ),
          /* @__PURE__ */ M($M, { ref: p }),
          /* @__PURE__ */ M(
            qM,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Qe,
              viewOptions: ie,
              logger: We
            }
          ),
          /* @__PURE__ */ M(yM, {}),
          /* @__PURE__ */ M(fv, {}),
          /* @__PURE__ */ M(cv, {}),
          /* @__PURE__ */ M(cN, { viewOptions: ie, logger: We }),
          /* @__PURE__ */ M(HM, {}),
          /* @__PURE__ */ M(PE, { structureProtectionMode: xe }),
          /* @__PURE__ */ M(NE, { textDirection: W }),
          /* @__PURE__ */ M(OE, {}),
          /* @__PURE__ */ M(jE, {}),
          l
        ] }),
        Ke && /* @__PURE__ */ M(CN, {})
      ] })
    ] }, ie.verseLayout ?? "inline")
  );
}), Bw = En(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ M(Rb, { ref: r, ...i });
});
function $b() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ia(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? $b() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function qb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? $b() : r,
    quote: e,
    type: "thread"
  };
}
function Bp(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function qN(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Pc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class IN {
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
    this._comments = t, Pc(this);
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
          const c = Bp(a);
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
    this._comments = i, Pc(this);
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
          const c = Bp(a);
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
    return this._comments = n, Pc(this), t.type === "comment" ? {
      index: s,
      markedComment: qN(t)
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
    return t !== null ? t.doc.get("comments", Nd) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new wd(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Nd();
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
      tx,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      kt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof rx) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const h = p.insert, g = p.retain, y = p.delete, k = d.parent, b = d === r ? void 0 : k instanceof wd && this._comments.find((T) => T.id === k.get("id"));
              if (Array.isArray(h)) {
                const T = f;
                h.slice().reverse().forEach((E) => {
                  const S = E.get("id"), $ = E.get("type") === "thread" ? qb(
                    E.get("quote"),
                    E.get("comments").toArray().map(
                      (z) => ia(
                        z.get("content"),
                        z.get("author"),
                        z.get("id"),
                        z.get("timeStamp"),
                        z.get("deleted")
                      )
                    ),
                    S
                  ) : ia(
                    E.get("content"),
                    E.get("author"),
                    S,
                    E.get("timeStamp"),
                    E.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment($, b, T);
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
function LN(e) {
  const [t, r] = ke(e.getComments());
  return V(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function DN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Q(null);
  return V(() => {
    i.current !== null && i.current.focus();
  }, []), V(() => {
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
  }, [n, e]), /* @__PURE__ */ M("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ $e("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ M("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ M(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ M("div", { className: "Modal__content", children: t })
  ] }) });
}
function UN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return zn(
    /* @__PURE__ */ M(DN, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Ib() {
  const [e, t] = ke(null), r = Se(() => {
    t(null);
  }, []), n = et(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ M(UN, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const FN = {
  ...my,
  paragraph: "CommentEditorTheme__paragraph"
};
function zN(...e) {
  return e.filter(Boolean).join(" ");
}
function Mn({
  "data-test-id": e,
  children: t,
  className: r,
  onClick: n,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ M(
    "button",
    {
      disabled: i,
      className: zN(
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
function KN({
  className: e
}) {
  return /* @__PURE__ */ M(fh, { className: e || "ContentEditable__root" });
}
function BN({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ M("div", { className: t || "Placeholder__root", children: e });
}
const jp = Fl("INSERT_INLINE_COMMAND");
function jN({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Q(null), s = Se(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return V(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Ks(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ M("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ M("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ M("i", { className: "icon add-comment" }) }) });
}
function VN({ onEscape: e }) {
  const [t] = fe();
  return V(() => t.registerCommand(
    ah,
    (r) => e(r),
    Rr
  ), [t, e]), null;
}
function Lb({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ M(dh, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: FN
  }, children: /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ M(
      Qk,
      {
        contentEditable: /* @__PURE__ */ M(KN, { className: e }),
        placeholder: /* @__PURE__ */ M(BN, { children: s }),
        ErrorBoundary: hh
      }
    ),
    /* @__PURE__ */ M(Xk, { onChange: n }),
    /* @__PURE__ */ M(gh, {}),
    t !== !1 && /* @__PURE__ */ M(Gk, {}),
    /* @__PURE__ */ M(VN, { onEscape: r }),
    /* @__PURE__ */ M(Jk, {}),
    i !== void 0 && /* @__PURE__ */ M(ph, { editorRef: i })
  ] }) });
}
function Db(e, t) {
  return Se(
    (r, n) => {
      r.read(() => {
        e(Zk()), t(!ex(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function WN({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = ke(""), [s, o] = ke(!1), a = Q(null), c = et(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Q(null), d = Fb(), u = Se(() => {
    e.getEditorState().read(() => {
      const g = N();
      if (A(g)) {
        l.current = g.clone();
        const y = g.anchor, k = g.focus, b = zk(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), T = a.current;
        if (b !== null && T !== null) {
          const { left: E, bottom: S, width: w } = b.getBoundingClientRect(), $ = Kk(e, b);
          let z = $.length === 1 ? E + w / 2 - 125 : E - 125;
          z < 10 && (z = 10), T.style.left = `${z}px`, T.style.top = `${S + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const B = $.length, { container: ce } = c, Y = c.elements, xe = Y.length;
          for (let se = 0; se < B; se++) {
            const q = $[se];
            let J = Y[se];
            J === void 0 && (J = document.createElement("span"), Y[se] = J, ce.appendChild(J));
            const K = `position:absolute;top:${q.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${q.left}px;height:${q.height}px;width:${q.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            J.style.cssText = K;
          }
          for (let se = xe - 1; se >= B; se--) {
            const q = Y[se];
            ce.removeChild(q), Y.pop();
          }
        }
      }
    });
  }, [e, c]);
  Ks(() => {
    u();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, u]), V(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        qb(g, [ia(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = Db(i, o);
  return /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ M(
      Lb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ M(Mn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ M(
        Mn,
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
function HN({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = ke(""), [s, o] = ke(!1), a = Q(null), c = Fb(), l = Db(i, o);
  return /* @__PURE__ */ $e(Bn, { children: [
    /* @__PURE__ */ M(
      Lb,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ M(
      Mn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(ia(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(Ok, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ M("i", { className: "send" })
      }
    )
  ] });
}
function Ub({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ $e(Bn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ $e("div", { className: "Modal__content", children: [
      /* @__PURE__ */ M(
        Mn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ M(
        Mn,
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
function Vp({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = ke(0);
  V(() => {
    const d = () => {
      s(performance.timeOrigin + performance.now());
    };
    d();
    const u = window.setInterval(d, 6e4);
    return () => {
      window.clearInterval(u);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Ib();
  return /* @__PURE__ */ $e("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ M("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ $e("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ M("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ $e(Bn, { children: [
      /* @__PURE__ */ M(
        Mn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ M(
              Ub,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ M("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function GN({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = fe(), [a, c] = ke(0), [l, d] = Ib(), u = et(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return V(() => {
    const f = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(f);
    };
  }, [a]), /* @__PURE__ */ M("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ $e(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(g)[0], b = ae(k);
                Pe(b) && b.selectStart();
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
          /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ $e("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ M("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ M(
              Mn,
              {
                onClick: () => {
                  d("Delete Thread", (g) => /* @__PURE__ */ M(
                    Ub,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: g
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ M("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ M("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((g) => /* @__PURE__ */ M(
            Vp,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            g.id
          )) }),
          /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ M(
            HN,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ M(
      Vp,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function JN({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Q(null), o = r.length === 0;
  return /* @__PURE__ */ $e("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ M("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ M(
      GN,
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
function Fb() {
  const e = mh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function YN({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = mh(), [a] = fe(), c = et(() => {
    const z = new IN(a, s);
    return r && z.registerOnChange(r), t?.(z), z;
  }, [a, s, r, t]), l = LN(c), d = et(() => /* @__PURE__ */ new Map(), []), [u, f] = ke(), [p, h] = ke([]), [g, y] = ke(!1), [k, b] = ke(!1), { yjsDocMap: T } = o;
  V(() => {
    if (e) {
      const z = e("comments", T);
      return c.registerCollaboration(z);
    }
    return () => {
    };
  }, [c, e, T]);
  const E = Se(() => {
    a.update(() => {
      const z = N();
      z !== null && (z.dirty = !0);
    }), y(!1);
  }, [a]), S = Se(
    (z, B) => {
      if (z.type === "comment") {
        const ce = c.deleteCommentOrThread(z, B);
        if (!ce)
          return;
        const { markedComment: Y, index: xe } = ce;
        c.addComment(Y, B, xe);
      } else {
        c.deleteCommentOrThread(z);
        const ce = B !== void 0 ? B.id : z.id, Y = d.get(ce);
        Y !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const xe of Y) {
              const se = ae(xe);
              Pe(se) && (se.deleteID(yn, ce), se.hasNoIDsForEveryType() && No(se));
            }
          });
        });
      }
    },
    [c, a, d]
  ), w = Se(
    (z, B, ce, Y) => {
      c.addComment(z, ce), B && (a.update(() => {
        A(Y) && Rh(Y, yn, z.id);
      }), y(!1));
    },
    [c, a]
  );
  V(() => {
    const z = [];
    let B;
    for (const ce of p) {
      const Y = d.get(ce);
      if (Y !== void 0)
        for (const xe of Y) {
          const se = a.getElementByKey(xe);
          se !== null && (se.classList.add("selected"), z.push(se), B = window.setTimeout(() => {
            b(!0);
          }, 0));
        }
    }
    return () => {
      B !== void 0 && window.clearTimeout(B);
      for (const ce of z)
        ce.classList.remove("selected");
    };
  }, [p, a, d]), V(() => {
    if (!a.hasNodes([dt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const z = /* @__PURE__ */ new Map();
    return Ie(
      uh(
        a,
        dt,
        (B) => vs(B.getTypedIDs()),
        (B, ce) => {
          for (const [Y, xe] of Object.entries(B.getTypedIDs()))
            xe.forEach((se) => {
              ce.addID(Y, se);
            });
        }
      ),
      a.registerMutationListener(
        dt,
        (B) => {
          a.getEditorState().read(() => {
            for (const [ce, Y] of B) {
              const xe = ae(ce);
              let se = [];
              Y === "destroyed" ? se = z.get(ce) ?? [] : Pe(xe) && (se = xe.getTypedIDs()[yn] ?? []);
              for (const q of se) {
                let J = d.get(q);
                z.set(ce, se), Y === "destroyed" ? J !== void 0 && (J.delete(ce), J.size === 0 && d.delete(q)) : (J === void 0 && (J = /* @__PURE__ */ new Set(), d.set(q, J)), J.has(ce) || J.add(ce));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: B, tags: ce }) => {
        B.read(() => {
          const Y = N();
          let xe = !1, se = !1;
          if (A(Y)) {
            const q = Y.anchor.getNode();
            if (v(q)) {
              const J = Bx(q, yn, Y.anchor.offset) ?? [];
              J !== null && (h(J), xe = !0), Y.isCollapsed() || (f(q.getKey()), se = !0);
            }
          }
          xe || h((q) => q.length === 0 ? q : []), se || f(null), !ce.has("collaboration") && A(Y) && y(!1);
        });
      }),
      a.registerCommand(
        jp,
        () => {
          const B = window.getSelection();
          return B !== null && B.removeAllRanges(), y(!0), !0;
        },
        Vn
      )
    );
  }, [a, d]);
  const $ = () => {
    a.dispatchCommand(jp, void 0);
  };
  return /* @__PURE__ */ $e(Bn, { children: [
    g && zn(
      /* @__PURE__ */ M(
        WN,
        {
          editor: a,
          cancelAddComment: E,
          submitAddComment: w
        }
      ),
      document.body
    ),
    u != null && !g && zn(
      /* @__PURE__ */ M(
        jN,
        {
          anchorKey: u,
          editor: a,
          showComments: k,
          onAddComment: $
        }
      ),
      document.body
    ),
    n !== null && zn(
      /* @__PURE__ */ M(
        Mn,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => b(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ M("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && zn(
      /* @__PURE__ */ M(
        JN,
        {
          comments: l,
          submitAddComment: w,
          deleteCommentOrThread: S,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function XN() {
  const e = Q(void 0), t = Se((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function QN(e, t) {
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
function ZN(e, t) {
  V(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      QN(r, t);
    };
  }, [t, e]);
}
const jw = En(function(t, r) {
  const n = Q(null), i = Q(!0), s = Q(null), [o, a] = ke(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, y = (h ?? !1) || Rs(g), [k, b] = XN();
  ZN(f, k), V(() => {
    if (process.env.NODE_ENV !== "production") {
      const S = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(S), p || console.warn(S);
    }
  }, [p]), sa(r, () => ({
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
    setMarkerSettleSuspended(S) {
      n.current?.setMarkerSettleSuspended(S);
    },
    setTransientInput(S) {
      n.current?.setTransientInput(S);
    },
    setUsj(S) {
      n.current?.setUsj(S);
    },
    applyUpdate(S, w) {
      n.current?.applyUpdate(S, w);
    },
    replaceEmbedUpdate(S, w) {
      return n.current?.replaceEmbedUpdate(S, w);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(S) {
      n.current?.setSelection(S);
    },
    setAnnotation(S, w, $, z, B) {
      typeof z == "function" || z === void 0 ? n.current?.setAnnotation(S, w, $, z, B) : n.current?.setAnnotation(S, w, $, z);
    },
    removeAnnotation(S, w) {
      n.current?.removeAnnotation(S, w);
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
    replaceCharacterMarker(S, w) {
      return n.current?.replaceCharacterMarker(S, w) ?? !1;
    },
    extendCharacterMarker(S, w) {
      return n.current?.extendCharacterMarker(S, w) ?? !1;
    },
    insertMarker(S) {
      return n.current?.insertMarker(S);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(S, w) {
      return n.current?.applyMarkerMenuSelection(S, w);
    },
    splitParagraphWithMarker(S) {
      n.current?.splitParagraphWithMarker(S);
    },
    commitTypedMarker(S, w) {
      return n.current?.commitTypedMarker(S, w) ?? !1;
    },
    commitTypedCloser(S) {
      return n.current?.commitTypedCloser(S) ?? !1;
    },
    insertNote(S, w, $) {
      n.current?.insertNote(S, w, $);
    },
    selectNote(S) {
      n.current?.selectNote(S);
    },
    selectAfterNote(S) {
      n.current?.selectAfterNote(S);
    },
    selectNoteTextOffset(S, w, $) {
      n.current?.selectNoteTextOffset(S, w, $);
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
  const T = Se(
    (S, w, $, z) => {
      if (!d) return;
      const B = k.current?.getComments();
      d(S, B, w, $, z);
    },
    [k, d]
  ), E = Se(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const S = k.current?.getComments();
    l(S);
  }, [k, i, l]);
  return V(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ M(Yk, { children: /* @__PURE__ */ $e(Rb, { ref: n, onUsjChange: T, ...f, children: [
    /* @__PURE__ */ M(
      YN,
      {
        setCommentStore: b,
        onChange: E,
        showCommentsContainerRef: y ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ M("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Fn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function ew(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function tw(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const rw = /^[#\w().,%/\s-]+$/;
function Gr(e) {
  return e != null;
}
const nw = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, iw = {
  left: "right",
  right: "left"
}, sw = "var(--usj-font-fallback, serif)";
function zb(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${ew(i)}"`).join(", ")}, ${sw}`;
}
const Ol = ".editor-input.usfm", ow = /^[\w.#[\]="':()>+~*,\s-]+$/;
function aw(e) {
  return ow.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Ol}".`
  ), Ol);
}
function cw(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(zb(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (rw.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Gr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Gr(t.firstLineIndent) && s.push(`text-indent: ${Fn(t.firstLineIndent * 20 * r)}vw`), Gr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Fn(t.leftMargin * 20 * r)}vw`), Gr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Fn(t.rightMargin * 20 * r)}vw`
  ), Gr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Fn(t.spaceBefore * r)}pt`), Gr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Fn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = nw[n ? iw[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Wp = { c: 150, ca: 133, cp: 150 };
function Hp(e, t) {
  return e && Gr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function lw(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Gr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Hp(e.markers.c, Wp.c);
  return ["ca", "cp"].map((i) => {
    const s = Hp(
      e.markers[i],
      Wp[i]
    ), o = Fn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function Vw(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Ol } = t, s = aw(i), o = [], a = [];
  e.defaultFont && a.push(zb(e.defaultFont)), Gr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Fn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = cw(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${tw(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...lw(e, s)), o.join(`
`);
}
export {
  am as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  Bw as Editorial,
  Cs as GENERATOR_NOTE_CALLER,
  bh as HIDDEN_NOTE_CALLER,
  jw as Marginal,
  x as MarkerType,
  om as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Nu as STANDARD_VIEW_MODE,
  Io as defaultStyleInfo,
  Kw as directionToNames,
  __ as filterAndRankItems,
  Vw as generateUsjCss,
  Fw as getDefaultViewMode,
  _a as getDefaultViewOptions,
  v1 as getEnterMenuItems,
  _1 as getMarkerMenuItems,
  zw as getViewMode,
  Ru as getViewOptions,
  Rs as isBlockVerseLayout,
  gn as isInsertEmbedOpOfType,
  L_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
