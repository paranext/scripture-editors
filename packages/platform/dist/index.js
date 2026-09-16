import { jsx as _, jsxs as Ce, Fragment as Tn } from "react/jsx-runtime";
import { forwardRef as qn, useState as pe, useRef as X, useCallback as de, useEffect as j, useMemo as De, memo as Sy, createContext as Nf, useContext as wf, Children as My, isValidElement as Ey, cloneElement as Ay, useImperativeHandle as Ic, useLayoutEffect as bs } from "react";
import { assertSafeKey as Ve, isValidBookCode as Py, MARKER_OBJECT_PROPS as Ny, USJ_VERSION as Tr, USJ_TYPE as xr, usjJsonPathFromIndexes as jr, isUsjTextContentLocation as Lc, indexesFromUsjJsonPath as bi, isUsjAttributeKeyLocation as gu, isUsjAttributeMarkerLocation as wy, isUsjClosingAttributeMarkerLocation as Oy, isUsjMarkerLocation as qy, isUsjClosingMarkerLocation as Ry, isUsjPropertyValueLocation as $y, getUsjDocumentLocationTypeName as Iy, EMPTY_USJ as Of } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Be, $parseSerializedNode as ks, DecoratorNode as Ts, ElementNode as er, isHTMLElement as Rn, createState as Ao, $getState as te, $setState as Tt, $isRangeSelection as N, $isElementNode as $, $isTextNode as S, ParagraphNode as Dc, TextNode as je, $createTextNode as ye, $getSelection as w, $getCommonAncestor as Ly, $isLineBreakNode as Po, NODE_STATE_KEY as xs, $getEditor as vs, $hasUpdateTag as Dy, $getNodeByKey as Q, $getRoot as Se, $createRangeSelection as No, $createPoint as mu, $setSelection as xn, $getCharacterOffsets as qf, KEY_DOWN_COMMAND as Ar, COMMAND_PRIORITY_HIGH as Ue, HISTORY_MERGE_TAG as Rf, CLICK_COMMAND as wo, COMMAND_PRIORITY_EDITOR as vn, isDOMNode as $f, $getNearestNodeFromDOMNode as _s, CONTROLLED_TEXT_INSERTION_COMMAND as Uc, PASTE_COMMAND as br, COMMAND_PRIORITY_CRITICAL as kr, CUT_COMMAND as _n, DROP_COMMAND as Fc, DELETE_CHARACTER_COMMAND as Uy, DELETE_WORD_COMMAND as Fy, DELETE_LINE_COMMAND as Ky, $isDecoratorNode as If, COPY_COMMAND as Oo, COMMAND_PRIORITY_NORMAL as oi, SELECTION_CHANGE_COMMAND as cr, BLUR_COMMAND as Kc, $addUpdateTag as Hr, SKIP_DOM_SELECTION_TAG as zy, CLEAR_HISTORY_COMMAND as jy, COMMAND_PRIORITY_LOW as Ft, $getPreviousSelection as By, $isRootOrShadowRoot as Vy, CAN_UNDO_COMMAND as Wy, CAN_REDO_COMMAND as Hy, $isNodeSelection as Lf, DRAGSTART_COMMAND as Gy, $createNodeSelection as Df, getDOMSelectionFromTarget as Jy, $onUpdate as Yy, KEY_ENTER_COMMAND as Uf, LineBreakNode as Ff, $copyNode as Xy, FOCUS_COMMAND as Qy, $isRootNode as Zy, KEY_ESCAPE_COMMAND as Kf, INSERT_PARAGRAPH_COMMAND as eo, createCommand as zf, HISTORIC_TAG as zc, createEditor as eb, UNDO_COMMAND as jf, REDO_COMMAND as Bf, CLEAR_EDITOR_COMMAND as tb } from "lexical";
import { addClassNamesToElement as Gn, removeClassNamesFromElement as ha, $findMatchingParent as it, $dfsIterator as Vf, $dfs as ki, mergeRegister as Ye, registerNestedElementResolver as Wf, $unwrapNode as Ba, IS_APPLE as to } from "@lexical/utils";
import { useLexicalNodeSelection as rb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as $t } from "fast-equals";
import Wi from "quill-delta";
import { useLexicalComposerContext as ce } from "@lexical/react/LexicalComposerContext";
import { copyToClipboard as nb, $getHtmlContent as ib, $getLexicalContent as sb } from "@lexical/clipboard";
import { TreeView as ob } from "@lexical/react/LexicalTreeView";
import * as ab from "react-dom";
import { createPortal as kn } from "react-dom";
import { LexicalComposer as Hf } from "@lexical/react/LexicalComposer";
import { ContentEditable as Gf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Jf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Yf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Xf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as cb } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as lb, createDOMRange as ub, createRectsFromDOMRange as db } from "@lexical/selection";
import { autoUpdate as fb, computePosition as pb, shift as hb, flip as gb } from "@floating-ui/dom";
import { $generateNodesFromDOM as mb } from "@lexical/html";
import { AutoFocusPlugin as yb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as bb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Qf, LexicalCollaboration as kb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Tb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as xb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as vb, $isRootTextContentEmpty as _b } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Cb } from "@lexical/yjs";
import { Array as yu, Map as bu, YArrayEvent as Sb } from "yjs";
const ga = (e) => Be(ks(e)), Mb = {
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
function Zf(e) {
  return Mb[e];
}
const O = " ", ro = "​", zt = O, jc = `${O}|`, or = "p", no = "+", ep = "-", Cs = "immutable-note-caller", io = "chapter", Va = "verse", ku = "invalid", Eb = "text-spacing", Ab = "formatted-font", Pb = "marker-", tp = "external-usj-mutation", rp = "selection-change", Gr = "cursor-change", Wa = "annotation-change", ns = "delta-change", np = "marker-settle", Nb = [
  tp,
  rp,
  Gr,
  Wa,
  ns
], Cn = "zmsc-s", ai = "zmsc-e", wb = [Cn, ai], Ob = [
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
  Cn,
  ai
], ip = 1, Bc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], qb = Bc.filter((e) => e !== "sid" && e !== "eid");
class Xt extends Ts {
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
    return new Xt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return op().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ob.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
  return wb.includes(e);
}
function op(e, t, r, n, i) {
  return Be(new Xt(e, t, r, n, void 0, i));
}
function Fe(e) {
  return e instanceof Xt;
}
const Vc = "f", Rb = [
  // Footnote
  Vc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Hi(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const $b = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], ap = 1;
class we extends er {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Vc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Hi(t) === "crossref" ? ep : no), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new we(r, n, i, s, o, a);
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
    return Wc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Hi(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Hi(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Rn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Hi(this.getMarker()))), { element: r };
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
  return { node: Wc(t, r, n) };
}
function Wc(e, t, r, n, i) {
  return Be(new we(e, t, r, n, i));
}
function Lb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return we.isValidMarker(t) && e.classList.contains(we.getType());
}
function z(e) {
  return e instanceof we;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Ha = {
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
}, fn = {
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
}, Tu = {
  p: { children: fn },
  q: { children: fn },
  q1: { children: fn },
  q2: { children: fn },
  q3: { children: fn },
  q4: { children: fn },
  b: { children: fn },
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
function ar(e) {
  const t = Object.hasOwn(Ha, e) ? Ha[e] : void 0, r = Object.hasOwn(Tu, e) ? Tu[e] : void 0;
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
const cp = "v", lp = "c", pn = "fig", xu = "tr", Ga = "esb", up = "esbe", Db = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Ub = {
  "": "start",
  c: "center",
  r: "end"
};
function Fb(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function vu(e) {
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
const Kb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function zb(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === ro && s + 1 < e.length && vu(e[s + 1]) || (vu(o) ? (r || (i = t.length, t += o), r = !0) : Kb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function jb(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Bb(e, t) {
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
const Vb = /^(?:qt[1-5]?|ts)-[se]$/;
function qo(e) {
  return Vb.test(e) || sp(e);
}
function ma(e, t) {
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
function Wb(e, t, r) {
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
      a(zb(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = Bb(e, i + 1);
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
      const { word: m, next: y } = ma(e, i);
      i = y, n.push({ kind: "verse", number: m });
      continue;
    }
    if (l === lp) {
      const { word: m, next: y } = ma(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: m });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, g = t(p)?.type;
    if (g === b.Note || g === void 0 && we.isValidMarker(l)) {
      const { word: m, next: y } = ma(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: m || "+" });
      continue;
    }
    if (g === b.Milestone || g === void 0 && qo(l)) {
      const m = ek(e, c, l, i);
      if (m)
        n.push(m.token), m.ejectedText && o(m.ejectedText), i = m.next;
      else {
        const y = e.indexOf("\\", i), v = y === -1 ? e.length : y;
        o(e.slice(c, v)), i = v;
      }
      continue;
    }
    g === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : g === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : so(p) ? (d(), so(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Ga || l === up ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const _u = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function so(e) {
  return Object.hasOwn(_u, e) ? _u[e] : void 0;
}
function Hb(e) {
  return so(e) !== void 0;
}
const Gb = /([-\w]+)\s*=\s*"(.*?)"/g, Jb = /[\s\u200B]*[\n\r][\s\u200B]*/g, dp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Ss(e) {
  return dp[e];
}
const Yb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Xb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Ro(e, t, r = dp[t]) {
  const n = e.replace(Jb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Gb)];
  if (s.length > 0) {
    if (!Xb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Yb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Ms(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Qb(e) {
  const t = Pr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Zb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Ro(e.slice(n + 1, i), r, Ms(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function ek(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Ro(s.slice(o + 1), r, Ms(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Zb(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function mr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", O);
}
function hn(e) {
  return e.content || (e.content = []), e.content;
}
function Pr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u;
  const d = () => u ? hn(u) : r;
  let f = !1;
  const p = () => {
    if (s)
      return o.length > a ? hn(o[o.length - 1].object) : hn(s);
    if (o.length > 0)
      return hn(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return d();
      i = { type: "para", marker: or, content: [] }, d().push(i);
    }
    return hn(i);
  }, g = (ee) => {
    const K = p();
    typeof ee == "string" && typeof K[K.length - 1] == "string" ? K[K.length - 1] = K[K.length - 1] + ee : K.push(ee);
  }, m = (ee) => {
    for (let K = ee; K < o.length; K += 1) {
      const re = o[K].object;
      re.closed = "false";
    }
  }, y = () => {
    m(0), o.length = 0;
  }, v = (ee) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, ee || (s.closed = "false"), s = void 0);
  }, M = () => {
    c = void 0, l = void 0;
  }, E = (ee) => {
    u && (ee || (u.closed = "false"), u = void 0);
  };
  let R, C = "", T;
  const F = () => {
    C && g(mr(C)), C = "";
  }, U = (ee = !1) => {
    R?.type === "sidebar" ? C = "" : ee && C.endsWith(`
`) && (C = C.slice(0, -1)), R = void 0, F();
  }, G = () => {
    if (!T)
      return;
    const ee = { type: "char", marker: T.marker, content: [] };
    T.value && (ee.content = [mr(T.value)]), p().push(ee), o.push({ object: ee }), T = void 0;
  }, J = (ee, K) => {
    f = !1, M(), y(), v(!1), i = { type: "para", marker: ee, content: [] }, K && (i.content = [mr(K)]), d().push(i);
  }, ae = () => {
    T && (J(T.marker, T.value), T = void 0);
  };
  let fe;
  const Y = () => {
    if (fe) {
      if (fe.shape === "para")
        J(pn, fe.value);
      else {
        const ee = { type: "char", marker: pn, content: [] };
        fe.value && (ee.content = [mr(fe.value)]), p().push(ee), o.push({ object: ee });
      }
      fe = void 0;
    }
  }, Pe = Wb(e, t?.getMarker ?? ar, n);
  for (let ee = 0; ee < Pe.length; ee++) {
    const K = Pe[ee];
    if (T) {
      if (K.kind === "text") {
        T.value += K.text;
        continue;
      }
      if (T.shape === "char" && K.kind === "end" && K.marker.replace(/^\+/, "") === T.marker) {
        if (T.value.trim() === "") {
          p().push({ type: "char", marker: T.marker, content: [] }), T = void 0, U();
          continue;
        }
        Object.assign(T.target, {
          [T.attrName]: mr(T.value.trim())
        });
        const re = T.marker;
        if (T = void 0, re === "ca") {
          const $e = Pe[ee + 1];
          $e?.kind === "text" && /^[\s\u200B]*$/.test($e.text) && ee++;
        }
        continue;
      }
      if (T.shape === "para" && (K.kind === "para" || K.kind === "chapter")) {
        const re = T.value.replace(/[\s\u200B]+$/, "");
        re === "" ? (J(T.marker), T = void 0) : (Object.assign(T.target, { [T.attrName]: mr(re) }), T = void 0);
      } else {
        R = void 0, (K.kind === "para" || K.kind === "chapter") && T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), T.shape === "para" ? ae() : G(), ee--;
        continue;
      }
    }
    if (fe) {
      if (K.kind === "text" || K.kind === "optbreak") {
        fe.value += K.kind === "text" ? K.text : "//";
        continue;
      }
      if (K.kind === "end" && K.marker.replace(/^\+/, "") === pn) {
        const re = fe.value.indexOf("|"), $e = re >= 0 ? Ro(fe.value.slice(re + 1), pn) : void 0;
        if ($e) {
          const Qe = {};
          for (const [Ze, wi] of Object.entries($e))
            Qe[Ze === "src" ? "file" : Ze] = wi;
          const tr = {
            type: "figure",
            marker: pn,
            ...Qe
          }, le = fe.value.slice(0, re);
          le && (tr.content = [mr(le)]), g(tr), fe = void 0;
          continue;
        }
      }
      Y(), ee--;
      continue;
    }
    if (R)
      if (K.kind === "text") {
        if (K.text.includes(`
`) && /^[\s\u200B]*$/.test(K.text)) {
          C += K.text;
          continue;
        }
        U();
      } else if (K.kind === "charOpen" || K.kind === "para") {
        const re = K.kind === "para" || !K.isNested ? so(K.marker) : void 0;
        if (re && re.targetTypes.includes(R.type)) {
          C = "", T = {
            target: R,
            attrName: re.attrName,
            marker: K.marker,
            shape: re.shape,
            value: ""
          };
          continue;
        }
        U(K.kind === "para");
      } else
        U(K.kind === "chapter");
    if (!s && !n && (K.kind === "charOpen" && !K.isNested && K.marker === pn || K.kind === "para" && K.marker === pn)) {
      y(), fe = { shape: K.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (K.kind) {
      case "text": {
        let re = K.text;
        if (!s && re.endsWith(`
`)) {
          const $e = Pe[ee + 1];
          ($e === void 0 || $e.kind === "para" || $e.kind === "chapter") && (re = re.slice(0, -1));
        }
        re && g(mr(re));
        break;
      }
      case "para": {
        const re = !s && !n;
        if (re && K.marker === xu) {
          y(), c || (c = { type: "table", content: [] }, d().push(c)), l = { type: "table:row", marker: xu, content: [] }, hn(c).push(l), i = l, f = !1;
          break;
        }
        if (re && l) {
          const $e = Db.exec(K.marker);
          if ($e && Fb($e)) {
            y();
            const [, Qe, tr, le] = $e, Ze = {
              type: "table:cell",
              marker: le ? K.marker.slice(0, K.marker.indexOf("-")) : K.marker,
              align: Ub[Qe],
              content: []
            };
            le && (Ze.colspan = String(Number(le) + 1 - Number(tr))), hn(l).push(Ze), i = Ze;
            break;
          }
        }
        if (M(), !n && K.marker === Ga) {
          y(), v(!1), E(!1), u = { type: "sidebar", marker: Ga, content: [] }, r.push(u), i = void 0, R = u, f = !1;
          break;
        }
        if (K.marker === up && u) {
          y(), v(!1), E(!0), i = void 0;
          break;
        }
        J(K.marker);
        break;
      }
      case "verse": {
        v(!1);
        const re = { type: "verse", marker: cp, number: K.number };
        g(re), R = re;
        break;
      }
      case "chapter": {
        y(), v(!1), M(), E(!1), i = void 0;
        const re = {
          type: "chapter",
          marker: lp,
          number: K.number
        };
        r.push(re), R = re, f = !0;
        break;
      }
      case "note": {
        v(!1);
        const re = p();
        s = { type: "note", marker: K.marker, caller: K.caller, content: [] }, a = o.length, re.push(s), R = s;
        break;
      }
      case "charOpen": {
        if (!K.isNested) {
          const Qe = s ? a : 0;
          m(Qe), o.length = Qe;
        }
        const re = p(), $e = { type: "char", marker: K.marker, content: [] };
        re.push($e), o.push({ object: $e });
        break;
      }
      case "end": {
        const re = K.marker.replace(/^\+/, ""), $e = s ? a : 0, Qe = o.findLastIndex((tr, le) => le >= $e && tr.object.marker === re);
        Qe >= 0 ? (tk(o[Qe].object), m(Qe + 1), o.length = Qe) : s && s.marker === re ? v(!0) : (m($e), o.length = $e, g({ type: "unmatched", marker: `${K.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: K.marker, ...K.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (fe && Y(), T)
    if (T.shape === "para") {
      const ee = T.value.replace(/[\s\u200B]+$/, "");
      ee === "" ? J(T.marker) : Object.assign(T.target, { [T.attrName]: mr(ee) }), T = void 0;
    } else
      T.value.endsWith(`
`) && (T.value = T.value.slice(0, -1)), G();
  y(), v(!1), E(!1);
  const Ne = (ee) => {
    for (const K of ee)
      typeof K != "string" && K.content && (Ne(K.content), K.content.length === 0 && delete K.content);
  };
  return Ne(r), r;
}
function tk(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Ro(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Sn = Ao("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Jr = Ao("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), se = Ao("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ur = "marker-trailing-space", fp = 1, rk = "marker", Hc = Ao("isGutterMarker", {
  parse: (e) => e === !0
});
class Nr extends Ts {
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
    return new Nr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => ok(t) ? {
        conversion: nk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return vr().updateFromJSON(t);
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
    return r && Rn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
function nk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: vr(t, r) };
}
function vr(e, t) {
  return Be(new Nr(e, t));
}
function ik(e) {
  return Tt(vr(rk, e), Hc, !0);
}
function sk(e) {
  return Ct(e) && te(e, Hc);
}
function ok(e) {
  return e?.tagName === "span";
}
function Ct(e) {
  return e instanceof Nr;
}
function pp(e) {
  return e?.type === Nr.getType();
}
const Wr = "internal-comment", ak = [Wr], hp = Object.freeze({}), Ja = Object.freeze({}), Ya = Object.freeze({}), Xa = Object.freeze({}), Qa = Object.freeze({}), ck = 1, Jn = /* @__PURE__ */ new Map(), Di = /* @__PURE__ */ new Map(), Yn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map();
class et extends er {
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
    super(o), this.__typedIDs = Bs(t), this.__typedOnClicks = ya(r), this.__typedOnRemoves = ba(n), this.__typedOnMouseEnters = ka(i), this.__typedOnMouseLeaves = Ta(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Bs(t.__typedIDs), n = ya(t.__typedOnClicks), i = ba(t.__typedOnRemoves), s = ka(t.__typedOnMouseEnters), o = Ta(t.__typedOnMouseLeaves);
    return new et(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return ak.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return is().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: ck
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Gn(n, gn(t.theme.typedMark, a)), c.length > 1 && Gn(n, gn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Gn(n, gn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = gn(n.theme.typedMark, s), d = gn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Gn(r, u) : l === 0 && ha(r, u), c === 1 ? l === 2 && Gn(r, d) : l === 1 && ha(r, d));
      const f = new Set(o), p = new Set(a);
      for (const g of o)
        p.has(g) || ha(r, gn("annotationId", g));
      for (const g of a)
        f.has(g) || Gn(r, gn("annotationId", g));
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
    return ge(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Bs(r.__typedIDs);
    r.__typedIDs = Bs(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && oo(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = ya(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ge(t) ? Jn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ba(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ge(t) ? Di.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = ka(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ge(t) ? Yn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = Ta(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ge(t) ? Xn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!ge(a))
      return;
    Ve(t), Ve(r);
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
    if (!ge(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && oo(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = is(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Jn.delete(r.getKey()), Di.delete(r.getKey()), Yn.delete(r.getKey()), Xn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Jn.get(this.getKey());
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
    const n = Yn.get(this.getKey());
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ja) {
      const t = Jn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Jn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Jn.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    Ve(t), Ve(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = Ur(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Ur(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Ja) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Ya) {
      const t = Di.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Di.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Di.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    Ve(t), Ve(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = Ur(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Ur(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Ya) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Xa) {
      const t = Yn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Yn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Yn.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    Ve(t), Ve(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = Ur(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Ur(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Xa) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Qa) {
      const t = Xn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Xn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Xn.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    Ve(t), Ve(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = Ur(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Ur(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Qa) {
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
    const i = lk(t, r);
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
    for (; ge(t) && Su(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; ge(r) && Su(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = uk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = dk(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = fk(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = pk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Bs(e = hp) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Ve(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Ve(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function ya(e) {
  if (!e || e === Ja)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ba(e) {
  if (!e || e === Ya)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ka(e) {
  if (!e || e === Xa)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ta(e) {
  if (!e || e === Qa)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ve(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ve(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Ur(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Cu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function lk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Su(e, t) {
  const r = Cu(e), n = Cu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function fk(e, t) {
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
function pk(e, t) {
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
function gn(e, t) {
  return `${e}-${t}`;
}
function Mu(e) {
  return `external-${e}`;
}
function is(e, t, r, n, i) {
  return Be(new et(e, t, r, n, i));
}
function ge(e) {
  return e instanceof et;
}
function $o(e) {
  return e?.type === et.getType();
}
function oo(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function Gc(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let g, m;
  for (let y = 0; y < u; y++) {
    const v = a[y];
    if ($(m) && m.isParentOf(v))
      continue;
    const M = y === 0, E = y === u - 1;
    let R = null;
    if (S(v)) {
      const C = v.getTextContentSize(), T = M ? f : 0, F = E ? p : C;
      if (T === 0 && F === 0)
        continue;
      const U = v.splitText(T, F);
      R = U.length > 1 && (U.length === 3 || M && !E || F === C) ? U[1] : U[0];
    } else {
      if (ge(v))
        continue;
      $(v) && v.isInline() && (R = v);
    }
    if (R !== null) {
      if (R && R.is(g))
        continue;
      const C = R.getParent();
      (C == null || !C.is(g)) && (m = void 0), g = C, m === void 0 && (m = is(), m.addID(t, r, n, i, s, o), R.insertBefore(m)), m.append(R);
    } else
      g = void 0, m = void 0;
  }
  t === Wr && $(m) && (d ? m.selectStart() : m.selectEnd());
}
function hk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (ge(n))
      return n.getTypedIDs()[t];
    if (S(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (ge(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const gk = ["type", "marker", "content"], Za = "unknown", gp = 1, mk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class $n extends er {
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
    return new $n(r, n, i, s);
  }
  static importDOM() {
    return {
      [Za]: (t) => bk(t) ? {
        conversion: yk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Jc().updateFromJSON(t);
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
    return mk.has(this.getTag());
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
    const t = document.createElement(Za);
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
      version: gp
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
function yk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Jc(t, r) };
}
function Jc(e, t, r) {
  return Be(new $n(e, t, r));
}
function bk(e) {
  return e?.tagName.toLowerCase() === Za;
}
function qe(e) {
  return e instanceof $n;
}
const mp = 1, kk = "attribute-run";
function xa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class wr extends er {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new wr(r, n);
  }
  static importJSON(t) {
    return yp(t.runKind).updateFromJSON(t);
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
    t.classList.add(kk);
    const r = xa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = xa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = xa(this.__runKind);
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
      version: mp
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
function yp(e) {
  return Be(new wr(e));
}
function ze(e) {
  return e instanceof wr;
}
const ss = "id", bp = 1, Tk = [
  "type",
  "marker",
  "code",
  "content"
];
class jt extends er {
  __marker = ss;
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
    return kp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Py(t);
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
      version: bp
    };
  }
}
function kp(e, t) {
  return Be(new jt(e, t));
}
function gt(e) {
  return e instanceof jt;
}
function Tp(e) {
  return e?.type === jt.getType();
}
const ao = "c", xp = 1, xk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class wt extends er {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = ao, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new wt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return vp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(io, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: xp
    };
  }
}
function vp(e, t, r, n, i) {
  return Be(new wt(e, t, r, n, i));
}
function _e(e) {
  return e instanceof wt;
}
function vk(e) {
  return e?.type === wt.getType();
}
const _p = [
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
], Cp = [
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
], _k = [
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
  ..._p,
  ...Cp
], Sp = 1, Ck = ["type", "marker", "content"];
class ke extends er {
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
    return new ke(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (_k.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && _p.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Cp.includes(t);
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
    return ke.isValidFootnoteMarker(t) || ke.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Mk(t) ? {
        conversion: Sk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return _r().updateFromJSON(t);
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
    return Eu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Eu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Rn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Sp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = _r(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Eu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Sk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: _r(t) };
}
function _r(e, t) {
  return Be(new ke(e, t));
}
function Mk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ke.isValidMarker(t) && e.classList.contains(ke.getType());
}
function I(e) {
  return e instanceof ke;
}
function Ek(e) {
  return e?.type === ke.getType();
}
const Mp = 1, Ak = "c", Ep = "span";
class dr extends Ts {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Ak, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new dr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Ap(t) ? {
        conversion: Pk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Yc().updateFromJSON(t);
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
    const t = document.createElement(Ep);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(io, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Rn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(io, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Kt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Mp
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
function Pk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Yc(t) };
}
function Yc(e, t, r, n, i, s) {
  return Be(new dr(e, t, r, n, i, s));
}
function Ap(e) {
  return e ? e.classList.contains(io) && e.tagName.toLowerCase() === Ep : !1;
}
function Es(e) {
  return e instanceof dr;
}
function Nk(e) {
  return e?.type === dr.getType();
}
const Pp = 1;
class Yr extends Dc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Yr(t.__key);
  }
  static importJSON(t) {
    return Jt().updateFromJSON(t);
  }
  getMarker() {
    return or;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Pp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Jt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Jt() {
  return Be(new Yr());
}
function lr(e) {
  return e instanceof Yr;
}
function Io(e) {
  return e?.type === Yr.getType();
}
const wk = [
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
  or,
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
], Np = 1, Ok = ["type", "marker", "content"];
class Xe extends Dc {
  __marker;
  __unknownAttributes;
  constructor(t = or, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new Xe(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (wk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: qk,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return os().updateFromJSON(t);
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
    return r && Rn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Np
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = os(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function qk(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = os(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function os(e, t) {
  return Be(new Xe(e, t));
}
function ie(e) {
  return e instanceof Xe;
}
function Xc(e) {
  return e?.type === Xe.getType();
}
const co = "v", wp = 1, Rk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class pt extends je {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = co, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Op().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Va, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: wp
    };
  }
}
function Op(e, t, r, n, i, s) {
  return Be(new pt(e, t, r, n, i, s));
}
function Me(e) {
  return e instanceof pt;
}
function qp(e) {
  return e?.type === pt.getType();
}
function Qc(e) {
  return I(Ti(e));
}
function lo(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Qc(t) : t.getChildren().some((i) => I(i) && i.getMarker() === r) ? !0 : void 0;
}
function $k(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = lo(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function As(e) {
  return S(e) && e.getType() === je.getType() && te(e, se) !== "attribute";
}
function Ik(e) {
  if (!As(e) || !e.getTextContent().startsWith(O))
    return 0;
  let t = e, r = t.getPreviousSibling(), n = t.getParent();
  for (; n && ge(n); )
    t = n, n = t.getParent(), r ??= t.getPreviousSibling();
  if (!I(n))
    return 0;
  for (; ge(r); )
    r = r.getLastChild();
  return !P(r) || r.getMarkerSyntax() !== "opening" || lo(r, n) === void 0 ? 0 : 1;
}
function Zc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || lo(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return P(r) ? lo(r, t) === !0 ? "spacer" : void 0 : As(r) ? r.getTextContent().startsWith(O) ? void 0 : "prefix" : "spacer";
}
function Lk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (P(t) && Zc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Rp(e, t) {
  const r = w();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function $p(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!P(t))
      return;
    const r = Zc(t, e);
    if (r !== void 0 && !Rp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        S(n) && n.setTextContent(O + n.getTextContent());
      } else
        t.insertAfter(ye(O));
  });
}
function Ip(e) {
  return e.isAttached() ? e.getChildren().some((t) => P(t) && Zc(t, e) !== void 0 && Rp(t, e)) : !1;
}
const Dk = "​", ui = Dk;
var Au;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Au || (Au = {}));
var Pu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Pu || (Pu = {}));
function Uk() {
  return ye(ui);
}
function Fk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ui, ""));
}
function Ps(e) {
  return e.length > 0 && e.includes(ui) && e.replaceAll(ui, "") === "";
}
function el(e) {
  return S(e) && Ps(e.getTextContent());
}
function Lp(e) {
  return vk(e) || Nk(e);
}
function We(e) {
  return _e(e) || Es(e);
}
function Dp(e, t) {
  return e.find((r) => We(r) && r.getNumber() === t.toString());
}
function Kk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && We(r));
}
function Nu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Up(e) {
  if (!e)
    return;
  if (We(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !We(t); )
    t = t.getPreviousSibling();
  if (t && We(t))
    return t;
}
function Qt(e) {
  return it(e, z) ?? void 0;
}
function zk(e) {
  return gt(e) || _e(e) || I(e) || Es(e) || lr(e) || Fe(e) || ie(e) || z(e) || Me(e) || qe(e);
}
function Fp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function jk(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function At(e) {
  return Ee(e) || gt(e);
}
function Ee(e) {
  return ie(e) || lr(e);
}
function Bk(e) {
  return Xc(e) || Io(e);
}
function uo(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Mn(e, t) {
  const r = te(t, Sn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Vk(e, t) {
  const r = $(e) ? e : e.getParent(), n = $(t) ? t : t.getParent(), i = r && n ? Ly(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Wk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function En(e) {
  return e?.type === je.getType();
}
function Hk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Gk(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Ae(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function nt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Kp(e, t, r) {
  const n = Ae(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Kt(e, t) {
  let r = Ae(e);
  return t && (r += `${O}${t}`), r += " ", r;
}
function Jk(e) {
  const t = e[xs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function zp(e) {
  return Ns(e) || pp(e) && e.textType === "marker" || En(e) && Jk(e) === "attribute" ? "" : En(e) && e.text !== O ? e.text : Ek(e) ? e.children.map((t) => zp(t)).join("") : "";
}
function Yk(e) {
  return e.map((r) => zp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Pt(e) {
  return " " + e + O;
}
function tl(e) {
  const t = [];
  for (const r of e) {
    if (!I(r))
      continue;
    const n = jp(r);
    n !== zt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function jp(e) {
  return P(e) || Or(e) || S(e) && te(e, se) === "attribute" ? "" : S(e) ? e.getTextContent() : $(e) ? e.getChildren().map((t) => jp(t)).join("") : "";
}
function Or(e) {
  return Ct(e) && e.getTextType() === "marker";
}
function Bt(e) {
  return P(e) || Or(e);
}
function wu(e, t) {
  Xk(e, t), e.setMarker(t);
}
function Xk(e, t) {
  const r = e.getMarker(), n = Ae(r), i = Ae(r, !0), s = nt(r), o = nt(r, !0), a = ke.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Bt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (P(c))
        c.setMarker(t);
      else if (Or(c)) {
        const f = l.startsWith(Ae("", !0));
        c.setTextContent(u ? Ae(t, f) : nt(t, f));
      }
    }
  });
}
function Ke(e, t = Ny) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Re(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Bp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function rl(e) {
  if (!N(e))
    return Ou(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !$(t) || e.anchor.type === "text" && !S(t)))
    return t ?? void 0;
  try {
    return Ou(e) ?? t ?? void 0;
  } catch (n) {
    if (Bp(n))
      return t ?? void 0;
    throw n;
  }
}
function Qk(e, t) {
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
function nl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Vp(e) {
  return !!e && e.includes("-");
}
function Wp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Ou(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function il(e) {
  if (!e)
    return !1;
  if (Po(e) || P(e) || Or(e) || ze(e) || e.getType() === Cs || Ct(e) && e.getTextType() === "attribute")
    return !0;
  const t = Ti(e);
  if (_e(t) || S(e) && z(t) && Xr(t)?.is(e))
    return !0;
  if (S(e)) {
    const r = te(e, se);
    if (r === ur || r === "attribute")
      return !0;
    const n = e.getTextContent();
    if (n === "" || n === O || Ps(n))
      return !0;
  }
  return !1;
}
function Lo() {
  const e = ye(O);
  return Tt(e, se, ur), e.setMode("token"), e;
}
function Zk(e) {
  const t = e.getTextContent();
  t.startsWith(O) || e.setTextContent(O + t);
}
function In(e) {
  return S(e) && te(e, se) === ur;
}
function Hp(e) {
  const t = e.getFirstChild();
  if (!Bt(t) || t === null || In(t.getNextSibling()))
    return !1;
  const r = w();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function fr(e) {
  if (_e(e))
    return [];
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!il(s)) {
      if (ge(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (S(s) && s.getType() === je.getType()) {
        const o = Ik(s);
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length, lead: o }), r.length += s.getTextContentSize() - o;
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function Ti(e) {
  let t = e.getParent();
  for (; t && ge(t); )
    t = t.getParent();
  return t;
}
function eT(e, t) {
  return fr(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function tT(e, t) {
  const r = Ti(e);
  if (!r)
    return;
  const n = fr(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + Math.max(0, t - o.lead) };
  }
}
function rT(e, t) {
  if (t < 0 || t > e.length)
    return;
  for (const n of e.segments) {
    const i = n.node.getTextContentSize() - n.lead;
    if (t >= n.start && t < n.start + i)
      return [n.node, t - n.start + n.lead];
  }
  const r = e.segments[e.segments.length - 1];
  if (r)
    return [r.node, t - r.start + r.lead];
}
function Gp(e, t) {
  const r = fr(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (il(n))
    return Gp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || uo(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || uo(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function nT(e, t) {
  if (t <= 0)
    return 0;
  const r = fr(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? iT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function iT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const sT = 1;
class pr extends je {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(yn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new pr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || yn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = yn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = yn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = yn(r.__marker, r.__markerSyntax, t), r;
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
  return Be(new pr(e, t, void 0, r));
}
function P(e) {
  return e instanceof pr;
}
function Ns(e) {
  return e?.type === pr.getType();
}
function sn(e) {
  return e.getTextContent() === yn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function oT(e) {
  e.setTextContent(yn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function yn(e, t, r = !1) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Ae(e, r);
}
const aT = /* @__PURE__ */ new Set(["closed"]);
function sr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !aT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Jp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Yp(e) {
  const t = Object.keys(e).filter((n) => !qb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Xp(e, t, r, n) {
  return Jp(
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
function Yi(e) {
  return e.getChildren().find((t) => P(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function cT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Yi(e) === void 0 && Qp(e) === void 0;
}
function Qp(e) {
  return e.getChildren().find((t) => S(t) && te(t, se) === "attribute");
}
function as(e, t) {
  return ws(e.getNextSibling(), t);
}
const lT = /^[ \u00A0]+$/;
function sl(e) {
  if (sn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ae(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && lT.test(r.slice(t.length));
}
function ws(e, t) {
  let r, n, i, s;
  return ze(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), P(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  sl(e) && (r = e, e = e.getNextSibling()), S(e) && te(e, se) === "attribute" && (n = e, e = e.getNextSibling()), P(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && sn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function uT(e) {
  let t = e;
  for (; ge(t); )
    t = t.getChildren()[0];
  return t;
}
function Xr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!P(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = uT(t[r]);
  if (S(n) && n.getTextContent() === Pt(e.getCaller()))
    return n;
}
function Zp(e) {
  const t = Xr(e);
  return t ? ws(t.getNextSibling(), "cat") : {};
}
function xi(e) {
  const t = e.getFirstChild();
  if (!(!S(t) || P(t)) && te(t, se) !== "attribute")
    return t;
}
function eh(e) {
  const t = xi(e);
  return t ? ws(t.getNextSibling(), "ca") : {};
}
function th(e) {
  const t = xi(e);
  if (!t)
    return;
  const r = ws(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function rh(e) {
  const t = th(e);
  return t ? ws(t.getNextSibling(), "cp") : {};
}
function nh(e) {
  const t = e.getParent();
  if (!I(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Me(n))
        return n;
      if (!(P(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || S(n) && te(n, se) === "attribute" || I(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || ze(n)))
        return;
    }
}
function Do(e) {
  let t, r, n, i, s = e.getNextSibling();
  return ze(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), P(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  sl(s) && (t = s, s = s.getNextSibling()), S(s) && te(s, se) === "attribute" && (r = s, s = s.getNextSibling()), P(s) && s.getMarkerSyntax() === "selfClosing" && sn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
const dT = "file", fT = "src", pT = "colspan", hT = "category", gT = "alt", mT = "closed", yT = "false";
function bT(e) {
  return e[mT] !== yT;
}
function kT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === dT ? fT : t,
    r
  ]));
}
function TT(e, t) {
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
function ol(e, t, r) {
  const n = r ?? {}, i = bT(n);
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
        opening: `\\${TT(t, n[pT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: sr(kT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [hT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + sr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [gT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: sr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: sr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const vt = { wantsRun: !1, valueText: void 0 }, qr = {};
function va(e, t) {
  if (t === "va")
    return e;
  const r = as(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function al(e) {
  const t = w();
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
function Uo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = w();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function xT(e) {
  return ze(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : P(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : S(e) && te(e, se) === "attribute";
}
function vT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!S(e) || te(e, se) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function _a(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Me(t))
      return t;
    if (!xT(t))
      return;
  }
}
function qu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Me(t),
    ownerOf: (t) => {
      if (ze(t))
        return t.getRunKind() === e ? _a(t) : void 0;
      const r = t.getParent();
      return ze(r) ? r.getRunKind() === e ? _a(r) : void 0 : vT(t) === e ? _a(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Me(t))
        return vt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? vt : { wantsRun: !0, valueText: O + r };
    },
    scanPieces: (t) => Me(t) ? as(va(t, e), e) : qr,
    graceSite: (t, r) => Me(t) ? !r.opener && !r.closer ? al(va(t, e)) : Uo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Me(t) ? va(t, e) : void 0
    }
  };
}
const _T = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => qr,
  graceSite: (e) => I(e) && Ip(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, CT = {
  kind: "char",
  ownerPredicate: (e) => I(e),
  ownerOf: (e) => {
    if (!S(e) || te(e, se) !== "attribute")
      return;
    const t = e.getParent();
    return I(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!I(e) || Yi(e) === void 0)
      return vt;
    const t = sr(e.getUnknownAttributes() ?? {}, Ss(e.getMarker()));
    return t === "" ? vt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => I(e) ? { value: Qp(e) } : qr,
  graceSite: (e, t) => {
    if (!I(e) || t.value)
      return !1;
    const r = Yi(e);
    if (!r)
      return !1;
    const n = w();
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
    insertRunBefore: (e) => I(e) ? Yi(e) : void 0
  }
};
function ih(e) {
  if (P(e))
    return e.getMarker() === "cat";
  if (!S(e) || te(e, se) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return P(t) && t.getMarker() === "cat";
}
function ST(e) {
  const t = e.getParent();
  if (!z(t))
    return;
  const r = Xr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!ih(n))
        return;
    }
}
const MT = {
  kind: "cat",
  ownerPredicate: (e) => z(e),
  ownerOf: (e) => {
    if (ze(e))
      return e.getRunKind() === "cat" && z(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return ze(t) ? t.getRunKind() === "cat" && z(t.getParent()) ? t.getParent() ?? void 0 : void 0 : ih(e) ? ST(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!z(e) || e.getIsCollapsed() !== !1)
      return vt;
    const t = e.getCategory();
    return t === void 0 ? vt : { wantsRun: !0, valueText: O + t };
  },
  scanPieces: (e) => z(e) ? Zp(e) : qr,
  graceSite: (e, t) => {
    if (!z(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Xr(e);
      return r !== void 0 && al(r);
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
    insertRunAfter: (e) => z(e) ? Xr(e) : void 0
  }
};
function ET(e) {
  return ze(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : P(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : S(e) && te(e, se) === "attribute";
}
function AT(e) {
  if (P(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!S(e) || te(e, se) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!P(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function PT(e) {
  const t = e.getParent();
  if (!_e(t))
    return;
  const r = xi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!ET(n))
        return;
    }
}
function Ru(e) {
  const t = (r) => _e(r) ? e === "ca" ? xi(r) : th(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => _e(r),
    ownerOf: (r) => {
      if (ze(r))
        return r.getRunKind() === e && _e(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return ze(n) ? n.getRunKind() === e && _e(n.getParent()) ? n.getParent() ?? void 0 : void 0 : AT(r) === e ? PT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!_e(r))
        return vt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? vt : { wantsRun: !0, valueText: O + n };
    },
    scanPieces: (r) => _e(r) ? e === "ca" ? eh(r) : rh(r) : qr,
    graceSite: (r, n) => {
      if (!_e(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && al(i);
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
function sh(e) {
  if (P(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return S(e) && te(e, se) === "attribute";
}
function NT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Fe(t)) {
      const r = P(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!sh(t))
      return;
  }
}
const wT = {
  kind: "milestone",
  ownerPredicate: (e) => Fe(e),
  ownerOf: (e) => {
    const t = ze(e) ? e.getRunKind() === "milestone" ? e : void 0 : ze(e.getParent()) ? e.getParent() : sh(e) ? e : void 0;
    if (!t || ze(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return ze(t) ? Fe(r) ? r : void 0 : NT(t);
  },
  expectedPieces: (e) => {
    if (!Fe(e))
      return vt;
    const t = Xp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = sr(t, Ms(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : O + r };
  },
  scanPieces: (e) => {
    if (!Fe(e))
      return qr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Do(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Fe(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = w();
      if (!N(r) || !r.isCollapsed())
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
    glyphMarker: (e) => Fe(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, OT = ol("optbreak", void 0, void 0).opening, qT = {
  kind: "optbreak",
  ownerPredicate: (e) => qe(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!qe(t) || t.getTag() !== "optbreak"))
      return S(e) || Ct(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: OT }),
  scanPieces: (e) => qe(e) ? { value: e.getFirstChild() ?? void 0 } : qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, RT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => qe(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, $T = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => vt,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, cs = [
  _T,
  CT,
  qu("va"),
  qu("vp"),
  MT,
  Ru("ca"),
  Ru("cp"),
  wT,
  qT,
  RT,
  $T
], IT = new Map(cs.map((e) => [e.kind, e]));
function Cr(e) {
  const t = IT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Qr(e) {
  for (const t of cs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function oh(e) {
  return Qr(e) !== void 0;
}
const fo = "unmatched", ah = 2;
function Xi(e) {
  return `\\${e}`;
}
class Rr extends je {
  __marker;
  constructor(t = "", r) {
    super(Xi(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Rr(r, n);
  }
  static importDOM() {
    return {
      [fo]: (t) => DT(t) ? {
        conversion: LT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return cl().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Xi(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Xi(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(ku), r.title = $u(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = $u(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(fo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(ku), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: ah
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function ch(e) {
  return e.getTextContent() === Xi(e.getMarker());
}
function $u(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function LT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: cl(t) };
}
function cl(e) {
  return Be(new Rr(e));
}
function DT(e) {
  return e?.tagName.toLowerCase() === fo;
}
function on(e) {
  return e instanceof Rr;
}
const lh = "table", ec = "immutable-table", uh = 1, UT = ["type", "marker", "content"];
class Ln extends er {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return ec;
  }
  static clone(t) {
    return new Ln(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return FT().updateFromJSON(t);
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
      type: ec,
      ...t !== void 0 && { unknownAttributes: t },
      version: uh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function FT(e) {
  return Be(new Ln(e));
}
function dh(e) {
  return e instanceof Ln;
}
function KT(e) {
  return e?.type === ec;
}
const fh = "table:row", Iu = "immutable-table-row", ph = 1, tc = "tr", zT = ["type", "marker", "content"];
class vi extends er {
  __marker;
  __unknownAttributes;
  constructor(t = tc, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Iu;
  }
  static clone(t) {
    return new vi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return jT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? tc).setUnknownAttributes(t.unknownAttributes);
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
      type: Iu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: ph
    };
  }
}
function jT(e, t) {
  return Be(new vi(e, t));
}
const hh = "table:cell", Lu = "immutable-table-cell", gh = 1, rc = "tc1", BT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function VT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class _i extends er {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = rc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Lu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new _i(r, n, i, s, o);
  }
  static importJSON(t) {
    return WT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? rc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = VT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Lu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: gh
    };
  }
}
function WT(e, t, r, n) {
  return Be(new _i(e, t, r, n));
}
function Fo(e, t) {
  const r = e.getChildAtIndex(t);
  return S(r) ? r : void 0;
}
function Zt(e, t) {
  const r = Fo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function ls(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function HT(e) {
  return e.getChildren().some((t) => P(t) && t.getMarkerSyntax() === "closing");
}
function GT(e) {
  return ls(e) ? void 0 : { closed: "false" };
}
function JT(e, t, r, n) {
  const i = t.getMarker(), s = Qc(t), o = HT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    As(a) && !a.getTextContent().startsWith(O) && a.setTextContent(O + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function An(e) {
  return it(e, I) ?? void 0;
}
function ll(e) {
  let t = e.getParent();
  for (; I(t); )
    t = t.getParent();
  return t;
}
function nc(e) {
  const t = mh(e);
  return e.getChildren().every((r) => P(r) || t && te(r, se) === "attribute" || S(r) && r.getTextContent().replaceAll(O, "") === "");
}
function mh(e) {
  return ls(e);
}
function YT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? sr(r, Ss(e.getMarker())) : "";
  n !== "" && t.insertAfter(ye(n)), e.remove();
}
function XT(e, t) {
  if (ls(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", Qc(e)));
}
function QT(e, t) {
  return I(e) && !ls(e) && !ls(t);
}
function ZT(e, t, r) {
  nc(e) && e.getChildren().forEach((i) => {
    P(i) || i.remove();
  });
  const [n] = t;
  r && As(n) && !n.getTextContent().startsWith(O) && n.setTextContent(O + n.getTextContent()), e.append(...t);
}
function ex(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = mh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = P(l) && l.getMarkerSyntax() === "closing", f = s && te(l, se) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = QT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      ZT(e, o, n);
    else {
      const l = _r(t.getMarker(), GT(t));
      JT(l, t, o, n), e.insertAfter(l), nc(l) ? l.remove() : c = l;
    }
  i && !a && XT(t, n), nc(t) && YT(t, c);
}
function di(e, t) {
  let r = e.getParent();
  for (; I(r); )
    ex(e, r, t), r = e.getParent();
}
function ul(e) {
  if (S(e) && !P(e)) {
    const t = e.getTextContent().startsWith(O) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if ($(e)) {
    const t = e.getChildren().find((r) => !P(r));
    if (t) {
      ul(t);
      return;
    }
    e.selectEnd();
  }
}
const ci = /* @__PURE__ */ new WeakMap();
function tx(e, t) {
  return ci.set(e, t), () => {
    ci.get(e) === t && ci.delete(e);
  };
}
function Ca(e) {
  return ci.get(e);
}
function rx(e) {
  return ci.get(vs())?.has(e.getKey()) ?? !1;
}
function nx(e) {
  ci.get(vs())?.add(e.getKey());
}
function ix(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function ic(e) {
  return !!(e.opener || e.value || e.closer);
}
function Du(e) {
  return /^\s/.test(e);
}
function dl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Du(t) || !Du(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Ko(e, t, r) {
  return r.wantsRun ? dl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : ix(t);
}
function sx(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return dl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function yh(e, t) {
  return !ic(e.scanPieces(t));
}
function Os(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Ko(e, n, r))
    return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || uo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function ox(e, t, r, n) {
  return !r.wantsRun || ic(n) || Dy(ns) ? !1 : vs().getEditorState().read(() => {
    const i = Q(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : ic(e.scanPieces(i));
  });
}
function ax(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Uu(e) {
  const t = ye(e);
  return Tt(t, se, "attribute"), t;
}
function cx(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = yp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function lx(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    S(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Uu(n.valueText));
    return;
  }
  const l = cx(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : S(d) ? dl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Uu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function us(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Ko(e, i, n) && !rx(t)) {
    if (ox(e, t, n, i)) {
      nx(t);
      return;
    }
    if (!Os(e, t)) {
      if (!n.wantsRun) {
        ax(i);
        return;
      }
      lx(e, t, i, n);
    }
  }
}
function ux(e, t, r) {
  us(e, t), t.isAttached() && Os(e, t) && r.add(t.getKey());
}
function bh(e) {
  if (!S(e))
    return !1;
  if (P(e) || Me(e) || on(e))
    return !0;
  const t = te(e, se);
  return t === "attribute" || t === ur;
}
function fl(e, t) {
  return P(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && sn(e) && I(e.getParent())) : !1;
}
function dx() {
  const e = w();
  return N(e) ? fl(e.focus.getNode(), e.focus.offset) : !1;
}
function kh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return S(t) && bh(t) ? t : void 0;
}
function fx(e) {
  const t = kh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function px(e) {
  const t = kh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Fu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Ku(e, t) {
  e.set(t.key, t.offset, t.type);
}
function hx(e, t) {
  let r = px(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!S(n))
      return;
    if (!bh(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function zu(e, t) {
  const r = hx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Th(e) {
  if (e.isCollapsed()) {
    const a = fx(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Fu(r), Fu(n)], s = zu(r, "next"), o = zu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Ku(r, i[0]), Ku(n, i[1]), !1) : !0;
}
const po = "verse-block", xh = 1, gx = "verse-block";
class Ci extends er {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return po;
  }
  static clone(t) {
    return new Ci(t.__number, t.__key);
  }
  static importJSON(t) {
    return mx().updateFromJSON(t);
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
    return Wp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(gx), ju(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && ju(r, this.__number), !1;
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
      type: po,
      number: this.getNumber(),
      version: xh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function ju(e, t) {
  const { start: r, end: n } = Wp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Bu(e, "data-verse-start", i ? r : NaN), Bu(e, "data-verse-end", i ? n : NaN);
}
function Bu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function mx(e) {
  return Be(new Ci(e));
}
function ds(e) {
  return e instanceof Ci;
}
function yx(e) {
  return e?.type === po;
}
const bx = [
  jt,
  dr,
  wt,
  pt,
  ke,
  we,
  Xt,
  pr,
  $n,
  Nr,
  Rr,
  Xe,
  Yr,
  Ln,
  vi,
  _i,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  wr,
  {
    replace: Dc,
    with: () => Jt(),
    withKlass: Yr
  }
], ho = {
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
}, kx = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function Tx(e) {
  if (!e)
    return ar;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: ar(r)?.category ?? k.Uncategorized,
      type: kx[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ar(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Vu(e, t, r) {
  const n = {
    type: xr,
    version: Tr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Io(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const vh = "v", _h = 1, xx = "verse-selected";
class St extends Ts {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = vh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new St(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Cx(t) ? {
        conversion: _x,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return pl().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Va, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Rn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Va, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Kt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      ro + this.getNumber() + ro
    );
    return _(vx, { nodeKey: this.getKey(), text: t });
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
      version: _h
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Bp(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function vx({ nodeKey: e, text: t }) {
  const [r] = rb(e);
  return _("span", { className: r ? xx : void 0, children: t });
}
function _x(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: pl(t) };
}
function pl(e, t, r, n, i, s) {
  return Be(new St(e, t, r, n, i, s));
}
function Cx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === vh;
}
function Dn(e) {
  return e instanceof St;
}
function Sx(e) {
  return e?.type === St.getType();
}
function be(e) {
  return Me(e) || Dn(e);
}
function Ch(e) {
  return qp(e) || Sx(e);
}
function Mx(e) {
  return Ex(e).find((t) => ie(t));
}
function Ex(e) {
  return e.some(ds) ? e.flatMap((t) => ds(t) ? t.getChildren() : t) : e;
}
function zo(e) {
  return $(e) ? ds(e) ? e.getChildren().flatMap(zo) : e.getChildren() : [];
}
function Ax(e, t) {
  return zo(e).find((i) => be(i) && nl(t, i.getNumber()));
}
function Px(e, t) {
  return t === 0 ? Mx(e) : e.map((r) => Ax(r, t)).filter((r) => r)[0];
}
function go(e) {
  return zo(e).find((r) => be(r));
}
function Sh(e, t) {
  if (!$(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (be(i))
      return i;
  }
}
function Nx(e) {
  const t = e.getParent();
  if (t && $(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (be(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !We(r); ) {
    const n = go(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function sc(e) {
  return zo(e).findLast((t) => be(t));
}
function wx(e) {
  if (!Me(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Ox(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && $(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function qx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Ox(t, e, r);
  if (S(e)) {
    const n = wx(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Wu(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Rx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return Wu(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return qx(e, t) ? { verseNum: n } : Wu(e);
}
function $x(e) {
  return zk(e) || Dn(e);
}
function hl(e) {
  if (S(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(O) && e.setTextContent(`${t} `);
  }
}
function Mh(e) {
  if (S(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Eh(e, t) {
  return e.getEditorState().read(() => !Q(t));
}
function Ix(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = gl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && $(i) && $(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && $(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (be(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = Hu(i);
      for (; s && !We(s); ) {
        const o = go(s);
        if (o) {
          n = o;
          break;
        }
        s = Hu(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = go(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && We(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Lx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = gl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && $(i) && (n = Sh(i, r.getIndexWithinParent())), !n && i) {
      let o = Gu(i);
      for (; o && !We(o); ) {
        const a = sc(o);
        if (a) {
          n = a;
          break;
        }
        o = Gu(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !We(s); ) {
      const o = sc(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Hu(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Gu(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function gl(e, t) {
  if ($(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && be(n))
      return n;
    const i = Sh(e, t.anchor.offset);
    if (i)
      return i;
    const s = go(e);
    if (s)
      return s;
  }
  return ml(e);
}
function ml(e) {
  if (!e || We(e))
    return;
  if (be(e))
    return e;
  let t = Nu(e);
  for (; t; ) {
    if (We(t))
      return;
    if (be(t))
      return t;
    const r = sc(t);
    if (r)
      return r;
    t = Nu(t);
  }
}
const Dx = ["style"], Ux = ["style", "code"], mo = ["style", "cid"], Fx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Kx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], zx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], jx = ["style", "caller", "category", "contents"], Bx = ["tag", "marker", "contents"], Vx = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], fs = `
`;
function Wx(e, t) {
  const r = Q(e);
  if (!Nt(r))
    return;
  const n = Ah(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Ah(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Vf();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (fi(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      fi(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Sr(l) || Nt(l))
        return n;
      At(l) && (a = l);
    }
    if (At(l) && (i.includes(l) || i.push(l)), Ph(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += yl(l, t);
  }
  if (a)
    return n;
}
function Ju(e, t, r = "delta-doc") {
  if (e.length < 2 || !Jx(e[0]) || !Gx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Hx(n, r)?.getKey());
}
function Hx(e, t = "delta-doc") {
  const r = Vf();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (fi(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      fi(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (At(a) && (i.includes(a) || i.push(a)), Ph(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = yl(a, t);
    if (Sr(a) && l > 0 && e >= n && e < n + l || Nt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function fi(e, t) {
  return e ? t ? !uo(t.node, e.getKey()) : !0 : !1;
}
function Sr(e) {
  return S(e) && !Nt(e);
}
function Nt(e) {
  return We(e) || be(e) || Fe(e) || z(e) || qe(e) || on(e);
}
function zr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Gx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Vx.includes(t);
}
function Jx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Ph(e, t) {
  return z(e) || qe(e) ? !0 : t === "apply" && $(e) && Nt(e);
}
function Nh(e) {
  const t = e.getParent();
  return Bt(e) && ie(t) && t.getFirstChild() === e;
}
function oc(e) {
  const t = e.getParent();
  return t !== null && it(t, ze) !== null;
}
function Yx(e) {
  const t = e.getParent();
  return I(t) && e.getTextContent() === zt && t.getChildrenSize() === 1;
}
function Xx(e) {
  const t = e.getParent();
  if (!z(t))
    return !1;
  const r = e.getPreviousSibling();
  return P(r) && r === t.getFirstChild() && e.getTextContent() === Pt(t.getCaller());
}
function Qx(e) {
  return !oh(e) && yl(e, "delta-doc") === e.getTextContentSize();
}
function yl(e, t) {
  if (Nt(e))
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
    (el(e) || Nh(e) || te(e, se) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    te(e, se) === "attribute" || oc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(jc) || Yx(e) || Xx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function ac(e, t) {
  const r = { insert: e.__text }, n = te(e, Jr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = wh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Yu(e) {
  const t = new Wi();
  return e.isEmpty() || e.read(() => {
    const r = Se();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && lr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Zx();
    for (const s of i)
      t.push(s);
  }), t;
}
function bl(e, t) {
  const r = [], n = ki(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Xu(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Xu(c, n.length, n, i, s, o, a));
  return r;
}
function Zx() {
  return bl();
}
function Xu(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return ev(e, a, n), tv(e, a, i, s, o), rv(e, t, r, i, o, s, a), We(e) && a.push(ov(e)), be(e) && a.push(cv(e)), Fe(e) && a.push(lv(e)), on(e) && a.push(uv(e)), iv(e, a, s), nv(e, a, s), hv(c, s), a;
}
function ev(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    gt(n) ? t.push(sv(n)) : ie(n) ? t.push(av(n)) : lr(n) && t.push({ insert: fs });
  }
  At(e) && (r.includes(e) || r.push(e));
}
function tv(e, t, r, n, i) {
  if (!S(e) || Me(e) || on(e))
    return;
  const s = e.getParent();
  if (z(s) && s.getFirstChild() === e)
    return;
  const o = Qt(e) !== void 0;
  if (P(e) && (o || Nh(e) || oc(e) || oh(e)) || te(e, se) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Ps(a))
    return;
  const c = e.getPreviousSibling();
  if (z(s) && P(c) && c === s.getFirstChild() && a === Pt(s.getCaller()))
    return;
  const l = I(s) ? s : void 0, u = l?.getFirstChild();
  o && l && P(u) && c === u && a.startsWith(O) && (a = a.slice(1));
  const d = a.startsWith(jc) || te(e, se) === "attribute" || oc(e), f = !!l && a === zt && l.getChildrenSize() === 1, p = jo(e, n), g = p ? r.filter((v) => p.children.includes(v)) : r, m = ac(e, g);
  if (m.insert = a, p) {
    if (!a || a === O || d)
      return;
    p.contentsOps?.push(m);
  } else
    f || d || t.push(m);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const v of r)
      i.add(v);
}
function rv(e, t, r, n, i, s, o) {
  I(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (fi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = fv(c), u = jo(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function nv(e, t, r) {
  if (!z(e))
    return;
  const n = dv(e), i = jo(e, r), s = {
    node: e,
    children: ki(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function iv(e, t, r) {
  if (!qe(e))
    return;
  const n = pv(e), i = jo(e, r), s = {
    node: e,
    children: ki(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function an(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function sv(e) {
  const t = { style: ss, code: e.__code };
  return an(t, e), { insert: fs, attributes: { book: t } };
}
function ov(e) {
  const t = { style: ao, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), an(t, e), { insert: { chapter: t } };
}
function av(e) {
  const t = { style: e.__marker };
  return an(t, e), { insert: fs, attributes: { para: t } };
}
function cv(e) {
  const t = { style: co, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), an(t, e), { insert: { verse: t } };
}
function lv(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), an(t, e), { insert: { milestone: t } };
}
function uv(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function dv(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), an(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = te(e, Jr);
  return n && (r.attributes = { segment: n }), r;
}
function fv(e) {
  const t = { insert: "" }, r = wh([e]);
  return r && (t.attributes = { char: r }), t;
}
function pv(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), an(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function jo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function hv(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    fi(t[r].node, e) && t.splice(r, 1);
}
function wh(e) {
  if (e.length === 0)
    return;
  const t = e.map(gv);
  return t.length === 1 ? t[0] : t;
}
function gv(e) {
  const t = { style: e.__marker }, r = te(e, Sn);
  return r && (t.cid = r), an(t, e), t;
}
const Oh = 1;
class Yt extends Ts {
  __caller;
  __previewText;
  __onClick;
  constructor(t = no, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return Cs;
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Yt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => yv(t) ? {
        conversion: mv,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return kl().updateFromJSON(t);
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
    return r && Rn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => bv(t, n), (l) => kv(t, n, s, l), () => Tv(t, n), () => xv(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === no && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === ep && i ? (
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
      version: Oh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function mv(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: kl(t, r) };
}
function kl(e, t, r) {
  return Be(new Yt(e, t, r));
}
function yv(e) {
  return e ? e.classList.contains(Yt.getType()) : !1;
}
function hr(e) {
  return e instanceof Yt;
}
function bv(e, t) {
  return e.getEditorState().read(() => {
    const r = Q(t);
    if (!z(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function kv(e, t, r, n) {
  e.update(() => {
    const i = Q(t);
    if (!z(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = Q(r);
    if (!hr(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function Tv(e, t) {
  return e.getEditorState().read(() => {
    const r = Q(t);
    if (!z(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return bl(r);
  });
}
function xv(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of ki())
      if (z(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const vv = [
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
], _v = ["†"];
function Tl(e) {
  if (Ih())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = lc(t), [s, o] = lc(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = td(n, i), [s, o] = td(s, o);
  const a = No();
  return a.anchor = mu(n.getKey(), i, rd(n)), a.focus = mu(s.getKey(), o, rd(s)), a;
}
function xl() {
  if (Ih())
    return;
  const e = w();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Mr(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Mr(i, s);
  return { start: n, end: o };
}
const vl = {
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
}, Cv = new Map(Object.values(vl).flatMap((e) => e ? [[e.markerName, e.keyName]] : [])), Qu = {
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
}, Sv = (
  // `Object.keys` widens to `string[]`; the mapped type above is what guarantees every key is one.
  Object.keys(Qu).filter((e) => Qu[e])
), Mv = /([^\s="|]+)="([^"]*)"/g, Ev = /^[ \u00A0]*\\([^\s\\*]+)[ \u00A0]/;
function Av(e, t) {
  return `${e}['${t}']`;
}
function li(e) {
  return [
    { start: 0, base: 0, bytes: { kind: "marker" } },
    { start: e, base: 0, bytes: { kind: "property", property: "marker" } }
  ];
}
function Qi(e) {
  return [
    {
      start: 0,
      base: 0,
      bytes: e === void 0 ? { kind: "closingMarker" } : { kind: "closingAttributeMarker", keyName: e }
    }
  ];
}
function _l(e) {
  const t = Qr(e);
  if (!t)
    return;
  const r = Cr(t.kind).scanPieces(t.owner);
  if (r.opener?.is(e))
    return { ...t, role: "opener" };
  if (r.value?.is(e))
    return { ...t, role: "value" };
  if (r.closer?.is(e))
    return { ...t, role: "closer" };
}
function cc(e, t, r) {
  const n = [];
  for (const i of e.slice(t).matchAll(Mv)) {
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
function Pv(e, t) {
  const r = Ev.exec(e);
  if (!r)
    return [];
  const n = r[1], i = r[0].length - n.length - 2, s = Cv.get(n) ?? n, o = [];
  i > 0 && o.push({
    start: 0,
    base: t,
    bytes: { kind: "property", property: "marker" }
  }), o.push({ start: i, base: 0, bytes: { kind: "attributeMarker", keyName: s } }), o.push({ start: i + 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }), o.push({ start: r[0].length, base: 0, bytes: { kind: "property", property: s } });
  const a = e.lastIndexOf(`\\${n}*`);
  return a > r[0].length && o.push({ start: a, base: 0, bytes: { kind: "closingAttributeMarker", keyName: s } }), o;
}
function qh(e) {
  const t = e.getParent();
  if (!t || !$(t))
    return e;
  const r = Lv(e);
  return r && !At(r) && !S(r) && !ge(r) ? r : t;
}
function Nv(e) {
  const t = e.getTextContentSize(), r = _l(e);
  if (r && r.role !== "value") {
    const i = vl[r.kind];
    if (i) {
      const { keyName: s } = i;
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? Qi(s) : [
          { start: 0, base: 0, bytes: { kind: "attributeMarker", keyName: s } },
          { start: 1, base: 0, bytes: { kind: "attributeKey", keyName: s } }
        ]
      };
    }
    if (r.kind === "milestone")
      return {
        owner: r.owner,
        length: t,
        spans: r.role === "closer" ? Qi() : li(1)
      };
  }
  const n = e.getMarkerSyntax();
  return {
    owner: qh(e),
    length: t,
    spans: n === "opening" ? (
      // A nested span's `+` rides between the backslash and the marker name, so the name's
      // offsets start one byte later.
      li(e.getNested() ? 2 : 1)
    ) : Qi()
  };
}
function wv(e) {
  const t = e.getTextContent(), r = t.length, n = _l(e);
  if (n?.kind === "optbreak")
    return {
      owner: n.owner,
      length: r,
      spans: [{ start: 0, base: 0, bytes: { kind: "marker" } }]
    };
  const i = qh(e);
  if (gt(i)) {
    const s = Ae(i.getMarker()).length;
    if (t.startsWith(Ae(i.getMarker())))
      return {
        owner: i,
        length: r,
        spans: [
          ...li(1),
          { start: s + 1, base: 0, bytes: { kind: "property", property: "code" } }
        ]
      };
  }
  if (qe(i)) {
    const s = ol(i.getTag(), i.getMarker(), i.getUnknownAttributes());
    if (s.closing !== "" && t === s.closing)
      return { owner: i, length: r, spans: Qi() };
    if (s.opening !== "" && t === s.opening)
      return { owner: i, length: r, spans: li(1) };
  }
  return {
    owner: i,
    length: r,
    spans: t.endsWith("*") ? Qi() : li(t.startsWith("\\+") ? 2 : 1)
  };
}
function Ov(e) {
  const t = _l(e);
  if (t?.role !== "value")
    return;
  const { owner: r, kind: n } = t, i = e.getTextContent(), s = i.length, o = vl[n];
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
        ...cc(i, 1, I(r) ? Ss(r.getMarker()) : void 0)
      ]
    };
  if (n === "milestone" && Fe(r)) {
    const a = r.getMarker().length;
    return {
      owner: r,
      length: s,
      spans: [
        // A milestone has no text content of its own, so the separator and the `|` both keep
        // counting into its marker name's offset space.
        { start: 0, base: a, bytes: { kind: "property", property: "marker" } },
        ...cc(i, 2, Ms(r.getMarker()))
      ]
    };
  }
}
function qv(e) {
  const t = e.getParent();
  if (!qe(t))
    return;
  const r = e.getTextContent(), n = r.length, i = Pv(r, (t.getMarker() ?? "").length);
  if (i.length > 0)
    return { owner: t, length: n, spans: i };
  if (r.startsWith("|"))
    return {
      owner: t,
      length: n,
      spans: [
        { start: 0, base: 0, bytes: { kind: "precedingText" } },
        ...cc(r, 1, void 0)
      ]
    };
}
function Zu(e, t) {
  const r = Ae(e);
  if (t.startsWith(r))
    return [
      ...li(1),
      { start: r.length + 1, base: 0, bytes: { kind: "property", property: "number" } }
    ];
}
function Rh(e) {
  if (P(e))
    return Nv(e);
  if (Or(e))
    return wv(e);
  if (Ct(e) && e.getTextType() === "attribute")
    return qv(e);
  if (e.getType() === Cs) {
    const r = e.getParent();
    return z(r) ? {
      owner: r,
      length: e.getTextContentSize(),
      spans: [{ start: 0, base: 0, bytes: { kind: "property", property: "caller" } }]
    } : void 0;
  }
  if (Me(e)) {
    const r = Zu(e.getMarker(), e.getTextContent());
    return r ? { owner: e, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (!S(e))
    return;
  if (te(e, se) === "attribute")
    return Ov(e);
  const t = e.getParent();
  if (_e(t) && xi(t)?.is(e)) {
    const r = Zu(t.getMarker(), e.getTextContent());
    return r ? { owner: t, length: e.getTextContentSize(), spans: r } : void 0;
  }
  if (z(t) && Xr(t)?.is(e))
    return {
      owner: t,
      length: e.getTextContentSize(),
      spans: [
        // The caller's leading space is the space after the note's own marker, which counts into
        // that marker name's offset space.
        {
          start: 0,
          base: t.getMarker().length,
          bytes: { kind: "property", property: "marker" }
        },
        { start: 1, base: 0, bytes: { kind: "property", property: "caller" } }
      ]
    };
}
function $h(e) {
  return Or(e) || Ct(e) && e.getTextType() === "attribute" || e.getType() === Cs;
}
function Rv(e) {
  const t = [];
  if (Me(e) && t.push(e), $(e)) {
    const r = _e(e) ? xi(e) : void 0, n = z(e) ? Xr(e) : void 0;
    for (const i of e.getChildren())
      (P(i) || Or(i) || Ct(i) && i.getTextType() === "attribute" || i.getType() === Cs || r?.is(i) || n?.is(i)) && t.push(i);
  }
  for (const r of Sv) {
    const n = Cr(r);
    if (!n.ownerPredicate(e))
      continue;
    const { opener: i, value: s, closer: o } = n.scanPieces(e);
    i && t.push(i), s && t.push(s), o && t.push(o);
  }
  return t;
}
function $v(e, t) {
  return e.kind !== t.kind ? !1 : e.kind === "property" && t.kind === "property" ? e.property === t.property : (e.kind === "attributeKey" || e.kind === "attributeMarker" || e.kind === "closingAttributeMarker") && "keyName" in t ? e.keyName === t.keyName : !0;
}
function ed(e, t) {
  const r = Rh(e);
  if (!r || r.spans.length === 0)
    return;
  const n = Math.max(0, Math.min(t, r.length));
  let i = r.spans[0];
  for (const a of r.spans) {
    if (a.start > n)
      break;
    i = a;
  }
  const s = i.base + (n - i.start), o = jr(Br(r.owner));
  switch (i.bytes.kind) {
    case "marker":
      return { jsonPath: o };
    case "closingMarker":
      return { jsonPath: o, closingMarkerOffset: s };
    case "property":
      return {
        jsonPath: Av(o, i.bytes.property),
        propertyOffset: s
      };
    case "attributeKey":
      return { jsonPath: o, keyName: i.bytes.keyName, keyOffset: s };
    case "attributeMarker":
      return { jsonPath: o, keyName: i.bytes.keyName };
    case "closingAttributeMarker":
      return { jsonPath: o, keyName: i.bytes.keyName, keyClosingMarkerOffset: s };
    case "precedingText":
      return Iv(e);
  }
}
function Iv(e) {
  const t = Ti(e);
  if (!t)
    return;
  const r = fr(t);
  for (let n = r.length - 1; n >= 0; n--) {
    const i = r[n];
    if (i.type === "text")
      return {
        jsonPath: jr([...Br(t), n]),
        offset: i.length
      };
  }
}
function Qn(e, t, r) {
  for (const n of Rv(e)) {
    const i = Rh(n);
    if (!(!i || !i.owner.is(e)))
      for (let s = 0; s < i.spans.length; s++) {
        const o = i.spans[s];
        if (!$v(o.bytes, t))
          continue;
        const a = i.spans[s + 1], c = a ? o.base + (a.start - o.start) - 1 : o.base + (i.length - o.start);
        if (!(r < o.base || r > c))
          return [n, o.start + (r - o.base)];
      }
  }
}
function lc(e) {
  if (Lc(e)) {
    const t = bi(e.jsonPath);
    let r = Se();
    for (let n = 0; n < t.length; n++) {
      if (!r || !$(r))
        return [void 0, void 0];
      const i = fr(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : rT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && $(r) ? [r, nT(r, e.offset)] : [void 0, void 0];
  }
  if (gu(e) || wy(e)) {
    const t = Ui(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    const { keyName: r } = e, n = gu(e) ? Qn(t, { kind: "attributeKey", keyName: r }, e.keyOffset) : Qn(t, { kind: "attributeMarker", keyName: r }, 0);
    return n || nd(t);
  }
  if (Oy(e)) {
    const t = Ui(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    const r = Qn(t, { kind: "closingAttributeMarker", keyName: e.keyName }, e.keyClosingMarkerOffset);
    return r || nd(t);
  }
  if (qy(e)) {
    const t = Ui(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    const r = Qn(t, { kind: "marker" }, 0);
    if (r)
      return r;
    if (!$(t))
      return [void 0, void 0];
    const n = t.getFirstChild();
    return n && S(n) ? [n, 0] : [void 0, void 0];
  }
  if (Ry(e)) {
    const t = Ui(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    const r = Qn(t, { kind: "closingMarker" }, e.closingMarkerOffset);
    if (r)
      return r;
    if (!$(t))
      return [void 0, void 0];
    const n = t.getLastChild();
    return n && S(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if ($y(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Ui(e.jsonPath);
    if (!n || r === void 0)
      return [void 0, void 0];
    const i = Qn(n, { kind: "property", property: r }, e.propertyOffset);
    if (i)
      return i;
    if (!$(n))
      return [void 0, void 0];
    const s = n.getFirstChild();
    return s && S(s) ? [s, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Iy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function td(e, t) {
  if (!$h(e))
    return [e, t];
  const r = e.getParent();
  if (!r || !$(r))
    return [e, t];
  const n = e.getIndexWithinParent();
  if (n < 0)
    return [e, t];
  const i = t >= e.getTextContentSize() && t > 0;
  return [r, i ? n + 1 : n];
}
function rd(e) {
  return $(e) ? "element" : "text";
}
function Ui(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = bi(r);
  let i = Se();
  for (const s of n) {
    if (!i || !$(i))
      return;
    const o = fr(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Mr(e, t) {
  const r = ed(e, t);
  if (r)
    return r;
  if (ge(e)) {
    const n = e.getChildrenSize(), i = e.getChildAtIndex(Math.min(t, n - 1));
    if (S(i)) {
      const o = t >= n ? i.getTextContentSize() : 0;
      return Mr(i, o);
    }
    const s = Ti(e);
    if (s?.is(e.getParent())) {
      const o = e.getIndexWithinParent(), a = t >= n ? o + 1 : o;
      return Mr(s, a);
    }
  }
  if ($(e)) {
    const n = e.getChildAtIndex(t);
    if (n && $h(n)) {
      const s = ed(n, 0);
      return s || {
        jsonPath: jr(Br(e))
      };
    }
    const i = Gp(e, t);
    return i.type === "text" ? {
      jsonPath: jr([...Br(e), i.index]),
      offset: i.offset
    } : {
      jsonPath: jr(Br(e)),
      offset: i.index
    };
  }
  if (S(e)) {
    const n = tT(e, t);
    if (n)
      return {
        jsonPath: jr([
          ...Br(n.parent),
          n.index
        ]),
        offset: n.offset
      };
  }
  return { jsonPath: jr(Br(e)), offset: t };
}
function nd(e) {
  if ($(e)) {
    const r = e.getLastChild();
    if (r && S(r))
      return [r, r.getTextContent().length];
  }
  const t = e.getNextSibling();
  return t && $(t) ? [t, 0] : [void 0, void 0];
}
function Lv(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!il(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function Br(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Ti(r);
    if (!n)
      break;
    const i = eT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Ih() {
  for (let e = Se().getFirstChild(); e; e = e.getNextSibling())
    if (ds(e))
      return !0;
  return !1;
}
function Lh(e, t, r, n, i, s, o) {
  if (!we.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Tl(r) : w();
  if (!N(a))
    return;
  const c = Fv(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Hi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Dh(e, l, c, i, s, void 0, void 0);
  return Uv(u, a, i), u;
}
function Cl(e) {
  return e !== "expanded";
}
function Dv(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!S(r) || !I(r.getParent()))
    return;
  if (P(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return P(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function Uv(e, t, r) {
  const n = Cl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Wk(t), Th(t), xn(t);
  const i = Dv(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(I)?.selectEnd();
}
function Zn(e, t, r) {
  const n = _r(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(vr("marker", Ae(e)));
  const s = t === "" ? zt : i ? O + t : t;
  return n.append(ye(s)), n;
}
function Fv(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Zn("fr", f, n)), !e.isCollapsed()) {
        const p = sd(e);
        p.length > 0 && o.push(Zn("fq", p, n));
      }
      o.push(Zn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Zn("xo", f, n)), !e.isCollapsed()) {
        const p = sd(e);
        p.length > 0 && o.push(Zn("xq", p, n));
      }
      o.push(Zn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Dh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : Cl(n?.noteMode), l = Wc(e, t, c);
  s && Tt(l, Jr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = vr("marker", Ae(e) + " "), a || (f = vr("marker", nt(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = ye(Pt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const g = () => Lo(), m = r.flatMap(zv(g));
    if (t === "")
      l.append(...m);
    else {
      const y = tl(r);
      let v = () => {
      };
      i?.noteCallerOnClick && (v = i.noteCallerOnClick), p = kl(l.__caller, y, v), l.append(p, g(), ...m);
    }
  }
  return f && l.append(f), l;
}
function id(e) {
  if (typeof e == "string") {
    const i = Q(e);
    return z(i) ? i : void 0;
  }
  const t = ki();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => z(i.node))[e]?.node;
  if (z(n))
    return n;
}
function Kv(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Dn(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find(I)?.selectEnd();
}
function zv(e) {
  return (t) => Ct(t) ? [t] : [t, e()];
}
function jv(e) {
  const t = e.getParent();
  return t !== null && it(t, z) !== null;
}
function sd(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = qf(e);
  let a = "";
  for (const c of t)
    if (!(z(c) || hr(c) || jv(c)) && !P(c) && !on(c) && te(c, se) !== "attribute") {
      if (be(c)) {
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
const Uh = [
  Yt,
  St,
  ...bx
], Bv = [
  Ci,
  ...Uh
], Vv = qn((e, t) => {
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
function Wv() {
  const [e, t] = pe(void 0), [r, n] = pe(), i = X(null), s = de((a, c) => {
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
  }, []), o = de(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function Hv({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = Wv();
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
const Gv = Sy(Vv);
function Fh({ isOpen: e = !1, children: t }) {
  const r = X(null), { coords: n, placement: i } = Hv({ isOpen: e, floatingBoxRef: r }), s = De(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return kn(
    _(Gv, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Kh = Nf(void 0);
function Sl() {
  const e = wf(Kh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function Jv(e, t) {
  const [r, n] = pe(0), [i, s] = pe(-1), o = De(() => e ?? [], [e]), a = {
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
function Yv({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = Jv(t, r);
  return _(Kh.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const zh = qn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Sl(), u = de((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = de((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function Xv({ children: e, autoIndex: t = !0, ...r }) {
  const n = X(null), { state: { activeIndex: i, menuItems: s } } = Sl(), o = De(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = De(() => {
    const c = o(s);
    return t ? My.map(c, (l, u) => Ey(l) && l.type === zh && l.props.index === void 0 ? Ay(l, { index: u }) : l) : c;
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
const Qv = (e, t, r) => Xs(e, r).toLowerCase().includes(t.toLowerCase()), od = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Xs = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function Zv(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? od(r[0]) : "") : (u = n || (r.length > 0 ? od(r[0]) : ""), d = (g, m) => Qv(g, m, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((g) => {
    try {
      return d(g, t);
    } catch (m) {
      return console.warn("Error filtering item:", g, m), !1;
    }
  }).sort((g, m) => {
    const y = (E) => (p.has(E) || p.set(E, Xs(E, f).toLowerCase()), p.get(E) ?? ""), v = a ? Xs(g, f) : y(g), M = a ? Xs(m, f) : y(m);
    for (const E of c)
      switch (E) {
        case "exact":
          if (v === l && M !== l)
            return -1;
          if (M === l && v !== l)
            return 1;
          break;
        case "startsWith":
          if (v.startsWith(l) && !M.startsWith(l))
            return -1;
          if (M.startsWith(l) && !v.startsWith(l))
            return 1;
          break;
        case "contains": {
          const R = v.indexOf(l), C = M.indexOf(l);
          if (R !== -1 && C === -1)
            return -1;
          if (C !== -1 && R === -1)
            return 1;
          if (R !== -1 && C !== -1)
            return R - C;
          break;
        }
      }
    return v.localeCompare(M);
  });
}
const Sa = {
  Root: Yv,
  Options: Xv,
  Option: zh
};
function e_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return De(() => Zv({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function t_() {
  const { moveUp: e, moveDown: t, select: r } = Sl();
  return De(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const r_ = () => {
  const e = t_(), [t] = ce();
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
    return t.registerCommand(Ar, r, Ue);
  }, [t, e]);
};
function n_() {
  return r_(), null;
}
const i_ = ["Shift", "Control", "Alt", "Meta"];
function jh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ce(), u = s !== void 0, [d, f] = pe(""), p = u ? s ?? "" : d, g = e_({ query: p, items: t, filterBy: "name" }), m = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, g);
  }, [a, p, g]), j(() => l.registerCommand(Ar, (y) => {
    if (u || c?.includes(y.key) || i_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const M = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((E) => E.slice(0, -1));
      }
    }[y.key];
    return M ? (y.stopPropagation(), y.preventDefault(), M(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((E) => E + y.key), !0) : !1;
  }, Ue), [l, u, p, o, n, c]), Ce(Sa.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: g, onSelectOption: (y) => m(y), children: [!u && _("input", { value: p, type: "text", disabled: !0 }), _(n_, {}), _(Sa.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((M, E) => Ce(Sa.Option, { index: E, children: [_("span", { className: "label", children: M.label ?? M.name }), _("span", { className: "description", children: M.description })] }, M.name)) })] });
}
function s_({ trigger: e, items: t }) {
  const [r] = ce(), [n, i] = pe(!1), s = de((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return j(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), j(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = w();
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && _(Fh, { isOpen: n, children: ({ placement: o }) => _(jh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function o_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: De(() => {
    if (!t || !e)
      return;
    const i = ar(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = ar(o), { action: c } = r(o, a);
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
function Zi(e, t) {
  return `${e}:${t}`;
}
function a_(e, t) {
  j(() => {
    if (!e.hasNodes([et]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ye(Wf(e, et, (n) => is(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], g = a[l]?.[d], m = c[l]?.[d];
          i.addID(l, d, f, p, g, m);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(et, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = Q(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : ge(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!et.isReservedType(c))
              for (const u of l) {
                let d = t.get(Zi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Zi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Zi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const c_ = qn(function({ logger: t }, r) {
  const [n] = ce(), i = De(() => /* @__PURE__ */ new Map(), []);
  a_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Zi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = Q(u);
        ge(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && oo(d));
      }
  };
  return Ic(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (et.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Tl(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), Gc(p, a, c, l, u, d, f);
      }, { tag: Wa });
    },
    removeAnnotation(o, a) {
      if (et.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Zi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Wa });
    }
  })), null;
}), l_ = [];
function u_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = l_, onChange: n }) {
  const [i] = ce();
  return bs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Rf) && !u.has(np) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = d_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function d_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Wi();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = Q(i), o = s !== null && Qt(s) !== void 0;
    if (t.size === 1 && S(s) && !o && Qx(s)) {
      const a = Ah(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = Q(i);
          return new Wi([S(d) ? ac(d) : { insert: "" }]);
        }), l = new Wi([ac(s)]), u = new Wi(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = Yu(r), c = Yu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const Ml = "formatted", Bh = "unformatted", Vh = "paragraph-structure", Wh = "standard", Hh = "block-verse", f_ = {
  [Ml]: "Formatted",
  [Bh]: "Unformatted",
  [Vh]: "Paragraph Structure",
  [Wh]: "Standard",
  [Hh]: "Block Verse"
};
function Si(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let El, Al;
function p_(e) {
  const t = Gh(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  El = e, Al = t;
}
p_(Ml);
const c0 = () => El, Bo = () => Al;
function Gh(e) {
  let t;
  switch (e ?? El) {
    case Ml:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Bh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Vh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Wh:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Hh:
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
function l0(e) {
  if (!e)
    return;
  const t = ad(e);
  return Object.keys(f_).find((r) => $t(ad(Gh(r)), t));
}
const h_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function ad(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...h_, ...t };
}
function Vo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function g_(e) {
  if (e)
    return ps(e) ? St : e.markerMode === "editable" ? pt : St;
}
function ps(e) {
  return e?.verseLayout === "block";
}
function m_(e) {
  const t = [], r = e ?? Al;
  return r && (t.push(`${Pb}${r.markerMode}`), r.hasSpacing && t.push(Eb), r.isFormattedFont && t.push(Ab)), t;
}
function y_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += b_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), T_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += x_(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), __(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function b_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), k_(t, e.retain, e.attributes, r, n)), e.retain);
}
function k_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Se();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Sr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, g = Math.min(s, p);
        if (g > 0) {
          let m = u;
          const y = f > 0, v = g < d - f;
          if (y && v) {
            const [, M] = u.splitText(f);
            [m] = M.splitText(g);
          } else y ? [, m] = u.splitText(f) : v && ([m] = u.splitText(g));
          if (Zr(r)) {
            const M = m.getParent();
            if (I(M)) {
              const E = r.char;
              let R;
              Array.isArray(E) ? a >= 0 && a <= E.length - 1 && (R = E[a]) : a === 0 && (R = E);
              const C = R ? Mn(R, M) : !1;
              if (C && Array.isArray(E) && E.length > 1) {
                const T = ye("");
                m.replace(T);
                const F = typeof r.segment == "string" ? r.segment : void 0, U = Mi(E.slice(1), n, m, F);
                let G = T;
                for (const J of U)
                  G.insertAfter(J), G = J;
                T.remove(), It(r, m);
              } else if (C)
                It(r, m);
              else {
                m.remove();
                const T = cd(m, r, n, i);
                if (T && T.length > 0) {
                  let F = M;
                  for (const U of T)
                    F.insertAfter(U), F = U;
                }
              }
            } else {
              const E = ye("");
              m.replace(E);
              const R = cd(m, r, n, i);
              if (R && R.length > 0) {
                let C = E;
                for (const T of R)
                  C.insertAfter(T), C = T;
                E.remove();
              } else
                E.replace(m);
            }
          } else
            It(r, m);
          s -= g;
        }
      }
      o += d;
    } else if (Nt(u))
      e <= o && o < e + t && s > 0 && (ld(u, r), s -= 1), o += 1;
    else if (I(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Zr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            uc(u, p.style), typeof p.cid == "string" && Tt(u, Sn, () => p.cid);
            const g = Ke(p, mo);
            g && Object.keys(g).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...g
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || O_(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Ba(u), !0;
        }
      }
      d && Ba(u), a -= 1;
    } else if (At(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!lr(u))
          ld(u, r);
        else if (Pl(r)) {
          const p = Xh(r.para, n);
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
function cd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Mi(t.char, r, e, i), o = s.find(I);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), It(t, e);
    return;
  }
  const a = {};
  tg.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), It(t, e), s;
}
function Jh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  P(r) ? (r.setMarker(t), r.setTextContent(Ae(t))) : Ct(r) && r.getTextType() === "marker" && r.setTextContent(Ae(t) + O);
}
function uc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    P(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = I(e.getParent()), i = e.getFirstChild();
  Ct(i) && i.getTextType() === "marker" && i.getTextContent() === Ae(r, n) && i.setTextContent(Ae(t, n));
  const s = e.getLastChild();
  Ct(s) && s.getTextType() === "marker" && s.getTextContent() === nt(r, n) && s.setTextContent(nt(t, n));
}
function ld(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && I(e) && Zr(t)) {
      const i = dc(n);
      if (uc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Tt(e, Sn, () => o);
      }
      const s = Ke(i, mo);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (We(e) || be(e) || Fe(e) || z(e) || qe(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (gt(e) || ie(e) || I(e)) && (r === "style" && ie(e) ? Jh(e, n) : r === "style" && I(e) ? uc(e, n) : r === "code" && gt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Tt(e, Jr, () => n));
  }
}
function T_(e, t, r) {
  if (t <= 0)
    return;
  const n = Se();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Sr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Nt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (At(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && At(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Jt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ee(p)) {
            let g = i + 1;
            const m = p.getChildren();
            for (const v of m) {
              if (s <= 0)
                break;
              const M = i;
              if (i = g, o(v)) {
                i = M;
                break;
              }
              Sr(v) ? g += v.getTextContentSize() : Nt(v) && (g += 1), i = M;
            }
            const y = p.getChildren();
            for (const v of y)
              v.remove(), a.append(v);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Jt(), !0);
        } else ie(a) ? a.replace(Jt(), !0) : a.remove();
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
function x_(e, t, r, n, i) {
  if (t === fs)
    return ud(e, r, n, i);
  if (t.endsWith(fs) && !Pl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Zr(r))
        throw new Error("Text + LF should not have char attributes");
      o += yo(e, s, r, i);
    }
    return o += ud(e + o, r, n, i), o;
  } else return Zr(r) ? v_(e, t, r, n, i) : yo(e, t, r, i);
}
function v_(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ye(t === "" ? zt : t);
  It(r, s);
  let o;
  {
    let y = function(v) {
      if (Sr(v)) {
        const M = v.getTextContentSize();
        if (e >= m && e < m + M) {
          const E = v.getParent();
          return I(E) && (o = E), !0;
        }
        m += M;
      } else if (Nt(v))
        m += 1;
      else if (I(v)) {
        const M = v.getChildren();
        for (const E of M)
          if (y(E))
            return !0;
      } else if ($(v)) {
        const M = v.getChildren();
        for (const E of M)
          if (y(E))
            return !0;
        At(v) && (m += 1);
      }
      return !1;
    };
    const g = Se();
    let m = 0;
    y(g);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const g = a[0];
      g && Mn(g, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Mn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Mi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(I);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), yo(e, t, void 0, i);
  const f = {};
  for (const [g, m] of Object.entries(r))
    g !== "char" && g !== "segment" && typeof m == "string" && (f[g] = m);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const g of u)
    if (!Yh(e, g, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), yo(e, t, void 0, i));
}
function yo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Se();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Sr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = ye(t);
        if (It(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          I(f) && !Zr(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Nt(c))
      s += 1;
    else if (I(c)) {
      if (!o && e === s) {
        const d = ye(t);
        It(r, d);
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
        return It(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (At(c)) {
      if (!o && e === s) {
        const d = ye(t);
        It(r, d);
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
        return It(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = ye(t);
    It(r, c);
    const l = Jt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Yh(e, t, r) {
  const n = Se();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!$(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Ee(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Jt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Sr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Nt(l))
        i += 1;
      else if (I(l)) {
        if (o(l))
          return !0;
      } else if (At(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (lr(u) && At(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if ($(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return $(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ee(a) ? lr(a) && ie(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ee(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (I(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ee(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function __(e, t, r, n, i) {
  let s;
  return zr("chapter", t) ? s = S_(t.insert.chapter, r) : zr("verse", t) ? s = M_(t.insert.verse, r) : zr("ms", t) ? s = E_(t.insert.ms) : zr("note", t) ? s = Qh(t, r, n, i) : zr("unknown", t) ? s = Zh(t, r, n, i) : zr("unmatched", t) && (s = P_(t.insert.unmatched, r)), s ? Yh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function ud(e, t, r, n) {
  let i;
  Pl(t) ? i = Xh(t.para, r) : w_(t) && (i = C_(t.book)), i ??= Jt();
  const s = i, o = ie(s), a = lr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Sr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ie(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const g = e - c, [m] = g > 0 ? d.splitText(g) : [void 0];
          let y, v = m?.getPreviousSibling();
          for (; v; ) {
            const M = v;
            v = v.getPreviousSibling(), y ? y.insertBefore(M) : s.append(M), y = M;
          }
          return m && s.append(m), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Nt(d))
      c += 1;
    else if (At(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (lr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ie(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ie(d) && s)
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
  return u(Se()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function C_(e) {
  const { style: t, code: r } = e;
  if (!t || t !== ss || !r || !jt.isValidBookCode(r))
    return;
  const n = Ke(e, Ux);
  return kp(r, n);
}
function Xh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ke(e, Dx), i = os(r, n);
  if (!Si(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), Lo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ae(r) + O;
    i.append(t.hasGutterParaMarkers ? ik(s) : vr("marker", s));
  }
  return i;
}
function S_(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ke(e, Fx);
  let a;
  if (t.markerMode === "editable")
    a = vp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Yc(r, c, n, i, s, o);
  }
  return a;
}
function M_(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ke(e, Kx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Kt(r, n);
    c = Op(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = pl(n, l, i, s, o, a);
  }
  return c;
}
function E_(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ke(e, zx);
  return op(t, r, n, s, i);
}
function Qh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Ke(i.note, jx), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const m of c?.ops ?? [])
    if (typeof m.insert == "string")
      if (Zr(m.attributes)) {
        const y = Mi(m.attributes.char, t, ye(m.insert), void 0, eg(m.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(ye(m.insert));
  return Dh(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Zh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ke(i, Bx), l = Jc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && A_(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Tt(l, Jr, () => d), l;
}
function A_(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Zr(s.attributes)) {
        const o = ye(s.insert), a = Mi(s.attributes.char, t, o, void 0, eg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ye(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (zr("unknown", s)) {
        const o = Zh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (zr("note", s)) {
        const o = Qh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function P_(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = cl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function eg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function dc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Mi(e, t, r, n, i, s = !1, o = !1) {
  S(r) && r.getTextContentSize() === 0 && r.setTextContent(zt);
  const a = () => {
    o && S(r) && r.getTextContent() !== zt && r.setTextContent(O + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(dc), l = c[0], u = i?.[i.length - 1];
    if (I(u) && Mn(l, u))
      return c.length > 1 ? Mi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, g) => {
      const m = _r(p.style, Ke(p, mo));
      if (typeof p.cid == "string" && Tt(m, Sn, () => p.cid), n && g === c.length - 1 && Tt(m, Jr, () => n), f)
        if (I(f)) {
          const y = f.getMarker(), v = [];
          Ea(y, v, t, !0), v.forEach((E) => m.append(E)), m.append(f);
          const M = [];
          Ma(f, M, t, !0), M.forEach((E) => m.append(E));
        } else
          m.append(f);
      return m;
    }, r);
    return Ea(l.style, d, t, s), Ma(d, d, t, s), [d];
  } else {
    const c = dc(e), l = i?.[i.length - 1];
    if (I(l) && Mn(c, l))
      return r && l.append(r), [];
    a();
    const u = _r(c.style, Ke(c, mo));
    return typeof c.cid == "string" && Tt(u, Sn, () => c.cid), n && Tt(u, Jr, () => n), r && u.append(r), Ea(c.style, u, t, s), Ma(u, u, t, s), [u];
  }
}
function Ma(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && N_(e.getMarker(), t, r, !1, n);
}
function Ea(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = vr("marker", Ae(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function N_(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = vr("marker", n ? nt("") : nt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function w_(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Pl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Zr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function O_(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function It(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Tt(t, Jr, () => n);
        continue;
      }
      if (q_(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const tg = [
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
  return tg.includes(e);
}
function R_() {
  const [e] = ce();
  return j(() => e.registerCommand(wo, (t) => ($_(t), !1), vn), [e]), null;
}
function $_(e) {
  if (I_(e.target))
    return;
  const t = w();
  N(t) && L_(t);
}
function Ei(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Bt(t))
      r++, t = t.getNextSibling(), S(t) && t.getTextContent() === O && (r++, t = t.getNextSibling());
    else if (be(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Zt(e, r), !0);
}
function I_(e) {
  if (!$f(e))
    return !1;
  const t = _s(e);
  if (!sk(t))
    return !1;
  const r = t.getParent();
  return r ? Ee(r) ? Ei(r) : (Zt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function L_(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = Q(t.key);
  if (!Ee(r))
    return !1;
  const n = r.getFirstChild();
  return !Or(n) && !Dn(n) ? !1 : Ei(r);
}
function D_() {
  const [e] = ce();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !U_(r) || !rg() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ye(
      e.registerCommand(Ar, t, Ue),
      e.registerCommand(Uc, t, Ue),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm records what a cut would cover
      // and claims nothing, so either order of the two is correct: with no removal, nothing it
      // armed can be reaped.
      e.registerCommand(br, t, kr),
      e.registerCommand(_n, t, kr),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Fc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = _s(r.target);
        return !n || !Pn(n) ? !1 : (r.preventDefault(), !0);
      }, Ue),
      e.registerCommand(Uy, t, Ue),
      e.registerCommand(Fy, t, Ue),
      e.registerCommand(Ky, t, Ue)
    );
  }, [e]), null;
}
function U_(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Pn(e) {
  return it(e, (t) => qe(t) || dh(t)) ?? void 0;
}
function rg() {
  const e = w();
  return N(e) ? Pn(e.anchor.getNode()) !== void 0 || Pn(e.focus.getNode()) !== void 0 : !1;
}
function F_(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function K_(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), F_(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function z_(e, t, r, n) {
  if (!rC(t) || K_(e, r))
    return !1;
  const i = r === "up" ? Lx(t) : Ix(t);
  return i && n.preventDefault(), i;
}
function j_({ viewOptions: e }) {
  const [t] = ce();
  return B_(t, e), null;
}
function B_(e, t) {
  j(() => {
    if (!e.hasNodes([dr, St, we]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = dd(o), d = X_(i, fd(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return z_(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = dd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return fd(a, n.key) ? l = !c && gd(i, "next") || !c && W_(i) || eC(i) || !c && s && hd(i, "next") : V_(a, n.key) && (l = !c && gd(i, "previous") || !c && H_(i) || tC(i, t) || !c && s && hd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Ar, r, Ue);
  }, [e, t]);
}
function dd(e) {
  return e.dir || "ltr";
}
function fd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function V_(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function fc(e) {
  if (!I(e) || e.getMarker() !== "fp")
    return;
  const t = Qt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function W_(e) {
  const t = fc(Fp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Zt(t, 0), !0);
}
function H_(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = fc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : pd(n);
  }
  if (t.offset === 0) {
    const n = fc(r);
    return n ? pd(n) : !1;
  }
  return !1;
}
function pd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (S(t))
    return t.select(), !0;
  if ($(t)) {
    const i = t.getLastDescendant();
    return S(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const bo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function G_(e) {
  if (bo)
    for (const { segment: r } of bo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function J_(e) {
  if (bo) {
    let n = 0;
    for (const { index: i } of bo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function ng(e) {
  for (let t = e; t; t = t.getParent())
    if ($(t) && !t.isInline())
      return t;
}
function ig(e) {
  return !!e && P(e) && Pn(e) !== void 0;
}
function pi(e) {
  return S(e) && !e.isToken() && !ig(e) && e.getTextContentSize() > 0;
}
function sg(e) {
  return Po(e) ? !0 : z(e) ? e.getIsCollapsed() === !0 : S(e) ? (e.isToken() || ig(e)) && e.getTextContentSize() > 0 : If(e) ? !Fe(e) : !1;
}
function hi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Wo(e, t, r) {
  for (let n = e; n; ) {
    if (sg(n))
      return n;
    if ($(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? hi(n, t, r);
      continue;
    }
    if (pi(n))
      return n;
    n = hi(n, t, r);
  }
}
function Nl(e, t, r, n, i) {
  return r === "element" && $(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? hi(e, n, i) : r === "text" && sg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : hi(e, n, i);
}
function Aa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Nl(e.node, e.offset, e.kind, "previous", t), n = Wo(r, "previous", t);
  if (!n)
    return e;
  if (pi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function Y_(e, t) {
  const r = e.getNode(), n = ng(r);
  if (!n)
    return;
  if (e.type === "text" && pi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Aa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Nl(r, e.offset, e.type, t, n), s = Wo(i, t, n);
  if (!s)
    return;
  if (pi(s)) {
    const c = s.getTextContent(), l = t === "next" ? G_(c) : J_(c);
    return Aa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Aa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function og(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = Y_(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function hd(e, t) {
  return og(e, t, "collapse");
}
function X_(e, t) {
  return og(e, t, "extend");
}
function Q_(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && pi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Nl(n, e.offset, e.type, t, r);
  return Wo(i, t, r) === void 0;
}
function Z_(e, t) {
  const r = Se();
  for (let n = e; n; ) {
    const i = hi(n, t, r), s = i && Wo(i, t, r);
    if (!s)
      return;
    if (n = Pn(s), !n)
      return s;
  }
}
function gd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Pn(n))
    return !1;
  const i = ng(n);
  if (!i || !Q_(r, t, i))
    return !1;
  const s = hi(i, t, Se()), o = s && Pn(s);
  if (!o)
    return !1;
  const a = Z_(o, t);
  if (!a)
    return !0;
  if (pi(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function md(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function eC(e) {
  const t = e.anchor.getNode(), r = Fp(e);
  if (z(r) && !P(r.getFirstChild())) {
    if (Ee(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Ee(i) && Ei(i)) && i.selectStart(), !0;
      }
    } else return Ct(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ee(t) && z(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : md(r), !0;
  }
  const n = r?.getParent();
  if (Ct(r) && z(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? md(n) : n.selectEnd(), !0;
  }
  return !1;
}
function tC(e, t) {
  const r = jk(e);
  if (Es(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (gt(i.getParent()))
    return !0;
  if (z(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Dn(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Ee(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = it(o, (c) => z(c));
    if (z(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Qt(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (hr(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function rC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return be(t) && If(t);
}
function nC() {
  const [e] = ce();
  return iC(e), null;
}
function iC(e) {
  j(() => {
    if (!e.hasNodes([ke]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ye(
      e.registerNodeTransform(ke, aC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ke, $k),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ke, $p),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ke, (t) => us(Cr("char"), t)),
      e.registerNodeTransform(je, cC)
    );
  }, [e]);
}
function Pa(e) {
  return e.getChildren().some(P);
}
function sC(e, t) {
  const r = t.getFirstChild();
  if (!P(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (As(n)) {
    const i = n.getTextContent();
    i.startsWith(O) && (i === O ? n.remove() : n.setTextContent(i.slice(O.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function oC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  P(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function aC(e) {
  if (!I(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Pa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = te(e, Sn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (I(i) && Mn({ style: t, cid: r }, i) && $t(n, i.getUnknownAttributes()))
    if (Pa(i)) {
      if (sC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  I(s) && Mn({ style: t, cid: r }, s) && $t(n, s.getUnknownAttributes()) && (Pa(s) ? oC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function cC(e) {
  const t = e.getParent();
  if (!I(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(zt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function ag(e) {
  return e.replaceAll("	", " ");
}
const wl = (e) => {
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
      n.setData(o, ag(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(br, s);
  });
}, Ol = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", ag(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(br, i);
  });
};
function lC() {
  const [e] = ce();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(to ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), e.dispatchCommand(Oo, null)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), e.dispatchCommand(_n, null)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Ol(e) : wl(e)));
    };
    return e.registerRootListener((r, n) => {
      n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
    });
  }, [e]), null;
}
function uC({ logger: e }) {
  const [t] = ce();
  return j(() => Ye(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Ar, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), oi),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(br, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, oi),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Fc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, oi)
  ), [t, e]), null;
}
function dC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function fC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(dC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let pC = 0;
class Fi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${pC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function hC({ options: e } = {}) {
  const [t] = ce(), [r, n] = pe(() => !t.isEditable()), [i, s] = pe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = pe(void 0), c = De(() => {
    const d = [
      new Fi("Cut", {
        onSelect: () => {
          t.dispatchCommand(_n, null);
        },
        isDisabled: r
      }),
      new Fi("Copy", {
        onSelect: () => {
          t.dispatchCommand(Oo, null);
        }
      }),
      new Fi("Paste", {
        onSelect: () => {
          wl(t);
        },
        isDisabled: r
      }),
      new Fi("Paste as Plain Text", {
        onSelect: () => {
          Ol(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new Fi(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = de(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  j(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || Ap(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
  const u = X(null);
  return bs(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), m = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${g}px`, d.style.top = `${m}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? ab.createPortal(_("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: _(fC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function gC() {
  const [e] = ce();
  return j(() => e.registerCommand(Ar, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(to ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, kr), [e]), null;
}
function mC({ isEditable: e }) {
  const [t] = ce();
  return bs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function yd(e) {
  return !!e && el(Q(e));
}
function cg(e) {
  const [t] = ce(), r = X(void 0), n = de((i) => {
    const s = w(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = yd(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Fo(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = Uk();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Zt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = Q(a);
      S(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = w(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Hr(Gr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Ps(c) || !c.includes(ui))
        return;
      const l = w(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Fk(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(ui).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ye(t.registerCommand(cr, () => (i(), !1), vn), t.registerCommand(Kc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = yd(a);
      }), c && t.update(() => {
        const l = Q(a);
        S(l) && l.remove();
      }, { tag: Gr }), r.current = void 0, !1;
    }, vn), t.registerNodeTransform(je, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function yC() {
  const e = w();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!$(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!be(i) || Fo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || be(s))
    return i;
}
function bC() {
  return cg(yC), null;
}
function kC({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ce();
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
          f || Hr(zy), o.setEditorState(l), o.dispatchCommand(jy, void 0);
        }, { tag: tp });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function TC({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ce();
  return xC(t, n), vC(i, e, r, n), null;
}
function xC(e, t) {
  const r = X(void 0), n = X(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = vv), r.current !== o && (r.current = o, bd("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = _v), n.current !== o && (n.current = o, bd("cross-ref-callers", o, t));
  }, [t, s]);
}
function vC(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([ke, we, Yt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => PC(s));
    return Ye(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(we, (s) => _C(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ke, CC),
      e.registerNodeTransform(je, SC),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Yt, MC),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Yt, (s, { prevEditorState: o }) => EC(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(cr, () => AC(e, t, r, n), Ft),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function _C(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => hr(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    S(i) && !P(i) && i.getTextContent() !== Pt(e.getCaller()) && e.insertBefore(i);
  }
}
function CC(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => hr(o));
  if (!I(e) || !z(t) || !n)
    return;
  const i = tl(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  S(s) ? s.getTextContent() !== O && s.setTextContent(O) : e.insertAfter(ye(O));
}
function SC(e) {
  const t = Qt(e), r = t?.getChildren(), n = r?.find((o) => hr(o));
  if (!S(e) || !z(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!P(e) && z(i) && e.getTextContent() !== O && (e.setTextContent(O), e.selectEnd()), I(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(zt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = tl(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function MC(e) {
  if (!hr(e))
    return;
  const t = e.getNextSibling();
  !S(t) || P(t) ? e.insertAfter(ye(O)) : t.getTextContent() !== O && t.setTextContent(O);
}
function EC(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = Q(r), a = o?.getParent();
      return hr(o) && z(a) && a.getCaller() === no;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function AC(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = it(o, (c) => z(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = Q(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Ki(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (z(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ki(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (z(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ki(e, c, n);
    } else if (!a) {
      const c = it(o, (l) => z(l));
      if (c && c.getIsCollapsed() && Ee(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ki(e, l, n);
      }
    }
  }
  if (Ee(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Dn(c) && z(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Ki(e, l, n);
    }
  }
  return !1;
}
function Ki(e, t, r) {
  const n = Q(t);
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
function PC(e) {
  const t = w();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (z(i) && S(s)) {
    e.preventDefault();
    const o = No();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), xn(o);
  }
}
function bd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (NC(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function NC(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Ho(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!P(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Xr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => S(n) && n.getMode() === "token") ? t : [];
}
function wC(e) {
  const t = e.getParent();
  if (z(t))
    return Ho(t).some((r) => r.is(e)) ? t : void 0;
}
function ko(e) {
  const t = Ho(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function OC(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function qC(e) {
  const t = By();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ko(e);
  const i = OC(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ko(e);
}
function pc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = wC(t);
  if (r)
    return RC(r, t, e.offset) ? void 0 : r;
}
function RC(e, t, r) {
  const n = Ho(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function $C(e) {
  const t = Ho(e), r = t[t.length - 1];
  S(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Zt(e, ko(e));
}
function IC(e = !1) {
  const t = w();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return LC(t.anchor, t.focus);
  const r = pc(t.anchor);
  if (!r)
    return !1;
  if (!e && qC(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Zt(n, r.getIndexWithinParent());
  } else
    $C(r);
  return !0;
}
function LC(e, t) {
  const r = pc(e), n = pc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && kd(e, r, i), n && kd(t, n, !i), !0;
}
function kd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), ko(t), "element");
}
function DC() {
  const [e] = ce(), t = X(!1);
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
  }, [e]), j(() => e.registerCommand(cr, () => (IC(t.current) && Hr(Gr), !1), vn), [e]), null;
}
function UC({ onChange: e }) {
  const [t] = ce();
  return j(() => t.registerCommand(cr, () => {
    const r = xl();
    return e?.(r), !1;
  }, Ft), [t, e]), null;
}
function FC() {
  const [e] = ce();
  return KC(e), null;
}
function KC(e) {
  j(() => {
    if (!e.hasNodes([Xe]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(Xe, (t) => zC(t, e));
  }, [e]);
}
function zC(e, t) {
  Eh(t, e.getKey()) && Mh(e.getFirstChild()), !(!ie(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = Q(e.getKey());
    return ie(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function lg({ onStateChange: e }) {
  const [t] = ce(), [r, n] = pe(t), i = X(!1), s = X(!1), o = X(void 0), a = X(void 0), c = de(() => {
    const l = w();
    let u;
    if (N(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : it(d, (v) => {
        const M = v.getParent();
        return M !== null && Vy(M);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), ds(p) && (p = it(d, ie) ?? p);
      const g = p.getKey(), m = r.getElementByKey(g), y = Vk(d, f);
      if (y && $x(y) && (u = y.getMarker()), m !== null && (ie(p) || gt(p) || Es(p))) {
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
  return j(() => t.registerCommand(cr, (l, u) => (c(), n(u), !1), kr), [t, c]), j(() => Ye(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Wy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), kr), r.registerCommand(Hy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), kr)), [c, r, e]), null;
}
function jC(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function en(e) {
  return e ? Ee(e) ? e : it(e, (r) => Ee(r)) ?? void 0 : void 0;
}
function ug(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = en(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function ql(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !Lf(e) ? !1 : e.getNodes().some((t) => be(t));
}
function dg(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = en(r);
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
function fg(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = en(r);
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
function Td(e, t) {
  return !!hc(e, t);
}
function hc(e, t) {
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && $(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return be(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return be(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return be(i) ? i : void 0;
}
function To(e, t) {
  if (!N(e))
    return !1;
  const r = en(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function Na(e) {
  return ql(e) || ug(e);
}
function BC(e, t) {
  if (ql(e) || ug(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return dg(e) && To(e, "backward") || Td(e, "backward");
    case "deleteForward":
      return fg(e) && To(e, "forward") || Td(e, "forward");
    case "insertText":
      return !1;
  }
}
function VC(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = hc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (dg(e) && To(e, "backward")) {
        const n = en(e.anchor.getNode());
        if (Ee(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = hc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (fg(e) && To(e, "forward")) {
        const i = en(e.anchor.getNode())?.getNextSibling();
        if (Ee(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function xd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Lf(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = en(e.anchor.getNode()), n = en(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function pg(e) {
  if (S(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else $(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function WC(e) {
  const t = e.getPreviousSibling();
  if (!Ee(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? pg(r) : Ei(t) || t.selectStart();
}
function hg(e) {
  return be(e) || We(e) ? [] : Ee(e) ? e.getChildren().flatMap(hg) : [e];
}
function HC(e) {
  const t = [];
  for (const r of e) {
    const n = hg(r);
    n.length !== 0 && (Ee(r) && t.length > 0 && t.push(ye(" ")), t.push(...n));
  }
  return t;
}
function vd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function GC(e) {
  if (Array.isArray(e)) return e;
}
function JC(e, t) {
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
function YC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XC(e, t) {
  return GC(e) || JC(e, t) || QC(e, t) || YC();
}
function QC(e, t) {
  if (e) {
    if (typeof e == "string") return vd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? vd(e, t) : void 0;
  }
}
const gg = Object.entries, _d = Object.setPrototypeOf, ZC = Object.isFrozen, eS = Object.getPrototypeOf, tS = Object.getOwnPropertyDescriptor;
let tt = Object.freeze, st = Object.seal, ni = Object.create, mg = typeof Reflect < "u" && Reflect, gc = mg.apply, mc = mg.construct;
tt || (tt = function(t) {
  return t;
});
st || (st = function(t) {
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
const ei = He(Array.prototype.forEach), rS = He(Array.prototype.lastIndexOf), Cd = He(Array.prototype.pop), ti = He(Array.prototype.push), nS = He(Array.prototype.splice), Vr = Array.isArray, Gi = He(String.prototype.toLowerCase), wa = He(String.prototype.toString), Sd = He(String.prototype.match), zi = He(String.prototype.replace), Md = He(String.prototype.indexOf), iS = He(String.prototype.trim), sS = He(Number.prototype.toString), oS = He(Boolean.prototype.toString), Ed = typeof BigInt > "u" ? null : He(BigInt.prototype.toString), Ad = typeof Symbol > "u" ? null : He(Symbol.prototype.toString), Je = He(Object.prototype.hasOwnProperty), ji = He(Object.prototype.toString), Ge = He(RegExp.prototype.test), mn = aS(TypeError);
function He(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return gc(e, t, n);
  };
}
function aS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return mc(e, r);
  };
}
function he(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gi;
  if (_d && _d(e, null), !Vr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (ZC(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function cS(e) {
  for (let t = 0; t < e.length; t++)
    Je(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = ni(null);
  for (const n of gg(e)) {
    var r = XC(n, 2);
    const i = r[0], s = r[1];
    Je(e, i) && (Vr(s) ? t[i] = cS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function lS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return sS(e);
    case "boolean":
      return oS(e);
    case "bigint":
      return Ed ? Ed(e) : "0";
    case "symbol":
      return Ad ? Ad(e) : "Symbol()";
    case "undefined":
      return ji(e);
    case "function":
    case "object": {
      if (e === null)
        return ji(e);
      const t = e, r = Wt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : ji(n);
      }
      return ji(e);
    }
    default:
      return ji(e);
  }
}
function Wt(e, t) {
  for (; e !== null; ) {
    const n = tS(e, t);
    if (n) {
      if (n.get)
        return He(n.get);
      if (typeof n.value == "function")
        return He(n.value);
    }
    e = eS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function uS(e) {
  try {
    return Ge(e, ""), !0;
  } catch {
    return !1;
  }
}
const Pd = tt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Oa = tt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), qa = tt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), dS = tt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ra = tt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), fS = tt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Nd = tt(["#text"]), wd = tt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $a = tt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Od = tt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Vs = tt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), pS = st(/{{[\w\W]*|^[\w\W]*}}/g), hS = st(/<%[\w\W]*|^[\w\W]*%>/g), gS = st(/\${[\w\W]*/g), mS = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), yS = st(/^aria-[\-\w]+$/), qd = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), bS = st(/^(?:\w+script|data):/i), kS = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), TS = st(/^html$/i), xS = st(/^[a-z][.\w]*(-[.\w]+)+$/i), Rd = st(/<[/\w!]/g), $d = st(/<[/\w]/g), vS = st(/<\/no(script|embed|frames)/i), _S = st(/\/>/i), Et = {
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
}, CS = function() {
  return typeof window > "u" ? null : window;
}, SS = function(t, r) {
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
}, Id = function() {
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
}, Fr = function(t, r, n, i) {
  return Je(t, r) && Vr(t[r]) ? he(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function yg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : CS();
  const t = (D) => yg(D);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Wt(f, "cloneNode"), g = Wt(f, "remove"), m = Wt(f, "nextSibling"), y = Wt(f, "childNodes"), v = Wt(f, "parentNode"), M = Wt(f, "shadowRoot"), E = Wt(f, "attributes"), R = o && o.prototype ? Wt(o.prototype, "nodeType") : null, C = o && o.prototype ? Wt(o.prototype, "nodeName") : null, T = o && o.prototype ? Wt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const D = r.createElement("template");
    D.content && D.content.ownerDocument && (r = D.content.ownerDocument);
  }
  let F, U = "", G, J = !1, ae = 0;
  const fe = function() {
    if (ae > 0)
      throw mn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Y = function(h) {
    fe(), ae++;
    try {
      return F.createHTML(h);
    } finally {
      ae--;
    }
  }, Pe = function(h) {
    fe(), ae++;
    try {
      return F.createScriptURL(h);
    } finally {
      ae--;
    }
  }, Ne = function() {
    return J || (G = SS(d, i), J = !0), G;
  }, ee = r, K = ee.implementation, re = ee.createNodeIterator, $e = ee.createDocumentFragment, Qe = ee.getElementsByTagName, tr = n.importNode;
  let le = Id();
  t.isSupported = typeof gg == "function" && typeof v == "function" && K && K.createHTMLDocument !== void 0;
  const Ze = pS, wi = hS, rr = gS, Kn = mS, Oi = yS, ue = bS, ot = kS, ia = xS;
  let $r = qd, Te = null;
  const xe = he({}, [...Pd, ...Oa, ...qa, ...Ra, ...Nd]);
  let oe = null;
  const mt = he({}, [...wd, ...$a, ...Od, ...Vs]);
  let Oe = Object.seal(ni(null, {
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
  })), Vt = null, Is = null;
  const Ot = Object.seal(ni(null, {
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
  let qi = !0, gr = !0, cn = !1, Ls = !0, yt = !1, qt = !0, dt = !1, ln = !1, Ir = null, zn = null, jn = !1, Lr = !1, un = !1, A = !1, L = !0, B = !1;
  const W = "user-content-";
  let me = !0, at = !1, Rt = {}, Mt = null;
  const Bn = he({}, [
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
  let Ri = null;
  const tu = he({}, ["audio", "video", "img", "source", "image", "track"]);
  let sa = null;
  const ru = he({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ds = "http://www.w3.org/1998/Math/MathML", Us = "http://www.w3.org/2000/svg", nr = "http://www.w3.org/1999/xhtml";
  let Vn = nr, oa = !1, aa = null;
  const ly = he({}, [Ds, Us, nr], wa), nu = tt(["mi", "mo", "mn", "ms", "mtext"]);
  let ca = he({}, nu);
  const iu = tt(["annotation-xml"]);
  let la = he({}, iu);
  const uy = he({}, ["title", "style", "font", "a", "script"]);
  let $i = null;
  const dy = ["application/xhtml+xml", "text/html"], fy = "text/html";
  let Ie = null, Wn = null;
  const py = r.createElement("form"), su = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, ua = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Wn && Wn === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = ct(h), $i = // eslint-disable-next-line unicorn/prefer-includes
    dy.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? fy : h.PARSER_MEDIA_TYPE, Ie = $i === "application/xhtml+xml" ? wa : Gi, Te = Fr(h, "ALLOWED_TAGS", xe, {
      transform: Ie
    }), oe = Fr(h, "ALLOWED_ATTR", mt, {
      transform: Ie
    }), aa = Fr(h, "ALLOWED_NAMESPACES", ly, {
      transform: wa
    }), sa = Fr(h, "ADD_URI_SAFE_ATTR", ru, {
      transform: Ie,
      base: ru
    }), Ri = Fr(h, "ADD_DATA_URI_TAGS", tu, {
      transform: Ie,
      base: tu
    }), Mt = Fr(h, "FORBID_CONTENTS", Bn, {
      transform: Ie
    }), Vt = Fr(h, "FORBID_TAGS", ct({}), {
      transform: Ie
    }), Is = Fr(h, "FORBID_ATTR", ct({}), {
      transform: Ie
    }), Rt = Je(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? ct(h.USE_PROFILES) : h.USE_PROFILES : !1, qi = h.ALLOW_ARIA_ATTR !== !1, gr = h.ALLOW_DATA_ATTR !== !1, cn = h.ALLOW_UNKNOWN_PROTOCOLS || !1, Ls = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, yt = h.SAFE_FOR_TEMPLATES || !1, qt = h.SAFE_FOR_XML !== !1, dt = h.WHOLE_DOCUMENT || !1, Lr = h.RETURN_DOM || !1, un = h.RETURN_DOM_FRAGMENT || !1, A = h.RETURN_TRUSTED_TYPE || !1, jn = h.FORCE_BODY || !1, L = h.SANITIZE_DOM !== !1, B = h.SANITIZE_NAMED_PROPS || !1, me = h.KEEP_CONTENT !== !1, at = h.IN_PLACE || !1, $r = uS(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : qd, Vn = typeof h.NAMESPACE == "string" ? h.NAMESPACE : nr, ca = Je(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(h.MATHML_TEXT_INTEGRATION_POINTS) : he({}, nu), la = Je(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? ct(h.HTML_INTEGRATION_POINTS) : he({}, iu);
    const x = Je(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? ct(h.CUSTOM_ELEMENT_HANDLING) : ni(null);
    if (Oe = ni(null), Je(x, "tagNameCheck") && su(x.tagNameCheck) && (Oe.tagNameCheck = x.tagNameCheck), Je(x, "attributeNameCheck") && su(x.attributeNameCheck) && (Oe.attributeNameCheck = x.attributeNameCheck), Je(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (Oe.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), st(Oe), yt && (gr = !1), un && (Lr = !0), Rt && (Te = he({}, Nd), oe = ni(null), Rt.html === !0 && (he(Te, Pd), he(oe, wd)), Rt.svg === !0 && (he(Te, Oa), he(oe, $a), he(oe, Vs)), Rt.svgFilters === !0 && (he(Te, qa), he(oe, $a), he(oe, Vs)), Rt.mathMl === !0 && (he(Te, Ra), he(oe, Od), he(oe, Vs))), Ot.tagCheck = null, Ot.attributeCheck = null, Je(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? Ot.tagCheck = h.ADD_TAGS : Vr(h.ADD_TAGS) && (Te === xe && (Te = ct(Te)), he(Te, h.ADD_TAGS, Ie))), Je(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? Ot.attributeCheck = h.ADD_ATTR : Vr(h.ADD_ATTR) && (oe === mt && (oe = ct(oe)), he(oe, h.ADD_ATTR, Ie))), Je(h, "ADD_URI_SAFE_ATTR") && Vr(h.ADD_URI_SAFE_ATTR) && he(sa, h.ADD_URI_SAFE_ATTR, Ie), Je(h, "FORBID_CONTENTS") && Vr(h.FORBID_CONTENTS) && (Mt === Bn && (Mt = ct(Mt)), he(Mt, h.FORBID_CONTENTS, Ie)), Je(h, "ADD_FORBID_CONTENTS") && Vr(h.ADD_FORBID_CONTENTS) && (Mt === Bn && (Mt = ct(Mt)), he(Mt, h.ADD_FORBID_CONTENTS, Ie)), me && (Te["#text"] = !0), dt && he(Te, ["html", "head", "body"]), Te.table && (he(Te, ["tbody"]), delete Vt.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw mn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw mn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = F;
      F = h.TRUSTED_TYPES_POLICY;
      try {
        U = Y("");
      } catch (V) {
        throw F = q, V;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (F = void 0, U = "") : (F === void 0 && (F = Ne()), F && typeof U == "string" && (U = Y("")));
    tt && tt(h), Wn = h;
  }, ou = he({}, [...Oa, ...qa, ...dS]), au = he({}, [...Ra, ...fS]), hy = function(h, x, q) {
    return x.namespaceURI === nr ? h === "svg" : x.namespaceURI === Ds ? h === "svg" && (q === "annotation-xml" || ca[q]) : !!ou[h];
  }, gy = function(h, x, q) {
    return x.namespaceURI === nr ? h === "math" : x.namespaceURI === Us ? h === "math" && la[q] : !!au[h];
  }, my = function(h, x, q) {
    return x.namespaceURI === Us && !la[q] || x.namespaceURI === Ds && !ca[q] ? !1 : !au[h] && (uy[h] || !ou[h]);
  }, yy = function(h) {
    let x = v(h);
    (!x || !x.tagName) && (x = {
      namespaceURI: Vn,
      tagName: "template"
    });
    const q = Gi(h.tagName), V = Gi(x.tagName);
    return aa[h.namespaceURI] ? h.namespaceURI === Us ? hy(q, x, V) : h.namespaceURI === Ds ? gy(q, x, V) : h.namespaceURI === nr ? my(q, x, V) : !!($i === "application/xhtml+xml" && aa[h.namespaceURI]) : !1;
  }, Dr = function(h) {
    ti(t.removed, {
      element: h
    });
    try {
      v(h).removeChild(h);
    } catch {
      if (g(h), !v(h))
        throw mn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Fs = function(h) {
    Ii(h);
    const x = y(h);
    if (x) {
      const V = [];
      ei(x, (H) => {
        ti(V, H);
      }), ei(V, (H) => {
        try {
          g(H);
        } catch {
        }
      });
    }
    const q = E(h);
    if (q)
      for (let V = q.length - 1; V >= 0; --V) {
        const H = q[V], ne = H && H.name;
        if (typeof ne == "string")
          try {
            h.removeAttribute(ne);
          } catch {
          }
      }
  }, dn = function(h, x) {
    try {
      ti(t.removed, {
        attribute: x.getAttributeNode(h),
        from: x
      });
    } catch {
      ti(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(h), h === "is")
      if (Lr || un)
        try {
          Dr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(h, "");
        } catch {
        }
  }, by = function(h) {
    const x = E(h);
    if (x)
      for (let q = x.length - 1; q >= 0; --q) {
        const V = x[q], H = V && V.name;
        if (!(typeof H != "string" || oe[Ie(H)]))
          try {
            h.removeAttribute(H);
          } catch {
          }
      }
  }, Ii = function(h) {
    const x = [h];
    for (; x.length > 0; ) {
      const q = x.pop();
      (R ? R(q) : q.nodeType) === Et.element && by(q);
      const H = y(q);
      if (H)
        for (let ne = H.length - 1; ne >= 0; --ne)
          x.push(H[ne]);
    }
  }, ky = function(h) {
    if (!qt)
      return;
    const x = [h];
    for (; x.length > 0; ) {
      const q = x.pop(), V = R ? R(q) : q.nodeType;
      if (V === Et.processingInstruction || V === Et.comment && Ge($d, q.data)) {
        try {
          g(q);
        } catch {
        }
        continue;
      }
      if (V === Et.element) {
        const ne = q, ve = Ie(C ? C(q) : q.nodeName);
        try {
          ne.hasAttribute && ne.hasAttribute("patchsrc") && ne.removeAttribute("patchsrc"), ne.hasAttribute && ne.hasAttribute("for") && ve !== "label" && ve !== "output" && ne.removeAttribute("for");
        } catch {
        }
      }
      const H = y(q);
      if (H)
        for (let ne = H.length - 1; ne >= 0; --ne)
          x.push(H[ne]);
    }
  }, cu = function(h) {
    let x = null, q = null;
    if (jn)
      h = "<remove></remove>" + h;
    else {
      const ne = Sd(h, /^[\r\n\t ]+/);
      q = ne && ne[0];
    }
    $i === "application/xhtml+xml" && Vn === nr && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const V = F ? Y(h) : h;
    if (Vn === nr)
      try {
        x = new u().parseFromString(V, $i);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = K.createDocument(Vn, "template", null);
      try {
        x.documentElement.innerHTML = oa ? U : V;
      } catch {
      }
    }
    const H = x.body || x.documentElement;
    return h && q && H.insertBefore(r.createTextNode(q), H.childNodes[0] || null), Vn === nr ? Qe.call(x, dt ? "html" : "body")[0] : dt ? x.documentElement : H;
  }, lu = function(h) {
    const x = T ? T(h) : h.ownerDocument;
    return re.call(
      x || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ks = function(h) {
    return h = zi(h, Ze, " "), h = zi(h, wi, " "), h = zi(h, rr, " "), h;
  }, da = function(h) {
    var x;
    h.normalize();
    const q = T ? T(h) : h.ownerDocument, V = re.call(
      q || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let H = V.nextNode();
    for (; H; )
      H.data = Ks(H.data), H = V.nextNode();
    const ne = (x = h.querySelectorAll) === null || x === void 0 ? void 0 : x.call(h, "template");
    ne && ei(ne, (ve) => {
      Hn(ve.content) && da(ve.content);
    });
  }, zs = function(h) {
    const x = C ? C(h) : null;
    return typeof x != "string" || Ie(x) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    h.attributes !== E(h) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    h.nodeType !== R(h) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Hn = function(h) {
    if (!R || typeof h != "object" || h === null)
      return !1;
    try {
      return R(h) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, Li = function(h) {
    if (!R || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof R(h) == "number";
    } catch {
      return !1;
    }
  };
  function ir(D, h, x) {
    D.length !== 0 && ei(D, (q) => {
      q.call(t, h, x, Wn);
    });
  }
  const Ty = function(h, x) {
    return !!(qt && h.hasChildNodes() && !Li(h.firstElementChild) && Ge(Rd, h.textContent) && Ge(Rd, h.innerHTML) || qt && h.namespaceURI === nr && x === "style" && Li(h.firstElementChild) || h.nodeType === Et.processingInstruction || qt && h.nodeType === Et.comment && Ge($d, h.data));
  }, xy = function(h, x, q) {
    if (!Vt[x] && pu(x) && (Oe.tagNameCheck instanceof RegExp && Ge(Oe.tagNameCheck, x) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(x)))
      return !1;
    if (me && !Mt[x]) {
      const V = v(h), H = y(h);
      if (H && V) {
        const ne = H.length;
        for (let ve = ne - 1; ve >= 0; --ve) {
          const Le = h === q ? p(H[ve], !0) : H[ve];
          V.insertBefore(Le, m(h));
        }
      }
    }
    return Dr(h), !0;
  }, uu = function(h, x, q, V) {
    return h.length === 0 ? x : x === q || x === V ? ct(x) : x;
  }, du = function(h, x) {
    if (ir(le.beforeSanitizeElements, h, null), h !== x && v(h) === null)
      return at && Ii(h), !0;
    if (zs(h))
      return Dr(h), !0;
    const q = Ie(C ? C(h) : h.nodeName);
    if (Te = uu(le.uponSanitizeElement, Te, xe, Ir), ir(le.uponSanitizeElement, h, {
      tagName: q,
      allowedTags: Te
    }), h !== x && v(h) === null)
      return at && Ii(h), !0;
    if (Ty(h, q))
      return Dr(h), !0;
    if (Vt[q] || !(Ot.tagCheck instanceof Function && Ot.tagCheck(q)) && !Te[q]) {
      const H = xy(h, q, x);
      return H === !1 && ir(le.afterSanitizeElements, h, null), H;
    }
    if ((R ? R(h) : h.nodeType) === Et.element && !yy(h) || (q === "noscript" || q === "noembed" || q === "noframes") && Ge(vS, h.innerHTML))
      return Dr(h), !0;
    if (yt && h.nodeType === Et.text) {
      const H = Ks(h.textContent);
      h.textContent !== H && (ti(t.removed, {
        element: h.cloneNode()
      }), h.textContent = H);
    }
    return ir(le.afterSanitizeElements, h, null), !1;
  }, fu = function(h, x, q) {
    if (Is[x] || qt && x === "patchsrc" || qt && x === "for" && h !== "label" && h !== "output" || L && (x === "id" || x === "name") && (q in r || q in py))
      return !1;
    const V = oe[x] || Ot.attributeCheck instanceof Function && Ot.attributeCheck(x, h);
    if (!(gr && Ge(Kn, x))) {
      if (!(qi && Ge(Oi, x))) {
        if (V) {
          if (!sa[x]) {
            if (!Ge($r, zi(q, ot, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && h !== "script" && Md(q, "data:") === 0 && Ri[h])) {
                if (!(cn && !Ge(ue, zi(q, ot, "")))) {
                  if (q)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(pu(h) && (Oe.tagNameCheck instanceof RegExp && Ge(Oe.tagNameCheck, h) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(h)) && (Oe.attributeNameCheck instanceof RegExp && Ge(Oe.attributeNameCheck, x) || Oe.attributeNameCheck instanceof Function && Oe.attributeNameCheck(x, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && Oe.allowCustomizedBuiltInElements && (Oe.tagNameCheck instanceof RegExp && Ge(Oe.tagNameCheck, q) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(q)))
        ) return !1;
      }
    }
    return !0;
  }, vy = he({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), pu = function(h) {
    return !vy[Gi(h)] && Ge(ia, h);
  }, _y = function(h, x, q, V) {
    if (F && typeof d == "object" && typeof d.getAttributeType == "function" && !q)
      switch (d.getAttributeType(h, x)) {
        case "TrustedHTML":
          return Y(V);
        case "TrustedScriptURL":
          return Pe(V);
      }
    return V;
  }, Cy = function(h, x, q, V) {
    try {
      q ? h.setAttributeNS(q, x, V) : h.setAttribute(x, V), zs(h) ? Dr(h) : Cd(t.removed);
    } catch {
      dn(x, h);
    }
  }, hu = function(h) {
    ir(le.beforeSanitizeAttributes, h, null);
    const x = h.attributes;
    if (!x || zs(h))
      return;
    oe = uu(le.uponSanitizeAttribute, oe, mt, zn);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: oe,
      forceKeepAttr: void 0
    };
    let V = x.length;
    const H = Ie(h.nodeName);
    for (; V--; ) {
      const ne = x[V], ve = ne.name, Le = ne.namespaceURI, bt = ne.value, kt = Ie(ve), pa = bt;
      let ft = ve === "value" ? pa : iS(pa);
      if (q.attrName = kt, q.attrValue = ft, q.keepAttr = !0, q.forceKeepAttr = void 0, ir(le.uponSanitizeAttribute, h, q), ft = q.attrValue, B && (kt === "id" || kt === "name") && Md(ft, W) !== 0 && (dn(ve, h), ft = W + ft), qt && Ge(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        dn(ve, h);
        continue;
      }
      if (kt === "attributename" && Sd(ft, "href")) {
        dn(ve, h);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          dn(ve, h);
          continue;
        }
        if (!Ls && Ge(_S, ft)) {
          dn(ve, h);
          continue;
        }
        if (yt && (ft = Ks(ft)), !fu(H, kt, ft)) {
          dn(ve, h);
          continue;
        }
        ft = _y(H, kt, Le, ft), ft !== pa && Cy(h, ve, Le, ft);
      }
    }
    ir(le.afterSanitizeAttributes, h, null);
  }, js = function(h) {
    let x = null;
    const q = lu(h);
    for (ir(le.beforeSanitizeShadowDOM, h, null); x = q.nextNode(); )
      if (ir(le.uponSanitizeShadowNode, x, null), du(x, h), hu(x), Hn(x.content) && js(x.content), (R ? R(x) : x.nodeType) === Et.element) {
        const H = M(x);
        Hn(H) && (fa(H), js(H));
      }
    ir(le.afterSanitizeShadowDOM, h, null);
  }, fa = function(h) {
    const x = [{
      node: h,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const q = x.pop();
      if (q.shadow) {
        js(q.shadow);
        continue;
      }
      const V = q.node, ne = (R ? R(V) : V.nodeType) === Et.element, ve = y(V);
      if (ve)
        for (let Le = ve.length - 1; Le >= 0; --Le)
          x.push({
            node: ve[Le],
            shadow: null
          });
      if (ne) {
        const Le = C ? C(V) : null;
        if (typeof Le == "string" && Ie(Le) === "template") {
          const bt = V.content;
          Hn(bt) && x.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (ne) {
        const Le = M(V);
        Hn(Le) && x.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, q = null, V = null, H = null;
    if (oa = !D, oa && (D = "<!-->"), typeof D != "string" && !Li(D) && (D = lS(D), typeof D != "string"))
      throw mn("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    ln ? (Te = Ir, oe = zn) : ua(h), (le.uponSanitizeElement.length > 0 || le.uponSanitizeAttribute.length > 0) && (Te = ct(Te)), le.uponSanitizeAttribute.length > 0 && (oe = ct(oe)), t.removed = [];
    const ne = at && typeof D != "string" && Li(D);
    if (ne) {
      ky(D);
      const bt = C ? C(D) : D.nodeName;
      if (typeof bt == "string") {
        const kt = Ie(bt);
        if (!Te[kt] || Vt[kt])
          throw Fs(D), mn("root node is forbidden and cannot be sanitized in-place");
      }
      if (zs(D))
        throw Fs(D), mn("root node is clobbered and cannot be sanitized in-place");
      try {
        fa(D);
      } catch (kt) {
        throw Fs(D), kt;
      }
    } else if (Li(D))
      x = cu("<!---->"), q = x.ownerDocument.importNode(D, !0), q.nodeType === Et.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? x = q : x.appendChild(q), fa(q);
    else {
      if (!Lr && !yt && !dt && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return F && A ? Y(D) : D;
      if (x = cu(D), !x)
        return Lr ? null : A ? U : "";
    }
    x && jn && Dr(x.firstChild);
    const ve = ne ? D : x;
    try {
      const bt = lu(ve);
      for (; V = bt.nextNode(); )
        du(V, ve), hu(V), Hn(V.content) && js(V.content);
    } catch (bt) {
      throw ne && (Fs(D), ei(t.removed, (kt) => {
        kt.element && Ii(kt.element);
      })), bt;
    }
    if (ne)
      return ei(t.removed, (bt) => {
        bt.element && Ii(bt.element);
      }), yt && da(D), D;
    if (Lr) {
      if (yt && da(x), un)
        for (H = $e.call(x.ownerDocument); x.firstChild; )
          H.appendChild(x.firstChild);
      else
        H = x;
      return (oe.shadowroot || oe.shadowrootmode) && (H = tr.call(n, H, !0)), H;
    }
    let Le = dt ? x.outerHTML : x.innerHTML;
    return dt && Te["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Ge(TS, x.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Le), yt && (Le = Ks(Le)), F && A ? Y(Le) : Le;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ua(D), ln = !0, Ir = Te, zn = oe;
  }, t.clearConfig = function() {
    Wn = null, ln = !1, Ir = null, zn = null, F = G, U = "";
  }, t.isValidAttribute = function(D, h, x) {
    Wn || ua({});
    const q = Ie(D), V = Ie(h);
    return fu(q, V, x);
  }, t.addHook = function(D, h) {
    typeof h == "function" && Je(le, D) && ti(le[D], h);
  }, t.removeHook = function(D, h) {
    if (Je(le, D)) {
      if (h !== void 0) {
        const x = rS(le[D], h);
        return x === -1 ? void 0 : nS(le[D], x, 1)[0];
      }
      return Cd(le[D]);
    }
  }, t.removeHooks = function(D) {
    Je(le, D) && (le[D] = []);
  }, t.removeAllHooks = function() {
    le = Id();
  }, t;
}
var MS = yg();
function ES({ structureProtectionMode: e = "off" }) {
  const [t] = ce(), r = X(void 0), [n, i] = pe(void 0), s = de((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const g = jC(p);
      if (!g)
        return !1;
      const m = w();
      return e === "protected" ? m && BC(m, g) ? (p.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, p);
    }, a = (p, g) => {
      const m = w(), y = r.current;
      if (y && m && xd(m, y)) {
        if (s(void 0), g.preventDefault(), p !== y.intent)
          return !0;
        const M = Q(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (M) {
            const E = M.getParent(), R = M.getPreviousSibling(), C = M.getNextSibling();
            M.remove(), R ? pg(R) : C && S(C) ? C.select(0, 0) : E?.selectStart();
          }
        } else y.kind === "selection" ? N(m) && m.removeText() : Ee(M) && WC(M);
        return !0;
      }
      if (!m)
        return !1;
      const v = VC(m, p);
      if (v) {
        if (v.kind === "verse") {
          const M = Df();
          M.add(v.node.getKey()), xn(M);
        } else {
          const M = No();
          M.anchor.set(v.node.getKey(), 0, "element"), M.focus.set(v.node.getKey(), v.node.getChildrenSize(), "element"), xn(M);
        }
        return s({ key: v.node.getKey(), kind: v.kind, intent: p }), g.preventDefault(), !0;
      }
      if (N(m) && !m.isCollapsed() && ql(m)) {
        const M = m.getNodes().filter(be).map((C) => C.getKey()), { anchor: E, focus: R } = m;
        return s({
          kind: "selection",
          intent: p,
          key: M[0],
          anchor: { key: E.key, offset: E.offset, type: E.type },
          focus: { key: R.key, offset: R.offset, type: R.type }
        }), g.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return !g || !Na(g) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, g) => {
      if (!p)
        return !1;
      const m = MS.sanitize(p), y = new DOMParser().parseFromString(m, "text/html"), v = HC(mb(t, y)), M = w();
      return N(M) && M.insertNodes(v), g.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return g && Na(g) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return g && Na(g) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        xd(w(), p) || s(void 0);
      });
    };
    return Ye(t.registerCommand(Ar, o, Ue), t.registerCommand(_n, c, Ue), t.registerCommand(br, u, Ue), t.registerCommand(Gy, c, Ue), t.registerCommand(Fc, d, Ue), t.registerCommand(Uc, c, Ue), t.registerUpdateListener(f));
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
const u0 = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function AS({ textDirection: e }) {
  const [t] = ce();
  return PS(t, e), null;
}
function PS(e, t) {
  j(() => (Ld(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Ld(e, t);
  })), [e, t]);
}
function Ld(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function NS() {
  const [e] = ce();
  return wS(e), null;
}
function wS(e) {
  j(() => {
    if (!e.hasNodes([ke, St, we, je, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ye(
      e.registerNodeTransform(je, OS),
      e.registerNodeTransform(je, (t) => qS(t, e)),
      e.registerNodeTransform(pt, Dd),
      e.registerNodeTransform(St, Dd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        us(Cr("va"), t), us(Cr("vp"), t);
      })
    );
  }, [e]);
}
function OS(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || z(r) || I(n) || I(r) || ge(n) || ge(r) || qe(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  qe(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  te(e, se) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  ze(n))
    return;
  if (be(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  be(r) && hl(e);
}
function qS(e, t) {
  const r = e.getParent();
  !qe(r) || !e.isAttached() || Eh(t, e.getKey()) && r.insertAfter(e);
}
function Dd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ge(t); )
    t = t.getLastChild();
  (I(t) || S(t) && ge(t.getParent())) && e.insertBefore(ye(" "));
}
function Rl(e) {
  if (!z(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !el(n)) ? void 0 : e;
}
function RS(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if ($(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function $S() {
  const e = w();
  if (!(!N(e) || !e.isCollapsed()))
    return Rl(RS(e.anchor));
}
function IS(e) {
  const t = w();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = bg(e.target)), r ? Rl(it(r, z)) : void 0;
}
function bg(e) {
  const t = Jy(e)?.anchorNode;
  if ($f(t))
    return _s(t) ?? void 0;
}
function LS(e) {
  if (w())
    return;
  const t = bg(e);
  return t ? Rl(it(t, z)) : void 0;
}
function DS() {
  const [e] = ce(), t = cg($S);
  return j(() => {
    const r = (n) => {
      Hr(Gr), t(n);
    };
    return Ye(e.registerCommand(cr, () => {
      const n = LS(e.getRootElement());
      return n && r(n), !1;
    }, vn), e.registerCommand(wo, (n) => {
      const i = IS(n);
      return i && r(i), !1;
    }, vn));
  }, [e, t]), null;
}
function US({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = o_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(s_, { trigger: e, items: i });
}
function FS({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = De(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(jS, { trigger: e, harness: i }) : _(US, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const KS = [" ", "*"];
function zS(e, t) {
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
function jS({ trigger: e, harness: t }) {
  const [r] = ce(), [n, i] = pe(void 0), s = X({ query: "", options: [] }), o = X(0), a = de((f, p, g) => {
    const m = p.find((y) => y.kind === "note" && y.marker === f);
    if (m) {
      t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = w();
      N(y) && y.insertText(`${e}${f}${g ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => Ye(r.registerCommand(Ar, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const m = s.current.query;
        return m ? (a(m, n.items, !1), Yy(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = w();
          N(y) && y.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const g = s.current.query;
      if (n.hasTextSelection) {
        const m = n.items.find((y) => y.marker === g);
        return m && t.apply(m, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(g, n.items, !0), !0;
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
  }, Ue), r.registerCommand(Uf, (f) => {
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
  const c = de(() => i(void 0), []), l = de((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = de((f) => {
    const { markerMenuItem: p, applyOpts: g } = f;
    t.apply(p, g);
  }, [t]), d = De(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    zS(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(Fh, { isOpen: !0, children: ({ placement: f }) => _(
    jh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? KS : void 0 },
    n.session
  ) });
}
function kg(e) {
  return e.replaceAll(O, "~").replace(/ {2,}/g, (r) => O.repeat(r.length));
}
function BS(e) {
  return e.replaceAll(O, " ").replaceAll("~", O);
}
function VS(e) {
  return e.replace(/ {2,}/g, " ");
}
let xo;
function WS(e) {
  e && (xo = e);
}
function Tg(e) {
  return Vo(e);
}
function HS(e, t) {
  return e.isEmpty() ? Of : xg(e.toJSON(), t);
}
function xg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Io(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Of;
  if (r.some(yx)) {
    xo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = vg(r), i = Ht(n, t);
  return i ? { type: xr, version: Tr, content: i } : void 0;
}
function GS(e, t) {
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
function JS(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Re({
    type: wt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function YS(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Kp(r, a, c), Re({
    type: wt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function XS(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Kp(t, o, a), Re({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function QS(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Tg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(O) && (t[0] = a.slice(1));
  }
  return Re({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function ZS(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function eM(e, t) {
  const { unknownAttributes: r } = e;
  return Re({ type: lh, ...r, content: t });
}
function tM(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Re({ type: fh, marker: r, ...n, content: t });
}
function rM(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Re({
    type: hh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function nM(e, t) {
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
function ii(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Re({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Jp({ sid: n, eid: i, ...s }, o)
  });
}
function iM(e) {
  return e.text;
}
function sM(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function oM(e) {
  const { marker: t } = e;
  return {
    type: fo,
    marker: t === "" ? void 0 : t
  };
}
function Ud(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function aM(e, t, r, n, i) {
  const s = Xt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = ii({
      type: s,
      marker: ai,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = ii({
      type: s,
      marker: Cn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = ii({
      type: s,
      marker: Cn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = ii({
      type: s,
      marker: ai
    });
    i.push(l);
  }
  (!n || !$o(n)) && t.forEach((l) => {
    const u = ii({
      type: s,
      marker: ai,
      eid: l
    });
    i.push(u);
  });
}
function cM(e, t, r, n) {
  if (!n) return !1;
  let i = t > 0 ? e[t - 1] : r;
  for (; i && $o(i); ) {
    const { children: s } = i;
    i = s.length > 0 ? s[s.length - 1] : void 0;
  }
  return Ns(i) && i.markerSyntax === "opening";
}
function lM(e) {
  let t = e;
  for (; $o(t); ) t = t.children[0];
  return t;
}
function uM(e, t) {
  let r = 0;
  for (; r < e.length; ) {
    const i = e[r];
    if (!Ns(i) || i.markerSyntax !== "opening") break;
    r++;
  }
  const n = lM(e[r]);
  if (En(n) && n.text === Pt(t))
    return n;
}
function Ht(e, t, r, n = !1, i) {
  const s = [];
  let o, a = [];
  return e.forEach((c, l) => {
    const u = c, d = c, f = c, p = c, g = c, m = c, y = c, v = c;
    switch (c.type) {
      case jt.getType():
        s.push(
          GS(
            u,
            Ht(u.children, t)
          )
        );
        break;
      case dr.getType():
        s.push(JS(c));
        break;
      case wt.getType():
        s.push(
          YS(
            d,
            Ht(d.children, t)
          )
        );
        break;
      case St.getType():
      case pt.getType():
        s.push(XS(c));
        break;
      case ke.getType():
        s.push(
          QS(
            f,
            Ht(f.children, t, void 0, !0),
            t
          )
        );
        break;
      case Xe.getType():
        s.push(
          ZS(
            p,
            Ht(p.children, t)
          )
        );
        break;
      case Ln.getType():
        s.push(
          eM(
            c,
            Ht(c.children, t)
          )
        );
        break;
      case vi.getType():
        s.push(
          tM(
            c,
            Ht(c.children, t)
          )
        );
        break;
      case _i.getType():
        s.push(
          rM(
            c,
            Ht(c.children, t)
          )
        );
        break;
      case we.getType():
        s.push(
          nM(
            g,
            Ht(
              g.children,
              t,
              uM(g.children, g.caller)
            )
          )
        );
        break;
      case wr.getType():
      case Nr.getType():
      case Yt.getType():
      case Ff.getType():
      case pr.getType():
        break;
      case et.getType():
        if (o = Ht(
          y.children,
          t,
          r,
          n,
          l > 0 ? e[l - 1] : i
        ), o) {
          const M = y.typedIDs[Wr];
          if (M)
            aM(o, M, a, e[l + 1], s), a = M;
          else {
            const E = o.shift();
            E && (typeof E == "string" ? Ud(s, E) : s.push(E)), o.length > 0 && s.push(...o);
          }
        }
        break;
      case Xt.getType():
        s.push(ii(c));
        break;
      case je.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Ps(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== O && !m.text.startsWith(jc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[xs]?.textType !== "attribute" && // Identity, not text equality: only the ONE node `noteCallerSlotNode` anchored as the
        // note's caller is excluded, so note content that coincidentally reads the same as the
        // caller (anywhere else in the note) still round-trips as data.
        c !== r) {
          let M = iM(m);
          Tg(t) && (cM(e, l, i, n) && M.startsWith(O) && (M = M.slice(1)), M = VS(BS(M))), Ud(s, M);
        }
        break;
      case $n.getType():
        s.push(
          sM(
            v,
            Ht(v.children, t)
          )
        );
        break;
      case Rr.getType():
        s.push(oM(c));
        break;
      case Ci.getType():
        xo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        xo?.error(`Unexpected node type '${c.type}'!`);
    }
  }), s && s.length > 0 ? s : void 0;
}
function vg(e) {
  const t = e.findIndex((r) => Io(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = vg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Ia = {
  initialize: WS,
  deserializeEditorState: HS
}, dM = /^sd\d*$/, fM = /* @__PURE__ */ new Set([
  ...Object.entries(Ha).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !dM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function pM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Tp(i) || Lp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Bk(i)) {
      t && vo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Xc(i) && fM.has(i.marker) && !vo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    _g(i.children, t).forEach((s) => {
      const o = hM(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = gM(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function _g(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Cg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if ($o(i)) {
      const s = _g(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Fd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Fd(i, c.nodes)] });
      });
      return;
    }
    t && vo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Fd(e, t) {
  return { ...e, children: t };
}
function Cg(e) {
  return Ch(e) && e.number !== "";
}
function vo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Cg(r) || vo(r)) : !1;
}
function hM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function gM(e) {
  return {
    type: po,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: xh
  };
}
const Kd = Mg([]), mM = {
  type: Ff.getType(),
  version: 1
};
let $l = [], Z, Nn, Sg, _t;
function yM(e, t) {
  $l = [], TM(e), xM(t);
}
function bM(e = 0) {
}
function kM(e, t) {
  Z = t ?? Bo();
  let r;
  return e ? (e.type !== xr && _t?.warn(`This USJ type '${e.type}' didn't match the expected type '${xr}'.`), e.version !== Tr && _t?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${Tr}'.`
  ), e.content.length > 0 ? (r = Tc(Kr(e.content)), ps(Z) && (r = pM(r, _t))) : r = [Kd]) : r = [Kd], Sg?.($l), {
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
function TM(e) {
  e && (Nn = e), e?.addMissingComments && (Sg = e.addMissingComments);
}
function xM(e) {
  e && (_t = e);
}
function Il() {
  return Vo(Z);
}
function vM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function _M(e) {
  let { marker: t } = e;
  t !== ss && _t?.warn(`Unexpected book marker '${t}'!`), t = t ?? ss;
  const { code: r } = e;
  (!r || !jt.isValidBookCode(r)) && _t?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  Z?.markerMode === "editable" || Z?.markerMode === "visible" ? n.push(
    xt("marker", Ae(t) + " " + r + O)
  ) : Z?.hasGutterParaMarkers && n.push(xt("marker", Ae(t) + O, !0));
  const i = vM(e.content);
  i && n.push(ut(Il() ? kg(i) : i));
  const s = Ke(e, Tk);
  return Re({
    type: jt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: bp
  });
}
function CM(e) {
  let { marker: t } = e;
  t !== ao && _t?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? ao;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ke(e, xk);
  let a;
  Z?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Kt(t, r) ?? "")
  ];
  return Z?.markerMode === "editable" && KM(i, s, c), Z?.markerMode === "editable" ? Re({
    type: wt.getType(),
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
    version: xp
  }) : Re({
    type: dr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Mp
  });
}
function SM(e) {
  let { marker: t } = e;
  t !== co && _t?.warn(`Unexpected verse marker '${t}'!`), t = t ?? co;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (g_(Z) ?? St).getType(), c = Z?.markerMode === "editable" ? wp : _h;
  let l, u;
  Z?.markerMode === "editable" ? l = Kt(t, r) : Z?.markerMode === "visible" && (u = !0);
  const d = Ke(e, Rk);
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
function MM(e, t = [], r = !1) {
  let { marker: n } = e;
  ke.isValidMarker(n, Nn?.extraValidMarkers) || _t?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (Z?.markerMode === "editable") {
    const [a] = t;
    En(a) ? a.text = O + a.text : a && t.unshift(ut(O));
  }
  t.length === 0 && t.push(ut(zt)), yc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ke(e, Ck);
  return s || LM(n, o, i), s || bc(e.marker ?? "", i, !1, r), Re({
    type: ke.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Sp
  });
}
function Mg(e) {
  return {
    type: Yr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Pp
  };
}
function EM(e, t = []) {
  let { marker: r } = e;
  Xe.isValidMarker(r, Nn?.extraValidMarkers) || _t?.warn(`Unexpected para marker '${r}'!`), r = r ?? or;
  const n = [];
  if (Si(Z) && (Z?.markerMode === "editable" ? n.push(
    ht(r),
    ut(O, ur, "token")
  ) : (Z?.markerMode === "visible" || Z?.hasGutterParaMarkers) && n.push(
    xt(
      "marker",
      Ae(r) + O,
      Z?.hasGutterParaMarkers
    )
  )), n.push(...t), Il()) {
    const s = n.find(
      (o) => !Ns(o) && !(En(o) && o.text === O)
    );
    En(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => O.repeat(o.length)));
  }
  const i = Ke(e, Ok);
  return Re({
    type: Xe.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Np
  });
}
function Ll() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function AM(e, t = []) {
  const r = Ke(e, UT);
  return Re({
    ...Ll(),
    type: Ln.getType(),
    unknownAttributes: r,
    children: t,
    version: uh
  });
}
function PM(e, t = []) {
  const r = Ke(e, zT), n = e.marker ?? tc, i = [];
  return Z?.markerMode === "editable" ? i.push(
    ht(n),
    ut(O, ur, "token")
  ) : (Z?.markerMode === "visible" || Z?.hasGutterParaMarkers) && i.push(
    xt(
      "marker",
      Ae(n) + O,
      Z?.hasGutterParaMarkers
    )
  ), i.push(...t), Re({
    ...Ll(),
    type: vi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: ph
  });
}
function NM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? rc;
  Z?.markerMode === "editable" ? s.push(
    ht(o),
    ut(O, ur, "token")
  ) : (Z?.markerMode === "visible" || Z?.hasGutterParaMarkers) && s.push(
    xt(
      "marker",
      Ae(o) + O,
      Z?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const a = Ke(
    e,
    BT
  );
  return Re({
    ...Ll(),
    type: _i.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: a,
    children: s,
    version: gh
  });
}
function wM(e, t) {
  const r = Yk(t);
  let n = () => {
  };
  return Nn?.noteCallerOnClick && (n = Nn.noteCallerOnClick), Re({
    type: Yt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Oh
  });
}
function OM(e, t) {
  let { marker: r } = e;
  we.isValidMarker(r, Nn?.extraValidMarkers) || _t?.warn(`Unexpected note marker '${r}'!`), r = r ?? Vc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : Cl(Z?.noteMode), a = Ke(e, $b), c = Z?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  Z?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (u = ht(r, "closing"))) : Z?.markerMode === "visible" && (l = xt("marker", Ae(r) + " "), s || (u = xt("marker", nt(r))));
  const d = [];
  let f;
  if (l && d.push(l), Z?.markerMode === "editable" && !o)
    f = ut(Pt(i), void 0, c), d.push(f), FM(n, d), d.push(...t);
  else {
    const p = ut(O, ur, "token");
    f = wM(i, t), d.push(f, p, ...t.flatMap(qM(p)));
  }
  return u && d.push(u), Re({
    type: we.getType(),
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
function qM(e) {
  return (t) => pp(t) ? [t] : [t, e];
}
function RM(e) {
  let { marker: t } = e;
  (!t || !Xt.isValidMarker(t, Nn?.extraValidMarkers)) && _t?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ke(e, Bc), s = Yp(e);
  return Re({
    type: Xt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: ip
  });
}
function zd(e, t = []) {
  return {
    type: et.getType(),
    typedIDs: { [Wr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function $M(e, t) {
  const { marker: r } = e, n = e.type, i = Ke(e, gk), s = [];
  if (Z?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = ol(
      n,
      r,
      i
    );
    o && s.push(xt("marker", o)), a && s.push(xt("attribute", a)), s.push(...t), c && s.push(xt("attribute", c)), l && s.push(xt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    En(o) && (o.mode = "token");
  }), Re({
    type: $n.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: gp
  });
}
function IM(e) {
  return {
    type: Rr.getType(),
    marker: e,
    text: Xi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: Z?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: ah
  };
}
function ht(e, t = "opening", r = !1, n = "normal") {
  return {
    type: pr.getType(),
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
    type: je.getType(),
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
    type: Nr.getType(),
    text: t,
    textType: e,
    version: fp
  };
  return r && (n[xs] = { [Hc.key]: !0 }), n;
}
function hs(e, t) {
  return {
    type: wr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: mp
  };
}
function yc(e, t, r = !1) {
  Z?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : Z?.markerMode === "visible" && t.push(xt("marker", Ae(e, r)));
}
function bc(e, t, r = !1, n = !1) {
  Z?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : Z?.markerMode === "visible" && t.push(
    xt(
      "marker",
      r ? nt("") : nt(e, n)
    )
  );
}
function LM(e, t, r) {
  if (Z?.markerMode !== "editable" || !t) return;
  const n = sr(t, Ss(e));
  n && r.push(ut(n, "attribute"));
}
function jd(e, t) {
  if (e.type !== "ms" || Z?.markerMode !== "editable" && Z?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ke(e, Bc), o = Xp(
    n,
    i,
    s,
    Yp(e)
  ), a = sr(o, Ms(r ?? ""));
  if (!a) return;
  const c = O + a;
  Z?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(xt("attribute", c));
}
function DM(e, t) {
  const r = e.marker ?? "";
  if (Z?.markerMode === "editable") {
    const n = [];
    yc(r, n), jd(e, n), bc(r, n, !0), t.push(hs("milestone", n));
  } else
    yc(r, t), jd(e, t), bc(r, t, !0);
}
function Bd(e, t, r) {
  t !== void 0 && r.push(
    hs(e, [
      ht(e, "opening"),
      ut(O + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function UM(e, t) {
  Z?.markerMode === "editable" && (Bd("va", e.altnumber, t), Bd("vp", e.pubnumber, t));
}
function FM(e, t) {
  e !== void 0 && t.push(
    hs("cat", [
      ht("cat", "opening"),
      ut(O + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function KM(e, t, r) {
  e !== void 0 && r.push(
    hs("ca", [
      ht("ca", "opening"),
      ut(O + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    hs("cp", [
      ht("cp", "opening"),
      ut(O + t, "attribute")
    ])
  );
}
function Vd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function zM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Wd(e, t) {
  t.marker === Cn && t.sid !== void 0 && e.push(t.sid), t.marker === ai && t.eid !== void 0 && zM(e, t.eid);
}
function kc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [zd(o, [...n])] : o, c = e[i];
  Wd(n, c);
  const l = kc(
    e.slice(i + 1, s),
    Vd(t, i + 1),
    c.marker === Cn,
    n
  ), u = zd(l, [...n]), d = e[s];
  Wd(n, d);
  const f = kc(
    e.slice(s + 1),
    Vd(t, s + 1),
    d.marker === Cn,
    n
  );
  return [...a, u, ...f];
}
function Kr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(Il() ? kg(i) : i));
    else if (!i.type)
      _t?.error("Marker type is missing!");
    else
      switch (i.type) {
        case jt.getType():
          n.push(_M(i));
          break;
        case wt.getType():
          n.push(CM(i));
          break;
        case pt.getType():
          Z?.hasSpacing || n.push(mM), n.push(SM(i)), UM(i, n);
          break;
        case ke.getType():
          n.push(
            MM(i, Kr(i.content, !0), t)
          );
          break;
        case Xe.getType():
          n.push(EM(i, Kr(i.content)));
          break;
        case we.getType():
          n.push(OM(i, Kr(i.content)));
          break;
        case Xt.getType():
          sp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && $l?.push(i.sid)), n.push(RM(i)), DM(i, n);
          break;
        case Rr.getType():
          n.push(IM(i.marker ?? ""));
          break;
        case lh:
          n.push(AM(i, Kr(i.content)));
          break;
        case fh:
          n.push(PM(i, Kr(i.content)));
          break;
        case hh:
          n.push(NM(i, Kr(i.content)));
          break;
        default:
          _t?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push($M(i, Kr(i.content)));
      }
  }), kc(n, r);
}
function Tc(e) {
  const t = e.findIndex(
    (n) => Tp(n) || Lp(n) || Xc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    KT(n)
  );
  if (t >= 0) {
    const n = Tc(e.slice(0, t)), i = e[t], s = Tc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Ch(n)))
    return [Mg(e)];
  return e;
}
const tn = {
  initialize: yM,
  reset: bM,
  serializeEditorState: kM
};
function Eg(e) {
  if (e && !P(e)) {
    if (S(e)) return e;
    if ($(e))
      for (const t of e.getChildren()) {
        const r = Eg(t);
        if (r) return r;
      }
  }
}
function jM() {
  const e = w();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((S(t) && !P(t) ? An(t) : void 0) && S(t)) {
      const i = ye(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      di(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Eg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(O) ? O : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return S(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Ag(e)) {
    if (!An(t)) continue;
    di(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(O) && r.setTextContent(n.slice(O.length));
  }
  return !0;
}
function Ag(e) {
  const [t, r] = qf(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!S(a) || P(a) || te(a, se) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function BM() {
  const e = w();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return An(t) ? Ee(ll(t)) : !1;
}
function Pg() {
  let e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (P(t) && !fl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (I(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = w(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!S(t) || P(t) || !An(t)) return !1;
  const r = ll(t);
  if (!Ee(r)) return !1;
  const n = ye(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  di(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return I(a) ? ul(a) : o.select(0, 0), !0;
}
const Ng = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Dp(Se().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = rl(e), r = ml(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Qk(0, o);
        const a = Nx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Vp(c) && nl(parseInt(n, 10), c);
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
  return we.isValidMarker(e, t) || !!Ng[e] || Xe.isValidMarker(e, t) || ke.isValidMarker(e, t);
}
function VM(e, t) {
  return ke.isNoteContentMarker(e) ? !1 : ke.isValidMarker(e, t);
}
function wg(e, t, r, n, i, s) {
  const o = Lh(
    e,
    void 0,
    void 0,
    t,
    n ?? Bo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function vc(e, t, r, n, i, s, o) {
  if (we.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = wg(
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
  const a = XM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = w();
      N(u) && (Th(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Vu(d, tn, r), g = ga(p);
      if (N(u)) {
        const m = u.anchor.getNode(), y = m.getParent(), v = An(m), M = u.anchor.key === u.focus.key;
        if (I(g) && v && M && !La(g, o))
          GM(
            u,
            g,
            m,
            r?.markerMode === "editable"
          );
        else if (I(g) && !M && !La(g, o) && JM(u))
          YM(u, g, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          QM(
            u,
            () => ga(p)
          );
        else if ($(g) && !g.isInline()) {
          const E = u.insertParagraph();
          if (E) {
            const R = E.getChildren();
            g.append(...R), E.replace(g), Ee(g) && Ei(g) || g.selectStart();
          }
        } else if (I(g) && S(m) && !P(m) && I(m.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        La(g, o)) {
          const E = m.getParent();
          if (I(E)) {
            const R = u.anchor.offset;
            if (R === 0) m.insertBefore(g);
            else if (R >= m.getTextContentSize()) m.insertAfter(g);
            else {
              const [T] = m.splitText(R);
              T.insertAfter(g);
            }
            g.getChildren().forEach((T) => {
              P(T) && T.setNested(!0);
            });
            const C = g.getChildren().find((T) => S(T) && !P(T));
            C && S(C) ? C.select(
              C.getTextContentSize(),
              C.getTextContentSize()
            ) : g.selectEnd();
          }
        } else if (S(m) && !P(m) && u.isCollapsed() && (z(y) || I(y) && z(y.getParent()))) {
          const E = I(y) ? y : void 0, R = E ? WM(m, u.anchor.offset) : [];
          let T = (E ?? m).insertAfter(g);
          if (Or(g)) {
            const F = {
              ...r || Bo(),
              markerMode: "hidden"
            }, U = Vu(
              d,
              tn,
              F
            ), G = ga(U);
            T = T.insertAfter(G);
          }
          if (R.length > 0 && E) {
            const F = _o(E).append(...R);
            T.insertAfter(F), E.isEmpty() && E.remove();
          } else S(T.getNextSibling()) || T.insertAfter(ye(O));
          $(T) && T.selectEnd();
        } else if (u.insertNodes([g]), cE(g), f) {
          const E = Df();
          E.add(g.getKey()), xn(E);
        } else if (I(g)) {
          const E = g.getChildren().find((R) => S(R) && !P(R));
          E && S(E) ? E.select(
            E.getTextContentSize(),
            E.getTextContentSize()
          ) : g.selectEnd();
        } else {
          const E = g.getNextSibling();
          E ? E.selectStart() : g.selectStart();
        }
      } else
        u?.insertNodes([g]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function WM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function La(e, t) {
  return ((t ?? ho).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function HM(e, t) {
  t && e.getChildren().forEach((i) => {
    P(i) && i.setNested(!0);
  }), e.getChildren().some((i) => P(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function GM(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && I(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !S(r)) {
    const o = e.anchor.offset;
    if (S(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else S(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = gi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (di(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), S(i) && !i.getTextContent().startsWith(O) && i.setTextContent(O + i.getTextContent());
    const o = t.getChildren().find((a) => S(a) && !P(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => S(o) && !P(o));
  S(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function JM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (P(n) || I(n)) continue;
    if (!S(n) || n.getType() !== je.getType() || te(n, se) === "attribute") return !1;
    const i = ll(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    An(n) && (r = !0);
  }
  return r;
}
function YM(e, t, r) {
  const n = Ag(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!An(a)) return;
    di(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(O) && c.setTextContent(l.slice(O.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(O) || i.setTextContent(O + i.getTextContent());
  const s = t.getChildren().find((a) => S(a) && !P(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function XM(e, t) {
  let r = Ng[e];
  return r || (Xe.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: Xe.getType(), marker: e, content: [] }] })
  } : ke.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ke.getType(), marker: e };
      return (ke.isValidFootnoteMarker(e) || ke.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function QM(e, t) {
  const r = e.getNodes(), [n, i] = gi(e);
  let s;
  r.forEach((o, a) => {
    if ($(s) && s.isParentOf(o))
      return;
    const c = Og(
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
    s || (s = t(), c.insertBefore(s), l = !0, I(s) && s.getChildren().some((d) => P(d) && d.getMarkerSyntax() === "opening") && HM(s, I(s.getParent()))), eE(c, s, l);
  }), (S(s) || $(s)) && s.selectEnd();
}
function gi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Dl(e) {
  return ge(e) || z(e) || z(e.getParent());
}
function Og(e, t, r, n, i) {
  if (!Dl(e)) {
    if (S(e))
      return ZM(e, t, r, n, i);
    if ($(e) && e.isInline())
      return e;
  }
}
function ZM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function eE(e, t, r) {
  if (S(t)) {
    const n = _c(e, t);
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
    _c(e, t), r && I(t) && t.getChildren().some((s) => P(s)) && S(e) && !P(e) && !e.getTextContent().startsWith(O) && e.setTextContent(O + e.getTextContent());
  }
}
function _c(e, t) {
  let r = e.getTextContent();
  if (S(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    hl(n), S(n) || t.insertBefore(ye(" "));
  }
  return r;
}
function qg(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = wn(u, t);
    if (!f) return !1;
    const p = S(u) ? u.getTextContentSize() : 0;
    if (Hd(f, r), S(u) && u.isAttached()) {
      const g = u.getTextContentSize(), m = Math.max(p - g, 0), y = Math.max(0, Math.min(d - m, g)), v = w();
      N(v) && v.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = gi(e);
  if (!Fl(n, t, s, o)) return !1;
  const a = Ul(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = wn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Lg(d, a);
    f && (Hd(f, r), l = !0);
  }), Dg(a, i), l;
}
function Hd(e, t) {
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
    S(n) && i.startsWith(O) && n.setTextContent(i.slice(O.length));
  }), Ba(e);
}
function Ul(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Og(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    S(o) && n.push(o);
  }), n;
}
function wn(e, t) {
  let r = e, n;
  for (; r && !Ee(r); ) {
    if (z(r)) return;
    !n && I(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Rg(e) {
  const t = it(
    e,
    (r) => z(r) || Ee(r)
  );
  return z(t);
}
function $g(e) {
  return e.filter(
    (t) => !Dl(t) && (S(t) || $(t) && t.isInline())
  );
}
function tE(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!S(i) || Dl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function rE(e, t, r) {
  return e.getChildren().some(
    (n) => $(n) && t.some((i) => n.isParentOf(i)) && !Ig(n, r)
  );
}
function Fl(e, t, r, n, i) {
  const s = $g(e), o = tE(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = wn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !rE(l, s, o);
  });
}
function Ig(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Bt(r));
}
function Lg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if ($(u) && t.some((d) => u.isParentOf(d))) {
      if (!Ig(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Bt(n[s - 1]) && (s -= 1), o < n.length - 1 && Bt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(_o(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(_o(e).append(...c)), e;
}
function _o(e) {
  return Xy(e);
}
function Dg(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function nE(e, t, r) {
  if (e.isCollapsed()) {
    const l = wn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (wu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = gi(e);
  if (!Fl(n, r, i, s, t)) return !1;
  const o = Ul(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = wn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Lg(u, o);
    d && (wu(d, t), c = !0);
  }), c;
}
function iE(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = gi(e);
  if (!!!i?.some(
    (y) => Fl(s, y, o, a)
  ) && !sE(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const v = w();
    N(v) && qg(v, y, n) && (l = !0);
  });
  const u = w();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = gi(u), g = Ul(
    u.getNodes(),
    f,
    p
  );
  if (g.length === 0) return l;
  const m = g.filter(
    (y) => !Rg(y) && !wn(y, t)
  );
  return m.length > 0 && (oE(m).forEach((y) => aE(y, t)), l = !0), Dg(g, d), l;
}
function sE(e, t) {
  return $g(e).some(
    (r) => !Rg(r) && !wn(r, t)
  );
}
function oE(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function aE(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => I(a) && a.getMarker() === t
  ), s = i ? _o(i) : _r(t);
  e[0].insertBefore(s), s.append(...e), i === r || _c(e[0], s);
}
function cE(e) {
  be(e) && (hl(e.getPreviousSibling()), Mh(e.getNextSibling()));
}
const Ug = {
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
}, Gd = "psc-active-text", Ws = "psc-empty-text";
function lE({ viewOptions: e }) {
  const [t] = ce(), r = X(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Gd), r.current = o, o && t.getElementByKey(o)?.classList.add(Gd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        wo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Ws}`);
          if (!c) return !1;
          const l = _s(c);
          if (!be(l)) return !1;
          const u = l.getParent();
          if (!$(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Ft
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Da(), f = uE(), p = [], g = [];
          return Se().getChildren().forEach((m) => {
            if (!$(m)) return;
            const { emptyKeys: y, nonEmptyKeys: v } = fE(m);
            p.push(...y), g.push(...v);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: g };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Ws) : t.getElementByKey(d)?.classList.add(Ws);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Ws));
      }),
      t.registerCommand(
        Kc,
        () => (i(void 0), !1),
        Ft
      ),
      t.registerCommand(
        Qy,
        () => {
          const o = t.getEditorState().read(Da);
          return o !== r.current && i(o), !1;
        },
        Ft
      )
    ];
    return i(t.getEditorState().read(Da)), Ye(...s);
  }, [t, n]), null;
}
function Da() {
  return dE(w() ?? void 0)?.getKey();
}
function uE() {
  const e = w();
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
    be(s[a]) && (o = s[a].getKey());
  return o;
}
function dE(e) {
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function fE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!be(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (be(c)) break;
      if (!(Ct(c) || P(c)) && c.getTextContent().replaceAll(ro, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const pE = /^\+/;
function Kl(e, t) {
  const r = t.replace(pE, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Fg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Kg(e, t) {
  return Fg(e, t) !== void 0;
}
function Cc(e, t) {
  const r = Fg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function Co(e, t, r) {
  const n = $(e) ? e.getChildren().filter(P) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function hE(e, t, r, n, i) {
  const s = Kl(n, t);
  if (!s) {
    Co(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && Co(e, "invalid", i);
}
function es(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (I(s)) {
      const o = s.getMarker();
      i || hE(s, o, t, r, n), es(s, t, r, n, i || o === "xq");
    } else if (be(s)) {
      if (i) continue;
      const o = Kl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else z(s) ? es(s, s.getMarker(), r, n, i) : qe(s) || $(s) && es(s, t, r, n, i);
}
function gE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Kl(e, a);
    if (!c) {
      Co(o, "unknown", r), Cc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Cc(n, l) || Co(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Se().getChildren())
    qe(o) || (gt(o) || We(o) ? i(o, o.getMarker()) : ie(o) ? (i(o, o.getMarker()), s(o) && es(o, o.getMarker(), e, r, !1)) : $(o) && s(o) && es(o, "p", e, r, !1));
  return r;
}
function mE(e) {
  return !!e?.includes("(basic)");
}
function yE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function zg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && xc(e, t);
}
function zl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function jg(e, t) {
  const r = [];
  for (const n of t) {
    const i = zl(e, n);
    i && Cc(r, i);
  }
  return r;
}
function Qs(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: yE(e.description),
    isBasic: mE(e.description)
  };
}
function bE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Sc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : bE(e.marker, t.marker);
}
function Mc(e, t, r) {
  if (t.noteMarker) return [];
  const n = jg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && zg(i.marker, r)
  ).filter((i) => {
    const s = zl(e, i.marker);
    return s !== void 0 && Kg(n, s);
  }).map((i) => Qs(i, "paragraph")).sort(Sc);
}
function kE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => zg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Qs(c, "character")).sort(Sc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Qs(c, "character")),
    ...a.map((c) => Qs(c, "note"))
  ].sort(Sc);
}
function TE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function xE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function vE(e, t, r) {
  return [
    ...TE(e, t.openCharMarkers),
    ...kE(e, t, r)
  ].sort(xE);
}
function _E(e, t, r) {
  if (t.source === "paragraph") return Mc(e, t, r);
  const n = vE(e, t, r);
  return n.length > 0 ? n : Mc(e, t, r);
}
function CE(e, t, r) {
  const n = Mc(e, t, r), i = jg(e, t.previousParaMarkers), s = zl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Kg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const Un = String.raw`\w-`, Bg = "a-z0-9", SE = `[a-z][${Bg}]*`, ME = new RegExp(
  String.raw`^\\(\+?[${Un}]+)[ \u00A0]$`
), Vg = new RegExp(String.raw`^\\(\+?[${Un}]+)$`), EE = new RegExp(String.raw`^\\\+?[${Un}]*\*$`), AE = new RegExp(
  String.raw`^\\(\+?[${Un}]+)(?:[ \u00A0]|$)`
), PE = new RegExp(
  String.raw`^\\(\+?)([${Un}]+)`
), NE = new RegExp(
  String.raw`\\\+?[${Un}]+(?:\\?\*|[ \u00A0])`
), wE = new RegExp(
  String.raw`\\\+?[${Un}]*$`
), OE = new RegExp(
  String.raw`^\\(${SE})( |$)`
), qE = new RegExp(
  String.raw`\\[${Bg}+*]*$`,
  "i"
), rt = "￼";
function Wg(e) {
  return e.length > 1 && e.startsWith(O) && e.charAt(1) !== rt ? e.slice(1) : e;
}
function Jd(e) {
  return Ns(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Hg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = tn.serializeEditorState(
    {
      type: xr,
      version: Tr,
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
  for (; Jd(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Pt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Jd(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Hs(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Bi(e, t) {
  wE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += rt;
}
function Ut(e) {
  return e.replaceAll(O, " ");
}
function RE(e, t, r = !1) {
  if (Vo(t)) return Ut(e);
  if (e === O) return " ";
  const n = r && e.startsWith(O), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(O, "~");
}
function ts(e) {
  const t = e.getTextContent();
  return In(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Go(e, t) {
  const r = e[t];
  if (!Fe(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Do(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!P(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Gg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Jo(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = as(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function jl(e) {
  return !!e.getUnknownAttributes();
}
function Yo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && qo(e);
}
function Jg(e, t) {
  return Fe(e) ? !Yo(e.getMarker(), t) : z(e) || qe(e) ? !0 : Me(e) ? jl(e) : I(e) ? Yg(e, t) : !1;
}
function Yg(e, t) {
  if (cT(e)) return !0;
  const r = e.getMarker();
  return !Hb(r) && t(r) === void 0;
}
const Lt = "", Dt = "";
function Yd(e) {
  return e.flatMap((t) => ze(t) ? t.getChildren() : [t]);
}
function si(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Fe(s)) {
      const o = Go(e, i);
      Yo(s.getMarker(), r) && Gg(o) ? (t.push(
        Lt,
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
      ), si(Yd(o), t, r), t.push(Dt)) : t.push(rt), i += o.length;
    } else if (Me(s)) {
      const o = Jo(e, i);
      jl(s) ? t.push(rt) : (t.push(
        Lt,
        "verse",
        Ut(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), si(Yd(o), t, r), t.push(Dt)), i += o.length;
    } else P(s) ? t.push(Lt, "marker", Ut(s.getTextContent()), Dt) : on(s) ? t.push(Lt, "unmatched", Ut(s.getTextContent()), Dt) : Jg(s, r) ? t.push(rt) : Po(s) ? t.push(" ") : S(s) ? t.push(
      Ut(
        n ? Wg(ts(s)) : ts(s)
      )
    ) : I(s) ? (t.push(Lt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), si(s.getChildren(), t, r, !0), t.push(Dt)) : ge(s) ? si(s.getChildren(), t, r, n) : $(s) ? (t.push(Lt, s.getType()), si(s.getChildren(), t, r), t.push(Dt)) : t.push(rt);
  }
}
function Ai(e, t) {
  const r = [];
  return si(e, r, t), r.join("");
}
function Er(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function mi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Bl(e) {
  return e.type ?? "";
}
function Xg(e, t, r) {
  return t === "closing" ? nt(e, r) : t === "selfClosing" ? nt("") : Ae(e, r);
}
function Ua(e, t) {
  const r = e[t];
  if (!(!r || Bl(r) !== "attribute-run"))
    return Er(r) ?? [];
}
function Pi(e, t) {
  const r = [];
  return Ji(e, r, t), r.join("");
}
function Ji(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Bl(s);
    if (o === "ms") {
      const l = s, u = Ua(e, i + 1);
      u && Yo(l.marker ?? "", r) ? (t.push(
        Lt,
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
      ), Ji(u, t, r), t.push(Dt), i += 1) : t.push(rt);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(rt);
        continue;
      }
      t.push(
        Lt,
        "verse",
        Ut(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Ua(e, i + 1 + u);
      for (; d; )
        Ji(d, t, r), u++, d = Ua(e, i + 1 + u);
      t.push(Dt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Lt,
        "marker",
        Ut(
          Xg(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Dt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Lt, "char", JSON.stringify(l.unknownAttributes ?? null)), Ji(Er(s) ?? [], t, r, !0), t.push(Dt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(rt);
      continue;
    }
    if (o === "unmatched") {
      t.push(Lt, "unmatched", Ut(mi(s) ?? "")), t.push(Dt);
      continue;
    }
    const a = mi(s);
    if (a !== void 0) {
      t.push(Ut(n ? Wg(a) : a));
      continue;
    }
    const c = Er(s);
    c ? (t.push(Lt, o), Ji(c, t, r), t.push(Dt)) : t.push(rt);
  }
}
function Xo(e) {
  let t = 0;
  for (const r of e) {
    const n = Er(r);
    if (n) {
      t += Xo(n);
      continue;
    }
    const i = mi(r);
    if (i !== void 0)
      for (const s of i) s === rt && t++;
  }
  return t;
}
function gs(e, t, r, n, i) {
  rn(e.getChildren(), t, r, n, i);
}
function rn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (P(a))
      Hs(t, a, Ut(a.getTextContent()));
    else if (Fe(a)) {
      s();
      const c = Go(e, o);
      Yo(a.getMarker(), r) && Gg(c) ? rn(c, t, r, n) : Bi(t, [a, ...c]), o += c.length;
    } else if (z(a) || qe(a))
      s(), Bi(t, [a]);
    else if (Me(a)) {
      s();
      const c = Jo(e, o);
      jl(a) ? Bi(t, [a, ...c]) : (Hs(t, a, Ut(ts(a))), rn(c, t, r, n)), o += c.length;
    } else if (I(a))
      s(), Yg(a, r) ? Bi(t, [a]) : gs(a, t, r, n, { pending: !0 });
    else if (Po(a))
      s(), Hs(t, a, " ");
    else if (S(a)) {
      const c = In(a) || te(a, se) === "attribute", l = s() && !c;
      Hs(
        t,
        a,
        c ? Ut(ts(a)) : RE(ts(a), n, l)
      );
    } else $(a) ? gs(a, t, r, n, i) : (s(), Bi(t, [a]));
  }
}
function Qg(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (qe(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return gs(e, i, t, r), i;
}
function Vl(e, t, r) {
  if (e.length === 0) return;
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e) {
    if (!ie(i)) return;
    const s = Qg(i, t, r);
    if (!s) return;
    n.text.length > 0 && (n.text += " ");
    const o = n.text.length;
    s.spans.forEach(
      (a) => n.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), n.sentinels.push(...s.sentinels), n.text += s.text;
  }
  return n;
}
function Zg(e, t) {
  let r = 0;
  const n = (i) => {
    if (S(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(rt);
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
function Ec(e, t = []) {
  for (const r of e)
    Me(r) ? t.push(r) : $(r) && Ec(r.getChildren(), t);
  return t;
}
function em(e) {
  let t = 0;
  const r = (n) => {
    if (S(n))
      for (const i of n.getTextContent()) i === rt && t++;
    else $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Fn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === rt && t++;
    else r.content && (t += Fn(r.content));
  return t;
}
function tm(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), $(i) && gs(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const ms = /\s/;
function rm(e) {
  return e.filter(Qo).length;
}
function Qo(e) {
  if (e.isSentinel) return !1;
  const t = Q(e.key);
  return S(t) && !P(t) && te(t, se) === "attribute";
}
function $E(e) {
  if (e.isSentinel) return !1;
  const t = Q(e.key);
  return P(t) || Qo(e);
}
function Xd(e, t, r, n) {
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
function On(e, t, r) {
  const n = Xd(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !$E(i) ? Xd(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: rm(e.spans) };
}
function Fa(e) {
  if (e.isSentinel) return !1;
  const t = Q(e.key);
  return P(t) && t.getMarkerSyntax() !== "opening";
}
function IE(e) {
  const t = Q(e.key);
  if (!P(t)) return;
  const r = t.getParent();
  if (!I(r)) return;
  const n = r.getParent();
  if (n)
    return {
      key: n.getKey(),
      offset: r.getIndexWithinParent() + 1,
      type: "element"
    };
}
function LE(e) {
  const t = Q(e.key), r = t?.getParent(), n = r?.getChildren();
  if (!t || !r || !n) return;
  const i = n.findIndex((a) => a.is(t));
  if (i < 0) return;
  const s = Me(t) ? Jo(n, i) : Fe(t) ? Go(n, i) : [], o = s[s.length - 1] ?? t;
  return { key: r.getKey(), offset: o.getIndexWithinParent() + 1, type: "element" };
}
function yi(e, t, { addressDisplayBytes: r = !1 } = {}) {
  const { text: n, spans: i } = e, s = rm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const p of i) {
    const g = p.end - p.start, m = !p.isSentinel && (r || !Fa(p));
    if (!(o && Qo(p))) {
      if (u) {
        if (!m) continue;
        a = { key: p.key, offset: 0 };
        break;
      }
      for (let y = 0; y < g; y++) {
        const v = n[p.start + y];
        if (c === 0 && (l === 0 || !ms.test(v))) {
          if (m) {
            a = { key: p.key, offset: y };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? ms.test(v) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (m && !r) {
          a = { key: p.key, offset: g };
          break;
        }
        u = !0;
      }
    }
  }
  if (a) return { ...a, type: "text" };
  const d = i[i.length - 1];
  if (d && Fa(d)) {
    const p = IE(d);
    if (p) return p;
  }
  if (d?.isSentinel) {
    const p = LE(d);
    if (p) return p;
  }
  const f = [...i].reverse().find((p) => !p.isSentinel && !Fa(p));
  if (f) return { key: f.key, offset: f.end - f.start, type: "text" };
}
function nm(e, t = []) {
  for (const r of e)
    ge(r) && t.push(r), $(r) && nm(r.getChildren(), t);
  return t;
}
function im(e, t = /* @__PURE__ */ new Set()) {
  return t.add(e.getKey()), $(e) && e.getChildren().forEach((r) => im(r, t)), t;
}
function DE(e, t) {
  const r = On(e, t.key, 0);
  if (r)
    return t.isSentinel ? { kind: "preserved", anchor: r, key: t.key } : { kind: "byte", anchor: r };
}
function sm(e, t) {
  const r = [];
  for (const n of nm(e)) {
    const i = im(n), s = t.spans.filter((m) => i.has(m.key)), o = s[0], a = s[s.length - 1];
    if (!o || !a) continue;
    const c = DE(t, o), l = On(t, a.key, a.end - a.start);
    if (!c || !l) continue;
    const u = n.getTypedOnClicks(), d = n.getTypedOnRemoves(), f = n.getTypedOnMouseEnters(), p = n.getTypedOnMouseLeaves(), g = Object.entries(n.getTypedIDs()).flatMap(
      ([m, y]) => y.map((v) => ({
        type: m,
        id: v,
        onClick: u[m]?.[v],
        onRemove: d[m]?.[v],
        onMouseEnter: f[m]?.[v],
        onMouseLeave: p[m]?.[v]
      }))
    );
    g.length > 0 && r.push({ annotations: g, start: c, end: l });
  }
  return r;
}
function UE(e, t, r) {
  const n = Q(e), s = n?.getParent()?.getChildren();
  if (!n || !s) return;
  const o = s.findIndex((d) => d.is(n));
  if (o < 0) return;
  const a = Me(n) ? Jo(s, o) : Fe(n) ? Go(s, o) : [], l = (a[a.length - 1] ?? n).getNextSibling();
  if (!ge(l) || !l.hasID(t, r)) return;
  const u = l.getFirstChild();
  u && [n, ...a].forEach((d) => u.insertBefore(d));
}
function Qd(e) {
  return e.type === "text" && P(Q(e.key));
}
function om(e, t) {
  if (e.length === 0) return;
  const r = w()?.clone() ?? null;
  for (const n of e)
    for (const i of n.annotations) {
      const s = t(), o = yi(s, n.start.anchor, {
        addressDisplayBytes: !0
      }), a = yi(s, n.end);
      if (!o || !a || Qd(o) || Qd(a) || o.key === a.key && o.offset === a.offset && o.type === a.type) continue;
      const c = No();
      c.anchor.set(o.key, o.offset, o.type), c.focus.set(a.key, a.offset, a.type), Gc(
        c,
        i.type,
        i.id,
        i.onClick,
        i.onRemove,
        i.onMouseEnter,
        i.onMouseLeave
      ), n.start.kind === "preserved" && UE(n.start.key, i.type, i.id);
    }
  xn(r);
}
function am(e, t, r) {
  const n = yi(e, t);
  if (n?.type === "text") {
    const i = Q(n.key);
    if (i && S(i)) {
      i.select(n.offset, n.offset);
      return;
    }
  } else if (n) {
    const i = Q(n.key), s = $(i) ? i.getChildAtIndex(n.offset - 1) : void 0;
    if (s) {
      s.selectNext(0, 0);
      return;
    }
  }
  r.find($)?.selectStart();
}
function cm(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find($)?.selectStart();
      return;
    }
    am(tm(e, n, i), t, e);
  }
}
function FE(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find($)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  rn(e, s, n, i), am({ text: s.text, spans: s.spans }, t, e);
}
function lm(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Vl(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = w();
  if (N(c)) {
    for (let y = c.anchor.getNode(); y; y = y.getParent())
      if (e.some((v) => v.is(y))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = On(s, c.anchor.key, c.anchor.offset));
  }
  const l = sm(e, s), u = Pr(s.text, {
    getMarker: n
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Fn(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = tn.serializeEditorState(
    { type: xr, version: Tr, content: u },
    r
  );
  if (Pi(d.root.children, n) === Ai(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const f = d.root.children.map((y) => ks(y));
  if (em(f) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = Ec(e).map((y) => ({
    number: y.getNumber(),
    sid: y.getSid()
  })), g = e[0];
  f.forEach((y) => g.insertBefore(y)), Zg(f, s.sentinels), e.forEach((y) => y.remove());
  const m = Ec(f);
  for (let y = 0; y < p.length && y < m.length; y++)
    m[y].getNumber() === p[y].number && m[y].setSid(p[y].sid);
  return om(l, () => tm(f, n, r)), cm(f, o, a, n, r), !0;
}
function Zo(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !we.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!P(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(hr(s) || S(s) && s.getTextContent() === Pt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!P(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return rn(c, l, t, r), { out: l, contentNodes: c };
}
function um(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(rt)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function KE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Zo(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = w();
  if (N(u)) {
    for (let C = u.anchor.getNode(); C; C = C.getParent())
      if (e.is(C)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = On(o, u.anchor.key, u.anchor.offset));
  }
  const d = sm(a, o), f = Pr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (f.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Fn(f) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const g = p.content ?? [], m = um(g), y = Hg(e, g, m, r);
  if (y.failure !== void 0)
    return y.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      y.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Xo(y.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const v = e.getCategory() !== m;
  if (v && e.setCategory(m), Pi(y.children, n) === Ai(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), v;
  const M = y.children.map((C) => ks(C));
  if (em(M) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), v;
  const E = a[0];
  if (E)
    M.forEach((C) => E.insertBefore(C));
  else {
    const C = e.getChildren().find((T) => P(T) && T.getMarkerSyntax() === "closing");
    M.forEach((T) => C ? C.insertBefore(T) : e.append(T));
  }
  Zg(M, o.sentinels);
  const R = new Set(o.sentinels.flat().map((C) => C.getKey()));
  return a.forEach((C) => {
    R.has(C.getKey()) || (ge(C) && (C.getWritable().__suppressOnRemoveCallbacks = !0), C.remove());
  }), om(d, () => {
    const C = { text: "", spans: [], sentinels: [] };
    return rn(M, C, n, r), C;
  }), FE(M, c, l, n, r), !0;
}
const dm = /* @__PURE__ */ new Set(["ca", "cp"]), Wl = "cp";
function fm(e) {
  if (!lr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (gs(e, t, ar, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Pr(r, { getMarker: ar }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Wl)
  );
}
function Ni(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (I(r) && dm.has(r.getMarker()) || fm(r)) {
      t.push(r);
      continue;
    }
    ie(r) && r.getMarker() === Wl && t.push(r);
    break;
  }
  return t;
}
function zE(e) {
  const t = (n) => I(n) && dm.has(n.getMarker()) || fm(n);
  if (t(e) || ie(e) && e.getMarker() === Wl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (_e(n)) return n;
      if (!t(n)) return;
    }
}
function Hl(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ni(e);
  if (n.some((s) => ie(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (rn(e.getChildren(), i, t, r), rn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function jE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ni(e)], o = Hl(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (N(l)) {
    for (let g = l.anchor.getNode(); g; g = g.getParent())
      if (s.some((m) => m.is(g))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = On(o, l.anchor.key, l.anchor.offset));
  }
  const u = Pr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Fn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = tn.serializeEditorState(
    { type: xr, version: Tr, content: u },
    r
  );
  if (Pi(f.root.children, n) === Ai(s, n)) {
    let g = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), g = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), g = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const p = f.root.children.map((g) => ks(g));
  return _e(p[0]) ? (p.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), cm(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ys(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (qe(n)) return;
    !t && (z(n) || ie(n) || _e(n)) && (t = n), Zy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? zE(r) : void 0) ?? t;
}
function Gt(e, t) {
  const r = ys(e);
  return r ? z(r) ? KE(r, t) : _e(r) ? jE(r, t) : lm([r], t) : !1;
}
const BE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function Zd(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !BE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Zs(e, t) {
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
          t.push(`\\${n}`), Zd(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Zs(r.content, t), Zd(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Zs(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Zs(r.content, t);
      }
    }
}
function ef(e, t, r) {
  const n = ys(e);
  if (!ie(n)) return !1;
  const i = w();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Qg(n, t, r);
  if (!o) return !1;
  const a = Pr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    ms.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Zs(a, l);
  for (const u of l.join("").replaceAll(O, "~")) {
    if (ms.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function VE(e) {
  return [lt(e), Lo()];
}
function Gl(e) {
  Zt(e, 2);
}
function WE(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Jl(e) {
  const t = WE(e);
  e.splice(0, 0, VE(e.getMarker())), t && Gl(e);
}
function So(e, t) {
  e.setMarker(t), Jl(e), Gl(e);
}
function HE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!In(n)) {
    if (S(n) && !P(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(O), Tt(n, se, ur), n.setMode("token");
      return;
    }
    if (Hp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Lo());
  }
}
function tf(e, t, r) {
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
function rs(e) {
  for (let t = e; t; t = t.getParent())
    if (ie(t)) return t;
}
function GE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = rs(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = rs(r.getNode())?.is(s) ?? !1, a = rs(n.getNode())?.is(s) ?? !1;
    return !(o && !tf(r, s, "start") || a && !tf(n, s, "end"));
  });
}
function Ac(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of GE(r)) t.add(n.getKey());
}
function JE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!N(r) || !r.isCollapsed()) return;
  const n = rs(r.focus.getNode());
  n && t.add(n.getKey());
}
function YE(e) {
  const t = w();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => P(r)) && (Ac(e), t.removeText());
}
function XE(e, t) {
  if (!Si(t.viewOptions)) return;
  if (Bt(e.getFirstChild())) {
    HE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    Jl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ie(o) && !o.is(e))) {
      So(e, or), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ie(r)) {
    const n = e.getChildren().filter((a) => !In(a)), i = w();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : rs(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || $(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Zt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  So(e, or);
}
function QE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = sr(t, Ss(e.getMarker()));
  return r === "" ? void 0 : r;
}
function ZE(e) {
  const t = e.getChildren().filter((s) => !P(s) && te(s, se) !== "attribute"), r = t[0];
  r && S(r) && r.getTextContent().startsWith(O) && r.setTextContent(r.getTextContent().slice(1));
  const n = QE(e);
  n && t.push(ye(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function e1(e, t) {
  const r = e.getChildren(), n = r.some((s) => P(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => S(c) && !P(c) && c.getTextContent() === Pt(s)
    ), a = ki(e).some(({ node: c }) => P(c));
    if (!o && !a) return;
    r.forEach((c) => {
      P(c) || (S(c) && c.getTextContent() === Pt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => P(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function t1(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(P(r) && r.getMarkerSyntax() === "opening")) {
    ZE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => P(o) && o.getMarkerSyntax() === "closing");
  i && !s && Gt(e, t);
}
function pm(e, t, r) {
  if (!P(e.getFirstChild()) && r?.markerMode === "editable" && Si(r)) {
    So(e, t);
    return;
  }
  Jh(e, t);
}
function hm() {
  const e = w();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = gm(e);
    return t !== "removed" ? t : (Pc(), "handled");
  }
  return Pc() ? "handled" : "declined";
}
function r1(e, t) {
  if (!t) return e;
  const r = OE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function rf(e, t) {
  const r = w();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!mm())
      return "declined";
  } else {
    const s = gm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => r1(s, t)
  );
  nf(n ?? "");
  for (const s of i)
    Pc(), nf(s);
  return "handled";
}
function n1(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = _s(n);
  if (!i) return !1;
  const s = Qt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !S(i) || P(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function gm(e) {
  const t = Qt(e.anchor.getNode()), r = Qt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), i1() ? "removed" : "needs-plain-split");
}
function nf(e) {
  if (e === "") return;
  const t = w();
  N(t) && t.insertText(e);
}
function i1() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Qt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => P(r) && r.getMarkerSyntax() === "opening");
}
function mm() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Qt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Pc() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = mm();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = _r("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = S(t) && !P(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    di(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (Zk(u), i.append(u));
  }
  return i.getChildren().every(P) && i.append(ye(zt)), ym(i), !0;
}
function ym(e) {
  const t = e.getChildren().find((r) => !P(r));
  if (S(t)) {
    const r = t.getTextContent().startsWith(O) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if ($(t)) {
    ym(t);
    return;
  }
  e.selectEnd();
}
function s1(e) {
  const t = [];
  let r = e;
  for (; r; )
    I(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function o1(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Se().getChildren()) {
    if (t && n.is(t)) break;
    (gt(n) || We(n) || ie(n)) && r.push(n.getMarker());
  }
  return r;
}
function a1(e) {
  let t = e;
  for (; $(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function c1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Bt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && In(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(a1(i)) && r === 0 : !1;
}
function l1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Bt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && In(i) && t.is(i) && r === 0;
}
function u1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function d1() {
  const e = w();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = it(t, ie), s = !n && (!i || l1(i, t, r)) ? "paragraph" : "character", o = Qt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: o1(t),
    openCharMarkers: s1(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: fl(t, r),
    anchorRect: u1()
  };
}
function f1() {
  const e = w();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!S(t) || P(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = qE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function p1(e, t, r) {
  pm(e, t, r), Gl(e);
}
function h1(e, t, r) {
  const n = w();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = it(i, ie);
  if (t === "backslash" && s && c1(s, i, n.focus.offset)) {
    p1(s, e, r);
    return;
  }
  km(e, r);
}
function g1(e, t) {
  const r = w();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function bm(e) {
  const t = w();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function m1(e, t, r, n) {
  if (N(w()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && f1(), e.kind === "closeTag") {
    bm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && hm() !== "declined") return;
  if (e.kind === "paragraph" && Xe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    h1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (we.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return wg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  vc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: vs(), reference: r });
}
function km(e, t) {
  const r = w();
  if (!N(r)) return;
  const n = Si(t);
  if (Pg()) {
    const s = w();
    if (!N(s)) return;
    const o = it(s.anchor.getNode(), ie);
    if (!o) return;
    o.setMarker(e), n && Jl(o);
    return;
  }
  const i = r.insertParagraph();
  ie(i) && (n ? So(i, e) : i.setMarker(e));
}
function y1() {
  const [e] = ce();
  return j(() => e.registerCommand(Kf, () => !0, Ft), [e]), null;
}
function Tm(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Paragraph : !(we.isValidMarker(r) || qo(r));
}
function b1(e, t) {
  const r = e.replace(/^\+/, "");
  if (r === "v" || r === "c") return !1;
  const n = t(r)?.type;
  return n !== void 0 && n !== b.Unknown ? n === b.Character : !(we.isValidMarker(r) || qo(r));
}
function k1(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = AE.exec(e)?.[1];
  return r === void 0 ? !1 : !Tm(r, t);
}
function xm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !k1(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ie(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ie(i))
    return [i, r];
}
function vm(e, t) {
  const r = xm(e, t.getMarker);
  return r !== void 0 && lm(r, t);
}
function T1(e, t) {
  const r = w();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function _m(e) {
  const t = PE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function x1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = _m(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function v1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (z(e.getParent()) && S(r)) {
    const n = r.getNextSibling();
    if (I(n)) {
      ul(n);
      return;
    }
  }
  S(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function sf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = _m(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  v1(e);
}
function of(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Cm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Gt(e, r);
  const n = x1(e), i = e.getParent();
  if (ie(i)) {
    if (!Tm(t, r.getMarker))
      return vm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Gt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), of(s, t) && sf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (I(i) || z(i)) {
    const s = t.replace(/^\+/, "");
    if (!(I(i) ? b1(t, r.getMarker) : we.isValidMarker(s)))
      return Gt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Gt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(P).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (T1(c, nt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), of(a, s) && sf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Gt(e, r);
}
function _1(e) {
  const t = w();
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
function C1(e, t) {
  const r = e.getTextContent();
  if (sn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (ze(e.getParent()) && sl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !_1(e)) {
    oT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = ME.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Cm(e, n[1], t);
      return;
    }
    if (EE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Gt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = nt(e.getMarker(), e.getNested());
    if (I(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ye(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function S1(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (ch(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Sm(e) {
  if (!Zf(e)?.length)
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
const Vi = Sm("v"), M1 = Sm("c"), af = /^[ \u00A0]*$/;
function cf(e, t, r) {
  const n = e.getNextSibling();
  if (S(n) && n.getType() === je.getType() && n.getMode() === "normal" && te(n, se) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = ye(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function E1(e, t) {
  const r = e.getTextContent(), n = Kt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Vi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Vi.valueAndRest.exec(c);
    if (l && af.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Vi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Vi.valueAndRest.exec(r);
  if (!s) {
    const c = Vi.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = w(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Kt("v", u));
      const g = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      cf(e, d, g);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Gt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), af.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Kt("v", o)), a && cf(e, a, a.length);
}
const A1 = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function P1(e, t) {
  const r = e.getParent();
  if (!z(r) || r.getIsCollapsed() !== !1 || !Zf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!P(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Pt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = A1.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Pt(a)), !0;
}
function N1(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!S(t)) return;
  const r = Kt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = M1.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Mm(e) {
  if (Fe(e)) {
    const { wrapper: t } = Do(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (z(e)) {
    const { wrapper: t } = Zp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (_e(e)) {
    const t = [], r = eh(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = rh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Me(e)) {
    const t = [], r = as(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = as(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function w1(e) {
  const t = w();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Mm(e).some((n) => r.is(n));
}
function O1(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ie(e) && Hp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of cs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Os(l, e) && (i || w1(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Mm(e))
    l.remove(), n = !0;
  let s = !1;
  if (I(e)) {
    const l = Lk(e);
    l !== void 0 && jb(l) && ($p(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of cs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (sx(l, e)) {
        us(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && yh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Ko(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function lf(e) {
  return S(e) && e.getType() === je.getType() && e.getMode() === "normal" && te(e, se) !== "attribute";
}
function q1(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = Q(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && lf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && lf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Gs(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = q1(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = Q(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (P(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (sn(c)) continue;
      const g = Vg.exec(p);
      c.getMarkerSyntax() === "opening" && g ? n = Cm(c, g[1], e) || n : r === "idle" && ef(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : vm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Gt(c, e) || n;
      continue;
    }
    const l = Qr(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = O1(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && ef(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Gt(u, e) || n;
    }
  }
  return n;
}
function Em(e) {
  if (on(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (I(t)) return Yi(t) !== void 0;
  return !1;
}
function R1(e) {
  const t = Qr(e);
  if (!t) return !1;
  const r = Cr(t.kind);
  return !Ko(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function uf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (gt(t) || qe(t) || dh(t)) return !0;
  return !1;
}
function $1(e, t) {
  const r = e.getTextContent(), n = te(e, se), i = e.getParent();
  if (n !== "attribute" && _e(i)) {
    r.replace(/^[ \u00A0]+/, "") === Kt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (P1(e, t)) return;
  if (n === "attribute") {
    R1(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Em(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !uf(e))
      t.pendingKeys.add(e.getKey());
    else if (nh(e)) t.pendingKeys.add(e.getKey());
    else if (_e(ys(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      I(a) && Ip(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (uf(e)) return;
  const s = w(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (NE.test(o)) {
    if (Qb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Gt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function I1(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : yh(e, t);
}
function L1(e) {
  const t = (r) => {
    if (P(r)) {
      sn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (on(r)) {
      ch(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of cs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Os(n, r) || I1(n, r)) && e.pendingKeys.add(r.getKey());
    if (Me(r)) {
      r.getTextContent() !== Kt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (S(r)) {
      if (r.getType() !== je.getType() || te(r, se) === "attribute") return;
      const n = r.getParent();
      if (_e(n)) {
        r.getTextContent() !== Kt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Em(r) || i.includes("//") || nh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (I(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!qe(r) && !gt(r)) {
      if (ze(r) && r.getChildrenSize() === 0) {
        const n = Qr(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      $(r) && r.getChildren().forEach(t);
    }
  };
  Se().getChildren().forEach(t);
}
function D1(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = te(e, se);
  if (r === "attribute" || r === ur) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (gt(o) || _e(o) || qe(o)) return;
  const n = t.startsWith(O) && I(e.getParent()), i = n ? t.slice(1) : t, s = (n ? O : "") + i.replace(/ (?=[ \u00A0])/g, O).replace(new RegExp("(?<=\\u00A0) ", "g"), O);
  s !== t && e.setTextContent(s);
}
function U1(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function Nc(e) {
  const t = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!t) return;
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(t.getData("text/plain")), i = t.getData("text/html"), s = i ? r(U1(i)) : "";
  return {
    plainText: n,
    html: i,
    htmlText: s,
    text: n || s,
    isInternal: !!t.getData("application/x-lexical-editor")
  };
}
function F1(e) {
  const t = Nc(e);
  if (!t || t.isInternal) return !1;
  const { plainText: r, html: n, htmlText: i } = t, s = r.includes(O) ? r : n.includes(O) || i.includes(O) ? i : void 0;
  if (!s) return !1;
  const o = w();
  if (!N(o)) return !1;
  e?.preventDefault();
  const a = s.replaceAll(O, "~"), c = a.split(`
`);
  if (c.length < 2)
    return o.insertText(a), !0;
  o.isCollapsed() || o.removeText();
  const l = vs();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(eo, void 0), u === "") return;
    const f = w();
    N(f) && f.insertText(u);
  }), !0;
}
function K1(e) {
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
function z1(e) {
  const t = w();
  if (!N(t) || t.isCollapsed()) return;
  const r = {
    "text/plain": t.getTextContent().replaceAll(O, " ")
  }, n = ib(e), i = sb(e);
  return n && (r["text/html"] = K1(n)), i && (r["application/x-lexical-editor"] = i), r;
}
function df(e, t, r) {
  const n = w();
  if (!N(n) || n.isCollapsed()) return !1;
  const i = z1(t);
  if (!i) return !1;
  if (!e || !("clipboardData" in e))
    return nb(t, null, i), r && n.removeText(), !0;
  if (e.clipboardData == null) return !1;
  e.preventDefault();
  for (const [s, o] of Object.entries(i)) e.clipboardData.setData(s, o);
  return r && n.removeText(), !0;
}
const Am = zf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ka(e) {
  const t = e();
  return Hr(Rf), Hr(np), t;
}
const ff = 8, j1 = 1e3;
function ri(e, t) {
  const r = Me(e) ? ["va", "vp"] : Fe(e) ? ["milestone"] : z(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    ux(Cr(n), e, t.pendingKeys);
}
function B1(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(zc) || i.updateTags.has(ns)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = Q(o);
        if (!c) continue;
        const l = Qr(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = Q(o.getKey());
        c?.isAttached() && Cr(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ye(
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
    e.registerMutationListener(je, r),
    e.registerMutationListener(pr, r),
    e.registerMutationListener(Nr, r),
    e.registerMutationListener(wr, r)
  );
}
function V1(e, t, r) {
  return Ye(
    e.registerCommand(
      br,
      (n) => {
        if (rg()) return !1;
        const i = Nc(n);
        if (!i) return !1;
        const s = i.text;
        if (s.includes(`
`)) {
          const a = (r ? s.replaceAll(O, "~") : s).split(`
`);
          let c = rf(a, t.getMarker);
          if (c === "declined" && n1(e) && (c = rf(a, t.getMarker)), c === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      kr
    ),
    e.registerCommand(
      br,
      (n) => {
        const i = Nc(n);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !BM()) return !1;
        n?.preventDefault();
        const o = w();
        return N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(eo, void 0), a === "") return;
          const l = w();
          N(l) && l.insertText(a);
        }), !0;
      },
      Ue
    ),
    e.registerCommand(
      br,
      () => (t.splitExpected.current = !0, !1),
      Ft
    )
  );
}
function W1({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n
}) {
  const [i] = ce(), s = e?.markerMode === "editable", o = !!e && Vo(e), a = X(void 0), c = X(n);
  return j(() => {
    c.current = n;
    const l = a.current;
    l && (e && (l.viewOptions = e), l.getMarker = t ?? ar, l.logger = r);
  }, [e, t, r, n]), j(() => {
    if (!s || !e) return;
    const l = {
      viewOptions: e,
      getMarker: t ?? ar,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r
    };
    a.current = l;
    const u = tx(i, l.pendingKeys);
    let d, f = !1, p, g = !1, m = !1, y = 0;
    const v = () => y < ff ? !1 : (l.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${ff} consecutive mutating passes; leaving ${l.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...l.pendingKeys].join(", ")}`
    ), !0), M = (T, F = "departure") => {
      i.update(() => {
        y = Ka(
          () => Gs(l, T, F)
        ) ? y + 1 : 0;
      });
    };
    let E;
    const R = () => {
      if (E !== void 0 && clearTimeout(E), E = void 0, m || l.pendingKeys.size === 0) return;
      const T = c.current ?? j1;
      T < 0 || (E = setTimeout(() => {
        E = void 0, !(m || l.pendingKeys.size === 0) && (f || v() || M(void 0, "idle"));
      }, T));
    }, C = Ye(
      i.registerNodeTransform(pr, (T) => {
        if (i.isComposing()) return;
        C1(T, l);
        const F = Qr(T);
        F && (Me(F.owner) || z(F.owner) || _e(F.owner) || Fe(F.owner) && Do(F.owner).wrapper === void 0) && ri(F.owner, l);
      }),
      i.registerNodeTransform(pt, (T) => {
        i.isComposing() || (E1(T, l), ri(T, l));
      }),
      i.registerNodeTransform(wt, (T) => {
        i.isComposing() || (N1(T), T.isAttached() && ri(T, l));
      }),
      i.registerNodeTransform(Xe, (T) => {
        i.isComposing() || XE(T, l);
      }),
      i.registerNodeTransform(ke, (T) => {
        if (!i.isComposing()) {
          t1(T, l);
          for (const F of ["separator", "char"])
            T.isAttached() && Os(Cr(F), T) && l.pendingKeys.add(T.getKey());
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
      i.registerNodeTransform(Xt, (T) => {
        i.isComposing() || ri(T, l);
      }),
      i.registerNodeTransform(wr, (T) => {
        if (i.isComposing()) return;
        const F = Qr(T);
        F && (Fe(F.owner) || Me(F.owner) || z(F.owner) || _e(F.owner)) && ri(F.owner, l);
      }),
      i.registerNodeTransform(we, (T) => {
        i.isComposing() || (e1(T, l), ri(T, l));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      i.registerNodeTransform(Rr, (T) => {
        i.isComposing() || S1(T, l);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      i.registerNodeTransform(je, (T) => {
        i.isComposing() || $1(T, l);
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
        je,
        (T) => {
          i.getEditorState().read(() => {
            for (const [F, U] of T) {
              if (U === "destroyed") continue;
              const G = Q(F);
              !G || te(G, se) !== "attribute" || ze(G.getParent()) || i.getElementByKey(F)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      B1(i, l),
      ...o ? [
        i.registerNodeTransform(je, (T) => {
          i.isComposing() || D1(T);
        }),
        i.registerCommand(
          Oo,
          (T) => df(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !1
          ),
          Ue
        ),
        i.registerCommand(
          _n,
          (T) => df(
            T && typeof T == "object" && "clipboardData" in T ? T : null,
            i,
            !0
          ),
          Ue
        ),
        i.registerCommand(
          br,
          (T) => F1(
            // Same jsdom-safe duck-check as COPY above.
            T && typeof T == "object" && "clipboardData" in T ? T : null
          ),
          Ue
        )
      ] : [],
      i.registerCommand(
        _n,
        () => (Ac(l), !1),
        kr
      ),
      i.registerCommand(
        Uc,
        () => (i.isComposing() || YE(l), !1),
        oi
      ),
      i.registerCommand(
        wo,
        () => (f = !1, y = 0, R(), !1),
        Ft
      ),
      i.registerCommand(
        Ar,
        (T) => (f = !1, y = 0, R(), (T.key === "Backspace" || T.key === "Delete") && (Ac(l), JE(l)), i.isComposing() || !T.ctrlKey || T.altKey || T.shiftKey || T.metaKey || T.key !== " " && T.code !== "Space" || !jM() ? !1 : (T.preventDefault(), !0)),
        Ue
      ),
      i.registerCommand(
        Uf,
        (T) => {
          const F = hm();
          F === "needs-plain-split" && i.dispatchCommand(eo, void 0);
          const U = F !== "declined" || dx();
          return U && T?.preventDefault(), Gs(l), U;
        },
        Ue
      ),
      i.registerCommand(
        eo,
        () => (l.splitExpected.current = !0, Pg()),
        Ue
      ),
      V1(i, l, o),
      i.registerCommand(
        Am,
        () => {
          if (f) return !0;
          const T = i.getRootElement(), F = T?.ownerDocument, U = !!T && !!F && F.hasFocus() && T.contains(F.activeElement);
          let G;
          if (U) {
            const J = w();
            G = N(J) ? J.focus.key : d;
          }
          return Ka(() => Gs(l, G)), !0;
        },
        Ft
      ),
      i.registerCommand(
        Kc,
        () => {
          if (f) return !1;
          const T = w(), F = N(T) ? T.focus.key : d;
          return Ka(() => Gs(l, F)), !1;
        },
        Ft
      ),
      i.registerUpdateListener(({ editorState: T, tags: F }) => {
        l.splitExpected.current = !1, l.wholeParaDeleteExpected?.clear(), l.collapsedDeleteCaretParas?.clear(), l.rebuildAttempted.clear();
        const U = T.read(() => {
          const J = w();
          return N(J) ? J.focus.key : void 0;
        }), G = p;
        if (U !== void 0 && (p = U), F.has(zc)) {
          l.pendingKeys.clear(), T.read(() => L1(l)), f = !0, U !== void 0 && (d = U);
          return;
        }
        if (F.has(Gr)) {
          U !== void 0 && U !== G && (f = !0);
          return;
        }
        f || (U !== void 0 && (d = U), R(), !(g || U === void 0) && [...l.pendingKeys].some((J) => J !== U) && (g = !0, queueMicrotask(() => {
          g = !1, !m && (v() || M(d));
        })));
      })
    );
    return () => {
      m = !0, E !== void 0 && clearTimeout(E), E = void 0, u(), C(), a.current = void 0;
    };
  }, [i, s, o]), null;
}
const H1 = ["status_unknown", "status_invalid"], Pm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, G1 = Object.values(Pm);
function J1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Pm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function pf(e) {
  e.classList.remove(...H1), e.removeAttribute("aria-description"), G1.includes(e.title) && e.removeAttribute("title");
}
function Y1(e, t, r, n) {
  const i = (a) => a.read(() => Se().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = Q(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function X1(e) {
  const t = Q(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : P(t) && t.getParent()?.getKey() === r.getKey();
}
function Q1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ce(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? ho;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = gE(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || X1(f)) continue;
            const g = Q(f)?.getTopLevelElement();
            !g || l.has(g.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && pf(p);
        }
        for (const [f, p] of d) {
          const g = n.getElementByKey(f);
          g && J1(g, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          Y1(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && pf(u);
      }
    };
  }, [n, i, t, r]), null;
}
function qs(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Er(o);
    a && $(s) && qs(s.getChildren(), a, r);
  }
}
function Nm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Er(o);
      if (a) {
        n(a);
        continue;
      }
      const c = mi(o);
      if (c === void 0 || !c.includes(rt)) continue;
      const l = c.split(rt), u = [];
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
function Rs(e, t, r) {
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
function wm(e, t) {
  const r = [];
  for (const n of e)
    Jg(n, t) || ((ie(n) || I(n)) && r.push(n.getMarker()), $(n) && r.push(...wm(n.getChildren(), t)));
  return r;
}
function Om(e) {
  const t = [];
  for (const r of e) {
    const n = Bl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Er(r);
    i && t.push(...Om(i));
  }
  return t;
}
function Yl(e, t, r) {
  const n = wm(e, r), i = Om(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function qm(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = Q(t.key), i = t.offset;
  else
    return;
  if (!(!S(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Xl(e, t) {
  const r = Rm(e, t);
  return r ? e.text.slice(0, r.start) + e.text.slice(r.end) : e.text;
}
function Rm(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  if (!(s < n.start) && e.text.slice(s, i) === t.run)
    return { start: s, end: i };
}
function $m(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Vl(e, o, s);
  if (!c) return;
  const l = i ? Xl(c, i) : c.text, u = Pr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Fn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = tn.serializeEditorState(
    { type: xr, version: Tr, content: u },
    s
  ).root.children;
  if (Xo(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Rs(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Pi(d, o) === Ai(e, o) && Yl(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Nm(d, f.serialized);
  const g = Z1(e), m = Im(d);
  for (let y = 0; y < g.length && y < m.length; y++)
    g[y].sid !== void 0 && m[y].number === g[y].number && (m[y].sid = g[y].sid);
  return d;
}
function Z1(e) {
  const t = [], r = (n) => {
    Me(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : $(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Im(e) {
  const t = [];
  for (const r of e) {
    qp(r) && t.push(r);
    const n = Er(r);
    n && t.push(...Im(n));
  }
  return t;
}
function eA(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Zo(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Xl(l, i) : l.text, f = Pr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Fn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = p.content ?? [], m = um(g), y = e.getCategory() !== m, v = Hg(e, g, m, s);
  if (v.failure !== void 0) {
    v.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : v.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const M = v.children;
  if (Xo(M) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const E = Rs(l, t, n);
  if (!E) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Pi(M, o) === Ai(u, o) && Yl(u, M, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: m, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Nm(M, E.serialized), { rebuilt: M, contentNodes: u, category: m, categoryChanged: y };
}
function hf(e) {
  return e.$?.textType;
}
function tA(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && hf(e) === hf(t);
}
function rA(e) {
  const t = [];
  for (const r of e) {
    const n = Q(r);
    n?.isAttached() && qe(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function nA(e) {
  if (!P(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!z(t)) return;
  const r = e.getTextContent();
  if (sn(e)) return;
  const n = Vg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function gf(e, t) {
  const r = e;
  r.marker = t, r.text = Xg(t, r.markerSyntax, r.nested);
}
function iA(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!we.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && gf(a.node, s);
  const c = n.getChildren().filter(P).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && gf(l.node, s);
}
function Lm(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Hl(e, i, n);
  if (!o) return;
  const a = r ? Xl(o, r) : o.text, c = Pr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Fn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = tn.serializeEditorState(
    { type: xr, version: Tr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Ni(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Pi(u, i) === Ai(d, i) && Yl(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function Dm(e, t, r) {
  const n = /* @__PURE__ */ new Map(), i = [], s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), c = (d) => {
    z(d) ? s.set(d.getKey(), d) : _e(d) ? o.set(d.getKey(), d) : n.set(d.getKey(), [d]);
  };
  for (const d of e) {
    const f = Q(d);
    if (!f?.isAttached()) continue;
    const p = ys(f);
    if (p) {
      if (c(p), P(f)) {
        const g = xm(f, t.getMarker);
        g && i.push(g);
      }
      if (z(p)) {
        const g = nA(f);
        g && a.set(p.getKey(), g);
      }
    }
  }
  const l = /* @__PURE__ */ new Set();
  for (const d of i)
    d.some((f) => l.has(f.getKey())) || (d.forEach((f) => {
      l.add(f.getKey()), n.delete(f.getKey());
    }), n.set(d[0].getKey(), d));
  if (r) {
    const d = ys(r.node);
    d && c(d);
  }
  const u = rA(e);
  return {
    paraScopes: n,
    noteScopes: s,
    chapterScopes: o,
    noteGlyphRenames: a,
    husks: u,
    huskKeys: new Set(u.map((d) => d.getKey()))
  };
}
function Um(e, t) {
  e.splice(t, 1);
  const r = e[t - 1], n = e[t], i = r && mi(r), s = n && mi(n);
  r && n && i !== void 0 && s !== void 0 && tA(r, n) && (r.text = i + s, e.splice(t, 1));
}
function ea(e, t, r, n, i) {
  const s = t.get(e.getKey()), o = s ? Er(s.node) : void 0;
  if (!s || !o) return !1;
  const a = eA(e, t, r, n, i);
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
function sA(e, t, r, n, i) {
  const s = qm(n, i);
  if (t.size === 0 && !s) return;
  const { paraScopes: o, noteScopes: a, chapterScopes: c, noteGlyphRenames: l, husks: u, huskKeys: d } = Dm(t, r, s);
  if (o.size === 0 && a.size === 0 && c.size === 0 && u.length === 0)
    return;
  const f = /* @__PURE__ */ new Map();
  qs(Se().getChildren(), e.root.children, f);
  for (const p of l.values()) iA(p, f);
  for (const p of a.values())
    ea(p, f, r, d, s);
  for (const p of o.values()) {
    const g = f.get(p[0].getKey());
    if (!g) continue;
    const m = $m(p, f, r, d, s);
    if (!m) continue;
    const y = g.siblings.indexOf(g.node);
    y < 0 || g.siblings.splice(y, p.length, ...m);
  }
  for (const p of c.values()) {
    const g = f.get(p.getKey());
    if (!g) continue;
    const m = 1 + Ni(p).length, y = Lm(p, r, s);
    if (!y) continue;
    const v = g.siblings.indexOf(g.node);
    v < 0 || g.siblings.splice(v, m, ...y);
  }
  for (const p of u) {
    const g = f.get(p.getKey());
    if (!g) continue;
    const m = g.siblings.indexOf(g.node);
    m < 0 || Um(g.siblings, m);
  }
  return xg(e, r.viewOptions);
}
function oA({
  viewOptions: e,
  logger: t
}) {
  const [r] = ce(), n = Si(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        Xe,
        (i) => aA(i, t)
      );
  }, [r, n, t]), null;
}
function aA(e, t) {
  e.getMarker() !== or && (e.isEmpty() || Bt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${or}" (key ${e.getKey()})`
  ), e.setMarker(or)));
}
function Js(e) {
  return e.pendedKeys.size === 0 && !e.transientInput;
}
const Fm = /\s/, cA = /^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/;
function $s(e) {
  return cA.exec(e)?.[1] ?? e;
}
function ta(e, t) {
  const r = e.jsonPath.slice($s(e.jsonPath).length);
  return { ...e, jsonPath: `${jr(t)}${r}` };
}
function lA(e, t) {
  let r = Se();
  for (let n = 0; n < t.length; n += 1) {
    if (!$(r)) return;
    const i = fr(r)[t[n]];
    if (i?.type !== "element") return;
    r = i.node;
    const s = e.byFirstLiveKey.get(r.getKey());
    if (s?.kind === "note") return { plan: s, depth: n };
  }
}
function uA(e, t) {
  const r = bi($s(t.jsonPath));
  if (r.length === 0) return { kind: "live", location: t };
  const n = e.settledToLiveTopIndex(r[0]);
  if (n.plan)
    return {
      kind: "scope",
      plan: n.plan,
      scratchIndexes: [n.indexWithinScope, ...r.slice(1)],
      location: t
    };
  const i = [n.liveIndex, ...r.slice(1)], s = lA(e, i);
  return s ? {
    kind: "scope",
    plan: s.plan,
    scratchIndexes: [0, ...r.slice(s.depth + 1)],
    location: t
  } : { kind: "live", location: ta(t, i) };
}
function Km(e, t) {
  t.add(e.getKey()), $(e) && e.getChildren().forEach((r) => Km(r, t));
}
function zm(e, t, r) {
  return e.spans.find(
    (n) => !n.isSentinel && n.key === t && r <= n.end - n.start
  );
}
function wc(e, t, r) {
  const n = (a, c) => {
    const l = On(e, a, c), u = zm(e, a, c);
    return l && u ? { anchor: l, position: u.start + c } : void 0;
  };
  if (!$(t)) return n(t.getKey(), r);
  const i = /* @__PURE__ */ new Set();
  t.getChildren().slice(0, r).forEach((a) => Km(a, i));
  const s = [...e.spans].reverse().find((a) => i.has(a.key));
  if (s) {
    const a = s.end - s.start, c = On(e, s.key, a);
    return c ? { anchor: c, position: s.start + a } : void 0;
  }
  const o = e.spans[0];
  return o && !o.isSentinel ? n(o.key, 0) : void 0;
}
function jm(e, t) {
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
function Bm(e, t) {
  const r = [];
  for (let n = t; n; n = n.getParent()) {
    if (n.is(e)) return r;
    r.unshift(n.getIndexWithinParent());
  }
}
function dA(e, t, r) {
  const [n, i] = lc(t);
  if (!n || i === void 0) return;
  const s = jm(e, n);
  if (!s) {
    const c = wc(e, n, i);
    if (!c) return;
    const l = e.text[c.position];
    return {
      kind: "anchor",
      anchor: c.anchor,
      atWordByte: l !== void 0 && !Fm.test(l)
    };
  }
  const o = Bm(s.member, n);
  if (!o) return;
  const a = z(s.member) ? Zo(s.member, r.getMarker, r.viewOptions)?.out : void 0;
  return {
    kind: "preserved",
    sentinelIndex: s.sentinelIndex,
    memberIndex: s.memberIndex,
    path: o,
    offset: i,
    type: $(n) ? "element" : "text",
    noteAnchor: a && wc(a, n, i)?.anchor
  };
}
function fA(e, t) {
  if (t.type !== "text") return t;
  const r = zm(e, t.key, t.offset);
  if (!r) return t;
  const n = r.end - r.start;
  let i = t.offset;
  for (; i < n && Fm.test(e.text[r.start + i]); ) i += 1;
  return i === t.offset ? t : { ...t, offset: i };
}
function Vm(e, t) {
  const r = e.liveCut;
  return !t || !r || t.type !== "text" || t.key !== r.key ? t : t.offset >= r.nodeOffset ? { ...t, offset: t.offset + r.length } : t;
}
function pA(e, t) {
  for (let r = 0; r < e.length; r += 1) {
    const n = e[r];
    for (let i = 0; i < n.length; i += 1) {
      const s = n[i];
      if (s?.sentinelIndex === t.sentinelIndex && s.memberIndex === t.memberIndex)
        return { sentinelIndex: r, memberIndex: i };
    }
  }
}
function hA(e, t, r, n) {
  const i = pA(r, n), s = i && t.liveFragment?.sentinels[i.sentinelIndex]?.[i.memberIndex];
  if (!s?.isAttached()) return;
  const o = e.byFirstLiveKey.get(s.getKey());
  if (o?.kind === "note")
    return n.noteAnchor && o.liveFragment ? Vm(
      o,
      yi(o.liveFragment, n.noteAnchor)
    ) : void 0;
  let a = s;
  for (const c of n.path) {
    if (!$(a)) return;
    const l = a.getChildAtIndex(c);
    if (!l) return;
    a = l;
  }
  return { key: a.getKey(), offset: n.offset, type: n.type };
}
function gA(e, t, r) {
  const { plan: n } = r, { liveFragment: i, scratchFragment: s, sentinelMap: o } = n;
  if (!i || !s || !o) return;
  const a = ta(r.location, r.scratchIndexes), c = n.scratch.getEditorState().read(() => dA(s, a, e.tier2));
  if (!c) return;
  if (c.kind === "preserved")
    return hA(t, n, o, c);
  const l = yi(i, c.anchor, {
    addressDisplayBytes: !Lc(r.location)
  });
  if (l)
    return Vm(
      n,
      c.atWordByte ? fA(i, l) : l
    );
}
function mf(e, t, r) {
  const n = uA(t, r);
  if (n.kind === "live") return n.location;
  const i = gA(e, t, n), s = i && Q(i.key);
  return s ? Mr(s, i.offset) : void 0;
}
function mA(e, t, r) {
  if (t.byFirstLiveKey.size === 0) return r;
  const n = mf(e, t, r.start);
  if (!n) return;
  if (!r.end) return { ...r, start: n };
  const i = mf(e, t, r.end);
  if (i)
    return { ...r, start: n, end: i };
}
function yA(e, t) {
  const r = bi($s(t.jsonPath));
  return r.length === 0 ? t : ta(t, [
    e.liveToSettledTopIndex(r[0]),
    ...r.slice(1)
  ]);
}
function bA(e, t) {
  const r = t.liveNodes[0].getParent(), n = r ? e.planContaining(r) : void 0;
  return n === t ? void 0 : n;
}
function kA(e, t) {
  const r = t.liveNodes[0], n = bA(e, t);
  if (n) {
    const s = Wm(e, n, r, 0);
    return s && bi($s(s.jsonPath));
  }
  const i = Br(r);
  return i.length === 0 ? i : [e.liveToSettledTopIndex(i[0]), ...i.slice(1)];
}
function TA(e, t, r) {
  if (!t) return;
  const [n, ...i] = r;
  if (n === void 0) return;
  if (e.kind === "note") return n === 0 ? [...t, ...i] : void 0;
  const s = t[0];
  return s === void 0 ? void 0 : [s + n, ...i];
}
function xA(e, t, r) {
  const n = e.liveCut;
  return !n || t.getKey() !== n.key || r <= n.nodeOffset ? r : Math.max(n.nodeOffset, r - n.length);
}
function vA(e, t, r, n) {
  let i = e.sentinels[t.sentinelIndex]?.[t.memberIndex];
  if (i) {
    for (const s of r) {
      if (!$(i)) return;
      const o = i.getChildAtIndex(s);
      if (!o) return;
      i = o;
    }
    return Mr(i, n);
  }
}
function _A(e, t, r, n, i, s) {
  const o = jm(r, i);
  if (o) {
    const u = Bm(o.member, i);
    if (!u) return;
    const d = t[o.sentinelIndex]?.[o.memberIndex];
    return d ? e.scratch.getEditorState().read(() => vA(n, d, u, s)) : void 0;
  }
  const a = wc(r, i, xA(e, i, s));
  if (!a) return;
  const { anchor: c } = a, l = !Lc(Mr(i, s));
  return e.scratch.getEditorState().read(() => {
    const u = yi(n, c, { addressDisplayBytes: l }), d = u && Q(u.key);
    return d ? Mr(d, u.offset) : void 0;
  });
}
function Wm(e, t, r, n) {
  const { liveFragment: i, scratchFragment: s, sentinelMap: o } = t;
  if (!i || !s || !o) return;
  const a = _A(
    t,
    o,
    i,
    s,
    r,
    n
  );
  if (!a) return;
  const c = TA(
    t,
    kA(e, t),
    bi($s(a.jsonPath))
  );
  return c && ta(a, c);
}
function yf(e, t, r) {
  const n = e.planContaining(t);
  return n ? Wm(e, n, t, r) : yA(e, Mr(t, r));
}
function CA(e) {
  const t = xl();
  if (!t || e.byFirstLiveKey.size === 0) return t;
  const r = w();
  if (!N(r)) return;
  const n = r.isBackward(), i = n ? r.focus : r.anchor, s = yf(e, i.getNode(), i.offset);
  if (!s) return;
  if (r.isCollapsed()) return { start: s };
  const o = n ? r.anchor : r.focus, a = yf(e, o.getNode(), o.offset);
  if (a)
    return { start: s, end: a };
}
function Hm(e, t, r) {
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
function Gm(e, t, r) {
  if (e === "para") return Vl(t, r.getMarker, r.viewOptions);
  if (e === "chapter") {
    const i = t.find(_e);
    return i && Hl(i, r.getMarker, r.viewOptions);
  }
  const n = t.find(z);
  return n && Zo(n, r.getMarker, r.viewOptions)?.out;
}
function ra(e) {
  const t = e.exportJSON();
  return $(e) && Array.isArray(t.children) && e.getChildren().forEach((r) => t.children?.push(ra(r))), t;
}
function SA(e, t) {
  const r = eb({
    nodes: [...e],
    onError: (n) => {
      throw n;
    }
  });
  try {
    r.update(
      () => {
        const n = Se();
        t.forEach((i) => n.append(ks(i)));
      },
      { discrete: !0 }
    );
  } catch {
    return;
  }
  return r;
}
const bf = "\0";
function MA(e, t, r, n, i) {
  const s = `${n.viewOptions.markerMode}/${n.viewOptions.noteMode}`, o = t.map((c) => c.getTextContent()).join(bf), a = i ? `${i.node.getKey()}:${i.run}@${i.caretOffset}` : "";
  return [e, s, r, o, a].join(bf);
}
function Ql(e, t = []) {
  for (const r of e)
    z(r) && t.push(r), $(r) && Ql(r.getChildren(), t);
  return t;
}
function EA(e, t, r) {
  if (e.length === 0 && r.length === 0) return [];
  if (!t) return;
  const n = [];
  r.forEach((o, a) => {
    for (let c = 0; c < o.length; c += 1)
      n.push({ sentinelIndex: a, memberIndex: c });
  });
  const i = t.flat();
  if (i.length !== n.length) return;
  const s = /* @__PURE__ */ new Map();
  return i.forEach((o, a) => s.set(o.getKey(), n[a])), e.map((o) => o.map((a) => s.get(a.getKey())));
}
function AA(e, t) {
  return e.sentinels.filter(
    (n, i) => n.length > 0 && !t[i]?.some((s) => s !== void 0)
  ).map((n) => n[0].getKey()).reverse().reduce((n, i) => {
    const s = n.spans.find((o) => o.isSentinel && o.key === i);
    return s ? Hm(n, s.start, s.end) : n;
  }, e);
}
function na(e, t, r, n, i, s, o) {
  const a = SA(o.nodes, i);
  if (!a) return;
  const { settledCount: c, scratchFragment: l } = a.getEditorState().read(() => ({
    settledCount: fr(Se()).length,
    scratchFragment: Gm(e, Se().getChildren(), o.tier2)
  })), u = EA(
    r?.sentinels ?? [],
    s?.live,
    l?.sentinels ?? []
  );
  return {
    kind: e,
    liveNodes: t,
    liveFragment: r && u ? AA(r, u) : r,
    liveCut: n,
    scratch: a,
    scratchFragment: l,
    settledCount: c,
    sentinelMap: u
  };
}
function Zl(e, t) {
  if (!e || !t) return { liveFragment: e, liveCut: void 0 };
  const r = Rm(e, t);
  return r ? {
    liveFragment: Hm(e, r.start, r.end),
    liveCut: {
      key: t.node.getKey(),
      nodeOffset: t.caretOffset - t.run.length,
      length: t.run.length
    }
  } : { liveFragment: e, liveCut: void 0 };
}
function PA(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = Zl(t, i), a = ra(e), c = /* @__PURE__ */ new Map();
  if (qs([e], [a], c), !ea(e, c, n.tier2, r.huskKeys, i))
    return;
  const l = t && Rs(t, c, r.huskKeys);
  return na("note", [e], s, o, [a], l, n);
}
function NA(e, t, r, n, i) {
  const { liveFragment: s, liveCut: o } = Zl(t, i), a = e.map(ra), c = /* @__PURE__ */ new Map();
  qs(e, a, c), Ql(e).filter((d) => r.noteScopes.has(d.getKey())).forEach(
    (d) => ea(d, c, n.tier2, r.huskKeys, i)
  );
  const l = $m(e, c, n.tier2, r.huskKeys, i);
  if (!l) return;
  const u = t && Rs(t, c, r.huskKeys);
  return na("para", e, s, o, l, u, n);
}
function wA(e, t, r, n) {
  const { liveFragment: i, liveCut: s } = Zl(t, n), o = Lm(e, r.tier2, n);
  if (!o) return;
  const a = [e, ...Ni(e)];
  return na("chapter", a, i, s, o, void 0, r);
}
function OA(e, t, r, n, i, s) {
  const o = ra(e), a = /* @__PURE__ */ new Map();
  qs([e], [o], a), Ql([e]).filter((u) => n.noteScopes.has(u.getKey())).forEach(
    (u) => ea(u, a, i.tier2, n.huskKeys, s)
  );
  const c = /* @__PURE__ */ new Set();
  for (const u of r) {
    const d = a.get(u.getKey());
    if (!d) continue;
    const f = d.siblings.indexOf(d.node);
    f < 0 || (Um(d.siblings, f), c.add(u.getKey()));
  }
  if (c.size === 0) return;
  const l = t && Rs(t, a, c);
  return na("para", [e], t, void 0, [o], l, i);
}
function qA(e, t) {
  for (let r = e; r; r = r.getParent())
    if (t.has(r.getKey())) return !0;
  return !1;
}
function kf() {
  return {
    byFirstLiveKey: /* @__PURE__ */ new Map(),
    liveToSettledTopIndex: (e) => e,
    settledToLiveTopIndex: (e) => ({ liveIndex: e, indexWithinScope: 0 }),
    planContaining: () => {
    }
  };
}
function RA(e) {
  const t = fr(Se()), r = [], n = [];
  let i = 0;
  for (let s = 0; s < t.length; ) {
    const o = t[s], a = o.type === "element" ? o.node : void 0, c = a && e.get(a.getKey());
    if (!c || !c.liveNodes[0].is(a)) {
      r[s] = i, n.push({ liveIndex: s, indexWithinScope: 0 }), i += 1, s += 1;
      continue;
    }
    const l = new Set(c.liveNodes.map((d) => d.getKey()));
    let u = 0;
    for (; s + u < t.length; ) {
      const d = t[s + u];
      if (d.type !== "element" || !l.has(d.node.getKey())) break;
      u += 1;
    }
    for (let d = 0; d < u; d += 1)
      r[s + d] = i;
    for (let d = 0; d < c.settledCount; d += 1)
      n.push({ liveIndex: s, plan: c, indexWithinScope: d });
    i += c.settledCount, s += u;
  }
  return { liveToSettled: r, settledToLive: n };
}
function Tf(e) {
  const t = qm(e.transientInput, e.lastKnownCaret);
  if (e.pendedKeys.size === 0 && !t)
    return e.cache.entries.clear(), kf();
  const r = Dm(e.pendedKeys, e.tier2, t), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), a = (f, p) => {
    if (!f) return;
    const g = f.liveNodes[0].getKey();
    n.set(g, f), f.liveNodes.forEach((m) => i.set(m.getKey(), f)), p && f.liveNodes.forEach((m) => s.set(m.getKey(), f));
  }, c = (f, p, g, m) => {
    o.add(f);
    const y = Gm(p, g, e.tier2), v = MA(
      p,
      g,
      y?.text ?? "",
      e.tier2,
      t
    ), M = e.cache.entries.get(f);
    if (M?.signature === v) return M.plan;
    const E = m(y);
    return E ? e.cache.entries.set(f, { signature: v, plan: E }) : e.cache.entries.delete(f), E;
  };
  for (const f of r.noteScopes.values())
    a(
      c(
        f.getKey(),
        "note",
        [f],
        (p) => PA(f, p, r, e, t)
      ),
      !1
    );
  for (const f of r.paraScopes.values())
    a(
      c(
        f[0].getKey(),
        "para",
        f,
        (p) => NA(f, p, r, e, t)
      ),
      !0
    );
  for (const f of r.chapterScopes.values())
    a(
      c(
        f.getKey(),
        "chapter",
        [f, ...Ni(f)],
        (p) => wA(f, p, e, t)
      ),
      !0
    );
  const l = /* @__PURE__ */ new Map();
  for (const f of r.husks) {
    const p = f.getTopLevelElement();
    if (!ie(p) || qA(f, i)) continue;
    const g = l.get(p.getKey()) ?? { para: p, husks: [] };
    g.husks.push(f), l.set(p.getKey(), g);
  }
  for (const [f, { para: p, husks: g }] of l)
    a(
      c(
        f,
        "para",
        [p],
        (m) => OA(p, m, g, r, e, t)
      ),
      !0
    );
  for (const f of [...e.cache.entries.keys()])
    o.has(f) || e.cache.entries.delete(f);
  if (n.size === 0) return kf();
  const { liveToSettled: u, settledToLive: d } = RA(s);
  return {
    byFirstLiveKey: n,
    liveToSettledTopIndex: (f) => u[f] ?? f,
    settledToLiveTopIndex: (f) => d[f] ?? { liveIndex: f, indexWithinScope: 0 },
    planContaining: (f) => {
      for (let p = f; p; p = p.getParent()) {
        const g = i.get(p.getKey());
        if (g) return g;
      }
    }
  };
}
function $A({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ce(), n = X({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, Mo(s, e) || IA(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Oc(r);
        xf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ys(s) === Ys(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
    const i = (a) => a.read(
      () => new Set(
        Se().getChildren().filter(We).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Oc(r) || xf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Ys(a) === Ys(c)
      }));
    };
    return Ye(
      ...[wt, dr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      cr,
      () => {
        const i = n.current;
        return i.phase === "idle" && FA(i, DA()), !1;
      },
      Ft
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(cr, void 0));
    };
    return Ye(
      r.registerMutationListener(St, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), j(() => {
    const i = () => BA(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function IA(e, t, r) {
  if (LA(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Oc(t);
  (!n || n === r.book) && t.update(() => Jm(r.chapterNum, r.verseNum), {
    tag: Gr
  });
}
function LA(e, t) {
  const r = e.pendingEchoes.findIndex((n) => Mo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function DA() {
  const e = w(), t = rl(e);
  if (!t) return;
  const r = eu(), n = Up(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = gl(t, e), { verseNum: o, verse: a } = Rx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Oc(e) {
  return e.getEditorState().read(() => eu()?.getCode() || void 0);
}
function eu() {
  return Se().getChildren().find(gt);
}
function xf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && za(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || za(e, t), e.phase = "navigating") : i && za(e, t), r && r !== e.scrRef.book && Qm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function za(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Jm(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Gr }
    );
  });
}
function Jm(e, t) {
  const r = rl(w()), n = ml(r)?.getNumber(), i = Up(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Vp(n) ? Xm(t, n) : parseInt(n, 10) === t))
    return;
  const o = Se().getChildren(), a = Dp(o, e);
  if (!a) return;
  const c = Gk(o, a), l = Kk(c, !0);
  Hk(c, l);
  let u;
  try {
    u = Px(c, t);
  } catch {
    return;
  }
  u && (ie(u) ? !S(u.getFirstChild()) && Ei(u) || Zt(u, 0) : UA(u));
}
function UA(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || be(n)) {
    Zt(t, r);
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
  const s = $(n) && !z(n) ? Ym(n) : void 0;
  s ? s.select(0, 0) : Zt(t, r);
}
function Ym(e) {
  const t = e.getFirstChild();
  if (S(t)) return t;
  if ($(t) && !z(t)) return Ym(t);
}
function Ys(e) {
  return e.read(() => {
    const t = Se().getChildren().find(We);
    return `${eu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function FA(e, t) {
  e.phase !== "navigating" && t && (KA(t, e.scrRef) || Qm(e, zA(t, e.scrRef)));
}
function KA(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Xm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Xm(e, t) {
  try {
    return nl(e, t);
  } catch {
    return !1;
  }
}
function zA(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const jA = 8;
function Qm(e, t) {
  return Mo(t, e.scrRef) || e.pendingEchoes.some((r) => Mo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > jA && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function Mo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function BA(e) {
  e.phase = "idle";
}
function VA(e) {
  return gt(e) ? `${e.__code}` : _e(e) ? `${e.__marker} "${e.__number}"` : I(e) ? `${e.__marker}` : Es(e) ? `${e.__marker} "${e.__number}"` : hr(e) ? `${e.__caller}` : Dn(e) ? `${e.__marker} "${e.__number}"` : z(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ie(e) ? `${e.__marker}` : S(e) ? `"${e.__text}"${WA(e)}` : ge(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Me(e) ? `${e.__marker} "${e.__number}"` : "";
}
function WA(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[xs]) : "";
}
function HA() {
  const [e] = ce();
  return /* @__PURE__ */ _(
    ob,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: VA,
      editor: e
    }
  );
}
const Zm = Nf(null), vf = 4;
function GA({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = X(null), s = wf(Zm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function JA({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = pe(), [s, o] = pe(), a = de(
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
  return j(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ _(Zm.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function YA({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = X(null), c = X(null), [l, u] = pe(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: g, left: m } = f.getBoundingClientRect();
      p.style.top = `${g + f.offsetHeight + vf}px`, p.style.left = `${Math.min(m, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), j(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (g) => {
        const m = g.target;
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
        const p = c.current, g = a.current;
        if (p !== null && g !== null) {
          const { top: m } = p.getBoundingClientRect(), y = m + p.offsetHeight + vf;
          y !== g.getBoundingClientRect().top && (g.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Ce(Tn, { children: [
    /* @__PURE__ */ Ce(
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
    l && kn(
      /* @__PURE__ */ _(JA, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const qc = {
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
}, Rc = {
  ...qc,
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
function XA({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ _(
    YA,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + QA(t),
      buttonLabel: ZA(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(qc).map((n) => /* @__PURE__ */ Ce(
        GA,
        {
          className: "item block-marker " + eP(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: qc[n] })
          ]
        },
        n
      ))
    }
  );
}
function QA(e) {
  return e && e in Rc ? e : "ban";
}
function ZA(e) {
  return e && e in Rc ? Rc[e] : "No Style";
}
function eP(e) {
  return e ? "active dropdown-item-active" : "";
}
function _f() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const tP = qn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ce(), [o, a] = pe(s), [c, l] = pe(), [u, d] = pe(!1), [f, p] = pe(!1), g = de(
    ({
      canUndo: m,
      canRedo: y,
      blockMarker: v,
      contextMarker: M
    }) => {
      d(m), p(y), l(v), n?.({
        canUndo: m,
        canRedo: y,
        blockMarker: v,
        contextMarker: M
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    cr,
    (m, y) => (a(y), !1),
    kr
  ), [s]), /* @__PURE__ */ Ce(Tn, { children: [
    /* @__PURE__ */ _(lg, { onStateChange: g }),
    /* @__PURE__ */ Ce("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(jf, void 0);
          },
          title: to ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Bf, void 0);
          },
          title: to ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(_f, {}),
      o === s && /* @__PURE__ */ Ce(Tn, { children: [
        /* @__PURE__ */ _(
          XA,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ _(_f, {})
      ] }),
      /* @__PURE__ */ _("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), rP = Bo(), nP = {}, iP = {};
function sP() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Cf(e) {
  return e.type === "text" && e.offset !== 0 && e.offset !== e.getNode().getTextContentSize();
}
const ey = qn(function({
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
  const d = X(null), f = X(null), p = X(null), g = X(t), m = X(void 0), y = X(void 0), v = X(void 0), M = X({ entries: /* @__PURE__ */ new Map() }), E = X(0), R = X(!0), C = X(void 0), T = X(!1), [F, U] = pe(t), [G, J] = pe(0), [ae, fe] = pe(), {
    isReadonly: Y = !1,
    structureProtectionMode: Pe = "off",
    hasExternalUI: Ne = !1,
    hasSpellCheck: ee = !1,
    textDirection: K = "ltr",
    markerMenuTrigger: re = "\\",
    view: $e,
    nodes: Qe,
    debug: tr = !1,
    contextMenu: le,
    styleInfo: Ze,
    markerSettleDelayMs: wi
  } = a ?? iP, rr = $e ?? rP, Kn = ps(rr) && (rr.markerMode !== "hidden" || !rr.hasSpacing || rr.hasGutterParaMarkers || rr.hasActiveTextFocusBox) ? {
    ...rr,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : rr, Oi = X(Kn);
  $t(Oi.current, Kn) || (Oi.current = Kn);
  const ue = Oi.current, ot = De(() => Qe ?? nP, [Qe]), ia = De(() => le, [le]), $r = De(
    () => Tx(Ze ?? ho),
    [Ze]
  ), Te = X(c);
  $t(Te.current, c) || (Te.current = c);
  const xe = Te.current, oe = ps(ue), mt = Y || oe, Oe = Kn !== rr;
  j(() => {
    oe && !Y && xe?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Oe && xe?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    );
  }, [oe, Y, Oe, xe]);
  const Vt = X(null), Is = De(() => {
    if (ue.markerMode !== "editable") return;
    const A = Ze ?? ho;
    return {
      getContext: () => Vt.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (L) => _E(
        A,
        L,
        ot.extraValidMarkers
      ),
      getEnterItems: (L) => CE(
        A,
        L,
        ot.extraValidMarkers
      ),
      apply: (L, B) => {
        const W = Vt.current;
        W && (B.trigger === "enter" ? W.splitParagraphWithMarker(L.marker) : W.applyMarkerMenuSelection(L, B));
      },
      commitTypedCloser: (L) => {
        Vt.current?.commitTypedCloser(L);
      }
    };
  }, [ue, Ze, ot.extraValidMarkers]), Ot = (A) => {
    T.current || (T.current = !0, Te.current?.warn(
      `Editor: cannot ${A} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, qi = (A) => {
    if (oe)
      throw new Error(
        `Cannot ${A} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, gr = (A) => {
    if (qi(A), mt) throw new Error(`Cannot ${A} in readonly mode`);
  }, cn = De(
    () => [et, ...oe ? Bv : Uh],
    [oe]
  ), Ls = De(
    () => ({
      namespace: "platformEditor",
      theme: { ...Ug, showCharMarkerTitles: ue.showCharMarkerTitles },
      editable: !mt,
      editorState: void 0,
      // Handling of errors during update
      onError(A) {
        throw A;
      },
      nodes: cn
    }),
    [mt, cn, ue.showCharMarkerTitles]
  );
  Ia.initialize(xe);
  function yt(A) {
    if (A !== void 0 && !VM(A, ot.extraValidMarkers))
      throw new Error(`Unsupported character marker '${A}'`);
  }
  const qt = de(() => {
    const A = d.current;
    if (!A) return g.current;
    const L = Ca(A), B = y.current;
    if ((!L || L.size === 0) && !B) return g.current;
    const W = A.getEditorState(), me = W.toJSON();
    return W.read(
      () => sA(
        me,
        L ?? /* @__PURE__ */ new Set(),
        { viewOptions: ue, getMarker: $r, logger: xe },
        B,
        v.current
      )
    ) ?? g.current;
  }, [ue, $r, xe]), dt = de(() => {
    const A = d.current;
    if (!A) return;
    const L = {
      pendedKeys: Ca(A) ?? /* @__PURE__ */ new Set(),
      transientInput: y.current,
      lastKnownCaret: v.current,
      tier2: { viewOptions: ue, getMarker: $r, logger: xe },
      nodes: cn,
      cache: M.current
    };
    return Js(L) && L.cache.entries.clear(), L;
  }, [ue, $r, xe, cn]), ln = de(
    (A) => {
      const L = d.current, B = dt();
      if (!(!L || !B))
        return Js(B) ? A : L.getEditorState().read(() => {
          const W = Tf(B);
          return mA(B, W, A);
        });
    },
    [dt]
  );
  j(() => (R.current = !0, () => {
    R.current = !1;
  }), []);
  const Ir = de(
    (A, L) => A.read(() => {
      const B = dt(), W = B && CA(Tf(B));
      return !W && !oe && N(w()) && xe?.warn(
        `${L} refused: the selection could not be expressed against the document the host is reading`
      ), W;
    }),
    [dt, oe, xe]
  ), zn = de(
    (A) => {
      if (!i) return;
      const L = d.current, B = dt();
      E.current += 1;
      const W = E.current;
      if (!L || !B || Js(B)) {
        i(A);
        return;
      }
      queueMicrotask(() => {
        if (!R.current || W !== E.current || d.current !== L) return;
        const me = Ir(L, "onSelectionChange");
        W === E.current && i(me);
      });
    },
    [i, dt, Ir]
  ), jn = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const A = d.current?.getRootElement();
      return !!A && A.ownerDocument.activeElement === A;
    },
    undo() {
      d.current?.dispatchCommand(jf, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Bf, void 0);
    },
    cut() {
      gr("cut"), d.current?.dispatchCommand(_n, null);
    },
    copy() {
      d.current?.dispatchCommand(Oo, null);
    },
    paste() {
      gr("paste"), d.current && wl(d.current);
    },
    pastePlainText() {
      gr("paste as plain text"), d.current && Ol(d.current);
    },
    getUsj() {
      return qt();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(Am, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(A) {
      if (!A) {
        y.current = void 0;
        return;
      }
      const L = d.current?.getEditorState().read(() => {
        const B = w();
        return N(B) && B.isCollapsed() ? B.focus.key : void 0;
      });
      y.current = { input: A, nodeKey: L ?? v.current?.key };
    },
    setUsj(A) {
      if (!$t(g.current, A)) {
        g.current = A, y.current = void 0;
        const L = $t(F, A);
        U(A), L && J((B) => B + 1);
      }
    },
    applyUpdate(A, L = "remote") {
      if (oe && L === "remote") {
        Te.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      qi("apply an update"), d.current?.update(
        () => {
          L === "remote" && Hr(ns), y_(A, ue, ot, xe);
        },
        { discrete: !0 }
      );
      const B = d.current?.getEditorState();
      if (!B) return;
      const W = Ia.deserializeEditorState(B, ue);
      if (W) {
        const me = !$t(g.current, W);
        if (me && (g.current = W), me || !$t(F, W)) {
          const at = Ju(A, B, "apply");
          C.current = W, s?.(W, A, L, at);
        }
      }
    },
    replaceEmbedUpdate(A, L) {
      const B = d.current?.read(() => Wx(A, L));
      B ? this.applyUpdate(B) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${A}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (oe) {
        Ot("get the selection");
        return;
      }
      const A = d.current;
      if (!A) return;
      const L = dt();
      return !L || Js(L) ? A.read(xl) : Ir(A, "getSelection");
    },
    setSelection(A) {
      if (oe) {
        Ot("set the selection");
        return;
      }
      const L = ln(A);
      if (!L) {
        xe?.warn(
          "setSelection refused: the position could not be resolved against the document currently being edited"
        );
        return;
      }
      d.current?.update(() => {
        const B = Tl(L);
        B !== void 0 && (xn(B), Hr(rp), Cf(B.anchor) && Cf(B.focus) && d.current?.dispatchCommand(cr, void 0));
      });
    },
    setAnnotation(A, L, B, W, me) {
      if (oe) {
        Ot("set an annotation");
        return;
      }
      let at, Rt, Mt, Bn;
      typeof W == "function" || W === void 0 ? (at = W, Rt = me) : (at = W.onClick, Rt = W.onRemove, Mt = W.onMouseEnter, Bn = W.onMouseLeave);
      const Ri = ln(A);
      if (!Ri) {
        xe?.warn(
          `setAnnotation refused for ${L} "${B}": the range could not be resolved against the document currently being edited`
        );
        return;
      }
      f.current?.setAnnotation(
        Ri,
        Mu(L),
        B,
        at,
        Rt,
        Mt,
        Bn
      );
    },
    removeAnnotation(A, L) {
      f.current?.removeAnnotation(Mu(A), L);
    },
    formatPara(A) {
      gr("format a paragraph"), d.current?.update(() => {
        const L = w();
        if (!N(L)) {
          c?.warn(
            `formatPara refused: no range selection to retag with "${A}" (restore the caret before applying, as the marker palettes do)`
          );
          return;
        }
        lb(L, () => os(A));
        const B = w();
        if (!N(B)) return;
        const W = /* @__PURE__ */ new Set();
        B.getNodes().forEach((me) => {
          const at = me.getTopLevelElement();
          ie(at) && W.add(at);
        }), W.forEach((me) => pm(me, A, ue));
      });
    },
    getElementByKey(A) {
      return d.current?.read(
        () => d.current?.getElementByKey(A) ?? void 0
      );
    },
    removeCharacterMarker(A) {
      if (mt) throw new Error("Cannot remove character marker in readonly mode");
      yt(A);
      let L = !1;
      return d.current?.update(
        () => {
          const B = w();
          N(B) && (L = qg(B, A, ue));
        },
        { discrete: !0 }
      ), L;
    },
    replaceCharacterMarker(A, L) {
      if (mt) throw new Error("Cannot replace character marker in readonly mode");
      yt(A), yt(L);
      let B = !1;
      return d.current?.update(
        () => {
          const W = w();
          N(W) && (B = nE(W, A, L));
        },
        { discrete: !0 }
      ), B;
    },
    extendCharacterMarker(A, L) {
      if (mt) throw new Error("Cannot extend character marker in readonly mode");
      yt(A), L?.forEach(
        (W) => yt(W)
      );
      let B = !1;
      return d.current?.update(
        () => {
          const W = w();
          N(W) && (B = iE(
            W,
            A,
            L,
            ue
          ));
        },
        { discrete: !0 }
      ), B;
    },
    insertMarker(A) {
      if (mt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!xc(A, ot.extraValidMarkers))
        throw new Error(`Unsupported marker '${A}'`);
      const L = vc(
        A,
        m,
        ue,
        ot,
        xe,
        void 0,
        Ze
      );
      return L.action({ editor: d.current, reference: r }), L.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!Y)
        return d.current?.getEditorState().read(() => d1());
    },
    applyMarkerMenuSelection(A, L) {
      if (Y) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (A.kind !== "closeTag" && !xc(A.marker, ot.extraValidMarkers))
        throw new Error(`Unsupported marker '${A.marker}'`);
      let B;
      return d.current.update(() => {
        B = m1(A, L, r, {
          expandedNoteKeyRef: m,
          viewOptions: ue,
          nodeOptions: ot,
          logger: c,
          styleInfo: Ze
        });
      }), B;
    },
    splitParagraphWithMarker(A) {
      if (Y) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        km(A, ue);
      });
    },
    commitTypedMarker(A, L) {
      if (Y) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let B = !1;
      return d.current.update(() => {
        B = g1(A, L), B || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), B;
    },
    commitTypedCloser(A) {
      if (Y) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let L = !1;
      return d.current.update(() => {
        L = bm(A), L || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), L;
    },
    insertNote(A, L, B) {
      gr("insert a note");
      const W = B && ln(B);
      if (B && !W) {
        xe?.warn(
          `insertNote refused for \\${A}: the position could not be resolved against the document currently being edited`
        );
        return;
      }
      d.current?.update(() => {
        const me = Lh(
          A,
          L,
          W,
          r,
          ue,
          ot,
          xe
        );
        me && !me.getIsCollapsed() && (m.current = me.getKey());
      });
    },
    selectNote(A) {
      d.current?.update(() => {
        const L = id(A);
        L && (Kv(L, ue), L.getIsCollapsed() || (m.current = L.getKey()));
      });
    },
    getNoteOps(A) {
      return d.current?.read(() => {
        const L = id(A);
        if (L)
          return bl(L);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  Vt.current = jn, Ic(u, () => jn), j(() => {
    const A = d.current;
    if (A)
      return A.registerUpdateListener(({ editorState: L }) => {
        L.read(() => {
          const B = w();
          if (!N(B) || !B.isCollapsed()) return;
          const W = B.focus.getNode();
          S(W) && (v.current = { key: W.getKey(), offset: B.focus.offset });
        });
      });
  }, []);
  const Lr = de(
    (A, L, B, W) => {
      if (oe) return;
      const me = Ia.deserializeEditorState(A, ue);
      if (me) {
        const at = !$t(g.current, me);
        if (at && (g.current = me), at || !$t(F, me)) {
          const Rt = Ju(W, A);
          C.current = me, s?.(me, W, "local", Rt);
        }
      }
    },
    [F, s, ue, oe]
  );
  j(() => {
    const A = d.current;
    if (!(!A || !s))
      return A.registerUpdateListener(({ tags: L, dirtyElements: B, dirtyLeaves: W }) => {
        !L.has(zc) && (B.size === 0 && W.size === 0 || L.has(ns) || !Ca(A)?.size) || queueMicrotask(() => {
          const me = qt();
          !me || $t(C.current, me) || (C.current = me, s(me, void 0, "local", void 0));
        });
      });
  }, [s, qt]);
  const un = de(
    (A) => {
      fe(A.contextMarker), o?.(A);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Ce(Hf, { initialConfig: Ls, children: [
      /* @__PURE__ */ _(mC, { isEditable: !mt }),
      /* @__PURE__ */ Ce("div", { className: "editor-container", children: [
        Ne ? /* @__PURE__ */ _(lg, { onStateChange: un }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (mt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              tP,
              {
                ref: p,
                editorRef: Vt,
                isReadonly: mt,
                onStateChange: un
              }
            )
          }
        ),
        /* @__PURE__ */ Ce("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(Jf, { editorRef: d }),
          /* @__PURE__ */ _(
            cb,
            {
              contentEditable: /* @__PURE__ */ _(
                Gf,
                {
                  className: `editor-input usfm ${m_(ue).join(" ")}${ue.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ue.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: ee
                }
              ),
              placeholder: /* @__PURE__ */ _(sP, {}),
              ErrorBoundary: Yf
            }
          ),
          Ne && /* @__PURE__ */ _(gC, {}),
          /* @__PURE__ */ _(Xf, {}),
          r && n && /* @__PURE__ */ _($A, { scrRef: r, onScrRefChange: n }),
          r && !Ne && /* @__PURE__ */ _(
            FS,
            {
              trigger: re,
              scrRef: r,
              contextMarker: ae,
              getMarkerAction: (A) => vc(
                A,
                m,
                ue,
                ot,
                xe,
                void 0,
                Ze
              ),
              editableHarness: Is
            }
          ),
          /* @__PURE__ */ _(
            kC,
            {
              scripture: F,
              scriptureRef: g,
              nodeOptions: ot,
              editorAdaptor: tn,
              viewOptions: ue,
              logger: xe
            },
            G
          ),
          /* @__PURE__ */ _(UC, { onChange: zn }),
          /* @__PURE__ */ _(
            u_,
            {
              onChange: Lr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Nb
            }
          ),
          /* @__PURE__ */ _(lE, { viewOptions: ue }),
          /* @__PURE__ */ _(c_, { ref: f, logger: xe }),
          /* @__PURE__ */ _(j_, { viewOptions: ue }),
          /* @__PURE__ */ _(nC, {}),
          /* @__PURE__ */ _(lC, {}),
          ue?.markerMode !== "editable" && /* @__PURE__ */ _(uC, { logger: xe }),
          /* @__PURE__ */ _(hC, { options: ia }),
          /* @__PURE__ */ _(bC, {}),
          /* @__PURE__ */ _(y1, {}),
          /* @__PURE__ */ _(
            W1,
            {
              viewOptions: ue,
              getMarker: $r,
              logger: xe,
              markerSettleDelayMs: wi
            }
          ),
          /* @__PURE__ */ _(
            Q1,
            {
              styleInfo: Ze,
              viewOptions: ue,
              logger: xe
            }
          ),
          /* @__PURE__ */ _(
            TC,
            {
              expandedNoteKeyRef: m,
              nodeOptions: ot,
              viewOptions: ue,
              logger: xe
            }
          ),
          /* @__PURE__ */ _(DC, {}),
          /* @__PURE__ */ _(D_, {}),
          /* @__PURE__ */ _(R_, {}),
          /* @__PURE__ */ _(oA, { viewOptions: ue, logger: xe }),
          /* @__PURE__ */ _(FC, {}),
          /* @__PURE__ */ _(ES, { structureProtectionMode: Pe }),
          /* @__PURE__ */ _(AS, { textDirection: K }),
          /* @__PURE__ */ _(NS, {}),
          /* @__PURE__ */ _(DS, {}),
          l
        ] }),
        tr && /* @__PURE__ */ _(HA, {})
      ] })
    ] }, ue.verseLayout ?? "inline")
  );
}), d0 = qn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(ey, { ref: r, ...i });
});
function ty() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Eo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? ty() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function ry(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? ty() : r,
    quote: e,
    type: "thread"
  };
}
function Sf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function oP(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function ja(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class aP {
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
    this._comments = t, ja(this);
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
          const c = Sf(a);
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
    this._comments = i, ja(this);
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
          const c = Sf(a);
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
    return this._comments = n, ja(this), t.type === "comment" ? {
      index: s,
      markedComment: oP(t)
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
    return t !== null ? t.doc.get("comments", yu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new bu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new yu();
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
      Cb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Ft
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Sb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const g = p.insert, m = p.retain, y = p.delete, v = u.parent, M = u === r ? void 0 : v instanceof bu && this._comments.find((E) => E.id === v.get("id"));
              if (Array.isArray(g)) {
                const E = f;
                g.slice().reverse().forEach((R) => {
                  const C = R.get("id"), F = R.get("type") === "thread" ? ry(
                    R.get("quote"),
                    R.get("comments").toArray().map(
                      (U) => Eo(
                        U.get("content"),
                        U.get("author"),
                        U.get("id"),
                        U.get("timeStamp"),
                        U.get("deleted")
                      )
                    ),
                    C
                  ) : Eo(
                    R.get("content"),
                    R.get("author"),
                    C,
                    R.get("timeStamp"),
                    R.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(F, M, E);
                  });
                });
              } else if (typeof m == "number")
                f += m;
              else if (typeof y == "number")
                for (let E = 0; E < y; E++) {
                  const R = M === void 0 || M === !1 ? this._comments[f] : M.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(R, M);
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
function cP(e) {
  const [t, r] = pe(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function lP({
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
      const u = l.target;
      i.current !== null && !i.current.contains(u) && n && e();
    }, c = i.current;
    return c !== null && (s = c.parentElement, s !== null && s.addEventListener("click", a)), window.addEventListener("keydown", o), () => {
      window.removeEventListener("keydown", o), s !== null && s?.removeEventListener("click", a);
    };
  }, [n, e]), /* @__PURE__ */ _("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Ce("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function uP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return kn(
    /* @__PURE__ */ _(lP, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function ny() {
  const [e, t] = pe(null), r = de(() => {
    t(null);
  }, []), n = De(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _(uP, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const dP = {
  ...Ug,
  paragraph: "CommentEditorTheme__paragraph"
};
function fP(...e) {
  return e.filter(Boolean).join(" ");
}
function nn({
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
      className: fP(
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
function pP({
  className: e
}) {
  return /* @__PURE__ */ _(Gf, { className: e || "ContentEditable__root" });
}
function hP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const Mf = zf("INSERT_INLINE_COMMAND");
function gP({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = X(null), s = de(() => {
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
function mP({ onEscape: e }) {
  const [t] = ce();
  return j(() => t.registerCommand(
    Kf,
    (r) => e(r),
    oi
  ), [t, e]), null;
}
function iy({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(Hf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: dP
  }, children: /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      xb,
      {
        contentEditable: /* @__PURE__ */ _(pP, { className: e }),
        placeholder: /* @__PURE__ */ _(hP, { children: s }),
        ErrorBoundary: Yf
      }
    ),
    /* @__PURE__ */ _(Tb, { onChange: n }),
    /* @__PURE__ */ _(Xf, {}),
    t !== !1 && /* @__PURE__ */ _(yb, {}),
    /* @__PURE__ */ _(mP, { onEscape: r }),
    /* @__PURE__ */ _(bb, {}),
    i !== void 0 && /* @__PURE__ */ _(Jf, { editorRef: i })
  ] }) });
}
function sy(e, t) {
  return de(
    (r, n) => {
      r.read(() => {
        e(vb()), t(!_b(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function yP({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = pe(""), [s, o] = pe(!1), a = X(null), c = De(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = X(null), u = ay(), d = de(() => {
    e.getEditorState().read(() => {
      const m = w();
      if (N(m)) {
        l.current = m.clone();
        const y = m.anchor, v = m.focus, M = ub(
          e,
          y.getNode(),
          y.offset,
          v.getNode(),
          v.offset
        ), E = a.current;
        if (M !== null && E !== null) {
          const { left: R, bottom: C, width: T } = M.getBoundingClientRect(), F = db(e, M);
          let U = F.length === 1 ? R + T / 2 - 125 : R - 125;
          U < 10 && (U = 10), E.style.left = `${U}px`, E.style.top = `${C + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const G = F.length, { container: J } = c, ae = c.elements, fe = ae.length;
          for (let Y = 0; Y < G; Y++) {
            const Pe = F[Y];
            let Ne = ae[Y];
            Ne === void 0 && (Ne = document.createElement("span"), ae[Y] = Ne, J.appendChild(Ne));
            const K = `position:absolute;top:${Pe.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Pe.left}px;height:${Pe.height}px;width:${Pe.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            Ne.style.cssText = K;
          }
          for (let Y = fe - 1; Y >= G; Y--) {
            const Pe = ae[Y];
            J.removeChild(Pe), ae.pop();
          }
        }
      }
    });
  }, [e, c]);
  bs(() => {
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
        ry(m, [Eo(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, g = sy(i, o);
  return /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      iy,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: g
      }
    ),
    /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ _(nn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ _(
        nn,
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
function bP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = pe(""), [s, o] = pe(!1), a = X(null), c = ay(), l = sy(i, o);
  return /* @__PURE__ */ Ce(Tn, { children: [
    /* @__PURE__ */ _(
      iy,
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
      nn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Eo(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(tb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function oy({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Ce(Tn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Ce("div", { className: "Modal__content", children: [
      /* @__PURE__ */ _(
        nn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ _(
        nn,
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
function Ef({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = pe(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = ny();
  return /* @__PURE__ */ Ce("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Ce("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Ce(Tn, { children: [
      /* @__PURE__ */ _(
        nn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ _(
              oy,
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
function kP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ce(), [a, c] = pe(0), [l, u] = ny(), d = De(
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
    return f.type === "thread" ? /* @__PURE__ */ Ce(
      "li",
      {
        onClick: () => {
          const m = s.get(p);
          if (m !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const v = Array.from(m)[0], M = Q(v);
                ge(M) && M.selectStart();
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
          /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Ce("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ _("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ _(
              nn,
              {
                onClick: () => {
                  u("Delete Thread", (m) => /* @__PURE__ */ _(
                    oy,
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
            Ef,
            {
              comment: m,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            m.id
          )) }),
          /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
            bP,
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
      Ef,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function TP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = X(null), o = r.length === 0;
  return /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ _("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ _(
      kP,
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
function ay() {
  const e = Qf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function xP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Qf(), [a] = ce(), c = De(() => {
    const U = new aP(a, s);
    return r && U.registerOnChange(r), t?.(U), U;
  }, [a, s, r, t]), l = cP(c), u = De(() => /* @__PURE__ */ new Map(), []), [d, f] = pe(), [p, g] = pe([]), [m, y] = pe(!1), [v, M] = pe(!1), { yjsDocMap: E } = o;
  j(() => {
    if (e) {
      const U = e("comments", E);
      return c.registerCollaboration(U);
    }
    return () => {
    };
  }, [c, e, E]);
  const R = de(() => {
    a.update(() => {
      const U = w();
      U !== null && (U.dirty = !0);
    }), y(!1);
  }, [a]), C = de(
    (U, G) => {
      if (U.type === "comment") {
        const J = c.deleteCommentOrThread(U, G);
        if (!J)
          return;
        const { markedComment: ae, index: fe } = J;
        c.addComment(ae, G, fe);
      } else {
        c.deleteCommentOrThread(U);
        const J = G !== void 0 ? G.id : U.id, ae = u.get(J);
        ae !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const fe of ae) {
              const Y = Q(fe);
              ge(Y) && (Y.deleteID(Wr, J), Y.hasNoIDsForEveryType() && oo(Y));
            }
          });
        });
      }
    },
    [c, a, u]
  ), T = de(
    (U, G, J, ae) => {
      c.addComment(U, J), G && (a.update(() => {
        N(ae) && Gc(ae, Wr, U.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const U = [];
    let G;
    for (const J of p) {
      const ae = u.get(J);
      if (ae !== void 0)
        for (const fe of ae) {
          const Y = a.getElementByKey(fe);
          Y !== null && (Y.classList.add("selected"), U.push(Y), G = window.setTimeout(() => {
            M(!0);
          }, 0));
        }
    }
    return () => {
      G !== void 0 && window.clearTimeout(G);
      for (const J of U)
        J.classList.remove("selected");
    };
  }, [p, a, u]), j(() => {
    if (!a.hasNodes([et]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const U = /* @__PURE__ */ new Map();
    return Ye(
      Wf(
        a,
        et,
        (G) => is(G.getTypedIDs()),
        (G, J) => {
          for (const [ae, fe] of Object.entries(G.getTypedIDs()))
            fe.forEach((Y) => {
              J.addID(ae, Y);
            });
        }
      ),
      a.registerMutationListener(
        et,
        (G) => {
          a.getEditorState().read(() => {
            for (const [J, ae] of G) {
              const fe = Q(J);
              let Y = [];
              ae === "destroyed" ? Y = U.get(J) ?? [] : ge(fe) && (Y = fe.getTypedIDs()[Wr] ?? []);
              for (const Pe of Y) {
                let Ne = u.get(Pe);
                U.set(J, Y), ae === "destroyed" ? Ne !== void 0 && (Ne.delete(J), Ne.size === 0 && u.delete(Pe)) : (Ne === void 0 && (Ne = /* @__PURE__ */ new Set(), u.set(Pe, Ne)), Ne.has(J) || Ne.add(J));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: G, tags: J }) => {
        G.read(() => {
          const ae = w();
          let fe = !1, Y = !1;
          if (N(ae)) {
            const Pe = ae.anchor.getNode();
            if (S(Pe)) {
              const Ne = hk(Pe, Wr, ae.anchor.offset) ?? [];
              Ne !== null && (g(Ne), fe = !0), ae.isCollapsed() || (f(Pe.getKey()), Y = !0);
            }
          }
          fe || g((Pe) => Pe.length === 0 ? Pe : []), Y || f(null), !J.has("collaboration") && N(ae) && y(!1);
        });
      }),
      a.registerCommand(
        Mf,
        () => {
          const G = window.getSelection();
          return G !== null && G.removeAllRanges(), y(!0), !0;
        },
        vn
      )
    );
  }, [a, u]);
  const F = () => {
    a.dispatchCommand(Mf, void 0);
  };
  return /* @__PURE__ */ Ce(Tn, { children: [
    m && kn(
      /* @__PURE__ */ _(
        yP,
        {
          editor: a,
          cancelAddComment: R,
          submitAddComment: T
        }
      ),
      document.body
    ),
    d != null && !m && kn(
      /* @__PURE__ */ _(
        gP,
        {
          anchorKey: d,
          editor: a,
          showComments: v,
          onAddComment: F
        }
      ),
      document.body
    ),
    n !== null && kn(
      /* @__PURE__ */ _(
        nn,
        {
          className: `CommentPlugin_ShowCommentsButton ${v ? "active" : ""}`,
          onClick: () => M(!v),
          title: v ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    v && kn(
      /* @__PURE__ */ _(
        TP,
        {
          comments: l,
          submitAddComment: T,
          deleteCommentOrThread: C,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function vP() {
  const e = X(void 0), t = de((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function _P(e, t) {
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
function CP(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      _P(r, t);
    };
  }, [t, e]);
}
const f0 = qn(function(t, r) {
  const n = X(null), i = X(!0), s = X(null), [o, a] = pe(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: g, view: m } = {} } = t, y = (g ?? !1) || ps(m), [v, M] = vP();
  CP(f, v), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const C = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(C), p || console.warn(C);
    }
  }, [p]), Ic(r, () => ({
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
    setUsj(C) {
      n.current?.setUsj(C);
    },
    applyUpdate(C, T) {
      n.current?.applyUpdate(C, T);
    },
    replaceEmbedUpdate(C, T) {
      return n.current?.replaceEmbedUpdate(C, T);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(C) {
      n.current?.setSelection(C);
    },
    setAnnotation(C, T, F, U, G) {
      typeof U == "function" || U === void 0 ? n.current?.setAnnotation(C, T, F, U, G) : n.current?.setAnnotation(C, T, F, U);
    },
    removeAnnotation(C, T) {
      n.current?.removeAnnotation(C, T);
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
    replaceCharacterMarker(C, T) {
      return n.current?.replaceCharacterMarker(C, T) ?? !1;
    },
    extendCharacterMarker(C, T) {
      return n.current?.extendCharacterMarker(C, T) ?? !1;
    },
    insertMarker(C) {
      return n.current?.insertMarker(C);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(C, T) {
      return n.current?.applyMarkerMenuSelection(C, T);
    },
    splitParagraphWithMarker(C) {
      n.current?.splitParagraphWithMarker(C);
    },
    commitTypedMarker(C, T) {
      return n.current?.commitTypedMarker(C, T) ?? !1;
    },
    commitTypedCloser(C) {
      return n.current?.commitTypedCloser(C) ?? !1;
    },
    insertNote(C, T, F) {
      n.current?.insertNote(C, T, F);
    },
    selectNote(C) {
      n.current?.selectNote(C);
    },
    getNoteOps(C) {
      return n.current?.getNoteOps(C);
    },
    setComments(C) {
      v.current?.setComments(C), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const E = de(
    (C, T, F, U) => {
      if (!u) return;
      const G = v.current?.getComments();
      u(C, G, T, F, U);
    },
    [v, u]
  ), R = de(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const C = v.current?.getComments();
    l(C);
  }, [v, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(kb, { children: /* @__PURE__ */ Ce(ey, { ref: n, onUsjChange: E, ...f, children: [
    /* @__PURE__ */ _(
      xP,
      {
        setCommentStore: M,
        onChange: R,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ _("div", { ref: s, className: "comment-container" })
  ] }) });
});
function bn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function cy(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function SP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const MP = /^[#\w().,%/\s-]+$/;
function yr(e) {
  return e != null;
}
const EP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, AP = {
  left: "right",
  right: "left"
}, $c = ".editor-input.usfm", PP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function NP(e) {
  return PP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${$c}".`
  ), $c);
}
function wP(e, t, r, n) {
  const i = [];
  if (t.fontName && i.push(`font-family: "${cy(t.fontName)}"`), t.bold && i.push("font-weight: bold"), t.italic && i.push("font-style: italic"), t.color && (MP.test(t.color) ? i.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), yr(t.fontSize) && t.fontSize > 0 && i.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), yr(t.firstLineIndent) && i.push(`text-indent: ${bn(t.firstLineIndent * 20 * r)}vw`), yr(t.leftMargin) && t.leftMargin >= 0 && i.push(`margin-${n ? "right" : "left"}: ${bn(t.leftMargin * 20 * r)}vw`), yr(t.rightMargin) && t.rightMargin >= 0 && i.push(
    `margin-${n ? "left" : "right"}: ${bn(t.rightMargin * 20 * r)}vw`
  ), yr(t.spaceBefore) && t.spaceBefore >= 0 && i.push(`margin-top: ${bn(t.spaceBefore * r)}pt`), yr(t.spaceAfter) && t.spaceAfter >= 0 && i.push(`margin-bottom: ${bn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? i.push("line-height: 1.5") : t.lineSpacing === 2 && i.push("line-height: 2"), t.subscript ? i.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && i.push("vertical-align: text-top", "font-size: 66%"), t.underline && i.push("text-decoration: underline"), t.smallCaps && i.push("font-variant: small-caps"), t.justification) {
    const s = EP[n ? AP[t.justification] ?? t.justification : t.justification];
    s && i.push(`text-align: ${s}`);
  }
  return t.textProperties?.includes("verse") && i.push("white-space: nowrap", "unicode-bidi: embed"), i;
}
const Af = { c: 150, ca: 133, cp: 150 };
function Pf(e, t) {
  return e && yr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function OP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && yr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Pf(e.markers.c, Af.c);
  return ["ca", "cp"].map((i) => {
    const s = Pf(
      e.markers[i],
      Af[i]
    ), o = bn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function p0(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = $c } = t, s = NP(i), o = [], a = [];
  e.defaultFont && a.push(`font-family: "${cy(e.defaultFont)}"`), yr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${bn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = wP(c, l, r, n);
    u.length > 0 && o.push(`${s} .usfm_${SP(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...OP(e, s)), o.join(`
`);
}
export {
  Hh as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  d0 as Editorial,
  no as GENERATOR_NOTE_CALLER,
  ep as HIDDEN_NOTE_CALLER,
  f0 as Marginal,
  b as MarkerType,
  Vh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Wh as STANDARD_VIEW_MODE,
  ho as defaultStyleInfo,
  u0 as directionToNames,
  Zv as filterAndRankItems,
  p0 as generateUsjCss,
  c0 as getDefaultViewMode,
  Bo as getDefaultViewOptions,
  CE as getEnterMenuItems,
  _E as getMarkerMenuItems,
  l0 as getViewMode,
  Gh as getViewOptions,
  ps as isBlockVerseLayout,
  zr as isInsertEmbedOpOfType,
  f_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
