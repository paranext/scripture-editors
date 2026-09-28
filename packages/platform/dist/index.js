import { jsx as _, jsxs as Ae, Fragment as Fn } from "react/jsx-runtime";
import { forwardRef as ni, useState as he, useRef as Z, useCallback as de, useEffect as j, useMemo as Fe, memo as Ck, createContext as Zp, useContext as eh, Children as Sk, isValidElement as _k, cloneElement as Mk, useImperativeHandle as vl, useLayoutEffect as Ws } from "react";
import { assertSafeKey as Je, isValidBookCode as Ek, MARKER_OBJECT_PROPS as Pk, USJ_VERSION as Ur, USJ_TYPE as Fr, indexesFromUsjJsonPath as Zt, isUsjTextContentLocation as Kn, usjJsonPathFromIndexes as at, isUsjPropertyValueLocation as qo, isUsjClosingMarkerLocation as $o, isUsjClosingAttributeMarkerLocation as Io, isUsjAttributeKeyLocation as Lo, isUsjAttributeMarkerLocation as Cl, isUsjMarkerLocation as th, getUsjDocumentLocationTypeName as Ak, EMPTY_USJ as rh } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as We, $parseSerializedNode as Hi, createCommand as Sl, DecoratorNode as Hs, ElementNode as lr, isHTMLElement as ii, TextNode as Ve, $isRangeSelection as A, $isTextNode as S, createState as Gs, $getState as se, ParagraphNode as _l, $isRootNode as Tr, $createTextNode as xe, $getSelection as N, $setState as Mt, $isElementNode as O, $getCommonAncestor as wk, $isLineBreakNode as ma, NODE_STATE_KEY as zn, HISTORIC_TAG as Ml, $getEditor as Bn, $getNodeByKey as H, $getRoot as ge, $createRangeSelection as Js, $createPoint as Ts, $setSelection as pn, $getCharacterOffsets as nh, KEY_DOWN_COMMAND as Wr, COMMAND_PRIORITY_HIGH as Ke, HISTORY_MERGE_TAG as ih, CLICK_COMMAND as ya, COMMAND_PRIORITY_EDITOR as jn, isDOMNode as sh, $getNearestNodeFromDOMNode as Ys, CONTROLLED_TEXT_INSERTION_COMMAND as El, PASTE_COMMAND as Lr, COMMAND_PRIORITY_CRITICAL as Dr, CUT_COMMAND as Vn, DROP_COMMAND as Pl, DELETE_CHARACTER_COMMAND as Ok, DELETE_WORD_COMMAND as Nk, DELETE_LINE_COMMAND as Rk, $isDecoratorNode as oh, COPY_COMMAND as ba, COMMAND_PRIORITY_NORMAL as qi, SELECTION_CHANGE_COMMAND as vr, BLUR_COMMAND as Al, $addUpdateTag as Wn, SKIP_DOM_SELECTION_TAG as qk, CLEAR_HISTORY_COMMAND as $k, COMMAND_PRIORITY_LOW as $t, $getPreviousSelection as Ik, $isRootOrShadowRoot as Lk, CAN_UNDO_COMMAND as Dk, CAN_REDO_COMMAND as Uk, $isNodeSelection as ah, DRAGSTART_COMMAND as Fk, $createNodeSelection as ch, getDOMSelectionFromTarget as Kk, $onUpdate as zk, KEY_ENTER_COMMAND as lh, LineBreakNode as uh, $copyNode as Bk, FOCUS_COMMAND as jk, createEditor as dh, KEY_ESCAPE_COMMAND as fh, INSERT_PARAGRAPH_COMMAND as Do, UNDO_COMMAND as ph, REDO_COMMAND as hh, CLEAR_EDITOR_COMMAND as Vk } from "lexical";
import { addClassNamesToElement as xi, removeClassNamesFromElement as Ya, $findMatchingParent as rt, $dfsIterator as gh, $dfs as Gi, mergeRegister as nt, registerNestedElementResolver as wl, $unwrapNode as Sc, IS_APPLE as Uo } from "@lexical/utils";
import { useLexicalNodeSelection as Wk } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as yr } from "fast-equals";
import Ni from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as Hk, $getHtmlContent as Gk, $getLexicalContent as Jk } from "@lexical/clipboard";
import { TreeView as Yk } from "@lexical/react/LexicalTreeView";
import * as Xk from "react-dom";
import { createPortal as Dn } from "react-dom";
import { LexicalComposer as mh } from "@lexical/react/LexicalComposer";
import { ContentEditable as yh } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as bh } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as kh } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as xh } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Qk } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Zk, createDOMRange as ex, createRectsFromDOMRange as tx } from "@lexical/selection";
import { autoUpdate as rx, computePosition as nx, shift as ix, flip as sx } from "@floating-ui/dom";
import { $generateNodesFromDOM as ox } from "@lexical/html";
import { AutoFocusPlugin as ax } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as cx } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Th, LexicalCollaboration as lx } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as ux } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as dx } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as fx, $isRootTextContentEmpty as px } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as hx } from "@lexical/yjs";
import { Array as Sd, Map as _d, YArrayEvent as gx } from "yjs";
const Xa = (e) => We(Hi(e)), mx = {
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
function vh(e) {
  return mx[e];
}
const q = " ", Fo = "​", Gt = q, Ol = `${q}|`, kr = "p", Ko = "+", Ch = "-", Xs = "immutable-note-caller", zo = "chapter", _c = "verse", Md = "invalid", yx = "text-spacing", bx = "formatted-font", kx = "marker-", Nl = "external-usj-mutation", xx = "selection-change", Ns = "cursor-change", Rl = Sl("APP_PLACED_CARET_COMMAND"), Mc = "annotation-change", ql = "delta-change", Sh = "marker-settle", Tx = [
  Nl,
  xx,
  Ns,
  Mc,
  ql
], Hn = "zmsc-s", $i = "zmsc-e", vx = [Hn, $i], Cx = [
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
], _h = 1, $l = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Sx = $l.filter((e) => e !== "sid" && e !== "eid");
class ir extends Hs {
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
    return Eh().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Cx.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: _h
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Mh(e) {
  return vx.includes(e);
}
function Eh(e, t, r, n, i) {
  return We(new ir(e, t, r, n, void 0, i));
}
function Ee(e) {
  return e instanceof ir;
}
const Il = "f", _x = [
  // Footnote
  Il,
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
const Mx = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], Ph = 1;
class $e extends lr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Il, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (bs(t) === "crossref" ? Ch : Ko), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Px(t) ? {
        conversion: Ex,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ll().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (_x.includes(t) || (r?.includes(t) ?? !1));
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
      version: Ph
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
function Ex(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Ll(t, r, n) };
}
function Ll(e, t, r, n, i) {
  return We(new $e(e, t, r, n, i));
}
function Px(e) {
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
const Ec = {
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
}, Ed = {
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
function xr(e) {
  const t = Object.hasOwn(Ec, e) ? Ec[e] : void 0, r = Object.hasOwn(Ed, e) ? Ed[e] : void 0;
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
const Ah = "v", wh = "c", Nn = "fig", Pd = "tr", Pc = "esb", Oh = "esbe", Ax = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, wx = {
  "": "start",
  c: "center",
  r: "end"
};
function Ox(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Ad(e) {
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
const Nx = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Rx(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Fo && s + 1 < e.length && Ad(e[s + 1]) || (Ad(o) ? (r || (i = t.length, t += o), r = !0) : Nx.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function qx(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function $x(e, t) {
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
const Ix = /^(?:qt[1-5]?|ts)-[se]$/;
function ka(e) {
  return Ix.test(e) || Mh(e);
}
function Qa(e, t) {
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
function Lx(e, t, r) {
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
      const m = e.indexOf("\\", i), y = m === -1 ? e.length : m;
      a(Rx(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = $x(e, i + 1);
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
    if (l === Ah) {
      const { word: m, next: y } = Qa(e, i);
      i = y, n.push({ kind: "verse", number: m });
      continue;
    }
    if (l === wh) {
      const { word: m, next: y } = Qa(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: m });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, h = t(p)?.type;
    if (h === b.Note || h === void 0 && $e.isValidMarker(l)) {
      const { word: m, next: y } = Qa(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: m || "+" });
      continue;
    }
    if (h === b.Milestone || h === void 0 && ka(l)) {
      const m = Vx(e, c, l, i);
      if (m)
        n.push(m.token), m.ejectedText && o(m.ejectedText), i = m.next;
      else {
        const y = e.indexOf("\\", i), x = y === -1 ? e.length : y;
        o(e.slice(c, x)), i = x;
      }
      continue;
    }
    h === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : h === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Bo(p) ? (d(), Bo(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Pc || l === Oh ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
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
function Bo(e) {
  return Object.hasOwn(wd, e) ? wd[e] : void 0;
}
function Dx(e) {
  return Bo(e) !== void 0;
}
const Ux = /([-\w]+)\s*=\s*"(.*?)"/g, Fx = /[\s\u200B]*[\n\r][\s\u200B]*/g, Nh = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Qs(e) {
  return Nh[e];
}
const Kx = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function zx(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function xa(e, t, r = Nh[t]) {
  const n = e.replace(Fx, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Ux)];
  if (s.length > 0) {
    if (!zx(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Kx.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Zs(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Bx(e) {
  const t = Hr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function jx(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = xa(e.slice(n + 1, i), r, Zs(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Vx(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = xa(s.slice(o + 1), r, Zs(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = jx(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function $r(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", q);
}
function Rn(e) {
  return e.content || (e.content = []), e.content;
}
function Hr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u;
  const d = () => u ? Rn(u) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? Rn(o[o.length - 1].object) : Rn(s);
    if (o.length > 0)
      return Rn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return d();
      i = { type: "para", marker: kr, content: [] }, d().push(i);
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
    const B = Ax.exec(ee);
    if (!B || !Ox(B))
      return !1;
    y();
    const [, oe, je, Xe] = B, fe = {
      type: "table:cell",
      marker: Xe ? ee.slice(0, ee.indexOf("-")) : ee,
      align: wx[oe],
      content: []
    };
    return Xe && (fe.colspan = String(Number(Xe) + 1 - Number(je))), Rn(l).push(fe), i = fe, !0;
  }, R = (ee) => {
    u && (ee || (u.closed = "false"), u = void 0);
  };
  let E, L = "", T;
  const $ = () => {
    L && h($r(L)), L = "";
  }, W = (ee = !1) => {
    E?.type === "sidebar" ? L = "" : ee && L.endsWith(`
`) && (L = L.slice(0, -1)), E = void 0, $();
  }, G = () => {
    if (!T)
      return;
    const ee = { type: "char", marker: T.marker, content: [] };
    T.value && (ee.content = [$r(T.value)]), p().push(ee), o.push({ object: ee }), T = void 0;
  }, te = (ee, B) => {
    f = !1, C(), y(), x(!1), i = { type: "para", marker: ee, content: [] }, B && (i.content = [$r(B)]), d().push(i);
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
        Y.value && (ee.content = [$r(Y.value)]), p().push(ee), o.push({ object: ee });
      }
      Y = void 0;
    }
  }, qe = Lx(e, t?.getMarker ?? xr, n);
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
          [T.attrName]: $r(T.value.trim())
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
        oe === "" ? (te(T.marker), T = void 0) : (Object.assign(T.target, { [T.attrName]: $r(oe) }), T = void 0);
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
        const oe = Y.value.indexOf("|"), je = oe >= 0 ? xa(Y.value.slice(oe + 1), Nn) : void 0;
        if (je) {
          const Xe = {};
          for (const [Nt, rs] of Object.entries(je))
            Xe[Nt === "src" ? "file" : Nt] = rs;
          const fe = {
            type: "figure",
            marker: Nn,
            ...Xe
          }, Nr = Y.value.slice(0, oe);
          Nr && (fe.content = [$r(Nr)]), h(fe), Y = void 0;
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
        const oe = B.kind === "para" || !B.isNested ? Bo(B.marker) : void 0;
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
        oe && h($r(oe));
        break;
      }
      case "para": {
        const oe = !s && !n;
        if (oe && B.marker === Pd) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: Pd, content: [] }, Rn(c).push(l), i = l, f = !1;
          break;
        }
        if (oe && M(B.marker))
          break;
        if (C(), !n && B.marker === Pc) {
          y(), x(!1), R(!1), u = { type: "sidebar", marker: Pc, content: [] }, r.push(u), i = void 0, E = u, f = !1;
          break;
        }
        if (B.marker === Oh && u) {
          y(), x(!1), R(!0), i = void 0;
          break;
        }
        te(B.marker);
        break;
      }
      case "verse": {
        x(!1);
        const oe = { type: "verse", marker: Ah, number: B.number };
        h(oe), E = oe;
        break;
      }
      case "chapter": {
        y(), x(!1), C(), R(!1), i = void 0;
        const oe = {
          type: "chapter",
          marker: wh,
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
        const oe = B.marker.replace(/^\+/, ""), je = s ? a : 0, Xe = o.findLastIndex((fe, Nr) => Nr >= je && fe.object.marker === oe);
        Xe >= 0 ? (Wx(o[Xe].object), m(Xe + 1), o.length = Xe) : s && s.marker === oe ? x(!0) : (m(je), o.length = je, h({ type: "unmatched", marker: `${B.marker}*` }));
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
      ee === "" ? te(T.marker) : Object.assign(T.target, { [T.attrName]: $r(ee) }), T = void 0;
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
function Wx(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = xa(i.slice(s + 1), e.marker ?? "");
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
const Hx = 1;
class Er extends Ve {
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
    return new Er(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      version: Hx
    };
  }
}
function ft(e, t, r) {
  return We(new Er(e, t, void 0, r));
}
function P(e) {
  return e instanceof Er;
}
function eo(e) {
  return e?.type === Er.getType();
}
function Cn(e) {
  return e.getTextContent() === In(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Gx(e) {
  e.setTextContent(In(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function In(e, t, r = !1) {
  return t === "closing" ? He(e, r) : t === "selfClosing" ? He("") : we(e, r);
}
const un = "internal-comment", Jx = [un], Rh = Object.freeze({}), Ac = Object.freeze({}), wc = Object.freeze({}), Oc = Object.freeze({}), Nc = Object.freeze({}), Yx = 1, Ti = /* @__PURE__ */ new Map(), cs = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), Ci = /* @__PURE__ */ new Map();
class Qe extends lr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = Rh, r, n, i, s, o) {
    super(o), this.__typedIDs = To(t), this.__typedOnClicks = Za(r), this.__typedOnRemoves = ec(n), this.__typedOnMouseEnters = tc(i), this.__typedOnMouseLeaves = rc(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = To(t.__typedIDs), n = Za(t.__typedOnClicks), i = ec(t.__typedOnRemoves), s = tc(t.__typedOnMouseEnters), o = rc(t.__typedOnMouseLeaves);
    return new Qe(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Jx.includes(t);
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
      version: Yx
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = qn(n.theme.typedMark, s), d = qn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && xi(r, u) : l === 0 && Ya(r, u), c === 1 ? l === 2 && xi(r, d) : l === 1 && Ya(r, d));
      const f = new Set(o), p = new Set(a);
      for (const h of o)
        p.has(h) || Ya(r, qn("annotationId", h));
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
    const r = this.getWritable(), n = To(r.__typedIDs);
    r.__typedIDs = To(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && jo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = Za(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return pe(t) ? Ti.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ec(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return pe(t) ? cs.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = tc(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return pe(t) ? vi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = rc(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && jo(s);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ac) {
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
    const i = sn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = sn(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Ac) {
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
    const i = sn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = sn(this.__typedOnRemoves, t);
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
    const i = sn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = sn(this.__typedOnMouseEnters, t);
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Nc) {
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
    const i = sn(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = sn(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Nc) {
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
    const i = Xx(t, r);
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
    for (; pe(t) && Nd(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; pe(r) && Nd(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Qx(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Zx(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = eT(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = tT(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function To(e = Rh) {
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
function tc(e) {
  if (!e || e === Oc)
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
function rc(e) {
  if (!e || e === Nc)
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
function sn(e, t) {
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
function Xx(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Nd(e, t) {
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
function Qx(e, t) {
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
function Zx(e, t) {
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
function eT(e, t) {
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
function tT(e, t) {
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
function qn(e, t) {
  return `${e}-${t}`;
}
function Rd(e) {
  return `external-${e}`;
}
function Gn(e, t, r, n, i) {
  return We(new Qe(e, t, r, n, i));
}
function pe(e) {
  return e instanceof Qe;
}
function to(e) {
  return e?.type === Qe.getType();
}
function jo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function rT(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (pe(n))
      return n.getTypedIDs()[t];
    if (S(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (pe(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Jn = Gs("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), hn = Gs("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ce = Gs("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Pr = "marker-trailing-space", qh = 1, nT = "attribute-run";
function nc(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Gr extends lr {
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
    return $h(t.runKind).updateFromJSON(t);
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
    t.classList.add(nT);
    const r = nc(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = nc(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = nc(this.__runKind);
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
function $h(e) {
  return We(new Gr(e));
}
function Le(e) {
  return e instanceof Gr;
}
const Ih = [
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
], Lh = [
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
], iT = [
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
  ...Ih,
  ...Lh
], Dh = 1, sT = ["type", "marker", "content"];
class Se extends lr {
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
    return t !== void 0 && (iT.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Ih.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Lh.includes(t);
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
      span: (t) => aT(t) ? {
        conversion: oT,
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
    return qd(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), qd(r, this.__marker, n)), !1;
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
      version: Dh
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
function qd(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function oT(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Kr(t) };
}
function Kr(e, t) {
  return We(new Se(e, t));
}
function aT(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Se.isValidMarker(t) && e.classList.contains(Se.getType());
}
function D(e) {
  return e instanceof Se;
}
function cT(e) {
  return e?.type === Se.getType();
}
const Vo = "v", Uh = 1, lT = [
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
    super(r ?? t, a), this.__marker = Vo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new mt(r, n, i, s, o, a, c);
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
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(_c, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Uh
    };
  }
}
function Fh(e, t, r, n, i, s) {
  return We(new mt(e, t, r, n, i, s));
}
function Pe(e) {
  return e instanceof mt;
}
function Kh(e) {
  return e?.type === mt.getType();
}
const uT = /* @__PURE__ */ new Set(["closed"]);
function br(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !uT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function zh(e, t) {
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
  const t = Object.keys(e).filter((n) => !Sx.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function jh(e, t, r, n) {
  return zh(
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
function vs(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function dT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : vs(e) === void 0 && Vh(e) === void 0;
}
function Vh(e) {
  return e.getChildren().find((t) => S(t) && se(t, ce) === "attribute");
}
function Rs(e, t) {
  return ro(e.getNextSibling(), t);
}
const fT = /^[ \u00A0]+$/;
function Dl(e) {
  if (Cn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = we(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && fT.test(r.slice(t.length));
}
function ro(e, t) {
  let r, n, i, s;
  return Le(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Dl(e) && (r = e, e = e.getNextSibling()), S(e) && se(e, ce) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Cn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function pT(e) {
  let t = e;
  for (; pe(t); )
    t = t.getChildren()[0];
  return t;
}
function Cr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = pT(t[r]);
  if (S(n) && n.getTextContent() === Lt(e.getCaller()))
    return n;
}
function Ul(e) {
  const t = Cr(e);
  return t ? ro(t.getNextSibling(), "cat") : {};
}
function si(e) {
  const t = e.getFirstChild();
  if (!(!S(t) || P(t)) && se(t, ce) !== "attribute")
    return t;
}
function Wh(e) {
  const t = si(e);
  return t ? ro(t.getNextSibling(), "ca") : {};
}
function Hh(e) {
  const t = si(e);
  if (!t)
    return;
  const r = ro(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Gh(e) {
  const t = Hh(e);
  return t ? ro(t.getNextSibling(), "cp") : {};
}
function Jh(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Pe(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || S(n) && se(n, ce) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Le(n)))
        return;
    }
}
function Ta(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Le(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Dl(s) && (t = s, s = s.getNextSibling()), S(s) && se(s, ce) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && Cn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const Wo = "c", Yh = 1, hT = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ut extends lr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Wo, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Ut(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Xh().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(zo, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Yh
    };
  }
}
function Xh(e, t, r, n, i) {
  return We(new Ut(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof Ut;
}
function gT(e) {
  return e?.type === Ut.getType();
}
const Qh = 1;
class gn extends _l {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new gn(t.__key);
  }
  static importJSON(t) {
    return Ht().updateFromJSON(t);
  }
  getMarker() {
    return kr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Qh
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ht();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ht() {
  return We(new gn());
}
function Ze(e) {
  return e instanceof gn;
}
function va(e) {
  return e?.type === gn.getType();
}
function Zh(e) {
  return Ze(e) && Tr(e.getParent());
}
function Fl(e) {
  return pe(e) || Zh(e);
}
function Jr(e) {
  let t = e.getParent();
  for (; t && Fl(t); )
    t = t.getParent();
  return t;
}
function Ca(e) {
  return D(Jr(e));
}
function Ho(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Ca(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function mT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Ho(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function no(e) {
  return S(e) && e.getType() === Ve.getType() && se(e, ce) !== "attribute";
}
function eg(e) {
  if (!no(e) || !e.getTextContent().startsWith(q))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && pe(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!D(n))
    return 0;
  for (; pe(r); )
    r = r.getLastChild();
  return !P(r) || r.getMarkerSyntax() !== "opening" || Ho(r, n) === void 0 ? 0 : 1;
}
function Kl(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Ho(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? Ho(r, t) === !0 ? "spacer" : void 0 : no(r) ? r.getTextContent().startsWith(q) ? void 0 : "prefix" : "spacer";
}
function yT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Kl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function tg(e, t) {
  const r = N();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function rg(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Kl(t, e);
    if (r !== void 0 && !tg(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        S(n) && n.setTextContent(q + n.getTextContent());
      } else
        t.insertAfter(xe(q));
  });
}
function ng(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Kl(t, e) !== void 0 && tg(t, e)) : !1;
}
const ig = 1, bT = "marker", zl = Gs("isGutterMarker", {
  parse: (e) => e === !0
});
class Yr extends Hs {
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
    return new Yr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => vT(t) ? {
        conversion: kT,
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
      version: ig
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function kT(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: zr(t, r) };
}
function zr(e, t) {
  return We(new Yr(e, t));
}
function xT(e) {
  return Mt(zr(bT, e), zl, !0);
}
function TT(e) {
  return kt(e) && se(e, zl);
}
function vT(e) {
  return e?.tagName === "span";
}
function kt(e) {
  return e instanceof Yr;
}
function sg(e) {
  return e?.type === Yr.getType();
}
const CT = ["type", "marker", "content"], Rc = "unknown", og = 1, ST = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class oi extends lr {
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
      [Rc]: (t) => MT(t) ? {
        conversion: _T,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Bl().updateFromJSON(t);
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
    return ST.has(this.getTag());
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
    const t = document.createElement(Rc);
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
      version: og
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
function _T(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Bl(t, r) };
}
function Bl(e, t, r) {
  return We(new oi(e, t, r));
}
function MT(e) {
  return e?.tagName.toLowerCase() === Rc;
}
function Oe(e) {
  return e instanceof oi;
}
const ag = "file", cg = "src", ET = "colspan", PT = "category", AT = "alt", wT = "closed", OT = "false";
function NT(e) {
  return e[wT] !== OT;
}
function RT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === ag ? cg : t,
    r
  ]));
}
function qT(e, t) {
  return e === "figure" && t === cg ? ag : t;
}
function $T(e, t) {
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
function Sa(e, t, r) {
  const n = r ?? {}, i = NT(n);
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
        opening: `\\${$T(t, n[ET])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: br(RT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [PT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + br(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [AT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: br(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: br(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const Pt = { wantsRun: !1, valueText: void 0 }, Xr = {};
function ic(e, t) {
  if (t === "va")
    return e;
  const r = Rs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function jl(e) {
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
function _a(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!A(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function IT(e) {
  return Le(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : S(e) && se(e, ce) === "attribute";
}
function LT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!S(e) || se(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function sc(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Pe(t))
      return t;
    if (!IT(t))
      return;
  }
}
function $d(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Pe(t),
    ownerOf: (t) => {
      if (Le(t))
        return t.getRunKind() === e ? sc(t) : void 0;
      const r = t.getParent();
      return Le(r) ? r.getRunKind() === e ? sc(r) : void 0 : LT(t) === e ? sc(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Pe(t))
        return Pt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Pt : { wantsRun: !0, valueText: q + r };
    },
    scanPieces: (t) => Pe(t) ? Rs(ic(t, e), e) : Xr,
    graceSite: (t, r) => Pe(t) ? !r.opener && !r.closer ? jl(ic(t, e)) : _a(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Pe(t) ? ic(t, e) : void 0
    }
  };
}
const DT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => Pt,
  scanPieces: () => Xr,
  graceSite: (e) => D(e) && ng(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, UT = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!S(e) || se(e, ce) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || vs(e) === void 0)
      return Pt;
    const t = br(e.getUnknownAttributes() ?? {}, Qs(e.getMarker()));
    return t === "" ? Pt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: Vh(e) } : Xr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = vs(e);
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
    insertRunBefore: (e) => D(e) ? vs(e) : void 0
  }
};
function lg(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!S(e) || se(e, ce) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function FT(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = Cr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!lg(n))
        return;
    }
}
const KT = {
  kind: "cat",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (Le(e))
      return e.getRunKind() === "cat" && U(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Le(t) ? t.getRunKind() === "cat" && U(t.getParent()) ? t.getParent() ?? void 0 : void 0 : lg(e) ? FT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || e.getIsCollapsed() !== !1)
      return Pt;
    const t = e.getCategory();
    return t === void 0 ? Pt : { wantsRun: !0, valueText: q + t };
  },
  scanPieces: (e) => U(e) ? Ul(e) : Xr,
  graceSite: (e, t) => {
    if (!U(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Cr(e);
      return r !== void 0 && jl(r);
    }
    return _a(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => U(e) ? Cr(e) : void 0
  }
};
function zT(e) {
  return Le(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : S(e) && se(e, ce) === "attribute";
}
function BT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!S(e) || se(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function jT(e) {
  const t = e.getParent();
  if (!Ce(t))
    return;
  const r = si(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!zT(n))
        return;
    }
}
function Id(e) {
  const t = (r) => Ce(r) ? e === "ca" ? si(r) : Hh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ce(r),
    ownerOf: (r) => {
      if (Le(r))
        return r.getRunKind() === e && Ce(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Le(n) ? n.getRunKind() === e && Ce(n.getParent()) ? n.getParent() ?? void 0 : void 0 : BT(r) === e ? jT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ce(r))
        return Pt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Pt : { wantsRun: !0, valueText: q + n };
    },
    scanPieces: (r) => Ce(r) ? e === "ca" ? Wh(r) : Gh(r) : Xr,
    graceSite: (r, n) => {
      if (!Ce(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && jl(i);
      }
      return _a(n);
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
function ug(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return S(e) && se(e, ce) === "attribute";
}
function VT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ee(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!ug(t))
      return;
  }
}
const WT = {
  kind: "milestone",
  ownerPredicate: (e) => Ee(e),
  ownerOf: (e) => {
    const t = Le(e) ? e.getRunKind() === "milestone" ? e : void 0 : Le(e.getParent()) ? e.getParent() : ug(e) ? e : void 0;
    if (!t || Le(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Le(t) ? Ee(r) ? r : void 0 : VT(t);
  },
  expectedPieces: (e) => {
    if (!Ee(e))
      return Pt;
    const t = jh(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = br(t, Zs(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : q + r };
  },
  scanPieces: (e) => {
    if (!Ee(e))
      return Xr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Ta(e);
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
    return _a(t);
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
}, HT = Sa("optbreak", void 0, void 0).opening, GT = {
  kind: "optbreak",
  ownerPredicate: (e) => Oe(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Oe(t) || t.getTag() !== "optbreak"))
      return S(e) || kt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: HT }),
  scanPieces: (e) => Oe(e) ? { value: e.getFirstChild() ?? void 0 } : Xr,
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
  ownerPredicate: (e) => Oe(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => Pt,
  scanPieces: () => Xr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, YT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => Pt,
  scanPieces: () => Xr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, qs = [
  DT,
  UT,
  $d("va"),
  $d("vp"),
  KT,
  Id("ca"),
  Id("cp"),
  WT,
  GT,
  JT,
  YT
], XT = new Map(qs.map((e) => [e.kind, e]));
function Br(e) {
  const t = XT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function mn(e) {
  for (const t of qs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function dg(e) {
  return mn(e) !== void 0;
}
const $s = "id", fg = 1, QT = [
  "type",
  "marker",
  "code",
  "content"
];
class Jt extends lr {
  __marker = $s;
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
    return pg(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Ek(t);
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
      version: fg
    };
  }
}
function pg(e, t) {
  return We(new Jt(e, t));
}
function ct(e) {
  return e instanceof Jt;
}
function hg(e) {
  return e?.type === Jt.getType();
}
const gg = 1, ZT = "c", mg = "span";
class Ar extends Hs {
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
    return new Ar(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => yg(t) ? {
        conversion: ev,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Vl().updateFromJSON(t);
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
    const t = document.createElement(mg);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(zo, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(zo, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: gg
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
function ev(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Vl(t) };
}
function Vl(e, t, r, n, i, s) {
  return We(new Ar(e, t, r, n, i, s));
}
function yg(e) {
  return e ? e.classList.contains(zo) && e.tagName.toLowerCase() === mg : !1;
}
function io(e) {
  return e instanceof Ar;
}
function tv(e) {
  return e?.type === Ar.getType();
}
const rv = [
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
  kr,
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
], bg = 1, nv = ["type", "marker", "content"];
class it extends _l {
  __marker;
  __unknownAttributes;
  constructor(t = kr, r, n) {
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
    return t !== void 0 && (rv.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: iv,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return Is().updateFromJSON(t);
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
      version: bg
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Is(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function iv(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Is(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Is(e, t) {
  return We(new it(e, t));
}
function ie(e) {
  return e instanceof it;
}
function Wl(e) {
  return e?.type === it.getType();
}
const kg = /[ \u00A0]{2,}/g;
function sv(e) {
  return [...e.matchAll(kg)].map((t) => [
    t.index + 1,
    t.index + t[0].length
  ]);
}
function ov(e) {
  return e.replace(kg, (t) => t[0]);
}
const av = "​", Li = av;
var Ld;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Ld || (Ld = {}));
var Dd;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Dd || (Dd = {}));
function cv() {
  return xe(Li);
}
function lv(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(Li, ""));
}
function so(e) {
  return e.length > 0 && e.includes(Li) && e.replaceAll(Li, "") === "";
}
function Hl(e) {
  return S(e) && so(e.getTextContent());
}
function xg(e) {
  return gT(e) || tv(e);
}
function ze(e) {
  return Ce(e) || io(e);
}
function Tg(e, t) {
  return e.find((r) => ze(r) && r.getNumber() === t.toString());
}
function uv(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && ze(r));
}
function Ud(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function vg(e) {
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
function dv(e) {
  return ct(e) || Ce(e) || D(e) || io(e) || Ze(e) || Ee(e) || ie(e) || U(e) || Pe(e) || Oe(e);
}
function Cg(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function fv(e) {
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
function pv(e) {
  return Wl(e) || va(e);
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
function hv(e, t) {
  const r = O(e) ? e : e.getParent(), n = O(t) ? t : t.getParent(), i = r && n ? wk(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function gv(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function Xn(e) {
  return e?.type === Ve.getType();
}
function mv(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function yv(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Sg(e, t, r) {
  const n = we(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function bv(e) {
  const t = e[zn];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function _g(e) {
  return eo(e) || sg(e) && e.textType === "marker" || Xn(e) && bv(e) === "attribute" ? "" : Xn(e) && e.text !== q ? e.text : cT(e) ? e.children.map((t) => _g(t)).join("") : "";
}
function kv(e) {
  return e.map((r) => _g(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Gl(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = Mg(r);
    n !== Gt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Mg(e) {
  return P(e) || wr(e) || S(e) && se(e, ce) === "attribute" ? "" : S(e) ? e.getTextContent() : O(e) ? e.getChildren().map((t) => Mg(t)).join("") : "";
}
function wr(e) {
  return kt(e) && e.getTextType() === "marker";
}
function Xt(e) {
  return P(e) || wr(e);
}
function Fd(e, t) {
  xv(e, t), e.setMarker(t);
}
function xv(e, t) {
  const r = e.getMarker(), n = we(r), i = we(r, !0), s = He(r), o = He(r, !0), a = Se.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Xt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (wr(c)) {
        const f = l.startsWith(we("", !0));
        c.setTextContent(u ? we(t, f) : He(t, f));
      }
    }
  });
}
function Be(e, t = Pk) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ie(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Eg(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Jl(e) {
  if (!A(e))
    return Kd(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !O(t) || e.anchor.type === "text" && !S(t)))
    return t ?? void 0;
  try {
    return Kd(e) ?? t ?? void 0;
  } catch (n) {
    if (Eg(n))
      return t ?? void 0;
    throw n;
  }
}
function Tv(e, t) {
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
function Yl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Pg(e) {
  return !!e && e.includes("-");
}
function Ag(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Kd(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function yn(e) {
  if (!e)
    return !1;
  if (ma(e) || P(e) || wr(e) || Le(e) || e.getType() === Xs || kt(e) && e.getTextType() === "attribute")
    return !0;
  const t = Jr(e);
  if (Ce(t) || S(e) && U(t) && Cr(t)?.is(e))
    return !0;
  if (S(e)) {
    const r = se(e, ce);
    if (r === Pr || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === q || so(n))
      return !0;
  }
  return !1;
}
function Ma() {
  const e = xe(q);
  return Mt(e, ce, Pr), e.setMode("token"), e;
}
function vv(e) {
  const t = e.getTextContent();
  t.startsWith(q) || e.setTextContent(q + t);
}
function Sn(e) {
  return S(e) && se(e, ce) === Pr;
}
function wg(e) {
  const t = e.getFirstChild();
  if (!Xt(t) || t === null || Sn(t.getNextSibling()))
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
function Og(e) {
  if (Ce(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", nodes: r }), r = void 0);
  }, i = (s) => {
    if (!yn(s)) {
      if (Fl(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (S(s) && s.getType() === Ve.getType()) {
        r ??= [], r.push(s);
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function Cv(e, t) {
  const r = [];
  let n = 0;
  for (const i of e) {
    const s = eg(i), o = t ? sv(i.getTextContent().slice(s)).map(([c, l]) => [c + s, l + s]) : [], a = i.getTextContentSize() - s - o.reduce((c, [l, u]) => c + u - l, 0);
    r.push({ node: i, start: n, lead: s, collapsed: o, length: a }), n += a;
  }
  return { type: "text", segments: r, length: n };
}
function Ng(e) {
  return e.lead > 0 ? [[0, e.lead], ...e.collapsed] : e.collapsed;
}
function Sv(e, t) {
  let r = t;
  for (const [n, i] of Ng(e)) {
    if (t <= n)
      break;
    r -= Math.min(t, i) - n;
  }
  return e.start + r;
}
function zd(e, t) {
  let r = t;
  for (const [n, i] of Ng(e)) {
    if (n > r)
      break;
    r += i - n;
  }
  return r;
}
function xt(e, t) {
  return Og(e).map((r) => r.type === "element" ? r : Cv(r.nodes, t));
}
function _v(e, t) {
  return Og(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.nodes.some((n) => n.is(t)));
}
function Ls(e, t, r) {
  const n = Jr(e);
  if (!n)
    return;
  const i = xt(n, r);
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.type !== "text")
      continue;
    const a = o.segments.find((c) => c.node.is(e));
    if (a)
      return { parent: n, index: s, offset: Sv(a, t) };
  }
}
function Mv(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments)
    if (t >= n.start && t < n.start + n.length)
      return [n.node, zd(n, t - n.start)];
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, zd(r, t - r.start)];
}
function Ri(e, t, r) {
  const n = e.getChildAtIndex(t);
  if (Zh(e)) {
    const s = e.getParentOrThrow();
    return n ? yn(n) ? Ri(e, t + 1, r) : qc(s, n, r) : Ri(s, e.getIndexWithinParent() + 1, r);
  }
  const i = xt(e, r);
  return n ? yn(n) || Fl(n) && !Rg(i, n) ? Ri(e, t + 1, r) : qc(e, n, r) : { type: "index", index: i.length };
}
function Ev(e, t) {
  const r = Jr(e);
  if (r && Rg(xt(r, t), e))
    return { parent: r, point: qc(r, e, t) };
}
function Rg(e, t) {
  return e.some((r) => r.type === "element" ? r.node.is(t) || Di(r.node, t.getKey()) : r.segments.some((n) => n.node.is(t) || Di(n.node, t.getKey())));
}
function qc(e, t, r) {
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
function Pv(e) {
  return S(e) && se(e, ce) === "attribute";
}
function Av(e) {
  if (!S(e))
    return !1;
  let t = e.getParent();
  for (; pe(t); )
    t = t.getParent();
  return U(t) ? Cr(t)?.is(e) ?? !1 : Ce(t) ? si(t)?.is(e) ?? !1 : !1;
}
function wv(e) {
  return Pe(e) || Ee(e) || Le(e) || Le(e.getParent()) || Av(e);
}
function Xl(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let h, m;
  for (let y = 0; y < u; y++) {
    const x = a[y];
    if (O(m) && m.isParentOf(x))
      continue;
    if (P(x) || Sn(x) || Pv(x) || wv(x)) {
      h = x.getParent(), m = void 0;
      continue;
    }
    const C = y === 0, M = y === u - 1;
    let R = null;
    if (S(x)) {
      const E = x.getTextContentSize(), L = eg(x), T = Math.max(C ? f : 0, L), $ = M ? p : E;
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
  t === un && O(m) && (d ? m.selectStart() : m.selectEnd());
}
const Go = "unmatched", qg = 2;
function Cs(e) {
  return `\\${e}`;
}
class Qr extends Ve {
  __marker;
  constructor(t = "", r) {
    super(Cs(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Qr(r, n);
  }
  static importDOM() {
    return {
      [Go]: (t) => Nv(t) ? {
        conversion: Ov,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ql().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Cs(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Cs(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Md), r.title = Bd(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Bd(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Go);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Md), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: qg
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function $g(e) {
  return e.getTextContent() === Cs(e.getMarker());
}
function Bd(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function Ov(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Ql(t) };
}
function Ql(e) {
  return We(new Qr(e));
}
function Nv(e) {
  return e?.tagName.toLowerCase() === Go;
}
function _n(e) {
  return e instanceof Qr;
}
const Ig = "table", $c = "immutable-table", Lg = 1, Rv = ["type", "marker", "content"];
class ai extends lr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return $c;
  }
  static clone(t) {
    return new ai(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return qv().updateFromJSON(t);
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
      type: $c,
      ...t !== void 0 && { unknownAttributes: t },
      version: Lg
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function qv(e) {
  return We(new ai(e));
}
function Dg(e) {
  return e instanceof ai;
}
function $v(e) {
  return e?.type === $c;
}
const Ug = "table:row", jd = "immutable-table-row", Fg = 1, Ic = "tr", Iv = ["type", "marker", "content"];
class ci extends lr {
  __marker;
  __unknownAttributes;
  constructor(t = Ic, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return jd;
  }
  static clone(t) {
    return new ci(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return Lv().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ic).setUnknownAttributes(t.unknownAttributes);
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
      version: Fg
    };
  }
}
function Lv(e, t) {
  return We(new ci(e, t));
}
function Kg(e) {
  return e instanceof ci;
}
const zg = "table:cell", Vd = "immutable-table-cell", Bg = 1, Lc = "tc1", Dv = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function Uv(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class li extends lr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Lc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Vd;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new li(r, n, i, s, o);
  }
  static importJSON(t) {
    return Fv().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Lc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = Uv(this.__align);
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
      version: Bg
    };
  }
}
function Fv(e, t, r, n) {
  return We(new li(e, t, r, n));
}
function Kv(e) {
  return e instanceof li;
}
const Dc = /* @__PURE__ */ new WeakMap();
function Wd(e, t) {
  t ? Dc.set(e, t) : Dc.delete(e);
}
function Zl(e) {
  return Dc.get(e);
}
function Ea(e, t) {
  const r = e.getChildAtIndex(t);
  return S(r) ? r : void 0;
}
function or(e, t) {
  const r = Ea(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function Ds(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function zv(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function Bv(e) {
  return Ds(e) ? void 0 : { closed: "false" };
}
function jv(e, t, r, n) {
  const i = t.getMarker(), s = Ca(t), o = zv(t);
  if (n) {
    e.append(ft(i, "opening", s));
    const [a] = r;
    no(a) && !a.getTextContent().startsWith(q) && a.setTextContent(q + a.getTextContent());
  }
  e.append(...r), o && e.append(ft(i, "closing", s));
}
function Qn(e) {
  return rt(e, D) ?? void 0;
}
function eu(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Uc(e) {
  const t = jg(e);
  return e.getChildren().every((r) => P(r) || t && se(r, ce) === "attribute" || S(r) && r.getTextContent().replaceAll(q, "") === "");
}
function jg(e) {
  return Ds(e);
}
function Vv(e, t) {
  const r = e.getUnknownAttributes(), n = r ? br(r, Qs(e.getMarker())) : "";
  n !== "" && t.insertAfter(xe(n)), e.remove();
}
function Wv(e, t) {
  if (Ds(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ft(e.getMarker(), "closing", Ca(e)));
}
function Hv(e, t) {
  return D(e) && !Ds(e) && !Ds(t);
}
function Gv(e, t, r) {
  Uc(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && no(n) && !n.getTextContent().startsWith(q) && n.setTextContent(q + n.getTextContent()), e.append(...t);
}
function Jv(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = jg(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = P(l) && l.getMarkerSyntax() === "closing", f = s && se(l, ce) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = Hv(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      Gv(e, o, n);
    else {
      const l = Kr(t.getMarker(), Bv(t));
      jv(l, t, o, n), e.insertAfter(l), Uc(l) ? l.remove() : c = l;
    }
  i && !a && Wv(t, n), Uc(t) && Vv(t, c);
}
function Ui(e, t) {
  let r = e.getParent();
  for (; D(r); )
    Jv(e, r, t), r = e.getParent();
}
function tu(e) {
  if (S(e) && !P(e)) {
    const t = e.getTextContent().startsWith(q) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (O(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      tu(t);
      return;
    }
    e.selectEnd();
  }
}
const Un = /* @__PURE__ */ new WeakMap();
function Yv(e, t, r) {
  const n = { owners: t, rederive: r };
  return Un.set(e, n), () => {
    Un.get(e) === n && Un.delete(e);
  };
}
function Vg(e, t, r) {
  const n = Un.get(e);
  !n?.rederive || !r.has(Ml) || n.derivedFor === t || (n.rederive(t), n.derivedFor = t);
}
function Hd(e) {
  return Un.get(e)?.owners;
}
function Xv(e) {
  return Un.get(Bn())?.owners.has(e.getKey()) ?? !1;
}
function Qv(e) {
  Un.get(Bn())?.owners.add(e.getKey());
}
function Zv(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Fc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Gd(e) {
  return /^\s/.test(e);
}
function ru(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Gd(t) || !Gd(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Pa(e, t, r) {
  return r.wantsRun ? ru(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : Zv(t);
}
function eC(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return ru(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Wg(e, t) {
  return !Fc(e.scanPieces(t));
}
function oo(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Pa(e, n, r))
    return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Di(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function tC(e, t, r, n) {
  return !r.wantsRun || Fc(n) || Zl(Bn()) === "remote" ? !1 : Bn().getEditorState().read(() => {
    const i = H(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Fc(e.scanPieces(i));
  });
}
function rC(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Jd(e) {
  const t = xe(e);
  return Mt(t, ce, "attribute"), t;
}
function nC(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = $h(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function iC(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    S(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Jd(n.valueText));
    return;
  }
  const l = nC(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = ft(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : S(d) ? ru(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Jd(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(ft(a === "selfClosing" ? "" : o(t), a));
}
function Us(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Pa(e, i, n) && !Xv(t)) {
    if (tC(e, t, n, i)) {
      Qv(t);
      return;
    }
    if (!oo(e, t)) {
      if (!n.wantsRun) {
        rC(i);
        return;
      }
      iC(e, t, i, n);
    }
  }
}
function sC(e, t, r) {
  Us(e, t), t.isAttached() && oo(e, t) && r.add(t.getKey());
}
function Hg(e) {
  if (!S(e))
    return !1;
  if (P(e) || Pe(e) || _n(e))
    return !0;
  const t = se(e, ce);
  return t === "attribute" || t === Pr;
}
function nu(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Cn(e) && D(e.getParent())) : !1;
}
function oC() {
  const e = N();
  return A(e) ? nu(e.focus.getNode(), e.focus.offset) : !1;
}
function Gg(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return S(t) && Hg(t) ? t : void 0;
}
function aC(e) {
  const t = Gg(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function cC(e) {
  const t = Gg(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Yd(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Xd(e, t) {
  e.set(t.key, t.offset, t.type);
}
function lC(e, t) {
  let r = cC(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!S(n))
      return;
    if (!Hg(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Qd(e, t) {
  const r = lC(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Jg(e) {
  if (e.isCollapsed()) {
    const a = aC(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Yd(r), Yd(n)], s = Qd(r, "next"), o = Qd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Xd(r, i[0]), Xd(n, i[1]), !1) : !0;
}
const Yg = Gs("verseBlockSource", {
  parse: (e) => typeof e == "number" ? e : void 0
}), Jo = "verse-block", Xg = 1, uC = "verse-block";
class Ji extends lr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Jo;
  }
  static clone(t) {
    return new Ji(t.__number, t.__key);
  }
  static importJSON(t) {
    return dC().updateFromJSON(t);
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
    return Ag(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(uC), Zd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Zd(r, this.__number), !1;
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
      type: Jo,
      number: this.getNumber(),
      version: Xg
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Zd(e, t) {
  const { start: r, end: n } = Ag(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), ef(e, "data-verse-start", i ? r : NaN), ef(e, "data-verse-end", i ? n : NaN);
}
function ef(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function dC(e) {
  return We(new Ji(e));
}
function Zn(e) {
  return e instanceof Ji;
}
function fC(e) {
  return e?.type === Jo;
}
const pC = [
  Jt,
  Ar,
  Ut,
  mt,
  Se,
  $e,
  ir,
  Er,
  oi,
  Yr,
  Qr,
  it,
  gn,
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
  Gr,
  {
    replace: _l,
    with: () => Ht(),
    withKlass: gn
  }
], Yo = {
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
}, hC = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function gC(e) {
  if (!e)
    return xr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: xr(r)?.category ?? k.Uncategorized,
      type: hC[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: xr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function tf(e, t, r) {
  const n = {
    type: Fr,
    version: Ur,
    content: e
  }, i = t.serializeEditorState(n, r);
  return va(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Qg = "v", Zg = 1, mC = "verse-selected";
class wt extends Hs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Qg, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => kC(t) ? {
        conversion: bC,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return iu().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(_c, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && ii(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(_c, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Wt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Fo + this.getNumber() + Fo
    );
    return _(yC, { nodeKey: this.getKey(), text: t });
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
      version: Zg
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Eg(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function yC({ nodeKey: e, text: t }) {
  const [r] = Wk(e);
  return _("span", { className: r ? mC : void 0, children: t });
}
function bC(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: iu(t) };
}
function iu(e, t, r, n, i, s) {
  return We(new wt(e, t, r, n, i, s));
}
function kC(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Qg;
}
function ui(e) {
  return e instanceof wt;
}
function xC(e) {
  return e?.type === wt.getType();
}
function ye(e) {
  return Pe(e) || ui(e);
}
function em(e) {
  return Kh(e) || xC(e);
}
function TC(e) {
  return vC(e).find((t) => ie(t));
}
function vC(e) {
  return e.some(Zn) ? e.flatMap((t) => Zn(t) ? t.getChildren() : t) : e;
}
function Aa(e) {
  return O(e) ? Zn(e) ? e.getChildren().flatMap(Aa) : e.getChildren() : [];
}
function CC(e, t) {
  return Aa(e).find((i) => ye(i) && Yl(t, i.getNumber()));
}
function SC(e, t) {
  return t === 0 ? TC(e) : e.map((r) => CC(r, t)).filter((r) => r)[0];
}
function Xo(e) {
  return Aa(e).find((r) => ye(r));
}
function tm(e, t) {
  if (!O(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ye(i))
      return i;
  }
}
function _C(e) {
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
    const n = Xo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Kc(e) {
  return Aa(e).findLast((t) => ye(t));
}
function MC(e) {
  if (!Pe(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function EC(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && O(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function PC(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return EC(t, e, r);
  if (S(e)) {
    const n = MC(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function rf(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function AC(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!A(t))
    return rf(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return PC(e, t) ? { verseNum: n } : rf(e);
}
function wC(e) {
  return dv(e) || ui(e);
}
function su(e) {
  if (S(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(q) && e.setTextContent(`${t} `);
  }
}
function rm(e) {
  if (S(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function nm(e, t) {
  return e.getEditorState().read(() => !H(t));
}
function OC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ou(t, e);
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
      let s = nf(i);
      for (; s && !ze(s); ) {
        const o = Xo(s);
        if (o) {
          n = o;
          break;
        }
        s = nf(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Xo(s);
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
function NC(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ou(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && O(i) && (n = tm(i, r.getIndexWithinParent())), !n && i) {
      let o = sf(i);
      for (; o && !ze(o); ) {
        const a = Kc(o);
        if (a) {
          n = a;
          break;
        }
        o = sf(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !ze(s); ) {
      const o = Kc(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function nf(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function sf(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function ou(e, t) {
  if (O(e) && A(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ye(n))
      return n;
    const i = tm(e, t.anchor.offset);
    if (i)
      return i;
    const s = Xo(e);
    if (s)
      return s;
  }
  return au(e);
}
function au(e) {
  if (!e || ze(e))
    return;
  if (ye(e))
    return e;
  let t = Ud(e);
  for (; t; ) {
    if (ze(t))
      return;
    if (ye(t))
      return t;
    const r = Kc(t);
    if (r)
      return r;
    t = Ud(t);
  }
}
const RC = ["style"], qC = ["style", "code"], Qo = ["style", "cid"], $C = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], IC = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], LC = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], DC = ["style", "caller", "category", "contents"], UC = ["tag", "marker", "contents"], FC = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], Fs = `
`;
function KC(e, t) {
  const r = H(e);
  if (!Dt(r))
    return;
  const n = im(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function im(e, t = "delta-doc") {
  if (!e)
    return;
  const r = gh();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (Fi(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      Fi(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (jr(l) || Dt(l))
        return n;
      Yt(l) && (a = l);
    }
    if (Yt(l) && (i.includes(l) || i.push(l)), sm(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += cu(l, t);
  }
  if (a)
    return n;
}
function of(e, t, r = "delta-doc") {
  if (e.length < 2 || !jC(e[0]) || !BC(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => zC(n, r)?.getKey());
}
function zC(e, t = "delta-doc") {
  const r = gh();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (Fi(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      Fi(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Yt(a) && (i.includes(a) || i.push(a)), sm(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = cu(a, t);
    if (jr(a) && l > 0 && e >= n && e < n + l || Dt(a) && n === e)
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
function jr(e) {
  return S(e) && !Dt(e);
}
function Dt(e) {
  return ze(e) || ye(e) || Ee(e) || U(e) || Oe(e) || _n(e);
}
function cn(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function BC(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && FC.includes(t);
}
function jC(e) {
  return e.retain != null && typeof e.retain == "number";
}
function sm(e, t) {
  return U(e) || Oe(e) ? !0 : t === "apply" && O(e) && Dt(e);
}
function om(e) {
  const t = e.getParent();
  return Xt(e) && ie(t) && t.getFirstChild() === e;
}
function zc(e) {
  const t = e.getParent();
  return t !== null && rt(t, Le) !== null;
}
function VC(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === Gt && t.getChildrenSize() === 1;
}
function WC(e) {
  const t = e.getParent();
  if (!U(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === Lt(t.getCaller());
}
function HC(e) {
  return !dg(e) && cu(e, "delta-doc") === e.getTextContentSize();
}
function cu(e, t) {
  if (Dt(e))
    return 1;
  if (S(e)) {
    const r = e.getTextContent();
    return t === "delta-doc" && // A bare cursor host (EmptyVerseCaretGuardPlugin) is a transient, collab-invisible node:
    // its insertion is never emitted, so it contributes nothing to DOC-DELTA positions or the
    // local doc would drift one position ahead of every peer while a host rests. In `"apply"`
    // coordinates it MUST count, per the rule in the doc comment above: none of
    // `$applyUpdate`'s traversals skip a placeholder (each classifies with `$isOTTextNode`
    // and adds raw `getTextContentSize()`), so excluding it here left a replace-embed retain
    // one short whenever a host rested before the target — a footnote-popover save then
    // deleted the unit BEFORE the note instead of the note itself.
    (Hl(e) || om(e) || se(e, ce) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    se(e, ce) === "attribute" || zc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Ol) || VC(e) || WC(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Bc(e, t) {
  const r = { insert: e.__text }, n = se(e, hn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = am(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function af(e) {
  const t = new Ni();
  return e.isEmpty() || e.read(() => {
    const r = ge();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && Ze(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = GC();
    for (const s of i)
      t.push(s);
  }), t;
}
function lu(e, t) {
  const r = [], n = Gi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...cf(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...cf(c, n.length, n, i, s, o, a));
  return r;
}
function GC() {
  return lu();
}
function cf(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return JC(e, a, n), YC(e, a, i, s, o), XC(e, t, r, i, o, s, a), ze(e) && a.push(tS(e)), ye(e) && a.push(nS(e)), Ee(e) && a.push(iS(e)), _n(e) && a.push(sS(e)), ZC(e, a, s), QC(e, a, s), lS(c, s), a;
}
function JC(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ct(n) ? t.push(eS(n)) : ie(n) ? t.push(rS(n)) : Ze(n) && t.push({ insert: Fs });
  }
  Yt(e) && (r.includes(e) || r.push(e));
}
function YC(e, t, r, n, i) {
  if (!S(e) || Pe(e) || _n(e))
    return;
  const s = e.getParent();
  if (U(s) && s.getFirstChild() === e)
    return;
  const o = sr(e) !== void 0;
  if (P(e) && (o || om(e) || zc(e) || dg(e)) || se(e, ce) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (so(a))
    return;
  const c = e.getPreviousSibling();
  if (U(s) && P(c) && c === s.getFirstChild() && a === Lt(s.getCaller()))
    return;
  const l = D(s) ? s : void 0, u = l?.getFirstChild();
  o && l && P(u) && c === u && a.startsWith(q) && (a = a.slice(1));
  const d = a.startsWith(Ol) || se(e, ce) === "attribute" || zc(e), f = !!l && a === Gt && l.getChildrenSize() === 1, p = wa(e, n), h = p ? r.filter((x) => p.children.includes(x)) : r, m = Bc(e, h);
  if (m.insert = a, p) {
    if (!a || a === q || d)
      return;
    p.contentsOps?.push(m);
  } else
    f || d || t.push(m);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const x of r)
      i.add(x);
}
function XC(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (Fi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = aS(c), u = wa(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function QC(e, t, r) {
  if (!U(e))
    return;
  const n = oS(e), i = wa(e, r), s = {
    node: e,
    children: Gi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function ZC(e, t, r) {
  if (!Oe(e))
    return;
  const n = cS(e), i = wa(e, r), s = {
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
function eS(e) {
  const t = { style: $s, code: e.__code };
  return Mn(t, e), { insert: Fs, attributes: { book: t } };
}
function tS(e) {
  const t = { style: Wo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Mn(t, e), { insert: { chapter: t } };
}
function rS(e) {
  const t = { style: e.__marker };
  return Mn(t, e), { insert: Fs, attributes: { para: t } };
}
function nS(e) {
  const t = { style: Vo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), Mn(t, e), { insert: { verse: t } };
}
function iS(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), Mn(t, e), { insert: { milestone: t } };
}
function sS(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function oS(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), Mn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = se(e, hn);
  return n && (r.attributes = { segment: n }), r;
}
function aS(e) {
  const t = { insert: "" }, r = am([e]);
  return r && (t.attributes = { char: r }), t;
}
function cS(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), Mn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function wa(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function lS(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    Fi(t[r].node, e) && t.splice(r, 1);
}
function am(e) {
  if (e.length === 0)
    return;
  const t = e.map(uS);
  return t.length === 1 ? t[0] : t;
}
function uS(e) {
  const t = { style: e.__marker }, r = se(e, Jn);
  return r && (t.cid = r), Mn(t, e), t;
}
const cm = 1;
class nr extends Hs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Ko, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return Xs;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new nr(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => fS(t) ? {
        conversion: dS,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return uu().updateFromJSON(t);
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => pS(t, n), (l) => hS(t, n, s, l), () => gS(t, n), () => mS(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Ko && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Ch && i ? (
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
      version: cm
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function dS(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: uu(t, r) };
}
function uu(e, t, r) {
  return We(new nr(e, t, r));
}
function fS(e) {
  return e ? e.classList.contains(nr.getType()) : !1;
}
function Qt(e) {
  return e instanceof nr;
}
function pS(e, t) {
  return e.getEditorState().read(() => {
    const r = H(t);
    if (!U(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function hS(e, t, r, n) {
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
function gS(e, t) {
  return e.getEditorState().read(() => {
    const r = H(t);
    if (!U(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return lu(r);
  });
}
function mS(e, t) {
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
const yS = [
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
], bS = ["†"], du = "formatted", lm = "unformatted", um = "paragraph-structure", dm = "standard", fm = "block-verse", kS = {
  [du]: "Formatted",
  [lm]: "Unformatted",
  [um]: "Paragraph Structure",
  [dm]: "Standard",
  [fm]: "Block Verse"
};
function Yi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let fu, pu;
function xS(e) {
  const t = pm(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  fu = e, pu = t;
}
xS(du);
const LO = () => fu, Oa = () => pu;
function pm(e) {
  let t;
  switch (e ?? fu) {
    case du:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case lm:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case um:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case dm:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case fm:
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
function DO(e) {
  if (!e)
    return;
  const t = lf(e);
  return Object.keys(kS).find((r) => yr(lf(pm(r)), t));
}
const TS = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function lf(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...TS, ...t };
}
function Ot(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function vS(e) {
  if (e)
    return Ks(e) ? wt : e.markerMode === "editable" ? mt : wt;
}
function Ks(e) {
  return e?.verseLayout === "block";
}
function CS(e) {
  const t = [], r = e ?? pu;
  return r && (t.push(`${kx}${r.markerMode}`), r.hasSpacing && t.push(yx), r.isFormattedFont && t.push(bx)), t;
}
const SS = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Zo(e) {
  return SS.exec(e)?.[1] ?? e;
}
function Ss(e, t) {
  const r = e.jsonPath.slice(Zo(e.jsonPath).length);
  return { ...e, jsonPath: `${at(t)}${r}` };
}
function hm(e) {
  const t = [];
  let r = 0;
  for (const c of ge().getChildren())
    if (!yn(c))
      if (Zn(c)) {
        const l = r;
        c.getChildren().filter((u) => !yn(u)).forEach((u, d) => t.push({ node: u, blockPrefix: [l, d], blockBase: 0 })), r += 1;
      } else Ze(c) ? (t.push({ node: c, blockPrefix: [], blockBase: r }), r += xt(c, e).length) : (t.push({ node: c, blockPrefix: [r], blockBase: 0 }), r += 1);
  const n = [];
  let i = 0, s = 0, o = 0, a;
  for (const c of t) {
    const l = O(c.node) ? xt(c.node, e).length : 0, u = se(c.node, Yg), d = Ze(c.node), f = u === void 0 || u !== a;
    f && (n.length > 0 && (n[n.length - 1].isSourceEnd = !0), s = i, o = 0, d || (i += 1)), n.push({
      ...c,
      count: l,
      usjPrefix: d ? [] : [s],
      usjBase: d ? s + o : o,
      isSourceStart: f,
      isSourceEnd: !1
    }), d && (i += l), o += l, a = u;
  }
  return n.length > 0 && (n[n.length - 1].isSourceEnd = !0), n;
}
function gm(e, t) {
  return e.length >= t.length && t.every((r, n) => e[n] === r);
}
function mm(e, t, r, n = !0) {
  const i = e.jsonPath.slice(Zo(e.jsonPath).length);
  let s = Zt(Zo(e.jsonPath));
  s.length === 1 && t.some((o) => o.blockPrefix.length === 2 && o.blockPrefix[0] === s[0]) && (s = [s[0], 0]);
  for (const o of t) {
    if (!gm(s, o.blockPrefix))
      continue;
    const a = s.slice(o.blockPrefix.length);
    if (a.length === 0) {
      if (o.blockPrefix.length === 0)
        continue;
      return n && i === "" && O(o.node) && (!o.isSourceStart || Ze(o.node)) ? mm(r(o.node), t, r, !1) : Ss(e, o.usjPrefix);
    }
    if (!(a[0] < o.blockBase || a[0] >= o.blockBase + o.count))
      return Ss(e, [
        ...o.usjPrefix,
        a[0] - o.blockBase + o.usjBase,
        ...a.slice(1)
      ]);
  }
}
function _S(e, t, r) {
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
function uf(e, t, r) {
  const n = Zt(Zo(e.jsonPath));
  if (n.length === 0)
    return Kn(e) ? _S(e.offset, t, r) : e;
  for (const i of t) {
    if (!gm(n, i.usjPrefix))
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
          ...Ss(e, i.blockPrefix),
          offset: Math.min(o, i.count) + i.blockBase
        };
      }
      if (!i.isSourceStart)
        continue;
      return Ss(e, i.blockPrefix);
    }
    if (!(s[0] < i.usjBase || s[0] >= i.usjBase + i.count))
      return Ss(e, [
        ...i.blockPrefix,
        s[0] - i.usjBase + i.blockBase,
        ...s.slice(1)
      ]);
  }
}
function hu(e, t) {
  let { start: r } = e, n = e.end ?? r;
  if (Tm()) {
    const l = Ot(t), u = hm(l), d = uf(r, u, l), f = n === r ? d : uf(n, u, l);
    if (!d || !f)
      return;
    r = d, n = f;
  }
  let [i, s] = ar(r, t), [o, a] = ar(n, t);
  if (!i || !o || s === void 0 || a === void 0)
    return;
  [i, s] = hf(i, s), [o, a] = hf(o, a), n !== r && $o(n) && n.closingMarkerOffset === 0 && ([o, a] = US(o, a, Ot(t)));
  const c = Js();
  return c.anchor = Ts(i.getKey(), s, gf(i)), c.focus = Ts(o.getKey(), a, gf(o)), c;
}
function gu(e) {
  const t = N();
  if (!t || !A(t))
    return;
  const r = Tm() ? hm(Ot(e)) : void 0, n = (u, d) => {
    const f = yt(u, d, e);
    return r ? mm(f, r, (p) => yt(p, 0, e)) : f;
  }, i = t.isBackward() ? t.focus.getNode() : t.anchor.getNode(), s = t.isBackward() ? t.focus.offset : t.anchor.offset, o = n(i, s);
  if (!o)
    return;
  if (t.isCollapsed())
    return { start: o };
  const a = t.isBackward() ? t.anchor.getNode() : t.focus.getNode(), c = t.isBackward() ? t.anchor.offset : t.focus.offset, l = n(a, c);
  if (l)
    return { start: o, end: l };
}
const mu = {
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
}, MS = new Map(Object.values(mu).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), df = {
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
}, ES = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(df).filter((e) => df[e])
), PS = /([^\s="|]+)="([^"]*)"/g, AS = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function ym(e, t) {
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
function yu(e) {
  const t = mn(e);
  if (!t)
    return;
  const r = Br(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function jc(e, t, r, n = (i) => i) {
  const i = [];
  for (const s of e.slice(t).matchAll(PS)) {
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
function wS(e, t) {
  const r = AS.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = MS.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function bm(e) {
  if (wr(e)) {
    const t = VS(e), r = e.getTextContent();
    if (Ee(t) && (r === "\\*" || r.startsWith(we(t.getMarker()))))
      return t;
  }
  return Jr(e) ?? e;
}
function OS(e) {
  const t = e.getTextContentSize(), r = yu(e);
  if (r && r.role !== "value") {
    const i = mu[r.kind];
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
    owner: bm(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      Ii(e.getNested() ? 2 : 1)
    ) : _s()
  };
}
function NS(e) {
  const t = e.getTextContent(), r = t.length, n = yu(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = bm(e);
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
    const s = Sa(i.getTag(), i.getMarker(), i.getUnknownAttributes());
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
function RS(e) {
  const t = yu(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = mu[n];
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
        ...jc(i, 1, D(r) ? Qs(r.getMarker()) : void 0)
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
        ...jc(i, 2, Zs(r.getMarker()))
      ]
    };
  }
}
function qS(e) {
  const t = e.getParent();
  if (!Oe(t))
    return;
  const r = e.getTextContent(), n = r.length, i = wS(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        // The bytes spell an attribute the way USFM names it, which is not always USJ's name for it.
        ...jc(r, 1, void 0, (s) => qT(t.getTag(), s))
      ]
    };
}
function ff(e, t) {
  const r = we(e);
  if (t.startsWith(r))
    return [
      ...Ii(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function bn(e) {
  if (P(e))
    return OS(e);
  if (wr(e))
    return NS(e);
  if (kt(e) && e.getTextType() === "attribute")
    return qS(e);
  if (e.getType() === Xs) {
    const n = e.getParent();
    return U(n) ? {
      owner: n,
      length: n.getCaller().length,
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Pe(e)) {
    const n = ff(e.getMarker(), e.getTextContent());
    return n ? { owner: e, length: e.getTextContentSize(), spans: n } : void 0;
  }
  if (!S(e))
    return;
  if (se(e, ce) === "attribute")
    return RS(e);
  const t = e.getParent();
  if (Ce(t) && si(t)?.is(e)) {
    const n = ff(t.getMarker(), e.getTextContent());
    return n ? { owner: t, length: e.getTextContentSize(), spans: n } : void 0;
  }
  const r = Jr(e);
  if (U(r) && Cr(r)?.is(e))
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
function bu(e) {
  return wr(e) || kt(e) && e.getTextType() === "attribute" || e.getType() === Xs;
}
function $S(e) {
  const t = [];
  if (Pe(e) && t.push(e), O(e)) {
    const r = Ce(e) ? si(e) : void 0, n = U(e) ? Cr(e) : void 0;
    for (const i of e.getChildren())
      n && (n.is(i) || i.isParentOf(n)) ? t.push(n) : (P(i) || wr(i) || kt(i) && i.getTextType() === "attribute" || i.getType() === Xs || r?.is(i)) && t.push(i);
  }
  for (const r of ES) {
    const n = Br(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function IS(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function Vc(e, t, r) {
  const n = bn(e);
  if (!n || n.spans.length === 0)
    return;
  const i = Math.max(0, Math.min(t, n.length));
  let s = n.spans[0];
  for (const c of n.spans) {
    if (c.start > i)
      break;
    s = c;
  }
  const o = s.base + (i - s.start), a = at(Sr(n.owner));
  switch (s.bytes.kind) {
    case "marker":
      return { jsonPath: a };
    case "closingMarker":
      return { jsonPath: a, closingMarkerOffset: o };
    case "property":
      return {
        jsonPath: ym(a, s.bytes.property),
        propertyOffset: o
      };
    case "attributeKey":
      return { jsonPath: a, keyName: s.bytes.keyName, keyOffset: o };
    case "attributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: a, keyName: s.bytes.keyName, keyClosingMarkerOffset: o };
    case "precedingText":
      return LS(e, r);
  }
}
function pf(e, t) {
  return S(e) && !bn(e) && !Ls(e, 0, t);
}
function LS(e, t) {
  let r = e;
  for (let o = r.getParent(); !r.getPreviousSibling() && pe(o); )
    r = o, o = r.getParent();
  let n = r.getPreviousSibling();
  for (; n && pf(n, t); )
    n = n.getPreviousSibling();
  if (!n)
    return;
  const i = O(n) ? n.getLastDescendant() : n;
  if (i && (S(i) || bu(i)))
    return pf(i, t) ? void 0 : dn(i, i.getTextContentSize(), t);
  const s = n.getParent();
  if (s)
    return dn(s, n.getIndexWithinParent() + 1, t);
}
function Si(e, t, r) {
  for (const n of $S(e)) {
    const i = bn(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!IS(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function ar(e, t) {
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
        return s !== n.length - 1 ? [void 0, void 0] : Mv(o, e.offset) ?? yf(e, r) ?? [void 0, void 0];
      i = o.node;
    }
    return i && O(i) ? ar(ku(i, n, e.offset, r), t) : [void 0, void 0];
  }
  if (qo(e) || $o(e) || Io(e)) {
    const n = yf(e, r);
    if (n)
      return n;
  }
  if (Lo(e) || Cl(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const { keyName: i } = e, s = Lo(e) ? Si(n, { kind: "attributeKey", keyName: i }, e.keyOffset) : Si(n, { kind: "attributeMarker", keyName: i }, 0);
    return s || mf(n);
  }
  if (Io(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = Si(n, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return i || mf(n);
  }
  if (th(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = Si(n, { kind: "marker" }, 0);
    if (i)
      return i;
    const s = O(n) ? n.getFirstChild() : null;
    return s && S(s) ? [s, 0] : Po(n, !1);
  }
  if ($o(e)) {
    const n = ls(e.jsonPath, r);
    if (!n)
      return [void 0, void 0];
    const i = Si(n, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (i)
      return i;
    const s = xu(n);
    if (s !== void 0 && e.closingMarkerOffset >= s)
      return Po(n, !0);
    if (!O(n))
      return [void 0, void 0];
    const o = n.getLastChild();
    return o && S(o) ? [o, o.getTextContent().length] : [n, n.getChildrenSize()];
  }
  if (qo(e)) {
    const n = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), i = n?.[1] ?? n?.[2] ?? n?.[3], s = ls(e.jsonPath, r);
    if (!s || i === void 0)
      return [void 0, void 0];
    const o = Si(s, { kind: "property", property: i }, e.propertyOffset);
    if (o)
      return o;
    if (O(s)) {
      const c = s.getFirstChild();
      return c && S(c) ? [c, 0] : [s, 0];
    }
    const a = jS(s, i);
    return Po(s, a !== void 0 && e.propertyOffset >= a.length);
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Ak(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function hf(e, t) {
  if (!bu(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !O(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = e.getTextContentSize(), s = t >= i && t > 0 || t === i - 1 && DS.test(e.getTextContent());
  return [r, s ? n + 1 : n];
}
const DS = /[ \u00A0]$/;
function US(e, t, r) {
  let n;
  if (O(e))
    n = t > 0 ? e.getChildAtIndex(t - 1) : null;
  else if (t === 0)
    n = e.getPreviousSibling();
  else
    return [e, t];
  let i = !1;
  for (; S(n) && !bn(n) && !Ls(n, 0, r); )
    n = n.getPreviousSibling(), i = !0;
  if (!i)
    return [e, t];
  const s = O(n) ? n.getLastDescendant() : n;
  return S(s) ? [s, s.getTextContentSize()] : [e, t];
}
function gf(e) {
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
  return dn(e, t, Ot(r));
}
function dn(e, t, r) {
  const n = Vc(e, t, r);
  if (n)
    return n;
  if (pe(e)) {
    const i = e.getChildrenSize(), s = e.getChildAtIndex(Math.min(t, i - 1));
    if (S(s)) {
      const a = t >= i ? s.getTextContentSize() : 0;
      return dn(s, a, r);
    }
    if (s && t > 0 && t < i) {
      const a = km(e, t, r);
      if (a)
        return a;
    }
    const o = e.getParent();
    if (o) {
      const a = e.getIndexWithinParent(), c = t > 0 ? a + 1 : a;
      return dn(o, c, r);
    }
  }
  if (O(e)) {
    const i = e.getChildAtIndex(t);
    if (i && bn(i)) {
      const a = Vc(i, 0, r);
      if (a)
        return a;
    }
    if (i && bu(i))
      return {
        jsonPath: at(Sr(e))
      };
    const s = t > 0 ? e.getChildAtIndex(t - 1) : null;
    if (!i && s && FS(s, e))
      return Eo(e, !0, r);
    if (ze(e) || yn(e))
      return Eo(e, t > 0, r);
    const o = Ze(e) && Tr(e.getParent()) ? e.getParentOrThrow() : e;
    return xm(o, Ri(e, t, r), r);
  }
  if (S(e)) {
    const i = Ls(e, t, r);
    if (i)
      return {
        jsonPath: at([
          ...Sr(i.parent),
          i.index
        ]),
        offset: i.offset
      };
    const s = t > 0, o = s ? e.getNextSibling() : e.getPreviousSibling();
    if (S(o) && (bn(o) || Ls(o, 0, r)))
      return dn(o, s ? 0 : o.getTextContentSize(), r);
  }
  return Eo(e, t > 0, r);
}
function km(e, t, r) {
  for (let n = t; n < e.getChildrenSize(); n++) {
    const i = e.getChildAtIndex(n);
    if (!i)
      return;
    if (bn(i))
      return Vc(i, 0, r);
    if (S(i) && Ls(i, 0, r))
      return dn(i, 0, r);
    if (S(i) || yn(i))
      continue;
    const s = Ev(i, r);
    if (s)
      return xm(s.parent, s.point, r);
  }
}
function xm(e, t, r) {
  const n = Sr(e);
  return t.type === "text" ? {
    jsonPath: at([...n, t.index]),
    offset: t.offset
  } : ku(e, n, t.index, r);
}
function FS(e, t) {
  const r = bn(e);
  return !!r && r.owner.is(t) && r.spans[0]?.bytes.kind === "closingMarker";
}
function Eo(e, t, r) {
  const n = e.getParent();
  if (!n)
    return { jsonPath: at(Sr(e)) };
  const i = e.getIndexWithinParent() + (t ? 1 : 0);
  if (pe(n)) {
    if (i > 0 && i < n.getChildrenSize()) {
      const s = km(n, i, r);
      if (s)
        return s;
    }
    return Eo(n, i > 0, r);
  }
  return dn(n, i, r);
}
function ku(e, t, r, n) {
  const i = xt(e, n), s = i[r];
  if (!s)
    return KS(e, t, i, n);
  const o = at([...t, r]);
  return s.type === "text" ? { jsonPath: o, offset: 0 } : { jsonPath: o };
}
function KS(e, t, r, n) {
  if (Tr(e))
    return ea(e, t, 1, n);
  if (xu(e) !== void 0) {
    const o = r.length - 1, a = r[o];
    return a?.type === "text" ? {
      jsonPath: at([...t, o]),
      offset: a.length
    } : {
      jsonPath: at(t),
      closingMarkerOffset: 0
    };
  }
  const i = Jr(e), s = t[t.length - 1];
  return zS(e) || !i || s === void 0 ? ea(e, t, 0, n) : ku(i, t.slice(0, -1), s + 1, n);
}
function ea(e, t, r, n) {
  const i = at(t), s = xu(e);
  if (s !== void 0)
    return {
      jsonPath: i,
      closingMarkerOffset: s + r
    };
  if (O(e)) {
    const l = xt(e, n), u = l.length - 1, d = l[u], f = [...t, u];
    if (d?.type === "text")
      return { jsonPath: at(f), offset: d.length + r };
    if (d)
      return ea(d.node, f, r, n);
  }
  const o = (l, u) => ({
    jsonPath: ym(i, l),
    propertyOffset: u.length + r
  }), a = (l, u) => ({
    jsonPath: i,
    keyName: l,
    keyClosingMarkerOffset: He(u).length + r
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
  const c = Oe(e) ? e.getMarker() : BS(e);
  return c ? o("marker", c) : { jsonPath: i };
}
function xu(e) {
  if (D(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : He(e.getMarker(), Ca(e)).length;
  if (U(e))
    return e.getUnknownAttributes()?.closed === "false" ? void 0 : He(e.getMarker()).length;
  if (Ee(e))
    return He("").length;
  if (Oe(e)) {
    const { closing: t } = Sa(e.getTag(), e.getMarker(), e.getUnknownAttributes());
    return t === "" ? void 0 : t.length;
  }
}
function zS(e) {
  const t = Jr(e);
  return ie(e) || Ze(e) || ct(e) || Kg(e) || Oe(e) && e.getTag() === "table:row" || Tr(t) || Zn(t);
}
function BS(e) {
  if (ie(e) || D(e) || Ee(e) || Kg(e) || Kv(e))
    return e.getMarker();
}
function mf(e) {
  if (O(e)) {
    const r = e.getLastChild();
    if (r && S(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && O(t) ? [t, 0] : Po(e, !0);
}
function Po(e, t) {
  const r = e.getParent();
  return r ? [r, e.getIndexWithinParent() + (t ? 1 : 0)] : [void 0, void 0];
}
function jS(e, t) {
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
function yf(e, t) {
  const r = ge(), n = ea(r, [], 1, t);
  return bf(n) === bf(e) ? [r, r.getChildrenSize()] : void 0;
}
function bf(e) {
  return JSON.stringify(Object.entries(e).sort(([t], [r]) => t.localeCompare(r)));
}
function VS(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!yn(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Sr(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Jr(r);
    if (!n)
      break;
    const i = _v(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Tm() {
  for (let e = ge().getFirstChild(); e; e = e.getNextSibling())
    if (Zn(e))
      return !0;
  return !1;
}
function vm(e, t, r, n, i, s, o) {
  if (!$e.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? hu(r, i) : N();
  if (!A(a))
    return;
  const c = GS(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (bs(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Cm(e, l, c, i, s, void 0, void 0);
  return HS(u, a, i), u;
}
function Tu(e) {
  return e !== "expanded";
}
function WS(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!S(r) || !D(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function HS(e, t, r) {
  const n = Tu(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || gv(t), Jg(t), pn(t);
  const i = WS(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function _i(e, t, r) {
  const n = Kr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ft(e)) : r?.markerMode === "visible" && n.append(zr("marker", we(e)));
  const s = t === "" ? Gt : i ? q + t : t;
  return n.append(xe(s)), n;
}
function GS(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(_i("fr", f, n)), !e.isCollapsed()) {
        const p = Tf(e);
        p.length > 0 && o.push(_i("fq", p, n));
      }
      o.push(_i("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(_i("xo", f, n)), !e.isCollapsed()) {
        const p = Tf(e);
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
function Cm(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Tu(n?.noteMode), l = Ll(e, t, c);
  s && Mt(l, hn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = ft(e), u && d.setMode("token"), a || (f = ft(e, "closing"))) : n?.markerMode === "visible" && (d = zr("marker", we(e) + " "), a || (f = zr("marker", He(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = xe(Lt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const h = () => Ma(), m = r.flatMap(JS(h));
    if (t === "")
      l.append(...m);
    else {
      const y = Gl(r);
      let x = () => {
      };
      i?.noteCallerOnClick && (x = i.noteCallerOnClick), p = uu(l.__caller, y, x), l.append(p, h(), ...m);
    }
  }
  return f && l.append(f), l;
}
function kf(e) {
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
function xf(e, t) {
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
function JS(e) {
  return (t) => kt(t) ? [t] : [t, e()];
}
function YS(e) {
  const t = e.getParent();
  return t !== null && rt(t, U) !== null;
}
function Tf(e) {
  if (!A(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = nh(e);
  let a = "";
  for (const c of t)
    if (!(U(c) || Qt(c) || YS(c)) && !P(c) && !_n(c) && se(c, ce) !== "attribute") {
      if (ye(c)) {
        a += `\\+fv ${c.getNumber()}\\+fv*`;
        continue;
      }
      if (S(c)) {
        let l = c.getTextContent();
        c === r && c === n ? l = s < o ? l.slice(s, o) : l.slice(o, s) : c === r ? l = i ? l.slice(s) : l.slice(o) : c === n && (l = i ? l.slice(0, o) : l.slice(0, s)), a += l;
      }
    }
  return a.replace(/[ \t\r\n\f\v]+/g, " ").trim();
}
const vu = [
  nr,
  wt,
  ...pC
], XS = [
  Ji,
  ...vu
], QS = ni((e, t) => {
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
function ZS() {
  const [e, t] = he(void 0), [r, n] = he(), i = Z(null), s = de((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = rx(l, c, () => {
      nx(l, c, {
        placement: "bottom-start",
        middleware: [ix(), sx()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = de(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function e_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = ZS();
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
const t_ = Ck(QS);
function Sm({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = e_({ isOpen: e, floatingBoxRef: r }), s = Fe(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Dn(
    _(t_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const _m = Zp(void 0);
function Cu() {
  const e = eh(_m);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function r_(e, t) {
  const [r, n] = he(0), [i, s] = he(-1), o = Fe(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = de(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = de(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = de(() => {
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
function n_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = r_(t, r);
  return _(_m.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const Mm = ni(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Cu(), u = de((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = de((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function i_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = Cu(), o = Fe(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Fe(() => {
    const c = o(s);
    return t ? Sk.map(c, (l, u) => _k(l) && l.type === Mm && l.props.index === void 0 ? Mk(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return j(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), _("div", { ref: n, role: "menu", ...r, children: a });
}
const s_ = (e, t, r) => Ao(e, r).toLowerCase().includes(t.toLowerCase()), vf = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ao = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function o_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? vf(r[0]) : "") : (u = n || (r.length > 0 ? vf(r[0]) : ""), d = (h, m) => s_(h, m, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((h) => {
    try {
      return d(h, t);
    } catch (m) {
      return console.warn("Error filtering item:", h, m), !1;
    }
  }).sort((h, m) => {
    const y = (M) => (p.has(M) || p.set(M, Ao(M, f).toLowerCase()), p.get(M) ?? ""), x = a ? Ao(h, f) : y(h), C = a ? Ao(m, f) : y(m);
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
const oc = {
  Root: n_,
  Options: i_,
  Option: Mm
};
function a_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Fe(() => o_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function c_() {
  const { moveUp: e, moveDown: t, select: r } = Cu();
  return Fe(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const l_ = () => {
  const e = c_(), [t] = le();
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
    return t.registerCommand(Wr, r, Ke);
  }, [t, e]);
};
function u_() {
  return l_(), null;
}
const d_ = ["Shift", "Control", "Alt", "Meta"];
function Em(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), u = s !== void 0, [d, f] = he(""), p = u ? s ?? "" : d, h = a_({ query: p, items: t, filterBy: "name" }), m = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, h);
  }, [a, p, h]), j(() => l.registerCommand(Wr, (y) => {
    if (u || c?.includes(y.key) || d_.includes(y.key))
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
  }, Ke), [l, u, p, o, n, c]), Ae(oc.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: h, onSelectOption: (y) => m(y), children: [!u && _("input", { value: p, type: "text", disabled: !0 }), _(u_, {}), _(oc.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((C, M) => Ae(oc.Option, { index: M, children: [_("span", { className: "label", children: C.label ?? C.name }), _("span", { className: "description", children: C.description })] }, C.name)) })] });
}
function f_({ trigger: e, items: t }) {
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
  }), [r]), t && _(Sm, { isOpen: n, children: ({ placement: o }) => _(Em, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function p_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Fe(() => {
    if (!t || !e)
      return;
    const i = xr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = xr(o), { action: c } = r(o, a);
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
function Ms(e, t) {
  return `${e}:${t}`;
}
function h_(e, t) {
  j(() => {
    if (!e.hasNodes([Qe]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return nt(wl(e, Qe, (n) => Gn(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], h = a[l]?.[d], m = c[l]?.[d];
          i.addID(l, d, f, p, h, m);
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
              for (const u of l) {
                let d = t.get(Ms(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Ms(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Ms(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const g_ = ni(function({ logger: t, viewOptions: r }, n) {
  const [i] = le(), s = Fe(() => /* @__PURE__ */ new Map(), []);
  h_(i, s);
  const o = (a, c, l) => {
    const u = Array.from(l ?? s.get(Ms(a, c)) ?? []);
    if (u.length !== 0)
      for (const d of u) {
        const f = H(d);
        pe(f) && (f.deleteID(a, c), f.hasNoIDsForEveryType() && jo(f));
      }
  };
  return vl(n, () => ({
    setAnnotation(a, c, l, u, d, f, p) {
      if (Qe.isReservedType(c))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${c}'. Use the appropriate plugin instead.`);
      i.update(() => {
        const h = hu(a, r);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        o(c, l), Xl(h, c, l, u, d, f, p);
      }, { tag: Mc });
    },
    removeAnnotation(a, c) {
      if (Qe.isReservedType(a))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      const l = s.get(Ms(a, c));
      l === void 0 || l.size === 0 || i.update(() => {
        o(a, c, l);
      }, { tag: Mc });
    }
  })), null;
});
function m_({ dirtyElements: e, dirtyLeaves: t, prevEditorState: r, tags: n }, i) {
  return e.size === 0 && t.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
  // stack — its bytes really did change, so it must reach `onChange` like any edit.
  // Without this exemption the cached USJ and the emitted delta both keep showing the
  // pre-settle bytes, and the host saves a document the editor is no longer displaying.
  n.has(ih) && !n.has(Sh) || i.ignoreTags.some((s) => n.has(s)) || r.isEmpty();
}
function y_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ni();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = H(i), o = s !== null && sr(s) !== void 0;
    if (t.size === 1 && S(s) && !o && HC(s)) {
      const a = im(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = H(i);
          return new Ni([S(d) ? Bc(d) : { insert: "" }]);
        }), l = new Ni([Bc(s)]), u = new Ni(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = af(r), c = af(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
function b_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += k_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), T_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += v_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), S_(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function k_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), x_(t, e.retain, e.attributes, r, n)), e.retain);
}
function x_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = ge();
  function l(u) {
    if (s <= 0)
      return !0;
    if (jr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, h = Math.min(s, p);
        if (h > 0) {
          let m = u;
          const y = f > 0, x = h < d - f;
          if (y && x) {
            const [, C] = u.splitText(f);
            [m] = C.splitText(h);
          } else y ? [, m] = u.splitText(f) : x && ([m] = u.splitText(h));
          if (kn(r)) {
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
                const L = Cf(m, r, n, i);
                if (L && L.length > 0) {
                  let T = C;
                  for (const $ of L)
                    T.insertAfter($), T = $;
                }
              }
            } else {
              const M = xe("");
              m.replace(M);
              const R = Cf(m, r, n, i);
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
      o += d;
    } else if (Dt(u))
      e <= o && o < e + t && s > 0 && (Sf(u, r), s -= 1), o += 1;
    else if (D(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (kn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            Wc(u, p.style), typeof p.cid == "string" && Mt(u, Jn, () => p.cid);
            const h = Be(p, Qo);
            h && Object.keys(h).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...h
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || R_(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Sc(u), !0;
        }
      }
      d && Sc(u), a -= 1;
    } else if (Yt(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!Ze(u))
          Sf(u, r);
        else if (Su(r)) {
          const p = wm(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (O(u)) {
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
function Cf(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Xi(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), zt(t, e);
    return;
  }
  const a = {};
  qm.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), zt(t, e), s;
}
function Pm(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(we(t))) : kt(r) && r.getTextType() === "marker" && r.setTextContent(we(t) + q);
}
function Wc(e, t) {
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
function Sf(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && kn(t)) {
      const i = Hc(n);
      if (Wc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Mt(e, Jn, () => o);
      }
      const s = Be(i, Qo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (ze(e) || ye(e) || Ee(e) || U(e) || Oe(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ct(e) || ie(e) || D(e)) && (r === "style" && ie(e) ? Pm(e, n) : r === "style" && D(e) ? Wc(e, n) : r === "code" && ct(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Mt(e, hn, () => n));
  }
}
function T_(e, t, r) {
  if (t <= 0)
    return;
  const n = ge();
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
    } else if (Dt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Yt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Yt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
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
              jr(x) ? h += x.getTextContentSize() : Dt(x) && (h += 1), i = C;
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
function v_(e, t, r, n, i) {
  if (t === Fs)
    return _f(e, r, n, i);
  if (t.endsWith(Fs) && !Su(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (kn(r))
        throw new Error("Text + LF should not have char attributes");
      o += ta(e, s, r, i);
    }
    return o += _f(e + o, r, n, i), o;
  } else return kn(r) ? C_(e, t, r, n, i) : ta(e, t, r, i);
}
function C_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = xe(t === "" ? Gt : t);
  zt(r, s);
  let o;
  {
    let y = function(x) {
      if (jr(x)) {
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
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Xi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(D);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), ta(e, t, void 0, i);
  const f = {};
  for (const [h, m] of Object.entries(r))
    h !== "char" && h !== "segment" && typeof m == "string" && (f[h] = m);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const h of u)
    if (!Am(e, h, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), ta(e, t, void 0, i));
}
function ta(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = ge();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (jr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = xe(t);
        if (zt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          D(f) && !kn(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Dt(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const d = xe(t);
        zt(r, d);
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
        return zt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Yt(c)) {
      if (!o && e === s) {
        const d = xe(t);
        zt(r, d);
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
        return zt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (O(c)) {
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
    zt(r, c);
    const l = Ht().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Am(e, t, r) {
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
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Ht().append(t));
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
      } else if (Dt(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (Yt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (Ze(u) && Yt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
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
function S_(e, t, r, n, i) {
  let s;
  return cn("chapter", t) ? s = M_(t.insert.chapter, r) : cn("verse", t) ? s = E_(t.insert.verse, r) : cn("ms", t) ? s = P_(t.insert.ms) : cn("note", t) ? s = Om(t, r, n, i) : cn("unknown", t) ? s = Nm(t, r, n, i) : cn("unmatched", t) && (s = w_(t.insert.unmatched, r)), s ? Am(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function _f(e, t, r, n) {
  let i;
  Su(t) ? i = wm(t.para, r) : N_(t) && (i = __(t.book)), i ??= Ht();
  const s = i, o = ie(s), a = Ze(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (jr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ie(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const h = e - c, [m] = h > 0 ? d.splitText(h) : [void 0];
          let y, x = m?.getPreviousSibling();
          for (; x; ) {
            const C = x;
            x = x.getPreviousSibling(), y ? y.insertBefore(C) : s.append(C), y = C;
          }
          return m && s.append(m), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Dt(d))
      c += 1;
    else if (Yt(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (Ze(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ie(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ie(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (O(d)) {
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
  return u(ge()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function __(e) {
  const { style: t, code: r } = e;
  if (!t || t !== $s || !r || !Jt.isValidBookCode(r))
    return;
  const n = Be(e, qC);
  return pg(r, n);
}
function wm(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Be(e, RC), i = Is(r, n);
  if (!Yi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ft(r), Ma());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = we(r) + q;
    i.append(t.hasGutterParaMarkers ? xT(s) : zr("marker", s));
  }
  return i;
}
function M_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Be(e, $C);
  let a;
  if (t.markerMode === "editable")
    a = Xh(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Vl(r, c, n, i, s, o);
  }
  return a;
}
function E_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Be(e, IC);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Wt(r, n);
    c = Fh(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = iu(n, l, i, s, o, a);
  }
  return c;
}
function P_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Be(e, LC);
  return Eh(t, r, n, s, i);
}
function Om(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Be(i.note, DC), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const m of c?.ops ?? [])
    if (typeof m.insert == "string")
      if (kn(m.attributes)) {
        const y = Xi(m.attributes.char, t, xe(m.insert), void 0, Rm(m.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(xe(m.insert));
  return Cm(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Nm(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Be(i, UC), l = Bl(s, o, c), u = a?.ops ?? [];
  u.length > 0 && A_(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Mt(l, hn, () => d), l;
}
function A_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (kn(s.attributes)) {
        const o = xe(s.insert), a = Xi(s.attributes.char, t, o, void 0, Rm(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(xe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (cn("unknown", s)) {
        const o = Nm(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (cn("note", s)) {
        const o = Om(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function w_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Ql(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Rm(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Hc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Xi(e, t, r, n, i, s = !1, o = !1) {
  S(r) && r.getTextContentSize() === 0 && r.setTextContent(Gt);
  const a = () => {
    o && S(r) && r.getTextContent() !== Gt && r.setTextContent(q + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Hc), l = c[0], u = i?.[i.length - 1];
    if (D(u) && Yn(l, u))
      return c.length > 1 ? Xi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, h) => {
      const m = Kr(p.style, Be(p, Qo));
      if (typeof p.cid == "string" && Mt(m, Jn, () => p.cid), n && h === c.length - 1 && Mt(m, hn, () => n), f)
        if (D(f)) {
          const y = f.getMarker(), x = [];
          cc(y, x, t, !0), x.forEach((M) => m.append(M)), m.append(f);
          const C = [];
          ac(f, C, t, !0), C.forEach((M) => m.append(M));
        } else
          m.append(f);
      return m;
    }, r);
    return cc(l.style, d, t, s), ac(d, d, t, s), [d];
  } else {
    const c = Hc(e), l = i?.[i.length - 1];
    if (D(l) && Yn(c, l))
      return r && l.append(r), [];
    a();
    const u = Kr(c.style, Be(c, Qo));
    return typeof c.cid == "string" && Mt(u, Jn, () => c.cid), n && Mt(u, hn, () => n), r && u.append(r), cc(c.style, u, t, s), ac(u, u, t, s), [u];
  }
}
function ac(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && O_(e.getMarker(), t, r, !1, n);
}
function cc(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ft(e, "opening", n) : r?.markerMode === "visible" && (i = zr("marker", we(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function O_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ft("", "selfClosing") : s = ft(e, "closing", i) : r?.markerMode === "visible" && (s = zr("marker", n ? He("") : He(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function N_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Su(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function kn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function R_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function zt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Mt(t, hn, () => n);
        continue;
      }
      if (q_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const qm = [
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
function q_(e) {
  return qm.includes(e);
}
function $_() {
  const [e] = le();
  return j(() => e.registerCommand(ya, (t) => (I_(t), !1), jn), [e]), null;
}
function I_(e) {
  if (L_(e.target))
    return;
  const t = N();
  A(t) && D_(t);
}
function Qi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Xt(t))
      r++, t = t.getNextSibling(), S(t) && t.getTextContent() === q && (r++, t = t.getNextSibling());
    else if (ye(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (or(e, r), !0);
}
function L_(e) {
  if (!sh(e))
    return !1;
  const t = Ys(e);
  if (!TT(t))
    return !1;
  const r = t.getParent();
  return r ? Re(r) ? Qi(r) : (or(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function D_(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = H(t.key);
  if (!Re(r))
    return !1;
  const n = r.getFirstChild();
  return !wr(n) && !ui(n) ? !1 : Qi(r);
}
function U_() {
  const [e] = le();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !F_(r) || !$m() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return nt(
      e.registerCommand(Wr, t, Ke),
      e.registerCommand(El, t, Ke),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(Lr, t, Dr),
      e.registerCommand(Vn, t, Dr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Pl, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Ys(r.target);
        return !n || !ei(n) ? !1 : (r.preventDefault(), !0);
      }, Ke),
      e.registerCommand(Ok, t, Ke),
      e.registerCommand(Nk, t, Ke),
      e.registerCommand(Rk, t, Ke)
    );
  }, [e]), null;
}
function F_(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function ei(e) {
  return rt(e, (t) => Oe(t) || Dg(t)) ?? void 0;
}
function $m() {
  const e = N();
  return A(e) ? ei(e.anchor.getNode()) !== void 0 || ei(e.focus.getNode()) !== void 0 : !1;
}
function K_(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function z_(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), K_(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function B_(e, t, r, n) {
  if (!nM(t) || z_(e, r))
    return !1;
  const i = r === "up" ? NC(t) : OC(t);
  return i && n.preventDefault(), i;
}
function j_({ viewOptions: e }) {
  const [t] = le();
  return V_(t, e), null;
}
function V_(e, t) {
  j(() => {
    if (!e.hasNodes([Ar, wt, $e]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!A(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = Mf(o), d = Q_(i, Ef(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return B_(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Mf(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Ef(a, n.key) ? l = !c && wf(i, "next") || !c && H_(i) || tM(i) || !c && s && Af(i, "next") : W_(a, n.key) && (l = !c && wf(i, "previous") || !c && G_(i) || rM(i, t) || !c && s && Af(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Wr, r, Ke);
  }, [e, t]);
}
function Mf(e) {
  return e.dir || "ltr";
}
function Ef(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function W_(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Gc(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = sr(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function H_(e) {
  const t = Gc(Cg(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (or(t, 0), !0);
}
function G_(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Gc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Pf(n);
  }
  if (t.offset === 0) {
    const n = Gc(r);
    return n ? Pf(n) : !1;
  }
  return !1;
}
function Pf(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (S(t))
    return t.select(), !0;
  if (O(t)) {
    const i = t.getLastDescendant();
    return S(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const ra = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function J_(e) {
  if (ra)
    for (const { segment: r } of ra.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function Y_(e) {
  if (ra) {
    let n = 0;
    for (const { index: i } of ra.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Im(e) {
  for (let t = e; t; t = t.getParent())
    if (O(t) && !t.isInline())
      return t;
}
function Lm(e) {
  return !!e && P(e) && ei(e) !== void 0;
}
function Ki(e) {
  return S(e) && !e.isToken() && !Lm(e) && e.getTextContentSize() > 0;
}
function Dm(e) {
  return ma(e) ? !0 : U(e) ? e.getIsCollapsed() === !0 : S(e) ? (e.isToken() || Lm(e)) && e.getTextContentSize() > 0 : oh(e) ? !Ee(e) : !1;
}
function zi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Na(e, t, r) {
  for (let n = e; n; ) {
    if (Dm(n))
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
function _u(e, t, r, n, i) {
  return r === "element" && O(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? zi(e, n, i) : r === "text" && Dm(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : zi(e, n, i);
}
function lc(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = _u(e.node, e.offset, e.kind, "previous", t), n = Na(r, "previous", t);
  if (!n)
    return e;
  if (Ki(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function X_(e, t) {
  const r = e.getNode(), n = Im(r);
  if (!n)
    return;
  if (e.type === "text" && Ki(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return lc({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = _u(r, e.offset, e.type, t, n), s = Na(i, t, n);
  if (!s)
    return;
  if (Ki(s)) {
    const c = s.getTextContent(), l = t === "next" ? J_(c) : Y_(c);
    return lc({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return lc({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Um(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = X_(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Af(e, t) {
  return Um(e, t, "collapse");
}
function Q_(e, t) {
  return Um(e, t, "extend");
}
function Z_(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && Ki(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = _u(n, e.offset, e.type, t, r);
  return Na(i, t, r) === void 0;
}
function eM(e, t) {
  const r = ge();
  for (let n = e; n; ) {
    const i = zi(n, t, r), s = i && Na(i, t, r);
    if (!s)
      return;
    if (n = ei(s), !n)
      return s;
  }
}
function wf(e, t) {
  const r = e.anchor, n = r.getNode();
  if (ei(n))
    return !1;
  const i = Im(n);
  if (!i || !Z_(r, t, i))
    return !1;
  const s = zi(i, t, ge()), o = s && ei(s);
  if (!o)
    return !1;
  const a = eM(o, t);
  if (!a)
    return !0;
  if (Ki(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Of(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function tM(e) {
  const t = e.anchor.getNode(), r = Cg(e);
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
    return i ? i.selectStart() : Of(r), !0;
  }
  const n = r?.getParent();
  if (kt(r) && U(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Of(n) : n.selectEnd(), !0;
  }
  return !1;
}
function rM(e, t) {
  const r = fv(e);
  if (io(r) && !r.getPreviousSibling())
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
function nM(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ye(t) && oh(t);
}
function iM() {
  const [e] = le();
  return sM(e), null;
}
function sM(e) {
  j(() => {
    if (!e.hasNodes([Se]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return nt(
      e.registerNodeTransform(Se, cM),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(Se, mT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(Se, rg),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(Se, (t) => Us(Br("char"), t)),
      e.registerNodeTransform(Ve, lM)
    );
  }, [e]);
}
function uc(e) {
  return e.getChildren().some(P);
}
function oM(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (no(n)) {
    const i = n.getTextContent();
    i.startsWith(q) && (i === q ? n.remove() : n.setTextContent(i.slice(q.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function aM(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function cM(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (uc(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = se(e, Jn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && Yn({ style: t, cid: r }, i) && yr(n, i.getUnknownAttributes()))
    if (uc(i)) {
      if (oM(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && Yn({ style: t, cid: r }, s) && yr(n, s.getUnknownAttributes()) && (uc(s) ? aM(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function lM(e) {
  const t = e.getParent();
  if (!D(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Gt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Fm(e) {
  return e.replaceAll("	", " ");
}
const Mu = (e) => {
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
      n.setData(o, Fm(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Lr, s);
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
    r.setData("text/plain", Fm(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Lr, i);
  });
};
function uM() {
  const [e] = le();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Uo ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(ba, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(Vn, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Eu(e) : Mu(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function dM({ logger: e }) {
  const [t] = le();
  return j(() => nt(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Wr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), qi),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Lr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, qi),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Pl, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, qi)
  ), [t, e]), null;
}
function fM({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function pM({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(fM, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let hM = 0;
class us {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${hM++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function gM({ options: e } = {}) {
  const [t] = le(), [r, n] = he(() => !t.isEditable()), [i, s] = he({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = he(void 0), c = Fe(() => {
    const d = [
      new us("Cut", {
        onSelect: () => {
          t.dispatchCommand(Vn, null);
        },
        isDisabled: r
      }),
      new us("Copy", {
        onSelect: () => {
          t.dispatchCommand(ba, null);
        }
      }),
      new us("Paste", {
        onSelect: () => {
          Mu(t);
        },
        isDisabled: r
      }),
      new us("Paste as Plain Text", {
        onSelect: () => {
          Eu(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new us(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = de(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  j(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || yg(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
    });
  }, [t]), j(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, l]), j(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, l]), j(() => {
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
  }, [i.isOpen, l, c, o, t]), j(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]);
  const u = Z(null);
  return Ws(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${h}px`, d.style.top = `${m}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Xk.createPortal(_("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: _(pM, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function mM() {
  const [e] = le();
  return j(() => e.registerCommand(Wr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Uo ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Dr), [e]), null;
}
function yM({ isEditable: e }) {
  const [t] = le();
  return Ws(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Nf(e) {
  return !!e && Hl(H(e));
}
function Km(e) {
  const [t] = le(), r = Z(void 0), n = de((i) => {
    let s = !1;
    const o = N(), a = A(o) && o.isCollapsed() ? o.anchor.key : void 0, c = r.current, l = Nf(c);
    c && !l && (r.current = void 0);
    let u;
    if (i) {
      const d = i.getParentOrThrow(), f = i.getIndexWithinParent() + 1, p = Ea(d, f);
      if (p)
        r.current = p.getKey(), u = p.getKey();
      else {
        const h = cv();
        i.insertAfter(h), r.current = h.getKey(), u = h.getKey(), s = !0;
      }
      or(d, f);
    }
    if (c && l && c !== a && c !== u) {
      const d = H(c);
      S(d) && (d.remove(), s = !0), r.current === c && (r.current = void 0);
    }
    return s;
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = N(), l = A(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && n(a) && Wn(Ns);
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (so(c) || !c.includes(Li))
        return;
      const l = N(), u = A(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (lv(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(Li).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = nt(t.registerCommand(vr, () => (i(), !1), jn), t.registerCommand(Al, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Nf(a);
      }), c && t.update(() => {
        const l = H(a);
        S(l) && (l.remove(), Wn(Ns));
      }), r.current = void 0, !1;
    }, jn), t.registerNodeTransform(Ve, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function bM() {
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
  if (!ye(i) || Ea(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ye(s))
    return i;
}
function kM() {
  return Km(bM), null;
}
function xM({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
        const u = o.getRootElement(), d = u?.ownerDocument.activeElement, f = u != null && d != null && (u === d || u.contains(d));
        o.update(() => {
          f || Wn(qk), o.setEditorState(l), o.dispatchCommand($k, void 0);
        }, { tag: Nl });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function TM({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return vM(t, n), CM(i, e, r, n), null;
}
function vM(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = yS), r.current !== o && (r.current = o, Rf("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = bS), n.current !== o && (n.current = o, Rf("cross-ref-callers", o, t));
  }, [t, s]);
}
function CM(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([Se, $e, nr]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => wM(s));
    return nt(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform($e, (s) => SM(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(Se, _M),
      e.registerNodeTransform(Ve, MM),
      // Ensure NBSP after caller.
      e.registerNodeTransform(nr, EM),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(nr, (s, { prevEditorState: o }) => PM(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(vr, () => AM(e, t, r, n), $t),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function SM(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Qt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    S(i) && !P(i) && i.getTextContent() !== Lt(e.getCaller()) && e.insertBefore(i);
  }
}
function _M(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => Qt(o));
  if (!D(e) || !U(t) || !n)
    return;
  const i = Gl(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  S(s) ? s.getTextContent() !== q && s.setTextContent(q) : e.insertAfter(xe(q));
}
function MM(e) {
  const t = sr(e), r = t?.getChildren(), n = r?.find((o) => Qt(o));
  if (!S(e) || !U(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && U(i) && e.getTextContent() !== q && (e.setTextContent(q), e.selectEnd()), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Gt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Gl(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function EM(e) {
  if (!Qt(e))
    return;
  const t = e.getNextSibling();
  !S(t) || P(t) ? e.insertAfter(xe(q)) : t.getTextContent() !== q && t.setTextContent(q);
}
function PM(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = H(r), a = o?.getParent();
      return Qt(o) && U(a) && a.getCaller() === Ko;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function AM(e, t, r, n) {
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
function wM(e) {
  const t = N();
  if (!A(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (U(i) && S(s)) {
    e.preventDefault();
    const o = Js();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), pn(o);
  }
}
function Rf(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (OM(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function OM(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Ra(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Cr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => S(n) && n.getMode() === "token") ? t : [];
}
function NM(e) {
  const t = e.getParent();
  if (U(t))
    return Ra(t).some((r) => r.is(e)) ? t : void 0;
}
function na(e) {
  const t = Ra(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function RM(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function qM(e) {
  const t = Ik();
  if (!A(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= na(e);
  const i = RM(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= na(e);
}
function Jc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = NM(t);
  if (r)
    return $M(r, t, e.offset) ? void 0 : r;
}
function $M(e, t, r) {
  const n = Ra(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function IM(e) {
  const t = Ra(e), r = t[t.length - 1];
  S(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : or(e, na(e));
}
function LM(e = !1) {
  const t = N();
  if (!A(t))
    return !1;
  if (!t.isCollapsed())
    return DM(t.anchor, t.focus);
  const r = Jc(t.anchor);
  if (!r)
    return !1;
  if (!e && qM(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    or(n, r.getIndexWithinParent());
  } else
    IM(r);
  return !0;
}
function DM(e, t) {
  const r = Jc(e), n = Jc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && qf(e, r, i), n && qf(t, n, !i), !0;
}
function qf(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), na(t), "element");
}
function UM() {
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
  }, [e]), j(() => e.registerCommand(vr, () => (LM(t.current) && e.dispatchCommand(Rl, void 0), !1), jn), [e]), null;
}
function FM({ onChange: e, viewOptions: t }) {
  const [r] = le();
  return j(() => r.registerCommand(vr, () => {
    const n = gu(t);
    return e?.(n), !1;
  }, $t), [r, e, t]), null;
}
function KM() {
  const [e] = le();
  return zM(e), null;
}
function zM(e) {
  j(() => {
    if (!e.hasNodes([it]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(it, (t) => BM(t, e));
  }, [e]);
}
function BM(e, t) {
  nm(t, e.getKey()) && rm(e.getFirstChild()), !(!ie(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = H(e.getKey());
    return ie(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function zm({ onStateChange: e }) {
  const [t] = le(), [r, n] = he(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = de(() => {
    const l = N();
    let u;
    if (A(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : rt(d, (x) => {
        const C = x.getParent();
        return C !== null && Lk(C);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), Zn(p) && (p = rt(d, ie) ?? p);
      const h = p.getKey(), m = r.getElementByKey(h), y = hv(d, f);
      if (y && wC(y) && (u = y.getMarker()), m !== null && (ie(p) || ct(p) || io(p))) {
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
  return j(() => t.registerCommand(vr, (l, u) => (c(), n(u), !1), Dr), [t, c]), j(() => nt(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Dk, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Dr), r.registerCommand(Uk, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Dr)), [c, r, e]), null;
}
function jM(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function xn(e) {
  return e ? Re(e) ? e : rt(e, (r) => Re(r)) ?? void 0 : void 0;
}
function Bm(e) {
  if (!A(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = xn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Pu(e) {
  return A(e) && e.isCollapsed() && e.anchor.type === "element" || !A(e) && !ah(e) ? !1 : e.getNodes().some((t) => ye(t));
}
function jm(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = xn(r);
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
function Vm(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = xn(r);
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
function $f(e, t) {
  return !!Yc(e, t);
}
function Yc(e, t) {
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
function ia(e, t) {
  if (!A(e))
    return !1;
  const r = xn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function dc(e) {
  return Pu(e) || Bm(e);
}
function VM(e, t) {
  if (Pu(e) || Bm(e))
    return !0;
  if (!A(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return jm(e) && ia(e, "backward") || $f(e, "backward");
    case "deleteForward":
      return Vm(e) && ia(e, "forward") || $f(e, "forward");
    case "insertText":
      return !1;
  }
}
function WM(e, t) {
  if (!(!A(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Yc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (jm(e) && ia(e, "backward")) {
        const n = xn(e.anchor.getNode());
        if (Re(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Yc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (Vm(e) && ia(e, "forward")) {
        const i = xn(e.anchor.getNode())?.getNextSibling();
        if (Re(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function If(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return ah(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!A(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!A(e) || e.isCollapsed())
    return !1;
  const r = xn(e.anchor.getNode()), n = xn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function Wm(e) {
  if (S(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else O(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function HM(e) {
  const t = e.getPreviousSibling();
  if (!Re(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? Wm(r) : Qi(t) || t.selectStart();
}
function Hm(e) {
  return ye(e) || ze(e) ? [] : Re(e) ? e.getChildren().flatMap(Hm) : [e];
}
function GM(e) {
  const t = [];
  for (const r of e) {
    const n = Hm(r);
    n.length !== 0 && (Re(r) && t.length > 0 && t.push(xe(" ")), t.push(...n));
  }
  return t;
}
function Lf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function JM(e) {
  if (Array.isArray(e)) return e;
}
function YM(e, t) {
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
function XM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QM(e, t) {
  return JM(e) || YM(e, t) || ZM(e, t) || XM();
}
function ZM(e, t) {
  if (e) {
    if (typeof e == "string") return Lf(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Lf(e, t) : void 0;
  }
}
const Gm = Object.entries, Df = Object.setPrototypeOf, eE = Object.isFrozen, tE = Object.getPrototypeOf, rE = Object.getOwnPropertyDescriptor;
let st = Object.freeze, lt = Object.seal, Ai = Object.create, Jm = typeof Reflect < "u" && Reflect, Xc = Jm.apply, Qc = Jm.construct;
st || (st = function(t) {
  return t;
});
lt || (lt = function(t) {
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
const Mi = Ye(Array.prototype.forEach), nE = Ye(Array.prototype.lastIndexOf), Uf = Ye(Array.prototype.pop), Ei = Ye(Array.prototype.push), iE = Ye(Array.prototype.splice), ln = Array.isArray, ks = Ye(String.prototype.toLowerCase), fc = Ye(String.prototype.toString), Ff = Ye(String.prototype.match), fs = Ye(String.prototype.replace), Kf = Ye(String.prototype.indexOf), sE = Ye(String.prototype.trim), oE = Ye(Number.prototype.toString), aE = Ye(Boolean.prototype.toString), zf = typeof BigInt > "u" ? null : Ye(BigInt.prototype.toString), Bf = typeof Symbol > "u" ? null : Ye(Symbol.prototype.toString), tt = Ye(Object.prototype.hasOwnProperty), ps = Ye(Object.prototype.toString), et = Ye(RegExp.prototype.test), $n = cE(TypeError);
function Ye(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Xc(e, t, n);
  };
}
function cE(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Qc(e, r);
  };
}
function me(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ks;
  if (Df && Df(e, null), !ln(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (eE(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function lE(e) {
  for (let t = 0; t < e.length; t++)
    tt(e, t) || (e[t] = null);
  return e;
}
function dt(e) {
  const t = Ai(null);
  for (const n of Gm(e)) {
    var r = QM(n, 2);
    const i = r[0], s = r[1];
    tt(e, i) && (ln(s) ? t[i] = lE(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = dt(s) : t[i] = s);
  }
  return t;
}
function uE(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return oE(e);
    case "boolean":
      return aE(e);
    case "bigint":
      return zf ? zf(e) : "0";
    case "symbol":
      return Bf ? Bf(e) : "Symbol()";
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
    const n = rE(e, t);
    if (n) {
      if (n.get)
        return Ye(n.get);
      if (typeof n.value == "function")
        return Ye(n.value);
    }
    e = tE(e);
  }
  function r() {
    return null;
  }
  return r;
}
function dE(e) {
  try {
    return et(e, ""), !0;
  } catch {
    return !1;
  }
}
const jf = st(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), pc = st(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), hc = st(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), fE = st(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), gc = st(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), pE = st(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Vf = st(["#text"]), Wf = st(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), mc = st(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Hf = st(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), vo = st(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hE = lt(/{{[\w\W]*|^[\w\W]*}}/g), gE = lt(/<%[\w\W]*|^[\w\W]*%>/g), mE = lt(/\${[\w\W]*/g), yE = lt(/^data-[\-\w.\u00B7-\uFFFF]+$/), bE = lt(/^aria-[\-\w]+$/), Gf = lt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), kE = lt(/^(?:\w+script|data):/i), xE = lt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), TE = lt(/^html$/i), vE = lt(/^[a-z][.\w]*(-[.\w]+)+$/i), Jf = lt(/<[/\w!]/g), Yf = lt(/<[/\w]/g), CE = lt(/<\/no(script|embed|frames)/i), SE = lt(/\/>/i), qt = {
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
}, _E = function() {
  return typeof window > "u" ? null : window;
}, ME = function(t, r) {
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
}, Xf = function() {
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
}, on = function(t, r, n, i) {
  return tt(t, r) && ln(t[r]) ? me(i.base ? dt(i.base) : {}, t[r], i.transform) : n;
};
function Ym() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _E();
  const t = (K) => Ym(K);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== qt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = er(f, "cloneNode"), h = er(f, "remove"), m = er(f, "nextSibling"), y = er(f, "childNodes"), x = er(f, "parentNode"), C = er(f, "shadowRoot"), M = er(f, "attributes"), R = o && o.prototype ? er(o.prototype, "nodeType") : null, E = o && o.prototype ? er(o.prototype, "nodeName") : null, L = o && o.prototype ? er(o.prototype, "ownerDocument") : null;
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
    return G || (W = ME(d, i), G = !0), W;
  }, Ft = r, ee = Ft.implementation, B = Ft.createNodeIterator, oe = Ft.createDocumentFragment, je = Ft.getElementsByTagName, Xe = n.importNode;
  let fe = Xf();
  t.isSupported = typeof Gm == "function" && typeof x == "function" && ee && ee.createHTMLDocument !== void 0;
  const Nr = hE, Nt = gE, rs = mE, ur = yE, pi = bE, ns = kE, re = xE, ht = vE;
  let ho = Gf, ve = null;
  const Rr = me({}, [...jf, ...pc, ...hc, ...gc, ...Vf]);
  let Q = null;
  const Rt = me({}, [...Wf, ...mc, ...Hf, ...vo]);
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
  })), Zr = null, en = null;
  const dr = Object.seal(Ai(null, {
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
  let is = !0, qr = !0, En = !1, go = !0, Tt = !1, vt = !0, ut = !1, tn = !1, rn = null, hi = null, gi = !1, fr = !1, mi = !1, Pn = !1, w = !0, F = !1;
  const z = "user-content-";
  let X = !0, _e = !1, ue = {}, ke = null;
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
  let pr = null;
  const Ct = me({}, ["audio", "video", "img", "source", "image", "track"]);
  let Kt = null;
  const hr = me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), An = "http://www.w3.org/1998/Math/MathML", mo = "http://www.w3.org/2000/svg", gr = "http://www.w3.org/1999/xhtml";
  let yi = gr, za = !1, Ba = null;
  const ak = me({}, [An, mo, gr], fc), fd = st(["mi", "mo", "mn", "ms", "mtext"]);
  let ja = me({}, fd);
  const pd = st(["annotation-xml"]);
  let Va = me({}, pd);
  const ck = me({}, ["title", "style", "font", "a", "script"]);
  let ss = null;
  const lk = ["application/xhtml+xml", "text/html"], uk = "text/html";
  let De = null, bi = null;
  const dk = r.createElement("form"), hd = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, Wa = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (bi && bi === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = dt(g), ss = // eslint-disable-next-line unicorn/prefer-includes
    lk.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? uk : g.PARSER_MEDIA_TYPE, De = ss === "application/xhtml+xml" ? fc : ks, ve = on(g, "ALLOWED_TAGS", Rr, {
      transform: De
    }), Q = on(g, "ALLOWED_ATTR", Rt, {
      transform: De
    }), Ba = on(g, "ALLOWED_NAMESPACES", ak, {
      transform: fc
    }), Kt = on(g, "ADD_URI_SAFE_ATTR", hr, {
      transform: De,
      base: hr
    }), pr = on(g, "ADD_DATA_URI_TAGS", Ct, {
      transform: De,
      base: Ct
    }), ke = on(g, "FORBID_CONTENTS", Ge, {
      transform: De
    }), Zr = on(g, "FORBID_TAGS", dt({}), {
      transform: De
    }), en = on(g, "FORBID_ATTR", dt({}), {
      transform: De
    }), ue = tt(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? dt(g.USE_PROFILES) : g.USE_PROFILES : !1, is = g.ALLOW_ARIA_ATTR !== !1, qr = g.ALLOW_DATA_ATTR !== !1, En = g.ALLOW_UNKNOWN_PROTOCOLS || !1, go = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Tt = g.SAFE_FOR_TEMPLATES || !1, vt = g.SAFE_FOR_XML !== !1, ut = g.WHOLE_DOCUMENT || !1, fr = g.RETURN_DOM || !1, mi = g.RETURN_DOM_FRAGMENT || !1, Pn = g.RETURN_TRUSTED_TYPE || !1, gi = g.FORCE_BODY || !1, w = g.SANITIZE_DOM !== !1, F = g.SANITIZE_NAMED_PROPS || !1, X = g.KEEP_CONTENT !== !1, _e = g.IN_PLACE || !1, ho = dE(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : Gf, yi = typeof g.NAMESPACE == "string" ? g.NAMESPACE : gr, ja = tt(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? dt(g.MATHML_TEXT_INTEGRATION_POINTS) : me({}, fd), Va = tt(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? dt(g.HTML_INTEGRATION_POINTS) : me({}, pd);
    const v = tt(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? dt(g.CUSTOM_ELEMENT_HANDLING) : Ai(null);
    if (be = Ai(null), tt(v, "tagNameCheck") && hd(v.tagNameCheck) && (be.tagNameCheck = v.tagNameCheck), tt(v, "attributeNameCheck") && hd(v.attributeNameCheck) && (be.attributeNameCheck = v.attributeNameCheck), tt(v, "allowCustomizedBuiltInElements") && typeof v.allowCustomizedBuiltInElements == "boolean" && (be.allowCustomizedBuiltInElements = v.allowCustomizedBuiltInElements), lt(be), Tt && (qr = !1), mi && (fr = !0), ue && (ve = me({}, Vf), Q = Ai(null), ue.html === !0 && (me(ve, jf), me(Q, Wf)), ue.svg === !0 && (me(ve, pc), me(Q, mc), me(Q, vo)), ue.svgFilters === !0 && (me(ve, hc), me(Q, mc), me(Q, vo)), ue.mathMl === !0 && (me(ve, gc), me(Q, Hf), me(Q, vo))), dr.tagCheck = null, dr.attributeCheck = null, tt(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? dr.tagCheck = g.ADD_TAGS : ln(g.ADD_TAGS) && (ve === Rr && (ve = dt(ve)), me(ve, g.ADD_TAGS, De))), tt(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? dr.attributeCheck = g.ADD_ATTR : ln(g.ADD_ATTR) && (Q === Rt && (Q = dt(Q)), me(Q, g.ADD_ATTR, De))), tt(g, "ADD_URI_SAFE_ATTR") && ln(g.ADD_URI_SAFE_ATTR) && me(Kt, g.ADD_URI_SAFE_ATTR, De), tt(g, "FORBID_CONTENTS") && ln(g.FORBID_CONTENTS) && (ke === Ge && (ke = dt(ke)), me(ke, g.FORBID_CONTENTS, De)), tt(g, "ADD_FORBID_CONTENTS") && ln(g.ADD_FORBID_CONTENTS) && (ke === Ge && (ke = dt(ke)), me(ke, g.ADD_FORBID_CONTENTS, De)), X && (ve["#text"] = !0), ut && me(ve, ["html", "head", "body"]), ve.table && (me(ve, ["tbody"]), delete Zr.tbody), g.TRUSTED_TYPES_POLICY) {
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
  }, gd = me({}, [...pc, ...hc, ...fE]), md = me({}, [...gc, ...pE]), fk = function(g, v, I) {
    return v.namespaceURI === gr ? g === "svg" : v.namespaceURI === An ? g === "svg" && (I === "annotation-xml" || ja[I]) : !!gd[g];
  }, pk = function(g, v, I) {
    return v.namespaceURI === gr ? g === "math" : v.namespaceURI === mo ? g === "math" && Va[I] : !!md[g];
  }, hk = function(g, v, I) {
    return v.namespaceURI === mo && !Va[I] || v.namespaceURI === An && !ja[I] ? !1 : !md[g] && (ck[g] || !gd[g]);
  }, gk = function(g) {
    let v = x(g);
    (!v || !v.tagName) && (v = {
      namespaceURI: yi,
      tagName: "template"
    });
    const I = ks(g.tagName), V = ks(v.tagName);
    return Ba[g.namespaceURI] ? g.namespaceURI === mo ? fk(I, v, V) : g.namespaceURI === An ? pk(I, v, V) : g.namespaceURI === gr ? hk(I, v, V) : !!(ss === "application/xhtml+xml" && Ba[g.namespaceURI]) : !1;
  }, nn = function(g) {
    Ei(t.removed, {
      element: g
    });
    try {
      x(g).removeChild(g);
    } catch {
      if (h(g), !x(g))
        throw $n("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, yo = function(g) {
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
      if (fr || mi)
        try {
          nn(v);
        } catch {
        }
      else
        try {
          v.setAttribute(g, "");
        } catch {
        }
  }, mk = function(g) {
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
      (R ? R(I) : I.nodeType) === qt.element && mk(I);
      const J = y(I);
      if (J)
        for (let ae = J.length - 1; ae >= 0; --ae)
          v.push(J[ae]);
    }
  }, yk = function(g) {
    if (!vt)
      return;
    const v = [g];
    for (; v.length > 0; ) {
      const I = v.pop(), V = R ? R(I) : I.nodeType;
      if (V === qt.processingInstruction || V === qt.comment && et(Yf, I.data)) {
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
  }, yd = function(g) {
    let v = null, I = null;
    if (gi)
      g = "<remove></remove>" + g;
    else {
      const ae = Ff(g, /^[\r\n\t ]+/);
      I = ae && ae[0];
    }
    ss === "application/xhtml+xml" && yi === gr && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const V = T ? Y(g) : g;
    if (yi === gr)
      try {
        v = new u().parseFromString(V, ss);
      } catch {
      }
    if (!v || !v.documentElement) {
      v = ee.createDocument(yi, "template", null);
      try {
        v.documentElement.innerHTML = za ? $ : V;
      } catch {
      }
    }
    const J = v.body || v.documentElement;
    return g && I && J.insertBefore(r.createTextNode(I), J.childNodes[0] || null), yi === gr ? je.call(v, ut ? "html" : "body")[0] : ut ? v.documentElement : J;
  }, bd = function(g) {
    const v = L ? L(g) : g.ownerDocument;
    return B.call(
      v || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, bo = function(g) {
    return g = fs(g, Nr, " "), g = fs(g, Nt, " "), g = fs(g, rs, " "), g;
  }, Ha = function(g) {
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
      J.data = bo(J.data), J = V.nextNode();
    const ae = (v = g.querySelectorAll) === null || v === void 0 ? void 0 : v.call(g, "template");
    ae && Mi(ae, (Me) => {
      ki(Me.content) && Ha(Me.content);
    });
  }, ko = function(g) {
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
  function mr(K, g, v) {
    K.length !== 0 && Mi(K, (I) => {
      I.call(t, g, v, bi);
    });
  }
  const bk = function(g, v) {
    return !!(vt && g.hasChildNodes() && !as(g.firstElementChild) && et(Jf, g.textContent) && et(Jf, g.innerHTML) || vt && g.namespaceURI === gr && v === "style" && as(g.firstElementChild) || g.nodeType === qt.processingInstruction || vt && g.nodeType === qt.comment && et(Yf, g.data));
  }, kk = function(g, v, I) {
    if (!Zr[v] && vd(v) && (be.tagNameCheck instanceof RegExp && et(be.tagNameCheck, v) || be.tagNameCheck instanceof Function && be.tagNameCheck(v)))
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
    return nn(g), !0;
  }, kd = function(g, v, I, V) {
    return g.length === 0 ? v : v === I || v === V ? dt(v) : v;
  }, xd = function(g, v) {
    if (mr(fe.beforeSanitizeElements, g, null), g !== v && x(g) === null)
      return _e && os(g), !0;
    if (ko(g))
      return nn(g), !0;
    const I = De(E ? E(g) : g.nodeName);
    if (ve = kd(fe.uponSanitizeElement, ve, Rr, rn), mr(fe.uponSanitizeElement, g, {
      tagName: I,
      allowedTags: ve
    }), g !== v && x(g) === null)
      return _e && os(g), !0;
    if (bk(g, I))
      return nn(g), !0;
    if (Zr[I] || !(dr.tagCheck instanceof Function && dr.tagCheck(I)) && !ve[I]) {
      const J = kk(g, I, v);
      return J === !1 && mr(fe.afterSanitizeElements, g, null), J;
    }
    if ((R ? R(g) : g.nodeType) === qt.element && !gk(g) || (I === "noscript" || I === "noembed" || I === "noframes") && et(CE, g.innerHTML))
      return nn(g), !0;
    if (Tt && g.nodeType === qt.text) {
      const J = bo(g.textContent);
      g.textContent !== J && (Ei(t.removed, {
        element: g.cloneNode()
      }), g.textContent = J);
    }
    return mr(fe.afterSanitizeElements, g, null), !1;
  }, Td = function(g, v, I) {
    if (en[v] || vt && v === "patchsrc" || vt && v === "for" && g !== "label" && g !== "output" || w && (v === "id" || v === "name") && (I in r || I in dk))
      return !1;
    const V = Q[v] || dr.attributeCheck instanceof Function && dr.attributeCheck(v, g);
    if (!(qr && et(ur, v))) {
      if (!(is && et(pi, v))) {
        if (V) {
          if (!Kt[v]) {
            if (!et(ho, fs(I, re, ""))) {
              if (!((v === "src" || v === "xlink:href" || v === "href") && g !== "script" && Kf(I, "data:") === 0 && pr[g])) {
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
          !(vd(g) && (be.tagNameCheck instanceof RegExp && et(be.tagNameCheck, g) || be.tagNameCheck instanceof Function && be.tagNameCheck(g)) && (be.attributeNameCheck instanceof RegExp && et(be.attributeNameCheck, v) || be.attributeNameCheck instanceof Function && be.attributeNameCheck(v, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          v === "is" && be.allowCustomizedBuiltInElements && (be.tagNameCheck instanceof RegExp && et(be.tagNameCheck, I) || be.tagNameCheck instanceof Function && be.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, xk = me({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), vd = function(g) {
    return !xk[ks(g)] && et(ht, g);
  }, Tk = function(g, v, I, V) {
    if (T && typeof d == "object" && typeof d.getAttributeType == "function" && !I)
      switch (d.getAttributeType(g, v)) {
        case "TrustedHTML":
          return Y(V);
        case "TrustedScriptURL":
          return Te(V);
      }
    return V;
  }, vk = function(g, v, I, V) {
    try {
      I ? g.setAttributeNS(I, v, V) : g.setAttribute(v, V), ko(g) ? nn(g) : Uf(t.removed);
    } catch {
      wn(v, g);
    }
  }, Cd = function(g) {
    mr(fe.beforeSanitizeAttributes, g, null);
    const v = g.attributes;
    if (!v || ko(g))
      return;
    Q = kd(fe.uponSanitizeAttribute, Q, Rt, hi);
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
      const ae = v[V], Me = ae.name, Ue = ae.namespaceURI, St = ae.value, _t = De(Me), Ja = St;
      let gt = Me === "value" ? Ja : sE(Ja);
      if (I.attrName = _t, I.attrValue = gt, I.keepAttr = !0, I.forceKeepAttr = void 0, mr(fe.uponSanitizeAttribute, g, I), gt = I.attrValue, F && (_t === "id" || _t === "name") && Kf(gt, z) !== 0 && (wn(Me, g), gt = z + gt), vt && et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, gt)) {
        wn(Me, g);
        continue;
      }
      if (_t === "attributename" && Ff(gt, "href")) {
        wn(Me, g);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          wn(Me, g);
          continue;
        }
        if (!go && et(SE, gt)) {
          wn(Me, g);
          continue;
        }
        if (Tt && (gt = bo(gt)), !Td(J, _t, gt)) {
          wn(Me, g);
          continue;
        }
        gt = Tk(J, _t, Ue, gt), gt !== Ja && vk(g, Me, Ue, gt);
      }
    }
    mr(fe.afterSanitizeAttributes, g, null);
  }, xo = function(g) {
    let v = null;
    const I = bd(g);
    for (mr(fe.beforeSanitizeShadowDOM, g, null); v = I.nextNode(); )
      if (mr(fe.uponSanitizeShadowNode, v, null), xd(v, g), Cd(v), ki(v.content) && xo(v.content), (R ? R(v) : v.nodeType) === qt.element) {
        const J = C(v);
        ki(J) && (Ga(J), xo(J));
      }
    mr(fe.afterSanitizeShadowDOM, g, null);
  }, Ga = function(g) {
    const v = [{
      node: g,
      shadow: null
    }];
    for (; v.length > 0; ) {
      const I = v.pop();
      if (I.shadow) {
        xo(I.shadow);
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
          const St = V.content;
          ki(St) && v.push({
            node: St,
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
    if (za = !K, za && (K = "<!-->"), typeof K != "string" && !as(K) && (K = uE(K), typeof K != "string"))
      throw $n("dirty is not a string, aborting");
    if (!t.isSupported)
      return K;
    tn ? (ve = rn, Q = hi) : Wa(g), (fe.uponSanitizeElement.length > 0 || fe.uponSanitizeAttribute.length > 0) && (ve = dt(ve)), fe.uponSanitizeAttribute.length > 0 && (Q = dt(Q)), t.removed = [];
    const ae = _e && typeof K != "string" && as(K);
    if (ae) {
      yk(K);
      const St = E ? E(K) : K.nodeName;
      if (typeof St == "string") {
        const _t = De(St);
        if (!ve[_t] || Zr[_t])
          throw yo(K), $n("root node is forbidden and cannot be sanitized in-place");
      }
      if (ko(K))
        throw yo(K), $n("root node is clobbered and cannot be sanitized in-place");
      try {
        Ga(K);
      } catch (_t) {
        throw yo(K), _t;
      }
    } else if (as(K))
      v = yd("<!---->"), I = v.ownerDocument.importNode(K, !0), I.nodeType === qt.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? v = I : v.appendChild(I), Ga(I);
    else {
      if (!fr && !Tt && !ut && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return T && Pn ? Y(K) : K;
      if (v = yd(K), !v)
        return fr ? null : Pn ? $ : "";
    }
    v && gi && nn(v.firstChild);
    const Me = ae ? K : v;
    try {
      const St = bd(Me);
      for (; V = St.nextNode(); )
        xd(V, Me), Cd(V), ki(V.content) && xo(V.content);
    } catch (St) {
      throw ae && (yo(K), Mi(t.removed, (_t) => {
        _t.element && os(_t.element);
      })), St;
    }
    if (ae)
      return Mi(t.removed, (St) => {
        St.element && os(St.element);
      }), Tt && Ha(K), K;
    if (fr) {
      if (Tt && Ha(v), mi)
        for (J = oe.call(v.ownerDocument); v.firstChild; )
          J.appendChild(v.firstChild);
      else
        J = v;
      return (Q.shadowroot || Q.shadowrootmode) && (J = Xe.call(n, J, !0)), J;
    }
    let Ue = ut ? v.outerHTML : v.innerHTML;
    return ut && ve["!doctype"] && v.ownerDocument && v.ownerDocument.doctype && v.ownerDocument.doctype.name && et(TE, v.ownerDocument.doctype.name) && (Ue = "<!DOCTYPE " + v.ownerDocument.doctype.name + `>
` + Ue), Tt && (Ue = bo(Ue)), T && Pn ? Y(Ue) : Ue;
  }, t.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wa(K), tn = !0, rn = ve, hi = Q;
  }, t.clearConfig = function() {
    bi = null, tn = !1, rn = null, hi = null, T = W, $ = "";
  }, t.isValidAttribute = function(K, g, v) {
    bi || Wa({});
    const I = De(K), V = De(g);
    return Td(I, V, v);
  }, t.addHook = function(K, g) {
    typeof g == "function" && tt(fe, K) && Ei(fe[K], g);
  }, t.removeHook = function(K, g) {
    if (tt(fe, K)) {
      if (g !== void 0) {
        const v = nE(fe[K], g);
        return v === -1 ? void 0 : iE(fe[K], v, 1)[0];
      }
      return Uf(fe[K]);
    }
  }, t.removeHooks = function(K) {
    tt(fe, K) && (fe[K] = []);
  }, t.removeAllHooks = function() {
    fe = Xf();
  }, t;
}
var EE = Ym();
function PE({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = Z(void 0), [n, i] = he(void 0), s = de((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const h = jM(p);
      if (!h)
        return !1;
      const m = N();
      return e === "protected" ? m && VM(m, h) ? (p.preventDefault(), !0) : !1 : h !== "deleteBackward" && h !== "deleteForward" ? !1 : a(h, p);
    }, a = (p, h) => {
      const m = N(), y = r.current;
      if (y && m && If(m, y)) {
        if (s(void 0), h.preventDefault(), p !== y.intent)
          return !0;
        const C = H(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (C) {
            const M = C.getParent(), R = C.getPreviousSibling(), E = C.getNextSibling();
            C.remove(), R ? Wm(R) : E && S(E) ? E.select(0, 0) : M?.selectStart();
          }
        } else y.kind === "selection" ? A(m) && m.removeText() : Re(C) && HM(C);
        return !0;
      }
      if (!m)
        return !1;
      const x = WM(m, p);
      if (x) {
        if (x.kind === "verse") {
          const C = ch();
          C.add(x.node.getKey()), pn(C);
        } else {
          const C = Js();
          C.anchor.set(x.node.getKey(), 0, "element"), C.focus.set(x.node.getKey(), x.node.getChildrenSize(), "element"), pn(C);
        }
        return s({ key: x.node.getKey(), kind: x.kind, intent: p }), h.preventDefault(), !0;
      }
      if (A(m) && !m.isCollapsed() && Pu(m)) {
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
      return !h || !dc(h) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, h) => {
      if (!p)
        return !1;
      const m = EE.sanitize(p), y = new DOMParser().parseFromString(m, "text/html"), x = GM(ox(t, y)), C = N();
      return A(C) && C.insertNodes(x), h.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && dc(h) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const h = N();
      return h && dc(h) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        If(N(), p) || s(void 0);
      });
    };
    return nt(t.registerCommand(Wr, o, Ke), t.registerCommand(Vn, c, Ke), t.registerCommand(Lr, u, Ke), t.registerCommand(Fk, c, Ke), t.registerCommand(Pl, d, Ke), t.registerCommand(El, c, Ke), t.registerUpdateListener(f));
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
const UO = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function AE({ textDirection: e }) {
  const [t] = le();
  return wE(t, e), null;
}
function wE(e, t) {
  j(() => (Qf(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Qf(e, t);
  })), [e, t]);
}
function Qf(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function OE() {
  const [e] = le();
  return NE(e), null;
}
function NE(e) {
  j(() => {
    if (!e.hasNodes([Se, wt, $e, Ve, mt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return nt(
      e.registerNodeTransform(Ve, RE),
      e.registerNodeTransform(Ve, (t) => qE(t, e)),
      e.registerNodeTransform(mt, Zf),
      e.registerNodeTransform(wt, Zf),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(mt, (t) => {
        Us(Br("va"), t), Us(Br("vp"), t);
      })
    );
  }, [e]);
}
function RE(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || U(r) || D(n) || D(r) || pe(n) || pe(r) || Oe(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
  // splits leave runs as multiple nodes, e.g. a segmented composition node that Lexical
  // won't merge). No structural space belongs inside a run — inserting one corrupts the
  // word itself (#513, complex scripts worst). This also protects a space-only node from
  // the placeholder cleanup below: between two text nodes it is real content.
  S(r) || // An optbreak (`//`) — like a ref — is an inline UnknownNode carrying SIGNIFICANT surrounding
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
  ye(r) && su(e);
}
function qE(e, t) {
  const r = e.getParent();
  !Oe(r) || !e.isAttached() || nm(t, e.getKey()) && r.insertAfter(e);
}
function Zf(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; pe(t); )
    t = t.getLastChild();
  (D(t) || S(t) && pe(t.getParent()) && !$E(t)) && e.insertBefore(xe(" "));
}
function $E(e) {
  const t = e.getTextContent();
  return t.endsWith(" ") || t.endsWith(q);
}
function Au(e) {
  if (!U(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Hl(n)) ? void 0 : e;
}
function IE(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (O(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function LE() {
  const e = N();
  if (!(!A(e) || !e.isCollapsed()))
    return Au(IE(e.anchor));
}
function DE(e) {
  const t = N();
  let r;
  return A(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Xm(e.target)), r ? Au(rt(r, U)) : void 0;
}
function Xm(e) {
  const t = Kk(e)?.anchorNode;
  if (sh(t))
    return Ys(t) ?? void 0;
}
function UE(e) {
  if (N())
    return;
  const t = Xm(e);
  return t ? Au(rt(t, U)) : void 0;
}
function FE() {
  const [e] = le(), t = Km(LE);
  return j(() => {
    const r = (n) => {
      t(n) && Wn(Ns);
    };
    return nt(e.registerCommand(vr, () => {
      const n = UE(e.getRootElement());
      return n && r(n), !1;
    }, jn), e.registerCommand(ya, (n) => {
      const i = DE(n);
      return i && r(i), !1;
    }, jn));
  }, [e, t]), null;
}
function KE({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = p_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(f_, { trigger: e, items: i });
}
function zE({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Fe(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(VE, { trigger: e, harness: i }) : _(KE, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const BE = [" ", "*"];
function jE(e, t) {
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
function VE({ trigger: e, harness: t }) {
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
  j(() => nt(r.registerCommand(Wr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), zk(() => {
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
  }, Ke), r.registerCommand(lh, (f) => {
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
  }, []), u = de((f) => {
    const { markerMenuItem: p, applyOpts: h } = f;
    t.apply(p, h);
  }, [t]), d = Fe(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    jE(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(Sm, { isOpen: !0, children: ({ placement: f }) => _(
    Em,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? BE : void 0 },
    n.session
  ) });
}
function Qm(e) {
  return e.replaceAll(q, "~").replace(/ {2,}/g, (r) => q.repeat(r.length));
}
function WE(e) {
  return e.replaceAll(q, " ").replaceAll("~", q);
}
let sa;
function HE(e) {
  e && (sa = e);
}
function Zm(e) {
  return Ot(e);
}
function GE(e, t) {
  return e.isEmpty() ? rh : ey(e.toJSON(), t);
}
function ey(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && va(r[0]) && (!r[0].children || r[0].children.length === 0))
    return rh;
  if (r.some(fC)) {
    sa?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = ty(r), i = tr(n, t);
  return i ? { type: Fr, version: Ur, content: i } : void 0;
}
function JE(e, t) {
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
function YE(e) {
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
function XE(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Sg(r, a, c), Ie({
    type: Ut.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function QE(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Sg(t, o, a), Ie({
    type: mt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function ZE(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Zm(r) && t) {
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
function e1(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ie({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function t1(e, t) {
  const { unknownAttributes: r } = e;
  return Ie({ type: Ig, ...r, content: t });
}
function r1(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ie({ type: Ug, marker: r, ...n, content: t });
}
function n1(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ie({
    type: zg,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function i1(e, t) {
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
    ...zh({ sid: n, eid: i, ...s }, o)
  });
}
function s1(e) {
  return e.text;
}
function o1(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ie({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function a1(e) {
  const { marker: t } = e;
  return {
    type: Go,
    marker: t === "" ? void 0 : t
  };
}
function ep(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function c1(e, t, r, n, i) {
  const s = ir.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = wi({
      type: s,
      marker: $i,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = wi({
      type: s,
      marker: Hn,
      sid: l
    });
    i.push(u);
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
  (!n || !to(n)) && t.forEach((l) => {
    const u = wi({
      type: s,
      marker: $i,
      eid: l
    });
    i.push(u);
  });
}
function l1(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && to(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return eo(i) && i.markerSyntax === "opening";
}
function u1(e) {
  let t = e;
  for (; to(t); ) t = t.children[0];
  return t;
}
function d1(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!eo(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = u1(e[r]);
  if (Xn(n) && n.text === Lt(t))
    return n;
}
function tr(e, t, r, n = !1, i) {
  const s = [];
  let o, a = [];
  return e.forEach((c, l) => {
    const u = c, d = c, f = c, p = c, h = c, m = c, y = c, x = c;
    switch (c.type) {
      case Jt.getType():
        s.push(
          JE(
            u,
            tr(u.children, t)
          )
        );
        break;
      case Ar.getType():
        s.push(YE(c));
        break;
      case Ut.getType():
        s.push(
          XE(
            d,
            tr(d.children, t)
          )
        );
        break;
      case wt.getType():
      case mt.getType():
        s.push(QE(c));
        break;
      case Se.getType():
        s.push(
          ZE(
            f,
            tr(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case it.getType():
        s.push(
          e1(
            p,
            tr(p.children, t)
          )
        );
        break;
      case ai.getType():
        s.push(
          t1(
            c,
            tr(c.children, t)
          )
        );
        break;
      case ci.getType():
        s.push(
          r1(
            c,
            tr(c.children, t)
          )
        );
        break;
      case li.getType():
        s.push(
          n1(
            c,
            tr(c.children, t)
          )
        );
        break;
      case $e.getType():
        s.push(
          i1(
            h,
            tr(
              h.children,
              t,
              d1(h.children, h.caller)
            )
          )
        );
        break;
      case Gr.getType():
      case Yr.getType():
      case nr.getType():
      case uh.getType():
      case Er.getType():
        break;
      case Qe.getType():
        if (o = tr(
          y.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const C = y.typedIDs[un];
          if (C) {
            const M = e[l + 1];
            c1(o, C, a, M, s), a = M && to(M) ? C : [];
          } else {
            const M = o.shift();
            M && (typeof M == "string" ? ep(s, M) : s.push(M)), o.length > 0 && s.push(...o);
          }
        }
        break;
      case ir.getType():
        s.push(wi(c));
        break;
      case Ve.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !so(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== q && !m.text.startsWith(Ol) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[zn]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let C = s1(m);
          Zm(t) && (l1(e, l, i, n) && C.startsWith(q) && (C = C.slice(1)), C = WE(ov(C))), ep(s, C);
        }
        break;
      case oi.getType():
        s.push(
          o1(
            x,
            tr(x.children, t)
          )
        );
        break;
      case Qr.getType():
        s.push(a1(c));
        break;
      case Ji.getType():
        sa?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        sa?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function ty(e) {
  const t = e.findIndex((r) => va(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = ty(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const hs = {
  initialize: HE,
  deserializeEditorState: GE
}, f1 = /^sd\d*$/, p1 = /* @__PURE__ */ new Set([
  ...Object.entries(Ec).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !f1.test(e)
  ).map(([e]) => e),
  "qa"
]);
function h1(e, t) {
  const r = [];
  let n;
  for (const [i, s] of e.entries()) {
    if (hg(s) || xg(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (!pv(s)) {
      t && oa(s) && t.warn(
        `Verses inside a '${s.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(s) : r.push(s);
      continue;
    }
    if (Wl(s) && p1.has(s.marker) && !oa(s)) {
      n = void 0, r.push(s);
      continue;
    }
    if (s.children.length === 0) {
      n ? n.children.push(s) : r.push(s);
      continue;
    }
    ry(s.children, t).forEach((o) => {
      const a = g1(s, o.nodes, i);
      if (!o.verse) {
        if (!a) return;
        n ? n.children.push(a) : r.push(a);
        return;
      }
      n = m1(o.verse), r.push(n), a && n.children.push(a);
    });
  }
  return r;
}
function ry(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (ny(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (to(i)) {
      const s = ry(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(tp(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [tp(i, c.nodes)] });
      });
      return;
    }
    t && oa(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function tp(e, t) {
  return { ...e, children: t };
}
function ny(e) {
  return em(e) && e.number !== "";
}
function oa(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => ny(r) || oa(r)) : !1;
}
function g1(e, t, r) {
  if (t.length !== 0)
    return {
      ...e,
      children: t,
      [zn]: { ...e[zn], [Yg.key]: r }
    };
}
function m1(e) {
  return {
    type: Jo,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Xg
  };
}
const rp = sy([]), y1 = {
  type: uh.getType(),
  version: 1
};
let wu = [], ne, ti, iy, At;
function b1(e, t) {
  wu = [], T1(e), v1(t);
}
function k1(e = 0) {
}
function x1(e, t) {
  ne = t ?? Oa();
  let r;
  return e ? (e.type !== Fr && At?.warn(`This USJ type '${e.type}' didn't match the expected type '${Fr}'.`), e.version !== Ur && At?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${Ur}'.`
  ), e.content.length > 0 ? (r = rl(an(e.content)), Ks(ne) && (r = h1(r, At))) : r = [rp]) : r = [rp], iy?.(wu), {
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
function T1(e) {
  e && (ti = e), e?.addMissingComments && (iy = e.addMissingComments);
}
function v1(e) {
  e && (At = e);
}
function Ou() {
  return Ot(ne);
}
function C1(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function S1(e) {
  let { marker: t } = e;
  t !== $s && At?.warn(`Unexpected book marker '${t}'!`), t = t ?? $s;
  const { code: r } = e;
  (!r || !Jt.isValidBookCode(r)) && At?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ne?.markerMode === "editable" || ne?.markerMode === "visible" ? n.push(
    Et("marker", we(t) + " " + r + q)
  ) : ne?.hasGutterParaMarkers && n.push(Et("marker", we(t) + q, !0));
  const i = C1(e.content);
  i && n.push(pt(Ou() ? Qm(i) : i));
  const s = Be(e, QT);
  return Ie({
    type: Jt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: fg
  });
}
function _1(e) {
  let { marker: t } = e;
  t !== Wo && At?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Wo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Be(e, hT);
  let a;
  ne?.markerMode === "visible" && (a = !0);
  const c = [
    pt(Wt(t, r) ?? "")
  ];
  return ne?.markerMode === "editable" && z1(i, s, c), ne?.markerMode === "editable" ? Ie({
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
    version: Yh
  }) : Ie({
    type: Ar.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: gg
  });
}
function M1(e) {
  let { marker: t } = e;
  t !== Vo && At?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Vo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (vS(ne) ?? wt).getType(), c = ne?.markerMode === "editable" ? Uh : Zg;
  let l, u;
  ne?.markerMode === "editable" ? l = Wt(t, r) : ne?.markerMode === "visible" && (u = !0);
  const d = Be(e, lT);
  return Ie({
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
function E1(e, t = [], r = !1) {
  let { marker: n } = e;
  Se.isValidMarker(n, ti?.extraValidMarkers) || At?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ne?.markerMode === "editable") {
    const [a] = t;
    Xn(a) ? a.text = q + a.text : a && t.unshift(pt(q));
  }
  t.length === 0 && t.push(pt(Gt)), Zc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Be(e, sT);
  return s || D1(n, o, i), s || el(e.marker ?? "", i, !1, r), Ie({
    type: Se.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Dh
  });
}
function sy(e) {
  return {
    type: gn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Qh
  };
}
function P1(e, t = []) {
  let { marker: r } = e;
  it.isValidMarker(r, ti?.extraValidMarkers) || At?.warn(`Unexpected para marker '${r}'!`), r = r ?? kr;
  const n = [];
  if (Yi(ne) && (ne?.markerMode === "editable" ? n.push(
    bt(r),
    pt(q, Pr, "token")
  ) : (ne?.markerMode === "visible" || ne?.hasGutterParaMarkers) && n.push(
    Et(
      "marker",
      we(r) + q,
      ne?.hasGutterParaMarkers
    )
  )), n.push(...t), Ou()) {
    const s = n.find(
      (o) => !eo(o) && !(Xn(o) && o.text === q)
    );
    Xn(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => q.repeat(o.length)));
  }
  const i = Be(e, nv);
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
    version: bg
  });
}
function Nu() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function A1(e, t = []) {
  const r = Be(e, Rv);
  return Ie({
    ...Nu(),
    type: ai.getType(),
    unknownAttributes: r,
    children: t,
    version: Lg
  });
}
function w1(e, t = []) {
  const r = Be(e, Iv), n = e.marker ?? Ic, i = [];
  return ne?.markerMode === "editable" ? i.push(
    bt(n),
    pt(q, Pr, "token")
  ) : (ne?.markerMode === "visible" || ne?.hasGutterParaMarkers) && i.push(
    Et(
      "marker",
      we(n) + q,
      ne?.hasGutterParaMarkers
    )
  ), i.push(...t), Ie({
    ...Nu(),
    type: ci.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Fg
  });
}
function O1(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Lc;
  ne?.markerMode === "editable" ? s.push(
    bt(o),
    pt(q, Pr, "token")
  ) : (ne?.markerMode === "visible" || ne?.hasGutterParaMarkers) && s.push(
    Et(
      "marker",
      we(o) + q,
      ne?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Be(
    e,
    Dv
  );
  return Ie({
    ...Nu(),
    type: li.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: Bg
  });
}
function N1(e, t) {
  const r = kv(t);
  let n = () => {
  };
  return ti?.noteCallerOnClick && (n = ti.noteCallerOnClick), Ie({
    type: nr.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: cm
  });
}
function R1(e, t) {
  let { marker: r } = e;
  $e.isValidMarker(r, ti?.extraValidMarkers) || At?.warn(`Unexpected note marker '${r}'!`), r = r ?? Il;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Tu(ne?.noteMode), a = Be(e, Mx), c = ne?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ne?.markerMode === "editable" ? (l = bt(r, "opening", !1, c), s || (u = bt(r, "closing"))) : ne?.markerMode === "visible" && (l = Et("marker", we(r) + " "), s || (u = Et("marker", He(r))));
  const d = [];
  let f;
  if (l && d.push(l), ne?.markerMode === "editable" && !o)
    f = pt(Lt(i), void 0, c), d.push(f), K1(n, d), d.push(...t);
  else {
    const p = pt(q, Pr, "token");
    f = N1(i, t), d.push(f, p, ...t.flatMap(q1(p)));
  }
  return u && d.push(u), Ie({
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
    version: Ph
  });
}
function q1(e) {
  return (t) => sg(t) ? [t] : [t, e];
}
function $1(e) {
  let { marker: t } = e;
  (!t || !ir.isValidMarker(t, ti?.extraValidMarkers)) && At?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Be(e, $l), s = Bh(e);
  return Ie({
    type: ir.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: _h
  });
}
function np(e, t = []) {
  return {
    type: Qe.getType(),
    typedIDs: { [un]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function I1(e, t) {
  const { marker: r } = e, n = e.type, i = Be(e, CT), s = [];
  if (ne?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = Sa(
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
    version: og
  });
}
function L1(e) {
  return {
    type: Qr.getType(),
    marker: e,
    text: Cs(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ne?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: qg
  };
}
function bt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Er.getType(),
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
    type: Yr.getType(),
    text: t,
    textType: e,
    version: ig
  };
  return r && (n[zn] = { [zl.key]: !0 }), n;
}
function zs(e, t) {
  return {
    type: Gr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: qh
  };
}
function Zc(e, t, r = !1) {
  ne?.markerMode === "editable" ? t.push(bt(e, "opening", r)) : ne?.markerMode === "visible" && t.push(Et("marker", we(e, r)));
}
function el(e, t, r = !1, n = !1) {
  ne?.markerMode === "editable" ? r ? t.push(bt("", "selfClosing")) : t.push(bt(e, "closing", n)) : ne?.markerMode === "visible" && t.push(
    Et(
      "marker",
      r ? He("") : He(e, n)
    )
  );
}
function D1(e, t, r) {
  if (ne?.markerMode !== "editable" || !t) return;
  const n = br(t, Qs(e));
  n && r.push(pt(n, "attribute"));
}
function ip(e, t) {
  if (e.type !== "ms" || ne?.markerMode !== "editable" && ne?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Be(e, $l), o = jh(
    n,
    i,
    s,
    Bh(e)
  ), a = br(o, Zs(r ?? ""));
  if (!a) return;
  const c = q + a;
  ne?.markerMode === "editable" ? t.push(pt(c, "attribute")) : t.push(Et("attribute", c));
}
function U1(e, t) {
  const r = e.marker ?? "";
  if (ne?.markerMode === "editable") {
    const n = [];
    Zc(r, n), ip(e, n), el(r, n, !0), t.push(zs("milestone", n));
  } else
    Zc(r, t), ip(e, t), el(r, t, !0);
}
function sp(e, t, r) {
  t !== void 0 && r.push(
    zs(e, [
      bt(e, "opening"),
      pt(q + t, "attribute"),
      bt(e, "closing")
    ])
  );
}
function F1(e, t) {
  ne?.markerMode === "editable" && (sp("va", e.altnumber, t), sp("vp", e.pubnumber, t));
}
function K1(e, t) {
  e !== void 0 && t.push(
    zs("cat", [
      bt("cat", "opening"),
      pt(q + e, "attribute"),
      bt("cat", "closing")
    ])
  );
}
function z1(e, t, r) {
  e !== void 0 && r.push(
    zs("ca", [
      bt("ca", "opening"),
      pt(q + e, "attribute"),
      bt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    zs("cp", [
      bt("cp", "opening"),
      pt(q + t, "attribute")
    ])
  );
}
function op(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function B1(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function ap(e, t) {
  t.marker === Hn && t.sid !== void 0 && e.push(t.sid), t.marker === $i && t.eid !== void 0 && B1(e, t.eid);
}
function tl(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [np(o, [...n])] : o, c = e[i];
  ap(n, c);
  const l = tl(
    e.slice(i + 1, s),
    op(t, i + 1),
    c.marker === Hn,
    n
  ), u = np(l, [...n]), d = e[s];
  ap(n, d);
  const f = tl(
    e.slice(s + 1),
    op(t, s + 1),
    d.marker === Hn,
    n
  );
  return [...a, u, ...f];
}
function an(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(pt(Ou() ? Qm(i) : i));
    else if (!i.type)
      At?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Jt.getType():
          n.push(S1(i));
          break;
        case Ut.getType():
          n.push(_1(i));
          break;
        case mt.getType():
          ne?.hasSpacing || n.push(y1), n.push(M1(i)), F1(i, n);
          break;
        case Se.getType():
          n.push(
            E1(i, an(i.content, !0), t)
          );
          break;
        case it.getType():
          n.push(P1(i, an(i.content)));
          break;
        case $e.getType():
          n.push(R1(i, an(i.content)));
          break;
        case ir.getType():
          Mh(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && wu?.push(i.sid)), n.push($1(i)), U1(i, n);
          break;
        case Qr.getType():
          n.push(L1(i.marker ?? ""));
          break;
        case Ig:
          n.push(A1(i, an(i.content)));
          break;
        case Ug:
          n.push(w1(i, an(i.content)));
          break;
        case zg:
          n.push(O1(i, an(i.content)));
          break;
        default:
          At?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(I1(i, an(i.content)));
      }
  }), tl(n, r);
}
function rl(e) {
  const t = e.findIndex(
    (n) => hg(n) || xg(n) || Wl(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    $v(n)
  );
  if (t >= 0) {
    const n = rl(e.slice(0, t)), i = e[t], s = rl(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || em(n)))
    return [sy(e)];
  return e;
}
const Tn = {
  initialize: b1,
  reset: k1,
  serializeEditorState: x1
};
function oy(e) {
  if (e && !P(e)) {
    if (S(e)) return e;
    if (O(e))
      for (const t of e.getChildren()) {
        const r = oy(t);
        if (r) return r;
      }
  }
}
function j1() {
  const e = N();
  if (!A(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((S(t) && !P(t) ? Qn(t) : void 0) && S(t)) {
      const i = xe(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      Ui(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = oy(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(q) ? q : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return S(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of ay(e)) {
    if (!Qn(t)) continue;
    Ui(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(q) && r.setTextContent(n.slice(q.length));
  }
  return !0;
}
function ay(e) {
  const [t, r] = nh(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!S(a) || P(a) || se(a, ce) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function V1() {
  const e = N();
  if (!A(e)) return !1;
  const t = e.focus.getNode();
  return Qn(t) ? Re(eu(t)) : !1;
}
function cy() {
  let e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !nu(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = N(), !A(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!S(t) || P(t) || !Qn(t)) return !1;
  const r = eu(t);
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
  return D(a) ? tu(a) : o.select(0, 0), !0;
}
const ly = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Tg(ge().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = Jl(e), r = au(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Tv(0, o);
        const a = _C(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Pg(c) && Yl(parseInt(n, 10), c);
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
function nl(e, t) {
  return $e.isValidMarker(e, t) || !!ly[e] || it.isValidMarker(e, t) || Se.isValidMarker(e, t);
}
function W1(e, t) {
  return Se.isNoteContentMarker(e) ? !1 : Se.isValidMarker(e, t);
}
function uy(e, t, r, n, i, s) {
  const o = vm(
    e,
    void 0,
    void 0,
    t,
    n ?? Oa(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function il(e, t, r, n, i, s, o) {
  if ($e.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = uy(
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
  const a = Q1(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = N();
      A(u) && (Jg(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = tf(d, Tn, r), h = Xa(p);
      if (A(u)) {
        const m = u.anchor.getNode(), y = m.getParent(), x = Qn(m), C = u.anchor.key === u.focus.key;
        if (D(h) && x && C && !yc(h, o))
          J1(
            u,
            h,
            m,
            r?.markerMode === "editable"
          );
        else if (D(h) && !C && !yc(h, o) && Y1(u))
          X1(u, h, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          Z1(
            u,
            () => Xa(p)
          );
        else if (O(h) && !h.isInline()) {
          const M = u.insertParagraph();
          if (M) {
            const R = M.getChildren();
            h.append(...R), M.replace(h), Re(h) && Qi(h) || h.selectStart();
          }
        } else if (D(h) && S(m) && !P(m) && D(m.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        yc(h, o)) {
          const M = m.getParent();
          if (D(M)) {
            const R = u.anchor.offset;
            if (R === 0) m.insertBefore(h);
            else if (R >= m.getTextContentSize()) m.insertAfter(h);
            else {
              const [L] = m.splitText(R);
              L.insertAfter(h);
            }
            h.getChildren().forEach((L) => {
              P(L) && L.setNested(!0);
            });
            const E = h.getChildren().find((L) => S(L) && !P(L));
            E && S(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : h.selectEnd();
          }
        } else if (S(m) && !P(m) && u.isCollapsed() && (U(y) || D(y) && U(y.getParent()))) {
          const M = D(y) ? y : void 0, R = M ? H1(m, u.anchor.offset) : [];
          let L = (M ?? m).insertAfter(h);
          if (wr(h)) {
            const T = {
              ...r || Oa(),
              markerMode: "hidden"
            }, $ = tf(
              d,
              Tn,
              T
            ), W = Xa($);
            L = L.insertAfter(W);
          }
          if (R.length > 0 && M) {
            const T = aa(M).append(...R);
            L.insertAfter(T), M.isEmpty() && M.remove();
          } else S(L.getNextSibling()) || L.insertAfter(xe(q));
          O(L) && L.selectEnd();
        } else if (u.insertNodes([h]), lP(h), f) {
          const M = ch();
          M.add(h.getKey()), pn(M);
        } else if (D(h)) {
          const M = h.getChildren().find((R) => S(R) && !P(R));
          M && S(M) ? M.select(
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
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function H1(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function yc(e, t) {
  return ((t ?? Yo).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function G1(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(ft(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function J1(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && D(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !S(r)) {
    const o = e.anchor.offset;
    if (S(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else S(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
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
    i.insertBefore(t), S(i) && !i.getTextContent().startsWith(q) && i.setTextContent(q + i.getTextContent());
    const o = t.getChildren().find((a) => S(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => S(o) && !P(o));
  S(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function Y1(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || D(n)) continue;
    if (!S(n) || n.getType() !== Ve.getType() || se(n, ce) === "attribute") return !1;
    const i = eu(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Qn(n) && (r = !0);
  }
  return r;
}
function X1(e, t, r) {
  const n = ay(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Qn(a)) return;
    Ui(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(q) && c.setTextContent(l.slice(q.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(q) || i.setTextContent(q + i.getTextContent());
  const s = t.getChildren().find((a) => S(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function Q1(e, t) {
  let r = ly[e];
  return r || (it.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: it.getType(), marker: e, content: [] }] })
  } : Se.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: Se.getType(), marker: e };
      return (Se.isValidFootnoteMarker(e) || Se.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function Z1(e, t) {
  const r = e.getNodes(), [n, i] = Bi(e);
  let s;
  r.forEach((o, a) => {
    if (O(s) && s.isParentOf(o))
      return;
    const c = dy(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((d) => P(d) && d.getMarkerSyntax() === "opening") && G1(s, D(s.getParent()))), tP(c, s, l);
  }), (S(s) || O(s)) && s.selectEnd();
}
function Bi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Ru(e) {
  return pe(e) || U(e) || U(e.getParent());
}
function dy(e, t, r, n, i) {
  if (!Ru(e)) {
    if (S(e))
      return eP(e, t, r, n, i);
    if (O(e) && e.isInline())
      return e;
  }
}
function eP(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function tP(e, t, r) {
  if (S(t)) {
    const n = sl(e, t);
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
    sl(e, t), r && D(t) && t.getChildren().some((s) => P(s)) && S(e) && !P(e) && !e.getTextContent().startsWith(q) && e.setTextContent(q + e.getTextContent());
  }
}
function sl(e, t) {
  let r = e.getTextContent();
  if (S(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    su(n), S(n) || t.insertBefore(xe(" "));
  }
  return r;
}
function fy(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = ri(u, t);
    if (!f) return !1;
    const p = S(u) ? u.getTextContentSize() : 0;
    if (cp(f, r), S(u) && u.isAttached()) {
      const h = u.getTextContentSize(), m = Math.max(p - h, 0), y = Math.max(0, Math.min(d - m, h)), x = N();
      A(x) && x.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = Bi(e);
  if (!$u(n, t, s, o)) return !1;
  const a = qu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = ri(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = my(d, a);
    f && (cp(f, r), l = !0);
  }), yy(a, i), l;
}
function cp(e, t) {
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
    S(n) && i.startsWith(q) && n.setTextContent(i.slice(q.length));
  }), Sc(e);
}
function qu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = dy(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    S(o) && n.push(o);
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
function py(e) {
  const t = rt(
    e,
    (r) => U(r) || Re(r)
  );
  return U(t);
}
function hy(e) {
  return e.filter(
    (t) => !Ru(t) && (S(t) || O(t) && t.isInline())
  );
}
function rP(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!S(i) || Ru(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function nP(e, t, r) {
  return e.getChildren().some(
    (n) => O(n) && t.some((i) => n.isParentOf(i)) && !gy(n, r)
  );
}
function $u(e, t, r, n, i) {
  const s = hy(e), o = rP(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = ri(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !nP(l, s, o);
  });
}
function gy(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Xt(r));
}
function my(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (O(u) && t.some((d) => u.isParentOf(d))) {
      if (!gy(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Xt(n[s - 1]) && (s -= 1), o < n.length - 1 && Xt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(aa(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(aa(e).append(...c)), e;
}
function aa(e) {
  return Bk(e);
}
function yy(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!A(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function iP(e, t, r) {
  if (e.isCollapsed()) {
    const l = ri(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Fd(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = Bi(e);
  if (!$u(n, r, i, s, t)) return !1;
  const o = qu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = ri(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = my(u, o);
    d && (Fd(d, t), c = !0);
  }), c;
}
function sP(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = Bi(e);
  if (!!!i?.some(
    (y) => $u(s, y, o, a)
  ) && !oP(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const x = N();
    A(x) && fy(x, y, n) && (l = !0);
  });
  const u = N();
  if (!A(u)) return l;
  const d = u.isBackward(), [f, p] = Bi(u), h = qu(
    u.getNodes(),
    f,
    p
  );
  if (h.length === 0) return l;
  const m = h.filter(
    (y) => !py(y) && !ri(y, t)
  );
  return m.length > 0 && (aP(m).forEach((y) => cP(y, t)), l = !0), yy(h, d), l;
}
function oP(e, t) {
  return hy(e).some(
    (r) => !py(r) && !ri(r, t)
  );
}
function aP(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function cP(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? aa(i) : Kr(t);
  e[0].insertBefore(s), s.append(...e), i === r || sl(e[0], s);
}
function lP(e) {
  ye(e) && (su(e.getPreviousSibling()), rm(e.getNextSibling()));
}
const by = {
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
}, lp = "psc-active-text", Co = "psc-empty-text";
function uP({ viewOptions: e }) {
  const [t] = le(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(lp), r.current = o, o && t.getElementByKey(o)?.classList.add(lp);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        ya,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Co}`);
          if (!c) return !1;
          const l = Ys(c);
          if (!ye(l)) return !1;
          const u = l.getParent();
          if (!O(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        $t
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = bc(), f = dP(), p = [], h = [];
          return ge().getChildren().forEach((m) => {
            if (!O(m)) return;
            const { emptyKeys: y, nonEmptyKeys: x } = pP(m);
            p.push(...y), h.push(...x);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: h };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Co) : t.getElementByKey(d)?.classList.add(Co);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Co));
      }),
      t.registerCommand(
        Al,
        () => (i(void 0), !1),
        $t
      ),
      t.registerCommand(
        jk,
        () => {
          const o = t.getEditorState().read(bc);
          return o !== r.current && i(o), !1;
        },
        $t
      )
    ];
    return i(t.getEditorState().read(bc)), nt(...s);
  }, [t, n]), null;
}
function bc() {
  return fP(N() ?? void 0)?.getKey();
}
function dP() {
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
function fP(e) {
  if (A(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function pP(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ye(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ye(c)) break;
      if (!(kt(c) || P(c)) && c.getTextContent().replaceAll(Fo, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const hP = /^\+/;
function Iu(e, t) {
  const r = t.replace(hP, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function ky(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function xy(e, t) {
  return ky(e, t) !== void 0;
}
function ol(e, t) {
  const r = ky(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ca(e, t, r) {
  const n = O(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function gP(e, t, r, n, i) {
  const s = Iu(n, t);
  if (!s) {
    ca(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ca(e, "invalid", i);
}
function Es(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || gP(s, o, t, r, n), Es(s, t, r, n, i || o === "xq");
    } else if (ye(s)) {
      if (i) continue;
      const o = Iu(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else U(s) ? Es(s, s.getMarker(), r, n, i) : Oe(s) || O(s) && Es(s, t, r, n, i);
}
function mP(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Iu(e, a);
    if (!c) {
      ca(o, "unknown", r), ol(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    ol(n, l) || ca(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of ge().getChildren())
    Oe(o) || (ct(o) || ze(o) ? i(o, o.getMarker()) : ie(o) ? (i(o, o.getMarker()), s(o) && Es(o, o.getMarker(), e, r, !1)) : O(o) && s(o) && Es(o, "p", e, r, !1));
  return r;
}
function yP(e) {
  return !!e?.includes("(basic)");
}
function bP(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Ty(e, t) {
  return !e.startsWith("zpa") && e !== "c" && nl(e, t);
}
function Lu(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function vy(e, t) {
  const r = [];
  for (const n of t) {
    const i = Lu(e, n);
    i && ol(r, i);
  }
  return r;
}
function wo(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: bP(e.description),
    isBasic: yP(e.description)
  };
}
function kP(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function al(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : kP(e.marker, t.marker);
}
function cl(e, t, r) {
  if (t.noteMarker) return [];
  const n = vy(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Ty(i.marker, r)
  ).filter((i) => {
    const s = Lu(e, i.marker);
    return s !== void 0 && xy(n, s);
  }).map((i) => wo(i, "paragraph")).sort(al);
}
function xP(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Ty(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => wo(c, "character")).sort(al);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => wo(c, "character")),
    ...a.map((c) => wo(c, "note"))
  ].sort(al);
}
function TP(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function vP(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function CP(e, t, r) {
  return [
    ...TP(e, t.openCharMarkers),
    ...xP(e, t, r)
  ].sort(vP);
}
function SP(e, t, r) {
  if (t.source === "paragraph") return cl(e, t, r);
  const n = CP(e, t, r);
  return n.length > 0 ? n : cl(e, t, r);
}
function _P(e, t, r) {
  const n = cl(e, t, r), i = vy(e, t.previousParaMarkers), s = Lu(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && xy(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const di = String.raw`\w-`, Cy = "a-z0-9", MP = `[a-z][${Cy}]*`, EP = new RegExp(
  String.raw`^\\(\+?[${di}]+)[ \u00A0]$`
), Sy = new RegExp(String.raw`^\\(\+?[${di}]+)$`), PP = new RegExp(String.raw`^\\\+?[${di}]*\*$`), AP = new RegExp(
  String.raw`^\\(\+?[${di}]+)(?:[ \u00A0]|$)`
), wP = new RegExp(
  String.raw`^\\(\+?)([${di}]+)`
), OP = new RegExp(
  String.raw`\\\+?[${di}]+(?:\\?\*|[ \u00A0])`
), NP = new RegExp(
  String.raw`\\\+?[${di}]*$`
), RP = new RegExp(
  String.raw`^\\(${MP})( |$)`
), qP = new RegExp(
  String.raw`\\[${Cy}+*]*$`,
  "i"
), ll = "￼", up = "|", _y = "\\", $P = /([-\w]+)="(.*?)"/g, IP = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]), LP = /* @__PURE__ */ new Map([["file", "src"]]);
class Du {
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
function dp(e, t) {
  const r = [e.indexOf(_y, t + 1), e.indexOf(ll, t + 1)].filter(
    (n) => n >= 0
  );
  return r.length > 0 ? Math.min(...r) : e.length;
}
function fp(e) {
  const t = e.slice(1), r = [...t.matchAll($P)];
  return r.length > 0 ? r.map((n) => n[0]).join("") !== t || r.some((n) => n[2] === "") ? void 0 : r.map((n) => {
    const i = 1 + (n.index ?? 0), s = i + n[1].length + 2;
    return {
      name: n[1],
      start: i,
      end: i + n[0].length,
      valueStart: s,
      valueEnd: s + n[2].length,
      value: n[2]
    };
  }) : t ? [
    {
      name: void 0,
      start: 1,
      end: e.length,
      valueStart: 1,
      valueEnd: e.length,
      value: t
    }
  ] : void 0;
}
function DP(e, t) {
  const r = e.map(
    (o, a) => o.name === void 0 || !IP.has(o.name) && !e.slice(a + 1).some((c) => c.name === o.name)
  ), n = (o, a) => o.value === a.value && (a.name === void 0 || o.name === a.name || o.name !== void 0 && LP.get(o.name) === a.name), i = /* @__PURE__ */ new Set(), s = [];
  return t.forEach((o, a) => {
    const c = e.findIndex(
      (l, u) => r[u] && !i.has(u) && n(l, o)
    );
    c < 0 || (i.add(c), s.push([c, a]));
  }), s;
}
function pp(e, t, r) {
  let n = 0, i = -1;
  for (const s of e) {
    if (!s.same) continue;
    const { end: o, otherEnd: a } = ao(s, r);
    o <= t && o > i && (i = o, n = a);
  }
  return n;
}
function UP(e, t, r, n, i) {
  if (e === t) {
    r.push(n, n + e.length, i, i + t.length, !0);
    return;
  }
  const s = fp(e), o = fp(t);
  if (!s || !o) {
    r.push(n, n + 1, i, i + 1, !0), r.pushStretch(e.slice(1), n + 1, t.slice(1), i + 1);
    return;
  }
  const a = new Du();
  a.push(0, 1, 0, 1, !0);
  const c = DP(s, o);
  for (const [f, p] of c) {
    const h = s[f], m = o[p];
    a.pushStretch(
      e.slice(h.start, h.valueStart),
      h.start,
      t.slice(m.start, m.valueStart),
      m.start
    ), a.push(h.valueStart, h.valueEnd, m.valueStart, m.valueEnd, !0), a.pushStretch(
      e.slice(h.valueEnd, h.end),
      h.valueEnd,
      t.slice(m.valueEnd, m.end),
      m.valueEnd
    );
  }
  const l = [...a.segments], u = new Set(c.map(([f]) => f));
  s.forEach((f, p) => {
    if (u.has(p)) return;
    const h = pp(l, f.start, "live");
    a.push(f.start, f.end, h, h, !1);
  });
  const d = new Set(c.map(([, f]) => f));
  o.forEach((f, p) => {
    if (d.has(p)) return;
    const h = pp(l, f.start, "settled");
    a.push(h, h, f.start, f.end, !1);
  }), a.segments.sort(
    (f, p) => f.settledStart - p.settledStart || f.settledEnd - p.settledEnd || f.liveStart - p.liveStart
  ).forEach(
    (f) => r.push(
      n + f.liveStart,
      n + f.liveEnd,
      i + f.settledStart,
      i + f.settledEnd,
      f.same
    )
  );
}
function My(e, t, r, n, i) {
  let s = t, o = 0;
  for (; s < e.length && o < r.length; ) {
    const c = r[o] === ll && e[s] !== ll ? i.spellings?.get(o) : void 0;
    if (c !== void 0) {
      const l = new Du(), u = My(e, s, c, l, { prefix: !0 });
      i.literals?.set(o, {
        liveStart: s,
        liveEnd: u,
        inner: { segments: FP(l.segments, s) }
      }), n.push(s, u, o, o + 1, !1), s = u, o += 1;
      continue;
    }
    if (e[s] === up && r[o] === up) {
      const l = dp(e, s), u = dp(r, o);
      UP(e.slice(s, l), r.slice(o, u), n, s, o), s = l, o = u;
      continue;
    }
    if (e[s] === r[o]) {
      n.push(s, s + 1, o, o + 1, !0), s += 1, o += 1;
      continue;
    }
    if (i.prefix) {
      const l = r.lastIndexOf(_y), u = l >= o ? r.slice(l) : void 0, d = u === void 0 ? -1 : e.indexOf(u, s);
      return u === void 0 || d < 0 ? (n.push(s, s, o, r.length, !1), s) : (n.push(s, d, o, l, !1), n.push(d, d + u.length, l, r.length, !0), d + u.length);
    }
    return n.pushStretch(e.slice(s), s, r.slice(o), o), e.length;
  }
  const a = i.prefix ? s : e.length;
  return n.push(s, a, o, r.length, !1), a;
}
function FP(e, t) {
  return e.map((r) => ({
    ...r,
    liveStart: r.liveStart - t,
    liveEnd: r.liveEnd - t
  }));
}
function KP(e, t, r) {
  const n = new Du(), i = /* @__PURE__ */ new Map();
  return My(e, 0, t, n, { prefix: !1, spellings: r, literals: i }), { alignment: { segments: n.segments }, literals: i };
}
function ao(e, t) {
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
function Ey(e, t, r) {
  return e.segments.find((n) => {
    const { start: i, end: s } = ao(n, r);
    return i <= t && t < s;
  });
}
function Py(e, t) {
  let r = 0, n = 0;
  for (const i of e.segments) {
    const { end: s, otherEnd: o } = ao(i, t);
    r = Math.max(r, s), n = Math.max(n, o);
  }
  return [r, n];
}
function Uu(e, t, r) {
  const n = Ey(e, t, r);
  if (n) {
    const { start: o, otherStart: a } = ao(n, r);
    return n.same ? a + (t - o) : void 0;
  }
  const [i, s] = Py(e, r);
  return t === i ? s : void 0;
}
function co(e, t, r) {
  const n = Ey(e, t, r);
  if (n) {
    const { start: i, otherStart: s } = ao(n, r);
    return n.same ? s + (t - i) : s;
  }
  return Py(e, r)[1];
}
const cr = /\s/;
function zP(e, t) {
  return `\\${e} ${t}\\${e}*`;
}
function ul(e) {
  const t = [];
  for (const n of e.spans)
    for (let i = n.start; i < n.end; i += 1) {
      const s = e.text[i];
      t.push({ byte: s, position: i, isWs: cr.test(s) });
    }
  const r = e.spans.filter((n) => n.isSentinel).map((n) => n.start);
  return { bytes: t, placeholders: r };
}
function Oo({ bytes: e }, t) {
  return e.filter((r) => r.position < t && !r.isWs).length;
}
function BP({ bytes: e }, t) {
  let r = 0;
  for (const n of e) n.position < t && (r = n.isWs ? r + 1 : 0);
  return r;
}
function dl({ bytes: e }) {
  return e.filter((t) => !t.isWs);
}
const hp = "cat", jP = "category";
function VP(e) {
  return S(e) && e.getTextContent().trim() === "";
}
function WP(e) {
  const t = { text: "", spans: [], sentinels: [] }, r = [], n = (a, c) => {
    t.spans.push({
      key: a.getKey(),
      start: t.text.length,
      end: t.text.length + c.length,
      isSentinel: !1
    }), t.text += c;
  }, i = (a, c) => {
    n(a, zP(hp, c)), r.push({
      ownerKey: a.getKey(),
      markerName: hp,
      keyName: jP,
      valueLength: c.length
    });
  }, s = (a) => {
    const c = Ul(a);
    let u = c.opener ?? c.value ?? c.closer ? void 0 : a.getCategory();
    const d = Cr(a);
    let f = !1;
    for (const p of a.getChildren())
      u !== void 0 && f && !VP(p) && (i(a, u), u = void 0), o(p), (Qt(p) || d && (d.is(p) || p.isParentOf(d))) && (f = !0);
    u !== void 0 && i(a, u);
  }, o = (a) => {
    if (Qt(a)) {
      const c = a.getParent();
      n(a, U(c) ? c.getCaller() : "");
    } else S(a) || kt(a) ? n(a, a.getTextContent()) : U(a) ? s(a) : O(a) && a.getChildren().forEach(o);
  };
  return e.forEach(o), { spelling: t, foldedAttributes: r };
}
function Fu(e) {
  const t = ul(e);
  return {
    runs: e.sentinels.map((r, n) => {
      const { spelling: i, foldedAttributes: s } = WP(r);
      return {
        memberCount: r.length,
        before: Oo(t, t.placeholders[n] ?? e.text.length),
        spelling: i,
        foldedAttributes: s,
        spelled: dl(ul(i)).map(({ byte: o }) => o).join("")
      };
    }),
    bytes: dl(t).map(({ byte: r }) => r).join("")
  };
}
function la(e, t) {
  return {
    facts: ul(e),
    carried: e.sentinels.map((r, n) => {
      const i = new Set(t[n]?.map((s) => s.getKey()));
      return r.map((s) => i.has(s.getKey()));
    })
  };
}
function ua(e, t) {
  const r = e.carried.map(
    (f) => f.map(() => {
    })
  ), n = dl(e.facts), { alignment: i, literals: s } = KP(
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
  const u = new Map(t.runs.map((f, p) => [f.before, p]));
  e.carried.forEach((f, p) => {
    const h = e.facts.placeholders[p];
    if (h === void 0 || a(f) === 0) return;
    const m = Uu(i, Oo(e.facts, h), "live"), y = m === void 0 ? void 0 : u.get(m);
    y === void 0 || t.runs[y].memberCount !== a(f) || o(p, y);
  });
  const d = [];
  for (const [f, p] of s) {
    const h = u.get(f);
    if (h === void 0) continue;
    const m = t.runs[h], y = n[p.liveStart]?.position ?? Number.POSITIVE_INFINITY, x = p.liveEnd > p.liveStart ? n[p.liveEnd - 1].position + 1 : y, C = Oo(e.facts, y);
    d.push({
      sentinelIndex: h,
      liveBefore: C,
      liveLength: Oo(e.facts, x) - C,
      liveWsBefore: BP(e.facts, y),
      settledBefore: m.before,
      spelling: m.spelling,
      inner: p.inner,
      foldedAttributes: m.foldedAttributes
    });
  }
  return { sentinelMap: r, settledOnlyRuns: d, alignment: i };
}
function lo(e, t, r) {
  return {
    nonWsBefore: co(
      e,
      t.nonWsBefore,
      r === "toSettled" ? "live" : "settled"
    ),
    wsRun: t.wsRun
  };
}
function Ay(e, t, r) {
  return Uu(e.inner, t, r === "toSpelling" ? "live" : "settled");
}
function wy(e, t) {
  return e.find(
    (r) => t.nonWsBefore === r.liveBefore && t.wsRun >= r.liveWsBefore
  );
}
function Ku(e, t) {
  for (const r of e) {
    const n = t.nonWsBefore - r.liveBefore;
    if (n <= 0 || n >= r.liveLength) continue;
    const i = Ay(r, n, "toSpelling");
    return {
      run: r,
      count: n,
      within: i === void 0 ? void 0 : { nonWsBefore: i, wsRun: t.wsRun }
    };
  }
}
function zu(e, t) {
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
function Bu(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
const ot = "￼";
function Oy(e) {
  return e.length > 1 && e.startsWith(q) && e.charAt(1) !== ot ? e.slice(1) : e;
}
function gp(e) {
  return eo(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Ny(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Tn.serializeEditorState(
    {
      type: Fr,
      version: Ur,
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
  for (; gp(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Lt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && gp(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function So(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function gs(e, t) {
  NP.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += ot;
}
function Vt(e) {
  return e.replaceAll(q, " ");
}
function HP(e, t, r = !1) {
  if (Ot(t)) return Vt(e);
  if (e === q) return " ";
  const n = r && e.startsWith(q), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(q, "~");
}
function Ps(e) {
  const t = e.getTextContent();
  return Sn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function qa(e, t) {
  const r = e[t];
  if (!Ee(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Ta(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Ry(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function $a(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = Rs(n, i);
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
function Ia(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && ka(e);
}
function qy(e, t) {
  return Ee(e) ? !Ia(e.getMarker(), t) : U(e) || Oe(e) ? !0 : Pe(e) ? ju(e) : D(e) ? $y(e, t) : !1;
}
function $y(e, t) {
  if (dT(e)) return !0;
  const r = e.getMarker();
  return !Dx(r) && t(r) === void 0;
}
const Bt = "", jt = "";
function mp(e) {
  return e.flatMap((t) => Le(t) ? t.getChildren() : [t]);
}
function Oi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ee(s)) {
      const o = qa(e, i);
      Ia(s.getMarker(), r) && Ry(o) ? (t.push(
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
      ), Oi(mp(o), t, r), t.push(jt)) : t.push(ot), i += o.length;
    } else if (Pe(s)) {
      const o = $a(e, i);
      ju(s) ? t.push(ot) : (t.push(
        Bt,
        "verse",
        Vt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Oi(mp(o), t, r), t.push(jt)), i += o.length;
    } else P(s) ? t.push(Bt, "marker", Vt(s.getTextContent()), jt) : _n(s) ? t.push(Bt, "unmatched", Vt(s.getTextContent()), jt) : qy(s, r) ? t.push(ot) : ma(s) ? t.push(" ") : S(s) ? t.push(
      Vt(
        n ? Oy(Ps(s)) : Ps(s)
      )
    ) : D(s) ? (t.push(Bt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Oi(s.getChildren(), t, r, !0), t.push(jt)) : pe(s) ? Oi(s.getChildren(), t, r, n) : O(s) ? (t.push(Bt, s.getType()), Oi(s.getChildren(), t, r), t.push(jt)) : t.push(ot);
  }
}
function Zi(e, t) {
  const r = [];
  return Oi(e, r, t), r.join("");
}
function Vr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function ji(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Vu(e) {
  return e.type ?? "";
}
function Iy(e, t, r) {
  return t === "closing" ? He(e, r) : t === "selfClosing" ? He("") : we(e, r);
}
function kc(e, t) {
  const r = e[t];
  if (!(!r || Vu(r) !== "attribute-run"))
    return Vr(r) ?? [];
}
function es(e, t) {
  const r = [];
  return xs(e, r, t), r.join("");
}
function xs(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Vu(s);
    if (o === "ms") {
      const l = s, u = kc(e, i + 1);
      u && Ia(l.marker ?? "", r) ? (t.push(
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
      ), xs(u, t, r), t.push(jt), i += 1) : t.push(ot);
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
      let u = 0, d = kc(e, i + 1 + u);
      for (; d; )
        xs(d, t, r), u++, d = kc(e, i + 1 + u);
      t.push(jt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Bt,
        "marker",
        Vt(
          Iy(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(Bt, "char", JSON.stringify(l.unknownAttributes ?? null)), xs(Vr(s) ?? [], t, r, !0), t.push(jt);
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
      t.push(Vt(n ? Oy(a) : a));
      continue;
    }
    const c = Vr(s);
    c ? (t.push(Bt, o), xs(c, t, r), t.push(jt)) : t.push(ot);
  }
}
function La(e) {
  let t = 0;
  for (const r of e) {
    const n = Vr(r);
    if (n) {
      t += La(n);
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
      So(t, a, Vt(a.getTextContent()));
    else if (Ee(a)) {
      s();
      const c = qa(e, o);
      Ia(a.getMarker(), r) && Ry(c) ? _r(c, t, r, n) : gs(t, [a, ...c]), o += c.length;
    } else if (U(a) || Oe(a))
      s(), gs(t, [a]);
    else if (Pe(a)) {
      s();
      const c = $a(e, o);
      ju(a) ? gs(t, [a, ...c]) : (So(t, a, Vt(Ps(a))), _r(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), $y(a, r) ? gs(t, [a]) : Vi(a, t, r, n, { pending: !0 });
    else if (ma(a))
      s(), So(t, a, " ");
    else if (S(a)) {
      const c = Sn(a) || se(a, ce) === "attribute", l = s() && !c;
      So(
        t,
        a,
        c ? Vt(Ps(a)) : HP(Ps(a), n, l)
      );
    } else O(a) ? Vi(a, t, r, n, i) : (s(), gs(t, [a]));
  }
}
function Wu(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Oe(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return Vi(e, i, t, r), i;
}
function GP(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  return Vi(e, n, t, r), n;
}
function Hu(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!ie(i)) return;
    const s = Wu(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function JP(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    if (ie(i)) {
      const s = Wu(i, t, r);
      if (!s) return;
      const o = n.text.length;
      s.spans.forEach(
        (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
      ), n.sentinels.push(...s.sentinels), n.text += s.text;
    } else Ce(i) ? _r(i.getChildren(), n, t, r) : _r([i], n, t, r);
  return n;
}
function Ly(e, t) {
  let r = 0;
  const n = (i) => {
    if (S(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(ot);
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
    } else O(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function fl(e, t = []) {
  for (const r of e)
    Pe(r) ? t.push(r) : O(r) && fl(r.getChildren(), t);
  return t;
}
function Dy(e) {
  let t = 0;
  const r = (n) => {
    if (S(n))
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
function Gu(e, t, r) {
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
      cr.test(e.text[s.start + l]) ? i++ : (n++, i = 0);
    if (a) return { nonWsBefore: n, wsRun: i };
  }
}
function pl(e, t) {
  t.add(e.getKey()), O(e) && e.getChildren().forEach((r) => pl(r, t));
}
function Uy(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function As(e, t, r) {
  const n = (d, f) => {
    const p = Wi(e, d, f), h = Uy(e, d, f);
    return p && h ? { anchor: p, position: h.start + f } : void 0;
  }, i = (d) => {
    const f = d.end - d.start, p = Wi(e, d.key, f);
    return p ? { anchor: p, position: d.start + f } : void 0;
  };
  if (!O(t)) return n(t.getKey(), r);
  const s = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((d) => pl(d, s));
  const o = [...e.spans].reverse().find((d) => s.has(d.key));
  if (o) return i(o);
  const a = /* @__PURE__ */ new Set();
  pl(t, a);
  const c = e.spans.find((d) => a.has(d.key));
  if (c && !c.isSentinel) return n(c.key, 0);
  const l = [...e.spans].reverse().find((d) => !a.has(d.key) && H(d.key)?.isBefore(t));
  if (l) return i(l);
  const u = e.spans[0];
  return u && !u.isSentinel ? n(u.key, 0) : void 0;
}
function ws(e) {
  if (e.isSentinel) return !1;
  const t = H(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function Fy(e) {
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
function YP(e) {
  const t = H(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Pe(t) ? $a(n, i) : Ee(t) ? qa(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function It(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e;
  let s, o = t.nonWsBefore, a = t.wsRun, c = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && (r || !ws(d));
    if (c) {
      if (!p) continue;
      s = { key: d.key, offset: 0 };
      break;
    }
    for (let h = 0; h < f; h++) {
      const m = n[d.start + h];
      if (o === 0 && (a === 0 || !cr.test(m))) {
        if (p) {
          s = { key: d.key, offset: h };
          break e;
        }
        c = !0;
        continue e;
      }
      o > 0 ? cr.test(m) || o-- : a--;
    }
    if (o === 0 && a === 0) {
      if (p && !r) {
        s = { key: d.key, offset: f };
        break;
      }
      c = !0;
    }
  }
  if (s) return { ...s, type: "text" };
  const l = i[i.length - 1];
  if (l && ws(l)) {
    const d = Fy(l);
    if (d) return d;
  }
  if (l?.isSentinel) {
    const d = YP(l);
    if (d) return d;
  }
  const u = [...i].reverse().find((d) => !d.isSentinel && !ws(d));
  if (u) return { key: u.key, offset: u.end - u.start, type: "text" };
}
function Ky(e, t = []) {
  for (const r of e)
    pe(r) && t.push(r), O(r) && Ky(r.getChildren(), t);
  return t;
}
function zy(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), O(e) && e.getChildren().forEach((r) => zy(r, t)), t;
}
function XP(e, t, r) {
  const n = Wi(e, t.key, r);
  if (n)
    return t.isSentinel ? {
      kind: "preserved",
      anchor: n,
      run: e.spans.filter((i) => i.isSentinel).indexOf(t)
    } : { kind: "byte", anchor: n };
}
function Da(e, t, r = t.sentinels) {
  const n = [];
  for (const i of Ky(e)) {
    const s = zy(i), o = t.spans.filter((C) => s.has(C.key)), a = o.find((C) => C.isSentinel || !P(H(C.key))) ?? o[0], c = o[o.length - 1];
    if (!a || !c) continue;
    const l = t.text.slice(a.start, a.end), u = a === o[0] || a.isSentinel ? 0 : l.length - l.trimStart().length, d = XP(t, a, u), f = Wi(t, c.key, c.end - c.start);
    if (!d || !f) continue;
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
    x.length > 0 && n.push({ annotations: x, start: d, end: f });
  }
  return { ranges: n, live: n.length > 0 ? la(t, r) : void 0 };
}
function QP(e, t, r) {
  const n = By(e);
  if (!n) return;
  const i = n[n.length - 1].getNextSibling();
  if (!pe(i) || !i.hasID(t, r)) return;
  const s = i.getFirstChild();
  s && n.forEach((o) => s.insertBefore(o));
}
function ZP(e, t) {
  const r = By(e);
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
function By(e) {
  const t = H(e), r = t?.getParent()?.getChildren();
  if (!t || !r) return;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return;
  const i = Pe(t) ? $a(r, n) : Ee(t) ? qa(r, n) : [];
  return [t, ...i];
}
function yp(e) {
  return e.type === "text" && P(H(e.key));
}
function eA(e) {
  const t = H(e.key);
  if (!S(t) || P(t) || se(t, ce) === "attribute") return !1;
  const r = t.getParent();
  if (!U(r)) return !0;
  const n = r.getChildren().find((i) => !P(i) || i.getMarkerSyntax() !== "opening");
  return !t.is(n);
}
function jy(e, t, r, n) {
  const i = r.settledOnlyRuns, s = { addressDisplayBytes: n }, o = Ku(i, e);
  if (o) {
    if (!o.within) return;
    const u = It(o.run.spelling, o.within, s);
    return !u || !eA(u) ? void 0 : { point: u, at: o.within.nonWsBefore, literalRun: o.run.sentinelIndex };
  }
  const a = n && wy(i, e);
  if (a) {
    const u = t.sentinels[a.sentinelIndex]?.[0]?.getKey(), d = {
      nonWsBefore: a.settledBefore + 1,
      wsRun: 0
    }, f = It(t, d, s);
    return f && u ? { point: f, at: d.nonWsBefore, preservedKey: u } : void 0;
  }
  const c = lo(r.alignment, e, "toSettled"), l = It(t, c, s);
  return l && { point: l, at: c.nonWsBefore };
}
function tA(e, t, r) {
  if (e.kind === "byte") return jy(e.anchor, t, r, !0);
  const n = r.sentinelMap[e.run]?.find((a) => a !== void 0), i = n && t.sentinels[n.sentinelIndex]?.[0]?.getKey();
  if (!i) return;
  const s = lo(r.alignment, e.anchor, "toSettled"), o = It(t, s, { addressDisplayBytes: !0 });
  return o && { point: o, at: s.nonWsBefore, preservedKey: i };
}
function Ua({ ranges: e, live: t }, r) {
  if (e.length === 0 || !t) return;
  const n = N()?.clone() ?? null;
  for (const i of e)
    for (const s of i.annotations) {
      const o = r();
      if (!o) continue;
      const a = ua(t, Fu(o)), c = tA(i.start, o, a), l = jy(i.end, o, a, !1);
      if (!c || !l || c.literalRun !== l.literalRun) continue;
      const u = i.start.anchor;
      if (c.at === l.at && u.nonWsBefore !== i.end.nonWsBefore && !c.preservedKey)
        continue;
      const { point: d, preservedKey: f } = c, { point: p } = l;
      if (yp(d) || yp(p)) continue;
      if (d.key === p.key && d.offset === p.offset && d.type === p.type) {
        f && ZP(f, s);
        continue;
      }
      const h = Js();
      h.anchor.set(d.key, d.offset, d.type), h.focus.set(p.key, p.offset, p.type), Xl(
        h,
        s.type,
        s.id,
        s.onClick,
        s.onRemove,
        s.onMouseEnter,
        s.onMouseLeave
      ), f && QP(f, s.type, s.id);
    }
  pn(n);
}
function Ju(e, t, r) {
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
function Vy(e, t) {
  return e.sentinels.filter((n, i) => n.length > 0 && (t[i]?.length ?? 0) === 0).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? Ju(n, s.start, s.end) : n;
  }, e);
}
function uo(e) {
  const t = e.exportJSON();
  return O(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(uo(r))), t;
}
function Yu(e, t, r, n, i, s, o) {
  const a = Da(
    e,
    Vy(t, r),
    r
  );
  if (a.ranges.length === 0) return n;
  const c = dh({
    nodes: [Qe, ...vu],
    onError: (u) => {
      throw u;
    }
  });
  wl(
    c,
    Qe,
    (u) => Gn(u.getTypedIDs()),
    (u, d) => Object.entries(u.getTypedIDs()).forEach(
      ([f, p]) => p.forEach((h) => d.addID(f, h))
    )
  );
  let l;
  return c.update(
    () => {
      const u = ge(), d = i === "noteContent" ? Ht() : u;
      d !== u && u.append(d), l = d.getKey(), n.forEach((p) => d.append(Hi(p))), Ua(a, () => {
        const p = d.getChildren();
        if (i === "paras") return Gu(p, s, o);
        if (i === "chapter")
          return Ce(p[0]) ? js(p[0], s, o) : void 0;
        const h = { text: "", spans: [], sentinels: [] };
        return _r(p, h, s, o), h;
      });
    },
    { discrete: !0 }
  ), c.getEditorState().read(() => {
    const u = l === void 0 ? void 0 : H(l);
    return O(u) ? u.getChildren().map(uo) : n;
  });
}
function hl(e) {
  const t = H(e.key);
  if (!t?.isAttached()) return !1;
  if (e.type === "text")
    return S(t) ? (t.select(e.offset, e.offset), !0) : !1;
  if (!O(t)) return !1;
  const r = Js();
  return r.anchor.set(e.key, e.offset, "element"), r.focus.set(e.key, e.offset, "element"), pn(r), !0;
}
function rA(e, t, r) {
  const n = It(e, t);
  if (n?.type === "text") {
    if (hl(n)) return;
  } else if (n) {
    const i = H(n.key), s = O(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find(O)?.selectStart();
}
function Xu(e, t) {
  const r = t.getNode(), n = zu(e, r), i = n && Bu(n.member, r);
  return {
    // An element point (a click past a paragraph's trailing note) has no span of its own, so it
    // is spelled from the child bytes beside it, the same way a settled position spells one.
    anchor: t.type === "element" ? As(e, r, t.offset)?.anchor : Wi(e, t.key, t.offset),
    inRun: n && i ? {
      sentinelIndex: n.sentinelIndex,
      memberIndex: n.memberIndex,
      path: i,
      offset: t.offset,
      type: t.type
    } : void 0,
    live: la(e, e.sentinels)
  };
}
function Wy(e, t, r) {
  const n = t && ua(t.live, Fu(e));
  if (t?.inRun && n) {
    const { sentinelIndex: o, memberIndex: a, path: c, offset: l, type: u } = t.inRun, d = n.sentinelMap[o]?.[a];
    let f = d && e.sentinels[d.sentinelIndex]?.[d.memberIndex];
    for (const p of c)
      f = O(f) ? f.getChildAtIndex(p) ?? void 0 : void 0;
    if (f && hl({ key: f.getKey(), offset: l, type: u })) return;
  }
  if (!t?.anchor || !n) {
    r.find(O)?.selectStart();
    return;
  }
  const { anchor: i } = t, s = Ku(n.settledOnlyRuns, i);
  if (s) {
    const o = s.within ?? {
      nonWsBefore: co(s.run.inner, s.count, "live"),
      wsRun: i.wsRun
    }, a = It(s.run.spelling, o);
    if (a && hl(a)) return;
  }
  rA(
    e,
    lo(n.alignment, i, "toSettled"),
    r
  );
}
function Hy(e, t, r, n, i) {
  r && Wy(Gu(e, n, i), t, e);
}
function nA(e, t, r, n, i) {
  if (!r) return;
  const s = { text: "", spans: [], sentinels: [] };
  _r(e, s, n, i), Wy(s, t, e);
}
function Gy(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Hu(e, n, r);
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
    c.isCollapsed() && (o = Xu(s, c.anchor));
  }
  const l = Da(e, s), u = Hr(s.text, {
    getMarker: n
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (fi(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = Tn.serializeEditorState(
    { type: Fr, version: Ur, content: u },
    r
  );
  if (es(d.root.children, n) === Zi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = d.root.children.map((y) => Hi(y));
  if (Dy(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = fl(e).map((y) => ({
    number: y.getNumber(),
    sid: y.getSid()
  })), h = e[0];
  f.forEach((y) => h.insertBefore(y)), Ly(f, s.sentinels), e.forEach((y) => y.remove());
  const m = fl(f);
  for (let y = 0; y < p.length && y < m.length; y++)
    m[y].getNumber() === p[y].number && m[y].setSid(p[y].sid);
  return Ua(l, () => Gu(f, n, r)), Hy(f, o, a, n, r), !0;
}
function Bs(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !$e.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!P(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(Qt(s) || S(s) && s.getTextContent() === Lt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!P(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return _r(c, l, t, r), { out: l, contentNodes: c };
}
function Jy(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(ot)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function iA(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Bs(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = N();
  if (A(u)) {
    for (let L = u.anchor.getNode(); L; L = L.getParent())
      if (e.is(L)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Xu(o, u.anchor));
  }
  const d = Da(a, o), f = Hr(o.text, {
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
  const h = p.content ?? [], m = Jy(h), y = Ny(e, h, m, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (La(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const x = e.getCategory() !== m;
  if (x && e.setCategory(m), es(y.children, n) === Zi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), x;
  const C = y.children.map((L) => Hi(L));
  if (Dy(C) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), x;
  const M = a[0];
  if (M)
    C.forEach((L) => M.insertBefore(L));
  else {
    const L = e.getChildren().find((T) => P(T) && T.getMarkerSyntax() === "closing");
    C.forEach((T) => L ? L.insertBefore(T) : e.append(T));
  }
  Ly(C, o.sentinels);
  const R = new Set(o.sentinels.flat().map((L) => L.getKey()));
  a.forEach((L) => {
    R.has(L.getKey()) || (pe(L) && (L.getWritable().__suppressOnRemoveCallbacks = !0), L.remove());
  });
  const E = () => Bs(e, n, r);
  return Ua(d, () => E()?.out), nA(
    E()?.contentNodes ?? C,
    c,
    l,
    n,
    r
  ), !0;
}
const Yy = /* @__PURE__ */ new Set(["ca", "cp"]), Qu = "cp";
function Xy(e) {
  if (!Ze(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (Vi(e, t, xr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Hr(r, { getMarker: xr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Qu)
  );
}
function ts(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && Yy.has(r.getMarker()) || Xy(r)) {
      t.push(r);
      continue;
    }
    ie(r) && r.getMarker() === Qu && t.push(r);
    break;
  }
  return t;
}
function sA(e) {
  const t = (n) => D(n) && Yy.has(n.getMarker()) || Xy(n);
  if (t(e) || ie(e) && e.getMarker() === Qu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ce(n)) return n;
      if (!t(n)) return;
    }
}
function js(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = ts(e);
  if (n.some((s) => ie(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (_r(e.getChildren(), i, t, r), _r(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function oA(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...ts(e)], o = js(e, n, r);
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
    l.isCollapsed() && (a = Xu(o, l.anchor));
  }
  const u = Da(s, o), d = Hr(o.text, { getMarker: n }), [f] = d;
  if (d.length === 0 || typeof f != "object" || f.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (fi(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (f.sid = e.getSid());
  const p = Tn.serializeEditorState(
    { type: Fr, version: Ur, content: d },
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
  return h.forEach((y) => e.insertBefore(y)), s.forEach((y) => y.remove()), Ua(
    u,
    () => js(m, n, r)
  ), Hy(h, a, c, n, r), !0;
}
function Vs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Oe(n)) return;
    !t && (U(n) || ie(n) || Ce(n)) && (t = n), Tr(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? sA(r) : void 0) ?? t;
}
function rr(e, t) {
  const r = Vs(e);
  return r ? U(r) ? iA(r, t) : Ce(r) ? oA(r, t) : Gy([r], t) : !1;
}
const aA = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function bp(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !aA.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function No(e, t) {
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
          t.push(`\\${n}`), bp(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), No(r.content, t), bp(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), No(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), No(r.content, t);
      }
    }
}
function kp(e, t, r) {
  const n = Vs(e);
  if (!ie(n)) return !1;
  const i = N();
  if (!A(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Wu(n, t, r);
  if (!o) return !1;
  const a = Hr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    cr.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  No(a, l);
  for (const u of l.join("").replaceAll(q, "~")) {
    if (cr.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function cA(e) {
  return [ft(e), Ma()];
}
function Zu(e) {
  or(e, 2);
}
function lA(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function ed(e) {
  const t = lA(e);
  e.splice(0, 0, cA(e.getMarker())), t && Zu(e);
}
function da(e, t) {
  e.setMarker(t), ed(e), Zu(e);
}
function uA(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Sn(n)) {
    if (S(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(q), Mt(n, ce, Pr), n.setMode("token");
      return;
    }
    if (wg(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Ma());
  }
}
function xp(e, t, r) {
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
function Os(e) {
  for (let t = e; t; t = t.getParent())
    if (ie(t)) return t;
}
function dA(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Os(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Os(r.getNode())?.is(s) ?? !1, a = Os(n.getNode())?.is(s) ?? !1;
    return !(o && !xp(r, s, "start") || a && !xp(n, s, "end"));
  });
}
function gl(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!A(r) || r.isCollapsed()))
    for (const n of dA(r)) t.add(n.getKey());
}
function fA(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!A(r) || !r.isCollapsed()) return;
  const n = Os(r.focus.getNode());
  n && t.add(n.getKey());
}
function pA(e) {
  const t = N();
  !A(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (gl(e), t.removeText());
}
function hA(e, t) {
  if (!Yi(t.viewOptions)) return;
  if (Xt(e.getFirstChild())) {
    uA(e, t);
    return;
  }
  if (t.splitExpected.current) {
    ed(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ie(o) && !o.is(e))) {
      da(e, kr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ie(r)) {
    const n = e.getChildren().filter((a) => !Sn(a)), i = N();
    let s = !1;
    if (A(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Os(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || O(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && or(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  da(e, kr);
}
function gA(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = br(t, Qs(e.getMarker()));
  return r === "" ? void 0 : r;
}
function mA(e) {
  const t = e.getChildren().filter((s) => !P(s) && se(s, ce) !== "attribute"), r = t[0];
  r && S(r) && r.getTextContent().startsWith(q) && r.setTextContent(r.getTextContent().slice(1));
  const n = gA(e);
  n && t.push(xe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function yA(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => S(c) && !P(c) && c.getTextContent() === Lt(s)
    ), a = Gi(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (S(c) && c.getTextContent() === Lt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function bA(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    mA(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && rr(e, t);
}
function Qy(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Yi(r)) {
    da(e, t);
    return;
  }
  Pm(e, t);
}
function Zy() {
  const e = N();
  if (!A(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = eb(e);
    return t !== "removed" ? t : (ml(), "handled");
  }
  return ml() ? "handled" : "declined";
}
function kA(e, t) {
  if (!t) return e;
  const r = RP.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function Tp(e, t) {
  const r = N();
  if (!A(r)) return "declined";
  if (r.isCollapsed()) {
    if (!tb())
      return "declined";
  } else {
    const s = eb(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => kA(s, t)
  );
  vp(n ?? "");
  for (const s of i)
    ml(), vp(s);
  return "handled";
}
function xA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Ys(n);
  if (!i) return !1;
  const s = sr(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !S(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function eb(e) {
  const t = sr(e.anchor.getNode()), r = sr(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), TA() ? "removed" : "needs-plain-split");
}
function vp(e) {
  if (e === "") return;
  const t = N();
  A(t) && t.insertText(e);
}
function TA() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = sr(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function tb() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = sr(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function ml() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = tb();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Kr("fp", { closed: "false" });
  i.append(ft("fp"));
  const s = S(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
    const [u] = l;
    u && (vv(u), i.append(u));
  }
  return i.getChildren().every(P) && i.append(xe(Gt)), rb(i), !0;
}
function rb(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (S(t)) {
    const r = t.getTextContent().startsWith(q) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (O(t)) {
    rb(t);
    return;
  }
  e.selectEnd();
}
function vA(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function CA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of ge().getChildren()) {
    if (t && n.is(t)) break;
    (ct(n) || ze(n) || ie(n)) && r.push(n.getMarker());
  }
  return r;
}
function SA(e) {
  let t = e;
  for (; O(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function _A(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Xt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Sn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(SA(i)) && r === 0 : !1;
}
function MA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Xt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Sn(i) && t.is(i) && r === 0;
}
function EA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function PA() {
  const e = N();
  if (!A(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = rt(t, ie), s = !n && (!i || MA(i, t, r)) ? "paragraph" : "character", o = sr(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: CA(t),
    openCharMarkers: vA(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: nu(t, r),
    anchorRect: EA()
  };
}
function AA() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!S(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = qP.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function wA(e, t, r) {
  Qy(e, t, r), Zu(e);
}
function OA(e, t, r) {
  const n = N();
  if (!A(n)) return;
  const i = n.focus.getNode(), s = rt(i, ie);
  if (t === "backslash" && s && _A(s, i, n.focus.offset)) {
    wA(s, e, r);
    return;
  }
  ib(e, r);
}
function NA(e, t) {
  const r = N();
  return !A(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function nb(e) {
  const t = N();
  return A(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function RA(e, t, r, n) {
  if (A(N()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && AA(), e.kind === "closeTag") {
    nb(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Zy() !== "declined") return;
  if (e.kind === "paragraph" && it.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    OA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if ($e.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return uy(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  il(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Bn(), reference: r });
}
function ib(e, t) {
  const r = N();
  if (!A(r)) return;
  const n = Yi(t);
  if (cy()) {
    const s = N();
    if (!A(s)) return;
    const o = rt(s.anchor.getNode(), ie);
    if (!o) return;
    o.setMarker(e), n && ed(o);
    return;
  }
  const i = r.insertParagraph();
  ie(i) && (n ? da(i, e) : i.setMarker(e));
}
function qA() {
  const [e] = le();
  return j(() => e.registerCommand(fh, () => !0, $t), [e]), null;
}
function sb(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !($e.isValidMarker(r) || ka(r));
}
function $A(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !($e.isValidMarker(r) || ka(r));
}
function IA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = AP.exec(e)?.[1];
  return r === void 0 ? !1 : !sb(r, t);
}
function ob(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !IA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ie(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ie(i))
    return [i, r];
}
function ab(e, t) {
  const r = ob(e, t.getMarker);
  return r !== void 0 && Gy(r, t);
}
function LA(e, t) {
  const r = N();
  A(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function cb(e) {
  const t = wP.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function DA(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = cb(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function UA(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (U(e.getParent()) && S(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      tu(n);
      return;
    }
  }
  S(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Cp(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = cb(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  UA(e);
}
function Sp(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function lb(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return rr(e, r);
  const n = DA(e), i = e.getParent();
  if (ie(i)) {
    if (!sb(t, r.getMarker))
      return ab(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : rr(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), Sp(s, t) && Cp(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || U(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? $A(t, r.getMarker) : $e.isValidMarker(s)))
      return rr(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return rr(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (LA(c, He(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), Sp(a, s) && Cp(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return rr(e, r);
}
function FA(e) {
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
function KA(e, t) {
  const r = e.getTextContent();
  if (Cn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Le(e.getParent()) && Dl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !FA(e)) {
    Gx(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = EP.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), lb(e, n[1], t);
      return;
    }
    if (PP.test(r)) {
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
function zA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if ($g(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function ub(e) {
  if (!vh(e)?.length)
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
const ms = ub("v"), BA = ub("c"), _p = /^[ \u00A0]*$/;
function Mp(e, t, r) {
  const n = e.getNextSibling();
  if (S(n) && n.getType() === Ve.getType() && n.getMode() === "normal" && se(n, ce) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = xe(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function jA(e, t) {
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
    if (l && _p.test(l[2] ?? "")) {
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
      const [, l, u, d] = c, f = N(), p = A(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Wt("v", u));
      const h = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      Mp(e, d, h);
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
  if (t.pendingKeys.delete(e.getKey()), _p.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Wt("v", o)), a && Mp(e, a, a.length);
}
const VA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function WA(e, t) {
  const r = e.getParent();
  if (!U(r) || r.getIsCollapsed() !== !1 || !vh(r.getMarker())?.includes("caller")) return !1;
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
  const o = VA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Lt(a)), !0;
}
function HA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!S(t)) return;
  const r = Wt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = BA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function db(e) {
  if (Ee(e)) {
    const { wrapper: t } = Ta(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (U(e)) {
    const { wrapper: t } = Ul(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ce(e)) {
    const t = [], r = Wh(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Gh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Pe(e)) {
    const t = [], r = Rs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Rs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function GA(e) {
  const t = N();
  if (!A(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return db(e).some((n) => r.is(n));
}
function JA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ie(e) && wg(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of qs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && oo(l, e) && (i || GA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of db(e))
    l.remove(), n = !0;
  let s = !1;
  if (D(e)) {
    const l = yT(e);
    l !== void 0 && qx(l) && (rg(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of qs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (eC(l, e)) {
        Us(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Wg(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Pa(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function Ep(e) {
  return S(e) && e.getType() === Ve.getType() && e.getMode() === "normal" && se(e, ce) !== "attribute";
}
function YA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = H(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && Ep(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && Ep(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function _o(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = YA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
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
      const h = Sy.exec(p);
      c.getMarkerSyntax() === "opening" && h ? n = lb(c, h[1], e) || n : r === "idle" && kp(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : ab(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = rr(c, e) || n;
      continue;
    }
    const l = mn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = JA(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && kp(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = rr(u, e) || n;
    }
  }
  return n;
}
function fb(e) {
  if (_n(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return vs(t) !== void 0;
  return !1;
}
function XA(e) {
  const t = mn(e);
  if (!t) return !1;
  const r = Br(t.kind);
  return !Pa(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Pp(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ct(t) || Oe(t) || Dg(t)) return !0;
  return !1;
}
function QA(e, t) {
  const r = e.getTextContent(), n = se(e, ce), i = e.getParent();
  if (n !== "attribute" && Ce(i)) {
    r.replace(/^[ \u00A0]+/, "") === Wt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (WA(e, t)) return;
  if (n === "attribute") {
    XA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && fb(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Pp(e))
      t.pendingKeys.add(e.getKey());
    else if (Jh(e)) t.pendingKeys.add(e.getKey());
    else if (Ce(Vs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      D(a) && ng(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Pp(e)) return;
  const s = N(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (OP.test(o)) {
    if (Bx(r)) {
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
function ZA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Wg(e, t);
}
function e0(e) {
  const t = (r) => {
    if (P(r)) {
      Cn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (_n(r)) {
      $g(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of qs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (oo(n, r) || ZA(n, r)) && e.pendingKeys.add(r.getKey());
    if (Pe(r)) {
      r.getTextContent() !== Wt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (S(r)) {
      if (r.getType() !== Ve.getType() || se(r, ce) === "attribute") return;
      const n = r.getParent();
      if (Ce(n)) {
        r.getTextContent() !== Wt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && fb(r) || i.includes("//") || Jh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Oe(r) && !ct(r)) {
      if (Le(r) && r.getChildrenSize() === 0) {
        const n = mn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      O(r) && r.getChildren().forEach(t);
    }
  };
  ge().getChildren().forEach(t);
}
function t0(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = se(e, ce);
  if (r === "attribute" || r === Pr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ct(o) || Ce(o) || Oe(o)) return;
  const n = t.startsWith(q) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? q : "") + i.replace(/ (?=[ \u00A0])/g, q).replace(new RegExp("(?<=\\u00A0) ", "g"), q);
  s !== t && e.setTextContent(s);
}
function r0(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function yl(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(r0(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function n0(e) {
  const t = yl(e);
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
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Do, void 0), u === "") return;
    const f = N();
    A(f) && f.insertText(u);
  }), !0;
}
function i0(e) {
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
function s0(e) {
  const t = N();
  if (!A(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(q, " ")
  }, n = Gk(e), i = Jk(e);
  return n && (r["text/html"] = i0(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function Ap(e, t, r) {
  const n = N();
  if (!A(n) || n.isCollapsed()) return !1;
  const i = s0(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return Hk(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const pb = Sl(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function xc(e) {
  const t = e();
  return Wn(ih), Wn(Sh), t;
}
const wp = 8, o0 = 1e3;
function Pi(e, t) {
  const r = Pe(e) ? ["va", "vp"] : Ee(e) ? ["milestone"] : U(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    sC(Br(n), e, t.pendingKeys);
}
function a0(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Ml) || Zl(e) === "remote")
      return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = H(o);
        if (!c) continue;
        const l = mn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = H(o.getKey());
        c?.isAttached() && Br(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(Er, r),
    e.registerMutationListener(Yr, r),
    e.registerMutationListener(Gr, r)
  );
}
function c0(e, t, r) {
  return nt(
    e.registerCommand(
      Lr,
      (n) => {
        if ($m()) return !1;
        const i = yl(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(q, "~") : s).split(`
`);
          let c = Tp(a, t.getMarker);
          if (c === "declined" && xA(e) && (c = Tp(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Dr
    ),
    e.registerCommand(
      Lr,
      (n) => {
        const i = yl(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !V1()) return !1;
        n?.preventDefault();
        const o = N();
        return A(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Do, void 0), a === "") return;
          const l = N();
          A(l) && l.insertText(a);
        }), !0;
      },
      Ke
    ),
    e.registerCommand(
      Lr,
      () => (t.splitExpected.current = !0, !1),
      $t
    )
  );
}
function l0({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = le(), s = e?.markerMode === "editable", o = !!e && Ot(e), a = Z(void 0), c = Z(n);
  return j(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? xr, l.logger = r);
  }, [e, t, r, n]), j(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? xr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const u = Yv(
      i,
      l.pendingKeys,
      (T) => {
        l.pendingKeys.clear(), T.read(() => e0(l));
      }
    );
    let d, f = !1, p = !1, h, m = !1, y = !1, x = 0;
    const C = () => x < wp ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${wp} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), M = (T, $ = "departure") => {
      i.update(() => {
        x = xc(
          () => _o(l, T, $)
        ) ? x + 1 : 0;
      });
    };
    let R;
    const E = () => {
      if (R !== void 0 && clearTimeout(R), R = void 0, y || l.pendingKeys.size === 0) return;
      const T = c.current ?? o0;
      T < 0 || (R = setTimeout(() => {
        R = void 0, !(y || l.pendingKeys.size === 0) && (f || C() || M(void 0, "idle"));
      }, T));
    }, L = nt(
      i.registerNodeTransform(Er, (T) => {
        if (i.isComposing()) return;
        KA(T, l);
        const $ = mn(T);
        $ && (Pe($.owner) || U($.owner) || Ce($.owner) || Ee($.owner) && Ta($.owner).wrapper === void 0) && Pi($.owner, l);
      }),
      i.registerNodeTransform(mt, (T) => {
        i.isComposing() || (jA(T, l), Pi(T, l));
      }),
      i.registerNodeTransform(Ut, (T) => {
        i.isComposing() || (HA(T), T.isAttached() && Pi(T, l));
      }),
      i.registerNodeTransform(it, (T) => {
        i.isComposing() || hA(T, l);
      }),
      i.registerNodeTransform(Se, (T) => {
        if (!i.isComposing()) {
          bA(T, l);
          for (const $ of ["separator", "char"])
            T.isAttached() && oo(Br($), T) && l.pendingKeys.add(T.getKey());
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
      i.registerNodeTransform(Gr, (T) => {
        if (i.isComposing()) return;
        const $ = mn(T);
        $ && (Ee($.owner) || Pe($.owner) || U($.owner) || Ce($.owner)) && Pi($.owner, l);
      }),
      i.registerNodeTransform($e, (T) => {
        i.isComposing() || (yA(T, l), Pi(T, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Qr, (T) => {
        i.isComposing() || zA(T, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(Ve, (T) => {
        i.isComposing() || QA(T, l);
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
      a0(i, l),
      ...o ? [
        i.registerNodeTransform(Ve, (T) => {
          i.isComposing() || t0(T);
        }),
        i.registerCommand(
          ba,
          (T) => Ap(
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
          (T) => Ap(
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !0
          ),
          Ke
        ),
        i.registerCommand(
          Lr,
          (T) => n0(
            // Same jsdom-safe duck-check as COPY above.
            T && typeof T == "object" && "clipboardData" in T ? T : null
          ),
          Ke
        )
      ] : [],
      i.registerCommand(
        Vn,
        () => (gl(l), !1),
        Dr
      ),
      i.registerCommand(
        El,
        () => (i.isComposing() || pA(l), !1),
        qi
      ),
      i.registerCommand(
        ya,
        () => (f = !1, x = 0, E(), !1),
        $t
      ),
      i.registerCommand(
        Wr,
        (T) => (f = !1, x = 0, E(), (T.key === "Backspace" || T.key === "Delete") && (gl(l), fA(l)), i.isComposing() || !T.ctrlKey || T.altKey || T.shiftKey || T.metaKey || T.key !== " " && T.code !== "Space" || !j1() ? !1 : (T.preventDefault(), !0)),
        Ke
      ),
      i.registerCommand(
        lh,
        (T) => {
          const $ = Zy();
          $ === "needs-plain-split" && i.dispatchCommand(Do, void 0);
          const W = $ !== "declined" || oC();
          return W && T?.preventDefault(), _o(l), W;
        },
        Ke
      ),
      i.registerCommand(
        Do,
        () => (l.splitExpected.current = !0, cy()),
        Ke
      ),
      c0(i, l, o),
      i.registerCommand(
        pb,
        () => {
          if (f) return !0;
          const T = i.getRootElement(), $ = T?.ownerDocument, W = !!T && !!$ && $.hasFocus() && T.contains($.activeElement);
          let G;
          if (W) {
            const te = N();
            G = A(te) ? te.focus.key : d;
          }
          return xc(() => _o(l, G)), !0;
        },
        $t
      ),
      i.registerCommand(
        Rl,
        () => (p = !0, !1),
        $t
      ),
      i.registerCommand(
        Al,
        () => {
          if (f) return !1;
          const T = N(), $ = A(T) ? T.focus.key : d;
          return xc(() => _o(l, $)), !1;
        },
        $t
      ),
      i.registerUpdateListener(({ editorState: T, tags: $ }) => {
        const W = p || $.has(Ns);
        p = !1, l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const G = T.read(() => {
          const Ne = N();
          return A(Ne) ? Ne.focus.key : void 0;
        }), te = h;
        if (G !== void 0 && (h = G), $.has(Ml)) {
          Vg(i, T, $), f = !0, G !== void 0 && (d = G);
          return;
        }
        if (W) {
          G !== void 0 && G !== te && (f = !0);
          return;
        }
        f || (G !== void 0 && (d = G), E(), !(m || G === void 0) && [...l.pendingKeys].some((Ne) => Ne !== G) && (m = !0, queueMicrotask(() => {
          m = !1, !y && (C() || M(d));
        })));
      })
    );
    return () => {
      y = !0, R !== void 0 && clearTimeout(R), R = void 0, u(), L(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const u0 = ["status_unknown", "status_invalid"], hb = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, d0 = Object.values(hb);
function f0(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = hb[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Op(e) {
  e.classList.remove(...u0), e.removeAttribute("aria-description"), d0.includes(e.title) && e.removeAttribute("title");
}
function p0(e, t, r, n) {
  const i = (a) => a.read(() => ge().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = H(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function h0(e) {
  const t = H(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function g0({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? Yo;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = mP(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || h0(f)) continue;
            const h = H(f)?.getTopLevelElement();
            !h || l.has(h.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && Op(p);
        }
        for (const [f, p] of d) {
          const h = n.getElementByKey(f);
          h && f0(h, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          p0(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Op(u);
      }
    };
  }, [n, i, t, r]), null;
}
function fo(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Vr(o);
    a && O(s) && fo(s.getChildren(), a, r);
  }
}
function gb(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Vr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = ji(o);
      if (c === void 0 || !c.includes(ot)) continue;
      const l = c.split(ot), u = [];
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
function po(e, t, r) {
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
function mb(e, t) {
  const r = [];
  for (const n of e)
    qy(n, t) || ((ie(n) || D(n)) && r.push(n.getMarker()), O(n) && r.push(...mb(n.getChildren(), t)));
  return r;
}
function yb(e) {
  const t = [];
  for (const r of e) {
    const n = Vu(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Vr(r);
    i && t.push(...yb(i));
  }
  return t;
}
function td(e, t, r) {
  const n = mb(e, r), i = yb(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function bb(e, t) {
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
  if (!(!S(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function rd(e, t) {
  const r = t && kb(e, t);
  return r ? Ju(e, r.start, r.end) : e;
}
function kb(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function xb(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Hu(e, o, s);
  if (!c) return;
  const l = rd(c, i), u = Hr(l.text, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (fi(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Tn.serializeEditorState(
    { type: Fr, version: Ur, content: u },
    s
  ).root.children;
  if (La(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = po(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (es(d, o) === Zi(e, o) && td(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  gb(d, f.serialized);
  const h = m0(e), m = Tb(d);
  for (let y = 0; y < h.length && y < m.length; y++)
    h[y].sid !== void 0 && m[y].number === h[y].number && (m[y].sid = h[y].sid);
  return Yu(
    e,
    l,
    f.live,
    d,
    "paras",
    o,
    s
  );
}
function m0(e) {
  const t = [], r = (n) => {
    Pe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : O(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Tb(e) {
  const t = [];
  for (const r of e) {
    Kh(r) && t.push(r);
    const n = Vr(r);
    n && t.push(...Tb(n));
  }
  return t;
}
function y0(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Bs(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = rd(l, i), f = Hr(d.text, {
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
  const h = p.content ?? [], m = Jy(h), y = e.getCategory() !== m, x = Ny(e, h, m, s);
  if (x.failure !== void 0) {
    x.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const C = x.children;
  if (La(C) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const M = po(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (es(C, o) === Zi(u, o) && td(u, C, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return gb(C, M.serialized), {
    // Annotation marks, mirroring `$rebuildNoteContent`'s carry.
    rebuilt: Yu(
      u,
      d,
      M.live,
      C,
      "noteContent",
      o,
      s
    ),
    contentNodes: u,
    category: m,
    categoryChanged: y
  };
}
function Np(e) {
  return e.$?.textType;
}
function b0(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Np(e) === Np(t);
}
function k0(e) {
  const t = [];
  for (const r of e) {
    const n = H(r);
    n?.isAttached() && Oe(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function x0(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!U(t)) return;
  const r = e.getTextContent();
  if (Cn(e)) return;
  const n = Sy.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Rp(e, t) {
  const r = e;
  r.marker = t, r.text = Iy(t, r.markerSyntax, r.nested);
}
function vb(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!$e.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Rp(a.node, s);
  const c = n.getChildren().filter(P).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Rp(l.node, s);
}
function Cb(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = js(e, i, n);
  if (!o) return;
  const a = rd(o, r), c = Hr(a.text, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (fi(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Tn.serializeEditorState(
    { type: Fr, version: Ur, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...ts(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && es(u, i) === Zi(d, i) && td(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Yu(
    d,
    a,
    [],
    u,
    "chapter",
    i,
    n
  );
}
function Sb(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (d) => {
    U(d) ? s.set(d.getKey(), d) : Ce(d) ? o.set(d.getKey(), d) : n.set(d.getKey(), [d]);
  };
  for (const d of e) {
    const f = H(d);
    if (!f?.isAttached()) continue;
    const p = Vs(f);
    if (p) {
      if (c(p), P(f)) {
        const h = ob(f, t.getMarker);
        h && i.push(h);
      }
      if (U(p)) {
        const h = x0(f);
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
    const d = Vs(r.node);
    d && c(d);
  }
  const u = k0(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: u,
    huskKeys: new Set(u.map((d) => d.getKey()))
  };
}
function _b(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && ji(r), s = n && ji(n);
  r && n && i !== void 0 && s !== void 0 && b0(r, n) && (r.text = i + s, e.splice(t, 1));
}
function Fa(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Vr(s.node) : void 0;
  if (!s || !o) return !1;
  const a = y0(e, t, r, n, i);
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
function T0(e, t, r, n, i) {
  const s = bb(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: u, huskKeys: d } = Sb(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && u.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  fo(ge().getChildren(), e.root.children, f);
  for (const p of l.values()) vb(p, f);
  for (const p of a.values())
    Fa(p, f, r, d, s);
  for (const p of o.values()) {
    const h = f.get(p[0].getKey());
    if (!h) continue;
    const m = xb(p, f, r, d, s);
    if (!m) continue;
    const y = h.siblings.indexOf(h.node);
    y < 0 || h.siblings.splice(y, p.length, ...m);
  }
  for (const p of c.values()) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = 1 + ts(p).length, y = Cb(p, r, s);
    if (!y) continue;
    const x = h.siblings.indexOf(h.node);
    x < 0 || h.siblings.splice(x, m, ...y);
  }
  for (const p of u) {
    const h = f.get(p.getKey());
    if (!h) continue;
    const m = h.siblings.indexOf(h.node);
    m < 0 || _b(h.siblings, m);
  }
  return ey(e, r.viewOptions);
}
function v0({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = Yi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        it,
        (i) => C0(i, t)
      );
  }, [r, n, t]), null;
}
function C0(e, t) {
  e.getMarker() !== kr && (e.isEmpty() || Xt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${kr}" (key ${e.getKey()})`
  ), e.setMarker(kr)));
}
function ys(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const S0 = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function Or(e) {
  return S0.exec(e)?.[1] ?? e;
}
function Mr(e, t) {
  const r = e.jsonPath.slice(Or(e.jsonPath).length);
  return { ...e, jsonPath: `${at(t)}${r}` };
}
function Mb(e, t) {
  return e.length === t.length && e.every((r, n) => r === t[n]);
}
function Eb(e) {
  if (th(e) || $o(e)) return !0;
  const t = Pb(e);
  return t === "marker" || t === "caller";
}
const _0 = /^\['([^']+)'\]$/;
function Pb(e) {
  if (qo(e))
    return _0.exec(
      e.jsonPath.slice(Or(e.jsonPath).length)
    )?.[1];
}
function Ab(e, t) {
  return Eb(e) && Mb(Zt(Or(e.jsonPath)), Sr(t));
}
function wb(e, t, r) {
  if (!e.isAttached()) return;
  const [n, i] = ar(
    Mr(t, Sr(e)),
    r
  );
  if (!(!n || i === void 0))
    return { key: n.getKey(), offset: i, type: O(n) ? "element" : "text" };
}
function Ob(e, t) {
  const r = It(e, t, { addressDisplayBytes: !0 }), n = r && H(r.key);
  return r && r.offset > 0 && P(n) && n.getMarkerSyntax() !== "opening" ? r : void 0;
}
function Nb(e, t) {
  const r = It(e, t, { addressDisplayBytes: !0 });
  if (!r || r.offset !== 0) return;
  const n = e.spans.findIndex((o) => o.key === r.key), i = e.spans[n], s = n > 0 ? e.spans[n - 1] : void 0;
  if (!(!i || !ws(i) || !s || s.end !== i.start || !ws(s)))
    return Fy(s);
}
function M0(e, t) {
  const r = Ob(e, t);
  if (r) return r;
  const n = Nb(e, t);
  if (n) return n;
  const i = It(e, t);
  return i && E0(e, i);
}
function E0(e, t) {
  if (t.type !== "text") return t;
  const r = e.spans.findIndex((a) => a.key === t.key), n = e.spans[r], i = e.spans[r + 1];
  if (!n || !i || n.end === n.start || t.offset !== n.end - n.start)
    return t;
  const s = e.text[i.start] === "\\", o = cr.test(e.text[n.end - 1]);
  return s || o ? { key: i.key, offset: 0, type: "text" } : t;
}
function Rb(e) {
  const t = e.markerName.length + 2, r = t + e.valueLength;
  return { valueStart: t, closerStart: r, closerLength: e.markerName.length + 2 };
}
function P0(e, t, r) {
  const { keyName: n } = e, { valueStart: i, closerStart: s } = Rb(e);
  return r === 0 ? { jsonPath: t, keyName: n } : r < i ? { jsonPath: t, keyName: n, keyOffset: r - 1 } : r < s ? {
    jsonPath: `${t}['${n}']`,
    propertyOffset: r - i
  } : { jsonPath: t, keyName: n, keyClosingMarkerOffset: r - s };
}
function A0(e, t) {
  const { valueStart: r, closerStart: n, closerLength: i } = Rb(e), s = (o, a, c) => o >= 0 && o <= a ? c + o : void 0;
  if (Lo(t))
    return s(t.keyOffset, e.markerName.length, 1);
  if (Io(t))
    return s(t.keyClosingMarkerOffset, i, n);
  if (Cl(t)) return 0;
  if (qo(t))
    return s(t.propertyOffset, e.valueLength, r);
}
function w0(e) {
  return Lo(e) || Io(e) || Cl(e) ? e.keyName : Pb(e);
}
function O0(e, t, r) {
  const n = M0(e.spelling, t), i = n && H(n.key);
  if (!n || !i) return;
  const s = e.foldedAttributes.find((o) => o.ownerKey === n.key);
  return s ? P0(
    s,
    at(Sr(i)),
    n.offset
  ) : yt(i, n.offset, r);
}
function N0(e, t) {
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
function fa(e, t) {
  const r = Zt(Or(t.jsonPath));
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
    return o.plan && o.indexWithinScope > 0 ? fa(e, { jsonPath: at([t.offset]) }) : { kind: "live", location: { ...t, offset: o.liveIndex } };
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
  const i = [n.liveIndex, ...r.slice(1)], s = N0(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: Mr(t, i) };
}
function qb(e, t) {
  const r = w0(t);
  if (r === void 0) return;
  const n = Zt(Or(t.jsonPath));
  for (const i of e)
    for (const s of i.foldedAttributes) {
      const o = H(s.ownerKey);
      if (s.keyName !== r || !o || !Mb(Sr(o), n))
        continue;
      const a = A0(s, t), c = i.spelling.spans.find((u) => u.key === s.ownerKey), l = a !== void 0 && c ? Wi(i.spelling, s.ownerKey, a) : void 0;
      return a === void 0 || !c || !l ? { resolution: void 0 } : {
        resolution: {
          kind: "literal",
          run: i,
          anchor: l,
          atWordByte: Ro(i.spelling, c.start + a)
        }
      };
    }
}
function R0(e, t, r, n) {
  const i = qb(t, r);
  if (i) return i.resolution;
  const [s, o] = ar(r, n.viewOptions);
  if (!s || o === void 0) return;
  const a = zu(e, s), c = a && t.find((f) => f.sentinelIndex === a.sentinelIndex);
  if (c) {
    const f = As(c.spelling, s, o);
    return f && {
      kind: "literal",
      run: c,
      anchor: f.anchor,
      atWordByte: Ro(c.spelling, f.position)
    };
  }
  if (!a) {
    const f = As(e, s, o);
    return f ? {
      kind: "anchor",
      anchor: f.anchor,
      atWordByte: Ro(e, f.position)
    } : void 0;
  }
  const l = Bu(a.member, s);
  if (!l) return;
  const u = U(a.member) ? Bs(a.member, n.getMarker, n.viewOptions)?.out : void 0, d = u && As(u, s, o);
  return {
    kind: "preserved",
    sentinelIndex: a.sentinelIndex,
    memberIndex: a.memberIndex,
    path: l,
    offset: o,
    type: O(s) ? "element" : "text",
    noteAnchor: d && {
      anchor: d.anchor,
      atWordByte: Ro(u, d.position)
    },
    isNoteOwnBytes: U(a.member) && Ab(r, a.member)
  };
}
function q0(e, t, r) {
  const n = qb(e, t);
  if (n) return n.resolution !== void 0;
  const [i, s] = ar(t, r);
  return i !== void 0 && s !== void 0;
}
function Ro(e, t) {
  const r = e.text[t];
  return r !== void 0 && !cr.test(r);
}
function $b(e, t) {
  if (t.type !== "text") return t;
  const r = Uy(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && cr.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function nd(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function $0(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function id(e) {
  const { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } = e;
  return t && r && n && i ? { liveFragment: t, scratchFragment: r, sentinelMap: n, alignment: i } : void 0;
}
function Ib(e) {
  const t = e.liveNodes[0];
  if (!t.isAttached()) return;
  if (e.kind !== "note" && O(t))
    return { key: t.getKey(), offset: 0, type: "element" };
  const r = t.getParent();
  return r ? { key: r.getKey(), offset: t.getIndexWithinParent(), type: "element" } : void 0;
}
function fn(e, t) {
  return t?.warn(
    `[positions] A settled location in a pending ${e.kind} scope could not be lined up with its live bytes; it resolves to the front of the scope.`
  ), Ib(e);
}
function Tc(e, t) {
  return t?.error("settled-position basis out of date — rebuilt"), Ib(e);
}
function qp(e) {
  const t = [];
  let r = 0;
  for (const n of e.spans) {
    n.isSentinel && t.push(n.end > n.start ? r : void 0);
    for (let i = n.start; i < n.end; i += 1)
      cr.test(e.text[i]) || (r += 1);
  }
  return t;
}
function I0(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, alignment: o } = t, a = qp(s)[r];
  if (a === void 0) return fn(e, n);
  const c = qp(i).findIndex(
    (f) => f !== void 0 && Uu(o, f, "live") === a
  ), l = c < 0 ? void 0 : i.sentinels[c]?.[0], u = l?.isAttached() ? l.getParent() : void 0;
  if (l && u)
    return { key: u.getKey(), offset: l.getIndexWithinParent(), type: "element" };
  const d = It(i, {
    nonWsBefore: co(o, a, "settled"),
    wsRun: 0
  });
  return d ? nd(e, d) : fn(e, n);
}
function Lb(e, t, r, n, i) {
  const s = id(e);
  if (!s) return fn(e, i);
  const o = !Kn(n), a = od(
    s.liveFragment,
    lo(s.alignment, t, "toLive"),
    o
  ), c = It(s.liveFragment, a, {
    addressDisplayBytes: o
  });
  return c ? nd(e, r ? $b(s.liveFragment, c) : c) : fn(e, i);
}
function L0(e, t, r, n, i, s) {
  const o = $0(r.sentinelMap, n);
  if (!o) return I0(t, r, n.sentinelIndex, s);
  const a = r.liveFragment.sentinels[o.sentinelIndex]?.[o.memberIndex];
  if (!a?.isAttached()) return Tc(t, s);
  const c = e.byFirstLiveKey.get(a.getKey());
  if (c?.kind === "note" && n.isNoteOwnBytes)
    return wb(a, i, e.viewOptions);
  if (c?.kind === "note")
    return n.noteAnchor ? Lb(
      c,
      n.noteAnchor.anchor,
      n.noteAnchor.atWordByte,
      i,
      s
    ) : fn(c, s);
  let l = a;
  for (const u of n.path) {
    if (!O(l)) return Tc(t, s);
    const d = l.getChildAtIndex(u);
    if (!d) return Tc(t, s);
    l = d;
  }
  return { key: l.getKey(), offset: n.offset, type: n.type };
}
function D0(e, t, r) {
  if (!e.scratch.getEditorState().read(() => {
    const [o, a] = ar(t, r);
    return Tr(o) && a !== void 0 && a >= o.getChildrenSize();
  })) return;
  const i = e.liveNodes[e.liveNodes.length - 1], s = i.getParent();
  if (Tr(s))
    return { key: s.getKey(), offset: i.getIndexWithinParent() + 1, type: "element" };
}
function U0(e, t, r) {
  const { plan: n } = r, { logger: i, viewOptions: s } = e.tier2;
  if (n.kind === "note" && r.scratchIndexes.length === 1 && Eb(r.location))
    return wb(n.liveNodes[0], r.location, t.viewOptions);
  const o = Mr(r.location, r.scratchIndexes);
  if (!n.scratch.getEditorState().read(() => q0(n.settledOnlyRuns, o, s))) return;
  const c = D0(n, o, s);
  if (c) return c;
  const l = id(n);
  if (!l) return fn(n, i);
  const u = n.scratch.getEditorState().read(
    () => R0(
      l.scratchFragment,
      n.settledOnlyRuns,
      o,
      e.tier2
    )
  );
  if (!u) return fn(n, i);
  if (u.kind === "preserved")
    return L0(t, n, l, u, r.location, i);
  if (u.kind === "literal") {
    const { run: d, anchor: f } = u, p = Ay(d, f.nonWsBefore, "toLiteral") ?? co(d.inner, f.nonWsBefore, "settled"), h = !Kn(r.location), m = od(
      l.liveFragment,
      {
        nonWsBefore: d.liveBefore + p,
        wsRun: f.nonWsBefore === 0 ? d.liveWsBefore + f.wsRun : f.wsRun
      },
      h
    ), y = It(l.liveFragment, m, {
      addressDisplayBytes: h
    });
    return y ? nd(
      n,
      u.atWordByte ? $b(l.liveFragment, y) : y
    ) : fn(n, i);
  }
  return Lb(n, u.anchor, u.atWordByte, r.location, i);
}
function $p(e, t, r) {
  const n = fa(t, r);
  if (!n) return;
  if (n.kind === "live") {
    const [o, a] = ar(n.location, t.viewOptions);
    return o && a !== void 0 ? n.location : void 0;
  }
  const i = U0(e, t, n), s = i && H(i.key);
  return s ? yt(s, i.offset, t.viewOptions) : void 0;
}
function Ip([e, t]) {
  if (!e || t === void 0) return;
  if (S(e)) return Ts(e.getKey(), t, "text");
  if (O(e)) return Ts(e.getKey(), t, "element");
  const r = e.getParent();
  if (!r) return;
  const n = e.getIndexWithinParent() + (t > 0 ? 1 : 0);
  return Ts(r.getKey(), n, "element");
}
function Db(e, t, r) {
  const n = ar(e, r), i = ar(t, r), [s, o] = n, [a, c] = i;
  if (s && a && s.is(a))
    return o !== void 0 && c !== void 0 && o > c;
  const l = Ip(n), u = Ip(i);
  return !!l && !!u && u.isBefore(l);
}
function Ub(e, t, r) {
  const n = fa(e, t), i = fa(e, r);
  if (!(n?.kind !== "scope" || i?.kind !== "scope" || n.plan !== i.plan))
    return n.plan.scratch.getEditorState().read(
      () => Db(
        Mr(n.location, n.scratchIndexes),
        Mr(i.location, i.scratchIndexes),
        e.viewOptions
      )
    );
}
function F0(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = $p(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = $p(e, t, r.end);
  if (!i) return;
  const s = Ub(t, r.start, r.end);
  return s !== void 0 && Db(n, i, t.viewOptions) !== s ? { ...r, start: i, end: n } : { ...r, start: n, end: i };
}
function Fb(e, t) {
  const r = Zt(Or(t.jsonPath));
  return r.length === 0 ? t : Mr(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function Kb(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function pa(e, t) {
  const r = t.liveNodes[0], n = Kb(e, t);
  if (n) {
    const s = ad(e, n, r, 0);
    return typeof s == "object" ? Zt(Or(s.jsonPath)) : void 0;
  }
  const i = K0(r, e.viewOptions);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function K0(e, t) {
  return !Ze(e) || !Tr(e.getParent()) ? Sr(e) : [Ri(e, 0, Ot(t)).index];
}
function sd(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function z0(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function B0(e, t, r, n, i) {
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
function j0(e, t) {
  const r = wy(e, t);
  if (r)
    return {
      run: r,
      within: { nonWsBefore: 0, wsRun: t.wsRun - r.liveWsBefore }
    };
  const n = Ku(e, t);
  if (n)
    return {
      run: n.run,
      within: n.within ?? {
        nonWsBefore: co(n.run.inner, n.count, "live"),
        wsRun: t.wsRun
      }
    };
}
function V0(e, t) {
  if (e.isSentinel) return !1;
  if (t) return !0;
  const r = H(e.key);
  return !(P(r) && r.getMarkerSyntax() !== "opening");
}
function od(e, t, r) {
  let n = 0, i = 0;
  for (const s of e.spans)
    for (let o = s.start; o < s.end; o += 1) {
      const a = cr.test(e.text[o]);
      if (n < t.nonWsBefore)
        a || (n += 1);
      else if (a) i += 1;
      else return i >= t.wsRun || V0(s, r) ? t : { ...t, wsRun: i };
    }
  return t;
}
function zb(e, t, r, n, i, s) {
  const { liveFragment: o, scratchFragment: a, sentinelMap: c, alignment: l } = t, u = zu(o, r);
  if (u) {
    const m = o.sentinels[u.sentinelIndex];
    if (!c[u.sentinelIndex]?.some((M) => M !== void 0)) {
      const M = m[0].getParent();
      if (M)
        return zb(
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
    const y = Bu(u.member, r);
    if (!y) {
      s?.error("settled-position basis out of date — rebuilt");
      return;
    }
    const x = c[u.sentinelIndex]?.[u.memberIndex];
    if (!x) return;
    const C = e.scratch.getEditorState().read(
      () => B0(a, x, y, n, i)
    );
    if (C) return C;
    s?.error("settled-position basis out of date — rebuilt");
    return;
  }
  const d = As(o, r, z0(e, r, n));
  if (!d) return;
  const f = j0(e.settledOnlyRuns, d.anchor);
  if (f)
    return e.scratch.getEditorState().read(() => O0(f.run, f.within, i));
  const p = lo(l, d.anchor, "toSettled"), h = !Kn(
    yt(r, n, i)
  );
  return e.scratch.getEditorState().read(() => {
    const m = Ob(a, p), y = m && H(m.key);
    if (y) return yt(y, m.offset, i);
    const x = Nb(a, p), C = x && H(x.key);
    if (C)
      return yt(C, x.offset, i);
    const M = od(a, p, h), R = It(a, M, { addressDisplayBytes: h });
    return R && W0(R, i);
  });
}
function W0(e, t) {
  const r = H(e.key);
  if (!r) return;
  const n = Tr(r) && e.offset >= r.getChildrenSize() && r.getLastDescendant();
  return n ? yt(
    n,
    O(n) ? n.getChildrenSize() : n.getTextContentSize(),
    t
  ) : yt(r, e.offset, t);
}
function ad(e, t, r, n) {
  if (t.kind === "note") {
    const a = yt(r, n, e.viewOptions);
    if (Ab(a, t.liveNodes[0])) {
      const c = pa(e, t);
      return c && Mr(a, c);
    }
  }
  const i = id(t);
  if (!i) return;
  const s = zb(
    t,
    i,
    r,
    n,
    e.viewOptions,
    e.logger
  );
  if (typeof s != "object") return s;
  const o = sd(
    t,
    pa(e, t),
    Zt(Or(s.jsonPath))
  );
  return o && Mr(s, o);
}
function H0(e) {
  const t = [], r = (n) => {
    if (O(n))
      n.getChildren().forEach((i, s) => {
        t.push({ node: n, offset: s }), r(i);
      }), t.push({ node: n, offset: n.getChildrenSize() });
    else if (S(n))
      for (let i = 0; i <= n.getTextContentSize(); i += 1)
        t.push({ node: n, offset: i });
  };
  return e.liveNodes.forEach(r), t;
}
function G0(e, t) {
  const r = t.scratch.getEditorState().read(() => yt(ge(), 0, e.viewOptions)), n = sd(
    t,
    pa(e, t),
    Zt(Or(r.jsonPath))
  );
  if (n) return Mr(r, n);
  const i = t.liveNodes[0], s = i.getParent();
  if (!s) return;
  const o = Kb(e, t);
  return o ? jb(e, o, s, i.getIndexWithinParent()) : Fb(
    e,
    yt(s, i.getIndexWithinParent(), e.viewOptions)
  );
}
function Bb(e, t, r) {
  const n = H0(t), i = r ? n.findIndex((s) => s.node.is(r.node) && s.offset === r.offset) : -1;
  for (let s = (i < 0 ? n.length : i) - 1; s >= 0; s -= 1) {
    const { node: o, offset: a } = n[s], c = ad(e, t, o, a);
    if (typeof c == "object") return c;
  }
  return G0(e, t);
}
function jb(e, t, r, n) {
  return ad(e, t, r, n) ?? Bb(e, t, { node: r, offset: n });
}
function Lp(e, t, r) {
  const n = e.planContaining(t);
  if (n) return jb(e, n, t, r);
  const i = Tr(t) && r >= t.getChildrenSize() && t.getLastChild(), s = i ? e.planContaining(i) : void 0;
  return s ? J0(e, s) ?? Bb(e, s, void 0) : Fb(e, yt(t, r, e.viewOptions));
}
function J0(e, t) {
  const r = t.scratch.getEditorState().read(() => {
    const i = ge();
    return yt(i, i.getChildrenSize(), e.viewOptions);
  }), n = sd(
    t,
    pa(e, t),
    Zt(Or(r.jsonPath))
  );
  return n && Mr(r, n);
}
function Y0(e) {
  const t = gu(e.viewOptions);
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = N();
  if (!A(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = Lp(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = Lp(e, o.getNode(), o.offset);
  if (a)
    return Ub(e, s, a) === !0 ? { start: a, end: s } : { start: s, end: a };
}
function Vb(e, t, r) {
  if (e === "para") {
    const [i] = t;
    return t.length === 1 && Ze(i) ? GP(i, r.getMarker, r.viewOptions) : t.every(ie) ? Hu(t, r.getMarker, r.viewOptions) : JP(t, r.getMarker, r.viewOptions);
  }
  if (e === "chapter") {
    const i = t.find(Ce);
    return i && js(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(U);
  return n && Bs(n, r.getMarker, r.viewOptions)?.out;
}
function X0(e, t) {
  const r = dh({
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
const Dp = "\0";
function Wb(e, t = []) {
  for (const r of e)
    t.push(r.getKey()), O(r) && Wb(r.getChildren(), t);
  return t;
}
function Q0(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((l) => l.getTextContent()).join(Dp), a = Wb(t).join(" "), c = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a, c].join(Dp);
}
function cd(e, t = []) {
  for (const r of e)
    U(r) && t.push(r), O(r) && cd(r.getChildren(), t);
  return t;
}
function Ka(e, t, r, n, i, s, o) {
  const a = X0(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l, settledSide: u } = a.getEditorState().read(() => {
    const h = Vb(e, ge().getChildren(), o.tier2);
    return {
      settledCount: xt(
        ge(),
        Ot(o.tier2.viewOptions)
      ).length,
      scratchFragment: h,
      settledSide: h && Fu(h)
    };
  }), d = { kind: e, liveNodes: t, liveCut: n, scratch: a, scratchFragment: l, settledCount: c };
  if ((r?.sentinels.length ?? 0) === 0 && (u?.runs.length ?? 0) === 0) {
    const h = r && u && ua(la(r, []), u).alignment;
    return { ...d, liveFragment: r, sentinelMap: [], settledOnlyRuns: [], alignment: h };
  }
  const f = r && s && Vy(r, s.live), p = f && u && ua(la(f, s.live), u);
  return p ? { ...d, liveFragment: f, ...p } : {
    ...d,
    liveFragment: r,
    sentinelMap: void 0,
    settledOnlyRuns: [],
    alignment: void 0
  };
}
function ld(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = kb(e, t);
  return r ? {
    liveFragment: Ju(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function ud(e, t) {
  for (const r of e.noteGlyphRenames.values())
    vb(r, t);
}
function Z0(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = ld(t, i), a = uo(e), c = /* @__PURE__ */ new Map();
  if (fo([e], [a], c), ud(r, c), !Fa(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && po(t, c, r.huskKeys);
  return Ka("note", [e], s, o, [a], l, n);
}
function ew(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = ld(t, i), a = e.map(uo), c = /* @__PURE__ */ new Map();
  fo(e, a, c), ud(r, c), cd(e).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => Fa(d, c, n.tier2, r.huskKeys, i)
  );
  const l = xb(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const u = t && po(t, c, r.huskKeys);
  return Ka("para", e, s, o, l, u, n);
}
function tw(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = ld(t, n), o = Cb(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...ts(e)];
  return Ka("chapter", a, i, s, o, void 0, r);
}
function rw(e, t, r, n, i, s) {
  const o = uo(e), a = /* @__PURE__ */ new Map();
  fo([e], [o], a), ud(n, a), cd([e]).filter((u) => n.noteScopes.has(u.getKey())).forEach(
    (u) => Fa(u, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const u of r) {
    const d = a.get(u.getKey());
    if (!d) continue;
    const f = d.siblings.indexOf(d.node);
    f < 0 || (_b(d.siblings, f), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && po(t, a, c);
  return Ka("para", [e], t, void 0, [o], l, i);
}
function nw(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function Up(e, t) {
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
function iw(e) {
  return e.liveNodes.every((r) => r.isAttached()) ? (e.liveFragment?.spans ?? []).every((r) => H(r.key) !== null) : !1;
}
function Fp(e) {
  return (e.type === "element" ? e.node : e.segments[0]?.node)?.getTopLevelElement() ?? null;
}
function sw(e, t) {
  const r = xt(ge(), t), n = [], i = [];
  let s = 0;
  for (let o = 0; o < r.length; ) {
    const a = Fp(r[o]), c = a && e.get(a.getKey());
    if (!c) {
      n[o] = s, i.push({ liveIndex: o, indexWithinScope: 0 }), s += 1, o += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((d) => d.getKey()));
    let u = 0;
    for (; o + u < r.length; ) {
      const d = Fp(r[o + u]);
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
function Kp(e) {
  const t = bb(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), Up(e.tier2.viewOptions, e.tier2.logger);
  e.cache.getMarker !== e.tier2.getMarker && (e.cache.entries.clear(), e.cache.getMarker = e.tier2.getMarker);
  const r = Sb(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const h = f.liveNodes[0].getKey();
    n.set(h, f), f.liveNodes.forEach((m) => i.set(m.getKey(), f)), p && f.liveNodes.forEach((m) => s.set(m.getKey(), f));
  }, c = (f, p, h, m) => {
    o.add(f);
    const y = Vb(p, h, e.tier2), x = Q0(
      p,
      h,
      y?.text ?? "",
      e.tier2,
      t
    ), C = e.cache.entries.get(f);
    if (C?.signature === x && iw(C.plan)) return C.plan;
    const M = m(y);
    return M ? e.cache.entries.set(f, { signature: x, plan: M }) : e.cache.entries.delete(f), M;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => Z0(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => ew(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...ts(f)],
        (p) => tw(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!(ie(p) || Ze(p)) || nw(f, i)) continue;
    const h = l.get(p.getKey()) ?? { para: p, husks: [] };
    h.husks.push(f), l.set(p.getKey(), h);
  }
  for (const [f, { para: p, husks: h }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (m) => rw(p, m, h, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0)
    return Up(e.tier2.viewOptions, e.tier2.logger);
  const { liveToSettled: u, settledToLive: d } = sw(
    s,
    Ot(e.tier2.viewOptions)
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
    viewOptions: e.tier2.viewOptions,
    logger: e.tier2.logger
  };
}
function ow({
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
    i.scrRef = e, i.onScrRefChange = t, ha(s, e) || aw(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      Jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = bl(r);
        zp(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Mo(s) === Mo(r.getEditorState())
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
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (bl(r) || zp(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Mo(a) === Mo(c)
      }));
    };
    return nt(
      ...[Ut, Ar].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      vr,
      () => {
        const i = n.current;
        return i.phase === "idle" && fw(i, lw()), !1;
      },
      $t
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(vr, void 0));
    };
    return nt(
      r.registerMutationListener(wt, i),
      r.registerMutationListener(mt, i)
    );
  }, [r]), j(() => {
    const i = () => mw(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function aw(e, t, r) {
  if (cw(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = bl(t);
  (!n || n === r.book) && t.update(() => Hb(t, r.chapterNum, r.verseNum));
}
function cw(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ha(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function lw() {
  const e = N(), t = Jl(e);
  if (!t) return;
  const r = dd(), n = vg(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = ou(t, e), { verseNum: o, verse: a } = AC(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function bl(e) {
  return e.getEditorState().read(() => dd()?.getCode() || void 0);
}
function dd() {
  return ge().getChildren().find(ct);
}
function zp(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && vc(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || vc(e, t), e.phase = "navigating") : i && vc(e, t), r && r !== e.scrRef.book && Yb(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function vc(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Hb(t, e.scrRef.chapterNum, e.scrRef.verseNum)
    );
  });
}
function Hb(e, t, r) {
  const n = N()?.clone();
  uw(t, r);
  const i = N();
  i && !(n && i.is(n)) && e.dispatchCommand(Rl, void 0);
}
function uw(e, t) {
  const r = Jl(N()), n = au(r)?.getNumber(), i = vg(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Pg(n) ? Jb(t, n) : parseInt(n, 10) === t))
    return;
  const o = ge().getChildren(), a = Tg(o, e);
  if (!a) return;
  const c = yv(o, a), l = uv(c, !0);
  mv(c, l);
  let u;
  try {
    u = SC(c, t);
  } catch {
    return;
  }
  u && (ie(u) ? !S(u.getFirstChild()) && Qi(u) || or(u, 0) : dw(u));
}
function dw(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ye(n)) {
    or(t, r);
    return;
  }
  const i = Ea(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (S(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = O(n) && !U(n) ? Gb(n) : void 0;
  s ? s.select(0, 0) : or(t, r);
}
function Gb(e) {
  const t = e.getFirstChild();
  if (S(t)) return t;
  if (O(t) && !U(t)) return Gb(t);
}
function Mo(e) {
  return e.read(() => {
    const t = ge().getChildren().find(ze);
    return `${dd()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function fw(e, t) {
  e.phase !== "navigating" && t && (pw(t, e.scrRef) || Yb(e, hw(t, e.scrRef)));
}
function pw(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Jb(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Jb(e, t) {
  try {
    return Yl(e, t);
  } catch {
    return !1;
  }
}
function hw(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const gw = 8;
function Yb(e, t) {
  return ha(t, e.scrRef) || e.pendingEchoes.some((r) => ha(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > gw && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ha(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function mw(e) {
  e.phase = "idle";
}
function yw(e) {
  return ct(e) ? `${e.__code}` : Ce(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : io(e) ? `${e.__marker} "${e.__number}"` : Qt(e) ? `${e.__caller}` : ui(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ie(e) ? `${e.__marker}` : S(e) ? `"${e.__text}"${bw(e)}` : pe(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Pe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function bw(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[zn]) : "";
}
function kw() {
  const [e] = le();
  return /* @__PURE__ */ _(
    Yk,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: yw,
      editor: e
    }
  );
}
const Xb = Zp(null), Bp = 4;
function xw({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = eh(Xb);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function Tw({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = he(), [s, o] = he(), a = de(
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
  }, l = Fe(() => ({ registerItem: a }), [a]);
  return j(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ _(Xb.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function vw({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Z(null), c = Z(null), [l, u] = he(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: h, left: m } = f.getBoundingClientRect();
      p.style.top = `${h + f.offsetHeight + Bp}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (h) => {
        const m = h.target;
        o && a.current && a.current.contains(m) || f.contains(m) || u(!1);
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
          const { top: m } = p.getBoundingClientRect(), y = m + p.offsetHeight + Bp;
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
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ _("span", { className: i }),
          t && /* @__PURE__ */ _("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ _("i", { className: "chevron-down" })
        ]
      }
    ),
    l && Dn(
      /* @__PURE__ */ _(Tw, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const kl = {
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
}, xl = {
  ...kl,
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
function Cw({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ _(
    vw,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + Sw(t),
      buttonLabel: _w(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(kl).map((n) => /* @__PURE__ */ Ae(
        xw,
        {
          className: "item block-marker " + Mw(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: kl[n] })
          ]
        },
        n
      ))
    }
  );
}
function Sw(e) {
  return e && e in xl ? e : "ban";
}
function _w(e) {
  return e && e in xl ? xl[e] : "No Style";
}
function Mw(e) {
  return e ? "active dropdown-item-active" : "";
}
function jp() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const Ew = ni(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = he(s), [c, l] = he(), [u, d] = he(!1), [f, p] = he(!1), h = de(
    ({
      canUndo: m,
      canRedo: y,
      blockMarker: x,
      contextMarker: C
    }) => {
      d(m), p(y), l(x), n?.({
        canUndo: m,
        canRedo: y,
        blockMarker: x,
        contextMarker: C
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    vr,
    (m, y) => (a(y), !1),
    Dr
  ), [s]), /* @__PURE__ */ Ae(Fn, { children: [
    /* @__PURE__ */ _(zm, { onStateChange: h }),
    /* @__PURE__ */ Ae("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(ph, void 0);
          },
          title: Uo ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(hh, void 0);
          },
          title: Uo ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(jp, {}),
      o === s && /* @__PURE__ */ Ae(Fn, { children: [
        /* @__PURE__ */ _(
          Cw,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ _(jp, {})
      ] }),
      /* @__PURE__ */ _("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), Pw = Oa(), Aw = {}, ww = {}, Vp = Tx.filter((e) => e !== ql);
function Ow() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Wp(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
function Hp() {
  const e = N();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.focus.getNode();
  return S(t) ? { key: t.getKey(), offset: e.focus.offset } : void 0;
}
function Nw(e) {
  const t = [], r = (n, i) => n?.forEach((s, o) => {
    if (typeof s != "object") return;
    const a = [...i, o];
    s.type === "note" && t.push(at(a)), r(s.content, a);
  });
  return r(e?.content, []), t;
}
function Rw(e, t) {
  return e.editorState === t.editorState && e.pendedKeys === t.pendedKeys && e.transientInput === t.transientInput && e.caretKey === t.caretKey && e.caretOffset === t.caretOffset && e.viewOptions === t.viewOptions && e.getMarker === t.getMarker;
}
function qw({
  listener: e
}) {
  const [t] = le();
  return Ws(
    () => t.registerUpdateListener((r) => e(r, t)),
    [t, e]
  ), null;
}
const Qb = ni(function({
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
  const d = Z(null), f = Z(null), p = Z(null), h = Z(t), m = Z(!1), y = Z(void 0), x = Z(void 0), C = Z(void 0), M = Z({ entries: /* @__PURE__ */ new Map() }), R = Z(void 0), E = Z(0), L = Z(!0), T = Z(void 0), [$, W] = he(t), [G, te] = he(0), [Ne, Y] = he(), {
    isReadonly: Te = !1,
    structureProtectionMode: qe = "off",
    hasExternalUI: Ft = !1,
    hasSpellCheck: ee = !1,
    textDirection: B = "ltr",
    markerMenuTrigger: oe = "\\",
    view: je,
    nodes: Xe,
    debug: fe = !1,
    contextMenu: Nr,
    styleInfo: Nt,
    markerSettleDelayMs: rs
  } = a ?? ww, ur = je ?? Pw, pi = Ks(ur) && (ur.markerMode !== "hidden" || !ur.hasSpacing || ur.hasGutterParaMarkers || ur.hasActiveTextFocusBox) ? {
    ...ur,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : ur, ns = Z(pi);
  yr(ns.current, pi) || (ns.current = pi);
  const re = ns.current, ht = Fe(() => Xe ?? Aw, [Xe]), ho = Fe(() => Nr, [Nr]), ve = Fe(
    () => gC(Nt ?? Yo),
    [Nt]
  ), Rr = Z(c);
  yr(Rr.current, c) || (Rr.current = c);
  const Q = Rr.current, Rt = Ks(re), be = Te || Rt, Zr = pi !== ur;
  j(() => {
    Rt && !Te && Q?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Zr && Q?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [Rt, Te, Zr, Q]);
  const en = Z(null), dr = Fe(() => {
    if (re.markerMode !== "editable") return;
    const w = Nt ?? Yo;
    return {
      getContext: () => en.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (F) => SP(
        w,
        F,
        ht.extraValidMarkers
      ),
      getEnterItems: (F) => _P(
        w,
        F,
        ht.extraValidMarkers
      ),
      apply: (F, z) => {
        const X = en.current;
        X && (z.trigger === "enter" ? X.splitParagraphWithMarker(F.marker) : X.applyMarkerMenuSelection(F, z));
      },
      commitTypedCloser: (F) => {
        en.current?.commitTypedCloser(F);
      }
    };
  }, [re, Nt, ht.extraValidMarkers]), is = (w) => {
    if (Rt)
      throw new Error(
        `Cannot ${w} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, qr = (w) => {
    if (is(w), be) throw new Error(`Cannot ${w} in readonly mode`);
  }, En = Fe(
    () => [Qe, ...Rt ? XS : vu],
    [Rt]
  ), go = Fe(
    () => ({
      namespace: "platformEditor",
      theme: { ...by, showCharMarkerTitles: re.showCharMarkerTitles },
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
    if (w !== void 0 && !W1(w, ht.extraValidMarkers))
      throw new Error(`Unsupported character marker '${w}'`);
  }
  const vt = de(() => {
    const w = d.current;
    if (!w) return h.current;
    const F = () => {
      if (!m.current) return;
      const Kt = hs.deserializeEditorState(w.getEditorState(), re);
      Kt && (h.current = Kt, m.current = !1);
    }, z = Hd(w), X = x.current;
    if ((!z || z.size === 0) && !X)
      return F(), h.current;
    const _e = w.getEditorState(), ue = C.current, ke = {
      editorState: _e,
      pendedKeys: z ? [...z].sort().join(",") : "",
      transientInput: X,
      caretKey: ue?.key,
      caretOffset: ue?.offset,
      viewOptions: re,
      getMarker: ve
    }, Ge = R.current;
    if (Ge && Rw(Ge.key, ke)) return Ge.usj;
    const pr = _e.toJSON(), Ct = _e.read(
      () => T0(
        pr,
        z ?? /* @__PURE__ */ new Set(),
        { viewOptions: re, getMarker: ve, logger: Q },
        X,
        ue
      )
    );
    return Ct ? (R.current = { key: ke, usj: Ct }, Ct) : (F(), h.current);
  }, [re, ve, Q]), ut = de(() => {
    const w = d.current;
    if (!w) return;
    const F = {
      pendedKeys: Hd(w) ?? /* @__PURE__ */ new Set(),
      transientInput: x.current,
      lastKnownCaret: C.current,
      tier2: { viewOptions: re, getMarker: ve, logger: Q },
      nodes: En,
      cache: M.current
    };
    return ys(F) && F.cache.entries.clear(), F;
  }, [re, ve, Q, En]), tn = de(
    (w) => {
      const F = d.current, z = ut();
      if (!(!F || !z))
        return ys(z) ? w : F.getEditorState().read(() => {
          const X = Kp(z);
          return F0(z, X, w);
        });
    },
    [ut]
  );
  j(() => (L.current = !0, () => {
    L.current = !1;
  }), []);
  const rn = de(
    (w, F) => w.read(() => {
      const z = ut(), X = z && Y0(Kp(z));
      return !X && A(N()) && Q?.warn(
        `${F} refused: the selection could not be expressed against the document the host is reading`
      ), X;
    }),
    [ut, Q]
  ), hi = de(
    (w) => {
      if (!i) return;
      const F = d.current, z = ut();
      E.current += 1;
      const X = E.current;
      if (!F || !z || ys(z)) {
        i(w);
        return;
      }
      queueMicrotask(() => {
        if (!L.current || X !== E.current || d.current !== F) return;
        const _e = rn(F, "onSelectionChange");
        X === E.current && i(_e);
      });
    },
    [i, ut, rn]
  ), gi = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const w = d.current?.getRootElement();
      return !!w && w.ownerDocument.activeElement === w;
    },
    undo() {
      d.current?.dispatchCommand(ph, void 0);
    },
    redo() {
      d.current?.dispatchCommand(hh, void 0);
    },
    cut() {
      qr("cut"), d.current?.dispatchCommand(Vn, null);
    },
    copy() {
      d.current?.dispatchCommand(ba, null);
    },
    paste() {
      qr("paste"), d.current && Mu(d.current);
    },
    pastePlainText() {
      qr("paste as plain text"), d.current && Eu(d.current);
    },
    getUsj() {
      return vt();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(pb, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(w) {
      if (!w) {
        x.current = void 0;
        return;
      }
      const F = d.current?.getEditorState().read(() => {
        const z = N();
        return A(z) && z.isCollapsed() ? z.focus.key : void 0;
      });
      x.current = { input: w, nodeKey: F ?? C.current?.key };
    },
    setUsj(w) {
      if (!yr(h.current, w)) {
        h.current = w, x.current = void 0;
        const F = yr($, w);
        W(w), F && te((z) => z + 1);
      }
    },
    applyUpdate(w, F = "remote") {
      if (Rt && F === "remote") {
        Rr.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      is("apply an update");
      const z = d.current;
      z?._updating && Rr.current?.error(
        "Editor: applyUpdate was called inside an update of this editor; its change will be announced as a local edit without the given ops. Call it outside editor updates, commands, and update listeners."
      ), z && Wd(z, F);
      try {
        z?.update(
          () => {
            F === "remote" && Wn(ql), b_(w, re, ht, Q);
          },
          { discrete: !0 }
        );
      } finally {
        z && Wd(z, void 0);
      }
      const X = d.current?.getEditorState();
      if (!X) return;
      const _e = hs.deserializeEditorState(X, re);
      if (_e) {
        const ue = !yr(h.current, _e);
        ue && (h.current = _e);
        const ke = vt();
        if (ke && (ue || !yr($, _e))) {
          const Ge = of(w, X, "apply");
          T.current = ke, s?.(ke, w, F, Ge);
        }
      }
    },
    replaceEmbedUpdate(w, F) {
      const z = d.current?.read(() => KC(w, F));
      z ? this.applyUpdate(z) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${w}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      const w = d.current;
      if (!w) return;
      w.read(() => {
      });
      const F = ut();
      return !F || ys(F) ? w.read(() => gu(re)) : rn(w, "getSelection");
    },
    setSelection(w) {
      const F = tn(w);
      if (!F) {
        Q?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      d.current?.update(() => {
        const z = hu(F, re);
        z !== void 0 && (pn(z), (!Bn().isEditable() || Wp(z.anchor) && Wp(z.focus)) && d.current?.dispatchCommand(vr, void 0));
      });
    },
    setAnnotation(w, F, z, X, _e) {
      let ue, ke, Ge, pr;
      typeof X == "function" || X === void 0 ? (ue = X, ke = _e) : (ue = X.onClick, ke = X.onRemove, Ge = X.onMouseEnter, pr = X.onMouseLeave);
      const Ct = tn(w);
      if (!Ct) {
        Q?.warn(
          `setAnnotation refused for ${F} "${z}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        Ct,
        Rd(F),
        z,
        ue,
        ke,
        Ge,
        pr
      );
    },
    removeAnnotation(w, F) {
      f.current?.removeAnnotation(Rd(w), F);
    },
    formatPara(w) {
      qr("format a paragraph"), d.current?.update(() => {
        const F = N();
        if (!A(F)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${w}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        Zk(F, () => Is(w));
        const z = N();
        if (!A(z)) return;
        const X = /* @__PURE__ */ new Set();
        z.getNodes().forEach((_e) => {
          const ue = _e.getTopLevelElement();
          ie(ue) && X.add(ue);
        }), X.forEach((_e) => Qy(_e, w, re));
      });
    },
    getElementByKey(w) {
      return d.current?.read(
        () => d.current?.getElementByKey(w) ?? void 0
      );
    },
    removeCharacterMarker(w) {
      if (be) throw new Error("Cannot remove character marker in readonly mode");
      Tt(w);
      let F = !1;
      return d.current?.update(
        () => {
          const z = N();
          A(z) && (F = fy(z, w, re));
        },
        { discrete: !0 }
      ), F;
    },
    replaceCharacterMarker(w, F) {
      if (be) throw new Error("Cannot replace character marker in readonly mode");
      Tt(w), Tt(F);
      let z = !1;
      return d.current?.update(
        () => {
          const X = N();
          A(X) && (z = iP(X, w, F));
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
      return d.current?.update(
        () => {
          const X = N();
          A(X) && (z = sP(
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
      if (!d.current) return;
      if (!nl(w, ht.extraValidMarkers))
        throw new Error(`Unsupported marker '${w}'`);
      const F = il(
        w,
        y,
        re,
        ht,
        Q,
        void 0,
        Nt
      );
      return F.action({ editor: d.current, reference: r }), F.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!Te)
        return d.current?.getEditorState().read(() => PA());
    },
    applyMarkerMenuSelection(w, F) {
      if (Te) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (w.kind !== "closeTag" && !nl(w.marker, ht.extraValidMarkers))
        throw new Error(`Unsupported marker '${w.marker}'`);
      let z;
      return d.current.update(() => {
        z = RA(w, F, r, {
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
      d.current && d.current.update(() => {
        ib(w, re);
      });
    },
    commitTypedMarker(w, F) {
      if (Te) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let z = !1;
      return d.current.update(() => {
        z = NA(w, F), z || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), z;
    },
    commitTypedCloser(w) {
      if (Te) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let F = !1;
      return d.current.update(() => {
        F = nb(w), F || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), F;
    },
    insertNote(w, F, z) {
      qr("insert a note");
      const X = z && tn(z);
      if (z && !X) {
        Q?.warn(
          `insertNote refused for \\${w}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.update(() => {
        const _e = vm(
          w,
          F,
          X,
          r,
          re,
          ht,
          Q
        );
        _e && !_e.getIsCollapsed() && (y.current = _e.getKey());
      });
    },
    selectNote(w) {
      const F = d.current;
      if (!F) return;
      const z = ut();
      if (typeof w == "string" || !z || ys(z)) {
        F.update(() => {
          const ue = kf(w);
          ue && (xf(ue, re), ue.getIsCollapsed() || (y.current = ue.getKey()));
        });
        return;
      }
      const X = Nw(vt())[w], _e = X ? tn({ start: { jsonPath: X } }) : void 0;
      _e && F.update(() => {
        const [ue, ke] = ar(_e.start, re);
        if (!ue || ke === void 0) return;
        const Ge = U(ue) ? ue : rt(ue, U);
        U(Ge) ? (xf(Ge, re), Ge.getIsCollapsed() || (y.current = Ge.getKey())) : S(ue) && ue.select(ke, ke);
      });
    },
    getNoteOps(w) {
      return d.current?.read(() => {
        const F = kf(w);
        if (F)
          return lu(F);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  en.current = gi, vl(u, () => gi), j(() => {
    const w = d.current;
    if (w)
      return w.registerUpdateListener(({ editorState: F }) => {
        const z = F.read(Hp);
        z && (C.current = z);
      });
  }, []);
  const fr = Z({ onUsjChange: s, viewOptions: re, isBlockVerse: Rt, readSettledUsj: vt });
  fr.current = { onUsjChange: s, viewOptions: re, isBlockVerse: Rt, readSettledUsj: vt };
  const mi = de((w, F) => {
    const { editorState: z, dirtyElements: X, dirtyLeaves: _e, tags: ue } = w;
    if (X.size === 0 && _e.size === 0) return;
    if (ue.has(Nl)) {
      const hr = fr.current, An = !hr.isBlockVerse && hs.deserializeEditorState(z, hr.viewOptions);
      An && (h.current = An), T.current = h.current;
      return;
    }
    if (Zl(F)) return;
    if (Vp.some((hr) => ue.has(hr))) {
      m.current = !0;
      return;
    }
    const ke = fr.current;
    if (ke.isBlockVerse) return;
    Vg(F, z, ue);
    const Ge = z.read(Hp);
    Ge && (C.current = Ge);
    const pr = m_(w, {
      ignoreTags: Vp
    }), Ct = pr ? [] : new Ni(z.read(() => y_(F, w))).chop().ops;
    if (!pr) {
      const hr = hs.deserializeEditorState(z, ke.viewOptions);
      hr && (h.current = hr);
    }
    if (!ke.onUsjChange) return;
    const Kt = ke.readSettledUsj();
    Kt && (Ct.length === 0 && yr(T.current, Kt) || (T.current = Kt, Ct.length === 0 ? ke.onUsjChange(Kt, void 0, "local", void 0) : ke.onUsjChange(Kt, Ct, "local", of(Ct, z))));
  }, []), Pn = de(
    (w) => {
      Y(w.contextMarker), o?.(w);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Ae(mh, { initialConfig: go, children: [
      /* @__PURE__ */ _(yM, { isEditable: !be }),
      /* @__PURE__ */ Ae("div", { className: "editor-container", children: [
        Ft ? /* @__PURE__ */ _(zm, { onStateChange: Pn }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (be ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              Ew,
              {
                ref: p,
                editorRef: en,
                isReadonly: be,
                onStateChange: Pn
              }
            )
          }
        ),
        /* @__PURE__ */ Ae("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(bh, { editorRef: d }),
          /* @__PURE__ */ _(
            Qk,
            {
              contentEditable: /* @__PURE__ */ _(
                yh,
                {
                  className: `editor-input usfm ${CS(re).join(" ")}${re.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${re.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: ee
                }
              ),
              placeholder: /* @__PURE__ */ _(Ow, {}),
              ErrorBoundary: kh
            }
          ),
          Ft && /* @__PURE__ */ _(mM, {}),
          /* @__PURE__ */ _(xh, {}),
          r && n && /* @__PURE__ */ _(ow, { scrRef: r, onScrRefChange: n }),
          r && !Ft && /* @__PURE__ */ _(
            zE,
            {
              trigger: oe,
              scrRef: r,
              contextMarker: Ne,
              getMarkerAction: (w) => il(
                w,
                y,
                re,
                ht,
                Q,
                void 0,
                Nt
              ),
              editableHarness: dr
            }
          ),
          /* @__PURE__ */ _(
            xM,
            {
              scripture: $,
              scriptureRef: h,
              nodeOptions: ht,
              editorAdaptor: Tn,
              viewOptions: re,
              logger: Q
            },
            G
          ),
          /* @__PURE__ */ _(FM, { onChange: hi, viewOptions: re }),
          /* @__PURE__ */ _(qw, { listener: mi }),
          /* @__PURE__ */ _(uP, { viewOptions: re }),
          /* @__PURE__ */ _(g_, { ref: f, logger: Q, viewOptions: re }),
          /* @__PURE__ */ _(j_, { viewOptions: re }),
          /* @__PURE__ */ _(iM, {}),
          /* @__PURE__ */ _(uM, {}),
          re?.markerMode !== "editable" && /* @__PURE__ */ _(dM, { logger: Q }),
          /* @__PURE__ */ _(gM, { options: ho }),
          /* @__PURE__ */ _(kM, {}),
          /* @__PURE__ */ _(qA, {}),
          /* @__PURE__ */ _(
            l0,
            {
              viewOptions: re,
              getMarker: ve,
              logger: Q,
              markerSettleDelayMs: rs
            }
          ),
          /* @__PURE__ */ _(
            g0,
            {
              styleInfo: Nt,
              viewOptions: re,
              logger: Q
            }
          ),
          /* @__PURE__ */ _(
            TM,
            {
              expandedNoteKeyRef: y,
              nodeOptions: ht,
              viewOptions: re,
              logger: Q
            }
          ),
          /* @__PURE__ */ _(UM, {}),
          /* @__PURE__ */ _(U_, {}),
          /* @__PURE__ */ _($_, {}),
          /* @__PURE__ */ _(v0, { viewOptions: re, logger: Q }),
          /* @__PURE__ */ _(KM, {}),
          /* @__PURE__ */ _(PE, { structureProtectionMode: qe }),
          /* @__PURE__ */ _(AE, { textDirection: B }),
          /* @__PURE__ */ _(OE, {}),
          /* @__PURE__ */ _(FE, {}),
          l
        ] }),
        fe && /* @__PURE__ */ _(kw, {})
      ] })
    ] }, re.verseLayout ?? "inline")
  );
}), FO = ni(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(Qb, { ref: r, ...i });
});
function Zb() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ga(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Zb() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function ek(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Zb() : r,
    quote: e,
    type: "thread"
  };
}
function Gp(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function $w(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Cc(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class Iw {
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
    this._comments = t, Cc(this);
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
          const c = Gp(a);
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
    this._comments = i, Cc(this);
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
          const c = Gp(a);
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
    return this._comments = n, Cc(this), t.type === "comment" ? {
      index: s,
      markedComment: $w(t)
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
    return t !== null ? t.doc.get("comments", Sd) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new _d(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Sd();
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
      hx,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      $t
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof gx) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const h = p.insert, m = p.retain, y = p.delete, x = u.parent, C = u === r ? void 0 : x instanceof _d && this._comments.find((M) => M.id === x.get("id"));
              if (Array.isArray(h)) {
                const M = f;
                h.slice().reverse().forEach((R) => {
                  const E = R.get("id"), T = R.get("type") === "thread" ? ek(
                    R.get("quote"),
                    R.get("comments").toArray().map(
                      ($) => ga(
                        $.get("content"),
                        $.get("author"),
                        $.get("id"),
                        $.get("timeStamp"),
                        $.get("deleted")
                      )
                    ),
                    E
                  ) : ga(
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
function Lw(e) {
  const [t, r] = he(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function Dw({
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
      const u = l.target;
      i.current !== null && !i.current.contains(u) && n && e();
    }, c = i.current;
    return c !== null && (s = c.parentElement, s !== null && s.addEventListener("click", a)), window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o), s !== null && s?.removeEventListener("click", a);
    };
  }, [n, e]), /* @__PURE__ */ _("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Ae("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function Uw({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Dn(
    /* @__PURE__ */ _(Dw, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function tk() {
  const [e, t] = he(null), r = de(() => {
    t(null);
  }, []), n = Fe(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _(Uw, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const Fw = {
  ...by,
  paragraph: "CommentEditorTheme__paragraph"
};
function Kw(...e) {
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
  return /* @__PURE__ */ _(
    "button",
    {
      disabled: i,
      className: Kw(
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
function zw({
  className: e
}) {
  return /* @__PURE__ */ _(yh, { className: e || "ContentEditable__root" });
}
function Bw({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const Jp = Sl("INSERT_INLINE_COMMAND");
function jw({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = de(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Ws(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ _("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ _("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ _("i", { className: "icon add-comment" }) }) });
}
function Vw({ onEscape: e }) {
  const [t] = le();
  return j(() => t.registerCommand(
    fh,
    (r) => e(r),
    qi
  ), [t, e]), null;
}
function rk({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(mh, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: Fw
  }, children: /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      dx,
      {
        contentEditable: /* @__PURE__ */ _(zw, { className: e }),
        placeholder: /* @__PURE__ */ _(Bw, { children: s }),
        ErrorBoundary: kh
      }
    ),
    /* @__PURE__ */ _(ux, { onChange: n }),
    /* @__PURE__ */ _(xh, {}),
    t !== !1 && /* @__PURE__ */ _(ax, {}),
    /* @__PURE__ */ _(Vw, { onEscape: r }),
    /* @__PURE__ */ _(cx, {}),
    i !== void 0 && /* @__PURE__ */ _(bh, { editorRef: i })
  ] }) });
}
function nk(e, t) {
  return de(
    (r, n) => {
      r.read(() => {
        e(fx()), t(!px(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function Ww({
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
  ), l = Z(null), u = sk(), d = de(() => {
    e.getEditorState().read(() => {
      const m = N();
      if (A(m)) {
        l.current = m.clone();
        const y = m.anchor, x = m.focus, C = ex(
          e,
          y.getNode(),
          y.offset,
          x.getNode(),
          x.offset
        ), M = a.current;
        if (C !== null && M !== null) {
          const { left: R, bottom: E, width: L } = C.getBoundingClientRect(), T = tx(e, C);
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
  Ws(() => {
    d();
    const m = c.container, y = document.body;
    return y !== null ? (y.appendChild(m), () => {
      y.removeChild(m);
    }) : () => {
    };
  }, [c.container, d]), j(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (m) => (m.preventDefault(), t(), !0), p = () => {
    if (s) {
      let m = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      m.length > 100 && (m = m.slice(0, 99) + "…"), r(
        ek(m, [ga(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, h = nk(i, o);
  return /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      rk,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: h
      }
    ),
    /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ _(vn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ _(
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
function Hw({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = Z(null), c = sk(), l = nk(i, o);
  return /* @__PURE__ */ Ae(Fn, { children: [
    /* @__PURE__ */ _(
      rk,
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
      vn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(ga(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(Vk, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function ik({
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
      /* @__PURE__ */ _(
        vn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ _(
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
function Yp({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = he(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = tk();
  return /* @__PURE__ */ Ae("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Ae("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Ae(Fn, { children: [
      /* @__PURE__ */ _(
        vn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ _(
              ik,
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
function Gw({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = he(0), [l, u] = tk(), d = Fe(
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
  }, [a]), /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
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
              /* @__PURE__ */ _("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ _(
              vn,
              {
                onClick: () => {
                  u("Delete Thread", (m) => /* @__PURE__ */ _(
                    ik,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: m
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ _("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((m) => /* @__PURE__ */ _(
            Yp,
            {
              comment: m,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            m.id
          )) }),
          /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
            Hw,
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
      Yp,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function Jw({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ Ae("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ _("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ _(
      Gw,
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
function sk() {
  const e = Th(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function Yw({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Th(), [a] = le(), c = Fe(() => {
    const $ = new Iw(a, s);
    return r && $.registerOnChange(r), t?.($), $;
  }, [a, s, r, t]), l = Lw(c), u = Fe(() => /* @__PURE__ */ new Map(), []), [d, f] = he(), [p, h] = he([]), [m, y] = he(!1), [x, C] = he(!1), { yjsDocMap: M } = o;
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
        const G = W !== void 0 ? W.id : $.id, te = u.get(G);
        te !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Ne of te) {
              const Y = H(Ne);
              pe(Y) && (Y.deleteID(un, G), Y.hasNoIDsForEveryType() && jo(Y));
            }
          });
        });
      }
    },
    [c, a, u]
  ), L = de(
    ($, W, G, te) => {
      c.addComment($, G), W && (a.update(() => {
        A(te) && Xl(te, un, $.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const $ = [];
    let W;
    for (const G of p) {
      const te = u.get(G);
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
  }, [p, a, u]), j(() => {
    if (!a.hasNodes([Qe]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const $ = /* @__PURE__ */ new Map();
    return nt(
      wl(
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
              te === "destroyed" ? Y = $.get(G) ?? [] : pe(Ne) && (Y = Ne.getTypedIDs()[un] ?? []);
              for (const Te of Y) {
                let qe = u.get(Te);
                $.set(G, Y), te === "destroyed" ? qe !== void 0 && (qe.delete(G), qe.size === 0 && u.delete(Te)) : (qe === void 0 && (qe = /* @__PURE__ */ new Set(), u.set(Te, qe)), qe.has(G) || qe.add(G));
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
            if (S(Te)) {
              const qe = rT(Te, un, te.anchor.offset) ?? [];
              qe !== null && (h(qe), Ne = !0), te.isCollapsed() || (f(Te.getKey()), Y = !0);
            }
          }
          Ne || h((Te) => Te.length === 0 ? Te : []), Y || f(null), !G.has("collaboration") && A(te) && y(!1);
        });
      }),
      a.registerCommand(
        Jp,
        () => {
          const W = window.getSelection();
          return W !== null && W.removeAllRanges(), y(!0), !0;
        },
        jn
      )
    );
  }, [a, u]);
  const T = () => {
    a.dispatchCommand(Jp, void 0);
  };
  return /* @__PURE__ */ Ae(Fn, { children: [
    m && Dn(
      /* @__PURE__ */ _(
        Ww,
        {
          editor: a,
          cancelAddComment: R,
          submitAddComment: L
        }
      ),
      document.body
    ),
    d != null && !m && Dn(
      /* @__PURE__ */ _(
        jw,
        {
          anchorKey: d,
          editor: a,
          showComments: x,
          onAddComment: T
        }
      ),
      document.body
    ),
    n !== null && Dn(
      /* @__PURE__ */ _(
        vn,
        {
          className: `CommentPlugin_ShowCommentsButton ${x ? "active" : ""}`,
          onClick: () => C(!x),
          title: x ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    x && Dn(
      /* @__PURE__ */ _(
        Jw,
        {
          comments: l,
          submitAddComment: L,
          deleteCommentOrThread: E,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function Xw() {
  const e = Z(void 0), t = de((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function Qw(e, t) {
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
function Zw(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      Qw(r, t);
    };
  }, [t, e]);
}
const KO = ni(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = he(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: h, view: m } = {} } = t, y = (h ?? !1) || Ks(m), [x, C] = Xw();
  Zw(f, x), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(E), p || console.warn(E);
    }
  }, [p]), vl(r, () => ({
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
      if (!u) return;
      const W = x.current?.getComments();
      u(E, W, L, T, $);
    },
    [x, u]
  ), R = de(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = x.current?.getComments();
    l(E);
  }, [x, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(lx, { children: /* @__PURE__ */ Ae(Qb, { ref: n, onUsjChange: M, ...f, children: [
    /* @__PURE__ */ _(
      Yw,
      {
        setCommentStore: C,
        onChange: R,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ _("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Ln(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function ok(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function eO(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const tO = /^[#\w().,%/\s-]+$/;
function Ir(e) {
  return e != null;
}
const rO = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, nO = {
  left: "right",
  right: "left"
}, Tl = ".editor-input.usfm", iO = /^[\w.#[\]="':()>+~*,\s-]+$/;
function sO(e) {
  return iO.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Tl}".`
  ), Tl);
}
function oO(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${ok(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (tO.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Ir(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Ir(t.firstLineIndent) && i.push(`text-indent: ${Ln(t.firstLineIndent * 20 * r)}vw`), Ir(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${Ln(t.leftMargin * 20 * r)}vw`), Ir(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${Ln(t.rightMargin * 20 * r)}vw`
  ), Ir(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${Ln(t.spaceBefore * r)}pt`), Ir(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${Ln(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = rO[n ? nO[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const Xp = { c: 150, ca: 133, cp: 150 };
function Qp(e, t) {
  return e && Ir(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function aO(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Ir(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Qp(e.markers.c, Xp.c);
  return ["ca", "cp"].map((i) => {
    const s = Qp(
      e.markers[i],
      Xp[i]
    ), o = Ln(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function zO(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Tl } = t, s = sO(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${ok(e.defaultFont)}"`), Ir(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Ln(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = oO(c, l, r, n);
    u.length > 0 && o.push(`${s} .usfm_${eO(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...aO(e, s)), o.join(`
`);
}
export {
  fm as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  FO as Editorial,
  Ko as GENERATOR_NOTE_CALLER,
  Ch as HIDDEN_NOTE_CALLER,
  KO as Marginal,
  b as MarkerType,
  um as PARAGRAPH_STRUCTURE_VIEW_MODE,
  dm as STANDARD_VIEW_MODE,
  Yo as defaultStyleInfo,
  UO as directionToNames,
  o_ as filterAndRankItems,
  zO as generateUsjCss,
  LO as getDefaultViewMode,
  Oa as getDefaultViewOptions,
  _P as getEnterMenuItems,
  SP as getMarkerMenuItems,
  DO as getViewMode,
  pm as getViewOptions,
  Ks as isBlockVerseLayout,
  cn as isInsertEmbedOpOfType,
  kS as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
