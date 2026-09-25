import { jsx as C, jsxs as _e, Fragment as xn } from "react/jsx-runtime";
import { forwardRef as qn, useState as fe, useRef as te, useCallback as ye, useEffect as j, useMemo as Be, memo as Ty, createContext as Ef, useContext as Af, Children as xy, isValidElement as _y, cloneElement as Cy, useImperativeHandle as Ac, useLayoutEffect as bs } from "react";
import { assertSafeKey as Je, isValidBookCode as Sy, MARKER_OBJECT_PROPS as vy, USJ_VERSION as _r, USJ_TYPE as Cr, isUsjTextContentLocation as My, indexesFromUsjJsonPath as Pf, isUsjAttributeKeyLocation as Ey, isUsjAttributeMarkerLocation as Ay, isUsjClosingAttributeMarkerLocation as Py, isUsjMarkerLocation as Ny, isUsjClosingMarkerLocation as wy, isUsjPropertyValueLocation as Oy, getUsjDocumentLocationTypeName as qy, usjJsonPathFromIndexes as fn, EMPTY_USJ as Nf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as We, $parseSerializedNode as ko, DecoratorNode as ks, ElementNode as er, isHTMLElement as Rn, createState as To, $getState as se, $setState as _t, $isRangeSelection as w, $isElementNode as z, $isTextNode as v, $getSelection as N, $isNodeSelection as mi, ParagraphNode as Pc, TextNode as Ve, $createTextNode as me, $getCommonAncestor as Ry, $createNodeSelection as Nc, $setSelection as Sr, $getEditor as _n, $isLineBreakNode as Ts, NODE_STATE_KEY as xs, $hasUpdateTag as $y, $getNodeByKey as ie, $getRoot as ze, $createRangeSelection as wc, $createPoint as mu, $getCharacterOffsets as Oc, KEY_DOWN_COMMAND as pr, COMMAND_PRIORITY_HIGH as qe, HISTORY_MERGE_TAG as wf, CLICK_COMMAND as ai, COMMAND_PRIORITY_LOW as ht, COMMAND_PRIORITY_EDITOR as Cn, isDOMNode as Qi, $getNearestNodeFromDOMNode as vr, CONTROLLED_TEXT_INSERTION_COMMAND as xo, PASTE_COMMAND as cr, COMMAND_PRIORITY_CRITICAL as De, CUT_COMMAND as Gr, DROP_COMMAND as _o, DELETE_CHARACTER_COMMAND as Of, DELETE_WORD_COMMAND as Iy, DELETE_LINE_COMMAND as Ly, $isDecoratorNode as _s, COPY_COMMAND as Cs, COMMAND_PRIORITY_NORMAL as ni, SELECTION_CHANGE_COMMAND as dr, getDOMSelection as qf, isSelectionWithinEditor as Dy, $createRangeSelectionFromDom as Rf, isDOMTextNode as Uy, BLUR_COMMAND as qc, $addUpdateTag as Jr, SKIP_DOM_SELECTION_TAG as Fy, CLEAR_HISTORY_COMMAND as Ky, $getPreviousSelection as zy, KEY_ESCAPE_COMMAND as Rc, BEFORE_INPUT_COMMAND as jy, DRAGSTART_COMMAND as $f, FOCUS_COMMAND as If, $isRootOrShadowRoot as By, CAN_UNDO_COMMAND as Vy, CAN_REDO_COMMAND as Wy, getDOMSelectionFromTarget as Hy, $onUpdate as Gy, KEY_ENTER_COMMAND as Lf, LineBreakNode as Df, $copyNode as Jy, $isRootNode as Yy, INSERT_PARAGRAPH_COMMAND as Ws, createCommand as Uf, HISTORIC_TAG as $c, createEditor as Xy, UNDO_COMMAND as Ff, REDO_COMMAND as Kf, CLEAR_EDITOR_COMMAND as Qy } from "lexical";
import { addClassNamesToElement as Vn, removeClassNamesFromElement as na, $findMatchingParent as rt, $dfsIterator as zf, $dfs as yi, mergeRegister as Fe, registerNestedElementResolver as jf, $unwrapNode as Ra, IS_APPLE as Zi } from "@lexical/utils";
import { useLexicalNodeSelection as Zy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as It } from "fast-equals";
import Ki from "quill-delta";
import { useLexicalComposerContext as le } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as eb, copyToClipboard as tb } from "@lexical/clipboard";
import { TreeView as rb } from "@lexical/react/LexicalTreeView";
import * as nb from "react-dom";
import { createPortal as Tn } from "react-dom";
import { LexicalComposer as Bf } from "@lexical/react/LexicalComposer";
import { ContentEditable as Vf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Wf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Hf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Gf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as ib } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as sb, createDOMRange as ob, createRectsFromDOMRange as ab } from "@lexical/selection";
import { autoUpdate as cb, computePosition as lb, shift as ub, flip as db } from "@floating-ui/dom";
import { $generateNodesFromDOM as fb } from "@lexical/html";
import { AutoFocusPlugin as pb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as hb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Jf, LexicalCollaboration as gb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as mb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as yb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as bb, $isRootTextContentEmpty as kb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Tb } from "@lexical/yjs";
import { Array as yu, Map as bu, YArrayEvent as xb } from "yjs";
const ia = (e) => We(ko(e)), _b = {
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
function Yf(e) {
  return _b[e];
}
const L = " ", Hs = "​", zt = L, Ic = `${L}|`, lr = "p", es = "+", Xf = "-", Gs = "chapter", $a = "verse", ku = "invalid", Cb = "text-spacing", Sb = "formatted-font", vb = "marker-", Qf = "external-usj-mutation", Zf = "selection-change", Yr = "cursor-change", Ia = "annotation-change", ts = "delta-change", ep = "marker-settle", Mb = [
  Qf,
  Zf,
  Yr,
  Ia,
  ts
], Sn = "zmsc-s", ii = "zmsc-e", Eb = [Sn, ii], Ab = [
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
  Sn,
  ii
], tp = 1, Lc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Pb = Lc.filter((e) => e !== "sid" && e !== "eid");
class Xt extends ks {
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
    return np().updateFromJSON(t);
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
      version: tp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function rp(e) {
  return Eb.includes(e);
}
function np(e, t, r, n, i) {
  return We(new Xt(e, t, r, n, void 0, i));
}
function Ge(e) {
  return e instanceof Xt;
}
const Dc = "f", Nb = [
  // Footnote
  Dc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function zi(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const wb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], ip = 1;
class Pe extends er {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Dc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (zi(t) === "crossref" ? Xf : es), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "note";
  }
  static clone(t) {
    const { __marker: r, __caller: n, __isCollapsed: i, __category: s, __unknownAttributes: o, __key: a } = t;
    return new Pe(r, n, i, s, o, a);
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
    return Uc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", zi(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", zi(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Rn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", zi(this.getMarker()))), { element: r };
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
      version: ip
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
  return { node: Uc(t, r, n) };
}
function Uc(e, t, r, n, i) {
  return We(new Pe(e, t, r, n, i));
}
function qb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Pe.isValidMarker(t) && e.classList.contains(Pe.getType());
}
function V(e) {
  return e instanceof Pe;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const La = {
  id: {
    category: T.FileIdentification,
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
    category: T.FileIdentification,
    type: b.Paragraph,
    description: "File markup version information",
    hasEndMarker: !1,
    children: void 0
  },
  ide: {
    category: T.FileIdentification,
    type: b.Paragraph,
    description: "File encoding information",
    hasEndMarker: !1,
    children: {
      Remarks: ["rem", "sts"]
    }
  },
  h: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Running header text for a book (basic)",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h1: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Running header text",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h2: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Running header text, left side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  h3: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Running header text, right side of page",
    hasEndMarker: !1,
    children: {
      Headers: ["toc1", "toc2", "toc3", "toca1", "toca2", "toca3"]
    }
  },
  toc1: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc2: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toc3: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  toca1: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Alternative language long table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca2: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Alternative language short table of contents text",
    hasEndMarker: !1,
    children: void 0
  },
  toca3: {
    category: T.Headers,
    type: b.Paragraph,
    description: "Alternative language book Abbreviation",
    hasEndMarker: !1,
    children: void 0
  },
  rem: {
    category: T.Remarks,
    type: b.Paragraph,
    description: "Comments and remarks",
    hasEndMarker: !1,
    children: void 0
  },
  sts: {
    category: T.Remarks,
    type: b.Paragraph,
    description: "Status of this file",
    hasEndMarker: !1,
    children: void 0
  },
  restore: {
    category: T.Remarks,
    type: b.Paragraph,
    description: "Project restore information",
    hasEndMarker: !1,
    children: void 0
  },
  imt: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 1 (if single level) (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt1: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt2: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt3: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 3",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imt4: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title, level 4 (usually within parenthesis)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if single level)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte1: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  imte2: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction major title at introduction end, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is: {
    category: T.Introduction,
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
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction section heading, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  is2: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction section heading, level 2",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      SpecialText: ["bk"]
    }
  },
  iot: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction outline title (basic)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  io: {
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
    type: b.Character,
    description: "Introduction references range for outline entry; for marking references separately",
    hasEndMarker: !0,
    children: void 0
  },
  ip: {
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction blank line",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"]
    }
  },
  iq: {
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
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
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction explanatory or bridge text (e.g. explanation of missing book in Short Old Testament)",
    hasEndMarker: !1,
    children: {
      Introduction: ["iqt"],
      CharacterStyling: ["no"]
    }
  },
  iqt: {
    category: T.Introduction,
    type: b.Character,
    description: "For quoted scripture text appearing in the introduction",
    hasEndMarker: !0,
    children: void 0
  },
  ie: {
    category: T.Introduction,
    type: b.Paragraph,
    description: "Introduction ending marker",
    hasEndMarker: !1,
    children: void 0
  },
  c: {
    category: T.DivisionMarks,
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
    category: T.DivisionMarks,
    type: b.Character,
    description: "Second (alternate) chapter number (for coding dual versification; useful for places where different traditions of chapter breaks need to be supported in the same translation)",
    hasEndMarker: !0,
    children: void 0
  },
  cp: {
    category: T.DivisionMarks,
    type: b.Paragraph,
    description: "Published chapter number (chapter string that should appear in the published text)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"]
    }
  },
  cl: {
    category: T.DivisionMarks,
    type: b.Paragraph,
    description: "Chapter label used for translations that add a word such as 'Chapter' before chapter numbers (e.g. Psalms). The subsequent text is the chapter label.",
    hasEndMarker: !1,
    children: void 0
  },
  cd: {
    category: T.DivisionMarks,
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
    category: T.DivisionMarks,
    type: b.Character,
    description: "A verse number (Necessary for normal paratext operation) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  va: {
    category: T.DivisionMarks,
    type: b.Character,
    description: "Second (alternate) verse number (for coding dual numeration in Psalms; see also NRSV Exo 22.1-4)",
    hasEndMarker: !0,
    children: void 0
  },
  vp: {
    category: T.DivisionMarks,
    type: b.Character,
    description: "Published verse marker (verse string that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  p: {
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
    type: b.Paragraph,
    description: "Letter Closing",
    hasEndMarker: !1,
    children: {
      SpecialText: ["tl", "sig", "pn", "png", "addpn", "add"]
    }
  },
  pmo: {
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Paragraphs,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
    type: b.Character,
    description: "Poetry text, Selah",
    hasEndMarker: !0,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  qa: {
    category: T.Poetry,
    type: b.Paragraph,
    description: "Poetry text, Acrostic marker/heading",
    hasEndMarker: !1,
    children: void 0
  },
  qac: {
    category: T.Poetry,
    type: b.Character,
    description: "Poetry text, Acrostic markup of the first character of a line of acrostic poetry",
    hasEndMarker: !0,
    children: void 0
  },
  qm: {
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
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
    category: T.Poetry,
    type: b.Paragraph,
    description: "Poetry text stanza break (e.g. stanza break) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  mt: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book (if single level)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt1: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book (if multiple levels) (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt2: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title usually occurring before the main title (basic)",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt3: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title occurring after the main title",
    hasEndMarker: !1,
    children: {
      Footnotes: ["f"],
      CrossReferences: ["x"]
    }
  },
  mt4: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A small secondary title sometimes occurring within parentheses",
    hasEndMarker: !1,
    children: void 0
  },
  mte: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  mte1: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "The main title of the book repeated at the end of the book, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mte2"]
    }
  },
  mte2: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A secondary title occurring before or after the 'ending' main title",
    hasEndMarker: !1,
    children: void 0
  },
  ms: {
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A major section division heading, level 3",
    hasEndMarker: !1,
    children: {
      TitlesHeadings: ["mr"],
      Footnotes: ["f", "fe"]
    }
  },
  mr: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A major section division references range heading (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  s: {
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "A section division references range heading",
    hasEndMarker: !1,
    children: void 0
  },
  r: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Parallel reference(s) (basic)",
    hasEndMarker: !1,
    children: void 0
  },
  sp: {
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
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
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if single level)",
    hasEndMarker: !1,
    children: void 0
  },
  sd1: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 1 (if multiple levels)",
    hasEndMarker: !1,
    children: void 0
  },
  sd2: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 2",
    hasEndMarker: !1,
    children: void 0
  },
  sd3: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 3",
    hasEndMarker: !1,
    children: void 0
  },
  sd4: {
    category: T.TitlesHeadings,
    type: b.Paragraph,
    description: "Vertical space used to divide the text into sections, level 4",
    hasEndMarker: !1,
    children: void 0
  },
  lh: {
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
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
    category: T.Lists,
    type: b.Character,
    description: "List entry total text",
    hasEndMarker: !0,
    children: void 0
  },
  lik: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry key text",
    hasEndMarker: !0,
    children: void 0
  },
  liv: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 1 content (if single value)",
    hasEndMarker: !0,
    children: void 0
  },
  liv1: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 1 content (if multiple values)",
    hasEndMarker: !0,
    children: void 0
  },
  liv2: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 2 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv3: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 3 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv4: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 4 content",
    hasEndMarker: !0,
    children: void 0
  },
  liv5: {
    category: T.Lists,
    type: b.Character,
    description: "Structured list entry value 5 content",
    hasEndMarker: !0,
    children: void 0
  },
  f: {
    category: T.Footnotes,
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
    category: T.Footnotes,
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
    category: T.Footnotes,
    type: b.Character,
    description: "The origin reference for the footnote (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  ft: {
    category: T.Footnotes,
    type: b.Character,
    description: "Footnote text, Protocanon (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fk: {
    category: T.Footnotes,
    type: b.Character,
    description: "A footnote keyword (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fq: {
    category: T.Footnotes,
    type: b.Character,
    description: "A footnote scripture quote or alternate rendering (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  fqa: {
    category: T.Footnotes,
    type: b.Character,
    description: "A footnote alternate rendering for a portion of scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  fl: {
    category: T.Footnotes,
    type: b.Character,
    description: "A footnote label text item, for marking or 'labelling' the type or alternate translation being provided in the note.",
    hasEndMarker: !0,
    children: void 0
  },
  fw: {
    category: T.Footnotes,
    type: b.Character,
    description: "A footnote witness list, for distinguishing a list of sigla representing witnesses in critical editions.",
    hasEndMarker: !0,
    children: void 0
  },
  fp: {
    category: T.Footnotes,
    type: b.Character,
    description: "A Footnote additional paragraph marker",
    hasEndMarker: !0,
    children: void 0
  },
  fv: {
    category: T.Footnotes,
    type: b.Character,
    description: "A verse number within the footnote text",
    hasEndMarker: !0,
    children: void 0
  },
  fdc: {
    category: T.Footnotes,
    type: b.Character,
    description: "Footnote text, applies to Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  fm: {
    category: T.Footnotes,
    type: b.Character,
    description: "An additional footnote marker location for a previous footnote",
    hasEndMarker: !0,
    children: void 0
  },
  x: {
    category: T.CrossReferences,
    type: b.Note,
    description: "A list of cross references (basic)",
    hasEndMarker: !0,
    children: {
      CrossReferences: ["xo", "xop", "xt", "xta", "xk", "xq", "xot", "xnt", "xdc"],
      CharacterStyling: ["it", "bd", "bdit", "em", "sc", "sup"]
    }
  },
  xo: {
    category: T.CrossReferences,
    type: b.Character,
    description: "The cross reference origin reference (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xop: {
    category: T.CrossReferences,
    type: b.Character,
    description: "Published cross reference origin reference (origin reference that should appear in the published text)",
    hasEndMarker: !0,
    children: void 0
  },
  xt: {
    category: T.CrossReferences,
    type: b.Character,
    description: "The cross reference target reference(s), protocanon only (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  xta: {
    category: T.CrossReferences,
    type: b.Character,
    description: "Cross reference target references added text",
    hasEndMarker: !0,
    children: void 0
  },
  xk: {
    category: T.CrossReferences,
    type: b.Character,
    description: "A cross reference keyword",
    hasEndMarker: !0,
    children: void 0
  },
  xq: {
    category: T.CrossReferences,
    type: b.Character,
    description: "A cross-reference quotation from the scripture text",
    hasEndMarker: !0,
    children: void 0
  },
  xot: {
    category: T.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), Old Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xnt: {
    category: T.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), New Testament only",
    hasEndMarker: !0,
    children: void 0
  },
  xdc: {
    category: T.CrossReferences,
    type: b.Character,
    description: "Cross-reference target reference(s), Deuterocanon only",
    hasEndMarker: !0,
    children: void 0
  },
  rq: {
    category: T.CrossReferences,
    type: b.Character,
    description: "A cross-reference indicating the source text for the preceding quotation.",
    hasEndMarker: !0,
    children: void 0
  },
  qt: {
    category: T.SpecialText,
    type: b.Character,
    description: "For Old Testament quoted text appearing in the New Testament (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  nd: {
    category: T.SpecialText,
    type: b.Character,
    description: "For name of deity (basic)",
    hasEndMarker: !0,
    children: void 0
  },
  tl: {
    category: T.SpecialText,
    type: b.Character,
    description: "For transliterated words",
    hasEndMarker: !0,
    children: void 0
  },
  dc: {
    category: T.SpecialText,
    type: b.Character,
    description: "Deuterocanonical/LXX additions or insertions in the Protocanonical text",
    hasEndMarker: !0,
    children: void 0
  },
  bk: {
    category: T.SpecialText,
    type: b.Character,
    description: "For the quoted name of a book",
    hasEndMarker: !0,
    children: void 0
  },
  sig: {
    category: T.SpecialText,
    type: b.Character,
    description: "For the signature of the author of an Epistle",
    hasEndMarker: !0,
    children: void 0
  },
  pn: {
    category: T.SpecialText,
    type: b.Character,
    description: "For a proper name",
    hasEndMarker: !0,
    children: void 0
  },
  png: {
    category: T.SpecialText,
    type: b.Character,
    description: "For a geographic proper name",
    hasEndMarker: !0,
    children: void 0
  },
  addpn: {
    category: T.SpecialText,
    type: b.Character,
    description: "For chinese words to be dot underline & underline",
    hasEndMarker: !0,
    children: void 0
  },
  wj: {
    category: T.SpecialText,
    type: b.Character,
    description: "For marking the words of Jesus",
    hasEndMarker: !0,
    children: void 0
  },
  k: {
    category: T.SpecialText,
    type: b.Character,
    description: "For a keyword",
    hasEndMarker: !0,
    children: void 0
  },
  sls: {
    category: T.SpecialText,
    type: b.Character,
    description: "To represent where the original text is in a secondary language or from an alternate text source",
    hasEndMarker: !0,
    children: void 0
  },
  ord: {
    category: T.SpecialText,
    type: b.Character,
    description: "For the text portion of an ordinal number",
    hasEndMarker: !0,
    children: void 0
  },
  add: {
    category: T.SpecialText,
    type: b.Character,
    description: "For a translational addition to the text",
    hasEndMarker: !0,
    children: void 0
  },
  lit: {
    category: T.SpecialText,
    type: b.Paragraph,
    description: "For a comment or note inserted for liturgical use",
    hasEndMarker: !1,
    children: void 0
  },
  no: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, use normal text",
    hasEndMarker: !0,
    children: void 0
  },
  it: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, use italic text",
    hasEndMarker: !0,
    children: void 0
  },
  bd: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, use bold text",
    hasEndMarker: !0,
    children: void 0
  },
  bdit: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, use bold + italic text",
    hasEndMarker: !0,
    children: void 0
  },
  em: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, use emphasized text style",
    hasEndMarker: !0,
    children: void 0
  },
  sc: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, for small capitalization text",
    hasEndMarker: !0,
    children: void 0
  },
  sup: {
    category: T.CharacterStyling,
    type: b.Character,
    description: "A character style, for superscript text. Typically for use in critical edition footnotes.",
    hasEndMarker: !0,
    children: void 0
  },
  pb: {
    category: T.Breaks,
    type: b.Paragraph,
    description: "Page Break used for new reader portions and children's bibles where content is controlled by the page",
    hasEndMarker: !1,
    children: void 0
  }
}, pn = {
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
  p: { children: pn },
  q: { children: pn },
  q1: { children: pn },
  q2: { children: pn },
  q3: { children: pn },
  q4: { children: pn },
  b: { children: pn },
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
    category: T.SpecialFeatures,
    type: b.Character,
    description: "A wordlist/glossary/dictionary entry marker for study/analysis purposes",
    hasEndMarker: !0
  },
  rb: {
    category: T.SpecialFeatures,
    type: b.Character,
    description: "A ruby glossing marker for study/analysis purposes",
    hasEndMarker: !0
  },
  jmp: {
    category: T.SpecialFeatures,
    type: b.Character,
    description: "A hyperlink marker for study/analysis purposes",
    hasEndMarker: !0
  },
  // The generated table has no `fig`, but `usfm.sty` does (and so does the stylesheet data every
  // project supplies). Without an entry here, a document parsed BEFORE its project stylesheet
  // resolves falls back to this table, reads `\fig` as an unknown marker, and breaks the figure
  // into its own paragraph with the closer stranded as unmatched.
  fig: {
    category: T.SpecialFeatures,
    type: b.Character,
    description: "Illustration [Columns to span, height, filename, caption text]",
    hasEndMarker: !0
  }
};
function ur(e) {
  const t = Object.hasOwn(La, e) ? La[e] : void 0, r = Object.hasOwn(Tu, e) ? Tu[e] : void 0;
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
const sp = "v", op = "c", hn = "fig", xu = "tr", Da = "esb", ap = "esbe", _u = "periph", Cu = "alt", Su = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Rb = {
  "": "start",
  c: "center",
  r: "end"
};
function vu(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Mu(e) {
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
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Hs && s + 1 < e.length && Mu(e[s + 1]) || (Mu(o) ? (r || (i = t.length, t += o), r = !0) : $b.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
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
function Fc(e) {
  return Ub.test(e) || rp(e);
}
function sa(e, t) {
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
      const g = e.indexOf("\\", i), y = g === -1 ? e.length : g;
      a(Ib(e.slice(i, y))), i = y;
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
    if (l === sp) {
      const { word: g, next: y } = sa(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === op) {
      const { word: g, next: y } = sa(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && Pe.isValidMarker(l)) {
      const { word: g, next: y } = sa(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && Fc(l)) {
      const g = Gb(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Js(p) ? (d(), Js(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Da || l === ap ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
  }
  return n;
}
const Eu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Js(e) {
  return Object.hasOwn(Eu, e) ? Eu[e] : void 0;
}
function Kb(e) {
  return Js(e) !== void 0;
}
const zb = /([-\w]+)\s*=\s*"(.*?)"/g, jb = /[\s\u200B]*[\n\r][\s\u200B]*/g, cp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Co(e) {
  return cp[e];
}
const Bb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
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
function rs(e, t, r = cp[t]) {
  const n = e.replace(jb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(zb)];
  if (s.length > 0) {
    if (!Vb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Bb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function So(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Wb(e) {
  const t = wr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
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
  const s = rs(e.slice(n + 1, i), r, So(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Gb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = rs(s.slice(o + 1), r, So(r)), !a && s.slice(o + 1).trim() !== "")) {
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
function or(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", L);
}
function Fr(e) {
  return e.content || (e.content = []), e.content;
}
function wr(e, t) {
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
  }, g = (Q) => {
    const A = m();
    typeof Q == "string" && typeof A[A.length - 1] == "string" ? A[A.length - 1] = A[A.length - 1] + Q : A.push(Q);
  }, y = (Q) => {
    for (let A = Q; A < o.length; A += 1) {
      const G = o[A].object;
      G.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, _ = (Q) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, Q || (s.closed = "false"), s = void 0);
  }, S = () => {
    c = void 0, l = void 0;
  }, P = (Q, A, G) => {
    k();
    const [, de, Me, Z] = G, ve = {
      type: "table:cell",
      marker: Z ? A.slice(0, A.indexOf("-")) : A,
      align: Rb[de],
      content: []
    };
    Z && (ve.colspan = String(Number(Z) + 1 - Number(Me))), Fr(Q).push(ve), i = ve;
  }, E = (Q) => {
    u && (Q || (u.closed = "false"), u = void 0);
  }, B = () => {
    d = void 0;
  };
  let M, R = "", $;
  const U = () => {
    R && g(or(R)), R = "";
  }, I = (Q = !1) => {
    M?.type === "sidebar" ? R = "" : Q && R.endsWith(`
`) && (R = R.slice(0, -1)), M = void 0, U();
  }, re = () => {
    if (!$)
      return;
    const Q = { type: "char", marker: $.marker, content: [] };
    $.value && (Q.content = [or($.value)]), m().push(Q), o.push({ object: Q }), $ = void 0;
  }, J = (Q, A) => {
    p = !1, S(), k(), _(!1), i = { type: "para", marker: Q, content: [] }, A && (i.content = [or(A)]), f().push(i);
  }, be = () => {
    $ && (J($.marker, $.value), $ = void 0);
  };
  let ge;
  const dt = (Q) => {
    if (!ge)
      return;
    let { value: A } = ge;
    ge = void 0, Q && A.endsWith(`
`) && (A = A.slice(0, -1));
    const G = A.indexOf("|"), de = G >= 0 ? rs(A.slice(G + 1), _u) : void 0, Me = G >= 0 ? A.slice(0, G) : A, Z = G >= 0 && (!de || !!Me && !!de[Cu]), ve = Z ? void 0 : de, yr = Z ? A : Me, $t = {
      type: "periph",
      ...yr ? { [Cu]: or(yr) } : {},
      ...ve
    };
    $t.content = [], f().push($t), d = $t, i = void 0;
  };
  let je;
  const Lr = () => {
    if (je) {
      if (je.shape === "para")
        J(hn, je.value);
      else {
        const Q = { type: "char", marker: hn, content: [] };
        je.value && (Q.content = [or(je.value)]), m().push(Q), o.push({ object: Q });
      }
      je = void 0;
    }
  }, Dr = Fb(e, t?.getMarker ?? ur, n);
  for (let Q = 0; Q < Dr.length; Q++) {
    const A = Dr[Q];
    if ($) {
      if (A.kind === "text") {
        $.value += A.text;
        continue;
      }
      if ($.shape === "char" && A.kind === "end" && A.marker.replace(/^\+/, "") === $.marker) {
        if ($.value.trim() === "") {
          m().push({ type: "char", marker: $.marker, content: [] }), $ = void 0, I();
          continue;
        }
        Object.assign($.target, {
          [$.attrName]: or($.value.trim())
        });
        const G = $.marker;
        if ($ = void 0, G === "ca") {
          const de = Dr[Q + 1];
          de?.kind === "text" && /^[\s\u200B]*$/.test(de.text) && Q++;
        }
        continue;
      }
      if ($.shape === "para" && (A.kind === "para" || A.kind === "chapter")) {
        const G = $.value.replace(/[\s\u200B]+$/, "");
        G === "" ? (J($.marker), $ = void 0) : (Object.assign($.target, { [$.attrName]: or(G) }), $ = void 0);
      } else {
        M = void 0, (A.kind === "para" || A.kind === "chapter") && $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), $.shape === "para" ? be() : re(), Q--;
        continue;
      }
    }
    if (ge) {
      if (A.kind === "text" || A.kind === "optbreak") {
        ge.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      dt(A.kind === "para" || A.kind === "chapter"), Q--;
      continue;
    }
    if (je) {
      if (A.kind === "text" || A.kind === "optbreak") {
        je.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      if (A.kind === "end" && A.marker.replace(/^\+/, "") === hn) {
        const G = je.value.indexOf("|"), de = G >= 0 ? rs(je.value.slice(G + 1), hn) : void 0;
        if (de) {
          const Me = {};
          for (const [yr, $t] of Object.entries(de))
            Me[yr === "src" ? "file" : yr] = $t;
          const Z = {
            type: "figure",
            marker: hn,
            ...Me
          }, ve = je.value.slice(0, G);
          ve && (Z.content = [or(ve)]), g(Z), je = void 0;
          continue;
        }
      }
      Lr(), Q--;
      continue;
    }
    if (M)
      if (A.kind === "text") {
        if (A.text.includes(`
`) && /^[\s\u200B]*$/.test(A.text)) {
          R += A.text;
          continue;
        }
        I();
      } else if (A.kind === "charOpen" || A.kind === "para") {
        const G = A.kind === "para" || !A.isNested ? Js(A.marker) : void 0;
        if (G && G.targetTypes.includes(M.type)) {
          R = "", $ = {
            target: M,
            attrName: G.attrName,
            marker: A.marker,
            shape: G.shape,
            value: ""
          };
          continue;
        }
        I(A.kind === "para");
      } else
        I(A.kind === "chapter");
    if (!s && !n && (A.kind === "charOpen" && !A.isNested && A.marker === hn || A.kind === "para" && A.marker === hn)) {
      k(), je = { shape: A.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (A.kind) {
      case "text": {
        let G = A.text;
        if (!s && G.endsWith(`
`)) {
          const de = Dr[Q + 1];
          (de === void 0 || de.kind === "para" || de.kind === "chapter") && (G = G.slice(0, -1));
        }
        G && g(or(G));
        break;
      }
      case "para": {
        const G = !s && !n;
        if (G && A.marker === xu) {
          k(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: xu, content: [] }, Fr(c).push(l), i = l, p = !1;
          break;
        }
        if (G && l) {
          const de = Su.exec(A.marker);
          if (de && vu(de)) {
            P(l, A.marker, de);
            break;
          }
        }
        if (S(), !n && A.marker === Da) {
          k(), _(!1), E(!1);
          const de = {
            type: "sidebar",
            marker: Da,
            content: []
          };
          f().push(de), u = de, i = void 0, M = u, p = !1;
          break;
        }
        if (A.marker === ap && u) {
          k(), _(!1), E(!0), i = void 0;
          break;
        }
        if (!n && A.marker === _u) {
          k(), _(!1), E(!1), B(), ge = { value: "" }, i = void 0, p = !1;
          break;
        }
        J(A.marker);
        break;
      }
      case "verse": {
        _(!1);
        const G = { type: "verse", marker: sp, number: A.number };
        g(G), M = G;
        break;
      }
      case "chapter": {
        k(), _(!1), S(), E(!1), B(), i = void 0;
        const G = {
          type: "chapter",
          marker: op,
          number: A.number
        };
        r.push(G), M = G, p = !0;
        break;
      }
      case "note": {
        _(!1);
        const G = m();
        s = { type: "note", marker: A.marker, caller: A.caller, content: [] }, a = o.length, G.push(s), M = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !A.isNested) {
          const Me = Su.exec(A.marker);
          if (Me && vu(Me)) {
            P(l, A.marker, Me);
            break;
          }
        }
        if (!A.isNested) {
          const Me = s ? a : 0;
          y(Me), o.length = Me;
        }
        const G = m(), de = { type: "char", marker: A.marker, content: [] };
        G.push(de), o.push({ object: de });
        break;
      }
      case "end": {
        const G = A.marker.replace(/^\+/, ""), de = s ? a : 0, Me = o.findLastIndex((Z, ve) => ve >= de && Z.object.marker === G);
        Me >= 0 ? (Jb(o[Me].object), y(Me + 1), o.length = Me) : s && s.marker === G ? _(!0) : (y(de), o.length = de, g({ type: "unmatched", marker: `${A.marker}*` }));
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
  if (ge && dt(!0), je && Lr(), $)
    if ($.shape === "para") {
      const Q = $.value.replace(/[\s\u200B]+$/, "");
      Q === "" ? J($.marker) : Object.assign($.target, { [$.attrName]: or(Q) }), $ = void 0;
    } else
      $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), re();
  k(), _(!1), E(!1);
  const cn = (Q) => {
    for (const A of Q)
      typeof A != "string" && A.content && (cn(A.content), A.content.length === 0 && delete A.content);
  };
  return cn(r), r;
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = rs(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const vn = To("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Xr = To("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ce = To("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), hr = "marker-trailing-space", lp = 1, Yb = "marker", Kc = To("isGutterMarker", {
  parse: (e) => e === !0
});
class Or extends ks {
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
    return new Or(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => Qb(t) ? {
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
      version: lp
    };
  }
  // Mutation
  /**
   * Stays `false` even though a paragraph's gutter glyph can be selected: it is selected only by a
   * click (`ParaMarkerSelectionPlugin`, shared-react), and reaching it by keyboard is left to the
   * arrow-navigation work. Returning `true` would also change Lexical's native
   * Backspace-beside-a-decorator behavior at every paragraph start, where `StructureKeyboardPlugin`
   * arms paragraph merges.
   */
  isKeyboardSelectable() {
    return !1;
  }
}
function Xb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Mr(t, r) };
}
function Mr(e, t) {
  return We(new Or(e, t));
}
function up(e) {
  return _t(Mr(Yb, e), Kc, !0);
}
function bi(e) {
  return Qt(e) && se(e, Kc);
}
function Qb(e) {
  return e?.tagName === "span";
}
function Qt(e) {
  return e instanceof Or;
}
function dp(e) {
  return e?.type === Or.getType();
}
const Hr = "internal-comment", Zb = [Hr], fp = Object.freeze({}), Ua = Object.freeze({}), Fa = Object.freeze({}), Ka = Object.freeze({}), za = Object.freeze({}), ek = 1, Wn = /* @__PURE__ */ new Map(), qi = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map();
class tt extends er {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = fp, r, n, i, s, o) {
    super(o), this.__typedIDs = Is(t), this.__typedOnClicks = oa(r), this.__typedOnRemoves = aa(n), this.__typedOnMouseEnters = ca(i), this.__typedOnMouseLeaves = la(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Is(t.__typedIDs), n = oa(t.__typedOnClicks), i = aa(t.__typedOnRemoves), s = ca(t.__typedOnMouseEnters), o = la(t.__typedOnMouseLeaves);
    return new tt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return Zb.includes(t);
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
      version: ek
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Vn(n, gn(t.theme.typedMark, a)), c.length > 1 && Vn(n, gn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Vn(n, gn("annotationId", l));
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
      c !== l && (c === 0 ? l === 1 && Vn(r, u) : l === 0 && na(r, u), c === 1 ? l === 2 && Vn(r, d) : l === 1 && na(r, d));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || na(r, gn("annotationId", m));
      for (const m of a)
        f.has(m) || Vn(r, gn("annotationId", m));
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
    return Se(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Is(r.__typedIDs);
    r.__typedIDs = Is(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Ys(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = oa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Se(t) ? Wn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = aa(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Se(t) ? qi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = ca(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Se(t) ? Hn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = la(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Se(t) ? Gn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Se(a))
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
    if (!Se(n))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Ys(s);
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
    if (!w(r) || n === "html")
      return !1;
    const i = r.anchor, s = r.focus, o = i.getNode(), a = s.getNode(), l = r.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const r = this.getWritable(), n = this.getTypedIDs();
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Wn.delete(r.getKey()), qi.delete(r.getKey()), Hn.delete(r.getKey()), Gn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
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
  getOrCreateDOMMouseLeaveListener(t) {
    return this.__domOnMouseLeaveListener || (this.__domOnMouseLeaveListener = (r) => {
      this.handleDOMMouseLeave(r, t);
    }), this.__domOnMouseLeaveListener;
  }
  handleDOMMouseLeave(t, r) {
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
  ensureOnClickMapMutable() {
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ua) {
      const t = Wn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      Wn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    Wn.set(this.getKey(), this.__typedOnClicks);
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
    const i = Kr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Kr(this.__typedOnClicks, t);
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
      const t = qi.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      qi.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    qi.set(this.getKey(), this.__typedOnRemoves);
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
    const i = Kr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Kr(this.__typedOnRemoves, t);
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === Ka) {
      const t = Hn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Hn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Hn.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = Kr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Kr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === Ka) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === za) {
      const t = Gn.get(this.getKey());
      this.__typedOnMouseLeaves = t ?? {};
    }
    return this.__typedOnMouseLeaves;
  }
  syncTypedOnMouseLeavesToRegistry() {
    if (!this.__typedOnMouseLeaves || Object.keys(this.__typedOnMouseLeaves).length === 0) {
      Gn.delete(this.getKey()), this.__typedOnMouseLeaves && Object.keys(this.__typedOnMouseLeaves).length === 0 && (this.__typedOnMouseLeaves = void 0);
      return;
    }
    Gn.set(this.getKey(), this.__typedOnMouseLeaves);
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
    const i = Kr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Kr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === za) {
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
    const i = tk(t, r);
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
    for (; Se(t) && Pu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Se(r) && Pu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = rk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = nk(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = ik(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = sk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Is(e = fp) {
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
function oa(e) {
  if (!e || e === Ua)
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
function aa(e) {
  if (!e || e === Fa)
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
function ca(e) {
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
function la(e) {
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
function Kr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Au(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function tk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Pu(e, t) {
  const r = Au(e), n = Au(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function nk(e, t) {
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
function gn(e, t) {
  return `${e}-${t}`;
}
function Nu(e) {
  return `external-${e}`;
}
function ns(e, t, r, n, i) {
  return We(new tt(e, t, r, n, i));
}
function Se(e) {
  return e instanceof tt;
}
function pp(e) {
  return e?.type === tt.getType();
}
function Ys(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function hp(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, u = a.length, d = e.isBackward(), f = d ? l : c, p = d ? c : l;
  let m, g;
  for (let y = 0; y < u; y++) {
    const k = a[y];
    if (z(g) && g.isParentOf(k))
      continue;
    const _ = y === 0, S = y === u - 1;
    let P = null;
    if (v(k)) {
      const E = k.getTextContentSize(), B = _ ? f : 0, M = S ? p : E;
      if (B === 0 && M === 0)
        continue;
      const R = k.splitText(B, M);
      P = R.length > 1 && (R.length === 3 || _ && !S || M === E) ? R[1] : R[0];
    } else {
      if (Se(k))
        continue;
      z(k) && k.isInline() && (P = k);
    }
    if (P !== null) {
      if (P && P.is(m))
        continue;
      const E = P.getParent();
      (E == null || !E.is(m)) && (g = void 0), m = E, g === void 0 && (g = ns(), g.addID(t, r, n, i, s, o), P.insertBefore(g)), g.append(P);
    } else
      m = void 0, g = void 0;
  }
  t === Hr && z(g) && (d ? g.selectStart() : g.selectEnd());
}
function ok(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Se(n))
      return n.getTypedIDs()[t];
    if (v(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Se(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const ak = ["type", "marker", "content"], ja = "unknown", gp = 1, ck = /* @__PURE__ */ new Set(["optbreak", "ref"]);
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
      [ja]: (t) => uk(t) ? {
        conversion: lk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return zc().updateFromJSON(t);
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
    return ck.has(this.getTag());
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
    if (mi(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function lk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: zc(t, r) };
}
function zc(e, t, r) {
  return We(new $n(e, t, r));
}
function uk(e) {
  return e?.tagName.toLowerCase() === ja;
}
function $e(e) {
  return e instanceof $n;
}
const mp = 1, dk = "attribute-run";
function ua(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class qr extends er {
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
    t.classList.add(dk);
    const r = ua(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = ua(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = ua(this.__runKind);
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
  return We(new qr(e));
}
function Ue(e) {
  return e instanceof qr;
}
const is = "id", bp = 1, fk = [
  "type",
  "marker",
  "code",
  "content"
];
class jt extends er {
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
    return kp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Sy(t);
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
  return We(new jt(e, t));
}
function yt(e) {
  return e instanceof jt;
}
function Tp(e) {
  return e?.type === jt.getType();
}
const Xs = "c", xp = 1, pk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Rt extends er {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o) {
    super(o), this.__marker = Xs, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Rt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return _p().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Gs, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
function _p(e, t, r, n, i) {
  return We(new Rt(e, t, r, n, i));
}
function Oe(e) {
  return e instanceof Rt;
}
function hk(e) {
  return e?.type === Rt.getType();
}
const Cp = [
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
], Sp = [
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
], gk = [
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
  ...Cp,
  ...Sp
], vp = 1, mk = ["type", "marker", "content"];
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
    return t !== void 0 && (gk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Cp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Sp.includes(t);
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
      span: (t) => bk(t) ? {
        conversion: yk,
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
    return wu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), wu(r, this.__marker, n)), !1;
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
      version: vp
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
function wu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function yk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Er(t) };
}
function Er(e, t) {
  return We(new ke(e, t));
}
function bk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ke.isValidMarker(t) && e.classList.contains(ke.getType());
}
function F(e) {
  return e instanceof ke;
}
function kk(e) {
  return e?.type === ke.getType();
}
const Mp = 1, Tk = "c", Ep = "span";
class gr extends ks {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Tk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Ap(t) ? {
        conversion: xk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return jc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Gs, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && Rn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Gs, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
function xk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: jc(t) };
}
function jc(e, t, r, n, i, s) {
  return We(new gr(e, t, r, n, i, s));
}
function Ap(e) {
  return e ? e.classList.contains(Gs) && e.tagName.toLowerCase() === Ep : !1;
}
function Ss(e) {
  return e instanceof gr;
}
function _k(e) {
  return e?.type === gr.getType();
}
const Pp = 1;
class Qr extends Pc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Qr(t.__key);
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
  return We(new Qr());
}
function fr(e) {
  return e instanceof Qr;
}
function vo(e) {
  return e?.type === Qr.getType();
}
const Ck = [
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
], Np = 1, Sk = ["type", "marker", "content"];
class nt extends Pc {
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
    return new nt(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ck.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: vk,
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
    const n = ss(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function vk(e) {
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
function ae(e) {
  return e instanceof nt;
}
function Bc(e) {
  return e?.type === nt.getType();
}
const Qs = "v", wp = 1, Mk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class gt extends Ve {
  __marker;
  __number;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r, n, i, s, o, a) {
    super(r ?? t, a), this.__marker = Qs, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new gt(r, n, i, s, o, a, c);
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
      version: wp
    };
  }
}
function Op(e, t, r, n, i, s) {
  return We(new gt(e, t, r, n, i, s));
}
function Re(e) {
  return e instanceof gt;
}
function qp(e) {
  return e?.type === gt.getType();
}
const Ek = "​", ci = Ek;
var Ou;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Ou || (Ou = {}));
var qu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(qu || (qu = {}));
function Ak() {
  return me(ci);
}
function Pk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ci, ""));
}
function vs(e) {
  return e.length > 0 && e.includes(ci) && e.replaceAll(ci, "") === "";
}
function Vc(e) {
  return v(e) && vs(e.getTextContent());
}
function Rp(e) {
  return hk(e) || _k(e);
}
function Ye(e) {
  return Oe(e) || Ss(e);
}
function $p(e, t) {
  return e.find((r) => Ye(r) && r.getNumber() === t.toString());
}
function Nk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ye(r));
}
function Ru(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Ip(e) {
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
function Zt(e) {
  return rt(e, V) ?? void 0;
}
function wk(e) {
  return yt(e) || Oe(e) || F(e) || Ss(e) || fr(e) || Ge(e) || ae(e) || V(e) || Re(e) || $e(e);
}
function Lp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Ok(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Nt(e) {
  return Te(e) || yt(e);
}
function Te(e) {
  return ae(e) || fr(e);
}
function qk(e) {
  return Bc(e) || vo(e);
}
function Zs(e, t) {
  let r = e.getParent();
  for (; r; ) {
    if (r.getKey() === t)
      return !0;
    r = r.getParent();
  }
  return !1;
}
function Mn(e, t) {
  const r = se(t, vn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Rk(e, t) {
  const r = z(e) ? e : e.getParent(), n = z(t) ? t : t.getParent(), i = r && n ? Ry(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function $k(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function li(e) {
  return e?.type === Ve.getType();
}
function Ik(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Lk(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Ae(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ot(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Dp(e, t, r) {
  const n = Ae(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Kt(e, t) {
  let r = Ae(e);
  return t && (r += `${L}${t}`), r += " ", r;
}
function Dk(e) {
  const t = e[xs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Up(e) {
  return Jc(e) || dp(e) && e.textType === "marker" || li(e) && Dk(e) === "attribute" ? "" : li(e) && e.text !== L ? e.text : kk(e) ? e.children.map((t) => Up(t)).join("") : "";
}
function Uk(e) {
  return e.map((r) => Up(r)).filter((r) => r.length > 0).join(" ").trim();
}
function wt(e) {
  return " " + e + L;
}
function Wc(e) {
  const t = [];
  for (const r of e) {
    if (!F(r))
      continue;
    const n = Fp(r);
    n !== zt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Fp(e) {
  return O(e) || Rr(e) || v(e) && se(e, ce) === "attribute" ? "" : v(e) ? e.getTextContent() : z(e) ? e.getChildren().map((t) => Fp(t)).join("") : "";
}
function Rr(e) {
  return Qt(e) && e.getTextType() === "marker";
}
function Ot(e) {
  return O(e) || Rr(e);
}
function Br(e) {
  if (!mi(e))
    return;
  const t = e.getNodes();
  if (t.length !== 1)
    return;
  const [r] = t, n = Kp(r.getParent());
  return n?.is(r) ? n : void 0;
}
function Zr(e) {
  const t = Br(e)?.getParent();
  return ae(t) ? t : void 0;
}
function Kp(e) {
  if (!ae(e))
    return;
  const t = e.getFirstChild();
  if (bi(t))
    return rt(e, $e) ? void 0 : t;
}
const ei = /* @__PURE__ */ new WeakMap();
function Fk(e) {
  return ei.set(e, (ei.get(e) ?? 0) + 1), () => {
    const t = (ei.get(e) ?? 1) - 1;
    t > 0 ? ei.set(e, t) : ei.delete(e);
  };
}
function Kk() {
  const e = _n();
  return e.isEditable() && (ei.get(e) ?? 0) > 0;
}
function zk(e) {
  if (!Kp(e.getParent())?.is(e) || !Kk())
    return !1;
  const t = Nc();
  return t.add(e.getKey()), Sr(t), !0;
}
function $u(e, t) {
  jk(e, t), e.setMarker(t);
}
function jk(e, t) {
  const r = e.getMarker(), n = Ae(r), i = Ae(r, !0), s = ot(r), o = ot(r, !0), a = ke.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Ot(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (Rr(c)) {
        const f = l.startsWith(Ae("", !0));
        c.setTextContent(u ? Ae(t, f) : ot(t, f));
      }
    }
  });
}
function Ke(e, t = vy) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ne(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function zp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function jp(e) {
  if (!w(e))
    return Iu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !z(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return Iu(e) ?? t ?? void 0;
  } catch (n) {
    if (zp(n))
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
function Hc(e, t) {
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
function Iu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Gc(e) {
  if (!e)
    return !1;
  if (Ts(e) || O(e) || Rr(e) || Ue(e) || Qt(e) && e.getTextType() === "attribute")
    return !0;
  if (v(e)) {
    const t = se(e, ce);
    if (t === hr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === L || vs(r))
      return !0;
  }
  return !1;
}
function Mo() {
  const e = me(L);
  return _t(e, ce, hr), e.setMode("token"), e;
}
function Vk(e) {
  const t = e.getTextContent();
  t.startsWith(L) || e.setTextContent(L + t);
}
function In(e) {
  return v(e) && se(e, ce) === hr;
}
function Wp(e) {
  const t = e.getFirstChild();
  if (!Ot(t) || t === null || In(t.getNextSibling()))
    return !1;
  const r = N();
  if (!w(r) || !r.isCollapsed())
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
    if (!Gc(s)) {
      if (Se(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === Ve.getType()) {
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
  for (; t && Se(t); )
    t = t.getParent();
  return t;
}
function Wk(e, t) {
  return ki(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Hk(e, t) {
  const r = Eo(e);
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
  const r = ki(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Gc(n))
    return Hp(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || Zs(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || Zs(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function Jk(e, t) {
  if (t <= 0)
    return 0;
  const r = ki(e);
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
class mr extends Ve {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(bn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
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
      text: t.text || bn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = bn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = bn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = bn(r.__marker, r.__markerSyntax, t), r;
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
  return We(new mr(e, t, void 0, r));
}
function O(e) {
  return e instanceof mr;
}
function Jc(e) {
  return e?.type === mr.getType();
}
function sn(e) {
  return e.getTextContent() === bn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Qk(e) {
  e.setTextContent(bn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function bn(e, t, r = !1) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : Ae(e, r);
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
function Wi(e) {
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function eT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Wi(e) === void 0 && Xp(e) === void 0;
}
function Xp(e) {
  return e.getChildren().find((t) => v(t) && se(t, ce) === "attribute");
}
function os(e, t) {
  return Ms(e.getNextSibling(), t);
}
const tT = /^[ \u00A0]+$/;
function Yc(e) {
  if (sn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Ae(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && tT.test(r.slice(t.length));
}
function Ms(e, t) {
  let r, n, i, s;
  return Ue(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Yc(e) && (r = e, e = e.getNextSibling()), v(e) && se(e, ce) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && sn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function as(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!O(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (v(n) && n.getTextContent() === wt(e.getCaller()))
    return n;
}
function Qp(e) {
  const t = as(e);
  return t ? Ms(t.getNextSibling(), "cat") : {};
}
function Ao(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || O(t)) && se(t, ce) !== "attribute")
    return t;
}
function Zp(e) {
  const t = Ao(e);
  return t ? Ms(t.getNextSibling(), "ca") : {};
}
function eh(e) {
  const t = Ao(e);
  if (!t)
    return;
  const r = Ms(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function th(e) {
  const t = eh(e);
  return t ? Ms(t.getNextSibling(), "cp") : {};
}
function rh(e) {
  const t = e.getParent();
  if (!F(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Re(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && se(n, ce) === "attribute" || F(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ue(n)))
        return;
    }
}
function Po(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ue(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Yc(s) && (t = s, s = s.getNextSibling()), v(s) && se(s, ce) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && sn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Xc(e) {
  return F(Eo(e));
}
function Ba(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Xc(t) : t.getChildren().some((i) => F(i) && i.getMarker() === r) ? !0 : void 0;
}
function rT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = Ba(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function No(e) {
  return v(e) && e.getType() === Ve.getType() && se(e, ce) !== "attribute";
}
function Qc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Ba(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? Ba(r, t) === !0 ? "spacer" : void 0 : No(r) ? r.getTextContent().startsWith(L) ? void 0 : "prefix" : "spacer";
}
function nT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && Qc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function nh(e, t) {
  const r = N();
  if (!w(r) || !r.isCollapsed())
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
    const r = Qc(t, e);
    if (r !== void 0 && !nh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        v(n) && n.setTextContent(L + n.getTextContent());
      } else
        t.insertAfter(me(L));
  });
}
function sh(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && Qc(t, e) !== void 0 && nh(t, e)) : !1;
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
const St = { wantsRun: !1, valueText: void 0 }, $r = {};
function da(e, t) {
  if (t === "va")
    return e;
  const r = os(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Zc(e) {
  const t = N();
  if (!w(t) || !t.isCollapsed())
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
function wo(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = N();
  if (!w(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function pT(e) {
  return Ue(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && se(e, ce) === "attribute";
}
function hT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!v(e) || se(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function fa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Re(t))
      return t;
    if (!pT(t))
      return;
  }
}
function Lu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Re(t),
    ownerOf: (t) => {
      if (Ue(t))
        return t.getRunKind() === e ? fa(t) : void 0;
      const r = t.getParent();
      return Ue(r) ? r.getRunKind() === e ? fa(r) : void 0 : hT(t) === e ? fa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Re(t))
        return St;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? St : { wantsRun: !0, valueText: L + r };
    },
    scanPieces: (t) => Re(t) ? os(da(t, e), e) : $r,
    graceSite: (t, r) => Re(t) ? !r.opener && !r.closer ? Zc(da(t, e)) : wo(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Re(t) ? da(t, e) : void 0
    }
  };
}
const gT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => St,
  scanPieces: () => $r,
  graceSite: (e) => F(e) && sh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, mT = {
  kind: "char",
  ownerPredicate: (e) => F(e),
  ownerOf: (e) => {
    if (!v(e) || se(e, ce) !== "attribute")
      return;
    const t = e.getParent();
    return F(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!F(e) || Wi(e) === void 0)
      return St;
    const t = ar(e.getUnknownAttributes() ?? {}, Co(e.getMarker()));
    return t === "" ? St : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => F(e) ? { value: Xp(e) } : $r,
  graceSite: (e, t) => {
    if (!F(e) || t.value)
      return !1;
    const r = Wi(e);
    if (!r)
      return !1;
    const n = N();
    if (!w(n) || !n.isCollapsed())
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
    insertRunBefore: (e) => F(e) ? Wi(e) : void 0
  }
};
function ch(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!v(e) || se(e, ce) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function yT(e) {
  const t = e.getParent();
  if (!V(t))
    return;
  const r = as(t);
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
  ownerPredicate: (e) => V(e),
  ownerOf: (e) => {
    if (Ue(e))
      return e.getRunKind() === "cat" && V(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ue(t) ? t.getRunKind() === "cat" && V(t.getParent()) ? t.getParent() ?? void 0 : void 0 : ch(e) ? yT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!V(e) || e.getIsCollapsed() !== !1)
      return St;
    const t = e.getCategory();
    return t === void 0 ? St : { wantsRun: !0, valueText: L + t };
  },
  scanPieces: (e) => V(e) ? Qp(e) : $r,
  graceSite: (e, t) => {
    if (!V(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = as(e);
      return r !== void 0 && Zc(r);
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
    insertRunAfter: (e) => V(e) ? as(e) : void 0
  }
};
function kT(e) {
  return Ue(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && se(e, ce) === "attribute";
}
function TT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!v(e) || se(e, ce) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function xT(e) {
  const t = e.getParent();
  if (!Oe(t))
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
function Du(e) {
  const t = (r) => Oe(r) ? e === "ca" ? Ao(r) : eh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Oe(r),
    ownerOf: (r) => {
      if (Ue(r))
        return r.getRunKind() === e && Oe(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ue(n) ? n.getRunKind() === e && Oe(n.getParent()) ? n.getParent() ?? void 0 : void 0 : TT(r) === e ? xT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Oe(r))
        return St;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? St : { wantsRun: !0, valueText: L + n };
    },
    scanPieces: (r) => Oe(r) ? e === "ca" ? Zp(r) : th(r) : $r,
    graceSite: (r, n) => {
      if (!Oe(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Zc(i);
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
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && se(e, ce) === "attribute";
}
function _T(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ge(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!lh(t))
      return;
  }
}
const CT = {
  kind: "milestone",
  ownerPredicate: (e) => Ge(e),
  ownerOf: (e) => {
    const t = Ue(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ue(e.getParent()) ? e.getParent() : lh(e) ? e : void 0;
    if (!t || Ue(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ue(t) ? Ge(r) ? r : void 0 : _T(t);
  },
  expectedPieces: (e) => {
    if (!Ge(e))
      return St;
    const t = Yp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = ar(t, So(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : L + r };
  },
  scanPieces: (e) => {
    if (!Ge(e))
      return $r;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Po(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ge(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = N();
      if (!w(r) || !r.isCollapsed())
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
    glyphMarker: (e) => Ge(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, ST = ah("optbreak", void 0, void 0).opening, vT = {
  kind: "optbreak",
  ownerPredicate: (e) => $e(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!$e(t) || t.getTag() !== "optbreak"))
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
  scanPieces: (e) => $e(e) ? { value: e.getFirstChild() ?? void 0 } : $r,
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
  ownerPredicate: (e) => $e(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => St,
  scanPieces: () => $r,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, ET = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => F(e),
  ownerOf: () => {
  },
  expectedPieces: () => St,
  scanPieces: () => $r,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, cs = [
  gT,
  mT,
  Lu("va"),
  Lu("vp"),
  bT,
  Du("ca"),
  Du("cp"),
  CT,
  vT,
  MT,
  ET
], AT = new Map(cs.map((e) => [e.kind, e]));
function En(e) {
  const t = AT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function An(e) {
  for (const t of cs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function uh(e) {
  return An(e) !== void 0;
}
const eo = "unmatched", dh = 2;
function Hi(e) {
  return `\\${e}`;
}
class Ir extends Ve {
  __marker;
  constructor(t = "", r) {
    super(Hi(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Ir(r, n);
  }
  static importDOM() {
    return {
      [eo]: (t) => NT(t) ? {
        conversion: PT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return el().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(ku), r.title = Uu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Uu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(eo);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(ku), t.textContent = this.getTextContent(), { element: t };
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
  return e.getTextContent() === Hi(e.getMarker());
}
function Uu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function PT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: el(t) };
}
function el(e) {
  return We(new Ir(e));
}
function NT(e) {
  return e?.tagName.toLowerCase() === eo;
}
function on(e) {
  return e instanceof Ir;
}
const ph = "table", Va = "immutable-table", hh = 1, wT = ["type", "marker", "content"];
class Ln extends er {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Va;
  }
  static clone(t) {
    return new Ln(t.__unknownAttributes, t.__key);
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
  return We(new Ln(e));
}
function gh(e) {
  return e instanceof Ln;
}
function qT(e) {
  return e?.type === Va;
}
const mh = "table:row", Fu = "immutable-table-row", yh = 1, Wa = "tr", RT = ["type", "marker", "content"];
class Ti extends er {
  __marker;
  __unknownAttributes;
  constructor(t = Wa, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Fu;
  }
  static clone(t) {
    return new Ti(t.__marker, t.__unknownAttributes, t.__key);
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
      type: Fu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: yh
    };
  }
}
function $T(e, t) {
  return We(new Ti(e, t));
}
const bh = "table:cell", Ku = "immutable-table-cell", kh = 1, Ha = "tc1", IT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function LT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class xi extends er {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Ha, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Ku;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new xi(r, n, i, s, o);
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
      type: Ku,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: kh
    };
  }
}
function DT(e, t, r, n) {
  return We(new xi(e, t, r, n));
}
function Oo(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function Bt(e, t) {
  const r = Oo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function ls(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function UT(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function FT(e) {
  return ls(e) ? void 0 : { closed: "false" };
}
function KT(e, t, r, n) {
  const i = t.getMarker(), s = Xc(t), o = UT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    No(a) && !a.getTextContent().startsWith(L) && a.setTextContent(L + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function Pn(e) {
  return rt(e, F) ?? void 0;
}
function tl(e) {
  let t = e.getParent();
  for (; F(t); )
    t = t.getParent();
  return t;
}
function Ga(e) {
  const t = Th(e);
  return e.getChildren().every((r) => O(r) || t && se(r, ce) === "attribute" || v(r) && r.getTextContent().replaceAll(L, "") === "");
}
function Th(e) {
  return ls(e);
}
function zT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? ar(r, Co(e.getMarker())) : "";
  n !== "" && t.insertAfter(me(n)), e.remove();
}
function jT(e, t) {
  if (ls(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", Xc(e)));
}
function BT(e, t) {
  return F(e) && !ls(e) && !ls(t);
}
function VT(e, t, r) {
  Ga(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && No(n) && !n.getTextContent().startsWith(L) && n.setTextContent(L + n.getTextContent()), e.append(...t);
}
function WT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Th(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = O(l) && l.getMarkerSyntax() === "closing", f = s && se(l, ce) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = BT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      VT(e, o, n);
    else {
      const l = Er(t.getMarker(), FT(t));
      KT(l, t, o, n), e.insertAfter(l), Ga(l) ? l.remove() : c = l;
    }
  i && !a && jT(t, n), Ga(t) && zT(t, c);
}
function ui(e, t) {
  let r = e.getParent();
  for (; F(r); )
    WT(e, r, t), r = e.getParent();
}
function rl(e) {
  if (v(e) && !O(e)) {
    const t = e.getTextContent().startsWith(L) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (z(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      rl(t);
      return;
    }
    e.selectEnd();
  }
}
const si = /* @__PURE__ */ new WeakMap();
function HT(e, t) {
  return si.set(e, t), () => {
    si.get(e) === t && si.delete(e);
  };
}
function zu(e) {
  return si.get(e);
}
function GT(e) {
  return si.get(_n())?.has(e.getKey()) ?? !1;
}
function JT(e) {
  si.get(_n())?.add(e.getKey());
}
function YT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ja(e) {
  return !!(e.opener || e.value || e.closer);
}
function ju(e) {
  return /^\s/.test(e);
}
function nl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !ju(t) || !ju(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function qo(e, t, r) {
  return r.wantsRun ? nl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : YT(t);
}
function XT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return nl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function xh(e, t) {
  return !Ja(e.scanPieces(t));
}
function Es(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!qo(e, n, r))
    return !1;
  const i = N();
  if (!w(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Zs(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function QT(e, t, r, n) {
  return !r.wantsRun || Ja(n) || $y(ts) ? !1 : _n().getEditorState().read(() => {
    const i = ie(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ja(e.scanPieces(i));
  });
}
function ZT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Bu(e) {
  const t = me(e);
  return _t(t, ce, "attribute"), t;
}
function ex(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = yp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function tx(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    v(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Bu(n.valueText));
    return;
  }
  const l = ex(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = lt(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : v(d) ? nl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Bu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function us(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (qo(e, i, n) && !GT(t)) {
    if (QT(e, t, n, i)) {
      JT(t);
      return;
    }
    if (!Es(e, t)) {
      if (!n.wantsRun) {
        ZT(i);
        return;
      }
      tx(e, t, i, n);
    }
  }
}
function rx(e, t, r) {
  us(e, t), t.isAttached() && Es(e, t) && r.add(t.getKey());
}
function _h(e) {
  if (!v(e))
    return !1;
  if (O(e) || Re(e) || on(e))
    return !0;
  const t = se(e, ce);
  return t === "attribute" || t === hr;
}
function il(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && sn(e) && F(e.getParent())) : !1;
}
function nx() {
  const e = N();
  return w(e) ? il(e.focus.getNode(), e.focus.offset) : !1;
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
function Vu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Wu(e, t) {
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
function Hu(e, t) {
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
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Vu(r), Vu(n)], s = Hu(r, "next"), o = Hu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Wu(r, i[0]), Wu(n, i[1]), !1) : !0;
}
const to = "verse-block", vh = 1, ax = "verse-block";
class _i extends er {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return to;
  }
  static clone(t) {
    return new _i(t.__number, t.__key);
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
    return t.classList.add(ax), Gu(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Gu(r, this.__number), !1;
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
      type: to,
      number: this.getNumber(),
      version: vh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Gu(e, t) {
  const { start: r, end: n } = Vp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Ju(e, "data-verse-start", i ? r : NaN), Ju(e, "data-verse-end", i ? n : NaN);
}
function Ju(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function cx(e) {
  return We(new _i(e));
}
function ds(e) {
  return e instanceof _i;
}
function lx(e) {
  return e?.type === to;
}
const ux = [
  jt,
  gr,
  Rt,
  gt,
  ke,
  Pe,
  Xt,
  mr,
  $n,
  Or,
  Ir,
  nt,
  Qr,
  Ln,
  Ti,
  xi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  qr,
  {
    replace: Pc,
    with: () => Jt(),
    withKlass: Qr
  }
], ro = {
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
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
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
      type: dx[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ur(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Yu(e, t, r) {
  const n = {
    type: Cr,
    version: _r,
    content: e
  }, i = t.serializeEditorState(n, r);
  return vo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Mh = "v", Eh = 1, px = "verse-selected";
class Mt extends ks {
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
    return new Mt(r, n, i, s, o, a, c);
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
    return sl().updateFromJSON(t);
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
    return r && Rn(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add($a, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Kt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Hs + this.getNumber() + Hs
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
      if (zp(r))
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
  const [r] = Zy(e);
  return C("span", { className: r ? px : void 0, children: t });
}
function gx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: sl(t) };
}
function sl(e, t, r, n, i, s) {
  return We(new Mt(e, t, r, n, i, s));
}
function mx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Mh;
}
function Dn(e) {
  return e instanceof Mt;
}
function yx(e) {
  return e?.type === Mt.getType();
}
function he(e) {
  return Re(e) || Dn(e);
}
function Ah(e) {
  return qp(e) || yx(e);
}
function bx(e) {
  return kx(e).find((t) => ae(t));
}
function kx(e) {
  return e.some(ds) ? e.flatMap((t) => ds(t) ? t.getChildren() : t) : e;
}
function Ro(e) {
  return z(e) ? ds(e) ? e.getChildren().flatMap(Ro) : e.getChildren() : [];
}
function Tx(e, t) {
  return Ro(e).find((i) => he(i) && Hc(t, i.getNumber()));
}
function xx(e, t) {
  return t === 0 ? bx(e) : e.map((r) => Tx(r, t)).filter((r) => r)[0];
}
function no(e) {
  return Ro(e).find((r) => he(r));
}
function Ph(e, t) {
  if (!z(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (he(i))
      return i;
  }
}
function _x(e) {
  const t = e.getParent();
  if (t && z(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (he(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ye(r); ) {
    const n = no(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Ya(e) {
  return Ro(e).findLast((t) => he(t));
}
function Cx(e) {
  if (!Re(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Sx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && z(r)) {
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
function Xu(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Mx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!w(t))
    return Xu(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return vx(e, t) ? { verseNum: n } : Xu(e);
}
function Ex(e) {
  return wk(e) || Dn(e);
}
function ol(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(L) && e.setTextContent(`${t} `);
  }
}
function Nh(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Xa(e, t) {
  return e.getEditorState().read(() => !ie(t));
}
function Ax(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = al(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && z(i) && z(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && z(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (he(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = Qu(i);
      for (; s && !Ye(s); ) {
        const o = no(s);
        if (o) {
          n = o;
          break;
        }
        s = Qu(s);
      }
    }
  } else {
    let s = t.getTopLevelElement() ?? t;
    for (; s; ) {
      const o = no(s);
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
function Px(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = al(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && z(i) && (n = Ph(i, r.getIndexWithinParent())), !n && i) {
      let o = Zu(i);
      for (; o && !Ye(o); ) {
        const a = Ya(o);
        if (a) {
          n = a;
          break;
        }
        o = Zu(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ye(s); ) {
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
function Qu(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Zu(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function al(e, t) {
  if (z(e) && w(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && he(n))
      return n;
    const i = Ph(e, t.anchor.offset);
    if (i)
      return i;
    const s = no(e);
    if (s)
      return s;
  }
  return cl(e);
}
function cl(e) {
  if (!e || Ye(e))
    return;
  if (he(e))
    return e;
  let t = Ru(e);
  for (; t; ) {
    if (Ye(t))
      return;
    if (he(t))
      return t;
    const r = Ya(t);
    if (r)
      return r;
    t = Ru(t);
  }
}
const Nx = ["style"], wx = ["style", "code"], io = ["style", "cid"], Ox = [
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
], fs = `
`;
function Dx(e, t) {
  const r = ie(e);
  if (!qt(r))
    return;
  const n = wh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function wh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = zf();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (di(i[d], c)) {
        const f = i[d];
        if (i.splice(d, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      di(s[d].node, c) && s.splice(d, 1);
    const u = s[s.length - 1];
    if (u) {
      if (l.getKey() === o)
        return u.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Ar(l) || qt(l))
        return n;
      Nt(l) && (a = l);
    }
    if (Nt(l) && (i.includes(l) || i.push(l)), Oh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += ll(l, t);
  }
  if (a)
    return n;
}
function ed(e, t, r = "delta-doc") {
  if (e.length < 2 || !Kx(e[0]) || !Fx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Ux(n, r)?.getKey());
}
function Ux(e, t = "delta-doc") {
  const r = zf();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (di(i[u], o)) {
        const d = i[u];
        if (i.splice(u, 1), n === e)
          return d;
        n += 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      di(s[u].node, o) && s.splice(u, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Nt(a) && (i.includes(a) || i.push(a)), Oh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = ll(a, t);
    if (Ar(a) && l > 0 && e >= n && e < n + l || qt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function di(e, t) {
  return e ? t ? !Zs(t.node, e.getKey()) : !0 : !1;
}
function Ar(e) {
  return v(e) && !qt(e);
}
function qt(e) {
  return Ye(e) || he(e) || Ge(e) || V(e) || $e(e) || on(e);
}
function Vr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Fx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Lx.includes(t);
}
function Kx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Oh(e, t) {
  return V(e) || $e(e) ? !0 : t === "apply" && z(e) && qt(e);
}
function qh(e) {
  const t = e.getParent();
  return Ot(e) && ae(t) && t.getFirstChild() === e;
}
function Qa(e) {
  const t = e.getParent();
  return t !== null && rt(t, Ue) !== null;
}
function zx(e) {
  const t = e.getParent();
  return F(t) && e.getTextContent() === zt && t.getChildrenSize() === 1;
}
function jx(e) {
  const t = e.getParent();
  if (!V(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === wt(t.getCaller());
}
function Bx(e) {
  return !uh(e) && ll(e, "delta-doc") === e.getTextContentSize();
}
function ll(e, t) {
  if (qt(e))
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
    (Vc(e) || qh(e) || se(e, ce) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    se(e, ce) === "attribute" || Qa(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Ic) || zx(e) || jx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Za(e, t) {
  const r = { insert: e.__text }, n = se(e, Xr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Rh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function td(e) {
  const t = new Ki();
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
function ul(e, t) {
  const r = [], n = yi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...rd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...rd(c, n.length, n, i, s, o, a));
  return r;
}
function Vx() {
  return ul();
}
function rd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Wx(e, a, n), Hx(e, a, i, s, o), Gx(e, t, r, i, o, s, a), Ye(e) && a.push(Qx(e)), he(e) && a.push(e_(e)), Ge(e) && a.push(t_(e)), on(e) && a.push(r_(e)), Yx(e, a, s), Jx(e, a, s), o_(c, s), a;
}
function Wx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    yt(n) ? t.push(Xx(n)) : ae(n) ? t.push(Zx(n)) : fr(n) && t.push({ insert: fs });
  }
  Nt(e) && (r.includes(e) || r.push(e));
}
function Hx(e, t, r, n, i) {
  if (!v(e) || Re(e) || on(e))
    return;
  const s = e.getParent();
  if (V(s) && s.getFirstChild() === e)
    return;
  const o = Zt(e) !== void 0;
  if (O(e) && (o || qh(e) || Qa(e) || uh(e)) || se(e, ce) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (vs(a))
    return;
  const c = e.getPreviousSibling();
  if (V(s) && O(c) && c === s.getFirstChild() && a === wt(s.getCaller()))
    return;
  const l = F(s) ? s : void 0, u = l?.getFirstChild();
  o && l && O(u) && c === u && a.startsWith(L) && (a = a.slice(1));
  const d = a.startsWith(Ic) || se(e, ce) === "attribute" || Qa(e), f = !!l && a === zt && l.getChildrenSize() === 1, p = $o(e, n), m = p ? r.filter((k) => p.children.includes(k)) : r, g = Za(e, m);
  if (g.insert = a, p) {
    if (!a || a === L || d)
      return;
    p.contentsOps?.push(g);
  } else
    f || d || t.push(g);
  const y = a !== "" && !f && !(d && l);
  if (r.length > 0 && y)
    for (const k of r)
      i.add(k);
}
function Gx(e, t, r, n, i, s, o) {
  F(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (di(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = i_(c), u = $o(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Jx(e, t, r) {
  if (!V(e))
    return;
  const n = n_(e), i = $o(e, r), s = {
    node: e,
    children: yi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Yx(e, t, r) {
  if (!$e(e))
    return;
  const n = s_(e), i = $o(e, r), s = {
    node: e,
    children: yi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function an(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function Xx(e) {
  const t = { style: is, code: e.__code };
  return an(t, e), { insert: fs, attributes: { book: t } };
}
function Qx(e) {
  const t = { style: Xs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), an(t, e), { insert: { chapter: t } };
}
function Zx(e) {
  const t = { style: e.__marker };
  return an(t, e), { insert: fs, attributes: { para: t } };
}
function e_(e) {
  const t = { style: Qs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), an(t, e), { insert: { verse: t } };
}
function t_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), an(t, e), { insert: { milestone: t } };
}
function r_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function n_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), an(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = se(e, Xr);
  return n && (r.attributes = { segment: n }), r;
}
function i_(e) {
  const t = { insert: "" }, r = Rh([e]);
  return r && (t.attributes = { char: r }), t;
}
function s_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), an(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
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
    di(t[r].node, e) && t.splice(r, 1);
}
function Rh(e) {
  if (e.length === 0)
    return;
  const t = e.map(a_);
  return t.length === 1 ? t[0] : t;
}
function a_(e) {
  const t = { style: e.__marker }, r = se(e, vn);
  return r && (t.cid = r), an(t, e), t;
}
const $h = 1;
class Yt extends ks {
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
    return dl().updateFromJSON(t);
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => u_(t, n), (l) => d_(t, n, s, l), () => f_(t, n), () => p_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return C("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === es && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Xf && i ? (
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
  return { node: dl(t, r) };
}
function dl(e, t, r) {
  return We(new Yt(e, t, r));
}
function l_(e) {
  return e ? e.classList.contains(Yt.getType()) : !1;
}
function Et(e) {
  return e instanceof Yt;
}
function u_(e, t) {
  return e.getEditorState().read(() => {
    const r = ie(t);
    if (!V(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function d_(e, t, r, n) {
  e.update(() => {
    const i = ie(t);
    if (!V(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = ie(r);
    if (!Et(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function f_(e, t) {
  return e.getEditorState().read(() => {
    const r = ie(t);
    if (!V(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return ul(r);
  });
}
function p_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of yi())
      if (V(n)) {
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
  let [n, i] = nd(t), [s, o] = nd(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = id(n, i), [s, o] = id(s, o);
  const a = wc();
  return a.anchor = mu(n.getKey(), i, sd(n)), a.focus = mu(s.getKey(), o, sd(s)), a;
}
function fl() {
  if (Ih())
    return;
  const e = N();
  if (!e || !w(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = so(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = so(i, s);
  return { start: n, end: o };
}
function nd(e) {
  if (My(e)) {
    const t = Pf(e.jsonPath);
    let r = ze();
    for (let n = 0; n < t.length; n++) {
      if (!r || !z(r))
        return [void 0, void 0];
      const i = ki(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : Gk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && z(r) ? [r, Jk(r, e.offset)] : [void 0, void 0];
  }
  if (Ey(e) || Ay(e)) {
    const t = Ri(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (z(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && z(r) ? [r, 0] : [void 0, void 0];
  }
  if (Py(e)) {
    const t = Ri(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (z(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && z(r) ? [r, 0] : [void 0, void 0];
  }
  if (Ny(e)) {
    const t = Ri(e.jsonPath);
    if (!t || !z(t))
      return [void 0, void 0];
    const r = pa(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && v(n) ? [n, 0] : [void 0, void 0];
  }
  if (wy(e)) {
    const t = Ri(e.jsonPath);
    if (!t || !z(t))
      return [void 0, void 0];
    const r = pa(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && v(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Oy(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Ri(e.jsonPath);
    if (!n || !z(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = pa(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && v(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${qy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function id(e, t) {
  if (!Rr(e))
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
function sd(e) {
  return z(e) ? "element" : "text";
}
function pa(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (O(n) && n.getMarkerSyntax() === t || t === "closing" && O(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Rr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Ri(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Pf(r);
  let i = ze();
  for (const s of n) {
    if (!i || !z(i))
      return;
    const o = ki(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function so(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = m_(e), i = n ? fn(mn(n)) : fn(mn(e));
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
  if (Se(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (v(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return so(n, s);
    }
    const i = Eo(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return so(i, o);
    }
  }
  if (z(e)) {
    const r = e.getChildAtIndex(t);
    if (Rr(r)) {
      const i = r.getTextContent().endsWith("*"), s = fn(mn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Hp(e, t);
    return n.type === "text" ? {
      jsonPath: fn([...mn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: fn(mn(e)),
      offset: n.index
    };
  }
  if (v(e)) {
    const r = Hk(e, t);
    if (r)
      return {
        jsonPath: fn([
          ...mn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: fn(mn(e)), offset: t };
}
function m_(e) {
  const t = e.getParent();
  if (!t || !z(t))
    return;
  const r = y_(e);
  return r && !Nt(r) && !v(r) && !Se(r) ? r : t;
}
function y_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Gc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function mn(e) {
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
    if (ds(e))
      return !0;
  return !1;
}
function Lh(e, t, r, n, i, s, o) {
  if (!Pe.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Io(r) : N();
  if (!w(a))
    return;
  const c = T_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (zi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Dh(e, l, c, i, s, void 0, void 0);
  return k_(u, a, i), u;
}
function pl(e) {
  return e !== "expanded";
}
function b_(e) {
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
function k_(e, t, r) {
  const n = pl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || $k(t), Sh(t);
  const i = b_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(F)?.selectEnd();
}
function Jn(e, t, r) {
  const n = Er(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(Mr("marker", Ae(e)));
  const s = t === "" ? zt : i ? L + t : t;
  return n.append(me(s)), n;
}
function T_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Jn("fr", f, n)), !e.isCollapsed()) {
        const p = ad(e);
        p.length > 0 && o.push(Jn("fq", p, n));
      }
      o.push(Jn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Jn("xo", f, n)), !e.isCollapsed()) {
        const p = ad(e);
        p.length > 0 && o.push(Jn("xq", p, n));
      }
      o.push(Jn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Dh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : pl(n?.noteMode), l = Uc(e, t, c);
  s && _t(l, Xr, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = lt(e), u && d.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (d = Mr("marker", Ae(e) + " "), a || (f = Mr("marker", ot(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = me(wt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => Mo(), g = r.flatMap(__(m));
    if (t === "")
      l.append(...g);
    else {
      const y = Wc(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = dl(l.__caller, y, k), l.append(p, m(), ...g);
    }
  }
  return f && l.append(f), l;
}
function od(e) {
  if (typeof e == "string") {
    const i = ie(e);
    return V(i) ? i : void 0;
  }
  const t = yi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => V(i.node))[e]?.node;
  if (V(n))
    return n;
}
function x_(e, t) {
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
    e.getChildren().reverse().find(F)?.selectEnd();
}
function __(e) {
  return (t) => Qt(t) ? [t] : [t, e()];
}
function C_(e) {
  const t = e.getParent();
  return t !== null && rt(t, V) !== null;
}
function ad(e) {
  if (!w(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Oc(e);
  let a = "";
  for (const c of t)
    if (!(V(c) || Et(c) || C_(c)) && !O(c) && !on(c) && se(c, ce) !== "attribute") {
      if (he(c)) {
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
const hl = [
  Yt,
  Mt,
  ...ux
], S_ = [
  _i,
  ...hl
], v_ = qn((e, t) => {
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
  const [e, t] = fe(void 0), [r, n] = fe(), i = te(null), s = ye((a, c) => {
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
  }, []), o = ye(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return j(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function E_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = M_();
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
const A_ = Ty(v_);
function Uh({ isOpen: e = !1, children: t }) {
  const r = te(null), { coords: n, placement: i } = E_({ isOpen: e, floatingBoxRef: r }), s = Be(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return Tn(
    C(A_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Fh = Ef(void 0);
function gl() {
  const e = Af(Fh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function P_(e, t) {
  const [r, n] = fe(0), [i, s] = fe(-1), o = Be(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ye(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = ye(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = ye(() => {
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
const Kh = qn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = gl(), u = ye((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = ye((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return C("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function w_({ children: e, autoIndex: t = !0, ...r }) {
  const n = te(null), { state: { activeIndex: i, menuItems: s } } = gl(), o = Be(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Be(() => {
    const c = o(s);
    return t ? xy.map(c, (l, u) => _y(l) && l.type === Kh && l.props.index === void 0 ? Cy(l, { index: u }) : l) : c;
  }, [o, t, s]);
  return j(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const u = c.getBoundingClientRect(), d = l.getBoundingClientRect();
        d.bottom > u.bottom ? c.scrollTop += d.bottom - u.bottom : d.top < u.top && (c.scrollTop -= u.top - d.top);
      }
    }
  }, [i]), C("div", { ref: n, role: "menu", ...r, children: a });
}
const O_ = (e, t, r) => zs(e, r).toLowerCase().includes(t.toLowerCase()), cd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", zs = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function q_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? cd(r[0]) : "") : (u = n || (r.length > 0 ? cd(r[0]) : ""), d = (m, g) => O_(m, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (g) {
      return console.warn("Error filtering item:", m, g), !1;
    }
  }).sort((m, g) => {
    const y = (S) => (p.has(S) || p.set(S, zs(S, f).toLowerCase()), p.get(S) ?? ""), k = a ? zs(m, f) : y(m), _ = a ? zs(g, f) : y(g);
    for (const S of c)
      switch (S) {
        case "exact":
          if (k === l && _ !== l)
            return -1;
          if (_ === l && k !== l)
            return 1;
          break;
        case "startsWith":
          if (k.startsWith(l) && !_.startsWith(l))
            return -1;
          if (_.startsWith(l) && !k.startsWith(l))
            return 1;
          break;
        case "contains": {
          const P = k.indexOf(l), E = _.indexOf(l);
          if (P !== -1 && E === -1)
            return -1;
          if (E !== -1 && P === -1)
            return 1;
          if (P !== -1 && E !== -1)
            return P - E;
          break;
        }
      }
    return k.localeCompare(_);
  });
}
const ha = {
  Root: N_,
  Options: w_,
  Option: Kh
};
function R_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Be(() => q_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function $_() {
  const { moveUp: e, moveDown: t, select: r } = gl();
  return Be(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const I_ = () => {
  const e = $_(), [t] = le();
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
    return t.registerCommand(pr, r, qe);
  }, [t, e]);
};
function L_() {
  return I_(), null;
}
const D_ = ["Shift", "Control", "Alt", "Meta"];
function zh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = le(), u = s !== void 0, [d, f] = fe(""), p = u ? s ?? "" : d, m = R_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return j(() => {
    a?.(p, m);
  }, [a, p, m]), j(() => l.registerCommand(pr, (y) => {
    if (u || c?.includes(y.key) || D_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const _ = {
      Escape: () => n?.(),
      Backspace: () => {
        p.length === 0 ? n?.() : f((S) => S.slice(0, -1));
      }
    }[y.key];
    return _ ? (y.stopPropagation(), y.preventDefault(), _(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && f((S) => S + y.key), !0) : !1;
  }, qe), [l, u, p, o, n, c]), _e(ha.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => g(y), children: [!u && C("input", { value: p, type: "text", disabled: !0 }), C(L_, {}), C(ha.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((_, S) => _e(ha.Option, { index: S, children: [C("span", { className: "label", children: _.label ?? _.name }), C("span", { className: "description", children: _.description })] }, _.name)) })] });
}
function U_({ trigger: e, items: t }) {
  const [r] = le(), [n, i] = fe(!1), s = ye((o) => {
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
      if (w(l))
        return l;
    });
    a.read(() => {
      const l = N();
      !w(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && C(Uh, { isOpen: n, children: ({ placement: o }) => C(zh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function F_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: Be(() => {
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
function Gi(e, t) {
  return `${e}:${t}`;
}
function K_(e, t) {
  j(() => {
    if (!e.hasNodes([tt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Fe(jf(e, tt, (n) => ns(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], m = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, m, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(tt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = ie(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Se(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!tt.isReservedType(c))
              for (const u of l) {
                let d = t.get(Gi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Gi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Gi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const z_ = qn(function({ logger: t }, r) {
  const [n] = le(), i = Be(() => /* @__PURE__ */ new Map(), []);
  K_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Gi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = ie(u);
        Se(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Ys(d));
      }
  };
  return Ac(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (tt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Io(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), hp(p, a, c, l, u, d, f);
      }, { tag: Ia });
    },
    removeAnnotation(o, a) {
      if (tt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Gi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ia });
    }
  })), null;
}), j_ = [];
function B_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = j_, onChange: n }) {
  const [i] = le();
  return bs(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(wf) && !u.has(ep) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = V_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function V_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ki();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = ie(i), o = s !== null && Zt(s) !== void 0;
    if (t.size === 1 && v(s) && !o && Bx(s)) {
      const a = wh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = ie(i);
          return new Ki([v(d) ? Za(d) : { insert: "" }]);
        }), l = new Ki([Za(s)]), u = new Ki(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = td(r), c = td(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const ml = "formatted", jh = "unformatted", Bh = "paragraph-structure", yl = "standard", Vh = "block-verse", W_ = {
  [ml]: "Formatted",
  [jh]: "Unformatted",
  [Bh]: "Paragraph Structure",
  [yl]: "Standard",
  [Vh]: "Block Verse"
};
function Ci(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let bl, kl;
function H_(e) {
  const t = Tl(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  bl = e, kl = t;
}
H_(ml);
const ZP = () => bl, Lo = () => kl;
function Tl(e) {
  let t;
  switch (e ?? bl) {
    case ml:
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
    case yl:
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
function eN(e) {
  if (!e)
    return;
  const t = ld(e);
  return Object.keys(W_).find((r) => It(ld(Tl(r)), t));
}
const G_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function ld(e) {
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
    return ps(e) ? Mt : e.markerMode === "editable" ? gt : Mt;
}
function ps(e) {
  return e?.verseLayout === "block";
}
function Y_(e) {
  const t = [], r = e ?? kl;
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
        const f = Math.max(0, e - o), p = d - f, m = Math.min(s, p);
        if (m > 0) {
          let g = u;
          const y = f > 0, k = m < d - f;
          if (y && k) {
            const [, _] = u.splitText(f);
            [g] = _.splitText(m);
          } else y ? [, g] = u.splitText(f) : k && ([g] = u.splitText(m));
          if (en(r)) {
            const _ = g.getParent();
            if (F(_)) {
              const S = r.char;
              let P;
              Array.isArray(S) ? a >= 0 && a <= S.length - 1 && (P = S[a]) : a === 0 && (P = S);
              const E = P ? Mn(P, _) : !1;
              if (E && Array.isArray(S) && S.length > 1) {
                const B = me("");
                g.replace(B);
                const M = typeof r.segment == "string" ? r.segment : void 0, R = Si(S.slice(1), n, g, M);
                let $ = B;
                for (const U of R)
                  $.insertAfter(U), $ = U;
                B.remove(), Lt(r, g);
              } else if (E)
                Lt(r, g);
              else {
                g.remove();
                const B = ud(g, r, n, i);
                if (B && B.length > 0) {
                  let M = _;
                  for (const R of B)
                    M.insertAfter(R), M = R;
                }
              }
            } else {
              const S = me("");
              g.replace(S);
              const P = ud(g, r, n, i);
              if (P && P.length > 0) {
                let E = S;
                for (const B of P)
                  E.insertAfter(B), E = B;
                S.remove();
              } else
                S.replace(g);
            }
          } else
            Lt(r, g);
          s -= m;
        }
      }
      o += d;
    } else if (qt(u))
      e <= o && o < e + t && s > 0 && (dd(u, r), s -= 1), o += 1;
    else if (F(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (en(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            ec(u, p.style), typeof p.cid == "string" && _t(u, vn, () => p.cid);
            const m = Ke(p, io);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || fC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && Ra(u), !0;
        }
      }
      d && Ra(u), a -= 1;
    } else if (Nt(u)) {
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
          dd(u, r);
        else if (xl(r)) {
          const p = Gh(r.para, n);
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
function ud(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Si(t.char, r, e, i), o = s.find(F);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Lt(t, e);
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Lt(t, e), s;
}
function Wh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(Ae(t))) : Qt(r) && r.getTextType() === "marker" && r.setTextContent(Ae(t) + L);
}
function ec(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = F(e.getParent()), i = e.getFirstChild();
  Qt(i) && i.getTextType() === "marker" && i.getTextContent() === Ae(r, n) && i.setTextContent(Ae(t, n));
  const s = e.getLastChild();
  Qt(s) && s.getTextType() === "marker" && s.getTextContent() === ot(r, n) && s.setTextContent(ot(t, n));
}
function dd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && F(e) && en(t)) {
      const i = tc(n);
      if (ec(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        _t(e, vn, () => o);
      }
      const s = Ke(i, io);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ye(e) || he(e) || Ge(e) || V(e) || $e(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (yt(e) || ae(e) || F(e)) && (r === "style" && ae(e) ? Wh(e, n) : r === "style" && F(e) ? ec(e, n) : r === "code" && yt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && _t(e, Xr, () => n));
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
    } else if (qt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Nt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Nt(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Jt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && Te(p)) {
            let m = i + 1;
            const g = p.getChildren();
            for (const k of g) {
              if (s <= 0)
                break;
              const _ = i;
              if (i = m, o(k)) {
                i = _;
                break;
              }
              Ar(k) ? m += k.getTextContentSize() : qt(k) && (m += 1), i = _;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Jt(), !0);
        } else ae(a) ? a.replace(Jt(), !0) : a.remove();
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
function tC(e, t, r, n, i) {
  if (t === fs)
    return fd(e, r, n, i);
  if (t.endsWith(fs) && !xl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (en(r))
        throw new Error("Text + LF should not have char attributes");
      o += oo(e, s, r, i);
    }
    return o += fd(e + o, r, n, i), o;
  } else return en(r) ? rC(e, t, r, n, i) : oo(e, t, r, i);
}
function rC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = me(t === "" ? zt : t);
  Lt(r, s);
  let o;
  {
    let y = function(k) {
      if (Ar(k)) {
        const _ = k.getTextContentSize();
        if (e >= g && e < g + _) {
          const S = k.getParent();
          return F(S) && (o = S), !0;
        }
        g += _;
      } else if (qt(k))
        g += 1;
      else if (F(k)) {
        const _ = k.getChildren();
        for (const S of _)
          if (y(S))
            return !0;
      } else if (z(k)) {
        const _ = k.getChildren();
        for (const S of _)
          if (y(S))
            return !0;
        Nt(k) && (g += 1);
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
      m && Mn(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Mn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Si(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(F);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), oo(e, t, void 0, i);
  const f = {};
  for (const [m, g] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof g == "string" && (f[m] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const m of u)
    if (!Hh(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), oo(e, t, void 0, i));
}
function oo(e, t, r, n) {
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
        const u = e - s, d = me(t);
        if (Lt(r, d), u === 0)
          c.insertBefore(d);
        else if (u === l) {
          const f = c.getParent();
          F(f) && !en(r) ? f.insertAfter(d) : c.insertAfter(d);
        } else {
          const [, f] = c.splitText(u);
          f.insertBefore(d);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${u}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (qt(c))
      s += 1;
    else if (F(c)) {
      if (!o && e === s) {
        const d = me(t);
        Lt(r, d);
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
        return Lt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Nt(c)) {
      if (!o && e === s) {
        const d = me(t);
        Lt(r, d);
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
        return Lt(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    Lt(r, c);
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
    if (!z(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Te(l)) {
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
      } else if (qt(l))
        i += 1;
      else if (F(l)) {
        if (o(l))
          return !0;
      } else if (Nt(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (fr(u) && Nt(t) && // Target is at the ImpliedPara's implicit newline
        e === d && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${u.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = d + 1, s = !0, !0;
        i += 1;
      } else if (z(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return z(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Jt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Te(a) ? fr(a) && ae(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Te(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (F(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Te(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function nC(e, t, r, n, i) {
  let s;
  return Vr("chapter", t) ? s = sC(t.insert.chapter, r) : Vr("verse", t) ? s = oC(t.insert.verse, r) : Vr("ms", t) ? s = aC(t.insert.ms) : Vr("note", t) ? s = Jh(t, r, n, i) : Vr("unknown", t) ? s = Yh(t, r, n, i) : Vr("unmatched", t) && (s = lC(t.insert.unmatched, r)), s ? Hh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function fd(e, t, r, n) {
  let i;
  xl(t) ? i = Gh(t.para, r) : dC(t) && (i = iC(t.book)), i ??= Jt();
  const s = i, o = ae(s), a = fr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (Ar(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (ae(p) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${p.getMarker()}) with LF attributes at targetIndex ${e}`);
          const m = e - c, [g] = m > 0 ? d.splitText(m) : [void 0];
          let y, k = g?.getPreviousSibling();
          for (; k; ) {
            const _ = k;
            k = k.getPreviousSibling(), y ? y.insertBefore(_) : s.append(_), y = _;
          }
          return g && s.append(g), p.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (qt(d))
      c += 1;
    else if (Nt(d)) {
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
        if (ae(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ae(d) && s)
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
  return u(ze()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function iC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== is || !r || !jt.isValidBookCode(r))
    return;
  const n = Ke(e, wx);
  return kp(r, n);
}
function Gh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Ke(e, Nx), i = ss(r, n);
  if (!Ci(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), Mo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Ae(r) + L;
    i.append(t.hasGutterParaMarkers ? up(s) : Mr("marker", s));
  }
  return i;
}
function sC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Ke(e, Ox);
  let a;
  if (t.markerMode === "editable")
    a = _p(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = jc(r, c, n, i, s, o);
  }
  return a;
}
function oC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Ke(e, qx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Kt(r, n);
    c = Op(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = sl(n, l, i, s, o, a);
  }
  return c;
}
function aC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Ke(e, Rx);
  return np(t, r, n, s, i);
}
function Jh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Ke(i.note, $x), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (en(g.attributes)) {
        const y = Si(g.attributes.char, t, me(g.insert), void 0, Xh(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(me(g.insert));
  return Dh(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Yh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Ke(i, Ix), l = zc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && cC(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && _t(l, Xr, () => d), l;
}
function cC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (en(s.attributes)) {
        const o = me(s.insert), a = Si(s.attributes.char, t, o, void 0, Xh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(me(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Vr("unknown", s)) {
        const o = Yh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Vr("note", s)) {
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
  const n = el(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Xh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function tc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Si(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(zt);
  const a = () => {
    o && v(r) && r.getTextContent() !== zt && r.setTextContent(L + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(tc), l = c[0], u = i?.[i.length - 1];
    if (F(u) && Mn(l, u))
      return c.length > 1 ? Si(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, m) => {
      const g = Er(p.style, Ke(p, io));
      if (typeof p.cid == "string" && _t(g, vn, () => p.cid), n && m === c.length - 1 && _t(g, Xr, () => n), f)
        if (F(f)) {
          const y = f.getMarker(), k = [];
          ma(y, k, t, !0), k.forEach((S) => g.append(S)), g.append(f);
          const _ = [];
          ga(f, _, t, !0), _.forEach((S) => g.append(S));
        } else
          g.append(f);
      return g;
    }, r);
    return ma(l.style, d, t, s), ga(d, d, t, s), [d];
  } else {
    const c = tc(e), l = i?.[i.length - 1];
    if (F(l) && Mn(c, l))
      return r && l.append(r), [];
    a();
    const u = Er(c.style, Ke(c, io));
    return typeof c.cid == "string" && _t(u, vn, () => c.cid), n && _t(u, Xr, () => n), r && u.append(r), ma(c.style, u, t, s), ga(u, u, t, s), [u];
  }
}
function ga(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && uC(e.getMarker(), t, r, !1, n);
}
function ma(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = Mr("marker", Ae(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function uC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = Mr("marker", n ? ot("") : ot(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function dC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function xl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function en(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function fC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Lt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        _t(t, Xr, () => n);
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
function hC() {
  const [e] = le();
  return j(() => gC(e), [e]), null;
}
function gC(e) {
  return Fe(e.registerCommand(ai, mC, ht), e.registerCommand(ai, (t) => (yC(t), !1), Cn));
}
function mC(e) {
  return bC(e.target), !1;
}
function yC(e) {
  const t = e.target;
  if (Qi(t) && bi(vr(t)))
    return;
  const r = N();
  w(r) && TC(r);
}
function _l(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Ot(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === L && (r++, t = t.getNextSibling());
    else if (he(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r;
}
function pt(e) {
  const t = _l(e);
  return t === 0 ? !1 : (Bt(e, t), !0);
}
function bC(e) {
  if (!Qi(e))
    return !1;
  const t = vr(e);
  if (!bi(t))
    return !1;
  const r = t.getParent();
  return r ? (Te(r) && pt(r) || Bt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function Yn() {
  const e = Zr(N());
  return e ? (pt(e) || e.selectStart(), !0) : !1;
}
function kC(e) {
  const t = Zr(e);
  if (!t)
    return;
  const r = _l(t);
  return t.getChildAtIndex(r) ?? t.getChildAtIndex(r - 1) ?? t;
}
function TC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = ie(t.key);
  if (!Te(r))
    return !1;
  const n = r.getFirstChild();
  return !Rr(n) && !Dn(n) ? !1 : pt(r);
}
function xC() {
  const [e] = le();
  return j(() => {
    const t = (r) => r instanceof KeyboardEvent && !Zh(r) || !Uo() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Fe(
      e.registerCommand(pr, t, qe),
      e.registerCommand(xo, t, qe),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(cr, t, De),
      e.registerCommand(Gr, t, De),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(_o, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = vr(r.target);
        return !n || !tn(n) ? !1 : (r.preventDefault(), !0);
      }, qe),
      e.registerCommand(Of, t, qe),
      e.registerCommand(Iy, t, qe),
      e.registerCommand(Ly, t, qe)
    );
  }, [e]), null;
}
function Zh(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function tn(e) {
  return rt(e, (t) => $e(t) || gh(t)) ?? void 0;
}
function Uo() {
  const e = N();
  return w(e) ? tn(e.anchor.getNode()) !== void 0 || tn(e.focus.getNode()) !== void 0 : !1;
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
  if (!DC(t) || CC(e, r))
    return !1;
  const i = r === "up" ? Px(t) : Ax(t);
  return i && n.preventDefault(), i;
}
function vC({ viewOptions: e }) {
  const [t] = le();
  return MC(t, e), null;
}
function MC(e, t) {
  j(() => {
    if (!e.hasNodes([gr, Mt, Pe]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = N();
      if (!w(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = pd(o), d = qC(i, hd(u, n.key) ? "next" : "previous");
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
      const a = pd(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return hd(a, n.key) ? l = !c && yd(i, "next") || !c && AC(i) || IC(i) || !c && s && md(i, "next") : EC(a, n.key) && (l = !c && yd(i, "previous") || !c && PC(i) || LC(i, t) || !c && s && md(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(pr, r, qe);
  }, [e, t]);
}
function pd(e) {
  return e.dir || "ltr";
}
function hd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function EC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function rc(e) {
  if (!F(e) || e.getMarker() !== "fp")
    return;
  const t = Zt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function AC(e) {
  const t = rc(Lp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Bt(t, 0), !0);
}
function PC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = rc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : gd(n);
  }
  if (t.offset === 0) {
    const n = rc(r);
    return n ? gd(n) : !1;
  }
  return !1;
}
function gd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (v(t))
    return t.select(), !0;
  if (z(t)) {
    const i = t.getLastDescendant();
    return v(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const ao = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function NC(e) {
  if (ao)
    for (const { segment: r } of ao.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function wC(e) {
  if (ao) {
    let n = 0;
    for (const { index: i } of ao.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function eg(e) {
  for (let t = e; t; t = t.getParent())
    if (z(t) && !t.isInline())
      return t;
}
function tg(e) {
  return !!e && O(e) && tn(e) !== void 0;
}
function fi(e) {
  return v(e) && !e.isToken() && !tg(e) && e.getTextContentSize() > 0;
}
function rg(e) {
  return Ts(e) ? !0 : V(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || tg(e)) && e.getTextContentSize() > 0 : _s(e) ? !Ge(e) : !1;
}
function pi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Fo(e, t, r) {
  for (let n = e; n; ) {
    if (rg(n))
      return n;
    if (z(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? pi(n, t, r);
      continue;
    }
    if (fi(n))
      return n;
    n = pi(n, t, r);
  }
}
function Cl(e, t, r, n, i) {
  return r === "element" && z(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? pi(e, n, i) : r === "text" && rg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : pi(e, n, i);
}
function ya(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Cl(e.node, e.offset, e.kind, "previous", t), n = Fo(r, "previous", t);
  if (!n)
    return e;
  if (fi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function OC(e, t) {
  const r = e.getNode(), n = eg(r);
  if (!n)
    return;
  if (e.type === "text" && fi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ya({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Cl(r, e.offset, e.type, t, n), s = Fo(i, t, n);
  if (!s)
    return;
  if (fi(s)) {
    const c = s.getTextContent(), l = t === "next" ? NC(c) : wC(c);
    return ya({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ya({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function ng(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = OC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function md(e, t) {
  return ng(e, t, "collapse");
}
function qC(e, t) {
  return ng(e, t, "extend");
}
function RC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && fi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Cl(n, e.offset, e.type, t, r);
  return Fo(i, t, r) === void 0;
}
function $C(e, t) {
  const r = ze();
  for (let n = e; n; ) {
    const i = pi(n, t, r), s = i && Fo(i, t, r);
    if (!s)
      return;
    if (n = tn(s), !n)
      return s;
  }
}
function yd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (tn(n))
    return !1;
  const i = eg(n);
  if (!i || !RC(r, t, i))
    return !1;
  const s = pi(i, t, ze()), o = s && tn(s);
  if (!o)
    return !1;
  const a = $C(o, t);
  if (!a)
    return !0;
  if (fi(a)) {
    const u = t === "next" ? 0 : a.getTextContentSize();
    return a.select(u, u), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function bd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function IC(e) {
  const t = e.anchor.getNode(), r = Lp(e);
  if (V(r) && !O(r.getFirstChild())) {
    if (Te(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Te(i) && pt(i)) && i.selectStart(), !0;
      }
    } else return Qt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Te(t) && V(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : bd(r), !0;
  }
  const n = r?.getParent();
  if (Qt(r) && V(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? bd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function LC(e, t) {
  const r = Ok(e);
  if (Ss(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (yt(i.getParent()))
    return !0;
  if (V(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Dn(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (Te(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = rt(o, (c) => V(c));
    if (V(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = Zt(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (Et(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function DC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return he(t) && _s(t);
}
function UC() {
  const [e] = le();
  return FC(e), null;
}
function FC(e) {
  j(() => {
    if (!e.hasNodes([ke]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Fe(
      e.registerNodeTransform(ke, jC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ke, rT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ke, ih),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ke, (t) => us(En("char"), t)),
      e.registerNodeTransform(Ve, BC)
    );
  }, [e]);
}
function ba(e) {
  return e.getChildren().some(O);
}
function KC(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (No(n)) {
    const i = n.getTextContent();
    i.startsWith(L) && (i === L ? n.remove() : n.setTextContent(i.slice(L.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function zC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function jC(e) {
  if (!F(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (ba(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = se(e, vn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (F(i) && Mn({ style: t, cid: r }, i) && It(n, i.getUnknownAttributes()))
    if (ba(i)) {
      if (KC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  F(s) && Mn({ style: t, cid: r }, s) && It(n, s.getUnknownAttributes()) && (ba(s) ? zC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function BC(e) {
  const t = e.getParent();
  if (!F(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(zt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function ig(e) {
  return e.replaceAll("	", " ");
}
function sg() {
  const e = N();
  return !!e && !e.isCollapsed();
}
function og(e) {
  const t = () => !sg();
  return Fe(e.registerCommand(Cs, t, ht), e.registerCommand(Gr, t, ht));
}
const Sl = (e) => {
  e.dispatchCommand(Cs, null);
}, vl = (e) => {
  e.dispatchCommand(Gr, null);
}, Ml = (e) => {
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
      n.setData(o, ig(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(cr, s);
  });
}, El = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", ig(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(cr, i);
  });
};
function VC() {
  const [e] = le();
  return j(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(Zi ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Sl(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), vl(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? El(e) : Ml(e)));
    };
    return Fe(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      og(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function WC({ logger: e }) {
  const [t] = le();
  return j(() => Fe(
    // When the backslash or forward slash key is typed.
    t.registerCommand(pr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), ni),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(cr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ni),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(_o, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ni)
  ), [t, e]), null;
}
function HC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), C("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: C("span", { className: "text", children: i.title }) });
}
function GC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return C("div", { className: "typeahead-popover", children: C("ul", { children: e.map((i, s) => C(HC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let JC = 0;
class $i {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${JC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function YC({ options: e } = {}) {
  const [t] = le(), [r, n] = fe(() => !t.isEditable()), [i, s] = fe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = fe(void 0), c = Be(() => {
    const d = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new $i("Cut", {
        onSelect: () => {
          vl(t);
        },
        isDisabled: r
      }),
      new $i("Copy", {
        onSelect: () => {
          Sl(t);
        }
      }),
      new $i("Paste", {
        onSelect: () => {
          Ml(t);
        },
        isDisabled: r
      }),
      new $i("Paste as Plain Text", {
        onSelect: () => {
          El(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new $i(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = ye(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  j(() => og(t), [t]), j(() => {
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
  const u = te(null);
  return bs(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${m}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? nb.createPortal(C("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: C(GC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function XC(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function QC(e) {
  if (!Uy(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function ZC(e) {
  return bi(e) || Et(e);
}
function ka(e, t, r) {
  const n = vr(t.node);
  if (!_s(n) || ZC(n))
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
function eS(e, t) {
  if (N())
    return !1;
  const r = e.getRootElement(), n = qf(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !Dy(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = ka(e, c, QC(c)), d = u;
  else {
    const y = XC(n.getRangeAt(0), c);
    u = ka(e, c, y ? "before" : "after"), d = ka(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, m = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = Rf(m, e);
  return g ? (Sr(g), g.dirty = !t, t) : !1;
}
function tS() {
  const [e] = le(), t = te(!1), r = te(!1);
  return j(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = N();
        w(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), j(() => e.registerCommand(dr, () => (eS(e, t.current) && (r.current = !0), !1), De), [e]), null;
}
function rS() {
  const [e] = le();
  return j(() => e.registerCommand(pr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(Zi ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, De), [e]), null;
}
function nS({ isEditable: e }) {
  const [t] = le();
  return bs(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function kd(e) {
  return !!e && Vc(ie(e));
}
function ag(e) {
  const [t] = le(), r = te(void 0), n = ye((i) => {
    const s = N(), o = w(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = kd(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = Oo(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = Ak();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      Bt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = ie(a);
      v(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return j(() => {
    const i = () => {
      const a = e(), c = N(), l = w(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Jr(Yr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (vs(c) || !c.includes(ci))
        return;
      const l = N(), u = w(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Pk(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(ci).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = Fe(t.registerCommand(dr, () => (i(), !1), Cn), t.registerCommand(qc, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = kd(a);
      }), c && t.update(() => {
        const l = ie(a);
        v(l) && l.remove();
      }, { tag: Yr }), r.current = void 0, !1;
    }, Cn), t.registerNodeTransform(Ve, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function iS() {
  const e = N();
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!z(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!he(i) || Oo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || he(s))
    return i;
}
function sS() {
  return ag(iS), null;
}
function oS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
          f || Jr(Fy), o.setEditorState(l), o.dispatchCommand(Ky, void 0);
        }, { tag: Qf });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function aS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = le();
  return cS(t, n), lS(i, e, r, n), null;
}
function cS(e, t) {
  const r = te(void 0), n = te(void 0), i = e.noteCallers, s = e.crossRefCallers;
  j(() => {
    let o = i;
    (!o || o.length <= 0) && (o = h_), r.current !== o && (r.current = o, Td("note-callers", o, t));
  }, [t, i]), j(() => {
    let o = s;
    (!o || o.length <= 0) && (o = g_), n.current !== o && (n.current = o, Td("cross-ref-callers", o, t));
  }, [t, s]);
}
function lS(e, t, r, n) {
  j(() => {
    if (!e.hasNodes([ke, Pe, Yt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => mS(s));
    return Fe(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Pe, (s) => uS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ke, dS),
      e.registerNodeTransform(Ve, fS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Yt, pS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Yt, (s, { prevEditorState: o }) => hS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(dr, () => gS(e, t, r, n), ht),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function uS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => Et(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !O(i) && i.getTextContent() !== wt(e.getCaller()) && e.insertBefore(i);
  }
}
function dS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => Et(o));
  if (!F(e) || !V(t) || !n)
    return;
  const i = Wc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  v(s) ? s.getTextContent() !== L && s.setTextContent(L) : e.insertAfter(me(L));
}
function fS(e) {
  const t = Zt(e), r = t?.getChildren(), n = r?.find((o) => Et(o));
  if (!v(e) || !V(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!O(e) && V(i) && e.getTextContent() !== L && (e.setTextContent(L), e.selectEnd()), F(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(zt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Wc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function pS(e) {
  if (!Et(e))
    return;
  const t = e.getNextSibling();
  !v(t) || O(t) ? e.insertAfter(me(L)) : t.getTextContent() !== L && t.setTextContent(L);
}
function hS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = ie(r), a = o?.getParent();
      return Et(o) && V(a) && a.getCaller() === es;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function gS(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = N();
  if (!w(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = rt(o, (c) => V(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = ie(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Ii(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (V(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ii(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (V(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ii(e, c, n);
    } else if (!a) {
      const c = rt(o, (l) => V(l));
      if (c && c.getIsCollapsed() && Te(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ii(e, l, n);
      }
    }
  }
  if (Te(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Dn(c) && V(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Ii(e, l, n);
    }
  }
  return !1;
}
function Ii(e, t, r) {
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
function mS(e) {
  const t = N();
  if (!w(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (V(i) && v(s)) {
    e.preventDefault();
    const o = wc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Sr(o);
  }
}
function Td(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (yS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function yS(e, t) {
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
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = as(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function bS(e) {
  const t = e.getParent();
  if (V(t))
    return Ko(t).some((r) => r.is(e)) ? t : void 0;
}
function co(e) {
  const t = Ko(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function kS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function TS(e) {
  const t = zy();
  if (!w(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= co(e);
  const i = kS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= co(e);
}
function nc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = bS(t);
  if (r)
    return xS(r, t, e.offset) ? void 0 : r;
}
function xS(e, t, r) {
  const n = Ko(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function _S(e) {
  const t = Ko(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Bt(e, co(e));
}
function CS(e = !1) {
  const t = N();
  if (!w(t))
    return !1;
  if (!t.isCollapsed())
    return SS(t.anchor, t.focus);
  const r = nc(t.anchor);
  if (!r)
    return !1;
  if (!e && TS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Bt(n, r.getIndexWithinParent());
  } else
    _S(r);
  return !0;
}
function SS(e, t) {
  const r = nc(e), n = nc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && xd(e, r, i), n && xd(t, n, !i), !0;
}
function xd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), co(t), "element");
}
function vS() {
  const [e] = le(), t = te(!1);
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
  }, [e]), j(() => e.registerCommand(dr, () => (CS(t.current) && Jr(Yr), !1), Cn), [e]), null;
}
function MS({ onChange: e }) {
  const [t] = le();
  return j(() => t.registerCommand(dr, () => {
    const r = fl();
    return e?.(r), !1;
  }, ht), [t, e]), null;
}
function cg(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function rn(e) {
  return e ? Te(e) ? e : rt(e, (r) => Te(r)) ?? void 0 : void 0;
}
function lg(e) {
  if (!w(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = rn(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Al(e) {
  return w(e) && e.isCollapsed() && e.anchor.type === "element" || !w(e) && !mi(e) ? !1 : e.getNodes().some((t) => he(t));
}
function ug(e) {
  if (!w(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = rn(r);
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
function dg(e) {
  if (!w(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = rn(r);
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
function _d(e, t) {
  return !!ic(e, t);
}
function ic(e, t) {
  if (!w(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && z(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return he(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return he(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return he(i) ? i : void 0;
}
function lo(e, t) {
  if (!w(e))
    return !1;
  const r = rn(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function oi(e) {
  return Al(e) || lg(e);
}
function fg(e, t) {
  if (Al(e) || lg(e))
    return !0;
  if (!w(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return ug(e) && lo(e, "backward") || _d(e, "backward");
    case "deleteForward":
      return dg(e) && lo(e, "forward") || _d(e, "forward");
    case "insertText":
      return !1;
  }
}
function ES(e, t) {
  if (!(!w(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = ic(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (ug(e) && lo(e, "backward")) {
        const n = rn(e.anchor.getNode());
        if (Te(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = ic(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (dg(e) && lo(e, "forward")) {
        const i = rn(e.anchor.getNode())?.getNextSibling();
        if (Te(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Cd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return mi(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!w(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!w(e) || e.isCollapsed())
    return !1;
  const r = rn(e.anchor.getNode()), n = rn(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function pg(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else z(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function hg(e) {
  const t = e.getPreviousSibling();
  if (!Te(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild();
  bi(n) && n.remove();
  const i = e.getChildren();
  t.append(...i), e.remove(), r ? pg(r) : pt(t) || t.selectStart();
}
function gg(e) {
  return he(e) || Ye(e) ? [] : Te(e) ? e.getChildren().flatMap(gg) : [e];
}
function AS(e) {
  const t = [];
  for (const r of e) {
    const n = gg(r);
    n.length !== 0 && (Te(r) && t.length > 0 && t.push(me(" ")), t.push(...n));
  }
  return t;
}
const PS = "psc-para-marker-selected", NS = /* @__PURE__ */ new Set(["Process", "Dead", "Unidentified"]);
function wS({ onParaMarkerMenuRequest: e, structureProtectionMode: t = "off" }) {
  const [r] = le(), n = te(e);
  j(() => {
    n.current = e;
  }, [e]);
  const i = te(t);
  return j(() => {
    i.current = t;
  }, [t]), j(() => {
    let s, o, a;
    const c = () => {
      queueMicrotask(() => n.current?.());
    }, l = () => r.isEditable() ? Zr(N()) : void 0, u = (U) => {
      i.current !== "protected" && hg(U);
    }, d = (U) => {
      const I = r.getRootElement(), re = qf(I?.ownerDocument.defaultView ?? null), J = re?.anchorNode;
      if (!re || !J || !I?.contains(J) || r.getElementByKey(U)?.contains(J))
        return !1;
      const be = Rf(re, r);
      return be ? (Sr(be), !0) : !1;
    }, f = (U) => {
      const I = Qi(U.target) ? vr(U.target) : null;
      if (bi(I))
        return zk(I);
      const re = Br(N());
      if (!re || !I || d(re.getKey()))
        return !1;
      const J = I.getParent();
      return _s(I) && J && Bt(J, I.getIndexWithinParent() + 1), !1;
    }, p = (U) => {
      if (typeof U.key != "string" || B())
        return !1;
      const I = l();
      if (!I)
        return !1;
      const re = n.current !== void 0;
      switch (U.key) {
        case "Enter":
          if (!re)
            break;
          return U.preventDefault(), c(), !0;
        case "ArrowDown":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
          return U.preventDefault(), U.key === "ArrowDown" && U.altKey && re ? c() : pt(I), !0;
        case "Backspace":
        case "Delete":
          return U.preventDefault(), u(I), !0;
        default:
          if (!qS(U))
            return !1;
      }
      return pt(I), !1;
    }, m = () => {
      const U = l();
      return U ? (u(U), !0) : !1;
    }, g = (U) => {
      if (B())
        return !1;
      const I = l();
      return I ? U.inputType.startsWith("delete") ? (U.preventDefault(), u(I), !0) : (U.inputType.startsWith("insert") && pt(I), !1) : !1;
    }, y = () => {
      const U = l();
      return U && pt(U), !1;
    }, k = () => {
      const U = r.isEditable() ? Br(N()) : void 0, I = U?.getParent();
      return !U || !Te(I) || d(U.getKey()) || pt(I), !1;
    }, _ = (U) => {
      const I = Br(N());
      return !I || !r.isEditable() || d(I.getKey()) ? !1 : ($S(U) && U.preventDefault(), !0);
    }, S = (U) => {
      if (!Qi(U.target))
        return !1;
      const I = Br(N());
      return !I || !vr(U.target)?.is(I) ? !1 : (U.preventDefault(), !0);
    }, P = () => {
      const U = l();
      return U ? (pt(U), !0) : !1;
    }, E = () => {
      if (r.getEditorState().read(() => Br(N()) !== void 0) && r.isEditable()) {
        const I = r.getRootElement();
        xa(I), I?.ownerDocument.defaultView?.setTimeout(() => xa(I));
      }
      return !1;
    }, B = () => {
      const U = N();
      if (!a || !mg(U, a.glyphKey))
        return !1;
      const { ownerKey: I, previousKey: re, nextKey: J } = a;
      a = void 0;
      const be = ie(I), ge = re ? ie(re) : null, dt = J ? ie(J) : null;
      return Te(be) && be.isAttached() ? pt(be) || be.selectStart() : ge?.isAttached() ? ge.selectEnd() : Te(dt) && dt.isAttached() ? pt(dt) || dt.selectStart() : Sr(null), !0;
    }, M = (U) => {
      const I = r.isEditable() ? U : void 0, re = I?.ownerKey;
      s !== re && Ta(r, s, !1), s = re, Ta(r, re, !0), o = Sd(r, o, I?.glyphKey);
    }, R = (U = r.getEditorState()) => U.read(() => {
      const I = Br(N()), re = I?.getParent();
      if (!(!I || !re))
        return {
          glyphKey: I.getKey(),
          ownerKey: re.getKey(),
          previousKey: re.getPreviousSibling()?.getKey(),
          nextKey: re.getNextSibling()?.getKey()
        };
    }), $ = Fe(Fk(r), r.registerEditableListener(() => M(R())), r.registerCommand(ai, f, De), r.registerCommand(pr, p, De), r.registerCommand(Rc, P, De), r.registerCommand(Of, m, De), r.registerCommand(jy, g, De), r.registerCommand(xo, y, De), r.registerCommand(cr, k, De), r.registerCommand(Gr, _, De), r.registerCommand(Cs, _, De), r.registerCommand($f, _, De), r.registerCommand(_o, S, De), r.registerCommand(If, E, De), r.registerUpdateListener(({ editorState: U }) => {
      const I = R(U);
      (I || !OS(U, a?.glyphKey)) && (a = I), M(I), I && r.isEditable() && xa(r.getRootElement());
    }));
    return () => {
      $(), Ta(r, s, !1), Sd(r, o, void 0);
    };
  }, [r]), null;
}
function mg(e, t) {
  return !mi(e) || Br(e) ? !1 : e.has(t) || e.getNodes().length === 0;
}
function OS(e, t) {
  return t === void 0 ? !1 : e.read(() => mg(N(), t));
}
function qS(e) {
  return Zh(e) || NS.has(e.key) ? !0 : e.ctrlKey || e.metaKey || e.altKey && !Zi ? !1 : RS(e.key);
}
function RS(e) {
  return [...e].length === 1;
}
function $S(e) {
  return typeof e == "object" && e !== null && typeof e.preventDefault == "function";
}
function Ta(e, t, r) {
  if (t === void 0)
    return;
  const n = e.getElementByKey(t);
  n && n.classList.toggle(PS, r);
}
const IS = "psc-para-marker-";
function Sd(e, t, r) {
  const n = e.getRootElement(), i = r === void 0 ? null : e.getElementByKey(r), s = t === void 0 ? null : e.getElementByKey(t);
  if (s && s !== i && (s.removeAttribute("role"), s.removeAttribute("aria-selected")), !!n) {
    if (!i || r === void 0) {
      t !== void 0 && n.removeAttribute("aria-activedescendant");
      return;
    }
    return i.id || (i.id = `${IS}${e.getKey()}-${r}`), i.setAttribute("role", "option"), i.setAttribute("aria-selected", "true"), n.setAttribute("aria-activedescendant", i.id), r;
  }
}
function xa(e) {
  if (!e)
    return;
  const t = e.ownerDocument.defaultView?.getSelection();
  !t || t.rangeCount === 0 || t.anchorNode && e.contains(t.anchorNode) && t.removeAllRanges();
}
function LS() {
  const [e] = le();
  return DS(e), null;
}
function DS(e) {
  j(() => {
    if (!e.hasNodes([nt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(nt, (t) => US(t, e));
  }, [e]);
}
function US(e, t) {
  Xa(t, e.getKey()) && Nh(e.getFirstChild()), !(!ae(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = ie(e.getKey());
    return ae(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function yg({ onStateChange: e }) {
  const [t] = le(), [r, n] = fe(t), i = te(!1), s = te(!1), o = te(void 0), a = te(void 0), c = ye(() => {
    const l = N(), u = r.isEditable() ? Zr(l) : void 0;
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
    if (w(l)) {
      const f = l.anchor.getNode(), p = l.focus.getNode();
      let m = f.getKey() === "root" ? f : rt(f, (_) => {
        const S = _.getParent();
        return S !== null && By(S);
      });
      m === null && (m = f.getTopLevelElementOrThrow()), ds(m) && (m = rt(f, ae) ?? m);
      const g = m.getKey(), y = r.getElementByKey(g), k = Rk(f, p);
      if (k && Ex(k) && (d = k.getMarker()), y !== null && (ae(m) || yt(m) || Ss(m))) {
        o.current = m.getMarker(), a.current = d, e?.({
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
  return j(() => t.registerCommand(dr, (l, u) => (c(), n(u), !1), De), [t, c]), j(() => Fe(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Vy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), De), r.registerCommand(Wy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), De)), [c, r, e]), null;
}
function vd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function FS(e) {
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
function zS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jS(e, t) {
  return FS(e) || KS(e, t) || BS(e, t) || zS();
}
function BS(e, t) {
  if (e) {
    if (typeof e == "string") return vd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? vd(e, t) : void 0;
  }
}
const bg = Object.entries, Md = Object.setPrototypeOf, VS = Object.isFrozen, WS = Object.getPrototypeOf, HS = Object.getOwnPropertyDescriptor;
let it = Object.freeze, at = Object.seal, ti = Object.create, kg = typeof Reflect < "u" && Reflect, sc = kg.apply, oc = kg.construct;
it || (it = function(t) {
  return t;
});
at || (at = function(t) {
  return t;
});
sc || (sc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
oc || (oc = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Xn = Xe(Array.prototype.forEach), GS = Xe(Array.prototype.lastIndexOf), Ed = Xe(Array.prototype.pop), Qn = Xe(Array.prototype.push), JS = Xe(Array.prototype.splice), Wr = Array.isArray, ji = Xe(String.prototype.toLowerCase), _a = Xe(String.prototype.toString), Ad = Xe(String.prototype.match), Li = Xe(String.prototype.replace), Pd = Xe(String.prototype.indexOf), YS = Xe(String.prototype.trim), XS = Xe(Number.prototype.toString), QS = Xe(Boolean.prototype.toString), Nd = typeof BigInt > "u" ? null : Xe(BigInt.prototype.toString), wd = typeof Symbol > "u" ? null : Xe(Symbol.prototype.toString), et = Xe(Object.prototype.hasOwnProperty), Di = Xe(Object.prototype.toString), Ze = Xe(RegExp.prototype.test), yn = ZS(TypeError);
function Xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return sc(e, t, n);
  };
}
function ZS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return oc(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ji;
  if (Md && Md(e, null), !Wr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (VS(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function ev(e) {
  for (let t = 0; t < e.length; t++)
    et(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = ti(null);
  for (const n of bg(e)) {
    var r = jS(n, 2);
    const i = r[0], s = r[1];
    et(e, i) && (Wr(s) ? t[i] = ev(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function tv(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return XS(e);
    case "boolean":
      return QS(e);
    case "bigint":
      return Nd ? Nd(e) : "0";
    case "symbol":
      return wd ? wd(e) : "Symbol()";
    case "undefined":
      return Di(e);
    case "function":
    case "object": {
      if (e === null)
        return Di(e);
      const t = e, r = Wt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Di(n);
      }
      return Di(e);
    }
    default:
      return Di(e);
  }
}
function Wt(e, t) {
  for (; e !== null; ) {
    const n = HS(e, t);
    if (n) {
      if (n.get)
        return Xe(n.get);
      if (typeof n.value == "function")
        return Xe(n.value);
    }
    e = WS(e);
  }
  function r() {
    return null;
  }
  return r;
}
function rv(e) {
  try {
    return Ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const Od = it(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ca = it(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Sa = it(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), nv = it(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), va = it(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), iv = it(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qd = it(["#text"]), Rd = it(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ma = it(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), $d = it(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ls = it(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), sv = at(/{{[\w\W]*|^[\w\W]*}}/g), ov = at(/<%[\w\W]*|^[\w\W]*%>/g), av = at(/\${[\w\W]*/g), cv = at(/^data-[\-\w.\u00B7-\uFFFF]+$/), lv = at(/^aria-[\-\w]+$/), Id = at(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), uv = at(/^(?:\w+script|data):/i), dv = at(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), fv = at(/^html$/i), pv = at(/^[a-z][.\w]*(-[.\w]+)+$/i), Ld = at(/<[/\w!]/g), Dd = at(/<[/\w]/g), hv = at(/<\/no(script|embed|frames)/i), gv = at(/\/>/i), Pt = {
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
}, mv = function() {
  return typeof window > "u" ? null : window;
}, yv = function(t, r) {
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
}, Ud = function() {
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
}, zr = function(t, r, n, i) {
  return et(t, r) && Wr(t[r]) ? pe(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function Tg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mv();
  const t = (K) => Tg(K);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Pt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Wt(f, "cloneNode"), m = Wt(f, "remove"), g = Wt(f, "nextSibling"), y = Wt(f, "childNodes"), k = Wt(f, "parentNode"), _ = Wt(f, "shadowRoot"), S = Wt(f, "attributes"), P = o && o.prototype ? Wt(o.prototype, "nodeType") : null, E = o && o.prototype ? Wt(o.prototype, "nodeName") : null, B = o && o.prototype ? Wt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const K = r.createElement("template");
    K.content && K.content.ownerDocument && (r = K.content.ownerDocument);
  }
  let M, R = "", $, U = !1, I = 0;
  const re = function() {
    if (I > 0)
      throw yn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, J = function(h) {
    re(), I++;
    try {
      return M.createHTML(h);
    } finally {
      I--;
    }
  }, be = function(h) {
    re(), I++;
    try {
      return M.createScriptURL(h);
    } finally {
      I--;
    }
  }, ge = function() {
    return U || ($ = yv(d, i), U = !0), $;
  }, dt = r, je = dt.implementation, Lr = dt.createNodeIterator, Dr = dt.createDocumentFragment, cn = dt.getElementsByTagName, Q = n.importNode;
  let A = Ud();
  t.isSupported = typeof bg == "function" && typeof k == "function" && je && je.createHTMLDocument !== void 0;
  const G = sv, de = ov, Me = av, Z = cv, ve = lv, yr = uv, $t = dv, ln = pv;
  let He = Id, ue = null;
  const bt = pe({}, [...Od, ...Ca, ...Sa, ...va, ...qd]);
  let Ce = null;
  const br = pe({}, [...Rd, ...Ma, ...$d, ...Ls]);
  let we = Object.seal(ti(null, {
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
  })), kr = null, Ei = null;
  const kt = Object.seal(ti(null, {
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
  let As = !0, Tr = !0, Fn = !1, Ai = !0, rr = !1, Vt = !0, q = !1, W = !1, Y = null, ee = null, Ee = !1, Qe = !1, At = !1, un = !1, Pi = !0, Zl = !1;
  const eu = "user-content-";
  let Wo = !0, Ps = !1, Kn = {}, nr = null;
  const Ho = pe({}, [
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
  let tu = null;
  const ru = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Go = null;
  const nu = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ns = "http://www.w3.org/1998/Math/MathML", ws = "http://www.w3.org/2000/svg", ir = "http://www.w3.org/1999/xhtml";
  let zn = ir, Jo = !1, Yo = null;
  const iy = pe({}, [Ns, ws, ir], _a), iu = it(["mi", "mo", "mn", "ms", "mtext"]);
  let Xo = pe({}, iu);
  const su = it(["annotation-xml"]);
  let Qo = pe({}, su);
  const sy = pe({}, ["title", "style", "font", "a", "script"]);
  let Ni = null;
  const oy = ["application/xhtml+xml", "text/html"], ay = "text/html";
  let Ie = null, jn = null;
  const cy = r.createElement("form"), ou = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, Zo = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (jn && jn === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = ct(h), Ni = // eslint-disable-next-line unicorn/prefer-includes
    oy.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? ay : h.PARSER_MEDIA_TYPE, Ie = Ni === "application/xhtml+xml" ? _a : ji, ue = zr(h, "ALLOWED_TAGS", bt, {
      transform: Ie
    }), Ce = zr(h, "ALLOWED_ATTR", br, {
      transform: Ie
    }), Yo = zr(h, "ALLOWED_NAMESPACES", iy, {
      transform: _a
    }), Go = zr(h, "ADD_URI_SAFE_ATTR", nu, {
      transform: Ie,
      base: nu
    }), tu = zr(h, "ADD_DATA_URI_TAGS", ru, {
      transform: Ie,
      base: ru
    }), nr = zr(h, "FORBID_CONTENTS", Ho, {
      transform: Ie
    }), kr = zr(h, "FORBID_TAGS", ct({}), {
      transform: Ie
    }), Ei = zr(h, "FORBID_ATTR", ct({}), {
      transform: Ie
    }), Kn = et(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? ct(h.USE_PROFILES) : h.USE_PROFILES : !1, As = h.ALLOW_ARIA_ATTR !== !1, Tr = h.ALLOW_DATA_ATTR !== !1, Fn = h.ALLOW_UNKNOWN_PROTOCOLS || !1, Ai = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, rr = h.SAFE_FOR_TEMPLATES || !1, Vt = h.SAFE_FOR_XML !== !1, q = h.WHOLE_DOCUMENT || !1, Qe = h.RETURN_DOM || !1, At = h.RETURN_DOM_FRAGMENT || !1, un = h.RETURN_TRUSTED_TYPE || !1, Ee = h.FORCE_BODY || !1, Pi = h.SANITIZE_DOM !== !1, Zl = h.SANITIZE_NAMED_PROPS || !1, Wo = h.KEEP_CONTENT !== !1, Ps = h.IN_PLACE || !1, He = rv(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : Id, zn = typeof h.NAMESPACE == "string" ? h.NAMESPACE : ir, Xo = et(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(h.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, iu), Qo = et(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? ct(h.HTML_INTEGRATION_POINTS) : pe({}, su);
    const x = et(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? ct(h.CUSTOM_ELEMENT_HANDLING) : ti(null);
    if (we = ti(null), et(x, "tagNameCheck") && ou(x.tagNameCheck) && (we.tagNameCheck = x.tagNameCheck), et(x, "attributeNameCheck") && ou(x.attributeNameCheck) && (we.attributeNameCheck = x.attributeNameCheck), et(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (we.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), at(we), rr && (Tr = !1), At && (Qe = !0), Kn && (ue = pe({}, qd), Ce = ti(null), Kn.html === !0 && (pe(ue, Od), pe(Ce, Rd)), Kn.svg === !0 && (pe(ue, Ca), pe(Ce, Ma), pe(Ce, Ls)), Kn.svgFilters === !0 && (pe(ue, Sa), pe(Ce, Ma), pe(Ce, Ls)), Kn.mathMl === !0 && (pe(ue, va), pe(Ce, $d), pe(Ce, Ls))), kt.tagCheck = null, kt.attributeCheck = null, et(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? kt.tagCheck = h.ADD_TAGS : Wr(h.ADD_TAGS) && (ue === bt && (ue = ct(ue)), pe(ue, h.ADD_TAGS, Ie))), et(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? kt.attributeCheck = h.ADD_ATTR : Wr(h.ADD_ATTR) && (Ce === br && (Ce = ct(Ce)), pe(Ce, h.ADD_ATTR, Ie))), et(h, "ADD_URI_SAFE_ATTR") && Wr(h.ADD_URI_SAFE_ATTR) && pe(Go, h.ADD_URI_SAFE_ATTR, Ie), et(h, "FORBID_CONTENTS") && Wr(h.FORBID_CONTENTS) && (nr === Ho && (nr = ct(nr)), pe(nr, h.FORBID_CONTENTS, Ie)), et(h, "ADD_FORBID_CONTENTS") && Wr(h.ADD_FORBID_CONTENTS) && (nr === Ho && (nr = ct(nr)), pe(nr, h.ADD_FORBID_CONTENTS, Ie)), Wo && (ue["#text"] = !0), q && pe(ue, ["html", "head", "body"]), ue.table && (pe(ue, ["tbody"]), delete kr.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw yn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw yn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const D = M;
      M = h.TRUSTED_TYPES_POLICY;
      try {
        R = J("");
      } catch (H) {
        throw M = D, H;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (M = void 0, R = "") : (M === void 0 && (M = ge()), M && typeof R == "string" && (R = J("")));
    it && it(h), jn = h;
  }, au = pe({}, [...Ca, ...Sa, ...nv]), cu = pe({}, [...va, ...iv]), ly = function(h, x, D) {
    return x.namespaceURI === ir ? h === "svg" : x.namespaceURI === Ns ? h === "svg" && (D === "annotation-xml" || Xo[D]) : !!au[h];
  }, uy = function(h, x, D) {
    return x.namespaceURI === ir ? h === "math" : x.namespaceURI === ws ? h === "math" && Qo[D] : !!cu[h];
  }, dy = function(h, x, D) {
    return x.namespaceURI === ws && !Qo[D] || x.namespaceURI === Ns && !Xo[D] ? !1 : !cu[h] && (sy[h] || !au[h]);
  }, fy = function(h) {
    let x = k(h);
    (!x || !x.tagName) && (x = {
      namespaceURI: zn,
      tagName: "template"
    });
    const D = ji(h.tagName), H = ji(x.tagName);
    return Yo[h.namespaceURI] ? h.namespaceURI === ws ? ly(D, x, H) : h.namespaceURI === Ns ? uy(D, x, H) : h.namespaceURI === ir ? dy(D, x, H) : !!(Ni === "application/xhtml+xml" && Yo[h.namespaceURI]) : !1;
  }, Ur = function(h) {
    Qn(t.removed, {
      element: h
    });
    try {
      k(h).removeChild(h);
    } catch {
      if (m(h), !k(h))
        throw yn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Os = function(h) {
    wi(h);
    const x = y(h);
    if (x) {
      const H = [];
      Xn(x, (X) => {
        Qn(H, X);
      }), Xn(H, (X) => {
        try {
          m(X);
        } catch {
        }
      });
    }
    const D = S(h);
    if (D)
      for (let H = D.length - 1; H >= 0; --H) {
        const X = D[H], oe = X && X.name;
        if (typeof oe == "string")
          try {
            h.removeAttribute(oe);
          } catch {
          }
      }
  }, dn = function(h, x) {
    try {
      Qn(t.removed, {
        attribute: x.getAttributeNode(h),
        from: x
      });
    } catch {
      Qn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(h), h === "is")
      if (Qe || At)
        try {
          Ur(x);
        } catch {
        }
      else
        try {
          x.setAttribute(h, "");
        } catch {
        }
  }, py = function(h) {
    const x = S(h);
    if (x)
      for (let D = x.length - 1; D >= 0; --D) {
        const H = x[D], X = H && H.name;
        if (!(typeof X != "string" || Ce[Ie(X)]))
          try {
            h.removeAttribute(X);
          } catch {
          }
      }
  }, wi = function(h) {
    const x = [h];
    for (; x.length > 0; ) {
      const D = x.pop();
      (P ? P(D) : D.nodeType) === Pt.element && py(D);
      const X = y(D);
      if (X)
        for (let oe = X.length - 1; oe >= 0; --oe)
          x.push(X[oe]);
    }
  }, hy = function(h) {
    if (!Vt)
      return;
    const x = [h];
    for (; x.length > 0; ) {
      const D = x.pop(), H = P ? P(D) : D.nodeType;
      if (H === Pt.processingInstruction || H === Pt.comment && Ze(Dd, D.data)) {
        try {
          m(D);
        } catch {
        }
        continue;
      }
      if (H === Pt.element) {
        const oe = D, xe = Ie(E ? E(D) : D.nodeName);
        try {
          oe.hasAttribute && oe.hasAttribute("patchsrc") && oe.removeAttribute("patchsrc"), oe.hasAttribute && oe.hasAttribute("for") && xe !== "label" && xe !== "output" && oe.removeAttribute("for");
        } catch {
        }
      }
      const X = y(D);
      if (X)
        for (let oe = X.length - 1; oe >= 0; --oe)
          x.push(X[oe]);
    }
  }, lu = function(h) {
    let x = null, D = null;
    if (Ee)
      h = "<remove></remove>" + h;
    else {
      const oe = Ad(h, /^[\r\n\t ]+/);
      D = oe && oe[0];
    }
    Ni === "application/xhtml+xml" && zn === ir && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const H = M ? J(h) : h;
    if (zn === ir)
      try {
        x = new u().parseFromString(H, Ni);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = je.createDocument(zn, "template", null);
      try {
        x.documentElement.innerHTML = Jo ? R : H;
      } catch {
      }
    }
    const X = x.body || x.documentElement;
    return h && D && X.insertBefore(r.createTextNode(D), X.childNodes[0] || null), zn === ir ? cn.call(x, q ? "html" : "body")[0] : q ? x.documentElement : X;
  }, uu = function(h) {
    const x = B ? B(h) : h.ownerDocument;
    return Lr.call(
      x || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, qs = function(h) {
    return h = Li(h, G, " "), h = Li(h, de, " "), h = Li(h, Me, " "), h;
  }, ea = function(h) {
    var x;
    h.normalize();
    const D = B ? B(h) : h.ownerDocument, H = Lr.call(
      D || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = H.nextNode();
    for (; X; )
      X.data = qs(X.data), X = H.nextNode();
    const oe = (x = h.querySelectorAll) === null || x === void 0 ? void 0 : x.call(h, "template");
    oe && Xn(oe, (xe) => {
      Bn(xe.content) && ea(xe.content);
    });
  }, Rs = function(h) {
    const x = E ? E(h) : null;
    return typeof x != "string" || Ie(x) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    h.attributes !== S(h) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
  }, Bn = function(h) {
    if (!P || typeof h != "object" || h === null)
      return !1;
    try {
      return P(h) === Pt.documentFragment;
    } catch {
      return !1;
    }
  }, Oi = function(h) {
    if (!P || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof P(h) == "number";
    } catch {
      return !1;
    }
  };
  function sr(K, h, x) {
    K.length !== 0 && Xn(K, (D) => {
      D.call(t, h, x, jn);
    });
  }
  const gy = function(h, x) {
    return !!(Vt && h.hasChildNodes() && !Oi(h.firstElementChild) && Ze(Ld, h.textContent) && Ze(Ld, h.innerHTML) || Vt && h.namespaceURI === ir && x === "style" && Oi(h.firstElementChild) || h.nodeType === Pt.processingInstruction || Vt && h.nodeType === Pt.comment && Ze(Dd, h.data));
  }, my = function(h, x, D) {
    if (!kr[x] && hu(x) && (we.tagNameCheck instanceof RegExp && Ze(we.tagNameCheck, x) || we.tagNameCheck instanceof Function && we.tagNameCheck(x)))
      return !1;
    if (Wo && !nr[x]) {
      const H = k(h), X = y(h);
      if (X && H) {
        const oe = X.length;
        for (let xe = oe - 1; xe >= 0; --xe) {
          const Le = h === D ? p(X[xe], !0) : X[xe];
          H.insertBefore(Le, g(h));
        }
      }
    }
    return Ur(h), !0;
  }, du = function(h, x, D, H) {
    return h.length === 0 ? x : x === D || x === H ? ct(x) : x;
  }, fu = function(h, x) {
    if (sr(A.beforeSanitizeElements, h, null), h !== x && k(h) === null)
      return Ps && wi(h), !0;
    if (Rs(h))
      return Ur(h), !0;
    const D = Ie(E ? E(h) : h.nodeName);
    if (ue = du(A.uponSanitizeElement, ue, bt, Y), sr(A.uponSanitizeElement, h, {
      tagName: D,
      allowedTags: ue
    }), h !== x && k(h) === null)
      return Ps && wi(h), !0;
    if (gy(h, D))
      return Ur(h), !0;
    if (kr[D] || !(kt.tagCheck instanceof Function && kt.tagCheck(D)) && !ue[D]) {
      const X = my(h, D, x);
      return X === !1 && sr(A.afterSanitizeElements, h, null), X;
    }
    if ((P ? P(h) : h.nodeType) === Pt.element && !fy(h) || (D === "noscript" || D === "noembed" || D === "noframes") && Ze(hv, h.innerHTML))
      return Ur(h), !0;
    if (rr && h.nodeType === Pt.text) {
      const X = qs(h.textContent);
      h.textContent !== X && (Qn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = X);
    }
    return sr(A.afterSanitizeElements, h, null), !1;
  }, pu = function(h, x, D) {
    if (Ei[x] || Vt && x === "patchsrc" || Vt && x === "for" && h !== "label" && h !== "output" || Pi && (x === "id" || x === "name") && (D in r || D in cy))
      return !1;
    const H = Ce[x] || kt.attributeCheck instanceof Function && kt.attributeCheck(x, h);
    if (!(Tr && Ze(Z, x))) {
      if (!(As && Ze(ve, x))) {
        if (H) {
          if (!Go[x]) {
            if (!Ze(He, Li(D, $t, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && h !== "script" && Pd(D, "data:") === 0 && tu[h])) {
                if (!(Fn && !Ze(yr, Li(D, $t, "")))) {
                  if (D)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(hu(h) && (we.tagNameCheck instanceof RegExp && Ze(we.tagNameCheck, h) || we.tagNameCheck instanceof Function && we.tagNameCheck(h)) && (we.attributeNameCheck instanceof RegExp && Ze(we.attributeNameCheck, x) || we.attributeNameCheck instanceof Function && we.attributeNameCheck(x, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && we.allowCustomizedBuiltInElements && (we.tagNameCheck instanceof RegExp && Ze(we.tagNameCheck, D) || we.tagNameCheck instanceof Function && we.tagNameCheck(D)))
        ) return !1;
      }
    }
    return !0;
  }, yy = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), hu = function(h) {
    return !yy[ji(h)] && Ze(ln, h);
  }, by = function(h, x, D, H) {
    if (M && typeof d == "object" && typeof d.getAttributeType == "function" && !D)
      switch (d.getAttributeType(h, x)) {
        case "TrustedHTML":
          return J(H);
        case "TrustedScriptURL":
          return be(H);
      }
    return H;
  }, ky = function(h, x, D, H) {
    try {
      D ? h.setAttributeNS(D, x, H) : h.setAttribute(x, H), Rs(h) ? Ur(h) : Ed(t.removed);
    } catch {
      dn(x, h);
    }
  }, gu = function(h) {
    sr(A.beforeSanitizeAttributes, h, null);
    const x = h.attributes;
    if (!x || Rs(h))
      return;
    Ce = du(A.uponSanitizeAttribute, Ce, br, ee);
    const D = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Ce,
      forceKeepAttr: void 0
    };
    let H = x.length;
    const X = Ie(h.nodeName);
    for (; H--; ) {
      const oe = x[H], xe = oe.name, Le = oe.namespaceURI, Tt = oe.value, xt = Ie(xe), ra = Tt;
      let ft = xe === "value" ? ra : YS(ra);
      if (D.attrName = xt, D.attrValue = ft, D.keepAttr = !0, D.forceKeepAttr = void 0, sr(A.uponSanitizeAttribute, h, D), ft = D.attrValue, Zl && (xt === "id" || xt === "name") && Pd(ft, eu) !== 0 && (dn(xe, h), ft = eu + ft), Vt && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ft)) {
        dn(xe, h);
        continue;
      }
      if (xt === "attributename" && Ad(ft, "href")) {
        dn(xe, h);
        continue;
      }
      if (!D.forceKeepAttr) {
        if (!D.keepAttr) {
          dn(xe, h);
          continue;
        }
        if (!Ai && Ze(gv, ft)) {
          dn(xe, h);
          continue;
        }
        if (rr && (ft = qs(ft)), !pu(X, xt, ft)) {
          dn(xe, h);
          continue;
        }
        ft = by(X, xt, Le, ft), ft !== ra && ky(h, xe, Le, ft);
      }
    }
    sr(A.afterSanitizeAttributes, h, null);
  }, $s = function(h) {
    let x = null;
    const D = uu(h);
    for (sr(A.beforeSanitizeShadowDOM, h, null); x = D.nextNode(); )
      if (sr(A.uponSanitizeShadowNode, x, null), fu(x, h), gu(x), Bn(x.content) && $s(x.content), (P ? P(x) : x.nodeType) === Pt.element) {
        const X = _(x);
        Bn(X) && (ta(X), $s(X));
      }
    sr(A.afterSanitizeShadowDOM, h, null);
  }, ta = function(h) {
    const x = [{
      node: h,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const D = x.pop();
      if (D.shadow) {
        $s(D.shadow);
        continue;
      }
      const H = D.node, oe = (P ? P(H) : H.nodeType) === Pt.element, xe = y(H);
      if (xe)
        for (let Le = xe.length - 1; Le >= 0; --Le)
          x.push({
            node: xe[Le],
            shadow: null
          });
      if (oe) {
        const Le = E ? E(H) : null;
        if (typeof Le == "string" && Ie(Le) === "template") {
          const Tt = H.content;
          Bn(Tt) && x.push({
            node: Tt,
            shadow: null
          });
        }
      }
      if (oe) {
        const Le = _(H);
        Bn(Le) && x.push({
          node: null,
          shadow: Le
        }, {
          node: Le,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(K) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, D = null, H = null, X = null;
    if (Jo = !K, Jo && (K = "<!-->"), typeof K != "string" && !Oi(K) && (K = tv(K), typeof K != "string"))
      throw yn("dirty is not a string, aborting");
    if (!t.isSupported)
      return K;
    W ? (ue = Y, Ce = ee) : Zo(h), (A.uponSanitizeElement.length > 0 || A.uponSanitizeAttribute.length > 0) && (ue = ct(ue)), A.uponSanitizeAttribute.length > 0 && (Ce = ct(Ce)), t.removed = [];
    const oe = Ps && typeof K != "string" && Oi(K);
    if (oe) {
      hy(K);
      const Tt = E ? E(K) : K.nodeName;
      if (typeof Tt == "string") {
        const xt = Ie(Tt);
        if (!ue[xt] || kr[xt])
          throw Os(K), yn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Rs(K))
        throw Os(K), yn("root node is clobbered and cannot be sanitized in-place");
      try {
        ta(K);
      } catch (xt) {
        throw Os(K), xt;
      }
    } else if (Oi(K))
      x = lu("<!---->"), D = x.ownerDocument.importNode(K, !0), D.nodeType === Pt.element && D.nodeName === "BODY" || D.nodeName === "HTML" ? x = D : x.appendChild(D), ta(D);
    else {
      if (!Qe && !rr && !q && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return M && un ? J(K) : K;
      if (x = lu(K), !x)
        return Qe ? null : un ? R : "";
    }
    x && Ee && Ur(x.firstChild);
    const xe = oe ? K : x;
    try {
      const Tt = uu(xe);
      for (; H = Tt.nextNode(); )
        fu(H, xe), gu(H), Bn(H.content) && $s(H.content);
    } catch (Tt) {
      throw oe && (Os(K), Xn(t.removed, (xt) => {
        xt.element && wi(xt.element);
      })), Tt;
    }
    if (oe)
      return Xn(t.removed, (Tt) => {
        Tt.element && wi(Tt.element);
      }), rr && ea(K), K;
    if (Qe) {
      if (rr && ea(x), At)
        for (X = Dr.call(x.ownerDocument); x.firstChild; )
          X.appendChild(x.firstChild);
      else
        X = x;
      return (Ce.shadowroot || Ce.shadowrootmode) && (X = Q.call(n, X, !0)), X;
    }
    let Le = q ? x.outerHTML : x.innerHTML;
    return q && ue["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Ze(fv, x.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Le), rr && (Le = qs(Le)), M && un ? J(Le) : Le;
  }, t.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zo(K), W = !0, Y = ue, ee = Ce;
  }, t.clearConfig = function() {
    jn = null, W = !1, Y = null, ee = null, M = $, R = "";
  }, t.isValidAttribute = function(K, h, x) {
    jn || Zo({});
    const D = Ie(K), H = Ie(h);
    return pu(D, H, x);
  }, t.addHook = function(K, h) {
    typeof h == "function" && et(A, K) && Qn(A[K], h);
  }, t.removeHook = function(K, h) {
    if (et(A, K)) {
      if (h !== void 0) {
        const x = GS(A[K], h);
        return x === -1 ? void 0 : JS(A[K], x, 1)[0];
      }
      return Ed(A[K]);
    }
  }, t.removeHooks = function(K) {
    et(A, K) && (A[K] = []);
  }, t.removeAllHooks = function() {
    A = Ud();
  }, t;
}
var bv = Tg();
function kv({ structureProtectionMode: e = "off" }) {
  const [t] = le(), r = te(void 0), [n, i] = fe(void 0), s = ye((o) => {
    r.current = o, i(o);
  }, []);
  return j(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = cg(p);
      if (!m)
        return !1;
      const g = N();
      return e === "protected" ? g && fg(g, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const g = N(), y = r.current;
      if (y && g && Cd(g, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const _ = ie(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (_) {
            const S = _.getParent(), P = _.getPreviousSibling(), E = _.getNextSibling();
            _.remove(), P ? pg(P) : E && v(E) ? E.select(0, 0) : S?.selectStart();
          }
        } else y.kind === "selection" ? w(g) && g.removeText() : Te(_) && hg(_);
        return !0;
      }
      if (!g)
        return !1;
      const k = ES(g, p);
      if (k) {
        if (k.kind === "verse") {
          const _ = Nc();
          _.add(k.node.getKey()), Sr(_);
        } else {
          const _ = wc();
          _.anchor.set(k.node.getKey(), 0, "element"), _.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), Sr(_);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), m.preventDefault(), !0;
      }
      if (w(g) && !g.isCollapsed() && Al(g)) {
        const _ = g.getNodes().filter(he).map((E) => E.getKey()), { anchor: S, focus: P } = g;
        return s({
          kind: "selection",
          intent: p,
          key: _[0],
          anchor: { key: S.key, offset: S.offset, type: S.type },
          focus: { key: P.key, offset: P.offset, type: P.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = N();
      return !m || !oi(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const g = bv.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), k = AS(fb(t, y)), _ = N();
      return w(_) && _.insertNodes(k), m.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = N();
      return m && oi(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = N();
      return m && oi(m) ? (p.preventDefault(), !0) : w(m) ? l(p.dataTransfer?.getData("text/html"), p) : !1;
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Cd(N(), p) || s(void 0);
      });
    };
    return Fe(
      t.registerCommand(pr, o, qe),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(Gr, c, De),
      t.registerCommand(cr, u, qe),
      t.registerCommand($f, c, qe),
      t.registerCommand(_o, d, qe),
      t.registerCommand(xo, c, qe),
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
const tN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function Tv({ textDirection: e }) {
  const [t] = le();
  return xv(t, e), null;
}
function xv(e, t) {
  j(() => (Fd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Fd(e, t);
  })), [e, t]);
}
function Fd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function _v() {
  const [e] = le();
  return Cv(e), null;
}
function Cv(e) {
  j(() => {
    if (!e.hasNodes([ke, Mt, Pe, Ve, gt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Fe(
      e.registerNodeTransform(Ve, Sv),
      e.registerNodeTransform(Ve, (t) => vv(t, e)),
      e.registerNodeTransform(gt, Kd),
      e.registerNodeTransform(Mt, Kd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(gt, (t) => {
        us(En("va"), t), us(En("vp"), t);
      })
    );
  }, [e]);
}
function Sv(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || V(r) || F(n) || F(r) || Se(n) || Se(r) || $e(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  $e(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
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
  Ue(n))
    return;
  if (he(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  he(r) && ol(e);
}
function vv(e, t) {
  const r = e.getParent();
  !$e(r) || !e.isAttached() || Xa(t, e.getKey()) && !Xa(t, r.getKey()) && r.insertAfter(e);
}
function Kd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Se(t); )
    t = t.getLastChild();
  (F(t) || v(t) && Se(t.getParent())) && e.insertBefore(me(" "));
}
function Pl(e) {
  if (!V(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Vc(n)) ? void 0 : e;
}
function Mv(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (z(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function Ev() {
  const e = N();
  if (!(!w(e) || !e.isCollapsed()))
    return Pl(Mv(e.anchor));
}
function Av(e) {
  const t = N();
  let r;
  return w(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = xg(e.target)), r ? Pl(rt(r, V)) : void 0;
}
function xg(e) {
  const t = Hy(e)?.anchorNode;
  if (Qi(t))
    return vr(t) ?? void 0;
}
function Pv(e) {
  if (N())
    return;
  const t = xg(e);
  return t ? Pl(rt(t, V)) : void 0;
}
function Nv() {
  const [e] = le(), t = ag(Ev);
  return j(() => {
    const r = (n) => {
      Jr(Yr), t(n);
    };
    return Fe(e.registerCommand(dr, () => {
      const n = Pv(e.getRootElement());
      return n && r(n), !1;
    }, Cn), e.registerCommand(ai, (n) => {
      const i = Av(n);
      return i && r(i), !1;
    }, Cn));
  }, [e, t]), null;
}
function wv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = F_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return C(U_, { trigger: e, items: i });
}
function Ov({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = Be(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? C($v, { trigger: e, harness: i }) : C(wv, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const qv = [" ", "*"];
function Rv(e, t) {
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
function $v({ trigger: e, harness: t }) {
  const [r] = le(), [n, i] = fe(void 0), s = te({ query: "", options: [] }), o = te(0), a = ye((f, p, m) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = N();
      w(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  j(() => Fe(r.registerCommand(pr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), Gy(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = N();
          w(y) && y.insertText(e);
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
  }, qe), r.registerCommand(Lf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, ni)), [r, e, t, n, a]);
  const c = ye(() => i(void 0), []), l = ye((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = ye((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), d = Be(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    Rv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && C(Uh, { isOpen: !0, children: ({ placement: f }) => C(
    zh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? qv : void 0 },
    n.session
  ) });
}
function _g(e) {
  return e.replaceAll(L, "~").replace(/ {2,}/g, (r) => L.repeat(r.length));
}
function Iv(e) {
  return e.replaceAll(L, " ").replaceAll("~", L);
}
function Lv(e) {
  return e.replace(/ {2,}/g, " ");
}
let uo;
function Dv(e) {
  e && (uo = e);
}
function Cg(e) {
  return Do(e);
}
function Uv(e, t) {
  return e.isEmpty() ? Nf : Sg(e.toJSON(), t);
}
function Sg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && vo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Nf;
  if (r.some(lx)) {
    uo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = vg(r), i = Ht(n, t);
  return i ? { type: Cr, version: _r, content: i } : void 0;
}
function Fv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  let s;
  return e.code !== "" && (s = e.code), Ne({
    type: r,
    marker: n,
    code: s,
    ...i,
    content: t
  });
}
function Kv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ne({
    type: Rt.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function zv(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Dp(r, a, c), Ne({
    type: Rt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function jv(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Dp(t, o, a), Ne({
    type: gt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function Bv(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Cg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(L) && (t[0] = a.slice(1));
  }
  return Ne({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function Vv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ne({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Wv(e, t) {
  const { unknownAttributes: r } = e;
  return Ne({ type: ph, ...r, content: t });
}
function Hv(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ne({ type: mh, marker: r, ...n, content: t });
}
function Gv(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ne({
    type: bh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function Jv(e, t) {
  const { type: r, marker: n, caller: i, category: s, unknownAttributes: o } = e;
  return Ne({
    type: r,
    marker: n,
    caller: i,
    category: s,
    ...o,
    content: t
  });
}
function ri(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ne({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Gp({ sid: n, eid: i, ...s }, o)
  });
}
function Yv(e) {
  return e.text;
}
function Xv(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ne({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Qv(e) {
  const { marker: t } = e;
  return {
    type: eo,
    marker: t === "" ? void 0 : t
  };
}
function zd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function Zv(e, t, r, n, i) {
  const s = Xt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = ri({
      type: s,
      marker: ii,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = ri({
      type: s,
      marker: Sn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = ri({
      type: s,
      marker: Sn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = ri({
      type: s,
      marker: ii
    });
    i.push(l);
  }
  (!n || !pp(n)) && t.forEach((l) => {
    const u = ri({
      type: s,
      marker: ii,
      eid: l
    });
    i.push(u);
  });
}
function Ht(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, m = a, g = a, y = a;
    switch (a.type) {
      case jt.getType():
        i.push(
          Fv(
            l,
            Ht(l.children, t)
          )
        );
        break;
      case gr.getType():
        i.push(Kv(a));
        break;
      case Rt.getType():
        i.push(
          zv(
            u,
            Ht(u.children, t)
          )
        );
        break;
      case Mt.getType():
      case gt.getType():
        i.push(jv(a));
        break;
      case ke.getType():
        i.push(
          Bv(
            d,
            Ht(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case nt.getType():
        i.push(
          Vv(
            f,
            Ht(f.children, t)
          )
        );
        break;
      case Ln.getType():
        i.push(
          Wv(
            a,
            Ht(a.children, t)
          )
        );
        break;
      case Ti.getType():
        i.push(
          Hv(
            a,
            Ht(a.children, t)
          )
        );
        break;
      case xi.getType():
        i.push(
          Gv(
            a,
            Ht(a.children, t)
          )
        );
        break;
      case Pe.getType():
        i.push(
          Jv(
            p,
            Ht(p.children, t, p.caller)
          )
        );
        break;
      case qr.getType():
      case Or.getType():
      case Yt.getType():
      case Df.getType():
      case mr.getType():
        break;
      case tt.getType():
        if (s = Ht(
          g.children,
          t,
          r,
          n
        ), s) {
          const k = g.typedIDs[Hr];
          if (k)
            Zv(s, k, o, e[c + 1], i), o = k;
          else {
            const _ = s.shift();
            _ && (typeof _ == "string" ? zd(i, _) : i.push(_)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Xt.getType():
        i.push(ri(a));
        break;
      case Ve.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !vs(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== L && !m.text.startsWith(Ic) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[xs]?.textType !== "attribute" && (!r || m.text !== wt(r))) {
          let k = Yv(m);
          Cg(t) && (n && k.startsWith(L) && (k = k.slice(1)), k = Lv(Iv(k))), zd(i, k);
        }
        break;
      case $n.getType():
        i.push(
          Xv(
            y,
            Ht(y.children, t)
          )
        );
        break;
      case Ir.getType():
        i.push(Qv(a));
        break;
      case _i.getType():
        uo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        uo?.error(`Unexpected node type '${a.type}'!`);
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
const js = {
  initialize: Dv,
  deserializeEditorState: Uv
}, eM = /^sd\d*$/, tM = /* @__PURE__ */ new Set([
  ...Object.entries(La).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === b.Paragraph && !eM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function rM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Tp(i) || Rp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!qk(i)) {
      t && fo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Bc(i) && tM.has(i.marker) && !fo(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Mg(i.children, t).forEach((s) => {
      const o = nM(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = iM(s.verse), r.push(n), o && n.children.push(o);
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
    if (pp(i)) {
      const s = Mg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(jd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [jd(i, c.nodes)] });
      });
      return;
    }
    t && fo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function jd(e, t) {
  return { ...e, children: t };
}
function Eg(e) {
  return Ah(e) && e.number !== "";
}
function fo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Eg(r) || fo(r)) : !1;
}
function nM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function iM(e) {
  return {
    type: to,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: vh
  };
}
const Bd = Pg([]), sM = {
  type: Df.getType(),
  version: 1
};
let Nl = [], ne, Nn, Ag, vt;
function oM(e, t) {
  Nl = [], lM(e), uM(t);
}
function aM(e = 0) {
}
function cM(e, t) {
  ne = t ?? Lo();
  let r;
  return e ? (e.type !== Cr && vt?.warn(`This USJ type '${e.type}' didn't match the expected type '${Cr}'.`), e.version !== _r && vt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${_r}'.`
  ), e.content.length > 0 ? (r = uc(jr(e.content)), ps(ne) && (r = rM(r, vt))) : r = [Bd]) : r = [Bd], Ag?.(Nl), {
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
function lM(e) {
  e && (Nn = e), e?.addMissingComments && (Ag = e.addMissingComments);
}
function uM(e) {
  e && (vt = e);
}
function wl() {
  return Do(ne);
}
function dM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function fM(e) {
  let { marker: t } = e;
  t !== is && vt?.warn(`Unexpected book marker '${t}'!`), t = t ?? is;
  const { code: r } = e;
  (!r || !jt.isValidBookCode(r)) && vt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  ne?.markerMode === "editable" || ne?.markerMode === "visible" ? n.push(
    Ct("marker", Ae(t) + " " + r + L)
  ) : ne?.hasGutterParaMarkers && n.push(Ct("marker", Ae(t) + L, !0));
  const i = dM(e.content);
  i && n.push(ut(wl() ? _g(i) : i));
  const s = Ke(e, fk);
  return Ne({
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
function pM(e) {
  let { marker: t } = e;
  t !== Xs && vt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Xs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Ke(e, pk);
  let a;
  ne?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Kt(t, r) ?? "")
  ];
  return ne?.markerMode === "editable" && NM(i, s, c), ne?.markerMode === "editable" ? Ne({
    type: Rt.getType(),
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
  }) : Ne({
    type: gr.getType(),
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
function hM(e) {
  let { marker: t } = e;
  t !== Qs && vt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Qs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (J_(ne) ?? Mt).getType(), c = ne?.markerMode === "editable" ? wp : Eh;
  let l, u;
  ne?.markerMode === "editable" ? l = Kt(t, r) : ne?.markerMode === "visible" && (u = !0);
  const d = Ke(e, Mk);
  return Ne({
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
function gM(e, t = [], r = !1) {
  let { marker: n } = e;
  ke.isValidMarker(n, Nn?.extraValidMarkers) || vt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (ne?.markerMode === "editable") {
    const [a] = t;
    li(a) ? a.text = L + a.text : a && t.unshift(ut(L));
  }
  t.length === 0 && t.push(ut(zt)), ac(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Ke(e, mk);
  return s || MM(n, o, i), s || cc(e.marker ?? "", i, !1, r), Ne({
    type: ke.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: vp
  });
}
function Pg(e) {
  return {
    type: Qr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Pp
  };
}
function mM(e, t = []) {
  let { marker: r } = e;
  nt.isValidMarker(r, Nn?.extraValidMarkers) || vt?.warn(`Unexpected para marker '${r}'!`), r = r ?? lr;
  const n = [];
  if (Ci(ne) && (ne?.markerMode === "editable" ? n.push(
    mt(r),
    ut(L, hr, "token")
  ) : (ne?.markerMode === "visible" || ne?.hasGutterParaMarkers) && n.push(
    Ct(
      "marker",
      Ae(r) + L,
      ne?.hasGutterParaMarkers
    )
  )), n.push(...t), wl()) {
    const s = n.find(
      (o) => !Jc(o) && !(li(o) && o.text === L)
    );
    li(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => L.repeat(o.length)));
  }
  const i = Ke(e, Sk);
  return Ne({
    type: nt.getType(),
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
function Ol() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function yM(e, t = []) {
  const r = Ke(e, wT);
  return Ne({
    ...Ol(),
    type: Ln.getType(),
    unknownAttributes: r,
    children: t,
    version: hh
  });
}
function bM(e, t = []) {
  const r = Ke(e, RT), n = e.marker ?? Wa, i = [];
  return ne?.markerMode === "editable" ? i.push(
    mt(n),
    ut(L, hr, "token")
  ) : (ne?.markerMode === "visible" || ne?.hasGutterParaMarkers) && i.push(
    Ct(
      "marker",
      Ae(n) + L,
      ne?.hasGutterParaMarkers
    )
  ), i.push(...t), Ne({
    ...Ol(),
    type: Ti.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: yh
  });
}
function kM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Ha, a = oh(o, i) ?? o;
  ne?.markerMode === "editable" ? s.push(
    mt(a),
    ut(L, hr, "token")
  ) : (ne?.markerMode === "visible" || ne?.hasGutterParaMarkers) && s.push(
    Ct(
      "marker",
      Ae(a) + L,
      ne?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Ke(
    e,
    IT
  );
  return Ne({
    ...Ol(),
    type: xi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: kh
  });
}
function TM(e, t) {
  const r = Uk(t);
  let n = () => {
  };
  return Nn?.noteCallerOnClick && (n = Nn.noteCallerOnClick), Ne({
    type: Yt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: $h
  });
}
function xM(e, t) {
  let { marker: r } = e;
  Pe.isValidMarker(r, Nn?.extraValidMarkers) || vt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Dc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : pl(ne?.noteMode), a = Ke(e, wb), c = ne?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  ne?.markerMode === "editable" ? (l = mt(r, "opening", !1, c), s || (u = mt(r, "closing"))) : ne?.markerMode === "visible" && (l = Ct("marker", Ae(r) + " "), s || (u = Ct("marker", ot(r))));
  const d = [];
  let f;
  if (l && d.push(l), ne?.markerMode === "editable" && !o)
    f = ut(wt(i), void 0, c), d.push(f), PM(n, d), d.push(...t);
  else {
    const p = ut(L, hr, "token");
    f = TM(i, t), d.push(f, p, ...t.flatMap(_M(p)));
  }
  return u && d.push(u), Ne({
    type: Pe.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: d,
    direction: null,
    format: "",
    indent: 0,
    version: ip
  });
}
function _M(e) {
  return (t) => dp(t) ? [t] : [t, e];
}
function CM(e) {
  let { marker: t } = e;
  (!t || !Xt.isValidMarker(t, Nn?.extraValidMarkers)) && vt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Ke(e, Lc), s = Jp(e);
  return Ne({
    type: Xt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: tp
  });
}
function Vd(e, t = []) {
  return {
    type: tt.getType(),
    typedIDs: { [Hr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function SM(e, t) {
  const { marker: r } = e, n = e.type, i = Ke(e, ak), s = [];
  if (ne?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = ah(
      n,
      r,
      i
    );
    o && s.push(Ct("marker", o)), a && s.push(Ct("attribute", a)), s.push(...t), c && s.push(Ct("attribute", c)), l && s.push(Ct("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    li(o) && (o.mode = "token");
  }), Ne({
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
function vM(e) {
  return {
    type: Ir.getType(),
    marker: e,
    text: Hi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: ne?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: dh
  };
}
function mt(e, t = "opening", r = !1, n = "normal") {
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
    type: Ve.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[xs] = { textType: t }), n;
}
function Ct(e, t, r = !1) {
  const n = {
    type: Or.getType(),
    text: t,
    textType: e,
    version: lp
  };
  return r && (n[xs] = { [Kc.key]: !0 }), n;
}
function hs(e, t) {
  return {
    type: qr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: mp
  };
}
function ac(e, t, r = !1) {
  ne?.markerMode === "editable" ? t.push(mt(e, "opening", r)) : ne?.markerMode === "visible" && t.push(Ct("marker", Ae(e, r)));
}
function cc(e, t, r = !1, n = !1) {
  ne?.markerMode === "editable" ? r ? t.push(mt("", "selfClosing")) : t.push(mt(e, "closing", n)) : ne?.markerMode === "visible" && t.push(
    Ct(
      "marker",
      r ? ot("") : ot(e, n)
    )
  );
}
function MM(e, t, r) {
  if (ne?.markerMode !== "editable" || !t) return;
  const n = ar(t, Co(e));
  n && r.push(ut(n, "attribute"));
}
function Wd(e, t) {
  if (e.type !== "ms" || ne?.markerMode !== "editable" && ne?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Ke(e, Lc), o = Yp(
    n,
    i,
    s,
    Jp(e)
  ), a = ar(o, So(r ?? ""));
  if (!a) return;
  const c = L + a;
  ne?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(Ct("attribute", c));
}
function EM(e, t) {
  const r = e.marker ?? "";
  if (ne?.markerMode === "editable") {
    const n = [];
    ac(r, n), Wd(e, n), cc(r, n, !0), t.push(hs("milestone", n));
  } else
    ac(r, t), Wd(e, t), cc(r, t, !0);
}
function Hd(e, t, r) {
  t !== void 0 && r.push(
    hs(e, [
      mt(e, "opening"),
      ut(L + t, "attribute"),
      mt(e, "closing")
    ])
  );
}
function AM(e, t) {
  ne?.markerMode === "editable" && (Hd("va", e.altnumber, t), Hd("vp", e.pubnumber, t));
}
function PM(e, t) {
  e !== void 0 && t.push(
    hs("cat", [
      mt("cat", "opening"),
      ut(L + e, "attribute"),
      mt("cat", "closing")
    ])
  );
}
function NM(e, t, r) {
  e !== void 0 && r.push(
    hs("ca", [
      mt("ca", "opening"),
      ut(L + e, "attribute"),
      mt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    hs("cp", [
      mt("cp", "opening"),
      ut(L + t, "attribute")
    ])
  );
}
function Gd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function wM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Jd(e, t) {
  t.marker === Sn && t.sid !== void 0 && e.push(t.sid), t.marker === ii && t.eid !== void 0 && wM(e, t.eid);
}
function lc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Vd(o, [...n])] : o, c = e[i];
  Jd(n, c);
  const l = lc(
    e.slice(i + 1, s),
    Gd(t, i + 1),
    c.marker === Sn,
    n
  ), u = Vd(l, [...n]), d = e[s];
  Jd(n, d);
  const f = lc(
    e.slice(s + 1),
    Gd(t, s + 1),
    d.marker === Sn,
    n
  );
  return [...a, u, ...f];
}
function jr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(wl() ? _g(i) : i));
    else if (!i.type)
      vt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case jt.getType():
          n.push(fM(i));
          break;
        case Rt.getType():
          n.push(pM(i));
          break;
        case gt.getType():
          ne?.hasSpacing || n.push(sM), n.push(hM(i)), AM(i, n);
          break;
        case ke.getType():
          n.push(
            gM(i, jr(i.content, !0), t)
          );
          break;
        case nt.getType():
          n.push(mM(i, jr(i.content)));
          break;
        case Pe.getType():
          n.push(xM(i, jr(i.content)));
          break;
        case Xt.getType():
          rp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Nl?.push(i.sid)), n.push(CM(i)), EM(i, n);
          break;
        case Ir.getType():
          n.push(vM(i.marker ?? ""));
          break;
        case ph:
          n.push(yM(i, jr(i.content)));
          break;
        case mh:
          n.push(bM(i, jr(i.content)));
          break;
        case bh:
          n.push(kM(i, jr(i.content)));
          break;
        default:
          vt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(SM(i, jr(i.content)));
      }
  }), lc(n, r);
}
function uc(e) {
  const t = e.findIndex(
    (n) => Tp(n) || Rp(n) || Bc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    qT(n)
  );
  if (t >= 0) {
    const n = uc(e.slice(0, t)), i = e[t], s = uc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Ah(n)))
    return [Pg(e)];
  return e;
}
const Pr = {
  initialize: oM,
  reset: aM,
  serializeEditorState: cM
};
function Ng(e) {
  if (e && !O(e)) {
    if (v(e)) return e;
    if (z(e))
      for (const t of e.getChildren()) {
        const r = Ng(t);
        if (r) return r;
      }
  }
}
function OM() {
  const e = N();
  if (!w(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((v(t) && !O(t) ? Pn(t) : void 0) && v(t)) {
      const i = me(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ui(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Ng(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(L) ? L : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of wg(e)) {
    if (!Pn(t)) continue;
    ui(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(L) && r.setTextContent(n.slice(L.length));
  }
  return !0;
}
function wg(e) {
  const [t, r] = Oc(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || O(a) || se(a, ce) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function qM() {
  const e = N();
  if (!w(e)) return !1;
  const t = e.focus.getNode();
  return Pn(t) ? Te(tl(t)) : !1;
}
function Og() {
  let e = N();
  if (!w(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (O(t) && !il(t, e.anchor.offset)) {
    const c = t.getParent();
    if (F(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = N(), !w(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!v(t) || O(t) || !Pn(t)) return !1;
  const r = tl(t);
  if (!Te(r)) return !1;
  const n = me(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  ui(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return F(a) ? rl(a) : o.select(0, 0), !0;
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
        number: `${$p(ze().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = N(), t = jp(e), r = cl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Bk(0, o);
        const a = _x(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Bp(c) && Hc(parseInt(n, 10), c);
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
function dc(e, t) {
  return Pe.isValidMarker(e, t) || !!qg[e] || nt.isValidMarker(e, t) || ke.isValidMarker(e, t);
}
function RM(e, t) {
  return ke.isNoteContentMarker(e) ? !1 : ke.isValidMarker(e, t);
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
function fc(e, t, r, n, i, s, o) {
  if (Pe.isValidMarker(e, n?.extraValidMarkers)) {
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
  const a = FM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = N();
      w(u) && (Sh(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Yu(d, Pr, r), m = ia(p);
      if (w(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), k = Pn(g), _ = u.anchor.key === u.focus.key;
        if (F(m) && k && _ && !Ea(m, o))
          LM(
            u,
            m,
            g,
            r?.markerMode === "editable"
          );
        else if (F(m) && !_ && !Ea(m, o) && DM(u))
          UM(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          KM(
            u,
            () => ia(p)
          );
        else if (z(m) && !m.isInline()) {
          const S = u.insertParagraph();
          if (S) {
            const P = S.getChildren();
            m.append(...P), S.replace(m), Te(m) && pt(m) || m.selectStart();
          }
        } else if (F(m) && v(g) && !O(g) && F(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Ea(m, o)) {
          const S = g.getParent();
          if (F(S)) {
            const P = u.anchor.offset;
            if (P === 0) g.insertBefore(m);
            else if (P >= g.getTextContentSize()) g.insertAfter(m);
            else {
              const [B] = g.splitText(P);
              B.insertAfter(m);
            }
            m.getChildren().forEach((B) => {
              O(B) && B.setNested(!0);
            });
            const E = m.getChildren().find((B) => v(B) && !O(B));
            E && v(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (v(g) && !O(g) && u.isCollapsed() && (V(y) || F(y) && V(y.getParent()))) {
          const S = F(y) ? y : void 0, P = S ? $M(g, u.anchor.offset) : [];
          let B = (S ?? g).insertAfter(m);
          if (Rr(m)) {
            const M = {
              ...r || Lo(),
              markerMode: "hidden"
            }, R = Yu(
              d,
              Pr,
              M
            ), $ = ia(R);
            B = B.insertAfter($);
          }
          if (P.length > 0 && S) {
            const M = po(S).append(...P);
            B.insertAfter(M), S.isEmpty() && S.remove();
          } else v(B.getNextSibling()) || B.insertAfter(me(L));
          z(B) && B.selectEnd();
        } else if (u.insertNodes([m]), XM(m), f) {
          const S = Nc();
          S.add(m.getKey()), Sr(S);
        } else if (F(m)) {
          const S = m.getChildren().find((P) => v(P) && !O(P));
          S && v(S) ? S.select(
            S.getTextContentSize(),
            S.getTextContentSize()
          ) : m.selectEnd();
        } else {
          const S = m.getNextSibling();
          S ? S.selectStart() : m.selectStart();
        }
      }
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function $M(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Ea(e, t) {
  return ((t ?? ro).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function IM(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function LM(e, t, r, n) {
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
    const [o, a] = hi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ui(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(L) && i.setTextContent(L + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !O(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function DM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || F(n)) continue;
    if (!v(n) || n.getType() !== Ve.getType() || se(n, ce) === "attribute") return !1;
    const i = tl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Pn(n) && (r = !0);
  }
  return r;
}
function UM(e, t, r) {
  const n = wg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Pn(a)) return;
    ui(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(L) && c.setTextContent(l.slice(L.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(L) || i.setTextContent(L + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !O(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function FM(e, t) {
  let r = qg[e];
  return r || (nt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: nt.getType(), marker: e, content: [] }] })
  } : ke.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ke.getType(), marker: e };
      return (ke.isValidFootnoteMarker(e) || ke.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function KM(e, t) {
  const r = e.getNodes(), [n, i] = hi(e);
  let s;
  r.forEach((o, a) => {
    if (z(s) && s.isParentOf(o))
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
    s || (s = t(), c.insertBefore(s), l = !0, F(s) && s.getChildren().some((d) => O(d) && d.getMarkerSyntax() === "opening") && IM(s, F(s.getParent()))), jM(c, s, l);
  }), (v(s) || z(s)) && s.selectEnd();
}
function hi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function ql(e) {
  return Se(e) || V(e) || V(e.getParent());
}
function $g(e, t, r, n, i) {
  if (!ql(e)) {
    if (v(e))
      return zM(e, t, r, n, i);
    if (z(e) && e.isInline())
      return e;
  }
}
function zM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function jM(e, t, r) {
  if (v(t)) {
    const n = pc(e, t);
    t.setTextContent(n), e.remove();
  } else if (z(t)) {
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
    pc(e, t), r && F(t) && t.getChildren().some((s) => O(s)) && v(e) && !O(e) && !e.getTextContent().startsWith(L) && e.setTextContent(L + e.getTextContent());
  }
}
function pc(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    ol(n), v(n) || t.insertBefore(me(" "));
  }
  return r;
}
function Ig(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = wn(u, t);
    if (!f) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (Yd(f, r), v(u) && u.isAttached()) {
      const m = u.getTextContentSize(), g = Math.max(p - m, 0), y = Math.max(0, Math.min(d - g, m)), k = N();
      w(k) && k.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = hi(e);
  if (!$l(n, t, s, o)) return !1;
  const a = Rl(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = wn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Fg(d, a);
    f && (Yd(f, r), l = !0);
  }), Kg(a, i), l;
}
function Yd(e, t) {
  e.getChildren().forEach((n) => {
    Ot(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === zt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    v(n) && i.startsWith(L) && n.setTextContent(i.slice(L.length));
  }), Ra(e);
}
function Rl(e, t, r) {
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
function wn(e, t) {
  let r = e, n;
  for (; r && !Te(r); ) {
    if (V(r)) return;
    !n && F(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Lg(e) {
  const t = rt(
    e,
    (r) => V(r) || Te(r)
  );
  return V(t);
}
function Dg(e) {
  return e.filter(
    (t) => !ql(t) && (v(t) || z(t) && t.isInline())
  );
}
function BM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || ql(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function VM(e, t, r) {
  return e.getChildren().some(
    (n) => z(n) && t.some((i) => n.isParentOf(i)) && !Ug(n, r)
  );
}
function $l(e, t, r, n, i) {
  const s = Dg(e), o = BM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = wn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !VM(l, s, o);
  });
}
function Ug(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Ot(r));
}
function Fg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (z(u) && t.some((d) => u.isParentOf(d))) {
      if (!Ug(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Ot(n[s - 1]) && (s -= 1), o < n.length - 1 && Ot(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(po(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(po(e).append(...c)), e;
}
function po(e) {
  return Jy(e);
}
function Kg(e, t) {
  const r = N(), n = e[0], i = e[e.length - 1];
  if (!w(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function WM(e, t, r) {
  if (e.isCollapsed()) {
    const l = wn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : ($u(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = hi(e);
  if (!$l(n, r, i, s, t)) return !1;
  const o = Rl(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = wn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Fg(u, o);
    d && ($u(d, t), c = !0);
  }), c;
}
function HM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = hi(e);
  if (!!!i?.some(
    (y) => $l(s, y, o, a)
  ) && !GM(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = N();
    w(k) && Ig(k, y, n) && (l = !0);
  });
  const u = N();
  if (!w(u)) return l;
  const d = u.isBackward(), [f, p] = hi(u), m = Rl(
    u.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const g = m.filter(
    (y) => !Lg(y) && !wn(y, t)
  );
  return g.length > 0 && (JM(g).forEach((y) => YM(y, t)), l = !0), Kg(m, d), l;
}
function GM(e, t) {
  return Dg(e).some(
    (r) => !Lg(r) && !wn(r, t)
  );
}
function JM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function YM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => F(a) && a.getMarker() === t
  ), s = i ? po(i) : Er(t);
  e[0].insertBefore(s), s.append(...e), i === r || pc(e[0], s);
}
function XM(e) {
  he(e) && (ol(e.getPreviousSibling()), Nh(e.getNextSibling()));
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
}, Xd = "psc-active-text", Ds = "psc-empty-text";
function QM({ viewOptions: e }) {
  const [t] = le(), r = te(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return j(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Xd), r.current = o, o && t.getElementByKey(o)?.classList.add(Xd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        ai,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Ds}`);
          if (!c) return !1;
          const l = vr(c);
          if (!he(l)) return !1;
          const u = l.getParent();
          if (!z(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        ht
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Aa(), f = ZM(), p = [], m = [];
          return ze().getChildren().forEach((g) => {
            if (!z(g)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = tE(g);
            p.push(...y), m.push(...k);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Ds) : t.getElementByKey(d)?.classList.add(Ds);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Ds));
      }),
      t.registerCommand(
        qc,
        () => (i(void 0), !1),
        ht
      ),
      t.registerCommand(
        If,
        () => {
          const o = t.getEditorState().read(Aa);
          return o !== r.current && i(o), !1;
        },
        ht
      )
    ];
    return i(t.getEditorState().read(Aa)), Fe(...s);
  }, [t, n]), null;
}
function Aa() {
  return eE(N() ?? void 0)?.getKey();
}
function ZM() {
  const e = N(), t = Zr(e);
  if (t)
    return t.getChildren().slice(0, _l(t)).findLast(he)?.getKey();
  if (!w(e)) return;
  const r = e.anchor, n = r.getNode(), i = n.getTopLevelElement();
  if (!z(i)) return;
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
    he(o[c]) && (a = o[c].getKey());
  return a;
}
function eE(e) {
  const t = Zr(e);
  if (t) return t.getTopLevelElement() ?? t;
  if (w(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function tE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!he(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (he(c)) break;
      if (!(Qt(c) || O(c)) && c.getTextContent().replaceAll(Hs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const rE = /^\+/;
function Il(e, t) {
  const r = t.replace(rE, "");
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
function hc(e, t) {
  const r = jg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ho(e, t, r) {
  const n = z(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function nE(e, t, r, n, i) {
  const s = Il(n, t);
  if (!s) {
    ho(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ho(e, "invalid", i);
}
function Ji(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (F(s)) {
      const o = s.getMarker();
      i || nE(s, o, t, r, n), Ji(s, t, r, n, i || o === "xq");
    } else if (he(s)) {
      if (i) continue;
      const o = Il(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else V(s) ? Ji(s, s.getMarker(), r, n, i) : $e(s) || z(s) && Ji(s, t, r, n, i);
}
function iE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Il(e, a);
    if (!c) {
      ho(o, "unknown", r), hc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    hc(n, l) || ho(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of ze().getChildren())
    $e(o) || (yt(o) || Ye(o) ? i(o, o.getMarker()) : ae(o) ? (i(o, o.getMarker()), s(o) && Ji(o, o.getMarker(), e, r, !1)) : z(o) && s(o) && Ji(o, "p", e, r, !1));
  return r;
}
function sE(e) {
  return !!e?.includes("(basic)");
}
function oE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Vg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && dc(e, t);
}
function Ll(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Wg(e, t) {
  const r = [];
  for (const n of t) {
    const i = Ll(e, n);
    i && hc(r, i);
  }
  return r;
}
function Bs(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: oE(e.description),
    isBasic: sE(e.description)
  };
}
function aE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function gc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : aE(e.marker, t.marker);
}
function mc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Wg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Vg(i.marker, r)
  ).filter((i) => {
    const s = Ll(e, i.marker);
    return s !== void 0 && Bg(n, s);
  }).map((i) => Bs(i, "paragraph")).sort(gc);
}
function cE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Vg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Bs(c, "character")).sort(gc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Bs(c, "character")),
    ...a.map((c) => Bs(c, "note"))
  ].sort(gc);
}
function lE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function uE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function dE(e, t, r) {
  return [
    ...lE(e, t.openCharMarkers),
    ...cE(e, t, r)
  ].sort(uE);
}
function fE(e, t, r) {
  if (t.source === "paragraph") return mc(e, t, r);
  const n = dE(e, t, r);
  return n.length > 0 ? n : mc(e, t, r);
}
function pE(e, t, r) {
  const n = mc(e, t, r), i = Wg(e, t.previousParaMarkers), s = Ll(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Bg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const tr = String.raw`\w-`, Hg = "a-z0-9", hE = `[a-z][${Hg}]*`, gE = new RegExp(
  String.raw`^\\(\+?[${tr}]+)[ \u00A0]$`
), Gg = new RegExp(String.raw`^\\(\+?[${tr}]+)$`), mE = new RegExp(String.raw`^\\\+?[${tr}]*\*$`), yE = new RegExp(
  String.raw`^\\(\+?[${tr}]+)(?:[ \u00A0]|$)`
), bE = new RegExp(
  String.raw`^\\(\+?)([${tr}]+)`
), kE = new RegExp(
  String.raw`\\\+?[${tr}]+(?:\\?\*|[ \u00A0])`
), TE = new RegExp(
  String.raw`\\\+?[${tr}]*$`
), xE = new RegExp(
  String.raw`^\\(${hE})( |$)`
), _E = new RegExp(
  String.raw`\\[${Hg}+*]*$`,
  "i"
), st = "￼";
function Jg(e) {
  return e.length > 1 && e.startsWith(L) && e.charAt(1) !== st ? e.slice(1) : e;
}
function Qd(e) {
  return Jc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Yg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Pr.serializeEditorState(
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
  for (; Qd(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== wt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && Qd(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Us(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Ui(e, t) {
  TE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += st;
}
function Ft(e) {
  return e.replaceAll(L, " ");
}
function CE(e, t, r = !1) {
  if (Do(t)) return Ft(e);
  if (e === L) return " ";
  const n = r && e.startsWith(L), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(L, "~");
}
function Yi(e) {
  const t = e.getTextContent();
  return In(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Dl(e, t) {
  const r = e[t];
  if (!Ge(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Po(r);
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
function Ul(e, t) {
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
function Fl(e) {
  return !!e.getUnknownAttributes();
}
function zo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Fc(e);
}
function Qg(e, t) {
  return Ge(e) ? !zo(e.getMarker(), t) : V(e) || $e(e) ? !0 : Re(e) ? Fl(e) : F(e) ? Zg(e, t) : !1;
}
function Zg(e, t) {
  if (eT(e)) return !0;
  const r = e.getMarker();
  return !Kb(r) && t(r) === void 0;
}
const Dt = "", Ut = "";
function Zd(e) {
  return e.flatMap((t) => Ue(t) ? t.getChildren() : [t]);
}
function Bi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ge(s)) {
      const o = Dl(e, i);
      zo(s.getMarker(), r) && Xg(o) ? (t.push(
        Dt,
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
      ), Bi(Zd(o), t, r), t.push(Ut)) : t.push(st), i += o.length;
    } else if (Re(s)) {
      const o = Ul(e, i);
      Fl(s) ? t.push(st) : (t.push(
        Dt,
        "verse",
        Ft(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Bi(Zd(o), t, r), t.push(Ut)), i += o.length;
    } else O(s) ? t.push(Dt, "marker", Ft(s.getTextContent()), Ut) : on(s) ? t.push(Dt, "unmatched", Ft(s.getTextContent()), Ut) : Qg(s, r) ? t.push(st) : Ts(s) ? t.push(" ") : v(s) ? t.push(
      Ft(
        n ? Jg(Yi(s)) : Yi(s)
      )
    ) : F(s) ? (t.push(Dt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Bi(s.getChildren(), t, r, !0), t.push(Ut)) : z(s) ? (t.push(Dt, s.getType()), Bi(s.getChildren(), t, r), t.push(Ut)) : t.push(st);
  }
}
function vi(e, t) {
  const r = [];
  return Bi(e, r, t), r.join("");
}
function Nr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function gi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Kl(e) {
  return e.type ?? "";
}
function em(e, t, r) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : Ae(e, r);
}
function Pa(e, t) {
  const r = e[t];
  if (!(!r || Kl(r) !== "attribute-run"))
    return Nr(r) ?? [];
}
function Mi(e, t) {
  const r = [];
  return Vi(e, r, t), r.join("");
}
function Vi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Kl(s);
    if (o === "ms") {
      const l = s, u = Pa(e, i + 1);
      u && zo(l.marker ?? "", r) ? (t.push(
        Dt,
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
      ), Vi(u, t, r), t.push(Ut), i += 1) : t.push(st);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(st);
        continue;
      }
      t.push(
        Dt,
        "verse",
        Ft(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Pa(e, i + 1 + u);
      for (; d; )
        Vi(d, t, r), u++, d = Pa(e, i + 1 + u);
      t.push(Ut), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Dt,
        "marker",
        Ft(
          em(l.marker ?? "", l.markerSyntax, l.nested)
        ),
        Ut
      );
      continue;
    }
    if (o === "linebreak") {
      t.push(" ");
      continue;
    }
    if (o === "char") {
      const l = s;
      t.push(Dt, "char", JSON.stringify(l.unknownAttributes ?? null)), Vi(Nr(s) ?? [], t, r, !0), t.push(Ut);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(st);
      continue;
    }
    if (o === "unmatched") {
      t.push(Dt, "unmatched", Ft(gi(s) ?? "")), t.push(Ut);
      continue;
    }
    const a = gi(s);
    if (a !== void 0) {
      t.push(Ft(n ? Jg(a) : a));
      continue;
    }
    const c = Nr(s);
    c ? (t.push(Dt, o), Vi(c, t, r), t.push(Ut)) : t.push(st);
  }
}
function jo(e) {
  let t = 0;
  for (const r of e) {
    const n = Nr(r);
    if (n) {
      t += jo(n);
      continue;
    }
    const i = gi(r);
    if (i !== void 0)
      for (const s of i) s === st && t++;
  }
  return t;
}
function gs(e, t, r, n, i) {
  On(e.getChildren(), t, r, n, i);
}
function On(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      Us(t, a, Ft(a.getTextContent()));
    else if (Ge(a)) {
      s();
      const c = Dl(e, o);
      zo(a.getMarker(), r) && Xg(c) ? On(c, t, r, n) : Ui(t, [a, ...c]), o += c.length;
    } else if (V(a) || $e(a))
      s(), Ui(t, [a]);
    else if (Re(a)) {
      s();
      const c = Ul(e, o);
      Fl(a) ? Ui(t, [a, ...c]) : (Us(t, a, Ft(Yi(a))), On(c, t, r, n)), o += c.length;
    } else if (F(a))
      s(), Zg(a, r) ? Ui(t, [a]) : gs(a, t, r, n, { pending: !0 });
    else if (Ts(a))
      s(), Us(t, a, " ");
    else if (v(a)) {
      const c = In(a) || se(a, ce) === "attribute", l = s() && !c;
      Us(
        t,
        a,
        c ? Ft(Yi(a)) : CE(Yi(a), n, l)
      );
    } else z(a) ? gs(a, t, r, n, i) : (s(), Ui(t, [a]));
  }
}
function zl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if ($e(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return gs(e, i, t, r), i;
}
function tm(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
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
    } else z(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function yc(e, t = []) {
  for (const r of e)
    Re(r) ? t.push(r) : z(r) && yc(r.getChildren(), t);
  return t;
}
function rm(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === st && t++;
    else z(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Un(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === st && t++;
    else r.content && (t += Un(r.content));
  return t;
}
function SE(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), z(i) && gs(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const ms = /\s/;
function nm(e) {
  return e.filter(Bo).length;
}
function Bo(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return v(t) && !O(t) && se(t, ce) === "attribute";
}
function vE(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return O(t) || Bo(e);
}
function ef(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Bo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      ms.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function jl(e, t, r) {
  const n = ef(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !vE(i) ? ef(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: nm(e.spans) };
}
function Na(e) {
  if (e.isSentinel) return !1;
  const t = ie(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function ME(e) {
  const t = ie(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return F(r) ? (r.selectNext(0, 0), !0) : !1;
}
function EE(e) {
  const t = ie(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Re(t) ? Ul(r, n) : Ge(t) ? Dl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function im(e, t, r) {
  const { text: n, spans: i } = e, s = nm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !Na(d);
    if (!(o && Bo(d))) {
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
    if (d && Na(d) && ME(d) || d?.isSentinel && EE(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !Na(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = ie(a.key);
    if (d && v(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(z)?.selectStart();
}
function sm(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(z)?.selectStart();
      return;
    }
    im(SE(e, n, i), t, e);
  }
}
function AE(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(z)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  On(e, s, n, i), im({ text: s.text, spans: s.spans }, t, e);
}
function om(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = zl(g, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const k = s.text.length;
    y.spans.forEach(
      (_) => s.spans.push({ ..._, start: _.start + k, end: _.end + k })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = N();
  if (w(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = jl(s, c.anchor.key, c.anchor.offset));
  }
  const l = wr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Un(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = Pr.serializeEditorState(
    { type: Cr, version: _r, content: l },
    r
  );
  if (Mi(u.root.children, n) === vi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => ko(g));
  if (rm(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = yc(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), tm(d, s.sentinels), e.forEach((g) => g.remove());
  const m = yc(d);
  for (let g = 0; g < f.length && g < m.length; g++)
    m[g].getNumber() === f[g].number && m[g].setSid(f[g].sid);
  return sm(d, o, a, n, r), !0;
}
function am(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Pe.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!O(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(Et(s) || v(s) && s.getTextContent() === wt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!O(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return On(c, l, t, r), { out: l, contentNodes: c };
}
function cm(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(st)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function PE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = am(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = N();
  if (w(u)) {
    for (let P = u.anchor.getNode(); P; P = P.getParent())
      if (e.is(P)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = jl(o, u.anchor.key, u.anchor.offset));
  }
  const d = wr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Un(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = cm(p), g = Yg(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (jo(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), Mi(g.children, n) === vi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const k = g.children.map((P) => ko(P));
  if (rm(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const _ = a[0];
  if (_)
    k.forEach((P) => _.insertBefore(P));
  else {
    const P = e.getChildren().find((E) => O(E) && E.getMarkerSyntax() === "closing");
    k.forEach((E) => P ? P.insertBefore(E) : e.append(E));
  }
  tm(k, o.sentinels);
  const S = new Set(o.sentinels.flat().map((P) => P.getKey()));
  return a.forEach((P) => {
    S.has(P.getKey()) || P.remove();
  }), AE(k, c, l, n, r), !0;
}
const lm = /* @__PURE__ */ new Set(["ca", "cp"]), Bl = "cp";
function um(e) {
  if (!fr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (gs(e, t, ur, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = wr(r, { getMarker: ur }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Bl)
  );
}
function Vo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (F(r) && lm.has(r.getMarker()) || um(r)) {
      t.push(r);
      continue;
    }
    ae(r) && r.getMarker() === Bl && t.push(r);
    break;
  }
  return t;
}
function NE(e) {
  const t = (n) => F(n) && lm.has(n.getMarker()) || um(n);
  if (t(e) || ae(e) && e.getMarker() === Bl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Oe(n)) return n;
      if (!t(n)) return;
    }
}
function dm(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Vo(e);
  if (n.some((s) => ae(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (On(e.getChildren(), i, t, r), On(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function wE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Vo(e)], o = dm(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = N();
  if (w(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((g) => g.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = jl(o, l.anchor.key, l.anchor.offset));
  }
  const u = wr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Un(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = Pr.serializeEditorState(
    { type: Cr, version: _r, content: u },
    r
  );
  if (Mi(f.root.children, n) === vi(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => ko(m));
  return Oe(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), sm(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ys(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if ($e(n)) return;
    !t && (V(n) || ae(n) || Oe(n)) && (t = n), Yy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? NE(r) : void 0) ?? t;
}
function Gt(e, t) {
  const r = ys(e);
  return r ? V(r) ? PE(r, t) : Oe(r) ? wE(r, t) : om([r], t) : !1;
}
const OE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function tf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !OE.has(n[0])
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
          t.push(`\\${n}`), tf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Vs(r.content, t), tf(r, t), i !== "false" && t.push(`\\${n}*`);
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
function rf(e, t, r) {
  const n = ys(e);
  if (!ae(n)) return !1;
  const i = N();
  if (!w(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = zl(n, t, r);
  if (!o) return !1;
  const a = wr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    ms.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Vs(a, l);
  for (const u of l.join("").replaceAll(L, "~")) {
    if (ms.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function Vl(e, t) {
  return fm(e, t, b.Paragraph);
}
function qE(e, t) {
  return fm(e, t, b.Character);
}
function fm(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== b.Unknown ? i === r : !(Pe.isValidMarker(n) || Fc(n));
}
function RE(e) {
  return [lt(e), Mo()];
}
function Wl(e) {
  Bt(e, 2);
}
function $E(e) {
  const t = N();
  if (!w(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Hl(e) {
  const t = $E(e);
  e.splice(0, 0, RE(e.getMarker())), t && Wl(e);
}
function go(e, t) {
  e.setMarker(t), Hl(e), Wl(e);
}
function IE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!In(n)) {
    if (v(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(L), _t(n, ce, hr), n.setMode("token");
      return;
    }
    if (Wp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Mo());
  }
}
function nf(e, t, r) {
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
function Xi(e) {
  for (let t = e; t; t = t.getParent())
    if (ae(t)) return t;
}
function LE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Xi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Xi(r.getNode())?.is(s) ?? !1, a = Xi(n.getNode())?.is(s) ?? !1;
    return !(o && !nf(r, s, "start") || a && !nf(n, s, "end"));
  });
}
function bc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = N();
  if (!(!w(r) || r.isCollapsed()))
    for (const n of LE(r)) t.add(n.getKey());
}
function DE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = N();
  if (!w(r) || !r.isCollapsed()) return;
  const n = Xi(r.focus.getNode());
  n && t.add(n.getKey());
}
function UE(e) {
  const t = N();
  !w(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (bc(e), t.removeText());
}
const FE = new RegExp(
  String.raw`^\\\+?([${tr}]+)(?:[ \u00A0]|$)`
);
function KE(e, t) {
  const r = FE.exec(e.getTextContent());
  return !!r && Vl(r[1], t);
}
function zE(e, t) {
  if (!Ci(t.viewOptions)) return;
  if (Ot(e.getFirstChild())) {
    IE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (KE(e, t.getMarker)) return;
    Hl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ae(o) && !o.is(e))) {
      go(e, lr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ae(r)) {
    const n = e.getChildren().filter((a) => !In(a)), i = N();
    let s = !1;
    if (w(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Xi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || z(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Bt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  go(e, lr);
}
function jE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = ar(t, Co(e.getMarker()));
  return r === "" ? void 0 : r;
}
function BE(e) {
  const t = e.getChildren().filter((s) => !O(s) && se(s, ce) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith(L) && r.setTextContent(r.getTextContent().slice(1));
  const n = jE(e);
  n && t.push(me(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function VE(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => v(c) && !O(c) && c.getTextContent() === wt(s)
    ), a = yi(e).some(({ node: c }) => O(c));
    if (!o && !a) return;
    r.forEach((c) => {
      O(c) || (v(c) && c.getTextContent() === wt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => O(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function WE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    BE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && Gt(e, t);
}
function kc(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && Ci(r)) {
    go(e, t);
    return;
  }
  Wh(e, t);
}
function pm() {
  const e = N();
  if (!w(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = hm(e);
    return t !== "removed" ? t : (Tc(), "handled");
  }
  return Tc() ? "handled" : "declined";
}
function HE(e, t) {
  if (!t) return e;
  const r = xE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function sf(e, t) {
  const r = N();
  if (!w(r)) return "declined";
  if (r.isCollapsed()) {
    if (!gm())
      return "declined";
  } else {
    const s = hm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => HE(s, t)
  );
  of(n ?? "");
  for (const s of i)
    Tc(), of(s);
  return "handled";
}
function GE(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = vr(n);
  if (!i) return !1;
  const s = Zt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function hm(e) {
  const t = Zt(e.anchor.getNode()), r = Zt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), JE() ? "removed" : "needs-plain-split");
}
function of(e) {
  if (e === "") return;
  const t = N();
  w(t) && t.insertText(e);
}
function JE() {
  const e = N();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = Zt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function gm() {
  const e = N();
  if (!w(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Zt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Tc() {
  const e = N();
  if (!w(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = gm();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Er("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = v(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    ui(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [u] = l;
    u && (Vk(u), i.append(u));
  }
  return i.getChildren().every(O) && i.append(me(zt)), mm(i), !0;
}
function mm(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (v(t)) {
    const r = t.getTextContent().startsWith(L) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (z(t)) {
    mm(t);
    return;
  }
  e.selectEnd();
}
function YE(e) {
  const t = [];
  let r = e;
  for (; r; )
    F(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function XE(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of ze().getChildren()) {
    if (t && n.is(t)) break;
    (yt(n) || Ye(n) || ae(n)) && r.push(n.getMarker());
  }
  return r;
}
function QE(e) {
  let t = e;
  for (; z(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function ZE(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Ot(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && In(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(QE(i)) && r === 0 : !1;
}
function eA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Ot(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && In(i) && t.is(i) && r === 0;
}
function tA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function rA() {
  const e = N();
  if (!w(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = rt(t, ae), s = !n && (!i || eA(i, t, r)) ? "paragraph" : "character", o = Zt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: XE(t),
    openCharMarkers: YE(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: il(t, r),
    anchorRect: tA()
  };
}
function nA() {
  const e = N();
  if (!w(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = _E.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function iA(e, t, r) {
  kc(e, t, r), Wl(e);
}
function sA(e, t, r) {
  const n = N();
  if (!w(n)) return;
  const i = n.focus.getNode(), s = rt(i, ae);
  if (t === "backslash" && s && ZE(s, i, n.focus.offset)) {
    iA(s, e, r);
    return;
  }
  bm(e, r);
}
function oA(e, t) {
  const r = N();
  return !w(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function ym(e) {
  const t = N();
  return w(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function aA(e, t, r, n) {
  if (w(N()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && nA(), e.kind === "closeTag") {
    ym(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && pm() !== "declined") return;
  if (e.kind === "paragraph" && nt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    sA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Pe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Rg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  fc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: _n(), reference: r });
}
function bm(e, t) {
  const r = N();
  if (!w(r)) return;
  const n = Ci(t);
  if (Og()) {
    const s = N();
    if (!w(s)) return;
    const o = rt(s.anchor.getNode(), ae);
    if (!o) return;
    o.setMarker(e), n && Hl(o);
    return;
  }
  const i = r.insertParagraph();
  ae(i) && (n ? go(i, e) : i.setMarker(e));
}
function cA() {
  const [e] = le();
  return j(() => e.registerCommand(Rc, () => !0, ht), [e]), null;
}
function lA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = yE.exec(e)?.[1];
  return r === void 0 ? !1 : !Vl(r, t);
}
function km(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !lA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ae(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ae(i))
    return [i, r];
}
function Tm(e, t) {
  const r = km(e, t.getMarker);
  return r !== void 0 && om(r, t);
}
function uA(e, t) {
  const r = N();
  w(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function xm(e) {
  const t = bE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function dA(e) {
  const t = N();
  if (!w(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = xm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function fA(e) {
  const t = N();
  if (!w(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (V(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (F(n)) {
      rl(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function af(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = xm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  fA(e);
}
function cf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function _m(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Gt(e, r);
  const n = dA(e), i = e.getParent();
  if (ae(i)) {
    if (!Vl(t, r.getMarker))
      return Tm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Gt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), cf(s, t) && af(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (F(i) || V(i)) {
    const s = t.replace(/^\+/, "");
    if (!(F(i) ? qE(t, r.getMarker) : Pe.isValidMarker(s)))
      return Gt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Gt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (uA(c, ot(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), cf(a, s) && af(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Gt(e, r);
}
function pA(e) {
  const t = N();
  if (!w(t)) return !1;
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
function hA(e, t) {
  const r = e.getTextContent();
  if (sn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ue(e.getParent()) && Yc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !pA(e)) {
    Qk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = gE.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), _m(e, n[1], t);
      return;
    }
    if (mE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Gt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ot(e.getMarker(), e.getNested());
    if (F(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = N(), o = w(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = me(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function gA(e, t) {
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
  if (!Yf(e)?.length)
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
const Fi = Cm("v"), mA = Cm("c"), lf = /^[ \u00A0]*$/;
function uf(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === Ve.getType() && n.getMode() === "normal" && se(n, ce) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = me(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function yA(e, t) {
  const r = e.getTextContent(), n = Kt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Fi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Fi.valueAndRest.exec(c);
    if (l && lf.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Fi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Fi.valueAndRest.exec(r);
  if (!s) {
    const c = Fi.markerRest.exec(r);
    if (c) {
      const [, l, u, d] = c, f = N(), p = w(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Kt("v", u));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      uf(e, d, m);
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
  if (t.pendingKeys.delete(e.getKey()), lf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Kt("v", o)), a && uf(e, a, a.length);
}
const bA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function kA(e, t) {
  const r = e.getParent();
  if (!V(r) || r.getIsCollapsed() !== !1 || !Yf(r.getMarker())?.includes("caller")) return !1;
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
  const o = bA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(wt(a)), !0;
}
function TA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!v(t)) return;
  const r = Kt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = mA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Sm(e) {
  if (Ge(e)) {
    const { wrapper: t } = Po(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (V(e)) {
    const { wrapper: t } = Qp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Oe(e)) {
    const t = [], r = Zp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = th(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Re(e)) {
    const t = [], r = os(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = os(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function xA(e) {
  const t = N();
  if (!w(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Sm(e).some((n) => r.is(n));
}
function _A(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ae(e) && Wp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of cs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Es(l, e) && (i || xA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Sm(e))
    l.remove(), n = !0;
  let s = !1;
  if (F(e)) {
    const l = nT(e);
    l !== void 0 && Lb(l) && (ih(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of cs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (XT(l, e)) {
        us(l, e), a = !0, n = !0;
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
function df(e) {
  return v(e) && e.getType() === Ve.getType() && e.getMode() === "normal" && se(e, ce) !== "attribute";
}
function CA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = ie(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && df(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && df(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Fs(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = CA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = ie(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (sn(c)) continue;
      const m = Gg.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = _m(c, m[1], e) || n : r === "idle" && rf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Tm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Gt(c, e) || n;
      continue;
    }
    const l = An(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
    if (o.has(d)) {
      a !== d && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(d)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(d);
      continue;
    }
    e.pendingKeys.delete(a), a !== d && e.pendingKeys.delete(d), o.add(d);
    const f = _A(u, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && rf(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Gt(u, e) || n;
    }
  }
  return n;
}
function vm(e) {
  if (on(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (F(t)) return Wi(t) !== void 0;
  return !1;
}
function SA(e) {
  const t = An(e);
  if (!t) return !1;
  const r = En(t.kind);
  return !qo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function ff(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (yt(t) || $e(t) || gh(t)) return !0;
  return !1;
}
function vA(e, t) {
  const r = e.getTextContent(), n = se(e, ce), i = e.getParent();
  if (n !== "attribute" && Oe(i)) {
    r.replace(/^[ \u00A0]+/, "") === Kt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (kA(e, t)) return;
  if (n === "attribute") {
    SA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && vm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !ff(e))
      t.pendingKeys.add(e.getKey());
    else if (rh(e)) t.pendingKeys.add(e.getKey());
    else if (Oe(ys(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      F(a) && sh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (ff(e)) return;
  const s = N(), o = w(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (kE.test(o)) {
    if (Wb(r)) {
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
function MA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : xh(e, t);
}
function EA(e) {
  const t = (r) => {
    if (O(r)) {
      sn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (on(r)) {
      fh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of cs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Es(n, r) || MA(n, r)) && e.pendingKeys.add(r.getKey());
    if (Re(r)) {
      r.getTextContent() !== Kt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== Ve.getType() || se(r, ce) === "attribute") return;
      const n = r.getParent();
      if (Oe(n)) {
        r.getTextContent() !== Kt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && vm(r) || i.includes("//") || rh(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (F(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!$e(r) && !yt(r)) {
      if (Ue(r) && r.getChildrenSize() === 0) {
        const n = An(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      z(r) && r.getChildren().forEach(t);
    }
  };
  ze().getChildren().forEach(t);
}
const mo = "usfm:", Mm = "usfmopen", Em = "usfmclosed";
function AA(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const PA = new RegExp(
  [mo, Mm, Em].map(AA).join("|")
), NA = "\uFEFF", wA = /^usfm_(.+)$/;
function OA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function qA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function RA(e) {
  return e.startsWith(mo) ? qA(e.slice(mo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Am(e) {
  for (const t of e.classList) {
    const r = wA.exec(t);
    if (r) return r[1];
  }
}
function $A(e) {
  const t = Am(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function IA(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(mo)) return !0;
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
    r.push(RA(e.nodeValue ?? ""));
    return;
  }
  if (!OA(e)) return;
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? $A(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function LA(e) {
  if (!PA.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !IA(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => Pm(n, !1, r)), r.join("").replaceAll(NA, "").replaceAll(L, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function DA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = se(e, ce);
  if (r === "attribute" || r === hr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (yt(o) || Oe(o) || $e(o)) return;
  const n = t.startsWith(L) && F(e.getParent()), i = n ? t.slice(1) : t, s = (n ? L : "") + i.replace(/ (?=[ \u00A0])/g, L).replace(new RegExp("(?<=\\u00A0) ", "g"), L);
  s !== t && e.setTextContent(s);
}
function UA(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function FA(e, t) {
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
function xc(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? LA(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(UA(s)) : ""),
    isInternal: FA(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const pf = String.raw`\\(?:\+?[${tr}]+\*?|\*)`, KA = new RegExp(
  String.raw`(?<=${pf})\u00A0|\u00A0(?=${pf})`,
  "g"
);
function Gl(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(KA, " ").replaceAll(L, "~");
}
const Nm = new RegExp(
  String.raw`\\c(?![${tr}])[ \u00A0]*[^\s\\]*`,
  "g"
), wm = new RegExp(String.raw`\\id(?![${tr}])[^\n\\]*`, "g"), zA = new RegExp(
  String.raw`^(?:${Nm.source}|${wm.source})`
);
function Jl(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Nm, "").replace(wm, "");
    return zA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function _c(e) {
  if (v(e) && se(e, ce) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Ue(t)) return !0;
  return !1;
}
function jA(e) {
  return _c(e.anchor.getNode()) || _c(e.focus.getNode());
}
function BA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && _c(t.getNode());
}
function VA(e, t) {
  const n = BA(e) ? t : Gl(Jl(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function WA(e, t = !1, r = () => {
}) {
  const n = xc(e, _n()._config.namespace);
  if (!n) return !1;
  const i = N(), s = w(i) && jA(i);
  if (!s && n.isInternal || t && w(i) && oi(i))
    return !1;
  const { text: o } = n;
  if (!o || !w(i)) return !1;
  if (e?.preventDefault(), s)
    return VA(i, o), !0;
  const a = Gl(Jl(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = _n();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Ws, void 0), u === "") return;
    const f = N();
    w(f) && f.insertText(u);
  }), !0;
}
function HA(e) {
  if (e.getTextContent() !== L) return !1;
  const t = e.getParent();
  return V(t) ? !Et(e.getPreviousSibling()) : !1;
}
function GA(e, t) {
  if (t || e.getTextContent() !== L) return "";
  const r = e.getParent();
  if (!V(r) || !Et(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function JA(e) {
  const t = e.getParent();
  return (V(t) ? t.getCaller() : void 0) || es;
}
function YA(e) {
  const t = e.getParent();
  return !t || tn(t) === void 0;
}
function Om(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Oc(e);
  let l = "", u = !0;
  for (const d of t) {
    if (z(d) && !d.isInline()) {
      !u && YA(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, Et(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + JA(d));
    else if (v(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += HA(d) ? "" : f.replaceAll(L, " ") + GA(d, d === n);
    } else (_s(d) || Ts(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(L, " "));
  }
  return l;
}
function qm(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function XA(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => yt(r) || Oe(r)
    )
  );
}
function QA(e) {
  const t = N();
  if (!w(t) || t.isCollapsed()) return;
  const r = Om(t), n = {
    "text/plain": r,
    "text/html": qm(r)
  };
  if (Uo() || XA(t)) return n;
  const i = eb(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function hf(e, t, r) {
  const n = N();
  if (!w(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !sg();
  const i = QA(t);
  return i ? Rm(e, t, n, i, r) : !1;
}
function Rm(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || tb(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const $m = Uf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function wa(e) {
  const t = e();
  return Jr(wf), Jr(ep), t;
}
const gf = 8, ZA = 1e3;
function Zn(e, t) {
  const r = Re(e) ? ["va", "vp"] : Ge(e) ? ["milestone"] : V(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    rx(En(n), e, t.pendingKeys);
}
function e1(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has($c) || i.updateTags.has(ts)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = ie(o);
        if (!c) continue;
        const l = An(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = ie(o.getKey());
        c?.isAttached() && En(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return Fe(
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
    e.registerMutationListener(mr, r),
    e.registerMutationListener(Or, r),
    e.registerMutationListener(qr, r)
  );
}
function Cc(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = N();
  return r ? t ? fg(r, t) : w(r) && oi(r) : !1;
}
function t1(e, t, r) {
  return Fe(
    e.registerCommand(
      cr,
      (n) => {
        if (Uo() || Cc(t)) return !1;
        const i = xc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Gl(Jl(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = sf(o, t.getMarker);
          if (a === "declined" && GE(e) && (a = sf(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      De
    ),
    e.registerCommand(
      cr,
      (n) => {
        const i = xc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !qM()) return !1;
        const o = N();
        return t.structureProtectionMode === "protected" && w(o) && oi(o) ? !1 : (n?.preventDefault(), w(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ws, void 0), a === "") return;
          const l = N();
          w(l) && l.insertText(a);
        }), !0);
      },
      qe
    ),
    e.registerCommand(
      cr,
      () => (t.splitExpected.current = !0, !1),
      ht
    )
  );
}
function r1({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = le(), o = e?.markerMode === "editable", a = !!e && Do(e), c = te(void 0), l = te(n);
  return j(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? ur, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), j(() => {
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
    let f, p = !1, m, g = !1, y = !1, k = 0;
    const _ = () => k < gf ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${gf} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), S = (M, R = "departure") => {
      s.update(() => {
        k = wa(
          () => Fs(u, M, R)
        ) ? k + 1 : 0;
      });
    };
    let P;
    const E = () => {
      if (P !== void 0 && clearTimeout(P), P = void 0, y || u.pendingKeys.size === 0) return;
      const M = l.current ?? ZA;
      M < 0 || (P = setTimeout(() => {
        P = void 0, !(y || u.pendingKeys.size === 0) && (p || _() || S(void 0, "idle"));
      }, M));
    }, B = Fe(
      s.registerNodeTransform(mr, (M) => {
        if (s.isComposing()) return;
        hA(M, u);
        const R = An(M);
        R && (Re(R.owner) || V(R.owner) || Oe(R.owner) || Ge(R.owner) && Po(R.owner).wrapper === void 0) && Zn(R.owner, u);
      }),
      s.registerNodeTransform(gt, (M) => {
        s.isComposing() || (yA(M, u), Zn(M, u));
      }),
      s.registerNodeTransform(Rt, (M) => {
        s.isComposing() || (TA(M), M.isAttached() && Zn(M, u));
      }),
      s.registerNodeTransform(nt, (M) => {
        s.isComposing() || zE(M, u);
      }),
      s.registerNodeTransform(ke, (M) => {
        if (!s.isComposing()) {
          WE(M, u);
          for (const R of ["separator", "char"])
            M.isAttached() && Es(En(R), M) && u.pendingKeys.add(M.getKey());
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
        s.isComposing() || Zn(M, u);
      }),
      s.registerNodeTransform(qr, (M) => {
        if (s.isComposing()) return;
        const R = An(M);
        R && (Ge(R.owner) || Re(R.owner) || V(R.owner) || Oe(R.owner)) && Zn(R.owner, u);
      }),
      s.registerNodeTransform(Pe, (M) => {
        s.isComposing() || (VE(M, u), Zn(M, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Ir, (M) => {
        s.isComposing() || gA(M, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(Ve, (M) => {
        s.isComposing() || vA(M, u);
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
        Ve,
        (M) => {
          s.getEditorState().read(() => {
            for (const [R, $] of M) {
              if ($ === "destroyed") continue;
              const U = ie(R);
              !U || se(U, ce) !== "attribute" || Ue(U.getParent()) || s.getElementByKey(R)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      e1(s, u),
      ...a ? [
        s.registerNodeTransform(Ve, (M) => {
          s.isComposing() || DA(M);
        }),
        s.registerCommand(
          Cs,
          (M) => hf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            M && typeof M == "object" && "clipboardData" in M ? M : null,
            s,
            !1
          ),
          qe
        ),
        s.registerCommand(
          Gr,
          (M) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            hf(
              M && typeof M == "object" && "clipboardData" in M ? M : null,
              s,
              !0
            )
          ),
          qe
        ),
        s.registerCommand(
          cr,
          (M) => WA(
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
          qe
        )
      ] : [],
      s.registerCommand(
        Gr,
        () => (!Cc(u) && !Uo() && bc(u), !1),
        De
      ),
      s.registerCommand(
        xo,
        () => (s.isComposing() || UE(u), !1),
        ni
      ),
      s.registerCommand(
        ai,
        () => (p = !1, k = 0, E(), !1),
        ht
      ),
      s.registerCommand(
        pr,
        (M) => (p = !1, k = 0, E(), (M.key === "Backspace" || M.key === "Delete") && !Cc(u, cg(M)) && (bc(u), DE(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !M.ctrlKey || M.altKey || M.shiftKey || M.metaKey || M.key !== " " && M.code !== "Space" || !OM() ? !1 : (M.preventDefault(), !0)),
        qe
      ),
      s.registerCommand(
        Lf,
        (M) => {
          const R = pm();
          R === "needs-plain-split" && s.dispatchCommand(Ws, void 0);
          const $ = R !== "declined" || nx();
          return $ && M?.preventDefault(), Fs(u), $;
        },
        qe
      ),
      s.registerCommand(
        Ws,
        () => (u.splitExpected.current = !0, Og()),
        qe
      ),
      t1(s, u, a),
      s.registerCommand(
        $m,
        () => {
          if (p) return !0;
          const M = s.getRootElement(), R = M?.ownerDocument, $ = !!M && !!R && R.hasFocus() && M.contains(R.activeElement);
          let U;
          if ($) {
            const I = N();
            U = w(I) ? I.focus.key : f;
          }
          return wa(() => Fs(u, U)), !0;
        },
        ht
      ),
      s.registerCommand(
        qc,
        () => {
          if (p) return !1;
          const M = N(), R = w(M) ? M.focus.key : f;
          return wa(() => Fs(u, R)), !1;
        },
        ht
      ),
      s.registerUpdateListener(({ editorState: M, tags: R }) => {
        u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const $ = M.read(() => {
          const I = N();
          return w(I) ? I.focus.key : void 0;
        }), U = m;
        if ($ !== void 0 && (m = $), R.has($c)) {
          u.pendingKeys.clear(), M.read(() => EA(u)), p = !0, $ !== void 0 && (f = $);
          return;
        }
        if (R.has(Yr)) {
          $ !== void 0 && $ !== U && (p = !0);
          return;
        }
        p || ($ !== void 0 && (f = $), E(), !(g || $ === void 0) && [...u.pendingKeys].some((I) => I !== $) && (g = !0, queueMicrotask(() => {
          g = !1, !y && (_() || S(f));
        })));
      })
    );
    return () => {
      y = !0, P !== void 0 && clearTimeout(P), P = void 0, d(), B(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const n1 = ["status_unknown", "status_invalid"], Im = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, i1 = Object.values(Im);
function s1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Im[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function mf(e) {
  e.classList.remove(...n1), e.removeAttribute("aria-description"), i1.includes(e.title) && e.removeAttribute("title");
}
function o1(e, t, r, n) {
  const i = (a) => a.read(() => ze().getChildrenKeys()), s = i(t), o = i(e);
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
function a1(e) {
  const t = ie(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function c1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = le(), i = e?.markerMode === "editable";
  return j(() => {
    if (!i) return;
    const s = t ?? ro;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = iE(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || a1(f)) continue;
            const m = ie(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && mf(p);
        }
        for (const [f, p] of d) {
          const m = n.getElementByKey(f);
          m && s1(m, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          o1(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && mf(u);
      }
    };
  }, [n, i, t, r]), null;
}
function l1(e, t) {
  const r = Tl(yl), n = fl();
  if (!r || !n?.end) return;
  const i = js.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = Xy({
    namespace: "markers-view-copy",
    nodes: [tt, ...hl],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    Pr.serializeEditorState(i, r)
  ).read(
    () => {
      const a = Io(n);
      return a ? Om(a) : void 0;
    },
    { editor: s }
  );
}
function u1({ viewOptions: e }) {
  const [t] = le();
  return j(() => {
    const r = (n, i) => {
      const s = N();
      if (!w(s) || s.isCollapsed()) return !1;
      const o = l1(t, e);
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
    return Fe(
      t.registerCommand(Cs, (n) => r(n, !1), qe),
      t.registerCommand(Gr, (n) => r(n, !0), qe)
    );
  }, [t, e]), null;
}
function Lm(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Nr(o);
    a && z(s) && Lm(s.getChildren(), a, r);
  }
}
function Dm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Nr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = gi(o);
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
    Qg(n, t) || ((ae(n) || F(n)) && r.push(n.getMarker()), z(n) && r.push(...Fm(n.getChildren(), t)));
  return r;
}
function Km(e) {
  const t = [];
  for (const r of e) {
    const n = Kl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Nr(r);
    i && t.push(...Km(i));
  }
  return t;
}
function Yl(e, t, r) {
  const n = Fm(e, r), i = Km(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function d1(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = N();
  let n, i;
  if (w(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = ie(t.key), i = t.offset;
  else
    return;
  if (!(!v(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Xl(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function f1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const k = zl(y, o, s);
    if (!k) return;
    c.text.length > 0 && (c.text += " ");
    const _ = c.text.length;
    k.spans.forEach(
      (S) => c.spans.push({ ...S, start: S.start + _, end: S.end + _ })
    ), c.sentinels.push(...k.sentinels), c.text += k.text;
  }
  const l = i ? Xl(c, i) : c.text, u = wr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Un(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = Pr.serializeEditorState(
    { type: Cr, version: _r, content: u },
    s
  ).root.children;
  if (jo(d) !== c.sentinels.length) {
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
  if (Mi(d, o) === vi(e, o) && Yl(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Dm(d, f);
  const m = p1(e), g = zm(d);
  for (let y = 0; y < m.length && y < g.length; y++)
    m[y].sid !== void 0 && g[y].number === m[y].number && (g[y].sid = m[y].sid);
  return d;
}
function p1(e) {
  const t = [], r = (n) => {
    Re(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : z(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function zm(e) {
  const t = [];
  for (const r of e) {
    qp(r) && t.push(r);
    const n = Nr(r);
    n && t.push(...zm(n));
  }
  return t;
}
function h1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = am(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? Xl(l, i) : l.text, f = wr(d, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Un(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [p] = f;
  if (f.length !== 1 || typeof p != "object" || p.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const m = p.content ?? [], g = cm(m), y = e.getCategory() !== g, k = Yg(e, m, g, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = k.children;
  if (jo(_) !== l.sentinels.length) {
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
  if (Mi(_, o) === vi(u, o) && Yl(u, _, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Dm(_, S), { rebuilt: _, contentNodes: u, category: g, categoryChanged: y };
}
function yf(e) {
  return e.$?.textType;
}
function g1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && yf(e) === yf(t);
}
function m1(e) {
  const t = [];
  for (const r of e) {
    const n = ie(r);
    n?.isAttached() && $e(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function y1(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!V(t)) return;
  const r = e.getTextContent();
  if (sn(e)) return;
  const n = Gg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function bf(e, t) {
  const r = e;
  r.marker = t, r.text = em(t, r.markerSyntax, r.nested);
}
function b1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Pe.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && bf(a.node, s);
  const c = n.getChildren().filter(O).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && bf(l.node, s);
}
function k1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = dm(e, i, n);
  if (!o) return;
  const a = r ? Xl(o, r) : o.text, c = wr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Un(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = Pr.serializeEditorState(
    { type: Cr, version: _r, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Vo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Mi(u, i) === vi(d, i) && Yl(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function T1(e, t, r, n, i) {
  const s = d1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    V(y) ? c.set(y.getKey(), y) : Oe(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const k = ie(y);
    if (!k?.isAttached()) continue;
    const _ = ys(k);
    if (_) {
      if (d(_), O(k)) {
        const S = km(k, r.getMarker);
        S && a.push(S);
      }
      if (V(_)) {
        const S = y1(k);
        S && u.set(_.getKey(), S);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((k) => f.has(k.getKey())) || (y.forEach((k) => {
      f.add(k.getKey()), o.delete(k.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = ys(s.node);
    y && d(y);
  }
  const p = m1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), g = /* @__PURE__ */ new Map();
  Lm(ze().getChildren(), e.root.children, g);
  for (const y of u.values()) b1(y, g);
  for (const y of c.values()) {
    const k = g.get(y.getKey()), _ = k ? Nr(k.node) : void 0;
    if (!k || !_) continue;
    const S = h1(y, g, r, m, s);
    if (!S) continue;
    if (S.categoryChanged) {
      const B = k.node;
      S.category === void 0 ? delete B.category : B.category = S.category;
    }
    if (!S.rebuilt) continue;
    const P = g.get(S.contentNodes[0].getKey());
    if (!P) continue;
    const E = _.indexOf(P.node);
    E < 0 || _.splice(E, S.contentNodes.length, ...S.rebuilt);
  }
  for (const y of o.values()) {
    const k = g.get(y[0].getKey());
    if (!k) continue;
    const _ = f1(y, g, r, m, s);
    if (!_) continue;
    const S = k.siblings.indexOf(k.node);
    S < 0 || k.siblings.splice(S, y.length, ..._);
  }
  for (const y of l.values()) {
    const k = g.get(y.getKey());
    if (!k) continue;
    const _ = 1 + Vo(y).length, S = k1(y, r, s);
    if (!S) continue;
    const P = k.siblings.indexOf(k.node);
    P < 0 || k.siblings.splice(P, _, ...S);
  }
  for (const y of p) {
    const k = g.get(y.getKey());
    if (!k) continue;
    const _ = k.siblings.indexOf(k.node);
    if (_ < 0) continue;
    k.siblings.splice(_, 1);
    const S = k.siblings[_ - 1], P = k.siblings[_], E = S && gi(S), B = P && gi(P);
    S && P && E !== void 0 && B !== void 0 && g1(S, P) && (S.text = E + B, k.siblings.splice(_, 1));
  }
  return Sg(e, r.viewOptions);
}
function x1({
  viewOptions: e,
  logger: t
}) {
  const [r] = le(), n = Ci(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1)), i = e?.hasGutterParaMarkers ?? !1;
  return j(() => {
    if (n)
      return r.registerNodeTransform(
        nt,
        (s) => i ? C1(s) : _1(s, t)
      );
  }, [r, n, i, t]), null;
}
function _1(e, t) {
  e.getMarker() !== lr && (e.isEmpty() || Ot(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${lr}" (key ${e.getKey()})`
  ), e.setMarker(lr)));
}
function C1(e) {
  const t = e.getFirstChild();
  if (Ot(t)) return;
  const r = up(Ae(e.getMarker()) + L);
  t ? t.insertBefore(r) : e.append(r);
  const n = N();
  if (w(n))
    for (const i of [n.anchor, n.focus])
      i.type === "element" && i.key === e.getKey() && i.offset === 0 && i.set(e.getKey(), 1, "element");
}
function S1({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = le(), n = te({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return j(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, yo(s, e) || v1(i, r, e);
  }, [r, e, t]), j(
    () => r.registerMutationListener(
      jt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Sc(r);
        kf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ks(s) === Ks(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), j(() => {
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
      f && (Sc(r) || kf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: Ks(a) === Ks(c)
      }));
    };
    return Fe(
      ...[Rt, gr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), j(
    () => r.registerCommand(
      dr,
      () => {
        const i = n.current;
        return i.phase === "idle" && P1(i, E1()), !1;
      },
      ht
    ),
    [r]
  ), j(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(dr, void 0));
    };
    return Fe(
      r.registerMutationListener(Mt, i),
      r.registerMutationListener(gt, i)
    );
  }, [r]), j(() => {
    const i = () => q1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function v1(e, t, r) {
  if (M1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Sc(t);
  (!n || n === r.book) && t.update(() => Bm(r.chapterNum, r.verseNum), {
    tag: Yr
  });
}
function M1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => yo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function jm(e) {
  return kC(e) ?? jp(e);
}
function E1() {
  const e = N(), t = jm(e);
  if (!t) return;
  const r = Ql(), n = Ip(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = al(t, e), { verseNum: o, verse: a } = Mx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Sc(e) {
  return e.getEditorState().read(() => Ql()?.getCode() || void 0);
}
function Ql() {
  return ze().getChildren().find(yt);
}
function kf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Oa(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Oa(e, t), e.phase = "navigating") : i && Oa(e, t), r && r !== e.scrRef.book && Hm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Oa(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Bm(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Yr }
    );
  });
}
function Bm(e, t) {
  const r = jm(N()), n = cl(r)?.getNumber(), i = Ip(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Bp(n) ? Wm(t, n) : parseInt(n, 10) === t))
    return;
  const o = ze().getChildren(), a = $p(o, e);
  if (!a) return;
  const c = Lk(o, a), l = Nk(c, !0);
  Ik(c, l);
  let u;
  try {
    u = xx(c, t);
  } catch {
    return;
  }
  u && (ae(u) ? !v(u.getFirstChild()) && pt(u) || Bt(u, 0) : A1(u));
}
function A1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || he(n)) {
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
  const s = z(n) && !V(n) ? Vm(n) : void 0;
  s ? s.select(0, 0) : Bt(t, r);
}
function Vm(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (z(t) && !V(t)) return Vm(t);
}
function Ks(e) {
  return e.read(() => {
    const t = ze().getChildren().find(Ye);
    return `${Ql()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function P1(e, t) {
  e.phase !== "navigating" && t && (N1(t, e.scrRef) || Hm(e, w1(t, e.scrRef)));
}
function N1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Wm(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Wm(e, t) {
  try {
    return Hc(e, t);
  } catch {
    return !1;
  }
}
function w1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const O1 = 8;
function Hm(e, t) {
  return yo(t, e.scrRef) || e.pendingEchoes.some((r) => yo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > O1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function yo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function q1(e) {
  e.phase = "idle";
}
function R1(e) {
  return yt(e) ? `${e.__code}` : Oe(e) ? `${e.__marker} "${e.__number}"` : F(e) ? `${e.__marker}` : Ss(e) ? `${e.__marker} "${e.__number}"` : Et(e) ? `${e.__caller}` : Dn(e) ? `${e.__marker} "${e.__number}"` : V(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ae(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${$1(e)}` : Se(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Re(e) ? `${e.__marker} "${e.__number}"` : "";
}
function $1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[xs]) : "";
}
function I1() {
  const [e] = le();
  return /* @__PURE__ */ C(
    rb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: R1,
      editor: e
    }
  );
}
const Gm = Ef(null), Tf = 4;
function L1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = te(null), s = Af(Gm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return j(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ C("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function D1({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = fe(), [s, o] = fe(), a = ye(
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
  return j(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ C(Gm.Provider, { value: l, children: /* @__PURE__ */ C("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function U1({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = te(null), c = te(null), [l, u] = fe(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return j(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: g } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + Tf}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
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
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Tf;
          y !== m.getBoundingClientRect().top && (m.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ _e(xn, { children: [
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
          i && /* @__PURE__ */ C("span", { className: i }),
          t && /* @__PURE__ */ C("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ C("i", { className: "chevron-down" })
        ]
      }
    ),
    l && Tn(
      /* @__PURE__ */ C(D1, { dropDownRef: a, onClose: d, children: s }),
      document.body
    )
  ] });
}
const vc = {
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
}, Mc = {
  ...vc,
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
function F1({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ C(
    U1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + K1(t),
      buttonLabel: z1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(vc).map((n) => /* @__PURE__ */ _e(
        L1,
        {
          className: "item block-marker " + j1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ C("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ C("span", { className: "text usfm_" + n, children: vc[n] })
          ]
        },
        n
      ))
    }
  );
}
function K1(e) {
  return e && e in Mc ? e : "ban";
}
function z1(e) {
  return e && e in Mc ? Mc[e] : "No Style";
}
function j1(e) {
  return e ? "active dropdown-item-active" : "";
}
function xf() {
  return /* @__PURE__ */ C("div", { className: "divider" });
}
const B1 = qn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = le(), [o, a] = fe(s), [c, l] = fe(), [u, d] = fe(!1), [f, p] = fe(!1), m = ye(
    ({
      canUndo: g,
      canRedo: y,
      blockMarker: k,
      contextMarker: _
    }) => {
      d(g), p(y), l(k), n?.({
        canUndo: g,
        canRedo: y,
        blockMarker: k,
        contextMarker: _
      });
    },
    [n]
  );
  return j(() => s.registerCommand(
    dr,
    (g, y) => (a(y), !1),
    De
  ), [s]), /* @__PURE__ */ _e(xn, { children: [
    /* @__PURE__ */ C(yg, { onStateChange: m }),
    /* @__PURE__ */ _e("div", { className: "toolbar", children: [
      /* @__PURE__ */ C(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(Ff, void 0);
          },
          title: Zi ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(Kf, void 0);
          },
          title: Zi ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ C("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ C(xf, {}),
      o === s && /* @__PURE__ */ _e(xn, { children: [
        /* @__PURE__ */ C(
          F1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ C(xf, {})
      ] }),
      /* @__PURE__ */ C("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), V1 = Lo(), W1 = {}, H1 = {};
function G1() {
  return /* @__PURE__ */ C("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const Jm = qn(function({
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
  const f = te(null), p = te(null), m = te(null), g = te(t), y = te(void 0), k = te(void 0), _ = te(void 0), S = te(void 0), P = te(!1), [E, B] = fe(t), [M, R] = fe(0), [$, U] = fe(), {
    isReadonly: I = !1,
    structureProtectionMode: re = "off",
    hasExternalUI: J = !1,
    hasSpellCheck: be = !1,
    textDirection: ge = "ltr",
    markerMenuTrigger: dt = "\\",
    view: je,
    nodes: Lr,
    debug: Dr = !1,
    contextMenu: cn,
    styleInfo: Q,
    markerSettleDelayMs: A
  } = c ?? H1, G = je ?? V1, de = ps(G) && (G.markerMode !== "hidden" || !G.hasSpacing || G.hasGutterParaMarkers || G.hasActiveTextFocusBox) ? {
    ...G,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : G, Me = te(de);
  It(Me.current, de) || (Me.current = de);
  const Z = Me.current, ve = Be(() => Lr ?? W1, [Lr]), yr = Be(() => cn, [cn]), $t = Be(
    () => fx(Q ?? ro),
    [Q]
  ), ln = te(l);
  It(ln.current, l) || (ln.current = l);
  const He = ln.current, ue = ps(Z), bt = I || ue, Ce = de !== G;
  j(() => {
    ue && !I && He?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Ce && He?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), Z?.markerMode === "visible" && !I && He?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ue, I, Ce, He, Z?.markerMode]);
  const br = te(null), we = Be(() => {
    if (Z.markerMode !== "editable") return;
    const q = Q ?? ro;
    return {
      getContext: () => br.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (W) => fE(
        q,
        W,
        ve.extraValidMarkers
      ),
      getEnterItems: (W) => pE(
        q,
        W,
        ve.extraValidMarkers
      ),
      apply: (W, Y) => {
        const ee = br.current;
        ee && (Y.trigger === "enter" ? ee.splitParagraphWithMarker(W.marker) : ee.applyMarkerMenuSelection(W, Y));
      },
      commitTypedCloser: (W) => {
        br.current?.commitTypedCloser(W);
      }
    };
  }, [Z, Q, ve.extraValidMarkers]), kr = (q) => {
    P.current || (P.current = !0, ln.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ei = (q) => {
    if (ue)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, kt = (q) => {
    if (Ei(q), bt) throw new Error(`Cannot ${q} in readonly mode`);
  }, As = Be(
    () => ({
      namespace: "platformEditor",
      theme: { ...zg, showCharMarkerTitles: Z.showCharMarkerTitles },
      editable: !bt,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [tt, ...ue ? S_ : hl]
    }),
    [bt, ue, Z.showCharMarkerTitles]
  );
  js.initialize(He);
  function Tr(q) {
    if (q !== void 0 && !RM(q, ve.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const Fn = ye(() => {
    const q = f.current;
    if (!q) return g.current;
    const W = zu(q), Y = k.current;
    if ((!W || W.size === 0) && !Y) return g.current;
    const ee = q.getEditorState(), Ee = ee.toJSON();
    return ee.read(
      () => T1(
        Ee,
        W ?? /* @__PURE__ */ new Set(),
        { viewOptions: Z, getMarker: $t, logger: He },
        Y,
        _.current
      )
    ) ?? g.current;
  }, [Z, $t, He]), Ai = {
    focus() {
      const q = f.current;
      if (!q) return;
      q.focus(), q.getEditorState().read(() => mi(N())) && q.getRootElement()?.focus({ preventScroll: !0 });
    },
    isFocused() {
      const q = f.current?.getRootElement();
      return !!q && q.ownerDocument.activeElement === q;
    },
    undo() {
      f.current?.dispatchCommand(Ff, void 0);
    },
    redo() {
      f.current?.dispatchCommand(Kf, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      kt("cut"), f.current && vl(f.current);
    },
    copy() {
      f.current && Sl(f.current);
    },
    paste() {
      kt("paste"), f.current && Ml(f.current);
    },
    pastePlainText() {
      kt("paste as plain text"), f.current && El(f.current);
    },
    getUsj() {
      return Fn();
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
        k.current = void 0;
        return;
      }
      const W = f.current?.getEditorState().read(() => {
        const Y = N();
        return w(Y) && Y.isCollapsed() ? Y.focus.key : void 0;
      });
      k.current = { input: q, nodeKey: W ?? _.current?.key };
    },
    setUsj(q) {
      if (!It(g.current, q)) {
        g.current = q, k.current = void 0;
        const W = It(E, q);
        B(q), W && R((Y) => Y + 1);
      }
    },
    applyUpdate(q, W = "remote") {
      if (ue && W === "remote") {
        ln.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Ei("apply an update"), f.current?.update(
        () => {
          W === "remote" && Jr(ts), X_(q, Z, ve, He);
        },
        { discrete: !0 }
      );
      const Y = f.current?.getEditorState();
      if (!Y) return;
      const ee = js.deserializeEditorState(Y, Z);
      if (ee) {
        const Ee = !It(g.current, ee);
        if (Ee && (g.current = ee), Ee || !It(E, ee)) {
          const Qe = ed(q, Y, "apply");
          S.current = ee, s?.(ee, q, W, Qe);
        }
      }
    },
    replaceEmbedUpdate(q, W) {
      const Y = f.current?.read(() => Dx(q, W));
      Y ? this.applyUpdate(Y) : l?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ue) {
        kr("get the selection");
        return;
      }
      return f.current?.read(fl);
    },
    getSelectedParaMarker() {
      const q = f.current;
      if (q?.isEditable())
        return q.getEditorState().read(() => Zr(N())?.getMarker());
    },
    setSelection(q) {
      if (ue) {
        kr("set the selection");
        return;
      }
      f.current?.update(() => {
        const W = Io(q);
        W !== void 0 && (Sr(W), Jr(Zf));
      });
    },
    setAnnotation(q, W, Y, ee, Ee) {
      if (ue) {
        kr("set an annotation");
        return;
      }
      let Qe, At, un, Pi;
      typeof ee == "function" || ee === void 0 ? (Qe = ee, At = Ee) : (Qe = ee.onClick, At = ee.onRemove, un = ee.onMouseEnter, Pi = ee.onMouseLeave), p.current?.setAnnotation(
        q,
        Nu(W),
        Y,
        Qe,
        At,
        un,
        Pi
      );
    },
    removeAnnotation(q, W) {
      p.current?.removeAnnotation(Nu(q), W);
    },
    formatPara(q) {
      kt("format a paragraph"), f.current?.update(
        () => {
          const W = N(), Y = Zr(W);
          if (Y) {
            kc(Y, q, Z);
            return;
          }
          if (!w(W)) {
            l?.warn(
              `formatPara refused: no range selection or selected paragraph marker to retag with "${q}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          sb(W, () => ss(q));
          const ee = N();
          if (!w(ee)) return;
          const Ee = /* @__PURE__ */ new Set();
          ee.getNodes().forEach((Qe) => {
            const At = Qe.getTopLevelElement();
            ae(At) && Ee.add(At);
          }), Ee.forEach((Qe) => kc(Qe, q, Z));
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
      if (bt) throw new Error("Cannot remove character marker in readonly mode");
      Tr(q);
      let W = !1;
      return f.current?.update(
        () => {
          const Y = N();
          w(Y) && (W = Ig(Y, q, Z));
        },
        { discrete: !0 }
      ), W;
    },
    replaceCharacterMarker(q, W) {
      if (bt) throw new Error("Cannot replace character marker in readonly mode");
      Tr(q), Tr(W);
      let Y = !1;
      return f.current?.update(
        () => {
          const ee = N();
          w(ee) && (Y = WM(ee, q, W));
        },
        { discrete: !0 }
      ), Y;
    },
    extendCharacterMarker(q, W) {
      if (bt) throw new Error("Cannot extend character marker in readonly mode");
      Tr(q), W?.forEach(
        (ee) => Tr(ee)
      );
      let Y = !1;
      return f.current?.update(
        () => {
          const ee = N();
          w(ee) && (Y = HM(
            ee,
            q,
            W,
            Z
          ));
        },
        { discrete: !0 }
      ), Y;
    },
    insertMarker(q) {
      if (bt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!dc(q, ve.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      f.current.update(Yn, { discrete: !0 });
      const W = fc(
        q,
        y,
        Z,
        ve,
        He,
        void 0,
        Q
      );
      return W.action({ editor: f.current, reference: r }), W.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!I)
        return f.current?.getEditorState().read(() => rA());
    },
    applyMarkerMenuSelection(q, W) {
      if (I) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (q.kind !== "closeTag" && !dc(q.marker, ve.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let Y;
      return f.current.update(() => {
        Yn(), Y = aA(q, W, r, {
          expandedNoteKeyRef: y,
          viewOptions: Z,
          nodeOptions: ve,
          logger: l,
          styleInfo: Q
        });
      }), Y;
    },
    splitParagraphWithMarker(q) {
      if (I) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        Yn(), bm(q, Z);
      });
    },
    commitTypedMarker(q, W) {
      if (I) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let Y = !1;
      return f.current.update(() => {
        Yn(), Y = oA(q, W), Y || l?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), Y;
    },
    commitTypedCloser(q) {
      if (I) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let W = !1;
      return f.current.update(() => {
        Yn(), W = ym(q), W || l?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), W;
    },
    insertNote(q, W, Y) {
      kt("insert a note"), f.current?.update(
        () => {
          Yn();
          const ee = Lh(
            q,
            W,
            Y,
            r,
            Z,
            ve,
            He
          );
          ee && !ee.getIsCollapsed() && (y.current = ee.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      f.current?.update(() => {
        const W = od(q);
        W && (x_(W, Z), W.getIsCollapsed() || (y.current = W.getKey()));
      });
    },
    getNoteOps(q) {
      return f.current?.read(() => {
        const W = od(q);
        if (W)
          return ul(W);
      });
    },
    get toolbarEndRef() {
      return m;
    }
  };
  br.current = Ai, Ac(d, () => Ai), j(() => {
    const q = f.current;
    if (q)
      return q.registerUpdateListener(({ editorState: W }) => {
        W.read(() => {
          const Y = N();
          if (!w(Y) || !Y.isCollapsed()) return;
          const ee = Y.focus.getNode();
          v(ee) && (_.current = { key: ee.getKey(), offset: Y.focus.offset });
        });
      });
  }, []);
  const rr = ye(
    (q, W, Y, ee) => {
      if (ue) return;
      const Ee = js.deserializeEditorState(q, Z);
      if (Ee) {
        const Qe = !It(g.current, Ee);
        if (Qe && (g.current = Ee), Qe || !It(E, Ee)) {
          const At = ed(ee, q);
          S.current = Ee, s?.(Ee, ee, "local", At);
        }
      }
    },
    [E, s, Z, ue]
  );
  j(() => {
    const q = f.current;
    if (!(!q || !s))
      return q.registerUpdateListener(({ tags: W, dirtyElements: Y, dirtyLeaves: ee }) => {
        !W.has($c) && (Y.size === 0 && ee.size === 0 || W.has(ts) || !zu(q)?.size) || queueMicrotask(() => {
          const Ee = Fn();
          !Ee || It(S.current, Ee) || (S.current = Ee, s(Ee, void 0, "local", void 0));
        });
      });
  }, [s, Fn]);
  const Vt = ye(
    (q) => {
      U(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ _e(Bf, { initialConfig: As, children: [
      /* @__PURE__ */ C(nS, { isEditable: !bt }),
      /* @__PURE__ */ _e("div", { className: "editor-container", children: [
        J ? /* @__PURE__ */ C(yg, { onStateChange: Vt }) : /* @__PURE__ */ C(
          "div",
          {
            className: "editor-toolbar-container" + (bt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ C(
              B1,
              {
                ref: m,
                editorRef: br,
                isReadonly: bt,
                onStateChange: Vt
              }
            )
          }
        ),
        /* @__PURE__ */ _e("div", { className: "editor-inner", children: [
          /* @__PURE__ */ C(Wf, { editorRef: f }),
          /* @__PURE__ */ C(
            ib,
            {
              contentEditable: /* @__PURE__ */ C(
                Vf,
                {
                  className: `editor-input usfm ${Y_(Z).join(" ")}${Z.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${Z.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: be
                }
              ),
              placeholder: /* @__PURE__ */ C(G1, {}),
              ErrorBoundary: Hf
            }
          ),
          J && /* @__PURE__ */ C(rS, {}),
          /* @__PURE__ */ C(Gf, {}),
          r && n && /* @__PURE__ */ C(S1, { scrRef: r, onScrRefChange: n }),
          r && !J && /* @__PURE__ */ C(
            Ov,
            {
              trigger: dt,
              scrRef: r,
              contextMarker: $,
              getMarkerAction: (q) => fc(
                q,
                y,
                Z,
                ve,
                He,
                void 0,
                Q
              ),
              editableHarness: we
            }
          ),
          /* @__PURE__ */ C(
            oS,
            {
              scripture: E,
              scriptureRef: g,
              nodeOptions: ve,
              editorAdaptor: Pr,
              viewOptions: Z,
              logger: He
            },
            M
          ),
          /* @__PURE__ */ C(MS, { onChange: i }),
          /* @__PURE__ */ C(
            B_,
            {
              onChange: rr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Mb
            }
          ),
          /* @__PURE__ */ C(QM, { viewOptions: Z }),
          /* @__PURE__ */ C(z_, { ref: p, logger: He }),
          /* @__PURE__ */ C(vC, { viewOptions: Z }),
          /* @__PURE__ */ C(UC, {}),
          /* @__PURE__ */ C(VC, {}),
          Z?.markerMode !== "editable" && /* @__PURE__ */ C(WC, { logger: He }),
          /* @__PURE__ */ C(YC, { options: yr }),
          /* @__PURE__ */ C(tS, {}),
          /* @__PURE__ */ C(sS, {}),
          /* @__PURE__ */ C(cA, {}),
          /* @__PURE__ */ C(
            r1,
            {
              viewOptions: Z,
              getMarker: $t,
              logger: He,
              markerSettleDelayMs: A,
              structureProtectionMode: re
            }
          ),
          Z?.markerMode === "visible" && /* @__PURE__ */ C(u1, { viewOptions: Z }),
          /* @__PURE__ */ C(
            c1,
            {
              styleInfo: Q,
              viewOptions: Z,
              logger: He
            }
          ),
          /* @__PURE__ */ C(
            aS,
            {
              expandedNoteKeyRef: y,
              nodeOptions: ve,
              viewOptions: Z,
              logger: He
            }
          ),
          /* @__PURE__ */ C(vS, {}),
          /* @__PURE__ */ C(xC, {}),
          /* @__PURE__ */ C(hC, {}),
          /* @__PURE__ */ C(x1, { viewOptions: Z, logger: He }),
          /* @__PURE__ */ C(
            wS,
            {
              onParaMarkerMenuRequest: a,
              structureProtectionMode: re
            }
          ),
          /* @__PURE__ */ C(LS, {}),
          /* @__PURE__ */ C(kv, { structureProtectionMode: re }),
          /* @__PURE__ */ C(Tv, { textDirection: ge }),
          /* @__PURE__ */ C(_v, {}),
          /* @__PURE__ */ C(Nv, {}),
          u
        ] }),
        Dr && /* @__PURE__ */ C(I1, {})
      ] })
    ] }, Z.verseLayout ?? "inline")
  );
}), rN = qn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ C(Jm, { ref: r, ...i });
});
function Ym() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function bo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? Ym() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Xm(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? Ym() : r,
    quote: e,
    type: "thread"
  };
}
function _f(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function J1(e) {
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
class Y1 {
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
          const c = _f(a);
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
          const c = _f(a);
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
      markedComment: J1(t)
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
      Tb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      ht
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof xb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const m = p.insert, g = p.retain, y = p.delete, k = u.parent, _ = u === r ? void 0 : k instanceof bu && this._comments.find((S) => S.id === k.get("id"));
              if (Array.isArray(m)) {
                const S = f;
                m.slice().reverse().forEach((P) => {
                  const E = P.get("id"), M = P.get("type") === "thread" ? Xm(
                    P.get("quote"),
                    P.get("comments").toArray().map(
                      (R) => bo(
                        R.get("content"),
                        R.get("author"),
                        R.get("id"),
                        R.get("timeStamp"),
                        R.get("deleted")
                      )
                    ),
                    E
                  ) : bo(
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
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let S = 0; S < y; S++) {
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
function X1(e) {
  const [t, r] = fe(e.getComments());
  return j(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function Q1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = te(null);
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
  }, [n, e]), /* @__PURE__ */ C("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ _e("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function Z1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return Tn(
    /* @__PURE__ */ C(Q1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Qm() {
  const [e, t] = fe(null), r = ye(() => {
    t(null);
  }, []), n = Be(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ C(Z1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = ye(
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
const eP = {
  ...zg,
  paragraph: "CommentEditorTheme__paragraph"
};
function tP(...e) {
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
  return /* @__PURE__ */ C(
    "button",
    {
      disabled: i,
      className: tP(
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
function rP({
  className: e
}) {
  return /* @__PURE__ */ C(Vf, { className: e || "ContentEditable__root" });
}
function nP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ C("div", { className: t || "Placeholder__root", children: e });
}
const Cf = Uf("INSERT_INLINE_COMMAND");
function iP({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = te(null), s = ye(() => {
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
  }, [e, t, r, s]), /* @__PURE__ */ C("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ C("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ C("i", { className: "icon add-comment" }) }) });
}
function sP({ onEscape: e }) {
  const [t] = le();
  return j(() => t.registerCommand(
    Rc,
    (r) => e(r),
    ni
  ), [t, e]), null;
}
function Zm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ C(Bf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: eP
  }, children: /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ C(
      yb,
      {
        contentEditable: /* @__PURE__ */ C(rP, { className: e }),
        placeholder: /* @__PURE__ */ C(nP, { children: s }),
        ErrorBoundary: Hf
      }
    ),
    /* @__PURE__ */ C(mb, { onChange: n }),
    /* @__PURE__ */ C(Gf, {}),
    t !== !1 && /* @__PURE__ */ C(pb, {}),
    /* @__PURE__ */ C(sP, { onEscape: r }),
    /* @__PURE__ */ C(hb, {}),
    i !== void 0 && /* @__PURE__ */ C(Wf, { editorRef: i })
  ] }) });
}
function ey(e, t) {
  return ye(
    (r, n) => {
      r.read(() => {
        e(bb()), t(!kb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function oP({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = te(null), c = Be(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = te(null), u = ry(), d = ye(() => {
    e.getEditorState().read(() => {
      const g = N();
      if (w(g)) {
        l.current = g.clone();
        const y = g.anchor, k = g.focus, _ = ob(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), S = a.current;
        if (_ !== null && S !== null) {
          const { left: P, bottom: E, width: B } = _.getBoundingClientRect(), M = ab(e, _);
          let R = M.length === 1 ? P + B / 2 - 125 : P - 125;
          R < 10 && (R = 10), S.style.left = `${R}px`, S.style.top = `${E + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const $ = M.length, { container: U } = c, I = c.elements, re = I.length;
          for (let J = 0; J < $; J++) {
            const be = M[J];
            let ge = I[J];
            ge === void 0 && (ge = document.createElement("span"), I[J] = ge, U.appendChild(ge));
            const je = `position:absolute;top:${be.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${be.left}px;height:${be.height}px;width:${be.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            ge.style.cssText = je;
          }
          for (let J = re - 1; J >= $; J--) {
            const be = I[J];
            U.removeChild(be), I.pop();
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
        Xm(g, [bo(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = ey(i, o);
  return /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ C(
      Zm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ C(nn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ C(
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
function aP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = te(null), c = ry(), l = ey(i, o);
  return /* @__PURE__ */ _e(xn, { children: [
    /* @__PURE__ */ C(
      Zm,
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
      nn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(bo(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(Qy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ C("i", { className: "send" })
      }
    )
  ] });
}
function ty({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ _e(xn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ _e("div", { className: "Modal__content", children: [
      /* @__PURE__ */ C(
        nn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ C(
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
function Sf({
  comment: e,
  deleteComment: t,
  thread: r,
  rtf: n
}) {
  const [i, s] = fe(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Qm();
  return /* @__PURE__ */ _e("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ C("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ _e("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ C("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ _e(xn, { children: [
      /* @__PURE__ */ C(
        nn,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ C(
              ty,
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
function cP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = le(), [a, c] = fe(0), [l, u] = Qm(), d = Be(
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
  }, [a]), /* @__PURE__ */ C("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ _e(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(g)[0], _ = ie(k);
                Se(_) && _.selectStart();
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
          /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ _e("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ C("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ C(
              nn,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ C(
                    ty,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: g
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ C("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ C("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((g) => /* @__PURE__ */ C(
            Sf,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ C(
            aP,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      p
    ) : /* @__PURE__ */ C(
      Sf,
      {
        comment: f,
        deleteComment: r,
        rtf: d
      },
      p
    );
  }) });
}
function lP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = te(null), o = r.length === 0;
  return /* @__PURE__ */ _e("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ C("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ C(
      cP,
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
function ry() {
  const e = Jf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function uP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Jf(), [a] = le(), c = Be(() => {
    const R = new Y1(a, s);
    return r && R.registerOnChange(r), t?.(R), R;
  }, [a, s, r, t]), l = X1(c), u = Be(() => /* @__PURE__ */ new Map(), []), [d, f] = fe(), [p, m] = fe([]), [g, y] = fe(!1), [k, _] = fe(!1), { yjsDocMap: S } = o;
  j(() => {
    if (e) {
      const R = e("comments", S);
      return c.registerCollaboration(R);
    }
    return () => {
    };
  }, [c, e, S]);
  const P = ye(() => {
    a.update(() => {
      const R = N();
      R !== null && (R.dirty = !0);
    }), y(!1);
  }, [a]), E = ye(
    (R, $) => {
      if (R.type === "comment") {
        const U = c.deleteCommentOrThread(R, $);
        if (!U)
          return;
        const { markedComment: I, index: re } = U;
        c.addComment(I, $, re);
      } else {
        c.deleteCommentOrThread(R);
        const U = $ !== void 0 ? $.id : R.id, I = u.get(U);
        I !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const re of I) {
              const J = ie(re);
              Se(J) && (J.deleteID(Hr, U), J.hasNoIDsForEveryType() && Ys(J));
            }
          });
        });
      }
    },
    [c, a, u]
  ), B = ye(
    (R, $, U, I) => {
      c.addComment(R, U), $ && (a.update(() => {
        w(I) && hp(I, Hr, R.id);
      }), y(!1));
    },
    [c, a]
  );
  j(() => {
    const R = [];
    let $;
    for (const U of p) {
      const I = u.get(U);
      if (I !== void 0)
        for (const re of I) {
          const J = a.getElementByKey(re);
          J !== null && (J.classList.add("selected"), R.push(J), $ = window.setTimeout(() => {
            _(!0);
          }, 0));
        }
    }
    return () => {
      $ !== void 0 && window.clearTimeout($);
      for (const U of R)
        U.classList.remove("selected");
    };
  }, [p, a, u]), j(() => {
    if (!a.hasNodes([tt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const R = /* @__PURE__ */ new Map();
    return Fe(
      jf(
        a,
        tt,
        ($) => ns($.getTypedIDs()),
        ($, U) => {
          for (const [I, re] of Object.entries($.getTypedIDs()))
            re.forEach((J) => {
              U.addID(I, J);
            });
        }
      ),
      a.registerMutationListener(
        tt,
        ($) => {
          a.getEditorState().read(() => {
            for (const [U, I] of $) {
              const re = ie(U);
              let J = [];
              I === "destroyed" ? J = R.get(U) ?? [] : Se(re) && (J = re.getTypedIDs()[Hr] ?? []);
              for (const be of J) {
                let ge = u.get(be);
                R.set(U, J), I === "destroyed" ? ge !== void 0 && (ge.delete(U), ge.size === 0 && u.delete(be)) : (ge === void 0 && (ge = /* @__PURE__ */ new Set(), u.set(be, ge)), ge.has(U) || ge.add(U));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: $, tags: U }) => {
        $.read(() => {
          const I = N();
          let re = !1, J = !1;
          if (w(I)) {
            const be = I.anchor.getNode();
            if (v(be)) {
              const ge = ok(be, Hr, I.anchor.offset) ?? [];
              ge !== null && (m(ge), re = !0), I.isCollapsed() || (f(be.getKey()), J = !0);
            }
          }
          re || m((be) => be.length === 0 ? be : []), J || f(null), !U.has("collaboration") && w(I) && y(!1);
        });
      }),
      a.registerCommand(
        Cf,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), y(!0), !0;
        },
        Cn
      )
    );
  }, [a, u]);
  const M = () => {
    a.dispatchCommand(Cf, void 0);
  };
  return /* @__PURE__ */ _e(xn, { children: [
    g && Tn(
      /* @__PURE__ */ C(
        oP,
        {
          editor: a,
          cancelAddComment: P,
          submitAddComment: B
        }
      ),
      document.body
    ),
    d != null && !g && Tn(
      /* @__PURE__ */ C(
        iP,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: M
        }
      ),
      document.body
    ),
    n !== null && Tn(
      /* @__PURE__ */ C(
        nn,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => _(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ C("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && Tn(
      /* @__PURE__ */ C(
        lP,
        {
          comments: l,
          submitAddComment: B,
          deleteCommentOrThread: E,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function dP() {
  const e = te(void 0), t = ye((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function fP(e, t) {
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
function pP(e, t) {
  j(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      fP(r, t);
    };
  }, [t, e]);
}
const nN = qn(function(t, r) {
  const n = te(null), i = te(!0), s = te(null), [o, a] = fe(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: m, view: g } = {} } = t, y = (m ?? !1) || ps(g), [k, _] = dP();
  pP(f, k), j(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(E), p || console.warn(E);
    }
  }, [p]), Ac(r, () => ({
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
    applyUpdate(E, B) {
      n.current?.applyUpdate(E, B);
    },
    replaceEmbedUpdate(E, B) {
      return n.current?.replaceEmbedUpdate(E, B);
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
    setAnnotation(E, B, M, R, $) {
      typeof R == "function" || R === void 0 ? n.current?.setAnnotation(E, B, M, R, $) : n.current?.setAnnotation(E, B, M, R);
    },
    removeAnnotation(E, B) {
      n.current?.removeAnnotation(E, B);
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
    replaceCharacterMarker(E, B) {
      return n.current?.replaceCharacterMarker(E, B) ?? !1;
    },
    extendCharacterMarker(E, B) {
      return n.current?.extendCharacterMarker(E, B) ?? !1;
    },
    insertMarker(E) {
      return n.current?.insertMarker(E);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(E, B) {
      return n.current?.applyMarkerMenuSelection(E, B);
    },
    splitParagraphWithMarker(E) {
      n.current?.splitParagraphWithMarker(E);
    },
    commitTypedMarker(E, B) {
      return n.current?.commitTypedMarker(E, B) ?? !1;
    },
    commitTypedCloser(E) {
      return n.current?.commitTypedCloser(E) ?? !1;
    },
    insertNote(E, B, M) {
      n.current?.insertNote(E, B, M);
    },
    selectNote(E) {
      n.current?.selectNote(E);
    },
    getNoteOps(E) {
      return n.current?.getNoteOps(E);
    },
    setComments(E) {
      k.current?.setComments(E), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const S = ye(
    (E, B, M, R) => {
      if (!u) return;
      const $ = k.current?.getComments();
      u(E, $, B, M, R);
    },
    [k, u]
  ), P = ye(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = k.current?.getComments();
    l(E);
  }, [k, i, l]);
  return j(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ C(gb, { children: /* @__PURE__ */ _e(Jm, { ref: n, onUsjChange: S, ...f, children: [
    /* @__PURE__ */ C(
      uP,
      {
        setCommentStore: _,
        onChange: P,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ C("div", { ref: s, className: "comment-container" })
  ] }) });
});
function kn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function hP(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function gP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const mP = /^[#\w().,%/\s-]+$/;
function xr(e) {
  return e != null;
}
const yP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, bP = {
  left: "right",
  right: "left"
}, kP = "var(--usj-font-fallback, serif)";
function ny(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${hP(i)}"`).join(", ")}, ${kP}`;
}
const Ec = ".editor-input.usfm", TP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function xP(e) {
  return TP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Ec}".`
  ), Ec);
}
function _P(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(ny(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (mP.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), xr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), xr(t.firstLineIndent) && s.push(`text-indent: ${kn(t.firstLineIndent * 20 * r)}vw`), xr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${kn(t.leftMargin * 20 * r)}vw`), xr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${kn(t.rightMargin * 20 * r)}vw`
  ), xr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${kn(t.spaceBefore * r)}pt`), xr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${kn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = yP[n ? bP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const vf = { c: 150, ca: 133, cp: 150 };
function Mf(e, t) {
  return e && xr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function CP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && xr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Mf(e.markers.c, vf.c);
  return ["ca", "cp"].map((i) => {
    const s = Mf(
      e.markers[i],
      vf[i]
    ), o = kn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function iN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Ec } = t, s = xP(i), o = [], a = [];
  e.defaultFont && a.push(ny(e.defaultFont)), xr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${kn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = _P(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${gP(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...CP(e, s)), o.join(`
`);
}
export {
  Vh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  rN as Editorial,
  es as GENERATOR_NOTE_CALLER,
  Xf as HIDDEN_NOTE_CALLER,
  nN as Marginal,
  b as MarkerType,
  Bh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  yl as STANDARD_VIEW_MODE,
  ro as defaultStyleInfo,
  tN as directionToNames,
  q_ as filterAndRankItems,
  iN as generateUsjCss,
  ZP as getDefaultViewMode,
  Lo as getDefaultViewOptions,
  pE as getEnterMenuItems,
  fE as getMarkerMenuItems,
  eN as getViewMode,
  Tl as getViewOptions,
  ps as isBlockVerseLayout,
  Vr as isInsertEmbedOpOfType,
  W_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
