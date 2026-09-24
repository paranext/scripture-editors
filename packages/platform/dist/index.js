import { jsx as _, jsxs as Te, Fragment as kn } from "react/jsx-runtime";
import { forwardRef as tn, useState as de, useRef as Q, useCallback as he, useEffect as K, useMemo as Ke, memo as fy, createContext as Af, useContext as Pf, Children as py, isValidElement as hy, cloneElement as gy, useImperativeHandle as bo, useLayoutEffect as ps } from "react";
import { assertSafeKey as Je, isValidBookCode as my, MARKER_OBJECT_PROPS as yy, USJ_VERSION as Cr, USJ_TYPE as Sr, usjJsonPathFromIndexes as ln, isUsjTextContentLocation as by, indexesFromUsjJsonPath as Nf, isUsjAttributeKeyLocation as ky, isUsjAttributeMarkerLocation as Ty, isUsjClosingAttributeMarkerLocation as xy, isUsjMarkerLocation as _y, isUsjClosingMarkerLocation as Cy, isUsjPropertyValueLocation as Sy, getUsjDocumentLocationTypeName as vy, EMPTY_USJ as Of } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ve, $parseSerializedNode as ko, DecoratorNode as hs, ElementNode as Zt, isHTMLElement as wn, createState as To, $getState as ne, $setState as kt, $isRangeSelection as N, $isElementNode as z, $isTextNode as S, $getSelection as q, $isNodeSelection as wc, ParagraphNode as qc, TextNode as je, $createTextNode as me, $getCommonAncestor as My, $isLineBreakNode as gs, NODE_STATE_KEY as ms, $getEditor as Tn, $hasUpdateTag as Ey, $getNodeByKey as se, $getRoot as Fe, $createRangeSelection as Rc, $createPoint as Tu, $getCharacterOffsets as $c, KEY_DOWN_COMMAND as Nr, COMMAND_PRIORITY_HIGH as Oe, HISTORY_MERGE_TAG as wf, CLICK_COMMAND as xo, COMMAND_PRIORITY_EDITOR as xn, isDOMNode as qf, $getNearestNodeFromDOMNode as pi, CONTROLLED_TEXT_INSERTION_COMMAND as Ic, PASTE_COMMAND as xr, COMMAND_PRIORITY_CRITICAL as Wt, CUT_COMMAND as _n, DROP_COMMAND as Lc, DELETE_CHARACTER_COMMAND as Ay, DELETE_WORD_COMMAND as Py, DELETE_LINE_COMMAND as Ny, $isDecoratorNode as _o, COPY_COMMAND as Co, COMMAND_PRIORITY_LOW as xt, COMMAND_PRIORITY_NORMAL as ei, SELECTION_CHANGE_COMMAND as dr, getDOMSelection as Oy, isSelectionWithinEditor as wy, $createRangeSelectionFromDom as qy, $setSelection as ii, isDOMTextNode as Ry, BLUR_COMMAND as Dc, $addUpdateTag as Bt, SKIP_DOM_SELECTION_TAG as gn, CLEAR_HISTORY_COMMAND as $y, $getPreviousSelection as Iy, $isRootOrShadowRoot as Ly, CAN_UNDO_COMMAND as Dy, CAN_REDO_COMMAND as Uy, DRAGSTART_COMMAND as Fy, $createNodeSelection as Rf, getDOMSelectionFromTarget as zy, $onUpdate as Ky, KEY_ENTER_COMMAND as $f, LineBreakNode as If, $copyNode as jy, FOCUS_COMMAND as By, $isRootNode as Vy, KEY_ESCAPE_COMMAND as Lf, INSERT_PARAGRAPH_COMMAND as Ks, createCommand as Df, HISTORIC_TAG as Uc, createEditor as Wy, UNDO_COMMAND as Uf, REDO_COMMAND as Ff, CLEAR_EDITOR_COMMAND as Hy } from "lexical";
import { addClassNamesToElement as Bn, removeClassNamesFromElement as oa, $findMatchingParent as st, $dfsIterator as So, $dfs as hi, mergeRegister as Be, registerNestedElementResolver as zf, $unwrapNode as Ua, IS_APPLE as js } from "@lexical/utils";
import { useLexicalNodeSelection as Gy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as wt } from "fast-equals";
import Ui from "quill-delta";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as Jy, copyToClipboard as Yy } from "@lexical/clipboard";
import { TreeView as Xy } from "@lexical/react/LexicalTreeView";
import * as Qy from "react-dom";
import { createPortal as bn } from "react-dom";
import { LexicalComposer as Kf } from "@lexical/react/LexicalComposer";
import { ContentEditable as jf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Bf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Vf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Wf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Zy } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as eb, createDOMRange as tb, createRectsFromDOMRange as rb } from "@lexical/selection";
import { autoUpdate as nb, computePosition as ib, shift as sb, flip as ob } from "@floating-ui/dom";
import { $generateNodesFromDOM as ab } from "@lexical/html";
import { AutoFocusPlugin as cb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as lb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Hf, LexicalCollaboration as ub } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as db } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as fb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as pb, $isRootTextContentEmpty as hb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as gb } from "@lexical/yjs";
import { Array as xu, Map as _u, YArrayEvent as mb } from "yjs";
const aa = (e) => Ve(ko(e)), yb = {
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
function Gf(e) {
  return yb[e];
}
const L = " ", Bs = "​", Dt = L, Fc = `${L}|`, lr = "p", Yi = "+", Jf = "-", Vs = "chapter", Fa = "verse", Cu = "invalid", bb = "text-spacing", kb = "formatted-font", Tb = "marker-", zc = "external-usj-mutation", Yf = "selection-change", _r = "cursor-change", za = "annotation-change", Xi = "delta-change", Xf = "marker-settle", xb = [
  zc,
  Yf,
  _r,
  za,
  Xi
], Cn = "zmsc-s", ti = "zmsc-e", _b = [Cn, ti], Cb = [
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
  ti
], Qf = 1, Kc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Sb = Kc.filter((e) => e !== "sid" && e !== "eid");
class Jt extends hs {
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
    return new Jt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return ep().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Cb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: Qf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Zf(e) {
  return _b.includes(e);
}
function ep(e, t, r, n, i) {
  return Ve(new Jt(e, t, r, n, void 0, i));
}
function He(e) {
  return e instanceof Jt;
}
const jc = "f", vb = [
  // Footnote
  jc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Fi(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Mb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], tp = 1;
class ve extends Zt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = jc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Fi(t) === "crossref" ? Jf : Yi), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new ve(r, n, i, s, o, a);
  }
  static importDOM() {
    return {
      span: (t) => Ab(t) ? {
        conversion: Eb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Bc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (vb.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Fi(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Fi(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Fi(this.getMarker()))), { element: r };
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
      version: tp
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
function Eb(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Bc(t, r, n) };
}
function Bc(e, t, r, n, i) {
  return Ve(new ve(e, t, r, n, i));
}
function Ab(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ve.isValidMarker(t) && e.classList.contains(ve.getType());
}
function j(e) {
  return e instanceof ve;
}
var k;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(k || (k = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Ka = {
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
}, Su = {
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
function ur(e) {
  const t = Object.hasOwn(Ka, e) ? Ka[e] : void 0, r = Object.hasOwn(Su, e) ? Su[e] : void 0;
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
const rp = "v", np = "c", dn = "fig", vu = "tr", ja = "esb", ip = "esbe", Mu = "periph", Eu = "alt", Au = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Pb = {
  "": "start",
  c: "center",
  r: "end"
};
function Pu(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Nu(e) {
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
const Nb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Ob(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Bs && s + 1 < e.length && Nu(e[s + 1]) || (Nu(o) ? (r || (i = t.length, t += o), r = !0) : Nb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function wb(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function qb(e, t) {
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
const Rb = /^(?:qt[1-5]?|ts)-[se]$/;
function Vc(e) {
  return Rb.test(e) || Zf(e);
}
function ca(e, t) {
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
function $b(e, t, r) {
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
      a(Ob(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = qb(e, i + 1);
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
    if (l === rp) {
      const { word: g, next: y } = ca(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === np) {
      const { word: g, next: y } = ca(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && ve.isValidMarker(l)) {
      const { word: g, next: y } = ca(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && Vc(l)) {
      const g = jb(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), T = y === -1 ? e.length : y;
        o(e.slice(c, T)), i = T;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Ws(p) ? (d(), Ws(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === ja || l === ip ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
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
function Ws(e) {
  return Object.hasOwn(Ou, e) ? Ou[e] : void 0;
}
function Ib(e) {
  return Ws(e) !== void 0;
}
const Lb = /([-\w]+)\s*=\s*"(.*?)"/g, Db = /[\s\u200B]*[\n\r][\s\u200B]*/g, sp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function vo(e) {
  return sp[e];
}
const Ub = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Fb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function Qi(e, t, r = sp[t]) {
  const n = e.replace(Db, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Lb)];
  if (s.length > 0) {
    if (!Fb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Ub.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Mo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function zb(e) {
  const t = Or(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Kb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = Qi(e.slice(n + 1, i), r, Mo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function jb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Qi(s.slice(o + 1), r, Mo(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Kb(e, i + 2, r);
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
`, " ").replaceAll("~", L);
}
function Fr(e) {
  return e.content || (e.content = []), e.content;
}
function Or(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? Fr(u) : d ? Fr(d) : r;
  let p = !1;
  const m = () => {
    if (s)
      return o.length > a ? Fr(o[o.length - 1].object) : Fr(s);
    if (o.length > 0)
      return Fr(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: lr, content: [] }, f().push(i);
    }
    return Fr(i);
  }, g = (Y) => {
    const A = m();
    typeof Y == "string" && typeof A[A.length - 1] == "string" ? A[A.length - 1] = A[A.length - 1] + Y : A.push(Y);
  }, y = (Y) => {
    for (let A = Y; A < o.length; A += 1) {
      const G = o[A].object;
      G.closed = "false";
    }
  }, T = () => {
    y(0), o.length = 0;
  }, C = (Y) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, Y || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, P = (Y, A, G) => {
    T();
    const [, ue, Me, X] = G, Se = {
      type: "table:cell",
      marker: X ? A.slice(0, A.indexOf("-")) : A,
      align: Pb[ue],
      content: []
    };
    X && (Se.colspan = String(Number(X) + 1 - Number(Me))), Fr(Y).push(Se), i = Se;
  }, M = (Y) => {
    u && (Y || (u.closed = "false"), u = void 0);
  }, B = () => {
    d = void 0;
  };
  let E, R = "", $;
  const re = () => {
    R && g(ar(R)), R = "";
  }, H = (Y = !1) => {
    E?.type === "sidebar" ? R = "" : Y && R.endsWith(`
`) && (R = R.slice(0, -1)), E = void 0, re();
  }, Ae = () => {
    if (!$)
      return;
    const Y = { type: "char", marker: $.marker, content: [] };
    $.value && (Y.content = [ar($.value)]), m().push(Y), o.push({ object: Y }), $ = void 0;
  }, ee = (Y, A) => {
    p = !1, v(), T(), C(!1), i = { type: "para", marker: Y, content: [] }, A && (i.content = [ar(A)]), f().push(i);
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
    const G = A.indexOf("|"), ue = G >= 0 ? Qi(A.slice(G + 1), Mu) : void 0, Me = G >= 0 ? A.slice(0, G) : A, X = G >= 0 && (!ue || !!Me && !!ue[Eu]), Se = X ? void 0 : ue, yr = X ? A : Me, Nt = {
      type: "periph",
      ...yr ? { [Eu]: ar(yr) } : {},
      ...Se
    };
    Nt.content = [], f().push(Nt), d = Nt, i = void 0;
  };
  let ze;
  const Ir = () => {
    if (ze) {
      if (ze.shape === "para")
        ee(dn, ze.value);
      else {
        const Y = { type: "char", marker: dn, content: [] };
        ze.value && (Y.content = [ar(ze.value)]), m().push(Y), o.push({ object: Y });
      }
      ze = void 0;
    }
  }, Lr = $b(e, t?.getMarker ?? ur, n);
  for (let Y = 0; Y < Lr.length; Y++) {
    const A = Lr[Y];
    if ($) {
      if (A.kind === "text") {
        $.value += A.text;
        continue;
      }
      if ($.shape === "char" && A.kind === "end" && A.marker.replace(/^\+/, "") === $.marker) {
        if ($.value.trim() === "") {
          m().push({ type: "char", marker: $.marker, content: [] }), $ = void 0, H();
          continue;
        }
        Object.assign($.target, {
          [$.attrName]: ar($.value.trim())
        });
        const G = $.marker;
        if ($ = void 0, G === "ca") {
          const ue = Lr[Y + 1];
          ue?.kind === "text" && /^[\s\u200B]*$/.test(ue.text) && Y++;
        }
        continue;
      }
      if ($.shape === "para" && (A.kind === "para" || A.kind === "chapter")) {
        const G = $.value.replace(/[\s\u200B]+$/, "");
        G === "" ? (ee($.marker), $ = void 0) : (Object.assign($.target, { [$.attrName]: ar(G) }), $ = void 0);
      } else {
        E = void 0, (A.kind === "para" || A.kind === "chapter") && $.value.endsWith(`
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
    if (ze) {
      if (A.kind === "text" || A.kind === "optbreak") {
        ze.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      if (A.kind === "end" && A.marker.replace(/^\+/, "") === dn) {
        const G = ze.value.indexOf("|"), ue = G >= 0 ? Qi(ze.value.slice(G + 1), dn) : void 0;
        if (ue) {
          const Me = {};
          for (const [yr, Nt] of Object.entries(ue))
            Me[yr === "src" ? "file" : yr] = Nt;
          const X = {
            type: "figure",
            marker: dn,
            ...Me
          }, Se = ze.value.slice(0, G);
          Se && (X.content = [ar(Se)]), g(X), ze = void 0;
          continue;
        }
      }
      Ir(), Y--;
      continue;
    }
    if (E)
      if (A.kind === "text") {
        if (A.text.includes(`
`) && /^[\s\u200B]*$/.test(A.text)) {
          R += A.text;
          continue;
        }
        H();
      } else if (A.kind === "charOpen" || A.kind === "para") {
        const G = A.kind === "para" || !A.isNested ? Ws(A.marker) : void 0;
        if (G && G.targetTypes.includes(E.type)) {
          R = "", $ = {
            target: E,
            attrName: G.attrName,
            marker: A.marker,
            shape: G.shape,
            value: ""
          };
          continue;
        }
        H(A.kind === "para");
      } else
        H(A.kind === "chapter");
    if (!s && !n && (A.kind === "charOpen" && !A.isNested && A.marker === dn || A.kind === "para" && A.marker === dn)) {
      T(), ze = { shape: A.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (A.kind) {
      case "text": {
        let G = A.text;
        if (!s && G.endsWith(`
`)) {
          const ue = Lr[Y + 1];
          (ue === void 0 || ue.kind === "para" || ue.kind === "chapter") && (G = G.slice(0, -1));
        }
        G && g(ar(G));
        break;
      }
      case "para": {
        const G = !s && !n;
        if (G && A.marker === vu) {
          T(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: vu, content: [] }, Fr(c).push(l), i = l, p = !1;
          break;
        }
        if (G && l) {
          const ue = Au.exec(A.marker);
          if (ue && Pu(ue)) {
            P(l, A.marker, ue);
            break;
          }
        }
        if (v(), !n && A.marker === ja) {
          T(), C(!1), M(!1);
          const ue = {
            type: "sidebar",
            marker: ja,
            content: []
          };
          f().push(ue), u = ue, i = void 0, E = u, p = !1;
          break;
        }
        if (A.marker === ip && u) {
          T(), C(!1), M(!0), i = void 0;
          break;
        }
        if (!n && A.marker === Mu) {
          T(), C(!1), M(!1), B(), be = { value: "" }, i = void 0, p = !1;
          break;
        }
        ee(A.marker);
        break;
      }
      case "verse": {
        C(!1);
        const G = { type: "verse", marker: rp, number: A.number };
        g(G), E = G;
        break;
      }
      case "chapter": {
        T(), C(!1), v(), M(!1), B(), i = void 0;
        const G = {
          type: "chapter",
          marker: np,
          number: A.number
        };
        r.push(G), E = G, p = !0;
        break;
      }
      case "note": {
        C(!1);
        const G = m();
        s = { type: "note", marker: A.marker, caller: A.caller, content: [] }, a = o.length, G.push(s), E = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !A.isNested) {
          const Me = Au.exec(A.marker);
          if (Me && Pu(Me)) {
            P(l, A.marker, Me);
            break;
          }
        }
        if (!A.isNested) {
          const Me = s ? a : 0;
          y(Me), o.length = Me;
        }
        const G = m(), ue = { type: "char", marker: A.marker, content: [] };
        G.push(ue), o.push({ object: ue });
        break;
      }
      case "end": {
        const G = A.marker.replace(/^\+/, ""), ue = s ? a : 0, Me = o.findLastIndex((X, Se) => Se >= ue && X.object.marker === G);
        Me >= 0 ? (Bb(o[Me].object), y(Me + 1), o.length = Me) : s && s.marker === G ? C(!0) : (y(ue), o.length = ue, g({ type: "unmatched", marker: `${A.marker}*` }));
        break;
      }
      case "milestone":
        g({ type: "ms", marker: A.marker, ...A.attributes });
        break;
      case "optbreak":
        g({ type: "optbreak" });
        break;
    }
  }
  if (be && tr(!0), ze && Ir(), $)
    if ($.shape === "para") {
      const Y = $.value.replace(/[\s\u200B]+$/, "");
      Y === "" ? ee($.marker) : Object.assign($.target, { [$.attrName]: ar(Y) }), $ = void 0;
    } else
      $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), Ae();
  T(), C(!1), M(!1);
  const on = (Y) => {
    for (const A of Y)
      typeof A != "string" && A.content && (on(A.content), A.content.length === 0 && delete A.content);
  };
  return on(r), r;
}
function Bb(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Qi(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Sn = To("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Gr = To("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = To("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), pr = "marker-trailing-space", op = 1, Vb = "marker", Wc = To("isGutterMarker", {
  parse: (e) => e === !0
});
class wr extends hs {
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
    return new wr(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Jb(t) ? {
        conversion: Wb,
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
    return r && wn(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: op
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Wb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: vr(t, r) };
}
function vr(e, t) {
  return Ve(new wr(e, t));
}
function Hb(e) {
  return kt(vr(Vb, e), Wc, !0);
}
function Gb(e) {
  return Yt(e) && ne(e, Wc);
}
function Jb(e) {
  return e?.tagName === "span";
}
function Yt(e) {
  return e instanceof wr;
}
function ap(e) {
  return e?.type === wr.getType();
}
const Hr = "internal-comment", Yb = [Hr], cp = Object.freeze({}), Ba = Object.freeze({}), Va = Object.freeze({}), Wa = Object.freeze({}), Ha = Object.freeze({}), Xb = 1, Vn = /* @__PURE__ */ new Map(), Oi = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map();
class Ze extends Zt {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = cp, r, n, i, s, o) {
    super(o), this.__typedIDs = Os(t), this.__typedOnClicks = la(r), this.__typedOnRemoves = ua(n), this.__typedOnMouseEnters = da(i), this.__typedOnMouseLeaves = fa(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Os(t.__typedIDs), n = la(t.__typedOnClicks), i = ua(t.__typedOnRemoves), s = da(t.__typedOnMouseEnters), o = fa(t.__typedOnMouseLeaves);
    return new Ze(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Yb.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Zi().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: Xb
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
      c !== l && (c === 0 ? l === 1 && Bn(r, u) : l === 0 && oa(r, u), c === 1 ? l === 2 && Bn(r, d) : l === 1 && oa(r, d));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || oa(r, fn("annotationId", m));
      for (const m of a)
        f.has(m) || Bn(r, fn("annotationId", m));
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
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Hs(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = la(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return _e(t) ? Vn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ua(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return _e(t) ? Oi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = da(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return _e(t) ? Wn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = fa(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return _e(t) ? Hn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!_e(a))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Hs(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Zi(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Vn.delete(r.getKey()), Oi.delete(r.getKey()), Wn.delete(r.getKey()), Hn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ba) {
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
    if (!this.__typedOnClicks || this.__typedOnClicks === Ba) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Va) {
      const t = Oi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Oi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Oi.set(this.getKey(), this.__typedOnRemoves);
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
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Va) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Wa) {
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
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Wa) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ha) {
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
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Ha) {
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
    const i = Qb(t, r);
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
    for (; _e(t) && qu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; _e(r) && qu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Zb(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = ek(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = tk(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = rk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Os(e = cp) {
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
function la(e) {
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
function ua(e) {
  if (!e || e === Va)
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
  if (!e || e === Wa)
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
function fa(e) {
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
function Qb(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function qu(e, t) {
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
function Zb(e, t) {
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
function ek(e, t) {
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
function tk(e, t) {
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
function rk(e, t) {
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
function Ru(e) {
  return `external-${e}`;
}
function Zi(e, t, r, n, i) {
  return Ve(new Ze(e, t, r, n, i));
}
function _e(e) {
  return e instanceof Ze;
}
function lp(e) {
  return e?.type === Ze.getType();
}
function Hs(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function up(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let m, g;
  for (let y = 0; y < u; y++) {
    const T = a[y];
    if (z(g) && g.isParentOf(T))
      continue;
    const C = y === 0, v = y === u - 1;
    let P = null;
    if (S(T)) {
      const M = T.getTextContentSize(), B = C ? f : 0, E = v ? p : M;
      if (B === 0 && E === 0)
        continue;
      const R = T.splitText(B, E);
      P = R.length > 1 && (R.length === 3 || C && !v || E === M) ? R[1] : R[0];
    } else {
      if (_e(T))
        continue;
      z(T) && T.isInline() && (P = T);
    }
    if (P !== null) {
      if (P && P.is(m))
        continue;
      const M = P.getParent();
      (M == null || !M.is(m)) && (g = void 0), m = M, g === void 0 && (g = Zi(), g.addID(t, r, n, i, s, o), P.insertBefore(g)), g.append(P);
    } else
      m = void 0, g = void 0;
  }
  t === Hr && z(g) && (d ? g.selectStart() : g.selectEnd());
}
function nk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (_e(n))
      return n.getTypedIDs()[t];
    if (S(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (_e(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const ik = ["type", "marker", "content"], Ga = "unknown", dp = 1, sk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class qn extends Zt {
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
      [Ga]: (t) => ak(t) ? {
        conversion: ok,
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
    return sk.has(this.getTag());
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
    const t = document.createElement(Ga);
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
      version: dp
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
    if (wc(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function ok(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Hc(t, r) };
}
function Hc(e, t, r) {
  return Ve(new qn(e, t, r));
}
function ak(e) {
  return e?.tagName.toLowerCase() === Ga;
}
function De(e) {
  return e instanceof qn;
}
const fp = 1, ck = "attribute-run";
function pa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class qr extends Zt {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new qr(r, n);
  }
  static importJSON(t) {
    return pp(t.runKind).updateFromJSON(t);
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
    t.classList.add(ck);
    const r = pa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = pa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = pa(this.__runKind);
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
      version: fp
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
function pp(e) {
  return Ve(new qr(e));
}
function Le(e) {
  return e instanceof qr;
}
const es = "id", hp = 1, lk = [
  "type",
  "marker",
  "code",
  "content"
];
class Ut extends Zt {
  __marker = es;
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
    return new Ut(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return gp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return my(t);
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
      version: hp
    };
  }
}
function gp(e, t) {
  return Ve(new Ut(e, t));
}
function pt(e) {
  return e instanceof Ut;
}
function mp(e) {
  return e?.type === Ut.getType();
}
const Gs = "c", yp = 1, uk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Pt extends Zt {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Gs, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Pt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return bp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Vs, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: yp
    };
  }
}
function bp(e, t, r, n, i) {
  return Ve(new Pt(e, t, r, n, i));
}
function Ne(e) {
  return e instanceof Pt;
}
function dk(e) {
  return e?.type === Pt.getType();
}
const kp = [
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
], Tp = [
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
], fk = [
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
  ...kp,
  ...Tp
], xp = 1, pk = ["type", "marker", "content"];
class ye extends Zt {
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
    return t !== void 0 && (fk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && kp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Tp.includes(t);
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
      span: (t) => gk(t) ? {
        conversion: hk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Mr().updateFromJSON(t);
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
    return $u(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), $u(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      unknownAttributes: this.getUnknownAttributes(),
      version: xp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = this.getUnknownAttributes()?.closed === "false", i = Mr(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function $u(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function hk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Mr(t) };
}
function Mr(e, t) {
  return Ve(new ye(e, t));
}
function gk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ye.isValidMarker(t) && e.classList.contains(ye.getType());
}
function D(e) {
  return e instanceof ye;
}
function mk(e) {
  return e?.type === ye.getType();
}
const _p = 1, yk = "c", Cp = "span";
class hr extends hs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = yk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "immutable-chapter";
  }
  static clone(t) {
    const { __number: r, __showMarker: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new hr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Sp(t) ? {
        conversion: bk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Gc().updateFromJSON(t);
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
    const t = document.createElement(Cp);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Vs, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Vs, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Lt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: _p
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
function bk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Gc(t) };
}
function Gc(e, t, r, n, i, s) {
  return Ve(new hr(e, t, r, n, i, s));
}
function Sp(e) {
  return e ? e.classList.contains(Vs) && e.tagName.toLowerCase() === Cp : !1;
}
function ys(e) {
  return e instanceof hr;
}
function kk(e) {
  return e?.type === hr.getType();
}
const vp = 1;
class Jr extends qc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Jr(t.__key);
  }
  static importJSON(t) {
    return Ht().updateFromJSON(t);
  }
  getMarker() {
    return lr;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: vp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ht();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ht() {
  return Ve(new Jr());
}
function fr(e) {
  return e instanceof Jr;
}
function Eo(e) {
  return e?.type === Jr.getType();
}
const Tk = [
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
], Mp = 1, xk = ["type", "marker", "content"];
class tt extends qc {
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
    return new tt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Tk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: _k,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ts().updateFromJSON(t);
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
    return r && wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = ts(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function _k(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ts(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ts(e, t) {
  return Ve(new tt(e, t));
}
function ce(e) {
  return e instanceof tt;
}
function Jc(e) {
  return e?.type === tt.getType();
}
const Js = "v", Ep = 1, Ck = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class dt extends je {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Js, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new dt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Ap().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Fa, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Ep
    };
  }
}
function Ap(e, t, r, n, i, s) {
  return Ve(new dt(e, t, r, n, i, s));
}
function we(e) {
  return e instanceof dt;
}
function Pp(e) {
  return e?.type === dt.getType();
}
const Sk = "​", si = Sk;
var Iu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Iu || (Iu = {}));
var Lu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Lu || (Lu = {}));
function vk() {
  return me(si);
}
function Mk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(si, ""));
}
function bs(e) {
  return e.length > 0 && e.includes(si) && e.replaceAll(si, "") === "";
}
function ks(e) {
  return S(e) && bs(e.getTextContent());
}
function Np(e) {
  return dk(e) || kk(e);
}
function Ge(e) {
  return Ne(e) || ys(e);
}
function Op(e, t) {
  return e.find((r) => Ge(r) && r.getNumber() === t.toString());
}
function Ek(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ge(r));
}
function Ja(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Ak(e) {
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
function Xt(e) {
  return st(e, j) ?? void 0;
}
function Pk(e) {
  return pt(e) || Ne(e) || D(e) || ys(e) || fr(e) || He(e) || ce(e) || j(e) || we(e) || De(e);
}
function wp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Nk(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Mt(e) {
  return Ce(e) || pt(e);
}
function Ce(e) {
  return ce(e) || fr(e);
}
function Ok(e) {
  return Jc(e) || Eo(e);
}
function Ys(e, t) {
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
function wk(e, t) {
  const r = z(e) ? e : e.getParent(), n = z(t) ? t : t.getParent(), i = r && n ? My(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function qk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function oi(e) {
  return e?.type === je.getType();
}
function Rk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function $k(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function qe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function et(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function qp(e, t, r) {
  const n = qe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Lt(e, t) {
  let r = qe(e);
  return t && (r += `${L}${t}`), r += " ", r;
}
function Ik(e) {
  const t = e[ms];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Rp(e) {
  return Qc(e) || ap(e) && e.textType === "marker" || oi(e) && Ik(e) === "attribute" ? "" : oi(e) && e.text !== L ? e.text : mk(e) ? e.children.map((t) => Rp(t)).join("") : "";
}
function Lk(e) {
  return e.map((r) => Rp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Et(e) {
  return " " + e + L;
}
function Yc(e) {
  const t = [];
  for (const r of e) {
    if (!D(r))
      continue;
    const n = $p(r);
    n !== Dt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function $p(e) {
  return w(e) || gr(e) || S(e) && ne(e, oe) === "attribute" ? "" : S(e) ? e.getTextContent() : z(e) ? e.getChildren().map((t) => $p(t)).join("") : "";
}
function gr(e) {
  return Yt(e) && e.getTextType() === "marker";
}
function Ft(e) {
  return w(e) || gr(e);
}
function Du(e, t) {
  Dk(e, t), e.setMarker(t);
}
function Dk(e, t) {
  const r = e.getMarker(), n = qe(r), i = qe(r, !0), s = et(r), o = et(r, !0), a = ye.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Ft(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (w(c))
        c.setMarker(t);
      else if (gr(c)) {
        const f = l.startsWith(qe("", !0));
        c.setTextContent(u ? qe(t, f) : et(t, f));
      }
    }
  });
}
function Ue(e, t = yy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ee(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Ip(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Lp(e) {
  if (!N(e))
    return Uu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !z(t) || e.anchor.type === "text" && !S(t)))
    return t ?? void 0;
  try {
    return Uu(e) ?? t ?? void 0;
  } catch (n) {
    if (Ip(n))
      return t ?? void 0;
    throw n;
  }
}
function Uk(e, t) {
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
function Xc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Fk(e) {
  return !!e && e.includes("-");
}
function Dp(e) {
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
function Ts(e) {
  if (!e)
    return !1;
  if (gs(e) || w(e) || gr(e) || Le(e) || Yt(e) && e.getTextType() === "attribute")
    return !0;
  if (S(e)) {
    const t = ne(e, oe);
    if (t === pr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === L || bs(r))
      return !0;
  }
  return !1;
}
function Ao() {
  const e = me(L);
  return kt(e, oe, pr), e.setMode("token"), e;
}
function zk(e) {
  const t = e.getTextContent();
  t.startsWith(L) || e.setTextContent(L + t);
}
function Rn(e) {
  return S(e) && ne(e, oe) === pr;
}
function Up(e) {
  const t = e.getFirstChild();
  if (!Ft(t) || t === null || Rn(t.getNextSibling()))
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
function gi(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Ts(s)) {
      if (_e(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (S(s) && s.getType() === je.getType()) {
        r ??= { segments: [], length: 0 }, r.segments.push({ node: s, start: r.length }), r.length += s.getTextContentSize();
        return;
      }
      n(), t.push({ type: "element", node: s });
    }
  };
  return e.getChildren().forEach(i), n(), t;
}
function Po(e) {
  let t = e.getParent();
  for (; t && _e(t); )
    t = t.getParent();
  return t;
}
function Kk(e, t) {
  return gi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function jk(e, t) {
  const r = Po(e);
  if (!r)
    return;
  const n = gi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function Bk(e, t) {
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
function Fp(e, t) {
  const r = gi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Ts(n))
    return Fp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Ys(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Ys(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function Vk(e, t) {
  if (t <= 0)
    return 0;
  const r = gi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? Wk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function Wk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const Hk = 1;
class mr extends je {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(mn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new mr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
  }
  static importJSON(t) {
    return ct().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const { marker: r, markerSyntax: n = "opening", nested: i = !1 } = t, o = super.updateFromJSON({
      ...t,
      // An EMPTY serialized text is the "build canonical bytes" sentinel — the adaptor's
      // createMarker serializes glyphs with `text: ""` and relies on the import deriving them.
      // Any non-empty text is the glyph's actual displayed bytes and is kept verbatim.
      text: t.text || mn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = mn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = mn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = mn(r.__marker, r.__markerSyntax, t), r;
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
      version: Hk
    };
  }
}
function ct(e, t, r) {
  return Ve(new mr(e, t, void 0, r));
}
function w(e) {
  return e instanceof mr;
}
function Qc(e) {
  return e?.type === mr.getType();
}
function rn(e) {
  return e.getTextContent() === mn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Gk(e) {
  e.setTextContent(mn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function mn(e, t, r = !1) {
  return t === "closing" ? et(e, r) : t === "selfClosing" ? et("") : qe(e, r);
}
const Jk = /* @__PURE__ */ new Set(["closed"]);
function cr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Jk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function zp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Kp(e) {
  const t = Object.keys(e).filter((n) => !Sb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function jp(e, t, r, n) {
  return zp(
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
function Bi(e) {
  return e.getChildren().find((t) => w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Yk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Bi(e) === void 0 && Bp(e) === void 0;
}
function Bp(e) {
  return e.getChildren().find((t) => S(t) && ne(t, oe) === "attribute");
}
function rs(e, t) {
  return xs(e.getNextSibling(), t);
}
const Xk = /^[ \u00A0]+$/;
function Zc(e) {
  if (rn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = qe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && Xk.test(r.slice(t.length));
}
function xs(e, t) {
  let r, n, i, s;
  return Le(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), w(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Zc(e) && (r = e, e = e.getNextSibling()), S(e) && ne(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), w(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && rn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function Yr(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!w(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (S(n) && n.getTextContent() === Et(e.getCaller()))
    return n;
}
function Vp(e) {
  const t = Yr(e);
  return t ? xs(t.getNextSibling(), "cat") : {};
}
function No(e) {
  const t = e.getFirstChild();
  if (!(!S(t) || w(t)) && ne(t, oe) !== "attribute")
    return t;
}
function Wp(e) {
  const t = No(e);
  return t ? xs(t.getNextSibling(), "ca") : {};
}
function Hp(e) {
  const t = No(e);
  if (!t)
    return;
  const r = xs(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Gp(e) {
  const t = Hp(e);
  return t ? xs(t.getNextSibling(), "cp") : {};
}
function Jp(e) {
  const t = e.getParent();
  if (!D(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n))
        return n;
      if (!(w(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || S(n) && ne(n, oe) === "attribute" || D(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Le(n)))
        return;
    }
}
function Oo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Le(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), w(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Zc(s) && (t = s, s = s.getNextSibling()), S(s) && ne(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), w(s) && s.getMarkerSyntax() === "selfClosing" && rn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function el(e) {
  return D(Po(e));
}
function tl(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? el(t) : t.getChildren().some((i) => D(i) && i.getMarker() === r) ? !0 : void 0;
}
function Qk(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = tl(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function _s(e) {
  return S(e) && e.getType() === je.getType() && ne(e, oe) !== "attribute";
}
function wo(e) {
  const t = e.getPreviousSibling(), r = e.getParent();
  return !w(t) || !D(r) || !Yp(t, r) || !_s(e) ? 0 : e.getTextContent().startsWith(L) ? L.length : 0;
}
function Yp(e, t) {
  return e.getMarkerSyntax() === "opening" && tl(e, t) !== void 0;
}
function rl(e, t) {
  if (!Yp(e, t))
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return w(r) ? tl(r, t) === !0 ? "spacer" : void 0 : _s(r) ? r.getTextContent().startsWith(L) ? void 0 : "prefix" : "spacer";
}
function Zk(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (w(t) && rl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Xp(e, t) {
  const r = q();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Qp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = rl(t, e);
    if (r !== void 0 && !Xp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        S(n) && n.setTextContent(L + n.getTextContent());
      } else
        t.insertAfter(me(L));
  });
}
function Zp(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && rl(t, e) !== void 0 && Xp(t, e)) : !1;
}
const eT = "file", tT = "src", rT = "colspan", nT = "category", iT = "alt", sT = "closed", oT = "false";
function aT(e) {
  return e[sT] !== oT;
}
function cT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === eT ? tT : t,
    r
  ]));
}
function eh(e, t) {
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
function th(e, t, r) {
  const n = r ?? {}, i = aT(n);
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
        opening: `\\${eh(t, n[rT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: cr(cT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [nT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + cr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [iT]: s, ...o } = n;
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
const _t = { wantsRun: !1, valueText: void 0 }, Rr = {};
function ha(e, t) {
  if (t === "va")
    return e;
  const r = rs(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function nl(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (z(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function qo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = q();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function lT(e) {
  return Le(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : w(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : S(e) && ne(e, oe) === "attribute";
}
function uT(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!S(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function ga(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (we(t))
      return t;
    if (!lT(t))
      return;
  }
}
function Fu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => we(t),
    ownerOf: (t) => {
      if (Le(t))
        return t.getRunKind() === e ? ga(t) : void 0;
      const r = t.getParent();
      return Le(r) ? r.getRunKind() === e ? ga(r) : void 0 : uT(t) === e ? ga(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!we(t))
        return _t;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? _t : { wantsRun: !0, valueText: L + r };
    },
    scanPieces: (t) => we(t) ? rs(ha(t, e), e) : Rr,
    graceSite: (t, r) => we(t) ? !r.opener && !r.closer ? nl(ha(t, e)) : qo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => we(t) ? ha(t, e) : void 0
    }
  };
}
const dT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => Rr,
  graceSite: (e) => D(e) && Zp(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, fT = {
  kind: "char",
  ownerPredicate: (e) => D(e),
  ownerOf: (e) => {
    if (!S(e) || ne(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return D(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!D(e) || Bi(e) === void 0)
      return _t;
    const t = cr(e.getUnknownAttributes() ?? {}, vo(e.getMarker()));
    return t === "" ? _t : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => D(e) ? { value: Bp(e) } : Rr,
  graceSite: (e, t) => {
    if (!D(e) || t.value)
      return !1;
    const r = Bi(e);
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
    insertRunBefore: (e) => D(e) ? Bi(e) : void 0
  }
};
function rh(e) {
  if (w(e))
    return e.getMarker() === "cat";
  if (!S(e) || ne(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return w(t) && t.getMarker() === "cat";
}
function pT(e) {
  const t = e.getParent();
  if (!j(t))
    return;
  const r = Yr(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!rh(n))
        return;
    }
}
const hT = {
  kind: "cat",
  ownerPredicate: (e) => j(e),
  ownerOf: (e) => {
    if (Le(e))
      return e.getRunKind() === "cat" && j(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Le(t) ? t.getRunKind() === "cat" && j(t.getParent()) ? t.getParent() ?? void 0 : void 0 : rh(e) ? pT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!j(e) || e.getIsCollapsed() !== !1)
      return _t;
    const t = e.getCategory();
    return t === void 0 ? _t : { wantsRun: !0, valueText: L + t };
  },
  scanPieces: (e) => j(e) ? Vp(e) : Rr,
  graceSite: (e, t) => {
    if (!j(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = Yr(e);
      return r !== void 0 && nl(r);
    }
    return qo(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => j(e) ? Yr(e) : void 0
  }
};
function gT(e) {
  return Le(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : w(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : S(e) && ne(e, oe) === "attribute";
}
function mT(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!S(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function yT(e) {
  const t = e.getParent();
  if (!Ne(t))
    return;
  const r = No(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!gT(n))
        return;
    }
}
function zu(e) {
  const t = (r) => Ne(r) ? e === "ca" ? No(r) : Hp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Ne(r),
    ownerOf: (r) => {
      if (Le(r))
        return r.getRunKind() === e && Ne(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Le(n) ? n.getRunKind() === e && Ne(n.getParent()) ? n.getParent() ?? void 0 : void 0 : mT(r) === e ? yT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Ne(r))
        return _t;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? _t : { wantsRun: !0, valueText: L + n };
    },
    scanPieces: (r) => Ne(r) ? e === "ca" ? Wp(r) : Gp(r) : Rr,
    graceSite: (r, n) => {
      if (!Ne(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && nl(i);
      }
      return qo(n);
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
function nh(e) {
  if (w(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return S(e) && ne(e, oe) === "attribute";
}
function bT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (He(t)) {
      const r = w(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!nh(t))
      return;
  }
}
const kT = {
  kind: "milestone",
  ownerPredicate: (e) => He(e),
  ownerOf: (e) => {
    const t = Le(e) ? e.getRunKind() === "milestone" ? e : void 0 : Le(e.getParent()) ? e.getParent() : nh(e) ? e : void 0;
    if (!t || Le(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Le(t) ? He(r) ? r : void 0 : bT(t);
  },
  expectedPieces: (e) => {
    if (!He(e))
      return _t;
    const t = jp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = cr(t, Mo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : L + r };
  },
  scanPieces: (e) => {
    if (!He(e))
      return Rr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Oo(e);
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
    return qo(t);
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
}, TT = th("optbreak", void 0, void 0).opening, xT = {
  kind: "optbreak",
  ownerPredicate: (e) => De(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!De(t) || t.getTag() !== "optbreak"))
      return S(e) || Yt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: TT }),
  scanPieces: (e) => De(e) ? { value: e.getFirstChild() ?? void 0 } : Rr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, _T = {
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
  scanPieces: () => Rr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, CT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => D(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => Rr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, ns = [
  dT,
  fT,
  Fu("va"),
  Fu("vp"),
  hT,
  zu("ca"),
  zu("cp"),
  kT,
  xT,
  _T,
  CT
], ST = new Map(ns.map((e) => [e.kind, e]));
function Mn(e) {
  const t = ST.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function En(e) {
  for (const t of ns) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function ih(e) {
  return En(e) !== void 0;
}
const Xs = "unmatched", sh = 2;
function Vi(e) {
  return `\\${e}`;
}
class $r extends je {
  __marker;
  constructor(t = "", r) {
    super(Vi(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new $r(r, n);
  }
  static importDOM() {
    return {
      [Xs]: (t) => MT(t) ? {
        conversion: vT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return il().updateFromJSON(t);
  }
  updateFromJSON(t) {
    const r = t.marker ?? "", i = super.updateFromJSON({
      ...t,
      detail: t.detail ?? 0,
      format: t.format ?? 0,
      mode: t.mode ?? "token",
      style: t.style ?? "",
      text: t.text ?? Vi(r)
    }).getWritable();
    return i.__marker = r, i;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Vi(t), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  createDOM(t) {
    const r = super.createDOM(t);
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Cu), r.title = Ku(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Ku(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Xs);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Cu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: sh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function oh(e) {
  return e.getTextContent() === Vi(e.getMarker());
}
function Ku(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function vT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: il(t) };
}
function il(e) {
  return Ve(new $r(e));
}
function MT(e) {
  return e?.tagName.toLowerCase() === Xs;
}
function nn(e) {
  return e instanceof $r;
}
const ah = "table", Ya = "immutable-table", ch = 1, ET = ["type", "marker", "content"];
class $n extends Zt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Ya;
  }
  static clone(t) {
    return new $n(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return AT().updateFromJSON(t);
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
      type: Ya,
      ...t !== void 0 && { unknownAttributes: t },
      version: ch
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function AT(e) {
  return Ve(new $n(e));
}
function lh(e) {
  return e instanceof $n;
}
function PT(e) {
  return e?.type === Ya;
}
const uh = "table:row", ju = "immutable-table-row", dh = 1, Xa = "tr", NT = ["type", "marker", "content"];
class mi extends Zt {
  __marker;
  __unknownAttributes;
  constructor(t = Xa, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return ju;
  }
  static clone(t) {
    return new mi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return OT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Xa).setUnknownAttributes(t.unknownAttributes);
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
      type: ju,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: dh
    };
  }
}
function OT(e, t) {
  return Ve(new mi(e, t));
}
const fh = "table:cell", Bu = "immutable-table-cell", ph = 1, Qa = "tc1", wT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function qT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class yi extends Zt {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Qa, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Bu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new yi(r, n, i, s, o);
  }
  static importJSON(t) {
    return RT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Qa).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = qT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Bu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: ph
    };
  }
}
function RT(e, t, r, n) {
  return Ve(new yi(e, t, r, n));
}
function Ro(e, t) {
  const r = e.getChildAtIndex(t);
  return S(r) ? r : void 0;
}
function Qt(e, t) {
  const r = Ro(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function is(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function $T(e) {
  return e.getChildren().some((t) => w(t) && t.getMarkerSyntax() === "closing");
}
function IT(e) {
  return is(e) ? void 0 : { closed: "false" };
}
function LT(e, t, r, n) {
  const i = t.getMarker(), s = el(t), o = $T(t);
  if (n) {
    e.append(ct(i, "opening", s));
    const [a] = r;
    _s(a) && !a.getTextContent().startsWith(L) && a.setTextContent(L + a.getTextContent());
  }
  e.append(...r), o && e.append(ct(i, "closing", s));
}
function An(e) {
  return st(e, D) ?? void 0;
}
function sl(e) {
  let t = e.getParent();
  for (; D(t); )
    t = t.getParent();
  return t;
}
function Za(e) {
  const t = hh(e);
  return e.getChildren().every((r) => w(r) || t && ne(r, oe) === "attribute" || S(r) && r.getTextContent().replaceAll(L, "") === "");
}
function hh(e) {
  return is(e);
}
function DT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? cr(r, vo(e.getMarker())) : "";
  n !== "" && t.insertAfter(me(n)), e.remove();
}
function UT(e, t) {
  if (is(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ct(e.getMarker(), "closing", el(e)));
}
function FT(e, t) {
  return D(e) && !is(e) && !is(t);
}
function zT(e, t, r) {
  Za(e) && e.getChildren().forEach((i) => {
    w(i) || i.remove();
  });
  const [n] = t;
  r && _s(n) && !n.getTextContent().startsWith(L) && n.setTextContent(L + n.getTextContent()), e.append(...t);
}
function KT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = hh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = w(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, oe) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = FT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      zT(e, o, n);
    else {
      const l = Mr(t.getMarker(), IT(t));
      LT(l, t, o, n), e.insertAfter(l), Za(l) ? l.remove() : c = l;
    }
  i && !a && UT(t, n), Za(t) && DT(t, c);
}
function ai(e, t) {
  let r = e.getParent();
  for (; D(r); )
    KT(e, r, t), r = e.getParent();
}
function ol(e) {
  if (S(e) && !w(e)) {
    const t = wo(e);
    e.select(t, t);
    return;
  }
  if (z(e)) {
    const t = e.getChildren().find((r) => !w(r));
    if (t) {
      ol(t);
      return;
    }
    e.selectEnd();
  }
}
const ri = /* @__PURE__ */ new WeakMap();
function jT(e, t) {
  return ri.set(e, t), () => {
    ri.get(e) === t && ri.delete(e);
  };
}
function Vu(e) {
  return ri.get(e);
}
function BT(e) {
  return ri.get(Tn())?.has(e.getKey()) ?? !1;
}
function VT(e) {
  ri.get(Tn())?.add(e.getKey());
}
function WT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function ec(e) {
  return !!(e.opener || e.value || e.closer);
}
function Wu(e) {
  return /^\s/.test(e);
}
function al(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Wu(t) || !Wu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function $o(e, t, r) {
  return r.wantsRun ? al(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : WT(t);
}
function HT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return al(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function gh(e, t) {
  return !ec(e.scanPieces(t));
}
function Cs(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!$o(e, n, r))
    return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Ys(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function GT(e, t, r, n) {
  return !r.wantsRun || ec(n) || Ey(Xi) ? !1 : Tn().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : ec(e.scanPieces(i));
  });
}
function JT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Hu(e) {
  const t = me(e);
  return kt(t, oe, "attribute"), t;
}
function YT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = pp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function XT(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    S(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Hu(n.valueText));
    return;
  }
  const l = YT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = ct(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : S(d) ? al(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Hu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(ct(a === "selfClosing" ? "" : o(t), a));
}
function ss(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if ($o(e, i, n) && !BT(t)) {
    if (GT(e, t, n, i)) {
      VT(t);
      return;
    }
    if (!Cs(e, t)) {
      if (!n.wantsRun) {
        JT(i);
        return;
      }
      XT(e, t, i, n);
    }
  }
}
function QT(e, t, r) {
  ss(e, t), t.isAttached() && Cs(e, t) && r.add(t.getKey());
}
function Io(e) {
  if (!S(e))
    return !1;
  if (w(e) || we(e) || nn(e))
    return !0;
  const t = ne(e, oe);
  return t === "attribute" || t === pr;
}
function cl(e, t) {
  return w(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && rn(e) && D(e.getParent())) : !1;
}
function ZT() {
  const e = q();
  return N(e) ? cl(e.focus.getNode(), e.focus.offset) : !1;
}
function mh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return S(t) && Io(t) ? t : void 0;
}
function ex(e) {
  const t = mh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function tx(e) {
  const t = mh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Gu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Ju(e, t) {
  e.set(t.key, t.offset, t.type);
}
function rx(e, t) {
  let r = tx(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!S(n))
      return;
    if (!Io(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Yu(e, t) {
  const r = rx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function yh(e) {
  if (e.isCollapsed()) {
    const a = ex(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Gu(r), Gu(n)], s = Yu(r, "next"), o = Yu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Ju(r, i[0]), Ju(n, i[1]), !1) : !0;
}
const Qs = "verse-block", bh = 1, nx = "verse-block";
class bi extends Zt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Qs;
  }
  static clone(t) {
    return new bi(t.__number, t.__key);
  }
  static importJSON(t) {
    return ix().updateFromJSON(t);
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
    return Dp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(nx), Xu(t, this.__number), t;
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
      type: Qs,
      number: this.getNumber(),
      version: bh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Xu(e, t) {
  const { start: r, end: n } = Dp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Qu(e, "data-verse-start", i ? r : NaN), Qu(e, "data-verse-end", i ? n : NaN);
}
function Qu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function ix(e) {
  return Ve(new bi(e));
}
function os(e) {
  return e instanceof bi;
}
function sx(e) {
  return e?.type === Qs;
}
const ox = [
  Ut,
  hr,
  Pt,
  dt,
  ye,
  ve,
  Jt,
  mr,
  qn,
  wr,
  $r,
  tt,
  Jr,
  $n,
  mi,
  yi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  qr,
  {
    replace: qc,
    with: () => Ht(),
    withKlass: Jr
  }
], Zs = {
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
}, ax = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function cx(e) {
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
      category: ur(r)?.category ?? k.Uncategorized,
      type: ax[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ur(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Zu(e, t, r) {
  const n = {
    type: Sr,
    version: Cr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Eo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const kh = "v", Th = 1, lx = "verse-selected";
class St extends hs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = kh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => fx(t) ? {
        conversion: dx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ll().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Fa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && wn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Fa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Lt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Bs + this.getNumber() + Bs
    );
    return _(ux, { nodeKey: this.getKey(), text: t });
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
      version: Th
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Ip(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function ux({ nodeKey: e, text: t }) {
  const [r] = Gy(e);
  return _("span", { className: r ? lx : void 0, children: t });
}
function dx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: ll(t) };
}
function ll(e, t, r, n, i, s) {
  return Ve(new St(e, t, r, n, i, s));
}
function fx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === kh;
}
function In(e) {
  return e instanceof St;
}
function px(e) {
  return e?.type === St.getType();
}
function ge(e) {
  return we(e) || In(e);
}
function xh(e) {
  return Pp(e) || px(e);
}
function hx(e) {
  return gx(e).find((t) => ce(t));
}
function gx(e) {
  return e.some(os) ? e.flatMap((t) => os(t) ? t.getChildren() : t) : e;
}
function Lo(e) {
  return z(e) ? os(e) ? e.getChildren().flatMap(Lo) : e.getChildren() : [];
}
function mx(e, t) {
  return Lo(e).find((i) => ge(i) && Xc(t, i.getNumber()));
}
function yx(e, t) {
  return t === 0 ? hx(e) : e.map((r) => mx(r, t)).filter((r) => r)[0];
}
function eo(e) {
  return Lo(e).find((r) => ge(r));
}
function _h(e, t) {
  if (!z(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ge(i))
      return i;
  }
}
function bx(e) {
  const t = e.getParent();
  if (t && z(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ge(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ge(r); ) {
    const n = eo(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function to(e) {
  return Lo(e).findLast((t) => ge(t));
}
function kx(e) {
  if (!we(e))
    return 0;
  const t = e.getNumber();
  if (!t)
    return 0;
  const r = e.getTextContent().indexOf(t);
  return r < 0 ? 0 : r + t.length;
}
function Tx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && z(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function xx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Tx(t, e, r);
  if (S(e)) {
    const n = kx(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function ma(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function _x(e) {
  const t = Ja(e);
  if (!(!t || Ge(t)))
    return ge(t) ? t : to(t) ?? fl(t);
}
function Cx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return ma(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  if (xx(e, t)) {
    const i = _x(e);
    return i ? ma(i) : { verseNum: n };
  }
  return ma(e);
}
function Sx(e) {
  return Pk(e) || In(e);
}
function ul(e) {
  if (S(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(L) && e.setTextContent(`${t} `);
  }
}
function Ch(e) {
  if (S(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function tc(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function vx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = dl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && z(i) && z(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && z(i)) {
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
      let s = ed(i);
      for (; s && !Ge(s); ) {
        const o = eo(s);
        if (o) {
          n = o;
          break;
        }
        s = ed(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = eo(s);
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
function Mx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = dl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && z(i) && (n = _h(i, r.getIndexWithinParent())), !n && i) {
      let o = td(i);
      for (; o && !Ge(o); ) {
        const a = to(o);
        if (a) {
          n = a;
          break;
        }
        o = td(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ge(s); ) {
      const o = to(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function ed(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function td(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function dl(e, t) {
  if (z(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ge(n))
      return n;
    const i = _h(e, t.anchor.offset);
    if (i)
      return i;
    const s = eo(e);
    if (s)
      return s;
  }
  return fl(e);
}
function fl(e) {
  if (!e || Ge(e))
    return;
  if (ge(e))
    return e;
  let t = Ja(e);
  for (; t; ) {
    if (Ge(t))
      return;
    if (ge(t))
      return t;
    const r = to(t);
    if (r)
      return r;
    t = Ja(t);
  }
}
const Ex = ["style"], Ax = ["style", "code"], ro = ["style", "cid"], Px = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Nx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Ox = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], wx = ["style", "caller", "category", "contents"], qx = ["tag", "marker", "contents"], Rx = [
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
function $x(e, t) {
  const r = se(e);
  if (!At(r))
    return;
  const n = Sh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Sh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = So();
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
      if (Er(l) || At(l))
        return n;
      Mt(l) && (a = l);
    }
    if (Mt(l) && (i.includes(l) || i.push(l)), vh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += pl(l, t);
  }
  if (a)
    return n;
}
function rd(e, t, r = "delta-doc") {
  if (e.length < 2 || !Dx(e[0]) || !Lx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Ix(n, r)?.getKey());
}
function Ix(e, t = "delta-doc") {
  const r = So();
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
    if (Mt(a) && (i.includes(a) || i.push(a)), vh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = pl(a, t);
    if (Er(a) && l > 0 && e >= n && e < n + l || At(a) && n === e)
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
  return e ? t ? !Ys(t.node, e.getKey()) : !0 : !1;
}
function Er(e) {
  return S(e) && !At(e);
}
function At(e) {
  return Ge(e) || ge(e) || He(e) || j(e) || De(e) || nn(e);
}
function Br(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Lx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Rx.includes(t);
}
function Dx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function vh(e, t) {
  return j(e) || De(e) ? !0 : t === "apply" && z(e) && At(e);
}
function Mh(e) {
  const t = e.getParent();
  return Ft(e) && ce(t) && t.getFirstChild() === e;
}
function rc(e) {
  const t = e.getParent();
  return t !== null && st(t, Le) !== null;
}
function Ux(e) {
  const t = e.getParent();
  return D(t) && e.getTextContent() === Dt && t.getChildrenSize() === 1;
}
function Fx(e) {
  const t = e.getParent();
  if (!j(t))
    return !1;
  const r = e.getPreviousSibling();
  return w(r) && r === t.getFirstChild() && e.getTextContent() === Et(t.getCaller());
}
function zx(e) {
  return !ih(e) && pl(e, "delta-doc") === e.getTextContentSize();
}
function pl(e, t) {
  if (At(e))
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
    (ks(e) || Mh(e) || ne(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, oe) === "attribute" || rc(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Fc) || Ux(e) || Fx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function nc(e, t) {
  const r = { insert: e.__text }, n = ne(e, Gr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Eh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function nd(e) {
  const t = new Ui();
  return e.isEmpty() || e.read(() => {
    const r = Fe();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && fr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Kx();
    for (const s of i)
      t.push(s);
  }), t;
}
function hl(e, t) {
  const r = [], n = hi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...id(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...id(c, n.length, n, i, s, o, a));
  return r;
}
function Kx() {
  return hl();
}
function id(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return jx(e, a, n), Bx(e, a, i, s, o), Vx(e, t, r, i, o, s, a), Ge(e) && a.push(Jx(e)), ge(e) && a.push(Xx(e)), He(e) && a.push(Qx(e)), nn(e) && a.push(Zx(e)), Hx(e, a, s), Wx(e, a, s), n_(c, s), a;
}
function jx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    pt(n) ? t.push(Gx(n)) : ce(n) ? t.push(Yx(n)) : fr(n) && t.push({ insert: as });
  }
  Mt(e) && (r.includes(e) || r.push(e));
}
function Bx(e, t, r, n, i) {
  if (!S(e) || we(e) || nn(e))
    return;
  const s = e.getParent();
  if (j(s) && s.getFirstChild() === e)
    return;
  const o = Xt(e) !== void 0;
  if (w(e) && (o || Mh(e) || rc(e) || ih(e)) || ne(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (bs(a))
    return;
  const c = e.getPreviousSibling();
  if (j(s) && w(c) && c === s.getFirstChild() && a === Et(s.getCaller()))
    return;
  const l = D(s) ? s : void 0;
  o && l && c === l.getFirstChild() && (a = a.slice(wo(e)));
  const u = a.startsWith(Fc) || ne(e, oe) === "attribute" || rc(e), d = !!l && a === Dt && l.getChildrenSize() === 1, f = Do(e, n), p = f ? r.filter((y) => f.children.includes(y)) : r, m = nc(e, p);
  if (m.insert = a, f) {
    if (!a || a === L || u)
      return;
    f.contentsOps?.push(m);
  } else
    d || u || t.push(m);
  const g = a !== "" && !d && !(u && l);
  if (r.length > 0 && g)
    for (const y of r)
      i.add(y);
}
function Vx(e, t, r, n, i, s, o) {
  D(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (ci(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = t_(c), u = Do(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Wx(e, t, r) {
  if (!j(e))
    return;
  const n = e_(e), i = Do(e, r), s = {
    node: e,
    children: hi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Hx(e, t, r) {
  if (!De(e))
    return;
  const n = r_(e), i = Do(e, r), s = {
    node: e,
    children: hi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function sn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function Gx(e) {
  const t = { style: es, code: e.__code };
  return sn(t, e), { insert: as, attributes: { book: t } };
}
function Jx(e) {
  const t = { style: Gs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), sn(t, e), { insert: { chapter: t } };
}
function Yx(e) {
  const t = { style: e.__marker };
  return sn(t, e), { insert: as, attributes: { para: t } };
}
function Xx(e) {
  const t = { style: Js, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), sn(t, e), { insert: { verse: t } };
}
function Qx(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), sn(t, e), { insert: { milestone: t } };
}
function Zx(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function e_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), sn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, Gr);
  return n && (r.attributes = { segment: n }), r;
}
function t_(e) {
  const t = { insert: "" }, r = Eh([e]);
  return r && (t.attributes = { char: r }), t;
}
function r_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), sn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Do(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function n_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    ci(t[r].node, e) && t.splice(r, 1);
}
function Eh(e) {
  if (e.length === 0)
    return;
  const t = e.map(i_);
  return t.length === 1 ? t[0] : t;
}
function i_(e) {
  const t = { style: e.__marker }, r = ne(e, Sn);
  return r && (t.cid = r), sn(t, e), t;
}
function gl(e) {
  let t = 0;
  for (const { node: r } of So())
    if (j(r)) {
      if (r.getKey() === e)
        return t;
      t += 1;
    }
}
function s_(e) {
  let t = 0;
  for (const { node: r } of So())
    if (j(r)) {
      if (t === e)
        return r;
      t += 1;
    }
}
const Ah = 1;
class Gt extends hs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Yi, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Gt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => a_(t) ? {
        conversion: o_,
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
    return r && wn(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => c_(t, n), (l) => l_(t, n, s, l), () => u_(t, n), () => d_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return _("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Yi && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Jf && i ? (
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
      version: Ah
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function o_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: ml(t, r) };
}
function ml(e, t, r) {
  return Ve(new Gt(e, t, r));
}
function a_(e) {
  return e ? e.classList.contains(Gt.getType()) : !1;
}
function ht(e) {
  return e instanceof Gt;
}
function c_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!j(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function l_(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!j(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!ht(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function u_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!j(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return hl(r);
  });
}
function d_(e, t) {
  return e.getEditorState().read(() => gl(t));
}
const f_ = [
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
], p_ = ["†"];
function Uo(e) {
  if (Ph())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = sd(t), [s, o] = sd(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = od(n, i), [s, o] = od(s, o);
  const a = Rc();
  return a.anchor = Tu(n.getKey(), i, ad(n)), a.focus = Tu(s.getKey(), o, ad(s)), a;
}
function no() {
  if (Ph())
    return;
  const e = q();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = io(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = io(i, s);
  return { start: n, end: o };
}
function sd(e) {
  if (by(e)) {
    const t = Nf(e.jsonPath);
    let r = Fe();
    for (let n = 0; n < t.length; n++) {
      if (!r || !z(r))
        return [void 0, void 0];
      const i = gi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : Bk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && z(r) ? [r, Vk(r, e.offset)] : [void 0, void 0];
  }
  if (ky(e) || Ty(e)) {
    const t = wi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (z(t)) {
      const n = t.getLastChild();
      if (n && S(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && z(r) ? [r, 0] : [void 0, void 0];
  }
  if (xy(e)) {
    const t = wi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (z(t)) {
      const n = t.getLastChild();
      if (n && S(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && z(r) ? [r, 0] : [void 0, void 0];
  }
  if (_y(e)) {
    const t = wi(e.jsonPath);
    if (!t || !z(t))
      return [void 0, void 0];
    const r = ya(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && S(n) ? [n, 0] : [void 0, void 0];
  }
  if (Cy(e)) {
    const t = wi(e.jsonPath);
    if (!t || !z(t))
      return [void 0, void 0];
    const r = ya(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && S(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Sy(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = wi(e.jsonPath);
    if (!n || !z(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ya(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && S(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${vy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function od(e, t) {
  if (!gr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !z(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function ad(e) {
  return z(e) ? "element" : "text";
}
function ya(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (w(n) && n.getMarkerSyntax() === t || t === "closing" && w(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (gr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function wi(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Nf(r);
  let i = Fe();
  for (const s of n) {
    if (!i || !z(i))
      return;
    const o = gi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function io(e, t) {
  if (w(e)) {
    const r = e.getMarkerSyntax(), n = h_(e), i = n ? ln(pn(n)) : ln(pn(e));
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
    if (S(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return io(n, s);
    }
    const i = Po(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return io(i, o);
    }
  }
  if (z(e)) {
    const r = e.getChildAtIndex(t);
    if (gr(r)) {
      const i = r.getTextContent().endsWith("*"), s = ln(pn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Fp(e, t);
    return n.type === "text" ? {
      jsonPath: ln([...pn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: ln(pn(e)),
      offset: n.index
    };
  }
  if (S(e)) {
    const r = jk(e, t);
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
function h_(e) {
  const t = e.getParent();
  if (!t || !z(t))
    return;
  const r = g_(e);
  return r && !Mt(r) && !S(r) && !_e(r) ? r : t;
}
function g_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Ts(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function pn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Po(r);
    if (!n)
      break;
    const i = Kk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Ph() {
  for (let e = Fe().getFirstChild(); e; e = e.getNextSibling())
    if (os(e))
      return !0;
  return !1;
}
function Nh(e, t, r, n, i, s, o) {
  if (!ve.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Uo(r) : q();
  if (!N(a))
    return;
  const c = b_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Fi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Oh(e, l, c, i, s, void 0, void 0);
  return y_(u, a, i), u;
}
function yl(e) {
  return e !== "expanded";
}
function m_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!S(r) || !D(r.getParent()))
    return;
  if (w(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return w(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function y_(e, t, r) {
  const n = yl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || qk(t), yh(t);
  const i = m_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(D)?.selectEnd();
}
function Gn(e, t, r) {
  const n = Mr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ct(e)) : r?.markerMode === "visible" && n.append(vr("marker", qe(e)));
  const s = t === "" ? Dt : i ? L + t : t;
  return n.append(me(s)), n;
}
function b_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Gn("fr", f, n)), !e.isCollapsed()) {
        const p = ld(e);
        p.length > 0 && o.push(Gn("fq", p, n));
      }
      o.push(Gn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Gn("xo", f, n)), !e.isCollapsed()) {
        const p = ld(e);
        p.length > 0 && o.push(Gn("xq", p, n));
      }
      o.push(Gn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Oh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : yl(n?.noteMode), l = Bc(e, t, c);
  s && kt(l, Gr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = ct(e), u && d.setMode("token"), a || (f = ct(e, "closing"))) : n?.markerMode === "visible" && (d = vr("marker", qe(e) + " "), a || (f = vr("marker", et(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = me(Et(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => Ao(), g = r.flatMap(C_(m));
    if (t === "")
      l.append(...g);
    else {
      const y = Yc(r);
      let T = () => {
      };
      i?.noteCallerOnClick && (T = i.noteCallerOnClick), p = ml(l.__caller, y, T), l.append(p, m(), ...g);
    }
  }
  return f && l.append(f), l;
}
function Vr(e) {
  if (typeof e == "string") {
    const t = se(e);
    return j(t) ? t : void 0;
  }
  return s_(e);
}
function cd(e, t) {
  const r = t?.noteMode === "collapsed";
  if (e.setIsCollapsed(r), r) {
    const n = e.getPreviousSibling();
    if (In(n) || !n) {
      const i = e.getParent();
      if (i) {
        const s = e.getIndexWithinParent();
        i.select(s, s);
      }
    } else
      n.selectEnd();
  } else {
    const n = e.getChildren(), i = n.slice().reverse().find(D);
    if (i)
      k_(i);
    else {
      const s = bl(e), o = s === -1 ? n.length : s;
      e.select(o, o);
    }
  }
}
function bl(e) {
  const t = et(e.getMarker());
  return e.getChildren().findIndex((r) => w(r) && r.getMarkerSyntax() === "closing" || gr(r) && r.getTextContent() === t);
}
function k_(e) {
  const t = bl(e);
  if (t === -1) {
    e.selectEnd();
    return;
  }
  const r = e.getChildAtIndex(t - 1);
  S(r) && !Ts(r) ? r.selectEnd() : e.select(t, t);
}
function T_(e) {
  const t = e.getNextSibling();
  if (S(t) && !Io(t)) {
    t.select(0, 0);
    return;
  }
  const r = e.getParent();
  if (!r)
    return;
  const n = e.getIndexWithinParent() + 1;
  r.select(n, n);
}
function x_(e, t) {
  let r = Math.max(t, 0), n;
  const i = Yr(e);
  for (const { node: o } of hi(e)) {
    if (!wh(o, i))
      continue;
    const a = wo(o), c = o.getTextContentSize() - a;
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
function wh(e, t) {
  return !S(e) || Ts(e) || Io(e) ? !1 : !t || !e.is(t);
}
function __(e) {
  if (e.getIsCollapsed() !== !1 || e.getChildren().some(D))
    return;
  const t = Yr(e);
  for (const { node: n } of hi(e))
    if (wh(n, t))
      return;
  const r = bl(e);
  return r === -1 ? e.getChildrenSize() : r;
}
function C_(e) {
  return (t) => Yt(t) ? [t] : [t, e()];
}
function S_(e) {
  const t = e.getParent();
  return t !== null && st(t, j) !== null;
}
function ld(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = $c(e);
  let a = "";
  for (const c of t)
    if (!(j(c) || ht(c) || S_(c)) && !w(c) && !nn(c) && ne(c, oe) !== "attribute") {
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
const kl = [
  Gt,
  St,
  ...ox
], v_ = [
  bi,
  ...kl
], M_ = tn((e, t) => {
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
function E_() {
  const [e, t] = de(void 0), [r, n] = de(), i = Q(null), s = he((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = nb(l, c, () => {
      ib(l, c, {
        placement: "bottom-start",
        middleware: [sb(), ob()]
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
function A_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = E_();
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
const P_ = fy(M_);
function qh({ isOpen: e = !1, children: t }) {
  const r = Q(null), { coords: n, placement: i } = A_({ isOpen: e, floatingBoxRef: r }), s = Ke(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return bn(
    _(P_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Rh = Af(void 0);
function Tl() {
  const e = Pf(Rh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function N_(e, t) {
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
function O_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = N_(t, r);
  return _(Rh.Provider, { value: i, children: _("div", { ...n, children: e }) });
}
const $h = tn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Tl(), u = he((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = he((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return _("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function w_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Q(null), { state: { activeIndex: i, menuItems: s } } = Tl(), o = Ke(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ke(() => {
    const c = o(s);
    return t ? py.map(c, (l, u) => hy(l) && l.type === $h && l.props.index === void 0 ? gy(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return K(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), _("div", { ref: n, role: "menu", ...r, children: a });
}
const q_ = (e, t, r) => Ls(e, r).toLowerCase().includes(t.toLowerCase()), ud = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ls = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function R_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? ud(r[0]) : "") : (u = n || (r.length > 0 ? ud(r[0]) : ""), d = (m, g) => q_(m, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (g) {
      return console.warn("Error filtering item:", m, g), !1;
    }
  }).sort((m, g) => {
    const y = (v) => (p.has(v) || p.set(v, Ls(v, f).toLowerCase()), p.get(v) ?? ""), T = a ? Ls(m, f) : y(m), C = a ? Ls(g, f) : y(g);
    for (const v of c)
      switch (v) {
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
          const P = T.indexOf(l), M = C.indexOf(l);
          if (P !== -1 && M === -1)
            return -1;
          if (M !== -1 && P === -1)
            return 1;
          if (P !== -1 && M !== -1)
            return P - M;
          break;
        }
      }
    return T.localeCompare(C);
  });
}
const ba = {
  Root: O_,
  Options: w_,
  Option: $h
};
function $_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ke(() => R_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function I_() {
  const { moveUp: e, moveDown: t, select: r } = Tl();
  return Ke(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const L_ = () => {
  const e = I_(), [t] = ae();
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
    return t.registerCommand(Nr, r, Oe);
  }, [t, e]);
};
function D_() {
  return L_(), null;
}
const U_ = ["Shift", "Control", "Alt", "Meta"];
function Ih(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), u = s !== void 0, [d, f] = de(""), p = u ? s ?? "" : d, m = $_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return K(() => {
    a?.(p, m);
  }, [a, p, m]), K(() => l.registerCommand(Nr, (y) => {
    if (u || c?.includes(y.key) || U_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const C = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((v) => v.slice(0, -1));
      }
    }[y.key];
    return C ? (y.stopPropagation(), y.preventDefault(), C(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((v) => v + y.key), !0) : !1;
  }, Oe), [l, u, p, o, n, c]), Te(ba.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => g(y), children: [!u && _("input", { value: p, type: "text", disabled: !0 }), _(D_, {}), _(ba.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((C, v) => Te(ba.Option, { index: v, children: [_("span", { className: "label", children: C.label ?? C.name }), _("span", { className: "description", children: C.description })] }, C.name)) })] });
}
function F_({ trigger: e, items: t }) {
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
  }), [r]), t && _(qh, { isOpen: n, children: ({ placement: o }) => _(Ih, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function z_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Ke(() => {
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
function Wi(e, t) {
  return `${e}:${t}`;
}
function K_(e, t) {
  K(() => {
    if (!e.hasNodes([Ze]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Be(zf(e, Ze, (n) => Zi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], m = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, m, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(Ze, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = se(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : _e(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!Ze.isReservedType(c))
              for (const u of l) {
                let d = t.get(Wi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Wi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Wi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const j_ = tn(function({ logger: t }, r) {
  const [n] = ae(), i = Ke(() => /* @__PURE__ */ new Map(), []);
  K_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Wi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = se(u);
        _e(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Hs(d));
      }
  };
  return bo(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (Ze.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Uo(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), up(p, a, c, l, u, d, f);
      }, { tag: za });
    },
    removeAnnotation(o, a) {
      if (Ze.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Wi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: za });
    }
  })), null;
}), B_ = [];
function V_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = B_, onChange: n }) {
  const [i] = ae();
  return ps(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(wf) && !u.has(Xf) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = W_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function W_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ui();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && Xt(s) !== void 0;
    if (t.size === 1 && S(s) && !o && zx(s)) {
      const a = Sh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = se(i);
          return new Ui([S(d) ? nc(d) : { insert: "" }]);
        }), l = new Ui([nc(s)]), u = new Ui(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = nd(r), c = nd(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const xl = "formatted", Lh = "unformatted", Dh = "paragraph-structure", _l = "standard", Uh = "block-verse", H_ = {
  [xl]: "Formatted",
  [Lh]: "Unformatted",
  [Dh]: "Paragraph Structure",
  [_l]: "Standard",
  [Uh]: "Block Verse"
};
function ki(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Cl, Sl;
function G_(e) {
  const t = vl(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Cl = e, Sl = t;
}
G_(xl);
const WP = () => Cl, Fo = () => Sl;
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
    case Lh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Dh:
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
    case Uh:
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
function HP(e) {
  if (!e)
    return;
  const t = dd(e);
  return Object.keys(H_).find((r) => wt(dd(vl(r)), t));
}
const J_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function dd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...J_, ...t };
}
function zo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function Y_(e) {
  if (e)
    return cs(e) ? St : e.markerMode === "editable" ? dt : St;
}
function cs(e) {
  return e?.verseLayout === "block";
}
function X_(e) {
  const t = [], r = e ?? Sl;
  return r && (t.push(`${Tb}${r.markerMode}`), r.hasSpacing && t.push(bb), r.isFormattedFont && t.push(kb)), t;
}
function Q_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += Z_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), tC(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += rC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), iC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function Z_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), eC(t, e.retain, e.attributes, r, n)), e.retain);
}
function eC(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Fe();
  function l(u) {
    if (s <= 0)
      return !0;
    if (Er(u)) {
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
          if (Xr(r)) {
            const C = g.getParent();
            if (D(C)) {
              const v = r.char;
              let P;
              Array.isArray(v) ? a >= 0 && a <= v.length - 1 && (P = v[a]) : a === 0 && (P = v);
              const M = P ? vn(P, C) : !1;
              if (M && Array.isArray(v) && v.length > 1) {
                const B = me("");
                g.replace(B);
                const E = typeof r.segment == "string" ? r.segment : void 0, R = Ti(v.slice(1), n, g, E);
                let $ = B;
                for (const re of R)
                  $.insertAfter(re), $ = re;
                B.remove(), qt(r, g);
              } else if (M)
                qt(r, g);
              else {
                g.remove();
                const B = fd(g, r, n, i);
                if (B && B.length > 0) {
                  let E = C;
                  for (const R of B)
                    E.insertAfter(R), E = R;
                }
              }
            } else {
              const v = me("");
              g.replace(v);
              const P = fd(g, r, n, i);
              if (P && P.length > 0) {
                let M = v;
                for (const B of P)
                  M.insertAfter(B), M = B;
                v.remove();
              } else
                v.replace(g);
            }
          } else
            qt(r, g);
          s -= m;
        }
      }
      o += d;
    } else if (At(u))
      e <= o && o < e + t && s > 0 && (pd(u, r), s -= 1), o += 1;
    else if (D(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (Xr(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            ic(u, p.style), typeof p.cid == "string" && kt(u, Sn, () => p.cid);
            const m = Ue(p, ro);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || pC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Ua(u), !0;
        }
      }
      d && Ua(u), a -= 1;
    } else if (Mt(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!fr(u))
          pd(u, r);
        else if (Ml(r)) {
          const p = Kh(r.para, n);
          p && u.replace(p, !0);
        }
        s -= f;
      }
      o += f;
    } else if (z(u)) {
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
function fd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Ti(t.char, r, e, i), o = s.find(D);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), qt(t, e);
    return;
  }
  const a = {};
  Wh.forEach((u) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), qt(t, e), s;
}
function Fh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  w(r) ? (r.setMarker(t), r.setTextContent(qe(t))) : Yt(r) && r.getTextType() === "marker" && r.setTextContent(qe(t) + L);
}
function ic(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    w(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = D(e.getParent()), i = e.getFirstChild();
  Yt(i) && i.getTextType() === "marker" && i.getTextContent() === qe(r, n) && i.setTextContent(qe(t, n));
  const s = e.getLastChild();
  Yt(s) && s.getTextType() === "marker" && s.getTextContent() === et(r, n) && s.setTextContent(et(t, n));
}
function pd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && D(e) && Xr(t)) {
      const i = sc(n);
      if (ic(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        kt(e, Sn, () => o);
      }
      const s = Ue(i, ro);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ge(e) || ge(e) || He(e) || j(e) || De(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (pt(e) || ce(e) || D(e)) && (r === "style" && ce(e) ? Fh(e, n) : r === "style" && D(e) ? ic(e, n) : r === "code" && pt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && kt(e, Gr, () => n));
  }
}
function tC(e, t, r) {
  if (t <= 0)
    return;
  const n = Fe();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Er(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if (At(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Mt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Mt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Ht(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Ce(p)) {
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
              Er(T) ? m += T.getTextContentSize() : At(T) && (m += 1), i = C;
            }
            const y = p.getChildren();
            for (const T of y)
              T.remove(), a.append(T);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Ht(), !0);
        } else ce(a) ? a.replace(Ht(), !0) : a.remove();
      }
      i += 1;
    } else if (z(a)) {
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
function rC(e, t, r, n, i) {
  if (t === as)
    return hd(e, r, n, i);
  if (t.endsWith(as) && !Ml(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Xr(r))
        throw new Error("Text + LF should not have char attributes");
      o += so(e, s, r, i);
    }
    return o += hd(e + o, r, n, i), o;
  } else return Xr(r) ? nC(e, t, r, n, i) : so(e, t, r, i);
}
function nC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = me(t === "" ? Dt : t);
  qt(r, s);
  let o;
  {
    let y = function(T) {
      if (Er(T)) {
        const C = T.getTextContentSize();
        if (e >= g && e < g + C) {
          const v = T.getParent();
          return D(v) && (o = v), !0;
        }
        g += C;
      } else if (At(T))
        g += 1;
      else if (D(T)) {
        const C = T.getChildren();
        for (const v of C)
          if (y(v))
            return !0;
      } else if (z(T)) {
        const C = T.getChildren();
        for (const v of C)
          if (y(v))
            return !0;
        Mt(T) && (g += 1);
      }
      return !1;
    };
    const m = Fe();
    let g = 0;
    y(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && vn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (vn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Ti(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(D);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), so(e, t, void 0, i);
  const f = {};
  for (const [m, g] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof g == "string" && (f[m] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const m of u)
    if (!zh(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), so(e, t, void 0, i));
}
function so(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Fe();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Er(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = me(t);
        if (qt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          D(f) && !Xr(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (At(c))
      s += 1;
    else if (D(c)) {
      if (!o && e === s) {
        const d = me(t);
        qt(r, d);
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
        const d = me(t);
        return qt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Mt(c)) {
      if (!o && e === s) {
        const d = me(t);
        qt(r, d);
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
        const d = me(t);
        return qt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (z(c)) {
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
    const c = me(t);
    qt(r, c);
    const l = Ht().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function zh(e, t, r) {
  const n = Fe();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!z(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Ce(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Ht().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Er(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if (At(l))
        i += 1;
      else if (D(l)) {
        if (o(l))
          return !0;
      } else if (Mt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (fr(u) && Mt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (z(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return z(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Ce(a) ? fr(a) && ce(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Ce(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (D(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Ce(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function iC(e, t, r, n, i) {
  let s;
  return Br("chapter", t) ? s = oC(t.insert.chapter, r) : Br("verse", t) ? s = aC(t.insert.verse, r) : Br("ms", t) ? s = cC(t.insert.ms) : Br("note", t) ? s = jh(t, r, n, i) : Br("unknown", t) ? s = Bh(t, r, n, i) : Br("unmatched", t) && (s = uC(t.insert.unmatched, r)), s ? zh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function hd(e, t, r, n) {
  let i;
  Ml(t) ? i = Kh(t.para, r) : fC(t) && (i = sC(t.book)), i ??= Ht();
  const s = i, o = ce(s), a = fr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Er(d)) {
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
    } else if (At(d))
      c += 1;
    else if (Mt(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (fr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (ce(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ce(d) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${d.getMarker()}) at targetIndex ${e}`), d.insertAfter(s), l = !0, !0;
    } else if (z(d)) {
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
  return u(Fe()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function sC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== es || !r || !Ut.isValidBookCode(r))
    return;
  const n = Ue(e, Ax);
  return gp(r, n);
}
function Kh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ue(e, Ex), i = ts(r, n);
  if (!ki(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ct(r), Ao());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = qe(r) + L;
    i.append(t.hasGutterParaMarkers ? Hb(s) : vr("marker", s));
  }
  return i;
}
function oC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ue(e, Px);
  let a;
  if (t.markerMode === "editable")
    a = bp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Gc(r, c, n, i, s, o);
  }
  return a;
}
function aC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ue(e, Nx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Lt(r, n);
    c = Ap(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = ll(n, l, i, s, o, a);
  }
  return c;
}
function cC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ue(e, Ox);
  return ep(t, r, n, s, i);
}
function jh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Ue(i.note, wx), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (Xr(g.attributes)) {
        const y = Ti(g.attributes.char, t, me(g.insert), void 0, Vh(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(me(g.insert));
  return Oh(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Bh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ue(i, qx), l = Hc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && lC(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && kt(l, Gr, () => d), l;
}
function lC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Xr(s.attributes)) {
        const o = me(s.insert), a = Ti(s.attributes.char, t, o, void 0, Vh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(me(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Br("unknown", s)) {
        const o = Bh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Br("note", s)) {
        const o = jh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function uC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = il(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Vh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function sc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Ti(e, t, r, n, i, s = !1, o = !1) {
  S(r) && r.getTextContentSize() === 0 && r.setTextContent(Dt);
  const a = () => {
    o && S(r) && r.getTextContent() !== Dt && r.setTextContent(L + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(sc), l = c[0], u = i?.[i.length - 1];
    if (D(u) && vn(l, u))
      return c.length > 1 ? Ti(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, m) => {
      const g = Mr(p.style, Ue(p, ro));
      if (typeof p.cid == "string" && kt(g, Sn, () => p.cid), n && m === c.length - 1 && kt(g, Gr, () => n), f)
        if (D(f)) {
          const y = f.getMarker(), T = [];
          Ta(y, T, t, !0), T.forEach((v) => g.append(v)), g.append(f);
          const C = [];
          ka(f, C, t, !0), C.forEach((v) => g.append(v));
        } else
          g.append(f);
      return g;
    }, r);
    return Ta(l.style, d, t, s), ka(d, d, t, s), [d];
  } else {
    const c = sc(e), l = i?.[i.length - 1];
    if (D(l) && vn(c, l))
      return r && l.append(r), [];
    a();
    const u = Mr(c.style, Ue(c, ro));
    return typeof c.cid == "string" && kt(u, Sn, () => c.cid), n && kt(u, Gr, () => n), r && u.append(r), Ta(c.style, u, t, s), ka(u, u, t, s), [u];
  }
}
function ka(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && dC(e.getMarker(), t, r, !1, n);
}
function Ta(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ct(e, "opening", n) : r?.markerMode === "visible" && (i = vr("marker", qe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function dC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ct("", "selfClosing") : s = ct(e, "closing", i) : r?.markerMode === "visible" && (s = vr("marker", n ? et("") : et(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function fC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Ml(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Xr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function pC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function qt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        kt(t, Gr, () => n);
        continue;
      }
      if (hC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Wh = [
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
function hC(e) {
  return Wh.includes(e);
}
function gC() {
  const [e] = ae();
  return K(() => e.registerCommand(xo, (t) => (mC(t), !1), xn), [e]), null;
}
function mC(e) {
  if (yC(e.target))
    return;
  const t = q();
  N(t) && bC(t);
}
function xi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Ft(t))
      r++, t = t.getNextSibling(), S(t) && t.getTextContent() === L && (r++, t = t.getNextSibling());
    else if (ge(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Qt(e, r), !0);
}
function yC(e) {
  if (!qf(e))
    return !1;
  const t = pi(e);
  if (!Gb(t))
    return !1;
  const r = t.getParent();
  return r ? Ce(r) ? xi(r) : (Qt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function bC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!Ce(r))
    return !1;
  const n = r.getFirstChild();
  return !gr(n) && !In(n) ? !1 : xi(r);
}
function kC() {
  const [e] = ae();
  return K(() => {
    const t = (r) => r instanceof KeyboardEvent && !TC(r) || !Ko() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Be(
      e.registerCommand(Nr, t, Oe),
      e.registerCommand(Ic, t, Oe),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(xr, t, Wt),
      e.registerCommand(_n, t, Wt),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Lc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = pi(r.target);
        return !n || !Qr(n) ? !1 : (r.preventDefault(), !0);
      }, Oe),
      e.registerCommand(Ay, t, Oe),
      e.registerCommand(Py, t, Oe),
      e.registerCommand(Ny, t, Oe)
    );
  }, [e]), null;
}
function TC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Qr(e) {
  return st(e, (t) => De(t) || lh(t)) ?? void 0;
}
function Ko() {
  const e = q();
  return N(e) ? Qr(e.anchor.getNode()) !== void 0 || Qr(e.focus.getNode()) !== void 0 : !1;
}
function xC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function _C(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), xC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function CC(e, t, r, n) {
  if (!LC(t) || _C(e, r))
    return !1;
  const i = r === "up" ? Mx(t) : vx(t);
  return i && n.preventDefault(), i;
}
function SC({ viewOptions: e }) {
  const [t] = ae();
  return vC(t, e), null;
}
function vC(e, t) {
  K(() => {
    if (!e.hasNodes([hr, St, ve]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = q();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = gd(o), d = wC(i, md(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return CC(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = gd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return md(a, n.key) ? l = !c && kd(i, "next") || !c && EC(i) || $C(i) || !c && s && bd(i, "next") : MC(a, n.key) && (l = !c && kd(i, "previous") || !c && AC(i) || IC(i, t) || !c && s && bd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Nr, r, Oe);
  }, [e, t]);
}
function gd(e) {
  return e.dir || "ltr";
}
function md(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function MC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function oc(e) {
  if (!D(e) || e.getMarker() !== "fp")
    return;
  const t = Xt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function EC(e) {
  const t = oc(wp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Qt(t, 0), !0);
}
function AC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = oc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : yd(n);
  }
  if (t.offset === 0) {
    const n = oc(r);
    return n ? yd(n) : !1;
  }
  return !1;
}
function yd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (S(t))
    return t.select(), !0;
  if (z(t)) {
    const i = t.getLastDescendant();
    return S(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const oo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function PC(e) {
  if (oo)
    for (const { segment: r } of oo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function NC(e) {
  if (oo) {
    let n = 0;
    for (const { index: i } of oo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Hh(e) {
  for (let t = e; t; t = t.getParent())
    if (z(t) && !t.isInline())
      return t;
}
function Gh(e) {
  return !!e && w(e) && Qr(e) !== void 0;
}
function li(e) {
  return S(e) && !e.isToken() && !Gh(e) && e.getTextContentSize() > 0;
}
function Jh(e) {
  return gs(e) ? !0 : j(e) ? e.getIsCollapsed() === !0 : S(e) ? (e.isToken() || Gh(e)) && e.getTextContentSize() > 0 : _o(e) ? !He(e) : !1;
}
function ui(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function jo(e, t, r) {
  for (let n = e; n; ) {
    if (Jh(n))
      return n;
    if (z(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? ui(n, t, r);
      continue;
    }
    if (li(n))
      return n;
    n = ui(n, t, r);
  }
}
function El(e, t, r, n, i) {
  return r === "element" && z(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? ui(e, n, i) : r === "text" && Jh(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : ui(e, n, i);
}
function xa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = El(e.node, e.offset, e.kind, "previous", t), n = jo(r, "previous", t);
  if (!n)
    return e;
  if (li(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function OC(e, t) {
  const r = e.getNode(), n = Hh(r);
  if (!n)
    return;
  if (e.type === "text" && li(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return xa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = El(r, e.offset, e.type, t, n), s = jo(i, t, n);
  if (!s)
    return;
  if (li(s)) {
    const c = s.getTextContent(), l = t === "next" ? PC(c) : NC(c);
    return xa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return xa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Yh(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = OC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function bd(e, t) {
  return Yh(e, t, "collapse");
}
function wC(e, t) {
  return Yh(e, t, "extend");
}
function qC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && li(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = El(n, e.offset, e.type, t, r);
  return jo(i, t, r) === void 0;
}
function RC(e, t) {
  const r = Fe();
  for (let n = e; n; ) {
    const i = ui(n, t, r), s = i && jo(i, t, r);
    if (!s)
      return;
    if (n = Qr(s), !n)
      return s;
  }
}
function kd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Qr(n))
    return !1;
  const i = Hh(n);
  if (!i || !qC(r, t, i))
    return !1;
  const s = ui(i, t, Fe()), o = s && Qr(s);
  if (!o)
    return !1;
  const a = RC(o, t);
  if (!a)
    return !0;
  if (li(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function Td(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function $C(e) {
  const t = e.anchor.getNode(), r = wp(e);
  if (j(r) && !w(r.getFirstChild())) {
    if (Ce(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Ce(i) && xi(i)) && i.selectStart(), !0;
      }
    } else return Yt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Ce(t) && j(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Td(r), !0;
  }
  const n = r?.getParent();
  if (Yt(r) && j(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Td(n) : n.selectEnd(), !0;
  }
  return !1;
}
function IC(e, t) {
  const r = Nk(e);
  if (ys(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (pt(i.getParent()))
    return !0;
  if (j(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!In(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Ce(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = st(o, (c) => j(c));
    if (j(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Xt(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (ht(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function LC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ge(t) && _o(t);
}
function DC() {
  const [e] = ae();
  return UC(e), null;
}
function UC(e) {
  K(() => {
    if (!e.hasNodes([ye]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Be(
      e.registerNodeTransform(ye, KC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ye, Qk),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ye, Qp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ye, (t) => ss(Mn("char"), t)),
      e.registerNodeTransform(je, jC)
    );
  }, [e]);
}
function _a(e) {
  return e.getChildren().some(w);
}
function FC(e, t) {
  const r = t.getFirstChild();
  if (!w(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (_s(n)) {
    const i = n.getTextContent();
    i.startsWith(L) && (i === L ? n.remove() : n.setTextContent(i.slice(L.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function zC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  w(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function KC(e) {
  if (!D(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (_a(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ne(e, Sn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (D(i) && vn({ style: t, cid: r }, i) && wt(n, i.getUnknownAttributes()))
    if (_a(i)) {
      if (FC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  D(s) && vn({ style: t, cid: r }, s) && wt(n, s.getUnknownAttributes()) && (_a(s) ? zC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function jC(e) {
  const t = e.getParent();
  if (!D(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Dt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Xh(e) {
  return e.replaceAll("	", " ");
}
function Qh() {
  const e = q();
  return !!e && !e.isCollapsed();
}
function Zh(e) {
  const t = () => !Qh();
  return Be(e.registerCommand(Co, t, xt), e.registerCommand(_n, t, xt));
}
const Al = (e) => {
  e.dispatchCommand(Co, null);
}, Pl = (e) => {
  e.dispatchCommand(_n, null);
}, Nl = (e) => {
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
      n.setData(o, Xh(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(xr, s);
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
    r.setData("text/plain", Xh(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(xr, i);
  });
};
function BC() {
  const [e] = ae();
  return K(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(js ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Al(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Pl(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Ol(e) : Nl(e)));
    };
    return Be(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      Zh(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function VC({ logger: e }) {
  const [t] = ae();
  return K(() => Be(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Nr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), ei),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(xr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ei),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Lc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ei)
  ), [t, e]), null;
}
function WC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), _("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: _("span", { className: "text", children: i.title }) });
}
function HC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return _("div", { className: "typeahead-popover", children: _("ul", { children: e.map((i, s) => _(WC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let GC = 0;
class qi {
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
    const d = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new qi("Cut", {
        onSelect: () => {
          Pl(t);
        },
        isDisabled: r
      }),
      new qi("Copy", {
        onSelect: () => {
          Al(t);
        }
      }),
      new qi("Paste", {
        onSelect: () => {
          Nl(t);
        },
        isDisabled: r
      }),
      new qi("Paste as Plain Text", {
        onSelect: () => {
          Ol(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new qi(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = he(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  K(() => Zh(t), [t]), K(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || Sp(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
    });
  }, [t]), K(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return globalThis.addEventListener("scroll", d, !0), () => globalThis.removeEventListener("scroll", d, !0);
  }, [i.isOpen, l]), K(() => {
    if (!i.isOpen)
      return;
    const d = () => {
      l();
    };
    return document.addEventListener("pointerdown", d), () => document.removeEventListener("pointerdown", d);
  }, [i.isOpen, l]), K(() => {
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
  }, [i.isOpen, l, c, o, t]), K(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]);
  const u = Q(null);
  return ps(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${m}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? Qy.createPortal(_("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: _(HC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function YC(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function XC(e) {
  if (!Ry(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function QC(e) {
  return ht(e);
}
function Ca(e, t, r) {
  const n = pi(t.node);
  if (!_o(n) || QC(n))
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
  const r = e.getRootElement(), n = Oy(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !wy(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = Ca(e, c, XC(c)), d = u;
  else {
    const y = YC(n.getRangeAt(0), c);
    u = Ca(e, c, y ? "before" : "after"), d = Ca(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, m = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = qy(m, e);
  return g ? (ii(g), g.dirty = !t, t) : !1;
}
function eS() {
  const [e] = ae(), t = Q(!1), r = Q(!1);
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
  }, [e]), K(() => e.registerCommand(dr, () => (ZC(e, t.current) && (r.current = !0), !1), Wt), [e]), null;
}
function tS() {
  const [e] = ae();
  return K(() => e.registerCommand(Nr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(js ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Wt), [e]), null;
}
function rS({ isEditable: e }) {
  const [t] = ae();
  return ps(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function eg(e) {
  const t = e.getRootElement();
  return !!t && t.contains(t.ownerDocument.activeElement);
}
function Ds(e, ...t) {
  const r = e.registerUpdateListener(({ tags: n }) => {
    r();
    for (const i of t)
      n.delete(i);
  });
}
function Sa(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.defaultView?.getSelection();
  !t || !r?.anchorNode || t.contains(r.anchorNode) && r.removeAllRanges();
}
function ac(e, t) {
  let r;
  try {
    r = Tn();
  } catch {
  }
  return r === e ? t() : e.read(t);
}
function xd(e) {
  return !!e && ks(se(e));
}
function wl(e) {
  const [t] = ae(), r = Q(void 0), n = he((i) => {
    const s = q(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = xd(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Ro(u, d), p = ks(f) ? f : void 0;
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const m = vk();
        i.insertAfter(m), r.current = m.getKey(), l = m.getKey();
      }
      Qt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = se(a);
      S(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return K(() => {
    const i = () => {
      const a = e(), c = q(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Bt(_r), Ds(t, _r), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (bs(c) || !c.includes(si))
        return;
      const l = q(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Mk(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(si).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Be(t.registerCommand(dr, () => (i(), !1), xn), t.registerCommand(Dc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = xd(a);
      }), c && t.update(() => {
        const l = se(a);
        S(l) && l.remove();
      }, { tag: _r }), r.current = void 0, !1;
    }, xn), t.registerNodeTransform(je, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function nS() {
  const e = q();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e, r = t.getNode(), n = j(r) ? r : r.getParent();
  if (!j(n))
    return;
  const i = __(n);
  if (i === void 0)
    return;
  let s = n.getChildAtIndex(i - 1);
  for (; s && ks(s); )
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
function iS() {
  return wl(nS), null;
}
function sS() {
  const e = q();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!z(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ge(i) || Ro(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ge(s))
    return i;
}
function oS() {
  return wl(sS), null;
}
function aS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
        const u = eg(o);
        o.update(() => {
          u || Bt(gn), o.setEditorState(l), o.dispatchCommand($y, void 0);
        }, { tag: zc });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
const va = "caller_highlight", cS = tn(function(t, r) {
  const [n] = ae(), i = Q(void 0), s = Q(void 0), o = he(() => {
    const a = i.current, c = a === void 0 ? void 0 : n.getEditorState().read(() => {
      const u = Vr(a);
      return u ? (u.getChildren().find(ht) ?? Yr(u))?.getKey() : void 0;
    }), l = c ? n.getElementByKey(c) ?? void 0 : void 0;
    s.current && s.current !== l && s.current.classList.remove(va), l?.classList.add(va), s.current = l;
  }, [n]);
  return bo(r, () => ({
    setHighlightedNote(a) {
      i.current = a === void 0 ? void 0 : ac(n, () => Vr(a)?.getKey()), o();
    }
  }), [n, o]), K(() => Be(
    // Runs before the update listener below, so the key it re-points to is the one the
    // re-application then resolves the caller element from.
    n.registerMutationListener(ve, (a, { prevEditorState: c, updateTags: l }) => {
      const u = i.current;
      if (u === void 0 || a.get(u) !== "destroyed")
        return;
      if (![...a.values()].includes("created")) {
        i.current = void 0;
        return;
      }
      const d = l.has(zc) ? void 0 : c.read(() => gl(u)), f = d === void 0 ? void 0 : n.getEditorState().read(() => Vr(d)?.getKey());
      i.current = f !== void 0 && a.get(f) === "created" ? f : void 0;
    }, { skipInitialization: !0 }),
    n.registerUpdateListener(() => o())
  ), [n, o]), K(() => () => s.current?.classList.remove(va), []), null;
});
function lS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return uS(t, n), dS(i, e, r, n), null;
}
function uS(e, t) {
  const r = Q(void 0), n = Q(void 0), i = e.noteCallers, s = e.crossRefCallers;
  K(() => {
    let o = i;
    (!o || o.length <= 0) && (o = f_), r.current !== o && (r.current = o, _d("note-callers", o, t));
  }, [t, i]), K(() => {
    let o = s;
    (!o || o.length <= 0) && (o = p_), n.current !== o && (n.current = o, _d("cross-ref-callers", o, t));
  }, [t, s]);
}
function dS(e, t, r, n) {
  K(() => {
    if (!e.hasNodes([ye, ve, Gt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => bS(s));
    return Be(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(ve, (s) => fS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ye, pS),
      e.registerNodeTransform(je, hS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Gt, gS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Gt, (s, { prevEditorState: o }) => mS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(dr, () => yS(e, t, r, n), xt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function fS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => ht(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    S(i) && !w(i) && i.getTextContent() !== Et(e.getCaller()) && e.insertBefore(i);
  }
}
function pS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => ht(o));
  if (!D(e) || !j(t) || !n)
    return;
  const i = Yc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  S(s) ? s.getTextContent() !== L && s.setTextContent(L) : e.insertAfter(me(L));
}
function hS(e) {
  const t = Xt(e), r = t?.getChildren(), n = r?.find((o) => ht(o));
  if (!S(e) || !j(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!w(e) && j(i) && e.getTextContent() !== L && (e.setTextContent(L), e.selectEnd()), D(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Dt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Yc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function gS(e) {
  if (!ht(e))
    return;
  const t = e.getNextSibling();
  !S(t) || w(t) ? e.insertAfter(me(L)) : t.getTextContent() !== L && t.setTextContent(L);
}
function mS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return ht(o) && j(a) && a.getCaller() === Yi;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function yS(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = q();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = st(o, (c) => j(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = se(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Ri(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (j(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ri(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (j(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ri(e, c, n);
    } else if (!a) {
      const c = st(o, (l) => j(l));
      if (c && c.getIsCollapsed() && Ce(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ri(e, l, n);
      }
    }
  }
  if (Ce(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (In(c) && j(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Ri(e, l, n);
    }
  }
  return !1;
}
function Ri(e, t, r) {
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
function bS(e) {
  const t = q();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (j(i) && S(s)) {
    e.preventDefault();
    const o = Rc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), ii(o);
  }
}
function _d(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (kS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function kS(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function Bo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!w(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = Yr(e);
  return r && t.push(r), t.length > 0 && t.every((n) => S(n) && n.getMode() === "token") ? t : [];
}
function TS(e) {
  const t = e.getParent();
  if (j(t))
    return Bo(t).some((r) => r.is(e)) ? t : void 0;
}
function ao(e) {
  const t = Bo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function xS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function _S(e) {
  const t = Iy();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= ao(e);
  const i = xS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= ao(e);
}
function cc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = TS(t);
  if (r)
    return CS(r, t, e.offset) ? void 0 : r;
}
function CS(e, t, r) {
  const n = Bo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function SS(e) {
  const t = Bo(e), r = t[t.length - 1];
  S(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Qt(e, ao(e));
}
function vS(e = !1) {
  const t = q();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return MS(t.anchor, t.focus);
  const r = cc(t.anchor);
  if (!r)
    return !1;
  if (!e && _S(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Qt(n, r.getIndexWithinParent());
  } else
    SS(r);
  return !0;
}
function MS(e, t) {
  const r = cc(e), n = cc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Cd(e, r, i), n && Cd(t, n, !i), !0;
}
function Cd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), ao(t), "element");
}
function ES() {
  const [e] = ae(), t = Q(!1);
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
  }, [e]), K(() => e.registerCommand(dr, () => (vS(t.current) && Bt(_r), !1), xn), [e]), null;
}
function AS({ onChange: e }) {
  const [t] = ae();
  return K(() => t.registerCommand(dr, () => {
    const r = no();
    return e?.(r), !1;
  }, xt), [t, e]), null;
}
function PS() {
  const [e] = ae();
  return NS(e), null;
}
function NS(e) {
  K(() => {
    if (!e.hasNodes([tt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(tt, (t) => OS(t, e));
  }, [e]);
}
function OS(e, t) {
  tc(t, e.getKey()) && Ch(e.getFirstChild()), !(!ce(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return ce(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function tg({ onStateChange: e }) {
  const [t] = ae(), [r, n] = de(t), i = Q(!1), s = Q(!1), o = Q(void 0), a = Q(void 0), c = he(() => {
    const l = q();
    let u;
    if (N(l)) {
      const d = l.anchor.getNode(), f = l.focus.getNode();
      let p = d.getKey() === "root" ? d : st(d, (T) => {
        const C = T.getParent();
        return C !== null && Ly(C);
      });
      p === null && (p = d.getTopLevelElementOrThrow()), os(p) && (p = st(d, ce) ?? p);
      const m = p.getKey(), g = r.getElementByKey(m), y = wk(d, f);
      if (y && Sx(y) && (u = y.getMarker()), g !== null && (ce(p) || pt(p) || ys(p))) {
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
  return K(() => t.registerCommand(dr, (l, u) => (c(), n(u), !1), Wt), [t, c]), K(() => Be(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Dy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Wt), r.registerCommand(Uy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Wt)), [c, r, e]), null;
}
function rg(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Zr(e) {
  return e ? Ce(e) ? e : st(e, (r) => Ce(r)) ?? void 0 : void 0;
}
function ng(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Zr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function ql(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !wc(e) ? !1 : e.getNodes().some((t) => ge(t));
}
function ig(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Zr(r);
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
function sg(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Zr(r);
  if (!n)
    return !1;
  if (z(r)) {
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
function Sd(e, t) {
  return !!lc(e, t);
}
function lc(e, t) {
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && z(n)) {
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
function co(e, t) {
  if (!N(e))
    return !1;
  const r = Zr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ni(e) {
  return ql(e) || ng(e);
}
function og(e, t) {
  if (ql(e) || ng(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return ig(e) && co(e, "backward") || Sd(e, "backward");
    case "deleteForward":
      return sg(e) && co(e, "forward") || Sd(e, "forward");
    case "insertText":
      return !1;
  }
}
function wS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = lc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (ig(e) && co(e, "backward")) {
        const n = Zr(e.anchor.getNode());
        if (Ce(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = lc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (sg(e) && co(e, "forward")) {
        const i = Zr(e.anchor.getNode())?.getNextSibling();
        if (Ce(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function vd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return wc(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = Zr(e.anchor.getNode()), n = Zr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function ag(e) {
  if (S(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else z(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function qS(e) {
  const t = e.getPreviousSibling();
  if (!Ce(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? ag(r) : xi(t) || t.selectStart();
}
function cg(e) {
  return ge(e) || Ge(e) ? [] : Ce(e) ? e.getChildren().flatMap(cg) : [e];
}
function RS(e) {
  const t = [];
  for (const r of e) {
    const n = cg(r);
    n.length !== 0 && (Ce(r) && t.length > 0 && t.push(me(" ")), t.push(...n));
  }
  return t;
}
function Md(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $S(e) {
  if (Array.isArray(e)) return e;
}
function IS(e, t) {
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
function LS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DS(e, t) {
  return $S(e) || IS(e, t) || US(e, t) || LS();
}
function US(e, t) {
  if (e) {
    if (typeof e == "string") return Md(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Md(e, t) : void 0;
  }
}
const lg = Object.entries, Ed = Object.setPrototypeOf, FS = Object.isFrozen, zS = Object.getPrototypeOf, KS = Object.getOwnPropertyDescriptor;
let nt = Object.freeze, ot = Object.seal, Qn = Object.create, ug = typeof Reflect < "u" && Reflect, uc = ug.apply, dc = ug.construct;
nt || (nt = function(t) {
  return t;
});
ot || (ot = function(t) {
  return t;
});
uc || (uc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
dc || (dc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Jn = Ye(Array.prototype.forEach), jS = Ye(Array.prototype.lastIndexOf), Ad = Ye(Array.prototype.pop), Yn = Ye(Array.prototype.push), BS = Ye(Array.prototype.splice), Wr = Array.isArray, zi = Ye(String.prototype.toLowerCase), Ma = Ye(String.prototype.toString), Pd = Ye(String.prototype.match), $i = Ye(String.prototype.replace), Nd = Ye(String.prototype.indexOf), VS = Ye(String.prototype.trim), WS = Ye(Number.prototype.toString), HS = Ye(Boolean.prototype.toString), Od = typeof BigInt > "u" ? null : Ye(BigInt.prototype.toString), wd = typeof Symbol > "u" ? null : Ye(Symbol.prototype.toString), Qe = Ye(Object.prototype.hasOwnProperty), Ii = Ye(Object.prototype.toString), Xe = Ye(RegExp.prototype.test), hn = GS(TypeError);
function Ye(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return uc(e, t, n);
  };
}
function GS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return dc(e, r);
  };
}
function fe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : zi;
  if (Ed && Ed(e, null), !Wr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (FS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function JS(e) {
  for (let t = 0; t < e.length; t++)
    Qe(e, t) || (e[t] = null);
  return e;
}
function at(e) {
  const t = Qn(null);
  for (const n of lg(e)) {
    var r = DS(n, 2);
    const i = r[0], s = r[1];
    Qe(e, i) && (Wr(s) ? t[i] = JS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = at(s) : t[i] = s);
  }
  return t;
}
function YS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return WS(e);
    case "boolean":
      return HS(e);
    case "bigint":
      return Od ? Od(e) : "0";
    case "symbol":
      return wd ? wd(e) : "Symbol()";
    case "undefined":
      return Ii(e);
    case "function":
    case "object": {
      if (e === null)
        return Ii(e);
      const t = e, r = Kt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Ii(n);
      }
      return Ii(e);
    }
    default:
      return Ii(e);
  }
}
function Kt(e, t) {
  for (; e !== null; ) {
    const n = KS(e, t);
    if (n) {
      if (n.get)
        return Ye(n.get);
      if (typeof n.value == "function")
        return Ye(n.value);
    }
    e = zS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function XS(e) {
  try {
    return Xe(e, ""), !0;
  } catch {
    return !1;
  }
}
const qd = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ea = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Aa = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), QS = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pa = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ZS = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rd = nt(["#text"]), $d = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Na = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Id = nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ws = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ev = ot(/{{[\w\W]*|^[\w\W]*}}/g), tv = ot(/<%[\w\W]*|^[\w\W]*%>/g), rv = ot(/\${[\w\W]*/g), nv = ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), iv = ot(/^aria-[\-\w]+$/), Ld = ot(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), sv = ot(/^(?:\w+script|data):/i), ov = ot(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), av = ot(/^html$/i), cv = ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Dd = ot(/<[/\w!]/g), Ud = ot(/<[/\w]/g), lv = ot(/<\/no(script|embed|frames)/i), uv = ot(/\/>/i), vt = {
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
}, dv = function() {
  return typeof window > "u" ? null : window;
}, fv = function(t, r) {
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
}, Fd = function() {
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
  return Qe(t, r) && Wr(t[r]) ? fe(i.base ? at(i.base) : {}, t[r], i.transform) : n;
};
function dg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dv();
  const t = (F) => dg(F);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== vt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Kt(f, "cloneNode"), m = Kt(f, "remove"), g = Kt(f, "nextSibling"), y = Kt(f, "childNodes"), T = Kt(f, "parentNode"), C = Kt(f, "shadowRoot"), v = Kt(f, "attributes"), P = o && o.prototype ? Kt(o.prototype, "nodeType") : null, M = o && o.prototype ? Kt(o.prototype, "nodeName") : null, B = o && o.prototype ? Kt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let E, R = "", $, re = !1, H = 0;
  const Ae = function() {
    if (H > 0)
      throw hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ee = function(h) {
    Ae(), H++;
    try {
      return E.createHTML(h);
    } finally {
      H--;
    }
  }, Re = function(h) {
    Ae(), H++;
    try {
      return E.createScriptURL(h);
    } finally {
      H--;
    }
  }, be = function() {
    return re || ($ = fv(d, i), re = !0), $;
  }, tr = r, ze = tr.implementation, Ir = tr.createNodeIterator, Lr = tr.createDocumentFragment, on = tr.getElementsByTagName, Y = n.importNode;
  let A = Fd();
  t.isSupported = typeof lg == "function" && typeof T == "function" && ze && ze.createHTMLDocument !== void 0;
  const G = ev, ue = tv, Me = rv, X = nv, Se = iv, yr = sv, Nt = ov, an = cv;
  let We = Ld, le = null;
  const gt = fe({}, [...qd, ...Ea, ...Aa, ...Pa, ...Rd]);
  let xe = null;
  const br = fe({}, [...$d, ...Na, ...Id, ...ws]);
  let Pe = Object.seal(Qn(null, {
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
  })), kr = null, Si = null;
  const mt = Object.seal(Qn(null, {
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
  let Dn = !0, vi = !0, Dr = !1, Un = !0, zt = !1, rr = !0, nr = !1, O = !1, U = null, V = null, Z = !1, pe = !1, rt = !1, Ot = !1, Mi = !0, Ei = !1;
  const iu = "user-content-";
  let Jo = !0, Ss = !1, Fn = {}, ir = null;
  const Yo = fe({}, [
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
  let Xo = null;
  const au = fe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), vs = "http://www.w3.org/1998/Math/MathML", Ms = "http://www.w3.org/2000/svg", sr = "http://www.w3.org/1999/xhtml";
  let zn = sr, Qo = !1, Zo = null;
  const Ym = fe({}, [vs, Ms, sr], Ma), cu = nt(["mi", "mo", "mn", "ms", "mtext"]);
  let ea = fe({}, cu);
  const lu = nt(["annotation-xml"]);
  let ta = fe({}, lu);
  const Xm = fe({}, ["title", "style", "font", "a", "script"]);
  let Ai = null;
  const Qm = ["application/xhtml+xml", "text/html"], Zm = "text/html";
  let $e = null, Kn = null;
  const ey = r.createElement("form"), uu = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, ra = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Kn && Kn === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = at(h), Ai = // eslint-disable-next-line unicorn/prefer-includes
    Qm.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? Zm : h.PARSER_MEDIA_TYPE, $e = Ai === "application/xhtml+xml" ? Ma : zi, le = Kr(h, "ALLOWED_TAGS", gt, {
      transform: $e
    }), xe = Kr(h, "ALLOWED_ATTR", br, {
      transform: $e
    }), Zo = Kr(h, "ALLOWED_NAMESPACES", Ym, {
      transform: Ma
    }), Xo = Kr(h, "ADD_URI_SAFE_ATTR", au, {
      transform: $e,
      base: au
    }), su = Kr(h, "ADD_DATA_URI_TAGS", ou, {
      transform: $e,
      base: ou
    }), ir = Kr(h, "FORBID_CONTENTS", Yo, {
      transform: $e
    }), kr = Kr(h, "FORBID_TAGS", at({}), {
      transform: $e
    }), Si = Kr(h, "FORBID_ATTR", at({}), {
      transform: $e
    }), Fn = Qe(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? at(h.USE_PROFILES) : h.USE_PROFILES : !1, Dn = h.ALLOW_ARIA_ATTR !== !1, vi = h.ALLOW_DATA_ATTR !== !1, Dr = h.ALLOW_UNKNOWN_PROTOCOLS || !1, Un = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, zt = h.SAFE_FOR_TEMPLATES || !1, rr = h.SAFE_FOR_XML !== !1, nr = h.WHOLE_DOCUMENT || !1, pe = h.RETURN_DOM || !1, rt = h.RETURN_DOM_FRAGMENT || !1, Ot = h.RETURN_TRUSTED_TYPE || !1, Z = h.FORCE_BODY || !1, Mi = h.SANITIZE_DOM !== !1, Ei = h.SANITIZE_NAMED_PROPS || !1, Jo = h.KEEP_CONTENT !== !1, Ss = h.IN_PLACE || !1, We = XS(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : Ld, zn = typeof h.NAMESPACE == "string" ? h.NAMESPACE : sr, ea = Qe(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? at(h.MATHML_TEXT_INTEGRATION_POINTS) : fe({}, cu), ta = Qe(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? at(h.HTML_INTEGRATION_POINTS) : fe({}, lu);
    const x = Qe(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? at(h.CUSTOM_ELEMENT_HANDLING) : Qn(null);
    if (Pe = Qn(null), Qe(x, "tagNameCheck") && uu(x.tagNameCheck) && (Pe.tagNameCheck = x.tagNameCheck), Qe(x, "attributeNameCheck") && uu(x.attributeNameCheck) && (Pe.attributeNameCheck = x.attributeNameCheck), Qe(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (Pe.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), ot(Pe), zt && (vi = !1), rt && (pe = !0), Fn && (le = fe({}, Rd), xe = Qn(null), Fn.html === !0 && (fe(le, qd), fe(xe, $d)), Fn.svg === !0 && (fe(le, Ea), fe(xe, Na), fe(xe, ws)), Fn.svgFilters === !0 && (fe(le, Aa), fe(xe, Na), fe(xe, ws)), Fn.mathMl === !0 && (fe(le, Pa), fe(xe, Id), fe(xe, ws))), mt.tagCheck = null, mt.attributeCheck = null, Qe(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? mt.tagCheck = h.ADD_TAGS : Wr(h.ADD_TAGS) && (le === gt && (le = at(le)), fe(le, h.ADD_TAGS, $e))), Qe(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? mt.attributeCheck = h.ADD_ATTR : Wr(h.ADD_ATTR) && (xe === br && (xe = at(xe)), fe(xe, h.ADD_ATTR, $e))), Qe(h, "ADD_URI_SAFE_ATTR") && Wr(h.ADD_URI_SAFE_ATTR) && fe(Xo, h.ADD_URI_SAFE_ATTR, $e), Qe(h, "FORBID_CONTENTS") && Wr(h.FORBID_CONTENTS) && (ir === Yo && (ir = at(ir)), fe(ir, h.FORBID_CONTENTS, $e)), Qe(h, "ADD_FORBID_CONTENTS") && Wr(h.ADD_FORBID_CONTENTS) && (ir === Yo && (ir = at(ir)), fe(ir, h.ADD_FORBID_CONTENTS, $e)), Jo && (le["#text"] = !0), nr && fe(le, ["html", "head", "body"]), le.table && (fe(le, ["tbody"]), delete kr.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = E;
      E = h.TRUSTED_TYPES_POLICY;
      try {
        R = ee("");
      } catch (W) {
        throw E = I, W;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (E = void 0, R = "") : (E === void 0 && (E = be()), E && typeof R == "string" && (R = ee("")));
    nt && nt(h), Kn = h;
  }, du = fe({}, [...Ea, ...Aa, ...QS]), fu = fe({}, [...Pa, ...ZS]), ty = function(h, x, I) {
    return x.namespaceURI === sr ? h === "svg" : x.namespaceURI === vs ? h === "svg" && (I === "annotation-xml" || ea[I]) : !!du[h];
  }, ry = function(h, x, I) {
    return x.namespaceURI === sr ? h === "math" : x.namespaceURI === Ms ? h === "math" && ta[I] : !!fu[h];
  }, ny = function(h, x, I) {
    return x.namespaceURI === Ms && !ta[I] || x.namespaceURI === vs && !ea[I] ? !1 : !fu[h] && (Xm[h] || !du[h]);
  }, iy = function(h) {
    let x = T(h);
    (!x || !x.tagName) && (x = {
      namespaceURI: zn,
      tagName: "template"
    });
    const I = zi(h.tagName), W = zi(x.tagName);
    return Zo[h.namespaceURI] ? h.namespaceURI === Ms ? ty(I, x, W) : h.namespaceURI === vs ? ry(I, x, W) : h.namespaceURI === sr ? ny(I, x, W) : !!(Ai === "application/xhtml+xml" && Zo[h.namespaceURI]) : !1;
  }, Ur = function(h) {
    Yn(t.removed, {
      element: h
    });
    try {
      T(h).removeChild(h);
    } catch {
      if (m(h), !T(h))
        throw hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Es = function(h) {
    Pi(h);
    const x = y(h);
    if (x) {
      const W = [];
      Jn(x, (J) => {
        Yn(W, J);
      }), Jn(W, (J) => {
        try {
          m(J);
        } catch {
        }
      });
    }
    const I = v(h);
    if (I)
      for (let W = I.length - 1; W >= 0; --W) {
        const J = I[W], ie = J && J.name;
        if (typeof ie == "string")
          try {
            h.removeAttribute(ie);
          } catch {
          }
      }
  }, cn = function(h, x) {
    try {
      Yn(t.removed, {
        attribute: x.getAttributeNode(h),
        from: x
      });
    } catch {
      Yn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(h), h === "is")
      if (pe || rt)
        try {
          Ur(x);
        } catch {
        }
      else
        try {
          x.setAttribute(h, "");
        } catch {
        }
  }, sy = function(h) {
    const x = v(h);
    if (x)
      for (let I = x.length - 1; I >= 0; --I) {
        const W = x[I], J = W && W.name;
        if (!(typeof J != "string" || xe[$e(J)]))
          try {
            h.removeAttribute(J);
          } catch {
          }
      }
  }, Pi = function(h) {
    const x = [h];
    for (; x.length > 0; ) {
      const I = x.pop();
      (P ? P(I) : I.nodeType) === vt.element && sy(I);
      const J = y(I);
      if (J)
        for (let ie = J.length - 1; ie >= 0; --ie)
          x.push(J[ie]);
    }
  }, oy = function(h) {
    if (!rr)
      return;
    const x = [h];
    for (; x.length > 0; ) {
      const I = x.pop(), W = P ? P(I) : I.nodeType;
      if (W === vt.processingInstruction || W === vt.comment && Xe(Ud, I.data)) {
        try {
          m(I);
        } catch {
        }
        continue;
      }
      if (W === vt.element) {
        const ie = I, ke = $e(M ? M(I) : I.nodeName);
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && ke !== "label" && ke !== "output" && ie.removeAttribute("for");
        } catch {
        }
      }
      const J = y(I);
      if (J)
        for (let ie = J.length - 1; ie >= 0; --ie)
          x.push(J[ie]);
    }
  }, pu = function(h) {
    let x = null, I = null;
    if (Z)
      h = "<remove></remove>" + h;
    else {
      const ie = Pd(h, /^[\r\n\t ]+/);
      I = ie && ie[0];
    }
    Ai === "application/xhtml+xml" && zn === sr && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const W = E ? ee(h) : h;
    if (zn === sr)
      try {
        x = new u().parseFromString(W, Ai);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = ze.createDocument(zn, "template", null);
      try {
        x.documentElement.innerHTML = Qo ? R : W;
      } catch {
      }
    }
    const J = x.body || x.documentElement;
    return h && I && J.insertBefore(r.createTextNode(I), J.childNodes[0] || null), zn === sr ? on.call(x, nr ? "html" : "body")[0] : nr ? x.documentElement : J;
  }, hu = function(h) {
    const x = B ? B(h) : h.ownerDocument;
    return Ir.call(
      x || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, As = function(h) {
    return h = $i(h, G, " "), h = $i(h, ue, " "), h = $i(h, Me, " "), h;
  }, na = function(h) {
    var x;
    h.normalize();
    const I = B ? B(h) : h.ownerDocument, W = Ir.call(
      I || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = W.nextNode();
    for (; J; )
      J.data = As(J.data), J = W.nextNode();
    const ie = (x = h.querySelectorAll) === null || x === void 0 ? void 0 : x.call(h, "template");
    ie && Jn(ie, (ke) => {
      jn(ke.content) && na(ke.content);
    });
  }, Ps = function(h) {
    const x = M ? M(h) : null;
    return typeof x != "string" || $e(x) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    h.attributes !== v(h) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    h.nodeType !== P(h) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, jn = function(h) {
    if (!P || typeof h != "object" || h === null)
      return !1;
    try {
      return P(h) === vt.documentFragment;
    } catch {
      return !1;
    }
  }, Ni = function(h) {
    if (!P || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof P(h) == "number";
    } catch {
      return !1;
    }
  };
  function or(F, h, x) {
    F.length !== 0 && Jn(F, (I) => {
      I.call(t, h, x, Kn);
    });
  }
  const ay = function(h, x) {
    return !!(rr && h.hasChildNodes() && !Ni(h.firstElementChild) && Xe(Dd, h.textContent) && Xe(Dd, h.innerHTML) || rr && h.namespaceURI === sr && x === "style" && Ni(h.firstElementChild) || h.nodeType === vt.processingInstruction || rr && h.nodeType === vt.comment && Xe(Ud, h.data));
  }, cy = function(h, x, I) {
    if (!kr[x] && bu(x) && (Pe.tagNameCheck instanceof RegExp && Xe(Pe.tagNameCheck, x) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(x)))
      return !1;
    if (Jo && !ir[x]) {
      const W = T(h), J = y(h);
      if (J && W) {
        const ie = J.length;
        for (let ke = ie - 1; ke >= 0; --ke) {
          const Ie = h === I ? p(J[ke], !0) : J[ke];
          W.insertBefore(Ie, g(h));
        }
      }
    }
    return Ur(h), !0;
  }, gu = function(h, x, I, W) {
    return h.length === 0 ? x : x === I || x === W ? at(x) : x;
  }, mu = function(h, x) {
    if (or(A.beforeSanitizeElements, h, null), h !== x && T(h) === null)
      return Ss && Pi(h), !0;
    if (Ps(h))
      return Ur(h), !0;
    const I = $e(M ? M(h) : h.nodeName);
    if (le = gu(A.uponSanitizeElement, le, gt, U), or(A.uponSanitizeElement, h, {
      tagName: I,
      allowedTags: le
    }), h !== x && T(h) === null)
      return Ss && Pi(h), !0;
    if (ay(h, I))
      return Ur(h), !0;
    if (kr[I] || !(mt.tagCheck instanceof Function && mt.tagCheck(I)) && !le[I]) {
      const J = cy(h, I, x);
      return J === !1 && or(A.afterSanitizeElements, h, null), J;
    }
    if ((P ? P(h) : h.nodeType) === vt.element && !iy(h) || (I === "noscript" || I === "noembed" || I === "noframes") && Xe(lv, h.innerHTML))
      return Ur(h), !0;
    if (zt && h.nodeType === vt.text) {
      const J = As(h.textContent);
      h.textContent !== J && (Yn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = J);
    }
    return or(A.afterSanitizeElements, h, null), !1;
  }, yu = function(h, x, I) {
    if (Si[x] || rr && x === "patchsrc" || rr && x === "for" && h !== "label" && h !== "output" || Mi && (x === "id" || x === "name") && (I in r || I in ey))
      return !1;
    const W = xe[x] || mt.attributeCheck instanceof Function && mt.attributeCheck(x, h);
    if (!(vi && Xe(X, x))) {
      if (!(Dn && Xe(Se, x))) {
        if (W) {
          if (!Xo[x]) {
            if (!Xe(We, $i(I, Nt, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && h !== "script" && Nd(I, "data:") === 0 && su[h])) {
                if (!(Dr && !Xe(yr, $i(I, Nt, "")))) {
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
          !(bu(h) && (Pe.tagNameCheck instanceof RegExp && Xe(Pe.tagNameCheck, h) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(h)) && (Pe.attributeNameCheck instanceof RegExp && Xe(Pe.attributeNameCheck, x) || Pe.attributeNameCheck instanceof Function && Pe.attributeNameCheck(x, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && Pe.allowCustomizedBuiltInElements && (Pe.tagNameCheck instanceof RegExp && Xe(Pe.tagNameCheck, I) || Pe.tagNameCheck instanceof Function && Pe.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, ly = fe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), bu = function(h) {
    return !ly[zi(h)] && Xe(an, h);
  }, uy = function(h, x, I, W) {
    if (E && typeof d == "object" && typeof d.getAttributeType == "function" && !I)
      switch (d.getAttributeType(h, x)) {
        case "TrustedHTML":
          return ee(W);
        case "TrustedScriptURL":
          return Re(W);
      }
    return W;
  }, dy = function(h, x, I, W) {
    try {
      I ? h.setAttributeNS(I, x, W) : h.setAttribute(x, W), Ps(h) ? Ur(h) : Ad(t.removed);
    } catch {
      cn(x, h);
    }
  }, ku = function(h) {
    or(A.beforeSanitizeAttributes, h, null);
    const x = h.attributes;
    if (!x || Ps(h))
      return;
    xe = gu(A.uponSanitizeAttribute, xe, br, V);
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: xe,
      forceKeepAttr: void 0
    };
    let W = x.length;
    const J = $e(h.nodeName);
    for (; W--; ) {
      const ie = x[W], ke = ie.name, Ie = ie.namespaceURI, yt = ie.value, bt = $e(ke), sa = yt;
      let ut = ke === "value" ? sa : VS(sa);
      if (I.attrName = bt, I.attrValue = ut, I.keepAttr = !0, I.forceKeepAttr = void 0, or(A.uponSanitizeAttribute, h, I), ut = I.attrValue, Ei && (bt === "id" || bt === "name") && Nd(ut, iu) !== 0 && (cn(ke, h), ut = iu + ut), rr && Xe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ut)) {
        cn(ke, h);
        continue;
      }
      if (bt === "attributename" && Pd(ut, "href")) {
        cn(ke, h);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          cn(ke, h);
          continue;
        }
        if (!Un && Xe(uv, ut)) {
          cn(ke, h);
          continue;
        }
        if (zt && (ut = As(ut)), !yu(J, bt, ut)) {
          cn(ke, h);
          continue;
        }
        ut = uy(J, bt, Ie, ut), ut !== sa && dy(h, ke, Ie, ut);
      }
    }
    or(A.afterSanitizeAttributes, h, null);
  }, Ns = function(h) {
    let x = null;
    const I = hu(h);
    for (or(A.beforeSanitizeShadowDOM, h, null); x = I.nextNode(); )
      if (or(A.uponSanitizeShadowNode, x, null), mu(x, h), ku(x), jn(x.content) && Ns(x.content), (P ? P(x) : x.nodeType) === vt.element) {
        const J = C(x);
        jn(J) && (ia(J), Ns(J));
      }
    or(A.afterSanitizeShadowDOM, h, null);
  }, ia = function(h) {
    const x = [{
      node: h,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const I = x.pop();
      if (I.shadow) {
        Ns(I.shadow);
        continue;
      }
      const W = I.node, ie = (P ? P(W) : W.nodeType) === vt.element, ke = y(W);
      if (ke)
        for (let Ie = ke.length - 1; Ie >= 0; --Ie)
          x.push({
            node: ke[Ie],
            shadow: null
          });
      if (ie) {
        const Ie = M ? M(W) : null;
        if (typeof Ie == "string" && $e(Ie) === "template") {
          const yt = W.content;
          jn(yt) && x.push({
            node: yt,
            shadow: null
          });
        }
      }
      if (ie) {
        const Ie = C(W);
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
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, I = null, W = null, J = null;
    if (Qo = !F, Qo && (F = "<!-->"), typeof F != "string" && !Ni(F) && (F = YS(F), typeof F != "string"))
      throw hn("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    O ? (le = U, xe = V) : ra(h), (A.uponSanitizeElement.length > 0 || A.uponSanitizeAttribute.length > 0) && (le = at(le)), A.uponSanitizeAttribute.length > 0 && (xe = at(xe)), t.removed = [];
    const ie = Ss && typeof F != "string" && Ni(F);
    if (ie) {
      oy(F);
      const yt = M ? M(F) : F.nodeName;
      if (typeof yt == "string") {
        const bt = $e(yt);
        if (!le[bt] || kr[bt])
          throw Es(F), hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ps(F))
        throw Es(F), hn("root node is clobbered and cannot be sanitized in-place");
      try {
        ia(F);
      } catch (bt) {
        throw Es(F), bt;
      }
    } else if (Ni(F))
      x = pu("<!---->"), I = x.ownerDocument.importNode(F, !0), I.nodeType === vt.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? x = I : x.appendChild(I), ia(I);
    else {
      if (!pe && !zt && !nr && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return E && Ot ? ee(F) : F;
      if (x = pu(F), !x)
        return pe ? null : Ot ? R : "";
    }
    x && Z && Ur(x.firstChild);
    const ke = ie ? F : x;
    try {
      const yt = hu(ke);
      for (; W = yt.nextNode(); )
        mu(W, ke), ku(W), jn(W.content) && Ns(W.content);
    } catch (yt) {
      throw ie && (Es(F), Jn(t.removed, (bt) => {
        bt.element && Pi(bt.element);
      })), yt;
    }
    if (ie)
      return Jn(t.removed, (yt) => {
        yt.element && Pi(yt.element);
      }), zt && na(F), F;
    if (pe) {
      if (zt && na(x), rt)
        for (J = Lr.call(x.ownerDocument); x.firstChild; )
          J.appendChild(x.firstChild);
      else
        J = x;
      return (xe.shadowroot || xe.shadowrootmode) && (J = Y.call(n, J, !0)), J;
    }
    let Ie = nr ? x.outerHTML : x.innerHTML;
    return nr && le["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Xe(av, x.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Ie), zt && (Ie = As(Ie)), E && Ot ? ee(Ie) : Ie;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ra(F), O = !0, U = le, V = xe;
  }, t.clearConfig = function() {
    Kn = null, O = !1, U = null, V = null, E = $, R = "";
  }, t.isValidAttribute = function(F, h, x) {
    Kn || ra({});
    const I = $e(F), W = $e(h);
    return yu(I, W, x);
  }, t.addHook = function(F, h) {
    typeof h == "function" && Qe(A, F) && Yn(A[F], h);
  }, t.removeHook = function(F, h) {
    if (Qe(A, F)) {
      if (h !== void 0) {
        const x = jS(A[F], h);
        return x === -1 ? void 0 : BS(A[F], x, 1)[0];
      }
      return Ad(A[F]);
    }
  }, t.removeHooks = function(F) {
    Qe(A, F) && (A[F] = []);
  }, t.removeAllHooks = function() {
    A = Fd();
  }, t;
}
var pv = dg();
function hv({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = Q(void 0), [n, i] = de(void 0), s = he((o) => {
    r.current = o, i(o);
  }, []);
  return K(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = rg(p);
      if (!m)
        return !1;
      const g = q();
      return e === "protected" ? g && og(g, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const g = q(), y = r.current;
      if (y && g && vd(g, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const C = se(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (C) {
            const v = C.getParent(), P = C.getPreviousSibling(), M = C.getNextSibling();
            C.remove(), P ? ag(P) : M && S(M) ? M.select(0, 0) : v?.selectStart();
          }
        } else y.kind === "selection" ? N(g) && g.removeText() : Ce(C) && qS(C);
        return !0;
      }
      if (!g)
        return !1;
      const T = wS(g, p);
      if (T) {
        if (T.kind === "verse") {
          const C = Rf();
          C.add(T.node.getKey()), ii(C);
        } else {
          const C = Rc();
          C.anchor.set(T.node.getKey(), 0, "element"), C.focus.set(T.node.getKey(), T.node.getChildrenSize(), "element"), ii(C);
        }
        return s({ key: T.node.getKey(), kind: T.kind, intent: p }), m.preventDefault(), !0;
      }
      if (N(g) && !g.isCollapsed() && ql(g)) {
        const C = g.getNodes().filter(ge).map((M) => M.getKey()), { anchor: v, focus: P } = g;
        return s({
          kind: "selection",
          intent: p,
          key: C[0],
          anchor: { key: v.key, offset: v.offset, type: v.type },
          focus: { key: P.key, offset: P.offset, type: P.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = q();
      return !m || !ni(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const g = pv.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), T = RS(ab(t, y)), C = q();
      return N(C) && C.insertNodes(T), m.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = q();
      return m && ni(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = q();
      return m && ni(m) ? (p.preventDefault(), !0) : l(p.dataTransfer?.getData("text/html"), p);
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        vd(q(), p) || s(void 0);
      });
    };
    return Be(
      t.registerCommand(Nr, o, Oe),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(_n, c, Wt),
      t.registerCommand(xr, u, Oe),
      t.registerCommand(Fy, c, Oe),
      t.registerCommand(Lc, d, Oe),
      t.registerCommand(Ic, c, Oe),
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
const GP = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function gv({ textDirection: e }) {
  const [t] = ae();
  return mv(t, e), null;
}
function mv(e, t) {
  K(() => (zd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && zd(e, t);
  })), [e, t]);
}
function zd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function yv() {
  const [e] = ae();
  return bv(e), null;
}
function bv(e) {
  K(() => {
    if (!e.hasNodes([ye, St, ve, je, dt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Be(
      e.registerNodeTransform(je, kv),
      e.registerNodeTransform(je, (t) => Tv(t, e)),
      e.registerNodeTransform(dt, Kd),
      e.registerNodeTransform(St, Kd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(dt, (t) => {
        ss(Mn("va"), t), ss(Mn("vp"), t);
      })
    );
  }, [e]);
}
function kv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || j(r) || D(n) || D(r) || _e(n) || _e(r) || De(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  ge(r) && ul(e);
}
function Tv(e, t) {
  const r = e.getParent();
  !De(r) || !e.isAttached() || tc(t, e.getKey()) && !tc(t, r.getKey()) && r.insertAfter(e);
}
function Kd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; _e(t); )
    t = t.getLastChild();
  (D(t) || S(t) && _e(t.getParent())) && e.insertBefore(me(" "));
}
function Rl(e) {
  if (!j(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !ks(n)) ? void 0 : e;
}
function xv(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (z(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function _v() {
  const e = q();
  if (!(!N(e) || !e.isCollapsed()))
    return Rl(xv(e.anchor));
}
function Cv(e) {
  const t = q();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = fg(e.target)), r ? Rl(st(r, j)) : void 0;
}
function fg(e) {
  const t = zy(e)?.anchorNode;
  if (qf(t))
    return pi(t) ?? void 0;
}
function Sv(e) {
  if (q())
    return;
  const t = fg(e);
  return t ? Rl(st(t, j)) : void 0;
}
function vv() {
  const [e] = ae(), t = wl(_v);
  return K(() => {
    const r = (n) => {
      Bt(_r), t(n);
    };
    return Be(e.registerCommand(dr, () => {
      const n = Sv(e.getRootElement());
      return n && r(n), !1;
    }, xn), e.registerCommand(xo, (n) => {
      const i = Cv(n);
      return i && r(i), !1;
    }, xn));
  }, [e, t]), null;
}
function Mv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = z_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return _(F_, { trigger: e, items: i });
}
function Ev({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Ke(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? _(Nv, { trigger: e, harness: i }) : _(Mv, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const Av = [" ", "*"];
function Pv(e, t) {
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
function Nv({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = de(void 0), s = Q({ query: "", options: [] }), o = Q(0), a = he((f, p, m) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = q();
      N(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  K(() => Be(r.registerCommand(Nr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), Ky(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = q();
          N(y) && y.insertText(e);
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
  }, Oe), r.registerCommand($f, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, ei)), [r, e, t, n, a]);
  const c = he(() => i(void 0), []), l = he((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = he((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), d = Ke(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    Pv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && _(qh, { isOpen: !0, children: ({ placement: f }) => _(
    Ih,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? Av : void 0 },
    n.session
  ) });
}
function pg(e) {
  return e.replaceAll(L, "~").replace(/ {2,}/g, (r) => L.repeat(r.length));
}
function Ov(e) {
  return e.replaceAll(L, " ").replaceAll("~", L);
}
function wv(e) {
  return e.replace(/ {2,}/g, " ");
}
let lo;
function qv(e) {
  e && (lo = e);
}
function hg(e) {
  return zo(e);
}
function Rv(e, t) {
  return e.isEmpty() ? Of : gg(e.toJSON(), t);
}
function gg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Eo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Of;
  if (r.some(sx)) {
    lo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = mg(r), i = jt(n, t);
  return i ? { type: Sr, version: Cr, content: i } : void 0;
}
function $v(e, t) {
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
function Iv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ee({
    type: Pt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Lv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = qp(r, a, c), Ee({
    type: Pt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function Dv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = qp(t, o, a), Ee({
    type: dt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function Uv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !hg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(L) && (t[0] = a.slice(1));
  }
  return Ee({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function Fv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ee({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function zv(e, t) {
  const { unknownAttributes: r } = e;
  return Ee({ type: ah, ...r, content: t });
}
function Kv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ee({ type: uh, marker: r, ...n, content: t });
}
function jv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ee({
    type: fh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function Bv(e, t) {
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
function Zn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ee({
    type: t,
    marker: r === "" ? void 0 : r,
    ...zp({ sid: n, eid: i, ...s }, o)
  });
}
function Vv(e) {
  return e.text;
}
function Wv(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ee({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Hv(e) {
  const { marker: t } = e;
  return {
    type: Xs,
    marker: t === "" ? void 0 : t
  };
}
function jd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function Gv(e, t, r, n, i) {
  const s = Jt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = Zn({
      type: s,
      marker: ti,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = Zn({
      type: s,
      marker: Cn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = Zn({
      type: s,
      marker: Cn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Zn({
      type: s,
      marker: ti
    });
    i.push(l);
  }
  (!n || !lp(n)) && t.forEach((l) => {
    const u = Zn({
      type: s,
      marker: ti,
      eid: l
    });
    i.push(u);
  });
}
function jt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, m = a, g = a, y = a;
    switch (a.type) {
      case Ut.getType():
        i.push(
          $v(
            l,
            jt(l.children, t)
          )
        );
        break;
      case hr.getType():
        i.push(Iv(a));
        break;
      case Pt.getType():
        i.push(
          Lv(
            u,
            jt(u.children, t)
          )
        );
        break;
      case St.getType():
      case dt.getType():
        i.push(Dv(a));
        break;
      case ye.getType():
        i.push(
          Uv(
            d,
            jt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case tt.getType():
        i.push(
          Fv(
            f,
            jt(f.children, t)
          )
        );
        break;
      case $n.getType():
        i.push(
          zv(
            a,
            jt(a.children, t)
          )
        );
        break;
      case mi.getType():
        i.push(
          Kv(
            a,
            jt(a.children, t)
          )
        );
        break;
      case yi.getType():
        i.push(
          jv(
            a,
            jt(a.children, t)
          )
        );
        break;
      case ve.getType():
        i.push(
          Bv(
            p,
            jt(p.children, t, p.caller)
          )
        );
        break;
      case qr.getType():
      case wr.getType():
      case Gt.getType():
      case If.getType():
      case mr.getType():
        break;
      case Ze.getType():
        if (s = jt(
          g.children,
          t,
          r,
          n
        ), s) {
          const T = g.typedIDs[Hr];
          if (T)
            Gv(s, T, o, e[c + 1], i), o = T;
          else {
            const C = s.shift();
            C && (typeof C == "string" ? jd(i, C) : i.push(C)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Jt.getType():
        i.push(Zn(a));
        break;
      case je.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !bs(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== L && !m.text.startsWith(Fc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[ms]?.textType !== "attribute" && (!r || m.text !== Et(r))) {
          let T = Vv(m);
          hg(t) && (n && T.startsWith(L) && (T = T.slice(1)), T = wv(Ov(T))), jd(i, T);
        }
        break;
      case qn.getType():
        i.push(
          Wv(
            y,
            jt(y.children, t)
          )
        );
        break;
      case $r.getType():
        i.push(Hv(a));
        break;
      case bi.getType():
        lo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        lo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function mg(e) {
  const t = e.findIndex((r) => Eo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = mg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Us = {
  initialize: qv,
  deserializeEditorState: Rv
}, Jv = /^sd\d*$/, Yv = /* @__PURE__ */ new Set([
  ...Object.entries(Ka).filter(
    ([e, t]) => t.category === k.TitlesHeadings && t.type === b.Paragraph && !Jv.test(e)
  ).map(([e]) => e),
  "qa"
]);
function Xv(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (mp(i) || Np(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Ok(i)) {
      t && uo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Jc(i) && Yv.has(i.marker) && !uo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    yg(i.children, t).forEach((s) => {
      const o = Qv(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = Zv(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function yg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (bg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (lp(i)) {
      const s = yg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Bd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Bd(i, c.nodes)] });
      });
      return;
    }
    t && uo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Bd(e, t) {
  return { ...e, children: t };
}
function bg(e) {
  return xh(e) && e.number !== "";
}
function uo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => bg(r) || uo(r)) : !1;
}
function Qv(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function Zv(e) {
  return {
    type: Qs,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: bh
  };
}
const Vd = Tg([]), eM = {
  type: If.getType(),
  version: 1
};
let $l = [], te, Pn, kg, Ct;
function tM(e, t) {
  $l = [], iM(e), sM(t);
}
function rM(e = 0) {
}
function nM(e, t) {
  te = t ?? Fo();
  let r;
  return e ? (e.type !== Sr && Ct?.warn(`This USJ type '${e.type}' didn't match the expected type '${Sr}'.`), e.version !== Cr && Ct?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${Cr}'.`
  ), e.content.length > 0 ? (r = gc(jr(e.content)), cs(te) && (r = Xv(r, Ct))) : r = [Vd]) : r = [Vd], kg?.($l), {
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
function iM(e) {
  e && (Pn = e), e?.addMissingComments && (kg = e.addMissingComments);
}
function sM(e) {
  e && (Ct = e);
}
function Il() {
  return zo(te);
}
function oM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function aM(e) {
  let { marker: t } = e;
  t !== es && Ct?.warn(`Unexpected book marker '${t}'!`), t = t ?? es;
  const { code: r } = e;
  (!r || !Ut.isValidBookCode(r)) && Ct?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  te?.markerMode === "editable" || te?.markerMode === "visible" ? n.push(
    Tt("marker", qe(t) + " " + r + L)
  ) : te?.hasGutterParaMarkers && n.push(Tt("marker", qe(t) + L, !0));
  const i = oM(e.content);
  i && n.push(lt(Il() ? pg(i) : i));
  const s = Ue(e, lk);
  return Ee({
    type: Ut.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: hp
  });
}
function cM(e) {
  let { marker: t } = e;
  t !== Gs && Ct?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Gs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ue(e, uk);
  let a;
  te?.markerMode === "visible" && (a = !0);
  const c = [
    lt(Lt(t, r) ?? "")
  ];
  return te?.markerMode === "editable" && vM(i, s, c), te?.markerMode === "editable" ? Ee({
    type: Pt.getType(),
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
    version: yp
  }) : Ee({
    type: hr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: _p
  });
}
function lM(e) {
  let { marker: t } = e;
  t !== Js && Ct?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Js;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (Y_(te) ?? St).getType(), c = te?.markerMode === "editable" ? Ep : Th;
  let l, u;
  te?.markerMode === "editable" ? l = Lt(t, r) : te?.markerMode === "visible" && (u = !0);
  const d = Ue(e, Ck);
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
function uM(e, t = [], r = !1) {
  let { marker: n } = e;
  ye.isValidMarker(n, Pn?.extraValidMarkers) || Ct?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (te?.markerMode === "editable") {
    const [a] = t;
    oi(a) ? a.text = L + a.text : a && t.unshift(lt(L));
  }
  t.length === 0 && t.push(lt(Dt)), fc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ue(e, pk);
  return s || xM(n, o, i), s || pc(e.marker ?? "", i, !1, r), Ee({
    type: ye.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: xp
  });
}
function Tg(e) {
  return {
    type: Jr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: vp
  };
}
function dM(e, t = []) {
  let { marker: r } = e;
  tt.isValidMarker(r, Pn?.extraValidMarkers) || Ct?.warn(`Unexpected para marker '${r}'!`), r = r ?? lr;
  const n = [];
  if (ki(te) && (te?.markerMode === "editable" ? n.push(
    ft(r),
    lt(L, pr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && n.push(
    Tt(
      "marker",
      qe(r) + L,
      te?.hasGutterParaMarkers
    )
  )), n.push(...t), Il()) {
    const s = n.find(
      (o) => !Qc(o) && !(oi(o) && o.text === L)
    );
    oi(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => L.repeat(o.length)));
  }
  const i = Ue(e, xk);
  return Ee({
    type: tt.getType(),
    marker: r,
    unknownAttributes: i,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Mp
  });
}
function Ll() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function fM(e, t = []) {
  const r = Ue(e, ET);
  return Ee({
    ...Ll(),
    type: $n.getType(),
    unknownAttributes: r,
    children: t,
    version: ch
  });
}
function pM(e, t = []) {
  const r = Ue(e, NT), n = e.marker ?? Xa, i = [];
  return te?.markerMode === "editable" ? i.push(
    ft(n),
    lt(L, pr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && i.push(
    Tt(
      "marker",
      qe(n) + L,
      te?.hasGutterParaMarkers
    )
  ), i.push(...t), Ee({
    ...Ll(),
    type: mi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: dh
  });
}
function hM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Qa, a = eh(o, i) ?? o;
  te?.markerMode === "editable" ? s.push(
    ft(a),
    lt(L, pr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && s.push(
    Tt(
      "marker",
      qe(a) + L,
      te?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Ue(
    e,
    wT
  );
  return Ee({
    ...Ll(),
    type: yi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: ph
  });
}
function gM(e, t) {
  const r = Lk(t);
  let n = () => {
  };
  return Pn?.noteCallerOnClick && (n = Pn.noteCallerOnClick), Ee({
    type: Gt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Ah
  });
}
function mM(e, t) {
  let { marker: r } = e;
  ve.isValidMarker(r, Pn?.extraValidMarkers) || Ct?.warn(`Unexpected note marker '${r}'!`), r = r ?? jc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : yl(te?.noteMode), a = Ue(e, Mb), c = te?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  te?.markerMode === "editable" ? (l = ft(r, "opening", !1, c), s || (u = ft(r, "closing"))) : te?.markerMode === "visible" && (l = Tt("marker", qe(r) + " "), s || (u = Tt("marker", et(r))));
  const d = [];
  let f;
  if (l && d.push(l), te?.markerMode === "editable" && !o)
    f = lt(Et(i), void 0, c), d.push(f), SM(n, d), d.push(...t);
  else {
    const p = lt(L, pr, "token");
    f = gM(i, t), d.push(f, p, ...t.flatMap(yM(p)));
  }
  return u && d.push(u), Ee({
    type: ve.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: tp
  });
}
function yM(e) {
  return (t) => ap(t) ? [t] : [t, e];
}
function bM(e) {
  let { marker: t } = e;
  (!t || !Jt.isValidMarker(t, Pn?.extraValidMarkers)) && Ct?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ue(e, Kc), s = Kp(e);
  return Ee({
    type: Jt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Qf
  });
}
function Wd(e, t = []) {
  return {
    type: Ze.getType(),
    typedIDs: { [Hr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function kM(e, t) {
  const { marker: r } = e, n = e.type, i = Ue(e, ik), s = [];
  if (te?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = th(
      n,
      r,
      i
    );
    o && s.push(Tt("marker", o)), a && s.push(Tt("attribute", a)), s.push(...t), c && s.push(Tt("attribute", c)), l && s.push(Tt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    oi(o) && (o.mode = "token");
  }), Ee({
    type: qn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: dp
  });
}
function TM(e) {
  return {
    type: $r.getType(),
    marker: e,
    text: Vi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: te?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: sh
  };
}
function ft(e, t = "opening", r = !1, n = "normal") {
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
function lt(e, t = void 0, r = "normal") {
  const n = {
    type: je.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[ms] = { textType: t }), n;
}
function Tt(e, t, r = !1) {
  const n = {
    type: wr.getType(),
    text: t,
    textType: e,
    version: op
  };
  return r && (n[ms] = { [Wc.key]: !0 }), n;
}
function ls(e, t) {
  return {
    type: qr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: fp
  };
}
function fc(e, t, r = !1) {
  te?.markerMode === "editable" ? t.push(ft(e, "opening", r)) : te?.markerMode === "visible" && t.push(Tt("marker", qe(e, r)));
}
function pc(e, t, r = !1, n = !1) {
  te?.markerMode === "editable" ? r ? t.push(ft("", "selfClosing")) : t.push(ft(e, "closing", n)) : te?.markerMode === "visible" && t.push(
    Tt(
      "marker",
      r ? et("") : et(e, n)
    )
  );
}
function xM(e, t, r) {
  if (te?.markerMode !== "editable" || !t) return;
  const n = cr(t, vo(e));
  n && r.push(lt(n, "attribute"));
}
function Hd(e, t) {
  if (e.type !== "ms" || te?.markerMode !== "editable" && te?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ue(e, Kc), o = jp(
    n,
    i,
    s,
    Kp(e)
  ), a = cr(o, Mo(r ?? ""));
  if (!a) return;
  const c = L + a;
  te?.markerMode === "editable" ? t.push(lt(c, "attribute")) : t.push(Tt("attribute", c));
}
function _M(e, t) {
  const r = e.marker ?? "";
  if (te?.markerMode === "editable") {
    const n = [];
    fc(r, n), Hd(e, n), pc(r, n, !0), t.push(ls("milestone", n));
  } else
    fc(r, t), Hd(e, t), pc(r, t, !0);
}
function Gd(e, t, r) {
  t !== void 0 && r.push(
    ls(e, [
      ft(e, "opening"),
      lt(L + t, "attribute"),
      ft(e, "closing")
    ])
  );
}
function CM(e, t) {
  te?.markerMode === "editable" && (Gd("va", e.altnumber, t), Gd("vp", e.pubnumber, t));
}
function SM(e, t) {
  e !== void 0 && t.push(
    ls("cat", [
      ft("cat", "opening"),
      lt(L + e, "attribute"),
      ft("cat", "closing")
    ])
  );
}
function vM(e, t, r) {
  e !== void 0 && r.push(
    ls("ca", [
      ft("ca", "opening"),
      lt(L + e, "attribute"),
      ft("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    ls("cp", [
      ft("cp", "opening"),
      lt(L + t, "attribute")
    ])
  );
}
function Jd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function MM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Yd(e, t) {
  t.marker === Cn && t.sid !== void 0 && e.push(t.sid), t.marker === ti && t.eid !== void 0 && MM(e, t.eid);
}
function hc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Wd(o, [...n])] : o, c = e[i];
  Yd(n, c);
  const l = hc(
    e.slice(i + 1, s),
    Jd(t, i + 1),
    c.marker === Cn,
    n
  ), u = Wd(l, [...n]), d = e[s];
  Yd(n, d);
  const f = hc(
    e.slice(s + 1),
    Jd(t, s + 1),
    d.marker === Cn,
    n
  );
  return [...a, u, ...f];
}
function jr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(lt(Il() ? pg(i) : i));
    else if (!i.type)
      Ct?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ut.getType():
          n.push(aM(i));
          break;
        case Pt.getType():
          n.push(cM(i));
          break;
        case dt.getType():
          te?.hasSpacing || n.push(eM), n.push(lM(i)), CM(i, n);
          break;
        case ye.getType():
          n.push(
            uM(i, jr(i.content, !0), t)
          );
          break;
        case tt.getType():
          n.push(dM(i, jr(i.content)));
          break;
        case ve.getType():
          n.push(mM(i, jr(i.content)));
          break;
        case Jt.getType():
          Zf(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && $l?.push(i.sid)), n.push(bM(i)), _M(i, n);
          break;
        case $r.getType():
          n.push(TM(i.marker ?? ""));
          break;
        case ah:
          n.push(fM(i, jr(i.content)));
          break;
        case uh:
          n.push(pM(i, jr(i.content)));
          break;
        case fh:
          n.push(hM(i, jr(i.content)));
          break;
        default:
          Ct?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(kM(i, jr(i.content)));
      }
  }), hc(n, r);
}
function gc(e) {
  const t = e.findIndex(
    (n) => mp(n) || Np(n) || Jc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    PT(n)
  );
  if (t >= 0) {
    const n = gc(e.slice(0, t)), i = e[t], s = gc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || xh(n)))
    return [Tg(e)];
  return e;
}
const Ar = {
  initialize: tM,
  reset: rM,
  serializeEditorState: nM
};
function xg(e) {
  if (e && !w(e)) {
    if (S(e)) return e;
    if (z(e))
      for (const t of e.getChildren()) {
        const r = xg(t);
        if (r) return r;
      }
  }
}
function EM() {
  const e = q();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((S(t) && !w(t) ? An(t) : void 0) && S(t)) {
      const i = me(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ai(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = xg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(L) ? L : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return S(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of _g(e)) {
    if (!An(t)) continue;
    ai(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(L) && r.setTextContent(n.slice(L.length));
  }
  return !0;
}
function _g(e) {
  const [t, r] = $c(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!S(a) || w(a) || ne(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function AM() {
  const e = q();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return An(t) ? Ce(sl(t)) : !1;
}
function Cg() {
  let e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (w(t) && !cl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (D(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = q(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!S(t) || w(t) || !An(t)) return !1;
  const r = sl(t);
  if (!Ce(r)) return !1;
  const n = me(""), i = e.anchor.offset;
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
  return D(a) ? ol(a) : o.select(0, 0), !0;
}
const Sg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Op(Fe().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = q(), t = Lp(e), r = fl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Uk(0, o);
        const a = bx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Fk(c) && Xc(parseInt(n, 10), c);
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
function mc(e, t) {
  return ve.isValidMarker(e, t) || !!Sg[e] || tt.isValidMarker(e, t) || ye.isValidMarker(e, t);
}
function PM(e, t) {
  return ye.isNoteContentMarker(e) ? !1 : ye.isValidMarker(e, t);
}
function vg(e, t, r, n, i, s) {
  const o = Nh(
    e,
    void 0,
    void 0,
    t,
    n ?? Fo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function yc(e, t, r, n, i, s, o) {
  if (ve.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (d) => {
      d.editor.update(() => {
        l = vg(
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
  const a = $M(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = q();
      N(u) && (yh(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Zu(d, Ar, r), m = aa(p);
      if (N(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), T = An(g), C = u.anchor.key === u.focus.key;
        if (D(m) && T && C && !Oa(m, o))
          wM(
            u,
            m,
            g,
            r?.markerMode === "editable"
          );
        else if (D(m) && !C && !Oa(m, o) && qM(u))
          RM(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          IM(
            u,
            () => aa(p)
          );
        else if (z(m) && !m.isInline()) {
          const v = u.insertParagraph();
          if (v) {
            const P = v.getChildren();
            m.append(...P), v.replace(m), Ce(m) && xi(m) || m.selectStart();
          }
        } else if (D(m) && S(g) && !w(g) && D(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Oa(m, o)) {
          const v = g.getParent();
          if (D(v)) {
            const P = u.anchor.offset;
            if (P === 0) g.insertBefore(m);
            else if (P >= g.getTextContentSize()) g.insertAfter(m);
            else {
              const [B] = g.splitText(P);
              B.insertAfter(m);
            }
            m.getChildren().forEach((B) => {
              w(B) && B.setNested(!0);
            });
            const M = m.getChildren().find((B) => S(B) && !w(B));
            M && S(M) ? M.select(
              M.getTextContentSize(),
              M.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (S(g) && !w(g) && u.isCollapsed() && (j(y) || D(y) && j(y.getParent()))) {
          const v = D(y) ? y : void 0, P = v ? NM(g, u.anchor.offset) : [];
          let B = (v ?? g).insertAfter(m);
          if (gr(m)) {
            const E = {
              ...r || Fo(),
              markerMode: "hidden"
            }, R = Zu(
              d,
              Ar,
              E
            ), $ = aa(R);
            B = B.insertAfter($);
          }
          if (P.length > 0 && v) {
            const E = fo(v).append(...P);
            B.insertAfter(E), v.isEmpty() && v.remove();
          } else S(B.getNextSibling()) || B.insertAfter(me(L));
          z(B) && B.selectEnd();
        } else if (u.insertNodes([m]), WM(m), f) {
          const v = Rf();
          v.add(m.getKey()), ii(v);
        } else if (D(m)) {
          const v = m.getChildren().find((P) => S(P) && !w(P));
          v && S(v) ? v.select(
            v.getTextContentSize(),
            v.getTextContentSize()
          ) : m.selectEnd();
        } else {
          const v = m.getNextSibling();
          v ? v.selectStart() : m.selectStart();
        }
      } else
        u?.insertNodes([m]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function NM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Oa(e, t) {
  return ((t ?? Zs).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function OM(e, t) {
  t && e.getChildren().forEach((i) => {
    w(i) && i.setNested(!0);
  }), e.getChildren().some((i) => w(i) && i.getMarkerSyntax() === "closing") || e.append(ct(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function wM(e, t, r, n) {
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
    const [o, a] = di(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ai(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), S(i) && !i.getTextContent().startsWith(L) && i.setTextContent(L + i.getTextContent());
    const o = t.getChildren().find((a) => S(a) && !w(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => S(o) && !w(o));
  S(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function qM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (w(n) || D(n)) continue;
    if (!S(n) || n.getType() !== je.getType() || ne(n, oe) === "attribute") return !1;
    const i = sl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    An(n) && (r = !0);
  }
  return r;
}
function RM(e, t, r) {
  const n = _g(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!An(a)) return;
    ai(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(L) && c.setTextContent(l.slice(L.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(L) || i.setTextContent(L + i.getTextContent());
  const s = t.getChildren().find((a) => S(a) && !w(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function $M(e, t) {
  let r = Sg[e];
  return r || (tt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: tt.getType(), marker: e, content: [] }] })
  } : ye.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ye.getType(), marker: e };
      return (ye.isValidFootnoteMarker(e) || ye.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function IM(e, t) {
  const r = e.getNodes(), [n, i] = di(e);
  let s;
  r.forEach((o, a) => {
    if (z(s) && s.isParentOf(o))
      return;
    const c = Mg(
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
    s || (s = t(), c.insertBefore(s), l = !0, D(s) && s.getChildren().some((d) => w(d) && d.getMarkerSyntax() === "opening") && OM(s, D(s.getParent()))), DM(c, s, l);
  }), (S(s) || z(s)) && s.selectEnd();
}
function di(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Dl(e) {
  return _e(e) || j(e) || j(e.getParent());
}
function Mg(e, t, r, n, i) {
  if (!Dl(e)) {
    if (S(e))
      return LM(e, t, r, n, i);
    if (z(e) && e.isInline())
      return e;
  }
}
function LM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function DM(e, t, r) {
  if (S(t)) {
    const n = bc(e, t);
    t.setTextContent(n), e.remove();
  } else if (z(t)) {
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
    bc(e, t), r && D(t) && t.getChildren().some((s) => w(s)) && S(e) && !w(e) && !e.getTextContent().startsWith(L) && e.setTextContent(L + e.getTextContent());
  }
}
function bc(e, t) {
  let r = e.getTextContent();
  if (S(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    ul(n), S(n) || t.insertBefore(me(" "));
  }
  return r;
}
function Eg(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = Nn(u, t);
    if (!f) return !1;
    const p = S(u) ? u.getTextContentSize() : 0;
    if (Xd(f, r), S(u) && u.isAttached()) {
      const m = u.getTextContentSize(), g = Math.max(p - m, 0), y = Math.max(0, Math.min(d - g, m)), T = q();
      N(T) && T.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = di(e);
  if (!Fl(n, t, s, o)) return !1;
  const a = Ul(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = Nn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Og(d, a);
    f && (Xd(f, r), l = !0);
  }), wg(a, i), l;
}
function Xd(e, t) {
  e.getChildren().forEach((n) => {
    Ft(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Dt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    S(n) && i.startsWith(L) && n.setTextContent(i.slice(L.length));
  }), Ua(e);
}
function Ul(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Mg(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    S(o) && n.push(o);
  }), n;
}
function Nn(e, t) {
  let r = e, n;
  for (; r && !Ce(r); ) {
    if (j(r)) return;
    !n && D(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Ag(e) {
  const t = st(
    e,
    (r) => j(r) || Ce(r)
  );
  return j(t);
}
function Pg(e) {
  return e.filter(
    (t) => !Dl(t) && (S(t) || z(t) && t.isInline())
  );
}
function UM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!S(i) || Dl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function FM(e, t, r) {
  return e.getChildren().some(
    (n) => z(n) && t.some((i) => n.isParentOf(i)) && !Ng(n, r)
  );
}
function Fl(e, t, r, n, i) {
  const s = Pg(e), o = UM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Nn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !FM(l, s, o);
  });
}
function Ng(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Ft(r));
}
function Og(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (z(u) && t.some((d) => u.isParentOf(d))) {
      if (!Ng(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Ft(n[s - 1]) && (s -= 1), o < n.length - 1 && Ft(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(fo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(fo(e).append(...c)), e;
}
function fo(e) {
  return jy(e);
}
function wg(e, t) {
  const r = q(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function zM(e, t, r) {
  if (e.isCollapsed()) {
    const l = Nn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Du(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = di(e);
  if (!Fl(n, r, i, s, t)) return !1;
  const o = Ul(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = Nn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Og(u, o);
    d && (Du(d, t), c = !0);
  }), c;
}
function KM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = di(e);
  if (!!!i?.some(
    (y) => Fl(s, y, o, a)
  ) && !jM(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const T = q();
    N(T) && Eg(T, y, n) && (l = !0);
  });
  const u = q();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = di(u), m = Ul(
    u.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const g = m.filter(
    (y) => !Ag(y) && !Nn(y, t)
  );
  return g.length > 0 && (BM(g).forEach((y) => VM(y, t)), l = !0), wg(m, d), l;
}
function jM(e, t) {
  return Pg(e).some(
    (r) => !Ag(r) && !Nn(r, t)
  );
}
function BM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function VM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => D(a) && a.getMarker() === t
  ), s = i ? fo(i) : Mr(t);
  e[0].insertBefore(s), s.append(...e), i === r || bc(e[0], s);
}
function WM(e) {
  ge(e) && (ul(e.getPreviousSibling()), Ch(e.getNextSibling()));
}
const qg = {
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
}, Qd = "psc-active-text", qs = "psc-empty-text";
function HM({ viewOptions: e }) {
  const [t] = ae(), r = Q(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return K(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Qd), r.current = o, o && t.getElementByKey(o)?.classList.add(Qd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        xo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${qs}`);
          if (!c) return !1;
          const l = pi(c);
          if (!ge(l)) return !1;
          const u = l.getParent();
          if (!z(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        xt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = wa(), f = GM(), p = [], m = [];
          return Fe().getChildren().forEach((g) => {
            if (!z(g)) return;
            const { emptyKeys: y, nonEmptyKeys: T } = YM(g);
            p.push(...y), m.push(...T);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(qs) : t.getElementByKey(d)?.classList.add(qs);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(qs));
      }),
      t.registerCommand(
        Dc,
        () => (i(void 0), !1),
        xt
      ),
      t.registerCommand(
        By,
        () => {
          const o = t.getEditorState().read(wa);
          return o !== r.current && i(o), !1;
        },
        xt
      )
    ];
    return i(t.getEditorState().read(wa)), Be(...s);
  }, [t, n]), null;
}
function wa() {
  return JM(q() ?? void 0)?.getKey();
}
function GM() {
  const e = q();
  if (!N(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!z(n)) return;
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
function JM(e) {
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function YM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ge(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ge(c)) break;
      if (!(Yt(c) || w(c)) && c.getTextContent().replaceAll(Bs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const XM = /^\+/;
function zl(e, t) {
  const r = t.replace(XM, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Rg(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function $g(e, t) {
  return Rg(e, t) !== void 0;
}
function kc(e, t) {
  const r = Rg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function po(e, t, r) {
  const n = z(e) ? e.getChildren().filter(w) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function QM(e, t, r, n, i) {
  const s = zl(n, t);
  if (!s) {
    po(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && po(e, "invalid", i);
}
function Hi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (D(s)) {
      const o = s.getMarker();
      i || QM(s, o, t, r, n), Hi(s, t, r, n, i || o === "xq");
    } else if (ge(s)) {
      if (i) continue;
      const o = zl(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else j(s) ? Hi(s, s.getMarker(), r, n, i) : De(s) || z(s) && Hi(s, t, r, n, i);
}
function ZM(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = zl(e, a);
    if (!c) {
      po(o, "unknown", r), kc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    kc(n, l) || po(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Fe().getChildren())
    De(o) || (pt(o) || Ge(o) ? i(o, o.getMarker()) : ce(o) ? (i(o, o.getMarker()), s(o) && Hi(o, o.getMarker(), e, r, !1)) : z(o) && s(o) && Hi(o, "p", e, r, !1));
  return r;
}
function eE(e) {
  return !!e?.includes("(basic)");
}
function tE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Ig(e, t) {
  return !e.startsWith("zpa") && e !== "c" && mc(e, t);
}
function Kl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Lg(e, t) {
  const r = [];
  for (const n of t) {
    const i = Kl(e, n);
    i && kc(r, i);
  }
  return r;
}
function Fs(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: tE(e.description),
    isBasic: eE(e.description)
  };
}
function rE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Tc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : rE(e.marker, t.marker);
}
function xc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Lg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Ig(i.marker, r)
  ).filter((i) => {
    const s = Kl(e, i.marker);
    return s !== void 0 && $g(n, s);
  }).map((i) => Fs(i, "paragraph")).sort(Tc);
}
function nE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Ig(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Fs(c, "character")).sort(Tc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Fs(c, "character")),
    ...a.map((c) => Fs(c, "note"))
  ].sort(Tc);
}
function iE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function sE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function oE(e, t, r) {
  return [
    ...iE(e, t.openCharMarkers),
    ...nE(e, t, r)
  ].sort(sE);
}
function aE(e, t, r) {
  if (t.source === "paragraph") return xc(e, t, r);
  const n = oE(e, t, r);
  return n.length > 0 ? n : xc(e, t, r);
}
function cE(e, t, r) {
  const n = xc(e, t, r), i = Lg(e, t.previousParaMarkers), s = Kl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && $g(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const er = String.raw`\w-`, Dg = "a-z0-9", lE = `[a-z][${Dg}]*`, uE = new RegExp(
  String.raw`^\\(\+?[${er}]+)[ \u00A0]$`
), Ug = new RegExp(String.raw`^\\(\+?[${er}]+)$`), dE = new RegExp(String.raw`^\\\+?[${er}]*\*$`), fE = new RegExp(
  String.raw`^\\(\+?[${er}]+)(?:[ \u00A0]|$)`
), pE = new RegExp(
  String.raw`^\\(\+?)([${er}]+)`
), hE = new RegExp(
  String.raw`\\\+?[${er}]+(?:\\?\*|[ \u00A0])`
), gE = new RegExp(
  String.raw`\\\+?[${er}]*$`
), mE = new RegExp(
  String.raw`^\\(${lE})( |$)`
), yE = new RegExp(
  String.raw`\\[${Dg}+*]*$`,
  "i"
), it = "￼";
function Fg(e) {
  return e.length > 1 && e.startsWith(L) && e.charAt(1) !== it ? e.slice(1) : e;
}
function Zd(e) {
  return Qc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function zg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Ar.serializeEditorState(
    {
      type: Sr,
      version: Cr,
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
  for (; Zd(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Et(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Zd(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Rs(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Li(e, t) {
  gE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += it;
}
function It(e) {
  return e.replaceAll(L, " ");
}
function bE(e, t, r = !1) {
  if (zo(t)) return It(e);
  if (e === L) return " ";
  const n = r && e.startsWith(L), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(L, "~");
}
function Gi(e) {
  const t = e.getTextContent();
  return Rn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function jl(e, t) {
  const r = e[t];
  if (!He(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Oo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Kg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Bl(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = rs(n, i);
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
function Vo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Vc(e);
}
function jg(e, t) {
  return He(e) ? !Vo(e.getMarker(), t) : j(e) || De(e) ? !0 : we(e) ? Vl(e) : D(e) ? Bg(e, t) : !1;
}
function Bg(e, t) {
  if (Yk(e)) return !0;
  const r = e.getMarker();
  return !Ib(r) && t(r) === void 0;
}
const Rt = "", $t = "";
function ef(e) {
  return e.flatMap((t) => Le(t) ? t.getChildren() : [t]);
}
function Ki(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (He(s)) {
      const o = jl(e, i);
      Vo(s.getMarker(), r) && Kg(o) ? (t.push(
        Rt,
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
      ), Ki(ef(o), t, r), t.push($t)) : t.push(it), i += o.length;
    } else if (we(s)) {
      const o = Bl(e, i);
      Vl(s) ? t.push(it) : (t.push(
        Rt,
        "verse",
        It(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Ki(ef(o), t, r), t.push($t)), i += o.length;
    } else w(s) ? t.push(Rt, "marker", It(s.getTextContent()), $t) : nn(s) ? t.push(Rt, "unmatched", It(s.getTextContent()), $t) : jg(s, r) ? t.push(it) : gs(s) ? t.push(" ") : S(s) ? t.push(
      It(
        n ? Fg(Gi(s)) : Gi(s)
      )
    ) : D(s) ? (t.push(Rt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Ki(s.getChildren(), t, r, !0), t.push($t)) : z(s) ? (t.push(Rt, s.getType()), Ki(s.getChildren(), t, r), t.push($t)) : t.push(it);
  }
}
function _i(e, t) {
  const r = [];
  return Ki(e, r, t), r.join("");
}
function Pr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function fi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Wl(e) {
  return e.type ?? "";
}
function Vg(e, t, r) {
  return t === "closing" ? et(e, r) : t === "selfClosing" ? et("") : qe(e, r);
}
function qa(e, t) {
  const r = e[t];
  if (!(!r || Wl(r) !== "attribute-run"))
    return Pr(r) ?? [];
}
function Ci(e, t) {
  const r = [];
  return ji(e, r, t), r.join("");
}
function ji(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Wl(s);
    if (o === "ms") {
      const l = s, u = qa(e, i + 1);
      u && Vo(l.marker ?? "", r) ? (t.push(
        Rt,
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
      ), ji(u, t, r), t.push($t), i += 1) : t.push(it);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(it);
        continue;
      }
      t.push(
        Rt,
        "verse",
        It(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = qa(e, i + 1 + u);
      for (; d; )
        ji(d, t, r), u++, d = qa(e, i + 1 + u);
      t.push($t), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Rt,
        "marker",
        It(
          Vg(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        $t
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Rt, "char", JSON.stringify(l.unknownAttributes ?? null)), ji(Pr(s) ?? [], t, r, !0), t.push($t);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(it);
      continue;
    }
    if (o === "unmatched") {
      t.push(Rt, "unmatched", It(fi(s) ?? "")), t.push($t);
      continue;
    }
    const a = fi(s);
    if (a !== void 0) {
      t.push(It(n ? Fg(a) : a));
      continue;
    }
    const c = Pr(s);
    c ? (t.push(Rt, o), ji(c, t, r), t.push($t)) : t.push(it);
  }
}
function Wo(e) {
  let t = 0;
  for (const r of e) {
    const n = Pr(r);
    if (n) {
      t += Wo(n);
      continue;
    }
    const i = fi(r);
    if (i !== void 0)
      for (const s of i) s === it && t++;
  }
  return t;
}
function us(e, t, r, n, i) {
  On(e.getChildren(), t, r, n, i);
}
function On(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (w(a))
      Rs(t, a, It(a.getTextContent()));
    else if (He(a)) {
      s();
      const c = jl(e, o);
      Vo(a.getMarker(), r) && Kg(c) ? On(c, t, r, n) : Li(t, [a, ...c]), o += c.length;
    } else if (j(a) || De(a))
      s(), Li(t, [a]);
    else if (we(a)) {
      s();
      const c = Bl(e, o);
      Vl(a) ? Li(t, [a, ...c]) : (Rs(t, a, It(Gi(a))), On(c, t, r, n)), o += c.length;
    } else if (D(a))
      s(), Bg(a, r) ? Li(t, [a]) : us(a, t, r, n, { pending: !0 });
    else if (gs(a))
      s(), Rs(t, a, " ");
    else if (S(a)) {
      const c = Rn(a) || ne(a, oe) === "attribute", l = s() && !c;
      Rs(
        t,
        a,
        c ? It(Gi(a)) : bE(Gi(a), n, l)
      );
    } else z(a) ? us(a, t, r, n, i) : (s(), Li(t, [a]));
  }
}
function Hl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (De(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return us(e, i, t, r), i;
}
function Wg(e, t) {
  let r = 0;
  const n = (i) => {
    if (S(i)) {
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
    } else z(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function _c(e, t = []) {
  for (const r of e)
    we(r) ? t.push(r) : z(r) && _c(r.getChildren(), t);
  return t;
}
function Hg(e) {
  let t = 0;
  const r = (n) => {
    if (S(n))
      for (const i of n.getTextContent()) i === it && t++;
    else z(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Ln(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === it && t++;
    else r.content && (t += Ln(r.content));
  return t;
}
function kE(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), z(i) && us(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const ds = /\s/;
function Gg(e) {
  return e.filter(Ho).length;
}
function Ho(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return S(t) && !w(t) && ne(t, oe) === "attribute";
}
function TE(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return w(t) || Ho(e);
}
function tf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Ho(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      ds.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Gl(e, t, r) {
  const n = tf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !TE(i) ? tf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Gg(e.spans) };
}
function Ra(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return w(t) && t.getMarkerSyntax() !== "opening";
}
function xE(e) {
  const t = se(e.key);
  if (!w(t)) return !1;
  const r = t.getParent();
  return D(r) ? (r.selectNext(0, 0), !0) : !1;
}
function _E(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = we(t) ? Bl(r, n) : He(t) ? jl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Jg(e, t, r) {
  const { text: n, spans: i } = e, s = Gg(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !Ra(d);
    if (!(o && Ho(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const g = n[d.start + m];
        if (c === 0 && (l === 0 || !ds.test(g))) {
          if (p) {
            a = { key: d.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? ds.test(g) || c-- : l--;
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
    if (d && Ra(d) && xE(d) || d?.isSentinel && _E(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Ra(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = se(a.key);
    if (d && S(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(z)?.selectStart();
}
function Yg(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(z)?.selectStart();
      return;
    }
    Jg(kE(e, n, i), t, e);
  }
}
function CE(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(z)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  On(e, s, n, i), Jg({ text: s.text, spans: s.spans }, t, e);
}
function Xg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = Hl(g, n, r);
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
  if (N(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Gl(s, c.anchor.key, c.anchor.offset));
  }
  const l = Or(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Ln(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Ar.serializeEditorState(
    { type: Sr, version: Cr, content: l },
    r
  );
  if (Ci(u.root.children, n) === _i(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => ko(g));
  if (Hg(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = _c(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), Wg(d, s.sentinels), e.forEach((g) => g.remove());
  const m = _c(d);
  for (let g = 0; g < f.length && g < m.length; g++)
    m[g].getNumber() === f[g].number && m[g].setSid(f[g].sid);
  return Yg(d, o, a, n, r), !0;
}
function Qg(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !ve.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!w(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(ht(s) || S(s) && s.getTextContent() === Et(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!w(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return On(c, l, t, r), { out: l, contentNodes: c };
}
function Zg(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(it)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function SE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Qg(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = q();
  if (N(u)) {
    for (let P = u.anchor.getNode(); P; P = P.getParent())
      if (e.is(P)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Gl(o, u.anchor.key, u.anchor.offset));
  }
  const d = Or(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Ln(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = Zg(p), g = zg(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Wo(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), Ci(g.children, n) === _i(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const T = g.children.map((P) => ko(P));
  if (Hg(T) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const C = a[0];
  if (C)
    T.forEach((P) => C.insertBefore(P));
  else {
    const P = e.getChildren().find((M) => w(M) && M.getMarkerSyntax() === "closing");
    T.forEach((M) => P ? P.insertBefore(M) : e.append(M));
  }
  Wg(T, o.sentinels);
  const v = new Set(o.sentinels.flat().map((P) => P.getKey()));
  return a.forEach((P) => {
    v.has(P.getKey()) || P.remove();
  }), CE(T, c, l, n, r), !0;
}
const em = /* @__PURE__ */ new Set(["ca", "cp"]), Jl = "cp";
function tm(e) {
  if (!fr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (us(e, t, ur, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Or(r, { getMarker: ur }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Jl)
  );
}
function Go(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (D(r) && em.has(r.getMarker()) || tm(r)) {
      t.push(r);
      continue;
    }
    ce(r) && r.getMarker() === Jl && t.push(r);
    break;
  }
  return t;
}
function vE(e) {
  const t = (n) => D(n) && em.has(n.getMarker()) || tm(n);
  if (t(e) || ce(e) && e.getMarker() === Jl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ne(n)) return n;
      if (!t(n)) return;
    }
}
function rm(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Go(e);
  if (n.some((s) => ce(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (On(e.getChildren(), i, t, r), On(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function ME(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Go(e)], o = rm(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = q();
  if (N(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((g) => g.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Gl(o, l.anchor.key, l.anchor.offset));
  }
  const u = Or(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Ln(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Ar.serializeEditorState(
    { type: Sr, version: Cr, content: u },
    r
  );
  if (Ci(f.root.children, n) === _i(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => ko(m));
  return Ne(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), Yg(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function fs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (De(n)) return;
    !t && (j(n) || ce(n) || Ne(n)) && (t = n), Vy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? vE(r) : void 0) ?? t;
}
function Vt(e, t) {
  const r = fs(e);
  return r ? j(r) ? SE(r, t) : Ne(r) ? ME(r, t) : Xg([r], t) : !1;
}
const EE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function rf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !EE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function zs(e, t) {
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
          t.push(`\\${n}`), rf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), zs(r.content, t), rf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), zs(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), zs(r.content, t);
      }
    }
}
function nf(e, t, r) {
  const n = fs(e);
  if (!ce(n)) return !1;
  const i = q();
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
  const a = Or(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    ds.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  zs(a, l);
  for (const u of l.join("").replaceAll(L, "~")) {
    if (ds.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function Yl(e, t) {
  return nm(e, t, b.Paragraph);
}
function AE(e, t) {
  return nm(e, t, b.Character);
}
function nm(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== b.Unknown ? i === r : !(ve.isValidMarker(n) || Vc(n));
}
function PE(e) {
  return [ct(e), Ao()];
}
function Xl(e) {
  Qt(e, 2);
}
function NE(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Ql(e) {
  const t = NE(e);
  e.splice(0, 0, PE(e.getMarker())), t && Xl(e);
}
function ho(e, t) {
  e.setMarker(t), Ql(e), Xl(e);
}
function OE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Rn(n)) {
    if (S(n) && !w(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(L), kt(n, oe, pr), n.setMode("token");
      return;
    }
    if (Up(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Ao());
  }
}
function sf(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : z(n) ? n.getChildrenSize() : 0;
  if (r === "start" ? e.offset !== 0 : e.offset !== i) return !1;
  for (let s = n; !s.is(t); ) {
    if (r === "start" ? s.getPreviousSibling() : s.getNextSibling()) return !1;
    const o = s.getParent();
    if (o === null) return !1;
    s = o;
  }
  return !0;
}
function Ji(e) {
  for (let t = e; t; t = t.getParent())
    if (ce(t)) return t;
}
function wE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Ji(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Ji(r.getNode())?.is(s) ?? !1, a = Ji(n.getNode())?.is(s) ?? !1;
    return !(o && !sf(r, s, "start") || a && !sf(n, s, "end"));
  });
}
function Cc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = q();
  if (!(!N(r) || r.isCollapsed()))
    for (const n of wE(r)) t.add(n.getKey());
}
function qE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = q();
  if (!N(r) || !r.isCollapsed()) return;
  const n = Ji(r.focus.getNode());
  n && t.add(n.getKey());
}
function RE(e) {
  const t = q();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => w(r)) && (Cc(e), t.removeText());
}
const $E = new RegExp(
  String.raw`^\\\+?([${er}]+)(?:[ \u00A0]|$)`
);
function IE(e, t) {
  const r = $E.exec(e.getTextContent());
  return !!r && Yl(r[1], t);
}
function LE(e, t) {
  if (!ki(t.viewOptions)) return;
  if (Ft(e.getFirstChild())) {
    OE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (IE(e, t.getMarker)) return;
    Ql(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ce(o) && !o.is(e))) {
      ho(e, lr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ce(r)) {
    const n = e.getChildren().filter((a) => !Rn(a)), i = q();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Ji(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || z(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Qt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  ho(e, lr);
}
function DE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = cr(t, vo(e.getMarker()));
  return r === "" ? void 0 : r;
}
function UE(e) {
  const t = e.getChildren().filter((s) => !w(s) && ne(s, oe) !== "attribute"), r = t[0];
  r && S(r) && r.getTextContent().startsWith(L) && r.setTextContent(r.getTextContent().slice(1));
  const n = DE(e);
  n && t.push(me(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function FE(e, t) {
  const r = e.getChildren(), n = r.some((s) => w(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => S(c) && !w(c) && c.getTextContent() === Et(s)
    ), a = hi(e).some(({ node: c }) => w(c));
    if (!o && !a) return;
    r.forEach((c) => {
      w(c) || (S(c) && c.getTextContent() === Et(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => w(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function zE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(w(r) && r.getMarkerSyntax() === "opening")) {
    UE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => w(o) && o.getMarkerSyntax() === "closing");
  i && !s && Vt(e, t);
}
function im(e, t, r) {
  if (!w(e.getFirstChild()) && r?.markerMode === "editable" && ki(r)) {
    ho(e, t);
    return;
  }
  Fh(e, t);
}
function sm() {
  const e = q();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = om(e);
    return t !== "removed" ? t : (Sc(), "handled");
  }
  return Sc() ? "handled" : "declined";
}
function KE(e, t) {
  if (!t) return e;
  const r = mE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function of(e, t) {
  const r = q();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!am())
      return "declined";
  } else {
    const s = om(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => KE(s, t)
  );
  af(n ?? "");
  for (const s of i)
    Sc(), af(s);
  return "handled";
}
function jE(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = pi(n);
  if (!i) return !1;
  const s = Xt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !S(i) || w(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function om(e) {
  const t = Xt(e.anchor.getNode()), r = Xt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), BE() ? "removed" : "needs-plain-split");
}
function af(e) {
  if (e === "") return;
  const t = q();
  N(t) && t.insertText(e);
}
function BE() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = Xt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => w(r) && r.getMarkerSyntax() === "opening");
}
function am() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Xt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Sc() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = am();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Mr("fp", { closed: "false" });
  i.append(ct("fp"));
  const s = S(t) && !w(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
    u && (zk(u), i.append(u));
  }
  return i.getChildren().every(w) && i.append(me(Dt)), cm(i), !0;
}
function cm(e) {
  const t = e.getChildren().find((r) => !w(r));
  if (S(t)) {
    const r = wo(t);
    t.select(r, r);
    return;
  }
  if (z(t)) {
    cm(t);
    return;
  }
  e.selectEnd();
}
function VE(e) {
  const t = [];
  let r = e;
  for (; r; )
    D(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function WE(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Fe().getChildren()) {
    if (t && n.is(t)) break;
    (pt(n) || Ge(n) || ce(n)) && r.push(n.getMarker());
  }
  return r;
}
function HE(e) {
  let t = e;
  for (; z(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function GE(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ft(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Rn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(HE(i)) && r === 0 : !1;
}
function JE(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ft(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Rn(i) && t.is(i) && r === 0;
}
function YE() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function XE() {
  const e = q();
  if (!N(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = st(t, ce), s = !n && (!i || JE(i, t, r)) ? "paragraph" : "character", o = Xt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: WE(t),
    openCharMarkers: VE(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: cl(t, r),
    anchorRect: YE()
  };
}
function QE() {
  const e = q();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!S(t) || w(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = yE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function ZE(e, t, r) {
  im(e, t, r), Xl(e);
}
function eA(e, t, r) {
  const n = q();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = st(i, ce);
  if (t === "backslash" && s && GE(s, i, n.focus.offset)) {
    ZE(s, e, r);
    return;
  }
  um(e, r);
}
function tA(e, t) {
  const r = q();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function lm(e) {
  const t = q();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function rA(e, t, r, n) {
  if (N(q()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && QE(), e.kind === "closeTag") {
    lm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && sm() !== "declined") return;
  if (e.kind === "paragraph" && tt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    eA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (ve.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return vg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  yc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: Tn(), reference: r });
}
function um(e, t) {
  const r = q();
  if (!N(r)) return;
  const n = ki(t);
  if (Cg()) {
    const s = q();
    if (!N(s)) return;
    const o = st(s.anchor.getNode(), ce);
    if (!o) return;
    o.setMarker(e), n && Ql(o);
    return;
  }
  const i = r.insertParagraph();
  ce(i) && (n ? ho(i, e) : i.setMarker(e));
}
function nA() {
  const [e] = ae();
  return K(() => e.registerCommand(Lf, () => !0, xt), [e]), null;
}
function iA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = fE.exec(e)?.[1];
  return r === void 0 ? !1 : !Yl(r, t);
}
function dm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !iA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ce(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ce(i))
    return [i, r];
}
function fm(e, t) {
  const r = dm(e, t.getMarker);
  return r !== void 0 && Xg(r, t);
}
function sA(e, t) {
  const r = q();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function pm(e) {
  const t = pE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function oA(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = pm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function aA(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (j(e.getParent()) && S(r)) {
    const n = r.getNextSibling();
    if (D(n)) {
      ol(n);
      return;
    }
  }
  S(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function cf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = pm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  aA(e);
}
function lf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function hm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Vt(e, r);
  const n = oA(e), i = e.getParent();
  if (ce(i)) {
    if (!Yl(t, r.getMarker))
      return fm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Vt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), lf(s, t) && cf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (D(i) || j(i)) {
    const s = t.replace(/^\+/, "");
    if (!(D(i) ? AE(t, r.getMarker) : ve.isValidMarker(s)))
      return Vt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Vt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(w).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (sA(c, et(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), lf(a, s) && cf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Vt(e, r);
}
function cA(e) {
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
function lA(e, t) {
  const r = e.getTextContent();
  if (rn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Le(e.getParent()) && Zc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !cA(e)) {
    Gk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = uE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), hm(e, n[1], t);
      return;
    }
    if (dE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Vt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = et(e.getMarker(), e.getNested());
    if (D(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = q(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = me(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function uA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (oh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function gm(e) {
  if (!Gf(e)?.length)
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
const Di = gm("v"), dA = gm("c"), uf = /^[ \u00A0]*$/;
function df(e, t, r) {
  const n = e.getNextSibling();
  if (S(n) && n.getType() === je.getType() && n.getMode() === "normal" && ne(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = me(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function fA(e, t) {
  const r = e.getTextContent(), n = Lt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Di.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Di.valueAndRest.exec(c);
    if (l && uf.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Di.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Di.valueAndRest.exec(r);
  if (!s) {
    const c = Di.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = q(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Lt("v", u));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      df(e, d, m);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Vt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), uf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Lt("v", o)), a && df(e, a, a.length);
}
const pA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function hA(e, t) {
  const r = e.getParent();
  if (!j(r) || r.getIsCollapsed() !== !1 || !Gf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!w(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Et(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = pA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Et(a)), !0;
}
function gA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!S(t)) return;
  const r = Lt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = dA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function mm(e) {
  if (He(e)) {
    const { wrapper: t } = Oo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (j(e)) {
    const { wrapper: t } = Vp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Ne(e)) {
    const t = [], r = Wp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Gp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (we(e)) {
    const t = [], r = rs(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = rs(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function mA(e) {
  const t = q();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return mm(e).some((n) => r.is(n));
}
function yA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ce(e) && Up(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ns)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Cs(l, e) && (i || mA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of mm(e))
    l.remove(), n = !0;
  let s = !1;
  if (D(e)) {
    const l = Zk(e);
    l !== void 0 && wb(l) && (Qp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of ns)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (HT(l, e)) {
        ss(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && gh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      $o(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function ff(e) {
  return S(e) && e.getType() === je.getType() && e.getMode() === "normal" && ne(e, oe) !== "attribute";
}
function bA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && ff(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && ff(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function $s(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = bA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (w(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (rn(c)) continue;
      const m = Ug.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = hm(c, m[1], e) || n : r === "idle" && nf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : fm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Vt(c, e) || n;
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
    const f = yA(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && nf(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Vt(u, e) || n;
    }
  }
  return n;
}
function ym(e) {
  if (nn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (D(t)) return Bi(t) !== void 0;
  return !1;
}
function kA(e) {
  const t = En(e);
  if (!t) return !1;
  const r = Mn(t.kind);
  return !$o(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function pf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (pt(t) || De(t) || lh(t)) return !0;
  return !1;
}
function TA(e, t) {
  const r = e.getTextContent(), n = ne(e, oe), i = e.getParent();
  if (n !== "attribute" && Ne(i)) {
    r.replace(/^[ \u00A0]+/, "") === Lt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (hA(e, t)) return;
  if (n === "attribute") {
    kA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && ym(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !pf(e))
      t.pendingKeys.add(e.getKey());
    else if (Jp(e)) t.pendingKeys.add(e.getKey());
    else if (Ne(fs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      D(a) && Zp(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (pf(e)) return;
  const s = q(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (hE.test(o)) {
    if (zb(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Vt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function xA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : gh(e, t);
}
function _A(e) {
  const t = (r) => {
    if (w(r)) {
      rn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (nn(r)) {
      oh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of ns)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Cs(n, r) || xA(n, r)) && e.pendingKeys.add(r.getKey());
    if (we(r)) {
      r.getTextContent() !== Lt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (S(r)) {
      if (r.getType() !== je.getType() || ne(r, oe) === "attribute") return;
      const n = r.getParent();
      if (Ne(n)) {
        r.getTextContent() !== Lt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && ym(r) || i.includes("//") || Jp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (D(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!De(r) && !pt(r)) {
      if (Le(r) && r.getChildrenSize() === 0) {
        const n = En(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      z(r) && r.getChildren().forEach(t);
    }
  };
  Fe().getChildren().forEach(t);
}
const go = "usfm:", bm = "usfmopen", km = "usfmclosed";
function CA(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const SA = new RegExp(
  [go, bm, km].map(CA).join("|")
), vA = "\uFEFF", MA = /^usfm_(.+)$/;
function EA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function AA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function PA(e) {
  return e.startsWith(go) ? AA(e.slice(go.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Tm(e) {
  for (const t of e.classList) {
    const r = MA.exec(t);
    if (r) return r[1];
  }
}
function NA(e) {
  const t = Tm(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function OA(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(go)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(bm) && !n.contains(km)) && Tm(r) !== void 0)
      return !0;
  }
  return !1;
}
function xm(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(PA(e.nodeValue ?? ""));
    return;
  }
  if (!EA(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => xm(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? NA(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function wA(e) {
  if (!SA.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !OA(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => xm(n, !1, r)), r.join("").replaceAll(vA, "").replaceAll(L, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function qA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, oe);
  if (r === "attribute" || r === pr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (pt(o) || Ne(o) || De(o)) return;
  const n = t.startsWith(L) && D(e.getParent()), i = n ? t.slice(1) : t, s = (n ? L : "") + i.replace(/ (?=[ \u00A0])/g, L).replace(new RegExp("(?<=\\u00A0) ", "g"), L);
  s !== t && e.setTextContent(s);
}
function RA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function $A(e, t) {
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
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? wA(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(RA(s)) : ""),
    isInternal: $A(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const hf = String.raw`\\(?:\+?[${er}]+\*?|\*)`, IA = new RegExp(
  String.raw`(?<=${hf})\u00A0|\u00A0(?=${hf})`,
  "g"
);
function Zl(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(IA, " ").replaceAll(L, "~");
}
const _m = new RegExp(
  String.raw`\\c(?![${er}])[ \u00A0]*[^\s\\]*`,
  "g"
), Cm = new RegExp(String.raw`\\id(?![${er}])[^\n\\]*`, "g"), LA = new RegExp(
  String.raw`^(?:${_m.source}|${Cm.source})`
);
function eu(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(_m, "").replace(Cm, "");
    return LA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function Mc(e) {
  if (S(e) && ne(e, oe) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Le(t)) return !0;
  return !1;
}
function DA(e) {
  return Mc(e.anchor.getNode()) || Mc(e.focus.getNode());
}
function UA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && Mc(t.getNode());
}
function FA(e, t) {
  const n = UA(e) ? t : Zl(eu(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function zA(e, t = !1, r = () => {
}) {
  const n = vc(e, Tn()._config.namespace);
  if (!n) return !1;
  const i = q(), s = N(i) && DA(i);
  if (!s && n.isInternal || t && N(i) && ni(i))
    return !1;
  const { text: o } = n;
  if (!o || !N(i)) return !1;
  if (e?.preventDefault(), s)
    return FA(i, o), !0;
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
    if (d > 0 && l.dispatchCommand(Ks, void 0), u === "") return;
    const f = q();
    N(f) && f.insertText(u);
  }), !0;
}
function KA(e) {
  if (e.getTextContent() !== L) return !1;
  const t = e.getParent();
  return j(t) ? !ht(e.getPreviousSibling()) : !1;
}
function jA(e, t) {
  if (t || e.getTextContent() !== L) return "";
  const r = e.getParent();
  if (!j(r) || !ht(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function BA(e) {
  const t = e.getParent();
  return (j(t) ? t.getCaller() : void 0) || Yi;
}
function VA(e) {
  const t = e.getParent();
  return !t || Qr(t) === void 0;
}
function Sm(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = $c(e);
  let l = "", u = !0;
  for (const d of t) {
    if (z(d) && !d.isInline()) {
      !u && VA(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, ht(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + BA(d));
    else if (S(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += KA(d) ? "" : f.replaceAll(L, " ") + jA(d, d === n);
    } else (_o(d) || gs(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(L, " "));
  }
  return l;
}
function vm(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function WA(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => pt(r) || Ne(r)
    )
  );
}
function HA(e) {
  const t = q();
  if (!N(t) || t.isCollapsed()) return;
  const r = Sm(t), n = {
    "text/plain": r,
    "text/html": vm(r)
  };
  if (Ko() || WA(t)) return n;
  const i = Jy(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function gf(e, t, r) {
  const n = q();
  if (!N(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !Qh();
  const i = HA(t);
  return i ? Mm(e, t, n, i, r) : !1;
}
function Mm(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || Yy(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const Em = Df(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function $a(e) {
  const t = e();
  return Bt(wf), Bt(Xf), t;
}
const mf = 8, GA = 1e3;
function Xn(e, t) {
  const r = we(e) ? ["va", "vp"] : He(e) ? ["milestone"] : j(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    QT(Mn(n), e, t.pendingKeys);
}
function JA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Uc) || i.updateTags.has(Xi)) return;
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
  return Be(
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
    e.registerMutationListener(mr, r),
    e.registerMutationListener(wr, r),
    e.registerMutationListener(qr, r)
  );
}
function Ec(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = q();
  return r ? t ? og(r, t) : N(r) && ni(r) : !1;
}
function YA(e, t, r) {
  return Be(
    e.registerCommand(
      xr,
      (n) => {
        if (Ko() || Ec(t)) return !1;
        const i = vc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Zl(eu(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = of(o, t.getMarker);
          if (a === "declined" && jE(e) && (a = of(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Wt
    ),
    e.registerCommand(
      xr,
      (n) => {
        const i = vc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !AM()) return !1;
        const o = q();
        return t.structureProtectionMode === "protected" && N(o) && ni(o) ? !1 : (n?.preventDefault(), N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ks, void 0), a === "") return;
          const l = q();
          N(l) && l.insertText(a);
        }), !0);
      },
      Oe
    ),
    e.registerCommand(
      xr,
      () => (t.splitExpected.current = !0, !1),
      xt
    )
  );
}
function XA({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = ae(), o = e?.markerMode === "editable", a = !!e && zo(e), c = Q(void 0), l = Q(n);
  return K(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? ur, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), K(() => {
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
    const d = jT(s, u.pendingKeys);
    let f, p = !1, m, g = !1, y = !1, T = 0;
    const C = () => T < mf ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${mf} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), v = (E, R = "departure") => {
      s.update(() => {
        T = $a(
          () => $s(u, E, R)
        ) ? T + 1 : 0;
      });
    };
    let P;
    const M = () => {
      if (P !== void 0 && clearTimeout(P), P = void 0, y || u.pendingKeys.size === 0) return;
      const E = l.current ?? GA;
      E < 0 || (P = setTimeout(() => {
        P = void 0, !(y || u.pendingKeys.size === 0) && (p || C() || v(void 0, "idle"));
      }, E));
    }, B = Be(
      s.registerNodeTransform(mr, (E) => {
        if (s.isComposing()) return;
        lA(E, u);
        const R = En(E);
        R && (we(R.owner) || j(R.owner) || Ne(R.owner) || He(R.owner) && Oo(R.owner).wrapper === void 0) && Xn(R.owner, u);
      }),
      s.registerNodeTransform(dt, (E) => {
        s.isComposing() || (fA(E, u), Xn(E, u));
      }),
      s.registerNodeTransform(Pt, (E) => {
        s.isComposing() || (gA(E), E.isAttached() && Xn(E, u));
      }),
      s.registerNodeTransform(tt, (E) => {
        s.isComposing() || LE(E, u);
      }),
      s.registerNodeTransform(ye, (E) => {
        if (!s.isComposing()) {
          zE(E, u);
          for (const R of ["separator", "char"])
            E.isAttached() && Cs(Mn(R), E) && u.pendingKeys.add(E.getKey());
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
      s.registerNodeTransform(Jt, (E) => {
        s.isComposing() || Xn(E, u);
      }),
      s.registerNodeTransform(qr, (E) => {
        if (s.isComposing()) return;
        const R = En(E);
        R && (He(R.owner) || we(R.owner) || j(R.owner) || Ne(R.owner)) && Xn(R.owner, u);
      }),
      s.registerNodeTransform(ve, (E) => {
        s.isComposing() || (FE(E, u), Xn(E, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform($r, (E) => {
        s.isComposing() || uA(E, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(je, (E) => {
        s.isComposing() || TA(E, u);
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
        (E) => {
          s.getEditorState().read(() => {
            for (const [R, $] of E) {
              if ($ === "destroyed") continue;
              const re = se(R);
              !re || ne(re, oe) !== "attribute" || Le(re.getParent()) || s.getElementByKey(R)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      JA(s, u),
      ...a ? [
        s.registerNodeTransform(je, (E) => {
          s.isComposing() || qA(E);
        }),
        s.registerCommand(
          Co,
          (E) => gf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            E && typeof E == "object" && "clipboardData" in E ? E : null,
            s,
            !1
          ),
          Oe
        ),
        s.registerCommand(
          _n,
          (E) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            gf(
              E && typeof E == "object" && "clipboardData" in E ? E : null,
              s,
              !0
            )
          ),
          Oe
        ),
        s.registerCommand(
          xr,
          (E) => zA(
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
          Oe
        )
      ] : [],
      s.registerCommand(
        _n,
        () => (!Ec(u) && !Ko() && Cc(u), !1),
        Wt
      ),
      s.registerCommand(
        Ic,
        () => (s.isComposing() || RE(u), !1),
        ei
      ),
      s.registerCommand(
        xo,
        () => (p = !1, T = 0, M(), !1),
        xt
      ),
      s.registerCommand(
        Nr,
        (E) => (p = !1, T = 0, M(), (E.key === "Backspace" || E.key === "Delete") && !Ec(u, rg(E)) && (Cc(u), qE(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !E.ctrlKey || E.altKey || E.shiftKey || E.metaKey || E.key !== " " && E.code !== "Space" || !EM() ? !1 : (E.preventDefault(), !0)),
        Oe
      ),
      s.registerCommand(
        $f,
        (E) => {
          const R = sm();
          R === "needs-plain-split" && s.dispatchCommand(Ks, void 0);
          const $ = R !== "declined" || ZT();
          return $ && E?.preventDefault(), $s(u), $;
        },
        Oe
      ),
      s.registerCommand(
        Ks,
        () => (u.splitExpected.current = !0, Cg()),
        Oe
      ),
      YA(s, u, a),
      s.registerCommand(
        Em,
        () => {
          if (p) return !0;
          const E = s.getRootElement(), R = E?.ownerDocument, $ = !!E && !!R && R.hasFocus() && E.contains(R.activeElement);
          let re;
          if ($) {
            const H = q();
            re = N(H) ? H.focus.key : f;
          }
          return $a(() => $s(u, re)), !0;
        },
        xt
      ),
      s.registerCommand(
        Dc,
        () => {
          if (p) return !1;
          const E = q(), R = N(E) ? E.focus.key : f;
          return $a(() => $s(u, R)), !1;
        },
        xt
      ),
      s.registerUpdateListener(({ editorState: E, tags: R }) => {
        u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const $ = E.read(() => {
          const H = q();
          return N(H) ? H.focus.key : void 0;
        }), re = m;
        if ($ !== void 0 && (m = $), R.has(Uc)) {
          u.pendingKeys.clear(), E.read(() => _A(u)), p = !0, $ !== void 0 && (f = $);
          return;
        }
        if (R.has(_r)) {
          $ !== void 0 && $ !== re && (p = !0);
          return;
        }
        p || ($ !== void 0 && (f = $), M(), !(g || $ === void 0) && [...u.pendingKeys].some((H) => H !== $) && (g = !0, queueMicrotask(() => {
          g = !1, !y && (C() || v(f));
        })));
      })
    );
    return () => {
      y = !0, P !== void 0 && clearTimeout(P), P = void 0, d(), B(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const QA = ["status_unknown", "status_invalid"], Am = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, ZA = Object.values(Am);
function e1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Am[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function yf(e) {
  e.classList.remove(...QA), e.removeAttribute("aria-description"), ZA.includes(e.title) && e.removeAttribute("title");
}
function t1(e, t, r, n) {
  const i = (a) => a.read(() => Fe().getChildrenKeys()), s = i(t), o = i(e);
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
function r1(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : w(t) && t.getParent()?.getKey() === r.getKey();
}
function n1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ae(), i = e?.markerMode === "editable";
  return K(() => {
    if (!i) return;
    const s = t ?? Zs;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = ZM(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || r1(f)) continue;
            const m = se(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && yf(p);
        }
        for (const [f, p] of d) {
          const m = n.getElementByKey(f);
          m && e1(m, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          t1(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && yf(u);
      }
    };
  }, [n, i, t, r]), null;
}
function i1(e, t) {
  const r = vl(_l), n = no();
  if (!r || !n?.end) return;
  const i = Us.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = Wy({
    namespace: "markers-view-copy",
    nodes: [Ze, ...kl],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    Ar.serializeEditorState(i, r)
  ).read(
    () => {
      const a = Uo(n);
      return a ? Sm(a) : void 0;
    },
    { editor: s }
  );
}
function s1({ viewOptions: e }) {
  const [t] = ae();
  return K(() => {
    const r = (n, i) => {
      const s = q();
      if (!N(s) || s.isCollapsed()) return !1;
      const o = i1(t, e);
      return o === void 0 ? !1 : Mm(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        n && typeof n == "object" && "clipboardData" in n ? n : null,
        t,
        s,
        { "text/plain": o, "text/html": vm(o) },
        i
      );
    };
    return Be(
      t.registerCommand(Co, (n) => r(n, !1), Oe),
      t.registerCommand(_n, (n) => r(n, !0), Oe)
    );
  }, [t, e]), null;
}
function Pm(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Pr(o);
    a && z(s) && Pm(s.getChildren(), a, r);
  }
}
function Nm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Pr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = fi(o);
      if (c === void 0 || !c.includes(it)) continue;
      const l = c.split(it), u = [];
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
function Om(e, t, r) {
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
function wm(e, t) {
  const r = [];
  for (const n of e)
    jg(n, t) || ((ce(n) || D(n)) && r.push(n.getMarker()), z(n) && r.push(...wm(n.getChildren(), t)));
  return r;
}
function qm(e) {
  const t = [];
  for (const r of e) {
    const n = Wl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Pr(r);
    i && t.push(...qm(i));
  }
  return t;
}
function tu(e, t, r) {
  const n = wm(e, r), i = qm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function o1(e, t) {
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
  if (!(!S(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
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
function a1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const T = Hl(y, o, s);
    if (!T) return;
    c.text.length > 0 && (c.text += " ");
    const C = c.text.length;
    T.spans.forEach(
      (v) => c.spans.push({ ...v, start: v.start + C, end: v.end + C })
    ), c.sentinels.push(...T.sentinels), c.text += T.text;
  }
  const l = i ? ru(c, i) : c.text, u = Or(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Ln(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Ar.serializeEditorState(
    { type: Sr, version: Cr, content: u },
    s
  ).root.children;
  if (Wo(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Om(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ci(d, o) === _i(e, o) && tu(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Nm(d, f);
  const m = c1(e), g = Rm(d);
  for (let y = 0; y < m.length && y < g.length; y++)
    m[y].sid !== void 0 && g[y].number === m[y].number && (g[y].sid = m[y].sid);
  return d;
}
function c1(e) {
  const t = [], r = (n) => {
    we(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : z(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Rm(e) {
  const t = [];
  for (const r of e) {
    Pp(r) && t.push(r);
    const n = Pr(r);
    n && t.push(...Rm(n));
  }
  return t;
}
function l1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Qg(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? ru(l, i) : l.text, f = Or(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Ln(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = p.content ?? [], g = Zg(m), y = e.getCategory() !== g, T = zg(e, m, g, s);
  if (T.failure !== void 0) {
    T.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : T.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const C = T.children;
  if (Wo(C) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const v = Om(l, t, n);
  if (!v) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ci(C, o) === _i(u, o) && tu(u, C, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Nm(C, v), { rebuilt: C, contentNodes: u, category: g, categoryChanged: y };
}
function bf(e) {
  return e.$?.textType;
}
function u1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && bf(e) === bf(t);
}
function d1(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && De(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function f1(e) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!j(t)) return;
  const r = e.getTextContent();
  if (rn(e)) return;
  const n = Ug.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function kf(e, t) {
  const r = e;
  r.marker = t, r.text = Vg(t, r.markerSyntax, r.nested);
}
function p1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!ve.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && kf(a.node, s);
  const c = n.getChildren().filter(w).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && kf(l.node, s);
}
function h1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = rm(e, i, n);
  if (!o) return;
  const a = r ? ru(o, r) : o.text, c = Or(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Ln(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Ar.serializeEditorState(
    { type: Sr, version: Cr, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Go(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ci(u, i) === _i(d, i) && tu(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function g1(e, t, r, n, i) {
  const s = o1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    j(y) ? c.set(y.getKey(), y) : Ne(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const T = se(y);
    if (!T?.isAttached()) continue;
    const C = fs(T);
    if (C) {
      if (d(C), w(T)) {
        const v = dm(T, r.getMarker);
        v && a.push(v);
      }
      if (j(C)) {
        const v = f1(T);
        v && u.set(C.getKey(), v);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((T) => f.has(T.getKey())) || (y.forEach((T) => {
      f.add(T.getKey()), o.delete(T.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = fs(s.node);
    y && d(y);
  }
  const p = d1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), g = /* @__PURE__ */ new Map();
  Pm(Fe().getChildren(), e.root.children, g);
  for (const y of u.values()) p1(y, g);
  for (const y of c.values()) {
    const T = g.get(y.getKey()), C = T ? Pr(T.node) : void 0;
    if (!T || !C) continue;
    const v = l1(y, g, r, m, s);
    if (!v) continue;
    if (v.categoryChanged) {
      const B = T.node;
      v.category === void 0 ? delete B.category : B.category = v.category;
    }
    if (!v.rebuilt) continue;
    const P = g.get(v.contentNodes[0].getKey());
    if (!P) continue;
    const M = C.indexOf(P.node);
    M < 0 || C.splice(M, v.contentNodes.length, ...v.rebuilt);
  }
  for (const y of o.values()) {
    const T = g.get(y[0].getKey());
    if (!T) continue;
    const C = a1(y, g, r, m, s);
    if (!C) continue;
    const v = T.siblings.indexOf(T.node);
    v < 0 || T.siblings.splice(v, y.length, ...C);
  }
  for (const y of l.values()) {
    const T = g.get(y.getKey());
    if (!T) continue;
    const C = 1 + Go(y).length, v = h1(y, r, s);
    if (!v) continue;
    const P = T.siblings.indexOf(T.node);
    P < 0 || T.siblings.splice(P, C, ...v);
  }
  for (const y of p) {
    const T = g.get(y.getKey());
    if (!T) continue;
    const C = T.siblings.indexOf(T.node);
    if (C < 0) continue;
    T.siblings.splice(C, 1);
    const v = T.siblings[C - 1], P = T.siblings[C], M = v && fi(v), B = P && fi(P);
    v && P && M !== void 0 && B !== void 0 && u1(v, P) && (v.text = M + B, T.siblings.splice(C, 1));
  }
  return gg(e, r.viewOptions);
}
function m1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = ki(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return K(() => {
    if (n)
      return r.registerNodeTransform(
        tt,
        (i) => y1(i, t)
      );
  }, [r, n, t]), null;
}
function y1(e, t) {
  e.getMarker() !== lr && (e.isEmpty() || Ft(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${lr}" (key ${e.getKey()})`
  ), e.setMarker(lr)));
}
function b1({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ae(), n = Q({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return K(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, mo(s, e) || k1(i, r, e);
  }, [r, e, t]), K(
    () => r.registerMutationListener(
      Ut,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Ac(r);
        Tf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Is(s) === Is(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), K(() => {
    const i = (a) => a.read(
      () => new Set(
        Fe().getChildren().filter(Ge).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Ac(r) || Tf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Is(a) === Is(c)
      }));
    };
    return Be(
      ...[Pt, hr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), K(
    () => r.registerCommand(
      dr,
      () => {
        const i = n.current;
        return i.phase === "idle" && _1(i, $m()), !1;
      },
      xt
    ),
    [r]
  ), K(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(dr, void 0));
    };
    return Be(
      r.registerMutationListener(St, i),
      r.registerMutationListener(dt, i)
    );
  }, [r]), K(() => {
    const i = () => M1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function k1(e, t, r) {
  if (T1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Ac(t);
  (!n || n === r.book) && t.update(() => Im(r.chapterNum, r.verseNum), {
    tag: _r
  });
}
function T1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => mo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function $m() {
  const e = q(), t = Lp(e);
  if (!t) return;
  const r = nu(), n = Ak(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = dl(t, e), { verseNum: o, verse: a } = Cx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Ac(e) {
  return e.getEditorState().read(() => nu()?.getCode() || void 0);
}
function nu() {
  return Fe().getChildren().find(pt);
}
function Tf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Ia(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Ia(e, t), e.phase = "navigating") : i && Ia(e, t), r && r !== e.scrRef.book && Um(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Ia(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Im(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: _r }
    );
  });
}
function Im(e, t) {
  const r = $m();
  if (r?.chapterNum === e && (r.verse ? Dm(t, r.verse) : r.verseNum === t))
    return;
  const n = Fe().getChildren(), i = Op(n, e);
  if (!i) return;
  const s = $k(n, i), o = Ek(s, !0);
  Rk(s, o);
  let a;
  try {
    a = yx(s, t);
  } catch {
    return;
  }
  a && (ce(a) ? !S(a.getFirstChild()) && xi(a) || Qt(a, 0) : x1(a));
}
function x1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ge(n)) {
    Qt(t, r);
    return;
  }
  const i = Ro(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (S(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = z(n) && !j(n) ? Lm(n) : void 0;
  s ? s.select(0, 0) : Qt(t, r);
}
function Lm(e) {
  const t = e.getFirstChild();
  if (S(t)) return t;
  if (z(t) && !j(t)) return Lm(t);
}
function Is(e) {
  return e.read(() => {
    const t = Fe().getChildren().find(Ge);
    return `${nu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function _1(e, t) {
  e.phase !== "navigating" && t && (C1(t, e.scrRef) || Um(e, S1(t, e.scrRef)));
}
function C1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Dm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Dm(e, t) {
  try {
    return Xc(e, t);
  } catch {
    return !1;
  }
}
function S1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const v1 = 8;
function Um(e, t) {
  return mo(t, e.scrRef) || e.pendingEchoes.some((r) => mo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > v1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function mo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function M1(e) {
  e.phase = "idle";
}
function E1(e) {
  return pt(e) ? `${e.__code}` : Ne(e) ? `${e.__marker} "${e.__number}"` : D(e) ? `${e.__marker}` : ys(e) ? `${e.__marker} "${e.__number}"` : ht(e) ? `${e.__caller}` : In(e) ? `${e.__marker} "${e.__number}"` : j(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ce(e) ? `${e.__marker}` : S(e) ? `"${e.__text}"${A1(e)}` : _e(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : we(e) ? `${e.__marker} "${e.__number}"` : "";
}
function A1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[ms]) : "";
}
function P1() {
  const [e] = ae();
  return /* @__PURE__ */ _(
    Xy,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: E1,
      editor: e
    }
  );
}
const Fm = Af(null), xf = 4;
function N1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Q(null), s = Pf(Fm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return K(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ _("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function O1({
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
  }, [n, s]), /* @__PURE__ */ _(Fm.Provider, { value: l, children: /* @__PURE__ */ _("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function w1({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Q(null), c = Q(null), [l, u] = de(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return K(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: g } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + xf}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), K(() => {
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
  }, [a, c, l, o]), K(() => {
    const f = () => {
      if (l) {
        const p = c.current, m = a.current;
        if (p !== null && m !== null) {
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + xf;
          y !== m.getBoundingClientRect().top && (m.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Te(kn, { children: [
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
          i && /* @__PURE__ */ _("span", { className: i }),
          t && /* @__PURE__ */ _("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ _("i", { className: "chevron-down" })
        ]
      }
    ),
    l && bn(
      /* @__PURE__ */ _(O1, { dropDownRef: a, onClose: d, children: s }),
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
function q1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ _(
    w1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + R1(t),
      buttonLabel: $1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Pc).map((n) => /* @__PURE__ */ Te(
        N1,
        {
          className: "item block-marker " + I1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ _("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ _("span", { className: "text usfm_" + n, children: Pc[n] })
          ]
        },
        n
      ))
    }
  );
}
function R1(e) {
  return e && e in Nc ? e : "ban";
}
function $1(e) {
  return e && e in Nc ? Nc[e] : "No Style";
}
function I1(e) {
  return e ? "active dropdown-item-active" : "";
}
function _f() {
  return /* @__PURE__ */ _("div", { className: "divider" });
}
const L1 = tn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
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
  return K(() => s.registerCommand(
    dr,
    (g, y) => (a(y), !1),
    Wt
  ), [s]), /* @__PURE__ */ Te(kn, { children: [
    /* @__PURE__ */ _(tg, { onStateChange: m }),
    /* @__PURE__ */ Te("div", { className: "toolbar", children: [
      /* @__PURE__ */ _(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Uf, void 0);
          },
          title: js ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Ff, void 0);
          },
          title: js ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ _("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ _(_f, {}),
      o === s && /* @__PURE__ */ Te(kn, { children: [
        /* @__PURE__ */ _(
          q1,
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
}), D1 = Fo(), U1 = {}, F1 = {};
function z1() {
  return /* @__PURE__ */ _("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
function La(e, t) {
  e && !e.getIsCollapsed() && (t.current = e.getKey());
}
const zm = tn(function({
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
  const d = Q(null), f = Q(null), p = Q(null), m = Q(null), g = Q(t), y = Q(void 0), T = Q(void 0), C = Q(void 0), v = Q(void 0), P = Q(!1), [M, B] = de(t), [E, R] = de(0), [$, re] = de(), {
    isReadonly: H = !1,
    structureProtectionMode: Ae = "off",
    hasExternalUI: ee = !1,
    hasSpellCheck: Re = !1,
    textDirection: be = "ltr",
    markerMenuTrigger: tr = "\\",
    view: ze,
    nodes: Ir,
    debug: Lr = !1,
    contextMenu: on,
    styleInfo: Y,
    markerSettleDelayMs: A
  } = a ?? F1, G = ze ?? D1, ue = cs(G) && (G.markerMode !== "hidden" || !G.hasSpacing || G.hasGutterParaMarkers || G.hasActiveTextFocusBox) ? {
    ...G,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : G, Me = Q(ue);
  wt(Me.current, ue) || (Me.current = ue);
  const X = Me.current, Se = Ke(() => Ir ?? U1, [Ir]), yr = Ke(() => on, [on]), Nt = Ke(
    () => cx(Y ?? Zs),
    [Y]
  ), an = Q(c);
  wt(an.current, c) || (an.current = c);
  const We = an.current, le = cs(X), gt = H || le, xe = ue !== G;
  K(() => {
    le && !H && We?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), xe && We?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), X?.markerMode === "visible" && !H && We?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [le, H, xe, We, X?.markerMode]);
  const br = Q(null), Pe = Ke(() => {
    if (X.markerMode !== "editable") return;
    const O = Y ?? Zs;
    return {
      getContext: () => br.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (U) => aE(
        O,
        U,
        Se.extraValidMarkers
      ),
      getEnterItems: (U) => cE(
        O,
        U,
        Se.extraValidMarkers
      ),
      apply: (U, V) => {
        const Z = br.current;
        Z && (V.trigger === "enter" ? Z.splitParagraphWithMarker(U.marker) : Z.applyMarkerMenuSelection(U, V));
      },
      commitTypedCloser: (U) => {
        br.current?.commitTypedCloser(U);
      }
    };
  }, [X, Y, Se.extraValidMarkers]), kr = (O) => {
    P.current || (P.current = !0, an.current?.warn(
      `Editor: cannot ${O} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Si = (O) => {
    if (le)
      throw new Error(
        `Cannot ${O} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, mt = (O) => {
    if (Si(O), gt) throw new Error(`Cannot ${O} in readonly mode`);
  }, Dn = () => !!d.current && eg(d.current), vi = Ke(
    () => ({
      namespace: "platformEditor",
      theme: { ...qg, showCharMarkerTitles: X.showCharMarkerTitles },
      editable: !gt,
      editorState: void 0,
      // Handling of errors during update
      onError(O) {
        throw O;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [Ze, ...le ? v_ : kl]
    }),
    [gt, le, X.showCharMarkerTitles]
  );
  Us.initialize(We);
  function Dr(O) {
    if (O !== void 0 && !PM(O, Se.extraValidMarkers))
      throw new Error(`Unsupported character marker '${O}'`);
  }
  const Un = he(() => {
    const O = d.current;
    if (!O) return g.current;
    const U = Vu(O), V = T.current;
    if ((!U || U.size === 0) && !V) return g.current;
    const Z = O.getEditorState(), pe = Z.toJSON();
    return Z.read(
      () => g1(
        pe,
        U ?? /* @__PURE__ */ new Set(),
        { viewOptions: X, getMarker: Nt, logger: We },
        V,
        C.current
      )
    ) ?? g.current;
  }, [X, Nt, We]), zt = {
    focus() {
      d.current?.focus();
    },
    isFocused() {
      const O = d.current?.getRootElement();
      return !!O && O.ownerDocument.activeElement === O;
    },
    undo() {
      d.current?.dispatchCommand(Uf, void 0);
    },
    redo() {
      d.current?.dispatchCommand(Ff, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      mt("cut"), d.current && Pl(d.current);
    },
    copy() {
      d.current && Al(d.current);
    },
    paste() {
      mt("paste"), d.current && Nl(d.current);
    },
    pastePlainText() {
      mt("paste as plain text"), d.current && Ol(d.current);
    },
    getUsj() {
      return Un();
    },
    commitPendingMarkerEdits() {
      const O = d.current;
      if (!O) return;
      const U = !Dn();
      U && Ds(O, gn), O.update(
        () => {
          U && Bt(gn), O.dispatchCommand(Em, void 0);
        },
        { discrete: !0 }
      ), U && Sa(O);
    },
    setTransientInput(O) {
      if (!O) {
        T.current = void 0;
        return;
      }
      const U = d.current?.getEditorState().read(() => {
        const V = q();
        return N(V) && V.isCollapsed() ? V.focus.key : void 0;
      });
      T.current = { input: O, nodeKey: U ?? C.current?.key };
    },
    setUsj(O) {
      if (!wt(g.current, O)) {
        g.current = O, T.current = void 0;
        const U = wt(M, O);
        B(O), U && R((V) => V + 1);
      }
    },
    applyUpdate(O, U = "remote") {
      if (le && U === "remote") {
        an.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Si("apply an update");
      const V = Dn();
      !V && d.current && Ds(d.current, gn), d.current?.update(
        () => {
          U === "remote" && Bt(Xi), V || Bt(gn), Q_(O, X, Se, We);
        },
        { discrete: !0 }
      ), !V && d.current && Sa(d.current);
      const Z = d.current?.getEditorState();
      if (!Z) return;
      const pe = Us.deserializeEditorState(Z, X);
      if (pe) {
        const rt = !wt(g.current, pe);
        if (rt && (g.current = pe), rt || !wt(M, pe)) {
          const Ot = rd(O, Z, "apply");
          v.current = pe, s?.(pe, O, U, Ot);
        }
      }
    },
    replaceEmbedUpdate(O, U) {
      const V = d.current?.read(() => $x(O, U));
      V ? this.applyUpdate(V) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${O}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (le) {
        kr("get the selection");
        return;
      }
      return d.current?.read(no);
    },
    setSelection(O) {
      if (le) {
        kr("set the selection");
        return;
      }
      d.current?.update(() => {
        const U = Uo(O);
        U !== void 0 && (ii(U), Bt(Yf));
      });
    },
    setAnnotation(O, U, V, Z, pe) {
      if (le) {
        kr("set an annotation");
        return;
      }
      let rt, Ot, Mi, Ei;
      typeof Z == "function" || Z === void 0 ? (rt = Z, Ot = pe) : (rt = Z.onClick, Ot = Z.onRemove, Mi = Z.onMouseEnter, Ei = Z.onMouseLeave), f.current?.setAnnotation(
        O,
        Ru(U),
        V,
        rt,
        Ot,
        Mi,
        Ei
      );
    },
    removeAnnotation(O, U) {
      f.current?.removeAnnotation(Ru(O), U);
    },
    formatPara(O) {
      mt("format a paragraph"), d.current?.update(
        () => {
          const U = q();
          if (!N(U)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${O}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          eb(U, () => ts(O));
          const V = q();
          if (!N(V)) return;
          const Z = /* @__PURE__ */ new Set();
          V.getNodes().forEach((pe) => {
            const rt = pe.getTopLevelElement();
            ce(rt) && Z.add(rt);
          }), Z.forEach((pe) => im(pe, O, X));
        },
        { discrete: !0 }
      );
    },
    getElementByKey(O) {
      return d.current?.read(
        () => d.current?.getElementByKey(O) ?? void 0
      );
    },
    removeCharacterMarker(O) {
      if (gt) throw new Error("Cannot remove character marker in readonly mode");
      Dr(O);
      let U = !1;
      return d.current?.update(
        () => {
          const V = q();
          N(V) && (U = Eg(V, O, X));
        },
        { discrete: !0 }
      ), U;
    },
    replaceCharacterMarker(O, U) {
      if (gt) throw new Error("Cannot replace character marker in readonly mode");
      Dr(O), Dr(U);
      let V = !1;
      return d.current?.update(
        () => {
          const Z = q();
          N(Z) && (V = zM(Z, O, U));
        },
        { discrete: !0 }
      ), V;
    },
    extendCharacterMarker(O, U) {
      if (gt) throw new Error("Cannot extend character marker in readonly mode");
      Dr(O), U?.forEach(
        (Z) => Dr(Z)
      );
      let V = !1;
      return d.current?.update(
        () => {
          const Z = q();
          N(Z) && (V = KM(
            Z,
            O,
            U,
            X
          ));
        },
        { discrete: !0 }
      ), V;
    },
    insertMarker(O) {
      if (gt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!d.current) return;
      if (!mc(O, Se.extraValidMarkers))
        throw new Error(`Unsupported marker '${O}'`);
      const U = yc(
        O,
        y,
        X,
        Se,
        We,
        void 0,
        Y
      );
      return U.action({ editor: d.current, reference: r }), U.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!H)
        return d.current?.getEditorState().read(() => XE());
    },
    applyMarkerMenuSelection(O, U) {
      if (H) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!d.current) return;
      if (O.kind !== "closeTag" && !mc(O.marker, Se.extraValidMarkers))
        throw new Error(`Unsupported marker '${O.marker}'`);
      let V;
      return d.current.update(() => {
        V = rA(O, U, r, {
          expandedNoteKeyRef: y,
          viewOptions: X,
          nodeOptions: Se,
          logger: c,
          styleInfo: Y
        });
      }), V;
    },
    splitParagraphWithMarker(O) {
      if (H) throw new Error("Cannot split paragraph in readonly mode");
      d.current && d.current.update(() => {
        um(O, X);
      });
    },
    commitTypedMarker(O, U) {
      if (H) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!d.current) return !1;
      let V = !1;
      return d.current.update(() => {
        V = tA(O, U), V || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), V;
    },
    commitTypedCloser(O) {
      if (H) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!d.current) return !1;
      let U = !1;
      return d.current.update(() => {
        U = lm(O), U || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), U;
    },
    insertNote(O, U, V) {
      mt("insert a note"), d.current?.update(
        () => {
          const Z = Nh(
            O,
            U,
            V,
            r,
            X,
            Se,
            We
          );
          La(Z, y);
        },
        { discrete: !0 }
      );
    },
    selectNote(O) {
      d.current?.update(() => {
        const U = Vr(O);
        U && (cd(U, X), La(U, y));
      });
    },
    selectAfterNote(O) {
      const U = d.current;
      if (!U) return;
      const V = !Dn();
      V && Ds(U, gn), U.update(
        () => {
          V && Bt(gn);
          const Z = Vr(O);
          Z && T_(Z);
        },
        { discrete: !0 }
      ), V && (Sa(U), i?.(U.getEditorState().read(() => no())));
    },
    selectNoteTextOffset(O, U) {
      d.current?.update(() => {
        const V = Vr(O);
        V && (x_(V, U) || cd(V, X), La(V, y));
      });
    },
    getNoteOps(O) {
      return d.current?.read(() => {
        const U = Vr(O);
        if (U)
          return hl(U);
      });
    },
    getNoteIndex(O) {
      const U = d.current;
      return U ? ac(U, () => gl(O)) : void 0;
    },
    getNoteKey(O) {
      const U = d.current;
      return U ? ac(U, () => Vr(O)?.getKey()) : void 0;
    },
    highlightNote(O) {
      p.current?.setHighlightedNote(O);
    },
    get toolbarEndRef() {
      return m;
    }
  };
  br.current = zt, bo(u, () => zt), K(() => {
    const O = d.current;
    if (O)
      return O.registerUpdateListener(({ editorState: U }) => {
        U.read(() => {
          const V = q();
          if (!N(V) || !V.isCollapsed()) return;
          const Z = V.focus.getNode();
          S(Z) && (C.current = { key: Z.getKey(), offset: V.focus.offset });
        });
      });
  }, []);
  const rr = he(
    (O, U, V, Z) => {
      if (le) return;
      const pe = Us.deserializeEditorState(O, X);
      if (pe) {
        const rt = !wt(g.current, pe);
        if (rt && (g.current = pe), rt || !wt(M, pe)) {
          const Ot = rd(Z, O);
          v.current = pe, s?.(pe, Z, "local", Ot);
        }
      }
    },
    [M, s, X, le]
  );
  K(() => {
    const O = d.current;
    if (!(!O || !s))
      return O.registerUpdateListener(({ tags: U, dirtyElements: V, dirtyLeaves: Z }) => {
        !U.has(Uc) && (V.size === 0 && Z.size === 0 || U.has(Xi) || !Vu(O)?.size) || queueMicrotask(() => {
          const pe = Un();
          !pe || wt(v.current, pe) || (v.current = pe, s(pe, void 0, "local", void 0));
        });
      });
  }, [s, Un]);
  const nr = he(
    (O) => {
      re(O.contextMarker), o?.(O);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Te(Kf, { initialConfig: vi, children: [
      /* @__PURE__ */ _(rS, { isEditable: !gt }),
      /* @__PURE__ */ Te("div", { className: "editor-container", children: [
        ee ? /* @__PURE__ */ _(tg, { onStateChange: nr }) : /* @__PURE__ */ _(
          "div",
          {
            className: "editor-toolbar-container" + (gt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ _(
              L1,
              {
                ref: m,
                editorRef: br,
                isReadonly: gt,
                onStateChange: nr
              }
            )
          }
        ),
        /* @__PURE__ */ Te("div", { className: "editor-inner", children: [
          /* @__PURE__ */ _(Bf, { editorRef: d }),
          /* @__PURE__ */ _(
            Zy,
            {
              contentEditable: /* @__PURE__ */ _(
                jf,
                {
                  className: `editor-input usfm ${X_(X).join(" ")}${X.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${X.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Re
                }
              ),
              placeholder: /* @__PURE__ */ _(z1, {}),
              ErrorBoundary: Vf
            }
          ),
          ee && /* @__PURE__ */ _(tS, {}),
          /* @__PURE__ */ _(Wf, {}),
          r && n && /* @__PURE__ */ _(b1, { scrRef: r, onScrRefChange: n }),
          r && !ee && /* @__PURE__ */ _(
            Ev,
            {
              trigger: tr,
              scrRef: r,
              contextMarker: $,
              getMarkerAction: (O) => yc(
                O,
                y,
                X,
                Se,
                We,
                void 0,
                Y
              ),
              editableHarness: Pe
            }
          ),
          /* @__PURE__ */ _(
            aS,
            {
              scripture: M,
              scriptureRef: g,
              nodeOptions: Se,
              editorAdaptor: Ar,
              viewOptions: X,
              logger: We
            },
            E
          ),
          /* @__PURE__ */ _(AS, { onChange: i }),
          /* @__PURE__ */ _(
            V_,
            {
              onChange: rr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: xb
            }
          ),
          /* @__PURE__ */ _(HM, { viewOptions: X }),
          /* @__PURE__ */ _(j_, { ref: f, logger: We }),
          /* @__PURE__ */ _(SC, { viewOptions: X }),
          /* @__PURE__ */ _(DC, {}),
          /* @__PURE__ */ _(BC, {}),
          X?.markerMode !== "editable" && /* @__PURE__ */ _(VC, { logger: We }),
          /* @__PURE__ */ _(JC, { options: yr }),
          /* @__PURE__ */ _(eS, {}),
          /* @__PURE__ */ _(oS, {}),
          /* @__PURE__ */ _(nA, {}),
          /* @__PURE__ */ _(
            XA,
            {
              viewOptions: X,
              getMarker: Nt,
              logger: We,
              markerSettleDelayMs: A,
              structureProtectionMode: Ae
            }
          ),
          X?.markerMode === "visible" && /* @__PURE__ */ _(s1, { viewOptions: X }),
          /* @__PURE__ */ _(
            n1,
            {
              styleInfo: Y,
              viewOptions: X,
              logger: We
            }
          ),
          /* @__PURE__ */ _(cS, { ref: p }),
          /* @__PURE__ */ _(
            lS,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Se,
              viewOptions: X,
              logger: We
            }
          ),
          /* @__PURE__ */ _(ES, {}),
          /* @__PURE__ */ _(iS, {}),
          /* @__PURE__ */ _(kC, {}),
          /* @__PURE__ */ _(gC, {}),
          /* @__PURE__ */ _(m1, { viewOptions: X, logger: We }),
          /* @__PURE__ */ _(PS, {}),
          /* @__PURE__ */ _(hv, { structureProtectionMode: Ae }),
          /* @__PURE__ */ _(gv, { textDirection: be }),
          /* @__PURE__ */ _(yv, {}),
          /* @__PURE__ */ _(vv, {}),
          l
        ] }),
        Lr && /* @__PURE__ */ _(P1, {})
      ] })
    ] }, X.verseLayout ?? "inline")
  );
}), JP = tn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ _(zm, { ref: r, ...i });
});
function Km() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function yo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Km() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function jm(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Km() : r,
    quote: e,
    type: "thread"
  };
}
function Cf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function K1(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Da(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class j1 {
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
    this._comments = t, Da(this);
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
          const c = Cf(a);
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
    this._comments = i, Da(this);
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
          const c = Cf(a);
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
    return this._comments = n, Da(this), t.type === "comment" ? {
      index: s,
      markedComment: K1(t)
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
    return t !== null ? t.doc.get("comments", xu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new _u(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new xu();
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
      gb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      xt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof mb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const m = p.insert, g = p.retain, y = p.delete, T = u.parent, C = u === r ? void 0 : T instanceof _u && this._comments.find((v) => v.id === T.get("id"));
              if (Array.isArray(m)) {
                const v = f;
                m.slice().reverse().forEach((P) => {
                  const M = P.get("id"), E = P.get("type") === "thread" ? jm(
                    P.get("quote"),
                    P.get("comments").toArray().map(
                      (R) => yo(
                        R.get("content"),
                        R.get("author"),
                        R.get("id"),
                        R.get("timeStamp"),
                        R.get("deleted")
                      )
                    ),
                    M
                  ) : yo(
                    P.get("content"),
                    P.get("author"),
                    M,
                    P.get("timeStamp"),
                    P.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(E, C, v);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let v = 0; v < y; v++) {
                  const P = C === void 0 || C === !1 ? this._comments[f] : C.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(P, C);
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
function B1(e) {
  const [t, r] = de(e.getComments());
  return K(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function V1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Q(null);
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
  }, [n, e]), /* @__PURE__ */ _("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Te("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function W1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return bn(
    /* @__PURE__ */ _(V1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Bm() {
  const [e, t] = de(null), r = he(() => {
    t(null);
  }, []), n = Ke(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ _(W1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const H1 = {
  ...qg,
  paragraph: "CommentEditorTheme__paragraph"
};
function G1(...e) {
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
  return /* @__PURE__ */ _(
    "button",
    {
      disabled: i,
      className: G1(
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
function J1({
  className: e
}) {
  return /* @__PURE__ */ _(jf, { className: e || "ContentEditable__root" });
}
function Y1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ _("div", { className: t || "Placeholder__root", children: e });
}
const Sf = Df("INSERT_INLINE_COMMAND");
function X1({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Q(null), s = he(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return K(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), ps(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ _("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ _("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ _("i", { className: "icon add-comment" }) }) });
}
function Q1({ onEscape: e }) {
  const [t] = ae();
  return K(() => t.registerCommand(
    Lf,
    (r) => e(r),
    ei
  ), [t, e]), null;
}
function Vm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ _(Kf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: H1
  }, children: /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ _(
      fb,
      {
        contentEditable: /* @__PURE__ */ _(J1, { className: e }),
        placeholder: /* @__PURE__ */ _(Y1, { children: s }),
        ErrorBoundary: Vf
      }
    ),
    /* @__PURE__ */ _(db, { onChange: n }),
    /* @__PURE__ */ _(Wf, {}),
    t !== !1 && /* @__PURE__ */ _(cb, {}),
    /* @__PURE__ */ _(Q1, { onEscape: r }),
    /* @__PURE__ */ _(lb, {}),
    i !== void 0 && /* @__PURE__ */ _(Bf, { editorRef: i })
  ] }) });
}
function Wm(e, t) {
  return he(
    (r, n) => {
      r.read(() => {
        e(pb()), t(!hb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function Z1({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Q(null), c = Ke(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Q(null), u = Gm(), d = he(() => {
    e.getEditorState().read(() => {
      const g = q();
      if (N(g)) {
        l.current = g.clone();
        const y = g.anchor, T = g.focus, C = tb(
          e,
          y.getNode(),
          y.offset,
          T.getNode(),
          T.offset
        ), v = a.current;
        if (C !== null && v !== null) {
          const { left: P, bottom: M, width: B } = C.getBoundingClientRect(), E = rb(e, C);
          let R = E.length === 1 ? P + B / 2 - 125 : P - 125;
          R < 10 && (R = 10), v.style.left = `${R}px`, v.style.top = `${M + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const $ = E.length, { container: re } = c, H = c.elements, Ae = H.length;
          for (let ee = 0; ee < $; ee++) {
            const Re = E[ee];
            let be = H[ee];
            be === void 0 && (be = document.createElement("span"), H[ee] = be, re.appendChild(be));
            const ze = `position:absolute;top:${Re.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Re.left}px;height:${Re.height}px;width:${Re.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            be.style.cssText = ze;
          }
          for (let ee = Ae - 1; ee >= $; ee--) {
            const Re = H[ee];
            re.removeChild(Re), H.pop();
          }
        }
      }
    });
  }, [e, c]);
  ps(() => {
    d();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), K(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        jm(g, [yo(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = Wm(i, o);
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ _(
      Vm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ _(en, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ _(
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
function eP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = Q(null), c = Gm(), l = Wm(i, o);
  return /* @__PURE__ */ Te(kn, { children: [
    /* @__PURE__ */ _(
      Vm,
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
      en,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(yo(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(Hy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ _("i", { className: "send" })
      }
    )
  ] });
}
function Hm({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Te(kn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Te("div", { className: "Modal__content", children: [
      /* @__PURE__ */ _(
        en,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ _(
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
function vf({
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Bm();
  return /* @__PURE__ */ Te("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ _("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Te("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ _("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Te(kn, { children: [
      /* @__PURE__ */ _(
        en,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ _(
              Hm,
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
function tP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = de(0), [l, u] = Bm(), d = Ke(
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
  }, [a]), /* @__PURE__ */ _("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Te(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const T = Array.from(g)[0], C = se(T);
                _e(C) && C.selectStart();
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
          /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ Te("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ _("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ _(
              en,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ _(
                    Hm,
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
            vf,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ _(
            eP,
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
      vf,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function rP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Q(null), o = r.length === 0;
  return /* @__PURE__ */ Te("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ _("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ _("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ _(
      tP,
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
function Gm() {
  const e = Hf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function nP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Hf(), [a] = ae(), c = Ke(() => {
    const R = new j1(a, s);
    return r && R.registerOnChange(r), t?.(R), R;
  }, [a, s, r, t]), l = B1(c), u = Ke(() => /* @__PURE__ */ new Map(), []), [d, f] = de(), [p, m] = de([]), [g, y] = de(!1), [T, C] = de(!1), { yjsDocMap: v } = o;
  K(() => {
    if (e) {
      const R = e("comments", v);
      return c.registerCollaboration(R);
    }
    return () => {
    };
  }, [c, e, v]);
  const P = he(() => {
    a.update(() => {
      const R = q();
      R !== null && (R.dirty = !0);
    }), y(!1);
  }, [a]), M = he(
    (R, $) => {
      if (R.type === "comment") {
        const re = c.deleteCommentOrThread(R, $);
        if (!re)
          return;
        const { markedComment: H, index: Ae } = re;
        c.addComment(H, $, Ae);
      } else {
        c.deleteCommentOrThread(R);
        const re = $ !== void 0 ? $.id : R.id, H = u.get(re);
        H !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const Ae of H) {
              const ee = se(Ae);
              _e(ee) && (ee.deleteID(Hr, re), ee.hasNoIDsForEveryType() && Hs(ee));
            }
          });
        });
      }
    },
    [c, a, u]
  ), B = he(
    (R, $, re, H) => {
      c.addComment(R, re), $ && (a.update(() => {
        N(H) && up(H, Hr, R.id);
      }), y(!1));
    },
    [c, a]
  );
  K(() => {
    const R = [];
    let $;
    for (const re of p) {
      const H = u.get(re);
      if (H !== void 0)
        for (const Ae of H) {
          const ee = a.getElementByKey(Ae);
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
  }, [p, a, u]), K(() => {
    if (!a.hasNodes([Ze]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const R = /* @__PURE__ */ new Map();
    return Be(
      zf(
        a,
        Ze,
        ($) => Zi($.getTypedIDs()),
        ($, re) => {
          for (const [H, Ae] of Object.entries($.getTypedIDs()))
            Ae.forEach((ee) => {
              re.addID(H, ee);
            });
        }
      ),
      a.registerMutationListener(
        Ze,
        ($) => {
          a.getEditorState().read(() => {
            for (const [re, H] of $) {
              const Ae = se(re);
              let ee = [];
              H === "destroyed" ? ee = R.get(re) ?? [] : _e(Ae) && (ee = Ae.getTypedIDs()[Hr] ?? []);
              for (const Re of ee) {
                let be = u.get(Re);
                R.set(re, ee), H === "destroyed" ? be !== void 0 && (be.delete(re), be.size === 0 && u.delete(Re)) : (be === void 0 && (be = /* @__PURE__ */ new Set(), u.set(Re, be)), be.has(re) || be.add(re));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: $, tags: re }) => {
        $.read(() => {
          const H = q();
          let Ae = !1, ee = !1;
          if (N(H)) {
            const Re = H.anchor.getNode();
            if (S(Re)) {
              const be = nk(Re, Hr, H.anchor.offset) ?? [];
              be !== null && (m(be), Ae = !0), H.isCollapsed() || (f(Re.getKey()), ee = !0);
            }
          }
          Ae || m((Re) => Re.length === 0 ? Re : []), ee || f(null), !re.has("collaboration") && N(H) && y(!1);
        });
      }),
      a.registerCommand(
        Sf,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), y(!0), !0;
        },
        xn
      )
    );
  }, [a, u]);
  const E = () => {
    a.dispatchCommand(Sf, void 0);
  };
  return /* @__PURE__ */ Te(kn, { children: [
    g && bn(
      /* @__PURE__ */ _(
        Z1,
        {
          editor: a,
          cancelAddComment: P,
          submitAddComment: B
        }
      ),
      document.body
    ),
    d != null && !g && bn(
      /* @__PURE__ */ _(
        X1,
        {
          anchorKey: d,
          editor: a,
          showComments: T,
          onAddComment: E
        }
      ),
      document.body
    ),
    n !== null && bn(
      /* @__PURE__ */ _(
        en,
        {
          className: `CommentPlugin_ShowCommentsButton ${T ? "active" : ""}`,
          onClick: () => C(!T),
          title: T ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ _("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    T && bn(
      /* @__PURE__ */ _(
        rP,
        {
          comments: l,
          submitAddComment: B,
          deleteCommentOrThread: M,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function iP() {
  const e = Q(void 0), t = he((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function sP(e, t) {
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
function oP(e, t) {
  K(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      sP(r, t);
    };
  }, [t, e]);
}
const YP = tn(function(t, r) {
  const n = Q(null), i = Q(!0), s = Q(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: m, view: g } = {} } = t, y = (m ?? !1) || cs(g), [T, C] = iP();
  oP(f, T), K(() => {
    if (process.env.NODE_ENV !== "production") {
      const M = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(M), p || console.warn(M);
    }
  }, [p]), bo(r, () => ({
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
    setTransientInput(M) {
      n.current?.setTransientInput(M);
    },
    setUsj(M) {
      n.current?.setUsj(M);
    },
    applyUpdate(M, B) {
      n.current?.applyUpdate(M, B);
    },
    replaceEmbedUpdate(M, B) {
      return n.current?.replaceEmbedUpdate(M, B);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(M) {
      n.current?.setSelection(M);
    },
    setAnnotation(M, B, E, R, $) {
      typeof R == "function" || R === void 0 ? n.current?.setAnnotation(M, B, E, R, $) : n.current?.setAnnotation(M, B, E, R);
    },
    removeAnnotation(M, B) {
      n.current?.removeAnnotation(M, B);
    },
    formatPara(M) {
      n.current?.formatPara(M);
    },
    getElementByKey(M) {
      return n.current?.getElementByKey(M);
    },
    removeCharacterMarker(M) {
      return n.current?.removeCharacterMarker(M) ?? !1;
    },
    replaceCharacterMarker(M, B) {
      return n.current?.replaceCharacterMarker(M, B) ?? !1;
    },
    extendCharacterMarker(M, B) {
      return n.current?.extendCharacterMarker(M, B) ?? !1;
    },
    insertMarker(M) {
      return n.current?.insertMarker(M);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(M, B) {
      return n.current?.applyMarkerMenuSelection(M, B);
    },
    splitParagraphWithMarker(M) {
      n.current?.splitParagraphWithMarker(M);
    },
    commitTypedMarker(M, B) {
      return n.current?.commitTypedMarker(M, B) ?? !1;
    },
    commitTypedCloser(M) {
      return n.current?.commitTypedCloser(M) ?? !1;
    },
    insertNote(M, B, E) {
      n.current?.insertNote(M, B, E);
    },
    selectNote(M) {
      n.current?.selectNote(M);
    },
    selectAfterNote(M) {
      n.current?.selectAfterNote(M);
    },
    selectNoteTextOffset(M, B) {
      n.current?.selectNoteTextOffset(M, B);
    },
    getNoteOps(M) {
      return n.current?.getNoteOps(M);
    },
    getNoteIndex(M) {
      return n.current?.getNoteIndex(M);
    },
    getNoteKey(M) {
      return n.current?.getNoteKey(M);
    },
    highlightNote(M) {
      n.current?.highlightNote(M);
    },
    setComments(M) {
      T.current?.setComments(M), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const v = he(
    (M, B, E, R) => {
      if (!u) return;
      const $ = T.current?.getComments();
      u(M, $, B, E, R);
    },
    [T, u]
  ), P = he(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const M = T.current?.getComments();
    l(M);
  }, [T, i, l]);
  return K(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ _(ub, { children: /* @__PURE__ */ Te(zm, { ref: n, onUsjChange: v, ...f, children: [
    /* @__PURE__ */ _(
      nP,
      {
        setCommentStore: C,
        onChange: P,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ _("div", { ref: s, className: "comment-container" })
  ] }) });
});
function yn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function aP(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function cP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const lP = /^[#\w().,%/\s-]+$/;
function Tr(e) {
  return e != null;
}
const uP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, dP = {
  left: "right",
  right: "left"
}, fP = "var(--usj-font-fallback, serif)";
function Jm(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${aP(i)}"`).join(", ")}, ${fP}`;
}
const Oc = ".editor-input.usfm", pP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function hP(e) {
  return pP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Oc}".`
  ), Oc);
}
function gP(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Jm(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (lP.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Tr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Tr(t.firstLineIndent) && s.push(`text-indent: ${yn(t.firstLineIndent * 20 * r)}vw`), Tr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${yn(t.leftMargin * 20 * r)}vw`), Tr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${yn(t.rightMargin * 20 * r)}vw`
  ), Tr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${yn(t.spaceBefore * r)}pt`), Tr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${yn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = uP[n ? dP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Mf = { c: 150, ca: 133, cp: 150 };
function Ef(e, t) {
  return e && Tr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function mP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Tr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Ef(e.markers.c, Mf.c);
  return ["ca", "cp"].map((i) => {
    const s = Ef(
      e.markers[i],
      Mf[i]
    ), o = yn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function XP(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Oc } = t, s = hP(i), o = [], a = [];
  e.defaultFont && a.push(Jm(e.defaultFont)), Tr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${yn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = gP(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${cP(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...mP(e, s)), o.join(`
`);
}
export {
  Uh as BLOCK_VERSE_VIEW_MODE,
  k as CategoryType,
  JP as Editorial,
  Yi as GENERATOR_NOTE_CALLER,
  Jf as HIDDEN_NOTE_CALLER,
  YP as Marginal,
  b as MarkerType,
  Dh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  _l as STANDARD_VIEW_MODE,
  Zs as defaultStyleInfo,
  GP as directionToNames,
  R_ as filterAndRankItems,
  XP as generateUsjCss,
  WP as getDefaultViewMode,
  Fo as getDefaultViewOptions,
  cE as getEnterMenuItems,
  aE as getMarkerMenuItems,
  HP as getViewMode,
  vl as getViewOptions,
  cs as isBlockVerseLayout,
  Br as isInsertEmbedOpOfType,
  H_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
