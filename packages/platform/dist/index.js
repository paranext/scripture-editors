import { jsx as M, jsxs as De, Fragment as Zn } from "react/jsx-runtime";
import { forwardRef as In, useState as Te, useRef as re, useCallback as Ee, useEffect as H, useMemo as et, memo as _k, createContext as yh, useContext as bh, Children as vk, isValidElement as Ek, cloneElement as Mk, useImperativeHandle as ba, useLayoutEffect as io } from "react";
import { assertSafeKey as st, isValidBookCode as Ak, MARKER_OBJECT_PROPS as Pk, USJ_VERSION as kr, USJ_TYPE as xr, isUsjTextContentLocation as wk, indexesFromUsjJsonPath as kh, isUsjAttributeKeyLocation as Nk, isUsjAttributeMarkerLocation as Ok, isUsjClosingAttributeMarkerLocation as Rk, isUsjMarkerLocation as $k, isUsjClosingMarkerLocation as qk, isUsjPropertyValueLocation as Ik, getUsjDocumentLocationTypeName as Lk, usjJsonPathFromIndexes as zn, EMPTY_USJ as xh } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as nt, $parseSerializedNode as ei, DecoratorNode as so, ElementNode as Sr, isHTMLElement as fi, createState as ka, $getState as ge, $setState as Rt, $isRangeSelection as A, $isElementNode as L, $isTextNode as v, $getSelection as P, $isNodeSelection as pi, ParagraphNode as Yl, TextNode as tt, $createTextNode as Oe, $getCommonAncestor as Dk, $createNodeSelection as Xl, $setSelection as Tt, $isLineBreakNode as hi, $getEditor as Dr, NODE_STATE_KEY as oo, $hasUpdateTag as Th, $getNodeByKey as le, $getRoot as Qe, $createRangeSelection as Ur, $createPoint as mr, SELECTION_CHANGE_COMMAND as Vt, $getCharacterOffsets as Ql, KEY_DOWN_COMMAND as ar, COMMAND_PRIORITY_HIGH as Re, HISTORY_MERGE_TAG as Zl, DELETE_CHARACTER_COMMAND as rr, DELETE_WORD_COMMAND as qs, DELETE_LINE_COMMAND as Wi, COMMAND_PRIORITY_NORMAL as qr, CONTROLLED_TEXT_INSERTION_COMMAND as En, COMMAND_PRIORITY_CRITICAL as ae, PASTE_COMMAND as It, CUT_COMMAND as Ut, REMOVE_TEXT_COMMAND as eu, CLICK_COMMAND as Hi, COMMAND_PRIORITY_LOW as gt, COMMAND_PRIORITY_EDITOR as ti, createCommand as xa, isDOMNode as Is, $getNearestNodeFromDOMNode as Qr, $isRootNode as tu, DROP_COMMAND as Ta, $isDecoratorNode as Ln, COPY_COMMAND as Zr, getDOMSelection as Ch, isSelectionWithinEditor as Sh, $createRangeSelectionFromDom as ru, isDOMTextNode as Uk, BLUR_COMMAND as nu, $addUpdateTag as ht, INSERT_PARAGRAPH_COMMAND as ri, INSERT_LINE_BREAK_COMMAND as Vc, $getPreviousSelection as Kk, DRAGSTART_COMMAND as Uo, isExactShortcutMatch as Tn, SKIP_DOM_SELECTION_TAG as pr, CLEAR_HISTORY_COMMAND as Fk, KEY_ESCAPE_COMMAND as iu, BEFORE_INPUT_COMMAND as zk, COMPOSITION_START_COMMAND as Bk, FOCUS_COMMAND as su, $isRootOrShadowRoot as jk, CAN_UNDO_COMMAND as Vk, CAN_REDO_COMMAND as Wk, getDOMSelectionFromTarget as Hk, $onUpdate as _h, KEY_ENTER_COMMAND as vh, LineBreakNode as Eh, $copyNode as Gk, createEditor as Jk, SELECT_ALL_COMMAND as Yk, getDOMTextNode as Xk, HISTORIC_TAG as ou, UNDO_COMMAND as Mh, REDO_COMMAND as Ah, CLEAR_EDITOR_COMMAND as Qk } from "lexical";
import { addClassNamesToElement as Pi, removeClassNamesFromElement as ac, $findMatchingParent as Pe, $dfsIterator as Ca, $dfs as gi, mergeRegister as $e, registerNestedElementResolver as Ph, $unwrapNode as Wc, IS_APPLE as gr } from "@lexical/utils";
import { useLexicalNodeSelection as Zk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Qt } from "fast-equals";
import vs from "quill-delta";
import { useLexicalComposerContext as me } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as ex } from "unicode-segmenter/grapheme";
import { copyToClipboard as tx, $getLexicalContent as rx } from "@lexical/clipboard";
import { TreeView as nx } from "@lexical/react/LexicalTreeView";
import * as ix from "react-dom";
import { createPortal as Xn } from "react-dom";
import { LexicalComposer as wh } from "@lexical/react/LexicalComposer";
import { ContentEditable as Nh } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Oh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Rh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as $h } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as sx } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as ox, createDOMRange as ax, createRectsFromDOMRange as cx } from "@lexical/selection";
import { autoUpdate as lx, computePosition as ux, shift as dx, flip as fx } from "@floating-ui/dom";
import { $generateNodesFromDOM as px } from "@lexical/html";
import { AutoFocusPlugin as hx } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as gx } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as qh, LexicalCollaboration as mx } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as yx } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as bx } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as kx, $isRootTextContentEmpty as xx } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Tx } from "@lexical/yjs";
import { Array as Qd, Map as Zd, YArrayEvent as Cx } from "yjs";
const cc = (e) => nt(ei(e)), Sx = {
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
function Ih(e) {
  return Sx[e];
}
const U = " ", Ko = "​", or = U, au = `${U}|`, ir = "p", Ls = "+", Lh = "-", Fo = "chapter", Hc = "verse", ef = "invalid", _x = "text-spacing", vx = "formatted-font", Ex = "marker-", cu = "external-usj-mutation", Dh = "selection-change", $t = "cursor-change", Gc = "annotation-change", Ds = "delta-change", Uh = "marker-settle", Mx = [
  cu,
  Dh,
  $t,
  Gc,
  Ds
], ni = "zmsc-s", Bi = "zmsc-e", Ax = [ni, Bi], Px = [
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
  ni,
  Bi
], Kh = 1, lu = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], wx = lu.filter((e) => e !== "sid" && e !== "eid");
class Tr extends so {
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
    return new Tr(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return zh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Px.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Kh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Fh(e) {
  return Ax.includes(e);
}
function zh(e, t, r, n, i) {
  return nt(new Tr(e, t, r, n, void 0, i));
}
function it(e) {
  return e instanceof Tr;
}
const uu = "f", Nx = [
  // Footnote
  uu,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function vo(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Ox = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Bh = 1;
class Ue extends Sr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = uu, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (vo(t) === "crossref" ? Lh : Ls), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Ue(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => $x(t) ? {
        conversion: Rx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return du().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Nx.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", vo(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", vo(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && fi(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", vo(this.getMarker()))), { element: r };
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
      version: Bh
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
function Rx(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: du(t, r, n) };
}
function du(e, t, r, n, i) {
  return nt(new Ue(e, t, r, n, i));
}
function $x(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ue.isValidMarker(t) && e.classList.contains(Ue.getType());
}
function W(e) {
  return e instanceof Ue;
}
var C;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(C || (C = {}));
var x;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(x || (x = {}));
const Jc = {
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
}, Bn = {
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
}, tf = {
  p: { children: Bn },
  q: { children: Bn },
  q1: { children: Bn },
  q2: { children: Bn },
  q3: { children: Bn },
  q4: { children: Bn },
  b: { children: Bn },
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
function Ir(e) {
  const t = Object.hasOwn(Jc, e) ? Jc[e] : void 0, r = Object.hasOwn(tf, e) ? tf[e] : void 0;
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
const jh = "v", Vh = "c", jn = "fig", rf = "tr", Yc = "esb", Wh = "esbe", nf = "periph", sf = "alt", of = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, qx = {
  "": "start",
  c: "center",
  r: "end"
};
function af(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function cf(e) {
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
const Ix = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Lx(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Ko && s + 1 < e.length && cf(e[s + 1]) || (cf(o) ? (r || (i = t.length, t += o), r = !0) : Ix.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Dx(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Ux(e, t) {
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
const Kx = /^(?:qt[1-5]?|ts)-[se]$/;
function fu(e) {
  return Kx.test(e) || Fh(e);
}
function lc(e, t) {
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
function Fx(e, t, r) {
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
      a(Lx(e.slice(i, m))), i = m;
      continue;
    }
    const c = i, { name: l, next: u } = Ux(e, i + 1);
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
    if (l === jh) {
      const { word: g, next: m } = lc(e, i);
      i = m, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === Vh) {
      const { word: g, next: m } = lc(e, i);
      i = m, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === x.Note || h === void 0 && Ue.isValidMarker(l)) {
      const { word: g, next: m } = lc(e, i);
      i = m, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (h === x.Milestone || h === void 0 && fu(l)) {
      const g = Jx(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const m = e.indexOf("\\", i), b = m === -1 ? e.length : m;
        o(e.slice(c, b)), i = b;
      }
      continue;
    }
    h === x.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : h === x.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : zo(p) ? (d(), zo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Yc || l === Wh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const lf = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function zo(e) {
  return Object.hasOwn(lf, e) ? lf[e] : void 0;
}
function zx(e) {
  return zo(e) !== void 0;
}
const Bx = /([-\w]+)\s*=\s*"(.*?)"/g, jx = /[\s\u200B]*[\n\r][\s\u200B]*/g, Hh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Sa(e) {
  return Hh[e];
}
const Vx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Wx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Us(e, t, r = Hh[t]) {
  const n = e.replace(jx, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Bx)];
  if (s.length > 0) {
    if (!Wx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Vx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function _a(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Hx(e) {
  const t = jr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Gx(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Us(e.slice(n + 1, i), r, _a(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Jx(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Us(s.slice(o + 1), r, _a(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Gx(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Nr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", U);
}
function bn(e) {
  return e.content || (e.content = []), e.content;
}
function jr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? bn(u) : d ? bn(d) : r;
  let p = !1;
  const h = () => {
    if (s)
      return o.length > a ? bn(o[o.length - 1].object) : bn(s);
    if (o.length > 0)
      return bn(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: ir, content: [] }, f().push(i);
    }
    return bn(i);
  }, g = (X) => {
    const w = h();
    typeof X == "string" && typeof w[w.length - 1] == "string" ? w[w.length - 1] = w[w.length - 1] + X : w.push(X);
  }, m = (X) => {
    for (let w = X; w < o.length; w += 1) {
      const Z = o[w].object;
      Z.closed = "false";
    }
  }, b = () => {
    m(0), o.length = 0;
  }, T = (X) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, X || (s.closed = "false"), s = void 0);
  }, k = () => {
    c = void 0, l = void 0;
  }, E = (X, w, Z) => {
    b();
    const [, pe, xe, Ke] = Z, ft = {
      type: "table:cell",
      marker: Ke ? w.slice(0, w.indexOf("-")) : w,
      align: qx[pe],
      content: []
    };
    Ke && (ft.colspan = String(Number(Ke) + 1 - Number(xe))), bn(X).push(ft), i = ft;
  }, S = (X) => {
    u && (X || (u.closed = "false"), u = void 0);
  }, N = () => {
    d = void 0;
  };
  let q, K = "", V;
  const ue = () => {
    K && g(Nr(K)), K = "";
  }, te = (X = !1) => {
    q?.type === "sidebar" ? K = "" : X && K.endsWith(`
`) && (K = K.slice(0, -1)), q = void 0, ue();
  }, ye = () => {
    if (!V)
      return;
    const X = { type: "char", marker: V.marker, content: [] };
    V.value && (X.content = [Nr(V.value)]), h().push(X), o.push({ object: X }), V = void 0;
  }, se = (X, w) => {
    p = !1, k(), b(), T(!1), i = { type: "para", marker: X, content: [] }, w && (i.content = [Nr(w)]), f().push(i);
  }, I = () => {
    V && (se(V.marker, V.value), V = void 0);
  };
  let Y;
  const G = (X) => {
    if (!Y)
      return;
    let { value: w } = Y;
    Y = void 0, X && w.endsWith(`
`) && (w = w.slice(0, -1));
    const Z = w.indexOf("|"), pe = Z >= 0 ? Us(w.slice(Z + 1), nf) : void 0, xe = Z >= 0 ? w.slice(0, Z) : w, Ke = Z >= 0 && (!pe || !!xe && !!pe[sf]), ft = Ke ? void 0 : pe, cr = Ke ? w : xe, ce = {
      type: "periph",
      ...cr ? { [sf]: Nr(cr) } : {},
      ...ft
    };
    ce.content = [], f().push(ce), d = ce, i = void 0;
  };
  let z;
  const O = () => {
    if (z) {
      if (z.shape === "para")
        se(jn, z.value);
      else {
        const X = { type: "char", marker: jn, content: [] };
        z.value && (X.content = [Nr(z.value)]), h().push(X), o.push({ object: X });
      }
      z = void 0;
    }
  }, F = Fx(e, t?.getMarker ?? Ir, n);
  for (let X = 0; X < F.length; X++) {
    const w = F[X];
    if (V) {
      if (w.kind === "text") {
        V.value += w.text;
        continue;
      }
      if (V.shape === "char" && w.kind === "end" && w.marker.replace(/^\+/, "") === V.marker) {
        if (V.value.trim() === "") {
          h().push({ type: "char", marker: V.marker, content: [] }), V = void 0, te();
          continue;
        }
        Object.assign(V.target, {
          [V.attrName]: Nr(V.value.trim())
        });
        const Z = V.marker;
        if (V = void 0, Z === "ca") {
          const pe = F[X + 1];
          pe?.kind === "text" && /^[\s\u200B]*$/.test(pe.text) && X++;
        }
        continue;
      }
      if (V.shape === "para" && (w.kind === "para" || w.kind === "chapter")) {
        const Z = V.value.replace(/[\s\u200B]+$/, "");
        Z === "" ? (se(V.marker), V = void 0) : (Object.assign(V.target, { [V.attrName]: Nr(Z) }), V = void 0);
      } else {
        q = void 0, (w.kind === "para" || w.kind === "chapter") && V.value.endsWith(`
`) && (V.value = V.value.slice(0, -1)), V.shape === "para" ? I() : ye(), X--;
        continue;
      }
    }
    if (Y) {
      if (w.kind === "text" || w.kind === "optbreak") {
        Y.value += w.kind === "text" ? w.text : "//";
        continue;
      }
      G(w.kind === "para" || w.kind === "chapter"), X--;
      continue;
    }
    if (z) {
      if (w.kind === "text" || w.kind === "optbreak") {
        z.value += w.kind === "text" ? w.text : "//";
        continue;
      }
      if (w.kind === "end" && w.marker.replace(/^\+/, "") === jn) {
        const Z = z.value.indexOf("|"), pe = Z >= 0 ? Us(z.value.slice(Z + 1), jn) : void 0;
        if (pe) {
          const xe = {};
          for (const [cr, ce] of Object.entries(pe))
            xe[cr === "src" ? "file" : cr] = ce;
          const Ke = {
            type: "figure",
            marker: jn,
            ...xe
          }, ft = z.value.slice(0, Z);
          ft && (Ke.content = [Nr(ft)]), g(Ke), z = void 0;
          continue;
        }
      }
      O(), X--;
      continue;
    }
    if (q)
      if (w.kind === "text") {
        if (w.text.includes(`
`) && /^[\s\u200B]*$/.test(w.text)) {
          K += w.text;
          continue;
        }
        te();
      } else if (w.kind === "charOpen" || w.kind === "para") {
        const Z = w.kind === "para" || !w.isNested ? zo(w.marker) : void 0;
        if (Z && Z.targetTypes.includes(q.type)) {
          K = "", V = {
            target: q,
            attrName: Z.attrName,
            marker: w.marker,
            shape: Z.shape,
            value: ""
          };
          continue;
        }
        te(w.kind === "para");
      } else
        te(w.kind === "chapter");
    if (!s && !n && (w.kind === "charOpen" && !w.isNested && w.marker === jn || w.kind === "para" && w.marker === jn)) {
      b(), z = { shape: w.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (w.kind) {
      case "text": {
        let Z = w.text;
        if (!s && Z.endsWith(`
`)) {
          const pe = F[X + 1];
          (pe === void 0 || pe.kind === "para" || pe.kind === "chapter") && (Z = Z.slice(0, -1));
        }
        Z && g(Nr(Z));
        break;
      }
      case "para": {
        const Z = !s && !n;
        if (Z && w.marker === rf) {
          b(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: rf, content: [] }, bn(c).push(l), i = l, p = !1;
          break;
        }
        if (Z && l) {
          const pe = of.exec(w.marker);
          if (pe && af(pe)) {
            E(l, w.marker, pe);
            break;
          }
        }
        if (k(), !n && w.marker === Yc) {
          b(), T(!1), S(!1);
          const pe = {
            type: "sidebar",
            marker: Yc,
            content: []
          };
          f().push(pe), u = pe, i = void 0, q = u, p = !1;
          break;
        }
        if (w.marker === Wh && u) {
          b(), T(!1), S(!0), i = void 0;
          break;
        }
        if (!n && w.marker === nf) {
          b(), T(!1), S(!1), N(), Y = { value: "" }, i = void 0, p = !1;
          break;
        }
        se(w.marker);
        break;
      }
      case "verse": {
        T(!1);
        const Z = { type: "verse", marker: jh, number: w.number };
        g(Z), q = Z;
        break;
      }
      case "chapter": {
        b(), T(!1), k(), S(!1), N(), i = void 0;
        const Z = {
          type: "chapter",
          marker: Vh,
          number: w.number
        };
        r.push(Z), q = Z, p = !0;
        break;
      }
      case "note": {
        T(!1);
        const Z = h();
        s = { type: "note", marker: w.marker, caller: w.caller, content: [] }, a = o.length, Z.push(s), q = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !w.isNested) {
          const xe = of.exec(w.marker);
          if (xe && af(xe)) {
            E(l, w.marker, xe);
            break;
          }
        }
        if (!w.isNested) {
          const xe = s ? a : 0;
          m(xe), o.length = xe;
        }
        const Z = h(), pe = { type: "char", marker: w.marker, content: [] };
        Z.push(pe), o.push({ object: pe });
        break;
      }
      case "end": {
        const Z = w.marker.replace(/^\+/, ""), pe = s ? a : 0, xe = o.findLastIndex((Ke, ft) => ft >= pe && Ke.object.marker === Z);
        xe >= 0 ? (Yx(o[xe].object), m(xe + 1), o.length = xe) : s && s.marker === Z ? T(!0) : (m(pe), o.length = pe, g({ type: "unmatched", marker: `${w.marker}*` }));
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
  if (Y && G(!0), z && O(), V)
    if (V.shape === "para") {
      const X = V.value.replace(/[\s\u200B]+$/, "");
      X === "" ? se(V.marker) : Object.assign(V.target, { [V.attrName]: Nr(X) }), V = void 0;
    } else
      V.value.endsWith(`
`) && (V.value = V.value.slice(0, -1)), ye();
  b(), T(!1), S(!1);
  const ee = (X) => {
    for (const w of X)
      typeof w != "string" && w.content && (ee(w.content), w.content.length === 0 && delete w.content);
  };
  return ee(r), r;
}
function Yx(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Us(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const ii = ka("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Mn = ka("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ke = ka("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Vr = "marker-trailing-space", Gh = 1, Xx = "marker", pu = ka("isGutterMarker", {
  parse: (e) => e === !0
});
class an extends so {
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
    return new an(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Zx(t) ? {
        conversion: Qx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return en().updateFromJSON(t);
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
    return r && fi(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: Gh
    };
  }
  // Mutation
  /**
   * Stays `false` even though a paragraph's gutter glyph can be selected: it is selected only by
   * clicking it (`ParaMarkerSelectionPlugin`, shared-react), and arrow keys never stop on it.
   * Returning `true` would also change Lexical's native Backspace-beside-a-decorator behavior at
   * every paragraph start, where `StructureKeyboardPlugin` arms paragraph merges.
   */
  isKeyboardSelectable() {
    return !1;
  }
}
function Qx(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: en(t, r) };
}
function en(e, t) {
  return nt(new an(e, t));
}
function Jh(e) {
  return Rt(en(Xx, e), pu, !0);
}
function tn(e) {
  return Wt(e) && ge(e, pu);
}
function Zx(e) {
  return e?.tagName === "span";
}
function Wt(e) {
  return e instanceof an;
}
function Yh(e) {
  return e?.type === an.getType();
}
const vn = "internal-comment", eT = [vn], Xh = Object.freeze({}), Xc = Object.freeze({}), Qc = Object.freeze({}), Zc = Object.freeze({}), el = Object.freeze({}), tT = 1, wi = /* @__PURE__ */ new Map(), ys = /* @__PURE__ */ new Map(), Ni = /* @__PURE__ */ new Map(), Oi = /* @__PURE__ */ new Map();
class ut extends Sr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Xh, r, n, i, s, o) {
    super(o), this.__typedIDs = Eo(t), this.__typedOnClicks = uc(r), this.__typedOnRemoves = dc(n), this.__typedOnMouseEnters = fc(i), this.__typedOnMouseLeaves = pc(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Eo(t.__typedIDs), n = uc(t.__typedOnClicks), i = dc(t.__typedOnRemoves), s = fc(t.__typedOnMouseEnters), o = pc(t.__typedOnMouseLeaves);
    return new ut(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return eT.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ks().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: tT
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Pi(n, Vn(t.theme.typedMark, a)), c.length > 1 && Pi(n, Vn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Pi(n, Vn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = Vn(n.theme.typedMark, s), d = Vn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Pi(r, u) : l === 0 && ac(r, u), c === 1 ? l === 2 && Pi(r, d) : l === 1 && ac(r, d));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || ac(r, Vn("annotationId", h));
      for (const h of a)
        f.has(h) || Pi(r, Vn("annotationId", h));
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
    return Ne(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Eo(r.__typedIDs);
    r.__typedIDs = Eo(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Bo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = uc(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Ne(t) ? wi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = dc(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Ne(t) ? ys.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = fc(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Ne(t) ? Ni.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = pc(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Ne(t) ? Oi.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Ne(a))
      return;
    st(t), st(r);
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
    if (!Ne(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Bo(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Ks(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), wi.delete(r.getKey()), ys.delete(r.getKey()), Ni.delete(r.getKey()), Oi.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = wi.get(this.getKey());
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
    const n = Ni.get(this.getKey());
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
    const n = Oi.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Xc) {
      const t = wi.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      wi.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    wi.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    st(t), st(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = kn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = kn(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Xc) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Qc) {
      const t = ys.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      ys.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    ys.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    st(t), st(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = kn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = kn(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Qc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Zc) {
      const t = Ni.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Ni.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Ni.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    st(t), st(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = kn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = kn(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Zc) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === el) {
      const t = Oi.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Oi.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Oi.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    st(t), st(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = kn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = kn(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === el) {
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
    const i = rT(t, r);
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
    for (; Ne(t) && df(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Ne(r) && df(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = nT(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = iT(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = sT(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = oT(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Eo(e = Xh) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (st(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      st(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function uc(e) {
  if (!e || e === Xc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    st(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      st(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function dc(e) {
  if (!e || e === Qc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    st(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      st(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function fc(e) {
  if (!e || e === Zc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    st(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      st(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function pc(e) {
  if (!e || e === el)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    st(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      st(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function kn(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function uf(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function rT(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function df(e, t) {
  const r = uf(e), n = uf(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function nT(e, t) {
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
function iT(e, t) {
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
function sT(e, t) {
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
function oT(e, t) {
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
function Vn(e, t) {
  return `${e}-${t}`;
}
function ff(e) {
  return `external-${e}`;
}
function Ks(e, t, r, n, i) {
  return nt(new ut(e, t, r, n, i));
}
function Ne(e) {
  return e instanceof ut;
}
function Qh(e) {
  return e?.type === ut.getType();
}
function Bo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Zh(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let h, g;
  for (let m = 0; m < u; m++) {
    const b = a[m];
    if (L(g) && g.isParentOf(b))
      continue;
    const T = m === 0, k = m === u - 1;
    let E = null;
    if (v(b)) {
      const S = b.getTextContentSize(), N = T ? f : 0, q = k ? p : S;
      if (N === 0 && q === 0)
        continue;
      const K = b.splitText(N, q);
      E = K.length > 1 && (K.length === 3 || T && !k || q === S) ? K[1] : K[0];
    } else {
      if (Ne(b))
        continue;
      L(b) && b.isInline() && (E = b);
    }
    if (E !== null) {
      if (E && E.is(h))
        continue;
      const S = E.getParent();
      (S == null || !S.is(h)) && (g = void 0), h = S, g === void 0 && (g = Ks(), g.addID(t, r, n, i, s, o), E.insertBefore(g)), g.append(E);
    } else
      h = void 0, g = void 0;
  }
  t === vn && L(g) && (d ? g.selectStart() : g.selectEnd());
}
function aT(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Ne(n))
      return n.getTypedIDs()[t];
    if (v(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Ne(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const cT = ["type", "marker", "content"], tl = "unknown", eg = 1, lT = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class mi extends Sr {
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
    return new mi(r, n, i, s);
  }
  static importDOM() {
    return {
      [tl]: (t) => dT(t) ? {
        conversion: uT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return hu().updateFromJSON(t);
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
    return lT.has(this.getTag());
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
    const t = document.createElement(tl);
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
      version: eg
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
    if (pi(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function uT(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: hu(t, r) };
}
function hu(e, t, r) {
  return nt(new mi(e, t, r));
}
function dT(e) {
  return e?.tagName.toLowerCase() === tl;
}
function _e(e) {
  return e instanceof mi;
}
const tg = 1, fT = "attribute-run";
function hc(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class cn extends Sr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new cn(r, n);
  }
  static importJSON(t) {
    return rg(t.runKind).updateFromJSON(t);
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
    t.classList.add(fT);
    const r = hc(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = hc(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = hc(this.__runKind);
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
      version: tg
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
function rg(e) {
  return nt(new cn(e));
}
function Ge(e) {
  return e instanceof cn;
}
const Fs = "id", ng = 1, pT = [
  "type",
  "marker",
  "code",
  "content"
];
class Ht extends Sr {
  __marker = Fs;
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
    return new Ht(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return ig(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Ak(t);
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
      version: ng
    };
  }
}
function ig(e, t) {
  return nt(new Ht(e, t));
}
function we(e) {
  return e instanceof Ht;
}
function gu(e) {
  return e?.type === Ht.getType();
}
const jo = "c", sg = 1, hT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Xt extends Sr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = jo, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Xt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return og().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Fo, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: sg
    };
  }
}
function og(e, t, r, n, i) {
  return nt(new Xt(e, t, r, n, i));
}
function ze(e) {
  return e instanceof Xt;
}
function gT(e) {
  return e?.type === Xt.getType();
}
const ag = [
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
], cg = [
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
  ...ag,
  ...cg
], lg = 1, yT = ["type", "marker", "content"];
class Ae extends Sr {
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
    return new Ae(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (mT.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && ag.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && cg.includes(t);
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
    return Ae.isValidFootnoteMarker(t) || Ae.isValidCrossReferenceMarker(t);
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
    return rn().updateFromJSON(t);
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
    return pf(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), pf(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && fi(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: lg
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = rn(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function pf(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function bT(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: rn(t) };
}
function rn(e, t) {
  return nt(new Ae(e, t));
}
function kT(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ae.isValidMarker(t) && e.classList.contains(Ae.getType());
}
function j(e) {
  return e instanceof Ae;
}
function xT(e) {
  return e?.type === Ae.getType();
}
const ug = 1, TT = "c", dg = "span";
class Wr extends so {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = TT, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Wr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => fg(t) ? {
        conversion: CT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return mu().updateFromJSON(t);
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
    const t = document.createElement(dg);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Fo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && fi(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Fo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: ug
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
function CT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: mu(t) };
}
function mu(e, t, r, n, i, s) {
  return nt(new Wr(e, t, r, n, i, s));
}
function fg(e) {
  return e ? e.classList.contains(Fo) && e.tagName.toLowerCase() === dg : !1;
}
function ao(e) {
  return e instanceof Wr;
}
function ST(e) {
  return e?.type === Wr.getType();
}
const pg = 1;
class An extends Yl {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new An(t.__key);
  }
  static importJSON(t) {
    return yr().updateFromJSON(t);
  }
  getMarker() {
    return ir;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: pg
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = yr();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function yr() {
  return nt(new An());
}
function Kr(e) {
  return e instanceof An;
}
function va(e) {
  return e?.type === An.getType();
}
const _T = [
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
], hg = 1, vT = ["type", "marker", "content"];
class dt extends Yl {
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
    return new dt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (_T.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: ET,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Gi().updateFromJSON(t);
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
    return r && fi(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: hg
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Gi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function ET(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Gi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Gi(e, t) {
  return nt(new dt(e, t));
}
function he(e) {
  return e instanceof dt;
}
function yu(e) {
  return e?.type === dt.getType();
}
const Vo = "v", gg = 1, MT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Mt extends tt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Vo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Mt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return mg().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Hc, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: gg
    };
  }
}
function mg(e, t, r, n, i, s) {
  return nt(new Mt(e, t, r, n, i, s));
}
function He(e) {
  return e instanceof Mt;
}
function yg(e) {
  return e?.type === Mt.getType();
}
const AT = "​", Ji = AT;
var hf;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(hf || (hf = {}));
var gf;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(gf || (gf = {}));
function PT() {
  return Oe(Ji);
}
function wT(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Ji, ""));
}
function co(e) {
  return e.length > 0 && e.includes(Ji) && e.replaceAll(Ji, "") === "";
}
function lo(e) {
  return v(e) && co(e.getTextContent());
}
function bg(e) {
  return gT(e) || ST(e);
}
function rt(e) {
  return ze(e) || ao(e);
}
function kg(e, t) {
  return e.find((r) => rt(r) && r.getNumber() === t.toString());
}
function NT(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && rt(r));
}
function rl(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function OT(e) {
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
function Gt(e) {
  return Pe(e, W) ?? void 0;
}
function RT(e) {
  return we(e) || ze(e) || j(e) || ao(e) || Kr(e) || it(e) || he(e) || W(e) || He(e) || _e(e);
}
function bu(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function xg(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function qe(e) {
  return We(e) || we(e);
}
function We(e) {
  return he(e) || Kr(e);
}
function $T(e) {
  return yu(e) || va(e);
}
function Wo(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function si(e, t) {
  const r = ge(t, ii), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function qT(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? Dk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function IT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Yi(e) {
  return e?.type === tt.getType();
}
function LT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function DT(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Be(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function at(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Tg(e, t, r) {
  const n = Be(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function sr(e, t) {
  let r = Be(e);
  return t && (r += `${U}${t}`), r += " ", r;
}
function UT(e) {
  const t = e[oo];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Cg(e) {
  return _g(e) || Yi(e) && UT(e) === "attribute" ? "" : Yi(e) && e.text !== U ? e.text : xT(e) ? e.children.map((t) => Cg(t)).join("") : "";
}
function KT(e) {
  return e.map((r) => Cg(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Jt(e) {
  return " " + e + U;
}
function ku(e) {
  const t = [];
  for (const r of e) {
    if (!j(r))
      continue;
    const n = Sg(r);
    n !== or && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Sg(e) {
  return $(e) || _r(e) || v(e) && ge(e, ke) === "attribute" ? "" : v(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => Sg(t)).join("") : "";
}
function _r(e) {
  return Wt(e) && e.getTextType() === "marker";
}
function Ct(e) {
  return $(e) || _r(e);
}
function xu(e) {
  if (!e || !Ct(e))
    return !1;
  const t = e.getParent();
  return we(t) && e.is(t.getFirstChild());
}
function _g(e) {
  return Su(e) || Yh(e) && e.textType === "marker";
}
function Sn(e) {
  if (!pi(e))
    return;
  const t = e.getNodes();
  if (t.length !== 1)
    return;
  const [r] = t, n = Tu(r.getParent());
  return n?.is(r) ? n : void 0;
}
function Pn(e) {
  const t = Sn(e)?.getParent();
  return he(t) ? t : void 0;
}
function Tu(e) {
  if (!he(e))
    return;
  const t = e.getFirstChild();
  if (tn(t))
    return Pe(e, _e) ? void 0 : t;
}
const Di = /* @__PURE__ */ new WeakMap();
function FT(e) {
  return Di.set(e, (Di.get(e) ?? 0) + 1), () => {
    const t = (Di.get(e) ?? 1) - 1;
    t > 0 ? Di.set(e, t) : Di.delete(e);
  };
}
function zT() {
  const e = Dr();
  return e.isEditable() && (Di.get(e) ?? 0) > 0;
}
function BT(e) {
  if (!Tu(e.getParent())?.is(e) || !zT())
    return !1;
  const t = Xl();
  return t.add(e.getKey()), Tt(t), !0;
}
function mf(e, t) {
  jT(e, t), e.setMarker(t);
}
function jT(e, t) {
  const r = e.getMarker(), n = Be(r), i = Be(r, !0), s = at(r), o = at(r, !0), a = Ae.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Ct(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if ($(c))
        c.setMarker(t);
      else if (_r(c)) {
        const f = l.startsWith(Be("", !0));
        c.setTextContent(u ? Be(t, f) : at(t, f));
      }
    }
  });
}
function Xe(e, t = Pk) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function je(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function vg(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Eg(e) {
  if (!A(e))
    return yf(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return yf(e) ?? t ?? void 0;
  } catch (n) {
    if (vg(n))
      return t ?? void 0;
    throw n;
  }
}
function VT(e, t) {
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
function Cu(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function WT(e) {
  return !!e && e.includes("-");
}
function Mg(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function yf(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function uo(e) {
  if (!e)
    return !1;
  if (hi(e) || $(e) || _r(e) || Ge(e) || Wt(e) && e.getTextType() === "attribute")
    return !0;
  if (v(e)) {
    const t = ge(e, ke);
    if (t === Vr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === U || co(r))
      return !0;
  }
  return !1;
}
function fo() {
  const e = Oe(U);
  return Rt(e, ke, Vr), e.setMode("token"), e;
}
function HT(e) {
  const t = e.getTextContent();
  t.startsWith(U) || e.setTextContent(U + t);
}
function vr(e) {
  return v(e) && ge(e, ke) === Vr;
}
function Ag(e) {
  const t = e.getFirstChild();
  if (!Ct(t) || t === null || vr(t.getNextSibling()))
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
function ss(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!uo(s)) {
      if (Ne(s)) {
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
function Ea(e) {
  let t = e.getParent();
  for (; t && Ne(t); )
    t = t.getParent();
  return t;
}
function GT(e, t) {
  return ss(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function JT(e, t) {
  const r = Ea(e);
  if (!r)
    return;
  const n = ss(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function YT(e, t) {
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
function Pg(e, t) {
  const r = ss(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (uo(n))
    return Pg(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Wo(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Wo(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function XT(e, t) {
  if (t <= 0)
    return 0;
  const r = ss(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? QT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function QT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const ZT = 1;
class Hr extends tt {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Jn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Hr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return St().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || Jn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Jn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Jn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Jn(r.__marker, r.__markerSyntax, t), r;
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
      version: ZT
    };
  }
}
function St(e, t, r) {
  return nt(new Hr(e, t, void 0, r));
}
function $(e) {
  return e instanceof Hr;
}
function Su(e) {
  return e?.type === Hr.getType();
}
function ln(e) {
  return e.getTextContent() === Jn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function eC(e) {
  e.setTextContent(Jn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Jn(e, t, r = !1) {
  return t === "closing" ? at(e, r) : t === "selfClosing" ? at("") : Be(e, r);
}
const tC = /* @__PURE__ */ new Set(["closed"]);
function Rr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !tC.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function wg(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Ng(e) {
  const t = Object.keys(e).filter((n) => !wx.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Og(e, t, r, n) {
  return wg(
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
function Ps(e) {
  return e.getChildren().find((t) => $(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function rC(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Ps(e) === void 0 && Rg(e) === void 0;
}
function Rg(e) {
  return e.getChildren().find((t) => v(t) && ge(t, ke) === "attribute");
}
function zs(e, t) {
  return po(e.getNextSibling(), t);
}
const nC = /^[ \u00A0]+$/;
function _u(e) {
  if (ln(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Be(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && nC.test(r.slice(t.length));
}
function po(e, t) {
  let r, n, i, s;
  return Ge(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), $(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  _u(e) && (r = e, e = e.getNextSibling()), v(e) && ge(e, ke) === "attribute" && (n = e, e = e.getNextSibling()), $(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && ln(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function nn(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!$(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (v(n) && n.getTextContent() === Jt(e.getCaller()))
    return n;
}
function vu(e) {
  const t = nn(e);
  return t ? po(t.getNextSibling(), "cat") : {};
}
function Ma(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || $(t)) && ge(t, ke) !== "attribute")
    return t;
}
function $g(e) {
  const t = Ma(e);
  return t ? po(t.getNextSibling(), "ca") : {};
}
function qg(e) {
  const t = Ma(e);
  if (!t)
    return;
  const r = po(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Ig(e) {
  const t = qg(e);
  return t ? po(t.getNextSibling(), "cp") : {};
}
function Lg(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (He(n))
        return n;
      if (!($(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && ge(n, ke) === "attribute" || j(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ge(n)))
        return;
    }
}
function Aa(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ge(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), $(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  _u(s) && (t = s, s = s.getNextSibling()), v(s) && ge(s, ke) === "attribute" && (r = s, s = s.getNextSibling()), $(s) && s.getMarkerSyntax() === "selfClosing" && ln(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Eu(e) {
  return j(Ea(e));
}
function Mu(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Eu(t) : t.getChildren().some((i) => j(i) && i.getMarker() === r) ? !0 : void 0;
}
function iC(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!$(t))
      return;
    const r = Mu(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function os(e) {
  return v(e) && e.getType() === tt.getType() && ge(e, ke) !== "attribute";
}
function Pa(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !$(t) || !j(r) || !Dg(t, r) || !os(e) ? 0 : e.getTextContent().startsWith(U) ? U.length : 0;
}
function Dg(e, t) {
  return e.getMarkerSyntax() === "opening" && Mu(e, t) !== void 0;
}
function Au(e, t) {
  if (!Dg(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return $(r) ? Mu(r, t) === !0 ? "spacer" : void 0 : os(r) ? r.getTextContent().startsWith(U) ? void 0 : "prefix" : "spacer";
}
function sC(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if ($(t) && Au(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Ug(e, t) {
  const r = P();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Kg(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!$(t))
      return;
    const r = Au(t, e);
    if (r !== void 0 && !Ug(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        v(n) && n.setTextContent(U + n.getTextContent());
      } else
        t.insertAfter(Oe(U));
  });
}
function Fg(e) {
  return e.isAttached() ? e.getChildren().some((t) => $(t) && Au(t, e) !== void 0 && Ug(t, e)) : !1;
}
const oC = "file", aC = "src", cC = "colspan", lC = "category", uC = "alt", dC = "closed", fC = "false";
function pC(e) {
  return e[dC] !== fC;
}
function hC(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === oC ? aC : t,
    r
  ]));
}
function zg(e, t) {
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
function Bg(e, t, r) {
  const n = r ?? {}, i = pC(n);
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
        opening: `\\${zg(t, n[cC])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Rr(hC(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [lC]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + Rr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [uC]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: Rr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: Rr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const Lt = { wantsRun: !1, valueText: void 0 }, un = {};
function gc(e, t) {
  if (t === "va")
    return e;
  const r = zs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Pu(e) {
  const t = P();
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
function wa(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = P();
  if (!A(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function gC(e) {
  return Ge(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : $(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && ge(e, ke) === "attribute";
}
function mC(e) {
  if ($(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!v(e) || ge(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!$(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function mc(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (He(t))
      return t;
    if (!gC(t))
      return;
  }
}
function bf(e) {
  return {
    kind: e,
    ownerPredicate: (t) => He(t),
    ownerOf: (t) => {
      if (Ge(t))
        return t.getRunKind() === e ? mc(t) : void 0;
      const r = t.getParent();
      return Ge(r) ? r.getRunKind() === e ? mc(r) : void 0 : mC(t) === e ? mc(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!He(t))
        return Lt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Lt : { wantsRun: !0, valueText: U + r };
    },
    scanPieces: (t) => He(t) ? zs(gc(t, e), e) : un,
    graceSite: (t, r) => He(t) ? !r.opener && !r.closer ? Pu(gc(t, e)) : wa(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => He(t) ? gc(t, e) : void 0
    }
  };
}
const yC = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => j(e),
  ownerOf: () => {
  },
  expectedPieces: () => Lt,
  scanPieces: () => un,
  graceSite: (e) => j(e) && Fg(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, bC = {
  kind: "char",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (!v(e) || ge(e, ke) !== "attribute")
      return;
    const t = e.getParent();
    return j(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || Ps(e) === void 0)
      return Lt;
    const t = Rr(e.getUnknownAttributes() ?? {}, Sa(e.getMarker()));
    return t === "" ? Lt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => j(e) ? { value: Rg(e) } : un,
  graceSite: (e, t) => {
    if (!j(e) || t.value)
      return !1;
    const r = Ps(e);
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
    insertRunBefore: (e) => j(e) ? Ps(e) : void 0
  }
};
function jg(e) {
  if ($(e))
    return e.getMarker() === "cat";
  if (!v(e) || ge(e, ke) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return $(t) && t.getMarker() === "cat";
}
function kC(e) {
  const t = e.getParent();
  if (!W(t))
    return;
  const r = nn(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!jg(n))
        return;
    }
}
const xC = {
  kind: "cat",
  ownerPredicate: (e) => W(e),
  ownerOf: (e) => {
    if (Ge(e))
      return e.getRunKind() === "cat" && W(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ge(t) ? t.getRunKind() === "cat" && W(t.getParent()) ? t.getParent() ?? void 0 : void 0 : jg(e) ? kC(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!W(e) || e.getIsCollapsed() !== !1)
      return Lt;
    const t = e.getCategory();
    return t === void 0 ? Lt : { wantsRun: !0, valueText: U + t };
  },
  scanPieces: (e) => W(e) ? vu(e) : un,
  graceSite: (e, t) => {
    if (!W(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = nn(e);
      return r !== void 0 && Pu(r);
    }
    return wa(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => W(e) ? nn(e) : void 0
  }
};
function TC(e) {
  return Ge(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : $(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && ge(e, ke) === "attribute";
}
function CC(e) {
  if ($(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!v(e) || ge(e, ke) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!$(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function SC(e) {
  const t = e.getParent();
  if (!ze(t))
    return;
  const r = Ma(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!TC(n))
        return;
    }
}
function kf(e) {
  const t = (r) => ze(r) ? e === "ca" ? Ma(r) : qg(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => ze(r),
    ownerOf: (r) => {
      if (Ge(r))
        return r.getRunKind() === e && ze(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ge(n) ? n.getRunKind() === e && ze(n.getParent()) ? n.getParent() ?? void 0 : void 0 : CC(r) === e ? SC(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!ze(r))
        return Lt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Lt : { wantsRun: !0, valueText: U + n };
    },
    scanPieces: (r) => ze(r) ? e === "ca" ? $g(r) : Ig(r) : un,
    graceSite: (r, n) => {
      if (!ze(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Pu(i);
      }
      return wa(n);
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
function Vg(e) {
  if ($(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && ge(e, ke) === "attribute";
}
function _C(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (it(t)) {
      const r = $(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!Vg(t))
      return;
  }
}
const vC = {
  kind: "milestone",
  ownerPredicate: (e) => it(e),
  ownerOf: (e) => {
    const t = Ge(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ge(e.getParent()) ? e.getParent() : Vg(e) ? e : void 0;
    if (!t || Ge(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ge(t) ? it(r) ? r : void 0 : _C(t);
  },
  expectedPieces: (e) => {
    if (!it(e))
      return Lt;
    const t = Og(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = Rr(t, _a(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : U + r };
  },
  scanPieces: (e) => {
    if (!it(e))
      return un;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Aa(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!it(e))
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
    return wa(t);
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
}, EC = Bg("optbreak", void 0, void 0).opening, MC = {
  kind: "optbreak",
  ownerPredicate: (e) => _e(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!_e(t) || t.getTag() !== "optbreak"))
      return v(e) || Wt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: EC }),
  scanPieces: (e) => _e(e) ? { value: e.getFirstChild() ?? void 0 } : un,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, AC = {
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
  expectedPieces: () => Lt,
  scanPieces: () => un,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, PC = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => j(e),
  ownerOf: () => {
  },
  expectedPieces: () => Lt,
  scanPieces: () => un,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Bs = [
  yC,
  bC,
  bf("va"),
  bf("vp"),
  xC,
  kf("ca"),
  kf("cp"),
  vC,
  MC,
  AC,
  PC
], wC = new Map(Bs.map((e) => [e.kind, e]));
function oi(e) {
  const t = wC.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function ai(e) {
  for (const t of Bs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function Wg(e) {
  return ai(e) !== void 0;
}
const Ho = "unmatched", Hg = 2;
function ws(e) {
  return `\\${e}`;
}
class dn extends tt {
  __marker;
  constructor(t = "", r) {
    super(ws(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new dn(r, n);
  }
  static importDOM() {
    return {
      [Ho]: (t) => OC(t) ? {
        conversion: NC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return wu().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? ws(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ws(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(ef), r.title = xf(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = xf(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Ho);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(ef), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: Hg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Gg(e) {
  return e.getTextContent() === ws(e.getMarker());
}
function xf(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function NC(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: wu(t) };
}
function wu(e) {
  return nt(new dn(e));
}
function OC(e) {
  return e?.tagName.toLowerCase() === Ho;
}
function fn(e) {
  return e instanceof dn;
}
const Jg = "table", nl = "immutable-table", Yg = 1, RC = ["type", "marker", "content"];
class yi extends Sr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return nl;
  }
  static clone(t) {
    return new yi(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return $C().updateFromJSON(t);
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
      type: nl,
      ...t !== void 0 && { unknownAttributes: t },
      version: Yg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function $C(e) {
  return nt(new yi(e));
}
function Xg(e) {
  return e instanceof yi;
}
function qC(e) {
  return e?.type === nl;
}
const Qg = "table:row", Tf = "immutable-table-row", Zg = 1, il = "tr", IC = ["type", "marker", "content"];
class as extends Sr {
  __marker;
  __unknownAttributes;
  constructor(t = il, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Tf;
  }
  static clone(t) {
    return new as(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return LC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? il).setUnknownAttributes(t.unknownAttributes);
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
      type: Tf,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Zg
    };
  }
}
function LC(e, t) {
  return nt(new as(e, t));
}
const em = "table:cell", Cf = "immutable-table-cell", tm = 1, sl = "tc1", DC = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function UC(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class cs extends Sr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = sl, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Cf;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new cs(r, n, i, s, o);
  }
  static importJSON(t) {
    return KC().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? sl).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = UC(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Cf,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: tm
    };
  }
}
function KC(e, t, r, n) {
  return nt(new cs(e, t, r, n));
}
function ls(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function Kt(e, t) {
  const r = ls(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function js(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function FC(e) {
  return e.getChildren().some((t) => $(t) && t.getMarkerSyntax() === "closing");
}
function zC(e) {
  return js(e) ? void 0 : { closed: "false" };
}
function BC(e, t, r, n) {
  const i = t.getMarker(), s = Eu(t), o = FC(t);
  if (n) {
    e.append(St(i, "opening", s));
    const [a] = r;
    os(a) && !a.getTextContent().startsWith(U) && a.setTextContent(U + a.getTextContent());
  }
  e.append(...r), o && e.append(St(i, "closing", s));
}
function ci(e) {
  return Pe(e, j) ?? void 0;
}
function jC(e) {
  let t = e.getParent();
  for (; j(t); )
    t = t.getParent();
  return t;
}
function ol(e) {
  const t = rm(e);
  return e.getChildren().every((r) => $(r) || t && ge(r, ke) === "attribute" || v(r) && r.getTextContent().replaceAll(U, "") === "");
}
function rm(e) {
  return js(e);
}
function VC(e, t) {
  const r = e.getUnknownAttributes(), n = r ? Rr(r, Sa(e.getMarker())) : "";
  n !== "" && t.insertAfter(Oe(n)), e.remove();
}
function WC(e, t) {
  if (js(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(St(e.getMarker(), "closing", Eu(e)));
}
function HC(e, t) {
  return j(e) && !js(e) && !js(t);
}
function GC(e, t, r) {
  ol(e) && e.getChildren().forEach((i) => {
    $(i) || i.remove();
  });
  const [n] = t;
  r && os(n) && !n.getTextContent().startsWith(U) && n.setTextContent(U + n.getTextContent()), e.append(...t);
}
function JC(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = rm(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = $(l) && l.getMarkerSyntax() === "closing", f = s && ge(l, ke) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = HC(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      GC(e, o, n);
    else {
      const l = rn(t.getMarker(), zC(t));
      BC(l, t, o, n), e.insertAfter(l), ol(l) ? l.remove() : c = l;
    }
  i && !a && WC(t, n), ol(t) && VC(t, c);
}
function Xi(e, t) {
  let r = e.getParent();
  for (; j(r); )
    JC(e, r, t), r = e.getParent();
}
function Na(e) {
  if (v(e) && !$(e)) {
    const t = Pa(e);
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !$(r));
    if (t) {
      Na(t);
      return;
    }
    e.selectEnd();
  }
}
const ji = /* @__PURE__ */ new WeakMap();
function YC(e, t) {
  return ji.set(e, t), () => {
    ji.get(e) === t && ji.delete(e);
  };
}
function Sf(e) {
  return ji.get(e);
}
function XC(e) {
  return ji.get(Dr())?.has(e.getKey()) ?? !1;
}
function QC(e) {
  ji.get(Dr())?.add(e.getKey());
}
function ZC(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function al(e) {
  return !!(e.opener || e.value || e.closer);
}
function _f(e) {
  return /^\s/.test(e);
}
function Nu(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !_f(t) || !_f(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Oa(e, t, r) {
  return r.wantsRun ? Nu(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : ZC(t);
}
function eS(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Nu(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function nm(e, t) {
  return !al(e.scanPieces(t));
}
function ho(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Oa(e, n, r))
    return !1;
  const i = P();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Wo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function tS(e, t, r, n) {
  return !r.wantsRun || al(n) || Th(Ds) ? !1 : Dr().getEditorState().read(() => {
    const i = le(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : al(e.scanPieces(i));
  });
}
function rS(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function vf(e) {
  const t = Oe(e);
  return Rt(t, ke, "attribute"), t;
}
function nS(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = rg(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function iS(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    v(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(vf(n.valueText));
    return;
  }
  const l = nS(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = St(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : v(d) ? Nu(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = vf(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(St(a === "selfClosing" ? "" : o(t), a));
}
function Vs(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Oa(e, i, n) && !XC(t)) {
    if (tS(e, t, n, i)) {
      QC(t);
      return;
    }
    if (!ho(e, t)) {
      if (!n.wantsRun) {
        rS(i);
        return;
      }
      iS(e, t, i, n);
    }
  }
}
function sS(e, t, r) {
  Vs(e, t), t.isAttached() && ho(e, t) && r.add(t.getKey());
}
function go(e) {
  if (!v(e))
    return !1;
  if ($(e) || He(e) || fn(e))
    return !0;
  const t = ge(e, ke);
  return t === "attribute" || t === Vr;
}
function Ou(e, t) {
  return $(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && ln(e) && j(e.getParent())) : !1;
}
function oS() {
  const e = P();
  return A(e) ? Ou(e.focus.getNode(), e.focus.offset) : !1;
}
function im(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && go(t) ? t : void 0;
}
function aS(e) {
  const t = im(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function cS(e) {
  const t = im(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Ef(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Mf(e, t) {
  e.set(t.key, t.offset, t.type);
}
function lS(e, t) {
  let r = cS(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!v(n))
      return;
    if (!go(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Af(e, t) {
  const r = lS(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Ru(e) {
  if (e.isCollapsed()) {
    const a = aS(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Ef(r), Ef(n)], s = Af(r, "next"), o = Af(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Mf(r, i[0]), Mf(n, i[1]), !1) : !0;
}
const Go = "verse-block", sm = 1, uS = "verse-block";
class us extends Sr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Go;
  }
  static clone(t) {
    return new us(t.__number, t.__key);
  }
  static importJSON(t) {
    return dS().updateFromJSON(t);
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
    return Mg(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(uS), Pf(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Pf(r, this.__number), !1;
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
      type: Go,
      number: this.getNumber(),
      version: sm
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Pf(e, t) {
  const { start: r, end: n } = Mg(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), wf(e, "data-verse-start", i ? r : NaN), wf(e, "data-verse-end", i ? n : NaN);
}
function wf(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function dS(e) {
  return nt(new us(e));
}
function Ws(e) {
  return e instanceof us;
}
function fS(e) {
  return e?.type === Go;
}
const pS = [
  Ht,
  Wr,
  Xt,
  Mt,
  Ae,
  Ue,
  Tr,
  Hr,
  mi,
  an,
  dn,
  dt,
  An,
  yi,
  as,
  cs,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  cn,
  {
    replace: Yl,
    with: () => yr(),
    withKlass: An
  }
], Jo = {
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
}, hS = {
  paragraph: x.Paragraph,
  character: x.Character,
  note: x.Note,
  milestone: x.Milestone
};
function gS(e) {
  if (!e)
    return Ir;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: Ir(r)?.category ?? C.Uncategorized,
      type: hS[n.styleType] ?? x.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: Ir(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Nf(e, t, r) {
  const n = {
    type: xr,
    version: kr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return va(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const om = "v", am = 1, mS = "verse-selected";
class Ft extends so {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = om, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Ft(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => kS(t) ? {
        conversion: bS,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return $u().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Hc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && fi(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Hc, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? sr(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Ko + this.getNumber() + Ko
    );
    return M(yS, { nodeKey: this.getKey(), text: t });
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
      version: am
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (vg(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function yS({ nodeKey: e, text: t }) {
  const [r] = Zk(e);
  return M("span", { className: r ? mS : void 0, children: t });
}
function bS(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: $u(t) };
}
function $u(e, t, r, n, i, s) {
  return nt(new Ft(e, t, r, n, i, s));
}
function kS(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === om;
}
function bi(e) {
  return e instanceof Ft;
}
function xS(e) {
  return e?.type === Ft.getType();
}
function Ce(e) {
  return He(e) || bi(e);
}
function cm(e) {
  return yg(e) || xS(e);
}
function TS(e) {
  return CS(e).find((t) => he(t));
}
function CS(e) {
  return e.some(Ws) ? e.flatMap((t) => Ws(t) ? t.getChildren() : t) : e;
}
function Ra(e) {
  return L(e) ? Ws(e) ? e.getChildren().flatMap(Ra) : e.getChildren() : [];
}
function SS(e, t) {
  return Ra(e).find((i) => Ce(i) && Cu(t, i.getNumber()));
}
function _S(e, t) {
  return t === 0 ? TS(e) : e.map((r) => SS(r, t)).filter((r) => r)[0];
}
function Yo(e) {
  return Ra(e).find((r) => Ce(r));
}
function lm(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (Ce(i))
      return i;
  }
}
function vS(e) {
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
    const n = Yo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Xo(e) {
  return Ra(e).findLast((t) => Ce(t));
}
function ES(e) {
  if (!He(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function MS(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function AS(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return MS(t, e, r);
  if (v(e)) {
    const n = ES(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function yc(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function PS(e) {
  const t = rl(e);
  if (!(!t || rt(t)))
    return Ce(t) ? t : Xo(t) ?? Lu(t);
}
function wS(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!A(t))
    return yc(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (AS(e, t)) {
    const i = PS(e);
    return i ? yc(i) : { verseNum: n };
  }
  return yc(e);
}
function NS(e) {
  return RT(e) || bi(e);
}
function qu(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(U) && e.setTextContent(`${t} `);
  }
}
function um(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function cl(e, t) {
  return e.getEditorState().read(() => !le(t));
}
function OS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Iu(t, e);
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
      let s = Of(i);
      for (; s && !rt(s); ) {
        const o = Yo(s);
        if (o) {
          n = o;
          break;
        }
        s = Of(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Yo(s);
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
function RS(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = Iu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = lm(i, r.getIndexWithinParent())), !n && i) {
      let o = Rf(i);
      for (; o && !rt(o); ) {
        const a = Xo(o);
        if (a) {
          n = a;
          break;
        }
        o = Rf(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !rt(s); ) {
      const o = Xo(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Of(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Rf(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function Iu(e, t) {
  if (L(e) && A(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && Ce(n))
      return n;
    const i = lm(e, t.anchor.offset);
    if (i)
      return i;
    const s = Yo(e);
    if (s)
      return s;
  }
  return Lu(e);
}
function Lu(e) {
  if (!e || rt(e))
    return;
  if (Ce(e))
    return e;
  let t = rl(e);
  for (; t; ) {
    if (rt(t))
      return;
    if (Ce(t))
      return t;
    const r = Xo(t);
    if (r)
      return r;
    t = rl(t);
  }
}
const $S = ["style"], qS = ["style", "code"], Qo = ["style", "cid"], IS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], LS = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], DS = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], US = ["style", "caller", "category", "contents"], KS = ["tag", "marker", "contents"], FS = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Hs = `
`;
function zS(e, t) {
  const r = le(e);
  if (!Yt(r))
    return;
  const n = Du(r, "apply");
  if (n === void 0)
    return;
  const [i, ...s] = t;
  return [{ retain: n }, ...i ? [i] : [], { delete: 1 }, ...s];
}
function Du(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Ca();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Qi(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Qi(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (sn(l) || Yt(l))
        return n;
      qe(l) && (a = l);
    }
    if (qe(l) && (i.includes(l) || i.push(l)), dm(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += Uu(l, t);
  }
  if (a)
    return n;
}
function $f(e, t, r = "delta-doc") {
  if (e.length < 2 || !VS(e[0]) || !jS(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => BS(n, r)?.getKey());
}
function BS(e, t = "delta-doc") {
  const r = Ca();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Qi(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Qi(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (qe(a) && (i.includes(a) || i.push(a)), dm(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = Uu(a, t);
    if (sn(a) && l > 0 && e >= n && e < n + l || Yt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function Qi(e, t) {
  return e ? t ? !Wo(t.node, e.getKey()) : !0 : !1;
}
function sn(e) {
  return v(e) && !Yt(e);
}
function Yt(e) {
  return rt(e) || Ce(e) || it(e) || W(e) || _e(e) || fn(e);
}
function Cn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function jS(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && FS.includes(t);
}
function VS(e) {
  return e.retain != null && typeof e.retain == "number";
}
function dm(e, t) {
  return W(e) || _e(e) ? !0 : t === "apply" && L(e) && Yt(e);
}
function fm(e) {
  const t = e.getParent();
  return Ct(e) && he(t) && t.getFirstChild() === e;
}
function ll(e) {
  const t = e.getParent();
  return t !== null && Pe(t, Ge) !== null;
}
function WS(e) {
  const t = e.getParent();
  return j(t) && e.getTextContent() === or && t.getChildrenSize() === 1;
}
function HS(e) {
  const t = e.getParent();
  if (!W(t))
    return !1;
  const r = e.getPreviousSibling();
  return $(r) && r === t.getFirstChild() && e.getTextContent() === Jt(t.getCaller());
}
function GS(e) {
  return !Wg(e) && Uu(e, "delta-doc") === e.getTextContentSize();
}
function Uu(e, t) {
  if (Yt(e))
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
    (lo(e) || fm(e) || ge(e, ke) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ge(e, ke) === "attribute" || ll(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(au) || WS(e) || HS(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function ul(e, t) {
  const r = { insert: e.__text }, n = ge(e, Mn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = pm(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function qf(e) {
  const t = new vs();
  return e.isEmpty() || e.read(() => {
    const r = Qe();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Kr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = JS();
    for (const s of i)
      t.push(s);
  }), t;
}
function $a(e, t) {
  const r = [], n = gi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...If(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...If(c, n.length, n, i, s, o, a));
  return r;
}
function JS() {
  return $a();
}
function If(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return YS(e, a, n), XS(e, a, i, s, o), QS(e, t, r, i, o, s, a), rt(e) && a.push(r_(e)), Ce(e) && a.push(i_(e)), it(e) && a.push(s_(e)), fn(e) && a.push(o_(e)), e_(e, a, s), ZS(e, a, s), u_(c, s), a;
}
function YS(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    we(n) ? t.push(t_(n)) : he(n) ? t.push(n_(n)) : Kr(n) && t.push({ insert: Hs });
  }
  qe(e) && (r.includes(e) || r.push(e));
}
function XS(e, t, r, n, i) {
  if (!v(e) || He(e) || fn(e))
    return;
  const s = e.getParent();
  if (W(s) && s.getFirstChild() === e)
    return;
  const o = Gt(e) !== void 0;
  if ($(e) && (o || fm(e) || ll(e) || Wg(e)) || ge(e, ke) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (co(a))
    return;
  const c = e.getPreviousSibling();
  if (W(s) && $(c) && c === s.getFirstChild() && a === Jt(s.getCaller()))
    return;
  const l = j(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(Pa(e)));
  const u = a.startsWith(au) || ge(e, ke) === "attribute" || ll(e), d = !!l && a === or && l.getChildrenSize() === 1, f = qa(e, n), p = f ? r.filter((m) => f.children.includes(m)) : r, h = ul(e, p);
  if (h.insert = a, f) {
    if (!a || a === U || u)
      return;
    f.contentsOps?.push(h);
  } else
    d || u || t.push(h);
  const g = a !== "" && !d && !(u && l);
  if (r.length > 0 && g)
    for (const m of r)
      i.add(m);
}
function QS(e, t, r, n, i, s, o) {
  j(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Qi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = c_(c), u = qa(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function ZS(e, t, r) {
  if (!W(e))
    return;
  const n = a_(e), i = qa(e, r), s = {
    node: e,
    children: gi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function e_(e, t, r) {
  if (!_e(e))
    return;
  const n = l_(e), i = qa(e, r), s = {
    node: e,
    children: gi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Dn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function t_(e) {
  const t = { style: Fs, code: e.__code };
  return Dn(t, e), { insert: Hs, attributes: { book: t } };
}
function r_(e) {
  const t = { style: jo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Dn(t, e), { insert: { chapter: t } };
}
function n_(e) {
  const t = { style: e.__marker };
  return Dn(t, e), { insert: Hs, attributes: { para: t } };
}
function i_(e) {
  const t = { style: Vo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Dn(t, e), { insert: { verse: t } };
}
function s_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Dn(t, e), { insert: { milestone: t } };
}
function o_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function a_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Dn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ge(e, Mn);
  return n && (r.attributes = { segment: n }), r;
}
function c_(e) {
  const t = { insert: "" }, r = pm([e]);
  return r && (t.attributes = { char: r }), t;
}
function l_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Dn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function qa(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function u_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Qi(t[r].node, e) && t.splice(r, 1);
}
function pm(e) {
  if (e.length === 0)
    return;
  const t = e.map(d_);
  return t.length === 1 ? t[0] : t;
}
function d_(e) {
  const t = { style: e.__marker }, r = ge(e, ii);
  return r && (t.cid = r), Dn(t, e), t;
}
function Ku(e) {
  let t = 0;
  for (const { node: r } of Ca())
    if (W(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function f_(e) {
  let t = 0;
  for (const { node: r } of Ca())
    if (W(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const hm = 1;
class br extends so {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Ls, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new br(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => h_(t) ? {
        conversion: p_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Fu().updateFromJSON(t);
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
    return r && fi(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => g_(t, n), (l) => m_(t, n, s, l), () => y_(t, n), () => b_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return M("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Ls && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Lh && i ? (
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
      version: hm
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function p_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Fu(t, r) };
}
function Fu(e, t, r) {
  return nt(new br(e, t, r));
}
function h_(e) {
  return e ? e.classList.contains(br.getType()) : !1;
}
function _t(e) {
  return e instanceof br;
}
function g_(e, t) {
  return e.getEditorState().read(() => {
    const r = le(t);
    if (!W(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function m_(e, t, r, n) {
  e.update(() => {
    const i = le(t);
    if (!W(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = le(r);
    if (!_t(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function y_(e, t) {
  return e.getEditorState().read(() => {
    const r = le(t);
    if (!W(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return $a(r);
  });
}
function b_(e, t) {
  return e.getEditorState().read(() => Ku(t));
}
const k_ = [
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
], x_ = ["†"];
function Ia(e) {
  if (gm())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = Lf(t), [s, o] = Lf(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = Df(n, i), [s, o] = Df(s, o);
  const a = Ur();
  return a.anchor = mr(n.getKey(), i, Uf(n)), a.focus = mr(s.getKey(), o, Uf(s)), a;
}
function zu() {
  if (gm())
    return;
  const e = P();
  if (!e || !A(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Zo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Zo(i, s);
  return { start: n, end: o };
}
function Lf(e) {
  if (wk(e)) {
    const t = kh(e.jsonPath);
    let r = Qe();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = ss(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : YT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, XT(r, e.offset)] : [void 0, void 0];
  }
  if (Nk(e) || Ok(e)) {
    const t = bs(e.jsonPath);
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
  if (Rk(e)) {
    const t = bs(e.jsonPath);
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
  if ($k(e)) {
    const t = bs(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = bc(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && v(n) ? [n, 0] : [void 0, void 0];
  }
  if (qk(e)) {
    const t = bs(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = bc(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && v(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Ik(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = bs(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = bc(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && v(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Lk(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function Df(e, t) {
  if (!_r(e))
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
function Uf(e) {
  return L(e) ? "element" : "text";
}
function bc(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if ($(n) && n.getMarkerSyntax() === t || t === "closing" && $(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (_r(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function bs(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = kh(r);
  let i = Qe();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = ss(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Zo(e, t) {
  if ($(e)) {
    const r = e.getMarkerSyntax(), n = T_(e), i = n ? zn(Wn(n)) : zn(Wn(e));
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
  if (Ne(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (v(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Zo(n, s);
    }
    const i = Ea(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Zo(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (_r(r)) {
      const i = r.getTextContent().endsWith("*"), s = zn(Wn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Pg(e, t);
    return n.type === "text" ? {
      jsonPath: zn([...Wn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: zn(Wn(e)),
      offset: n.index
    };
  }
  if (v(e)) {
    const r = JT(e, t);
    if (r)
      return {
        jsonPath: zn([
          ...Wn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: zn(Wn(e)), offset: t };
}
function T_(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = C_(e);
  return r && !qe(r) && !v(r) && !Ne(r) ? r : t;
}
function C_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!uo(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Wn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Ea(r);
    if (!n)
      break;
    const i = GT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function gm() {
  for (let e = Qe().getFirstChild(); e; e = e.getNextSibling())
    if (Ws(e))
      return !0;
  return !1;
}
function S_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function mm(e, t, r, n, i, s, o) {
  if (!Ue.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Ia(r) : P();
  if (!A(a))
    return;
  const c = E_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? S_(e, s), u = ym(e, l, c, i, s, void 0, void 0);
  return v_(u, a, i), u;
}
function Bu(e) {
  return e !== "expanded";
}
function __(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!v(r) || !j(r.getParent()))
    return;
  if ($(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return $(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function v_(e, t, r) {
  const n = Bu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || IT(t), Ru(t);
  const i = __(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(j)?.selectEnd();
}
function Ri(e, t, r) {
  const n = rn(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(St(e)) : r?.markerMode === "visible" && n.append(en("marker", Be(e)));
  const s = t === "" ? or : i ? U + t : t;
  return n.append(Oe(s)), n;
}
function E_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Ri("fr", f, n)), !e.isCollapsed()) {
        const p = Ff(e);
        p.length > 0 && o.push(Ri("fq", p, n));
      }
      o.push(Ri("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Ri("xo", f, n)), !e.isCollapsed()) {
        const p = Ff(e);
        p.length > 0 && o.push(Ri("xq", p, n));
      }
      o.push(Ri("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function ym(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Bu(n?.noteMode), l = du(e, t, c);
  s && Rt(l, Mn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = St(e), u && d.setMode("token"), a || (f = St(e, "closing"))) : n?.markerMode === "visible" && (d = en("marker", Be(e) + " "), a || (f = en("marker", at(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    p = Oe(Jt(l.__caller)), u && p.setMode("token"), l.append(p, ...r);
  else {
    const h = () => fo(), g = r.flatMap($_(h));
    if (t === "")
      l.append(...g);
    else {
      const m = ku(r);
      let b = () => {
      };
      i?.noteCallerOnClick && (b = i.noteCallerOnClick), p = Fu(l.__caller, m, b), l.append(p, h(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Or(e) {
  if (typeof e == "string") {
    const t = le(e);
    return W(t) ? t : void 0;
  }
  return f_(e);
}
function dl(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (bi(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else {
    const n = e.getChildren(), i = n.slice().reverse().find(j);
    if (i)
      M_(i);
    else {
      const s = ju(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function ju(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return $(r) && r.getMarkerSyntax() === "closing" || _r(r) && r.getTextContent() === at(e.getMarker()) ? t : -1;
}
function M_(e) {
  const t = ju(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  v(r) && !uo(r) ? r.selectEnd() : e.select(t, t);
}
function bm(e, { isContentChange: t = !1 } = {}) {
  const r = e.getNextSibling();
  if (v(r) && !go(r)) {
    r.select(0, 0);
    return;
  }
  const n = e.getParent();
  if (!n)
    return;
  const i = e.getIndexWithinParent() + 1;
  n.canBeEmpty() ? n.select(i, i) : Vu(n, i, { announce: !t });
}
function Vu(e, t, { announce: r = !0 } = {}) {
  const n = e.getChildAtIndex(t - 1);
  if (!W(n) || n.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const i = Ur();
  i.anchor.set(e.getKey(), t, "element"), i.focus.set(e.getKey(), t, "element"), Tt(i), r && Dr().dispatchCommand(Vt, void 0);
}
function Kf(e, t, r) {
  const n = nn(e), i = A_(e, n);
  if (r && xm(i, t, r, km(e, n)))
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
function A_(e, t) {
  const r = [];
  for (const { node: n } of gi(e))
    !v(n) || Pe(n, Ge) || (Wu(n, t) ? r.push({ node: n, isGlyph: !1, dataStart: Pa(n) }) : P_(n, e) && r.push({ node: n, isGlyph: !0, dataStart: 0 }));
  return r;
}
function P_(e, t) {
  return fn(e) ? !0 : $(e) && !t.is(e.getParent());
}
function km(e, t) {
  return (r) => {
    let n = r;
    for (; !n.getPreviousSibling(); ) {
      const o = n.getParent();
      if (!o || o.is(e))
        return;
      n = o;
    }
    const i = n.getPreviousSibling(), s = L(i) ? i.getLastDescendant() : i;
    if (v(s) && (t?.is(s) || Wu(s, t)))
      return s;
  };
}
function xm(e, t, r, n) {
  let i = 0, s = 0;
  for (const { node: o, isGlyph: a, dataStart: c } of e) {
    if (!a) {
      const l = o.getTextContentSize() - c;
      if (i += l, l > 0 && (s = 0), i > t)
        return !1;
      continue;
    }
    if (i === t && s === r.index)
      return w_(o, r.offset, n), !0;
    s += 1;
  }
  return !1;
}
function w_(e, t, r) {
  const n = e.getTextContentSize(), i = e.isToken() ? n : Math.min(Math.max(t, 0), n), s = i === 0 ? r(e) : void 0;
  if (s) {
    const o = s.getTextContentSize();
    s.select(o, o);
  } else
    e.select(i, i);
}
function N_(e, t, r) {
  const { opener: n, value: i, closer: s } = vu(e);
  if (!i)
    return !1;
  const o = O_(i);
  if (r) {
    const c = [];
    n && c.push({ node: n, isGlyph: !0, dataStart: 0 }), c.push({ node: i, isGlyph: !1, dataStart: o }), s && c.push({ node: s, isGlyph: !0, dataStart: 0 });
    const l = nn(e);
    if (xm(c, t, r, km(e, l)))
      return !0;
  }
  const a = Math.min(o + Math.max(t, 0), i.getTextContentSize());
  return i.select(a, a), !0;
}
function O_(e) {
  return e.getTextContent().startsWith(U) ? U.length : 0;
}
function Wu(e, t) {
  return !v(e) || uo(e) || go(e) ? !1 : !t || !e.is(t);
}
function R_(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(j))
    return;
  const t = nn(e);
  for (const { node: n } of gi(e))
    if (Wu(n, t))
      return;
  const r = ju(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function $_(e) {
  return (t) => Wt(t) ? [t] : [t, e()];
}
function q_(e) {
  const t = e.getParent();
  return t !== null && Pe(t, W) !== null;
}
function Ff(e) {
  if (!A(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Ql(e);
  let a = "";
  for (const c of t)
    if (!(W(c) || _t(c) || q_(c)) && !$(c) && !fn(c) && ge(c, ke) !== "attribute") {
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
const Hu = [
  br,
  Ft,
  ...pS
], I_ = [
  us,
  ...Hu
], L_ = In((e, t) => {
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
function D_() {
  const [e, t] = Te(void 0), [r, n] = Te(), i = re(null), s = Ee((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = lx(l, c, () => {
      ux(l, c, {
        placement: "bottom-start",
        middleware: [dx(), fx()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = Ee(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return H(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function U_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = D_();
  return H(() => {
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
const K_ = _k(L_);
function Tm({ isOpen: e = !1, children: t }) {
  const r = re(null), { coords: n, placement: i } = U_({ isOpen: e, floatingBoxRef: r }), s = et(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Xn(
    M(K_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Cm = yh(void 0);
function Gu() {
  const e = bh(Cm);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function F_(e, t) {
  const [r, n] = Te(0), [i, s] = Te(-1), o = et(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = Ee(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = Ee(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = Ee(() => {
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
function z_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = F_(t, r);
  return M(Cm.Provider, { value: i, children: M("div", { ...n, children: e }) });
}
const Sm = In(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Gu(), u = Ee((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = Ee((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return M("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function B_({ children: e, autoIndex: t = !0, ...r }) {
  const n = re(null), { state: { activeIndex: i, menuItems: s } } = Gu(), o = et(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = et(() => {
    const c = o(s);
    return t ? vk.map(c, (l, u) => Ek(l) && l.type === Sm && l.props.index === void 0 ? Mk(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return H(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), M("div", { ref: n, role: "menu", ...r, children: a });
}
const j_ = (e, t, r) => $o(e, r).toLowerCase().includes(t.toLowerCase()), zf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", $o = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function V_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? zf(r[0]) : "") : (u = n || (r.length > 0 ? zf(r[0]) : ""), d = (h, g) => j_(h, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return d(h, t);
    } catch (g) {
      return console.warn("Error filtering item:", h, g), !1;
    }
  }).sort((h, g) => {
    const m = (k) => (p.has(k) || p.set(k, $o(k, f).toLowerCase()), p.get(k) ?? ""), b = a ? $o(h, f) : m(h), T = a ? $o(g, f) : m(g);
    for (const k of c)
      switch (k) {
        case "exact":
          if (b === l && T !== l)
            return -1;
          if (T === l && b !== l)
            return 1;
          break;
        case "startsWith":
          if (b.startsWith(l) && !T.startsWith(l))
            return -1;
          if (T.startsWith(l) && !b.startsWith(l))
            return 1;
          break;
        case "contains": {
          const E = b.indexOf(l), S = T.indexOf(l);
          if (E !== -1 && S === -1)
            return -1;
          if (S !== -1 && E === -1)
            return 1;
          if (E !== -1 && S !== -1)
            return E - S;
          break;
        }
      }
    return b.localeCompare(T);
  });
}
const kc = {
  Root: z_,
  Options: B_,
  Option: Sm
};
function W_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return et(() => V_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function H_() {
  const { moveUp: e, moveDown: t, select: r } = Gu();
  return et(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const G_ = () => {
  const e = H_(), [t] = me();
  H(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(ar, r, Re);
  }, [t, e]);
};
function J_() {
  return G_(), null;
}
const Y_ = ["Shift", "Control", "Alt", "Meta"];
function _m(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = me(), u = s !== void 0, [d, f] = Te(""), p = u ? s ?? "" : d, h = W_({ query: p, items: t, filterBy: "name" }), g = (m) => {
    n?.(), r ? r(m) : m.action(l);
  };
  return H(() => {
    a?.(p, h);
  }, [a, p, h]), H(() => l.registerCommand(ar, (m) => {
    if (u || c?.includes(m.key) || Y_.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return n?.(), !1;
    const T = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((k) => k.slice(0, -1));
      }
    }[m.key];
    return T ? (m.stopPropagation(), m.preventDefault(), T(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && f((k) => k + m.key), !0) : !1;
  }, Re), [l, u, p, o, n, c]), De(kc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (m) => g(m), children: [!u && M("input", { value: p, type: "text", disabled: !0 }), M(J_, {}), M(kc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((T, k) => De(kc.Option, { index: k, children: [M("span", { className: "label", children: T.label ?? T.name }), M("span", { className: "description", children: T.description })] }, T.name)) })] });
}
function X_({ trigger: e, items: t }) {
  const [r] = me(), [n, i] = Te(!1), s = Ee((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return H(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), H(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = P();
      if (A(l))
        return l;
    });
    a.read(() => {
      const l = P();
      !A(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && M(Tm, { isOpen: n, children: ({ placement: o }) => M(_m, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function Q_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: et(() => {
    if (!t || !e)
      return;
    const i = Ir(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = Ir(o), { action: c } = r(o, a);
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
function Ns(e, t) {
  return `${e}:${t}`;
}
function Z_(e, t) {
  H(() => {
    if (!e.hasNodes([ut]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return $e(Ph(e, ut, (n) => Ks(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], h = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, h, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(ut, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = le(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Ne(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!ut.isReservedType(c))
              for (const u of l) {
                let d = t.get(Ns(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Ns(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Ns(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const ev = In(function({ logger: t }, r) {
  const [n] = me(), i = et(() => /* @__PURE__ */ new Map(), []);
  Z_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Ns(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = le(u);
        Ne(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Bo(d));
      }
  };
  return ba(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (ut.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Ia(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Zh(p, a, c, l, u, d, f);
      }, { tag: Gc });
    },
    removeAnnotation(o, a) {
      if (ut.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Ns(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Gc });
    }
  })), null;
}), tv = [];
function rv({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = tv, onChange: n }) {
  const [i] = me();
  return io(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Zl) && !u.has(Uh) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = nv(i, s);
        d.length !== 0 && n(o, i, u, d, l);
      });
  }, [i, e, t, r, n]), null;
}
function nv(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new vs();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = le(i), o = s !== null && Gt(s) !== void 0;
    if (t.size === 1 && v(s) && !o && GS(s)) {
      const a = Du(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = le(i);
          return new vs([v(d) ? ul(d) : { insert: "" }]);
        }), l = new vs([ul(s)]), u = new vs(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = qf(r), c = qf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const Ju = "formatted", vm = "unformatted", Em = "paragraph-structure", Yu = "standard", Mm = "block-verse", iv = {
  [Ju]: "Formatted",
  [vm]: "Unformatted",
  [Em]: "Paragraph Structure",
  [Yu]: "Standard",
  [Mm]: "Block Verse"
};
function ki(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Xu, Qu;
function sv(e) {
  const t = Zu(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Xu = e, Qu = t;
}
sv(Ju);
const SO = () => Xu, La = () => Qu;
function Zu(e) {
  let t;
  switch (e ?? Xu) {
    case Ju:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case vm:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Em:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Yu:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Mm:
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
function _O(e) {
  if (!e)
    return;
  const t = Bf(e);
  return Object.keys(iv).find((r) => Qt(Bf(Zu(r)), t));
}
const ov = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function Bf(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...ov, ...t };
}
function mo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function av(e) {
  if (e)
    return Gs(e) ? Ft : e.markerMode === "editable" ? Mt : Ft;
}
function Gs(e) {
  return e?.verseLayout === "block";
}
function cv(e) {
  const t = [], r = e ?? Qu;
  return r && (t.push(`${Ex}${r.markerMode}`), r.hasSpacing && t.push(_x), r.isFormattedFont && t.push(vx)), t;
}
function lv(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += uv(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), fv(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += pv(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), gv(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function uv(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), dv(t, e.retain, e.attributes, r, n)), e.retain);
}
function dv(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Qe();
  function l(u) {
    if (s <= 0)
      return !0;
    if (sn(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, h = Math.min(s, p);
        if (h > 0) {
          let g = u;
          const m = f > 0, b = h < d - f;
          if (m && b) {
            const [, T] = u.splitText(f);
            [g] = T.splitText(h);
          } else m ? [, g] = u.splitText(f) : b && ([g] = u.splitText(h));
          if (wn(r)) {
            const T = g.getParent();
            if (j(T)) {
              const k = r.char;
              let E;
              Array.isArray(k) ? a >= 0 && a <= k.length - 1 && (E = k[a]) : a === 0 && (E = k);
              const S = E ? si(E, T) : !1;
              if (S && Array.isArray(k) && k.length > 1) {
                const N = Oe("");
                g.replace(N);
                const q = typeof r.segment == "string" ? r.segment : void 0, K = ds(k.slice(1), n, g, q);
                let V = N;
                for (const ue of K)
                  V.insertAfter(ue), V = ue;
                N.remove(), Zt(r, g);
              } else if (S)
                Zt(r, g);
              else {
                g.remove();
                const N = jf(g, r, n, i);
                if (N && N.length > 0) {
                  let q = T;
                  for (const K of N)
                    q.insertAfter(K), q = K;
                }
              }
            } else {
              const k = Oe("");
              g.replace(k);
              const E = jf(g, r, n, i);
              if (E && E.length > 0) {
                let S = k;
                for (const N of E)
                  S.insertAfter(N), S = N;
                k.remove();
              } else
                k.replace(g);
            }
          } else
            Zt(r, g);
          s -= h;
        }
      }
      o += d;
    } else if (Yt(u))
      e <= o && o < e + t && s > 0 && (Vf(u, r), s -= 1), o += 1;
    else if (j(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (wn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            fl(u, p.style), typeof p.cid == "string" && Rt(u, ii, () => p.cid);
            const h = Xe(p, Qo);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || _v(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Wc(u), !0;
        }
      }
      d && Wc(u), a -= 1;
    } else if (qe(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Kr(u))
          Vf(u, r);
        else if (ed(r)) {
          const p = wm(r.para, n);
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
function jf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = ds(t.char, r, e, i), o = s.find(j);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Zt(t, e);
    return;
  }
  const a = {};
  $m.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Zt(t, e), s;
}
function Am(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  $(r) ? (r.setMarker(t), r.setTextContent(Be(t))) : Wt(r) && r.getTextType() === "marker" && r.setTextContent(Be(t) + U);
}
function fl(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    $(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = j(e.getParent()), i = e.getFirstChild();
  Wt(i) && i.getTextType() === "marker" && i.getTextContent() === Be(r, n) && i.setTextContent(Be(t, n));
  const s = e.getLastChild();
  Wt(s) && s.getTextType() === "marker" && s.getTextContent() === at(r, n) && s.setTextContent(at(t, n));
}
function Vf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && j(e) && wn(t)) {
      const i = pl(n);
      if (fl(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Rt(e, ii, () => o);
      }
      const s = Xe(i, Qo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (rt(e) || Ce(e) || it(e) || W(e) || _e(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (we(e) || he(e) || j(e)) && (r === "style" && he(e) ? Am(e, n) : r === "style" && j(e) ? fl(e, n) : r === "code" && we(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Rt(e, Mn, () => n));
  }
}
function fv(e, t, r) {
  if (t <= 0)
    return;
  const n = Qe();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (sn(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Yt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (qe(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && qe(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(yr(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && We(p)) {
            let h = i + 1;
            const g = p.getChildren();
            for (const b of g) {
              if (s <= 0)
                break;
              const T = i;
              if (i = h, o(b)) {
                i = T;
                break;
              }
              sn(b) ? h += b.getTextContentSize() : Yt(b) && (h += 1), i = T;
            }
            const m = p.getChildren();
            for (const b of m)
              b.remove(), a.append(b);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(yr(), !0);
        } else he(a) ? a.replace(yr(), !0) : a.remove();
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
function pv(e, t, r, n, i) {
  if (t === Hs)
    return Wf(e, r, n, i);
  if (t.endsWith(Hs) && !ed(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (wn(r))
        throw new Error("Text + LF should not have char attributes");
      o += ea(e, s, r, i);
    }
    return o += Wf(e + o, r, n, i), o;
  } else return wn(r) ? hv(e, t, r, n, i) : ea(e, t, r, i);
}
function hv(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = Oe(t === "" ? or : t);
  Zt(r, s);
  let o;
  {
    let m = function(b) {
      if (sn(b)) {
        const T = b.getTextContentSize();
        if (e >= g && e < g + T) {
          const k = b.getParent();
          return j(k) && (o = k), !0;
        }
        g += T;
      } else if (Yt(b))
        g += 1;
      else if (j(b)) {
        const T = b.getChildren();
        for (const k of T)
          if (m(k))
            return !0;
      } else if (L(b)) {
        const T = b.getChildren();
        for (const k of T)
          if (m(k))
            return !0;
        qe(b) && (g += 1);
      }
      return !1;
    };
    const h = Qe();
    let g = 0;
    m(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && si(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (si(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = ds(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(j);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), ea(e, t, void 0, i);
  const f = {};
  for (const [h, g] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof g == "string" && (f[h] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const h of u)
    if (!Pm(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), ea(e, t, void 0, i));
}
function ea(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Qe();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (sn(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = Oe(t);
        if (Zt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          j(f) && !wn(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Yt(c))
      s += 1;
    else if (j(c)) {
      if (!o && e === s) {
        const d = Oe(t);
        Zt(r, d);
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
        const d = Oe(t);
        return Zt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (qe(c)) {
      if (!o && e === s) {
        const d = Oe(t);
        Zt(r, d);
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
        const d = Oe(t);
        return Zt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = Oe(t);
    Zt(r, c);
    const l = yr().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Pm(e, t, r) {
  const n = Qe();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(yr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (We(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(yr().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (sn(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Yt(l))
        i += 1;
      else if (j(l)) {
        if (o(l))
          return !0;
      } else if (qe(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (Kr(u) && qe(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(yr().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      We(a) ? Kr(a) && he(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !We(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (j(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !We(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function gv(e, t, r, n, i) {
  let s;
  return Cn("chapter", t) ? s = yv(t.insert.chapter, r) : Cn("verse", t) ? s = bv(t.insert.verse, r) : Cn("ms", t) ? s = kv(t.insert.ms) : Cn("note", t) ? s = Nm(t, r, n) : Cn("unknown", t) ? s = Om(t, r, n, i) : Cn("unmatched", t) && (s = Tv(t.insert.unmatched, r)), s ? Pm(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Wf(e, t, r, n) {
  let i;
  ed(t) ? i = wm(t.para, r) : Sv(t) && (i = mv(t.book)), i ??= yr();
  const s = i, o = he(s), a = Kr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (sn(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (he(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [g] = h > 0 ? d.splitText(h) : [void 0];
          let m, b = g?.getPreviousSibling();
          for (; b; ) {
            const T = b;
            b = b.getPreviousSibling(), m ? m.insertBefore(T) : s.append(T), m = T;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Yt(d))
      c += 1;
    else if (qe(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Kr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (he(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && he(d) && s)
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
  return u(Qe()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function mv(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Fs || !r || !Ht.isValidBookCode(r))
    return;
  const n = Xe(e, qS);
  return ig(r, n);
}
function wm(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Xe(e, $S), i = Gi(r, n);
  if (!ki(t))
    return i;
  if (t.markerMode === "editable")
    i.append(St(r), fo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Be(r) + U;
    i.append(t.hasGutterParaMarkers ? Jh(s) : en("marker", s));
  }
  return i;
}
function yv(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Xe(e, IS);
  let a;
  if (t.markerMode === "editable")
    a = og(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = mu(r, c, n, i, s, o);
  }
  return a;
}
function bv(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Xe(e, LS);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = sr(r, n);
    c = mg(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = $u(n, l, i, s, o, a);
  }
  return c;
}
function kv(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Xe(e, DS);
  return zh(t, r, n, s, i);
}
function Nm(e, t, r) {
  const n = e.insert;
  if (!n.note)
    return;
  const { style: i, caller: s, category: o, contents: a } = n.note;
  if (!i || s == null)
    return;
  const c = Xe(n.note, US), l = typeof c?.closed == "string" ? c.closed : void 0, u = e.attributes?.segment;
  let d;
  u && typeof u == "string" && (d = u);
  const f = [];
  for (const h of a?.ops ?? [])
    if (typeof h.insert == "string")
      if (wn(h.attributes)) {
        const g = ds(h.attributes.char, t, Oe(h.insert), void 0, Rm(h.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...g);
      } else
        f.push(Oe(h.insert));
  return ym(i, s, f, t, r, d, l).setCategory(o).setUnknownAttributes(c);
}
function Om(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Xe(i, KS), l = hu(s, o, c), u = a?.ops ?? [];
  u.length > 0 && xv(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Rt(l, Mn, () => d), l;
}
function xv(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (wn(s.attributes)) {
        const o = Oe(s.insert), a = ds(s.attributes.char, t, o, void 0, Rm(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(Oe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Cn("unknown", s)) {
        const o = Om(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Cn("note", s)) {
        const o = Nm(s, t, r);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function Tv(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = wu(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Rm(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function pl(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function ds(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(or);
  const a = () => {
    o && v(r) && r.getTextContent() !== or && r.setTextContent(U + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(pl), l = c[0], u = i?.[i.length - 1];
    if (j(u) && si(l, u)) {
      if (c.length > 1) {
        const f = ds(c.slice(1), t, r, void 0, void 0, !0, o);
        xc(u, f);
      } else
        r && xc(u, [r]);
      return [];
    }
    a();
    const d = c.reduceRight((f, p, h) => {
      const g = rn(p.style, Xe(p, Qo));
      return typeof p.cid == "string" && Rt(g, ii, () => p.cid), n && h === c.length - 1 && Rt(g, Mn, () => n), f && (j(f) && (Cc(f.getMarker(), f, t, !0), Tc(f, f, t, !0)), g.append(f)), g;
    }, r);
    return Cc(l.style, d, t, s), Tc(d, d, t, s), [d];
  } else {
    const c = pl(e), l = i?.[i.length - 1];
    if (j(l) && si(c, l))
      return r && xc(l, [r]), [];
    a();
    const u = rn(c.style, Xe(c, Qo));
    return typeof c.cid == "string" && Rt(u, ii, () => c.cid), n && Rt(u, Mn, () => n), r && u.append(r), Cc(c.style, u, t, s), Tc(u, u, t, s), [u];
  }
}
function xc(e, t) {
  const r = e.getLastChild();
  $(r) && r.getMarkerSyntax() === "closing" || Wt(r) && r.getTextType() === "marker" && r.getTextContent() === at(e.getMarker(), j(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function Tc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && Cv(e.getMarker(), t, r, !1, n);
}
function Cc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = St(e, "opening", n) : r?.markerMode === "visible" && (i = en("marker", Be(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function Cv(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = St("", "selfClosing") : s = St(e, "closing", i) : r?.markerMode === "visible" && (s = en("marker", n ? at("") : at(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function Sv(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function ed(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function wn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function _v(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Zt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Rt(t, Mn, () => n);
        continue;
      }
      if (vv(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const $m = [
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
function vv(e) {
  return $m.includes(e);
}
function Zi(e) {
  return Wt(e) && we(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function qm(e) {
  const t = ls(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function Da(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.isBackward() ? e.focus : e.anchor, r = t.getNode();
  if (!(tu(r) && t.offset === 0 || we(r.getTopLevelElement())))
    return !1;
  const i = e.getNodes().find(Zi);
  if (!i)
    return !1;
  const s = i.getParent();
  if (!we(s))
    return !1;
  const o = qm(s);
  return t.set(o.key, o.offset, o.type), !0;
}
function qo(e) {
  const t = P();
  if (!A(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : v(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? xg(t) : bu(t);
    return Zi(n);
  }
  return Da(t) && t.isCollapsed();
}
function Ev(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed())
    return !1;
  const r = Pe(t.anchor.getNode(), we);
  if (!r || !Zi(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return qo(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(Zi)) {
    const n = qm(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function Mo() {
  const e = P();
  return A(e) && Da(e), !1;
}
function Mv() {
  const e = P();
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = t.getNode();
  return !we(r) || !Zi(r.getFirstChild()) ? !1 : (Kt(r, 1), !0);
}
function Av(e) {
  const t = e.getChildren(), r = `\\${e.getMarker()}`, n = t.findIndex((s) => _r(s) && s.getTextContent().startsWith(r));
  if (n <= 0)
    return;
  let i = t[n];
  for (const s of t.slice(0, n))
    i.insertAfter(s), i = s;
}
function Pv() {
  const [e] = me();
  return H(() => wv(e), [e]), H(() => $e(
    e.registerCommand(rr, qo, Re),
    e.registerCommand(qs, qo, Re),
    e.registerCommand(Wi, qo, Re),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(Wi, Ev, qr),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(En, Mo, ae),
    e.registerCommand(It, Mo, ae),
    e.registerCommand(Ut, Mo, ae),
    // REMOVE_TEXT_COMMAND is how drag-move deletion and composition-driven deletes reach a
    // non-collapsed selection — neither goes through DELETE_CHARACTER_COMMAND — so it needs the
    // same narrowing the other three selection-replacing commands get above.
    e.registerCommand(eu, Mo, ae)
  ), [e]), H(() => $e(
    // Below `DecoratorBoundarySelectionPlugin` (CRITICAL), which can itself produce `(book, 0)`
    // when it snaps a caret that landed inside the prefix glyph to the glyph's leading edge; above
    // the listeners that report the caret's position (e.g. `OnSelectionChangePlugin`, LOW), so
    // they only ever see the corrected one. Never claims the command.
    e.registerCommand(Vt, () => (Mv(), !1), Re),
    e.registerNodeTransform(Ht, Av)
  ), [e]), null;
}
function wv(e) {
  return $e(e.registerCommand(Hi, Nv, gt), e.registerCommand(Hi, (t) => (Ov(t), !1), ti));
}
function Nv(e) {
  return Rv(e.target), !1;
}
function Ov(e) {
  const t = e.target;
  if (Is(t) && tn(Qr(t)))
    return;
  const r = P();
  A(r) && $v(r);
}
function Ua(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Ct(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === U && (r++, t = t.getNextSibling());
    else if (Ce(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r;
}
function jt(e) {
  const t = Ua(e);
  return t === 0 ? !1 : (Kt(e, t), !0);
}
function Os(e) {
  jt(e) || e.selectStart();
}
function Rv(e) {
  if (!Is(e))
    return !1;
  const t = Qr(e);
  if (!tn(t))
    return !1;
  const r = t.getParent();
  return r ? (We(r) && jt(r) || Kt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function $i() {
  if (Dr().dispatchCommand(Im, void 0))
    return A(P());
  const e = Pn(P());
  return e ? (Os(e), !0) : !1;
}
const Im = xa("REPAIR_PARA_MARKER_SELECTION_COMMAND");
function Lm(e) {
  const t = Pn(e);
  if (!t)
    return;
  const r = Ua(t), n = t.getChildAtIndex(r - 1);
  return t.getChildAtIndex(r) ?? (tn(n) ? void 0 : n) ?? t;
}
function $v(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = le(t.key);
  if (!qe(r))
    return !1;
  const n = r.getFirstChild();
  return !_r(n) && !bi(n) ? !1 : jt(r);
}
function qv() {
  const [e] = me();
  return H(() => {
    const t = (r) => r instanceof KeyboardEvent && !td(r) || !yo() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return $e(
      e.registerCommand(ar, t, Re),
      e.registerCommand(En, t, Re),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(It, t, ae),
      e.registerCommand(Ut, t, ae),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Ta, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Qr(r.target);
        return !n || !Nn(n) ? !1 : (r.preventDefault(), !0);
      }, Re),
      e.registerCommand(rr, t, Re),
      e.registerCommand(qs, t, Re),
      e.registerCommand(Wi, t, Re)
    );
  }, [e]), null;
}
function td(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Nn(e) {
  return Pe(e, rd) ?? void 0;
}
function rd(e) {
  return _e(e) || Xg(e);
}
function yo() {
  const e = P();
  return A(e) ? Nn(e.anchor.getNode()) !== void 0 || Nn(e.focus.getNode()) !== void 0 : !1;
}
function Iv(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function Lv(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), Iv(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function Dv(e, t, r, n) {
  if (!Qv(t) || Lv(e, r))
    return !1;
  const i = r === "up" ? RS(t) : OS(t);
  return i && n.preventDefault(), i;
}
function Uv({ viewOptions: e }) {
  const [t] = me();
  return Kv(t, e), null;
}
function Kv(e, t) {
  H(() => {
    if (!e.hasNodes([Wr, Ft, Ue]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = P();
      if (!A(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Hf(o), d = Hv(i, Gf(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return Dv(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Hf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Gf(a, n.key) ? l = !c && Xf(i, "next") || !c && zv(i) || Yv(i) || !c && s && Yf(i, "next") : Fv(a, n.key) && (l = !c && Xf(i, "previous") || !c && Bv(i) || Xv(i, t) || !c && s && Yf(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(ar, r, Re);
  }, [e, t]);
}
function Hf(e) {
  return e.dir || "ltr";
}
function Gf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function Fv(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function hl(e) {
  if (!j(e) || e.getMarker() !== "fp")
    return;
  const t = Gt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function zv(e) {
  const t = hl(bu(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Kt(t, 0), !0);
}
function Bv(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = hl(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Jf(n);
  }
  if (t.offset === 0) {
    const n = hl(r);
    return n ? Jf(n) : !1;
  }
  return !1;
}
function Jf(e) {
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
const ta = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function jv(e) {
  if (ta)
    for (const { segment: r } of ta.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function Vv(e) {
  if (ta) {
    let n = 0;
    for (const { index: i } of ta.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Dm(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function Um(e) {
  return !!e && $(e) && Nn(e) !== void 0;
}
function es(e) {
  return v(e) && !e.isToken() && !Um(e) && e.getTextContentSize() > 0;
}
function Km(e) {
  return hi(e) ? !0 : W(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || Um(e)) && e.getTextContentSize() > 0 : Ln(e) ? !it(e) : !1;
}
function ts(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Ka(e, t, r) {
  for (let n = e; n; ) {
    if (Km(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? ts(n, t, r);
      continue;
    }
    if (es(n))
      return n;
    n = ts(n, t, r);
  }
}
function nd(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? ts(e, n, i) : r === "text" && Km(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : ts(e, n, i);
}
function Sc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = nd(e.node, e.offset, e.kind, "previous", t), n = Ka(r, "previous", t);
  if (!n)
    return e;
  if (es(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function Wv(e, t) {
  const r = e.getNode(), n = Dm(r);
  if (!n)
    return;
  if (e.type === "text" && es(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Sc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = nd(r, e.offset, e.type, t, n), s = Ka(i, t, n);
  if (!s)
    return;
  if (es(s)) {
    const c = s.getTextContent(), l = t === "next" ? jv(c) : Vv(c);
    return Sc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Sc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Fm(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = Wv(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && L(i.node) ? Vu(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Yf(e, t) {
  return Fm(e, t, "collapse");
}
function Hv(e, t) {
  return Fm(e, t, "extend");
}
function Gv(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && es(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = nd(n, e.offset, e.type, t, r);
  return Ka(i, t, r) === void 0;
}
function Jv(e, t) {
  const r = Qe();
  for (let n = e; n; ) {
    const i = ts(n, t, r), s = i && Ka(i, t, r);
    if (!s)
      return;
    if (n = Nn(s), !n)
      return s;
  }
}
function Xf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Nn(n))
    return !1;
  const i = Dm(n);
  if (!i || !Gv(r, t, i))
    return !1;
  const s = ts(i, t, Qe()), o = s && Nn(s);
  if (!o)
    return !1;
  const a = Jv(o, t);
  if (!a)
    return !0;
  if (es(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Qf(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  Vu(t, r);
}
function Yv(e) {
  const t = e.anchor.getNode(), r = bu(e);
  if (W(r) && !$(r.getFirstChild())) {
    if (qe(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(We(i) && jt(i)) && i.selectStart(), !0;
      }
    } else return Wt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (qe(t) && W(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Qf(r), !0;
  }
  const n = r?.getParent();
  if (Wt(r) && W(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Qf(n) : n.selectEnd(), !0;
  }
  return !1;
}
function Xv(e, t) {
  const r = xg(e);
  if (ao(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && Zi(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (we(o) && !r)
    return !0;
  if (W(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!bi(c) && !we(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const u = r.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (qe(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = Pe(c, (u) => W(u));
    if (W(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const d = l.getIndexWithinParent();
      return u.select(d, d), !0;
    }
  }
  const a = Gt(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (_t(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function Qv(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return Ce(t) && Ln(t);
}
function Zv() {
  const [e] = me();
  return eE(e), null;
}
function eE(e) {
  H(() => {
    if (!e.hasNodes([Ae]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return $e(
      e.registerNodeTransform(Ae, nE),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(Ae, iC),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(Ae, Kg),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(Ae, (t) => Vs(oi("char"), t)),
      e.registerNodeTransform(tt, iE)
    );
  }, [e]);
}
function _c(e) {
  return e.getChildren().some($);
}
function tE(e, t) {
  const r = t.getFirstChild();
  if (!$(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (os(n)) {
    const i = n.getTextContent();
    i.startsWith(U) && (i === U ? n.remove() : n.setTextContent(i.slice(U.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function rE(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  $(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function nE(e) {
  if (!j(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (_c(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ge(e, ii), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (j(i) && si({ style: t, cid: r }, i) && Qt(n, i.getUnknownAttributes()))
    if (_c(i)) {
      if (tE(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  j(s) && si({ style: t, cid: r }, s) && Qt(n, s.getUnknownAttributes()) && (_c(s) ? rE(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function iE(e) {
  const t = e.getParent();
  if (!j(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  if (r.length > 1 && r.startsWith(or)) {
    const n = P();
    if (A(n) && n.isCollapsed() && n.anchor.key === e.getKey() && n.anchor.offset === 0)
      return;
    e.setTextContent(r.slice(1)), e.selectEnd();
  }
}
function zm(e) {
  return e.replaceAll("	", " ");
}
function Bm() {
  const e = P();
  return !!e && !e.isCollapsed();
}
function jm(e) {
  const t = () => !Bm();
  return $e(e.registerCommand(Zr, t, gt), e.registerCommand(Ut, t, gt));
}
const id = (e) => {
  e.dispatchCommand(Zr, null);
}, sd = (e) => {
  e.dispatchCommand(Ut, null);
}, od = (e) => {
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
      n.setData(o, zm(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(It, s);
  });
}, ad = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", zm(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(It, i);
  });
};
function sE() {
  const [e] = me();
  return H(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(gr ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), id(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), sd(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? ad(e) : od(e)));
    };
    return $e(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      jm(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function gl(e) {
  return e.includes("\\") || e.includes("/");
}
function oE({ logger: e }) {
  const [t] = me();
  return H(() => $e(
    // When the backslash or forward slash key is typed.
    t.registerCommand(ar, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), qr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(It, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !gl(n) ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, qr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Ta, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !gl(n) ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, qr)
  ), [t, e]), null;
}
const ra = "editor-context-menu";
function ml(e) {
  return `${ra}-item-${e}`;
}
const aE = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function cE({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), M("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: ml(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: M("span", { className: "text", children: i.title }) });
}
function lE({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return M("div", { className: "typeahead-popover", children: M("ul", { id: ra, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => M(cE, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let uE = 0;
class ks {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${uE++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function dE({ options: e } = {}) {
  const [t] = me(), [r, n] = Te(() => !t.isEditable()), [i, s] = Te({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = Te(void 0), c = et(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new ks("Cut", {
        onSelect: () => {
          sd(t);
        },
        isDisabled: r
      }),
      new ks("Copy", {
        onSelect: () => {
          id(t);
        }
      }),
      new ks("Paste", {
        onSelect: () => {
          od(t);
        },
        isDisabled: r
      }),
      new ks("Paste as Plain Text", {
        onSelect: () => {
          ad(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((h) => new ks(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = re(null), u = re(null), d = Ee(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return H(() => jm(t), [t]), H(() => {
    const f = (p) => {
      const h = p.target;
      t.getRootElement() === h || fg(h) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, h) => {
      h?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), H(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const h = p.target;
      h instanceof Node && l.current?.contains(h) || d();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, d]), H(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      d();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, d]), H(() => {
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
          if (aE.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, d, c, o, t]), H(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", ra), () => {
        f.removeAttribute("aria-controls"), f.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), H(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (!f)
      return;
    if (o === void 0) {
      f.removeAttribute("aria-activedescendant");
      return;
    }
    f.setAttribute("aria-activedescendant", ml(o));
    const p = document.getElementById(ra), h = document.getElementById(ml(o));
    if (!p || !h)
      return;
    const g = p.getBoundingClientRect(), m = h.getBoundingClientRect(), b = m.top - g.top + p.scrollTop, T = m.bottom - g.top + p.scrollTop;
    b < p.scrollTop ? p.scrollTop = b : T > p.scrollTop + p.clientHeight && (p.scrollTop = T - p.clientHeight);
  }, [t, i.isOpen, o]), H(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), io(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: h } = f.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    f.style.left = `${g}px`, f.style.top = `${m}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? ix.createPortal(M("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: M(lE, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), d());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function fE(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function pE(e) {
  if (!Uk(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function hE(e, t) {
  return t && tn(e) || _t(e);
}
function vc(e, t, r, n) {
  const i = Qr(t.node);
  if (!Ln(i) || hE(i, n))
    return;
  const s = e.getElementByKey(i.getKey());
  if (!s || s === t.node || !s.contains(t.node))
    return;
  const o = s.parentNode;
  if (!o)
    return;
  const a = Array.prototype.indexOf.call(o.childNodes, s);
  if (!(a < 0))
    return { node: o, offset: r === "before" ? a : a + 1 };
}
function gE(e, t) {
  if (P())
    return !1;
  const r = e.getRootElement(), n = Ch(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Sh(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = vc(e, c, pE(c), !0), d = u;
  else {
    const m = fE(n.getRangeAt(0), c);
    u = vc(e, c, m ? "before" : "after", !1), d = vc(e, l, m ? "after" : "before", !1);
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, h = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = ru(h, e);
  return g ? (Tt(g), g.dirty = !t, t) : !1;
}
function mE() {
  const [e] = me(), t = re(!1), r = re(!1);
  return H(() => {
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
  }, [e]), H(() => e.registerCommand(Vt, () => (gE(e, t.current) && (r.current = !0), !1), ae), [e]), null;
}
function yE() {
  const [e] = me();
  return H(() => e.registerCommand(ar, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(gr ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, ae), [e]), null;
}
function bE({ isEditable: e }) {
  const [t] = me();
  return io(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function cd(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function $r(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function Ec(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = P();
    if (!A(i))
      return !1;
    const s = ru(r, e);
    return !!s && i.is(s);
  }, { editor: e }) || r.removeAllRanges();
}
function Ui(e, t) {
  let r;
  try {
    r = Dr();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function Zf(e) {
  return !!e && lo(le(e));
}
function ld(e) {
  const [t] = me(), r = re(void 0), n = Ee((i) => {
    const s = P(), o = A(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Zf(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = ls(u, d), p = lo(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const h = PT();
        i.insertAfter(h), r.current = h.getKey(), l = h.getKey();
      }
      Kt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = le(a);
      v(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return H(() => {
    const i = () => {
      const a = e(), c = P(), l = A(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (ht($t), $r(t, $t), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (co(c) || !c.includes(Ji))
        return;
      const l = P(), u = A(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (wT(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Ji).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = $e(t.registerCommand(Vt, () => (i(), !1), ti), t.registerCommand(nu, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Zf(a);
      }), c && t.update(() => {
        const l = le(a);
        v(l) && l.remove();
      }, { tag: $t }), r.current = void 0, !1;
    }, ti), t.registerNodeTransform(tt, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function kE() {
  const e = P();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = W(r) ? r : r.getParent();
  if (!W(n))
    return;
  const i = R_(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && lo(s); )
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
function xE() {
  return ld(kE), null;
}
function TE() {
  const e = P();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!Ce(i) || ls(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || Ce(s))
    return i;
}
function CE() {
  return ld(TE), null;
}
function SE(e, t) {
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (tu(n)) {
    const a = n.getChildAtIndex(t === "backward" ? r.offset - 1 : r.offset);
    return _e(a) ? tp(a, t, !0) : void 0;
  }
  let i = Js(n);
  if (!i || r.type === "text" && !(t === "backward" ? r.offset === 0 : r.offset === n.getTextContentSize()))
    return;
  let s = Vm(e, t, i);
  const o = [];
  for (; ; ) {
    for (; s; ) {
      if (_e(s))
        o.push(s);
      else if (!AE(s))
        break;
      s = On(s, t, i);
    }
    if (s || !W(i))
      break;
    const a = Js(i.getParentOrThrow());
    if (!a)
      return;
    s = On(i, t, a), i = a;
  }
  if (o.length > 0)
    return { nodes: t === "backward" ? o.reverse() : o, placement: "inline" };
  if (!(s || !qe(i)))
    return tp(i, t, !1);
}
function Gn(e) {
  if (!A(e) || e.isCollapsed())
    return [];
  const t = [];
  for (const r of e.getNodes()) {
    const n = PE(r);
    n && !t.some((i) => i.is(n)) && t.push(n);
  }
  return t;
}
function ep(e, t) {
  if (!A(e) || !e.isCollapsed())
    return [];
  const r = Js(e.anchor.getNode());
  if (!r)
    return [];
  const n = [];
  let i = Vm(e, t, r);
  for (; i; )
    _e(i) && n.push(i), i = On(i, t, r);
  return t === "backward" ? n.reverse() : n;
}
function _E(e, t) {
  const r = e.nodes[0], n = e.nodes[e.nodes.length - 1];
  if (e.placement === "inline") {
    const s = Js(r);
    return s ? (t === "backward" ? Hm(r, s) : ud(n, s), !0) : !1;
  }
  if (t === "backward") {
    const s = r.getPreviousSibling();
    return qe(s) ? (wE(s), !0) : !1;
  }
  const i = n.getNextSibling();
  return qe(i) ? (jt(i) || NE(i), !0) : !1;
}
function vE(e, t) {
  if (e.placement === "inline")
    return !0;
  const r = t === "backward" ? e.nodes[0].getPreviousSibling() : e.nodes[e.nodes.length - 1].getNextSibling();
  return qe(r);
}
function EE(e, t) {
  const r = Js(t.anchor.getNode()), n = e.getNode();
  return !!r && (r.is(n) || r.isParentOf(n));
}
function ME(e) {
  return e.map((t) => {
    const r = t.getMarker();
    return r ? { tag: t.getTag(), marker: r } : { tag: t.getTag() };
  });
}
function Js(e) {
  return qe(e) || W(e) ? e : Pe(e, (t) => qe(t) || W(t)) ?? void 0;
}
function Vm(e, t, r) {
  const { anchor: n } = e, i = n.getNode();
  if (n.type === "text" || !L(i))
    return On(i, t, r);
  const s = i.getChildAtIndex(t === "backward" ? n.offset - 1 : n.offset);
  return s ? Fa(s, t, r) : i.is(r) ? void 0 : On(i, t, r);
}
function Wm(e, t, r) {
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
function Fa(e, t, r) {
  let n = e;
  for (; n; ) {
    if (_e(n) || W(n) || !L(n))
      return n;
    n = (t === "backward" ? n.getLastChild() : n.getFirstChild()) ?? Wm(n, t, r);
  }
}
function On(e, t, r) {
  const n = Wm(e, t, r);
  return n ? Fa(n, t, r) : void 0;
}
function tp(e, t, r) {
  const n = [];
  let i = r ? e : t === "backward" ? e.getPreviousSibling() : e.getNextSibling();
  for (; _e(i); )
    n.push(i), i = t === "backward" ? i.getPreviousSibling() : i.getNextSibling();
  if (n.length !== 0)
    return { nodes: t === "backward" ? n.reverse() : n, placement: "block" };
}
function AE(e) {
  return v(e) && e.getTextContentSize() === 0;
}
function PE(e) {
  let t = _e(e) ? e : void 0;
  for (const r of e.getParents())
    _e(r) && (t = r);
  return t;
}
function Hm(e, t) {
  const r = On(e, "backward", t);
  v(r) && !r.isToken() ? r.select(r.getTextContentSize(), r.getTextContentSize()) : za(e.getParentOrThrow(), e.getIndexWithinParent());
}
function ud(e, t) {
  const r = On(e, "forward", t);
  v(r) && !r.isToken() ? r.select(0, 0) : za(e.getParentOrThrow(), e.getIndexWithinParent() + 1);
}
function za(e, t) {
  const r = Ur();
  r.anchor.set(e.getKey(), t, "element"), r.focus.set(e.getKey(), t, "element"), Tt(r);
}
function wE(e) {
  const t = e.getLastChild();
  let r = t ? Fa(t, "backward", e) : void 0;
  for (; _e(r); )
    r = On(r, "backward", e);
  r ? v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : ud(r, e) : za(e, 0);
}
function NE(e) {
  const t = e.getFirstChild(), r = t ? Fa(t, "forward", e) : void 0;
  r ? v(r) ? r.select(0, 0) : W(r) ? ud(r, e) : Hm(r, e) : za(e, 0);
}
function Lr(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!$(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = nn(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function OE(e) {
  const t = e.getParent();
  if (W(t))
    return Lr(t).some((r) => r.is(e)) ? t : void 0;
}
function li(e) {
  const t = Lr(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function RE(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function $E(e) {
  const t = Kk();
  if (!A(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= li(e);
  const i = RE(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= li(e);
}
function zi(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = OE(t);
  if (r)
    return Gm(r, t, e.offset) ? void 0 : r;
}
function Gm(e, t, r) {
  const n = Lr(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function qE(e) {
  const t = Lr(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Kt(e, li(e));
}
function IE(e = !1) {
  const t = P();
  if (!A(t))
    return !1;
  if (!t.isCollapsed())
    return dd(t);
  const r = Jm(t.anchor);
  if (r) {
    const i = ia(r);
    return t.anchor.is(i) ? !1 : (Ym(t, i), !0);
  }
  const n = zi(t.anchor);
  if (!n)
    return !1;
  if (!e && $E(n)) {
    const i = n.getParent();
    if (!i)
      return !1;
    Kt(i, n.getIndexWithinParent());
  } else
    qE(n);
  return !0;
}
function na(e) {
  const t = Lr(e), r = t[t.length - 1];
  return v(r) ? mr(r.getKey(), r.getTextContentSize(), "text") : mr(e.getKey(), li(e), "element");
}
function rs(e) {
  const t = e.getLastChild();
  return $(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function Mc(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === rs(e) && $(r) && t.offset > 0;
}
function yl(e) {
  const t = rs(e);
  if (t === e.getChildrenSize())
    return;
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function ia(e) {
  const t = rs(e);
  if (t > li(e)) {
    const r = e.getChildAtIndex(t - 1), n = L(r) ? r.getLastDescendant() : r;
    if (v(n))
      return mr(n.getKey(), n.getTextContentSize(), "text");
  }
  return na(e);
}
function Jm(e) {
  const t = e.getNode(), r = t.getParent();
  if (W(r) && Lr(r).length > 0 && yl(r)?.is(t))
    return r;
  if (e.type !== "element")
    return;
  if (W(t) && Lr(t).length > 0 && yl(t))
    return e.offset > rs(t) || e.offset === rs(t) && e.offset > li(t) ? t : void 0;
  if (!L(t))
    return;
  const n = t.getChildAtIndex(e.offset - 1);
  return W(n) && Lr(n).length > 0 && !n.getNextSibling() ? n : void 0;
}
function Ym(e, t) {
  e.anchor.set(t.key, t.offset, t.type), e.focus.set(t.key, t.offset, t.type);
}
function Xm(e) {
  const t = Gt(e);
  return t && Lr(t).length > 0 ? t : void 0;
}
function LE(e) {
  const t = [], r = (n) => {
    const i = Xm(n);
    !i || t.some((s) => s.is(i)) || t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function dd(e) {
  const t = LE(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => mr(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const u = mr(l.getKey(), li(l), "element"), d = mr(l.getKey(), rs(l), "element"), f = i.type === "text" && Gm(l, i.getNode(), i.offset), p = i.isBefore(u) && !f;
    (zi(i) || Mc(l, i) || p) && (!s.isBefore(u) || zi(s)) && (i = Mc(l, i) ? ia(l) : na(l), o = !0), (zi(s) || Mc(l, s) || d.isBefore(s)) && (i.isBefore(d) || i.is(d)) && (s = zi(s) ? na(l) : ia(l), o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function rp(e, t) {
  const r = Ur();
  return r.anchor.set(e.key, e.offset, e.type), r.focus.set(t.key, t.offset, t.type), r.getTextContent();
}
function np(e, t) {
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
function ip(e, t, r) {
  const n = np(e, t), i = np(e, r);
  return n !== void 0 && i !== void 0 && Math.abs(n - i) >= 1;
}
function DE(e) {
  if (e.type === "element") {
    const r = e.getNode();
    return L(r) ? r.getChildAtIndex(e.offset) ?? void 0 : void 0;
  }
  const t = e.getNode();
  return t.getTextContentSize() === e.offset ? t.getNextSibling() ?? void 0 : void 0;
}
function UE(e, t, r, n) {
  const i = t.anchor, s = Jm(i);
  if (s)
    return Ym(t, ia(s)), !0;
  const o = Xm(i.getNode());
  if (!o) {
    if (r)
      return !1;
    const d = DE(t.focus);
    return W(d) && Lr(d).length > 0;
  }
  if (zi(i))
    return !0;
  const a = na(o);
  if (r) {
    if (!(a.isBefore(i) && !a.is(i)))
      return !0;
    const d = rp(a, i);
    return d === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(d) || n === "line" && ip(e, a, i) ? !1 : (t.anchor.set(a.key, a.offset, a.type), t.removeText(), !0);
  }
  if (i.isBefore(a))
    return !0;
  const c = yl(o);
  if (!c)
    return !1;
  const l = mr(c.getKey(), 0, "text"), u = rp(i, l);
  return u === "" ? !0 : n === "character" || n === "word" && /[\p{L}\p{N}]/u.test(u) || n === "line" && ip(e, i, l) ? !1 : (t.focus.set(l.key, l.offset, l.type), t.removeText(), !0);
}
function KE() {
  const [e] = me(), t = re(!1);
  return H(() => {
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
  }, [e]), H(() => {
    const r = (o) => () => {
      const a = P();
      return !A(a) || a.isCollapsed() || !dd(a) ? !1 : o && a.isCollapsed();
    }, n = r(!1), i = r(!0), s = (o) => (a) => {
      const c = P();
      return A(c) ? c.isCollapsed() ? UE(e, c, a, o) : i() : !1;
    };
    return $e(e.registerCommand(En, n, ae), e.registerCommand(It, n, ae), e.registerCommand(ri, n, ae), e.registerCommand(Vc, n, ae), e.registerCommand(rr, s("character"), ae), e.registerCommand(qs, s("word"), ae), e.registerCommand(Wi, s("line"), ae), e.registerCommand(eu, i, ae), e.registerCommand(Ut, i, ae));
  }, [e]), H(() => e.registerCommand(Vt, () => (IE(t.current) && (ht($t), $r(e, $t)), !1), ti), [e]), null;
}
const bl = "confirmed-delete";
function sa(e, t) {
  return e.key === t.key && e.offset === t.offset && e.type === t.type;
}
function Qm(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function on(e) {
  return e ? qe(e) ? e : Pe(e, (r) => qe(r)) ?? void 0 : void 0;
}
function Zm(e) {
  if (!A(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = on(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function fd(e) {
  return A(e) && e.isCollapsed() && e.anchor.type === "element" || !A(e) && !pi(e) ? !1 : e.getNodes().some((t) => Ce(t));
}
function pd(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = on(r);
  if (!n || !L(n))
    return !1;
  const i = tn(n.getFirstChild()) ? 1 : 0;
  if (r.is(n))
    return t.offset <= i;
  if (t.offset !== 0)
    return !1;
  let s = r;
  for (; s && s.getKey() !== n.getKey(); ) {
    const o = s.getPreviousSibling();
    if (o && !(i && o.is(n.getFirstChild())))
      return !1;
    s = s.getParent();
  }
  return !0;
}
function FE(e) {
  if (!e || !pd(e) || !A(e))
    return;
  const t = on(e.anchor.getNode());
  return he(t) && Tu(t) ? t : void 0;
}
function ey(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = on(r);
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
function sp(e, t) {
  return !!kl(e, t);
}
function kl(e, t) {
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
function oa(e, t) {
  if (!A(e))
    return !1;
  const r = on(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Qn(e) {
  return fd(e) || Zm(e);
}
function Ys(e, t) {
  if (fd(e) || Zm(e))
    return !0;
  if (!A(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return pd(e) && oa(e, "backward") || sp(e, "backward");
    case "deleteForward":
      return ey(e) && oa(e, "forward") || sp(e, "forward");
    case "insertText":
      return !1;
  }
}
function zE(e, t) {
  if (!(!A(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = kl(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (pd(e) && oa(e, "backward")) {
        const n = on(e.anchor.getNode());
        if (We(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = kl(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (ey(e) && oa(e, "forward")) {
        const i = on(e.anchor.getNode())?.getNextSibling();
        if (We(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function op(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return pi(e) && e.has(t.key);
  if (t.kind === "selection")
    return !A(e) || e.isCollapsed() || !t.anchor || !t.focus ? !1 : sa(e.anchor, t.anchor) && sa(e.focus, t.focus);
  if (!A(e) || e.isCollapsed())
    return !1;
  const r = on(e.anchor.getNode()), n = on(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function ty(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function xl(e) {
  const t = e.getPreviousSibling();
  if (!qe(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = Ct(n), s = e.getChildren().filter((o) => !vr(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), ry(t, r);
}
function ry(e, t) {
  !t || Ct(t) || vr(t) ? Os(e) : v(t) ? ty(t) : Kt(e, t.getIndexWithinParent() + 1);
}
function ny(e) {
  return Ce(e) || rt(e) ? [] : We(e) ? e.getChildren().flatMap(ny) : [e];
}
function BE(e) {
  const t = [];
  for (const r of e) {
    const n = ny(r);
    n.length !== 0 && (We(r) && t.length > 0 && t.push(Oe(" ")), t.push(...n));
  }
  return t;
}
const jE = /* @__PURE__ */ new Set(["​", " "]), ap = 6e4;
function VE({ isEnabled: e, structureProtectionMode: t = "off", copyLimit: r, onHiddenContentDelete: n, logger: i }) {
  const [s] = me(), o = re(n), a = re(t), c = re(r), l = re(i);
  H(() => {
    o.current = n, a.current = t, c.current = r, l.current = i;
  }, [n, t, r, i]);
  const u = !!n;
  return H(() => {
    if (!e || !u)
      return;
    let d = !1, f = !1, p = !1;
    const h = (G) => {
      d = !0;
      try {
        G();
      } finally {
        d = !1;
      }
    }, g = async (G) => {
      const z = o.current;
      if (!z)
        return "keep";
      try {
        await new Promise((F) => setTimeout(F, 0));
        const O = await z(G);
        return O !== "delete" && O !== "keep" && l.current?.warn(`[HiddenContentDeleteGuard] onHiddenContentDelete answered ${JSON.stringify(O)}, which is neither "delete" nor "keep"; keeping the hidden content.`), O === "delete" ? "delete" : "keep";
      } catch (O) {
        return l.current?.error("[HiddenContentDeleteGuard] onHiddenContentDelete failed; keeping the hidden content.", O), "keep";
      }
    }, m = (G, z) => l.current?.info(`[HiddenContentDeleteGuard] Dropped the "${G}" answer: ${z}. Nothing was changed.`), b = (G, z, O, F, ee = []) => {
      const X = [hd(G), ...ee], w = {
        ...X[0],
        hiddenKeys: z.map((xe) => xe.getKey()),
        ranges: X,
        covered: sy(X)
      }, Z = {
        items: ME(z),
        action: O,
        canSkip: !!F.$keep
      };
      f = !0;
      const pe = setTimeout(() => !p && l.current?.warn(`[HiddenContentDeleteGuard] onHiddenContentDelete has not answered after ${ap / 1e3}s; editing stays held until it does.`), ap);
      return g(Z).then((xe) => {
        clearTimeout(pe), f = !1, p ? m(xe, "the editor's guard was torn down while asking") : T(w, xe, F);
      }), !0;
    }, T = (G, z, O) => {
      const F = s.getEditorState().read(() => {
        if (!eM(G))
          return "the selection moved while asking";
        if (!cp(G))
          return "the document changed while asking";
      });
      if (F) {
        m(z, F);
        return;
      }
      if (!s.getRootElement()) {
        m(z, "the editor has no root element to return focus to");
        return;
      }
      s.focus(() => queueMicrotask(() => k(G, z, O)));
    }, k = (G, z, O) => {
      if (p) {
        m(z, "the editor's guard was torn down while asking");
        return;
      }
      let F = !1;
      s.update(() => {
        if (!s.isEditable()) {
          m(z, "the editor became read-only while asking");
          return;
        }
        if (!cp(G)) {
          m(z, "the document changed while asking");
          return;
        }
        if (Tt(gd(G) ?? null), z === "keep") {
          O.$keep?.();
          return;
        }
        O.$delete?.(), F = !0;
      }, { discrete: !0 });
      const { replay: ee } = O;
      F && ee && h(() => s.update(() => {
        ht(bl), ee();
      }, { discrete: !0 }));
    }, E = (G, z, O) => {
      const F = SE(G, z), ee = O === "character" || F?.placement === "block" ? void 0 : JE(s, G, z, O), X = QE([...F?.nodes ?? [], ...ee?.hidden ?? []]);
      if (X.length === 0)
        return !1;
      const w = X.map((Ke) => Ke.getKey()), Z = !!F && X.length === F.nodes.length && vE(F, z), pe = F?.nodes.map((Ke) => Ke.getKey()) ?? [], xe = ee?.range;
      return b(G, X, z === "backward" ? "deleteBackward" : "deleteForward", {
        $keep: F && Z ? () => _E(tM(F, pe), z) : void 0,
        $delete: () => {
          xe && YE(xe), XE(w);
        }
      }, [ZE(G, X, z), ...xe ? [xe] : []]);
    }, S = (G, z, O) => b(G, z, "replaceSelection", { replay: O }), N = () => {
      if (d || !s.isEditable())
        return;
      const G = P();
      if (!(!A(G) || yo()))
        return G;
    }, q = (G) => (z) => !f || d ? G(z) : (z instanceof Event && z.preventDefault(), !0), K = (G) => a.current === "protected" && Qn(G), V = (G) => {
      if (d)
        return !1;
      const z = WE(G);
      if (f)
        return !z && !td(G) ? !1 : (G.preventDefault(), !0);
      if (!z)
        return !1;
      const O = N();
      if (!O?.isCollapsed())
        return !1;
      const F = z.direction === "backward" ? "deleteBackward" : "deleteForward";
      if (a.current === "protected" && Ys(O, F))
        return !1;
      const ee = E(O, z.direction, z.granularity);
      return ee && G.preventDefault(), ee;
    }, ue = (G, z) => q((O) => {
      const F = N();
      if (!F || G === rr && a.current === "protected" && Ys(F, O ? "deleteBackward" : "deleteForward"))
        return !1;
      if (F.isCollapsed())
        return E(F, O ? "backward" : "forward", z);
      const ee = Gn(F);
      return ee.length === 0 ? !1 : S(F, ee, () => s.dispatchCommand(G, O));
    }), te = (G) => q((z) => {
      const O = N();
      if (!O || O.isCollapsed())
        return !1;
      const F = Gn(O);
      return F.length === 0 ? !1 : S(O, F, () => s.dispatchCommand(G, z));
    }), ye = (G) => {
      const z = N();
      if (!z || z.isCollapsed() || K(z))
        return !1;
      const O = Gn(z);
      if (O.length === 0)
        return !1;
      const F = typeof G == "string" ? G : G.data ?? G.dataTransfer?.getData("text/plain") ?? "", ee = s.isComposing() && jE.has(F);
      return S(z, O, () => ee || F === "" ? s.dispatchCommand(rr, !0) : s.dispatchCommand(En, F));
    }, se = (G) => {
      const z = N();
      return !z || Gn(z).length === 0 ? !1 : Ao(G);
    }, I = (G) => {
      const z = N();
      if (!z || z.isCollapsed())
        return !1;
      const O = a.current === "protected";
      if (K(z) || HE(G, O))
        return !1;
      const F = Gn(z);
      if (F.length === 0)
        return !1;
      const ee = GE(G);
      return Ao(G), S(z, F, () => s.dispatchCommand(It, ee));
    }, Y = (G) => {
      const z = N();
      if (!z || z.isCollapsed() || K(z) || (iy(z), z.isCollapsed()))
        return !1;
      const O = Gn(z);
      return O.length === 0 ? !1 : c.current !== void 0 ? Ao(G) : (s.dispatchCommand(Zr, G), Ao(G), S(z, O, () => s.dispatchCommand(rr, !0)));
    };
    return $e(() => {
      p = !0;
    }, s.registerCommand(ar, V, ae), s.registerCommand(rr, ue(rr, "character"), ae), s.registerCommand(qs, ue(qs, "word"), ae), s.registerCommand(Wi, ue(Wi, "line"), ae), s.registerCommand(En, q(ye), ae), s.registerCommand(ri, te(ri), ae), s.registerCommand(Vc, te(Vc), ae), s.registerCommand(Uo, se, ae), s.registerCommand(eu, se, ae), s.registerCommand(It, q(I), ae), s.registerCommand(Ut, q(Y), ae));
  }, [s, e, u]), null;
}
function WE(e) {
  const t = gr ? { altKey: !0 } : { ctrlKey: !0 }, r = (n) => gr && Tn(e, n, { ctrlKey: !0 });
  if (Tn(e, "Backspace", { shiftKey: "any" }) || r("h"))
    return { direction: "backward", granularity: "character" };
  if (Tn(e, "Delete", {}) || r("d"))
    return { direction: "forward", granularity: "character" };
  if (Tn(e, "Backspace", t))
    return { direction: "backward", granularity: "word" };
  if (Tn(e, "Delete", t))
    return { direction: "forward", granularity: "word" };
  if (gr && Tn(e, "Backspace", { metaKey: !0 }))
    return { direction: "backward", granularity: "line" };
  if (gr && Tn(e, "Delete", { metaKey: !0 }) || r("k"))
    return { direction: "forward", granularity: "line" };
}
function Ao(e) {
  return e?.preventDefault(), !0;
}
function HE(e, t) {
  if (typeof ClipboardEvent > "u" || !(e instanceof ClipboardEvent))
    return !1;
  const r = e.clipboardData;
  return r ? Array.from(r.types).every((n) => n === "Files") ? !0 : t && r.getData("text/html") ? !1 : gl(r.getData("text/plain")) : !1;
}
function GE(e) {
  if (typeof ClipboardEvent > "u" || typeof DataTransfer > "u" || !(e instanceof ClipboardEvent) || !e.clipboardData)
    return e;
  const t = new DataTransfer();
  for (const r of e.clipboardData.types)
    r !== "Files" && t.setData(r, e.clipboardData.getData(r));
  for (const r of Array.from(e.clipboardData.files))
    t.items.add(r);
  return new ClipboardEvent("paste", { clipboardData: t, cancelable: !0 });
}
function JE(e, t, r, n) {
  const i = e.getRootElement()?.ownerDocument.defaultView?.getSelection();
  if (!i || typeof i.modify != "function")
    return { hidden: n === "line" ? ep(t, r) : [] };
  const s = t.clone();
  return s.dirty = !0, s.modify("extend", r === "backward", n === "line" ? "lineboundary" : "word"), t.dirty = !0, EE(s.focus, t) ? {
    hidden: Gn(s),
    range: s.isCollapsed() ? void 0 : hd(s)
  } : { hidden: ep(t, r) };
}
function YE(e) {
  const t = gd(e);
  t && (iy(t), !t.isCollapsed() && (Tt(t), t.removeText()));
}
function iy(e) {
  Da(e), dd(e);
}
function XE(e) {
  for (const t of e) {
    const r = le(t);
    _e(r) && r.isAttached() && r.remove();
  }
}
function QE(e) {
  return e.filter((r, n) => e.findIndex((i) => i.is(r)) === n).sort((r, n) => r.isBefore(n) ? -1 : 1);
}
function hd({ anchor: e, focus: t }) {
  const r = ({ key: n, offset: i, type: s }) => ({ key: n, offset: i, type: s });
  return { anchor: r(e), focus: r(t) };
}
function gd({ anchor: e, focus: t }) {
  const r = ({ key: i, offset: s, type: o }) => {
    const a = le(i);
    return !a || !a.isAttached() ? !1 : o === "element" ? L(a) && s <= a.getChildrenSize() : v(a) && s <= a.getTextContentSize();
  };
  if (!r(e) || !r(t))
    return;
  const n = Ur();
  return n.anchor.set(e.key, e.offset, e.type), n.focus.set(t.key, t.offset, t.type), n;
}
function ZE(e, t, r) {
  const n = r === "backward" ? t[0] : t[t.length - 1], i = n.getIndexWithinParent() + (r === "backward" ? 0 : 1), s = {
    key: n.getParentOrThrow().getKey(),
    offset: i,
    type: "element"
  }, { anchor: o } = hd(e);
  return { anchor: o, focus: s };
}
function sy(e) {
  const t = [];
  for (const r of e) {
    const n = gd(r);
    if (!n)
      return;
    for (const i of n.getNodes())
      t.push(i.getKey(), v(i) ? i.getTextContent() : "");
  }
  return t.join("\0");
}
function cp(e) {
  return e.hiddenKeys.every((t) => le(t)?.isAttached()) && e.covered !== void 0 && sy(e.ranges) === e.covered;
}
function eM(e) {
  const t = P();
  return t ? A(t) ? sa(t.anchor, e.anchor) && sa(t.focus, e.focus) : !1 : !0;
}
function tM(e, t) {
  return { nodes: t.map((n) => le(n)).filter(_e), placement: e.placement };
}
function rM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = me();
  return H(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), H(() => {
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
        const u = cd(o);
        o.update(() => {
          u || ht(pr), o.setEditorState(l), o.dispatchCommand(Fk, void 0);
        }, { tag: cu });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const Ac = "caller_highlight", nM = In(function(t, r) {
  const [n] = me(), i = re(void 0), s = re(void 0), o = Ee(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const u = Or(a);
      return u ? (u.getChildren().find(_t) ?? nn(u))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(Ac), l?.classList.add(Ac), s.current = l;
  }, [n]);
  return ba(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Ui(n, () => Or(a)?.getKey()), o();
    }
  }), [n, o]), H(() => $e(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Ue, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const d = l.has(cu) ? void 0 : c.read(() => Ku(u)), f = d === void 0 ? void 0 : n.getEditorState().read(() => Or(d)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), H(() => () => s.current?.classList.remove(Ac), []), null;
});
function iM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = me();
  return sM(t, n), oM(i, e, r, n), null;
}
function sM(e, t) {
  const r = re(void 0), n = re(void 0), i = e.noteCallers, s = e.crossRefCallers;
  H(() => {
    let o = i;
    (!o || o.length <= 0) && (o = k_), r.current !== o && (r.current = o, lp("note-callers", o, t));
  }, [t, i]), H(() => {
    let o = s;
    (!o || o.length <= 0) && (o = x_), n.current !== o && (n.current = o, lp("cross-ref-callers", o, t));
  }, [t, s]);
}
function oM(e, t, r, n) {
  H(() => {
    if (!e.hasNodes([Ae, Ue, br]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => pM(s));
    return $e(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ue, (s) => aM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(Ae, cM),
      e.registerNodeTransform(tt, lM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(br, uM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(br, (s, { prevEditorState: o }) => dM(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Vt, () => fM(e, t, r, n), gt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function aM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => _t(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !$(i) && i.getTextContent() !== Jt(e.getCaller()) && e.insertBefore(i);
  }
}
function cM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => _t(s));
  if (!j(e) || !W(t) || !n)
    return;
  const i = ku(r);
  n.getPreviewText() !== i && n.setPreviewText(i), ay(e);
}
function oy(e) {
  const t = P();
  if (!A(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function ay(e) {
  const t = e.getNextSibling();
  if (v(t) && !$(t)) {
    if (t.getTextContent() === U || oy(t))
      return;
    if (vr(t)) {
      t.setTextContent(U);
      return;
    }
  }
  e.insertAfter(fo());
}
function lM(e) {
  const t = Gt(e), r = t?.getChildren(), n = r?.find((a) => _t(a));
  if (!v(e) || !W(t) || !n || !r)
    return;
  const i = e.getParent(), s = vr(e) || oy(e);
  if (!$(e) && W(i) && s && e.getTextContent() !== U && (e.setTextContent(U), e.selectEnd()), j(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(or) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = ku(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function uM(e) {
  _t(e) && ay(e);
}
function dM(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = le(r), a = o?.getParent();
      return _t(o) && W(a) && a.getCaller() === Ls;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function fM(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = P();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Pe(o, (c) => W(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = le(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), xs(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (W(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, xs(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (W(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, xs(e, c, n);
    } else if (!a) {
      const c = Pe(o, (l) => W(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      qe(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, xs(e, l, n);
      }
    }
  }
  if (We(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (bi(c) && W(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, xs(e, l, n);
    }
  }
  return !1;
}
function xs(e, t, r) {
  const n = le(t);
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
function pM(e) {
  const t = P();
  if (!A(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (W(i) && v(s)) {
    e.preventDefault();
    const o = Ur();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Tt(o);
  }
}
function lp(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (hM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function hM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function gM({ onChange: e }) {
  const [t] = me();
  return H(() => t.registerCommand(Vt, () => {
    const r = zu();
    return e?.(r), !1;
  }, gt), [t, e]), null;
}
const mM = "psc-para-marker-selected", yM = /* @__PURE__ */ new Set(["Process", "Dead"]), bM = /* @__PURE__ */ new Set([
  "insertReplacementText",
  "insertFromDrop",
  "insertFromYank",
  "insertFromPaste",
  "insertFromPasteAsQuotation"
]);
function kM({ onParaMarkerMenuRequest: e, structureProtectionMode: t = "off" }) {
  const [r] = me(), n = re(e);
  H(() => {
    n.current = e;
  }, [e]);
  const i = re(t);
  return H(() => {
    i.current = t;
  }, [t]), H(() => {
    let s, o, a, c = !1, l;
    const u = () => {
      queueMicrotask(() => n.current?.());
    }, d = () => r.isEditable() ? Pn(P()) : void 0, f = (O) => {
      i.current !== "protected" && xl(O);
    }, p = (O) => {
      const F = r.getRootElement(), ee = Ch(F?.ownerDocument.defaultView ?? null), X = ee?.anchorNode;
      if (!ee || !X || !F?.contains(X) || r.getElementByKey(O)?.contains(X))
        return !1;
      const w = ru(ee, r);
      return w ? (Tt(w), !0) : !1;
    }, h = (O, F) => {
      const ee = O?.startContainer;
      if (!O || !ee || !r.getRootElement()?.contains(ee) || r.getElementByKey(F)?.contains(ee))
        return !1;
      const X = Ur();
      X.applyDOMRange(O);
      const { anchor: w } = X;
      return w.key === "root" && w.offset === 0 && w.type === "element" ? !1 : (Tt(X), !0);
    }, g = (O) => {
      const F = Is(O.target) ? Qr(O.target) : null;
      if (tn(F))
        return BT(F);
      const ee = Sn(P()), X = ee?.getParent();
      if (!ee || !We(X) || !F || p(ee.getKey()) || !Ln(F))
        return !1;
      const w = Pe(F, We), Z = w ? Pe(F, (pe) => pe.getParent()?.is(w) ?? !1) : void 0;
      return We(w) && Z ? Kt(w, Z.getIndexWithinParent() + 1) : Os(X), !1;
    }, m = (O) => {
      if (typeof O.key != "string" || I())
        return !1;
      const F = d();
      if (!F)
        return !1;
      const ee = n.current !== void 0;
      switch (O.key) {
        case "Enter":
          if (!ee || O.shiftKey || O.ctrlKey || O.metaKey || O.altKey)
            break;
          return O.preventDefault(), u(), !0;
        case "ArrowDown":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
          return O.preventDefault(), O.key === "ArrowDown" && O.altKey && ee ? u() : jt(F), !0;
        case "Backspace":
        case "Delete":
          return O.preventDefault(), f(F), !0;
        // A virtual keyboard names no key; the `beforeinput` that follows says what it does.
        case "Unidentified":
          return !1;
        default:
          if (!TM(O))
            return !1;
      }
      return jt(F), !1;
    }, b = (O) => {
      if (!r.isEditable())
        return !1;
      const F = d();
      if (F)
        return f(F), !0;
      if (!O || i.current !== "off")
        return !1;
      const ee = FE(P());
      return ee ? (xl(ee), !0) : !1;
    }, T = (O) => {
      if (I())
        return !1;
      const F = d();
      if (!F)
        return !1;
      const { inputType: ee } = O;
      if (ee.startsWith("delete"))
        return O.preventDefault(), f(F), !0;
      if (ee === "insertParagraph" && n.current)
        return O.preventDefault(), u(), !0;
      if (!ee.startsWith("insert"))
        return !1;
      const X = F.getFirstChildOrThrow().getKey();
      return bM.has(ee) && (h(O.getTargetRanges?.()[0], X) || p(X)) || jt(F), !1;
    }, k = () => {
      const O = d();
      return O && jt(O), !1;
    }, E = () => {
      const O = d();
      return O && (p(O.getFirstChildOrThrow().getKey()) || jt(O)), !1;
    }, S = (O) => (F) => {
      const ee = Sn(P());
      return !ee || !r.isEditable() ? !1 : p(ee.getKey()) ? (r.dispatchCommand(O, F), !0) : (SM(F) && F.preventDefault(), !0);
    }, N = (O) => {
      if (!Is(O.target))
        return !1;
      const F = Sn(P());
      if (!F)
        return !1;
      if (Qr(O.target)?.is(F))
        return O.preventDefault(), !0;
      const ee = r.getRootElement()?.ownerDocument;
      return h(ee && vM(ee, O.clientX, O.clientY), F.getKey()), !1;
    }, q = () => {
      const O = d();
      return O ? (jt(O), !0) : !1;
    }, K = () => r.getEditorState().read(() => Sn(P()) !== void 0), V = () => {
      if (c || !r.isEditable() || !K())
        return !1;
      const O = r.getRootElement();
      wc(O);
      const F = O?.ownerDocument.defaultView;
      return l !== void 0 && F?.clearTimeout(l), l = F?.setTimeout(() => {
        l = void 0, !c && r.isEditable() && K() && wc(O);
      }), !1;
    }, ue = (O) => {
      "button" in O && O.button !== 0 || (c = !0);
    }, te = () => {
      c = !1;
    }, ye = (O) => {
      O.addEventListener("pointerdown", ue, !0), O.addEventListener("pointerup", te, !0), O.addEventListener("pointercancel", te, !0);
    }, se = (O) => {
      O.removeEventListener("pointerdown", ue, !0), O.removeEventListener("pointerup", te, !0), O.removeEventListener("pointercancel", te, !0);
    }, I = () => {
      const O = P();
      if (!a || !cy(O, a.glyphKey))
        return !1;
      const { paraKey: F, previousKey: ee, nextKey: X } = a;
      a = void 0;
      const w = le(F), Z = ee ? le(ee) : null, pe = X ? le(X) : null;
      return We(w) && w.isAttached() ? Os(w) : We(Z) && Z.isAttached() ? ry(Z, Z.getLastChild()) : We(pe) && pe.isAttached() ? Os(pe) : Tt(null), !0;
    }, Y = (O) => {
      const F = r.isEditable() ? O : void 0, ee = F?.paraKey;
      s !== ee && Pc(r, s, !1), s = ee, Pc(r, ee, !0), o = up(r, o, F?.glyphKey);
    }, G = (O = r.getEditorState()) => O.read(() => {
      const F = Sn(P()), ee = F?.getParent();
      if (!(!F || !ee))
        return {
          glyphKey: F.getKey(),
          paraKey: ee.getKey(),
          previousKey: ee.getPreviousSibling()?.getKey(),
          nextKey: ee.getNextSibling()?.getKey()
        };
    }), z = $e(FT(r), r.registerEditableListener(() => Y(G())), r.registerRootListener((O, F) => {
      F && se(F.ownerDocument), O && ye(O.ownerDocument);
    }), () => {
      const O = r.getRootElement()?.ownerDocument;
      O && se(O), l !== void 0 && O?.defaultView?.clearTimeout(l);
    }, r.registerCommand(Hi, g, ae), r.registerCommand(ar, m, ae), r.registerCommand(iu, q, ae), r.registerCommand(rr, b, ae), r.registerCommand(zk, T, ae), r.registerCommand(Bk, k, ae), r.registerCommand(En, k, ae), r.registerCommand(It, E, ae), r.registerCommand(Ut, S(Ut), ae), r.registerCommand(Zr, S(Zr), ae), r.registerCommand(Uo, S(Uo), ae), r.registerCommand(Ta, N, ae), r.registerCommand(su, V, ae), r.registerCommand(Im, I, ae), r.registerUpdateListener(({ editorState: O }) => {
      const F = G(O);
      (F || !xM(O, a?.glyphKey)) && (a = F), Y(F), F && r.isEditable() && wc(r.getRootElement());
    }));
    return () => {
      z(), Pc(r, s, !1), up(r, o, void 0);
    };
  }, [r]), null;
}
function cy(e, t) {
  return !pi(e) || Sn(e) ? !1 : e.has(t) || e.getNodes().length === 0;
}
function xM(e, t) {
  return t === void 0 ? !1 : e.read(() => cy(P(), t));
}
function TM(e) {
  return td(e) || yM.has(e.key) ? !0 : e.ctrlKey || e.metaKey || e.altKey && !gr ? !1 : CM(e.key);
}
function CM(e) {
  return [...e].length === 1;
}
function SM(e) {
  return typeof e == "object" && e !== null && typeof e.preventDefault == "function";
}
function Pc(e, t, r) {
  if (t === void 0)
    return;
  const n = e.getElementByKey(t);
  n && n.classList.toggle(mM, r);
}
const _M = "psc-para-marker-";
function up(e, t, r) {
  const n = e.getRootElement(), i = r === void 0 ? null : e.getElementByKey(r), s = t === void 0 ? null : e.getElementByKey(t);
  if (s && s !== i && (s.removeAttribute("role"), s.removeAttribute("aria-selected")), !!n) {
    if (!i || r === void 0) {
      t !== void 0 && n.removeAttribute("aria-activedescendant");
      return;
    }
    return i.id || (i.id = `${_M}${e.getKey()}-${r}`), i.setAttribute("role", "option"), i.setAttribute("aria-selected", "true"), n.setAttribute("aria-activedescendant", i.id), r;
  }
}
function wc(e) {
  if (!e)
    return;
  const t = e.ownerDocument.defaultView?.getSelection();
  !t || t.rangeCount === 0 || t.anchorNode && e.contains(t.anchorNode) && t.removeAllRanges();
}
function vM(e, t, r) {
  if (typeof e.caretRangeFromPoint == "function")
    return e.caretRangeFromPoint(t, r) ?? void 0;
  if (typeof e.caretPositionFromPoint != "function")
    return;
  const n = e.caretPositionFromPoint(t, r);
  if (!n)
    return;
  const i = e.createRange();
  return i.setStart(n.offsetNode, n.offset), i.collapse(!0), i;
}
function EM() {
  const [e] = me();
  return MM(e), null;
}
function MM(e) {
  H(() => {
    if (!e.hasNodes([dt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(dt, (t) => AM(t, e));
  }, [e]);
}
function AM(e, t) {
  cl(t, e.getKey()) && um(e.getFirstChild()), !(!he(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = le(e.getKey());
    return he(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function ly({ onStateChange: e }) {
  const [t] = me(), [r, n] = Te(t), i = re(!1), s = re(!1), o = re(void 0), a = re(void 0), c = Ee(() => {
    const l = P(), u = r.isEditable() ? Pn(l) : void 0;
    if (u && r.getElementByKey(u.getKey()) !== null) {
      o.current = u.getMarker(), a.current = u.getMarker(), e?.({
        canUndo: i.current,
        canRedo: s.current,
        blockMarker: o.current,
        contextMarker: a.current
      });
      return;
    }
    let d;
    if (A(l)) {
      const f = l.anchor.getNode(), p = l.focus.getNode();
      let h = f.getKey() === "root" ? f : Pe(f, (T) => {
        const k = T.getParent();
        return k !== null && jk(k);
      });
      h === null && (h = f.getTopLevelElementOrThrow()), Ws(h) && (h = Pe(f, he) ?? h);
      const g = h.getKey(), m = r.getElementByKey(g), b = qT(f, p);
      if (b && NS(b) && (d = b.getMarker()), m !== null && (he(h) || we(h) || ao(h))) {
        o.current = h.getMarker(), a.current = d, e?.({
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
  return H(() => t.registerCommand(Vt, (l, u) => (c(), n(u), !1), ae), [t, c]), H(() => $e(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Vk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ae), r.registerCommand(Wk, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), ae)), [c, r, e]), null;
}
function dp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PM(e) {
  if (Array.isArray(e)) return e;
}
function wM(e, t) {
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
function NM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OM(e, t) {
  return PM(e) || wM(e, t) || RM(e, t) || NM();
}
function RM(e, t) {
  if (e) {
    if (typeof e == "string") return dp(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? dp(e, t) : void 0;
  }
}
const uy = Object.entries, fp = Object.setPrototypeOf, $M = Object.isFrozen, qM = Object.getPrototypeOf, IM = Object.getOwnPropertyDescriptor;
let mt = Object.freeze, bt = Object.seal, Ki = Object.create, dy = typeof Reflect < "u" && Reflect, Tl = dy.apply, Cl = dy.construct;
mt || (mt = function(t) {
  return t;
});
bt || (bt = function(t) {
  return t;
});
Tl || (Tl = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Cl || (Cl = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const qi = ot(Array.prototype.forEach), LM = ot(Array.prototype.lastIndexOf), pp = ot(Array.prototype.pop), Ii = ot(Array.prototype.push), DM = ot(Array.prototype.splice), _n = Array.isArray, Es = ot(String.prototype.toLowerCase), Nc = ot(String.prototype.toString), hp = ot(String.prototype.match), Ts = ot(String.prototype.replace), gp = ot(String.prototype.indexOf), UM = ot(String.prototype.trim), KM = ot(Number.prototype.toString), FM = ot(Boolean.prototype.toString), mp = typeof BigInt > "u" ? null : ot(BigInt.prototype.toString), yp = typeof Symbol > "u" ? null : ot(Symbol.prototype.toString), lt = ot(Object.prototype.hasOwnProperty), Cs = ot(Object.prototype.toString), ct = ot(RegExp.prototype.test), Hn = zM(TypeError);
function ot(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Tl(e, t, n);
  };
}
function zM(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Cl(e, r);
  };
}
function Se(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Es;
  if (fp && fp(e, null), !_n(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && ($M(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function BM(e) {
  for (let t = 0; t < e.length; t++)
    lt(e, t) || (e[t] = null);
  return e;
}
function xt(e) {
  const t = Ki(null);
  for (const n of uy(e)) {
    var r = OM(n, 2);
    const i = r[0], s = r[1];
    lt(e, i) && (_n(s) ? t[i] = BM(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = xt(s) : t[i] = s);
  }
  return t;
}
function jM(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return KM(e);
    case "boolean":
      return FM(e);
    case "bigint":
      return mp ? mp(e) : "0";
    case "symbol":
      return yp ? yp(e) : "Symbol()";
    case "undefined":
      return Cs(e);
    case "function":
    case "object": {
      if (e === null)
        return Cs(e);
      const t = e, r = dr(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Cs(n);
      }
      return Cs(e);
    }
    default:
      return Cs(e);
  }
}
function dr(e, t) {
  for (; e !== null; ) {
    const n = IM(e, t);
    if (n) {
      if (n.get)
        return ot(n.get);
      if (typeof n.value == "function")
        return ot(n.value);
    }
    e = qM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function VM(e) {
  try {
    return ct(e, ""), !0;
  } catch {
    return !1;
  }
}
const bp = mt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Oc = mt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Rc = mt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), WM = mt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), $c = mt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), HM = mt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), kp = mt(["#text"]), xp = mt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), qc = mt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Tp = mt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Po = mt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), GM = bt(/{{[\w\W]*|^[\w\W]*}}/g), JM = bt(/<%[\w\W]*|^[\w\W]*%>/g), YM = bt(/\${[\w\W]*/g), XM = bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), QM = bt(/^aria-[\-\w]+$/), Cp = bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ZM = bt(/^(?:\w+script|data):/i), eA = bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), tA = bt(/^html$/i), rA = bt(/^[a-z][.\w]*(-[.\w]+)+$/i), Sp = bt(/<[/\w!]/g), _p = bt(/<[/\w]/g), nA = bt(/<\/no(script|embed|frames)/i), iA = bt(/\/>/i), Bt = {
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
}, sA = function() {
  return typeof window > "u" ? null : window;
}, oA = function(t, r) {
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
}, vp = function() {
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
}, xn = function(t, r, n, i) {
  return lt(t, r) && _n(t[r]) ? Se(i.base ? xt(i.base) : {}, t[r], i.transform) : n;
};
function fy() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sA();
  const t = (J) => fy(J);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Bt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = dr(f, "cloneNode"), h = dr(f, "remove"), g = dr(f, "nextSibling"), m = dr(f, "childNodes"), b = dr(f, "parentNode"), T = dr(f, "shadowRoot"), k = dr(f, "attributes"), E = o && o.prototype ? dr(o.prototype, "nodeType") : null, S = o && o.prototype ? dr(o.prototype, "nodeName") : null, N = o && o.prototype ? dr(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const J = r.createElement("template");
    J.content && J.content.ownerDocument && (r = J.content.ownerDocument);
  }
  let q, K = "", V, ue = !1, te = 0;
  const ye = function() {
    if (te > 0)
      throw Hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, se = function(y) {
    ye(), te++;
    try {
      return q.createHTML(y);
    } finally {
      te--;
    }
  }, I = function(y) {
    ye(), te++;
    try {
      return q.createScriptURL(y);
    } finally {
      te--;
    }
  }, Y = function() {
    return ue || (V = oA(d, i), ue = !0), V;
  }, G = r, z = G.implementation, O = G.createNodeIterator, F = G.createDocumentFragment, ee = G.getElementsByTagName, X = n.importNode;
  let w = vp();
  t.isSupported = typeof uy == "function" && typeof b == "function" && z && z.createHTMLDocument !== void 0;
  const Z = GM, pe = JM, xe = YM, Ke = XM, ft = QM, cr = ZM, ce = eA, vt = rA;
  let bo = Cp, Ie = null;
  const Gr = Se({}, [...bp, ...Oc, ...Rc, ...$c, ...kp]);
  let fe = null;
  const kt = Se({}, [...xp, ...qc, ...Tp, ...Po]);
  let ve = Object.seal(Ki(null, {
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
  })), hn = null, gn = null;
  const Mr = Object.seal(Ki(null, {
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
  let xi = !0, Ti = !0, mn = !1, Un = !0, Ar = !1, wt = !0, lr = !1, Ci = !1, Kn = null, Si = null, _i = !1, R = !1, D = !1, Q = !1, ne = !0, Me = !1;
  const Fe = "user-content-";
  let Ve = !0, Ze = !1, pt = {}, zt = null;
  const vi = Se({}, [
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
  let fs = null;
  const ur = Se({}, ["audio", "video", "img", "source", "image", "track"]);
  let ps = null;
  const ko = Se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Jr = "http://www.w3.org/1998/Math/MathML", xo = "http://www.w3.org/2000/svg", Pr = "http://www.w3.org/1999/xhtml";
  let Ei = Pr, Za = !1, ec = null;
  const ck = Se({}, [Jr, xo, Pr], Nc), Kd = mt(["mi", "mo", "mn", "ms", "mtext"]);
  let tc = Se({}, Kd);
  const Fd = mt(["annotation-xml"]);
  let rc = Se({}, Fd);
  const lk = Se({}, ["title", "style", "font", "a", "script"]);
  let hs = null;
  const uk = ["application/xhtml+xml", "text/html"], dk = "text/html";
  let Je = null, Mi = null;
  const fk = r.createElement("form"), zd = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, nc = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Mi && Mi === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = xt(y), hs = // eslint-disable-next-line unicorn/prefer-includes
    uk.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? dk : y.PARSER_MEDIA_TYPE, Je = hs === "application/xhtml+xml" ? Nc : Es, Ie = xn(y, "ALLOWED_TAGS", Gr, {
      transform: Je
    }), fe = xn(y, "ALLOWED_ATTR", kt, {
      transform: Je
    }), ec = xn(y, "ALLOWED_NAMESPACES", ck, {
      transform: Nc
    }), ps = xn(y, "ADD_URI_SAFE_ATTR", ko, {
      transform: Je,
      base: ko
    }), fs = xn(y, "ADD_DATA_URI_TAGS", ur, {
      transform: Je,
      base: ur
    }), zt = xn(y, "FORBID_CONTENTS", vi, {
      transform: Je
    }), hn = xn(y, "FORBID_TAGS", xt({}), {
      transform: Je
    }), gn = xn(y, "FORBID_ATTR", xt({}), {
      transform: Je
    }), pt = lt(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? xt(y.USE_PROFILES) : y.USE_PROFILES : !1, xi = y.ALLOW_ARIA_ATTR !== !1, Ti = y.ALLOW_DATA_ATTR !== !1, mn = y.ALLOW_UNKNOWN_PROTOCOLS || !1, Un = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ar = y.SAFE_FOR_TEMPLATES || !1, wt = y.SAFE_FOR_XML !== !1, lr = y.WHOLE_DOCUMENT || !1, R = y.RETURN_DOM || !1, D = y.RETURN_DOM_FRAGMENT || !1, Q = y.RETURN_TRUSTED_TYPE || !1, _i = y.FORCE_BODY || !1, ne = y.SANITIZE_DOM !== !1, Me = y.SANITIZE_NAMED_PROPS || !1, Ve = y.KEEP_CONTENT !== !1, Ze = y.IN_PLACE || !1, bo = VM(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : Cp, Ei = typeof y.NAMESPACE == "string" ? y.NAMESPACE : Pr, tc = lt(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? xt(y.MATHML_TEXT_INTEGRATION_POINTS) : Se({}, Kd), rc = lt(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? xt(y.HTML_INTEGRATION_POINTS) : Se({}, Fd);
    const _ = lt(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? xt(y.CUSTOM_ELEMENT_HANDLING) : Ki(null);
    if (ve = Ki(null), lt(_, "tagNameCheck") && zd(_.tagNameCheck) && (ve.tagNameCheck = _.tagNameCheck), lt(_, "attributeNameCheck") && zd(_.attributeNameCheck) && (ve.attributeNameCheck = _.attributeNameCheck), lt(_, "allowCustomizedBuiltInElements") && typeof _.allowCustomizedBuiltInElements == "boolean" && (ve.allowCustomizedBuiltInElements = _.allowCustomizedBuiltInElements), bt(ve), Ar && (Ti = !1), D && (R = !0), pt && (Ie = Se({}, kp), fe = Ki(null), pt.html === !0 && (Se(Ie, bp), Se(fe, xp)), pt.svg === !0 && (Se(Ie, Oc), Se(fe, qc), Se(fe, Po)), pt.svgFilters === !0 && (Se(Ie, Rc), Se(fe, qc), Se(fe, Po)), pt.mathMl === !0 && (Se(Ie, $c), Se(fe, Tp), Se(fe, Po))), Mr.tagCheck = null, Mr.attributeCheck = null, lt(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? Mr.tagCheck = y.ADD_TAGS : _n(y.ADD_TAGS) && (Ie === Gr && (Ie = xt(Ie)), Se(Ie, y.ADD_TAGS, Je))), lt(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? Mr.attributeCheck = y.ADD_ATTR : _n(y.ADD_ATTR) && (fe === kt && (fe = xt(fe)), Se(fe, y.ADD_ATTR, Je))), lt(y, "ADD_URI_SAFE_ATTR") && _n(y.ADD_URI_SAFE_ATTR) && Se(ps, y.ADD_URI_SAFE_ATTR, Je), lt(y, "FORBID_CONTENTS") && _n(y.FORBID_CONTENTS) && (zt === vi && (zt = xt(zt)), Se(zt, y.FORBID_CONTENTS, Je)), lt(y, "ADD_FORBID_CONTENTS") && _n(y.ADD_FORBID_CONTENTS) && (zt === vi && (zt = xt(zt)), Se(zt, y.ADD_FORBID_CONTENTS, Je)), Ve && (Ie["#text"] = !0), lr && Se(Ie, ["html", "head", "body"]), Ie.table && (Se(Ie, ["tbody"]), delete hn.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const B = q;
      q = y.TRUSTED_TYPES_POLICY;
      try {
        K = se("");
      } catch (ie) {
        throw q = B, ie;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (q = void 0, K = "") : (q === void 0 && (q = Y()), q && typeof K == "string" && (K = se("")));
    mt && mt(y), Mi = y;
  }, Bd = Se({}, [...Oc, ...Rc, ...WM]), jd = Se({}, [...$c, ...HM]), pk = function(y, _, B) {
    return _.namespaceURI === Pr ? y === "svg" : _.namespaceURI === Jr ? y === "svg" && (B === "annotation-xml" || tc[B]) : !!Bd[y];
  }, hk = function(y, _, B) {
    return _.namespaceURI === Pr ? y === "math" : _.namespaceURI === xo ? y === "math" && rc[B] : !!jd[y];
  }, gk = function(y, _, B) {
    return _.namespaceURI === xo && !rc[B] || _.namespaceURI === Jr && !tc[B] ? !1 : !jd[y] && (lk[y] || !Bd[y]);
  }, mk = function(y) {
    let _ = b(y);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: Ei,
      tagName: "template"
    });
    const B = Es(y.tagName), ie = Es(_.tagName);
    return ec[y.namespaceURI] ? y.namespaceURI === xo ? pk(B, _, ie) : y.namespaceURI === Jr ? hk(B, _, ie) : y.namespaceURI === Pr ? gk(B, _, ie) : !!(hs === "application/xhtml+xml" && ec[y.namespaceURI]) : !1;
  }, yn = function(y) {
    Ii(t.removed, {
      element: y
    });
    try {
      b(y).removeChild(y);
    } catch {
      if (h(y), !b(y))
        throw Hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, To = function(y) {
    gs(y);
    const _ = m(y);
    if (_) {
      const ie = [];
      qi(_, (oe) => {
        Ii(ie, oe);
      }), qi(ie, (oe) => {
        try {
          h(oe);
        } catch {
        }
      });
    }
    const B = k(y);
    if (B)
      for (let ie = B.length - 1; ie >= 0; --ie) {
        const oe = B[ie], be = oe && oe.name;
        if (typeof be == "string")
          try {
            y.removeAttribute(be);
          } catch {
          }
      }
  }, Fn = function(y, _) {
    try {
      Ii(t.removed, {
        attribute: _.getAttributeNode(y),
        from: _
      });
    } catch {
      Ii(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(y), y === "is")
      if (R || D)
        try {
          yn(_);
        } catch {
        }
      else
        try {
          _.setAttribute(y, "");
        } catch {
        }
  }, yk = function(y) {
    const _ = k(y);
    if (_)
      for (let B = _.length - 1; B >= 0; --B) {
        const ie = _[B], oe = ie && ie.name;
        if (!(typeof oe != "string" || fe[Je(oe)]))
          try {
            y.removeAttribute(oe);
          } catch {
          }
      }
  }, gs = function(y) {
    const _ = [y];
    for (; _.length > 0; ) {
      const B = _.pop();
      (E ? E(B) : B.nodeType) === Bt.element && yk(B);
      const oe = m(B);
      if (oe)
        for (let be = oe.length - 1; be >= 0; --be)
          _.push(oe[be]);
    }
  }, bk = function(y) {
    if (!wt)
      return;
    const _ = [y];
    for (; _.length > 0; ) {
      const B = _.pop(), ie = E ? E(B) : B.nodeType;
      if (ie === Bt.processingInstruction || ie === Bt.comment && ct(_p, B.data)) {
        try {
          h(B);
        } catch {
        }
        continue;
      }
      if (ie === Bt.element) {
        const be = B, Le = Je(S ? S(B) : B.nodeName);
        try {
          be.hasAttribute && be.hasAttribute("patchsrc") && be.removeAttribute("patchsrc"), be.hasAttribute && be.hasAttribute("for") && Le !== "label" && Le !== "output" && be.removeAttribute("for");
        } catch {
        }
      }
      const oe = m(B);
      if (oe)
        for (let be = oe.length - 1; be >= 0; --be)
          _.push(oe[be]);
    }
  }, Vd = function(y) {
    let _ = null, B = null;
    if (_i)
      y = "<remove></remove>" + y;
    else {
      const be = hp(y, /^[\r\n\t ]+/);
      B = be && be[0];
    }
    hs === "application/xhtml+xml" && Ei === Pr && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const ie = q ? se(y) : y;
    if (Ei === Pr)
      try {
        _ = new u().parseFromString(ie, hs);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = z.createDocument(Ei, "template", null);
      try {
        _.documentElement.innerHTML = Za ? K : ie;
      } catch {
      }
    }
    const oe = _.body || _.documentElement;
    return y && B && oe.insertBefore(r.createTextNode(B), oe.childNodes[0] || null), Ei === Pr ? ee.call(_, lr ? "html" : "body")[0] : lr ? _.documentElement : oe;
  }, Wd = function(y) {
    const _ = N ? N(y) : y.ownerDocument;
    return O.call(
      _ || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Co = function(y) {
    return y = Ts(y, Z, " "), y = Ts(y, pe, " "), y = Ts(y, xe, " "), y;
  }, ic = function(y) {
    var _;
    y.normalize();
    const B = N ? N(y) : y.ownerDocument, ie = O.call(
      B || y,
      y,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let oe = ie.nextNode();
    for (; oe; )
      oe.data = Co(oe.data), oe = ie.nextNode();
    const be = (_ = y.querySelectorAll) === null || _ === void 0 ? void 0 : _.call(y, "template");
    be && qi(be, (Le) => {
      Ai(Le.content) && ic(Le.content);
    });
  }, So = function(y) {
    const _ = S ? S(y) : null;
    return typeof _ != "string" || Je(_) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== k(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== E(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Ai = function(y) {
    if (!E || typeof y != "object" || y === null)
      return !1;
    try {
      return E(y) === Bt.documentFragment;
    } catch {
      return !1;
    }
  }, ms = function(y) {
    if (!E || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof E(y) == "number";
    } catch {
      return !1;
    }
  };
  function wr(J, y, _) {
    J.length !== 0 && qi(J, (B) => {
      B.call(t, y, _, Mi);
    });
  }
  const kk = function(y, _) {
    return !!(wt && y.hasChildNodes() && !ms(y.firstElementChild) && ct(Sp, y.textContent) && ct(Sp, y.innerHTML) || wt && y.namespaceURI === Pr && _ === "style" && ms(y.firstElementChild) || y.nodeType === Bt.processingInstruction || wt && y.nodeType === Bt.comment && ct(_p, y.data));
  }, xk = function(y, _, B) {
    if (!hn[_] && Yd(_) && (ve.tagNameCheck instanceof RegExp && ct(ve.tagNameCheck, _) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(_)))
      return !1;
    if (Ve && !zt[_]) {
      const ie = b(y), oe = m(y);
      if (oe && ie) {
        const be = oe.length;
        for (let Le = be - 1; Le >= 0; --Le) {
          const Ye = y === B ? p(oe[Le], !0) : oe[Le];
          ie.insertBefore(Ye, g(y));
        }
      }
    }
    return yn(y), !0;
  }, Hd = function(y, _, B, ie) {
    return y.length === 0 ? _ : _ === B || _ === ie ? xt(_) : _;
  }, Gd = function(y, _) {
    if (wr(w.beforeSanitizeElements, y, null), y !== _ && b(y) === null)
      return Ze && gs(y), !0;
    if (So(y))
      return yn(y), !0;
    const B = Je(S ? S(y) : y.nodeName);
    if (Ie = Hd(w.uponSanitizeElement, Ie, Gr, Kn), wr(w.uponSanitizeElement, y, {
      tagName: B,
      allowedTags: Ie
    }), y !== _ && b(y) === null)
      return Ze && gs(y), !0;
    if (kk(y, B))
      return yn(y), !0;
    if (hn[B] || !(Mr.tagCheck instanceof Function && Mr.tagCheck(B)) && !Ie[B]) {
      const oe = xk(y, B, _);
      return oe === !1 && wr(w.afterSanitizeElements, y, null), oe;
    }
    if ((E ? E(y) : y.nodeType) === Bt.element && !mk(y) || (B === "noscript" || B === "noembed" || B === "noframes") && ct(nA, y.innerHTML))
      return yn(y), !0;
    if (Ar && y.nodeType === Bt.text) {
      const oe = Co(y.textContent);
      y.textContent !== oe && (Ii(t.removed, {
        element: y.cloneNode()
      }), y.textContent = oe);
    }
    return wr(w.afterSanitizeElements, y, null), !1;
  }, Jd = function(y, _, B) {
    if (gn[_] || wt && _ === "patchsrc" || wt && _ === "for" && y !== "label" && y !== "output" || ne && (_ === "id" || _ === "name") && (B in r || B in fk))
      return !1;
    const ie = fe[_] || Mr.attributeCheck instanceof Function && Mr.attributeCheck(_, y);
    if (!(Ti && ct(Ke, _))) {
      if (!(xi && ct(ft, _))) {
        if (ie) {
          if (!ps[_]) {
            if (!ct(bo, Ts(B, ce, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && y !== "script" && gp(B, "data:") === 0 && fs[y])) {
                if (!(mn && !ct(cr, Ts(B, ce, "")))) {
                  if (B)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Yd(y) && (ve.tagNameCheck instanceof RegExp && ct(ve.tagNameCheck, y) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(y)) && (ve.attributeNameCheck instanceof RegExp && ct(ve.attributeNameCheck, _) || ve.attributeNameCheck instanceof Function && ve.attributeNameCheck(_, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          _ === "is" && ve.allowCustomizedBuiltInElements && (ve.tagNameCheck instanceof RegExp && ct(ve.tagNameCheck, B) || ve.tagNameCheck instanceof Function && ve.tagNameCheck(B)))
        ) return !1;
      }
    }
    return !0;
  }, Tk = Se({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Yd = function(y) {
    return !Tk[Es(y)] && ct(vt, y);
  }, Ck = function(y, _, B, ie) {
    if (q && typeof d == "object" && typeof d.getAttributeType == "function" && !B)
      switch (d.getAttributeType(y, _)) {
        case "TrustedHTML":
          return se(ie);
        case "TrustedScriptURL":
          return I(ie);
      }
    return ie;
  }, Sk = function(y, _, B, ie) {
    try {
      B ? y.setAttributeNS(B, _, ie) : y.setAttribute(_, ie), So(y) ? yn(y) : pp(t.removed);
    } catch {
      Fn(_, y);
    }
  }, Xd = function(y) {
    wr(w.beforeSanitizeAttributes, y, null);
    const _ = y.attributes;
    if (!_ || So(y))
      return;
    fe = Hd(w.uponSanitizeAttribute, fe, kt, Si);
    const B = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: fe,
      forceKeepAttr: void 0
    };
    let ie = _.length;
    const oe = Je(y.nodeName);
    for (; ie--; ) {
      const be = _[ie], Le = be.name, Ye = be.namespaceURI, Nt = be.value, Ot = Je(Le), oc = Nt;
      let Et = Le === "value" ? oc : UM(oc);
      if (B.attrName = Ot, B.attrValue = Et, B.keepAttr = !0, B.forceKeepAttr = void 0, wr(w.uponSanitizeAttribute, y, B), Et = B.attrValue, Me && (Ot === "id" || Ot === "name") && gp(Et, Fe) !== 0 && (Fn(Le, y), Et = Fe + Et), wt && ct(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Et)) {
        Fn(Le, y);
        continue;
      }
      if (Ot === "attributename" && hp(Et, "href")) {
        Fn(Le, y);
        continue;
      }
      if (!B.forceKeepAttr) {
        if (!B.keepAttr) {
          Fn(Le, y);
          continue;
        }
        if (!Un && ct(iA, Et)) {
          Fn(Le, y);
          continue;
        }
        if (Ar && (Et = Co(Et)), !Jd(oe, Ot, Et)) {
          Fn(Le, y);
          continue;
        }
        Et = Ck(oe, Ot, Ye, Et), Et !== oc && Sk(y, Le, Ye, Et);
      }
    }
    wr(w.afterSanitizeAttributes, y, null);
  }, _o = function(y) {
    let _ = null;
    const B = Wd(y);
    for (wr(w.beforeSanitizeShadowDOM, y, null); _ = B.nextNode(); )
      if (wr(w.uponSanitizeShadowNode, _, null), Gd(_, y), Xd(_), Ai(_.content) && _o(_.content), (E ? E(_) : _.nodeType) === Bt.element) {
        const oe = T(_);
        Ai(oe) && (sc(oe), _o(oe));
      }
    wr(w.afterSanitizeShadowDOM, y, null);
  }, sc = function(y) {
    const _ = [{
      node: y,
      shadow: null
    }];
    for (; _.length > 0; ) {
      const B = _.pop();
      if (B.shadow) {
        _o(B.shadow);
        continue;
      }
      const ie = B.node, be = (E ? E(ie) : ie.nodeType) === Bt.element, Le = m(ie);
      if (Le)
        for (let Ye = Le.length - 1; Ye >= 0; --Ye)
          _.push({
            node: Le[Ye],
            shadow: null
          });
      if (be) {
        const Ye = S ? S(ie) : null;
        if (typeof Ye == "string" && Je(Ye) === "template") {
          const Nt = ie.content;
          Ai(Nt) && _.push({
            node: Nt,
            shadow: null
          });
        }
      }
      if (be) {
        const Ye = T(ie);
        Ai(Ye) && _.push({
          node: null,
          shadow: Ye
        }, {
          node: Ye,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(J) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, B = null, ie = null, oe = null;
    if (Za = !J, Za && (J = "<!-->"), typeof J != "string" && !ms(J) && (J = jM(J), typeof J != "string"))
      throw Hn("dirty is not a string, aborting");
    if (!t.isSupported)
      return J;
    Ci ? (Ie = Kn, fe = Si) : nc(y), (w.uponSanitizeElement.length > 0 || w.uponSanitizeAttribute.length > 0) && (Ie = xt(Ie)), w.uponSanitizeAttribute.length > 0 && (fe = xt(fe)), t.removed = [];
    const be = Ze && typeof J != "string" && ms(J);
    if (be) {
      bk(J);
      const Nt = S ? S(J) : J.nodeName;
      if (typeof Nt == "string") {
        const Ot = Je(Nt);
        if (!Ie[Ot] || hn[Ot])
          throw To(J), Hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (So(J))
        throw To(J), Hn("root node is clobbered and cannot be sanitized in-place");
      try {
        sc(J);
      } catch (Ot) {
        throw To(J), Ot;
      }
    } else if (ms(J))
      _ = Vd("<!---->"), B = _.ownerDocument.importNode(J, !0), B.nodeType === Bt.element && B.nodeName === "BODY" || B.nodeName === "HTML" ? _ = B : _.appendChild(B), sc(B);
    else {
      if (!R && !Ar && !lr && // eslint-disable-next-line unicorn/prefer-includes
      J.indexOf("<") === -1)
        return q && Q ? se(J) : J;
      if (_ = Vd(J), !_)
        return R ? null : Q ? K : "";
    }
    _ && _i && yn(_.firstChild);
    const Le = be ? J : _;
    try {
      const Nt = Wd(Le);
      for (; ie = Nt.nextNode(); )
        Gd(ie, Le), Xd(ie), Ai(ie.content) && _o(ie.content);
    } catch (Nt) {
      throw be && (To(J), qi(t.removed, (Ot) => {
        Ot.element && gs(Ot.element);
      })), Nt;
    }
    if (be)
      return qi(t.removed, (Nt) => {
        Nt.element && gs(Nt.element);
      }), Ar && ic(J), J;
    if (R) {
      if (Ar && ic(_), D)
        for (oe = F.call(_.ownerDocument); _.firstChild; )
          oe.appendChild(_.firstChild);
      else
        oe = _;
      return (fe.shadowroot || fe.shadowrootmode) && (oe = X.call(n, oe, !0)), oe;
    }
    let Ye = lr ? _.outerHTML : _.innerHTML;
    return lr && Ie["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && ct(tA, _.ownerDocument.doctype.name) && (Ye = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + Ye), Ar && (Ye = Co(Ye)), q && Q ? se(Ye) : Ye;
  }, t.setConfig = function() {
    let J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    nc(J), Ci = !0, Kn = Ie, Si = fe;
  }, t.clearConfig = function() {
    Mi = null, Ci = !1, Kn = null, Si = null, q = V, K = "";
  }, t.isValidAttribute = function(J, y, _) {
    Mi || nc({});
    const B = Je(J), ie = Je(y);
    return Jd(B, ie, _);
  }, t.addHook = function(J, y) {
    typeof y == "function" && lt(w, J) && Ii(w[J], y);
  }, t.removeHook = function(J, y) {
    if (lt(w, J)) {
      if (y !== void 0) {
        const _ = LM(w[J], y);
        return _ === -1 ? void 0 : DM(w[J], _, 1)[0];
      }
      return pp(w[J]);
    }
  }, t.removeHooks = function(J) {
    lt(w, J) && (w[J] = []);
  }, t.removeAllHooks = function() {
    w = vp();
  }, t;
}
var aA = fy();
function cA({ structureProtectionMode: e = "off" }) {
  const [t] = me(), r = re(void 0), [n, i] = Te(void 0), s = Ee((o) => {
    r.current = o, i(o);
  }, []);
  return H(() => {
    if (e === "off")
      return;
    const o = (h) => {
      const g = Qm(h);
      if (!g)
        return !1;
      const m = P();
      return e === "protected" ? m && Ys(m, g) ? (h.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, h);
    }, a = (h, g) => {
      const m = P(), b = r.current;
      if (b && m && op(m, b)) {
        if (s(void 0), g?.preventDefault(), h !== b.intent)
          return !0;
        const k = le(b.key) ?? void 0;
        if (b.kind === "verse") {
          if (k) {
            const E = k.getParent(), S = k.getPreviousSibling(), N = k.getNextSibling();
            k.remove(), S ? ty(S) : N && v(N) ? N.select(0, 0) : E?.selectStart();
          }
        } else b.kind === "selection" ? A(m) && (Da(m), ht(bl), t.dispatchCommand(rr, h === "deleteBackward")) : We(k) && xl(k);
        return !0;
      }
      if (!m)
        return !1;
      const T = zE(m, h);
      if (T) {
        if (T.kind === "verse") {
          const k = Xl();
          k.add(T.node.getKey()), Tt(k);
        } else {
          const k = Ur();
          k.anchor.set(T.node.getKey(), 0, "element"), k.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), Tt(k);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: h }), g?.preventDefault(), !0;
      }
      if (A(m) && !m.isCollapsed() && fd(m)) {
        const k = m.getNodes().filter(Ce).map((N) => N.getKey()), { anchor: E, focus: S } = m;
        return s({
          kind: "selection",
          intent: h,
          key: k[0],
          anchor: { key: E.key, offset: E.offset, type: E.type },
          focus: { key: S.key, offset: S.offset, type: S.type }
        }), g?.preventDefault(), !0;
      }
      return !1;
    }, c = (h) => {
      if (e !== "protected")
        return !1;
      const g = P();
      return !g || !Qn(g) ? !1 : (h instanceof Event && h.preventDefault(), !0);
    }, l = (h, g) => {
      if (!h)
        return !1;
      const m = aA.sanitize(h), b = new DOMParser().parseFromString(m, "text/html"), T = BE(px(t, b)), k = P();
      return A(k) && k.insertNodes(T), g.preventDefault(), !0;
    }, u = (h) => {
      if (e !== "protected")
        return !1;
      const g = P();
      return g && Qn(g) ? (h.preventDefault(), !0) : l(h.clipboardData?.getData("text/html"), h);
    }, d = (h) => {
      if (e !== "protected")
        return !1;
      const g = P();
      return g && Qn(g) ? (h.preventDefault(), !0) : l(h.dataTransfer?.getData("text/html"), h);
    }, f = (h) => {
      if (!t.isEditable())
        return !1;
      const g = h ? "deleteBackward" : "deleteForward";
      if (e === "protected") {
        const m = P();
        return !!m && Ys(m, g);
      }
      return Th(bl) ? !1 : a(g, void 0);
    }, p = () => {
      const h = r.current;
      h && t.getEditorState().read(() => {
        op(P(), h) || s(void 0);
      });
    };
    return $e(
      t.registerCommand(ar, o, Re),
      t.registerCommand(rr, f, Re),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(Ut, c, ae),
      t.registerCommand(It, u, Re),
      t.registerCommand(Uo, c, Re),
      t.registerCommand(Ta, d, Re),
      t.registerCommand(En, c, Re),
      t.registerUpdateListener(p)
    );
  }, [t, e, s]), H(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const vO = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function lA({ textDirection: e }) {
  const [t] = me();
  return uA(t, e), null;
}
function uA(e, t) {
  H(() => (Ep(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Ep(e, t);
  })), [e, t]);
}
function Ep(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function dA() {
  const [e] = me();
  return fA(e), null;
}
function fA(e) {
  H(() => {
    if (!e.hasNodes([Ae, Ft, Ue, tt, Mt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return $e(
      e.registerNodeTransform(tt, pA),
      e.registerNodeTransform(tt, (t) => hA(t, e)),
      e.registerNodeTransform(Mt, Mp),
      e.registerNodeTransform(Ft, Mp),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(Mt, (t) => {
        Vs(oi("va"), t), Vs(oi("vp"), t);
      })
    );
  }, [e]);
}
function pA(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || W(r) || j(n) || j(r) || Ne(n) || Ne(r) || _e(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  _e(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ge(e, ke) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Ge(n))
    return;
  if (Ce(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  Ce(r) && qu(e);
}
function hA(e, t) {
  const r = e.getParent();
  !_e(r) || !e.isAttached() || cl(t, e.getKey()) && !cl(t, r.getKey()) && r.insertAfter(e);
}
function Mp(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ne(t); )
    t = t.getLastChild();
  (j(t) || v(t) && Ne(t.getParent())) && e.insertBefore(Oe(" "));
}
function Ba(e) {
  if (!W(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !lo(i)))
      return;
    const n = t.getParent();
    if (!n)
      return;
    if (!L(n) || !n.isInline())
      return e;
    t = n;
  }
}
function gA(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function mA() {
  const e = P();
  if (!(!A(e) || !e.isCollapsed()))
    return Ba(gA(e.anchor));
}
function yA(e) {
  const t = P();
  let r;
  return A(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = py(e.target)), r ? Ba(Pe(r, W)) : void 0;
}
function py(e) {
  const t = Hk(e)?.anchorNode;
  if (Is(t))
    return Qr(t) ?? void 0;
}
function bA(e) {
  if (P())
    return;
  const t = py(e);
  return t ? Ba(Pe(t, W)) : void 0;
}
function Ap(e) {
  const t = Pe(e.getNode(), W);
  return t?.getIsCollapsed() === !0 ? t : void 0;
}
function kA() {
  const e = P();
  if (!A(e) || e.isCollapsed())
    return !1;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], n = Ap(t), i = Ap(r);
  if (n && i && n.is(i))
    return !1;
  let s = !1;
  const o = n?.getParent();
  n && o && (t.set(o.getKey(), n.getIndexWithinParent(), "element"), s = !0);
  const a = i?.getParent();
  return i && a && (r.set(a.getKey(), i.getIndexWithinParent() + 1, "element"), s = !0), s;
}
const xA = 500;
function TA(e) {
  return e.shiftKey || e.altKey ? !1 : e.key === "End" || e.key === "ArrowDown" && e.metaKey;
}
function CA() {
  const e = P();
  if (!A(e) || e.isCollapsed())
    return;
  const [t, r] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
  if (t.type !== "element" || r.type !== "element" || t.key !== r.key || r.offset !== t.offset + 1)
    return;
  const n = t.getNode();
  if (L(n))
    return Ba(n.getChildAtIndex(t.offset));
}
function SA() {
  const [e] = me(), t = ld(mA), r = re(void 0);
  return H(() => {
    const n = (i) => {
      ht($t), $r(e, $t), t(i);
    };
    return $e(e.registerCommand(
      ar,
      (i) => (r.current = TA(i) ? performance.now() : void 0, !1),
      // Only observes the press, and must see it whether or not a handler further down claims it.
      ae
    ), e.registerCommand(Vt, () => {
      if (r.current !== void 0 && performance.now() - r.current < xA) {
        const o = CA();
        if (o)
          return n(o), !1;
      }
      if (kA())
        return ht($t), $r(e, $t), !1;
      const s = bA(e.getRootElement());
      return s && n(s), !1;
    }, ti), e.registerCommand(Hi, (i) => {
      const s = yA(i);
      return s && n(s), !1;
    }, ti));
  }, [e, t]), null;
}
function _A({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = Q_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return M(X_, { trigger: e, items: i });
}
function vA({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = et(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? M(AA, { trigger: e, harness: i }) : M(_A, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const EA = [" ", "*"];
function MA(e, t) {
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
function AA({ trigger: e, harness: t }) {
  const [r] = me(), [n, i] = Te(void 0), s = re({ query: "", options: [] }), o = re(0), a = Ee((f, p, h) => {
    const g = p.find((m) => m.kind === "note" && m.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const m = P();
      A(m) && m.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  H(() => $e(r.registerCommand(ar, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), _h(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const m = P();
          A(m) && m.insertText(e);
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
  }, Re), r.registerCommand(vh, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, qr)), [r, e, t, n, a]);
  const c = Ee(() => i(void 0), []), l = Ee((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = Ee((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), d = et(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    MA(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && M(Tm, { isOpen: !0, children: ({ placement: f }) => M(
    _m,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? EA : void 0 },
    n.session
  ) });
}
function PA(e) {
  return e.replaceAll(U, "~").replace(/ {2,}/g, (r) => U.repeat(r.length));
}
function wA(e) {
  return e.replaceAll(U, " ").replaceAll("~", U);
}
function NA(e) {
  return e.replace(/ {2,}/g, " ");
}
let aa;
function OA(e) {
  e && (aa = e);
}
function Sl(e) {
  return mo(e);
}
function RA(e, t) {
  return e.isEmpty() ? xh : hy(e.toJSON(), t);
}
function hy(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && va(r[0]) && (!r[0].children || r[0].children.length === 0))
    return xh;
  if (r.some(fS)) {
    aa?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = gy(r), i = fr(n, t);
  return i ? { type: xr, version: kr, content: i } : void 0;
}
function $A(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), je({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function qA(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return je({
    type: Xt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function IA(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Tg(r, a, c), je({
    type: Xt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function LA(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Tg(t, o, a), je({
    type: Mt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function DA(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Sl(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(U) && (t[0] = a.slice(1));
  }
  return je({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function UA(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return je({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function KA(e, t) {
  const { unknownAttributes: r } = e;
  return je({ type: Jg, ...r, content: t });
}
function FA(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return je({ type: Qg, marker: r, ...n, content: t });
}
function zA(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return je({
    type: em,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function BA(e) {
  const t = e?.[0];
  if (!e || typeof t != "string" || !t.startsWith(" ")) return e;
  const r = t.replace(/^ +/, "");
  return r ? [r, ...e.slice(1)] : e.slice(1);
}
function jA(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return je({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function Fi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return je({
    type: t,
    marker: r === "" ? void 0 : r,
    ...wg({ sid: n, eid: i, ...s }, o)
  });
}
function VA(e) {
  return e.text;
}
function WA(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return je({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function HA(e) {
  const { marker: t } = e;
  return {
    type: Ho,
    marker: t === "" ? void 0 : t
  };
}
function Pp(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function GA(e, t, r, n, i) {
  const s = Tr.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Fi({
      type: s,
      marker: Bi,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Fi({
      type: s,
      marker: ni,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Fi({
      type: s,
      marker: ni
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Fi({
      type: s,
      marker: Bi
    });
    i.push(l);
  }
  (!n || !Qh(n)) && t.forEach((l) => {
    const u = Fi({
      type: s,
      marker: Bi,
      eid: l
    });
    i.push(u);
  });
}
function fr(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, h = a, g = a, m = a;
    switch (a.type) {
      case Ht.getType():
        i.push(
          $A(
            l,
            fr(l.children, t)
          )
        );
        break;
      case Wr.getType():
        i.push(qA(a));
        break;
      case Xt.getType():
        i.push(
          IA(
            u,
            fr(u.children, t)
          )
        );
        break;
      case Ft.getType():
      case Mt.getType():
        i.push(LA(a));
        break;
      case Ae.getType():
        i.push(
          DA(
            d,
            fr(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case dt.getType():
        i.push(
          UA(
            f,
            fr(f.children, t)
          )
        );
        break;
      case yi.getType():
        i.push(
          KA(
            a,
            fr(a.children, t)
          )
        );
        break;
      case as.getType():
        i.push(
          FA(
            a,
            fr(a.children, t)
          )
        );
        break;
      case cs.getType():
        i.push(
          zA(
            a,
            fr(a.children, t)
          )
        );
        break;
      case Ue.getType(): {
        const b = fr(
          p.children,
          t,
          p.caller
        );
        i.push(
          jA(
            p,
            Sl(t) && p.category === void 0 ? BA(b) : b
          )
        );
        break;
      }
      case cn.getType():
      case an.getType():
      case br.getType():
      case Eh.getType():
      case Hr.getType():
        break;
      case ut.getType():
        if (s = fr(
          g.children,
          t,
          r,
          n
        ), s) {
          const b = g.typedIDs[vn];
          if (b)
            GA(s, b, o, e[c + 1], i), o = b;
          else {
            const T = s.shift();
            T && (typeof T == "string" ? Pp(i, T) : i.push(T)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Tr.getType():
        i.push(Fi(a));
        break;
      case tt.getType():
        if (h.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !co(h.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        h.text !== U && !h.text.startsWith(au) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        h[oo]?.textType !== "attribute" && // An EMPTY caller still has its slot (the two separators Paratext 9 leaves where a
        // deleted caller was), so the test is for a note context, not for a caller value.
        (r === void 0 || h.text !== Jt(r))) {
          let b = VA(h);
          Sl(t) && (n && b.startsWith(U) && (b = b.slice(1)), b = NA(wA(b))), Pp(i, b);
        }
        break;
      case mi.getType():
        i.push(
          WA(
            m,
            fr(m.children, t)
          )
        );
        break;
      case dn.getType():
        i.push(HA(a));
        break;
      case us.getType():
        aa?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        aa?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function gy(e) {
  const t = e.findIndex((r) => va(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = gy(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Io = {
  initialize: OA,
  deserializeEditorState: RA
}, JA = /^sd\d*$/, YA = /* @__PURE__ */ new Set([
  ...Object.entries(Jc).filter(
    ([e, t]) => t.category === C.TitlesHeadings && t.type === x.Paragraph && !JA.test(e)
  ).map(([e]) => e),
  "qa"
]);
function XA(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (gu(i) || bg(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!$T(i)) {
      t && ca(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (yu(i) && YA.has(i.marker) && !ca(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    my(i.children, t).forEach((s) => {
      const o = QA(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = ZA(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function my(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (yy(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Qh(i)) {
      const s = my(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(wp(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [wp(i, c.nodes)] });
      });
      return;
    }
    t && ca(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function wp(e, t) {
  return { ...e, children: t };
}
function yy(e) {
  return cm(e) && e.number !== "";
}
function ca(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => yy(r) || ca(r)) : !1;
}
function QA(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function ZA(e) {
  return {
    type: Go,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: sm
  };
}
const Np = xy([]), eP = {
  type: Eh.getType(),
  version: 1
};
let md = [], de, ui, by, Dt;
function tP(e, t) {
  md = [], iP(e), sP(t);
}
function rP(e = 0) {
}
function nP(e, t) {
  de = t ?? La();
  let r;
  return e ? (e.type !== xr && Dt?.warn(`This USJ type '${e.type}' didn't match the expected type '${xr}'.`), e.version !== kr && Dt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${kr}'.`
  ), e.content.length > 0 ? (r = Ml(Yr(e.content)), Gs(de) && (r = XA(r, Dt))) : r = [Np]) : r = [Np], by?.(md), {
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
function iP(e) {
  e && (ui = e), e?.addMissingComments && (by = e.addMissingComments);
}
function sP(e) {
  e && (Dt = e);
}
function ky() {
  return mo(de);
}
function oP(e, t) {
  let { marker: r } = e;
  r !== Fs && Dt?.warn(`Unexpected book marker '${r}'!`), r = r ?? Fs;
  const { code: n } = e;
  (!n || !Ht.isValidBookCode(n)) && Dt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  de?.markerMode === "editable" || de?.markerMode === "visible" ? i.push(
    qt("marker", Be(r) + " " + n + U)
  ) : de?.hasGutterParaMarkers && i.push(qt("marker", Be(r) + U, !0)), i.push(...t);
  const s = Xe(e, pT);
  return je({
    type: Ht.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: ng
  });
}
function aP(e) {
  let { marker: t } = e;
  t !== jo && Dt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? jo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Xe(e, hT);
  let a;
  de?.markerMode === "visible" && (a = !0);
  const c = [
    Pt(sr(t, r) ?? "")
  ];
  return de?.markerMode === "editable" && _P(i, s, c), de?.markerMode === "editable" ? je({
    type: Xt.getType(),
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
    version: sg
  }) : je({
    type: Wr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: ug
  });
}
function cP(e) {
  let { marker: t } = e;
  t !== Vo && Dt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Vo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (av(de) ?? Ft).getType(), c = de?.markerMode === "editable" ? gg : am;
  let l, u;
  de?.markerMode === "editable" ? l = sr(t, r) : de?.markerMode === "visible" && (u = !0);
  const d = Xe(e, MT);
  return je({
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
function lP(e, t = [], r = !1) {
  let { marker: n } = e;
  Ae.isValidMarker(n, ui?.extraValidMarkers) || Dt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (de?.markerMode === "editable") {
    const [a] = t;
    Yi(a) ? a.text = U + a.text : a && t.unshift(Pt(U));
  }
  t.length === 0 && t.push(Pt(or)), _l(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Xe(e, yT);
  return s || xP(n, o, i), s || vl(e.marker ?? "", i, !1, r), je({
    type: Ae.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: lg
  });
}
function xy(e) {
  return {
    type: An.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: pg
  };
}
function uP(e, t = []) {
  let { marker: r } = e;
  dt.isValidMarker(r, ui?.extraValidMarkers) || Dt?.warn(`Unexpected para marker '${r}'!`), r = r ?? ir;
  const n = [];
  if (ki(de) && (de?.markerMode === "editable" ? n.push(
    At(r),
    Pt(U, Vr, "token")
  ) : (de?.markerMode === "visible" || de?.hasGutterParaMarkers) && n.push(
    qt(
      "marker",
      Be(r) + U,
      de?.hasGutterParaMarkers
    )
  )), n.push(...t), ky()) {
    const s = n.find(
      (o) => !Su(o) && !(Yi(o) && o.text === U)
    );
    Yi(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => U.repeat(o.length)));
  }
  const i = Xe(e, vT);
  return je({
    type: dt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: hg
  });
}
function yd() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function dP(e, t = []) {
  const r = Xe(e, RC);
  return je({
    ...yd(),
    type: yi.getType(),
    unknownAttributes: r,
    children: t,
    version: Yg
  });
}
function fP(e, t = []) {
  const r = Xe(e, IC), n = e.marker ?? il, i = [];
  return de?.markerMode === "editable" ? i.push(
    At(n),
    Pt(U, Vr, "token")
  ) : (de?.markerMode === "visible" || de?.hasGutterParaMarkers) && i.push(
    qt(
      "marker",
      Be(n) + U,
      de?.hasGutterParaMarkers
    )
  ), i.push(...t), je({
    ...yd(),
    type: as.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Zg
  });
}
function pP(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? sl, a = zg(o, i) ?? o;
  de?.markerMode === "editable" ? s.push(
    At(a),
    Pt(U, Vr, "token")
  ) : (de?.markerMode === "visible" || de?.hasGutterParaMarkers) && s.push(
    qt(
      "marker",
      Be(a) + U,
      de?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Xe(
    e,
    DC
  );
  return je({
    ...yd(),
    type: cs.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: tm
  });
}
function hP(e, t) {
  const r = KT(t);
  let n = () => {
  };
  return ui?.noteCallerOnClick && (n = ui.noteCallerOnClick), je({
    type: br.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: hm
  });
}
function gP(e, t) {
  let { marker: r } = e;
  Ue.isValidMarker(r, ui?.extraValidMarkers) || Dt?.warn(`Unexpected note marker '${r}'!`), r = r ?? uu;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Bu(de?.noteMode), a = Xe(e, Ox), c = de?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  de?.markerMode === "editable" ? (l = At(r, "opening", !1, c), s || (u = At(r, "closing"))) : de?.markerMode === "visible" && (l = qt("marker", Be(r) + " "), s || (u = qt("marker", at(r))));
  const d = [];
  let f;
  if (l && d.push(l), de?.markerMode === "editable" && !o)
    f = Pt(Jt(i), void 0, c), d.push(f), SP(n, d), d.push(...t);
  else {
    const p = Pt(U, Vr, "token");
    f = hP(i, t), d.push(f, p, ...t.flatMap(mP(p)));
  }
  return u && d.push(u), je({
    type: Ue.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: Bh
  });
}
function mP(e) {
  return (t) => Yh(t) ? [t] : [t, e];
}
function yP(e) {
  let { marker: t } = e;
  (!t || !Tr.isValidMarker(t, ui?.extraValidMarkers)) && Dt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Xe(e, lu), s = Ng(e);
  return je({
    type: Tr.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Kh
  });
}
function Op(e, t = []) {
  return {
    type: ut.getType(),
    typedIDs: { [vn]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function bP(e, t) {
  const { marker: r } = e, n = e.type, i = Xe(e, cT), s = [];
  if (de?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Bg(
      n,
      r,
      i
    );
    o && s.push(qt("marker", o)), a && s.push(qt("attribute", a)), s.push(...t), c && s.push(qt("attribute", c)), l && s.push(qt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Yi(o) && (o.mode = "token");
  }), je({
    type: mi.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: eg
  });
}
function kP(e) {
  return {
    type: dn.getType(),
    marker: e,
    text: ws(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: de?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: Hg
  };
}
function At(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Hr.getType(),
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
function Pt(e, t = void 0, r = "normal") {
  const n = {
    type: tt.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[oo] = { textType: t }), n;
}
function qt(e, t, r = !1) {
  const n = {
    type: an.getType(),
    text: t,
    textType: e,
    version: Gh
  };
  return r && (n[oo] = { [pu.key]: !0 }), n;
}
function Xs(e, t) {
  return {
    type: cn.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: tg
  };
}
function _l(e, t, r = !1) {
  de?.markerMode === "editable" ? t.push(At(e, "opening", r)) : de?.markerMode === "visible" && t.push(qt("marker", Be(e, r)));
}
function vl(e, t, r = !1, n = !1) {
  de?.markerMode === "editable" ? r ? t.push(At("", "selfClosing")) : t.push(At(e, "closing", n)) : de?.markerMode === "visible" && t.push(
    qt(
      "marker",
      r ? at("") : at(e, n)
    )
  );
}
function xP(e, t, r) {
  if (de?.markerMode !== "editable" || !t) return;
  const n = Rr(t, Sa(e));
  n && r.push(Pt(n, "attribute"));
}
function Rp(e, t) {
  if (e.type !== "ms" || de?.markerMode !== "editable" && de?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Xe(e, lu), o = Og(
    n,
    i,
    s,
    Ng(e)
  ), a = Rr(o, _a(r ?? ""));
  if (!a) return;
  const c = U + a;
  de?.markerMode === "editable" ? t.push(Pt(c, "attribute")) : t.push(qt("attribute", c));
}
function TP(e, t) {
  const r = e.marker ?? "";
  if (de?.markerMode === "editable") {
    const n = [];
    _l(r, n), Rp(e, n), vl(r, n, !0), t.push(Xs("milestone", n));
  } else
    _l(r, t), Rp(e, t), vl(r, t, !0);
}
function $p(e, t, r) {
  t !== void 0 && r.push(
    Xs(e, [
      At(e, "opening"),
      Pt(U + t, "attribute"),
      At(e, "closing")
    ])
  );
}
function CP(e, t) {
  de?.markerMode === "editable" && ($p("va", e.altnumber, t), $p("vp", e.pubnumber, t));
}
function SP(e, t) {
  e !== void 0 && t.push(
    Xs("cat", [
      At("cat", "opening"),
      Pt(U + e, "attribute"),
      At("cat", "closing")
    ])
  );
}
function _P(e, t, r) {
  e !== void 0 && r.push(
    Xs("ca", [
      At("ca", "opening"),
      Pt(U + e, "attribute"),
      At("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Xs("cp", [
      At("cp", "opening"),
      Pt(U + t, "attribute")
    ])
  );
}
function qp(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function vP(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Ip(e, t) {
  t.marker === ni && t.sid !== void 0 && e.push(t.sid), t.marker === Bi && t.eid !== void 0 && vP(e, t.eid);
}
function El(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Op(o, [...n])] : o, c = e[i];
  Ip(n, c);
  const l = El(
    e.slice(i + 1, s),
    qp(t, i + 1),
    c.marker === ni,
    n
  ), u = Op(l, [...n]), d = e[s];
  Ip(n, d);
  const f = El(
    e.slice(s + 1),
    qp(t, s + 1),
    d.marker === ni,
    n
  );
  return [...a, u, ...f];
}
function Yr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(Pt(ky() ? PA(i) : i));
    else if (!i.type)
      Dt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ht.getType():
          n.push(oP(i, Yr(i.content)));
          break;
        case Xt.getType():
          n.push(aP(i));
          break;
        case Mt.getType():
          de?.hasSpacing || n.push(eP), n.push(cP(i)), CP(i, n);
          break;
        case Ae.getType():
          n.push(
            lP(i, Yr(i.content, !0), t)
          );
          break;
        case dt.getType():
          n.push(uP(i, Yr(i.content)));
          break;
        case Ue.getType():
          n.push(gP(i, Yr(i.content)));
          break;
        case Tr.getType():
          Fh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && md?.push(i.sid)), n.push(yP(i)), TP(i, n);
          break;
        case dn.getType():
          n.push(kP(i.marker ?? ""));
          break;
        case Jg:
          n.push(dP(i, Yr(i.content)));
          break;
        case Qg:
          n.push(fP(i, Yr(i.content)));
          break;
        case em:
          n.push(pP(i, Yr(i.content)));
          break;
        default:
          Dt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(bP(i, Yr(i.content)));
      }
  }), El(n, r);
}
function Ml(e) {
  const t = e.findIndex(
    (n) => gu(n) || bg(n) || yu(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    qC(n)
  );
  if (t >= 0) {
    const n = Ml(e.slice(0, t)), i = e[t], s = Ml(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || cm(n)))
    return [xy(e)];
  return e;
}
const Cr = {
  initialize: tP,
  reset: rP,
  serializeEditorState: nP
};
function Ty(e) {
  if (e && !$(e)) {
    if (v(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = Ty(t);
        if (r) return r;
      }
  }
}
function EP() {
  const e = P();
  if (!A(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((v(t) && !$(t) ? ci(t) : void 0) && v(t)) {
      const i = Oe(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Xi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Ty(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(U) ? U : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Cy(e)) {
    if (!ci(t)) continue;
    Xi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(U) && r.setTextContent(n.slice(U.length));
  }
  return !0;
}
function Cy(e) {
  const [t, r] = Ql(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || $(a) || ge(a, ke) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Sy(e) {
  let t = e;
  for (; j(t) || Ne(t); ) t = t.getParent();
  return t;
}
function _y(e) {
  const t = Sy(e.getParent());
  return We(t) ? t : void 0;
}
function MP() {
  const e = P();
  if (!A(e)) return !1;
  const t = e.focus.getNode();
  return ci(t) ? !!_y(t) : !1;
}
function vy(e) {
  const t = Oe(""), r = e.getNode(), n = e.offset;
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
    if (j(o)) Xi(t, { renderGlyphs: !0 });
    else if (!Ne(o) || !AP(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function AP(e, t) {
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
function Ey(e) {
  const t = e.anchor.getNode();
  if ($(t) && !Ou(t, e.anchor.offset)) {
    const r = t.getParent();
    if (j(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = P();
      return A(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function My() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = Ey(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!v(r) || $(r) || !ci(r)) return !1;
  const n = _y(r);
  if (!n) return !1;
  const { moving: i } = vy(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; Ne(o); ) o = o.getFirstChild() ?? void 0;
  return j(o) ? Na(o) : s.select(0, 0), !0;
}
const Ay = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${kg(Qe().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = P(), t = Eg(e), r = Lu(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = VT(0, o);
        const a = vS(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || WT(c) && Cu(parseInt(n, 10), c);
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
function Al(e, t) {
  return Ue.isValidMarker(e, t) || !!Ay[e] || dt.isValidMarker(e, t) || Ae.isValidMarker(e, t);
}
function PP(e, t) {
  return Ae.isNoteContentMarker(e) ? !1 : Ae.isValidMarker(e, t);
}
function Py(e, t, r, n, i, s) {
  const o = mm(
    e,
    void 0,
    void 0,
    t,
    n ?? La(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function Pl(e, t, r, n, i, s, o) {
  if (Ue.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Py(
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
  const a = qP(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = P();
      A(u) && (Ru(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Nf(d, Cr, r), h = cc(p);
      if (A(u)) {
        const g = u.anchor.getNode(), m = g.getParent(), b = ci(g), T = u.anchor.key === u.focus.key;
        if (j(h) && b && T && !Ic(h, o))
          OP(
            u,
            h,
            g,
            r?.markerMode === "editable"
          );
        else if (j(h) && !T && !Ic(h, o) && RP(u))
          $P(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          IP(
            u,
            () => cc(p)
          );
        else if (L(h) && !h.isInline()) {
          const k = u.insertParagraph();
          if (k) {
            const E = k.getChildren();
            h.append(...E), k.replace(h), We(h) && jt(h) || h.selectStart();
          }
        } else if (j(h) && v(g) && !$(g) && j(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Ic(h, o)) {
          const k = g.getParent();
          if (j(k)) {
            const E = u.anchor.offset;
            if (E === 0) g.insertBefore(h);
            else if (E >= g.getTextContentSize()) g.insertAfter(h);
            else {
              const [N] = g.splitText(E);
              N.insertAfter(h);
            }
            h.getChildren().forEach((N) => {
              $(N) && N.setNested(!0);
            });
            const S = h.getChildren().find((N) => v(N) && !$(N));
            S && v(S) ? S.select(
              S.getTextContentSize(),
              S.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (v(g) && !$(g) && u.isCollapsed() && (W(m) || j(m) && W(m.getParent()))) {
          const k = j(m) ? m : void 0, E = k ? wP(g, u.anchor.offset) : [];
          let N = (k ?? g).insertAfter(h);
          if (_r(h)) {
            const q = {
              ...r || La(),
              markerMode: "hidden"
            }, K = Nf(
              d,
              Cr,
              q
            ), V = cc(K);
            N = N.insertAfter(V);
          }
          if (E.length > 0 && k) {
            const q = la(k).append(...E);
            N.insertAfter(q), k.isEmpty() && k.remove();
          } else v(N.getNextSibling()) || N.insertAfter(Oe(U));
          L(N) && N.selectEnd();
        } else if (u.insertNodes([h]), WP(h), f) {
          const k = Xl();
          k.add(h.getKey()), Tt(k);
        } else if (j(h)) {
          const k = h.getChildren().find((E) => v(E) && !$(E));
          k && v(k) ? k.select(
            k.getTextContentSize(),
            k.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const k = h.getNextSibling();
          k ? k.selectStart() : h.selectStart();
        }
      } else
        i?.warn(
          `Marker action "${e}" needs a range selection to act at; it inserted nothing.`
        );
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function wP(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Ic(e, t) {
  return ((t ?? Jo).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function NP(e, t) {
  t && e.getChildren().forEach((i) => {
    $(i) && i.setNested(!0);
  }), e.getChildren().some((i) => $(i) && i.getMarkerSyntax() === "closing") || e.append(St(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function OP(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && j(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !v(r)) {
    const o = e.anchor.offset;
    if (v(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else v(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = ns(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Xi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(U) && i.setTextContent(U + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !$(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !$(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function RP(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if ($(n) || j(n)) continue;
    if (!v(n) || n.getType() !== tt.getType() || ge(n, ke) === "attribute") return !1;
    const i = jC(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    ci(n) && (r = !0);
  }
  return r;
}
function $P(e, t, r) {
  const n = Cy(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!ci(a)) return;
    Xi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(U) && c.setTextContent(l.slice(U.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(U) || i.setTextContent(U + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !$(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function qP(e, t) {
  let r = Ay[e];
  return r || (dt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: dt.getType(), marker: e, content: [] }] })
  } : Ae.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: Ae.getType(), marker: e };
      return (Ae.isValidFootnoteMarker(e) || Ae.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function IP(e, t) {
  const r = e.getNodes(), [n, i] = ns(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = wy(
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
    s || (s = t(), c.insertBefore(s), l = !0, j(s) && s.getChildren().some((d) => $(d) && d.getMarkerSyntax() === "opening") && NP(s, j(s.getParent()))), DP(c, s, l);
  }), (v(s) || L(s)) && s.selectEnd();
}
function ns(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function bd(e) {
  return Ne(e) || W(e) || W(e.getParent());
}
function wy(e, t, r, n, i) {
  if (!bd(e)) {
    if (v(e))
      return LP(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function LP(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function DP(e, t, r) {
  if (v(t)) {
    const n = wl(e, t);
    t.setTextContent(n), e.remove();
  } else if (L(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => $(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !$(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    wl(e, t), r && j(t) && t.getChildren().some((s) => $(s)) && v(e) && !$(e) && !e.getTextContent().startsWith(U) && e.setTextContent(U + e.getTextContent());
  }
}
function wl(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    qu(n), v(n) || t.insertBefore(Oe(" "));
  }
  return r;
}
function Ny(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = di(u, t);
    if (!f) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (Lp(f, r), v(u) && u.isAttached()) {
      const h = u.getTextContentSize(), g = Math.max(p - h, 0), m = Math.max(0, Math.min(d - g, h)), b = P();
      A(b) && b.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ns(e);
  if (!xd(n, t, s, o)) return !1;
  const a = kd(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = di(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = qy(d, a);
    f && (Lp(f, r), l = !0);
  }), Iy(a, i), l;
}
function Lp(e, t) {
  e.getChildren().forEach((n) => {
    Ct(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === or) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    v(n) && i.startsWith(U) && n.setTextContent(i.slice(U.length));
  }), Wc(e);
}
function kd(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = wy(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    v(o) && n.push(o);
  }), n;
}
function di(e, t) {
  let r = e, n;
  for (; r && !We(r); ) {
    if (W(r)) return;
    !n && j(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Oy(e) {
  const t = Pe(
    e,
    (r) => W(r) || We(r)
  );
  return W(t);
}
function Ry(e) {
  return e.filter(
    (t) => !bd(t) && (v(t) || L(t) && t.isInline())
  );
}
function UP(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || bd(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function KP(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !$y(n, r)
  );
}
function xd(e, t, r, n, i) {
  const s = Ry(e), o = UP(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = di(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !KP(l, s, o);
  });
}
function $y(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Ct(r));
}
function qy(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (L(u) && t.some((d) => u.isParentOf(d))) {
      if (!$y(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Ct(n[s - 1]) && (s -= 1), o < n.length - 1 && Ct(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(la(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(la(e).append(...c)), e;
}
function la(e) {
  return Gk(e);
}
function Iy(e, t) {
  const r = P(), n = e[0], i = e[e.length - 1];
  if (!A(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function FP(e, t, r) {
  if (e.isCollapsed()) {
    const l = di(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (mf(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ns(e);
  if (!xd(n, r, i, s, t)) return !1;
  const o = kd(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = di(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = qy(u, o);
    d && (mf(d, t), c = !0);
  }), c;
}
function zP(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = ns(e);
  if (!!!i?.some(
    (m) => xd(s, m, o, a)
  ) && !BP(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const b = P();
    A(b) && Ny(b, m, n) && (l = !0);
  });
  const u = P();
  if (!A(u)) return l;
  const d = u.isBackward(), [f, p] = ns(u), h = kd(
    u.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const g = h.filter(
    (m) => !Oy(m) && !di(m, t)
  );
  return g.length > 0 && (jP(g).forEach((m) => VP(m, t)), l = !0), Iy(h, d), l;
}
function BP(e, t) {
  return Ry(e).some(
    (r) => !Oy(r) && !di(r, t)
  );
}
function jP(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function VP(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => j(a) && a.getMarker() === t
  ), s = i ? la(i) : rn(t);
  e[0].insertBefore(s), s.append(...e), i === r || wl(e[0], s);
}
function WP(e) {
  Ce(e) && (qu(e.getPreviousSibling()), um(e.getNextSibling()));
}
const Ly = {
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
}, Dp = "psc-active-text", wo = "psc-empty-text";
function HP({ viewOptions: e }) {
  const [t] = me(), r = re(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return H(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Dp), r.current = o, o && t.getElementByKey(o)?.classList.add(Dp);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Hi,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${wo}`);
          if (!c) return !1;
          const l = Qr(c);
          if (!Ce(l)) return !1;
          const u = l.getParent();
          if (!L(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        gt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Lc(), f = GP(), p = [], h = [];
          return Qe().getChildren().forEach((g) => {
            if (!L(g)) return;
            const { emptyKeys: m, nonEmptyKeys: b } = YP(g);
            p.push(...m), h.push(...b);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(wo) : t.getElementByKey(d)?.classList.add(wo);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(wo));
      }),
      t.registerCommand(
        nu,
        () => (i(void 0), !1),
        gt
      ),
      t.registerCommand(
        su,
        () => {
          const o = t.getEditorState().read(Lc);
          return o !== r.current && i(o), !1;
        },
        gt
      )
    ];
    return i(t.getEditorState().read(Lc)), $e(...s);
  }, [t, n]), null;
}
function Lc() {
  return JP(P() ?? void 0)?.getKey();
}
function GP() {
  const e = P(), t = Pn(e);
  if (t)
    return t.getChildren().slice(0, Ua(t)).findLast(Ce)?.getKey();
  if (!A(e)) return;
  const r = e.anchor, n = r.getNode(), i = n.getTopLevelElement();
  if (!L(i)) return;
  let s;
  if (n.is(i))
    s = r.offset;
  else {
    let c = n;
    for (; c && !c.getParent()?.is(i); )
      c = c.getParent() ?? void 0;
    if (!c) return;
    s = c.getIndexWithinParent() + 1;
  }
  const o = i.getChildren();
  let a;
  for (let c = 0; c < s && c < o.length; c++)
    Ce(o[c]) && (a = o[c].getKey());
  return a;
}
function JP(e) {
  const t = Pn(e);
  if (t) return t.getTopLevelElement() ?? t;
  if (A(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function YP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!Ce(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (Ce(c)) break;
      if (!(Wt(c) || $(c)) && c.getTextContent().replaceAll(Ko, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function Nl(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function Dy(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !Sh(e, n, i);
}
function Uy(e, t) {
  return e.length <= t ? e : e.slice(0, Td(e, t));
}
function Td(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of ex(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const XP = 16;
function QP(e, { $isHidden: t, $measure: r } = {}) {
  const n = (T) => t ? Cd(T, t).length : T.getTextContent().length;
  r ??= n;
  const i = P();
  if (!A(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = ua(s), l = ua(o), u = i.getNodes(), d = new Map(u.map((T) => [T.getKey(), t1(T)])), f = u.length > 0 ? d.get(u[0].getKey()) : void 0, p = f && ZP(s, f) ? f : void 0, h = (T) => {
    const k = T > 0 ? e1(u, d, p, c, l, T, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), k ? i.focus.set(k.node.getKey(), k.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!k;
  };
  let g = Math.min(e, n(i));
  if (h(g) && r(i) <= e) return !0;
  let m = 0, b = 0;
  g -= 1;
  for (let T = 0; T < XP && m <= g; T++) {
    const k = Math.floor((m + g) / 2);
    h(k) && r(i) <= e ? (b = k, m = k + 1) : g = k - 1;
  }
  return h(b), !0;
}
function Ol(e) {
  return e.isToken() || go(e) || ze(e.getParent());
}
function ZP(e, t) {
  const r = L(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && mr(r.getKey(), 0, "text").isBefore(e);
}
function e1(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, u, d;
  const f = /* @__PURE__ */ new Map(), p = (g) => {
    const m = t.get(g.getKey());
    return m && r?.is(m) ? void 0 : m;
  }, h = (g) => {
    let m = d ? d.endBefore : g;
    for (; ; ) {
      const b = r1(m, e, n);
      if (!b || !m || b.node.is(m.node)) return b;
      const T = p(b.node);
      if (!T || T.is(p(m.node))) return b;
      m = f.get(T.getKey());
    }
  };
  for (let g = 0; g <= a; g++) {
    const m = e[g], b = p(m);
    if (d && !d.node.is(b) && (u && d.node.isParentOf(u.node) && (u = d.endBefore), d = void 0), b && !d && (d = { node: b, endBefore: u }, f.set(b.getKey(), u)), !o?.(m)) {
      if (L(m) && !m.isInline()) {
        if (!l) {
          if (c + 1 > s) return h(u);
          c += 1;
        }
        l = !m.isEmpty();
        continue;
      }
      if (l = !1, v(m)) {
        const T = g === 0 ? n : 0, k = g === a ? i : m.getTextContentSize(), E = k - T, S = Ol(m);
        if (S && c + E > s) return h(u);
        if (!S && c + E >= s) {
          const N = Td(m.getTextContent(), T + (s - c));
          return h({ node: m, offset: Math.max(T, N) });
        }
        c += E, u = { node: m, offset: k };
      } else if (Ln(m) || hi(m)) {
        const T = m.getTextContentSize();
        if (c + T > s) return h(u);
        c += T;
      }
    }
  }
  return h(u);
}
function t1(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (W(r) || rd(r)) && (t = r);
  return t;
}
function r1(e, t, r) {
  if (!e) return e;
  const n = Pe(e.node, (m) => L(m) && !m.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((m) => m.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let m = o; m <= a; m++)
    l.push(c.length), c += i[m].getTextContent();
  const u = l[s - o], d = u + e.offset, f = Td(c, d);
  if (f === d) return e;
  const p = (m) => t[0]?.is(m) ?? !1;
  if (Ol(e.node)) return { ...e, offset: p(e.node) ? r : 0 };
  if (f >= u) {
    const m = f - u;
    return m >= (p(e.node) ? r : 0) ? { ...e, offset: m } : void 0;
  }
  const h = s > o ? i[s - 1] : void 0;
  if (!h || !t.some((m) => m.is(h))) return;
  if (Ol(h))
    return { node: h, offset: p(h) ? r : 0 };
  const g = f - l[0];
  return g >= (p(h) ? r : 0) ? { node: h, offset: g } : void 0;
}
function Cd(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, u) => {
    if (!t(l)) {
      if (L(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, v(l)) {
        const d = l.getTextContent();
        o ? a += d : a += d.slice(
          u === 0 ? ua(i) : 0,
          u === n ? ua(s) : d.length
        );
      } else (Ln(l) || hi(l)) && (u !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function Rl(e) {
  const t = e.getParent();
  return !!t && Pe(t, (r) => W(r) && !!r.getIsCollapsed()) !== null;
}
function Ky(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    _t(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), L(i)) for (const { node: s } of gi(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function n1(e) {
  return e.getNodes().some(
    (t) => Ln(t) || W(t) || Ce(t) || rt(t) || rd(t)
  );
}
function ua(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const Er = String.raw`\w-`, Fy = "a-z0-9", i1 = `[a-z][${Fy}]*`, s1 = new RegExp(
  String.raw`^\\(\+?[${Er}]+)[ \u00A0]$`
), zy = new RegExp(String.raw`^\\(\+?[${Er}]+)$`), o1 = new RegExp(String.raw`^\\\+?[${Er}]*\*$`), a1 = new RegExp(
  String.raw`^\\(\+?[${Er}]+)(?:[ \u00A0]|$)`
), c1 = new RegExp(
  String.raw`^\\(\+?)([${Er}]+)`
), l1 = new RegExp(
  String.raw`\\\+?[${Er}]+(?:\\?\*|[ \u00A0])`
), u1 = new RegExp(
  String.raw`\\\+?[${Er}]*$`
), d1 = new RegExp(
  String.raw`^\\(${i1})( |$)`
), f1 = new RegExp(
  String.raw`\\[${Fy}+*]*$`,
  "i"
);
function By(e) {
  const t = e.getParent();
  if (!W(t) || t.getIsCollapsed() !== !1 || !Ih(t.getMarker())?.includes("caller")) return !1;
  const r = t.getChildren();
  let n = 0;
  for (; n < r.length; ) {
    const i = r[n];
    if (!$(i) || i.getMarkerSyntax() !== "opening") break;
    n++;
  }
  return e.is(r[n]);
}
const da = "usfm:", jy = "usfmopen", Vy = "usfmclosed";
function p1(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const h1 = new RegExp(
  [da, jy, Vy].map(p1).join("|")
), g1 = "\uFEFF", m1 = /^usfm_(.+)$/;
function y1(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function b1(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function k1(e) {
  return e.startsWith(da) ? b1(e.slice(da.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Wy(e) {
  for (const t of e.classList) {
    const r = m1.exec(t);
    if (r) return r[1];
  }
}
function x1(e) {
  const t = Wy(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function T1(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(da)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(jy) && !n.contains(Vy)) && Wy(r) !== void 0)
      return !0;
  }
  return !1;
}
function Hy(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(k1(e.nodeValue ?? ""));
    return;
  }
  if (!y1(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => Hy(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? x1(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function C1(e) {
  if (!h1.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !T1(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => Hy(n, !1, r)), r.join("").replaceAll(g1, "").replaceAll(U, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function S1(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ge(e, ke);
  if (r === "attribute" || r === Vr || By(e)) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ze(o) || _e(o)) return;
  const n = t.startsWith(U) && j(e.getParent()), i = n ? t.slice(1) : t, s = (n ? U : "") + i.replace(/ (?=[ \u00A0])/g, U).replace(new RegExp("(?<=\\u00A0) ", "g"), U);
  s !== t && e.setTextContent(s);
}
function _1(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function v1(e, t) {
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
function $l(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? C1(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(_1(s)) : ""),
    isInternal: v1(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Up = String.raw`\\(?:\+?[${Er}]+\*?|\*)`, E1 = new RegExp(
  String.raw`(?<=${Up})\u00A0|\u00A0(?=${Up})`,
  "g"
);
function Sd(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(E1, " ").replaceAll(U, "~");
}
const Gy = new RegExp(
  String.raw`\\c(?![${Er}])[ \u00A0]*[^\s\\]*`,
  "g"
), Jy = new RegExp(String.raw`\\id(?![${Er}])[^\n\\]*`, "g"), M1 = new RegExp(
  String.raw`^(?:${Gy.source}|${Jy.source})`
);
function _d(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Gy, "").replace(Jy, "");
    return M1.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function ql(e) {
  if (v(e) && ge(e, ke) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Ge(t)) return !0;
  return !1;
}
function A1(e) {
  return ql(e.anchor.getNode()) || ql(e.focus.getNode());
}
function P1(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && ql(t.getNode());
}
function w1(e, t) {
  const n = P1(e) ? t : Sd(_d(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function N1(e, t = !1, r = () => {
}) {
  const n = $l(e, Dr()._config.namespace);
  if (!n) return !1;
  const i = P(), s = A(i) && A1(i);
  if (!s && n.isInternal || t && A(i) && Qn(i))
    return !1;
  const { text: o } = n;
  if (!o || !A(i)) return !1;
  if (e?.preventDefault(), s)
    return w1(i, o), !0;
  const a = Sd(_d(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = Dr();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(ri, void 0), u === "") return;
    const f = P();
    A(f) && f.insertText(u);
  }), !0;
}
function O1(e) {
  if (e.getTextContent() !== U) return !1;
  const t = e.getParent();
  return W(t) ? !_t(e.getPreviousSibling()) : !1;
}
function R1(e, t) {
  if (t || e.getTextContent() !== U) return "";
  const r = e.getParent();
  if (!W(r) || !_t(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function $1(e) {
  const t = e.getParent();
  return (W(t) ? t.getCaller() : void 0) || Ls;
}
function q1(e) {
  const t = e.getParent();
  return !t || Nn(t) === void 0;
}
function vd(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Ql(e);
  let l = "", u = !0;
  for (const d of t) {
    if (L(d) && !d.isInline()) {
      !u && q1(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, _t(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + $1(d));
    else if (v(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += O1(d) ? "" : f.replaceAll(U, " ") + R1(d, d === n);
    } else (Ln(d) || hi(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(U, " "));
  }
  return l;
}
function Yy(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function I1(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => we(r) || ze(r)
    )
  );
}
function L1(e) {
  const t = P();
  if (!A(t) || t.isCollapsed()) return;
  const r = vd(t), n = {
    "text/plain": r,
    "text/html": Yy(r)
  };
  if (yo() || I1(t)) return n;
  const i = rx(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function Kp(e, t, r, n) {
  const i = P();
  if (!A(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Bm();
  const s = L1(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], Xy(e, t, i, s, r, n)) : !1;
}
function Xy(e, t, r, n, i, s) {
  const o = Nl(s);
  if (o !== void 0 && Dy(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), Il(e, t, { "text/plain": Uy(a, o) })) : Il(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function Il(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || tx(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function Ll(e, t) {
  const r = zu();
  if (!r?.end) return;
  const n = D1(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = Ia(r);
        return i ? vd(i) : void 0;
      },
      { editor: n.editor }
    );
}
const Dc = /* @__PURE__ */ new WeakMap();
function D1(e, t) {
  const r = e.getEditorState();
  if (Dc.has(r)) {
    const i = Dc.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = U1(r, t);
  return Dc.set(r, n), n;
}
function U1(e, t) {
  const r = Zu(Yu);
  if (!r) return;
  const n = Io.deserializeEditorState(e, t);
  if (!n) return;
  const i = Jk({
    namespace: "markers-view-copy",
    nodes: [ut, ...Hu],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    Cr.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function K1({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = me();
  return H(() => {
    const n = (i, s) => {
      const o = P();
      if (!A(o) || o.isCollapsed()) return !1;
      const a = Ll(r, e);
      return a === void 0 ? !1 : Xy(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": Yy(a) },
        s,
        t
      );
    };
    return $e(
      r.registerCommand(Zr, (i) => n(i, !1), Re),
      r.registerCommand(Ut, (i) => n(i, !0), Re)
    );
  }, [r, e, t]), null;
}
const Fp = /* @__PURE__ */ new WeakMap();
function F1({
  limit: e,
  viewOptions: t
}) {
  const [r] = me(), n = re(Nl(e)), i = re(t), s = re(!1), o = re(void 0);
  return H(() => {
    n.current = Nl(e), i.current = t, o.current?.();
  }, [e, t]), H(() => {
    let a, c;
    const l = (b) => {
      const T = n.current;
      if (T === void 0) return;
      const k = Fp.get(b);
      if (b.defaultPrevented && k === void 0) return;
      const E = r.getRootElement();
      if (!E) return;
      const S = E.ownerDocument.getSelection();
      if (!S || !j1(S, E)) return;
      b.preventDefault();
      const N = Uy(
        k ?? S.toString().replaceAll(U, " "),
        T
      );
      Fp.set(b, N);
      const q = b.clipboardData;
      if (q) {
        if (!N) {
          k !== void 0 && q.clearData();
          return;
        }
        q.setData("text/plain", N);
      }
    }, u = (b) => {
      n.current !== void 0 && Tn(b, "a", { ctrlKey: !gr, metaKey: gr }) && (W1(c?.activeElement, r.getRootElement()) || b.preventDefault());
    }, d = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", u, !0), c = void 0;
    }, f = () => {
      const b = n.current === void 0 ? void 0 : a;
      b !== c && (d(), c = b, c?.addEventListener("copy", l), c?.addEventListener("keydown", u, !0));
    };
    o.current = f;
    const p = (b) => (b?.preventDefault(), !0), h = (b) => {
      const T = n.current;
      if (T === void 0 || (s.current = !1, Dy(r, b))) return !1;
      if (T <= 0) return p(b);
      const k = P();
      if (pi(k))
        return k.getTextContent().length + Ky(k.getNodes()) <= T ? !1 : p(b);
      if (!A(k) || k.isCollapsed()) return !1;
      const E = z1(r, i.current);
      return E.$size(k) <= T ? !1 : (QP(T, E.options), k.isCollapsed() ? p(b) : (r.isEditable() || _h(() => B1(r)), s.current = !0, !1));
    }, g = (b, T) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const k = P();
      if (!A(k) || k.isCollapsed()) return !1;
      const E = T && r.isEditable() && !n1(k);
      return Il(
        b && typeof b == "object" && "clipboardData" in b ? b : null,
        r,
        { "text/plain": Cd(k, Rl) },
        E ? () => k.removeText() : void 0
      );
    }, m = $e(
      r.registerCommand(Zr, h, ae),
      r.registerCommand(Ut, h, ae),
      r.registerCommand(
        Zr,
        (b) => g(b, !1),
        qr
      ),
      r.registerCommand(
        Ut,
        (b) => g(b, !0),
        qr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        Yk,
        (b) => n.current === void 0 ? !1 : (b?.preventDefault(), !0),
        ae
      ),
      r.registerRootListener((b) => {
        a = b?.ownerDocument ?? void 0, f();
      })
    );
    return () => {
      m(), o.current = void 0, d();
    };
  }, [r]), null;
}
function z1(e, t) {
  if (mo(t)) {
    const n = (i) => vd(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && Ll(e, r) !== void 0) {
    const n = (i) => Ll(e, r)?.length ?? Cd(i, Rl).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + Ky(n.getNodes()),
    options: { $isHidden: Rl }
  };
}
function B1(e) {
  e.getEditorState().read(() => {
    const t = P(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!A(t) || !r) return;
    const n = zp(e, t.anchor), i = zp(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function zp(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = Xk(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = L(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function j1(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const V1 = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function W1(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? V1.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const H1 = /^\+/;
function Ed(e, t) {
  const r = t.replace(H1, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Qy(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Zy(e, t) {
  return Qy(e, t) !== void 0;
}
function Dl(e, t) {
  const r = Qy(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function fa(e, t, r) {
  const n = L(e) ? e.getChildren().filter($) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function G1(e, t, r, n, i) {
  const s = Ed(n, t);
  if (!s) {
    fa(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && fa(e, "invalid", i);
}
function Vi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (j(s)) {
      const o = s.getMarker();
      i || G1(s, o, t, r, n), Vi(s, t, r, n, i || o === "xq");
    } else if (Ce(s)) {
      if (i) continue;
      const o = Ed(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else W(s) ? Vi(s, s.getMarker(), r, n, i) : _e(s) || L(s) && Vi(s, t, r, n, i);
}
function J1(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Ed(e, a);
    if (!c) {
      fa(o, "unknown", r), Dl(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Dl(n, l) || fa(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Qe().getChildren())
    _e(o) || (we(o) ? (i(o, o.getMarker()), s(o) && Vi(o, void 0, e, r, !1)) : rt(o) ? i(o, o.getMarker()) : he(o) ? (i(o, o.getMarker()), s(o) && Vi(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && Vi(o, "p", e, r, !1));
  return r;
}
function Y1(e) {
  return !!e?.includes("(basic)");
}
function X1(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function eb(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Al(e, t);
}
function Md(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function tb(e, t) {
  const r = [];
  for (const n of t) {
    const i = Md(e, n);
    i && Dl(r, i);
  }
  return r;
}
function Lo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: X1(e.description),
    isBasic: Y1(e.description)
  };
}
function Q1(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Ul(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : Q1(e.marker, t.marker);
}
function Kl(e, t, r) {
  if (t.noteMarker) return [];
  const n = tb(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && eb(i.marker, r)
  ).filter((i) => {
    const s = Md(e, i.marker);
    return s !== void 0 && Zy(n, s);
  }).map((i) => Lo(i, "paragraph")).sort(Ul);
}
function Z1(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => eb(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Lo(c, "character")).sort(Ul);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Lo(c, "character")),
    ...a.map((c) => Lo(c, "note"))
  ].sort(Ul);
}
function ew(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function tw(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function rw(e, t, r) {
  return [
    ...ew(e, t.openCharMarkers),
    ...Z1(e, t, r)
  ].sort(tw);
}
function nw(e, t, r) {
  if (t.source === "paragraph") return Kl(e, t, r);
  const n = rw(e, t, r);
  return n.length > 0 ? n : Kl(e, t, r);
}
function iw(e, t, r) {
  const n = Kl(e, t, r), i = tb(e, t.previousParaMarkers), s = Md(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Zy(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const yt = "￼";
function rb(e) {
  return e.length > 1 && e.startsWith(U) && e.charAt(1) !== yt ? e.slice(1) : e;
}
function Bp(e) {
  return Su(e) ? e.markerSyntax ?? "opening" : void 0;
}
function nb(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Cr.serializeEditorState(
    {
      type: xr,
      version: kr,
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
  for (; Bp(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Jt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Bp(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function ib(e, t) {
  if (e.getUnknownAttributes()?.closed !== "false") return;
  const r = `${e.getMarker()}*`, n = t.findIndex(
    (i) => typeof i == "object" && i.type === "unmatched" && i.marker === r
  );
  if (!(n < 0))
    return { before: t.slice(0, n), after: t.slice(n + 1) };
}
function sb(e, t, r, n, i) {
  const s = Object.fromEntries(
    Object.entries(e.getUnknownAttributes() ?? {}).filter(([u]) => u !== "closed")
  ), o = Cr.serializeEditorState(
    {
      type: xr,
      version: kr,
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
  ).root.children, a = o.length === 1 ? o[0] : void 0, c = Array.isArray(a?.children) ? a.children : void 0, l = c?.findIndex((u) => u.type === Ue.getType()) ?? -1;
  if (!(!c || l < 0))
    return c.slice(l);
}
function ob(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = Cr.serializeEditorState(
    { type: xr, version: kr, content: [s, ...r] },
    n
  ).root.children;
  if (!gu(o)) return { failure: "shape" };
  const c = _g(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function No(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Ss(e, t) {
  u1.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += yt;
}
function nr(e) {
  return e.replaceAll(U, " ");
}
function sw(e, t, r = !1) {
  if (mo(t)) return nr(e);
  if (e === U) return " ";
  const n = r && e.startsWith(U), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(U, "~");
}
function Rs(e) {
  const t = e.getTextContent();
  return vr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Ad(e, t) {
  const r = e[t];
  if (!it(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Aa(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!$(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function ab(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Pd(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = zs(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function wd(e) {
  return !!e.getUnknownAttributes();
}
function ja(e, t) {
  const r = t(e)?.type;
  return r === x.Milestone || r === void 0 && fu(e);
}
function Nd(e, t) {
  return it(e) ? !ja(e.getMarker(), t) : W(e) || _e(e) ? !0 : He(e) ? wd(e) : j(e) ? cb(e, t) : !1;
}
function cb(e, t) {
  if (rC(e)) return !0;
  const r = e.getMarker();
  return zx(r) || t(r) !== void 0 || ow(e) && !aw(e) ? !1 : !cw(e);
}
function ow(e) {
  const t = e.getParent();
  return t !== null && Gt(t) !== void 0;
}
function aw(e) {
  const t = e.getUnknownAttributes();
  return !!t && Object.keys(t).some((r) => r !== "closed");
}
function cw(e) {
  const t = e.getChildren().filter((i) => $(i) && i.getMarker() === e.getMarker()).filter($);
  if (t.some((i) => !ln(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const er = "", tr = "";
function jp(e) {
  return e.flatMap((t) => Ge(t) ? t.getChildren() : [t]);
}
function Ms(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (it(s)) {
      const o = Ad(e, i);
      ja(s.getMarker(), r) && ab(o) ? (t.push(
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
      ), Ms(jp(o), t, r), t.push(tr)) : t.push(yt), i += o.length;
    } else if (He(s)) {
      const o = Pd(e, i);
      wd(s) ? t.push(yt) : (t.push(
        er,
        "verse",
        nr(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ms(jp(o), t, r), t.push(tr)), i += o.length;
    } else $(s) ? t.push(er, "marker", nr(s.getTextContent()), tr) : fn(s) ? t.push(er, "unmatched", nr(s.getTextContent()), tr) : Nd(s, r) ? t.push(yt) : hi(s) ? t.push(" ") : v(s) ? t.push(
      nr(
        n ? rb(Rs(s)) : Rs(s)
      )
    ) : j(s) ? (t.push(er, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ms(s.getChildren(), t, r, !0), t.push(tr)) : L(s) ? (t.push(er, s.getType()), Ms(s.getChildren(), t, r), t.push(tr)) : t.push(yt);
  }
}
function Fr(e, t) {
  const r = [];
  return Ms(e, r, t), r.join("");
}
function zr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function is(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Od(e) {
  return e.type ?? "";
}
function lb(e, t, r) {
  return t === "closing" ? at(e, r) : t === "selfClosing" ? at("") : Be(e, r);
}
function Uc(e, t) {
  const r = e[t];
  if (!(!r || Od(r) !== "attribute-run"))
    return zr(r) ?? [];
}
function Br(e, t) {
  const r = [];
  return As(e, r, t), r.join("");
}
function As(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Od(s);
    if (o === "ms") {
      const l = s, u = Uc(e, i + 1);
      u && ja(l.marker ?? "", r) ? (t.push(
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
      ), As(u, t, r), t.push(tr), i += 1) : t.push(yt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(yt);
        continue;
      }
      t.push(
        er,
        "verse",
        nr(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Uc(e, i + 1 + u);
      for (; d; )
        As(d, t, r), u++, d = Uc(e, i + 1 + u);
      t.push(tr), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        er,
        "marker",
        nr(
          lb(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(er, "char", JSON.stringify(l.unknownAttributes ?? null)), As(zr(s) ?? [], t, r, !0), t.push(tr);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(yt);
      continue;
    }
    if (o === "unmatched") {
      t.push(er, "unmatched", nr(is(s) ?? "")), t.push(tr);
      continue;
    }
    const a = is(s);
    if (a !== void 0) {
      t.push(nr(n ? rb(a) : a));
      continue;
    }
    const c = zr(s);
    c ? (t.push(er, o), As(c, t, r), t.push(tr)) : t.push(yt);
  }
}
function Rn(e) {
  let t = 0;
  for (const r of e) {
    const n = zr(r);
    if (n) {
      t += Rn(n);
      continue;
    }
    const i = is(r);
    if (i !== void 0)
      for (const s of i) s === yt && t++;
  }
  return t;
}
function Qs(e, t, r, n, i) {
  $n(e.getChildren(), t, r, n, i);
}
function $n(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if ($(a))
      No(t, a, nr(a.getTextContent()));
    else if (it(a)) {
      s();
      const c = Ad(e, o);
      ja(a.getMarker(), r) && ab(c) ? $n(c, t, r, n) : Ss(t, [a, ...c]), o += c.length;
    } else if (W(a) || _e(a))
      s(), Ss(t, [a]);
    else if (He(a)) {
      s();
      const c = Pd(e, o);
      wd(a) ? Ss(t, [a, ...c]) : (No(t, a, nr(Rs(a))), $n(c, t, r, n)), o += c.length;
    } else if (j(a))
      s(), (!t.preservedKeys || t.preservedKeys.has(a.getKey())) && cb(a, r) ? Ss(t, [a]) : Qs(a, t, r, n, { pending: !0 });
    else if (hi(a))
      s(), No(t, a, " ");
    else if (v(a)) {
      const c = vr(a) || ge(a, ke) === "attribute", l = s() && !c;
      No(
        t,
        a,
        c ? nr(Rs(a)) : sw(Rs(a), n, l)
      );
    } else L(a) ? Qs(a, t, r, n, i) : (s(), Ss(t, [a]));
  }
}
function ub(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown && n !== x.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (_e(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Qs(e, i, t, r), i;
}
function Va(e, t, r, n) {
  for (const i of t) {
    const s = ub(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Wa(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(yt);
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
function Zs(e, t = []) {
  for (const r of e)
    He(r) ? t.push(r) : L(r) && Zs(r.getChildren(), t);
  return t;
}
function Ha(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === yt && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function pn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === yt && t++;
    else r.content && (t += pn(r.content));
  return t;
}
function lw(e, t, r, n) {
  const i = { text: "", spans: [], sentinels: [], preservedKeys: n };
  for (const s of e)
    i.text.length > 0 && (i.text += " "), L(s) && Qs(s, i, t, r);
  return { text: i.text, spans: i.spans };
}
const eo = /\s/;
function db(e) {
  return e.filter(Ga).length;
}
function Ga(e) {
  if (e.isSentinel) return !1;
  const t = le(e.key);
  return v(t) && !$(t) && ge(t, ke) === "attribute";
}
function uw(e) {
  if (e.isSentinel) return !1;
  const t = le(e.key);
  return $(t) || Ga(e);
}
function Vp(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Ga(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      eo.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function dw(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !L(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = le(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function Ja(e, t, r, n) {
  const { key: i, offset: s } = dw(
    e,
    t,
    r,
    n
  ), o = Vp(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !uw(a) ? Vp(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: db(t.spans) };
}
function Kc(e) {
  if (e.isSentinel) return !1;
  const t = le(e.key);
  return $(t) && t.getMarkerSyntax() !== "opening";
}
function fw(e) {
  const t = le(e.key);
  if (!$(t)) return !1;
  const r = t.getParent();
  return j(r) ? (r.selectNext(0, 0), !0) : !1;
}
function pw(e) {
  const t = le(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = He(t) ? Pd(r, n) : it(t) ? Ad(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function fb(e, t, r) {
  const { text: n, spans: i } = e, s = db(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !Kc(d);
    if (!(o && Ga(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let h = 0; h < f; h++) {
        const g = n[d.start + h];
        if (c === 0 && (l === 0 || !eo.test(g))) {
          if (p) {
            a = { key: d.key, offset: h };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? eo.test(g) || c-- : l--;
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
    if (d && Kc(d) && fw(d) || d?.isSentinel && pw(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Kc(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = le(a.key);
    if (d && v(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function pb(e, t, r, n, i, s) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    fb(
      lw(e, n, i, s),
      t,
      e
    );
  }
}
function hb(e, t, r, n, i, s) {
  if (!r) return;
  if (t === void 0) {
    hw(e, n);
    return;
  }
  const o = { text: "", spans: [], sentinels: [], preservedKeys: s };
  $n(e, o, n, i), fb({ text: o.text, spans: o.spans }, t, e);
}
function hw(e, t) {
  const r = e.find(L);
  if (r && Nd(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function gb(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Va(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = P();
  if (A(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((m) => m.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Ja(
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
  if (pn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Cr.serializeEditorState(
    { type: xr, version: kr, content: l },
    r
  );
  if (Br(u.root.children, n) === Fr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => ei(g));
  if (Ha(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Zs(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), Wa(d, s.sentinels), e.forEach((g) => g.remove());
  const h = Zs(d);
  for (let g = 0; g < f.length && g < h.length; g++)
    h[g].getNumber() === f[g].number && h[g].setSid(f[g].sid);
  return pb(
    d,
    o,
    a,
    n,
    r,
    new Set(s.sentinels.flat().map((g) => g.getKey()))
  ), !0;
}
function mb(e) {
  if (e.getIsCollapsed() !== !1 || !Ue.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!$(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(_t(n) || v(n) && n.getTextContent() === Jt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!$(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function yb(e, t, r) {
  const n = mb(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return $n(n, i, t, r), { out: i, contentNodes: n };
}
function bb(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(yt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function gw(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = yb(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = P();
  if (A(u)) {
    for (let N = u.anchor.getNode(); N; N = N.getParent())
      if (e.is(N)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Ja(
      [e],
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const d = jr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (pn(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], h = bb(p), g = ib(e, p);
  if (g)
    return mw(
      e,
      g,
      h,
      o.sentinels,
      t,
      l
    );
  const m = nb(e, p, h, r);
  if (m.failure !== void 0)
    return m.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      m.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Rn(m.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== h;
  if (b && e.setCategory(h), Br(m.children, n) === Fr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const T = m.children.map((N) => ei(N));
  if (Ha(T) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const k = a[0];
  if (k)
    T.forEach((N) => k.insertBefore(N));
  else {
    const N = e.getChildren().find((q) => $(q) && q.getMarkerSyntax() === "closing");
    T.forEach((q) => N ? N.insertBefore(q) : e.append(q));
  }
  Wa(T, o.sentinels);
  const E = new Set(o.sentinels.flat().map((N) => N.getKey()));
  a.forEach((N) => {
    E.has(N.getKey()) || N.remove();
  });
  const S = mb(e) ?? T;
  return hb(
    S,
    c,
    l,
    n,
    r,
    E
  ), !0;
}
function mw(e, { before: t, after: r }, n, i, s, o) {
  const { viewOptions: a, logger: c } = s, l = sb(
    e,
    t,
    r,
    n,
    a
  );
  if (!l || Rn(l) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  const u = l.map((h) => ei(h)), [d] = u;
  if (!W(d) || Ha(u) !== i.length)
    return c?.warn("[MarkerEdit] Note close aborted: the closed note does not carry its content"), !1;
  let f = e;
  for (const h of u)
    f.insertAfter(h), f = h;
  Wa(u, i);
  const p = e.getChildren();
  return e.append(...d.getChildren()), p.forEach((h) => h.remove()), e.setCaller(d.getCaller()).setCategory(d.getCategory()).setUnknownAttributes(d.getUnknownAttributes()).setIsCollapsed(d.getIsCollapsed()), d.remove(), o && (e.getIsCollapsed() !== !0 && a?.isNoteShellEditable === !1 ? dl(e, a) : bm(e, { isContentChange: !0 })), !0;
}
function kb(e) {
  const t = e.getChildren();
  return xu(t[0]) ? t.slice(1) : t;
}
function Rd(e, t, r) {
  const n = kb(e), i = { text: "", spans: [], sentinels: [] };
  return $n(n, i, t, r), { out: i, contentNodes: n };
}
const yw = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${ir}(?=[\\s\\u200B\\\\|]|$)`
);
function xb(e, t) {
  const r = jr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === ir && !yw.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function Tb(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = Rd(e, i, n);
  if (!Va(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, u = !1;
  const d = P();
  if (A(d)) {
    for (let q = d.anchor.getNode(); q; q = q.getParent())
      if (c.some((K) => K.is(q))) {
        u = !0;
        break;
      }
    d.isCollapsed() && (l = Ja(
      c,
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const f = xb(o.text, i);
  if (pn(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = ob(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const h = [...p.children, ...p.followingBlocks];
  if (Rn(h) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && Br(p.followingBlocks, i) === Fr(r, i) && Br(p.children, i) === Fr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const g = p.children.map((q) => ei(q)), m = p.followingBlocks.map((q) => ei(q)), b = [...g, ...m];
  if (Ha(b) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const T = Zs([...a, ...r]).map((q) => ({
    number: q.getNumber(),
    sid: q.getSid()
  })), k = a[0];
  k ? g.forEach((q) => k.insertBefore(q)) : g.forEach((q) => e.append(q)), m.reduce((q, K) => q.insertAfter(K), e), Wa(b, o.sentinels);
  const E = new Set(o.sentinels.flat().map((q) => q.getKey()));
  a.forEach((q) => {
    E.has(q.getKey()) || q.remove();
  }), r.forEach((q) => q.remove());
  const S = [...kb(e), ...m], N = Zs(S);
  for (let q = 0; q < T.length && q < N.length; q++)
    N[q].getNumber() === T[q].number && N[q].setSid(T[q].sid);
  return hb(
    S,
    l,
    u,
    i,
    n,
    E
  ), !0;
}
const Cb = /* @__PURE__ */ new Set(["ca", "cp"]), $d = "cp";
function Sb(e) {
  if (!Kr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Qs(e, t, Ir, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = jr(r, { getMarker: Ir }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === $d)
  );
}
function Ya(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (j(r) && Cb.has(r.getMarker()) || Sb(r)) {
      t.push(r);
      continue;
    }
    he(r) && r.getMarker() === $d && t.push(r);
    break;
  }
  return t;
}
function bw(e) {
  const t = (n) => j(n) && Cb.has(n.getMarker()) || Sb(n);
  if (t(e) || he(e) && e.getMarker() === $d)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (ze(n)) return n;
      if (!t(n)) return;
    }
}
function _b(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ya(e);
  if (n.some((s) => he(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if ($n(e.getChildren(), i, t, r), $n(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function kw(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ya(e)], o = _b(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = P();
  if (A(l)) {
    for (let h = l.anchor.getNode(); h; h = h.getParent())
      if (s.some((g) => g.is(h))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Ja(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const u = jr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (pn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Cr.serializeEditorState(
    { type: xr, version: kr, content: u },
    r
  );
  if (Br(f.root.children, n) === Fr(s, n)) {
    let h = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), h = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), h = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), h = !0), h || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), h;
  }
  const p = f.root.children.map((h) => ei(h));
  return ze(p[0]) ? (p.forEach((h) => e.insertBefore(h)), s.forEach((h) => h.remove()), pb(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function to(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (_e(n)) return;
    !t && (W(n) || he(n) || ze(n) || we(n)) && (t = n), tu(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? bw(r) : void 0) ?? t;
}
function hr(e, t) {
  const r = to(e);
  return r ? W(r) ? gw(r, t) : ze(r) ? kw(r, t) : we(r) ? Tb(r, t) : gb([r], t) : !1;
}
const xw = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Wp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !xw.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Do(e, t) {
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
          t.push(`\\${n}`), Wp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Do(r.content, t), Wp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Do(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Do(r.content, t);
      }
    }
}
function Hp(e, t, r) {
  const n = to(e);
  if (!qe(n)) return !1;
  const i = P();
  if (!A(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = we(n) ? Rd(n, t, r).out : ub(n, t, r);
  if (!o) return !1;
  const a = jr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    eo.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Do(a, l);
  for (const u of l.join("").replaceAll(U, "~")) {
    if (eo.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function qd(e, t) {
  return vb(e, t, x.Paragraph);
}
function Tw(e, t) {
  return vb(e, t, x.Character);
}
function vb(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== x.Unknown ? i === r : !(Ue.isValidMarker(n) || fu(n));
}
function Cw(e) {
  return [St(e), fo()];
}
function Id(e) {
  Kt(e, 2);
}
function Sw(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Xa(e) {
  const t = Sw(e);
  e.splice(0, 0, Cw(e.getMarker())), t && Id(e);
}
function pa(e, t) {
  e.setMarker(t), Xa(e), Id(e);
}
function _w(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!vr(n)) {
    if (v(n) && !$(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(U), Rt(n, ke, Vr), n.setMode("token");
      return;
    }
    if (Ag(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(fo());
  }
}
function Gp(e, t, r) {
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
function $s(e) {
  for (let t = e; t; t = t.getParent())
    if (he(t)) return t;
}
function vw(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = $s(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = $s(r.getNode())?.is(s) ?? !1, a = $s(n.getNode())?.is(s) ?? !1;
    return !(o && !Gp(r, s, "start") || a && !Gp(n, s, "end"));
  });
}
function Fl(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = P();
  if (!(!A(r) || r.isCollapsed()))
    for (const n of vw(r)) t.add(n.getKey());
}
function Ew(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = P();
  if (!A(r) || !r.isCollapsed()) return;
  const n = $s(r.focus.getNode());
  n && t.add(n.getKey());
}
function Mw(e) {
  const t = P();
  !A(t) || t.isCollapsed() || t.getNodes().some((r) => $(r)) && (Fl(e), t.removeText());
}
const Aw = new RegExp(
  String.raw`^\\\+?([${Er}]+)(?:[ \u00A0]|$)`
);
function Pw(e, t) {
  const r = Aw.exec(e.getTextContent());
  return !!r && qd(r[1], t);
}
function ww(e, t) {
  if (!ki(t.viewOptions)) return;
  if (Ct(e.getFirstChild())) {
    _w(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (Pw(e, t.getMarker)) return;
    Xa(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => he(o) && !o.is(e))) {
      pa(e, ir), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (qe(r)) {
    const n = e.getChildren().filter((a) => !vr(a)), i = P();
    let s = !1;
    if (A(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : $s(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Kt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  pa(e, ir);
}
function Nw(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = Rr(t, Sa(e.getMarker()));
  return r === "" ? void 0 : r;
}
function Eb(e) {
  const t = e.getChildren().filter((s) => !$(s) && ge(s, ke) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith(U) && r.setTextContent(r.getTextContent().slice(1));
  const n = Nw(e);
  n && t.push(Oe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function Ow(e) {
  const t = e.getNode();
  let r;
  if (e.type === "element" && L(t) ? r = t.getChildAtIndex(e.offset) : $(t) && e.offset === 0 ? r = t : v(t) && e.offset === t.getTextContentSize() && (r = t.getNextSibling()), j(r) && (r = r.getFirstChild()), !$(r) || r.getMarkerSyntax() !== "opening") return;
  const n = r.getParent();
  if (!(!j(n) || !r.is(n.getFirstChild())))
    return r.getTextContentSize() === 1 ? r : void 0;
}
function Rw() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = Ow(e.anchor), r = t?.getParent();
  if (!t || !j(r)) return !1;
  const n = t.getNextSibling();
  return t.remove(), os(n) && n.getTextContent().startsWith(U) && n.setTextContent(` ${n.getTextContent().slice(U.length)}`), Eb(r), v(n) && n.isAttached() && n.select(0, 0), !0;
}
function $w(e, t) {
  const r = e.getChildren(), n = r.some((s) => $(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => v(c) && !$(c) && c.getTextContent() === Jt(s)
    ), a = gi(e).some(({ node: c }) => $(c));
    if (!o && !a) return;
    r.forEach((c) => {
      $(c) || (v(c) && c.getTextContent() === Jt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => $(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function qw(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!($(r) && r.getMarkerSyntax() === "opening")) {
    Eb(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => $(o) && o.getMarkerSyntax() === "closing");
  i && !s && hr(e, t);
}
function Ld(e, t, r) {
  if (!$(e.getFirstChild()) && r?.markerMode === "editable" && ki(r)) {
    pa(e, t);
    return;
  }
  Am(e, t);
}
function Mb() {
  const e = P();
  if (!A(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Ab(e);
    return t !== "removed" ? t : (zl(), "handled");
  }
  return zl() ? "handled" : "declined";
}
function Iw(e, t) {
  if (!t) return e;
  const r = d1.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== x.Paragraph ? e : e.slice(r[0].length);
}
function Jp(e, t) {
  const r = P();
  if (!A(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Pb())
      return "declined";
  } else {
    const s = Ab(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => Iw(s, t)
  );
  Yp(n ?? "");
  for (const s of i)
    zl(), Yp(s);
  return "handled";
}
function Lw(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Qr(n);
  if (!i) return !1;
  const s = Gt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || $(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Ab(e) {
  const t = Gt(e.anchor.getNode()), r = Gt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), Dw() ? "removed" : "needs-plain-split");
}
function Yp(e) {
  if (e === "") return;
  const t = P();
  A(t) && t.insertText(e);
}
function Dw() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = Gt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => $(r) && r.getMarkerSyntax() === "opening");
}
function Pb() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Gt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function zl() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Pb();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = rn("fp", { closed: "false" });
  i.append(St("fp"));
  const s = v(t) && !$(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    Xi(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (HT(u), i.append(u));
  }
  return i.getChildren().every($) && i.append(Oe(or)), wb(i), !0;
}
function wb(e) {
  const t = e.getChildren().find((r) => !$(r));
  if (v(t)) {
    const r = Pa(t);
    t.select(r, r);
    return;
  }
  if (L(t)) {
    wb(t);
    return;
  }
  e.selectEnd();
}
function Uw(e) {
  const t = [];
  let r = e;
  for (; r; )
    j(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function Kw(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Qe().getChildren()) {
    if (t && n.is(t)) {
      we(n) && r.push(n.getMarker());
      break;
    }
    (we(n) || rt(n) || he(n)) && r.push(n.getMarker());
  }
  return r;
}
function Fw(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function zw(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ct(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && vr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(Fw(i)) && r === 0 : !1;
}
function Bw(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ct(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && vr(i) && t.is(i) && r === 0;
}
function jw() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function Vw(e) {
  const t = Lm(e);
  if (t) return { node: t, offset: 0, hasTextSelection: !1 };
  if (!A(e)) return;
  const { focus: r } = e;
  return {
    node: r.getNode(),
    offset: r.offset,
    hasTextSelection: !e.isCollapsed()
  };
}
function Ww(e) {
  const t = P(), r = Vw(t);
  if (!r) return;
  const { node: n, offset: i, hasTextSelection: s } = r, o = Pe(n, he), a = o ? void 0 : Pe(n, we), c = !s && !a && (!o || Bw(o, n, i)) ? "paragraph" : "character", l = Gt(n);
  return {
    source: c,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: o?.getMarker() ?? a?.getMarker(),
    previousParaMarkers: Kw(n),
    openCharMarkers: Uw(n),
    noteMarker: l?.getMarker(),
    hasTextSelection: s,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: Ou(n, i),
    anchorRect: Hw(e, Sn(t)) ?? jw()
  };
}
function Hw(e, t) {
  const r = t && e?.getElementByKey(t.getKey());
  if (!r) return;
  const { x: n, y: i, width: s, height: o } = r.getBoundingClientRect();
  return { x: n, y: i, width: s, height: o };
}
function Gw() {
  const e = P();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || $(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = f1.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function Jw(e, t, r) {
  Ld(e, t, r), Id(e);
}
function Yw(e, t, r) {
  const n = P();
  if (!A(n)) return;
  const i = n.focus.getNode(), s = Pe(i, he);
  if (t === "backslash" && s && zw(s, i, n.focus.offset)) {
    Jw(s, e, r);
    return;
  }
  Bl(e, r);
}
function Nb(e, t) {
  const r = e.getNode(), n = Sy(L(r) ? r : r.getParent());
  return t.is(n);
}
function Xw(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !Nb(e, t);
}
function ha(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function Qw(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!$(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!j(r)) return e;
  const n = r.getParent();
  return n ? mr(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function Zw(e, t, r) {
  const n = P();
  if (!A(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!Nb(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && Xw(s, e)) return !1;
  const o = xu(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (ha(n.anchor, e, o), ha(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = P();
  if (!A(a) || !a.isCollapsed()) return !1;
  const c = Ey(a);
  if (!c) return !1;
  const { parent: l, moving: u } = vy(
    Qw(c.anchor)
  );
  if (!e.is(l)) return !1;
  const d = u.filter((h) => !h.is(o)), f = Gi(t);
  e.insertAfter(f), f.append(...d);
  const [p] = d;
  return j(p) ? Na(p) : f.select(0, 0), ki(r) && Xa(f), !0;
}
function e0(e, t) {
  const r = P();
  return !A(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Ob(e) {
  const t = P();
  return A(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function t0(e) {
  const t = Pe(e.anchor.getNode(), we);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !xu(r) || (ha(e.anchor, t, r), ha(e.focus, t, r));
}
function r0(e, t, r, n) {
  const i = P();
  if (A(i) ? t0(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && Gw(), e.kind === "closeTag") {
    Ob(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Mb() !== "declined") return;
  if (e.kind === "paragraph" && dt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    Yw(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ue.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Py(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  Pl(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Dr(), reference: r });
}
function Bl(e, t) {
  const r = P();
  if (!A(r)) return !1;
  Ru(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!Pe(n, he)) {
    const o = Pe(n, we);
    if (o) return Zw(o, e, t);
  }
  const i = ki(t);
  if (My()) {
    const o = P();
    if (!A(o)) return !1;
    const a = Pe(o.anchor.getNode(), he);
    return a ? (a.setMarker(e), i && Xa(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return he(s) ? (i ? pa(s, e) : s.setMarker(e), !0) : !1;
}
function n0() {
  const [e] = me();
  return H(() => e.registerCommand(iu, () => !0, gt), [e]), null;
}
function i0(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = a1.exec(e)?.[1];
  return r === void 0 ? !1 : !qd(r, t);
}
function Rb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !i0(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!he(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== x.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!he(i) && !we(i)))
    return [i, r];
}
function $b(e, t) {
  const r = Rb(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return we(n) ? Tb(n, t, [i]) : gb([n, i], t);
}
function s0(e, t) {
  const r = P();
  A(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function qb(e) {
  const t = c1.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function o0(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = qb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function a0(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (W(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (j(n)) {
      Na(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Xp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = qb(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  a0(e);
}
function Qp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Ib(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return hr(e, r);
  const n = o0(e), i = e.getParent();
  if (he(i)) {
    if (!qd(t, r.getMarker))
      return $b(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : hr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Qp(s, t) && Xp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (j(i) || W(i)) {
    const s = t.replace(/^\+/, "");
    if (!(j(i) ? Tw(t, r.getMarker) : Ue.isValidMarker(s)))
      return hr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return hr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter($).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (s0(c, at(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Qp(a, s) && Xp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return hr(e, r);
}
function c0(e) {
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
function l0(e, t) {
  const r = e.getTextContent();
  if (ln(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ge(e.getParent()) && _u(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !c0(e)) {
    eC(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = s1.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Ib(e, n[1], t);
      return;
    }
    if (o1.test(r)) {
      t.pendingKeys.delete(e.getKey()), hr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = at(e.getMarker(), e.getNested());
    if ((j(n) || W(n)) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = P(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = Oe(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function u0(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Gg(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Lb(e) {
  if (!Ih(e)?.length)
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
const _s = Lb("v"), d0 = Lb("c"), Zp = /^[ \u00A0]*$/;
function jl(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === tt.getType() && n.getMode() === "normal" && ge(n, ke) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = Oe(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function f0(e, t) {
  const r = e.getTextContent(), n = sr("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (_s.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = _s.valueAndRest.exec(c);
    if (l && Zp.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (_s.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = _s.valueAndRest.exec(r);
  if (!s) {
    const c = _s.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = P(), p = A(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(sr("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      jl(e, d, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), hr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), Zp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(sr("v", o)), a && jl(e, a, a.length);
}
const p0 = /^[ \u00A0]+([^ \u00A0\\]*)[ \u00A0]([\s\S]*)$/;
function h0(e, t) {
  if (!By(e)) return !1;
  const r = e.getParent();
  if (!W(r)) return !1;
  const n = e.getTextContent();
  if (n === Jt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const i = p0.exec(n);
  if (!i) return !1;
  const [, s, o] = i, a = P(), c = A(a) && a.isCollapsed() && a.anchor.key === e.getKey() ? a.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), s !== r.getCaller() && r.setCaller(s), e.setTextContent(Jt(s)), o) {
    const l = n.length - o.length, u = c !== void 0 && c >= l ? c - l : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const d = jl(e, o, u);
    d.isUnmergeable() || d.toggleUnmergeable();
  }
  return !0;
}
function g0(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const r = sr("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = d0.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Db(e) {
  if (it(e)) {
    const { wrapper: t } = Aa(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (W(e)) {
    const { wrapper: t } = vu(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (ze(e)) {
    const t = [], r = $g(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Ig(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (He(e)) {
    const t = [], r = zs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = zs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function m0(e) {
  const t = P();
  if (!A(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Db(e).some((n) => r.is(n));
}
function y0(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && he(e) && Ag(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Bs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && ho(l, e) && (i || m0(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Db(e))
    l.remove(), n = !0;
  let s = !1;
  if (j(e)) {
    const l = sC(e);
    l !== void 0 && Dx(l) && (Kg(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Bs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (eS(l, e)) {
        Vs(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && nm(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Oa(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function eh(e) {
  return v(e) && e.getType() === tt.getType() && e.getMode() === "normal" && ge(e, ke) !== "attribute";
}
function b0(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = le(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && eh(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && eh(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Oo(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = b0(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = le(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if ($(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (ln(c)) continue;
      const h = zy.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = Ib(c, h[1], e) || n : r === "idle" && Hp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : $b(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = hr(c, e) || n;
      continue;
    }
    const l = ai(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = y0(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && Hp(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = hr(u, e) || n;
    }
  }
  return n;
}
function Ub(e) {
  if (fn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (j(t)) return Ps(t) !== void 0;
  return !1;
}
function k0(e) {
  const t = ai(e);
  if (!t) return !1;
  const r = oi(t.kind);
  return !Oa(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function th(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (_e(t) || Xg(t)) return !0;
  return !1;
}
function x0(e, t) {
  const r = e.getTextContent(), n = ge(e, ke), i = e.getParent();
  if (n !== "attribute" && ze(i)) {
    r.replace(/^[ \u00A0]+/, "") === sr("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (h0(e, t)) return;
  if (n === "attribute") {
    k0(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Ub(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !th(e))
      t.pendingKeys.add(e.getKey());
    else if (Lg(e)) t.pendingKeys.add(e.getKey());
    else if (ze(to(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      j(a) && Fg(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (th(e)) return;
  const s = P(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (l1.test(o)) {
    if (Hx(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), hr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function T0(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : nm(e, t);
}
function C0(e) {
  const t = (r) => {
    if ($(r)) {
      ln(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (fn(r)) {
      Gg(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Bs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (ho(n, r) || T0(n, r)) && e.pendingKeys.add(r.getKey());
    if (He(r)) {
      r.getTextContent() !== sr("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== tt.getType() || ge(r, ke) === "attribute") return;
      const n = r.getParent();
      if (ze(n)) {
        r.getTextContent() !== sr("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Ub(r) || i.includes("//") || Lg(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (j(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!_e(r)) {
      if (Ge(r) && r.getChildrenSize() === 0) {
        const n = ai(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Qe().getChildren().forEach(t);
}
const Kb = xa(
  "COMMIT_PENDING_MARKERS_COMMAND"
), Fb = xa(
  "SET_MARKER_SETTLE_SUSPENDED_COMMAND"
);
function Fc(e) {
  const t = e();
  return ht(Zl), ht(Uh), t;
}
const rh = 8, nh = 1e3, S0 = 1e3;
function Li(e, t) {
  const r = He(e) ? ["va", "vp"] : it(e) ? ["milestone"] : W(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    sS(oi(n), e, t.pendingKeys);
}
function _0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(ou) || i.updateTags.has(Ds)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = le(o);
        if (!c) continue;
        const l = ai(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = le(o.getKey());
        c?.isAttached() && oi(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(tt, r),
    e.registerMutationListener(Hr, r),
    e.registerMutationListener(an, r),
    e.registerMutationListener(cn, r)
  );
}
function Vl(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = P();
  return r ? t ? Ys(r, t) : A(r) && Qn(r) : !1;
}
function v0(e, t, r) {
  return $e(
    e.registerCommand(
      It,
      (n) => {
        if (yo() || Vl(t)) return !1;
        const i = $l(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Sd(_d(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = Jp(o, t.getMarker);
          if (a === "declined" && Lw(e) && (a = Jp(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      ae
    ),
    e.registerCommand(
      It,
      (n) => {
        const i = $l(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !MP()) return !1;
        const o = P();
        return t.structureProtectionMode === "protected" && A(o) && Qn(o) ? !1 : (n?.preventDefault(), A(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(ri, void 0), a === "") return;
          const l = P();
          A(l) && l.insertText(a);
        }), !0);
      },
      Re
    ),
    e.registerCommand(
      It,
      () => (t.splitExpected.current = !0, !1),
      gt
    )
  );
}
function E0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = me(), a = e?.markerMode === "editable", c = !!e && mo(e), l = re(void 0), u = re(n), d = re(!1), f = re(s);
  return H(() => {
    u.current = n, f.current = s;
    const p = l.current;
    p && (e && (p.viewOptions = e), p.getMarker = t ?? Ir, p.logger = r, p.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), H(() => {
    if (!a || !e) return;
    const p = {
      viewOptions: e,
      getMarker: t ?? Ir,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    l.current = p;
    const h = YC(o, p.pendingKeys);
    let g, m = !1, b, T = !1, k = !1, E = 0;
    const S = () => E < rh ? !1 : (p.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${rh} consecutive mutating passes; leaving ${p.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...p.pendingKeys].join(", ")}`
    ), !0), N = (I, Y = "departure", G = !1) => {
      const z = G && !cd(o), O = z ? $r(o, pr) : void 0;
      o.update(
        () => {
          z && ht(pr), E = Fc(
            () => Oo(p, I, Y)
          ) ? E + 1 : 0;
        },
        // DISCRETE whenever the tag is in play, the way `commitPendingMarkerEdits` does it:
        // Lexical commits inside the call only for a discrete update (`_flushSync`) and otherwise
        // schedules the commit on a microtask, so the release below would disarm before the commit
        // it exists to catch. A settle that only moves the selection — which an update running
        // outside an event can produce on its own, by re-reading the DOM selection — would then
        // leave the tag pending to ride onto the next commit, where it stops a later `focus()`
        // from focusing the editor.
        z ? { discrete: !0 } : void 0
      ), O?.();
    };
    let q = !1, K;
    const V = () => {
      K !== void 0 && clearTimeout(K), K = void 0;
    }, ue = (I) => {
      d.current !== I && (d.current = I, q = !1, V(), I ? (te !== void 0 && clearTimeout(te), te = void 0) : queueMicrotask(() => {
        k || d.current || (!m && !S() && N(g, "departure", !0), ye());
      }));
    };
    let te;
    const ye = () => {
      if (te !== void 0 && clearTimeout(te), te = void 0, k || p.pendingKeys.size === 0 || d.current) return;
      const I = u.current ?? S0;
      I < 0 || (te = setTimeout(() => {
        te = void 0, !(k || p.pendingKeys.size === 0) && (m || S() || N(void 0, "idle"));
      }, I));
    }, se = $e(
      o.registerNodeTransform(Hr, (I) => {
        if (o.isComposing()) return;
        l0(I, p);
        const Y = ai(I);
        Y && (He(Y.owner) || W(Y.owner) || ze(Y.owner) || it(Y.owner) && Aa(Y.owner).wrapper === void 0) && Li(Y.owner, p);
      }),
      o.registerNodeTransform(Mt, (I) => {
        o.isComposing() || (f0(I, p), Li(I, p));
      }),
      o.registerNodeTransform(Xt, (I) => {
        o.isComposing() || (g0(I), I.isAttached() && Li(I, p));
      }),
      o.registerNodeTransform(dt, (I) => {
        o.isComposing() || ww(I, p);
      }),
      o.registerNodeTransform(Ae, (I) => {
        if (!o.isComposing()) {
          qw(I, p);
          for (const Y of ["separator", "char"])
            I.isAttached() && ho(oi(Y), I) && p.pendingKeys.add(I.getKey());
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
      o.registerNodeTransform(Tr, (I) => {
        o.isComposing() || Li(I, p);
      }),
      o.registerNodeTransform(cn, (I) => {
        if (o.isComposing()) return;
        const Y = ai(I);
        Y && (it(Y.owner) || He(Y.owner) || W(Y.owner) || ze(Y.owner)) && Li(Y.owner, p);
      }),
      o.registerNodeTransform(Ue, (I) => {
        o.isComposing() || ($w(I, p), Li(I, p));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(dn, (I) => {
        o.isComposing() || u0(I, p);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(tt, (I) => {
        o.isComposing() || x0(I, p);
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
        (I) => {
          o.getEditorState().read(() => {
            for (const [Y, G] of I) {
              if (G === "destroyed") continue;
              const z = le(Y);
              !z || ge(z, ke) !== "attribute" || Ge(z.getParent()) || o.getElementByKey(Y)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      _0(o, p),
      ...c ? [
        o.registerNodeTransform(tt, (I) => {
          o.isComposing() || S1(I);
        }),
        o.registerCommand(
          Zr,
          (I) => Kp(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            I && typeof I == "object" && "clipboardData" in I ? I : null,
            o,
            !1,
            f.current
          ),
          Re
        ),
        o.registerCommand(
          Ut,
          (I) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            Kp(
              I && typeof I == "object" && "clipboardData" in I ? I : null,
              o,
              !0,
              f.current
            )
          ),
          Re
        ),
        o.registerCommand(
          It,
          (I) => N1(
            // Same jsdom-safe duck-check as COPY above.
            I && typeof I == "object" && "clipboardData" in I ? I : null,
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
        Ut,
        () => (!Vl(p) && !yo() && Fl(p), !1),
        ae
      ),
      o.registerCommand(
        En,
        () => (o.isComposing() || Mw(p), !1),
        qr
      ),
      o.registerCommand(
        rr,
        (I) => I || o.isComposing() ? !1 : Rw(),
        qr
      ),
      o.registerCommand(
        Hi,
        () => (m = !1, E = 0, ye(), !1),
        gt
      ),
      o.registerCommand(
        ar,
        (I) => (m = !1, E = 0, ye(), (I.key === "Backspace" || I.key === "Delete") && !Vl(p, Qm(I)) && (Fl(p), Ew(p), queueMicrotask(() => {
          p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !I.ctrlKey || I.altKey || I.shiftKey || I.metaKey || I.key !== " " && I.code !== "Space" || !EP() ? !1 : (I.preventDefault(), !0)),
        Re
      ),
      o.registerCommand(
        vh,
        (I) => {
          const Y = Mb();
          Y === "needs-plain-split" && o.dispatchCommand(ri, void 0);
          const G = Y !== "declined" || oS();
          return G && I?.preventDefault(), Oo(p), G;
        },
        Re
      ),
      o.registerCommand(
        ri,
        () => (p.splitExpected.current = !0, My()),
        Re
      ),
      v0(o, p, c),
      o.registerCommand(
        Fb,
        (I) => (ue(I), !0),
        // LOW, matching the sibling host-dispatched `COMMIT_PENDING_MARKERS_COMMAND` below. This
        // command has exactly one handler, so priority decides nothing; CRITICAL is reserved in
        // this file for handlers that must beat Lexical's built-ins on NATIVE commands, and using
        // it here would imply a priority contest that does not exist.
        gt
      ),
      o.registerCommand(
        su,
        () => (d.current && q && (V(), K = setTimeout(() => {
          if (K = void 0, k || !d.current) return;
          const I = o.getRootElement(), Y = I?.ownerDocument, G = Y?.activeElement;
          !I || !Y?.hasFocus() || !G || !(I === G || I.contains(G)) || (p.logger?.warn(
            `[MarkerEdit] marker settling has been suspended while the editor held focus for ${nh}ms, so the suspension was lifted and held edits settled. The host did not resume on one of its close paths.`
          ), ue(!1));
        }, nh)), !1),
        gt
      ),
      o.registerCommand(
        Kb,
        () => {
          if (m) return !0;
          const I = o.getRootElement(), Y = I?.ownerDocument, G = !!I && !!Y && Y.hasFocus() && I.contains(Y.activeElement);
          let z;
          if (G) {
            const O = P();
            z = A(O) ? O.focus.key : g;
          }
          return Fc(() => Oo(p, z)), !0;
        },
        gt
      ),
      o.registerCommand(
        nu,
        () => {
          if (d.current)
            return q = !0, V(), !1;
          if (m) return !1;
          const I = P(), Y = A(I) ? I.focus.key : g;
          return Fc(() => Oo(p, Y)), !1;
        },
        gt
      ),
      o.registerUpdateListener(({ editorState: I, tags: Y }) => {
        p.splitExpected.current = !1, p.wholeParaDeleteExpected?.clear(), p.collapsedDeleteCaretParas?.clear(), p.rebuildAttempted.clear();
        const G = I.read(() => {
          const O = P();
          return A(O) ? O.focus.key : void 0;
        }), z = b;
        if (G !== void 0 && (b = G), Y.has(ou)) {
          p.pendingKeys.clear(), I.read(() => C0(p)), m = !0, G !== void 0 && (g = G);
          return;
        }
        if (Y.has($t)) {
          G !== void 0 && G !== z && (m = !0);
          return;
        }
        m || (G !== void 0 && (g = G), ye(), !(T || G === void 0) && [...p.pendingKeys].some((O) => O !== G) && (T = !0, queueMicrotask(() => {
          T = !1, !k && (d.current || S() || N(g));
        })));
      })
    );
    return () => {
      k = !0, te !== void 0 && clearTimeout(te), te = void 0, V(), h(), se(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const M0 = ["status_unknown", "status_invalid"], zb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, A0 = Object.values(zb);
function P0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = zb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function ih(e) {
  e.classList.remove(...M0), e.removeAttribute("aria-description"), A0.includes(e.title) && e.removeAttribute("title");
}
function w0(e, t, r, n) {
  const i = (a) => a.read(() => Qe().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = le(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function N0(e) {
  const t = le(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : $(t) && t.getParent()?.getKey() === r.getKey();
}
function O0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = me(), i = e?.markerMode === "editable";
  return H(() => {
    if (!i) return;
    const s = t ?? Jo;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = J1(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || N0(f)) continue;
            const h = le(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && ih(p);
        }
        for (const [f, p] of d) {
          const h = n.getElementByKey(f);
          h && P0(h, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          w0(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && ih(u);
      }
    };
  }, [n, i, t, r]), null;
}
function Bb(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = zr(o);
    a && L(s) && Bb(s.getChildren(), a, r);
  }
}
function ro(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = zr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = is(a);
      if (l === void 0 || !l.includes(yt)) continue;
      const u = l.split(yt), d = [];
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
function ga(e, t, r) {
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
function jb(e, t) {
  const r = [];
  for (const n of e)
    Nd(n, t) || ((he(n) || j(n)) && r.push(n.getMarker()), L(n) && r.push(...jb(n.getChildren(), t)));
  return r;
}
function Vb(e) {
  const t = [];
  for (const r of e) {
    const n = Od(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = zr(r);
    i && t.push(...Vb(i));
  }
  return t;
}
function no(e, t, r) {
  const n = jb(e, r), i = Vb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function R0(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = P();
  let n, i;
  if (A(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = le(t.key), i = t.offset;
  else
    return;
  if (!(!v(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Qa(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function $0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Va(c, e, o, s)) return;
  const l = i ? Qa(c, i) : c.text, u = jr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (pn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Cr.serializeEditorState(
    { type: xr, version: kr, content: u },
    s
  ).root.children;
  if (Rn(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = ga(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Br(d, o) === Fr(e, o) && no(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  ro(d, f);
  const h = Wb(e), g = Dd(d);
  for (let m = 0; m < h.length && m < g.length; m++)
    h[m].sid !== void 0 && g[m].number === h[m].number && (g[m].sid = h[m].sid);
  return d;
}
function Wb(e) {
  const t = [], r = (n) => {
    He(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Dd(e) {
  const t = [];
  for (const r of e) {
    yg(r) && t.push(r);
    const n = zr(r);
    n && t.push(...Dd(n));
  }
  return t;
}
function q0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = yb(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Qa(l, i) : l.text, f = jr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (pn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], g = bb(h), m = e.getCategory() !== g, b = ib(e, h);
  if (b) {
    const S = sb(
      e,
      b.before,
      b.after,
      g,
      s
    );
    if (!S || Rn(S) !== l.sentinels.length) {
      a?.warn("[MarkerEdit] Settled note USJ skipped: the closed note lost its content");
      return;
    }
    const N = ga(l, t, n);
    return N ? (ro(S, N), {
      rebuilt: void 0,
      contentNodes: u,
      category: g,
      categoryChanged: !1,
      closedAs: S
    }) : void 0;
  }
  const T = nb(e, h, g, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const k = T.children;
  if (Rn(k) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const E = ga(l, t, n);
  if (!E) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Br(k, o) === Fr(u, o) && no(u, k, o)) {
    if (m)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: m };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return ro(k, E), { rebuilt: k, contentNodes: u, category: g, categoryChanged: m };
}
function sh(e) {
  return e.$?.textType;
}
function I0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && sh(e) === sh(t);
}
function L0(e) {
  const t = [];
  for (const r of e) {
    const n = le(r);
    n?.isAttached() && _e(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function D0(e) {
  if (!$(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!W(t)) return;
  const r = e.getTextContent();
  if (ln(e)) return;
  const n = zy.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function oh(e, t) {
  const r = e;
  r.marker = t, r.text = lb(t, r.markerSyntax, r.nested);
}
function U0(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ue.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && oh(a.node, s);
  const c = n.getChildren().filter($).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && oh(l.node, s);
}
function K0(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: u } = Rd(e, a, o);
  if (u.length === 0 && s.length === 0 || !Va(l, s, a, o)) return;
  const d = i ? Qa(l, i) : l.text, f = xb(d, a);
  if (pn(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = ob(
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
  if (Rn([...h, ...g]) !== l.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const m = ga(l, t, n);
  if (!m) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (g.length === s.length && Br(g, a) === Fr(s, a) && no(s, g, a) && Br(h, a) === Fr(u, a) && no(u, h, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const b = ro(h, m);
  ro(g, m, b);
  const T = Wb([...u, ...s]), k = Dd([...h, ...g]);
  for (let E = 0; E < T.length && E < k.length; E++)
    T[E].sid !== void 0 && k[E].number === T[E].number && (k[E].sid = T[E].sid);
  return { rebuilt: h, contentNodes: u, followingBlocks: g };
}
function F0(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = _b(e, i, n);
  if (!o) return;
  const a = r ? Qa(o, r) : o.text, c = jr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (pn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Cr.serializeEditorState(
    { type: xr, version: kr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Ya(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Br(u, i) === Fr(d, i) && no(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function z0(e, t, r, n, i) {
  const s = R0(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (T) => {
    W(T) ? c.set(T.getKey(), T) : ze(T) ? l.set(T.getKey(), T) : we(T) ? u.set(T.getKey(), T) : o.set(T.getKey(), [T]);
  };
  for (const T of t) {
    const k = le(T);
    if (!k?.isAttached()) continue;
    const E = to(k);
    if (E) {
      if (p(E), $(k)) {
        const S = Rb(k, r.getMarker);
        S && a.push(S);
      }
      if (W(E)) {
        const S = D0(k);
        S && f.set(E.getKey(), S);
      }
    }
  }
  const h = /* @__PURE__ */ new Set();
  for (const [T, k] of a)
    h.has(T.getKey()) || h.has(k.getKey()) || ([T, k].forEach((E) => {
      h.add(E.getKey()), o.delete(E.getKey());
    }), we(T) ? (u.set(T.getKey(), T), d.set(T.getKey(), [k])) : o.set(T.getKey(), [T, k]));
  if (s) {
    const T = to(s.node);
    T && !h.has(T.getKey()) && p(T);
  }
  const g = L0(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && u.size === 0 && g.length === 0)
    return;
  const m = new Set(g.map((T) => T.getKey())), b = /* @__PURE__ */ new Map();
  Bb(Qe().getChildren(), e.root.children, b);
  for (const T of f.values()) U0(T, b);
  for (const T of c.values()) {
    const k = b.get(T.getKey()), E = k ? zr(k.node) : void 0;
    if (!k || !E) continue;
    const S = q0(T, b, r, m, s);
    if (!S) continue;
    if (S.closedAs) {
      const K = k.siblings.indexOf(k.node);
      if (K < 0) continue;
      const [V, ...ue] = S.closedAs, te = k.node;
      for (const ye of Object.keys(te)) Reflect.deleteProperty(te, ye);
      Object.assign(te, V), k.siblings.splice(K + 1, 0, ...ue);
      continue;
    }
    if (S.categoryChanged) {
      const K = k.node;
      S.category === void 0 ? delete K.category : K.category = S.category;
    }
    if (!S.rebuilt) continue;
    const N = b.get(S.contentNodes[0].getKey());
    if (!N) continue;
    const q = E.indexOf(N.node);
    q < 0 || E.splice(q, S.contentNodes.length, ...S.rebuilt);
  }
  for (const T of o.values()) {
    const k = b.get(T[0].getKey());
    if (!k) continue;
    const E = $0(T, b, r, m, s);
    if (!E) continue;
    const S = k.siblings.indexOf(k.node);
    S < 0 || k.siblings.splice(S, T.length, ...E);
  }
  for (const T of u.values()) {
    const k = b.get(T.getKey()), E = k ? zr(k.node) : void 0;
    if (!k || !E) continue;
    const S = d.get(T.getKey()) ?? [], N = K0(T, b, r, m, s, S);
    if (!N) continue;
    const q = N.contentNodes.at(0), K = q ? b.get(q.getKey()) : void 0;
    if (q && !K) continue;
    const V = K ? E.indexOf(K.node) : E.length, ue = k.siblings.indexOf(k.node);
    V < 0 || ue < 0 || (E.splice(V, N.contentNodes.length, ...N.rebuilt), k.siblings.splice(ue + 1, S.length, ...N.followingBlocks));
  }
  for (const T of l.values()) {
    const k = b.get(T.getKey());
    if (!k) continue;
    const E = 1 + Ya(T).length, S = F0(T, r, s);
    if (!S) continue;
    const N = k.siblings.indexOf(k.node);
    N < 0 || k.siblings.splice(N, E, ...S);
  }
  for (const T of g) {
    const k = b.get(T.getKey());
    if (!k) continue;
    const E = k.siblings.indexOf(k.node);
    if (E < 0) continue;
    k.siblings.splice(E, 1);
    const S = k.siblings[E - 1], N = k.siblings[E], q = S && is(S), K = N && is(N);
    S && N && q !== void 0 && K !== void 0 && I0(S, N) && (S.text = q + K, k.siblings.splice(E, 1));
  }
  return hy(e, r.viewOptions);
}
function B0({
  viewOptions: e,
  logger: t
}) {
  const [r] = me(), n = ki(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1)), i = e?.hasGutterParaMarkers ?? !1;
  return H(() => {
    if (n)
      return r.registerNodeTransform(
        dt,
        (s) => i ? V0(s) : j0(s, t)
      );
  }, [r, n, i, t]), null;
}
function j0(e, t) {
  e.getMarker() !== ir && (e.isEmpty() || Ct(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${ir}" (key ${e.getKey()})`
  ), e.setMarker(ir)));
}
function V0(e) {
  const t = e.getFirstChild();
  if (Ct(t) && !tn(t)) return;
  const r = Be(e.getMarker()) + U, [n = Jh(r), ...i] = e.getChildren().filter(tn).sort((c, l) => Number(l.is(t)) - Number(c.is(t)));
  for (const c of i) c.remove();
  if (n.getTextContent() !== r && n.setTextContent(r), n.is(t)) return;
  t ? t.insertBefore(n) : e.append(n);
  const s = P();
  if (!A(s)) return;
  const o = Ua(e), a = ls(e, o);
  for (const c of [s.anchor, s.focus])
    c.type === "element" && c.key === e.getKey() && c.offset < o && (a ? c.set(a.getKey(), 0, "text") : c.set(e.getKey(), o, "element"));
}
function W0({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = me(), n = re({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return H(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, ma(s, e) || H0(i, r, e);
  }, [r, e, t]), H(
    () => r.registerMutationListener(
      Ht,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Wl(r);
        ah(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ro(s) === Ro(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), H(() => {
    const i = (a) => a.read(
      () => new Set(
        Qe().getChildren().filter(rt).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Wl(r) || ah(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Ro(a) === Ro(c)
      }));
    };
    return $e(
      ...[Xt, Wr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), H(
    () => r.registerCommand(
      Vt,
      () => {
        const i = n.current;
        return i.phase === "idle" && Q0(i, Hb()), !1;
      },
      gt
    ),
    [r]
  ), H(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Vt, void 0));
    };
    return $e(
      r.registerMutationListener(Ft, i),
      r.registerMutationListener(Mt, i)
    );
  }, [r]), H(() => {
    const i = () => rN(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function H0(e, t, r) {
  if (G0(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Wl(t);
  (!n || n === r.book) && t.update(() => Gb(t, r.chapterNum, r.verseNum), {
    tag: $t
  });
}
function G0(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ma(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function J0(e) {
  return Lm(e) ?? Eg(e);
}
function Hb() {
  const e = P(), t = J0(e);
  if (!t) return;
  const r = Ud(), n = OT(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = Iu(t, e), { verseNum: o, verse: a } = wS(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Wl(e) {
  return e.getEditorState().read(() => Ud()?.getCode() || void 0);
}
function Ud() {
  return Qe().getChildren().find(we);
}
function ah(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && zc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || zc(e, t), e.phase = "navigating") : i && zc(e, t), r && r !== e.scrRef.book && Xb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function zc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Gb(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: $t }
    );
  });
}
function Gb(e, t, r) {
  const n = P()?.clone();
  Y0(t, r);
  const i = P();
  i && !(n && i.is(n)) && $r(e, $t);
}
function Y0(e, t) {
  const r = Hb();
  if (r?.chapterNum === e && (r.verse ? Yb(t, r.verse) : r.verseNum === t))
    return;
  const n = Qe().getChildren(), i = kg(n, e);
  if (!i) return;
  const s = DT(n, i), o = NT(s, !0);
  LT(s, o);
  let a;
  try {
    a = _S(s, t);
  } catch {
    return;
  }
  a && (he(a) ? !v(a.getFirstChild()) && jt(a) || Kt(a, 0) : X0(a));
}
function X0(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || Ce(n)) {
    v(e) ? e.selectEnd() : Kt(t, r);
    return;
  }
  const i = ls(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    e.selectEnd();
    return;
  }
  const s = L(n) && !W(n) ? Jb(n) : void 0;
  s ? s.select(0, 0) : Kt(t, r);
}
function Jb(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (L(t) && !W(t)) return Jb(t);
}
function Ro(e) {
  return e.read(() => {
    const t = Qe().getChildren().find(rt);
    return `${Ud()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function Q0(e, t) {
  e.phase !== "navigating" && t && (Z0(t, e.scrRef) || Xb(e, eN(t, e.scrRef)));
}
function Z0(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Yb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Yb(e, t) {
  try {
    return Cu(e, t);
  } catch {
    return !1;
  }
}
function eN(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const tN = 8;
function Xb(e, t) {
  return ma(t, e.scrRef) || e.pendingEchoes.some((r) => ma(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > tN && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ma(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function rN(e) {
  e.phase = "idle";
}
function nN(e) {
  return we(e) ? `${e.__code}` : ze(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker}` : ao(e) ? `${e.__marker} "${e.__number}"` : _t(e) ? `${e.__caller}` : bi(e) ? `${e.__marker} "${e.__number}"` : W(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : he(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${iN(e)}` : Ne(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : He(e) ? `${e.__marker} "${e.__number}"` : "";
}
function iN(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[oo]) : "";
}
function sN() {
  const [e] = me();
  return /* @__PURE__ */ M(
    nx,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: nN,
      editor: e
    }
  );
}
const Qb = yh(null), ch = 4;
function oN({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = re(null), s = bh(Qb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return H(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ M("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function aN({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = Te(), [s, o] = Te(), a = Ee(
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
  }, l = et(() => ({ registerItem: a }), [a]);
  return H(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ M(Qb.Provider, { value: l, children: /* @__PURE__ */ M("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function cN({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = re(null), c = re(null), [l, u] = Te(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return H(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: g } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + ch}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), H(() => {
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
  }, [a, c, l, o]), H(() => {
    const f = () => {
      if (l) {
        const p = c.current, h = a.current;
        if (p !== null && h !== null) {
          const { top: g } = p.getBoundingClientRect(), m = g + p.offsetHeight + ch;
          m !== h.getBoundingClientRect().top && (h.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ De(Zn, { children: [
    /* @__PURE__ */ De(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ M("span", { className: i }),
          t && /* @__PURE__ */ M("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ M("i", { className: "chevron-down" })
        ]
      }
    ),
    l && Xn(
      /* @__PURE__ */ M(aN, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const Hl = {
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
}, Gl = {
  ...Hl,
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
function lN({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ M(
    cN,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + uN(t),
      buttonLabel: dN(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Hl).map((n) => /* @__PURE__ */ De(
        oN,
        {
          className: "item block-marker " + fN(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ M("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ M("span", { className: "text usfm_" + n, children: Hl[n] })
          ]
        },
        n
      ))
    }
  );
}
function uN(e) {
  return e && e in Gl ? e : "ban";
}
function dN(e) {
  return e && e in Gl ? Gl[e] : "No Style";
}
function fN(e) {
  return e ? "active dropdown-item-active" : "";
}
function lh() {
  return /* @__PURE__ */ M("div", { className: "divider" });
}
const pN = In(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = me(), [o, a] = Te(s), [c, l] = Te(), [u, d] = Te(!1), [f, p] = Te(!1), h = Ee(
    ({
      canUndo: g,
      canRedo: m,
      blockMarker: b,
      contextMarker: T
    }) => {
      d(g), p(m), l(b), n?.({
        canUndo: g,
        canRedo: m,
        blockMarker: b,
        contextMarker: T
      });
    },
    [n]
  );
  return H(() => s.registerCommand(
    Vt,
    (g, m) => (a(m), !1),
    ae
  ), [s]), /* @__PURE__ */ De(Zn, { children: [
    /* @__PURE__ */ M(ly, { onStateChange: h }),
    /* @__PURE__ */ De("div", { className: "toolbar", children: [
      /* @__PURE__ */ M(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Mh, void 0);
          },
          title: gr ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Ah, void 0);
          },
          title: gr ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ M("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ M(lh, {}),
      o === s && /* @__PURE__ */ De(Zn, { children: [
        /* @__PURE__ */ M(
          lN,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ M(lh, {})
      ] }),
      /* @__PURE__ */ M("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), hN = La(), gN = {}, mN = {};
function yN() {
  return /* @__PURE__ */ M("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Bc(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
function uh(e) {
  const t = e.getNextSiblings(), r = t.at(0), n = t.at(-1);
  if (!r || !n) return [];
  const i = L(n) ? n.getLastDescendant() ?? n : n;
  return $a(r, i);
}
function dh(e, t, r) {
  ox(e, () => Gi(t));
  const n = P();
  if (!A(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    he(o) && i.add(o);
  }), i.forEach((s) => Ld(s, t, r));
}
const Zb = In(function({
  defaultUsj: t,
  scrRef: r,
  onScrRefChange: n,
  onSelectionChange: i,
  onUsjChange: s,
  onStateChange: o,
  onParaMarkerMenuRequest: a,
  options: c,
  logger: l,
  children: u
}, d) {
  const f = re(null), p = re(null), h = re(null), g = re(null), m = re(t), b = re(void 0), T = re(void 0), k = re(void 0), E = re(void 0), S = re(!1), [N, q] = Te(t), [K, V] = Te(0), [ue, te] = Te(), {
    isReadonly: ye = !1,
    structureProtectionMode: se = "off",
    onHiddenContentDelete: I,
    hasExternalUI: Y = !1,
    hasSpellCheck: G = !1,
    textDirection: z = "ltr",
    markerMenuTrigger: O = "\\",
    view: F,
    nodes: ee,
    debug: X = !1,
    contextMenu: w,
    styleInfo: Z,
    markerSettleDelayMs: pe,
    copyLimit: xe
  } = c ?? mN, Ke = F ?? hN, ft = Gs(Ke) && (Ke.markerMode !== "hidden" || !Ke.hasSpacing || Ke.hasGutterParaMarkers || Ke.hasActiveTextFocusBox) ? {
    ...Ke,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : Ke, cr = re(ft);
  Qt(cr.current, ft) || (cr.current = ft);
  const ce = cr.current, vt = et(() => ee ?? gN, [ee]), bo = et(() => w, [w]), Ie = et(
    () => gS(Z ?? Jo),
    [Z]
  ), Gr = re(l);
  Qt(Gr.current, l) || (Gr.current = l);
  const fe = Gr.current, kt = Gs(ce), ve = ye || kt, hn = ft !== Ke;
  H(() => {
    kt && !ye && fe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), hn && fe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ce?.markerMode === "visible" && !ye && fe?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [kt, ye, hn, fe, ce?.markerMode]);
  const gn = re(null), Mr = et(() => {
    if (ce.markerMode !== "editable") return;
    const R = Z ?? Jo;
    return {
      getContext: () => gn.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (D) => nw(
        R,
        D,
        vt.extraValidMarkers
      ),
      getEnterItems: (D) => iw(
        R,
        D,
        vt.extraValidMarkers
      ),
      apply: (D, Q) => {
        const ne = gn.current;
        ne && (Q.trigger === "enter" ? ne.splitParagraphWithMarker(D.marker) : ne.applyMarkerMenuSelection(D, Q));
      },
      commitTypedCloser: (D) => {
        gn.current?.commitTypedCloser(D);
      }
    };
  }, [ce, Z, vt.extraValidMarkers]), xi = (R) => {
    S.current || (S.current = !0, Gr.current?.warn(
      `Editor: cannot ${R} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ti = (R) => {
    if (kt)
      throw new Error(
        `Cannot ${R} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, mn = (R) => {
    if (Ti(R), ve) throw new Error(`Cannot ${R} in readonly mode`);
  }, Un = () => !!f.current && cd(f.current), Ar = et(
    () => ({
      namespace: "platformEditor",
      theme: { ...Ly, showCharMarkerTitles: ce.showCharMarkerTitles },
      editable: !ve,
      editorState: void 0,
      // Handling of errors during update
      onError(R) {
        throw R;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [ut, ...kt ? I_ : Hu]
    }),
    [ve, kt, ce.showCharMarkerTitles]
  );
  Io.initialize(fe);
  function wt(R) {
    if (R !== void 0 && !PP(R, vt.extraValidMarkers))
      throw new Error(`Unsupported character marker '${R}'`);
  }
  const lr = Ee(() => {
    const R = f.current;
    if (!R) return m.current;
    const D = Sf(R), Q = T.current;
    if ((!D || D.size === 0) && !Q) return m.current;
    const ne = R.getEditorState(), Me = ne.toJSON();
    return ne.read(
      () => z0(
        Me,
        D ?? /* @__PURE__ */ new Set(),
        { viewOptions: ce, getMarker: Ie, logger: fe },
        Q,
        k.current
      )
    ) ?? m.current;
  }, [ce, Ie, fe]);
  function Ci(R, D, Q) {
    if (kt && D === "remote") {
      Gr.current?.error(
        "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
      );
      return;
    }
    Ti("apply an update");
    const ne = Un(), Me = !ne && f.current ? $r(f.current, pr) : void 0;
    f.current?.update(
      () => {
        D === "remote" && ht(Ds), ne || ht(pr), Q && ht(Q), lv(R, ce, vt, fe);
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
          Me?.(), !ne && f.current && Ec(f.current);
          const Fe = f.current?.getEditorState();
          if (!Fe) return;
          const Ve = Io.deserializeEditorState(Fe, ce);
          if (Ve) {
            const Ze = !Qt(m.current, Ve);
            if (Ze && (m.current = Ve), Ze || !Qt(N, Ve)) {
              const pt = $f(R, Fe, "apply");
              E.current = Ve, s?.(Ve, R, D, pt);
            }
          }
        }
      }
    );
  }
  const Kn = {
    focus() {
      const R = f.current;
      if (!R) return;
      R.focus(), R.getEditorState().read(() => pi(P())) && R.getRootElement()?.focus({ preventScroll: !0 });
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return Un();
    },
    undo() {
      f.current?.dispatchCommand(Mh, void 0);
    },
    redo() {
      f.current?.dispatchCommand(Ah, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      mn("cut"), f.current && sd(f.current);
    },
    copy() {
      f.current && id(f.current);
    },
    paste() {
      mn("paste"), f.current && od(f.current);
    },
    pastePlainText() {
      mn("paste as plain text"), f.current && ad(f.current);
    },
    getUsj() {
      return lr();
    },
    commitPendingMarkerEdits() {
      const R = f.current;
      if (!R) return;
      const D = !Un(), Q = D ? $r(R, pr) : void 0;
      R.update(
        () => {
          D && ht(pr), R.dispatchCommand(Kb, void 0);
        },
        { discrete: !0 }
      ), Q?.(), D && Ec(R);
    },
    setMarkerSettleSuspended(R) {
      f.current?.dispatchCommand(Fb, R);
    },
    setTransientInput(R) {
      if (!R) {
        T.current = void 0;
        return;
      }
      const D = f.current?.getEditorState().read(() => {
        const Q = P();
        return A(Q) && Q.isCollapsed() ? Q.focus.key : void 0;
      });
      T.current = { input: R, nodeKey: D ?? k.current?.key };
    },
    setUsj(R) {
      if (!Qt(m.current, R)) {
        m.current = R, T.current = void 0;
        const D = Qt(N, R);
        q(R), D && V((Q) => Q + 1);
      }
    },
    applyUpdate(R, D = "remote") {
      Ci(R, D);
    },
    replaceEmbedUpdate(R, D) {
      const Q = f.current?.read(() => zS(R, D));
      Q ? this.applyUpdate(Q) : l?.warn(
        `replaceEmbedUpdate: no embed found for key "${R}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (kt) {
        xi("get the selection");
        return;
      }
      return f.current?.read(zu);
    },
    getSelectedParaMarker() {
      const R = f.current;
      if (R?.isEditable())
        return R.getEditorState().read(() => Pn(P())?.getMarker());
    },
    setSelection(R) {
      if (kt) {
        xi("set the selection");
        return;
      }
      f.current?.update(() => {
        const D = Ia(R);
        D !== void 0 && (Tt(D), ht(Dh));
      });
    },
    setAnnotation(R, D, Q, ne, Me) {
      if (kt) {
        xi("set an annotation");
        return;
      }
      let Fe, Ve, Ze, pt;
      typeof ne == "function" || ne === void 0 ? (Fe = ne, Ve = Me) : (Fe = ne.onClick, Ve = ne.onRemove, Ze = ne.onMouseEnter, pt = ne.onMouseLeave), p.current?.setAnnotation(
        R,
        ff(D),
        Q,
        Fe,
        Ve,
        Ze,
        pt
      );
    },
    removeAnnotation(R, D) {
      p.current?.removeAnnotation(ff(R), D);
    },
    formatPara(R) {
      mn("format a paragraph"), f.current?.update(
        () => {
          const D = P(), Q = Pn(D);
          if (Q) {
            Ld(Q, R, ce);
            return;
          }
          if (!A(D)) {
            l?.warn(
              `formatPara refused: no range selection or selected paragraph marker to retag with "${R}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const ne = D.isBackward() ? D.focus : D.anchor, Me = Pe(ne.getNode(), we);
          if (Me) {
            const Fe = D.isBackward() ? D.anchor : D.focus, Ze = !D.isCollapsed() && !Me.is(Fe.getNode()) && !Me.isParentOf(Fe.getNode()) ? { key: Fe.key, offset: Fe.offset, type: Fe.type } : void 0, pt = Ur();
            if (pt.anchor.set(ne.key, ne.offset, ne.type), pt.focus.set(ne.key, ne.offset, ne.type), Tt(pt), !Bl(R, ce)) {
              l?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${R}"`
              );
              return;
            }
            if (!Ze) return;
            const zt = le(Ze.key);
            if (!zt?.isAttached()) return;
            const vi = zt.getTopLevelElement();
            if (!vi) return;
            const fs = Me.getNextSibling();
            if (!he(fs)) return;
            let ur = fs.getNextSibling();
            for (; ur; ) {
              const ps = ur.is(vi), ko = ur.getNextSibling();
              if (he(ur)) {
                const Jr = Ur();
                Jr.anchor.set(ur.getKey(), 0, "element"), Jr.focus.set(ur.getKey(), ur.getChildrenSize(), "element"), Tt(Jr), dh(Jr, R, ce);
              }
              if (ps) break;
              ur = ko;
            }
            return;
          }
          dh(D, R, ce);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(R) {
      return f.current?.read(
        () => f.current?.getElementByKey(R) ?? void 0
      );
    },
    removeCharacterMarker(R) {
      if (ve) throw new Error("Cannot remove character marker in readonly mode");
      wt(R);
      let D = !1;
      return f.current?.update(
        () => {
          const Q = P();
          A(Q) && (D = Ny(Q, R, ce));
        },
        { discrete: !0 }
      ), D;
    },
    replaceCharacterMarker(R, D) {
      if (ve) throw new Error("Cannot replace character marker in readonly mode");
      wt(R), wt(D);
      let Q = !1;
      return f.current?.update(
        () => {
          const ne = P();
          A(ne) && (Q = FP(ne, R, D));
        },
        { discrete: !0 }
      ), Q;
    },
    extendCharacterMarker(R, D) {
      if (ve) throw new Error("Cannot extend character marker in readonly mode");
      wt(R), D?.forEach(
        (ne) => wt(ne)
      );
      let Q = !1;
      return f.current?.update(
        () => {
          const ne = P();
          A(ne) && (Q = zP(
            ne,
            R,
            D,
            ce
          ));
        },
        { discrete: !0 }
      ), Q;
    },
    insertMarker(R) {
      if (ve) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!Al(R, vt.extraValidMarkers))
        throw new Error(`Unsupported marker '${R}'`);
      f.current.update($i, { discrete: !0 });
      const D = Pl(
        R,
        b,
        ce,
        vt,
        fe,
        void 0,
        Z
      );
      return D.action({ editor: f.current, reference: r }), D.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (ye) return;
      const R = f.current;
      return R?.getEditorState().read(() => Ww(R));
    },
    applyMarkerMenuSelection(R, D) {
      if (ye) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (R.kind !== "closeTag" && !Al(R.marker, vt.extraValidMarkers))
        throw new Error(`Unsupported marker '${R.marker}'`);
      let Q;
      return f.current.update(() => {
        $i(), Q = r0(R, D, r, {
          expandedNoteKeyRef: b,
          viewOptions: ce,
          nodeOptions: vt,
          logger: l,
          styleInfo: Z
        });
      }), Q;
    },
    splitParagraphWithMarker(R) {
      if (ye) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        $i(), Bl(R, ce);
      });
    },
    commitTypedMarker(R, D) {
      if (ye) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let Q = !1;
      return f.current.update(() => {
        $i(), Q = e0(R, D), Q || l?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), Q;
    },
    commitTypedCloser(R) {
      if (ye) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let D = !1;
      return f.current.update(() => {
        $i(), D = Ob(R), D || l?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), D;
    },
    insertNote(R, D, Q) {
      mn("insert a note"), f.current?.update(
        () => {
          $i();
          const ne = mm(
            R,
            D,
            Q,
            r,
            ce,
            vt,
            fe
          );
          Bc(ne, b);
        },
        { discrete: !0 }
      );
    },
    selectNote(R) {
      f.current?.update(() => {
        const D = Or(R);
        D && (dl(D, ce), Bc(D, b));
      });
    },
    selectAfterNote(R) {
      const D = f.current;
      if (!D) return;
      const Q = !Un(), ne = Q ? $r(D, pr) : void 0;
      if (D.update(
        () => {
          Q && ht(pr);
          const Me = Or(R);
          Me && bm(Me);
        },
        { discrete: !0 }
      ), ne?.(), Q) {
        Ec(D);
        const Me = $r(
          D,
          pr
        );
        D.update(
          () => {
            ht(pr), D.dispatchCommand(Vt, void 0);
          },
          { discrete: !0 }
        ), Me();
      }
    },
    selectNoteTextOffset(R, D, Q) {
      f.current?.update(() => {
        const ne = Or(R);
        if (!ne) return;
        const Me = Q?.glyph;
        (Q?.field === "category" ? N_(ne, D, Me) || Kf(ne, 0) : Kf(ne, D, Me)) || dl(ne, ce), Bc(ne, b);
      });
    },
    getNoteOps(R) {
      const D = f.current;
      return D ? Ui(D, () => {
        const Q = Or(R);
        if (Q)
          return $a(Q);
      }) : void 0;
    },
    getOpsAfterNote(R) {
      const D = f.current;
      return D ? Ui(D, () => {
        const Q = Or(R);
        return Q ? uh(Q) : void 0;
      }) : void 0;
    },
    takeOpsAfterNote(R) {
      const D = f.current, Q = D ? Ui(D, () => {
        const Ve = Or(R);
        if (!Ve) return;
        const Ze = Du(Ve, "apply");
        return { ops: uh(Ve), notePosition: Ze };
      }) : void 0;
      if (!Q) return;
      const { ops: ne, notePosition: Me } = Q;
      if (ne.length === 0 || Me === void 0) return ne;
      const Fe = ne.reduce(
        (Ve, Ze) => Ve + (typeof Ze.insert == "string" ? Ze.insert.length : 1),
        0
      );
      return Ci([{ retain: Me + 1 }, { delete: Fe }], "remote", Zl), ne;
    },
    getNoteIndex(R) {
      const D = f.current;
      return D ? Ui(D, () => Ku(R)) : void 0;
    },
    getNoteKey(R) {
      const D = f.current;
      return D ? Ui(D, () => Or(R)?.getKey()) : void 0;
    },
    highlightNote(R) {
      h.current?.setHighlightedNote(R);
    },
    get toolbarEndRef() {
      return g;
    }
  };
  gn.current = Kn, ba(d, () => Kn), H(() => {
    const R = f.current;
    if (R)
      return R.registerUpdateListener(({ editorState: D }) => {
        D.read(() => {
          const Q = P();
          if (!A(Q) || !Q.isCollapsed()) return;
          const ne = Q.focus.getNode();
          v(ne) && (k.current = { key: ne.getKey(), offset: Q.focus.offset });
        });
      });
  }, []);
  const Si = Ee(
    (R, D, Q, ne, Me) => {
      if (kt) return;
      const Fe = Io.deserializeEditorState(R, ce);
      if (Fe) {
        const Ve = !Qt(m.current, Fe);
        if (Ve && (m.current = Fe), Ve || !Qt(N, Fe)) {
          const Ze = $f(ne, R), pt = Ze && !Me.read(() => le(Ze)) ? Ze : void 0;
          E.current = Fe, s?.(Fe, ne, "local", pt);
        }
      }
    },
    [N, s, ce, kt]
  );
  H(() => {
    const R = f.current;
    if (!(!R || !s))
      return R.registerUpdateListener(({ tags: D, dirtyElements: Q, dirtyLeaves: ne }) => {
        !D.has(ou) && (Q.size === 0 && ne.size === 0 || D.has(Ds) || !Sf(R)?.size) || queueMicrotask(() => {
          const Me = lr();
          !Me || Qt(E.current, Me) || (E.current = Me, s(Me, void 0, "local", void 0));
        });
      });
  }, [s, lr]);
  const _i = Ee(
    (R) => {
      te(R.contextMarker), o?.(R);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ De(wh, { initialConfig: Ar, children: [
      /* @__PURE__ */ M(bE, { isEditable: !ve }),
      /* @__PURE__ */ De("div", { className: "editor-container", children: [
        Y ? /* @__PURE__ */ M(ly, { onStateChange: _i }) : /* @__PURE__ */ M(
          "div",
          {
            className: "editor-toolbar-container" + (ve ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ M(
              pN,
              {
                ref: g,
                editorRef: gn,
                isReadonly: ve,
                onStateChange: _i
              }
            )
          }
        ),
        /* @__PURE__ */ De("div", { className: "editor-inner", children: [
          /* @__PURE__ */ M(Oh, { editorRef: f }),
          /* @__PURE__ */ M(
            sx,
            {
              contentEditable: /* @__PURE__ */ M(
                Nh,
                {
                  className: `editor-input usfm ${cv(ce).join(" ")}${ce.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ce.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: G
                }
              ),
              placeholder: /* @__PURE__ */ M(yN, {}),
              ErrorBoundary: Rh
            }
          ),
          Y && /* @__PURE__ */ M(yE, {}),
          /* @__PURE__ */ M($h, {}),
          r && n && /* @__PURE__ */ M(W0, { scrRef: r, onScrRefChange: n }),
          r && !Y && /* @__PURE__ */ M(
            vA,
            {
              trigger: O,
              scrRef: r,
              contextMarker: ue,
              getMarkerAction: (R) => Pl(
                R,
                b,
                ce,
                vt,
                fe,
                void 0,
                Z
              ),
              editableHarness: Mr
            }
          ),
          /* @__PURE__ */ M(
            rM,
            {
              scripture: N,
              scriptureRef: m,
              nodeOptions: vt,
              editorAdaptor: Cr,
              viewOptions: ce,
              logger: fe
            },
            K
          ),
          /* @__PURE__ */ M(gM, { onChange: i }),
          /* @__PURE__ */ M(
            rv,
            {
              onChange: Si,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Mx
            }
          ),
          /* @__PURE__ */ M(HP, { viewOptions: ce }),
          /* @__PURE__ */ M(ev, { ref: p, logger: fe }),
          /* @__PURE__ */ M(Uv, { viewOptions: ce }),
          /* @__PURE__ */ M(Zv, {}),
          /* @__PURE__ */ M(sE, {}),
          ce?.markerMode !== "editable" && /* @__PURE__ */ M(oE, { logger: fe }),
          /* @__PURE__ */ M(dE, { options: bo }),
          /* @__PURE__ */ M(F1, { limit: xe, viewOptions: ce }),
          /* @__PURE__ */ M(mE, {}),
          /* @__PURE__ */ M(xE, {}),
          /* @__PURE__ */ M(CE, {}),
          /* @__PURE__ */ M(n0, {}),
          /* @__PURE__ */ M(
            VE,
            {
              isEnabled: ce?.markerMode !== "editable",
              structureProtectionMode: se,
              copyLimit: xe,
              onHiddenContentDelete: I,
              logger: fe
            }
          ),
          /* @__PURE__ */ M(
            E0,
            {
              viewOptions: ce,
              getMarker: Ie,
              logger: fe,
              markerSettleDelayMs: pe,
              structureProtectionMode: se,
              copyLimit: xe
            }
          ),
          ce?.markerMode === "visible" && /* @__PURE__ */ M(K1, { viewOptions: ce, copyLimit: xe }),
          /* @__PURE__ */ M(
            O0,
            {
              styleInfo: Z,
              viewOptions: ce,
              logger: fe
            }
          ),
          /* @__PURE__ */ M(nM, { ref: h }),
          /* @__PURE__ */ M(
            iM,
            {
              expandedNoteKeyRef: b,
              nodeOptions: vt,
              viewOptions: ce,
              logger: fe
            }
          ),
          /* @__PURE__ */ M(KE, {}),
          /* @__PURE__ */ M(qv, {}),
          /* @__PURE__ */ M(Pv, {}),
          /* @__PURE__ */ M(B0, { viewOptions: ce, logger: fe }),
          /* @__PURE__ */ M(
            kM,
            {
              onParaMarkerMenuRequest: a,
              structureProtectionMode: se
            }
          ),
          /* @__PURE__ */ M(EM, {}),
          /* @__PURE__ */ M(cA, { structureProtectionMode: se }),
          /* @__PURE__ */ M(lA, { textDirection: z }),
          /* @__PURE__ */ M(dA, {}),
          /* @__PURE__ */ M(SA, {}),
          u
        ] }),
        X && /* @__PURE__ */ M(sN, {})
      ] })
    ] }, ce.verseLayout ?? "inline")
  );
}), EO = In(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ M(Zb, { ref: r, ...i });
});
function ek() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ya(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? ek() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function tk(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? ek() : r,
    quote: e,
    type: "thread"
  };
}
function fh(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function bN(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function jc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class kN {
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
    this._comments = t, jc(this);
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
          const c = fh(a);
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
    this._comments = i, jc(this);
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
          const c = fh(a);
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
    return this._comments = n, jc(this), t.type === "comment" ? {
      index: s,
      markedComment: bN(t)
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
    return t !== null ? t.doc.get("comments", Qd) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Zd(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Qd();
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
      Tx,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      gt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Cx) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const h = p.insert, g = p.retain, m = p.delete, b = u.parent, T = u === r ? void 0 : b instanceof Zd && this._comments.find((k) => k.id === b.get("id"));
              if (Array.isArray(h)) {
                const k = f;
                h.slice().reverse().forEach((E) => {
                  const S = E.get("id"), q = E.get("type") === "thread" ? tk(
                    E.get("quote"),
                    E.get("comments").toArray().map(
                      (K) => ya(
                        K.get("content"),
                        K.get("author"),
                        K.get("id"),
                        K.get("timeStamp"),
                        K.get("deleted")
                      )
                    ),
                    S
                  ) : ya(
                    E.get("content"),
                    E.get("author"),
                    S,
                    E.get("timeStamp"),
                    E.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(q, T, k);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof m == "number")
                for (let k = 0; k < m; k++) {
                  const E = T === void 0 || T === !1 ? this._comments[f] : T.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(E, T);
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
function xN(e) {
  const [t, r] = Te(e.getComments());
  return H(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function TN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = re(null);
  return H(() => {
    i.current !== null && i.current.focus();
  }, []), H(() => {
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
  }, [n, e]), /* @__PURE__ */ M("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ De("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function CN({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Xn(
    /* @__PURE__ */ M(TN, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function rk() {
  const [e, t] = Te(null), r = Ee(() => {
    t(null);
  }, []), n = et(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ M(CN, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = Ee(
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
  ...Ly,
  paragraph: "CommentEditorTheme__paragraph"
};
function _N(...e) {
  return e.filter(Boolean).join(" ");
}
function qn({
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
      className: _N(
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
function vN({
  className: e
}) {
  return /* @__PURE__ */ M(Nh, { className: e || "ContentEditable__root" });
}
function EN({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ M("div", { className: t || "Placeholder__root", children: e });
}
const ph = xa("INSERT_INLINE_COMMAND");
function MN({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = re(null), s = Ee(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return H(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), io(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ M("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ M("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ M("i", { className: "icon add-comment" }) }) });
}
function AN({ onEscape: e }) {
  const [t] = me();
  return H(() => t.registerCommand(
    iu,
    (r) => e(r),
    qr
  ), [t, e]), null;
}
function nk({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ M(wh, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: SN
  }, children: /* @__PURE__ */ De("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ M(
      bx,
      {
        contentEditable: /* @__PURE__ */ M(vN, { className: e }),
        placeholder: /* @__PURE__ */ M(EN, { children: s }),
        ErrorBoundary: Rh
      }
    ),
    /* @__PURE__ */ M(yx, { onChange: n }),
    /* @__PURE__ */ M($h, {}),
    t !== !1 && /* @__PURE__ */ M(hx, {}),
    /* @__PURE__ */ M(AN, { onEscape: r }),
    /* @__PURE__ */ M(gx, {}),
    i !== void 0 && /* @__PURE__ */ M(Oh, { editorRef: i })
  ] }) });
}
function ik(e, t) {
  return Ee(
    (r, n) => {
      r.read(() => {
        e(kx()), t(!xx(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function PN({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = Te(""), [s, o] = Te(!1), a = re(null), c = et(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = re(null), u = ok(), d = Ee(() => {
    e.getEditorState().read(() => {
      const g = P();
      if (A(g)) {
        l.current = g.clone();
        const m = g.anchor, b = g.focus, T = ax(
          e,
          m.getNode(),
          m.offset,
          b.getNode(),
          b.offset
        ), k = a.current;
        if (T !== null && k !== null) {
          const { left: E, bottom: S, width: N } = T.getBoundingClientRect(), q = cx(e, T);
          let K = q.length === 1 ? E + N / 2 - 125 : E - 125;
          K < 10 && (K = 10), k.style.left = `${K}px`, k.style.top = `${S + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const V = q.length, { container: ue } = c, te = c.elements, ye = te.length;
          for (let se = 0; se < V; se++) {
            const I = q[se];
            let Y = te[se];
            Y === void 0 && (Y = document.createElement("span"), te[se] = Y, ue.appendChild(Y));
            const z = `position:absolute;top:${I.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${I.left}px;height:${I.height}px;width:${I.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Y.style.cssText = z;
          }
          for (let se = ye - 1; se >= V; se--) {
            const I = te[se];
            ue.removeChild(I), te.pop();
          }
        }
      }
    });
  }, [e, c]);
  io(() => {
    d();
    const g = c.container, m = document.body;
    return m !== null ? (m.appendChild(g), () => {
      m.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), H(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        tk(g, [ya(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = ik(i, o);
  return /* @__PURE__ */ De("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ M(
      nk,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ De("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ M(qn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ M(
        qn,
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
  const [n, i] = Te(""), [s, o] = Te(!1), a = re(null), c = ok(), l = ik(i, o);
  return /* @__PURE__ */ De(Zn, { children: [
    /* @__PURE__ */ M(
      nk,
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
      qn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(ya(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(Qk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ M("i", { className: "send" })
      }
    )
  ] });
}
function sk({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ De(Zn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ De("div", { className: "Modal__content", children: [
      /* @__PURE__ */ M(
        qn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ M(
        qn,
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
function hh({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = Te(0);
  H(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const d = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(d);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = rk();
  return /* @__PURE__ */ De("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ De("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ M("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ De("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ M("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ De(Zn, { children: [
      /* @__PURE__ */ M(
        qn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ M(
              sk,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
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
function NN({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = me(), [a, c] = Te(0), [l, u] = rk(), d = et(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return H(() => {
    const f = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(f);
    };
  }, [a]), /* @__PURE__ */ M("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ De(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const m = document.activeElement;
            o.update(
              () => {
                const b = Array.from(g)[0], T = le(b);
                Ne(T) && T.selectStart();
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
          /* @__PURE__ */ De("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ De("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ M("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ M(
              qn,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ M(
                    sk,
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
            hh,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ M(
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
    ) : /* @__PURE__ */ M(
      hh,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function ON({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = re(null), o = r.length === 0;
  return /* @__PURE__ */ De("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ M("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ M(
      NN,
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
function ok() {
  const e = qh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function RN({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = qh(), [a] = me(), c = et(() => {
    const K = new kN(a, s);
    return r && K.registerOnChange(r), t?.(K), K;
  }, [a, s, r, t]), l = xN(c), u = et(() => /* @__PURE__ */ new Map(), []), [d, f] = Te(), [p, h] = Te([]), [g, m] = Te(!1), [b, T] = Te(!1), { yjsDocMap: k } = o;
  H(() => {
    if (e) {
      const K = e("comments", k);
      return c.registerCollaboration(K);
    }
    return () => {
    };
  }, [c, e, k]);
  const E = Ee(() => {
    a.update(() => {
      const K = P();
      K !== null && (K.dirty = !0);
    }), m(!1);
  }, [a]), S = Ee(
    (K, V) => {
      if (K.type === "comment") {
        const ue = c.deleteCommentOrThread(K, V);
        if (!ue)
          return;
        const { markedComment: te, index: ye } = ue;
        c.addComment(te, V, ye);
      } else {
        c.deleteCommentOrThread(K);
        const ue = V !== void 0 ? V.id : K.id, te = u.get(ue);
        te !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const ye of te) {
              const se = le(ye);
              Ne(se) && (se.deleteID(vn, ue), se.hasNoIDsForEveryType() && Bo(se));
            }
          });
        });
      }
    },
    [c, a, u]
  ), N = Ee(
    (K, V, ue, te) => {
      c.addComment(K, ue), V && (a.update(() => {
        A(te) && Zh(te, vn, K.id);
      }), m(!1));
    },
    [c, a]
  );
  H(() => {
    const K = [];
    let V;
    for (const ue of p) {
      const te = u.get(ue);
      if (te !== void 0)
        for (const ye of te) {
          const se = a.getElementByKey(ye);
          se !== null && (se.classList.add("selected"), K.push(se), V = window.setTimeout(() => {
            T(!0);
          }, 0));
        }
    }
    return () => {
      V !== void 0 && window.clearTimeout(V);
      for (const ue of K)
        ue.classList.remove("selected");
    };
  }, [p, a, u]), H(() => {
    if (!a.hasNodes([ut]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const K = /* @__PURE__ */ new Map();
    return $e(
      Ph(
        a,
        ut,
        (V) => Ks(V.getTypedIDs()),
        (V, ue) => {
          for (const [te, ye] of Object.entries(V.getTypedIDs()))
            ye.forEach((se) => {
              ue.addID(te, se);
            });
        }
      ),
      a.registerMutationListener(
        ut,
        (V) => {
          a.getEditorState().read(() => {
            for (const [ue, te] of V) {
              const ye = le(ue);
              let se = [];
              te === "destroyed" ? se = K.get(ue) ?? [] : Ne(ye) && (se = ye.getTypedIDs()[vn] ?? []);
              for (const I of se) {
                let Y = u.get(I);
                K.set(ue, se), te === "destroyed" ? Y !== void 0 && (Y.delete(ue), Y.size === 0 && u.delete(I)) : (Y === void 0 && (Y = /* @__PURE__ */ new Set(), u.set(I, Y)), Y.has(ue) || Y.add(ue));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: V, tags: ue }) => {
        V.read(() => {
          const te = P();
          let ye = !1, se = !1;
          if (A(te)) {
            const I = te.anchor.getNode();
            if (v(I)) {
              const Y = aT(I, vn, te.anchor.offset) ?? [];
              Y !== null && (h(Y), ye = !0), te.isCollapsed() || (f(I.getKey()), se = !0);
            }
          }
          ye || h((I) => I.length === 0 ? I : []), se || f(null), !ue.has("collaboration") && A(te) && m(!1);
        });
      }),
      a.registerCommand(
        ph,
        () => {
          const V = window.getSelection();
          return V !== null && V.removeAllRanges(), m(!0), !0;
        },
        ti
      )
    );
  }, [a, u]);
  const q = () => {
    a.dispatchCommand(ph, void 0);
  };
  return /* @__PURE__ */ De(Zn, { children: [
    g && Xn(
      /* @__PURE__ */ M(
        PN,
        {
          editor: a,
          cancelAddComment: E,
          submitAddComment: N
        }
      ),
      document.body
    ),
    d != null && !g && Xn(
      /* @__PURE__ */ M(
        MN,
        {
          anchorKey: d,
          editor: a,
          showComments: b,
          onAddComment: q
        }
      ),
      document.body
    ),
    n !== null && Xn(
      /* @__PURE__ */ M(
        qn,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => T(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ M("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && Xn(
      /* @__PURE__ */ M(
        ON,
        {
          comments: l,
          submitAddComment: N,
          deleteCommentOrThread: S,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function $N() {
  const e = re(void 0), t = Ee((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function qN(e, t) {
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
function IN(e, t) {
  H(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      qN(r, t);
    };
  }, [t, e]);
}
const MO = In(function(t, r) {
  const n = re(null), i = re(!0), s = re(null), [o, a] = Te(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: h, view: g } = {} } = t, m = (h ?? !1) || Gs(g), [b, T] = $N();
  IN(f, b), H(() => {
    if (process.env.NODE_ENV !== "production") {
      const S = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(S), p || console.warn(S);
    }
  }, [p]), ba(r, () => ({
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
    applyUpdate(S, N) {
      n.current?.applyUpdate(S, N);
    },
    replaceEmbedUpdate(S, N) {
      return n.current?.replaceEmbedUpdate(S, N);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    getSelectedParaMarker() {
      return n.current?.getSelectedParaMarker();
    },
    setSelection(S) {
      n.current?.setSelection(S);
    },
    setAnnotation(S, N, q, K, V) {
      typeof K == "function" || K === void 0 ? n.current?.setAnnotation(S, N, q, K, V) : n.current?.setAnnotation(S, N, q, K);
    },
    removeAnnotation(S, N) {
      n.current?.removeAnnotation(S, N);
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
    replaceCharacterMarker(S, N) {
      return n.current?.replaceCharacterMarker(S, N) ?? !1;
    },
    extendCharacterMarker(S, N) {
      return n.current?.extendCharacterMarker(S, N) ?? !1;
    },
    insertMarker(S) {
      return n.current?.insertMarker(S);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(S, N) {
      return n.current?.applyMarkerMenuSelection(S, N);
    },
    splitParagraphWithMarker(S) {
      n.current?.splitParagraphWithMarker(S);
    },
    commitTypedMarker(S, N) {
      return n.current?.commitTypedMarker(S, N) ?? !1;
    },
    commitTypedCloser(S) {
      return n.current?.commitTypedCloser(S) ?? !1;
    },
    insertNote(S, N, q) {
      n.current?.insertNote(S, N, q);
    },
    selectNote(S) {
      n.current?.selectNote(S);
    },
    selectAfterNote(S) {
      n.current?.selectAfterNote(S);
    },
    selectNoteTextOffset(S, N, q) {
      n.current?.selectNoteTextOffset(S, N, q);
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
      b.current?.setComments(S), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const k = Ee(
    (S, N, q, K) => {
      if (!u) return;
      const V = b.current?.getComments();
      u(S, V, N, q, K);
    },
    [b, u]
  ), E = Ee(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const S = b.current?.getComments();
    l(S);
  }, [b, i, l]);
  return H(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ M(mx, { children: /* @__PURE__ */ De(Zb, { ref: n, onUsjChange: k, ...f, children: [
    /* @__PURE__ */ M(
      RN,
      {
        setCommentStore: T,
        onChange: E,
        showCommentsContainerRef: m ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ M("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Yn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function LN(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function DN(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const UN = /^[#\w().,%/\s-]+$/;
function Xr(e) {
  return e != null;
}
const KN = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, FN = {
  left: "right",
  right: "left"
}, zN = "var(--usj-font-fallback, serif)";
function ak(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${LN(i)}"`).join(", ")}, ${zN}`;
}
const Jl = ".editor-input.usfm", BN = /^[\w.#[\]="':()>+~*,\s-]+$/;
function jN(e) {
  return BN.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Jl}".`
  ), Jl);
}
function VN(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(ak(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (UN.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Xr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Xr(t.firstLineIndent) && s.push(`text-indent: ${Yn(t.firstLineIndent * 20 * r)}vw`), Xr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Yn(t.leftMargin * 20 * r)}vw`), Xr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Yn(t.rightMargin * 20 * r)}vw`
  ), Xr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Yn(t.spaceBefore * r)}pt`), Xr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Yn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = KN[n ? FN[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const gh = { c: 150, ca: 133, cp: 150 };
function mh(e, t) {
  return e && Xr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function WN(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Xr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = mh(e.markers.c, gh.c);
  return ["ca", "cp"].map((i) => {
    const s = mh(
      e.markers[i],
      gh[i]
    ), o = Yn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function AO(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Jl } = t, s = jN(i), o = [], a = [];
  e.defaultFont && a.push(ak(e.defaultFont)), Xr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Yn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = VN(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${DN(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...WN(e, s)), o.join(`
`);
}
export {
  Mm as BLOCK_VERSE_VIEW_MODE,
  C as CategoryType,
  EO as Editorial,
  Ls as GENERATOR_NOTE_CALLER,
  Lh as HIDDEN_NOTE_CALLER,
  MO as Marginal,
  x as MarkerType,
  Em as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Yu as STANDARD_VIEW_MODE,
  Jo as defaultStyleInfo,
  vO as directionToNames,
  V_ as filterAndRankItems,
  AO as generateUsjCss,
  SO as getDefaultViewMode,
  La as getDefaultViewOptions,
  iw as getEnterMenuItems,
  nw as getMarkerMenuItems,
  _O as getViewMode,
  Zu as getViewOptions,
  Gs as isBlockVerseLayout,
  Cn as isInsertEmbedOpOfType,
  iv as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
