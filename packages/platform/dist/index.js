import { jsx as M, jsxs as xe, Fragment as Tn } from "react/jsx-runtime";
import { forwardRef as wn, useState as de, useRef as Z, useCallback as he, useEffect as K, useMemo as Ke, memo as ky, createContext as Pf, useContext as Nf, Children as Ty, isValidElement as xy, cloneElement as _y, useImperativeHandle as Oc, useLayoutEffect as ds } from "react";
import { assertSafeKey as Je, isValidBookCode as Cy, MARKER_OBJECT_PROPS as Sy, USJ_VERSION as ur, USJ_TYPE as dr, isUsjTextContentLocation as vy, indexesFromUsjJsonPath as wf, isUsjAttributeKeyLocation as My, isUsjAttributeMarkerLocation as Ey, isUsjClosingAttributeMarkerLocation as Ay, isUsjMarkerLocation as Py, isUsjClosingMarkerLocation as Ny, isUsjPropertyValueLocation as wy, getUsjDocumentLocationTypeName as Oy, usjJsonPathFromIndexes as dn, EMPTY_USJ as Of } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as We, $parseSerializedNode as ni, DecoratorNode as fs, ElementNode as er, isHTMLElement as On, createState as mo, $getState as ne, $setState as xt, $isRangeSelection as N, $isElementNode as F, $isTextNode as E, $getSelection as q, $isNodeSelection as qc, ParagraphNode as Rc, TextNode as Be, $createTextNode as pe, $getCommonAncestor as qy, $isLineBreakNode as ps, NODE_STATE_KEY as hs, $getEditor as ii, $hasUpdateTag as Ry, $getNodeByKey as se, $getRoot as ze, $createRangeSelection as $c, $createPoint as $a, $getCharacterOffsets as Ic, KEY_DOWN_COMMAND as Pr, COMMAND_PRIORITY_HIGH as Ce, HISTORY_MERGE_TAG as qf, CLICK_COMMAND as yo, COMMAND_PRIORITY_EDITOR as xn, DELETE_CHARACTER_COMMAND as Rf, DELETE_WORD_COMMAND as $f, DELETE_LINE_COMMAND as If, isDOMNode as Lf, $getNearestNodeFromDOMNode as gi, CONTROLLED_TEXT_INSERTION_COMMAND as Lc, PASTE_COMMAND as vr, COMMAND_PRIORITY_CRITICAL as Gt, CUT_COMMAND as _n, DROP_COMMAND as Dc, $isDecoratorNode as bo, COPY_COMMAND as ko, COMMAND_PRIORITY_LOW as Ct, COMMAND_PRIORITY_NORMAL as Qn, SELECTION_CHANGE_COMMAND as fr, getDOMSelection as $y, isSelectionWithinEditor as Iy, $createRangeSelectionFromDom as Ly, $setSelection as si, isDOMTextNode as Dy, BLUR_COMMAND as Uc, $addUpdateTag as Wr, SKIP_DOM_SELECTION_TAG as Uy, CLEAR_HISTORY_COMMAND as Fy, $getPreviousSelection as zy, $isRootOrShadowRoot as Ky, CAN_UNDO_COMMAND as By, CAN_REDO_COMMAND as jy, DRAGSTART_COMMAND as Vy, $createNodeSelection as Df, getDOMSelectionFromTarget as Wy, $onUpdate as Hy, KEY_ENTER_COMMAND as Uf, LineBreakNode as Ff, $copyNode as Gy, FOCUS_COMMAND as Jy, $isRootNode as Yy, KEY_ESCAPE_COMMAND as zf, INSERT_PARAGRAPH_COMMAND as Ds, createCommand as Kf, HISTORIC_TAG as Fc, createEditor as Xy, UNDO_COMMAND as Bf, REDO_COMMAND as jf, CLEAR_EDITOR_COMMAND as Qy } from "lexical";
import { addClassNamesToElement as Kn, removeClassNamesFromElement as sa, $findMatchingParent as je, $dfsIterator as Vf, $dfs as mi, mergeRegister as Ve, registerNestedElementResolver as Wf, $unwrapNode as Ia, IS_APPLE as Us } from "@lexical/utils";
import { useLexicalNodeSelection as Zy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Rt } from "fast-equals";
import Li from "quill-delta";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as eb, copyToClipboard as tb } from "@lexical/clipboard";
import { TreeView as rb } from "@lexical/react/LexicalTreeView";
import * as nb from "react-dom";
import { createPortal as kn } from "react-dom";
import { LexicalComposer as Hf } from "@lexical/react/LexicalComposer";
import { ContentEditable as Gf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Jf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Yf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Xf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as ib } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as sb, createDOMRange as ob, createRectsFromDOMRange as ab } from "@lexical/selection";
import { autoUpdate as cb, computePosition as lb, shift as ub, flip as db } from "@floating-ui/dom";
import { $generateNodesFromDOM as fb } from "@lexical/html";
import { AutoFocusPlugin as pb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as hb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Qf, LexicalCollaboration as gb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as mb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as yb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as bb, $isRootTextContentEmpty as kb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Tb } from "@lexical/yjs";
import { Array as Tu, Map as xu, YArrayEvent as xb } from "yjs";
const oa = (e) => We(ni(e)), _b = {
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
  return _b[e];
}
const I = " ", Fs = "​", zt = I, zc = `${I}|`, Ut = "p", Wi = "+", ep = "-", zs = "chapter", La = "verse", _u = "invalid", Cb = "text-spacing", Sb = "formatted-font", vb = "marker-", tp = "external-usj-mutation", rp = "selection-change", Hr = "cursor-change", Da = "annotation-change", Hi = "delta-change", np = "marker-settle", Mb = [
  tp,
  rp,
  Hr,
  Da,
  Hi
], Cn = "zmsc-s", Zn = "zmsc-e", Eb = [Cn, Zn], Ab = [
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
  Zn
], ip = 1, Kc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Pb = Kc.filter((e) => e !== "sid" && e !== "eid");
class Xt extends fs {
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
    return t !== void 0 && (Ab.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
  return Eb.includes(e);
}
function op(e, t, r, n, i) {
  return We(new Xt(e, t, r, n, void 0, i));
}
function He(e) {
  return e instanceof Xt;
}
const Bc = "f", Nb = [
  // Footnote
  Bc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Es(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const wb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], ap = 1;
class Ae extends er {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Bc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Es(t) === "crossref" ? ep : Wi), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => qb(t) ? {
        conversion: Ob,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return jc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Nb.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Es(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Es(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && On(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Es(this.getMarker()))), { element: r };
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
function Ob(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: jc(t, r, n) };
}
function jc(e, t, r, n, i) {
  return We(new Ae(e, t, r, n, i));
}
function qb(e) {
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
const Ua = {
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
}, Cu = {
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
function lr(e) {
  const t = Object.hasOwn(Ua, e) ? Ua[e] : void 0, r = Object.hasOwn(Cu, e) ? Cu[e] : void 0;
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
const cp = "v", lp = "c", pn = "fig", Su = "tr", Fa = "esb", up = "esbe", vu = "periph", Mu = "alt", Eu = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Rb = {
  "": "start",
  c: "center",
  r: "end"
};
function Au(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Pu(e) {
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
const $b = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Ib(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Fs && s + 1 < e.length && Pu(e[s + 1]) || (Pu(o) ? (r || (i = t.length, t += o), r = !0) : $b.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Lb(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function Db(e, t) {
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
const Ub = /^(?:qt[1-5]?|ts)-[se]$/;
function Vc(e) {
  return Ub.test(e) || sp(e);
}
function aa(e, t) {
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
function Fb(e, t, r) {
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
      a(Ib(e.slice(i, b))), i = b;
      continue;
    }
    const c = i, { name: l, next: u } = Db(e, i + 1);
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
      const { word: h, next: b } = aa(e, i);
      i = b, n.push({ kind: "verse", number: h });
      continue;
    }
    if (l === lp) {
      const { word: h, next: b } = aa(e, i);
      i = b, s = void 0, n.push({ kind: "chapter", number: h });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, g = t(p)?.type;
    if (g === y.Note || g === void 0 && Ae.isValidMarker(l)) {
      const { word: h, next: b } = aa(e, i);
      i = b, s = l, n.push({ kind: "note", marker: l, caller: h || "+" });
      continue;
    }
    if (g === y.Milestone || g === void 0 && Vc(l)) {
      const h = Gb(e, c, l, i);
      if (h)
        n.push(h.token), h.ejectedText && o(h.ejectedText), i = h.next;
      else {
        const b = e.indexOf("\\", i), x = b === -1 ? e.length : b;
        o(e.slice(c, x)), i = x;
      }
      continue;
    }
    g === y.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : g === y.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Ks(p) ? (d(), Ks(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Fa || l === up ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Nu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Ks(e) {
  return Object.hasOwn(Nu, e) ? Nu[e] : void 0;
}
function zb(e) {
  return Ks(e) !== void 0;
}
const Kb = /([-\w]+)\s*=\s*"(.*?)"/g, Bb = /[\s\u200B]*[\n\r][\s\u200B]*/g, dp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function To(e) {
  return dp[e];
}
const jb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Vb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Gi(e, t, r = dp[t]) {
  const n = e.replace(Bb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Kb)];
  if (s.length > 0) {
    if (!Vb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      jb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function xo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Wb(e) {
  const t = br(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Hb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Gi(e.slice(n + 1, i), r, xo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Gb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Gi(s.slice(o + 1), r, xo(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Hb(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function ar(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", I);
}
function Fr(e) {
  return e.content || (e.content = []), e.content;
}
function br(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? Fr(u) : d ? Fr(d) : r;
  let p = !1;
  const g = () => {
    if (s)
      return o.length > a ? Fr(o[o.length - 1].object) : Fr(s);
    if (o.length > 0)
      return Fr(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: Ut, content: [] }, f().push(i);
    }
    return Fr(i);
  }, h = (te) => {
    const P = g();
    typeof te == "string" && typeof P[P.length - 1] == "string" ? P[P.length - 1] = P[P.length - 1] + te : P.push(te);
  }, b = (te) => {
    for (let P = te; P < o.length; P += 1) {
      const J = o[P].object;
      J.closed = "false";
    }
  }, x = () => {
    b(0), o.length = 0;
  }, T = (te) => {
    s && (o.length > a && (b(a), o.length = a), a = 0, te || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, A = (te, P, J) => {
    x();
    const [, le, W, _e] = J, yt = {
      type: "table:cell",
      marker: _e ? P.slice(0, P.indexOf("-")) : P,
      align: Rb[le],
      content: []
    };
    _e && (yt.colspan = String(Number(_e) + 1 - Number(W))), Fr(te).push(yt), i = yt;
  }, S = (te) => {
    u && (te || (u.closed = "false"), u = void 0);
  }, D = () => {
    d = void 0;
  };
  let _, w = "", $;
  const H = () => {
    w && h(ar(w)), w = "";
  }, Q = (te = !1) => {
    _?.type === "sidebar" ? w = "" : te && w.endsWith(`
`) && (w = w.slice(0, -1)), _ = void 0, H();
  }, Ee = () => {
    if (!$)
      return;
    const te = { type: "char", marker: $.marker, content: [] };
    $.value && (te.content = [ar($.value)]), g().push(te), o.push({ object: te }), $ = void 0;
  }, re = (te, P) => {
    p = !1, v(), x(), T(!1), i = { type: "para", marker: te, content: [] }, P && (i.content = [ar(P)]), f().push(i);
  }, qe = () => {
    $ && (re($.marker, $.value), $ = void 0);
  };
  let ke;
  const rr = (te) => {
    if (!ke)
      return;
    let { value: P } = ke;
    ke = void 0, te && P.endsWith(`
`) && (P = P.slice(0, -1));
    const J = P.indexOf("|"), le = J >= 0 ? Gi(P.slice(J + 1), vu) : void 0, W = J >= 0 ? P.slice(0, J) : P, _e = J >= 0 && (!le || !!W && !!le[Mu]), yt = _e ? void 0 : le, Bt = _e ? P : W, bt = {
      type: "periph",
      ...Bt ? { [Mu]: ar(Bt) } : {},
      ...yt
    };
    bt.content = [], f().push(bt), d = bt, i = void 0;
  };
  let Re;
  const on = () => {
    if (Re) {
      if (Re.shape === "para")
        re(pn, Re.value);
      else {
        const te = { type: "char", marker: pn, content: [] };
        Re.value && (te.content = [ar(Re.value)]), g().push(te), o.push({ object: te });
      }
      Re = void 0;
    }
  }, _r = Fb(e, t?.getMarker ?? lr, n);
  for (let te = 0; te < _r.length; te++) {
    const P = _r[te];
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
          [$.attrName]: ar($.value.trim())
        });
        const J = $.marker;
        if ($ = void 0, J === "ca") {
          const le = _r[te + 1];
          le?.kind === "text" && /^[\s\u200B]*$/.test(le.text) && te++;
        }
        continue;
      }
      if ($.shape === "para" && (P.kind === "para" || P.kind === "chapter")) {
        const J = $.value.replace(/[\s\u200B]+$/, "");
        J === "" ? (re($.marker), $ = void 0) : (Object.assign($.target, { [$.attrName]: ar(J) }), $ = void 0);
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
      rr(P.kind === "para" || P.kind === "chapter"), te--;
      continue;
    }
    if (Re) {
      if (P.kind === "text" || P.kind === "optbreak") {
        Re.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      if (P.kind === "end" && P.marker.replace(/^\+/, "") === pn) {
        const J = Re.value.indexOf("|"), le = J >= 0 ? Gi(Re.value.slice(J + 1), pn) : void 0;
        if (le) {
          const W = {};
          for (const [Bt, bt] of Object.entries(le))
            W[Bt === "src" ? "file" : Bt] = bt;
          const _e = {
            type: "figure",
            marker: pn,
            ...W
          }, yt = Re.value.slice(0, J);
          yt && (_e.content = [ar(yt)]), h(_e), Re = void 0;
          continue;
        }
      }
      on(), te--;
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
        const J = P.kind === "para" || !P.isNested ? Ks(P.marker) : void 0;
        if (J && J.targetTypes.includes(_.type)) {
          w = "", $ = {
            target: _,
            attrName: J.attrName,
            marker: P.marker,
            shape: J.shape,
            value: ""
          };
          continue;
        }
        Q(P.kind === "para");
      } else
        Q(P.kind === "chapter");
    if (!s && !n && (P.kind === "charOpen" && !P.isNested && P.marker === pn || P.kind === "para" && P.marker === pn)) {
      x(), Re = { shape: P.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (P.kind) {
      case "text": {
        let J = P.text;
        if (!s && J.endsWith(`
`)) {
          const le = _r[te + 1];
          (le === void 0 || le.kind === "para" || le.kind === "chapter") && (J = J.slice(0, -1));
        }
        J && h(ar(J));
        break;
      }
      case "para": {
        const J = !s && !n;
        if (J && P.marker === Su) {
          x(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Su, content: [] }, Fr(c).push(l), i = l, p = !1;
          break;
        }
        if (J && l) {
          const le = Eu.exec(P.marker);
          if (le && Au(le)) {
            A(l, P.marker, le);
            break;
          }
        }
        if (v(), !n && P.marker === Fa) {
          x(), T(!1), S(!1);
          const le = {
            type: "sidebar",
            marker: Fa,
            content: []
          };
          f().push(le), u = le, i = void 0, _ = u, p = !1;
          break;
        }
        if (P.marker === up && u) {
          x(), T(!1), S(!0), i = void 0;
          break;
        }
        if (!n && P.marker === vu) {
          x(), T(!1), S(!1), D(), ke = { value: "" }, i = void 0, p = !1;
          break;
        }
        re(P.marker);
        break;
      }
      case "verse": {
        T(!1);
        const J = { type: "verse", marker: cp, number: P.number };
        h(J), _ = J;
        break;
      }
      case "chapter": {
        x(), T(!1), v(), S(!1), D(), i = void 0;
        const J = {
          type: "chapter",
          marker: lp,
          number: P.number
        };
        r.push(J), _ = J, p = !0;
        break;
      }
      case "note": {
        T(!1);
        const J = g();
        s = { type: "note", marker: P.marker, caller: P.caller, content: [] }, a = o.length, J.push(s), _ = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !P.isNested) {
          const W = Eu.exec(P.marker);
          if (W && Au(W)) {
            A(l, P.marker, W);
            break;
          }
        }
        if (!P.isNested) {
          const W = s ? a : 0;
          b(W), o.length = W;
        }
        const J = g(), le = { type: "char", marker: P.marker, content: [] };
        J.push(le), o.push({ object: le });
        break;
      }
      case "end": {
        const J = P.marker.replace(/^\+/, ""), le = s ? a : 0, W = o.findLastIndex((_e, yt) => yt >= le && _e.object.marker === J);
        W >= 0 ? (Jb(o[W].object), b(W + 1), o.length = W) : s && s.marker === J ? T(!0) : (b(le), o.length = le, h({ type: "unmatched", marker: `${P.marker}*` }));
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
  if (ke && rr(!0), Re && on(), $)
    if ($.shape === "para") {
      const te = $.value.replace(/[\s\u200B]+$/, "");
      te === "" ? re($.marker) : Object.assign($.target, { [$.attrName]: ar(te) }), $ = void 0;
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
function Jb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Gi(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Sn = mo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Gr = mo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = mo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), kr = "marker-trailing-space", fp = 1, Yb = "marker", Wc = mo("isGutterMarker", {
  parse: (e) => e === !0
});
class Nr extends fs {
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
      span: (t) => ek(t) ? {
        conversion: Xb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Mr().updateFromJSON(t);
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
    return r && On(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
function Xb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Mr(t, r) };
}
function Mr(e, t) {
  return We(new Nr(e, t));
}
function Qb(e) {
  return xt(Mr(Yb, e), Wc, !0);
}
function Zb(e) {
  return Nt(e) && ne(e, Wc);
}
function ek(e) {
  return e?.tagName === "span";
}
function Nt(e) {
  return e instanceof Nr;
}
function pp(e) {
  return e?.type === Nr.getType();
}
const Vr = "internal-comment", tk = [Vr], hp = Object.freeze({}), za = Object.freeze({}), Ka = Object.freeze({}), Ba = Object.freeze({}), ja = Object.freeze({}), rk = 1, Bn = /* @__PURE__ */ new Map(), Pi = /* @__PURE__ */ new Map(), jn = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map();
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
    super(o), this.__typedIDs = As(t), this.__typedOnClicks = ca(r), this.__typedOnRemoves = la(n), this.__typedOnMouseEnters = ua(i), this.__typedOnMouseLeaves = da(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = As(t.__typedIDs), n = ca(t.__typedOnClicks), i = la(t.__typedOnRemoves), s = ua(t.__typedOnMouseEnters), o = da(t.__typedOnMouseLeaves);
    return new et(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return tk.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Ji().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: rk
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Kn(n, hn(t.theme.typedMark, a)), c.length > 1 && Kn(n, hn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Kn(n, hn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = hn(n.theme.typedMark, s), d = hn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Kn(r, u) : l === 0 && sa(r, u), c === 1 ? l === 2 && Kn(r, d) : l === 1 && sa(r, d));
      const f = new Set(o), p = new Set(a);
      for (const g of o)
        p.has(g) || sa(r, hn("annotationId", g));
      for (const g of a)
        f.has(g) || Kn(r, hn("annotationId", g));
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
    return me(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = As(r.__typedIDs);
    r.__typedIDs = As(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Bs(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = ca(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return me(t) ? Bn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = la(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return me(t) ? Pi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = ua(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return me(t) ? jn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = da(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return me(t) ? Vn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!me(a))
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
    if (!me(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Bs(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Ji(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Bn.delete(r.getKey()), Pi.delete(r.getKey()), jn.delete(r.getKey()), Vn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
    const n = Bn.get(this.getKey());
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
    const n = jn.get(this.getKey());
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === za) {
      const t = Bn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Bn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Bn.set(this.getKey(), this.__typedOnClicks);
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
    const i = zr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = zr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === za) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Ka) {
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
    const i = zr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = zr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Ka) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Ba) {
      const t = jn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      jn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    jn.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = zr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = zr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Ba) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === ja) {
      const t = Vn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Vn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Vn.set(this.getKey(), this.__typedOnMouseLeaves);
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
    const i = zr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = zr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === ja) {
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
    const i = nk(t, r);
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
    for (; me(t) && Ou(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; me(r) && Ou(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = ik(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = sk(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = ok(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = ak(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function As(e = hp) {
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
function ca(e) {
  if (!e || e === za)
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
function la(e) {
  if (!e || e === Ka)
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
function ua(e) {
  if (!e || e === Ba)
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
function da(e) {
  if (!e || e === ja)
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
function zr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function wu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function nk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Ou(e, t) {
  const r = wu(e), n = wu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function ik(e, t) {
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
function hn(e, t) {
  return `${e}-${t}`;
}
function qu(e) {
  return `external-${e}`;
}
function Ji(e, t, r, n, i) {
  return We(new et(e, t, r, n, i));
}
function me(e) {
  return e instanceof et;
}
function gp(e) {
  return e?.type === et.getType();
}
function Bs(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function mp(e, t, r, n, i, s, o) {
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
      if (me(x))
        continue;
      F(x) && x.isInline() && (A = x);
    }
    if (A !== null) {
      if (A && A.is(g))
        continue;
      const S = A.getParent();
      (S == null || !S.is(g)) && (h = void 0), g = S, h === void 0 && (h = Ji(), h.addID(t, r, n, i, s, o), A.insertBefore(h)), h.append(A);
    } else
      g = void 0, h = void 0;
  }
  t === Vr && F(h) && (d ? h.selectStart() : h.selectEnd());
}
function ck(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (me(n))
      return n.getTypedIDs()[t];
    if (E(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (me(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const lk = ["type", "marker", "content"], Va = "unknown", yp = 1, uk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class qn extends er {
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
    return new qn(r, n, i, s);
  }
  static importDOM() {
    return {
      [Va]: (t) => fk(t) ? {
        conversion: dk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Hc().updateFromJSON(t);
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
    return uk.has(this.getTag());
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
    const t = document.createElement(Va);
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
    if (qc(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function dk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Hc(t, r) };
}
function Hc(e, t, r) {
  return We(new qn(e, t, r));
}
function fk(e) {
  return e?.tagName.toLowerCase() === Va;
}
function De(e) {
  return e instanceof qn;
}
const bp = 1, pk = "attribute-run";
function fa(e) {
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
    t.classList.add(pk);
    const r = fa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = fa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = fa(this.__runKind);
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
  return We(new wr(e));
}
function Le(e) {
  return e instanceof wr;
}
const Yi = "id", Tp = 1, hk = [
  "type",
  "marker",
  "code",
  "content"
];
class Kt extends er {
  __marker = Yi;
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
  return We(new Kt(e, t));
}
function Me(e) {
  return e instanceof Kt;
}
function Gc(e) {
  return e?.type === Kt.getType();
}
const js = "c", _p = 1, gk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class qt extends er {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = js, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new qt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return Cp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(zs, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: _p
    };
  }
}
function Cp(e, t, r, n, i) {
  return We(new qt(e, t, r, n, i));
}
function Ne(e) {
  return e instanceof qt;
}
function mk(e) {
  return e?.type === qt.getType();
}
const Sp = [
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
], vp = [
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
], yk = [
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
  ...Sp,
  ...vp
], Mp = 1, bk = ["type", "marker", "content"];
class ye extends er {
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
    return new ye(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (yk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Sp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && vp.includes(t);
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
    return ye.isValidFootnoteMarker(t) || ye.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Tk(t) ? {
        conversion: kk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Er().updateFromJSON(t);
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
    return Ru(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Ru(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && On(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: Mp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Er(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function Ru(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function kk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Er(t) };
}
function Er(e, t) {
  return We(new ye(e, t));
}
function Tk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ye.isValidMarker(t) && e.classList.contains(ye.getType());
}
function U(e) {
  return e instanceof ye;
}
function xk(e) {
  return e?.type === ye.getType();
}
const Ep = 1, _k = "c", Ap = "span";
class Tr extends fs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = _k, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new Tr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Pp(t) ? {
        conversion: Ck,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Jc().updateFromJSON(t);
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
    const t = document.createElement(Ap);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(zs, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && On(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(zs, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: Ep
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
function Ck(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Jc(t) };
}
function Jc(e, t, r, n, i, s) {
  return We(new Tr(e, t, r, n, i, s));
}
function Pp(e) {
  return e ? e.classList.contains(zs) && e.tagName.toLowerCase() === Ap : !1;
}
function gs(e) {
  return e instanceof Tr;
}
function Sk(e) {
  return e?.type === Tr.getType();
}
const Np = 1;
class Jr extends Rc {
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
    return Ut;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Np
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Jt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Jt() {
  return We(new Jr());
}
function pr(e) {
  return e instanceof Jr;
}
function _o(e) {
  return e?.type === Jr.getType();
}
const vk = [
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
], wp = 1, Mk = ["type", "marker", "content"];
class rt extends Rc {
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
    return t !== void 0 && (vk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Ek,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return oi().updateFromJSON(t);
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
    return r && On(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = oi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ek(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = oi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function oi(e, t) {
  return We(new rt(e, t));
}
function ce(e) {
  return e instanceof rt;
}
function Yc(e) {
  return e?.type === rt.getType();
}
const Vs = "v", Op = 1, Ak = [
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
    super(r ?? t, a), this.__marker = Vs, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return qp().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(La, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Op
    };
  }
}
function qp(e, t, r, n, i, s) {
  return We(new pt(e, t, r, n, i, s));
}
function we(e) {
  return e instanceof pt;
}
function Rp(e) {
  return e?.type === pt.getType();
}
const Pk = "​", ai = Pk;
var $u;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})($u || ($u = {}));
var Iu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Iu || (Iu = {}));
function Nk() {
  return pe(ai);
}
function wk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ai, ""));
}
function ms(e) {
  return e.length > 0 && e.includes(ai) && e.replaceAll(ai, "") === "";
}
function Xc(e) {
  return E(e) && ms(e.getTextContent());
}
function $p(e) {
  return mk(e) || Sk(e);
}
function Ye(e) {
  return Ne(e) || gs(e);
}
function Ip(e, t) {
  return e.find((r) => Ye(r) && r.getNumber() === t.toString());
}
function Ok(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ye(r));
}
function Lu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Lp(e) {
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
function Qt(e) {
  return je(e, j) ?? void 0;
}
function qk(e) {
  return Me(e) || Ne(e) || U(e) || gs(e) || pr(e) || He(e) || ce(e) || j(e) || we(e) || De(e);
}
function Qc(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Dp(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Ue(e) {
  return tt(e) || Me(e);
}
function tt(e) {
  return ce(e) || pr(e);
}
function Rk(e) {
  return Yc(e) || _o(e);
}
function Ws(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function vn(e, t) {
  const r = ne(t, Sn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function $k(e, t) {
  const r = F(e) ? e : e.getParent(), n = F(t) ? t : t.getParent(), i = r && n ? qy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Ik(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function ci(e) {
  return e?.type === Be.getType();
}
function Lk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Dk(e, t) {
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
function Up(e, t, r) {
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
function Uk(e) {
  const t = e[hs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Fp(e) {
  return Kp(e) || ci(e) && Uk(e) === "attribute" ? "" : ci(e) && e.text !== I ? e.text : xk(e) ? e.children.map((t) => Fp(t)).join("") : "";
}
function Fk(e) {
  return e.map((r) => Fp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function wt(e) {
  return " " + e + I;
}
function Zc(e) {
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
  return O(e) || Or(e) || E(e) && ne(e, oe) === "attribute" ? "" : E(e) ? e.getTextContent() : F(e) ? e.getChildren().map((t) => zp(t)).join("") : "";
}
function Or(e) {
  return Nt(e) && e.getTextType() === "marker";
}
function gt(e) {
  return O(e) || Or(e);
}
function Kp(e) {
  return nl(e) || pp(e) && e.textType === "marker";
}
function Du(e, t) {
  zk(e, t), e.setMarker(t);
}
function zk(e, t) {
  const r = e.getMarker(), n = Oe(r), i = Oe(r, !0), s = st(r), o = st(r, !0), a = ye.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!gt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (Or(c)) {
        const f = l.startsWith(Oe("", !0));
        c.setTextContent(u ? Oe(t, f) : st(t, f));
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
function Pe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Bp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function el(e) {
  if (!N(e))
    return Uu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !F(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return Uu(e) ?? t ?? void 0;
  } catch (n) {
    if (Bp(n))
      return t ?? void 0;
    throw n;
  }
}
function Kk(e, t) {
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
function tl(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function jp(e) {
  return !!e && e.includes("-");
}
function Vp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Uu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function rl(e) {
  if (!e)
    return !1;
  if (ps(e) || O(e) || Or(e) || Le(e) || Nt(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = ne(e, oe);
    if (t === kr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === I || ms(r))
      return !0;
  }
  return !1;
}
function Co() {
  const e = pe(I);
  return xt(e, oe, kr), e.setMode("token"), e;
}
function Bk(e) {
  const t = e.getTextContent();
  t.startsWith(I) || e.setTextContent(I + t);
}
function tn(e) {
  return E(e) && ne(e, oe) === kr;
}
function Wp(e) {
  const t = e.getFirstChild();
  if (!gt(t) || t === null || tn(t.getNextSibling()))
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
function yi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!rl(s)) {
      if (me(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (E(s) && s.getType() === Be.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function So(e) {
  let t = e.getParent();
  for (; t && me(t); )
    t = t.getParent();
  return t;
}
function jk(e, t) {
  return yi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Vk(e, t) {
  const r = So(e);
  if (!r)
    return;
  const n = yi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function Wk(e, t) {
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
  const r = yi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (rl(n))
    return Hp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Ws(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Ws(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function Hk(e, t) {
  if (t <= 0)
    return 0;
  const r = yi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? Gk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function Gk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const Jk = 1;
class xr extends Be {
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
    return new xr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      version: Jk
    };
  }
}
function lt(e, t, r) {
  return We(new xr(e, t, void 0, r));
}
function O(e) {
  return e instanceof xr;
}
function nl(e) {
  return e?.type === xr.getType();
}
function rn(e) {
  return e.getTextContent() === yn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Yk(e) {
  e.setTextContent(yn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function yn(e, t, r = !1) {
  return t === "closing" ? st(e, r) : t === "selfClosing" ? st("") : Oe(e, r);
}
const Xk = /* @__PURE__ */ new Set(["closed"]);
function cr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Xk.has(n));
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
  const t = Object.keys(e).filter((n) => !Pb.includes(n)), r = [
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
function zi(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Qk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : zi(e) === void 0 && Xp(e) === void 0;
}
function Xp(e) {
  return e.getChildren().find((t) => E(t) && ne(t, oe) === "attribute");
}
function Xi(e, t) {
  return ys(e.getNextSibling(), t);
}
const Zk = /^[ \u00A0]+$/;
function il(e) {
  if (rn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Oe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && Zk.test(r.slice(t.length));
}
function ys(e, t) {
  let r, n, i, s;
  return Le(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  il(e) && (r = e, e = e.getNextSibling()), E(e) && ne(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && rn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Qi(e) {
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
function Qp(e) {
  const t = Qi(e);
  return t ? ys(t.getNextSibling(), "cat") : {};
}
function vo(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || O(t)) && ne(t, oe) !== "attribute")
    return t;
}
function Zp(e) {
  const t = vo(e);
  return t ? ys(t.getNextSibling(), "ca") : {};
}
function eh(e) {
  const t = vo(e);
  if (!t)
    return;
  const r = ys(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function th(e) {
  const t = eh(e);
  return t ? ys(t.getNextSibling(), "cp") : {};
}
function rh(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && ne(n, oe) === "attribute" || U(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Le(n)))
        return;
    }
}
function Mo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Le(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  il(s) && (t = s, s = s.getNextSibling()), E(s) && ne(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && rn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function sl(e) {
  return U(So(e));
}
function Wa(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? sl(t) : t.getChildren().some((i) => U(i) && i.getMarker() === r) ? !0 : void 0;
}
function eT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = Wa(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Eo(e) {
  return E(e) && e.getType() === Be.getType() && ne(e, oe) !== "attribute";
}
function ol(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Wa(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? Wa(r, t) === !0 ? "spacer" : void 0 : Eo(r) ? r.getTextContent().startsWith(I) ? void 0 : "prefix" : "spacer";
}
function tT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && ol(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function nh(e, t) {
  const r = q();
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
    if (!O(t))
      return;
    const r = ol(t, e);
    if (r !== void 0 && !nh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(I + n.getTextContent());
      } else
        t.insertAfter(pe(I));
  });
}
function sh(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && ol(t, e) !== void 0 && nh(t, e)) : !1;
}
const rT = "file", nT = "src", iT = "colspan", sT = "category", oT = "alt", aT = "closed", cT = "false";
function lT(e) {
  return e[aT] !== cT;
}
function uT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === rT ? nT : t,
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
  const n = r ?? {}, i = lT(n);
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
        opening: `\\${oh(t, n[iT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: cr(uT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [sT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + cr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [oT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: cr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: cr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const St = { wantsRun: !1, valueText: void 0 }, qr = {};
function pa(e, t) {
  if (t === "va")
    return e;
  const r = Xi(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function al(e) {
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
function Ao(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = q();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function dT(e) {
  return Le(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && ne(e, oe) === "attribute";
}
function fT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!E(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function ha(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (we(t))
      return t;
    if (!dT(t))
      return;
  }
}
function Fu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => we(t),
    ownerOf: (t) => {
      if (Le(t))
        return t.getRunKind() === e ? ha(t) : void 0;
      const r = t.getParent();
      return Le(r) ? r.getRunKind() === e ? ha(r) : void 0 : fT(t) === e ? ha(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!we(t))
        return St;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? St : { wantsRun: !0, valueText: I + r };
    },
    scanPieces: (t) => we(t) ? Xi(pa(t, e), e) : qr,
    graceSite: (t, r) => we(t) ? !r.opener && !r.closer ? al(pa(t, e)) : Ao(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => we(t) ? pa(t, e) : void 0
    }
  };
}
const pT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => St,
  scanPieces: () => qr,
  graceSite: (e) => U(e) && sh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, hT = {
  kind: "char",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (!E(e) || ne(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return U(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || zi(e) === void 0)
      return St;
    const t = cr(e.getUnknownAttributes() ?? {}, To(e.getMarker()));
    return t === "" ? St : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => U(e) ? { value: Xp(e) } : qr,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const r = zi(e);
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
    insertRunBefore: (e) => U(e) ? zi(e) : void 0
  }
};
function ch(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!E(e) || ne(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function gT(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Qi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!ch(n))
        return;
    }
}
const mT = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (Le(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Le(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : ch(e) ? gT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return St;
    const t = e.getCategory();
    return t === void 0 ? St : { wantsRun: !0, valueText: I + t };
  },
  scanPieces: (e) => j(e) ? Qp(e) : qr,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Qi(e);
      return r !== void 0 && al(r);
    }
    return Ao(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => j(e) ? Qi(e) : void 0
  }
};
function yT(e) {
  return Le(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && ne(e, oe) === "attribute";
}
function bT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!E(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function kT(e) {
  const t = e.getParent();
  if (!Ne(t))
    return;
  const r = vo(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!yT(n))
        return;
    }
}
function zu(e) {
  const t = (r) => Ne(r) ? e === "ca" ? vo(r) : eh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ne(r),
    ownerOf: (r) => {
      if (Le(r))
        return r.getRunKind() === e && Ne(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Le(n) ? n.getRunKind() === e && Ne(n.getParent()) ? n.getParent() ?? void 0 : void 0 : bT(r) === e ? kT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ne(r))
        return St;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? St : { wantsRun: !0, valueText: I + n };
    },
    scanPieces: (r) => Ne(r) ? e === "ca" ? Zp(r) : th(r) : qr,
    graceSite: (r, n) => {
      if (!Ne(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && al(i);
      }
      return Ao(n);
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
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && ne(e, oe) === "attribute";
}
function TT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (He(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!lh(t))
      return;
  }
}
const xT = {
  kind: "milestone",
  ownerPredicate: (e) => He(e),
  ownerOf: (e) => {
    const t = Le(e) ? e.getRunKind() === "milestone" ? e : void 0 : Le(e.getParent()) ? e.getParent() : lh(e) ? e : void 0;
    if (!t || Le(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Le(t) ? He(r) ? r : void 0 : TT(t);
  },
  expectedPieces: (e) => {
    if (!He(e))
      return St;
    const t = Yp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = cr(t, xo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : I + r };
  },
  scanPieces: (e) => {
    if (!He(e))
      return qr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Mo(e);
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
    return Ao(t);
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
}, _T = ah("optbreak", void 0, void 0).opening, CT = {
  kind: "optbreak",
  ownerPredicate: (e) => De(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!De(t) || t.getTag() !== "optbreak"))
      return E(e) || Nt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: _T }),
  scanPieces: (e) => De(e) ? { value: e.getFirstChild() ?? void 0 } : qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, ST = {
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
  expectedPieces: () => St,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, vT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => U(e),
  ownerOf: () => {
  },
  expectedPieces: () => St,
  scanPieces: () => qr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, Zi = [
  pT,
  hT,
  Fu("va"),
  Fu("vp"),
  mT,
  zu("ca"),
  zu("cp"),
  xT,
  CT,
  ST,
  vT
], MT = new Map(Zi.map((e) => [e.kind, e]));
function Mn(e) {
  const t = MT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function En(e) {
  for (const t of Zi) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function uh(e) {
  return En(e) !== void 0;
}
const Hs = "unmatched", dh = 2;
function Ki(e) {
  return `\\${e}`;
}
class Rr extends Be {
  __marker;
  constructor(t = "", r) {
    super(Ki(t), r), this.__marker = t, this.__mode = 1;
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
      [Hs]: (t) => AT(t) ? {
        conversion: ET,
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
      text: t.text ?? Ki(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Ki(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(_u), r.title = Ku(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Ku(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Hs);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(_u), t.textContent = this.getTextContent(), { element: t };
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
  return e.getTextContent() === Ki(e.getMarker());
}
function Ku(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function ET(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: cl(t) };
}
function cl(e) {
  return We(new Rr(e));
}
function AT(e) {
  return e?.tagName.toLowerCase() === Hs;
}
function nn(e) {
  return e instanceof Rr;
}
const ph = "table", Ha = "immutable-table", hh = 1, PT = ["type", "marker", "content"];
class Rn extends er {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Ha;
  }
  static clone(t) {
    return new Rn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return NT().updateFromJSON(t);
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
      type: Ha,
      ...t !== void 0 && { unknownAttributes: t },
      version: hh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function NT(e) {
  return We(new Rn(e));
}
function gh(e) {
  return e instanceof Rn;
}
function wT(e) {
  return e?.type === Ha;
}
const mh = "table:row", Bu = "immutable-table-row", yh = 1, Ga = "tr", OT = ["type", "marker", "content"];
class bi extends er {
  __marker;
  __unknownAttributes;
  constructor(t = Ga, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Bu;
  }
  static clone(t) {
    return new bi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return qT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ga).setUnknownAttributes(t.unknownAttributes);
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
      type: Bu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: yh
    };
  }
}
function qT(e, t) {
  return We(new bi(e, t));
}
const bh = "table:cell", ju = "immutable-table-cell", kh = 1, Ja = "tc1", RT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function $T(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class ki extends er {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Ja, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return ju;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new ki(r, n, i, s, o);
  }
  static importJSON(t) {
    return IT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ja).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = $T(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: ju,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: kh
    };
  }
}
function IT(e, t, r, n) {
  return We(new ki(e, t, r, n));
}
function Po(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Zt(e, t) {
  const r = Po(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function es(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function LT(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function DT(e) {
  return es(e) ? void 0 : { closed: "false" };
}
function UT(e, t, r, n) {
  const i = t.getMarker(), s = sl(t), o = LT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    Eo(a) && !a.getTextContent().startsWith(I) && a.setTextContent(I + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function An(e) {
  return je(e, U) ?? void 0;
}
function FT(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function Ya(e) {
  const t = Th(e);
  return e.getChildren().every((r) => O(r) || t && ne(r, oe) === "attribute" || E(r) && r.getTextContent().replaceAll(I, "") === "");
}
function Th(e) {
  return es(e);
}
function zT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? cr(r, To(e.getMarker())) : "";
  n !== "" && t.insertAfter(pe(n)), e.remove();
}
function KT(e, t) {
  if (es(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", sl(e)));
}
function BT(e, t) {
  return U(e) && !es(e) && !es(t);
}
function jT(e, t, r) {
  Ya(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && Eo(n) && !n.getTextContent().startsWith(I) && n.setTextContent(I + n.getTextContent()), e.append(...t);
}
function VT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Th(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = O(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = BT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      jT(e, o, n);
    else {
      const l = Er(t.getMarker(), DT(t));
      UT(l, t, o, n), e.insertAfter(l), Ya(l) ? l.remove() : c = l;
    }
  i && !a && KT(t, n), Ya(t) && zT(t, c);
}
function li(e, t) {
  let r = e.getParent();
  for (; U(r); )
    VT(e, r, t), r = e.getParent();
}
function No(e) {
  if (E(e) && !O(e)) {
    const t = e.getTextContent().startsWith(I) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (F(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      No(t);
      return;
    }
    e.selectEnd();
  }
}
const ei = /* @__PURE__ */ new WeakMap();
function WT(e, t) {
  return ei.set(e, t), () => {
    ei.get(e) === t && ei.delete(e);
  };
}
function Vu(e) {
  return ei.get(e);
}
function HT(e) {
  return ei.get(ii())?.has(e.getKey()) ?? !1;
}
function GT(e) {
  ei.get(ii())?.add(e.getKey());
}
function JT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Xa(e) {
  return !!(e.opener || e.value || e.closer);
}
function Wu(e) {
  return /^\s/.test(e);
}
function ll(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Wu(t) || !Wu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function wo(e, t, r) {
  return r.wantsRun ? ll(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : JT(t);
}
function YT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return ll(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function xh(e, t) {
  return !Xa(e.scanPieces(t));
}
function bs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!wo(e, n, r))
    return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Ws(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function XT(e, t, r, n) {
  return !r.wantsRun || Xa(n) || Ry(Hi) ? !1 : ii().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Xa(e.scanPieces(i));
  });
}
function QT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Hu(e) {
  const t = pe(e);
  return xt(t, oe, "attribute"), t;
}
function ZT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = kp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function ex(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Hu(n.valueText));
    return;
  }
  const l = ZT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : E(d) ? ll(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Hu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function ts(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (wo(e, i, n) && !HT(t)) {
    if (XT(e, t, n, i)) {
      GT(t);
      return;
    }
    if (!bs(e, t)) {
      if (!n.wantsRun) {
        QT(i);
        return;
      }
      ex(e, t, i, n);
    }
  }
}
function tx(e, t, r) {
  ts(e, t), t.isAttached() && bs(e, t) && r.add(t.getKey());
}
function _h(e) {
  if (!E(e))
    return !1;
  if (O(e) || we(e) || nn(e))
    return !0;
  const t = ne(e, oe);
  return t === "attribute" || t === kr;
}
function ul(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && rn(e) && U(e.getParent())) : !1;
}
function rx() {
  const e = q();
  return N(e) ? ul(e.focus.getNode(), e.focus.offset) : !1;
}
function Ch(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && _h(t) ? t : void 0;
}
function nx(e) {
  const t = Ch(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function ix(e) {
  const t = Ch(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Gu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Ju(e, t) {
  e.set(t.key, t.offset, t.type);
}
function sx(e, t) {
  let r = ix(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!_h(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Yu(e, t) {
  const r = sx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Oo(e) {
  if (e.isCollapsed()) {
    const a = nx(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Gu(r), Gu(n)], s = Yu(r, "next"), o = Yu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Ju(r, i[0]), Ju(n, i[1]), !1) : !0;
}
const Gs = "verse-block", Sh = 1, ox = "verse-block";
class Ti extends er {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Gs;
  }
  static clone(t) {
    return new Ti(t.__number, t.__key);
  }
  static importJSON(t) {
    return ax().updateFromJSON(t);
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
    return t.classList.add(ox), Xu(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Xu(r, this.__number), !1;
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
      type: Gs,
      number: this.getNumber(),
      version: Sh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Xu(e, t) {
  const { start: r, end: n } = Vp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Qu(e, "data-verse-start", i ? r : NaN), Qu(e, "data-verse-end", i ? n : NaN);
}
function Qu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function ax(e) {
  return We(new Ti(e));
}
function rs(e) {
  return e instanceof Ti;
}
function cx(e) {
  return e?.type === Gs;
}
const lx = [
  Kt,
  Tr,
  qt,
  pt,
  ye,
  Ae,
  Xt,
  xr,
  qn,
  Nr,
  Rr,
  rt,
  Jr,
  Rn,
  bi,
  ki,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  wr,
  {
    replace: Rc,
    with: () => Jt(),
    withKlass: Jr
  }
], Js = {
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
}, ux = {
  paragraph: y.Paragraph,
  character: y.Character,
  note: y.Note,
  milestone: y.Milestone
};
function dx(e) {
  if (!e)
    return lr;
  const t = /* @__PURE__ */ new Map();
  return (r) => {
    if (t.has(r))
      return t.get(r);
    const n = Object.hasOwn(e.markers, r) ? e.markers[r] : void 0, i = n ? {
      // Through `getMarker`, not the raw generated table: `usfmMarkersOverwrites` supplies
      // markers the generated data lacks (`w`, `rb`, `jmp`), and reading the table directly
      // demoted exactly those to Uncategorized whenever a project StyleInfo was active.
      category: lr(r)?.category ?? k.Uncategorized,
      type: ux[n.styleType] ?? y.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: lr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Zu(e, t, r) {
  const n = {
    type: dr,
    version: ur,
    content: e
  }, i = t.serializeEditorState(n, r);
  return _o(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const vh = "v", Mh = 1, fx = "verse-selected";
class Mt extends fs {
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
    return new Mt(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => gx(t) ? {
        conversion: hx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return dl().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(La, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && On(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(La, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Ft(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Fs + this.getNumber() + Fs
    );
    return M(px, { nodeKey: this.getKey(), text: t });
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
      version: Mh
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
function px({ nodeKey: e, text: t }) {
  const [r] = Zy(e);
  return M("span", { className: r ? fx : void 0, children: t });
}
function hx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: dl(t) };
}
function dl(e, t, r, n, i, s) {
  return We(new Mt(e, t, r, n, i, s));
}
function gx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === vh;
}
function $n(e) {
  return e instanceof Mt;
}
function mx(e) {
  return e?.type === Mt.getType();
}
function ge(e) {
  return we(e) || $n(e);
}
function Eh(e) {
  return Rp(e) || mx(e);
}
function yx(e) {
  return bx(e).find((t) => ce(t));
}
function bx(e) {
  return e.some(rs) ? e.flatMap((t) => rs(t) ? t.getChildren() : t) : e;
}
function qo(e) {
  return F(e) ? rs(e) ? e.getChildren().flatMap(qo) : e.getChildren() : [];
}
function kx(e, t) {
  return qo(e).find((i) => ge(i) && tl(t, i.getNumber()));
}
function Tx(e, t) {
  return t === 0 ? yx(e) : e.map((r) => kx(r, t)).filter((r) => r)[0];
}
function Ys(e) {
  return qo(e).find((r) => ge(r));
}
function Ah(e, t) {
  if (!F(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ge(i))
      return i;
  }
}
function xx(e) {
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
    const n = Ys(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Qa(e) {
  return qo(e).findLast((t) => ge(t));
}
function _x(e) {
  if (!we(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Cx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && F(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function Sx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Cx(t, e, r);
  if (E(e)) {
    const n = _x(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function ed(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function vx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return ed(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return Sx(e, t) ? { verseNum: n } : ed(e);
}
function Mx(e) {
  return qk(e) || $n(e);
}
function fl(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(I) && e.setTextContent(`${t} `);
  }
}
function Ph(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Za(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function Ex(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = pl(t, e);
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
      let s = td(i);
      for (; s && !Ye(s); ) {
        const o = Ys(s);
        if (o) {
          n = o;
          break;
        }
        s = td(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = Ys(s);
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
function Ax(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = pl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && F(i) && (n = Ah(i, r.getIndexWithinParent())), !n && i) {
      let o = rd(i);
      for (; o && !Ye(o); ) {
        const a = Qa(o);
        if (a) {
          n = a;
          break;
        }
        o = rd(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ye(s); ) {
      const o = Qa(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function td(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function rd(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function pl(e, t) {
  if (F(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ge(n))
      return n;
    const i = Ah(e, t.anchor.offset);
    if (i)
      return i;
    const s = Ys(e);
    if (s)
      return s;
  }
  return hl(e);
}
function hl(e) {
  if (!e || Ye(e))
    return;
  if (ge(e))
    return e;
  let t = Lu(e);
  for (; t; ) {
    if (Ye(t))
      return;
    if (ge(t))
      return t;
    const r = Qa(t);
    if (r)
      return r;
    t = Lu(t);
  }
}
const Px = ["style"], Nx = ["style", "code"], Xs = ["style", "cid"], wx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Ox = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], qx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], Rx = ["style", "caller", "category", "contents"], $x = ["tag", "marker", "contents"], Ix = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], ns = `
`;
function Lx(e, t) {
  const r = se(e);
  if (!Ot(r))
    return;
  const n = Nh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Nh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Vf();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (ui(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      ui(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Ar(l) || Ot(l))
        return n;
      Ue(l) && (a = l);
    }
    if (Ue(l) && (i.includes(l) || i.push(l)), wh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += gl(l, t);
  }
  if (a)
    return n;
}
function nd(e, t, r = "delta-doc") {
  if (e.length < 2 || !Fx(e[0]) || !Ux(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Dx(n, r)?.getKey());
}
function Dx(e, t = "delta-doc") {
  const r = Vf();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (ui(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      ui(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Ue(a) && (i.includes(a) || i.push(a)), wh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = gl(a, t);
    if (Ar(a) && l > 0 && e >= n && e < n + l || Ot(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function ui(e, t) {
  return e ? t ? !Ws(t.node, e.getKey()) : !0 : !1;
}
function Ar(e) {
  return E(e) && !Ot(e);
}
function Ot(e) {
  return Ye(e) || ge(e) || He(e) || j(e) || De(e) || nn(e);
}
function Br(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Ux(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Ix.includes(t);
}
function Fx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function wh(e, t) {
  return j(e) || De(e) ? !0 : t === "apply" && F(e) && Ot(e);
}
function Oh(e) {
  const t = e.getParent();
  return gt(e) && ce(t) && t.getFirstChild() === e;
}
function ec(e) {
  const t = e.getParent();
  return t !== null && je(t, Le) !== null;
}
function zx(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === zt && t.getChildrenSize() === 1;
}
function Kx(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === wt(t.getCaller());
}
function Bx(e) {
  return !uh(e) && gl(e, "delta-doc") === e.getTextContentSize();
}
function gl(e, t) {
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
    (Xc(e) || Oh(e) || ne(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, oe) === "attribute" || ec(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(zc) || zx(e) || Kx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function tc(e, t) {
  const r = { insert: e.__text }, n = ne(e, Gr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = qh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function id(e) {
  const t = new Li();
  return e.isEmpty() || e.read(() => {
    const r = ze();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && pr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = jx();
    for (const s of i)
      t.push(s);
  }), t;
}
function ml(e, t) {
  const r = [], n = mi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...sd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...sd(c, n.length, n, i, s, o, a));
  return r;
}
function jx() {
  return ml();
}
function sd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Vx(e, a, n), Wx(e, a, i, s, o), Hx(e, t, r, i, o, s, a), Ye(e) && a.push(Xx(e)), ge(e) && a.push(Zx(e)), He(e) && a.push(e_(e)), nn(e) && a.push(t_(e)), Jx(e, a, s), Gx(e, a, s), s_(c, s), a;
}
function Vx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    Me(n) ? t.push(Yx(n)) : ce(n) ? t.push(Qx(n)) : pr(n) && t.push({ insert: ns });
  }
  Ue(e) && (r.includes(e) || r.push(e));
}
function Wx(e, t, r, n, i) {
  if (!E(e) || we(e) || nn(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Qt(e) !== void 0;
  if (O(e) && (o || Oh(e) || ec(e) || uh(e)) || ne(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (ms(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && O(c) && c === s.getFirstChild() && a === wt(s.getCaller()))
    return;
  const l = U(s) ? s : void 0, u = l?.getFirstChild();
  o && l && O(u) && c === u && a.startsWith(I) && (a = a.slice(1));
  const d = a.startsWith(zc) || ne(e, oe) === "attribute" || ec(e), f = !!l && a === zt && l.getChildrenSize() === 1, p = Ro(e, n), g = p ? r.filter((x) => p.children.includes(x)) : r, h = tc(e, g);
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
function Hx(e, t, r, n, i, s, o) {
  U(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (ui(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = n_(c), u = Ro(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Gx(e, t, r) {
  if (!j(e))
    return;
  const n = r_(e), i = Ro(e, r), s = {
    node: e,
    children: mi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Jx(e, t, r) {
  if (!De(e))
    return;
  const n = i_(e), i = Ro(e, r), s = {
    node: e,
    children: mi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function sn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function Yx(e) {
  const t = { style: Yi, code: e.__code };
  return sn(t, e), { insert: ns, attributes: { book: t } };
}
function Xx(e) {
  const t = { style: js, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), sn(t, e), { insert: { chapter: t } };
}
function Qx(e) {
  const t = { style: e.__marker };
  return sn(t, e), { insert: ns, attributes: { para: t } };
}
function Zx(e) {
  const t = { style: Vs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), sn(t, e), { insert: { verse: t } };
}
function e_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), sn(t, e), { insert: { milestone: t } };
}
function t_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function r_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), sn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, Gr);
  return n && (r.attributes = { segment: n }), r;
}
function n_(e) {
  const t = { insert: "" }, r = qh([e]);
  return r && (t.attributes = { char: r }), t;
}
function i_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), sn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Ro(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function s_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    ui(t[r].node, e) && t.splice(r, 1);
}
function qh(e) {
  if (e.length === 0)
    return;
  const t = e.map(o_);
  return t.length === 1 ? t[0] : t;
}
function o_(e) {
  const t = { style: e.__marker }, r = ne(e, Sn);
  return r && (t.cid = r), sn(t, e), t;
}
const Rh = 1;
class Yt extends fs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Wi, r = "", n, i) {
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
      span: (t) => c_(t) ? {
        conversion: a_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return yl().updateFromJSON(t);
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
    return r && On(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => l_(t, n), (l) => u_(t, n, s, l), () => d_(t, n), () => f_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return M("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Wi && i ? (
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
      version: Rh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function a_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: yl(t, r) };
}
function yl(e, t, r) {
  return We(new Yt(e, t, r));
}
function c_(e) {
  return e ? e.classList.contains(Yt.getType()) : !1;
}
function Et(e) {
  return e instanceof Yt;
}
function l_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function u_(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!Et(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function d_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return ml(r);
  });
}
function f_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of mi())
      if (j(n)) {
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
], h_ = ["†"];
function $o(e) {
  if ($h())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = od(t), [s, o] = od(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = ad(n, i), [s, o] = ad(s, o);
  const a = $c();
  return a.anchor = $a(n.getKey(), i, cd(n)), a.focus = $a(s.getKey(), o, cd(s)), a;
}
function bl() {
  if ($h())
    return;
  const e = q();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Qs(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Qs(i, s);
  return { start: n, end: o };
}
function od(e) {
  if (vy(e)) {
    const t = wf(e.jsonPath);
    let r = ze();
    for (let n = 0; n < t.length; n++) {
      if (!r || !F(r))
        return [void 0, void 0];
      const i = yi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : Wk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && F(r) ? [r, Hk(r, e.offset)] : [void 0, void 0];
  }
  if (My(e) || Ey(e)) {
    const t = Ni(e.jsonPath);
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
  if (Ay(e)) {
    const t = Ni(e.jsonPath);
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
  if (Py(e)) {
    const t = Ni(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = ga(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (Ny(e)) {
    const t = Ni(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = ga(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (wy(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Ni(e.jsonPath);
    if (!n || !F(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ga(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Oy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function ad(e, t) {
  if (!Or(e))
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
function cd(e) {
  return F(e) ? "element" : "text";
}
function ga(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Or(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Ni(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = wf(r);
  let i = ze();
  for (const s of n) {
    if (!i || !F(i))
      return;
    const o = yi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Qs(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = g_(e), i = n ? dn(gn(n)) : dn(gn(e));
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
  if (me(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (E(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return Qs(n, s);
    }
    const i = So(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Qs(i, o);
    }
  }
  if (F(e)) {
    const r = e.getChildAtIndex(t);
    if (Or(r)) {
      const i = r.getTextContent().endsWith("*"), s = dn(gn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Hp(e, t);
    return n.type === "text" ? {
      jsonPath: dn([...gn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: dn(gn(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = Vk(e, t);
    if (r)
      return {
        jsonPath: dn([
          ...gn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: dn(gn(e)), offset: t };
}
function g_(e) {
  const t = e.getParent();
  if (!t || !F(t))
    return;
  const r = m_(e);
  return r && !Ue(r) && !E(r) && !me(r) ? r : t;
}
function m_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!rl(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function gn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = So(r);
    if (!n)
      break;
    const i = jk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function $h() {
  for (let e = ze().getFirstChild(); e; e = e.getNextSibling())
    if (rs(e))
      return !0;
  return !1;
}
function y_(e, t) {
  return e === "f" ? t.defaultFootnoteCaller ?? "+" : e === "x" ? t.defaultCrossRefCaller ?? "-" : e.startsWith("f") ? "+" : "-";
}
function Ih(e, t, r, n, i, s, o) {
  if (!Ae.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? $o(r) : q();
  if (!N(a))
    return;
  const c = T_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? y_(e, s), u = Lh(e, l, c, i, s, void 0, void 0);
  return k_(u, a, i), u;
}
function kl(e) {
  return e !== "expanded";
}
function b_(e) {
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
function k_(e, t, r) {
  const n = kl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Ik(t), Oo(t);
  const i = b_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(U)?.selectEnd();
}
function Wn(e, t, r) {
  const n = Er(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(Mr("marker", Oe(e)));
  const s = t === "" ? zt : i ? I + t : t;
  return n.append(pe(s)), n;
}
function T_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Wn("fr", f, n)), !e.isCollapsed()) {
        const p = ud(e);
        p.length > 0 && o.push(Wn("fq", p, n));
      }
      o.push(Wn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Wn("xo", f, n)), !e.isCollapsed()) {
        const p = ud(e);
        p.length > 0 && o.push(Wn("xq", p, n));
      }
      o.push(Wn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Lh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : kl(n?.noteMode), l = jc(e, t, c);
  s && xt(l, Gr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = Mr("marker", Oe(e) + " "), a || (f = Mr("marker", st(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = pe(wt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const g = () => Co(), h = r.flatMap(__(g));
    if (t === "")
      l.append(...h);
    else {
      const b = Zc(r);
      let x = () => {
      };
      i?.noteCallerOnClick && (x = i.noteCallerOnClick), p = yl(l.__caller, b, x), l.append(p, g(), ...h);
    }
  }
  return f && l.append(f), l;
}
function ld(e) {
  if (typeof e == "string") {
    const i = se(e);
    return j(i) ? i : void 0;
  }
  const t = mi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => j(i.node))[e]?.node;
  if (j(n))
    return n;
}
function x_(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if ($n(n) || !n) {
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
function __(e) {
  return (t) => Nt(t) ? [t] : [t, e()];
}
function C_(e) {
  const t = e.getParent();
  return t !== null && je(t, j) !== null;
}
function ud(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Ic(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || Et(c) || C_(c)) && !O(c) && !nn(c) && ne(c, oe) !== "attribute") {
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
const Tl = [
  Yt,
  Mt,
  ...lx
], S_ = [
  Ti,
  ...Tl
], v_ = wn((e, t) => {
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
function M_() {
  const [e, t] = de(void 0), [r, n] = de(), i = Z(null), s = he((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = cb(l, c, () => {
      lb(l, c, {
        placement: "bottom-start",
        middleware: [ub(), db()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = he(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return K(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function E_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = M_();
  return K(() => {
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
function Dh({ isOpen: e = !1, children: t }) {
  const r = Z(null), { coords: n, placement: i } = E_({ isOpen: e, floatingBoxRef: r }), s = Ke(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return kn(
    M(A_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Uh = Pf(void 0);
function xl() {
  const e = Nf(Uh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function P_(e, t) {
  const [r, n] = de(0), [i, s] = de(-1), o = Ke(() => e ?? [], [e]), a = {
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
function N_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = P_(t, r);
  return M(Uh.Provider, { value: i, children: M("div", { ...n, children: e }) });
}
const Fh = wn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = xl(), u = he((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = he((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return M("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function w_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Z(null), { state: { activeIndex: i, menuItems: s } } = xl(), o = Ke(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ke(() => {
    const c = o(s);
    return t ? Ty.map(c, (l, u) => xy(l) && l.type === Fh && l.props.index === void 0 ? _y(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return K(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), M("div", { ref: n, role: "menu", ...r, children: a });
}
const O_ = (e, t, r) => Rs(e, r).toLowerCase().includes(t.toLowerCase()), dd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Rs = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function q_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? dd(r[0]) : "") : (u = n || (r.length > 0 ? dd(r[0]) : ""), d = (g, h) => O_(g, h, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((g) => {
    try {
      return d(g, t);
    } catch (h) {
      return console.warn("Error filtering item:", g, h), !1;
    }
  }).sort((g, h) => {
    const b = (v) => (p.has(v) || p.set(v, Rs(v, f).toLowerCase()), p.get(v) ?? ""), x = a ? Rs(g, f) : b(g), T = a ? Rs(h, f) : b(h);
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
const ma = {
  Root: N_,
  Options: w_,
  Option: Fh
};
function R_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ke(() => q_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function $_() {
  const { moveUp: e, moveDown: t, select: r } = xl();
  return Ke(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const I_ = () => {
  const e = $_(), [t] = ae();
  K(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(Pr, r, Ce);
  }, [t, e]);
};
function L_() {
  return I_(), null;
}
const D_ = ["Shift", "Control", "Alt", "Meta"];
function zh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), u = s !== void 0, [d, f] = de(""), p = u ? s ?? "" : d, g = R_({ query: p, items: t, filterBy: "name" }), h = (b) => {
    n?.(), r ? r(b) : b.action(l);
  };
  return K(() => {
    a?.(p, g);
  }, [a, p, g]), K(() => l.registerCommand(Pr, (b) => {
    if (u || c?.includes(b.key) || D_.includes(b.key))
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
  }, Ce), [l, u, p, o, n, c]), xe(ma.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: g, onSelectOption: (b) => h(b), children: [!u && M("input", { value: p, type: "text", disabled: !0 }), M(L_, {}), M(ma.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (b) => b.map((T, v) => xe(ma.Option, { index: v, children: [M("span", { className: "label", children: T.label ?? T.name }), M("span", { className: "description", children: T.description })] }, T.name)) })] });
}
function U_({ trigger: e, items: t }) {
  const [r] = ae(), [n, i] = de(!1), s = he((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return K(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), K(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = q();
      if (N(l))
        return l;
    });
    a.read(() => {
      const l = q();
      !N(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && M(Dh, { isOpen: n, children: ({ placement: o }) => M(zh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function F_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Ke(() => {
    if (!t || !e)
      return;
    const i = lr(t);
    if (i?.children)
      return Object.values(i.children).flatMap((s) => s.map((o) => {
        const a = lr(o), { action: c } = r(o, a);
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
  K(() => {
    if (!e.hasNodes([et]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Ve(Wf(e, et, (n) => Ji(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
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
          const o = se(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : me(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!et.isReservedType(c))
              for (const u of l) {
                let d = t.get(Bi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Bi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Bi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const K_ = wn(function({ logger: t }, r) {
  const [n] = ae(), i = Ke(() => /* @__PURE__ */ new Map(), []);
  z_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Bi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = se(u);
        me(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Bs(d));
      }
  };
  return Oc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (et.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = $o(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), mp(p, a, c, l, u, d, f);
      }, { tag: Da });
    },
    removeAnnotation(o, a) {
      if (et.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Bi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Da });
    }
  })), null;
}), B_ = [];
function j_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = B_, onChange: n }) {
  const [i] = ae();
  return ds(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(qf) && !u.has(np) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = V_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function V_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Li();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && Qt(s) !== void 0;
    if (t.size === 1 && E(s) && !o && Bx(s)) {
      const a = Nh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = se(i);
          return new Li([E(d) ? tc(d) : { insert: "" }]);
        }), l = new Li([tc(s)]), u = new Li(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = id(r), c = id(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const _l = "formatted", Kh = "unformatted", Bh = "paragraph-structure", Cl = "standard", jh = "block-verse", W_ = {
  [_l]: "Formatted",
  [Kh]: "Unformatted",
  [Bh]: "Paragraph Structure",
  [Cl]: "Standard",
  [jh]: "Block Verse"
};
function In(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Sl, vl;
function H_(e) {
  const t = Ml(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Sl = e, vl = t;
}
H_(_l);
const YP = () => Sl, Io = () => vl;
function Ml(e) {
  let t;
  switch (e ?? Sl) {
    case _l:
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
    case Cl:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case jh:
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
function XP(e) {
  if (!e)
    return;
  const t = fd(e);
  return Object.keys(W_).find((r) => Rt(fd(Ml(r)), t));
}
const G_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function fd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...G_, ...t };
}
function Lo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function J_(e) {
  if (e)
    return is(e) ? Mt : e.markerMode === "editable" ? pt : Mt;
}
function is(e) {
  return e?.verseLayout === "block";
}
function Y_(e) {
  const t = [], r = e ?? vl;
  return r && (t.push(`${vb}${r.markerMode}`), r.hasSpacing && t.push(Cb), r.isFormattedFont && t.push(Sb)), t;
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
    if (Ar(u)) {
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
          if (Yr(r)) {
            const T = h.getParent();
            if (U(T)) {
              const v = r.char;
              let A;
              Array.isArray(v) ? a >= 0 && a <= v.length - 1 && (A = v[a]) : a === 0 && (A = v);
              const S = A ? vn(A, T) : !1;
              if (S && Array.isArray(v) && v.length > 1) {
                const D = pe("");
                h.replace(D);
                const _ = typeof r.segment == "string" ? r.segment : void 0, w = xi(v.slice(1), n, h, _);
                let $ = D;
                for (const H of w)
                  $.insertAfter(H), $ = H;
                D.remove(), $t(r, h);
              } else if (S)
                $t(r, h);
              else {
                h.remove();
                const D = pd(h, r, n, i);
                if (D && D.length > 0) {
                  let _ = T;
                  for (const w of D)
                    _.insertAfter(w), _ = w;
                }
              }
            } else {
              const v = pe("");
              h.replace(v);
              const A = pd(h, r, n, i);
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
      e <= o && o < e + t && s > 0 && (hd(u, r), s -= 1), o += 1;
    else if (U(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Yr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            rc(u, p.style), typeof p.cid == "string" && xt(u, Sn, () => p.cid);
            const g = Fe(p, Xs);
            g && Object.keys(g).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...g
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || fC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Ia(u), !0;
        }
      }
      d && Ia(u), a -= 1;
    } else if (Ue(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!pr(u))
          hd(u, r);
        else if (El(r)) {
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
function pd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = xi(t.char, r, e, i), o = s.find(U);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), $t(t, e);
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), $t(t, e), s;
}
function Vh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(Oe(t))) : Nt(r) && r.getTextType() === "marker" && r.setTextContent(Oe(t) + I);
}
function rc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = U(e.getParent()), i = e.getFirstChild();
  Nt(i) && i.getTextType() === "marker" && i.getTextContent() === Oe(r, n) && i.setTextContent(Oe(t, n));
  const s = e.getLastChild();
  Nt(s) && s.getTextType() === "marker" && s.getTextContent() === st(r, n) && s.setTextContent(st(t, n));
}
function hd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && U(e) && Yr(t)) {
      const i = nc(n);
      if (rc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        xt(e, Sn, () => o);
      }
      const s = Fe(i, Xs);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ye(e) || ge(e) || He(e) || j(e) || De(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (Me(e) || ce(e) || U(e)) && (r === "style" && ce(e) ? Vh(e, n) : r === "style" && U(e) ? rc(e, n) : r === "code" && Me(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && xt(e, Gr, () => n));
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
    if (Ar(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (Ot(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Ue(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Ue(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Jt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
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
              Ar(x) ? g += x.getTextContentSize() : Ot(x) && (g += 1), i = T;
            }
            const b = p.getChildren();
            for (const x of b)
              x.remove(), a.append(x);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Jt(), !0);
        } else ce(a) ? a.replace(Jt(), !0) : a.remove();
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
function tC(e, t, r, n, i) {
  if (t === ns)
    return gd(e, r, n, i);
  if (t.endsWith(ns) && !El(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Yr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Zs(e, s, r, i);
    }
    return o += gd(e + o, r, n, i), o;
  } else return Yr(r) ? rC(e, t, r, n, i) : Zs(e, t, r, i);
}
function rC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = pe(t === "" ? zt : t);
  $t(r, s);
  let o;
  {
    let b = function(x) {
      if (Ar(x)) {
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
        Ue(x) && (h += 1);
      }
      return !1;
    };
    const g = ze();
    let h = 0;
    b(g);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const g = a[0];
      g && vn(g, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (vn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = xi(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(U);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Zs(e, t, void 0, i);
  const f = {};
  for (const [g, h] of Object.entries(r))
    g !== "char" && g !== "segment" && typeof h == "string" && (f[g] = h);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const g of u)
    if (!Wh(e, g, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Zs(e, t, void 0, i));
}
function Zs(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = ze();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Ar(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = pe(t);
        if ($t(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          U(f) && !Yr(r) ? f.insertAfter(d) : c.insertAfter(d);
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
    } else if (Ue(c)) {
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
    const l = Jt().append(c);
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
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
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
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Jt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Ar(l)) {
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
      } else if (Ue(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (pr(u) && Ue(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (F(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return F(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      tt(a) ? pr(a) && ce(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !tt(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !tt(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function nC(e, t, r, n, i) {
  let s;
  return Br("chapter", t) ? s = sC(t.insert.chapter, r) : Br("verse", t) ? s = oC(t.insert.verse, r) : Br("ms", t) ? s = aC(t.insert.ms) : Br("note", t) ? s = Gh(t, r, n, i) : Br("unknown", t) ? s = Jh(t, r, n, i) : Br("unmatched", t) && (s = lC(t.insert.unmatched, r)), s ? Wh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function gd(e, t, r, n) {
  let i;
  El(t) ? i = Hh(t.para, r) : dC(t) && (i = iC(t.book)), i ??= Jt();
  const s = i, o = ce(s), a = pr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Ar(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ce(p) && (o || a)) {
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
    else if (Ue(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (pr(d) && s)
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
function iC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Yi || !r || !Kt.isValidBookCode(r))
    return;
  const n = Fe(e, Nx);
  return xp(r, n);
}
function Hh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Fe(e, Px), i = oi(r, n);
  if (!In(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), Co());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Oe(r) + I;
    i.append(t.hasGutterParaMarkers ? Qb(s) : Mr("marker", s));
  }
  return i;
}
function sC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Fe(e, wx);
  let a;
  if (t.markerMode === "editable")
    a = Cp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Jc(r, c, n, i, s, o);
  }
  return a;
}
function oC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Fe(e, Ox);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Ft(r, n);
    c = qp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = dl(n, l, i, s, o, a);
  }
  return c;
}
function aC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Fe(e, qx);
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
  const l = Fe(i.note, Rx), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const h of c?.ops ?? [])
    if (typeof h.insert == "string")
      if (Yr(h.attributes)) {
        const b = xi(h.attributes.char, t, pe(h.insert), void 0, Yh(h.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...b);
      } else
        p.push(pe(h.insert));
  return Lh(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Jh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Fe(i, $x), l = Hc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && cC(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && xt(l, Gr, () => d), l;
}
function cC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Yr(s.attributes)) {
        const o = pe(s.insert), a = xi(s.attributes.char, t, o, void 0, Yh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(pe(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Br("unknown", s)) {
        const o = Jh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Br("note", s)) {
        const o = Gh(s, t, r, n);
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
  const n = cl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Yh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function nc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function xi(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(zt);
  const a = () => {
    o && E(r) && r.getTextContent() !== zt && r.setTextContent(I + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(nc), l = c[0], u = i?.[i.length - 1];
    if (U(u) && vn(l, u))
      return c.length > 1 ? xi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, g) => {
      const h = Er(p.style, Fe(p, Xs));
      if (typeof p.cid == "string" && xt(h, Sn, () => p.cid), n && g === c.length - 1 && xt(h, Gr, () => n), f)
        if (U(f)) {
          const b = f.getMarker(), x = [];
          ba(b, x, t, !0), x.forEach((v) => h.append(v)), h.append(f);
          const T = [];
          ya(f, T, t, !0), T.forEach((v) => h.append(v));
        } else
          h.append(f);
      return h;
    }, r);
    return ba(l.style, d, t, s), ya(d, d, t, s), [d];
  } else {
    const c = nc(e), l = i?.[i.length - 1];
    if (U(l) && vn(c, l))
      return r && l.append(r), [];
    a();
    const u = Er(c.style, Fe(c, Xs));
    return typeof c.cid == "string" && xt(u, Sn, () => c.cid), n && xt(u, Gr, () => n), r && u.append(r), ba(c.style, u, t, s), ya(u, u, t, s), [u];
  }
}
function ya(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && uC(e.getMarker(), t, r, !1, n);
}
function ba(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = Mr("marker", Oe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function uC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = Mr("marker", n ? st("") : st(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function dC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function El(e) {
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
        xt(t, Gr, () => n);
        continue;
      }
      if (pC(r)) {
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
function pC(e) {
  return Xh.includes(e);
}
function ic(e) {
  return Nt(e) && Me(e.getParent()) && e.is(e.getParent()?.getFirstChild());
}
function ka(e) {
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
    const n = e ? Dp(t) : Qc(t);
    return ic(n);
  }
  return t.getNodes().some(ic);
}
function hC() {
  const [e] = ae();
  return K(() => e.registerCommand(yo, (t) => (gC(t), !1), xn), [e]), K(() => Ve(e.registerCommand(Rf, ka, Ce), e.registerCommand($f, ka, Ce), e.registerCommand(If, ka, Ce)), [e]), null;
}
function gC(e) {
  if (mC(e.target))
    return;
  const t = q();
  N(t) && yC(t);
}
function _i(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (gt(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === I && (r++, t = t.getNextSibling());
    else if (ge(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Zt(e, r), !0);
}
function mC(e) {
  if (!Lf(e))
    return !1;
  const t = gi(e);
  if (!Zb(t))
    return !1;
  const r = t.getParent();
  return r ? tt(r) ? _i(r) : (Zt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function yC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!Ue(r))
    return !1;
  const n = r.getFirstChild();
  return !Or(n) && !$n(n) ? !1 : _i(r);
}
function bC() {
  const [e] = ae();
  return K(() => {
    const t = (r) => r instanceof KeyboardEvent && !kC(r) || !Do() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Ve(
      e.registerCommand(Pr, t, Ce),
      e.registerCommand(Lc, t, Ce),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(vr, t, Gt),
      e.registerCommand(_n, t, Gt),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Dc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = gi(r.target);
        return !n || !Xr(n) ? !1 : (r.preventDefault(), !0);
      }, Ce),
      e.registerCommand(Rf, t, Ce),
      e.registerCommand($f, t, Ce),
      e.registerCommand(If, t, Ce)
    );
  }, [e]), null;
}
function kC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Xr(e) {
  return je(e, (t) => De(t) || gh(t)) ?? void 0;
}
function Do() {
  const e = q();
  return N(e) ? Xr(e.anchor.getNode()) !== void 0 || Xr(e.focus.getNode()) !== void 0 : !1;
}
function TC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function xC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), TC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function _C(e, t, r, n) {
  if (!IC(t) || xC(e, r))
    return !1;
  const i = r === "up" ? Ax(t) : Ex(t);
  return i && n.preventDefault(), i;
}
function CC({ viewOptions: e }) {
  const [t] = ae();
  return SC(t, e), null;
}
function SC(e, t) {
  K(() => {
    if (!e.hasNodes([Tr, Mt, Ae]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = q();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = md(o), d = wC(i, yd(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return _C(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = md(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return yd(a, n.key) ? l = !c && Td(i, "next") || !c && MC(i) || RC(i) || !c && s && kd(i, "next") : vC(a, n.key) && (l = !c && Td(i, "previous") || !c && EC(i) || $C(i, t) || !c && s && kd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Pr, r, Ce);
  }, [e, t]);
}
function md(e) {
  return e.dir || "ltr";
}
function yd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function vC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function sc(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = Qt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function MC(e) {
  const t = sc(Qc(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Zt(t, 0), !0);
}
function EC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = sc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : bd(n);
  }
  if (t.offset === 0) {
    const n = sc(r);
    return n ? bd(n) : !1;
  }
  return !1;
}
function bd(e) {
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
const eo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function AC(e) {
  if (eo)
    for (const { segment: r } of eo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function PC(e) {
  if (eo) {
    let n = 0;
    for (const { index: i } of eo.segment(e))
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
  return !!e && O(e) && Xr(e) !== void 0;
}
function di(e) {
  return E(e) && !e.isToken() && !Zh(e) && e.getTextContentSize() > 0;
}
function eg(e) {
  return ps(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || Zh(e)) && e.getTextContentSize() > 0 : bo(e) ? !He(e) : !1;
}
function fi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Uo(e, t, r) {
  for (let n = e; n; ) {
    if (eg(n))
      return n;
    if (F(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? fi(n, t, r);
      continue;
    }
    if (di(n))
      return n;
    n = fi(n, t, r);
  }
}
function Al(e, t, r, n, i) {
  return r === "element" && F(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? fi(e, n, i) : r === "text" && eg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : fi(e, n, i);
}
function Ta(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Al(e.node, e.offset, e.kind, "previous", t), n = Uo(r, "previous", t);
  if (!n)
    return e;
  if (di(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function NC(e, t) {
  const r = e.getNode(), n = Qh(r);
  if (!n)
    return;
  if (e.type === "text" && di(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return Ta({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Al(r, e.offset, e.type, t, n), s = Uo(i, t, n);
  if (!s)
    return;
  if (di(s)) {
    const c = s.getTextContent(), l = t === "next" ? AC(c) : PC(c);
    return Ta({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return Ta({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function tg(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = NC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function kd(e, t) {
  return tg(e, t, "collapse");
}
function wC(e, t) {
  return tg(e, t, "extend");
}
function OC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && di(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Al(n, e.offset, e.type, t, r);
  return Uo(i, t, r) === void 0;
}
function qC(e, t) {
  const r = ze();
  for (let n = e; n; ) {
    const i = fi(n, t, r), s = i && Uo(i, t, r);
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
  const i = Qh(n);
  if (!i || !OC(r, t, i))
    return !1;
  const s = fi(i, t, ze()), o = s && Xr(s);
  if (!o)
    return !1;
  const a = qC(o, t);
  if (!a)
    return !0;
  if (di(a)) {
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
function RC(e) {
  const t = e.anchor.getNode(), r = Qc(e);
  if (j(r) && !O(r.getFirstChild())) {
    if (Ue(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(tt(i) && _i(i)) && i.selectStart(), !0;
      }
    } else return Nt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ue(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : xd(r), !0;
  }
  const n = r?.getParent();
  if (Nt(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? xd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function $C(e, t) {
  const r = Dp(e);
  if (gs(r) && !r.getPreviousSibling())
    return !0;
  const { anchor: n } = e;
  if ((n.type === "element" || n.offset === 0) && ic(r))
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const s = e.anchor.getNode(), o = s.getParent();
  if (Me(o) && (!r || Nt(r) && r.is(o.getFirstChild())))
    return !0;
  if (j(r) && r.getIsCollapsed()) {
    const c = r.getPreviousSibling();
    if (!$n(c) && !Me(r.getParent()))
      return !1;
    const l = r.getParent();
    if (!l)
      return !1;
    const u = r.getIndexWithinParent();
    return l.select(u, u), !0;
  }
  if (Ue(r) && t?.noteMode === "collapsed") {
    const c = r.getLastChild();
    if (!c)
      return !1;
    const l = je(c, (u) => j(u));
    if (j(l) && l.getIsCollapsed()) {
      const u = l.getParent();
      if (!u)
        return !1;
      const d = l.getIndexWithinParent();
      return u.select(d, d), !0;
    }
  }
  const a = Qt(s);
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
function IC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ge(t) && bo(t);
}
function LC() {
  const [e] = ae();
  return DC(e), null;
}
function DC(e) {
  K(() => {
    if (!e.hasNodes([ye]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Ve(
      e.registerNodeTransform(ye, zC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ye, eT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ye, ih),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ye, (t) => ts(Mn("char"), t)),
      e.registerNodeTransform(Be, KC)
    );
  }, [e]);
}
function xa(e) {
  return e.getChildren().some(O);
}
function UC(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Eo(n)) {
    const i = n.getTextContent();
    i.startsWith(I) && (i === I ? n.remove() : n.setTextContent(i.slice(I.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function FC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function zC(e) {
  if (!U(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (xa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ne(e, Sn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && vn({ style: t, cid: r }, i) && Rt(n, i.getUnknownAttributes()))
    if (xa(i)) {
      if (UC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && vn({ style: t, cid: r }, s) && Rt(n, s.getUnknownAttributes()) && (xa(s) ? FC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function KC(e) {
  const t = e.getParent();
  if (!U(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(zt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function rg(e) {
  return e.replaceAll("	", " ");
}
function ng() {
  const e = q();
  return !!e && !e.isCollapsed();
}
function ig(e) {
  const t = () => !ng();
  return Ve(e.registerCommand(ko, t, Ct), e.registerCommand(_n, t, Ct));
}
const Pl = (e) => {
  e.dispatchCommand(ko, null);
}, Nl = (e) => {
  e.dispatchCommand(_n, null);
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
      n.setData(o, rg(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(vr, s);
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
    r.setData("text/plain", rg(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(vr, i);
  });
};
function BC() {
  const [e] = ae();
  return K(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Us ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Pl(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Nl(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Ol(e) : wl(e)));
    };
    return Ve(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      ig(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function jC({ logger: e }) {
  const [t] = ae();
  return K(() => Ve(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Pr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Qn),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(vr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Qn),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Dc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Qn)
  ), [t, e]), null;
}
const to = "editor-context-menu";
function oc(e) {
  return `${to}-item-${e}`;
}
const VC = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta"]);
function WC({ index: e, isSelected: t, onClick: r, onMouseMove: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), M("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: oc(e), onMouseMove: n, onClick: i.isDisabled ? void 0 : r, children: M("span", { className: "text", children: i.title }) });
}
function HC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseMove: n }) {
  return M("div", { className: "typeahead-popover", children: M("ul", { id: to, role: "listbox", "aria-label": "Editor context menu", children: e.map((i, s) => M(WC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseMove: () => n(s), option: i }, `${s}-${i.title}`)) }) });
}
let GC = 0;
class wi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${GC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function JC({ options: e } = {}) {
  const [t] = ae(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = de(void 0), c = Ke(() => {
    const f = [
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
    ], p = (e ?? []).map((g) => new wi(g.title, { onSelect: g.onSelect, isDisabled: g.isDisabled }));
    return [...f, ...p];
  }, [t, r, e]), l = Z(null), u = Z(null), d = he(() => {
    s((f) => ({ ...f, isOpen: !1 })), a(void 0);
  }, []);
  return K(() => ig(t), [t]), K(() => {
    const f = (p) => {
      const g = p.target;
      t.getRootElement() === g || Pp(g) || (p.preventDefault(), u.current = document.activeElement, s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, g) => {
      g?.removeEventListener("contextmenu", f), p && p.addEventListener("contextmenu", f);
    });
  }, [t]), K(() => {
    if (!i.isOpen)
      return;
    const f = (p) => {
      const g = p.target;
      g instanceof Node && l.current?.contains(g) || d();
    };
    return globalThis.addEventListener("scroll", f, !0), () => globalThis.removeEventListener("scroll", f, !0);
  }, [i.isOpen, d]), K(() => {
    if (!i.isOpen)
      return;
    const f = () => {
      d();
    };
    return document.addEventListener("pointerdown", f), () => document.removeEventListener("pointerdown", f);
  }, [i.isOpen, d]), K(() => {
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
          if (VC.has(p.key))
            return;
          p.preventDefault(), p.stopPropagation();
        }
    };
    return document.addEventListener("keydown", f, !0), () => document.removeEventListener("keydown", f, !0);
  }, [i.isOpen, d, c, o, t]), K(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (f)
      return f.setAttribute("aria-controls", to), () => {
        f.removeAttribute("aria-controls"), f.removeAttribute("aria-activedescendant");
      };
  }, [t, i.isOpen]), K(() => {
    if (!i.isOpen)
      return;
    const f = t.getRootElement();
    if (!f)
      return;
    if (o === void 0) {
      f.removeAttribute("aria-activedescendant");
      return;
    }
    f.setAttribute("aria-activedescendant", oc(o));
    const p = document.getElementById(to), g = document.getElementById(oc(o));
    if (!p || !g)
      return;
    const h = p.getBoundingClientRect(), b = g.getBoundingClientRect(), x = b.top - h.top + p.scrollTop, T = b.bottom - h.top + p.scrollTop;
    x < p.scrollTop ? p.scrollTop = x : T > p.scrollTop + p.clientHeight && (p.scrollTop = T - p.clientHeight);
  }, [t, i.isOpen, o]), K(() => t.registerEditableListener((f) => {
    n(!f);
  }), [t]), ds(() => {
    const f = l.current;
    if (!f)
      return;
    const { width: p, height: g } = f.getBoundingClientRect(), h = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), b = Math.max(0, Math.min(i.y, globalThis.innerHeight - g));
    f.style.left = `${h}px`, f.style.top = `${b}px`, f.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? nb.createPortal(M("div", { ref: l, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (f) => f.stopPropagation(), children: M(HC, { options: c, selectedItemIndex: o, onOptionClick: (f) => {
    f.isDisabled || (t.update(() => {
      f.onSelect();
    }), d());
  }, onOptionMouseMove: (f) => {
    a((p) => p === f ? p : f);
  } }) }), document.body) : null;
}
function YC(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function XC(e) {
  if (!Dy(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function QC(e) {
  return Et(e);
}
function _a(e, t, r) {
  const n = gi(t.node);
  if (!bo(n) || QC(n))
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
function ZC(e, t) {
  if (q())
    return !1;
  const r = e.getRootElement(), n = $y(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Iy(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = _a(e, c, XC(c)), d = u;
  else {
    const b = YC(n.getRangeAt(0), c);
    u = _a(e, c, b ? "before" : "after"), d = _a(e, l, b ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, g = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, h = Ly(g, e);
  return h ? (si(h), h.dirty = !t, t) : !1;
}
function eS() {
  const [e] = ae(), t = Z(!1), r = Z(!1);
  return K(() => {
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
  }, [e]), K(() => e.registerCommand(fr, () => (ZC(e, t.current) && (r.current = !0), !1), Gt), [e]), null;
}
function tS() {
  const [e] = ae();
  return K(() => e.registerCommand(Pr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Us ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Gt), [e]), null;
}
function rS({ isEditable: e }) {
  const [t] = ae();
  return ds(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function _d(e) {
  return !!e && Xc(se(e));
}
function sg(e) {
  const [t] = ae(), r = Z(void 0), n = he((i) => {
    const s = q(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = _d(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Po(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = Nk();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Zt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = se(a);
      E(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return K(() => {
    const i = () => {
      const a = e(), c = q(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Wr(Hr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (ms(c) || !c.includes(ai))
        return;
      const l = q(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (wk(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(ai).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Ve(t.registerCommand(fr, () => (i(), !1), xn), t.registerCommand(Uc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = _d(a);
      }), c && t.update(() => {
        const l = se(a);
        E(l) && l.remove();
      }, { tag: Hr }), r.current = void 0, !1;
    }, xn), t.registerNodeTransform(Be, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function nS() {
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
  if (!ge(i) || Po(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ge(s))
    return i;
}
function iS() {
  return sg(nS), null;
}
function sS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ae();
  return K(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), K(() => {
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
          f || Wr(Uy), o.setEditorState(l), o.dispatchCommand(Fy, void 0);
        }, { tag: tp });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function oS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return aS(t, n), cS(i, e, r, n), null;
}
function aS(e, t) {
  const r = Z(void 0), n = Z(void 0), i = e.noteCallers, s = e.crossRefCallers;
  K(() => {
    let o = i;
    (!o || o.length <= 0) && (o = p_), r.current !== o && (r.current = o, Cd("note-callers", o, t));
  }, [t, i]), K(() => {
    let o = s;
    (!o || o.length <= 0) && (o = h_), n.current !== o && (n.current = o, Cd("cross-ref-callers", o, t));
  }, [t, s]);
}
function cS(e, t, r, n) {
  K(() => {
    if (!e.hasNodes([ye, Ae, Yt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => gS(s));
    return Ve(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ae, (s) => lS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ye, uS),
      e.registerNodeTransform(Be, dS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Yt, fS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Yt, (s, { prevEditorState: o }) => pS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(fr, () => hS(e, t, r, n), Ct),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function lS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Et(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !O(i) && i.getTextContent() !== wt(e.getCaller()) && e.insertBefore(i);
  }
}
function uS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => Et(o));
  if (!U(e) || !j(t) || !n)
    return;
  const i = Zc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  E(s) ? s.getTextContent() !== I && s.setTextContent(I) : e.insertAfter(pe(I));
}
function dS(e) {
  const t = Qt(e), r = t?.getChildren(), n = r?.find((o) => Et(o));
  if (!E(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!O(e) && j(i) && e.getTextContent() !== I && (e.setTextContent(I), e.selectEnd()), U(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(zt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Zc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function fS(e) {
  if (!Et(e))
    return;
  const t = e.getNextSibling();
  !E(t) || O(t) ? e.insertAfter(pe(I)) : t.getTextContent() !== I && t.setTextContent(I);
}
function pS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return Et(o) && j(a) && a.getCaller() === Wi;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function hS(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = je(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = se(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Oi(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (j(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Oi(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (j(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Oi(e, c, n);
    } else if (!a) {
      const c = je(o, (l) => j(l));
      if (c && c.getIsCollapsed() && // `ParaLike`, not `SomePara`: the `\id` line is a `BookNode` and can carry a note like any
      // other content container, so a note at its end expands the same way.
      Ue(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Oi(e, l, n);
      }
    }
  }
  if (tt(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if ($n(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Oi(e, l, n);
    }
  }
  return !1;
}
function Oi(e, t, r) {
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
function gS(e) {
  const t = q();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && E(s)) {
    e.preventDefault();
    const o = $c();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), si(o);
  }
}
function Cd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (mS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function mS(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Fo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Qi(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function yS(e) {
  const t = e.getParent();
  if (j(t))
    return Fo(t).some((r) => r.is(e)) ? t : void 0;
}
function ro(e) {
  const t = Fo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function bS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function kS(e) {
  const t = zy();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ro(e);
  const i = bS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ro(e);
}
function ac(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = yS(t);
  if (r)
    return TS(r, t, e.offset) ? void 0 : r;
}
function TS(e, t, r) {
  const n = Fo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function xS(e) {
  const t = Fo(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Zt(e, ro(e));
}
function _S(e = !1) {
  const t = q();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return CS(t.anchor, t.focus);
  const r = ac(t.anchor);
  if (!r)
    return !1;
  if (!e && kS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Zt(n, r.getIndexWithinParent());
  } else
    xS(r);
  return !0;
}
function CS(e, t) {
  const r = ac(e), n = ac(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Sd(e, r, i), n && Sd(t, n, !i), !0;
}
function Sd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), ro(t), "element");
}
function SS() {
  const [e] = ae(), t = Z(!1);
  return K(() => {
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
  }, [e]), K(() => e.registerCommand(fr, () => (_S(t.current) && Wr(Hr), !1), xn), [e]), null;
}
function vS({ onChange: e }) {
  const [t] = ae();
  return K(() => t.registerCommand(fr, () => {
    const r = bl();
    return e?.(r), !1;
  }, Ct), [t, e]), null;
}
function MS() {
  const [e] = ae();
  return ES(e), null;
}
function ES(e) {
  K(() => {
    if (!e.hasNodes([rt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(rt, (t) => AS(t, e));
  }, [e]);
}
function AS(e, t) {
  Za(t, e.getKey()) && Ph(e.getFirstChild()), !(!ce(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return ce(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function og({ onStateChange: e }) {
  const [t] = ae(), [r, n] = de(t), i = Z(!1), s = Z(!1), o = Z(void 0), a = Z(void 0), c = he(() => {
    const l = q();
    let u;
    if (N(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : je(d, (x) => {
        const T = x.getParent();
        return T !== null && Ky(T);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), rs(p) && (p = je(d, ce) ?? p);
      const g = p.getKey(), h = r.getElementByKey(g), b = $k(d, f);
      if (b && Mx(b) && (u = b.getMarker()), h !== null && (ce(p) || Me(p) || gs(p))) {
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
  return K(() => t.registerCommand(fr, (l, u) => (c(), n(u), !1), Gt), [t, c]), K(() => Ve(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(By, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Gt), r.registerCommand(jy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Gt)), [c, r, e]), null;
}
function ag(e) {
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
  return e ? Ue(e) ? e : je(e, (r) => Ue(r)) ?? void 0 : void 0;
}
function cg(e) {
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
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !qc(e) ? !1 : e.getNodes().some((t) => ge(t));
}
function lg(e) {
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
function ug(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Qr(r);
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
function vd(e, t) {
  return !!cc(e, t);
}
function cc(e, t) {
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
function no(e, t) {
  if (!N(e))
    return !1;
  const r = Qr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ti(e) {
  return ql(e) || cg(e);
}
function dg(e, t) {
  if (ql(e) || cg(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return lg(e) && no(e, "backward") || vd(e, "backward");
    case "deleteForward":
      return ug(e) && no(e, "forward") || vd(e, "forward");
    case "insertText":
      return !1;
  }
}
function PS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = cc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (lg(e) && no(e, "backward")) {
        const n = Qr(e.anchor.getNode());
        if (tt(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = cc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (ug(e) && no(e, "forward")) {
        const i = Qr(e.anchor.getNode())?.getNextSibling();
        if (tt(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Md(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return qc(e) && e.has(t.key);
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
function fg(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else F(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function NS(e) {
  const t = e.getPreviousSibling();
  if (!Ue(t))
    return;
  const r = t.getLastChild(), n = e.getChildren().filter((i) => !tn(i));
  t.append(...n), e.remove(), r ? fg(r) : _i(t) || t.selectStart();
}
function pg(e) {
  return ge(e) || Ye(e) ? [] : tt(e) ? e.getChildren().flatMap(pg) : [e];
}
function wS(e) {
  const t = [];
  for (const r of e) {
    const n = pg(r);
    n.length !== 0 && (tt(r) && t.length > 0 && t.push(pe(" ")), t.push(...n));
  }
  return t;
}
function Ed(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function OS(e) {
  if (Array.isArray(e)) return e;
}
function qS(e, t) {
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
function RS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $S(e, t) {
  return OS(e) || qS(e, t) || IS(e, t) || RS();
}
function IS(e, t) {
  if (e) {
    if (typeof e == "string") return Ed(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ed(e, t) : void 0;
  }
}
const hg = Object.entries, Ad = Object.setPrototypeOf, LS = Object.isFrozen, DS = Object.getPrototypeOf, US = Object.getOwnPropertyDescriptor;
let nt = Object.freeze, ot = Object.seal, Yn = Object.create, gg = typeof Reflect < "u" && Reflect, lc = gg.apply, uc = gg.construct;
nt || (nt = function(t) {
  return t;
});
ot || (ot = function(t) {
  return t;
});
lc || (lc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
uc || (uc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Hn = Xe(Array.prototype.forEach), FS = Xe(Array.prototype.lastIndexOf), Pd = Xe(Array.prototype.pop), Gn = Xe(Array.prototype.push), zS = Xe(Array.prototype.splice), jr = Array.isArray, Di = Xe(String.prototype.toLowerCase), Ca = Xe(String.prototype.toString), Nd = Xe(String.prototype.match), qi = Xe(String.prototype.replace), wd = Xe(String.prototype.indexOf), KS = Xe(String.prototype.trim), BS = Xe(Number.prototype.toString), jS = Xe(Boolean.prototype.toString), Od = typeof BigInt > "u" ? null : Xe(BigInt.prototype.toString), qd = typeof Symbol > "u" ? null : Xe(Symbol.prototype.toString), Ze = Xe(Object.prototype.hasOwnProperty), Ri = Xe(Object.prototype.toString), Qe = Xe(RegExp.prototype.test), mn = VS(TypeError);
function Xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return lc(e, t, n);
  };
}
function VS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return uc(e, r);
  };
}
function fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Di;
  if (Ad && Ad(e, null), !jr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (LS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function WS(e) {
  for (let t = 0; t < e.length; t++)
    Ze(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = Yn(null);
  for (const n of hg(e)) {
    var r = $S(n, 2);
    const i = r[0], s = r[1];
    Ze(e, i) && (jr(s) ? t[i] = WS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function HS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return BS(e);
    case "boolean":
      return jS(e);
    case "bigint":
      return Od ? Od(e) : "0";
    case "symbol":
      return qd ? qd(e) : "Symbol()";
    case "undefined":
      return Ri(e);
    case "function":
    case "object": {
      if (e === null)
        return Ri(e);
      const t = e, r = Vt(t, "toString");
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
function Vt(e, t) {
  for (; e !== null; ) {
    const n = US(e, t);
    if (n) {
      if (n.get)
        return Xe(n.get);
      if (typeof n.value == "function")
        return Xe(n.value);
    }
    e = DS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function GS(e) {
  try {
    return Qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const Rd = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Sa = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), va = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), JS = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ma = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), YS = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), $d = nt(["#text"]), Id = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ea = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ld = nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ps = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), XS = ot(/{{[\w\W]*|^[\w\W]*}}/g), QS = ot(/<%[\w\W]*|^[\w\W]*%>/g), ZS = ot(/\${[\w\W]*/g), ev = ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), tv = ot(/^aria-[\-\w]+$/), Dd = ot(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), rv = ot(/^(?:\w+script|data):/i), nv = ot(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), iv = ot(/^html$/i), sv = ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Ud = ot(/<[/\w!]/g), Fd = ot(/<[/\w]/g), ov = ot(/<\/no(script|embed|frames)/i), av = ot(/\/>/i), Pt = {
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
}, cv = function() {
  return typeof window > "u" ? null : window;
}, lv = function(t, r) {
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
}, zd = function() {
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
}, Kr = function(t, r, n, i) {
  return Ze(t, r) && jr(t[r]) ? fe(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function mg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : cv();
  const t = (z) => mg(z);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Pt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Vt(f, "cloneNode"), g = Vt(f, "remove"), h = Vt(f, "nextSibling"), b = Vt(f, "childNodes"), x = Vt(f, "parentNode"), T = Vt(f, "shadowRoot"), v = Vt(f, "attributes"), A = o && o.prototype ? Vt(o.prototype, "nodeType") : null, S = o && o.prototype ? Vt(o.prototype, "nodeName") : null, D = o && o.prototype ? Vt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const z = r.createElement("template");
    z.content && z.content.ownerDocument && (r = z.content.ownerDocument);
  }
  let _, w = "", $, H = !1, Q = 0;
  const Ee = function() {
    if (Q > 0)
      throw mn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
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
    return H || ($ = lv(d, i), H = !0), $;
  }, rr = r, Re = rr.implementation, on = rr.createNodeIterator, _r = rr.createDocumentFragment, At = rr.getElementsByTagName, te = n.importNode;
  let P = zd();
  t.isSupported = typeof hg == "function" && typeof x == "function" && Re && Re.createHTMLDocument !== void 0;
  const J = XS, le = QS, W = ZS, _e = ev, yt = tv, Bt = rv, bt = nv, Ge = sv;
  let ut = Dd, ue = null;
  const Ln = fe({}, [...Rd, ...Sa, ...va, ...Ma, ...$d]);
  let be = null;
  const Si = fe({}, [...Id, ...Ea, ...Ld, ...Ps]);
  let Se = Object.seal(Yn(null, {
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
  })), Ir = null, Lr = null;
  const nr = Object.seal(Yn(null, {
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
  let Dr = !0, an = !0, vi = !1, ks = !0, jt = !1, R = !0, B = !1, Y = !1, X = null, ve = null, at = !1, dt = !1, cn = !1, ln = !1, ru = !0, nu = !1;
  const iu = "user-content-";
  let Go = !0, Ts = !1, Dn = {}, ir = null;
  const Jo = fe({}, [
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
  let su = null;
  const ou = fe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Yo = null;
  const au = fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), xs = "http://www.w3.org/1998/Math/MathML", _s = "http://www.w3.org/2000/svg", sr = "http://www.w3.org/1999/xhtml";
  let Un = sr, Xo = !1, Qo = null;
  const ny = fe({}, [xs, _s, sr], Ca), cu = nt(["mi", "mo", "mn", "ms", "mtext"]);
  let Zo = fe({}, cu);
  const lu = nt(["annotation-xml"]);
  let ea = fe({}, lu);
  const iy = fe({}, ["title", "style", "font", "a", "script"]);
  let Mi = null;
  const sy = ["application/xhtml+xml", "text/html"], oy = "text/html";
  let $e = null, Fn = null;
  const ay = r.createElement("form"), uu = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, ta = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Fn && Fn === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = ct(m), Mi = // eslint-disable-next-line unicorn/prefer-includes
    sy.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? oy : m.PARSER_MEDIA_TYPE, $e = Mi === "application/xhtml+xml" ? Ca : Di, ue = Kr(m, "ALLOWED_TAGS", Ln, {
      transform: $e
    }), be = Kr(m, "ALLOWED_ATTR", Si, {
      transform: $e
    }), Qo = Kr(m, "ALLOWED_NAMESPACES", ny, {
      transform: Ca
    }), Yo = Kr(m, "ADD_URI_SAFE_ATTR", au, {
      transform: $e,
      base: au
    }), su = Kr(m, "ADD_DATA_URI_TAGS", ou, {
      transform: $e,
      base: ou
    }), ir = Kr(m, "FORBID_CONTENTS", Jo, {
      transform: $e
    }), Ir = Kr(m, "FORBID_TAGS", ct({}), {
      transform: $e
    }), Lr = Kr(m, "FORBID_ATTR", ct({}), {
      transform: $e
    }), Dn = Ze(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? ct(m.USE_PROFILES) : m.USE_PROFILES : !1, Dr = m.ALLOW_ARIA_ATTR !== !1, an = m.ALLOW_DATA_ATTR !== !1, vi = m.ALLOW_UNKNOWN_PROTOCOLS || !1, ks = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, jt = m.SAFE_FOR_TEMPLATES || !1, R = m.SAFE_FOR_XML !== !1, B = m.WHOLE_DOCUMENT || !1, dt = m.RETURN_DOM || !1, cn = m.RETURN_DOM_FRAGMENT || !1, ln = m.RETURN_TRUSTED_TYPE || !1, at = m.FORCE_BODY || !1, ru = m.SANITIZE_DOM !== !1, nu = m.SANITIZE_NAMED_PROPS || !1, Go = m.KEEP_CONTENT !== !1, Ts = m.IN_PLACE || !1, ut = GS(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Dd, Un = typeof m.NAMESPACE == "string" ? m.NAMESPACE : sr, Zo = Ze(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(m.MATHML_TEXT_INTEGRATION_POINTS) : fe({}, cu), ea = Ze(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? ct(m.HTML_INTEGRATION_POINTS) : fe({}, lu);
    const C = Ze(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? ct(m.CUSTOM_ELEMENT_HANDLING) : Yn(null);
    if (Se = Yn(null), Ze(C, "tagNameCheck") && uu(C.tagNameCheck) && (Se.tagNameCheck = C.tagNameCheck), Ze(C, "attributeNameCheck") && uu(C.attributeNameCheck) && (Se.attributeNameCheck = C.attributeNameCheck), Ze(C, "allowCustomizedBuiltInElements") && typeof C.allowCustomizedBuiltInElements == "boolean" && (Se.allowCustomizedBuiltInElements = C.allowCustomizedBuiltInElements), ot(Se), jt && (an = !1), cn && (dt = !0), Dn && (ue = fe({}, $d), be = Yn(null), Dn.html === !0 && (fe(ue, Rd), fe(be, Id)), Dn.svg === !0 && (fe(ue, Sa), fe(be, Ea), fe(be, Ps)), Dn.svgFilters === !0 && (fe(ue, va), fe(be, Ea), fe(be, Ps)), Dn.mathMl === !0 && (fe(ue, Ma), fe(be, Ld), fe(be, Ps))), nr.tagCheck = null, nr.attributeCheck = null, Ze(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? nr.tagCheck = m.ADD_TAGS : jr(m.ADD_TAGS) && (ue === Ln && (ue = ct(ue)), fe(ue, m.ADD_TAGS, $e))), Ze(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? nr.attributeCheck = m.ADD_ATTR : jr(m.ADD_ATTR) && (be === Si && (be = ct(be)), fe(be, m.ADD_ATTR, $e))), Ze(m, "ADD_URI_SAFE_ATTR") && jr(m.ADD_URI_SAFE_ATTR) && fe(Yo, m.ADD_URI_SAFE_ATTR, $e), Ze(m, "FORBID_CONTENTS") && jr(m.FORBID_CONTENTS) && (ir === Jo && (ir = ct(ir)), fe(ir, m.FORBID_CONTENTS, $e)), Ze(m, "ADD_FORBID_CONTENTS") && jr(m.ADD_FORBID_CONTENTS) && (ir === Jo && (ir = ct(ir)), fe(ir, m.ADD_FORBID_CONTENTS, $e)), Go && (ue["#text"] = !0), B && fe(ue, ["html", "head", "body"]), ue.table && (fe(ue, ["tbody"]), delete Ir.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw mn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw mn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const L = _;
      _ = m.TRUSTED_TYPES_POLICY;
      try {
        w = re("");
      } catch (V) {
        throw _ = L, V;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (_ = void 0, w = "") : (_ === void 0 && (_ = ke()), _ && typeof w == "string" && (w = re("")));
    nt && nt(m), Fn = m;
  }, du = fe({}, [...Sa, ...va, ...JS]), fu = fe({}, [...Ma, ...YS]), cy = function(m, C, L) {
    return C.namespaceURI === sr ? m === "svg" : C.namespaceURI === xs ? m === "svg" && (L === "annotation-xml" || Zo[L]) : !!du[m];
  }, ly = function(m, C, L) {
    return C.namespaceURI === sr ? m === "math" : C.namespaceURI === _s ? m === "math" && ea[L] : !!fu[m];
  }, uy = function(m, C, L) {
    return C.namespaceURI === _s && !ea[L] || C.namespaceURI === xs && !Zo[L] ? !1 : !fu[m] && (iy[m] || !du[m]);
  }, dy = function(m) {
    let C = x(m);
    (!C || !C.tagName) && (C = {
      namespaceURI: Un,
      tagName: "template"
    });
    const L = Di(m.tagName), V = Di(C.tagName);
    return Qo[m.namespaceURI] ? m.namespaceURI === _s ? cy(L, C, V) : m.namespaceURI === xs ? ly(L, C, V) : m.namespaceURI === sr ? uy(L, C, V) : !!(Mi === "application/xhtml+xml" && Qo[m.namespaceURI]) : !1;
  }, Ur = function(m) {
    Gn(t.removed, {
      element: m
    });
    try {
      x(m).removeChild(m);
    } catch {
      if (g(m), !x(m))
        throw mn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Cs = function(m) {
    Ei(m);
    const C = b(m);
    if (C) {
      const V = [];
      Hn(C, (G) => {
        Gn(V, G);
      }), Hn(V, (G) => {
        try {
          g(G);
        } catch {
        }
      });
    }
    const L = v(m);
    if (L)
      for (let V = L.length - 1; V >= 0; --V) {
        const G = L[V], ie = G && G.name;
        if (typeof ie == "string")
          try {
            m.removeAttribute(ie);
          } catch {
          }
      }
  }, un = function(m, C) {
    try {
      Gn(t.removed, {
        attribute: C.getAttributeNode(m),
        from: C
      });
    } catch {
      Gn(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(m), m === "is")
      if (dt || cn)
        try {
          Ur(C);
        } catch {
        }
      else
        try {
          C.setAttribute(m, "");
        } catch {
        }
  }, fy = function(m) {
    const C = v(m);
    if (C)
      for (let L = C.length - 1; L >= 0; --L) {
        const V = C[L], G = V && V.name;
        if (!(typeof G != "string" || be[$e(G)]))
          try {
            m.removeAttribute(G);
          } catch {
          }
      }
  }, Ei = function(m) {
    const C = [m];
    for (; C.length > 0; ) {
      const L = C.pop();
      (A ? A(L) : L.nodeType) === Pt.element && fy(L);
      const G = b(L);
      if (G)
        for (let ie = G.length - 1; ie >= 0; --ie)
          C.push(G[ie]);
    }
  }, py = function(m) {
    if (!R)
      return;
    const C = [m];
    for (; C.length > 0; ) {
      const L = C.pop(), V = A ? A(L) : L.nodeType;
      if (V === Pt.processingInstruction || V === Pt.comment && Qe(Fd, L.data)) {
        try {
          g(L);
        } catch {
        }
        continue;
      }
      if (V === Pt.element) {
        const ie = L, Te = $e(S ? S(L) : L.nodeName);
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && Te !== "label" && Te !== "output" && ie.removeAttribute("for");
        } catch {
        }
      }
      const G = b(L);
      if (G)
        for (let ie = G.length - 1; ie >= 0; --ie)
          C.push(G[ie]);
    }
  }, pu = function(m) {
    let C = null, L = null;
    if (at)
      m = "<remove></remove>" + m;
    else {
      const ie = Nd(m, /^[\r\n\t ]+/);
      L = ie && ie[0];
    }
    Mi === "application/xhtml+xml" && Un === sr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const V = _ ? re(m) : m;
    if (Un === sr)
      try {
        C = new u().parseFromString(V, Mi);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = Re.createDocument(Un, "template", null);
      try {
        C.documentElement.innerHTML = Xo ? w : V;
      } catch {
      }
    }
    const G = C.body || C.documentElement;
    return m && L && G.insertBefore(r.createTextNode(L), G.childNodes[0] || null), Un === sr ? At.call(C, B ? "html" : "body")[0] : B ? C.documentElement : G;
  }, hu = function(m) {
    const C = D ? D(m) : m.ownerDocument;
    return on.call(
      C || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ss = function(m) {
    return m = qi(m, J, " "), m = qi(m, le, " "), m = qi(m, W, " "), m;
  }, ra = function(m) {
    var C;
    m.normalize();
    const L = D ? D(m) : m.ownerDocument, V = on.call(
      L || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let G = V.nextNode();
    for (; G; )
      G.data = Ss(G.data), G = V.nextNode();
    const ie = (C = m.querySelectorAll) === null || C === void 0 ? void 0 : C.call(m, "template");
    ie && Hn(ie, (Te) => {
      zn(Te.content) && ra(Te.content);
    });
  }, vs = function(m) {
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
  }, zn = function(m) {
    if (!A || typeof m != "object" || m === null)
      return !1;
    try {
      return A(m) === Pt.documentFragment;
    } catch {
      return !1;
    }
  }, Ai = function(m) {
    if (!A || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof A(m) == "number";
    } catch {
      return !1;
    }
  };
  function or(z, m, C) {
    z.length !== 0 && Hn(z, (L) => {
      L.call(t, m, C, Fn);
    });
  }
  const hy = function(m, C) {
    return !!(R && m.hasChildNodes() && !Ai(m.firstElementChild) && Qe(Ud, m.textContent) && Qe(Ud, m.innerHTML) || R && m.namespaceURI === sr && C === "style" && Ai(m.firstElementChild) || m.nodeType === Pt.processingInstruction || R && m.nodeType === Pt.comment && Qe(Fd, m.data));
  }, gy = function(m, C, L) {
    if (!Ir[C] && bu(C) && (Se.tagNameCheck instanceof RegExp && Qe(Se.tagNameCheck, C) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(C)))
      return !1;
    if (Go && !ir[C]) {
      const V = x(m), G = b(m);
      if (G && V) {
        const ie = G.length;
        for (let Te = ie - 1; Te >= 0; --Te) {
          const Ie = m === L ? p(G[Te], !0) : G[Te];
          V.insertBefore(Ie, h(m));
        }
      }
    }
    return Ur(m), !0;
  }, gu = function(m, C, L, V) {
    return m.length === 0 ? C : C === L || C === V ? ct(C) : C;
  }, mu = function(m, C) {
    if (or(P.beforeSanitizeElements, m, null), m !== C && x(m) === null)
      return Ts && Ei(m), !0;
    if (vs(m))
      return Ur(m), !0;
    const L = $e(S ? S(m) : m.nodeName);
    if (ue = gu(P.uponSanitizeElement, ue, Ln, X), or(P.uponSanitizeElement, m, {
      tagName: L,
      allowedTags: ue
    }), m !== C && x(m) === null)
      return Ts && Ei(m), !0;
    if (hy(m, L))
      return Ur(m), !0;
    if (Ir[L] || !(nr.tagCheck instanceof Function && nr.tagCheck(L)) && !ue[L]) {
      const G = gy(m, L, C);
      return G === !1 && or(P.afterSanitizeElements, m, null), G;
    }
    if ((A ? A(m) : m.nodeType) === Pt.element && !dy(m) || (L === "noscript" || L === "noembed" || L === "noframes") && Qe(ov, m.innerHTML))
      return Ur(m), !0;
    if (jt && m.nodeType === Pt.text) {
      const G = Ss(m.textContent);
      m.textContent !== G && (Gn(t.removed, {
        element: m.cloneNode()
      }), m.textContent = G);
    }
    return or(P.afterSanitizeElements, m, null), !1;
  }, yu = function(m, C, L) {
    if (Lr[C] || R && C === "patchsrc" || R && C === "for" && m !== "label" && m !== "output" || ru && (C === "id" || C === "name") && (L in r || L in ay))
      return !1;
    const V = be[C] || nr.attributeCheck instanceof Function && nr.attributeCheck(C, m);
    if (!(an && Qe(_e, C))) {
      if (!(Dr && Qe(yt, C))) {
        if (V) {
          if (!Yo[C]) {
            if (!Qe(ut, qi(L, bt, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && m !== "script" && wd(L, "data:") === 0 && su[m])) {
                if (!(vi && !Qe(Bt, qi(L, bt, "")))) {
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
          !(bu(m) && (Se.tagNameCheck instanceof RegExp && Qe(Se.tagNameCheck, m) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(m)) && (Se.attributeNameCheck instanceof RegExp && Qe(Se.attributeNameCheck, C) || Se.attributeNameCheck instanceof Function && Se.attributeNameCheck(C, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          C === "is" && Se.allowCustomizedBuiltInElements && (Se.tagNameCheck instanceof RegExp && Qe(Se.tagNameCheck, L) || Se.tagNameCheck instanceof Function && Se.tagNameCheck(L)))
        ) return !1;
      }
    }
    return !0;
  }, my = fe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), bu = function(m) {
    return !my[Di(m)] && Qe(Ge, m);
  }, yy = function(m, C, L, V) {
    if (_ && typeof d == "object" && typeof d.getAttributeType == "function" && !L)
      switch (d.getAttributeType(m, C)) {
        case "TrustedHTML":
          return re(V);
        case "TrustedScriptURL":
          return qe(V);
      }
    return V;
  }, by = function(m, C, L, V) {
    try {
      L ? m.setAttributeNS(L, C, V) : m.setAttribute(C, V), vs(m) ? Ur(m) : Pd(t.removed);
    } catch {
      un(C, m);
    }
  }, ku = function(m) {
    or(P.beforeSanitizeAttributes, m, null);
    const C = m.attributes;
    if (!C || vs(m))
      return;
    be = gu(P.uponSanitizeAttribute, be, Si, ve);
    const L = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: be,
      forceKeepAttr: void 0
    };
    let V = C.length;
    const G = $e(m.nodeName);
    for (; V--; ) {
      const ie = C[V], Te = ie.name, Ie = ie.namespaceURI, kt = ie.value, Tt = $e(Te), ia = kt;
      let ft = Te === "value" ? ia : KS(ia);
      if (L.attrName = Tt, L.attrValue = ft, L.keepAttr = !0, L.forceKeepAttr = void 0, or(P.uponSanitizeAttribute, m, L), ft = L.attrValue, nu && (Tt === "id" || Tt === "name") && wd(ft, iu) !== 0 && (un(Te, m), ft = iu + ft), R && Qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        un(Te, m);
        continue;
      }
      if (Tt === "attributename" && Nd(ft, "href")) {
        un(Te, m);
        continue;
      }
      if (!L.forceKeepAttr) {
        if (!L.keepAttr) {
          un(Te, m);
          continue;
        }
        if (!ks && Qe(av, ft)) {
          un(Te, m);
          continue;
        }
        if (jt && (ft = Ss(ft)), !yu(G, Tt, ft)) {
          un(Te, m);
          continue;
        }
        ft = yy(G, Tt, Ie, ft), ft !== ia && by(m, Te, Ie, ft);
      }
    }
    or(P.afterSanitizeAttributes, m, null);
  }, Ms = function(m) {
    let C = null;
    const L = hu(m);
    for (or(P.beforeSanitizeShadowDOM, m, null); C = L.nextNode(); )
      if (or(P.uponSanitizeShadowNode, C, null), mu(C, m), ku(C), zn(C.content) && Ms(C.content), (A ? A(C) : C.nodeType) === Pt.element) {
        const G = T(C);
        zn(G) && (na(G), Ms(G));
      }
    or(P.afterSanitizeShadowDOM, m, null);
  }, na = function(m) {
    const C = [{
      node: m,
      shadow: null
    }];
    for (; C.length > 0; ) {
      const L = C.pop();
      if (L.shadow) {
        Ms(L.shadow);
        continue;
      }
      const V = L.node, ie = (A ? A(V) : V.nodeType) === Pt.element, Te = b(V);
      if (Te)
        for (let Ie = Te.length - 1; Ie >= 0; --Ie)
          C.push({
            node: Te[Ie],
            shadow: null
          });
      if (ie) {
        const Ie = S ? S(V) : null;
        if (typeof Ie == "string" && $e(Ie) === "template") {
          const kt = V.content;
          zn(kt) && C.push({
            node: kt,
            shadow: null
          });
        }
      }
      if (ie) {
        const Ie = T(V);
        zn(Ie) && C.push({
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
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, L = null, V = null, G = null;
    if (Xo = !z, Xo && (z = "<!-->"), typeof z != "string" && !Ai(z) && (z = HS(z), typeof z != "string"))
      throw mn("dirty is not a string, aborting");
    if (!t.isSupported)
      return z;
    Y ? (ue = X, be = ve) : ta(m), (P.uponSanitizeElement.length > 0 || P.uponSanitizeAttribute.length > 0) && (ue = ct(ue)), P.uponSanitizeAttribute.length > 0 && (be = ct(be)), t.removed = [];
    const ie = Ts && typeof z != "string" && Ai(z);
    if (ie) {
      py(z);
      const kt = S ? S(z) : z.nodeName;
      if (typeof kt == "string") {
        const Tt = $e(kt);
        if (!ue[Tt] || Ir[Tt])
          throw Cs(z), mn("root node is forbidden and cannot be sanitized in-place");
      }
      if (vs(z))
        throw Cs(z), mn("root node is clobbered and cannot be sanitized in-place");
      try {
        na(z);
      } catch (Tt) {
        throw Cs(z), Tt;
      }
    } else if (Ai(z))
      C = pu("<!---->"), L = C.ownerDocument.importNode(z, !0), L.nodeType === Pt.element && L.nodeName === "BODY" || L.nodeName === "HTML" ? C = L : C.appendChild(L), na(L);
    else {
      if (!dt && !jt && !B && // eslint-disable-next-line unicorn/prefer-includes
      z.indexOf("<") === -1)
        return _ && ln ? re(z) : z;
      if (C = pu(z), !C)
        return dt ? null : ln ? w : "";
    }
    C && at && Ur(C.firstChild);
    const Te = ie ? z : C;
    try {
      const kt = hu(Te);
      for (; V = kt.nextNode(); )
        mu(V, Te), ku(V), zn(V.content) && Ms(V.content);
    } catch (kt) {
      throw ie && (Cs(z), Hn(t.removed, (Tt) => {
        Tt.element && Ei(Tt.element);
      })), kt;
    }
    if (ie)
      return Hn(t.removed, (kt) => {
        kt.element && Ei(kt.element);
      }), jt && ra(z), z;
    if (dt) {
      if (jt && ra(C), cn)
        for (G = _r.call(C.ownerDocument); C.firstChild; )
          G.appendChild(C.firstChild);
      else
        G = C;
      return (be.shadowroot || be.shadowrootmode) && (G = te.call(n, G, !0)), G;
    }
    let Ie = B ? C.outerHTML : C.innerHTML;
    return B && ue["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && Qe(iv, C.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + Ie), jt && (Ie = Ss(Ie)), _ && ln ? re(Ie) : Ie;
  }, t.setConfig = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ta(z), Y = !0, X = ue, ve = be;
  }, t.clearConfig = function() {
    Fn = null, Y = !1, X = null, ve = null, _ = $, w = "";
  }, t.isValidAttribute = function(z, m, C) {
    Fn || ta({});
    const L = $e(z), V = $e(m);
    return yu(L, V, C);
  }, t.addHook = function(z, m) {
    typeof m == "function" && Ze(P, z) && Gn(P[z], m);
  }, t.removeHook = function(z, m) {
    if (Ze(P, z)) {
      if (m !== void 0) {
        const C = FS(P[z], m);
        return C === -1 ? void 0 : zS(P[z], C, 1)[0];
      }
      return Pd(P[z]);
    }
  }, t.removeHooks = function(z) {
    Ze(P, z) && (P[z] = []);
  }, t.removeAllHooks = function() {
    P = zd();
  }, t;
}
var uv = mg();
function dv({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = Z(void 0), [n, i] = de(void 0), s = he((o) => {
    r.current = o, i(o);
  }, []);
  return K(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const g = ag(p);
      if (!g)
        return !1;
      const h = q();
      return e === "protected" ? h && dg(h, g) ? (p.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, p);
    }, a = (p, g) => {
      const h = q(), b = r.current;
      if (b && h && Md(h, b)) {
        if (s(void 0), g.preventDefault(), p !== b.intent)
          return !0;
        const T = se(b.key) ?? void 0;
        if (b.kind === "verse") {
          if (T) {
            const v = T.getParent(), A = T.getPreviousSibling(), S = T.getNextSibling();
            T.remove(), A ? fg(A) : S && E(S) ? S.select(0, 0) : v?.selectStart();
          }
        } else b.kind === "selection" ? N(h) && h.removeText() : tt(T) && NS(T);
        return !0;
      }
      if (!h)
        return !1;
      const x = PS(h, p);
      if (x) {
        if (x.kind === "verse") {
          const T = Df();
          T.add(x.node.getKey()), si(T);
        } else {
          const T = $c();
          T.anchor.set(x.node.getKey(), 0, "element"), T.focus.set(x.node.getKey(), x.node.getChildrenSize(), "element"), si(T);
        }
        return s({ key: x.node.getKey(), kind: x.kind, intent: p }), g.preventDefault(), !0;
      }
      if (N(h) && !h.isCollapsed() && ql(h)) {
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
      return !g || !ti(g) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, g) => {
      if (!p)
        return !1;
      const h = uv.sanitize(p), b = new DOMParser().parseFromString(h, "text/html"), x = wS(fb(t, b)), T = q();
      return N(T) && T.insertNodes(x), g.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const g = q();
      return g && ti(g) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const g = q();
      return g && ti(g) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Md(q(), p) || s(void 0);
      });
    };
    return Ve(
      t.registerCommand(Pr, o, Ce),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(_n, c, Gt),
      t.registerCommand(vr, u, Ce),
      t.registerCommand(Vy, c, Ce),
      t.registerCommand(Dc, d, Ce),
      t.registerCommand(Lc, c, Ce),
      t.registerUpdateListener(f)
    );
  }, [t, e, s]), K(() => {
    const o = t.getRootElement();
    if (!o)
      return;
    const a = !!n && n.kind !== "para";
    return o.classList.toggle("verse-delete-armed", !!n), a ? (o.setAttribute("data-verse-delete-intent", n.intent), o.setAttribute("data-verse-delete-kind", n.kind)) : (o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind")), () => {
      o.classList.remove("verse-delete-armed"), o.removeAttribute("data-verse-delete-intent"), o.removeAttribute("data-verse-delete-kind");
    };
  }, [t, n]), null;
}
const QP = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function fv({ textDirection: e }) {
  const [t] = ae();
  return pv(t, e), null;
}
function pv(e, t) {
  K(() => (Kd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Kd(e, t);
  })), [e, t]);
}
function Kd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function hv() {
  const [e] = ae();
  return gv(e), null;
}
function gv(e) {
  K(() => {
    if (!e.hasNodes([ye, Mt, Ae, Be, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Ve(
      e.registerNodeTransform(Be, mv),
      e.registerNodeTransform(Be, (t) => yv(t, e)),
      e.registerNodeTransform(pt, Bd),
      e.registerNodeTransform(Mt, Bd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        ts(Mn("va"), t), ts(Mn("vp"), t);
      })
    );
  }, [e]);
}
function mv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || j(r) || U(n) || U(r) || me(n) || me(r) || De(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  De(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
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
  Le(n))
    return;
  if (ge(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ge(r) && fl(e);
}
function yv(e, t) {
  const r = e.getParent();
  !De(r) || !e.isAttached() || Za(t, e.getKey()) && !Za(t, r.getKey()) && r.insertAfter(e);
}
function Bd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; me(t); )
    t = t.getLastChild();
  (U(t) || E(t) && me(t.getParent())) && e.insertBefore(pe(" "));
}
function Rl(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Xc(n)) ? void 0 : e;
}
function bv(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (F(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function kv() {
  const e = q();
  if (!(!N(e) || !e.isCollapsed()))
    return Rl(bv(e.anchor));
}
function Tv(e) {
  const t = q();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = yg(e.target)), r ? Rl(je(r, j)) : void 0;
}
function yg(e) {
  const t = Wy(e)?.anchorNode;
  if (Lf(t))
    return gi(t) ?? void 0;
}
function xv(e) {
  if (q())
    return;
  const t = yg(e);
  return t ? Rl(je(t, j)) : void 0;
}
function _v() {
  const [e] = ae(), t = sg(kv);
  return K(() => {
    const r = (n) => {
      Wr(Hr), t(n);
    };
    return Ve(e.registerCommand(fr, () => {
      const n = xv(e.getRootElement());
      return n && r(n), !1;
    }, xn), e.registerCommand(yo, (n) => {
      const i = Tv(n);
      return i && r(i), !1;
    }, xn));
  }, [e, t]), null;
}
function Cv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = F_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return M(U_, { trigger: e, items: i });
}
function Sv({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Ke(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? M(Ev, { trigger: e, harness: i }) : M(Cv, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const vv = [" ", "*"];
function Mv(e, t) {
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
function Ev({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = de(void 0), s = Z({ query: "", options: [] }), o = Z(0), a = he((f, p, g) => {
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
  K(() => Ve(r.registerCommand(Pr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const h = s.current.query;
        return h ? (a(h, n.items, !1), Hy(() => {
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
  }, Ce), r.registerCommand(Uf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, Qn)), [r, e, t, n, a]);
  const c = he(() => i(void 0), []), l = he((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = he((f) => {
    const { markerMenuItem: p, applyOpts: g } = f;
    t.apply(p, g);
  }, [t]), d = Ke(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    Mv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && M(Dh, { isOpen: !0, children: ({ placement: f }) => M(
    zh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? vv : void 0 },
    n.session
  ) });
}
function Av(e) {
  return e.replaceAll(I, "~").replace(/ {2,}/g, (r) => I.repeat(r.length));
}
function Pv(e) {
  return e.replaceAll(I, " ").replaceAll("~", I);
}
function Nv(e) {
  return e.replace(/ {2,}/g, " ");
}
let io;
function wv(e) {
  e && (io = e);
}
function bg(e) {
  return Lo(e);
}
function Ov(e, t) {
  return e.isEmpty() ? Of : kg(e.toJSON(), t);
}
function kg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && _o(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Of;
  if (r.some(cx)) {
    io?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Tg(r), i = Wt(n, t);
  return i ? { type: dr, version: ur, content: i } : void 0;
}
function qv(e, t) {
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
function Rv(e) {
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
function $v(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Up(r, a, c), Pe({
    type: qt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Iv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Up(t, o, a), Pe({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function Lv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !bg(r) && t) {
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
function Dv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Uv(e, t) {
  const { unknownAttributes: r } = e;
  return Pe({ type: ph, ...r, content: t });
}
function Fv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Pe({ type: mh, marker: r, ...n, content: t });
}
function zv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Pe({
    type: bh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function Kv(e, t) {
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
function Xn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Pe({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Gp({ sid: n, eid: i, ...s }, o)
  });
}
function Bv(e) {
  return e.text;
}
function jv(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Vv(e) {
  const { marker: t } = e;
  return {
    type: Hs,
    marker: t === "" ? void 0 : t
  };
}
function jd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function Wv(e, t, r, n, i) {
  const s = Xt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Xn({
      type: s,
      marker: Zn,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Xn({
      type: s,
      marker: Cn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Xn({
      type: s,
      marker: Cn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Xn({
      type: s,
      marker: Zn
    });
    i.push(l);
  }
  (!n || !gp(n)) && t.forEach((l) => {
    const u = Xn({
      type: s,
      marker: Zn,
      eid: l
    });
    i.push(u);
  });
}
function Wt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, g = a, h = a, b = a;
    switch (a.type) {
      case Kt.getType():
        i.push(
          qv(
            l,
            Wt(l.children, t)
          )
        );
        break;
      case Tr.getType():
        i.push(Rv(a));
        break;
      case qt.getType():
        i.push(
          $v(
            u,
            Wt(u.children, t)
          )
        );
        break;
      case Mt.getType():
      case pt.getType():
        i.push(Iv(a));
        break;
      case ye.getType():
        i.push(
          Lv(
            d,
            Wt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case rt.getType():
        i.push(
          Dv(
            f,
            Wt(f.children, t)
          )
        );
        break;
      case Rn.getType():
        i.push(
          Uv(
            a,
            Wt(a.children, t)
          )
        );
        break;
      case bi.getType():
        i.push(
          Fv(
            a,
            Wt(a.children, t)
          )
        );
        break;
      case ki.getType():
        i.push(
          zv(
            a,
            Wt(a.children, t)
          )
        );
        break;
      case Ae.getType():
        i.push(
          Kv(
            p,
            Wt(p.children, t, p.caller)
          )
        );
        break;
      case wr.getType():
      case Nr.getType():
      case Yt.getType():
      case Ff.getType():
      case xr.getType():
        break;
      case et.getType():
        if (s = Wt(
          h.children,
          t,
          r,
          n
        ), s) {
          const x = h.typedIDs[Vr];
          if (x)
            Wv(s, x, o, e[c + 1], i), o = x;
          else {
            const T = s.shift();
            T && (typeof T == "string" ? jd(i, T) : i.push(T)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Xt.getType():
        i.push(Xn(a));
        break;
      case Be.getType():
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !ms(g.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        g.text !== I && !g.text.startsWith(zc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[hs]?.textType !== "attribute" && (!r || g.text !== wt(r))) {
          let x = Bv(g);
          bg(t) && (n && x.startsWith(I) && (x = x.slice(1)), x = Nv(Pv(x))), jd(i, x);
        }
        break;
      case qn.getType():
        i.push(
          jv(
            b,
            Wt(b.children, t)
          )
        );
        break;
      case Rr.getType():
        i.push(Vv(a));
        break;
      case Ti.getType():
        io?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        io?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Tg(e) {
  const t = e.findIndex((r) => _o(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Tg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const $s = {
  initialize: wv,
  deserializeEditorState: Ov
}, Hv = /^sd\d*$/, Gv = /* @__PURE__ */ new Set([
  ...Object.entries(Ua).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === y.Paragraph && !Hv.test(e)
  ).map(([e]) => e),
  "qa"
]);
function Jv(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Gc(i) || $p(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Rk(i)) {
      t && so(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Yc(i) && Gv.has(i.marker) && !so(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    xg(i.children, t).forEach((s) => {
      const o = Yv(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = Xv(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function xg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (_g(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (gp(i)) {
      const s = xg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Vd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Vd(i, c.nodes)] });
      });
      return;
    }
    t && so(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Vd(e, t) {
  return { ...e, children: t };
}
function _g(e) {
  return Eh(e) && e.number !== "";
}
function so(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => _g(r) || so(r)) : !1;
}
function Yv(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function Xv(e) {
  return {
    type: Gs,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Sh
  };
}
const Wd = vg([]), Qv = {
  type: Ff.getType(),
  version: 1
};
let $l = [], ee, Pn, Cg, vt;
function Zv(e, t) {
  $l = [], rM(e), nM(t);
}
function eM(e = 0) {
}
function tM(e, t) {
  ee = t ?? Io();
  let r;
  return e ? (e.type !== dr && vt?.warn(`This USJ type '${e.type}' didn't match the expected type '${dr}'.`), e.version !== ur && vt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${ur}'.`
  ), e.content.length > 0 ? (r = hc(Cr(e.content)), is(ee) && (r = Jv(r, vt))) : r = [Wd]) : r = [Wd], Cg?.($l), {
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
function rM(e) {
  e && (Pn = e), e?.addMissingComments && (Cg = e.addMissingComments);
}
function nM(e) {
  e && (vt = e);
}
function Sg() {
  return Lo(ee);
}
function iM(e, t) {
  let { marker: r } = e;
  r !== Yi && vt?.warn(`Unexpected book marker '${r}'!`), r = r ?? Yi;
  const { code: n } = e;
  (!n || !Kt.isValidBookCode(n)) && vt?.warn(`Unexpected book code '${n}'!`);
  const i = [];
  ee?.markerMode === "editable" || ee?.markerMode === "visible" ? i.push(
    _t("marker", Oe(r) + " " + n + I)
  ) : ee?.hasGutterParaMarkers && i.push(_t("marker", Oe(r) + I, !0)), i.push(...t);
  const s = Fe(e, hk);
  return Pe({
    type: Kt.getType(),
    marker: r,
    code: n ?? "",
    unknownAttributes: s,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Tp
  });
}
function sM(e) {
  let { marker: t } = e;
  t !== js && vt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? js;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Fe(e, gk);
  let a;
  ee?.markerMode === "visible" && (a = !0);
  const c = [
    mt(Ft(t, r) ?? "")
  ];
  return ee?.markerMode === "editable" && _M(i, s, c), ee?.markerMode === "editable" ? Pe({
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
    version: _p
  }) : Pe({
    type: Tr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Ep
  });
}
function oM(e) {
  let { marker: t } = e;
  t !== Vs && vt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Vs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (J_(ee) ?? Mt).getType(), c = ee?.markerMode === "editable" ? Op : Mh;
  let l, u;
  ee?.markerMode === "editable" ? l = Ft(t, r) : ee?.markerMode === "visible" && (u = !0);
  const d = Fe(e, Ak);
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
function aM(e, t = [], r = !1) {
  let { marker: n } = e;
  ye.isValidMarker(n, Pn?.extraValidMarkers) || vt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ee?.markerMode === "editable") {
    const [a] = t;
    ci(a) ? a.text = I + a.text : a && t.unshift(mt(I));
  }
  t.length === 0 && t.push(mt(zt)), dc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Fe(e, bk);
  return s || bM(n, o, i), s || fc(e.marker ?? "", i, !1, r), Pe({
    type: ye.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Mp
  });
}
function vg(e) {
  return {
    type: Jr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Np
  };
}
function cM(e, t = []) {
  let { marker: r } = e;
  rt.isValidMarker(r, Pn?.extraValidMarkers) || vt?.warn(`Unexpected para marker '${r}'!`), r = r ?? Ut;
  const n = [];
  if (In(ee) && (ee?.markerMode === "editable" ? n.push(
    ht(r),
    mt(I, kr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && n.push(
    _t(
      "marker",
      Oe(r) + I,
      ee?.hasGutterParaMarkers
    )
  )), n.push(...t), Sg()) {
    const s = n.find(
      (o) => !nl(o) && !(ci(o) && o.text === I)
    );
    ci(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => I.repeat(o.length)));
  }
  const i = Fe(e, Mk);
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
    version: wp
  });
}
function Il() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function lM(e, t = []) {
  const r = Fe(e, PT);
  return Pe({
    ...Il(),
    type: Rn.getType(),
    unknownAttributes: r,
    children: t,
    version: hh
  });
}
function uM(e, t = []) {
  const r = Fe(e, OT), n = e.marker ?? Ga, i = [];
  return ee?.markerMode === "editable" ? i.push(
    ht(n),
    mt(I, kr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && i.push(
    _t(
      "marker",
      Oe(n) + I,
      ee?.hasGutterParaMarkers
    )
  ), i.push(...t), Pe({
    ...Il(),
    type: bi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: yh
  });
}
function dM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Ja, a = oh(o, i) ?? o;
  ee?.markerMode === "editable" ? s.push(
    ht(a),
    mt(I, kr, "token")
  ) : (ee?.markerMode === "visible" || ee?.hasGutterParaMarkers) && s.push(
    _t(
      "marker",
      Oe(a) + I,
      ee?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Fe(
    e,
    RT
  );
  return Pe({
    ...Il(),
    type: ki.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: kh
  });
}
function fM(e, t) {
  const r = Fk(t);
  let n = () => {
  };
  return Pn?.noteCallerOnClick && (n = Pn.noteCallerOnClick), Pe({
    type: Yt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Rh
  });
}
function pM(e, t) {
  let { marker: r } = e;
  Ae.isValidMarker(r, Pn?.extraValidMarkers) || vt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Bc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : kl(ee?.noteMode), a = Fe(e, wb), c = ee?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ee?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (u = ht(r, "closing"))) : ee?.markerMode === "visible" && (l = _t("marker", Oe(r) + " "), s || (u = _t("marker", st(r))));
  const d = [];
  let f;
  if (l && d.push(l), ee?.markerMode === "editable" && !o)
    f = mt(wt(i), void 0, c), d.push(f), xM(n, d), d.push(...t);
  else {
    const p = mt(I, kr, "token");
    f = fM(i, t), d.push(f, p, ...t.flatMap(hM(p)));
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
    version: ap
  });
}
function hM(e) {
  return (t) => pp(t) ? [t] : [t, e];
}
function gM(e) {
  let { marker: t } = e;
  (!t || !Xt.isValidMarker(t, Pn?.extraValidMarkers)) && vt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Fe(e, Kc), s = Jp(e);
  return Pe({
    type: Xt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: ip
  });
}
function Hd(e, t = []) {
  return {
    type: et.getType(),
    typedIDs: { [Vr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function mM(e, t) {
  const { marker: r } = e, n = e.type, i = Fe(e, lk), s = [];
  if (ee?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = ah(
      n,
      r,
      i
    );
    o && s.push(_t("marker", o)), a && s.push(_t("attribute", a)), s.push(...t), c && s.push(_t("attribute", c)), l && s.push(_t("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    ci(o) && (o.mode = "token");
  }), Pe({
    type: qn.getType(),
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
function yM(e) {
  return {
    type: Rr.getType(),
    marker: e,
    text: Ki(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ee?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: dh
  };
}
function ht(e, t = "opening", r = !1, n = "normal") {
  return {
    type: xr.getType(),
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
function mt(e, t = void 0, r = "normal") {
  const n = {
    type: Be.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[hs] = { textType: t }), n;
}
function _t(e, t, r = !1) {
  const n = {
    type: Nr.getType(),
    text: t,
    textType: e,
    version: fp
  };
  return r && (n[hs] = { [Wc.key]: !0 }), n;
}
function ss(e, t) {
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
function dc(e, t, r = !1) {
  ee?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : ee?.markerMode === "visible" && t.push(_t("marker", Oe(e, r)));
}
function fc(e, t, r = !1, n = !1) {
  ee?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : ee?.markerMode === "visible" && t.push(
    _t(
      "marker",
      r ? st("") : st(e, n)
    )
  );
}
function bM(e, t, r) {
  if (ee?.markerMode !== "editable" || !t) return;
  const n = cr(t, To(e));
  n && r.push(mt(n, "attribute"));
}
function Gd(e, t) {
  if (e.type !== "ms" || ee?.markerMode !== "editable" && ee?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Fe(e, Kc), o = Yp(
    n,
    i,
    s,
    Jp(e)
  ), a = cr(o, xo(r ?? ""));
  if (!a) return;
  const c = I + a;
  ee?.markerMode === "editable" ? t.push(mt(c, "attribute")) : t.push(_t("attribute", c));
}
function kM(e, t) {
  const r = e.marker ?? "";
  if (ee?.markerMode === "editable") {
    const n = [];
    dc(r, n), Gd(e, n), fc(r, n, !0), t.push(ss("milestone", n));
  } else
    dc(r, t), Gd(e, t), fc(r, t, !0);
}
function Jd(e, t, r) {
  t !== void 0 && r.push(
    ss(e, [
      ht(e, "opening"),
      mt(I + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function TM(e, t) {
  ee?.markerMode === "editable" && (Jd("va", e.altnumber, t), Jd("vp", e.pubnumber, t));
}
function xM(e, t) {
  e !== void 0 && t.push(
    ss("cat", [
      ht("cat", "opening"),
      mt(I + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function _M(e, t, r) {
  e !== void 0 && r.push(
    ss("ca", [
      ht("ca", "opening"),
      mt(I + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    ss("cp", [
      ht("cp", "opening"),
      mt(I + t, "attribute")
    ])
  );
}
function Yd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function CM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Xd(e, t) {
  t.marker === Cn && t.sid !== void 0 && e.push(t.sid), t.marker === Zn && t.eid !== void 0 && CM(e, t.eid);
}
function pc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Hd(o, [...n])] : o, c = e[i];
  Xd(n, c);
  const l = pc(
    e.slice(i + 1, s),
    Yd(t, i + 1),
    c.marker === Cn,
    n
  ), u = Hd(l, [...n]), d = e[s];
  Xd(n, d);
  const f = pc(
    e.slice(s + 1),
    Yd(t, s + 1),
    d.marker === Cn,
    n
  );
  return [...a, u, ...f];
}
function Cr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(mt(Sg() ? Av(i) : i));
    else if (!i.type)
      vt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Kt.getType():
          n.push(iM(i, Cr(i.content)));
          break;
        case qt.getType():
          n.push(sM(i));
          break;
        case pt.getType():
          ee?.hasSpacing || n.push(Qv), n.push(oM(i)), TM(i, n);
          break;
        case ye.getType():
          n.push(
            aM(i, Cr(i.content, !0), t)
          );
          break;
        case rt.getType():
          n.push(cM(i, Cr(i.content)));
          break;
        case Ae.getType():
          n.push(pM(i, Cr(i.content)));
          break;
        case Xt.getType():
          sp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && $l?.push(i.sid)), n.push(gM(i)), kM(i, n);
          break;
        case Rr.getType():
          n.push(yM(i.marker ?? ""));
          break;
        case ph:
          n.push(lM(i, Cr(i.content)));
          break;
        case mh:
          n.push(uM(i, Cr(i.content)));
          break;
        case bh:
          n.push(dM(i, Cr(i.content)));
          break;
        default:
          vt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(mM(i, Cr(i.content)));
      }
  }), pc(n, r);
}
function hc(e) {
  const t = e.findIndex(
    (n) => Gc(n) || $p(n) || Yc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    wT(n)
  );
  if (t >= 0) {
    const n = hc(e.slice(0, t)), i = e[t], s = hc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Eh(n)))
    return [vg(e)];
  return e;
}
const hr = {
  initialize: Zv,
  reset: eM,
  serializeEditorState: tM
};
function Mg(e) {
  if (e && !O(e)) {
    if (E(e)) return e;
    if (F(e))
      for (const t of e.getChildren()) {
        const r = Mg(t);
        if (r) return r;
      }
  }
}
function SM() {
  const e = q();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !O(t) ? An(t) : void 0) && E(t)) {
      const i = pe(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      li(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Mg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(I) ? I : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of Eg(e)) {
    if (!An(t)) continue;
    li(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(I) && r.setTextContent(n.slice(I.length));
  }
  return !0;
}
function Eg(e) {
  const [t, r] = Ic(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || O(a) || ne(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function Ag(e) {
  let t = e.getParent();
  for (; U(t) || me(t); ) t = t.getParent();
  return tt(t) ? t : void 0;
}
function vM() {
  const e = q();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return An(t) ? !!Ag(t) : !1;
}
function Pg(e) {
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
    else return { parent: null, moving: [] };
  }
  for (let o = t.getParent(); ; o = t.getParent())
    if (U(o)) li(t, { renderGlyphs: !0 });
    else if (!me(o) || !MM(t, o)) break;
  const i = t.getNextSiblings(), s = t.getParent();
  return t.remove(), { parent: s, moving: i };
}
function MM(e, t) {
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
function Ng(e) {
  const t = e.anchor.getNode();
  if (O(t) && !ul(t, e.anchor.offset)) {
    const r = t.getParent();
    if (U(r) && t.is(r.getLastChild())) {
      r.selectNext(0, 0);
      const n = q();
      return N(n) && n.isCollapsed() ? n : void 0;
    }
  }
  return e;
}
function wg() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Ng(e);
  if (!t) return !1;
  const r = t.anchor.getNode();
  if (!E(r) || O(r) || !An(r)) return !1;
  const n = Ag(r);
  if (!n) return !1;
  const { moving: i } = Pg(t.anchor), s = n.insertNewAfter(t, !1);
  s.append(...i);
  let o = i[0];
  for (; me(o); ) o = o.getFirstChild() ?? void 0;
  return U(o) ? No(o) : s.select(0, 0), !0;
}
const Og = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Ip(ze().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = q(), t = el(e), r = hl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Kk(0, o);
        const a = xx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || jp(c) && tl(parseInt(n, 10), c);
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
function gc(e, t) {
  return Ae.isValidMarker(e, t) || !!Og[e] || rt.isValidMarker(e, t) || ye.isValidMarker(e, t);
}
function EM(e, t) {
  return ye.isNoteContentMarker(e) ? !1 : ye.isValidMarker(e, t);
}
function qg(e, t, r, n, i, s) {
  const o = Ih(
    e,
    void 0,
    void 0,
    t,
    n ?? Io(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function mc(e, t, r, n, i, s, o) {
  if (Ae.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = qg(
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
  const a = qM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = q();
      N(u) && (Oo(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Zu(d, hr, r), g = oa(p);
      if (N(u)) {
        const h = u.anchor.getNode(), b = h.getParent(), x = An(h), T = u.anchor.key === u.focus.key;
        if (U(g) && x && T && !Aa(g, o))
          NM(
            u,
            g,
            h,
            r?.markerMode === "editable"
          );
        else if (U(g) && !T && !Aa(g, o) && wM(u))
          OM(u, g, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          RM(
            u,
            () => oa(p)
          );
        else if (F(g) && !g.isInline()) {
          const v = u.insertParagraph();
          if (v) {
            const A = v.getChildren();
            g.append(...A), v.replace(g), tt(g) && _i(g) || g.selectStart();
          }
        } else if (U(g) && E(h) && !O(h) && U(h.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Aa(g, o)) {
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
          const v = U(b) ? b : void 0, A = v ? AM(h, u.anchor.offset) : [];
          let D = (v ?? h).insertAfter(g);
          if (Or(g)) {
            const _ = {
              ...r || Io(),
              markerMode: "hidden"
            }, w = Zu(
              d,
              hr,
              _
            ), $ = oa(w);
            D = D.insertAfter($);
          }
          if (A.length > 0 && v) {
            const _ = oo(v).append(...A);
            D.insertAfter(_), v.isEmpty() && v.remove();
          } else E(D.getNextSibling()) || D.insertAfter(pe(I));
          F(D) && D.selectEnd();
        } else if (u.insertNodes([g]), jM(g), f) {
          const v = Df();
          v.add(g.getKey()), si(v);
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
function AM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Aa(e, t) {
  return ((t ?? Js).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function PM(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function NM(e, t, r, n) {
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
    const [o, a] = pi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (li(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(I) && i.setTextContent(I + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !O(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function wM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || U(n)) continue;
    if (!E(n) || n.getType() !== Be.getType() || ne(n, oe) === "attribute") return !1;
    const i = FT(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    An(n) && (r = !0);
  }
  return r;
}
function OM(e, t, r) {
  const n = Eg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!An(a)) return;
    li(a, { renderGlyphs: r });
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
function qM(e, t) {
  let r = Og[e];
  return r || (rt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: rt.getType(), marker: e, content: [] }] })
  } : ye.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ye.getType(), marker: e };
      return (ye.isValidFootnoteMarker(e) || ye.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function RM(e, t) {
  const r = e.getNodes(), [n, i] = pi(e);
  let s;
  r.forEach((o, a) => {
    if (F(s) && s.isParentOf(o))
      return;
    const c = Rg(
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
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((d) => O(d) && d.getMarkerSyntax() === "opening") && PM(s, U(s.getParent()))), IM(c, s, l);
  }), (E(s) || F(s)) && s.selectEnd();
}
function pi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Ll(e) {
  return me(e) || j(e) || j(e.getParent());
}
function Rg(e, t, r, n, i) {
  if (!Ll(e)) {
    if (E(e))
      return $M(e, t, r, n, i);
    if (F(e) && e.isInline())
      return e;
  }
}
function $M(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function IM(e, t, r) {
  if (E(t)) {
    const n = yc(e, t);
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
    yc(e, t), r && U(t) && t.getChildren().some((s) => O(s)) && E(e) && !O(e) && !e.getTextContent().startsWith(I) && e.setTextContent(I + e.getTextContent());
  }
}
function yc(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    fl(n), E(n) || t.insertBefore(pe(" "));
  }
  return r;
}
function $g(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = Nn(u, t);
    if (!f) return !1;
    const p = E(u) ? u.getTextContentSize() : 0;
    if (Qd(f, r), E(u) && u.isAttached()) {
      const g = u.getTextContentSize(), h = Math.max(p - g, 0), b = Math.max(0, Math.min(d - h, g)), x = q();
      N(x) && x.setTextNodeRange(u, b, u, b);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = pi(e);
  if (!Ul(n, t, s, o)) return !1;
  const a = Dl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = Nn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Ug(d, a);
    f && (Qd(f, r), l = !0);
  }), Fg(a, i), l;
}
function Qd(e, t) {
  e.getChildren().forEach((n) => {
    gt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === zt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    E(n) && i.startsWith(I) && n.setTextContent(i.slice(I.length));
  }), Ia(e);
}
function Dl(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Rg(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function Nn(e, t) {
  let r = e, n;
  for (; r && !tt(r); ) {
    if (j(r)) return;
    !n && U(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Ig(e) {
  const t = je(
    e,
    (r) => j(r) || tt(r)
  );
  return j(t);
}
function Lg(e) {
  return e.filter(
    (t) => !Ll(t) && (E(t) || F(t) && t.isInline())
  );
}
function LM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || Ll(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function DM(e, t, r) {
  return e.getChildren().some(
    (n) => F(n) && t.some((i) => n.isParentOf(i)) && !Dg(n, r)
  );
}
function Ul(e, t, r, n, i) {
  const s = Lg(e), o = LM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Nn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !DM(l, s, o);
  });
}
function Dg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || gt(r));
}
function Ug(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (F(u) && t.some((d) => u.isParentOf(d))) {
      if (!Dg(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && gt(n[s - 1]) && (s -= 1), o < n.length - 1 && gt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(oo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(oo(e).append(...c)), e;
}
function oo(e) {
  return Gy(e);
}
function Fg(e, t) {
  const r = q(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function UM(e, t, r) {
  if (e.isCollapsed()) {
    const l = Nn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Du(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = pi(e);
  if (!Ul(n, r, i, s, t)) return !1;
  const o = Dl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Nn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Ug(u, o);
    d && (Du(d, t), c = !0);
  }), c;
}
function FM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (b) => b !== t
  ), s = e.getNodes(), [o, a] = pi(e);
  if (!!!i?.some(
    (b) => Ul(s, b, o, a)
  ) && !zM(s, t)) return !1;
  let l = !1;
  i?.forEach((b) => {
    const x = q();
    N(x) && $g(x, b, n) && (l = !0);
  });
  const u = q();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = pi(u), g = Dl(
    u.getNodes(),
    f,
    p
  );
  if (g.length === 0) return l;
  const h = g.filter(
    (b) => !Ig(b) && !Nn(b, t)
  );
  return h.length > 0 && (KM(h).forEach((b) => BM(b, t)), l = !0), Fg(g, d), l;
}
function zM(e, t) {
  return Lg(e).some(
    (r) => !Ig(r) && !Nn(r, t)
  );
}
function KM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function BM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => U(a) && a.getMarker() === t
  ), s = i ? oo(i) : Er(t);
  e[0].insertBefore(s), s.append(...e), i === r || yc(e[0], s);
}
function jM(e) {
  ge(e) && (fl(e.getPreviousSibling()), Ph(e.getNextSibling()));
}
const zg = {
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
}, Zd = "psc-active-text", Ns = "psc-empty-text";
function VM({ viewOptions: e }) {
  const [t] = ae(), r = Z(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return K(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Zd), r.current = o, o && t.getElementByKey(o)?.classList.add(Zd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        yo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Ns}`);
          if (!c) return !1;
          const l = gi(c);
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
          const d = Pa(), f = WM(), p = [], g = [];
          return ze().getChildren().forEach((h) => {
            if (!F(h)) return;
            const { emptyKeys: b, nonEmptyKeys: x } = GM(h);
            p.push(...b), g.push(...x);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: g };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Ns) : t.getElementByKey(d)?.classList.add(Ns);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Ns));
      }),
      t.registerCommand(
        Uc,
        () => (i(void 0), !1),
        Ct
      ),
      t.registerCommand(
        Jy,
        () => {
          const o = t.getEditorState().read(Pa);
          return o !== r.current && i(o), !1;
        },
        Ct
      )
    ];
    return i(t.getEditorState().read(Pa)), Ve(...s);
  }, [t, n]), null;
}
function Pa() {
  return HM(q() ?? void 0)?.getKey();
}
function WM() {
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
function HM(e) {
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function GM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ge(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ge(c)) break;
      if (!(Nt(c) || O(c)) && c.getTextContent().replaceAll(Fs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const JM = /^\+/;
function Fl(e, t) {
  const r = t.replace(JM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Kg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Bg(e, t) {
  return Kg(e, t) !== void 0;
}
function bc(e, t) {
  const r = Kg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ao(e, t, r) {
  const n = F(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function YM(e, t, r, n, i) {
  const s = Fl(n, t);
  if (!s) {
    ao(e, "unknown", i);
    return;
  }
  if (r === void 0) return;
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ao(e, "invalid", i);
}
function ri(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || YM(s, o, t, r, n), ri(s, t, r, n, i || o === "xq");
    } else if (ge(s)) {
      if (i) continue;
      const o = Fl(r, "v");
      o ? t !== void 0 && (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? ri(s, s.getMarker(), r, n, i) : De(s) || F(s) && ri(s, t, r, n, i);
}
function XM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Fl(e, a);
    if (!c) {
      ao(o, "unknown", r), bc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    bc(n, l) || ao(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of ze().getChildren())
    De(o) || (Me(o) ? (i(o, o.getMarker()), s(o) && ri(o, void 0, e, r, !1)) : Ye(o) ? i(o, o.getMarker()) : ce(o) ? (i(o, o.getMarker()), s(o) && ri(o, o.getMarker(), e, r, !1)) : F(o) && s(o) && ri(o, "p", e, r, !1));
  return r;
}
function QM(e) {
  return !!e?.includes("(basic)");
}
function ZM(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function jg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && gc(e, t);
}
function zl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Vg(e, t) {
  const r = [];
  for (const n of t) {
    const i = zl(e, n);
    i && bc(r, i);
  }
  return r;
}
function Is(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: ZM(e.description),
    isBasic: QM(e.description)
  };
}
function eE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function kc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : eE(e.marker, t.marker);
}
function Tc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Vg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && jg(i.marker, r)
  ).filter((i) => {
    const s = zl(e, i.marker);
    return s !== void 0 && Bg(n, s);
  }).map((i) => Is(i, "paragraph")).sort(kc);
}
function tE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => jg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Is(c, "character")).sort(kc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Is(c, "character")),
    ...a.map((c) => Is(c, "note"))
  ].sort(kc);
}
function rE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function nE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function iE(e, t, r) {
  return [
    ...rE(e, t.openCharMarkers),
    ...tE(e, t, r)
  ].sort(nE);
}
function sE(e, t, r) {
  if (t.source === "paragraph") return Tc(e, t, r);
  const n = iE(e, t, r);
  return n.length > 0 ? n : Tc(e, t, r);
}
function oE(e, t, r) {
  const n = Tc(e, t, r), i = Vg(e, t.previousParaMarkers), s = zl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Bg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const tr = String.raw`\w-`, Wg = "a-z0-9", aE = `[a-z][${Wg}]*`, cE = new RegExp(
  String.raw`^\\(\+?[${tr}]+)[ \u00A0]$`
), Hg = new RegExp(String.raw`^\\(\+?[${tr}]+)$`), lE = new RegExp(String.raw`^\\\+?[${tr}]*\*$`), uE = new RegExp(
  String.raw`^\\(\+?[${tr}]+)(?:[ \u00A0]|$)`
), dE = new RegExp(
  String.raw`^\\(\+?)([${tr}]+)`
), fE = new RegExp(
  String.raw`\\\+?[${tr}]+(?:\\?\*|[ \u00A0])`
), pE = new RegExp(
  String.raw`\\\+?[${tr}]*$`
), hE = new RegExp(
  String.raw`^\\(${aE})( |$)`
), gE = new RegExp(
  String.raw`\\[${Wg}+*]*$`,
  "i"
), it = "￼";
function Gg(e) {
  return e.length > 1 && e.startsWith(I) && e.charAt(1) !== it ? e.slice(1) : e;
}
function ef(e) {
  return nl(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Jg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = hr.serializeEditorState(
    {
      type: dr,
      version: ur,
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
  for (; ef(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== wt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && ef(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Yg(e, t, r, n) {
  const i = e.getCode(), s = {
    ...e.getUnknownAttributes(),
    type: "book",
    marker: e.getMarker(),
    ...i !== "" && { code: i },
    content: t
  }, [o, ...a] = hr.serializeEditorState(
    { type: dr, version: ur, content: [s, ...r] },
    n
  ).root.children;
  if (!Gc(o)) return { failure: "shape" };
  const c = Kp(o.children[0]) ? o.children.slice(1) : o.children;
  return c.length === 0 && a.length === 0 ? { failure: "empty" } : { children: c, followingBlocks: a };
}
function ws(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function $i(e, t) {
  pE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += it;
}
function Dt(e) {
  return e.replaceAll(I, " ");
}
function mE(e, t, r = !1) {
  if (Lo(t)) return Dt(e);
  if (e === I) return " ";
  const n = r && e.startsWith(I), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(I, "~");
}
function ji(e) {
  const t = e.getTextContent();
  return tn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Kl(e, t) {
  const r = e[t];
  if (!He(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Mo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
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
    const { opener: s, value: o, closer: a, wrapper: c } = Xi(n, i);
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
function zo(e, t) {
  const r = t(e)?.type;
  return r === y.Milestone || r === void 0 && Vc(e);
}
function Qg(e, t) {
  return He(e) ? !zo(e.getMarker(), t) : j(e) || De(e) ? !0 : we(e) ? jl(e) : U(e) ? Zg(e, t) : !1;
}
function Zg(e, t) {
  if (Qk(e)) return !0;
  const r = e.getMarker();
  return !zb(r) && t(r) === void 0;
}
const It = "", Lt = "";
function tf(e) {
  return e.flatMap((t) => Le(t) ? t.getChildren() : [t]);
}
function Ui(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (He(s)) {
      const o = Kl(e, i);
      zo(s.getMarker(), r) && Xg(o) ? (t.push(
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
      ), Ui(tf(o), t, r), t.push(Lt)) : t.push(it), i += o.length;
    } else if (we(s)) {
      const o = Bl(e, i);
      jl(s) ? t.push(it) : (t.push(
        It,
        "verse",
        Dt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ui(tf(o), t, r), t.push(Lt)), i += o.length;
    } else O(s) ? t.push(It, "marker", Dt(s.getTextContent()), Lt) : nn(s) ? t.push(It, "unmatched", Dt(s.getTextContent()), Lt) : Qg(s, r) ? t.push(it) : ps(s) ? t.push(" ") : E(s) ? t.push(
      Dt(
        n ? Gg(ji(s)) : ji(s)
      )
    ) : U(s) ? (t.push(It, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ui(s.getChildren(), t, r, !0), t.push(Lt)) : F(s) ? (t.push(It, s.getType()), Ui(s.getChildren(), t, r), t.push(Lt)) : t.push(it);
  }
}
function gr(e, t) {
  const r = [];
  return Ui(e, r, t), r.join("");
}
function mr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function hi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Vl(e) {
  return e.type ?? "";
}
function em(e, t, r) {
  return t === "closing" ? st(e, r) : t === "selfClosing" ? st("") : Oe(e, r);
}
function Na(e, t) {
  const r = e[t];
  if (!(!r || Vl(r) !== "attribute-run"))
    return mr(r) ?? [];
}
function yr(e, t) {
  const r = [];
  return Fi(e, r, t), r.join("");
}
function Fi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Vl(s);
    if (o === "ms") {
      const l = s, u = Na(e, i + 1);
      u && zo(l.marker ?? "", r) ? (t.push(
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
      ), Fi(u, t, r), t.push(Lt), i += 1) : t.push(it);
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
      let u = 0, d = Na(e, i + 1 + u);
      for (; d; )
        Fi(d, t, r), u++, d = Na(e, i + 1 + u);
      t.push(Lt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        It,
        "marker",
        Dt(
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
      t.push(It, "char", JSON.stringify(l.unknownAttributes ?? null)), Fi(mr(s) ?? [], t, r, !0), t.push(Lt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(it);
      continue;
    }
    if (o === "unmatched") {
      t.push(It, "unmatched", Dt(hi(s) ?? "")), t.push(Lt);
      continue;
    }
    const a = hi(s);
    if (a !== void 0) {
      t.push(Dt(n ? Gg(a) : a));
      continue;
    }
    const c = mr(s);
    c ? (t.push(It, o), Fi(c, t, r), t.push(Lt)) : t.push(it);
  }
}
function Ci(e) {
  let t = 0;
  for (const r of e) {
    const n = mr(r);
    if (n) {
      t += Ci(n);
      continue;
    }
    const i = hi(r);
    if (i !== void 0)
      for (const s of i) s === it && t++;
  }
  return t;
}
function os(e, t, r, n, i) {
  Zr(e.getChildren(), t, r, n, i);
}
function Zr(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      ws(t, a, Dt(a.getTextContent()));
    else if (He(a)) {
      s();
      const c = Kl(e, o);
      zo(a.getMarker(), r) && Xg(c) ? Zr(c, t, r, n) : $i(t, [a, ...c]), o += c.length;
    } else if (j(a) || De(a))
      s(), $i(t, [a]);
    else if (we(a)) {
      s();
      const c = Bl(e, o);
      jl(a) ? $i(t, [a, ...c]) : (ws(t, a, Dt(ji(a))), Zr(c, t, r, n)), o += c.length;
    } else if (U(a))
      s(), Zg(a, r) ? $i(t, [a]) : os(a, t, r, n, { pending: !0 });
    else if (ps(a))
      s(), ws(t, a, " ");
    else if (E(a)) {
      const c = tn(a) || ne(a, oe) === "attribute", l = s() && !c;
      ws(
        t,
        a,
        c ? Dt(ji(a)) : mE(ji(a), n, l)
      );
    } else F(a) ? os(a, t, r, n, i) : (s(), $i(t, [a]));
  }
}
function tm(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== y.Unknown && n !== y.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (De(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return os(e, i, t, r), i;
}
function Ko(e, t, r, n) {
  for (const i of t) {
    const s = tm(i, r, n);
    if (!s) return !1;
    e.text.length > 0 && (e.text += " ");
    const o = e.text.length;
    s.spans.forEach(
      (a) => e.spans.push({ ...a, start: a.start + o, end: a.end + o })
    ), e.sentinels.push(...s.sentinels), e.text += s.text;
  }
  return !0;
}
function Wl(e, t) {
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
function as(e, t = []) {
  for (const r of e)
    we(r) ? t.push(r) : F(r) && as(r.getChildren(), t);
  return t;
}
function Hl(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === it && t++;
    else F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function $r(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === it && t++;
    else r.content && (t += $r(r.content));
  return t;
}
function yE(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), F(i) && os(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const cs = /\s/;
function rm(e) {
  return e.filter(Bo).length;
}
function Bo(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return E(t) && !O(t) && ne(t, oe) === "attribute";
}
function bE(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return O(t) || Bo(e);
}
function rf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Bo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      cs.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function kE(e, t, r, n) {
  const i = e.find((a) => a.getKey() === r);
  if (!i || n <= 0 || !F(i)) return { key: r, offset: n };
  const s = i.getChildAtIndex(n - 1);
  if (!s) return { key: r, offset: n };
  let o;
  for (const a of t.spans) {
    const c = se(a.key);
    c && (s.is(c) || s.isParentOf(c)) && (o = a);
  }
  return o ? { key: o.key, offset: o.end - o.start } : { key: r, offset: n };
}
function jo(e, t, r, n) {
  const { key: i, offset: s } = kE(
    e,
    t,
    r,
    n
  ), o = rf(t, i, s, !1);
  if (!o) return;
  const a = t.spans.find((l) => l.key === i), c = a && !bE(a) ? rf(t, i, s, !0) : void 0;
  return { ...o, documentCoords: c, attributeRunSpans: rm(t.spans) };
}
function wa(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function TE(e) {
  const t = se(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return U(r) ? (r.selectNext(0, 0), !0) : !1;
}
function xE(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = we(t) ? Bl(r, n) : He(t) ? Kl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function nm(e, t, r) {
  const { text: n, spans: i } = e, s = rm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !wa(d);
    if (!(o && Bo(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let g = 0; g < f; g++) {
        const h = n[d.start + g];
        if (c === 0 && (l === 0 || !cs.test(h))) {
          if (p) {
            a = { key: d.key, offset: g };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? cs.test(h) || c-- : l--;
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
    if (d && wa(d) && TE(d) || d?.isSentinel && xE(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !wa(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = se(a.key);
    if (d && E(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(F)?.selectStart();
}
function im(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(F)?.selectStart();
      return;
    }
    nm(yE(e, n, i), t, e);
  }
}
function sm(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(F)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Zr(e, s, n, i), nm({ text: s.text, spans: s.spans }, t, e);
}
function om(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  if (!Ko(s, e, n, r))
    return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
  let o, a = !1;
  const c = q();
  if (N(c)) {
    for (let h = c.anchor.getNode(); h; h = h.getParent())
      if (e.some((b) => b.is(h))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = jo(
      e,
      s,
      c.anchor.key,
      c.anchor.offset
    ));
  }
  const l = br(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if ($r(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = hr.serializeEditorState(
    { type: dr, version: ur, content: l },
    r
  );
  if (yr(u.root.children, n) === gr(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((h) => ni(h));
  if (Hl(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = as(e).map((h) => ({
    number: h.getNumber(),
    sid: h.getSid()
  })), p = e[0];
  d.forEach((h) => p.insertBefore(h)), Wl(d, s.sentinels), e.forEach((h) => h.remove());
  const g = as(d);
  for (let h = 0; h < f.length && h < g.length; h++)
    g[h].getNumber() === f[h].number && g[h].setSid(f[h].sid);
  return im(d, o, a, n, r), !0;
}
function xc(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Ae.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!O(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(Et(s) || E(s) && s.getTextContent() === wt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!O(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Zr(c, l, t, r), { out: l, contentNodes: c };
}
function am(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(it)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function _E(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = xc(e, n, r);
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
    u.isCollapsed() && (c = jo(
      [e],
      o,
      u.anchor.key,
      u.anchor.offset
    ));
  }
  const d = br(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if ($r(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], g = am(p), h = Jg(e, p, g, r);
  if (h.failure !== void 0)
    return h.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      h.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Ci(h.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const b = e.getCategory() !== g;
  if (b && e.setCategory(g), yr(h.children, n) === gr(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), b;
  const x = h.children.map((S) => ni(S));
  if (Hl(x) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), b;
  const T = a[0];
  if (T)
    x.forEach((S) => T.insertBefore(S));
  else {
    const S = e.getChildren().find((D) => O(D) && D.getMarkerSyntax() === "closing");
    x.forEach((D) => S ? S.insertBefore(D) : e.append(D));
  }
  Wl(x, o.sentinels);
  const v = new Set(o.sentinels.flat().map((S) => S.getKey()));
  a.forEach((S) => {
    v.has(S.getKey()) || S.remove();
  });
  const A = xc(e, n, r)?.contentNodes ?? x;
  return sm(
    A,
    c,
    l,
    n,
    r
  ), !0;
}
function co(e, t, r) {
  const n = e.getChildren(), i = gt(n[0]) ? n.slice(1) : n, s = { text: "", spans: [], sentinels: [] };
  return Zr(i, s, t, r), { out: s, contentNodes: i };
}
const CE = new RegExp(
  `^(?:[\\s\\u200B]*[\\r\\n][\\s\\u200B]*)?\\\\${Ut}(?=[\\s\\u200B\\\\|]|$)`
);
function cm(e, t) {
  const r = br(e, {
    getMarker: t
  }), [n, ...i] = r;
  return typeof n == "object" && n.type === "para" && n.marker === Ut && !CE.test(e) ? { content: r, lineContent: n.content ?? [], followingBlocks: i } : { content: r, lineContent: [], followingBlocks: r };
}
function lm(e, t, r = []) {
  const { viewOptions: n, getMarker: i, logger: s } = t, { out: o, contentNodes: a } = co(e, i, n);
  if (!Ko(o, r, i, n))
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
    d.isCollapsed() && (l = jo(
      c,
      o,
      d.anchor.key,
      d.anchor.offset
    ));
  }
  const f = cm(o.text, i);
  if ($r(f.content) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const p = Yg(
    e,
    f.lineContent,
    f.followingBlocks,
    n
  );
  if (p.failure !== void 0)
    return p.failure === "empty" ? s?.debug("[MarkerEdit] Book Tier 2 skipped: no content nodes after unwrap") : s?.warn("[MarkerEdit] Book Tier 2 aborted: unexpected serialized shape"), !1;
  const g = [...p.children, ...p.followingBlocks];
  if (Ci(g) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: serialized sentinel/preserved-node mismatch"), !1;
  if (p.followingBlocks.length === r.length && yr(p.followingBlocks, i) === gr(r, i) && yr(p.children, i) === gr(a, i))
    return s?.debug("[MarkerEdit] Book Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const h = p.children.map((_) => ni(_)), b = p.followingBlocks.map((_) => ni(_)), x = [...h, ...b];
  if (Hl(x) !== o.sentinels.length)
    return s?.warn("[MarkerEdit] Book Tier 2 aborted: parsed sentinel/preserved-node mismatch"), !1;
  const T = as([...a, ...r]).map((_) => ({
    number: _.getNumber(),
    sid: _.getSid()
  })), v = a[0];
  v ? h.forEach((_) => v.insertBefore(_)) : h.forEach((_) => e.append(_)), b.reduce((_, w) => _.insertAfter(w), e), Wl(x, o.sentinels);
  const A = new Set(o.sentinels.flat().map((_) => _.getKey()));
  a.forEach((_) => {
    A.has(_.getKey()) || _.remove();
  }), r.forEach((_) => _.remove());
  const S = [
    ...co(e, i, n).contentNodes,
    ...b
  ], D = as(S);
  for (let _ = 0; _ < T.length && _ < D.length; _++)
    D[_].getNumber() === T[_].number && D[_].setSid(T[_].sid);
  return sm(
    S,
    l,
    u,
    i,
    n
  ), !0;
}
const um = /* @__PURE__ */ new Set(["ca", "cp"]), Gl = "cp";
function dm(e) {
  if (!pr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (os(e, t, lr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = br(r, { getMarker: lr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Gl)
  );
}
function Vo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (U(r) && um.has(r.getMarker()) || dm(r)) {
      t.push(r);
      continue;
    }
    ce(r) && r.getMarker() === Gl && t.push(r);
    break;
  }
  return t;
}
function SE(e) {
  const t = (n) => U(n) && um.has(n.getMarker()) || dm(n);
  if (t(e) || ce(e) && e.getMarker() === Gl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ne(n)) return n;
      if (!t(n)) return;
    }
}
function fm(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Vo(e);
  if (n.some((s) => ce(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Zr(e.getChildren(), i, t, r), Zr(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function vE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Vo(e)], o = fm(e, n, r);
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
    l.isCollapsed() && (a = jo(
      s,
      o,
      l.anchor.key,
      l.anchor.offset
    ));
  }
  const u = br(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if ($r(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = hr.serializeEditorState(
    { type: dr, version: ur, content: u },
    r
  );
  if (yr(f.root.children, n) === gr(s, n)) {
    let g = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), g = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), g = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const p = f.root.children.map((g) => ni(g));
  return Ne(p[0]) ? (p.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), im(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ls(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (De(n)) return;
    !t && (j(n) || ce(n) || Ne(n) || Me(n)) && (t = n), Yy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? SE(r) : void 0) ?? t;
}
function Ht(e, t) {
  const r = ls(e);
  return r ? j(r) ? _E(r, t) : Ne(r) ? vE(r, t) : Me(r) ? lm(r, t) : om([r], t) : !1;
}
const ME = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function nf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !ME.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Ls(e, t) {
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
          t.push(`\\${n}`), nf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Ls(r.content, t), nf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Ls(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Ls(r.content, t);
      }
    }
}
function sf(e, t, r) {
  const n = ls(e);
  if (!Ue(n)) return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Me(n) ? co(n, t, r).out : tm(n, t, r);
  if (!o) return !1;
  const a = br(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    cs.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Ls(a, l);
  for (const u of l.join("").replaceAll(I, "~")) {
    if (cs.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function Jl(e, t) {
  return pm(e, t, y.Paragraph);
}
function EE(e, t) {
  return pm(e, t, y.Character);
}
function pm(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== y.Unknown ? i === r : !(Ae.isValidMarker(n) || Vc(n));
}
function AE(e) {
  return [lt(e), Co()];
}
function Yl(e) {
  Zt(e, 2);
}
function PE(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Wo(e) {
  const t = PE(e);
  e.splice(0, 0, AE(e.getMarker())), t && Yl(e);
}
function lo(e, t) {
  e.setMarker(t), Wo(e), Yl(e);
}
function NE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!tn(n)) {
    if (E(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(I), xt(n, oe, kr), n.setMode("token");
      return;
    }
    if (Wp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Co());
  }
}
function of(e, t, r) {
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
function Vi(e) {
  for (let t = e; t; t = t.getParent())
    if (ce(t)) return t;
}
function wE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Vi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Vi(r.getNode())?.is(s) ?? !1, a = Vi(n.getNode())?.is(s) ?? !1;
    return !(o && !of(r, s, "start") || a && !of(n, s, "end"));
  });
}
function _c(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = q();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of wE(r)) t.add(n.getKey());
}
function OE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = q();
  if (!N(r) || !r.isCollapsed()) return;
  const n = Vi(r.focus.getNode());
  n && t.add(n.getKey());
}
function qE(e) {
  const t = q();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (_c(e), t.removeText());
}
const RE = new RegExp(
  String.raw`^\\\+?([${tr}]+)(?:[ \u00A0]|$)`
);
function $E(e, t) {
  const r = RE.exec(e.getTextContent());
  return !!r && Jl(r[1], t);
}
function IE(e, t) {
  if (!In(t.viewOptions)) return;
  if (gt(e.getFirstChild())) {
    NE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if ($E(e, t.getMarker)) return;
    Wo(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ce(o) && !o.is(e))) {
      lo(e, Ut), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (Ue(r)) {
    const n = e.getChildren().filter((a) => !tn(a)), i = q();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Vi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || F(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Zt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  lo(e, Ut);
}
function LE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = cr(t, To(e.getMarker()));
  return r === "" ? void 0 : r;
}
function DE(e) {
  const t = e.getChildren().filter((s) => !O(s) && ne(s, oe) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(I) && r.setTextContent(r.getTextContent().slice(1));
  const n = LE(e);
  n && t.push(pe(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function UE(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !O(c) && c.getTextContent() === wt(s)
    ), a = mi(e).some(({ node: c }) => O(c));
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
function FE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    DE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && Ht(e, t);
}
function hm(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && In(r)) {
    lo(e, t);
    return;
  }
  Vh(e, t);
}
function gm() {
  const e = q();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = mm(e);
    return t !== "removed" ? t : (Cc(), "handled");
  }
  return Cc() ? "handled" : "declined";
}
function zE(e, t) {
  if (!t) return e;
  const r = hE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== y.Paragraph ? e : e.slice(r[0].length);
}
function af(e, t) {
  const r = q();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!ym())
      return "declined";
  } else {
    const s = mm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => zE(s, t)
  );
  cf(n ?? "");
  for (const s of i)
    Cc(), cf(s);
  return "handled";
}
function KE(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = gi(n);
  if (!i) return !1;
  const s = Qt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function mm(e) {
  const t = Qt(e.anchor.getNode()), r = Qt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), BE() ? "removed" : "needs-plain-split");
}
function cf(e) {
  if (e === "") return;
  const t = q();
  N(t) && t.insertText(e);
}
function BE() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Qt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function ym() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Qt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Cc() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = ym();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Er("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = E(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    li(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (Bk(u), i.append(u));
  }
  return i.getChildren().every(O) && i.append(pe(zt)), bm(i), !0;
}
function bm(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (E(t)) {
    const r = t.getTextContent().startsWith(I) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (F(t)) {
    bm(t);
    return;
  }
  e.selectEnd();
}
function jE(e) {
  const t = [];
  let r = e;
  for (; r; )
    U(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function VE(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of ze().getChildren()) {
    if (t && n.is(t)) {
      Me(n) && r.push(n.getMarker());
      break;
    }
    (Me(n) || Ye(n) || ce(n)) && r.push(n.getMarker());
  }
  return r;
}
function WE(e) {
  let t = e;
  for (; F(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function HE(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (gt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && tn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(WE(i)) && r === 0 : !1;
}
function GE(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !gt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && tn(i) && t.is(i) && r === 0;
}
function JE() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function YE() {
  const e = q();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = je(t, ce), s = i ? void 0 : je(t, Me), o = !n && !s && (!i || GE(i, t, r)) ? "paragraph" : "character", a = Qt(t);
  return {
    source: o,
    // The book reports `id` as its own block marker: PT9's character source filters on the
    // enclosing paragraph's marker (`occursUnder` empty or containing it), and without one it
    // returns an empty list that falls back to the paragraph palette.
    paraMarker: i?.getMarker() ?? s?.getMarker(),
    previousParaMarkers: VE(t),
    openCharMarkers: jE(t),
    noteMarker: a?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: ul(t, r),
    anchorRect: JE()
  };
}
function XE() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = gE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function QE(e, t, r) {
  hm(e, t, r), Yl(e);
}
function ZE(e, t, r) {
  const n = q();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = je(i, ce);
  if (t === "backslash" && s && HE(s, i, n.focus.offset)) {
    QE(s, e, r);
    return;
  }
  Sc(e, r);
}
function km(e, t) {
  const r = e.getNode();
  let n = F(r) ? r : r.getParent();
  for (; U(n) || me(n); ) n = n.getParent();
  return t.is(n);
}
function eA(e, t) {
  const r = e.getNode();
  return !t.is(r) && !t.isParentOf(r) ? !1 : !km(e, t);
}
function uo(e, t, r) {
  const n = r.getIndexWithinParent();
  e.getNode().is(t) && e.offset <= n && e.set(t.getKey(), n + 1, "element");
}
function tA(e) {
  if (e.type !== "text" || e.offset !== 0) return e;
  const t = e.getNode();
  if (!O(t) || t.getMarkerSyntax() !== "opening") return e;
  const r = t.getParent();
  if (!U(r)) return e;
  const n = r.getParent();
  return n ? $a(n.getKey(), r.getIndexWithinParent(), "element") : e;
}
function rA(e, t, r) {
  const n = q();
  if (!N(n)) return !1;
  Oo(n);
  const i = n.isBackward() ? n.focus : n.anchor;
  if (!km(i, e)) return !1;
  const s = n.isBackward() ? n.anchor : n.focus;
  if (!n.isCollapsed() && eA(s, e)) return !1;
  const o = gt(e.getFirstChild()) ? e.getFirstChild() : void 0;
  o && (uo(n.anchor, e, o), uo(n.focus, e, o)), n.isCollapsed() || n.removeText();
  const a = q();
  if (!N(a) || !a.isCollapsed()) return !1;
  const c = Ng(a);
  if (!c) return !1;
  const { parent: l, moving: u } = Pg(
    tA(c.anchor)
  );
  if (!e.is(l)) return !1;
  const d = u.filter((g) => !g.is(o)), f = oi(t);
  e.insertAfter(f), f.append(...d);
  const [p] = d;
  return U(p) ? No(p) : f.select(0, 0), In(r) && Wo(f), !0;
}
function nA(e, t) {
  const r = q();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Tm(e) {
  const t = q();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function iA(e) {
  const t = je(e.anchor.getNode(), Me);
  if (!t) return;
  const r = t.getFirstChild();
  !r || !gt(r) || (uo(e.anchor, t, r), uo(e.focus, t, r));
}
function sA(e, t, r, n) {
  const i = q();
  if (N(i) ? iA(i) : n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && XE(), e.kind === "closeTag") {
    Tm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && gm() !== "declined") return;
  if (e.kind === "paragraph" && rt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    ZE(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ae.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return qg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  mc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: ii(), reference: r });
}
function Sc(e, t) {
  const r = q();
  if (!N(r)) return !1;
  Oo(r);
  const n = (r.isBackward() ? r.focus : r.anchor).getNode();
  if (!je(n, ce)) {
    const o = je(n, Me);
    if (o) return rA(o, e, t);
  }
  const i = In(t);
  if (wg()) {
    const o = q();
    if (!N(o)) return !1;
    const a = je(o.anchor.getNode(), ce);
    return a ? (a.setMarker(e), i && Wo(a), !0) : !1;
  }
  const s = r.insertParagraph();
  return ce(s) ? (i ? lo(s, e) : s.setMarker(e), !0) : !1;
}
function oA() {
  const [e] = ae();
  return K(() => e.registerCommand(zf, () => !0, Ct), [e]), null;
}
function aA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = uE.exec(e)?.[1];
  return r === void 0 ? !1 : !Jl(r, t);
}
function xm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !aA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ce(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== y.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (!(!ce(i) && !Me(i)))
    return [i, r];
}
function _m(e, t) {
  const r = xm(e, t.getMarker);
  if (!r) return !1;
  const [n, i] = r;
  return Me(n) ? lm(n, t, [i]) : om([n, i], t);
}
function cA(e, t) {
  const r = q();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Cm(e) {
  const t = dE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function lA(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Cm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function uA(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if (U(n)) {
      No(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function lf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Cm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  uA(e);
}
function uf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Sm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Ht(e, r);
  const n = lA(e), i = e.getParent();
  if (ce(i)) {
    if (!Jl(t, r.getMarker))
      return _m(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Ht(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), uf(s, t) && lf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? EE(t, r.getMarker) : Ae.isValidMarker(s)))
      return Ht(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Ht(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (cA(c, st(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), uf(a, s) && lf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Ht(e, r);
}
function dA(e) {
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
function fA(e, t) {
  const r = e.getTextContent();
  if (rn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Le(e.getParent()) && il(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !dA(e)) {
    Yk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = cE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Sm(e, n[1], t);
      return;
    }
    if (lE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Ht(e, t);
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
function pA(e, t) {
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
function vm(e) {
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
const Ii = vm("v"), hA = vm("c"), df = /^[ \u00A0]*$/;
function ff(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === Be.getType() && n.getMode() === "normal" && ne(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = pe(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function gA(e, t) {
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
    if (l && df.test(l[2] ?? "")) {
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
      const [, l, u, d] = c, f = q(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Ft("v", u));
      const g = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      ff(e, d, g);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Ht(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), df.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Ft("v", o)), a && ff(e, a, a.length);
}
const mA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function yA(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !Zf(r.getMarker())?.includes("caller")) return !1;
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
  const o = mA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(wt(a)), !0;
}
function bA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = Ft("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = hA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Mm(e) {
  if (He(e)) {
    const { wrapper: t } = Mo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = Qp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ne(e)) {
    const t = [], r = Zp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = th(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (we(e)) {
    const t = [], r = Xi(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = Xi(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function kA(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Mm(e).some((n) => r.is(n));
}
function TA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ce(e) && Wp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Zi)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && bs(l, e) && (i || kA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Mm(e))
    l.remove(), n = !0;
  let s = !1;
  if (U(e)) {
    const l = tT(e);
    l !== void 0 && Lb(l) && (ih(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of Zi)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (YT(l, e)) {
        ts(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && xh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      wo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function pf(e) {
  return E(e) && e.getType() === Be.getType() && e.getMode() === "normal" && ne(e, oe) !== "attribute";
}
function xA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && pf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && pf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Os(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = xA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (rn(c)) continue;
      const g = Hg.exec(p);
      c.getMarkerSyntax() === "opening" && g ? n = Sm(c, g[1], e) || n : r === "idle" && sf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : _m(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Ht(c, e) || n;
      continue;
    }
    const l = En(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = TA(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && sf(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Ht(u, e) || n;
    }
  }
  return n;
}
function Em(e) {
  if (nn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return zi(t) !== void 0;
  return !1;
}
function _A(e) {
  const t = En(e);
  if (!t) return !1;
  const r = Mn(t.kind);
  return !wo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function hf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (De(t) || gh(t)) return !0;
  return !1;
}
function CA(e, t) {
  const r = e.getTextContent(), n = ne(e, oe), i = e.getParent();
  if (n !== "attribute" && Ne(i)) {
    r.replace(/^[ \u00A0]+/, "") === Ft("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (yA(e, t)) return;
  if (n === "attribute") {
    _A(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Em(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !hf(e))
      t.pendingKeys.add(e.getKey());
    else if (rh(e)) t.pendingKeys.add(e.getKey());
    else if (Ne(ls(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      U(a) && sh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (hf(e)) return;
  const s = q(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (fE.test(o)) {
    if (Wb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Ht(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function SA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : xh(e, t);
}
function vA(e) {
  const t = (r) => {
    if (O(r)) {
      rn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (nn(r)) {
      fh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of Zi)
      n.settleScope !== "none" && n.ownerPredicate(r) && (bs(n, r) || SA(n, r)) && e.pendingKeys.add(r.getKey());
    if (we(r)) {
      r.getTextContent() !== Ft("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== Be.getType() || ne(r, oe) === "attribute") return;
      const n = r.getParent();
      if (Ne(n)) {
        r.getTextContent() !== Ft("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Em(r) || i.includes("//") || rh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (U(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!De(r)) {
      if (Le(r) && r.getChildrenSize() === 0) {
        const n = En(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      F(r) && r.getChildren().forEach(t);
    }
  };
  ze().getChildren().forEach(t);
}
const fo = "usfm:", Am = "usfmopen", Pm = "usfmclosed";
function MA(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const EA = new RegExp(
  [fo, Am, Pm].map(MA).join("|")
), AA = "\uFEFF", PA = /^usfm_(.+)$/;
function NA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function wA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function OA(e) {
  return e.startsWith(fo) ? wA(e.slice(fo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Nm(e) {
  for (const t of e.classList) {
    const r = PA.exec(t);
    if (r) return r[1];
  }
}
function qA(e) {
  const t = Nm(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function RA(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(fo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Am) && !n.contains(Pm)) && Nm(r) !== void 0)
      return !0;
  }
  return !1;
}
function wm(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(OA(e.nodeValue ?? ""));
    return;
  }
  if (!NA(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => wm(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? qA(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function $A(e) {
  if (!EA.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !RA(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => wm(n, !1, r)), r.join("").replaceAll(AA, "").replaceAll(I, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function IA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, oe);
  if (r === "attribute" || r === kr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (Ne(o) || De(o)) return;
  const n = t.startsWith(I) && U(e.getParent()), i = n ? t.slice(1) : t, s = (n ? I : "") + i.replace(/ (?=[ \u00A0])/g, I).replace(new RegExp("(?<=\\u00A0) ", "g"), I);
  s !== t && e.setTextContent(s);
}
function LA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function DA(e, t) {
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
function vc(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? $A(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(LA(s)) : ""),
    isInternal: DA(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const gf = String.raw`\\(?:\+?[${tr}]+\*?|\*)`, UA = new RegExp(
  String.raw`(?<=${gf})\u00A0|\u00A0(?=${gf})`,
  "g"
);
function Xl(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(UA, " ").replaceAll(I, "~");
}
const Om = new RegExp(
  String.raw`\\c(?![${tr}])[ \u00A0]*[^\s\\]*`,
  "g"
), qm = new RegExp(String.raw`\\id(?![${tr}])[^\n\\]*`, "g"), FA = new RegExp(
  String.raw`^(?:${Om.source}|${qm.source})`
);
function Ql(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Om, "").replace(qm, "");
    return FA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function Mc(e) {
  if (E(e) && ne(e, oe) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Le(t)) return !0;
  return !1;
}
function zA(e) {
  return Mc(e.anchor.getNode()) || Mc(e.focus.getNode());
}
function KA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && Mc(t.getNode());
}
function BA(e, t) {
  const n = KA(e) ? t : Xl(Ql(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function jA(e, t = !1, r = () => {
}) {
  const n = vc(e, ii()._config.namespace);
  if (!n) return !1;
  const i = q(), s = N(i) && zA(i);
  if (!s && n.isInternal || t && N(i) && ti(i))
    return !1;
  const { text: o } = n;
  if (!o || !N(i)) return !1;
  if (e?.preventDefault(), s)
    return BA(i, o), !0;
  const a = Xl(Ql(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = ii();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Ds, void 0), u === "") return;
    const f = q();
    N(f) && f.insertText(u);
  }), !0;
}
function VA(e) {
  if (e.getTextContent() !== I) return !1;
  const t = e.getParent();
  return j(t) ? !Et(e.getPreviousSibling()) : !1;
}
function WA(e, t) {
  if (t || e.getTextContent() !== I) return "";
  const r = e.getParent();
  if (!j(r) || !Et(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function HA(e) {
  const t = e.getParent();
  return (j(t) ? t.getCaller() : void 0) || Wi;
}
function GA(e) {
  const t = e.getParent();
  return !t || Xr(t) === void 0;
}
function Rm(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Ic(e);
  let l = "", u = !0;
  for (const d of t) {
    if (F(d) && !d.isInline()) {
      !u && GA(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, Et(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + HA(d));
    else if (E(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += VA(d) ? "" : f.replaceAll(I, " ") + WA(d, d === n);
    } else (bo(d) || ps(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(I, " "));
  }
  return l;
}
function $m(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function JA(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => Me(r) || Ne(r)
    )
  );
}
function YA(e) {
  const t = q();
  if (!N(t) || t.isCollapsed()) return;
  const r = Rm(t), n = {
    "text/plain": r,
    "text/html": $m(r)
  };
  if (Do() || JA(t)) return n;
  const i = eb(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function mf(e, t, r) {
  const n = q();
  if (!N(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !ng();
  const i = YA(t);
  return i ? Im(e, t, n, i, r) : !1;
}
function Im(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || tb(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const Lm = Kf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Oa(e) {
  const t = e();
  return Wr(qf), Wr(np), t;
}
const yf = 8, XA = 1e3;
function Jn(e, t) {
  const r = we(e) ? ["va", "vp"] : He(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    tx(Mn(n), e, t.pendingKeys);
}
function QA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Fc) || i.updateTags.has(Hi)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = se(o);
        if (!c) continue;
        const l = En(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = se(o.getKey());
        c?.isAttached() && Mn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(xr, r),
    e.registerMutationListener(Nr, r),
    e.registerMutationListener(wr, r)
  );
}
function Ec(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = q();
  return r ? t ? dg(r, t) : N(r) && ti(r) : !1;
}
function ZA(e, t, r) {
  return Ve(
    e.registerCommand(
      vr,
      (n) => {
        if (Do() || Ec(t)) return !1;
        const i = vc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Xl(Ql(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = af(o, t.getMarker);
          if (a === "declined" && KE(e) && (a = af(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Gt
    ),
    e.registerCommand(
      vr,
      (n) => {
        const i = vc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !vM()) return !1;
        const o = q();
        return t.structureProtectionMode === "protected" && N(o) && ti(o) ? !1 : (n?.preventDefault(), N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ds, void 0), a === "") return;
          const l = q();
          N(l) && l.insertText(a);
        }), !0);
      },
      Ce
    ),
    e.registerCommand(
      vr,
      () => (t.splitExpected.current = !0, !1),
      Ct
    )
  );
}
function e1({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = ae(), o = e?.markerMode === "editable", a = !!e && Lo(e), c = Z(void 0), l = Z(n);
  return K(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? lr, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), K(() => {
    if (!o || !e) return;
    const u = {
      viewOptions: e,
      getMarker: t ?? lr,
      pendingKeys: /* @__PURE__ */ new Set(),
      splitExpected: { current: !1 },
      wholeParaDeleteExpected: /* @__PURE__ */ new Set(),
      collapsedDeleteCaretParas: /* @__PURE__ */ new Set(),
      rebuildAttempted: /* @__PURE__ */ new Set(),
      logger: r,
      structureProtectionMode: i
    };
    c.current = u;
    const d = WT(s, u.pendingKeys);
    let f, p = !1, g, h = !1, b = !1, x = 0;
    const T = () => x < yf ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${yf} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), v = (_, w = "departure") => {
      s.update(() => {
        x = Oa(
          () => Os(u, _, w)
        ) ? x + 1 : 0;
      });
    };
    let A;
    const S = () => {
      if (A !== void 0 && clearTimeout(A), A = void 0, b || u.pendingKeys.size === 0) return;
      const _ = l.current ?? XA;
      _ < 0 || (A = setTimeout(() => {
        A = void 0, !(b || u.pendingKeys.size === 0) && (p || T() || v(void 0, "idle"));
      }, _));
    }, D = Ve(
      s.registerNodeTransform(xr, (_) => {
        if (s.isComposing()) return;
        fA(_, u);
        const w = En(_);
        w && (we(w.owner) || j(w.owner) || Ne(w.owner) || He(w.owner) && Mo(w.owner).wrapper === void 0) && Jn(w.owner, u);
      }),
      s.registerNodeTransform(pt, (_) => {
        s.isComposing() || (gA(_, u), Jn(_, u));
      }),
      s.registerNodeTransform(qt, (_) => {
        s.isComposing() || (bA(_), _.isAttached() && Jn(_, u));
      }),
      s.registerNodeTransform(rt, (_) => {
        s.isComposing() || IE(_, u);
      }),
      s.registerNodeTransform(ye, (_) => {
        if (!s.isComposing()) {
          FE(_, u);
          for (const w of ["separator", "char"])
            _.isAttached() && bs(Mn(w), _) && u.pendingKeys.add(_.getKey());
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
      s.registerNodeTransform(Xt, (_) => {
        s.isComposing() || Jn(_, u);
      }),
      s.registerNodeTransform(wr, (_) => {
        if (s.isComposing()) return;
        const w = En(_);
        w && (He(w.owner) || we(w.owner) || j(w.owner) || Ne(w.owner)) && Jn(w.owner, u);
      }),
      s.registerNodeTransform(Ae, (_) => {
        s.isComposing() || (UE(_, u), Jn(_, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Rr, (_) => {
        s.isComposing() || pA(_, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(Be, (_) => {
        s.isComposing() || CA(_, u);
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
        (_) => {
          s.getEditorState().read(() => {
            for (const [w, $] of _) {
              if ($ === "destroyed") continue;
              const H = se(w);
              !H || ne(H, oe) !== "attribute" || Le(H.getParent()) || s.getElementByKey(w)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      QA(s, u),
      ...a ? [
        s.registerNodeTransform(Be, (_) => {
          s.isComposing() || IA(_);
        }),
        s.registerCommand(
          ko,
          (_) => mf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
            s,
            !1
          ),
          Ce
        ),
        s.registerCommand(
          _n,
          (_) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            mf(
              _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
              s,
              !0
            )
          ),
          Ce
        ),
        s.registerCommand(
          vr,
          (_) => jA(
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
          Ce
        )
      ] : [],
      s.registerCommand(
        _n,
        () => (!Ec(u) && !Do() && _c(u), !1),
        Gt
      ),
      s.registerCommand(
        Lc,
        () => (s.isComposing() || qE(u), !1),
        Qn
      ),
      s.registerCommand(
        yo,
        () => (p = !1, x = 0, S(), !1),
        Ct
      ),
      s.registerCommand(
        Pr,
        (_) => (p = !1, x = 0, S(), (_.key === "Backspace" || _.key === "Delete") && !Ec(u, ag(_)) && (_c(u), OE(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !_.ctrlKey || _.altKey || _.shiftKey || _.metaKey || _.key !== " " && _.code !== "Space" || !SM() ? !1 : (_.preventDefault(), !0)),
        Ce
      ),
      s.registerCommand(
        Uf,
        (_) => {
          const w = gm();
          w === "needs-plain-split" && s.dispatchCommand(Ds, void 0);
          const $ = w !== "declined" || rx();
          return $ && _?.preventDefault(), Os(u), $;
        },
        Ce
      ),
      s.registerCommand(
        Ds,
        () => (u.splitExpected.current = !0, wg()),
        Ce
      ),
      ZA(s, u, a),
      s.registerCommand(
        Lm,
        () => {
          if (p) return !0;
          const _ = s.getRootElement(), w = _?.ownerDocument, $ = !!_ && !!w && w.hasFocus() && _.contains(w.activeElement);
          let H;
          if ($) {
            const Q = q();
            H = N(Q) ? Q.focus.key : f;
          }
          return Oa(() => Os(u, H)), !0;
        },
        Ct
      ),
      s.registerCommand(
        Uc,
        () => {
          if (p) return !1;
          const _ = q(), w = N(_) ? _.focus.key : f;
          return Oa(() => Os(u, w)), !1;
        },
        Ct
      ),
      s.registerUpdateListener(({ editorState: _, tags: w }) => {
        u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const $ = _.read(() => {
          const Q = q();
          return N(Q) ? Q.focus.key : void 0;
        }), H = g;
        if ($ !== void 0 && (g = $), w.has(Fc)) {
          u.pendingKeys.clear(), _.read(() => vA(u)), p = !0, $ !== void 0 && (f = $);
          return;
        }
        if (w.has(Hr)) {
          $ !== void 0 && $ !== H && (p = !0);
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
const t1 = ["status_unknown", "status_invalid"], Dm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, r1 = Object.values(Dm);
function n1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Dm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function bf(e) {
  e.classList.remove(...t1), e.removeAttribute("aria-description"), r1.includes(e.title) && e.removeAttribute("title");
}
function i1(e, t, r, n) {
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
function s1(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function o1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ae(), i = e?.markerMode === "editable";
  return K(() => {
    if (!i) return;
    const s = t ?? Js;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = XM(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || s1(f)) continue;
            const g = se(f)?.getTopLevelElement();
            !g || l.has(g.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && bf(p);
        }
        for (const [f, p] of d) {
          const g = n.getElementByKey(f);
          g && n1(g, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          i1(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && bf(u);
      }
    };
  }, [n, i, t, r]), null;
}
function a1(e, t) {
  const r = Ml(Cl), n = bl();
  if (!r || !n?.end) return;
  const i = $s.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = Xy({
    namespace: "markers-view-copy",
    nodes: [et, ...Tl],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    hr.serializeEditorState(i, r)
  ).read(
    () => {
      const a = $o(n);
      return a ? Rm(a) : void 0;
    },
    { editor: s }
  );
}
function c1({ viewOptions: e }) {
  const [t] = ae();
  return K(() => {
    const r = (n, i) => {
      const s = q();
      if (!N(s) || s.isCollapsed()) return !1;
      const o = a1(t, e);
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
      t.registerCommand(ko, (n) => r(n, !1), Ce),
      t.registerCommand(_n, (n) => r(n, !0), Ce)
    );
  }, [t, e]), null;
}
function Um(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = mr(o);
    a && F(s) && Um(s.getChildren(), a, r);
  }
}
function po(e, t, r = 0) {
  let n = r;
  const i = (s) => {
    for (let o = 0; o < s.length; o++) {
      const a = s[o], c = mr(a);
      if (c) {
        i(c);
        continue;
      }
      const l = hi(a);
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
function Zl(e, t, r) {
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
    Qg(n, t) || ((ce(n) || U(n)) && r.push(n.getMarker()), F(n) && r.push(...Fm(n.getChildren(), t)));
  return r;
}
function zm(e) {
  const t = [];
  for (const r of e) {
    const n = Vl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = mr(r);
    i && t.push(...zm(i));
  }
  return t;
}
function us(e, t, r) {
  const n = Fm(e, r), i = zm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function l1(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = q();
  let n, i;
  if (N(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = se(t.key), i = t.offset;
  else
    return;
  if (!(!E(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Ho(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function u1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  if (!Ko(c, e, o, s)) return;
  const l = i ? Ho(c, i) : c.text, u = br(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if ($r(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = hr.serializeEditorState(
    { type: dr, version: ur, content: u },
    s
  ).root.children;
  if (Ci(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Zl(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (yr(d, o) === gr(e, o) && us(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  po(d, f);
  const g = Km(e), h = eu(d);
  for (let b = 0; b < g.length && b < h.length; b++)
    g[b].sid !== void 0 && h[b].number === g[b].number && (h[b].sid = g[b].sid);
  return d;
}
function Km(e) {
  const t = [], r = (n) => {
    we(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function eu(e) {
  const t = [];
  for (const r of e) {
    Rp(r) && t.push(r);
    const n = mr(r);
    n && t.push(...eu(n));
  }
  return t;
}
function d1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = xc(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Ho(l, i) : l.text, f = br(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if ($r(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = p.content ?? [], h = am(g), b = e.getCategory() !== h, x = Jg(e, g, h, s);
  if (x.failure !== void 0) {
    x.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : x.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const T = x.children;
  if (Ci(T) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const v = Zl(l, t, n);
  if (!v) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (yr(T, o) === gr(u, o) && us(u, T, o)) {
    if (b)
      return { rebuilt: void 0, contentNodes: u, category: h, categoryChanged: b };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return po(T, v), { rebuilt: T, contentNodes: u, category: h, categoryChanged: b };
}
function kf(e) {
  return e.$?.textType;
}
function f1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && kf(e) === kf(t);
}
function p1(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && De(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function h1(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (rn(e)) return;
  const n = Hg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Tf(e, t) {
  const r = e;
  r.marker = t, r.text = em(t, r.markerSyntax, r.nested);
}
function g1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ae.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Tf(a.node, s);
  const c = n.getChildren().filter(O).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Tf(l.node, s);
}
function m1(e, t, r, n, i, s) {
  const { viewOptions: o, getMarker: a, logger: c } = r, { out: l, contentNodes: u } = co(e, a, o);
  if (u.length === 0 && s.length === 0 || !Ko(l, s, a, o)) return;
  const d = i ? Ho(l, i) : l.text, f = cm(d, a);
  if ($r(f.content) !== l.sentinels.length) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const p = Yg(
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
  if (Ci([...g, ...h]) !== l.sentinels.length) {
    c?.warn(
      "[MarkerEdit] Settled book USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const b = Zl(l, t, n);
  if (!b) {
    c?.warn("[MarkerEdit] Settled book USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (h.length === s.length && yr(h, a) === gr(s, a) && us(s, h, a) && yr(g, a) === gr(u, a) && us(u, g, a)) {
    c?.debug("[MarkerEdit] Settled book USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  const x = po(g, b);
  po(h, b, x);
  const T = Km([...u, ...s]), v = eu([...g, ...h]);
  for (let A = 0; A < T.length && A < v.length; A++)
    T[A].sid !== void 0 && v[A].number === T[A].number && (v[A].sid = T[A].sid);
  return { rebuilt: g, contentNodes: u, followingBlocks: h };
}
function y1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = fm(e, i, n);
  if (!o) return;
  const a = r ? Ho(o, r) : o.text, c = br(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if ($r(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = hr.serializeEditorState(
    { type: dr, version: ur, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Vo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && yr(u, i) === gr(d, i) && us(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function b1(e, t, r, n, i) {
  const s = l1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = (T) => {
    j(T) ? c.set(T.getKey(), T) : Ne(T) ? l.set(T.getKey(), T) : Me(T) ? u.set(T.getKey(), T) : o.set(T.getKey(), [T]);
  };
  for (const T of t) {
    const v = se(T);
    if (!v?.isAttached()) continue;
    const A = ls(v);
    if (A) {
      if (p(A), O(v)) {
        const S = xm(v, r.getMarker);
        S && a.push(S);
      }
      if (j(A)) {
        const S = h1(v);
        S && f.set(A.getKey(), S);
      }
    }
  }
  const g = /* @__PURE__ */ new Set();
  for (const [T, v] of a)
    g.has(T.getKey()) || g.has(v.getKey()) || ([T, v].forEach((A) => {
      g.add(A.getKey()), o.delete(A.getKey());
    }), Me(T) ? (u.set(T.getKey(), T), d.set(T.getKey(), [v])) : o.set(T.getKey(), [T, v]));
  if (s) {
    const T = ls(s.node);
    T && p(T);
  }
  const h = p1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && u.size === 0 && h.length === 0)
    return;
  const b = new Set(h.map((T) => T.getKey())), x = /* @__PURE__ */ new Map();
  Um(ze().getChildren(), e.root.children, x);
  for (const T of f.values()) g1(T, x);
  for (const T of c.values()) {
    const v = x.get(T.getKey()), A = v ? mr(v.node) : void 0;
    if (!v || !A) continue;
    const S = d1(T, x, r, b, s);
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
    const A = u1(T, x, r, b, s);
    if (!A) continue;
    const S = v.siblings.indexOf(v.node);
    S < 0 || v.siblings.splice(S, T.length, ...A);
  }
  for (const T of u.values()) {
    const v = x.get(T.getKey()), A = v ? mr(v.node) : void 0;
    if (!v || !A) continue;
    const S = d.get(T.getKey()) ?? [], D = m1(T, x, r, b, s, S);
    if (!D) continue;
    const _ = D.contentNodes.at(0), w = _ ? x.get(_.getKey()) : void 0;
    if (_ && !w) continue;
    const $ = w ? A.indexOf(w.node) : A.length, H = v.siblings.indexOf(v.node);
    $ < 0 || H < 0 || (A.splice($, D.contentNodes.length, ...D.rebuilt), v.siblings.splice(H + 1, S.length, ...D.followingBlocks));
  }
  for (const T of l.values()) {
    const v = x.get(T.getKey());
    if (!v) continue;
    const A = 1 + Vo(T).length, S = y1(T, r, s);
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
    const S = v.siblings[A - 1], D = v.siblings[A], _ = S && hi(S), w = D && hi(D);
    S && D && _ !== void 0 && w !== void 0 && f1(S, D) && (S.text = _ + w, v.siblings.splice(A, 1));
  }
  return kg(e, r.viewOptions);
}
function k1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = In(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return K(() => {
    if (n)
      return r.registerNodeTransform(
        rt,
        (i) => T1(i, t)
      );
  }, [r, n, t]), null;
}
function T1(e, t) {
  e.getMarker() !== Ut && (e.isEmpty() || gt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Ut}" (key ${e.getKey()})`
  ), e.setMarker(Ut)));
}
function x1({
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
  return K(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, ho(s, e) || _1(i, r, e);
  }, [r, e, t]), K(
    () => r.registerMutationListener(
      Kt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Ac(r);
        xf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: qs(s) === qs(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), K(() => {
    const i = (a) => a.read(
      () => new Set(
        ze().getChildren().filter(Ye).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Ac(r) || xf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: qs(a) === qs(c)
      }));
    };
    return Ve(
      ...[qt, Tr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), K(
    () => r.registerCommand(
      fr,
      () => {
        const i = n.current;
        return i.phase === "idle" && M1(i, S1()), !1;
      },
      Ct
    ),
    [r]
  ), K(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(fr, void 0));
    };
    return Ve(
      r.registerMutationListener(Mt, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), K(() => {
    const i = () => N1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function _1(e, t, r) {
  if (C1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Ac(t);
  (!n || n === r.book) && t.update(() => Bm(r.chapterNum, r.verseNum), {
    tag: Hr
  });
}
function C1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => ho(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function S1() {
  const e = q(), t = el(e);
  if (!t) return;
  const r = tu(), n = Lp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = pl(t, e), { verseNum: o, verse: a } = vx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Ac(e) {
  return e.getEditorState().read(() => tu()?.getCode() || void 0);
}
function tu() {
  return ze().getChildren().find(Me);
}
function xf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && qa(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || qa(e, t), e.phase = "navigating") : i && qa(e, t), r && r !== e.scrRef.book && Wm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function qa(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Bm(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Hr }
    );
  });
}
function Bm(e, t) {
  const r = el(q()), n = hl(r)?.getNumber(), i = Lp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (jp(n) ? Vm(t, n) : parseInt(n, 10) === t))
    return;
  const o = ze().getChildren(), a = Ip(o, e);
  if (!a) return;
  const c = Dk(o, a), l = Ok(c, !0);
  Lk(c, l);
  let u;
  try {
    u = Tx(c, t);
  } catch {
    return;
  }
  u && (ce(u) ? !E(u.getFirstChild()) && _i(u) || Zt(u, 0) : v1(u));
}
function v1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ge(n)) {
    Zt(t, r);
    return;
  }
  const i = Po(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = F(n) && !j(n) ? jm(n) : void 0;
  s ? s.select(0, 0) : Zt(t, r);
}
function jm(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (F(t) && !j(t)) return jm(t);
}
function qs(e) {
  return e.read(() => {
    const t = ze().getChildren().find(Ye);
    return `${tu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function M1(e, t) {
  e.phase !== "navigating" && t && (E1(t, e.scrRef) || Wm(e, A1(t, e.scrRef)));
}
function E1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Vm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Vm(e, t) {
  try {
    return tl(e, t);
  } catch {
    return !1;
  }
}
function A1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const P1 = 8;
function Wm(e, t) {
  return ho(t, e.scrRef) || e.pendingEchoes.some((r) => ho(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > P1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function ho(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function N1(e) {
  e.phase = "idle";
}
function w1(e) {
  return Me(e) ? `${e.__code}` : Ne(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : gs(e) ? `${e.__marker} "${e.__number}"` : Et(e) ? `${e.__caller}` : $n(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ce(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${O1(e)}` : me(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : we(e) ? `${e.__marker} "${e.__number}"` : "";
}
function O1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[hs]) : "";
}
function q1() {
  const [e] = ae();
  return /* @__PURE__ */ M(
    rb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: w1,
      editor: e
    }
  );
}
const Hm = Pf(null), _f = 4;
function R1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Z(null), s = Nf(Hm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return K(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ M("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function $1({
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
  }, l = Ke(() => ({ registerItem: a }), [a]);
  return K(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ M(Hm.Provider, { value: l, children: /* @__PURE__ */ M("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function I1({
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
  return K(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: g, left: h } = f.getBoundingClientRect();
      p.style.top = `${g + f.offsetHeight + _f}px`, p.style.left = `${Math.min(h, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), K(() => {
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
  }, [a, c, l, o]), K(() => {
    const f = () => {
      if (l) {
        const p = c.current, g = a.current;
        if (p !== null && g !== null) {
          const { top: h } = p.getBoundingClientRect(), b = h + p.offsetHeight + _f;
          b !== g.getBoundingClientRect().top && (g.style.top = `${b}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ xe(Tn, { children: [
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
          i && /* @__PURE__ */ M("span", { className: i }),
          t && /* @__PURE__ */ M("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ M("i", { className: "chevron-down" })
        ]
      }
    ),
    l && kn(
      /* @__PURE__ */ M($1, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const Pc = {
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
}, Nc = {
  ...Pc,
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
function L1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ M(
    I1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + D1(t),
      buttonLabel: U1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Pc).map((n) => /* @__PURE__ */ xe(
        R1,
        {
          className: "item block-marker " + F1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ M("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ M("span", { className: "text usfm_" + n, children: Pc[n] })
          ]
        },
        n
      ))
    }
  );
}
function D1(e) {
  return e && e in Nc ? e : "ban";
}
function U1(e) {
  return e && e in Nc ? Nc[e] : "No Style";
}
function F1(e) {
  return e ? "active dropdown-item-active" : "";
}
function Cf() {
  return /* @__PURE__ */ M("div", { className: "divider" });
}
const z1 = wn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ae(), [o, a] = de(s), [c, l] = de(), [u, d] = de(!1), [f, p] = de(!1), g = he(
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
  return K(() => s.registerCommand(
    fr,
    (h, b) => (a(b), !1),
    Gt
  ), [s]), /* @__PURE__ */ xe(Tn, { children: [
    /* @__PURE__ */ M(og, { onStateChange: g }),
    /* @__PURE__ */ xe("div", { className: "toolbar", children: [
      /* @__PURE__ */ M(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Bf, void 0);
          },
          title: Us ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(jf, void 0);
          },
          title: Us ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ M("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ M(Cf, {}),
      o === s && /* @__PURE__ */ xe(Tn, { children: [
        /* @__PURE__ */ M(
          L1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ M(Cf, {})
      ] }),
      /* @__PURE__ */ M("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), K1 = Io(), B1 = {}, j1 = {};
function V1() {
  return /* @__PURE__ */ M("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const Gm = wn(function({
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
    isReadonly: H = !1,
    structureProtectionMode: Q = "off",
    hasExternalUI: Ee = !1,
    hasSpellCheck: re = !1,
    textDirection: qe = "ltr",
    markerMenuTrigger: ke = "\\",
    view: rr,
    nodes: Re,
    debug: on = !1,
    contextMenu: _r,
    styleInfo: At,
    markerSettleDelayMs: te
  } = a ?? j1, P = rr ?? K1, J = is(P) && (P.markerMode !== "hidden" || !P.hasSpacing || P.hasGutterParaMarkers || P.hasActiveTextFocusBox) ? {
    ...P,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : P, le = Z(J);
  Rt(le.current, J) || (le.current = J);
  const W = le.current, _e = Ke(() => Re ?? B1, [Re]), yt = Ke(() => _r, [_r]), Bt = Ke(
    () => dx(At ?? Js),
    [At]
  ), bt = Z(c);
  Rt(bt.current, c) || (bt.current = c);
  const Ge = bt.current, ut = is(W), ue = H || ut, Ln = J !== P;
  K(() => {
    ut && !H && Ge?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Ln && Ge?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), W?.markerMode === "visible" && !H && Ge?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ut, H, Ln, Ge, W?.markerMode]);
  const be = Z(null), Si = Ke(() => {
    if (W.markerMode !== "editable") return;
    const R = At ?? Js;
    return {
      getContext: () => be.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (B) => sE(
        R,
        B,
        _e.extraValidMarkers
      ),
      getEnterItems: (B) => oE(
        R,
        B,
        _e.extraValidMarkers
      ),
      apply: (B, Y) => {
        const X = be.current;
        X && (Y.trigger === "enter" ? X.splitParagraphWithMarker(B.marker) : X.applyMarkerMenuSelection(B, Y));
      },
      commitTypedCloser: (B) => {
        be.current?.commitTypedCloser(B);
      }
    };
  }, [W, At, _e.extraValidMarkers]), Se = (R) => {
    v.current || (v.current = !0, bt.current?.warn(
      `Editor: cannot ${R} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ir = (R) => {
    if (ut)
      throw new Error(
        `Cannot ${R} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Lr = (R) => {
    if (Ir(R), ue) throw new Error(`Cannot ${R} in readonly mode`);
  }, nr = Ke(
    () => ({
      namespace: "platformEditor",
      theme: { ...zg, showCharMarkerTitles: W.showCharMarkerTitles },
      editable: !ue,
      editorState: void 0,
      // Handling of errors during update
      onError(R) {
        throw R;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [et, ...ut ? S_ : Tl]
    }),
    [ue, ut, W.showCharMarkerTitles]
  );
  $s.initialize(Ge);
  function Dr(R) {
    if (R !== void 0 && !EM(R, _e.extraValidMarkers))
      throw new Error(`Unsupported character marker '${R}'`);
  }
  const an = he(() => {
    const R = d.current;
    if (!R) return g.current;
    const B = Vu(R), Y = b.current;
    if ((!B || B.size === 0) && !Y) return g.current;
    const X = R.getEditorState(), ve = X.toJSON();
    return X.read(
      () => b1(
        ve,
        B ?? /* @__PURE__ */ new Set(),
        { viewOptions: W, getMarker: Bt, logger: Ge },
        Y,
        x.current
      )
    ) ?? g.current;
  }, [W, Bt, Ge]), vi = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const R = d.current?.getRootElement();
      return !!R && R.ownerDocument.activeElement === R;
    },
    undo() {
      d.current?.dispatchCommand(Bf, void 0);
    },
    redo() {
      d.current?.dispatchCommand(jf, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      Lr("cut"), d.current && Nl(d.current);
    },
    copy() {
      d.current && Pl(d.current);
    },
    paste() {
      Lr("paste"), d.current && wl(d.current);
    },
    pastePlainText() {
      Lr("paste as plain text"), d.current && Ol(d.current);
    },
    getUsj() {
      return an();
    },
    commitPendingMarkerEdits() {
      d.current?.update(
        () => {
          d.current?.dispatchCommand(Lm, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(R) {
      if (!R) {
        b.current = void 0;
        return;
      }
      const B = d.current?.getEditorState().read(() => {
        const Y = q();
        return N(Y) && Y.isCollapsed() ? Y.focus.key : void 0;
      });
      b.current = { input: R, nodeKey: B ?? x.current?.key };
    },
    setUsj(R) {
      if (!Rt(g.current, R)) {
        g.current = R, b.current = void 0;
        const B = Rt(A, R);
        S(R), B && _((Y) => Y + 1);
      }
    },
    applyUpdate(R, B = "remote") {
      if (ut && B === "remote") {
        bt.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Ir("apply an update"), d.current?.update(
        () => {
          B === "remote" && Wr(Hi), X_(R, W, _e, Ge);
        },
        { discrete: !0 }
      );
      const Y = d.current?.getEditorState();
      if (!Y) return;
      const X = $s.deserializeEditorState(Y, W);
      if (X) {
        const ve = !Rt(g.current, X);
        if (ve && (g.current = X), ve || !Rt(A, X)) {
          const at = nd(R, Y, "apply");
          T.current = X, s?.(X, R, B, at);
        }
      }
    },
    replaceEmbedUpdate(R, B) {
      const Y = d.current?.read(() => Lx(R, B));
      Y ? this.applyUpdate(Y) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${R}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ut) {
        Se("get the selection");
        return;
      }
      return d.current?.read(bl);
    },
    setSelection(R) {
      if (ut) {
        Se("set the selection");
        return;
      }
      d.current?.update(() => {
        const B = $o(R);
        B !== void 0 && (si(B), Wr(rp));
      });
    },
    setAnnotation(R, B, Y, X, ve) {
      if (ut) {
        Se("set an annotation");
        return;
      }
      let at, dt, cn, ln;
      typeof X == "function" || X === void 0 ? (at = X, dt = ve) : (at = X.onClick, dt = X.onRemove, cn = X.onMouseEnter, ln = X.onMouseLeave), f.current?.setAnnotation(
        R,
        qu(B),
        Y,
        at,
        dt,
        cn,
        ln
      );
    },
    removeAnnotation(R, B) {
      f.current?.removeAnnotation(qu(R), B);
    },
    formatPara(R) {
      Lr("format a paragraph"), d.current?.update(
        () => {
          const B = q();
          if (!N(B)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${R}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          const Y = B.isBackward() ? B.focus : B.anchor;
          if (je(Y.getNode(), Me)) {
            Sc(R, W) || c?.warn(
              `formatPara refused: could not split the \\id line at the caret to retag with "${R}"`
            );
            return;
          }
          sb(B, () => oi(R));
          const X = q();
          if (!N(X)) return;
          const ve = /* @__PURE__ */ new Set();
          X.getNodes().forEach((at) => {
            const dt = at.getTopLevelElement();
            ce(dt) && ve.add(dt);
          }), ve.forEach((at) => hm(at, R, W));
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
      Dr(R);
      let B = !1;
      return d.current?.update(
        () => {
          const Y = q();
          N(Y) && (B = $g(Y, R, W));
        },
        { discrete: !0 }
      ), B;
    },
    replaceCharacterMarker(R, B) {
      if (ue) throw new Error("Cannot replace character marker in readonly mode");
      Dr(R), Dr(B);
      let Y = !1;
      return d.current?.update(
        () => {
          const X = q();
          N(X) && (Y = UM(X, R, B));
        },
        { discrete: !0 }
      ), Y;
    },
    extendCharacterMarker(R, B) {
      if (ue) throw new Error("Cannot extend character marker in readonly mode");
      Dr(R), B?.forEach(
        (X) => Dr(X)
      );
      let Y = !1;
      return d.current?.update(
        () => {
          const X = q();
          N(X) && (Y = FM(
            X,
            R,
            B,
            W
          ));
        },
        { discrete: !0 }
      ), Y;
    },
    insertMarker(R) {
      if (ue) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!gc(R, _e.extraValidMarkers))
        throw new Error(`Unsupported marker '${R}'`);
      const B = mc(
        R,
        h,
        W,
        _e,
        Ge,
        void 0,
        At
      );
      return B.action({ editor: d.current, reference: r }), B.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!H)
        return d.current?.getEditorState().read(() => YE());
    },
    applyMarkerMenuSelection(R, B) {
      if (H) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (R.kind !== "closeTag" && !gc(R.marker, _e.extraValidMarkers))
        throw new Error(`Unsupported marker '${R.marker}'`);
      let Y;
      return d.current.update(() => {
        Y = sA(R, B, r, {
          expandedNoteKeyRef: h,
          viewOptions: W,
          nodeOptions: _e,
          logger: c,
          styleInfo: At
        });
      }), Y;
    },
    splitParagraphWithMarker(R) {
      if (H) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        Sc(R, W);
      });
    },
    commitTypedMarker(R, B) {
      if (H) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let Y = !1;
      return d.current.update(() => {
        Y = nA(R, B), Y || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), Y;
    },
    commitTypedCloser(R) {
      if (H) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let B = !1;
      return d.current.update(() => {
        B = Tm(R), B || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), B;
    },
    insertNote(R, B, Y) {
      Lr("insert a note"), d.current?.update(
        () => {
          const X = Ih(
            R,
            B,
            Y,
            r,
            W,
            _e,
            Ge
          );
          X && !X.getIsCollapsed() && (h.current = X.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(R) {
      d.current?.update(() => {
        const B = ld(R);
        B && (x_(B, W), B.getIsCollapsed() || (h.current = B.getKey()));
      });
    },
    getNoteOps(R) {
      return d.current?.read(() => {
        const B = ld(R);
        if (B)
          return ml(B);
      });
    },
    get toolbarEndRef() {
      return p;
    }
  };
  be.current = vi, Oc(u, () => vi), K(() => {
    const R = d.current;
    if (R)
      return R.registerUpdateListener(({ editorState: B }) => {
        B.read(() => {
          const Y = q();
          if (!N(Y) || !Y.isCollapsed()) return;
          const X = Y.focus.getNode();
          E(X) && (x.current = { key: X.getKey(), offset: Y.focus.offset });
        });
      });
  }, []);
  const ks = he(
    (R, B, Y, X) => {
      if (ut) return;
      const ve = $s.deserializeEditorState(R, W);
      if (ve) {
        const at = !Rt(g.current, ve);
        if (at && (g.current = ve), at || !Rt(A, ve)) {
          const dt = nd(X, R);
          T.current = ve, s?.(ve, X, "local", dt);
        }
      }
    },
    [A, s, W, ut]
  );
  K(() => {
    const R = d.current;
    if (!(!R || !s))
      return R.registerUpdateListener(({ tags: B, dirtyElements: Y, dirtyLeaves: X }) => {
        !B.has(Fc) && (Y.size === 0 && X.size === 0 || B.has(Hi) || !Vu(R)?.size) || queueMicrotask(() => {
          const ve = an();
          !ve || Rt(T.current, ve) || (T.current = ve, s(ve, void 0, "local", void 0));
        });
      });
  }, [s, an]);
  const jt = he(
    (R) => {
      $(R.contextMarker), o?.(R);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ xe(Hf, { initialConfig: nr, children: [
      /* @__PURE__ */ M(rS, { isEditable: !ue }),
      /* @__PURE__ */ xe("div", { className: "editor-container", children: [
        Ee ? /* @__PURE__ */ M(og, { onStateChange: jt }) : /* @__PURE__ */ M(
          "div",
          {
            className: "editor-toolbar-container" + (ue ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ M(
              z1,
              {
                ref: p,
                editorRef: be,
                isReadonly: ue,
                onStateChange: jt
              }
            )
          }
        ),
        /* @__PURE__ */ xe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ M(Jf, { editorRef: d }),
          /* @__PURE__ */ M(
            ib,
            {
              contentEditable: /* @__PURE__ */ M(
                Gf,
                {
                  className: `editor-input usfm ${Y_(W).join(" ")}${W.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${W.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: re
                }
              ),
              placeholder: /* @__PURE__ */ M(V1, {}),
              ErrorBoundary: Yf
            }
          ),
          Ee && /* @__PURE__ */ M(tS, {}),
          /* @__PURE__ */ M(Xf, {}),
          r && n && /* @__PURE__ */ M(x1, { scrRef: r, onScrRefChange: n }),
          r && !Ee && /* @__PURE__ */ M(
            Sv,
            {
              trigger: ke,
              scrRef: r,
              contextMarker: w,
              getMarkerAction: (R) => mc(
                R,
                h,
                W,
                _e,
                Ge,
                void 0,
                At
              ),
              editableHarness: Si
            }
          ),
          /* @__PURE__ */ M(
            sS,
            {
              scripture: A,
              scriptureRef: g,
              nodeOptions: _e,
              editorAdaptor: hr,
              viewOptions: W,
              logger: Ge
            },
            D
          ),
          /* @__PURE__ */ M(vS, { onChange: i }),
          /* @__PURE__ */ M(
            j_,
            {
              onChange: ks,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Mb
            }
          ),
          /* @__PURE__ */ M(VM, { viewOptions: W }),
          /* @__PURE__ */ M(K_, { ref: f, logger: Ge }),
          /* @__PURE__ */ M(CC, { viewOptions: W }),
          /* @__PURE__ */ M(LC, {}),
          /* @__PURE__ */ M(BC, {}),
          W?.markerMode !== "editable" && /* @__PURE__ */ M(jC, { logger: Ge }),
          /* @__PURE__ */ M(JC, { options: yt }),
          /* @__PURE__ */ M(eS, {}),
          /* @__PURE__ */ M(iS, {}),
          /* @__PURE__ */ M(oA, {}),
          /* @__PURE__ */ M(
            e1,
            {
              viewOptions: W,
              getMarker: Bt,
              logger: Ge,
              markerSettleDelayMs: te,
              structureProtectionMode: Q
            }
          ),
          W?.markerMode === "visible" && /* @__PURE__ */ M(c1, { viewOptions: W }),
          /* @__PURE__ */ M(
            o1,
            {
              styleInfo: At,
              viewOptions: W,
              logger: Ge
            }
          ),
          /* @__PURE__ */ M(
            oS,
            {
              expandedNoteKeyRef: h,
              nodeOptions: _e,
              viewOptions: W,
              logger: Ge
            }
          ),
          /* @__PURE__ */ M(SS, {}),
          /* @__PURE__ */ M(bC, {}),
          /* @__PURE__ */ M(hC, {}),
          /* @__PURE__ */ M(k1, { viewOptions: W, logger: Ge }),
          /* @__PURE__ */ M(MS, {}),
          /* @__PURE__ */ M(dv, { structureProtectionMode: Q }),
          /* @__PURE__ */ M(fv, { textDirection: qe }),
          /* @__PURE__ */ M(hv, {}),
          /* @__PURE__ */ M(_v, {}),
          l
        ] }),
        on && /* @__PURE__ */ M(q1, {})
      ] })
    ] }, W.verseLayout ?? "inline")
  );
}), ZP = wn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ M(Gm, { ref: r, ...i });
});
function Jm() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function go(e, t, r, n, i) {
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
function Sf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function W1(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Ra(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class H1 {
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
    this._comments = t, Ra(this);
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
    this._comments = i, Ra(this);
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
    return this._comments = n, Ra(this), t.type === "comment" ? {
      index: s,
      markedComment: W1(t)
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
    return t !== null ? t.doc.get("comments", Tu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new xu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new Tu();
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
      Tb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      Ct
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof xb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const g = p.insert, h = p.retain, b = p.delete, x = u.parent, T = u === r ? void 0 : x instanceof xu && this._comments.find((v) => v.id === x.get("id"));
              if (Array.isArray(g)) {
                const v = f;
                g.slice().reverse().forEach((A) => {
                  const S = A.get("id"), _ = A.get("type") === "thread" ? Ym(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (w) => go(
                        w.get("content"),
                        w.get("author"),
                        w.get("id"),
                        w.get("timeStamp"),
                        w.get("deleted")
                      )
                    ),
                    S
                  ) : go(
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
function G1(e) {
  const [t, r] = de(e.getComments());
  return K(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function J1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Z(null);
  return K(() => {
    i.current !== null && i.current.focus();
  }, []), K(() => {
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
  }, [n, e]), /* @__PURE__ */ M("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ xe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function Y1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return kn(
    /* @__PURE__ */ M(J1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Xm() {
  const [e, t] = de(null), r = he(() => {
    t(null);
  }, []), n = Ke(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ M(Y1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const X1 = {
  ...zg,
  paragraph: "CommentEditorTheme__paragraph"
};
function Q1(...e) {
  return e.filter(Boolean).join(" ");
}
function en({
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
      className: Q1(
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
function Z1({
  className: e
}) {
  return /* @__PURE__ */ M(Gf, { className: e || "ContentEditable__root" });
}
function eP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ M("div", { className: t || "Placeholder__root", children: e });
}
const vf = Kf("INSERT_INLINE_COMMAND");
function tP({
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
  return K(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), ds(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ M("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ M("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ M("i", { className: "icon add-comment" }) }) });
}
function rP({ onEscape: e }) {
  const [t] = ae();
  return K(() => t.registerCommand(
    zf,
    (r) => e(r),
    Qn
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
  return /* @__PURE__ */ M(Hf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: X1
  }, children: /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ M(
      yb,
      {
        contentEditable: /* @__PURE__ */ M(Z1, { className: e }),
        placeholder: /* @__PURE__ */ M(eP, { children: s }),
        ErrorBoundary: Yf
      }
    ),
    /* @__PURE__ */ M(mb, { onChange: n }),
    /* @__PURE__ */ M(Xf, {}),
    t !== !1 && /* @__PURE__ */ M(pb, {}),
    /* @__PURE__ */ M(rP, { onEscape: r }),
    /* @__PURE__ */ M(hb, {}),
    i !== void 0 && /* @__PURE__ */ M(Jf, { editorRef: i })
  ] }) });
}
function Zm(e, t) {
  return he(
    (r, n) => {
      r.read(() => {
        e(bb()), t(!kb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function nP({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = Ke(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Z(null), u = ty(), d = he(() => {
    e.getEditorState().read(() => {
      const h = q();
      if (N(h)) {
        l.current = h.clone();
        const b = h.anchor, x = h.focus, T = ob(
          e,
          b.getNode(),
          b.offset,
          x.getNode(),
          x.offset
        ), v = a.current;
        if (T !== null && v !== null) {
          const { left: A, bottom: S, width: D } = T.getBoundingClientRect(), _ = ab(e, T);
          let w = _.length === 1 ? A + D / 2 - 125 : A - 125;
          w < 10 && (w = 10), v.style.left = `${w}px`, v.style.top = `${S + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const $ = _.length, { container: H } = c, Q = c.elements, Ee = Q.length;
          for (let re = 0; re < $; re++) {
            const qe = _[re];
            let ke = Q[re];
            ke === void 0 && (ke = document.createElement("span"), Q[re] = ke, H.appendChild(ke));
            const Re = `position:absolute;top:${qe.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${qe.left}px;height:${qe.height}px;width:${qe.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            ke.style.cssText = Re;
          }
          for (let re = Ee - 1; re >= $; re--) {
            const qe = Q[re];
            H.removeChild(qe), Q.pop();
          }
        }
      }
    });
  }, [e, c]);
  ds(() => {
    d();
    const h = c.container, b = document.body;
    return b !== null ? (b.appendChild(h), () => {
      b.removeChild(h);
    }) : () => {
    };
  }, [c.container, d]), K(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (h) => (h.preventDefault(), t(), !0), p = () => {
    if (s) {
      let h = e.getEditorState().read(() => {
        const b = l.current;
        return b ? b.getTextContent() : "";
      });
      h.length > 100 && (h = h.slice(0, 99) + "…"), r(
        Ym(h, [go(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, g = Zm(i, o);
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ M(
      Qm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: g
      }
    ),
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ M(en, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ M(
        en,
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
function iP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Z(null), c = ty(), l = Zm(i, o);
  return /* @__PURE__ */ xe(Tn, { children: [
    /* @__PURE__ */ M(
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
    /* @__PURE__ */ M(
      en,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(go(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(Qy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ M("i", { className: "send" })
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
  return /* @__PURE__ */ xe(Tn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ xe("div", { className: "Modal__content", children: [
      /* @__PURE__ */ M(
        en,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ M(
        en,
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
function Mf({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = de(0);
  K(() => {
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
  return /* @__PURE__ */ xe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ M("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ xe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ M("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ xe(Tn, { children: [
      /* @__PURE__ */ M(
        en,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ M(
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
          children: /* @__PURE__ */ M("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function sP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = de(0), [l, u] = Xm(), d = Ke(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return K(() => {
    const f = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(f);
    };
  }, [a]), /* @__PURE__ */ M("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ xe(
      "li",
      {
        onClick: () => {
          const h = s.get(p);
          if (h !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const b = document.activeElement;
            o.update(
              () => {
                const x = Array.from(h)[0], T = se(x);
                me(T) && T.selectStart();
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
          /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ xe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ M("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ M(
              en,
              {
                onClick: () => {
                  u("Delete Thread", (h) => /* @__PURE__ */ M(
                    ey,
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
            Mf,
            {
              comment: h,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            h.id
          )) }),
          /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ M(
            iP,
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
      Mf,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function oP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Z(null), o = r.length === 0;
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ M("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ M("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ M(
      sP,
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
function aP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Qf(), [a] = ae(), c = Ke(() => {
    const w = new H1(a, s);
    return r && w.registerOnChange(r), t?.(w), w;
  }, [a, s, r, t]), l = G1(c), u = Ke(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [p, g] = de([]), [h, b] = de(!1), [x, T] = de(!1), { yjsDocMap: v } = o;
  K(() => {
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
        const H = c.deleteCommentOrThread(w, $);
        if (!H)
          return;
        const { markedComment: Q, index: Ee } = H;
        c.addComment(Q, $, Ee);
      } else {
        c.deleteCommentOrThread(w);
        const H = $ !== void 0 ? $.id : w.id, Q = u.get(H);
        Q !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Ee of Q) {
              const re = se(Ee);
              me(re) && (re.deleteID(Vr, H), re.hasNoIDsForEveryType() && Bs(re));
            }
          });
        });
      }
    },
    [c, a, u]
  ), D = he(
    (w, $, H, Q) => {
      c.addComment(w, H), $ && (a.update(() => {
        N(Q) && mp(Q, Vr, w.id);
      }), b(!1));
    },
    [c, a]
  );
  K(() => {
    const w = [];
    let $;
    for (const H of p) {
      const Q = u.get(H);
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
      for (const H of w)
        H.classList.remove("selected");
    };
  }, [p, a, u]), K(() => {
    if (!a.hasNodes([et]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const w = /* @__PURE__ */ new Map();
    return Ve(
      Wf(
        a,
        et,
        ($) => Ji($.getTypedIDs()),
        ($, H) => {
          for (const [Q, Ee] of Object.entries($.getTypedIDs()))
            Ee.forEach((re) => {
              H.addID(Q, re);
            });
        }
      ),
      a.registerMutationListener(
        et,
        ($) => {
          a.getEditorState().read(() => {
            for (const [H, Q] of $) {
              const Ee = se(H);
              let re = [];
              Q === "destroyed" ? re = w.get(H) ?? [] : me(Ee) && (re = Ee.getTypedIDs()[Vr] ?? []);
              for (const qe of re) {
                let ke = u.get(qe);
                w.set(H, re), Q === "destroyed" ? ke !== void 0 && (ke.delete(H), ke.size === 0 && u.delete(qe)) : (ke === void 0 && (ke = /* @__PURE__ */ new Set(), u.set(qe, ke)), ke.has(H) || ke.add(H));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: $, tags: H }) => {
        $.read(() => {
          const Q = q();
          let Ee = !1, re = !1;
          if (N(Q)) {
            const qe = Q.anchor.getNode();
            if (E(qe)) {
              const ke = ck(qe, Vr, Q.anchor.offset) ?? [];
              ke !== null && (g(ke), Ee = !0), Q.isCollapsed() || (f(qe.getKey()), re = !0);
            }
          }
          Ee || g((qe) => qe.length === 0 ? qe : []), re || f(null), !H.has("collaboration") && N(Q) && b(!1);
        });
      }),
      a.registerCommand(
        vf,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), b(!0), !0;
        },
        xn
      )
    );
  }, [a, u]);
  const _ = () => {
    a.dispatchCommand(vf, void 0);
  };
  return /* @__PURE__ */ xe(Tn, { children: [
    h && kn(
      /* @__PURE__ */ M(
        nP,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: D
        }
      ),
      document.body
    ),
    d != null && !h && kn(
      /* @__PURE__ */ M(
        tP,
        {
          anchorKey: d,
          editor: a,
          showComments: x,
          onAddComment: _
        }
      ),
      document.body
    ),
    n !== null && kn(
      /* @__PURE__ */ M(
        en,
        {
          className: `CommentPlugin_ShowCommentsButton ${x ? "active" : ""}`,
          onClick: () => T(!x),
          title: x ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ M("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    x && kn(
      /* @__PURE__ */ M(
        oP,
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
function cP() {
  const e = Z(void 0), t = he((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function lP(e, t) {
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
function uP(e, t) {
  K(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      lP(r, t);
    };
  }, [t, e]);
}
const eN = wn(function(t, r) {
  const n = Z(null), i = Z(!0), s = Z(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: g, view: h } = {} } = t, b = (g ?? !1) || is(h), [x, T] = cP();
  uP(f, x), K(() => {
    if (process.env.NODE_ENV !== "production") {
      const S = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(S), p || console.warn(S);
    }
  }, [p]), Oc(r, () => ({
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
  return K(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ M(gb, { children: /* @__PURE__ */ xe(Gm, { ref: n, onUsjChange: v, ...f, children: [
    /* @__PURE__ */ M(
      aP,
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
function bn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function dP(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function fP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const pP = /^[#\w().,%/\s-]+$/;
function Sr(e) {
  return e != null;
}
const hP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, gP = {
  left: "right",
  right: "left"
}, mP = "var(--usj-font-fallback, serif)";
function ry(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${dP(i)}"`).join(", ")}, ${mP}`;
}
const wc = ".editor-input.usfm", yP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function bP(e) {
  return yP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${wc}".`
  ), wc);
}
function kP(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(ry(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (pP.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Sr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Sr(t.firstLineIndent) && s.push(`text-indent: ${bn(t.firstLineIndent * 20 * r)}vw`), Sr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${bn(t.leftMargin * 20 * r)}vw`), Sr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${bn(t.rightMargin * 20 * r)}vw`
  ), Sr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${bn(t.spaceBefore * r)}pt`), Sr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${bn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = hP[n ? gP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Ef = { c: 150, ca: 133, cp: 150 };
function Af(e, t) {
  return e && Sr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function TP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Sr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Af(e.markers.c, Ef.c);
  return ["ca", "cp"].map((i) => {
    const s = Af(
      e.markers[i],
      Ef[i]
    ), o = bn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function tN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = wc } = t, s = bP(i), o = [], a = [];
  e.defaultFont && a.push(ry(e.defaultFont)), Sr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${bn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = kP(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${fP(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...TP(e, s)), o.join(`
`);
}
export {
  jh as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  ZP as Editorial,
  Wi as GENERATOR_NOTE_CALLER,
  ep as HIDDEN_NOTE_CALLER,
  eN as Marginal,
  y as MarkerType,
  Bh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Cl as STANDARD_VIEW_MODE,
  Js as defaultStyleInfo,
  QP as directionToNames,
  q_ as filterAndRankItems,
  tN as generateUsjCss,
  YP as getDefaultViewMode,
  Io as getDefaultViewOptions,
  oE as getEnterMenuItems,
  sE as getMarkerMenuItems,
  XP as getViewMode,
  Ml as getViewOptions,
  is as isBlockVerseLayout,
  Br as isInsertEmbedOpOfType,
  W_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
