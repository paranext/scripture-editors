import { jsx as _, jsxs as xe, Fragment as Mn } from "react/jsx-runtime";
import { forwardRef as cn, useState as de, useRef as Z, useCallback as he, useEffect as j, useMemo as je, memo as _y, createContext as qf, useContext as Rf, Children as Cy, isValidElement as Sy, cloneElement as vy, useImperativeHandle as So, useLayoutEffect as bs } from "react";
import { assertSafeKey as Ye, isValidBookCode as My, MARKER_OBJECT_PROPS as Ey, USJ_VERSION as vr, USJ_TYPE as Mr, isUsjTextContentLocation as Ay, indexesFromUsjJsonPath as $f, isUsjAttributeKeyLocation as Py, isUsjAttributeMarkerLocation as Ny, isUsjClosingAttributeMarkerLocation as Oy, isUsjMarkerLocation as wy, isUsjClosingMarkerLocation as qy, isUsjPropertyValueLocation as Ry, getUsjDocumentLocationTypeName as $y, usjJsonPathFromIndexes as mn, EMPTY_USJ as If } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as We, $parseSerializedNode as vo, DecoratorNode as ks, ElementNode as rr, isHTMLElement as Un, createState as Mo, $getState as ne, $setState as Tt, $isRangeSelection as A, $isElementNode as F, $isTextNode as S, $getSelection as q, $isNodeSelection as Dc, ParagraphNode as Uc, TextNode as Be, $createTextNode as ye, $getCommonAncestor as Iy, $isLineBreakNode as Ts, NODE_STATE_KEY as xs, $getEditor as en, $hasUpdateTag as Ly, $getNodeByKey as se, $getRoot as ze, $createRangeSelection as Eo, $createPoint as vn, $getCharacterOffsets as Fc, KEY_DOWN_COMMAND as qr, COMMAND_PRIORITY_HIGH as we, HISTORY_MERGE_TAG as Lf, CLICK_COMMAND as Ao, COMMAND_PRIORITY_EDITOR as En, isDOMNode as Df, $getNearestNodeFromDOMNode as bi, CONTROLLED_TEXT_INSERTION_COMMAND as zc, PASTE_COMMAND as Sr, COMMAND_PRIORITY_CRITICAL as Yt, CUT_COMMAND as An, DROP_COMMAND as Kc, DELETE_CHARACTER_COMMAND as Dy, DELETE_WORD_COMMAND as Uy, DELETE_LINE_COMMAND as Fy, $isDecoratorNode as Po, $setSelection as Pn, SELECTION_CHANGE_COMMAND as Ft, COPY_COMMAND as No, COMMAND_PRIORITY_LOW as _t, COMMAND_PRIORITY_NORMAL as oi, getDOMSelection as zy, isSelectionWithinEditor as Ky, $createRangeSelectionFromDom as Uf, isDOMTextNode as jy, BLUR_COMMAND as jc, $addUpdateTag as qt, SKIP_DOM_SELECTION_TAG as _r, CLEAR_HISTORY_COMMAND as By, $getPreviousSelection as Vy, $isRootOrShadowRoot as Wy, CAN_UNDO_COMMAND as Hy, CAN_REDO_COMMAND as Gy, DRAGSTART_COMMAND as Jy, $createNodeSelection as Ff, getDOMSelectionFromTarget as Yy, $onUpdate as Xy, KEY_ENTER_COMMAND as zf, LineBreakNode as Kf, $copyNode as Qy, FOCUS_COMMAND as Zy, $isRootNode as eb, KEY_ESCAPE_COMMAND as jf, INSERT_PARAGRAPH_COMMAND as Js, createCommand as Bf, HISTORIC_TAG as Bc, createEditor as tb, UNDO_COMMAND as Vf, REDO_COMMAND as Wf, CLEAR_EDITOR_COMMAND as rb } from "lexical";
import { addClassNamesToElement as Yn, removeClassNamesFromElement as da, $findMatchingParent as Ze, $dfsIterator as Oo, $dfs as Fn, mergeRegister as Ve, registerNestedElementResolver as Hf, $unwrapNode as Wa, IS_APPLE as Ys } from "@lexical/utils";
import { useLexicalNodeSelection as nb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as wt } from "fast-equals";
import Ki from "quill-delta";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as ib, copyToClipboard as sb } from "@lexical/clipboard";
import { TreeView as ob } from "@lexical/react/LexicalTreeView";
import * as ab from "react-dom";
import { createPortal as Sn } from "react-dom";
import { LexicalComposer as Gf } from "@lexical/react/LexicalComposer";
import { ContentEditable as Jf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Yf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Xf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Qf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as cb } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as lb, createDOMRange as ub, createRectsFromDOMRange as db } from "@lexical/selection";
import { autoUpdate as fb, computePosition as pb, shift as hb, flip as gb } from "@floating-ui/dom";
import { $generateNodesFromDOM as mb } from "@lexical/html";
import { AutoFocusPlugin as yb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as bb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Zf, LexicalCollaboration as kb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Tb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as xb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as _b, $isRootTextContentEmpty as Cb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Sb } from "@lexical/yjs";
import { Array as Mu, Map as Eu, YArrayEvent as vb } from "yjs";
const fa = (e) => We(vo(e)), Mb = {
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
function ep(e) {
  return Mb[e];
}
const D = " ", Xs = "​", zt = D, Vc = `${D}|`, fr = "p", es = "+", tp = "-", Qs = "chapter", Ha = "verse", Au = "invalid", Eb = "text-spacing", Ab = "formatted-font", Pb = "marker-", Wc = "external-usj-mutation", rp = "selection-change", Dt = "cursor-change", Ga = "annotation-change", ts = "delta-change", np = "marker-settle", Nb = [
  Wc,
  rp,
  Dt,
  Ga,
  ts
], Nn = "zmsc-s", ai = "zmsc-e", Ob = [Nn, ai], wb = [
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
  Nn,
  ai
], ip = 1, Hc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], qb = Hc.filter((e) => e !== "sid" && e !== "eid");
class Zt extends ks {
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
    return new Zt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return op().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (wb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: ip
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function sp(e) {
  return Ob.includes(e);
}
function op(e, t, r, n, i) {
  return We(new Zt(e, t, r, n, void 0, i));
}
function Ge(e) {
  return e instanceof Zt;
}
const Gc = "f", Rb = [
  // Footnote
  Gc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function ji(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const $b = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], ap = 1;
class Me extends rr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Gc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (ji(t) === "crossref" ? tp : es), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Me(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => Lb(t) ? {
        conversion: Ib,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Jc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Rb.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", ji(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", ji(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Un(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", ji(this.getMarker()))), { element: r };
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
      version: ap
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
function Ib(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Jc(t, r, n) };
}
function Jc(e, t, r, n, i) {
  return We(new Me(e, t, r, n, i));
}
function Lb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Me.isValidMarker(t) && e.classList.contains(Me.getType());
}
function K(e) {
  return e instanceof Me;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Ja = {
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
}, yn = {
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
}, Pu = {
  p: { children: yn },
  q: { children: yn },
  q1: { children: yn },
  q2: { children: yn },
  q3: { children: yn },
  q4: { children: yn },
  b: { children: yn },
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
function pr(e) {
  const t = Object.hasOwn(Ja, e) ? Ja[e] : void 0, r = Object.hasOwn(Pu, e) ? Pu[e] : void 0;
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
const cp = "v", lp = "c", bn = "fig", Nu = "tr", Ya = "esb", up = "esbe", Ou = "periph", wu = "alt", qu = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Db = {
  "": "start",
  c: "center",
  r: "end"
};
function Ru(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function $u(e) {
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
const Ub = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Fb(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Xs && s + 1 < e.length && $u(e[s + 1]) || ($u(o) ? (r || (i = t.length, t += o), r = !0) : Ub.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function zb(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Kb(e, t) {
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
const jb = /^(?:qt[1-5]?|ts)-[se]$/;
function Yc(e) {
  return jb.test(e) || sp(e);
}
function pa(e, t) {
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
function Bb(e, t, r) {
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
      a(Fb(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = Kb(e, i + 1);
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
    if (l === cp) {
      const { word: g, next: y } = pa(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === lp) {
      const { word: g, next: y } = pa(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && Me.isValidMarker(l)) {
      const { word: g, next: y } = pa(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && Yc(l)) {
      const g = Qb(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), T = y === -1 ? e.length : y;
        o(e.slice(c, T)), i = T;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Zs(p) ? (d(), Zs(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Ya || l === up ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Iu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Zs(e) {
  return Object.hasOwn(Iu, e) ? Iu[e] : void 0;
}
function Vb(e) {
  return Zs(e) !== void 0;
}
const Wb = /([-\w]+)\s*=\s*"(.*?)"/g, Hb = /[\s\u200B]*[\n\r][\s\u200B]*/g, dp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function wo(e) {
  return dp[e];
}
const Gb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Jb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function rs(e, t, r = dp[t]) {
  const n = e.replace(Hb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Wb)];
  if (s.length > 0) {
    if (!Jb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Gb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function qo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Yb(e) {
  const t = Rr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Xb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = rs(e.slice(n + 1, i), r, qo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Qb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = rs(s.slice(o + 1), r, qo(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Xb(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function ur(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", D);
}
function Vr(e) {
  return e.content || (e.content = []), e.content;
}
function Rr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? Vr(u) : d ? Vr(d) : r;
  let p = !1;
  const m = () => {
    if (s)
      return o.length > a ? Vr(o[o.length - 1].object) : Vr(s);
    if (o.length > 0)
      return Vr(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: fr, content: [] }, f().push(i);
    }
    return Vr(i);
  }, g = (X) => {
    const P = m();
    typeof X == "string" && typeof P[P.length - 1] == "string" ? P[P.length - 1] = P[P.length - 1] + X : P.push(X);
  }, y = (X) => {
    for (let P = X; P < o.length; P += 1) {
      const G = o[P].object;
      G.closed = "false";
    }
  }, T = () => {
    y(0), o.length = 0;
  }, C = (X) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, X || (s.closed = "false"), s = void 0);
  }, M = () => {
    c = void 0, l = void 0;
  }, O = (X, P, G) => {
    T();
    const [, ue, Ee, Q] = G, ve = {
      type: "table:cell",
      marker: Q ? P.slice(0, P.indexOf("-")) : P,
      align: Db[ue],
      content: []
    };
    Q && (ve.colspan = String(Number(Q) + 1 - Number(Ee))), Vr(X).push(ve), i = ve;
  }, v = (X) => {
    u && (X || (u.closed = "false"), u = void 0);
  }, B = () => {
    d = void 0;
  };
  let E, R = "", $;
  const re = () => {
    R && g(ur(R)), R = "";
  }, H = (X = !1) => {
    E?.type === "sidebar" ? R = "" : X && R.endsWith(`
`) && (R = R.slice(0, -1)), E = void 0, re();
  }, Pe = () => {
    if (!$)
      return;
    const X = { type: "char", marker: $.marker, content: [] };
    $.value && (X.content = [ur($.value)]), m().push(X), o.push({ object: X }), $ = void 0;
  }, ee = (X, P) => {
    p = !1, M(), T(), C(!1), i = { type: "para", marker: X, content: [] }, P && (i.content = [ur(P)]), f().push(i);
  }, $e = () => {
    $ && (ee($.marker, $.value), $ = void 0);
  };
  let be;
  const ir = (X) => {
    if (!be)
      return;
    let { value: P } = be;
    be = void 0, X && P.endsWith(`
`) && (P = P.slice(0, -1));
    const G = P.indexOf("|"), ue = G >= 0 ? rs(P.slice(G + 1), Ou) : void 0, Ee = G >= 0 ? P.slice(0, G) : P, Q = G >= 0 && (!ue || !!Ee && !!ue[wu]), ve = Q ? void 0 : ue, kr = Q ? P : Ee, Ot = {
      type: "periph",
      ...kr ? { [wu]: ur(kr) } : {},
      ...ve
    };
    Ot.content = [], f().push(Ot), d = Ot, i = void 0;
  };
  let Ke;
  const zr = () => {
    if (Ke) {
      if (Ke.shape === "para")
        ee(bn, Ke.value);
      else {
        const X = { type: "char", marker: bn, content: [] };
        Ke.value && (X.content = [ur(Ke.value)]), m().push(X), o.push({ object: X });
      }
      Ke = void 0;
    }
  }, Kr = Bb(e, t?.getMarker ?? pr, n);
  for (let X = 0; X < Kr.length; X++) {
    const P = Kr[X];
    if ($) {
      if (P.kind === "text") {
        $.value += P.text;
        continue;
      }
      if ($.shape === "char" && P.kind === "end" && P.marker.replace(/^\+/, "") === $.marker) {
        if ($.value.trim() === "") {
          m().push({ type: "char", marker: $.marker, content: [] }), $ = void 0, H();
          continue;
        }
        Object.assign($.target, {
          [$.attrName]: ur($.value.trim())
        });
        const G = $.marker;
        if ($ = void 0, G === "ca") {
          const ue = Kr[X + 1];
          ue?.kind === "text" && /^[\s\u200B]*$/.test(ue.text) && X++;
        }
        continue;
      }
      if ($.shape === "para" && (P.kind === "para" || P.kind === "chapter")) {
        const G = $.value.replace(/[\s\u200B]+$/, "");
        G === "" ? (ee($.marker), $ = void 0) : (Object.assign($.target, { [$.attrName]: ur(G) }), $ = void 0);
      } else {
        E = void 0, (P.kind === "para" || P.kind === "chapter") && $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), $.shape === "para" ? $e() : Pe(), X--;
        continue;
      }
    }
    if (be) {
      if (P.kind === "text" || P.kind === "optbreak") {
        be.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      ir(P.kind === "para" || P.kind === "chapter"), X--;
      continue;
    }
    if (Ke) {
      if (P.kind === "text" || P.kind === "optbreak") {
        Ke.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      if (P.kind === "end" && P.marker.replace(/^\+/, "") === bn) {
        const G = Ke.value.indexOf("|"), ue = G >= 0 ? rs(Ke.value.slice(G + 1), bn) : void 0;
        if (ue) {
          const Ee = {};
          for (const [kr, Ot] of Object.entries(ue))
            Ee[kr === "src" ? "file" : kr] = Ot;
          const Q = {
            type: "figure",
            marker: bn,
            ...Ee
          }, ve = Ke.value.slice(0, G);
          ve && (Q.content = [ur(ve)]), g(Q), Ke = void 0;
          continue;
        }
      }
      zr(), X--;
      continue;
    }
    if (E)
      if (P.kind === "text") {
        if (P.text.includes(`
`) && /^[\s\u200B]*$/.test(P.text)) {
          R += P.text;
          continue;
        }
        H();
      } else if (P.kind === "charOpen" || P.kind === "para") {
        const G = P.kind === "para" || !P.isNested ? Zs(P.marker) : void 0;
        if (G && G.targetTypes.includes(E.type)) {
          R = "", $ = {
            target: E,
            attrName: G.attrName,
            marker: P.marker,
            shape: G.shape,
            value: ""
          };
          continue;
        }
        H(P.kind === "para");
      } else
        H(P.kind === "chapter");
    if (!s && !n && (P.kind === "charOpen" && !P.isNested && P.marker === bn || P.kind === "para" && P.marker === bn)) {
      T(), Ke = { shape: P.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (P.kind) {
      case "text": {
        let G = P.text;
        if (!s && G.endsWith(`
`)) {
          const ue = Kr[X + 1];
          (ue === void 0 || ue.kind === "para" || ue.kind === "chapter") && (G = G.slice(0, -1));
        }
        G && g(ur(G));
        break;
      }
      case "para": {
        const G = !s && !n;
        if (G && P.marker === Nu) {
          T(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Nu, content: [] }, Vr(c).push(l), i = l, p = !1;
          break;
        }
        if (G && l) {
          const ue = qu.exec(P.marker);
          if (ue && Ru(ue)) {
            O(l, P.marker, ue);
            break;
          }
        }
        if (M(), !n && P.marker === Ya) {
          T(), C(!1), v(!1);
          const ue = {
            type: "sidebar",
            marker: Ya,
            content: []
          };
          f().push(ue), u = ue, i = void 0, E = u, p = !1;
          break;
        }
        if (P.marker === up && u) {
          T(), C(!1), v(!0), i = void 0;
          break;
        }
        if (!n && P.marker === Ou) {
          T(), C(!1), v(!1), B(), be = { value: "" }, i = void 0, p = !1;
          break;
        }
        ee(P.marker);
        break;
      }
      case "verse": {
        C(!1);
        const G = { type: "verse", marker: cp, number: P.number };
        g(G), E = G;
        break;
      }
      case "chapter": {
        T(), C(!1), M(), v(!1), B(), i = void 0;
        const G = {
          type: "chapter",
          marker: lp,
          number: P.number
        };
        r.push(G), E = G, p = !0;
        break;
      }
      case "note": {
        C(!1);
        const G = m();
        s = { type: "note", marker: P.marker, caller: P.caller, content: [] }, a = o.length, G.push(s), E = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !P.isNested) {
          const Ee = qu.exec(P.marker);
          if (Ee && Ru(Ee)) {
            O(l, P.marker, Ee);
            break;
          }
        }
        if (!P.isNested) {
          const Ee = s ? a : 0;
          y(Ee), o.length = Ee;
        }
        const G = m(), ue = { type: "char", marker: P.marker, content: [] };
        G.push(ue), o.push({ object: ue });
        break;
      }
      case "end": {
        const G = P.marker.replace(/^\+/, ""), ue = s ? a : 0, Ee = o.findLastIndex((Q, ve) => ve >= ue && Q.object.marker === G);
        Ee >= 0 ? (Zb(o[Ee].object), y(Ee + 1), o.length = Ee) : s && s.marker === G ? C(!0) : (y(ue), o.length = ue, g({ type: "unmatched", marker: `${P.marker}*` }));
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
  if (be && ir(!0), Ke && zr(), $)
    if ($.shape === "para") {
      const X = $.value.replace(/[\s\u200B]+$/, "");
      X === "" ? ee($.marker) : Object.assign($.target, { [$.attrName]: ur(X) }), $ = void 0;
    } else
      $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), Pe();
  T(), C(!1), v(!1);
  const dn = (X) => {
    for (const P of X)
      typeof P != "string" && P.content && (dn(P.content), P.content.length === 0 && delete P.content);
  };
  return dn(r), r;
}
function Zb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = rs(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const On = Mo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), tn = Mo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = Mo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), gr = "marker-trailing-space", fp = 1, ek = "marker", Xc = Mo("isGutterMarker", {
  parse: (e) => e === !0
});
class $r extends ks {
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
    return new $r(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => ik(t) ? {
        conversion: tk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Er().updateFromJSON(t);
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
    return r && Un(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: fp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function tk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Er(t, r) };
}
function Er(e, t) {
  return We(new $r(e, t));
}
function rk(e) {
  return Tt(Er(ek, e), Xc, !0);
}
function nk(e) {
  return Kt(e) && ne(e, Xc);
}
function ik(e) {
  return e?.tagName === "span";
}
function Kt(e) {
  return e instanceof $r;
}
function pp(e) {
  return e?.type === $r.getType();
}
const Qr = "internal-comment", sk = [Qr], hp = Object.freeze({}), Xa = Object.freeze({}), Qa = Object.freeze({}), Za = Object.freeze({}), ec = Object.freeze({}), ok = 1, Xn = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map();
class rt extends rr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = hp, r, n, i, s, o) {
    super(o), this.__typedIDs = Ds(t), this.__typedOnClicks = ha(r), this.__typedOnRemoves = ga(n), this.__typedOnMouseEnters = ma(i), this.__typedOnMouseLeaves = ya(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Ds(t.__typedIDs), n = ha(t.__typedOnClicks), i = ga(t.__typedOnRemoves), s = ma(t.__typedOnMouseEnters), o = ya(t.__typedOnMouseLeaves);
    return new rt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return sk.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return ns().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: ok
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Yn(n, kn(t.theme.typedMark, a)), c.length > 1 && Yn(n, kn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Yn(n, kn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = kn(n.theme.typedMark, s), d = kn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Yn(r, u) : l === 0 && da(r, u), c === 1 ? l === 2 && Yn(r, d) : l === 1 && da(r, d));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || da(r, kn("annotationId", m));
      for (const m of a)
        f.has(m) || Yn(r, kn("annotationId", m));
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
    const r = this.getWritable(), n = Ds(r.__typedIDs);
    r.__typedIDs = Ds(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && eo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = ha(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Ce(t) ? Xn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ga(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Ce(t) ? Ri.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = ma(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Ce(t) ? Qn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ya(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Ce(t) ? Zn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Ce(a))
      return;
    Ye(t), Ye(r);
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && eo(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = ns(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Xn.delete(r.getKey()), Ri.delete(r.getKey()), Qn.delete(r.getKey()), Zn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Xn.get(this.getKey());
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
    const n = Qn.get(this.getKey());
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
    const n = Zn.get(this.getKey());
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Xa) {
      const t = Xn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Xn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Xn.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    Ye(t), Ye(r);
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
    if (!this.__typedOnClicks || this.__typedOnClicks === Xa) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Qa) {
      const t = Ri.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Ri.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Ri.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    Ye(t), Ye(r);
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Qa) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Za) {
      const t = Qn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Qn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Qn.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    Ye(t), Ye(r);
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Za) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === ec) {
      const t = Zn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Zn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Zn.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    Ye(t), Ye(r);
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === ec) {
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
    const i = ak(t, r);
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
    for (; Ce(t) && Du(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Ce(r) && Du(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = ck(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = lk(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = uk(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = dk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Ds(e = hp) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Ye(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Ye(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function ha(e) {
  if (!e || e === Xa)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ye(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ye(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ga(e) {
  if (!e || e === Qa)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ye(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ye(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ma(e) {
  if (!e || e === Za)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ye(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ye(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ya(e) {
  if (!e || e === ec)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ye(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ye(s), i[s] = o;
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
function Lu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function ak(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Du(e, t) {
  const r = Lu(e), n = Lu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function ck(e, t) {
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
function lk(e, t) {
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
function uk(e, t) {
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
function dk(e, t) {
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
function kn(e, t) {
  return `${e}-${t}`;
}
function Uu(e) {
  return `external-${e}`;
}
function ns(e, t, r, n, i) {
  return We(new rt(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof rt;
}
function gp(e) {
  return e?.type === rt.getType();
}
function eo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function mp(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let m, g;
  for (let y = 0; y < u; y++) {
    const T = a[y];
    if (F(g) && g.isParentOf(T))
      continue;
    const C = y === 0, M = y === u - 1;
    let O = null;
    if (S(T)) {
      const v = T.getTextContentSize(), B = C ? f : 0, E = M ? p : v;
      if (B === 0 && E === 0)
        continue;
      const R = T.splitText(B, E);
      O = R.length > 1 && (R.length === 3 || C && !M || E === v) ? R[1] : R[0];
    } else {
      if (Ce(T))
        continue;
      F(T) && T.isInline() && (O = T);
    }
    if (O !== null) {
      if (O && O.is(m))
        continue;
      const v = O.getParent();
      (v == null || !v.is(m)) && (g = void 0), m = v, g === void 0 && (g = ns(), g.addID(t, r, n, i, s, o), O.insertBefore(g)), g.append(O);
    } else
      m = void 0, g = void 0;
  }
  t === Qr && F(g) && (d ? g.selectStart() : g.selectEnd());
}
function fk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Ce(n))
      return n.getTypedIDs()[t];
    if (S(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Ce(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const pk = ["type", "marker", "content"], tc = "unknown", yp = 1, hk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class zn extends rr {
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
    return new zn(r, n, i, s);
  }
  static importDOM() {
    return {
      [tc]: (t) => mk(t) ? {
        conversion: gk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Qc().updateFromJSON(t);
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
    return hk.has(this.getTag());
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
    const t = document.createElement(tc);
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
      version: yp
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
    const r = t ?? q();
    if (!r)
      return !1;
    if (Dc(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function gk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Qc(t, r) };
}
function Qc(e, t, r) {
  return We(new zn(e, t, r));
}
function mk(e) {
  return e?.tagName.toLowerCase() === tc;
}
function Ue(e) {
  return e instanceof zn;
}
const bp = 1, yk = "attribute-run";
function ba(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Ir extends rr {
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
    return kp(t.runKind).updateFromJSON(t);
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
    t.classList.add(yk);
    const r = ba(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = ba(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = ba(this.__runKind);
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
      version: bp
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
function kp(e) {
  return We(new Ir(e));
}
function De(e) {
  return e instanceof Ir;
}
const is = "id", Tp = 1, bk = [
  "type",
  "marker",
  "code",
  "content"
];
class jt extends rr {
  __marker = is;
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
    return xp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return My(t);
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
      version: Tp
    };
  }
}
function xp(e, t) {
  return We(new jt(e, t));
}
function ht(e) {
  return e instanceof jt;
}
function _p(e) {
  return e?.type === jt.getType();
}
const to = "c", Cp = 1, kk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Nt extends rr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = to, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Nt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Sp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Qs, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Cp
    };
  }
}
function Sp(e, t, r, n, i) {
  return We(new Nt(e, t, r, n, i));
}
function Oe(e) {
  return e instanceof Nt;
}
function Tk(e) {
  return e?.type === Nt.getType();
}
const vp = [
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
], Mp = [
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
], xk = [
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
  ...vp,
  ...Mp
], Ep = 1, _k = ["type", "marker", "content"];
class me extends rr {
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
    return new me(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (xk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && vp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Mp.includes(t);
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
    return me.isValidFootnoteMarker(t) || me.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Sk(t) ? {
        conversion: Ck,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ar().updateFromJSON(t);
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
    return Fu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Fu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Un(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Ep
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Ar(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Fu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Ck(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Ar(t) };
}
function Ar(e, t) {
  return We(new me(e, t));
}
function Sk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return me.isValidMarker(t) && e.classList.contains(me.getType());
}
function U(e) {
  return e instanceof me;
}
function vk(e) {
  return e?.type === me.getType();
}
const Ap = 1, Mk = "c", Pp = "span";
class mr extends ks {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Mk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new mr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Np(t) ? {
        conversion: Ek,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Zc().updateFromJSON(t);
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
    const t = document.createElement(Pp);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Qs, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Un(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Qs, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Ut(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Ap
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
function Ek(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Zc(t) };
}
function Zc(e, t, r, n, i, s) {
  return We(new mr(e, t, r, n, i, s));
}
function Np(e) {
  return e ? e.classList.contains(Qs) && e.tagName.toLowerCase() === Pp : !1;
}
function _s(e) {
  return e instanceof mr;
}
function Ak(e) {
  return e?.type === mr.getType();
}
const Op = 1;
class rn extends Uc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new rn(t.__key);
  }
  static importJSON(t) {
    return Xt().updateFromJSON(t);
  }
  getMarker() {
    return fr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Op
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Xt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Xt() {
  return We(new rn());
}
function hr(e) {
  return e instanceof rn;
}
function Ro(e) {
  return e?.type === rn.getType();
}
const Pk = [
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
  fr,
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
], wp = 1, Nk = ["type", "marker", "content"];
class nt extends Uc {
  __marker;
  __unknownAttributes;
  constructor(t = fr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new nt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Pk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Ok,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ss().updateFromJSON(t);
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
    return r && Un(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: wp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ss(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ok(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ss(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ss(e, t) {
  return We(new nt(e, t));
}
function ce(e) {
  return e instanceof nt;
}
function el(e) {
  return e?.type === nt.getType();
}
const ro = "v", qp = 1, wk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class ft extends Be {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = ro, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ft(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Rp().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ha, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: qp
    };
  }
}
function Rp(e, t, r, n, i, s) {
  return We(new ft(e, t, r, n, i, s));
}
function qe(e) {
  return e instanceof ft;
}
function $p(e) {
  return e?.type === ft.getType();
}
const qk = "​", ui = qk;
var zu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(zu || (zu = {}));
var Ku;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ku || (Ku = {}));
function Rk() {
  return ye(ui);
}
function $k(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ui, ""));
}
function Cs(e) {
  return e.length > 0 && e.includes(ui) && e.replaceAll(ui, "") === "";
}
function Ss(e) {
  return S(e) && Cs(e.getTextContent());
}
function Ip(e) {
  return Tk(e) || Ak(e);
}
function Je(e) {
  return Oe(e) || _s(e);
}
function Lp(e, t) {
  return e.find((r) => Je(r) && r.getNumber() === t.toString());
}
function Ik(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Je(r));
}
function rc(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Lk(e) {
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
function er(e) {
  return Ze(e, K) ?? void 0;
}
function Dk(e) {
  return ht(e) || Oe(e) || U(e) || _s(e) || hr(e) || Ge(e) || ce(e) || K(e) || qe(e) || Ue(e);
}
function Dp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Uk(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Et(e) {
  return Se(e) || ht(e);
}
function Se(e) {
  return ce(e) || hr(e);
}
function Fk(e) {
  return el(e) || Ro(e);
}
function no(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function wn(e, t) {
  const r = ne(t, On), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function zk(e, t) {
  const r = F(e) ? e : e.getParent(), n = F(t) ? t : t.getParent(), i = r && n ? Iy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Kk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function di(e) {
  return e?.type === Be.getType();
}
function jk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Bk(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Re(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function Qe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Up(e, t, r) {
  const n = Re(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Ut(e, t) {
  let r = Re(e);
  return t && (r += `${D}${t}`), r += " ", r;
}
function Vk(e) {
  const t = e[xs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Fp(e) {
  return nl(e) || pp(e) && e.textType === "marker" || di(e) && Vk(e) === "attribute" ? "" : di(e) && e.text !== D ? e.text : vk(e) ? e.children.map((t) => Fp(t)).join("") : "";
}
function Wk(e) {
  return e.map((r) => Fp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function At(e) {
  return " " + e + D;
}
function tl(e) {
  const t = [];
  for (const r of e) {
    if (!U(r))
      continue;
    const n = zp(r);
    n !== zt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function zp(e) {
  return N(e) || yr(e) || S(e) && ne(e, oe) === "attribute" ? "" : S(e) ? e.getTextContent() : F(e) ? e.getChildren().map((t) => zp(t)).join("") : "";
}
function yr(e) {
  return Kt(e) && e.getTextType() === "marker";
}
function Bt(e) {
  return N(e) || yr(e);
}
function ju(e, t) {
  Hk(e, t), e.setMarker(t);
}
function Hk(e, t) {
  const r = e.getMarker(), n = Re(r), i = Re(r, !0), s = Qe(r), o = Qe(r, !0), a = me.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Bt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (N(c))
        c.setMarker(t);
      else if (yr(c)) {
        const f = l.startsWith(Re("", !0));
        c.setTextContent(u ? Re(t, f) : Qe(t, f));
      }
    }
  });
}
function Fe(e, t = Ey) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ae(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Kp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function jp(e) {
  if (!A(e))
    return Bu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !F(t) || e.anchor.type === "text" && !S(t)))
    return t ?? void 0;
  try {
    return Bu(e) ?? t ?? void 0;
  } catch (n) {
    if (Kp(n))
      return t ?? void 0;
    throw n;
  }
}
function Gk(e, t) {
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
function rl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Jk(e) {
  return !!e && e.includes("-");
}
function Bp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Bu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function vs(e) {
  if (!e)
    return !1;
  if (Ts(e) || N(e) || yr(e) || De(e) || Kt(e) && e.getTextType() === "attribute")
    return !0;
  if (S(e)) {
    const t = ne(e, oe);
    if (t === gr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === D || Cs(r))
      return !0;
  }
  return !1;
}
function Ms() {
  const e = ye(D);
  return Tt(e, oe, gr), e.setMode("token"), e;
}
function Yk(e) {
  const t = e.getTextContent();
  t.startsWith(D) || e.setTextContent(D + t);
}
function Lr(e) {
  return S(e) && ne(e, oe) === gr;
}
function Vp(e) {
  const t = e.getFirstChild();
  if (!Bt(t) || t === null || Lr(t.getNextSibling()))
    return !1;
  const r = q();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function ki(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!vs(s)) {
      if (Ce(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (S(s) && s.getType() === Be.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function $o(e) {
  let t = e.getParent();
  for (; t && Ce(t); )
    t = t.getParent();
  return t;
}
function Xk(e, t) {
  return ki(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Qk(e, t) {
  const r = $o(e);
  if (!r)
    return;
  const n = ki(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function Zk(e, t) {
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
function Wp(e, t) {
  const r = ki(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (vs(n))
    return Wp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || no(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || no(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function eT(e, t) {
  if (t <= 0)
    return 0;
  const r = ki(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? tT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function tT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const rT = 1;
class br extends Be {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(_n(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new br(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || _n(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = _n(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = _n(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = _n(r.__marker, r.__markerSyntax, t), r;
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
      version: rT
    };
  }
}
function lt(e, t, r) {
  return We(new br(e, t, void 0, r));
}
function N(e) {
  return e instanceof br;
}
function nl(e) {
  return e?.type === br.getType();
}
function Dr(e) {
  return e.getTextContent() === _n(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function nT(e) {
  e.setTextContent(_n(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function _n(e, t, r = !1) {
  return t === "closing" ? Qe(e, r) : t === "selfClosing" ? Qe("") : Re(e, r);
}
const iT = /* @__PURE__ */ new Set(["closed"]);
function dr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !iT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Hp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Gp(e) {
  const t = Object.keys(e).filter((n) => !qb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Jp(e, t, r, n) {
  return Hp(
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
function Gi(e) {
  return e.getChildren().find((t) => N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function sT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Gi(e) === void 0 && Yp(e) === void 0;
}
function Yp(e) {
  return e.getChildren().find((t) => S(t) && ne(t, oe) === "attribute");
}
function os(e, t) {
  return Es(e.getNextSibling(), t);
}
const oT = /^[ \u00A0]+$/;
function il(e) {
  if (Dr(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Re(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && oT.test(r.slice(t.length));
}
function Es(e, t) {
  let r, n, i, s;
  return De(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), N(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  il(e) && (r = e, e = e.getNextSibling()), S(e) && ne(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), N(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && Dr(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Pr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!N(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (S(n) && n.getTextContent() === At(e.getCaller()))
    return n;
}
function Io(e) {
  const t = Pr(e);
  return t ? Es(t.getNextSibling(), "cat") : {};
}
function Lo(e) {
  const t = e.getFirstChild();
  if (!(!S(t) || N(t)) && ne(t, oe) !== "attribute")
    return t;
}
function Xp(e) {
  const t = Lo(e);
  return t ? Es(t.getNextSibling(), "ca") : {};
}
function Qp(e) {
  const t = Lo(e);
  if (!t)
    return;
  const r = Es(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Zp(e) {
  const t = Qp(e);
  return t ? Es(t.getNextSibling(), "cp") : {};
}
function eh(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (qe(n))
        return n;
      if (!(N(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || S(n) && ne(n, oe) === "attribute" || U(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || De(n)))
        return;
    }
}
function Do(e) {
  let t, r, n, i, s = e.getNextSibling();
  return De(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), N(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  il(s) && (t = s, s = s.getNextSibling()), S(s) && ne(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), N(s) && s.getMarkerSyntax() === "selfClosing" && Dr(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function sl(e) {
  return U($o(e));
}
function ol(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? sl(t) : t.getChildren().some((i) => U(i) && i.getMarker() === r) ? !0 : void 0;
}
function aT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!N(t))
      return;
    const r = ol(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function As(e) {
  return S(e) && e.getType() === Be.getType() && ne(e, oe) !== "attribute";
}
function Ps(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !N(t) || !U(r) || !th(t, r) || !As(e) ? 0 : e.getTextContent().startsWith(D) ? D.length : 0;
}
function th(e, t) {
  return e.getMarkerSyntax() === "opening" && ol(e, t) !== void 0;
}
function al(e, t) {
  if (!th(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return N(r) ? ol(r, t) === !0 ? "spacer" : void 0 : As(r) ? r.getTextContent().startsWith(D) ? void 0 : "prefix" : "spacer";
}
function cT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (N(t) && al(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function rh(e, t) {
  const r = q();
  if (!A(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function nh(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!N(t))
      return;
    const r = al(t, e);
    if (r !== void 0 && !rh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        S(n) && n.setTextContent(D + n.getTextContent());
      } else
        t.insertAfter(ye(D));
  });
}
function ih(e) {
  return e.isAttached() ? e.getChildren().some((t) => N(t) && al(t, e) !== void 0 && rh(t, e)) : !1;
}
const lT = "file", uT = "src", dT = "colspan", fT = "category", pT = "alt", hT = "closed", gT = "false";
function mT(e) {
  return e[hT] !== gT;
}
function yT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === lT ? uT : t,
    r
  ]));
}
function sh(e, t) {
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
function oh(e, t, r) {
  const n = r ?? {}, i = mT(n);
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
        opening: `\\${sh(t, n[dT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: dr(yT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [fT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + dr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [pT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: dr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: dr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const Ct = { wantsRun: !1, valueText: void 0 }, Ur = {};
function ka(e, t) {
  if (t === "va")
    return e;
  const r = os(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function cl(e) {
  const t = q();
  if (!A(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (F(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function Uo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = q();
  if (!A(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function bT(e) {
  return De(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : N(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : S(e) && ne(e, oe) === "attribute";
}
function kT(e) {
  if (N(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!S(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function Ta(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (qe(t))
      return t;
    if (!bT(t))
      return;
  }
}
function Vu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => qe(t),
    ownerOf: (t) => {
      if (De(t))
        return t.getRunKind() === e ? Ta(t) : void 0;
      const r = t.getParent();
      return De(r) ? r.getRunKind() === e ? Ta(r) : void 0 : kT(t) === e ? Ta(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!qe(t))
        return Ct;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Ct : { wantsRun: !0, valueText: D + r };
    },
    scanPieces: (t) => qe(t) ? os(ka(t, e), e) : Ur,
    graceSite: (t, r) => qe(t) ? !r.opener && !r.closer ? cl(ka(t, e)) : Uo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => qe(t) ? ka(t, e) : void 0
    }
  };
}
const TT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => Ct,
  scanPieces: () => Ur,
  graceSite: (e) => U(e) && ih(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, xT = {
  kind: "char",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (!S(e) || ne(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return U(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || Gi(e) === void 0)
      return Ct;
    const t = dr(e.getUnknownAttributes() ?? {}, wo(e.getMarker()));
    return t === "" ? Ct : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => U(e) ? { value: Yp(e) } : Ur,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const r = Gi(e);
    if (!r)
      return !1;
    const n = q();
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
    insertRunBefore: (e) => U(e) ? Gi(e) : void 0
  }
};
function ah(e) {
  if (N(e))
    return e.getMarker() === "cat";
  if (!S(e) || ne(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return N(t) && t.getMarker() === "cat";
}
function _T(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = Pr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!ah(n))
        return;
    }
}
const CT = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (De(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return De(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : ah(e) ? _T(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return Ct;
    const t = e.getCategory();
    return t === void 0 ? Ct : { wantsRun: !0, valueText: D + t };
  },
  scanPieces: (e) => K(e) ? Io(e) : Ur,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Pr(e);
      return r !== void 0 && cl(r);
    }
    return Uo(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => K(e) ? Pr(e) : void 0
  }
};
function ST(e) {
  return De(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : N(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : S(e) && ne(e, oe) === "attribute";
}
function vT(e) {
  if (N(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!S(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!N(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function MT(e) {
  const t = e.getParent();
  if (!Oe(t))
    return;
  const r = Lo(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!ST(n))
        return;
    }
}
function Wu(e) {
  const t = (r) => Oe(r) ? e === "ca" ? Lo(r) : Qp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Oe(r),
    ownerOf: (r) => {
      if (De(r))
        return r.getRunKind() === e && Oe(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return De(n) ? n.getRunKind() === e && Oe(n.getParent()) ? n.getParent() ?? void 0 : void 0 : vT(r) === e ? MT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Oe(r))
        return Ct;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Ct : { wantsRun: !0, valueText: D + n };
    },
    scanPieces: (r) => Oe(r) ? e === "ca" ? Xp(r) : Zp(r) : Ur,
    graceSite: (r, n) => {
      if (!Oe(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && cl(i);
      }
      return Uo(n);
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
function ch(e) {
  if (N(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return S(e) && ne(e, oe) === "attribute";
}
function ET(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ge(t)) {
      const r = N(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!ch(t))
      return;
  }
}
const AT = {
  kind: "milestone",
  ownerPredicate: (e) => Ge(e),
  ownerOf: (e) => {
    const t = De(e) ? e.getRunKind() === "milestone" ? e : void 0 : De(e.getParent()) ? e.getParent() : ch(e) ? e : void 0;
    if (!t || De(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return De(t) ? Ge(r) ? r : void 0 : ET(t);
  },
  expectedPieces: (e) => {
    if (!Ge(e))
      return Ct;
    const t = Jp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = dr(t, qo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : D + r };
  },
  scanPieces: (e) => {
    if (!Ge(e))
      return Ur;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Do(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ge(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = q();
      if (!A(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Uo(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Ge(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, PT = oh("optbreak", void 0, void 0).opening, NT = {
  kind: "optbreak",
  ownerPredicate: (e) => Ue(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ue(t) || t.getTag() !== "optbreak"))
      return S(e) || Kt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: PT }),
  scanPieces: (e) => Ue(e) ? { value: e.getFirstChild() ?? void 0 } : Ur,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, OT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Ue(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => Ct,
  scanPieces: () => Ur,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, wT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => Ct,
  scanPieces: () => Ur,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, as = [
  TT,
  xT,
  Vu("va"),
  Vu("vp"),
  CT,
  Wu("ca"),
  Wu("cp"),
  AT,
  NT,
  OT,
  wT
], qT = new Map(as.map((e) => [e.kind, e]));
function qn(e) {
  const t = qT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Rn(e) {
  for (const t of as) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function lh(e) {
  return Rn(e) !== void 0;
}
const io = "unmatched", uh = 2;
function Ji(e) {
  return `\\${e}`;
}
class Fr extends Be {
  __marker;
  constructor(t = "", r) {
    super(Ji(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Fr(r, n);
  }
  static importDOM() {
    return {
      [io]: (t) => $T(t) ? {
        conversion: RT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ll().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Ji(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Ji(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Au), r.title = Hu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Hu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(io);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Au), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: uh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function dh(e) {
  return e.getTextContent() === Ji(e.getMarker());
}
function Hu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function RT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: ll(t) };
}
function ll(e) {
  return We(new Fr(e));
}
function $T(e) {
  return e?.tagName.toLowerCase() === io;
}
function ln(e) {
  return e instanceof Fr;
}
const fh = "table", nc = "immutable-table", ph = 1, IT = ["type", "marker", "content"];
class Kn extends rr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return nc;
  }
  static clone(t) {
    return new Kn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return LT().updateFromJSON(t);
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
      type: nc,
      ...t !== void 0 && { unknownAttributes: t },
      version: ph
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function LT(e) {
  return We(new Kn(e));
}
function hh(e) {
  return e instanceof Kn;
}
function DT(e) {
  return e?.type === nc;
}
const gh = "table:row", Gu = "immutable-table-row", mh = 1, ic = "tr", UT = ["type", "marker", "content"];
class Ti extends rr {
  __marker;
  __unknownAttributes;
  constructor(t = ic, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Gu;
  }
  static clone(t) {
    return new Ti(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return FT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? ic).setUnknownAttributes(t.unknownAttributes);
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
      type: Gu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: mh
    };
  }
}
function FT(e, t) {
  return We(new Ti(e, t));
}
const yh = "table:cell", Ju = "immutable-table-cell", bh = 1, sc = "tc1", zT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function KT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class xi extends rr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = sc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Ju;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new xi(r, n, i, s, o);
  }
  static importJSON(t) {
    return jT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? sc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = KT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Ju,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: bh
    };
  }
}
function jT(e, t, r, n) {
  return We(new xi(e, t, r, n));
}
function Fo(e, t) {
  const r = e.getChildAtIndex(t);
  return S(r) ? r : void 0;
}
function tr(e, t) {
  const r = Fo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function cs(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function BT(e) {
  return e.getChildren().some((t) => N(t) && t.getMarkerSyntax() === "closing");
}
function VT(e) {
  return cs(e) ? void 0 : { closed: "false" };
}
function WT(e, t, r, n) {
  const i = t.getMarker(), s = sl(t), o = BT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    As(a) && !a.getTextContent().startsWith(D) && a.setTextContent(D + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function $n(e) {
  return Ze(e, U) ?? void 0;
}
function ul(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function oc(e) {
  const t = kh(e);
  return e.getChildren().every((r) => N(r) || t && ne(r, oe) === "attribute" || S(r) && r.getTextContent().replaceAll(D, "") === "");
}
function kh(e) {
  return cs(e);
}
function HT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? dr(r, wo(e.getMarker())) : "";
  n !== "" && t.insertAfter(ye(n)), e.remove();
}
function GT(e, t) {
  if (cs(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", sl(e)));
}
function JT(e, t) {
  return U(e) && !cs(e) && !cs(t);
}
function YT(e, t, r) {
  oc(e) && e.getChildren().forEach((i) => {
    N(i) || i.remove();
  });
  const [n] = t;
  r && As(n) && !n.getTextContent().startsWith(D) && n.setTextContent(D + n.getTextContent()), e.append(...t);
}
function XT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = kh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = N(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = JT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      YT(e, o, n);
    else {
      const l = Ar(t.getMarker(), VT(t));
      WT(l, t, o, n), e.insertAfter(l), oc(l) ? l.remove() : c = l;
    }
  i && !a && GT(t, n), oc(t) && HT(t, c);
}
function fi(e, t) {
  let r = e.getParent();
  for (; U(r); )
    XT(e, r, t), r = e.getParent();
}
function dl(e) {
  if (S(e) && !N(e)) {
    const t = Ps(e);
    e.select(t, t);
    return;
  }
  if (F(e)) {
    const t = e.getChildren().find((r) => !N(r));
    if (t) {
      dl(t);
      return;
    }
    e.selectEnd();
  }
}
const ci = /* @__PURE__ */ new WeakMap();
function QT(e, t) {
  return ci.set(e, t), () => {
    ci.get(e) === t && ci.delete(e);
  };
}
function Yu(e) {
  return ci.get(e);
}
function ZT(e) {
  return ci.get(en())?.has(e.getKey()) ?? !1;
}
function ex(e) {
  ci.get(en())?.add(e.getKey());
}
function tx(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function ac(e) {
  return !!(e.opener || e.value || e.closer);
}
function Xu(e) {
  return /^\s/.test(e);
}
function fl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Xu(t) || !Xu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function zo(e, t, r) {
  return r.wantsRun ? fl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : tx(t);
}
function rx(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return fl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Th(e, t) {
  return !ac(e.scanPieces(t));
}
function Ns(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!zo(e, n, r))
    return !1;
  const i = q();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || no(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function nx(e, t, r, n) {
  return !r.wantsRun || ac(n) || Ly(ts) ? !1 : en().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : ac(e.scanPieces(i));
  });
}
function ix(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Qu(e) {
  const t = ye(e);
  return Tt(t, oe, "attribute"), t;
}
function sx(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = kp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function ox(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    S(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Qu(n.valueText));
    return;
  }
  const l = sx(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : S(d) ? fl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Qu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function ls(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (zo(e, i, n) && !ZT(t)) {
    if (nx(e, t, n, i)) {
      ex(t);
      return;
    }
    if (!Ns(e, t)) {
      if (!n.wantsRun) {
        ix(i);
        return;
      }
      ox(e, t, i, n);
    }
  }
}
function ax(e, t, r) {
  ls(e, t), t.isAttached() && Ns(e, t) && r.add(t.getKey());
}
function Ko(e) {
  if (!S(e))
    return !1;
  if (N(e) || qe(e) || ln(e))
    return !0;
  const t = ne(e, oe);
  return t === "attribute" || t === gr;
}
function pl(e, t) {
  return N(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && Dr(e) && U(e.getParent())) : !1;
}
function cx() {
  const e = q();
  return A(e) ? pl(e.focus.getNode(), e.focus.offset) : !1;
}
function xh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return S(t) && Ko(t) ? t : void 0;
}
function lx(e) {
  const t = xh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function ux(e) {
  const t = xh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Zu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function ed(e, t) {
  e.set(t.key, t.offset, t.type);
}
function dx(e, t) {
  let r = ux(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!S(n))
      return;
    if (!Ko(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function td(e, t) {
  const r = dx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function _h(e) {
  if (e.isCollapsed()) {
    const a = lx(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Zu(r), Zu(n)], s = td(r, "next"), o = td(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (ed(r, i[0]), ed(n, i[1]), !1) : !0;
}
const so = "verse-block", Ch = 1, fx = "verse-block";
class _i extends rr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return so;
  }
  static clone(t) {
    return new _i(t.__number, t.__key);
  }
  static importJSON(t) {
    return px().updateFromJSON(t);
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
    return Bp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(fx), rd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && rd(r, this.__number), !1;
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
      type: so,
      number: this.getNumber(),
      version: Ch
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function rd(e, t) {
  const { start: r, end: n } = Bp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), nd(e, "data-verse-start", i ? r : NaN), nd(e, "data-verse-end", i ? n : NaN);
}
function nd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function px(e) {
  return We(new _i(e));
}
function us(e) {
  return e instanceof _i;
}
function hx(e) {
  return e?.type === so;
}
const gx = [
  jt,
  mr,
  Nt,
  ft,
  me,
  Me,
  Zt,
  br,
  zn,
  $r,
  Fr,
  nt,
  rn,
  Kn,
  Ti,
  xi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  Ir,
  {
    replace: Uc,
    with: () => Xt(),
    withKlass: rn
  }
], oo = {
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
}, mx = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function yx(e) {
  if (!e)
    return pr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: pr(r)?.category ?? k.Uncategorized,
      type: mx[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: pr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function id(e, t, r) {
  const n = {
    type: Mr,
    version: vr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Ro(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Sh = "v", vh = 1, bx = "verse-selected";
class vt extends ks {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Sh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new vt(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => xx(t) ? {
        conversion: Tx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return hl().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ha, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Un(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ha, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Ut(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Xs + this.getNumber() + Xs
    );
    return _(kx, { nodeKey: this.getKey(), text: t });
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
      version: vh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Kp(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function kx({ nodeKey: e, text: t }) {
  const [r] = nb(e);
  return _("span", { className: r ? bx : void 0, children: t });
}
function Tx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: hl(t) };
}
function hl(e, t, r, n, i, s) {
  return We(new vt(e, t, r, n, i, s));
}
function xx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Sh;
}
function jn(e) {
  return e instanceof vt;
}
function _x(e) {
  return e?.type === vt.getType();
}
function ge(e) {
  return qe(e) || jn(e);
}
function Mh(e) {
  return $p(e) || _x(e);
}
function Cx(e) {
  return Sx(e).find((t) => ce(t));
}
function Sx(e) {
  return e.some(us) ? e.flatMap((t) => us(t) ? t.getChildren() : t) : e;
}
function jo(e) {
  return F(e) ? us(e) ? e.getChildren().flatMap(jo) : e.getChildren() : [];
}
function vx(e, t) {
  return jo(e).find((i) => ge(i) && rl(t, i.getNumber()));
}
function Mx(e, t) {
  return t === 0 ? Cx(e) : e.map((r) => vx(r, t)).filter((r) => r)[0];
}
function ao(e) {
  return jo(e).find((r) => ge(r));
}
function Eh(e, t) {
  if (!F(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ge(i))
      return i;
  }
}
function Ex(e) {
  const t = e.getParent();
  if (t && F(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ge(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Je(r); ) {
    const n = ao(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function co(e) {
  return jo(e).findLast((t) => ge(t));
}
function Ax(e) {
  if (!qe(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function Px(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && F(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function Nx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Px(t, e, r);
  if (S(e)) {
    const n = Ax(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function xa(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Ox(e) {
  const t = rc(e);
  if (!(!t || Je(t)))
    return ge(t) ? t : co(t) ?? yl(t);
}
function wx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!A(t))
    return xa(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (Nx(e, t)) {
    const i = Ox(e);
    return i ? xa(i) : { verseNum: n };
  }
  return xa(e);
}
function qx(e) {
  return Dk(e) || jn(e);
}
function gl(e) {
  if (S(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(D) && e.setTextContent(`${t} `);
  }
}
function Ah(e) {
  if (S(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function cc(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function Rx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ml(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && F(i) && F(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && F(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (ge(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = sd(i);
      for (; s && !Je(s); ) {
        const o = ao(s);
        if (o) {
          n = o;
          break;
        }
        s = sd(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = ao(s);
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
function $x(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ml(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && F(i) && (n = Eh(i, r.getIndexWithinParent())), !n && i) {
      let o = od(i);
      for (; o && !Je(o); ) {
        const a = co(o);
        if (a) {
          n = a;
          break;
        }
        o = od(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Je(s); ) {
      const o = co(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function sd(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function od(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function ml(e, t) {
  if (F(e) && A(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ge(n))
      return n;
    const i = Eh(e, t.anchor.offset);
    if (i)
      return i;
    const s = ao(e);
    if (s)
      return s;
  }
  return yl(e);
}
function yl(e) {
  if (!e || Je(e))
    return;
  if (ge(e))
    return e;
  let t = rc(e);
  for (; t; ) {
    if (Je(t))
      return;
    if (ge(t))
      return t;
    const r = co(t);
    if (r)
      return r;
    t = rc(t);
  }
}
const Ix = ["style"], Lx = ["style", "code"], lo = ["style", "cid"], Dx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Ux = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Fx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], zx = ["style", "caller", "category", "contents"], Kx = ["tag", "marker", "contents"], jx = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], ds = `
`;
function Bx(e, t) {
  const r = se(e);
  if (!Pt(r))
    return;
  const n = Ph(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Ph(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Oo();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (pi(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      pi(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Nr(l) || Pt(l))
        return n;
      Et(l) && (a = l);
    }
    if (Et(l) && (i.includes(l) || i.push(l)), Nh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += bl(l, t);
  }
  if (a)
    return n;
}
function ad(e, t, r = "delta-doc") {
  if (e.length < 2 || !Hx(e[0]) || !Wx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Vx(n, r)?.getKey());
}
function Vx(e, t = "delta-doc") {
  const r = Oo();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (pi(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      pi(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Et(a) && (i.includes(a) || i.push(a)), Nh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = bl(a, t);
    if (Nr(a) && l > 0 && e >= n && e < n + l || Pt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function pi(e, t) {
  return e ? t ? !no(t.node, e.getKey()) : !0 : !1;
}
function Nr(e) {
  return S(e) && !Pt(e);
}
function Pt(e) {
  return Je(e) || ge(e) || Ge(e) || K(e) || Ue(e) || ln(e);
}
function Jr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Wx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && jx.includes(t);
}
function Hx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Nh(e, t) {
  return K(e) || Ue(e) ? !0 : t === "apply" && F(e) && Pt(e);
}
function Oh(e) {
  const t = e.getParent();
  return Bt(e) && ce(t) && t.getFirstChild() === e;
}
function lc(e) {
  const t = e.getParent();
  return t !== null && Ze(t, De) !== null;
}
function Gx(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === zt && t.getChildrenSize() === 1;
}
function Jx(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return N(r) && r === t.getFirstChild() && e.getTextContent() === At(t.getCaller());
}
function Yx(e) {
  return !lh(e) && bl(e, "delta-doc") === e.getTextContentSize();
}
function bl(e, t) {
  if (Pt(e))
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
    (Ss(e) || Oh(e) || ne(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, oe) === "attribute" || lc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Vc) || Gx(e) || Jx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function uc(e, t) {
  const r = { insert: e.__text }, n = ne(e, tn);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = wh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function cd(e) {
  const t = new Ki();
  return e.isEmpty() || e.read(() => {
    const r = ze();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && hr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Xx();
    for (const s of i)
      t.push(s);
  }), t;
}
function kl(e, t) {
  const r = [], n = Fn(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...ld(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...ld(c, n.length, n, i, s, o, a));
  return r;
}
function Xx() {
  return kl();
}
function ld(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Qx(e, a, n), Zx(e, a, i, s, o), e_(e, t, r, i, o, s, a), Je(e) && a.push(i_(e)), ge(e) && a.push(o_(e)), Ge(e) && a.push(a_(e)), ln(e) && a.push(c_(e)), r_(e, a, s), t_(e, a, s), f_(c, s), a;
}
function Qx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ht(n) ? t.push(n_(n)) : ce(n) ? t.push(s_(n)) : hr(n) && t.push({ insert: ds });
  }
  Et(e) && (r.includes(e) || r.push(e));
}
function Zx(e, t, r, n, i) {
  if (!S(e) || qe(e) || ln(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = er(e) !== void 0;
  if (N(e) && (o || Oh(e) || lc(e) || lh(e)) || ne(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Cs(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && N(c) && c === s.getFirstChild() && a === At(s.getCaller()))
    return;
  const l = U(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(Ps(e)));
  const u = a.startsWith(Vc) || ne(e, oe) === "attribute" || lc(e), d = !!l && a === zt && l.getChildrenSize() === 1, f = Bo(e, n), p = f ? r.filter((y) => f.children.includes(y)) : r, m = uc(e, p);
  if (m.insert = a, f) {
    if (!a || a === D || u)
      return;
    f.contentsOps?.push(m);
  } else
    d || u || t.push(m);
  const g = a !== "" && !d && !(u && l);
  if (r.length > 0 && g)
    for (const y of r)
      i.add(y);
}
function e_(e, t, r, n, i, s, o) {
  U(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (pi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = u_(c), u = Bo(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function t_(e, t, r) {
  if (!K(e))
    return;
  const n = l_(e), i = Bo(e, r), s = {
    node: e,
    children: Fn(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function r_(e, t, r) {
  if (!Ue(e))
    return;
  const n = d_(e), i = Bo(e, r), s = {
    node: e,
    children: Fn(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function un(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function n_(e) {
  const t = { style: is, code: e.__code };
  return un(t, e), { insert: ds, attributes: { book: t } };
}
function i_(e) {
  const t = { style: to, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), un(t, e), { insert: { chapter: t } };
}
function s_(e) {
  const t = { style: e.__marker };
  return un(t, e), { insert: ds, attributes: { para: t } };
}
function o_(e) {
  const t = { style: ro, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), un(t, e), { insert: { verse: t } };
}
function a_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), un(t, e), { insert: { milestone: t } };
}
function c_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function l_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), un(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, tn);
  return n && (r.attributes = { segment: n }), r;
}
function u_(e) {
  const t = { insert: "" }, r = wh([e]);
  return r && (t.attributes = { char: r }), t;
}
function d_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), un(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Bo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function f_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    pi(t[r].node, e) && t.splice(r, 1);
}
function wh(e) {
  if (e.length === 0)
    return;
  const t = e.map(p_);
  return t.length === 1 ? t[0] : t;
}
function p_(e) {
  const t = { style: e.__marker }, r = ne(e, On);
  return r && (t.cid = r), un(t, e), t;
}
function uo(e) {
  let t = 0;
  for (const { node: r } of Oo())
    if (K(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function h_(e) {
  let t = 0;
  for (const { node: r } of Oo())
    if (K(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const qh = 1;
class Qt extends ks {
  __caller;
  __previewText;
  __onClick;
  constructor(t = es, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Qt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => m_(t) ? {
        conversion: g_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Tl().updateFromJSON(t);
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
    return r && Un(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => y_(t, n), (l) => b_(t, n, s, l), () => k_(t, n), () => T_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === es && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === tp && i ? (
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
      version: qh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function g_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Tl(t, r) };
}
function Tl(e, t, r) {
  return We(new Qt(e, t, r));
}
function m_(e) {
  return e ? e.classList.contains(Qt.getType()) : !1;
}
function gt(e) {
  return e instanceof Qt;
}
function y_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function b_(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!K(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!gt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function k_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return kl(r);
  });
}
function T_(e, t) {
  return e.getEditorState().read(() => uo(t));
}
const x_ = [
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
], __ = ["†"];
function Vo(e) {
  if (Rh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = ud(t), [s, o] = ud(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = dd(n, i), [s, o] = dd(s, o);
  const a = Eo();
  return a.anchor = vn(n.getKey(), i, fd(n)), a.focus = vn(s.getKey(), o, fd(s)), a;
}
function xl() {
  if (Rh())
    return;
  const e = q();
  if (!e || !A(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = fo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = fo(i, s);
  return { start: n, end: o };
}
function ud(e) {
  if (Ay(e)) {
    const t = $f(e.jsonPath);
    let r = ze();
    for (let n = 0; n < t.length; n++) {
      if (!r || !F(r))
        return [void 0, void 0];
      const i = ki(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : Zk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && F(r) ? [r, eT(r, e.offset)] : [void 0, void 0];
  }
  if (Py(e) || Ny(e)) {
    const t = $i(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (F(t)) {
      const n = t.getLastChild();
      if (n && S(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && F(r) ? [r, 0] : [void 0, void 0];
  }
  if (Oy(e)) {
    const t = $i(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (F(t)) {
      const n = t.getLastChild();
      if (n && S(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && F(r) ? [r, 0] : [void 0, void 0];
  }
  if (wy(e)) {
    const t = $i(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = _a(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && S(n) ? [n, 0] : [void 0, void 0];
  }
  if (qy(e)) {
    const t = $i(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = _a(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && S(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Ry(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = $i(e.jsonPath);
    if (!n || !F(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = _a(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && S(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${$y(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function dd(e, t) {
  if (!yr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !F(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function fd(e) {
  return F(e) ? "element" : "text";
}
function _a(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (N(n) && n.getMarkerSyntax() === t || t === "closing" && N(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (yr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function $i(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = $f(r);
  let i = ze();
  for (const s of n) {
    if (!i || !F(i))
      return;
    const o = ki(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function fo(e, t) {
  if (N(e)) {
    const r = e.getMarkerSyntax(), n = C_(e), i = n ? mn(Tn(n)) : mn(Tn(e));
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
    if (S(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return fo(n, s);
    }
    const i = $o(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return fo(i, o);
    }
  }
  if (F(e)) {
    const r = e.getChildAtIndex(t);
    if (yr(r)) {
      const i = r.getTextContent().endsWith("*"), s = mn(Tn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Wp(e, t);
    return n.type === "text" ? {
      jsonPath: mn([...Tn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: mn(Tn(e)),
      offset: n.index
    };
  }
  if (S(e)) {
    const r = Qk(e, t);
    if (r)
      return {
        jsonPath: mn([
          ...Tn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: mn(Tn(e)), offset: t };
}
function C_(e) {
  const t = e.getParent();
  if (!t || !F(t))
    return;
  const r = S_(e);
  return r && !Et(r) && !S(r) && !Ce(r) ? r : t;
}
function S_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!vs(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Tn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = $o(r);
    if (!n)
      break;
    const i = Xk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Rh() {
  for (let e = ze().getFirstChild(); e; e = e.getNextSibling())
    if (us(e))
      return !0;
  return !1;
}
function $h(e, t, r, n, i, s, o) {
  if (!Me.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Vo(r) : q();
  if (!A(a))
    return;
  const c = E_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (ji(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Ih(e, l, c, i, s, void 0, void 0);
  return M_(u, a, i), u;
}
function _l(e) {
  return e !== "expanded";
}
function v_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!S(r) || !U(r.getParent()))
    return;
  if (N(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return N(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function M_(e, t, r) {
  const n = _l(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Kk(t), _h(t);
  const i = v_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(U)?.selectEnd();
}
function ei(e, t, r) {
  const n = Ar(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(Er("marker", Re(e)));
  const s = t === "" ? zt : i ? D + t : t;
  return n.append(ye(s)), n;
}
function E_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(ei("fr", f, n)), !e.isCollapsed()) {
        const p = gd(e);
        p.length > 0 && o.push(ei("fq", p, n));
      }
      o.push(ei("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(ei("xo", f, n)), !e.isCollapsed()) {
        const p = gd(e);
        p.length > 0 && o.push(ei("xq", p, n));
      }
      o.push(ei("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Ih(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : _l(n?.noteMode), l = Jc(e, t, c);
  s && Tt(l, tn, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = Er("marker", Re(e) + " "), a || (f = Er("marker", Qe(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = ye(At(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => Ms(), g = r.flatMap(q_(m));
    if (t === "")
      l.append(...g);
    else {
      const y = tl(r);
      let T = () => {
      };
      i?.noteCallerOnClick && (T = i.noteCallerOnClick), p = Tl(l.__caller, y, T), l.append(p, m(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Yr(e) {
  if (typeof e == "string") {
    const t = se(e);
    return K(t) ? t : void 0;
  }
  return h_(e);
}
function pd(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (jn(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else {
    const n = e.getChildren(), i = n.slice().reverse().find(U);
    if (i)
      A_(i);
    else {
      const s = Cl(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function Cl(e) {
  const t = e.getChildrenSize() - 1, r = e.getLastChild();
  return N(r) && r.getMarkerSyntax() === "closing" || yr(r) && r.getTextContent() === Qe(e.getMarker()) ? t : -1;
}
function A_(e) {
  const t = Cl(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  S(r) && !vs(r) ? r.selectEnd() : e.select(t, t);
}
function P_(e) {
  const t = e.getNextSibling();
  if (S(t) && !Ko(t)) {
    t.select(0, 0);
    return;
  }
  const r = e.getParent();
  if (!r)
    return;
  const n = e.getIndexWithinParent() + 1;
  r.select(n, n);
}
function hd(e, t) {
  let r = Math.max(t, 0), n;
  const i = Pr(e);
  for (const { node: o } of Fn(e)) {
    if (!Sl(o, i))
      continue;
    const a = Ps(o), c = o.getTextContentSize() - a;
    if (r < c) {
      const l = a + r;
      return o.select(l, l), !0;
    }
    r -= c, n = o;
  }
  if (!n)
    return !1;
  const s = n.getTextContentSize();
  return n.select(s, s), !0;
}
function N_(e, t) {
  const { value: r } = Io(e);
  if (!r)
    return !1;
  const n = Lh(r), i = Math.min(n + Math.max(t, 0), r.getTextContentSize());
  return r.select(i, i), !0;
}
function Lh(e) {
  return e.getTextContent().startsWith(D) ? D.length : 0;
}
function O_(e, t) {
  let { node: r, offset: n } = t;
  for (; F(r); ) {
    const c = r.getChildAtIndex(n);
    if (c)
      r = c, n = 0;
    else {
      const l = r.getLastDescendant();
      if (!l)
        break;
      r = l, n = l.getTextContentSize();
    }
  }
  const { opener: i, value: s } = Io(e);
  if (s?.is(r))
    return {
      utf16Offset: Math.max(0, n - Lh(s)),
      field: "category"
    };
  if (i?.is(r))
    return { utf16Offset: 0, field: "category" };
  const o = Pr(e);
  let a = 0;
  for (const { node: c } of Fn(e))
    if (Sl(c, o)) {
      const l = Ps(c);
      if (c.is(r))
        return { utf16Offset: a + Math.max(0, n - l) };
      a += c.getTextContentSize() - l;
    } else if (c.is(r))
      return { utf16Offset: a };
  return { utf16Offset: a };
}
function Sl(e, t) {
  return !S(e) || vs(e) || Ko(e) ? !1 : !t || !e.is(t);
}
function w_(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(U))
    return;
  const t = Pr(e);
  for (const { node: n } of Fn(e))
    if (Sl(n, t))
      return;
  const r = Cl(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function q_(e) {
  return (t) => Kt(t) ? [t] : [t, e()];
}
function R_(e) {
  const t = e.getParent();
  return t !== null && Ze(t, K) !== null;
}
function gd(e) {
  if (!A(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Fc(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || gt(c) || R_(c)) && !N(c) && !ln(c) && ne(c, oe) !== "attribute") {
      if (ge(c)) {
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
const vl = [
  Qt,
  vt,
  ...gx
], $_ = [
  _i,
  ...vl
], I_ = cn((e, t) => {
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
function L_() {
  const [e, t] = de(void 0), [r, n] = de(), i = Z(null), s = he((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = fb(l, c, () => {
      pb(l, c, {
        placement: "bottom-start",
        middleware: [hb(), gb()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = he(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function D_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = L_();
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
const U_ = _y(I_);
function Dh({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = D_({ isOpen: e, floatingBoxRef: r }), s = je(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Sn(
    _(U_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Uh = qf(void 0);
function Ml() {
  const e = Rf(Uh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function F_(e, t) {
  const [r, n] = de(0), [i, s] = de(-1), o = je(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = he(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = he(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = he(() => {
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
  return _(Uh.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const Fh = cn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Ml(), u = he((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = he((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function K_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = Ml(), o = je(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = je(() => {
    const c = o(s);
    return t ? Cy.map(c, (l, u) => Sy(l) && l.type === Fh && l.props.index === void 0 ? vy(l, { index: u }) : l) : c;
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
const j_ = (e, t, r) => Bs(e, r).toLowerCase().includes(t.toLowerCase()), md = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Bs = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function B_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? md(r[0]) : "") : (u = n || (r.length > 0 ? md(r[0]) : ""), d = (m, g) => j_(m, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (g) {
      return console.warn("Error filtering item:", m, g), !1;
    }
  }).sort((m, g) => {
    const y = (M) => (p.has(M) || p.set(M, Bs(M, f).toLowerCase()), p.get(M) ?? ""), T = a ? Bs(m, f) : y(m), C = a ? Bs(g, f) : y(g);
    for (const M of c)
      switch (M) {
        case "exact":
          if (T === l && C !== l)
            return -1;
          if (C === l && T !== l)
            return 1;
          break;
        case "startsWith":
          if (T.startsWith(l) && !C.startsWith(l))
            return -1;
          if (C.startsWith(l) && !T.startsWith(l))
            return 1;
          break;
        case "contains": {
          const O = T.indexOf(l), v = C.indexOf(l);
          if (O !== -1 && v === -1)
            return -1;
          if (v !== -1 && O === -1)
            return 1;
          if (O !== -1 && v !== -1)
            return O - v;
          break;
        }
      }
    return T.localeCompare(C);
  });
}
const Ca = {
  Root: z_,
  Options: K_,
  Option: Fh
};
function V_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return je(() => B_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function W_() {
  const { moveUp: e, moveDown: t, select: r } = Ml();
  return je(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const H_ = () => {
  const e = W_(), [t] = ae();
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
    return t.registerCommand(qr, r, we);
  }, [t, e]);
};
function G_() {
  return H_(), null;
}
const J_ = ["Shift", "Control", "Alt", "Meta"];
function zh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), u = s !== void 0, [d, f] = de(""), p = u ? s ?? "" : d, m = V_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, m);
  }, [a, p, m]), j(() => l.registerCommand(qr, (y) => {
    if (u || c?.includes(y.key) || J_.includes(y.key))
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
  }, we), [l, u, p, o, n, c]), xe(Ca.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => g(y), children: [!u && _("input", { value: p, type: "text", disabled: !0 }), _(G_, {}), _(Ca.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((C, M) => xe(Ca.Option, { index: M, children: [_("span", { className: "label", children: C.label ?? C.name }), _("span", { className: "description", children: C.description })] }, C.name)) })] });
}
function Y_({ trigger: e, items: t }) {
  const [r] = ae(), [n, i] = de(!1), s = he((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = q();
      if (A(l))
        return l;
    });
    a.read(() => {
      const l = q();
      !A(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && _(Dh, { isOpen: n, children: ({ placement: o }) => _(zh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function X_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: je(() => {
    if (!t || !e)
      return;
    const i = pr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = pr(o), { action: c } = r(o, a);
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
function Yi(e, t) {
  return `${e}:${t}`;
}
function Q_(e, t) {
  j(() => {
    if (!e.hasNodes([rt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ve(Hf(e, rt, (n) => ns(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], m = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, m, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(rt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = se(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Ce(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!rt.isReservedType(c))
              for (const u of l) {
                let d = t.get(Yi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Yi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Yi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const Z_ = cn(function({ logger: t }, r) {
  const [n] = ae(), i = je(() => /* @__PURE__ */ new Map(), []);
  Q_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Yi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = se(u);
        Ce(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && eo(d));
      }
  };
  return So(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (rt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Vo(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), mp(p, a, c, l, u, d, f);
      }, { tag: Ga });
    },
    removeAnnotation(o, a) {
      if (rt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Yi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ga });
    }
  })), null;
}), eC = [];
function tC({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = eC, onChange: n }) {
  const [i] = ae();
  return bs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Lf) && !u.has(np) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = rC(i, s);
        d.length !== 0 && n(o, i, u, d, l);
      });
  }, [i, e, t, r, n]), null;
}
function rC(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ki();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && er(s) !== void 0;
    if (t.size === 1 && S(s) && !o && Yx(s)) {
      const a = Ph(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = se(i);
          return new Ki([S(d) ? uc(d) : { insert: "" }]);
        }), l = new Ki([uc(s)]), u = new Ki(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = cd(r), c = cd(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const El = "formatted", Kh = "unformatted", jh = "paragraph-structure", Al = "standard", Bh = "block-verse", nC = {
  [El]: "Formatted",
  [Kh]: "Unformatted",
  [jh]: "Paragraph Structure",
  [Al]: "Standard",
  [Bh]: "Block Verse"
};
function Ci(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Pl, Nl;
function iC(e) {
  const t = Ol(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Pl = e, Nl = t;
}
iC(El);
const iN = () => Pl, Wo = () => Nl;
function Ol(e) {
  let t;
  switch (e ?? Pl) {
    case El:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Kh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case jh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Al:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Bh:
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
function sN(e) {
  if (!e)
    return;
  const t = yd(e);
  return Object.keys(nC).find((r) => wt(yd(Ol(r)), t));
}
const sC = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function yd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...sC, ...t };
}
function Ho(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function oC(e) {
  if (e)
    return fs(e) ? vt : e.markerMode === "editable" ? ft : vt;
}
function fs(e) {
  return e?.verseLayout === "block";
}
function aC(e) {
  const t = [], r = e ?? Nl;
  return r && (t.push(`${Pb}${r.markerMode}`), r.hasSpacing && t.push(Eb), r.isFormattedFont && t.push(Ab)), t;
}
function cC(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += lC(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), dC(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += fC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), hC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function lC(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), uC(t, e.retain, e.attributes, r, n)), e.retain);
}
function uC(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = ze();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Nr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, m = Math.min(s, p);
        if (m > 0) {
          let g = u;
          const y = f > 0, T = m < d - f;
          if (y && T) {
            const [, C] = u.splitText(f);
            [g] = C.splitText(m);
          } else y ? [, g] = u.splitText(f) : T && ([g] = u.splitText(m));
          if (nn(r)) {
            const C = g.getParent();
            if (U(C)) {
              const M = r.char;
              let O;
              Array.isArray(M) ? a >= 0 && a <= M.length - 1 && (O = M[a]) : a === 0 && (O = M);
              const v = O ? wn(O, C) : !1;
              if (v && Array.isArray(M) && M.length > 1) {
                const B = ye("");
                g.replace(B);
                const E = typeof r.segment == "string" ? r.segment : void 0, R = Si(M.slice(1), n, g, E);
                let $ = B;
                for (const re of R)
                  $.insertAfter(re), $ = re;
                B.remove(), Rt(r, g);
              } else if (v)
                Rt(r, g);
              else {
                g.remove();
                const B = bd(g, r, n, i);
                if (B && B.length > 0) {
                  let E = C;
                  for (const R of B)
                    E.insertAfter(R), E = R;
                }
              }
            } else {
              const M = ye("");
              g.replace(M);
              const O = bd(g, r, n, i);
              if (O && O.length > 0) {
                let v = M;
                for (const B of O)
                  v.insertAfter(B), v = B;
                M.remove();
              } else
                M.replace(g);
            }
          } else
            Rt(r, g);
          s -= m;
        }
      }
      o += d;
    } else if (Pt(u))
      e <= o && o < e + t && s > 0 && (kd(u, r), s -= 1), o += 1;
    else if (U(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (nn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            dc(u, p.style), typeof p.cid == "string" && Tt(u, On, () => p.cid);
            const m = Fe(p, lo);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || CC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Wa(u), !0;
        }
      }
      d && Wa(u), a -= 1;
    } else if (Et(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!hr(u))
          kd(u, r);
        else if (wl(r)) {
          const p = Hh(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (F(u)) {
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
function bd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Si(t.char, r, e, i), o = s.find(U);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Rt(t, e);
    return;
  }
  const a = {};
  Xh.forEach((u) => {
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
function Vh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  N(r) ? (r.setMarker(t), r.setTextContent(Re(t))) : Kt(r) && r.getTextType() === "marker" && r.setTextContent(Re(t) + D);
}
function dc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    N(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = U(e.getParent()), i = e.getFirstChild();
  Kt(i) && i.getTextType() === "marker" && i.getTextContent() === Re(r, n) && i.setTextContent(Re(t, n));
  const s = e.getLastChild();
  Kt(s) && s.getTextType() === "marker" && s.getTextContent() === Qe(r, n) && s.setTextContent(Qe(t, n));
}
function kd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && U(e) && nn(t)) {
      const i = fc(n);
      if (dc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Tt(e, On, () => o);
      }
      const s = Fe(i, lo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Je(e) || ge(e) || Ge(e) || K(e) || Ue(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ht(e) || ce(e) || U(e)) && (r === "style" && ce(e) ? Vh(e, n) : r === "style" && U(e) ? dc(e, n) : r === "code" && ht(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Tt(e, tn, () => n));
  }
}
function dC(e, t, r) {
  if (t <= 0)
    return;
  const n = ze();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Nr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Pt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Et(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Et(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Xt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Se(p)) {
            let m = i + 1;
            const g = p.getChildren();
            for (const T of g) {
              if (s <= 0)
                break;
              const C = i;
              if (i = m, o(T)) {
                i = C;
                break;
              }
              Nr(T) ? m += T.getTextContentSize() : Pt(T) && (m += 1), i = C;
            }
            const y = p.getChildren();
            for (const T of y)
              T.remove(), a.append(T);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Xt(), !0);
        } else ce(a) ? a.replace(Xt(), !0) : a.remove();
      }
      i += 1;
    } else if (F(a)) {
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
function fC(e, t, r, n, i) {
  if (t === ds)
    return Td(e, r, n, i);
  if (t.endsWith(ds) && !wl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (nn(r))
        throw new Error("Text + LF should not have char attributes");
      o += po(e, s, r, i);
    }
    return o += Td(e + o, r, n, i), o;
  } else return nn(r) ? pC(e, t, r, n, i) : po(e, t, r, i);
}
function pC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ye(t === "" ? zt : t);
  Rt(r, s);
  let o;
  {
    let y = function(T) {
      if (Nr(T)) {
        const C = T.getTextContentSize();
        if (e >= g && e < g + C) {
          const M = T.getParent();
          return U(M) && (o = M), !0;
        }
        g += C;
      } else if (Pt(T))
        g += 1;
      else if (U(T)) {
        const C = T.getChildren();
        for (const M of C)
          if (y(M))
            return !0;
      } else if (F(T)) {
        const C = T.getChildren();
        for (const M of C)
          if (y(M))
            return !0;
        Et(T) && (g += 1);
      }
      return !1;
    };
    const m = ze();
    let g = 0;
    y(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && wn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (wn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Si(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(U);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), po(e, t, void 0, i);
  const f = {};
  for (const [m, g] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof g == "string" && (f[m] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const m of u)
    if (!Wh(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), po(e, t, void 0, i));
}
function po(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = ze();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Nr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = ye(t);
        if (Rt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          U(f) && !nn(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Pt(c))
      s += 1;
    else if (U(c)) {
      if (!o && e === s) {
        const d = ye(t);
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
        const d = ye(t);
        return Rt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Et(c)) {
      if (!o && e === s) {
        const d = ye(t);
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
        const d = ye(t);
        return Rt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (F(c)) {
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
    const c = ye(t);
    Rt(r, c);
    const l = Xt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Wh(e, t, r) {
  const n = ze();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Xt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!F(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Se(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Xt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Nr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Pt(l))
        i += 1;
      else if (U(l)) {
        if (o(l))
          return !0;
      } else if (Et(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (hr(u) && Et(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (F(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return F(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Xt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Se(a) ? hr(a) && ce(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Se(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Se(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function hC(e, t, r, n, i) {
  let s;
  return Jr("chapter", t) ? s = mC(t.insert.chapter, r) : Jr("verse", t) ? s = yC(t.insert.verse, r) : Jr("ms", t) ? s = bC(t.insert.ms) : Jr("note", t) ? s = Gh(t, r, n, i) : Jr("unknown", t) ? s = Jh(t, r, n, i) : Jr("unmatched", t) && (s = TC(t.insert.unmatched, r)), s ? Wh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function Td(e, t, r, n) {
  let i;
  wl(t) ? i = Hh(t.para, r) : _C(t) && (i = gC(t.book)), i ??= Xt();
  const s = i, o = ce(s), a = hr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Nr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ce(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const m = e - c, [g] = m > 0 ? d.splitText(m) : [void 0];
          let y, T = g?.getPreviousSibling();
          for (; T; ) {
            const C = T;
            T = T.getPreviousSibling(), y ? y.insertBefore(C) : s.append(C), y = C;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Pt(d))
      c += 1;
    else if (Et(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (hr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ce(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ce(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (F(d)) {
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
  return u(ze()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function gC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== is || !r || !jt.isValidBookCode(r))
    return;
  const n = Fe(e, Lx);
  return xp(r, n);
}
function Hh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Fe(e, Ix), i = ss(r, n);
  if (!Ci(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), Ms());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Re(r) + D;
    i.append(t.hasGutterParaMarkers ? rk(s) : Er("marker", s));
  }
  return i;
}
function mC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Fe(e, Dx);
  let a;
  if (t.markerMode === "editable")
    a = Sp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Zc(r, c, n, i, s, o);
  }
  return a;
}
function yC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Fe(e, Ux);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Ut(r, n);
    c = Rp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = hl(n, l, i, s, o, a);
  }
  return c;
}
function bC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Fe(e, Fx);
  return op(t, r, n, s, i);
}
function Gh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Fe(i.note, zx), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (nn(g.attributes)) {
        const y = Si(g.attributes.char, t, ye(g.insert), void 0, Yh(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(ye(g.insert));
  return Ih(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Jh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Fe(i, Kx), l = Qc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && kC(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Tt(l, tn, () => d), l;
}
function kC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (nn(s.attributes)) {
        const o = ye(s.insert), a = Si(s.attributes.char, t, o, void 0, Yh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ye(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Jr("unknown", s)) {
        const o = Jh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Jr("note", s)) {
        const o = Gh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function TC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = ll(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Yh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function fc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Si(e, t, r, n, i, s = !1, o = !1) {
  S(r) && r.getTextContentSize() === 0 && r.setTextContent(zt);
  const a = () => {
    o && S(r) && r.getTextContent() !== zt && r.setTextContent(D + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(fc), l = c[0], u = i?.[i.length - 1];
    if (U(u) && wn(l, u)) {
      if (c.length > 1) {
        const f = Si(c.slice(1), t, r, void 0, void 0, !0, o);
        Sa(u, f);
      } else
        r && Sa(u, [r]);
      return [];
    }
    a();
    const d = c.reduceRight((f, p, m) => {
      const g = Ar(p.style, Fe(p, lo));
      return typeof p.cid == "string" && Tt(g, On, () => p.cid), n && m === c.length - 1 && Tt(g, tn, () => n), f && (U(f) && (Ma(f.getMarker(), f, t, !0), va(f, f, t, !0)), g.append(f)), g;
    }, r);
    return Ma(l.style, d, t, s), va(d, d, t, s), [d];
  } else {
    const c = fc(e), l = i?.[i.length - 1];
    if (U(l) && wn(c, l))
      return r && Sa(l, [r]), [];
    a();
    const u = Ar(c.style, Fe(c, lo));
    return typeof c.cid == "string" && Tt(u, On, () => c.cid), n && Tt(u, tn, () => n), r && u.append(r), Ma(c.style, u, t, s), va(u, u, t, s), [u];
  }
}
function Sa(e, t) {
  const r = e.getLastChild();
  N(r) && r.getMarkerSyntax() === "closing" || Kt(r) && r.getTextType() === "marker" && r.getTextContent() === Qe(e.getMarker(), U(e.getParent())) ? t.forEach((i) => r.insertBefore(i)) : e.append(...t);
}
function va(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && xC(e.getMarker(), t, r, !1, n);
}
function Ma(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = Er("marker", Re(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function xC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = Er("marker", n ? Qe("") : Qe(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function _C(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function wl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function nn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function CC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Rt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Tt(t, tn, () => n);
        continue;
      }
      if (SC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Xh = [
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
function SC(e) {
  return Xh.includes(e);
}
function vC() {
  const [e] = ae();
  return j(() => e.registerCommand(Ao, (t) => (MC(t), !1), En), [e]), null;
}
function MC(e) {
  if (EC(e.target))
    return;
  const t = q();
  A(t) && AC(t);
}
function vi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Bt(t))
      r++, t = t.getNextSibling(), S(t) && t.getTextContent() === D && (r++, t = t.getNextSibling());
    else if (ge(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (tr(e, r), !0);
}
function EC(e) {
  if (!Df(e))
    return !1;
  const t = bi(e);
  if (!nk(t))
    return !1;
  const r = t.getParent();
  return r ? Se(r) ? vi(r) : (tr(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function AC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!Se(r))
    return !1;
  const n = r.getFirstChild();
  return !yr(n) && !jn(n) ? !1 : vi(r);
}
function PC() {
  const [e] = ae();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !NC(r) || !Go() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ve(
      e.registerCommand(qr, t, we),
      e.registerCommand(zc, t, we),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(Sr, t, Yt),
      e.registerCommand(An, t, Yt),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Kc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = bi(r.target);
        return !n || !sn(n) ? !1 : (r.preventDefault(), !0);
      }, we),
      e.registerCommand(Dy, t, we),
      e.registerCommand(Uy, t, we),
      e.registerCommand(Fy, t, we)
    );
  }, [e]), null;
}
function NC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function sn(e) {
  return Ze(e, (t) => Ue(t) || hh(t)) ?? void 0;
}
function Go() {
  const e = q();
  return A(e) ? sn(e.anchor.getNode()) !== void 0 || sn(e.focus.getNode()) !== void 0 : !1;
}
function OC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function wC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), OC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function qC(e, t, r, n) {
  if (!HC(t) || wC(e, r))
    return !1;
  const i = r === "up" ? $x(t) : Rx(t);
  return i && n.preventDefault(), i;
}
function RC({ viewOptions: e }) {
  const [t] = ae();
  return $C(t, e), null;
}
function $C(e, t) {
  j(() => {
    if (!e.hasNodes([mr, vt, Me]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = q();
      if (!A(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = xd(o), d = KC(i, _d(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return qC(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = xd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return _d(a, n.key) ? l = !c && vd(i, "next") || !c && LC(i) || VC(i) || !c && s && Sd(i, "next") : IC(a, n.key) && (l = !c && vd(i, "previous") || !c && DC(i) || WC(i, t) || !c && s && Sd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(qr, r, we);
  }, [e, t]);
}
function xd(e) {
  return e.dir || "ltr";
}
function _d(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function IC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function pc(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = er(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function LC(e) {
  const t = pc(Dp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (tr(t, 0), !0);
}
function DC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = pc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : Cd(n);
  }
  if (t.offset === 0) {
    const n = pc(r);
    return n ? Cd(n) : !1;
  }
  return !1;
}
function Cd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (S(t))
    return t.select(), !0;
  if (F(t)) {
    const i = t.getLastDescendant();
    return S(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const ho = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function UC(e) {
  if (ho)
    for (const { segment: r } of ho.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function FC(e) {
  if (ho) {
    let n = 0;
    for (const { index: i } of ho.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Qh(e) {
  for (let t = e; t; t = t.getParent())
    if (F(t) && !t.isInline())
      return t;
}
function Zh(e) {
  return !!e && N(e) && sn(e) !== void 0;
}
function hi(e) {
  return S(e) && !e.isToken() && !Zh(e) && e.getTextContentSize() > 0;
}
function eg(e) {
  return Ts(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : S(e) ? (e.isToken() || Zh(e)) && e.getTextContentSize() > 0 : Po(e) ? !Ge(e) : !1;
}
function gi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Jo(e, t, r) {
  for (let n = e; n; ) {
    if (eg(n))
      return n;
    if (F(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? gi(n, t, r);
      continue;
    }
    if (hi(n))
      return n;
    n = gi(n, t, r);
  }
}
function ql(e, t, r, n, i) {
  return r === "element" && F(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? gi(e, n, i) : r === "text" && eg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : gi(e, n, i);
}
function Ea(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = ql(e.node, e.offset, e.kind, "previous", t), n = Jo(r, "previous", t);
  if (!n)
    return e;
  if (hi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function zC(e, t) {
  const r = e.getNode(), n = Qh(r);
  if (!n)
    return;
  if (e.type === "text" && hi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Ea({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = ql(r, e.offset, e.type, t, n), s = Jo(i, t, n);
  if (!s)
    return;
  if (hi(s)) {
    const c = s.getTextContent(), l = t === "next" ? UC(c) : FC(c);
    return Ea({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Ea({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function tg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = zC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.kind === "element" && F(i.node) ? rg(i.node, i.offset) : i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Sd(e, t) {
  return tg(e, t, "collapse");
}
function KC(e, t) {
  return tg(e, t, "extend");
}
function jC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && hi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = ql(n, e.offset, e.type, t, r);
  return Jo(i, t, r) === void 0;
}
function BC(e, t) {
  const r = ze();
  for (let n = e; n; ) {
    const i = gi(n, t, r), s = i && Jo(i, t, r);
    if (!s)
      return;
    if (n = sn(s), !n)
      return s;
  }
}
function vd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (sn(n))
    return !1;
  const i = Qh(n);
  if (!i || !jC(r, t, i))
    return !1;
  const s = gi(i, t, ze()), o = s && sn(s);
  if (!o)
    return !1;
  const a = BC(o, t);
  if (!a)
    return !0;
  if (hi(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Md(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  rg(t, r);
}
function rg(e, t) {
  const r = e.getChildAtIndex(t - 1);
  if (!K(r) || r.getIsCollapsed() !== !0) {
    e.select(t, t);
    return;
  }
  const n = Eo();
  n.anchor.set(e.getKey(), t, "element"), n.focus.set(e.getKey(), t, "element"), Pn(n), en().dispatchCommand(Ft, void 0);
}
function VC(e) {
  const t = e.anchor.getNode(), r = Dp(e);
  if (K(r) && !N(r.getFirstChild())) {
    if (Se(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Se(i) && vi(i)) && i.selectStart(), !0;
      }
    } else return Kt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Se(t) && K(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Md(r), !0;
  }
  const n = r?.getParent();
  if (Kt(r) && K(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Md(n) : n.selectEnd(), !0;
  }
  return !1;
}
function WC(e, t) {
  const r = Uk(e);
  if (_s(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (ht(i.getParent()))
    return !0;
  if (K(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!jn(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Se(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = Ze(o, (c) => K(c));
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
  if (gt(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function HC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ge(t) && Po(t);
}
function GC() {
  const [e] = ae();
  return JC(e), null;
}
function JC(e) {
  j(() => {
    if (!e.hasNodes([me]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ve(
      e.registerNodeTransform(me, QC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(me, aT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(me, nh),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(me, (t) => ls(qn("char"), t)),
      e.registerNodeTransform(Be, ZC)
    );
  }, [e]);
}
function Aa(e) {
  return e.getChildren().some(N);
}
function YC(e, t) {
  const r = t.getFirstChild();
  if (!N(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (As(n)) {
    const i = n.getTextContent();
    i.startsWith(D) && (i === D ? n.remove() : n.setTextContent(i.slice(D.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function XC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  N(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function QC(e) {
  if (!U(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Aa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ne(e, On), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && wn({ style: t, cid: r }, i) && wt(n, i.getUnknownAttributes()))
    if (Aa(i)) {
      if (YC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && wn({ style: t, cid: r }, s) && wt(n, s.getUnknownAttributes()) && (Aa(s) ? XC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function ZC(e) {
  const t = e.getParent();
  if (!U(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(zt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function ng(e) {
  return e.replaceAll("	", " ");
}
function ig() {
  const e = q();
  return !!e && !e.isCollapsed();
}
function sg(e) {
  const t = () => !ig();
  return Ve(e.registerCommand(No, t, _t), e.registerCommand(An, t, _t));
}
const Rl = (e) => {
  e.dispatchCommand(No, null);
}, $l = (e) => {
  e.dispatchCommand(An, null);
}, Il = (e) => {
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
      n.setData(o, ng(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(Sr, s);
  });
}, Ll = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", ng(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(Sr, i);
  });
};
function eS() {
  const [e] = ae();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Ys ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Rl(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), $l(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Ll(e) : Il(e)));
    };
    return Ve(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      sg(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function tS({ logger: e }) {
  const [t] = ae();
  return j(() => Ve(
    // When the backslash or forward slash key is typed.
    t.registerCommand(qr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), oi),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(Sr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, oi),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Kc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, oi)
  ), [t, e]), null;
}
function rS({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function nS({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(rS, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let iS = 0;
class Ii {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${iS++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function sS({ options: e } = {}) {
  const [t] = ae(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = de(void 0), c = je(() => {
    const d = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new Ii("Cut", {
        onSelect: () => {
          $l(t);
        },
        isDisabled: r
      }),
      new Ii("Copy", {
        onSelect: () => {
          Rl(t);
        }
      }),
      new Ii("Paste", {
        onSelect: () => {
          Il(t);
        },
        isDisabled: r
      }),
      new Ii("Paste as Plain Text", {
        onSelect: () => {
          Ll(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Ii(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = he(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  j(() => sg(t), [t]), j(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || Np(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
        f.preventDefault(), l();
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
  return bs(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${m}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? ab.createPortal(_("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: _(nS, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function oS(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function aS(e) {
  if (!jy(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function cS(e) {
  return gt(e);
}
function Pa(e, t, r) {
  const n = bi(t.node);
  if (!Po(n) || cS(n))
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
function lS(e, t) {
  if (q())
    return !1;
  const r = e.getRootElement(), n = zy(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Ky(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = Pa(e, c, aS(c)), d = u;
  else {
    const y = oS(n.getRangeAt(0), c);
    u = Pa(e, c, y ? "before" : "after"), d = Pa(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, m = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = Uf(m, e);
  return g ? (Pn(g), g.dirty = !t, t) : !1;
}
function uS() {
  const [e] = ae(), t = Z(!1), r = Z(!1);
  return j(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = q();
        A(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), j(() => e.registerCommand(Ft, () => (lS(e, t.current) && (r.current = !0), !1), Yt), [e]), null;
}
function dS() {
  const [e] = ae();
  return j(() => e.registerCommand(qr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Ys ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Yt), [e]), null;
}
function fS({ isEditable: e }) {
  const [t] = ae();
  return bs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function og(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Zr(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
  return r;
}
function Na(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  if (!t || !r?.anchorNode || !t.contains(r.anchorNode))
    return;
  e.getEditorState().read(() => {
    const i = q();
    if (!A(i))
      return !1;
    const s = Uf(r, e);
    return !!s && i.is(s);
  }, { editor: e }) || r.removeAllRanges();
}
function Vs(e, t) {
  let r;
  try {
    r = en();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function Ed(e) {
  return !!e && Ss(se(e));
}
function Dl(e) {
  const [t] = ae(), r = Z(void 0), n = he((i) => {
    const s = q(), o = A(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Ed(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Fo(u, d), p = Ss(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const m = Rk();
        i.insertAfter(m), r.current = m.getKey(), l = m.getKey();
      }
      tr(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = se(a);
      S(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = q(), l = A(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (qt(Dt), Zr(t, Dt), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Cs(c) || !c.includes(ui))
        return;
      const l = q(), u = A(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if ($k(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(ui).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ve(t.registerCommand(Ft, () => (i(), !1), En), t.registerCommand(jc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Ed(a);
      }), c && t.update(() => {
        const l = se(a);
        S(l) && l.remove();
      }, { tag: Dt }), r.current = void 0, !1;
    }, En), t.registerNodeTransform(Be, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function pS() {
  const e = q();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = K(r) ? r : r.getParent();
  if (!K(n))
    return;
  const i = w_(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && Ss(s); )
    s = s.getPreviousSibling();
  if (!s || S(s) && s.isSimpleText())
    return;
  const o = s.getIndexWithinParent() + 1;
  if (r.is(n))
    return t.offset >= o && t.offset <= i ? s : void 0;
  if (r.is(s))
    return S(s) && t.offset === s.getTextContentSize() ? s : void 0;
  const a = r.getIndexWithinParent();
  return a >= o && a <= i && t.offset === 0 ? s : void 0;
}
function hS() {
  return Dl(pS), null;
}
function gS() {
  const e = q();
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!F(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ge(i) || Fo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ge(s))
    return i;
}
function mS() {
  return Dl(gS), null;
}
function yS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ae();
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
        const u = og(o);
        o.update(() => {
          u || qt(_r), o.setEditorState(l), o.dispatchCommand(By, void 0);
        }, { tag: Wc });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const Oa = "caller_highlight", bS = cn(function(t, r) {
  const [n] = ae(), i = Z(void 0), s = Z(void 0), o = he(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const u = Yr(a);
      return u ? (u.getChildren().find(gt) ?? Pr(u))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(Oa), l?.classList.add(Oa), s.current = l;
  }, [n]);
  return So(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : Vs(n, () => Yr(a)?.getKey()), o();
    }
  }), [n, o]), j(() => Ve(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(Me, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const d = l.has(Wc) ? void 0 : c.read(() => uo(u)), f = d === void 0 ? void 0 : n.getEditorState().read(() => Yr(d)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), j(() => () => s.current?.classList.remove(Oa), []), null;
});
function kS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return TS(t, n), xS(i, e, r, n), null;
}
function TS(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = x_), r.current !== o && (r.current = o, Ad("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = __), n.current !== o && (n.current = o, Ad("cross-ref-callers", o, t));
  }, [t, s]);
}
function xS(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([me, Me, Qt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => AS(s));
    return Ve(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Me, (s) => _S(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(me, CS),
      e.registerNodeTransform(Be, SS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Qt, vS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Qt, (s, { prevEditorState: o }) => MS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(Ft, () => ES(e, t, r, n), _t),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function _S(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => gt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    S(i) && !N(i) && i.getTextContent() !== At(e.getCaller()) && e.insertBefore(i);
  }
}
function CS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((s) => gt(s));
  if (!U(e) || !K(t) || !n)
    return;
  const i = tl(r);
  n.getPreviewText() !== i && n.setPreviewText(i), cg(e);
}
function ag(e) {
  const t = q();
  if (!A(t))
    return !1;
  const r = e.getKey();
  return t.anchor.key === r || t.focus.key === r;
}
function cg(e) {
  const t = e.getNextSibling();
  if (S(t) && !N(t)) {
    if (t.getTextContent() === D || ag(t))
      return;
    if (Lr(t)) {
      t.setTextContent(D);
      return;
    }
  }
  e.insertAfter(Ms());
}
function SS(e) {
  const t = er(e), r = t?.getChildren(), n = r?.find((a) => gt(a));
  if (!S(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent(), s = Lr(e) || ag(e);
  if (!N(e) && K(i) && s && e.getTextContent() !== D && (e.setTextContent(D), e.selectEnd()), U(i) && i.getChildrenSize() === 1) {
    const a = e.getTextContent();
    a.length > 1 && a.startsWith(zt) && (e.setTextContent(a.slice(1)), e.selectEnd());
  }
  const o = tl(r);
  n.getPreviewText() !== o && n.setPreviewText(o);
}
function vS(e) {
  gt(e) && cg(e);
}
function MS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return gt(o) && K(a) && a.getCaller() === es;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function ES(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = q();
  if (!A(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Ze(o, (c) => K(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = se(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Li(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Li(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Li(e, c, n);
    } else if (!a) {
      const c = Ze(o, (l) => K(l));
      if (c && c.getIsCollapsed() && Se(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Li(e, l, n);
      }
    }
  }
  if (Se(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (jn(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Li(e, l, n);
    }
  }
  return !1;
}
function Li(e, t, r) {
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
function AS(e) {
  const t = q();
  if (!A(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && S(s)) {
    e.preventDefault();
    const o = Eo();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Pn(o);
  }
}
function Ad(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (PS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function PS(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Mi(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!N(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Pr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => S(n) && n.getMode() === "token") ? t : [];
}
function NS(e) {
  const t = e.getParent();
  if (K(t))
    return Mi(t).some((r) => r.is(e)) ? t : void 0;
}
function ps(e) {
  const t = Mi(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function OS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function wS(e) {
  const t = Vy();
  if (!A(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ps(e);
  const i = OS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ps(e);
}
function Bi(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = NS(t);
  if (r)
    return lg(r, t, e.offset) ? void 0 : r;
}
function lg(e, t, r) {
  const n = Mi(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function qS(e) {
  const t = Mi(e), r = t[t.length - 1];
  S(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : tr(e, ps(e));
}
function RS(e = !1) {
  const t = q();
  if (!A(t))
    return !1;
  if (!t.isCollapsed())
    return IS(t);
  const r = Bi(t.anchor);
  if (!r)
    return !1;
  if (!e && wS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    tr(n, r.getIndexWithinParent());
  } else
    qS(r);
  return !0;
}
function Pd(e) {
  const t = Mi(e), r = t[t.length - 1];
  return S(r) ? vn(r.getKey(), r.getTextContentSize(), "text") : vn(e.getKey(), ps(e), "element");
}
function ug(e) {
  const t = e.getLastChild();
  return N(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker() ? e.getChildrenSize() - 1 : e.getChildrenSize();
}
function wa(e, t) {
  if (t.type !== "text")
    return !1;
  const r = t.getNode();
  return e.is(r.getParent()) && r.getIndexWithinParent() === ug(e) && N(r) && t.offset > 0;
}
function $S(e) {
  const t = [], r = (n) => {
    const i = K(n) ? n : Ze(n, K);
    !K(i) || t.some((s) => s.is(i)) || Mi(i).length > 0 && t.push(i);
  };
  return r(e.anchor.getNode()), r(e.focus.getNode()), e.getNodes().forEach(r), t;
}
function IS(e) {
  const t = $S(e);
  if (t.length === 0)
    return !1;
  const r = e.isBackward(), n = (l) => vn(l.key, l.offset, l.type);
  let i = n(r ? e.focus : e.anchor), s = n(r ? e.anchor : e.focus), o = !1;
  for (const l of t) {
    const u = vn(l.getKey(), ps(l), "element"), d = vn(l.getKey(), ug(l), "element"), f = i.type === "text" && lg(l, i.getNode(), i.offset), p = i.isBefore(u) && !f;
    (Bi(i) || wa(l, i) || p) && (!s.isBefore(u) || Bi(s)) && (i = wa(l, i) ? d : Pd(l), o = !0), (Bi(s) || wa(l, s) || d.isBefore(s)) && (i.isBefore(d) || i.is(d)) && (s = Bi(s) ? Pd(l) : d, o = !0);
  }
  if (!o)
    return !1;
  i.isBefore(s) || (s = i);
  const [a, c] = r ? [s, i] : [i, s];
  return e.anchor.set(a.key, a.offset, a.type), e.focus.set(c.key, c.offset, c.type), !0;
}
function LS() {
  const [e] = ae(), t = Z(!1);
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
  }, [e]), j(() => e.registerCommand(Ft, () => (RS(t.current) && (qt(Dt), Zr(e, Dt)), !1), En), [e]), null;
}
function DS({ onChange: e }) {
  const [t] = ae();
  return j(() => t.registerCommand(Ft, () => {
    const r = xl();
    return e?.(r), !1;
  }, _t), [t, e]), null;
}
function US() {
  const [e] = ae();
  return FS(e), null;
}
function FS(e) {
  j(() => {
    if (!e.hasNodes([nt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(nt, (t) => zS(t, e));
  }, [e]);
}
function zS(e, t) {
  cc(t, e.getKey()) && Ah(e.getFirstChild()), !(!ce(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return ce(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function dg({ onStateChange: e }) {
  const [t] = ae(), [r, n] = de(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = he(() => {
    const l = q();
    let u;
    if (A(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : Ze(d, (T) => {
        const C = T.getParent();
        return C !== null && Wy(C);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), us(p) && (p = Ze(d, ce) ?? p);
      const m = p.getKey(), g = r.getElementByKey(m), y = zk(d, f);
      if (y && qx(y) && (u = y.getMarker()), g !== null && (ce(p) || ht(p) || _s(p))) {
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
  return j(() => t.registerCommand(Ft, (l, u) => (c(), n(u), !1), Yt), [t, c]), j(() => Ve(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Hy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Yt), r.registerCommand(Gy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Yt)), [c, r, e]), null;
}
function fg(e) {
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
  return e ? Se(e) ? e : Ze(e, (r) => Se(r)) ?? void 0 : void 0;
}
function pg(e) {
  if (!A(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = on(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Ul(e) {
  return A(e) && e.isCollapsed() && e.anchor.type === "element" || !A(e) && !Dc(e) ? !1 : e.getNodes().some((t) => ge(t));
}
function hg(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = on(r);
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
function gg(e) {
  if (!A(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = on(r);
  if (!n)
    return !1;
  if (F(r)) {
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
function Nd(e, t) {
  return !!hc(e, t);
}
function hc(e, t) {
  if (!A(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && F(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return ge(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return ge(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return ge(i) ? i : void 0;
}
function go(e, t) {
  if (!A(e))
    return !1;
  const r = on(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function li(e) {
  return Ul(e) || pg(e);
}
function mg(e, t) {
  if (Ul(e) || pg(e))
    return !0;
  if (!A(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return hg(e) && go(e, "backward") || Nd(e, "backward");
    case "deleteForward":
      return gg(e) && go(e, "forward") || Nd(e, "forward");
    case "insertText":
      return !1;
  }
}
function KS(e, t) {
  if (!(!A(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = hc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (hg(e) && go(e, "backward")) {
        const n = on(e.anchor.getNode());
        if (Se(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = hc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (gg(e) && go(e, "forward")) {
        const i = on(e.anchor.getNode())?.getNextSibling();
        if (Se(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Od(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Dc(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!A(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!A(e) || e.isCollapsed())
    return !1;
  const r = on(e.anchor.getNode()), n = on(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function yg(e) {
  if (S(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else F(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function jS(e) {
  const t = e.getPreviousSibling();
  if (!Se(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? yg(r) : vi(t) || t.selectStart();
}
function bg(e) {
  return ge(e) || Je(e) ? [] : Se(e) ? e.getChildren().flatMap(bg) : [e];
}
function BS(e) {
  const t = [];
  for (const r of e) {
    const n = bg(r);
    n.length !== 0 && (Se(r) && t.length > 0 && t.push(ye(" ")), t.push(...n));
  }
  return t;
}
function wd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function VS(e) {
  if (Array.isArray(e)) return e;
}
function WS(e, t) {
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
function HS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GS(e, t) {
  return VS(e) || WS(e, t) || JS(e, t) || HS();
}
function JS(e, t) {
  if (e) {
    if (typeof e == "string") return wd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? wd(e, t) : void 0;
  }
}
const kg = Object.entries, qd = Object.setPrototypeOf, YS = Object.isFrozen, XS = Object.getPrototypeOf, QS = Object.getOwnPropertyDescriptor;
let it = Object.freeze, ot = Object.seal, ii = Object.create, Tg = typeof Reflect < "u" && Reflect, gc = Tg.apply, mc = Tg.construct;
it || (it = function(t) {
  return t;
});
ot || (ot = function(t) {
  return t;
});
gc || (gc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
mc || (mc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const ti = Xe(Array.prototype.forEach), ZS = Xe(Array.prototype.lastIndexOf), Rd = Xe(Array.prototype.pop), ri = Xe(Array.prototype.push), ev = Xe(Array.prototype.splice), Xr = Array.isArray, Vi = Xe(String.prototype.toLowerCase), qa = Xe(String.prototype.toString), $d = Xe(String.prototype.match), Di = Xe(String.prototype.replace), Id = Xe(String.prototype.indexOf), tv = Xe(String.prototype.trim), rv = Xe(Number.prototype.toString), nv = Xe(Boolean.prototype.toString), Ld = typeof BigInt > "u" ? null : Xe(BigInt.prototype.toString), Dd = typeof Symbol > "u" ? null : Xe(Symbol.prototype.toString), tt = Xe(Object.prototype.hasOwnProperty), Ui = Xe(Object.prototype.toString), et = Xe(RegExp.prototype.test), xn = iv(TypeError);
function Xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return gc(e, t, n);
  };
}
function iv(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return mc(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Vi;
  if (qd && qd(e, null), !Xr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (YS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function sv(e) {
  for (let t = 0; t < e.length; t++)
    tt(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = ii(null);
  for (const n of kg(e)) {
    var r = GS(n, 2);
    const i = r[0], s = r[1];
    tt(e, i) && (Xr(s) ? t[i] = sv(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function ov(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return rv(e);
    case "boolean":
      return nv(e);
    case "bigint":
      return Ld ? Ld(e) : "0";
    case "symbol":
      return Dd ? Dd(e) : "Symbol()";
    case "undefined":
      return Ui(e);
    case "function":
    case "object": {
      if (e === null)
        return Ui(e);
      const t = e, r = Ht(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Ui(n);
      }
      return Ui(e);
    }
    default:
      return Ui(e);
  }
}
function Ht(e, t) {
  for (; e !== null; ) {
    const n = QS(e, t);
    if (n) {
      if (n.get)
        return Xe(n.get);
      if (typeof n.value == "function")
        return Xe(n.value);
    }
    e = XS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function av(e) {
  try {
    return et(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ud = it(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ra = it(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), $a = it(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), cv = it(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ia = it(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), lv = it(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Fd = it(["#text"]), zd = it(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), La = it(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Kd = it(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Us = it(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), uv = ot(/{{[\w\W]*|^[\w\W]*}}/g), dv = ot(/<%[\w\W]*|^[\w\W]*%>/g), fv = ot(/\${[\w\W]*/g), pv = ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), hv = ot(/^aria-[\-\w]+$/), jd = ot(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), gv = ot(/^(?:\w+script|data):/i), mv = ot(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), yv = ot(/^html$/i), bv = ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Bd = ot(/<[/\w!]/g), Vd = ot(/<[/\w]/g), kv = ot(/<\/no(script|embed|frames)/i), Tv = ot(/\/>/i), Mt = {
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
}, xv = function() {
  return typeof window > "u" ? null : window;
}, _v = function(t, r) {
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
}, Wd = function() {
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
  return tt(t, r) && Xr(t[r]) ? pe(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function xg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xv();
  const t = (z) => xg(z);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Mt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Ht(f, "cloneNode"), m = Ht(f, "remove"), g = Ht(f, "nextSibling"), y = Ht(f, "childNodes"), T = Ht(f, "parentNode"), C = Ht(f, "shadowRoot"), M = Ht(f, "attributes"), O = o && o.prototype ? Ht(o.prototype, "nodeType") : null, v = o && o.prototype ? Ht(o.prototype, "nodeName") : null, B = o && o.prototype ? Ht(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const z = r.createElement("template");
    z.content && z.content.ownerDocument && (r = z.content.ownerDocument);
  }
  let E, R = "", $, re = !1, H = 0;
  const Pe = function() {
    if (H > 0)
      throw xn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ee = function(h) {
    Pe(), H++;
    try {
      return E.createHTML(h);
    } finally {
      H--;
    }
  }, $e = function(h) {
    Pe(), H++;
    try {
      return E.createScriptURL(h);
    } finally {
      H--;
    }
  }, be = function() {
    return re || ($ = _v(d, i), re = !0), $;
  }, ir = r, Ke = ir.implementation, zr = ir.createNodeIterator, Kr = ir.createDocumentFragment, dn = ir.getElementsByTagName, X = n.importNode;
  let P = Wd();
  t.isSupported = typeof kg == "function" && typeof T == "function" && Ke && Ke.createHTMLDocument !== void 0;
  const G = uv, ue = dv, Ee = fv, Q = pv, ve = hv, kr = gv, Ot = mv, fn = bv;
  let He = jd, le = null;
  const mt = pe({}, [...Ud, ...Ra, ...$a, ...Ia, ...Fd]);
  let _e = null;
  const Tr = pe({}, [...zd, ...La, ...Kd, ...Us]);
  let Ne = Object.seal(ii(null, {
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
  })), xr = null, Pi = null;
  const yt = Object.seal(ii(null, {
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
  let pn = !0, Ni = !0, jr = !1, Vn = !0, Vt = !1, sr = !0, or = !1, w = !1, L = null, V = null, J = !1, fe = !1, ke = !1, at = !1, Wt = !0, hn = !1;
  const uu = "user-content-";
  let ea = !0, Os = !1, Wn = {}, ar = null;
  const ta = pe({}, [
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
  let du = null;
  const fu = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let ra = null;
  const pu = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ws = "http://www.w3.org/1998/Math/MathML", qs = "http://www.w3.org/2000/svg", cr = "http://www.w3.org/1999/xhtml";
  let Hn = cr, na = !1, ia = null;
  const oy = pe({}, [ws, qs, cr], qa), hu = it(["mi", "mo", "mn", "ms", "mtext"]);
  let sa = pe({}, hu);
  const gu = it(["annotation-xml"]);
  let oa = pe({}, gu);
  const ay = pe({}, ["title", "style", "font", "a", "script"]);
  let Oi = null;
  const cy = ["application/xhtml+xml", "text/html"], ly = "text/html";
  let Ie = null, Gn = null;
  const uy = r.createElement("form"), mu = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, aa = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Gn && Gn === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = ct(h), Oi = // eslint-disable-next-line unicorn/prefer-includes
    cy.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? ly : h.PARSER_MEDIA_TYPE, Ie = Oi === "application/xhtml+xml" ? qa : Vi, le = Hr(h, "ALLOWED_TAGS", mt, {
      transform: Ie
    }), _e = Hr(h, "ALLOWED_ATTR", Tr, {
      transform: Ie
    }), ia = Hr(h, "ALLOWED_NAMESPACES", oy, {
      transform: qa
    }), ra = Hr(h, "ADD_URI_SAFE_ATTR", pu, {
      transform: Ie,
      base: pu
    }), du = Hr(h, "ADD_DATA_URI_TAGS", fu, {
      transform: Ie,
      base: fu
    }), ar = Hr(h, "FORBID_CONTENTS", ta, {
      transform: Ie
    }), xr = Hr(h, "FORBID_TAGS", ct({}), {
      transform: Ie
    }), Pi = Hr(h, "FORBID_ATTR", ct({}), {
      transform: Ie
    }), Wn = tt(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? ct(h.USE_PROFILES) : h.USE_PROFILES : !1, pn = h.ALLOW_ARIA_ATTR !== !1, Ni = h.ALLOW_DATA_ATTR !== !1, jr = h.ALLOW_UNKNOWN_PROTOCOLS || !1, Vn = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Vt = h.SAFE_FOR_TEMPLATES || !1, sr = h.SAFE_FOR_XML !== !1, or = h.WHOLE_DOCUMENT || !1, fe = h.RETURN_DOM || !1, ke = h.RETURN_DOM_FRAGMENT || !1, at = h.RETURN_TRUSTED_TYPE || !1, J = h.FORCE_BODY || !1, Wt = h.SANITIZE_DOM !== !1, hn = h.SANITIZE_NAMED_PROPS || !1, ea = h.KEEP_CONTENT !== !1, Os = h.IN_PLACE || !1, He = av(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : jd, Hn = typeof h.NAMESPACE == "string" ? h.NAMESPACE : cr, sa = tt(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(h.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, hu), oa = tt(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? ct(h.HTML_INTEGRATION_POINTS) : pe({}, gu);
    const x = tt(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? ct(h.CUSTOM_ELEMENT_HANDLING) : ii(null);
    if (Ne = ii(null), tt(x, "tagNameCheck") && mu(x.tagNameCheck) && (Ne.tagNameCheck = x.tagNameCheck), tt(x, "attributeNameCheck") && mu(x.attributeNameCheck) && (Ne.attributeNameCheck = x.attributeNameCheck), tt(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (Ne.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), ot(Ne), Vt && (Ni = !1), ke && (fe = !0), Wn && (le = pe({}, Fd), _e = ii(null), Wn.html === !0 && (pe(le, Ud), pe(_e, zd)), Wn.svg === !0 && (pe(le, Ra), pe(_e, La), pe(_e, Us)), Wn.svgFilters === !0 && (pe(le, $a), pe(_e, La), pe(_e, Us)), Wn.mathMl === !0 && (pe(le, Ia), pe(_e, Kd), pe(_e, Us))), yt.tagCheck = null, yt.attributeCheck = null, tt(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? yt.tagCheck = h.ADD_TAGS : Xr(h.ADD_TAGS) && (le === mt && (le = ct(le)), pe(le, h.ADD_TAGS, Ie))), tt(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? yt.attributeCheck = h.ADD_ATTR : Xr(h.ADD_ATTR) && (_e === Tr && (_e = ct(_e)), pe(_e, h.ADD_ATTR, Ie))), tt(h, "ADD_URI_SAFE_ATTR") && Xr(h.ADD_URI_SAFE_ATTR) && pe(ra, h.ADD_URI_SAFE_ATTR, Ie), tt(h, "FORBID_CONTENTS") && Xr(h.FORBID_CONTENTS) && (ar === ta && (ar = ct(ar)), pe(ar, h.FORBID_CONTENTS, Ie)), tt(h, "ADD_FORBID_CONTENTS") && Xr(h.ADD_FORBID_CONTENTS) && (ar === ta && (ar = ct(ar)), pe(ar, h.ADD_FORBID_CONTENTS, Ie)), ea && (le["#text"] = !0), or && pe(le, ["html", "head", "body"]), le.table && (pe(le, ["tbody"]), delete xr.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw xn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw xn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = E;
      E = h.TRUSTED_TYPES_POLICY;
      try {
        R = ee("");
      } catch (W) {
        throw E = I, W;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (E = void 0, R = "") : (E === void 0 && (E = be()), E && typeof R == "string" && (R = ee("")));
    it && it(h), Gn = h;
  }, yu = pe({}, [...Ra, ...$a, ...cv]), bu = pe({}, [...Ia, ...lv]), dy = function(h, x, I) {
    return x.namespaceURI === cr ? h === "svg" : x.namespaceURI === ws ? h === "svg" && (I === "annotation-xml" || sa[I]) : !!yu[h];
  }, fy = function(h, x, I) {
    return x.namespaceURI === cr ? h === "math" : x.namespaceURI === qs ? h === "math" && oa[I] : !!bu[h];
  }, py = function(h, x, I) {
    return x.namespaceURI === qs && !oa[I] || x.namespaceURI === ws && !sa[I] ? !1 : !bu[h] && (ay[h] || !yu[h]);
  }, hy = function(h) {
    let x = T(h);
    (!x || !x.tagName) && (x = {
      namespaceURI: Hn,
      tagName: "template"
    });
    const I = Vi(h.tagName), W = Vi(x.tagName);
    return ia[h.namespaceURI] ? h.namespaceURI === qs ? dy(I, x, W) : h.namespaceURI === ws ? fy(I, x, W) : h.namespaceURI === cr ? py(I, x, W) : !!(Oi === "application/xhtml+xml" && ia[h.namespaceURI]) : !1;
  }, Br = function(h) {
    ri(t.removed, {
      element: h
    });
    try {
      T(h).removeChild(h);
    } catch {
      if (m(h), !T(h))
        throw xn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Rs = function(h) {
    wi(h);
    const x = y(h);
    if (x) {
      const W = [];
      ti(x, (Y) => {
        ri(W, Y);
      }), ti(W, (Y) => {
        try {
          m(Y);
        } catch {
        }
      });
    }
    const I = M(h);
    if (I)
      for (let W = I.length - 1; W >= 0; --W) {
        const Y = I[W], ie = Y && Y.name;
        if (typeof ie == "string")
          try {
            h.removeAttribute(ie);
          } catch {
          }
      }
  }, gn = function(h, x) {
    try {
      ri(t.removed, {
        attribute: x.getAttributeNode(h),
        from: x
      });
    } catch {
      ri(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(h), h === "is")
      if (fe || ke)
        try {
          Br(x);
        } catch {
        }
      else
        try {
          x.setAttribute(h, "");
        } catch {
        }
  }, gy = function(h) {
    const x = M(h);
    if (x)
      for (let I = x.length - 1; I >= 0; --I) {
        const W = x[I], Y = W && W.name;
        if (!(typeof Y != "string" || _e[Ie(Y)]))
          try {
            h.removeAttribute(Y);
          } catch {
          }
      }
  }, wi = function(h) {
    const x = [h];
    for (; x.length > 0; ) {
      const I = x.pop();
      (O ? O(I) : I.nodeType) === Mt.element && gy(I);
      const Y = y(I);
      if (Y)
        for (let ie = Y.length - 1; ie >= 0; --ie)
          x.push(Y[ie]);
    }
  }, my = function(h) {
    if (!sr)
      return;
    const x = [h];
    for (; x.length > 0; ) {
      const I = x.pop(), W = O ? O(I) : I.nodeType;
      if (W === Mt.processingInstruction || W === Mt.comment && et(Vd, I.data)) {
        try {
          m(I);
        } catch {
        }
        continue;
      }
      if (W === Mt.element) {
        const ie = I, Te = Ie(v ? v(I) : I.nodeName);
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && Te !== "label" && Te !== "output" && ie.removeAttribute("for");
        } catch {
        }
      }
      const Y = y(I);
      if (Y)
        for (let ie = Y.length - 1; ie >= 0; --ie)
          x.push(Y[ie]);
    }
  }, ku = function(h) {
    let x = null, I = null;
    if (J)
      h = "<remove></remove>" + h;
    else {
      const ie = $d(h, /^[\r\n\t ]+/);
      I = ie && ie[0];
    }
    Oi === "application/xhtml+xml" && Hn === cr && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const W = E ? ee(h) : h;
    if (Hn === cr)
      try {
        x = new u().parseFromString(W, Oi);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = Ke.createDocument(Hn, "template", null);
      try {
        x.documentElement.innerHTML = na ? R : W;
      } catch {
      }
    }
    const Y = x.body || x.documentElement;
    return h && I && Y.insertBefore(r.createTextNode(I), Y.childNodes[0] || null), Hn === cr ? dn.call(x, or ? "html" : "body")[0] : or ? x.documentElement : Y;
  }, Tu = function(h) {
    const x = B ? B(h) : h.ownerDocument;
    return zr.call(
      x || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, $s = function(h) {
    return h = Di(h, G, " "), h = Di(h, ue, " "), h = Di(h, Ee, " "), h;
  }, ca = function(h) {
    var x;
    h.normalize();
    const I = B ? B(h) : h.ownerDocument, W = zr.call(
      I || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = W.nextNode();
    for (; Y; )
      Y.data = $s(Y.data), Y = W.nextNode();
    const ie = (x = h.querySelectorAll) === null || x === void 0 ? void 0 : x.call(h, "template");
    ie && ti(ie, (Te) => {
      Jn(Te.content) && ca(Te.content);
    });
  }, Is = function(h) {
    const x = v ? v(h) : null;
    return typeof x != "string" || Ie(x) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    h.attributes !== M(h) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    h.nodeType !== O(h) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    h.childNodes !== y(h);
  }, Jn = function(h) {
    if (!O || typeof h != "object" || h === null)
      return !1;
    try {
      return O(h) === Mt.documentFragment;
    } catch {
      return !1;
    }
  }, qi = function(h) {
    if (!O || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof O(h) == "number";
    } catch {
      return !1;
    }
  };
  function lr(z, h, x) {
    z.length !== 0 && ti(z, (I) => {
      I.call(t, h, x, Gn);
    });
  }
  const yy = function(h, x) {
    return !!(sr && h.hasChildNodes() && !qi(h.firstElementChild) && et(Bd, h.textContent) && et(Bd, h.innerHTML) || sr && h.namespaceURI === cr && x === "style" && qi(h.firstElementChild) || h.nodeType === Mt.processingInstruction || sr && h.nodeType === Mt.comment && et(Vd, h.data));
  }, by = function(h, x, I) {
    if (!xr[x] && Su(x) && (Ne.tagNameCheck instanceof RegExp && et(Ne.tagNameCheck, x) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(x)))
      return !1;
    if (ea && !ar[x]) {
      const W = T(h), Y = y(h);
      if (Y && W) {
        const ie = Y.length;
        for (let Te = ie - 1; Te >= 0; --Te) {
          const Le = h === I ? p(Y[Te], !0) : Y[Te];
          W.insertBefore(Le, g(h));
        }
      }
    }
    return Br(h), !0;
  }, xu = function(h, x, I, W) {
    return h.length === 0 ? x : x === I || x === W ? ct(x) : x;
  }, _u = function(h, x) {
    if (lr(P.beforeSanitizeElements, h, null), h !== x && T(h) === null)
      return Os && wi(h), !0;
    if (Is(h))
      return Br(h), !0;
    const I = Ie(v ? v(h) : h.nodeName);
    if (le = xu(P.uponSanitizeElement, le, mt, L), lr(P.uponSanitizeElement, h, {
      tagName: I,
      allowedTags: le
    }), h !== x && T(h) === null)
      return Os && wi(h), !0;
    if (yy(h, I))
      return Br(h), !0;
    if (xr[I] || !(yt.tagCheck instanceof Function && yt.tagCheck(I)) && !le[I]) {
      const Y = by(h, I, x);
      return Y === !1 && lr(P.afterSanitizeElements, h, null), Y;
    }
    if ((O ? O(h) : h.nodeType) === Mt.element && !hy(h) || (I === "noscript" || I === "noembed" || I === "noframes") && et(kv, h.innerHTML))
      return Br(h), !0;
    if (Vt && h.nodeType === Mt.text) {
      const Y = $s(h.textContent);
      h.textContent !== Y && (ri(t.removed, {
        element: h.cloneNode()
      }), h.textContent = Y);
    }
    return lr(P.afterSanitizeElements, h, null), !1;
  }, Cu = function(h, x, I) {
    if (Pi[x] || sr && x === "patchsrc" || sr && x === "for" && h !== "label" && h !== "output" || Wt && (x === "id" || x === "name") && (I in r || I in uy))
      return !1;
    const W = _e[x] || yt.attributeCheck instanceof Function && yt.attributeCheck(x, h);
    if (!(Ni && et(Q, x))) {
      if (!(pn && et(ve, x))) {
        if (W) {
          if (!ra[x]) {
            if (!et(He, Di(I, Ot, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && h !== "script" && Id(I, "data:") === 0 && du[h])) {
                if (!(jr && !et(kr, Di(I, Ot, "")))) {
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
          !(Su(h) && (Ne.tagNameCheck instanceof RegExp && et(Ne.tagNameCheck, h) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(h)) && (Ne.attributeNameCheck instanceof RegExp && et(Ne.attributeNameCheck, x) || Ne.attributeNameCheck instanceof Function && Ne.attributeNameCheck(x, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && Ne.allowCustomizedBuiltInElements && (Ne.tagNameCheck instanceof RegExp && et(Ne.tagNameCheck, I) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, ky = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Su = function(h) {
    return !ky[Vi(h)] && et(fn, h);
  }, Ty = function(h, x, I, W) {
    if (E && typeof d == "object" && typeof d.getAttributeType == "function" && !I)
      switch (d.getAttributeType(h, x)) {
        case "TrustedHTML":
          return ee(W);
        case "TrustedScriptURL":
          return $e(W);
      }
    return W;
  }, xy = function(h, x, I, W) {
    try {
      I ? h.setAttributeNS(I, x, W) : h.setAttribute(x, W), Is(h) ? Br(h) : Rd(t.removed);
    } catch {
      gn(x, h);
    }
  }, vu = function(h) {
    lr(P.beforeSanitizeAttributes, h, null);
    const x = h.attributes;
    if (!x || Is(h))
      return;
    _e = xu(P.uponSanitizeAttribute, _e, Tr, V);
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _e,
      forceKeepAttr: void 0
    };
    let W = x.length;
    const Y = Ie(h.nodeName);
    for (; W--; ) {
      const ie = x[W], Te = ie.name, Le = ie.namespaceURI, bt = ie.value, kt = Ie(Te), ua = bt;
      let dt = Te === "value" ? ua : tv(ua);
      if (I.attrName = kt, I.attrValue = dt, I.keepAttr = !0, I.forceKeepAttr = void 0, lr(P.uponSanitizeAttribute, h, I), dt = I.attrValue, hn && (kt === "id" || kt === "name") && Id(dt, uu) !== 0 && (gn(Te, h), dt = uu + dt), sr && et(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        gn(Te, h);
        continue;
      }
      if (kt === "attributename" && $d(dt, "href")) {
        gn(Te, h);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          gn(Te, h);
          continue;
        }
        if (!Vn && et(Tv, dt)) {
          gn(Te, h);
          continue;
        }
        if (Vt && (dt = $s(dt)), !Cu(Y, kt, dt)) {
          gn(Te, h);
          continue;
        }
        dt = Ty(Y, kt, Le, dt), dt !== ua && xy(h, Te, Le, dt);
      }
    }
    lr(P.afterSanitizeAttributes, h, null);
  }, Ls = function(h) {
    let x = null;
    const I = Tu(h);
    for (lr(P.beforeSanitizeShadowDOM, h, null); x = I.nextNode(); )
      if (lr(P.uponSanitizeShadowNode, x, null), _u(x, h), vu(x), Jn(x.content) && Ls(x.content), (O ? O(x) : x.nodeType) === Mt.element) {
        const Y = C(x);
        Jn(Y) && (la(Y), Ls(Y));
      }
    lr(P.afterSanitizeShadowDOM, h, null);
  }, la = function(h) {
    const x = [{
      node: h,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const I = x.pop();
      if (I.shadow) {
        Ls(I.shadow);
        continue;
      }
      const W = I.node, ie = (O ? O(W) : W.nodeType) === Mt.element, Te = y(W);
      if (Te)
        for (let Le = Te.length - 1; Le >= 0; --Le)
          x.push({
            node: Te[Le],
            shadow: null
          });
      if (ie) {
        const Le = v ? v(W) : null;
        if (typeof Le == "string" && Ie(Le) === "template") {
          const bt = W.content;
          Jn(bt) && x.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (ie) {
        const Le = C(W);
        Jn(Le) && x.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(z) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, I = null, W = null, Y = null;
    if (na = !z, na && (z = "<!-->"), typeof z != "string" && !qi(z) && (z = ov(z), typeof z != "string"))
      throw xn("dirty is not a string, aborting");
    if (!t.isSupported)
      return z;
    w ? (le = L, _e = V) : aa(h), (P.uponSanitizeElement.length > 0 || P.uponSanitizeAttribute.length > 0) && (le = ct(le)), P.uponSanitizeAttribute.length > 0 && (_e = ct(_e)), t.removed = [];
    const ie = Os && typeof z != "string" && qi(z);
    if (ie) {
      my(z);
      const bt = v ? v(z) : z.nodeName;
      if (typeof bt == "string") {
        const kt = Ie(bt);
        if (!le[kt] || xr[kt])
          throw Rs(z), xn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Is(z))
        throw Rs(z), xn("root node is clobbered and cannot be sanitized in-place");
      try {
        la(z);
      } catch (kt) {
        throw Rs(z), kt;
      }
    } else if (qi(z))
      x = ku("<!---->"), I = x.ownerDocument.importNode(z, !0), I.nodeType === Mt.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? x = I : x.appendChild(I), la(I);
    else {
      if (!fe && !Vt && !or && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return E && at ? ee(z) : z;
      if (x = ku(z), !x)
        return fe ? null : at ? R : "";
    }
    x && J && Br(x.firstChild);
    const Te = ie ? z : x;
    try {
      const bt = Tu(Te);
      for (; W = bt.nextNode(); )
        _u(W, Te), vu(W), Jn(W.content) && Ls(W.content);
    } catch (bt) {
      throw ie && (Rs(z), ti(t.removed, (kt) => {
        kt.element && wi(kt.element);
      })), bt;
    }
    if (ie)
      return ti(t.removed, (bt) => {
        bt.element && wi(bt.element);
      }), Vt && ca(z), z;
    if (fe) {
      if (Vt && ca(x), ke)
        for (Y = Kr.call(x.ownerDocument); x.firstChild; )
          Y.appendChild(x.firstChild);
      else
        Y = x;
      return (_e.shadowroot || _e.shadowrootmode) && (Y = X.call(n, Y, !0)), Y;
    }
    let Le = or ? x.outerHTML : x.innerHTML;
    return or && le["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && et(yv, x.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Le), Vt && (Le = $s(Le)), E && at ? ee(Le) : Le;
  }, t.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    aa(z), w = !0, L = le, V = _e;
  }, t.clearConfig = function() {
    Gn = null, w = !1, L = null, V = null, E = $, R = "";
  }, t.isValidAttribute = function(z, h, x) {
    Gn || aa({});
    const I = Ie(z), W = Ie(h);
    return Cu(I, W, x);
  }, t.addHook = function(z, h) {
    typeof h == "function" && tt(P, z) && ri(P[z], h);
  }, t.removeHook = function(z, h) {
    if (tt(P, z)) {
      if (h !== void 0) {
        const x = ZS(P[z], h);
        return x === -1 ? void 0 : ev(P[z], x, 1)[0];
      }
      return Rd(P[z]);
    }
  }, t.removeHooks = function(z) {
    tt(P, z) && (P[z] = []);
  }, t.removeAllHooks = function() {
    P = Wd();
  }, t;
}
var Cv = xg();
function Sv({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = Z(void 0), [n, i] = de(void 0), s = he((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = fg(p);
      if (!m)
        return !1;
      const g = q();
      return e === "protected" ? g && mg(g, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const g = q(), y = r.current;
      if (y && g && Od(g, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const C = se(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (C) {
            const M = C.getParent(), O = C.getPreviousSibling(), v = C.getNextSibling();
            C.remove(), O ? yg(O) : v && S(v) ? v.select(0, 0) : M?.selectStart();
          }
        } else y.kind === "selection" ? A(g) && g.removeText() : Se(C) && jS(C);
        return !0;
      }
      if (!g)
        return !1;
      const T = KS(g, p);
      if (T) {
        if (T.kind === "verse") {
          const C = Ff();
          C.add(T.node.getKey()), Pn(C);
        } else {
          const C = Eo();
          C.anchor.set(T.node.getKey(), 0, "element"), C.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), Pn(C);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: p }), m.preventDefault(), !0;
      }
      if (A(g) && !g.isCollapsed() && Ul(g)) {
        const C = g.getNodes().filter(ge).map((v) => v.getKey()), { anchor: M, focus: O } = g;
        return s({
          kind: "selection",
          intent: p,
          key: C[0],
          anchor: { key: M.key, offset: M.offset, type: M.type },
          focus: { key: O.key, offset: O.offset, type: O.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = q();
      return !m || !li(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const g = Cv.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), T = BS(mb(t, y)), C = q();
      return A(C) && C.insertNodes(T), m.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = q();
      return m && li(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = q();
      return m && li(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Od(q(), p) || s(void 0);
      });
    };
    return Ve(
      t.registerCommand(qr, o, we),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(An, c, Yt),
      t.registerCommand(Sr, u, we),
      t.registerCommand(Jy, c, we),
      t.registerCommand(Kc, d, we),
      t.registerCommand(zc, c, we),
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
const oN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function vv({ textDirection: e }) {
  const [t] = ae();
  return Mv(t, e), null;
}
function Mv(e, t) {
  j(() => (Hd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Hd(e, t);
  })), [e, t]);
}
function Hd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function Ev() {
  const [e] = ae();
  return Av(e), null;
}
function Av(e) {
  j(() => {
    if (!e.hasNodes([me, vt, Me, Be, ft]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ve(
      e.registerNodeTransform(Be, Pv),
      e.registerNodeTransform(Be, (t) => Nv(t, e)),
      e.registerNodeTransform(ft, Gd),
      e.registerNodeTransform(vt, Gd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ft, (t) => {
        ls(qn("va"), t), ls(qn("vp"), t);
      })
    );
  }, [e]);
}
function Pv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || K(r) || U(n) || U(r) || Ce(n) || Ce(r) || Ue(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Ue(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ne(e, oe) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  De(n))
    return;
  if (ge(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ge(r) && gl(e);
}
function Nv(e, t) {
  const r = e.getParent();
  !Ue(r) || !e.isAttached() || cc(t, e.getKey()) && !cc(t, r.getKey()) && r.insertAfter(e);
}
function Gd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ce(t); )
    t = t.getLastChild();
  (U(t) || S(t) && Ce(t.getParent())) && e.insertBefore(ye(" "));
}
function Fl(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
    return;
  let t = e;
  for (; ; ) {
    if (t.getNextSiblings().some((i) => !Ss(i)))
      return;
    const n = t.getParent();
    if (!n)
      return;
    if (!F(n) || !n.isInline())
      return e;
    t = n;
  }
}
function Ov(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (F(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function wv() {
  const e = q();
  if (!(!A(e) || !e.isCollapsed()))
    return Fl(Ov(e.anchor));
}
function qv(e) {
  const t = q();
  let r;
  return A(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = _g(e.target)), r ? Fl(Ze(r, K)) : void 0;
}
function _g(e) {
  const t = Yy(e)?.anchorNode;
  if (Df(t))
    return bi(t) ?? void 0;
}
function Rv(e) {
  if (q())
    return;
  const t = _g(e);
  return t ? Fl(Ze(t, K)) : void 0;
}
function $v() {
  const [e] = ae(), t = Dl(wv);
  return j(() => {
    const r = (n) => {
      qt(Dt), Zr(e, Dt), t(n);
    };
    return Ve(e.registerCommand(Ft, () => {
      const n = Rv(e.getRootElement());
      return n && r(n), !1;
    }, En), e.registerCommand(Ao, (n) => {
      const i = qv(n);
      return i && r(i), !1;
    }, En));
  }, [e, t]), null;
}
function Iv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = X_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(Y_, { trigger: e, items: i });
}
function Lv({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = je(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(Fv, { trigger: e, harness: i }) : _(Iv, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const Dv = [" ", "*"];
function Uv(e, t) {
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
function Fv({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = de(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = he((f, p, m) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = q();
      A(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => Ve(r.registerCommand(qr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), Xy(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = q();
          A(y) && y.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const m = s.current.query;
      if (n.hasTextSelection) {
        const g = n.items.find((y) => y.marker === m);
        return g && t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
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
  }, we), r.registerCommand(zf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, oi)), [r, e, t, n, a]);
  const c = he(() => i(void 0), []), l = he((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = he((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), d = je(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    Uv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(Dh, { isOpen: !0, children: ({ placement: f }) => _(
    zh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? Dv : void 0 },
    n.session
  ) });
}
function Cg(e) {
  return e.replaceAll(D, "~").replace(/ {2,}/g, (r) => D.repeat(r.length));
}
function zv(e) {
  return e.replaceAll(D, " ").replaceAll("~", D);
}
function Kv(e) {
  return e.replace(/ {2,}/g, " ");
}
let mo;
function jv(e) {
  e && (mo = e);
}
function Sg(e) {
  return Ho(e);
}
function Bv(e, t) {
  return e.isEmpty() ? If : vg(e.toJSON(), t);
}
function vg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Ro(r[0]) && (!r[0].children || r[0].children.length === 0))
    return If;
  if (r.some(hx)) {
    mo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Mg(r), i = Gt(n, t);
  return i ? { type: Mr, version: vr, content: i } : void 0;
}
function Vv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Ae({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function Wv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ae({
    type: Nt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Hv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Up(r, a, c), Ae({
    type: Nt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Gv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Up(t, o, a), Ae({
    type: ft.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function Jv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Sg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(D) && (t[0] = a.slice(1));
  }
  return Ae({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function Yv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Xv(e, t) {
  const { unknownAttributes: r } = e;
  return Ae({ type: fh, ...r, content: t });
}
function Qv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ae({ type: gh, marker: r, ...n, content: t });
}
function Zv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ae({
    type: yh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function eM(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Ae({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function si(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ae({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Hp({ sid: n, eid: i, ...s }, o)
  });
}
function tM(e) {
  return e.text;
}
function rM(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ae({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function nM(e) {
  const { marker: t } = e;
  return {
    type: io,
    marker: t === "" ? void 0 : t
  };
}
function Jd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function iM(e, t, r, n, i) {
  const s = Zt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = si({
      type: s,
      marker: ai,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = si({
      type: s,
      marker: Nn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = si({
      type: s,
      marker: Nn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = si({
      type: s,
      marker: ai
    });
    i.push(l);
  }
  (!n || !gp(n)) && t.forEach((l) => {
    const u = si({
      type: s,
      marker: ai,
      eid: l
    });
    i.push(u);
  });
}
function Gt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, m = a, g = a, y = a;
    switch (a.type) {
      case jt.getType():
        i.push(
          Vv(
            l,
            Gt(l.children, t)
          )
        );
        break;
      case mr.getType():
        i.push(Wv(a));
        break;
      case Nt.getType():
        i.push(
          Hv(
            u,
            Gt(u.children, t)
          )
        );
        break;
      case vt.getType():
      case ft.getType():
        i.push(Gv(a));
        break;
      case me.getType():
        i.push(
          Jv(
            d,
            Gt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case nt.getType():
        i.push(
          Yv(
            f,
            Gt(f.children, t)
          )
        );
        break;
      case Kn.getType():
        i.push(
          Xv(
            a,
            Gt(a.children, t)
          )
        );
        break;
      case Ti.getType():
        i.push(
          Qv(
            a,
            Gt(a.children, t)
          )
        );
        break;
      case xi.getType():
        i.push(
          Zv(
            a,
            Gt(a.children, t)
          )
        );
        break;
      case Me.getType():
        i.push(
          eM(
            p,
            Gt(p.children, t, p.caller)
          )
        );
        break;
      case Ir.getType():
      case $r.getType():
      case Qt.getType():
      case Kf.getType():
      case br.getType():
        break;
      case rt.getType():
        if (s = Gt(
          g.children,
          t,
          r,
          n
        ), s) {
          const T = g.typedIDs[Qr];
          if (T)
            iM(s, T, o, e[c + 1], i), o = T;
          else {
            const C = s.shift();
            C && (typeof C == "string" ? Jd(i, C) : i.push(C)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Zt.getType():
        i.push(si(a));
        break;
      case Be.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Cs(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== D && !m.text.startsWith(Vc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[xs]?.textType !== "attribute" && (!r || m.text !== At(r))) {
          let T = tM(m);
          Sg(t) && (n && T.startsWith(D) && (T = T.slice(1)), T = Kv(zv(T))), Jd(i, T);
        }
        break;
      case zn.getType():
        i.push(
          rM(
            y,
            Gt(y.children, t)
          )
        );
        break;
      case Fr.getType():
        i.push(nM(a));
        break;
      case _i.getType():
        mo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        mo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Mg(e) {
  const t = e.findIndex((r) => Ro(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Mg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Ws = {
  initialize: jv,
  deserializeEditorState: Bv
}, sM = /^sd\d*$/, oM = /* @__PURE__ */ new Set([
  ...Object.entries(Ja).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !sM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function aM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (_p(i) || Ip(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Fk(i)) {
      t && yo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (el(i) && oM.has(i.marker) && !yo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Eg(i.children, t).forEach((s) => {
      const o = cM(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = lM(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Eg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Ag(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (gp(i)) {
      const s = Eg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Yd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Yd(i, c.nodes)] });
      });
      return;
    }
    t && yo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Yd(e, t) {
  return { ...e, children: t };
}
function Ag(e) {
  return Mh(e) && e.number !== "";
}
function yo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Ag(r) || yo(r)) : !1;
}
function cM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function lM(e) {
  return {
    type: so,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Ch
  };
}
const Xd = Ng([]), uM = {
  type: Kf.getType(),
  version: 1
};
let zl = [], te, In, Pg, St;
function dM(e, t) {
  zl = [], hM(e), gM(t);
}
function fM(e = 0) {
}
function pM(e, t) {
  te = t ?? Wo();
  let r;
  return e ? (e.type !== Mr && St?.warn(`This USJ type '${e.type}' didn't match the expected type '${Mr}'.`), e.version !== vr && St?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${vr}'.`
  ), e.content.length > 0 ? (r = Tc(Gr(e.content)), fs(te) && (r = aM(r, St))) : r = [Xd]) : r = [Xd], Pg?.(zl), {
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
function hM(e) {
  e && (In = e), e?.addMissingComments && (Pg = e.addMissingComments);
}
function gM(e) {
  e && (St = e);
}
function Kl() {
  return Ho(te);
}
function mM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function yM(e) {
  let { marker: t } = e;
  t !== is && St?.warn(`Unexpected book marker '${t}'!`), t = t ?? is;
  const { code: r } = e;
  (!r || !jt.isValidBookCode(r)) && St?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  te?.markerMode === "editable" || te?.markerMode === "visible" ? n.push(
    xt("marker", Re(t) + " " + r + D)
  ) : te?.hasGutterParaMarkers && n.push(xt("marker", Re(t) + D, !0));
  const i = mM(e.content);
  i && n.push(ut(Kl() ? Cg(i) : i));
  const s = Fe(e, bk);
  return Ae({
    type: jt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Tp
  });
}
function bM(e) {
  let { marker: t } = e;
  t !== to && St?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? to;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Fe(e, kk);
  let a;
  te?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Ut(t, r) ?? "")
  ];
  return te?.markerMode === "editable" && $M(i, s, c), te?.markerMode === "editable" ? Ae({
    type: Nt.getType(),
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
    version: Cp
  }) : Ae({
    type: mr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Ap
  });
}
function kM(e) {
  let { marker: t } = e;
  t !== ro && St?.warn(`Unexpected verse marker '${t}'!`), t = t ?? ro;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (oC(te) ?? vt).getType(), c = te?.markerMode === "editable" ? qp : vh;
  let l, u;
  te?.markerMode === "editable" ? l = Ut(t, r) : te?.markerMode === "visible" && (u = !0);
  const d = Fe(e, wk);
  return Ae({
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
function TM(e, t = [], r = !1) {
  let { marker: n } = e;
  me.isValidMarker(n, In?.extraValidMarkers) || St?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (te?.markerMode === "editable") {
    const [a] = t;
    di(a) ? a.text = D + a.text : a && t.unshift(ut(D));
  }
  t.length === 0 && t.push(ut(zt)), yc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Fe(e, _k);
  return s || OM(n, o, i), s || bc(e.marker ?? "", i, !1, r), Ae({
    type: me.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Ep
  });
}
function Ng(e) {
  return {
    type: rn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Op
  };
}
function xM(e, t = []) {
  let { marker: r } = e;
  nt.isValidMarker(r, In?.extraValidMarkers) || St?.warn(`Unexpected para marker '${r}'!`), r = r ?? fr;
  const n = [];
  if (Ci(te) && (te?.markerMode === "editable" ? n.push(
    pt(r),
    ut(D, gr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && n.push(
    xt(
      "marker",
      Re(r) + D,
      te?.hasGutterParaMarkers
    )
  )), n.push(...t), Kl()) {
    const s = n.find(
      (o) => !nl(o) && !(di(o) && o.text === D)
    );
    di(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => D.repeat(o.length)));
  }
  const i = Fe(e, Nk);
  return Ae({
    type: nt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: wp
  });
}
function jl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function _M(e, t = []) {
  const r = Fe(e, IT);
  return Ae({
    ...jl(),
    type: Kn.getType(),
    unknownAttributes: r,
    children: t,
    version: ph
  });
}
function CM(e, t = []) {
  const r = Fe(e, UT), n = e.marker ?? ic, i = [];
  return te?.markerMode === "editable" ? i.push(
    pt(n),
    ut(D, gr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && i.push(
    xt(
      "marker",
      Re(n) + D,
      te?.hasGutterParaMarkers
    )
  ), i.push(...t), Ae({
    ...jl(),
    type: Ti.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: mh
  });
}
function SM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? sc, a = sh(o, i) ?? o;
  te?.markerMode === "editable" ? s.push(
    pt(a),
    ut(D, gr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && s.push(
    xt(
      "marker",
      Re(a) + D,
      te?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Fe(
    e,
    zT
  );
  return Ae({
    ...jl(),
    type: xi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: bh
  });
}
function vM(e, t) {
  const r = Wk(t);
  let n = () => {
  };
  return In?.noteCallerOnClick && (n = In.noteCallerOnClick), Ae({
    type: Qt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: qh
  });
}
function MM(e, t) {
  let { marker: r } = e;
  Me.isValidMarker(r, In?.extraValidMarkers) || St?.warn(`Unexpected note marker '${r}'!`), r = r ?? Gc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : _l(te?.noteMode), a = Fe(e, $b), c = te?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  te?.markerMode === "editable" ? (l = pt(r, "opening", !1, c), s || (u = pt(r, "closing"))) : te?.markerMode === "visible" && (l = xt("marker", Re(r) + " "), s || (u = xt("marker", Qe(r))));
  const d = [];
  let f;
  if (l && d.push(l), te?.markerMode === "editable" && !o)
    f = ut(At(i), void 0, c), d.push(f), RM(n, d), d.push(...t);
  else {
    const p = ut(D, gr, "token");
    f = vM(i, t), d.push(f, p, ...t.flatMap(EM(p)));
  }
  return u && d.push(u), Ae({
    type: Me.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: ap
  });
}
function EM(e) {
  return (t) => pp(t) ? [t] : [t, e];
}
function AM(e) {
  let { marker: t } = e;
  (!t || !Zt.isValidMarker(t, In?.extraValidMarkers)) && St?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Fe(e, Hc), s = Gp(e);
  return Ae({
    type: Zt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: ip
  });
}
function Qd(e, t = []) {
  return {
    type: rt.getType(),
    typedIDs: { [Qr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function PM(e, t) {
  const { marker: r } = e, n = e.type, i = Fe(e, pk), s = [];
  if (te?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = oh(
      n,
      r,
      i
    );
    o && s.push(xt("marker", o)), a && s.push(xt("attribute", a)), s.push(...t), c && s.push(xt("attribute", c)), l && s.push(xt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    di(o) && (o.mode = "token");
  }), Ae({
    type: zn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: yp
  });
}
function NM(e) {
  return {
    type: Fr.getType(),
    marker: e,
    text: Ji(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: te?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: uh
  };
}
function pt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: br.getType(),
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
function ut(e, t = void 0, r = "normal") {
  const n = {
    type: Be.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[xs] = { textType: t }), n;
}
function xt(e, t, r = !1) {
  const n = {
    type: $r.getType(),
    text: t,
    textType: e,
    version: fp
  };
  return r && (n[xs] = { [Xc.key]: !0 }), n;
}
function hs(e, t) {
  return {
    type: Ir.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: bp
  };
}
function yc(e, t, r = !1) {
  te?.markerMode === "editable" ? t.push(pt(e, "opening", r)) : te?.markerMode === "visible" && t.push(xt("marker", Re(e, r)));
}
function bc(e, t, r = !1, n = !1) {
  te?.markerMode === "editable" ? r ? t.push(pt("", "selfClosing")) : t.push(pt(e, "closing", n)) : te?.markerMode === "visible" && t.push(
    xt(
      "marker",
      r ? Qe("") : Qe(e, n)
    )
  );
}
function OM(e, t, r) {
  if (te?.markerMode !== "editable" || !t) return;
  const n = dr(t, wo(e));
  n && r.push(ut(n, "attribute"));
}
function Zd(e, t) {
  if (e.type !== "ms" || te?.markerMode !== "editable" && te?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Fe(e, Hc), o = Jp(
    n,
    i,
    s,
    Gp(e)
  ), a = dr(o, qo(r ?? ""));
  if (!a) return;
  const c = D + a;
  te?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(xt("attribute", c));
}
function wM(e, t) {
  const r = e.marker ?? "";
  if (te?.markerMode === "editable") {
    const n = [];
    yc(r, n), Zd(e, n), bc(r, n, !0), t.push(hs("milestone", n));
  } else
    yc(r, t), Zd(e, t), bc(r, t, !0);
}
function ef(e, t, r) {
  t !== void 0 && r.push(
    hs(e, [
      pt(e, "opening"),
      ut(D + t, "attribute"),
      pt(e, "closing")
    ])
  );
}
function qM(e, t) {
  te?.markerMode === "editable" && (ef("va", e.altnumber, t), ef("vp", e.pubnumber, t));
}
function RM(e, t) {
  e !== void 0 && t.push(
    hs("cat", [
      pt("cat", "opening"),
      ut(D + e, "attribute"),
      pt("cat", "closing")
    ])
  );
}
function $M(e, t, r) {
  e !== void 0 && r.push(
    hs("ca", [
      pt("ca", "opening"),
      ut(D + e, "attribute"),
      pt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    hs("cp", [
      pt("cp", "opening"),
      ut(D + t, "attribute")
    ])
  );
}
function tf(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function IM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function rf(e, t) {
  t.marker === Nn && t.sid !== void 0 && e.push(t.sid), t.marker === ai && t.eid !== void 0 && IM(e, t.eid);
}
function kc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Qd(o, [...n])] : o, c = e[i];
  rf(n, c);
  const l = kc(
    e.slice(i + 1, s),
    tf(t, i + 1),
    c.marker === Nn,
    n
  ), u = Qd(l, [...n]), d = e[s];
  rf(n, d);
  const f = kc(
    e.slice(s + 1),
    tf(t, s + 1),
    d.marker === Nn,
    n
  );
  return [...a, u, ...f];
}
function Gr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(Kl() ? Cg(i) : i));
    else if (!i.type)
      St?.error("Marker type is missing!");
    else
      switch (i.type) {
        case jt.getType():
          n.push(yM(i));
          break;
        case Nt.getType():
          n.push(bM(i));
          break;
        case ft.getType():
          te?.hasSpacing || n.push(uM), n.push(kM(i)), qM(i, n);
          break;
        case me.getType():
          n.push(
            TM(i, Gr(i.content, !0), t)
          );
          break;
        case nt.getType():
          n.push(xM(i, Gr(i.content)));
          break;
        case Me.getType():
          n.push(MM(i, Gr(i.content)));
          break;
        case Zt.getType():
          sp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && zl?.push(i.sid)), n.push(AM(i)), wM(i, n);
          break;
        case Fr.getType():
          n.push(NM(i.marker ?? ""));
          break;
        case fh:
          n.push(_M(i, Gr(i.content)));
          break;
        case gh:
          n.push(CM(i, Gr(i.content)));
          break;
        case yh:
          n.push(SM(i, Gr(i.content)));
          break;
        default:
          St?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(PM(i, Gr(i.content)));
      }
  }), kc(n, r);
}
function Tc(e) {
  const t = e.findIndex(
    (n) => _p(n) || Ip(n) || el(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    DT(n)
  );
  if (t >= 0) {
    const n = Tc(e.slice(0, t)), i = e[t], s = Tc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Mh(n)))
    return [Ng(e)];
  return e;
}
const Or = {
  initialize: dM,
  reset: fM,
  serializeEditorState: pM
};
function Og(e) {
  if (e && !N(e)) {
    if (S(e)) return e;
    if (F(e))
      for (const t of e.getChildren()) {
        const r = Og(t);
        if (r) return r;
      }
  }
}
function LM() {
  const e = q();
  if (!A(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((S(t) && !N(t) ? $n(t) : void 0) && S(t)) {
      const i = ye(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      fi(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Og(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(D) ? D : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return S(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of wg(e)) {
    if (!$n(t)) continue;
    fi(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(D) && r.setTextContent(n.slice(D.length));
  }
  return !0;
}
function wg(e) {
  const [t, r] = Fc(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!S(a) || N(a) || ne(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function DM() {
  const e = q();
  if (!A(e)) return !1;
  const t = e.focus.getNode();
  return $n(t) ? Se(ul(t)) : !1;
}
function qg() {
  let e = q();
  if (!A(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (N(t) && !pl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (U(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = q(), !A(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!S(t) || N(t) || !$n(t)) return !1;
  const r = ul(t);
  if (!Se(r)) return !1;
  const n = ye(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  fi(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return U(a) ? dl(a) : o.select(0, 0), !0;
}
const Rg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Lp(ze().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = q(), t = jp(e), r = yl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Gk(0, o);
        const a = Ex(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Jk(c) && rl(parseInt(n, 10), c);
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
function xc(e, t) {
  return Me.isValidMarker(e, t) || !!Rg[e] || nt.isValidMarker(e, t) || me.isValidMarker(e, t);
}
function UM(e, t) {
  return me.isNoteContentMarker(e) ? !1 : me.isValidMarker(e, t);
}
function $g(e, t, r, n, i, s) {
  const o = $h(
    e,
    void 0,
    void 0,
    t,
    n ?? Wo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function _c(e, t, r, n, i, s, o) {
  if (Me.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = $g(
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
  const a = VM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = q();
      A(u) && (_h(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = id(d, Or, r), m = fa(p);
      if (A(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), T = $n(g), C = u.anchor.key === u.focus.key;
        if (U(m) && T && C && !Da(m, o))
          KM(
            u,
            m,
            g,
            r?.markerMode === "editable"
          );
        else if (U(m) && !C && !Da(m, o) && jM(u))
          BM(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          WM(
            u,
            () => fa(p)
          );
        else if (F(m) && !m.isInline()) {
          const M = u.insertParagraph();
          if (M) {
            const O = M.getChildren();
            m.append(...O), M.replace(m), Se(m) && vi(m) || m.selectStart();
          }
        } else if (U(m) && S(g) && !N(g) && U(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Da(m, o)) {
          const M = g.getParent();
          if (U(M)) {
            const O = u.anchor.offset;
            if (O === 0) g.insertBefore(m);
            else if (O >= g.getTextContentSize()) g.insertAfter(m);
            else {
              const [B] = g.splitText(O);
              B.insertAfter(m);
            }
            m.getChildren().forEach((B) => {
              N(B) && B.setNested(!0);
            });
            const v = m.getChildren().find((B) => S(B) && !N(B));
            v && S(v) ? v.select(
              v.getTextContentSize(),
              v.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (S(g) && !N(g) && u.isCollapsed() && (K(y) || U(y) && K(y.getParent()))) {
          const M = U(y) ? y : void 0, O = M ? FM(g, u.anchor.offset) : [];
          let B = (M ?? g).insertAfter(m);
          if (yr(m)) {
            const E = {
              ...r || Wo(),
              markerMode: "hidden"
            }, R = id(
              d,
              Or,
              E
            ), $ = fa(R);
            B = B.insertAfter($);
          }
          if (O.length > 0 && M) {
            const E = bo(M).append(...O);
            B.insertAfter(E), M.isEmpty() && M.remove();
          } else S(B.getNextSibling()) || B.insertAfter(ye(D));
          F(B) && B.selectEnd();
        } else if (u.insertNodes([m]), rE(m), f) {
          const M = Ff();
          M.add(m.getKey()), Pn(M);
        } else if (U(m)) {
          const M = m.getChildren().find((O) => S(O) && !N(O));
          M && S(M) ? M.select(
            M.getTextContentSize(),
            M.getTextContentSize()
          ) : m.selectEnd();
        } else {
          const M = m.getNextSibling();
          M ? M.selectStart() : m.selectStart();
        }
      } else
        u?.insertNodes([m]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function FM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Da(e, t) {
  return ((t ?? oo).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function zM(e, t) {
  t && e.getChildren().forEach((i) => {
    N(i) && i.setNested(!0);
  }), e.getChildren().some((i) => N(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function KM(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && U(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !S(r)) {
    const o = e.anchor.offset;
    if (S(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else S(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = mi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (fi(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), S(i) && !i.getTextContent().startsWith(D) && i.setTextContent(D + i.getTextContent());
    const o = t.getChildren().find((a) => S(a) && !N(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => S(o) && !N(o));
  S(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function jM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (N(n) || U(n)) continue;
    if (!S(n) || n.getType() !== Be.getType() || ne(n, oe) === "attribute") return !1;
    const i = ul(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    $n(n) && (r = !0);
  }
  return r;
}
function BM(e, t, r) {
  const n = wg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!$n(a)) return;
    fi(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(D) && c.setTextContent(l.slice(D.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(D) || i.setTextContent(D + i.getTextContent());
  const s = t.getChildren().find((a) => S(a) && !N(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function VM(e, t) {
  let r = Rg[e];
  return r || (nt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: nt.getType(), marker: e, content: [] }] })
  } : me.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: me.getType(), marker: e };
      return (me.isValidFootnoteMarker(e) || me.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function WM(e, t) {
  const r = e.getNodes(), [n, i] = mi(e);
  let s;
  r.forEach((o, a) => {
    if (F(s) && s.isParentOf(o))
      return;
    const c = Ig(
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
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((d) => N(d) && d.getMarkerSyntax() === "opening") && zM(s, U(s.getParent()))), GM(c, s, l);
  }), (S(s) || F(s)) && s.selectEnd();
}
function mi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Bl(e) {
  return Ce(e) || K(e) || K(e.getParent());
}
function Ig(e, t, r, n, i) {
  if (!Bl(e)) {
    if (S(e))
      return HM(e, t, r, n, i);
    if (F(e) && e.isInline())
      return e;
  }
}
function HM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function GM(e, t, r) {
  if (S(t)) {
    const n = Cc(e, t);
    t.setTextContent(n), e.remove();
  } else if (F(t)) {
    const n = t.getChildren(), i = n.find(
      (s) => N(s) && s.getMarkerSyntax() !== "opening"
    );
    if (i)
      i.insertBefore(e), r && n.filter((s) => !N(s)).forEach((s) => s.remove());
    else if (r) {
      const s = t.getChildrenSize();
      t.append(e);
      for (let o = 0; o < s; o++) t.getFirstChild()?.remove();
    } else
      t.append(e);
    Cc(e, t), r && U(t) && t.getChildren().some((s) => N(s)) && S(e) && !N(e) && !e.getTextContent().startsWith(D) && e.setTextContent(D + e.getTextContent());
  }
}
function Cc(e, t) {
  let r = e.getTextContent();
  if (S(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    gl(n), S(n) || t.insertBefore(ye(" "));
  }
  return r;
}
function Lg(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = Ln(u, t);
    if (!f) return !1;
    const p = S(u) ? u.getTextContentSize() : 0;
    if (nf(f, r), S(u) && u.isAttached()) {
      const m = u.getTextContentSize(), g = Math.max(p - m, 0), y = Math.max(0, Math.min(d - g, m)), T = q();
      A(T) && T.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = mi(e);
  if (!Wl(n, t, s, o)) return !1;
  const a = Vl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = Ln(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = zg(d, a);
    f && (nf(f, r), l = !0);
  }), Kg(a, i), l;
}
function nf(e, t) {
  e.getChildren().forEach((n) => {
    Bt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === zt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    S(n) && i.startsWith(D) && n.setTextContent(i.slice(D.length));
  }), Wa(e);
}
function Vl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Ig(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    S(o) && n.push(o);
  }), n;
}
function Ln(e, t) {
  let r = e, n;
  for (; r && !Se(r); ) {
    if (K(r)) return;
    !n && U(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Dg(e) {
  const t = Ze(
    e,
    (r) => K(r) || Se(r)
  );
  return K(t);
}
function Ug(e) {
  return e.filter(
    (t) => !Bl(t) && (S(t) || F(t) && t.isInline())
  );
}
function JM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!S(i) || Bl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function YM(e, t, r) {
  return e.getChildren().some(
    (n) => F(n) && t.some((i) => n.isParentOf(i)) && !Fg(n, r)
  );
}
function Wl(e, t, r, n, i) {
  const s = Ug(e), o = JM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Ln(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !YM(l, s, o);
  });
}
function Fg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Bt(r));
}
function zg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (F(u) && t.some((d) => u.isParentOf(d))) {
      if (!Fg(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Bt(n[s - 1]) && (s -= 1), o < n.length - 1 && Bt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(bo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(bo(e).append(...c)), e;
}
function bo(e) {
  return Qy(e);
}
function Kg(e, t) {
  const r = q(), n = e[0], i = e[e.length - 1];
  if (!A(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function XM(e, t, r) {
  if (e.isCollapsed()) {
    const l = Ln(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (ju(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = mi(e);
  if (!Wl(n, r, i, s, t)) return !1;
  const o = Vl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Ln(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = zg(u, o);
    d && (ju(d, t), c = !0);
  }), c;
}
function QM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = mi(e);
  if (!!!i?.some(
    (y) => Wl(s, y, o, a)
  ) && !ZM(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const T = q();
    A(T) && Lg(T, y, n) && (l = !0);
  });
  const u = q();
  if (!A(u)) return l;
  const d = u.isBackward(), [f, p] = mi(u), m = Vl(
    u.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const g = m.filter(
    (y) => !Dg(y) && !Ln(y, t)
  );
  return g.length > 0 && (eE(g).forEach((y) => tE(y, t)), l = !0), Kg(m, d), l;
}
function ZM(e, t) {
  return Ug(e).some(
    (r) => !Dg(r) && !Ln(r, t)
  );
}
function eE(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function tE(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => U(a) && a.getMarker() === t
  ), s = i ? bo(i) : Ar(t);
  e[0].insertBefore(s), s.append(...e), i === r || Cc(e[0], s);
}
function rE(e) {
  ge(e) && (gl(e.getPreviousSibling()), Ah(e.getNextSibling()));
}
const jg = {
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
}, sf = "psc-active-text", Fs = "psc-empty-text";
function nE({ viewOptions: e }) {
  const [t] = ae(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(sf), r.current = o, o && t.getElementByKey(o)?.classList.add(sf);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Ao,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Fs}`);
          if (!c) return !1;
          const l = bi(c);
          if (!ge(l)) return !1;
          const u = l.getParent();
          if (!F(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        _t
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Ua(), f = iE(), p = [], m = [];
          return ze().getChildren().forEach((g) => {
            if (!F(g)) return;
            const { emptyKeys: y, nonEmptyKeys: T } = oE(g);
            p.push(...y), m.push(...T);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Fs) : t.getElementByKey(d)?.classList.add(Fs);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Fs));
      }),
      t.registerCommand(
        jc,
        () => (i(void 0), !1),
        _t
      ),
      t.registerCommand(
        Zy,
        () => {
          const o = t.getEditorState().read(Ua);
          return o !== r.current && i(o), !1;
        },
        _t
      )
    ];
    return i(t.getEditorState().read(Ua)), Ve(...s);
  }, [t, n]), null;
}
function Ua() {
  return sE(q() ?? void 0)?.getKey();
}
function iE() {
  const e = q();
  if (!A(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!F(n)) return;
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
    ge(s[a]) && (o = s[a].getKey());
  return o;
}
function sE(e) {
  if (A(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function oE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ge(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ge(c)) break;
      if (!(Kt(c) || N(c)) && c.getTextContent().replaceAll(Xs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const aE = /^\+/;
function Hl(e, t) {
  const r = t.replace(aE, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Bg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Vg(e, t) {
  return Bg(e, t) !== void 0;
}
function Sc(e, t) {
  const r = Bg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ko(e, t, r) {
  const n = F(e) ? e.getChildren().filter(N) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function cE(e, t, r, n, i) {
  const s = Hl(n, t);
  if (!s) {
    ko(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ko(e, "invalid", i);
}
function Xi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || cE(s, o, t, r, n), Xi(s, t, r, n, i || o === "xq");
    } else if (ge(s)) {
      if (i) continue;
      const o = Hl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? Xi(s, s.getMarker(), r, n, i) : Ue(s) || F(s) && Xi(s, t, r, n, i);
}
function lE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Hl(e, a);
    if (!c) {
      ko(o, "unknown", r), Sc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Sc(n, l) || ko(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of ze().getChildren())
    Ue(o) || (ht(o) || Je(o) ? i(o, o.getMarker()) : ce(o) ? (i(o, o.getMarker()), s(o) && Xi(o, o.getMarker(), e, r, !1)) : F(o) && s(o) && Xi(o, "p", e, r, !1));
  return r;
}
function uE(e) {
  return !!e?.includes("(basic)");
}
function dE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Wg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && xc(e, t);
}
function Gl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Hg(e, t) {
  const r = [];
  for (const n of t) {
    const i = Gl(e, n);
    i && Sc(r, i);
  }
  return r;
}
function Hs(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: dE(e.description),
    isBasic: uE(e.description)
  };
}
function fE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function vc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : fE(e.marker, t.marker);
}
function Mc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Hg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Wg(i.marker, r)
  ).filter((i) => {
    const s = Gl(e, i.marker);
    return s !== void 0 && Vg(n, s);
  }).map((i) => Hs(i, "paragraph")).sort(vc);
}
function pE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Wg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Hs(c, "character")).sort(vc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Hs(c, "character")),
    ...a.map((c) => Hs(c, "note"))
  ].sort(vc);
}
function hE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function gE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function mE(e, t, r) {
  return [
    ...hE(e, t.openCharMarkers),
    ...pE(e, t, r)
  ].sort(gE);
}
function yE(e, t, r) {
  if (t.source === "paragraph") return Mc(e, t, r);
  const n = mE(e, t, r);
  return n.length > 0 ? n : Mc(e, t, r);
}
function bE(e, t, r) {
  const n = Mc(e, t, r), i = Hg(e, t.previousParaMarkers), s = Gl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Vg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const nr = String.raw`\w-`, Gg = "a-z0-9", kE = `[a-z][${Gg}]*`, TE = new RegExp(
  String.raw`^\\(\+?[${nr}]+)[ \u00A0]$`
), Jg = new RegExp(String.raw`^\\(\+?[${nr}]+)$`), xE = new RegExp(String.raw`^\\\+?[${nr}]*\*$`), _E = new RegExp(
  String.raw`^\\(\+?[${nr}]+)(?:[ \u00A0]|$)`
), CE = new RegExp(
  String.raw`^\\(\+?)([${nr}]+)`
), SE = new RegExp(
  String.raw`\\\+?[${nr}]+(?:\\?\*|[ \u00A0])`
), vE = new RegExp(
  String.raw`\\\+?[${nr}]*$`
), ME = new RegExp(
  String.raw`^\\(${kE})( |$)`
), EE = new RegExp(
  String.raw`\\[${Gg}+*]*$`,
  "i"
), st = "￼";
function Yg(e) {
  return e.length > 1 && e.startsWith(D) && e.charAt(1) !== st ? e.slice(1) : e;
}
function of(e) {
  return nl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Xg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Or.serializeEditorState(
    {
      type: Mr,
      version: vr,
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
  for (; of(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== At(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && of(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function zs(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Fi(e, t) {
  vE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += st;
}
function Lt(e) {
  return e.replaceAll(D, " ");
}
function AE(e, t, r = !1) {
  if (Ho(t)) return Lt(e);
  if (e === D) return " ";
  const n = r && e.startsWith(D), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(D, "~");
}
function Qi(e) {
  const t = e.getTextContent();
  return Lr(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Jl(e, t) {
  const r = e[t];
  if (!Ge(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Do(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!N(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Qg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Yl(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = os(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Xl(e) {
  return !!e.getUnknownAttributes();
}
function Yo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Yc(e);
}
function Zg(e, t) {
  return Ge(e) ? !Yo(e.getMarker(), t) : K(e) || Ue(e) ? !0 : qe(e) ? Xl(e) : U(e) ? em(e, t) : !1;
}
function em(e, t) {
  if (sT(e)) return !0;
  const r = e.getMarker();
  return Vb(r) || t(r) !== void 0 ? !1 : !PE(e);
}
function PE(e) {
  const t = e.getChildren().filter((i) => N(i) && i.getMarker() === e.getMarker()).filter(N);
  if (t.some((i) => !Dr(i))) return !0;
  const r = t.some((i) => i.getMarkerSyntax() === "opening"), n = t.some((i) => i.getMarkerSyntax() === "closing");
  return !r && n;
}
const $t = "", It = "";
function af(e) {
  return e.flatMap((t) => De(t) ? t.getChildren() : [t]);
}
function Wi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ge(s)) {
      const o = Jl(e, i);
      Yo(s.getMarker(), r) && Qg(o) ? (t.push(
        $t,
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
      ), Wi(af(o), t, r), t.push(It)) : t.push(st), i += o.length;
    } else if (qe(s)) {
      const o = Yl(e, i);
      Xl(s) ? t.push(st) : (t.push(
        $t,
        "verse",
        Lt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Wi(af(o), t, r), t.push(It)), i += o.length;
    } else N(s) ? t.push($t, "marker", Lt(s.getTextContent()), It) : ln(s) ? t.push($t, "unmatched", Lt(s.getTextContent()), It) : Zg(s, r) ? t.push(st) : Ts(s) ? t.push(" ") : S(s) ? t.push(
      Lt(
        n ? Yg(Qi(s)) : Qi(s)
      )
    ) : U(s) ? (t.push($t, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Wi(s.getChildren(), t, r, !0), t.push(It)) : F(s) ? (t.push($t, s.getType()), Wi(s.getChildren(), t, r), t.push(It)) : t.push(st);
  }
}
function Ei(e, t) {
  const r = [];
  return Wi(e, r, t), r.join("");
}
function wr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function yi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Ql(e) {
  return e.type ?? "";
}
function tm(e, t, r) {
  return t === "closing" ? Qe(e, r) : t === "selfClosing" ? Qe("") : Re(e, r);
}
function Fa(e, t) {
  const r = e[t];
  if (!(!r || Ql(r) !== "attribute-run"))
    return wr(r) ?? [];
}
function Ai(e, t) {
  const r = [];
  return Hi(e, r, t), r.join("");
}
function Hi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Ql(s);
    if (o === "ms") {
      const l = s, u = Fa(e, i + 1);
      u && Yo(l.marker ?? "", r) ? (t.push(
        $t,
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
      ), Hi(u, t, r), t.push(It), i += 1) : t.push(st);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(st);
        continue;
      }
      t.push(
        $t,
        "verse",
        Lt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Fa(e, i + 1 + u);
      for (; d; )
        Hi(d, t, r), u++, d = Fa(e, i + 1 + u);
      t.push(It), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        $t,
        "marker",
        Lt(
          tm(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        It
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push($t, "char", JSON.stringify(l.unknownAttributes ?? null)), Hi(wr(s) ?? [], t, r, !0), t.push(It);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(st);
      continue;
    }
    if (o === "unmatched") {
      t.push($t, "unmatched", Lt(yi(s) ?? "")), t.push(It);
      continue;
    }
    const a = yi(s);
    if (a !== void 0) {
      t.push(Lt(n ? Yg(a) : a));
      continue;
    }
    const c = wr(s);
    c ? (t.push($t, o), Hi(c, t, r), t.push(It)) : t.push(st);
  }
}
function Xo(e) {
  let t = 0;
  for (const r of e) {
    const n = wr(r);
    if (n) {
      t += Xo(n);
      continue;
    }
    const i = yi(r);
    if (i !== void 0)
      for (const s of i) s === st && t++;
  }
  return t;
}
function gs(e, t, r, n, i) {
  Dn(e.getChildren(), t, r, n, i);
}
function Dn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (N(a))
      zs(t, a, Lt(a.getTextContent()));
    else if (Ge(a)) {
      s();
      const c = Jl(e, o);
      Yo(a.getMarker(), r) && Qg(c) ? Dn(c, t, r, n) : Fi(t, [a, ...c]), o += c.length;
    } else if (K(a) || Ue(a))
      s(), Fi(t, [a]);
    else if (qe(a)) {
      s();
      const c = Yl(e, o);
      Xl(a) ? Fi(t, [a, ...c]) : (zs(t, a, Lt(Qi(a))), Dn(c, t, r, n)), o += c.length;
    } else if (U(a))
      s(), em(a, r) ? Fi(t, [a]) : gs(a, t, r, n, { pending: !0 });
    else if (Ts(a))
      s(), zs(t, a, " ");
    else if (S(a)) {
      const c = Lr(a) || ne(a, oe) === "attribute", l = s() && !c;
      zs(
        t,
        a,
        c ? Lt(Qi(a)) : AE(Qi(a), n, l)
      );
    } else F(a) ? gs(a, t, r, n, i) : (s(), Fi(t, [a]));
  }
}
function Zl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ue(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return gs(e, i, t, r), i;
}
function rm(e, t) {
  let r = 0;
  const n = (i) => {
    if (S(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(st);
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
    } else F(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function Ec(e, t = []) {
  for (const r of e)
    qe(r) ? t.push(r) : F(r) && Ec(r.getChildren(), t);
  return t;
}
function nm(e) {
  let t = 0;
  const r = (n) => {
    if (S(n))
      for (const i of n.getTextContent()) i === st && t++;
    else F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Bn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === st && t++;
    else r.content && (t += Bn(r.content));
  return t;
}
function NE(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), F(i) && gs(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const ms = /\s/;
function im(e) {
  return e.filter(Qo).length;
}
function Qo(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return S(t) && !N(t) && ne(t, oe) === "attribute";
}
function OE(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return N(t) || Qo(e);
}
function cf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Qo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      ms.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function eu(e, t, r) {
  const n = cf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !OE(i) ? cf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: im(e.spans) };
}
function za(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return N(t) && t.getMarkerSyntax() !== "opening";
}
function wE(e) {
  const t = se(e.key);
  if (!N(t)) return !1;
  const r = t.getParent();
  return U(r) ? (r.selectNext(0, 0), !0) : !1;
}
function qE(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = qe(t) ? Yl(r, n) : Ge(t) ? Jl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function sm(e, t, r) {
  const { text: n, spans: i } = e, s = im(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !za(d);
    if (!(o && Qo(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const g = n[d.start + m];
        if (c === 0 && (l === 0 || !ms.test(g))) {
          if (p) {
            a = { key: d.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? ms.test(g) || c-- : l--;
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
    if (d && za(d) && wE(d) || d?.isSentinel && qE(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !za(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = se(a.key);
    if (d && S(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(F)?.selectStart();
}
function om(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(F)?.selectStart();
      return;
    }
    sm(NE(e, n, i), t, e);
  }
}
function RE(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(F)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Dn(e, s, n, i), sm({ text: s.text, spans: s.spans }, t, e);
}
function am(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = Zl(g, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const T = s.text.length;
    y.spans.forEach(
      (C) => s.spans.push({ ...C, start: C.start + T, end: C.end + T })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = q();
  if (A(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = eu(s, c.anchor.key, c.anchor.offset));
  }
  const l = Rr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Bn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Or.serializeEditorState(
    { type: Mr, version: vr, content: l },
    r
  );
  if (Ai(u.root.children, n) === Ei(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => vo(g));
  if (nm(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = Ec(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), rm(d, s.sentinels), e.forEach((g) => g.remove());
  const m = Ec(d);
  for (let g = 0; g < f.length && g < m.length; g++)
    m[g].getNumber() === f[g].number && m[g].setSid(f[g].sid);
  return om(d, o, a, n, r), !0;
}
function cm(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Me.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!N(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(gt(s) || S(s) && s.getTextContent() === At(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!N(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Dn(c, l, t, r), { out: l, contentNodes: c };
}
function lm(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(st)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function $E(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = cm(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = q();
  if (A(u)) {
    for (let O = u.anchor.getNode(); O; O = O.getParent())
      if (e.is(O)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = eu(o, u.anchor.key, u.anchor.offset));
  }
  const d = Rr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Bn(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = lm(p), g = Xg(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Xo(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), Ai(g.children, n) === Ei(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const T = g.children.map((O) => vo(O));
  if (nm(T) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const C = a[0];
  if (C)
    T.forEach((O) => C.insertBefore(O));
  else {
    const O = e.getChildren().find((v) => N(v) && v.getMarkerSyntax() === "closing");
    T.forEach((v) => O ? O.insertBefore(v) : e.append(v));
  }
  rm(T, o.sentinels);
  const M = new Set(o.sentinels.flat().map((O) => O.getKey()));
  return a.forEach((O) => {
    M.has(O.getKey()) || O.remove();
  }), RE(T, c, l, n, r), !0;
}
const um = /* @__PURE__ */ new Set(["ca", "cp"]), tu = "cp";
function dm(e) {
  if (!hr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (gs(e, t, pr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Rr(r, { getMarker: pr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === tu)
  );
}
function Zo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (U(r) && um.has(r.getMarker()) || dm(r)) {
      t.push(r);
      continue;
    }
    ce(r) && r.getMarker() === tu && t.push(r);
    break;
  }
  return t;
}
function IE(e) {
  const t = (n) => U(n) && um.has(n.getMarker()) || dm(n);
  if (t(e) || ce(e) && e.getMarker() === tu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Oe(n)) return n;
      if (!t(n)) return;
    }
}
function fm(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Zo(e);
  if (n.some((s) => ce(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Dn(e.getChildren(), i, t, r), Dn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function LE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Zo(e)], o = fm(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = q();
  if (A(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((g) => g.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = eu(o, l.anchor.key, l.anchor.offset));
  }
  const u = Rr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Bn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Or.serializeEditorState(
    { type: Mr, version: vr, content: u },
    r
  );
  if (Ai(f.root.children, n) === Ei(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => vo(m));
  return Oe(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), om(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ys(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ue(n)) return;
    !t && (K(n) || ce(n) || Oe(n)) && (t = n), eb(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? IE(r) : void 0) ?? t;
}
function Jt(e, t) {
  const r = ys(e);
  return r ? K(r) ? $E(r, t) : Oe(r) ? LE(r, t) : am([r], t) : !1;
}
const DE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function lf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !DE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Gs(e, t) {
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
          t.push(`\\${n}`), lf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Gs(r.content, t), lf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Gs(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Gs(r.content, t);
      }
    }
}
function uf(e, t, r) {
  const n = ys(e);
  if (!ce(n)) return !1;
  const i = q();
  if (!A(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Zl(n, t, r);
  if (!o) return !1;
  const a = Rr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    ms.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Gs(a, l);
  for (const u of l.join("").replaceAll(D, "~")) {
    if (ms.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function ru(e, t) {
  return pm(e, t, b.Paragraph);
}
function UE(e, t) {
  return pm(e, t, b.Character);
}
function pm(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== b.Unknown ? i === r : !(Me.isValidMarker(n) || Yc(n));
}
function FE(e) {
  return [lt(e), Ms()];
}
function nu(e) {
  tr(e, 2);
}
function zE(e) {
  const t = q();
  if (!A(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function iu(e) {
  const t = zE(e);
  e.splice(0, 0, FE(e.getMarker())), t && nu(e);
}
function To(e, t) {
  e.setMarker(t), iu(e), nu(e);
}
function KE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Lr(n)) {
    if (S(n) && !N(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(D), Tt(n, oe, gr), n.setMode("token");
      return;
    }
    if (Vp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Ms());
  }
}
function df(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : F(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function Zi(e) {
  for (let t = e; t; t = t.getParent())
    if (ce(t)) return t;
}
function jE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Zi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Zi(r.getNode())?.is(s) ?? !1, a = Zi(n.getNode())?.is(s) ?? !1;
    return !(o && !df(r, s, "start") || a && !df(n, s, "end"));
  });
}
function Ac(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = q();
  if (!(!A(r) || r.isCollapsed()))
    for (const n of jE(r)) t.add(n.getKey());
}
function BE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = q();
  if (!A(r) || !r.isCollapsed()) return;
  const n = Zi(r.focus.getNode());
  n && t.add(n.getKey());
}
function VE(e) {
  const t = q();
  !A(t) || t.isCollapsed() || t.getNodes().some((r) => N(r)) && (Ac(e), t.removeText());
}
const WE = new RegExp(
  String.raw`^\\\+?([${nr}]+)(?:[ \u00A0]|$)`
);
function HE(e, t) {
  const r = WE.exec(e.getTextContent());
  return !!r && ru(r[1], t);
}
function GE(e, t) {
  if (!Ci(t.viewOptions)) return;
  if (Bt(e.getFirstChild())) {
    KE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (HE(e, t.getMarker)) return;
    iu(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ce(o) && !o.is(e))) {
      To(e, fr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ce(r)) {
    const n = e.getChildren().filter((a) => !Lr(a)), i = q();
    let s = !1;
    if (A(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Zi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || F(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && tr(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  To(e, fr);
}
function JE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = dr(t, wo(e.getMarker()));
  return r === "" ? void 0 : r;
}
function YE(e) {
  const t = e.getChildren().filter((s) => !N(s) && ne(s, oe) !== "attribute"), r = t[0];
  r && S(r) && r.getTextContent().startsWith(D) && r.setTextContent(r.getTextContent().slice(1));
  const n = JE(e);
  n && t.push(ye(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function XE(e, t) {
  const r = e.getChildren(), n = r.some((s) => N(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => S(c) && !N(c) && c.getTextContent() === At(s)
    ), a = Fn(e).some(({ node: c }) => N(c));
    if (!o && !a) return;
    r.forEach((c) => {
      N(c) || (S(c) && c.getTextContent() === At(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => N(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function QE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(N(r) && r.getMarkerSyntax() === "opening")) {
    YE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => N(o) && o.getMarkerSyntax() === "closing");
  i && !s && Jt(e, t);
}
function hm(e, t, r) {
  if (!N(e.getFirstChild()) && r?.markerMode === "editable" && Ci(r)) {
    To(e, t);
    return;
  }
  Vh(e, t);
}
function gm() {
  const e = q();
  if (!A(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = mm(e);
    return t !== "removed" ? t : (Pc(), "handled");
  }
  return Pc() ? "handled" : "declined";
}
function ZE(e, t) {
  if (!t) return e;
  const r = ME.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function ff(e, t) {
  const r = q();
  if (!A(r)) return "declined";
  if (r.isCollapsed()) {
    if (!ym())
      return "declined";
  } else {
    const s = mm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => ZE(s, t)
  );
  pf(n ?? "");
  for (const s of i)
    Pc(), pf(s);
  return "handled";
}
function eA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = bi(n);
  if (!i) return !1;
  const s = er(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !S(i) || N(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function mm(e) {
  const t = er(e.anchor.getNode()), r = er(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), tA() ? "removed" : "needs-plain-split");
}
function pf(e) {
  if (e === "") return;
  const t = q();
  A(t) && t.insertText(e);
}
function tA() {
  const e = q();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = er(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => N(r) && r.getMarkerSyntax() === "opening");
}
function ym() {
  const e = q();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = er(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Pc() {
  const e = q();
  if (!A(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = ym();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Ar("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = S(t) && !N(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    fi(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (Yk(u), i.append(u));
  }
  return i.getChildren().every(N) && i.append(ye(zt)), bm(i), !0;
}
function bm(e) {
  const t = e.getChildren().find((r) => !N(r));
  if (S(t)) {
    const r = Ps(t);
    t.select(r, r);
    return;
  }
  if (F(t)) {
    bm(t);
    return;
  }
  e.selectEnd();
}
function rA(e) {
  const t = [];
  let r = e;
  for (; r; )
    U(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function nA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of ze().getChildren()) {
    if (t && n.is(t)) break;
    (ht(n) || Je(n) || ce(n)) && r.push(n.getMarker());
  }
  return r;
}
function iA(e) {
  let t = e;
  for (; F(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function sA(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Bt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Lr(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(iA(i)) && r === 0 : !1;
}
function oA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Bt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Lr(i) && t.is(i) && r === 0;
}
function aA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function cA() {
  const e = q();
  if (!A(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Ze(t, ce), s = !n && (!i || oA(i, t, r)) ? "paragraph" : "character", o = er(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: nA(t),
    openCharMarkers: rA(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: pl(t, r),
    anchorRect: aA()
  };
}
function lA() {
  const e = q();
  if (!A(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!S(t) || N(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = EE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function uA(e, t, r) {
  hm(e, t, r), nu(e);
}
function dA(e, t, r) {
  const n = q();
  if (!A(n)) return;
  const i = n.focus.getNode(), s = Ze(i, ce);
  if (t === "backslash" && s && sA(s, i, n.focus.offset)) {
    uA(s, e, r);
    return;
  }
  Tm(e, r);
}
function fA(e, t) {
  const r = q();
  return !A(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function km(e) {
  const t = q();
  return A(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function pA(e, t, r, n) {
  if (A(q()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && lA(), e.kind === "closeTag") {
    km(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && gm() !== "declined") return;
  if (e.kind === "paragraph" && nt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    dA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Me.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return $g(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  _c(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: en(), reference: r });
}
function Tm(e, t) {
  const r = q();
  if (!A(r)) return;
  const n = Ci(t);
  if (qg()) {
    const s = q();
    if (!A(s)) return;
    const o = Ze(s.anchor.getNode(), ce);
    if (!o) return;
    o.setMarker(e), n && iu(o);
    return;
  }
  const i = r.insertParagraph();
  ce(i) && (n ? To(i, e) : i.setMarker(e));
}
function hA() {
  const [e] = ae();
  return j(() => e.registerCommand(jf, () => !0, _t), [e]), null;
}
function gA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = _E.exec(e)?.[1];
  return r === void 0 ? !1 : !ru(r, t);
}
function xm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !gA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ce(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ce(i))
    return [i, r];
}
function _m(e, t) {
  const r = xm(e, t.getMarker);
  return r !== void 0 && am(r, t);
}
function mA(e, t) {
  const r = q();
  A(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Cm(e) {
  const t = CE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function yA(e) {
  const t = q();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Cm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function bA(e) {
  const t = q();
  if (!A(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && S(r)) {
    const n = r.getNextSibling();
    if (U(n)) {
      dl(n);
      return;
    }
  }
  S(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function hf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Cm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  bA(e);
}
function gf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Sm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Jt(e, r);
  const n = yA(e), i = e.getParent();
  if (ce(i)) {
    if (!ru(t, r.getMarker))
      return _m(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Jt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), gf(s, t) && hf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? UE(t, r.getMarker) : Me.isValidMarker(s)))
      return Jt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Jt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(N).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (mA(c, Qe(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), gf(a, s) && hf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Jt(e, r);
}
function kA(e) {
  const t = q();
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
function TA(e, t) {
  const r = e.getTextContent();
  if (Dr(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (De(e.getParent()) && il(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !kA(e)) {
    nT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = TE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Sm(e, n[1], t);
      return;
    }
    if (xE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Jt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = Qe(e.getMarker(), e.getNested());
    if (U(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = q(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ye(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function xA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (dh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function vm(e) {
  if (!ep(e)?.length)
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
const zi = vm("v"), _A = vm("c"), mf = /^[ \u00A0]*$/;
function Nc(e, t, r) {
  const n = e.getNextSibling();
  if (S(n) && n.getType() === Be.getType() && n.getMode() === "normal" && ne(n, oe) !== "attribute")
    return n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r), n;
  const i = ye(t);
  return e.insertAfter(i), r !== void 0 && i.select(r, r), i;
}
function CA(e, t) {
  const r = e.getTextContent(), n = Ut("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (zi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = zi.valueAndRest.exec(c);
    if (l && mf.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (zi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = zi.valueAndRest.exec(r);
  if (!s) {
    const c = zi.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = q(), p = A(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Ut("v", u));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      Nc(e, d, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Jt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), mf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Ut("v", o)), a && Nc(e, a, a.length);
}
const SA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]([\s\S]*)$/;
function vA(e, t) {
  const r = e.getParent();
  if (!K(r) || r.getIsCollapsed() !== !1 || !ep(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!N(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === At(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = SA.exec(s);
  if (!o) return !1;
  const [, a, c] = o, l = q(), u = A(l) && l.isCollapsed() && l.anchor.key === e.getKey() ? l.anchor.offset : void 0;
  if (t.pendingKeys.delete(e.getKey()), a !== r.getCaller() && r.setCaller(a), e.setTextContent(At(a)), c) {
    const d = s.length - c.length, f = u !== void 0 && u >= d ? u - d : void 0;
    e.isUnmergeable() || e.toggleUnmergeable();
    const p = Nc(e, c, f);
    p.isUnmergeable() || p.toggleUnmergeable();
  }
  return !0;
}
function MA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!S(t)) return;
  const r = Ut("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = _A.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Mm(e) {
  if (Ge(e)) {
    const { wrapper: t } = Do(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = Io(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Oe(e)) {
    const t = [], r = Xp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Zp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (qe(e)) {
    const t = [], r = os(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = os(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function EA(e) {
  const t = q();
  if (!A(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Mm(e).some((n) => r.is(n));
}
function AA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ce(e) && Vp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of as)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ns(l, e) && (i || EA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Mm(e))
    l.remove(), n = !0;
  let s = !1;
  if (U(e)) {
    const l = cT(e);
    l !== void 0 && zb(l) && (nh(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of as)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (rx(l, e)) {
        ls(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Th(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      zo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function yf(e) {
  return S(e) && e.getType() === Be.getType() && e.getMode() === "normal" && ne(e, oe) !== "attribute";
}
function PA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && yf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && yf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Ks(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = PA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (N(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (Dr(c)) continue;
      const m = Jg.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = Sm(c, m[1], e) || n : r === "idle" && uf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : _m(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Jt(c, e) || n;
      continue;
    }
    const l = Rn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = AA(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && uf(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Jt(u, e) || n;
    }
  }
  return n;
}
function Em(e) {
  if (ln(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return Gi(t) !== void 0;
  return !1;
}
function NA(e) {
  const t = Rn(e);
  if (!t) return !1;
  const r = qn(t.kind);
  return !zo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function bf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ht(t) || Ue(t) || hh(t)) return !0;
  return !1;
}
function OA(e, t) {
  const r = e.getTextContent(), n = ne(e, oe), i = e.getParent();
  if (n !== "attribute" && Oe(i)) {
    r.replace(/^[ \u00A0]+/, "") === Ut("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (vA(e, t)) return;
  if (n === "attribute") {
    NA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Em(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !bf(e))
      t.pendingKeys.add(e.getKey());
    else if (eh(e)) t.pendingKeys.add(e.getKey());
    else if (Oe(ys(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      U(a) && ih(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (bf(e)) return;
  const s = q(), o = A(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (SE.test(o)) {
    if (Yb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Jt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function wA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Th(e, t);
}
function qA(e) {
  const t = (r) => {
    if (N(r)) {
      Dr(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (ln(r)) {
      dh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of as)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ns(n, r) || wA(n, r)) && e.pendingKeys.add(r.getKey());
    if (qe(r)) {
      r.getTextContent() !== Ut("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (S(r)) {
      if (r.getType() !== Be.getType() || ne(r, oe) === "attribute") return;
      const n = r.getParent();
      if (Oe(n)) {
        r.getTextContent() !== Ut("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Em(r) || i.includes("//") || eh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (U(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ue(r) && !ht(r)) {
      if (De(r) && r.getChildrenSize() === 0) {
        const n = Rn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      F(r) && r.getChildren().forEach(t);
    }
  };
  ze().getChildren().forEach(t);
}
const xo = "usfm:", Am = "usfmopen", Pm = "usfmclosed";
function RA(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const $A = new RegExp(
  [xo, Am, Pm].map(RA).join("|")
), IA = "\uFEFF", LA = /^usfm_(.+)$/;
function DA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function UA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function FA(e) {
  return e.startsWith(xo) ? UA(e.slice(xo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Nm(e) {
  for (const t of e.classList) {
    const r = LA.exec(t);
    if (r) return r[1];
  }
}
function zA(e) {
  const t = Nm(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function KA(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(xo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Am) && !n.contains(Pm)) && Nm(r) !== void 0)
      return !0;
  }
  return !1;
}
function Om(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(FA(e.nodeValue ?? ""));
    return;
  }
  if (!DA(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => Om(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? zA(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function jA(e) {
  if (!$A.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !KA(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => Om(n, !1, r)), r.join("").replaceAll(IA, "").replaceAll(D, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function BA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, oe);
  if (r === "attribute" || r === gr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ht(o) || Oe(o) || Ue(o)) return;
  const n = t.startsWith(D) && U(e.getParent()), i = n ? t.slice(1) : t, s = (n ? D : "") + i.replace(/ (?=[ \u00A0])/g, D).replace(new RegExp("(?<=\\u00A0) ", "g"), D);
  s !== t && e.setTextContent(s);
}
function VA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function WA(e, t) {
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
function Oc(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? jA(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(VA(s)) : ""),
    isInternal: WA(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const kf = String.raw`\\(?:\+?[${nr}]+\*?|\*)`, HA = new RegExp(
  String.raw`(?<=${kf})\u00A0|\u00A0(?=${kf})`,
  "g"
);
function su(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(HA, " ").replaceAll(D, "~");
}
const wm = new RegExp(
  String.raw`\\c(?![${nr}])[ \u00A0]*[^\s\\]*`,
  "g"
), qm = new RegExp(String.raw`\\id(?![${nr}])[^\n\\]*`, "g"), GA = new RegExp(
  String.raw`^(?:${wm.source}|${qm.source})`
);
function ou(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(wm, "").replace(qm, "");
    return GA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function wc(e) {
  if (S(e) && ne(e, oe) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (De(t)) return !0;
  return !1;
}
function JA(e) {
  return wc(e.anchor.getNode()) || wc(e.focus.getNode());
}
function YA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && wc(t.getNode());
}
function XA(e, t) {
  const n = YA(e) ? t : su(ou(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function QA(e, t = !1, r = () => {
}) {
  const n = Oc(e, en()._config.namespace);
  if (!n) return !1;
  const i = q(), s = A(i) && JA(i);
  if (!s && n.isInternal || t && A(i) && li(i))
    return !1;
  const { text: o } = n;
  if (!o || !A(i)) return !1;
  if (e?.preventDefault(), s)
    return XA(i, o), !0;
  const a = su(ou(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = en();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Js, void 0), u === "") return;
    const f = q();
    A(f) && f.insertText(u);
  }), !0;
}
function ZA(e) {
  if (e.getTextContent() !== D) return !1;
  const t = e.getParent();
  return K(t) ? !gt(e.getPreviousSibling()) : !1;
}
function e1(e, t) {
  if (t || e.getTextContent() !== D) return "";
  const r = e.getParent();
  if (!K(r) || !gt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function t1(e) {
  const t = e.getParent();
  return (K(t) ? t.getCaller() : void 0) || es;
}
function r1(e) {
  const t = e.getParent();
  return !t || sn(t) === void 0;
}
function Rm(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Fc(e);
  let l = "", u = !0;
  for (const d of t) {
    if (F(d) && !d.isInline()) {
      !u && r1(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, gt(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + t1(d));
    else if (S(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += ZA(d) ? "" : f.replaceAll(D, " ") + e1(d, d === n);
    } else (Po(d) || Ts(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(D, " "));
  }
  return l;
}
function $m(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function n1(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => ht(r) || Oe(r)
    )
  );
}
function i1(e) {
  const t = q();
  if (!A(t) || t.isCollapsed()) return;
  const r = Rm(t), n = {
    "text/plain": r,
    "text/html": $m(r)
  };
  if (Go() || n1(t)) return n;
  const i = ib(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function Tf(e, t, r) {
  const n = q();
  if (!A(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !ig();
  const i = i1(t);
  return i ? Im(e, t, n, i, r) : !1;
}
function Im(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || sb(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const Lm = Bf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ka(e) {
  const t = e();
  return qt(Lf), qt(np), t;
}
const xf = 8, s1 = 1e3;
function ni(e, t) {
  const r = qe(e) ? ["va", "vp"] : Ge(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    ax(qn(n), e, t.pendingKeys);
}
function o1(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Bc) || i.updateTags.has(ts)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = se(o);
        if (!c) continue;
        const l = Rn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = se(o.getKey());
        c?.isAttached() && qn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ve(
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
    e.registerMutationListener(br, r),
    e.registerMutationListener($r, r),
    e.registerMutationListener(Ir, r)
  );
}
function qc(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = q();
  return r ? t ? mg(r, t) : A(r) && li(r) : !1;
}
function a1(e, t, r) {
  return Ve(
    e.registerCommand(
      Sr,
      (n) => {
        if (Go() || qc(t)) return !1;
        const i = Oc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? su(ou(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = ff(o, t.getMarker);
          if (a === "declined" && eA(e) && (a = ff(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Yt
    ),
    e.registerCommand(
      Sr,
      (n) => {
        const i = Oc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !DM()) return !1;
        const o = q();
        return t.structureProtectionMode === "protected" && A(o) && li(o) ? !1 : (n?.preventDefault(), A(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Js, void 0), a === "") return;
          const l = q();
          A(l) && l.insertText(a);
        }), !0);
      },
      we
    ),
    e.registerCommand(
      Sr,
      () => (t.splitExpected.current = !0, !1),
      _t
    )
  );
}
function c1({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = ae(), o = e?.markerMode === "editable", a = !!e && Ho(e), c = Z(void 0), l = Z(n);
  return j(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? pr, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), j(() => {
    if (!o || !e) return;
    const u = {
      viewOptions: e,
      getMarker: t ?? pr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    c.current = u;
    const d = QT(s, u.pendingKeys);
    let f, p = !1, m, g = !1, y = !1, T = 0;
    const C = () => T < xf ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${xf} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), M = (E, R = "departure") => {
      s.update(() => {
        T = Ka(
          () => Ks(u, E, R)
        ) ? T + 1 : 0;
      });
    };
    let O;
    const v = () => {
      if (O !== void 0 && clearTimeout(O), O = void 0, y || u.pendingKeys.size === 0) return;
      const E = l.current ?? s1;
      E < 0 || (O = setTimeout(() => {
        O = void 0, !(y || u.pendingKeys.size === 0) && (p || C() || M(void 0, "idle"));
      }, E));
    }, B = Ve(
      s.registerNodeTransform(br, (E) => {
        if (s.isComposing()) return;
        TA(E, u);
        const R = Rn(E);
        R && (qe(R.owner) || K(R.owner) || Oe(R.owner) || Ge(R.owner) && Do(R.owner).wrapper === void 0) && ni(R.owner, u);
      }),
      s.registerNodeTransform(ft, (E) => {
        s.isComposing() || (CA(E, u), ni(E, u));
      }),
      s.registerNodeTransform(Nt, (E) => {
        s.isComposing() || (MA(E), E.isAttached() && ni(E, u));
      }),
      s.registerNodeTransform(nt, (E) => {
        s.isComposing() || GE(E, u);
      }),
      s.registerNodeTransform(me, (E) => {
        if (!s.isComposing()) {
          QE(E, u);
          for (const R of ["separator", "char"])
            E.isAttached() && Ns(qn(R), E) && u.pendingKeys.add(E.getKey());
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
      s.registerNodeTransform(Zt, (E) => {
        s.isComposing() || ni(E, u);
      }),
      s.registerNodeTransform(Ir, (E) => {
        if (s.isComposing()) return;
        const R = Rn(E);
        R && (Ge(R.owner) || qe(R.owner) || K(R.owner) || Oe(R.owner)) && ni(R.owner, u);
      }),
      s.registerNodeTransform(Me, (E) => {
        s.isComposing() || (XE(E, u), ni(E, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Fr, (E) => {
        s.isComposing() || xA(E, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(Be, (E) => {
        s.isComposing() || OA(E, u);
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
      s.registerMutationListener(
        Be,
        (E) => {
          s.getEditorState().read(() => {
            for (const [R, $] of E) {
              if ($ === "destroyed") continue;
              const re = se(R);
              !re || ne(re, oe) !== "attribute" || De(re.getParent()) || s.getElementByKey(R)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      o1(s, u),
      ...a ? [
        s.registerNodeTransform(Be, (E) => {
          s.isComposing() || BA(E);
        }),
        s.registerCommand(
          No,
          (E) => Tf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            E && typeof E == "object" && "clipboardData" in E ? E : null,
            s,
            !1
          ),
          we
        ),
        s.registerCommand(
          An,
          (E) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            Tf(
              E && typeof E == "object" && "clipboardData" in E ? E : null,
              s,
              !0
            )
          ),
          we
        ),
        s.registerCommand(
          Sr,
          (E) => QA(
            // Same jsdom-safe duck-check as COPY above.
            E && typeof E == "object" && "clipboardData" in E ? E : null,
            u.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              u.splitExpected.current = !0;
            }
          ),
          we
        )
      ] : [],
      s.registerCommand(
        An,
        () => (!qc(u) && !Go() && Ac(u), !1),
        Yt
      ),
      s.registerCommand(
        zc,
        () => (s.isComposing() || VE(u), !1),
        oi
      ),
      s.registerCommand(
        Ao,
        () => (p = !1, T = 0, v(), !1),
        _t
      ),
      s.registerCommand(
        qr,
        (E) => (p = !1, T = 0, v(), (E.key === "Backspace" || E.key === "Delete") && !qc(u, fg(E)) && (Ac(u), BE(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !E.ctrlKey || E.altKey || E.shiftKey || E.metaKey || E.key !== " " && E.code !== "Space" || !LM() ? !1 : (E.preventDefault(), !0)),
        we
      ),
      s.registerCommand(
        zf,
        (E) => {
          const R = gm();
          R === "needs-plain-split" && s.dispatchCommand(Js, void 0);
          const $ = R !== "declined" || cx();
          return $ && E?.preventDefault(), Ks(u), $;
        },
        we
      ),
      s.registerCommand(
        Js,
        () => (u.splitExpected.current = !0, qg()),
        we
      ),
      a1(s, u, a),
      s.registerCommand(
        Lm,
        () => {
          if (p) return !0;
          const E = s.getRootElement(), R = E?.ownerDocument, $ = !!E && !!R && R.hasFocus() && E.contains(R.activeElement);
          let re;
          if ($) {
            const H = q();
            re = A(H) ? H.focus.key : f;
          }
          return Ka(() => Ks(u, re)), !0;
        },
        _t
      ),
      s.registerCommand(
        jc,
        () => {
          if (p) return !1;
          const E = q(), R = A(E) ? E.focus.key : f;
          return Ka(() => Ks(u, R)), !1;
        },
        _t
      ),
      s.registerUpdateListener(({ editorState: E, tags: R }) => {
        u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const $ = E.read(() => {
          const H = q();
          return A(H) ? H.focus.key : void 0;
        }), re = m;
        if ($ !== void 0 && (m = $), R.has(Bc)) {
          u.pendingKeys.clear(), E.read(() => qA(u)), p = !0, $ !== void 0 && (f = $);
          return;
        }
        if (R.has(Dt)) {
          $ !== void 0 && $ !== re && (p = !0);
          return;
        }
        p || ($ !== void 0 && (f = $), v(), !(g || $ === void 0) && [...u.pendingKeys].some((H) => H !== $) && (g = !0, queueMicrotask(() => {
          g = !1, !y && (C() || M(f));
        })));
      })
    );
    return () => {
      y = !0, O !== void 0 && clearTimeout(O), O = void 0, d(), B(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const l1 = ["status_unknown", "status_invalid"], Dm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, u1 = Object.values(Dm);
function d1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Dm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function _f(e) {
  e.classList.remove(...l1), e.removeAttribute("aria-description"), u1.includes(e.title) && e.removeAttribute("title");
}
function f1(e, t, r, n) {
  const i = (a) => a.read(() => ze().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = se(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function p1(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : N(t) && t.getParent()?.getKey() === r.getKey();
}
function h1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ae(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? oo;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = lE(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || p1(f)) continue;
            const m = se(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && _f(p);
        }
        for (const [f, p] of d) {
          const m = n.getElementByKey(f);
          m && d1(m, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          f1(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && _f(u);
      }
    };
  }, [n, i, t, r]), null;
}
function g1(e, t) {
  const r = Ol(Al), n = xl();
  if (!r || !n?.end) return;
  const i = Ws.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = tb({
    namespace: "markers-view-copy",
    nodes: [rt, ...vl],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    Or.serializeEditorState(i, r)
  ).read(
    () => {
      const a = Vo(n);
      return a ? Rm(a) : void 0;
    },
    { editor: s }
  );
}
function m1({ viewOptions: e }) {
  const [t] = ae();
  return j(() => {
    const r = (n, i) => {
      const s = q();
      if (!A(s) || s.isCollapsed()) return !1;
      const o = g1(t, e);
      return o === void 0 ? !1 : Im(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        n && typeof n == "object" && "clipboardData" in n ? n : null,
        t,
        s,
        { "text/plain": o, "text/html": $m(o) },
        i
      );
    };
    return Ve(
      t.registerCommand(No, (n) => r(n, !1), we),
      t.registerCommand(An, (n) => r(n, !0), we)
    );
  }, [t, e]), null;
}
function Um(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = wr(o);
    a && F(s) && Um(s.getChildren(), a, r);
  }
}
function Fm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = wr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = yi(o);
      if (c === void 0 || !c.includes(st)) continue;
      const l = c.split(st), u = [];
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
function zm(e, t, r) {
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
function Km(e, t) {
  const r = [];
  for (const n of e)
    Zg(n, t) || ((ce(n) || U(n)) && r.push(n.getMarker()), F(n) && r.push(...Km(n.getChildren(), t)));
  return r;
}
function jm(e) {
  const t = [];
  for (const r of e) {
    const n = Ql(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = wr(r);
    i && t.push(...jm(i));
  }
  return t;
}
function au(e, t, r) {
  const n = Km(e, r), i = jm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function y1(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = q();
  let n, i;
  if (A(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = se(t.key), i = t.offset;
  else
    return;
  if (!(!S(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function cu(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function b1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const T = Zl(y, o, s);
    if (!T) return;
    c.text.length > 0 && (c.text += " ");
    const C = c.text.length;
    T.spans.forEach(
      (M) => c.spans.push({ ...M, start: M.start + C, end: M.end + C })
    ), c.sentinels.push(...T.sentinels), c.text += T.text;
  }
  const l = i ? cu(c, i) : c.text, u = Rr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Bn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Or.serializeEditorState(
    { type: Mr, version: vr, content: u },
    s
  ).root.children;
  if (Xo(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = zm(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ai(d, o) === Ei(e, o) && au(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Fm(d, f);
  const m = k1(e), g = Bm(d);
  for (let y = 0; y < m.length && y < g.length; y++)
    m[y].sid !== void 0 && g[y].number === m[y].number && (g[y].sid = m[y].sid);
  return d;
}
function k1(e) {
  const t = [], r = (n) => {
    qe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Bm(e) {
  const t = [];
  for (const r of e) {
    $p(r) && t.push(r);
    const n = wr(r);
    n && t.push(...Bm(n));
  }
  return t;
}
function T1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = cm(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? cu(l, i) : l.text, f = Rr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Bn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = p.content ?? [], g = lm(m), y = e.getCategory() !== g, T = Xg(e, m, g, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const C = T.children;
  if (Xo(C) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const M = zm(l, t, n);
  if (!M) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ai(C, o) === Ei(u, o) && au(u, C, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Fm(C, M), { rebuilt: C, contentNodes: u, category: g, categoryChanged: y };
}
function Cf(e) {
  return e.$?.textType;
}
function x1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Cf(e) === Cf(t);
}
function _1(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && Ue(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function C1(e) {
  if (!N(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (Dr(e)) return;
  const n = Jg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Sf(e, t) {
  const r = e;
  r.marker = t, r.text = tm(t, r.markerSyntax, r.nested);
}
function S1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Me.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Sf(a.node, s);
  const c = n.getChildren().filter(N).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Sf(l.node, s);
}
function v1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = fm(e, i, n);
  if (!o) return;
  const a = r ? cu(o, r) : o.text, c = Rr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Bn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Or.serializeEditorState(
    { type: Mr, version: vr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Zo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ai(u, i) === Ei(d, i) && au(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function M1(e, t, r, n, i) {
  const s = y1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    K(y) ? c.set(y.getKey(), y) : Oe(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const T = se(y);
    if (!T?.isAttached()) continue;
    const C = ys(T);
    if (C) {
      if (d(C), N(T)) {
        const M = xm(T, r.getMarker);
        M && a.push(M);
      }
      if (K(C)) {
        const M = C1(T);
        M && u.set(C.getKey(), M);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((T) => f.has(T.getKey())) || (y.forEach((T) => {
      f.add(T.getKey()), o.delete(T.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = ys(s.node);
    y && d(y);
  }
  const p = _1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), g = /* @__PURE__ */ new Map();
  Um(ze().getChildren(), e.root.children, g);
  for (const y of u.values()) S1(y, g);
  for (const y of c.values()) {
    const T = g.get(y.getKey()), C = T ? wr(T.node) : void 0;
    if (!T || !C) continue;
    const M = T1(y, g, r, m, s);
    if (!M) continue;
    if (M.categoryChanged) {
      const B = T.node;
      M.category === void 0 ? delete B.category : B.category = M.category;
    }
    if (!M.rebuilt) continue;
    const O = g.get(M.contentNodes[0].getKey());
    if (!O) continue;
    const v = C.indexOf(O.node);
    v < 0 || C.splice(v, M.contentNodes.length, ...M.rebuilt);
  }
  for (const y of o.values()) {
    const T = g.get(y[0].getKey());
    if (!T) continue;
    const C = b1(y, g, r, m, s);
    if (!C) continue;
    const M = T.siblings.indexOf(T.node);
    M < 0 || T.siblings.splice(M, y.length, ...C);
  }
  for (const y of l.values()) {
    const T = g.get(y.getKey());
    if (!T) continue;
    const C = 1 + Zo(y).length, M = v1(y, r, s);
    if (!M) continue;
    const O = T.siblings.indexOf(T.node);
    O < 0 || T.siblings.splice(O, C, ...M);
  }
  for (const y of p) {
    const T = g.get(y.getKey());
    if (!T) continue;
    const C = T.siblings.indexOf(T.node);
    if (C < 0) continue;
    T.siblings.splice(C, 1);
    const M = T.siblings[C - 1], O = T.siblings[C], v = M && yi(M), B = O && yi(O);
    M && O && v !== void 0 && B !== void 0 && x1(M, O) && (M.text = v + B, T.siblings.splice(C, 1));
  }
  return vg(e, r.viewOptions);
}
function E1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = Ci(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        nt,
        (i) => A1(i, t)
      );
  }, [r, n, t]), null;
}
function A1(e, t) {
  e.getMarker() !== fr && (e.isEmpty() || Bt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${fr}" (key ${e.getKey()})`
  ), e.setMarker(fr)));
}
function P1({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ae(), n = Z({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, _o(s, e) || N1(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Rc(r);
        vf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: js(s) === js(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        ze().getChildren().filter(Je).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Rc(r) || vf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: js(a) === js(c)
      }));
    };
    return Ve(
      ...[Nt, mr].map(
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
        return i.phase === "idle" && R1(i, Vm()), !1;
      },
      _t
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(Ft, void 0));
    };
    return Ve(
      r.registerMutationListener(vt, i),
      r.registerMutationListener(ft, i)
    );
  }, [r]), j(() => {
    const i = () => D1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function N1(e, t, r) {
  if (O1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Rc(t);
  (!n || n === r.book) && t.update(() => Wm(t, r.chapterNum, r.verseNum), {
    tag: Dt
  });
}
function O1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => _o(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function Vm() {
  const e = q(), t = jp(e);
  if (!t) return;
  const r = lu(), n = Lk(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = ml(t, e), { verseNum: o, verse: a } = wx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Rc(e) {
  return e.getEditorState().read(() => lu()?.getCode() || void 0);
}
function lu() {
  return ze().getChildren().find(ht);
}
function vf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && ja(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || ja(e, t), e.phase = "navigating") : i && ja(e, t), r && r !== e.scrRef.book && Jm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function ja(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Wm(t, e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Dt }
    );
  });
}
function Wm(e, t, r) {
  const n = q()?.clone();
  w1(t, r);
  const i = q();
  i && !(n && i.is(n)) && Zr(e, Dt);
}
function w1(e, t) {
  const r = Vm();
  if (r?.chapterNum === e && (r.verse ? Gm(t, r.verse) : r.verseNum === t))
    return;
  const n = ze().getChildren(), i = Lp(n, e);
  if (!i) return;
  const s = Bk(n, i), o = Ik(s, !0);
  jk(s, o);
  let a;
  try {
    a = Mx(s, t);
  } catch {
    return;
  }
  a && (ce(a) ? !S(a.getFirstChild()) && vi(a) || tr(a, 0) : q1(a));
}
function q1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ge(n)) {
    tr(t, r);
    return;
  }
  const i = Fo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (S(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = F(n) && !K(n) ? Hm(n) : void 0;
  s ? s.select(0, 0) : tr(t, r);
}
function Hm(e) {
  const t = e.getFirstChild();
  if (S(t)) return t;
  if (F(t) && !K(t)) return Hm(t);
}
function js(e) {
  return e.read(() => {
    const t = ze().getChildren().find(Je);
    return `${lu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function R1(e, t) {
  e.phase !== "navigating" && t && ($1(t, e.scrRef) || Jm(e, I1(t, e.scrRef)));
}
function $1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Gm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Gm(e, t) {
  try {
    return rl(e, t);
  } catch {
    return !1;
  }
}
function I1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const L1 = 8;
function Jm(e, t) {
  return _o(t, e.scrRef) || e.pendingEchoes.some((r) => _o(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > L1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function _o(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function D1(e) {
  e.phase = "idle";
}
function U1(e) {
  return ht(e) ? `${e.__code}` : Oe(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : _s(e) ? `${e.__marker} "${e.__number}"` : gt(e) ? `${e.__caller}` : jn(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ce(e) ? `${e.__marker}` : S(e) ? `"${e.__text}"${F1(e)}` : Ce(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : qe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function F1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[xs]) : "";
}
function z1() {
  const [e] = ae();
  return /* @__PURE__ */ _(
    ob,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: U1,
      editor: e
    }
  );
}
const Ym = qf(null), Mf = 4;
function K1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = Rf(Ym);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function j1({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = de(), [s, o] = de(), a = he(
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
  }, l = je(() => ({ registerItem: a }), [a]);
  return j(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ _(Ym.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function B1({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Z(null), c = Z(null), [l, u] = de(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: g } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + Mf}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (m) => {
        const g = m.target;
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
        const p = c.current, m = a.current;
        if (p !== null && m !== null) {
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Mf;
          y !== m.getBoundingClientRect().top && (m.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ xe(Mn, { children: [
    /* @__PURE__ */ xe(
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
    l && Sn(
      /* @__PURE__ */ _(j1, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const $c = {
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
}, Ic = {
  ...$c,
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
function V1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ _(
    B1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + W1(t),
      buttonLabel: H1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys($c).map((n) => /* @__PURE__ */ xe(
        K1,
        {
          className: "item block-marker " + G1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: $c[n] })
          ]
        },
        n
      ))
    }
  );
}
function W1(e) {
  return e && e in Ic ? e : "ban";
}
function H1(e) {
  return e && e in Ic ? Ic[e] : "No Style";
}
function G1(e) {
  return e ? "active dropdown-item-active" : "";
}
function Ef() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const J1 = cn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ae(), [o, a] = de(s), [c, l] = de(), [u, d] = de(!1), [f, p] = de(!1), m = he(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: T,
      contextMarker: C
    }) => {
      d(g), p(y), l(T), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: T,
        contextMarker: C
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    Ft,
    (g, y) => (a(y), !1),
    Yt
  ), [s]), /* @__PURE__ */ xe(Mn, { children: [
    /* @__PURE__ */ _(dg, { onStateChange: m }),
    /* @__PURE__ */ xe("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Vf, void 0);
          },
          title: Ys ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Wf, void 0);
          },
          title: Ys ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(Ef, {}),
      o === s && /* @__PURE__ */ xe(Mn, { children: [
        /* @__PURE__ */ _(
          V1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ _(Ef, {})
      ] }),
      /* @__PURE__ */ _("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), Y1 = Wo(), X1 = {}, Q1 = {};
function Z1() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Ba(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
const Xm = cn(function({
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
  const d = Z(null), f = Z(null), p = Z(null), m = Z(null), g = Z(t), y = Z(void 0), T = Z(void 0), C = Z(void 0), M = Z(void 0), O = Z(!1), [v, B] = de(t), [E, R] = de(0), [$, re] = de(), {
    isReadonly: H = !1,
    structureProtectionMode: Pe = "off",
    hasExternalUI: ee = !1,
    hasSpellCheck: $e = !1,
    textDirection: be = "ltr",
    markerMenuTrigger: ir = "\\",
    view: Ke,
    nodes: zr,
    debug: Kr = !1,
    contextMenu: dn,
    styleInfo: X,
    markerSettleDelayMs: P
  } = a ?? Q1, G = Ke ?? Y1, ue = fs(G) && (G.markerMode !== "hidden" || !G.hasSpacing || G.hasGutterParaMarkers || G.hasActiveTextFocusBox) ? {
    ...G,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : G, Ee = Z(ue);
  wt(Ee.current, ue) || (Ee.current = ue);
  const Q = Ee.current, ve = je(() => zr ?? X1, [zr]), kr = je(() => dn, [dn]), Ot = je(
    () => yx(X ?? oo),
    [X]
  ), fn = Z(c);
  wt(fn.current, c) || (fn.current = c);
  const He = fn.current, le = fs(Q), mt = H || le, _e = ue !== G;
  j(() => {
    le && !H && He?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), _e && He?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), Q?.markerMode === "visible" && !H && He?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [le, H, _e, He, Q?.markerMode]);
  const Tr = Z(null), Ne = je(() => {
    if (Q.markerMode !== "editable") return;
    const w = X ?? oo;
    return {
      getContext: () => Tr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (L) => yE(
        w,
        L,
        ve.extraValidMarkers
      ),
      getEnterItems: (L) => bE(
        w,
        L,
        ve.extraValidMarkers
      ),
      apply: (L, V) => {
        const J = Tr.current;
        J && (V.trigger === "enter" ? J.splitParagraphWithMarker(L.marker) : J.applyMarkerMenuSelection(L, V));
      },
      commitTypedCloser: (L) => {
        Tr.current?.commitTypedCloser(L);
      }
    };
  }, [Q, X, ve.extraValidMarkers]), xr = (w) => {
    O.current || (O.current = !0, fn.current?.warn(
      `Editor: cannot ${w} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Pi = (w) => {
    if (le)
      throw new Error(
        `Cannot ${w} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, yt = (w) => {
    if (Pi(w), mt) throw new Error(`Cannot ${w} in readonly mode`);
  }, pn = () => !!d.current && og(d.current), Ni = je(
    () => ({
      namespace: "platformEditor",
      theme: { ...jg, showCharMarkerTitles: Q.showCharMarkerTitles },
      editable: !mt,
      editorState: void 0,
      // Handling of errors during update
      onError(w) {
        throw w;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [rt, ...le ? $_ : vl]
    }),
    [mt, le, Q.showCharMarkerTitles]
  );
  Ws.initialize(He);
  function jr(w) {
    if (w !== void 0 && !UM(w, ve.extraValidMarkers))
      throw new Error(`Unsupported character marker '${w}'`);
  }
  const Vn = he(() => {
    const w = d.current;
    if (!w) return g.current;
    const L = Yu(w), V = T.current;
    if ((!L || L.size === 0) && !V) return g.current;
    const J = w.getEditorState(), fe = J.toJSON();
    return J.read(
      () => M1(
        fe,
        L ?? /* @__PURE__ */ new Set(),
        { viewOptions: Q, getMarker: Ot, logger: He },
        V,
        C.current
      )
    ) ?? g.current;
  }, [Q, Ot, He]), Vt = {
    focus() {
      d.current?.focus();
    },
    // Delegates to `holdsDomFocus` (above), the same check every internal caller here uses,
    // rather than comparing `activeElement` to the root directly: a focused decorator inside the
    // editor - a collapsed note's caller button, say - is the user being in THIS editor, and a
    // host gating a keyboard shortcut or a PDP-sync deferral on `isFocused()` needs that answer,
    // not a narrower one that reads such a caret as unfocused.
    isFocused() {
      return pn();
    },
    undo() {
      d.current?.dispatchCommand(Vf, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Wf, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      yt("cut"), d.current && $l(d.current);
    },
    copy() {
      d.current && Rl(d.current);
    },
    paste() {
      yt("paste"), d.current && Il(d.current);
    },
    pastePlainText() {
      yt("paste as plain text"), d.current && Ll(d.current);
    },
    getUsj() {
      return Vn();
    },
    commitPendingMarkerEdits() {
      const w = d.current;
      if (!w) return;
      const L = !pn(), V = L ? Zr(w, _r) : void 0;
      w.update(
        () => {
          L && qt(_r), w.dispatchCommand(Lm, void 0);
        },
        { discrete: !0 }
      ), V?.(), L && Na(w);
    },
    setTransientInput(w) {
      if (!w) {
        T.current = void 0;
        return;
      }
      const L = d.current?.getEditorState().read(() => {
        const V = q();
        return A(V) && V.isCollapsed() ? V.focus.key : void 0;
      });
      T.current = { input: w, nodeKey: L ?? C.current?.key };
    },
    setUsj(w) {
      if (!wt(g.current, w)) {
        g.current = w, T.current = void 0;
        const L = wt(v, w);
        B(w), L && R((V) => V + 1);
      }
    },
    applyUpdate(w, L = "remote") {
      if (le && L === "remote") {
        fn.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Pi("apply an update");
      const V = pn(), J = !V && d.current ? Zr(d.current, _r) : void 0;
      d.current?.update(
        () => {
          L === "remote" && qt(ts), V || qt(_r), cC(w, Q, ve, He);
        },
        { discrete: !0 }
      ), J?.(), !V && d.current && Na(d.current);
      const fe = d.current?.getEditorState();
      if (!fe) return;
      const ke = Ws.deserializeEditorState(fe, Q);
      if (ke) {
        const at = !wt(g.current, ke);
        if (at && (g.current = ke), at || !wt(v, ke)) {
          const Wt = ad(w, fe, "apply");
          M.current = ke, s?.(ke, w, L, Wt);
        }
      }
    },
    replaceEmbedUpdate(w, L) {
      const V = d.current?.read(() => Bx(w, L));
      V ? this.applyUpdate(V) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${w}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (le) {
        xr("get the selection");
        return;
      }
      return d.current?.read(xl);
    },
    setSelection(w) {
      if (le) {
        xr("set the selection");
        return;
      }
      d.current?.update(() => {
        const L = Vo(w);
        L !== void 0 && (Pn(L), qt(rp));
      });
    },
    setAnnotation(w, L, V, J, fe) {
      if (le) {
        xr("set an annotation");
        return;
      }
      let ke, at, Wt, hn;
      typeof J == "function" || J === void 0 ? (ke = J, at = fe) : (ke = J.onClick, at = J.onRemove, Wt = J.onMouseEnter, hn = J.onMouseLeave), f.current?.setAnnotation(
        w,
        Uu(L),
        V,
        ke,
        at,
        Wt,
        hn
      );
    },
    removeAnnotation(w, L) {
      f.current?.removeAnnotation(Uu(w), L);
    },
    formatPara(w) {
      yt("format a paragraph"), d.current?.update(
        () => {
          const L = q();
          if (!A(L)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${w}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          lb(L, () => ss(w));
          const V = q();
          if (!A(V)) return;
          const J = /* @__PURE__ */ new Set();
          V.getNodes().forEach((fe) => {
            const ke = fe.getTopLevelElement();
            ce(ke) && J.add(ke);
          }), J.forEach((fe) => hm(fe, w, Q));
        },
        { discrete: !0 }
      );
    },
    getElementByKey(w) {
      return d.current?.read(
        () => d.current?.getElementByKey(w) ?? void 0
      );
    },
    removeCharacterMarker(w) {
      if (mt) throw new Error("Cannot remove character marker in readonly mode");
      jr(w);
      let L = !1;
      return d.current?.update(
        () => {
          const V = q();
          A(V) && (L = Lg(V, w, Q));
        },
        { discrete: !0 }
      ), L;
    },
    replaceCharacterMarker(w, L) {
      if (mt) throw new Error("Cannot replace character marker in readonly mode");
      jr(w), jr(L);
      let V = !1;
      return d.current?.update(
        () => {
          const J = q();
          A(J) && (V = XM(J, w, L));
        },
        { discrete: !0 }
      ), V;
    },
    extendCharacterMarker(w, L) {
      if (mt) throw new Error("Cannot extend character marker in readonly mode");
      jr(w), L?.forEach(
        (J) => jr(J)
      );
      let V = !1;
      return d.current?.update(
        () => {
          const J = q();
          A(J) && (V = QM(
            J,
            w,
            L,
            Q
          ));
        },
        { discrete: !0 }
      ), V;
    },
    insertMarker(w) {
      if (mt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!xc(w, ve.extraValidMarkers))
        throw new Error(`Unsupported marker '${w}'`);
      const L = _c(
        w,
        y,
        Q,
        ve,
        He,
        void 0,
        X
      );
      return L.action({ editor: d.current, reference: r }), L.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!H)
        return d.current?.getEditorState().read(() => cA());
    },
    applyMarkerMenuSelection(w, L) {
      if (H) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (w.kind !== "closeTag" && !xc(w.marker, ve.extraValidMarkers))
        throw new Error(`Unsupported marker '${w.marker}'`);
      let V;
      return d.current.update(() => {
        V = pA(w, L, r, {
          expandedNoteKeyRef: y,
          viewOptions: Q,
          nodeOptions: ve,
          logger: c,
          styleInfo: X
        });
      }), V;
    },
    splitParagraphWithMarker(w) {
      if (H) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        Tm(w, Q);
      });
    },
    commitTypedMarker(w, L) {
      if (H) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let V = !1;
      return d.current.update(() => {
        V = fA(w, L), V || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), V;
    },
    commitTypedCloser(w) {
      if (H) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let L = !1;
      return d.current.update(() => {
        L = km(w), L || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), L;
    },
    insertNote(w, L, V) {
      yt("insert a note"), d.current?.update(
        () => {
          const J = $h(
            w,
            L,
            V,
            r,
            Q,
            ve,
            He
          );
          Ba(J, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(w) {
      d.current?.update(() => {
        const L = Yr(w);
        L && (pd(L, Q), Ba(L, y));
      });
    },
    selectAfterNote(w) {
      const L = d.current;
      if (!L) return;
      const V = !pn(), J = V ? Zr(L, _r) : void 0;
      if (L.update(
        () => {
          V && qt(_r);
          const fe = Yr(w);
          fe && P_(fe);
        },
        { discrete: !0 }
      ), J?.(), V) {
        Na(L);
        const fe = Zr(
          L,
          _r
        );
        L.update(
          () => {
            qt(_r), L.dispatchCommand(Ft, void 0);
          },
          { discrete: !0 }
        ), fe();
      }
    },
    selectNoteTextOffset(w, L, V) {
      d.current?.update(() => {
        const J = Yr(w);
        if (!J) return;
        (V === "category" ? N_(J, L) || hd(J, 0) : hd(J, L)) || pd(J, Q), Ba(J, y);
      });
    },
    getNoteCaret() {
      const w = d.current;
      if (w)
        return Vs(w, () => {
          const L = q();
          if (!A(L) || !L.isCollapsed()) return;
          const V = L.anchor.getNode(), J = K(V) ? V : Ze(V, K);
          if (!K(J) || J.getIsCollapsed() !== !1) return;
          const fe = J.getKey(), ke = uo(fe);
          if (ke === void 0) return;
          const at = O_(J, { node: V, offset: L.anchor.offset });
          return { noteKey: fe, noteIndex: ke, ...at };
        });
    },
    getNoteOps(w) {
      return d.current?.read(() => {
        const L = Yr(w);
        if (L)
          return kl(L);
      });
    },
    getNoteIndex(w) {
      const L = d.current;
      return L ? Vs(L, () => uo(w)) : void 0;
    },
    getNoteKey(w) {
      const L = d.current;
      return L ? Vs(L, () => Yr(w)?.getKey()) : void 0;
    },
    highlightNote(w) {
      p.current?.setHighlightedNote(w);
    },
    get toolbarEndRef() {
      return m;
    }
  };
  Tr.current = Vt, So(u, () => Vt), j(() => {
    const w = d.current;
    if (w)
      return w.registerUpdateListener(({ editorState: L }) => {
        L.read(() => {
          const V = q();
          if (!A(V) || !V.isCollapsed()) return;
          const J = V.focus.getNode();
          S(J) && (C.current = { key: J.getKey(), offset: V.focus.offset });
        });
      });
  }, []);
  const sr = he(
    (w, L, V, J, fe) => {
      if (le) return;
      const ke = Ws.deserializeEditorState(w, Q);
      if (ke) {
        const at = !wt(g.current, ke);
        if (at && (g.current = ke), at || !wt(v, ke)) {
          const Wt = ad(J, w), hn = Wt && !fe.read(() => se(Wt)) ? Wt : void 0;
          M.current = ke, s?.(ke, J, "local", hn);
        }
      }
    },
    [v, s, Q, le]
  );
  j(() => {
    const w = d.current;
    if (!(!w || !s))
      return w.registerUpdateListener(({ tags: L, dirtyElements: V, dirtyLeaves: J }) => {
        !L.has(Bc) && (V.size === 0 && J.size === 0 || L.has(ts) || !Yu(w)?.size) || queueMicrotask(() => {
          const fe = Vn();
          !fe || wt(M.current, fe) || (M.current = fe, s(fe, void 0, "local", void 0));
        });
      });
  }, [s, Vn]);
  const or = he(
    (w) => {
      re(w.contextMarker), o?.(w);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ xe(Gf, { initialConfig: Ni, children: [
      /* @__PURE__ */ _(fS, { isEditable: !mt }),
      /* @__PURE__ */ xe("div", { className: "editor-container", children: [
        ee ? /* @__PURE__ */ _(dg, { onStateChange: or }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (mt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              J1,
              {
                ref: m,
                editorRef: Tr,
                isReadonly: mt,
                onStateChange: or
              }
            )
          }
        ),
        /* @__PURE__ */ xe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(Yf, { editorRef: d }),
          /* @__PURE__ */ _(
            cb,
            {
              contentEditable: /* @__PURE__ */ _(
                Jf,
                {
                  className: `editor-input usfm ${aC(Q).join(" ")}${Q.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${Q.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: $e
                }
              ),
              placeholder: /* @__PURE__ */ _(Z1, {}),
              ErrorBoundary: Xf
            }
          ),
          ee && /* @__PURE__ */ _(dS, {}),
          /* @__PURE__ */ _(Qf, {}),
          r && n && /* @__PURE__ */ _(P1, { scrRef: r, onScrRefChange: n }),
          r && !ee && /* @__PURE__ */ _(
            Lv,
            {
              trigger: ir,
              scrRef: r,
              contextMarker: $,
              getMarkerAction: (w) => _c(
                w,
                y,
                Q,
                ve,
                He,
                void 0,
                X
              ),
              editableHarness: Ne
            }
          ),
          /* @__PURE__ */ _(
            yS,
            {
              scripture: v,
              scriptureRef: g,
              nodeOptions: ve,
              editorAdaptor: Or,
              viewOptions: Q,
              logger: He
            },
            E
          ),
          /* @__PURE__ */ _(DS, { onChange: i }),
          /* @__PURE__ */ _(
            tC,
            {
              onChange: sr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Nb
            }
          ),
          /* @__PURE__ */ _(nE, { viewOptions: Q }),
          /* @__PURE__ */ _(Z_, { ref: f, logger: He }),
          /* @__PURE__ */ _(RC, { viewOptions: Q }),
          /* @__PURE__ */ _(GC, {}),
          /* @__PURE__ */ _(eS, {}),
          Q?.markerMode !== "editable" && /* @__PURE__ */ _(tS, { logger: He }),
          /* @__PURE__ */ _(sS, { options: kr }),
          /* @__PURE__ */ _(uS, {}),
          /* @__PURE__ */ _(hS, {}),
          /* @__PURE__ */ _(mS, {}),
          /* @__PURE__ */ _(hA, {}),
          /* @__PURE__ */ _(
            c1,
            {
              viewOptions: Q,
              getMarker: Ot,
              logger: He,
              markerSettleDelayMs: P,
              structureProtectionMode: Pe
            }
          ),
          Q?.markerMode === "visible" && /* @__PURE__ */ _(m1, { viewOptions: Q }),
          /* @__PURE__ */ _(
            h1,
            {
              styleInfo: X,
              viewOptions: Q,
              logger: He
            }
          ),
          /* @__PURE__ */ _(bS, { ref: p }),
          /* @__PURE__ */ _(
            kS,
            {
              expandedNoteKeyRef: y,
              nodeOptions: ve,
              viewOptions: Q,
              logger: He
            }
          ),
          /* @__PURE__ */ _(LS, {}),
          /* @__PURE__ */ _(PC, {}),
          /* @__PURE__ */ _(vC, {}),
          /* @__PURE__ */ _(E1, { viewOptions: Q, logger: He }),
          /* @__PURE__ */ _(US, {}),
          /* @__PURE__ */ _(Sv, { structureProtectionMode: Pe }),
          /* @__PURE__ */ _(vv, { textDirection: be }),
          /* @__PURE__ */ _(Ev, {}),
          /* @__PURE__ */ _($v, {}),
          l
        ] }),
        Kr && /* @__PURE__ */ _(z1, {})
      ] })
    ] }, Q.verseLayout ?? "inline")
  );
}), aN = cn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(Xm, { ref: r, ...i });
});
function Qm() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Co(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Qm() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Zm(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Qm() : r,
    quote: e,
    type: "thread"
  };
}
function Af(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function eP(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Va(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class tP {
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
    this._comments = t, Va(this);
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
          const c = Af(a);
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
    this._comments = i, Va(this);
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
          const c = Af(a);
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
    return this._comments = n, Va(this), t.type === "comment" ? {
      index: s,
      markedComment: eP(t)
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
    return t !== null ? t.doc.get("comments", Mu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Eu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Mu();
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
      Sb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      _t
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof vb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const m = p.insert, g = p.retain, y = p.delete, T = u.parent, C = u === r ? void 0 : T instanceof Eu && this._comments.find((M) => M.id === T.get("id"));
              if (Array.isArray(m)) {
                const M = f;
                m.slice().reverse().forEach((O) => {
                  const v = O.get("id"), E = O.get("type") === "thread" ? Zm(
                    O.get("quote"),
                    O.get("comments").toArray().map(
                      (R) => Co(
                        R.get("content"),
                        R.get("author"),
                        R.get("id"),
                        R.get("timeStamp"),
                        R.get("deleted")
                      )
                    ),
                    v
                  ) : Co(
                    O.get("content"),
                    O.get("author"),
                    v,
                    O.get("timeStamp"),
                    O.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(E, C, M);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let M = 0; M < y; M++) {
                  const O = C === void 0 || C === !1 ? this._comments[f] : C.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(O, C);
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
function rP(e) {
  const [t, r] = de(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function nP({
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
  }, [n, e]), /* @__PURE__ */ _("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ xe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function iP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Sn(
    /* @__PURE__ */ _(nP, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function ey() {
  const [e, t] = de(null), r = he(() => {
    t(null);
  }, []), n = je(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _(iP, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = he(
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
const sP = {
  ...jg,
  paragraph: "CommentEditorTheme__paragraph"
};
function oP(...e) {
  return e.filter(Boolean).join(" ");
}
function an({
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
      className: oP(
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
function aP({
  className: e
}) {
  return /* @__PURE__ */ _(Jf, { className: e || "ContentEditable__root" });
}
function cP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const Pf = Bf("INSERT_INLINE_COMMAND");
function lP({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = he(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return j(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), bs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ _("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ _("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ _("i", { className: "icon add-comment" }) }) });
}
function uP({ onEscape: e }) {
  const [t] = ae();
  return j(() => t.registerCommand(
    jf,
    (r) => e(r),
    oi
  ), [t, e]), null;
}
function ty({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(Gf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: sP
  }, children: /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      xb,
      {
        contentEditable: /* @__PURE__ */ _(aP, { className: e }),
        placeholder: /* @__PURE__ */ _(cP, { children: s }),
        ErrorBoundary: Xf
      }
    ),
    /* @__PURE__ */ _(Tb, { onChange: n }),
    /* @__PURE__ */ _(Qf, {}),
    t !== !1 && /* @__PURE__ */ _(yb, {}),
    /* @__PURE__ */ _(uP, { onEscape: r }),
    /* @__PURE__ */ _(bb, {}),
    i !== void 0 && /* @__PURE__ */ _(Yf, { editorRef: i })
  ] }) });
}
function ry(e, t) {
  return he(
    (r, n) => {
      r.read(() => {
        e(_b()), t(!Cb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function dP({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = je(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), u = iy(), d = he(() => {
    e.getEditorState().read(() => {
      const g = q();
      if (A(g)) {
        l.current = g.clone();
        const y = g.anchor, T = g.focus, C = ub(
          e,
          y.getNode(),
          y.offset,
          T.getNode(),
          T.offset
        ), M = a.current;
        if (C !== null && M !== null) {
          const { left: O, bottom: v, width: B } = C.getBoundingClientRect(), E = db(e, C);
          let R = E.length === 1 ? O + B / 2 - 125 : O - 125;
          R < 10 && (R = 10), M.style.left = `${R}px`, M.style.top = `${v + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const $ = E.length, { container: re } = c, H = c.elements, Pe = H.length;
          for (let ee = 0; ee < $; ee++) {
            const $e = E[ee];
            let be = H[ee];
            be === void 0 && (be = document.createElement("span"), H[ee] = be, re.appendChild(be));
            const Ke = `position:absolute;top:${$e.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${$e.left}px;height:${$e.height}px;width:${$e.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            be.style.cssText = Ke;
          }
          for (let ee = Pe - 1; ee >= $; ee--) {
            const $e = H[ee];
            re.removeChild($e), H.pop();
          }
        }
      }
    });
  }, [e, c]);
  bs(() => {
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
        Zm(g, [Co(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = ry(i, o);
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      ty,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ _(an, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ _(
        an,
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
function fP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = iy(), l = ry(i, o);
  return /* @__PURE__ */ xe(Mn, { children: [
    /* @__PURE__ */ _(
      ty,
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
      an,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Co(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(rb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function ny({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ xe(Mn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ xe("div", { className: "Modal__content", children: [
      /* @__PURE__ */ _(
        an,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ _(
        an,
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
function Nf({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = de(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = ey();
  return /* @__PURE__ */ xe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ xe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ xe(Mn, { children: [
      /* @__PURE__ */ _(
        an,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ _(
              ny,
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
function pP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = de(0), [l, u] = ey(), d = je(
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
    return f.type === "thread" ? /* @__PURE__ */ xe(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const T = Array.from(g)[0], C = se(T);
                Ce(C) && C.selectStart();
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
          /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ xe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ _("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ _(
              an,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ _(
                    ny,
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
            Nf,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
            fP,
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
      Nf,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function hP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ _("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ _(
      pP,
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
function iy() {
  const e = Zf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function gP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Zf(), [a] = ae(), c = je(() => {
    const R = new tP(a, s);
    return r && R.registerOnChange(r), t?.(R), R;
  }, [a, s, r, t]), l = rP(c), u = je(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [p, m] = de([]), [g, y] = de(!1), [T, C] = de(!1), { yjsDocMap: M } = o;
  j(() => {
    if (e) {
      const R = e("comments", M);
      return c.registerCollaboration(R);
    }
    return () => {
    };
  }, [c, e, M]);
  const O = he(() => {
    a.update(() => {
      const R = q();
      R !== null && (R.dirty = !0);
    }), y(!1);
  }, [a]), v = he(
    (R, $) => {
      if (R.type === "comment") {
        const re = c.deleteCommentOrThread(R, $);
        if (!re)
          return;
        const { markedComment: H, index: Pe } = re;
        c.addComment(H, $, Pe);
      } else {
        c.deleteCommentOrThread(R);
        const re = $ !== void 0 ? $.id : R.id, H = u.get(re);
        H !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Pe of H) {
              const ee = se(Pe);
              Ce(ee) && (ee.deleteID(Qr, re), ee.hasNoIDsForEveryType() && eo(ee));
            }
          });
        });
      }
    },
    [c, a, u]
  ), B = he(
    (R, $, re, H) => {
      c.addComment(R, re), $ && (a.update(() => {
        A(H) && mp(H, Qr, R.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const R = [];
    let $;
    for (const re of p) {
      const H = u.get(re);
      if (H !== void 0)
        for (const Pe of H) {
          const ee = a.getElementByKey(Pe);
          ee !== null && (ee.classList.add("selected"), R.push(ee), $ = window.setTimeout(() => {
            C(!0);
          }, 0));
        }
    }
    return () => {
      $ !== void 0 && window.clearTimeout($);
      for (const re of R)
        re.classList.remove("selected");
    };
  }, [p, a, u]), j(() => {
    if (!a.hasNodes([rt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const R = /* @__PURE__ */ new Map();
    return Ve(
      Hf(
        a,
        rt,
        ($) => ns($.getTypedIDs()),
        ($, re) => {
          for (const [H, Pe] of Object.entries($.getTypedIDs()))
            Pe.forEach((ee) => {
              re.addID(H, ee);
            });
        }
      ),
      a.registerMutationListener(
        rt,
        ($) => {
          a.getEditorState().read(() => {
            for (const [re, H] of $) {
              const Pe = se(re);
              let ee = [];
              H === "destroyed" ? ee = R.get(re) ?? [] : Ce(Pe) && (ee = Pe.getTypedIDs()[Qr] ?? []);
              for (const $e of ee) {
                let be = u.get($e);
                R.set(re, ee), H === "destroyed" ? be !== void 0 && (be.delete(re), be.size === 0 && u.delete($e)) : (be === void 0 && (be = /* @__PURE__ */ new Set(), u.set($e, be)), be.has(re) || be.add(re));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: $, tags: re }) => {
        $.read(() => {
          const H = q();
          let Pe = !1, ee = !1;
          if (A(H)) {
            const $e = H.anchor.getNode();
            if (S($e)) {
              const be = fk($e, Qr, H.anchor.offset) ?? [];
              be !== null && (m(be), Pe = !0), H.isCollapsed() || (f($e.getKey()), ee = !0);
            }
          }
          Pe || m(($e) => $e.length === 0 ? $e : []), ee || f(null), !re.has("collaboration") && A(H) && y(!1);
        });
      }),
      a.registerCommand(
        Pf,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), y(!0), !0;
        },
        En
      )
    );
  }, [a, u]);
  const E = () => {
    a.dispatchCommand(Pf, void 0);
  };
  return /* @__PURE__ */ xe(Mn, { children: [
    g && Sn(
      /* @__PURE__ */ _(
        dP,
        {
          editor: a,
          cancelAddComment: O,
          submitAddComment: B
        }
      ),
      document.body
    ),
    d != null && !g && Sn(
      /* @__PURE__ */ _(
        lP,
        {
          anchorKey: d,
          editor: a,
          showComments: T,
          onAddComment: E
        }
      ),
      document.body
    ),
    n !== null && Sn(
      /* @__PURE__ */ _(
        an,
        {
          className: `CommentPlugin_ShowCommentsButton ${T ? "active" : ""}`,
          onClick: () => C(!T),
          title: T ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    T && Sn(
      /* @__PURE__ */ _(
        hP,
        {
          comments: l,
          submitAddComment: B,
          deleteCommentOrThread: v,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function mP() {
  const e = Z(void 0), t = he((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function yP(e, t) {
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
function bP(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      yP(r, t);
    };
  }, [t, e]);
}
const cN = cn(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: m, view: g } = {} } = t, y = (m ?? !1) || fs(g), [T, C] = mP();
  bP(f, T), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const v = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(v), p || console.warn(v);
    }
  }, [p]), So(r, () => ({
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
    setTransientInput(v) {
      n.current?.setTransientInput(v);
    },
    setUsj(v) {
      n.current?.setUsj(v);
    },
    applyUpdate(v, B) {
      n.current?.applyUpdate(v, B);
    },
    replaceEmbedUpdate(v, B) {
      return n.current?.replaceEmbedUpdate(v, B);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(v) {
      n.current?.setSelection(v);
    },
    setAnnotation(v, B, E, R, $) {
      typeof R == "function" || R === void 0 ? n.current?.setAnnotation(v, B, E, R, $) : n.current?.setAnnotation(v, B, E, R);
    },
    removeAnnotation(v, B) {
      n.current?.removeAnnotation(v, B);
    },
    formatPara(v) {
      n.current?.formatPara(v);
    },
    getElementByKey(v) {
      return n.current?.getElementByKey(v);
    },
    removeCharacterMarker(v) {
      return n.current?.removeCharacterMarker(v) ?? !1;
    },
    replaceCharacterMarker(v, B) {
      return n.current?.replaceCharacterMarker(v, B) ?? !1;
    },
    extendCharacterMarker(v, B) {
      return n.current?.extendCharacterMarker(v, B) ?? !1;
    },
    insertMarker(v) {
      return n.current?.insertMarker(v);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(v, B) {
      return n.current?.applyMarkerMenuSelection(v, B);
    },
    splitParagraphWithMarker(v) {
      n.current?.splitParagraphWithMarker(v);
    },
    commitTypedMarker(v, B) {
      return n.current?.commitTypedMarker(v, B) ?? !1;
    },
    commitTypedCloser(v) {
      return n.current?.commitTypedCloser(v) ?? !1;
    },
    insertNote(v, B, E) {
      n.current?.insertNote(v, B, E);
    },
    selectNote(v) {
      n.current?.selectNote(v);
    },
    selectAfterNote(v) {
      n.current?.selectAfterNote(v);
    },
    selectNoteTextOffset(v, B, E) {
      n.current?.selectNoteTextOffset(v, B, E);
    },
    getNoteOps(v) {
      return n.current?.getNoteOps(v);
    },
    getNoteCaret() {
      return n.current?.getNoteCaret();
    },
    getNoteIndex(v) {
      return n.current?.getNoteIndex(v);
    },
    getNoteKey(v) {
      return n.current?.getNoteKey(v);
    },
    highlightNote(v) {
      n.current?.highlightNote(v);
    },
    setComments(v) {
      T.current?.setComments(v), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const M = he(
    (v, B, E, R) => {
      if (!u) return;
      const $ = T.current?.getComments();
      u(v, $, B, E, R);
    },
    [T, u]
  ), O = he(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const v = T.current?.getComments();
    l(v);
  }, [T, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(kb, { children: /* @__PURE__ */ xe(Xm, { ref: n, onUsjChange: M, ...f, children: [
    /* @__PURE__ */ _(
      gP,
      {
        setCommentStore: C,
        onChange: O,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ _("div", { ref: s, className: "comment-container" })
  ] }) });
});
function Cn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function kP(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function TP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const xP = /^[#\w().,%/\s-]+$/;
function Cr(e) {
  return e != null;
}
const _P = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, CP = {
  left: "right",
  right: "left"
}, SP = "var(--usj-font-fallback, serif)";
function sy(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${kP(i)}"`).join(", ")}, ${SP}`;
}
const Lc = ".editor-input.usfm", vP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function MP(e) {
  return vP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Lc}".`
  ), Lc);
}
function EP(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(sy(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (xP.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Cr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Cr(t.firstLineIndent) && s.push(`text-indent: ${Cn(t.firstLineIndent * 20 * r)}vw`), Cr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${Cn(t.leftMargin * 20 * r)}vw`), Cr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${Cn(t.rightMargin * 20 * r)}vw`
  ), Cr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${Cn(t.spaceBefore * r)}pt`), Cr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${Cn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = _P[n ? CP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Of = { c: 150, ca: 133, cp: 150 };
function wf(e, t) {
  return e && Cr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function AP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Cr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = wf(e.markers.c, Of.c);
  return ["ca", "cp"].map((i) => {
    const s = wf(
      e.markers[i],
      Of[i]
    ), o = Cn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function lN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Lc } = t, s = MP(i), o = [], a = [];
  e.defaultFont && a.push(sy(e.defaultFont)), Cr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${Cn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = EP(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${TP(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...AP(e, s)), o.join(`
`);
}
export {
  Bh as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  aN as Editorial,
  es as GENERATOR_NOTE_CALLER,
  tp as HIDDEN_NOTE_CALLER,
  cN as Marginal,
  b as MarkerType,
  jh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Al as STANDARD_VIEW_MODE,
  oo as defaultStyleInfo,
  oN as directionToNames,
  B_ as filterAndRankItems,
  lN as generateUsjCss,
  iN as getDefaultViewMode,
  Wo as getDefaultViewOptions,
  bE as getEnterMenuItems,
  yE as getMarkerMenuItems,
  sN as getViewMode,
  Ol as getViewOptions,
  fs as isBlockVerseLayout,
  Jr as isInsertEmbedOpOfType,
  nC as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
