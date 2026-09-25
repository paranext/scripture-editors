import { jsx as M, jsxs as _e, Fragment as vn } from "react/jsx-runtime";
import { forwardRef as $n, useState as de, useRef as Z, useCallback as he, useEffect as B, useMemo as Be, memo as My, createContext as qf, useContext as Rf, Children as Ey, isValidElement as Ay, cloneElement as Py, useImperativeHandle as Ic, useLayoutEffect as bs } from "react";
import { assertSafeKey as Je, isValidBookCode as Ny, MARKER_OBJECT_PROPS as wy, USJ_VERSION as gr, USJ_TYPE as mr, isUsjTextContentLocation as Oy, indexesFromUsjJsonPath as $f, isUsjAttributeKeyLocation as qy, isUsjAttributeMarkerLocation as Ry, isUsjClosingAttributeMarkerLocation as $y, isUsjMarkerLocation as Iy, isUsjClosingMarkerLocation as Ly, isUsjPropertyValueLocation as Dy, getUsjDocumentLocationTypeName as Uy, usjJsonPathFromIndexes as gn, EMPTY_USJ as If } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as We, $parseSerializedNode as oi, DecoratorNode as ks, ElementNode as nr, isHTMLElement as In, createState as Co, $getState as ne, $setState as Tt, $isRangeSelection as N, $isElementNode as F, $isTextNode as E, $getSelection as q, $isNodeSelection as Lc, ParagraphNode as Dc, TextNode as je, $createTextNode as pe, $getCommonAncestor as Fy, $isLineBreakNode as Ts, NODE_STATE_KEY as xs, $getEditor as ai, $hasUpdateTag as zy, $getNodeByKey as ie, $getRoot as Ke, $createRangeSelection as Xi, $createPoint as Fa, $getCharacterOffsets as Uc, KEY_DOWN_COMMAND as qr, COMMAND_PRIORITY_HIGH as ve, HISTORY_MERGE_TAG as Lf, CLICK_COMMAND as So, COMMAND_PRIORITY_EDITOR as Mn, DELETE_CHARACTER_COMMAND as Df, DELETE_WORD_COMMAND as Uf, DELETE_LINE_COMMAND as za, COMMAND_PRIORITY_NORMAL as Sn, CONTROLLED_TEXT_INSERTION_COMMAND as vo, COMMAND_PRIORITY_CRITICAL as _t, PASTE_COMMAND as pr, CUT_COMMAND as Xr, isDOMNode as Ff, $getNearestNodeFromDOMNode as yi, DROP_COMMAND as Fc, $isDecoratorNode as Mo, COPY_COMMAND as Eo, COMMAND_PRIORITY_LOW as Ct, SELECTION_CHANGE_COMMAND as yr, getDOMSelection as Ky, isSelectionWithinEditor as By, $createRangeSelectionFromDom as jy, $setSelection as Yr, isDOMTextNode as Vy, BLUR_COMMAND as zc, $addUpdateTag as Qr, SKIP_DOM_SELECTION_TAG as Wy, CLEAR_HISTORY_COMMAND as Hy, $getPreviousSelection as Gy, $isRootOrShadowRoot as Jy, CAN_UNDO_COMMAND as Yy, CAN_REDO_COMMAND as Xy, DRAGSTART_COMMAND as Qy, $createNodeSelection as zf, getDOMSelectionFromTarget as Zy, $onUpdate as eb, KEY_ENTER_COMMAND as Kf, LineBreakNode as Bf, $copyNode as tb, FOCUS_COMMAND as rb, $isRootNode as nb, KEY_ESCAPE_COMMAND as jf, INSERT_PARAGRAPH_COMMAND as Ws, createCommand as Vf, HISTORIC_TAG as Kc, createEditor as ib, UNDO_COMMAND as Wf, REDO_COMMAND as Hf, CLEAR_EDITOR_COMMAND as sb } from "lexical";
import { addClassNamesToElement as Wn, removeClassNamesFromElement as ua, $findMatchingParent as De, $dfsIterator as Gf, $dfs as bi, mergeRegister as Ve, registerNestedElementResolver as Jf, $unwrapNode as Ka, IS_APPLE as Hs } from "@lexical/utils";
import { useLexicalNodeSelection as ob } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Rt } from "fast-equals";
import Ki from "quill-delta";
import { useLexicalComposerContext as ce } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as ab, copyToClipboard as cb } from "@lexical/clipboard";
import { TreeView as lb } from "@lexical/react/LexicalTreeView";
import * as ub from "react-dom";
import { createPortal as Cn } from "react-dom";
import { LexicalComposer as Yf } from "@lexical/react/LexicalComposer";
import { ContentEditable as Xf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Qf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Zf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as ep } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as db } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as fb, createDOMRange as pb, createRectsFromDOMRange as hb } from "@lexical/selection";
import { autoUpdate as gb, computePosition as mb, shift as yb, flip as bb } from "@floating-ui/dom";
import { $generateNodesFromDOM as kb } from "@lexical/html";
import { AutoFocusPlugin as Tb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as xb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as tp, LexicalCollaboration as _b } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Cb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as Sb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as vb, $isRootTextContentEmpty as Mb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Eb } from "@lexical/yjs";
import { Array as Cu, Map as Su, YArrayEvent as Ab } from "yjs";
const da = (e) => We(oi(e)), Pb = {
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
function rp(e) {
  return Pb[e];
}
const I = " ", Gs = "​", zt = I, Bc = `${I}|`, Ut = "p", Qi = "+", np = "-", Js = "chapter", Ba = "verse", vu = "invalid", Nb = "text-spacing", wb = "formatted-font", Ob = "marker-", ip = "external-usj-mutation", sp = "selection-change", Zr = "cursor-change", ja = "annotation-change", Zi = "delta-change", op = "marker-settle", qb = [
  ip,
  sp,
  Zr,
  ja,
  Zi
], En = "zmsc-s", ri = "zmsc-e", Rb = [En, ri], $b = [
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
  En,
  ri
], ap = 1, jc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Ib = jc.filter((e) => e !== "sid" && e !== "eid");
class er extends ks {
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
    return new er(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return lp().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && ($b.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: ap
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function cp(e) {
  return Rb.includes(e);
}
function lp(e, t, r, n, i) {
  return We(new er(e, t, r, n, void 0, i));
}
function He(e) {
  return e instanceof er;
}
const Vc = "f", Lb = [
  // Footnote
  Vc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Rs(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Db = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], up = 1;
class Ae extends nr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Vc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Rs(t) === "crossref" ? np : Qi), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Ae(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => Fb(t) ? {
        conversion: Ub,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Wc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Lb.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Rs(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Rs(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Rs(this.getMarker()))), { element: r };
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
      version: up
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
function Ub(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Wc(t, r, n) };
}
function Wc(e, t, r, n, i) {
  return We(new Ae(e, t, r, n, i));
}
function Fb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ae.isValidMarker(t) && e.classList.contains(Ae.getType());
}
function j(e) {
  return e instanceof Ae;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var y;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(y || (y = {}));
const Va = {
  id: {
    category: k.FileIdentification,
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: k.FileIdentification,
    type: y.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: k.Headers,
    type: y.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: k.Remarks,
    type: y.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: k.Remarks,
    type: y.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: k.Remarks,
    type: y.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: k.Introduction,
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: k.Introduction,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: k.Introduction,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: k.Introduction,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: k.Introduction,
    type: y.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: k.Introduction,
    type: y.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: k.DivisionMarks,
    type: y.Paragraph,
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
    type: y.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: k.DivisionMarks,
    type: y.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: k.DivisionMarks,
    type: y.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: k.DivisionMarks,
    type: y.Paragraph,
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
    type: y.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: k.DivisionMarks,
    type: y.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: k.DivisionMarks,
    type: y.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: k.Paragraphs,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: k.Paragraphs,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: k.Poetry,
    type: y.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: k.Poetry,
    type: y.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: k.Poetry,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: k.TitlesHeadings,
    type: y.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: k.Lists,
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Paragraph,
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
    type: y.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: k.Lists,
    type: y.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: k.Footnotes,
    type: y.Note,
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
    type: y.Note,
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
    type: y.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: k.Footnotes,
    type: y.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: k.Footnotes,
    type: y.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: k.Footnotes,
    type: y.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: k.Footnotes,
    type: y.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: k.Footnotes,
    type: y.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: k.Footnotes,
    type: y.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: k.Footnotes,
    type: y.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: k.Footnotes,
    type: y.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: k.Footnotes,
    type: y.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: k.Footnotes,
    type: y.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: k.CrossReferences,
    type: y.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: k.CrossReferences,
    type: y.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: k.CrossReferences,
    type: y.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: k.CrossReferences,
    type: y.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: k.CrossReferences,
    type: y.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: k.CrossReferences,
    type: y.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: k.CrossReferences,
    type: y.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: k.CrossReferences,
    type: y.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: k.CrossReferences,
    type: y.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: k.CrossReferences,
    type: y.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: k.CrossReferences,
    type: y.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: k.SpecialText,
    type: y.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: k.SpecialText,
    type: y.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: k.SpecialText,
    type: y.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: k.SpecialText,
    type: y.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: k.SpecialText,
    type: y.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: k.SpecialText,
    type: y.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: k.SpecialText,
    type: y.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: k.SpecialText,
    type: y.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: k.SpecialText,
    type: y.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: k.SpecialText,
    type: y.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: k.SpecialText,
    type: y.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: k.SpecialText,
    type: y.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: k.SpecialText,
    type: y.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: k.SpecialText,
    type: y.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: k.SpecialText,
    type: y.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: k.CharacterStyling,
    type: y.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: k.Breaks,
    type: y.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, mn = {
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
}, Mu = {
  p: { children: mn },
  q: { children: mn },
  q1: { children: mn },
  q2: { children: mn },
  q3: { children: mn },
  q4: { children: mn },
  b: { children: mn },
  qm: {
    children: {
      Paragraphs: { add: ["p"], remove: [] }
    }
  },
  c: {
    type: y.Paragraph,
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
    type: y.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: k.SpecialFeatures,
    type: y.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: k.SpecialFeatures,
    type: y.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: k.SpecialFeatures,
    type: y.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function hr(e) {
  const t = Object.hasOwn(Va, e) ? Va[e] : void 0, r = Object.hasOwn(Mu, e) ? Mu[e] : void 0;
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
const dp = "v", fp = "c", yn = "fig", Eu = "tr", Wa = "esb", pp = "esbe", Au = "periph", Pu = "alt", Nu = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, zb = {
  "": "start",
  c: "center",
  r: "end"
};
function wu(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Ou(e) {
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
function Bb(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Gs && s + 1 < e.length && Ou(e[s + 1]) || (Ou(o) ? (r || (i = t.length, t += o), r = !0) : Kb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
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
function Vb(e, t) {
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
const Wb = /^(?:qt[1-5]?|ts)-[se]$/;
function Hc(e) {
  return Wb.test(e) || cp(e);
}
function fa(e, t) {
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
function Hb(e, t, r) {
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
      const h = e.indexOf("\\", i), b = h === -1 ? e.length : h;
      a(Bb(e.slice(i, b))), i = b;
      continue;
    }
    const c = i, { name: l, next: u } = Vb(e, i + 1);
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
    if (l === dp) {
      const { word: h, next: b } = fa(e, i);
      i = b, n.push({ kind: "verse", number: h });
      continue;
    }
    if (l === fp) {
      const { word: h, next: b } = fa(e, i);
      i = b, s = void 0, n.push({ kind: "chapter", number: h });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, g = t(p)?.type;
    if (g === y.Note || g === void 0 && Ae.isValidMarker(l)) {
      const { word: h, next: b } = fa(e, i);
      i = b, s = l, n.push({ kind: "note", marker: l, caller: h || "+" });
      continue;
    }
    if (g === y.Milestone || g === void 0 && Hc(l)) {
      const h = tk(e, c, l, i);
      if (h)
        n.push(h.token), h.ejectedText && o(h.ejectedText), i = h.next;
      else {
        const b = e.indexOf("\\", i), x = b === -1 ? e.length : b;
        o(e.slice(c, x)), i = x;
      }
      continue;
    }
    g === y.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : g === y.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Ys(p) ? (d(), Ys(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Wa || l === pp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const qu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Ys(e) {
  return Object.hasOwn(qu, e) ? qu[e] : void 0;
}
function Gb(e) {
  return Ys(e) !== void 0;
}
const Jb = /([-\w]+)\s*=\s*"(.*?)"/g, Yb = /[\s\u200B]*[\n\r][\s\u200B]*/g, hp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Ao(e) {
  return hp[e];
}
const Xb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Qb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function es(e, t, r = hp[t]) {
  const n = e.replace(Yb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Jb)];
  if (s.length > 0) {
    if (!Qb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Xb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Po(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Zb(e) {
  const t = Cr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function ek(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = es(e.slice(n + 1, i), r, Po(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function tk(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = es(s.slice(o + 1), r, Po(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = ek(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function dr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", I);
}
function jr(e) {
  return e.content || (e.content = []), e.content;
}
function Cr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? jr(u) : d ? jr(d) : r;
  let p = !1;
  const g = () => {
    if (s)
      return o.length > a ? jr(o[o.length - 1].object) : jr(s);
    if (o.length > 0)
      return jr(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: Ut, content: [] }, f().push(i);
    }
    return jr(i);
  }, h = (te) => {
    const P = g();
    typeof te == "string" && typeof P[P.length - 1] == "string" ? P[P.length - 1] = P[P.length - 1] + te : P.push(te);
  }, b = (te) => {
    for (let P = te; P < o.length; P += 1) {
      const Y = o[P].object;
      Y.closed = "false";
    }
  }, x = () => {
    b(0), o.length = 0;
  }, T = (te) => {
    s && (o.length > a && (b(a), o.length = a), a = 0, te || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, A = (te, P, Y) => {
    x();
    const [, le, V, Se] = Y, mt = {
      type: "table:cell",
      marker: Se ? P.slice(0, P.indexOf("-")) : P,
      align: zb[le],
      content: []
    };
    Se && (mt.colspan = String(Number(Se) + 1 - Number(V))), jr(te).push(mt), i = mt;
  }, S = (te) => {
    u && (te || (u.closed = "false"), u = void 0);
  }, D = () => {
    d = void 0;
  };
  let _, w = "", $;
  const G = () => {
    w && h(dr(w)), w = "";
  }, Q = (te = !1) => {
    _?.type === "sidebar" ? w = "" : te && w.endsWith(`
`) && (w = w.slice(0, -1)), _ = void 0, G();
  }, Ee = () => {
    if (!$)
      return;
    const te = { type: "char", marker: $.marker, content: [] };
    $.value && (te.content = [dr($.value)]), g().push(te), o.push({ object: te }), $ = void 0;
  }, re = (te, P) => {
    p = !1, v(), x(), T(!1), i = { type: "para", marker: te, content: [] }, P && (i.content = [dr(P)]), f().push(i);
  }, qe = () => {
    $ && (re($.marker, $.value), $ = void 0);
  };
  let ke;
  const sr = (te) => {
    if (!ke)
      return;
    let { value: P } = ke;
    ke = void 0, te && P.endsWith(`
`) && (P = P.slice(0, -1));
    const Y = P.indexOf("|"), le = Y >= 0 ? es(P.slice(Y + 1), Au) : void 0, V = Y >= 0 ? P.slice(0, Y) : P, Se = Y >= 0 && (!le || !!V && !!le[Pu]), mt = Se ? void 0 : le, jt = Se ? P : V, yt = {
      type: "periph",
      ...jt ? { [Pu]: dr(jt) } : {},
      ...mt
    };
    yt.content = [], f().push(yt), d = yt, i = void 0;
  };
  let Re;
  const fn = () => {
    if (Re) {
      if (Re.shape === "para")
        re(yn, Re.value);
      else {
        const te = { type: "char", marker: yn, content: [] };
        Re.value && (te.content = [dr(Re.value)]), g().push(te), o.push({ object: te });
      }
      Re = void 0;
    }
  }, Er = Hb(e, t?.getMarker ?? hr, n);
  for (let te = 0; te < Er.length; te++) {
    const P = Er[te];
    if ($) {
      if (P.kind === "text") {
        $.value += P.text;
        continue;
      }
      if ($.shape === "char" && P.kind === "end" && P.marker.replace(/^\+/, "") === $.marker) {
        if ($.value.trim() === "") {
          g().push({ type: "char", marker: $.marker, content: [] }), $ = void 0, Q();
          continue;
        }
        Object.assign($.target, {
          [$.attrName]: dr($.value.trim())
        });
        const Y = $.marker;
        if ($ = void 0, Y === "ca") {
          const le = Er[te + 1];
          le?.kind === "text" && /^[\s\u200B]*$/.test(le.text) && te++;
        }
        continue;
      }
      if ($.shape === "para" && (P.kind === "para" || P.kind === "chapter")) {
        const Y = $.value.replace(/[\s\u200B]+$/, "");
        Y === "" ? (re($.marker), $ = void 0) : (Object.assign($.target, { [$.attrName]: dr(Y) }), $ = void 0);
      } else {
        _ = void 0, (P.kind === "para" || P.kind === "chapter") && $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), $.shape === "para" ? qe() : Ee(), te--;
        continue;
      }
    }
    if (ke) {
      if (P.kind === "text" || P.kind === "optbreak") {
        ke.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      sr(P.kind === "para" || P.kind === "chapter"), te--;
      continue;
    }
    if (Re) {
      if (P.kind === "text" || P.kind === "optbreak") {
        Re.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      if (P.kind === "end" && P.marker.replace(/^\+/, "") === yn) {
        const Y = Re.value.indexOf("|"), le = Y >= 0 ? es(Re.value.slice(Y + 1), yn) : void 0;
        if (le) {
          const V = {};
          for (const [jt, yt] of Object.entries(le))
            V[jt === "src" ? "file" : jt] = yt;
          const Se = {
            type: "figure",
            marker: yn,
            ...V
          }, mt = Re.value.slice(0, Y);
          mt && (Se.content = [dr(mt)]), h(Se), Re = void 0;
          continue;
        }
      }
      fn(), te--;
      continue;
    }
    if (_)
      if (P.kind === "text") {
        if (P.text.includes(`
`) && /^[\s\u200B]*$/.test(P.text)) {
          w += P.text;
          continue;
        }
        Q();
      } else if (P.kind === "charOpen" || P.kind === "para") {
        const Y = P.kind === "para" || !P.isNested ? Ys(P.marker) : void 0;
        if (Y && Y.targetTypes.includes(_.type)) {
          w = "", $ = {
            target: _,
            attrName: Y.attrName,
            marker: P.marker,
            shape: Y.shape,
            value: ""
          };
          continue;
        }
        Q(P.kind === "para");
      } else
        Q(P.kind === "chapter");
    if (!s && !n && (P.kind === "charOpen" && !P.isNested && P.marker === yn || P.kind === "para" && P.marker === yn)) {
      x(), Re = { shape: P.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (P.kind) {
      case "text": {
        let Y = P.text;
        if (!s && Y.endsWith(`
`)) {
          const le = Er[te + 1];
          (le === void 0 || le.kind === "para" || le.kind === "chapter") && (Y = Y.slice(0, -1));
        }
        Y && h(dr(Y));
        break;
      }
      case "para": {
        const Y = !s && !n;
        if (Y && P.marker === Eu) {
          x(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Eu, content: [] }, jr(c).push(l), i = l, p = !1;
          break;
        }
        if (Y && l) {
          const le = Nu.exec(P.marker);
          if (le && wu(le)) {
            A(l, P.marker, le);
            break;
          }
        }
        if (v(), !n && P.marker === Wa) {
          x(), T(!1), S(!1);
          const le = {
            type: "sidebar",
            marker: Wa,
            content: []
          };
          f().push(le), u = le, i = void 0, _ = u, p = !1;
          break;
        }
        if (P.marker === pp && u) {
          x(), T(!1), S(!0), i = void 0;
          break;
        }
        if (!n && P.marker === Au) {
          x(), T(!1), S(!1), D(), ke = { value: "" }, i = void 0, p = !1;
          break;
        }
        re(P.marker);
        break;
      }
      case "verse": {
        T(!1);
        const Y = { type: "verse", marker: dp, number: P.number };
        h(Y), _ = Y;
        break;
      }
      case "chapter": {
        x(), T(!1), v(), S(!1), D(), i = void 0;
        const Y = {
          type: "chapter",
          marker: fp,
          number: P.number
        };
        r.push(Y), _ = Y, p = !0;
        break;
      }
      case "note": {
        T(!1);
        const Y = g();
        s = { type: "note", marker: P.marker, caller: P.caller, content: [] }, a = o.length, Y.push(s), _ = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !P.isNested) {
          const V = Nu.exec(P.marker);
          if (V && wu(V)) {
            A(l, P.marker, V);
            break;
          }
        }
        if (!P.isNested) {
          const V = s ? a : 0;
          b(V), o.length = V;
        }
        const Y = g(), le = { type: "char", marker: P.marker, content: [] };
        Y.push(le), o.push({ object: le });
        break;
      }
      case "end": {
        const Y = P.marker.replace(/^\+/, ""), le = s ? a : 0, V = o.findLastIndex((Se, mt) => mt >= le && Se.object.marker === Y);
        V >= 0 ? (rk(o[V].object), b(V + 1), o.length = V) : s && s.marker === Y ? T(!0) : (b(le), o.length = le, h({ type: "unmatched", marker: `${P.marker}*` }));
        break;
      }
      case "milestone":
        h({ type: "ms", marker: P.marker, ...P.attributes });
        break;
      case "optbreak":
        h({ type: "optbreak" });
        break;
    }
  }
  if (ke && sr(!0), Re && fn(), $)
    if ($.shape === "para") {
      const te = $.value.replace(/[\s\u200B]+$/, "");
      te === "" ? re($.marker) : Object.assign($.target, { [$.attrName]: dr(te) }), $ = void 0;
    } else
      $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), Ee();
  x(), T(!1), S(!1);
  const At = (te) => {
    for (const P of te)
      typeof P != "string" && P.content && (At(P.content), P.content.length === 0 && delete P.content);
  };
  return At(r), r;
}
function rk(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = es(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const An = Co("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), en = Co("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ae = Co("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Sr = "marker-trailing-space", gp = 1, nk = "marker", Gc = Co("isGutterMarker", {
  parse: (e) => e === !0
});
class Rr extends ks {
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
    return new Rr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => ak(t) ? {
        conversion: ik,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Nr().updateFromJSON(t);
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
    return r && In(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: gp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function ik(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Nr(t, r) };
}
function Nr(e, t) {
  return We(new Rr(e, t));
}
function sk(e) {
  return Tt(Nr(nk, e), Gc, !0);
}
function ok(e) {
  return Kt(e) && ne(e, Gc);
}
function ak(e) {
  return e?.tagName === "span";
}
function Kt(e) {
  return e instanceof Rr;
}
function mp(e) {
  return e?.type === Rr.getType();
}
const Jr = "internal-comment", ck = [Jr], yp = Object.freeze({}), Ha = Object.freeze({}), Ga = Object.freeze({}), Ja = Object.freeze({}), Ya = Object.freeze({}), lk = 1, Hn = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map();
class et extends nr {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = yp, r, n, i, s, o) {
    super(o), this.__typedIDs = $s(t), this.__typedOnClicks = pa(r), this.__typedOnRemoves = ha(n), this.__typedOnMouseEnters = ga(i), this.__typedOnMouseLeaves = ma(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = $s(t.__typedIDs), n = pa(t.__typedOnClicks), i = ha(t.__typedOnRemoves), s = ga(t.__typedOnMouseEnters), o = ma(t.__typedOnMouseLeaves);
    return new et(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return ck.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return ts().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: lk
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Wn(n, bn(t.theme.typedMark, a)), c.length > 1 && Wn(n, bn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Wn(n, bn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = bn(n.theme.typedMark, s), d = bn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Wn(r, u) : l === 0 && ua(r, u), c === 1 ? l === 2 && Wn(r, d) : l === 1 && ua(r, d));
      const f = new Set(o), p = new Set(a);
      for (const g of o)
        p.has(g) || ua(r, bn("annotationId", g));
      for (const g of a)
        f.has(g) || Wn(r, bn("annotationId", g));
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
    return be(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = $s(r.__typedIDs);
    r.__typedIDs = $s(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Xs(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = pa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return be(t) ? Hn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ha(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return be(t) ? Ri.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = ga(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return be(t) ? Gn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ma(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return be(t) ? Jn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!be(a))
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
    if (!be(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Xs(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = ts(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Hn.delete(r.getKey()), Ri.delete(r.getKey()), Gn.delete(r.getKey()), Jn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Hn.get(this.getKey());
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
    const n = Gn.get(this.getKey());
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ha) {
      const t = Hn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Hn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Hn.set(this.getKey(), this.__typedOnClicks);
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
    const i = Vr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Vr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Ha) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Ga) {
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
    const i = Vr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Vr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Ga) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Ja) {
      const t = Gn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Gn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Gn.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = Vr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Vr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Ja) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ya) {
      const t = Jn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Jn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Jn.set(this.getKey(), this.__typedOnMouseLeaves);
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
    const i = Vr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Vr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Ya) {
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
    const i = uk(t, r);
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
    for (; be(t) && $u(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; be(r) && $u(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = dk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = fk(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = pk(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = hk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function $s(e = yp) {
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
function pa(e) {
  if (!e || e === Ha)
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
function ha(e) {
  if (!e || e === Ga)
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
function ga(e) {
  if (!e || e === Ja)
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
function ma(e) {
  if (!e || e === Ya)
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
function Vr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Ru(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function uk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function $u(e, t) {
  const r = Ru(e), n = Ru(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function hk(e, t) {
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
function bn(e, t) {
  return `${e}-${t}`;
}
function Iu(e) {
  return `external-${e}`;
}
function ts(e, t, r, n, i) {
  return We(new et(e, t, r, n, i));
}
function be(e) {
  return e instanceof et;
}
function bp(e) {
  return e?.type === et.getType();
}
function Xs(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function kp(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let g, h;
  for (let b = 0; b < u; b++) {
    const x = a[b];
    if (F(h) && h.isParentOf(x))
      continue;
    const T = b === 0, v = b === u - 1;
    let A = null;
    if (E(x)) {
      const S = x.getTextContentSize(), D = T ? f : 0, _ = v ? p : S;
      if (D === 0 && _ === 0)
        continue;
      const w = x.splitText(D, _);
      A = w.length > 1 && (w.length === 3 || T && !v || _ === S) ? w[1] : w[0];
    } else {
      if (be(x))
        continue;
      F(x) && x.isInline() && (A = x);
    }
    if (A !== null) {
      if (A && A.is(g))
        continue;
      const S = A.getParent();
      (S == null || !S.is(g)) && (h = void 0), g = S, h === void 0 && (h = ts(), h.addID(t, r, n, i, s, o), A.insertBefore(h)), h.append(A);
    } else
      g = void 0, h = void 0;
  }
  t === Jr && F(h) && (d ? h.selectStart() : h.selectEnd());
}
function gk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (be(n))
      return n.getTypedIDs()[t];
    if (E(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (be(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const mk = ["type", "marker", "content"], Xa = "unknown", Tp = 1, yk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Ln extends nr {
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
    return new Ln(r, n, i, s);
  }
  static importDOM() {
    return {
      [Xa]: (t) => kk(t) ? {
        conversion: bk,
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
    return yk.has(this.getTag());
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
    const t = document.createElement(Xa);
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
      version: Tp
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
    if (Lc(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function bk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Jc(t, r) };
}
function Jc(e, t, r) {
  return We(new Ln(e, t, r));
}
function kk(e) {
  return e?.tagName.toLowerCase() === Xa;
}
function Ue(e) {
  return e instanceof Ln;
}
const xp = 1, Tk = "attribute-run";
function ya(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class $r extends nr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new $r(r, n);
  }
  static importJSON(t) {
    return _p(t.runKind).updateFromJSON(t);
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
    t.classList.add(Tk);
    const r = ya(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = ya(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = ya(this.__runKind);
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
      version: xp
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
function _p(e) {
  return We(new $r(e));
}
function Le(e) {
  return e instanceof $r;
}
const rs = "id", Cp = 1, xk = [
  "type",
  "marker",
  "code",
  "content"
];
class Bt extends nr {
  __marker = rs;
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
    return new Bt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Sp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Ny(t);
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
      version: Cp
    };
  }
}
function Sp(e, t) {
  return We(new Bt(e, t));
}
function Ce(e) {
  return e instanceof Bt;
}
function Yc(e) {
  return e?.type === Bt.getType();
}
const Qs = "c", vp = 1, _k = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class qt extends nr {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Qs, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new qt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Mp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Js, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: vp
    };
  }
}
function Mp(e, t, r, n, i) {
  return We(new qt(e, t, r, n, i));
}
function Ne(e) {
  return e instanceof qt;
}
function Ck(e) {
  return e?.type === qt.getType();
}
const Ep = [
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
], Ap = [
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
], Sk = [
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
  ...Ep,
  ...Ap
], Pp = 1, vk = ["type", "marker", "content"];
class me extends nr {
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
    return t !== void 0 && (Sk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Ep.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Ap.includes(t);
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
      span: (t) => Ek(t) ? {
        conversion: Mk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return wr().updateFromJSON(t);
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
    return Lu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Lu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Pp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = wr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Lu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Mk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: wr(t) };
}
function wr(e, t) {
  return We(new me(e, t));
}
function Ek(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return me.isValidMarker(t) && e.classList.contains(me.getType());
}
function U(e) {
  return e instanceof me;
}
function Ak(e) {
  return e?.type === me.getType();
}
const Np = 1, Pk = "c", wp = "span";
class vr extends ks {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Pk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new vr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Op(t) ? {
        conversion: Nk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Xc().updateFromJSON(t);
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
    const t = document.createElement(wp);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Js, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Js, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Ft(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Np
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
function Nk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Xc(t) };
}
function Xc(e, t, r, n, i, s) {
  return We(new vr(e, t, r, n, i, s));
}
function Op(e) {
  return e ? e.classList.contains(Js) && e.tagName.toLowerCase() === wp : !1;
}
function _s(e) {
  return e instanceof vr;
}
function wk(e) {
  return e?.type === vr.getType();
}
const qp = 1;
class tn extends Dc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new tn(t.__key);
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
      version: qp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Qt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Qt() {
  return We(new tn());
}
function br(e) {
  return e instanceof tn;
}
function No(e) {
  return e?.type === tn.getType();
}
const Ok = [
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
], Rp = 1, qk = ["type", "marker", "content"];
class rt extends Dc {
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
    return new rt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ok.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Rk,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ci().updateFromJSON(t);
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
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Rp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ci(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Rk(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ci(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ci(e, t) {
  return We(new rt(e, t));
}
function oe(e) {
  return e instanceof rt;
}
function Qc(e) {
  return e?.type === rt.getType();
}
const Zs = "v", $p = 1, $k = [
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
    super(r ?? t, a), this.__marker = Zs, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Ip().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ba, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: $p
    };
  }
}
function Ip(e, t, r, n, i, s) {
  return We(new pt(e, t, r, n, i, s));
}
function we(e) {
  return e instanceof pt;
}
function Lp(e) {
  return e?.type === pt.getType();
}
const Ik = "​", li = Ik;
var Du;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Du || (Du = {}));
var Uu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Uu || (Uu = {}));
function Lk() {
  return pe(li);
}
function Dk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(li, ""));
}
function Cs(e) {
  return e.length > 0 && e.includes(li) && e.replaceAll(li, "") === "";
}
function Zc(e) {
  return E(e) && Cs(e.getTextContent());
}
function Dp(e) {
  return Ck(e) || wk(e);
}
function Ye(e) {
  return Ne(e) || _s(e);
}
function Up(e, t) {
  return e.find((r) => Ye(r) && r.getNumber() === t.toString());
}
function Uk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ye(r));
}
function Fu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Fp(e) {
  if (!e)
    return;
  if (Ye(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Ye(t); )
    t = t.getPreviousSibling();
  if (t && Ye(t))
    return t;
}
function tr(e) {
  return De(e, j) ?? void 0;
}
function Fk(e) {
  return Ce(e) || Ne(e) || U(e) || _s(e) || br(e) || He(e) || oe(e) || j(e) || we(e) || Ue(e);
}
function el(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function zp(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Fe(e) {
  return tt(e) || Ce(e);
}
function tt(e) {
  return oe(e) || br(e);
}
function zk(e) {
  return Qc(e) || No(e);
}
function eo(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Pn(e, t) {
  const r = ne(t, An), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Kk(e, t) {
  const r = F(e) ? e : e.getParent(), n = F(t) ? t : t.getParent(), i = r && n ? Fy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Bk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function ui(e) {
  return e?.type === je.getType();
}
function jk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Vk(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Oe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function st(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Kp(e, t, r) {
  const n = Oe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Ft(e, t) {
  let r = Oe(e);
  return t && (r += `${I}${t}`), r += " ", r;
}
function Wk(e) {
  const t = e[xs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Bp(e) {
  return Vp(e) || ui(e) && Wk(e) === "attribute" ? "" : ui(e) && e.text !== I ? e.text : Ak(e) ? e.children.map((t) => Bp(t)).join("") : "";
}
function Hk(e) {
  return e.map((r) => Bp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function wt(e) {
  return " " + e + I;
}
function tl(e) {
  const t = [];
  for (const r of e) {
    if (!U(r))
      continue;
    const n = jp(r);
    n !== zt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function jp(e) {
  return O(e) || Ir(e) || E(e) && ne(e, ae) === "attribute" ? "" : E(e) ? e.getTextContent() : F(e) ? e.getChildren().map((t) => jp(t)).join("") : "";
}
function Ir(e) {
  return Kt(e) && e.getTextType() === "marker";
}
function ct(e) {
  return O(e) || Ir(e);
}
function Vp(e) {
  return sl(e) || mp(e) && e.textType === "marker";
}
function zu(e, t) {
  Gk(e, t), e.setMarker(t);
}
function Gk(e, t) {
  const r = e.getMarker(), n = Oe(r), i = Oe(r, !0), s = st(r), o = st(r, !0), a = me.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!ct(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (Ir(c)) {
        const f = l.startsWith(Oe("", !0));
        c.setTextContent(u ? Oe(t, f) : st(t, f));
      }
    }
  });
}
function ze(e, t = wy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Pe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Wp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function rl(e) {
  if (!N(e))
    return Ku(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !F(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return Ku(e) ?? t ?? void 0;
  } catch (n) {
    if (Wp(n))
      return t ?? void 0;
    throw n;
  }
}
function Jk(e, t) {
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
function Hp(e) {
  return !!e && e.includes("-");
}
function Gp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Ku(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function il(e) {
  if (!e)
    return !1;
  if (Ts(e) || O(e) || Ir(e) || Le(e) || Kt(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = ne(e, ae);
    if (t === Sr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === I || Cs(r))
      return !0;
  }
  return !1;
}
function wo() {
  const e = pe(I);
  return Tt(e, ae, Sr), e.setMode("token"), e;
}
function Yk(e) {
  const t = e.getTextContent();
  t.startsWith(I) || e.setTextContent(I + t);
}
function cn(e) {
  return E(e) && ne(e, ae) === Sr;
}
function Jp(e) {
  const t = e.getFirstChild();
  if (!ct(t) || t === null || cn(t.getNextSibling()))
    return !1;
  const r = q();
  if (!N(r) || !r.isCollapsed())
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
    if (!il(s)) {
      if (be(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (E(s) && s.getType() === je.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function Oo(e) {
  let t = e.getParent();
  for (; t && be(t); )
    t = t.getParent();
  return t;
}
function Xk(e, t) {
  return ki(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Qk(e, t) {
  const r = Oo(e);
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
function Yp(e, t) {
  const r = ki(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (il(n))
    return Yp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || eo(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || eo(o.node, n.getKey()))
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
class Mr extends je {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(xn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new Mr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || xn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = xn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = xn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = xn(r.__marker, r.__markerSyntax, t), r;
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
  return We(new Mr(e, t, void 0, r));
}
function O(e) {
  return e instanceof Mr;
}
function sl(e) {
  return e?.type === Mr.getType();
}
function ln(e) {
  return e.getTextContent() === xn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function nT(e) {
  e.setTextContent(xn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function xn(e, t, r = !1) {
  return t === "closing" ? st(e, r) : t === "selfClosing" ? st("") : Oe(e, r);
}
const iT = /* @__PURE__ */ new Set(["closed"]);
function fr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !iT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Xp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Qp(e) {
  const t = Object.keys(e).filter((n) => !Ib.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Zp(e, t, r, n) {
  return Xp(
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
function Wi(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function sT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Wi(e) === void 0 && eh(e) === void 0;
}
function eh(e) {
  return e.getChildren().find((t) => E(t) && ne(t, ae) === "attribute");
}
function ns(e, t) {
  return Ss(e.getNextSibling(), t);
}
const oT = /^[ \u00A0]+$/;
function ol(e) {
  if (ln(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Oe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && oT.test(r.slice(t.length));
}
function Ss(e, t) {
  let r, n, i, s;
  return Le(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  ol(e) && (r = e, e = e.getNextSibling()), E(e) && ne(e, ae) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && ln(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function is(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!O(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (E(n) && n.getTextContent() === wt(e.getCaller()))
    return n;
}
function th(e) {
  const t = is(e);
  return t ? Ss(t.getNextSibling(), "cat") : {};
}
function qo(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || O(t)) && ne(t, ae) !== "attribute")
    return t;
}
function rh(e) {
  const t = qo(e);
  return t ? Ss(t.getNextSibling(), "ca") : {};
}
function nh(e) {
  const t = qo(e);
  if (!t)
    return;
  const r = Ss(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function ih(e) {
  const t = nh(e);
  return t ? Ss(t.getNextSibling(), "cp") : {};
}
function sh(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && ne(n, ae) === "attribute" || U(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Le(n)))
        return;
    }
}
function Ro(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Le(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  ol(s) && (t = s, s = s.getNextSibling()), E(s) && ne(s, ae) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && ln(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function al(e) {
  return U(Oo(e));
}
function Qa(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? al(t) : t.getChildren().some((i) => U(i) && i.getMarker() === r) ? !0 : void 0;
}
function aT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = Qa(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function $o(e) {
  return E(e) && e.getType() === je.getType() && ne(e, ae) !== "attribute";
}
function cl(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Qa(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? Qa(r, t) === !0 ? "spacer" : void 0 : $o(r) ? r.getTextContent().startsWith(I) ? void 0 : "prefix" : "spacer";
}
function cT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && cl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function oh(e, t) {
  const r = q();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function ah(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = cl(t, e);
    if (r !== void 0 && !oh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(I + n.getTextContent());
      } else
        t.insertAfter(pe(I));
  });
}
function ch(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && cl(t, e) !== void 0 && oh(t, e)) : !1;
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
function lh(e, t) {
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
function uh(e, t, r) {
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
        opening: `\\${lh(t, n[dT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: fr(yT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [fT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + fr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [pT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: fr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: fr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const St = { wantsRun: !1, valueText: void 0 }, Lr = {};
function ba(e, t) {
  if (t === "va")
    return e;
  const r = ns(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function ll(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed())
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
function Io(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = q();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function bT(e) {
  return Le(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && ne(e, ae) === "attribute";
}
function kT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!E(e) || ne(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function ka(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (we(t))
      return t;
    if (!bT(t))
      return;
  }
}
function Bu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => we(t),
    ownerOf: (t) => {
      if (Le(t))
        return t.getRunKind() === e ? ka(t) : void 0;
      const r = t.getParent();
      return Le(r) ? r.getRunKind() === e ? ka(r) : void 0 : kT(t) === e ? ka(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!we(t))
        return St;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? St : { wantsRun: !0, valueText: I + r };
    },
    scanPieces: (t) => we(t) ? ns(ba(t, e), e) : Lr,
    graceSite: (t, r) => we(t) ? !r.opener && !r.closer ? ll(ba(t, e)) : Io(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => we(t) ? ba(t, e) : void 0
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
  expectedPieces: () => St,
  scanPieces: () => Lr,
  graceSite: (e) => U(e) && ch(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, xT = {
  kind: "char",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (!E(e) || ne(e, ae) !== "attribute")
      return;
    const t = e.getParent();
    return U(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || Wi(e) === void 0)
      return St;
    const t = fr(e.getUnknownAttributes() ?? {}, Ao(e.getMarker()));
    return t === "" ? St : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => U(e) ? { value: eh(e) } : Lr,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const r = Wi(e);
    if (!r)
      return !1;
    const n = q();
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
    insertRunBefore: (e) => U(e) ? Wi(e) : void 0
  }
};
function dh(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!E(e) || ne(e, ae) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function _T(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = is(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!dh(n))
        return;
    }
}
const CT = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (Le(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Le(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : dh(e) ? _T(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return St;
    const t = e.getCategory();
    return t === void 0 ? St : { wantsRun: !0, valueText: I + t };
  },
  scanPieces: (e) => j(e) ? th(e) : Lr,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = is(e);
      return r !== void 0 && ll(r);
    }
    return Io(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => j(e) ? is(e) : void 0
  }
};
function ST(e) {
  return Le(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && ne(e, ae) === "attribute";
}
function vT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!E(e) || ne(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function MT(e) {
  const t = e.getParent();
  if (!Ne(t))
    return;
  const r = qo(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!ST(n))
        return;
    }
}
function ju(e) {
  const t = (r) => Ne(r) ? e === "ca" ? qo(r) : nh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ne(r),
    ownerOf: (r) => {
      if (Le(r))
        return r.getRunKind() === e && Ne(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Le(n) ? n.getRunKind() === e && Ne(n.getParent()) ? n.getParent() ?? void 0 : void 0 : vT(r) === e ? MT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ne(r))
        return St;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? St : { wantsRun: !0, valueText: I + n };
    },
    scanPieces: (r) => Ne(r) ? e === "ca" ? rh(r) : ih(r) : Lr,
    graceSite: (r, n) => {
      if (!Ne(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && ll(i);
      }
      return Io(n);
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
function fh(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && ne(e, ae) === "attribute";
}
function ET(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (He(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!fh(t))
      return;
  }
}
const AT = {
  kind: "milestone",
  ownerPredicate: (e) => He(e),
  ownerOf: (e) => {
    const t = Le(e) ? e.getRunKind() === "milestone" ? e : void 0 : Le(e.getParent()) ? e.getParent() : fh(e) ? e : void 0;
    if (!t || Le(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Le(t) ? He(r) ? r : void 0 : ET(t);
  },
  expectedPieces: (e) => {
    if (!He(e))
      return St;
    const t = Zp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = fr(t, Po(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : I + r };
  },
  scanPieces: (e) => {
    if (!He(e))
      return Lr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Ro(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!He(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = q();
      if (!N(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return Io(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => He(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, PT = uh("optbreak", void 0, void 0).opening, NT = {
  kind: "optbreak",
  ownerPredicate: (e) => Ue(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ue(t) || t.getTag() !== "optbreak"))
      return E(e) || Kt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: PT }),
  scanPieces: (e) => Ue(e) ? { value: e.getFirstChild() ?? void 0 } : Lr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, wT = {
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
  expectedPieces: () => St,
  scanPieces: () => Lr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, OT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => St,
  scanPieces: () => Lr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, ss = [
  TT,
  xT,
  Bu("va"),
  Bu("vp"),
  CT,
  ju("ca"),
  ju("cp"),
  AT,
  NT,
  wT,
  OT
], qT = new Map(ss.map((e) => [e.kind, e]));
function Nn(e) {
  const t = qT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function wn(e) {
  for (const t of ss) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function ph(e) {
  return wn(e) !== void 0;
}
const to = "unmatched", hh = 2;
function Hi(e) {
  return `\\${e}`;
}
class Dr extends je {
  __marker;
  constructor(t = "", r) {
    super(Hi(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Dr(r, n);
  }
  static importDOM() {
    return {
      [to]: (t) => $T(t) ? {
        conversion: RT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ul().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Hi(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Hi(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(vu), r.title = Vu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Vu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(to);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(vu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: hh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function gh(e) {
  return e.getTextContent() === Hi(e.getMarker());
}
function Vu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function RT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: ul(t) };
}
function ul(e) {
  return We(new Dr(e));
}
function $T(e) {
  return e?.tagName.toLowerCase() === to;
}
function un(e) {
  return e instanceof Dr;
}
const mh = "table", Za = "immutable-table", yh = 1, IT = ["type", "marker", "content"];
class Dn extends nr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Za;
  }
  static clone(t) {
    return new Dn(t.__unknownAttributes, t.__key);
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
      type: Za,
      ...t !== void 0 && { unknownAttributes: t },
      version: yh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function LT(e) {
  return We(new Dn(e));
}
function bh(e) {
  return e instanceof Dn;
}
function DT(e) {
  return e?.type === Za;
}
const kh = "table:row", Wu = "immutable-table-row", Th = 1, ec = "tr", UT = ["type", "marker", "content"];
class Ti extends nr {
  __marker;
  __unknownAttributes;
  constructor(t = ec, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Wu;
  }
  static clone(t) {
    return new Ti(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return FT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? ec).setUnknownAttributes(t.unknownAttributes);
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
      type: Wu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Th
    };
  }
}
function FT(e, t) {
  return We(new Ti(e, t));
}
const xh = "table:cell", Hu = "immutable-table-cell", _h = 1, tc = "tc1", zT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function KT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class xi extends nr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = tc, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Hu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new xi(r, n, i, s, o);
  }
  static importJSON(t) {
    return BT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? tc).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
      type: Hu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: _h
    };
  }
}
function BT(e, t, r, n) {
  return We(new xi(e, t, r, n));
}
function vs(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function rr(e, t) {
  const r = vs(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function os(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function jT(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function VT(e) {
  return os(e) ? void 0 : { closed: "false" };
}
function WT(e, t, r, n) {
  const i = t.getMarker(), s = al(t), o = jT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    $o(a) && !a.getTextContent().startsWith(I) && a.setTextContent(I + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function On(e) {
  return De(e, U) ?? void 0;
}
function HT(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function rc(e) {
  const t = Ch(e);
  return e.getChildren().every((r) => O(r) || t && ne(r, ae) === "attribute" || E(r) && r.getTextContent().replaceAll(I, "") === "");
}
function Ch(e) {
  return os(e);
}
function GT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? fr(r, Ao(e.getMarker())) : "";
  n !== "" && t.insertAfter(pe(n)), e.remove();
}
function JT(e, t) {
  if (os(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", al(e)));
}
function YT(e, t) {
  return U(e) && !os(e) && !os(t);
}
function XT(e, t, r) {
  rc(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && $o(n) && !n.getTextContent().startsWith(I) && n.setTextContent(I + n.getTextContent()), e.append(...t);
}
function QT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Ch(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = O(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, ae) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = YT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      XT(e, o, n);
    else {
      const l = wr(t.getMarker(), VT(t));
      WT(l, t, o, n), e.insertAfter(l), rc(l) ? l.remove() : c = l;
    }
  i && !a && JT(t, n), rc(t) && GT(t, c);
}
function di(e, t) {
  let r = e.getParent();
  for (; U(r); )
    QT(e, r, t), r = e.getParent();
}
function Lo(e) {
  if (E(e) && !O(e)) {
    const t = e.getTextContent().startsWith(I) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (F(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      Lo(t);
      return;
    }
    e.selectEnd();
  }
}
const ni = /* @__PURE__ */ new WeakMap();
function ZT(e, t) {
  return ni.set(e, t), () => {
    ni.get(e) === t && ni.delete(e);
  };
}
function Gu(e) {
  return ni.get(e);
}
function ex(e) {
  return ni.get(ai())?.has(e.getKey()) ?? !1;
}
function tx(e) {
  ni.get(ai())?.add(e.getKey());
}
function rx(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function nc(e) {
  return !!(e.opener || e.value || e.closer);
}
function Ju(e) {
  return /^\s/.test(e);
}
function dl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Ju(t) || !Ju(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Do(e, t, r) {
  return r.wantsRun ? dl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : rx(t);
}
function nx(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return dl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Sh(e, t) {
  return !nc(e.scanPieces(t));
}
function Ms(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Do(e, n, r))
    return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || eo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function ix(e, t, r, n) {
  return !r.wantsRun || nc(n) || zy(Zi) ? !1 : ai().getEditorState().read(() => {
    const i = ie(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : nc(e.scanPieces(i));
  });
}
function sx(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Yu(e) {
  const t = pe(e);
  return Tt(t, ae, "attribute"), t;
}
function ox(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = _p(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function ax(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Yu(n.valueText));
    return;
  }
  const l = ox(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : E(d) ? dl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Yu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function as(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Do(e, i, n) && !ex(t)) {
    if (ix(e, t, n, i)) {
      tx(t);
      return;
    }
    if (!Ms(e, t)) {
      if (!n.wantsRun) {
        sx(i);
        return;
      }
      ax(e, t, i, n);
    }
  }
}
function cx(e, t, r) {
  as(e, t), t.isAttached() && Ms(e, t) && r.add(t.getKey());
}
function vh(e) {
  if (!E(e))
    return !1;
  if (O(e) || we(e) || un(e))
    return !0;
  const t = ne(e, ae);
  return t === "attribute" || t === Sr;
}
function fl(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && ln(e) && U(e.getParent())) : !1;
}
function lx() {
  const e = q();
  return N(e) ? fl(e.focus.getNode(), e.focus.offset) : !1;
}
function Mh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && vh(t) ? t : void 0;
}
function ux(e) {
  const t = Mh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function dx(e) {
  const t = Mh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Xu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Qu(e, t) {
  e.set(t.key, t.offset, t.type);
}
function fx(e, t) {
  let r = dx(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!vh(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Zu(e, t) {
  const r = fx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function pl(e) {
  if (e.isCollapsed()) {
    const a = ux(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Xu(r), Xu(n)], s = Zu(r, "next"), o = Zu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Qu(r, i[0]), Qu(n, i[1]), !1) : !0;
}
const ro = "verse-block", Eh = 1, px = "verse-block";
class _i extends nr {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return ro;
  }
  static clone(t) {
    return new _i(t.__number, t.__key);
  }
  static importJSON(t) {
    return hx().updateFromJSON(t);
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
    return Gp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(px), ed(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && ed(r, this.__number), !1;
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
      type: ro,
      number: this.getNumber(),
      version: Eh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function ed(e, t) {
  const { start: r, end: n } = Gp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), td(e, "data-verse-start", i ? r : NaN), td(e, "data-verse-end", i ? n : NaN);
}
function td(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function hx(e) {
  return We(new _i(e));
}
function cs(e) {
  return e instanceof _i;
}
function gx(e) {
  return e?.type === ro;
}
const mx = [
  Bt,
  vr,
  qt,
  pt,
  me,
  Ae,
  er,
  Mr,
  Ln,
  Rr,
  Dr,
  rt,
  tn,
  Dn,
  Ti,
  xi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  $r,
  {
    replace: Dc,
    with: () => Qt(),
    withKlass: tn
  }
], no = {
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
}, yx = {
  paragraph: y.Paragraph,
  character: y.Character,
  note: y.Note,
  milestone: y.Milestone
};
function bx(e) {
  if (!e)
    return hr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: hr(r)?.category ?? k.Uncategorized,
      type: yx[n.styleType] ?? y.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: hr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function rd(e, t, r) {
  const n = {
    type: mr,
    version: gr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return No(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Ah = "v", Ph = 1, kx = "verse-selected";
class Mt extends ks {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Ah, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-verse";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Mt(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => _x(t) ? {
        conversion: xx,
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ba, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && In(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ba, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Ft(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Gs + this.getNumber() + Gs
    );
    return M(Tx, { nodeKey: this.getKey(), text: t });
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
      version: Ph
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Wp(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Tx({ nodeKey: e, text: t }) {
  const [r] = ob(e);
  return M("span", { className: r ? kx : void 0, children: t });
}
function xx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: hl(t) };
}
function hl(e, t, r, n, i, s) {
  return We(new Mt(e, t, r, n, i, s));
}
function _x(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Ah;
}
function Un(e) {
  return e instanceof Mt;
}
function Cx(e) {
  return e?.type === Mt.getType();
}
function ge(e) {
  return we(e) || Un(e);
}
function Nh(e) {
  return Lp(e) || Cx(e);
}
function Sx(e) {
  return vx(e).find((t) => oe(t));
}
function vx(e) {
  return e.some(cs) ? e.flatMap((t) => cs(t) ? t.getChildren() : t) : e;
}
function Uo(e) {
  return F(e) ? cs(e) ? e.getChildren().flatMap(Uo) : e.getChildren() : [];
}
function Mx(e, t) {
  return Uo(e).find((i) => ge(i) && nl(t, i.getNumber()));
}
function Ex(e, t) {
  return t === 0 ? Sx(e) : e.map((r) => Mx(r, t)).filter((r) => r)[0];
}
function io(e) {
  return Uo(e).find((r) => ge(r));
}
function wh(e, t) {
  if (!F(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ge(i))
      return i;
  }
}
function Ax(e) {
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
  for (; r && !Ye(r); ) {
    const n = io(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function ic(e) {
  return Uo(e).findLast((t) => ge(t));
}
function Px(e) {
  if (!we(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Nx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && F(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function wx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Nx(t, e, r);
  if (E(e)) {
    const n = Px(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function nd(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Ox(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return nd(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return wx(e, t) ? { verseNum: n } : nd(e);
}
function qx(e) {
  return Fk(e) || Un(e);
}
function gl(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(I) && e.setTextContent(`${t} `);
  }
}
function Oh(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function sc(e, t) {
  return e.getEditorState().read(() => !ie(t));
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
      let s = id(i);
      for (; s && !Ye(s); ) {
        const o = io(s);
        if (o) {
          n = o;
          break;
        }
        s = id(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = io(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Ye(s))
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
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && F(i) && (n = wh(i, r.getIndexWithinParent())), !n && i) {
      let o = sd(i);
      for (; o && !Ye(o); ) {
        const a = ic(o);
        if (a) {
          n = a;
          break;
        }
        o = sd(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ye(s); ) {
      const o = ic(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function id(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function sd(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function ml(e, t) {
  if (F(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ge(n))
      return n;
    const i = wh(e, t.anchor.offset);
    if (i)
      return i;
    const s = io(e);
    if (s)
      return s;
  }
  return yl(e);
}
function yl(e) {
  if (!e || Ye(e))
    return;
  if (ge(e))
    return e;
  let t = Fu(e);
  for (; t; ) {
    if (Ye(t))
      return;
    if (ge(t))
      return t;
    const r = ic(t);
    if (r)
      return r;
    t = Fu(t);
  }
}
const Ix = ["style"], Lx = ["style", "code"], so = ["style", "cid"], Dx = [
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
], zx = ["style", "caller", "category", "contents"], Kx = ["tag", "marker", "contents"], Bx = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], ls = `
`;
function jx(e, t) {
  const r = ie(e);
  if (!Ot(r))
    return;
  const n = qh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function qh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Gf();
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
      if (Or(l) || Ot(l))
        return n;
      Fe(l) && (a = l);
    }
    if (Fe(l) && (i.includes(l) || i.push(l)), Rh(l, t)) {
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
function od(e, t, r = "delta-doc") {
  if (e.length < 2 || !Hx(e[0]) || !Wx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Vx(n, r)?.getKey());
}
function Vx(e, t = "delta-doc") {
  const r = Gf();
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
    if (Fe(a) && (i.includes(a) || i.push(a)), Rh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = bl(a, t);
    if (Or(a) && l > 0 && e >= n && e < n + l || Ot(a) && n === e)
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
  return e ? t ? !eo(t.node, e.getKey()) : !0 : !1;
}
function Or(e) {
  return E(e) && !Ot(e);
}
function Ot(e) {
  return Ye(e) || ge(e) || He(e) || j(e) || Ue(e) || un(e);
}
function Hr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Wx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Bx.includes(t);
}
function Hx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Rh(e, t) {
  return j(e) || Ue(e) ? !0 : t === "apply" && F(e) && Ot(e);
}
function $h(e) {
  const t = e.getParent();
  return ct(e) && oe(t) && t.getFirstChild() === e;
}
function oc(e) {
  const t = e.getParent();
  return t !== null && De(t, Le) !== null;
}
function Gx(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === zt && t.getChildrenSize() === 1;
}
function Jx(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === wt(t.getCaller());
}
function Yx(e) {
  return !ph(e) && bl(e, "delta-doc") === e.getTextContentSize();
}
function bl(e, t) {
  if (Ot(e))
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
    (Zc(e) || $h(e) || ne(e, ae) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, ae) === "attribute" || oc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Bc) || Gx(e) || Jx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function ac(e, t) {
  const r = { insert: e.__text }, n = ne(e, en);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Ih(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function ad(e) {
  const t = new Ki();
  return e.isEmpty() || e.read(() => {
    const r = Ke();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && br(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Xx();
    for (const s of i)
      t.push(s);
  }), t;
}
function kl(e, t) {
  const r = [], n = bi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...cd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...cd(c, n.length, n, i, s, o, a));
  return r;
}
function Xx() {
  return kl();
}
function cd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Qx(e, a, n), Zx(e, a, i, s, o), e_(e, t, r, i, o, s, a), Ye(e) && a.push(i_(e)), ge(e) && a.push(o_(e)), He(e) && a.push(a_(e)), un(e) && a.push(c_(e)), r_(e, a, s), t_(e, a, s), f_(c, s), a;
}
function Qx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Ce(n) ? t.push(n_(n)) : oe(n) ? t.push(s_(n)) : br(n) && t.push({ insert: ls });
  }
  Fe(e) && (r.includes(e) || r.push(e));
}
function Zx(e, t, r, n, i) {
  if (!E(e) || we(e) || un(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = tr(e) !== void 0;
  if (O(e) && (o || $h(e) || oc(e) || ph(e)) || ne(e, ae) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Cs(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && O(c) && c === s.getFirstChild() && a === wt(s.getCaller()))
    return;
  const l = U(s) ? s : void 0, u = l?.getFirstChild();
  o && l && O(u) && c === u && a.startsWith(I) && (a = a.slice(1));
  const d = a.startsWith(Bc) || ne(e, ae) === "attribute" || oc(e), f = !!l && a === zt && l.getChildrenSize() === 1, p = Fo(e, n), g = p ? r.filter((x) => p.children.includes(x)) : r, h = ac(e, g);
  if (h.insert = a, p) {
    if (!a || a === I || d)
      return;
    p.contentsOps?.push(h);
  } else
    f || d || t.push(h);
  const b = a !== "" && !f && !(d && l);
  if (r.length > 0 && b)
    for (const x of r)
      i.add(x);
}
function e_(e, t, r, n, i, s, o) {
  U(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (fi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = u_(c), u = Fo(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function t_(e, t, r) {
  if (!j(e))
    return;
  const n = l_(e), i = Fo(e, r), s = {
    node: e,
    children: bi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function r_(e, t, r) {
  if (!Ue(e))
    return;
  const n = d_(e), i = Fo(e, r), s = {
    node: e,
    children: bi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function dn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function n_(e) {
  const t = { style: rs, code: e.__code };
  return dn(t, e), { insert: ls, attributes: { book: t } };
}
function i_(e) {
  const t = { style: Qs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), dn(t, e), { insert: { chapter: t } };
}
function s_(e) {
  const t = { style: e.__marker };
  return dn(t, e), { insert: ls, attributes: { para: t } };
}
function o_(e) {
  const t = { style: Zs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), dn(t, e), { insert: { verse: t } };
}
function a_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), dn(t, e), { insert: { milestone: t } };
}
function c_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function l_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), dn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, en);
  return n && (r.attributes = { segment: n }), r;
}
function u_(e) {
  const t = { insert: "" }, r = Ih([e]);
  return r && (t.attributes = { char: r }), t;
}
function d_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), dn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Fo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function f_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    fi(t[r].node, e) && t.splice(r, 1);
}
function Ih(e) {
  if (e.length === 0)
    return;
  const t = e.map(p_);
  return t.length === 1 ? t[0] : t;
}
function p_(e) {
  const t = { style: e.__marker }, r = ne(e, An);
  return r && (t.cid = r), dn(t, e), t;
}
const Lh = 1;
class Zt extends ks {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Qi, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Zt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => g_(t) ? {
        conversion: h_,
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
    return r && In(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => m_(t, n), (l) => y_(t, n, s, l), () => b_(t, n), () => k_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return M("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Qi && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === np && i ? (
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
      version: Lh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function h_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: Tl(t, r) };
}
function Tl(e, t, r) {
  return We(new Zt(e, t, r));
}
function g_(e) {
  return e ? e.classList.contains(Zt.getType()) : !1;
}
function Et(e) {
  return e instanceof Zt;
}
function m_(e, t) {
  return e.getEditorState().read(() => {
    const r = ie(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function y_(e, t, r, n) {
  e.update(() => {
    const i = ie(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ie(r);
    if (!Et(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function b_(e, t) {
  return e.getEditorState().read(() => {
    const r = ie(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return kl(r);
  });
}
function k_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of bi())
      if (j(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const T_ = [
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
function zo(e) {
  if (Dh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = ld(t), [s, o] = ld(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = ud(n, i), [s, o] = ud(s, o);
  const a = Xi();
  return a.anchor = Fa(n.getKey(), i, dd(n)), a.focus = Fa(s.getKey(), o, dd(s)), a;
}
function xl() {
  if (Dh())
    return;
  const e = q();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = oo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = oo(i, s);
  return { start: n, end: o };
}
function ld(e) {
  if (Oy(e)) {
    const t = $f(e.jsonPath);
    let r = Ke();
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
  if (qy(e) || Ry(e)) {
    const t = $i(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (F(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && F(r) ? [r, 0] : [void 0, void 0];
  }
  if ($y(e)) {
    const t = $i(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (F(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && F(r) ? [r, 0] : [void 0, void 0];
  }
  if (Iy(e)) {
    const t = $i(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = Ta(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (Ly(e)) {
    const t = $i(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = Ta(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Dy(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = $i(e.jsonPath);
    if (!n || !F(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = Ta(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Uy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function ud(e, t) {
  if (!Ir(e))
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
function dd(e) {
  return F(e) ? "element" : "text";
}
function Ta(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Ir(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function $i(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = $f(r);
  let i = Ke();
  for (const s of n) {
    if (!i || !F(i))
      return;
    const o = ki(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function oo(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = __(e), i = n ? gn(kn(n)) : gn(kn(e));
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
  if (be(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (E(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return oo(n, s);
    }
    const i = Oo(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return oo(i, o);
    }
  }
  if (F(e)) {
    const r = e.getChildAtIndex(t);
    if (Ir(r)) {
      const i = r.getTextContent().endsWith("*"), s = gn(kn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Yp(e, t);
    return n.type === "text" ? {
      jsonPath: gn([...kn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: gn(kn(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = Qk(e, t);
    if (r)
      return {
        jsonPath: gn([
          ...kn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: gn(kn(e)), offset: t };
}
function __(e) {
  const t = e.getParent();
  if (!t || !F(t))
    return;
  const r = C_(e);
  return r && !Fe(r) && !E(r) && !be(r) ? r : t;
}
function C_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!il(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function kn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Oo(r);
    if (!n)
      break;
    const i = Xk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Dh() {
  for (let e = Ke().getFirstChild(); e; e = e.getNextSibling())
    if (cs(e))
      return !0;
  return !1;
}
function S_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Uh(e, t, r, n, i, s, o) {
  if (!Ae.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? zo(r) : q();
  if (!N(a))
    return;
  const c = E_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? S_(e, s), u = Fh(e, l, c, i, s, void 0, void 0);
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
  if (!E(r) || !U(r.getParent()))
    return;
  if (O(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return O(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function M_(e, t, r) {
  const n = _l(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Bk(t), pl(t);
  const i = v_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(U)?.selectEnd();
}
function Yn(e, t, r) {
  const n = wr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(Nr("marker", Oe(e)));
  const s = t === "" ? zt : i ? I + t : t;
  return n.append(pe(s)), n;
}
function E_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Yn("fr", f, n)), !e.isCollapsed()) {
        const p = pd(e);
        p.length > 0 && o.push(Yn("fq", p, n));
      }
      o.push(Yn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Yn("xo", f, n)), !e.isCollapsed()) {
        const p = pd(e);
        p.length > 0 && o.push(Yn("xq", p, n));
      }
      o.push(Yn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Fh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : _l(n?.noteMode), l = Wc(e, t, c);
  s && Tt(l, en, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = Nr("marker", Oe(e) + " "), a || (f = Nr("marker", st(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = pe(wt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const g = () => wo(), h = r.flatMap(P_(g));
    if (t === "")
      l.append(...h);
    else {
      const b = tl(r);
      let x = () => {
      };
      i?.noteCallerOnClick && (x = i.noteCallerOnClick), p = Tl(l.__caller, b, x), l.append(p, g(), ...h);
    }
  }
  return f && l.append(f), l;
}
function fd(e) {
  if (typeof e == "string") {
    const i = ie(e);
    return j(i) ? i : void 0;
  }
  const t = bi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => j(i.node))[e]?.node;
  if (j(n))
    return n;
}
function A_(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Un(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else
    e.getChildren().reverse().find(U)?.selectEnd();
}
function P_(e) {
  return (t) => Kt(t) ? [t] : [t, e()];
}
function N_(e) {
  const t = e.getParent();
  return t !== null && De(t, j) !== null;
}
function pd(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Uc(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || Et(c) || N_(c)) && !O(c) && !un(c) && ne(c, ae) !== "attribute") {
      if (ge(c)) {
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
const Cl = [
  Zt,
  Mt,
  ...mx
], w_ = [
  _i,
  ...Cl
], O_ = $n((e, t) => {
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
function q_() {
  const [e, t] = de(void 0), [r, n] = de(), i = Z(null), s = he((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = gb(l, c, () => {
      mb(l, c, {
        placement: "bottom-start",
        middleware: [yb(), bb()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = he(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return B(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function R_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = q_();
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
const $_ = My(O_);
function zh({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = R_({ isOpen: e, floatingBoxRef: r }), s = Be(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Cn(
    M($_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Kh = qf(void 0);
function Sl() {
  const e = Rf(Kh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function I_(e, t) {
  const [r, n] = de(0), [i, s] = de(-1), o = Be(() => e ?? [], [e]), a = {
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
function L_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = I_(t, r);
  return M(Kh.Provider, { value: i, children: M("div", { ...n, children: e }) });
}
const Bh = $n(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Sl(), u = he((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = he((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return M("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function D_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = Sl(), o = Be(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Be(() => {
    const c = o(s);
    return t ? Ey.map(c, (l, u) => Ay(l) && l.type === Bh && l.props.index === void 0 ? Py(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return B(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), M("div", { ref: n, role: "menu", ...r, children: a });
}
const U_ = (e, t, r) => zs(e, r).toLowerCase().includes(t.toLowerCase()), hd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", zs = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function F_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? hd(r[0]) : "") : (u = n || (r.length > 0 ? hd(r[0]) : ""), d = (g, h) => U_(g, h, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((g) => {
    try {
      return d(g, t);
    } catch (h) {
      return console.warn("Error filtering item:", g, h), !1;
    }
  }).sort((g, h) => {
    const b = (v) => (p.has(v) || p.set(v, zs(v, f).toLowerCase()), p.get(v) ?? ""), x = a ? zs(g, f) : b(g), T = a ? zs(h, f) : b(h);
    for (const v of c)
      switch (v) {
        case "exact":
          if (x === l && T !== l)
            return -1;
          if (T === l && x !== l)
            return 1;
          break;
        case "startsWith":
          if (x.startsWith(l) && !T.startsWith(l))
            return -1;
          if (T.startsWith(l) && !x.startsWith(l))
            return 1;
          break;
        case "contains": {
          const A = x.indexOf(l), S = T.indexOf(l);
          if (A !== -1 && S === -1)
            return -1;
          if (S !== -1 && A === -1)
            return 1;
          if (A !== -1 && S !== -1)
            return A - S;
          break;
        }
      }
    return x.localeCompare(T);
  });
}
const xa = {
  Root: L_,
  Options: D_,
  Option: Bh
};
function z_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Be(() => F_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function K_() {
  const { moveUp: e, moveDown: t, select: r } = Sl();
  return Be(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const B_ = () => {
  const e = K_(), [t] = ce();
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
    return t.registerCommand(qr, r, ve);
  }, [t, e]);
};
function j_() {
  return B_(), null;
}
const V_ = ["Shift", "Control", "Alt", "Meta"];
function jh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ce(), u = s !== void 0, [d, f] = de(""), p = u ? s ?? "" : d, g = z_({ query: p, items: t, filterBy: "name" }), h = (b) => {
    n?.(), r ? r(b) : b.action(l);
  };
  return B(() => {
    a?.(p, g);
  }, [a, p, g]), B(() => l.registerCommand(qr, (b) => {
    if (u || c?.includes(b.key) || V_.includes(b.key))
      return !1;
    if ((b.ctrlKey || b.metaKey || b.altKey) && !b.getModifierState("AltGraph"))
      return n?.(), !1;
    const T = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((v) => v.slice(0, -1));
      }
    }[b.key];
    return T ? (b.stopPropagation(), b.preventDefault(), T(), !0) : b.key.length === 1 ? (b.stopPropagation(), b.preventDefault(), b.key !== o && f((v) => v + b.key), !0) : !1;
  }, ve), [l, u, p, o, n, c]), _e(xa.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: g, onSelectOption: (b) => h(b), children: [!u && M("input", { value: p, type: "text", disabled: !0 }), M(j_, {}), M(xa.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (b) => b.map((T, v) => _e(xa.Option, { index: v, children: [M("span", { className: "label", children: T.label ?? T.name }), M("span", { className: "description", children: T.description })] }, T.name)) })] });
}
function W_({ trigger: e, items: t }) {
  const [r] = ce(), [n, i] = de(!1), s = he((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return B(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), B(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = q();
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = q();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && M(zh, { isOpen: n, children: ({ placement: o }) => M(jh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function H_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Be(() => {
    if (!t || !e)
      return;
    const i = hr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = hr(o), { action: c } = r(o, a);
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
function Gi(e, t) {
  return `${e}:${t}`;
}
function G_(e, t) {
  B(() => {
    if (!e.hasNodes([et]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ve(Jf(e, et, (n) => ts(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], g = a[l]?.[d], h = c[l]?.[d];
          i.addID(l, d, f, p, g, h);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(et, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ie(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : be(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!et.isReservedType(c))
              for (const u of l) {
                let d = t.get(Gi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Gi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Gi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const J_ = $n(function({ logger: t }, r) {
  const [n] = ce(), i = Be(() => /* @__PURE__ */ new Map(), []);
  G_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Gi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = ie(u);
        be(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Xs(d));
      }
  };
  return Ic(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (et.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = zo(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), kp(p, a, c, l, u, d, f);
      }, { tag: ja });
    },
    removeAnnotation(o, a) {
      if (et.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Gi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: ja });
    }
  })), null;
}), Y_ = [];
function X_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = Y_, onChange: n }) {
  const [i] = ce();
  return bs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Lf) && !u.has(op) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = Q_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function Q_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ki();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ie(i), o = s !== null && tr(s) !== void 0;
    if (t.size === 1 && E(s) && !o && Yx(s)) {
      const a = qh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = ie(i);
          return new Ki([E(d) ? ac(d) : { insert: "" }]);
        }), l = new Ki([ac(s)]), u = new Ki(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = ad(r), c = ad(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const vl = "formatted", Vh = "unformatted", Wh = "paragraph-structure", Ml = "standard", Hh = "block-verse", Z_ = {
  [vl]: "Formatted",
  [Vh]: "Unformatted",
  [Wh]: "Paragraph Structure",
  [Ml]: "Standard",
  [Hh]: "Block Verse"
};
function Fn(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let El, Al;
function eC(e) {
  const t = Pl(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  El = e, Al = t;
}
eC(vl);
const oN = () => El, Ko = () => Al;
function Pl(e) {
  let t;
  switch (e ?? El) {
    case vl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Vh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Wh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Ml:
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
function aN(e) {
  if (!e)
    return;
  const t = gd(e);
  return Object.keys(Z_).find((r) => Rt(gd(Pl(r)), t));
}
const tC = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function gd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...tC, ...t };
}
function Bo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function rC(e) {
  if (e)
    return us(e) ? Mt : e.markerMode === "editable" ? pt : Mt;
}
function us(e) {
  return e?.verseLayout === "block";
}
function nC(e) {
  const t = [], r = e ?? Al;
  return r && (t.push(`${Ob}${r.markerMode}`), r.hasSpacing && t.push(Nb), r.isFormattedFont && t.push(wb)), t;
}
function iC(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += sC(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), aC(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += cC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), uC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function sC(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), oC(t, e.retain, e.attributes, r, n)), e.retain);
}
function oC(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ke();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Or(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), p = d - f, g = Math.min(s, p);
        if (g > 0) {
          let h = u;
          const b = f > 0, x = g < d - f;
          if (b && x) {
            const [, T] = u.splitText(f);
            [h] = T.splitText(g);
          } else b ? [, h] = u.splitText(f) : x && ([h] = u.splitText(g));
          if (rn(r)) {
            const T = h.getParent();
            if (U(T)) {
              const v = r.char;
              let A;
              Array.isArray(v) ? a >= 0 && a <= v.length - 1 && (A = v[a]) : a === 0 && (A = v);
              const S = A ? Pn(A, T) : !1;
              if (S && Array.isArray(v) && v.length > 1) {
                const D = pe("");
                h.replace(D);
                const _ = typeof r.segment == "string" ? r.segment : void 0, w = Ci(v.slice(1), n, h, _);
                let $ = D;
                for (const G of w)
                  $.insertAfter(G), $ = G;
                D.remove(), $t(r, h);
              } else if (S)
                $t(r, h);
              else {
                h.remove();
                const D = md(h, r, n, i);
                if (D && D.length > 0) {
                  let _ = T;
                  for (const w of D)
                    _.insertAfter(w), _ = w;
                }
              }
            } else {
              const v = pe("");
              h.replace(v);
              const A = md(h, r, n, i);
              if (A && A.length > 0) {
                let S = v;
                for (const D of A)
                  S.insertAfter(D), S = D;
                v.remove();
              } else
                v.replace(h);
            }
          } else
            $t(r, h);
          s -= g;
        }
      }
      o += d;
    } else if (Ot(u))
      e <= o && o < e + t && s > 0 && (yd(u, r), s -= 1), o += 1;
    else if (U(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (rn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            cc(u, p.style), typeof p.cid == "string" && Tt(u, An, () => p.cid);
            const g = ze(p, so);
            g && Object.keys(g).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...g
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || kC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Ka(u), !0;
        }
      }
      d && Ka(u), a -= 1;
    } else if (Fe(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!br(u))
          yd(u, r);
        else if (Nl(r)) {
          const p = Yh(r.para, n);
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
function md(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Ci(t.char, r, e, i), o = s.find(U);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), $t(t, e);
    return;
  }
  const a = {};
  eg.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), $t(t, e), s;
}
function Gh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(Oe(t))) : Kt(r) && r.getTextType() === "marker" && r.setTextContent(Oe(t) + I);
}
function cc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = U(e.getParent()), i = e.getFirstChild();
  Kt(i) && i.getTextType() === "marker" && i.getTextContent() === Oe(r, n) && i.setTextContent(Oe(t, n));
  const s = e.getLastChild();
  Kt(s) && s.getTextType() === "marker" && s.getTextContent() === st(r, n) && s.setTextContent(st(t, n));
}
function yd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && U(e) && rn(t)) {
      const i = lc(n);
      if (cc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Tt(e, An, () => o);
      }
      const s = ze(i, so);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ye(e) || ge(e) || He(e) || j(e) || Ue(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Ce(e) || oe(e) || U(e)) && (r === "style" && oe(e) ? Gh(e, n) : r === "style" && U(e) ? cc(e, n) : r === "code" && Ce(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Tt(e, en, () => n));
  }
}
function aC(e, t, r) {
  if (t <= 0)
    return;
  const n = Ke();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Or(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Ot(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Fe(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Fe(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Qt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && tt(p)) {
            let g = i + 1;
            const h = p.getChildren();
            for (const x of h) {
              if (s <= 0)
                break;
              const T = i;
              if (i = g, o(x)) {
                i = T;
                break;
              }
              Or(x) ? g += x.getTextContentSize() : Ot(x) && (g += 1), i = T;
            }
            const b = p.getChildren();
            for (const x of b)
              x.remove(), a.append(x);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Qt(), !0);
        } else oe(a) ? a.replace(Qt(), !0) : a.remove();
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
function cC(e, t, r, n, i) {
  if (t === ls)
    return bd(e, r, n, i);
  if (t.endsWith(ls) && !Nl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (rn(r))
        throw new Error("Text + LF should not have char attributes");
      o += ao(e, s, r, i);
    }
    return o += bd(e + o, r, n, i), o;
  } else return rn(r) ? lC(e, t, r, n, i) : ao(e, t, r, i);
}
function lC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = pe(t === "" ? zt : t);
  $t(r, s);
  let o;
  {
    let b = function(x) {
      if (Or(x)) {
        const T = x.getTextContentSize();
        if (e >= h && e < h + T) {
          const v = x.getParent();
          return U(v) && (o = v), !0;
        }
        h += T;
      } else if (Ot(x))
        h += 1;
      else if (U(x)) {
        const T = x.getChildren();
        for (const v of T)
          if (b(v))
            return !0;
      } else if (F(x)) {
        const T = x.getChildren();
        for (const v of T)
          if (b(v))
            return !0;
        Fe(x) && (h += 1);
      }
      return !1;
    };
    const g = Ke();
    let h = 0;
    b(g);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const g = a[0];
      g && Pn(g, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Pn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Ci(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(U);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), ao(e, t, void 0, i);
  const f = {};
  for (const [g, h] of Object.entries(r))
    g !== "char" && g !== "segment" && typeof h == "string" && (f[g] = h);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const g of u)
    if (!Jh(e, g, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), ao(e, t, void 0, i));
}
function ao(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ke();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Or(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = pe(t);
        if ($t(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          U(f) && !rn(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Ot(c))
      s += 1;
    else if (U(c)) {
      if (!o && e === s) {
        const d = pe(t);
        $t(r, d);
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
        const d = pe(t);
        return $t(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Fe(c)) {
      if (!o && e === s) {
        const d = pe(t);
        $t(r, d);
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
        const d = pe(t);
        return $t(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = pe(t);
    $t(r, c);
    const l = Qt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Jh(e, t, r) {
  const n = Ke();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Qt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!F(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (tt(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Qt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Or(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (Ot(l))
        i += 1;
      else if (U(l)) {
        if (o(l))
          return !0;
      } else if (Fe(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (br(u) && Fe(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (F(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return F(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Qt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      tt(a) ? br(a) && oe(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !tt(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !tt(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function uC(e, t, r, n, i) {
  let s;
  return Hr("chapter", t) ? s = fC(t.insert.chapter, r) : Hr("verse", t) ? s = pC(t.insert.verse, r) : Hr("ms", t) ? s = hC(t.insert.ms) : Hr("note", t) ? s = Xh(t, r, n, i) : Hr("unknown", t) ? s = Qh(t, r, n, i) : Hr("unmatched", t) && (s = mC(t.insert.unmatched, r)), s ? Jh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function bd(e, t, r, n) {
  let i;
  Nl(t) ? i = Yh(t.para, r) : bC(t) && (i = dC(t.book)), i ??= Qt();
  const s = i, o = oe(s), a = br(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Or(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (oe(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const g = e - c, [h] = g > 0 ? d.splitText(g) : [void 0];
          let b, x = h?.getPreviousSibling();
          for (; x; ) {
            const T = x;
            x = x.getPreviousSibling(), b ? b.insertBefore(T) : s.append(T), b = T;
          }
          return h && s.append(h), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (Ot(d))
      c += 1;
    else if (Fe(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (br(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (oe(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && oe(d) && s)
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
  return u(Ke()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function dC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== rs || !r || !Bt.isValidBookCode(r))
    return;
  const n = ze(e, Lx);
  return Sp(r, n);
}
function Yh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = ze(e, Ix), i = ci(r, n);
  if (!Fn(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), wo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Oe(r) + I;
    i.append(t.hasGutterParaMarkers ? sk(s) : Nr("marker", s));
  }
  return i;
}
function fC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = ze(e, Dx);
  let a;
  if (t.markerMode === "editable")
    a = Mp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Xc(r, c, n, i, s, o);
  }
  return a;
}
function pC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = ze(e, Ux);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Ft(r, n);
    c = Ip(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = hl(n, l, i, s, o, a);
  }
  return c;
}
function hC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = ze(e, Fx);
  return lp(t, r, n, s, i);
}
function Xh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = ze(i.note, zx), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const h of c?.ops ?? [])
    if (typeof h.insert == "string")
      if (rn(h.attributes)) {
        const b = Ci(h.attributes.char, t, pe(h.insert), void 0, Zh(h.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...b);
      } else
        p.push(pe(h.insert));
  return Fh(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Qh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = ze(i, Kx), l = Jc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && gC(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Tt(l, en, () => d), l;
}
function gC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (rn(s.attributes)) {
        const o = pe(s.insert), a = Ci(s.attributes.char, t, o, void 0, Zh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(pe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Hr("unknown", s)) {
        const o = Qh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Hr("note", s)) {
        const o = Xh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function mC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = ul(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Zh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function lc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Ci(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(zt);
  const a = () => {
    o && E(r) && r.getTextContent() !== zt && r.setTextContent(I + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(lc), l = c[0], u = i?.[i.length - 1];
    if (U(u) && Pn(l, u))
      return c.length > 1 ? Ci(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, g) => {
      const h = wr(p.style, ze(p, so));
      if (typeof p.cid == "string" && Tt(h, An, () => p.cid), n && g === c.length - 1 && Tt(h, en, () => n), f)
        if (U(f)) {
          const b = f.getMarker(), x = [];
          Ca(b, x, t, !0), x.forEach((v) => h.append(v)), h.append(f);
          const T = [];
          _a(f, T, t, !0), T.forEach((v) => h.append(v));
        } else
          h.append(f);
      return h;
    }, r);
    return Ca(l.style, d, t, s), _a(d, d, t, s), [d];
  } else {
    const c = lc(e), l = i?.[i.length - 1];
    if (U(l) && Pn(c, l))
      return r && l.append(r), [];
    a();
    const u = wr(c.style, ze(c, so));
    return typeof c.cid == "string" && Tt(u, An, () => c.cid), n && Tt(u, en, () => n), r && u.append(r), Ca(c.style, u, t, s), _a(u, u, t, s), [u];
  }
}
function _a(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && yC(e.getMarker(), t, r, !1, n);
}
function Ca(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = Nr("marker", Oe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function yC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = Nr("marker", n ? st("") : st(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function bC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Nl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function rn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function kC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function $t(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Tt(t, en, () => n);
        continue;
      }
      if (TC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const eg = [
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
function TC(e) {
  return eg.includes(e);
}
function ds(e) {
  return Kt(e) && Ce(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function tg(e) {
  const t = vs(e, 1);
  return t ? { key: t.getKey(), offset: 0, type: "text" } : { key: e.getKey(), offset: 1, type: "element" };
}
function wl(e) {
  if (e.isCollapsed())
    return !1;
  const t = e.getNodes().find(ds);
  if (!t)
    return !1;
  const r = t.getParent();
  if (!Ce(r))
    return !1;
  const n = e.isBackward() ? e.focus : e.anchor, i = tg(r);
  return n.set(i.key, i.offset, i.type), !0;
}
function Ks(e) {
  const t = q();
  if (!N(t))
    return !1;
  if (t.isCollapsed()) {
    const { anchor: r } = t;
    if (r.type === "text") {
      const i = r.getNode();
      if (!(e ? r.offset === 0 : E(i) && r.offset === i.getTextContentSize()))
        return !1;
    }
    const n = e ? zp(t) : el(t);
    return ds(n);
  }
  return wl(t) && t.isCollapsed();
}
function xC(e) {
  const t = e.getTopLevelElement();
  return Ce(t) ? t : null;
}
function _C(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed())
    return !1;
  const r = xC(t.anchor.getNode());
  if (!r || !ds(r.getFirstChild()))
    return !1;
  if (t.modify("extend", e, "lineboundary"), t.isCollapsed())
    return Ks(e) || t.deleteCharacter(e), !0;
  if (t.getNodes().some(ds)) {
    const n = tg(r);
    t.focus.set(n.key, n.offset, n.type);
  }
  return t.isCollapsed() || t.removeText(), !0;
}
function Sa() {
  const e = q();
  return N(e) && wl(e), !1;
}
function CC() {
  const [e] = ce();
  return B(() => e.registerCommand(So, (t) => (SC(t), !1), Mn), [e]), B(() => Ve(
    e.registerCommand(Df, Ks, ve),
    e.registerCommand(Uf, Ks, ve),
    e.registerCommand(za, Ks, ve),
    // Below the boundary refusal above (which still runs first and can refuse outright), and
    // above Lexical's own default DELETE_LINE_COMMAND handling (COMMAND_PRIORITY_EDITOR) — the
    // default is exactly what this replaces for a book line, so it must never run for one.
    e.registerCommand(za, _C, Sn),
    // CRITICAL: other handlers for these commands (StructureKeyboardPlugin's CUT_COMMAND/
    // PASTE_COMMAND, OpaqueBlockGuardPlugin's CUT_COMMAND) are registered at HIGH or CRITICAL
    // too, so this must match the top priority to have any guarantee of running before them —
    // CRITICAL-tier order among plugins otherwise follows mount order, which this plugin does
    // not control. Always returns `false` (never claims the command), so running before or after
    // another CRITICAL handler that also returns `false` changes nothing either way; it only
    // matters relative to a handler that would itself remove the prefix.
    e.registerCommand(vo, Sa, _t),
    e.registerCommand(pr, Sa, _t),
    e.registerCommand(Xr, Sa, _t)
  ), [e]), null;
}
function SC(e) {
  if (vC(e.target))
    return;
  const t = q();
  N(t) && MC(t);
}
function Si(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (ct(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === I && (r++, t = t.getNextSibling());
    else if (ge(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (rr(e, r), !0);
}
function vC(e) {
  if (!Ff(e))
    return !1;
  const t = yi(e);
  if (!ok(t))
    return !1;
  const r = t.getParent();
  return r ? tt(r) ? Si(r) : (rr(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function MC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ie(t.key);
  if (!Fe(r))
    return !1;
  const n = r.getFirstChild();
  return !Ir(n) && !Un(n) ? !1 : Si(r);
}
function EC() {
  const [e] = ce();
  return B(() => {
    const t = (r) => r instanceof KeyboardEvent && !AC(r) || !jo() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ve(
      e.registerCommand(qr, t, ve),
      e.registerCommand(vo, t, ve),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(pr, t, _t),
      e.registerCommand(Xr, t, _t),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Fc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = yi(r.target);
        return !n || !nn(n) ? !1 : (r.preventDefault(), !0);
      }, ve),
      e.registerCommand(Df, t, ve),
      e.registerCommand(Uf, t, ve),
      e.registerCommand(za, t, ve)
    );
  }, [e]), null;
}
function AC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function nn(e) {
  return De(e, (t) => Ue(t) || bh(t)) ?? void 0;
}
function jo() {
  const e = q();
  return N(e) ? nn(e.anchor.getNode()) !== void 0 || nn(e.focus.getNode()) !== void 0 : !1;
}
function PC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function NC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), PC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function wC(e, t, r, n) {
  if (!VC(t) || NC(e, r))
    return !1;
  const i = r === "up" ? $x(t) : Rx(t);
  return i && n.preventDefault(), i;
}
function OC({ viewOptions: e }) {
  const [t] = ce();
  return qC(t, e), null;
}
function qC(e, t) {
  B(() => {
    if (!e.hasNodes([vr, Mt, Ae]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = q();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = kd(o), d = FC(i, Td(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return wC(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = kd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Td(a, n.key) ? l = !c && Cd(i, "next") || !c && $C(i) || BC(i) || !c && s && _d(i, "next") : RC(a, n.key) && (l = !c && Cd(i, "previous") || !c && IC(i) || jC(i, t) || !c && s && _d(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(qr, r, ve);
  }, [e, t]);
}
function kd(e) {
  return e.dir || "ltr";
}
function Td(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function RC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function uc(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = tr(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function $C(e) {
  const t = uc(el(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (rr(t, 0), !0);
}
function IC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = uc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : xd(n);
  }
  if (t.offset === 0) {
    const n = uc(r);
    return n ? xd(n) : !1;
  }
  return !1;
}
function xd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (E(t))
    return t.select(), !0;
  if (F(t)) {
    const i = t.getLastDescendant();
    return E(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const co = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function LC(e) {
  if (co)
    for (const { segment: r } of co.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function DC(e) {
  if (co) {
    let n = 0;
    for (const { index: i } of co.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function rg(e) {
  for (let t = e; t; t = t.getParent())
    if (F(t) && !t.isInline())
      return t;
}
function ng(e) {
  return !!e && O(e) && nn(e) !== void 0;
}
function pi(e) {
  return E(e) && !e.isToken() && !ng(e) && e.getTextContentSize() > 0;
}
function ig(e) {
  return Ts(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || ng(e)) && e.getTextContentSize() > 0 : Mo(e) ? !He(e) : !1;
}
function hi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Vo(e, t, r) {
  for (let n = e; n; ) {
    if (ig(n))
      return n;
    if (F(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? hi(n, t, r);
      continue;
    }
    if (pi(n))
      return n;
    n = hi(n, t, r);
  }
}
function Ol(e, t, r, n, i) {
  return r === "element" && F(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? hi(e, n, i) : r === "text" && ig(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : hi(e, n, i);
}
function va(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Ol(e.node, e.offset, e.kind, "previous", t), n = Vo(r, "previous", t);
  if (!n)
    return e;
  if (pi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function UC(e, t) {
  const r = e.getNode(), n = rg(r);
  if (!n)
    return;
  if (e.type === "text" && pi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return va({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Ol(r, e.offset, e.type, t, n), s = Vo(i, t, n);
  if (!s)
    return;
  if (pi(s)) {
    const c = s.getTextContent(), l = t === "next" ? LC(c) : DC(c);
    return va({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return va({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function sg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = UC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function _d(e, t) {
  return sg(e, t, "collapse");
}
function FC(e, t) {
  return sg(e, t, "extend");
}
function zC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && pi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Ol(n, e.offset, e.type, t, r);
  return Vo(i, t, r) === void 0;
}
function KC(e, t) {
  const r = Ke();
  for (let n = e; n; ) {
    const i = hi(n, t, r), s = i && Vo(i, t, r);
    if (!s)
      return;
    if (n = nn(s), !n)
      return s;
  }
}
function Cd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (nn(n))
    return !1;
  const i = rg(n);
  if (!i || !zC(r, t, i))
    return !1;
  const s = hi(i, t, Ke()), o = s && nn(s);
  if (!o)
    return !1;
  const a = KC(o, t);
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
function Sd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function BC(e) {
  const t = e.anchor.getNode(), r = el(e);
  if (j(r) && !O(r.getFirstChild())) {
    if (Fe(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(tt(i) && Si(i)) && i.selectStart(), !0;
      }
    } else return Kt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Fe(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Sd(r), !0;
  }
  const n = r?.getParent();
  if (Kt(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Sd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function jC(e, t) {
  const r = zp(e);
  if (_s(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && ds(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Ce(o) && !r)
    return !0;
  if (j(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!Un(c) && !Ce(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const u = r.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (Fe(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = De(c, (u) => j(u));
    if (j(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const d = l.getIndexWithinParent();
      return u.select(d, d), !0;
    }
  }
  const a = tr(s);
  if (!a || a.getIsCollapsed())
    return !1;
  if (Et(r)) {
    const c = a.getParent();
    if (!c)
      return !1;
    const l = a.getIndexWithinParent();
    return c.select(l, l), !0;
  }
  return !1;
}
function VC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ge(t) && Mo(t);
}
function WC() {
  const [e] = ce();
  return HC(e), null;
}
function HC(e) {
  B(() => {
    if (!e.hasNodes([me]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ve(
      e.registerNodeTransform(me, YC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(me, aT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(me, ah),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(me, (t) => as(Nn("char"), t)),
      e.registerNodeTransform(je, XC)
    );
  }, [e]);
}
function Ma(e) {
  return e.getChildren().some(O);
}
function GC(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if ($o(n)) {
    const i = n.getTextContent();
    i.startsWith(I) && (i === I ? n.remove() : n.setTextContent(i.slice(I.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function JC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function YC(e) {
  if (!U(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Ma(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ne(e, An), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && Pn({ style: t, cid: r }, i) && Rt(n, i.getUnknownAttributes()))
    if (Ma(i)) {
      if (GC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && Pn({ style: t, cid: r }, s) && Rt(n, s.getUnknownAttributes()) && (Ma(s) ? JC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function XC(e) {
  const t = e.getParent();
  if (!U(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(zt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function og(e) {
  return e.replaceAll("	", " ");
}
function ag() {
  const e = q();
  return !!e && !e.isCollapsed();
}
function cg(e) {
  const t = () => !ag();
  return Ve(e.registerCommand(Eo, t, Ct), e.registerCommand(Xr, t, Ct));
}
const ql = (e) => {
  e.dispatchCommand(Eo, null);
}, Rl = (e) => {
  e.dispatchCommand(Xr, null);
}, $l = (e) => {
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
      n.setData(o, og(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(pr, s);
  });
}, Il = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", og(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(pr, i);
  });
};
function QC() {
  const [e] = ce();
  return B(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Hs ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), ql(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Rl(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Il(e) : $l(e)));
    };
    return Ve(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      cg(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function ZC({ logger: e }) {
  const [t] = ce();
  return B(() => Ve(
    // When the backslash or forward slash key is typed.
    t.registerCommand(qr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Sn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(pr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Sn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Fc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Sn)
  ), [t, e]), null;
}
const lo = "editor-context-menu";
function dc(e) {
  return `${lo}-item-${e}`;
}
const eS = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function tS({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), M("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: dc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: M("span", { className: "text", children: i.title }) });
}
function rS({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return M("div", { className: "typeahead-popover", children: M("ul", { id: lo, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => M(tS, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let nS = 0;
class Ii {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${nS++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function iS({ options: e } = {}) {
  const [t] = ce(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = de(void 0), c = Be(() => {
    const f = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new Ii("Cut", {
        onSelect: () => {
          Rl(t);
        },
        isDisabled: r
      }),
      new Ii("Copy", {
        onSelect: () => {
          ql(t);
        }
      }),
      new Ii("Paste", {
        onSelect: () => {
          $l(t);
        },
        isDisabled: r
      }),
      new Ii("Paste as Plain Text", {
        onSelect: () => {
          Il(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((g) => new Ii(g.title, { onSelect: g.onSelect, isDisabled: g.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = Z(null), u = Z(null), d = he(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return B(() => cg(t), [t]), B(() => {
    const f = (p) => {
      const g = p.target;
      t.getRootElement() === g || Op(g) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, g) => {
      g?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), B(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const g = p.target;
      g instanceof Node && l.current?.contains(g) || d();
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
        d();
        return;
      }
      const g = document.activeElement;
      if (!(g && g !== document.body && g !== u.current && !t.getRootElement()?.contains(g) && !l.current?.contains(g)))
        if (p.key === "ArrowDown")
          p.preventDefault(), p.stopPropagation(), a((h) => h === void 0 ? 0 : (h + 1) % c.length);
        else if (p.key === "ArrowUp")
          p.preventDefault(), p.stopPropagation(), a((h) => h === void 0 ? c.length - 1 : (h - 1 + c.length) % c.length);
        else if (p.key === "Enter") {
          p.preventDefault(), p.stopPropagation();
          const h = o === void 0 ? void 0 : c[o];
          h && !h.isDisabled && (t.update(() => {
            h.onSelect();
          }), d());
        } else {
          if (eS.has(p.key))
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
      return f.setAttribute("aria-controls", lo), () => {
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
    f.setAttribute("aria-activedescendant", dc(o));
    const p = document.getElementById(lo), g = document.getElementById(dc(o));
    if (!p || !g)
      return;
    const h = p.getBoundingClientRect(), b = g.getBoundingClientRect(), x = b.top - h.top + p.scrollTop, T = b.bottom - h.top + p.scrollTop;
    x < p.scrollTop ? p.scrollTop = x : T > p.scrollTop + p.clientHeight && (p.scrollTop = T - p.clientHeight);
  }, [t, i.isOpen, o]), B(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), bs(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: g } = f.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), b = Math.max(0, Math.min(i.y, globalThis.innerHeight - g));
    f.style.left = `${h}px`, f.style.top = `${b}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? ub.createPortal(M("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: M(rS, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), d());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function sS(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function oS(e) {
  if (!Vy(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function aS(e) {
  return Et(e);
}
function Ea(e, t, r) {
  const n = yi(t.node);
  if (!Mo(n) || aS(n))
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
function cS(e, t) {
  if (q())
    return !1;
  const r = e.getRootElement(), n = Ky(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !By(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = Ea(e, c, oS(c)), d = u;
  else {
    const b = sS(n.getRangeAt(0), c);
    u = Ea(e, c, b ? "before" : "after"), d = Ea(e, l, b ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, g = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, h = jy(g, e);
  return h ? (Yr(h), h.dirty = !t, t) : !1;
}
function lS() {
  const [e] = ce(), t = Z(!1), r = Z(!1);
  return B(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = q();
        N(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), B(() => e.registerCommand(yr, () => (cS(e, t.current) && (r.current = !0), !1), _t), [e]), null;
}
function uS() {
  const [e] = ce();
  return B(() => e.registerCommand(qr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Hs ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, _t), [e]), null;
}
function dS({ isEditable: e }) {
  const [t] = ce();
  return bs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function vd(e) {
  return !!e && Zc(ie(e));
}
function lg(e) {
  const [t] = ce(), r = Z(void 0), n = he((i) => {
    const s = q(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = vd(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = vs(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = Lk();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      rr(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = ie(a);
      E(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return B(() => {
    const i = () => {
      const a = e(), c = q(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Qr(Zr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Cs(c) || !c.includes(li))
        return;
      const l = q(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Dk(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(li).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ve(t.registerCommand(yr, () => (i(), !1), Mn), t.registerCommand(zc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = vd(a);
      }), c && t.update(() => {
        const l = ie(a);
        E(l) && l.remove();
      }, { tag: Zr }), r.current = void 0, !1;
    }, Mn), t.registerNodeTransform(je, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function fS() {
  const e = q();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!F(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ge(i) || vs(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ge(s))
    return i;
}
function pS() {
  return lg(fS), null;
}
function hS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
        const u = o.getRootElement(), d = u?.ownerDocument.activeElement, f = u != null && d != null && (u === d || u.contains(d));
        o.update(() => {
          f || Qr(Wy), o.setEditorState(l), o.dispatchCommand(Hy, void 0);
        }, { tag: ip });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function gS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ce();
  return mS(t, n), yS(i, e, r, n), null;
}
function mS(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  B(() => {
    let o = i;
    (!o || o.length <= 0) && (o = T_), r.current !== o && (r.current = o, Md("note-callers", o, t));
  }, [t, i]), B(() => {
    let o = s;
    (!o || o.length <= 0) && (o = x_), n.current !== o && (n.current = o, Md("cross-ref-callers", o, t));
  }, [t, s]);
}
function yS(e, t, r, n) {
  B(() => {
    if (!e.hasNodes([me, Ae, Zt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => SS(s));
    return Ve(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ae, (s) => bS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(me, kS),
      e.registerNodeTransform(je, TS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Zt, xS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Zt, (s, { prevEditorState: o }) => _S(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(yr, () => CS(e, t, r, n), Ct),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function bS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Et(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !O(i) && i.getTextContent() !== wt(e.getCaller()) && e.insertBefore(i);
  }
}
function kS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => Et(o));
  if (!U(e) || !j(t) || !n)
    return;
  const i = tl(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  E(s) ? s.getTextContent() !== I && s.setTextContent(I) : e.insertAfter(pe(I));
}
function TS(e) {
  const t = tr(e), r = t?.getChildren(), n = r?.find((o) => Et(o));
  if (!E(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!O(e) && j(i) && e.getTextContent() !== I && (e.setTextContent(I), e.selectEnd()), U(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(zt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = tl(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function xS(e) {
  if (!Et(e))
    return;
  const t = e.getNextSibling();
  !E(t) || O(t) ? e.insertAfter(pe(I)) : t.getTextContent() !== I && t.setTextContent(I);
}
function _S(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ie(r), a = o?.getParent();
      return Et(o) && j(a) && a.getCaller() === Qi;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function CS(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = De(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ie(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Li(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (j(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Li(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (j(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Li(e, c, n);
    } else if (!a) {
      const c = De(o, (l) => j(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      Fe(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Li(e, l, n);
      }
    }
  }
  if (tt(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Un(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Li(e, l, n);
    }
  }
  return !1;
}
function Li(e, t, r) {
  const n = ie(t);
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
function SS(e) {
  const t = q();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && E(s)) {
    e.preventDefault();
    const o = Xi();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Yr(o);
  }
}
function Md(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (vS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function vS(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Wo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = is(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function MS(e) {
  const t = e.getParent();
  if (j(t))
    return Wo(t).some((r) => r.is(e)) ? t : void 0;
}
function uo(e) {
  const t = Wo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function ES(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function AS(e) {
  const t = Gy();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= uo(e);
  const i = ES(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= uo(e);
}
function fc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = MS(t);
  if (r)
    return PS(r, t, e.offset) ? void 0 : r;
}
function PS(e, t, r) {
  const n = Wo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function NS(e) {
  const t = Wo(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : rr(e, uo(e));
}
function wS(e = !1) {
  const t = q();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return OS(t.anchor, t.focus);
  const r = fc(t.anchor);
  if (!r)
    return !1;
  if (!e && AS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    rr(n, r.getIndexWithinParent());
  } else
    NS(r);
  return !0;
}
function OS(e, t) {
  const r = fc(e), n = fc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Ed(e, r, i), n && Ed(t, n, !i), !0;
}
function Ed(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), uo(t), "element");
}
function qS() {
  const [e] = ce(), t = Z(!1);
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
  }, [e]), B(() => e.registerCommand(yr, () => (wS(t.current) && Qr(Zr), !1), Mn), [e]), null;
}
function RS({ onChange: e }) {
  const [t] = ce();
  return B(() => t.registerCommand(yr, () => {
    const r = xl();
    return e?.(r), !1;
  }, Ct), [t, e]), null;
}
function $S() {
  const [e] = ce();
  return IS(e), null;
}
function IS(e) {
  B(() => {
    if (!e.hasNodes([rt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(rt, (t) => LS(t, e));
  }, [e]);
}
function LS(e, t) {
  sc(t, e.getKey()) && Oh(e.getFirstChild()), !(!oe(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ie(e.getKey());
    return oe(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function ug({ onStateChange: e }) {
  const [t] = ce(), [r, n] = de(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = he(() => {
    const l = q();
    let u;
    if (N(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : De(d, (x) => {
        const T = x.getParent();
        return T !== null && Jy(T);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), cs(p) && (p = De(d, oe) ?? p);
      const g = p.getKey(), h = r.getElementByKey(g), b = Kk(d, f);
      if (b && qx(b) && (u = b.getMarker()), h !== null && (oe(p) || Ce(p) || _s(p))) {
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
  return B(() => t.registerCommand(yr, (l, u) => (c(), n(u), !1), _t), [t, c]), B(() => Ve(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Yy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), _t), r.registerCommand(Xy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), _t)), [c, r, e]), null;
}
function dg(e) {
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
  return e ? Fe(e) ? e : De(e, (r) => Fe(r)) ?? void 0 : void 0;
}
function fg(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = sn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Ll(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !Lc(e) ? !1 : e.getNodes().some((t) => ge(t));
}
function pg(e) {
  if (!N(e) || !e.isCollapsed())
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
function hg(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = sn(r);
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
function Ad(e, t) {
  return !!pc(e, t);
}
function pc(e, t) {
  if (!N(e) || !e.isCollapsed())
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
function fo(e, t) {
  if (!N(e))
    return !1;
  const r = sn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ii(e) {
  return Ll(e) || fg(e);
}
function gg(e, t) {
  if (Ll(e) || fg(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return pg(e) && fo(e, "backward") || Ad(e, "backward");
    case "deleteForward":
      return hg(e) && fo(e, "forward") || Ad(e, "forward");
    case "insertText":
      return !1;
  }
}
function DS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = pc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (pg(e) && fo(e, "backward")) {
        const n = sn(e.anchor.getNode());
        if (tt(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = pc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (hg(e) && fo(e, "forward")) {
        const i = sn(e.anchor.getNode())?.getNextSibling();
        if (tt(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Pd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return Lc(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = sn(e.anchor.getNode()), n = sn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function mg(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else F(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function US(e) {
  const t = e.getPreviousSibling();
  if (!Fe(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild(), i = ct(n), s = e.getChildren().filter((o) => !cn(o) && !(i && o.is(n)));
  t.append(...s), e.remove(), r ? mg(r) : Si(t) || t.selectStart();
}
function yg(e) {
  return ge(e) || Ye(e) ? [] : tt(e) ? e.getChildren().flatMap(yg) : [e];
}
function FS(e) {
  const t = [];
  for (const r of e) {
    const n = yg(r);
    n.length !== 0 && (tt(r) && t.length > 0 && t.push(pe(" ")), t.push(...n));
  }
  return t;
}
function Nd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zS(e) {
  if (Array.isArray(e)) return e;
}
function KS(e, t) {
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
function BS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jS(e, t) {
  return zS(e) || KS(e, t) || VS(e, t) || BS();
}
function VS(e, t) {
  if (e) {
    if (typeof e == "string") return Nd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Nd(e, t) : void 0;
  }
}
const bg = Object.entries, wd = Object.setPrototypeOf, WS = Object.isFrozen, HS = Object.getPrototypeOf, GS = Object.getOwnPropertyDescriptor;
let nt = Object.freeze, ot = Object.seal, ei = Object.create, kg = typeof Reflect < "u" && Reflect, hc = kg.apply, gc = kg.construct;
nt || (nt = function(t) {
  return t;
});
ot || (ot = function(t) {
  return t;
});
hc || (hc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
gc || (gc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Xn = Xe(Array.prototype.forEach), JS = Xe(Array.prototype.lastIndexOf), Od = Xe(Array.prototype.pop), Qn = Xe(Array.prototype.push), YS = Xe(Array.prototype.splice), Gr = Array.isArray, Bi = Xe(String.prototype.toLowerCase), Aa = Xe(String.prototype.toString), qd = Xe(String.prototype.match), Di = Xe(String.prototype.replace), Rd = Xe(String.prototype.indexOf), XS = Xe(String.prototype.trim), QS = Xe(Number.prototype.toString), ZS = Xe(Boolean.prototype.toString), $d = typeof BigInt > "u" ? null : Xe(BigInt.prototype.toString), Id = typeof Symbol > "u" ? null : Xe(Symbol.prototype.toString), Ze = Xe(Object.prototype.hasOwnProperty), Ui = Xe(Object.prototype.toString), Qe = Xe(RegExp.prototype.test), Tn = ev(TypeError);
function Xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return hc(e, t, n);
  };
}
function ev(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return gc(e, r);
  };
}
function fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Bi;
  if (wd && wd(e, null), !Gr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (WS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function tv(e) {
  for (let t = 0; t < e.length; t++)
    Ze(e, t) || (e[t] = null);
  return e;
}
function at(e) {
  const t = ei(null);
  for (const n of bg(e)) {
    var r = jS(n, 2);
    const i = r[0], s = r[1];
    Ze(e, i) && (Gr(s) ? t[i] = tv(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = at(s) : t[i] = s);
  }
  return t;
}
function rv(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return QS(e);
    case "boolean":
      return ZS(e);
    case "bigint":
      return $d ? $d(e) : "0";
    case "symbol":
      return Id ? Id(e) : "Symbol()";
    case "undefined":
      return Ui(e);
    case "function":
    case "object": {
      if (e === null)
        return Ui(e);
      const t = e, r = Jt(t, "toString");
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
function Jt(e, t) {
  for (; e !== null; ) {
    const n = GS(e, t);
    if (n) {
      if (n.get)
        return Xe(n.get);
      if (typeof n.value == "function")
        return Xe(n.value);
    }
    e = HS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function nv(e) {
  try {
    return Qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ld = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Pa = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Na = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), iv = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), wa = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), sv = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Dd = nt(["#text"]), Ud = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Oa = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Fd = nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Is = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ov = ot(/{{[\w\W]*|^[\w\W]*}}/g), av = ot(/<%[\w\W]*|^[\w\W]*%>/g), cv = ot(/\${[\w\W]*/g), lv = ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), uv = ot(/^aria-[\-\w]+$/), zd = ot(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dv = ot(/^(?:\w+script|data):/i), fv = ot(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), pv = ot(/^html$/i), hv = ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Kd = ot(/<[/\w!]/g), Bd = ot(/<[/\w]/g), gv = ot(/<\/no(script|embed|frames)/i), mv = ot(/\/>/i), Nt = {
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
}, yv = function() {
  return typeof window > "u" ? null : window;
}, bv = function(t, r) {
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
}, jd = function() {
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
}, Wr = function(t, r, n, i) {
  return Ze(t, r) && Gr(t[r]) ? fe(i.base ? at(i.base) : {}, t[r], i.transform) : n;
};
function Tg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yv();
  const t = (z) => Tg(z);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Nt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Jt(f, "cloneNode"), g = Jt(f, "remove"), h = Jt(f, "nextSibling"), b = Jt(f, "childNodes"), x = Jt(f, "parentNode"), T = Jt(f, "shadowRoot"), v = Jt(f, "attributes"), A = o && o.prototype ? Jt(o.prototype, "nodeType") : null, S = o && o.prototype ? Jt(o.prototype, "nodeName") : null, D = o && o.prototype ? Jt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const z = r.createElement("template");
    z.content && z.content.ownerDocument && (r = z.content.ownerDocument);
  }
  let _, w = "", $, G = !1, Q = 0;
  const Ee = function() {
    if (Q > 0)
      throw Tn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, re = function(m) {
    Ee(), Q++;
    try {
      return _.createHTML(m);
    } finally {
      Q--;
    }
  }, qe = function(m) {
    Ee(), Q++;
    try {
      return _.createScriptURL(m);
    } finally {
      Q--;
    }
  }, ke = function() {
    return G || ($ = bv(d, i), G = !0), $;
  }, sr = r, Re = sr.implementation, fn = sr.createNodeIterator, Er = sr.createDocumentFragment, At = sr.getElementsByTagName, te = n.importNode;
  let P = jd();
  t.isSupported = typeof bg == "function" && typeof x == "function" && Re && Re.createHTMLDocument !== void 0;
  const Y = ov, le = av, V = cv, Se = lv, mt = uv, jt = dv, yt = fv, Ge = hv;
  let ut = zd, ue = null;
  const zn = fe({}, [...Ld, ...Pa, ...Na, ...wa, ...Dd]);
  let ye = null;
  const Mi = fe({}, [...Ud, ...Oa, ...Fd, ...Is]);
  let Me = Object.seal(ei(null, {
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
  })), Fr = null, zr = null;
  const or = Object.seal(ei(null, {
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
  let Kr = !0, pn = !0, Ei = !1, Es = !0, Vt = !1, R = !0, K = !1, H = !1, X = null, Te = null, Pt = !1, dt = !1, Wt = !1, ar = !1, Ai = !0, Pi = !1;
  const Ht = "user-content-";
  let Ni = !0, Kn = !1, Gt = {}, cr = null;
  const ea = fe({}, [
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
  let cu = null;
  const lu = fe({}, ["audio", "video", "img", "source", "image", "track"]);
  let ta = null;
  const uu = fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), As = "http://www.w3.org/1998/Math/MathML", Ps = "http://www.w3.org/2000/svg", lr = "http://www.w3.org/1999/xhtml";
  let Bn = lr, ra = !1, na = null;
  const uy = fe({}, [As, Ps, lr], Aa), du = nt(["mi", "mo", "mn", "ms", "mtext"]);
  let ia = fe({}, du);
  const fu = nt(["annotation-xml"]);
  let sa = fe({}, fu);
  const dy = fe({}, ["title", "style", "font", "a", "script"]);
  let wi = null;
  const fy = ["application/xhtml+xml", "text/html"], py = "text/html";
  let $e = null, jn = null;
  const hy = r.createElement("form"), pu = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, oa = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (jn && jn === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = at(m), wi = // eslint-disable-next-line unicorn/prefer-includes
    fy.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? py : m.PARSER_MEDIA_TYPE, $e = wi === "application/xhtml+xml" ? Aa : Bi, ue = Wr(m, "ALLOWED_TAGS", zn, {
      transform: $e
    }), ye = Wr(m, "ALLOWED_ATTR", Mi, {
      transform: $e
    }), na = Wr(m, "ALLOWED_NAMESPACES", uy, {
      transform: Aa
    }), ta = Wr(m, "ADD_URI_SAFE_ATTR", uu, {
      transform: $e,
      base: uu
    }), cu = Wr(m, "ADD_DATA_URI_TAGS", lu, {
      transform: $e,
      base: lu
    }), cr = Wr(m, "FORBID_CONTENTS", ea, {
      transform: $e
    }), Fr = Wr(m, "FORBID_TAGS", at({}), {
      transform: $e
    }), zr = Wr(m, "FORBID_ATTR", at({}), {
      transform: $e
    }), Gt = Ze(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? at(m.USE_PROFILES) : m.USE_PROFILES : !1, Kr = m.ALLOW_ARIA_ATTR !== !1, pn = m.ALLOW_DATA_ATTR !== !1, Ei = m.ALLOW_UNKNOWN_PROTOCOLS || !1, Es = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Vt = m.SAFE_FOR_TEMPLATES || !1, R = m.SAFE_FOR_XML !== !1, K = m.WHOLE_DOCUMENT || !1, dt = m.RETURN_DOM || !1, Wt = m.RETURN_DOM_FRAGMENT || !1, ar = m.RETURN_TRUSTED_TYPE || !1, Pt = m.FORCE_BODY || !1, Ai = m.SANITIZE_DOM !== !1, Pi = m.SANITIZE_NAMED_PROPS || !1, Ni = m.KEEP_CONTENT !== !1, Kn = m.IN_PLACE || !1, ut = nv(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : zd, Bn = typeof m.NAMESPACE == "string" ? m.NAMESPACE : lr, ia = Ze(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? at(m.MATHML_TEXT_INTEGRATION_POINTS) : fe({}, du), sa = Ze(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? at(m.HTML_INTEGRATION_POINTS) : fe({}, fu);
    const C = Ze(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? at(m.CUSTOM_ELEMENT_HANDLING) : ei(null);
    if (Me = ei(null), Ze(C, "tagNameCheck") && pu(C.tagNameCheck) && (Me.tagNameCheck = C.tagNameCheck), Ze(C, "attributeNameCheck") && pu(C.attributeNameCheck) && (Me.attributeNameCheck = C.attributeNameCheck), Ze(C, "allowCustomizedBuiltInElements") && typeof C.allowCustomizedBuiltInElements == "boolean" && (Me.allowCustomizedBuiltInElements = C.allowCustomizedBuiltInElements), ot(Me), Vt && (pn = !1), Wt && (dt = !0), Gt && (ue = fe({}, Dd), ye = ei(null), Gt.html === !0 && (fe(ue, Ld), fe(ye, Ud)), Gt.svg === !0 && (fe(ue, Pa), fe(ye, Oa), fe(ye, Is)), Gt.svgFilters === !0 && (fe(ue, Na), fe(ye, Oa), fe(ye, Is)), Gt.mathMl === !0 && (fe(ue, wa), fe(ye, Fd), fe(ye, Is))), or.tagCheck = null, or.attributeCheck = null, Ze(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? or.tagCheck = m.ADD_TAGS : Gr(m.ADD_TAGS) && (ue === zn && (ue = at(ue)), fe(ue, m.ADD_TAGS, $e))), Ze(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? or.attributeCheck = m.ADD_ATTR : Gr(m.ADD_ATTR) && (ye === Mi && (ye = at(ye)), fe(ye, m.ADD_ATTR, $e))), Ze(m, "ADD_URI_SAFE_ATTR") && Gr(m.ADD_URI_SAFE_ATTR) && fe(ta, m.ADD_URI_SAFE_ATTR, $e), Ze(m, "FORBID_CONTENTS") && Gr(m.FORBID_CONTENTS) && (cr === ea && (cr = at(cr)), fe(cr, m.FORBID_CONTENTS, $e)), Ze(m, "ADD_FORBID_CONTENTS") && Gr(m.ADD_FORBID_CONTENTS) && (cr === ea && (cr = at(cr)), fe(cr, m.ADD_FORBID_CONTENTS, $e)), Ni && (ue["#text"] = !0), K && fe(ue, ["html", "head", "body"]), ue.table && (fe(ue, ["tbody"]), delete Fr.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Tn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Tn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const L = _;
      _ = m.TRUSTED_TYPES_POLICY;
      try {
        w = re("");
      } catch (W) {
        throw _ = L, W;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (_ = void 0, w = "") : (_ === void 0 && (_ = ke()), _ && typeof w == "string" && (w = re("")));
    nt && nt(m), jn = m;
  }, hu = fe({}, [...Pa, ...Na, ...iv]), gu = fe({}, [...wa, ...sv]), gy = function(m, C, L) {
    return C.namespaceURI === lr ? m === "svg" : C.namespaceURI === As ? m === "svg" && (L === "annotation-xml" || ia[L]) : !!hu[m];
  }, my = function(m, C, L) {
    return C.namespaceURI === lr ? m === "math" : C.namespaceURI === Ps ? m === "math" && sa[L] : !!gu[m];
  }, yy = function(m, C, L) {
    return C.namespaceURI === Ps && !sa[L] || C.namespaceURI === As && !ia[L] ? !1 : !gu[m] && (dy[m] || !hu[m]);
  }, by = function(m) {
    let C = x(m);
    (!C || !C.tagName) && (C = {
      namespaceURI: Bn,
      tagName: "template"
    });
    const L = Bi(m.tagName), W = Bi(C.tagName);
    return na[m.namespaceURI] ? m.namespaceURI === Ps ? gy(L, C, W) : m.namespaceURI === As ? my(L, C, W) : m.namespaceURI === lr ? yy(L, C, W) : !!(wi === "application/xhtml+xml" && na[m.namespaceURI]) : !1;
  }, Br = function(m) {
    Qn(t.removed, {
      element: m
    });
    try {
      x(m).removeChild(m);
    } catch {
      if (g(m), !x(m))
        throw Tn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ns = function(m) {
    Oi(m);
    const C = b(m);
    if (C) {
      const W = [];
      Xn(C, (J) => {
        Qn(W, J);
      }), Xn(W, (J) => {
        try {
          g(J);
        } catch {
        }
      });
    }
    const L = v(m);
    if (L)
      for (let W = L.length - 1; W >= 0; --W) {
        const J = L[W], se = J && J.name;
        if (typeof se == "string")
          try {
            m.removeAttribute(se);
          } catch {
          }
      }
  }, hn = function(m, C) {
    try {
      Qn(t.removed, {
        attribute: C.getAttributeNode(m),
        from: C
      });
    } catch {
      Qn(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(m), m === "is")
      if (dt || Wt)
        try {
          Br(C);
        } catch {
        }
      else
        try {
          C.setAttribute(m, "");
        } catch {
        }
  }, ky = function(m) {
    const C = v(m);
    if (C)
      for (let L = C.length - 1; L >= 0; --L) {
        const W = C[L], J = W && W.name;
        if (!(typeof J != "string" || ye[$e(J)]))
          try {
            m.removeAttribute(J);
          } catch {
          }
      }
  }, Oi = function(m) {
    const C = [m];
    for (; C.length > 0; ) {
      const L = C.pop();
      (A ? A(L) : L.nodeType) === Nt.element && ky(L);
      const J = b(L);
      if (J)
        for (let se = J.length - 1; se >= 0; --se)
          C.push(J[se]);
    }
  }, Ty = function(m) {
    if (!R)
      return;
    const C = [m];
    for (; C.length > 0; ) {
      const L = C.pop(), W = A ? A(L) : L.nodeType;
      if (W === Nt.processingInstruction || W === Nt.comment && Qe(Bd, L.data)) {
        try {
          g(L);
        } catch {
        }
        continue;
      }
      if (W === Nt.element) {
        const se = L, xe = $e(S ? S(L) : L.nodeName);
        try {
          se.hasAttribute && se.hasAttribute("patchsrc") && se.removeAttribute("patchsrc"), se.hasAttribute && se.hasAttribute("for") && xe !== "label" && xe !== "output" && se.removeAttribute("for");
        } catch {
        }
      }
      const J = b(L);
      if (J)
        for (let se = J.length - 1; se >= 0; --se)
          C.push(J[se]);
    }
  }, mu = function(m) {
    let C = null, L = null;
    if (Pt)
      m = "<remove></remove>" + m;
    else {
      const se = qd(m, /^[\r\n\t ]+/);
      L = se && se[0];
    }
    wi === "application/xhtml+xml" && Bn === lr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const W = _ ? re(m) : m;
    if (Bn === lr)
      try {
        C = new u().parseFromString(W, wi);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = Re.createDocument(Bn, "template", null);
      try {
        C.documentElement.innerHTML = ra ? w : W;
      } catch {
      }
    }
    const J = C.body || C.documentElement;
    return m && L && J.insertBefore(r.createTextNode(L), J.childNodes[0] || null), Bn === lr ? At.call(C, K ? "html" : "body")[0] : K ? C.documentElement : J;
  }, yu = function(m) {
    const C = D ? D(m) : m.ownerDocument;
    return fn.call(
      C || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ws = function(m) {
    return m = Di(m, Y, " "), m = Di(m, le, " "), m = Di(m, V, " "), m;
  }, aa = function(m) {
    var C;
    m.normalize();
    const L = D ? D(m) : m.ownerDocument, W = fn.call(
      L || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = W.nextNode();
    for (; J; )
      J.data = ws(J.data), J = W.nextNode();
    const se = (C = m.querySelectorAll) === null || C === void 0 ? void 0 : C.call(m, "template");
    se && Xn(se, (xe) => {
      Vn(xe.content) && aa(xe.content);
    });
  }, Os = function(m) {
    const C = S ? S(m) : null;
    return typeof C != "string" || $e(C) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    m.attributes !== v(m) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
    m.childNodes !== b(m);
  }, Vn = function(m) {
    if (!A || typeof m != "object" || m === null)
      return !1;
    try {
      return A(m) === Nt.documentFragment;
    } catch {
      return !1;
    }
  }, qi = function(m) {
    if (!A || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof A(m) == "number";
    } catch {
      return !1;
    }
  };
  function ur(z, m, C) {
    z.length !== 0 && Xn(z, (L) => {
      L.call(t, m, C, jn);
    });
  }
  const xy = function(m, C) {
    return !!(R && m.hasChildNodes() && !qi(m.firstElementChild) && Qe(Kd, m.textContent) && Qe(Kd, m.innerHTML) || R && m.namespaceURI === lr && C === "style" && qi(m.firstElementChild) || m.nodeType === Nt.processingInstruction || R && m.nodeType === Nt.comment && Qe(Bd, m.data));
  }, _y = function(m, C, L) {
    if (!Fr[C] && xu(C) && (Me.tagNameCheck instanceof RegExp && Qe(Me.tagNameCheck, C) || Me.tagNameCheck instanceof Function && Me.tagNameCheck(C)))
      return !1;
    if (Ni && !cr[C]) {
      const W = x(m), J = b(m);
      if (J && W) {
        const se = J.length;
        for (let xe = se - 1; xe >= 0; --xe) {
          const Ie = m === L ? p(J[xe], !0) : J[xe];
          W.insertBefore(Ie, h(m));
        }
      }
    }
    return Br(m), !0;
  }, bu = function(m, C, L, W) {
    return m.length === 0 ? C : C === L || C === W ? at(C) : C;
  }, ku = function(m, C) {
    if (ur(P.beforeSanitizeElements, m, null), m !== C && x(m) === null)
      return Kn && Oi(m), !0;
    if (Os(m))
      return Br(m), !0;
    const L = $e(S ? S(m) : m.nodeName);
    if (ue = bu(P.uponSanitizeElement, ue, zn, X), ur(P.uponSanitizeElement, m, {
      tagName: L,
      allowedTags: ue
    }), m !== C && x(m) === null)
      return Kn && Oi(m), !0;
    if (xy(m, L))
      return Br(m), !0;
    if (Fr[L] || !(or.tagCheck instanceof Function && or.tagCheck(L)) && !ue[L]) {
      const J = _y(m, L, C);
      return J === !1 && ur(P.afterSanitizeElements, m, null), J;
    }
    if ((A ? A(m) : m.nodeType) === Nt.element && !by(m) || (L === "noscript" || L === "noembed" || L === "noframes") && Qe(gv, m.innerHTML))
      return Br(m), !0;
    if (Vt && m.nodeType === Nt.text) {
      const J = ws(m.textContent);
      m.textContent !== J && (Qn(t.removed, {
        element: m.cloneNode()
      }), m.textContent = J);
    }
    return ur(P.afterSanitizeElements, m, null), !1;
  }, Tu = function(m, C, L) {
    if (zr[C] || R && C === "patchsrc" || R && C === "for" && m !== "label" && m !== "output" || Ai && (C === "id" || C === "name") && (L in r || L in hy))
      return !1;
    const W = ye[C] || or.attributeCheck instanceof Function && or.attributeCheck(C, m);
    if (!(pn && Qe(Se, C))) {
      if (!(Kr && Qe(mt, C))) {
        if (W) {
          if (!ta[C]) {
            if (!Qe(ut, Di(L, yt, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && m !== "script" && Rd(L, "data:") === 0 && cu[m])) {
                if (!(Ei && !Qe(jt, Di(L, yt, "")))) {
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
          !(xu(m) && (Me.tagNameCheck instanceof RegExp && Qe(Me.tagNameCheck, m) || Me.tagNameCheck instanceof Function && Me.tagNameCheck(m)) && (Me.attributeNameCheck instanceof RegExp && Qe(Me.attributeNameCheck, C) || Me.attributeNameCheck instanceof Function && Me.attributeNameCheck(C, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          C === "is" && Me.allowCustomizedBuiltInElements && (Me.tagNameCheck instanceof RegExp && Qe(Me.tagNameCheck, L) || Me.tagNameCheck instanceof Function && Me.tagNameCheck(L)))
        ) return !1;
      }
    }
    return !0;
  }, Cy = fe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), xu = function(m) {
    return !Cy[Bi(m)] && Qe(Ge, m);
  }, Sy = function(m, C, L, W) {
    if (_ && typeof d == "object" && typeof d.getAttributeType == "function" && !L)
      switch (d.getAttributeType(m, C)) {
        case "TrustedHTML":
          return re(W);
        case "TrustedScriptURL":
          return qe(W);
      }
    return W;
  }, vy = function(m, C, L, W) {
    try {
      L ? m.setAttributeNS(L, C, W) : m.setAttribute(C, W), Os(m) ? Br(m) : Od(t.removed);
    } catch {
      hn(C, m);
    }
  }, _u = function(m) {
    ur(P.beforeSanitizeAttributes, m, null);
    const C = m.attributes;
    if (!C || Os(m))
      return;
    ye = bu(P.uponSanitizeAttribute, ye, Mi, Te);
    const L = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ye,
      forceKeepAttr: void 0
    };
    let W = C.length;
    const J = $e(m.nodeName);
    for (; W--; ) {
      const se = C[W], xe = se.name, Ie = se.namespaceURI, bt = se.value, kt = $e(xe), la = bt;
      let ft = xe === "value" ? la : XS(la);
      if (L.attrName = kt, L.attrValue = ft, L.keepAttr = !0, L.forceKeepAttr = void 0, ur(P.uponSanitizeAttribute, m, L), ft = L.attrValue, Pi && (kt === "id" || kt === "name") && Rd(ft, Ht) !== 0 && (hn(xe, m), ft = Ht + ft), R && Qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        hn(xe, m);
        continue;
      }
      if (kt === "attributename" && qd(ft, "href")) {
        hn(xe, m);
        continue;
      }
      if (!L.forceKeepAttr) {
        if (!L.keepAttr) {
          hn(xe, m);
          continue;
        }
        if (!Es && Qe(mv, ft)) {
          hn(xe, m);
          continue;
        }
        if (Vt && (ft = ws(ft)), !Tu(J, kt, ft)) {
          hn(xe, m);
          continue;
        }
        ft = Sy(J, kt, Ie, ft), ft !== la && vy(m, xe, Ie, ft);
      }
    }
    ur(P.afterSanitizeAttributes, m, null);
  }, qs = function(m) {
    let C = null;
    const L = yu(m);
    for (ur(P.beforeSanitizeShadowDOM, m, null); C = L.nextNode(); )
      if (ur(P.uponSanitizeShadowNode, C, null), ku(C, m), _u(C), Vn(C.content) && qs(C.content), (A ? A(C) : C.nodeType) === Nt.element) {
        const J = T(C);
        Vn(J) && (ca(J), qs(J));
      }
    ur(P.afterSanitizeShadowDOM, m, null);
  }, ca = function(m) {
    const C = [{
      node: m,
      shadow: null
    }];
    for (; C.length > 0; ) {
      const L = C.pop();
      if (L.shadow) {
        qs(L.shadow);
        continue;
      }
      const W = L.node, se = (A ? A(W) : W.nodeType) === Nt.element, xe = b(W);
      if (xe)
        for (let Ie = xe.length - 1; Ie >= 0; --Ie)
          C.push({
            node: xe[Ie],
            shadow: null
          });
      if (se) {
        const Ie = S ? S(W) : null;
        if (typeof Ie == "string" && $e(Ie) === "template") {
          const bt = W.content;
          Vn(bt) && C.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (se) {
        const Ie = T(W);
        Vn(Ie) && C.push({
          node: null,
          shadow: Ie
        }, {
          node: Ie,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(z) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, L = null, W = null, J = null;
    if (ra = !z, ra && (z = "<!-->"), typeof z != "string" && !qi(z) && (z = rv(z), typeof z != "string"))
      throw Tn("dirty is not a string, aborting");
    if (!t.isSupported)
      return z;
    H ? (ue = X, ye = Te) : oa(m), (P.uponSanitizeElement.length > 0 || P.uponSanitizeAttribute.length > 0) && (ue = at(ue)), P.uponSanitizeAttribute.length > 0 && (ye = at(ye)), t.removed = [];
    const se = Kn && typeof z != "string" && qi(z);
    if (se) {
      Ty(z);
      const bt = S ? S(z) : z.nodeName;
      if (typeof bt == "string") {
        const kt = $e(bt);
        if (!ue[kt] || Fr[kt])
          throw Ns(z), Tn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Os(z))
        throw Ns(z), Tn("root node is clobbered and cannot be sanitized in-place");
      try {
        ca(z);
      } catch (kt) {
        throw Ns(z), kt;
      }
    } else if (qi(z))
      C = mu("<!---->"), L = C.ownerDocument.importNode(z, !0), L.nodeType === Nt.element && L.nodeName === "BODY" || L.nodeName === "HTML" ? C = L : C.appendChild(L), ca(L);
    else {
      if (!dt && !Vt && !K && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return _ && ar ? re(z) : z;
      if (C = mu(z), !C)
        return dt ? null : ar ? w : "";
    }
    C && Pt && Br(C.firstChild);
    const xe = se ? z : C;
    try {
      const bt = yu(xe);
      for (; W = bt.nextNode(); )
        ku(W, xe), _u(W), Vn(W.content) && qs(W.content);
    } catch (bt) {
      throw se && (Ns(z), Xn(t.removed, (kt) => {
        kt.element && Oi(kt.element);
      })), bt;
    }
    if (se)
      return Xn(t.removed, (bt) => {
        bt.element && Oi(bt.element);
      }), Vt && aa(z), z;
    if (dt) {
      if (Vt && aa(C), Wt)
        for (J = Er.call(C.ownerDocument); C.firstChild; )
          J.appendChild(C.firstChild);
      else
        J = C;
      return (ye.shadowroot || ye.shadowrootmode) && (J = te.call(n, J, !0)), J;
    }
    let Ie = K ? C.outerHTML : C.innerHTML;
    return K && ue["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && Qe(pv, C.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + Ie), Vt && (Ie = ws(Ie)), _ && ar ? re(Ie) : Ie;
  }, t.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    oa(z), H = !0, X = ue, Te = ye;
  }, t.clearConfig = function() {
    jn = null, H = !1, X = null, Te = null, _ = $, w = "";
  }, t.isValidAttribute = function(z, m, C) {
    jn || oa({});
    const L = $e(z), W = $e(m);
    return Tu(L, W, C);
  }, t.addHook = function(z, m) {
    typeof m == "function" && Ze(P, z) && Qn(P[z], m);
  }, t.removeHook = function(z, m) {
    if (Ze(P, z)) {
      if (m !== void 0) {
        const C = JS(P[z], m);
        return C === -1 ? void 0 : YS(P[z], C, 1)[0];
      }
      return Od(P[z]);
    }
  }, t.removeHooks = function(z) {
    Ze(P, z) && (P[z] = []);
  }, t.removeAllHooks = function() {
    P = jd();
  }, t;
}
var kv = Tg();
function Tv({ structureProtectionMode: e = "off" }) {
  const [t] = ce(), r = Z(void 0), [n, i] = de(void 0), s = he((o) => {
    r.current = o, i(o);
  }, []);
  return B(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const g = dg(p);
      if (!g)
        return !1;
      const h = q();
      return e === "protected" ? h && gg(h, g) ? (p.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, p);
    }, a = (p, g) => {
      const h = q(), b = r.current;
      if (b && h && Pd(h, b)) {
        if (s(void 0), g.preventDefault(), p !== b.intent)
          return !0;
        const T = ie(b.key) ?? void 0;
        if (b.kind === "verse") {
          if (T) {
            const v = T.getParent(), A = T.getPreviousSibling(), S = T.getNextSibling();
            T.remove(), A ? mg(A) : S && E(S) ? S.select(0, 0) : v?.selectStart();
          }
        } else b.kind === "selection" ? N(h) && (wl(h), h.removeText()) : tt(T) && US(T);
        return !0;
      }
      if (!h)
        return !1;
      const x = DS(h, p);
      if (x) {
        if (x.kind === "verse") {
          const T = zf();
          T.add(x.node.getKey()), Yr(T);
        } else {
          const T = Xi();
          T.anchor.set(x.node.getKey(), 0, "element"), T.focus.set(x.node.getKey(), x.node.getChildrenSize(), "element"), Yr(T);
        }
        return s({ key: x.node.getKey(), kind: x.kind, intent: p }), g.preventDefault(), !0;
      }
      if (N(h) && !h.isCollapsed() && Ll(h)) {
        const T = h.getNodes().filter(ge).map((S) => S.getKey()), { anchor: v, focus: A } = h;
        return s({
          kind: "selection",
          intent: p,
          key: T[0],
          anchor: { key: v.key, offset: v.offset, type: v.type },
          focus: { key: A.key, offset: A.offset, type: A.type }
        }), g.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const g = q();
      return !g || !ii(g) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, g) => {
      if (!p)
        return !1;
      const h = kv.sanitize(p), b = new DOMParser().parseFromString(h, "text/html"), x = FS(kb(t, b)), T = q();
      return N(T) && T.insertNodes(x), g.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const g = q();
      return g && ii(g) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const g = q();
      return g && ii(g) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Pd(q(), p) || s(void 0);
      });
    };
    return Ve(
      t.registerCommand(qr, o, ve),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(Xr, c, _t),
      t.registerCommand(pr, u, ve),
      t.registerCommand(Qy, c, ve),
      t.registerCommand(Fc, d, ve),
      t.registerCommand(vo, c, ve),
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
const cN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function xv({ textDirection: e }) {
  const [t] = ce();
  return _v(t, e), null;
}
function _v(e, t) {
  B(() => (Vd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Vd(e, t);
  })), [e, t]);
}
function Vd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function Cv() {
  const [e] = ce();
  return Sv(e), null;
}
function Sv(e) {
  B(() => {
    if (!e.hasNodes([me, Mt, Ae, je, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ve(
      e.registerNodeTransform(je, vv),
      e.registerNodeTransform(je, (t) => Mv(t, e)),
      e.registerNodeTransform(pt, Wd),
      e.registerNodeTransform(Mt, Wd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        as(Nn("va"), t), as(Nn("vp"), t);
      })
    );
  }, [e]);
}
function vv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || j(r) || U(n) || U(r) || be(n) || be(r) || Ue(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Ue(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ne(e, ae) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Le(n))
    return;
  if (ge(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ge(r) && gl(e);
}
function Mv(e, t) {
  const r = e.getParent();
  !Ue(r) || !e.isAttached() || sc(t, e.getKey()) && !sc(t, r.getKey()) && r.insertAfter(e);
}
function Wd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; be(t); )
    t = t.getLastChild();
  (U(t) || E(t) && be(t.getParent())) && e.insertBefore(pe(" "));
}
function Dl(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Zc(n)) ? void 0 : e;
}
function Ev(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (F(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function Av() {
  const e = q();
  if (!(!N(e) || !e.isCollapsed()))
    return Dl(Ev(e.anchor));
}
function Pv(e) {
  const t = q();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = xg(e.target)), r ? Dl(De(r, j)) : void 0;
}
function xg(e) {
  const t = Zy(e)?.anchorNode;
  if (Ff(t))
    return yi(t) ?? void 0;
}
function Nv(e) {
  if (q())
    return;
  const t = xg(e);
  return t ? Dl(De(t, j)) : void 0;
}
function wv() {
  const [e] = ce(), t = lg(Av);
  return B(() => {
    const r = (n) => {
      Qr(Zr), t(n);
    };
    return Ve(e.registerCommand(yr, () => {
      const n = Nv(e.getRootElement());
      return n && r(n), !1;
    }, Mn), e.registerCommand(So, (n) => {
      const i = Pv(n);
      return i && r(i), !1;
    }, Mn));
  }, [e, t]), null;
}
function Ov({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = H_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return M(W_, { trigger: e, items: i });
}
function qv({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Be(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? M(Iv, { trigger: e, harness: i }) : M(Ov, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const Rv = [" ", "*"];
function $v(e, t) {
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
function Iv({ trigger: e, harness: t }) {
  const [r] = ce(), [n, i] = de(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = he((f, p, g) => {
    const h = p.find((b) => b.kind === "note" && b.marker === f);
    if (h) {
      t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const b = q();
      N(b) && b.insertText(`${e}${f}${g ? " " : ""}`);
    });
  }, [r, t, e]);
  B(() => Ve(r.registerCommand(qr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const h = s.current.query;
        return h ? (a(h, n.items, !1), eb(() => {
          const b = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(b ? {
            trigger: "backslash",
            hasTextSelection: b.hasTextSelection,
            items: t.getItems(b),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const b = q();
          N(b) && b.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const g = s.current.query;
      if (n.hasTextSelection) {
        const h = n.items.find((b) => b.marker === g);
        return h && t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
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
  }, ve), r.registerCommand(Kf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Sn)), [r, e, t, n, a]);
  const c = he(() => i(void 0), []), l = he((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = he((f) => {
    const { markerMenuItem: p, applyOpts: g } = f;
    t.apply(p, g);
  }, [t]), d = Be(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    $v(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && M(zh, { isOpen: !0, children: ({ placement: f }) => M(
    jh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? Rv : void 0 },
    n.session
  ) });
}
function Lv(e) {
  return e.replaceAll(I, "~").replace(/ {2,}/g, (r) => I.repeat(r.length));
}
function Dv(e) {
  return e.replaceAll(I, " ").replaceAll("~", I);
}
function Uv(e) {
  return e.replace(/ {2,}/g, " ");
}
let po;
function Fv(e) {
  e && (po = e);
}
function _g(e) {
  return Bo(e);
}
function zv(e, t) {
  return e.isEmpty() ? If : Cg(e.toJSON(), t);
}
function Cg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && No(r[0]) && (!r[0].children || r[0].children.length === 0))
    return If;
  if (r.some(gx)) {
    po?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Sg(r), i = Yt(n, t);
  return i ? { type: mr, version: gr, content: i } : void 0;
}
function Kv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Pe({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function Bv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Pe({
    type: qt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function jv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Kp(r, a, c), Pe({
    type: qt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Vv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Kp(t, o, a), Pe({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function Wv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !_g(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(I) && (t[0] = a.slice(1));
  }
  return Pe({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function Hv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Gv(e, t) {
  const { unknownAttributes: r } = e;
  return Pe({ type: mh, ...r, content: t });
}
function Jv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Pe({ type: kh, marker: r, ...n, content: t });
}
function Yv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Pe({
    type: xh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function Xv(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Pe({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function ti(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Pe({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Xp({ sid: n, eid: i, ...s }, o)
  });
}
function Qv(e) {
  return e.text;
}
function Zv(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function eM(e) {
  const { marker: t } = e;
  return {
    type: to,
    marker: t === "" ? void 0 : t
  };
}
function Hd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function tM(e, t, r, n, i) {
  const s = er.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = ti({
      type: s,
      marker: ri,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = ti({
      type: s,
      marker: En,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = ti({
      type: s,
      marker: En
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = ti({
      type: s,
      marker: ri
    });
    i.push(l);
  }
  (!n || !bp(n)) && t.forEach((l) => {
    const u = ti({
      type: s,
      marker: ri,
      eid: l
    });
    i.push(u);
  });
}
function Yt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, g = a, h = a, b = a;
    switch (a.type) {
      case Bt.getType():
        i.push(
          Kv(
            l,
            Yt(l.children, t)
          )
        );
        break;
      case vr.getType():
        i.push(Bv(a));
        break;
      case qt.getType():
        i.push(
          jv(
            u,
            Yt(u.children, t)
          )
        );
        break;
      case Mt.getType():
      case pt.getType():
        i.push(Vv(a));
        break;
      case me.getType():
        i.push(
          Wv(
            d,
            Yt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case rt.getType():
        i.push(
          Hv(
            f,
            Yt(f.children, t)
          )
        );
        break;
      case Dn.getType():
        i.push(
          Gv(
            a,
            Yt(a.children, t)
          )
        );
        break;
      case Ti.getType():
        i.push(
          Jv(
            a,
            Yt(a.children, t)
          )
        );
        break;
      case xi.getType():
        i.push(
          Yv(
            a,
            Yt(a.children, t)
          )
        );
        break;
      case Ae.getType():
        i.push(
          Xv(
            p,
            Yt(p.children, t, p.caller)
          )
        );
        break;
      case $r.getType():
      case Rr.getType():
      case Zt.getType():
      case Bf.getType():
      case Mr.getType():
        break;
      case et.getType():
        if (s = Yt(
          h.children,
          t,
          r,
          n
        ), s) {
          const x = h.typedIDs[Jr];
          if (x)
            tM(s, x, o, e[c + 1], i), o = x;
          else {
            const T = s.shift();
            T && (typeof T == "string" ? Hd(i, T) : i.push(T)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case er.getType():
        i.push(ti(a));
        break;
      case je.getType():
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Cs(g.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        g.text !== I && !g.text.startsWith(Bc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[xs]?.textType !== "attribute" && (!r || g.text !== wt(r))) {
          let x = Qv(g);
          _g(t) && (n && x.startsWith(I) && (x = x.slice(1)), x = Uv(Dv(x))), Hd(i, x);
        }
        break;
      case Ln.getType():
        i.push(
          Zv(
            b,
            Yt(b.children, t)
          )
        );
        break;
      case Dr.getType():
        i.push(eM(a));
        break;
      case _i.getType():
        po?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        po?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Sg(e) {
  const t = e.findIndex((r) => No(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Sg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Bs = {
  initialize: Fv,
  deserializeEditorState: zv
}, rM = /^sd\d*$/, nM = /* @__PURE__ */ new Set([
  ...Object.entries(Va).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === y.Paragraph && !rM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function iM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Yc(i) || Dp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!zk(i)) {
      t && ho(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Qc(i) && nM.has(i.marker) && !ho(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    vg(i.children, t).forEach((s) => {
      const o = sM(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = oM(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function vg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Mg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (bp(i)) {
      const s = vg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Gd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Gd(i, c.nodes)] });
      });
      return;
    }
    t && ho(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Gd(e, t) {
  return { ...e, children: t };
}
function Mg(e) {
  return Nh(e) && e.number !== "";
}
function ho(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Mg(r) || ho(r)) : !1;
}
function sM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function oM(e) {
  return {
    type: ro,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Eh
  };
}
const Jd = Pg([]), aM = {
  type: Bf.getType(),
  version: 1
};
let Ul = [], ee, qn, Eg, vt;
function cM(e, t) {
  Ul = [], dM(e), fM(t);
}
function lM(e = 0) {
}
function uM(e, t) {
  ee = t ?? Ko();
  let r;
  return e ? (e.type !== mr && vt?.warn(`This USJ type '${e.type}' didn't match the expected type '${mr}'.`), e.version !== gr && vt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${gr}'.`
  ), e.content.length > 0 ? (r = kc(Ar(e.content)), us(ee) && (r = iM(r, vt))) : r = [Jd]) : r = [Jd], Eg?.(Ul), {
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
function dM(e) {
  e && (qn = e), e?.addMissingComments && (Eg = e.addMissingComments);
}
function fM(e) {
  e && (vt = e);
}
function Ag() {
  return Bo(ee);
}
function pM(e, t) {
  let { marker: r } = e;
  r !== rs && vt?.warn(`Unexpected book marker '${r}'!`), r = r ?? rs;
  const { code: n } = e;
  (!n || !Bt.isValidBookCode(n)) && vt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  ee?.markerMode === "editable" || ee?.markerMode === "visible" ? i.push(
    xt("marker", Oe(r) + " " + n + I)
  ) : ee?.hasGutterParaMarkers && i.push(xt("marker", Oe(r) + I, !0)), i.push(...t);
  const s = ze(e, xk);
  return Pe({
    type: Bt.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Cp
  });
}
function hM(e) {
  let { marker: t } = e;
  t !== Qs && vt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Qs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = ze(e, _k);
  let a;
  ee?.markerMode === "visible" && (a = !0);
  const c = [
    gt(Ft(t, r) ?? "")
  ];
  return ee?.markerMode === "editable" && wM(i, s, c), ee?.markerMode === "editable" ? Pe({
    type: qt.getType(),
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
    version: vp
  }) : Pe({
    type: vr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Np
  });
}
function gM(e) {
  let { marker: t } = e;
  t !== Zs && vt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Zs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (rC(ee) ?? Mt).getType(), c = ee?.markerMode === "editable" ? $p : Ph;
  let l, u;
  ee?.markerMode === "editable" ? l = Ft(t, r) : ee?.markerMode === "visible" && (u = !0);
  const d = ze(e, $k);
  return Pe({
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
function mM(e, t = [], r = !1) {
  let { marker: n } = e;
  me.isValidMarker(n, qn?.extraValidMarkers) || vt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ee?.markerMode === "editable") {
    const [a] = t;
    ui(a) ? a.text = I + a.text : a && t.unshift(gt(I));
  }
  t.length === 0 && t.push(gt(zt)), mc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = ze(e, vk);
  return s || EM(n, o, i), s || yc(e.marker ?? "", i, !1, r), Pe({
    type: me.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Pp
  });
}
function Pg(e) {
  return {
    type: tn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: qp
  };
}
function yM(e, t = []) {
  let { marker: r } = e;
  rt.isValidMarker(r, qn?.extraValidMarkers) || vt?.warn(`Unexpected para marker '${r}'!`), r = r ?? Ut;
  const n = [];
  if (Fn(ee) && (ee?.markerMode === "editable" ? n.push(
    ht(r),
    gt(I, Sr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && n.push(
    xt(
      "marker",
      Oe(r) + I,
      ee?.hasGutterParaMarkers
    )
  )), n.push(...t), Ag()) {
    const s = n.find(
      (o) => !sl(o) && !(ui(o) && o.text === I)
    );
    ui(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => I.repeat(o.length)));
  }
  const i = ze(e, qk);
  return Pe({
    type: rt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Rp
  });
}
function Fl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function bM(e, t = []) {
  const r = ze(e, IT);
  return Pe({
    ...Fl(),
    type: Dn.getType(),
    unknownAttributes: r,
    children: t,
    version: yh
  });
}
function kM(e, t = []) {
  const r = ze(e, UT), n = e.marker ?? ec, i = [];
  return ee?.markerMode === "editable" ? i.push(
    ht(n),
    gt(I, Sr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && i.push(
    xt(
      "marker",
      Oe(n) + I,
      ee?.hasGutterParaMarkers
    )
  ), i.push(...t), Pe({
    ...Fl(),
    type: Ti.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Th
  });
}
function TM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? tc, a = lh(o, i) ?? o;
  ee?.markerMode === "editable" ? s.push(
    ht(a),
    gt(I, Sr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && s.push(
    xt(
      "marker",
      Oe(a) + I,
      ee?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = ze(
    e,
    zT
  );
  return Pe({
    ...Fl(),
    type: xi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: _h
  });
}
function xM(e, t) {
  const r = Hk(t);
  let n = () => {
  };
  return qn?.noteCallerOnClick && (n = qn.noteCallerOnClick), Pe({
    type: Zt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Lh
  });
}
function _M(e, t) {
  let { marker: r } = e;
  Ae.isValidMarker(r, qn?.extraValidMarkers) || vt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Vc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : _l(ee?.noteMode), a = ze(e, Db), c = ee?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ee?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (u = ht(r, "closing"))) : ee?.markerMode === "visible" && (l = xt("marker", Oe(r) + " "), s || (u = xt("marker", st(r))));
  const d = [];
  let f;
  if (l && d.push(l), ee?.markerMode === "editable" && !o)
    f = gt(wt(i), void 0, c), d.push(f), NM(n, d), d.push(...t);
  else {
    const p = gt(I, Sr, "token");
    f = xM(i, t), d.push(f, p, ...t.flatMap(CM(p)));
  }
  return u && d.push(u), Pe({
    type: Ae.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: up
  });
}
function CM(e) {
  return (t) => mp(t) ? [t] : [t, e];
}
function SM(e) {
  let { marker: t } = e;
  (!t || !er.isValidMarker(t, qn?.extraValidMarkers)) && vt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = ze(e, jc), s = Qp(e);
  return Pe({
    type: er.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: ap
  });
}
function Yd(e, t = []) {
  return {
    type: et.getType(),
    typedIDs: { [Jr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function vM(e, t) {
  const { marker: r } = e, n = e.type, i = ze(e, mk), s = [];
  if (ee?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = uh(
      n,
      r,
      i
    );
    o && s.push(xt("marker", o)), a && s.push(xt("attribute", a)), s.push(...t), c && s.push(xt("attribute", c)), l && s.push(xt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    ui(o) && (o.mode = "token");
  }), Pe({
    type: Ln.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: Tp
  });
}
function MM(e) {
  return {
    type: Dr.getType(),
    marker: e,
    text: Hi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ee?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: hh
  };
}
function ht(e, t = "opening", r = !1, n = "normal") {
  return {
    type: Mr.getType(),
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
function gt(e, t = void 0, r = "normal") {
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
    type: Rr.getType(),
    text: t,
    textType: e,
    version: gp
  };
  return r && (n[xs] = { [Gc.key]: !0 }), n;
}
function fs(e, t) {
  return {
    type: $r.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: xp
  };
}
function mc(e, t, r = !1) {
  ee?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : ee?.markerMode === "visible" && t.push(xt("marker", Oe(e, r)));
}
function yc(e, t, r = !1, n = !1) {
  ee?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : ee?.markerMode === "visible" && t.push(
    xt(
      "marker",
      r ? st("") : st(e, n)
    )
  );
}
function EM(e, t, r) {
  if (ee?.markerMode !== "editable" || !t) return;
  const n = fr(t, Ao(e));
  n && r.push(gt(n, "attribute"));
}
function Xd(e, t) {
  if (e.type !== "ms" || ee?.markerMode !== "editable" && ee?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = ze(e, jc), o = Zp(
    n,
    i,
    s,
    Qp(e)
  ), a = fr(o, Po(r ?? ""));
  if (!a) return;
  const c = I + a;
  ee?.markerMode === "editable" ? t.push(gt(c, "attribute")) : t.push(xt("attribute", c));
}
function AM(e, t) {
  const r = e.marker ?? "";
  if (ee?.markerMode === "editable") {
    const n = [];
    mc(r, n), Xd(e, n), yc(r, n, !0), t.push(fs("milestone", n));
  } else
    mc(r, t), Xd(e, t), yc(r, t, !0);
}
function Qd(e, t, r) {
  t !== void 0 && r.push(
    fs(e, [
      ht(e, "opening"),
      gt(I + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function PM(e, t) {
  ee?.markerMode === "editable" && (Qd("va", e.altnumber, t), Qd("vp", e.pubnumber, t));
}
function NM(e, t) {
  e !== void 0 && t.push(
    fs("cat", [
      ht("cat", "opening"),
      gt(I + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function wM(e, t, r) {
  e !== void 0 && r.push(
    fs("ca", [
      ht("ca", "opening"),
      gt(I + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    fs("cp", [
      ht("cp", "opening"),
      gt(I + t, "attribute")
    ])
  );
}
function Zd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function OM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function ef(e, t) {
  t.marker === En && t.sid !== void 0 && e.push(t.sid), t.marker === ri && t.eid !== void 0 && OM(e, t.eid);
}
function bc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Yd(o, [...n])] : o, c = e[i];
  ef(n, c);
  const l = bc(
    e.slice(i + 1, s),
    Zd(t, i + 1),
    c.marker === En,
    n
  ), u = Yd(l, [...n]), d = e[s];
  ef(n, d);
  const f = bc(
    e.slice(s + 1),
    Zd(t, s + 1),
    d.marker === En,
    n
  );
  return [...a, u, ...f];
}
function Ar(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(gt(Ag() ? Lv(i) : i));
    else if (!i.type)
      vt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Bt.getType():
          n.push(pM(i, Ar(i.content)));
          break;
        case qt.getType():
          n.push(hM(i));
          break;
        case pt.getType():
          ee?.hasSpacing || n.push(aM), n.push(gM(i)), PM(i, n);
          break;
        case me.getType():
          n.push(
            mM(i, Ar(i.content, !0), t)
          );
          break;
        case rt.getType():
          n.push(yM(i, Ar(i.content)));
          break;
        case Ae.getType():
          n.push(_M(i, Ar(i.content)));
          break;
        case er.getType():
          cp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Ul?.push(i.sid)), n.push(SM(i)), AM(i, n);
          break;
        case Dr.getType():
          n.push(MM(i.marker ?? ""));
          break;
        case mh:
          n.push(bM(i, Ar(i.content)));
          break;
        case kh:
          n.push(kM(i, Ar(i.content)));
          break;
        case xh:
          n.push(TM(i, Ar(i.content)));
          break;
        default:
          vt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(vM(i, Ar(i.content)));
      }
  }), bc(n, r);
}
function kc(e) {
  const t = e.findIndex(
    (n) => Yc(n) || Dp(n) || Qc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    DT(n)
  );
  if (t >= 0) {
    const n = kc(e.slice(0, t)), i = e[t], s = kc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Nh(n)))
    return [Pg(e)];
  return e;
}
const kr = {
  initialize: cM,
  reset: lM,
  serializeEditorState: uM
};
function Ng(e) {
  if (e && !O(e)) {
    if (E(e)) return e;
    if (F(e))
      for (const t of e.getChildren()) {
        const r = Ng(t);
        if (r) return r;
      }
  }
}
function qM() {
  const e = q();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !O(t) ? On(t) : void 0) && E(t)) {
      const i = pe(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      di(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Ng(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(I) ? I : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of wg(e)) {
    if (!On(t)) continue;
    di(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(I) && r.setTextContent(n.slice(I.length));
  }
  return !0;
}
function wg(e) {
  const [t, r] = Uc(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || O(a) || ne(a, ae) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Og(e) {
  let t = e;
  for (; U(t) || be(t); ) t = t.getParent();
  return t;
}
function qg(e) {
  const t = Og(e.getParent());
  return tt(t) ? t : void 0;
}
function RM() {
  const e = q();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return On(t) ? !!qg(t) : !1;
}
function Rg(e) {
  const t = pe(""), r = e.getNode(), n = e.offset;
  if (E(r))
    if (n <= 0) r.insertBefore(t);
    else if (n >= r.getTextContentSize()) r.insertAfter(t);
    else {
      const [, o] = r.splitText(n);
      o.insertBefore(t);
    }
  else {
    const o = e.getNode(), a = F(o) ? o : o.getParent(), c = F(o) ? o.getChildAtIndex(n) : o;
    if (c) c.insertBefore(t);
    else if (a) a.append(t);
    else return { parent: void 0, moving: [] };
  }
  for (let o = t.getParent(); ; o = t.getParent())
    if (U(o)) di(t, { renderGlyphs: !0 });
    else if (!be(o) || !$M(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent() ?? void 0;
  return t.remove(), { parent: s, moving: i };
}
function $M(e, t) {
  const r = e.getNextSiblings();
  if (!e.getPreviousSibling())
    return t.insertBefore(e), !0;
  if (r.length === 0)
    return t.insertAfter(e), !0;
  const n = q();
  if (!N(n)) return !1;
  const i = t.insertNewAfter(n, !1);
  return i ? (i.append(...r), t.insertAfter(e), !0) : !1;
}
function $g(e) {
  const t = e.anchor.getNode();
  if (O(t) && !fl(t, e.anchor.offset)) {
    const r = t.getParent();
    if (U(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = q();
      return N(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function Ig() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = $g(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!E(r) || O(r) || !On(r)) return !1;
  const n = qg(r);
  if (!n) return !1;
  const { moving: i } = Rg(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; be(o); ) o = o.getFirstChild() ?? void 0;
  return U(o) ? Lo(o) : s.select(0, 0), !0;
}
const Lg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Up(Ke().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = q(), t = rl(e), r = yl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Jk(0, o);
        const a = Ax(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Hp(c) && nl(parseInt(n, 10), c);
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
function Tc(e, t) {
  return Ae.isValidMarker(e, t) || !!Lg[e] || rt.isValidMarker(e, t) || me.isValidMarker(e, t);
}
function IM(e, t) {
  return me.isNoteContentMarker(e) ? !1 : me.isValidMarker(e, t);
}
function Dg(e, t, r, n, i, s) {
  const o = Uh(
    e,
    void 0,
    void 0,
    t,
    n ?? Ko(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function xc(e, t, r, n, i, s, o) {
  if (Ae.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Dg(
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
  const a = KM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = q();
      N(u) && (pl(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = rd(d, kr, r), g = da(p);
      if (N(u)) {
        const h = u.anchor.getNode(), b = h.getParent(), x = On(h), T = u.anchor.key === u.focus.key;
        if (U(g) && x && T && !qa(g, o))
          UM(
            u,
            g,
            h,
            r?.markerMode === "editable"
          );
        else if (U(g) && !T && !qa(g, o) && FM(u))
          zM(u, g, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          BM(
            u,
            () => da(p)
          );
        else if (F(g) && !g.isInline()) {
          const v = u.insertParagraph();
          if (v) {
            const A = v.getChildren();
            g.append(...A), v.replace(g), tt(g) && Si(g) || g.selectStart();
          }
        } else if (U(g) && E(h) && !O(h) && U(h.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        qa(g, o)) {
          const v = h.getParent();
          if (U(v)) {
            const A = u.anchor.offset;
            if (A === 0) h.insertBefore(g);
            else if (A >= h.getTextContentSize()) h.insertAfter(g);
            else {
              const [D] = h.splitText(A);
              D.insertAfter(g);
            }
            g.getChildren().forEach((D) => {
              O(D) && D.setNested(!0);
            });
            const S = g.getChildren().find((D) => E(D) && !O(D));
            S && E(S) ? S.select(
              S.getTextContentSize(),
              S.getTextContentSize()
            ) : g.selectEnd();
          }
        } else if (E(h) && !O(h) && u.isCollapsed() && (j(b) || U(b) && j(b.getParent()))) {
          const v = U(b) ? b : void 0, A = v ? LM(h, u.anchor.offset) : [];
          let D = (v ?? h).insertAfter(g);
          if (Ir(g)) {
            const _ = {
              ...r || Ko(),
              markerMode: "hidden"
            }, w = rd(
              d,
              kr,
              _
            ), $ = da(w);
            D = D.insertAfter($);
          }
          if (A.length > 0 && v) {
            const _ = go(v).append(...A);
            D.insertAfter(_), v.isEmpty() && v.remove();
          } else E(D.getNextSibling()) || D.insertAfter(pe(I));
          F(D) && D.selectEnd();
        } else if (u.insertNodes([g]), ZM(g), f) {
          const v = zf();
          v.add(g.getKey()), Yr(v);
        } else if (U(g)) {
          const v = g.getChildren().find((A) => E(A) && !O(A));
          v && E(v) ? v.select(
            v.getTextContentSize(),
            v.getTextContentSize()
          ) : g.selectEnd();
        } else {
          const v = g.getNextSibling();
          v ? v.selectStart() : g.selectStart();
        }
      } else
        u?.insertNodes([g]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function LM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function qa(e, t) {
  return ((t ?? no).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function DM(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function UM(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && U(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !E(r)) {
    const o = e.anchor.offset;
    if (E(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else E(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
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
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(I) && i.setTextContent(I + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !O(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function FM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || U(n)) continue;
    if (!E(n) || n.getType() !== je.getType() || ne(n, ae) === "attribute") return !1;
    const i = HT(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    On(n) && (r = !0);
  }
  return r;
}
function zM(e, t, r) {
  const n = wg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!On(a)) return;
    di(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(I) && c.setTextContent(l.slice(I.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(I) || i.setTextContent(I + i.getTextContent());
  const s = t.getChildren().find((a) => E(a) && !O(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function KM(e, t) {
  let r = Lg[e];
  return r || (rt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: rt.getType(), marker: e, content: [] }] })
  } : me.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: me.getType(), marker: e };
      return (me.isValidFootnoteMarker(e) || me.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function BM(e, t) {
  const r = e.getNodes(), [n, i] = gi(e);
  let s;
  r.forEach((o, a) => {
    if (F(s) && s.isParentOf(o))
      return;
    const c = Ug(
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
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((d) => O(d) && d.getMarkerSyntax() === "opening") && DM(s, U(s.getParent()))), VM(c, s, l);
  }), (E(s) || F(s)) && s.selectEnd();
}
function gi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function zl(e) {
  return be(e) || j(e) || j(e.getParent());
}
function Ug(e, t, r, n, i) {
  if (!zl(e)) {
    if (E(e))
      return jM(e, t, r, n, i);
    if (F(e) && e.isInline())
      return e;
  }
}
function jM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function VM(e, t, r) {
  if (E(t)) {
    const n = _c(e, t);
    t.setTextContent(n), e.remove();
  } else if (F(t)) {
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
    _c(e, t), r && U(t) && t.getChildren().some((s) => O(s)) && E(e) && !O(e) && !e.getTextContent().startsWith(I) && e.setTextContent(I + e.getTextContent());
  }
}
function _c(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    gl(n), E(n) || t.insertBefore(pe(" "));
  }
  return r;
}
function Fg(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = Rn(u, t);
    if (!f) return !1;
    const p = E(u) ? u.getTextContentSize() : 0;
    if (tf(f, r), E(u) && u.isAttached()) {
      const g = u.getTextContentSize(), h = Math.max(p - g, 0), b = Math.max(0, Math.min(d - h, g)), x = q();
      N(x) && x.setTextNodeRange(u, b, u, b);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = gi(e);
  if (!Bl(n, t, s, o)) return !1;
  const a = Kl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = Rn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = jg(d, a);
    f && (tf(f, r), l = !0);
  }), Vg(a, i), l;
}
function tf(e, t) {
  e.getChildren().forEach((n) => {
    ct(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === zt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    E(n) && i.startsWith(I) && n.setTextContent(i.slice(I.length));
  }), Ka(e);
}
function Kl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Ug(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function Rn(e, t) {
  let r = e, n;
  for (; r && !tt(r); ) {
    if (j(r)) return;
    !n && U(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function zg(e) {
  const t = De(
    e,
    (r) => j(r) || tt(r)
  );
  return j(t);
}
function Kg(e) {
  return e.filter(
    (t) => !zl(t) && (E(t) || F(t) && t.isInline())
  );
}
function WM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || zl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function HM(e, t, r) {
  return e.getChildren().some(
    (n) => F(n) && t.some((i) => n.isParentOf(i)) && !Bg(n, r)
  );
}
function Bl(e, t, r, n, i) {
  const s = Kg(e), o = WM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Rn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !HM(l, s, o);
  });
}
function Bg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || ct(r));
}
function jg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (F(u) && t.some((d) => u.isParentOf(d))) {
      if (!Bg(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && ct(n[s - 1]) && (s -= 1), o < n.length - 1 && ct(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(go(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(go(e).append(...c)), e;
}
function go(e) {
  return tb(e);
}
function Vg(e, t) {
  const r = q(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function GM(e, t, r) {
  if (e.isCollapsed()) {
    const l = Rn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (zu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = gi(e);
  if (!Bl(n, r, i, s, t)) return !1;
  const o = Kl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Rn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = jg(u, o);
    d && (zu(d, t), c = !0);
  }), c;
}
function JM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (b) => b !== t
  ), s = e.getNodes(), [o, a] = gi(e);
  if (!!!i?.some(
    (b) => Bl(s, b, o, a)
  ) && !YM(s, t)) return !1;
  let l = !1;
  i?.forEach((b) => {
    const x = q();
    N(x) && Fg(x, b, n) && (l = !0);
  });
  const u = q();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = gi(u), g = Kl(
    u.getNodes(),
    f,
    p
  );
  if (g.length === 0) return l;
  const h = g.filter(
    (b) => !zg(b) && !Rn(b, t)
  );
  return h.length > 0 && (XM(h).forEach((b) => QM(b, t)), l = !0), Vg(g, d), l;
}
function YM(e, t) {
  return Kg(e).some(
    (r) => !zg(r) && !Rn(r, t)
  );
}
function XM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function QM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => U(a) && a.getMarker() === t
  ), s = i ? go(i) : wr(t);
  e[0].insertBefore(s), s.append(...e), i === r || _c(e[0], s);
}
function ZM(e) {
  ge(e) && (gl(e.getPreviousSibling()), Oh(e.getNextSibling()));
}
const Wg = {
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
}, rf = "psc-active-text", Ls = "psc-empty-text";
function eE({ viewOptions: e }) {
  const [t] = ce(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return B(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(rf), r.current = o, o && t.getElementByKey(o)?.classList.add(rf);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        So,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Ls}`);
          if (!c) return !1;
          const l = yi(c);
          if (!ge(l)) return !1;
          const u = l.getParent();
          if (!F(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        Ct
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Ra(), f = tE(), p = [], g = [];
          return Ke().getChildren().forEach((h) => {
            if (!F(h)) return;
            const { emptyKeys: b, nonEmptyKeys: x } = nE(h);
            p.push(...b), g.push(...x);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: g };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Ls) : t.getElementByKey(d)?.classList.add(Ls);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Ls));
      }),
      t.registerCommand(
        zc,
        () => (i(void 0), !1),
        Ct
      ),
      t.registerCommand(
        rb,
        () => {
          const o = t.getEditorState().read(Ra);
          return o !== r.current && i(o), !1;
        },
        Ct
      )
    ];
    return i(t.getEditorState().read(Ra)), Ve(...s);
  }, [t, n]), null;
}
function Ra() {
  return rE(q() ?? void 0)?.getKey();
}
function tE() {
  const e = q();
  if (!N(e)) return;
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
function rE(e) {
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function nE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ge(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ge(c)) break;
      if (!(Kt(c) || O(c)) && c.getTextContent().replaceAll(Gs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const iE = /^\+/;
function jl(e, t) {
  const r = t.replace(iE, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Hg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Gg(e, t) {
  return Hg(e, t) !== void 0;
}
function Cc(e, t) {
  const r = Hg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function mo(e, t, r) {
  const n = F(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function sE(e, t, r, n, i) {
  const s = jl(n, t);
  if (!s) {
    mo(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && mo(e, "invalid", i);
}
function si(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || sE(s, o, t, r, n), si(s, t, r, n, i || o === "xq");
    } else if (ge(s)) {
      if (i) continue;
      const o = jl(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? si(s, s.getMarker(), r, n, i) : Ue(s) || F(s) && si(s, t, r, n, i);
}
function oE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = jl(e, a);
    if (!c) {
      mo(o, "unknown", r), Cc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    Cc(n, l) || mo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ke().getChildren())
    Ue(o) || (Ce(o) ? (i(o, o.getMarker()), s(o) && si(o, void 0, e, r, !1)) : Ye(o) ? i(o, o.getMarker()) : oe(o) ? (i(o, o.getMarker()), s(o) && si(o, o.getMarker(), e, r, !1)) : F(o) && s(o) && si(o, "p", e, r, !1));
  return r;
}
function aE(e) {
  return !!e?.includes("(basic)");
}
function cE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Jg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Tc(e, t);
}
function Vl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Yg(e, t) {
  const r = [];
  for (const n of t) {
    const i = Vl(e, n);
    i && Cc(r, i);
  }
  return r;
}
function js(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: cE(e.description),
    isBasic: aE(e.description)
  };
}
function lE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Sc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : lE(e.marker, t.marker);
}
function vc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Yg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Jg(i.marker, r)
  ).filter((i) => {
    const s = Vl(e, i.marker);
    return s !== void 0 && Gg(n, s);
  }).map((i) => js(i, "paragraph")).sort(Sc);
}
function uE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Jg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => js(c, "character")).sort(Sc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => js(c, "character")),
    ...a.map((c) => js(c, "note"))
  ].sort(Sc);
}
function dE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function fE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function pE(e, t, r) {
  return [
    ...dE(e, t.openCharMarkers),
    ...uE(e, t, r)
  ].sort(fE);
}
function hE(e, t, r) {
  if (t.source === "paragraph") return vc(e, t, r);
  const n = pE(e, t, r);
  return n.length > 0 ? n : vc(e, t, r);
}
function gE(e, t, r) {
  const n = vc(e, t, r), i = Yg(e, t.previousParaMarkers), s = Vl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Gg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const ir = String.raw`\w-`, Xg = "a-z0-9", mE = `[a-z][${Xg}]*`, yE = new RegExp(
  String.raw`^\\(\+?[${ir}]+)[ \u00A0]$`
), Qg = new RegExp(String.raw`^\\(\+?[${ir}]+)$`), bE = new RegExp(String.raw`^\\\+?[${ir}]*\*$`), kE = new RegExp(
  String.raw`^\\(\+?[${ir}]+)(?:[ \u00A0]|$)`
), TE = new RegExp(
  String.raw`^\\(\+?)([${ir}]+)`
), xE = new RegExp(
  String.raw`\\\+?[${ir}]+(?:\\?\*|[ \u00A0])`
), _E = new RegExp(
  String.raw`\\\+?[${ir}]*$`
), CE = new RegExp(
  String.raw`^\\(${mE})( |$)`
), SE = new RegExp(
  String.raw`\\[${Xg}+*]*$`,
  "i"
), it = "￼";
function Zg(e) {
  return e.length > 1 && e.startsWith(I) && e.charAt(1) !== it ? e.slice(1) : e;
}
function nf(e) {
  return sl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function em(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = kr.serializeEditorState(
    {
      type: mr,
      version: gr,
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
  for (; nf(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== wt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && nf(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function tm(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = kr.serializeEditorState(
    { type: mr, version: gr, content: [s, ...r] },
    n
  ).root.children;
  if (!Yc(o)) return { failure: "shape" };
  const c = Vp(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function Ds(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Fi(e, t) {
  _E.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += it;
}
function Dt(e) {
  return e.replaceAll(I, " ");
}
function vE(e, t, r = !1) {
  if (Bo(t)) return Dt(e);
  if (e === I) return " ";
  const n = r && e.startsWith(I), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(I, "~");
}
function Ji(e) {
  const t = e.getTextContent();
  return cn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Wl(e, t) {
  const r = e[t];
  if (!He(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Ro(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function rm(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Hl(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = ns(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Gl(e) {
  return !!e.getUnknownAttributes();
}
function Ho(e, t) {
  const r = t(e)?.type;
  return r === y.Milestone || r === void 0 && Hc(e);
}
function Jl(e, t) {
  return He(e) ? !Ho(e.getMarker(), t) : j(e) || Ue(e) ? !0 : we(e) ? Gl(e) : U(e) ? nm(e, t) : !1;
}
function nm(e, t) {
  if (sT(e)) return !0;
  const r = e.getMarker();
  return !Gb(r) && t(r) === void 0;
}
const It = "", Lt = "";
function sf(e) {
  return e.flatMap((t) => Le(t) ? t.getChildren() : [t]);
}
function ji(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (He(s)) {
      const o = Wl(e, i);
      Ho(s.getMarker(), r) && rm(o) ? (t.push(
        It,
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
      ), ji(sf(o), t, r), t.push(Lt)) : t.push(it), i += o.length;
    } else if (we(s)) {
      const o = Hl(e, i);
      Gl(s) ? t.push(it) : (t.push(
        It,
        "verse",
        Dt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), ji(sf(o), t, r), t.push(Lt)), i += o.length;
    } else O(s) ? t.push(It, "marker", Dt(s.getTextContent()), Lt) : un(s) ? t.push(It, "unmatched", Dt(s.getTextContent()), Lt) : Jl(s, r) ? t.push(it) : Ts(s) ? t.push(" ") : E(s) ? t.push(
      Dt(
        n ? Zg(Ji(s)) : Ji(s)
      )
    ) : U(s) ? (t.push(It, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), ji(s.getChildren(), t, r, !0), t.push(Lt)) : F(s) ? (t.push(It, s.getType()), ji(s.getChildren(), t, r), t.push(Lt)) : t.push(it);
  }
}
function Tr(e, t) {
  const r = [];
  return ji(e, r, t), r.join("");
}
function xr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function mi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Yl(e) {
  return e.type ?? "";
}
function im(e, t, r) {
  return t === "closing" ? st(e, r) : t === "selfClosing" ? st("") : Oe(e, r);
}
function $a(e, t) {
  const r = e[t];
  if (!(!r || Yl(r) !== "attribute-run"))
    return xr(r) ?? [];
}
function _r(e, t) {
  const r = [];
  return Vi(e, r, t), r.join("");
}
function Vi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Yl(s);
    if (o === "ms") {
      const l = s, u = $a(e, i + 1);
      u && Ho(l.marker ?? "", r) ? (t.push(
        It,
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
      ), Vi(u, t, r), t.push(Lt), i += 1) : t.push(it);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(it);
        continue;
      }
      t.push(
        It,
        "verse",
        Dt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = $a(e, i + 1 + u);
      for (; d; )
        Vi(d, t, r), u++, d = $a(e, i + 1 + u);
      t.push(Lt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        It,
        "marker",
        Dt(
          im(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Lt
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(It, "char", JSON.stringify(l.unknownAttributes ?? null)), Vi(xr(s) ?? [], t, r, !0), t.push(Lt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(it);
      continue;
    }
    if (o === "unmatched") {
      t.push(It, "unmatched", Dt(mi(s) ?? "")), t.push(Lt);
      continue;
    }
    const a = mi(s);
    if (a !== void 0) {
      t.push(Dt(n ? Zg(a) : a));
      continue;
    }
    const c = xr(s);
    c ? (t.push(It, o), Vi(c, t, r), t.push(Lt)) : t.push(it);
  }
}
function vi(e) {
  let t = 0;
  for (const r of e) {
    const n = xr(r);
    if (n) {
      t += vi(n);
      continue;
    }
    const i = mi(r);
    if (i !== void 0)
      for (const s of i) s === it && t++;
  }
  return t;
}
function ps(e, t, r, n, i) {
  on(e.getChildren(), t, r, n, i);
}
function on(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      Ds(t, a, Dt(a.getTextContent()));
    else if (He(a)) {
      s();
      const c = Wl(e, o);
      Ho(a.getMarker(), r) && rm(c) ? on(c, t, r, n) : Fi(t, [a, ...c]), o += c.length;
    } else if (j(a) || Ue(a))
      s(), Fi(t, [a]);
    else if (we(a)) {
      s();
      const c = Hl(e, o);
      Gl(a) ? Fi(t, [a, ...c]) : (Ds(t, a, Dt(Ji(a))), on(c, t, r, n)), o += c.length;
    } else if (U(a))
      s(), nm(a, r) ? Fi(t, [a]) : ps(a, t, r, n, { pending: !0 });
    else if (Ts(a))
      s(), Ds(t, a, " ");
    else if (E(a)) {
      const c = cn(a) || ne(a, ae) === "attribute", l = s() && !c;
      Ds(
        t,
        a,
        c ? Dt(Ji(a)) : vE(Ji(a), n, l)
      );
    } else F(a) ? ps(a, t, r, n, i) : (s(), Fi(t, [a]));
  }
}
function sm(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== y.Unknown && n !== y.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ue(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ps(e, i, t, r), i;
}
function Go(e, t, r, n) {
  for (const i of t) {
    const s = sm(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Xl(e, t) {
  let r = 0;
  const n = (i) => {
    if (E(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(it);
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
function hs(e, t = []) {
  for (const r of e)
    we(r) ? t.push(r) : F(r) && hs(r.getChildren(), t);
  return t;
}
function Ql(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === it && t++;
    else F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Ur(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === it && t++;
    else r.content && (t += Ur(r.content));
  return t;
}
function ME(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), F(i) && ps(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const gs = /\s/;
function om(e) {
  return e.filter(Jo).length;
}
function Jo(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return E(t) && !O(t) && ne(t, ae) === "attribute";
}
function EE(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return O(t) || Jo(e);
}
function of(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Jo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      gs.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function AE(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !F(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = ie(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function Yo(e, t, r, n) {
  const { key: i, offset: s } = AE(
    e,
    t,
    r,
    n
  ), o = of(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !EE(a) ? of(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: om(t.spans) };
}
function Ia(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function PE(e) {
  const t = ie(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return U(r) ? (r.selectNext(0, 0), !0) : !1;
}
function NE(e) {
  const t = ie(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = we(t) ? Hl(r, n) : He(t) ? Wl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function am(e, t, r) {
  const { text: n, spans: i } = e, s = om(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !Ia(d);
    if (!(o && Jo(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let g = 0; g < f; g++) {
        const h = n[d.start + g];
        if (c === 0 && (l === 0 || !gs.test(h))) {
          if (p) {
            a = { key: d.key, offset: g };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? gs.test(h) || c-- : l--;
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
    if (d && Ia(d) && PE(d) || d?.isSentinel && NE(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Ia(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = ie(a.key);
    if (d && E(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(F)?.selectStart();
}
function cm(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(F)?.selectStart();
      return;
    }
    am(ME(e, n, i), t, e);
  }
}
function lm(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    wE(e, n);
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  on(e, s, n, i), am({ text: s.text, spans: s.spans }, t, e);
}
function wE(e, t) {
  const r = e.find(F);
  if (r && Jl(r, t)) {
    const n = r.getParent();
    if (n) {
      const i = r.getIndexWithinParent();
      n.select(i, i);
      return;
    }
  }
  r?.selectStart();
}
function um(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Go(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = q();
  if (N(c)) {
    for (let h = c.anchor.getNode(); h; h = h.getParent())
      if (e.some((b) => b.is(h))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Yo(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = Cr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Ur(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = kr.serializeEditorState(
    { type: mr, version: gr, content: l },
    r
  );
  if (_r(u.root.children, n) === Tr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((h) => oi(h));
  if (Ql(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = hs(e).map((h) => ({
    number: h.getNumber(),
    sid: h.getSid()
  })), p = e[0];
  d.forEach((h) => p.insertBefore(h)), Xl(d, s.sentinels), e.forEach((h) => h.remove());
  const g = hs(d);
  for (let h = 0; h < f.length && h < g.length; h++)
    g[h].getNumber() === f[h].number && g[h].setSid(f[h].sid);
  return cm(d, o, a, n, r), !0;
}
function dm(e) {
  if (e.getIsCollapsed() !== !1 || !Ae.isValidMarker(e.getMarker())) return;
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const o = t[r];
    if (!O(o) || o.getMarkerSyntax() !== "opening") break;
    r++;
  }
  const n = t[r];
  if (!n || !(Et(n) || E(n) && n.getTextContent() === wt(e.getCaller()))) return;
  r++;
  let s = t.length;
  for (; s > r; ) {
    const o = t[s - 1];
    if (!O(o) || o.getMarkerSyntax() !== "closing") break;
    s--;
  }
  return t.slice(r, s);
}
function fm(e, t, r) {
  const n = dm(e);
  if (!n) return;
  const i = { text: "", spans: [], sentinels: [] };
  return on(n, i, t, r), { out: i, contentNodes: n };
}
function pm(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(it)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function OE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = fm(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = q();
  if (N(u)) {
    for (let S = u.anchor.getNode(); S; S = S.getParent())
      if (e.is(S)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Yo(
      [e],
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const d = Cr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Ur(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], g = pm(p), h = em(e, p, g, r);
  if (h.failure !== void 0)
    return h.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      h.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (vi(h.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== g;
  if (b && e.setCategory(g), _r(h.children, n) === Tr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const x = h.children.map((S) => oi(S));
  if (Ql(x) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const T = a[0];
  if (T)
    x.forEach((S) => T.insertBefore(S));
  else {
    const S = e.getChildren().find((D) => O(D) && D.getMarkerSyntax() === "closing");
    x.forEach((D) => S ? S.insertBefore(D) : e.append(D));
  }
  Xl(x, o.sentinels);
  const v = new Set(o.sentinels.flat().map((S) => S.getKey()));
  a.forEach((S) => {
    v.has(S.getKey()) || S.remove();
  });
  const A = dm(e) ?? x;
  return lm(
    A,
    c,
    l,
    n,
    r
  ), !0;
}
function hm(e) {
  const t = e.getChildren();
  return ct(t[0]) ? t.slice(1) : t;
}
function Zl(e, t, r) {
  const n = hm(e), i = { text: "", spans: [], sentinels: [] };
  return on(n, i, t, r), { out: i, contentNodes: n };
}
const qE = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${Ut}(?=[\\s\\u200B\\\\|]|$)`
);
function gm(e, t) {
  const r = Cr(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === Ut && !qE.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function mm(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = Zl(e, i, n);
  if (!Go(o, r, i, n))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: paragraph excluded by guard rails"), !1;
  const c = [e, ...r];
  let l, u = !1;
  const d = q();
  if (N(d)) {
    for (let _ = d.anchor.getNode(); _; _ = _.getParent())
      if (c.some((w) => w.is(_))) {
        u = !0;
        break;
      }
    d.isCollapsed() && (l = Yo(
      c,
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const f = gm(o.text, i);
  if (Ur(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = tm(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const g = [...p.children, ...p.followingBlocks];
  if (vi(g) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && _r(p.followingBlocks, i) === Tr(r, i) && _r(p.children, i) === Tr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const h = p.children.map((_) => oi(_)), b = p.followingBlocks.map((_) => oi(_)), x = [...h, ...b];
  if (Ql(x) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const T = hs([...a, ...r]).map((_) => ({
    number: _.getNumber(),
    sid: _.getSid()
  })), v = a[0];
  v ? h.forEach((_) => v.insertBefore(_)) : h.forEach((_) => e.append(_)), b.reduce((_, w) => _.insertAfter(w), e), Xl(x, o.sentinels);
  const A = new Set(o.sentinels.flat().map((_) => _.getKey()));
  a.forEach((_) => {
    A.has(_.getKey()) || _.remove();
  }), r.forEach((_) => _.remove());
  const S = [...hm(e), ...b], D = hs(S);
  for (let _ = 0; _ < T.length && _ < D.length; _++)
    D[_].getNumber() === T[_].number && D[_].setSid(T[_].sid);
  return lm(
    S,
    l,
    u,
    i,
    n
  ), !0;
}
const ym = /* @__PURE__ */ new Set(["ca", "cp"]), eu = "cp";
function bm(e) {
  if (!br(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ps(e, t, hr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Cr(r, { getMarker: hr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === eu)
  );
}
function Xo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (U(r) && ym.has(r.getMarker()) || bm(r)) {
      t.push(r);
      continue;
    }
    oe(r) && r.getMarker() === eu && t.push(r);
    break;
  }
  return t;
}
function RE(e) {
  const t = (n) => U(n) && ym.has(n.getMarker()) || bm(n);
  if (t(e) || oe(e) && e.getMarker() === eu)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ne(n)) return n;
      if (!t(n)) return;
    }
}
function km(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Xo(e);
  if (n.some((s) => oe(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (on(e.getChildren(), i, t, r), on(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function $E(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Xo(e)], o = km(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = q();
  if (N(l)) {
    for (let g = l.anchor.getNode(); g; g = g.getParent())
      if (s.some((h) => h.is(g))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Yo(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const u = Cr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Ur(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = kr.serializeEditorState(
    { type: mr, version: gr, content: u },
    r
  );
  if (_r(f.root.children, n) === Tr(s, n)) {
    let g = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), g = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), g = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const p = f.root.children.map((g) => oi(g));
  return Ne(p[0]) ? (p.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), cm(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ms(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ue(n)) return;
    !t && (j(n) || oe(n) || Ne(n) || Ce(n)) && (t = n), nb(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? RE(r) : void 0) ?? t;
}
function Xt(e, t) {
  const r = ms(e);
  return r ? j(r) ? OE(r, t) : Ne(r) ? $E(r, t) : Ce(r) ? mm(r, t) : um([r], t) : !1;
}
const IE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function af(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !IE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Vs(e, t) {
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
          t.push(`\\${n}`), af(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Vs(r.content, t), af(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Vs(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Vs(r.content, t);
      }
    }
}
function cf(e, t, r) {
  const n = ms(e);
  if (!Fe(n)) return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Ce(n) ? Zl(n, t, r).out : sm(n, t, r);
  if (!o) return !1;
  const a = Cr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    gs.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Vs(a, l);
  for (const u of l.join("").replaceAll(I, "~")) {
    if (gs.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function tu(e, t) {
  return Tm(e, t, y.Paragraph);
}
function LE(e, t) {
  return Tm(e, t, y.Character);
}
function Tm(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== y.Unknown ? i === r : !(Ae.isValidMarker(n) || Hc(n));
}
function DE(e) {
  return [lt(e), wo()];
}
function ru(e) {
  rr(e, 2);
}
function UE(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Qo(e) {
  const t = UE(e);
  e.splice(0, 0, DE(e.getMarker())), t && ru(e);
}
function yo(e, t) {
  e.setMarker(t), Qo(e), ru(e);
}
function FE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!cn(n)) {
    if (E(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(I), Tt(n, ae, Sr), n.setMode("token");
      return;
    }
    if (Jp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(wo());
  }
}
function lf(e, t, r) {
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
function Yi(e) {
  for (let t = e; t; t = t.getParent())
    if (oe(t)) return t;
}
function zE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Yi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Yi(r.getNode())?.is(s) ?? !1, a = Yi(n.getNode())?.is(s) ?? !1;
    return !(o && !lf(r, s, "start") || a && !lf(n, s, "end"));
  });
}
function Mc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = q();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of zE(r)) t.add(n.getKey());
}
function KE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = q();
  if (!N(r) || !r.isCollapsed()) return;
  const n = Yi(r.focus.getNode());
  n && t.add(n.getKey());
}
function BE(e) {
  const t = q();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (Mc(e), t.removeText());
}
const jE = new RegExp(
  String.raw`^\\\+?([${ir}]+)(?:[ \u00A0]|$)`
);
function VE(e, t) {
  const r = jE.exec(e.getTextContent());
  return !!r && tu(r[1], t);
}
function WE(e, t) {
  if (!Fn(t.viewOptions)) return;
  if (ct(e.getFirstChild())) {
    FE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (VE(e, t.getMarker)) return;
    Qo(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => oe(o) && !o.is(e))) {
      yo(e, Ut), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (Fe(r)) {
    const n = e.getChildren().filter((a) => !cn(a)), i = q();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Yi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || F(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && rr(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  yo(e, Ut);
}
function HE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = fr(t, Ao(e.getMarker()));
  return r === "" ? void 0 : r;
}
function GE(e) {
  const t = e.getChildren().filter((s) => !O(s) && ne(s, ae) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(I) && r.setTextContent(r.getTextContent().slice(1));
  const n = HE(e);
  n && t.push(pe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function JE(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !O(c) && c.getTextContent() === wt(s)
    ), a = bi(e).some(({ node: c }) => O(c));
    if (!o && !a) return;
    r.forEach((c) => {
      O(c) || (E(c) && c.getTextContent() === wt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => O(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function YE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    GE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && Xt(e, t);
}
function xm(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && Fn(r)) {
    yo(e, t);
    return;
  }
  Gh(e, t);
}
function _m() {
  const e = q();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = Cm(e);
    return t !== "removed" ? t : (Ec(), "handled");
  }
  return Ec() ? "handled" : "declined";
}
function XE(e, t) {
  if (!t) return e;
  const r = CE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== y.Paragraph ? e : e.slice(r[0].length);
}
function uf(e, t) {
  const r = q();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Sm())
      return "declined";
  } else {
    const s = Cm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => XE(s, t)
  );
  df(n ?? "");
  for (const s of i)
    Ec(), df(s);
  return "handled";
}
function QE(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = yi(n);
  if (!i) return !1;
  const s = tr(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function Cm(e) {
  const t = tr(e.anchor.getNode()), r = tr(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), ZE() ? "removed" : "needs-plain-split");
}
function df(e) {
  if (e === "") return;
  const t = q();
  N(t) && t.insertText(e);
}
function ZE() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = tr(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function Sm() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = tr(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Ec() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Sm();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = wr("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = E(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
    u && (Yk(u), i.append(u));
  }
  return i.getChildren().every(O) && i.append(pe(zt)), vm(i), !0;
}
function vm(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (E(t)) {
    const r = t.getTextContent().startsWith(I) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (F(t)) {
    vm(t);
    return;
  }
  e.selectEnd();
}
function eA(e) {
  const t = [];
  let r = e;
  for (; r; )
    U(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function tA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ke().getChildren()) {
    if (t && n.is(t)) {
      Ce(n) && r.push(n.getMarker());
      break;
    }
    (Ce(n) || Ye(n) || oe(n)) && r.push(n.getMarker());
  }
  return r;
}
function rA(e) {
  let t = e;
  for (; F(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function nA(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (ct(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && cn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(rA(i)) && r === 0 : !1;
}
function iA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !ct(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && cn(i) && t.is(i) && r === 0;
}
function sA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function oA() {
  const e = q();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = De(t, oe), s = i ? void 0 : De(t, Ce), o = !n && !s && (!i || iA(i, t, r)) ? "paragraph" : "character", a = tr(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: tA(t),
    openCharMarkers: eA(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: fl(t, r),
    anchorRect: sA()
  };
}
function aA() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = SE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function cA(e, t, r) {
  xm(e, t, r), ru(e);
}
function lA(e, t, r) {
  const n = q();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = De(i, oe);
  if (t === "backslash" && s && nA(s, i, n.focus.offset)) {
    cA(s, e, r);
    return;
  }
  Ac(e, r);
}
function Mm(e, t) {
  const r = e.getNode(), n = Og(F(r) ? r : r.getParent());
  return t.is(n);
}
function uA(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !Mm(e, t);
}
function bo(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function dA(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!O(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!U(r)) return e;
  const n = r.getParent();
  return n ? Fa(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function fA(e, t, r) {
  const n = q();
  if (!N(n)) return !1;
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!Mm(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && uA(s, e)) return !1;
  const o = ct(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (bo(n.anchor, e, o), bo(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = q();
  if (!N(a) || !a.isCollapsed()) return !1;
  const c = $g(a);
  if (!c) return !1;
  const { parent: l, moving: u } = Rg(
    dA(c.anchor)
  );
  if (!e.is(l)) return !1;
  const d = u.filter((g) => !g.is(o)), f = ci(t);
  e.insertAfter(f), f.append(...d);
  const [p] = d;
  return U(p) ? Lo(p) : f.select(0, 0), Fn(r) && Qo(f), !0;
}
function pA(e, t) {
  const r = q();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Em(e) {
  const t = q();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function hA(e) {
  const t = De(e.anchor.getNode(), Ce);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !ct(r) || (bo(e.anchor, t, r), bo(e.focus, t, r));
}
function gA(e, t, r, n) {
  const i = q();
  if (N(i) ? hA(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && aA(), e.kind === "closeTag") {
    Em(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && _m() !== "declined") return;
  if (e.kind === "paragraph" && rt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    lA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ae.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Dg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  xc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: ai(), reference: r });
}
function Ac(e, t) {
  const r = q();
  if (!N(r)) return !1;
  pl(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!De(n, oe)) {
    const o = De(n, Ce);
    if (o) return fA(o, e, t);
  }
  const i = Fn(t);
  if (Ig()) {
    const o = q();
    if (!N(o)) return !1;
    const a = De(o.anchor.getNode(), oe);
    return a ? (a.setMarker(e), i && Qo(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return oe(s) ? (i ? yo(s, e) : s.setMarker(e), !0) : !1;
}
function mA() {
  const [e] = ce();
  return B(() => e.registerCommand(jf, () => !0, Ct), [e]), null;
}
function yA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = kE.exec(e)?.[1];
  return r === void 0 ? !1 : !tu(r, t);
}
function Am(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !yA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!oe(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== y.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!oe(i) && !Ce(i)))
    return [i, r];
}
function Pm(e, t) {
  const r = Am(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return Ce(n) ? mm(n, t, [i]) : um([n, i], t);
}
function bA(e, t) {
  const r = q();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Nm(e) {
  const t = TE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function kA(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Nm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function TA(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if (U(n)) {
      Lo(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function ff(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Nm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  TA(e);
}
function pf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function wm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Xt(e, r);
  const n = kA(e), i = e.getParent();
  if (oe(i)) {
    if (!tu(t, r.getMarker))
      return Pm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Xt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), pf(s, t) && ff(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? LE(t, r.getMarker) : Ae.isValidMarker(s)))
      return Xt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Xt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (bA(c, st(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), pf(a, s) && ff(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Xt(e, r);
}
function xA(e) {
  const t = q();
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
function _A(e, t) {
  const r = e.getTextContent();
  if (ln(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Le(e.getParent()) && ol(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !xA(e)) {
    nT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = yE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), wm(e, n[1], t);
      return;
    }
    if (bE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Xt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = st(e.getMarker(), e.getNested());
    if (U(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = q(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = pe(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function CA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (gh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Om(e) {
  if (!rp(e)?.length)
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
const zi = Om("v"), SA = Om("c"), hf = /^[ \u00A0]*$/;
function gf(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === je.getType() && n.getMode() === "normal" && ne(n, ae) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = pe(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function vA(e, t) {
  const r = e.getTextContent(), n = Ft("v", e.getNumber());
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
    if (l && hf.test(l[2] ?? "")) {
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
      const [, l, u, d] = c, f = q(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Ft("v", u));
      const g = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      gf(e, d, g);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Xt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), hf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Ft("v", o)), a && gf(e, a, a.length);
}
const MA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function EA(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !rp(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!O(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === wt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = MA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(wt(a)), !0;
}
function AA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = Ft("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = SA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function qm(e) {
  if (He(e)) {
    const { wrapper: t } = Ro(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = th(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ne(e)) {
    const t = [], r = rh(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = ih(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (we(e)) {
    const t = [], r = ns(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = ns(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function PA(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return qm(e).some((n) => r.is(n));
}
function NA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && oe(e) && Jp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ss)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ms(l, e) && (i || PA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of qm(e))
    l.remove(), n = !0;
  let s = !1;
  if (U(e)) {
    const l = cT(e);
    l !== void 0 && jb(l) && (ah(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of ss)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (nx(l, e)) {
        as(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Sh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Do(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function mf(e) {
  return E(e) && e.getType() === je.getType() && e.getMode() === "normal" && ne(e, ae) !== "attribute";
}
function wA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ie(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && mf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && mf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Us(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = wA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ie(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (ln(c)) continue;
      const g = Qg.exec(p);
      c.getMarkerSyntax() === "opening" && g ? n = wm(c, g[1], e) || n : r === "idle" && cf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Pm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Xt(c, e) || n;
      continue;
    }
    const l = wn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = NA(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && cf(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Xt(u, e) || n;
    }
  }
  return n;
}
function Rm(e) {
  if (un(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return Wi(t) !== void 0;
  return !1;
}
function OA(e) {
  const t = wn(e);
  if (!t) return !1;
  const r = Nn(t.kind);
  return !Do(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function yf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (Ue(t) || bh(t)) return !0;
  return !1;
}
function qA(e, t) {
  const r = e.getTextContent(), n = ne(e, ae), i = e.getParent();
  if (n !== "attribute" && Ne(i)) {
    r.replace(/^[ \u00A0]+/, "") === Ft("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (EA(e, t)) return;
  if (n === "attribute") {
    OA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Rm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !yf(e))
      t.pendingKeys.add(e.getKey());
    else if (sh(e)) t.pendingKeys.add(e.getKey());
    else if (Ne(ms(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      U(a) && ch(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (yf(e)) return;
  const s = q(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (xE.test(o)) {
    if (Zb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Xt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function RA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Sh(e, t);
}
function $A(e) {
  const t = (r) => {
    if (O(r)) {
      ln(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (un(r)) {
      gh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of ss)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ms(n, r) || RA(n, r)) && e.pendingKeys.add(r.getKey());
    if (we(r)) {
      r.getTextContent() !== Ft("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== je.getType() || ne(r, ae) === "attribute") return;
      const n = r.getParent();
      if (Ne(n)) {
        r.getTextContent() !== Ft("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Rm(r) || i.includes("//") || sh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (U(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ue(r)) {
      if (Le(r) && r.getChildrenSize() === 0) {
        const n = wn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      F(r) && r.getChildren().forEach(t);
    }
  };
  Ke().getChildren().forEach(t);
}
const ko = "usfm:", $m = "usfmopen", Im = "usfmclosed";
function IA(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const LA = new RegExp(
  [ko, $m, Im].map(IA).join("|")
), DA = "\uFEFF", UA = /^usfm_(.+)$/;
function FA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function zA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function KA(e) {
  return e.startsWith(ko) ? zA(e.slice(ko.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Lm(e) {
  for (const t of e.classList) {
    const r = UA.exec(t);
    if (r) return r[1];
  }
}
function BA(e) {
  const t = Lm(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function jA(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(ko)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains($m) && !n.contains(Im)) && Lm(r) !== void 0)
      return !0;
  }
  return !1;
}
function Dm(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(KA(e.nodeValue ?? ""));
    return;
  }
  if (!FA(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => Dm(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? BA(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function VA(e) {
  if (!LA.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !jA(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => Dm(n, !1, r)), r.join("").replaceAll(DA, "").replaceAll(I, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function WA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, ae);
  if (r === "attribute" || r === Sr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Ne(o) || Ue(o)) return;
  const n = t.startsWith(I) && U(e.getParent()), i = n ? t.slice(1) : t, s = (n ? I : "") + i.replace(/ (?=[ \u00A0])/g, I).replace(new RegExp("(?<=\\u00A0) ", "g"), I);
  s !== t && e.setTextContent(s);
}
function HA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function GA(e, t) {
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
function Pc(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? VA(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(HA(s)) : ""),
    isInternal: GA(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const bf = String.raw`\\(?:\+?[${ir}]+\*?|\*)`, JA = new RegExp(
  String.raw`(?<=${bf})\u00A0|\u00A0(?=${bf})`,
  "g"
);
function nu(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(JA, " ").replaceAll(I, "~");
}
const Um = new RegExp(
  String.raw`\\c(?![${ir}])[ \u00A0]*[^\s\\]*`,
  "g"
), Fm = new RegExp(String.raw`\\id(?![${ir}])[^\n\\]*`, "g"), YA = new RegExp(
  String.raw`^(?:${Um.source}|${Fm.source})`
);
function iu(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Um, "").replace(Fm, "");
    return YA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function Nc(e) {
  if (E(e) && ne(e, ae) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Le(t)) return !0;
  return !1;
}
function XA(e) {
  return Nc(e.anchor.getNode()) || Nc(e.focus.getNode());
}
function QA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && Nc(t.getNode());
}
function ZA(e, t) {
  const n = QA(e) ? t : nu(iu(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function e1(e, t = !1, r = () => {
}) {
  const n = Pc(e, ai()._config.namespace);
  if (!n) return !1;
  const i = q(), s = N(i) && XA(i);
  if (!s && n.isInternal || t && N(i) && ii(i))
    return !1;
  const { text: o } = n;
  if (!o || !N(i)) return !1;
  if (e?.preventDefault(), s)
    return ZA(i, o), !0;
  const a = nu(iu(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = ai();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Ws, void 0), u === "") return;
    const f = q();
    N(f) && f.insertText(u);
  }), !0;
}
function t1(e) {
  if (e.getTextContent() !== I) return !1;
  const t = e.getParent();
  return j(t) ? !Et(e.getPreviousSibling()) : !1;
}
function r1(e, t) {
  if (t || e.getTextContent() !== I) return "";
  const r = e.getParent();
  if (!j(r) || !Et(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function n1(e) {
  const t = e.getParent();
  return (j(t) ? t.getCaller() : void 0) || Qi;
}
function i1(e) {
  const t = e.getParent();
  return !t || nn(t) === void 0;
}
function zm(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Uc(e);
  let l = "", u = !0;
  for (const d of t) {
    if (F(d) && !d.isInline()) {
      !u && i1(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, Et(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + n1(d));
    else if (E(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += t1(d) ? "" : f.replaceAll(I, " ") + r1(d, d === n);
    } else (Mo(d) || Ts(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(I, " "));
  }
  return l;
}
function Km(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function s1(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => Ce(r) || Ne(r)
    )
  );
}
function o1(e) {
  const t = q();
  if (!N(t) || t.isCollapsed()) return;
  const r = zm(t), n = {
    "text/plain": r,
    "text/html": Km(r)
  };
  if (jo() || s1(t)) return n;
  const i = ab(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function kf(e, t, r) {
  const n = q();
  if (!N(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !ag();
  const i = o1(t);
  return i ? Bm(e, t, n, i, r) : !1;
}
function Bm(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || cb(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const jm = Vf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function La(e) {
  const t = e();
  return Qr(Lf), Qr(op), t;
}
const Tf = 8, a1 = 1e3;
function Zn(e, t) {
  const r = we(e) ? ["va", "vp"] : He(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    cx(Nn(n), e, t.pendingKeys);
}
function c1(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Kc) || i.updateTags.has(Zi)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ie(o);
        if (!c) continue;
        const l = wn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ie(o.getKey());
        c?.isAttached() && Nn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(je, r),
    e.registerMutationListener(Mr, r),
    e.registerMutationListener(Rr, r),
    e.registerMutationListener($r, r)
  );
}
function wc(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = q();
  return r ? t ? gg(r, t) : N(r) && ii(r) : !1;
}
function l1(e, t, r) {
  return Ve(
    e.registerCommand(
      pr,
      (n) => {
        if (jo() || wc(t)) return !1;
        const i = Pc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? nu(iu(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = uf(o, t.getMarker);
          if (a === "declined" && QE(e) && (a = uf(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      _t
    ),
    e.registerCommand(
      pr,
      (n) => {
        const i = Pc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !RM()) return !1;
        const o = q();
        return t.structureProtectionMode === "protected" && N(o) && ii(o) ? !1 : (n?.preventDefault(), N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ws, void 0), a === "") return;
          const l = q();
          N(l) && l.insertText(a);
        }), !0);
      },
      ve
    ),
    e.registerCommand(
      pr,
      () => (t.splitExpected.current = !0, !1),
      Ct
    )
  );
}
function u1({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = ce(), o = e?.markerMode === "editable", a = !!e && Bo(e), c = Z(void 0), l = Z(n);
  return B(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? hr, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), B(() => {
    if (!o || !e) return;
    const u = {
      viewOptions: e,
      getMarker: t ?? hr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    c.current = u;
    const d = ZT(s, u.pendingKeys);
    let f, p = !1, g, h = !1, b = !1, x = 0;
    const T = () => x < Tf ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Tf} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), v = (_, w = "departure") => {
      s.update(() => {
        x = La(
          () => Us(u, _, w)
        ) ? x + 1 : 0;
      });
    };
    let A;
    const S = () => {
      if (A !== void 0 && clearTimeout(A), A = void 0, b || u.pendingKeys.size === 0) return;
      const _ = l.current ?? a1;
      _ < 0 || (A = setTimeout(() => {
        A = void 0, !(b || u.pendingKeys.size === 0) && (p || T() || v(void 0, "idle"));
      }, _));
    }, D = Ve(
      s.registerNodeTransform(Mr, (_) => {
        if (s.isComposing()) return;
        _A(_, u);
        const w = wn(_);
        w && (we(w.owner) || j(w.owner) || Ne(w.owner) || He(w.owner) && Ro(w.owner).wrapper === void 0) && Zn(w.owner, u);
      }),
      s.registerNodeTransform(pt, (_) => {
        s.isComposing() || (vA(_, u), Zn(_, u));
      }),
      s.registerNodeTransform(qt, (_) => {
        s.isComposing() || (AA(_), _.isAttached() && Zn(_, u));
      }),
      s.registerNodeTransform(rt, (_) => {
        s.isComposing() || WE(_, u);
      }),
      s.registerNodeTransform(me, (_) => {
        if (!s.isComposing()) {
          YE(_, u);
          for (const w of ["separator", "char"])
            _.isAttached() && Ms(Nn(w), _) && u.pendingKeys.add(_.getKey());
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
      s.registerNodeTransform(er, (_) => {
        s.isComposing() || Zn(_, u);
      }),
      s.registerNodeTransform($r, (_) => {
        if (s.isComposing()) return;
        const w = wn(_);
        w && (He(w.owner) || we(w.owner) || j(w.owner) || Ne(w.owner)) && Zn(w.owner, u);
      }),
      s.registerNodeTransform(Ae, (_) => {
        s.isComposing() || (JE(_, u), Zn(_, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Dr, (_) => {
        s.isComposing() || CA(_, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(je, (_) => {
        s.isComposing() || qA(_, u);
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
        je,
        (_) => {
          s.getEditorState().read(() => {
            for (const [w, $] of _) {
              if ($ === "destroyed") continue;
              const G = ie(w);
              !G || ne(G, ae) !== "attribute" || Le(G.getParent()) || s.getElementByKey(w)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      c1(s, u),
      ...a ? [
        s.registerNodeTransform(je, (_) => {
          s.isComposing() || WA(_);
        }),
        s.registerCommand(
          Eo,
          (_) => kf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
            s,
            !1
          ),
          ve
        ),
        s.registerCommand(
          Xr,
          (_) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            kf(
              _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
              s,
              !0
            )
          ),
          ve
        ),
        s.registerCommand(
          pr,
          (_) => e1(
            // Same jsdom-safe duck-check as COPY above.
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
            u.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              u.splitExpected.current = !0;
            }
          ),
          ve
        )
      ] : [],
      s.registerCommand(
        Xr,
        () => (!wc(u) && !jo() && Mc(u), !1),
        _t
      ),
      s.registerCommand(
        vo,
        () => (s.isComposing() || BE(u), !1),
        Sn
      ),
      s.registerCommand(
        So,
        () => (p = !1, x = 0, S(), !1),
        Ct
      ),
      s.registerCommand(
        qr,
        (_) => (p = !1, x = 0, S(), (_.key === "Backspace" || _.key === "Delete") && !wc(u, dg(_)) && (Mc(u), KE(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !_.ctrlKey || _.altKey || _.shiftKey || _.metaKey || _.key !== " " && _.code !== "Space" || !qM() ? !1 : (_.preventDefault(), !0)),
        ve
      ),
      s.registerCommand(
        Kf,
        (_) => {
          const w = _m();
          w === "needs-plain-split" && s.dispatchCommand(Ws, void 0);
          const $ = w !== "declined" || lx();
          return $ && _?.preventDefault(), Us(u), $;
        },
        ve
      ),
      s.registerCommand(
        Ws,
        () => (u.splitExpected.current = !0, Ig()),
        ve
      ),
      l1(s, u, a),
      s.registerCommand(
        jm,
        () => {
          if (p) return !0;
          const _ = s.getRootElement(), w = _?.ownerDocument, $ = !!_ && !!w && w.hasFocus() && _.contains(w.activeElement);
          let G;
          if ($) {
            const Q = q();
            G = N(Q) ? Q.focus.key : f;
          }
          return La(() => Us(u, G)), !0;
        },
        Ct
      ),
      s.registerCommand(
        zc,
        () => {
          if (p) return !1;
          const _ = q(), w = N(_) ? _.focus.key : f;
          return La(() => Us(u, w)), !1;
        },
        Ct
      ),
      s.registerUpdateListener(({ editorState: _, tags: w }) => {
        u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const $ = _.read(() => {
          const Q = q();
          return N(Q) ? Q.focus.key : void 0;
        }), G = g;
        if ($ !== void 0 && (g = $), w.has(Kc)) {
          u.pendingKeys.clear(), _.read(() => $A(u)), p = !0, $ !== void 0 && (f = $);
          return;
        }
        if (w.has(Zr)) {
          $ !== void 0 && $ !== G && (p = !0);
          return;
        }
        p || ($ !== void 0 && (f = $), S(), !(h || $ === void 0) && [...u.pendingKeys].some((Q) => Q !== $) && (h = !0, queueMicrotask(() => {
          h = !1, !b && (T() || v(f));
        })));
      })
    );
    return () => {
      b = !0, A !== void 0 && clearTimeout(A), A = void 0, d(), D(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const d1 = ["status_unknown", "status_invalid"], Vm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, f1 = Object.values(Vm);
function p1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Vm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function xf(e) {
  e.classList.remove(...d1), e.removeAttribute("aria-description"), f1.includes(e.title) && e.removeAttribute("title");
}
function h1(e, t, r, n) {
  const i = (a) => a.read(() => Ke().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = ie(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function g1(e) {
  const t = ie(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function m1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ce(), i = e?.markerMode === "editable";
  return B(() => {
    if (!i) return;
    const s = t ?? no;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = oE(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || g1(f)) continue;
            const g = ie(f)?.getTopLevelElement();
            !g || l.has(g.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && xf(p);
        }
        for (const [f, p] of d) {
          const g = n.getElementByKey(f);
          g && p1(g, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          h1(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && xf(u);
      }
    };
  }, [n, i, t, r]), null;
}
function y1(e, t) {
  const r = Pl(Ml), n = xl();
  if (!r || !n?.end) return;
  const i = Bs.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = ib({
    namespace: "markers-view-copy",
    nodes: [et, ...Cl],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    kr.serializeEditorState(i, r)
  ).read(
    () => {
      const a = zo(n);
      return a ? zm(a) : void 0;
    },
    { editor: s }
  );
}
function b1({ viewOptions: e }) {
  const [t] = ce();
  return B(() => {
    const r = (n, i) => {
      const s = q();
      if (!N(s) || s.isCollapsed()) return !1;
      const o = y1(t, e);
      return o === void 0 ? !1 : Bm(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        n && typeof n == "object" && "clipboardData" in n ? n : null,
        t,
        s,
        { "text/plain": o, "text/html": Km(o) },
        i
      );
    };
    return Ve(
      t.registerCommand(Eo, (n) => r(n, !1), ve),
      t.registerCommand(Xr, (n) => r(n, !0), ve)
    );
  }, [t, e]), null;
}
function Wm(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = xr(o);
    a && F(s) && Wm(s.getChildren(), a, r);
  }
}
function To(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = xr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = mi(a);
      if (l === void 0 || !l.includes(it)) continue;
      const u = l.split(it), d = [];
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (f > 0 && d.push(...t[n++] ?? []), p.length > 0) {
          const g = {
            ...a,
            text: p
          };
          d.push(g);
        }
      }
      s.splice(o, 1, ...d), o += d.length - 1;
    }
  };
  return i(e), n;
}
function su(e, t, r) {
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
function Hm(e, t) {
  const r = [];
  for (const n of e)
    Jl(n, t) || ((oe(n) || U(n)) && r.push(n.getMarker()), F(n) && r.push(...Hm(n.getChildren(), t)));
  return r;
}
function Gm(e) {
  const t = [];
  for (const r of e) {
    const n = Yl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = xr(r);
    i && t.push(...Gm(i));
  }
  return t;
}
function ys(e, t, r) {
  const n = Hm(e, r), i = Gm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function k1(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = q();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = ie(t.key), i = t.offset;
  else
    return;
  if (!(!E(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Zo(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function T1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Go(c, e, o, s)) return;
  const l = i ? Zo(c, i) : c.text, u = Cr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Ur(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = kr.serializeEditorState(
    { type: mr, version: gr, content: u },
    s
  ).root.children;
  if (vi(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = su(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (_r(d, o) === Tr(e, o) && ys(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  To(d, f);
  const g = Jm(e), h = ou(d);
  for (let b = 0; b < g.length && b < h.length; b++)
    g[b].sid !== void 0 && h[b].number === g[b].number && (h[b].sid = g[b].sid);
  return d;
}
function Jm(e) {
  const t = [], r = (n) => {
    we(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function ou(e) {
  const t = [];
  for (const r of e) {
    Lp(r) && t.push(r);
    const n = xr(r);
    n && t.push(...ou(n));
  }
  return t;
}
function x1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = fm(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Zo(l, i) : l.text, f = Cr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Ur(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = p.content ?? [], h = pm(g), b = e.getCategory() !== h, x = em(e, g, h, s);
  if (x.failure !== void 0) {
    x.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const T = x.children;
  if (vi(T) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const v = su(l, t, n);
  if (!v) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (_r(T, o) === Tr(u, o) && ys(u, T, o)) {
    if (b)
      return { rebuilt: void 0, contentNodes: u, category: h, categoryChanged: b };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return To(T, v), { rebuilt: T, contentNodes: u, category: h, categoryChanged: b };
}
function _f(e) {
  return e.$?.textType;
}
function _1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && _f(e) === _f(t);
}
function C1(e) {
  const t = [];
  for (const r of e) {
    const n = ie(r);
    n?.isAttached() && Ue(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function S1(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (ln(e)) return;
  const n = Qg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Cf(e, t) {
  const r = e;
  r.marker = t, r.text = im(t, r.markerSyntax, r.nested);
}
function v1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ae.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Cf(a.node, s);
  const c = n.getChildren().filter(O).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Cf(l.node, s);
}
function M1(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: u } = Zl(e, a, o);
  if (u.length === 0 && s.length === 0 || !Go(l, s, a, o)) return;
  const d = i ? Zo(l, i) : l.text, f = gm(d, a);
  if (Ur(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = tm(
    e,
    f.lineContent,
    f.followingBlocks,
    o
  );
  if (p.failure !== void 0) {
    p.failure === "shape" && c?.warn("[MarkerEdit] Settled book USJ skipped: unexpected serialized shape");
    return;
  }
  const { children: g, followingBlocks: h } = p;
  if (vi([...g, ...h]) !== l.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const b = su(l, t, n);
  if (!b) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (h.length === s.length && _r(h, a) === Tr(s, a) && ys(s, h, a) && _r(g, a) === Tr(u, a) && ys(u, g, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const x = To(g, b);
  To(h, b, x);
  const T = Jm([...u, ...s]), v = ou([...g, ...h]);
  for (let A = 0; A < T.length && A < v.length; A++)
    T[A].sid !== void 0 && v[A].number === T[A].number && (v[A].sid = T[A].sid);
  return { rebuilt: g, contentNodes: u, followingBlocks: h };
}
function E1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = km(e, i, n);
  if (!o) return;
  const a = r ? Zo(o, r) : o.text, c = Cr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Ur(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = kr.serializeEditorState(
    { type: mr, version: gr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Xo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && _r(u, i) === Tr(d, i) && ys(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function A1(e, t, r, n, i) {
  const s = k1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (T) => {
    j(T) ? c.set(T.getKey(), T) : Ne(T) ? l.set(T.getKey(), T) : Ce(T) ? u.set(T.getKey(), T) : o.set(T.getKey(), [T]);
  };
  for (const T of t) {
    const v = ie(T);
    if (!v?.isAttached()) continue;
    const A = ms(v);
    if (A) {
      if (p(A), O(v)) {
        const S = Am(v, r.getMarker);
        S && a.push(S);
      }
      if (j(A)) {
        const S = S1(v);
        S && f.set(A.getKey(), S);
      }
    }
  }
  const g = /* @__PURE__ */ new Set();
  for (const [T, v] of a)
    g.has(T.getKey()) || g.has(v.getKey()) || ([T, v].forEach((A) => {
      g.add(A.getKey()), o.delete(A.getKey());
    }), Ce(T) ? (u.set(T.getKey(), T), d.set(T.getKey(), [v])) : o.set(T.getKey(), [T, v]));
  if (s) {
    const T = ms(s.node);
    T && p(T);
  }
  const h = C1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && u.size === 0 && h.length === 0)
    return;
  const b = new Set(h.map((T) => T.getKey())), x = /* @__PURE__ */ new Map();
  Wm(Ke().getChildren(), e.root.children, x);
  for (const T of f.values()) v1(T, x);
  for (const T of c.values()) {
    const v = x.get(T.getKey()), A = v ? xr(v.node) : void 0;
    if (!v || !A) continue;
    const S = x1(T, x, r, b, s);
    if (!S) continue;
    if (S.categoryChanged) {
      const w = v.node;
      S.category === void 0 ? delete w.category : w.category = S.category;
    }
    if (!S.rebuilt) continue;
    const D = x.get(S.contentNodes[0].getKey());
    if (!D) continue;
    const _ = A.indexOf(D.node);
    _ < 0 || A.splice(_, S.contentNodes.length, ...S.rebuilt);
  }
  for (const T of o.values()) {
    const v = x.get(T[0].getKey());
    if (!v) continue;
    const A = T1(T, x, r, b, s);
    if (!A) continue;
    const S = v.siblings.indexOf(v.node);
    S < 0 || v.siblings.splice(S, T.length, ...A);
  }
  for (const T of u.values()) {
    const v = x.get(T.getKey()), A = v ? xr(v.node) : void 0;
    if (!v || !A) continue;
    const S = d.get(T.getKey()) ?? [], D = M1(T, x, r, b, s, S);
    if (!D) continue;
    const _ = D.contentNodes.at(0), w = _ ? x.get(_.getKey()) : void 0;
    if (_ && !w) continue;
    const $ = w ? A.indexOf(w.node) : A.length, G = v.siblings.indexOf(v.node);
    $ < 0 || G < 0 || (A.splice($, D.contentNodes.length, ...D.rebuilt), v.siblings.splice(G + 1, S.length, ...D.followingBlocks));
  }
  for (const T of l.values()) {
    const v = x.get(T.getKey());
    if (!v) continue;
    const A = 1 + Xo(T).length, S = E1(T, r, s);
    if (!S) continue;
    const D = v.siblings.indexOf(v.node);
    D < 0 || v.siblings.splice(D, A, ...S);
  }
  for (const T of h) {
    const v = x.get(T.getKey());
    if (!v) continue;
    const A = v.siblings.indexOf(v.node);
    if (A < 0) continue;
    v.siblings.splice(A, 1);
    const S = v.siblings[A - 1], D = v.siblings[A], _ = S && mi(S), w = D && mi(D);
    S && D && _ !== void 0 && w !== void 0 && _1(S, D) && (S.text = _ + w, v.siblings.splice(A, 1));
  }
  return Cg(e, r.viewOptions);
}
function P1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ce(), n = Fn(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return B(() => {
    if (n)
      return r.registerNodeTransform(
        rt,
        (i) => N1(i, t)
      );
  }, [r, n, t]), null;
}
function N1(e, t) {
  e.getMarker() !== Ut && (e.isEmpty() || ct(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Ut}" (key ${e.getKey()})`
  ), e.setMarker(Ut)));
}
function w1({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ce(), n = Z({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return B(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, xo(s, e) || O1(i, r, e);
  }, [r, e, t]), B(
    () => r.registerMutationListener(
      Bt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Oc(r);
        Sf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Fs(s) === Fs(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), B(() => {
    const i = (a) => a.read(
      () => new Set(
        Ke().getChildren().filter(Ye).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Oc(r) || Sf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Fs(a) === Fs(c)
      }));
    };
    return Ve(
      ...[qt, vr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), B(
    () => r.registerCommand(
      yr,
      () => {
        const i = n.current;
        return i.phase === "idle" && I1(i, R1()), !1;
      },
      Ct
    ),
    [r]
  ), B(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(yr, void 0));
    };
    return Ve(
      r.registerMutationListener(Mt, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), B(() => {
    const i = () => F1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function O1(e, t, r) {
  if (q1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Oc(t);
  (!n || n === r.book) && t.update(() => Ym(r.chapterNum, r.verseNum), {
    tag: Zr
  });
}
function q1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => xo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function R1() {
  const e = q(), t = rl(e);
  if (!t) return;
  const r = au(), n = Fp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = ml(t, e), { verseNum: o, verse: a } = Ox(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Oc(e) {
  return e.getEditorState().read(() => au()?.getCode() || void 0);
}
function au() {
  return Ke().getChildren().find(Ce);
}
function Sf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Da(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Da(e, t), e.phase = "navigating") : i && Da(e, t), r && r !== e.scrRef.book && Zm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Da(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Ym(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Zr }
    );
  });
}
function Ym(e, t) {
  const r = rl(q()), n = yl(r)?.getNumber(), i = Fp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Hp(n) ? Qm(t, n) : parseInt(n, 10) === t))
    return;
  const o = Ke().getChildren(), a = Up(o, e);
  if (!a) return;
  const c = Vk(o, a), l = Uk(c, !0);
  jk(c, l);
  let u;
  try {
    u = Ex(c, t);
  } catch {
    return;
  }
  u && (oe(u) ? !E(u.getFirstChild()) && Si(u) || rr(u, 0) : $1(u));
}
function $1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ge(n)) {
    rr(t, r);
    return;
  }
  const i = vs(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = F(n) && !j(n) ? Xm(n) : void 0;
  s ? s.select(0, 0) : rr(t, r);
}
function Xm(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (F(t) && !j(t)) return Xm(t);
}
function Fs(e) {
  return e.read(() => {
    const t = Ke().getChildren().find(Ye);
    return `${au()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function I1(e, t) {
  e.phase !== "navigating" && t && (L1(t, e.scrRef) || Zm(e, D1(t, e.scrRef)));
}
function L1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Qm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Qm(e, t) {
  try {
    return nl(e, t);
  } catch {
    return !1;
  }
}
function D1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const U1 = 8;
function Zm(e, t) {
  return xo(t, e.scrRef) || e.pendingEchoes.some((r) => xo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > U1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function xo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function F1(e) {
  e.phase = "idle";
}
function z1(e) {
  return Ce(e) ? `${e.__code}` : Ne(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : _s(e) ? `${e.__marker} "${e.__number}"` : Et(e) ? `${e.__caller}` : Un(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : oe(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${K1(e)}` : be(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : we(e) ? `${e.__marker} "${e.__number}"` : "";
}
function K1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[xs]) : "";
}
function B1() {
  const [e] = ce();
  return /* @__PURE__ */ M(
    lb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: z1,
      editor: e
    }
  );
}
const ey = qf(null), vf = 4;
function j1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = Rf(ey);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return B(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ M("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function V1({
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
  }, l = Be(() => ({ registerItem: a }), [a]);
  return B(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ M(ey.Provider, { value: l, children: /* @__PURE__ */ M("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function W1({
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
  return B(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: g, left: h } = f.getBoundingClientRect();
      p.style.top = `${g + f.offsetHeight + vf}px`, p.style.left = `${Math.min(h, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), B(() => {
    const f = c.current;
    if (f !== null && l) {
      const p = (g) => {
        const h = g.target;
        o && a.current && a.current.contains(h) || f.contains(h) || u(!1);
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
        const p = c.current, g = a.current;
        if (p !== null && g !== null) {
          const { top: h } = p.getBoundingClientRect(), b = h + p.offsetHeight + vf;
          b !== g.getBoundingClientRect().top && (g.style.top = `${b}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ _e(vn, { children: [
    /* @__PURE__ */ _e(
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
    l && Cn(
      /* @__PURE__ */ M(V1, { dropDownRef: a, onClose: d, children: s }),
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
function H1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ M(
    W1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + G1(t),
      buttonLabel: J1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(qc).map((n) => /* @__PURE__ */ _e(
        j1,
        {
          className: "item block-marker " + Y1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ M("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ M("span", { className: "text usfm_" + n, children: qc[n] })
          ]
        },
        n
      ))
    }
  );
}
function G1(e) {
  return e && e in Rc ? e : "ban";
}
function J1(e) {
  return e && e in Rc ? Rc[e] : "No Style";
}
function Y1(e) {
  return e ? "active dropdown-item-active" : "";
}
function Mf() {
  return /* @__PURE__ */ M("div", { className: "divider" });
}
const X1 = $n(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ce(), [o, a] = de(s), [c, l] = de(), [u, d] = de(!1), [f, p] = de(!1), g = he(
    ({
      canUndo: h,
      canRedo: b,
      blockMarker: x,
      contextMarker: T
    }) => {
      d(h), p(b), l(x), n?.({
        canUndo: h,
        canRedo: b,
        blockMarker: x,
        contextMarker: T
      });
    },
    [n]
  );
  return B(() => s.registerCommand(
    yr,
    (h, b) => (a(b), !1),
    _t
  ), [s]), /* @__PURE__ */ _e(vn, { children: [
    /* @__PURE__ */ M(ug, { onStateChange: g }),
    /* @__PURE__ */ _e("div", { className: "toolbar", children: [
      /* @__PURE__ */ M(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Wf, void 0);
          },
          title: Hs ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Hf, void 0);
          },
          title: Hs ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ M("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ M(Mf, {}),
      o === s && /* @__PURE__ */ _e(vn, { children: [
        /* @__PURE__ */ M(
          H1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ M(Mf, {})
      ] }),
      /* @__PURE__ */ M("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), Q1 = Ko(), Z1 = {}, eP = {};
function tP() {
  return /* @__PURE__ */ M("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function Ef(e, t, r) {
  fb(e, () => ci(t));
  const n = q();
  if (!N(n)) return;
  const i = /* @__PURE__ */ new Set();
  n.getNodes().forEach((s) => {
    const o = s.getTopLevelElement();
    oe(o) && i.add(o);
  }), i.forEach((s) => xm(s, t, r));
}
const ty = $n(function({
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
  const d = Z(null), f = Z(null), p = Z(null), g = Z(t), h = Z(void 0), b = Z(void 0), x = Z(void 0), T = Z(void 0), v = Z(!1), [A, S] = de(t), [D, _] = de(0), [w, $] = de(), {
    isReadonly: G = !1,
    structureProtectionMode: Q = "off",
    hasExternalUI: Ee = !1,
    hasSpellCheck: re = !1,
    textDirection: qe = "ltr",
    markerMenuTrigger: ke = "\\",
    view: sr,
    nodes: Re,
    debug: fn = !1,
    contextMenu: Er,
    styleInfo: At,
    markerSettleDelayMs: te
  } = a ?? eP, P = sr ?? Q1, Y = us(P) && (P.markerMode !== "hidden" || !P.hasSpacing || P.hasGutterParaMarkers || P.hasActiveTextFocusBox) ? {
    ...P,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : P, le = Z(Y);
  Rt(le.current, Y) || (le.current = Y);
  const V = le.current, Se = Be(() => Re ?? Z1, [Re]), mt = Be(() => Er, [Er]), jt = Be(
    () => bx(At ?? no),
    [At]
  ), yt = Z(c);
  Rt(yt.current, c) || (yt.current = c);
  const Ge = yt.current, ut = us(V), ue = G || ut, zn = Y !== P;
  B(() => {
    ut && !G && Ge?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), zn && Ge?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), V?.markerMode === "visible" && !G && Ge?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ut, G, zn, Ge, V?.markerMode]);
  const ye = Z(null), Mi = Be(() => {
    if (V.markerMode !== "editable") return;
    const R = At ?? no;
    return {
      getContext: () => ye.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (K) => hE(
        R,
        K,
        Se.extraValidMarkers
      ),
      getEnterItems: (K) => gE(
        R,
        K,
        Se.extraValidMarkers
      ),
      apply: (K, H) => {
        const X = ye.current;
        X && (H.trigger === "enter" ? X.splitParagraphWithMarker(K.marker) : X.applyMarkerMenuSelection(K, H));
      },
      commitTypedCloser: (K) => {
        ye.current?.commitTypedCloser(K);
      }
    };
  }, [V, At, Se.extraValidMarkers]), Me = (R) => {
    v.current || (v.current = !0, yt.current?.warn(
      `Editor: cannot ${R} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Fr = (R) => {
    if (ut)
      throw new Error(
        `Cannot ${R} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, zr = (R) => {
    if (Fr(R), ue) throw new Error(`Cannot ${R} in readonly mode`);
  }, or = Be(
    () => ({
      namespace: "platformEditor",
      theme: { ...Wg, showCharMarkerTitles: V.showCharMarkerTitles },
      editable: !ue,
      editorState: void 0,
      // Handling of errors during update
      onError(R) {
        throw R;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [et, ...ut ? w_ : Cl]
    }),
    [ue, ut, V.showCharMarkerTitles]
  );
  Bs.initialize(Ge);
  function Kr(R) {
    if (R !== void 0 && !IM(R, Se.extraValidMarkers))
      throw new Error(`Unsupported character marker '${R}'`);
  }
  const pn = he(() => {
    const R = d.current;
    if (!R) return g.current;
    const K = Gu(R), H = b.current;
    if ((!K || K.size === 0) && !H) return g.current;
    const X = R.getEditorState(), Te = X.toJSON();
    return X.read(
      () => A1(
        Te,
        K ?? /* @__PURE__ */ new Set(),
        { viewOptions: V, getMarker: jt, logger: Ge },
        H,
        x.current
      )
    ) ?? g.current;
  }, [V, jt, Ge]), Ei = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const R = d.current?.getRootElement();
      return !!R && R.ownerDocument.activeElement === R;
    },
    undo() {
      d.current?.dispatchCommand(Wf, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Hf, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      zr("cut"), d.current && Rl(d.current);
    },
    copy() {
      d.current && ql(d.current);
    },
    paste() {
      zr("paste"), d.current && $l(d.current);
    },
    pastePlainText() {
      zr("paste as plain text"), d.current && Il(d.current);
    },
    getUsj() {
      return pn();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(jm, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(R) {
      if (!R) {
        b.current = void 0;
        return;
      }
      const K = d.current?.getEditorState().read(() => {
        const H = q();
        return N(H) && H.isCollapsed() ? H.focus.key : void 0;
      });
      b.current = { input: R, nodeKey: K ?? x.current?.key };
    },
    setUsj(R) {
      if (!Rt(g.current, R)) {
        g.current = R, b.current = void 0;
        const K = Rt(A, R);
        S(R), K && _((H) => H + 1);
      }
    },
    applyUpdate(R, K = "remote") {
      if (ut && K === "remote") {
        yt.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Fr("apply an update"), d.current?.update(
        () => {
          K === "remote" && Qr(Zi), iC(R, V, Se, Ge);
        },
        { discrete: !0 }
      );
      const H = d.current?.getEditorState();
      if (!H) return;
      const X = Bs.deserializeEditorState(H, V);
      if (X) {
        const Te = !Rt(g.current, X);
        if (Te && (g.current = X), Te || !Rt(A, X)) {
          const Pt = od(R, H, "apply");
          T.current = X, s?.(X, R, K, Pt);
        }
      }
    },
    replaceEmbedUpdate(R, K) {
      const H = d.current?.read(() => jx(R, K));
      H ? this.applyUpdate(H) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${R}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ut) {
        Me("get the selection");
        return;
      }
      return d.current?.read(xl);
    },
    setSelection(R) {
      if (ut) {
        Me("set the selection");
        return;
      }
      d.current?.update(() => {
        const K = zo(R);
        K !== void 0 && (Yr(K), Qr(sp));
      });
    },
    setAnnotation(R, K, H, X, Te) {
      if (ut) {
        Me("set an annotation");
        return;
      }
      let Pt, dt, Wt, ar;
      typeof X == "function" || X === void 0 ? (Pt = X, dt = Te) : (Pt = X.onClick, dt = X.onRemove, Wt = X.onMouseEnter, ar = X.onMouseLeave), f.current?.setAnnotation(
        R,
        Iu(K),
        H,
        Pt,
        dt,
        Wt,
        ar
      );
    },
    removeAnnotation(R, K) {
      f.current?.removeAnnotation(Iu(R), K);
    },
    formatPara(R) {
      zr("format a paragraph"), d.current?.update(
        () => {
          const K = q();
          if (!N(K)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${R}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const H = K.isBackward() ? K.focus : K.anchor, X = De(H.getNode(), Ce);
          if (X) {
            const Te = K.isBackward() ? K.anchor : K.focus, dt = !K.isCollapsed() && !X.is(Te.getNode()) && !X.isParentOf(Te.getNode()) ? { key: Te.key, offset: Te.offset, type: Te.type } : void 0, Wt = Xi();
            if (Wt.anchor.set(H.key, H.offset, H.type), Wt.focus.set(H.key, H.offset, H.type), Yr(Wt), !Ac(R, V)) {
              c?.warn(
                `formatPara refused: could not split the \\id line at the caret to retag with "${R}"`
              );
              return;
            }
            if (!dt) return;
            const ar = ie(dt.key);
            if (!ar?.isAttached()) return;
            const Ai = De(ar, oe);
            if (!Ai) return;
            const Pi = X.getNextSibling();
            if (!oe(Pi)) return;
            let Ht = Pi.getNextSibling();
            for (; Ht; ) {
              const Ni = Ht.is(Ai), Kn = Ht.getNextSibling();
              if (oe(Ht)) {
                const Gt = Xi();
                Gt.anchor.set(Ht.getKey(), 0, "element"), Gt.focus.set(Ht.getKey(), Ht.getChildrenSize(), "element"), Yr(Gt), Ef(Gt, R, V);
              }
              if (Ni) break;
              Ht = Kn;
            }
            return;
          }
          Ef(K, R, V);
        },
        { discrete: !0 }
      );
    },
    getElementByKey(R) {
      return d.current?.read(
        () => d.current?.getElementByKey(R) ?? void 0
      );
    },
    removeCharacterMarker(R) {
      if (ue) throw new Error("Cannot remove character marker in readonly mode");
      Kr(R);
      let K = !1;
      return d.current?.update(
        () => {
          const H = q();
          N(H) && (K = Fg(H, R, V));
        },
        { discrete: !0 }
      ), K;
    },
    replaceCharacterMarker(R, K) {
      if (ue) throw new Error("Cannot replace character marker in readonly mode");
      Kr(R), Kr(K);
      let H = !1;
      return d.current?.update(
        () => {
          const X = q();
          N(X) && (H = GM(X, R, K));
        },
        { discrete: !0 }
      ), H;
    },
    extendCharacterMarker(R, K) {
      if (ue) throw new Error("Cannot extend character marker in readonly mode");
      Kr(R), K?.forEach(
        (X) => Kr(X)
      );
      let H = !1;
      return d.current?.update(
        () => {
          const X = q();
          N(X) && (H = JM(
            X,
            R,
            K,
            V
          ));
        },
        { discrete: !0 }
      ), H;
    },
    insertMarker(R) {
      if (ue) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!Tc(R, Se.extraValidMarkers))
        throw new Error(`Unsupported marker '${R}'`);
      const K = xc(
        R,
        h,
        V,
        Se,
        Ge,
        void 0,
        At
      );
      return K.action({ editor: d.current, reference: r }), K.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!G)
        return d.current?.getEditorState().read(() => oA());
    },
    applyMarkerMenuSelection(R, K) {
      if (G) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (R.kind !== "closeTag" && !Tc(R.marker, Se.extraValidMarkers))
        throw new Error(`Unsupported marker '${R.marker}'`);
      let H;
      return d.current.update(() => {
        H = gA(R, K, r, {
          expandedNoteKeyRef: h,
          viewOptions: V,
          nodeOptions: Se,
          logger: c,
          styleInfo: At
        });
      }), H;
    },
    splitParagraphWithMarker(R) {
      if (G) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        Ac(R, V);
      });
    },
    commitTypedMarker(R, K) {
      if (G) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let H = !1;
      return d.current.update(() => {
        H = pA(R, K), H || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), H;
    },
    commitTypedCloser(R) {
      if (G) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let K = !1;
      return d.current.update(() => {
        K = Em(R), K || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), K;
    },
    insertNote(R, K, H) {
      zr("insert a note"), d.current?.update(
        () => {
          const X = Uh(
            R,
            K,
            H,
            r,
            V,
            Se,
            Ge
          );
          X && !X.getIsCollapsed() && (h.current = X.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(R) {
      d.current?.update(() => {
        const K = fd(R);
        K && (A_(K, V), K.getIsCollapsed() || (h.current = K.getKey()));
      });
    },
    getNoteOps(R) {
      return d.current?.read(() => {
        const K = fd(R);
        if (K)
          return kl(K);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  ye.current = Ei, Ic(u, () => Ei), B(() => {
    const R = d.current;
    if (R)
      return R.registerUpdateListener(({ editorState: K }) => {
        K.read(() => {
          const H = q();
          if (!N(H) || !H.isCollapsed()) return;
          const X = H.focus.getNode();
          E(X) && (x.current = { key: X.getKey(), offset: H.focus.offset });
        });
      });
  }, []);
  const Es = he(
    (R, K, H, X) => {
      if (ut) return;
      const Te = Bs.deserializeEditorState(R, V);
      if (Te) {
        const Pt = !Rt(g.current, Te);
        if (Pt && (g.current = Te), Pt || !Rt(A, Te)) {
          const dt = od(X, R);
          T.current = Te, s?.(Te, X, "local", dt);
        }
      }
    },
    [A, s, V, ut]
  );
  B(() => {
    const R = d.current;
    if (!(!R || !s))
      return R.registerUpdateListener(({ tags: K, dirtyElements: H, dirtyLeaves: X }) => {
        !K.has(Kc) && (H.size === 0 && X.size === 0 || K.has(Zi) || !Gu(R)?.size) || queueMicrotask(() => {
          const Te = pn();
          !Te || Rt(T.current, Te) || (T.current = Te, s(Te, void 0, "local", void 0));
        });
      });
  }, [s, pn]);
  const Vt = he(
    (R) => {
      $(R.contextMarker), o?.(R);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ _e(Yf, { initialConfig: or, children: [
      /* @__PURE__ */ M(dS, { isEditable: !ue }),
      /* @__PURE__ */ _e("div", { className: "editor-container", children: [
        Ee ? /* @__PURE__ */ M(ug, { onStateChange: Vt }) : /* @__PURE__ */ M(
          "div",
          {
            className: "editor-toolbar-container" + (ue ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ M(
              X1,
              {
                ref: p,
                editorRef: ye,
                isReadonly: ue,
                onStateChange: Vt
              }
            )
          }
        ),
        /* @__PURE__ */ _e("div", { className: "editor-inner", children: [
          /* @__PURE__ */ M(Qf, { editorRef: d }),
          /* @__PURE__ */ M(
            db,
            {
              contentEditable: /* @__PURE__ */ M(
                Xf,
                {
                  className: `editor-input usfm ${nC(V).join(" ")}${V.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${V.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: re
                }
              ),
              placeholder: /* @__PURE__ */ M(tP, {}),
              ErrorBoundary: Zf
            }
          ),
          Ee && /* @__PURE__ */ M(uS, {}),
          /* @__PURE__ */ M(ep, {}),
          r && n && /* @__PURE__ */ M(w1, { scrRef: r, onScrRefChange: n }),
          r && !Ee && /* @__PURE__ */ M(
            qv,
            {
              trigger: ke,
              scrRef: r,
              contextMarker: w,
              getMarkerAction: (R) => xc(
                R,
                h,
                V,
                Se,
                Ge,
                void 0,
                At
              ),
              editableHarness: Mi
            }
          ),
          /* @__PURE__ */ M(
            hS,
            {
              scripture: A,
              scriptureRef: g,
              nodeOptions: Se,
              editorAdaptor: kr,
              viewOptions: V,
              logger: Ge
            },
            D
          ),
          /* @__PURE__ */ M(RS, { onChange: i }),
          /* @__PURE__ */ M(
            X_,
            {
              onChange: Es,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: qb
            }
          ),
          /* @__PURE__ */ M(eE, { viewOptions: V }),
          /* @__PURE__ */ M(J_, { ref: f, logger: Ge }),
          /* @__PURE__ */ M(OC, { viewOptions: V }),
          /* @__PURE__ */ M(WC, {}),
          /* @__PURE__ */ M(QC, {}),
          V?.markerMode !== "editable" && /* @__PURE__ */ M(ZC, { logger: Ge }),
          /* @__PURE__ */ M(iS, { options: mt }),
          /* @__PURE__ */ M(lS, {}),
          /* @__PURE__ */ M(pS, {}),
          /* @__PURE__ */ M(mA, {}),
          /* @__PURE__ */ M(
            u1,
            {
              viewOptions: V,
              getMarker: jt,
              logger: Ge,
              markerSettleDelayMs: te,
              structureProtectionMode: Q
            }
          ),
          V?.markerMode === "visible" && /* @__PURE__ */ M(b1, { viewOptions: V }),
          /* @__PURE__ */ M(
            m1,
            {
              styleInfo: At,
              viewOptions: V,
              logger: Ge
            }
          ),
          /* @__PURE__ */ M(
            gS,
            {
              expandedNoteKeyRef: h,
              nodeOptions: Se,
              viewOptions: V,
              logger: Ge
            }
          ),
          /* @__PURE__ */ M(qS, {}),
          /* @__PURE__ */ M(EC, {}),
          /* @__PURE__ */ M(CC, {}),
          /* @__PURE__ */ M(P1, { viewOptions: V, logger: Ge }),
          /* @__PURE__ */ M($S, {}),
          /* @__PURE__ */ M(Tv, { structureProtectionMode: Q }),
          /* @__PURE__ */ M(xv, { textDirection: qe }),
          /* @__PURE__ */ M(Cv, {}),
          /* @__PURE__ */ M(wv, {}),
          l
        ] }),
        fn && /* @__PURE__ */ M(B1, {})
      ] })
    ] }, V.verseLayout ?? "inline")
  );
}), lN = $n(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ M(ty, { ref: r, ...i });
});
function ry() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function _o(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? ry() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function ny(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? ry() : r,
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
function rP(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Ua(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class nP {
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
    this._comments = t, Ua(this);
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
    this._comments = i, Ua(this);
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
    return this._comments = n, Ua(this), t.type === "comment" ? {
      index: s,
      markedComment: rP(t)
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
    return t !== null ? t.doc.get("comments", Cu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Su(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Cu();
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
      Eb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Ct
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Ab) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const g = p.insert, h = p.retain, b = p.delete, x = u.parent, T = u === r ? void 0 : x instanceof Su && this._comments.find((v) => v.id === x.get("id"));
              if (Array.isArray(g)) {
                const v = f;
                g.slice().reverse().forEach((A) => {
                  const S = A.get("id"), _ = A.get("type") === "thread" ? ny(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (w) => _o(
                        w.get("content"),
                        w.get("author"),
                        w.get("id"),
                        w.get("timeStamp"),
                        w.get("deleted")
                      )
                    ),
                    S
                  ) : _o(
                    A.get("content"),
                    A.get("author"),
                    S,
                    A.get("timeStamp"),
                    A.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(_, T, v);
                  });
                });
              } else if (typeof h == "number")
                f += h;
              else if (typeof b == "number")
                for (let v = 0; v < b; v++) {
                  const A = T === void 0 || T === !1 ? this._comments[f] : T.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(A, T);
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
function iP(e) {
  const [t, r] = de(e.getComments());
  return B(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function sP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Z(null);
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
  }, [n, e]), /* @__PURE__ */ M("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ _e("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function oP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Cn(
    /* @__PURE__ */ M(sP, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function iy() {
  const [e, t] = de(null), r = he(() => {
    t(null);
  }, []), n = Be(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ M(oP, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const aP = {
  ...Wg,
  paragraph: "CommentEditorTheme__paragraph"
};
function cP(...e) {
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
  return /* @__PURE__ */ M(
    "button",
    {
      disabled: i,
      className: cP(
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
function lP({
  className: e
}) {
  return /* @__PURE__ */ M(Xf, { className: e || "ContentEditable__root" });
}
function uP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ M("div", { className: t || "Placeholder__root", children: e });
}
const Pf = Vf("INSERT_INLINE_COMMAND");
function dP({
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
  return B(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), bs(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ M("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ M("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ M("i", { className: "icon add-comment" }) }) });
}
function fP({ onEscape: e }) {
  const [t] = ce();
  return B(() => t.registerCommand(
    jf,
    (r) => e(r),
    Sn
  ), [t, e]), null;
}
function sy({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ M(Yf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: aP
  }, children: /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ M(
      Sb,
      {
        contentEditable: /* @__PURE__ */ M(lP, { className: e }),
        placeholder: /* @__PURE__ */ M(uP, { children: s }),
        ErrorBoundary: Zf
      }
    ),
    /* @__PURE__ */ M(Cb, { onChange: n }),
    /* @__PURE__ */ M(ep, {}),
    t !== !1 && /* @__PURE__ */ M(Tb, {}),
    /* @__PURE__ */ M(fP, { onEscape: r }),
    /* @__PURE__ */ M(xb, {}),
    i !== void 0 && /* @__PURE__ */ M(Qf, { editorRef: i })
  ] }) });
}
function oy(e, t) {
  return he(
    (r, n) => {
      r.read(() => {
        e(vb()), t(!Mb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function pP({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = Be(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), u = cy(), d = he(() => {
    e.getEditorState().read(() => {
      const h = q();
      if (N(h)) {
        l.current = h.clone();
        const b = h.anchor, x = h.focus, T = pb(
          e,
          b.getNode(),
          b.offset,
          x.getNode(),
          x.offset
        ), v = a.current;
        if (T !== null && v !== null) {
          const { left: A, bottom: S, width: D } = T.getBoundingClientRect(), _ = hb(e, T);
          let w = _.length === 1 ? A + D / 2 - 125 : A - 125;
          w < 10 && (w = 10), v.style.left = `${w}px`, v.style.top = `${S + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const $ = _.length, { container: G } = c, Q = c.elements, Ee = Q.length;
          for (let re = 0; re < $; re++) {
            const qe = _[re];
            let ke = Q[re];
            ke === void 0 && (ke = document.createElement("span"), Q[re] = ke, G.appendChild(ke));
            const Re = `position:absolute;top:${qe.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${qe.left}px;height:${qe.height}px;width:${qe.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            ke.style.cssText = Re;
          }
          for (let re = Ee - 1; re >= $; re--) {
            const qe = Q[re];
            G.removeChild(qe), Q.pop();
          }
        }
      }
    });
  }, [e, c]);
  bs(() => {
    d();
    const h = c.container, b = document.body;
    return b !== null ? (b.appendChild(h), () => {
      b.removeChild(h);
    }) : () => {
    };
  }, [c.container, d]), B(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (h) => (h.preventDefault(), t(), !0), p = () => {
    if (s) {
      let h = e.getEditorState().read(() => {
        const b = l.current;
        return b ? b.getTextContent() : "";
      });
      h.length > 100 && (h = h.slice(0, 99) + "…"), r(
        ny(h, [_o(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, g = oy(i, o);
  return /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ M(
      sy,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: g
      }
    ),
    /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ M(an, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ M(
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
function hP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = cy(), l = oy(i, o);
  return /* @__PURE__ */ _e(vn, { children: [
    /* @__PURE__ */ M(
      sy,
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
      an,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(_o(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(sb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ M("i", { className: "send" })
      }
    )
  ] });
}
function ay({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ _e(vn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ _e("div", { className: "Modal__content", children: [
      /* @__PURE__ */ M(
        an,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ M(
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = iy();
  return /* @__PURE__ */ _e("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ M("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ _e("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ M("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ _e(vn, { children: [
      /* @__PURE__ */ M(
        an,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ M(
              ay,
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
function gP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ce(), [a, c] = de(0), [l, u] = iy(), d = Be(
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
  }, [a]), /* @__PURE__ */ M("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ _e(
      "li",
      {
        onClick: () => {
          const h = s.get(p);
          if (h !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const b = document.activeElement;
            o.update(
              () => {
                const x = Array.from(h)[0], T = ie(x);
                be(T) && T.selectStart();
              },
              {
                onUpdate() {
                  b !== null && b.focus();
                }
              }
            );
          }
        },
        className: `CommentPlugin_CommentsPanel_List_Thread ${s.has(p) ? "interactive" : ""} ${e.indexOf(p) === -1 ? "" : "active"}`,
        children: [
          /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ _e("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ M("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ M(
              an,
              {
                onClick: () => {
                  u("Delete Thread", (h) => /* @__PURE__ */ M(
                    ay,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: h
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ M("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ M("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((h) => /* @__PURE__ */ M(
            Nf,
            {
              comment: h,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            h.id
          )) }),
          /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ M(
            hP,
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
function mP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ M("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ M(
      gP,
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
function cy() {
  const e = tp(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function yP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = tp(), [a] = ce(), c = Be(() => {
    const w = new nP(a, s);
    return r && w.registerOnChange(r), t?.(w), w;
  }, [a, s, r, t]), l = iP(c), u = Be(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [p, g] = de([]), [h, b] = de(!1), [x, T] = de(!1), { yjsDocMap: v } = o;
  B(() => {
    if (e) {
      const w = e("comments", v);
      return c.registerCollaboration(w);
    }
    return () => {
    };
  }, [c, e, v]);
  const A = he(() => {
    a.update(() => {
      const w = q();
      w !== null && (w.dirty = !0);
    }), b(!1);
  }, [a]), S = he(
    (w, $) => {
      if (w.type === "comment") {
        const G = c.deleteCommentOrThread(w, $);
        if (!G)
          return;
        const { markedComment: Q, index: Ee } = G;
        c.addComment(Q, $, Ee);
      } else {
        c.deleteCommentOrThread(w);
        const G = $ !== void 0 ? $.id : w.id, Q = u.get(G);
        Q !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Ee of Q) {
              const re = ie(Ee);
              be(re) && (re.deleteID(Jr, G), re.hasNoIDsForEveryType() && Xs(re));
            }
          });
        });
      }
    },
    [c, a, u]
  ), D = he(
    (w, $, G, Q) => {
      c.addComment(w, G), $ && (a.update(() => {
        N(Q) && kp(Q, Jr, w.id);
      }), b(!1));
    },
    [c, a]
  );
  B(() => {
    const w = [];
    let $;
    for (const G of p) {
      const Q = u.get(G);
      if (Q !== void 0)
        for (const Ee of Q) {
          const re = a.getElementByKey(Ee);
          re !== null && (re.classList.add("selected"), w.push(re), $ = window.setTimeout(() => {
            T(!0);
          }, 0));
        }
    }
    return () => {
      $ !== void 0 && window.clearTimeout($);
      for (const G of w)
        G.classList.remove("selected");
    };
  }, [p, a, u]), B(() => {
    if (!a.hasNodes([et]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const w = /* @__PURE__ */ new Map();
    return Ve(
      Jf(
        a,
        et,
        ($) => ts($.getTypedIDs()),
        ($, G) => {
          for (const [Q, Ee] of Object.entries($.getTypedIDs()))
            Ee.forEach((re) => {
              G.addID(Q, re);
            });
        }
      ),
      a.registerMutationListener(
        et,
        ($) => {
          a.getEditorState().read(() => {
            for (const [G, Q] of $) {
              const Ee = ie(G);
              let re = [];
              Q === "destroyed" ? re = w.get(G) ?? [] : be(Ee) && (re = Ee.getTypedIDs()[Jr] ?? []);
              for (const qe of re) {
                let ke = u.get(qe);
                w.set(G, re), Q === "destroyed" ? ke !== void 0 && (ke.delete(G), ke.size === 0 && u.delete(qe)) : (ke === void 0 && (ke = /* @__PURE__ */ new Set(), u.set(qe, ke)), ke.has(G) || ke.add(G));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: $, tags: G }) => {
        $.read(() => {
          const Q = q();
          let Ee = !1, re = !1;
          if (N(Q)) {
            const qe = Q.anchor.getNode();
            if (E(qe)) {
              const ke = gk(qe, Jr, Q.anchor.offset) ?? [];
              ke !== null && (g(ke), Ee = !0), Q.isCollapsed() || (f(qe.getKey()), re = !0);
            }
          }
          Ee || g((qe) => qe.length === 0 ? qe : []), re || f(null), !G.has("collaboration") && N(Q) && b(!1);
        });
      }),
      a.registerCommand(
        Pf,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), b(!0), !0;
        },
        Mn
      )
    );
  }, [a, u]);
  const _ = () => {
    a.dispatchCommand(Pf, void 0);
  };
  return /* @__PURE__ */ _e(vn, { children: [
    h && Cn(
      /* @__PURE__ */ M(
        pP,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: D
        }
      ),
      document.body
    ),
    d != null && !h && Cn(
      /* @__PURE__ */ M(
        dP,
        {
          anchorKey: d,
          editor: a,
          showComments: x,
          onAddComment: _
        }
      ),
      document.body
    ),
    n !== null && Cn(
      /* @__PURE__ */ M(
        an,
        {
          className: `CommentPlugin_ShowCommentsButton ${x ? "active" : ""}`,
          onClick: () => T(!x),
          title: x ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ M("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    x && Cn(
      /* @__PURE__ */ M(
        mP,
        {
          comments: l,
          submitAddComment: D,
          deleteCommentOrThread: S,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function bP() {
  const e = Z(void 0), t = he((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function kP(e, t) {
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
function TP(e, t) {
  B(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      kP(r, t);
    };
  }, [t, e]);
}
const uN = $n(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: g, view: h } = {} } = t, b = (g ?? !1) || us(h), [x, T] = bP();
  TP(f, x), B(() => {
    if (process.env.NODE_ENV !== "production") {
      const S = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(S), p || console.warn(S);
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
    setTransientInput(S) {
      n.current?.setTransientInput(S);
    },
    setUsj(S) {
      n.current?.setUsj(S);
    },
    applyUpdate(S, D) {
      n.current?.applyUpdate(S, D);
    },
    replaceEmbedUpdate(S, D) {
      return n.current?.replaceEmbedUpdate(S, D);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(S) {
      n.current?.setSelection(S);
    },
    setAnnotation(S, D, _, w, $) {
      typeof w == "function" || w === void 0 ? n.current?.setAnnotation(S, D, _, w, $) : n.current?.setAnnotation(S, D, _, w);
    },
    removeAnnotation(S, D) {
      n.current?.removeAnnotation(S, D);
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
    replaceCharacterMarker(S, D) {
      return n.current?.replaceCharacterMarker(S, D) ?? !1;
    },
    extendCharacterMarker(S, D) {
      return n.current?.extendCharacterMarker(S, D) ?? !1;
    },
    insertMarker(S) {
      return n.current?.insertMarker(S);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(S, D) {
      return n.current?.applyMarkerMenuSelection(S, D);
    },
    splitParagraphWithMarker(S) {
      n.current?.splitParagraphWithMarker(S);
    },
    commitTypedMarker(S, D) {
      return n.current?.commitTypedMarker(S, D) ?? !1;
    },
    commitTypedCloser(S) {
      return n.current?.commitTypedCloser(S) ?? !1;
    },
    insertNote(S, D, _) {
      n.current?.insertNote(S, D, _);
    },
    selectNote(S) {
      n.current?.selectNote(S);
    },
    getNoteOps(S) {
      return n.current?.getNoteOps(S);
    },
    setComments(S) {
      x.current?.setComments(S), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const v = he(
    (S, D, _, w) => {
      if (!u) return;
      const $ = x.current?.getComments();
      u(S, $, D, _, w);
    },
    [x, u]
  ), A = he(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const S = x.current?.getComments();
    l(S);
  }, [x, i, l]);
  return B(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ M(_b, { children: /* @__PURE__ */ _e(ty, { ref: n, onUsjChange: v, ...f, children: [
    /* @__PURE__ */ M(
      yP,
      {
        setCommentStore: T,
        onChange: A,
        showCommentsContainerRef: b ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ M("div", { ref: s, className: "comment-container" })
  ] }) });
});
function _n(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function xP(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function _P(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const CP = /^[#\w().,%/\s-]+$/;
function Pr(e) {
  return e != null;
}
const SP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, vP = {
  left: "right",
  right: "left"
}, MP = "var(--usj-font-fallback, serif)";
function ly(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${xP(i)}"`).join(", ")}, ${MP}`;
}
const $c = ".editor-input.usfm", EP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function AP(e) {
  return EP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${$c}".`
  ), $c);
}
function PP(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(ly(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (CP.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Pr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Pr(t.firstLineIndent) && s.push(`text-indent: ${_n(t.firstLineIndent * 20 * r)}vw`), Pr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${_n(t.leftMargin * 20 * r)}vw`), Pr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${_n(t.rightMargin * 20 * r)}vw`
  ), Pr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${_n(t.spaceBefore * r)}pt`), Pr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${_n(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = SP[n ? vP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const wf = { c: 150, ca: 133, cp: 150 };
function Of(e, t) {
  return e && Pr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function NP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Pr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Of(e.markers.c, wf.c);
  return ["ca", "cp"].map((i) => {
    const s = Of(
      e.markers[i],
      wf[i]
    ), o = _n(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function dN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = $c } = t, s = AP(i), o = [], a = [];
  e.defaultFont && a.push(ly(e.defaultFont)), Pr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${_n(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = PP(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${_P(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...NP(e, s)), o.join(`
`);
}
export {
  Hh as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  lN as Editorial,
  Qi as GENERATOR_NOTE_CALLER,
  np as HIDDEN_NOTE_CALLER,
  uN as Marginal,
  y as MarkerType,
  Wh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Ml as STANDARD_VIEW_MODE,
  no as defaultStyleInfo,
  cN as directionToNames,
  F_ as filterAndRankItems,
  dN as generateUsjCss,
  oN as getDefaultViewMode,
  Ko as getDefaultViewOptions,
  gE as getEnterMenuItems,
  hE as getMarkerMenuItems,
  aN as getViewMode,
  Pl as getViewOptions,
  us as isBlockVerseLayout,
  Hr as isInsertEmbedOpOfType,
  Z_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
