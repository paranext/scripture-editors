import { jsx as C, jsxs as Ce, Fragment as Cn } from "react/jsx-runtime";
import { forwardRef as qn, useState as he, useRef as ie, useCallback as ke, useEffect as z, useMemo as We, memo as Sy, createContext as Nf, useContext as Of, Children as vy, isValidElement as My, cloneElement as Ey, useImperativeHandle as Nc, useLayoutEffect as ks } from "react";
import { assertSafeKey as Xe, isValidBookCode as Ay, MARKER_OBJECT_PROPS as Py, USJ_VERSION as Er, USJ_TYPE as Ar, isUsjTextContentLocation as Ny, indexesFromUsjJsonPath as wf, isUsjAttributeKeyLocation as Oy, isUsjAttributeMarkerLocation as wy, isUsjClosingAttributeMarkerLocation as Ry, isUsjMarkerLocation as qy, isUsjClosingMarkerLocation as $y, isUsjPropertyValueLocation as Ly, getUsjDocumentLocationTypeName as Iy, usjJsonPathFromIndexes as pn, EMPTY_USJ as Rf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ge, $parseSerializedNode as To, DecoratorNode as Ts, ElementNode as nr, isHTMLElement as $n, createState as xo, $getState as ae, $setState as Ct, $isRangeSelection as N, $isElementNode as F, $isTextNode as v, $getSelection as O, $isNodeSelection as yi, ParagraphNode as Oc, TextNode as He, $createTextNode as be, $getCommonAncestor as Dy, $createNodeSelection as wc, $setSelection as dr, $getEditor as Yr, $isLineBreakNode as xs, NODE_STATE_KEY as _s, $hasUpdateTag as Uy, $getNodeByKey as oe, $getRoot as Ve, $createRangeSelection as _o, $createPoint as ku, $getCharacterOffsets as Rc, KEY_DOWN_COMMAND as yr, COMMAND_PRIORITY_HIGH as Ie, HISTORY_MERGE_TAG as qf, CLICK_COMMAND as ci, COMMAND_PRIORITY_LOW as gt, COMMAND_PRIORITY_EDITOR as Sn, createCommand as qc, isDOMNode as Zi, $getNearestNodeFromDOMNode as Pr, CONTROLLED_TEXT_INSERTION_COMMAND as Co, PASTE_COMMAND as fr, COMMAND_PRIORITY_CRITICAL as Ne, CUT_COMMAND as Xr, DROP_COMMAND as So, DELETE_CHARACTER_COMMAND as $f, DELETE_WORD_COMMAND as Fy, DELETE_LINE_COMMAND as Ky, $isDecoratorNode as Cs, COPY_COMMAND as Ss, COMMAND_PRIORITY_NORMAL as ii, SELECTION_CHANGE_COMMAND as gr, getDOMSelection as Lf, isSelectionWithinEditor as zy, $createRangeSelectionFromDom as If, isDOMTextNode as jy, BLUR_COMMAND as $c, $addUpdateTag as Qr, SKIP_DOM_SELECTION_TAG as By, CLEAR_HISTORY_COMMAND as Vy, $getPreviousSelection as Wy, KEY_ESCAPE_COMMAND as Lc, BEFORE_INPUT_COMMAND as Hy, COMPOSITION_START_COMMAND as Gy, DRAGSTART_COMMAND as Df, FOCUS_COMMAND as Uf, $isRootOrShadowRoot as Jy, CAN_UNDO_COMMAND as Yy, CAN_REDO_COMMAND as Xy, getDOMSelectionFromTarget as Qy, $onUpdate as Zy, KEY_ENTER_COMMAND as Ff, LineBreakNode as Kf, $copyNode as eb, $isRootNode as tb, INSERT_PARAGRAPH_COMMAND as Hs, HISTORIC_TAG as Ic, createEditor as rb, UNDO_COMMAND as zf, REDO_COMMAND as jf, CLEAR_EDITOR_COMMAND as nb } from "lexical";
import { addClassNamesToElement as Wn, removeClassNamesFromElement as sa, $findMatchingParent as st, $dfsIterator as Bf, $dfs as bi, mergeRegister as je, registerNestedElementResolver as Vf, $unwrapNode as La, IS_APPLE as es } from "@lexical/utils";
import { useLexicalNodeSelection as ib } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Ut } from "fast-equals";
import Ki from "quill-delta";
import { useLexicalComposerContext as de } from "@lexical/react/LexicalComposerContext";
import { $getLexicalContent as sb, copyToClipboard as ob } from "@lexical/clipboard";
import { TreeView as ab } from "@lexical/react/LexicalTreeView";
import * as cb from "react-dom";
import { createPortal as _n } from "react-dom";
import { LexicalComposer as Wf } from "@lexical/react/LexicalComposer";
import { ContentEditable as Hf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Gf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Jf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Yf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as lb } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as ub, createDOMRange as db, createRectsFromDOMRange as fb } from "@lexical/selection";
import { autoUpdate as pb, computePosition as hb, shift as gb, flip as mb } from "@floating-ui/dom";
import { $generateNodesFromDOM as yb } from "@lexical/html";
import { AutoFocusPlugin as bb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as kb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Xf, LexicalCollaboration as Tb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as xb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as _b } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Cb, $isRootTextContentEmpty as Sb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as vb } from "@lexical/yjs";
import { Array as Tu, Map as xu, YArrayEvent as Mb } from "yjs";
const oa = (e) => Ge(To(e)), Eb = {
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
function Qf(e) {
  return Eb[e];
}
const L = " ", Gs = "​", Wt = L, Dc = `${L}|`, pr = "p", ts = "+", Zf = "-", Js = "chapter", Ia = "verse", _u = "invalid", Ab = "text-spacing", Pb = "formatted-font", Nb = "marker-", ep = "external-usj-mutation", tp = "selection-change", Zr = "cursor-change", Da = "annotation-change", rs = "delta-change", rp = "marker-settle", Ob = [
  ep,
  tp,
  Zr,
  Da,
  rs
], vn = "zmsc-s", si = "zmsc-e", wb = [vn, si], Rb = [
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
  vn,
  si
], np = 1, Uc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], qb = Uc.filter((e) => e !== "sid" && e !== "eid");
class er extends Ts {
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
    return sp().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Rb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: np
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function ip(e) {
  return wb.includes(e);
}
function sp(e, t, r, n, i) {
  return Ge(new er(e, t, r, n, void 0, i));
}
function Ye(e) {
  return e instanceof er;
}
const Fc = "f", $b = [
  // Footnote
  Fc,
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
const Lb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], op = 1;
class we extends nr {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = Fc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (zi(t) === "crossref" ? Zf : ts), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Db(t) ? {
        conversion: Ib,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && ($b.includes(t) || (r?.includes(t) ?? !1));
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
    return r && $n(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", zi(this.getMarker()))), { element: r };
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
      version: op
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
  return { node: Kc(t, r, n) };
}
function Kc(e, t, r, n, i) {
  return Ge(new we(e, t, r, n, i));
}
function Db(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return we.isValidMarker(t) && e.classList.contains(we.getType());
}
function B(e) {
  return e instanceof we;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var b;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(b || (b = {}));
const Ua = {
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
}, hn = {
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
  p: { children: hn },
  q: { children: hn },
  q1: { children: hn },
  q2: { children: hn },
  q3: { children: hn },
  q4: { children: hn },
  b: { children: hn },
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
function hr(e) {
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
const ap = "v", cp = "c", gn = "fig", Su = "tr", Fa = "esb", lp = "esbe", vu = "periph", Mu = "alt", Eu = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Ub = {
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
const Fb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Kb(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Gs && s + 1 < e.length && Pu(e[s + 1]) || (Pu(o) ? (r || (i = t.length, t += o), r = !0) : Fb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
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
function jb(e, t) {
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
const Bb = /^(?:qt[1-5]?|ts)-[se]$/;
function zc(e) {
  return Bb.test(e) || ip(e);
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
function Vb(e, t, r) {
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
      a(Kb(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: u } = jb(e, i + 1);
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
    if (l === ap) {
      const { word: g, next: y } = aa(e, i);
      i = y, n.push({ kind: "verse", number: g });
      continue;
    }
    if (l === cp) {
      const { word: g, next: y } = aa(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: g });
      continue;
    }
    const f = l.startsWith("+"), p = f ? l.slice(1) : l, m = t(p)?.type;
    if (m === b.Note || m === void 0 && we.isValidMarker(l)) {
      const { word: g, next: y } = aa(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: g || "+" });
      continue;
    }
    if (m === b.Milestone || m === void 0 && zc(l)) {
      const g = Zb(e, c, l, i);
      if (g)
        n.push(g.token), g.ejectedText && o(g.ejectedText), i = g.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    m === b.Paragraph ? (d(), n.push({ kind: "para", marker: l })) : m === b.Character ? (d(), n.push({ kind: "charOpen", marker: p, isNested: f })) : Ys(p) ? (d(), Ys(p)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f })) : (d(), !(r || s !== void 0) || l === Fa || l === lp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: p, isNested: f }));
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
function Ys(e) {
  return Object.hasOwn(Nu, e) ? Nu[e] : void 0;
}
function Wb(e) {
  return Ys(e) !== void 0;
}
const Hb = /([-\w]+)\s*=\s*"(.*?)"/g, Gb = /[\s\u200B]*[\n\r][\s\u200B]*/g, up = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function vo(e) {
  return up[e];
}
const Jb = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function Yb(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function ns(e, t, r = up[t]) {
  const n = e.replace(Gb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Hb)];
  if (s.length > 0) {
    if (!Yb(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      Jb.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Mo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Xb(e) {
  const t = Lr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function Qb(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = ns(e.slice(n + 1, i), r, Mo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Zb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = ns(s.slice(o + 1), r, Mo(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = Qb(e, i + 2, r);
  return l ? {
    token: {
      kind: "milestone",
      marker: r,
      attributes: { ...a, ...l.attributes }
    },
    next: l.next
  } : { token: { kind: "milestone", marker: r, attributes: a }, next: i + 2 };
}
function lr(e) {
  return e.replaceAll(`
`, " ").replaceAll("~", L);
}
function jr(e) {
  return e.content || (e.content = []), e.content;
}
function Lr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, u, d;
  const f = () => u ? jr(u) : d ? jr(d) : r;
  let p = !1;
  const m = () => {
    if (s)
      return o.length > a ? jr(o[o.length - 1].object) : jr(s);
    if (o.length > 0)
      return jr(o[o.length - 1].object);
    if (!i) {
      if (p && !n)
        return f();
      i = { type: "para", marker: pr, content: [] }, f().push(i);
    }
    return jr(i);
  }, g = (X) => {
    const P = m();
    typeof X == "string" && typeof P[P.length - 1] == "string" ? P[P.length - 1] = P[P.length - 1] + X : P.push(X);
  }, y = (X) => {
    for (let P = X; P < o.length; P += 1) {
      const Y = o[P].object;
      Y.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, _ = (X) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, X || (s.closed = "false"), s = void 0);
  }, S = () => {
    c = void 0, l = void 0;
  }, A = (X, P, Y) => {
    k();
    const [, pe, Ae, ee] = Y, Me = {
      type: "table:cell",
      marker: ee ? P.slice(0, P.indexOf("-")) : P,
      align: Ub[pe],
      content: []
    };
    ee && (Me.colspan = String(Number(ee) + 1 - Number(Ae))), jr(X).push(Me), i = Me;
  }, E = (X) => {
    u && (X || (u.closed = "false"), u = void 0);
  }, j = () => {
    d = void 0;
  };
  let M, q = "", $;
  const re = () => {
    q && g(lr(q)), q = "";
  }, W = (X = !1) => {
    M?.type === "sidebar" ? q = "" : X && q.endsWith(`
`) && (q = q.slice(0, -1)), M = void 0, re();
  }, xe = () => {
    if (!$)
      return;
    const X = { type: "char", marker: $.marker, content: [] };
    $.value && (X.content = [lr($.value)]), m().push(X), o.push({ object: X }), $ = void 0;
  }, ne = (X, P) => {
    p = !1, S(), k(), _(!1), i = { type: "para", marker: X, content: [] }, P && (i.content = [lr(P)]), f().push(i);
  }, Ee = () => {
    $ && (ne($.marker, $.value), $ = void 0);
  };
  let D;
  const G = (X) => {
    if (!D)
      return;
    let { value: P } = D;
    D = void 0, X && P.endsWith(`
`) && (P = P.slice(0, -1));
    const Y = P.indexOf("|"), pe = Y >= 0 ? ns(P.slice(Y + 1), vu) : void 0, Ae = Y >= 0 ? P.slice(0, Y) : P, ee = Y >= 0 && (!pe || !!Ae && !!pe[Mu]), Me = ee ? void 0 : pe, _r = ee ? P : Ae, Dt = {
      type: "periph",
      ..._r ? { [Mu]: lr(_r) } : {},
      ...Me
    };
    Dt.content = [], f().push(Dt), d = Dt, i = void 0;
  };
  let J;
  const qe = () => {
    if (J) {
      if (J.shape === "para")
        ne(gn, J.value);
      else {
        const X = { type: "char", marker: gn, content: [] };
        J.value && (X.content = [lr(J.value)]), m().push(X), o.push({ object: X });
      }
      J = void 0;
    }
  }, et = Vb(e, t?.getMarker ?? hr, n);
  for (let X = 0; X < et.length; X++) {
    const P = et[X];
    if ($) {
      if (P.kind === "text") {
        $.value += P.text;
        continue;
      }
      if ($.shape === "char" && P.kind === "end" && P.marker.replace(/^\+/, "") === $.marker) {
        if ($.value.trim() === "") {
          m().push({ type: "char", marker: $.marker, content: [] }), $ = void 0, W();
          continue;
        }
        Object.assign($.target, {
          [$.attrName]: lr($.value.trim())
        });
        const Y = $.marker;
        if ($ = void 0, Y === "ca") {
          const pe = et[X + 1];
          pe?.kind === "text" && /^[\s\u200B]*$/.test(pe.text) && X++;
        }
        continue;
      }
      if ($.shape === "para" && (P.kind === "para" || P.kind === "chapter")) {
        const Y = $.value.replace(/[\s\u200B]+$/, "");
        Y === "" ? (ne($.marker), $ = void 0) : (Object.assign($.target, { [$.attrName]: lr(Y) }), $ = void 0);
      } else {
        M = void 0, (P.kind === "para" || P.kind === "chapter") && $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), $.shape === "para" ? Ee() : xe(), X--;
        continue;
      }
    }
    if (D) {
      if (P.kind === "text" || P.kind === "optbreak") {
        D.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      G(P.kind === "para" || P.kind === "chapter"), X--;
      continue;
    }
    if (J) {
      if (P.kind === "text" || P.kind === "optbreak") {
        J.value += P.kind === "text" ? P.text : "//";
        continue;
      }
      if (P.kind === "end" && P.marker.replace(/^\+/, "") === gn) {
        const Y = J.value.indexOf("|"), pe = Y >= 0 ? ns(J.value.slice(Y + 1), gn) : void 0;
        if (pe) {
          const Ae = {};
          for (const [_r, Dt] of Object.entries(pe))
            Ae[_r === "src" ? "file" : _r] = Dt;
          const ee = {
            type: "figure",
            marker: gn,
            ...Ae
          }, Me = J.value.slice(0, Y);
          Me && (ee.content = [lr(Me)]), g(ee), J = void 0;
          continue;
        }
      }
      qe(), X--;
      continue;
    }
    if (M)
      if (P.kind === "text") {
        if (P.text.includes(`
`) && /^[\s\u200B]*$/.test(P.text)) {
          q += P.text;
          continue;
        }
        W();
      } else if (P.kind === "charOpen" || P.kind === "para") {
        const Y = P.kind === "para" || !P.isNested ? Ys(P.marker) : void 0;
        if (Y && Y.targetTypes.includes(M.type)) {
          q = "", $ = {
            target: M,
            attrName: Y.attrName,
            marker: P.marker,
            shape: Y.shape,
            value: ""
          };
          continue;
        }
        W(P.kind === "para");
      } else
        W(P.kind === "chapter");
    if (!s && !n && (P.kind === "charOpen" && !P.isNested && P.marker === gn || P.kind === "para" && P.marker === gn)) {
      k(), J = { shape: P.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (P.kind) {
      case "text": {
        let Y = P.text;
        if (!s && Y.endsWith(`
`)) {
          const pe = et[X + 1];
          (pe === void 0 || pe.kind === "para" || pe.kind === "chapter") && (Y = Y.slice(0, -1));
        }
        Y && g(lr(Y));
        break;
      }
      case "para": {
        const Y = !s && !n;
        if (Y && P.marker === Su) {
          k(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Su, content: [] }, jr(c).push(l), i = l, p = !1;
          break;
        }
        if (Y && l) {
          const pe = Eu.exec(P.marker);
          if (pe && Au(pe)) {
            A(l, P.marker, pe);
            break;
          }
        }
        if (S(), !n && P.marker === Fa) {
          k(), _(!1), E(!1);
          const pe = {
            type: "sidebar",
            marker: Fa,
            content: []
          };
          f().push(pe), u = pe, i = void 0, M = u, p = !1;
          break;
        }
        if (P.marker === lp && u) {
          k(), _(!1), E(!0), i = void 0;
          break;
        }
        if (!n && P.marker === vu) {
          k(), _(!1), E(!1), j(), D = { value: "" }, i = void 0, p = !1;
          break;
        }
        ne(P.marker);
        break;
      }
      case "verse": {
        _(!1);
        const Y = { type: "verse", marker: ap, number: P.number };
        g(Y), M = Y;
        break;
      }
      case "chapter": {
        k(), _(!1), S(), E(!1), j(), i = void 0;
        const Y = {
          type: "chapter",
          marker: cp,
          number: P.number
        };
        r.push(Y), M = Y, p = !0;
        break;
      }
      case "note": {
        _(!1);
        const Y = m();
        s = { type: "note", marker: P.marker, caller: P.caller, content: [] }, a = o.length, Y.push(s), M = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !P.isNested) {
          const Ae = Eu.exec(P.marker);
          if (Ae && Au(Ae)) {
            A(l, P.marker, Ae);
            break;
          }
        }
        if (!P.isNested) {
          const Ae = s ? a : 0;
          y(Ae), o.length = Ae;
        }
        const Y = m(), pe = { type: "char", marker: P.marker, content: [] };
        Y.push(pe), o.push({ object: pe });
        break;
      }
      case "end": {
        const Y = P.marker.replace(/^\+/, ""), pe = s ? a : 0, Ae = o.findLastIndex((ee, Me) => Me >= pe && ee.object.marker === Y);
        Ae >= 0 ? (ek(o[Ae].object), y(Ae + 1), o.length = Ae) : s && s.marker === Y ? _(!0) : (y(pe), o.length = pe, g({ type: "unmatched", marker: `${P.marker}*` }));
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
  if (D && G(!0), J && qe(), $)
    if ($.shape === "para") {
      const X = $.value.replace(/[\s\u200B]+$/, "");
      X === "" ? ne($.marker) : Object.assign($.target, { [$.attrName]: lr(X) }), $ = void 0;
    } else
      $.value.endsWith(`
`) && ($.value = $.value.slice(0, -1)), xe();
  k(), _(!1), E(!1);
  const It = (X) => {
    for (const P of X)
      typeof P != "string" && P.content && (It(P.content), P.content.length === 0 && delete P.content);
  };
  return It(r), r;
}
function ek(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = ns(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const Mn = xo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), en = xo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ue = xo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), br = "marker-trailing-space", dp = 1, tk = "marker", jc = xo("isGutterMarker", {
  parse: (e) => e === !0
});
class Ir extends Ts {
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
    return new Ir(r, n, i);
  }
  static importDOM() {
    return {
      span: (t) => nk(t) ? {
        conversion: rk,
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
    return r && $n(r) && r.setAttribute("data-text-type", this.getTextType()), { element: r };
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
      version: dp
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
function rk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Nr(t, r) };
}
function Nr(e, t) {
  return Ge(new Ir(e, t));
}
function fp(e) {
  return Ct(Nr(tk, e), jc, !0);
}
function kr(e) {
  return tr(e) && ae(e, jc);
}
function nk(e) {
  return e?.tagName === "span";
}
function tr(e) {
  return e instanceof Ir;
}
function pp(e) {
  return e?.type === Ir.getType();
}
const Jr = "internal-comment", ik = [Jr], hp = Object.freeze({}), Ka = Object.freeze({}), za = Object.freeze({}), ja = Object.freeze({}), Ba = Object.freeze({}), sk = 1, Hn = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map();
class it extends nr {
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
    super(o), this.__typedIDs = Is(t), this.__typedOnClicks = ca(r), this.__typedOnRemoves = la(n), this.__typedOnMouseEnters = ua(i), this.__typedOnMouseLeaves = da(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Is(t.__typedIDs), n = ca(t.__typedOnClicks), i = la(t.__typedOnRemoves), s = ua(t.__typedOnMouseEnters), o = da(t.__typedOnMouseLeaves);
    return new it(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return ik.includes(t);
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
      version: sk
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Wn(n, mn(t.theme.typedMark, a)), c.length > 1 && Wn(n, mn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Wn(n, mn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, u = mn(n.theme.typedMark, s), d = mn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Wn(r, u) : l === 0 && sa(r, u), c === 1 ? l === 2 && Wn(r, d) : l === 1 && sa(r, d));
      const f = new Set(o), p = new Set(a);
      for (const m of o)
        p.has(m) || sa(r, mn("annotationId", m));
      for (const m of a)
        f.has(m) || Wn(r, mn("annotationId", m));
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
    return ve(t) ? t.__typedIDs : {};
  }
  setTypedIDs(t) {
    const r = this.getWritable(), n = Is(r.__typedIDs);
    r.__typedIDs = Is(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Xs(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = ca(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return ve(t) ? Hn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = la(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return ve(t) ? Ri.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = ua(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return ve(t) ? Gn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = da(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return ve(t) ? Jn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!ve(a))
      return;
    Xe(t), Xe(r);
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
    if (!ve(n))
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Ka) {
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
    Xe(t), Xe(r);
    const i = this.ensureOnClickMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnClicksToRegistry();
  }
  removeOnClickFor(t, r) {
    if (!this.__typedOnClicks)
      return;
    const n = this.__typedOnClicks[t];
    if (!n)
      return;
    const i = Br(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Br(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === Ka) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === za) {
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
    Xe(t), Xe(r);
    const i = this.ensureOnRemoveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnRemovesToRegistry();
  }
  removeOnRemoveFor(t, r) {
    if (!this.__typedOnRemoves)
      return;
    const n = this.__typedOnRemoves[t];
    if (!n)
      return;
    const i = Br(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Br(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === za) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === ja) {
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
    Xe(t), Xe(r);
    const i = this.ensureOnMouseEnterMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseEntersToRegistry();
  }
  removeOnMouseEnterFor(t, r) {
    if (!this.__typedOnMouseEnters)
      return;
    const n = this.__typedOnMouseEnters[t];
    if (!n)
      return;
    const i = Br(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Br(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === ja) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ba) {
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
    Xe(t), Xe(r);
    const i = this.ensureOnMouseLeaveMapMutable(), s = i[t] ?? (i[t] = {});
    s[r] = n, this.syncTypedOnMouseLeavesToRegistry();
  }
  removeOnMouseLeaveFor(t, r) {
    if (!this.__typedOnMouseLeaves)
      return;
    const n = this.__typedOnMouseLeaves[t];
    if (!n)
      return;
    const i = Br(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Br(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === Ba) {
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
    const i = ok(t, r);
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
    for (; ve(t) && wu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; ve(r) && wu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = ak(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = ck(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = lk(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = uk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Is(e = hp) {
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    if (Xe(r), !Array.isArray(n)) {
      t[r] = [];
      continue;
    }
    const i = [];
    for (const s of n)
      Xe(s), i.push(s);
    t[r] = i;
  }
  return t;
}
function ca(e) {
  if (!e || e === Ka)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Xe(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Xe(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function la(e) {
  if (!e || e === za)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Xe(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Xe(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function ua(e) {
  if (!e || e === ja)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Xe(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Xe(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function da(e) {
  if (!e || e === Ba)
    return;
  const t = {};
  for (const [r, n] of Object.entries(e)) {
    Xe(r);
    const i = {};
    for (const [s, o] of Object.entries(n))
      Xe(s), i[s] = o;
    Object.keys(i).length > 0 && (t[r] = i);
  }
  return Object.keys(t).length > 0 ? t : void 0;
}
function Br(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Ou(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function ok(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function wu(e, t) {
  const r = Ou(e), n = Ou(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function mn(e, t) {
  return `${e}-${t}`;
}
function Ru(e) {
  return `external-${e}`;
}
function is(e, t, r, n, i) {
  return Ge(new it(e, t, r, n, i));
}
function ve(e) {
  return e instanceof it;
}
function gp(e) {
  return e?.type === it.getType();
}
function Xs(e) {
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
    const k = a[y];
    if (F(g) && g.isParentOf(k))
      continue;
    const _ = y === 0, S = y === u - 1;
    let A = null;
    if (v(k)) {
      const E = k.getTextContentSize(), j = _ ? f : 0, M = S ? p : E;
      if (j === 0 && M === 0)
        continue;
      const q = k.splitText(j, M);
      A = q.length > 1 && (q.length === 3 || _ && !S || M === E) ? q[1] : q[0];
    } else {
      if (ve(k))
        continue;
      F(k) && k.isInline() && (A = k);
    }
    if (A !== null) {
      if (A && A.is(m))
        continue;
      const E = A.getParent();
      (E == null || !E.is(m)) && (g = void 0), m = E, g === void 0 && (g = is(), g.addID(t, r, n, i, s, o), A.insertBefore(g)), g.append(A);
    } else
      m = void 0, g = void 0;
  }
  t === Jr && F(g) && (d ? g.selectStart() : g.selectEnd());
}
function dk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (ve(n))
      return n.getTypedIDs()[t];
    if (v(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (ve(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const fk = ["type", "marker", "content"], Va = "unknown", yp = 1, pk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
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
      [Va]: (t) => gk(t) ? {
        conversion: hk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Bc().updateFromJSON(t);
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
    return pk.has(this.getTag());
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
    const r = t ?? O();
    if (!r)
      return !1;
    if (yi(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function hk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Bc(t, r) };
}
function Bc(e, t, r) {
  return Ge(new Ln(e, t, r));
}
function gk(e) {
  return e?.tagName.toLowerCase() === Va;
}
function Ue(e) {
  return e instanceof Ln;
}
const bp = 1, mk = "attribute-run";
function fa(e) {
  return e === "va" || e === "vp" || e === "ca" || e === "cp" ? `usfm_${e}` : void 0;
}
class Dr extends nr {
  __runKind;
  constructor(t, r) {
    super(r), this.__runKind = t;
  }
  static getType() {
    return "attribute-run";
  }
  static clone(t) {
    const { __runKind: r, __key: n } = t;
    return new Dr(r, n);
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
    t.classList.add(mk);
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
  return Ge(new Dr(e));
}
function ze(e) {
  return e instanceof Dr;
}
const ss = "id", Tp = 1, yk = [
  "type",
  "marker",
  "code",
  "content"
];
class Ht extends nr {
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
    return new Ht(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return xp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return Ay(t);
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
  return Ge(new Ht(e, t));
}
function bt(e) {
  return e instanceof Ht;
}
function _p(e) {
  return e?.type === Ht.getType();
}
const Qs = "c", Cp = 1, bk = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class Lt extends nr {
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
    return new Lt(r, n, i, s, o, a);
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
      version: Cp
    };
  }
}
function Sp(e, t, r, n, i) {
  return Ge(new Lt(e, t, r, n, i));
}
function Le(e) {
  return e instanceof Lt;
}
function kk(e) {
  return e?.type === Lt.getType();
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
], Tk = [
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
], Ep = 1, xk = ["type", "marker", "content"];
class Te extends nr {
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
    return new Te(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Tk.includes(t) || (r?.includes(t) ?? !1));
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
    return Te.isValidFootnoteMarker(t) || Te.isValidCrossReferenceMarker(t);
  }
  static importDOM() {
    return {
      span: (t) => Ck(t) ? {
        conversion: _k,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Or().updateFromJSON(t);
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
    return qu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), qu(r, this.__marker, n)), !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && $n(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = this.getUnknownAttributes()?.closed === "false", i = Or(this.getMarker(), n ? { closed: "false" } : void 0);
    return i.setDirection(this.getDirection()), i.setFormat(this.getFormatType()), i.setStyle(this.getTextStyle()), this.insertAfter(i, r), i;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
}
function qu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function _k(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Or(t) };
}
function Or(e, t) {
  return Ge(new Te(e, t));
}
function Ck(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Te.isValidMarker(t) && e.classList.contains(Te.getType());
}
function U(e) {
  return e instanceof Te;
}
function Sk(e) {
  return e?.type === Te.getType();
}
const Ap = 1, vk = "c", Pp = "span";
class Tr extends Ts {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = vk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Np(t) ? {
        conversion: Mk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Vc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Js, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && $n(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Js, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
    return this.getShowMarker() ? Vt(this.getMarker(), this.getNumber()) : this.getNumber();
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
function Mk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Vc(t) };
}
function Vc(e, t, r, n, i, s) {
  return Ge(new Tr(e, t, r, n, i, s));
}
function Np(e) {
  return e ? e.classList.contains(Js) && e.tagName.toLowerCase() === Pp : !1;
}
function vs(e) {
  return e instanceof Tr;
}
function Ek(e) {
  return e?.type === Tr.getType();
}
const Op = 1;
class tn extends Oc {
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
    return pr;
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
    const n = Qt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Qt() {
  return Ge(new tn());
}
function mr(e) {
  return e instanceof tn;
}
function Eo(e) {
  return e?.type === tn.getType();
}
const Ak = [
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
  pr,
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
], wp = 1, Pk = ["type", "marker", "content"];
class ot extends Oc {
  __marker;
  __unknownAttributes;
  constructor(t = pr, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return "para";
  }
  static clone(t) {
    const { __marker: r, __unknownAttributes: n, __key: i } = t;
    return new ot(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Ak.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Nk,
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
    return r && $n(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`)), { element: r };
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
    const n = os(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Nk(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = os(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function os(e, t) {
  return Ge(new ot(e, t));
}
function le(e) {
  return e instanceof ot;
}
function Wc(e) {
  return e?.type === ot.getType();
}
const Zs = "v", Rp = 1, Ok = [
  "type",
  "marker",
  "number",
  "sid",
  "altnumber",
  "pubnumber",
  "content"
];
class mt extends He {
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
    return new mt(r, n, i, s, o, a, c);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Ia, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Rp
    };
  }
}
function qp(e, t, r, n, i, s) {
  return Ge(new mt(e, t, r, n, i, s));
}
function De(e) {
  return e instanceof mt;
}
function $p(e) {
  return e?.type === mt.getType();
}
const wk = "​", li = wk;
var $u;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})($u || ($u = {}));
var Lu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Lu || (Lu = {}));
function Rk() {
  return be(li);
}
function qk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(li, ""));
}
function Ms(e) {
  return e.length > 0 && e.includes(li) && e.replaceAll(li, "") === "";
}
function Hc(e) {
  return v(e) && Ms(e.getTextContent());
}
function Lp(e) {
  return kk(e) || Ek(e);
}
function Qe(e) {
  return Le(e) || vs(e);
}
function Ip(e, t) {
  return e.find((r) => Qe(r) && r.getNumber() === t.toString());
}
function $k(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Qe(r));
}
function Iu(e) {
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
  if (Qe(e))
    return e;
  let t = e.getTopLevelElement()?.getPreviousSibling();
  for (; t && !Qe(t); )
    t = t.getPreviousSibling();
  if (t && Qe(t))
    return t;
}
function rr(e) {
  return st(e, B) ?? void 0;
}
function Lk(e) {
  return bt(e) || Le(e) || U(e) || vs(e) || mr(e) || Ye(e) || le(e) || B(e) || De(e) || Ue(e);
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
function Ik(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Ot(e) {
  return me(e) || bt(e);
}
function me(e) {
  return le(e) || mr(e);
}
function Dk(e) {
  return Wc(e) || Eo(e);
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
function En(e, t) {
  const r = ae(t, Mn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Uk(e, t) {
  const r = F(e) ? e : e.getParent(), n = F(t) ? t : t.getParent(), i = r && n ? Dy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Fk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function ui(e) {
  return e?.type === He.getType();
}
function Kk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function zk(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Oe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function lt(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Fp(e, t, r) {
  const n = Oe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Vt(e, t) {
  let r = Oe(e);
  return t && (r += `${L}${t}`), r += " ", r;
}
function jk(e) {
  const t = e[_s];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Kp(e) {
  return Xc(e) || pp(e) && e.textType === "marker" || ui(e) && jk(e) === "attribute" ? "" : ui(e) && e.text !== L ? e.text : Sk(e) ? e.children.map((t) => Kp(t)).join("") : "";
}
function Bk(e) {
  return e.map((r) => Kp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function wt(e) {
  return " " + e + L;
}
function Gc(e) {
  const t = [];
  for (const r of e) {
    if (!U(r))
      continue;
    const n = zp(r);
    n !== Wt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function zp(e) {
  return w(e) || Ur(e) || v(e) && ae(e, ue) === "attribute" ? "" : v(e) ? e.getTextContent() : F(e) ? e.getChildren().map((t) => zp(t)).join("") : "";
}
function Ur(e) {
  return tr(e) && e.getTextType() === "marker";
}
function Rt(e) {
  return w(e) || Ur(e);
}
function kn(e) {
  if (!yi(e))
    return;
  const t = e.getNodes();
  if (t.length !== 1)
    return;
  const [r] = t, n = jp(r.getParent());
  return n?.is(r) ? n : void 0;
}
function rn(e) {
  const t = kn(e)?.getParent();
  return le(t) ? t : void 0;
}
function jp(e) {
  if (!le(e))
    return;
  const t = e.getFirstChild();
  if (kr(t))
    return st(e, Ue) ? void 0 : t;
}
const ti = /* @__PURE__ */ new WeakMap();
function Vk(e) {
  return ti.set(e, (ti.get(e) ?? 0) + 1), () => {
    const t = (ti.get(e) ?? 1) - 1;
    t > 0 ? ti.set(e, t) : ti.delete(e);
  };
}
function Wk() {
  const e = Yr();
  return e.isEditable() && (ti.get(e) ?? 0) > 0;
}
function Hk(e) {
  if (!jp(e.getParent())?.is(e) || !Wk())
    return !1;
  const t = wc();
  return t.add(e.getKey()), dr(t), !0;
}
function Du(e, t) {
  Gk(e, t), e.setMarker(t);
}
function Gk(e, t) {
  const r = e.getMarker(), n = Oe(r), i = Oe(r, !0), s = lt(r), o = lt(r, !0), a = Te.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Rt(c))
      return;
    const l = c.getTextContent(), u = l === n || l === i, d = !u && (l === s || l === o);
    if (!(!u && !d)) {
      if (d && a) {
        c.remove();
        return;
      }
      if (w(c))
        c.setMarker(t);
      else if (Ur(c)) {
        const f = l.startsWith(Oe("", !0));
        c.setTextContent(u ? Oe(t, f) : lt(t, f));
      }
    }
  });
}
function Be(e, t = Py) {
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
function Vp(e) {
  if (!N(e))
    return Uu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !F(t) || e.anchor.type === "text" && !v(t)))
    return t ?? void 0;
  try {
    return Uu(e) ?? t ?? void 0;
  } catch (n) {
    if (Bp(n))
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
function Jc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Wp(e) {
  return !!e && e.includes("-");
}
function Hp(e) {
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
function Yc(e) {
  if (!e)
    return !1;
  if (xs(e) || w(e) || Ur(e) || ze(e) || tr(e) && e.getTextType() === "attribute")
    return !0;
  if (v(e)) {
    const t = ae(e, ue);
    if (t === br || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === L || Ms(r))
      return !0;
  }
  return !1;
}
function Ao() {
  const e = be(L);
  return Ct(e, ue, br), e.setMode("token"), e;
}
function Yk(e) {
  const t = e.getTextContent();
  t.startsWith(L) || e.setTextContent(L + t);
}
function In(e) {
  return v(e) && ae(e, ue) === br;
}
function Gp(e) {
  const t = e.getFirstChild();
  if (!Rt(t) || t === null || In(t.getNextSibling()))
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
function ki(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Yc(s)) {
      if (ve(s)) {
        s.getChildren().forEach(i);
        return;
      }
      if (v(s) && s.getType() === He.getType()) {
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
  for (; t && ve(t); )
    t = t.getParent();
  return t;
}
function Xk(e, t) {
  return ki(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Qk(e, t) {
  const r = Po(e);
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
function Jp(e, t) {
  const r = ki(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Yc(n))
    return Jp(e, t + 1);
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
class xr extends He {
  __marker;
  __markerSyntax;
  __nested;
  // `key` stays in Lexical's own third-parameter slot (`TextNode(text, key)`), with `nested`
  // appended after it: a node's key is the last argument every Lexical node constructor takes, and
  // slotting a new field ahead of it would silently reinterpret an existing 3-argument call's
  // `NodeKey` as this flag.
  constructor(t = "", r = "opening", n, i = !1) {
    super(Tn(t, r, i), n), this.__marker = t, this.__markerSyntax = r, this.__nested = i;
  }
  static getType() {
    return "marker";
  }
  static clone(t) {
    return new xr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      text: t.text || Tn(r, n, i)
    }).getWritable();
    return o.__marker = r, o.__markerSyntax = n, o.__nested = i, o;
  }
  setMarker(t) {
    if (this.__marker === t)
      return this;
    const r = this.getWritable();
    return r.__marker = t, r.__text = Tn(t, r.__markerSyntax, r.__nested), r;
  }
  getMarker() {
    return this.getLatest().__marker;
  }
  setMarkerSyntax(t) {
    if (this.__markerSyntax === t)
      return this;
    const r = this.getWritable();
    return r.__markerSyntax = t, r.__text = Tn(r.__marker, t, r.__nested), r;
  }
  getMarkerSyntax() {
    return this.getLatest().__markerSyntax;
  }
  setNested(t) {
    if (this.__nested === t)
      return this;
    const r = this.getWritable();
    return r.__nested = t, r.__text = Tn(r.__marker, r.__markerSyntax, t), r;
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
function ft(e, t, r) {
  return Ge(new xr(e, t, void 0, r));
}
function w(e) {
  return e instanceof xr;
}
function Xc(e) {
  return e?.type === xr.getType();
}
function an(e) {
  return e.getTextContent() === Tn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function nT(e) {
  e.setTextContent(Tn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function Tn(e, t, r = !1) {
  return t === "closing" ? lt(e, r) : t === "selfClosing" ? lt("") : Oe(e, r);
}
const iT = /* @__PURE__ */ new Set(["closed"]);
function ur(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !iT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Yp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Xp(e) {
  const t = Object.keys(e).filter((n) => !qb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Qp(e, t, r, n) {
  return Yp(
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
  return e.getChildren().find((t) => w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function sT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Wi(e) === void 0 && Zp(e) === void 0;
}
function Zp(e) {
  return e.getChildren().find((t) => v(t) && ae(t, ue) === "attribute");
}
function as(e, t) {
  return Es(e.getNextSibling(), t);
}
const oT = /^[ \u00A0]+$/;
function Qc(e) {
  if (an(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Oe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && oT.test(r.slice(t.length));
}
function Es(e, t) {
  let r, n, i, s;
  return ze(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), w(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Qc(e) && (r = e, e = e.getNextSibling()), v(e) && ae(e, ue) === "attribute" && (n = e, e = e.getNextSibling()), w(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && an(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function cs(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!w(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (v(n) && n.getTextContent() === wt(e.getCaller()))
    return n;
}
function eh(e) {
  const t = cs(e);
  return t ? Es(t.getNextSibling(), "cat") : {};
}
function No(e) {
  const t = e.getFirstChild();
  if (!(!v(t) || w(t)) && ae(t, ue) !== "attribute")
    return t;
}
function th(e) {
  const t = No(e);
  return t ? Es(t.getNextSibling(), "ca") : {};
}
function rh(e) {
  const t = No(e);
  if (!t)
    return;
  const r = Es(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function nh(e) {
  const t = rh(e);
  return t ? Es(t.getNextSibling(), "cp") : {};
}
function ih(e) {
  const t = e.getParent();
  if (!U(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (De(n))
        return n;
      if (!(w(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || v(n) && ae(n, ue) === "attribute" || U(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || ze(n)))
        return;
    }
}
function Oo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return ze(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), w(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Qc(s) && (t = s, s = s.getNextSibling()), v(s) && ae(s, ue) === "attribute" && (r = s, s = s.getNextSibling()), w(s) && s.getMarkerSyntax() === "selfClosing" && an(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Zc(e) {
  return U(Po(e));
}
function Wa(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Zc(t) : t.getChildren().some((i) => U(i) && i.getMarker() === r) ? !0 : void 0;
}
function aT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = Wa(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function wo(e) {
  return v(e) && e.getType() === He.getType() && ae(e, ue) !== "attribute";
}
function el(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Wa(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return w(r) ? Wa(r, t) === !0 ? "spacer" : void 0 : wo(r) ? r.getTextContent().startsWith(L) ? void 0 : "prefix" : "spacer";
}
function cT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (w(t) && el(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function sh(e, t) {
  const r = O();
  if (!N(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function oh(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = el(t, e);
    if (r !== void 0 && !sh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        v(n) && n.setTextContent(L + n.getTextContent());
      } else
        t.insertAfter(be(L));
  });
}
function ah(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && el(t, e) !== void 0 && sh(t, e)) : !1;
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
function ch(e, t) {
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
function lh(e, t, r) {
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
        opening: `\\${ch(t, n[dT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ur(yT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [fT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + ur(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [pT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: ur(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: ur(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const vt = { wantsRun: !1, valueText: void 0 }, Fr = {};
function pa(e, t) {
  if (t === "va")
    return e;
  const r = as(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function tl(e) {
  const t = O();
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
function Ro(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = O();
  if (!N(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function bT(e) {
  return ze(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : w(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : v(e) && ae(e, ue) === "attribute";
}
function kT(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!v(e) || ae(e, ue) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function ha(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (De(t))
      return t;
    if (!bT(t))
      return;
  }
}
function Fu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => De(t),
    ownerOf: (t) => {
      if (ze(t))
        return t.getRunKind() === e ? ha(t) : void 0;
      const r = t.getParent();
      return ze(r) ? r.getRunKind() === e ? ha(r) : void 0 : kT(t) === e ? ha(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!De(t))
        return vt;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? vt : { wantsRun: !0, valueText: L + r };
    },
    scanPieces: (t) => De(t) ? as(pa(t, e), e) : Fr,
    graceSite: (t, r) => De(t) ? !r.opener && !r.closer ? tl(pa(t, e)) : Ro(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => De(t) ? pa(t, e) : void 0
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
  expectedPieces: () => vt,
  scanPieces: () => Fr,
  graceSite: (e) => U(e) && ah(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, xT = {
  kind: "char",
  ownerPredicate: (e) => U(e),
  ownerOf: (e) => {
    if (!v(e) || ae(e, ue) !== "attribute")
      return;
    const t = e.getParent();
    return U(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!U(e) || Wi(e) === void 0)
      return vt;
    const t = ur(e.getUnknownAttributes() ?? {}, vo(e.getMarker()));
    return t === "" ? vt : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => U(e) ? { value: Zp(e) } : Fr,
  graceSite: (e, t) => {
    if (!U(e) || t.value)
      return !1;
    const r = Wi(e);
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
    insertRunBefore: (e) => U(e) ? Wi(e) : void 0
  }
};
function uh(e) {
  if (w(e))
    return e.getMarker() === "cat";
  if (!v(e) || ae(e, ue) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return w(t) && t.getMarker() === "cat";
}
function _T(e) {
  const t = e.getParent();
  if (!B(t))
    return;
  const r = cs(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!uh(n))
        return;
    }
}
const CT = {
  kind: "cat",
  ownerPredicate: (e) => B(e),
  ownerOf: (e) => {
    if (ze(e))
      return e.getRunKind() === "cat" && B(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return ze(t) ? t.getRunKind() === "cat" && B(t.getParent()) ? t.getParent() ?? void 0 : void 0 : uh(e) ? _T(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!B(e) || e.getIsCollapsed() !== !1)
      return vt;
    const t = e.getCategory();
    return t === void 0 ? vt : { wantsRun: !0, valueText: L + t };
  },
  scanPieces: (e) => B(e) ? eh(e) : Fr,
  graceSite: (e, t) => {
    if (!B(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = cs(e);
      return r !== void 0 && tl(r);
    }
    return Ro(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => B(e) ? cs(e) : void 0
  }
};
function ST(e) {
  return ze(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : w(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : v(e) && ae(e, ue) === "attribute";
}
function vT(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!v(e) || ae(e, ue) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function MT(e) {
  const t = e.getParent();
  if (!Le(t))
    return;
  const r = No(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!ST(n))
        return;
    }
}
function Ku(e) {
  const t = (r) => Le(r) ? e === "ca" ? No(r) : rh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Le(r),
    ownerOf: (r) => {
      if (ze(r))
        return r.getRunKind() === e && Le(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return ze(n) ? n.getRunKind() === e && Le(n.getParent()) ? n.getParent() ?? void 0 : void 0 : vT(r) === e ? MT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Le(r))
        return vt;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? vt : { wantsRun: !0, valueText: L + n };
    },
    scanPieces: (r) => Le(r) ? e === "ca" ? th(r) : nh(r) : Fr,
    graceSite: (r, n) => {
      if (!Le(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && tl(i);
      }
      return Ro(n);
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
function dh(e) {
  if (w(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return v(e) && ae(e, ue) === "attribute";
}
function ET(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ye(t)) {
      const r = w(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!dh(t))
      return;
  }
}
const AT = {
  kind: "milestone",
  ownerPredicate: (e) => Ye(e),
  ownerOf: (e) => {
    const t = ze(e) ? e.getRunKind() === "milestone" ? e : void 0 : ze(e.getParent()) ? e.getParent() : dh(e) ? e : void 0;
    if (!t || ze(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return ze(t) ? Ye(r) ? r : void 0 : ET(t);
  },
  expectedPieces: (e) => {
    if (!Ye(e))
      return vt;
    const t = Qp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = ur(t, Mo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : L + r };
  },
  scanPieces: (e) => {
    if (!Ye(e))
      return Fr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Oo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!Ye(e))
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
    return Ro(t);
  },
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: {
    writer: "wrapper",
    runKind: "milestone",
    glyphs: "unconditional",
    glyphMarker: (e) => Ye(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, PT = lh("optbreak", void 0, void 0).opening, NT = {
  kind: "optbreak",
  ownerPredicate: (e) => Ue(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ue(t) || t.getTag() !== "optbreak"))
      return v(e) || tr(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: PT }),
  scanPieces: (e) => Ue(e) ? { value: e.getFirstChild() ?? void 0 } : Fr,
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
  expectedPieces: () => vt,
  scanPieces: () => Fr,
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
  expectedPieces: () => vt,
  scanPieces: () => Fr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, ls = [
  TT,
  xT,
  Fu("va"),
  Fu("vp"),
  CT,
  Ku("ca"),
  Ku("cp"),
  AT,
  NT,
  OT,
  wT
], RT = new Map(ls.map((e) => [e.kind, e]));
function An(e) {
  const t = RT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Pn(e) {
  for (const t of ls) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function fh(e) {
  return Pn(e) !== void 0;
}
const to = "unmatched", ph = 2;
function Hi(e) {
  return `\\${e}`;
}
class Kr extends He {
  __marker;
  constructor(t = "", r) {
    super(Hi(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Kr(r, n);
  }
  static importDOM() {
    return {
      [to]: (t) => $T(t) ? {
        conversion: qT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return rl().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(_u), r.title = zu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = zu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(to);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(_u), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: ph
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function hh(e) {
  return e.getTextContent() === Hi(e.getMarker());
}
function zu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function qT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: rl(t) };
}
function rl(e) {
  return Ge(new Kr(e));
}
function $T(e) {
  return e?.tagName.toLowerCase() === to;
}
function cn(e) {
  return e instanceof Kr;
}
const gh = "table", Ha = "immutable-table", mh = 1, LT = ["type", "marker", "content"];
class Dn extends nr {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Ha;
  }
  static clone(t) {
    return new Dn(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return IT().updateFromJSON(t);
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
      version: mh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function IT(e) {
  return Ge(new Dn(e));
}
function yh(e) {
  return e instanceof Dn;
}
function DT(e) {
  return e?.type === Ha;
}
const bh = "table:row", ju = "immutable-table-row", kh = 1, Ga = "tr", UT = ["type", "marker", "content"];
class Ti extends nr {
  __marker;
  __unknownAttributes;
  constructor(t = Ga, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return ju;
  }
  static clone(t) {
    return new Ti(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return FT().updateFromJSON(t);
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
      type: ju,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: kh
    };
  }
}
function FT(e, t) {
  return Ge(new Ti(e, t));
}
const Th = "table:cell", Bu = "immutable-table-cell", xh = 1, Ja = "tc1", KT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function zT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class xi extends nr {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Ja, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Bu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new xi(r, n, i, s, o);
  }
  static importJSON(t) {
    return jT().updateFromJSON(t);
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
    const n = zT(this.__align);
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
      version: xh
    };
  }
}
function jT(e, t, r, n) {
  return Ge(new xi(e, t, r, n));
}
function qo(e, t) {
  const r = e.getChildAtIndex(t);
  return v(r) ? r : void 0;
}
function qt(e, t) {
  const r = qo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function us(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function BT(e) {
  return e.getChildren().some((t) => w(t) && t.getMarkerSyntax() === "closing");
}
function VT(e) {
  return us(e) ? void 0 : { closed: "false" };
}
function WT(e, t, r, n) {
  const i = t.getMarker(), s = Zc(t), o = BT(t);
  if (n) {
    e.append(ft(i, "opening", s));
    const [a] = r;
    wo(a) && !a.getTextContent().startsWith(L) && a.setTextContent(L + a.getTextContent());
  }
  e.append(...r), o && e.append(ft(i, "closing", s));
}
function Nn(e) {
  return st(e, U) ?? void 0;
}
function nl(e) {
  let t = e.getParent();
  for (; U(t); )
    t = t.getParent();
  return t;
}
function Ya(e) {
  const t = _h(e);
  return e.getChildren().every((r) => w(r) || t && ae(r, ue) === "attribute" || v(r) && r.getTextContent().replaceAll(L, "") === "");
}
function _h(e) {
  return us(e);
}
function HT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? ur(r, vo(e.getMarker())) : "";
  n !== "" && t.insertAfter(be(n)), e.remove();
}
function GT(e, t) {
  if (us(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(ft(e.getMarker(), "closing", Zc(e)));
}
function JT(e, t) {
  return U(e) && !us(e) && !us(t);
}
function YT(e, t, r) {
  Ya(e) && e.getChildren().forEach((i) => {
    w(i) || i.remove();
  });
  const [n] = t;
  r && wo(n) && !n.getTextContent().startsWith(L) && n.setTextContent(L + n.getTextContent()), e.append(...t);
}
function XT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = _h(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const u = l.getNextSibling(), d = w(l) && l.getMarkerSyntax() === "closing", f = s && ae(l, ue) === "attribute";
    !d && !f && o.push(l), l = u;
  }
  const a = JT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      YT(e, o, n);
    else {
      const l = Or(t.getMarker(), VT(t));
      WT(l, t, o, n), e.insertAfter(l), Ya(l) ? l.remove() : c = l;
    }
  i && !a && GT(t, n), Ya(t) && HT(t, c);
}
function di(e, t) {
  let r = e.getParent();
  for (; U(r); )
    XT(e, r, t), r = e.getParent();
}
function il(e) {
  if (v(e) && !w(e)) {
    const t = e.getTextContent().startsWith(L) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (F(e)) {
    const t = e.getChildren().find((r) => !w(r));
    if (t) {
      il(t);
      return;
    }
    e.selectEnd();
  }
}
const oi = /* @__PURE__ */ new WeakMap();
function QT(e, t) {
  return oi.set(e, t), () => {
    oi.get(e) === t && oi.delete(e);
  };
}
function Vu(e) {
  return oi.get(e);
}
function ZT(e) {
  return oi.get(Yr())?.has(e.getKey()) ?? !1;
}
function ex(e) {
  oi.get(Yr())?.add(e.getKey());
}
function tx(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Xa(e) {
  return !!(e.opener || e.value || e.closer);
}
function Wu(e) {
  return /^\s/.test(e);
}
function sl(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Wu(t) || !Wu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function $o(e, t, r) {
  return r.wantsRun ? sl(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : tx(t);
}
function rx(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return sl(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Ch(e, t) {
  return !Xa(e.scanPieces(t));
}
function As(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!$o(e, n, r))
    return !1;
  const i = O();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || eo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function nx(e, t, r, n) {
  return !r.wantsRun || Xa(n) || Uy(rs) ? !1 : Yr().getEditorState().read(() => {
    const i = oe(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Xa(e.scanPieces(i));
  });
}
function ix(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Hu(e) {
  const t = be(e);
  return Ct(t, ue, "attribute"), t;
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
    v(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Hu(n.valueText));
    return;
  }
  const l = sx(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const u = r.opener ?? (() => {
    const f = ft(o(t), "opening"), p = l.getFirstChild();
    return p ? p.insertBefore(f) : l.append(f), f;
  })();
  let d = r.value;
  n.valueText === void 0 ? (d?.remove(), d = void 0) : v(d) ? sl(d.getTextContent(), n.valueText) && d.setTextContent(n.valueText) : (d = Hu(n.valueText), u.insertAfter(d)), a !== "none" && !r.closer && (d ?? u).insertAfter(ft(a === "selfClosing" ? "" : o(t), a));
}
function ds(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if ($o(e, i, n) && !ZT(t)) {
    if (nx(e, t, n, i)) {
      ex(t);
      return;
    }
    if (!As(e, t)) {
      if (!n.wantsRun) {
        ix(i);
        return;
      }
      ox(e, t, i, n);
    }
  }
}
function ax(e, t, r) {
  ds(e, t), t.isAttached() && As(e, t) && r.add(t.getKey());
}
function Sh(e) {
  if (!v(e))
    return !1;
  if (w(e) || De(e) || cn(e))
    return !0;
  const t = ae(e, ue);
  return t === "attribute" || t === br;
}
function ol(e, t) {
  return w(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && an(e) && U(e.getParent())) : !1;
}
function cx() {
  const e = O();
  return N(e) ? ol(e.focus.getNode(), e.focus.offset) : !1;
}
function vh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return v(t) && Sh(t) ? t : void 0;
}
function lx(e) {
  const t = vh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function ux(e) {
  const t = vh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Gu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Ju(e, t) {
  e.set(t.key, t.offset, t.type);
}
function dx(e, t) {
  let r = ux(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!v(n))
      return;
    if (!Sh(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Yu(e, t) {
  const r = dx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Mh(e) {
  if (e.isCollapsed()) {
    const a = lx(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Gu(r), Gu(n)], s = Yu(r, "next"), o = Yu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Ju(r, i[0]), Ju(n, i[1]), !1) : !0;
}
const ro = "verse-block", Eh = 1, fx = "verse-block";
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
    return Hp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(fx), Xu(t, this.__number), t;
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
      type: ro,
      number: this.getNumber(),
      version: Eh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Xu(e, t) {
  const { start: r, end: n } = Hp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Qu(e, "data-verse-start", i ? r : NaN), Qu(e, "data-verse-end", i ? n : NaN);
}
function Qu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function px(e) {
  return Ge(new _i(e));
}
function fs(e) {
  return e instanceof _i;
}
function hx(e) {
  return e?.type === ro;
}
const gx = [
  Ht,
  Tr,
  Lt,
  mt,
  Te,
  we,
  er,
  xr,
  Ln,
  Ir,
  Kr,
  ot,
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
  Dr,
  {
    replace: Oc,
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
}, mx = {
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function yx(e) {
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
      category: hr(r)?.category ?? T.Uncategorized,
      type: mx[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: hr(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Zu(e, t, r) {
  const n = {
    type: Ar,
    version: Er,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Eo(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Ah = "v", Ph = 1, bx = "verse-selected";
class Et extends Ts {
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
    return new Et(r, n, i, s, o, a, c);
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
    return al().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ia, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && $n(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ia, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Vt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Gs + this.getNumber() + Gs
    );
    return C(kx, { nodeKey: this.getKey(), text: t });
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
function kx({ nodeKey: e, text: t }) {
  const [r] = ib(e);
  return C("span", { className: r ? bx : void 0, children: t });
}
function Tx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: al(t) };
}
function al(e, t, r, n, i, s) {
  return Ge(new Et(e, t, r, n, i, s));
}
function xx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Ah;
}
function Un(e) {
  return e instanceof Et;
}
function _x(e) {
  return e?.type === Et.getType();
}
function ye(e) {
  return De(e) || Un(e);
}
function Nh(e) {
  return $p(e) || _x(e);
}
function Cx(e) {
  return Sx(e).find((t) => le(t));
}
function Sx(e) {
  return e.some(fs) ? e.flatMap((t) => fs(t) ? t.getChildren() : t) : e;
}
function Lo(e) {
  return F(e) ? fs(e) ? e.getChildren().flatMap(Lo) : e.getChildren() : [];
}
function vx(e, t) {
  return Lo(e).find((i) => ye(i) && Jc(t, i.getNumber()));
}
function Mx(e, t) {
  return t === 0 ? Cx(e) : e.map((r) => vx(r, t)).filter((r) => r)[0];
}
function io(e) {
  return Lo(e).find((r) => ye(r));
}
function Oh(e, t) {
  if (!F(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ye(i))
      return i;
  }
}
function Ex(e) {
  const t = e.getParent();
  if (t && F(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ye(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Qe(r); ) {
    const n = io(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Qa(e) {
  return Lo(e).findLast((t) => ye(t));
}
function Ax(e) {
  if (!De(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
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
  if (v(e)) {
    const n = Ax(e);
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
function Ox(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!N(t))
    return ed(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return Nx(e, t) ? { verseNum: n } : ed(e);
}
function wx(e) {
  return Lk(e) || Un(e);
}
function cl(e) {
  if (v(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(L) && e.setTextContent(`${t} `);
  }
}
function wh(e) {
  if (v(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Za(e, t) {
  return e.getEditorState().read(() => !oe(t));
}
function Rx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ll(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && F(i) && F(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && F(i)) {
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
      let s = td(i);
      for (; s && !Qe(s); ) {
        const o = io(s);
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
      const o = io(s);
      if (o) {
        n = o;
        break;
      }
      if (s = s.getNextSibling(), s && Qe(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function qx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = ll(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && F(i) && (n = Oh(i, r.getIndexWithinParent())), !n && i) {
      let o = rd(i);
      for (; o && !Qe(o); ) {
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
    for (; s && !Qe(s); ) {
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
function ll(e, t) {
  if (F(e) && N(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ye(n))
      return n;
    const i = Oh(e, t.anchor.offset);
    if (i)
      return i;
    const s = io(e);
    if (s)
      return s;
  }
  return ul(e);
}
function ul(e) {
  if (!e || Qe(e))
    return;
  if (ye(e))
    return e;
  let t = Iu(e);
  for (; t; ) {
    if (Qe(t))
      return;
    if (ye(t))
      return t;
    const r = Qa(t);
    if (r)
      return r;
    t = Iu(t);
  }
}
const $x = ["style"], Lx = ["style", "code"], so = ["style", "cid"], Ix = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Dx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Ux = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], Fx = ["style", "caller", "category", "contents"], Kx = ["tag", "marker", "contents"], zx = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], ps = `
`;
function jx(e, t) {
  const r = oe(e);
  if (!$t(r))
    return;
  const n = Rh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Rh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Bf();
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
      if (wr(l) || $t(l))
        return n;
      Ot(l) && (a = l);
    }
    if (Ot(l) && (i.includes(l) || i.push(l)), qh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += dl(l, t);
  }
  if (a)
    return n;
}
function nd(e, t, r = "delta-doc") {
  if (e.length < 2 || !Wx(e[0]) || !Vx(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Bx(n, r)?.getKey());
}
function Bx(e, t = "delta-doc") {
  const r = Bf();
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
    if (Ot(a) && (i.includes(a) || i.push(a)), qh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = dl(a, t);
    if (wr(a) && l > 0 && e >= n && e < n + l || $t(a) && n === e)
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
function wr(e) {
  return v(e) && !$t(e);
}
function $t(e) {
  return Qe(e) || ye(e) || Ye(e) || B(e) || Ue(e) || cn(e);
}
function Hr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Vx(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && zx.includes(t);
}
function Wx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function qh(e, t) {
  return B(e) || Ue(e) ? !0 : t === "apply" && F(e) && $t(e);
}
function $h(e) {
  const t = e.getParent();
  return Rt(e) && le(t) && t.getFirstChild() === e;
}
function ec(e) {
  const t = e.getParent();
  return t !== null && st(t, ze) !== null;
}
function Hx(e) {
  const t = e.getParent();
  return U(t) && e.getTextContent() === Wt && t.getChildrenSize() === 1;
}
function Gx(e) {
  const t = e.getParent();
  if (!B(t))
    return !1;
  const r = e.getPreviousSibling();
  return w(r) && r === t.getFirstChild() && e.getTextContent() === wt(t.getCaller());
}
function Jx(e) {
  return !fh(e) && dl(e, "delta-doc") === e.getTextContentSize();
}
function dl(e, t) {
  if ($t(e))
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
    (Hc(e) || $h(e) || ae(e, ue) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ae(e, ue) === "attribute" || ec(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Dc) || Hx(e) || Gx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function tc(e, t) {
  const r = { insert: e.__text }, n = ae(e, en);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Lh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function id(e) {
  const t = new Ki();
  return e.isEmpty() || e.read(() => {
    const r = Ve();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && mr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Yx();
    for (const s of i)
      t.push(s);
  }), t;
}
function fl(e, t) {
  const r = [], n = bi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...sd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...sd(c, n.length, n, i, s, o, a));
  return r;
}
function Yx() {
  return fl();
}
function sd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Xx(e, a, n), Qx(e, a, i, s, o), Zx(e, t, r, i, o, s, a), Qe(e) && a.push(n_(e)), ye(e) && a.push(s_(e)), Ye(e) && a.push(o_(e)), cn(e) && a.push(a_(e)), t_(e, a, s), e_(e, a, s), d_(c, s), a;
}
function Xx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    bt(n) ? t.push(r_(n)) : le(n) ? t.push(i_(n)) : mr(n) && t.push({ insert: ps });
  }
  Ot(e) && (r.includes(e) || r.push(e));
}
function Qx(e, t, r, n, i) {
  if (!v(e) || De(e) || cn(e))
    return;
  const s = e.getParent();
  if (B(s) && s.getFirstChild() === e)
    return;
  const o = rr(e) !== void 0;
  if (w(e) && (o || $h(e) || ec(e) || fh(e)) || ae(e, ue) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (Ms(a))
    return;
  const c = e.getPreviousSibling();
  if (B(s) && w(c) && c === s.getFirstChild() && a === wt(s.getCaller()))
    return;
  const l = U(s) ? s : void 0, u = l?.getFirstChild();
  o && l && w(u) && c === u && a.startsWith(L) && (a = a.slice(1));
  const d = a.startsWith(Dc) || ae(e, ue) === "attribute" || ec(e), f = !!l && a === Wt && l.getChildrenSize() === 1, p = Io(e, n), m = p ? r.filter((k) => p.children.includes(k)) : r, g = tc(e, m);
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
function Zx(e, t, r, n, i, s, o) {
  U(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (fi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = l_(c), u = Io(c, s);
        u ? u.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function e_(e, t, r) {
  if (!B(e))
    return;
  const n = c_(e), i = Io(e, r), s = {
    node: e,
    children: bi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function t_(e, t, r) {
  if (!Ue(e))
    return;
  const n = u_(e), i = Io(e, r), s = {
    node: e,
    children: bi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function ln(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function r_(e) {
  const t = { style: ss, code: e.__code };
  return ln(t, e), { insert: ps, attributes: { book: t } };
}
function n_(e) {
  const t = { style: Qs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), ln(t, e), { insert: { chapter: t } };
}
function i_(e) {
  const t = { style: e.__marker };
  return ln(t, e), { insert: ps, attributes: { para: t } };
}
function s_(e) {
  const t = { style: Zs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), ln(t, e), { insert: { verse: t } };
}
function o_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), ln(t, e), { insert: { milestone: t } };
}
function a_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function c_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), ln(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ae(e, en);
  return n && (r.attributes = { segment: n }), r;
}
function l_(e) {
  const t = { insert: "" }, r = Lh([e]);
  return r && (t.attributes = { char: r }), t;
}
function u_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), ln(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Io(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function d_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    fi(t[r].node, e) && t.splice(r, 1);
}
function Lh(e) {
  if (e.length === 0)
    return;
  const t = e.map(f_);
  return t.length === 1 ? t[0] : t;
}
function f_(e) {
  const t = { style: e.__marker }, r = ae(e, Mn);
  return r && (t.cid = r), ln(t, e), t;
}
const Ih = 1;
class Zt extends Ts {
  __caller;
  __previewText;
  __onClick;
  constructor(t = ts, r = "", n, i) {
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
      span: (t) => h_(t) ? {
        conversion: p_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return pl().updateFromJSON(t);
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
    return r && $n(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => g_(t, n), (l) => m_(t, n, s, l), () => y_(t, n), () => b_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return C("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === ts && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === Zf && i ? (
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
      version: Ih
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function p_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: pl(t, r) };
}
function pl(e, t, r) {
  return Ge(new Zt(e, t, r));
}
function h_(e) {
  return e ? e.classList.contains(Zt.getType()) : !1;
}
function At(e) {
  return e instanceof Zt;
}
function g_(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!B(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function m_(e, t, r, n) {
  e.update(() => {
    const i = oe(t);
    if (!B(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = oe(r);
    if (!At(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function y_(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!B(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return fl(r);
  });
}
function b_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of bi())
      if (B(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
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
], T_ = ["†"];
function Do(e) {
  if (Dh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = od(t), [s, o] = od(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = ad(n, i), [s, o] = ad(s, o);
  const a = _o();
  return a.anchor = ku(n.getKey(), i, cd(n)), a.focus = ku(s.getKey(), o, cd(s)), a;
}
function hl() {
  if (Dh())
    return;
  const e = O();
  if (!e || !N(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = oo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = oo(i, s);
  return { start: n, end: o };
}
function od(e) {
  if (Ny(e)) {
    const t = wf(e.jsonPath);
    let r = Ve();
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
  if (Oy(e) || wy(e)) {
    const t = qi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (F(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && F(r) ? [r, 0] : [void 0, void 0];
  }
  if (Ry(e)) {
    const t = qi(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (F(t)) {
      const n = t.getLastChild();
      if (n && v(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && F(r) ? [r, 0] : [void 0, void 0];
  }
  if (qy(e)) {
    const t = qi(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = ga(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && v(n) ? [n, 0] : [void 0, void 0];
  }
  if ($y(e)) {
    const t = qi(e.jsonPath);
    if (!t || !F(t))
      return [void 0, void 0];
    const r = ga(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && v(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Ly(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = qi(e.jsonPath);
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
    return i && v(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Iy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function ad(e, t) {
  if (!Ur(e))
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
    if (w(n) && n.getMarkerSyntax() === t || t === "closing" && w(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Ur(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function qi(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = wf(r);
  let i = Ve();
  for (const s of n) {
    if (!i || !F(i))
      return;
    const o = ki(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function oo(e, t) {
  if (w(e)) {
    const r = e.getMarkerSyntax(), n = x_(e), i = n ? pn(yn(n)) : pn(yn(e));
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
  if (ve(e)) {
    const r = e.getChildrenSize(), n = e.getChildAtIndex(Math.min(t, r - 1));
    if (v(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return oo(n, s);
    }
    const i = Po(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return oo(i, o);
    }
  }
  if (F(e)) {
    const r = e.getChildAtIndex(t);
    if (Ur(r)) {
      const i = r.getTextContent().endsWith("*"), s = pn(yn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Jp(e, t);
    return n.type === "text" ? {
      jsonPath: pn([...yn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: pn(yn(e)),
      offset: n.index
    };
  }
  if (v(e)) {
    const r = Qk(e, t);
    if (r)
      return {
        jsonPath: pn([
          ...yn(r.parent),
          r.index
        ]),
        offset: r.offset
      };
  }
  return { jsonPath: pn(yn(e)), offset: t };
}
function x_(e) {
  const t = e.getParent();
  if (!t || !F(t))
    return;
  const r = __(e);
  return r && !Ot(r) && !v(r) && !ve(r) ? r : t;
}
function __(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Yc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function yn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Po(r);
    if (!n)
      break;
    const i = Xk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Dh() {
  for (let e = Ve().getFirstChild(); e; e = e.getNextSibling())
    if (fs(e))
      return !0;
  return !1;
}
function Uh(e, t, r, n, i, s, o) {
  if (!we.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Do(r) : O();
  if (!N(a))
    return;
  const c = v_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (zi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), u = Fh(e, l, c, i, s, void 0, void 0);
  return S_(u, a, i), u;
}
function gl(e) {
  return e !== "expanded";
}
function C_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!v(r) || !U(r.getParent()))
    return;
  if (w(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return w(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function S_(e, t, r) {
  const n = gl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Fk(t), Mh(t);
  const i = C_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(U)?.selectEnd();
}
function Yn(e, t, r) {
  const n = Or(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(ft(e)) : r?.markerMode === "visible" && n.append(Nr("marker", Oe(e)));
  const s = t === "" ? Wt : i ? L + t : t;
  return n.append(be(s)), n;
}
function v_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, u = i.chapterVerseSeparator ?? ":", d = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${u}${(l ?? `${c}`).replace(/-/g, () => d)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Yn("fr", f, n)), !e.isCollapsed()) {
        const p = ud(e);
        p.length > 0 && o.push(Yn("fq", p, n));
      }
      o.push(Yn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Yn("xo", f, n)), !e.isCollapsed()) {
        const p = ud(e);
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
  const a = o === "false", c = a ? !1 : gl(n?.noteMode), l = Kc(e, t, c);
  s && Ct(l, en, () => s);
  const u = n?.isNoteShellEditable === !1;
  let d, f;
  n?.markerMode === "editable" ? (d = ft(e), u && d.setMode("token"), a || (f = ft(e, "closing"))) : n?.markerMode === "visible" && (d = Nr("marker", Oe(e) + " "), a || (f = Nr("marker", lt(e))));
  let p;
  if (d && l.append(d), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (p = be(wt(l.__caller)), u && p.setMode("token"), l.append(p, ...r));
  else {
    const m = () => Ao(), g = r.flatMap(E_(m));
    if (t === "")
      l.append(...g);
    else {
      const y = Gc(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), p = pl(l.__caller, y, k), l.append(p, m(), ...g);
    }
  }
  return f && l.append(f), l;
}
function ld(e) {
  if (typeof e == "string") {
    const i = oe(e);
    return B(i) ? i : void 0;
  }
  const t = bi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => B(i.node))[e]?.node;
  if (B(n))
    return n;
}
function M_(e, t) {
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
function E_(e) {
  return (t) => tr(t) ? [t] : [t, e()];
}
function A_(e) {
  const t = e.getParent();
  return t !== null && st(t, B) !== null;
}
function ud(e) {
  if (!N(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Rc(e);
  let a = "";
  for (const c of t)
    if (!(B(c) || At(c) || A_(c)) && !w(c) && !cn(c) && ae(c, ue) !== "attribute") {
      if (ye(c)) {
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
const ml = [
  Zt,
  Et,
  ...gx
], P_ = [
  _i,
  ...ml
], N_ = qn((e, t) => {
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
function O_() {
  const [e, t] = he(void 0), [r, n] = he(), i = ie(null), s = ke((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = pb(l, c, () => {
      hb(l, c, {
        placement: "bottom-start",
        middleware: [gb(), mb()]
      }).then((u) => {
        n(u.placement), t((d) => d?.x === u.x && d?.y === u.y ? d : { x: u.x, y: u.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = ke(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return z(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function w_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = O_();
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
const R_ = Sy(N_);
function Kh({ isOpen: e = !1, children: t }) {
  const r = ie(null), { coords: n, placement: i } = w_({ isOpen: e, floatingBoxRef: r }), s = We(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return _n(
    C(R_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const zh = Nf(void 0);
function yl() {
  const e = Of(zh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function q_(e, t) {
  const [r, n] = he(0), [i, s] = he(-1), o = We(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ke(() => {
    n((d) => {
      const f = o.length;
      return f ? (d - 1 + f) % f : 0;
    });
  }, [o.length]), l = ke(() => {
    n((d) => {
      const f = o.length;
      return f ? (d + 1) % f : 0;
    });
  }, [o.length]), u = ke(() => {
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
function $_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = q_(t, r);
  return C(zh.Provider, { value: i, children: C("div", { ...n, children: e }) });
}
const jh = qn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = yl(), u = ke((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), d = ke((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return C("button", { ref: s, role: "menuitem", ...i, onClick: u, onMouseEnter: d, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function L_({ children: e, autoIndex: t = !0, ...r }) {
  const n = ie(null), { state: { activeIndex: i, menuItems: s } } = yl(), o = We(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = We(() => {
    const c = o(s);
    return t ? vy.map(c, (l, u) => My(l) && l.type === jh && l.props.index === void 0 ? Ey(l, { index: u }) : l) : c;
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
const I_ = (e, t, r) => js(e, r).toLowerCase().includes(t.toLowerCase()), dd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", js = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function D_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let u, d;
  i ? (d = i, u = r.length > 0 ? dd(r[0]) : "") : (u = n || (r.length > 0 ? dd(r[0]) : ""), d = (m, g) => I_(m, g, u));
  const f = s || u, p = /* @__PURE__ */ new Map();
  return r.filter((m) => {
    try {
      return d(m, t);
    } catch (g) {
      return console.warn("Error filtering item:", m, g), !1;
    }
  }).sort((m, g) => {
    const y = (S) => (p.has(S) || p.set(S, js(S, f).toLowerCase()), p.get(S) ?? ""), k = a ? js(m, f) : y(m), _ = a ? js(g, f) : y(g);
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
          const A = k.indexOf(l), E = _.indexOf(l);
          if (A !== -1 && E === -1)
            return -1;
          if (E !== -1 && A === -1)
            return 1;
          if (A !== -1 && E !== -1)
            return A - E;
          break;
        }
      }
    return k.localeCompare(_);
  });
}
const ma = {
  Root: $_,
  Options: L_,
  Option: jh
};
function U_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return We(() => D_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function F_() {
  const { moveUp: e, moveDown: t, select: r } = yl();
  return We(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const K_ = () => {
  const e = F_(), [t] = de();
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
    return t.registerCommand(yr, r, Ie);
  }, [t, e]);
};
function z_() {
  return K_(), null;
}
const j_ = ["Shift", "Control", "Alt", "Meta"];
function Bh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = de(), u = s !== void 0, [d, f] = he(""), p = u ? s ?? "" : d, m = U_({ query: p, items: t, filterBy: "name" }), g = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return z(() => {
    a?.(p, m);
  }, [a, p, m]), z(() => l.registerCommand(yr, (y) => {
    if (u || c?.includes(y.key) || j_.includes(y.key))
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
  }, Ie), [l, u, p, o, n, c]), Ce(ma.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: m, onSelectOption: (y) => g(y), children: [!u && C("input", { value: p, type: "text", disabled: !0 }), C(z_, {}), C(ma.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((_, S) => Ce(ma.Option, { index: S, children: [C("span", { className: "label", children: _.label ?? _.name }), C("span", { className: "description", children: _.description })] }, _.name)) })] });
}
function B_({ trigger: e, items: t }) {
  const [r] = de(), [n, i] = he(!1), s = ke((o) => {
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
  }), [r]), t && C(Kh, { isOpen: n, children: ({ placement: o }) => C(Bh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function V_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
  return { markersMenuItems: We(() => {
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
function W_(e, t) {
  z(() => {
    if (!e.hasNodes([it]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return je(Vf(e, it, (n) => is(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, u] of Object.entries(n.getTypedIDs()))
        u.forEach((d) => {
          const f = s[l]?.[d], p = o[l]?.[d], m = a[l]?.[d], g = c[l]?.[d];
          i.addID(l, d, f, p, m, g);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(it, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = oe(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : ve(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!it.isReservedType(c))
              for (const u of l) {
                let d = t.get(Gi(c, u));
                a[c] = l, r.set(i, a), s === "destroyed" ? d !== void 0 && (d.delete(i), d.size === 0 && t.delete(Gi(c, u))) : (d === void 0 && (d = /* @__PURE__ */ new Set(), t.set(Gi(c, u), d)), d.has(i) || d.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const H_ = qn(function({ logger: t }, r) {
  const [n] = de(), i = We(() => /* @__PURE__ */ new Map(), []);
  W_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Gi(o, a)) ?? []);
    if (l.length !== 0)
      for (const u of l) {
        const d = oe(u);
        ve(d) && (d.deleteID(o, a), d.hasNoIDsForEveryType() && Xs(d));
      }
  };
  return Nc(r, () => ({
    setAnnotation(o, a, c, l, u, d, f) {
      if (it.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const p = Do(o);
        if (p === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), mp(p, a, c, l, u, d, f);
      }, { tag: Da });
    },
    removeAnnotation(o, a) {
      if (it.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Gi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Da });
    }
  })), null;
}), G_ = [];
function J_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = G_, onChange: n }) {
  const [i] = de();
  return ks(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: u } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && u.has(qf) && !u.has(rp) || r.some((f) => u.has(f)) || l.isEmpty())
          return;
        const d = Y_(i, s);
        d.length !== 0 && n(o, i, u, d);
      });
  }, [i, e, t, r, n]), null;
}
function Y_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ki();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = oe(i), o = s !== null && rr(s) !== void 0;
    if (t.size === 1 && v(s) && !o && Jx(s)) {
      const a = Rh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const d = oe(i);
          return new Ki([v(d) ? tc(d) : { insert: "" }]);
        }), l = new Ki([tc(s)]), u = new Ki(a > 0 ? [{ retain: a }] : []);
        n = n.concat(u).concat(c.diff(l));
      }
    } else {
      const a = id(r), c = id(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const bl = "formatted", Vh = "unformatted", Wh = "paragraph-structure", kl = "standard", Hh = "block-verse", X_ = {
  [bl]: "Formatted",
  [Vh]: "Unformatted",
  [Wh]: "Paragraph Structure",
  [kl]: "Standard",
  [Hh]: "Block Verse"
};
function Ci(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Tl, xl;
function Q_(e) {
  const t = _l(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Tl = e, xl = t;
}
Q_(bl);
const aN = () => Tl, Uo = () => xl;
function _l(e) {
  let t;
  switch (e ?? Tl) {
    case bl:
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
    case kl:
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
function cN(e) {
  if (!e)
    return;
  const t = fd(e);
  return Object.keys(X_).find((r) => Ut(fd(_l(r)), t));
}
const Z_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function fd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...Z_, ...t };
}
function Fo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function eC(e) {
  if (e)
    return hs(e) ? Et : e.markerMode === "editable" ? mt : Et;
}
function hs(e) {
  return e?.verseLayout === "block";
}
function tC(e) {
  const t = [], r = e ?? xl;
  return r && (t.push(`${Nb}${r.markerMode}`), r.hasSpacing && t.push(Ab), r.isFormattedFont && t.push(Pb)), t;
}
function rC(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += nC(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), sC(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += oC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), cC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function nC(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), iC(t, e.retain, e.attributes, r, n)), e.retain);
}
function iC(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ve();
  function l(u) {
    if (s <= 0)
      return !0;
    if (wr(u)) {
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
          if (nn(r)) {
            const _ = g.getParent();
            if (U(_)) {
              const S = r.char;
              let A;
              Array.isArray(S) ? a >= 0 && a <= S.length - 1 && (A = S[a]) : a === 0 && (A = S);
              const E = A ? En(A, _) : !1;
              if (E && Array.isArray(S) && S.length > 1) {
                const j = be("");
                g.replace(j);
                const M = typeof r.segment == "string" ? r.segment : void 0, q = Si(S.slice(1), n, g, M);
                let $ = j;
                for (const re of q)
                  $.insertAfter(re), $ = re;
                j.remove(), Ft(r, g);
              } else if (E)
                Ft(r, g);
              else {
                g.remove();
                const j = pd(g, r, n, i);
                if (j && j.length > 0) {
                  let M = _;
                  for (const q of j)
                    M.insertAfter(q), M = q;
                }
              }
            } else {
              const S = be("");
              g.replace(S);
              const A = pd(g, r, n, i);
              if (A && A.length > 0) {
                let E = S;
                for (const j of A)
                  E.insertAfter(j), E = j;
                S.remove();
              } else
                S.replace(g);
            }
          } else
            Ft(r, g);
          s -= m;
        }
      }
      o += d;
    } else if ($t(u))
      e <= o && o < e + t && s > 0 && (hd(u, r), s -= 1), o += 1;
    else if (U(u)) {
      a += 1;
      let d = !1;
      if (e <= o && o < e + t && s > 0)
        if (nn(r)) {
          const f = r.char;
          let p;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (p = f[a]) : a === 0 && (p = f), p) {
            rc(u, p.style), typeof p.cid == "string" && Ct(u, Mn, () => p.cid);
            const m = Be(p, so);
            m && Object.keys(m).length > 0 ? u.setUnknownAttributes({
              ...u.getUnknownAttributes() ?? {},
              ...m
            }) : u.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || yC(r.char)) && (d = !0);
      if (s > 0) {
        const f = u.getChildren();
        for (const p of f) {
          if (s <= 0)
            break;
          if (l(p) && s <= 0)
            return d && La(u), !0;
        }
      }
      d && La(u), a -= 1;
    } else if (Ot(u)) {
      const d = u.getChildren();
      for (const p of d) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!mr(u))
          hd(u, r);
        else if (Cl(r)) {
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
function pd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Si(t.char, r, e, i), o = s.find(U);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Ft(t, e);
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Ft(t, e), s;
}
function Gh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  w(r) ? (r.setMarker(t), r.setTextContent(Oe(t))) : tr(r) && r.getTextType() === "marker" && r.setTextContent(Oe(t) + L);
}
function rc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    w(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = U(e.getParent()), i = e.getFirstChild();
  tr(i) && i.getTextType() === "marker" && i.getTextContent() === Oe(r, n) && i.setTextContent(Oe(t, n));
  const s = e.getLastChild();
  tr(s) && s.getTextType() === "marker" && s.getTextContent() === lt(r, n) && s.setTextContent(lt(t, n));
}
function hd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && U(e) && nn(t)) {
      const i = nc(n);
      if (rc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        Ct(e, Mn, () => o);
      }
      const s = Be(i, so);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Qe(e) || ye(e) || Ye(e) || B(e) || Ue(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (bt(e) || le(e) || U(e)) && (r === "style" && le(e) ? Gh(e, n) : r === "style" && U(e) ? rc(e, n) : r === "code" && bt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && Ct(e, en, () => n));
  }
}
function sC(e, t, r) {
  if (t <= 0)
    return;
  const n = Ve();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (wr(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), u = c - l, d = Math.min(s, u);
        d > 0 && (a.spliceText(l, d, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${d} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= d, c -= d);
      }
      i += c;
    } else if ($t(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Ot(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const u of l) {
        if (s <= 0)
          break;
        if (o(u) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Ot(a)) {
        s -= 1;
        const u = a.getChildren().length;
        if (c.length > 0 && u === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Qt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const p = a.getNextSibling();
          if (p && me(p)) {
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
              wr(k) ? m += k.getTextContentSize() : $t(k) && (m += 1), i = _;
            }
            const y = p.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            p.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Qt(), !0);
        } else le(a) ? a.replace(Qt(), !0) : a.remove();
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
function oC(e, t, r, n, i) {
  if (t === ps)
    return gd(e, r, n, i);
  if (t.endsWith(ps) && !Cl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (nn(r))
        throw new Error("Text + LF should not have char attributes");
      o += ao(e, s, r, i);
    }
    return o += gd(e + o, r, n, i), o;
  } else return nn(r) ? aC(e, t, r, n, i) : ao(e, t, r, i);
}
function aC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = be(t === "" ? Wt : t);
  Ft(r, s);
  let o;
  {
    let y = function(k) {
      if (wr(k)) {
        const _ = k.getTextContentSize();
        if (e >= g && e < g + _) {
          const S = k.getParent();
          return U(S) && (o = S), !0;
        }
        g += _;
      } else if ($t(k))
        g += 1;
      else if (U(k)) {
        const _ = k.getChildren();
        for (const S of _)
          if (y(S))
            return !0;
      } else if (F(k)) {
        const _ = k.getChildren();
        for (const S of _)
          if (y(S))
            return !0;
        Ot(k) && (g += 1);
      }
      return !1;
    };
    const m = Ve();
    let g = 0;
    y(m);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const m = a[0];
      m && En(m, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (En(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, u = Si(a, n, s, c, o ? [o] : void 0);
  if (u.length === 0)
    return t.length;
  const d = u.find(U);
  if (!d)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), ao(e, t, void 0, i);
  const f = {};
  for (const [m, g] of Object.entries(r))
    m !== "char" && m !== "segment" && typeof g == "string" && (f[m] = g);
  Object.keys(f).length > 0 && d.setUnknownAttributes(f);
  let p = !0;
  for (const m of u)
    if (!Jh(e, m, i)) {
      p = !1;
      break;
    }
  return p ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), ao(e, t, void 0, i));
}
function ao(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ve();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (wr(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const u = e - s, d = be(t);
        if (Ft(r, d), u === 0)
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
    } else if ($t(c))
      s += 1;
    else if (U(c)) {
      if (!o && e === s) {
        const d = be(t);
        Ft(r, d);
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
        const d = be(t);
        return Ft(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Ot(c)) {
      if (!o && e === s) {
        const d = be(t);
        Ft(r, d);
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
        const d = be(t);
        return Ft(r, d), c.append(d), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = be(t);
    Ft(r, c);
    const l = Qt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Jh(e, t, r) {
  const n = Ve();
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
          if (me(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const u = l.getFirstChild();
            u ? u.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Qt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (wr(l)) {
        const u = l.getTextContentSize();
        if (!s && e > i && e < i + u) {
          const d = e - i, [f] = l.splitText(d);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${d}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += u;
      } else if ($t(l))
        i += 1;
      else if (U(l)) {
        if (o(l))
          return !0;
      } else if (Ot(l)) {
        const u = l;
        if (o(u))
          return !0;
        const d = i;
        if (mr(u) && Ot(t) && // Target is at the ImpliedPara's implicit newline
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
      me(a) ? mr(a) && le(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !me(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (U(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !me(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function cC(e, t, r, n, i) {
  let s;
  return Hr("chapter", t) ? s = uC(t.insert.chapter, r) : Hr("verse", t) ? s = dC(t.insert.verse, r) : Hr("ms", t) ? s = fC(t.insert.ms) : Hr("note", t) ? s = Xh(t, r, n, i) : Hr("unknown", t) ? s = Qh(t, r, n, i) : Hr("unmatched", t) && (s = hC(t.insert.unmatched, r)), s ? Jh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function gd(e, t, r, n) {
  let i;
  Cl(t) ? i = Yh(t.para, r) : mC(t) && (i = lC(t.book)), i ??= Qt();
  const s = i, o = le(s), a = mr(s);
  let c = 0, l = !1;
  function u(d) {
    if (l)
      return !0;
    if (wr(d)) {
      const f = d.getTextContentSize();
      if (e >= c && e <= c + f) {
        const p = d.getParent();
        if (le(p) && (o || a)) {
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
    } else if ($t(d))
      c += 1;
    else if (Ot(d)) {
      const f = d.getChildren();
      for (const p of f) {
        if (u(p))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (mr(d) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${d.getKey()}) with ParaNode at targetIndex ${e}`), d.replace(s, !0), l = !0, !0;
        if (le(d) && s) {
          const p = d;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${p.getMarker()}) at targetIndex ${e}`), p.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && le(d) && s)
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
  return u(Ve()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function lC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== ss || !r || !Ht.isValidBookCode(r))
    return;
  const n = Be(e, Lx);
  return xp(r, n);
}
function Yh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = Be(e, $x), i = os(r, n);
  if (!Ci(t))
    return i;
  if (t.markerMode === "editable")
    i.append(ft(r), Ao());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Oe(r) + L;
    i.append(t.hasGutterParaMarkers ? fp(s) : Nr("marker", s));
  }
  return i;
}
function uC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = Be(e, Ix);
  let a;
  if (t.markerMode === "editable")
    a = Sp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Vc(r, c, n, i, s, o);
  }
  return a;
}
function dC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = Be(e, Dx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Vt(r, n);
    c = qp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = al(n, l, i, s, o, a);
  }
  return c;
}
function fC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = Be(e, Ux);
  return sp(t, r, n, s, i);
}
function Xh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = Be(i.note, Fx), u = typeof l?.closed == "string" ? l.closed : void 0, d = e.attributes?.segment;
  let f;
  d && typeof d == "string" && (f = d);
  const p = [];
  for (const g of c?.ops ?? [])
    if (typeof g.insert == "string")
      if (nn(g.attributes)) {
        const y = Si(g.attributes.char, t, be(g.insert), void 0, Zh(g.attributes.char, p), !1, t.markerMode === "editable");
        p.push(...y);
      } else
        p.push(be(g.insert));
  return Fh(s, o, p, t, r, f, u).setCategory(a).setUnknownAttributes(l);
}
function Qh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = Be(i, Kx), l = Bc(s, o, c), u = a?.ops ?? [];
  u.length > 0 && pC(u, t, r, n).forEach((p) => l.append(p));
  const d = e.attributes?.segment;
  return typeof d == "string" && Ct(l, en, () => d), l;
}
function pC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (nn(s.attributes)) {
        const o = be(s.insert), a = Si(s.attributes.char, t, o, void 0, Zh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(be(s.insert));
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
function hC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = rl(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Zh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function nc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Si(e, t, r, n, i, s = !1, o = !1) {
  v(r) && r.getTextContentSize() === 0 && r.setTextContent(Wt);
  const a = () => {
    o && v(r) && r.getTextContent() !== Wt && r.setTextContent(L + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(nc), l = c[0], u = i?.[i.length - 1];
    if (U(u) && En(l, u))
      return c.length > 1 ? Si(c.slice(1), t, r, void 0, void 0, !0, o).forEach((p) => u.append(p)) : r && u.append(r), [];
    a();
    const d = c.reduceRight((f, p, m) => {
      const g = Or(p.style, Be(p, so));
      if (typeof p.cid == "string" && Ct(g, Mn, () => p.cid), n && m === c.length - 1 && Ct(g, en, () => n), f)
        if (U(f)) {
          const y = f.getMarker(), k = [];
          ba(y, k, t, !0), k.forEach((S) => g.append(S)), g.append(f);
          const _ = [];
          ya(f, _, t, !0), _.forEach((S) => g.append(S));
        } else
          g.append(f);
      return g;
    }, r);
    return ba(l.style, d, t, s), ya(d, d, t, s), [d];
  } else {
    const c = nc(e), l = i?.[i.length - 1];
    if (U(l) && En(c, l))
      return r && l.append(r), [];
    a();
    const u = Or(c.style, Be(c, so));
    return typeof c.cid == "string" && Ct(u, Mn, () => c.cid), n && Ct(u, en, () => n), r && u.append(r), ba(c.style, u, t, s), ya(u, u, t, s), [u];
  }
}
function ya(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && gC(e.getMarker(), t, r, !1, n);
}
function ba(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = ft(e, "opening", n) : r?.markerMode === "visible" && (i = Nr("marker", Oe(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function gC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = ft("", "selfClosing") : s = ft(e, "closing", i) : r?.markerMode === "visible" && (s = Nr("marker", n ? lt("") : lt(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function mC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Cl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function nn(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function yC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Ft(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        Ct(t, en, () => n);
        continue;
      }
      if (bC(r)) {
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
function bC(e) {
  return eg.includes(e);
}
function kC() {
  const [e] = de();
  return z(() => TC(e), [e]), null;
}
function TC(e) {
  return je(e.registerCommand(ci, xC, gt), e.registerCommand(ci, (t) => (_C(t), !1), Sn));
}
function xC(e) {
  return CC(e.target), !1;
}
function _C(e) {
  const t = e.target;
  if (Zi(t) && kr(Pr(t)))
    return;
  const r = O();
  N(r) && SC(r);
}
function Sl(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Rt(t))
      r++, t = t.getNextSibling(), v(t) && t.getTextContent() === L && (r++, t = t.getNextSibling());
    else if (ye(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r;
}
function Kt(e) {
  const t = Sl(e);
  return t === 0 ? !1 : (qt(e, t), !0);
}
function Ji(e) {
  Kt(e) || e.selectStart();
}
function CC(e) {
  if (!Zi(e))
    return !1;
  const t = Pr(e);
  if (!kr(t))
    return !1;
  const r = t.getParent();
  return r ? (me(r) && Kt(r) || qt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function Xn() {
  if (Yr().dispatchCommand(tg, void 0))
    return !0;
  const e = rn(O());
  return e ? (Ji(e), !0) : !1;
}
const tg = qc("REPAIR_PARA_MARKER_SELECTION_COMMAND");
function rg(e) {
  const t = rn(e);
  if (!t)
    return;
  const r = Sl(t);
  return t.getChildAtIndex(r) ?? t.getChildAtIndex(r - 1) ?? t;
}
function SC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = oe(t.key);
  if (!me(r))
    return !1;
  const n = r.getFirstChild();
  return !Ur(n) && !Un(n) ? !1 : Kt(r);
}
function vC() {
  const [e] = de();
  return z(() => {
    const t = (r) => r instanceof KeyboardEvent && !ng(r) || !Ko() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return je(
      e.registerCommand(yr, t, Ie),
      e.registerCommand(Co, t, Ie),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(fr, t, Ne),
      e.registerCommand(Xr, t, Ne),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(So, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = Pr(r.target);
        return !n || !sn(n) ? !1 : (r.preventDefault(), !0);
      }, Ie),
      e.registerCommand($f, t, Ie),
      e.registerCommand(Fy, t, Ie),
      e.registerCommand(Ky, t, Ie)
    );
  }, [e]), null;
}
function ng(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function sn(e) {
  return st(e, (t) => Ue(t) || yh(t)) ?? void 0;
}
function Ko() {
  const e = O();
  return N(e) ? sn(e.anchor.getNode()) !== void 0 || sn(e.focus.getNode()) !== void 0 : !1;
}
function MC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function EC(e, t) {
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
    return u.setStartAfter(c), l ? u.setEndBefore(l) : u.setEnd(n, n.childNodes.length), MC(s, Array.from(u.getClientRects()), t);
  } catch {
    return !1;
  }
}
function AC(e, t, r, n) {
  if (!zC(t) || EC(e, r))
    return !1;
  const i = r === "up" ? qx(t) : Rx(t);
  return i && n.preventDefault(), i;
}
function PC({ viewOptions: e }) {
  const [t] = de();
  return NC(t, e), null;
}
function NC(e, t) {
  z(() => {
    if (!e.hasNodes([Tr, Et, we]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = O();
      if (!N(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const u = md(o), d = IC(i, yd(u, n.key) ? "next" : "previous");
        return d && n.preventDefault(), d;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const u = n.key === "ArrowUp" ? "up" : "down";
        return AC(e, i, u, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = md(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return yd(a, n.key) ? l = !c && Td(i, "next") || !c && wC(i) || FC(i) || !c && s && kd(i, "next") : OC(a, n.key) && (l = !c && Td(i, "previous") || !c && RC(i) || KC(i, t) || !c && s && kd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(yr, r, Ie);
  }, [e, t]);
}
function md(e) {
  return e.dir || "ltr";
}
function yd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function OC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function ic(e) {
  if (!U(e) || e.getMarker() !== "fp")
    return;
  const t = rr(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function wC(e) {
  const t = ic(Up(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (qt(t, 0), !0);
}
function RC(e) {
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
  if (F(t)) {
    const i = t.getLastDescendant();
    return v(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const co = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function qC(e) {
  if (co)
    for (const { segment: r } of co.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function $C(e) {
  if (co) {
    let n = 0;
    for (const { index: i } of co.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function ig(e) {
  for (let t = e; t; t = t.getParent())
    if (F(t) && !t.isInline())
      return t;
}
function sg(e) {
  return !!e && w(e) && sn(e) !== void 0;
}
function pi(e) {
  return v(e) && !e.isToken() && !sg(e) && e.getTextContentSize() > 0;
}
function og(e) {
  return xs(e) ? !0 : B(e) ? e.getIsCollapsed() === !0 : v(e) ? (e.isToken() || sg(e)) && e.getTextContentSize() > 0 : Cs(e) ? !Ye(e) : !1;
}
function hi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function zo(e, t, r) {
  for (let n = e; n; ) {
    if (og(n))
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
function vl(e, t, r, n, i) {
  return r === "element" && F(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? hi(e, n, i) : r === "text" && og(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : hi(e, n, i);
}
function ka(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = vl(e.node, e.offset, e.kind, "previous", t), n = zo(r, "previous", t);
  if (!n)
    return e;
  if (pi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function LC(e, t) {
  const r = e.getNode(), n = ig(r);
  if (!n)
    return;
  if (e.type === "text" && pi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ka({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = vl(r, e.offset, e.type, t, n), s = zo(i, t, n);
  if (!s)
    return;
  if (pi(s)) {
    const c = s.getTextContent(), l = t === "next" ? qC(c) : $C(c);
    return ka({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ka({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function ag(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = LC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function kd(e, t) {
  return ag(e, t, "collapse");
}
function IC(e, t) {
  return ag(e, t, "extend");
}
function DC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && pi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = vl(n, e.offset, e.type, t, r);
  return zo(i, t, r) === void 0;
}
function UC(e, t) {
  const r = Ve();
  for (let n = e; n; ) {
    const i = hi(n, t, r), s = i && zo(i, t, r);
    if (!s)
      return;
    if (n = sn(s), !n)
      return s;
  }
}
function Td(e, t) {
  const r = e.anchor, n = r.getNode();
  if (sn(n))
    return !1;
  const i = ig(n);
  if (!i || !DC(r, t, i))
    return !1;
  const s = hi(i, t, Ve()), o = s && sn(s);
  if (!o)
    return !1;
  const a = UC(o, t);
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
function xd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function FC(e) {
  const t = e.anchor.getNode(), r = Up(e);
  if (B(r) && !w(r.getFirstChild())) {
    if (me(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(me(i) && Kt(i)) && i.selectStart(), !0;
      }
    } else return tr(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (me(t) && B(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : xd(r), !0;
  }
  const n = r?.getParent();
  if (tr(r) && B(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? xd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function KC(e, t) {
  const r = Ik(e);
  if (vs(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (bt(i.getParent()))
    return !0;
  if (B(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Un(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (me(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = st(o, (c) => B(c));
    if (B(a) && a.getIsCollapsed()) {
      const c = a.getParent();
      if (!c)
        return !1;
      const l = a.getIndexWithinParent();
      return c.select(l, l), !0;
    }
  }
  const s = rr(i);
  if (!s || s.getIsCollapsed())
    return !1;
  if (At(r)) {
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
  return ye(t) && Cs(t);
}
function jC() {
  const [e] = de();
  return BC(e), null;
}
function BC(e) {
  z(() => {
    if (!e.hasNodes([Te]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return je(
      e.registerNodeTransform(Te, HC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(Te, aT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(Te, oh),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(Te, (t) => ds(An("char"), t)),
      e.registerNodeTransform(He, GC)
    );
  }, [e]);
}
function Ta(e) {
  return e.getChildren().some(w);
}
function VC(e, t) {
  const r = t.getFirstChild();
  if (!w(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (wo(n)) {
    const i = n.getTextContent();
    i.startsWith(L) && (i === L ? n.remove() : n.setTextContent(i.slice(L.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function WC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  w(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function HC(e) {
  if (!U(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (Ta(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ae(e, Mn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (U(i) && En({ style: t, cid: r }, i) && Ut(n, i.getUnknownAttributes()))
    if (Ta(i)) {
      if (VC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  U(s) && En({ style: t, cid: r }, s) && Ut(n, s.getUnknownAttributes()) && (Ta(s) ? WC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function GC(e) {
  const t = e.getParent();
  if (!U(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Wt) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function cg(e) {
  return e.replaceAll("	", " ");
}
function lg() {
  const e = O();
  return !!e && !e.isCollapsed();
}
function ug(e) {
  const t = () => !lg();
  return je(e.registerCommand(Ss, t, gt), e.registerCommand(Xr, t, gt));
}
const Ml = (e) => {
  e.dispatchCommand(Ss, null);
}, El = (e) => {
  e.dispatchCommand(Xr, null);
}, Al = (e) => {
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
      n.setData(o, cg(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(fr, s);
  });
}, Pl = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", cg(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(fr, i);
  });
};
function JC() {
  const [e] = de();
  return z(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(es ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Ml(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), El(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? Pl(e) : Al(e)));
    };
    return je(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      ug(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function YC({ logger: e }) {
  const [t] = de();
  return z(() => je(
    // When the backslash or forward slash key is typed.
    t.registerCommand(yr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), ii),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(fr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ii),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(So, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, ii)
  ), [t, e]), null;
}
function XC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), C("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: C("span", { className: "text", children: i.title }) });
}
function QC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return C("div", { className: "typeahead-popover", children: C("ul", { children: e.map((i, s) => C(XC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let ZC = 0;
class $i {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${ZC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function eS({ options: e } = {}) {
  const [t] = de(), [r, n] = he(() => !t.isEditable()), [i, s] = he({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = he(void 0), c = We(() => {
    const d = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new $i("Cut", {
        onSelect: () => {
          El(t);
        },
        isDisabled: r
      }),
      new $i("Copy", {
        onSelect: () => {
          Ml(t);
        }
      }),
      new $i("Paste", {
        onSelect: () => {
          Al(t);
        },
        isDisabled: r
      }),
      new $i("Paste as Plain Text", {
        onSelect: () => {
          Pl(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((p) => new $i(p.title, { onSelect: p.onSelect, isDisabled: p.isDisabled }));
    return [...d, ...f];
  }, [t, r, e]), l = ke(() => {
    s((d) => ({ ...d, isOpen: !1 })), a(void 0);
  }, []);
  z(() => ug(t), [t]), z(() => {
    const d = (f) => {
      const p = f.target;
      t.getRootElement() === p || Np(p) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, p) => {
      p?.removeEventListener("contextmenu", d), f && f.addEventListener("contextmenu", d);
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
  }, [i.isOpen, l, c, o, t]), z(() => t.registerEditableListener((d) => {
    n(!d);
  }), [t]);
  const u = ie(null);
  return ks(() => {
    const d = u.current;
    if (!d)
      return;
    const { width: f, height: p } = d.getBoundingClientRect(), m = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), g = Math.max(0, Math.min(i.y, globalThis.innerHeight - p));
    d.style.left = `${m}px`, d.style.top = `${g}px`, d.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? cb.createPortal(C("div", { ref: u, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (d) => d.stopPropagation(), children: C(QC, { options: c, selectedItemIndex: o, onOptionClick: (d) => {
    d.isDisabled || (t.update(() => {
      d.onSelect();
    }), l());
  }, onOptionMouseEnter: (d) => {
    a(d);
  } }) }), document.body) : null;
}
function tS(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function rS(e) {
  if (!jy(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function nS(e) {
  return kr(e) || At(e);
}
function xa(e, t, r) {
  const n = Pr(t.node);
  if (!Cs(n) || nS(n))
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
function iS(e, t) {
  if (O())
    return !1;
  const r = e.getRootElement(), n = Lf(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !zy(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let u, d;
  if (n.isCollapsed)
    u = xa(e, c, rS(c)), d = u;
  else {
    const y = tS(n.getRangeAt(0), c);
    u = xa(e, c, y ? "before" : "after"), d = xa(e, l, y ? "after" : "before");
  }
  if (!u && !d)
    return !1;
  const f = u ?? c, p = d ?? l, m = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: p.node,
    focusOffset: p.offset
  }, g = If(m, e);
  return g ? (dr(g), g.dirty = !t, t) : !1;
}
function sS() {
  const [e] = de(), t = ie(!1), r = ie(!1);
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
  }, [e]), z(() => e.registerCommand(gr, () => (iS(e, t.current) && (r.current = !0), !1), Ne), [e]), null;
}
function oS() {
  const [e] = de();
  return z(() => e.registerCommand(yr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(es ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, Ne), [e]), null;
}
function aS({ isEditable: e }) {
  const [t] = de();
  return ks(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function _d(e) {
  return !!e && Hc(oe(e));
}
function dg(e) {
  const [t] = de(), r = ie(void 0), n = ke((i) => {
    const s = O(), o = N(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = _d(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const u = i.getParentOrThrow(), d = i.getIndexWithinParent() + 1, f = qo(u, d);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const p = Rk();
        i.insertAfter(p), r.current = p.getKey(), l = p.getKey();
      }
      qt(u, d);
    }
    if (a && c && a !== o && a !== l) {
      const u = oe(a);
      v(u) && u.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return z(() => {
    const i = () => {
      const a = e(), c = O(), l = N(c) && c.isCollapsed() ? c.anchor.key : void 0, u = r.current;
      (a || u && u !== l) && (Qr(Zr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (Ms(c) || !c.includes(li))
        return;
      const l = O(), u = N(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (qk(a), r.current = void 0, u !== void 0) {
        const d = c.slice(0, u).split(li).length - 1, f = Math.max(0, u - d);
        a.select(f, f);
      }
    }, o = je(t.registerCommand(gr, () => (i(), !1), Sn), t.registerCommand($c, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = _d(a);
      }), c && t.update(() => {
        const l = oe(a);
        v(l) && l.remove();
      }, { tag: Zr }), r.current = void 0, !1;
    }, Sn), t.registerNodeTransform(He, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function cS() {
  const e = O();
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!F(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!ye(i) || qo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ye(s))
    return i;
}
function lS() {
  return dg(cS), null;
}
function uS({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = de();
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
          f || Qr(By), o.setEditorState(l), o.dispatchCommand(Vy, void 0);
        }, { tag: ep });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function dS({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = de();
  return fS(t, n), pS(i, e, r, n), null;
}
function fS(e, t) {
  const r = ie(void 0), n = ie(void 0), i = e.noteCallers, s = e.crossRefCallers;
  z(() => {
    let o = i;
    (!o || o.length <= 0) && (o = k_), r.current !== o && (r.current = o, Cd("note-callers", o, t));
  }, [t, i]), z(() => {
    let o = s;
    (!o || o.length <= 0) && (o = T_), n.current !== o && (n.current = o, Cd("cross-ref-callers", o, t));
  }, [t, s]);
}
function pS(e, t, r, n) {
  z(() => {
    if (!e.hasNodes([Te, we, Zt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => TS(s));
    return je(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(we, (s) => hS(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(Te, gS),
      e.registerNodeTransform(He, mS),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Zt, yS),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Zt, (s, { prevEditorState: o }) => bS(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(gr, () => kS(e, t, r, n), gt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function hS(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => At(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    v(i) && !w(i) && i.getTextContent() !== wt(e.getCaller()) && e.insertBefore(i);
  }
}
function gS(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => At(o));
  if (!U(e) || !B(t) || !n)
    return;
  const i = Gc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  v(s) ? s.getTextContent() !== L && s.setTextContent(L) : e.insertAfter(be(L));
}
function mS(e) {
  const t = rr(e), r = t?.getChildren(), n = r?.find((o) => At(o));
  if (!v(e) || !B(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!w(e) && B(i) && e.getTextContent() !== L && (e.setTextContent(L), e.selectEnd()), U(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Wt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Gc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function yS(e) {
  if (!At(e))
    return;
  const t = e.getNextSibling();
  !v(t) || w(t) ? e.insertAfter(be(L)) : t.getTextContent() !== L && t.setTextContent(L);
}
function bS(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = oe(r), a = o?.getParent();
      return At(o) && B(a) && a.getCaller() === ts;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function kS(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = O();
  if (!N(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = st(o, (c) => B(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = oe(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Li(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (B(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Li(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (B(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Li(e, c, n);
    } else if (!a) {
      const c = st(o, (l) => B(l));
      if (c && c.getIsCollapsed() && me(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Li(e, l, n);
      }
    }
  }
  if (me(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Un(c) && B(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Li(e, l, n);
    }
  }
  return !1;
}
function Li(e, t, r) {
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
function TS(e) {
  const t = O();
  if (!N(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (B(i) && v(s)) {
    e.preventDefault();
    const o = _o();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), dr(o);
  }
}
function Cd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (xS(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function xS(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function jo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!w(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = cs(e);
  return r && t.push(r), t.length > 0 && t.every((n) => v(n) && n.getMode() === "token") ? t : [];
}
function _S(e) {
  const t = e.getParent();
  if (B(t))
    return jo(t).some((r) => r.is(e)) ? t : void 0;
}
function lo(e) {
  const t = jo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function CS(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function SS(e) {
  const t = Wy();
  if (!N(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= lo(e);
  const i = CS(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= lo(e);
}
function sc(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = _S(t);
  if (r)
    return vS(r, t, e.offset) ? void 0 : r;
}
function vS(e, t, r) {
  const n = jo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function MS(e) {
  const t = jo(e), r = t[t.length - 1];
  v(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : qt(e, lo(e));
}
function ES(e = !1) {
  const t = O();
  if (!N(t))
    return !1;
  if (!t.isCollapsed())
    return AS(t.anchor, t.focus);
  const r = sc(t.anchor);
  if (!r)
    return !1;
  if (!e && SS(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    qt(n, r.getIndexWithinParent());
  } else
    MS(r);
  return !0;
}
function AS(e, t) {
  const r = sc(e), n = sc(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Sd(e, r, i), n && Sd(t, n, !i), !0;
}
function Sd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), lo(t), "element");
}
function PS() {
  const [e] = de(), t = ie(!1);
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
  }, [e]), z(() => e.registerCommand(gr, () => (ES(t.current) && Qr(Zr), !1), Sn), [e]), null;
}
function NS({ onChange: e }) {
  const [t] = de();
  return z(() => t.registerCommand(gr, () => {
    const r = hl();
    return e?.(r), !1;
  }, gt), [t, e]), null;
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
function Rr(e) {
  return e ? me(e) ? e : st(e, (r) => me(r)) ?? void 0 : void 0;
}
function pg(e) {
  if (!N(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Rr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Nl(e) {
  return N(e) && e.isCollapsed() && e.anchor.type === "element" || !N(e) && !yi(e) ? !1 : e.getNodes().some((t) => ye(t));
}
function Ol(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Rr(r);
  if (!n || !F(n))
    return !1;
  const i = kr(n.getFirstChild()) ? 1 : 0;
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
function OS(e) {
  if (!e || !Ol(e) || !N(e))
    return;
  const t = Rr(e.anchor.getNode());
  return me(t) && kr(t.getFirstChild()) ? t : void 0;
}
function hg(e) {
  if (!N(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Rr(r);
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
  return !!oc(e, t);
}
function oc(e, t) {
  if (!N(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && F(n)) {
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
function uo(e, t) {
  if (!N(e))
    return !1;
  const r = Rr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ai(e) {
  return Nl(e) || pg(e);
}
function gg(e, t) {
  if (Nl(e) || pg(e))
    return !0;
  if (!N(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return Ol(e) && uo(e, "backward") || vd(e, "backward");
    case "deleteForward":
      return hg(e) && uo(e, "forward") || vd(e, "forward");
    case "insertText":
      return !1;
  }
}
function wS(e, t) {
  if (!(!N(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = oc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (Ol(e) && uo(e, "backward")) {
        const n = Rr(e.anchor.getNode());
        if (me(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = oc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (hg(e) && uo(e, "forward")) {
        const i = Rr(e.anchor.getNode())?.getNextSibling();
        if (me(i))
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
    return yi(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!N(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!N(e) || e.isCollapsed())
    return !1;
  const r = Rr(e.anchor.getNode()), n = Rr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function mg(e) {
  if (v(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else F(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function yg(e) {
  const t = e.getPreviousSibling();
  if (!me(t))
    return;
  const r = t.getLastChild(), n = e.getFirstChild();
  kr(n) && n.remove();
  const i = e.getChildren();
  t.append(...i), e.remove(), bg(t, r);
}
function bg(e, t) {
  !t || kr(t) ? Ji(e) : v(t) ? mg(t) : qt(e, t.getIndexWithinParent() + 1);
}
function kg(e) {
  return ye(e) || Qe(e) ? [] : me(e) ? e.getChildren().flatMap(kg) : [e];
}
function RS(e) {
  const t = [];
  for (const r of e) {
    const n = kg(r);
    n.length !== 0 && (me(r) && t.length > 0 && t.push(be(" ")), t.push(...n));
  }
  return t;
}
const qS = "psc-para-marker-selected", $S = /* @__PURE__ */ new Set(["Process", "Dead"]), LS = /* @__PURE__ */ new Set([
  "insertReplacementText",
  "insertFromDrop",
  "insertFromYank",
  "insertFromPaste",
  "insertFromPasteAsQuotation"
]);
function IS({ onParaMarkerMenuRequest: e, structureProtectionMode: t = "off" }) {
  const [r] = de(), n = ie(e);
  z(() => {
    n.current = e;
  }, [e]);
  const i = ie(t);
  return z(() => {
    i.current = t;
  }, [t]), z(() => {
    let s, o, a, c = !1;
    const l = () => {
      queueMicrotask(() => n.current?.());
    }, u = () => r.isEditable() ? rn(O()) : void 0, d = (D) => {
      i.current !== "protected" && yg(D);
    }, f = (D) => {
      const G = r.getRootElement(), J = Lf(G?.ownerDocument.defaultView ?? null), qe = J?.anchorNode;
      if (!J || !qe || !G?.contains(qe) || r.getElementByKey(D)?.contains(qe))
        return !1;
      const et = If(J, r);
      return et ? (dr(et), !0) : !1;
    }, p = (D, G) => {
      const J = D?.startContainer;
      if (!D || !J || !r.getRootElement()?.contains(J) || r.getElementByKey(G)?.contains(J))
        return !1;
      const qe = _o();
      return qe.applyDOMRange(D), dr(qe), !0;
    }, m = (D) => {
      const G = Zi(D.target) ? Pr(D.target) : null;
      if (kr(G))
        return Hk(G);
      const J = kn(O()), qe = J?.getParent();
      if (!J || !me(qe) || !G || f(J.getKey()) || !Cs(G))
        return !1;
      const et = G.getParent();
      return me(et) ? qt(et, G.getIndexWithinParent() + 1) : Ji(qe), !1;
    }, g = (D) => {
      if (typeof D.key != "string" || W())
        return !1;
      const G = u();
      if (!G)
        return !1;
      const J = n.current !== void 0;
      switch (D.key) {
        case "Enter":
          if (!J)
            break;
          return D.preventDefault(), l(), !0;
        case "ArrowDown":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowRight":
          return D.preventDefault(), D.key === "ArrowDown" && D.altKey && J ? l() : Kt(G), !0;
        case "Backspace":
        case "Delete":
          return D.preventDefault(), d(G), !0;
        // A virtual keyboard names no key; the `beforeinput` that follows says what it does.
        case "Unidentified":
          return !1;
        default:
          if (!US(D))
            return !1;
      }
      return Kt(G), !1;
    }, y = (D) => {
      const G = u() ?? (D ? OS(O()) : void 0);
      return G ? (d(G), !0) : !1;
    }, k = (D) => {
      if (W())
        return !1;
      const G = u();
      if (!G)
        return !1;
      const { inputType: J } = D;
      if (J.startsWith("delete"))
        return D.preventDefault(), d(G), !0;
      if (!J.startsWith("insert"))
        return !1;
      const qe = G.getFirstChildOrThrow().getKey();
      return LS.has(J) && (p(D.getTargetRanges?.()[0], qe) || f(qe)) || Kt(G), !1;
    }, _ = () => {
      const D = u();
      return D && Kt(D), !1;
    }, S = () => {
      const D = u();
      return D && (f(D.getFirstChildOrThrow().getKey()) || Kt(D)), !1;
    }, A = (D) => {
      const G = kn(O());
      return !G || !r.isEditable() || f(G.getKey()) ? !1 : (KS(D) && D.preventDefault(), !0);
    }, E = (D) => {
      if (!Zi(D.target))
        return !1;
      const G = kn(O());
      if (!G)
        return !1;
      if (Pr(D.target)?.is(G))
        return D.preventDefault(), !0;
      const J = r.getRootElement()?.ownerDocument;
      return p(J && jS(J, D.clientX, D.clientY), G.getKey()), !1;
    }, j = () => {
      const D = u();
      return D ? (Kt(D), !0) : !1;
    }, M = () => r.getEditorState().read(() => kn(O()) !== void 0), q = () => {
      if (c || !r.isEditable() || !M())
        return !1;
      const D = r.getRootElement();
      return Ca(D), D?.ownerDocument.defaultView?.setTimeout(() => {
        !c && M() && Ca(D);
      }), !1;
    }, $ = () => {
      c = !0;
    }, re = () => {
      c = !1;
    }, W = () => {
      const D = O();
      if (!a || !Tg(D, a.glyphKey))
        return !1;
      const { paraKey: G, previousKey: J, nextKey: qe } = a;
      a = void 0;
      const et = oe(G), It = J ? oe(J) : null, X = qe ? oe(qe) : null;
      return me(et) && et.isAttached() ? Ji(et) : me(It) && It.isAttached() ? bg(It, It.getLastChild()) : me(X) && X.isAttached() ? Ji(X) : dr(null), !0;
    }, xe = (D) => {
      const G = r.isEditable() ? D : void 0, J = G?.paraKey;
      s !== J && _a(r, s, !1), s = J, _a(r, J, !0), o = Ed(r, o, G?.glyphKey);
    }, ne = (D = r.getEditorState()) => D.read(() => {
      const G = kn(O()), J = G?.getParent();
      if (!(!G || !J))
        return {
          glyphKey: G.getKey(),
          paraKey: J.getKey(),
          previousKey: J.getPreviousSibling()?.getKey(),
          nextKey: J.getNextSibling()?.getKey()
        };
    }), Ee = je(Vk(r), r.registerEditableListener(() => xe(ne())), r.registerRootListener((D, G) => {
      G?.removeEventListener("pointerdown", $, !0), D?.addEventListener("pointerdown", $, !0), G?.ownerDocument.removeEventListener("pointerup", re, !0), D?.ownerDocument.addEventListener("pointerup", re, !0);
    }), () => {
      const D = r.getRootElement();
      D?.removeEventListener("pointerdown", $, !0), D?.ownerDocument.removeEventListener("pointerup", re, !0);
    }, r.registerCommand(ci, m, Ne), r.registerCommand(yr, g, Ne), r.registerCommand(Lc, j, Ne), r.registerCommand($f, y, Ne), r.registerCommand(Hy, k, Ne), r.registerCommand(Gy, _, Ne), r.registerCommand(Co, _, Ne), r.registerCommand(fr, S, Ne), r.registerCommand(Xr, A, Ne), r.registerCommand(Ss, A, Ne), r.registerCommand(Df, A, Ne), r.registerCommand(So, E, Ne), r.registerCommand(Uf, q, Ne), r.registerCommand(tg, W, Ne), r.registerUpdateListener(({ editorState: D }) => {
      const G = ne(D);
      (G || !DS(D, a?.glyphKey)) && (a = G), xe(G), G && r.isEditable() && Ca(r.getRootElement());
    }));
    return () => {
      Ee(), _a(r, s, !1), Ed(r, o, void 0);
    };
  }, [r]), null;
}
function Tg(e, t) {
  return !yi(e) || kn(e) ? !1 : e.has(t) || e.getNodes().length === 0;
}
function DS(e, t) {
  return t === void 0 ? !1 : e.read(() => Tg(O(), t));
}
function US(e) {
  return ng(e) || $S.has(e.key) ? !0 : e.ctrlKey || e.metaKey || e.altKey && !es ? !1 : FS(e.key);
}
function FS(e) {
  return [...e].length === 1;
}
function KS(e) {
  return typeof e == "object" && e !== null && typeof e.preventDefault == "function";
}
function _a(e, t, r) {
  if (t === void 0)
    return;
  const n = e.getElementByKey(t);
  n && n.classList.toggle(qS, r);
}
const zS = "psc-para-marker-";
function Ed(e, t, r) {
  const n = e.getRootElement(), i = r === void 0 ? null : e.getElementByKey(r), s = t === void 0 ? null : e.getElementByKey(t);
  if (s && s !== i && (s.removeAttribute("role"), s.removeAttribute("aria-selected")), !!n) {
    if (!i || r === void 0) {
      t !== void 0 && n.removeAttribute("aria-activedescendant");
      return;
    }
    return i.id || (i.id = `${zS}${e.getKey()}-${r}`), i.setAttribute("role", "option"), i.setAttribute("aria-selected", "true"), n.setAttribute("aria-activedescendant", i.id), r;
  }
}
function Ca(e) {
  if (!e)
    return;
  const t = e.ownerDocument.defaultView?.getSelection();
  !t || t.rangeCount === 0 || t.anchorNode && e.contains(t.anchorNode) && t.removeAllRanges();
}
function jS(e, t, r) {
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
function BS() {
  const [e] = de();
  return VS(e), null;
}
function VS(e) {
  z(() => {
    if (!e.hasNodes([ot]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(ot, (t) => WS(t, e));
  }, [e]);
}
function WS(e, t) {
  Za(t, e.getKey()) && wh(e.getFirstChild()), !(!le(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = oe(e.getKey());
    return le(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function xg({ onStateChange: e }) {
  const [t] = de(), [r, n] = he(t), i = ie(!1), s = ie(!1), o = ie(void 0), a = ie(void 0), c = ke(() => {
    const l = O(), u = r.isEditable() ? rn(l) : void 0;
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
    if (N(l)) {
      const f = l.anchor.getNode(), p = l.focus.getNode();
      let m = f.getKey() === "root" ? f : st(f, (_) => {
        const S = _.getParent();
        return S !== null && Jy(S);
      });
      m === null && (m = f.getTopLevelElementOrThrow()), fs(m) && (m = st(f, le) ?? m);
      const g = m.getKey(), y = r.getElementByKey(g), k = Uk(f, p);
      if (k && wx(k) && (d = k.getMarker()), y !== null && (le(m) || bt(m) || vs(m))) {
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
  return z(() => t.registerCommand(gr, (l, u) => (c(), n(u), !1), Ne), [t, c]), z(() => je(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Yy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Ne), r.registerCommand(Xy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), Ne)), [c, r, e]), null;
}
function Ad(e, t) {
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
    if (typeof e == "string") return Ad(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ad(e, t) : void 0;
  }
}
const _g = Object.entries, Pd = Object.setPrototypeOf, QS = Object.isFrozen, ZS = Object.getPrototypeOf, ev = Object.getOwnPropertyDescriptor;
let at = Object.freeze, ut = Object.seal, ri = Object.create, Cg = typeof Reflect < "u" && Reflect, ac = Cg.apply, cc = Cg.construct;
at || (at = function(t) {
  return t;
});
ut || (ut = function(t) {
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
const Qn = Ze(Array.prototype.forEach), tv = Ze(Array.prototype.lastIndexOf), Nd = Ze(Array.prototype.pop), Zn = Ze(Array.prototype.push), rv = Ze(Array.prototype.splice), Gr = Array.isArray, ji = Ze(String.prototype.toLowerCase), Sa = Ze(String.prototype.toString), Od = Ze(String.prototype.match), Ii = Ze(String.prototype.replace), wd = Ze(String.prototype.indexOf), nv = Ze(String.prototype.trim), iv = Ze(Number.prototype.toString), sv = Ze(Boolean.prototype.toString), Rd = typeof BigInt > "u" ? null : Ze(BigInt.prototype.toString), qd = typeof Symbol > "u" ? null : Ze(Symbol.prototype.toString), nt = Ze(Object.prototype.hasOwnProperty), Di = Ze(Object.prototype.toString), rt = Ze(RegExp.prototype.test), bn = ov(TypeError);
function Ze(e) {
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
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ji;
  if (Pd && Pd(e, null), !Gr(t))
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
    nt(e, t) || (e[t] = null);
  return e;
}
function dt(e) {
  const t = ri(null);
  for (const n of _g(e)) {
    var r = YS(n, 2);
    const i = r[0], s = r[1];
    nt(e, i) && (Gr(s) ? t[i] = av(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = dt(s) : t[i] = s);
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
      return Rd ? Rd(e) : "0";
    case "symbol":
      return qd ? qd(e) : "Symbol()";
    case "undefined":
      return Di(e);
    case "function":
    case "object": {
      if (e === null)
        return Di(e);
      const t = e, r = Jt(t, "toString");
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
function Jt(e, t) {
  for (; e !== null; ) {
    const n = ev(e, t);
    if (n) {
      if (n.get)
        return Ze(n.get);
      if (typeof n.value == "function")
        return Ze(n.value);
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
    return rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const $d = at(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), va = at(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ma = at(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), uv = at(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ea = at(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), dv = at(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ld = at(["#text"]), Id = at(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Aa = at(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dd = at(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ds = at(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), fv = ut(/{{[\w\W]*|^[\w\W]*}}/g), pv = ut(/<%[\w\W]*|^[\w\W]*%>/g), hv = ut(/\${[\w\W]*/g), gv = ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), mv = ut(/^aria-[\-\w]+$/), Ud = ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), yv = ut(/^(?:\w+script|data):/i), bv = ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), kv = ut(/^html$/i), Tv = ut(/^[a-z][.\w]*(-[.\w]+)+$/i), Fd = ut(/<[/\w!]/g), Kd = ut(/<[/\w]/g), xv = ut(/<\/no(script|embed|frames)/i), _v = ut(/\/>/i), Nt = {
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
}, Vr = function(t, r, n, i) {
  return nt(t, r) && Gr(t[r]) ? ge(i.base ? dt(i.base) : {}, t[r], i.transform) : n;
};
function Sg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cv();
  const t = (K) => Sg(K);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Nt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, d = e.trustedTypes, f = a.prototype, p = Jt(f, "cloneNode"), m = Jt(f, "remove"), g = Jt(f, "nextSibling"), y = Jt(f, "childNodes"), k = Jt(f, "parentNode"), _ = Jt(f, "shadowRoot"), S = Jt(f, "attributes"), A = o && o.prototype ? Jt(o.prototype, "nodeType") : null, E = o && o.prototype ? Jt(o.prototype, "nodeName") : null, j = o && o.prototype ? Jt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const K = r.createElement("template");
    K.content && K.content.ownerDocument && (r = K.content.ownerDocument);
  }
  let M, q = "", $, re = !1, W = 0;
  const xe = function() {
    if (W > 0)
      throw bn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ne = function(h) {
    xe(), W++;
    try {
      return M.createHTML(h);
    } finally {
      W--;
    }
  }, Ee = function(h) {
    xe(), W++;
    try {
      return M.createScriptURL(h);
    } finally {
      W--;
    }
  }, D = function() {
    return re || ($ = Sv(d, i), re = !0), $;
  }, G = r, J = G.implementation, qe = G.createNodeIterator, et = G.createDocumentFragment, It = G.getElementsByTagName, X = n.importNode;
  let P = zd();
  t.isSupported = typeof _g == "function" && typeof k == "function" && J && J.createHTMLDocument !== void 0;
  const Y = fv, pe = pv, Ae = hv, ee = gv, Me = mv, _r = yv, Dt = bv, un = Tv;
  let Je = Ud, fe = null;
  const kt = ge({}, [...$d, ...va, ...Ma, ...Ea, ...Ld]);
  let Se = null;
  const Cr = ge({}, [...Id, ...Aa, ...Dd, ...Ds]);
  let $e = Object.seal(ri(null, {
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
  })), Sr = null, Ei = null;
  const Tt = Object.seal(ri(null, {
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
  let Ps = !0, vr = !0, Kn = !1, Ai = !0, sr = !1, Gt = !0, R = !1, V = !1, Q = null, te = null, Pe = !1, tt = !1, Pt = !1, dn = !1, Pi = !0, ru = !1;
  const nu = "user-content-";
  let Go = !0, Ns = !1, zn = {}, or = null;
  const Jo = ge({}, [
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
  let iu = null;
  const su = ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let Yo = null;
  const ou = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Os = "http://www.w3.org/1998/Math/MathML", ws = "http://www.w3.org/2000/svg", ar = "http://www.w3.org/1999/xhtml";
  let jn = ar, Xo = !1, Qo = null;
  const cy = ge({}, [Os, ws, ar], Sa), au = at(["mi", "mo", "mn", "ms", "mtext"]);
  let Zo = ge({}, au);
  const cu = at(["annotation-xml"]);
  let ea = ge({}, cu);
  const ly = ge({}, ["title", "style", "font", "a", "script"]);
  let Ni = null;
  const uy = ["application/xhtml+xml", "text/html"], dy = "text/html";
  let Fe = null, Bn = null;
  const fy = r.createElement("form"), lu = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, ta = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Bn && Bn === h)
      return;
    (!h || typeof h != "object") && (h = {}), h = dt(h), Ni = // eslint-disable-next-line unicorn/prefer-includes
    uy.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? dy : h.PARSER_MEDIA_TYPE, Fe = Ni === "application/xhtml+xml" ? Sa : ji, fe = Vr(h, "ALLOWED_TAGS", kt, {
      transform: Fe
    }), Se = Vr(h, "ALLOWED_ATTR", Cr, {
      transform: Fe
    }), Qo = Vr(h, "ALLOWED_NAMESPACES", cy, {
      transform: Sa
    }), Yo = Vr(h, "ADD_URI_SAFE_ATTR", ou, {
      transform: Fe,
      base: ou
    }), iu = Vr(h, "ADD_DATA_URI_TAGS", su, {
      transform: Fe,
      base: su
    }), or = Vr(h, "FORBID_CONTENTS", Jo, {
      transform: Fe
    }), Sr = Vr(h, "FORBID_TAGS", dt({}), {
      transform: Fe
    }), Ei = Vr(h, "FORBID_ATTR", dt({}), {
      transform: Fe
    }), zn = nt(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? dt(h.USE_PROFILES) : h.USE_PROFILES : !1, Ps = h.ALLOW_ARIA_ATTR !== !1, vr = h.ALLOW_DATA_ATTR !== !1, Kn = h.ALLOW_UNKNOWN_PROTOCOLS || !1, Ai = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, sr = h.SAFE_FOR_TEMPLATES || !1, Gt = h.SAFE_FOR_XML !== !1, R = h.WHOLE_DOCUMENT || !1, tt = h.RETURN_DOM || !1, Pt = h.RETURN_DOM_FRAGMENT || !1, dn = h.RETURN_TRUSTED_TYPE || !1, Pe = h.FORCE_BODY || !1, Pi = h.SANITIZE_DOM !== !1, ru = h.SANITIZE_NAMED_PROPS || !1, Go = h.KEEP_CONTENT !== !1, Ns = h.IN_PLACE || !1, Je = lv(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : Ud, jn = typeof h.NAMESPACE == "string" ? h.NAMESPACE : ar, Zo = nt(h, "MATHML_TEXT_INTEGRATION_POINTS") && h.MATHML_TEXT_INTEGRATION_POINTS && typeof h.MATHML_TEXT_INTEGRATION_POINTS == "object" ? dt(h.MATHML_TEXT_INTEGRATION_POINTS) : ge({}, au), ea = nt(h, "HTML_INTEGRATION_POINTS") && h.HTML_INTEGRATION_POINTS && typeof h.HTML_INTEGRATION_POINTS == "object" ? dt(h.HTML_INTEGRATION_POINTS) : ge({}, cu);
    const x = nt(h, "CUSTOM_ELEMENT_HANDLING") && h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING == "object" ? dt(h.CUSTOM_ELEMENT_HANDLING) : ri(null);
    if ($e = ri(null), nt(x, "tagNameCheck") && lu(x.tagNameCheck) && ($e.tagNameCheck = x.tagNameCheck), nt(x, "attributeNameCheck") && lu(x.attributeNameCheck) && ($e.attributeNameCheck = x.attributeNameCheck), nt(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && ($e.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), ut($e), sr && (vr = !1), Pt && (tt = !0), zn && (fe = ge({}, Ld), Se = ri(null), zn.html === !0 && (ge(fe, $d), ge(Se, Id)), zn.svg === !0 && (ge(fe, va), ge(Se, Aa), ge(Se, Ds)), zn.svgFilters === !0 && (ge(fe, Ma), ge(Se, Aa), ge(Se, Ds)), zn.mathMl === !0 && (ge(fe, Ea), ge(Se, Dd), ge(Se, Ds))), Tt.tagCheck = null, Tt.attributeCheck = null, nt(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? Tt.tagCheck = h.ADD_TAGS : Gr(h.ADD_TAGS) && (fe === kt && (fe = dt(fe)), ge(fe, h.ADD_TAGS, Fe))), nt(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? Tt.attributeCheck = h.ADD_ATTR : Gr(h.ADD_ATTR) && (Se === Cr && (Se = dt(Se)), ge(Se, h.ADD_ATTR, Fe))), nt(h, "ADD_URI_SAFE_ATTR") && Gr(h.ADD_URI_SAFE_ATTR) && ge(Yo, h.ADD_URI_SAFE_ATTR, Fe), nt(h, "FORBID_CONTENTS") && Gr(h.FORBID_CONTENTS) && (or === Jo && (or = dt(or)), ge(or, h.FORBID_CONTENTS, Fe)), nt(h, "ADD_FORBID_CONTENTS") && Gr(h.ADD_FORBID_CONTENTS) && (or === Jo && (or = dt(or)), ge(or, h.ADD_FORBID_CONTENTS, Fe)), Go && (fe["#text"] = !0), R && ge(fe, ["html", "head", "body"]), fe.table && (ge(fe, ["tbody"]), delete Sr.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw bn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw bn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const I = M;
      M = h.TRUSTED_TYPES_POLICY;
      try {
        q = ne("");
      } catch (H) {
        throw M = I, H;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (M = void 0, q = "") : (M === void 0 && (M = D()), M && typeof q == "string" && (q = ne("")));
    at && at(h), Bn = h;
  }, uu = ge({}, [...va, ...Ma, ...uv]), du = ge({}, [...Ea, ...dv]), py = function(h, x, I) {
    return x.namespaceURI === ar ? h === "svg" : x.namespaceURI === Os ? h === "svg" && (I === "annotation-xml" || Zo[I]) : !!uu[h];
  }, hy = function(h, x, I) {
    return x.namespaceURI === ar ? h === "math" : x.namespaceURI === ws ? h === "math" && ea[I] : !!du[h];
  }, gy = function(h, x, I) {
    return x.namespaceURI === ws && !ea[I] || x.namespaceURI === Os && !Zo[I] ? !1 : !du[h] && (ly[h] || !uu[h]);
  }, my = function(h) {
    let x = k(h);
    (!x || !x.tagName) && (x = {
      namespaceURI: jn,
      tagName: "template"
    });
    const I = ji(h.tagName), H = ji(x.tagName);
    return Qo[h.namespaceURI] ? h.namespaceURI === ws ? py(I, x, H) : h.namespaceURI === Os ? hy(I, x, H) : h.namespaceURI === ar ? gy(I, x, H) : !!(Ni === "application/xhtml+xml" && Qo[h.namespaceURI]) : !1;
  }, zr = function(h) {
    Zn(t.removed, {
      element: h
    });
    try {
      k(h).removeChild(h);
    } catch {
      if (m(h), !k(h))
        throw bn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Rs = function(h) {
    Oi(h);
    const x = y(h);
    if (x) {
      const H = [];
      Qn(x, (Z) => {
        Zn(H, Z);
      }), Qn(H, (Z) => {
        try {
          m(Z);
        } catch {
        }
      });
    }
    const I = S(h);
    if (I)
      for (let H = I.length - 1; H >= 0; --H) {
        const Z = I[H], ce = Z && Z.name;
        if (typeof ce == "string")
          try {
            h.removeAttribute(ce);
          } catch {
          }
      }
  }, fn = function(h, x) {
    try {
      Zn(t.removed, {
        attribute: x.getAttributeNode(h),
        from: x
      });
    } catch {
      Zn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(h), h === "is")
      if (tt || Pt)
        try {
          zr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(h, "");
        } catch {
        }
  }, yy = function(h) {
    const x = S(h);
    if (x)
      for (let I = x.length - 1; I >= 0; --I) {
        const H = x[I], Z = H && H.name;
        if (!(typeof Z != "string" || Se[Fe(Z)]))
          try {
            h.removeAttribute(Z);
          } catch {
          }
      }
  }, Oi = function(h) {
    const x = [h];
    for (; x.length > 0; ) {
      const I = x.pop();
      (A ? A(I) : I.nodeType) === Nt.element && yy(I);
      const Z = y(I);
      if (Z)
        for (let ce = Z.length - 1; ce >= 0; --ce)
          x.push(Z[ce]);
    }
  }, by = function(h) {
    if (!Gt)
      return;
    const x = [h];
    for (; x.length > 0; ) {
      const I = x.pop(), H = A ? A(I) : I.nodeType;
      if (H === Nt.processingInstruction || H === Nt.comment && rt(Kd, I.data)) {
        try {
          m(I);
        } catch {
        }
        continue;
      }
      if (H === Nt.element) {
        const ce = I, _e = Fe(E ? E(I) : I.nodeName);
        try {
          ce.hasAttribute && ce.hasAttribute("patchsrc") && ce.removeAttribute("patchsrc"), ce.hasAttribute && ce.hasAttribute("for") && _e !== "label" && _e !== "output" && ce.removeAttribute("for");
        } catch {
        }
      }
      const Z = y(I);
      if (Z)
        for (let ce = Z.length - 1; ce >= 0; --ce)
          x.push(Z[ce]);
    }
  }, fu = function(h) {
    let x = null, I = null;
    if (Pe)
      h = "<remove></remove>" + h;
    else {
      const ce = Od(h, /^[\r\n\t ]+/);
      I = ce && ce[0];
    }
    Ni === "application/xhtml+xml" && jn === ar && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const H = M ? ne(h) : h;
    if (jn === ar)
      try {
        x = new u().parseFromString(H, Ni);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = J.createDocument(jn, "template", null);
      try {
        x.documentElement.innerHTML = Xo ? q : H;
      } catch {
      }
    }
    const Z = x.body || x.documentElement;
    return h && I && Z.insertBefore(r.createTextNode(I), Z.childNodes[0] || null), jn === ar ? It.call(x, R ? "html" : "body")[0] : R ? x.documentElement : Z;
  }, pu = function(h) {
    const x = j ? j(h) : h.ownerDocument;
    return qe.call(
      x || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, qs = function(h) {
    return h = Ii(h, Y, " "), h = Ii(h, pe, " "), h = Ii(h, Ae, " "), h;
  }, ra = function(h) {
    var x;
    h.normalize();
    const I = j ? j(h) : h.ownerDocument, H = qe.call(
      I || h,
      h,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Z = H.nextNode();
    for (; Z; )
      Z.data = qs(Z.data), Z = H.nextNode();
    const ce = (x = h.querySelectorAll) === null || x === void 0 ? void 0 : x.call(h, "template");
    ce && Qn(ce, (_e) => {
      Vn(_e.content) && ra(_e.content);
    });
  }, $s = function(h) {
    const x = E ? E(h) : null;
    return typeof x != "string" || Fe(x) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    h.nodeType !== A(h) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Vn = function(h) {
    if (!A || typeof h != "object" || h === null)
      return !1;
    try {
      return A(h) === Nt.documentFragment;
    } catch {
      return !1;
    }
  }, wi = function(h) {
    if (!A || typeof h != "object" || h === null)
      return !1;
    try {
      return typeof A(h) == "number";
    } catch {
      return !1;
    }
  };
  function cr(K, h, x) {
    K.length !== 0 && Qn(K, (I) => {
      I.call(t, h, x, Bn);
    });
  }
  const ky = function(h, x) {
    return !!(Gt && h.hasChildNodes() && !wi(h.firstElementChild) && rt(Fd, h.textContent) && rt(Fd, h.innerHTML) || Gt && h.namespaceURI === ar && x === "style" && wi(h.firstElementChild) || h.nodeType === Nt.processingInstruction || Gt && h.nodeType === Nt.comment && rt(Kd, h.data));
  }, Ty = function(h, x, I) {
    if (!Sr[x] && yu(x) && ($e.tagNameCheck instanceof RegExp && rt($e.tagNameCheck, x) || $e.tagNameCheck instanceof Function && $e.tagNameCheck(x)))
      return !1;
    if (Go && !or[x]) {
      const H = k(h), Z = y(h);
      if (Z && H) {
        const ce = Z.length;
        for (let _e = ce - 1; _e >= 0; --_e) {
          const Ke = h === I ? p(Z[_e], !0) : Z[_e];
          H.insertBefore(Ke, g(h));
        }
      }
    }
    return zr(h), !0;
  }, hu = function(h, x, I, H) {
    return h.length === 0 ? x : x === I || x === H ? dt(x) : x;
  }, gu = function(h, x) {
    if (cr(P.beforeSanitizeElements, h, null), h !== x && k(h) === null)
      return Ns && Oi(h), !0;
    if ($s(h))
      return zr(h), !0;
    const I = Fe(E ? E(h) : h.nodeName);
    if (fe = hu(P.uponSanitizeElement, fe, kt, Q), cr(P.uponSanitizeElement, h, {
      tagName: I,
      allowedTags: fe
    }), h !== x && k(h) === null)
      return Ns && Oi(h), !0;
    if (ky(h, I))
      return zr(h), !0;
    if (Sr[I] || !(Tt.tagCheck instanceof Function && Tt.tagCheck(I)) && !fe[I]) {
      const Z = Ty(h, I, x);
      return Z === !1 && cr(P.afterSanitizeElements, h, null), Z;
    }
    if ((A ? A(h) : h.nodeType) === Nt.element && !my(h) || (I === "noscript" || I === "noembed" || I === "noframes") && rt(xv, h.innerHTML))
      return zr(h), !0;
    if (sr && h.nodeType === Nt.text) {
      const Z = qs(h.textContent);
      h.textContent !== Z && (Zn(t.removed, {
        element: h.cloneNode()
      }), h.textContent = Z);
    }
    return cr(P.afterSanitizeElements, h, null), !1;
  }, mu = function(h, x, I) {
    if (Ei[x] || Gt && x === "patchsrc" || Gt && x === "for" && h !== "label" && h !== "output" || Pi && (x === "id" || x === "name") && (I in r || I in fy))
      return !1;
    const H = Se[x] || Tt.attributeCheck instanceof Function && Tt.attributeCheck(x, h);
    if (!(vr && rt(ee, x))) {
      if (!(Ps && rt(Me, x))) {
        if (H) {
          if (!Yo[x]) {
            if (!rt(Je, Ii(I, Dt, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && h !== "script" && wd(I, "data:") === 0 && iu[h])) {
                if (!(Kn && !rt(_r, Ii(I, Dt, "")))) {
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
          !(yu(h) && ($e.tagNameCheck instanceof RegExp && rt($e.tagNameCheck, h) || $e.tagNameCheck instanceof Function && $e.tagNameCheck(h)) && ($e.attributeNameCheck instanceof RegExp && rt($e.attributeNameCheck, x) || $e.attributeNameCheck instanceof Function && $e.attributeNameCheck(x, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && $e.allowCustomizedBuiltInElements && ($e.tagNameCheck instanceof RegExp && rt($e.tagNameCheck, I) || $e.tagNameCheck instanceof Function && $e.tagNameCheck(I)))
        ) return !1;
      }
    }
    return !0;
  }, xy = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), yu = function(h) {
    return !xy[ji(h)] && rt(un, h);
  }, _y = function(h, x, I, H) {
    if (M && typeof d == "object" && typeof d.getAttributeType == "function" && !I)
      switch (d.getAttributeType(h, x)) {
        case "TrustedHTML":
          return ne(H);
        case "TrustedScriptURL":
          return Ee(H);
      }
    return H;
  }, Cy = function(h, x, I, H) {
    try {
      I ? h.setAttributeNS(I, x, H) : h.setAttribute(x, H), $s(h) ? zr(h) : Nd(t.removed);
    } catch {
      fn(x, h);
    }
  }, bu = function(h) {
    cr(P.beforeSanitizeAttributes, h, null);
    const x = h.attributes;
    if (!x || $s(h))
      return;
    Se = hu(P.uponSanitizeAttribute, Se, Cr, te);
    const I = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Se,
      forceKeepAttr: void 0
    };
    let H = x.length;
    const Z = Fe(h.nodeName);
    for (; H--; ) {
      const ce = x[H], _e = ce.name, Ke = ce.namespaceURI, xt = ce.value, _t = Fe(_e), ia = xt;
      let ht = _e === "value" ? ia : nv(ia);
      if (I.attrName = _t, I.attrValue = ht, I.keepAttr = !0, I.forceKeepAttr = void 0, cr(P.uponSanitizeAttribute, h, I), ht = I.attrValue, ru && (_t === "id" || _t === "name") && wd(ht, nu) !== 0 && (fn(_e, h), ht = nu + ht), Gt && rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ht)) {
        fn(_e, h);
        continue;
      }
      if (_t === "attributename" && Od(ht, "href")) {
        fn(_e, h);
        continue;
      }
      if (!I.forceKeepAttr) {
        if (!I.keepAttr) {
          fn(_e, h);
          continue;
        }
        if (!Ai && rt(_v, ht)) {
          fn(_e, h);
          continue;
        }
        if (sr && (ht = qs(ht)), !mu(Z, _t, ht)) {
          fn(_e, h);
          continue;
        }
        ht = _y(Z, _t, Ke, ht), ht !== ia && Cy(h, _e, Ke, ht);
      }
    }
    cr(P.afterSanitizeAttributes, h, null);
  }, Ls = function(h) {
    let x = null;
    const I = pu(h);
    for (cr(P.beforeSanitizeShadowDOM, h, null); x = I.nextNode(); )
      if (cr(P.uponSanitizeShadowNode, x, null), gu(x, h), bu(x), Vn(x.content) && Ls(x.content), (A ? A(x) : x.nodeType) === Nt.element) {
        const Z = _(x);
        Vn(Z) && (na(Z), Ls(Z));
      }
    cr(P.afterSanitizeShadowDOM, h, null);
  }, na = function(h) {
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
      const H = I.node, ce = (A ? A(H) : H.nodeType) === Nt.element, _e = y(H);
      if (_e)
        for (let Ke = _e.length - 1; Ke >= 0; --Ke)
          x.push({
            node: _e[Ke],
            shadow: null
          });
      if (ce) {
        const Ke = E ? E(H) : null;
        if (typeof Ke == "string" && Fe(Ke) === "template") {
          const xt = H.content;
          Vn(xt) && x.push({
            node: xt,
            shadow: null
          });
        }
      }
      if (ce) {
        const Ke = _(H);
        Vn(Ke) && x.push({
          node: null,
          shadow: Ke
        }, {
          node: Ke,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(K) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, I = null, H = null, Z = null;
    if (Xo = !K, Xo && (K = "<!-->"), typeof K != "string" && !wi(K) && (K = cv(K), typeof K != "string"))
      throw bn("dirty is not a string, aborting");
    if (!t.isSupported)
      return K;
    V ? (fe = Q, Se = te) : ta(h), (P.uponSanitizeElement.length > 0 || P.uponSanitizeAttribute.length > 0) && (fe = dt(fe)), P.uponSanitizeAttribute.length > 0 && (Se = dt(Se)), t.removed = [];
    const ce = Ns && typeof K != "string" && wi(K);
    if (ce) {
      by(K);
      const xt = E ? E(K) : K.nodeName;
      if (typeof xt == "string") {
        const _t = Fe(xt);
        if (!fe[_t] || Sr[_t])
          throw Rs(K), bn("root node is forbidden and cannot be sanitized in-place");
      }
      if ($s(K))
        throw Rs(K), bn("root node is clobbered and cannot be sanitized in-place");
      try {
        na(K);
      } catch (_t) {
        throw Rs(K), _t;
      }
    } else if (wi(K))
      x = fu("<!---->"), I = x.ownerDocument.importNode(K, !0), I.nodeType === Nt.element && I.nodeName === "BODY" || I.nodeName === "HTML" ? x = I : x.appendChild(I), na(I);
    else {
      if (!tt && !sr && !R && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return M && dn ? ne(K) : K;
      if (x = fu(K), !x)
        return tt ? null : dn ? q : "";
    }
    x && Pe && zr(x.firstChild);
    const _e = ce ? K : x;
    try {
      const xt = pu(_e);
      for (; H = xt.nextNode(); )
        gu(H, _e), bu(H), Vn(H.content) && Ls(H.content);
    } catch (xt) {
      throw ce && (Rs(K), Qn(t.removed, (_t) => {
        _t.element && Oi(_t.element);
      })), xt;
    }
    if (ce)
      return Qn(t.removed, (xt) => {
        xt.element && Oi(xt.element);
      }), sr && ra(K), K;
    if (tt) {
      if (sr && ra(x), Pt)
        for (Z = et.call(x.ownerDocument); x.firstChild; )
          Z.appendChild(x.firstChild);
      else
        Z = x;
      return (Se.shadowroot || Se.shadowrootmode) && (Z = X.call(n, Z, !0)), Z;
    }
    let Ke = R ? x.outerHTML : x.innerHTML;
    return R && fe["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && rt(kv, x.ownerDocument.doctype.name) && (Ke = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Ke), sr && (Ke = qs(Ke)), M && dn ? ne(Ke) : Ke;
  }, t.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ta(K), V = !0, Q = fe, te = Se;
  }, t.clearConfig = function() {
    Bn = null, V = !1, Q = null, te = null, M = $, q = "";
  }, t.isValidAttribute = function(K, h, x) {
    Bn || ta({});
    const I = Fe(K), H = Fe(h);
    return mu(I, H, x);
  }, t.addHook = function(K, h) {
    typeof h == "function" && nt(P, K) && Zn(P[K], h);
  }, t.removeHook = function(K, h) {
    if (nt(P, K)) {
      if (h !== void 0) {
        const x = tv(P[K], h);
        return x === -1 ? void 0 : rv(P[K], x, 1)[0];
      }
      return Nd(P[K]);
    }
  }, t.removeHooks = function(K) {
    nt(P, K) && (P[K] = []);
  }, t.removeAllHooks = function() {
    P = zd();
  }, t;
}
var vv = Sg();
function Mv({ structureProtectionMode: e = "off" }) {
  const [t] = de(), r = ie(void 0), [n, i] = he(void 0), s = ke((o) => {
    r.current = o, i(o);
  }, []);
  return z(() => {
    if (e === "off")
      return;
    const o = (p) => {
      const m = fg(p);
      if (!m)
        return !1;
      const g = O();
      return e === "protected" ? g && gg(g, m) ? (p.preventDefault(), !0) : !1 : m !== "deleteBackward" && m !== "deleteForward" ? !1 : a(m, p);
    }, a = (p, m) => {
      const g = O(), y = r.current;
      if (y && g && Md(g, y)) {
        if (s(void 0), m.preventDefault(), p !== y.intent)
          return !0;
        const _ = oe(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (_) {
            const S = _.getParent(), A = _.getPreviousSibling(), E = _.getNextSibling();
            _.remove(), A ? mg(A) : E && v(E) ? E.select(0, 0) : S?.selectStart();
          }
        } else y.kind === "selection" ? N(g) && g.removeText() : me(_) && yg(_);
        return !0;
      }
      if (!g)
        return !1;
      const k = wS(g, p);
      if (k) {
        if (k.kind === "verse") {
          const _ = wc();
          _.add(k.node.getKey()), dr(_);
        } else {
          const _ = _o();
          _.anchor.set(k.node.getKey(), 0, "element"), _.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), dr(_);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: p }), m.preventDefault(), !0;
      }
      if (N(g) && !g.isCollapsed() && Nl(g)) {
        const _ = g.getNodes().filter(ye).map((E) => E.getKey()), { anchor: S, focus: A } = g;
        return s({
          kind: "selection",
          intent: p,
          key: _[0],
          anchor: { key: S.key, offset: S.offset, type: S.type },
          focus: { key: A.key, offset: A.offset, type: A.type }
        }), m.preventDefault(), !0;
      }
      return !1;
    }, c = (p) => {
      if (e !== "protected")
        return !1;
      const m = O();
      return !m || !ai(m) ? !1 : (p instanceof Event && p.preventDefault(), !0);
    }, l = (p, m) => {
      if (!p)
        return !1;
      const g = vv.sanitize(p), y = new DOMParser().parseFromString(g, "text/html"), k = RS(yb(t, y)), _ = O();
      return N(_) && _.insertNodes(k), m.preventDefault(), !0;
    }, u = (p) => {
      if (e !== "protected")
        return !1;
      const m = O();
      return m && ai(m) ? (p.preventDefault(), !0) : l(p.clipboardData?.getData("text/html"), p);
    }, d = (p) => {
      if (e !== "protected")
        return !1;
      const m = O();
      return m && ai(m) ? (p.preventDefault(), !0) : N(m) ? l(p.dataTransfer?.getData("text/html"), p) : !1;
    }, f = () => {
      const p = r.current;
      p && t.getEditorState().read(() => {
        Md(O(), p) || s(void 0);
      });
    };
    return je(
      t.registerCommand(yr, o, Ie),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(Xr, c, Ne),
      t.registerCommand(fr, u, Ie),
      t.registerCommand(Df, c, Ie),
      t.registerCommand(So, d, Ie),
      t.registerCommand(Co, c, Ie),
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
const lN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function Ev({ textDirection: e }) {
  const [t] = de();
  return Av(t, e), null;
}
function Av(e, t) {
  z(() => (jd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && jd(e, t);
  })), [e, t]);
}
function jd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function Pv() {
  const [e] = de();
  return Nv(e), null;
}
function Nv(e) {
  z(() => {
    if (!e.hasNodes([Te, Et, we, He, mt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return je(
      e.registerNodeTransform(He, Ov),
      e.registerNodeTransform(He, (t) => wv(t, e)),
      e.registerNodeTransform(mt, Bd),
      e.registerNodeTransform(Et, Bd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(mt, (t) => {
        ds(An("va"), t), ds(An("vp"), t);
      })
    );
  }, [e]);
}
function Ov(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || B(r) || U(n) || U(r) || ve(n) || ve(r) || Ue(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Ue(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
  // presentation, not paragraph prose: it must never gain a trailing space of its own, even
  // when it sits directly in a paragraph (a verse's \va/\vp value has no CharNode parent to
  // exempt it the way a char span's own run is already protected).
  ae(e, ue) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  ze(n))
    return;
  if (ye(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ye(r) && cl(e);
}
function wv(e, t) {
  const r = e.getParent();
  !Ue(r) || !e.isAttached() || Za(t, e.getKey()) && !Za(t, r.getKey()) && r.insertAfter(e);
}
function Bd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; ve(t); )
    t = t.getLastChild();
  (U(t) || v(t) && ve(t.getParent())) && e.insertBefore(be(" "));
}
function wl(e) {
  if (!B(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Hc(n)) ? void 0 : e;
}
function Rv(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (F(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function qv() {
  const e = O();
  if (!(!N(e) || !e.isCollapsed()))
    return wl(Rv(e.anchor));
}
function $v(e) {
  const t = O();
  let r;
  return N(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = vg(e.target)), r ? wl(st(r, B)) : void 0;
}
function vg(e) {
  const t = Qy(e)?.anchorNode;
  if (Zi(t))
    return Pr(t) ?? void 0;
}
function Lv(e) {
  if (O())
    return;
  const t = vg(e);
  return t ? wl(st(t, B)) : void 0;
}
function Iv() {
  const [e] = de(), t = dg(qv);
  return z(() => {
    const r = (n) => {
      Qr(Zr), t(n);
    };
    return je(e.registerCommand(gr, () => {
      const n = Lv(e.getRootElement());
      return n && r(n), !1;
    }, Sn), e.registerCommand(ci, (n) => {
      const i = $v(n);
      return i && r(i), !1;
    }, Sn));
  }, [e, t]), null;
}
function Dv({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = V_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return C(B_, { trigger: e, items: i });
}
function Uv({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, u = We(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? C(zv, { trigger: e, harness: i }) : C(Dv, { trigger: e, scriptureReference: u, contextMarker: r, getMarkerAction: n });
}
const Fv = [" ", "*"];
function Kv(e, t) {
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
function zv({ trigger: e, harness: t }) {
  const [r] = de(), [n, i] = he(void 0), s = ie({ query: "", options: [] }), o = ie(0), a = ke((f, p, m) => {
    const g = p.find((y) => y.kind === "note" && y.marker === f);
    if (g) {
      t.apply(g, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = O();
      N(y) && y.insertText(`${e}${f}${m ? " " : ""}`);
    });
  }, [r, t, e]);
  z(() => je(r.registerCommand(yr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const g = s.current.query;
        return g ? (a(g, n.items, !1), Zy(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = O();
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
  }, Ie), r.registerCommand(Ff, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const p = t.getContext();
    return !p || p.noteMarker || p.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(p),
      session: o.current
    }), !0);
  }, ii)), [r, e, t, n, a]);
  const c = ke(() => i(void 0), []), l = ke((f, p) => {
    s.current = { query: f, options: p };
  }, []), u = ke((f) => {
    const { markerMenuItem: p, applyOpts: m } = f;
    t.apply(p, m);
  }, [t]), d = We(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    Kv(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && C(Kh, { isOpen: !0, children: ({ placement: f }) => C(
    Bh,
    { options: d ?? [], onSelectOption: u, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? Fv : void 0 },
    n.session
  ) });
}
function Mg(e) {
  return e.replaceAll(L, "~").replace(/ {2,}/g, (r) => L.repeat(r.length));
}
function jv(e) {
  return e.replaceAll(L, " ").replaceAll("~", L);
}
function Bv(e) {
  return e.replace(/ {2,}/g, " ");
}
let fo;
function Vv(e) {
  e && (fo = e);
}
function Eg(e) {
  return Fo(e);
}
function Wv(e, t) {
  return e.isEmpty() ? Rf : Ag(e.toJSON(), t);
}
function Ag(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Eo(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Rf;
  if (r.some(hx)) {
    fo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Pg(r), i = Yt(n, t);
  return i ? { type: Ar, version: Er, content: i } : void 0;
}
function Hv(e, t) {
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
function Gv(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Re({
    type: Lt.getType(),
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
  return c = Fp(r, a, c), Re({
    type: Lt.getType(),
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
  return a = Fp(t, o, a), Re({
    type: mt.getType(),
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
  if (r?.markerMode === "editable" && !Eg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(L) && (t[0] = a.slice(1));
  }
  return Re({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function Qv(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function Zv(e, t) {
  const { unknownAttributes: r } = e;
  return Re({ type: gh, ...r, content: t });
}
function eM(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Re({ type: bh, marker: r, ...n, content: t });
}
function tM(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Re({
    type: Th,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function rM(e, t) {
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
function ni(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Re({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Yp({ sid: n, eid: i, ...s }, o)
  });
}
function nM(e) {
  return e.text;
}
function iM(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Re({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function sM(e) {
  const { marker: t } = e;
  return {
    type: to,
    marker: t === "" ? void 0 : t
  };
}
function Vd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function oM(e, t, r, n, i) {
  const s = er.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const u = ni({
      type: s,
      marker: si,
      eid: l
    });
    i.push(u);
  }), o.forEach((l) => {
    const u = ni({
      type: s,
      marker: vn,
      sid: l
    });
    i.push(u);
  }), t.length === 0) {
    const l = ni({
      type: s,
      marker: vn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = ni({
      type: s,
      marker: si
    });
    i.push(l);
  }
  (!n || !gp(n)) && t.forEach((l) => {
    const u = ni({
      type: s,
      marker: si,
      eid: l
    });
    i.push(u);
  });
}
function Yt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, u = a, d = a, f = a, p = a, m = a, g = a, y = a;
    switch (a.type) {
      case Ht.getType():
        i.push(
          Hv(
            l,
            Yt(l.children, t)
          )
        );
        break;
      case Tr.getType():
        i.push(Gv(a));
        break;
      case Lt.getType():
        i.push(
          Jv(
            u,
            Yt(u.children, t)
          )
        );
        break;
      case Et.getType():
      case mt.getType():
        i.push(Yv(a));
        break;
      case Te.getType():
        i.push(
          Xv(
            d,
            Yt(d.children, t, void 0, !0),
            t
          )
        );
        break;
      case ot.getType():
        i.push(
          Qv(
            f,
            Yt(f.children, t)
          )
        );
        break;
      case Dn.getType():
        i.push(
          Zv(
            a,
            Yt(a.children, t)
          )
        );
        break;
      case Ti.getType():
        i.push(
          eM(
            a,
            Yt(a.children, t)
          )
        );
        break;
      case xi.getType():
        i.push(
          tM(
            a,
            Yt(a.children, t)
          )
        );
        break;
      case we.getType():
        i.push(
          rM(
            p,
            Yt(p.children, t, p.caller)
          )
        );
        break;
      case Dr.getType():
      case Ir.getType():
      case Zt.getType():
      case Kf.getType():
      case xr.getType():
        break;
      case it.getType():
        if (s = Yt(
          g.children,
          t,
          r,
          n
        ), s) {
          const k = g.typedIDs[Jr];
          if (k)
            oM(s, k, o, e[c + 1], i), o = k;
          else {
            const _ = s.shift();
            _ && (typeof _ == "string" ? Vd(i, _) : i.push(_)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case er.getType():
        i.push(ni(a));
        break;
      case He.getType():
        if (m.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !Ms(m.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        m.text !== L && !m.text.startsWith(Dc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        m[_s]?.textType !== "attribute" && (!r || m.text !== wt(r))) {
          let k = nM(m);
          Eg(t) && (n && k.startsWith(L) && (k = k.slice(1)), k = Bv(jv(k))), Vd(i, k);
        }
        break;
      case Ln.getType():
        i.push(
          iM(
            y,
            Yt(y.children, t)
          )
        );
        break;
      case Kr.getType():
        i.push(sM(a));
        break;
      case _i.getType():
        fo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        fo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Pg(e) {
  const t = e.findIndex((r) => Eo(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Pg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Bs = {
  initialize: Vv,
  deserializeEditorState: Wv
}, aM = /^sd\d*$/, cM = /* @__PURE__ */ new Set([
  ...Object.entries(Ua).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === b.Paragraph && !aM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function lM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (_p(i) || Lp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Dk(i)) {
      t && po(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Wc(i) && cM.has(i.marker) && !po(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Ng(i.children, t).forEach((s) => {
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
function Ng(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Og(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (gp(i)) {
      const s = Ng(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Wd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Wd(i, c.nodes)] });
      });
      return;
    }
    t && po(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Wd(e, t) {
  return { ...e, children: t };
}
function Og(e) {
  return Nh(e) && e.number !== "";
}
function po(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Og(r) || po(r)) : !1;
}
function uM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function dM(e) {
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
const Hd = Rg([]), fM = {
  type: Kf.getType(),
  version: 1
};
let Rl = [], se, On, wg, Mt;
function pM(e, t) {
  Rl = [], mM(e), yM(t);
}
function hM(e = 0) {
}
function gM(e, t) {
  se = t ?? Uo();
  let r;
  return e ? (e.type !== Ar && Mt?.warn(`This USJ type '${e.type}' didn't match the expected type '${Ar}'.`), e.version !== Er && Mt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${Er}'.`
  ), e.content.length > 0 ? (r = fc(Wr(e.content)), hs(se) && (r = lM(r, Mt))) : r = [Hd]) : r = [Hd], wg?.(Rl), {
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
  e && (On = e), e?.addMissingComments && (wg = e.addMissingComments);
}
function yM(e) {
  e && (Mt = e);
}
function ql() {
  return Fo(se);
}
function bM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function kM(e) {
  let { marker: t } = e;
  t !== ss && Mt?.warn(`Unexpected book marker '${t}'!`), t = t ?? ss;
  const { code: r } = e;
  (!r || !Ht.isValidBookCode(r)) && Mt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  se?.markerMode === "editable" || se?.markerMode === "visible" ? n.push(
    St("marker", Oe(t) + " " + r + L)
  ) : se?.hasGutterParaMarkers && n.push(St("marker", Oe(t) + L, !0));
  const i = bM(e.content);
  i && n.push(pt(ql() ? Mg(i) : i));
  const s = Be(e, yk);
  return Re({
    type: Ht.getType(),
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
  t !== Qs && Mt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Qs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = Be(e, bk);
  let a;
  se?.markerMode === "visible" && (a = !0);
  const c = [
    pt(Vt(t, r) ?? "")
  ];
  return se?.markerMode === "editable" && IM(i, s, c), se?.markerMode === "editable" ? Re({
    type: Lt.getType(),
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
  }) : Re({
    type: Tr.getType(),
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
  t !== Zs && Mt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Zs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (eC(se) ?? Et).getType(), c = se?.markerMode === "editable" ? Rp : Ph;
  let l, u;
  se?.markerMode === "editable" ? l = Vt(t, r) : se?.markerMode === "visible" && (u = !0);
  const d = Be(e, Ok);
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
function _M(e, t = [], r = !1) {
  let { marker: n } = e;
  Te.isValidMarker(n, On?.extraValidMarkers) || Mt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (se?.markerMode === "editable") {
    const [a] = t;
    ui(a) ? a.text = L + a.text : a && t.unshift(pt(L));
  }
  t.length === 0 && t.push(pt(Wt)), lc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = Be(e, xk);
  return s || RM(n, o, i), s || uc(e.marker ?? "", i, !1, r), Re({
    type: Te.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: Ep
  });
}
function Rg(e) {
  return {
    type: tn.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Op
  };
}
function CM(e, t = []) {
  let { marker: r } = e;
  ot.isValidMarker(r, On?.extraValidMarkers) || Mt?.warn(`Unexpected para marker '${r}'!`), r = r ?? pr;
  const n = [];
  if (Ci(se) && (se?.markerMode === "editable" ? n.push(
    yt(r),
    pt(L, br, "token")
  ) : (se?.markerMode === "visible" || se?.hasGutterParaMarkers) && n.push(
    St(
      "marker",
      Oe(r) + L,
      se?.hasGutterParaMarkers
    )
  )), n.push(...t), ql()) {
    const s = n.find(
      (o) => !Xc(o) && !(ui(o) && o.text === L)
    );
    ui(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => L.repeat(o.length)));
  }
  const i = Be(e, Pk);
  return Re({
    type: ot.getType(),
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
function $l() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function SM(e, t = []) {
  const r = Be(e, LT);
  return Re({
    ...$l(),
    type: Dn.getType(),
    unknownAttributes: r,
    children: t,
    version: mh
  });
}
function vM(e, t = []) {
  const r = Be(e, UT), n = e.marker ?? Ga, i = [];
  return se?.markerMode === "editable" ? i.push(
    yt(n),
    pt(L, br, "token")
  ) : (se?.markerMode === "visible" || se?.hasGutterParaMarkers) && i.push(
    St(
      "marker",
      Oe(n) + L,
      se?.hasGutterParaMarkers
    )
  ), i.push(...t), Re({
    ...$l(),
    type: Ti.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: kh
  });
}
function MM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Ja, a = ch(o, i) ?? o;
  se?.markerMode === "editable" ? s.push(
    yt(a),
    pt(L, br, "token")
  ) : (se?.markerMode === "visible" || se?.hasGutterParaMarkers) && s.push(
    St(
      "marker",
      Oe(a) + L,
      se?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = Be(
    e,
    KT
  );
  return Re({
    ...$l(),
    type: xi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: xh
  });
}
function EM(e, t) {
  const r = Bk(t);
  let n = () => {
  };
  return On?.noteCallerOnClick && (n = On.noteCallerOnClick), Re({
    type: Zt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Ih
  });
}
function AM(e, t) {
  let { marker: r } = e;
  we.isValidMarker(r, On?.extraValidMarkers) || Mt?.warn(`Unexpected note marker '${r}'!`), r = r ?? Fc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : gl(se?.noteMode), a = Be(e, Lb), c = se?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, u;
  se?.markerMode === "editable" ? (l = yt(r, "opening", !1, c), s || (u = yt(r, "closing"))) : se?.markerMode === "visible" && (l = St("marker", Oe(r) + " "), s || (u = St("marker", lt(r))));
  const d = [];
  let f;
  if (l && d.push(l), se?.markerMode === "editable" && !o)
    f = pt(wt(i), void 0, c), d.push(f), LM(n, d), d.push(...t);
  else {
    const p = pt(L, br, "token");
    f = EM(i, t), d.push(f, p, ...t.flatMap(PM(p)));
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
    version: op
  });
}
function PM(e) {
  return (t) => pp(t) ? [t] : [t, e];
}
function NM(e) {
  let { marker: t } = e;
  (!t || !er.isValidMarker(t, On?.extraValidMarkers)) && Mt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = Be(e, Uc), s = Xp(e);
  return Re({
    type: er.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: np
  });
}
function Gd(e, t = []) {
  return {
    type: it.getType(),
    typedIDs: { [Jr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function OM(e, t) {
  const { marker: r } = e, n = e.type, i = Be(e, fk), s = [];
  if (se?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = lh(
      n,
      r,
      i
    );
    o && s.push(St("marker", o)), a && s.push(St("attribute", a)), s.push(...t), c && s.push(St("attribute", c)), l && s.push(St("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    ui(o) && (o.mode = "token");
  }), Re({
    type: Ln.getType(),
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
function wM(e) {
  return {
    type: Kr.getType(),
    marker: e,
    text: Hi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: se?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: ph
  };
}
function yt(e, t = "opening", r = !1, n = "normal") {
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
function pt(e, t = void 0, r = "normal") {
  const n = {
    type: He.getType(),
    text: e,
    detail: 0,
    format: 0,
    mode: r,
    style: "",
    version: 1
  };
  return t !== void 0 && (n[_s] = { textType: t }), n;
}
function St(e, t, r = !1) {
  const n = {
    type: Ir.getType(),
    text: t,
    textType: e,
    version: dp
  };
  return r && (n[_s] = { [jc.key]: !0 }), n;
}
function gs(e, t) {
  return {
    type: Dr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: bp
  };
}
function lc(e, t, r = !1) {
  se?.markerMode === "editable" ? t.push(yt(e, "opening", r)) : se?.markerMode === "visible" && t.push(St("marker", Oe(e, r)));
}
function uc(e, t, r = !1, n = !1) {
  se?.markerMode === "editable" ? r ? t.push(yt("", "selfClosing")) : t.push(yt(e, "closing", n)) : se?.markerMode === "visible" && t.push(
    St(
      "marker",
      r ? lt("") : lt(e, n)
    )
  );
}
function RM(e, t, r) {
  if (se?.markerMode !== "editable" || !t) return;
  const n = ur(t, vo(e));
  n && r.push(pt(n, "attribute"));
}
function Jd(e, t) {
  if (e.type !== "ms" || se?.markerMode !== "editable" && se?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = Be(e, Uc), o = Qp(
    n,
    i,
    s,
    Xp(e)
  ), a = ur(o, Mo(r ?? ""));
  if (!a) return;
  const c = L + a;
  se?.markerMode === "editable" ? t.push(pt(c, "attribute")) : t.push(St("attribute", c));
}
function qM(e, t) {
  const r = e.marker ?? "";
  if (se?.markerMode === "editable") {
    const n = [];
    lc(r, n), Jd(e, n), uc(r, n, !0), t.push(gs("milestone", n));
  } else
    lc(r, t), Jd(e, t), uc(r, t, !0);
}
function Yd(e, t, r) {
  t !== void 0 && r.push(
    gs(e, [
      yt(e, "opening"),
      pt(L + t, "attribute"),
      yt(e, "closing")
    ])
  );
}
function $M(e, t) {
  se?.markerMode === "editable" && (Yd("va", e.altnumber, t), Yd("vp", e.pubnumber, t));
}
function LM(e, t) {
  e !== void 0 && t.push(
    gs("cat", [
      yt("cat", "opening"),
      pt(L + e, "attribute"),
      yt("cat", "closing")
    ])
  );
}
function IM(e, t, r) {
  e !== void 0 && r.push(
    gs("ca", [
      yt("ca", "opening"),
      pt(L + e, "attribute"),
      yt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    gs("cp", [
      yt("cp", "opening"),
      pt(L + t, "attribute")
    ])
  );
}
function Xd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function DM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Qd(e, t) {
  t.marker === vn && t.sid !== void 0 && e.push(t.sid), t.marker === si && t.eid !== void 0 && DM(e, t.eid);
}
function dc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Gd(o, [...n])] : o, c = e[i];
  Qd(n, c);
  const l = dc(
    e.slice(i + 1, s),
    Xd(t, i + 1),
    c.marker === vn,
    n
  ), u = Gd(l, [...n]), d = e[s];
  Qd(n, d);
  const f = dc(
    e.slice(s + 1),
    Xd(t, s + 1),
    d.marker === vn,
    n
  );
  return [...a, u, ...f];
}
function Wr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(pt(ql() ? Mg(i) : i));
    else if (!i.type)
      Mt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ht.getType():
          n.push(kM(i));
          break;
        case Lt.getType():
          n.push(TM(i));
          break;
        case mt.getType():
          se?.hasSpacing || n.push(fM), n.push(xM(i)), $M(i, n);
          break;
        case Te.getType():
          n.push(
            _M(i, Wr(i.content, !0), t)
          );
          break;
        case ot.getType():
          n.push(CM(i, Wr(i.content)));
          break;
        case we.getType():
          n.push(AM(i, Wr(i.content)));
          break;
        case er.getType():
          ip(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Rl?.push(i.sid)), n.push(NM(i)), qM(i, n);
          break;
        case Kr.getType():
          n.push(wM(i.marker ?? ""));
          break;
        case gh:
          n.push(SM(i, Wr(i.content)));
          break;
        case bh:
          n.push(vM(i, Wr(i.content)));
          break;
        case Th:
          n.push(MM(i, Wr(i.content)));
          break;
        default:
          Mt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(OM(i, Wr(i.content)));
      }
  }), dc(n, r);
}
function fc(e) {
  const t = e.findIndex(
    (n) => _p(n) || Lp(n) || Wc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    DT(n)
  );
  if (t >= 0) {
    const n = fc(e.slice(0, t)), i = e[t], s = fc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Nh(n)))
    return [Rg(e)];
  return e;
}
const qr = {
  initialize: pM,
  reset: hM,
  serializeEditorState: gM
};
function qg(e) {
  if (e && !w(e)) {
    if (v(e)) return e;
    if (F(e))
      for (const t of e.getChildren()) {
        const r = qg(t);
        if (r) return r;
      }
  }
}
function UM() {
  const e = O();
  if (!N(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((v(t) && !w(t) ? Nn(t) : void 0) && v(t)) {
      const i = be(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      di(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = qg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(L) ? L : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return v(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of $g(e)) {
    if (!Nn(t)) continue;
    di(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(L) && r.setTextContent(n.slice(L.length));
  }
  return !0;
}
function $g(e) {
  const [t, r] = Rc(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!v(a) || w(a) || ae(a, ue) === "attribute") return;
    const l = a.getTextContentSize(), u = c === 0 ? n : 0, d = c === s.length - 1 ? Math.min(i, l) : l;
    if (u >= d) return;
    const f = a.splitText(u, d), p = f.length === 3 ? f[1] : d === l ? f[f.length - 1] : f[0];
    p && o.push(p);
  }), o;
}
function FM() {
  const e = O();
  if (!N(e)) return !1;
  const t = e.focus.getNode();
  return Nn(t) ? me(nl(t)) : !1;
}
function Lg() {
  let e = O();
  if (!N(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (w(t) && !ol(t, e.anchor.offset)) {
    const c = t.getParent();
    if (U(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = O(), !N(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!v(t) || w(t) || !Nn(t)) return !1;
  const r = nl(t);
  if (!me(r)) return !1;
  const n = be(""), i = e.anchor.offset;
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
  return U(a) ? il(a) : o.select(0, 0), !0;
}
const Ig = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Ip(Ve().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = O(), t = Vp(e), r = ul(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = Jk(0, o);
        const a = Ex(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Wp(c) && Jc(parseInt(n, 10), c);
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
  return we.isValidMarker(e, t) || !!Ig[e] || ot.isValidMarker(e, t) || Te.isValidMarker(e, t);
}
function KM(e, t) {
  return Te.isNoteContentMarker(e) ? !1 : Te.isValidMarker(e, t);
}
function Dg(e, t, r, n, i, s) {
  const o = Uh(
    e,
    void 0,
    void 0,
    t,
    n ?? Uo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function hc(e, t, r, n, i, s, o) {
  if (we.isValidMarker(e, n?.extraValidMarkers)) {
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
  const a = HM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const u = O();
      N(u) && (Mh(u), l.noteText = u.getTextContent());
      const { content: d, highlightInserted: f } = a.action(l), p = Zu(d, qr, r), m = oa(p);
      if (N(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), k = Nn(g), _ = u.anchor.key === u.focus.key;
        if (U(m) && k && _ && !Pa(m, o))
          BM(
            u,
            m,
            g,
            r?.markerMode === "editable"
          );
        else if (U(m) && !_ && !Pa(m, o) && VM(u))
          WM(u, m, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          GM(
            u,
            () => oa(p)
          );
        else if (F(m) && !m.isInline()) {
          const S = u.insertParagraph();
          if (S) {
            const A = S.getChildren();
            m.append(...A), S.replace(m), me(m) && Kt(m) || m.selectStart();
          }
        } else if (U(m) && v(g) && !w(g) && U(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Pa(m, o)) {
          const S = g.getParent();
          if (U(S)) {
            const A = u.anchor.offset;
            if (A === 0) g.insertBefore(m);
            else if (A >= g.getTextContentSize()) g.insertAfter(m);
            else {
              const [j] = g.splitText(A);
              j.insertAfter(m);
            }
            m.getChildren().forEach((j) => {
              w(j) && j.setNested(!0);
            });
            const E = m.getChildren().find((j) => v(j) && !w(j));
            E && v(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : m.selectEnd();
          }
        } else if (v(g) && !w(g) && u.isCollapsed() && (B(y) || U(y) && B(y.getParent()))) {
          const S = U(y) ? y : void 0, A = S ? zM(g, u.anchor.offset) : [];
          let j = (S ?? g).insertAfter(m);
          if (Ur(m)) {
            const M = {
              ...r || Uo(),
              markerMode: "hidden"
            }, q = Zu(
              d,
              qr,
              M
            ), $ = oa(q);
            j = j.insertAfter($);
          }
          if (A.length > 0 && S) {
            const M = ho(S).append(...A);
            j.insertAfter(M), S.isEmpty() && S.remove();
          } else v(j.getNextSibling()) || j.insertAfter(be(L));
          F(j) && j.selectEnd();
        } else if (u.insertNodes([m]), iE(m), f) {
          const S = wc();
          S.add(m.getKey()), dr(S);
        } else if (U(m)) {
          const S = m.getChildren().find((A) => v(A) && !w(A));
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
function zM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Pa(e, t) {
  return ((t ?? no).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function jM(e, t) {
  t && e.getChildren().forEach((i) => {
    w(i) && i.setNested(!0);
  }), e.getChildren().some((i) => w(i) && i.getMarkerSyntax() === "closing") || e.append(ft(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function BM(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && U(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !v(r)) {
    const o = e.anchor.offset;
    if (v(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else v(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
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
    i.insertBefore(t), v(i) && !i.getTextContent().startsWith(L) && i.setTextContent(L + i.getTextContent());
    const o = t.getChildren().find((a) => v(a) && !w(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => v(o) && !w(o));
  v(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function VM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (w(n) || U(n)) continue;
    if (!v(n) || n.getType() !== He.getType() || ae(n, ue) === "attribute") return !1;
    const i = nl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Nn(n) && (r = !0);
  }
  return r;
}
function WM(e, t, r) {
  const n = $g(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Nn(a)) return;
    di(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(L) && c.setTextContent(l.slice(L.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(L) || i.setTextContent(L + i.getTextContent());
  const s = t.getChildren().find((a) => v(a) && !w(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function HM(e, t) {
  let r = Ig[e];
  return r || (ot.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: ot.getType(), marker: e, content: [] }] })
  } : Te.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: Te.getType(), marker: e };
      return (Te.isValidFootnoteMarker(e) || Te.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function GM(e, t) {
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
    s || (s = t(), c.insertBefore(s), l = !0, U(s) && s.getChildren().some((d) => w(d) && d.getMarkerSyntax() === "opening") && jM(s, U(s.getParent()))), YM(c, s, l);
  }), (v(s) || F(s)) && s.selectEnd();
}
function gi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Ll(e) {
  return ve(e) || B(e) || B(e.getParent());
}
function Ug(e, t, r, n, i) {
  if (!Ll(e)) {
    if (v(e))
      return JM(e, t, r, n, i);
    if (F(e) && e.isInline())
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
  } else if (F(t)) {
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
    gc(e, t), r && U(t) && t.getChildren().some((s) => w(s)) && v(e) && !w(e) && !e.getTextContent().startsWith(L) && e.setTextContent(L + e.getTextContent());
  }
}
function gc(e, t) {
  let r = e.getTextContent();
  if (v(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    cl(n), v(n) || t.insertBefore(be(" "));
  }
  return r;
}
function Fg(e, t, r) {
  if (e.isCollapsed()) {
    const u = e.anchor.getNode(), d = e.anchor.offset, f = wn(u, t);
    if (!f) return !1;
    const p = v(u) ? u.getTextContentSize() : 0;
    if (Zd(f, r), v(u) && u.isAttached()) {
      const m = u.getTextContentSize(), g = Math.max(p - m, 0), y = Math.max(0, Math.min(d - g, m)), k = O();
      N(k) && k.setTextNodeRange(u, y, u, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = gi(e);
  if (!Dl(n, t, s, o)) return !1;
  const a = Il(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((u) => {
    const d = wn(u, t);
    if (!d || c.has(d.getKey())) return;
    c.add(d.getKey());
    const f = Bg(d, a);
    f && (Zd(f, r), l = !0);
  }), Vg(a, i), l;
}
function Zd(e, t) {
  e.getChildren().forEach((n) => {
    Rt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Wt) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    v(n) && i.startsWith(L) && n.setTextContent(i.slice(L.length));
  }), La(e);
}
function Il(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Ug(
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
  for (; r && !me(r); ) {
    if (B(r)) return;
    !n && U(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Kg(e) {
  const t = st(
    e,
    (r) => B(r) || me(r)
  );
  return B(t);
}
function zg(e) {
  return e.filter(
    (t) => !Ll(t) && (v(t) || F(t) && t.isInline())
  );
}
function XM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!v(i) || Ll(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function QM(e, t, r) {
  return e.getChildren().some(
    (n) => F(n) && t.some((i) => n.isParentOf(i)) && !jg(n, r)
  );
}
function Dl(e, t, r, n, i) {
  const s = zg(e), o = XM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = wn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !QM(l, s, o);
  });
}
function jg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Rt(r));
}
function Bg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, u] of n.entries())
    if (r.has(u.getKey()))
      i.push(l);
    else if (F(u) && t.some((d) => u.isParentOf(d))) {
      if (!jg(u, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Rt(n[s - 1]) && (s -= 1), o < n.length - 1 && Rt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(ho(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(ho(e).append(...c)), e;
}
function ho(e) {
  return eb(e);
}
function Vg(e, t) {
  const r = O(), n = e[0], i = e[e.length - 1];
  if (!N(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function ZM(e, t, r) {
  if (e.isCollapsed()) {
    const l = wn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Du(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = gi(e);
  if (!Dl(n, r, i, s, t)) return !1;
  const o = Il(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const u = wn(l, r);
    if (!u || a.has(u.getKey()) || (a.add(u.getKey()), u.getMarker() === t)) return;
    const d = Bg(u, o);
    d && (Du(d, t), c = !0);
  }), c;
}
function eE(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = gi(e);
  if (!!!i?.some(
    (y) => Dl(s, y, o, a)
  ) && !tE(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = O();
    N(k) && Fg(k, y, n) && (l = !0);
  });
  const u = O();
  if (!N(u)) return l;
  const d = u.isBackward(), [f, p] = gi(u), m = Il(
    u.getNodes(),
    f,
    p
  );
  if (m.length === 0) return l;
  const g = m.filter(
    (y) => !Kg(y) && !wn(y, t)
  );
  return g.length > 0 && (rE(g).forEach((y) => nE(y, t)), l = !0), Vg(m, d), l;
}
function tE(e, t) {
  return zg(e).some(
    (r) => !Kg(r) && !wn(r, t)
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
    (a) => U(a) && a.getMarker() === t
  ), s = i ? ho(i) : Or(t);
  e[0].insertBefore(s), s.append(...e), i === r || gc(e[0], s);
}
function iE(e) {
  ye(e) && (cl(e.getPreviousSibling()), wh(e.getNextSibling()));
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
}, ef = "psc-active-text", Us = "psc-empty-text";
function sE({ viewOptions: e }) {
  const [t] = de(), r = ie(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return z(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(ef), r.current = o, o && t.getElementByKey(o)?.classList.add(ef);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        ci,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Us}`);
          if (!c) return !1;
          const l = Pr(c);
          if (!ye(l)) return !1;
          const u = l.getParent();
          if (!F(u)) return !1;
          const d = l.getIndexWithinParent() + 1;
          return u.select(d, d), !1;
        },
        gt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: u } = o.read(() => {
          const d = Na(), f = oE(), p = [], m = [];
          return Ve().getChildren().forEach((g) => {
            if (!F(g)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = cE(g);
            p.push(...y), m.push(...k);
          }), { newActiveKey: d, activeVerseKey: f, emptyKeys: p, nonEmptyKeys: m };
        });
        a !== r.current && i(a), l.forEach((d) => {
          d === c ? t.getElementByKey(d)?.classList.remove(Us) : t.getElementByKey(d)?.classList.add(Us);
        }), u.forEach((d) => t.getElementByKey(d)?.classList.remove(Us));
      }),
      t.registerCommand(
        $c,
        () => (i(void 0), !1),
        gt
      ),
      t.registerCommand(
        Uf,
        () => {
          const o = t.getEditorState().read(Na);
          return o !== r.current && i(o), !1;
        },
        gt
      )
    ];
    return i(t.getEditorState().read(Na)), je(...s);
  }, [t, n]), null;
}
function Na() {
  return aE(O() ?? void 0)?.getKey();
}
function oE() {
  const e = O(), t = rn(e);
  if (t)
    return t.getChildren().slice(0, Sl(t)).findLast(ye)?.getKey();
  if (!N(e)) return;
  const r = e.anchor, n = r.getNode(), i = n.getTopLevelElement();
  if (!F(i)) return;
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
    ye(o[c]) && (a = o[c].getKey());
  return a;
}
function aE(e) {
  const t = rn(e);
  if (t) return t.getTopLevelElement() ?? t;
  if (N(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function cE(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ye(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ye(c)) break;
      if (!(tr(c) || w(c)) && c.getTextContent().replaceAll(Gs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
const lE = /^\+/;
function Ul(e, t) {
  const r = t.replace(lE, "");
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
function mc(e, t) {
  const r = Hg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function go(e, t, r) {
  const n = F(e) ? e.getChildren().filter(w) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function uE(e, t, r, n, i) {
  const s = Ul(n, t);
  if (!s) {
    go(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && go(e, "invalid", i);
}
function Yi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (U(s)) {
      const o = s.getMarker();
      i || uE(s, o, t, r, n), Yi(s, t, r, n, i || o === "xq");
    } else if (ye(s)) {
      if (i) continue;
      const o = Ul(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else B(s) ? Yi(s, s.getMarker(), r, n, i) : Ue(s) || F(s) && Yi(s, t, r, n, i);
}
function dE(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = Ul(e, a);
    if (!c) {
      go(o, "unknown", r), mc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    mc(n, l) || go(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ve().getChildren())
    Ue(o) || (bt(o) || Qe(o) ? i(o, o.getMarker()) : le(o) ? (i(o, o.getMarker()), s(o) && Yi(o, o.getMarker(), e, r, !1)) : F(o) && s(o) && Yi(o, "p", e, r, !1));
  return r;
}
function fE(e) {
  return !!e?.includes("(basic)");
}
function pE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Jg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && pc(e, t);
}
function Fl(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Yg(e, t) {
  const r = [];
  for (const n of t) {
    const i = Fl(e, n);
    i && mc(r, i);
  }
  return r;
}
function Vs(e, t) {
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
  const n = Yg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Jg(i.marker, r)
  ).filter((i) => {
    const s = Fl(e, i.marker);
    return s !== void 0 && Gg(n, s);
  }).map((i) => Vs(i, "paragraph")).sort(yc);
}
function gE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Jg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Vs(c, "character")).sort(yc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Vs(c, "character")),
    ...a.map((c) => Vs(c, "note"))
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
  const n = bc(e, t, r), i = Yg(e, t.previousParaMarkers), s = Fl(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Gg(i, s) ? "ip" : "p", c = n.findIndex((u) => u.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const ir = String.raw`\w-`, Xg = "a-z0-9", xE = `[a-z][${Xg}]*`, _E = new RegExp(
  String.raw`^\\(\+?[${ir}]+)[ \u00A0]$`
), Qg = new RegExp(String.raw`^\\(\+?[${ir}]+)$`), CE = new RegExp(String.raw`^\\\+?[${ir}]*\*$`), SE = new RegExp(
  String.raw`^\\(\+?[${ir}]+)(?:[ \u00A0]|$)`
), vE = new RegExp(
  String.raw`^\\(\+?)([${ir}]+)`
), ME = new RegExp(
  String.raw`\\\+?[${ir}]+(?:\\?\*|[ \u00A0])`
), EE = new RegExp(
  String.raw`\\\+?[${ir}]*$`
), AE = new RegExp(
  String.raw`^\\(${xE})( |$)`
), PE = new RegExp(
  String.raw`\\[${Xg}+*]*$`,
  "i"
), ct = "￼";
function Zg(e) {
  return e.length > 1 && e.startsWith(L) && e.charAt(1) !== ct ? e.slice(1) : e;
}
function tf(e) {
  return Xc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function em(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = qr.serializeEditorState(
    {
      type: Ar,
      version: Er,
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
  for (; tf(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== wt(e.getCaller())) return { failure: "caller" };
  c++;
  let u = a.length;
  for (; u > c && tf(a[u - 1]) === "closing"; )
    u--;
  const d = a.slice(c, u);
  return d.length === 0 ? { failure: "empty" } : { children: d };
}
function Fs(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function Ui(e, t) {
  EE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += ct;
}
function Bt(e) {
  return e.replaceAll(L, " ");
}
function NE(e, t, r = !1) {
  if (Fo(t)) return Bt(e);
  if (e === L) return " ";
  const n = r && e.startsWith(L), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(L, "~");
}
function Xi(e) {
  const t = e.getTextContent();
  return In(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Kl(e, t) {
  const r = e[t];
  if (!Ye(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Oo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function tm(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function zl(e, t) {
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
function Bo(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && zc(e);
}
function rm(e, t) {
  return Ye(e) ? !Bo(e.getMarker(), t) : B(e) || Ue(e) ? !0 : De(e) ? jl(e) : U(e) ? nm(e, t) : !1;
}
function nm(e, t) {
  if (sT(e)) return !0;
  const r = e.getMarker();
  return !Wb(r) && t(r) === void 0;
}
const zt = "", jt = "";
function rf(e) {
  return e.flatMap((t) => ze(t) ? t.getChildren() : [t]);
}
function Bi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Ye(s)) {
      const o = Kl(e, i);
      Bo(s.getMarker(), r) && tm(o) ? (t.push(
        zt,
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
      ), Bi(rf(o), t, r), t.push(jt)) : t.push(ct), i += o.length;
    } else if (De(s)) {
      const o = zl(e, i);
      jl(s) ? t.push(ct) : (t.push(
        zt,
        "verse",
        Bt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Bi(rf(o), t, r), t.push(jt)), i += o.length;
    } else w(s) ? t.push(zt, "marker", Bt(s.getTextContent()), jt) : cn(s) ? t.push(zt, "unmatched", Bt(s.getTextContent()), jt) : rm(s, r) ? t.push(ct) : xs(s) ? t.push(" ") : v(s) ? t.push(
      Bt(
        n ? Zg(Xi(s)) : Xi(s)
      )
    ) : U(s) ? (t.push(zt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Bi(s.getChildren(), t, r, !0), t.push(jt)) : F(s) ? (t.push(zt, s.getType()), Bi(s.getChildren(), t, r), t.push(jt)) : t.push(ct);
  }
}
function vi(e, t) {
  const r = [];
  return Bi(e, r, t), r.join("");
}
function $r(e) {
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
function im(e, t, r) {
  return t === "closing" ? lt(e, r) : t === "selfClosing" ? lt("") : Oe(e, r);
}
function Oa(e, t) {
  const r = e[t];
  if (!(!r || Bl(r) !== "attribute-run"))
    return $r(r) ?? [];
}
function Mi(e, t) {
  const r = [];
  return Vi(e, r, t), r.join("");
}
function Vi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Bl(s);
    if (o === "ms") {
      const l = s, u = Oa(e, i + 1);
      u && Bo(l.marker ?? "", r) ? (t.push(
        zt,
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
      ), Vi(u, t, r), t.push(jt), i += 1) : t.push(ct);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(ct);
        continue;
      }
      t.push(
        zt,
        "verse",
        Bt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let u = 0, d = Oa(e, i + 1 + u);
      for (; d; )
        Vi(d, t, r), u++, d = Oa(e, i + 1 + u);
      t.push(jt), i += u;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        zt,
        "marker",
        Bt(
          im(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(zt, "char", JSON.stringify(l.unknownAttributes ?? null)), Vi($r(s) ?? [], t, r, !0), t.push(jt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(ct);
      continue;
    }
    if (o === "unmatched") {
      t.push(zt, "unmatched", Bt(mi(s) ?? "")), t.push(jt);
      continue;
    }
    const a = mi(s);
    if (a !== void 0) {
      t.push(Bt(n ? Zg(a) : a));
      continue;
    }
    const c = $r(s);
    c ? (t.push(zt, o), Vi(c, t, r), t.push(jt)) : t.push(ct);
  }
}
function Vo(e) {
  let t = 0;
  for (const r of e) {
    const n = $r(r);
    if (n) {
      t += Vo(n);
      continue;
    }
    const i = mi(r);
    if (i !== void 0)
      for (const s of i) s === ct && t++;
  }
  return t;
}
function ms(e, t, r, n, i) {
  Rn(e.getChildren(), t, r, n, i);
}
function Rn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (w(a))
      Fs(t, a, Bt(a.getTextContent()));
    else if (Ye(a)) {
      s();
      const c = Kl(e, o);
      Bo(a.getMarker(), r) && tm(c) ? Rn(c, t, r, n) : Ui(t, [a, ...c]), o += c.length;
    } else if (B(a) || Ue(a))
      s(), Ui(t, [a]);
    else if (De(a)) {
      s();
      const c = zl(e, o);
      jl(a) ? Ui(t, [a, ...c]) : (Fs(t, a, Bt(Xi(a))), Rn(c, t, r, n)), o += c.length;
    } else if (U(a))
      s(), nm(a, r) ? Ui(t, [a]) : ms(a, t, r, n, { pending: !0 });
    else if (xs(a))
      s(), Fs(t, a, " ");
    else if (v(a)) {
      const c = In(a) || ae(a, ue) === "attribute", l = s() && !c;
      Fs(
        t,
        a,
        c ? Bt(Xi(a)) : NE(Xi(a), n, l)
      );
    } else F(a) ? ms(a, t, r, n, i) : (s(), Ui(t, [a]));
  }
}
function Vl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ue(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ms(e, i, t, r), i;
}
function sm(e, t) {
  let r = 0;
  const n = (i) => {
    if (v(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(ct);
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
function kc(e, t = []) {
  for (const r of e)
    De(r) ? t.push(r) : F(r) && kc(r.getChildren(), t);
  return t;
}
function om(e) {
  let t = 0;
  const r = (n) => {
    if (v(n))
      for (const i of n.getTextContent()) i === ct && t++;
    else F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Fn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === ct && t++;
    else r.content && (t += Fn(r.content));
  return t;
}
function OE(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), F(i) && ms(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const ys = /\s/;
function am(e) {
  return e.filter(Wo).length;
}
function Wo(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return v(t) && !w(t) && ae(t, ue) === "attribute";
}
function wE(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return w(t) || Wo(e);
}
function nf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Wo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let u = 0; u < l; u++)
      ys.test(e.text[o.start + u]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Wl(e, t, r) {
  const n = nf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !wE(i) ? nf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: am(e.spans) };
}
function wa(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return w(t) && t.getMarkerSyntax() !== "opening";
}
function RE(e) {
  const t = oe(e.key);
  if (!w(t)) return !1;
  const r = t.getParent();
  return U(r) ? (r.selectNext(0, 0), !0) : !1;
}
function qE(e) {
  const t = oe(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = De(t) ? zl(r, n) : Ye(t) ? Kl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function cm(e, t, r) {
  const { text: n, spans: i } = e, s = am(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, u = !1;
  e: for (const d of i) {
    const f = d.end - d.start, p = !d.isSentinel && !wa(d);
    if (!(o && Wo(d))) {
      if (u) {
        if (!p) continue;
        a = { key: d.key, offset: 0 };
        break;
      }
      for (let m = 0; m < f; m++) {
        const g = n[d.start + m];
        if (c === 0 && (l === 0 || !ys.test(g))) {
          if (p) {
            a = { key: d.key, offset: m };
            break e;
          }
          u = !0;
          continue e;
        }
        c > 0 ? ys.test(g) || c-- : l--;
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
    if (d && wa(d) && RE(d) || d?.isSentinel && qE(d)) return;
    const f = [...i].reverse().find((p) => !p.isSentinel && !wa(p));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const d = oe(a.key);
    if (d && v(d)) {
      d.select(a.offset, a.offset);
      return;
    }
  }
  r.find(F)?.selectStart();
}
function lm(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(F)?.selectStart();
      return;
    }
    cm(OE(e, n, i), t, e);
  }
}
function $E(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(F)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Rn(e, s, n, i), cm({ text: s.text, spans: s.spans }, t, e);
}
function um(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = Vl(g, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const k = s.text.length;
    y.spans.forEach(
      (_) => s.spans.push({ ..._, start: _.start + k, end: _.end + k })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = O();
  if (N(c)) {
    for (let g = c.anchor.getNode(); g; g = g.getParent())
      if (e.some((y) => y.is(g))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Wl(s, c.anchor.key, c.anchor.offset));
  }
  const l = Lr(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Fn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const u = qr.serializeEditorState(
    { type: Ar, version: Er, content: l },
    r
  );
  if (Mi(u.root.children, n) === vi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const d = u.root.children.map((g) => To(g));
  if (om(d) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = kc(e).map((g) => ({
    number: g.getNumber(),
    sid: g.getSid()
  })), p = e[0];
  d.forEach((g) => p.insertBefore(g)), sm(d, s.sentinels), e.forEach((g) => g.remove());
  const m = kc(d);
  for (let g = 0; g < f.length && g < m.length; g++)
    m[g].getNumber() === f[g].number && m[g].setSid(f[g].sid);
  return lm(d, o, a, n, r), !0;
}
function dm(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !we.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const u = n[i];
    if (!w(u) || u.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(At(s) || v(s) && s.getTextContent() === wt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const u = n[a - 1];
    if (!w(u) || u.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Rn(c, l, t, r), { out: l, contentNodes: c };
}
function fm(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(ct)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function LE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = dm(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const u = O();
  if (N(u)) {
    for (let A = u.anchor.getNode(); A; A = A.getParent())
      if (e.is(A)) {
        l = !0;
        break;
      }
    u.isCollapsed() && (c = Wl(o, u.anchor.key, u.anchor.offset));
  }
  const d = Lr(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (d.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Fn(d) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = d;
  if (d.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const p = f.content ?? [], m = fm(p), g = em(e, p, m, r);
  if (g.failure !== void 0)
    return g.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      g.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Vo(g.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== m;
  if (y && e.setCategory(m), Mi(g.children, n) === vi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const k = g.children.map((A) => To(A));
  if (om(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const _ = a[0];
  if (_)
    k.forEach((A) => _.insertBefore(A));
  else {
    const A = e.getChildren().find((E) => w(E) && E.getMarkerSyntax() === "closing");
    k.forEach((E) => A ? A.insertBefore(E) : e.append(E));
  }
  sm(k, o.sentinels);
  const S = new Set(o.sentinels.flat().map((A) => A.getKey()));
  return a.forEach((A) => {
    S.has(A.getKey()) || A.remove();
  }), $E(k, c, l, n, r), !0;
}
const pm = /* @__PURE__ */ new Set(["ca", "cp"]), Hl = "cp";
function hm(e) {
  if (!mr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ms(e, t, hr, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Lr(r, { getMarker: hr }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Hl)
  );
}
function Ho(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (U(r) && pm.has(r.getMarker()) || hm(r)) {
      t.push(r);
      continue;
    }
    le(r) && r.getMarker() === Hl && t.push(r);
    break;
  }
  return t;
}
function IE(e) {
  const t = (n) => U(n) && pm.has(n.getMarker()) || hm(n);
  if (t(e) || le(e) && e.getMarker() === Hl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Le(n)) return n;
      if (!t(n)) return;
    }
}
function gm(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Ho(e);
  if (n.some((s) => le(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Rn(e.getChildren(), i, t, r), Rn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function DE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Ho(e)], o = gm(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = O();
  if (N(l)) {
    for (let m = l.anchor.getNode(); m; m = m.getParent())
      if (s.some((g) => g.is(m))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Wl(o, l.anchor.key, l.anchor.offset));
  }
  const u = Lr(o.text, { getMarker: n }), [d] = u;
  if (u.length === 0 || typeof d != "object" || d.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Fn(u) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (d.sid = e.getSid());
  const f = qr.serializeEditorState(
    { type: Ar, version: Er, content: u },
    r
  );
  if (Mi(f.root.children, n) === vi(s, n)) {
    let m = !1;
    return e.getNumber() !== (d.number ?? "") && (e.setNumber(d.number ?? ""), m = !0), e.getAltnumber() !== d.altnumber && (e.setAltnumber(d.altnumber), m = !0), e.getPubnumber() !== d.pubnumber && (e.setPubnumber(d.pubnumber), m = !0), m || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), m;
  }
  const p = f.root.children.map((m) => To(m));
  return Le(p[0]) ? (p.forEach((m) => e.insertBefore(m)), s.forEach((m) => m.remove()), lm(p, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function bs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ue(n)) return;
    !t && (B(n) || le(n) || Le(n)) && (t = n), tb(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? IE(r) : void 0) ?? t;
}
function Xt(e, t) {
  const r = bs(e);
  return r ? B(r) ? LE(r, t) : Le(r) ? DE(r, t) : um([r], t) : !1;
}
const UE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function sf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !UE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Ws(e, t) {
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
          t.push(`\\${n}`), sf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Ws(r.content, t), sf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Ws(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Ws(r.content, t);
      }
    }
}
function of(e, t, r) {
  const n = bs(e);
  if (!le(n)) return !1;
  const i = O();
  if (!N(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let u = i.anchor.getNode(); u; u = u.getParent())
    if (n.is(u)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Vl(n, t, r);
  if (!o) return !1;
  const a = Lr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const u of o.text)
    ys.test(u) || c.set(u, (c.get(u) ?? 0) + 1);
  const l = [];
  Ws(a, l);
  for (const u of l.join("").replaceAll(L, "~")) {
    if (ys.test(u)) continue;
    const d = c.get(u);
    d !== void 0 && d > 0 && c.set(u, d - 1);
  }
  for (const u of c.values()) if (u > 0) return !0;
  return !1;
}
function Gl(e, t) {
  return mm(e, t, b.Paragraph);
}
function FE(e, t) {
  return mm(e, t, b.Character);
}
function mm(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== b.Unknown ? i === r : !(we.isValidMarker(n) || zc(n));
}
function KE(e) {
  return [ft(e), Ao()];
}
function Jl(e) {
  qt(e, 2);
}
function zE(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Yl(e) {
  const t = zE(e);
  e.splice(0, 0, KE(e.getMarker())), t && Jl(e);
}
function mo(e, t) {
  e.setMarker(t), Yl(e), Jl(e);
}
function jE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!In(n)) {
    if (v(n) && !w(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(L), Ct(n, ue, br), n.setMode("token");
      return;
    }
    if (Gp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Ao());
  }
}
function af(e, t, r) {
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
function Qi(e) {
  for (let t = e; t; t = t.getParent())
    if (le(t)) return t;
}
function BE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Qi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Qi(r.getNode())?.is(s) ?? !1, a = Qi(n.getNode())?.is(s) ?? !1;
    return !(o && !af(r, s, "start") || a && !af(n, s, "end"));
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
  const n = Qi(r.focus.getNode());
  n && t.add(n.getKey());
}
function WE(e) {
  const t = O();
  !N(t) || t.isCollapsed() || t.getNodes().some((r) => w(r)) && (Tc(e), t.removeText());
}
const HE = new RegExp(
  String.raw`^\\\+?([${ir}]+)(?:[ \u00A0]|$)`
);
function GE(e, t) {
  const r = HE.exec(e.getTextContent());
  return !!r && Gl(r[1], t);
}
function JE(e, t) {
  if (!Ci(t.viewOptions)) return;
  if (Rt(e.getFirstChild())) {
    jE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (GE(e, t.getMarker)) return;
    Yl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => le(o) && !o.is(e))) {
      mo(e, pr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (le(r)) {
    const n = e.getChildren().filter((a) => !In(a)), i = O();
    let s = !1;
    if (N(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Qi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || F(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && qt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  mo(e, pr);
}
function YE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = ur(t, vo(e.getMarker()));
  return r === "" ? void 0 : r;
}
function XE(e) {
  const t = e.getChildren().filter((s) => !w(s) && ae(s, ue) !== "attribute"), r = t[0];
  r && v(r) && r.getTextContent().startsWith(L) && r.setTextContent(r.getTextContent().slice(1));
  const n = YE(e);
  n && t.push(be(n));
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
      (c) => v(c) && !w(c) && c.getTextContent() === wt(s)
    ), a = bi(e).some(({ node: c }) => w(c));
    if (!o && !a) return;
    r.forEach((c) => {
      w(c) || (v(c) && c.getTextContent() === wt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
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
  i && !s && Xt(e, t);
}
function xc(e, t, r) {
  if (!w(e.getFirstChild()) && r?.markerMode === "editable" && Ci(r)) {
    mo(e, t);
    return;
  }
  Gh(e, t);
}
function ym() {
  const e = O();
  if (!N(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = bm(e);
    return t !== "removed" ? t : (_c(), "handled");
  }
  return _c() ? "handled" : "declined";
}
function eA(e, t) {
  if (!t) return e;
  const r = AE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function cf(e, t) {
  const r = O();
  if (!N(r)) return "declined";
  if (r.isCollapsed()) {
    if (!km())
      return "declined";
  } else {
    const s = bm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => eA(s, t)
  );
  lf(n ?? "");
  for (const s of i)
    _c(), lf(s);
  return "handled";
}
function tA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Pr(n);
  if (!i) return !1;
  const s = rr(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !v(i) || w(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function bm(e) {
  const t = rr(e.anchor.getNode()), r = rr(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), rA() ? "removed" : "needs-plain-split");
}
function lf(e) {
  if (e === "") return;
  const t = O();
  N(t) && t.insertText(e);
}
function rA() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = rr(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => w(r) && r.getMarkerSyntax() === "opening");
}
function km() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = rr(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function _c() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = km();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Or("fp", { closed: "false" });
  i.append(ft("fp"));
  const s = v(t) && !w(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
  return i.getChildren().every(w) && i.append(be(Wt)), Tm(i), !0;
}
function Tm(e) {
  const t = e.getChildren().find((r) => !w(r));
  if (v(t)) {
    const r = t.getTextContent().startsWith(L) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (F(t)) {
    Tm(t);
    return;
  }
  e.selectEnd();
}
function nA(e) {
  const t = [];
  let r = e;
  for (; r; )
    U(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function iA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ve().getChildren()) {
    if (t && n.is(t)) break;
    (bt(n) || Qe(n) || le(n)) && r.push(n.getMarker());
  }
  return r;
}
function sA(e) {
  let t = e;
  for (; F(t); ) {
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
  if (Rt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && In(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(sA(i)) && r === 0 : !1;
}
function aA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Rt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && In(i) && t.is(i) && r === 0;
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
function lA(e) {
  const t = rg(e);
  if (t) return { node: t, offset: 0, hasTextSelection: !1 };
  if (!N(e)) return;
  const { focus: r } = e;
  return {
    node: r.getNode(),
    offset: r.offset,
    hasTextSelection: !e.isCollapsed()
  };
}
function uA() {
  const e = lA(O());
  if (!e) return;
  const { node: t, offset: r, hasTextSelection: n } = e, i = st(t, le), s = !n && (!i || aA(i, t, r)) ? "paragraph" : "character", o = rr(t);
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
    inMarkerText: ol(t, r),
    anchorRect: cA()
  };
}
function dA() {
  const e = O();
  if (!N(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!v(t) || w(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = PE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function fA(e, t, r) {
  xc(e, t, r), Jl(e);
}
function pA(e, t, r) {
  const n = O();
  if (!N(n)) return;
  const i = n.focus.getNode(), s = st(i, le);
  if (t === "backslash" && s && oA(s, i, n.focus.offset)) {
    fA(s, e, r);
    return;
  }
  _m(e, r);
}
function hA(e, t) {
  const r = O();
  return !N(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function xm(e) {
  const t = O();
  return N(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function gA(e, t, r, n) {
  if (N(O()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && dA(), e.kind === "closeTag") {
    xm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && ym() !== "declined") return;
  if (e.kind === "paragraph" && ot.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    pA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (we.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Dg(
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
  ).action({ editor: Yr(), reference: r });
}
function _m(e, t) {
  const r = O();
  if (!N(r)) return;
  const n = Ci(t);
  if (Lg()) {
    const s = O();
    if (!N(s)) return;
    const o = st(s.anchor.getNode(), le);
    if (!o) return;
    o.setMarker(e), n && Yl(o);
    return;
  }
  const i = r.insertParagraph();
  le(i) && (n ? mo(i, e) : i.setMarker(e));
}
function mA() {
  const [e] = de();
  return z(() => e.registerCommand(Lc, () => !0, gt), [e]), null;
}
function yA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = SE.exec(e)?.[1];
  return r === void 0 ? !1 : !Gl(r, t);
}
function Cm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !yA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!le(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (le(i))
    return [i, r];
}
function Sm(e, t) {
  const r = Cm(e, t.getMarker);
  return r !== void 0 && um(r, t);
}
function bA(e, t) {
  const r = O();
  N(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function vm(e) {
  const t = vE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function kA(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = vm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function TA(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (B(e.getParent()) && v(r)) {
    const n = r.getNextSibling();
    if (U(n)) {
      il(n);
      return;
    }
  }
  v(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function uf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = vm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  TA(e);
}
function df(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Mm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Xt(e, r);
  const n = kA(e), i = e.getParent();
  if (le(i)) {
    if (!Gl(t, r.getMarker))
      return Sm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Xt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), df(s, t) && uf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (U(i) || B(i)) {
    const s = t.replace(/^\+/, "");
    if (!(U(i) ? FE(t, r.getMarker) : we.isValidMarker(s)))
      return Xt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Xt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(w).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (bA(c, lt(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), df(a, s) && uf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Xt(e, r);
}
function xA(e) {
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
function _A(e, t) {
  const r = e.getTextContent();
  if (an(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (ze(e.getParent()) && Qc(e)) {
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
    const n = _E.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Mm(e, n[1], t);
      return;
    }
    if (CE.test(r)) {
      t.pendingKeys.delete(e.getKey()), Xt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = lt(e.getMarker(), e.getNested());
    if (U(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = O(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = be(r.slice(i.length));
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
  if (hh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Em(e) {
  if (!Qf(e)?.length)
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
const Fi = Em("v"), SA = Em("c"), ff = /^[ \u00A0]*$/;
function pf(e, t, r) {
  const n = e.getNextSibling();
  if (v(n) && n.getType() === He.getType() && n.getMode() === "normal" && ae(n, ue) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = be(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function vA(e, t) {
  const r = e.getTextContent(), n = Vt("v", e.getNumber());
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
    if (l && ff.test(l[2] ?? "")) {
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
      const [, l, u, d] = c, f = O(), p = N(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(u), e.setTextContent(Vt("v", u));
      const m = p !== void 0 && p >= l.length ? Math.min(p - l.length, d.length) : void 0;
      pf(e, d, m);
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
  if (t.pendingKeys.delete(e.getKey()), ff.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Vt("v", o)), a && pf(e, a, a.length);
}
const MA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function EA(e, t) {
  const r = e.getParent();
  if (!B(r) || r.getIsCollapsed() !== !1 || !Qf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!w(c) || c.getMarkerSyntax() !== "opening") break;
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
  if (!v(t)) return;
  const r = Vt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = SA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Am(e) {
  if (Ye(e)) {
    const { wrapper: t } = Oo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (B(e)) {
    const { wrapper: t } = eh(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Le(e)) {
    const t = [], r = th(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = nh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (De(e)) {
    const t = [], r = as(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = as(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function PA(e) {
  const t = O();
  if (!N(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Am(e).some((n) => r.is(n));
}
function NA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && le(e) && Gp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ls)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && As(l, e) && (i || PA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Am(e))
    l.remove(), n = !0;
  let s = !1;
  if (U(e)) {
    const l = cT(e);
    l !== void 0 && zb(l) && (oh(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of ls)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (rx(l, e)) {
        ds(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Ch(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      $o(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function hf(e) {
  return v(e) && e.getType() === He.getType() && e.getMode() === "normal" && ae(e, ue) !== "attribute";
}
function OA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = oe(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && hf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && hf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Ks(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = OA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = oe(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (w(c)) {
      e.pendingKeys.delete(a);
      const p = c.getTextContent();
      if (an(c)) continue;
      const m = Qg.exec(p);
      c.getMarkerSyntax() === "opening" && m ? n = Mm(c, m[1], e) || n : r === "idle" && of(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Sm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Xt(c, e) || n;
      continue;
    }
    const l = Pn(c)?.owner, u = l?.isAttached() ? l : c, d = u.getKey();
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
      if (r === "idle" && of(u, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(d);
        continue;
      }
      n = Xt(u, e) || n;
    }
  }
  return n;
}
function Pm(e) {
  if (cn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (U(t)) return Wi(t) !== void 0;
  return !1;
}
function wA(e) {
  const t = Pn(e);
  if (!t) return !1;
  const r = An(t.kind);
  return !$o(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function gf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (bt(t) || Ue(t) || yh(t)) return !0;
  return !1;
}
function RA(e, t) {
  const r = e.getTextContent(), n = ae(e, ue), i = e.getParent();
  if (n !== "attribute" && Le(i)) {
    r.replace(/^[ \u00A0]+/, "") === Vt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (EA(e, t)) return;
  if (n === "attribute") {
    wA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Pm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !gf(e))
      t.pendingKeys.add(e.getKey());
    else if (ih(e)) t.pendingKeys.add(e.getKey());
    else if (Le(bs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      U(a) && ah(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (gf(e)) return;
  const s = O(), o = N(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (ME.test(o)) {
    if (Xb(r)) {
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
function qA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Ch(e, t);
}
function $A(e) {
  const t = (r) => {
    if (w(r)) {
      an(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (cn(r)) {
      hh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of ls)
      n.settleScope !== "none" && n.ownerPredicate(r) && (As(n, r) || qA(n, r)) && e.pendingKeys.add(r.getKey());
    if (De(r)) {
      r.getTextContent() !== Vt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (v(r)) {
      if (r.getType() !== He.getType() || ae(r, ue) === "attribute") return;
      const n = r.getParent();
      if (Le(n)) {
        r.getTextContent() !== Vt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Pm(r) || i.includes("//") || ih(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (U(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ue(r) && !bt(r)) {
      if (ze(r) && r.getChildrenSize() === 0) {
        const n = Pn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      F(r) && r.getChildren().forEach(t);
    }
  };
  Ve().getChildren().forEach(t);
}
const yo = "usfm:", Nm = "usfmopen", Om = "usfmclosed";
function LA(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const IA = new RegExp(
  [yo, Nm, Om].map(LA).join("|")
), DA = "\uFEFF", UA = /^usfm_(.+)$/;
function FA(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function KA(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function zA(e) {
  return e.startsWith(yo) ? KA(e.slice(yo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function wm(e) {
  for (const t of e.classList) {
    const r = UA.exec(t);
    if (r) return r[1];
  }
}
function jA(e) {
  const t = wm(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function BA(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(yo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Nm) && !n.contains(Om)) && wm(r) !== void 0)
      return !0;
  }
  return !1;
}
function Rm(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(zA(e.nodeValue ?? ""));
    return;
  }
  if (!FA(e)) return;
  const { classList: n } = e, i = (u) => e.childNodes.forEach((d) => Rm(d, u, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? jA(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function VA(e) {
  if (!IA.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !BA(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => Rm(n, !1, r)), r.join("").replaceAll(DA, "").replaceAll(L, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function WA(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ae(e, ue);
  if (r === "attribute" || r === br) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (bt(o) || Le(o) || Ue(o)) return;
  const n = t.startsWith(L) && U(e.getParent()), i = n ? t.slice(1) : t, s = (n ? L : "") + i.replace(/ (?=[ \u00A0])/g, L).replace(new RegExp("(?<=\\u00A0) ", "g"), L);
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
function Cc(e, t) {
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
const mf = String.raw`\\(?:\+?[${ir}]+\*?|\*)`, JA = new RegExp(
  String.raw`(?<=${mf})\u00A0|\u00A0(?=${mf})`,
  "g"
);
function Xl(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(JA, " ").replaceAll(L, "~");
}
const qm = new RegExp(
  String.raw`\\c(?![${ir}])[ \u00A0]*[^\s\\]*`,
  "g"
), $m = new RegExp(String.raw`\\id(?![${ir}])[^\n\\]*`, "g"), YA = new RegExp(
  String.raw`^(?:${qm.source}|${$m.source})`
);
function Ql(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(qm, "").replace($m, "");
    return YA.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function Sc(e) {
  if (v(e) && ae(e, ue) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (ze(t)) return !0;
  return !1;
}
function XA(e) {
  return Sc(e.anchor.getNode()) || Sc(e.focus.getNode());
}
function QA(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && Sc(t.getNode());
}
function ZA(e, t) {
  const n = QA(e) ? t : Xl(Ql(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function eP(e, t = !1, r = () => {
}) {
  const n = Cc(e, Yr()._config.namespace);
  if (!n) return !1;
  const i = O(), s = N(i) && XA(i);
  if (!s && n.isInternal || t && N(i) && ai(i))
    return !1;
  const { text: o } = n;
  if (!o || !N(i)) return !1;
  if (e?.preventDefault(), s)
    return ZA(i, o), !0;
  const a = Xl(Ql(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = Yr();
  return c.forEach((u, d) => {
    if (d > 0 && l.dispatchCommand(Hs, void 0), u === "") return;
    const f = O();
    N(f) && f.insertText(u);
  }), !0;
}
function tP(e) {
  if (e.getTextContent() !== L) return !1;
  const t = e.getParent();
  return B(t) ? !At(e.getPreviousSibling()) : !1;
}
function rP(e, t) {
  if (t || e.getTextContent() !== L) return "";
  const r = e.getParent();
  if (!B(r) || !At(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function nP(e) {
  const t = e.getParent();
  return (B(t) ? t.getCaller() : void 0) || ts;
}
function iP(e) {
  const t = e.getParent();
  return !t || sn(t) === void 0;
}
function Lm(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Rc(e);
  let l = "", u = !0;
  for (const d of t) {
    if (F(d) && !d.isInline()) {
      !u && iP(d) && (l += `
`), u = !d.isEmpty();
      continue;
    }
    if (u = !1, At(d))
      (d !== n || !e.isCollapsed()) && (l += (d === r ? "" : " ") + nP(d));
    else if (v(d)) {
      let f = d.getTextContent();
      d === r ? d === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : d === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += tP(d) ? "" : f.replaceAll(L, " ") + rP(d, d === n);
    } else (Cs(d) || xs(d)) && (d !== n || !e.isCollapsed()) && (l += d.getTextContent().replaceAll(L, " "));
  }
  return l;
}
function Im(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function sP(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => bt(r) || Le(r)
    )
  );
}
function oP(e) {
  const t = O();
  if (!N(t) || t.isCollapsed()) return;
  const r = Lm(t), n = {
    "text/plain": r,
    "text/html": Im(r)
  };
  if (Ko() || sP(t)) return n;
  const i = sb(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function yf(e, t, r) {
  const n = O();
  if (!N(n) || n.isCollapsed())
    return (!e || !("clipboardData" in e)) && !lg();
  const i = oP(t);
  return i ? Dm(e, t, n, i, r) : !1;
}
function Dm(e, t, r, n, i) {
  const s = !n["text/plain"], o = i && t.isEditable();
  if (!e || !("clipboardData" in e))
    return s || ob(t, null, n), o && r.removeText(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !s)
    for (const [a, c] of Object.entries(n)) e.clipboardData.setData(a, c);
  return o && r.removeText(), !0;
}
const Um = qc(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Ra(e) {
  const t = e();
  return Qr(qf), Qr(rp), t;
}
const bf = 8, aP = 1e3;
function ei(e, t) {
  const r = De(e) ? ["va", "vp"] : Ye(e) ? ["milestone"] : B(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    ax(An(n), e, t.pendingKeys);
}
function cP(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Ic) || i.updateTags.has(rs)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = oe(o);
        if (!c) continue;
        const l = Pn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = oe(o.getKey());
        c?.isAttached() && An(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
      }
    });
  };
  return je(
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
    e.registerMutationListener(He, r),
    e.registerMutationListener(xr, r),
    e.registerMutationListener(Ir, r),
    e.registerMutationListener(Dr, r)
  );
}
function vc(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = O();
  return r ? t ? gg(r, t) : N(r) && ai(r) : !1;
}
function lP(e, t, r) {
  return je(
    e.registerCommand(
      fr,
      (n) => {
        if (Ko() || vc(t)) return !1;
        const i = Cc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? Xl(Ql(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = cf(o, t.getMarker);
          if (a === "declined" && tA(e) && (a = cf(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      Ne
    ),
    e.registerCommand(
      fr,
      (n) => {
        const i = Cc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !FM()) return !1;
        const o = O();
        return t.structureProtectionMode === "protected" && N(o) && ai(o) ? !1 : (n?.preventDefault(), N(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Hs, void 0), a === "") return;
          const l = O();
          N(l) && l.insertText(a);
        }), !0);
      },
      Ie
    ),
    e.registerCommand(
      fr,
      () => (t.splitExpected.current = !0, !1),
      gt
    )
  );
}
function uP({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off"
}) {
  const [s] = de(), o = e?.markerMode === "editable", a = !!e && Fo(e), c = ie(void 0), l = ie(n);
  return z(() => {
    l.current = n;
    const u = c.current;
    u && (e && (u.viewOptions = e), u.getMarker = t ?? hr, u.logger = r, u.structureProtectionMode = i);
  }, [e, t, r, n, i]), z(() => {
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
    const d = QT(s, u.pendingKeys);
    let f, p = !1, m, g = !1, y = !1, k = 0;
    const _ = () => k < bf ? !1 : (u.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${bf} consecutive mutating passes; leaving ${u.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...u.pendingKeys].join(", ")}`
    ), !0), S = (M, q = "departure") => {
      s.update(() => {
        k = Ra(
          () => Ks(u, M, q)
        ) ? k + 1 : 0;
      });
    };
    let A;
    const E = () => {
      if (A !== void 0 && clearTimeout(A), A = void 0, y || u.pendingKeys.size === 0) return;
      const M = l.current ?? aP;
      M < 0 || (A = setTimeout(() => {
        A = void 0, !(y || u.pendingKeys.size === 0) && (p || _() || S(void 0, "idle"));
      }, M));
    }, j = je(
      s.registerNodeTransform(xr, (M) => {
        if (s.isComposing()) return;
        _A(M, u);
        const q = Pn(M);
        q && (De(q.owner) || B(q.owner) || Le(q.owner) || Ye(q.owner) && Oo(q.owner).wrapper === void 0) && ei(q.owner, u);
      }),
      s.registerNodeTransform(mt, (M) => {
        s.isComposing() || (vA(M, u), ei(M, u));
      }),
      s.registerNodeTransform(Lt, (M) => {
        s.isComposing() || (AA(M), M.isAttached() && ei(M, u));
      }),
      s.registerNodeTransform(ot, (M) => {
        s.isComposing() || JE(M, u);
      }),
      s.registerNodeTransform(Te, (M) => {
        if (!s.isComposing()) {
          ZE(M, u);
          for (const q of ["separator", "char"])
            M.isAttached() && As(An(q), M) && u.pendingKeys.add(M.getKey());
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
      s.registerNodeTransform(er, (M) => {
        s.isComposing() || ei(M, u);
      }),
      s.registerNodeTransform(Dr, (M) => {
        if (s.isComposing()) return;
        const q = Pn(M);
        q && (Ye(q.owner) || De(q.owner) || B(q.owner) || Le(q.owner)) && ei(q.owner, u);
      }),
      s.registerNodeTransform(we, (M) => {
        s.isComposing() || (QE(M, u), ei(M, u));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      s.registerNodeTransform(Kr, (M) => {
        s.isComposing() || CA(M, u);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      s.registerNodeTransform(He, (M) => {
        s.isComposing() || RA(M, u);
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
        He,
        (M) => {
          s.getEditorState().read(() => {
            for (const [q, $] of M) {
              if ($ === "destroyed") continue;
              const re = oe(q);
              !re || ae(re, ue) !== "attribute" || ze(re.getParent()) || s.getElementByKey(q)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      cP(s, u),
      ...a ? [
        s.registerNodeTransform(He, (M) => {
          s.isComposing() || WA(M);
        }),
        s.registerCommand(
          Ss,
          (M) => yf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            M && typeof M == "object" && "clipboardData" in M ? M : null,
            s,
            !1
          ),
          Ie
        ),
        s.registerCommand(
          Xr,
          (M) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            yf(
              M && typeof M == "object" && "clipboardData" in M ? M : null,
              s,
              !0
            )
          ),
          Ie
        ),
        s.registerCommand(
          fr,
          (M) => eP(
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
          Ie
        )
      ] : [],
      s.registerCommand(
        Xr,
        () => (!vc(u) && !Ko() && Tc(u), !1),
        Ne
      ),
      s.registerCommand(
        Co,
        () => (s.isComposing() || WE(u), !1),
        ii
      ),
      s.registerCommand(
        ci,
        () => (p = !1, k = 0, E(), !1),
        gt
      ),
      s.registerCommand(
        yr,
        (M) => (p = !1, k = 0, E(), (M.key === "Backspace" || M.key === "Delete") && !vc(u, fg(M)) && (Tc(u), VE(u), queueMicrotask(() => {
          u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear();
        })), s.isComposing() || !M.ctrlKey || M.altKey || M.shiftKey || M.metaKey || M.key !== " " && M.code !== "Space" || !UM() ? !1 : (M.preventDefault(), !0)),
        Ie
      ),
      s.registerCommand(
        Ff,
        (M) => {
          const q = ym();
          q === "needs-plain-split" && s.dispatchCommand(Hs, void 0);
          const $ = q !== "declined" || cx();
          return $ && M?.preventDefault(), Ks(u), $;
        },
        Ie
      ),
      s.registerCommand(
        Hs,
        () => (u.splitExpected.current = !0, Lg()),
        Ie
      ),
      lP(s, u, a),
      s.registerCommand(
        Um,
        () => {
          if (p) return !0;
          const M = s.getRootElement(), q = M?.ownerDocument, $ = !!M && !!q && q.hasFocus() && M.contains(q.activeElement);
          let re;
          if ($) {
            const W = O();
            re = N(W) ? W.focus.key : f;
          }
          return Ra(() => Ks(u, re)), !0;
        },
        gt
      ),
      s.registerCommand(
        $c,
        () => {
          if (p) return !1;
          const M = O(), q = N(M) ? M.focus.key : f;
          return Ra(() => Ks(u, q)), !1;
        },
        gt
      ),
      s.registerUpdateListener(({ editorState: M, tags: q }) => {
        u.splitExpected.current = !1, u.wholeParaDeleteExpected?.clear(), u.collapsedDeleteCaretParas?.clear(), u.rebuildAttempted.clear();
        const $ = M.read(() => {
          const W = O();
          return N(W) ? W.focus.key : void 0;
        }), re = m;
        if ($ !== void 0 && (m = $), q.has(Ic)) {
          u.pendingKeys.clear(), M.read(() => $A(u)), p = !0, $ !== void 0 && (f = $);
          return;
        }
        if (q.has(Zr)) {
          $ !== void 0 && $ !== re && (p = !0);
          return;
        }
        p || ($ !== void 0 && (f = $), E(), !(g || $ === void 0) && [...u.pendingKeys].some((W) => W !== $) && (g = !0, queueMicrotask(() => {
          g = !1, !y && (_() || S(f));
        })));
      })
    );
    return () => {
      y = !0, A !== void 0 && clearTimeout(A), A = void 0, d(), j(), c.current = void 0;
    };
  }, [s, o, a]), null;
}
const dP = ["status_unknown", "status_invalid"], Fm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, fP = Object.values(Fm);
function pP(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Fm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function kf(e) {
  e.classList.remove(...dP), e.removeAttribute("aria-description"), fP.includes(e.title) && e.removeAttribute("title");
}
function hP(e, t, r, n) {
  const i = (a) => a.read(() => Ve().getChildrenKeys()), s = i(t), o = i(e);
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
function gP(e) {
  const t = oe(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : w(t) && t.getParent()?.getKey() === r.getKey();
}
function mP({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = de(), i = e?.markerMode === "editable";
  return z(() => {
    if (!i) return;
    const s = t ?? no;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const u = dE(s, l);
        let d = u;
        if (l) {
          d = new Map(u);
          for (const [f, p] of o) {
            if (d.has(f) || gP(f)) continue;
            const m = oe(f)?.getTopLevelElement();
            !m || l.has(m.getKey()) || d.set(f, p);
          }
        }
        for (const [f] of o) {
          if (d.has(f)) continue;
          const p = n.getElementByKey(f);
          p && kf(p);
        }
        for (const [f, p] of d) {
          const m = n.getElementByKey(f);
          m && pP(m, p);
        }
        o = d, r?.debug(`[MarkerValidation] pass: ${d.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: u, dirtyElements: d, dirtyLeaves: f }) => {
        d.size === 0 && f.size === 0 || a(
          hP(l, u, d, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const u = n.getElementByKey(l);
        u && kf(u);
      }
    };
  }, [n, i, t, r]), null;
}
function yP(e, t) {
  const r = _l(kl), n = hl();
  if (!r || !n?.end) return;
  const i = Bs.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = rb({
    namespace: "markers-view-copy",
    nodes: [it, ...ml],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    qr.serializeEditorState(i, r)
  ).read(
    () => {
      const a = Do(n);
      return a ? Lm(a) : void 0;
    },
    { editor: s }
  );
}
function bP({ viewOptions: e }) {
  const [t] = de();
  return z(() => {
    const r = (n, i) => {
      const s = O();
      if (!N(s) || s.isCollapsed()) return !1;
      const o = yP(t, e);
      return o === void 0 ? !1 : Dm(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        n && typeof n == "object" && "clipboardData" in n ? n : null,
        t,
        s,
        { "text/plain": o, "text/html": Im(o) },
        i
      );
    };
    return je(
      t.registerCommand(Ss, (n) => r(n, !1), Ie),
      t.registerCommand(Xr, (n) => r(n, !0), Ie)
    );
  }, [t, e]), null;
}
function Km(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = $r(o);
    a && F(s) && Km(s.getChildren(), a, r);
  }
}
function zm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = $r(o);
      if (a) {
        n(a);
        continue;
      }
      const c = mi(o);
      if (c === void 0 || !c.includes(ct)) continue;
      const l = c.split(ct), u = [];
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
function jm(e, t, r) {
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
function Bm(e, t) {
  const r = [];
  for (const n of e)
    rm(n, t) || ((le(n) || U(n)) && r.push(n.getMarker()), F(n) && r.push(...Bm(n.getChildren(), t)));
  return r;
}
function Vm(e) {
  const t = [];
  for (const r of e) {
    const n = Bl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = $r(r);
    i && t.push(...Vm(i));
  }
  return t;
}
function Zl(e, t, r) {
  const n = Bm(e, r), i = Vm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function kP(e, t) {
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
function eu(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function TP(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const k = Vl(y, o, s);
    if (!k) return;
    c.text.length > 0 && (c.text += " ");
    const _ = c.text.length;
    k.spans.forEach(
      (S) => c.spans.push({ ...S, start: S.start + _, end: S.end + _ })
    ), c.sentinels.push(...k.sentinels), c.text += k.text;
  }
  const l = i ? eu(c, i) : c.text, u = Lr(l, {
    getMarker: o
  });
  if (u.length === 0) return;
  if (Fn(u) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const d = qr.serializeEditorState(
    { type: Ar, version: Er, content: u },
    s
  ).root.children;
  if (Vo(d) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = jm(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Mi(d, o) === vi(e, o) && Zl(e, d, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  zm(d, f);
  const m = xP(e), g = Wm(d);
  for (let y = 0; y < m.length && y < g.length; y++)
    m[y].sid !== void 0 && g[y].number === m[y].number && (g[y].sid = m[y].sid);
  return d;
}
function xP(e) {
  const t = [], r = (n) => {
    De(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : F(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Wm(e) {
  const t = [];
  for (const r of e) {
    $p(r) && t.push(r);
    const n = $r(r);
    n && t.push(...Wm(n));
  }
  return t;
}
function _P(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = dm(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: u } = c;
  if (u.length === 0) return;
  const d = i ? eu(l, i) : l.text, f = Lr(d, {
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
  const m = p.content ?? [], g = fm(m), y = e.getCategory() !== g, k = em(e, m, g, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = k.children;
  if (Vo(_) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const S = jm(l, t, n);
  if (!S) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Mi(_, o) === vi(u, o) && Zl(u, _, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: u, category: g, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return zm(_, S), { rebuilt: _, contentNodes: u, category: g, categoryChanged: y };
}
function Tf(e) {
  return e.$?.textType;
}
function CP(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Tf(e) === Tf(t);
}
function SP(e) {
  const t = [];
  for (const r of e) {
    const n = oe(r);
    n?.isAttached() && Ue(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function vP(e) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!B(t)) return;
  const r = e.getTextContent();
  if (an(e)) return;
  const n = Qg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function xf(e, t) {
  const r = e;
  r.marker = t, r.text = im(t, r.markerSyntax, r.nested);
}
function MP(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!we.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && xf(a.node, s);
  const c = n.getChildren().filter(w).filter((u) => u.getMarkerSyntax() === "closing" && u.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && xf(l.node, s);
}
function EP(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = gm(e, i, n);
  if (!o) return;
  const a = r ? eu(o, r) : o.text, c = Lr(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Fn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const u = qr.serializeEditorState(
    { type: Ar, version: Er, content: c },
    n
  ).root.children;
  if (u.length === 0) return;
  const d = [e, ...Ho(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Mi(u, i) === vi(d, i) && Zl(d, u, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return u;
}
function AP(e, t, r, n, i) {
  const s = kP(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = (y) => {
    B(y) ? c.set(y.getKey(), y) : Le(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const k = oe(y);
    if (!k?.isAttached()) continue;
    const _ = bs(k);
    if (_) {
      if (d(_), w(k)) {
        const S = Cm(k, r.getMarker);
        S && a.push(S);
      }
      if (B(_)) {
        const S = vP(k);
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
    const y = bs(s.node);
    y && d(y);
  }
  const p = SP(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && p.length === 0)
    return;
  const m = new Set(p.map((y) => y.getKey())), g = /* @__PURE__ */ new Map();
  Km(Ve().getChildren(), e.root.children, g);
  for (const y of u.values()) MP(y, g);
  for (const y of c.values()) {
    const k = g.get(y.getKey()), _ = k ? $r(k.node) : void 0;
    if (!k || !_) continue;
    const S = _P(y, g, r, m, s);
    if (!S) continue;
    if (S.categoryChanged) {
      const j = k.node;
      S.category === void 0 ? delete j.category : j.category = S.category;
    }
    if (!S.rebuilt) continue;
    const A = g.get(S.contentNodes[0].getKey());
    if (!A) continue;
    const E = _.indexOf(A.node);
    E < 0 || _.splice(E, S.contentNodes.length, ...S.rebuilt);
  }
  for (const y of o.values()) {
    const k = g.get(y[0].getKey());
    if (!k) continue;
    const _ = TP(y, g, r, m, s);
    if (!_) continue;
    const S = k.siblings.indexOf(k.node);
    S < 0 || k.siblings.splice(S, y.length, ..._);
  }
  for (const y of l.values()) {
    const k = g.get(y.getKey());
    if (!k) continue;
    const _ = 1 + Ho(y).length, S = EP(y, r, s);
    if (!S) continue;
    const A = k.siblings.indexOf(k.node);
    A < 0 || k.siblings.splice(A, _, ...S);
  }
  for (const y of p) {
    const k = g.get(y.getKey());
    if (!k) continue;
    const _ = k.siblings.indexOf(k.node);
    if (_ < 0) continue;
    k.siblings.splice(_, 1);
    const S = k.siblings[_ - 1], A = k.siblings[_], E = S && mi(S), j = A && mi(A);
    S && A && E !== void 0 && j !== void 0 && CP(S, A) && (S.text = E + j, k.siblings.splice(_, 1));
  }
  return Ag(e, r.viewOptions);
}
function PP({
  viewOptions: e,
  logger: t
}) {
  const [r] = de(), n = Ci(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1)), i = e?.hasGutterParaMarkers ?? !1;
  return z(() => {
    if (n)
      return r.registerNodeTransform(
        ot,
        (s) => i ? OP(s) : NP(s, t)
      );
  }, [r, n, i, t]), null;
}
function NP(e, t) {
  e.getMarker() !== pr && (e.isEmpty() || Rt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${pr}" (key ${e.getKey()})`
  ), e.setMarker(pr)));
}
function OP(e) {
  const t = e.getFirstChild();
  if (Rt(t)) return;
  const r = Oe(e.getMarker()) + L, n = e.getChildren().find((s) => kr(s) && s.getTextContent() === r) ?? fp(r);
  t ? t.insertBefore(n) : e.append(n);
  const i = O();
  if (N(i))
    for (const s of [i.anchor, i.focus])
      s.type === "element" && s.key === e.getKey() && s.offset === 0 && s.set(e.getKey(), 1, "element");
}
function wP({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = de(), n = ie({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return z(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, bo(s, e) || RP(i, r, e);
  }, [r, e, t]), z(
    () => r.registerMutationListener(
      Ht,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Mc(r);
        _f(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: zs(s) === zs(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), z(() => {
    const i = (a) => a.read(
      () => new Set(
        Ve().getChildren().filter(Qe).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const u = a === c ? /* @__PURE__ */ new Set() : i(a), d = i(c), f = [...d].some((p) => !u.has(p));
      f && (Mc(r) || _f(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...u].some((p) => !d.has(p)),
        isSameDocumentReload: zs(a) === zs(c)
      }));
    };
    return je(
      ...[Lt, Tr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), z(
    () => r.registerCommand(
      gr,
      () => {
        const i = n.current;
        return i.phase === "idle" && IP(i, $P()), !1;
      },
      gt
    ),
    [r]
  ), z(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(gr, void 0));
    };
    return je(
      r.registerMutationListener(Et, i),
      r.registerMutationListener(mt, i)
    );
  }, [r]), z(() => {
    const i = () => KP(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function RP(e, t, r) {
  if (qP(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Mc(t);
  (!n || n === r.book) && t.update(() => Gm(r.chapterNum, r.verseNum), {
    tag: Zr
  });
}
function qP(e, t) {
  const r = e.pendingEchoes.findIndex((n) => bo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function Hm(e) {
  return rg(e) ?? Vp(e);
}
function $P() {
  const e = O(), t = Hm(e);
  if (!t) return;
  const r = tu(), n = Dp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = ll(t, e), { verseNum: o, verse: a } = Ox(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Mc(e) {
  return e.getEditorState().read(() => tu()?.getCode() || void 0);
}
function tu() {
  return Ve().getChildren().find(bt);
}
function _f(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && qa(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || qa(e, t), e.phase = "navigating") : i && qa(e, t), r && r !== e.scrRef.book && Xm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function qa(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Gm(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Zr }
    );
  });
}
function Gm(e, t) {
  const r = Hm(O()), n = ul(r)?.getNumber(), i = Dp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Wp(n) ? Ym(t, n) : parseInt(n, 10) === t))
    return;
  const o = Ve().getChildren(), a = Ip(o, e);
  if (!a) return;
  const c = zk(o, a), l = $k(c, !0);
  Kk(c, l);
  let u;
  try {
    u = Mx(c, t);
  } catch {
    return;
  }
  u && (le(u) ? !v(u.getFirstChild()) && Kt(u) || qt(u, 0) : LP(u));
}
function LP(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ye(n)) {
    qt(t, r);
    return;
  }
  const i = qo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (v(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = F(n) && !B(n) ? Jm(n) : void 0;
  s ? s.select(0, 0) : qt(t, r);
}
function Jm(e) {
  const t = e.getFirstChild();
  if (v(t)) return t;
  if (F(t) && !B(t)) return Jm(t);
}
function zs(e) {
  return e.read(() => {
    const t = Ve().getChildren().find(Qe);
    return `${tu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function IP(e, t) {
  e.phase !== "navigating" && t && (DP(t, e.scrRef) || Xm(e, UP(t, e.scrRef)));
}
function DP(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Ym(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Ym(e, t) {
  try {
    return Jc(e, t);
  } catch {
    return !1;
  }
}
function UP(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const FP = 8;
function Xm(e, t) {
  return bo(t, e.scrRef) || e.pendingEchoes.some((r) => bo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > FP && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function bo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function KP(e) {
  e.phase = "idle";
}
function zP(e) {
  return bt(e) ? `${e.__code}` : Le(e) ? `${e.__marker} "${e.__number}"` : U(e) ? `${e.__marker}` : vs(e) ? `${e.__marker} "${e.__number}"` : At(e) ? `${e.__caller}` : Un(e) ? `${e.__marker} "${e.__number}"` : B(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : le(e) ? `${e.__marker}` : v(e) ? `"${e.__text}"${jP(e)}` : ve(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : De(e) ? `${e.__marker} "${e.__number}"` : "";
}
function jP(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[_s]) : "";
}
function BP() {
  const [e] = de();
  return /* @__PURE__ */ C(
    ab,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: zP,
      editor: e
    }
  );
}
const Qm = Nf(null), Cf = 4;
function VP({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = ie(null), s = Of(Qm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return z(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ C("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function WP({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = he(), [s, o] = he(), a = ke(
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
  }, l = We(() => ({ registerItem: a }), [a]);
  return z(() => {
    const u = s ?? n?.[0];
    u?.current && u.current.focus();
  }, [n, s]), /* @__PURE__ */ C(Qm.Provider, { value: l, children: /* @__PURE__ */ C("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function HP({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = ie(null), c = ie(null), [l, u] = he(!1), d = () => {
    u(!1), c && c.current && c.current.focus();
  };
  return z(() => {
    const f = c.current, p = a.current;
    if (l && f !== null && p !== null) {
      const { top: m, left: g } = f.getBoundingClientRect();
      p.style.top = `${m + f.offsetHeight + Cf}px`, p.style.left = `${Math.min(g, window.innerWidth - p.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), z(() => {
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
  }, [a, c, l, o]), z(() => {
    const f = () => {
      if (l) {
        const p = c.current, m = a.current;
        if (p !== null && m !== null) {
          const { top: g } = p.getBoundingClientRect(), y = g + p.offsetHeight + Cf;
          y !== m.getBoundingClientRect().top && (m.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
    };
  }, [c, a, l]), /* @__PURE__ */ Ce(Cn, { children: [
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
          i && /* @__PURE__ */ C("span", { className: i }),
          t && /* @__PURE__ */ C("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ C("i", { className: "chevron-down" })
        ]
      }
    ),
    l && _n(
      /* @__PURE__ */ C(WP, { dropDownRef: a, onClose: d, children: s }),
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
function GP({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ C(
    HP,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + JP(t),
      buttonLabel: YP(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Ec).map((n) => /* @__PURE__ */ Ce(
        VP,
        {
          className: "item block-marker " + XP(t === n),
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
function JP(e) {
  return e && e in Ac ? e : "ban";
}
function YP(e) {
  return e && e in Ac ? Ac[e] : "No Style";
}
function XP(e) {
  return e ? "active dropdown-item-active" : "";
}
function Sf() {
  return /* @__PURE__ */ C("div", { className: "divider" });
}
const QP = qn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = de(), [o, a] = he(s), [c, l] = he(), [u, d] = he(!1), [f, p] = he(!1), m = ke(
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
  return z(() => s.registerCommand(
    gr,
    (g, y) => (a(y), !1),
    Ne
  ), [s]), /* @__PURE__ */ Ce(Cn, { children: [
    /* @__PURE__ */ C(xg, { onStateChange: m }),
    /* @__PURE__ */ Ce("div", { className: "toolbar", children: [
      /* @__PURE__ */ C(
        "button",
        {
          disabled: !u || r,
          onClick: () => {
            o.dispatchCommand(zf, void 0);
          },
          title: es ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
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
            o.dispatchCommand(jf, void 0);
          },
          title: es ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ C("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ C(Sf, {}),
      o === s && /* @__PURE__ */ Ce(Cn, { children: [
        /* @__PURE__ */ C(
          GP,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ C(Sf, {})
      ] }),
      /* @__PURE__ */ C("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), ZP = Uo(), e1 = {}, t1 = {};
function r1() {
  return /* @__PURE__ */ C("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const Zm = qn(function({
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
  const f = ie(null), p = ie(null), m = ie(null), g = ie(t), y = ie(void 0), k = ie(void 0), _ = ie(void 0), S = ie(void 0), A = ie(!1), [E, j] = he(t), [M, q] = he(0), [$, re] = he(), {
    isReadonly: W = !1,
    structureProtectionMode: xe = "off",
    hasExternalUI: ne = !1,
    hasSpellCheck: Ee = !1,
    textDirection: D = "ltr",
    markerMenuTrigger: G = "\\",
    view: J,
    nodes: qe,
    debug: et = !1,
    contextMenu: It,
    styleInfo: X,
    markerSettleDelayMs: P
  } = c ?? t1, Y = J ?? ZP, pe = hs(Y) && (Y.markerMode !== "hidden" || !Y.hasSpacing || Y.hasGutterParaMarkers || Y.hasActiveTextFocusBox) ? {
    ...Y,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : Y, Ae = ie(pe);
  Ut(Ae.current, pe) || (Ae.current = pe);
  const ee = Ae.current, Me = We(() => qe ?? e1, [qe]), _r = We(() => It, [It]), Dt = We(
    () => yx(X ?? no),
    [X]
  ), un = ie(l);
  Ut(un.current, l) || (un.current = l);
  const Je = un.current, fe = hs(ee), kt = W || fe, Se = pe !== Y;
  z(() => {
    fe && !W && Je?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), Se && Je?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ee?.markerMode === "visible" && !W && Je?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [fe, W, Se, Je, ee?.markerMode]);
  const Cr = ie(null), $e = We(() => {
    if (ee.markerMode !== "editable") return;
    const R = X ?? no;
    return {
      getContext: () => Cr.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (V) => kE(
        R,
        V,
        Me.extraValidMarkers
      ),
      getEnterItems: (V) => TE(
        R,
        V,
        Me.extraValidMarkers
      ),
      apply: (V, Q) => {
        const te = Cr.current;
        te && (Q.trigger === "enter" ? te.splitParagraphWithMarker(V.marker) : te.applyMarkerMenuSelection(V, Q));
      },
      commitTypedCloser: (V) => {
        Cr.current?.commitTypedCloser(V);
      }
    };
  }, [ee, X, Me.extraValidMarkers]), Sr = (R) => {
    A.current || (A.current = !0, un.current?.warn(
      `Editor: cannot ${R} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ei = (R) => {
    if (fe)
      throw new Error(
        `Cannot ${R} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, Tt = (R) => {
    if (Ei(R), kt) throw new Error(`Cannot ${R} in readonly mode`);
  }, Ps = We(
    () => ({
      namespace: "platformEditor",
      theme: { ...Wg, showCharMarkerTitles: ee.showCharMarkerTitles },
      editable: !kt,
      editorState: void 0,
      // Handling of errors during update
      onError(R) {
        throw R;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [it, ...fe ? P_ : ml]
    }),
    [kt, fe, ee.showCharMarkerTitles]
  );
  Bs.initialize(Je);
  function vr(R) {
    if (R !== void 0 && !KM(R, Me.extraValidMarkers))
      throw new Error(`Unsupported character marker '${R}'`);
  }
  const Kn = ke(() => {
    const R = f.current;
    if (!R) return g.current;
    const V = Vu(R), Q = k.current;
    if ((!V || V.size === 0) && !Q) return g.current;
    const te = R.getEditorState(), Pe = te.toJSON();
    return te.read(
      () => AP(
        Pe,
        V ?? /* @__PURE__ */ new Set(),
        { viewOptions: ee, getMarker: Dt, logger: Je },
        Q,
        _.current
      )
    ) ?? g.current;
  }, [ee, Dt, Je]), Ai = {
    focus() {
      const R = f.current;
      if (!R) return;
      R.focus(), R.getEditorState().read(() => yi(O())) && R.getRootElement()?.focus({ preventScroll: !0 });
    },
    isFocused() {
      const R = f.current?.getRootElement();
      return !!R && R.ownerDocument.activeElement === R;
    },
    undo() {
      f.current?.dispatchCommand(zf, void 0);
    },
    redo() {
      f.current?.dispatchCommand(jf, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      Tt("cut"), f.current && El(f.current);
    },
    copy() {
      f.current && Ml(f.current);
    },
    paste() {
      Tt("paste"), f.current && Al(f.current);
    },
    pastePlainText() {
      Tt("paste as plain text"), f.current && Pl(f.current);
    },
    getUsj() {
      return Kn();
    },
    commitPendingMarkerEdits() {
      f.current?.update(
        () => {
          f.current?.dispatchCommand(Um, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(R) {
      if (!R) {
        k.current = void 0;
        return;
      }
      const V = f.current?.getEditorState().read(() => {
        const Q = O();
        return N(Q) && Q.isCollapsed() ? Q.focus.key : void 0;
      });
      k.current = { input: R, nodeKey: V ?? _.current?.key };
    },
    setUsj(R) {
      if (!Ut(g.current, R)) {
        g.current = R, k.current = void 0;
        const V = Ut(E, R);
        j(R), V && q((Q) => Q + 1);
      }
    },
    applyUpdate(R, V = "remote") {
      if (fe && V === "remote") {
        un.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Ei("apply an update"), f.current?.update(
        () => {
          V === "remote" && Qr(rs), rC(R, ee, Me, Je);
        },
        { discrete: !0 }
      );
      const Q = f.current?.getEditorState();
      if (!Q) return;
      const te = Bs.deserializeEditorState(Q, ee);
      if (te) {
        const Pe = !Ut(g.current, te);
        if (Pe && (g.current = te), Pe || !Ut(E, te)) {
          const tt = nd(R, Q, "apply");
          S.current = te, s?.(te, R, V, tt);
        }
      }
    },
    replaceEmbedUpdate(R, V) {
      const Q = f.current?.read(() => jx(R, V));
      Q ? this.applyUpdate(Q) : l?.warn(
        `replaceEmbedUpdate: no embed found for key "${R}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (fe) {
        Sr("get the selection");
        return;
      }
      return f.current?.read(hl);
    },
    getSelectedParaMarker() {
      const R = f.current;
      if (R?.isEditable())
        return R.getEditorState().read(() => rn(O())?.getMarker());
    },
    setSelection(R) {
      if (fe) {
        Sr("set the selection");
        return;
      }
      f.current?.update(() => {
        const V = Do(R);
        V !== void 0 && (dr(V), Qr(tp));
      });
    },
    setAnnotation(R, V, Q, te, Pe) {
      if (fe) {
        Sr("set an annotation");
        return;
      }
      let tt, Pt, dn, Pi;
      typeof te == "function" || te === void 0 ? (tt = te, Pt = Pe) : (tt = te.onClick, Pt = te.onRemove, dn = te.onMouseEnter, Pi = te.onMouseLeave), p.current?.setAnnotation(
        R,
        Ru(V),
        Q,
        tt,
        Pt,
        dn,
        Pi
      );
    },
    removeAnnotation(R, V) {
      p.current?.removeAnnotation(Ru(R), V);
    },
    formatPara(R) {
      Tt("format a paragraph"), f.current?.update(
        () => {
          const V = O(), Q = rn(V);
          if (Q) {
            xc(Q, R, ee);
            return;
          }
          if (!N(V)) {
            l?.warn(
              `formatPara refused: no range selection or selected paragraph marker to retag with "${R}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          ub(V, () => os(R));
          const te = O();
          if (!N(te)) return;
          const Pe = /* @__PURE__ */ new Set();
          te.getNodes().forEach((tt) => {
            const Pt = tt.getTopLevelElement();
            le(Pt) && Pe.add(Pt);
          }), Pe.forEach((tt) => xc(tt, R, ee));
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
      if (kt) throw new Error("Cannot remove character marker in readonly mode");
      vr(R);
      let V = !1;
      return f.current?.update(
        () => {
          const Q = O();
          N(Q) && (V = Fg(Q, R, ee));
        },
        { discrete: !0 }
      ), V;
    },
    replaceCharacterMarker(R, V) {
      if (kt) throw new Error("Cannot replace character marker in readonly mode");
      vr(R), vr(V);
      let Q = !1;
      return f.current?.update(
        () => {
          const te = O();
          N(te) && (Q = ZM(te, R, V));
        },
        { discrete: !0 }
      ), Q;
    },
    extendCharacterMarker(R, V) {
      if (kt) throw new Error("Cannot extend character marker in readonly mode");
      vr(R), V?.forEach(
        (te) => vr(te)
      );
      let Q = !1;
      return f.current?.update(
        () => {
          const te = O();
          N(te) && (Q = eE(
            te,
            R,
            V,
            ee
          ));
        },
        { discrete: !0 }
      ), Q;
    },
    insertMarker(R) {
      if (kt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!f.current) return;
      if (!pc(R, Me.extraValidMarkers))
        throw new Error(`Unsupported marker '${R}'`);
      f.current.update(Xn, { discrete: !0 });
      const V = hc(
        R,
        y,
        ee,
        Me,
        Je,
        void 0,
        X
      );
      return V.action({ editor: f.current, reference: r }), V.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!W)
        return f.current?.getEditorState().read(() => uA());
    },
    applyMarkerMenuSelection(R, V) {
      if (W) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!f.current) return;
      if (R.kind !== "closeTag" && !pc(R.marker, Me.extraValidMarkers))
        throw new Error(`Unsupported marker '${R.marker}'`);
      let Q;
      return f.current.update(() => {
        Xn(), Q = gA(R, V, r, {
          expandedNoteKeyRef: y,
          viewOptions: ee,
          nodeOptions: Me,
          logger: l,
          styleInfo: X
        });
      }), Q;
    },
    splitParagraphWithMarker(R) {
      if (W) throw new Error("Cannot split paragraph in readonly mode");
      f.current && f.current.update(() => {
        Xn(), _m(R, ee);
      });
    },
    commitTypedMarker(R, V) {
      if (W) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!f.current) return !1;
      let Q = !1;
      return f.current.update(() => {
        Xn(), Q = hA(R, V), Q || l?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), Q;
    },
    commitTypedCloser(R) {
      if (W) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!f.current) return !1;
      let V = !1;
      return f.current.update(() => {
        Xn(), V = xm(R), V || l?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), V;
    },
    insertNote(R, V, Q) {
      Tt("insert a note"), f.current?.update(
        () => {
          Xn();
          const te = Uh(
            R,
            V,
            Q,
            r,
            ee,
            Me,
            Je
          );
          te && !te.getIsCollapsed() && (y.current = te.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(R) {
      f.current?.update(() => {
        const V = ld(R);
        V && (M_(V, ee), V.getIsCollapsed() || (y.current = V.getKey()));
      });
    },
    getNoteOps(R) {
      return f.current?.read(() => {
        const V = ld(R);
        if (V)
          return fl(V);
      });
    },
    get toolbarEndRef() {
      return m;
    }
  };
  Cr.current = Ai, Nc(d, () => Ai), z(() => {
    const R = f.current;
    if (R)
      return R.registerUpdateListener(({ editorState: V }) => {
        V.read(() => {
          const Q = O();
          if (!N(Q) || !Q.isCollapsed()) return;
          const te = Q.focus.getNode();
          v(te) && (_.current = { key: te.getKey(), offset: Q.focus.offset });
        });
      });
  }, []);
  const sr = ke(
    (R, V, Q, te) => {
      if (fe) return;
      const Pe = Bs.deserializeEditorState(R, ee);
      if (Pe) {
        const tt = !Ut(g.current, Pe);
        if (tt && (g.current = Pe), tt || !Ut(E, Pe)) {
          const Pt = nd(te, R);
          S.current = Pe, s?.(Pe, te, "local", Pt);
        }
      }
    },
    [E, s, ee, fe]
  );
  z(() => {
    const R = f.current;
    if (!(!R || !s))
      return R.registerUpdateListener(({ tags: V, dirtyElements: Q, dirtyLeaves: te }) => {
        !V.has(Ic) && (Q.size === 0 && te.size === 0 || V.has(rs) || !Vu(R)?.size) || queueMicrotask(() => {
          const Pe = Kn();
          !Pe || Ut(S.current, Pe) || (S.current = Pe, s(Pe, void 0, "local", void 0));
        });
      });
  }, [s, Kn]);
  const Gt = ke(
    (R) => {
      re(R.contextMarker), o?.(R);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ Ce(Wf, { initialConfig: Ps, children: [
      /* @__PURE__ */ C(aS, { isEditable: !kt }),
      /* @__PURE__ */ Ce("div", { className: "editor-container", children: [
        ne ? /* @__PURE__ */ C(xg, { onStateChange: Gt }) : /* @__PURE__ */ C(
          "div",
          {
            className: "editor-toolbar-container" + (kt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ C(
              QP,
              {
                ref: m,
                editorRef: Cr,
                isReadonly: kt,
                onStateChange: Gt
              }
            )
          }
        ),
        /* @__PURE__ */ Ce("div", { className: "editor-inner", children: [
          /* @__PURE__ */ C(Gf, { editorRef: f }),
          /* @__PURE__ */ C(
            lb,
            {
              contentEditable: /* @__PURE__ */ C(
                Hf,
                {
                  className: `editor-input usfm ${tC(ee).join(" ")}${ee.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ee.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Ee
                }
              ),
              placeholder: /* @__PURE__ */ C(r1, {}),
              ErrorBoundary: Jf
            }
          ),
          ne && /* @__PURE__ */ C(oS, {}),
          /* @__PURE__ */ C(Yf, {}),
          r && n && /* @__PURE__ */ C(wP, { scrRef: r, onScrRefChange: n }),
          r && !ne && /* @__PURE__ */ C(
            Uv,
            {
              trigger: G,
              scrRef: r,
              contextMarker: $,
              getMarkerAction: (R) => hc(
                R,
                y,
                ee,
                Me,
                Je,
                void 0,
                X
              ),
              editableHarness: $e
            }
          ),
          /* @__PURE__ */ C(
            uS,
            {
              scripture: E,
              scriptureRef: g,
              nodeOptions: Me,
              editorAdaptor: qr,
              viewOptions: ee,
              logger: Je
            },
            M
          ),
          /* @__PURE__ */ C(NS, { onChange: i }),
          /* @__PURE__ */ C(
            J_,
            {
              onChange: sr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Ob
            }
          ),
          /* @__PURE__ */ C(sE, { viewOptions: ee }),
          /* @__PURE__ */ C(H_, { ref: p, logger: Je }),
          /* @__PURE__ */ C(PC, { viewOptions: ee }),
          /* @__PURE__ */ C(jC, {}),
          /* @__PURE__ */ C(JC, {}),
          ee?.markerMode !== "editable" && /* @__PURE__ */ C(YC, { logger: Je }),
          /* @__PURE__ */ C(eS, { options: _r }),
          /* @__PURE__ */ C(sS, {}),
          /* @__PURE__ */ C(lS, {}),
          /* @__PURE__ */ C(mA, {}),
          /* @__PURE__ */ C(
            uP,
            {
              viewOptions: ee,
              getMarker: Dt,
              logger: Je,
              markerSettleDelayMs: P,
              structureProtectionMode: xe
            }
          ),
          ee?.markerMode === "visible" && /* @__PURE__ */ C(bP, { viewOptions: ee }),
          /* @__PURE__ */ C(
            mP,
            {
              styleInfo: X,
              viewOptions: ee,
              logger: Je
            }
          ),
          /* @__PURE__ */ C(
            dS,
            {
              expandedNoteKeyRef: y,
              nodeOptions: Me,
              viewOptions: ee,
              logger: Je
            }
          ),
          /* @__PURE__ */ C(PS, {}),
          /* @__PURE__ */ C(vC, {}),
          /* @__PURE__ */ C(kC, {}),
          /* @__PURE__ */ C(PP, { viewOptions: ee, logger: Je }),
          /* @__PURE__ */ C(
            IS,
            {
              onParaMarkerMenuRequest: a,
              structureProtectionMode: xe
            }
          ),
          /* @__PURE__ */ C(BS, {}),
          /* @__PURE__ */ C(Mv, { structureProtectionMode: xe }),
          /* @__PURE__ */ C(Ev, { textDirection: D }),
          /* @__PURE__ */ C(Pv, {}),
          /* @__PURE__ */ C(Iv, {}),
          u
        ] }),
        et && /* @__PURE__ */ C(BP, {})
      ] })
    ] }, ee.verseLayout ?? "inline")
  );
}), uN = qn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ C(Zm, { ref: r, ...i });
});
function ey() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function ko(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? ey() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function ty(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? ey() : r,
    quote: e,
    type: "thread"
  };
}
function vf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function n1(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function $a(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class i1 {
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
    this._comments = t, $a(this);
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
          const c = vf(a);
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
    this._comments = i, $a(this);
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
          const c = vf(a);
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
    return this._comments = n, $a(this), t.type === "comment" ? {
      index: s,
      markedComment: n1(t)
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
      vb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      gt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Mb) {
            const u = l.target, d = l.delta;
            let f = 0;
            for (const p of d) {
              const m = p.insert, g = p.retain, y = p.delete, k = u.parent, _ = u === r ? void 0 : k instanceof xu && this._comments.find((S) => S.id === k.get("id"));
              if (Array.isArray(m)) {
                const S = f;
                m.slice().reverse().forEach((A) => {
                  const E = A.get("id"), M = A.get("type") === "thread" ? ty(
                    A.get("quote"),
                    A.get("comments").toArray().map(
                      (q) => ko(
                        q.get("content"),
                        q.get("author"),
                        q.get("id"),
                        q.get("timeStamp"),
                        q.get("deleted")
                      )
                    ),
                    E
                  ) : ko(
                    A.get("content"),
                    A.get("author"),
                    E,
                    A.get("timeStamp"),
                    A.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(M, _, S);
                  });
                });
              } else if (typeof g == "number")
                f += g;
              else if (typeof y == "number")
                for (let S = 0; S < y; S++) {
                  const A = _ === void 0 || _ === !1 ? this._comments[f] : _.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(A, _);
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
function s1(e) {
  const [t, r] = he(e.getComments());
  return z(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function o1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = ie(null);
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
  }, [n, e]), /* @__PURE__ */ C("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ Ce("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
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
function a1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return _n(
    /* @__PURE__ */ C(o1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function ry() {
  const [e, t] = he(null), r = ke(() => {
    t(null);
  }, []), n = We(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ C(a1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = ke(
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
const c1 = {
  ...Wg,
  paragraph: "CommentEditorTheme__paragraph"
};
function l1(...e) {
  return e.filter(Boolean).join(" ");
}
function on({
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
      className: l1(
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
function u1({
  className: e
}) {
  return /* @__PURE__ */ C(Hf, { className: e || "ContentEditable__root" });
}
function d1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ C("div", { className: t || "Placeholder__root", children: e });
}
const Mf = qc("INSERT_INLINE_COMMAND");
function f1({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = ie(null), s = ke(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: u } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${u - 30}px`;
    }
  }, [e, t]);
  return z(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), ks(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ C("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ C("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ C("i", { className: "icon add-comment" }) }) });
}
function p1({ onEscape: e }) {
  const [t] = de();
  return z(() => t.registerCommand(
    Lc,
    (r) => e(r),
    ii
  ), [t, e]), null;
}
function ny({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ C(Wf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: c1
  }, children: /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ C(
      _b,
      {
        contentEditable: /* @__PURE__ */ C(u1, { className: e }),
        placeholder: /* @__PURE__ */ C(d1, { children: s }),
        ErrorBoundary: Jf
      }
    ),
    /* @__PURE__ */ C(xb, { onChange: n }),
    /* @__PURE__ */ C(Yf, {}),
    t !== !1 && /* @__PURE__ */ C(bb, {}),
    /* @__PURE__ */ C(p1, { onEscape: r }),
    /* @__PURE__ */ C(kb, {}),
    i !== void 0 && /* @__PURE__ */ C(Gf, { editorRef: i })
  ] }) });
}
function iy(e, t) {
  return ke(
    (r, n) => {
      r.read(() => {
        e(Cb()), t(!Sb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function h1({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = ie(null), c = We(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = ie(null), u = oy(), d = ke(() => {
    e.getEditorState().read(() => {
      const g = O();
      if (N(g)) {
        l.current = g.clone();
        const y = g.anchor, k = g.focus, _ = db(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), S = a.current;
        if (_ !== null && S !== null) {
          const { left: A, bottom: E, width: j } = _.getBoundingClientRect(), M = fb(e, _);
          let q = M.length === 1 ? A + j / 2 - 125 : A - 125;
          q < 10 && (q = 10), S.style.left = `${q}px`, S.style.top = `${E + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const $ = M.length, { container: re } = c, W = c.elements, xe = W.length;
          for (let ne = 0; ne < $; ne++) {
            const Ee = M[ne];
            let D = W[ne];
            D === void 0 && (D = document.createElement("span"), W[ne] = D, re.appendChild(D));
            const J = `position:absolute;top:${Ee.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${Ee.left}px;height:${Ee.height}px;width:${Ee.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            D.style.cssText = J;
          }
          for (let ne = xe - 1; ne >= $; ne--) {
            const Ee = W[ne];
            re.removeChild(Ee), W.pop();
          }
        }
      }
    });
  }, [e, c]);
  ks(() => {
    d();
    const g = c.container, y = document.body;
    return y !== null ? (y.appendChild(g), () => {
      y.removeChild(g);
    }) : () => {
    };
  }, [c.container, d]), z(() => (window.addEventListener("resize", d), () => {
    window.removeEventListener("resize", d);
  }), [d]);
  const f = (g) => (g.preventDefault(), t(), !0), p = () => {
    if (s) {
      let g = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      g.length > 100 && (g = g.slice(0, 99) + "…"), r(
        ty(g, [ko(n, u)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, m = iy(i, o);
  return /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ C(
      ny,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: m
      }
    ),
    /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ C(on, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ C(
        on,
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
function g1({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = he(""), [s, o] = he(!1), a = ie(null), c = oy(), l = iy(i, o);
  return /* @__PURE__ */ Ce(Cn, { children: [
    /* @__PURE__ */ C(
      ny,
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
      on,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(ko(n, c), !1, t);
            const d = a.current;
            d !== null && d.dispatchCommand(nb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ C("i", { className: "send" })
      }
    )
  ] });
}
function sy({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ Ce(Cn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ Ce("div", { className: "Modal__content", children: [
      /* @__PURE__ */ C(
        on,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ C(
        on,
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
  const [i, s] = he(0);
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = ry();
  return /* @__PURE__ */ Ce("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ C("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ Ce("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ C("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ Ce(Cn, { children: [
      /* @__PURE__ */ C(
        on,
        {
          onClick: () => {
            l("Delete Comment", (u) => /* @__PURE__ */ C(
              sy,
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
function m1({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = de(), [a, c] = he(0), [l, u] = ry(), d = We(
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
    const p = f.id;
    return f.type === "thread" ? /* @__PURE__ */ Ce(
      "li",
      {
        onClick: () => {
          const g = s.get(p);
          if (g !== void 0 && (e === null || e.indexOf(p) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(g)[0], _ = oe(k);
                ve(_) && _.selectStart();
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
              /* @__PURE__ */ C("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ C(
              on,
              {
                onClick: () => {
                  u("Delete Thread", (g) => /* @__PURE__ */ C(
                    sy,
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
            Ef,
            {
              comment: g,
              deleteComment: r,
              thread: f,
              rtf: d
            },
            g.id
          )) }),
          /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ C(
            g1,
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
function y1({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = ie(null), o = r.length === 0;
  return /* @__PURE__ */ Ce("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ C("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ C("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ C(
      m1,
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
function oy() {
  const e = Xf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function b1({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Xf(), [a] = de(), c = We(() => {
    const q = new i1(a, s);
    return r && q.registerOnChange(r), t?.(q), q;
  }, [a, s, r, t]), l = s1(c), u = We(() => /* @__PURE__ */ new Map(), []), [d, f] = he(), [p, m] = he([]), [g, y] = he(!1), [k, _] = he(!1), { yjsDocMap: S } = o;
  z(() => {
    if (e) {
      const q = e("comments", S);
      return c.registerCollaboration(q);
    }
    return () => {
    };
  }, [c, e, S]);
  const A = ke(() => {
    a.update(() => {
      const q = O();
      q !== null && (q.dirty = !0);
    }), y(!1);
  }, [a]), E = ke(
    (q, $) => {
      if (q.type === "comment") {
        const re = c.deleteCommentOrThread(q, $);
        if (!re)
          return;
        const { markedComment: W, index: xe } = re;
        c.addComment(W, $, xe);
      } else {
        c.deleteCommentOrThread(q);
        const re = $ !== void 0 ? $.id : q.id, W = u.get(re);
        W !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const xe of W) {
              const ne = oe(xe);
              ve(ne) && (ne.deleteID(Jr, re), ne.hasNoIDsForEveryType() && Xs(ne));
            }
          });
        });
      }
    },
    [c, a, u]
  ), j = ke(
    (q, $, re, W) => {
      c.addComment(q, re), $ && (a.update(() => {
        N(W) && mp(W, Jr, q.id);
      }), y(!1));
    },
    [c, a]
  );
  z(() => {
    const q = [];
    let $;
    for (const re of p) {
      const W = u.get(re);
      if (W !== void 0)
        for (const xe of W) {
          const ne = a.getElementByKey(xe);
          ne !== null && (ne.classList.add("selected"), q.push(ne), $ = window.setTimeout(() => {
            _(!0);
          }, 0));
        }
    }
    return () => {
      $ !== void 0 && window.clearTimeout($);
      for (const re of q)
        re.classList.remove("selected");
    };
  }, [p, a, u]), z(() => {
    if (!a.hasNodes([it]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const q = /* @__PURE__ */ new Map();
    return je(
      Vf(
        a,
        it,
        ($) => is($.getTypedIDs()),
        ($, re) => {
          for (const [W, xe] of Object.entries($.getTypedIDs()))
            xe.forEach((ne) => {
              re.addID(W, ne);
            });
        }
      ),
      a.registerMutationListener(
        it,
        ($) => {
          a.getEditorState().read(() => {
            for (const [re, W] of $) {
              const xe = oe(re);
              let ne = [];
              W === "destroyed" ? ne = q.get(re) ?? [] : ve(xe) && (ne = xe.getTypedIDs()[Jr] ?? []);
              for (const Ee of ne) {
                let D = u.get(Ee);
                q.set(re, ne), W === "destroyed" ? D !== void 0 && (D.delete(re), D.size === 0 && u.delete(Ee)) : (D === void 0 && (D = /* @__PURE__ */ new Set(), u.set(Ee, D)), D.has(re) || D.add(re));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: $, tags: re }) => {
        $.read(() => {
          const W = O();
          let xe = !1, ne = !1;
          if (N(W)) {
            const Ee = W.anchor.getNode();
            if (v(Ee)) {
              const D = dk(Ee, Jr, W.anchor.offset) ?? [];
              D !== null && (m(D), xe = !0), W.isCollapsed() || (f(Ee.getKey()), ne = !0);
            }
          }
          xe || m((Ee) => Ee.length === 0 ? Ee : []), ne || f(null), !re.has("collaboration") && N(W) && y(!1);
        });
      }),
      a.registerCommand(
        Mf,
        () => {
          const $ = window.getSelection();
          return $ !== null && $.removeAllRanges(), y(!0), !0;
        },
        Sn
      )
    );
  }, [a, u]);
  const M = () => {
    a.dispatchCommand(Mf, void 0);
  };
  return /* @__PURE__ */ Ce(Cn, { children: [
    g && _n(
      /* @__PURE__ */ C(
        h1,
        {
          editor: a,
          cancelAddComment: A,
          submitAddComment: j
        }
      ),
      document.body
    ),
    d != null && !g && _n(
      /* @__PURE__ */ C(
        f1,
        {
          anchorKey: d,
          editor: a,
          showComments: k,
          onAddComment: M
        }
      ),
      document.body
    ),
    n !== null && _n(
      /* @__PURE__ */ C(
        on,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => _(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ C("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && _n(
      /* @__PURE__ */ C(
        y1,
        {
          comments: l,
          submitAddComment: j,
          deleteCommentOrThread: E,
          activeIDs: p,
          markNodeMap: u
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function k1() {
  const e = ie(void 0), t = ke((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function T1(e, t) {
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
function x1(e, t) {
  z(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      T1(r, t);
    };
  }, [t, e]);
}
const dN = qn(function(t, r) {
  const n = ie(null), i = ie(!0), s = ie(null), [o, a] = he(null), { children: c, onCommentChange: l, onUsjChange: u, showCommentsContainerRef: d, ...f } = t, { logger: p, options: { isReadonly: m, view: g } = {} } = t, y = (m ?? !1) || hs(g), [k, _] = k1();
  x1(f, k), z(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      p?.warn(E), p || console.warn(E);
    }
  }, [p]), Nc(r, () => ({
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
    setAnnotation(E, j, M, q, $) {
      typeof q == "function" || q === void 0 ? n.current?.setAnnotation(E, j, M, q, $) : n.current?.setAnnotation(E, j, M, q);
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
      k.current?.setComments(E), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const S = ke(
    (E, j, M, q) => {
      if (!u) return;
      const $ = k.current?.getComments();
      u(E, $, j, M, q);
    },
    [k, u]
  ), A = ke(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = k.current?.getComments();
    l(E);
  }, [k, i, l]);
  return z(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ C(Tb, { children: /* @__PURE__ */ Ce(Zm, { ref: n, onUsjChange: S, ...f, children: [
    /* @__PURE__ */ C(
      b1,
      {
        setCommentStore: _,
        onChange: A,
        showCommentsContainerRef: y ? null : d ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ C("div", { ref: s, className: "comment-container" })
  ] }) });
});
function xn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function _1(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function C1(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const S1 = /^[#\w().,%/\s-]+$/;
function Mr(e) {
  return e != null;
}
const v1 = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, M1 = {
  left: "right",
  right: "left"
}, E1 = "var(--usj-font-fallback, serif)";
function ay(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${_1(i)}"`).join(", ")}, ${E1}`;
}
const Pc = ".editor-input.usfm", A1 = /^[\w.#[\]="':()>+~*,\s-]+$/;
function P1(e) {
  return A1.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Pc}".`
  ), Pc);
}
function N1(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(ay(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (S1.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), Mr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), Mr(t.firstLineIndent) && s.push(`text-indent: ${xn(t.firstLineIndent * 20 * r)}vw`), Mr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${xn(t.leftMargin * 20 * r)}vw`), Mr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${xn(t.rightMargin * 20 * r)}vw`
  ), Mr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${xn(t.spaceBefore * r)}pt`), Mr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${xn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = v1[n ? M1[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Af = { c: 150, ca: 133, cp: 150 };
function Pf(e, t) {
  return e && Mr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function O1(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && Mr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Pf(e.markers.c, Af.c);
  return ["ca", "cp"].map((i) => {
    const s = Pf(
      e.markers[i],
      Af[i]
    ), o = xn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function fN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Pc } = t, s = P1(i), o = [], a = [];
  e.defaultFont && a.push(ay(e.defaultFont)), Mr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${xn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const u = N1(c, l, r, n, e.defaultFont);
    u.length > 0 && o.push(`${s} .usfm_${C1(c)} { ${u.join("; ")}; }`);
  }
  return o.push(...O1(e, s)), o.join(`
`);
}
export {
  Hh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  uN as Editorial,
  ts as GENERATOR_NOTE_CALLER,
  Zf as HIDDEN_NOTE_CALLER,
  dN as Marginal,
  b as MarkerType,
  Wh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  kl as STANDARD_VIEW_MODE,
  no as defaultStyleInfo,
  lN as directionToNames,
  D_ as filterAndRankItems,
  fN as generateUsjCss,
  aN as getDefaultViewMode,
  Uo as getDefaultViewOptions,
  TE as getEnterMenuItems,
  kE as getMarkerMenuItems,
  cN as getViewMode,
  _l as getViewOptions,
  hs as isBlockVerseLayout,
  Hr as isInsertEmbedOpOfType,
  X_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
