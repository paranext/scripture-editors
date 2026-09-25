import { jsx as S, jsxs as Ae, Fragment as Fn } from "react/jsx-runtime";
import { forwardRef as ni, useState as he, useRef as Z, useCallback as de, useEffect as j, useMemo as Fe, memo as kk, createContext as Jp, useContext as Yp, Children as xk, isValidElement as Tk, cloneElement as vk, useImperativeHandle as xl, useLayoutEffect as Vs } from "react";
import { assertSafeKey as Je, isValidBookCode as Ck, MARKER_OBJECT_PROPS as _k, USJ_VERSION as Lr, USJ_TYPE as Dr, indexesFromUsjJsonPath as Zt, isUsjTextContentLocation as Kn, usjJsonPathFromIndexes as at, isUsjPropertyValueLocation as No, isUsjClosingMarkerLocation as Ro, isUsjClosingAttributeMarkerLocation as qo, isUsjAttributeKeyLocation as $o, isUsjAttributeMarkerLocation as Tl, isUsjMarkerLocation as Xp, getUsjDocumentLocationTypeName as Sk, EMPTY_USJ as Qp } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as We, $parseSerializedNode as Hi, createCommand as vl, DecoratorNode as Ws, ElementNode as cr, isHTMLElement as ii, TextNode as Ve, $isRangeSelection as A, $isTextNode as _, createState as Hs, $getState as se, ParagraphNode as Cl, $isRootNode as xr, $createTextNode as xe, $getSelection as N, $setState as Mt, $isElementNode as O, $getCommonAncestor as Mk, $isLineBreakNode as pa, NODE_STATE_KEY as zn, HISTORIC_TAG as _l, $getEditor as Bn, $getNodeByKey as H, $getRoot as ge, $createRangeSelection as Gs, $createPoint as Td, $setSelection as fn, $getCharacterOffsets as Zp, KEY_DOWN_COMMAND as Vr, COMMAND_PRIORITY_HIGH as Ke, HISTORY_MERGE_TAG as eh, CLICK_COMMAND as ha, COMMAND_PRIORITY_EDITOR as jn, isDOMNode as th, $getNearestNodeFromDOMNode as Js, CONTROLLED_TEXT_INSERTION_COMMAND as Sl, PASTE_COMMAND as $r, COMMAND_PRIORITY_CRITICAL as Ir, CUT_COMMAND as Vn, DROP_COMMAND as Ml, DELETE_CHARACTER_COMMAND as Ek, DELETE_WORD_COMMAND as Pk, DELETE_LINE_COMMAND as Ak, $isDecoratorNode as rh, COPY_COMMAND as ga, COMMAND_PRIORITY_NORMAL as qi, SELECTION_CHANGE_COMMAND as Tr, BLUR_COMMAND as El, $addUpdateTag as Wn, SKIP_DOM_SELECTION_TAG as wk, CLEAR_HISTORY_COMMAND as Ok, COMMAND_PRIORITY_LOW as $t, $getPreviousSelection as Nk, $isRootOrShadowRoot as Rk, CAN_UNDO_COMMAND as qk, CAN_REDO_COMMAND as $k, $isNodeSelection as nh, DRAGSTART_COMMAND as Ik, $createNodeSelection as ih, getDOMSelectionFromTarget as Lk, $onUpdate as Dk, KEY_ENTER_COMMAND as sh, LineBreakNode as oh, $copyNode as Uk, FOCUS_COMMAND as Fk, createEditor as ah, KEY_ESCAPE_COMMAND as ch, INSERT_PARAGRAPH_COMMAND as Io, UNDO_COMMAND as lh, REDO_COMMAND as uh, CLEAR_EDITOR_COMMAND as Kk } from "lexical";
import { addClassNamesToElement as xi, removeClassNamesFromElement as Ga, $findMatchingParent as rt, $dfsIterator as dh, $dfs as Gi, mergeRegister as nt, registerNestedElementResolver as Pl, $unwrapNode as vc, IS_APPLE as Lo } from "@lexical/utils";
import { useLexicalNodeSelection as zk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as mr } from "fast-equals";
import Ni from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as Bk, $getHtmlContent as jk, $getLexicalContent as Vk } from "@lexical/clipboard";
import { TreeView as Wk } from "@lexical/react/LexicalTreeView";
import * as Hk from "react-dom";
import { createPortal as Dn } from "react-dom";
import { LexicalComposer as fh } from "@lexical/react/LexicalComposer";
import { ContentEditable as ph } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as hh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as gh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as mh } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Gk } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Jk, createDOMRange as Yk, createRectsFromDOMRange as Xk } from "@lexical/selection";
import { autoUpdate as Qk, computePosition as Zk, shift as ex, flip as tx } from "@floating-ui/dom";
import { $generateNodesFromDOM as rx } from "@lexical/html";
import { AutoFocusPlugin as nx } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as ix } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as yh, LexicalCollaboration as sx } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as ox } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as ax } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as cx, $isRootTextContentEmpty as lx } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as ux } from "@lexical/yjs";
import { Array as vd, Map as Cd, YArrayEvent as dx } from "yjs";
const Ja = (e) => We(Hi(e)), fx = {
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
function bh(e) {
  return fx[e];
}
const q = " ", Do = "​", Gt = q, Al = `${q}|`, br = "p", Uo = "+", kh = "-", Ys = "immutable-note-caller", Fo = "chapter", Cc = "verse", _d = "invalid", px = "text-spacing", hx = "formatted-font", gx = "marker-", wl = "external-usj-mutation", mx = "selection-change", Os = "cursor-change", Ol = vl("APP_PLACED_CARET_COMMAND"), _c = "annotation-change", Nl = "delta-change", xh = "marker-settle", yx = [
  wl,
  mx,
  Os,
  _c,
  Nl
], Hn = "zmsc-s", $i = "zmsc-e", bx = [Hn, $i], kx = [
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
  Hn,
  $i
], Th = 1, Rl = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], xx = Rl.filter((e) => e !== "sid" && e !== "eid");
class ir extends Ws {
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
    return new ir(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return Ch().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (kx.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
function vh(e) {
  return bx.includes(e);
}
function Ch(e, t, r, n, i) {
  return We(new ir(e, t, r, n, void 0, i));
}
function Ee(e) {
  return e instanceof ir;
}
const ql = "f", Tx = [
  // Footnote
  ql,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function bs(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const vx = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], _h = 1;
class $e extends cr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = ql, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (bs(t) === "crossref" ? kh : Uo), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => _x(t) ? {
        conversion: Cx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return $l().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Tx.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", bs(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", bs(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", bs(this.getMarker()))), { element: r };
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
function Cx(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: $l(t, r, n) };
}
function $l(e, t, r, n, i) {
  return We(new $e(e, t, r, n, i));
}
function _x(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return $e.isValidMarker(t) && e.classList.contains($e.getType());
}
function U(e) {
  return e instanceof $e;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Sc = {
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
function kr(e) {
  const t = Object.hasOwn(Sc, e) ? Sc[e] : void 0, r = Object.hasOwn(Sd, e) ? Sd[e] : void 0;
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
const Sh = "v", Mh = "c", Nn = "fig", Md = "tr", Mc = "esb", Eh = "esbe", Sx = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Mx = {
  "": "start",
  c: "center",
  r: "end"
};
function Ex(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Ed(e) {
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
const Px = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Ax(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Do && s + 1 < e.length && Ed(e[s + 1]) || (Ed(o) ? (r || (i = t.length, t += o), r = !0) : Px.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function wx(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Ox(e, t) {
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
const Nx = /^(?:qt[1-5]?|ts)-[se]$/;
function ma(e) {
  return Nx.test(e) || vh(e);
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
function Rx(e, t, r) {
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
      const m = e.indexOf("\\", i), y = m === -1 ? e.length : m;
      a(Ax(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: d } = Ox(e, i + 1);
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
    if (l === Sh) {
      const { word: m, next: y } = Ya(e, i);
      i = y, n.push({ kind: "verse", number: m });
      continue;
    }
    if (l === Mh) {
      const { word: m, next: y } = Ya(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: m });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === b.Note || h === void 0 && $e.isValidMarker(l)) {
      const { word: m, next: y } = Ya(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: m || "+" });
      continue;
    }
    if (h === b.Milestone || h === void 0 && ma(l)) {
      const m = Kx(e, c, l, i);
      if (m)
        n.push(m.token), m.ejectedText && o(m.ejectedText), i = m.next;
      else {
        const y = e.indexOf("\\", i), x = y === -1 ? e.length : y;
        o(e.slice(c, x)), i = x;
      }
      continue;
    }
    h === b.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : h === b.Character ? (u(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Ko(p) ? (u(), Ko(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (u(), !(r || s !== void 0) || l === Mc || l === Eh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Pd = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Ko(e) {
  return Object.hasOwn(Pd, e) ? Pd[e] : void 0;
}
function qx(e) {
  return Ko(e) !== void 0;
}
const $x = /([-\w]+)\s*=\s*"(.*?)"/g, Ix = /[\s\u200B]*[\n\r][\s\u200B]*/g, Ph = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Xs(e) {
  return Ph[e];
}
const Lx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Dx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ya(e, t, r = Ph[t]) {
  const n = e.replace(Ix, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll($x)];
  if (s.length > 0) {
    if (!Dx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Lx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Qs(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Ux(e) {
  const t = Wr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Fx(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ya(e.slice(n + 1, i), r, Qs(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Kx(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ya(s.slice(o + 1), r, Qs(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Fx(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function Rr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function Rn(e) {
  return e.content || (e.content = []), e.content;
}
function Wr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d;
  const u = () => d ? Rn(d) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? Rn(o[o.length - 1].object) : Rn(s);
    if (o.length > 0)
      return Rn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return u();
      i = { type: "para", marker: br, content: [] }, u().push(i);
    }
    return Rn(i);
  }, h = (ee) => {
    const B = p();
    typeof ee == "string" && typeof B[B.length - 1] == "string" ? B[B.length - 1] = B[B.length - 1] + ee : B.push(ee);
  }, m = (ee) => {
    for (let B = ee; B < o.length; B += 1) {
      const oe = o[B].object;
      oe.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, x = (ee) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, ee || (s.closed = "false"), s = void 0);
  }, C = () => {
    c = void 0, l = void 0;
  }, M = (ee) => {
    if (!l)
      return !1;
    const B = Sx.exec(ee);
    if (!B || !Ex(B))
      return !1;
    y();
    const [, oe, je, Xe] = B, fe = {
      type: "table:cell",
      marker: Xe ? ee.slice(0, ee.indexOf("-")) : ee,
      align: Mx[oe],
      content: []
    };
    return Xe && (fe.colspan = String(Number(Xe) + 1 - Number(je))), Rn(l).push(fe), i = fe, !0;
  }, R = (ee) => {
    d && (ee || (d.closed = "false"), d = void 0);
  };
  let E, L = "", T;
  const $ = () => {
    L && h(Rr(L)), L = "";
  }, W = (ee = !1) => {
    E?.type === "sidebar" ? L = "" : ee && L.endsWith(`
`) && (L = L.slice(0, -1)), E = void 0, $();
  }, G = () => {
    if (!T)
      return;
    const ee = { type: "char", marker: T.marker, content: [] };
    T.value && (ee.content = [Rr(T.value)]), p().push(ee), o.push({ object: ee }), T = void 0;
  }, te = (ee, B) => {
    f = !1, C(), y(), x(!1), i = { type: "para", marker: ee, content: [] }, B && (i.content = [Rr(B)]), u().push(i);
  }, Ne = () => {
    T && (te(T.marker, T.value), T = void 0);
  };
  let Y;
  const Te = () => {
    if (Y) {
      if (Y.shape === "para")
        te(Nn, Y.value);
      else {
        const ee = { type: "char", marker: Nn, content: [] };
        Y.value && (ee.content = [Rr(Y.value)]), p().push(ee), o.push({ object: ee });
      }
      Y = void 0;
    }
  }, qe = Rx(e, t?.getMarker ?? kr, n);
  for (let ee = 0; ee < qe.length; ee++) {
    const B = qe[ee];
    if (T) {
      if (B.kind === "text") {
        T.value += B.text;
        continue;
      }
      if (T.shape === "char" && B.kind === "end" && B.marker.replace(/^\+/, "") === T.marker) {
        if (T.value.trim() === "") {
          p().push({ type: "char", marker: T.marker, content: [] }), T = void 0, W();
          continue;
        }
        Object.assign(T.target, {
          [T.attrName]: Rr(T.value.trim())
        });
        const oe = T.marker;
        if (T = void 0, oe === "ca") {
          const je = qe[ee + 1];
          je?.kind === "text" && /^[\s\u200B]*$/.test(je.text) && ee++;
        }
        continue;
      }
      if (T.shape === "para" && (B.kind === "para" || B.kind === "chapter")) {
        const oe = T.value.replace(/[\s\u200B]+$/, "");
        oe === "" ? (te(T.marker), T = void 0) : (Object.assign(T.target, { [T.attrName]: Rr(oe) }), T = void 0);
      } else {
        E = void 0, (B.kind === "para" || B.kind === "chapter") && T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), T.shape === "para" ? Ne() : G(), ee--;
        continue;
      }
    }
    if (Y) {
      if (B.kind === "text" || B.kind === "optbreak") {
        Y.value += B.kind === "text" ? B.text : "//";
        continue;
      }
      if (B.kind === "end" && B.marker.replace(/^\+/, "") === Nn) {
        const oe = Y.value.indexOf("|"), je = oe >= 0 ? ya(Y.value.slice(oe + 1), Nn) : void 0;
        if (je) {
          const Xe = {};
          for (const [Nt, rs] of Object.entries(je))
            Xe[Nt === "src" ? "file" : Nt] = rs;
          const fe = {
            type: "figure",
            marker: Nn,
            ...Xe
          }, wr = Y.value.slice(0, oe);
          wr && (fe.content = [Rr(wr)]), h(fe), Y = void 0;
          continue;
        }
      }
      Te(), ee--;
      continue;
    }
    if (E)
      if (B.kind === "text") {
        if (B.text.includes(`
`) && /^[\s\u200B]*$/.test(B.text)) {
          L += B.text;
          continue;
        }
        W();
      } else if (B.kind === "charOpen" || B.kind === "para") {
        const oe = B.kind === "para" || !B.isNested ? Ko(B.marker) : void 0;
        if (oe && oe.targetTypes.includes(E.type)) {
          L = "", T = {
            target: E,
            attrName: oe.attrName,
            marker: B.marker,
            shape: oe.shape,
            value: ""
          };
          continue;
        }
        W(B.kind === "para");
      } else
        W(B.kind === "chapter");
    if (!s && !n && (B.kind === "charOpen" && !B.isNested && B.marker === Nn || B.kind === "para" && B.marker === Nn)) {
      y(), Y = { shape: B.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (B.kind) {
      case "text": {
        let oe = B.text;
        if (!s && oe.endsWith(`
`)) {
          const je = qe[ee + 1];
          (je === void 0 || je.kind === "para" || je.kind === "chapter") && (oe = oe.slice(0, -1));
        }
        oe && h(Rr(oe));
        break;
      }
      case "para": {
        const oe = !s && !n;
        if (oe && B.marker === Md) {
          y(), c || (c = { type: "table", content: [] }, u().push(c)), l = { type: "table:row", marker: Md, content: [] }, Rn(c).push(l), i = l, f = !1;
          break;
        }
        if (oe && M(B.marker))
          break;
        if (C(), !n && B.marker === Mc) {
          y(), x(!1), R(!1), d = { type: "sidebar", marker: Mc, content: [] }, r.push(d), i = void 0, E = d, f = !1;
          break;
        }
        if (B.marker === Eh && d) {
          y(), x(!1), R(!0), i = void 0;
          break;
        }
        te(B.marker);
        break;
      }
      case "verse": {
        x(!1);
        const oe = { type: "verse", marker: Sh, number: B.number };
        h(oe), E = oe;
        break;
      }
      case "chapter": {
        y(), x(!1), C(), R(!1), i = void 0;
        const oe = {
          type: "chapter",
          marker: Mh,
          number: B.number
        };
        r.push(oe), E = oe, f = !0;
        break;
      }
      case "note": {
        x(!1);
        const oe = p();
        s = { type: "note", marker: B.marker, caller: B.caller, content: [] }, a = o.length, oe.push(s), E = s;
        break;
      }
      case "charOpen": {
        if (!B.isNested && !s && !n && M(B.marker))
          break;
        if (!B.isNested) {
          const Xe = s ? a : 0;
          m(Xe), o.length = Xe;
        }
        const oe = p(), je = { type: "char", marker: B.marker, content: [] };
        oe.push(je), o.push({ object: je });
        break;
      }
      case "end": {
        const oe = B.marker.replace(/^\+/, ""), je = s ? a : 0, Xe = o.findLastIndex((fe, wr) => wr >= je && fe.object.marker === oe);
        Xe >= 0 ? (zx(o[Xe].object), m(Xe + 1), o.length = Xe) : s && s.marker === oe ? x(!0) : (m(je), o.length = je, h({ type: "unmatched", marker: `${B.marker}*` }));
        break;
      }
      case "milestone":
        h({ type: "ms", marker: B.marker, ...B.attributes });
        break;
      case "optbreak":
        h({ type: "optbreak" });
        break;
    }
  }
  if (Y && Te(), T)
    if (T.shape === "para") {
      const ee = T.value.replace(/[\s\u200B]+$/, "");
      ee === "" ? te(T.marker) : Object.assign(T.target, { [T.attrName]: Rr(ee) }), T = void 0;
    } else
      T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), G();
  y(), x(!1), R(!1);
  const Ft = (ee) => {
    for (const B of ee)
      typeof B != "string" && B.content && (Ft(B.content), B.content.length === 0 && delete B.content);
  };
  return Ft(r), r;
}
function zx(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ya(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
function we(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function He(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Wt(e, t) {
  let r = we(e);
  return t && (r += `${q}${t}`), r += " ", r;
}
function Lt(e) {
  return " " + e + q;
}
const Bx = 1;
class Sr extends Ve {
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
    return new Sr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return ft().updateFromJSON(t);
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
      version: Bx
    };
  }
}
function ft(e, t, r) {
  return We(new Sr(e, t, void 0, r));
}
function P(e) {
  return e instanceof Sr;
}
function Zs(e) {
  return e?.type === Sr.getType();
}
function Cn(e) {
  return e.getTextContent() === In(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function jx(e) {
  e.setTextContent(In(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function In(e, t, r = !1) {
  return t === "closing" ? He(e, r) : t === "selfClosing" ? He("") : we(e, r);
}
const ln = "internal-comment", Vx = [ln], Ah = Object.freeze({}), Ec = Object.freeze({}), Pc = Object.freeze({}), Ac = Object.freeze({}), wc = Object.freeze({}), Wx = 1, Ti = /* @__PURE__ */ new Map(), cs = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map();
class Qe extends cr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Ah, r, n, i, s, o) {
    super(o), this.__typedIDs = ko(t), this.__typedOnClicks = Xa(r), this.__typedOnRemoves = Qa(n), this.__typedOnMouseEnters = Za(i), this.__typedOnMouseLeaves = ec(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = ko(t.__typedIDs), n = Xa(t.__typedOnClicks), i = Qa(t.__typedOnRemoves), s = Za(t.__typedOnMouseEnters), o = ec(t.__typedOnMouseLeaves);
    return new Qe(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Vx.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Gn().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Wx
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
    return pe(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = ko(r.__typedIDs);
    r.__typedIDs = ko(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && zo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Xa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return pe(t) ? Ti.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = Qa(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return pe(t) ? cs.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = Za(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return pe(t) ? vi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ec(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return pe(t) ? Ci.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!pe(a))
      return;
    Je(t), Je(r);
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
    if (!pe(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && zo(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Gn(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Ti.delete(r.getKey()), cs.delete(r.getKey()), vi.delete(r.getKey()), Ci.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    const n = vi.get(this.getKey());
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ec) {
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
    Je(t), Je(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = nn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = nn(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Ec) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Pc) {
      const t = cs.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      cs.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    cs.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    Je(t), Je(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = nn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = nn(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Pc) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Ac) {
      const t = vi.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      vi.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    vi.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    Je(t), Je(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = nn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = nn(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Ac) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === wc) {
      const t = Ci.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Ci.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Ci.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    Je(t), Je(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = nn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = nn(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === wc) {
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
    const i = Hx(t, r);
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
    for (; pe(t) && wd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; pe(r) && wd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Gx(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Jx(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Yx(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Xx(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function ko(e = Ah) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Je(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Je(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function Xa(e) {
  if (!e || e === Ec)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Je(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Je(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Qa(e) {
  if (!e || e === Pc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Je(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Je(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Za(e) {
  if (!e || e === Ac)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Je(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Je(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ec(e) {
  if (!e || e === wc)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Je(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Je(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function nn(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Ad(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function Hx(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function wd(e, t) {
  const r = Ad(e), n = Ad(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Gx(e, t) {
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
function Jx(e, t) {
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
function Yx(e, t) {
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
function Xx(e, t) {
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
function Od(e) {
  return `external-${e}`;
}
function Gn(e, t, r, n, i) {
  return We(new Qe(e, t, r, n, i));
}
function pe(e) {
  return e instanceof Qe;
}
function eo(e) {
  return e?.type === Qe.getType();
}
function zo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Qx(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (pe(n))
      return n.getTypedIDs()[t];
    if (_(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (pe(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Jn = Hs("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), pn = Hs("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ce = Hs("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Mr = "marker-trailing-space", wh = 1, Zx = "attribute-run";
function tc(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Hr extends cr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Hr(r, n);
  }
  static importJSON(t) {
    return Oh(t.runKind).updateFromJSON(t);
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
    t.classList.add(Zx);
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
      version: wh
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
function Oh(e) {
  return We(new Hr(e));
}
function Le(e) {
  return e instanceof Hr;
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
], Rh = [
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
], eT = [
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
  ...Rh
], qh = 1, tT = ["type", "marker", "content"];
class _e extends cr {
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
    return new _e(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (eT.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Nh.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Rh.includes(t);
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
    return _e.isValidFootnoteMarker(t) || _e.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => nT(t) ? {
        conversion: rT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ur().updateFromJSON(t);
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
    return Nd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Nd(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: qh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Ur(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Nd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function rT(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Ur(t) };
}
function Ur(e, t) {
  return We(new _e(e, t));
}
function nT(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return _e.isValidMarker(t) && e.classList.contains(_e.getType());
}
function D(e) {
  return e instanceof _e;
}
function iT(e) {
  return e?.type === _e.getType();
}
const Bo = "v", $h = 1, sT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class mt extends Ve {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Bo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new mt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Ih().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Cc, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: $h
    };
  }
}
function Ih(e, t, r, n, i, s) {
  return We(new mt(e, t, r, n, i, s));
}
function Pe(e) {
  return e instanceof mt;
}
function Lh(e) {
  return e?.type === mt.getType();
}
const oT = /* @__PURE__ */ new Set(["closed"]);
function yr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !oT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Dh(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Uh(e) {
  const t = Object.keys(e).filter((n) => !xx.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Fh(e, t, r, n) {
  return Dh(
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
function Ts(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function aT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Ts(e) === void 0 && Kh(e) === void 0;
}
function Kh(e) {
  return e.getChildren().find((t) => _(t) && se(t, ce) === "attribute");
}
function Ns(e, t) {
  return to(e.getNextSibling(), t);
}
const cT = /^[ \u00A0]+$/;
function Il(e) {
  if (Cn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = we(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && cT.test(r.slice(t.length));
}
function to(e, t) {
  let r, n, i, s;
  return Le(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Il(e) && (r = e, e = e.getNextSibling()), _(e) && se(e, ce) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Cn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function lT(e) {
  let t = e;
  for (; pe(t); )
    t = t.getChildren()[0];
  return t;
}
function vr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = lT(t[r]);
  if (_(n) && n.getTextContent() === Lt(e.getCaller()))
    return n;
}
function Ll(e) {
  const t = vr(e);
  return t ? to(t.getNextSibling(), "cat") : {};
}
function si(e) {
  const t = e.getFirstChild();
  if (!(!_(t) || P(t)) && se(t, ce) !== "attribute")
    return t;
}
function zh(e) {
  const t = si(e);
  return t ? to(t.getNextSibling(), "ca") : {};
}
function Bh(e) {
  const t = si(e);
  if (!t)
    return;
  const r = to(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function jh(e) {
  const t = Bh(e);
  return t ? to(t.getNextSibling(), "cp") : {};
}
function Vh(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Pe(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || _(n) && se(n, ce) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Le(n)))
        return;
    }
}
function ba(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Le(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Il(s) && (t = s, s = s.getNextSibling()), _(s) && se(s, ce) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && Cn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const jo = "c", Wh = 1, uT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ut extends cr {
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
    return new Ut(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Hh().updateFromJSON(t);
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
      version: Wh
    };
  }
}
function Hh(e, t, r, n, i) {
  return We(new Ut(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof Ut;
}
function dT(e) {
  return e?.type === Ut.getType();
}
const Gh = 1;
class hn extends Cl {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new hn(t.__key);
  }
  static importJSON(t) {
    return Ht().updateFromJSON(t);
  }
  getMarker() {
    return br;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Gh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ht();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ht() {
  return We(new hn());
}
function Ze(e) {
  return e instanceof hn;
}
function ka(e) {
  return e?.type === hn.getType();
}
function Jh(e) {
  return Ze(e) && xr(e.getParent());
}
function Dl(e) {
  return pe(e) || Jh(e);
}
function Gr(e) {
  let t = e.getParent();
  for (; t && Dl(t); )
    t = t.getParent();
  return t;
}
function xa(e) {
  return D(Gr(e));
}
function Vo(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? xa(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function fT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Vo(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function ro(e) {
  return _(e) && e.getType() === Ve.getType() && se(e, ce) !== "attribute";
}
function Yh(e) {
  if (!ro(e) || !e.getTextContent().startsWith(q))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && pe(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!D(n))
    return 0;
  for (; pe(r); )
    r = r.getLastChild();
  return !P(r) || r.getMarkerSyntax() !== "opening" || Vo(r, n) === void 0 ? 0 : 1;
}
function Ul(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Vo(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? Vo(r, t) === !0 ? "spacer" : void 0 : ro(r) ? r.getTextContent().startsWith(q) ? void 0 : "prefix" : "spacer";
}
function pT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Ul(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Xh(e, t) {
  const r = N();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Qh(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Ul(t, e);
    if (r !== void 0 && !Xh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        _(n) && n.setTextContent(q + n.getTextContent());
      } else
        t.insertAfter(xe(q));
  });
}
function Zh(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Ul(t, e) !== void 0 && Xh(t, e)) : !1;
}
const eg = 1, hT = "marker", Fl = Hs("isGutterMarker", {
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
      span: (t) => bT(t) ? {
        conversion: gT,
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
    return r && ii(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: eg
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function gT(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Fr(t, r) };
}
function Fr(e, t) {
  return We(new Jr(e, t));
}
function mT(e) {
  return Mt(Fr(hT, e), Fl, !0);
}
function yT(e) {
  return kt(e) && se(e, Fl);
}
function bT(e) {
  return e?.tagName === "span";
}
function kt(e) {
  return e instanceof Jr;
}
function tg(e) {
  return e?.type === Jr.getType();
}
const kT = ["type", "marker", "content"], Oc = "unknown", rg = 1, xT = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class oi extends cr {
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
      [Oc]: (t) => vT(t) ? {
        conversion: TT,
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
    return xT.has(this.getTag());
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
    const t = document.createElement(Oc);
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
      version: rg
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
function TT(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Kl(t, r) };
}
function Kl(e, t, r) {
  return We(new oi(e, t, r));
}
function vT(e) {
  return e?.tagName.toLowerCase() === Oc;
}
function Oe(e) {
  return e instanceof oi;
}
const ng = "file", ig = "src", CT = "colspan", _T = "category", ST = "alt", MT = "closed", ET = "false";
function PT(e) {
  return e[MT] !== ET;
}
function AT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === ng ? ig : t,
    r
  ]));
}
function wT(e, t) {
  return e === "figure" && t === ig ? ng : t;
}
function OT(e, t) {
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
function Ta(e, t, r) {
  const n = r ?? {}, i = PT(n);
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
        opening: `\\${OT(t, n[CT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: yr(AT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [_T]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + yr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [ST]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: yr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: yr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const Pt = { wantsRun: !1, valueText: void 0 }, Yr = {};
function rc(e, t) {
  if (t === "va")
    return e;
  const r = Ns(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function zl(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (O(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function va(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!A(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function NT(e) {
  return Le(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : _(e) && se(e, ce) === "attribute";
}
function RT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!_(e) || se(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function nc(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Pe(t))
      return t;
    if (!NT(t))
      return;
  }
}
function Rd(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Pe(t),
    ownerOf: (t) => {
      if (Le(t))
        return t.getRunKind() === e ? nc(t) : void 0;
      const r = t.getParent();
      return Le(r) ? r.getRunKind() === e ? nc(r) : void 0 : RT(t) === e ? nc(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Pe(t))
        return Pt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Pt : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (t) => Pe(t) ? Ns(rc(t, e), e) : Yr,
    graceSite: (t, r) => Pe(t) ? !r.opener && !r.closer ? zl(rc(t, e)) : va(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Pe(t) ? rc(t, e) : void 0
    }
  };
}
const qT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => Pt,
  scanPieces: () => Yr,
  graceSite: (e) => D(e) && Zh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, $T = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!_(e) || se(e, ce) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || Ts(e) === void 0)
      return Pt;
    const t = yr(e.getUnknownAttributes() ?? {}, Xs(e.getMarker()));
    return t === "" ? Pt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: Kh(e) } : Yr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = Ts(e);
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
    insertRunBefore: (e) => D(e) ? Ts(e) : void 0
  }
};
function sg(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!_(e) || se(e, ce) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function IT(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = vr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!sg(n))
        return;
    }
}
const LT = {
  kind: "cat",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (Le(e))
      return e.getRunKind() === "cat" && U(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Le(t) ? t.getRunKind() === "cat" && U(t.getParent()) ? t.getParent() ?? void 0 : void 0 : sg(e) ? IT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || e.getIsCollapsed() !== !1)
      return Pt;
    const t = e.getCategory();
    return t === void 0 ? Pt : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => U(e) ? Ll(e) : Yr,
  graceSite: (e, t) => {
    if (!U(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = vr(e);
      return r !== void 0 && zl(r);
    }
    return va(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => U(e) ? vr(e) : void 0
  }
};
function DT(e) {
  return Le(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : _(e) && se(e, ce) === "attribute";
}
function UT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!_(e) || se(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function FT(e) {
  const t = e.getParent();
  if (!Ce(t))
    return;
  const r = si(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!DT(n))
        return;
    }
}
function qd(e) {
  const t = (r) => Ce(r) ? e === "ca" ? si(r) : Bh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ce(r),
    ownerOf: (r) => {
      if (Le(r))
        return r.getRunKind() === e && Ce(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Le(n) ? n.getRunKind() === e && Ce(n.getParent()) ? n.getParent() ?? void 0 : void 0 : UT(r) === e ? FT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ce(r))
        return Pt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Pt : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (r) => Ce(r) ? e === "ca" ? zh(r) : jh(r) : Yr,
    graceSite: (r, n) => {
      if (!Ce(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && zl(i);
      }
      return va(n);
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
function og(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return _(e) && se(e, ce) === "attribute";
}
function KT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ee(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!og(t))
      return;
  }
}
const zT = {
  kind: "milestone",
  ownerPredicate: (e) => Ee(e),
  ownerOf: (e) => {
    const t = Le(e) ? e.getRunKind() === "milestone" ? e : void 0 : Le(e.getParent()) ? e.getParent() : og(e) ? e : void 0;
    if (!t || Le(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Le(t) ? Ee(r) ? r : void 0 : KT(t);
  },
  expectedPieces: (e) => {
    if (!Ee(e))
      return Pt;
    const t = Fh(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = yr(t, Qs(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : q + r };
  },
  scanPieces: (e) => {
    if (!Ee(e))
      return Yr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = ba(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ee(e))
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
    return va(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Ee(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, BT = Ta("optbreak", void 0, void 0).opening, jT = {
  kind: "optbreak",
  ownerPredicate: (e) => Oe(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Oe(t) || t.getTag() !== "optbreak"))
      return _(e) || kt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: BT }),
  scanPieces: (e) => Oe(e) ? { value: e.getFirstChild() ?? void 0 } : Yr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, VT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Oe(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => Pt,
  scanPieces: () => Yr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, WT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => Pt,
  scanPieces: () => Yr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Rs = [
  qT,
  $T,
  Rd("va"),
  Rd("vp"),
  LT,
  qd("ca"),
  qd("cp"),
  zT,
  jT,
  VT,
  WT
], HT = new Map(Rs.map((e) => [e.kind, e]));
function Kr(e) {
  const t = HT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function gn(e) {
  for (const t of Rs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function ag(e) {
  return gn(e) !== void 0;
}
const qs = "id", cg = 1, GT = [
  "type",
  "marker",
  "code",
  "content"
];
class Jt extends cr {
  __marker = qs;
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
    return new Jt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return lg(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Ck(t);
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
      version: cg
    };
  }
}
function lg(e, t) {
  return We(new Jt(e, t));
}
function ct(e) {
  return e instanceof Jt;
}
function ug(e) {
  return e?.type === Jt.getType();
}
const dg = 1, JT = "c", fg = "span";
class Er extends Ws {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = JT, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Er(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => pg(t) ? {
        conversion: YT,
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
    const t = document.createElement(fg);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Fo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Fo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Wt(this.getMarker(), this.getNumber()) : this.getNumber();
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
  // Mutation
  isInline() {
    return !1;
  }
  isKeyboardSelectable() {
    return !1;
  }
}
function YT(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Bl(t) };
}
function Bl(e, t, r, n, i, s) {
  return We(new Er(e, t, r, n, i, s));
}
function pg(e) {
  return e ? e.classList.contains(Fo) && e.tagName.toLowerCase() === fg : !1;
}
function no(e) {
  return e instanceof Er;
}
function XT(e) {
  return e?.type === Er.getType();
}
const QT = [
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
  br,
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
], hg = 1, ZT = ["type", "marker", "content"];
class it extends Cl {
  __marker;
  __unknownAttributes;
  constructor(t = br, r, n) {
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
    return t !== void 0 && (QT.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: ev,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return $s().updateFromJSON(t);
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
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = $s(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function ev(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = $s(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function $s(e, t) {
  return We(new it(e, t));
}
function ie(e) {
  return e instanceof it;
}
function jl(e) {
  return e?.type === it.getType();
}
const gg = /[ \u00A0]{2,}/g;
function tv(e) {
  return [...e.matchAll(gg)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function rv(e) {
  return e.replace(gg, (t) => t[0]);
}
const nv = "​", Li = nv;
var $d;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})($d || ($d = {}));
var Id;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Id || (Id = {}));
function iv() {
  return xe(Li);
}
function sv(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Li, ""));
}
function io(e) {
  return e.length > 0 && e.includes(Li) && e.replaceAll(Li, "") === "";
}
function Vl(e) {
  return _(e) && io(e.getTextContent());
}
function mg(e) {
  return dT(e) || XT(e);
}
function ze(e) {
  return Ce(e) || no(e);
}
function yg(e, t) {
  return e.find((r) => ze(r) && r.getNumber() === t.toString());
}
function ov(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && ze(r));
}
function Ld(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function bg(e) {
  if (!e)
    return;
  if (ze(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !ze(t); )
    t = t.getPreviousSibling();
  if (t && ze(t))
    return t;
}
function sr(e) {
  return rt(e, U) ?? void 0;
}
function av(e) {
  return ct(e) || Ce(e) || D(e) || no(e) || Ze(e) || Ee(e) || ie(e) || U(e) || Pe(e) || Oe(e);
}
function kg(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function cv(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Yt(e) {
  return Re(e) || ct(e);
}
function Re(e) {
  return ie(e) || Ze(e);
}
function lv(e) {
  return jl(e) || ka(e);
}
function Di(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Yn(e, t) {
  const r = se(t, Jn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function uv(e, t) {
  const r = O(e) ? e : e.getParent(), n = O(t) ? t : t.getParent(), i = r && n ? Mk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function dv(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Xn(e) {
  return e?.type === Ve.getType();
}
function fv(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function pv(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function xg(e, t, r) {
  const n = we(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function hv(e) {
  const t = e[zn];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Tg(e) {
  return Zs(e) || tg(e) && e.textType === "marker" || Xn(e) && hv(e) === "attribute" ? "" : Xn(e) && e.text !== q ? e.text : iT(e) ? e.children.map((t) => Tg(t)).join("") : "";
}
function gv(e) {
  return e.map((r) => Tg(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Wl(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = vg(r);
    n !== Gt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function vg(e) {
  return P(e) || Pr(e) || _(e) && se(e, ce) === "attribute" ? "" : _(e) ? e.getTextContent() : O(e) ? e.getChildren().map((t) => vg(t)).join("") : "";
}
function Pr(e) {
  return kt(e) && e.getTextType() === "marker";
}
function Xt(e) {
  return P(e) || Pr(e);
}
function Dd(e, t) {
  mv(e, t), e.setMarker(t);
}
function mv(e, t) {
  const r = e.getMarker(), n = we(r), i = we(r, !0), s = He(r), o = He(r, !0), a = _e.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Xt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (Pr(c)) {
        const f = l.startsWith(we("", !0));
        c.setTextContent(d ? we(t, f) : He(t, f));
      }
    }
  });
}
function Be(e, t = _k) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ie(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Cg(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Hl(e) {
  if (!A(e))
    return Ud(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !O(t) || e.anchor.type === "text" && !_(t)))
    return t ?? void 0;
  try {
    return Ud(e) ?? t ?? void 0;
  } catch (n) {
    if (Cg(n))
      return t ?? void 0;
    throw n;
  }
}
function yv(e, t) {
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
function _g(e) {
  return !!e && e.includes("-");
}
function Sg(e) {
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
function mn(e) {
  if (!e)
    return !1;
  if (pa(e) || P(e) || Pr(e) || Le(e) || e.getType() === Ys || kt(e) && e.getTextType() === "attribute")
    return !0;
  const t = Gr(e);
  if (Ce(t) || _(e) && U(t) && vr(t)?.is(e))
    return !0;
  if (_(e)) {
    const r = se(e, ce);
    if (r === Mr || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === q || io(n))
      return !0;
  }
  return !1;
}
function Ca() {
  const e = xe(q);
  return Mt(e, ce, Mr), e.setMode("token"), e;
}
function bv(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function _n(e) {
  return _(e) && se(e, ce) === Mr;
}
function Mg(e) {
  const t = e.getFirstChild();
  if (!Xt(t) || t === null || _n(t.getNextSibling()))
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
function Eg(e) {
  if (Ce(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!mn(s)) {
      if (Dl(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (_(s) && s.getType() === Ve.getType()) {
        r ??= [], r.push(s);
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function kv(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = Yh(i), o = t ? tv(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, d]) => c + d - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function Pg(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function xv(e, t) {
  let r = t;
  for (const [n, i] of Pg(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function Fd(e, t) {
  let r = t;
  for (const [n, i] of Pg(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function xt(e, t) {
  return Eg(e).map((r) => r.type === "element" ? r : kv(r.nodes, t));
}
function Tv(e, t) {
  return Eg(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function Is(e, t, r) {
  const n = Gr(e);
  if (!n)
    return;
  const i = xt(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: xv(a, t) };
  }
}
function vv(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, Fd(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, Fd(r, t - r.start)];
}
function Ri(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (Jh(e)) {
    const s = e.getParentOrThrow();
    return n ? mn(n) ? Ri(e, t + 1, r) : Nc(s, n, r) : Ri(s, e.getIndexWithinParent() + 1, r);
  }
  const i = xt(e, r);
  return n ? mn(n) || Dl(n) && !Ag(i, n) ? Ri(e, t + 1, r) : Nc(e, n, r) : { type: "index", index: i.length };
}
function Cv(e, t) {
  const r = Gr(e);
  if (r && Ag(xt(r, t), e))
    return { parent: r, point: Nc(r, e, t) };
}
function Ag(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || Di(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || Di(n.node, t.getKey())));
}
function Nc(e, t, r) {
  const n = xt(e, r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type === "element") {
      if (s.node.is(t) || Di(s.node, t.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(t) || Di(o.node, t.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: n.length };
}
function _v(e) {
  return _(e) && se(e, ce) === "attribute";
}
function Sv(e) {
  if (!_(e))
    return !1;
  let t = e.getParent();
  for (; pe(t); )
    t = t.getParent();
  return U(t) ? vr(t)?.is(e) ?? !1 : Ce(t) ? si(t)?.is(e) ?? !1 : !1;
}
function Mv(e) {
  return Pe(e) || Ee(e) || Le(e) || Le(e.getParent()) || Sv(e);
}
function Jl(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, p = u ? c : l;
  let h, m;
  for (let y = 0; y < d; y++) {
    const x = a[y];
    if (O(m) && m.isParentOf(x))
      continue;
    if (P(x) || _n(x) || _v(x) || Mv(x)) {
      h = x.getParent(), m = void 0;
      continue;
    }
    const C = y === 0, M = y === d - 1;
    let R = null;
    if (_(x)) {
      const E = x.getTextContentSize(), L = Yh(x), T = Math.max(C ? f : 0, L), $ = M ? p : E;
      if (T === 0 && $ === 0 || L > 0 && $ <= L)
        continue;
      const W = x.splitText(T, $);
      R = W.length > 1 && (W.length === 3 || C && !M || $ === E) ? W[1] : W[0];
    } else {
      if (pe(x))
        continue;
      O(x) && x.isInline() && (R = x);
    }
    if (R !== null) {
      if (R && R.is(h))
        continue;
      const E = R.getParent();
      (E == null || !E.is(h)) && (m = void 0), h = E, m === void 0 && (m = Gn(), m.addID(t, r, n, i, s, o), R.insertBefore(m)), m.append(R);
    } else
      h = void 0, m = void 0;
  }
  t === ln && O(m) && (u ? m.selectStart() : m.selectEnd());
}
const Wo = "unmatched", wg = 2;
function vs(e) {
  return `\\${e}`;
}
class Xr extends Ve {
  __marker;
  constructor(t = "", r) {
    super(vs(t), r), this.__marker = t, this.__mode = 1;
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
      [Wo]: (t) => Pv(t) ? {
        conversion: Ev,
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
      text: t.text ?? vs(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = vs(t), r;
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
    const t = document.createElement(Wo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(_d), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: wg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Og(e) {
  return e.getTextContent() === vs(e.getMarker());
}
function Kd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function Ev(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Yl(t) };
}
function Yl(e) {
  return We(new Xr(e));
}
function Pv(e) {
  return e?.tagName.toLowerCase() === Wo;
}
function Sn(e) {
  return e instanceof Xr;
}
const Ng = "table", Rc = "immutable-table", Rg = 1, Av = ["type", "marker", "content"];
class ai extends cr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Rc;
  }
  static clone(t) {
    return new ai(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return wv().updateFromJSON(t);
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
      type: Rc,
      ...t !== void 0 && { unknownAttributes: t },
      version: Rg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function wv(e) {
  return We(new ai(e));
}
function qg(e) {
  return e instanceof ai;
}
function Ov(e) {
  return e?.type === Rc;
}
const $g = "table:row", zd = "immutable-table-row", Ig = 1, qc = "tr", Nv = ["type", "marker", "content"];
class ci extends cr {
  __marker;
  __unknownAttributes;
  constructor(t = qc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return zd;
  }
  static clone(t) {
    return new ci(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return Rv().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? qc).setUnknownAttributes(t.unknownAttributes);
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
      type: zd,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Ig
    };
  }
}
function Rv(e, t) {
  return We(new ci(e, t));
}
function Lg(e) {
  return e instanceof ci;
}
const Dg = "table:cell", Bd = "immutable-table-cell", Ug = 1, $c = "tc1", qv = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function $v(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class li extends cr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = $c, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Bd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new li(r, n, i, s, o);
  }
  static importJSON(t) {
    return Iv().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? $c).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = $v(this.__align);
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
      version: Ug
    };
  }
}
function Iv(e, t, r, n) {
  return We(new li(e, t, r, n));
}
function Lv(e) {
  return e instanceof li;
}
const Ic = /* @__PURE__ */ new WeakMap();
function jd(e, t) {
  t ? Ic.set(e, t) : Ic.delete(e);
}
function Xl(e) {
  return Ic.get(e);
}
function _a(e, t) {
  const r = e.getChildAtIndex(t);
  return _(r) ? r : void 0;
}
function or(e, t) {
  const r = _a(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Ls(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function Dv(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function Uv(e) {
  return Ls(e) ? void 0 : { closed: "false" };
}
function Fv(e, t, r, n) {
  const i = t.getMarker(), s = xa(t), o = Dv(t);
  if (n) {
    e.append(ft(i, "opening", s));
    const [a] = r;
    ro(a) && !a.getTextContent().startsWith(q) && a.setTextContent(q + a.getTextContent());
  }
  e.append(...r), o && e.append(ft(i, "closing", s));
}
function Qn(e) {
  return rt(e, D) ?? void 0;
}
function Ql(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Lc(e) {
  const t = Fg(e);
  return e.getChildren().every((r) => P(r) || t && se(r, ce) === "attribute" || _(r) && r.getTextContent().replaceAll(q, "") === "");
}
function Fg(e) {
  return Ls(e);
}
function Kv(e, t) {
  const r = e.getUnknownAttributes(), n = r ? yr(r, Xs(e.getMarker())) : "";
  n !== "" && t.insertAfter(xe(n)), e.remove();
}
function zv(e, t) {
  if (Ls(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ft(e.getMarker(), "closing", xa(e)));
}
function Bv(e, t) {
  return D(e) && !Ls(e) && !Ls(t);
}
function jv(e, t, r) {
  Lc(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && ro(n) && !n.getTextContent().startsWith(q) && n.setTextContent(q + n.getTextContent()), e.append(...t);
}
function Vv(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Fg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = P(l) && l.getMarkerSyntax() === "closing", f = s && se(l, ce) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = Bv(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      jv(e, o, n);
    else {
      const l = Ur(t.getMarker(), Uv(t));
      Fv(l, t, o, n), e.insertAfter(l), Lc(l) ? l.remove() : c = l;
    }
  i && !a && zv(t, n), Lc(t) && Kv(t, c);
}
function Ui(e, t) {
  let r = e.getParent();
  for (; D(r); )
    Vv(e, r, t), r = e.getParent();
}
function Zl(e) {
  if (_(e) && !P(e)) {
    const t = e.getTextContent().startsWith(q) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (O(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      Zl(t);
      return;
    }
    e.selectEnd();
  }
}
const Un = /* @__PURE__ */ new WeakMap();
function Wv(e, t, r) {
  const n = { owners: t, rederive: r };
  return Un.set(e, n), () => {
    Un.get(e) === n && Un.delete(e);
  };
}
function Kg(e, t, r) {
  const n = Un.get(e);
  !n?.rederive || !r.has(_l) || n.derivedFor === t || (n.rederive(t), n.derivedFor = t);
}
function Vd(e) {
  return Un.get(e)?.owners;
}
function Hv(e) {
  return Un.get(Bn())?.owners.has(e.getKey()) ?? !1;
}
function Gv(e) {
  Un.get(Bn())?.owners.add(e.getKey());
}
function Jv(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Dc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Wd(e) {
  return /^\s/.test(e);
}
function eu(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Wd(t) || !Wd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Sa(e, t, r) {
  return r.wantsRun ? eu(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : Jv(t);
}
function Yv(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return eu(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function zg(e, t) {
  return !Dc(e.scanPieces(t));
}
function so(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Sa(e, n, r))
    return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Di(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function Xv(e, t, r, n) {
  return !r.wantsRun || Dc(n) || Xl(Bn()) === "remote" ? !1 : Bn().getEditorState().read(() => {
    const i = H(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Dc(e.scanPieces(i));
  });
}
function Qv(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Hd(e) {
  const t = xe(e);
  return Mt(t, ce, "attribute"), t;
}
function Zv(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Oh(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function eC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    _(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Hd(n.valueText));
    return;
  }
  const l = Zv(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = ft(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : _(u) ? eu(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Hd(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(ft(a === "selfClosing" ? "" : o(t), a));
}
function Ds(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Sa(e, i, n) && !Hv(t)) {
    if (Xv(e, t, n, i)) {
      Gv(t);
      return;
    }
    if (!so(e, t)) {
      if (!n.wantsRun) {
        Qv(i);
        return;
      }
      eC(e, t, i, n);
    }
  }
}
function tC(e, t, r) {
  Ds(e, t), t.isAttached() && so(e, t) && r.add(t.getKey());
}
function Bg(e) {
  if (!_(e))
    return !1;
  if (P(e) || Pe(e) || Sn(e))
    return !0;
  const t = se(e, ce);
  return t === "attribute" || t === Mr;
}
function tu(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Cn(e) && D(e.getParent())) : !1;
}
function rC() {
  const e = N();
  return A(e) ? tu(e.focus.getNode(), e.focus.offset) : !1;
}
function jg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return _(t) && Bg(t) ? t : void 0;
}
function nC(e) {
  const t = jg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function iC(e) {
  const t = jg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Gd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Jd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function sC(e, t) {
  let r = iC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!_(n))
      return;
    if (!Bg(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Yd(e, t) {
  const r = sC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Vg(e) {
  if (e.isCollapsed()) {
    const a = nC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Gd(r), Gd(n)], s = Yd(r, "next"), o = Yd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Jd(r, i[0]), Jd(n, i[1]), !1) : !0;
}
const Wg = Hs("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), Ho = "verse-block", Hg = 1, oC = "verse-block";
class Ji extends cr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Ho;
  }
  static clone(t) {
    return new Ji(t.__number, t.__key);
  }
  static importJSON(t) {
    return aC().updateFromJSON(t);
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
    return Sg(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(oC), Xd(t, this.__number), t;
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
      type: Ho,
      number: this.getNumber(),
      version: Hg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Xd(e, t) {
  const { start: r, end: n } = Sg(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Qd(e, "data-verse-start", i ? r : NaN), Qd(e, "data-verse-end", i ? n : NaN);
}
function Qd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function aC(e) {
  return We(new Ji(e));
}
function Zn(e) {
  return e instanceof Ji;
}
function cC(e) {
  return e?.type === Ho;
}
const lC = [
  Jt,
  Er,
  Ut,
  mt,
  _e,
  $e,
  ir,
  Sr,
  oi,
  Jr,
  Xr,
  it,
  hn,
  ai,
  ci,
  li,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Hr,
  {
    replace: Cl,
    with: () => Ht(),
    withKlass: hn
  }
], Go = {
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
}, uC = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function dC(e) {
  if (!e)
    return kr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: kr(r)?.category ?? k.Uncategorized,
      type: uC[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: kr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Zd(e, t, r) {
  const n = {
    type: Dr,
    version: Lr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return ka(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Gg = "v", Jg = 1, fC = "verse-selected";
class wt extends Ws {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Gg, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => gC(t) ? {
        conversion: hC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ru().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Cc, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Cc, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Wt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Do + this.getNumber() + Do
    );
    return S(pC, { nodeKey: this.getKey(), text: t });
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
      version: Jg
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Cg(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function pC({ nodeKey: e, text: t }) {
  const [r] = zk(e);
  return S("span", { className: r ? fC : void 0, children: t });
}
function hC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: ru(t) };
}
function ru(e, t, r, n, i, s) {
  return We(new wt(e, t, r, n, i, s));
}
function gC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Gg;
}
function ui(e) {
  return e instanceof wt;
}
function mC(e) {
  return e?.type === wt.getType();
}
function ye(e) {
  return Pe(e) || ui(e);
}
function Yg(e) {
  return Lh(e) || mC(e);
}
function yC(e) {
  return bC(e).find((t) => ie(t));
}
function bC(e) {
  return e.some(Zn) ? e.flatMap((t) => Zn(t) ? t.getChildren() : t) : e;
}
function Ma(e) {
  return O(e) ? Zn(e) ? e.getChildren().flatMap(Ma) : e.getChildren() : [];
}
function kC(e, t) {
  return Ma(e).find((i) => ye(i) && Gl(t, i.getNumber()));
}
function xC(e, t) {
  return t === 0 ? yC(e) : e.map((r) => kC(r, t)).filter((r) => r)[0];
}
function Jo(e) {
  return Ma(e).find((r) => ye(r));
}
function Xg(e, t) {
  if (!O(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ye(i))
      return i;
  }
}
function TC(e) {
  const t = e.getParent();
  if (t && O(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ye(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !ze(r); ) {
    const n = Jo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Uc(e) {
  return Ma(e).findLast((t) => ye(t));
}
function vC(e) {
  if (!Pe(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function CC(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && O(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function _C(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return CC(t, e, r);
  if (_(e)) {
    const n = vC(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function ef(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function SC(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!A(t))
    return ef(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return _C(e, t) ? { verseNum: n } : ef(e);
}
function MC(e) {
  return av(e) || ui(e);
}
function nu(e) {
  if (_(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function Qg(e) {
  if (_(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Zg(e, t) {
  return e.getEditorState().read(() => !H(t));
}
function EC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = iu(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && O(i) && O(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && O(i)) {
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
      let s = tf(i);
      for (; s && !ze(s); ) {
        const o = Jo(s);
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
      const o = Jo(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && ze(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function PC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = iu(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && O(i) && (n = Xg(i, r.getIndexWithinParent())), !n && i) {
      let o = rf(i);
      for (; o && !ze(o); ) {
        const a = Uc(o);
        if (a) {
          n = a;
          break;
        }
        o = rf(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !ze(s); ) {
      const o = Uc(s);
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
function iu(e, t) {
  if (O(e) && A(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ye(n))
      return n;
    const i = Xg(e, t.anchor.offset);
    if (i)
      return i;
    const s = Jo(e);
    if (s)
      return s;
  }
  return su(e);
}
function su(e) {
  if (!e || ze(e))
    return;
  if (ye(e))
    return e;
  let t = Ld(e);
  for (; t; ) {
    if (ze(t))
      return;
    if (ye(t))
      return t;
    const r = Uc(t);
    if (r)
      return r;
    t = Ld(t);
  }
}
const AC = ["style"], wC = ["style", "code"], Yo = ["style", "cid"], OC = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], NC = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], RC = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], qC = ["style", "caller", "category", "contents"], $C = ["tag", "marker", "contents"], IC = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Us = `
`;
function LC(e, t) {
  const r = H(e);
  if (!Dt(r))
    return;
  const n = em(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function em(e, t = "delta-doc") {
  if (!e)
    return;
  const r = dh();
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
      if (zr(l) || Dt(l))
        return n;
      Yt(l) && (a = l);
    }
    if (Yt(l) && (i.includes(l) || i.push(l)), tm(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += ou(l, t);
  }
  if (a)
    return n;
}
function nf(e, t, r = "delta-doc") {
  if (e.length < 2 || !FC(e[0]) || !UC(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => DC(n, r)?.getKey());
}
function DC(e, t = "delta-doc") {
  const r = dh();
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
    if (Yt(a) && (i.includes(a) || i.push(a)), tm(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = ou(a, t);
    if (zr(a) && l > 0 && e >= n && e < n + l || Dt(a) && n === e)
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
  return e ? t ? !Di(t.node, e.getKey()) : !0 : !1;
}
function zr(e) {
  return _(e) && !Dt(e);
}
function Dt(e) {
  return ze(e) || ye(e) || Ee(e) || U(e) || Oe(e) || Sn(e);
}
function an(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function UC(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && IC.includes(t);
}
function FC(e) {
  return e.retain != null && typeof e.retain == "number";
}
function tm(e, t) {
  return U(e) || Oe(e) ? !0 : t === "apply" && O(e) && Dt(e);
}
function rm(e) {
  const t = e.getParent();
  return Xt(e) && ie(t) && t.getFirstChild() === e;
}
function Fc(e) {
  const t = e.getParent();
  return t !== null && rt(t, Le) !== null;
}
function KC(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === Gt && t.getChildrenSize() === 1;
}
function zC(e) {
  const t = e.getParent();
  if (!U(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === Lt(t.getCaller());
}
function BC(e) {
  return !ag(e) && ou(e, "delta-doc") === e.getTextContentSize();
}
function ou(e, t) {
  if (Dt(e))
    return 1;
  if (_(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (Vl(e) || rm(e) || se(e, ce) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    se(e, ce) === "attribute" || Fc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Al) || KC(e) || zC(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Kc(e, t) {
  const r = { insert: e.__text }, n = se(e, pn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = nm(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function sf(e) {
  const t = new Ni();
  return e.isEmpty() || e.read(() => {
    const r = ge();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Ze(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = jC();
    for (const s of i)
      t.push(s);
  }), t;
}
function au(e, t) {
  const r = [], n = Gi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...of(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...of(c, n.length, n, i, s, o, a));
  return r;
}
function jC() {
  return au();
}
function of(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return VC(e, a, n), WC(e, a, i, s, o), HC(e, t, r, i, o, s, a), ze(e) && a.push(XC(e)), ye(e) && a.push(ZC(e)), Ee(e) && a.push(e_(e)), Sn(e) && a.push(t_(e)), JC(e, a, s), GC(e, a, s), s_(c, s), a;
}
function VC(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ct(n) ? t.push(YC(n)) : ie(n) ? t.push(QC(n)) : Ze(n) && t.push({ insert: Us });
  }
  Yt(e) && (r.includes(e) || r.push(e));
}
function WC(e, t, r, n, i) {
  if (!_(e) || Pe(e) || Sn(e))
    return;
  const s = e.getParent();
  if (U(s) && s.getFirstChild() === e)
    return;
  const o = sr(e) !== void 0;
  if (P(e) && (o || rm(e) || Fc(e) || ag(e)) || se(e, ce) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (io(a))
    return;
  const c = e.getPreviousSibling();
  if (U(s) && P(c) && c === s.getFirstChild() && a === Lt(s.getCaller()))
    return;
  const l = D(s) ? s : void 0, d = l?.getFirstChild();
  o && l && P(d) && c === d && a.startsWith(q) && (a = a.slice(1));
  const u = a.startsWith(Al) || se(e, ce) === "attribute" || Fc(e), f = !!l && a === Gt && l.getChildrenSize() === 1, p = Ea(e, n), h = p ? r.filter((x) => p.children.includes(x)) : r, m = Kc(e, h);
  if (m.insert = a, p) {
    if (!a || a === q || u)
      return;
    p.contentsOps?.push(m);
  } else
    f || u || t.push(m);
  const y = a !== "" && !f && !(u && l);
  if (r.length > 0 && y)
    for (const x of r)
      i.add(x);
}
function HC(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Fi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = n_(c), d = Ea(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function GC(e, t, r) {
  if (!U(e))
    return;
  const n = r_(e), i = Ea(e, r), s = {
    node: e,
    children: Gi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function JC(e, t, r) {
  if (!Oe(e))
    return;
  const n = i_(e), i = Ea(e, r), s = {
    node: e,
    children: Gi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Mn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function YC(e) {
  const t = { style: qs, code: e.__code };
  return Mn(t, e), { insert: Us, attributes: { book: t } };
}
function XC(e) {
  const t = { style: jo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Mn(t, e), { insert: { chapter: t } };
}
function QC(e) {
  const t = { style: e.__marker };
  return Mn(t, e), { insert: Us, attributes: { para: t } };
}
function ZC(e) {
  const t = { style: Bo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Mn(t, e), { insert: { verse: t } };
}
function e_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Mn(t, e), { insert: { milestone: t } };
}
function t_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function r_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Mn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = se(e, pn);
  return n && (r.attributes = { segment: n }), r;
}
function n_(e) {
  const t = { insert: "" }, r = nm([e]);
  return r && (t.attributes = { char: r }), t;
}
function i_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Mn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Ea(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function s_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Fi(t[r].node, e) && t.splice(r, 1);
}
function nm(e) {
  if (e.length === 0)
    return;
  const t = e.map(o_);
  return t.length === 1 ? t[0] : t;
}
function o_(e) {
  const t = { style: e.__marker }, r = se(e, Jn);
  return r && (t.cid = r), Mn(t, e), t;
}
const im = 1;
class nr extends Ws {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Uo, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return Ys;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new nr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => c_(t) ? {
        conversion: a_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return cu().updateFromJSON(t);
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
    return r && ii(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => l_(t, n), (l) => u_(t, n, s, l), () => d_(t, n), () => f_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return S("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Uo && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === kh && i ? (
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
      version: im
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function a_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: cu(t, r) };
}
function cu(e, t, r) {
  return We(new nr(e, t, r));
}
function c_(e) {
  return e ? e.classList.contains(nr.getType()) : !1;
}
function Qt(e) {
  return e instanceof nr;
}
function l_(e, t) {
  return e.getEditorState().read(() => {
    const r = H(t);
    if (!U(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function u_(e, t, r, n) {
  e.update(() => {
    const i = H(t);
    if (!U(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = H(r);
    if (!Qt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function d_(e, t) {
  return e.getEditorState().read(() => {
    const r = H(t);
    if (!U(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return au(r);
  });
}
function f_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of Gi())
      if (U(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const p_ = [
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
], h_ = ["†"], lu = "formatted", sm = "unformatted", om = "paragraph-structure", am = "standard", cm = "block-verse", g_ = {
  [lu]: "Formatted",
  [sm]: "Unformatted",
  [om]: "Paragraph Structure",
  [am]: "Standard",
  [cm]: "Block Verse"
};
function Yi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let uu, du;
function m_(e) {
  const t = lm(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  uu = e, du = t;
}
m_(lu);
const RO = () => uu, Pa = () => du;
function lm(e) {
  let t;
  switch (e ?? uu) {
    case lu:
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
    case am:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case cm:
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
  const t = af(e);
  return Object.keys(g_).find((r) => mr(af(lm(r)), t));
}
const y_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function af(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...y_, ...t };
}
function Ot(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function b_(e) {
  if (e)
    return Fs(e) ? wt : e.markerMode === "editable" ? mt : wt;
}
function Fs(e) {
  return e?.verseLayout === "block";
}
function k_(e) {
  const t = [], r = e ?? du;
  return r && (t.push(`${gx}${r.markerMode}`), r.hasSpacing && t.push(px), r.isFormattedFont && t.push(hx)), t;
}
const x_ = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Xo(e) {
  return x_.exec(e)?.[1] ?? e;
}
function Cs(e, t) {
  const r = e.jsonPath.slice(Xo(e.jsonPath).length);
  return { ...e, jsonPath: `${at(t)}${r}` };
}
function um(e) {
  const t = [];
  let r = 0;
  for (const c of ge().getChildren())
    if (!mn(c))
      if (Zn(c)) {
        const l = r;
        c.getChildren().filter((d) => !mn(d)).forEach((d, u) => t.push({ node: d, blockPrefix: [l, u], blockBase: 0 })), r += 1;
      } else Ze(c) ? (t.push({ node: c, blockPrefix: [], blockBase: r }), r += xt(c, e).length) : (t.push({ node: c, blockPrefix: [r], blockBase: 0 }), r += 1);
  const n = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = O(c.node) ? xt(c.node, e).length : 0, d = se(c.node, Wg), u = Ze(c.node), f = d === void 0 || d !== a;
    f && (n.length > 0 && (n[n.length - 1].isSourceEnd = !0), s = i, o = 0, u || (i += 1)), n.push({
      ...c,
      count: l,
      usjPrefix: u ? [] : [s],
      usjBase: u ? s + o : o,
      isSourceStart: f,
      isSourceEnd: !1
    }), u && (i += l), o += l, a = d;
  }
  return n.length > 0 && (n[n.length - 1].isSourceEnd = !0), n;
}
function dm(e, t) {
  return e.length >= t.length && t.every((r, n) => e[n] === r);
}
function fm(e, t, r, n = !0) {
  const i = e.jsonPath.slice(Xo(e.jsonPath).length);
  let s = Zt(Xo(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!dm(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return n && i === "" && O(o.node) && (!o.isSourceStart || Ze(o.node)) ? fm(r(o.node), t, r, !1) : Cs(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return Cs(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function T_(e, t, r) {
  for (const n of t) {
    if (n.usjPrefix.length === 0) {
      if (e < n.usjBase || e >= n.usjBase + n.count)
        continue;
      const o = e - n.usjBase + n.blockBase;
      return n.blockPrefix.length === 0 ? { jsonPath: "$", offset: o } : { jsonPath: at(n.blockPrefix), offset: o };
    }
    if (!n.isSourceStart || n.usjPrefix[0] !== e)
      continue;
    const [i, s] = n.blockPrefix;
    return s === void 0 ? { jsonPath: "$", offset: i } : { jsonPath: at([i]), offset: s };
  }
  return { jsonPath: "$", offset: xt(ge(), r).length };
}
function cf(e, t, r) {
  const n = Zt(Xo(e.jsonPath));
  if (n.length === 0)
    return Kn(e) ? T_(e.offset, t, r) : e;
  for (const i of t) {
    if (!dm(n, i.usjPrefix))
      continue;
    const s = n.slice(i.usjPrefix.length);
    if (s.length === 0) {
      if (i.usjPrefix.length === 0)
        continue;
      if (Kn(e)) {
        const o = e.offset - i.usjBase;
        if (o < 0 || !i.isSourceEnd && o >= i.count)
          continue;
        return {
          ...Cs(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return Cs(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return Cs(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function fu(e, t) {
  let { start: r } = e, n = e.end ?? r;
  if (ym()) {
    const l = Ot(t), d = um(l), u = cf(r, d, l), f = n === r ? u : cf(n, d, l);
    if (!u || !f)
      return;
    r = u, n = f;
  }
  let [i, s] = Br(r, t), [o, a] = Br(n, t);
  if (!i || !o || s === void 0 || a === void 0)
    return;
  [i, s] = ff(i, s), [o, a] = ff(o, a), n !== r && Ro(n) && n.closingMarkerOffset === 0 && ([o, a] = $_(o, a, Ot(t)));
  const c = Gs();
  return c.anchor = Td(i.getKey(), s, pf(i)), c.focus = Td(o.getKey(), a, pf(o)), c;
}
function pu(e) {
  const t = N();
  if (!t || !A(t))
    return;
  const r = ym() ? um(Ot(e)) : void 0, n = (d, u) => {
    const f = yt(d, u, e);
    return r ? fm(f, r, (p) => yt(p, 0, e)) : f;
  }, i = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), s = t.isBackward() ? t.focus.offset : t.anchor.offset, o = n(i, s);
  if (!o)
    return;
  if (t.isCollapsed())
    return { start: o };
  const a = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), c = t.isBackward() ? t.anchor.offset : t.focus.offset, l = n(a, c);
  if (l)
    return { start: o, end: l };
}
const hu = {
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
}, v_ = new Map(Object.values(hu).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), lf = {
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
}, C_ = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(lf).filter((e) => lf[e])
), __ = /([^\s="|]+)="([^"]*)"/g, S_ = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function pm(e, t) {
  return `${e}['${t}']`;
}
function Ii(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function _s(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function gu(e) {
  const t = gn(e);
  if (!t)
    return;
  const r = Kr(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function zc(e, t, r, n = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(__)) {
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
function M_(e, t) {
  const r = S_.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = v_.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function hm(e) {
  if (Pr(e)) {
    const t = K_(e), r = e.getTextContent();
    if (Ee(t) && (r === "\\*" || r.startsWith(we(t.getMarker()))))
      return t;
  }
  return Gr(e) ?? e;
}
function E_(e) {
  const t = e.getTextContentSize(), r = gu(e);
  if (r && r.role !== "value") {
    const i = hu[r.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? _s(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (r.kind === "milestone")
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? _s() : Ii(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: hm(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Ii(e.getNested() ? 2 : 1)
    ) : _s()
  };
}
function P_(e) {
  const t = e.getTextContent(), r = t.length, n = gu(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = hm(e);
  if (ct(i)) {
    const s = we(i.getMarker()).length;
    if (t.startsWith(we(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...Ii(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (Oe(i)) {
    const s = Ta(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: _s() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: Ii(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? _s() : Ii(t.startsWith("\\+") ? 2 : 1)
  };
}
function A_(e) {
  const t = gu(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = hu[n];
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
        ...zc(i, 1, D(r) ? Xs(r.getMarker()) : void 0)
      ]
    };
  if (n === "milestone" && Ee(r)) {
    const a = r.getMarker().length;
    return {
      owner: r,
      length: s,
      spans: [
        // A milestone has no text content of its own, so the separator and the `|` both keep
        // counting into its marker name's offset space.
        { start: 0, base: a, bytes: { kind: "property", property: "marker" } },
        ...zc(i, 2, Qs(r.getMarker()))
      ]
    };
  }
}
function w_(e) {
  const t = e.getParent();
  if (!Oe(t))
    return;
  const r = e.getTextContent(), n = r.length, i = M_(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...zc(r, 1, void 0, (s) => wT(t.getTag(), s))
      ]
    };
}
function uf(e, t) {
  const r = we(e);
  if (t.startsWith(r))
    return [
      ...Ii(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function yn(e) {
  if (P(e))
    return E_(e);
  if (Pr(e))
    return P_(e);
  if (kt(e) && e.getTextType() === "attribute")
    return w_(e);
  if (e.getType() === Ys) {
    const n = e.getParent();
    return U(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Pe(e)) {
    const n = uf(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!_(e))
    return;
  if (se(e, ce) === "attribute")
    return A_(e);
  const t = e.getParent();
  if (Ce(t) && si(t)?.is(e)) {
    const n = uf(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = Gr(e);
  if (U(r) && vr(r)?.is(e))
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
function mu(e) {
  return Pr(e) || kt(e) && e.getTextType() === "attribute" || e.getType() === Ys;
}
function O_(e) {
  const t = [];
  if (Pe(e) && t.push(e), O(e)) {
    const r = Ce(e) ? si(e) : void 0, n = U(e) ? vr(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (P(i) || Pr(i) || kt(i) && i.getTextType() === "attribute" || i.getType() === Ys || r?.is(i)) && t.push(i);
  }
  for (const r of C_) {
    const n = Kr(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function N_(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function Bc(e, t, r) {
  const n = yn(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = at(Cr(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: pm(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return R_(e, r);
  }
}
function df(e, t) {
  return _(e) && !yn(e) && !Is(e, 0, t);
}
function R_(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && pe(o); )
    r = o, o = r.getParent();
  let n = r.getPreviousSibling();
  for (; n && df(n, t); )
    n = n.getPreviousSibling();
  if (!n)
    return;
  const i = O(n) ? n.getLastDescendant() : n;
  if (i && (_(i) || mu(i)))
    return df(i, t) ? void 0 : un(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return un(s, n.getIndexWithinParent() + 1, t);
}
function _i(e, t, r) {
  for (const n of O_(e)) {
    const i = yn(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!N_(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function Br(e, t) {
  const r = Ot(t);
  if (Kn(e)) {
    const n = Zt(e.jsonPath);
    let i = ge();
    for (let s = 0; s < n.length; s++) {
      if (!i || !O(i))
        return [void 0, void 0];
      const o = xt(i, r)[n[s]];
      if (!o)
        return [void 0, void 0];
      if (o.type === "text")
        return s !== n.length - 1 ? [void 0, void 0] : vv(o, e.offset) ?? gf(e, r) ?? [void 0, void 0];
      i = o.node;
    }
    return i && O(i) ? Br(yu(i, n, e.offset, r), t) : [void 0, void 0];
  }
  if (No(e) || Ro(e) || qo(e)) {
    const n = gf(e, r);
    if (n)
      return n;
  }
  if ($o(e) || Tl(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = $o(e) ? _i(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : _i(n, { kind: "attributeMarker", keyName: i }, 0);
    return s || hf(n);
  }
  if (qo(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = _i(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || hf(n);
  }
  if (Xp(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = _i(n, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = O(n) ? n.getFirstChild() : null;
    return s && _(s) ? [s, 0] : Mo(n, !1);
  }
  if (Ro(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = _i(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = bu(n);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return Mo(n, !0);
    if (!O(n))
      return [void 0, void 0];
    const o = n.getLastChild();
    return o && _(o) ? [o, o.getTextContent().length] : [n, n.getChildrenSize()];
  }
  if (No(e)) {
    const n = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), i = n?.[1] ?? n?.[2] ?? n?.[3], s = ls(e.jsonPath, r);
    if (!s || i === void 0)
      return [void 0, void 0];
    const o = _i(s, { kind: "property", property: i }, e.propertyOffset);
    if (o)
      return o;
    if (O(s)) {
      const c = s.getFirstChild();
      return c && _(c) ? [c, 0] : [s, 0];
    }
    const a = F_(s, i);
    return Mo(s, a !== void 0 && e.propertyOffset >= a.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Sk(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function ff(e, t) {
  if (!mu(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !O(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && q_.test(e.getTextContent());
  return [r, s ? n + 1 : n];
}
const q_ = /[ \u00A0]$/;
function $_(e, t, r) {
  let n;
  if (O(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; _(n) && !yn(n) && !Is(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = O(n) ? n.getLastDescendant() : n;
  return _(s) ? [s, s.getTextContentSize()] : [e, t];
}
function pf(e) {
  return O(e) ? "element" : "text";
}
function ls(e, t) {
  const r = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), n = r ? r[1] : e, i = Zt(n);
  let s = ge();
  for (const o of i) {
    if (!s || !O(s))
      return;
    const a = xt(s, t)[o];
    s = a?.type === "element" ? a.node : void 0;
  }
  return s;
}
function yt(e, t, r) {
  return un(e, t, Ot(r));
}
function un(e, t, r) {
  const n = Bc(e, t, r);
  if (n)
    return n;
  if (pe(e)) {
    const i = e.getChildrenSize(), s = e.getChildAtIndex(Math.min(t, i - 1));
    if (_(s)) {
      const a = t >= i ? s.getTextContentSize() : 0;
      return un(s, a, r);
    }
    if (s && t > 0 && t < i) {
      const a = gm(e, t, r);
      if (a)
        return a;
    }
    const o = e.getParent();
    if (o) {
      const a = e.getIndexWithinParent(), c = t > 0 ? a + 1 : a;
      return un(o, c, r);
    }
  }
  if (O(e)) {
    const i = e.getChildAtIndex(t);
    if (i && yn(i)) {
      const a = Bc(i, 0, r);
      if (a)
        return a;
    }
    if (i && mu(i))
      return {
        jsonPath: at(Cr(e))
      };
    const s = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!i && s && I_(s, e))
      return So(e, !0, r);
    if (ze(e) || mn(e))
      return So(e, t > 0, r);
    const o = Ze(e) && xr(e.getParent()) ? e.getParentOrThrow() : e;
    return mm(o, Ri(e, t, r), r);
  }
  if (_(e)) {
    const i = Is(e, t, r);
    if (i)
      return {
        jsonPath: at([
          ...Cr(i.parent),
          i.index
        ]),
        offset: i.offset
      };
    const s = t > 0, o = s ? e.getNextSibling() : e.getPreviousSibling();
    if (_(o) && (yn(o) || Is(o, 0, r)))
      return un(o, s ? 0 : o.getTextContentSize(), r);
  }
  return So(e, t > 0, r);
}
function gm(e, t, r) {
  for (let n = t; n < e.getChildrenSize(); n++) {
    const i = e.getChildAtIndex(n);
    if (!i)
      return;
    if (yn(i))
      return Bc(i, 0, r);
    if (_(i) && Is(i, 0, r))
      return un(i, 0, r);
    if (_(i) || mn(i))
      continue;
    const s = Cv(i, r);
    if (s)
      return mm(s.parent, s.point, r);
  }
}
function mm(e, t, r) {
  const n = Cr(e);
  return t.type === "text" ? {
    jsonPath: at([...n, t.index]),
    offset: t.offset
  } : yu(e, n, t.index, r);
}
function I_(e, t) {
  const r = yn(e);
  return !!r && r.owner.is(t) && r.spans[0]?.bytes.kind === "closingMarker";
}
function So(e, t, r) {
  const n = e.getParent();
  if (!n)
    return { jsonPath: at(Cr(e)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (pe(n)) {
    if (i > 0 && i < n.getChildrenSize()) {
      const s = gm(n, i, r);
      if (s)
        return s;
    }
    return So(n, i > 0, r);
  }
  return un(n, i, r);
}
function yu(e, t, r, n) {
  const i = xt(e, n), s = i[r];
  if (!s)
    return L_(e, t, i, n);
  const o = at([...t, r]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function L_(e, t, r, n) {
  if (xr(e))
    return Qo(e, t, 1, n);
  if (bu(e) !== void 0) {
    const o = r.length - 1, a = r[o];
    return a?.type === "text" ? {
      jsonPath: at([...t, o]),
      offset: a.length
    } : {
      jsonPath: at(t),
      closingMarkerOffset: 0
    };
  }
  const i = Gr(e), s = t[t.length - 1];
  return D_(e) || !i || s === void 0 ? Qo(e, t, 0, n) : yu(i, t.slice(0, -1), s + 1, n);
}
function Qo(e, t, r, n) {
  const i = at(t), s = bu(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + r
    };
  if (O(e)) {
    const l = xt(e, n), d = l.length - 1, u = l[d], f = [...t, d];
    if (u?.type === "text")
      return { jsonPath: at(f), offset: u.length + r };
    if (u)
      return Qo(u.node, f, r, n);
  }
  const o = (l, d) => ({
    jsonPath: pm(i, l),
    propertyOffset: d.length + r
  }), a = (l, d) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: He(d).length + r
  });
  if (ye(e))
    return e.getPubnumber() !== void 0 ? a("pubnumber", "vp") : e.getAltnumber() !== void 0 ? a("altnumber", "va") : o("number", e.getNumber());
  if (ze(e)) {
    const l = e.getPubnumber();
    return l !== void 0 ? o("pubnumber", l) : e.getAltnumber() !== void 0 ? a("altnumber", "ca") : o("number", e.getNumber());
  }
  if (ct(e))
    return o("code", e.getCode());
  if (U(e))
    return o("caller", e.getCaller());
  const c = Oe(e) ? e.getMarker() : U_(e);
  return c ? o("marker", c) : { jsonPath: i };
}
function bu(e) {
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : He(e.getMarker(), xa(e)).length;
  if (U(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : He(e.getMarker()).length;
  if (Ee(e))
    return He("").length;
  if (Oe(e)) {
    const { closing: t } = Ta(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function D_(e) {
  const t = Gr(e);
  return ie(e) || Ze(e) || ct(e) || Lg(e) || Oe(e) && e.getTag() === "table:row" || xr(t) || Zn(t);
}
function U_(e) {
  if (ie(e) || D(e) || Ee(e) || Lg(e) || Lv(e))
    return e.getMarker();
}
function hf(e) {
  if (O(e)) {
    const r = e.getLastChild();
    if (r && _(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && O(t) ? [t, 0] : Mo(e, !0);
}
function Mo(e, t) {
  const r = e.getParent();
  return r ? [r, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function F_(e, t) {
  if (ye(e) || ze(e)) {
    if (t === "number")
      return e.getNumber();
    if (t === "altnumber")
      return e.getAltnumber();
    if (t === "pubnumber")
      return e.getPubnumber();
    if (t === "marker")
      return e.getMarker();
  }
  if (Ee(e) && t === "marker")
    return e.getMarker();
}
function gf(e, t) {
  const r = ge(), n = Qo(r, [], 1, t);
  return mf(n) === mf(e) ? [r, r.getChildrenSize()] : void 0;
}
function mf(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [r]) => t.localeCompare(r)));
}
function K_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!mn(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Cr(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Gr(r);
    if (!n)
      break;
    const i = Tv(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function ym() {
  for (let e = ge().getFirstChild(); e; e = e.getNextSibling())
    if (Zn(e))
      return !0;
  return !1;
}
function bm(e, t, r, n, i, s, o) {
  if (!$e.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? fu(r, i) : N();
  if (!A(a))
    return;
  const c = j_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (bs(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = km(e, l, c, i, s, void 0, void 0);
  return B_(d, a, i), d;
}
function ku(e) {
  return e !== "expanded";
}
function z_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!_(r) || !D(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function B_(e, t, r) {
  const n = ku(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || dv(t), Vg(t), fn(t);
  const i = z_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function Si(e, t, r) {
  const n = Ur(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ft(e)) : r?.markerMode === "visible" && n.append(Fr("marker", we(e)));
  const s = t === "" ? Gt : i ? q + t : t;
  return n.append(xe(s)), n;
}
function j_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Si("fr", f, n)), !e.isCollapsed()) {
        const p = kf(e);
        p.length > 0 && o.push(Si("fq", p, n));
      }
      o.push(Si("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Si("xo", f, n)), !e.isCollapsed()) {
        const p = kf(e);
        p.length > 0 && o.push(Si("xq", p, n));
      }
      o.push(Si("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function km(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : ku(n?.noteMode), l = $l(e, t, c);
  s && Mt(l, pn, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = ft(e), d && u.setMode("token"), a || (f = ft(e, "closing"))) : n?.markerMode === "visible" && (u = Fr("marker", we(e) + " "), a || (f = Fr("marker", He(e))));
  let p;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = xe(Lt(l.__caller)), d && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => Ca(), m = r.flatMap(V_(h));
    if (t === "")
      l.append(...m);
    else {
      const y = Wl(r);
      let x = () => {
      };
      i?.noteCallerOnClick && (x = i.noteCallerOnClick), p = cu(l.__caller, y, x), l.append(p, h(), ...m);
    }
  }
  return f && l.append(f), l;
}
function yf(e) {
  if (typeof e == "string") {
    const i = H(e);
    return U(i) ? i : void 0;
  }
  const t = Gi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => U(i.node))[e]?.node;
  if (U(n))
    return n;
}
function bf(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (ui(n) || !n) {
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
function V_(e) {
  return (t) => kt(t) ? [t] : [t, e()];
}
function W_(e) {
  const t = e.getParent();
  return t !== null && rt(t, U) !== null;
}
function kf(e) {
  if (!A(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Zp(e);
  let a = "";
  for (const c of t)
    if (!(U(c) || Qt(c) || W_(c)) && !P(c) && !Sn(c) && se(c, ce) !== "attribute") {
      if (ye(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (_(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const xu = [
  nr,
  wt,
  ...lC
], H_ = [
  Ji,
  ...xu
], G_ = ni((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return S("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function J_() {
  const [e, t] = he(void 0), [r, n] = he(), i = Z(null), s = de((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Qk(l, c, () => {
      Zk(l, c, {
        placement: "bottom-start",
        middleware: [ex(), tx()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = de(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function Y_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = J_();
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
const X_ = kk(G_);
function xm({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = Y_({ isOpen: e, floatingBoxRef: r }), s = Fe(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Dn(
    S(X_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Tm = Jp(void 0);
function Tu() {
  const e = Yp(Tm);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function Q_(e, t) {
  const [r, n] = he(0), [i, s] = he(-1), o = Fe(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = de(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = de(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = de(() => {
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
function Z_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = Q_(t, r);
  return S(Tm.Provider, { value: i, children: S("div", { ...n, children: e }) });
}
const vm = ni(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Tu(), d = de((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = de((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return S("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function eS({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = Tu(), o = Fe(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Fe(() => {
    const c = o(s);
    return t ? xk.map(c, (l, d) => Tk(l) && l.type === vm && l.props.index === void 0 ? vk(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return j(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), S("div", { ref: n, role: "menu", ...r, children: a });
}
const tS = (e, t, r) => Eo(e, r).toLowerCase().includes(t.toLowerCase()), xf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Eo = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function rS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? xf(r[0]) : "") : (d = n || (r.length > 0 ? xf(r[0]) : ""), u = (h, m) => tS(h, m, d));
  const f = s || d, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return u(h, t);
    } catch (m) {
      return console.warn("Error filtering item:", h, m), !1;
    }
  }).sort((h, m) => {
    const y = (M) => (p.has(M) || p.set(M, Eo(M, f).toLowerCase()), p.get(M) ?? ""), x = a ? Eo(h, f) : y(h), C = a ? Eo(m, f) : y(m);
    for (const M of c)
      switch (M) {
        case "exact":
          if (x === l && C !== l)
            return -1;
          if (C === l && x !== l)
            return 1;
          break;
        case "startsWith":
          if (x.startsWith(l) && !C.startsWith(l))
            return -1;
          if (C.startsWith(l) && !x.startsWith(l))
            return 1;
          break;
        case "contains": {
          const R = x.indexOf(l), E = C.indexOf(l);
          if (R !== -1 && E === -1)
            return -1;
          if (E !== -1 && R === -1)
            return 1;
          if (R !== -1 && E !== -1)
            return R - E;
          break;
        }
      }
    return x.localeCompare(C);
  });
}
const ic = {
  Root: Z_,
  Options: eS,
  Option: vm
};
function nS(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Fe(() => rS({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function iS() {
  const { moveUp: e, moveDown: t, select: r } = Tu();
  return Fe(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const sS = () => {
  const e = iS(), [t] = le();
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
    return t.registerCommand(Vr, r, Ke);
  }, [t, e]);
};
function oS() {
  return sS(), null;
}
const aS = ["Shift", "Control", "Alt", "Meta"];
function Cm(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), d = s !== void 0, [u, f] = he(""), p = d ? s ?? "" : u, h = nS({ query: p, items: t, filterBy: "name" }), m = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(Vr, (y) => {
    if (d || c?.includes(y.key) || aS.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const C = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((M) => M.slice(0, -1));
      }
    }[y.key];
    return C ? (y.stopPropagation(), y.preventDefault(), C(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((M) => M + y.key), !0) : !1;
  }, Ke), [l, d, p, o, n, c]), Ae(ic.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => m(y), children: [!d && S("input", { value: p, type: "text", disabled: !0 }), S(oS, {}), S(ic.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((C, M) => Ae(ic.Option, { index: M, children: [S("span", { className: "label", children: C.label ?? C.name }), S("span", { className: "description", children: C.description })] }, C.name)) })] });
}
function cS({ trigger: e, items: t }) {
  const [r] = le(), [n, i] = he(!1), s = de((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = N();
      if (A(l))
        return l;
    });
    a.read(() => {
      const l = N();
      !A(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && S(xm, { isOpen: n, children: ({ placement: o }) => S(Cm, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function lS({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Fe(() => {
    if (!t || !e)
      return;
    const i = kr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = kr(o), { action: c } = r(o, a);
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
function Ss(e, t) {
  return `${e}:${t}`;
}
function uS(e, t) {
  j(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return nt(Pl(e, Qe, (n) => Gn(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], p = o[l]?.[u], h = a[l]?.[u], m = c[l]?.[u];
          i.addID(l, u, f, p, h, m);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Qe, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = H(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : pe(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Qe.isReservedType(c))
              for (const d of l) {
                let u = t.get(Ss(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(Ss(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(Ss(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const dS = ni(function({ logger: t, viewOptions: r }, n) {
  const [i] = le(), s = Fe(() => /* @__PURE__ */ new Map(), []);
  uS(i, s);
  const o = (a, c, l) => {
    const d = Array.from(l ?? s.get(Ss(a, c)) ?? []);
    if (d.length !== 0)
      for (const u of d) {
        const f = H(u);
        pe(f) && (f.deleteID(a, c), f.hasNoIDsForEveryType() && zo(f));
      }
  };
  return xl(n, () => ({
    setAnnotation(a, c, l, d, u, f, p) {
      if (Qe.isReservedType(c))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const h = fu(a, r);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        o(c, l), Jl(h, c, l, d, u, f, p);
      }, { tag: _c });
    },
    removeAnnotation(a, c) {
      if (Qe.isReservedType(a))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      const l = s.get(Ss(a, c));
      l === void 0 || l.size === 0 || i.update(() => {
        o(a, c, l);
      }, { tag: _c });
    }
  })), null;
});
function fS({ dirtyElements: e, dirtyLeaves: t, prevEditorState: r, tags: n }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  n.has(eh) && !n.has(xh) || i.ignoreTags.some((s) => n.has(s)) || r.isEmpty();
}
function pS(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ni();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = H(i), o = s !== null && sr(s) !== void 0;
    if (t.size === 1 && _(s) && !o && BC(s)) {
      const a = em(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = H(i);
          return new Ni([_(u) ? Kc(u) : { insert: "" }]);
        }), l = new Ni([Kc(s)]), d = new Ni(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = sf(r), c = sf(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function hS(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += gS(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), yS(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += bS(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), xS(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function gS(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), mS(t, e.retain, e.attributes, r, n)), e.retain);
}
function mS(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = ge();
  function l(d) {
    if (s <= 0)
      return !0;
    if (zr(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), p = u - f, h = Math.min(s, p);
        if (h > 0) {
          let m = d;
          const y = f > 0, x = h < u - f;
          if (y && x) {
            const [, C] = d.splitText(f);
            [m] = C.splitText(h);
          } else y ? [, m] = d.splitText(f) : x && ([m] = d.splitText(h));
          if (bn(r)) {
            const C = m.getParent();
            if (D(C)) {
              const M = r.char;
              let R;
              Array.isArray(M) ? a >= 0 && a <= M.length - 1 && (R = M[a]) : a === 0 && (R = M);
              const E = R ? Yn(R, C) : !1;
              if (E && Array.isArray(M) && M.length > 1) {
                const L = xe("");
                m.replace(L);
                const T = typeof r.segment == "string" ? r.segment : void 0, $ = Xi(M.slice(1), n, m, T);
                let W = L;
                for (const G of $)
                  W.insertAfter(G), W = G;
                L.remove(), zt(r, m);
              } else if (E)
                zt(r, m);
              else {
                m.remove();
                const L = Tf(m, r, n, i);
                if (L && L.length > 0) {
                  let T = C;
                  for (const $ of L)
                    T.insertAfter($), T = $;
                }
              }
            } else {
              const M = xe("");
              m.replace(M);
              const R = Tf(m, r, n, i);
              if (R && R.length > 0) {
                let E = M;
                for (const L of R)
                  E.insertAfter(L), E = L;
                M.remove();
              } else
                M.replace(m);
            }
          } else
            zt(r, m);
          s -= h;
        }
      }
      o += u;
    } else if (Dt(d))
      e <= o && o < e + t && s > 0 && (vf(d, r), s -= 1), o += 1;
    else if (D(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (bn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            jc(d, p.style), typeof p.cid == "string" && Mt(d, Jn, () => p.cid);
            const h = Be(p, Yo);
            h && Object.keys(h).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...h
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || AS(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return u && vc(d), !0;
        }
      }
      u && vc(d), a -= 1;
    } else if (Yt(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Ze(d))
          vf(d, r);
        else if (vu(r)) {
          const p = Mm(r.para, n);
          p && d.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (O(d)) {
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
function Tf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Xi(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), zt(t, e);
    return;
  }
  const a = {};
  wm.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), zt(t, e), s;
}
function _m(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(we(t))) : kt(r) && r.getTextType() === "marker" && r.setTextContent(we(t) + q);
}
function jc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = D(e.getParent()), i = e.getFirstChild();
  kt(i) && i.getTextType() === "marker" && i.getTextContent() === we(r, n) && i.setTextContent(we(t, n));
  const s = e.getLastChild();
  kt(s) && s.getTextType() === "marker" && s.getTextContent() === He(r, n) && s.setTextContent(He(t, n));
}
function vf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && bn(t)) {
      const i = Vc(n);
      if (jc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Mt(e, Jn, () => o);
      }
      const s = Be(i, Yo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (ze(e) || ye(e) || Ee(e) || U(e) || Oe(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ct(e) || ie(e) || D(e)) && (r === "style" && ie(e) ? _m(e, n) : r === "style" && D(e) ? jc(e, n) : r === "code" && ct(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Mt(e, pn, () => n));
  }
}
function yS(e, t, r) {
  if (t <= 0)
    return;
  const n = ge();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (zr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Dt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Yt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Yt(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Ht(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Re(p)) {
            let h = i + 1;
            const m = p.getChildren();
            for (const x of m) {
              if (s <= 0)
                break;
              const C = i;
              if (i = h, o(x)) {
                i = C;
                break;
              }
              zr(x) ? h += x.getTextContentSize() : Dt(x) && (h += 1), i = C;
            }
            const y = p.getChildren();
            for (const x of y)
              x.remove(), a.append(x);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Ht(), !0);
        } else ie(a) ? a.replace(Ht(), !0) : a.remove();
      }
      i += 1;
    } else if (O(a)) {
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
function bS(e, t, r, n, i) {
  if (t === Us)
    return Cf(e, r, n, i);
  if (t.endsWith(Us) && !vu(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (bn(r))
        throw new Error("Text + LF should not have char attributes");
      o += Zo(e, s, r, i);
    }
    return o += Cf(e + o, r, n, i), o;
  } else return bn(r) ? kS(e, t, r, n, i) : Zo(e, t, r, i);
}
function kS(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = xe(t === "" ? Gt : t);
  zt(r, s);
  let o;
  {
    let y = function(x) {
      if (zr(x)) {
        const C = x.getTextContentSize();
        if (e >= m && e < m + C) {
          const M = x.getParent();
          return D(M) && (o = M), !0;
        }
        m += C;
      } else if (Dt(x))
        m += 1;
      else if (D(x)) {
        const C = x.getChildren();
        for (const M of C)
          if (y(M))
            return !0;
      } else if (O(x)) {
        const C = x.getChildren();
        for (const M of C)
          if (y(M))
            return !0;
        Yt(x) && (m += 1);
      }
      return !1;
    };
    const h = ge();
    let m = 0;
    y(h);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const h = a[0];
      h && Yn(h, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Yn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Xi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(D);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Zo(e, t, void 0, i);
  const f = {};
  for (const [h, m] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof m == "string" && (f[h] = m);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let p = !0;
  for (const h of d)
    if (!Sm(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Zo(e, t, void 0, i));
}
function Zo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = ge();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (zr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = xe(t);
        if (zt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          D(f) && !bn(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Dt(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const u = xe(t);
        zt(r, u);
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
        const u = xe(t);
        return zt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Yt(c)) {
      if (!o && e === s) {
        const u = xe(t);
        zt(r, u);
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
        const u = xe(t);
        return zt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (O(c)) {
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
    const c = xe(t);
    zt(r, c);
    const l = Ht().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Sm(e, t, r) {
  const n = ge();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!O(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Re(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Ht().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (zr(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (Dt(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (Yt(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (Ze(d) && Yt(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (O(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return O(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Re(a) ? Ze(a) && ie(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Re(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Re(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function xS(e, t, r, n, i) {
  let s;
  return an("chapter", t) ? s = vS(t.insert.chapter, r) : an("verse", t) ? s = CS(t.insert.verse, r) : an("ms", t) ? s = _S(t.insert.ms) : an("note", t) ? s = Em(t, r, n, i) : an("unknown", t) ? s = Pm(t, r, n, i) : an("unmatched", t) && (s = MS(t.insert.unmatched, r)), s ? Sm(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Cf(e, t, r, n) {
  let i;
  vu(t) ? i = Mm(t.para, r) : PS(t) && (i = TS(t.book)), i ??= Ht();
  const s = i, o = ie(s), a = Ze(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (zr(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = u.getParent();
        if (ie(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [m] = h > 0 ? u.splitText(h) : [void 0];
          let y, x = m?.getPreviousSibling();
          for (; x; ) {
            const C = x;
            x = x.getPreviousSibling(), y ? y.insertBefore(C) : s.append(C), y = C;
          }
          return m && s.append(m), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Dt(u))
      c += 1;
    else if (Yt(u)) {
      const f = u.getChildren();
      for (const p of f) {
        if (d(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Ze(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (ie(u) && s) {
          const p = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ie(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (O(u)) {
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
  return d(ge()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function TS(e) {
  const { style: t, code: r } = e;
  if (!t || t !== qs || !r || !Jt.isValidBookCode(r))
    return;
  const n = Be(e, wC);
  return lg(r, n);
}
function Mm(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Be(e, AC), i = $s(r, n);
  if (!Yi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ft(r), Ca());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = we(r) + q;
    i.append(t.hasGutterParaMarkers ? mT(s) : Fr("marker", s));
  }
  return i;
}
function vS(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Be(e, OC);
  let a;
  if (t.markerMode === "editable")
    a = Hh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Bl(r, c, n, i, s, o);
  }
  return a;
}
function CS(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Be(e, NC);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Wt(r, n);
    c = Ih(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = ru(n, l, i, s, o, a);
  }
  return c;
}
function _S(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Be(e, RC);
  return Ch(t, r, n, s, i);
}
function Em(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Be(i.note, qC), d = typeof l?.closed == "string" ? l.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const p = [];
  for (const m of c?.ops ?? [])
    if (typeof m.insert == "string")
      if (bn(m.attributes)) {
        const y = Xi(m.attributes.char, t, xe(m.insert), void 0, Am(m.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(xe(m.insert));
  return km(s, o, p, t, r, f, d).setCategory(a).setUnknownAttributes(l);
}
function Pm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Be(i, $C), l = Kl(s, o, c), d = a?.ops ?? [];
  d.length > 0 && SS(d, t, r, n).forEach((p) => l.append(p));
  const u = e.attributes?.segment;
  return typeof u == "string" && Mt(l, pn, () => u), l;
}
function SS(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (bn(s.attributes)) {
        const o = xe(s.insert), a = Xi(s.attributes.char, t, o, void 0, Am(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(xe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (an("unknown", s)) {
        const o = Pm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (an("note", s)) {
        const o = Em(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function MS(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Yl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Am(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Vc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Xi(e, t, r, n, i, s = !1, o = !1) {
  _(r) && r.getTextContentSize() === 0 && r.setTextContent(Gt);
  const a = () => {
    o && _(r) && r.getTextContent() !== Gt && r.setTextContent(q + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Vc), l = c[0], d = i?.[i.length - 1];
    if (D(d) && Yn(l, d))
      return c.length > 1 ? Xi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => d.append(p)) : r && d.append(r), [];
    a();
    const u = c.reduceRight((f, p, h) => {
      const m = Ur(p.style, Be(p, Yo));
      if (typeof p.cid == "string" && Mt(m, Jn, () => p.cid), n && h === c.length - 1 && Mt(m, pn, () => n), f)
        if (D(f)) {
          const y = f.getMarker(), x = [];
          oc(y, x, t, !0), x.forEach((M) => m.append(M)), m.append(f);
          const C = [];
          sc(f, C, t, !0), C.forEach((M) => m.append(M));
        } else
          m.append(f);
      return m;
    }, r);
    return oc(l.style, u, t, s), sc(u, u, t, s), [u];
  } else {
    const c = Vc(e), l = i?.[i.length - 1];
    if (D(l) && Yn(c, l))
      return r && l.append(r), [];
    a();
    const d = Ur(c.style, Be(c, Yo));
    return typeof c.cid == "string" && Mt(d, Jn, () => c.cid), n && Mt(d, pn, () => n), r && d.append(r), oc(c.style, d, t, s), sc(d, d, t, s), [d];
  }
}
function sc(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && ES(e.getMarker(), t, r, !1, n);
}
function oc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ft(e, "opening", n) : r?.markerMode === "visible" && (i = Fr("marker", we(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function ES(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ft("", "selfClosing") : s = ft(e, "closing", i) : r?.markerMode === "visible" && (s = Fr("marker", n ? He("") : He(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function PS(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function vu(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function bn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function AS(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function zt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Mt(t, pn, () => n);
        continue;
      }
      if (wS(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const wm = [
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
function wS(e) {
  return wm.includes(e);
}
function OS() {
  const [e] = le();
  return j(() => e.registerCommand(ha, (t) => (NS(t), !1), jn), [e]), null;
}
function NS(e) {
  if (RS(e.target))
    return;
  const t = N();
  A(t) && qS(t);
}
function Qi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Xt(t))
      r++, t = t.getNextSibling(), _(t) && t.getTextContent() === q && (r++, t = t.getNextSibling());
    else if (ye(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (or(e, r), !0);
}
function RS(e) {
  if (!th(e))
    return !1;
  const t = Js(e);
  if (!yT(t))
    return !1;
  const r = t.getParent();
  return r ? Re(r) ? Qi(r) : (or(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function qS(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = H(t.key);
  if (!Re(r))
    return !1;
  const n = r.getFirstChild();
  return !Pr(n) && !ui(n) ? !1 : Qi(r);
}
function $S() {
  const [e] = le();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !IS(r) || !Om() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return nt(
      e.registerCommand(Vr, t, Ke),
      e.registerCommand(Sl, t, Ke),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand($r, t, Ir),
      e.registerCommand(Vn, t, Ir),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Ml, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Js(r.target);
        return !n || !ei(n) ? !1 : (r.preventDefault(), !0);
      }, Ke),
      e.registerCommand(Ek, t, Ke),
      e.registerCommand(Pk, t, Ke),
      e.registerCommand(Ak, t, Ke)
    );
  }, [e]), null;
}
function IS(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function ei(e) {
  return rt(e, (t) => Oe(t) || qg(t)) ?? void 0;
}
function Om() {
  const e = N();
  return A(e) ? ei(e.anchor.getNode()) !== void 0 || ei(e.focus.getNode()) !== void 0 : !1;
}
function LS(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function DS(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), LS(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function US(e, t, r, n) {
  if (!ZS(t) || DS(e, r))
    return !1;
  const i = r === "up" ? PC(t) : EC(t);
  return i && n.preventDefault(), i;
}
function FS({ viewOptions: e }) {
  const [t] = le();
  return KS(t, e), null;
}
function KS(e, t) {
  j(() => {
    if (!e.hasNodes([Er, wt, $e]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!A(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = _f(o), u = GS(i, Sf(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return US(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = _f(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Sf(a, n.key) ? l = !c && Pf(i, "next") || !c && BS(i) || XS(i) || !c && s && Ef(i, "next") : zS(a, n.key) && (l = !c && Pf(i, "previous") || !c && jS(i) || QS(i, t) || !c && s && Ef(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Vr, r, Ke);
  }, [e, t]);
}
function _f(e) {
  return e.dir || "ltr";
}
function Sf(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function zS(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Wc(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = sr(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function BS(e) {
  const t = Wc(kg(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (or(t, 0), !0);
}
function jS(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Wc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Mf(n);
  }
  if (t.offset === 0) {
    const n = Wc(r);
    return n ? Mf(n) : !1;
  }
  return !1;
}
function Mf(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (_(t))
    return t.select(), !0;
  if (O(t)) {
    const i = t.getLastDescendant();
    return _(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const ea = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function VS(e) {
  if (ea)
    for (const { segment: r } of ea.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function WS(e) {
  if (ea) {
    let n = 0;
    for (const { index: i } of ea.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Nm(e) {
  for (let t = e; t; t = t.getParent())
    if (O(t) && !t.isInline())
      return t;
}
function Rm(e) {
  return !!e && P(e) && ei(e) !== void 0;
}
function Ki(e) {
  return _(e) && !e.isToken() && !Rm(e) && e.getTextContentSize() > 0;
}
function qm(e) {
  return pa(e) ? !0 : U(e) ? e.getIsCollapsed() === !0 : _(e) ? (e.isToken() || Rm(e)) && e.getTextContentSize() > 0 : rh(e) ? !Ee(e) : !1;
}
function zi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Aa(e, t, r) {
  for (let n = e; n; ) {
    if (qm(n))
      return n;
    if (O(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? zi(n, t, r);
      continue;
    }
    if (Ki(n))
      return n;
    n = zi(n, t, r);
  }
}
function Cu(e, t, r, n, i) {
  return r === "element" && O(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? zi(e, n, i) : r === "text" && qm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : zi(e, n, i);
}
function ac(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Cu(e.node, e.offset, e.kind, "previous", t), n = Aa(r, "previous", t);
  if (!n)
    return e;
  if (Ki(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function HS(e, t) {
  const r = e.getNode(), n = Nm(r);
  if (!n)
    return;
  if (e.type === "text" && Ki(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ac({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Cu(r, e.offset, e.type, t, n), s = Aa(i, t, n);
  if (!s)
    return;
  if (Ki(s)) {
    const c = s.getTextContent(), l = t === "next" ? VS(c) : WS(c);
    return ac({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ac({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function $m(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = HS(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Ef(e, t) {
  return $m(e, t, "collapse");
}
function GS(e, t) {
  return $m(e, t, "extend");
}
function JS(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && Ki(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Cu(n, e.offset, e.type, t, r);
  return Aa(i, t, r) === void 0;
}
function YS(e, t) {
  const r = ge();
  for (let n = e; n; ) {
    const i = zi(n, t, r), s = i && Aa(i, t, r);
    if (!s)
      return;
    if (n = ei(s), !n)
      return s;
  }
}
function Pf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (ei(n))
    return !1;
  const i = Nm(n);
  if (!i || !JS(r, t, i))
    return !1;
  const s = zi(i, t, ge()), o = s && ei(s);
  if (!o)
    return !1;
  const a = YS(o, t);
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
function Af(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function XS(e) {
  const t = e.anchor.getNode(), r = kg(e);
  if (U(r) && !P(r.getFirstChild())) {
    if (Re(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Re(i) && Qi(i)) && i.selectStart(), !0;
      }
    } else return kt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Re(t) && U(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Af(r), !0;
  }
  const n = r?.getParent();
  if (kt(r) && U(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Af(n) : n.selectEnd(), !0;
  }
  return !1;
}
function QS(e, t) {
  const r = cv(e);
  if (no(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (ct(i.getParent()))
    return !0;
  if (U(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!ui(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Re(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = rt(o, (c) => U(c));
    if (U(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = sr(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (Qt(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function ZS(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ye(t) && rh(t);
}
function eM() {
  const [e] = le();
  return tM(e), null;
}
function tM(e) {
  j(() => {
    if (!e.hasNodes([_e]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return nt(
      e.registerNodeTransform(_e, iM),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(_e, fT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(_e, Qh),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(_e, (t) => Ds(Kr("char"), t)),
      e.registerNodeTransform(Ve, sM)
    );
  }, [e]);
}
function cc(e) {
  return e.getChildren().some(P);
}
function rM(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (ro(n)) {
    const i = n.getTextContent();
    i.startsWith(q) && (i === q ? n.remove() : n.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function nM(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function iM(e) {
  if (!D(e))
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
  const r = se(e, Jn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && Yn({ style: t, cid: r }, i) && mr(n, i.getUnknownAttributes()))
    if (cc(i)) {
      if (rM(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && Yn({ style: t, cid: r }, s) && mr(n, s.getUnknownAttributes()) && (cc(s) ? nM(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function sM(e) {
  const t = e.getParent();
  if (!D(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Gt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Im(e) {
  return e.replaceAll("	", " ");
}
const _u = (e) => {
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
      n.setData(o, Im(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand($r, s);
  });
}, Su = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Im(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand($r, i);
  });
};
function oM() {
  const [e] = le();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Lo ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(ga, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(Vn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Su(e) : _u(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function aM({ logger: e }) {
  const [t] = le();
  return j(() => nt(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Vr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), qi),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand($r, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, qi),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Ml, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, qi)
  ), [t, e]), null;
}
function cM({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), S("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: S("span", { className: "text", children: i.title }) });
}
function lM({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return S("div", { className: "typeahead-popover", children: S("ul", { children: e.map((i, s) => S(cM, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let uM = 0;
class us {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${uM++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function dM({ options: e } = {}) {
  const [t] = le(), [r, n] = he(() => !t.isEditable()), [i, s] = he({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = he(void 0), c = Fe(() => {
    const u = [
      new us("Cut", {
        onSelect: () => {
          t.dispatchCommand(Vn, null);
        },
        isDisabled: r
      }),
      new us("Copy", {
        onSelect: () => {
          t.dispatchCommand(ga, null);
        }
      }),
      new us("Paste", {
        onSelect: () => {
          _u(t);
        },
        isDisabled: r
      }),
      new us("Paste as Plain Text", {
        onSelect: () => {
          Su(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new us(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = de(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  j(() => {
    const u = (f) => {
      const p = f.target;
      t.getRootElement() === p || pg(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", u), f && f.addEventListener("contextmenu", u);
    });
  }, [t]), j(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return globalThis.addEventListener("scroll", u, !0), () => globalThis.removeEventListener("scroll", u, !0);
  }, [i.isOpen, l]), j(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return document.addEventListener("pointerdown", u), () => document.removeEventListener("pointerdown", u);
  }, [i.isOpen, l]), j(() => {
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
  }, [i.isOpen, l, c, o, t]), j(() => t.registerEditableListener((u) => {
    n(!u);
  }), [t]);
  const d = Z(null);
  return Vs(() => {
    const u = d.current;
    if (!u)
      return;
    const { width: f, height: p } = u.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    u.style.left = `${h}px`, u.style.top = `${m}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Hk.createPortal(S("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: S(lM, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function fM() {
  const [e] = le();
  return j(() => e.registerCommand(Vr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Lo ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Ir), [e]), null;
}
function pM({ isEditable: e }) {
  const [t] = le();
  return Vs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function wf(e) {
  return !!e && Vl(H(e));
}
function Lm(e) {
  const [t] = le(), r = Z(void 0), n = de((i) => {
    let s = !1;
    const o = N(), a = A(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = wf(c);
    c && !l && (r.current = void 0);
    let d;
    if (i) {
      const u = i.getParentOrThrow(), f = i.getIndexWithinParent() + 1, p = _a(u, f);
      if (p)
        r.current = p.getKey(), d = p.getKey();
      else {
        const h = iv();
        i.insertAfter(h), r.current = h.getKey(), d = h.getKey(), s = !0;
      }
      or(u, f);
    }
    if (c && l && c !== a && c !== d) {
      const u = H(c);
      _(u) && (u.remove(), s = !0), r.current === c && (r.current = void 0);
    }
    return s;
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = N(), l = A(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && n(a) && Wn(Os);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (io(c) || !c.includes(Li))
        return;
      const l = N(), d = A(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (sv(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(Li).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = nt(t.registerCommand(Tr, () => (i(), !1), jn), t.registerCommand(El, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = wf(a);
      }), c && t.update(() => {
        const l = H(a);
        _(l) && (l.remove(), Wn(Os));
      }), r.current = void 0, !1;
    }, jn), t.registerNodeTransform(Ve, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function hM() {
  const e = N();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!O(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ye(i) || _a(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ye(s))
    return i;
}
function gM() {
  return Lm(hM), null;
}
function mM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = le();
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
        const d = o.getRootElement(), u = d?.ownerDocument.activeElement, f = d != null && u != null && (d === u || d.contains(u));
        o.update(() => {
          f || Wn(wk), o.setEditorState(l), o.dispatchCommand(Ok, void 0);
        }, { tag: wl });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function yM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return bM(t, n), kM(i, e, r, n), null;
}
function bM(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = p_), r.current !== o && (r.current = o, Of("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = h_), n.current !== o && (n.current = o, Of("cross-ref-callers", o, t));
  }, [t, s]);
}
function kM(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([_e, $e, nr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => MM(s));
    return nt(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform($e, (s) => xM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(_e, TM),
      e.registerNodeTransform(Ve, vM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(nr, CM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(nr, (s, { prevEditorState: o }) => _M(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Tr, () => SM(e, t, r, n), $t),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function xM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Qt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    _(i) && !P(i) && i.getTextContent() !== Lt(e.getCaller()) && e.insertBefore(i);
  }
}
function TM(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => Qt(o));
  if (!D(e) || !U(t) || !n)
    return;
  const i = Wl(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  _(s) ? s.getTextContent() !== q && s.setTextContent(q) : e.insertAfter(xe(q));
}
function vM(e) {
  const t = sr(e), r = t?.getChildren(), n = r?.find((o) => Qt(o));
  if (!_(e) || !U(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && U(i) && e.getTextContent() !== q && (e.setTextContent(q), e.selectEnd()), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Gt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Wl(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function CM(e) {
  if (!Qt(e))
    return;
  const t = e.getNextSibling();
  !_(t) || P(t) ? e.insertAfter(xe(q)) : t.getTextContent() !== q && t.setTextContent(q);
}
function _M(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = H(r), a = o?.getParent();
      return Qt(o) && U(a) && a.getCaller() === Uo;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function SM(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = rt(o, (c) => U(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = H(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), ds(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (U(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, ds(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (U(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, ds(e, c, n);
    } else if (!a) {
      const c = rt(o, (l) => U(l));
      if (c && c.getIsCollapsed() && Re(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, ds(e, l, n);
      }
    }
  }
  if (Re(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (ui(c) && U(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, ds(e, l, n);
    }
  }
  return !1;
}
function ds(e, t, r) {
  const n = H(t);
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
function MM(e) {
  const t = N();
  if (!A(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (U(i) && _(s)) {
    e.preventDefault();
    const o = Gs();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), fn(o);
  }
}
function Of(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (EM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function EM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function wa(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = vr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => _(n) && n.getMode() === "token") ? t : [];
}
function PM(e) {
  const t = e.getParent();
  if (U(t))
    return wa(t).some((r) => r.is(e)) ? t : void 0;
}
function ta(e) {
  const t = wa(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function AM(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function wM(e) {
  const t = Nk();
  if (!A(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ta(e);
  const i = AM(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ta(e);
}
function Hc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = PM(t);
  if (r)
    return OM(r, t, e.offset) ? void 0 : r;
}
function OM(e, t, r) {
  const n = wa(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function NM(e) {
  const t = wa(e), r = t[t.length - 1];
  _(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : or(e, ta(e));
}
function RM(e = !1) {
  const t = N();
  if (!A(t))
    return !1;
  if (!t.isCollapsed())
    return qM(t.anchor, t.focus);
  const r = Hc(t.anchor);
  if (!r)
    return !1;
  if (!e && wM(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    or(n, r.getIndexWithinParent());
  } else
    NM(r);
  return !0;
}
function qM(e, t) {
  const r = Hc(e), n = Hc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Nf(e, r, i), n && Nf(t, n, !i), !0;
}
function Nf(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), ta(t), "element");
}
function $M() {
  const [e] = le(), t = Z(!1);
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
  }, [e]), j(() => e.registerCommand(Tr, () => (RM(t.current) && e.dispatchCommand(Ol, void 0), !1), jn), [e]), null;
}
function IM({ onChange: e, viewOptions: t }) {
  const [r] = le();
  return j(() => r.registerCommand(Tr, () => {
    const n = pu(t);
    return e?.(n), !1;
  }, $t), [r, e, t]), null;
}
function LM() {
  const [e] = le();
  return DM(e), null;
}
function DM(e) {
  j(() => {
    if (!e.hasNodes([it]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(it, (t) => UM(t, e));
  }, [e]);
}
function UM(e, t) {
  Zg(t, e.getKey()) && Qg(e.getFirstChild()), !(!ie(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = H(e.getKey());
    return ie(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function Dm({ onStateChange: e }) {
  const [t] = le(), [r, n] = he(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = de(() => {
    const l = N();
    let d;
    if (A(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let p = u.getKey() === "root" ? u : rt(u, (x) => {
        const C = x.getParent();
        return C !== null && Rk(C);
      });
      p === null && (p = u.getTopLevelElementOrThrow()), Zn(p) && (p = rt(u, ie) ?? p);
      const h = p.getKey(), m = r.getElementByKey(h), y = uv(u, f);
      if (y && MC(y) && (d = y.getMarker()), m !== null && (ie(p) || ct(p) || no(p))) {
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
  return j(() => t.registerCommand(Tr, (l, d) => (c(), n(d), !1), Ir), [t, c]), j(() => nt(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(qk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Ir), r.registerCommand($k, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Ir)), [c, r, e]), null;
}
function FM(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function kn(e) {
  return e ? Re(e) ? e : rt(e, (r) => Re(r)) ?? void 0 : void 0;
}
function Um(e) {
  if (!A(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = kn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Mu(e) {
  return A(e) && e.isCollapsed() && e.anchor.type === "element" || !A(e) && !nh(e) ? !1 : e.getNodes().some((t) => ye(t));
}
function Fm(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = kn(r);
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
function Km(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = kn(r);
  if (!n)
    return !1;
  if (O(r)) {
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
function Rf(e, t) {
  return !!Gc(e, t);
}
function Gc(e, t) {
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && O(n)) {
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
function ra(e, t) {
  if (!A(e))
    return !1;
  const r = kn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function lc(e) {
  return Mu(e) || Um(e);
}
function KM(e, t) {
  if (Mu(e) || Um(e))
    return !0;
  if (!A(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Fm(e) && ra(e, "backward") || Rf(e, "backward");
    case "deleteForward":
      return Km(e) && ra(e, "forward") || Rf(e, "forward");
    case "insertText":
      return !1;
  }
}
function zM(e, t) {
  if (!(!A(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Gc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Fm(e) && ra(e, "backward")) {
        const n = kn(e.anchor.getNode());
        if (Re(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Gc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Km(e) && ra(e, "forward")) {
        const i = kn(e.anchor.getNode())?.getNextSibling();
        if (Re(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function qf(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return nh(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!A(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!A(e) || e.isCollapsed())
    return !1;
  const r = kn(e.anchor.getNode()), n = kn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function zm(e) {
  if (_(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else O(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function BM(e) {
  const t = e.getPreviousSibling();
  if (!Re(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? zm(r) : Qi(t) || t.selectStart();
}
function Bm(e) {
  return ye(e) || ze(e) ? [] : Re(e) ? e.getChildren().flatMap(Bm) : [e];
}
function jM(e) {
  const t = [];
  for (const r of e) {
    const n = Bm(r);
    n.length !== 0 && (Re(r) && t.length > 0 && t.push(xe(" ")), t.push(...n));
  }
  return t;
}
function $f(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function VM(e) {
  if (Array.isArray(e)) return e;
}
function WM(e, t) {
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
function HM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GM(e, t) {
  return VM(e) || WM(e, t) || JM(e, t) || HM();
}
function JM(e, t) {
  if (e) {
    if (typeof e == "string") return $f(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? $f(e, t) : void 0;
  }
}
const jm = Object.entries, If = Object.setPrototypeOf, YM = Object.isFrozen, XM = Object.getPrototypeOf, QM = Object.getOwnPropertyDescriptor;
let st = Object.freeze, lt = Object.seal, Ai = Object.create, Vm = typeof Reflect < "u" && Reflect, Jc = Vm.apply, Yc = Vm.construct;
st || (st = function(t) {
  return t;
});
lt || (lt = function(t) {
  return t;
});
Jc || (Jc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
Yc || (Yc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Mi = Ye(Array.prototype.forEach), ZM = Ye(Array.prototype.lastIndexOf), Lf = Ye(Array.prototype.pop), Ei = Ye(Array.prototype.push), eE = Ye(Array.prototype.splice), cn = Array.isArray, ks = Ye(String.prototype.toLowerCase), uc = Ye(String.prototype.toString), Df = Ye(String.prototype.match), fs = Ye(String.prototype.replace), Uf = Ye(String.prototype.indexOf), tE = Ye(String.prototype.trim), rE = Ye(Number.prototype.toString), nE = Ye(Boolean.prototype.toString), Ff = typeof BigInt > "u" ? null : Ye(BigInt.prototype.toString), Kf = typeof Symbol > "u" ? null : Ye(Symbol.prototype.toString), tt = Ye(Object.prototype.hasOwnProperty), ps = Ye(Object.prototype.toString), et = Ye(RegExp.prototype.test), $n = iE(TypeError);
function Ye(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Jc(e, t, n);
  };
}
function iE(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Yc(e, r);
  };
}
function me(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ks;
  if (If && If(e, null), !cn(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (YM(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function sE(e) {
  for (let t = 0; t < e.length; t++)
    tt(e, t) || (e[t] = null);
  return e;
}
function dt(e) {
  const t = Ai(null);
  for (const n of jm(e)) {
    var r = GM(n, 2);
    const i = r[0], s = r[1];
    tt(e, i) && (cn(s) ? t[i] = sE(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = dt(s) : t[i] = s);
  }
  return t;
}
function oE(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return rE(e);
    case "boolean":
      return nE(e);
    case "bigint":
      return Ff ? Ff(e) : "0";
    case "symbol":
      return Kf ? Kf(e) : "Symbol()";
    case "undefined":
      return ps(e);
    case "function":
    case "object": {
      if (e === null)
        return ps(e);
      const t = e, r = er(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : ps(n);
      }
      return ps(e);
    }
    default:
      return ps(e);
  }
}
function er(e, t) {
  for (; e !== null; ) {
    const n = QM(e, t);
    if (n) {
      if (n.get)
        return Ye(n.get);
      if (typeof n.value == "function")
        return Ye(n.value);
    }
    e = XM(e);
  }
  function r() {
    return null;
  }
  return r;
}
function aE(e) {
  try {
    return et(e, ""), !0;
  } catch {
    return !1;
  }
}
const zf = st(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), dc = st(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), fc = st(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), cE = st(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), pc = st(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), lE = st(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Bf = st(["#text"]), jf = st(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), hc = st(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vf = st(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), xo = st(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), uE = lt(/{{[\w\W]*|^[\w\W]*}}/g), dE = lt(/<%[\w\W]*|^[\w\W]*%>/g), fE = lt(/\${[\w\W]*/g), pE = lt(/^data-[\-\w.\u00B7-\uFFFF]+$/), hE = lt(/^aria-[\-\w]+$/), Wf = lt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), gE = lt(/^(?:\w+script|data):/i), mE = lt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), yE = lt(/^html$/i), bE = lt(/^[a-z][.\w]*(-[.\w]+)+$/i), Hf = lt(/<[/\w!]/g), Gf = lt(/<[/\w]/g), kE = lt(/<\/no(script|embed|frames)/i), xE = lt(/\/>/i), qt = {
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
}, TE = function() {
  return typeof window > "u" ? null : window;
}, vE = function(t, r) {
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
}, Jf = function() {
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
}, sn = function(t, r, n, i) {
  return tt(t, r) && cn(t[r]) ? me(i.base ? dt(i.base) : {}, t[r], i.transform) : n;
};
function Wm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : TE();
  const t = (K) => Wm(K);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== qt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, p = er(f, "cloneNode"), h = er(f, "remove"), m = er(f, "nextSibling"), y = er(f, "childNodes"), x = er(f, "parentNode"), C = er(f, "shadowRoot"), M = er(f, "attributes"), R = o && o.prototype ? er(o.prototype, "nodeType") : null, E = o && o.prototype ? er(o.prototype, "nodeName") : null, L = o && o.prototype ? er(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const K = r.createElement("template");
    K.content && K.content.ownerDocument && (r = K.content.ownerDocument);
  }
  let T, $ = "", W, G = !1, te = 0;
  const Ne = function() {
    if (te > 0)
      throw $n('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Y = function(g) {
    Ne(), te++;
    try {
      return T.createHTML(g);
    } finally {
      te--;
    }
  }, Te = function(g) {
    Ne(), te++;
    try {
      return T.createScriptURL(g);
    } finally {
      te--;
    }
  }, qe = function() {
    return G || (W = vE(u, i), G = !0), W;
  }, Ft = r, ee = Ft.implementation, B = Ft.createNodeIterator, oe = Ft.createDocumentFragment, je = Ft.getElementsByTagName, Xe = n.importNode;
  let fe = Jf();
  t.isSupported = typeof jm == "function" && typeof x == "function" && ee && ee.createHTMLDocument !== void 0;
  const wr = uE, Nt = dE, rs = fE, lr = pE, pi = hE, ns = gE, re = mE, ht = bE;
  let fo = Wf, ve = null;
  const Or = me({}, [...zf, ...dc, ...fc, ...pc, ...Bf]);
  let Q = null;
  const Rt = me({}, [...jf, ...hc, ...Vf, ...xo]);
  let be = Object.seal(Ai(null, {
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
  })), Qr = null, Zr = null;
  const ur = Object.seal(Ai(null, {
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
  let is = !0, Nr = !0, En = !1, po = !0, Tt = !1, vt = !0, ut = !1, en = !1, tn = null, hi = null, gi = !1, dr = !1, mi = !1, Pn = !1, w = !0, F = !1;
  const z = "user-content-";
  let X = !0, Se = !1, ue = {}, ke = null;
  const Ge = me({}, [
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
  let fr = null;
  const Ct = me({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kt = null;
  const pr = me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), An = "http://www.w3.org/1998/Math/MathML", ho = "http://www.w3.org/2000/svg", hr = "http://www.w3.org/1999/xhtml";
  let yi = hr, Fa = !1, Ka = null;
  const nk = me({}, [An, ho, hr], uc), ld = st(["mi", "mo", "mn", "ms", "mtext"]);
  let za = me({}, ld);
  const ud = st(["annotation-xml"]);
  let Ba = me({}, ud);
  const ik = me({}, ["title", "style", "font", "a", "script"]);
  let ss = null;
  const sk = ["application/xhtml+xml", "text/html"], ok = "text/html";
  let De = null, bi = null;
  const ak = r.createElement("form"), dd = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, ja = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (bi && bi === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = dt(g), ss = // eslint-disable-next-line unicorn/prefer-includes
    sk.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? ok : g.PARSER_MEDIA_TYPE, De = ss === "application/xhtml+xml" ? uc : ks, ve = sn(g, "ALLOWED_TAGS", Or, {
      transform: De
    }), Q = sn(g, "ALLOWED_ATTR", Rt, {
      transform: De
    }), Ka = sn(g, "ALLOWED_NAMESPACES", nk, {
      transform: uc
    }), Kt = sn(g, "ADD_URI_SAFE_ATTR", pr, {
      transform: De,
      base: pr
    }), fr = sn(g, "ADD_DATA_URI_TAGS", Ct, {
      transform: De,
      base: Ct
    }), ke = sn(g, "FORBID_CONTENTS", Ge, {
      transform: De
    }), Qr = sn(g, "FORBID_TAGS", dt({}), {
      transform: De
    }), Zr = sn(g, "FORBID_ATTR", dt({}), {
      transform: De
    }), ue = tt(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? dt(g.USE_PROFILES) : g.USE_PROFILES : !1, is = g.ALLOW_ARIA_ATTR !== !1, Nr = g.ALLOW_DATA_ATTR !== !1, En = g.ALLOW_UNKNOWN_PROTOCOLS || !1, po = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Tt = g.SAFE_FOR_TEMPLATES || !1, vt = g.SAFE_FOR_XML !== !1, ut = g.WHOLE_DOCUMENT || !1, dr = g.RETURN_DOM || !1, mi = g.RETURN_DOM_FRAGMENT || !1, Pn = g.RETURN_TRUSTED_TYPE || !1, gi = g.FORCE_BODY || !1, w = g.SANITIZE_DOM !== !1, F = g.SANITIZE_NAMED_PROPS || !1, X = g.KEEP_CONTENT !== !1, Se = g.IN_PLACE || !1, fo = aE(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : Wf, yi = typeof g.NAMESPACE == "string" ? g.NAMESPACE : hr, za = tt(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? dt(g.MATHML_TEXT_INTEGRATION_POINTS) : me({}, ld), Ba = tt(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? dt(g.HTML_INTEGRATION_POINTS) : me({}, ud);
    const v = tt(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? dt(g.CUSTOM_ELEMENT_HANDLING) : Ai(null);
    if (be = Ai(null), tt(v, "tagNameCheck") && dd(v.tagNameCheck) && (be.tagNameCheck = v.tagNameCheck), tt(v, "attributeNameCheck") && dd(v.attributeNameCheck) && (be.attributeNameCheck = v.attributeNameCheck), tt(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (be.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), lt(be), Tt && (Nr = !1), mi && (dr = !0), ue && (ve = me({}, Bf), Q = Ai(null), ue.html === !0 && (me(ve, zf), me(Q, jf)), ue.svg === !0 && (me(ve, dc), me(Q, hc), me(Q, xo)), ue.svgFilters === !0 && (me(ve, fc), me(Q, hc), me(Q, xo)), ue.mathMl === !0 && (me(ve, pc), me(Q, Vf), me(Q, xo))), ur.tagCheck = null, ur.attributeCheck = null, tt(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? ur.tagCheck = g.ADD_TAGS : cn(g.ADD_TAGS) && (ve === Or && (ve = dt(ve)), me(ve, g.ADD_TAGS, De))), tt(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? ur.attributeCheck = g.ADD_ATTR : cn(g.ADD_ATTR) && (Q === Rt && (Q = dt(Q)), me(Q, g.ADD_ATTR, De))), tt(g, "ADD_URI_SAFE_ATTR") && cn(g.ADD_URI_SAFE_ATTR) && me(Kt, g.ADD_URI_SAFE_ATTR, De), tt(g, "FORBID_CONTENTS") && cn(g.FORBID_CONTENTS) && (ke === Ge && (ke = dt(ke)), me(ke, g.FORBID_CONTENTS, De)), tt(g, "ADD_FORBID_CONTENTS") && cn(g.ADD_FORBID_CONTENTS) && (ke === Ge && (ke = dt(ke)), me(ke, g.ADD_FORBID_CONTENTS, De)), X && (ve["#text"] = !0), ut && me(ve, ["html", "head", "body"]), ve.table && (me(ve, ["tbody"]), delete Qr.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw $n('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw $n('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = T;
      T = g.TRUSTED_TYPES_POLICY;
      try {
        $ = Y("");
      } catch (V) {
        throw T = I, V;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (T = void 0, $ = "") : (T === void 0 && (T = qe()), T && typeof $ == "string" && ($ = Y("")));
    st && st(g), bi = g;
  }, fd = me({}, [...dc, ...fc, ...cE]), pd = me({}, [...pc, ...lE]), ck = function(g, v, I) {
    return v.namespaceURI === hr ? g === "svg" : v.namespaceURI === An ? g === "svg" && (I === "annotation-xml" || za[I]) : !!fd[g];
  }, lk = function(g, v, I) {
    return v.namespaceURI === hr ? g === "math" : v.namespaceURI === ho ? g === "math" && Ba[I] : !!pd[g];
  }, uk = function(g, v, I) {
    return v.namespaceURI === ho && !Ba[I] || v.namespaceURI === An && !za[I] ? !1 : !pd[g] && (ik[g] || !fd[g]);
  }, dk = function(g) {
    let v = x(g);
    (!v || !v.tagName) && (v = {
      namespaceURI: yi,
      tagName: "template"
    });
    const I = ks(g.tagName), V = ks(v.tagName);
    return Ka[g.namespaceURI] ? g.namespaceURI === ho ? ck(I, v, V) : g.namespaceURI === An ? lk(I, v, V) : g.namespaceURI === hr ? uk(I, v, V) : !!(ss === "application/xhtml+xml" && Ka[g.namespaceURI]) : !1;
  }, rn = function(g) {
    Ei(t.removed, {
      element: g
    });
    try {
      x(g).removeChild(g);
    } catch {
      if (h(g), !x(g))
        throw $n("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, go = function(g) {
    os(g);
    const v = y(g);
    if (v) {
      const V = [];
      Mi(v, (J) => {
        Ei(V, J);
      }), Mi(V, (J) => {
        try {
          h(J);
        } catch {
        }
      });
    }
    const I = M(g);
    if (I)
      for (let V = I.length - 1; V >= 0; --V) {
        const J = I[V], ae = J && J.name;
        if (typeof ae == "string")
          try {
            g.removeAttribute(ae);
          } catch {
          }
      }
  }, wn = function(g, v) {
    try {
      Ei(t.removed, {
        attribute: v.getAttributeNode(g),
        from: v
      });
    } catch {
      Ei(t.removed, {
        attribute: null,
        from: v
      });
    }
    if (v.removeAttribute(g), g === "is")
      if (dr || mi)
        try {
          rn(v);
        } catch {
        }
      else
        try {
          v.setAttribute(g, "");
        } catch {
        }
  }, fk = function(g) {
    const v = M(g);
    if (v)
      for (let I = v.length - 1; I >= 0; --I) {
        const V = v[I], J = V && V.name;
        if (!(typeof J != "string" || Q[De(J)]))
          try {
            g.removeAttribute(J);
          } catch {
          }
      }
  }, os = function(g) {
    const v = [g];
    for (; v.length > 0; ) {
      const I = v.pop();
      (R ? R(I) : I.nodeType) === qt.element && fk(I);
      const J = y(I);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          v.push(J[ae]);
    }
  }, pk = function(g) {
    if (!vt)
      return;
    const v = [g];
    for (; v.length > 0; ) {
      const I = v.pop(), V = R ? R(I) : I.nodeType;
      if (V === qt.processingInstruction || V === qt.comment && et(Gf, I.data)) {
        try {
          h(I);
        } catch {
        }
        continue;
      }
      if (V === qt.element) {
        const ae = I, Me = De(E ? E(I) : I.nodeName);
        try {
          ae.hasAttribute && ae.hasAttribute("patchsrc") && ae.removeAttribute("patchsrc"), ae.hasAttribute && ae.hasAttribute("for") && Me !== "label" && Me !== "output" && ae.removeAttribute("for");
        } catch {
        }
      }
      const J = y(I);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          v.push(J[ae]);
    }
  }, hd = function(g) {
    let v = null, I = null;
    if (gi)
      g = "<remove></remove>" + g;
    else {
      const ae = Df(g, /^[\r\n\t ]+/);
      I = ae && ae[0];
    }
    ss === "application/xhtml+xml" && yi === hr && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const V = T ? Y(g) : g;
    if (yi === hr)
      try {
        v = new d().parseFromString(V, ss);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = ee.createDocument(yi, "template", null);
      try {
        v.documentElement.innerHTML = Fa ? $ : V;
      } catch {
      }
    }
    const J = v.body || v.documentElement;
    return g && I && J.insertBefore(r.createTextNode(I), J.childNodes[0] || null), yi === hr ? je.call(v, ut ? "html" : "body")[0] : ut ? v.documentElement : J;
  }, gd = function(g) {
    const v = L ? L(g) : g.ownerDocument;
    return B.call(
      v || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, mo = function(g) {
    return g = fs(g, wr, " "), g = fs(g, Nt, " "), g = fs(g, rs, " "), g;
  }, Va = function(g) {
    var v;
    g.normalize();
    const I = L ? L(g) : g.ownerDocument, V = B.call(
      I || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = V.nextNode();
    for (; J; )
      J.data = mo(J.data), J = V.nextNode();
    const ae = (v = g.querySelectorAll) === null || v === void 0 ? void 0 : v.call(g, "template");
    ae && Mi(ae, (Me) => {
      ki(Me.content) && Va(Me.content);
    });
  }, yo = function(g) {
    const v = E ? E(g) : null;
    return typeof v != "string" || De(v) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== M(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    g.nodeType !== R(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    g.childNodes !== y(g);
  }, ki = function(g) {
    if (!R || typeof g != "object" || g === null)
      return !1;
    try {
      return R(g) === qt.documentFragment;
    } catch {
      return !1;
    }
  }, as = function(g) {
    if (!R || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof R(g) == "number";
    } catch {
      return !1;
    }
  };
  function gr(K, g, v) {
    K.length !== 0 && Mi(K, (I) => {
      I.call(t, g, v, bi);
    });
  }
  const hk = function(g, v) {
    return !!(vt && g.hasChildNodes() && !as(g.firstElementChild) && et(Hf, g.textContent) && et(Hf, g.innerHTML) || vt && g.namespaceURI === hr && v === "style" && as(g.firstElementChild) || g.nodeType === qt.processingInstruction || vt && g.nodeType === qt.comment && et(Gf, g.data));
  }, gk = function(g, v, I) {
    if (!Qr[v] && kd(v) && (be.tagNameCheck instanceof RegExp && et(be.tagNameCheck, v) || be.tagNameCheck instanceof Function && be.tagNameCheck(v)))
      return !1;
    if (X && !ke[v]) {
      const V = x(g), J = y(g);
      if (J && V) {
        const ae = J.length;
        for (let Me = ae - 1; Me >= 0; --Me) {
          const Ue = g === I ? p(J[Me], !0) : J[Me];
          V.insertBefore(Ue, m(g));
        }
      }
    }
    return rn(g), !0;
  }, md = function(g, v, I, V) {
    return g.length === 0 ? v : v === I || v === V ? dt(v) : v;
  }, yd = function(g, v) {
    if (gr(fe.beforeSanitizeElements, g, null), g !== v && x(g) === null)
      return Se && os(g), !0;
    if (yo(g))
      return rn(g), !0;
    const I = De(E ? E(g) : g.nodeName);
    if (ve = md(fe.uponSanitizeElement, ve, Or, tn), gr(fe.uponSanitizeElement, g, {
      tagName: I,
      allowedTags: ve
    }), g !== v && x(g) === null)
      return Se && os(g), !0;
    if (hk(g, I))
      return rn(g), !0;
    if (Qr[I] || !(ur.tagCheck instanceof Function && ur.tagCheck(I)) && !ve[I]) {
      const J = gk(g, I, v);
      return J === !1 && gr(fe.afterSanitizeElements, g, null), J;
    }
    if ((R ? R(g) : g.nodeType) === qt.element && !dk(g) || (I === "noscript" || I === "noembed" || I === "noframes") && et(kE, g.innerHTML))
      return rn(g), !0;
    if (Tt && g.nodeType === qt.text) {
      const J = mo(g.textContent);
      g.textContent !== J && (Ei(t.removed, {
        element: g.cloneNode()
      }), g.textContent = J);
    }
    return gr(fe.afterSanitizeElements, g, null), !1;
  }, bd = function(g, v, I) {
    if (Zr[v] || vt && v === "patchsrc" || vt && v === "for" && g !== "label" && g !== "output" || w && (v === "id" || v === "name") && (I in r || I in ak))
      return !1;
    const V = Q[v] || ur.attributeCheck instanceof Function && ur.attributeCheck(v, g);
    if (!(Nr && et(lr, v))) {
      if (!(is && et(pi, v))) {
        if (V) {
          if (!Kt[v]) {
            if (!et(fo, fs(I, re, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && g !== "script" && Uf(I, "data:") === 0 && fr[g])) {
                if (!(En && !et(ns, fs(I, re, "")))) {
                  if (I)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(kd(g) && (be.tagNameCheck instanceof RegExp && et(be.tagNameCheck, g) || be.tagNameCheck instanceof Function && be.tagNameCheck(g)) && (be.attributeNameCheck instanceof RegExp && et(be.attributeNameCheck, v) || be.attributeNameCheck instanceof Function && be.attributeNameCheck(v, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && be.allowCustomizedBuiltInElements && (be.tagNameCheck instanceof RegExp && et(be.tagNameCheck, I) || be.tagNameCheck instanceof Function && be.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, mk = me({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), kd = function(g) {
    return !mk[ks(g)] && et(ht, g);
  }, yk = function(g, v, I, V) {
    if (T && typeof u == "object" && typeof u.getAttributeType == "function" && !I)
      switch (u.getAttributeType(g, v)) {
        case "TrustedHTML":
          return Y(V);
        case "TrustedScriptURL":
          return Te(V);
      }
    return V;
  }, bk = function(g, v, I, V) {
    try {
      I ? g.setAttributeNS(I, v, V) : g.setAttribute(v, V), yo(g) ? rn(g) : Lf(t.removed);
    } catch {
      wn(v, g);
    }
  }, xd = function(g) {
    gr(fe.beforeSanitizeAttributes, g, null);
    const v = g.attributes;
    if (!v || yo(g))
      return;
    Q = md(fe.uponSanitizeAttribute, Q, Rt, hi);
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Q,
      forceKeepAttr: void 0
    };
    let V = v.length;
    const J = De(g.nodeName);
    for (; V--; ) {
      const ae = v[V], Me = ae.name, Ue = ae.namespaceURI, _t = ae.value, St = De(Me), Ha = _t;
      let gt = Me === "value" ? Ha : tE(Ha);
      if (I.attrName = St, I.attrValue = gt, I.keepAttr = !0, I.forceKeepAttr = void 0, gr(fe.uponSanitizeAttribute, g, I), gt = I.attrValue, F && (St === "id" || St === "name") && Uf(gt, z) !== 0 && (wn(Me, g), gt = z + gt), vt && et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, gt)) {
        wn(Me, g);
        continue;
      }
      if (St === "attributename" && Df(gt, "href")) {
        wn(Me, g);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          wn(Me, g);
          continue;
        }
        if (!po && et(xE, gt)) {
          wn(Me, g);
          continue;
        }
        if (Tt && (gt = mo(gt)), !bd(J, St, gt)) {
          wn(Me, g);
          continue;
        }
        gt = yk(J, St, Ue, gt), gt !== Ha && bk(g, Me, Ue, gt);
      }
    }
    gr(fe.afterSanitizeAttributes, g, null);
  }, bo = function(g) {
    let v = null;
    const I = gd(g);
    for (gr(fe.beforeSanitizeShadowDOM, g, null); v = I.nextNode(); )
      if (gr(fe.uponSanitizeShadowNode, v, null), yd(v, g), xd(v), ki(v.content) && bo(v.content), (R ? R(v) : v.nodeType) === qt.element) {
        const J = C(v);
        ki(J) && (Wa(J), bo(J));
      }
    gr(fe.afterSanitizeShadowDOM, g, null);
  }, Wa = function(g) {
    const v = [{
      node: g,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const I = v.pop();
      if (I.shadow) {
        bo(I.shadow);
        continue;
      }
      const V = I.node, ae = (R ? R(V) : V.nodeType) === qt.element, Me = y(V);
      if (Me)
        for (let Ue = Me.length - 1; Ue >= 0; --Ue)
          v.push({
            node: Me[Ue],
            shadow: null
          });
      if (ae) {
        const Ue = E ? E(V) : null;
        if (typeof Ue == "string" && De(Ue) === "template") {
          const _t = V.content;
          ki(_t) && v.push({
            node: _t,
            shadow: null
          });
        }
      }
      if (ae) {
        const Ue = C(V);
        ki(Ue) && v.push({
          node: null,
          shadow: Ue
        }, {
          node: Ue,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(K) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, v = null, I = null, V = null, J = null;
    if (Fa = !K, Fa && (K = "<!-->"), typeof K != "string" && !as(K) && (K = oE(K), typeof K != "string"))
      throw $n("dirty is not a string, aborting");
    if (!t.isSupported)
      return K;
    en ? (ve = tn, Q = hi) : ja(g), (fe.uponSanitizeElement.length > 0 || fe.uponSanitizeAttribute.length > 0) && (ve = dt(ve)), fe.uponSanitizeAttribute.length > 0 && (Q = dt(Q)), t.removed = [];
    const ae = Se && typeof K != "string" && as(K);
    if (ae) {
      pk(K);
      const _t = E ? E(K) : K.nodeName;
      if (typeof _t == "string") {
        const St = De(_t);
        if (!ve[St] || Qr[St])
          throw go(K), $n("root node is forbidden and cannot be sanitized in-place");
      }
      if (yo(K))
        throw go(K), $n("root node is clobbered and cannot be sanitized in-place");
      try {
        Wa(K);
      } catch (St) {
        throw go(K), St;
      }
    } else if (as(K))
      v = hd("<!---->"), I = v.ownerDocument.importNode(K, !0), I.nodeType === qt.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? v = I : v.appendChild(I), Wa(I);
    else {
      if (!dr && !Tt && !ut && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return T && Pn ? Y(K) : K;
      if (v = hd(K), !v)
        return dr ? null : Pn ? $ : "";
    }
    v && gi && rn(v.firstChild);
    const Me = ae ? K : v;
    try {
      const _t = gd(Me);
      for (; V = _t.nextNode(); )
        yd(V, Me), xd(V), ki(V.content) && bo(V.content);
    } catch (_t) {
      throw ae && (go(K), Mi(t.removed, (St) => {
        St.element && os(St.element);
      })), _t;
    }
    if (ae)
      return Mi(t.removed, (_t) => {
        _t.element && os(_t.element);
      }), Tt && Va(K), K;
    if (dr) {
      if (Tt && Va(v), mi)
        for (J = oe.call(v.ownerDocument); v.firstChild; )
          J.appendChild(v.firstChild);
      else
        J = v;
      return (Q.shadowroot || Q.shadowrootmode) && (J = Xe.call(n, J, !0)), J;
    }
    let Ue = ut ? v.outerHTML : v.innerHTML;
    return ut && ve["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && et(yE, v.ownerDocument.doctype.name) && (Ue = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + Ue), Tt && (Ue = mo(Ue)), T && Pn ? Y(Ue) : Ue;
  }, t.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ja(K), en = !0, tn = ve, hi = Q;
  }, t.clearConfig = function() {
    bi = null, en = !1, tn = null, hi = null, T = W, $ = "";
  }, t.isValidAttribute = function(K, g, v) {
    bi || ja({});
    const I = De(K), V = De(g);
    return bd(I, V, v);
  }, t.addHook = function(K, g) {
    typeof g == "function" && tt(fe, K) && Ei(fe[K], g);
  }, t.removeHook = function(K, g) {
    if (tt(fe, K)) {
      if (g !== void 0) {
        const v = ZM(fe[K], g);
        return v === -1 ? void 0 : eE(fe[K], v, 1)[0];
      }
      return Lf(fe[K]);
    }
  }, t.removeHooks = function(K) {
    tt(fe, K) && (fe[K] = []);
  }, t.removeAllHooks = function() {
    fe = Jf();
  }, t;
}
var CE = Wm();
function _E({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = Z(void 0), [n, i] = he(void 0), s = de((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = FM(p);
      if (!h)
        return !1;
      const m = N();
      return e === "protected" ? m && KM(m, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const m = N(), y = r.current;
      if (y && m && qf(m, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const C = H(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (C) {
            const M = C.getParent(), R = C.getPreviousSibling(), E = C.getNextSibling();
            C.remove(), R ? zm(R) : E && _(E) ? E.select(0, 0) : M?.selectStart();
          }
        } else y.kind === "selection" ? A(m) && m.removeText() : Re(C) && BM(C);
        return !0;
      }
      if (!m)
        return !1;
      const x = zM(m, p);
      if (x) {
        if (x.kind === "verse") {
          const C = ih();
          C.add(x.node.getKey()), fn(C);
        } else {
          const C = Gs();
          C.anchor.set(x.node.getKey(), 0, "element"), C.focus.set(x.node.getKey(), x.node.getChildrenSize(), "element"), fn(C);
        }
        return s({ key: x.node.getKey(), kind: x.kind, intent: p }), h.preventDefault(), !0;
      }
      if (A(m) && !m.isCollapsed() && Mu(m)) {
        const C = m.getNodes().filter(ye).map((E) => E.getKey()), { anchor: M, focus: R } = m;
        return s({
          kind: "selection",
          intent: p,
          key: C[0],
          anchor: { key: M.key, offset: M.offset, type: M.type },
          focus: { key: R.key, offset: R.offset, type: R.type }
        }), h.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return !h || !lc(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const m = CE.sanitize(p), y = new DOMParser().parseFromString(m, "text/html"), x = jM(rx(t, y)), C = N();
      return A(C) && C.insertNodes(x), h.preventDefault(), !0;
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && lc(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && lc(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        qf(N(), p) || s(void 0);
      });
    };
    return nt(t.registerCommand(Vr, o, Ke), t.registerCommand(Vn, c, Ke), t.registerCommand($r, d, Ke), t.registerCommand(Ik, c, Ke), t.registerCommand(Ml, u, Ke), t.registerCommand(Sl, c, Ke), t.registerUpdateListener(f));
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
const $O = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function SE({ textDirection: e }) {
  const [t] = le();
  return ME(t, e), null;
}
function ME(e, t) {
  j(() => (Yf(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Yf(e, t);
  })), [e, t]);
}
function Yf(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function EE() {
  const [e] = le();
  return PE(e), null;
}
function PE(e) {
  j(() => {
    if (!e.hasNodes([_e, wt, $e, Ve, mt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return nt(
      e.registerNodeTransform(Ve, AE),
      e.registerNodeTransform(Ve, (t) => wE(t, e)),
      e.registerNodeTransform(mt, Xf),
      e.registerNodeTransform(wt, Xf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(mt, (t) => {
        Ds(Kr("va"), t), Ds(Kr("vp"), t);
      })
    );
  }, [e]);
}
function AE(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || U(r) || D(n) || D(r) || pe(n) || pe(r) || Oe(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  _(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
  // whitespace (Paratext 9 preserves the spaces around `//` byte-for-byte). Forcing a trailing
  // space onto the text before one — or removing a lone space there — corrupts the authored form
  // and makes the space impossible to delete (the transform re-adds it every keystroke). Text
  // adjacent to an inline unknown is left exactly as authored, the same next-sibling exemption
  // already applied to notes, chars, and typed marks. Block-level unknowns (figures, sidebars)
  // keep the existing spacing behavior.
  Oe(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  se(e, ce) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Le(n))
    return;
  if (ye(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ye(r) && nu(e);
}
function wE(e, t) {
  const r = e.getParent();
  !Oe(r) || !e.isAttached() || Zg(t, e.getKey()) && r.insertAfter(e);
}
function Xf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; pe(t); )
    t = t.getLastChild();
  (D(t) || _(t) && pe(t.getParent()) && !OE(t)) && e.insertBefore(xe(" "));
}
function OE(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith(q);
}
function Eu(e) {
  if (!U(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Vl(n)) ? void 0 : e;
}
function NE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (O(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function RE() {
  const e = N();
  if (!(!A(e) || !e.isCollapsed()))
    return Eu(NE(e.anchor));
}
function qE(e) {
  const t = N();
  let r;
  return A(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Hm(e.target)), r ? Eu(rt(r, U)) : void 0;
}
function Hm(e) {
  const t = Lk(e)?.anchorNode;
  if (th(t))
    return Js(t) ?? void 0;
}
function $E(e) {
  if (N())
    return;
  const t = Hm(e);
  return t ? Eu(rt(t, U)) : void 0;
}
function IE() {
  const [e] = le(), t = Lm(RE);
  return j(() => {
    const r = (n) => {
      t(n) && Wn(Os);
    };
    return nt(e.registerCommand(Tr, () => {
      const n = $E(e.getRootElement());
      return n && r(n), !1;
    }, jn), e.registerCommand(ha, (n) => {
      const i = qE(n);
      return i && r(i), !1;
    }, jn));
  }, [e, t]), null;
}
function LE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = lS({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return S(cS, { trigger: e, items: i });
}
function DE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = Fe(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? S(KE, { trigger: e, harness: i }) : S(LE, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const UE = [" ", "*"];
function FE(e, t) {
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
function KE({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = he(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = de((f, p, h) => {
    const m = p.find((y) => y.kind === "note" && y.marker === f);
    if (m) {
      t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = N();
      A(y) && y.insertText(`${e}${f}${h ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => nt(r.registerCommand(Vr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), Dk(() => {
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
        const m = n.items.find((y) => y.marker === h);
        return m && t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
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
  }, Ke), r.registerCommand(sh, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, qi)), [r, e, t, n, a]);
  const c = de(() => i(void 0), []), l = de((f, p) => {
    s.current = { query: f, options: p };
  }, []), d = de((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), u = Fe(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    FE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && S(xm, { isOpen: !0, children: ({ placement: f }) => S(
    Cm,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? UE : void 0 },
    n.session
  ) });
}
function Gm(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (r) => q.repeat(r.length));
}
function zE(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
let na;
function BE(e) {
  e && (na = e);
}
function Jm(e) {
  return Ot(e);
}
function jE(e, t) {
  return e.isEmpty() ? Qp : Ym(e.toJSON(), t);
}
function Ym(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && ka(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Qp;
  if (r.some(cC)) {
    na?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Xm(r), i = tr(n, t);
  return i ? { type: Dr, version: Lr, content: i } : void 0;
}
function VE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Ie({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function WE(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ie({
    type: Ut.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function HE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = xg(r, a, c), Ie({
    type: Ut.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function GE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = xg(t, o, a), Ie({
    type: mt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function JE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Jm(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(q) && (t[0] = a.slice(1));
  }
  return Ie({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function YE(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ie({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function XE(e, t) {
  const { unknownAttributes: r } = e;
  return Ie({ type: Ng, ...r, content: t });
}
function QE(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ie({ type: $g, marker: r, ...n, content: t });
}
function ZE(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ie({
    type: Dg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function e1(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Ie({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function wi(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ie({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Dh({ sid: n, eid: i, ...s }, o)
  });
}
function t1(e) {
  return e.text;
}
function r1(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ie({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function n1(e) {
  const { marker: t } = e;
  return {
    type: Wo,
    marker: t === "" ? void 0 : t
  };
}
function Qf(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function i1(e, t, r, n, i) {
  const s = ir.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = wi({
      type: s,
      marker: $i,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = wi({
      type: s,
      marker: Hn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = wi({
      type: s,
      marker: Hn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = wi({
      type: s,
      marker: $i
    });
    i.push(l);
  }
  (!n || !eo(n)) && t.forEach((l) => {
    const d = wi({
      type: s,
      marker: $i,
      eid: l
    });
    i.push(d);
  });
}
function s1(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && eo(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return Zs(i) && i.markerSyntax === "opening";
}
function o1(e) {
  let t = e;
  for (; eo(t); ) t = t.children[0];
  return t;
}
function a1(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!Zs(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = o1(e[r]);
  if (Xn(n) && n.text === Lt(t))
    return n;
}
function tr(e, t, r, n = !1, i) {
  const s = [];
  let o, a = [];
  return e.forEach((c, l) => {
    const d = c, u = c, f = c, p = c, h = c, m = c, y = c, x = c;
    switch (c.type) {
      case Jt.getType():
        s.push(
          VE(
            d,
            tr(d.children, t)
          )
        );
        break;
      case Er.getType():
        s.push(WE(c));
        break;
      case Ut.getType():
        s.push(
          HE(
            u,
            tr(u.children, t)
          )
        );
        break;
      case wt.getType():
      case mt.getType():
        s.push(GE(c));
        break;
      case _e.getType():
        s.push(
          JE(
            f,
            tr(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case it.getType():
        s.push(
          YE(
            p,
            tr(p.children, t)
          )
        );
        break;
      case ai.getType():
        s.push(
          XE(
            c,
            tr(c.children, t)
          )
        );
        break;
      case ci.getType():
        s.push(
          QE(
            c,
            tr(c.children, t)
          )
        );
        break;
      case li.getType():
        s.push(
          ZE(
            c,
            tr(c.children, t)
          )
        );
        break;
      case $e.getType():
        s.push(
          e1(
            h,
            tr(
              h.children,
              t,
              a1(h.children, h.caller)
            )
          )
        );
        break;
      case Hr.getType():
      case Jr.getType():
      case nr.getType():
      case oh.getType():
      case Sr.getType():
        break;
      case Qe.getType():
        if (o = tr(
          y.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const C = y.typedIDs[ln];
          if (C) {
            const M = e[l + 1];
            i1(o, C, a, M, s), a = M && eo(M) ? C : [];
          } else {
            const M = o.shift();
            M && (typeof M == "string" ? Qf(s, M) : s.push(M)), o.length > 0 && s.push(...o);
          }
        }
        break;
      case ir.getType():
        s.push(wi(c));
        break;
      case Ve.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !io(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== q && !m.text.startsWith(Al) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[zn]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let C = t1(m);
          Jm(t) && (s1(e, l, i, n) && C.startsWith(q) && (C = C.slice(1)), C = zE(rv(C))), Qf(s, C);
        }
        break;
      case oi.getType():
        s.push(
          r1(
            x,
            tr(x.children, t)
          )
        );
        break;
      case Xr.getType():
        s.push(n1(c));
        break;
      case Ji.getType():
        na?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        na?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function Xm(e) {
  const t = e.findIndex((r) => ka(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Xm(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const hs = {
  initialize: BE,
  deserializeEditorState: jE
}, c1 = /^sd\d*$/, l1 = /* @__PURE__ */ new Set([
  ...Object.entries(Sc).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !c1.test(e)
  ).map(([e]) => e),
  "qa"
]);
function u1(e, t) {
  const r = [];
  let n;
  for (const [i, s] of e.entries()) {
    if (ug(s) || mg(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (!lv(s)) {
      t && ia(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(s) : r.push(s);
      continue;
    }
    if (jl(s) && l1.has(s.marker) && !ia(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (s.children.length === 0) {
      n ? n.children.push(s) : r.push(s);
      continue;
    }
    Qm(s.children, t).forEach((o) => {
      const a = d1(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        n ? n.children.push(a) : r.push(a);
        return;
      }
      n = f1(o.verse), r.push(n), a && n.children.push(a);
    });
  }
  return r;
}
function Qm(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Zm(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (eo(i)) {
      const s = Qm(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Zf(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Zf(i, c.nodes)] });
      });
      return;
    }
    t && ia(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Zf(e, t) {
  return { ...e, children: t };
}
function Zm(e) {
  return Yg(e) && e.number !== "";
}
function ia(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Zm(r) || ia(r)) : !1;
}
function d1(e, t, r) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [zn]: { ...e[zn], [Wg.key]: r }
    };
}
function f1(e) {
  return {
    type: Ho,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Hg
  };
}
const ep = ty([]), p1 = {
  type: oh.getType(),
  version: 1
};
let Pu = [], ne, ti, ey, At;
function h1(e, t) {
  Pu = [], y1(e), b1(t);
}
function g1(e = 0) {
}
function m1(e, t) {
  ne = t ?? Pa();
  let r;
  return e ? (e.type !== Dr && At?.warn(`This USJ type '${e.type}' didn't match the expected type '${Dr}'.`), e.version !== Lr && At?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${Lr}'.`
  ), e.content.length > 0 ? (r = el(on(e.content)), Fs(ne) && (r = u1(r, At))) : r = [ep]) : r = [ep], ey?.(Pu), {
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
function y1(e) {
  e && (ti = e), e?.addMissingComments && (ey = e.addMissingComments);
}
function b1(e) {
  e && (At = e);
}
function Au() {
  return Ot(ne);
}
function k1(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function x1(e) {
  let { marker: t } = e;
  t !== qs && At?.warn(`Unexpected book marker '${t}'!`), t = t ?? qs;
  const { code: r } = e;
  (!r || !Jt.isValidBookCode(r)) && At?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ne?.markerMode === "editable" || ne?.markerMode === "visible" ? n.push(
    Et("marker", we(t) + " " + r + q)
  ) : ne?.hasGutterParaMarkers && n.push(Et("marker", we(t) + q, !0));
  const i = k1(e.content);
  i && n.push(pt(Au() ? Gm(i) : i));
  const s = Be(e, GT);
  return Ie({
    type: Jt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: cg
  });
}
function T1(e) {
  let { marker: t } = e;
  t !== jo && At?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? jo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Be(e, uT);
  let a;
  ne?.markerMode === "visible" && (a = !0);
  const c = [
    pt(Wt(t, r) ?? "")
  ];
  return ne?.markerMode === "editable" && D1(i, s, c), ne?.markerMode === "editable" ? Ie({
    type: Ut.getType(),
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
    version: Wh
  }) : Ie({
    type: Er.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: dg
  });
}
function v1(e) {
  let { marker: t } = e;
  t !== Bo && At?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Bo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (b_(ne) ?? wt).getType(), c = ne?.markerMode === "editable" ? $h : Jg;
  let l, d;
  ne?.markerMode === "editable" ? l = Wt(t, r) : ne?.markerMode === "visible" && (d = !0);
  const u = Be(e, sT);
  return Ie({
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
function C1(e, t = [], r = !1) {
  let { marker: n } = e;
  _e.isValidMarker(n, ti?.extraValidMarkers) || At?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ne?.markerMode === "editable") {
    const [a] = t;
    Xn(a) ? a.text = q + a.text : a && t.unshift(pt(q));
  }
  t.length === 0 && t.push(pt(Gt)), Xc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Be(e, tT);
  return s || q1(n, o, i), s || Qc(e.marker ?? "", i, !1, r), Ie({
    type: _e.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: qh
  });
}
function ty(e) {
  return {
    type: hn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Gh
  };
}
function _1(e, t = []) {
  let { marker: r } = e;
  it.isValidMarker(r, ti?.extraValidMarkers) || At?.warn(`Unexpected para marker '${r}'!`), r = r ?? br;
  const n = [];
  if (Yi(ne) && (ne?.markerMode === "editable" ? n.push(
    bt(r),
    pt(q, Mr, "token")
  ) : (ne?.markerMode === "visible" || ne?.hasGutterParaMarkers) && n.push(
    Et(
      "marker",
      we(r) + q,
      ne?.hasGutterParaMarkers
    )
  )), n.push(...t), Au()) {
    const s = n.find(
      (o) => !Zs(o) && !(Xn(o) && o.text === q)
    );
    Xn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = Be(e, ZT);
  return Ie({
    type: it.getType(),
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
function wu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function S1(e, t = []) {
  const r = Be(e, Av);
  return Ie({
    ...wu(),
    type: ai.getType(),
    unknownAttributes: r,
    children: t,
    version: Rg
  });
}
function M1(e, t = []) {
  const r = Be(e, Nv), n = e.marker ?? qc, i = [];
  return ne?.markerMode === "editable" ? i.push(
    bt(n),
    pt(q, Mr, "token")
  ) : (ne?.markerMode === "visible" || ne?.hasGutterParaMarkers) && i.push(
    Et(
      "marker",
      we(n) + q,
      ne?.hasGutterParaMarkers
    )
  ), i.push(...t), Ie({
    ...wu(),
    type: ci.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Ig
  });
}
function E1(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? $c;
  ne?.markerMode === "editable" ? s.push(
    bt(o),
    pt(q, Mr, "token")
  ) : (ne?.markerMode === "visible" || ne?.hasGutterParaMarkers) && s.push(
    Et(
      "marker",
      we(o) + q,
      ne?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Be(
    e,
    qv
  );
  return Ie({
    ...wu(),
    type: li.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: Ug
  });
}
function P1(e, t) {
  const r = gv(t);
  let n = () => {
  };
  return ti?.noteCallerOnClick && (n = ti.noteCallerOnClick), Ie({
    type: nr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: im
  });
}
function A1(e, t) {
  let { marker: r } = e;
  $e.isValidMarker(r, ti?.extraValidMarkers) || At?.warn(`Unexpected note marker '${r}'!`), r = r ?? ql;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : ku(ne?.noteMode), a = Be(e, vx), c = ne?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  ne?.markerMode === "editable" ? (l = bt(r, "opening", !1, c), s || (d = bt(r, "closing"))) : ne?.markerMode === "visible" && (l = Et("marker", we(r) + " "), s || (d = Et("marker", He(r))));
  const u = [];
  let f;
  if (l && u.push(l), ne?.markerMode === "editable" && !o)
    f = pt(Lt(i), void 0, c), u.push(f), L1(n, u), u.push(...t);
  else {
    const p = pt(q, Mr, "token");
    f = P1(i, t), u.push(f, p, ...t.flatMap(w1(p)));
  }
  return d && u.push(d), Ie({
    type: $e.getType(),
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
function w1(e) {
  return (t) => tg(t) ? [t] : [t, e];
}
function O1(e) {
  let { marker: t } = e;
  (!t || !ir.isValidMarker(t, ti?.extraValidMarkers)) && At?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Be(e, Rl), s = Uh(e);
  return Ie({
    type: ir.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Th
  });
}
function tp(e, t = []) {
  return {
    type: Qe.getType(),
    typedIDs: { [ln]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function N1(e, t) {
  const { marker: r } = e, n = e.type, i = Be(e, kT), s = [];
  if (ne?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Ta(
      n,
      r,
      i
    );
    o && s.push(Et("marker", o)), a && s.push(Et("attribute", a)), s.push(...t), c && s.push(Et("attribute", c)), l && s.push(Et("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    Xn(o) && (o.mode = "token");
  }), Ie({
    type: oi.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: rg
  });
}
function R1(e) {
  return {
    type: Xr.getType(),
    marker: e,
    text: vs(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ne?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: wg
  };
}
function bt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Sr.getType(),
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
function pt(e, t = void 0, r = "normal") {
  const n = {
    type: Ve.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[zn] = { textType: t }), n;
}
function Et(e, t, r = !1) {
  const n = {
    type: Jr.getType(),
    text: t,
    textType: e,
    version: eg
  };
  return r && (n[zn] = { [Fl.key]: !0 }), n;
}
function Ks(e, t) {
  return {
    type: Hr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: wh
  };
}
function Xc(e, t, r = !1) {
  ne?.markerMode === "editable" ? t.push(bt(e, "opening", r)) : ne?.markerMode === "visible" && t.push(Et("marker", we(e, r)));
}
function Qc(e, t, r = !1, n = !1) {
  ne?.markerMode === "editable" ? r ? t.push(bt("", "selfClosing")) : t.push(bt(e, "closing", n)) : ne?.markerMode === "visible" && t.push(
    Et(
      "marker",
      r ? He("") : He(e, n)
    )
  );
}
function q1(e, t, r) {
  if (ne?.markerMode !== "editable" || !t) return;
  const n = yr(t, Xs(e));
  n && r.push(pt(n, "attribute"));
}
function rp(e, t) {
  if (e.type !== "ms" || ne?.markerMode !== "editable" && ne?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Be(e, Rl), o = Fh(
    n,
    i,
    s,
    Uh(e)
  ), a = yr(o, Qs(r ?? ""));
  if (!a) return;
  const c = q + a;
  ne?.markerMode === "editable" ? t.push(pt(c, "attribute")) : t.push(Et("attribute", c));
}
function $1(e, t) {
  const r = e.marker ?? "";
  if (ne?.markerMode === "editable") {
    const n = [];
    Xc(r, n), rp(e, n), Qc(r, n, !0), t.push(Ks("milestone", n));
  } else
    Xc(r, t), rp(e, t), Qc(r, t, !0);
}
function np(e, t, r) {
  t !== void 0 && r.push(
    Ks(e, [
      bt(e, "opening"),
      pt(q + t, "attribute"),
      bt(e, "closing")
    ])
  );
}
function I1(e, t) {
  ne?.markerMode === "editable" && (np("va", e.altnumber, t), np("vp", e.pubnumber, t));
}
function L1(e, t) {
  e !== void 0 && t.push(
    Ks("cat", [
      bt("cat", "opening"),
      pt(q + e, "attribute"),
      bt("cat", "closing")
    ])
  );
}
function D1(e, t, r) {
  e !== void 0 && r.push(
    Ks("ca", [
      bt("ca", "opening"),
      pt(q + e, "attribute"),
      bt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    Ks("cp", [
      bt("cp", "opening"),
      pt(q + t, "attribute")
    ])
  );
}
function ip(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function U1(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function sp(e, t) {
  t.marker === Hn && t.sid !== void 0 && e.push(t.sid), t.marker === $i && t.eid !== void 0 && U1(e, t.eid);
}
function Zc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [tp(o, [...n])] : o, c = e[i];
  sp(n, c);
  const l = Zc(
    e.slice(i + 1, s),
    ip(t, i + 1),
    c.marker === Hn,
    n
  ), d = tp(l, [...n]), u = e[s];
  sp(n, u);
  const f = Zc(
    e.slice(s + 1),
    ip(t, s + 1),
    u.marker === Hn,
    n
  );
  return [...a, d, ...f];
}
function on(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(pt(Au() ? Gm(i) : i));
    else if (!i.type)
      At?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Jt.getType():
          n.push(x1(i));
          break;
        case Ut.getType():
          n.push(T1(i));
          break;
        case mt.getType():
          ne?.hasSpacing || n.push(p1), n.push(v1(i)), I1(i, n);
          break;
        case _e.getType():
          n.push(
            C1(i, on(i.content, !0), t)
          );
          break;
        case it.getType():
          n.push(_1(i, on(i.content)));
          break;
        case $e.getType():
          n.push(A1(i, on(i.content)));
          break;
        case ir.getType():
          vh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Pu?.push(i.sid)), n.push(O1(i)), $1(i, n);
          break;
        case Xr.getType():
          n.push(R1(i.marker ?? ""));
          break;
        case Ng:
          n.push(S1(i, on(i.content)));
          break;
        case $g:
          n.push(M1(i, on(i.content)));
          break;
        case Dg:
          n.push(E1(i, on(i.content)));
          break;
        default:
          At?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(N1(i, on(i.content)));
      }
  }), Zc(n, r);
}
function el(e) {
  const t = e.findIndex(
    (n) => ug(n) || mg(n) || jl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    Ov(n)
  );
  if (t >= 0) {
    const n = el(e.slice(0, t)), i = e[t], s = el(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Yg(n)))
    return [ty(e)];
  return e;
}
const xn = {
  initialize: h1,
  reset: g1,
  serializeEditorState: m1
};
function ry(e) {
  if (e && !P(e)) {
    if (_(e)) return e;
    if (O(e))
      for (const t of e.getChildren()) {
        const r = ry(t);
        if (r) return r;
      }
  }
}
function F1() {
  const e = N();
  if (!A(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((_(t) && !P(t) ? Qn(t) : void 0) && _(t)) {
      const i = xe(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Ui(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = ry(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return _(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of ny(e)) {
    if (!Qn(t)) continue;
    Ui(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(q) && r.setTextContent(n.slice(q.length));
  }
  return !0;
}
function ny(e) {
  const [t, r] = Zp(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!_(a) || P(a) || se(a, ce) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), p = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function K1() {
  const e = N();
  if (!A(e)) return !1;
  const t = e.focus.getNode();
  return Qn(t) ? Re(Ql(t)) : !1;
}
function iy() {
  let e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !tu(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = N(), !A(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!_(t) || P(t) || !Qn(t)) return !1;
  const r = Ql(t);
  if (!Re(r)) return !1;
  const n = xe(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  Ui(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return D(a) ? Zl(a) : o.select(0, 0), !0;
}
const sy = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${yg(ge().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = Hl(e), r = su(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = yv(0, o);
        const a = TC(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || _g(c) && Gl(parseInt(n, 10), c);
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
function tl(e, t) {
  return $e.isValidMarker(e, t) || !!sy[e] || it.isValidMarker(e, t) || _e.isValidMarker(e, t);
}
function z1(e, t) {
  return _e.isNoteContentMarker(e) ? !1 : _e.isValidMarker(e, t);
}
function oy(e, t, r, n, i, s) {
  const o = bm(
    e,
    void 0,
    void 0,
    t,
    n ?? Pa(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function rl(e, t, r, n, i, s, o) {
  if ($e.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = oy(
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
  const a = G1(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = N();
      A(d) && (Vg(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: f } = a.action(l), p = Zd(u, xn, r), h = Ja(p);
      if (A(d)) {
        const m = d.anchor.getNode(), y = m.getParent(), x = Qn(m), C = d.anchor.key === d.focus.key;
        if (D(h) && x && C && !gc(h, o))
          V1(
            d,
            h,
            m,
            r?.markerMode === "editable"
          );
        else if (D(h) && !C && !gc(h, o) && W1(d))
          H1(d, h, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          J1(
            d,
            () => Ja(p)
          );
        else if (O(h) && !h.isInline()) {
          const M = d.insertParagraph();
          if (M) {
            const R = M.getChildren();
            h.append(...R), M.replace(h), Re(h) && Qi(h) || h.selectStart();
          }
        } else if (D(h) && _(m) && !P(m) && D(m.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        gc(h, o)) {
          const M = m.getParent();
          if (D(M)) {
            const R = d.anchor.offset;
            if (R === 0) m.insertBefore(h);
            else if (R >= m.getTextContentSize()) m.insertAfter(h);
            else {
              const [L] = m.splitText(R);
              L.insertAfter(h);
            }
            h.getChildren().forEach((L) => {
              P(L) && L.setNested(!0);
            });
            const E = h.getChildren().find((L) => _(L) && !P(L));
            E && _(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (_(m) && !P(m) && d.isCollapsed() && (U(y) || D(y) && U(y.getParent()))) {
          const M = D(y) ? y : void 0, R = M ? B1(m, d.anchor.offset) : [];
          let L = (M ?? m).insertAfter(h);
          if (Pr(h)) {
            const T = {
              ...r || Pa(),
              markerMode: "hidden"
            }, $ = Zd(
              u,
              xn,
              T
            ), W = Ja($);
            L = L.insertAfter(W);
          }
          if (R.length > 0 && M) {
            const T = sa(M).append(...R);
            L.insertAfter(T), M.isEmpty() && M.remove();
          } else _(L.getNextSibling()) || L.insertAfter(xe(q));
          O(L) && L.selectEnd();
        } else if (d.insertNodes([h]), sP(h), f) {
          const M = ih();
          M.add(h.getKey()), fn(M);
        } else if (D(h)) {
          const M = h.getChildren().find((R) => _(R) && !P(R));
          M && _(M) ? M.select(
            M.getTextContentSize(),
            M.getTextContentSize()
          ) : h.selectEnd();
        } else {
          const M = h.getNextSibling();
          M ? M.selectStart() : h.selectStart();
        }
      } else
        d?.insertNodes([h]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function B1(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function gc(e, t) {
  return ((t ?? Go).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function j1(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(ft(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function V1(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && D(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !_(r)) {
    const o = e.anchor.offset;
    if (_(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else _(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = Bi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (Ui(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), _(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => _(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => _(o) && !P(o));
  _(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function W1(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || D(n)) continue;
    if (!_(n) || n.getType() !== Ve.getType() || se(n, ce) === "attribute") return !1;
    const i = Ql(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Qn(n) && (r = !0);
  }
  return r;
}
function H1(e, t, r) {
  const n = ny(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Qn(a)) return;
    Ui(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => _(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function G1(e, t) {
  let r = sy[e];
  return r || (it.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: it.getType(), marker: e, content: [] }] })
  } : _e.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: _e.getType(), marker: e };
      return (_e.isValidFootnoteMarker(e) || _e.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function J1(e, t) {
  const r = e.getNodes(), [n, i] = Bi(e);
  let s;
  r.forEach((o, a) => {
    if (O(s) && s.isParentOf(o))
      return;
    const c = ay(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((u) => P(u) && u.getMarkerSyntax() === "opening") && j1(s, D(s.getParent()))), X1(c, s, l);
  }), (_(s) || O(s)) && s.selectEnd();
}
function Bi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Ou(e) {
  return pe(e) || U(e) || U(e.getParent());
}
function ay(e, t, r, n, i) {
  if (!Ou(e)) {
    if (_(e))
      return Y1(e, t, r, n, i);
    if (O(e) && e.isInline())
      return e;
  }
}
function Y1(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function X1(e, t, r) {
  if (_(t)) {
    const n = nl(e, t);
    t.setTextContent(n), e.remove();
  } else if (O(t)) {
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
    nl(e, t), r && D(t) && t.getChildren().some((s) => P(s)) && _(e) && !P(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function nl(e, t) {
  let r = e.getTextContent();
  if (_(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    nu(n), _(n) || t.insertBefore(xe(" "));
  }
  return r;
}
function cy(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = ri(d, t);
    if (!f) return !1;
    const p = _(d) ? d.getTextContentSize() : 0;
    if (op(f, r), _(d) && d.isAttached()) {
      const h = d.getTextContentSize(), m = Math.max(p - h, 0), y = Math.max(0, Math.min(u - m, h)), x = N();
      A(x) && x.setTextNodeRange(d, y, d, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Bi(e);
  if (!Ru(n, t, s, o)) return !1;
  const a = Nu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = ri(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = fy(u, a);
    f && (op(f, r), l = !0);
  }), py(a, i), l;
}
function op(e, t) {
  e.getChildren().forEach((n) => {
    Xt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Gt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    _(n) && i.startsWith(q) && n.setTextContent(i.slice(q.length));
  }), vc(e);
}
function Nu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = ay(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    _(o) && n.push(o);
  }), n;
}
function ri(e, t) {
  let r = e, n;
  for (; r && !Re(r); ) {
    if (U(r)) return;
    !n && D(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function ly(e) {
  const t = rt(
    e,
    (r) => U(r) || Re(r)
  );
  return U(t);
}
function uy(e) {
  return e.filter(
    (t) => !Ou(t) && (_(t) || O(t) && t.isInline())
  );
}
function Q1(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!_(i) || Ou(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function Z1(e, t, r) {
  return e.getChildren().some(
    (n) => O(n) && t.some((i) => n.isParentOf(i)) && !dy(n, r)
  );
}
function Ru(e, t, r, n, i) {
  const s = uy(e), o = Q1(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ri(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !Z1(l, s, o);
  });
}
function dy(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Xt(r));
}
function fy(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (O(d) && t.some((u) => d.isParentOf(u))) {
      if (!dy(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Xt(n[s - 1]) && (s -= 1), o < n.length - 1 && Xt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(sa(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(sa(e).append(...c)), e;
}
function sa(e) {
  return Uk(e);
}
function py(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!A(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function eP(e, t, r) {
  if (e.isCollapsed()) {
    const l = ri(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Dd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Bi(e);
  if (!Ru(n, r, i, s, t)) return !1;
  const o = Nu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = ri(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = fy(d, o);
    u && (Dd(u, t), c = !0);
  }), c;
}
function tP(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = Bi(e);
  if (!!!i?.some(
    (y) => Ru(s, y, o, a)
  ) && !rP(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const x = N();
    A(x) && cy(x, y, n) && (l = !0);
  });
  const d = N();
  if (!A(d)) return l;
  const u = d.isBackward(), [f, p] = Bi(d), h = Nu(
    d.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const m = h.filter(
    (y) => !ly(y) && !ri(y, t)
  );
  return m.length > 0 && (nP(m).forEach((y) => iP(y, t)), l = !0), py(h, u), l;
}
function rP(e, t) {
  return uy(e).some(
    (r) => !ly(r) && !ri(r, t)
  );
}
function nP(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function iP(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? sa(i) : Ur(t);
  e[0].insertBefore(s), s.append(...e), i === r || nl(e[0], s);
}
function sP(e) {
  ye(e) && (nu(e.getPreviousSibling()), Qg(e.getNextSibling()));
}
const hy = {
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
}, ap = "psc-active-text", To = "psc-empty-text";
function oP({ viewOptions: e }) {
  const [t] = le(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(ap), r.current = o, o && t.getElementByKey(o)?.classList.add(ap);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        ha,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${To}`);
          if (!c) return !1;
          const l = Js(c);
          if (!ye(l)) return !1;
          const d = l.getParent();
          if (!O(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        $t
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = mc(), f = aP(), p = [], h = [];
          return ge().getChildren().forEach((m) => {
            if (!O(m)) return;
            const { emptyKeys: y, nonEmptyKeys: x } = lP(m);
            p.push(...y), h.push(...x);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(To) : t.getElementByKey(u)?.classList.add(To);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(To));
      }),
      t.registerCommand(
        El,
        () => (i(void 0), !1),
        $t
      ),
      t.registerCommand(
        Fk,
        () => {
          const o = t.getEditorState().read(mc);
          return o !== r.current && i(o), !1;
        },
        $t
      )
    ];
    return i(t.getEditorState().read(mc)), nt(...s);
  }, [t, n]), null;
}
function mc() {
  return cP(N() ?? void 0)?.getKey();
}
function aP() {
  const e = N();
  if (!A(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!O(n)) return;
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
function cP(e) {
  if (A(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function lP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ye(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ye(c)) break;
      if (!(kt(c) || P(c)) && c.getTextContent().replaceAll(Do, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const uP = /^\+/;
function qu(e, t) {
  const r = t.replace(uP, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function gy(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function my(e, t) {
  return gy(e, t) !== void 0;
}
function il(e, t) {
  const r = gy(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function oa(e, t, r) {
  const n = O(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function dP(e, t, r, n, i) {
  const s = qu(n, t);
  if (!s) {
    oa(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && oa(e, "invalid", i);
}
function Ms(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || dP(s, o, t, r, n), Ms(s, t, r, n, i || o === "xq");
    } else if (ye(s)) {
      if (i) continue;
      const o = qu(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else U(s) ? Ms(s, s.getMarker(), r, n, i) : Oe(s) || O(s) && Ms(s, t, r, n, i);
}
function fP(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = qu(e, a);
    if (!c) {
      oa(o, "unknown", r), il(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    il(n, l) || oa(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of ge().getChildren())
    Oe(o) || (ct(o) || ze(o) ? i(o, o.getMarker()) : ie(o) ? (i(o, o.getMarker()), s(o) && Ms(o, o.getMarker(), e, r, !1)) : O(o) && s(o) && Ms(o, "p", e, r, !1));
  return r;
}
function pP(e) {
  return !!e?.includes("(basic)");
}
function hP(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function yy(e, t) {
  return !e.startsWith("zpa") && e !== "c" && tl(e, t);
}
function $u(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function by(e, t) {
  const r = [];
  for (const n of t) {
    const i = $u(e, n);
    i && il(r, i);
  }
  return r;
}
function Po(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: hP(e.description),
    isBasic: pP(e.description)
  };
}
function gP(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function sl(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : gP(e.marker, t.marker);
}
function ol(e, t, r) {
  if (t.noteMarker) return [];
  const n = by(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && yy(i.marker, r)
  ).filter((i) => {
    const s = $u(e, i.marker);
    return s !== void 0 && my(n, s);
  }).map((i) => Po(i, "paragraph")).sort(sl);
}
function mP(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => yy(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Po(c, "character")).sort(sl);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Po(c, "character")),
    ...a.map((c) => Po(c, "note"))
  ].sort(sl);
}
function yP(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function bP(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function kP(e, t, r) {
  return [
    ...yP(e, t.openCharMarkers),
    ...mP(e, t, r)
  ].sort(bP);
}
function xP(e, t, r) {
  if (t.source === "paragraph") return ol(e, t, r);
  const n = kP(e, t, r);
  return n.length > 0 ? n : ol(e, t, r);
}
function TP(e, t, r) {
  const n = ol(e, t, r), i = by(e, t.previousParaMarkers), s = $u(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && my(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const di = String.raw`\w-`, ky = "a-z0-9", vP = `[a-z][${ky}]*`, CP = new RegExp(
  String.raw`^\\(\+?[${di}]+)[ \u00A0]$`
), xy = new RegExp(String.raw`^\\(\+?[${di}]+)$`), _P = new RegExp(String.raw`^\\\+?[${di}]*\*$`), SP = new RegExp(
  String.raw`^\\(\+?[${di}]+)(?:[ \u00A0]|$)`
), MP = new RegExp(
  String.raw`^\\(\+?)([${di}]+)`
), EP = new RegExp(
  String.raw`\\\+?[${di}]+(?:\\?\*|[ \u00A0])`
), PP = new RegExp(
  String.raw`\\\+?[${di}]*$`
), AP = new RegExp(
  String.raw`^\\(${vP})( |$)`
), wP = new RegExp(
  String.raw`\\[${ky}+*]*$`,
  "i"
), al = "￼", cp = "|", Ty = "\\", OP = /([-\w]+)="(.*?)"/g, NP = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), RP = /* @__PURE__ */ new Map([["file", "src"]]);
class vy {
  segments = [];
  /** Differing segments are never merged: the boundary between two of them (two adjacent literals)
   * is a position both sides share. */
  push(t, r, n, i, s) {
    if (t === r && n === i) return;
    const o = this.segments[this.segments.length - 1];
    s && o?.same && o.liveEnd === t && o.settledEnd === n ? this.segments[this.segments.length - 1] = { ...o, liveEnd: r, settledEnd: i } : this.segments.push({ liveStart: t, liveEnd: r, settledStart: n, settledEnd: i, same: s });
  }
  /** Two stretches that differ somewhere: the bytes both begin with, and then the bytes both end
   * with, line up one for one; what is left maps only its ends. */
  pushStretch(t, r, n, i) {
    const s = Math.min(t.length, n.length);
    let o = 0;
    for (; o < s && t[o] === n[o]; ) o += 1;
    let a = 0;
    for (; a < s - o && t[t.length - 1 - a] === n[n.length - 1 - a]; )
      a += 1;
    const c = r + t.length, l = i + n.length;
    this.push(r, r + o, i, i + o, !0), this.push(r + o, c - a, i + o, l - a, !1), this.push(c - a, c, l - a, l, !0);
  }
}
function lp(e, t) {
  const r = [e.indexOf(Ty, t + 1), e.indexOf(al, t + 1)].filter(
    (n) => n >= 0
  );
  return r.length > 0 ? Math.min(...r) : e.length;
}
function up(e) {
  const t = e.slice(1), r = [...t.matchAll(OP)];
  return r.length > 0 ? r.map((n) => n[0]).join("") !== t || r.some((n) => n[2] === "") ? void 0 : r.map((n) => {
    const i = 1 + (n.index ?? 0) + n[1].length + 2;
    return { name: n[1], valueStart: i, valueEnd: i + n[2].length, value: n[2] };
  }) : t ? [{ name: void 0, valueStart: 1, valueEnd: e.length, value: t }] : void 0;
}
function qP(e, t) {
  const r = e.map(
    (o, a) => o.name === void 0 || !NP.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), n = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && RP.get(o.name) === a.name), i = [];
  let s = -1;
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, d) => r[d] && n(l, o)
    );
    c <= s || (i.push([c, a]), s = c);
  }), i;
}
function $P(e, t, r, n, i) {
  if (e === t) {
    r.push(n, n + e.length, i, i + t.length, !0);
    return;
  }
  r.push(n, n + 1, i, i + 1, !0);
  const s = up(e), o = up(t);
  if (!s || !o) {
    r.pushStretch(e.slice(1), n + 1, t.slice(1), i + 1);
    return;
  }
  let a = 1, c = 1;
  for (const [l, d] of qP(s, o)) {
    const u = s[l], f = o[d];
    r.pushStretch(
      e.slice(a, u.valueStart),
      n + a,
      t.slice(c, f.valueStart),
      i + c
    ), r.push(
      n + u.valueStart,
      n + u.valueEnd,
      i + f.valueStart,
      i + f.valueEnd,
      !0
    ), a = u.valueEnd, c = f.valueEnd;
  }
  r.pushStretch(
    e.slice(a),
    n + a,
    t.slice(c),
    i + c
  );
}
function Cy(e, t, r, n, i) {
  let s = t, o = 0;
  for (; s < e.length && o < r.length; ) {
    const c = r[o] === al && e[s] !== al ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const l = new vy(), d = Cy(e, s, c, l, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: d,
        inner: { segments: IP(l.segments, s) }
      }), n.push(s, d, o, o + 1, !1), s = d, o += 1;
      continue;
    }
    if (e[s] === cp && r[o] === cp) {
      const l = lp(e, s), d = lp(r, o);
      $P(e.slice(s, l), r.slice(o, d), n, s, o), s = l, o = d;
      continue;
    }
    if (e[s] === r[o]) {
      n.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (i.prefix) {
      const l = r.lastIndexOf(Ty), d = l >= o ? r.slice(l) : void 0, u = d === void 0 ? -1 : e.indexOf(d, s);
      return d === void 0 || u < 0 ? (n.push(s, s, o, r.length, !1), s) : (n.push(s, u, o, l, !1), n.push(u, u + d.length, l, r.length, !0), u + d.length);
    }
    return n.pushStretch(e.slice(s), s, r.slice(o), o), e.length;
  }
  const a = i.prefix ? s : e.length;
  return n.push(s, a, o, r.length, !1), a;
}
function IP(e, t) {
  return e.map((r) => ({
    ...r,
    liveStart: r.liveStart - t,
    liveEnd: r.liveEnd - t
  }));
}
function LP(e, t, r) {
  const n = new vy(), i = /* @__PURE__ */ new Map();
  return Cy(e, 0, t, n, { prefix: !1, spellings: r, literals: i }), { alignment: { segments: n.segments }, literals: i };
}
function Oa(e, t) {
  return t === "live" ? {
    start: e.liveStart,
    end: e.liveEnd,
    otherStart: e.settledStart,
    otherEnd: e.settledEnd
  } : {
    start: e.settledStart,
    end: e.settledEnd,
    otherStart: e.liveStart,
    otherEnd: e.liveEnd
  };
}
function _y(e, t, r) {
  return e.segments.find((n) => {
    const { start: i, end: s } = Oa(n, r);
    return i <= t && t < s;
  });
}
function Sy(e, t) {
  const r = e.segments[e.segments.length - 1];
  if (!r) return [0, 0];
  const { end: n, otherEnd: i } = Oa(r, t);
  return [n, i];
}
function Iu(e, t, r) {
  const n = _y(e, t, r);
  if (n) {
    const { start: o, otherStart: a } = Oa(n, r);
    return n.same ? a + (t - o) : void 0;
  }
  const [i, s] = Sy(e, r);
  return t === i ? s : void 0;
}
function oo(e, t, r) {
  const n = _y(e, t, r);
  if (n) {
    const { start: i, otherStart: s } = Oa(n, r);
    return n.same ? s + (t - i) : s;
  }
  return Sy(e, r)[1];
}
const ar = /\s/;
function DP(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function cl(e) {
  const t = [];
  for (const n of e.spans)
    for (let i = n.start; i < n.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: ar.test(s) });
    }
  const r = e.spans.filter((n) => n.isSentinel).map((n) => n.start);
  return { bytes: t, placeholders: r };
}
function Ao({ bytes: e }, t) {
  return e.filter((r) => r.position < t && !r.isWs).length;
}
function UP({ bytes: e }, t) {
  let r = 0;
  for (const n of e) n.position < t && (r = n.isWs ? r + 1 : 0);
  return r;
}
function ll({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const dp = "cat", FP = "category";
function KP(e) {
  return _(e) && e.getTextContent().trim() === "";
}
function zP(e) {
  const t = { text: "", spans: [], sentinels: [] }, r = [], n = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    n(a, DP(dp, c)), r.push({
      ownerKey: a.getKey(),
      markerName: dp,
      keyName: FP,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = Ll(a);
    let d = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const u = vr(a);
    let f = !1;
    for (const p of a.getChildren())
      d !== void 0 && f && !KP(p) && (i(a, d), d = void 0), o(p), (Qt(p) || u && (u.is(p) || p.isParentOf(u))) && (f = !0);
    d !== void 0 && i(a, d);
  }, o = (a) => {
    if (Qt(a)) {
      const c = a.getParent();
      n(a, U(c) ? c.getCaller() : "");
    } else _(a) || kt(a) ? n(a, a.getTextContent()) : U(a) ? s(a) : O(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: r };
}
function Lu(e) {
  const t = cl(e);
  return {
    runs: e.sentinels.map((r, n) => {
      const { spelling: i, foldedAttributes: s } = zP(r);
      return {
        memberCount: r.length,
        before: Ao(t, t.placeholders[n] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: ll(cl(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: ll(t).map(({ byte: r }) => r).join("")
  };
}
function aa(e, t) {
  return {
    facts: cl(e),
    carried: e.sentinels.map((r, n) => {
      const i = new Set(t[n]?.map((s) => s.getKey()));
      return r.map((s) => i.has(s.getKey()));
    })
  };
}
function ca(e, t) {
  const r = e.carried.map(
    (f) => f.map(() => {
    })
  ), n = ll(e.facts), { alignment: i, literals: s } = LP(
    n.map(({ byte: f }) => f).join(""),
    t.bytes,
    new Map(t.runs.map((f) => [f.before, f.spelled]))
  ), o = (f, p) => {
    let h = 0;
    e.carried[f].forEach((m, y) => {
      m && (r[f][y] = { sentinelIndex: p, memberIndex: h }, h += 1);
    });
  }, a = (f) => f.filter(Boolean).length, c = e.carried.reduce((f, p) => f + a(p), 0), l = t.runs.reduce((f, p) => f + p.memberCount, 0);
  if (c === l) {
    const f = t.runs.flatMap(
      (h, m) => Array.from({ length: h.memberCount }, (y, x) => ({ sentinelIndex: m, memberIndex: x }))
    );
    let p = 0;
    return e.carried.forEach(
      (h, m) => h.forEach((y, x) => {
        y && (r[m][x] = f[p++]);
      })
    ), { sentinelMap: r, settledOnlyRuns: [], alignment: i };
  }
  const d = new Map(t.runs.map((f, p) => [f.before, p]));
  e.carried.forEach((f, p) => {
    const h = e.facts.placeholders[p];
    if (h === void 0 || a(f) === 0) return;
    const m = Iu(i, Ao(e.facts, h), "live"), y = m === void 0 ? void 0 : d.get(m);
    y === void 0 || t.runs[y].memberCount !== a(f) || o(p, y);
  });
  const u = [];
  for (const [f, p] of s) {
    const h = d.get(f);
    if (h === void 0) continue;
    const m = t.runs[h], y = n[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, x = p.liveEnd > p.liveStart ? n[p.liveEnd - 1].position + 1 : y, C = Ao(e.facts, y);
    u.push({
      sentinelIndex: h,
      liveBefore: C,
      liveLength: Ao(e.facts, x) - C,
      liveWsBefore: UP(e.facts, y),
      settledBefore: m.before,
      spelling: m.spelling,
      inner: p.inner,
      foldedAttributes: m.foldedAttributes
    });
  }
  return { sentinelMap: r, settledOnlyRuns: u, alignment: i };
}
function ao(e, t, r) {
  return {
    nonWsBefore: oo(
      e,
      t.nonWsBefore,
      r === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function My(e, t, r) {
  return Iu(e.inner, t, r === "toSpelling" ? "live" : "settled");
}
function Ey(e, t) {
  return e.find(
    (r) => t.nonWsBefore === r.liveBefore && t.wsRun >= r.liveWsBefore
  );
}
function Du(e, t) {
  for (const r of e) {
    const n = t.nonWsBefore - r.liveBefore;
    if (n <= 0 || n >= r.liveLength) continue;
    const i = My(r, n, "toSpelling");
    return {
      run: r,
      count: n,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function Uu(e, t) {
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
function Fu(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
const ot = "￼";
function Py(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== ot ? e.slice(1) : e;
}
function fp(e) {
  return Zs(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Ay(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = xn.serializeEditorState(
    {
      type: Dr,
      version: Lr,
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
  for (; fp(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Lt(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && fp(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function vo(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function gs(e, t) {
  PP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += ot;
}
function Vt(e) {
  return e.replaceAll(q, " ");
}
function BP(e, t, r = !1) {
  if (Ot(t)) return Vt(e);
  if (e === q) return " ";
  const n = r && e.startsWith(q), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(q, "~");
}
function Es(e) {
  const t = e.getTextContent();
  return _n(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Na(e, t) {
  const r = e[t];
  if (!Ee(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = ba(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function wy(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Ra(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Ns(n, i);
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
function qa(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && ma(e);
}
function Oy(e, t) {
  return Ee(e) ? !qa(e.getMarker(), t) : U(e) || Oe(e) ? !0 : Pe(e) ? Ku(e) : D(e) ? Ny(e, t) : !1;
}
function Ny(e, t) {
  if (aT(e)) return !0;
  const r = e.getMarker();
  return !qx(r) && t(r) === void 0;
}
const Bt = "", jt = "";
function pp(e) {
  return e.flatMap((t) => Le(t) ? t.getChildren() : [t]);
}
function Oi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ee(s)) {
      const o = Na(e, i);
      qa(s.getMarker(), r) && wy(o) ? (t.push(
        Bt,
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
      ), Oi(pp(o), t, r), t.push(jt)) : t.push(ot), i += o.length;
    } else if (Pe(s)) {
      const o = Ra(e, i);
      Ku(s) ? t.push(ot) : (t.push(
        Bt,
        "verse",
        Vt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Oi(pp(o), t, r), t.push(jt)), i += o.length;
    } else P(s) ? t.push(Bt, "marker", Vt(s.getTextContent()), jt) : Sn(s) ? t.push(Bt, "unmatched", Vt(s.getTextContent()), jt) : Oy(s, r) ? t.push(ot) : pa(s) ? t.push(" ") : _(s) ? t.push(
      Vt(
        n ? Py(Es(s)) : Es(s)
      )
    ) : D(s) ? (t.push(Bt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Oi(s.getChildren(), t, r, !0), t.push(jt)) : pe(s) ? Oi(s.getChildren(), t, r, n) : O(s) ? (t.push(Bt, s.getType()), Oi(s.getChildren(), t, r), t.push(jt)) : t.push(ot);
  }
}
function Zi(e, t) {
  const r = [];
  return Oi(e, r, t), r.join("");
}
function jr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function ji(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function zu(e) {
  return e.type ?? "";
}
function Ry(e, t, r) {
  return t === "closing" ? He(e, r) : t === "selfClosing" ? He("") : we(e, r);
}
function yc(e, t) {
  const r = e[t];
  if (!(!r || zu(r) !== "attribute-run"))
    return jr(r) ?? [];
}
function es(e, t) {
  const r = [];
  return xs(e, r, t), r.join("");
}
function xs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = zu(s);
    if (o === "ms") {
      const l = s, d = yc(e, i + 1);
      d && qa(l.marker ?? "", r) ? (t.push(
        Bt,
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
      ), xs(d, t, r), t.push(jt), i += 1) : t.push(ot);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(ot);
        continue;
      }
      t.push(
        Bt,
        "verse",
        Vt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = yc(e, i + 1 + d);
      for (; u; )
        xs(u, t, r), d++, u = yc(e, i + 1 + d);
      t.push(jt), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Bt,
        "marker",
        Vt(
          Ry(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        jt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Bt, "char", JSON.stringify(l.unknownAttributes ?? null)), xs(jr(s) ?? [], t, r, !0), t.push(jt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(ot);
      continue;
    }
    if (o === "unmatched") {
      t.push(Bt, "unmatched", Vt(ji(s) ?? "")), t.push(jt);
      continue;
    }
    const a = ji(s);
    if (a !== void 0) {
      t.push(Vt(n ? Py(a) : a));
      continue;
    }
    const c = jr(s);
    c ? (t.push(Bt, o), xs(c, t, r), t.push(jt)) : t.push(ot);
  }
}
function $a(e) {
  let t = 0;
  for (const r of e) {
    const n = jr(r);
    if (n) {
      t += $a(n);
      continue;
    }
    const i = ji(r);
    if (i !== void 0)
      for (const s of i) s === ot && t++;
  }
  return t;
}
function Vi(e, t, r, n, i) {
  _r(e.getChildren(), t, r, n, i);
}
function _r(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      vo(t, a, Vt(a.getTextContent()));
    else if (Ee(a)) {
      s();
      const c = Na(e, o);
      qa(a.getMarker(), r) && wy(c) ? _r(c, t, r, n) : gs(t, [a, ...c]), o += c.length;
    } else if (U(a) || Oe(a))
      s(), gs(t, [a]);
    else if (Pe(a)) {
      s();
      const c = Ra(e, o);
      Ku(a) ? gs(t, [a, ...c]) : (vo(t, a, Vt(Es(a))), _r(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), Ny(a, r) ? gs(t, [a]) : Vi(a, t, r, n, { pending: !0 });
    else if (pa(a))
      s(), vo(t, a, " ");
    else if (_(a)) {
      const c = _n(a) || se(a, ce) === "attribute", l = s() && !c;
      vo(
        t,
        a,
        c ? Vt(Es(a)) : BP(Es(a), n, l)
      );
    } else O(a) ? Vi(a, t, r, n, i) : (s(), gs(t, [a]));
  }
}
function Bu(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Oe(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Vi(e, i, t, r), i;
}
function jP(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  return Vi(e, n, t, r), n;
}
function ju(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!ie(i)) return;
    const s = Bu(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function VP(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (ie(i)) {
      const s = Bu(i, t, r);
      if (!s) return;
      const o = n.text.length;
      s.spans.forEach(
        (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), n.sentinels.push(...s.sentinels), n.text += s.text;
    } else Ce(i) ? _r(i.getChildren(), n, t, r) : _r([i], n, t, r);
  return n;
}
function qy(e, t) {
  let r = 0;
  const n = (i) => {
    if (_(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(ot);
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
    } else O(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function ul(e, t = []) {
  for (const r of e)
    Pe(r) ? t.push(r) : O(r) && ul(r.getChildren(), t);
  return t;
}
function $y(e) {
  let t = 0;
  const r = (n) => {
    if (_(n))
      for (const i of n.getTextContent()) i === ot && t++;
    else O(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function fi(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === ot && t++;
    else r.content && (t += fi(r.content));
  return t;
}
function Vu(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), O(i) && Vi(i, n, t, r);
  return n;
}
function Wi(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans) {
    const o = s.end - s.start, a = s.key === t, c = a ? Math.min(s.isSentinel ? 1 : r, o) : o;
    for (let l = 0; l < c; l++)
      ar.test(e.text[s.start + l]) ? i++ : (n++, i = 0);
    if (a) return { nonWsBefore: n, wsRun: i };
  }
}
function dl(e, t) {
  t.add(e.getKey()), O(e) && e.getChildren().forEach((r) => dl(r, t));
}
function Iy(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function Ps(e, t, r) {
  const n = (u, f) => {
    const p = Wi(e, u, f), h = Iy(e, u, f);
    return p && h ? { anchor: p, position: h.start + f } : void 0;
  }, i = (u) => {
    const f = u.end - u.start, p = Wi(e, u.key, f);
    return p ? { anchor: p, position: u.start + f } : void 0;
  };
  if (!O(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((u) => dl(u, s));
  const o = [...e.spans].reverse().find((u) => s.has(u.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  dl(t, a);
  const c = e.spans.find((u) => a.has(u.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((u) => !a.has(u.key) && H(u.key)?.isBefore(t));
  if (l) return i(l);
  const d = e.spans[0];
  return d && !d.isSentinel ? n(d.key, 0) : void 0;
}
function As(e) {
  if (e.isSentinel) return !1;
  const t = H(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function Ly(e) {
  const t = H(e.key);
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
function WP(e) {
  const t = H(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Pe(t) ? Ra(n, i) : Ee(t) ? Na(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function It(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e;
  let s, o = t.nonWsBefore, a = t.wsRun, c = !1;
  e: for (const u of i) {
    const f = u.end - u.start, p = !u.isSentinel && (r || !As(u));
    if (c) {
      if (!p) continue;
      s = { key: u.key, offset: 0 };
      break;
    }
    for (let h = 0; h < f; h++) {
      const m = n[u.start + h];
      if (o === 0 && (a === 0 || !ar.test(m))) {
        if (p) {
          s = { key: u.key, offset: h };
          break e;
        }
        c = !0;
        continue e;
      }
      o > 0 ? ar.test(m) || o-- : a--;
    }
    if (o === 0 && a === 0) {
      if (p && !r) {
        s = { key: u.key, offset: f };
        break;
      }
      c = !0;
    }
  }
  if (s) return { ...s, type: "text" };
  const l = i[i.length - 1];
  if (l && As(l)) {
    const u = Ly(l);
    if (u) return u;
  }
  if (l?.isSentinel) {
    const u = WP(l);
    if (u) return u;
  }
  const d = [...i].reverse().find((u) => !u.isSentinel && !As(u));
  if (d) return { key: d.key, offset: d.end - d.start, type: "text" };
}
function Dy(e, t = []) {
  for (const r of e)
    pe(r) && t.push(r), O(r) && Dy(r.getChildren(), t);
  return t;
}
function Uy(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), O(e) && e.getChildren().forEach((r) => Uy(r, t)), t;
}
function HP(e, t, r) {
  const n = Wi(e, t.key, r);
  if (n)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: n,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: n };
}
function Ia(e, t, r = t.sentinels) {
  const n = [];
  for (const i of Dy(e)) {
    const s = Uy(i), o = t.spans.filter((C) => s.has(C.key)), a = o.find((C) => C.isSentinel || !P(H(C.key))) ?? o[0], c = o[o.length - 1];
    if (!a || !c) continue;
    const l = t.text.slice(a.start, a.end), d = a === o[0] || a.isSentinel ? 0 : l.length - l.trimStart().length, u = HP(t, a, d), f = Wi(t, c.key, c.end - c.start);
    if (!u || !f) continue;
    const p = i.getTypedOnClicks(), h = i.getTypedOnRemoves(), m = i.getTypedOnMouseEnters(), y = i.getTypedOnMouseLeaves(), x = Object.entries(i.getTypedIDs()).flatMap(
      ([C, M]) => M.map((R) => ({
        type: C,
        id: R,
        onClick: p[C]?.[R],
        onRemove: h[C]?.[R],
        onMouseEnter: m[C]?.[R],
        onMouseLeave: y[C]?.[R]
      }))
    );
    x.length > 0 && n.push({ annotations: x, start: u, end: f });
  }
  return { ranges: n, live: n.length > 0 ? aa(t, r) : void 0 };
}
function GP(e, t, r) {
  const n = Fy(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!pe(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function JP(e, t) {
  const r = Fy(e);
  if (!r) return;
  const n = Gn();
  n.addID(
    t.type,
    t.id,
    t.onClick,
    t.onRemove,
    t.onMouseEnter,
    t.onMouseLeave
  ), r[0].insertBefore(n), n.append(...r);
}
function Fy(e) {
  const t = H(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = Pe(t) ? Ra(r, n) : Ee(t) ? Na(r, n) : [];
  return [t, ...i];
}
function hp(e) {
  return e.type === "text" && P(H(e.key));
}
function YP(e) {
  const t = H(e.key);
  if (!_(t) || P(t) || se(t, ce) === "attribute") return !1;
  const r = t.getParent();
  if (!U(r)) return !0;
  const n = r.getChildren().find((i) => !P(i) || i.getMarkerSyntax() !== "opening");
  return !t.is(n);
}
function Ky(e, t, r, n) {
  const i = r.settledOnlyRuns, s = { addressDisplayBytes: n }, o = Du(i, e);
  if (o) {
    if (!o.within) return;
    const d = It(o.run.spelling, o.within, s);
    return !d || !YP(d) ? void 0 : { point: d, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex };
  }
  const a = n && Ey(i, e);
  if (a) {
    const d = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), u = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, f = It(t, u, s);
    return f && d ? { point: f, at: u.nonWsBefore, preservedKey: d } : void 0;
  }
  const c = ao(r.alignment, e, "toSettled"), l = It(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function XP(e, t, r) {
  if (e.kind === "byte") return Ky(e.anchor, t, r, !0);
  const n = r.sentinelMap[e.run]?.find((a) => a !== void 0), i = n && t.sentinels[n.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = ao(r.alignment, e.anchor, "toSettled"), o = It(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function La({ ranges: e, live: t }, r) {
  if (e.length === 0 || !t) return;
  const n = N()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = r();
      if (!o) continue;
      const a = ca(t, Lu(o)), c = XP(i.start, o, a), l = Ky(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const d = i.start.anchor;
      if (c.at === l.at && d.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { point: u, preservedKey: f } = c, { point: p } = l;
      if (hp(u) || hp(p)) continue;
      if (u.key === p.key && u.offset === p.offset && u.type === p.type) {
        f && JP(f, s);
        continue;
      }
      const h = Gs();
      h.anchor.set(u.key, u.offset, u.type), h.focus.set(p.key, p.offset, p.type), Jl(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && GP(f, s.type, s.id);
    }
  fn(n);
}
function Wu(e, t, r) {
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
function zy(e, t) {
  return e.sentinels.filter((n, i) => n.length > 0 && (t[i]?.length ?? 0) === 0).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? Wu(n, s.start, s.end) : n;
  }, e);
}
function co(e) {
  const t = e.exportJSON();
  return O(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(co(r))), t;
}
function Hu(e, t, r, n, i, s, o) {
  const a = Ia(
    e,
    zy(t, r),
    r
  );
  if (a.ranges.length === 0) return n;
  const c = ah({
    nodes: [Qe, ...xu],
    onError: (d) => {
      throw d;
    }
  });
  Pl(
    c,
    Qe,
    (d) => Gn(d.getTypedIDs()),
    (d, u) => Object.entries(d.getTypedIDs()).forEach(
      ([f, p]) => p.forEach((h) => u.addID(f, h))
    )
  );
  let l;
  return c.update(
    () => {
      const d = ge(), u = i === "noteContent" ? Ht() : d;
      u !== d && d.append(u), l = u.getKey(), n.forEach((p) => u.append(Hi(p))), La(a, () => {
        const p = u.getChildren();
        if (i === "paras") return Vu(p, s, o);
        if (i === "chapter")
          return Ce(p[0]) ? Bs(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return _r(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const d = l === void 0 ? void 0 : H(l);
    return O(d) ? d.getChildren().map(co) : n;
  });
}
function fl(e) {
  const t = H(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return _(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!O(t)) return !1;
  const r = Gs();
  return r.anchor.set(e.key, e.offset, "element"), r.focus.set(e.key, e.offset, "element"), fn(r), !0;
}
function QP(e, t, r) {
  const n = It(e, t);
  if (n?.type === "text") {
    if (fl(n)) return;
  } else if (n) {
    const i = H(n.key), s = O(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find(O)?.selectStart();
}
function Gu(e, t) {
  const r = t.getNode(), n = Uu(e, r), i = n && Fu(n.member, r);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? Ps(e, r, t.offset)?.anchor : Wi(e, t.key, t.offset),
    inRun: n && i ? {
      sentinelIndex: n.sentinelIndex,
      memberIndex: n.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: aa(e, e.sentinels)
  };
}
function By(e, t, r) {
  const n = t && ca(t.live, Lu(e));
  if (t?.inRun && n) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: d } = t.inRun, u = n.sentinelMap[o]?.[a];
    let f = u && e.sentinels[u.sentinelIndex]?.[u.memberIndex];
    for (const p of c)
      f = O(f) ? f.getChildAtIndex(p) ?? void 0 : void 0;
    if (f && fl({ key: f.getKey(), offset: l, type: d })) return;
  }
  if (!t?.anchor || !n) {
    r.find(O)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = Du(n.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: oo(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = It(s.run.spelling, o);
    if (a && fl(a)) return;
  }
  QP(
    e,
    ao(n.alignment, i, "toSettled"),
    r
  );
}
function jy(e, t, r, n, i) {
  r && By(Vu(e, n, i), t, e);
}
function ZP(e, t, r, n, i) {
  if (!r) return;
  const s = { text: "", spans: [], sentinels: [] };
  _r(e, s, n, i), By(s, t, e);
}
function Vy(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = ju(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = N();
  if (A(c)) {
    for (let y = c.anchor.getNode(); y; y = y.getParent())
      if (e.some((x) => x.is(y))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Gu(s, c.anchor));
  }
  const l = Ia(e, s), d = Wr(s.text, {
    getMarker: n
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (fi(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = xn.serializeEditorState(
    { type: Dr, version: Lr, content: d },
    r
  );
  if (es(u.root.children, n) === Zi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = u.root.children.map((y) => Hi(y));
  if ($y(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = ul(e).map((y) => ({
    number: y.getNumber(),
    sid: y.getSid()
  })), h = e[0];
  f.forEach((y) => h.insertBefore(y)), qy(f, s.sentinels), e.forEach((y) => y.remove());
  const m = ul(f);
  for (let y = 0; y < p.length && y < m.length; y++)
    m[y].getNumber() === p[y].number && m[y].setSid(p[y].sid);
  return La(l, () => Vu(f, n, r)), jy(f, o, a, n, r), !0;
}
function zs(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !$e.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!P(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(Qt(s) || _(s) && s.getTextContent() === Lt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const d = n[a - 1];
    if (!P(d) || d.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return _r(c, l, t, r), { out: l, contentNodes: c };
}
function Wy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(ot)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function eA(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = zs(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = N();
  if (A(d)) {
    for (let L = d.anchor.getNode(); L; L = L.getParent())
      if (e.is(L)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Gu(o, d.anchor));
  }
  const u = Ia(a, o), f = Wr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (f.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (fi(f) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = p.content ?? [], m = Wy(h), y = Ay(e, h, m, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if ($a(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const x = e.getCategory() !== m;
  if (x && e.setCategory(m), es(y.children, n) === Zi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), x;
  const C = y.children.map((L) => Hi(L));
  if ($y(C) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), x;
  const M = a[0];
  if (M)
    C.forEach((L) => M.insertBefore(L));
  else {
    const L = e.getChildren().find((T) => P(T) && T.getMarkerSyntax() === "closing");
    C.forEach((T) => L ? L.insertBefore(T) : e.append(T));
  }
  qy(C, o.sentinels);
  const R = new Set(o.sentinels.flat().map((L) => L.getKey()));
  a.forEach((L) => {
    R.has(L.getKey()) || (pe(L) && (L.getWritable().__suppressOnRemoveCallbacks = !0), L.remove());
  });
  const E = () => zs(e, n, r);
  return La(u, () => E()?.out), ZP(
    E()?.contentNodes ?? C,
    c,
    l,
    n,
    r
  ), !0;
}
const Hy = /* @__PURE__ */ new Set(["ca", "cp"]), Ju = "cp";
function Gy(e) {
  if (!Ze(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Vi(e, t, kr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Wr(r, { getMarker: kr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Ju)
  );
}
function ts(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && Hy.has(r.getMarker()) || Gy(r)) {
      t.push(r);
      continue;
    }
    ie(r) && r.getMarker() === Ju && t.push(r);
    break;
  }
  return t;
}
function tA(e) {
  const t = (n) => D(n) && Hy.has(n.getMarker()) || Gy(n);
  if (t(e) || ie(e) && e.getMarker() === Ju)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ce(n)) return n;
      if (!t(n)) return;
    }
}
function Bs(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = ts(e);
  if (n.some((s) => ie(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (_r(e.getChildren(), i, t, r), _r(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function rA(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...ts(e)], o = Bs(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = N();
  if (A(l)) {
    for (let y = l.anchor.getNode(); y; y = y.getParent())
      if (s.some((x) => x.is(y))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Gu(o, l.anchor));
  }
  const d = Ia(s, o), u = Wr(o.text, { getMarker: n }), [f] = u;
  if (u.length === 0 || typeof f != "object" || f.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (fi(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const p = xn.serializeEditorState(
    { type: Dr, version: Lr, content: u },
    r
  );
  if (es(p.root.children, n) === Zi(s, n)) {
    let y = !1;
    return e.getNumber() !== (f.number ?? "") && (e.setNumber(f.number ?? ""), y = !0), e.getAltnumber() !== f.altnumber && (e.setAltnumber(f.altnumber), y = !0), e.getPubnumber() !== f.pubnumber && (e.setPubnumber(f.pubnumber), y = !0), y || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  }
  const h = p.root.children.map((y) => Hi(y));
  if (!Ce(h[0]))
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1;
  const m = h[0];
  return h.forEach((y) => e.insertBefore(y)), s.forEach((y) => y.remove()), La(
    d,
    () => Bs(m, n, r)
  ), jy(h, a, c, n, r), !0;
}
function js(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Oe(n)) return;
    !t && (U(n) || ie(n) || Ce(n)) && (t = n), xr(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? tA(r) : void 0) ?? t;
}
function rr(e, t) {
  const r = js(e);
  return r ? U(r) ? eA(r, t) : Ce(r) ? rA(r, t) : Vy([r], t) : !1;
}
const nA = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function gp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !nA.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function wo(e, t) {
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
          t.push(`\\${n}`), gp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), wo(r.content, t), gp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), wo(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), wo(r.content, t);
      }
    }
}
function mp(e, t, r) {
  const n = js(e);
  if (!ie(n)) return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Bu(n, t, r);
  if (!o) return !1;
  const a = Wr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    ar.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  wo(a, l);
  for (const d of l.join("").replaceAll(q, "~")) {
    if (ar.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function iA(e) {
  return [ft(e), Ca()];
}
function Yu(e) {
  or(e, 2);
}
function sA(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Xu(e) {
  const t = sA(e);
  e.splice(0, 0, iA(e.getMarker())), t && Yu(e);
}
function la(e, t) {
  e.setMarker(t), Xu(e), Yu(e);
}
function oA(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!_n(n)) {
    if (_(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(q), Mt(n, ce, Mr), n.setMode("token");
      return;
    }
    if (Mg(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Ca());
  }
}
function yp(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : O(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function ws(e) {
  for (let t = e; t; t = t.getParent())
    if (ie(t)) return t;
}
function aA(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = ws(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = ws(r.getNode())?.is(s) ?? !1, a = ws(n.getNode())?.is(s) ?? !1;
    return !(o && !yp(r, s, "start") || a && !yp(n, s, "end"));
  });
}
function pl(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!A(r) || r.isCollapsed()))
    for (const n of aA(r)) t.add(n.getKey());
}
function cA(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!A(r) || !r.isCollapsed()) return;
  const n = ws(r.focus.getNode());
  n && t.add(n.getKey());
}
function lA(e) {
  const t = N();
  !A(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (pl(e), t.removeText());
}
function uA(e, t) {
  if (!Yi(t.viewOptions)) return;
  if (Xt(e.getFirstChild())) {
    oA(e, t);
    return;
  }
  if (t.splitExpected.current) {
    Xu(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ie(o) && !o.is(e))) {
      la(e, br), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ie(r)) {
    const n = e.getChildren().filter((a) => !_n(a)), i = N();
    let s = !1;
    if (A(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : ws(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || O(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && or(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  la(e, br);
}
function dA(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = yr(t, Xs(e.getMarker()));
  return r === "" ? void 0 : r;
}
function fA(e) {
  const t = e.getChildren().filter((s) => !P(s) && se(s, ce) !== "attribute"), r = t[0];
  r && _(r) && r.getTextContent().startsWith(q) && r.setTextContent(r.getTextContent().slice(1));
  const n = dA(e);
  n && t.push(xe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function pA(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => _(c) && !P(c) && c.getTextContent() === Lt(s)
    ), a = Gi(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (_(c) && c.getTextContent() === Lt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function hA(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    fA(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && rr(e, t);
}
function Jy(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Yi(r)) {
    la(e, t);
    return;
  }
  _m(e, t);
}
function Yy() {
  const e = N();
  if (!A(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Xy(e);
    return t !== "removed" ? t : (hl(), "handled");
  }
  return hl() ? "handled" : "declined";
}
function gA(e, t) {
  if (!t) return e;
  const r = AP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function bp(e, t) {
  const r = N();
  if (!A(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Qy())
      return "declined";
  } else {
    const s = Xy(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => gA(s, t)
  );
  kp(n ?? "");
  for (const s of i)
    hl(), kp(s);
  return "handled";
}
function mA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Js(n);
  if (!i) return !1;
  const s = sr(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !_(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Xy(e) {
  const t = sr(e.anchor.getNode()), r = sr(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), yA() ? "removed" : "needs-plain-split");
}
function kp(e) {
  if (e === "") return;
  const t = N();
  A(t) && t.insertText(e);
}
function yA() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = sr(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function Qy() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = sr(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function hl() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Qy();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Ur("fp", { closed: "false" });
  i.append(ft("fp"));
  const s = _(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
    d && (bv(d), i.append(d));
  }
  return i.getChildren().every(P) && i.append(xe(Gt)), Zy(i), !0;
}
function Zy(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (_(t)) {
    const r = t.getTextContent().startsWith(q) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (O(t)) {
    Zy(t);
    return;
  }
  e.selectEnd();
}
function bA(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function kA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of ge().getChildren()) {
    if (t && n.is(t)) break;
    (ct(n) || ze(n) || ie(n)) && r.push(n.getMarker());
  }
  return r;
}
function xA(e) {
  let t = e;
  for (; O(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function TA(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Xt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && _n(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(xA(i)) && r === 0 : !1;
}
function vA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Xt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && _n(i) && t.is(i) && r === 0;
}
function CA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function _A() {
  const e = N();
  if (!A(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = rt(t, ie), s = !n && (!i || vA(i, t, r)) ? "paragraph" : "character", o = sr(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: kA(t),
    openCharMarkers: bA(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: tu(t, r),
    anchorRect: CA()
  };
}
function SA() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!_(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = wP.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function MA(e, t, r) {
  Jy(e, t, r), Yu(e);
}
function EA(e, t, r) {
  const n = N();
  if (!A(n)) return;
  const i = n.focus.getNode(), s = rt(i, ie);
  if (t === "backslash" && s && TA(s, i, n.focus.offset)) {
    MA(s, e, r);
    return;
  }
  tb(e, r);
}
function PA(e, t) {
  const r = N();
  return !A(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function eb(e) {
  const t = N();
  return A(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function AA(e, t, r, n) {
  if (A(N()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && SA(), e.kind === "closeTag") {
    eb(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Yy() !== "declined") return;
  if (e.kind === "paragraph" && it.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    EA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if ($e.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return oy(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  rl(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Bn(), reference: r });
}
function tb(e, t) {
  const r = N();
  if (!A(r)) return;
  const n = Yi(t);
  if (iy()) {
    const s = N();
    if (!A(s)) return;
    const o = rt(s.anchor.getNode(), ie);
    if (!o) return;
    o.setMarker(e), n && Xu(o);
    return;
  }
  const i = r.insertParagraph();
  ie(i) && (n ? la(i, e) : i.setMarker(e));
}
function wA() {
  const [e] = le();
  return j(() => e.registerCommand(ch, () => !0, $t), [e]), null;
}
function rb(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !($e.isValidMarker(r) || ma(r));
}
function OA(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !($e.isValidMarker(r) || ma(r));
}
function NA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = SP.exec(e)?.[1];
  return r === void 0 ? !1 : !rb(r, t);
}
function nb(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !NA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ie(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ie(i))
    return [i, r];
}
function ib(e, t) {
  const r = nb(e, t.getMarker);
  return r !== void 0 && Vy(r, t);
}
function RA(e, t) {
  const r = N();
  A(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function sb(e) {
  const t = MP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function qA(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = sb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function $A(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (U(e.getParent()) && _(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      Zl(n);
      return;
    }
  }
  _(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function xp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = sb(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  $A(e);
}
function Tp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function ob(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return rr(e, r);
  const n = qA(e), i = e.getParent();
  if (ie(i)) {
    if (!rb(t, r.getMarker))
      return ib(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : rr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Tp(s, t) && xp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || U(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? OA(t, r.getMarker) : $e.isValidMarker(s)))
      return rr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return rr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (RA(c, He(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Tp(a, s) && xp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return rr(e, r);
}
function IA(e) {
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
function LA(e, t) {
  const r = e.getTextContent();
  if (Cn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Le(e.getParent()) && Il(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !IA(e)) {
    jx(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = CP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), ob(e, n[1], t);
      return;
    }
    if (_P.test(r)) {
      t.pendingKeys.delete(e.getKey()), rr(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = He(e.getMarker(), e.getNested());
    if (D(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = N(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = xe(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function DA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (Og(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function ab(e) {
  if (!bh(e)?.length)
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
const ms = ab("v"), UA = ab("c"), vp = /^[ \u00A0]*$/;
function Cp(e, t, r) {
  const n = e.getNextSibling();
  if (_(n) && n.getType() === Ve.getType() && n.getMode() === "normal" && se(n, ce) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = xe(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function FA(e, t) {
  const r = e.getTextContent(), n = Wt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (ms.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = ms.valueAndRest.exec(c);
    if (l && vp.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (ms.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = ms.valueAndRest.exec(r);
  if (!s) {
    const c = ms.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = N(), p = A(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(Wt("v", d));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, u.length) : void 0;
      Cp(e, u, h);
      return;
    }
    t.pendingKeys.delete(e.getKey()), rr(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), vp.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Wt("v", o)), a && Cp(e, a, a.length);
}
const KA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function zA(e, t) {
  const r = e.getParent();
  if (!U(r) || r.getIsCollapsed() !== !1 || !bh(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Lt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = KA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Lt(a)), !0;
}
function BA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!_(t)) return;
  const r = Wt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = UA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function cb(e) {
  if (Ee(e)) {
    const { wrapper: t } = ba(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (U(e)) {
    const { wrapper: t } = Ll(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ce(e)) {
    const t = [], r = zh(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = jh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Pe(e)) {
    const t = [], r = Ns(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Ns(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function jA(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return cb(e).some((n) => r.is(n));
}
function VA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ie(e) && Mg(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Rs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && so(l, e) && (i || jA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of cb(e))
    l.remove(), n = !0;
  let s = !1;
  if (D(e)) {
    const l = pT(e);
    l !== void 0 && wx(l) && (Qh(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Rs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (Yv(l, e)) {
        Ds(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && zg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Sa(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function _p(e) {
  return _(e) && e.getType() === Ve.getType() && e.getMode() === "normal" && se(e, ce) !== "attribute";
}
function WA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = H(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && _p(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && _p(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Co(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = WA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = H(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Cn(c)) continue;
      const h = xy.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = ob(c, h[1], e) || n : r === "idle" && mp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : ib(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = rr(c, e) || n;
      continue;
    }
    const l = gn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = VA(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && mp(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = rr(d, e) || n;
    }
  }
  return n;
}
function lb(e) {
  if (Sn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return Ts(t) !== void 0;
  return !1;
}
function HA(e) {
  const t = gn(e);
  if (!t) return !1;
  const r = Kr(t.kind);
  return !Sa(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Sp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ct(t) || Oe(t) || qg(t)) return !0;
  return !1;
}
function GA(e, t) {
  const r = e.getTextContent(), n = se(e, ce), i = e.getParent();
  if (n !== "attribute" && Ce(i)) {
    r.replace(/^[ \u00A0]+/, "") === Wt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (zA(e, t)) return;
  if (n === "attribute") {
    HA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && lb(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Sp(e))
      t.pendingKeys.add(e.getKey());
    else if (Vh(e)) t.pendingKeys.add(e.getKey());
    else if (Ce(js(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      D(a) && Zh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Sp(e)) return;
  const s = N(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (EP.test(o)) {
    if (Ux(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), rr(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function JA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : zg(e, t);
}
function YA(e) {
  const t = (r) => {
    if (P(r)) {
      Cn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Sn(r)) {
      Og(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Rs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (so(n, r) || JA(n, r)) && e.pendingKeys.add(r.getKey());
    if (Pe(r)) {
      r.getTextContent() !== Wt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (_(r)) {
      if (r.getType() !== Ve.getType() || se(r, ce) === "attribute") return;
      const n = r.getParent();
      if (Ce(n)) {
        r.getTextContent() !== Wt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && lb(r) || i.includes("//") || Vh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Oe(r) && !ct(r)) {
      if (Le(r) && r.getChildrenSize() === 0) {
        const n = gn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      O(r) && r.getChildren().forEach(t);
    }
  };
  ge().getChildren().forEach(t);
}
function XA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = se(e, ce);
  if (r === "attribute" || r === Mr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ct(o) || Ce(o) || Oe(o)) return;
  const n = t.startsWith(q) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? q : "") + i.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  s !== t && e.setTextContent(s);
}
function QA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function gl(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(QA(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function ZA(e) {
  const t = gl(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(q) ? r : n.includes(q) || i.includes(q) ? i : void 0;
  if (!s) return !1;
  const o = N();
  if (!A(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(q, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = Bn();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(Io, void 0), d === "") return;
    const f = N();
    A(f) && f.insertText(d);
  }), !0;
}
function e0(e) {
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
function t0(e) {
  const t = N();
  if (!A(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(q, " ")
  }, n = jk(e), i = Vk(e);
  return n && (r["text/html"] = e0(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Mp(e, t, r) {
  const n = N();
  if (!A(n) || n.isCollapsed()) return !1;
  const i = t0(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return Bk(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const ub = vl(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function bc(e) {
  const t = e();
  return Wn(eh), Wn(xh), t;
}
const Ep = 8, r0 = 1e3;
function Pi(e, t) {
  const r = Pe(e) ? ["va", "vp"] : Ee(e) ? ["milestone"] : U(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    tC(Kr(n), e, t.pendingKeys);
}
function n0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(_l) || Xl(e) === "remote")
      return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = H(o);
        if (!c) continue;
        const l = gn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = H(o.getKey());
        c?.isAttached() && Kr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return nt(
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
    e.registerMutationListener(Ve, r),
    e.registerMutationListener(Sr, r),
    e.registerMutationListener(Jr, r),
    e.registerMutationListener(Hr, r)
  );
}
function i0(e, t, r) {
  return nt(
    e.registerCommand(
      $r,
      (n) => {
        if (Om()) return !1;
        const i = gl(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(q, "~") : s).split(`
`);
          let c = bp(a, t.getMarker);
          if (c === "declined" && mA(e) && (c = bp(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Ir
    ),
    e.registerCommand(
      $r,
      (n) => {
        const i = gl(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !K1()) return !1;
        n?.preventDefault();
        const o = N();
        return A(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Io, void 0), a === "") return;
          const l = N();
          A(l) && l.insertText(a);
        }), !0;
      },
      Ke
    ),
    e.registerCommand(
      $r,
      () => (t.splitExpected.current = !0, !1),
      $t
    )
  );
}
function s0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = le(), s = e?.markerMode === "editable", o = !!e && Ot(e), a = Z(void 0), c = Z(n);
  return j(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? kr, l.logger = r);
  }, [e, t, r, n]), j(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? kr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const d = Wv(
      i,
      l.pendingKeys,
      (T) => {
        l.pendingKeys.clear(), T.read(() => YA(l));
      }
    );
    let u, f = !1, p = !1, h, m = !1, y = !1, x = 0;
    const C = () => x < Ep ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Ep} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), M = (T, $ = "departure") => {
      i.update(() => {
        x = bc(
          () => Co(l, T, $)
        ) ? x + 1 : 0;
      });
    };
    let R;
    const E = () => {
      if (R !== void 0 && clearTimeout(R), R = void 0, y || l.pendingKeys.size === 0) return;
      const T = c.current ?? r0;
      T < 0 || (R = setTimeout(() => {
        R = void 0, !(y || l.pendingKeys.size === 0) && (f || C() || M(void 0, "idle"));
      }, T));
    }, L = nt(
      i.registerNodeTransform(Sr, (T) => {
        if (i.isComposing()) return;
        LA(T, l);
        const $ = gn(T);
        $ && (Pe($.owner) || U($.owner) || Ce($.owner) || Ee($.owner) && ba($.owner).wrapper === void 0) && Pi($.owner, l);
      }),
      i.registerNodeTransform(mt, (T) => {
        i.isComposing() || (FA(T, l), Pi(T, l));
      }),
      i.registerNodeTransform(Ut, (T) => {
        i.isComposing() || (BA(T), T.isAttached() && Pi(T, l));
      }),
      i.registerNodeTransform(it, (T) => {
        i.isComposing() || uA(T, l);
      }),
      i.registerNodeTransform(_e, (T) => {
        if (!i.isComposing()) {
          hA(T, l);
          for (const $ of ["separator", "char"])
            T.isAttached() && so(Kr($), T) && l.pendingKeys.add(T.getKey());
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
      i.registerNodeTransform(ir, (T) => {
        i.isComposing() || Pi(T, l);
      }),
      i.registerNodeTransform(Hr, (T) => {
        if (i.isComposing()) return;
        const $ = gn(T);
        $ && (Ee($.owner) || Pe($.owner) || U($.owner) || Ce($.owner)) && Pi($.owner, l);
      }),
      i.registerNodeTransform($e, (T) => {
        i.isComposing() || (pA(T, l), Pi(T, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Xr, (T) => {
        i.isComposing() || DA(T, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(Ve, (T) => {
        i.isComposing() || GA(T, l);
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
        Ve,
        (T) => {
          i.getEditorState().read(() => {
            for (const [$, W] of T) {
              if (W === "destroyed") continue;
              const G = H($);
              !G || se(G, ce) !== "attribute" || Le(G.getParent()) || i.getElementByKey($)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      n0(i, l),
      ...o ? [
        i.registerNodeTransform(Ve, (T) => {
          i.isComposing() || XA(T);
        }),
        i.registerCommand(
          ga,
          (T) => Mp(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !1
          ),
          Ke
        ),
        i.registerCommand(
          Vn,
          (T) => Mp(
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !0
          ),
          Ke
        ),
        i.registerCommand(
          $r,
          (T) => ZA(
            // Same jsdom-safe duck-check as COPY above.
            T && typeof T == "object" && "clipboardData" in T ? T : null
          ),
          Ke
        )
      ] : [],
      i.registerCommand(
        Vn,
        () => (pl(l), !1),
        Ir
      ),
      i.registerCommand(
        Sl,
        () => (i.isComposing() || lA(l), !1),
        qi
      ),
      i.registerCommand(
        ha,
        () => (f = !1, x = 0, E(), !1),
        $t
      ),
      i.registerCommand(
        Vr,
        (T) => (f = !1, x = 0, E(), (T.key === "Backspace" || T.key === "Delete") && (pl(l), cA(l)), i.isComposing() || !T.ctrlKey || T.altKey || T.shiftKey || T.metaKey || T.key !== " " && T.code !== "Space" || !F1() ? !1 : (T.preventDefault(), !0)),
        Ke
      ),
      i.registerCommand(
        sh,
        (T) => {
          const $ = Yy();
          $ === "needs-plain-split" && i.dispatchCommand(Io, void 0);
          const W = $ !== "declined" || rC();
          return W && T?.preventDefault(), Co(l), W;
        },
        Ke
      ),
      i.registerCommand(
        Io,
        () => (l.splitExpected.current = !0, iy()),
        Ke
      ),
      i0(i, l, o),
      i.registerCommand(
        ub,
        () => {
          if (f) return !0;
          const T = i.getRootElement(), $ = T?.ownerDocument, W = !!T && !!$ && $.hasFocus() && T.contains($.activeElement);
          let G;
          if (W) {
            const te = N();
            G = A(te) ? te.focus.key : u;
          }
          return bc(() => Co(l, G)), !0;
        },
        $t
      ),
      i.registerCommand(
        Ol,
        () => (p = !0, !1),
        $t
      ),
      i.registerCommand(
        El,
        () => {
          if (f) return !1;
          const T = N(), $ = A(T) ? T.focus.key : u;
          return bc(() => Co(l, $)), !1;
        },
        $t
      ),
      i.registerUpdateListener(({ editorState: T, tags: $ }) => {
        const W = p || $.has(Os);
        p = !1, l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const G = T.read(() => {
          const Ne = N();
          return A(Ne) ? Ne.focus.key : void 0;
        }), te = h;
        if (G !== void 0 && (h = G), $.has(_l)) {
          Kg(i, T, $), f = !0, G !== void 0 && (u = G);
          return;
        }
        if (W) {
          G !== void 0 && G !== te && (f = !0);
          return;
        }
        f || (G !== void 0 && (u = G), E(), !(m || G === void 0) && [...l.pendingKeys].some((Ne) => Ne !== G) && (m = !0, queueMicrotask(() => {
          m = !1, !y && (C() || M(u));
        })));
      })
    );
    return () => {
      y = !0, R !== void 0 && clearTimeout(R), R = void 0, d(), L(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const o0 = ["status_unknown", "status_invalid"], db = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, a0 = Object.values(db);
function c0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = db[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Pp(e) {
  e.classList.remove(...o0), e.removeAttribute("aria-description"), a0.includes(e.title) && e.removeAttribute("title");
}
function l0(e, t, r, n) {
  const i = (a) => a.read(() => ge().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const d = H(l)?.getTopLevelElement();
        d && a.add(d.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function u0(e) {
  const t = H(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function d0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? Go;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = fP(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, p] of o) {
            if (u.has(f) || u0(f)) continue;
            const h = H(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || u.set(f, p);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Pp(p);
        }
        for (const [f, p] of u) {
          const h = n.getElementByKey(f);
          h && c0(h, p);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          l0(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && Pp(d);
      }
    };
  }, [n, i, t, r]), null;
}
function lo(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = jr(o);
    a && O(s) && lo(s.getChildren(), a, r);
  }
}
function fb(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = jr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = ji(o);
      if (c === void 0 || !c.includes(ot)) continue;
      const l = c.split(ot), d = [];
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
function uo(e, t, r) {
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
function pb(e, t) {
  const r = [];
  for (const n of e)
    Oy(n, t) || ((ie(n) || D(n)) && r.push(n.getMarker()), O(n) && r.push(...pb(n.getChildren(), t)));
  return r;
}
function hb(e) {
  const t = [];
  for (const r of e) {
    const n = zu(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = jr(r);
    i && t.push(...hb(i));
  }
  return t;
}
function Qu(e, t, r) {
  const n = pb(e, r), i = hb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function gb(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = N();
  let n, i;
  if (A(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = H(t.key), i = t.offset;
  else
    return;
  if (!(!_(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Zu(e, t) {
  const r = t && mb(e, t);
  return r ? Wu(e, r.start, r.end) : e;
}
function mb(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function yb(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = ju(e, o, s);
  if (!c) return;
  const l = Zu(c, i), d = Wr(l.text, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (fi(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = xn.serializeEditorState(
    { type: Dr, version: Lr, content: d },
    s
  ).root.children;
  if ($a(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = uo(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (es(u, o) === Zi(e, o) && Qu(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  fb(u, f.serialized);
  const h = f0(e), m = bb(u);
  for (let y = 0; y < h.length && y < m.length; y++)
    h[y].sid !== void 0 && m[y].number === h[y].number && (m[y].sid = h[y].sid);
  return Hu(
    e,
    l,
    f.live,
    u,
    "paras",
    o,
    s
  );
}
function f0(e) {
  const t = [], r = (n) => {
    Pe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : O(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function bb(e) {
  const t = [];
  for (const r of e) {
    Lh(r) && t.push(r);
    const n = jr(r);
    n && t.push(...bb(n));
  }
  return t;
}
function p0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = zs(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = Zu(l, i), f = Wr(u.text, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (fi(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const h = p.content ?? [], m = Wy(h), y = e.getCategory() !== m, x = Ay(e, h, m, s);
  if (x.failure !== void 0) {
    x.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const C = x.children;
  if ($a(C) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const M = uo(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (es(C, o) === Zi(d, o) && Qu(d, C, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: d, category: m, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return fb(C, M.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: Hu(
      d,
      u,
      M.live,
      C,
      "noteContent",
      o,
      s
    ),
    contentNodes: d,
    category: m,
    categoryChanged: y
  };
}
function Ap(e) {
  return e.$?.textType;
}
function h0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Ap(e) === Ap(t);
}
function g0(e) {
  const t = [];
  for (const r of e) {
    const n = H(r);
    n?.isAttached() && Oe(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function m0(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!U(t)) return;
  const r = e.getTextContent();
  if (Cn(e)) return;
  const n = xy.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function wp(e, t) {
  const r = e;
  r.marker = t, r.text = Ry(t, r.markerSyntax, r.nested);
}
function kb(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!$e.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && wp(a.node, s);
  const c = n.getChildren().filter(P).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && wp(l.node, s);
}
function xb(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Bs(e, i, n);
  if (!o) return;
  const a = Zu(o, r), c = Wr(a.text, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (fi(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = xn.serializeEditorState(
    { type: Dr, version: Lr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...ts(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && es(d, i) === Zi(u, i) && Qu(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Hu(
    u,
    a,
    [],
    d,
    "chapter",
    i,
    n
  );
}
function Tb(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (u) => {
    U(u) ? s.set(u.getKey(), u) : Ce(u) ? o.set(u.getKey(), u) : n.set(u.getKey(), [u]);
  };
  for (const u of e) {
    const f = H(u);
    if (!f?.isAttached()) continue;
    const p = js(f);
    if (p) {
      if (c(p), P(f)) {
        const h = nb(f, t.getMarker);
        h && i.push(h);
      }
      if (U(p)) {
        const h = m0(f);
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
    const u = js(r.node);
    u && c(u);
  }
  const d = g0(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: d,
    huskKeys: new Set(d.map((u) => u.getKey()))
  };
}
function vb(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && ji(r), s = n && ji(n);
  r && n && i !== void 0 && s !== void 0 && h0(r, n) && (r.text = i + s, e.splice(t, 1));
}
function Da(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? jr(s.node) : void 0;
  if (!s || !o) return !1;
  const a = p0(e, t, r, n, i);
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
function y0(e, t, r, n, i) {
  const s = gb(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: d, huskKeys: u } = Tb(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && d.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  lo(ge().getChildren(), e.root.children, f);
  for (const p of l.values()) kb(p, f);
  for (const p of a.values())
    Da(p, f, r, u, s);
  for (const p of o.values()) {
    const h = f.get(p[0].getKey());
    if (!h) continue;
    const m = yb(p, f, r, u, s);
    if (!m) continue;
    const y = h.siblings.indexOf(h.node);
    y < 0 || h.siblings.splice(y, p.length, ...m);
  }
  for (const p of c.values()) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = 1 + ts(p).length, y = xb(p, r, s);
    if (!y) continue;
    const x = h.siblings.indexOf(h.node);
    x < 0 || h.siblings.splice(x, m, ...y);
  }
  for (const p of d) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || vb(h.siblings, m);
  }
  return Ym(e, r.viewOptions);
}
function b0({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = Yi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        it,
        (i) => k0(i, t)
      );
  }, [r, n, t]), null;
}
function k0(e, t) {
  e.getMarker() !== br && (e.isEmpty() || Xt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${br}" (key ${e.getKey()})`
  ), e.setMarker(br)));
}
function ys(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const x0 = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Ar(e) {
  return x0.exec(e)?.[1] ?? e;
}
function Tn(e, t) {
  const r = e.jsonPath.slice(Ar(e.jsonPath).length);
  return { ...e, jsonPath: `${at(t)}${r}` };
}
function Cb(e, t) {
  return e.length === t.length && e.every((r, n) => r === t[n]);
}
function _b(e) {
  if (Xp(e) || Ro(e)) return !0;
  const t = Sb(e);
  return t === "marker" || t === "caller";
}
const T0 = /^\['([^']+)'\]$/;
function Sb(e) {
  if (No(e))
    return T0.exec(
      e.jsonPath.slice(Ar(e.jsonPath).length)
    )?.[1];
}
function Mb(e, t) {
  return _b(e) && Cb(Zt(Ar(e.jsonPath)), Cr(t));
}
function Eb(e, t, r) {
  if (!e.isAttached()) return;
  const [n, i] = Br(
    Tn(t, Cr(e)),
    r
  );
  if (!(!n || i === void 0))
    return { key: n.getKey(), offset: i, type: O(n) ? "element" : "text" };
}
function Pb(e, t) {
  const r = It(e, t, { addressDisplayBytes: !0 }), n = r && H(r.key);
  return r && r.offset > 0 && P(n) && n.getMarkerSyntax() !== "opening" ? r : void 0;
}
function Ab(e, t) {
  const r = It(e, t, { addressDisplayBytes: !0 });
  if (!r || r.offset !== 0) return;
  const n = e.spans.findIndex((o) => o.key === r.key), i = e.spans[n], s = n > 0 ? e.spans[n - 1] : void 0;
  if (!(!i || !As(i) || !s || s.end !== i.start || !As(s)))
    return Ly(s);
}
function v0(e, t) {
  const r = Pb(e, t);
  if (r) return r;
  const n = Ab(e, t);
  if (n) return n;
  const i = It(e, t);
  return i && C0(e, i);
}
function C0(e, t) {
  if (t.type !== "text") return t;
  const r = e.spans.findIndex((a) => a.key === t.key), n = e.spans[r], i = e.spans[r + 1];
  if (!n || !i || n.end === n.start || t.offset !== n.end - n.start)
    return t;
  const s = e.text[i.start] === "\\", o = ar.test(e.text[n.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function wb(e) {
  const t = e.markerName.length + 2, r = t + e.valueLength;
  return { valueStart: t, closerStart: r, closerLength: e.markerName.length + 2 };
}
function _0(e, t, r) {
  const { keyName: n } = e, { valueStart: i, closerStart: s } = wb(e);
  return r === 0 ? { jsonPath: t, keyName: n } : r < i ? { jsonPath: t, keyName: n, keyOffset: r - 1 } : r < s ? {
    jsonPath: `${t}['${n}']`,
    propertyOffset: r - i
  } : { jsonPath: t, keyName: n, keyClosingMarkerOffset: r - s };
}
function S0(e, t) {
  const { valueStart: r, closerStart: n, closerLength: i } = wb(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if ($o(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (qo(t))
    return s(t.keyClosingMarkerOffset, i, n);
  if (Tl(t)) return 0;
  if (No(t))
    return s(t.propertyOffset, e.valueLength, r);
}
function M0(e) {
  return $o(e) || qo(e) || Tl(e) ? e.keyName : Sb(e);
}
function E0(e, t, r) {
  const n = v0(e.spelling, t), i = n && H(n.key);
  if (!n || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === n.key);
  return s ? _0(
    s,
    at(Cr(i)),
    n.offset
  ) : yt(i, n.offset, r);
}
function P0(e, t) {
  let r = ge();
  for (let n = 0; n < t.length; n += 1) {
    if (!O(r)) return;
    const i = xt(r, Ot(e.viewOptions))[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function Ob(e, t) {
  const r = Zt(Ar(t.jsonPath));
  if (r.length === 0) {
    if (!Kn(t)) return { kind: "live", location: t };
    const o = e.settledToLiveTopIndex(t.offset);
    if (!o) {
      const a = xt(
        ge(),
        Ot(e.viewOptions)
      ).length;
      return { kind: "live", location: { ...t, offset: a } };
    }
    return o.plan && o.indexWithinScope > 0 ? Ob(e, { jsonPath: at([t.offset]) }) : { kind: "live", location: { ...t, offset: o.liveIndex } };
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
  const i = [n.liveIndex, ...r.slice(1)], s = P0(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: Tn(t, i) };
}
function Nb(e, t) {
  const r = M0(t);
  if (r === void 0) return;
  const n = Zt(Ar(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = H(s.ownerKey);
      if (s.keyName !== r || !o || !Cb(Cr(o), n))
        continue;
      const a = S0(s, t), c = i.spelling.spans.find((d) => d.key === s.ownerKey), l = a !== void 0 && c ? Wi(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: Oo(i.spelling, c.start + a)
        }
      };
    }
}
function A0(e, t, r, n) {
  const i = Nb(t, r);
  if (i) return i.resolution;
  const [s, o] = Br(r, n.viewOptions);
  if (!s || o === void 0) return;
  const a = Uu(e, s), c = a && t.find((f) => f.sentinelIndex === a.sentinelIndex);
  if (c) {
    const f = Ps(c.spelling, s, o);
    return f && {
      kind: "literal",
      run: c,
      anchor: f.anchor,
      atWordByte: Oo(c.spelling, f.position)
    };
  }
  if (!a) {
    const f = Ps(e, s, o);
    return f ? {
      kind: "anchor",
      anchor: f.anchor,
      atWordByte: Oo(e, f.position)
    } : void 0;
  }
  const l = Fu(a.member, s);
  if (!l) return;
  const d = U(a.member) ? zs(a.member, n.getMarker, n.viewOptions)?.out : void 0, u = d && Ps(d, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: O(s) ? "element" : "text",
    noteAnchor: u && {
      anchor: u.anchor,
      atWordByte: Oo(d, u.position)
    },
    isNoteOwnBytes: U(a.member) && Mb(r, a.member)
  };
}
function w0(e, t, r) {
  const n = Nb(e, t);
  if (n) return n.resolution !== void 0;
  const [i, s] = Br(t, r);
  return i !== void 0 && s !== void 0;
}
function Oo(e, t) {
  const r = e.text[t];
  return r !== void 0 && !ar.test(r);
}
function Rb(e, t) {
  if (t.type !== "text") return t;
  const r = Iy(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && ar.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function ed(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function O0(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function td(e) {
  const { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } = e;
  return t && r && n && i ? { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } : void 0;
}
function qb(e) {
  const t = e.liveNodes[0];
  if (!t.isAttached()) return;
  if (e.kind !== "note" && O(t))
    return { key: t.getKey(), offset: 0, type: "element" };
  const r = t.getParent();
  return r ? { key: r.getKey(), offset: t.getIndexWithinParent(), type: "element" } : void 0;
}
function dn(e, t) {
  return t?.warn(
    `[positions] A settled location in a pending ${e.kind} scope could not be lined up with its live bytes; it resolves to the front of the scope.`
  ), qb(e);
}
function kc(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), qb(e);
}
function Op(e) {
  const t = [];
  let r = 0;
  for (const n of e.spans) {
    n.isSentinel && t.push(n.end > n.start ? r : void 0);
    for (let i = n.start; i < n.end; i += 1)
      ar.test(e.text[i]) || (r += 1);
  }
  return t;
}
function N0(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = Op(s)[r];
  if (a === void 0) return dn(e, n);
  const c = Op(i).findIndex(
    (f) => f !== void 0 && Iu(o, f, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], d = l?.isAttached() ? l.getParent() : void 0;
  if (l && d)
    return { key: d.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const u = It(i, {
    nonWsBefore: oo(o, a, "settled"),
    wsRun: 0
  });
  return u ? ed(e, u) : dn(e, n);
}
function $b(e, t, r, n, i) {
  const s = td(e);
  if (!s) return dn(e, i);
  const o = !Kn(n), a = nd(
    s.liveFragment,
    ao(s.alignment, t, "toLive"),
    o
  ), c = It(s.liveFragment, a, {
    addressDisplayBytes: o
  });
  return c ? ed(e, r ? Rb(s.liveFragment, c) : c) : dn(e, i);
}
function R0(e, t, r, n, i, s) {
  const o = O0(r.sentinelMap, n);
  if (!o) return N0(t, r, n.sentinelIndex, s);
  const a = r.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return kc(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && n.isNoteOwnBytes)
    return Eb(a, i, e.viewOptions);
  if (c?.kind === "note")
    return n.noteAnchor ? $b(
      c,
      n.noteAnchor.anchor,
      n.noteAnchor.atWordByte,
      i,
      s
    ) : dn(c, s);
  let l = a;
  for (const d of n.path) {
    if (!O(l)) return kc(t, s);
    const u = l.getChildAtIndex(d);
    if (!u) return kc(t, s);
    l = u;
  }
  return { key: l.getKey(), offset: n.offset, type: n.type };
}
function q0(e, t, r) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = Br(t, r);
    return xr(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (xr(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function $0(e, t, r) {
  const { plan: n } = r, { logger: i, viewOptions: s } = e.tier2;
  if (n.kind === "note" && r.scratchIndexes.length === 1 && _b(r.location))
    return Eb(n.liveNodes[0], r.location, t.viewOptions);
  const o = Tn(r.location, r.scratchIndexes);
  if (!n.scratch.getEditorState().read(() => w0(n.settledOnlyRuns, o, s))) return;
  const c = q0(n, o, s);
  if (c) return c;
  const l = td(n);
  if (!l) return dn(n, i);
  const d = n.scratch.getEditorState().read(
    () => A0(
      l.scratchFragment,
      n.settledOnlyRuns,
      o,
      e.tier2
    )
  );
  if (!d) return dn(n, i);
  if (d.kind === "preserved")
    return R0(t, n, l, d, r.location, i);
  if (d.kind === "literal") {
    const { run: u, anchor: f } = d, p = My(u, f.nonWsBefore, "toLiteral") ?? oo(u.inner, f.nonWsBefore, "settled"), h = !Kn(r.location), m = nd(
      l.liveFragment,
      {
        nonWsBefore: u.liveBefore + p,
        wsRun: f.nonWsBefore === 0 ? u.liveWsBefore + f.wsRun : f.wsRun
      },
      h
    ), y = It(l.liveFragment, m, {
      addressDisplayBytes: h
    });
    return y ? ed(
      n,
      d.atWordByte ? Rb(l.liveFragment, y) : y
    ) : dn(n, i);
  }
  return $b(n, d.anchor, d.atWordByte, r.location, i);
}
function Np(e, t, r) {
  const n = Ob(t, r);
  if (!n) return;
  if (n.kind === "live") {
    const [o, a] = Br(n.location, t.viewOptions);
    return o && a !== void 0 ? n.location : void 0;
  }
  const i = $0(e, t, n), s = i && H(i.key);
  return s ? yt(s, i.offset, t.viewOptions) : void 0;
}
function I0(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = Np(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = Np(e, t, r.end);
  if (i)
    return { ...r, start: n, end: i };
}
function Ib(e, t) {
  const r = Zt(Ar(t.jsonPath));
  return r.length === 0 ? t : Tn(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function Lb(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function ua(e, t) {
  const r = t.liveNodes[0], n = Lb(e, t);
  if (n) {
    const s = id(e, n, r, 0);
    return typeof s == "object" ? Zt(Ar(s.jsonPath)) : void 0;
  }
  const i = L0(r, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function L0(e, t) {
  return !Ze(e) || !xr(e.getParent()) ? Cr(e) : [Ri(e, 0, Ot(t)).index];
}
function rd(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function D0(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function U0(e, t, r, n, i) {
  let s = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (s) {
    for (const o of r) {
      if (!O(s)) return;
      const a = s.getChildAtIndex(o);
      if (!a) return;
      s = a;
    }
    return yt(s, n, i);
  }
}
function F0(e, t) {
  const r = Ey(e, t);
  if (r)
    return {
      run: r,
      within: { nonWsBefore: 0, wsRun: t.wsRun - r.liveWsBefore }
    };
  const n = Du(e, t);
  if (n)
    return {
      run: n.run,
      within: n.within ?? {
        nonWsBefore: oo(n.run.inner, n.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function K0(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const r = H(e.key);
  return !(P(r) && r.getMarkerSyntax() !== "opening");
}
function nd(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = ar.test(e.text[o]);
      if (n < t.nonWsBefore)
        a || (n += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || K0(s, r) ? t : { ...t, wsRun: i };
    }
  return t;
}
function Db(e, t, r, n, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, d = Uu(o, r);
  if (d) {
    const m = o.sentinels[d.sentinelIndex];
    if (!c[d.sentinelIndex]?.some((M) => M !== void 0)) {
      const M = m[0].getParent();
      if (M)
        return Db(
          e,
          t,
          M,
          m[0].getIndexWithinParent(),
          i,
          s
        );
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const y = Fu(d.member, r);
    if (!y) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const x = c[d.sentinelIndex]?.[d.memberIndex];
    if (!x) return;
    const C = e.scratch.getEditorState().read(
      () => U0(a, x, y, n, i)
    );
    if (C) return C;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const u = Ps(o, r, D0(e, r, n));
  if (!u) return;
  const f = F0(e.settledOnlyRuns, u.anchor);
  if (f)
    return e.scratch.getEditorState().read(() => E0(f.run, f.within, i));
  const p = ao(l, u.anchor, "toSettled"), h = !Kn(
    yt(r, n, i)
  );
  return e.scratch.getEditorState().read(() => {
    const m = Pb(a, p), y = m && H(m.key);
    if (y) return yt(y, m.offset, i);
    const x = Ab(a, p), C = x && H(x.key);
    if (C)
      return yt(C, x.offset, i);
    const M = nd(a, p, h), R = It(a, M, { addressDisplayBytes: h });
    return R && z0(R, i);
  });
}
function z0(e, t) {
  const r = H(e.key);
  if (!r) return;
  const n = xr(r) && e.offset >= r.getChildrenSize() && r.getLastDescendant();
  return n ? yt(
    n,
    O(n) ? n.getChildrenSize() : n.getTextContentSize(),
    t
  ) : yt(r, e.offset, t);
}
function id(e, t, r, n) {
  if (t.kind === "note") {
    const a = yt(r, n, e.viewOptions);
    if (Mb(a, t.liveNodes[0])) {
      const c = ua(e, t);
      return c && Tn(a, c);
    }
  }
  const i = td(t);
  if (!i) return;
  const s = Db(
    t,
    i,
    r,
    n,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = rd(
    t,
    ua(e, t),
    Zt(Ar(s.jsonPath))
  );
  return o && Tn(s, o);
}
function B0(e) {
  const t = [], r = (n) => {
    if (O(n))
      n.getChildren().forEach((i, s) => {
        t.push({ node: n, offset: s }), r(i);
      }), t.push({ node: n, offset: n.getChildrenSize() });
    else if (_(n))
      for (let i = 0; i <= n.getTextContentSize(); i += 1)
        t.push({ node: n, offset: i });
  };
  return e.liveNodes.forEach(r), t;
}
function j0(e, t) {
  const r = t.scratch.getEditorState().read(() => yt(ge(), 0, e.viewOptions)), n = rd(
    t,
    ua(e, t),
    Zt(Ar(r.jsonPath))
  );
  if (n) return Tn(r, n);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = Lb(e, t);
  return o ? Fb(e, o, s, i.getIndexWithinParent()) : Ib(
    e,
    yt(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function Ub(e, t, r) {
  const n = B0(t), i = r ? n.findIndex((s) => s.node.is(r.node) && s.offset === r.offset) : -1;
  for (let s = (i < 0 ? n.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = n[s], c = id(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return j0(e, t);
}
function Fb(e, t, r, n) {
  return id(e, t, r, n) ?? Ub(e, t, { node: r, offset: n });
}
function Rp(e, t, r) {
  const n = e.planContaining(t);
  if (n) return Fb(e, n, t, r);
  const i = xr(t) && r >= t.getChildrenSize() && t.getLastChild(), s = i ? e.planContaining(i) : void 0;
  return s ? V0(e, s) ?? Ub(e, s, void 0) : Ib(e, yt(t, r, e.viewOptions));
}
function V0(e, t) {
  const r = t.scratch.getEditorState().read(() => {
    const i = ge();
    return yt(i, i.getChildrenSize(), e.viewOptions);
  }), n = rd(
    t,
    ua(e, t),
    Zt(Ar(r.jsonPath))
  );
  return n && Tn(r, n);
}
function W0(e) {
  const t = pu(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = N();
  if (!A(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = Rp(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = Rp(e, o.getNode(), o.offset);
  if (a)
    return { start: s, end: a };
}
function Kb(e, t, r) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && Ze(i) ? jP(i, r.getMarker, r.viewOptions) : t.every(ie) ? ju(t, r.getMarker, r.viewOptions) : VP(t, r.getMarker, r.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(Ce);
    return i && Bs(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(U);
  return n && zs(n, r.getMarker, r.viewOptions)?.out;
}
function H0(e, t) {
  const r = ah({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = ge();
        t.forEach((i) => n.append(Hi(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const qp = "\0";
function zb(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), O(r) && zb(r.getChildren(), t);
  return t;
}
function G0(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(qp), a = zb(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(qp);
}
function sd(e, t = []) {
  for (const r of e)
    U(r) && t.push(r), O(r) && sd(r.getChildren(), t);
  return t;
}
function Ua(e, t, r, n, i, s, o) {
  const a = H0(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l, settledSide: d } = a.getEditorState().read(() => {
    const h = Kb(e, ge().getChildren(), o.tier2);
    return {
      settledCount: xt(
        ge(),
        Ot(o.tier2.viewOptions)
      ).length,
      scratchFragment: h,
      settledSide: h && Lu(h)
    };
  }), u = { kind: e, liveNodes: t, liveCut: n, scratch: a, scratchFragment: l, settledCount: c };
  if ((r?.sentinels.length ?? 0) === 0 && (d?.runs.length ?? 0) === 0) {
    const h = r && d && ca(aa(r, []), d).alignment;
    return { ...u, liveFragment: r, sentinelMap: [], settledOnlyRuns: [], alignment: h };
  }
  const f = r && s && zy(r, s.live), p = f && d && ca(aa(f, s.live), d);
  return p ? { ...u, liveFragment: f, ...p } : {
    ...u,
    liveFragment: r,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function od(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = mb(e, t);
  return r ? {
    liveFragment: Wu(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function ad(e, t) {
  for (const r of e.noteGlyphRenames.values())
    kb(r, t);
}
function J0(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = od(t, i), a = co(e), c = /* @__PURE__ */ new Map();
  if (lo([e], [a], c), ad(r, c), !Da(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && uo(t, c, r.huskKeys);
  return Ua("note", [e], s, o, [a], l, n);
}
function Y0(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = od(t, i), a = e.map(co), c = /* @__PURE__ */ new Map();
  lo(e, a, c), ad(r, c), sd(e).filter((u) => r.noteScopes.has(u.getKey())).forEach(
    (u) => Da(u, c, n.tier2, r.huskKeys, i)
  );
  const l = yb(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const d = t && uo(t, c, r.huskKeys);
  return Ua("para", e, s, o, l, d, n);
}
function X0(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = od(t, n), o = xb(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...ts(e)];
  return Ua("chapter", a, i, s, o, void 0, r);
}
function Q0(e, t, r, n, i, s) {
  const o = co(e), a = /* @__PURE__ */ new Map();
  lo([e], [o], a), ad(n, a), sd([e]).filter((d) => n.noteScopes.has(d.getKey())).forEach(
    (d) => Da(d, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const d of r) {
    const u = a.get(d.getKey());
    if (!u) continue;
    const f = u.siblings.indexOf(u.node);
    f < 0 || (vb(u.siblings, f), c.add(d.getKey()));
  }
  if (c.size === 0) return;
  const l = t && uo(t, a, c);
  return Ua("para", [e], t, void 0, [o], l, i);
}
function Z0(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function $p(e, t) {
  return {
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (r) => r,
    settledToLiveTopIndex: (r) => ({ liveIndex: r, indexWithinScope: 0 }),
    planContaining: () => {
    },
    viewOptions: e,
    logger: t
  };
}
function ew(e) {
  return e.liveNodes.every((r) => r.isAttached()) ? (e.liveFragment?.spans ?? []).every((r) => H(r.key) !== null) : !1;
}
function Ip(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function tw(e, t) {
  const r = xt(ge(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = Ip(r[o]), c = a && e.get(a.getKey());
    if (!c) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((u) => u.getKey()));
    let d = 0;
    for (; o + d < r.length; ) {
      const u = Ip(r[o + d]);
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
function Lp(e) {
  const t = gb(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), $p(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = Tb(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const h = f.liveNodes[0].getKey();
    n.set(h, f), f.liveNodes.forEach((m) => i.set(m.getKey(), f)), p && f.liveNodes.forEach((m) => s.set(m.getKey(), f));
  }, c = (f, p, h, m) => {
    o.add(f);
    const y = Kb(p, h, e.tier2), x = G0(
      p,
      h,
      y?.text ?? "",
      e.tier2,
      t
    ), C = e.cache.entries.get(f);
    if (C?.signature === x && ew(C.plan)) return C.plan;
    const M = m(y);
    return M ? e.cache.entries.set(f, { signature: x, plan: M }) : e.cache.entries.delete(f), M;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => J0(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => Y0(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...ts(f)],
        (p) => X0(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!(ie(p) || Ze(p)) || Z0(f, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(f), l.set(p.getKey(), h);
  }
  for (const [f, { para: p, husks: h }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (m) => Q0(p, m, h, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0)
    return $p(e.tier2.viewOptions, e.tier2.logger);
  const { liveToSettled: d, settledToLive: u } = tw(
    s,
    Ot(e.tier2.viewOptions)
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
    viewOptions: e.tier2.viewOptions,
    logger: e.tier2.logger
  };
}
function rw({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = le(), n = Z({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, da(s, e) || nw(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = ml(r);
        Dp(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: _o(s) === _o(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        ge().getChildren().filter(ze).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((p) => !d.has(p));
      f && (ml(r) || Dp(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((p) => !u.has(p)),
        isSameDocumentReload: _o(a) === _o(c)
      }));
    };
    return nt(
      ...[Ut, Er].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      Tr,
      () => {
        const i = n.current;
        return i.phase === "idle" && cw(i, sw()), !1;
      },
      $t
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Tr, void 0));
    };
    return nt(
      r.registerMutationListener(wt, i),
      r.registerMutationListener(mt, i)
    );
  }, [r]), j(() => {
    const i = () => fw(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function nw(e, t, r) {
  if (iw(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = ml(t);
  (!n || n === r.book) && t.update(() => Bb(t, r.chapterNum, r.verseNum));
}
function iw(e, t) {
  const r = e.pendingEchoes.findIndex((n) => da(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function sw() {
  const e = N(), t = Hl(e);
  if (!t) return;
  const r = cd(), n = bg(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = iu(t, e), { verseNum: o, verse: a } = SC(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function ml(e) {
  return e.getEditorState().read(() => cd()?.getCode() || void 0);
}
function cd() {
  return ge().getChildren().find(ct);
}
function Dp(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && xc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || xc(e, t), e.phase = "navigating") : i && xc(e, t), r && r !== e.scrRef.book && Wb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function xc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Bb(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function Bb(e, t, r) {
  const n = N()?.clone();
  ow(t, r);
  const i = N();
  i && !(n && i.is(n)) && e.dispatchCommand(Ol, void 0);
}
function ow(e, t) {
  const r = Hl(N()), n = su(r)?.getNumber(), i = bg(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (_g(n) ? Vb(t, n) : parseInt(n, 10) === t))
    return;
  const o = ge().getChildren(), a = yg(o, e);
  if (!a) return;
  const c = pv(o, a), l = ov(c, !0);
  fv(c, l);
  let d;
  try {
    d = xC(c, t);
  } catch {
    return;
  }
  d && (ie(d) ? !_(d.getFirstChild()) && Qi(d) || or(d, 0) : aw(d));
}
function aw(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ye(n)) {
    or(t, r);
    return;
  }
  const i = _a(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (_(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = O(n) && !U(n) ? jb(n) : void 0;
  s ? s.select(0, 0) : or(t, r);
}
function jb(e) {
  const t = e.getFirstChild();
  if (_(t)) return t;
  if (O(t) && !U(t)) return jb(t);
}
function _o(e) {
  return e.read(() => {
    const t = ge().getChildren().find(ze);
    return `${cd()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function cw(e, t) {
  e.phase !== "navigating" && t && (lw(t, e.scrRef) || Wb(e, uw(t, e.scrRef)));
}
function lw(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Vb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Vb(e, t) {
  try {
    return Gl(e, t);
  } catch {
    return !1;
  }
}
function uw(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const dw = 8;
function Wb(e, t) {
  return da(t, e.scrRef) || e.pendingEchoes.some((r) => da(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > dw && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function da(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function fw(e) {
  e.phase = "idle";
}
function pw(e) {
  return ct(e) ? `${e.__code}` : Ce(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : no(e) ? `${e.__marker} "${e.__number}"` : Qt(e) ? `${e.__caller}` : ui(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ie(e) ? `${e.__marker}` : _(e) ? `"${e.__text}"${hw(e)}` : pe(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Pe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function hw(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[zn]) : "";
}
function gw() {
  const [e] = le();
  return /* @__PURE__ */ S(
    Wk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: pw,
      editor: e
    }
  );
}
const Hb = Jp(null), Up = 4;
function mw({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = Yp(Hb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ S("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function yw({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = he(), [s, o] = he(), a = de(
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
  }, l = Fe(() => ({ registerItem: a }), [a]);
  return j(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ S(Hb.Provider, { value: l, children: /* @__PURE__ */ S("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function bw({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Z(null), c = Z(null), [l, d] = he(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: m } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Up}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (h) => {
        const m = h.target;
        o && a.current && a.current.contains(m) || f.contains(m) || d(!1);
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
          const { top: m } = p.getBoundingClientRect(), y = m + p.offsetHeight + Up;
          y !== h.getBoundingClientRect().top && (h.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Ae(Fn, { children: [
    /* @__PURE__ */ Ae(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => d(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ S("span", { className: i }),
          t && /* @__PURE__ */ S("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ S("i", { className: "chevron-down" })
        ]
      }
    ),
    l && Dn(
      /* @__PURE__ */ S(yw, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const yl = {
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
}, bl = {
  ...yl,
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
function kw({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ S(
    bw,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + xw(t),
      buttonLabel: Tw(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(yl).map((n) => /* @__PURE__ */ Ae(
        mw,
        {
          className: "item block-marker " + vw(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ S("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ S("span", { className: "text usfm_" + n, children: yl[n] })
          ]
        },
        n
      ))
    }
  );
}
function xw(e) {
  return e && e in bl ? e : "ban";
}
function Tw(e) {
  return e && e in bl ? bl[e] : "No Style";
}
function vw(e) {
  return e ? "active dropdown-item-active" : "";
}
function Fp() {
  return /* @__PURE__ */ S("div", { className: "divider" });
}
const Cw = ni(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = he(s), [c, l] = he(), [d, u] = he(!1), [f, p] = he(!1), h = de(
    ({
      canUndo: m,
      canRedo: y,
      blockMarker: x,
      contextMarker: C
    }) => {
      u(m), p(y), l(x), n?.({
        canUndo: m,
        canRedo: y,
        blockMarker: x,
        contextMarker: C
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    Tr,
    (m, y) => (a(y), !1),
    Ir
  ), [s]), /* @__PURE__ */ Ae(Fn, { children: [
    /* @__PURE__ */ S(Dm, { onStateChange: h }),
    /* @__PURE__ */ Ae("div", { className: "toolbar", children: [
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(lh, void 0);
          },
          title: Lo ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ S("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(uh, void 0);
          },
          title: Lo ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ S("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ S(Fp, {}),
      o === s && /* @__PURE__ */ Ae(Fn, { children: [
        /* @__PURE__ */ S(
          kw,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ S(Fp, {})
      ] }),
      /* @__PURE__ */ S("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), _w = Pa(), Sw = {}, Mw = {}, Kp = yx.filter((e) => e !== Nl);
function Ew() {
  return /* @__PURE__ */ S("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function zp(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function Bp() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return _(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function Pw(e) {
  const t = [], r = (n, i) => n?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(at(a)), r(s.content, a);
  });
  return r(e?.content, []), t;
}
function Aw(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function ww({
  listener: e
}) {
  const [t] = le();
  return Vs(
    () => t.registerUpdateListener((r) => e(r, t)),
    [t, e]
  ), null;
}
const Gb = ni(function({
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
  const u = Z(null), f = Z(null), p = Z(null), h = Z(t), m = Z(!1), y = Z(void 0), x = Z(void 0), C = Z(void 0), M = Z({ entries: /* @__PURE__ */ new Map() }), R = Z(void 0), E = Z(0), L = Z(!0), T = Z(void 0), [$, W] = he(t), [G, te] = he(0), [Ne, Y] = he(), {
    isReadonly: Te = !1,
    structureProtectionMode: qe = "off",
    hasExternalUI: Ft = !1,
    hasSpellCheck: ee = !1,
    textDirection: B = "ltr",
    markerMenuTrigger: oe = "\\",
    view: je,
    nodes: Xe,
    debug: fe = !1,
    contextMenu: wr,
    styleInfo: Nt,
    markerSettleDelayMs: rs
  } = a ?? Mw, lr = je ?? _w, pi = Fs(lr) && (lr.markerMode !== "hidden" || !lr.hasSpacing || lr.hasGutterParaMarkers || lr.hasActiveTextFocusBox) ? {
    ...lr,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : lr, ns = Z(pi);
  mr(ns.current, pi) || (ns.current = pi);
  const re = ns.current, ht = Fe(() => Xe ?? Sw, [Xe]), fo = Fe(() => wr, [wr]), ve = Fe(
    () => dC(Nt ?? Go),
    [Nt]
  ), Or = Z(c);
  mr(Or.current, c) || (Or.current = c);
  const Q = Or.current, Rt = Fs(re), be = Te || Rt, Qr = pi !== lr;
  j(() => {
    Rt && !Te && Q?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Qr && Q?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [Rt, Te, Qr, Q]);
  const Zr = Z(null), ur = Fe(() => {
    if (re.markerMode !== "editable") return;
    const w = Nt ?? Go;
    return {
      getContext: () => Zr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (F) => xP(
        w,
        F,
        ht.extraValidMarkers
      ),
      getEnterItems: (F) => TP(
        w,
        F,
        ht.extraValidMarkers
      ),
      apply: (F, z) => {
        const X = Zr.current;
        X && (z.trigger === "enter" ? X.splitParagraphWithMarker(F.marker) : X.applyMarkerMenuSelection(F, z));
      },
      commitTypedCloser: (F) => {
        Zr.current?.commitTypedCloser(F);
      }
    };
  }, [re, Nt, ht.extraValidMarkers]), is = (w) => {
    if (Rt)
      throw new Error(
        `Cannot ${w} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Nr = (w) => {
    if (is(w), be) throw new Error(`Cannot ${w} in readonly mode`);
  }, En = Fe(
    () => [Qe, ...Rt ? H_ : xu],
    [Rt]
  ), po = Fe(
    () => ({
      namespace: "platformEditor",
      theme: { ...hy, showCharMarkerTitles: re.showCharMarkerTitles },
      editable: !be,
      editorState: void 0,
      // Handling of errors during update
      onError(w) {
        throw w;
      },
      nodes: En
    }),
    [be, En, re.showCharMarkerTitles]
  );
  hs.initialize(Q);
  function Tt(w) {
    if (w !== void 0 && !z1(w, ht.extraValidMarkers))
      throw new Error(`Unsupported character marker '${w}'`);
  }
  const vt = de(() => {
    const w = u.current;
    if (!w) return h.current;
    const F = () => {
      if (!m.current) return;
      const Kt = hs.deserializeEditorState(w.getEditorState(), re);
      Kt && (h.current = Kt, m.current = !1);
    }, z = Vd(w), X = x.current;
    if ((!z || z.size === 0) && !X)
      return F(), h.current;
    const Se = w.getEditorState(), ue = C.current, ke = {
      editorState: Se,
      pendedKeys: z ? [...z].sort().join(",") : "",
      transientInput: X,
      caretKey: ue?.key,
      caretOffset: ue?.offset,
      viewOptions: re,
      getMarker: ve
    }, Ge = R.current;
    if (Ge && Aw(Ge.key, ke)) return Ge.usj;
    const fr = Se.toJSON(), Ct = Se.read(
      () => y0(
        fr,
        z ?? /* @__PURE__ */ new Set(),
        { viewOptions: re, getMarker: ve, logger: Q },
        X,
        ue
      )
    );
    return Ct ? (R.current = { key: ke, usj: Ct }, Ct) : (F(), h.current);
  }, [re, ve, Q]), ut = de(() => {
    const w = u.current;
    if (!w) return;
    const F = {
      pendedKeys: Vd(w) ?? /* @__PURE__ */ new Set(),
      transientInput: x.current,
      lastKnownCaret: C.current,
      tier2: { viewOptions: re, getMarker: ve, logger: Q },
      nodes: En,
      cache: M.current
    };
    return ys(F) && F.cache.entries.clear(), F;
  }, [re, ve, Q, En]), en = de(
    (w) => {
      const F = u.current, z = ut();
      if (!(!F || !z))
        return ys(z) ? w : F.getEditorState().read(() => {
          const X = Lp(z);
          return I0(z, X, w);
        });
    },
    [ut]
  );
  j(() => (L.current = !0, () => {
    L.current = !1;
  }), []);
  const tn = de(
    (w, F) => w.read(() => {
      const z = ut(), X = z && W0(Lp(z));
      return !X && A(N()) && Q?.warn(
        `${F} refused: the selection could not be expressed against the document the host is reading`
      ), X;
    }),
    [ut, Q]
  ), hi = de(
    (w) => {
      if (!i) return;
      const F = u.current, z = ut();
      E.current += 1;
      const X = E.current;
      if (!F || !z || ys(z)) {
        i(w);
        return;
      }
      queueMicrotask(() => {
        if (!L.current || X !== E.current || u.current !== F) return;
        const Se = tn(F, "onSelectionChange");
        X === E.current && i(Se);
      });
    },
    [i, ut, tn]
  ), gi = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const w = u.current?.getRootElement();
      return !!w && w.ownerDocument.activeElement === w;
    },
    undo() {
      u.current?.dispatchCommand(lh, void 0);
    },
    redo() {
      u.current?.dispatchCommand(uh, void 0);
    },
    cut() {
      Nr("cut"), u.current?.dispatchCommand(Vn, null);
    },
    copy() {
      u.current?.dispatchCommand(ga, null);
    },
    paste() {
      Nr("paste"), u.current && _u(u.current);
    },
    pastePlainText() {
      Nr("paste as plain text"), u.current && Su(u.current);
    },
    getUsj() {
      return vt();
    },
    commitPendingMarkerEdits() {
      u.current?.update(
        () => {
          u.current?.dispatchCommand(ub, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(w) {
      if (!w) {
        x.current = void 0;
        return;
      }
      const F = u.current?.getEditorState().read(() => {
        const z = N();
        return A(z) && z.isCollapsed() ? z.focus.key : void 0;
      });
      x.current = { input: w, nodeKey: F ?? C.current?.key };
    },
    setUsj(w) {
      if (!mr(h.current, w)) {
        h.current = w, x.current = void 0;
        const F = mr($, w);
        W(w), F && te((z) => z + 1);
      }
    },
    applyUpdate(w, F = "remote") {
      if (Rt && F === "remote") {
        Or.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      is("apply an update");
      const z = u.current;
      z?._updating && Or.current?.error(
        "Editor: applyUpdate was called inside an update of this editor; its change will be announced as a local edit without the given ops. Call it outside editor updates, commands, and update listeners."
      ), z && jd(z, F);
      try {
        z?.update(
          () => {
            F === "remote" && Wn(Nl), hS(w, re, ht, Q);
          },
          { discrete: !0 }
        );
      } finally {
        z && jd(z, void 0);
      }
      const X = u.current?.getEditorState();
      if (!X) return;
      const Se = hs.deserializeEditorState(X, re);
      if (Se) {
        const ue = !mr(h.current, Se);
        ue && (h.current = Se);
        const ke = vt();
        if (ke && (ue || !mr($, Se))) {
          const Ge = nf(w, X, "apply");
          T.current = ke, s?.(ke, w, F, Ge);
        }
      }
    },
    replaceEmbedUpdate(w, F) {
      const z = u.current?.read(() => LC(w, F));
      z ? this.applyUpdate(z) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${w}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      const w = u.current;
      if (!w) return;
      w.read(() => {
      });
      const F = ut();
      return !F || ys(F) ? w.read(() => pu(re)) : tn(w, "getSelection");
    },
    setSelection(w) {
      const F = en(w);
      if (!F) {
        Q?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      u.current?.update(() => {
        const z = fu(F, re);
        z !== void 0 && (fn(z), (!Bn().isEditable() || zp(z.anchor) && zp(z.focus)) && u.current?.dispatchCommand(Tr, void 0));
      });
    },
    setAnnotation(w, F, z, X, Se) {
      let ue, ke, Ge, fr;
      typeof X == "function" || X === void 0 ? (ue = X, ke = Se) : (ue = X.onClick, ke = X.onRemove, Ge = X.onMouseEnter, fr = X.onMouseLeave);
      const Ct = en(w);
      if (!Ct) {
        Q?.warn(
          `setAnnotation refused for ${F} "${z}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        Ct,
        Od(F),
        z,
        ue,
        ke,
        Ge,
        fr
      );
    },
    removeAnnotation(w, F) {
      f.current?.removeAnnotation(Od(w), F);
    },
    formatPara(w) {
      Nr("format a paragraph"), u.current?.update(() => {
        const F = N();
        if (!A(F)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${w}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        Jk(F, () => $s(w));
        const z = N();
        if (!A(z)) return;
        const X = /* @__PURE__ */ new Set();
        z.getNodes().forEach((Se) => {
          const ue = Se.getTopLevelElement();
          ie(ue) && X.add(ue);
        }), X.forEach((Se) => Jy(Se, w, re));
      });
    },
    getElementByKey(w) {
      return u.current?.read(
        () => u.current?.getElementByKey(w) ?? void 0
      );
    },
    removeCharacterMarker(w) {
      if (be) throw new Error("Cannot remove character marker in readonly mode");
      Tt(w);
      let F = !1;
      return u.current?.update(
        () => {
          const z = N();
          A(z) && (F = cy(z, w, re));
        },
        { discrete: !0 }
      ), F;
    },
    replaceCharacterMarker(w, F) {
      if (be) throw new Error("Cannot replace character marker in readonly mode");
      Tt(w), Tt(F);
      let z = !1;
      return u.current?.update(
        () => {
          const X = N();
          A(X) && (z = eP(X, w, F));
        },
        { discrete: !0 }
      ), z;
    },
    extendCharacterMarker(w, F) {
      if (be) throw new Error("Cannot extend character marker in readonly mode");
      Tt(w), F?.forEach(
        (X) => Tt(X)
      );
      let z = !1;
      return u.current?.update(
        () => {
          const X = N();
          A(X) && (z = tP(
            X,
            w,
            F,
            re
          ));
        },
        { discrete: !0 }
      ), z;
    },
    insertMarker(w) {
      if (be) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!tl(w, ht.extraValidMarkers))
        throw new Error(`Unsupported marker '${w}'`);
      const F = rl(
        w,
        y,
        re,
        ht,
        Q,
        void 0,
        Nt
      );
      return F.action({ editor: u.current, reference: r }), F.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!Te)
        return u.current?.getEditorState().read(() => _A());
    },
    applyMarkerMenuSelection(w, F) {
      if (Te) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (w.kind !== "closeTag" && !tl(w.marker, ht.extraValidMarkers))
        throw new Error(`Unsupported marker '${w.marker}'`);
      let z;
      return u.current.update(() => {
        z = AA(w, F, r, {
          expandedNoteKeyRef: y,
          viewOptions: re,
          nodeOptions: ht,
          logger: c,
          styleInfo: Nt
        });
      }), z;
    },
    splitParagraphWithMarker(w) {
      if (Te) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        tb(w, re);
      });
    },
    commitTypedMarker(w, F) {
      if (Te) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let z = !1;
      return u.current.update(() => {
        z = PA(w, F), z || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), z;
    },
    commitTypedCloser(w) {
      if (Te) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let F = !1;
      return u.current.update(() => {
        F = eb(w), F || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), F;
    },
    insertNote(w, F, z) {
      Nr("insert a note");
      const X = z && en(z);
      if (z && !X) {
        Q?.warn(
          `insertNote refused for \\${w}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      u.current?.update(() => {
        const Se = bm(
          w,
          F,
          X,
          r,
          re,
          ht,
          Q
        );
        Se && !Se.getIsCollapsed() && (y.current = Se.getKey());
      });
    },
    selectNote(w) {
      const F = u.current;
      if (!F) return;
      const z = ut();
      if (typeof w == "string" || !z || ys(z)) {
        F.update(() => {
          const ue = yf(w);
          ue && (bf(ue, re), ue.getIsCollapsed() || (y.current = ue.getKey()));
        });
        return;
      }
      const X = Pw(vt())[w], Se = X ? en({ start: { jsonPath: X } }) : void 0;
      Se && F.update(() => {
        const [ue, ke] = Br(Se.start, re);
        if (!ue || ke === void 0) return;
        const Ge = U(ue) ? ue : rt(ue, U);
        U(Ge) ? (bf(Ge, re), Ge.getIsCollapsed() || (y.current = Ge.getKey())) : _(ue) && ue.select(ke, ke);
      });
    },
    getNoteOps(w) {
      return u.current?.read(() => {
        const F = yf(w);
        if (F)
          return au(F);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Zr.current = gi, xl(d, () => gi), j(() => {
    const w = u.current;
    if (w)
      return w.registerUpdateListener(({ editorState: F }) => {
        const z = F.read(Bp);
        z && (C.current = z);
      });
  }, []);
  const dr = Z({ onUsjChange: s, viewOptions: re, isBlockVerse: Rt, readSettledUsj: vt });
  dr.current = { onUsjChange: s, viewOptions: re, isBlockVerse: Rt, readSettledUsj: vt };
  const mi = de((w, F) => {
    const { editorState: z, dirtyElements: X, dirtyLeaves: Se, tags: ue } = w;
    if (X.size === 0 && Se.size === 0) return;
    if (ue.has(wl)) {
      const pr = dr.current, An = !pr.isBlockVerse && hs.deserializeEditorState(z, pr.viewOptions);
      An && (h.current = An), T.current = h.current;
      return;
    }
    if (Xl(F)) return;
    if (Kp.some((pr) => ue.has(pr))) {
      m.current = !0;
      return;
    }
    const ke = dr.current;
    if (ke.isBlockVerse) return;
    Kg(F, z, ue);
    const Ge = z.read(Bp);
    Ge && (C.current = Ge);
    const fr = fS(w, {
      ignoreTags: Kp
    }), Ct = fr ? [] : new Ni(z.read(() => pS(F, w))).chop().ops;
    if (!fr) {
      const pr = hs.deserializeEditorState(z, ke.viewOptions);
      pr && (h.current = pr);
    }
    if (!ke.onUsjChange) return;
    const Kt = ke.readSettledUsj();
    Kt && (Ct.length === 0 && mr(T.current, Kt) || (T.current = Kt, Ct.length === 0 ? ke.onUsjChange(Kt, void 0, "local", void 0) : ke.onUsjChange(Kt, Ct, "local", nf(Ct, z))));
  }, []), Pn = de(
    (w) => {
      Y(w.contextMarker), o?.(w);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Ae(fh, { initialConfig: po, children: [
      /* @__PURE__ */ S(pM, { isEditable: !be }),
      /* @__PURE__ */ Ae("div", { className: "editor-container", children: [
        Ft ? /* @__PURE__ */ S(Dm, { onStateChange: Pn }) : /* @__PURE__ */ S(
          "div",
          {
            className: "editor-toolbar-container" + (be ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ S(
              Cw,
              {
                ref: p,
                editorRef: Zr,
                isReadonly: be,
                onStateChange: Pn
              }
            )
          }
        ),
        /* @__PURE__ */ Ae("div", { className: "editor-inner", children: [
          /* @__PURE__ */ S(hh, { editorRef: u }),
          /* @__PURE__ */ S(
            Gk,
            {
              contentEditable: /* @__PURE__ */ S(
                ph,
                {
                  className: `editor-input usfm ${k_(re).join(" ")}${re.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${re.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: ee
                }
              ),
              placeholder: /* @__PURE__ */ S(Ew, {}),
              ErrorBoundary: gh
            }
          ),
          Ft && /* @__PURE__ */ S(fM, {}),
          /* @__PURE__ */ S(mh, {}),
          r && n && /* @__PURE__ */ S(rw, { scrRef: r, onScrRefChange: n }),
          r && !Ft && /* @__PURE__ */ S(
            DE,
            {
              trigger: oe,
              scrRef: r,
              contextMarker: Ne,
              getMarkerAction: (w) => rl(
                w,
                y,
                re,
                ht,
                Q,
                void 0,
                Nt
              ),
              editableHarness: ur
            }
          ),
          /* @__PURE__ */ S(
            mM,
            {
              scripture: $,
              scriptureRef: h,
              nodeOptions: ht,
              editorAdaptor: xn,
              viewOptions: re,
              logger: Q
            },
            G
          ),
          /* @__PURE__ */ S(IM, { onChange: hi, viewOptions: re }),
          /* @__PURE__ */ S(ww, { listener: mi }),
          /* @__PURE__ */ S(oP, { viewOptions: re }),
          /* @__PURE__ */ S(dS, { ref: f, logger: Q, viewOptions: re }),
          /* @__PURE__ */ S(FS, { viewOptions: re }),
          /* @__PURE__ */ S(eM, {}),
          /* @__PURE__ */ S(oM, {}),
          re?.markerMode !== "editable" && /* @__PURE__ */ S(aM, { logger: Q }),
          /* @__PURE__ */ S(dM, { options: fo }),
          /* @__PURE__ */ S(gM, {}),
          /* @__PURE__ */ S(wA, {}),
          /* @__PURE__ */ S(
            s0,
            {
              viewOptions: re,
              getMarker: ve,
              logger: Q,
              markerSettleDelayMs: rs
            }
          ),
          /* @__PURE__ */ S(
            d0,
            {
              styleInfo: Nt,
              viewOptions: re,
              logger: Q
            }
          ),
          /* @__PURE__ */ S(
            yM,
            {
              expandedNoteKeyRef: y,
              nodeOptions: ht,
              viewOptions: re,
              logger: Q
            }
          ),
          /* @__PURE__ */ S($M, {}),
          /* @__PURE__ */ S($S, {}),
          /* @__PURE__ */ S(OS, {}),
          /* @__PURE__ */ S(b0, { viewOptions: re, logger: Q }),
          /* @__PURE__ */ S(LM, {}),
          /* @__PURE__ */ S(_E, { structureProtectionMode: qe }),
          /* @__PURE__ */ S(SE, { textDirection: B }),
          /* @__PURE__ */ S(EE, {}),
          /* @__PURE__ */ S(IE, {}),
          l
        ] }),
        fe && /* @__PURE__ */ S(gw, {})
      ] })
    ] }, re.verseLayout ?? "inline")
  );
}), IO = ni(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ S(Gb, { ref: r, ...i });
});
function Jb() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function fa(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Jb() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Yb(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Jb() : r,
    quote: e,
    type: "thread"
  };
}
function jp(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function Ow(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Tc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class Nw {
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
    this._comments = t, Tc(this);
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
          const c = jp(a);
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
    this._comments = i, Tc(this);
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
          const c = jp(a);
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
    return this._comments = n, Tc(this), t.type === "comment" ? {
      index: s,
      markedComment: Ow(t)
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
    return t !== null ? t.doc.get("comments", vd) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Cd(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new vd();
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
      ux,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      $t
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof dx) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const p of u) {
              const h = p.insert, m = p.retain, y = p.delete, x = d.parent, C = d === r ? void 0 : x instanceof Cd && this._comments.find((M) => M.id === x.get("id"));
              if (Array.isArray(h)) {
                const M = f;
                h.slice().reverse().forEach((R) => {
                  const E = R.get("id"), T = R.get("type") === "thread" ? Yb(
                    R.get("quote"),
                    R.get("comments").toArray().map(
                      ($) => fa(
                        $.get("content"),
                        $.get("author"),
                        $.get("id"),
                        $.get("timeStamp"),
                        $.get("deleted")
                      )
                    ),
                    E
                  ) : fa(
                    R.get("content"),
                    R.get("author"),
                    E,
                    R.get("timeStamp"),
                    R.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(T, C, M);
                  });
                });
              } else if (typeof m == "number")
                f += m;
              else if (typeof y == "number")
                for (let M = 0; M < y; M++) {
                  const R = C === void 0 || C === !1 ? this._comments[f] : C.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(R, C);
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
function Rw(e) {
  const [t, r] = he(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function qw({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Z(null);
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
  }, [n, e]), /* @__PURE__ */ S("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Ae("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ S("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ S(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ S("div", { className: "Modal__content", children: t })
  ] }) });
}
function $w({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Dn(
    /* @__PURE__ */ S(qw, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Xb() {
  const [e, t] = he(null), r = de(() => {
    t(null);
  }, []), n = Fe(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ S($w, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = de(
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
const Iw = {
  ...hy,
  paragraph: "CommentEditorTheme__paragraph"
};
function Lw(...e) {
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
  return /* @__PURE__ */ S(
    "button",
    {
      disabled: i,
      className: Lw(
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
function Dw({
  className: e
}) {
  return /* @__PURE__ */ S(ph, { className: e || "ContentEditable__root" });
}
function Uw({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ S("div", { className: t || "Placeholder__root", children: e });
}
const Vp = vl("INSERT_INLINE_COMMAND");
function Fw({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = de(() => {
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
  }, [e, t, r, s]), /* @__PURE__ */ S("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ S("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ S("i", { className: "icon add-comment" }) }) });
}
function Kw({ onEscape: e }) {
  const [t] = le();
  return j(() => t.registerCommand(
    ch,
    (r) => e(r),
    qi
  ), [t, e]), null;
}
function Qb({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ S(fh, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: Iw
  }, children: /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ S(
      ax,
      {
        contentEditable: /* @__PURE__ */ S(Dw, { className: e }),
        placeholder: /* @__PURE__ */ S(Uw, { children: s }),
        ErrorBoundary: gh
      }
    ),
    /* @__PURE__ */ S(ox, { onChange: n }),
    /* @__PURE__ */ S(mh, {}),
    t !== !1 && /* @__PURE__ */ S(nx, {}),
    /* @__PURE__ */ S(Kw, { onEscape: r }),
    /* @__PURE__ */ S(ix, {}),
    i !== void 0 && /* @__PURE__ */ S(hh, { editorRef: i })
  ] }) });
}
function Zb(e, t) {
  return de(
    (r, n) => {
      r.read(() => {
        e(cx()), t(!lx(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function zw({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Z(null), c = Fe(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), d = tk(), u = de(() => {
    e.getEditorState().read(() => {
      const m = N();
      if (A(m)) {
        l.current = m.clone();
        const y = m.anchor, x = m.focus, C = Yk(
          e,
          y.getNode(),
          y.offset,
          x.getNode(),
          x.offset
        ), M = a.current;
        if (C !== null && M !== null) {
          const { left: R, bottom: E, width: L } = C.getBoundingClientRect(), T = Xk(e, C);
          let $ = T.length === 1 ? R + L / 2 - 125 : R - 125;
          $ < 10 && ($ = 10), M.style.left = `${$}px`, M.style.top = `${E + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const W = T.length, { container: G } = c, te = c.elements, Ne = te.length;
          for (let Y = 0; Y < W; Y++) {
            const Te = T[Y];
            let qe = te[Y];
            qe === void 0 && (qe = document.createElement("span"), te[Y] = qe, G.appendChild(qe));
            const ee = `position:absolute;top:${Te.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Te.left}px;height:${Te.height}px;width:${Te.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            qe.style.cssText = ee;
          }
          for (let Y = Ne - 1; Y >= W; Y--) {
            const Te = te[Y];
            G.removeChild(Te), te.pop();
          }
        }
      }
    });
  }, [e, c]);
  Vs(() => {
    u();
    const m = c.container, y = document.body;
    return y !== null ? (y.appendChild(m), () => {
      y.removeChild(m);
    }) : () => {
    };
  }, [c.container, u]), j(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (m) => (m.preventDefault(), t(), !0), p = () => {
    if (s) {
      let m = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      m.length > 100 && (m = m.slice(0, 99) + "…"), r(
        Yb(m, [fa(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = Zb(i, o);
  return /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ S(
      Qb,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ S(vn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ S(
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
function Bw({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Z(null), c = tk(), l = Zb(i, o);
  return /* @__PURE__ */ Ae(Fn, { children: [
    /* @__PURE__ */ S(
      Qb,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ S(
      vn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(fa(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(Kk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ S("i", { className: "send" })
      }
    )
  ] });
}
function ek({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Ae(Fn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Ae("div", { className: "Modal__content", children: [
      /* @__PURE__ */ S(
        vn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ S(
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
function Wp({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = he(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Xb();
  return /* @__PURE__ */ Ae("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ S("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Ae("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ S("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Ae(Fn, { children: [
      /* @__PURE__ */ S(
        vn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ S(
              ek,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ S("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function jw({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = he(0), [l, d] = Xb(), u = Fe(
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
  }, [a]), /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Ae(
      "li",
      {
        onClick: () => {
          const m = s.get(p);
          if (m !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const x = Array.from(m)[0], C = H(x);
                pe(C) && C.selectStart();
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
          /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Ae("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ S("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ S(
              vn,
              {
                onClick: () => {
                  d("Delete Thread", (m) => /* @__PURE__ */ S(
                    ek,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: m
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ S("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((m) => /* @__PURE__ */ S(
            Wp,
            {
              comment: m,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            m.id
          )) }),
          /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ S(
            Bw,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ S(
      Wp,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      p
    );
  }) });
}
function Vw({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ S("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ S(
      jw,
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
function tk() {
  const e = yh(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function Ww({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = yh(), [a] = le(), c = Fe(() => {
    const $ = new Nw(a, s);
    return r && $.registerOnChange(r), t?.($), $;
  }, [a, s, r, t]), l = Rw(c), d = Fe(() => /* @__PURE__ */ new Map(), []), [u, f] = he(), [p, h] = he([]), [m, y] = he(!1), [x, C] = he(!1), { yjsDocMap: M } = o;
  j(() => {
    if (e) {
      const $ = e("comments", M);
      return c.registerCollaboration($);
    }
    return () => {
    };
  }, [c, e, M]);
  const R = de(() => {
    a.update(() => {
      const $ = N();
      $ !== null && ($.dirty = !0);
    }), y(!1);
  }, [a]), E = de(
    ($, W) => {
      if ($.type === "comment") {
        const G = c.deleteCommentOrThread($, W);
        if (!G)
          return;
        const { markedComment: te, index: Ne } = G;
        c.addComment(te, W, Ne);
      } else {
        c.deleteCommentOrThread($);
        const G = W !== void 0 ? W.id : $.id, te = d.get(G);
        te !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Ne of te) {
              const Y = H(Ne);
              pe(Y) && (Y.deleteID(ln, G), Y.hasNoIDsForEveryType() && zo(Y));
            }
          });
        });
      }
    },
    [c, a, d]
  ), L = de(
    ($, W, G, te) => {
      c.addComment($, G), W && (a.update(() => {
        A(te) && Jl(te, ln, $.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const $ = [];
    let W;
    for (const G of p) {
      const te = d.get(G);
      if (te !== void 0)
        for (const Ne of te) {
          const Y = a.getElementByKey(Ne);
          Y !== null && (Y.classList.add("selected"), $.push(Y), W = window.setTimeout(() => {
            C(!0);
          }, 0));
        }
    }
    return () => {
      W !== void 0 && window.clearTimeout(W);
      for (const G of $)
        G.classList.remove("selected");
    };
  }, [p, a, d]), j(() => {
    if (!a.hasNodes([Qe]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const $ = /* @__PURE__ */ new Map();
    return nt(
      Pl(
        a,
        Qe,
        (W) => Gn(W.getTypedIDs()),
        (W, G) => {
          for (const [te, Ne] of Object.entries(W.getTypedIDs()))
            Ne.forEach((Y) => {
              G.addID(te, Y);
            });
        }
      ),
      a.registerMutationListener(
        Qe,
        (W) => {
          a.getEditorState().read(() => {
            for (const [G, te] of W) {
              const Ne = H(G);
              let Y = [];
              te === "destroyed" ? Y = $.get(G) ?? [] : pe(Ne) && (Y = Ne.getTypedIDs()[ln] ?? []);
              for (const Te of Y) {
                let qe = d.get(Te);
                $.set(G, Y), te === "destroyed" ? qe !== void 0 && (qe.delete(G), qe.size === 0 && d.delete(Te)) : (qe === void 0 && (qe = /* @__PURE__ */ new Set(), d.set(Te, qe)), qe.has(G) || qe.add(G));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: W, tags: G }) => {
        W.read(() => {
          const te = N();
          let Ne = !1, Y = !1;
          if (A(te)) {
            const Te = te.anchor.getNode();
            if (_(Te)) {
              const qe = Qx(Te, ln, te.anchor.offset) ?? [];
              qe !== null && (h(qe), Ne = !0), te.isCollapsed() || (f(Te.getKey()), Y = !0);
            }
          }
          Ne || h((Te) => Te.length === 0 ? Te : []), Y || f(null), !G.has("collaboration") && A(te) && y(!1);
        });
      }),
      a.registerCommand(
        Vp,
        () => {
          const W = window.getSelection();
          return W !== null && W.removeAllRanges(), y(!0), !0;
        },
        jn
      )
    );
  }, [a, d]);
  const T = () => {
    a.dispatchCommand(Vp, void 0);
  };
  return /* @__PURE__ */ Ae(Fn, { children: [
    m && Dn(
      /* @__PURE__ */ S(
        zw,
        {
          editor: a,
          cancelAddComment: R,
          submitAddComment: L
        }
      ),
      document.body
    ),
    u != null && !m && Dn(
      /* @__PURE__ */ S(
        Fw,
        {
          anchorKey: u,
          editor: a,
          showComments: x,
          onAddComment: T
        }
      ),
      document.body
    ),
    n !== null && Dn(
      /* @__PURE__ */ S(
        vn,
        {
          className: `CommentPlugin_ShowCommentsButton ${x ? "active" : ""}`,
          onClick: () => C(!x),
          title: x ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ S("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    x && Dn(
      /* @__PURE__ */ S(
        Vw,
        {
          comments: l,
          submitAddComment: L,
          deleteCommentOrThread: E,
          activeIDs: p,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function Hw() {
  const e = Z(void 0), t = de((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function Gw(e, t) {
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
function Jw(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      Gw(r, t);
    };
  }, [t, e]);
}
const LO = ni(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = he(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: p, options: { isReadonly: h, view: m } = {} } = t, y = (h ?? !1) || Fs(m), [x, C] = Hw();
  Jw(f, x), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(E), p || console.warn(E);
    }
  }, [p]), xl(r, () => ({
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
    setTransientInput(E) {
      n.current?.setTransientInput(E);
    },
    setUsj(E) {
      n.current?.setUsj(E);
    },
    applyUpdate(E, L) {
      n.current?.applyUpdate(E, L);
    },
    replaceEmbedUpdate(E, L) {
      return n.current?.replaceEmbedUpdate(E, L);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(E) {
      n.current?.setSelection(E);
    },
    setAnnotation(E, L, T, $, W) {
      typeof $ == "function" || $ === void 0 ? n.current?.setAnnotation(E, L, T, $, W) : n.current?.setAnnotation(E, L, T, $);
    },
    removeAnnotation(E, L) {
      n.current?.removeAnnotation(E, L);
    },
    formatPara(E) {
      n.current?.formatPara(E);
    },
    getElementByKey(E) {
      return n.current?.getElementByKey(E);
    },
    removeCharacterMarker(E) {
      return n.current?.removeCharacterMarker(E) ?? !1;
    },
    replaceCharacterMarker(E, L) {
      return n.current?.replaceCharacterMarker(E, L) ?? !1;
    },
    extendCharacterMarker(E, L) {
      return n.current?.extendCharacterMarker(E, L) ?? !1;
    },
    insertMarker(E) {
      return n.current?.insertMarker(E);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(E, L) {
      return n.current?.applyMarkerMenuSelection(E, L);
    },
    splitParagraphWithMarker(E) {
      n.current?.splitParagraphWithMarker(E);
    },
    commitTypedMarker(E, L) {
      return n.current?.commitTypedMarker(E, L) ?? !1;
    },
    commitTypedCloser(E) {
      return n.current?.commitTypedCloser(E) ?? !1;
    },
    insertNote(E, L, T) {
      n.current?.insertNote(E, L, T);
    },
    selectNote(E) {
      n.current?.selectNote(E);
    },
    getNoteOps(E) {
      return n.current?.getNoteOps(E);
    },
    setComments(E) {
      x.current?.setComments(E), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const M = de(
    (E, L, T, $) => {
      if (!d) return;
      const W = x.current?.getComments();
      d(E, W, L, T, $);
    },
    [x, d]
  ), R = de(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = x.current?.getComments();
    l(E);
  }, [x, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ S(sx, { children: /* @__PURE__ */ Ae(Gb, { ref: n, onUsjChange: M, ...f, children: [
    /* @__PURE__ */ S(
      Ww,
      {
        setCommentStore: C,
        onChange: R,
        showCommentsContainerRef: y ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ S("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Ln(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function rk(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function Yw(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const Xw = /^[#\w().,%/\s-]+$/;
function qr(e) {
  return e != null;
}
const Qw = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, Zw = {
  left: "right",
  right: "left"
}, kl = ".editor-input.usfm", eO = /^[\w.#[\]="':()>+~*,\s-]+$/;
function tO(e) {
  return eO.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${kl}".`
  ), kl);
}
function rO(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${rk(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (Xw.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), qr(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), qr(t.firstLineIndent) && i.push(`text-indent: ${Ln(t.firstLineIndent * 20 * r)}vw`), qr(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${Ln(t.leftMargin * 20 * r)}vw`), qr(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${Ln(t.rightMargin * 20 * r)}vw`
  ), qr(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${Ln(t.spaceBefore * r)}pt`), qr(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${Ln(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = Qw[n ? Zw[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const Hp = { c: 150, ca: 133, cp: 150 };
function Gp(e, t) {
  return e && qr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function nO(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && qr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Gp(e.markers.c, Hp.c);
  return ["ca", "cp"].map((i) => {
    const s = Gp(
      e.markers[i],
      Hp[i]
    ), o = Ln(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function DO(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = kl } = t, s = tO(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${rk(e.defaultFont)}"`), qr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Ln(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = rO(c, l, r, n);
    d.length > 0 && o.push(`${s} .usfm_${Yw(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...nO(e, s)), o.join(`
`);
}
export {
  cm as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  IO as Editorial,
  Uo as GENERATOR_NOTE_CALLER,
  kh as HIDDEN_NOTE_CALLER,
  LO as Marginal,
  b as MarkerType,
  om as PARAGRAPH_STRUCTURE_VIEW_MODE,
  am as STANDARD_VIEW_MODE,
  Go as defaultStyleInfo,
  $O as directionToNames,
  rS as filterAndRankItems,
  DO as generateUsjCss,
  RO as getDefaultViewMode,
  Pa as getDefaultViewOptions,
  TP as getEnterMenuItems,
  xP as getMarkerMenuItems,
  qO as getViewMode,
  lm as getViewOptions,
  Fs as isBlockVerseLayout,
  an as isInsertEmbedOpOfType,
  g_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
