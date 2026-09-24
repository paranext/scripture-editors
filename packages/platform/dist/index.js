import { jsx as C, jsxs as Te, Fragment as bn } from "react/jsx-runtime";
import { forwardRef as On, useState as de, useRef as Z, useCallback as ge, useEffect as z, useMemo as je, memo as ky, createContext as Rf, useContext as $f, Children as Ty, isValidElement as xy, cloneElement as _y, useImperativeHandle as Nc, useLayoutEffect as ps } from "react";
import { assertSafeKey as Ge, isValidBookCode as Cy, MARKER_OBJECT_PROPS as Sy, USJ_VERSION as _r, USJ_TYPE as Cr, isUsjTextContentLocation as vy, indexesFromUsjJsonPath as If, isUsjAttributeKeyLocation as My, isUsjAttributeMarkerLocation as Ey, isUsjClosingAttributeMarkerLocation as Ay, isUsjMarkerLocation as Py, isUsjClosingMarkerLocation as Ny, isUsjPropertyValueLocation as wy, getUsjDocumentLocationTypeName as Oy, usjJsonPathFromIndexes as ln, EMPTY_USJ as Lf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ve, $parseSerializedNode as yo, DecoratorNode as hs, ElementNode as Zt, isHTMLElement as qn, createState as bo, $getState as ie, $setState as Tt, $isRangeSelection as N, $isElementNode as U, $isTextNode as v, $getSelection as O, $isNodeSelection as ko, ParagraphNode as wc, TextNode as Be, $createTextNode as he, $getCommonAncestor as qy, $createNodeSelection as Oc, $setSelection as kn, $isLineBreakNode as gs, NODE_STATE_KEY as ms, $getEditor as Tn, $hasUpdateTag as Ry, $getNodeByKey as oe, $getRoot as ze, $createRangeSelection as qc, $createPoint as xu, $getCharacterOffsets as Rc, KEY_DOWN_COMMAND as pr, COMMAND_PRIORITY_HIGH as we, HISTORY_MERGE_TAG as Df, CLICK_COMMAND as Gi, COMMAND_PRIORITY_LOW as ft, COMMAND_PRIORITY_EDITOR as xn, isDOMNode as $c, $getNearestNodeFromDOMNode as en, CONTROLLED_TEXT_INSERTION_COMMAND as To, PASTE_COMMAND as cr, COMMAND_PRIORITY_CRITICAL as Qe, CUT_COMMAND as Vr, DROP_COMMAND as xo, DELETE_CHARACTER_COMMAND as $y, DELETE_WORD_COMMAND as Iy, DELETE_LINE_COMMAND as Ly, $isDecoratorNode as _o, COPY_COMMAND as ys, COMMAND_PRIORITY_NORMAL as ti, SELECTION_CHANGE_COMMAND as dr, getDOMSelection as Dy, isSelectionWithinEditor as Uy, $createRangeSelectionFromDom as Fy, isDOMTextNode as zy, BLUR_COMMAND as Ic, $addUpdateTag as Wr, SKIP_DOM_SELECTION_TAG as Ky, CLEAR_HISTORY_COMMAND as jy, $getPreviousSelection as By, KEY_ESCAPE_COMMAND as Lc, DRAGSTART_COMMAND as Uf, $isRootOrShadowRoot as Vy, CAN_UNDO_COMMAND as Wy, CAN_REDO_COMMAND as Hy, getDOMSelectionFromTarget as Gy, $onUpdate as Jy, KEY_ENTER_COMMAND as Ff, LineBreakNode as zf, $copyNode as Yy, FOCUS_COMMAND as Xy, $isRootNode as Qy, INSERT_PARAGRAPH_COMMAND as js, createCommand as Kf, HISTORIC_TAG as Dc, createEditor as Zy, UNDO_COMMAND as jf, REDO_COMMAND as Bf, CLEAR_EDITOR_COMMAND as eb } from "lexical";
import { addClassNamesToElement as Bn, removeClassNamesFromElement as ia, $findMatchingParent as ot, $dfsIterator as Vf, $dfs as fi, mergeRegister as Ue, registerNestedElementResolver as Wf, $unwrapNode as Ra, IS_APPLE as Bs } from "@lexical/utils";
import { useLexicalNodeSelection as tb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Rt } from "fast-equals";
import Li from "quill-delta";
import { useLexicalComposerContext as ce } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as rb, copyToClipboard as nb } from "@lexical/clipboard";
import { TreeView as ib } from "@lexical/react/LexicalTreeView";
import * as sb from "react-dom";
import { createPortal as yn } from "react-dom";
import { LexicalComposer as Hf } from "@lexical/react/LexicalComposer";
import { ContentEditable as Gf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Jf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Yf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Xf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as ob } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as ab, createDOMRange as cb, createRectsFromDOMRange as lb } from "@lexical/selection";
import { autoUpdate as ub, computePosition as db, shift as fb, flip as pb } from "@floating-ui/dom";
import { $generateNodesFromDOM as hb } from "@lexical/html";
import { AutoFocusPlugin as gb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as mb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Qf, LexicalCollaboration as yb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as bb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as kb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Tb, $isRootTextContentEmpty as xb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as _b } from "@lexical/yjs";
import { Array as _u, Map as Cu, YArrayEvent as Cb } from "yjs";
const sa = (e) => Ve(yo(e)), Sb = {
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
  return Sb[e];
}
const I = " ", Vs = "​", zt = I, Uc = `${I}|`, lr = "p", Ji = "+", ep = "-", Ws = "chapter", $a = "verse", Su = "invalid", vb = "text-spacing", Mb = "formatted-font", Eb = "marker-", tp = "external-usj-mutation", rp = "selection-change", Hr = "cursor-change", Ia = "annotation-change", Yi = "delta-change", np = "marker-settle", Ab = [
  tp,
  rp,
  Hr,
  Ia,
  Yi
], _n = "zmsc-s", ri = "zmsc-e", Pb = [_n, ri], Nb = [
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
  _n,
  ri
], ip = 1, Fc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], wb = Fc.filter((e) => e !== "sid" && e !== "eid");
class Xt extends hs {
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
    return t !== void 0 && (Nb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
  return Pb.includes(e);
}
function op(e, t, r, n, i) {
  return Ve(new Xt(e, t, r, n, void 0, i));
}
function He(e) {
  return e instanceof Xt;
}
const zc = "f", Ob = [
  // Footnote
  zc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Di(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const qb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], ap = 1;
class Me extends Zt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = zc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Di(t) === "crossref" ? ep : Ji), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => $b(t) ? {
        conversion: Rb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ob.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Di(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Di(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && qn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Di(this.getMarker()))), { element: r };
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
function Rb(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Kc(t, r, n) };
}
function Kc(e, t, r, n, i) {
  return Ve(new Me(e, t, r, n, i));
}
function $b(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Me.isValidMarker(t) && e.classList.contains(Me.getType());
}
function K(e) {
  return e instanceof Me;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var k;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(k || (k = {}));
const La = {
  id: {
    category: T.FileIdentification,
    type: k.Paragraph,
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
    type: k.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: T.FileIdentification,
    type: k.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: T.Headers,
    type: k.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: T.Headers,
    type: k.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: T.Headers,
    type: k.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: T.Headers,
    type: k.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: T.Headers,
    type: k.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: T.Headers,
    type: k.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: T.Headers,
    type: k.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: T.Headers,
    type: k.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: T.Headers,
    type: k.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: T.Headers,
    type: k.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: T.Remarks,
    type: k.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: T.Remarks,
    type: k.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: T.Remarks,
    type: k.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: T.Introduction,
    type: k.Paragraph,
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
    type: k.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: T.Introduction,
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: T.Introduction,
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: T.Introduction,
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: T.Introduction,
    type: k.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: T.Introduction,
    type: k.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: T.DivisionMarks,
    type: k.Paragraph,
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
    type: k.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: T.DivisionMarks,
    type: k.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: T.DivisionMarks,
    type: k.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: T.DivisionMarks,
    type: k.Paragraph,
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
    type: k.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: T.DivisionMarks,
    type: k.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: T.DivisionMarks,
    type: k.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: T.Paragraphs,
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: T.Paragraphs,
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: T.Poetry,
    type: k.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: T.Poetry,
    type: k.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: T.Poetry,
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: T.TitlesHeadings,
    type: k.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: T.Lists,
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Paragraph,
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
    type: k.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: T.Lists,
    type: k.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: T.Lists,
    type: k.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: T.Lists,
    type: k.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: T.Lists,
    type: k.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: T.Lists,
    type: k.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: T.Lists,
    type: k.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: T.Lists,
    type: k.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: T.Footnotes,
    type: k.Note,
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
    type: k.Note,
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
    type: k.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: T.Footnotes,
    type: k.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: T.Footnotes,
    type: k.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: T.Footnotes,
    type: k.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: T.Footnotes,
    type: k.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: T.Footnotes,
    type: k.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: T.Footnotes,
    type: k.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: T.Footnotes,
    type: k.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: T.Footnotes,
    type: k.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: T.Footnotes,
    type: k.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: T.Footnotes,
    type: k.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: T.CrossReferences,
    type: k.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: T.CrossReferences,
    type: k.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: T.CrossReferences,
    type: k.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: T.CrossReferences,
    type: k.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: T.CrossReferences,
    type: k.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: T.CrossReferences,
    type: k.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: T.CrossReferences,
    type: k.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: T.CrossReferences,
    type: k.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: T.CrossReferences,
    type: k.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: T.CrossReferences,
    type: k.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: T.CrossReferences,
    type: k.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: T.SpecialText,
    type: k.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: T.SpecialText,
    type: k.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: T.SpecialText,
    type: k.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: T.SpecialText,
    type: k.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: T.SpecialText,
    type: k.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: T.SpecialText,
    type: k.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: T.SpecialText,
    type: k.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: T.SpecialText,
    type: k.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: T.SpecialText,
    type: k.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: T.SpecialText,
    type: k.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: T.SpecialText,
    type: k.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: T.SpecialText,
    type: k.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: T.SpecialText,
    type: k.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: T.SpecialText,
    type: k.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: T.SpecialText,
    type: k.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: T.CharacterStyling,
    type: k.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: T.CharacterStyling,
    type: k.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: T.CharacterStyling,
    type: k.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: T.CharacterStyling,
    type: k.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: T.CharacterStyling,
    type: k.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: T.CharacterStyling,
    type: k.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: T.CharacterStyling,
    type: k.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: T.Breaks,
    type: k.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, un = {
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
}, vu = {
  p: { children: un },
  q: { children: un },
  q1: { children: un },
  q2: { children: un },
  q3: { children: un },
  q4: { children: un },
  b: { children: un },
  qm: {
    children: {
      Paragraphs: { add: ["p"], remove: [] }
    }
  },
  c: {
    type: k.Paragraph,
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
    type: k.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: T.SpecialFeatures,
    type: k.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: T.SpecialFeatures,
    type: k.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: T.SpecialFeatures,
    type: k.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function ur(e) {
  const t = Object.hasOwn(La, e) ? La[e] : void 0, r = Object.hasOwn(vu, e) ? vu[e] : void 0;
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
const cp = "v", lp = "c", dn = "fig", Mu = "tr", Da = "esb", up = "esbe", Eu = "periph", Au = "alt", Pu = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Ib = {
  "": "start",
  c: "center",
  r: "end"
};
function Nu(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function wu(e) {
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
const Lb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Db(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Vs && s + 1 < e.length && wu(e[s + 1]) || (wu(o) ? (r || (i = t.length, t += o), r = !0) : Lb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Ub(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Fb(e, t) {
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
const zb = /^(?:qt[1-5]?|ts)-[se]$/;
function jc(e) {
  return zb.test(e) || sp(e);
}
function oa(e, t) {
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
function Kb(e, t, r) {
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
      const p = e.indexOf("\\", i), m = p === -1 ? e.length : p;
      a(Db(e.slice(i, m))), i = m;
      continue;
    }
    const c = i, { name: l, next: u } = Fb(e, i + 1);
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
      const { word: p, next: m } = oa(e, i);
      i = m, n.push({ kind: "verse", number: p });
      continue;
    }
    if (l === lp) {
      const { word: p, next: m } = oa(e, i);
      i = m, s = void 0, n.push({ kind: "chapter", number: p });
      continue;
    }
    const f = l.startsWith("+"), h = f ? l.slice(1) : l, y = t(h)?.type;
    if (y === k.Note || y === void 0 && Me.isValidMarker(l)) {
      const { word: p, next: m } = oa(e, i);
      i = m, s = l, n.push({ kind: "note", marker: l, caller: p || "+" });
      continue;
    }
    if (y === k.Milestone || y === void 0 && jc(l)) {
      const p = Yb(e, c, l, i);
      if (p)
        n.push(p.token), p.ejectedText && o(p.ejectedText), i = p.next;
      else {
        const m = e.indexOf("\\", i), b = m === -1 ? e.length : m;
        o(e.slice(c, b)), i = b;
      }
      continue;
    }
    y === k.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : y === k.Character ? (d(), n.push({ kind: "charOpen", marker: h, isNested: f })) : Hs(h) ? (d(), Hs(h)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: h, isNested: f })) : (d(), !(r || s !== void 0) || l === Da || l === up ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: h, isNested: f }));
  }
  return n;
}
const Ou = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Hs(e) {
  return Object.hasOwn(Ou, e) ? Ou[e] : void 0;
}
function jb(e) {
  return Hs(e) !== void 0;
}
const Bb = /([-\w]+)\s*=\s*"(.*?)"/g, Vb = /[\s\u200B]*[\n\r][\s\u200B]*/g, dp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Co(e) {
  return dp[e];
}
const Wb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Hb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Xi(e, t, r = dp[t]) {
  const n = e.replace(Vb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Bb)];
  if (s.length > 0) {
    if (!Hb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Wb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function So(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Gb(e) {
  const t = Pr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Jb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Xi(e.slice(n + 1, i), r, So(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Yb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Xi(s.slice(o + 1), r, So(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Jb(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function or(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", I);
}
function Dr(e) {
  return e.content || (e.content = []), e.content;
}
function Pr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? Dr(u) : d ? Dr(d) : r;
  let h = !1;
  const y = () => {
    if (s)
      return o.length > a ? Dr(o[o.length - 1].object) : Dr(s);
    if (o.length > 0)
      return Dr(o[o.length - 1].object);
    if (!i) {
      if (h && !n)
        return f();
      i = { type: "para", marker: lr, content: [] }, f().push(i);
    }
    return Dr(i);
  }, p = (Y) => {
    const A = y();
    typeof Y == "string" && typeof A[A.length - 1] == "string" ? A[A.length - 1] = A[A.length - 1] + Y : A.push(Y);
  }, m = (Y) => {
    for (let A = Y; A < o.length; A += 1) {
      const H = o[A].object;
      H.closed = "false";
    }
  }, b = () => {
    m(0), o.length = 0;
  }, _ = (Y) => {
    s && (o.length > a && (m(a), o.length = a), a = 0, Y || (s.closed = "false"), s = void 0);
  }, S = () => {
    c = void 0, l = void 0;
  }, P = (Y, A, H) => {
    b();
    const [, ue, Se, X] = H, Ce = {
      type: "table:cell",
      marker: X ? A.slice(0, A.indexOf("-")) : A,
      align: Ib[ue],
      content: []
    };
    X && (Ce.colspan = String(Number(X) + 1 - Number(Se))), Dr(Y).push(Ce), i = Ce;
  }, E = (Y) => {
    u && (Y || (u.closed = "false"), u = void 0);
  }, j = () => {
    d = void 0;
  };
  let M, R = "", $;
  const re = () => {
    R && p(or(R)), R = "";
  }, W = (Y = !1) => {
    M?.type === "sidebar" ? R = "" : Y && R.endsWith(`
`) && (R = R.slice(0, -1)), M = void 0, re();
  }, Ae = () => {
    if (!$)
      return;
    const Y = { type: "char", marker: $.marker, content: [] };
    $.value && (Y.content = [or($.value)]), y().push(Y), o.push({ object: Y }), $ = void 0;
  }, ee = (Y, A) => {
    h = !1, S(), b(), _(!1), i = { type: "para", marker: Y, content: [] }, A && (i.content = [or(A)]), f().push(i);
  }, Re = () => {
    $ && (ee($.marker, $.value), $ = void 0);
  };
  let be;
  const tr = (Y) => {
    if (!be)
      return;
    let { value: A } = be;
    be = void 0, Y && A.endsWith(`
`) && (A = A.slice(0, -1));
    const H = A.indexOf("|"), ue = H >= 0 ? Xi(A.slice(H + 1), Eu) : void 0, Se = H >= 0 ? A.slice(0, H) : A, X = H >= 0 && (!ue || !!Se && !!ue[Au]), Ce = X ? void 0 : ue, yr = X ? A : Se, qt = {
      type: "periph",
      ...yr ? { [Au]: or(yr) } : {},
      ...Ce
    };
    qt.content = [], f().push(qt), d = qt, i = void 0;
  };
  let Ke;
  const $r = () => {
    if (Ke) {
      if (Ke.shape === "para")
        ee(dn, Ke.value);
      else {
        const Y = { type: "char", marker: dn, content: [] };
        Ke.value && (Y.content = [or(Ke.value)]), y().push(Y), o.push({ object: Y });
      }
      Ke = void 0;
    }
  }, Ir = Kb(e, t?.getMarker ?? ur, n);
  for (let Y = 0; Y < Ir.length; Y++) {
    const A = Ir[Y];
    if ($) {
      if (A.kind === "text") {
        $.value += A.text;
        continue;
      }
      if ($.shape === "char" && A.kind === "end" && A.marker.replace(/^\+/, "") === $.marker) {
        if ($.value.trim() === "") {
          y().push({ type: "char", marker: $.marker, content: [] }), $ = void 0, W();
          continue;
        }
        Object.assign($.target, {
          [$.attrName]: or($.value.trim())
        });
        const H = $.marker;
        if ($ = void 0, H === "ca") {
          const ue = Ir[Y + 1];
          ue?.kind === "text" && /^[\s\u200B]*$/.test(ue.text) && Y++;
        }
        continue;
      }
      if ($.shape === "para" && (A.kind === "para" || A.kind === "chapter")) {
        const H = $.value.replace(/[\s\u200B]+$/, "");
        H === "" ? (ee($.marker), $ = void 0) : (Object.assign($.target, { [$.attrName]: or(H) }), $ = void 0);
      } else {
        M = void 0, (A.kind === "para" || A.kind === "chapter") && $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), $.shape === "para" ? Re() : Ae(), Y--;
        continue;
      }
    }
    if (be) {
      if (A.kind === "text" || A.kind === "optbreak") {
        be.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      tr(A.kind === "para" || A.kind === "chapter"), Y--;
      continue;
    }
    if (Ke) {
      if (A.kind === "text" || A.kind === "optbreak") {
        Ke.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      if (A.kind === "end" && A.marker.replace(/^\+/, "") === dn) {
        const H = Ke.value.indexOf("|"), ue = H >= 0 ? Xi(Ke.value.slice(H + 1), dn) : void 0;
        if (ue) {
          const Se = {};
          for (const [yr, qt] of Object.entries(ue))
            Se[yr === "src" ? "file" : yr] = qt;
          const X = {
            type: "figure",
            marker: dn,
            ...Se
          }, Ce = Ke.value.slice(0, H);
          Ce && (X.content = [or(Ce)]), p(X), Ke = void 0;
          continue;
        }
      }
      $r(), Y--;
      continue;
    }
    if (M)
      if (A.kind === "text") {
        if (A.text.includes(`
`) && /^[\s\u200B]*$/.test(A.text)) {
          R += A.text;
          continue;
        }
        W();
      } else if (A.kind === "charOpen" || A.kind === "para") {
        const H = A.kind === "para" || !A.isNested ? Hs(A.marker) : void 0;
        if (H && H.targetTypes.includes(M.type)) {
          R = "", $ = {
            target: M,
            attrName: H.attrName,
            marker: A.marker,
            shape: H.shape,
            value: ""
          };
          continue;
        }
        W(A.kind === "para");
      } else
        W(A.kind === "chapter");
    if (!s && !n && (A.kind === "charOpen" && !A.isNested && A.marker === dn || A.kind === "para" && A.marker === dn)) {
      b(), Ke = { shape: A.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (A.kind) {
      case "text": {
        let H = A.text;
        if (!s && H.endsWith(`
`)) {
          const ue = Ir[Y + 1];
          (ue === void 0 || ue.kind === "para" || ue.kind === "chapter") && (H = H.slice(0, -1));
        }
        H && p(or(H));
        break;
      }
      case "para": {
        const H = !s && !n;
        if (H && A.marker === Mu) {
          b(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Mu, content: [] }, Dr(c).push(l), i = l, h = !1;
          break;
        }
        if (H && l) {
          const ue = Pu.exec(A.marker);
          if (ue && Nu(ue)) {
            P(l, A.marker, ue);
            break;
          }
        }
        if (S(), !n && A.marker === Da) {
          b(), _(!1), E(!1);
          const ue = {
            type: "sidebar",
            marker: Da,
            content: []
          };
          f().push(ue), u = ue, i = void 0, M = u, h = !1;
          break;
        }
        if (A.marker === up && u) {
          b(), _(!1), E(!0), i = void 0;
          break;
        }
        if (!n && A.marker === Eu) {
          b(), _(!1), E(!1), j(), be = { value: "" }, i = void 0, h = !1;
          break;
        }
        ee(A.marker);
        break;
      }
      case "verse": {
        _(!1);
        const H = { type: "verse", marker: cp, number: A.number };
        p(H), M = H;
        break;
      }
      case "chapter": {
        b(), _(!1), S(), E(!1), j(), i = void 0;
        const H = {
          type: "chapter",
          marker: lp,
          number: A.number
        };
        r.push(H), M = H, h = !0;
        break;
      }
      case "note": {
        _(!1);
        const H = y();
        s = { type: "note", marker: A.marker, caller: A.caller, content: [] }, a = o.length, H.push(s), M = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !A.isNested) {
          const Se = Pu.exec(A.marker);
          if (Se && Nu(Se)) {
            P(l, A.marker, Se);
            break;
          }
        }
        if (!A.isNested) {
          const Se = s ? a : 0;
          m(Se), o.length = Se;
        }
        const H = y(), ue = { type: "char", marker: A.marker, content: [] };
        H.push(ue), o.push({ object: ue });
        break;
      }
      case "end": {
        const H = A.marker.replace(/^\+/, ""), ue = s ? a : 0, Se = o.findLastIndex((X, Ce) => Ce >= ue && X.object.marker === H);
        Se >= 0 ? (Xb(o[Se].object), m(Se + 1), o.length = Se) : s && s.marker === H ? _(!0) : (m(ue), o.length = ue, p({ type: "unmatched", marker: `${A.marker}*` }));
        break;
      }
      case "milestone":
        p({ type: "ms", marker: A.marker, ...A.attributes });
        break;
      case "optbreak":
        p({ type: "optbreak" });
        break;
    }
  }
  if (be && tr(!0), Ke && $r(), $)
    if ($.shape === "para") {
      const Y = $.value.replace(/[\s\u200B]+$/, "");
      Y === "" ? ee($.marker) : Object.assign($.target, { [$.attrName]: or(Y) }), $ = void 0;
    } else
      $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), Ae();
  b(), _(!1), E(!1);
  const sn = (Y) => {
    for (const A of Y)
      typeof A != "string" && A.content && (sn(A.content), A.content.length === 0 && delete A.content);
  };
  return sn(r), r;
}
function Xb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Xi(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Cn = bo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Gr = bo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ae = bo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), hr = "marker-trailing-space", fp = 1, Qb = "marker", Bc = bo("isGutterMarker", {
  parse: (e) => e === !0
});
class Nr extends hs {
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
      span: (t) => tk(t) ? {
        conversion: Zb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Sr().updateFromJSON(t);
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
    return r && qn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
  /**
   * Stays `false` even though a paragraph's gutter glyph can be selected: keyboard reach to that
   * glyph is owned by `ArrowNavigationPlugin` and `ParaMarkerSelectionPlugin` (shared-react).
   * Returning `true` would also change Lexical's native Backspace-beside-a-decorator behavior at
   * every paragraph start, where `StructureKeyboardPlugin` arms paragraph merges.
   */
  isKeyboardSelectable() {
    return !1;
  }
}
function Zb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Sr(t, r) };
}
function Sr(e, t) {
  return Ve(new Nr(e, t));
}
function ek(e) {
  return Tt(Sr(Qb, e), Bc, !0);
}
function Vc(e) {
  return Qt(e) && ie(e, Bc);
}
function tk(e) {
  return e?.tagName === "span";
}
function Qt(e) {
  return e instanceof Nr;
}
function pp(e) {
  return e?.type === Nr.getType();
}
const Br = "internal-comment", rk = [Br], hp = Object.freeze({}), Ua = Object.freeze({}), Fa = Object.freeze({}), za = Object.freeze({}), Ka = Object.freeze({}), nk = 1, Vn = /* @__PURE__ */ new Map(), Pi = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map();
class tt extends Zt {
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
    super(o), this.__typedIDs = Os(t), this.__typedOnClicks = aa(r), this.__typedOnRemoves = ca(n), this.__typedOnMouseEnters = la(i), this.__typedOnMouseLeaves = ua(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Os(t.__typedIDs), n = aa(t.__typedOnClicks), i = ca(t.__typedOnRemoves), s = la(t.__typedOnMouseEnters), o = ua(t.__typedOnMouseLeaves);
    return new tt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return rk.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Qi().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: nk
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Bn(n, fn(t.theme.typedMark, a)), c.length > 1 && Bn(n, fn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Bn(n, fn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = fn(n.theme.typedMark, s), d = fn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Bn(r, u) : l === 0 && ia(r, u), c === 1 ? l === 2 && Bn(r, d) : l === 1 && ia(r, d));
      const f = new Set(o), h = new Set(a);
      for (const y of o)
        h.has(y) || ia(r, fn("annotationId", y));
      for (const y of a)
        f.has(y) || Bn(r, fn("annotationId", y));
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
    return _e(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Os(r.__typedIDs);
    r.__typedIDs = Os(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Gs(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = aa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return _e(t) ? Vn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ca(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return _e(t) ? Pi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = la(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return _e(t) ? Wn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ua(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return _e(t) ? Hn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!_e(a))
      return;
    Ge(t), Ge(r);
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
    if (!_e(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Gs(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Qi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Vn.delete(r.getKey()), Pi.delete(r.getKey()), Wn.delete(r.getKey()), Hn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Vn.get(this.getKey());
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
    const n = Wn.get(this.getKey());
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ua) {
      const t = Vn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Vn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Vn.set(this.getKey(), this.__typedOnClicks);
  }
  setOnClickFor(t, r, n) {
    Ge(t), Ge(r);
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
    if (!this.__typedOnClicks || this.__typedOnClicks === Ua) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Fa) {
      const t = Pi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Pi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Pi.set(this.getKey(), this.__typedOnRemoves);
  }
  setOnRemoveFor(t, r, n) {
    Ge(t), Ge(r);
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Fa) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === za) {
      const t = Wn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Wn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Wn.set(this.getKey(), this.__typedOnMouseEnters);
  }
  setOnMouseEnterFor(t, r, n) {
    Ge(t), Ge(r);
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === za) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ka) {
      const t = Hn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Hn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Hn.set(this.getKey(), this.__typedOnMouseLeaves);
  }
  setOnMouseLeaveFor(t, r, n) {
    Ge(t), Ge(r);
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Ka) {
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
    const i = ik(t, r);
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
    for (; _e(t) && Ru(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; _e(r) && Ru(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = sk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = ok(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = ak(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = ck(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Os(e = hp) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Ge(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Ge(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function aa(e) {
  if (!e || e === Ua)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ge(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ge(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ca(e) {
  if (!e || e === Fa)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ge(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ge(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function la(e) {
  if (!e || e === za)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ge(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ge(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ua(e) {
  if (!e || e === Ka)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Ge(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Ge(s), i[s] = o;
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
function qu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function ik(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Ru(e, t) {
  const r = qu(e), n = qu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function sk(e, t) {
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
function ok(e, t) {
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
function ak(e, t) {
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
function fn(e, t) {
  return `${e}-${t}`;
}
function $u(e) {
  return `external-${e}`;
}
function Qi(e, t, r, n, i) {
  return Ve(new tt(e, t, r, n, i));
}
function _e(e) {
  return e instanceof tt;
}
function gp(e) {
  return e?.type === tt.getType();
}
function Gs(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function mp(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, h = d ? c : l;
  let y, p;
  for (let m = 0; m < u; m++) {
    const b = a[m];
    if (U(p) && p.isParentOf(b))
      continue;
    const _ = m === 0, S = m === u - 1;
    let P = null;
    if (v(b)) {
      const E = b.getTextContentSize(), j = _ ? f : 0, M = S ? h : E;
      if (j === 0 && M === 0)
        continue;
      const R = b.splitText(j, M);
      P = R.length > 1 && (R.length === 3 || _ && !S || M === E) ? R[1] : R[0];
    } else {
      if (_e(b))
        continue;
      U(b) && b.isInline() && (P = b);
    }
    if (P !== null) {
      if (P && P.is(y))
        continue;
      const E = P.getParent();
      (E == null || !E.is(y)) && (p = void 0), y = E, p === void 0 && (p = Qi(), p.addID(t, r, n, i, s, o), P.insertBefore(p)), p.append(P);
    } else
      y = void 0, p = void 0;
  }
  t === Br && U(p) && (d ? p.selectStart() : p.selectEnd());
}
function lk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (_e(n))
      return n.getTypedIDs()[t];
    if (v(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (_e(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const uk = ["type", "marker", "content"], ja = "unknown", yp = 1, dk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class Rn extends Zt {
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
    return new Rn(r, n, i, s);
  }
  static importDOM() {
    return {
      [ja]: (t) => pk(t) ? {
        conversion: fk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Wc().updateFromJSON(t);
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
    return dk.has(this.getTag());
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
    const t = document.createElement(ja);
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
    const r = t ?? O();
    if (!r)
      return !1;
    if (ko(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function fk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Wc(t, r) };
}
function Wc(e, t, r) {
  return Ve(new Rn(e, t, r));
}
function pk(e) {
  return e?.tagName.toLowerCase() === ja;
}
function De(e) {
  return e instanceof Rn;
}
const bp = 1, hk = "attribute-run";
function da(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class wr extends Zt {
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
    t.classList.add(hk);
    const r = da(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = da(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = da(this.__runKind);
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
  return Ve(new wr(e));
}
function Le(e) {
  return e instanceof wr;
}
const Zi = "id", Tp = 1, gk = [
  "type",
  "marker",
  "code",
  "content"
];
class Kt extends Zt {
  __marker = Zi;
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
    return xp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Cy(t);
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
  return Ve(new Kt(e, t));
}
function gt(e) {
  return e instanceof Kt;
}
function _p(e) {
  return e?.type === Kt.getType();
}
const Js = "c", Cp = 1, mk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Ot extends Zt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Js, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Ot(r, n, i, s, o, a);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ws, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
  return Ve(new Ot(e, t, r, n, i));
}
function Ne(e) {
  return e instanceof Ot;
}
function yk(e) {
  return e?.type === Ot.getType();
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
], bk = [
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
], Ep = 1, kk = ["type", "marker", "content"];
class me extends Zt {
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
    return t !== void 0 && (bk.includes(t) || (r?.includes(t) ?? !1));
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
      span: (t) => xk(t) ? {
        conversion: Tk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return vr().updateFromJSON(t);
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
    return Iu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Iu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && qn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = this.getUnknownAttributes()?.closed === "false", i = vr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Iu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Tk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: vr(t) };
}
function vr(e, t) {
  return Ve(new me(e, t));
}
function xk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return me.isValidMarker(t) && e.classList.contains(me.getType());
}
function D(e) {
  return e instanceof me;
}
function _k(e) {
  return e?.type === me.getType();
}
const Ap = 1, Ck = "c", Pp = "span";
class gr extends hs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Ck, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new gr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Np(t) ? {
        conversion: Sk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Hc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ws, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && qn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ws, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
function Sk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Hc(t) };
}
function Hc(e, t, r, n, i, s) {
  return Ve(new gr(e, t, r, n, i, s));
}
function Np(e) {
  return e ? e.classList.contains(Ws) && e.tagName.toLowerCase() === Pp : !1;
}
function bs(e) {
  return e instanceof gr;
}
function vk(e) {
  return e?.type === gr.getType();
}
const wp = 1;
class Jr extends wc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Jr(t.__key);
  }
  static importJSON(t) {
    return Jt().updateFromJSON(t);
  }
  getMarker() {
    return lr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: wp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Jt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Jt() {
  return Ve(new Jr());
}
function fr(e) {
  return e instanceof Jr;
}
function vo(e) {
  return e?.type === Jr.getType();
}
const Mk = [
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
  lr,
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
], Op = 1, Ek = ["type", "marker", "content"];
class rt extends wc {
  __marker;
  __unknownAttributes;
  constructor(t = lr, r, n) {
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
    return t !== void 0 && (Mk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Ak,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return es().updateFromJSON(t);
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
    return r && qn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Op
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = es(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ak(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = es(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function es(e, t) {
  return Ve(new rt(e, t));
}
function ne(e) {
  return e instanceof rt;
}
function Gc(e) {
  return e?.type === rt.getType();
}
const Ys = "v", qp = 1, Pk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class pt extends Be {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Ys, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pt(r, n, i, s, o, a, c);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add($a, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
  return Ve(new pt(e, t, r, n, i, s));
}
function Oe(e) {
  return e instanceof pt;
}
function $p(e) {
  return e?.type === pt.getType();
}
const Nk = "​", si = Nk;
var Lu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Lu || (Lu = {}));
var Du;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Du || (Du = {}));
function wk() {
  return he(si);
}
function Ok(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(si, ""));
}
function ks(e) {
  return e.length > 0 && e.includes(si) && e.replaceAll(si, "") === "";
}
function Jc(e) {
  return v(e) && ks(e.getTextContent());
}
function Ip(e) {
  return yk(e) || vk(e);
}
function Je(e) {
  return Ne(e) || bs(e);
}
function Lp(e, t) {
  return e.find((r) => Je(r) && r.getNumber() === t.toString());
}
function qk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Je(r));
}
function Uu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Dp(e) {
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
function At(e) {
  return ot(e, K) ?? void 0;
}
function Rk(e) {
  return gt(e) || Ne(e) || D(e) || bs(e) || fr(e) || He(e) || ne(e) || K(e) || Oe(e) || De(e);
}
function Up(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function $k(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Pt(e) {
  return ye(e) || gt(e);
}
function ye(e) {
  return ne(e) || fr(e);
}
function Ik(e) {
  return Gc(e) || vo(e);
}
function Xs(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Sn(e, t) {
  const r = ie(t, Cn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Lk(e, t) {
  const r = U(e) ? e : e.getParent(), n = U(t) ? t : t.getParent(), i = r && n ? qy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Dk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function oi(e) {
  return e?.type === Be.getType();
}
function Uk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Fk(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function qe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function st(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Fp(e, t, r) {
  const n = qe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Ft(e, t) {
  let r = qe(e);
  return t && (r += `${I}${t}`), r += " ", r;
}
function zk(e) {
  const t = e[ms];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function zp(e) {
  return el(e) || pp(e) && e.textType === "marker" || oi(e) && zk(e) === "attribute" ? "" : oi(e) && e.text !== I ? e.text : _k(e) ? e.children.map((t) => zp(t)).join("") : "";
}
function Kk(e) {
  return e.map((r) => zp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Nt(e) {
  return " " + e + I;
}
function Yc(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = Kp(r);
    n !== zt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Kp(e) {
  return w(e) || Or(e) || v(e) && ie(e, ae) === "attribute" ? "" : v(e) ? e.getTextContent() : U(e) ? e.getChildren().map((t) => Kp(t)).join("") : "";
}
function Or(e) {
  return Qt(e) && e.getTextType() === "marker";
}
function jt(e) {
  return w(e) || Or(e);
}
function Dt(e) {
  if (!ko(e))
    return;
  const t = e.getNodes();
  if (t.length !== 1)
    return;
  const [r] = t, n = pi(r.getParent());
  return n?.is(r) ? n : void 0;
}
function pi(e) {
  if (!ne(e))
    return;
  const t = e.getFirstChild();
  return Vc(t) ? t : void 0;
}
function Ts(e) {
  const t = Oc();
  t.add(e.getKey()), kn(t);
}
function Fu(e, t) {
  jk(e, t), e.setMarker(t);
}
function jk(e, t) {
  const r = e.getMarker(), n = qe(r), i = qe(r, !0), s = st(r), o = st(r, !0), a = me.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!jt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (w(c))
        c.setMarker(t);
      else if (Or(c)) {
        const f = l.startsWith(qe("", !0));
        c.setTextContent(u ? qe(t, f) : st(t, f));
      }
    }
  });
}
function Fe(e, t = Sy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ee(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function jp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Xc(e) {
  if (!N(e))
    return zu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !U(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return zu(e) ?? t ?? void 0;
  } catch (n) {
    if (jp(n))
      return t ?? void 0;
    throw n;
  }
}
function Bk(e, t) {
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
function Qc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Bp(e) {
  return !!e && e.includes("-");
}
function Vp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function zu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Zc(e) {
  if (!e)
    return !1;
  if (gs(e) || w(e) || Or(e) || Le(e) || Qt(e) && e.getTextType() === "attribute")
    return !0;
  if (v(e)) {
    const t = ie(e, ae);
    if (t === hr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === I || ks(r))
      return !0;
  }
  return !1;
}
function Mo() {
  const e = he(I);
  return Tt(e, ae, hr), e.setMode("token"), e;
}
function Vk(e) {
  const t = e.getTextContent();
  t.startsWith(I) || e.setTextContent(I + t);
}
function $n(e) {
  return v(e) && ie(e, ae) === hr;
}
function Wp(e) {
  const t = e.getFirstChild();
  if (!jt(t) || t === null || $n(t.getNextSibling()))
    return !1;
  const r = O();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function hi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Zc(s)) {
      if (_e(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === Be.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function Eo(e) {
  let t = e.getParent();
  for (; t && _e(t); )
    t = t.getParent();
  return t;
}
function Wk(e, t) {
  return hi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Hk(e, t) {
  const r = Eo(e);
  if (!r)
    return;
  const n = hi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function Gk(e, t) {
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
function Hp(e, t) {
  const r = hi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Zc(n))
    return Hp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Xs(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Xs(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function Jk(e, t) {
  if (t <= 0)
    return 0;
  const r = hi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? Yk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function Yk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const Xk = 1;
class mr extends Be {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(gn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new mr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || gn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = gn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = gn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = gn(r.__marker, r.__markerSyntax, t), r;
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
      version: Xk
    };
  }
}
function lt(e, t, r) {
  return Ve(new mr(e, t, void 0, r));
}
function w(e) {
  return e instanceof mr;
}
function el(e) {
  return e?.type === mr.getType();
}
function tn(e) {
  return e.getTextContent() === gn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Qk(e) {
  e.setTextContent(gn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function gn(e, t, r = !1) {
  return t === "closing" ? st(e, r) : t === "selfClosing" ? st("") : qe(e, r);
}
const Zk = /* @__PURE__ */ new Set(["closed"]);
function ar(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Zk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Gp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Jp(e) {
  const t = Object.keys(e).filter((n) => !wb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Yp(e, t, r, n) {
  return Gp(
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
function Ki(e) {
  return e.getChildren().find((t) => w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function eT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Ki(e) === void 0 && Xp(e) === void 0;
}
function Xp(e) {
  return e.getChildren().find((t) => v(t) && ie(t, ae) === "attribute");
}
function ts(e, t) {
  return xs(e.getNextSibling(), t);
}
const tT = /^[ \u00A0]+$/;
function tl(e) {
  if (tn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = qe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && tT.test(r.slice(t.length));
}
function xs(e, t) {
  let r, n, i, s;
  return Le(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), w(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  tl(e) && (r = e, e = e.getNextSibling()), v(e) && ie(e, ae) === "attribute" && (n = e, e = e.getNextSibling()), w(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && tn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function rs(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!w(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (v(n) && n.getTextContent() === Nt(e.getCaller()))
    return n;
}
function Qp(e) {
  const t = rs(e);
  return t ? xs(t.getNextSibling(), "cat") : {};
}
function Ao(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || w(t)) && ie(t, ae) !== "attribute")
    return t;
}
function Zp(e) {
  const t = Ao(e);
  return t ? xs(t.getNextSibling(), "ca") : {};
}
function eh(e) {
  const t = Ao(e);
  if (!t)
    return;
  const r = xs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function th(e) {
  const t = eh(e);
  return t ? xs(t.getNextSibling(), "cp") : {};
}
function rh(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Oe(n))
        return n;
      if (!(w(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && ie(n, ae) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Le(n)))
        return;
    }
}
function Po(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Le(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), w(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  tl(s) && (t = s, s = s.getNextSibling()), v(s) && ie(s, ae) === "attribute" && (r = s, s = s.getNextSibling()), w(s) && s.getMarkerSyntax() === "selfClosing" && tn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function rl(e) {
  return D(Eo(e));
}
function Ba(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? rl(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function rT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = Ba(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function No(e) {
  return v(e) && e.getType() === Be.getType() && ie(e, ae) !== "attribute";
}
function nl(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Ba(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return w(r) ? Ba(r, t) === !0 ? "spacer" : void 0 : No(r) ? r.getTextContent().startsWith(I) ? void 0 : "prefix" : "spacer";
}
function nT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (w(t) && nl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function nh(e, t) {
  const r = O();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function ih(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = nl(t, e);
    if (r !== void 0 && !nh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        v(n) && n.setTextContent(I + n.getTextContent());
      } else
        t.insertAfter(he(I));
  });
}
function sh(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && nl(t, e) !== void 0 && nh(t, e)) : !1;
}
const iT = "file", sT = "src", oT = "colspan", aT = "category", cT = "alt", lT = "closed", uT = "false";
function dT(e) {
  return e[lT] !== uT;
}
function fT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === iT ? sT : t,
    r
  ]));
}
function oh(e, t) {
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
function ah(e, t, r) {
  const n = r ?? {}, i = dT(n);
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
        opening: `\\${oh(t, n[oT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ar(fT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [aT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + ar(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [cT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: ar(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ar(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const _t = { wantsRun: !1, valueText: void 0 }, qr = {};
function fa(e, t) {
  if (t === "va")
    return e;
  const r = ts(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function il(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (U(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function wo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = O();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function pT(e) {
  return Le(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : w(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && ie(e, ae) === "attribute";
}
function hT(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!v(e) || ie(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function pa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Oe(t))
      return t;
    if (!pT(t))
      return;
  }
}
function Ku(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Oe(t),
    ownerOf: (t) => {
      if (Le(t))
        return t.getRunKind() === e ? pa(t) : void 0;
      const r = t.getParent();
      return Le(r) ? r.getRunKind() === e ? pa(r) : void 0 : hT(t) === e ? pa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Oe(t))
        return _t;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? _t : { wantsRun: !0, valueText: I + r };
    },
    scanPieces: (t) => Oe(t) ? ts(fa(t, e), e) : qr,
    graceSite: (t, r) => Oe(t) ? !r.opener && !r.closer ? il(fa(t, e)) : wo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Oe(t) ? fa(t, e) : void 0
    }
  };
}
const gT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => qr,
  graceSite: (e) => D(e) && sh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, mT = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!v(e) || ie(e, ae) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || Ki(e) === void 0)
      return _t;
    const t = ar(e.getUnknownAttributes() ?? {}, Co(e.getMarker()));
    return t === "" ? _t : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: Xp(e) } : qr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = Ki(e);
    if (!r)
      return !1;
    const n = O();
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
    insertRunBefore: (e) => D(e) ? Ki(e) : void 0
  }
};
function ch(e) {
  if (w(e))
    return e.getMarker() === "cat";
  if (!v(e) || ie(e, ae) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return w(t) && t.getMarker() === "cat";
}
function yT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = rs(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!ch(n))
        return;
    }
}
const bT = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (Le(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Le(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : ch(e) ? yT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return _t;
    const t = e.getCategory();
    return t === void 0 ? _t : { wantsRun: !0, valueText: I + t };
  },
  scanPieces: (e) => K(e) ? Qp(e) : qr,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = rs(e);
      return r !== void 0 && il(r);
    }
    return wo(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => K(e) ? rs(e) : void 0
  }
};
function kT(e) {
  return Le(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : w(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && ie(e, ae) === "attribute";
}
function TT(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!v(e) || ie(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function xT(e) {
  const t = e.getParent();
  if (!Ne(t))
    return;
  const r = Ao(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!kT(n))
        return;
    }
}
function ju(e) {
  const t = (r) => Ne(r) ? e === "ca" ? Ao(r) : eh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ne(r),
    ownerOf: (r) => {
      if (Le(r))
        return r.getRunKind() === e && Ne(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Le(n) ? n.getRunKind() === e && Ne(n.getParent()) ? n.getParent() ?? void 0 : void 0 : TT(r) === e ? xT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ne(r))
        return _t;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? _t : { wantsRun: !0, valueText: I + n };
    },
    scanPieces: (r) => Ne(r) ? e === "ca" ? Zp(r) : th(r) : qr,
    graceSite: (r, n) => {
      if (!Ne(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && il(i);
      }
      return wo(n);
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
function lh(e) {
  if (w(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && ie(e, ae) === "attribute";
}
function _T(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (He(t)) {
      const r = w(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!lh(t))
      return;
  }
}
const CT = {
  kind: "milestone",
  ownerPredicate: (e) => He(e),
  ownerOf: (e) => {
    const t = Le(e) ? e.getRunKind() === "milestone" ? e : void 0 : Le(e.getParent()) ? e.getParent() : lh(e) ? e : void 0;
    if (!t || Le(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Le(t) ? He(r) ? r : void 0 : _T(t);
  },
  expectedPieces: (e) => {
    if (!He(e))
      return _t;
    const t = Yp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = ar(t, So(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : I + r };
  },
  scanPieces: (e) => {
    if (!He(e))
      return qr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Po(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!He(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = O();
      if (!N(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return wo(t);
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
}, ST = ah("optbreak", void 0, void 0).opening, vT = {
  kind: "optbreak",
  ownerPredicate: (e) => De(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!De(t) || t.getTag() !== "optbreak"))
      return v(e) || Qt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: ST }),
  scanPieces: (e) => De(e) ? { value: e.getFirstChild() ?? void 0 } : qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, MT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => De(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, ET = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, ns = [
  gT,
  mT,
  Ku("va"),
  Ku("vp"),
  bT,
  ju("ca"),
  ju("cp"),
  CT,
  vT,
  MT,
  ET
], AT = new Map(ns.map((e) => [e.kind, e]));
function vn(e) {
  const t = AT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Mn(e) {
  for (const t of ns) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function uh(e) {
  return Mn(e) !== void 0;
}
const Qs = "unmatched", dh = 2;
function ji(e) {
  return `\\${e}`;
}
class Rr extends Be {
  __marker;
  constructor(t = "", r) {
    super(ji(t), r), this.__marker = t, this.__mode = 1;
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
      [Qs]: (t) => NT(t) ? {
        conversion: PT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return sl().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? ji(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = ji(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Su), r.title = Bu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Bu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Qs);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Su), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: dh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function fh(e) {
  return e.getTextContent() === ji(e.getMarker());
}
function Bu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function PT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: sl(t) };
}
function sl(e) {
  return Ve(new Rr(e));
}
function NT(e) {
  return e?.tagName.toLowerCase() === Qs;
}
function rn(e) {
  return e instanceof Rr;
}
const ph = "table", Va = "immutable-table", hh = 1, wT = ["type", "marker", "content"];
class In extends Zt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Va;
  }
  static clone(t) {
    return new In(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return OT().updateFromJSON(t);
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
      type: Va,
      ...t !== void 0 && { unknownAttributes: t },
      version: hh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function OT(e) {
  return Ve(new In(e));
}
function gh(e) {
  return e instanceof In;
}
function qT(e) {
  return e?.type === Va;
}
const mh = "table:row", Vu = "immutable-table-row", yh = 1, Wa = "tr", RT = ["type", "marker", "content"];
class gi extends Zt {
  __marker;
  __unknownAttributes;
  constructor(t = Wa, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Vu;
  }
  static clone(t) {
    return new gi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return $T().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Wa).setUnknownAttributes(t.unknownAttributes);
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
      type: Vu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: yh
    };
  }
}
function $T(e, t) {
  return Ve(new gi(e, t));
}
const bh = "table:cell", Wu = "immutable-table-cell", kh = 1, Ha = "tc1", IT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function LT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class mi extends Zt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Ha, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Wu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new mi(r, n, i, s, o);
  }
  static importJSON(t) {
    return DT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ha).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = LT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Wu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: kh
    };
  }
}
function DT(e, t, r, n) {
  return Ve(new mi(e, t, r, n));
}
function Oo(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function Bt(e, t) {
  const r = Oo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function is(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function UT(e) {
  return e.getChildren().some((t) => w(t) && t.getMarkerSyntax() === "closing");
}
function FT(e) {
  return is(e) ? void 0 : { closed: "false" };
}
function zT(e, t, r, n) {
  const i = t.getMarker(), s = rl(t), o = UT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    No(a) && !a.getTextContent().startsWith(I) && a.setTextContent(I + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function En(e) {
  return ot(e, D) ?? void 0;
}
function ol(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Ga(e) {
  const t = Th(e);
  return e.getChildren().every((r) => w(r) || t && ie(r, ae) === "attribute" || v(r) && r.getTextContent().replaceAll(I, "") === "");
}
function Th(e) {
  return is(e);
}
function KT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? ar(r, Co(e.getMarker())) : "";
  n !== "" && t.insertAfter(he(n)), e.remove();
}
function jT(e, t) {
  if (is(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", rl(e)));
}
function BT(e, t) {
  return D(e) && !is(e) && !is(t);
}
function VT(e, t, r) {
  Ga(e) && e.getChildren().forEach((i) => {
    w(i) || i.remove();
  });
  const [n] = t;
  r && No(n) && !n.getTextContent().startsWith(I) && n.setTextContent(I + n.getTextContent()), e.append(...t);
}
function WT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Th(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = w(l) && l.getMarkerSyntax() === "closing", f = s && ie(l, ae) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = BT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      VT(e, o, n);
    else {
      const l = vr(t.getMarker(), FT(t));
      zT(l, t, o, n), e.insertAfter(l), Ga(l) ? l.remove() : c = l;
    }
  i && !a && jT(t, n), Ga(t) && KT(t, c);
}
function ai(e, t) {
  let r = e.getParent();
  for (; D(r); )
    WT(e, r, t), r = e.getParent();
}
function al(e) {
  if (v(e) && !w(e)) {
    const t = e.getTextContent().startsWith(I) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (U(e)) {
    const t = e.getChildren().find((r) => !w(r));
    if (t) {
      al(t);
      return;
    }
    e.selectEnd();
  }
}
const ni = /* @__PURE__ */ new WeakMap();
function HT(e, t) {
  return ni.set(e, t), () => {
    ni.get(e) === t && ni.delete(e);
  };
}
function Hu(e) {
  return ni.get(e);
}
function GT(e) {
  return ni.get(Tn())?.has(e.getKey()) ?? !1;
}
function JT(e) {
  ni.get(Tn())?.add(e.getKey());
}
function YT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ja(e) {
  return !!(e.opener || e.value || e.closer);
}
function Gu(e) {
  return /^\s/.test(e);
}
function cl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Gu(t) || !Gu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function qo(e, t, r) {
  return r.wantsRun ? cl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : YT(t);
}
function XT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return cl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function xh(e, t) {
  return !Ja(e.scanPieces(t));
}
function _s(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!qo(e, n, r))
    return !1;
  const i = O();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Xs(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function QT(e, t, r, n) {
  return !r.wantsRun || Ja(n) || Ry(Yi) ? !1 : Tn().getEditorState().read(() => {
    const i = oe(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ja(e.scanPieces(i));
  });
}
function ZT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Ju(e) {
  const t = he(e);
  return Tt(t, ae, "attribute"), t;
}
function ex(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = kp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function tx(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    v(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Ju(n.valueText));
    return;
  }
  const l = ex(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), h = l.getFirstChild();
    return h ? h.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : v(d) ? cl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Ju(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function ss(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (qo(e, i, n) && !GT(t)) {
    if (QT(e, t, n, i)) {
      JT(t);
      return;
    }
    if (!_s(e, t)) {
      if (!n.wantsRun) {
        ZT(i);
        return;
      }
      tx(e, t, i, n);
    }
  }
}
function rx(e, t, r) {
  ss(e, t), t.isAttached() && _s(e, t) && r.add(t.getKey());
}
function _h(e) {
  if (!v(e))
    return !1;
  if (w(e) || Oe(e) || rn(e))
    return !0;
  const t = ie(e, ae);
  return t === "attribute" || t === hr;
}
function ll(e, t) {
  return w(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && tn(e) && D(e.getParent())) : !1;
}
function nx() {
  const e = O();
  return N(e) ? ll(e.focus.getNode(), e.focus.offset) : !1;
}
function Ch(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && _h(t) ? t : void 0;
}
function ix(e) {
  const t = Ch(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function sx(e) {
  const t = Ch(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Yu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Xu(e, t) {
  e.set(t.key, t.offset, t.type);
}
function ox(e, t) {
  let r = sx(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!v(n))
      return;
    if (!_h(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Qu(e, t) {
  const r = ox(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Sh(e) {
  if (e.isCollapsed()) {
    const a = ix(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Yu(r), Yu(n)], s = Qu(r, "next"), o = Qu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Xu(r, i[0]), Xu(n, i[1]), !1) : !0;
}
const Zs = "verse-block", vh = 1, ax = "verse-block";
class yi extends Zt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Zs;
  }
  static clone(t) {
    return new yi(t.__number, t.__key);
  }
  static importJSON(t) {
    return cx().updateFromJSON(t);
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
    return Vp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(ax), Zu(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Zu(r, this.__number), !1;
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
      type: Zs,
      number: this.getNumber(),
      version: vh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Zu(e, t) {
  const { start: r, end: n } = Vp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), ed(e, "data-verse-start", i ? r : NaN), ed(e, "data-verse-end", i ? n : NaN);
}
function ed(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function cx(e) {
  return Ve(new yi(e));
}
function os(e) {
  return e instanceof yi;
}
function lx(e) {
  return e?.type === Zs;
}
const ux = [
  Kt,
  gr,
  Ot,
  pt,
  me,
  Me,
  Xt,
  mr,
  Rn,
  Nr,
  Rr,
  rt,
  Jr,
  In,
  gi,
  mi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  wr,
  {
    replace: wc,
    with: () => Jt(),
    withKlass: Jr
  }
], eo = {
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
}, dx = {
  paragraph: k.Paragraph,
  character: k.Character,
  note: k.Note,
  milestone: k.Milestone
};
function fx(e) {
  if (!e)
    return ur;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: ur(r)?.category ?? T.Uncategorized,
      type: dx[n.styleType] ?? k.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ur(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function td(e, t, r) {
  const n = {
    type: Cr,
    version: _r,
    content: e
  }, i = t.serializeEditorState(n, r);
  return vo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Mh = "v", Eh = 1, px = "verse-selected";
class St extends hs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Mh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => mx(t) ? {
        conversion: gx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ul().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add($a, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && qn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add($a, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Ft(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Vs + this.getNumber() + Vs
    );
    return C(hx, { nodeKey: this.getKey(), text: t });
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
      version: Eh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (jp(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function hx({ nodeKey: e, text: t }) {
  const [r] = tb(e);
  return C("span", { className: r ? px : void 0, children: t });
}
function gx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: ul(t) };
}
function ul(e, t, r, n, i, s) {
  return Ve(new St(e, t, r, n, i, s));
}
function mx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Mh;
}
function Ln(e) {
  return e instanceof St;
}
function yx(e) {
  return e?.type === St.getType();
}
function pe(e) {
  return Oe(e) || Ln(e);
}
function Ah(e) {
  return $p(e) || yx(e);
}
function bx(e) {
  return kx(e).find((t) => ne(t));
}
function kx(e) {
  return e.some(os) ? e.flatMap((t) => os(t) ? t.getChildren() : t) : e;
}
function Ro(e) {
  return U(e) ? os(e) ? e.getChildren().flatMap(Ro) : e.getChildren() : [];
}
function Tx(e, t) {
  return Ro(e).find((i) => pe(i) && Qc(t, i.getNumber()));
}
function xx(e, t) {
  return t === 0 ? bx(e) : e.map((r) => Tx(r, t)).filter((r) => r)[0];
}
function to(e) {
  return Ro(e).find((r) => pe(r));
}
function Ph(e, t) {
  if (!U(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (pe(i))
      return i;
  }
}
function _x(e) {
  const t = e.getParent();
  if (t && U(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (pe(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Je(r); ) {
    const n = to(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Ya(e) {
  return Ro(e).findLast((t) => pe(t));
}
function Cx(e) {
  if (!Oe(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Sx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && U(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function vx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Sx(t, e, r);
  if (v(e)) {
    const n = Cx(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function rd(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Mx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return rd(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return vx(e, t) ? { verseNum: n } : rd(e);
}
function Ex(e) {
  return Rk(e) || Ln(e);
}
function dl(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(I) && e.setTextContent(`${t} `);
  }
}
function Nh(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Xa(e, t) {
  return e.getEditorState().read(() => !oe(t));
}
function Ax(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = fl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && U(i) && U(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && U(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (pe(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = nd(i);
      for (; s && !Je(s); ) {
        const o = to(s);
        if (o) {
          n = o;
          break;
        }
        s = nd(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = to(s);
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
function Px(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = fl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && U(i) && (n = Ph(i, r.getIndexWithinParent())), !n && i) {
      let o = id(i);
      for (; o && !Je(o); ) {
        const a = Ya(o);
        if (a) {
          n = a;
          break;
        }
        o = id(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Je(s); ) {
      const o = Ya(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function nd(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function id(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function fl(e, t) {
  if (U(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && pe(n))
      return n;
    const i = Ph(e, t.anchor.offset);
    if (i)
      return i;
    const s = to(e);
    if (s)
      return s;
  }
  return pl(e);
}
function pl(e) {
  if (!e || Je(e))
    return;
  if (pe(e))
    return e;
  let t = Uu(e);
  for (; t; ) {
    if (Je(t))
      return;
    if (pe(t))
      return t;
    const r = Ya(t);
    if (r)
      return r;
    t = Uu(t);
  }
}
const Nx = ["style"], wx = ["style", "code"], ro = ["style", "cid"], Ox = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], qx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Rx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], $x = ["style", "caller", "category", "contents"], Ix = ["tag", "marker", "contents"], Lx = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], as = `
`;
function Dx(e, t) {
  const r = oe(e);
  if (!wt(r))
    return;
  const n = wh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function wh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Vf();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (ci(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      ci(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Mr(l) || wt(l))
        return n;
      Pt(l) && (a = l);
    }
    if (Pt(l) && (i.includes(l) || i.push(l)), Oh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += hl(l, t);
  }
  if (a)
    return n;
}
function sd(e, t, r = "delta-doc") {
  if (e.length < 2 || !zx(e[0]) || !Fx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Ux(n, r)?.getKey());
}
function Ux(e, t = "delta-doc") {
  const r = Vf();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (ci(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      ci(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Pt(a) && (i.includes(a) || i.push(a)), Oh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = hl(a, t);
    if (Mr(a) && l > 0 && e >= n && e < n + l || wt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function ci(e, t) {
  return e ? t ? !Xs(t.node, e.getKey()) : !0 : !1;
}
function Mr(e) {
  return v(e) && !wt(e);
}
function wt(e) {
  return Je(e) || pe(e) || He(e) || K(e) || De(e) || rn(e);
}
function Kr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Fx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Lx.includes(t);
}
function zx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Oh(e, t) {
  return K(e) || De(e) ? !0 : t === "apply" && U(e) && wt(e);
}
function qh(e) {
  const t = e.getParent();
  return jt(e) && ne(t) && t.getFirstChild() === e;
}
function Qa(e) {
  const t = e.getParent();
  return t !== null && ot(t, Le) !== null;
}
function Kx(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === zt && t.getChildrenSize() === 1;
}
function jx(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return w(r) && r === t.getFirstChild() && e.getTextContent() === Nt(t.getCaller());
}
function Bx(e) {
  return !uh(e) && hl(e, "delta-doc") === e.getTextContentSize();
}
function hl(e, t) {
  if (wt(e))
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
    (Jc(e) || qh(e) || ie(e, ae) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ie(e, ae) === "attribute" || Qa(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Uc) || Kx(e) || jx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Za(e, t) {
  const r = { insert: e.__text }, n = ie(e, Gr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Rh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function od(e) {
  const t = new Li();
  return e.isEmpty() || e.read(() => {
    const r = ze();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && fr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Vx();
    for (const s of i)
      t.push(s);
  }), t;
}
function gl(e, t) {
  const r = [], n = fi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...ad(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...ad(c, n.length, n, i, s, o, a));
  return r;
}
function Vx() {
  return gl();
}
function ad(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Wx(e, a, n), Hx(e, a, i, s, o), Gx(e, t, r, i, o, s, a), Je(e) && a.push(Qx(e)), pe(e) && a.push(e_(e)), He(e) && a.push(t_(e)), rn(e) && a.push(r_(e)), Yx(e, a, s), Jx(e, a, s), o_(c, s), a;
}
function Wx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    gt(n) ? t.push(Xx(n)) : ne(n) ? t.push(Zx(n)) : fr(n) && t.push({ insert: as });
  }
  Pt(e) && (r.includes(e) || r.push(e));
}
function Hx(e, t, r, n, i) {
  if (!v(e) || Oe(e) || rn(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = At(e) !== void 0;
  if (w(e) && (o || qh(e) || Qa(e) || uh(e)) || ie(e, ae) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (ks(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && w(c) && c === s.getFirstChild() && a === Nt(s.getCaller()))
    return;
  const l = D(s) ? s : void 0, u = l?.getFirstChild();
  o && l && w(u) && c === u && a.startsWith(I) && (a = a.slice(1));
  const d = a.startsWith(Uc) || ie(e, ae) === "attribute" || Qa(e), f = !!l && a === zt && l.getChildrenSize() === 1, h = $o(e, n), y = h ? r.filter((b) => h.children.includes(b)) : r, p = Za(e, y);
  if (p.insert = a, h) {
    if (!a || a === I || d)
      return;
    h.contentsOps?.push(p);
  } else
    f || d || t.push(p);
  const m = a !== "" && !f && !(d && l);
  if (r.length > 0 && m)
    for (const b of r)
      i.add(b);
}
function Gx(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (ci(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = i_(c), u = $o(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Jx(e, t, r) {
  if (!K(e))
    return;
  const n = n_(e), i = $o(e, r), s = {
    node: e,
    children: fi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Yx(e, t, r) {
  if (!De(e))
    return;
  const n = s_(e), i = $o(e, r), s = {
    node: e,
    children: fi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function nn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function Xx(e) {
  const t = { style: Zi, code: e.__code };
  return nn(t, e), { insert: as, attributes: { book: t } };
}
function Qx(e) {
  const t = { style: Js, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), nn(t, e), { insert: { chapter: t } };
}
function Zx(e) {
  const t = { style: e.__marker };
  return nn(t, e), { insert: as, attributes: { para: t } };
}
function e_(e) {
  const t = { style: Ys, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), nn(t, e), { insert: { verse: t } };
}
function t_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), nn(t, e), { insert: { milestone: t } };
}
function r_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function n_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), nn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ie(e, Gr);
  return n && (r.attributes = { segment: n }), r;
}
function i_(e) {
  const t = { insert: "" }, r = Rh([e]);
  return r && (t.attributes = { char: r }), t;
}
function s_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), nn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function $o(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function o_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    ci(t[r].node, e) && t.splice(r, 1);
}
function Rh(e) {
  if (e.length === 0)
    return;
  const t = e.map(a_);
  return t.length === 1 ? t[0] : t;
}
function a_(e) {
  const t = { style: e.__marker }, r = ie(e, Cn);
  return r && (t.cid = r), nn(t, e), t;
}
const $h = 1;
class Yt extends hs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Ji, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Yt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => l_(t) ? {
        conversion: c_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ml().updateFromJSON(t);
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
    return r && qn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => u_(t, n), (l) => d_(t, n, s, l), () => f_(t, n), () => p_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return C("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Ji && i ? (
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
      version: $h
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function c_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: ml(t, r) };
}
function ml(e, t, r) {
  return Ve(new Yt(e, t, r));
}
function l_(e) {
  return e ? e.classList.contains(Yt.getType()) : !1;
}
function vt(e) {
  return e instanceof Yt;
}
function u_(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function d_(e, t, r, n) {
  e.update(() => {
    const i = oe(t);
    if (!K(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = oe(r);
    if (!vt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function f_(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return gl(r);
  });
}
function p_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of fi())
      if (K(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const h_ = [
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
], g_ = ["†"];
function Io(e) {
  if (Ih())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = cd(t), [s, o] = cd(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = ld(n, i), [s, o] = ld(s, o);
  const a = qc();
  return a.anchor = xu(n.getKey(), i, ud(n)), a.focus = xu(s.getKey(), o, ud(s)), a;
}
function yl() {
  if (Ih())
    return;
  const e = O();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = no(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = no(i, s);
  return { start: n, end: o };
}
function cd(e) {
  if (vy(e)) {
    const t = If(e.jsonPath);
    let r = ze();
    for (let n = 0; n < t.length; n++) {
      if (!r || !U(r))
        return [void 0, void 0];
      const i = hi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : Gk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && U(r) ? [r, Jk(r, e.offset)] : [void 0, void 0];
  }
  if (My(e) || Ey(e)) {
    const t = Ni(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (U(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && U(r) ? [r, 0] : [void 0, void 0];
  }
  if (Ay(e)) {
    const t = Ni(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (U(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && U(r) ? [r, 0] : [void 0, void 0];
  }
  if (Py(e)) {
    const t = Ni(e.jsonPath);
    if (!t || !U(t))
      return [void 0, void 0];
    const r = ha(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && v(n) ? [n, 0] : [void 0, void 0];
  }
  if (Ny(e)) {
    const t = Ni(e.jsonPath);
    if (!t || !U(t))
      return [void 0, void 0];
    const r = ha(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && v(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (wy(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Ni(e.jsonPath);
    if (!n || !U(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ha(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && v(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Oy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function ld(e, t) {
  if (!Or(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !U(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function ud(e) {
  return U(e) ? "element" : "text";
}
function ha(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (w(n) && n.getMarkerSyntax() === t || t === "closing" && w(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Or(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Ni(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = If(r);
  let i = ze();
  for (const s of n) {
    if (!i || !U(i))
      return;
    const o = hi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function no(e, t) {
  if (w(e)) {
    const r = e.getMarkerSyntax(), n = m_(e), i = n ? ln(pn(n)) : ln(pn(e));
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
  if (_e(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (v(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return no(n, s);
    }
    const i = Eo(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return no(i, o);
    }
  }
  if (U(e)) {
    const r = e.getChildAtIndex(t);
    if (Or(r)) {
      const i = r.getTextContent().endsWith("*"), s = ln(pn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Hp(e, t);
    return n.type === "text" ? {
      jsonPath: ln([...pn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: ln(pn(e)),
      offset: n.index
    };
  }
  if (v(e)) {
    const r = Hk(e, t);
    if (r)
      return {
        jsonPath: ln([
          ...pn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: ln(pn(e)), offset: t };
}
function m_(e) {
  const t = e.getParent();
  if (!t || !U(t))
    return;
  const r = y_(e);
  return r && !Pt(r) && !v(r) && !_e(r) ? r : t;
}
function y_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Zc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function pn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Eo(r);
    if (!n)
      break;
    const i = Wk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Ih() {
  for (let e = ze().getFirstChild(); e; e = e.getNextSibling())
    if (os(e))
      return !0;
  return !1;
}
function Lh(e, t, r, n, i, s, o) {
  if (!Me.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Io(r) : O();
  if (!N(a))
    return;
  const c = T_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Di(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Dh(e, l, c, i, s, void 0, void 0);
  return k_(u, a, i), u;
}
function bl(e) {
  return e !== "expanded";
}
function b_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!v(r) || !D(r.getParent()))
    return;
  if (w(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return w(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function k_(e, t, r) {
  const n = bl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Dk(t), Sh(t);
  const i = b_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function Gn(e, t, r) {
  const n = vr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(Sr("marker", qe(e)));
  const s = t === "" ? zt : i ? I + t : t;
  return n.append(he(s)), n;
}
function T_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Gn("fr", f, n)), !e.isCollapsed()) {
        const h = fd(e);
        h.length > 0 && o.push(Gn("fq", h, n));
      }
      o.push(Gn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Gn("xo", f, n)), !e.isCollapsed()) {
        const h = fd(e);
        h.length > 0 && o.push(Gn("xq", h, n));
      }
      o.push(Gn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Dh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : bl(n?.noteMode), l = Kc(e, t, c);
  s && Tt(l, Gr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = Sr("marker", qe(e) + " "), a || (f = Sr("marker", st(e))));
  let h;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (h = he(Nt(l.__caller)), u && h.setMode("token"), l.append(h, ...r));
  else {
    const y = () => Mo(), p = r.flatMap(__(y));
    if (t === "")
      l.append(...p);
    else {
      const m = Yc(r);
      let b = () => {
      };
      i?.noteCallerOnClick && (b = i.noteCallerOnClick), h = ml(l.__caller, m, b), l.append(h, y(), ...p);
    }
  }
  return f && l.append(f), l;
}
function dd(e) {
  if (typeof e == "string") {
    const i = oe(e);
    return K(i) ? i : void 0;
  }
  const t = fi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => K(i.node))[e]?.node;
  if (K(n))
    return n;
}
function x_(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (Ln(n) || !n) {
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
function __(e) {
  return (t) => Qt(t) ? [t] : [t, e()];
}
function C_(e) {
  const t = e.getParent();
  return t !== null && ot(t, K) !== null;
}
function fd(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Rc(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || vt(c) || C_(c)) && !w(c) && !rn(c) && ie(c, ae) !== "attribute") {
      if (pe(c)) {
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
const kl = [
  Yt,
  St,
  ...ux
], S_ = [
  yi,
  ...kl
], v_ = On((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return C("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function M_() {
  const [e, t] = de(void 0), [r, n] = de(), i = Z(null), s = ge((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = ub(l, c, () => {
      db(l, c, {
        placement: "bottom-start",
        middleware: [fb(), pb()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = ge(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return z(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function E_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = M_();
  return z(() => {
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
const A_ = ky(v_);
function Uh({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = E_({ isOpen: e, floatingBoxRef: r }), s = je(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return yn(
    C(A_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Fh = Rf(void 0);
function Tl() {
  const e = $f(Fh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function P_(e, t) {
  const [r, n] = de(0), [i, s] = de(-1), o = je(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ge(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = ge(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = ge(() => {
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
function N_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = P_(t, r);
  return C(Fh.Provider, { value: i, children: C("div", { ...n, children: e }) });
}
const zh = On(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Tl(), u = ge((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = ge((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return C("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function w_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = Tl(), o = je(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = je(() => {
    const c = o(s);
    return t ? Ty.map(c, (l, u) => xy(l) && l.type === zh && l.props.index === void 0 ? _y(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return z(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), C("div", { ref: n, role: "menu", ...r, children: a });
}
const O_ = (e, t, r) => Us(e, r).toLowerCase().includes(t.toLowerCase()), pd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Us = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function q_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? pd(r[0]) : "") : (u = n || (r.length > 0 ? pd(r[0]) : ""), d = (y, p) => O_(y, p, u));
  const f = s || u, h = /* @__PURE__ */ new Map();
  return r.filter((y) => {
    try {
      return d(y, t);
    } catch (p) {
      return console.warn("Error filtering item:", y, p), !1;
    }
  }).sort((y, p) => {
    const m = (S) => (h.has(S) || h.set(S, Us(S, f).toLowerCase()), h.get(S) ?? ""), b = a ? Us(y, f) : m(y), _ = a ? Us(p, f) : m(p);
    for (const S of c)
      switch (S) {
        case "exact":
          if (b === l && _ !== l)
            return -1;
          if (_ === l && b !== l)
            return 1;
          break;
        case "startsWith":
          if (b.startsWith(l) && !_.startsWith(l))
            return -1;
          if (_.startsWith(l) && !b.startsWith(l))
            return 1;
          break;
        case "contains": {
          const P = b.indexOf(l), E = _.indexOf(l);
          if (P !== -1 && E === -1)
            return -1;
          if (E !== -1 && P === -1)
            return 1;
          if (P !== -1 && E !== -1)
            return P - E;
          break;
        }
      }
    return b.localeCompare(_);
  });
}
const ga = {
  Root: N_,
  Options: w_,
  Option: zh
};
function R_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return je(() => q_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function $_() {
  const { moveUp: e, moveDown: t, select: r } = Tl();
  return je(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const I_ = () => {
  const e = $_(), [t] = ce();
  z(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(pr, r, we);
  }, [t, e]);
};
function L_() {
  return I_(), null;
}
const D_ = ["Shift", "Control", "Alt", "Meta"];
function Kh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ce(), u = s !== void 0, [d, f] = de(""), h = u ? s ?? "" : d, y = R_({ query: h, items: t, filterBy: "name" }), p = (m) => {
    n?.(), r ? r(m) : m.action(l);
  };
  return z(() => {
    a?.(h, y);
  }, [a, h, y]), z(() => l.registerCommand(pr, (m) => {
    if (u || c?.includes(m.key) || D_.includes(m.key))
      return !1;
    if ((m.ctrlKey || m.metaKey || m.altKey) && !m.getModifierState("AltGraph"))
      return n?.(), !1;
    const _ = {
      Escape: () => n?.(),
      Backspace: () => {
        h.length === 0 ? n?.() : f((S) => S.slice(0, -1));
      }
    }[m.key];
    return _ ? (m.stopPropagation(), m.preventDefault(), _(), !0) : m.key.length === 1 ? (m.stopPropagation(), m.preventDefault(), m.key !== o && f((S) => S + m.key), !0) : !1;
  }, we), [l, u, h, o, n, c]), Te(ga.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: y, onSelectOption: (m) => p(m), children: [!u && C("input", { value: h, type: "text", disabled: !0 }), C(L_, {}), C(ga.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (m) => m.map((_, S) => Te(ga.Option, { index: S, children: [C("span", { className: "label", children: _.label ?? _.name }), C("span", { className: "description", children: _.description })] }, _.name)) })] });
}
function U_({ trigger: e, items: t }) {
  const [r] = ce(), [n, i] = de(!1), s = ge((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return z(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), z(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = O();
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = O();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && C(Uh, { isOpen: n, children: ({ placement: o }) => C(Kh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function F_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: je(() => {
    if (!t || !e)
      return;
    const i = ur(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = ur(o), { action: c } = r(o, a);
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
function Bi(e, t) {
  return `${e}:${t}`;
}
function z_(e, t) {
  z(() => {
    if (!e.hasNodes([tt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ue(Wf(e, tt, (n) => Qi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], h = o[l]?.[d], y = a[l]?.[d], p = c[l]?.[d];
          i.addID(l, d, f, h, y, p);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(tt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = oe(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : _e(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!tt.isReservedType(c))
              for (const u of l) {
                let d = t.get(Bi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Bi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Bi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const K_ = On(function({ logger: t }, r) {
  const [n] = ce(), i = je(() => /* @__PURE__ */ new Map(), []);
  z_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Bi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = oe(u);
        _e(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Gs(d));
      }
  };
  return Nc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (tt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const h = Io(o);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), mp(h, a, c, l, u, d, f);
      }, { tag: Ia });
    },
    removeAnnotation(o, a) {
      if (tt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Bi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ia });
    }
  })), null;
}), j_ = [];
function B_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = j_, onChange: n }) {
  const [i] = ce();
  return ps(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(Df) && !u.has(np) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = V_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function V_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Li();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = oe(i), o = s !== null && At(s) !== void 0;
    if (t.size === 1 && v(s) && !o && Bx(s)) {
      const a = wh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = oe(i);
          return new Li([v(d) ? Za(d) : { insert: "" }]);
        }), l = new Li([Za(s)]), u = new Li(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = od(r), c = od(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const xl = "formatted", jh = "unformatted", Bh = "paragraph-structure", _l = "standard", Vh = "block-verse", W_ = {
  [xl]: "Formatted",
  [jh]: "Unformatted",
  [Bh]: "Paragraph Structure",
  [_l]: "Standard",
  [Vh]: "Block Verse"
};
function bi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Cl, Sl;
function H_(e) {
  const t = vl(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Cl = e, Sl = t;
}
H_(xl);
const sN = () => Cl, Lo = () => Sl;
function vl(e) {
  let t;
  switch (e ?? Cl) {
    case xl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case jh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Bh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case _l:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Vh:
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
function oN(e) {
  if (!e)
    return;
  const t = hd(e);
  return Object.keys(W_).find((r) => Rt(hd(vl(r)), t));
}
const G_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function hd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...G_, ...t };
}
function Do(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function J_(e) {
  if (e)
    return cs(e) ? St : e.markerMode === "editable" ? pt : St;
}
function cs(e) {
  return e?.verseLayout === "block";
}
function Y_(e) {
  const t = [], r = e ?? Sl;
  return r && (t.push(`${Eb}${r.markerMode}`), r.hasSpacing && t.push(vb), r.isFormattedFont && t.push(Mb)), t;
}
function X_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += Q_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), eC(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += tC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), nC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function Q_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), Z_(t, e.retain, e.attributes, r, n)), e.retain);
}
function Z_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = ze();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Mr(u)) {
      const d = u.getTextContentSize();
      if (e < o + d && o < e + t) {
        const f = Math.max(0, e - o), h = d - f, y = Math.min(s, h);
        if (y > 0) {
          let p = u;
          const m = f > 0, b = y < d - f;
          if (m && b) {
            const [, _] = u.splitText(f);
            [p] = _.splitText(y);
          } else m ? [, p] = u.splitText(f) : b && ([p] = u.splitText(y));
          if (Yr(r)) {
            const _ = p.getParent();
            if (D(_)) {
              const S = r.char;
              let P;
              Array.isArray(S) ? a >= 0 && a <= S.length - 1 && (P = S[a]) : a === 0 && (P = S);
              const E = P ? Sn(P, _) : !1;
              if (E && Array.isArray(S) && S.length > 1) {
                const j = he("");
                p.replace(j);
                const M = typeof r.segment == "string" ? r.segment : void 0, R = ki(S.slice(1), n, p, M);
                let $ = j;
                for (const re of R)
                  $.insertAfter(re), $ = re;
                j.remove(), $t(r, p);
              } else if (E)
                $t(r, p);
              else {
                p.remove();
                const j = gd(p, r, n, i);
                if (j && j.length > 0) {
                  let M = _;
                  for (const R of j)
                    M.insertAfter(R), M = R;
                }
              }
            } else {
              const S = he("");
              p.replace(S);
              const P = gd(p, r, n, i);
              if (P && P.length > 0) {
                let E = S;
                for (const j of P)
                  E.insertAfter(j), E = j;
                S.remove();
              } else
                S.replace(p);
            }
          } else
            $t(r, p);
          s -= y;
        }
      }
      o += d;
    } else if (wt(u))
      e <= o && o < e + t && s > 0 && (md(u, r), s -= 1), o += 1;
    else if (D(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Yr(r)) {
          const f = r.char;
          let h;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (h = f[a]) : a === 0 && (h = f), h) {
            ec(u, h.style), typeof h.cid == "string" && Tt(u, Cn, () => h.cid);
            const y = Fe(h, ro);
            y && Object.keys(y).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...y
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || fC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const h of f) {
          if (s <= 0)
            break;
          if (l(h) && s <= 0)
            return d && Ra(u), !0;
        }
      }
      d && Ra(u), a -= 1;
    } else if (Pt(u)) {
      const d = u.getChildren();
      for (const h of d) {
        if (s <= 0)
          break;
        if (l(h) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!fr(u))
          md(u, r);
        else if (Ml(r)) {
          const h = Gh(r.para, n);
          h && u.replace(h, !0);
        }
        s -= f;
      }
      o += f;
    } else if (U(u)) {
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
function gd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = ki(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), $t(t, e);
    return;
  }
  const a = {};
  Qh.forEach((u) => {
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
function Wh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  w(r) ? (r.setMarker(t), r.setTextContent(qe(t))) : Qt(r) && r.getTextType() === "marker" && r.setTextContent(qe(t) + I);
}
function ec(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    w(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = D(e.getParent()), i = e.getFirstChild();
  Qt(i) && i.getTextType() === "marker" && i.getTextContent() === qe(r, n) && i.setTextContent(qe(t, n));
  const s = e.getLastChild();
  Qt(s) && s.getTextType() === "marker" && s.getTextContent() === st(r, n) && s.setTextContent(st(t, n));
}
function md(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && Yr(t)) {
      const i = tc(n);
      if (ec(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Tt(e, Cn, () => o);
      }
      const s = Fe(i, ro);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Je(e) || pe(e) || He(e) || K(e) || De(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (gt(e) || ne(e) || D(e)) && (r === "style" && ne(e) ? Wh(e, n) : r === "style" && D(e) ? ec(e, n) : r === "code" && gt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Tt(e, Gr, () => n));
  }
}
function eC(e, t, r) {
  if (t <= 0)
    return;
  const n = ze();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Mr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (wt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Pt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Pt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Jt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const h = a.getNextSibling();
          if (h && ye(h)) {
            let y = i + 1;
            const p = h.getChildren();
            for (const b of p) {
              if (s <= 0)
                break;
              const _ = i;
              if (i = y, o(b)) {
                i = _;
                break;
              }
              Mr(b) ? y += b.getTextContentSize() : wt(b) && (y += 1), i = _;
            }
            const m = h.getChildren();
            for (const b of m)
              b.remove(), a.append(b);
            h.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Jt(), !0);
        } else ne(a) ? a.replace(Jt(), !0) : a.remove();
      }
      i += 1;
    } else if (U(a)) {
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
function tC(e, t, r, n, i) {
  if (t === as)
    return yd(e, r, n, i);
  if (t.endsWith(as) && !Ml(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Yr(r))
        throw new Error("Text + LF should not have char attributes");
      o += io(e, s, r, i);
    }
    return o += yd(e + o, r, n, i), o;
  } else return Yr(r) ? rC(e, t, r, n, i) : io(e, t, r, i);
}
function rC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = he(t === "" ? zt : t);
  $t(r, s);
  let o;
  {
    let m = function(b) {
      if (Mr(b)) {
        const _ = b.getTextContentSize();
        if (e >= p && e < p + _) {
          const S = b.getParent();
          return D(S) && (o = S), !0;
        }
        p += _;
      } else if (wt(b))
        p += 1;
      else if (D(b)) {
        const _ = b.getChildren();
        for (const S of _)
          if (m(S))
            return !0;
      } else if (U(b)) {
        const _ = b.getChildren();
        for (const S of _)
          if (m(S))
            return !0;
        Pt(b) && (p += 1);
      }
      return !1;
    };
    const y = ze();
    let p = 0;
    m(y);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const y = a[0];
      y && Sn(y, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Sn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = ki(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(D);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), io(e, t, void 0, i);
  const f = {};
  for (const [y, p] of Object.entries(r))
    y !== "char" && y !== "segment" && typeof p == "string" && (f[y] = p);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let h = !0;
  for (const y of u)
    if (!Hh(e, y, i)) {
      h = !1;
      break;
    }
  return h ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), io(e, t, void 0, i));
}
function io(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = ze();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Mr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = he(t);
        if ($t(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          D(f) && !Yr(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (wt(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const d = he(t);
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
        const d = he(t);
        return $t(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Pt(c)) {
      if (!o && e === s) {
        const d = he(t);
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
        const d = he(t);
        return $t(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (U(c)) {
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
    const c = he(t);
    $t(r, c);
    const l = Jt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Hh(e, t, r) {
  const n = ze();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!U(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (ye(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Jt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Mr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (wt(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (Pt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (fr(u) && Pt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (U(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return U(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      ye(a) ? fr(a) && ne(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ye(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ye(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function nC(e, t, r, n, i) {
  let s;
  return Kr("chapter", t) ? s = sC(t.insert.chapter, r) : Kr("verse", t) ? s = oC(t.insert.verse, r) : Kr("ms", t) ? s = aC(t.insert.ms) : Kr("note", t) ? s = Jh(t, r, n, i) : Kr("unknown", t) ? s = Yh(t, r, n, i) : Kr("unmatched", t) && (s = lC(t.insert.unmatched, r)), s ? Hh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function yd(e, t, r, n) {
  let i;
  Ml(t) ? i = Gh(t.para, r) : dC(t) && (i = iC(t.book)), i ??= Jt();
  const s = i, o = ne(s), a = fr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Mr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const h = d.getParent();
        if (ne(h) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${h.getMarker()}) with LF attributes at targetIndex ${e}`);
          const y = e - c, [p] = y > 0 ? d.splitText(y) : [void 0];
          let m, b = p?.getPreviousSibling();
          for (; b; ) {
            const _ = b;
            b = b.getPreviousSibling(), m ? m.insertBefore(_) : s.append(_), m = _;
          }
          return p && s.append(p), h.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (wt(d))
      c += 1;
    else if (Pt(d)) {
      const f = d.getChildren();
      for (const h of f) {
        if (u(h))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (fr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ne(d) && s) {
          const h = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${h.getMarker()}) at targetIndex ${e}`), h.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ne(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (U(d)) {
      const f = d.getChildren();
      for (const h of f) {
        if (u(h))
          return !0;
        if (l)
          break;
      }
    }
    return l;
  }
  return u(ze()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function iC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Zi || !r || !Kt.isValidBookCode(r))
    return;
  const n = Fe(e, wx);
  return xp(r, n);
}
function Gh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Fe(e, Nx), i = es(r, n);
  if (!bi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), Mo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = qe(r) + I;
    i.append(t.hasGutterParaMarkers ? ek(s) : Sr("marker", s));
  }
  return i;
}
function sC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Fe(e, Ox);
  let a;
  if (t.markerMode === "editable")
    a = Sp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Hc(r, c, n, i, s, o);
  }
  return a;
}
function oC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Fe(e, qx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Ft(r, n);
    c = Rp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = ul(n, l, i, s, o, a);
  }
  return c;
}
function aC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Fe(e, Rx);
  return op(t, r, n, s, i);
}
function Jh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Fe(i.note, $x), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const h = [];
  for (const p of c?.ops ?? [])
    if (typeof p.insert == "string")
      if (Yr(p.attributes)) {
        const m = ki(p.attributes.char, t, he(p.insert), void 0, Xh(p.attributes.char, h), !1, t.markerMode === "editable");
        h.push(...m);
      } else
        h.push(he(p.insert));
  return Dh(s, o, h, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Yh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Fe(i, Ix), l = Wc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && cC(u, t, r, n).forEach((h) => l.append(h));
  const d = e.attributes?.segment;
  return typeof d == "string" && Tt(l, Gr, () => d), l;
}
function cC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Yr(s.attributes)) {
        const o = he(s.insert), a = ki(s.attributes.char, t, o, void 0, Xh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(he(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Kr("unknown", s)) {
        const o = Yh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Kr("note", s)) {
        const o = Jh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function lC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = sl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Xh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function tc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function ki(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(zt);
  const a = () => {
    o && v(r) && r.getTextContent() !== zt && r.setTextContent(I + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(tc), l = c[0], u = i?.[i.length - 1];
    if (D(u) && Sn(l, u))
      return c.length > 1 ? ki(c.slice(1), t, r, void 0, void 0, !0, o).forEach((h) => u.append(h)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, h, y) => {
      const p = vr(h.style, Fe(h, ro));
      if (typeof h.cid == "string" && Tt(p, Cn, () => h.cid), n && y === c.length - 1 && Tt(p, Gr, () => n), f)
        if (D(f)) {
          const m = f.getMarker(), b = [];
          ya(m, b, t, !0), b.forEach((S) => p.append(S)), p.append(f);
          const _ = [];
          ma(f, _, t, !0), _.forEach((S) => p.append(S));
        } else
          p.append(f);
      return p;
    }, r);
    return ya(l.style, d, t, s), ma(d, d, t, s), [d];
  } else {
    const c = tc(e), l = i?.[i.length - 1];
    if (D(l) && Sn(c, l))
      return r && l.append(r), [];
    a();
    const u = vr(c.style, Fe(c, ro));
    return typeof c.cid == "string" && Tt(u, Cn, () => c.cid), n && Tt(u, Gr, () => n), r && u.append(r), ya(c.style, u, t, s), ma(u, u, t, s), [u];
  }
}
function ma(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && uC(e.getMarker(), t, r, !1, n);
}
function ya(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = Sr("marker", qe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function uC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = Sr("marker", n ? st("") : st(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function dC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Ml(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Yr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function fC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function $t(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Tt(t, Gr, () => n);
        continue;
      }
      if (pC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Qh = [
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
function pC(e) {
  return Qh.includes(e);
}
const Qn = /* @__PURE__ */ new WeakMap();
function hC(e) {
  return Qn.set(e, (Qn.get(e) ?? 0) + 1), () => {
    const t = (Qn.get(e) ?? 1) - 1;
    t > 0 ? Qn.set(e, t) : Qn.delete(e);
  };
}
function Uo() {
  const e = Tn();
  return e.isEditable() && (Qn.get(e) ?? 0) > 0;
}
function gC() {
  const [e] = ce();
  return z(() => mC(e), [e]), null;
}
function mC(e) {
  return Ue(e.registerCommand(Gi, yC, ft), e.registerCommand(Gi, (t) => (bC(t), !1), xn));
}
function yC(e) {
  return kC(e.target) ? Dt(O()) !== void 0 : !1;
}
function bC(e) {
  const t = e.target;
  if ($c(t) && Vc(en(t)))
    return;
  const r = O();
  N(r) && TC(r);
}
function El(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (jt(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === I && (r++, t = t.getNextSibling());
    else if (pe(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r;
}
function Ti(e) {
  const t = El(e);
  return t === 0 ? !1 : (Bt(e, t), !0);
}
function kC(e) {
  if (!$c(e))
    return !1;
  const t = en(e);
  if (!Vc(t))
    return !1;
  const r = t.getParent();
  return r ? pi(r)?.is(t) && Uo() ? (Ts(t), !0) : (Bt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function TC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = oe(t.key);
  if (!ye(r))
    return !1;
  const n = r.getFirstChild();
  return !Or(n) && !Ln(n) ? !1 : Ti(r);
}
function xC() {
  const [e] = ce();
  return z(() => {
    const t = (r) => r instanceof KeyboardEvent && !Zh(r) || !Fo() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ue(
      e.registerCommand(pr, t, we),
      e.registerCommand(To, t, we),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(cr, t, Qe),
      e.registerCommand(Vr, t, Qe),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(xo, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = en(r.target);
        return !n || !Xr(n) ? !1 : (r.preventDefault(), !0);
      }, we),
      e.registerCommand($y, t, we),
      e.registerCommand(Iy, t, we),
      e.registerCommand(Ly, t, we)
    );
  }, [e]), null;
}
function Zh(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Xr(e) {
  return ot(e, (t) => De(t) || gh(t)) ?? void 0;
}
function Fo() {
  const e = O();
  return N(e) ? Xr(e.anchor.getNode()) !== void 0 || Xr(e.focus.getNode()) !== void 0 : !1;
}
function _C(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function CC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), _C(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function SC(e, t, r, n) {
  if (!zC(t) || CC(e, r))
    return !1;
  const i = r === "up" ? Px(t) : Ax(t);
  return i && n.preventDefault(), i;
}
function vC({ viewOptions: e }) {
  const [t] = ce();
  return MC(t, e), null;
}
function MC(e, t) {
  z(() => {
    if (!e.hasNodes([gr, St, Me]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = O();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = rc(o), d = qC(i, nc(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return SC(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = rc(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return nc(a, n.key) ? l = !c && LC(i) || !c && Td(i, "next") || !c && AC(i) || UC(i, !c) || !c && s && kd(i, "next") : EC(a, n.key) && (l = !c && IC(i) || !c && Td(i, "previous") || !c && PC(i) || FC(i, t) || !c && s && kd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(pr, r, we);
  }, [e, t]);
}
function rc(e) {
  return e.dir || "ltr";
}
function nc(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function EC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function ic(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = At(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function AC(e) {
  const t = ic(Up(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Bt(t, 0), !0);
}
function PC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = ic(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : bd(n);
  }
  if (t.offset === 0) {
    const n = ic(r);
    return n ? bd(n) : !1;
  }
  return !1;
}
function bd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (v(t))
    return t.select(), !0;
  if (U(t)) {
    const i = t.getLastDescendant();
    return v(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const so = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function NC(e) {
  if (so)
    for (const { segment: r } of so.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function wC(e) {
  if (so) {
    let n = 0;
    for (const { index: i } of so.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Al(e) {
  for (let t = e; t; t = t.getParent())
    if (U(t) && !t.isInline())
      return t;
}
function eg(e) {
  return !!e && w(e) && Xr(e) !== void 0;
}
function An(e) {
  return v(e) && !e.isToken() && !eg(e) && e.getTextContentSize() > 0;
}
function tg(e) {
  return gs(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || eg(e)) && e.getTextContentSize() > 0 : _o(e) ? !He(e) : !1;
}
function li(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Cs(e, t, r) {
  for (let n = e; n; ) {
    if (tg(n))
      return n;
    if (U(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? li(n, t, r);
      continue;
    }
    if (An(n))
      return n;
    n = li(n, t, r);
  }
}
function zo(e, t, r, n, i) {
  return r === "element" && U(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? li(e, n, i) : r === "text" && tg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : li(e, n, i);
}
function ba(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = zo(e.node, e.offset, e.kind, "previous", t), n = Cs(r, "previous", t);
  if (!n)
    return e;
  if (An(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function OC(e, t) {
  const r = e.getNode(), n = Al(r);
  if (!n)
    return;
  if (e.type === "text" && An(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ba({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = zo(r, e.offset, e.type, t, n), s = Cs(i, t, n);
  if (!s)
    return;
  if (An(s)) {
    const c = s.getTextContent(), l = t === "next" ? NC(c) : wC(c);
    return ba({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ba({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function rg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = OC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function kd(e, t) {
  return rg(e, t, "collapse");
}
function qC(e, t) {
  return rg(e, t, "extend");
}
function ng(e) {
  if (At(e))
    return;
  const t = Al(e);
  return ye(t) ? t : void 0;
}
function RC(e, t) {
  return e.getParent()?.is(t) === !0 && e.getIndexWithinParent() < El(t);
}
function $C(e, t) {
  const r = e.getNode();
  if (e.type === "text" && An(r) && e.offset > 0)
    return !1;
  const n = zo(r, e.offset, e.type, "previous", t), i = Cs(n, "previous", t);
  return i === void 0 || RC(i, t);
}
function IC(e) {
  if (!Uo())
    return !1;
  const t = e.focus, r = ng(t.getNode()), n = pi(r);
  return !r || !n || !$C(t, r) ? !1 : (Ts(n), !0);
}
function ig(e) {
  for (let t = e.getNextSibling(); t; t = t.getNextSibling())
    if (ye(t))
      return t;
}
function LC(e) {
  if (!Uo())
    return !1;
  const t = e.focus, r = ng(t.getNode());
  if (!r || !sg(t, "next", r))
    return !1;
  const n = pi(ig(r));
  return n ? (Ts(n), !0) : !1;
}
function sg(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && An(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = zo(n, e.offset, e.type, t, r);
  return Cs(i, t, r) === void 0;
}
function DC(e, t) {
  const r = ze();
  for (let n = e; n; ) {
    const i = li(n, t, r), s = i && Cs(i, t, r);
    if (!s)
      return;
    if (n = Xr(s), !n)
      return s;
  }
}
function Td(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Xr(n))
    return !1;
  const i = Al(n);
  if (!i || !sg(r, t, i))
    return !1;
  const s = li(i, t, ze()), o = s && Xr(s);
  if (!o)
    return !1;
  const a = DC(o, t);
  if (!a)
    return !0;
  if (An(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function xd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function UC(e, t) {
  const r = e.anchor.getNode(), n = Up(e);
  if (K(n) && !w(n.getFirstChild())) {
    if (ye(r)) {
      if (e.anchor.offset === r.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === r.getTextContentSize()))
      return !1;
    if (n.getIsCollapsed()) {
      if (n.is(n.getParent()?.getLastChild())) {
        const s = n.getParent(), o = s?.getNextSibling(), a = t && s && Uo() ? pi(ig(s)) : void 0;
        return a ? Ts(a) : o && !(ye(o) && Ti(o)) && o.selectStart(), !0;
      }
    } else return Qt(n.getFirstChild()) ? n.select(2, 2) : n.select(1, 1), !0;
  }
  if (ye(r) && K(n) && n.getIsCollapsed()) {
    const s = n.getNextSibling();
    return s ? s.selectStart() : xd(n), !0;
  }
  const i = n?.getParent();
  if (Qt(n) && K(i) && n.is(i?.getLastChild())) {
    const s = i.getNextSibling();
    return s ? s.selectStart() : i.getIsCollapsed() ? xd(i) : i.selectEnd(), !0;
  }
  return !1;
}
function FC(e, t) {
  const r = $k(e);
  if (bs(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (gt(i.getParent()))
    return !0;
  if (K(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Ln(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (ye(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = ot(o, (c) => K(c));
    if (K(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = At(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (vt(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function zC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return pe(t) && _o(t);
}
function KC() {
  const [e] = ce();
  return jC(e), null;
}
function jC(e) {
  z(() => {
    if (!e.hasNodes([me]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ue(
      e.registerNodeTransform(me, WC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(me, rT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(me, ih),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(me, (t) => ss(vn("char"), t)),
      e.registerNodeTransform(Be, HC)
    );
  }, [e]);
}
function ka(e) {
  return e.getChildren().some(w);
}
function BC(e, t) {
  const r = t.getFirstChild();
  if (!w(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (No(n)) {
    const i = n.getTextContent();
    i.startsWith(I) && (i === I ? n.remove() : n.setTextContent(i.slice(I.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function VC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  w(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function WC(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (ka(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ie(e, Cn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && Sn({ style: t, cid: r }, i) && Rt(n, i.getUnknownAttributes()))
    if (ka(i)) {
      if (BC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && Sn({ style: t, cid: r }, s) && Rt(n, s.getUnknownAttributes()) && (ka(s) ? VC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function HC(e) {
  const t = e.getParent();
  if (!D(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(zt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function og(e) {
  return e.replaceAll("	", " ");
}
function ag() {
  const e = O();
  return !!e && !e.isCollapsed();
}
function cg(e) {
  const t = () => !ag();
  return Ue(e.registerCommand(ys, t, ft), e.registerCommand(Vr, t, ft));
}
const Pl = (e) => {
  e.dispatchCommand(ys, null);
}, Nl = (e) => {
  e.dispatchCommand(Vr, null);
}, wl = (e) => {
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
    e.dispatchCommand(cr, s);
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
    r.setData("text/plain", og(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(cr, i);
  });
};
function GC() {
  const [e] = ce();
  return z(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Bs ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Pl(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Nl(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Ol(e) : wl(e)));
    };
    return Ue(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      cg(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function JC({ logger: e }) {
  const [t] = ce();
  return z(() => Ue(
    // When the backslash or forward slash key is typed.
    t.registerCommand(pr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), ti),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(cr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ti),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(xo, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ti)
  ), [t, e]), null;
}
function YC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), C("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: C("span", { className: "text", children: i.title }) });
}
function XC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return C("div", { className: "typeahead-popover", children: C("ul", { children: e.map((i, s) => C(YC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let QC = 0;
class wi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${QC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function ZC({ options: e } = {}) {
  const [t] = ce(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
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
      new wi("Cut", {
        onSelect: () => {
          Nl(t);
        },
        isDisabled: r
      }),
      new wi("Copy", {
        onSelect: () => {
          Pl(t);
        }
      }),
      new wi("Paste", {
        onSelect: () => {
          wl(t);
        },
        isDisabled: r
      }),
      new wi("Paste as Plain Text", {
        onSelect: () => {
          Ol(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((h) => new wi(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = ge(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  z(() => cg(t), [t]), z(() => {
    const d = (f) => {
      const h = f.target;
      t.getRootElement() === h || Np(h) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, h) => {
      h?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
    });
  }, [t]), z(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, l]), z(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, l]), z(() => {
    if (!i.isOpen)
      return;
    const d = (f) => {
      if (f.key === "Escape")
        l();
      else if (f.key === "ArrowDown")
        f.preventDefault(), f.stopPropagation(), a((h) => h === void 0 ? 0 : (h + 1) % c.length);
      else if (f.key === "ArrowUp")
        f.preventDefault(), f.stopPropagation(), a((h) => h === void 0 ? c.length - 1 : (h - 1 + c.length) % c.length);
      else if (f.key === "Enter" && o !== void 0) {
        f.preventDefault(), f.stopPropagation();
        const h = c[o];
        h && !h.isDisabled && (t.update(() => {
          h.onSelect();
        }), l());
      }
    };
    return document.addEventListener("keydown", d, !0), () => document.removeEventListener("keydown", d, !0);
  }, [i.isOpen, l, c, o, t]), z(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]);
  const u = Z(null);
  return ps(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: h } = d.getBoundingClientRect(), y = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), p = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    d.style.left = `${y}px`, d.style.top = `${p}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? sb.createPortal(C("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: C(XC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function eS(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function tS(e) {
  if (!zy(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function rS(e) {
  return vt(e);
}
function Ta(e, t, r) {
  const n = en(t.node);
  if (!_o(n) || rS(n))
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
function nS(e, t) {
  if (O())
    return !1;
  const r = e.getRootElement(), n = Dy(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Uy(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = Ta(e, c, tS(c)), d = u;
  else {
    const m = eS(n.getRangeAt(0), c);
    u = Ta(e, c, m ? "before" : "after"), d = Ta(e, l, m ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, h = d ?? l, y = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: h.node,
    focusOffset: h.offset
  }, p = Fy(y, e);
  return p ? (kn(p), p.dirty = !t, t) : !1;
}
function iS() {
  const [e] = ce(), t = Z(!1), r = Z(!1);
  return z(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = O();
        N(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), z(() => e.registerCommand(dr, () => (nS(e, t.current) && (r.current = !0), !1), Qe), [e]), null;
}
function sS() {
  const [e] = ce();
  return z(() => e.registerCommand(pr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Bs ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Qe), [e]), null;
}
function oS({ isEditable: e }) {
  const [t] = ce();
  return ps(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function _d(e) {
  return !!e && Jc(oe(e));
}
function lg(e) {
  const [t] = ce(), r = Z(void 0), n = ge((i) => {
    const s = O(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = _d(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Oo(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const h = wk();
        i.insertAfter(h), r.current = h.getKey(), l = h.getKey();
      }
      Bt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = oe(a);
      v(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return z(() => {
    const i = () => {
      const a = e(), c = O(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Wr(Hr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (ks(c) || !c.includes(si))
        return;
      const l = O(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Ok(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(si).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ue(t.registerCommand(dr, () => (i(), !1), xn), t.registerCommand(Ic, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = _d(a);
      }), c && t.update(() => {
        const l = oe(a);
        v(l) && l.remove();
      }, { tag: Hr }), r.current = void 0, !1;
    }, xn), t.registerNodeTransform(Be, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function aS() {
  const e = O();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!U(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!pe(i) || Oo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || pe(s))
    return i;
}
function cS() {
  return lg(aS), null;
}
function lS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ce();
  return z(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), z(() => {
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
          f || Wr(Ky), o.setEditorState(l), o.dispatchCommand(jy, void 0);
        }, { tag: tp });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function uS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ce();
  return dS(t, n), fS(i, e, r, n), null;
}
function dS(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  z(() => {
    let o = i;
    (!o || o.length <= 0) && (o = h_), r.current !== o && (r.current = o, Cd("note-callers", o, t));
  }, [t, i]), z(() => {
    let o = s;
    (!o || o.length <= 0) && (o = g_), n.current !== o && (n.current = o, Cd("cross-ref-callers", o, t));
  }, [t, s]);
}
function fS(e, t, r, n) {
  z(() => {
    if (!e.hasNodes([me, Me, Yt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => kS(s));
    return Ue(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Me, (s) => pS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(me, hS),
      e.registerNodeTransform(Be, gS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Yt, mS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Yt, (s, { prevEditorState: o }) => yS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(dr, () => bS(e, t, r, n), ft),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function pS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => vt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !w(i) && i.getTextContent() !== Nt(e.getCaller()) && e.insertBefore(i);
  }
}
function hS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => vt(o));
  if (!D(e) || !K(t) || !n)
    return;
  const i = Yc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  v(s) ? s.getTextContent() !== I && s.setTextContent(I) : e.insertAfter(he(I));
}
function gS(e) {
  const t = At(e), r = t?.getChildren(), n = r?.find((o) => vt(o));
  if (!v(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!w(e) && K(i) && e.getTextContent() !== I && (e.setTextContent(I), e.selectEnd()), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(zt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Yc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function mS(e) {
  if (!vt(e))
    return;
  const t = e.getNextSibling();
  !v(t) || w(t) ? e.insertAfter(he(I)) : t.getTextContent() !== I && t.setTextContent(I);
}
function yS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = oe(r), a = o?.getParent();
      return vt(o) && K(a) && a.getCaller() === Ji;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function bS(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = O();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = ot(o, (c) => K(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = oe(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Oi(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Oi(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Oi(e, c, n);
    } else if (!a) {
      const c = ot(o, (l) => K(l));
      if (c && c.getIsCollapsed() && ye(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Oi(e, l, n);
      }
    }
  }
  if (ye(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Ln(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Oi(e, l, n);
    }
  }
  return !1;
}
function Oi(e, t, r) {
  const n = oe(t);
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
function kS(e) {
  const t = O();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && v(s)) {
    e.preventDefault();
    const o = qc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), kn(o);
  }
}
function Cd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (TS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function TS(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Ko(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!w(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = rs(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function xS(e) {
  const t = e.getParent();
  if (K(t))
    return Ko(t).some((r) => r.is(e)) ? t : void 0;
}
function oo(e) {
  const t = Ko(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function _S(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function CS(e) {
  const t = By();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= oo(e);
  const i = _S(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= oo(e);
}
function sc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = xS(t);
  if (r)
    return SS(r, t, e.offset) ? void 0 : r;
}
function SS(e, t, r) {
  const n = Ko(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function vS(e) {
  const t = Ko(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Bt(e, oo(e));
}
function MS(e = !1) {
  const t = O();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return ES(t.anchor, t.focus);
  const r = sc(t.anchor);
  if (!r)
    return !1;
  if (!e && CS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Bt(n, r.getIndexWithinParent());
  } else
    vS(r);
  return !0;
}
function ES(e, t) {
  const r = sc(e), n = sc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Sd(e, r, i), n && Sd(t, n, !i), !0;
}
function Sd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), oo(t), "element");
}
function AS() {
  const [e] = ce(), t = Z(!1);
  return z(() => {
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
  }, [e]), z(() => e.registerCommand(dr, () => (MS(t.current) && Wr(Hr), !1), xn), [e]), null;
}
function PS({ onChange: e }) {
  const [t] = ce();
  return z(() => t.registerCommand(dr, () => {
    const r = yl();
    return e?.(r), !1;
  }, ft), [t, e]), null;
}
const NS = "psc-para-marker-selected", vd = "psc-para-marker-refused", Md = "data-para-marker-refused-intent", wS = /* @__PURE__ */ new Set(["Process", "Dead", "Unidentified"]);
function OS({ onParaMarkerMenuRequest: e }) {
  const [t] = ce(), r = Z(e);
  return z(() => {
    r.current = e;
  }, [e]), z(() => {
    let n, i;
    const s = () => {
      queueMicrotask(() => r.current?.());
    }, o = (p, m) => {
      i = p;
      const b = t.getRootElement();
      b?.classList.add(vd), b?.setAttribute(Md, m);
    }, a = () => {
      i = void 0;
      const p = t.getRootElement();
      p?.classList.remove(vd), p?.removeAttribute(Md);
    }, c = (p) => Dt(O()) ? (p instanceof Event && p.preventDefault(), !0) : !1, l = (p) => {
      if (!(p instanceof Event) || !(p.target instanceof Node))
        return !1;
      const m = Dt(O());
      if (!m)
        return !1;
      const b = en(p.target);
      return !b || b.getKey() !== m.getKey() ? !1 : (p.preventDefault(), !0);
    }, u = (p) => {
      const m = Dt(O()), b = m?.getParent();
      if (!m || !ye(b))
        return !1;
      if (p.key.startsWith("Arrow") && (p.ctrlKey || p.metaKey || p.altKey && p.key !== "ArrowDown"))
        return qs(b, m), !1;
      switch (p.key) {
        case "Enter":
          return p.preventDefault(), s(), !0;
        case "ArrowDown":
          return p.preventDefault(), p.altKey ? s() : Pd(b, "next"), !0;
        case "ArrowUp":
          return p.preventDefault(), Pd(b, "previous"), !0;
        case "ArrowLeft":
        case "ArrowRight": {
          p.preventDefault();
          const _ = t.getRootElement(), S = _ ? rc(_) : "ltr";
          return nc(S, p.key) ? qs(b, m) : US(b), !0;
        }
        case "Backspace":
        case "Delete":
          return p.preventDefault(), o(m.getKey(), p.key === "Backspace" ? "deleteBackward" : "deleteForward"), !0;
        default:
          return (Zh(p) || wS.has(p.key)) && qs(b, m), !1;
      }
    }, d = () => {
      const p = Dt(O()), m = p?.getParent();
      return !p || !ye(m) ? !1 : (qs(m, p), !0);
    }, f = (p, m) => {
      t.isEditable() || (p = m = void 0), n !== m && xa(t, n, !1), n = m, xa(t, m, !0), Ed(t, p);
    }, h = (p = t.getEditorState()) => p.read(() => {
      const m = Dt(O());
      return { glyphKey: m?.getKey(), ownerKey: m?.getParent()?.getKey() };
    }), y = Ue(hC(t), t.registerEditableListener(() => {
      const { glyphKey: p, ownerKey: m } = h();
      f(p, m);
    }), t.registerCommand(pr, u, Qe), t.registerCommand(Lc, d, Qe), t.registerCommand(Vr, c, Qe), t.registerCommand(ys, c, Qe), t.registerCommand(cr, c, Qe), t.registerCommand(Uf, c, Qe), t.registerCommand(xo, l, Qe), t.registerCommand(To, c, Qe), t.registerUpdateListener(({ editorState: p }) => {
      const { glyphKey: m, ownerKey: b } = h(p), _ = n;
      f(m, b), i !== void 0 && i !== m && a(), b !== void 0 && IS(t.getRootElement()), n !== void 0 && n !== _ && $S(t, n);
    }));
    return () => {
      y(), xa(t, n, !1), Ed(t, void 0), a();
    };
  }, [t]), null;
}
function xa(e, t, r) {
  if (t === void 0)
    return;
  const n = e.getElementByKey(t);
  n && n.classList.toggle(NS, r);
}
const qS = "psc-para-marker-";
let RS = 0;
function Ed(e, t) {
  const r = e.getRootElement();
  if (!r)
    return;
  const n = t === void 0 ? null : e.getElementByKey(t);
  if (!n) {
    r.removeAttribute("aria-activedescendant");
    return;
  }
  n.id || (n.id = `${qS}${RS++}`), r.setAttribute("aria-activedescendant", n.id);
}
function $S(e, t) {
  const r = e.getElementByKey(t);
  r && typeof r.scrollIntoView == "function" && r.scrollIntoView({ block: "nearest" });
}
function IS(e) {
  if (!e)
    return;
  const t = e.ownerDocument.defaultView?.getSelection();
  !t || t.rangeCount === 0 || t.anchorNode && e.contains(t.anchorNode) && t.removeAllRanges();
}
function Ad(e, t) {
  return t === "next" ? e.getNextSibling() : e.getPreviousSibling();
}
function LS(e, t) {
  for (let r = Ad(e, t); r; r = Ad(r, t)) {
    const n = pi(r);
    if (n)
      return n;
  }
}
function DS(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling())
    if (ye(t))
      return t;
}
function Pd(e, t) {
  const r = LS(e, t);
  r && Ts(r);
}
function qs(e, t) {
  Ti(e) || Bt(e, t.getIndexWithinParent() + 1);
}
function US(e) {
  const t = DS(e);
  t && FS(t);
}
function FS(e) {
  const t = e.getLastDescendant();
  if (v(t) && !At(t)) {
    const n = t.getTextContentSize();
    t.select(n, n);
    return;
  }
  const r = e.getChildrenSize();
  e.select(r, r);
}
function zS() {
  const [e] = ce();
  return KS(e), null;
}
function KS(e) {
  z(() => {
    if (!e.hasNodes([rt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(rt, (t) => jS(t, e));
  }, [e]);
}
function jS(e, t) {
  Xa(t, e.getKey()) && Nh(e.getFirstChild()), !(!ne(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = oe(e.getKey());
    return ne(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function ug({ onStateChange: e }) {
  const [t] = ce(), [r, n] = de(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = ge(() => {
    const l = O(), u = Dt(l)?.getParent();
    if (ne(u) && r.getElementByKey(u.getKey()) !== null) {
      o.current = u.getMarker(), a.current = u.getMarker(), e?.({
        canUndo: i.current,
        canRedo: s.current,
        blockMarker: o.current,
        contextMarker: a.current
      });
      return;
    }
    let d;
    if (N(l)) {
      const f = l.anchor.getNode(), h = l.focus.getNode();
      let y = f.getKey() === "root" ? f : ot(f, (_) => {
        const S = _.getParent();
        return S !== null && Vy(S);
      });
      y === null && (y = f.getTopLevelElementOrThrow()), os(y) && (y = ot(f, ne) ?? y);
      const p = y.getKey(), m = r.getElementByKey(p), b = Lk(f, h);
      if (b && Ex(b) && (d = b.getMarker()), m !== null && (ne(y) || gt(y) || bs(y))) {
        o.current = y.getMarker(), a.current = d, e?.({
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
  return z(() => t.registerCommand(dr, (l, u) => (c(), n(u), !1), Qe), [t, c]), z(() => Ue(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Wy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Qe), r.registerCommand(Hy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Qe)), [c, r, e]), null;
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
function Qr(e) {
  return e ? ye(e) ? e : ot(e, (r) => ye(r)) ?? void 0 : void 0;
}
function fg(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Qr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function ql(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !ko(e) ? !1 : e.getNodes().some((t) => pe(t));
}
function pg(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Qr(r);
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
  const { anchor: t } = e, r = t.getNode(), n = Qr(r);
  if (!n)
    return !1;
  if (U(r)) {
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
  return !!oc(e, t);
}
function oc(e, t) {
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && U(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return pe(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return pe(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return pe(i) ? i : void 0;
}
function ao(e, t) {
  if (!N(e))
    return !1;
  const r = Qr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ii(e) {
  return ql(e) || fg(e);
}
function gg(e, t) {
  if (ql(e) || fg(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return pg(e) && ao(e, "backward") || Nd(e, "backward");
    case "deleteForward":
      return hg(e) && ao(e, "forward") || Nd(e, "forward");
    case "insertText":
      return !1;
  }
}
function BS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = oc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (pg(e) && ao(e, "backward")) {
        const n = Qr(e.anchor.getNode());
        if (ye(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = oc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (hg(e) && ao(e, "forward")) {
        const i = Qr(e.anchor.getNode())?.getNextSibling();
        if (ye(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function wd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return ko(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = Qr(e.anchor.getNode()), n = Qr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function mg(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else U(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function VS(e) {
  const t = e.getPreviousSibling();
  if (!ye(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? mg(r) : Ti(t) || t.selectStart();
}
function yg(e) {
  return pe(e) || Je(e) ? [] : ye(e) ? e.getChildren().flatMap(yg) : [e];
}
function WS(e) {
  const t = [];
  for (const r of e) {
    const n = yg(r);
    n.length !== 0 && (ye(r) && t.length > 0 && t.push(he(" ")), t.push(...n));
  }
  return t;
}
function Od(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function HS(e) {
  if (Array.isArray(e)) return e;
}
function GS(e, t) {
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
function JS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YS(e, t) {
  return HS(e) || GS(e, t) || XS(e, t) || JS();
}
function XS(e, t) {
  if (e) {
    if (typeof e == "string") return Od(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Od(e, t) : void 0;
  }
}
const bg = Object.entries, qd = Object.setPrototypeOf, QS = Object.isFrozen, ZS = Object.getPrototypeOf, ev = Object.getOwnPropertyDescriptor;
let nt = Object.freeze, at = Object.seal, Zn = Object.create, kg = typeof Reflect < "u" && Reflect, ac = kg.apply, cc = kg.construct;
nt || (nt = function(t) {
  return t;
});
at || (at = function(t) {
  return t;
});
ac || (ac = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
cc || (cc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Jn = Ye(Array.prototype.forEach), tv = Ye(Array.prototype.lastIndexOf), Rd = Ye(Array.prototype.pop), Yn = Ye(Array.prototype.push), rv = Ye(Array.prototype.splice), jr = Array.isArray, Ui = Ye(String.prototype.toLowerCase), _a = Ye(String.prototype.toString), $d = Ye(String.prototype.match), qi = Ye(String.prototype.replace), Id = Ye(String.prototype.indexOf), nv = Ye(String.prototype.trim), iv = Ye(Number.prototype.toString), sv = Ye(Boolean.prototype.toString), Ld = typeof BigInt > "u" ? null : Ye(BigInt.prototype.toString), Dd = typeof Symbol > "u" ? null : Ye(Symbol.prototype.toString), et = Ye(Object.prototype.hasOwnProperty), Ri = Ye(Object.prototype.toString), Ze = Ye(RegExp.prototype.test), hn = ov(TypeError);
function Ye(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return ac(e, t, n);
  };
}
function ov(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return cc(e, r);
  };
}
function fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ui;
  if (qd && qd(e, null), !jr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (QS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function av(e) {
  for (let t = 0; t < e.length; t++)
    et(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = Zn(null);
  for (const n of bg(e)) {
    var r = YS(n, 2);
    const i = r[0], s = r[1];
    et(e, i) && (jr(s) ? t[i] = av(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function cv(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return iv(e);
    case "boolean":
      return sv(e);
    case "bigint":
      return Ld ? Ld(e) : "0";
    case "symbol":
      return Dd ? Dd(e) : "Symbol()";
    case "undefined":
      return Ri(e);
    case "function":
    case "object": {
      if (e === null)
        return Ri(e);
      const t = e, r = Wt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Ri(n);
      }
      return Ri(e);
    }
    default:
      return Ri(e);
  }
}
function Wt(e, t) {
  for (; e !== null; ) {
    const n = ev(e, t);
    if (n) {
      if (n.get)
        return Ye(n.get);
      if (typeof n.value == "function")
        return Ye(n.value);
    }
    e = ZS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function lv(e) {
  try {
    return Ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ud = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ca = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Sa = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), uv = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), va = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), dv = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Fd = nt(["#text"]), zd = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ma = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Kd = nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Rs = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), fv = at(/{{[\w\W]*|^[\w\W]*}}/g), pv = at(/<%[\w\W]*|^[\w\W]*%>/g), hv = at(/\${[\w\W]*/g), gv = at(/^data-[\-\w.\u00B7-\uFFFF]+$/), mv = at(/^aria-[\-\w]+$/), jd = at(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), yv = at(/^(?:\w+script|data):/i), bv = at(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), kv = at(/^html$/i), Tv = at(/^[a-z][.\w]*(-[.\w]+)+$/i), Bd = at(/<[/\w!]/g), Vd = at(/<[/\w]/g), xv = at(/<\/no(script|embed|frames)/i), _v = at(/\/>/i), Et = {
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
}, Cv = function() {
  return typeof window > "u" ? null : window;
}, Sv = function(t, r) {
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
}, Fr = function(t, r, n, i) {
  return et(t, r) && jr(t[r]) ? fe(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function Tg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cv();
  const t = (F) => Tg(F);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, h = Wt(f, "cloneNode"), y = Wt(f, "remove"), p = Wt(f, "nextSibling"), m = Wt(f, "childNodes"), b = Wt(f, "parentNode"), _ = Wt(f, "shadowRoot"), S = Wt(f, "attributes"), P = o && o.prototype ? Wt(o.prototype, "nodeType") : null, E = o && o.prototype ? Wt(o.prototype, "nodeName") : null, j = o && o.prototype ? Wt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let M, R = "", $, re = !1, W = 0;
  const Ae = function() {
    if (W > 0)
      throw hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ee = function(g) {
    Ae(), W++;
    try {
      return M.createHTML(g);
    } finally {
      W--;
    }
  }, Re = function(g) {
    Ae(), W++;
    try {
      return M.createScriptURL(g);
    } finally {
      W--;
    }
  }, be = function() {
    return re || ($ = Sv(d, i), re = !0), $;
  }, tr = r, Ke = tr.implementation, $r = tr.createNodeIterator, Ir = tr.createDocumentFragment, sn = tr.getElementsByTagName, Y = n.importNode;
  let A = Wd();
  t.isSupported = typeof bg == "function" && typeof b == "function" && Ke && Ke.createHTMLDocument !== void 0;
  const H = fv, ue = pv, Se = hv, X = gv, Ce = mv, yr = yv, qt = bv, on = Tv;
  let We = jd, le = null;
  const mt = fe({}, [...Ud, ...Ca, ...Sa, ...va, ...Fd]);
  let xe = null;
  const br = fe({}, [...zd, ...Ma, ...Kd, ...Rs]);
  let Pe = Object.seal(Zn(null, {
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
  })), kr = null, Ci = null;
  const yt = Object.seal(Zn(null, {
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
  let Ss = !0, Tr = !0, Un = !1, Si = !0, rr = !1, Vt = !0, q = !1, B = !1, G = null, Q = null, ve = !1, Xe = !1, Mt = !1, an = !1, vi = !0, iu = !1;
  const su = "user-content-";
  let Ho = !0, vs = !1, Fn = {}, nr = null;
  const Go = fe({}, [
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
  let ou = null;
  const au = fe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Jo = null;
  const cu = fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ms = "http://www.w3.org/1998/Math/MathML", Es = "http://www.w3.org/2000/svg", ir = "http://www.w3.org/1999/xhtml";
  let zn = ir, Yo = !1, Xo = null;
  const ny = fe({}, [Ms, Es, ir], _a), lu = nt(["mi", "mo", "mn", "ms", "mtext"]);
  let Qo = fe({}, lu);
  const uu = nt(["annotation-xml"]);
  let Zo = fe({}, uu);
  const iy = fe({}, ["title", "style", "font", "a", "script"]);
  let Mi = null;
  const sy = ["application/xhtml+xml", "text/html"], oy = "text/html";
  let $e = null, Kn = null;
  const ay = r.createElement("form"), du = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, ea = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Kn && Kn === g)
      return;
    (!g || typeof g != "object") && (g = {}), g = ct(g), Mi = // eslint-disable-next-line unicorn/prefer-includes
    sy.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? oy : g.PARSER_MEDIA_TYPE, $e = Mi === "application/xhtml+xml" ? _a : Ui, le = Fr(g, "ALLOWED_TAGS", mt, {
      transform: $e
    }), xe = Fr(g, "ALLOWED_ATTR", br, {
      transform: $e
    }), Xo = Fr(g, "ALLOWED_NAMESPACES", ny, {
      transform: _a
    }), Jo = Fr(g, "ADD_URI_SAFE_ATTR", cu, {
      transform: $e,
      base: cu
    }), ou = Fr(g, "ADD_DATA_URI_TAGS", au, {
      transform: $e,
      base: au
    }), nr = Fr(g, "FORBID_CONTENTS", Go, {
      transform: $e
    }), kr = Fr(g, "FORBID_TAGS", ct({}), {
      transform: $e
    }), Ci = Fr(g, "FORBID_ATTR", ct({}), {
      transform: $e
    }), Fn = et(g, "USE_PROFILES") ? g.USE_PROFILES && typeof g.USE_PROFILES == "object" ? ct(g.USE_PROFILES) : g.USE_PROFILES : !1, Ss = g.ALLOW_ARIA_ATTR !== !1, Tr = g.ALLOW_DATA_ATTR !== !1, Un = g.ALLOW_UNKNOWN_PROTOCOLS || !1, Si = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, rr = g.SAFE_FOR_TEMPLATES || !1, Vt = g.SAFE_FOR_XML !== !1, q = g.WHOLE_DOCUMENT || !1, Xe = g.RETURN_DOM || !1, Mt = g.RETURN_DOM_FRAGMENT || !1, an = g.RETURN_TRUSTED_TYPE || !1, ve = g.FORCE_BODY || !1, vi = g.SANITIZE_DOM !== !1, iu = g.SANITIZE_NAMED_PROPS || !1, Ho = g.KEEP_CONTENT !== !1, vs = g.IN_PLACE || !1, We = lv(g.ALLOWED_URI_REGEXP) ? g.ALLOWED_URI_REGEXP : jd, zn = typeof g.NAMESPACE == "string" ? g.NAMESPACE : ir, Qo = et(g, "MATHML_TEXT_INTEGRATION_POINTS") && g.MATHML_TEXT_INTEGRATION_POINTS && typeof g.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(g.MATHML_TEXT_INTEGRATION_POINTS) : fe({}, lu), Zo = et(g, "HTML_INTEGRATION_POINTS") && g.HTML_INTEGRATION_POINTS && typeof g.HTML_INTEGRATION_POINTS == "object" ? ct(g.HTML_INTEGRATION_POINTS) : fe({}, uu);
    const x = et(g, "CUSTOM_ELEMENT_HANDLING") && g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING == "object" ? ct(g.CUSTOM_ELEMENT_HANDLING) : Zn(null);
    if (Pe = Zn(null), et(x, "tagNameCheck") && du(x.tagNameCheck) && (Pe.tagNameCheck = x.tagNameCheck), et(x, "attributeNameCheck") && du(x.attributeNameCheck) && (Pe.attributeNameCheck = x.attributeNameCheck), et(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (Pe.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), at(Pe), rr && (Tr = !1), Mt && (Xe = !0), Fn && (le = fe({}, Fd), xe = Zn(null), Fn.html === !0 && (fe(le, Ud), fe(xe, zd)), Fn.svg === !0 && (fe(le, Ca), fe(xe, Ma), fe(xe, Rs)), Fn.svgFilters === !0 && (fe(le, Sa), fe(xe, Ma), fe(xe, Rs)), Fn.mathMl === !0 && (fe(le, va), fe(xe, Kd), fe(xe, Rs))), yt.tagCheck = null, yt.attributeCheck = null, et(g, "ADD_TAGS") && (typeof g.ADD_TAGS == "function" ? yt.tagCheck = g.ADD_TAGS : jr(g.ADD_TAGS) && (le === mt && (le = ct(le)), fe(le, g.ADD_TAGS, $e))), et(g, "ADD_ATTR") && (typeof g.ADD_ATTR == "function" ? yt.attributeCheck = g.ADD_ATTR : jr(g.ADD_ATTR) && (xe === br && (xe = ct(xe)), fe(xe, g.ADD_ATTR, $e))), et(g, "ADD_URI_SAFE_ATTR") && jr(g.ADD_URI_SAFE_ATTR) && fe(Jo, g.ADD_URI_SAFE_ATTR, $e), et(g, "FORBID_CONTENTS") && jr(g.FORBID_CONTENTS) && (nr === Go && (nr = ct(nr)), fe(nr, g.FORBID_CONTENTS, $e)), et(g, "ADD_FORBID_CONTENTS") && jr(g.ADD_FORBID_CONTENTS) && (nr === Go && (nr = ct(nr)), fe(nr, g.ADD_FORBID_CONTENTS, $e)), Ho && (le["#text"] = !0), q && fe(le, ["html", "head", "body"]), le.table && (fe(le, ["tbody"]), delete kr.tbody), g.TRUSTED_TYPES_POLICY) {
      if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const L = M;
      M = g.TRUSTED_TYPES_POLICY;
      try {
        R = ee("");
      } catch (V) {
        throw M = L, V;
      }
    } else g.TRUSTED_TYPES_POLICY === null ? (M = void 0, R = "") : (M === void 0 && (M = be()), M && typeof R == "string" && (R = ee("")));
    nt && nt(g), Kn = g;
  }, fu = fe({}, [...Ca, ...Sa, ...uv]), pu = fe({}, [...va, ...dv]), cy = function(g, x, L) {
    return x.namespaceURI === ir ? g === "svg" : x.namespaceURI === Ms ? g === "svg" && (L === "annotation-xml" || Qo[L]) : !!fu[g];
  }, ly = function(g, x, L) {
    return x.namespaceURI === ir ? g === "math" : x.namespaceURI === Es ? g === "math" && Zo[L] : !!pu[g];
  }, uy = function(g, x, L) {
    return x.namespaceURI === Es && !Zo[L] || x.namespaceURI === Ms && !Qo[L] ? !1 : !pu[g] && (iy[g] || !fu[g]);
  }, dy = function(g) {
    let x = b(g);
    (!x || !x.tagName) && (x = {
      namespaceURI: zn,
      tagName: "template"
    });
    const L = Ui(g.tagName), V = Ui(x.tagName);
    return Xo[g.namespaceURI] ? g.namespaceURI === Es ? cy(L, x, V) : g.namespaceURI === Ms ? ly(L, x, V) : g.namespaceURI === ir ? uy(L, x, V) : !!(Mi === "application/xhtml+xml" && Xo[g.namespaceURI]) : !1;
  }, Lr = function(g) {
    Yn(t.removed, {
      element: g
    });
    try {
      b(g).removeChild(g);
    } catch {
      if (y(g), !b(g))
        throw hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, As = function(g) {
    Ei(g);
    const x = m(g);
    if (x) {
      const V = [];
      Jn(x, (J) => {
        Yn(V, J);
      }), Jn(V, (J) => {
        try {
          y(J);
        } catch {
        }
      });
    }
    const L = S(g);
    if (L)
      for (let V = L.length - 1; V >= 0; --V) {
        const J = L[V], se = J && J.name;
        if (typeof se == "string")
          try {
            g.removeAttribute(se);
          } catch {
          }
      }
  }, cn = function(g, x) {
    try {
      Yn(t.removed, {
        attribute: x.getAttributeNode(g),
        from: x
      });
    } catch {
      Yn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(g), g === "is")
      if (Xe || Mt)
        try {
          Lr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(g, "");
        } catch {
        }
  }, fy = function(g) {
    const x = S(g);
    if (x)
      for (let L = x.length - 1; L >= 0; --L) {
        const V = x[L], J = V && V.name;
        if (!(typeof J != "string" || xe[$e(J)]))
          try {
            g.removeAttribute(J);
          } catch {
          }
      }
  }, Ei = function(g) {
    const x = [g];
    for (; x.length > 0; ) {
      const L = x.pop();
      (P ? P(L) : L.nodeType) === Et.element && fy(L);
      const J = m(L);
      if (J)
        for (let se = J.length - 1; se >= 0; --se)
          x.push(J[se]);
    }
  }, py = function(g) {
    if (!Vt)
      return;
    const x = [g];
    for (; x.length > 0; ) {
      const L = x.pop(), V = P ? P(L) : L.nodeType;
      if (V === Et.processingInstruction || V === Et.comment && Ze(Vd, L.data)) {
        try {
          y(L);
        } catch {
        }
        continue;
      }
      if (V === Et.element) {
        const se = L, ke = $e(E ? E(L) : L.nodeName);
        try {
          se.hasAttribute && se.hasAttribute("patchsrc") && se.removeAttribute("patchsrc"), se.hasAttribute && se.hasAttribute("for") && ke !== "label" && ke !== "output" && se.removeAttribute("for");
        } catch {
        }
      }
      const J = m(L);
      if (J)
        for (let se = J.length - 1; se >= 0; --se)
          x.push(J[se]);
    }
  }, hu = function(g) {
    let x = null, L = null;
    if (ve)
      g = "<remove></remove>" + g;
    else {
      const se = $d(g, /^[\r\n\t ]+/);
      L = se && se[0];
    }
    Mi === "application/xhtml+xml" && zn === ir && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const V = M ? ee(g) : g;
    if (zn === ir)
      try {
        x = new u().parseFromString(V, Mi);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = Ke.createDocument(zn, "template", null);
      try {
        x.documentElement.innerHTML = Yo ? R : V;
      } catch {
      }
    }
    const J = x.body || x.documentElement;
    return g && L && J.insertBefore(r.createTextNode(L), J.childNodes[0] || null), zn === ir ? sn.call(x, q ? "html" : "body")[0] : q ? x.documentElement : J;
  }, gu = function(g) {
    const x = j ? j(g) : g.ownerDocument;
    return $r.call(
      x || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ps = function(g) {
    return g = qi(g, H, " "), g = qi(g, ue, " "), g = qi(g, Se, " "), g;
  }, ta = function(g) {
    var x;
    g.normalize();
    const L = j ? j(g) : g.ownerDocument, V = $r.call(
      L || g,
      g,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = V.nextNode();
    for (; J; )
      J.data = Ps(J.data), J = V.nextNode();
    const se = (x = g.querySelectorAll) === null || x === void 0 ? void 0 : x.call(g, "template");
    se && Jn(se, (ke) => {
      jn(ke.content) && ta(ke.content);
    });
  }, Ns = function(g) {
    const x = E ? E(g) : null;
    return typeof x != "string" || $e(x) !== "form" ? !1 : typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    g.attributes !== S(g) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    g.nodeType !== P(g) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    g.childNodes !== m(g);
  }, jn = function(g) {
    if (!P || typeof g != "object" || g === null)
      return !1;
    try {
      return P(g) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, Ai = function(g) {
    if (!P || typeof g != "object" || g === null)
      return !1;
    try {
      return typeof P(g) == "number";
    } catch {
      return !1;
    }
  };
  function sr(F, g, x) {
    F.length !== 0 && Jn(F, (L) => {
      L.call(t, g, x, Kn);
    });
  }
  const hy = function(g, x) {
    return !!(Vt && g.hasChildNodes() && !Ai(g.firstElementChild) && Ze(Bd, g.textContent) && Ze(Bd, g.innerHTML) || Vt && g.namespaceURI === ir && x === "style" && Ai(g.firstElementChild) || g.nodeType === Et.processingInstruction || Vt && g.nodeType === Et.comment && Ze(Vd, g.data));
  }, gy = function(g, x, L) {
    if (!kr[x] && ku(x) && (Pe.tagNameCheck instanceof RegExp && Ze(Pe.tagNameCheck, x) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(x)))
      return !1;
    if (Ho && !nr[x]) {
      const V = b(g), J = m(g);
      if (J && V) {
        const se = J.length;
        for (let ke = se - 1; ke >= 0; --ke) {
          const Ie = g === L ? h(J[ke], !0) : J[ke];
          V.insertBefore(Ie, p(g));
        }
      }
    }
    return Lr(g), !0;
  }, mu = function(g, x, L, V) {
    return g.length === 0 ? x : x === L || x === V ? ct(x) : x;
  }, yu = function(g, x) {
    if (sr(A.beforeSanitizeElements, g, null), g !== x && b(g) === null)
      return vs && Ei(g), !0;
    if (Ns(g))
      return Lr(g), !0;
    const L = $e(E ? E(g) : g.nodeName);
    if (le = mu(A.uponSanitizeElement, le, mt, G), sr(A.uponSanitizeElement, g, {
      tagName: L,
      allowedTags: le
    }), g !== x && b(g) === null)
      return vs && Ei(g), !0;
    if (hy(g, L))
      return Lr(g), !0;
    if (kr[L] || !(yt.tagCheck instanceof Function && yt.tagCheck(L)) && !le[L]) {
      const J = gy(g, L, x);
      return J === !1 && sr(A.afterSanitizeElements, g, null), J;
    }
    if ((P ? P(g) : g.nodeType) === Et.element && !dy(g) || (L === "noscript" || L === "noembed" || L === "noframes") && Ze(xv, g.innerHTML))
      return Lr(g), !0;
    if (rr && g.nodeType === Et.text) {
      const J = Ps(g.textContent);
      g.textContent !== J && (Yn(t.removed, {
        element: g.cloneNode()
      }), g.textContent = J);
    }
    return sr(A.afterSanitizeElements, g, null), !1;
  }, bu = function(g, x, L) {
    if (Ci[x] || Vt && x === "patchsrc" || Vt && x === "for" && g !== "label" && g !== "output" || vi && (x === "id" || x === "name") && (L in r || L in ay))
      return !1;
    const V = xe[x] || yt.attributeCheck instanceof Function && yt.attributeCheck(x, g);
    if (!(Tr && Ze(X, x))) {
      if (!(Ss && Ze(Ce, x))) {
        if (V) {
          if (!Jo[x]) {
            if (!Ze(We, qi(L, qt, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && g !== "script" && Id(L, "data:") === 0 && ou[g])) {
                if (!(Un && !Ze(yr, qi(L, qt, "")))) {
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
          !(ku(g) && (Pe.tagNameCheck instanceof RegExp && Ze(Pe.tagNameCheck, g) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(g)) && (Pe.attributeNameCheck instanceof RegExp && Ze(Pe.attributeNameCheck, x) || Pe.attributeNameCheck instanceof Function && Pe.attributeNameCheck(x, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && Pe.allowCustomizedBuiltInElements && (Pe.tagNameCheck instanceof RegExp && Ze(Pe.tagNameCheck, L) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(L)))
        ) return !1;
      }
    }
    return !0;
  }, my = fe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ku = function(g) {
    return !my[Ui(g)] && Ze(on, g);
  }, yy = function(g, x, L, V) {
    if (M && typeof d == "object" && typeof d.getAttributeType == "function" && !L)
      switch (d.getAttributeType(g, x)) {
        case "TrustedHTML":
          return ee(V);
        case "TrustedScriptURL":
          return Re(V);
      }
    return V;
  }, by = function(g, x, L, V) {
    try {
      L ? g.setAttributeNS(L, x, V) : g.setAttribute(x, V), Ns(g) ? Lr(g) : Rd(t.removed);
    } catch {
      cn(x, g);
    }
  }, Tu = function(g) {
    sr(A.beforeSanitizeAttributes, g, null);
    const x = g.attributes;
    if (!x || Ns(g))
      return;
    xe = mu(A.uponSanitizeAttribute, xe, br, Q);
    const L = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: xe,
      forceKeepAttr: void 0
    };
    let V = x.length;
    const J = $e(g.nodeName);
    for (; V--; ) {
      const se = x[V], ke = se.name, Ie = se.namespaceURI, bt = se.value, kt = $e(ke), na = bt;
      let dt = ke === "value" ? na : nv(na);
      if (L.attrName = kt, L.attrValue = dt, L.keepAttr = !0, L.forceKeepAttr = void 0, sr(A.uponSanitizeAttribute, g, L), dt = L.attrValue, iu && (kt === "id" || kt === "name") && Id(dt, su) !== 0 && (cn(ke, g), dt = su + dt), Vt && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        cn(ke, g);
        continue;
      }
      if (kt === "attributename" && $d(dt, "href")) {
        cn(ke, g);
        continue;
      }
      if (!L.forceKeepAttr) {
        if (!L.keepAttr) {
          cn(ke, g);
          continue;
        }
        if (!Si && Ze(_v, dt)) {
          cn(ke, g);
          continue;
        }
        if (rr && (dt = Ps(dt)), !bu(J, kt, dt)) {
          cn(ke, g);
          continue;
        }
        dt = yy(J, kt, Ie, dt), dt !== na && by(g, ke, Ie, dt);
      }
    }
    sr(A.afterSanitizeAttributes, g, null);
  }, ws = function(g) {
    let x = null;
    const L = gu(g);
    for (sr(A.beforeSanitizeShadowDOM, g, null); x = L.nextNode(); )
      if (sr(A.uponSanitizeShadowNode, x, null), yu(x, g), Tu(x), jn(x.content) && ws(x.content), (P ? P(x) : x.nodeType) === Et.element) {
        const J = _(x);
        jn(J) && (ra(J), ws(J));
      }
    sr(A.afterSanitizeShadowDOM, g, null);
  }, ra = function(g) {
    const x = [{
      node: g,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const L = x.pop();
      if (L.shadow) {
        ws(L.shadow);
        continue;
      }
      const V = L.node, se = (P ? P(V) : V.nodeType) === Et.element, ke = m(V);
      if (ke)
        for (let Ie = ke.length - 1; Ie >= 0; --Ie)
          x.push({
            node: ke[Ie],
            shadow: null
          });
      if (se) {
        const Ie = E ? E(V) : null;
        if (typeof Ie == "string" && $e(Ie) === "template") {
          const bt = V.content;
          jn(bt) && x.push({
            node: bt,
            shadow: null
          });
        }
      }
      if (se) {
        const Ie = _(V);
        jn(Ie) && x.push({
          node: null,
          shadow: Ie
        }, {
          node: Ie,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, L = null, V = null, J = null;
    if (Yo = !F, Yo && (F = "<!-->"), typeof F != "string" && !Ai(F) && (F = cv(F), typeof F != "string"))
      throw hn("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    B ? (le = G, xe = Q) : ea(g), (A.uponSanitizeElement.length > 0 || A.uponSanitizeAttribute.length > 0) && (le = ct(le)), A.uponSanitizeAttribute.length > 0 && (xe = ct(xe)), t.removed = [];
    const se = vs && typeof F != "string" && Ai(F);
    if (se) {
      py(F);
      const bt = E ? E(F) : F.nodeName;
      if (typeof bt == "string") {
        const kt = $e(bt);
        if (!le[kt] || kr[kt])
          throw As(F), hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ns(F))
        throw As(F), hn("root node is clobbered and cannot be sanitized in-place");
      try {
        ra(F);
      } catch (kt) {
        throw As(F), kt;
      }
    } else if (Ai(F))
      x = hu("<!---->"), L = x.ownerDocument.importNode(F, !0), L.nodeType === Et.element && L.nodeName === "BODY" || L.nodeName === "HTML" ? x = L : x.appendChild(L), ra(L);
    else {
      if (!Xe && !rr && !q && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return M && an ? ee(F) : F;
      if (x = hu(F), !x)
        return Xe ? null : an ? R : "";
    }
    x && ve && Lr(x.firstChild);
    const ke = se ? F : x;
    try {
      const bt = gu(ke);
      for (; V = bt.nextNode(); )
        yu(V, ke), Tu(V), jn(V.content) && ws(V.content);
    } catch (bt) {
      throw se && (As(F), Jn(t.removed, (kt) => {
        kt.element && Ei(kt.element);
      })), bt;
    }
    if (se)
      return Jn(t.removed, (bt) => {
        bt.element && Ei(bt.element);
      }), rr && ta(F), F;
    if (Xe) {
      if (rr && ta(x), Mt)
        for (J = Ir.call(x.ownerDocument); x.firstChild; )
          J.appendChild(x.firstChild);
      else
        J = x;
      return (xe.shadowroot || xe.shadowrootmode) && (J = Y.call(n, J, !0)), J;
    }
    let Ie = q ? x.outerHTML : x.innerHTML;
    return q && le["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Ze(kv, x.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Ie), rr && (Ie = Ps(Ie)), M && an ? ee(Ie) : Ie;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ea(F), B = !0, G = le, Q = xe;
  }, t.clearConfig = function() {
    Kn = null, B = !1, G = null, Q = null, M = $, R = "";
  }, t.isValidAttribute = function(F, g, x) {
    Kn || ea({});
    const L = $e(F), V = $e(g);
    return bu(L, V, x);
  }, t.addHook = function(F, g) {
    typeof g == "function" && et(A, F) && Yn(A[F], g);
  }, t.removeHook = function(F, g) {
    if (et(A, F)) {
      if (g !== void 0) {
        const x = tv(A[F], g);
        return x === -1 ? void 0 : rv(A[F], x, 1)[0];
      }
      return Rd(A[F]);
    }
  }, t.removeHooks = function(F) {
    et(A, F) && (A[F] = []);
  }, t.removeAllHooks = function() {
    A = Wd();
  }, t;
}
var vv = Tg();
function Mv({ structureProtectionMode: e = "off" }) {
  const [t] = ce(), r = Z(void 0), [n, i] = de(void 0), s = ge((o) => {
    r.current = o, i(o);
  }, []);
  return z(() => {
    if (e === "off")
      return;
    const o = (h) => {
      const y = dg(h);
      if (!y)
        return !1;
      const p = O();
      return e === "protected" ? p && gg(p, y) ? (h.preventDefault(), !0) : !1 : y !== "deleteBackward" && y !== "deleteForward" ? !1 : a(y, h);
    }, a = (h, y) => {
      const p = O(), m = r.current;
      if (m && p && wd(p, m)) {
        if (s(void 0), y.preventDefault(), h !== m.intent)
          return !0;
        const _ = oe(m.key) ?? void 0;
        if (m.kind === "verse") {
          if (_) {
            const S = _.getParent(), P = _.getPreviousSibling(), E = _.getNextSibling();
            _.remove(), P ? mg(P) : E && v(E) ? E.select(0, 0) : S?.selectStart();
          }
        } else m.kind === "selection" ? N(p) && p.removeText() : ye(_) && VS(_);
        return !0;
      }
      if (!p)
        return !1;
      const b = BS(p, h);
      if (b) {
        if (b.kind === "verse") {
          const _ = Oc();
          _.add(b.node.getKey()), kn(_);
        } else {
          const _ = qc();
          _.anchor.set(b.node.getKey(), 0, "element"), _.focus.set(b.node.getKey(), b.node.getChildrenSize(), "element"), kn(_);
        }
        return s({ key: b.node.getKey(), kind: b.kind, intent: h }), y.preventDefault(), !0;
      }
      if (N(p) && !p.isCollapsed() && ql(p)) {
        const _ = p.getNodes().filter(pe).map((E) => E.getKey()), { anchor: S, focus: P } = p;
        return s({
          kind: "selection",
          intent: h,
          key: _[0],
          anchor: { key: S.key, offset: S.offset, type: S.type },
          focus: { key: P.key, offset: P.offset, type: P.type }
        }), y.preventDefault(), !0;
      }
      return !1;
    }, c = (h) => {
      if (e !== "protected")
        return !1;
      const y = O();
      return !y || !ii(y) ? !1 : (h instanceof Event && h.preventDefault(), !0);
    }, l = (h, y) => {
      if (!h)
        return !1;
      const p = vv.sanitize(h), m = new DOMParser().parseFromString(p, "text/html"), b = WS(hb(t, m)), _ = O();
      return N(_) && _.insertNodes(b), y.preventDefault(), !0;
    }, u = (h) => {
      if (e !== "protected")
        return !1;
      const y = O();
      return y && ii(y) ? (h.preventDefault(), !0) : l(h.clipboardData?.getData("text/html"), h);
    }, d = (h) => {
      if (e !== "protected")
        return !1;
      const y = O();
      return y && ii(y) ? (h.preventDefault(), !0) : l(h.dataTransfer?.getData("text/html"), h);
    }, f = () => {
      const h = r.current;
      h && t.getEditorState().read(() => {
        wd(O(), h) || s(void 0);
      });
    };
    return Ue(
      t.registerCommand(pr, o, we),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(Vr, c, Qe),
      t.registerCommand(cr, u, we),
      t.registerCommand(Uf, c, we),
      t.registerCommand(xo, d, we),
      t.registerCommand(To, c, we),
      t.registerUpdateListener(f)
    );
  }, [t, e, s]), z(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const aN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function Ev({ textDirection: e }) {
  const [t] = ce();
  return Av(t, e), null;
}
function Av(e, t) {
  z(() => (Hd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
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
function Pv() {
  const [e] = ce();
  return Nv(e), null;
}
function Nv(e) {
  z(() => {
    if (!e.hasNodes([me, St, Me, Be, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ue(
      e.registerNodeTransform(Be, wv),
      e.registerNodeTransform(Be, (t) => Ov(t, e)),
      e.registerNodeTransform(pt, Gd),
      e.registerNodeTransform(St, Gd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        ss(vn("va"), t), ss(vn("vp"), t);
      })
    );
  }, [e]);
}
function wv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || K(r) || D(n) || D(r) || _e(n) || _e(r) || De(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  De(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ie(e, ae) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  Le(n))
    return;
  if (pe(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  pe(r) && dl(e);
}
function Ov(e, t) {
  const r = e.getParent();
  !De(r) || !e.isAttached() || Xa(t, e.getKey()) && !Xa(t, r.getKey()) && r.insertAfter(e);
}
function Gd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; _e(t); )
    t = t.getLastChild();
  (D(t) || v(t) && _e(t.getParent())) && e.insertBefore(he(" "));
}
function Rl(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Jc(n)) ? void 0 : e;
}
function qv(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (U(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function Rv() {
  const e = O();
  if (!(!N(e) || !e.isCollapsed()))
    return Rl(qv(e.anchor));
}
function $v(e) {
  const t = O();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = xg(e.target)), r ? Rl(ot(r, K)) : void 0;
}
function xg(e) {
  const t = Gy(e)?.anchorNode;
  if ($c(t))
    return en(t) ?? void 0;
}
function Iv(e) {
  if (O())
    return;
  const t = xg(e);
  return t ? Rl(ot(t, K)) : void 0;
}
function Lv() {
  const [e] = ce(), t = lg(Rv);
  return z(() => {
    const r = (n) => {
      Wr(Hr), t(n);
    };
    return Ue(e.registerCommand(dr, () => {
      const n = Iv(e.getRootElement());
      return n && r(n), !1;
    }, xn), e.registerCommand(Gi, (n) => {
      const i = $v(n);
      return i && r(i), !1;
    }, xn));
  }, [e, t]), null;
}
function Dv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = F_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return C(U_, { trigger: e, items: i });
}
function Uv({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = je(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? C(Kv, { trigger: e, harness: i }) : C(Dv, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const Fv = [" ", "*"];
function zv(e, t) {
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
function Kv({ trigger: e, harness: t }) {
  const [r] = ce(), [n, i] = de(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = ge((f, h, y) => {
    const p = h.find((m) => m.kind === "note" && m.marker === f);
    if (p) {
      t.apply(p, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const m = O();
      N(m) && m.insertText(`${e}${f}${y ? " " : ""}`);
    });
  }, [r, t, e]);
  z(() => Ue(r.registerCommand(pr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const p = s.current.query;
        return p ? (a(p, n.items, !1), Jy(() => {
          const m = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(m ? {
            trigger: "backslash",
            hasTextSelection: m.hasTextSelection,
            items: t.getItems(m),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const m = O();
          N(m) && m.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const y = s.current.query;
      if (n.hasTextSelection) {
        const p = n.items.find((m) => m.marker === y);
        return p && t.apply(p, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(y, n.items, !0), !0;
    }
    if (f.key !== e)
      return !1;
    const h = t.getContext();
    return h ? (f.preventDefault(), s.current = { query: "", options: [] }, o.current += 1, i({
      trigger: "backslash",
      hasTextSelection: h.hasTextSelection,
      items: t.getItems(h),
      session: o.current
    }), !0) : !1;
  }, we), r.registerCommand(Ff, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const h = t.getContext();
    return !h || h.noteMarker || h.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(h),
      session: o.current
    }), !0);
  }, ti)), [r, e, t, n, a]);
  const c = ge(() => i(void 0), []), l = ge((f, h) => {
    s.current = { query: f, options: h };
  }, []), u = ge((f) => {
    const { markerMenuItem: h, applyOpts: y } = f;
    t.apply(h, y);
  }, [t]), d = je(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    zv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && C(Uh, { isOpen: !0, children: ({ placement: f }) => C(
    Kh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? Fv : void 0 },
    n.session
  ) });
}
function _g(e) {
  return e.replaceAll(I, "~").replace(/ {2,}/g, (r) => I.repeat(r.length));
}
function jv(e) {
  return e.replaceAll(I, " ").replaceAll("~", I);
}
function Bv(e) {
  return e.replace(/ {2,}/g, " ");
}
let co;
function Vv(e) {
  e && (co = e);
}
function Cg(e) {
  return Do(e);
}
function Wv(e, t) {
  return e.isEmpty() ? Lf : Sg(e.toJSON(), t);
}
function Sg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && vo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Lf;
  if (r.some(lx)) {
    co?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = vg(r), i = Ht(n, t);
  return i ? { type: Cr, version: _r, content: i } : void 0;
}
function Hv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Ee({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function Gv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ee({
    type: Ot.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Jv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Fp(r, a, c), Ee({
    type: Ot.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Yv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Fp(t, o, a), Ee({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function Xv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Cg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(I) && (t[0] = a.slice(1));
  }
  return Ee({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function Qv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ee({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Zv(e, t) {
  const { unknownAttributes: r } = e;
  return Ee({ type: ph, ...r, content: t });
}
function eM(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ee({ type: mh, marker: r, ...n, content: t });
}
function tM(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ee({
    type: bh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function rM(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Ee({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function ei(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ee({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Gp({ sid: n, eid: i, ...s }, o)
  });
}
function nM(e) {
  return e.text;
}
function iM(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ee({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function sM(e) {
  const { marker: t } = e;
  return {
    type: Qs,
    marker: t === "" ? void 0 : t
  };
}
function Jd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function oM(e, t, r, n, i) {
  const s = Xt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = ei({
      type: s,
      marker: ri,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = ei({
      type: s,
      marker: _n,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = ei({
      type: s,
      marker: _n
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = ei({
      type: s,
      marker: ri
    });
    i.push(l);
  }
  (!n || !gp(n)) && t.forEach((l) => {
    const u = ei({
      type: s,
      marker: ri,
      eid: l
    });
    i.push(u);
  });
}
function Ht(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, h = a, y = a, p = a, m = a;
    switch (a.type) {
      case Kt.getType():
        i.push(
          Hv(
            l,
            Ht(l.children, t)
          )
        );
        break;
      case gr.getType():
        i.push(Gv(a));
        break;
      case Ot.getType():
        i.push(
          Jv(
            u,
            Ht(u.children, t)
          )
        );
        break;
      case St.getType():
      case pt.getType():
        i.push(Yv(a));
        break;
      case me.getType():
        i.push(
          Xv(
            d,
            Ht(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case rt.getType():
        i.push(
          Qv(
            f,
            Ht(f.children, t)
          )
        );
        break;
      case In.getType():
        i.push(
          Zv(
            a,
            Ht(a.children, t)
          )
        );
        break;
      case gi.getType():
        i.push(
          eM(
            a,
            Ht(a.children, t)
          )
        );
        break;
      case mi.getType():
        i.push(
          tM(
            a,
            Ht(a.children, t)
          )
        );
        break;
      case Me.getType():
        i.push(
          rM(
            h,
            Ht(h.children, t, h.caller)
          )
        );
        break;
      case wr.getType():
      case Nr.getType():
      case Yt.getType():
      case zf.getType():
      case mr.getType():
        break;
      case tt.getType():
        if (s = Ht(
          p.children,
          t,
          r,
          n
        ), s) {
          const b = p.typedIDs[Br];
          if (b)
            oM(s, b, o, e[c + 1], i), o = b;
          else {
            const _ = s.shift();
            _ && (typeof _ == "string" ? Jd(i, _) : i.push(_)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Xt.getType():
        i.push(ei(a));
        break;
      case Be.getType():
        if (y.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !ks(y.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        y.text !== I && !y.text.startsWith(Uc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        y[ms]?.textType !== "attribute" && (!r || y.text !== Nt(r))) {
          let b = nM(y);
          Cg(t) && (n && b.startsWith(I) && (b = b.slice(1)), b = Bv(jv(b))), Jd(i, b);
        }
        break;
      case Rn.getType():
        i.push(
          iM(
            m,
            Ht(m.children, t)
          )
        );
        break;
      case Rr.getType():
        i.push(sM(a));
        break;
      case yi.getType():
        co?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        co?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function vg(e) {
  const t = e.findIndex((r) => vo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = vg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Fs = {
  initialize: Vv,
  deserializeEditorState: Wv
}, aM = /^sd\d*$/, cM = /* @__PURE__ */ new Set([
  ...Object.entries(La).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === k.Paragraph && !aM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function lM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (_p(i) || Ip(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Ik(i)) {
      t && lo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Gc(i) && cM.has(i.marker) && !lo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Mg(i.children, t).forEach((s) => {
      const o = uM(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = dM(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function Mg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Eg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (gp(i)) {
      const s = Mg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Yd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Yd(i, c.nodes)] });
      });
      return;
    }
    t && lo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Yd(e, t) {
  return { ...e, children: t };
}
function Eg(e) {
  return Ah(e) && e.number !== "";
}
function lo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Eg(r) || lo(r)) : !1;
}
function uM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function dM(e) {
  return {
    type: Zs,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: vh
  };
}
const Xd = Pg([]), fM = {
  type: zf.getType(),
  version: 1
};
let $l = [], te, Pn, Ag, Ct;
function pM(e, t) {
  $l = [], mM(e), yM(t);
}
function hM(e = 0) {
}
function gM(e, t) {
  te = t ?? Lo();
  let r;
  return e ? (e.type !== Cr && Ct?.warn(`This USJ type '${e.type}' didn't match the expected type '${Cr}'.`), e.version !== _r && Ct?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${_r}'.`
  ), e.content.length > 0 ? (r = fc(zr(e.content)), cs(te) && (r = lM(r, Ct))) : r = [Xd]) : r = [Xd], Ag?.($l), {
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
function mM(e) {
  e && (Pn = e), e?.addMissingComments && (Ag = e.addMissingComments);
}
function yM(e) {
  e && (Ct = e);
}
function Il() {
  return Do(te);
}
function bM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function kM(e) {
  let { marker: t } = e;
  t !== Zi && Ct?.warn(`Unexpected book marker '${t}'!`), t = t ?? Zi;
  const { code: r } = e;
  (!r || !Kt.isValidBookCode(r)) && Ct?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  te?.markerMode === "editable" || te?.markerMode === "visible" ? n.push(
    xt("marker", qe(t) + " " + r + I)
  ) : te?.hasGutterParaMarkers && n.push(xt("marker", qe(t) + I, !0));
  const i = bM(e.content);
  i && n.push(ut(Il() ? _g(i) : i));
  const s = Fe(e, gk);
  return Ee({
    type: Kt.getType(),
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
function TM(e) {
  let { marker: t } = e;
  t !== Js && Ct?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Js;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Fe(e, mk);
  let a;
  te?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Ft(t, r) ?? "")
  ];
  return te?.markerMode === "editable" && LM(i, s, c), te?.markerMode === "editable" ? Ee({
    type: Ot.getType(),
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
  }) : Ee({
    type: gr.getType(),
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
function xM(e) {
  let { marker: t } = e;
  t !== Ys && Ct?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Ys;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (J_(te) ?? St).getType(), c = te?.markerMode === "editable" ? qp : Eh;
  let l, u;
  te?.markerMode === "editable" ? l = Ft(t, r) : te?.markerMode === "visible" && (u = !0);
  const d = Fe(e, Pk);
  return Ee({
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
function _M(e, t = [], r = !1) {
  let { marker: n } = e;
  me.isValidMarker(n, Pn?.extraValidMarkers) || Ct?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (te?.markerMode === "editable") {
    const [a] = t;
    oi(a) ? a.text = I + a.text : a && t.unshift(ut(I));
  }
  t.length === 0 && t.push(ut(zt)), lc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Fe(e, kk);
  return s || qM(n, o, i), s || uc(e.marker ?? "", i, !1, r), Ee({
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
function Pg(e) {
  return {
    type: Jr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: wp
  };
}
function CM(e, t = []) {
  let { marker: r } = e;
  rt.isValidMarker(r, Pn?.extraValidMarkers) || Ct?.warn(`Unexpected para marker '${r}'!`), r = r ?? lr;
  const n = [];
  if (bi(te) && (te?.markerMode === "editable" ? n.push(
    ht(r),
    ut(I, hr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && n.push(
    xt(
      "marker",
      qe(r) + I,
      te?.hasGutterParaMarkers
    )
  )), n.push(...t), Il()) {
    const s = n.find(
      (o) => !el(o) && !(oi(o) && o.text === I)
    );
    oi(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => I.repeat(o.length)));
  }
  const i = Fe(e, Ek);
  return Ee({
    type: rt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Op
  });
}
function Ll() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function SM(e, t = []) {
  const r = Fe(e, wT);
  return Ee({
    ...Ll(),
    type: In.getType(),
    unknownAttributes: r,
    children: t,
    version: hh
  });
}
function vM(e, t = []) {
  const r = Fe(e, RT), n = e.marker ?? Wa, i = [];
  return te?.markerMode === "editable" ? i.push(
    ht(n),
    ut(I, hr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && i.push(
    xt(
      "marker",
      qe(n) + I,
      te?.hasGutterParaMarkers
    )
  ), i.push(...t), Ee({
    ...Ll(),
    type: gi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: yh
  });
}
function MM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Ha, a = oh(o, i) ?? o;
  te?.markerMode === "editable" ? s.push(
    ht(a),
    ut(I, hr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && s.push(
    xt(
      "marker",
      qe(a) + I,
      te?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Fe(
    e,
    IT
  );
  return Ee({
    ...Ll(),
    type: mi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: kh
  });
}
function EM(e, t) {
  const r = Kk(t);
  let n = () => {
  };
  return Pn?.noteCallerOnClick && (n = Pn.noteCallerOnClick), Ee({
    type: Yt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: $h
  });
}
function AM(e, t) {
  let { marker: r } = e;
  Me.isValidMarker(r, Pn?.extraValidMarkers) || Ct?.warn(`Unexpected note marker '${r}'!`), r = r ?? zc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : bl(te?.noteMode), a = Fe(e, qb), c = te?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  te?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (u = ht(r, "closing"))) : te?.markerMode === "visible" && (l = xt("marker", qe(r) + " "), s || (u = xt("marker", st(r))));
  const d = [];
  let f;
  if (l && d.push(l), te?.markerMode === "editable" && !o)
    f = ut(Nt(i), void 0, c), d.push(f), IM(n, d), d.push(...t);
  else {
    const h = ut(I, hr, "token");
    f = EM(i, t), d.push(f, h, ...t.flatMap(PM(h)));
  }
  return u && d.push(u), Ee({
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
function PM(e) {
  return (t) => pp(t) ? [t] : [t, e];
}
function NM(e) {
  let { marker: t } = e;
  (!t || !Xt.isValidMarker(t, Pn?.extraValidMarkers)) && Ct?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Fe(e, Fc), s = Jp(e);
  return Ee({
    type: Xt.getType(),
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
    type: tt.getType(),
    typedIDs: { [Br]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function wM(e, t) {
  const { marker: r } = e, n = e.type, i = Fe(e, uk), s = [];
  if (te?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = ah(
      n,
      r,
      i
    );
    o && s.push(xt("marker", o)), a && s.push(xt("attribute", a)), s.push(...t), c && s.push(xt("attribute", c)), l && s.push(xt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    oi(o) && (o.mode = "token");
  }), Ee({
    type: Rn.getType(),
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
function OM(e) {
  return {
    type: Rr.getType(),
    marker: e,
    text: ji(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: te?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: dh
  };
}
function ht(e, t = "opening", r = !1, n = "normal") {
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
  return t !== void 0 && (n[ms] = { textType: t }), n;
}
function xt(e, t, r = !1) {
  const n = {
    type: Nr.getType(),
    text: t,
    textType: e,
    version: fp
  };
  return r && (n[ms] = { [Bc.key]: !0 }), n;
}
function ls(e, t) {
  return {
    type: wr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: bp
  };
}
function lc(e, t, r = !1) {
  te?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : te?.markerMode === "visible" && t.push(xt("marker", qe(e, r)));
}
function uc(e, t, r = !1, n = !1) {
  te?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : te?.markerMode === "visible" && t.push(
    xt(
      "marker",
      r ? st("") : st(e, n)
    )
  );
}
function qM(e, t, r) {
  if (te?.markerMode !== "editable" || !t) return;
  const n = ar(t, Co(e));
  n && r.push(ut(n, "attribute"));
}
function Zd(e, t) {
  if (e.type !== "ms" || te?.markerMode !== "editable" && te?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Fe(e, Fc), o = Yp(
    n,
    i,
    s,
    Jp(e)
  ), a = ar(o, So(r ?? ""));
  if (!a) return;
  const c = I + a;
  te?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(xt("attribute", c));
}
function RM(e, t) {
  const r = e.marker ?? "";
  if (te?.markerMode === "editable") {
    const n = [];
    lc(r, n), Zd(e, n), uc(r, n, !0), t.push(ls("milestone", n));
  } else
    lc(r, t), Zd(e, t), uc(r, t, !0);
}
function ef(e, t, r) {
  t !== void 0 && r.push(
    ls(e, [
      ht(e, "opening"),
      ut(I + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function $M(e, t) {
  te?.markerMode === "editable" && (ef("va", e.altnumber, t), ef("vp", e.pubnumber, t));
}
function IM(e, t) {
  e !== void 0 && t.push(
    ls("cat", [
      ht("cat", "opening"),
      ut(I + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function LM(e, t, r) {
  e !== void 0 && r.push(
    ls("ca", [
      ht("ca", "opening"),
      ut(I + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    ls("cp", [
      ht("cp", "opening"),
      ut(I + t, "attribute")
    ])
  );
}
function tf(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function DM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function rf(e, t) {
  t.marker === _n && t.sid !== void 0 && e.push(t.sid), t.marker === ri && t.eid !== void 0 && DM(e, t.eid);
}
function dc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Qd(o, [...n])] : o, c = e[i];
  rf(n, c);
  const l = dc(
    e.slice(i + 1, s),
    tf(t, i + 1),
    c.marker === _n,
    n
  ), u = Qd(l, [...n]), d = e[s];
  rf(n, d);
  const f = dc(
    e.slice(s + 1),
    tf(t, s + 1),
    d.marker === _n,
    n
  );
  return [...a, u, ...f];
}
function zr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(Il() ? _g(i) : i));
    else if (!i.type)
      Ct?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Kt.getType():
          n.push(kM(i));
          break;
        case Ot.getType():
          n.push(TM(i));
          break;
        case pt.getType():
          te?.hasSpacing || n.push(fM), n.push(xM(i)), $M(i, n);
          break;
        case me.getType():
          n.push(
            _M(i, zr(i.content, !0), t)
          );
          break;
        case rt.getType():
          n.push(CM(i, zr(i.content)));
          break;
        case Me.getType():
          n.push(AM(i, zr(i.content)));
          break;
        case Xt.getType():
          sp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && $l?.push(i.sid)), n.push(NM(i)), RM(i, n);
          break;
        case Rr.getType():
          n.push(OM(i.marker ?? ""));
          break;
        case ph:
          n.push(SM(i, zr(i.content)));
          break;
        case mh:
          n.push(vM(i, zr(i.content)));
          break;
        case bh:
          n.push(MM(i, zr(i.content)));
          break;
        default:
          Ct?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(wM(i, zr(i.content)));
      }
  }), dc(n, r);
}
function fc(e) {
  const t = e.findIndex(
    (n) => _p(n) || Ip(n) || Gc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    qT(n)
  );
  if (t >= 0) {
    const n = fc(e.slice(0, t)), i = e[t], s = fc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Ah(n)))
    return [Pg(e)];
  return e;
}
const Er = {
  initialize: pM,
  reset: hM,
  serializeEditorState: gM
};
function Ng(e) {
  if (e && !w(e)) {
    if (v(e)) return e;
    if (U(e))
      for (const t of e.getChildren()) {
        const r = Ng(t);
        if (r) return r;
      }
  }
}
function UM() {
  const e = O();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((v(t) && !w(t) ? En(t) : void 0) && v(t)) {
      const i = he(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ai(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Ng(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(I) ? I : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of wg(e)) {
    if (!En(t)) continue;
    ai(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(I) && r.setTextContent(n.slice(I.length));
  }
  return !0;
}
function wg(e) {
  const [t, r] = Rc(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || w(a) || ie(a, ae) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), h = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    h && o.push(h);
  }), o;
}
function FM() {
  const e = O();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return En(t) ? ye(ol(t)) : !1;
}
function Og() {
  let e = O();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (w(t) && !ll(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = O(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!v(t) || w(t) || !En(t)) return !1;
  const r = ol(t);
  if (!ye(r)) return !1;
  const n = he(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  ai(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return D(a) ? al(a) : o.select(0, 0), !0;
}
const qg = {
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
      const e = O(), t = Xc(e), r = pl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Bk(0, o);
        const a = _x(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Bp(c) && Qc(parseInt(n, 10), c);
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
function pc(e, t) {
  return Me.isValidMarker(e, t) || !!qg[e] || rt.isValidMarker(e, t) || me.isValidMarker(e, t);
}
function zM(e, t) {
  return me.isNoteContentMarker(e) ? !1 : me.isValidMarker(e, t);
}
function Rg(e, t, r, n, i, s) {
  const o = Lh(
    e,
    void 0,
    void 0,
    t,
    n ?? Lo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function hc(e, t, r, n, i, s, o) {
  if (Me.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = Rg(
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
  const a = HM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = O();
      N(u) && (Sh(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), h = td(d, Er, r), y = sa(h);
      if (N(u)) {
        const p = u.anchor.getNode(), m = p.getParent(), b = En(p), _ = u.anchor.key === u.focus.key;
        if (D(y) && b && _ && !Ea(y, o))
          BM(
            u,
            y,
            p,
            r?.markerMode === "editable"
          );
        else if (D(y) && !_ && !Ea(y, o) && VM(u))
          WM(u, y, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          GM(
            u,
            () => sa(h)
          );
        else if (U(y) && !y.isInline()) {
          const S = u.insertParagraph();
          if (S) {
            const P = S.getChildren();
            y.append(...P), S.replace(y), ye(y) && Ti(y) || y.selectStart();
          }
        } else if (D(y) && v(p) && !w(p) && D(p.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Ea(y, o)) {
          const S = p.getParent();
          if (D(S)) {
            const P = u.anchor.offset;
            if (P === 0) p.insertBefore(y);
            else if (P >= p.getTextContentSize()) p.insertAfter(y);
            else {
              const [j] = p.splitText(P);
              j.insertAfter(y);
            }
            y.getChildren().forEach((j) => {
              w(j) && j.setNested(!0);
            });
            const E = y.getChildren().find((j) => v(j) && !w(j));
            E && v(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : y.selectEnd();
          }
        } else if (v(p) && !w(p) && u.isCollapsed() && (K(m) || D(m) && K(m.getParent()))) {
          const S = D(m) ? m : void 0, P = S ? KM(p, u.anchor.offset) : [];
          let j = (S ?? p).insertAfter(y);
          if (Or(y)) {
            const M = {
              ...r || Lo(),
              markerMode: "hidden"
            }, R = td(
              d,
              Er,
              M
            ), $ = sa(R);
            j = j.insertAfter($);
          }
          if (P.length > 0 && S) {
            const M = uo(S).append(...P);
            j.insertAfter(M), S.isEmpty() && S.remove();
          } else v(j.getNextSibling()) || j.insertAfter(he(I));
          U(j) && j.selectEnd();
        } else if (u.insertNodes([y]), iE(y), f) {
          const S = Oc();
          S.add(y.getKey()), kn(S);
        } else if (D(y)) {
          const S = y.getChildren().find((P) => v(P) && !w(P));
          S && v(S) ? S.select(
            S.getTextContentSize(),
            S.getTextContentSize()
          ) : y.selectEnd();
        } else {
          const S = y.getNextSibling();
          S ? S.selectStart() : y.selectStart();
        }
      } else
        u?.insertNodes([y]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function KM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Ea(e, t) {
  return ((t ?? eo).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function jM(e, t) {
  t && e.getChildren().forEach((i) => {
    w(i) && i.setNested(!0);
  }), e.getChildren().some((i) => w(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function BM(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && D(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !v(r)) {
    const o = e.anchor.offset;
    if (v(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else v(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = ui(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ai(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(I) && i.setTextContent(I + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !w(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !w(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function VM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (w(n) || D(n)) continue;
    if (!v(n) || n.getType() !== Be.getType() || ie(n, ae) === "attribute") return !1;
    const i = ol(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    En(n) && (r = !0);
  }
  return r;
}
function WM(e, t, r) {
  const n = wg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!En(a)) return;
    ai(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(I) && c.setTextContent(l.slice(I.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(I) || i.setTextContent(I + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !w(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function HM(e, t) {
  let r = qg[e];
  return r || (rt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: rt.getType(), marker: e, content: [] }] })
  } : me.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: me.getType(), marker: e };
      return (me.isValidFootnoteMarker(e) || me.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function GM(e, t) {
  const r = e.getNodes(), [n, i] = ui(e);
  let s;
  r.forEach((o, a) => {
    if (U(s) && s.isParentOf(o))
      return;
    const c = $g(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((d) => w(d) && d.getMarkerSyntax() === "opening") && jM(s, D(s.getParent()))), YM(c, s, l);
  }), (v(s) || U(s)) && s.selectEnd();
}
function ui(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Dl(e) {
  return _e(e) || K(e) || K(e.getParent());
}
function $g(e, t, r, n, i) {
  if (!Dl(e)) {
    if (v(e))
      return JM(e, t, r, n, i);
    if (U(e) && e.isInline())
      return e;
  }
}
function JM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function YM(e, t, r) {
  if (v(t)) {
    const n = gc(e, t);
    t.setTextContent(n), e.remove();
  } else if (U(t)) {
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
    gc(e, t), r && D(t) && t.getChildren().some((s) => w(s)) && v(e) && !w(e) && !e.getTextContent().startsWith(I) && e.setTextContent(I + e.getTextContent());
  }
}
function gc(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    dl(n), v(n) || t.insertBefore(he(" "));
  }
  return r;
}
function Ig(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = Nn(u, t);
    if (!f) return !1;
    const h = v(u) ? u.getTextContentSize() : 0;
    if (nf(f, r), v(u) && u.isAttached()) {
      const y = u.getTextContentSize(), p = Math.max(h - y, 0), m = Math.max(0, Math.min(d - p, y)), b = O();
      N(b) && b.setTextNodeRange(u, m, u, m);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = ui(e);
  if (!Fl(n, t, s, o)) return !1;
  const a = Ul(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = Nn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Fg(d, a);
    f && (nf(f, r), l = !0);
  }), zg(a, i), l;
}
function nf(e, t) {
  e.getChildren().forEach((n) => {
    jt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === zt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    v(n) && i.startsWith(I) && n.setTextContent(i.slice(I.length));
  }), Ra(e);
}
function Ul(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = $g(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    v(o) && n.push(o);
  }), n;
}
function Nn(e, t) {
  let r = e, n;
  for (; r && !ye(r); ) {
    if (K(r)) return;
    !n && D(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Lg(e) {
  const t = ot(
    e,
    (r) => K(r) || ye(r)
  );
  return K(t);
}
function Dg(e) {
  return e.filter(
    (t) => !Dl(t) && (v(t) || U(t) && t.isInline())
  );
}
function XM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || Dl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function QM(e, t, r) {
  return e.getChildren().some(
    (n) => U(n) && t.some((i) => n.isParentOf(i)) && !Ug(n, r)
  );
}
function Fl(e, t, r, n, i) {
  const s = Dg(e), o = XM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Nn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !QM(l, s, o);
  });
}
function Ug(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || jt(r));
}
function Fg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (U(u) && t.some((d) => u.isParentOf(d))) {
      if (!Ug(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && jt(n[s - 1]) && (s -= 1), o < n.length - 1 && jt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(uo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(uo(e).append(...c)), e;
}
function uo(e) {
  return Yy(e);
}
function zg(e, t) {
  const r = O(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function ZM(e, t, r) {
  if (e.isCollapsed()) {
    const l = Nn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Fu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = ui(e);
  if (!Fl(n, r, i, s, t)) return !1;
  const o = Ul(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Nn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Fg(u, o);
    d && (Fu(d, t), c = !0);
  }), c;
}
function eE(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (m) => m !== t
  ), s = e.getNodes(), [o, a] = ui(e);
  if (!!!i?.some(
    (m) => Fl(s, m, o, a)
  ) && !tE(s, t)) return !1;
  let l = !1;
  i?.forEach((m) => {
    const b = O();
    N(b) && Ig(b, m, n) && (l = !0);
  });
  const u = O();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, h] = ui(u), y = Ul(
    u.getNodes(),
    f,
    h
  );
  if (y.length === 0) return l;
  const p = y.filter(
    (m) => !Lg(m) && !Nn(m, t)
  );
  return p.length > 0 && (rE(p).forEach((m) => nE(m, t)), l = !0), zg(y, d), l;
}
function tE(e, t) {
  return Dg(e).some(
    (r) => !Lg(r) && !Nn(r, t)
  );
}
function rE(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function nE(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? uo(i) : vr(t);
  e[0].insertBefore(s), s.append(...e), i === r || gc(e[0], s);
}
function iE(e) {
  pe(e) && (dl(e.getPreviousSibling()), Nh(e.getNextSibling()));
}
const Kg = {
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
}, sf = "psc-active-text", $s = "psc-empty-text";
function sE({ viewOptions: e }) {
  const [t] = ce(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return z(() => {
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
        Gi,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${$s}`);
          if (!c) return !1;
          const l = en(c);
          if (!pe(l)) return !1;
          const u = l.getParent();
          if (!U(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        ft
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Aa(), f = oE(), h = [], y = [];
          return ze().getChildren().forEach((p) => {
            if (!U(p)) return;
            const { emptyKeys: m, nonEmptyKeys: b } = cE(p);
            h.push(...m), y.push(...b);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: h, nonEmptyKeys: y };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove($s) : t.getElementByKey(d)?.classList.add($s);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove($s));
      }),
      t.registerCommand(
        Ic,
        () => (i(void 0), !1),
        ft
      ),
      t.registerCommand(
        Xy,
        () => {
          const o = t.getEditorState().read(Aa);
          return o !== r.current && i(o), !1;
        },
        ft
      )
    ];
    return i(t.getEditorState().read(Aa)), Ue(...s);
  }, [t, n]), null;
}
function Aa() {
  return aE(O() ?? void 0)?.getKey();
}
function oE() {
  const e = O(), t = Dt(e)?.getParent();
  if (ne(t))
    return t.getChildren().slice(0, El(t)).findLast(pe)?.getKey();
  if (!N(e)) return;
  const r = e.anchor, n = r.getNode(), i = n.getTopLevelElement();
  if (!U(i)) return;
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
    pe(o[c]) && (a = o[c].getKey());
  return a;
}
function aE(e) {
  const t = Dt(e ?? null);
  if (t) {
    const r = t.getTopLevelElement();
    return U(r) ? r : void 0;
  }
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function cE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!pe(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (pe(c)) break;
      if (!(Qt(c) || w(c)) && c.getTextContent().replaceAll(Vs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const lE = /^\+/;
function zl(e, t) {
  const r = t.replace(lE, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function jg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Bg(e, t) {
  return jg(e, t) !== void 0;
}
function mc(e, t) {
  const r = jg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function fo(e, t, r) {
  const n = U(e) ? e.getChildren().filter(w) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function uE(e, t, r, n, i) {
  const s = zl(n, t);
  if (!s) {
    fo(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && fo(e, "invalid", i);
}
function Vi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || uE(s, o, t, r, n), Vi(s, t, r, n, i || o === "xq");
    } else if (pe(s)) {
      if (i) continue;
      const o = zl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? Vi(s, s.getMarker(), r, n, i) : De(s) || U(s) && Vi(s, t, r, n, i);
}
function dE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = zl(e, a);
    if (!c) {
      fo(o, "unknown", r), mc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    mc(n, l) || fo(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of ze().getChildren())
    De(o) || (gt(o) || Je(o) ? i(o, o.getMarker()) : ne(o) ? (i(o, o.getMarker()), s(o) && Vi(o, o.getMarker(), e, r, !1)) : U(o) && s(o) && Vi(o, "p", e, r, !1));
  return r;
}
function fE(e) {
  return !!e?.includes("(basic)");
}
function pE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Vg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && pc(e, t);
}
function Kl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Wg(e, t) {
  const r = [];
  for (const n of t) {
    const i = Kl(e, n);
    i && mc(r, i);
  }
  return r;
}
function zs(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: pE(e.description),
    isBasic: fE(e.description)
  };
}
function hE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function yc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : hE(e.marker, t.marker);
}
function bc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Wg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Vg(i.marker, r)
  ).filter((i) => {
    const s = Kl(e, i.marker);
    return s !== void 0 && Bg(n, s);
  }).map((i) => zs(i, "paragraph")).sort(yc);
}
function gE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Vg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => zs(c, "character")).sort(yc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => zs(c, "character")),
    ...a.map((c) => zs(c, "note"))
  ].sort(yc);
}
function mE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function yE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function bE(e, t, r) {
  return [
    ...mE(e, t.openCharMarkers),
    ...gE(e, t, r)
  ].sort(yE);
}
function kE(e, t, r) {
  if (t.source === "paragraph") return bc(e, t, r);
  const n = bE(e, t, r);
  return n.length > 0 ? n : bc(e, t, r);
}
function TE(e, t, r) {
  const n = bc(e, t, r), i = Wg(e, t.previousParaMarkers), s = Kl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Bg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const er = String.raw`\w-`, Hg = "a-z0-9", xE = `[a-z][${Hg}]*`, _E = new RegExp(
  String.raw`^\\(\+?[${er}]+)[ \u00A0]$`
), Gg = new RegExp(String.raw`^\\(\+?[${er}]+)$`), CE = new RegExp(String.raw`^\\\+?[${er}]*\*$`), SE = new RegExp(
  String.raw`^\\(\+?[${er}]+)(?:[ \u00A0]|$)`
), vE = new RegExp(
  String.raw`^\\(\+?)([${er}]+)`
), ME = new RegExp(
  String.raw`\\\+?[${er}]+(?:\\?\*|[ \u00A0])`
), EE = new RegExp(
  String.raw`\\\+?[${er}]*$`
), AE = new RegExp(
  String.raw`^\\(${xE})( |$)`
), PE = new RegExp(
  String.raw`\\[${Hg}+*]*$`,
  "i"
), it = "￼";
function Jg(e) {
  return e.length > 1 && e.startsWith(I) && e.charAt(1) !== it ? e.slice(1) : e;
}
function of(e) {
  return el(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Yg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Er.serializeEditorState(
    {
      type: Cr,
      version: _r,
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
  if (a[c]?.text !== Nt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && of(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Is(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function $i(e, t) {
  EE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += it;
}
function Ut(e) {
  return e.replaceAll(I, " ");
}
function NE(e, t, r = !1) {
  if (Do(t)) return Ut(e);
  if (e === I) return " ";
  const n = r && e.startsWith(I), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(I, "~");
}
function Wi(e) {
  const t = e.getTextContent();
  return $n(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function jl(e, t) {
  const r = e[t];
  if (!He(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Po(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Xg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Bl(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = ts(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Vl(e) {
  return !!e.getUnknownAttributes();
}
function jo(e, t) {
  const r = t(e)?.type;
  return r === k.Milestone || r === void 0 && jc(e);
}
function Qg(e, t) {
  return He(e) ? !jo(e.getMarker(), t) : K(e) || De(e) ? !0 : Oe(e) ? Vl(e) : D(e) ? Zg(e, t) : !1;
}
function Zg(e, t) {
  if (eT(e)) return !0;
  const r = e.getMarker();
  return !jb(r) && t(r) === void 0;
}
const It = "", Lt = "";
function af(e) {
  return e.flatMap((t) => Le(t) ? t.getChildren() : [t]);
}
function Fi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (He(s)) {
      const o = jl(e, i);
      jo(s.getMarker(), r) && Xg(o) ? (t.push(
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
      ), Fi(af(o), t, r), t.push(Lt)) : t.push(it), i += o.length;
    } else if (Oe(s)) {
      const o = Bl(e, i);
      Vl(s) ? t.push(it) : (t.push(
        It,
        "verse",
        Ut(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Fi(af(o), t, r), t.push(Lt)), i += o.length;
    } else w(s) ? t.push(It, "marker", Ut(s.getTextContent()), Lt) : rn(s) ? t.push(It, "unmatched", Ut(s.getTextContent()), Lt) : Qg(s, r) ? t.push(it) : gs(s) ? t.push(" ") : v(s) ? t.push(
      Ut(
        n ? Jg(Wi(s)) : Wi(s)
      )
    ) : D(s) ? (t.push(It, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Fi(s.getChildren(), t, r, !0), t.push(Lt)) : U(s) ? (t.push(It, s.getType()), Fi(s.getChildren(), t, r), t.push(Lt)) : t.push(it);
  }
}
function xi(e, t) {
  const r = [];
  return Fi(e, r, t), r.join("");
}
function Ar(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function di(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Wl(e) {
  return e.type ?? "";
}
function em(e, t, r) {
  return t === "closing" ? st(e, r) : t === "selfClosing" ? st("") : qe(e, r);
}
function Pa(e, t) {
  const r = e[t];
  if (!(!r || Wl(r) !== "attribute-run"))
    return Ar(r) ?? [];
}
function _i(e, t) {
  const r = [];
  return zi(e, r, t), r.join("");
}
function zi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Wl(s);
    if (o === "ms") {
      const l = s, u = Pa(e, i + 1);
      u && jo(l.marker ?? "", r) ? (t.push(
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
      ), zi(u, t, r), t.push(Lt), i += 1) : t.push(it);
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
        Ut(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Pa(e, i + 1 + u);
      for (; d; )
        zi(d, t, r), u++, d = Pa(e, i + 1 + u);
      t.push(Lt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        It,
        "marker",
        Ut(
          em(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(It, "char", JSON.stringify(l.unknownAttributes ?? null)), zi(Ar(s) ?? [], t, r, !0), t.push(Lt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(it);
      continue;
    }
    if (o === "unmatched") {
      t.push(It, "unmatched", Ut(di(s) ?? "")), t.push(Lt);
      continue;
    }
    const a = di(s);
    if (a !== void 0) {
      t.push(Ut(n ? Jg(a) : a));
      continue;
    }
    const c = Ar(s);
    c ? (t.push(It, o), zi(c, t, r), t.push(Lt)) : t.push(it);
  }
}
function Bo(e) {
  let t = 0;
  for (const r of e) {
    const n = Ar(r);
    if (n) {
      t += Bo(n);
      continue;
    }
    const i = di(r);
    if (i !== void 0)
      for (const s of i) s === it && t++;
  }
  return t;
}
function us(e, t, r, n, i) {
  wn(e.getChildren(), t, r, n, i);
}
function wn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (w(a))
      Is(t, a, Ut(a.getTextContent()));
    else if (He(a)) {
      s();
      const c = jl(e, o);
      jo(a.getMarker(), r) && Xg(c) ? wn(c, t, r, n) : $i(t, [a, ...c]), o += c.length;
    } else if (K(a) || De(a))
      s(), $i(t, [a]);
    else if (Oe(a)) {
      s();
      const c = Bl(e, o);
      Vl(a) ? $i(t, [a, ...c]) : (Is(t, a, Ut(Wi(a))), wn(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), Zg(a, r) ? $i(t, [a]) : us(a, t, r, n, { pending: !0 });
    else if (gs(a))
      s(), Is(t, a, " ");
    else if (v(a)) {
      const c = $n(a) || ie(a, ae) === "attribute", l = s() && !c;
      Is(
        t,
        a,
        c ? Ut(Wi(a)) : NE(Wi(a), n, l)
      );
    } else U(a) ? us(a, t, r, n, i) : (s(), $i(t, [a]));
  }
}
function Hl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== k.Unknown && n !== k.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (De(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return us(e, i, t, r), i;
}
function tm(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
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
    } else U(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function kc(e, t = []) {
  for (const r of e)
    Oe(r) ? t.push(r) : U(r) && kc(r.getChildren(), t);
  return t;
}
function rm(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === it && t++;
    else U(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Dn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === it && t++;
    else r.content && (t += Dn(r.content));
  return t;
}
function wE(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), U(i) && us(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const ds = /\s/;
function nm(e) {
  return e.filter(Vo).length;
}
function Vo(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return v(t) && !w(t) && ie(t, ae) === "attribute";
}
function OE(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return w(t) || Vo(e);
}
function cf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Vo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      ds.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Gl(e, t, r) {
  const n = cf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !OE(i) ? cf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: nm(e.spans) };
}
function Na(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return w(t) && t.getMarkerSyntax() !== "opening";
}
function qE(e) {
  const t = oe(e.key);
  if (!w(t)) return !1;
  const r = t.getParent();
  return D(r) ? (r.selectNext(0, 0), !0) : !1;
}
function RE(e) {
  const t = oe(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Oe(t) ? Bl(r, n) : He(t) ? jl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function im(e, t, r) {
  const { text: n, spans: i } = e, s = nm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, h = !d.isSentinel && !Na(d);
    if (!(o && Vo(d))) {
      if (u) {
        if (!h) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let y = 0; y < f; y++) {
        const p = n[d.start + y];
        if (c === 0 && (l === 0 || !ds.test(p))) {
          if (h) {
            a = { key: d.key, offset: y };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? ds.test(p) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (h) {
          a = { key: d.key, offset: f };
          break;
        }
        u = !0;
      }
    }
  }
  if (!a) {
    const d = i[i.length - 1];
    if (d && Na(d) && qE(d) || d?.isSentinel && RE(d)) return;
    const f = [...i].reverse().find((h) => !h.isSentinel && !Na(h));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = oe(a.key);
    if (d && v(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(U)?.selectStart();
}
function sm(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(U)?.selectStart();
      return;
    }
    im(wE(e, n, i), t, e);
  }
}
function $E(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(U)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  wn(e, s, n, i), im({ text: s.text, spans: s.spans }, t, e);
}
function om(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const p of e) {
    const m = Hl(p, n, r);
    if (!m)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const b = s.text.length;
    m.spans.forEach(
      (_) => s.spans.push({ ..._, start: _.start + b, end: _.end + b })
    ), s.sentinels.push(...m.sentinels), s.text += m.text;
  }
  let o, a = !1;
  const c = O();
  if (N(c)) {
    for (let p = c.anchor.getNode(); p; p = p.getParent())
      if (e.some((m) => m.is(p))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Gl(s, c.anchor.key, c.anchor.offset));
  }
  const l = Pr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Dn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Er.serializeEditorState(
    { type: Cr, version: _r, content: l },
    r
  );
  if (_i(u.root.children, n) === xi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((p) => yo(p));
  if (rm(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = kc(e).map((p) => ({
    number: p.getNumber(),
    sid: p.getSid()
  })), h = e[0];
  d.forEach((p) => h.insertBefore(p)), tm(d, s.sentinels), e.forEach((p) => p.remove());
  const y = kc(d);
  for (let p = 0; p < f.length && p < y.length; p++)
    y[p].getNumber() === f[p].number && y[p].setSid(f[p].sid);
  return sm(d, o, a, n, r), !0;
}
function am(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Me.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!w(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(vt(s) || v(s) && s.getTextContent() === Nt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!w(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return wn(c, l, t, r), { out: l, contentNodes: c };
}
function cm(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(it)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function IE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = am(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = O();
  if (N(u)) {
    for (let P = u.anchor.getNode(); P; P = P.getParent())
      if (e.is(P)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Gl(o, u.anchor.key, u.anchor.offset));
  }
  const d = Pr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Dn(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = f.content ?? [], y = cm(h), p = Yg(e, h, y, r);
  if (p.failure !== void 0)
    return p.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      p.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Bo(p.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const m = e.getCategory() !== y;
  if (m && e.setCategory(y), _i(p.children, n) === xi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  const b = p.children.map((P) => yo(P));
  if (rm(b) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), m;
  const _ = a[0];
  if (_)
    b.forEach((P) => _.insertBefore(P));
  else {
    const P = e.getChildren().find((E) => w(E) && E.getMarkerSyntax() === "closing");
    b.forEach((E) => P ? P.insertBefore(E) : e.append(E));
  }
  tm(b, o.sentinels);
  const S = new Set(o.sentinels.flat().map((P) => P.getKey()));
  return a.forEach((P) => {
    S.has(P.getKey()) || P.remove();
  }), $E(b, c, l, n, r), !0;
}
const lm = /* @__PURE__ */ new Set(["ca", "cp"]), Jl = "cp";
function um(e) {
  if (!fr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (us(e, t, ur, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Pr(r, { getMarker: ur }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Jl)
  );
}
function Wo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && lm.has(r.getMarker()) || um(r)) {
      t.push(r);
      continue;
    }
    ne(r) && r.getMarker() === Jl && t.push(r);
    break;
  }
  return t;
}
function LE(e) {
  const t = (n) => D(n) && lm.has(n.getMarker()) || um(n);
  if (t(e) || ne(e) && e.getMarker() === Jl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ne(n)) return n;
      if (!t(n)) return;
    }
}
function dm(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Wo(e);
  if (n.some((s) => ne(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (wn(e.getChildren(), i, t, r), wn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function DE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Wo(e)], o = dm(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = O();
  if (N(l)) {
    for (let y = l.anchor.getNode(); y; y = y.getParent())
      if (s.some((p) => p.is(y))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Gl(o, l.anchor.key, l.anchor.offset));
  }
  const u = Pr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Dn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Er.serializeEditorState(
    { type: Cr, version: _r, content: u },
    r
  );
  if (_i(f.root.children, n) === xi(s, n)) {
    let y = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), y = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), y = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), y = !0), y || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  }
  const h = f.root.children.map((y) => yo(y));
  return Ne(h[0]) ? (h.forEach((y) => e.insertBefore(y)), s.forEach((y) => y.remove()), sm(h, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function fs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (De(n)) return;
    !t && (K(n) || ne(n) || Ne(n)) && (t = n), Qy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? LE(r) : void 0) ?? t;
}
function Gt(e, t) {
  const r = fs(e);
  return r ? K(r) ? IE(r, t) : Ne(r) ? DE(r, t) : om([r], t) : !1;
}
const UE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function lf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !UE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Ks(e, t) {
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
          t.push(`\\${n} `), Ks(r.content, t), lf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Ks(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Ks(r.content, t);
      }
    }
}
function uf(e, t, r) {
  const n = fs(e);
  if (!ne(n)) return !1;
  const i = O();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Hl(n, t, r);
  if (!o) return !1;
  const a = Pr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    ds.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Ks(a, l);
  for (const u of l.join("").replaceAll(I, "~")) {
    if (ds.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function Yl(e, t) {
  return fm(e, t, k.Paragraph);
}
function FE(e, t) {
  return fm(e, t, k.Character);
}
function fm(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== k.Unknown ? i === r : !(Me.isValidMarker(n) || jc(n));
}
function zE(e) {
  return [lt(e), Mo()];
}
function Xl(e) {
  Bt(e, 2);
}
function KE(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Ql(e) {
  const t = KE(e);
  e.splice(0, 0, zE(e.getMarker())), t && Xl(e);
}
function po(e, t) {
  e.setMarker(t), Ql(e), Xl(e);
}
function jE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!$n(n)) {
    if (v(n) && !w(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(I), Tt(n, ae, hr), n.setMode("token");
      return;
    }
    if (Wp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Mo());
  }
}
function df(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : U(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function Hi(e) {
  for (let t = e; t; t = t.getParent())
    if (ne(t)) return t;
}
function BE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Hi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Hi(r.getNode())?.is(s) ?? !1, a = Hi(n.getNode())?.is(s) ?? !1;
    return !(o && !df(r, s, "start") || a && !df(n, s, "end"));
  });
}
function Tc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = O();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of BE(r)) t.add(n.getKey());
}
function VE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = O();
  if (!N(r) || !r.isCollapsed()) return;
  const n = Hi(r.focus.getNode());
  n && t.add(n.getKey());
}
function WE(e) {
  const t = O();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => w(r)) && (Tc(e), t.removeText());
}
const HE = new RegExp(
  String.raw`^\\\+?([${er}]+)(?:[ \u00A0]|$)`
);
function GE(e, t) {
  const r = HE.exec(e.getTextContent());
  return !!r && Yl(r[1], t);
}
function JE(e, t) {
  if (!bi(t.viewOptions)) return;
  if (jt(e.getFirstChild())) {
    jE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (GE(e, t.getMarker)) return;
    Ql(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ne(o) && !o.is(e))) {
      po(e, lr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ne(r)) {
    const n = e.getChildren().filter((a) => !$n(a)), i = O();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Hi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || U(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Bt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  po(e, lr);
}
function YE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = ar(t, Co(e.getMarker()));
  return r === "" ? void 0 : r;
}
function XE(e) {
  const t = e.getChildren().filter((s) => !w(s) && ie(s, ae) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith(I) && r.setTextContent(r.getTextContent().slice(1));
  const n = YE(e);
  n && t.push(he(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function QE(e, t) {
  const r = e.getChildren(), n = r.some((s) => w(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => v(c) && !w(c) && c.getTextContent() === Nt(s)
    ), a = fi(e).some(({ node: c }) => w(c));
    if (!o && !a) return;
    r.forEach((c) => {
      w(c) || (v(c) && c.getTextContent() === Nt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => w(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function ZE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(w(r) && r.getMarkerSyntax() === "opening")) {
    XE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => w(o) && o.getMarkerSyntax() === "closing");
  i && !s && Gt(e, t);
}
function xc(e, t, r) {
  if (!w(e.getFirstChild()) && r?.markerMode === "editable" && bi(r)) {
    po(e, t);
    return;
  }
  Wh(e, t);
}
function pm() {
  const e = O();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = hm(e);
    return t !== "removed" ? t : (_c(), "handled");
  }
  return _c() ? "handled" : "declined";
}
function eA(e, t) {
  if (!t) return e;
  const r = AE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== k.Paragraph ? e : e.slice(r[0].length);
}
function ff(e, t) {
  const r = O();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!gm())
      return "declined";
  } else {
    const s = hm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => eA(s, t)
  );
  pf(n ?? "");
  for (const s of i)
    _c(), pf(s);
  return "handled";
}
function tA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = en(n);
  if (!i) return !1;
  const s = At(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || w(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function hm(e) {
  const t = At(e.anchor.getNode()), r = At(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), rA() ? "removed" : "needs-plain-split");
}
function pf(e) {
  if (e === "") return;
  const t = O();
  N(t) && t.insertText(e);
}
function rA() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = At(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => w(r) && r.getMarkerSyntax() === "opening");
}
function gm() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = At(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function _c() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = gm();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = vr("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = v(t) && !w(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    ai(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (Vk(u), i.append(u));
  }
  return i.getChildren().every(w) && i.append(he(zt)), mm(i), !0;
}
function mm(e) {
  const t = e.getChildren().find((r) => !w(r));
  if (v(t)) {
    const r = t.getTextContent().startsWith(I) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (U(t)) {
    mm(t);
    return;
  }
  e.selectEnd();
}
function nA(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function iA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of ze().getChildren()) {
    if (t && n.is(t)) break;
    (gt(n) || Je(n) || ne(n)) && r.push(n.getMarker());
  }
  return r;
}
function sA(e) {
  let t = e;
  for (; U(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function oA(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (jt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && $n(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(sA(i)) && r === 0 : !1;
}
function aA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !jt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && $n(i) && t.is(i) && r === 0;
}
function cA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function lA() {
  const e = O();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = ot(t, ne), s = !n && (!i || aA(i, t, r)) ? "paragraph" : "character", o = At(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: iA(t),
    openCharMarkers: nA(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: ll(t, r),
    anchorRect: cA()
  };
}
function uA() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || w(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = PE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function dA(e, t, r) {
  xc(e, t, r), Xl(e);
}
function fA(e, t, r) {
  const n = O();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = ot(i, ne);
  if (t === "backslash" && s && oA(s, i, n.focus.offset)) {
    dA(s, e, r);
    return;
  }
  bm(e, r);
}
function pA(e, t) {
  const r = O();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function ym(e) {
  const t = O();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function hA(e, t, r, n) {
  if (N(O()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && uA(), e.kind === "closeTag") {
    ym(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && pm() !== "declined") return;
  if (e.kind === "paragraph" && rt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    fA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Me.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Rg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  hc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Tn(), reference: r });
}
function bm(e, t) {
  const r = O();
  if (!N(r)) return;
  const n = bi(t);
  if (Og()) {
    const s = O();
    if (!N(s)) return;
    const o = ot(s.anchor.getNode(), ne);
    if (!o) return;
    o.setMarker(e), n && Ql(o);
    return;
  }
  const i = r.insertParagraph();
  ne(i) && (n ? po(i, e) : i.setMarker(e));
}
function gA() {
  const [e] = ce();
  return z(() => e.registerCommand(Lc, () => !0, ft), [e]), null;
}
function mA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = SE.exec(e)?.[1];
  return r === void 0 ? !1 : !Yl(r, t);
}
function km(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !mA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ne(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== k.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ne(i))
    return [i, r];
}
function Tm(e, t) {
  const r = km(e, t.getMarker);
  return r !== void 0 && om(r, t);
}
function yA(e, t) {
  const r = O();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function xm(e) {
  const t = vE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function bA(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = xm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function kA(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      al(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function hf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = xm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  kA(e);
}
function gf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function _m(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Gt(e, r);
  const n = bA(e), i = e.getParent();
  if (ne(i)) {
    if (!Yl(t, r.getMarker))
      return Tm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Gt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), gf(s, t) && hf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? FE(t, r.getMarker) : Me.isValidMarker(s)))
      return Gt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Gt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(w).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (yA(c, st(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), gf(a, s) && hf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Gt(e, r);
}
function TA(e) {
  const t = O();
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
function xA(e, t) {
  const r = e.getTextContent();
  if (tn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Le(e.getParent()) && tl(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !TA(e)) {
    Qk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = _E.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), _m(e, n[1], t);
      return;
    }
    if (CE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Gt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = st(e.getMarker(), e.getNested());
    if (D(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = O(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = he(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function _A(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (fh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Cm(e) {
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
const Ii = Cm("v"), CA = Cm("c"), mf = /^[ \u00A0]*$/;
function yf(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === Be.getType() && n.getMode() === "normal" && ie(n, ae) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = he(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function SA(e, t) {
  const r = e.getTextContent(), n = Ft("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Ii.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Ii.valueAndRest.exec(c);
    if (l && mf.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Ii.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Ii.valueAndRest.exec(r);
  if (!s) {
    const c = Ii.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = O(), h = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Ft("v", u));
      const y = h !== void 0 && h >= l.length ? Math.min(h - l.length, d.length) : void 0;
      yf(e, d, y);
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
  if (t.pendingKeys.delete(e.getKey()), mf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Ft("v", o)), a && yf(e, a, a.length);
}
const vA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function MA(e, t) {
  const r = e.getParent();
  if (!K(r) || r.getIsCollapsed() !== !1 || !Zf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!w(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Nt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = vA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Nt(a)), !0;
}
function EA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const r = Ft("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = CA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Sm(e) {
  if (He(e)) {
    const { wrapper: t } = Po(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = Qp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ne(e)) {
    const t = [], r = Zp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = th(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Oe(e)) {
    const t = [], r = ts(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = ts(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function AA(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Sm(e).some((n) => r.is(n));
}
function PA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ne(e) && Wp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ns)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && _s(l, e) && (i || AA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Sm(e))
    l.remove(), n = !0;
  let s = !1;
  if (D(e)) {
    const l = nT(e);
    l !== void 0 && Ub(l) && (ih(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of ns)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (XT(l, e)) {
        ss(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && xh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      qo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function bf(e) {
  return v(e) && e.getType() === Be.getType() && e.getMode() === "normal" && ie(e, ae) !== "attribute";
}
function NA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = oe(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && bf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && bf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Ls(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = NA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = oe(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (w(c)) {
      e.pendingKeys.delete(a);
      const h = c.getTextContent();
      if (tn(c)) continue;
      const y = Gg.exec(h);
      c.getMarkerSyntax() === "opening" && y ? n = _m(c, y[1], e) || n : r === "idle" && uf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Tm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Gt(c, e) || n;
      continue;
    }
    const l = Mn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = PA(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && uf(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Gt(u, e) || n;
    }
  }
  return n;
}
function vm(e) {
  if (rn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return Ki(t) !== void 0;
  return !1;
}
function wA(e) {
  const t = Mn(e);
  if (!t) return !1;
  const r = vn(t.kind);
  return !qo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function kf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (gt(t) || De(t) || gh(t)) return !0;
  return !1;
}
function OA(e, t) {
  const r = e.getTextContent(), n = ie(e, ae), i = e.getParent();
  if (n !== "attribute" && Ne(i)) {
    r.replace(/^[ \u00A0]+/, "") === Ft("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (MA(e, t)) return;
  if (n === "attribute") {
    wA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && vm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !kf(e))
      t.pendingKeys.add(e.getKey());
    else if (rh(e)) t.pendingKeys.add(e.getKey());
    else if (Ne(fs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      D(a) && sh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (kf(e)) return;
  const s = O(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (ME.test(o)) {
    if (Gb(r)) {
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
function qA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : xh(e, t);
}
function RA(e) {
  const t = (r) => {
    if (w(r)) {
      tn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (rn(r)) {
      fh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of ns)
      n.settleScope !== "none" && n.ownerPredicate(r) && (_s(n, r) || qA(n, r)) && e.pendingKeys.add(r.getKey());
    if (Oe(r)) {
      r.getTextContent() !== Ft("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== Be.getType() || ie(r, ae) === "attribute") return;
      const n = r.getParent();
      if (Ne(n)) {
        r.getTextContent() !== Ft("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && vm(r) || i.includes("//") || rh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!De(r) && !gt(r)) {
      if (Le(r) && r.getChildrenSize() === 0) {
        const n = Mn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      U(r) && r.getChildren().forEach(t);
    }
  };
  ze().getChildren().forEach(t);
}
const ho = "usfm:", Mm = "usfmopen", Em = "usfmclosed";
function $A(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const IA = new RegExp(
  [ho, Mm, Em].map($A).join("|")
), LA = "\uFEFF", DA = /^usfm_(.+)$/;
function UA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function FA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function zA(e) {
  return e.startsWith(ho) ? FA(e.slice(ho.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Am(e) {
  for (const t of e.classList) {
    const r = DA.exec(t);
    if (r) return r[1];
  }
}
function KA(e) {
  const t = Am(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function jA(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(ho)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Mm) && !n.contains(Em)) && Am(r) !== void 0)
      return !0;
  }
  return !1;
}
function Pm(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(zA(e.nodeValue ?? ""));
    return;
  }
  if (!UA(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => Pm(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? KA(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function BA(e) {
  if (!IA.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !jA(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => Pm(n, !1, r)), r.join("").replaceAll(LA, "").replaceAll(I, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function VA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ie(e, ae);
  if (r === "attribute" || r === hr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (gt(o) || Ne(o) || De(o)) return;
  const n = t.startsWith(I) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? I : "") + i.replace(/ (?=[ \u00A0])/g, I).replace(new RegExp("(?<=\\u00A0) ", "g"), I);
  s !== t && e.setTextContent(s);
}
function WA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function HA(e, t) {
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
function Cc(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? BA(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(WA(s)) : ""),
    isInternal: HA(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Tf = String.raw`\\(?:\+?[${er}]+\*?|\*)`, GA = new RegExp(
  String.raw`(?<=${Tf})\u00A0|\u00A0(?=${Tf})`,
  "g"
);
function Zl(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(GA, " ").replaceAll(I, "~");
}
const Nm = new RegExp(
  String.raw`\\c(?![${er}])[ \u00A0]*[^\s\\]*`,
  "g"
), wm = new RegExp(String.raw`\\id(?![${er}])[^\n\\]*`, "g"), JA = new RegExp(
  String.raw`^(?:${Nm.source}|${wm.source})`
);
function eu(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Nm, "").replace(wm, "");
    return JA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function Sc(e) {
  if (v(e) && ie(e, ae) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Le(t)) return !0;
  return !1;
}
function YA(e) {
  return Sc(e.anchor.getNode()) || Sc(e.focus.getNode());
}
function XA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && Sc(t.getNode());
}
function QA(e, t) {
  const n = XA(e) ? t : Zl(eu(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function ZA(e, t = !1, r = () => {
}) {
  const n = Cc(e, Tn()._config.namespace);
  if (!n) return !1;
  const i = O(), s = N(i) && YA(i);
  if (!s && n.isInternal || t && N(i) && ii(i))
    return !1;
  const { text: o } = n;
  if (!o || !N(i)) return !1;
  if (e?.preventDefault(), s)
    return QA(i, o), !0;
  const a = Zl(eu(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = Tn();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(js, void 0), u === "") return;
    const f = O();
    N(f) && f.insertText(u);
  }), !0;
}
function e1(e) {
  if (e.getTextContent() !== I) return !1;
  const t = e.getParent();
  return K(t) ? !vt(e.getPreviousSibling()) : !1;
}
function t1(e, t) {
  if (t || e.getTextContent() !== I) return "";
  const r = e.getParent();
  if (!K(r) || !vt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function r1(e) {
  const t = e.getParent();
  return (K(t) ? t.getCaller() : void 0) || Ji;
}
function n1(e) {
  const t = e.getParent();
  return !t || Xr(t) === void 0;
}
function Om(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Rc(e);
  let l = "", u = !0;
  for (const d of t) {
    if (U(d) && !d.isInline()) {
      !u && n1(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, vt(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + r1(d));
    else if (v(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += e1(d) ? "" : f.replaceAll(I, " ") + t1(d, d === n);
    } else (_o(d) || gs(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(I, " "));
  }
  return l;
}
function qm(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function i1(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => gt(r) || Ne(r)
    )
  );
}
function s1(e) {
  const t = O();
  if (!N(t) || t.isCollapsed()) return;
  const r = Om(t), n = {
    "text/plain": r,
    "text/html": qm(r)
  };
  if (Fo() || i1(t)) return n;
  const i = rb(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function xf(e, t, r) {
  const n = O();
  if (!N(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !ag();
  const i = s1(t);
  return i ? Rm(e, t, n, i, r) : !1;
}
function Rm(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || nb(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const $m = Kf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function wa(e) {
  const t = e();
  return Wr(Df), Wr(np), t;
}
const _f = 8, o1 = 1e3;
function Xn(e, t) {
  const r = Oe(e) ? ["va", "vp"] : He(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    rx(vn(n), e, t.pendingKeys);
}
function a1(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Dc) || i.updateTags.has(Yi)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = oe(o);
        if (!c) continue;
        const l = Mn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = oe(o.getKey());
        c?.isAttached() && vn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Ue(
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
    e.registerMutationListener(mr, r),
    e.registerMutationListener(Nr, r),
    e.registerMutationListener(wr, r)
  );
}
function vc(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = O();
  return r ? t ? gg(r, t) : N(r) && ii(r) : !1;
}
function c1(e, t, r) {
  return Ue(
    e.registerCommand(
      cr,
      (n) => {
        if (Fo() || vc(t)) return !1;
        const i = Cc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Zl(eu(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = ff(o, t.getMarker);
          if (a === "declined" && tA(e) && (a = ff(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Qe
    ),
    e.registerCommand(
      cr,
      (n) => {
        const i = Cc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !FM()) return !1;
        const o = O();
        return t.structureProtectionMode === "protected" && N(o) && ii(o) ? !1 : (n?.preventDefault(), N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(js, void 0), a === "") return;
          const l = O();
          N(l) && l.insertText(a);
        }), !0);
      },
      we
    ),
    e.registerCommand(
      cr,
      () => (t.splitExpected.current = !0, !1),
      ft
    )
  );
}
function l1({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = ce(), o = e?.markerMode === "editable", a = !!e && Do(e), c = Z(void 0), l = Z(n);
  return z(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? ur, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), z(() => {
    if (!o || !e) return;
    const u = {
      viewOptions: e,
      getMarker: t ?? ur,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    c.current = u;
    const d = HT(s, u.pendingKeys);
    let f, h = !1, y, p = !1, m = !1, b = 0;
    const _ = () => b < _f ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${_f} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), S = (M, R = "departure") => {
      s.update(() => {
        b = wa(
          () => Ls(u, M, R)
        ) ? b + 1 : 0;
      });
    };
    let P;
    const E = () => {
      if (P !== void 0 && clearTimeout(P), P = void 0, m || u.pendingKeys.size === 0) return;
      const M = l.current ?? o1;
      M < 0 || (P = setTimeout(() => {
        P = void 0, !(m || u.pendingKeys.size === 0) && (h || _() || S(void 0, "idle"));
      }, M));
    }, j = Ue(
      s.registerNodeTransform(mr, (M) => {
        if (s.isComposing()) return;
        xA(M, u);
        const R = Mn(M);
        R && (Oe(R.owner) || K(R.owner) || Ne(R.owner) || He(R.owner) && Po(R.owner).wrapper === void 0) && Xn(R.owner, u);
      }),
      s.registerNodeTransform(pt, (M) => {
        s.isComposing() || (SA(M, u), Xn(M, u));
      }),
      s.registerNodeTransform(Ot, (M) => {
        s.isComposing() || (EA(M), M.isAttached() && Xn(M, u));
      }),
      s.registerNodeTransform(rt, (M) => {
        s.isComposing() || JE(M, u);
      }),
      s.registerNodeTransform(me, (M) => {
        if (!s.isComposing()) {
          ZE(M, u);
          for (const R of ["separator", "char"])
            M.isAttached() && _s(vn(R), M) && u.pendingKeys.add(M.getKey());
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
      s.registerNodeTransform(Xt, (M) => {
        s.isComposing() || Xn(M, u);
      }),
      s.registerNodeTransform(wr, (M) => {
        if (s.isComposing()) return;
        const R = Mn(M);
        R && (He(R.owner) || Oe(R.owner) || K(R.owner) || Ne(R.owner)) && Xn(R.owner, u);
      }),
      s.registerNodeTransform(Me, (M) => {
        s.isComposing() || (QE(M, u), Xn(M, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Rr, (M) => {
        s.isComposing() || _A(M, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(Be, (M) => {
        s.isComposing() || OA(M, u);
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
        (M) => {
          s.getEditorState().read(() => {
            for (const [R, $] of M) {
              if ($ === "destroyed") continue;
              const re = oe(R);
              !re || ie(re, ae) !== "attribute" || Le(re.getParent()) || s.getElementByKey(R)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a1(s, u),
      ...a ? [
        s.registerNodeTransform(Be, (M) => {
          s.isComposing() || VA(M);
        }),
        s.registerCommand(
          ys,
          (M) => xf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            M && typeof M == "object" && "clipboardData" in M ? M : null,
            s,
            !1
          ),
          we
        ),
        s.registerCommand(
          Vr,
          (M) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            xf(
              M && typeof M == "object" && "clipboardData" in M ? M : null,
              s,
              !0
            )
          ),
          we
        ),
        s.registerCommand(
          cr,
          (M) => ZA(
            // Same jsdom-safe duck-check as COPY above.
            M && typeof M == "object" && "clipboardData" in M ? M : null,
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
        Vr,
        () => (!vc(u) && !Fo() && Tc(u), !1),
        Qe
      ),
      s.registerCommand(
        To,
        () => (s.isComposing() || WE(u), !1),
        ti
      ),
      s.registerCommand(
        Gi,
        () => (h = !1, b = 0, E(), !1),
        ft
      ),
      s.registerCommand(
        pr,
        (M) => (h = !1, b = 0, E(), (M.key === "Backspace" || M.key === "Delete") && !vc(u, dg(M)) && (Tc(u), VE(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !M.ctrlKey || M.altKey || M.shiftKey || M.metaKey || M.key !== " " && M.code !== "Space" || !UM() ? !1 : (M.preventDefault(), !0)),
        we
      ),
      s.registerCommand(
        Ff,
        (M) => {
          const R = pm();
          R === "needs-plain-split" && s.dispatchCommand(js, void 0);
          const $ = R !== "declined" || nx();
          return $ && M?.preventDefault(), Ls(u), $;
        },
        we
      ),
      s.registerCommand(
        js,
        () => (u.splitExpected.current = !0, Og()),
        we
      ),
      c1(s, u, a),
      s.registerCommand(
        $m,
        () => {
          if (h) return !0;
          const M = s.getRootElement(), R = M?.ownerDocument, $ = !!M && !!R && R.hasFocus() && M.contains(R.activeElement);
          let re;
          if ($) {
            const W = O();
            re = N(W) ? W.focus.key : f;
          }
          return wa(() => Ls(u, re)), !0;
        },
        ft
      ),
      s.registerCommand(
        Ic,
        () => {
          if (h) return !1;
          const M = O(), R = N(M) ? M.focus.key : f;
          return wa(() => Ls(u, R)), !1;
        },
        ft
      ),
      s.registerUpdateListener(({ editorState: M, tags: R }) => {
        u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const $ = M.read(() => {
          const W = O();
          return N(W) ? W.focus.key : void 0;
        }), re = y;
        if ($ !== void 0 && (y = $), R.has(Dc)) {
          u.pendingKeys.clear(), M.read(() => RA(u)), h = !0, $ !== void 0 && (f = $);
          return;
        }
        if (R.has(Hr)) {
          $ !== void 0 && $ !== re && (h = !0);
          return;
        }
        h || ($ !== void 0 && (f = $), E(), !(p || $ === void 0) && [...u.pendingKeys].some((W) => W !== $) && (p = !0, queueMicrotask(() => {
          p = !1, !m && (_() || S(f));
        })));
      })
    );
    return () => {
      m = !0, P !== void 0 && clearTimeout(P), P = void 0, d(), j(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const u1 = ["status_unknown", "status_invalid"], Im = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, d1 = Object.values(Im);
function f1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Im[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Cf(e) {
  e.classList.remove(...u1), e.removeAttribute("aria-description"), d1.includes(e.title) && e.removeAttribute("title");
}
function p1(e, t, r, n) {
  const i = (a) => a.read(() => ze().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const u = oe(l)?.getTopLevelElement();
        u && a.add(u.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function h1(e) {
  const t = oe(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : w(t) && t.getParent()?.getKey() === r.getKey();
}
function g1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ce(), i = e?.markerMode === "editable";
  return z(() => {
    if (!i) return;
    const s = t ?? eo;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = dE(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, h] of o) {
            if (d.has(f) || h1(f)) continue;
            const y = oe(f)?.getTopLevelElement();
            !y || l.has(y.getKey()) || d.set(f, h);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const h = n.getElementByKey(f);
          h && Cf(h);
        }
        for (const [f, h] of d) {
          const y = n.getElementByKey(f);
          y && f1(y, h);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          p1(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && Cf(u);
      }
    };
  }, [n, i, t, r]), null;
}
function m1(e, t) {
  const r = vl(_l), n = yl();
  if (!r || !n?.end) return;
  const i = Fs.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = Zy({
    namespace: "markers-view-copy",
    nodes: [tt, ...kl],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    Er.serializeEditorState(i, r)
  ).read(
    () => {
      const a = Io(n);
      return a ? Om(a) : void 0;
    },
    { editor: s }
  );
}
function y1({ viewOptions: e }) {
  const [t] = ce();
  return z(() => {
    const r = (n, i) => {
      const s = O();
      if (!N(s) || s.isCollapsed()) return !1;
      const o = m1(t, e);
      return o === void 0 ? !1 : Rm(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        n && typeof n == "object" && "clipboardData" in n ? n : null,
        t,
        s,
        { "text/plain": o, "text/html": qm(o) },
        i
      );
    };
    return Ue(
      t.registerCommand(ys, (n) => r(n, !1), we),
      t.registerCommand(Vr, (n) => r(n, !0), we)
    );
  }, [t, e]), null;
}
function Lm(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Ar(o);
    a && U(s) && Lm(s.getChildren(), a, r);
  }
}
function Dm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Ar(o);
      if (a) {
        n(a);
        continue;
      }
      const c = di(o);
      if (c === void 0 || !c.includes(it)) continue;
      const l = c.split(it), u = [];
      for (let d = 0; d < l.length; d++) {
        const f = l[d];
        if (d > 0 && u.push(...t[r++] ?? []), f.length > 0) {
          const h = {
            ...o,
            text: f
          };
          u.push(h);
        }
      }
      i.splice(s, 1, ...u), s += u.length - 1;
    }
  };
  n(e);
}
function Um(e, t, r) {
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
function Fm(e, t) {
  const r = [];
  for (const n of e)
    Qg(n, t) || ((ne(n) || D(n)) && r.push(n.getMarker()), U(n) && r.push(...Fm(n.getChildren(), t)));
  return r;
}
function zm(e) {
  const t = [];
  for (const r of e) {
    const n = Wl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Ar(r);
    i && t.push(...zm(i));
  }
  return t;
}
function tu(e, t, r) {
  const n = Fm(e, r), i = zm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function b1(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = O();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = oe(t.key), i = t.offset;
  else
    return;
  if (!(!v(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function ru(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function k1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const m of e) {
    const b = Hl(m, o, s);
    if (!b) return;
    c.text.length > 0 && (c.text += " ");
    const _ = c.text.length;
    b.spans.forEach(
      (S) => c.spans.push({ ...S, start: S.start + _, end: S.end + _ })
    ), c.sentinels.push(...b.sentinels), c.text += b.text;
  }
  const l = i ? ru(c, i) : c.text, u = Pr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Dn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Er.serializeEditorState(
    { type: Cr, version: _r, content: u },
    s
  ).root.children;
  if (Bo(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Um(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (_i(d, o) === xi(e, o) && tu(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Dm(d, f);
  const y = T1(e), p = Km(d);
  for (let m = 0; m < y.length && m < p.length; m++)
    y[m].sid !== void 0 && p[m].number === y[m].number && (p[m].sid = y[m].sid);
  return d;
}
function T1(e) {
  const t = [], r = (n) => {
    Oe(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : U(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Km(e) {
  const t = [];
  for (const r of e) {
    $p(r) && t.push(r);
    const n = Ar(r);
    n && t.push(...Km(n));
  }
  return t;
}
function x1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = am(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? ru(l, i) : l.text, f = Pr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Dn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [h] = f;
  if (f.length !== 1 || typeof h != "object" || h.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const y = h.content ?? [], p = cm(y), m = e.getCategory() !== p, b = Yg(e, y, p, s);
  if (b.failure !== void 0) {
    b.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : b.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = b.children;
  if (Bo(_) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const S = Um(l, t, n);
  if (!S) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (_i(_, o) === xi(u, o) && tu(u, _, o)) {
    if (m)
      return { rebuilt: void 0, contentNodes: u, category: p, categoryChanged: m };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Dm(_, S), { rebuilt: _, contentNodes: u, category: p, categoryChanged: m };
}
function Sf(e) {
  return e.$?.textType;
}
function _1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Sf(e) === Sf(t);
}
function C1(e) {
  const t = [];
  for (const r of e) {
    const n = oe(r);
    n?.isAttached() && De(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function S1(e) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (tn(e)) return;
  const n = Gg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function vf(e, t) {
  const r = e;
  r.marker = t, r.text = em(t, r.markerSyntax, r.nested);
}
function v1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Me.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && vf(a.node, s);
  const c = n.getChildren().filter(w).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && vf(l.node, s);
}
function M1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = dm(e, i, n);
  if (!o) return;
  const a = r ? ru(o, r) : o.text, c = Pr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Dn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Er.serializeEditorState(
    { type: Cr, version: _r, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Wo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && _i(u, i) === xi(d, i) && tu(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function E1(e, t, r, n, i) {
  const s = b1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (m) => {
    K(m) ? c.set(m.getKey(), m) : Ne(m) ? l.set(m.getKey(), m) : o.set(m.getKey(), [m]);
  };
  for (const m of t) {
    const b = oe(m);
    if (!b?.isAttached()) continue;
    const _ = fs(b);
    if (_) {
      if (d(_), w(b)) {
        const S = km(b, r.getMarker);
        S && a.push(S);
      }
      if (K(_)) {
        const S = S1(b);
        S && u.set(_.getKey(), S);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const m of a)
    m.some((b) => f.has(b.getKey())) || (m.forEach((b) => {
      f.add(b.getKey()), o.delete(b.getKey());
    }), o.set(m[0].getKey(), m));
  if (s) {
    const m = fs(s.node);
    m && d(m);
  }
  const h = C1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && h.length === 0)
    return;
  const y = new Set(h.map((m) => m.getKey())), p = /* @__PURE__ */ new Map();
  Lm(ze().getChildren(), e.root.children, p);
  for (const m of u.values()) v1(m, p);
  for (const m of c.values()) {
    const b = p.get(m.getKey()), _ = b ? Ar(b.node) : void 0;
    if (!b || !_) continue;
    const S = x1(m, p, r, y, s);
    if (!S) continue;
    if (S.categoryChanged) {
      const j = b.node;
      S.category === void 0 ? delete j.category : j.category = S.category;
    }
    if (!S.rebuilt) continue;
    const P = p.get(S.contentNodes[0].getKey());
    if (!P) continue;
    const E = _.indexOf(P.node);
    E < 0 || _.splice(E, S.contentNodes.length, ...S.rebuilt);
  }
  for (const m of o.values()) {
    const b = p.get(m[0].getKey());
    if (!b) continue;
    const _ = k1(m, p, r, y, s);
    if (!_) continue;
    const S = b.siblings.indexOf(b.node);
    S < 0 || b.siblings.splice(S, m.length, ..._);
  }
  for (const m of l.values()) {
    const b = p.get(m.getKey());
    if (!b) continue;
    const _ = 1 + Wo(m).length, S = M1(m, r, s);
    if (!S) continue;
    const P = b.siblings.indexOf(b.node);
    P < 0 || b.siblings.splice(P, _, ...S);
  }
  for (const m of h) {
    const b = p.get(m.getKey());
    if (!b) continue;
    const _ = b.siblings.indexOf(b.node);
    if (_ < 0) continue;
    b.siblings.splice(_, 1);
    const S = b.siblings[_ - 1], P = b.siblings[_], E = S && di(S), j = P && di(P);
    S && P && E !== void 0 && j !== void 0 && _1(S, P) && (S.text = E + j, b.siblings.splice(_, 1));
  }
  return Sg(e, r.viewOptions);
}
function A1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ce(), n = bi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return z(() => {
    if (n)
      return r.registerNodeTransform(
        rt,
        (i) => P1(i, t)
      );
  }, [r, n, t]), null;
}
function P1(e, t) {
  e.getMarker() !== lr && (e.isEmpty() || jt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${lr}" (key ${e.getKey()})`
  ), e.setMarker(lr)));
}
function N1({
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
  return z(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, go(s, e) || w1(i, r, e);
  }, [r, e, t]), z(
    () => r.registerMutationListener(
      Kt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Mc(r);
        Mf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ds(s) === Ds(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), z(() => {
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
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((h) => !u.has(h));
      f && (Mc(r) || Mf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((h) => !d.has(h)),
        isSameDocumentReload: Ds(a) === Ds(c)
      }));
    };
    return Ue(
      ...[Ot, gr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), z(
    () => r.registerCommand(
      dr,
      () => {
        const i = n.current;
        return i.phase === "idle" && $1(i, q1()), !1;
      },
      ft
    ),
    [r]
  ), z(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(dr, void 0));
    };
    return Ue(
      r.registerMutationListener(St, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), z(() => {
    const i = () => U1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function w1(e, t, r) {
  if (O1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Mc(t);
  (!n || n === r.book) && t.update(() => jm(r.chapterNum, r.verseNum), {
    tag: Hr
  });
}
function O1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => go(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function q1() {
  const e = O();
  if (Dt(e)) return;
  const t = Xc(e);
  if (!t) return;
  const r = nu(), n = Dp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = fl(t, e), { verseNum: o, verse: a } = Mx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Mc(e) {
  return e.getEditorState().read(() => nu()?.getCode() || void 0);
}
function nu() {
  return ze().getChildren().find(gt);
}
function Mf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Oa(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Oa(e, t), e.phase = "navigating") : i && Oa(e, t), r && r !== e.scrRef.book && Wm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Oa(e, t) {
  queueMicrotask(() => {
    t.update(
      () => jm(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Hr }
    );
  });
}
function jm(e, t) {
  const r = Xc(O()), n = pl(r)?.getNumber(), i = Dp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Bp(n) ? Vm(t, n) : parseInt(n, 10) === t))
    return;
  const o = ze().getChildren(), a = Lp(o, e);
  if (!a) return;
  const c = Fk(o, a), l = qk(c, !0);
  Uk(c, l);
  let u;
  try {
    u = xx(c, t);
  } catch {
    return;
  }
  u && (ne(u) ? !v(u.getFirstChild()) && Ti(u) || Bt(u, 0) : R1(u));
}
function R1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || pe(n)) {
    Bt(t, r);
    return;
  }
  const i = Oo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = U(n) && !K(n) ? Bm(n) : void 0;
  s ? s.select(0, 0) : Bt(t, r);
}
function Bm(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (U(t) && !K(t)) return Bm(t);
}
function Ds(e) {
  return e.read(() => {
    const t = ze().getChildren().find(Je);
    return `${nu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function $1(e, t) {
  e.phase !== "navigating" && t && (I1(t, e.scrRef) || Wm(e, L1(t, e.scrRef)));
}
function I1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Vm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Vm(e, t) {
  try {
    return Qc(e, t);
  } catch {
    return !1;
  }
}
function L1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const D1 = 8;
function Wm(e, t) {
  return go(t, e.scrRef) || e.pendingEchoes.some((r) => go(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > D1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function go(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function U1(e) {
  e.phase = "idle";
}
function F1(e) {
  return gt(e) ? `${e.__code}` : Ne(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : bs(e) ? `${e.__marker} "${e.__number}"` : vt(e) ? `${e.__caller}` : Ln(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ne(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${z1(e)}` : _e(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Oe(e) ? `${e.__marker} "${e.__number}"` : "";
}
function z1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[ms]) : "";
}
function K1() {
  const [e] = ce();
  return /* @__PURE__ */ C(
    ib,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: F1,
      editor: e
    }
  );
}
const Hm = Rf(null), Ef = 4;
function j1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = $f(Hm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return z(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ C("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function B1({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = de(), [s, o] = de(), a = ge(
    (u) => {
      i((d) => d ? [...d, u] : [u]);
    },
    [i]
  ), c = (u) => {
    if (!n) return;
    const d = u.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(d) && u.preventDefault(), d === "Escape" || d === "Tab" ? r() : d === "ArrowUp" ? o((f) => {
      if (!f) return n[0];
      const h = n.indexOf(f) - 1;
      return n[h === -1 ? n.length - 1 : h];
    }) : d === "ArrowDown" && o((f) => f ? n[n.indexOf(f) + 1] : n[0]);
  }, l = je(() => ({ registerItem: a }), [a]);
  return z(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ C(Hm.Provider, { value: l, children: /* @__PURE__ */ C("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function V1({
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
  return z(() => {
    const f = c.current, h = a.current;
    if (l && f !== null && h !== null) {
      const { top: y, left: p } = f.getBoundingClientRect();
      h.style.top = `${y + f.offsetHeight + Ef}px`, h.style.left = `${Math.min(p, window.innerWidth - h.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), z(() => {
    const f = c.current;
    if (f !== null && l) {
      const h = (y) => {
        const p = y.target;
        o && a.current && a.current.contains(p) || f.contains(p) || u(!1);
      };
      return document.addEventListener("click", h), () => {
        document.removeEventListener("click", h);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), z(() => {
    const f = () => {
      if (l) {
        const h = c.current, y = a.current;
        if (h !== null && y !== null) {
          const { top: p } = h.getBoundingClientRect(), m = p + h.offsetHeight + Ef;
          m !== y.getBoundingClientRect().top && (y.style.top = `${m}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Te(bn, { children: [
    /* @__PURE__ */ Te(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => u(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ C("span", { className: i }),
          t && /* @__PURE__ */ C("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ C("i", { className: "chevron-down" })
        ]
      }
    ),
    l && yn(
      /* @__PURE__ */ C(B1, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const Ec = {
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
}, Ac = {
  ...Ec,
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
function W1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ C(
    V1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + H1(t),
      buttonLabel: G1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Ec).map((n) => /* @__PURE__ */ Te(
        j1,
        {
          className: "item block-marker " + J1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ C("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ C("span", { className: "text usfm_" + n, children: Ec[n] })
          ]
        },
        n
      ))
    }
  );
}
function H1(e) {
  return e && e in Ac ? e : "ban";
}
function G1(e) {
  return e && e in Ac ? Ac[e] : "No Style";
}
function J1(e) {
  return e ? "active dropdown-item-active" : "";
}
function Af() {
  return /* @__PURE__ */ C("div", { className: "divider" });
}
const Y1 = On(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ce(), [o, a] = de(s), [c, l] = de(), [u, d] = de(!1), [f, h] = de(!1), y = ge(
    ({
      canUndo: p,
      canRedo: m,
      blockMarker: b,
      contextMarker: _
    }) => {
      d(p), h(m), l(b), n?.({
        canUndo: p,
        canRedo: m,
        blockMarker: b,
        contextMarker: _
      });
    },
    [n]
  );
  return z(() => s.registerCommand(
    dr,
    (p, m) => (a(m), !1),
    Qe
  ), [s]), /* @__PURE__ */ Te(bn, { children: [
    /* @__PURE__ */ C(ug, { onStateChange: y }),
    /* @__PURE__ */ Te("div", { className: "toolbar", children: [
      /* @__PURE__ */ C(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(jf, void 0);
          },
          title: Bs ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ C("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ C(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(Bf, void 0);
          },
          title: Bs ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ C("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ C(Af, {}),
      o === s && /* @__PURE__ */ Te(bn, { children: [
        /* @__PURE__ */ C(
          W1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ C(Af, {})
      ] }),
      /* @__PURE__ */ C("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), X1 = Lo(), Q1 = {}, Z1 = {};
function eP() {
  return /* @__PURE__ */ C("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const Gm = On(function({
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
  const f = Z(null), h = Z(null), y = Z(null), p = Z(t), m = Z(void 0), b = Z(void 0), _ = Z(void 0), S = Z(void 0), P = Z(!1), [E, j] = de(t), [M, R] = de(0), [$, re] = de(), {
    isReadonly: W = !1,
    structureProtectionMode: Ae = "off",
    hasExternalUI: ee = !1,
    hasSpellCheck: Re = !1,
    textDirection: be = "ltr",
    markerMenuTrigger: tr = "\\",
    view: Ke,
    nodes: $r,
    debug: Ir = !1,
    contextMenu: sn,
    styleInfo: Y,
    markerSettleDelayMs: A
  } = c ?? Z1, H = Ke ?? X1, ue = cs(H) && (H.markerMode !== "hidden" || !H.hasSpacing || H.hasGutterParaMarkers || H.hasActiveTextFocusBox) ? {
    ...H,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : H, Se = Z(ue);
  Rt(Se.current, ue) || (Se.current = ue);
  const X = Se.current, Ce = je(() => $r ?? Q1, [$r]), yr = je(() => sn, [sn]), qt = je(
    () => fx(Y ?? eo),
    [Y]
  ), on = Z(l);
  Rt(on.current, l) || (on.current = l);
  const We = on.current, le = cs(X), mt = W || le, xe = ue !== H;
  z(() => {
    le && !W && We?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), xe && We?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), X?.markerMode === "visible" && !W && We?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [le, W, xe, We, X?.markerMode]);
  const br = Z(null), Pe = je(() => {
    if (X.markerMode !== "editable") return;
    const q = Y ?? eo;
    return {
      getContext: () => br.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (B) => kE(
        q,
        B,
        Ce.extraValidMarkers
      ),
      getEnterItems: (B) => TE(
        q,
        B,
        Ce.extraValidMarkers
      ),
      apply: (B, G) => {
        const Q = br.current;
        Q && (G.trigger === "enter" ? Q.splitParagraphWithMarker(B.marker) : Q.applyMarkerMenuSelection(B, G));
      },
      commitTypedCloser: (B) => {
        br.current?.commitTypedCloser(B);
      }
    };
  }, [X, Y, Ce.extraValidMarkers]), kr = (q) => {
    P.current || (P.current = !0, on.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ci = (q) => {
    if (le)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, yt = (q) => {
    if (Ci(q), mt) throw new Error(`Cannot ${q} in readonly mode`);
  }, Ss = je(
    () => ({
      namespace: "platformEditor",
      theme: { ...Kg, showCharMarkerTitles: X.showCharMarkerTitles },
      editable: !mt,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [tt, ...le ? S_ : kl]
    }),
    [mt, le, X.showCharMarkerTitles]
  );
  Fs.initialize(We);
  function Tr(q) {
    if (q !== void 0 && !zM(q, Ce.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const Un = ge(() => {
    const q = f.current;
    if (!q) return p.current;
    const B = Hu(q), G = b.current;
    if ((!B || B.size === 0) && !G) return p.current;
    const Q = q.getEditorState(), ve = Q.toJSON();
    return Q.read(
      () => E1(
        ve,
        B ?? /* @__PURE__ */ new Set(),
        { viewOptions: X, getMarker: qt, logger: We },
        G,
        _.current
      )
    ) ?? p.current;
  }, [X, qt, We]), Si = {
    focus() {
      f.current?.focus();
    },
    isFocused() {
      const q = f.current?.getRootElement();
      return !!q && q.ownerDocument.activeElement === q;
    },
    undo() {
      f.current?.dispatchCommand(jf, void 0);
    },
    redo() {
      f.current?.dispatchCommand(Bf, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      yt("cut"), f.current && Nl(f.current);
    },
    copy() {
      f.current && Pl(f.current);
    },
    paste() {
      yt("paste"), f.current && wl(f.current);
    },
    pastePlainText() {
      yt("paste as plain text"), f.current && Ol(f.current);
    },
    getUsj() {
      return Un();
    },
    commitPendingMarkerEdits() {
      f.current?.update(
        () => {
          f.current?.dispatchCommand($m, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(q) {
      if (!q) {
        b.current = void 0;
        return;
      }
      const B = f.current?.getEditorState().read(() => {
        const G = O();
        return N(G) && G.isCollapsed() ? G.focus.key : void 0;
      });
      b.current = { input: q, nodeKey: B ?? _.current?.key };
    },
    setUsj(q) {
      if (!Rt(p.current, q)) {
        p.current = q, b.current = void 0;
        const B = Rt(E, q);
        j(q), B && R((G) => G + 1);
      }
    },
    applyUpdate(q, B = "remote") {
      if (le && B === "remote") {
        on.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Ci("apply an update"), f.current?.update(
        () => {
          B === "remote" && Wr(Yi), X_(q, X, Ce, We);
        },
        { discrete: !0 }
      );
      const G = f.current?.getEditorState();
      if (!G) return;
      const Q = Fs.deserializeEditorState(G, X);
      if (Q) {
        const ve = !Rt(p.current, Q);
        if (ve && (p.current = Q), ve || !Rt(E, Q)) {
          const Xe = sd(q, G, "apply");
          S.current = Q, s?.(Q, q, B, Xe);
        }
      }
    },
    replaceEmbedUpdate(q, B) {
      const G = f.current?.read(() => Dx(q, B));
      G ? this.applyUpdate(G) : l?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (le) {
        kr("get the selection");
        return;
      }
      return f.current?.read(yl);
    },
    getSelectedParaMarker() {
      return f.current?.getEditorState().read(() => {
        const q = Dt(O())?.getParent();
        return ne(q) ? q.getMarker() : void 0;
      });
    },
    setSelection(q) {
      if (le) {
        kr("set the selection");
        return;
      }
      f.current?.update(() => {
        const B = Io(q);
        B !== void 0 && (kn(B), Wr(rp));
      });
    },
    setAnnotation(q, B, G, Q, ve) {
      if (le) {
        kr("set an annotation");
        return;
      }
      let Xe, Mt, an, vi;
      typeof Q == "function" || Q === void 0 ? (Xe = Q, Mt = ve) : (Xe = Q.onClick, Mt = Q.onRemove, an = Q.onMouseEnter, vi = Q.onMouseLeave), h.current?.setAnnotation(
        q,
        $u(B),
        G,
        Xe,
        Mt,
        an,
        vi
      );
    },
    removeAnnotation(q, B) {
      h.current?.removeAnnotation($u(q), B);
    },
    formatPara(q) {
      yt("format a paragraph"), f.current?.update(
        () => {
          const B = O(), G = Dt(B)?.getParent();
          if (ne(G)) {
            xc(G, q, X);
            return;
          }
          if (!N(B)) {
            l?.warn(
              `formatPara refused: no range selection or selected paragraph marker to retag with "${q}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          ab(B, () => es(q));
          const Q = O();
          if (!N(Q)) return;
          const ve = /* @__PURE__ */ new Set();
          Q.getNodes().forEach((Xe) => {
            const Mt = Xe.getTopLevelElement();
            ne(Mt) && ve.add(Mt);
          }), ve.forEach((Xe) => xc(Xe, q, X));
        },
        { discrete: !0 }
      );
    },
    getElementByKey(q) {
      return f.current?.read(
        () => f.current?.getElementByKey(q) ?? void 0
      );
    },
    removeCharacterMarker(q) {
      if (mt) throw new Error("Cannot remove character marker in readonly mode");
      Tr(q);
      let B = !1;
      return f.current?.update(
        () => {
          const G = O();
          N(G) && (B = Ig(G, q, X));
        },
        { discrete: !0 }
      ), B;
    },
    replaceCharacterMarker(q, B) {
      if (mt) throw new Error("Cannot replace character marker in readonly mode");
      Tr(q), Tr(B);
      let G = !1;
      return f.current?.update(
        () => {
          const Q = O();
          N(Q) && (G = ZM(Q, q, B));
        },
        { discrete: !0 }
      ), G;
    },
    extendCharacterMarker(q, B) {
      if (mt) throw new Error("Cannot extend character marker in readonly mode");
      Tr(q), B?.forEach(
        (Q) => Tr(Q)
      );
      let G = !1;
      return f.current?.update(
        () => {
          const Q = O();
          N(Q) && (G = eE(
            Q,
            q,
            B,
            X
          ));
        },
        { discrete: !0 }
      ), G;
    },
    insertMarker(q) {
      if (mt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!pc(q, Ce.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const B = hc(
        q,
        m,
        X,
        Ce,
        We,
        void 0,
        Y
      );
      return B.action({ editor: f.current, reference: r }), B.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!W)
        return f.current?.getEditorState().read(() => lA());
    },
    applyMarkerMenuSelection(q, B) {
      if (W) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (q.kind !== "closeTag" && !pc(q.marker, Ce.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let G;
      return f.current.update(() => {
        G = hA(q, B, r, {
          expandedNoteKeyRef: m,
          viewOptions: X,
          nodeOptions: Ce,
          logger: l,
          styleInfo: Y
        });
      }), G;
    },
    splitParagraphWithMarker(q) {
      if (W) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        bm(q, X);
      });
    },
    commitTypedMarker(q, B) {
      if (W) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let G = !1;
      return f.current.update(() => {
        G = pA(q, B), G || l?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), G;
    },
    commitTypedCloser(q) {
      if (W) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let B = !1;
      return f.current.update(() => {
        B = ym(q), B || l?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), B;
    },
    insertNote(q, B, G) {
      yt("insert a note"), f.current?.update(
        () => {
          const Q = Lh(
            q,
            B,
            G,
            r,
            X,
            Ce,
            We
          );
          Q && !Q.getIsCollapsed() && (m.current = Q.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      f.current?.update(() => {
        const B = dd(q);
        B && (x_(B, X), B.getIsCollapsed() || (m.current = B.getKey()));
      });
    },
    getNoteOps(q) {
      return f.current?.read(() => {
        const B = dd(q);
        if (B)
          return gl(B);
      });
    },
    get toolbarEndRef() {
      return y;
    }
  };
  br.current = Si, Nc(d, () => Si), z(() => {
    const q = f.current;
    if (q)
      return q.registerUpdateListener(({ editorState: B }) => {
        B.read(() => {
          const G = O();
          if (!N(G) || !G.isCollapsed()) return;
          const Q = G.focus.getNode();
          v(Q) && (_.current = { key: Q.getKey(), offset: G.focus.offset });
        });
      });
  }, []);
  const rr = ge(
    (q, B, G, Q) => {
      if (le) return;
      const ve = Fs.deserializeEditorState(q, X);
      if (ve) {
        const Xe = !Rt(p.current, ve);
        if (Xe && (p.current = ve), Xe || !Rt(E, ve)) {
          const Mt = sd(Q, q);
          S.current = ve, s?.(ve, Q, "local", Mt);
        }
      }
    },
    [E, s, X, le]
  );
  z(() => {
    const q = f.current;
    if (!(!q || !s))
      return q.registerUpdateListener(({ tags: B, dirtyElements: G, dirtyLeaves: Q }) => {
        !B.has(Dc) && (G.size === 0 && Q.size === 0 || B.has(Yi) || !Hu(q)?.size) || queueMicrotask(() => {
          const ve = Un();
          !ve || Rt(S.current, ve) || (S.current = ve, s(ve, void 0, "local", void 0));
        });
      });
  }, [s, Un]);
  const Vt = ge(
    (q) => {
      re(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Te(Hf, { initialConfig: Ss, children: [
      /* @__PURE__ */ C(oS, { isEditable: !mt }),
      /* @__PURE__ */ Te("div", { className: "editor-container", children: [
        ee ? /* @__PURE__ */ C(ug, { onStateChange: Vt }) : /* @__PURE__ */ C(
          "div",
          {
            className: "editor-toolbar-container" + (mt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ C(
              Y1,
              {
                ref: y,
                editorRef: br,
                isReadonly: mt,
                onStateChange: Vt
              }
            )
          }
        ),
        /* @__PURE__ */ Te("div", { className: "editor-inner", children: [
          /* @__PURE__ */ C(Jf, { editorRef: f }),
          /* @__PURE__ */ C(
            ob,
            {
              contentEditable: /* @__PURE__ */ C(
                Gf,
                {
                  className: `editor-input usfm ${Y_(X).join(" ")}${X.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${X.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Re
                }
              ),
              placeholder: /* @__PURE__ */ C(eP, {}),
              ErrorBoundary: Yf
            }
          ),
          ee && /* @__PURE__ */ C(sS, {}),
          /* @__PURE__ */ C(Xf, {}),
          r && n && /* @__PURE__ */ C(N1, { scrRef: r, onScrRefChange: n }),
          r && !ee && /* @__PURE__ */ C(
            Uv,
            {
              trigger: tr,
              scrRef: r,
              contextMarker: $,
              getMarkerAction: (q) => hc(
                q,
                m,
                X,
                Ce,
                We,
                void 0,
                Y
              ),
              editableHarness: Pe
            }
          ),
          /* @__PURE__ */ C(
            lS,
            {
              scripture: E,
              scriptureRef: p,
              nodeOptions: Ce,
              editorAdaptor: Er,
              viewOptions: X,
              logger: We
            },
            M
          ),
          /* @__PURE__ */ C(PS, { onChange: i }),
          /* @__PURE__ */ C(
            B_,
            {
              onChange: rr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Ab
            }
          ),
          /* @__PURE__ */ C(sE, { viewOptions: X }),
          /* @__PURE__ */ C(K_, { ref: h, logger: We }),
          /* @__PURE__ */ C(vC, { viewOptions: X }),
          /* @__PURE__ */ C(KC, {}),
          /* @__PURE__ */ C(GC, {}),
          X?.markerMode !== "editable" && /* @__PURE__ */ C(JC, { logger: We }),
          /* @__PURE__ */ C(ZC, { options: yr }),
          /* @__PURE__ */ C(iS, {}),
          /* @__PURE__ */ C(cS, {}),
          /* @__PURE__ */ C(gA, {}),
          /* @__PURE__ */ C(
            l1,
            {
              viewOptions: X,
              getMarker: qt,
              logger: We,
              markerSettleDelayMs: A,
              structureProtectionMode: Ae
            }
          ),
          X?.markerMode === "visible" && /* @__PURE__ */ C(y1, { viewOptions: X }),
          /* @__PURE__ */ C(
            g1,
            {
              styleInfo: Y,
              viewOptions: X,
              logger: We
            }
          ),
          /* @__PURE__ */ C(
            uS,
            {
              expandedNoteKeyRef: m,
              nodeOptions: Ce,
              viewOptions: X,
              logger: We
            }
          ),
          /* @__PURE__ */ C(AS, {}),
          /* @__PURE__ */ C(xC, {}),
          /* @__PURE__ */ C(gC, {}),
          /* @__PURE__ */ C(A1, { viewOptions: X, logger: We }),
          /* @__PURE__ */ C(OS, { onParaMarkerMenuRequest: a }),
          /* @__PURE__ */ C(zS, {}),
          /* @__PURE__ */ C(Mv, { structureProtectionMode: Ae }),
          /* @__PURE__ */ C(Ev, { textDirection: be }),
          /* @__PURE__ */ C(Pv, {}),
          /* @__PURE__ */ C(Lv, {}),
          u
        ] }),
        Ir && /* @__PURE__ */ C(K1, {})
      ] })
    ] }, X.verseLayout ?? "inline")
  );
}), cN = On(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ C(Gm, { ref: r, ...i });
});
function Jm() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function mo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Jm() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Ym(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Jm() : r,
    quote: e,
    type: "thread"
  };
}
function Pf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function tP(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function qa(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class rP {
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
    this._comments = t, qa(this);
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
          const c = Pf(a);
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
    this._comments = i, qa(this);
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
          const c = Pf(a);
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
    return this._comments = n, qa(this), t.type === "comment" ? {
      index: s,
      markedComment: tP(t)
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
    return t !== null ? t.doc.get("comments", _u) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Cu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new _u();
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
      _b,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      ft
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Cb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const h of d) {
              const y = h.insert, p = h.retain, m = h.delete, b = u.parent, _ = u === r ? void 0 : b instanceof Cu && this._comments.find((S) => S.id === b.get("id"));
              if (Array.isArray(y)) {
                const S = f;
                y.slice().reverse().forEach((P) => {
                  const E = P.get("id"), M = P.get("type") === "thread" ? Ym(
                    P.get("quote"),
                    P.get("comments").toArray().map(
                      (R) => mo(
                        R.get("content"),
                        R.get("author"),
                        R.get("id"),
                        R.get("timeStamp"),
                        R.get("deleted")
                      )
                    ),
                    E
                  ) : mo(
                    P.get("content"),
                    P.get("author"),
                    E,
                    P.get("timeStamp"),
                    P.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(M, _, S);
                  });
                });
              } else if (typeof p == "number")
                f += p;
              else if (typeof m == "number")
                for (let S = 0; S < m; S++) {
                  const P = _ === void 0 || _ === !1 ? this._comments[f] : _.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(P, _);
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
function nP(e) {
  const [t, r] = de(e.getComments());
  return z(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function iP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Z(null);
  return z(() => {
    i.current !== null && i.current.focus();
  }, []), z(() => {
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
  }, [n, e]), /* @__PURE__ */ C("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Te("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ C("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ C(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ C("div", { className: "Modal__content", children: t })
  ] }) });
}
function sP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return yn(
    /* @__PURE__ */ C(iP, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Xm() {
  const [e, t] = de(null), r = ge(() => {
    t(null);
  }, []), n = je(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ C(sP, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = ge(
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
const oP = {
  ...Kg,
  paragraph: "CommentEditorTheme__paragraph"
};
function aP(...e) {
  return e.filter(Boolean).join(" ");
}
function Zr({
  "data-test-id": e,
  children: t,
  className: r,
  onClick: n,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ C(
    "button",
    {
      disabled: i,
      className: aP(
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
function cP({
  className: e
}) {
  return /* @__PURE__ */ C(Gf, { className: e || "ContentEditable__root" });
}
function lP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ C("div", { className: t || "Placeholder__root", children: e });
}
const Nf = Kf("INSERT_INLINE_COMMAND");
function uP({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Z(null), s = ge(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return z(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), ps(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ C("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ C("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ C("i", { className: "icon add-comment" }) }) });
}
function dP({ onEscape: e }) {
  const [t] = ce();
  return z(() => t.registerCommand(
    Lc,
    (r) => e(r),
    ti
  ), [t, e]), null;
}
function Qm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ C(Hf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: oP
  }, children: /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ C(
      kb,
      {
        contentEditable: /* @__PURE__ */ C(cP, { className: e }),
        placeholder: /* @__PURE__ */ C(lP, { children: s }),
        ErrorBoundary: Yf
      }
    ),
    /* @__PURE__ */ C(bb, { onChange: n }),
    /* @__PURE__ */ C(Xf, {}),
    t !== !1 && /* @__PURE__ */ C(gb, {}),
    /* @__PURE__ */ C(dP, { onEscape: r }),
    /* @__PURE__ */ C(mb, {}),
    i !== void 0 && /* @__PURE__ */ C(Jf, { editorRef: i })
  ] }) });
}
function Zm(e, t) {
  return ge(
    (r, n) => {
      r.read(() => {
        e(Tb()), t(!xb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function fP({
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
  ), l = Z(null), u = ty(), d = ge(() => {
    e.getEditorState().read(() => {
      const p = O();
      if (N(p)) {
        l.current = p.clone();
        const m = p.anchor, b = p.focus, _ = cb(
          e,
          m.getNode(),
          m.offset,
          b.getNode(),
          b.offset
        ), S = a.current;
        if (_ !== null && S !== null) {
          const { left: P, bottom: E, width: j } = _.getBoundingClientRect(), M = lb(e, _);
          let R = M.length === 1 ? P + j / 2 - 125 : P - 125;
          R < 10 && (R = 10), S.style.left = `${R}px`, S.style.top = `${E + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const $ = M.length, { container: re } = c, W = c.elements, Ae = W.length;
          for (let ee = 0; ee < $; ee++) {
            const Re = M[ee];
            let be = W[ee];
            be === void 0 && (be = document.createElement("span"), W[ee] = be, re.appendChild(be));
            const Ke = `position:absolute;top:${Re.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Re.left}px;height:${Re.height}px;width:${Re.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            be.style.cssText = Ke;
          }
          for (let ee = Ae - 1; ee >= $; ee--) {
            const Re = W[ee];
            re.removeChild(Re), W.pop();
          }
        }
      }
    });
  }, [e, c]);
  ps(() => {
    d();
    const p = c.container, m = document.body;
    return m !== null ? (m.appendChild(p), () => {
      m.removeChild(p);
    }) : () => {
    };
  }, [c.container, d]), z(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (p) => (p.preventDefault(), t(), !0), h = () => {
    if (s) {
      let p = e.getEditorState().read(() => {
        const m = l.current;
        return m ? m.getTextContent() : "";
      });
      p.length > 100 && (p = p.slice(0, 99) + "…"), r(
        Ym(p, [mo(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, y = Zm(i, o);
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ C(
      Qm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: y
      }
    ),
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ C(Zr, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ C(
        Zr,
        {
          onClick: h,
          disabled: !s,
          className: "CommentPlugin_CommentInputBox_Button primary",
          children: "Comment"
        }
      )
    ] })
  ] });
}
function pP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = ty(), l = Zm(i, o);
  return /* @__PURE__ */ Te(bn, { children: [
    /* @__PURE__ */ C(
      Qm,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ C(
      Zr,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(mo(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(eb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ C("i", { className: "send" })
      }
    )
  ] });
}
function ey({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Te(bn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Te("div", { className: "Modal__content", children: [
      /* @__PURE__ */ C(
        Zr,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ C(
        Zr,
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
function wf({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = de(0);
  z(() => {
    const u = () => {
      s(performance.timeOrigin + performance.now());
    };
    u();
    const d = window.setInterval(u, 6e4);
    return () => {
      window.clearInterval(d);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Xm();
  return /* @__PURE__ */ Te("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ C("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Te("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ C("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Te(bn, { children: [
      /* @__PURE__ */ C(
        Zr,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ C(
              ey,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: u
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ C("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function hP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ce(), [a, c] = de(0), [l, u] = Xm(), d = je(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return z(() => {
    const f = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(f);
    };
  }, [a]), /* @__PURE__ */ C("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const h = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Te(
      "li",
      {
        onClick: () => {
          const p = s.get(h);
          if (p !== void 0 && (e === null || e.indexOf(h) === -1)) {
            const m = document.activeElement;
            o.update(
              () => {
                const b = Array.from(p)[0], _ = oe(b);
                _e(_) && _.selectStart();
              },
              {
                onUpdate() {
                  m !== null && m.focus();
                }
              }
            );
          }
        },
        className: `CommentPlugin_CommentsPanel_List_Thread ${s.has(h) ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
        children: [
          /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Te("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ C("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ C(
              Zr,
              {
                onClick: () => {
                  u("Delete Thread", (p) => /* @__PURE__ */ C(
                    ey,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: p
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ C("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ C("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((p) => /* @__PURE__ */ C(
            wf,
            {
              comment: p,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            p.id
          )) }),
          /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ C(
            pP,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      h
    ) : /* @__PURE__ */ C(
      wf,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      h
    );
  }) });
}
function gP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ C("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ C(
      hP,
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
function ty() {
  const e = Qf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function mP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Qf(), [a] = ce(), c = je(() => {
    const R = new rP(a, s);
    return r && R.registerOnChange(r), t?.(R), R;
  }, [a, s, r, t]), l = nP(c), u = je(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [h, y] = de([]), [p, m] = de(!1), [b, _] = de(!1), { yjsDocMap: S } = o;
  z(() => {
    if (e) {
      const R = e("comments", S);
      return c.registerCollaboration(R);
    }
    return () => {
    };
  }, [c, e, S]);
  const P = ge(() => {
    a.update(() => {
      const R = O();
      R !== null && (R.dirty = !0);
    }), m(!1);
  }, [a]), E = ge(
    (R, $) => {
      if (R.type === "comment") {
        const re = c.deleteCommentOrThread(R, $);
        if (!re)
          return;
        const { markedComment: W, index: Ae } = re;
        c.addComment(W, $, Ae);
      } else {
        c.deleteCommentOrThread(R);
        const re = $ !== void 0 ? $.id : R.id, W = u.get(re);
        W !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Ae of W) {
              const ee = oe(Ae);
              _e(ee) && (ee.deleteID(Br, re), ee.hasNoIDsForEveryType() && Gs(ee));
            }
          });
        });
      }
    },
    [c, a, u]
  ), j = ge(
    (R, $, re, W) => {
      c.addComment(R, re), $ && (a.update(() => {
        N(W) && mp(W, Br, R.id);
      }), m(!1));
    },
    [c, a]
  );
  z(() => {
    const R = [];
    let $;
    for (const re of h) {
      const W = u.get(re);
      if (W !== void 0)
        for (const Ae of W) {
          const ee = a.getElementByKey(Ae);
          ee !== null && (ee.classList.add("selected"), R.push(ee), $ = window.setTimeout(() => {
            _(!0);
          }, 0));
        }
    }
    return () => {
      $ !== void 0 && window.clearTimeout($);
      for (const re of R)
        re.classList.remove("selected");
    };
  }, [h, a, u]), z(() => {
    if (!a.hasNodes([tt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const R = /* @__PURE__ */ new Map();
    return Ue(
      Wf(
        a,
        tt,
        ($) => Qi($.getTypedIDs()),
        ($, re) => {
          for (const [W, Ae] of Object.entries($.getTypedIDs()))
            Ae.forEach((ee) => {
              re.addID(W, ee);
            });
        }
      ),
      a.registerMutationListener(
        tt,
        ($) => {
          a.getEditorState().read(() => {
            for (const [re, W] of $) {
              const Ae = oe(re);
              let ee = [];
              W === "destroyed" ? ee = R.get(re) ?? [] : _e(Ae) && (ee = Ae.getTypedIDs()[Br] ?? []);
              for (const Re of ee) {
                let be = u.get(Re);
                R.set(re, ee), W === "destroyed" ? be !== void 0 && (be.delete(re), be.size === 0 && u.delete(Re)) : (be === void 0 && (be = /* @__PURE__ */ new Set(), u.set(Re, be)), be.has(re) || be.add(re));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: $, tags: re }) => {
        $.read(() => {
          const W = O();
          let Ae = !1, ee = !1;
          if (N(W)) {
            const Re = W.anchor.getNode();
            if (v(Re)) {
              const be = lk(Re, Br, W.anchor.offset) ?? [];
              be !== null && (y(be), Ae = !0), W.isCollapsed() || (f(Re.getKey()), ee = !0);
            }
          }
          Ae || y((Re) => Re.length === 0 ? Re : []), ee || f(null), !re.has("collaboration") && N(W) && m(!1);
        });
      }),
      a.registerCommand(
        Nf,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), m(!0), !0;
        },
        xn
      )
    );
  }, [a, u]);
  const M = () => {
    a.dispatchCommand(Nf, void 0);
  };
  return /* @__PURE__ */ Te(bn, { children: [
    p && yn(
      /* @__PURE__ */ C(
        fP,
        {
          editor: a,
          cancelAddComment: P,
          submitAddComment: j
        }
      ),
      document.body
    ),
    d != null && !p && yn(
      /* @__PURE__ */ C(
        uP,
        {
          anchorKey: d,
          editor: a,
          showComments: b,
          onAddComment: M
        }
      ),
      document.body
    ),
    n !== null && yn(
      /* @__PURE__ */ C(
        Zr,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => _(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ C("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && yn(
      /* @__PURE__ */ C(
        gP,
        {
          comments: l,
          submitAddComment: j,
          deleteCommentOrThread: E,
          activeIDs: h,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function yP() {
  const e = Z(void 0), t = ge((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function bP(e, t) {
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
function kP(e, t) {
  z(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      bP(r, t);
    };
  }, [t, e]);
}
const lN = On(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: h, options: { isReadonly: y, view: p } = {} } = t, m = (y ?? !1) || cs(p), [b, _] = yP();
  kP(f, b), z(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      h?.warn(E), h || console.warn(E);
    }
  }, [h]), Nc(r, () => ({
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
    applyUpdate(E, j) {
      n.current?.applyUpdate(E, j);
    },
    replaceEmbedUpdate(E, j) {
      return n.current?.replaceEmbedUpdate(E, j);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    getSelectedParaMarker() {
      return n.current?.getSelectedParaMarker();
    },
    setSelection(E) {
      n.current?.setSelection(E);
    },
    setAnnotation(E, j, M, R, $) {
      typeof R == "function" || R === void 0 ? n.current?.setAnnotation(E, j, M, R, $) : n.current?.setAnnotation(E, j, M, R);
    },
    removeAnnotation(E, j) {
      n.current?.removeAnnotation(E, j);
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
    replaceCharacterMarker(E, j) {
      return n.current?.replaceCharacterMarker(E, j) ?? !1;
    },
    extendCharacterMarker(E, j) {
      return n.current?.extendCharacterMarker(E, j) ?? !1;
    },
    insertMarker(E) {
      return n.current?.insertMarker(E);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(E, j) {
      return n.current?.applyMarkerMenuSelection(E, j);
    },
    splitParagraphWithMarker(E) {
      n.current?.splitParagraphWithMarker(E);
    },
    commitTypedMarker(E, j) {
      return n.current?.commitTypedMarker(E, j) ?? !1;
    },
    commitTypedCloser(E) {
      return n.current?.commitTypedCloser(E) ?? !1;
    },
    insertNote(E, j, M) {
      n.current?.insertNote(E, j, M);
    },
    selectNote(E) {
      n.current?.selectNote(E);
    },
    getNoteOps(E) {
      return n.current?.getNoteOps(E);
    },
    setComments(E) {
      b.current?.setComments(E), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const S = ge(
    (E, j, M, R) => {
      if (!u) return;
      const $ = b.current?.getComments();
      u(E, $, j, M, R);
    },
    [b, u]
  ), P = ge(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = b.current?.getComments();
    l(E);
  }, [b, i, l]);
  return z(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ C(yb, { children: /* @__PURE__ */ Te(Gm, { ref: n, onUsjChange: S, ...f, children: [
    /* @__PURE__ */ C(
      mP,
      {
        setCommentStore: _,
        onChange: P,
        showCommentsContainerRef: m ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ C("div", { ref: s, className: "comment-container" })
  ] }) });
});
function mn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function TP(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function xP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const _P = /^[#\w().,%/\s-]+$/;
function xr(e) {
  return e != null;
}
const CP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, SP = {
  left: "right",
  right: "left"
}, vP = "var(--usj-font-fallback, serif)";
function ry(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${TP(i)}"`).join(", ")}, ${vP}`;
}
const Pc = ".editor-input.usfm", MP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function EP(e) {
  return MP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Pc}".`
  ), Pc);
}
function AP(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(ry(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (_P.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), xr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), xr(t.firstLineIndent) && s.push(`text-indent: ${mn(t.firstLineIndent * 20 * r)}vw`), xr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${mn(t.leftMargin * 20 * r)}vw`), xr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${mn(t.rightMargin * 20 * r)}vw`
  ), xr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${mn(t.spaceBefore * r)}pt`), xr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${mn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = CP[n ? SP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Of = { c: 150, ca: 133, cp: 150 };
function qf(e, t) {
  return e && xr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function PP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && xr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = qf(e.markers.c, Of.c);
  return ["ca", "cp"].map((i) => {
    const s = qf(
      e.markers[i],
      Of[i]
    ), o = mn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function uN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Pc } = t, s = EP(i), o = [], a = [];
  e.defaultFont && a.push(ry(e.defaultFont)), xr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${mn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = AP(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${xP(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...PP(e, s)), o.join(`
`);
}
export {
  Vh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  cN as Editorial,
  Ji as GENERATOR_NOTE_CALLER,
  ep as HIDDEN_NOTE_CALLER,
  lN as Marginal,
  k as MarkerType,
  Bh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  _l as STANDARD_VIEW_MODE,
  eo as defaultStyleInfo,
  aN as directionToNames,
  q_ as filterAndRankItems,
  uN as generateUsjCss,
  sN as getDefaultViewMode,
  Lo as getDefaultViewOptions,
  TE as getEnterMenuItems,
  kE as getMarkerMenuItems,
  oN as getViewMode,
  vl as getViewOptions,
  cs as isBlockVerseLayout,
  Kr as isInsertEmbedOpOfType,
  W_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
