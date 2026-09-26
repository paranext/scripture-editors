import { jsx as v, jsxs as xe, Fragment as bn } from "react/jsx-runtime";
import { forwardRef as Nn, useState as fe, useRef as Q, useCallback as ge, useEffect as F, useMemo as je, memo as py, createContext as Ef, useContext as Af, Children as hy, isValidElement as gy, cloneElement as my, useImperativeHandle as _c, useLayoutEffect as ps } from "react";
import { assertSafeKey as Ge, isValidBookCode as yy, MARKER_OBJECT_PROPS as by, USJ_VERSION as Cr, USJ_TYPE as vr, isUsjTextContentLocation as ky, indexesFromUsjJsonPath as Pf, isUsjAttributeKeyLocation as Ty, isUsjAttributeMarkerLocation as xy, isUsjClosingAttributeMarkerLocation as _y, isUsjMarkerLocation as Cy, isUsjClosingMarkerLocation as vy, isUsjPropertyValueLocation as Sy, getUsjDocumentLocationTypeName as My, usjJsonPathFromIndexes as ln, EMPTY_USJ as Nf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ve, $parseSerializedNode as po, DecoratorNode as hs, ElementNode as Zt, isHTMLElement as On, createState as ho, $getState as ie, $setState as kt, $isRangeSelection as P, $isElementNode as L, $isTextNode as S, $getSelection as w, $isNodeSelection as go, ParagraphNode as Cc, TextNode as Be, $createTextNode as he, $getCommonAncestor as Ey, $isLineBreakNode as di, NODE_STATE_KEY as gs, $getEditor as ti, $hasUpdateTag as Ay, $getNodeByKey as oe, $getRoot as Ke, $createRangeSelection as vc, $createPoint as pu, $getCharacterOffsets as Sc, KEY_DOWN_COMMAND as Nr, COMMAND_PRIORITY_HIGH as qe, HISTORY_MERGE_TAG as Of, CLICK_COMMAND as mo, COMMAND_PRIORITY_EDITOR as kn, isDOMNode as wf, $getNearestNodeFromDOMNode as fi, CONTROLLED_TEXT_INSERTION_COMMAND as Mc, PASTE_COMMAND as _r, COMMAND_PRIORITY_CRITICAL as tt, CUT_COMMAND as Wt, DROP_COMMAND as Ec, DELETE_CHARACTER_COMMAND as Py, DELETE_WORD_COMMAND as Ny, DELETE_LINE_COMMAND as Oy, $isDecoratorNode as ms, COPY_COMMAND as Hr, COMMAND_PRIORITY_LOW as xt, COMMAND_PRIORITY_NORMAL as Wr, SELECTION_CHANGE_COMMAND as dr, getDOMSelection as wy, isSelectionWithinEditor as qy, $createRangeSelectionFromDom as Ry, $setSelection as Tn, isDOMTextNode as $y, BLUR_COMMAND as Ac, $addUpdateTag as Gr, SKIP_DOM_SELECTION_TAG as Ly, CLEAR_HISTORY_COMMAND as Iy, $getPreviousSelection as Dy, $isRootOrShadowRoot as Uy, CAN_UNDO_COMMAND as Fy, CAN_REDO_COMMAND as zy, DRAGSTART_COMMAND as Ky, $createNodeSelection as qf, getDOMSelectionFromTarget as jy, $onUpdate as By, KEY_ENTER_COMMAND as Rf, LineBreakNode as $f, $copyNode as Vy, FOCUS_COMMAND as Wy, INSERT_PARAGRAPH_COMMAND as Us, SELECT_ALL_COMMAND as Hy, isExactShortcutMatch as Gy, $isRootNode as Jy, KEY_ESCAPE_COMMAND as Lf, createCommand as If, HISTORIC_TAG as Pc, createEditor as Yy, UNDO_COMMAND as Df, REDO_COMMAND as Uf, CLEAR_EDITOR_COMMAND as Xy } from "lexical";
import { addClassNamesToElement as Kn, removeClassNamesFromElement as Qo, $findMatchingParent as rt, $dfsIterator as Ff, $dfs as pi, mergeRegister as Fe, registerNestedElementResolver as zf, $unwrapNode as Aa, IS_APPLE as ri } from "@lexical/utils";
import { useLexicalNodeSelection as Qy } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as qt } from "fast-equals";
import Ii from "quill-delta";
import { useLexicalComposerContext as ce } from "@lexical/react/LexicalComposerContext";
import { graphemeSegments as Zy } from "unicode-segmenter/grapheme";
import { copyToClipboard as eb, $getLexicalContent as tb } from "@lexical/clipboard";
import { TreeView as rb } from "@lexical/react/LexicalTreeView";
import * as nb from "react-dom";
import { createPortal as yn } from "react-dom";
import { LexicalComposer as Kf } from "@lexical/react/LexicalComposer";
import { ContentEditable as jf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as Bf } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as Vf } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as Wf } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as ib } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as sb, createDOMRange as ob, createRectsFromDOMRange as ab } from "@lexical/selection";
import { autoUpdate as cb, computePosition as lb, shift as ub, flip as db } from "@floating-ui/dom";
import { $generateNodesFromDOM as fb } from "@lexical/html";
import { AutoFocusPlugin as pb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as hb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as Hf, LexicalCollaboration as gb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as mb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as yb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as bb, $isRootTextContentEmpty as kb } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Tb } from "@lexical/yjs";
import { Array as hu, Map as gu, YArrayEvent as xb } from "yjs";
const Zo = (e) => Ve(po(e)), _b = {
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
  return _b[e];
}
const R = " ", Fs = "​", Ut = R, Nc = `${R}|`, lr = "p", Gi = "+", Jf = "-", zs = "chapter", Pa = "verse", mu = "invalid", Cb = "text-spacing", vb = "formatted-font", Sb = "marker-", Yf = "external-usj-mutation", Xf = "selection-change", Jr = "cursor-change", Na = "annotation-change", Ji = "delta-change", Qf = "marker-settle", Mb = [
  Yf,
  Xf,
  Jr,
  Na,
  Ji
], xn = "zmsc-s", Qn = "zmsc-e", Eb = [xn, Qn], Ab = [
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
  xn,
  Qn
], Zf = 1, Oc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Pb = Oc.filter((e) => e !== "sid" && e !== "eid");
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
    return tp().updateFromJSON(t);
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
      version: Zf
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function ep(e) {
  return Eb.includes(e);
}
function tp(e, t, r, n, i) {
  return Ve(new Jt(e, t, r, n, void 0, i));
}
function He(e) {
  return e instanceof Jt;
}
const wc = "f", Nb = [
  // Footnote
  wc,
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
const Ob = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], rp = 1;
class Pe extends Zt {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = wc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Di(t) === "crossref" ? Jf : Gi), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
        conversion: wb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return qc().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Di(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Di(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && On(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Di(this.getMarker()))), { element: r };
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
      version: rp
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
function wb(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: qc(t, r, n) };
}
function qc(e, t, r, n, i) {
  return Ve(new Pe(e, t, r, n, i));
}
function qb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Pe.isValidMarker(t) && e.classList.contains(Pe.getType());
}
function K(e) {
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
const Oa = {
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
}, yu = {
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
  const t = Object.hasOwn(Oa, e) ? Oa[e] : void 0, r = Object.hasOwn(yu, e) ? yu[e] : void 0;
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
const np = "v", ip = "c", dn = "fig", bu = "tr", wa = "esb", sp = "esbe", ku = "periph", Tu = "alt", xu = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Rb = {
  "": "start",
  c: "center",
  r: "end"
};
function _u(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function Cu(e) {
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
function Lb(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Fs && s + 1 < e.length && Cu(e[s + 1]) || (Cu(o) ? (r || (i = t.length, t += o), r = !0) : $b.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Ib(e) {
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
function Rc(e) {
  return Ub.test(e) || ep(e);
}
function ea(e, t) {
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
    c.split("//").forEach((d, u) => {
      u > 0 && n.push({ kind: "optbreak" }), o(d);
    });
  };
  for (; i < e.length; ) {
    if (e[i] !== "\\") {
      const h = e.indexOf("\\", i), y = h === -1 ? e.length : h;
      a(Lb(e.slice(i, y))), i = y;
      continue;
    }
    const c = i, { name: l, next: d } = Db(e, i + 1);
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
    if (l === np) {
      const { word: h, next: y } = ea(e, i);
      i = y, n.push({ kind: "verse", number: h });
      continue;
    }
    if (l === ip) {
      const { word: h, next: y } = ea(e, i);
      i = y, s = void 0, n.push({ kind: "chapter", number: h });
      continue;
    }
    const p = l.startsWith("+"), f = p ? l.slice(1) : l, g = t(f)?.type;
    if (g === b.Note || g === void 0 && Pe.isValidMarker(l)) {
      const { word: h, next: y } = ea(e, i);
      i = y, s = l, n.push({ kind: "note", marker: l, caller: h || "+" });
      continue;
    }
    if (g === b.Milestone || g === void 0 && Rc(l)) {
      const h = Gb(e, c, l, i);
      if (h)
        n.push(h.token), h.ejectedText && o(h.ejectedText), i = h.next;
      else {
        const y = e.indexOf("\\", i), k = y === -1 ? e.length : y;
        o(e.slice(c, k)), i = k;
      }
      continue;
    }
    g === b.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : g === b.Character ? (u(), n.push({ kind: "charOpen", marker: f, isNested: p })) : Ks(f) ? (u(), Ks(f)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: f, isNested: p })) : (u(), !(r || s !== void 0) || l === wa || l === sp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: f, isNested: p }));
  }
  return n;
}
const vu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Ks(e) {
  return Object.hasOwn(vu, e) ? vu[e] : void 0;
}
function zb(e) {
  return Ks(e) !== void 0;
}
const Kb = /([-\w]+)\s*=\s*"(.*?)"/g, jb = /[\s\u200B]*[\n\r][\s\u200B]*/g, op = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function yo(e) {
  return op[e];
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
function Yi(e, t, r = op[t]) {
  const n = e.replace(jb, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(Kb)];
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
function bo(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function Wb(e) {
  const t = Or(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
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
  const s = Yi(e.slice(n + 1, i), r, bo(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function Gb(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = Yi(s.slice(o + 1), r, bo(r)), !a && s.slice(o + 1).trim() !== "")) {
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
`, " ").replaceAll("~", R);
}
function Ur(e) {
  return e.content || (e.content = []), e.content;
}
function Or(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d, u;
  const p = () => d ? Ur(d) : u ? Ur(u) : r;
  let f = !1;
  const g = () => {
    if (s)
      return o.length > a ? Ur(o[o.length - 1].object) : Ur(s);
    if (o.length > 0)
      return Ur(o[o.length - 1].object);
    if (!i) {
      if (f && !n)
        return p();
      i = { type: "para", marker: lr, content: [] }, p().push(i);
    }
    return Ur(i);
  }, h = (ne) => {
    const A = g();
    typeof ne == "string" && typeof A[A.length - 1] == "string" ? A[A.length - 1] = A[A.length - 1] + ne : A.push(ne);
  }, y = (ne) => {
    for (let A = ne; A < o.length; A += 1) {
      const G = o[A].object;
      G.closed = "false";
    }
  }, k = () => {
    y(0), o.length = 0;
  }, _ = (ne) => {
    s && (o.length > a && (y(a), o.length = a), a = 0, ne || (s.closed = "false"), s = void 0);
  }, C = () => {
    c = void 0, l = void 0;
  }, M = (ne, A, G) => {
    k();
    const [, de, Ee, ee] = G, Se = {
      type: "table:cell",
      marker: ee ? A.slice(0, A.indexOf("-")) : A,
      align: Rb[de],
      content: []
    };
    ee && (Se.colspan = String(Number(ee) + 1 - Number(Ee))), Ur(ne).push(Se), i = Se;
  }, E = (ne) => {
    d && (ne || (d.closed = "false"), d = void 0);
  }, z = () => {
    u = void 0;
  };
  let W, j = "", U;
  const N = () => {
    j && h(ar(j)), j = "";
  }, B = (ne = !1) => {
    W?.type === "sidebar" ? j = "" : ne && j.endsWith(`
`) && (j = j.slice(0, -1)), W = void 0, N();
  }, re = () => {
    if (!U)
      return;
    const ne = { type: "char", marker: U.marker, content: [] };
    U.value && (ne.content = [ar(U.value)]), g().push(ne), o.push({ object: ne }), U = void 0;
  }, X = (ne, A) => {
    f = !1, C(), k(), _(!1), i = { type: "para", marker: ne, content: [] }, A && (i.content = [ar(A)]), p().push(i);
  }, ye = () => {
    U && (X(U.marker, U.value), U = void 0);
  };
  let ke;
  const tr = (ne) => {
    if (!ke)
      return;
    let { value: A } = ke;
    ke = void 0, ne && A.endsWith(`
`) && (A = A.slice(0, -1));
    const G = A.indexOf("|"), de = G >= 0 ? Yi(A.slice(G + 1), ku) : void 0, Ee = G >= 0 ? A.slice(0, G) : A, ee = G >= 0 && (!de || !!Ee && !!de[Tu]), Se = ee ? void 0 : de, yr = ee ? A : Ee, wt = {
      type: "periph",
      ...yr ? { [Tu]: ar(yr) } : {},
      ...Se
    };
    wt.content = [], p().push(wt), u = wt, i = void 0;
  };
  let $e;
  const sn = () => {
    if ($e) {
      if ($e.shape === "para")
        X(dn, $e.value);
      else {
        const ne = { type: "char", marker: dn, content: [] };
        $e.value && (ne.content = [ar($e.value)]), g().push(ne), o.push({ object: ne });
      }
      $e = void 0;
    }
  }, mr = Fb(e, t?.getMarker ?? ur, n);
  for (let ne = 0; ne < mr.length; ne++) {
    const A = mr[ne];
    if (U) {
      if (A.kind === "text") {
        U.value += A.text;
        continue;
      }
      if (U.shape === "char" && A.kind === "end" && A.marker.replace(/^\+/, "") === U.marker) {
        if (U.value.trim() === "") {
          g().push({ type: "char", marker: U.marker, content: [] }), U = void 0, B();
          continue;
        }
        Object.assign(U.target, {
          [U.attrName]: ar(U.value.trim())
        });
        const G = U.marker;
        if (U = void 0, G === "ca") {
          const de = mr[ne + 1];
          de?.kind === "text" && /^[\s\u200B]*$/.test(de.text) && ne++;
        }
        continue;
      }
      if (U.shape === "para" && (A.kind === "para" || A.kind === "chapter")) {
        const G = U.value.replace(/[\s\u200B]+$/, "");
        G === "" ? (X(U.marker), U = void 0) : (Object.assign(U.target, { [U.attrName]: ar(G) }), U = void 0);
      } else {
        W = void 0, (A.kind === "para" || A.kind === "chapter") && U.value.endsWith(`
`) && (U.value = U.value.slice(0, -1)), U.shape === "para" ? ye() : re(), ne--;
        continue;
      }
    }
    if (ke) {
      if (A.kind === "text" || A.kind === "optbreak") {
        ke.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      tr(A.kind === "para" || A.kind === "chapter"), ne--;
      continue;
    }
    if ($e) {
      if (A.kind === "text" || A.kind === "optbreak") {
        $e.value += A.kind === "text" ? A.text : "//";
        continue;
      }
      if (A.kind === "end" && A.marker.replace(/^\+/, "") === dn) {
        const G = $e.value.indexOf("|"), de = G >= 0 ? Yi($e.value.slice(G + 1), dn) : void 0;
        if (de) {
          const Ee = {};
          for (const [yr, wt] of Object.entries(de))
            Ee[yr === "src" ? "file" : yr] = wt;
          const ee = {
            type: "figure",
            marker: dn,
            ...Ee
          }, Se = $e.value.slice(0, G);
          Se && (ee.content = [ar(Se)]), h(ee), $e = void 0;
          continue;
        }
      }
      sn(), ne--;
      continue;
    }
    if (W)
      if (A.kind === "text") {
        if (A.text.includes(`
`) && /^[\s\u200B]*$/.test(A.text)) {
          j += A.text;
          continue;
        }
        B();
      } else if (A.kind === "charOpen" || A.kind === "para") {
        const G = A.kind === "para" || !A.isNested ? Ks(A.marker) : void 0;
        if (G && G.targetTypes.includes(W.type)) {
          j = "", U = {
            target: W,
            attrName: G.attrName,
            marker: A.marker,
            shape: G.shape,
            value: ""
          };
          continue;
        }
        B(A.kind === "para");
      } else
        B(A.kind === "chapter");
    if (!s && !n && (A.kind === "charOpen" && !A.isNested && A.marker === dn || A.kind === "para" && A.marker === dn)) {
      k(), $e = { shape: A.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (A.kind) {
      case "text": {
        let G = A.text;
        if (!s && G.endsWith(`
`)) {
          const de = mr[ne + 1];
          (de === void 0 || de.kind === "para" || de.kind === "chapter") && (G = G.slice(0, -1));
        }
        G && h(ar(G));
        break;
      }
      case "para": {
        const G = !s && !n;
        if (G && A.marker === bu) {
          k(), c || (c = { type: "table", content: [] }, p().push(c)), l = { type: "table:row", marker: bu, content: [] }, Ur(c).push(l), i = l, f = !1;
          break;
        }
        if (G && l) {
          const de = xu.exec(A.marker);
          if (de && _u(de)) {
            M(l, A.marker, de);
            break;
          }
        }
        if (C(), !n && A.marker === wa) {
          k(), _(!1), E(!1);
          const de = {
            type: "sidebar",
            marker: wa,
            content: []
          };
          p().push(de), d = de, i = void 0, W = d, f = !1;
          break;
        }
        if (A.marker === sp && d) {
          k(), _(!1), E(!0), i = void 0;
          break;
        }
        if (!n && A.marker === ku) {
          k(), _(!1), E(!1), z(), ke = { value: "" }, i = void 0, f = !1;
          break;
        }
        X(A.marker);
        break;
      }
      case "verse": {
        _(!1);
        const G = { type: "verse", marker: np, number: A.number };
        h(G), W = G;
        break;
      }
      case "chapter": {
        k(), _(!1), C(), E(!1), z(), i = void 0;
        const G = {
          type: "chapter",
          marker: ip,
          number: A.number
        };
        r.push(G), W = G, f = !0;
        break;
      }
      case "note": {
        _(!1);
        const G = g();
        s = { type: "note", marker: A.marker, caller: A.caller, content: [] }, a = o.length, G.push(s), W = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !A.isNested) {
          const Ee = xu.exec(A.marker);
          if (Ee && _u(Ee)) {
            M(l, A.marker, Ee);
            break;
          }
        }
        if (!A.isNested) {
          const Ee = s ? a : 0;
          y(Ee), o.length = Ee;
        }
        const G = g(), de = { type: "char", marker: A.marker, content: [] };
        G.push(de), o.push({ object: de });
        break;
      }
      case "end": {
        const G = A.marker.replace(/^\+/, ""), de = s ? a : 0, Ee = o.findLastIndex((ee, Se) => Se >= de && ee.object.marker === G);
        Ee >= 0 ? (Jb(o[Ee].object), y(Ee + 1), o.length = Ee) : s && s.marker === G ? _(!0) : (y(de), o.length = de, h({ type: "unmatched", marker: `${A.marker}*` }));
        break;
      }
      case "milestone":
        h({ type: "ms", marker: A.marker, ...A.attributes });
        break;
      case "optbreak":
        h({ type: "optbreak" });
        break;
    }
  }
  if (ke && tr(!0), $e && sn(), U)
    if (U.shape === "para") {
      const ne = U.value.replace(/[\s\u200B]+$/, "");
      ne === "" ? X(U.marker) : Object.assign(U.target, { [U.attrName]: ar(ne) }), U = void 0;
    } else
      U.value.endsWith(`
`) && (U.value = U.value.slice(0, -1)), re();
  k(), _(!1), E(!1);
  const Mt = (ne) => {
    for (const A of ne)
      typeof A != "string" && A.content && (Mt(A.content), A.content.length === 0 && delete A.content);
  };
  return Mt(r), r;
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = Yi(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const _n = ho("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Yr = ho("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), ae = ho("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), pr = "marker-trailing-space", ap = 1, Yb = "marker", $c = ho("isGutterMarker", {
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
      span: (t) => ek(t) ? {
        conversion: Xb,
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
      version: ap
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Xb(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Sr(t, r) };
}
function Sr(e, t) {
  return Ve(new wr(e, t));
}
function Qb(e) {
  return kt(Sr(Yb, e), $c, !0);
}
function Zb(e) {
  return Yt(e) && ie(e, $c);
}
function ek(e) {
  return e?.tagName === "span";
}
function Yt(e) {
  return e instanceof wr;
}
function cp(e) {
  return e?.type === wr.getType();
}
const Vr = "internal-comment", tk = [Vr], lp = Object.freeze({}), qa = Object.freeze({}), Ra = Object.freeze({}), $a = Object.freeze({}), La = Object.freeze({}), rk = 1, jn = /* @__PURE__ */ new Map(), Pi = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map();
class et extends Zt {
  __typedIDs;
  __typedOnClicks;
  __typedOnRemoves;
  __typedOnMouseEnters;
  __typedOnMouseLeaves;
  __domOnClickListener;
  __domOnMouseEnterListener;
  __domOnMouseLeaveListener;
  __suppressOnRemoveCallbacks;
  constructor(t = lp, r, n, i, s, o) {
    super(o), this.__typedIDs = Ps(t), this.__typedOnClicks = ta(r), this.__typedOnRemoves = ra(n), this.__typedOnMouseEnters = na(i), this.__typedOnMouseLeaves = ia(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Ps(t.__typedIDs), n = ta(t.__typedOnClicks), i = ra(t.__typedOnRemoves), s = na(t.__typedOnMouseEnters), o = ia(t.__typedOnMouseLeaves);
    return new et(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return tk.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return Xi().updateFromJSON(t);
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
      Kn(n, fn(t.theme.typedMark, a)), c.length > 1 && Kn(n, fn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Kn(n, fn("annotationId", l));
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
      const o = t.__typedIDs[s] ?? [], a = this.__typedIDs[s] ?? [], c = o.length, l = a.length, d = fn(n.theme.typedMark, s), u = fn(n.theme.typedMarkOverlap, s);
      c !== l && (c === 0 ? l === 1 && Kn(r, d) : l === 0 && Qo(r, d), c === 1 ? l === 2 && Kn(r, u) : l === 1 && Qo(r, u));
      const p = new Set(o), f = new Set(a);
      for (const g of o)
        f.has(g) || Qo(r, fn("annotationId", g));
      for (const g of a)
        p.has(g) || Kn(r, fn("annotationId", g));
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
    const r = this.getWritable(), n = Ps(r.__typedIDs);
    r.__typedIDs = Ps(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && js(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = ta(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Ce(t) ? jn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ra(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Ce(t) ? Pi.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = na(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Ce(t) ? Bn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ia(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Ce(t) ? Vn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Ce(a))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && js(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = Xi(this.__typedIDs, this.getTypedOnClicks());
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
    if (!P(r) || n === "html")
      return !1;
    const i = r.anchor, s = r.focus, o = i.getNode(), a = s.getNode(), l = r.isBackward() ? i.offset - s.offset : s.offset - i.offset;
    return this.isParentOf(o) && this.isParentOf(a) && this.getTextContent().length === l;
  }
  excludeFromCopy(t) {
    return t !== "clone";
  }
  remove(t) {
    const r = this.getWritable(), n = this.getTypedIDs();
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), jn.delete(r.getKey()), Pi.delete(r.getKey()), Bn.delete(r.getKey()), Vn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
  }
  getOrCreateDOMClickListener(t) {
    return this.__domOnClickListener || (this.__domOnClickListener = (r) => {
      this.handleDOMClick(r, t);
    }), this.__domOnClickListener;
  }
  handleDOMClick(t, r) {
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
  getOrCreateDOMMouseEnterListener(t) {
    return this.__domOnMouseEnterListener || (this.__domOnMouseEnterListener = (r) => {
      this.handleDOMMouseEnter(r, t);
    }), this.__domOnMouseEnterListener;
  }
  handleDOMMouseEnter(t, r) {
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === qa) {
      const t = jn.get(this.getKey());
      this.__typedOnClicks = t ?? {};
    }
    return this.__typedOnClicks;
  }
  syncTypedOnClicksToRegistry() {
    if (!this.__typedOnClicks || Object.keys(this.__typedOnClicks).length === 0) {
      jn.delete(this.getKey()), this.__typedOnClicks && Object.keys(this.__typedOnClicks).length === 0 && (this.__typedOnClicks = void 0);
      return;
    }
    jn.set(this.getKey(), this.__typedOnClicks);
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
    const i = Fr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Fr(this.__typedOnClicks, t);
      this.__typedOnClicks = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnClicksToRegistry();
  }
  pruneTypedOnClicks() {
    if (!this.__typedOnClicks || this.__typedOnClicks === qa) {
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
    if (this.__typedOnRemoves === void 0 || this.__typedOnRemoves === Ra) {
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
    const i = Fr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Fr(this.__typedOnRemoves, t);
      this.__typedOnRemoves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnRemovesToRegistry();
  }
  pruneTypedOnRemoves() {
    if (!this.__typedOnRemoves || this.__typedOnRemoves === Ra) {
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
    if (this.__typedOnMouseEnters === void 0 || this.__typedOnMouseEnters === $a) {
      const t = Bn.get(this.getKey());
      this.__typedOnMouseEnters = t ?? {};
    }
    return this.__typedOnMouseEnters;
  }
  syncTypedOnMouseEntersToRegistry() {
    if (!this.__typedOnMouseEnters || Object.keys(this.__typedOnMouseEnters).length === 0) {
      Bn.delete(this.getKey()), this.__typedOnMouseEnters && Object.keys(this.__typedOnMouseEnters).length === 0 && (this.__typedOnMouseEnters = void 0);
      return;
    }
    Bn.set(this.getKey(), this.__typedOnMouseEnters);
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
    const i = Fr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Fr(this.__typedOnMouseEnters, t);
      this.__typedOnMouseEnters = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseEntersToRegistry();
  }
  pruneTypedOnMouseEnters() {
    if (!this.__typedOnMouseEnters || this.__typedOnMouseEnters === $a) {
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === La) {
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
    const i = Fr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Fr(this.__typedOnMouseLeaves, t);
      this.__typedOnMouseLeaves = Object.keys(o).length > 0 ? o : void 0;
    }
    this.syncTypedOnMouseLeavesToRegistry();
  }
  pruneTypedOnMouseLeaves() {
    if (!this.__typedOnMouseLeaves || this.__typedOnMouseLeaves === La) {
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
    for (; Ce(t) && Mu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Ce(r) && Mu(this.getTypedIDs(), r.getTypedIDs()); )
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
function Ps(e = lp) {
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
function ta(e) {
  if (!e || e === qa)
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
function ra(e) {
  if (!e || e === Ra)
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
function na(e) {
  if (!e || e === $a)
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
function ia(e) {
  if (!e || e === La)
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
function Fr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Su(e) {
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
function Mu(e, t) {
  const r = Su(e), n = Su(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function ik(e, t) {
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
function sk(e, t) {
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
function ok(e, t) {
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
function ak(e, t) {
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
function fn(e, t) {
  return `${e}-${t}`;
}
function Eu(e) {
  return `external-${e}`;
}
function Xi(e, t, r, n, i) {
  return Ve(new et(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof et;
}
function up(e) {
  return e?.type === et.getType();
}
function js(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function dp(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), p = u ? l : c, f = u ? c : l;
  let g, h;
  for (let y = 0; y < d; y++) {
    const k = a[y];
    if (L(h) && h.isParentOf(k))
      continue;
    const _ = y === 0, C = y === d - 1;
    let M = null;
    if (S(k)) {
      const E = k.getTextContentSize(), z = _ ? p : 0, W = C ? f : E;
      if (z === 0 && W === 0)
        continue;
      const j = k.splitText(z, W);
      M = j.length > 1 && (j.length === 3 || _ && !C || W === E) ? j[1] : j[0];
    } else {
      if (Ce(k))
        continue;
      L(k) && k.isInline() && (M = k);
    }
    if (M !== null) {
      if (M && M.is(g))
        continue;
      const E = M.getParent();
      (E == null || !E.is(g)) && (h = void 0), g = E, h === void 0 && (h = Xi(), h.addID(t, r, n, i, s, o), M.insertBefore(h)), h.append(M);
    } else
      g = void 0, h = void 0;
  }
  t === Vr && L(h) && (u ? h.selectStart() : h.selectEnd());
}
function ck(e, t, r) {
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
const lk = ["type", "marker", "content"], Ia = "unknown", fp = 1, uk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
class wn extends Zt {
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
    return new wn(r, n, i, s);
  }
  static importDOM() {
    return {
      [Ia]: (t) => fk(t) ? {
        conversion: dk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Lc().updateFromJSON(t);
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
    const t = document.createElement(Ia);
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
    const r = t ?? w();
    if (!r)
      return !1;
    if (go(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function dk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Lc(t, r) };
}
function Lc(e, t, r) {
  return Ve(new wn(e, t, r));
}
function fk(e) {
  return e?.tagName.toLowerCase() === Ia;
}
function Ue(e) {
  return e instanceof wn;
}
const pp = 1, pk = "attribute-run";
function sa(e) {
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
    return hp(t.runKind).updateFromJSON(t);
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
    const r = sa(this.__runKind);
    return r !== void 0 && t.classList.add(r), t;
  }
  updateDOM(t, r) {
    if (t.__runKind !== this.__runKind) {
      const n = sa(t.__runKind);
      n !== void 0 && r.classList.remove(n);
      const i = sa(this.__runKind);
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
      version: pp
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
function hp(e) {
  return Ve(new qr(e));
}
function De(e) {
  return e instanceof qr;
}
const Qi = "id", gp = 1, hk = [
  "type",
  "marker",
  "code",
  "content"
];
class Ft extends Zt {
  __marker = Qi;
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
    return new Ft(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return mp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return yy(t);
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
      version: gp
    };
  }
}
function mp(e, t) {
  return Ve(new Ft(e, t));
}
function ht(e) {
  return e instanceof Ft;
}
function yp(e) {
  return e?.type === Ft.getType();
}
const Bs = "c", bp = 1, gk = [
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
    super(o), this.__marker = Bs, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new Ot(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return kp().updateFromJSON(t);
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
      version: bp
    };
  }
}
function kp(e, t, r, n, i) {
  return Ve(new Ot(e, t, r, n, i));
}
function we(e) {
  return e instanceof Ot;
}
function mk(e) {
  return e?.type === Ot.getType();
}
const Tp = [
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
], xp = [
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
  ...Tp,
  ...xp
], _p = 1, bk = ["type", "marker", "content"];
class be extends Zt {
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
    return new be(r, n, i);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (yk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Tp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && xp.includes(t);
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
    return be.isValidFootnoteMarker(t) || be.isValidCrossReferenceMarker(t);
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
    return Au(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Au(r, this.__marker, n)), !1;
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
      version: _p
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
function Au(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function kk(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Mr(t) };
}
function Mr(e, t) {
  return Ve(new be(e, t));
}
function Tk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return be.isValidMarker(t) && e.classList.contains(be.getType());
}
function I(e) {
  return e instanceof be;
}
function xk(e) {
  return e?.type === be.getType();
}
const Cp = 1, _k = "c", vp = "span";
class hr extends hs {
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
    return new hr(r, n, i, s, o, a, c);
  }
  static importDOM() {
    return {
      span: (t) => Sp(t) ? {
        conversion: Ck,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Ic().updateFromJSON(t);
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
    const t = document.createElement(vp);
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
    return this.getShowMarker() ? Dt(this.getMarker(), this.getNumber()) : this.getNumber();
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
      version: Cp
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
  return { node: Ic(t) };
}
function Ic(e, t, r, n, i, s) {
  return Ve(new hr(e, t, r, n, i, s));
}
function Sp(e) {
  return e ? e.classList.contains(zs) && e.tagName.toLowerCase() === vp : !1;
}
function ys(e) {
  return e instanceof hr;
}
function vk(e) {
  return e?.type === hr.getType();
}
const Mp = 1;
class Xr extends Cc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Xr(t.__key);
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
      version: Mp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ht();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ht() {
  return Ve(new Xr());
}
function fr(e) {
  return e instanceof Xr;
}
function ko(e) {
  return e?.type === Xr.getType();
}
const Sk = [
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
], Ep = 1, Mk = ["type", "marker", "content"];
class nt extends Cc {
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
    return t !== void 0 && (Sk.includes(t) || (r?.includes(t) ?? !1));
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
    return Zi().updateFromJSON(t);
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
      version: Ep
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Zi(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ek(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = Zi(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function Zi(e, t) {
  return Ve(new nt(e, t));
}
function le(e) {
  return e instanceof nt;
}
function Dc(e) {
  return e?.type === nt.getType();
}
const Vs = "v", Ap = 1, Ak = [
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
    super(r ?? t, a), this.__marker = Vs, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new ft(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Pp().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Pa, `usfm_${this.__marker}`), r.setAttribute("data-number", this.__number), r;
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
      version: Ap
    };
  }
}
function Pp(e, t, r, n, i, s) {
  return Ve(new ft(e, t, r, n, i, s));
}
function Ae(e) {
  return e instanceof ft;
}
function Np(e) {
  return e?.type === ft.getType();
}
const Pk = "​", ni = Pk;
var Pu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Pu || (Pu = {}));
var Nu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Nu || (Nu = {}));
function Nk() {
  return he(ni);
}
function Ok(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ni, ""));
}
function bs(e) {
  return e.length > 0 && e.includes(ni) && e.replaceAll(ni, "") === "";
}
function Uc(e) {
  return S(e) && bs(e.getTextContent());
}
function Op(e) {
  return mk(e) || vk(e);
}
function Je(e) {
  return we(e) || ys(e);
}
function wp(e, t) {
  return e.find((r) => Je(r) && r.getNumber() === t.toString());
}
function wk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Je(r));
}
function Ou(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function qp(e) {
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
function Xt(e) {
  return rt(e, K) ?? void 0;
}
function qk(e) {
  return ht(e) || we(e) || I(e) || ys(e) || fr(e) || He(e) || le(e) || K(e) || Ae(e) || Ue(e);
}
function Rp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Rk(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function At(e) {
  return ve(e) || ht(e);
}
function ve(e) {
  return le(e) || fr(e);
}
function $k(e) {
  return Dc(e) || ko(e);
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
function Cn(e, t) {
  const r = ie(t, _n), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Lk(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? Ey(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Ik(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function ii(e) {
  return e?.type === Be.getType();
}
function Dk(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function Uk(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function Re(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ot(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function $p(e, t, r) {
  const n = Re(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Dt(e, t) {
  let r = Re(e);
  return t && (r += `${R}${t}`), r += " ", r;
}
function Fk(e) {
  const t = e[gs];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Lp(e) {
  return Bc(e) || cp(e) && e.textType === "marker" || ii(e) && Fk(e) === "attribute" ? "" : ii(e) && e.text !== R ? e.text : xk(e) ? e.children.map((t) => Lp(t)).join("") : "";
}
function zk(e) {
  return e.map((r) => Lp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Pt(e) {
  return " " + e + R;
}
function Fc(e) {
  const t = [];
  for (const r of e) {
    if (!I(r))
      continue;
    const n = Ip(r);
    n !== Ut && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Ip(e) {
  return O(e) || Rr(e) || S(e) && ie(e, ae) === "attribute" ? "" : S(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => Ip(t)).join("") : "";
}
function Rr(e) {
  return Yt(e) && e.getTextType() === "marker";
}
function zt(e) {
  return O(e) || Rr(e);
}
function wu(e, t) {
  Kk(e, t), e.setMarker(t);
}
function Kk(e, t) {
  const r = e.getMarker(), n = Re(r), i = Re(r, !0), s = ot(r), o = ot(r, !0), a = be.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!zt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (O(c))
        c.setMarker(t);
      else if (Rr(c)) {
        const p = l.startsWith(Re("", !0));
        c.setTextContent(d ? Re(t, p) : ot(t, p));
      }
    }
  });
}
function ze(e, t = by) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Ne(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Dp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function zc(e) {
  if (!P(e))
    return qu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !S(t)))
    return t ?? void 0;
  try {
    return qu(e) ?? t ?? void 0;
  } catch (n) {
    if (Dp(n))
      return t ?? void 0;
    throw n;
  }
}
function jk(e, t) {
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
function Kc(e, t) {
  if (!t)
    return !1;
  const r = t.split("-").map((n) => parseInt(n));
  if (r.length < 1 || r.length > 2 || r[0] > r[1])
    throw new Error("isVerseInRange: invalid range");
  return r.length === 1 ? e === r[0] : r.length === 2 && isNaN(r[1]) ? e >= r[0] : (r.length === 2 && isNaN(r[0]) || e >= r[0]) && e <= r[1];
}
function Up(e) {
  return !!e && e.includes("-");
}
function Fp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function qu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function jc(e) {
  if (!e)
    return !1;
  if (di(e) || O(e) || Rr(e) || De(e) || Yt(e) && e.getTextType() === "attribute")
    return !0;
  if (S(e)) {
    const t = ie(e, ae);
    if (t === pr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === R || bs(r))
      return !0;
  }
  return !1;
}
function To() {
  const e = he(R);
  return kt(e, ae, pr), e.setMode("token"), e;
}
function Bk(e) {
  const t = e.getTextContent();
  t.startsWith(R) || e.setTextContent(R + t);
}
function qn(e) {
  return S(e) && ie(e, ae) === pr;
}
function zp(e) {
  const t = e.getFirstChild();
  if (!zt(t) || t === null || qn(t.getNextSibling()))
    return !1;
  const r = w();
  if (!P(r) || !r.isCollapsed())
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
    if (!jc(s)) {
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
function xo(e) {
  let t = e.getParent();
  for (; t && Ce(t); )
    t = t.getParent();
  return t;
}
function Vk(e, t) {
  return hi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function Wk(e, t) {
  const r = xo(e);
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
function Hk(e, t) {
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
function Kp(e, t) {
  const r = hi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (jc(n))
    return Kp(e, t + 1);
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
function Gk(e, t) {
  if (t <= 0)
    return 0;
  const r = hi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? Jk(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function Jk(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const Yk = 1;
class gr extends Be {
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
    return new gr(t.__marker, t.__markerSyntax, t.__key, t.__nested);
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
      version: Yk
    };
  }
}
function lt(e, t, r) {
  return Ve(new gr(e, t, void 0, r));
}
function O(e) {
  return e instanceof gr;
}
function Bc(e) {
  return e?.type === gr.getType();
}
function rn(e) {
  return e.getTextContent() === gn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function Xk(e) {
  e.setTextContent(gn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function gn(e, t, r = !1) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : Re(e, r);
}
const Qk = /* @__PURE__ */ new Set(["closed"]);
function cr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !Qk.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function jp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function Bp(e) {
  const t = Object.keys(e).filter((n) => !Pb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function Vp(e, t, r, n) {
  return jp(
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
  return e.getChildren().find((t) => O(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function Zk(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Ki(e) === void 0 && Wp(e) === void 0;
}
function Wp(e) {
  return e.getChildren().find((t) => S(t) && ie(t, ae) === "attribute");
}
function es(e, t) {
  return ks(e.getNextSibling(), t);
}
const eT = /^[ \u00A0]+$/;
function Vc(e) {
  if (rn(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = Re(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && eT.test(r.slice(t.length));
}
function ks(e, t) {
  let r, n, i, s;
  return De(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), O(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Vc(e) && (r = e, e = e.getNextSibling()), S(e) && ie(e, ae) === "attribute" && (n = e, e = e.getNextSibling()), O(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && rn(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
}
function ts(e) {
  const t = e.getChildren();
  let r = 0;
  for (; r < t.length; ) {
    const i = t[r];
    if (!O(i) || i.getMarkerSyntax() !== "opening")
      break;
    r++;
  }
  const n = t[r];
  if (S(n) && n.getTextContent() === Pt(e.getCaller()))
    return n;
}
function Hp(e) {
  const t = ts(e);
  return t ? ks(t.getNextSibling(), "cat") : {};
}
function _o(e) {
  const t = e.getFirstChild();
  if (!(!S(t) || O(t)) && ie(t, ae) !== "attribute")
    return t;
}
function Gp(e) {
  const t = _o(e);
  return t ? ks(t.getNextSibling(), "ca") : {};
}
function Jp(e) {
  const t = _o(e);
  if (!t)
    return;
  const r = ks(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function Yp(e) {
  const t = Jp(e);
  return t ? ks(t.getNextSibling(), "cp") : {};
}
function Xp(e) {
  const t = e.getParent();
  if (!I(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Ae(n))
        return n;
      if (!(O(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || S(n) && ie(n, ae) === "attribute" || I(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || De(n)))
        return;
    }
}
function Co(e) {
  let t, r, n, i, s = e.getNextSibling();
  return De(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), O(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  Vc(s) && (t = s, s = s.getNextSibling()), S(s) && ie(s, ae) === "attribute" && (r = s, s = s.getNextSibling()), O(s) && s.getMarkerSyntax() === "selfClosing" && rn(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function Wc(e) {
  return I(xo(e));
}
function Da(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? Wc(t) : t.getChildren().some((i) => I(i) && i.getMarker() === r) ? !0 : void 0;
}
function tT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = Da(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function vo(e) {
  return S(e) && e.getType() === Be.getType() && ie(e, ae) !== "attribute";
}
function Hc(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Da(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return O(r) ? Da(r, t) === !0 ? "spacer" : void 0 : vo(r) ? r.getTextContent().startsWith(R) ? void 0 : "prefix" : "spacer";
}
function rT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (O(t) && Hc(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function Qp(e, t) {
  const r = w();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Zp(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!O(t))
      return;
    const r = Hc(t, e);
    if (r !== void 0 && !Qp(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        S(n) && n.setTextContent(R + n.getTextContent());
      } else
        t.insertAfter(he(R));
  });
}
function eh(e) {
  return e.isAttached() ? e.getChildren().some((t) => O(t) && Hc(t, e) !== void 0 && Qp(t, e)) : !1;
}
const nT = "file", iT = "src", sT = "colspan", oT = "category", aT = "alt", cT = "closed", lT = "false";
function uT(e) {
  return e[cT] !== lT;
}
function dT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === nT ? iT : t,
    r
  ]));
}
function th(e, t) {
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
function rh(e, t, r) {
  const n = r ?? {}, i = uT(n);
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
        opening: `\\${th(t, n[sT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: cr(dT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [oT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + cr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [aT]: s, ...o } = n;
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
const _t = { wantsRun: !1, valueText: void 0 }, $r = {};
function oa(e, t) {
  if (t === "va")
    return e;
  const r = es(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function Gc(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed())
    return !1;
  const r = t.anchor.getNode();
  if (r.is(e) && t.anchor.offset === e.getTextContentSize())
    return !0;
  if (L(e)) {
    const i = e.getLastDescendant();
    if (i !== null && r.is(i) && t.anchor.offset === i.getTextContentSize())
      return !0;
  }
  const n = e.getNextSibling();
  return n !== null && r.is(n) && t.anchor.offset === 0;
}
function So(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = w();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function fT(e) {
  return De(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : O(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : S(e) && ie(e, ae) === "attribute";
}
function pT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!S(e) || ie(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function aa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (Ae(t))
      return t;
    if (!fT(t))
      return;
  }
}
function Ru(e) {
  return {
    kind: e,
    ownerPredicate: (t) => Ae(t),
    ownerOf: (t) => {
      if (De(t))
        return t.getRunKind() === e ? aa(t) : void 0;
      const r = t.getParent();
      return De(r) ? r.getRunKind() === e ? aa(r) : void 0 : pT(t) === e ? aa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!Ae(t))
        return _t;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? _t : { wantsRun: !0, valueText: R + r };
    },
    scanPieces: (t) => Ae(t) ? es(oa(t, e), e) : $r,
    graceSite: (t, r) => Ae(t) ? !r.opener && !r.closer ? Gc(oa(t, e)) : So(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => Ae(t) ? oa(t, e) : void 0
    }
  };
}
const hT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => $r,
  graceSite: (e) => I(e) && eh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, gT = {
  kind: "char",
  ownerPredicate: (e) => I(e),
  ownerOf: (e) => {
    if (!S(e) || ie(e, ae) !== "attribute")
      return;
    const t = e.getParent();
    return I(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!I(e) || Ki(e) === void 0)
      return _t;
    const t = cr(e.getUnknownAttributes() ?? {}, yo(e.getMarker()));
    return t === "" ? _t : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => I(e) ? { value: Wp(e) } : $r,
  graceSite: (e, t) => {
    if (!I(e) || t.value)
      return !1;
    const r = Ki(e);
    if (!r)
      return !1;
    const n = w();
    if (!P(n) || !n.isCollapsed())
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
    insertRunBefore: (e) => I(e) ? Ki(e) : void 0
  }
};
function nh(e) {
  if (O(e))
    return e.getMarker() === "cat";
  if (!S(e) || ie(e, ae) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return O(t) && t.getMarker() === "cat";
}
function mT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = ts(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!nh(n))
        return;
    }
}
const yT = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (De(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return De(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : nh(e) ? mT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return _t;
    const t = e.getCategory();
    return t === void 0 ? _t : { wantsRun: !0, valueText: R + t };
  },
  scanPieces: (e) => K(e) ? Hp(e) : $r,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = ts(e);
      return r !== void 0 && Gc(r);
    }
    return So(t);
  },
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: {
    writer: "wrapper",
    runKind: "cat",
    glyphs: "with-value",
    glyphMarker: () => "cat",
    closerSyntax: "closing",
    insertRunAfter: (e) => K(e) ? ts(e) : void 0
  }
};
function bT(e) {
  return De(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : O(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : S(e) && ie(e, ae) === "attribute";
}
function kT(e) {
  if (O(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!S(e) || ie(e, ae) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!O(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function TT(e) {
  const t = e.getParent();
  if (!we(t))
    return;
  const r = _o(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!bT(n))
        return;
    }
}
function $u(e) {
  const t = (r) => we(r) ? e === "ca" ? _o(r) : Jp(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => we(r),
    ownerOf: (r) => {
      if (De(r))
        return r.getRunKind() === e && we(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return De(n) ? n.getRunKind() === e && we(n.getParent()) ? n.getParent() ?? void 0 : void 0 : kT(r) === e ? TT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!we(r))
        return _t;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? _t : { wantsRun: !0, valueText: R + n };
    },
    scanPieces: (r) => we(r) ? e === "ca" ? Gp(r) : Yp(r) : $r,
    graceSite: (r, n) => {
      if (!we(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && Gc(i);
      }
      return So(n);
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
function ih(e) {
  if (O(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return S(e) && ie(e, ae) === "attribute";
}
function xT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (He(t)) {
      const r = O(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!ih(t))
      return;
  }
}
const _T = {
  kind: "milestone",
  ownerPredicate: (e) => He(e),
  ownerOf: (e) => {
    const t = De(e) ? e.getRunKind() === "milestone" ? e : void 0 : De(e.getParent()) ? e.getParent() : ih(e) ? e : void 0;
    if (!t || De(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return De(t) ? He(r) ? r : void 0 : xT(t);
  },
  expectedPieces: (e) => {
    if (!He(e))
      return _t;
    const t = Vp(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = cr(t, bo(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : R + r };
  },
  scanPieces: (e) => {
    if (!He(e))
      return $r;
    const { opening: t, attribute: r, closing: n, wrapper: i } = Co(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!He(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = w();
      if (!P(r) || !r.isCollapsed())
        return !1;
      const n = r.anchor.getNode(), i = e.getPreviousSibling();
      if (i !== null && n.is(i) && r.anchor.offset === i.getTextContentSize())
        return !0;
      const s = e.getNextSibling();
      return s !== null && n.is(s) && r.anchor.offset === 0;
    }
    return So(t);
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
}, CT = rh("optbreak", void 0, void 0).opening, vT = {
  kind: "optbreak",
  ownerPredicate: (e) => Ue(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Ue(t) || t.getTag() !== "optbreak"))
      return S(e) || Yt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: CT }),
  scanPieces: (e) => Ue(e) ? { value: e.getFirstChild() ?? void 0 } : $r,
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
  ownerPredicate: (e) => Ue(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => $r,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, MT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => _t,
  scanPieces: () => $r,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, rs = [
  hT,
  gT,
  Ru("va"),
  Ru("vp"),
  yT,
  $u("ca"),
  $u("cp"),
  _T,
  vT,
  ST,
  MT
], ET = new Map(rs.map((e) => [e.kind, e]));
function vn(e) {
  const t = ET.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function Sn(e) {
  for (const t of rs) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function sh(e) {
  return Sn(e) !== void 0;
}
const Hs = "unmatched", oh = 2;
function ji(e) {
  return `\\${e}`;
}
class Lr extends Be {
  __marker;
  constructor(t = "", r) {
    super(ji(t), r), this.__marker = t, this.__mode = 1;
  }
  static getType() {
    return "unmatched";
  }
  static clone(t) {
    const { __marker: r, __key: n } = t;
    return new Lr(r, n);
  }
  static importDOM() {
    return {
      [Hs]: (t) => PT(t) ? {
        conversion: AT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Jc().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(mu), r.title = Lu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Lu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(Hs);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(mu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: oh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function ah(e) {
  return e.getTextContent() === ji(e.getMarker());
}
function Lu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function AT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: Jc(t) };
}
function Jc(e) {
  return Ve(new Lr(e));
}
function PT(e) {
  return e?.tagName.toLowerCase() === Hs;
}
function Ir(e) {
  return e instanceof Lr;
}
const ch = "table", Ua = "immutable-table", lh = 1, NT = ["type", "marker", "content"];
class Rn extends Zt {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Ua;
  }
  static clone(t) {
    return new Rn(t.__unknownAttributes, t.__key);
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
      type: Ua,
      ...t !== void 0 && { unknownAttributes: t },
      version: lh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function OT(e) {
  return Ve(new Rn(e));
}
function uh(e) {
  return e instanceof Rn;
}
function wT(e) {
  return e?.type === Ua;
}
const dh = "table:row", Iu = "immutable-table-row", fh = 1, Fa = "tr", qT = ["type", "marker", "content"];
class gi extends Zt {
  __marker;
  __unknownAttributes;
  constructor(t = Fa, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Iu;
  }
  static clone(t) {
    return new gi(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return RT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Fa).setUnknownAttributes(t.unknownAttributes);
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
      version: fh
    };
  }
}
function RT(e, t) {
  return Ve(new gi(e, t));
}
const ph = "table:cell", Du = "immutable-table-cell", hh = 1, za = "tc1", $T = [
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
  constructor(t = za, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Du;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new mi(r, n, i, s, o);
  }
  static importJSON(t) {
    return IT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? za).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
      type: Du,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: hh
    };
  }
}
function IT(e, t, r, n) {
  return Ve(new mi(e, t, r, n));
}
function Mo(e, t) {
  const r = e.getChildAtIndex(t);
  return S(r) ? r : void 0;
}
function Qt(e, t) {
  const r = Mo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function ns(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function DT(e) {
  return e.getChildren().some((t) => O(t) && t.getMarkerSyntax() === "closing");
}
function UT(e) {
  return ns(e) ? void 0 : { closed: "false" };
}
function FT(e, t, r, n) {
  const i = t.getMarker(), s = Wc(t), o = DT(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    vo(a) && !a.getTextContent().startsWith(R) && a.setTextContent(R + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function Mn(e) {
  return rt(e, I) ?? void 0;
}
function Yc(e) {
  let t = e.getParent();
  for (; I(t); )
    t = t.getParent();
  return t;
}
function Ka(e) {
  const t = gh(e);
  return e.getChildren().every((r) => O(r) || t && ie(r, ae) === "attribute" || S(r) && r.getTextContent().replaceAll(R, "") === "");
}
function gh(e) {
  return ns(e);
}
function zT(e, t) {
  const r = e.getUnknownAttributes(), n = r ? cr(r, yo(e.getMarker())) : "";
  n !== "" && t.insertAfter(he(n)), e.remove();
}
function KT(e, t) {
  if (ns(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", Wc(e)));
}
function jT(e, t) {
  return I(e) && !ns(e) && !ns(t);
}
function BT(e, t, r) {
  Ka(e) && e.getChildren().forEach((i) => {
    O(i) || i.remove();
  });
  const [n] = t;
  r && vo(n) && !n.getTextContent().startsWith(R) && n.setTextContent(R + n.getTextContent()), e.append(...t);
}
function VT(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = gh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = O(l) && l.getMarkerSyntax() === "closing", p = s && ie(l, ae) === "attribute";
    !u && !p && o.push(l), l = d;
  }
  const a = jT(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      BT(e, o, n);
    else {
      const l = Mr(t.getMarker(), UT(t));
      FT(l, t, o, n), e.insertAfter(l), Ka(l) ? l.remove() : c = l;
    }
  i && !a && KT(t, n), Ka(t) && zT(t, c);
}
function si(e, t) {
  let r = e.getParent();
  for (; I(r); )
    VT(e, r, t), r = e.getParent();
}
function Xc(e) {
  if (S(e) && !O(e)) {
    const t = e.getTextContent().startsWith(R) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !O(r));
    if (t) {
      Xc(t);
      return;
    }
    e.selectEnd();
  }
}
const Zn = /* @__PURE__ */ new WeakMap();
function WT(e, t) {
  return Zn.set(e, t), () => {
    Zn.get(e) === t && Zn.delete(e);
  };
}
function Uu(e) {
  return Zn.get(e);
}
function HT(e) {
  return Zn.get(ti())?.has(e.getKey()) ?? !1;
}
function GT(e) {
  Zn.get(ti())?.add(e.getKey());
}
function JT(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function ja(e) {
  return !!(e.opener || e.value || e.closer);
}
function Fu(e) {
  return /^\s/.test(e);
}
function Qc(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Fu(t) || !Fu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Eo(e, t, r) {
  return r.wantsRun ? Qc(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : JT(t);
}
function YT(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return Qc(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function mh(e, t) {
  return !ja(e.scanPieces(t));
}
function Ts(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Eo(e, n, r))
    return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || Ws(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function XT(e, t, r, n) {
  return !r.wantsRun || ja(n) || Ay(Ji) ? !1 : ti().getEditorState().read(() => {
    const i = oe(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : ja(e.scanPieces(i));
  });
}
function QT(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function zu(e) {
  const t = he(e);
  return kt(t, ae, "attribute"), t;
}
function ZT(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = hp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function ex(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const p = c?.(t);
    if (!p || n.valueText === void 0)
      return;
    S(r.value) ? r.value.setTextContent(n.valueText) : p.insertBefore(zu(n.valueText));
    return;
  }
  const l = ZT(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const p = lt(o(t), "opening"), f = l.getFirstChild();
    return f ? f.insertBefore(p) : l.append(p), p;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : S(u) ? Qc(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = zu(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function is(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Eo(e, i, n) && !HT(t)) {
    if (XT(e, t, n, i)) {
      GT(t);
      return;
    }
    if (!Ts(e, t)) {
      if (!n.wantsRun) {
        QT(i);
        return;
      }
      ex(e, t, i, n);
    }
  }
}
function tx(e, t, r) {
  is(e, t), t.isAttached() && Ts(e, t) && r.add(t.getKey());
}
function yh(e) {
  if (!S(e))
    return !1;
  if (O(e) || Ae(e) || Ir(e))
    return !0;
  const t = ie(e, ae);
  return t === "attribute" || t === pr;
}
function Zc(e, t) {
  return O(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && rn(e) && I(e.getParent())) : !1;
}
function rx() {
  const e = w();
  return P(e) ? Zc(e.focus.getNode(), e.focus.offset) : !1;
}
function bh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return S(t) && yh(t) ? t : void 0;
}
function nx(e) {
  const t = bh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function ix(e) {
  const t = bh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Ku(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function ju(e, t) {
  e.set(t.key, t.offset, t.type);
}
function sx(e, t) {
  let r = ix(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!S(n))
      return;
    if (!yh(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function Bu(e, t) {
  const r = sx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function kh(e) {
  if (e.isCollapsed()) {
    const a = nx(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Ku(r), Ku(n)], s = Bu(r, "next"), o = Bu(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (ju(r, i[0]), ju(n, i[1]), !1) : !0;
}
const Gs = "verse-block", Th = 1, ox = "verse-block";
class yi extends Zt {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return Gs;
  }
  static clone(t) {
    return new yi(t.__number, t.__key);
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
    return Fp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(ox), Vu(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && Vu(r, this.__number), !1;
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
      version: Th
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function Vu(e, t) {
  const { start: r, end: n } = Fp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), Wu(e, "data-verse-start", i ? r : NaN), Wu(e, "data-verse-end", i ? n : NaN);
}
function Wu(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function ax(e) {
  return Ve(new yi(e));
}
function ss(e) {
  return e instanceof yi;
}
function cx(e) {
  return e?.type === Gs;
}
const lx = [
  Ft,
  hr,
  Ot,
  ft,
  be,
  Pe,
  Jt,
  gr,
  wn,
  wr,
  Lr,
  nt,
  Xr,
  Rn,
  gi,
  mi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  qr,
  {
    replace: Cc,
    with: () => Ht(),
    withKlass: Xr
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
  paragraph: b.Paragraph,
  character: b.Character,
  note: b.Note,
  milestone: b.Milestone
};
function dx(e) {
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
      type: ux[n.styleType] ?? b.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ur(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function Hu(e, t, r) {
  const n = {
    type: vr,
    version: Cr,
    content: e
  }, i = t.serializeEditorState(n, r);
  return ko(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const xh = "v", _h = 1, fx = "verse-selected";
class vt extends hs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = xh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => gx(t) ? {
        conversion: hx,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return el().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Pa, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && On(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Pa, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
  }
  decorate() {
    const t = this.getShowMarker() ? Dt(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Fs + this.getNumber() + Fs
    );
    return v(px, { nodeKey: this.getKey(), text: t });
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
      if (Dp(r))
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
  const [r] = Qy(e);
  return v("span", { className: r ? fx : void 0, children: t });
}
function hx(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: el(t) };
}
function el(e, t, r, n, i, s) {
  return Ve(new vt(e, t, r, n, i, s));
}
function gx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === xh;
}
function $n(e) {
  return e instanceof vt;
}
function mx(e) {
  return e?.type === vt.getType();
}
function me(e) {
  return Ae(e) || $n(e);
}
function Ch(e) {
  return Np(e) || mx(e);
}
function yx(e) {
  return bx(e).find((t) => le(t));
}
function bx(e) {
  return e.some(ss) ? e.flatMap((t) => ss(t) ? t.getChildren() : t) : e;
}
function Ao(e) {
  return L(e) ? ss(e) ? e.getChildren().flatMap(Ao) : e.getChildren() : [];
}
function kx(e, t) {
  return Ao(e).find((i) => me(i) && Kc(t, i.getNumber()));
}
function Tx(e, t) {
  return t === 0 ? yx(e) : e.map((r) => kx(r, t)).filter((r) => r)[0];
}
function Ys(e) {
  return Ao(e).find((r) => me(r));
}
function vh(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (me(i))
      return i;
  }
}
function xx(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (me(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Je(r); ) {
    const n = Ys(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Ba(e) {
  return Ao(e).findLast((t) => me(t));
}
function _x(e) {
  if (!Ae(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Cx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function vx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Cx(t, e, r);
  if (S(e)) {
    const n = _x(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function Gu(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Sx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return Gu(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return vx(e, t) ? { verseNum: n } : Gu(e);
}
function Mx(e) {
  return qk(e) || $n(e);
}
function tl(e) {
  if (S(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(R) && e.setTextContent(`${t} `);
  }
}
function Sh(e) {
  if (S(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Va(e, t) {
  return e.getEditorState().read(() => !oe(t));
}
function Ex(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = rl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && L(i) && L(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && L(i)) {
      const s = i.getChildren(), o = r.getIndexWithinParent();
      for (let a = o + 1; a < s.length; a++) {
        const c = s[a];
        if (me(c)) {
          n = c;
          break;
        }
      }
    }
    if (!n && i) {
      let s = Ju(i);
      for (; s && !Je(s); ) {
        const o = Ys(s);
        if (o) {
          n = o;
          break;
        }
        s = Ju(s);
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
      if (s = s.getNextSibling(), s && Je(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Ax(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = rl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = vh(i, r.getIndexWithinParent())), !n && i) {
      let o = Yu(i);
      for (; o && !Je(o); ) {
        const a = Ba(o);
        if (a) {
          n = a;
          break;
        }
        o = Yu(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Je(s); ) {
      const o = Ba(s);
      if (o) {
        n = o;
        break;
      }
      s = s.getPreviousSibling();
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Ju(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function Yu(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function rl(e, t) {
  if (L(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && me(n))
      return n;
    const i = vh(e, t.anchor.offset);
    if (i)
      return i;
    const s = Ys(e);
    if (s)
      return s;
  }
  return nl(e);
}
function nl(e) {
  if (!e || Je(e))
    return;
  if (me(e))
    return e;
  let t = Ou(e);
  for (; t; ) {
    if (Je(t))
      return;
    if (me(t))
      return t;
    const r = Ba(t);
    if (r)
      return r;
    t = Ou(t);
  }
}
const Px = ["style"], Nx = ["style", "code"], Xs = ["style", "cid"], Ox = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], wx = [
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
], Rx = ["style", "caller", "category", "contents"], $x = ["tag", "marker", "contents"], Lx = [
  "chapter",
  "immutable-chapter",
  "verse",
  "immutable-verse",
  "ms",
  "note",
  "unknown",
  "unmatched"
], os = `
`;
function Ix(e, t) {
  const r = oe(e);
  if (!Nt(r))
    return;
  const n = Mh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Mh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Ff();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (oi(i[u], c)) {
        const p = i[u];
        if (i.splice(u, 1), n += 1, a && p.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      oi(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Er(l) || Nt(l))
        return n;
      At(l) && (a = l);
    }
    if (At(l) && (i.includes(l) || i.push(l)), Eh(l, t)) {
      if (l.getKey() === o)
        return n;
      s.push({ node: l, position: n }), n += 1;
      continue;
    }
    n += il(l, t);
  }
  if (a)
    return n;
}
function Xu(e, t, r = "delta-doc") {
  if (e.length < 2 || !Fx(e[0]) || !Ux(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Dx(n, r)?.getKey());
}
function Dx(e, t = "delta-doc") {
  const r = Ff();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (oi(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      oi(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (At(a) && (i.includes(a) || i.push(a)), Eh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = il(a, t);
    if (Er(a) && l > 0 && e >= n && e < n + l || Nt(a) && n === e)
      return a;
    n += l;
  }
  for (const o of i) {
    if (n === e)
      return o;
    n += 1;
  }
}
function oi(e, t) {
  return e ? t ? !Ws(t.node, e.getKey()) : !0 : !1;
}
function Er(e) {
  return S(e) && !Nt(e);
}
function Nt(e) {
  return Je(e) || me(e) || He(e) || K(e) || Ue(e) || Ir(e);
}
function jr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function Ux(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Lx.includes(t);
}
function Fx(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Eh(e, t) {
  return K(e) || Ue(e) ? !0 : t === "apply" && L(e) && Nt(e);
}
function Ah(e) {
  const t = e.getParent();
  return zt(e) && le(t) && t.getFirstChild() === e;
}
function Wa(e) {
  const t = e.getParent();
  return t !== null && rt(t, De) !== null;
}
function zx(e) {
  const t = e.getParent();
  return I(t) && e.getTextContent() === Ut && t.getChildrenSize() === 1;
}
function Kx(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return O(r) && r === t.getFirstChild() && e.getTextContent() === Pt(t.getCaller());
}
function jx(e) {
  return !sh(e) && il(e, "delta-doc") === e.getTextContentSize();
}
function il(e, t) {
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
    (Uc(e) || Ah(e) || ie(e, ae) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ie(e, ae) === "attribute" || Wa(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Nc) || zx(e) || Kx(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function Ha(e, t) {
  const r = { insert: e.__text }, n = ie(e, Yr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Ph(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function Qu(e) {
  const t = new Ii();
  return e.isEmpty() || e.read(() => {
    const r = Ke();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && fr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = Bx();
    for (const s of i)
      t.push(s);
  }), t;
}
function sl(e, t) {
  const r = [], n = pi(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...Zu(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...Zu(c, n.length, n, i, s, o, a));
  return r;
}
function Bx() {
  return sl();
}
function Zu(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return Vx(e, a, n), Wx(e, a, i, s, o), Hx(e, t, r, i, o, s, a), Je(e) && a.push(Xx(e)), me(e) && a.push(Zx(e)), He(e) && a.push(e_(e)), Ir(e) && a.push(t_(e)), Jx(e, a, s), Gx(e, a, s), s_(c, s), a;
}
function Vx(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    ht(n) ? t.push(Yx(n)) : le(n) ? t.push(Qx(n)) : fr(n) && t.push({ insert: os });
  }
  At(e) && (r.includes(e) || r.push(e));
}
function Wx(e, t, r, n, i) {
  if (!S(e) || Ae(e) || Ir(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = Xt(e) !== void 0;
  if (O(e) && (o || Ah(e) || Wa(e) || sh(e)) || ie(e, ae) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (bs(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && O(c) && c === s.getFirstChild() && a === Pt(s.getCaller()))
    return;
  const l = I(s) ? s : void 0, d = l?.getFirstChild();
  o && l && O(d) && c === d && a.startsWith(R) && (a = a.slice(1));
  const u = a.startsWith(Nc) || ie(e, ae) === "attribute" || Wa(e), p = !!l && a === Ut && l.getChildrenSize() === 1, f = Po(e, n), g = f ? r.filter((k) => f.children.includes(k)) : r, h = Ha(e, g);
  if (h.insert = a, f) {
    if (!a || a === R || u)
      return;
    f.contentsOps?.push(h);
  } else
    p || u || t.push(h);
  const y = a !== "" && !p && !(u && l);
  if (r.length > 0 && y)
    for (const k of r)
      i.add(k);
}
function Hx(e, t, r, n, i, s, o) {
  I(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (oi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = n_(c), d = Po(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function Gx(e, t, r) {
  if (!K(e))
    return;
  const n = r_(e), i = Po(e, r), s = {
    node: e,
    children: pi(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function Jx(e, t, r) {
  if (!Ue(e))
    return;
  const n = i_(e), i = Po(e, r), s = {
    node: e,
    children: pi(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function nn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function Yx(e) {
  const t = { style: Qi, code: e.__code };
  return nn(t, e), { insert: os, attributes: { book: t } };
}
function Xx(e) {
  const t = { style: Bs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), nn(t, e), { insert: { chapter: t } };
}
function Qx(e) {
  const t = { style: e.__marker };
  return nn(t, e), { insert: os, attributes: { para: t } };
}
function Zx(e) {
  const t = { style: Vs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), nn(t, e), { insert: { verse: t } };
}
function e_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), nn(t, e), { insert: { milestone: t } };
}
function t_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function r_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), nn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ie(e, Yr);
  return n && (r.attributes = { segment: n }), r;
}
function n_(e) {
  const t = { insert: "" }, r = Ph([e]);
  return r && (t.attributes = { char: r }), t;
}
function i_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), nn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Po(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function s_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    oi(t[r].node, e) && t.splice(r, 1);
}
function Ph(e) {
  if (e.length === 0)
    return;
  const t = e.map(o_);
  return t.length === 1 ? t[0] : t;
}
function o_(e) {
  const t = { style: e.__marker }, r = ie(e, _n);
  return r && (t.cid = r), nn(t, e), t;
}
const Nh = 1;
class Gt extends hs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = Gi, r = "", n, i) {
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
      span: (t) => c_(t) ? {
        conversion: a_,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ol().updateFromJSON(t);
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
    return v("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === Gi && i ? (
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
      version: Nh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function a_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: ol(t, r) };
}
function ol(e, t, r) {
  return Ve(new Gt(e, t, r));
}
function c_(e) {
  return e ? e.classList.contains(Gt.getType()) : !1;
}
function St(e) {
  return e instanceof Gt;
}
function l_(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function u_(e, t, r, n) {
  e.update(() => {
    const i = oe(t);
    if (!K(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = oe(r);
    if (!St(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function d_(e, t) {
  return e.getEditorState().read(() => {
    const r = oe(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return sl(r);
  });
}
function f_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of pi())
      if (K(n)) {
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
function No(e) {
  if (Oh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = ed(t), [s, o] = ed(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = td(n, i), [s, o] = td(s, o);
  const a = vc();
  return a.anchor = pu(n.getKey(), i, rd(n)), a.focus = pu(s.getKey(), o, rd(s)), a;
}
function al() {
  if (Oh())
    return;
  const e = w();
  if (!e || !P(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = Qs(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = Qs(i, s);
  return { start: n, end: o };
}
function ed(e) {
  if (ky(e)) {
    const t = Pf(e.jsonPath);
    let r = Ke();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = hi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : Hk(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, Gk(r, e.offset)] : [void 0, void 0];
  }
  if (Ty(e) || xy(e)) {
    const t = Ni(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && S(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (_y(e)) {
    const t = Ni(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && S(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (Cy(e)) {
    const t = Ni(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ca(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && S(n) ? [n, 0] : [void 0, void 0];
  }
  if (vy(e)) {
    const t = Ni(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ca(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && S(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (Sy(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Ni(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ca(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && S(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${My(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function td(e, t) {
  if (!Rr(e))
    return [e, t];
  const r = e.getTextContent().length;
  if (t < 0 || t >= r)
    return [e, t];
  const n = e.getParent();
  if (!n || !L(n))
    return [e, t];
  const i = e.getIndexWithinParent();
  return i < 0 ? [e, t] : [n, i];
}
function rd(e) {
  return L(e) ? "element" : "text";
}
function ca(e, t) {
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
function Ni(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Pf(r);
  let i = Ke();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = hi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function Qs(e, t) {
  if (O(e)) {
    const r = e.getMarkerSyntax(), n = g_(e), i = n ? ln(pn(n)) : ln(pn(e));
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
      return Qs(n, s);
    }
    const i = xo(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return Qs(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (Rr(r)) {
      const i = r.getTextContent().endsWith("*"), s = ln(pn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Kp(e, t);
    return n.type === "text" ? {
      jsonPath: ln([...pn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: ln(pn(e)),
      offset: n.index
    };
  }
  if (S(e)) {
    const r = Wk(e, t);
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
function g_(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = m_(e);
  return r && !At(r) && !S(r) && !Ce(r) ? r : t;
}
function m_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!jc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function pn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = xo(r);
    if (!n)
      break;
    const i = Vk(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Oh() {
  for (let e = Ke().getFirstChild(); e; e = e.getNextSibling())
    if (ss(e))
      return !0;
  return !1;
}
function wh(e, t, r, n, i, s, o) {
  if (!Pe.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? No(r) : w();
  if (!P(a))
    return;
  const c = k_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Di(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = qh(e, l, c, i, s, void 0, void 0);
  return b_(d, a, i), d;
}
function cl(e) {
  return e !== "expanded";
}
function y_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!S(r) || !I(r.getParent()))
    return;
  if (O(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return O(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function b_(e, t, r) {
  const n = cl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Ik(t), kh(t);
  const i = y_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(I)?.selectEnd();
}
function Wn(e, t, r) {
  const n = Mr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(Sr("marker", Re(e)));
  const s = t === "" ? Ut : i ? R + t : t;
  return n.append(he(s)), n;
}
function k_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", p = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (p !== void 0 && o.push(Wn("fr", p, n)), !e.isCollapsed()) {
        const f = id(e);
        f.length > 0 && o.push(Wn("fq", f, n));
      }
      o.push(Wn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (p !== void 0 && o.push(Wn("xo", p, n)), !e.isCollapsed()) {
        const f = id(e);
        f.length > 0 && o.push(Wn("xq", f, n));
      }
      o.push(Wn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function qh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : cl(n?.noteMode), l = qc(e, t, c);
  s && kt(l, Yr, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, p;
  n?.markerMode === "editable" ? (u = lt(e), d && u.setMode("token"), a || (p = lt(e, "closing"))) : n?.markerMode === "visible" && (u = Sr("marker", Re(e) + " "), a || (p = Sr("marker", ot(e))));
  let f;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (f = he(Pt(l.__caller)), d && f.setMode("token"), l.append(f, ...r));
  else {
    const g = () => To(), h = r.flatMap(x_(g));
    if (t === "")
      l.append(...h);
    else {
      const y = Fc(r);
      let k = () => {
      };
      i?.noteCallerOnClick && (k = i.noteCallerOnClick), f = ol(l.__caller, y, k), l.append(f, g(), ...h);
    }
  }
  return p && l.append(p), l;
}
function nd(e) {
  if (typeof e == "string") {
    const i = oe(e);
    return K(i) ? i : void 0;
  }
  const t = pi();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => K(i.node))[e]?.node;
  if (K(n))
    return n;
}
function T_(e, t) {
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
    e.getChildren().reverse().find(I)?.selectEnd();
}
function x_(e) {
  return (t) => Yt(t) ? [t] : [t, e()];
}
function __(e) {
  const t = e.getParent();
  return t !== null && rt(t, K) !== null;
}
function id(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = Sc(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || St(c) || __(c)) && !O(c) && !Ir(c) && ie(c, ae) !== "attribute") {
      if (me(c)) {
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
const ll = [
  Gt,
  vt,
  ...lx
], C_ = [
  yi,
  ...ll
], v_ = Nn((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return v("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function S_() {
  const [e, t] = fe(void 0), [r, n] = fe(), i = Q(null), s = ge((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = cb(l, c, () => {
      lb(l, c, {
        placement: "bottom-start",
        middleware: [ub(), db()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = ge(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return F(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function M_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = S_();
  return F(() => {
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
const E_ = py(v_);
function Rh({ isOpen: e = !1, children: t }) {
  const r = Q(null), { coords: n, placement: i } = M_({ isOpen: e, floatingBoxRef: r }), s = je(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return yn(
    v(E_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const $h = Ef(void 0);
function ul() {
  const e = Af($h);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function A_(e, t) {
  const [r, n] = fe(0), [i, s] = fe(-1), o = je(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = ge(() => {
    n((u) => {
      const p = o.length;
      return p ? (u - 1 + p) % p : 0;
    });
  }, [o.length]), l = ge(() => {
    n((u) => {
      const p = o.length;
      return p ? (u + 1) % p : 0;
    });
  }, [o.length]), d = ge(() => {
    const u = o.length;
    if (r >= 0 && r < u) {
      const p = o[r];
      t?.(p), s(r);
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
function P_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = A_(t, r);
  return v($h.Provider, { value: i, children: v("div", { ...n, children: e }) });
}
const Lh = Nn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = ul(), d = ge((p) => {
    l(), c(-1), n?.(p);
  }, [n, l, c]), u = ge((p) => {
    a(e), r?.(p);
  }, [e, a, r]);
  return v("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function N_({ children: e, autoIndex: t = !0, ...r }) {
  const n = Q(null), { state: { activeIndex: i, menuItems: s } } = ul(), o = je(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = je(() => {
    const c = o(s);
    return t ? hy.map(c, (l, d) => gy(l) && l.type === Lh && l.props.index === void 0 ? my(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return F(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), v("div", { ref: n, role: "menu", ...r, children: a });
}
const O_ = (e, t, r) => $s(e, r).toLowerCase().includes(t.toLowerCase()), sd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", $s = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function w_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? sd(r[0]) : "") : (d = n || (r.length > 0 ? sd(r[0]) : ""), u = (g, h) => O_(g, h, d));
  const p = s || d, f = /* @__PURE__ */ new Map();
  return r.filter((g) => {
    try {
      return u(g, t);
    } catch (h) {
      return console.warn("Error filtering item:", g, h), !1;
    }
  }).sort((g, h) => {
    const y = (C) => (f.has(C) || f.set(C, $s(C, p).toLowerCase()), f.get(C) ?? ""), k = a ? $s(g, p) : y(g), _ = a ? $s(h, p) : y(h);
    for (const C of c)
      switch (C) {
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
          const M = k.indexOf(l), E = _.indexOf(l);
          if (M !== -1 && E === -1)
            return -1;
          if (E !== -1 && M === -1)
            return 1;
          if (M !== -1 && E !== -1)
            return M - E;
          break;
        }
      }
    return k.localeCompare(_);
  });
}
const la = {
  Root: P_,
  Options: N_,
  Option: Lh
};
function q_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return je(() => w_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function R_() {
  const { moveUp: e, moveDown: t, select: r } = ul();
  return je(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const $_ = () => {
  const e = R_(), [t] = ce();
  F(() => {
    const r = (n) => {
      const s = {
        ArrowDown: () => e?.moveDown(),
        ArrowUp: () => e?.moveUp(),
        Enter: () => e?.select(),
        Tab: () => e?.select()
      }[n.key];
      return s ? (s(), n.preventDefault(), n.stopPropagation(), !0) : !1;
    };
    return t.registerCommand(Nr, r, qe);
  }, [t, e]);
};
function L_() {
  return $_(), null;
}
const I_ = ["Shift", "Control", "Alt", "Meta"];
function Ih(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ce(), d = s !== void 0, [u, p] = fe(""), f = d ? s ?? "" : u, g = q_({ query: f, items: t, filterBy: "name" }), h = (y) => {
    n?.(), r ? r(y) : y.action(l);
  };
  return F(() => {
    a?.(f, g);
  }, [a, f, g]), F(() => l.registerCommand(Nr, (y) => {
    if (d || c?.includes(y.key) || I_.includes(y.key))
      return !1;
    if ((y.ctrlKey || y.metaKey || y.altKey) && !y.getModifierState("AltGraph"))
      return n?.(), !1;
    const _ = {
      Escape: () => n?.(),
      Backspace: () => {
        f.length === 0 ? n?.() : p((C) => C.slice(0, -1));
      }
    }[y.key];
    return _ ? (y.stopPropagation(), y.preventDefault(), _(), !0) : y.key.length === 1 ? (y.stopPropagation(), y.preventDefault(), y.key !== o && p((C) => C + y.key), !0) : !1;
  }, qe), [l, d, f, o, n, c]), xe(la.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: g, onSelectOption: (y) => h(y), children: [!d && v("input", { value: f, type: "text", disabled: !0 }), v(L_, {}), v(la.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (y) => y.map((_, C) => xe(la.Option, { index: C, children: [v("span", { className: "label", children: _.label ?? _.name }), v("span", { className: "description", children: _.description })] }, _.name)) })] });
}
function D_({ trigger: e, items: t }) {
  const [r] = ce(), [n, i] = fe(!1), s = ge((o) => {
    o.key === "Escape" && n ? (i(!1), r.focus()) : o.key === e && !n && (o.preventDefault(), i(!0));
  }, [r, e, n]);
  return F(() => r.registerRootListener((o) => {
    if (o)
      return o.addEventListener("keydown", s), () => {
        o.removeEventListener("keydown", s);
      };
  }), [r, s]), F(() => r.registerUpdateListener(({ prevEditorState: o, editorState: a }) => {
    const c = o.read(() => {
      const l = w();
      if (P(l))
        return l;
    });
    a.read(() => {
      const l = w();
      !P(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && v(Rh, { isOpen: n, children: ({ placement: o }) => v(Ih, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function U_({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
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
function F_(e, t) {
  F(() => {
    if (!e.hasNodes([et]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return Fe(zf(e, et, (n) => Xi(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const p = s[l]?.[u], f = o[l]?.[u], g = a[l]?.[u], h = c[l]?.[u];
          i.addID(l, u, p, f, g, h);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(et, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = oe(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Ce(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!et.isReservedType(c))
              for (const d of l) {
                let u = t.get(Bi(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(Bi(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(Bi(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const z_ = Nn(function({ logger: t }, r) {
  const [n] = ce(), i = je(() => /* @__PURE__ */ new Map(), []);
  F_(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Bi(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = oe(d);
        Ce(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && js(u));
      }
  };
  return _c(r, () => ({
    setAnnotation(o, a, c, l, d, u, p) {
      if (et.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const f = No(o);
        if (f === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), dp(f, a, c, l, d, u, p);
      }, { tag: Na });
    },
    removeAnnotation(o, a) {
      if (et.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Bi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Na });
    }
  })), null;
}), K_ = [];
function j_({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = K_, onChange: n }) {
  const [i] = ce();
  return ps(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(Of) && !d.has(Qf) || r.some((p) => d.has(p)) || l.isEmpty())
          return;
        const u = B_(i, s);
        u.length !== 0 && n(o, i, d, u);
      });
  }, [i, e, t, r, n]), null;
}
function B_(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new Ii();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = oe(i), o = s !== null && Xt(s) !== void 0;
    if (t.size === 1 && S(s) && !o && jx(s)) {
      const a = Mh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = oe(i);
          return new Ii([S(u) ? Ha(u) : { insert: "" }]);
        }), l = new Ii([Ha(s)]), d = new Ii(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = Qu(r), c = Qu(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const dl = "formatted", Dh = "unformatted", Uh = "paragraph-structure", fl = "standard", Fh = "block-verse", V_ = {
  [dl]: "Formatted",
  [Dh]: "Unformatted",
  [Uh]: "Paragraph Structure",
  [fl]: "Standard",
  [Fh]: "Block Verse"
};
function bi(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let pl, hl;
function W_(e) {
  const t = gl(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  pl = e, hl = t;
}
W_(dl);
const YP = () => pl, Oo = () => hl;
function gl(e) {
  let t;
  switch (e ?? pl) {
    case dl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Dh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Uh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case fl:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Fh:
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
  const t = od(e);
  return Object.keys(V_).find((r) => qt(od(gl(r)), t));
}
const H_ = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function od(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...H_, ...t };
}
function wo(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function G_(e) {
  if (e)
    return as(e) ? vt : e.markerMode === "editable" ? ft : vt;
}
function as(e) {
  return e?.verseLayout === "block";
}
function J_(e) {
  const t = [], r = e ?? hl;
  return r && (t.push(`${Sb}${r.markerMode}`), r.hasSpacing && t.push(Cb), r.isFormattedFont && t.push(vb)), t;
}
function Y_(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += X_(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), Z_(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += eC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), rC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function X_(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), Q_(t, e.retain, e.attributes, r, n)), e.retain);
}
function Q_(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Ke();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Er(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const p = Math.max(0, e - o), f = u - p, g = Math.min(s, f);
        if (g > 0) {
          let h = d;
          const y = p > 0, k = g < u - p;
          if (y && k) {
            const [, _] = d.splitText(p);
            [h] = _.splitText(g);
          } else y ? [, h] = d.splitText(p) : k && ([h] = d.splitText(g));
          if (Qr(r)) {
            const _ = h.getParent();
            if (I(_)) {
              const C = r.char;
              let M;
              Array.isArray(C) ? a >= 0 && a <= C.length - 1 && (M = C[a]) : a === 0 && (M = C);
              const E = M ? Cn(M, _) : !1;
              if (E && Array.isArray(C) && C.length > 1) {
                const z = he("");
                h.replace(z);
                const W = typeof r.segment == "string" ? r.segment : void 0, j = ki(C.slice(1), n, h, W);
                let U = z;
                for (const N of j)
                  U.insertAfter(N), U = N;
                z.remove(), Rt(r, h);
              } else if (E)
                Rt(r, h);
              else {
                h.remove();
                const z = ad(h, r, n, i);
                if (z && z.length > 0) {
                  let W = _;
                  for (const j of z)
                    W.insertAfter(j), W = j;
                }
              }
            } else {
              const C = he("");
              h.replace(C);
              const M = ad(h, r, n, i);
              if (M && M.length > 0) {
                let E = C;
                for (const z of M)
                  E.insertAfter(z), E = z;
                C.remove();
              } else
                C.replace(h);
            }
          } else
            Rt(r, h);
          s -= g;
        }
      }
      o += u;
    } else if (Nt(d))
      e <= o && o < e + t && s > 0 && (cd(d, r), s -= 1), o += 1;
    else if (I(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (Qr(r)) {
          const p = r.char;
          let f;
          if (Array.isArray(p) ? a >= 0 && a <= p.length - 1 && (f = p[a]) : a === 0 && (f = p), f) {
            Ga(d, f.style), typeof f.cid == "string" && kt(d, _n, () => f.cid);
            const g = ze(f, Xs);
            g && Object.keys(g).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...g
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || dC(r.char)) && (u = !0);
      if (s > 0) {
        const p = d.getChildren();
        for (const f of p) {
          if (s <= 0)
            break;
          if (l(f) && s <= 0)
            return u && Aa(d), !0;
        }
      }
      u && Aa(d), a -= 1;
    } else if (At(d)) {
      const u = d.getChildren();
      for (const f of u) {
        if (s <= 0)
          break;
        if (l(f) && s <= 0)
          return !0;
      }
      const p = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!fr(d))
          cd(d, r);
        else if (ml(r)) {
          const f = jh(r.para, n);
          f && d.replace(f, !0);
        }
        s -= p;
      }
      o += p;
    } else if (L(d)) {
      const u = d.getChildren();
      for (const p of u) {
        if (s <= 0)
          break;
        if (l(p) && s <= 0)
          return !0;
      }
    }
    return s <= 0;
  }
  l(c), s > 0 && i?.warn(`$applyAttributes: Not all characters in the retain operation (length ${t}) could be processed. Remaining: ${s}. targetIndex: ${e}, final currentIndex: ${o}`);
}
function ad(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = ki(t.char, r, e, i), o = s.find(I);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), Rt(t, e);
    return;
  }
  const a = {};
  Hh.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), Rt(t, e), s;
}
function zh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  O(r) ? (r.setMarker(t), r.setTextContent(Re(t))) : Yt(r) && r.getTextType() === "marker" && r.setTextContent(Re(t) + R);
}
function Ga(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    O(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = I(e.getParent()), i = e.getFirstChild();
  Yt(i) && i.getTextType() === "marker" && i.getTextContent() === Re(r, n) && i.setTextContent(Re(t, n));
  const s = e.getLastChild();
  Yt(s) && s.getTextType() === "marker" && s.getTextContent() === ot(r, n) && s.setTextContent(ot(t, n));
}
function cd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && I(e) && Qr(t)) {
      const i = Ja(n);
      if (Ga(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        kt(e, _n, () => o);
      }
      const s = ze(i, Xs);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Je(e) || me(e) || He(e) || K(e) || Ue(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (ht(e) || le(e) || I(e)) && (r === "style" && le(e) ? zh(e, n) : r === "style" && I(e) ? Ga(e, n) : r === "code" && ht(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && kt(e, Yr, () => n));
  }
}
function Z_(e, t, r) {
  if (t <= 0)
    return;
  const n = Ke();
  let i = 0, s = t;
  function o(a) {
    if (s <= 0)
      return !0;
    if (Er(a)) {
      let c = a.getTextContentSize();
      if (e < i + c && i < e + s) {
        const l = Math.max(0, e - i), d = c - l, u = Math.min(s, d);
        u > 0 && (a.spliceText(l, u, ""), a.getTextContentSize() === 0 && a.remove(), r?.debug(`Deleted ${u} length from TextNode (key: ${a.getKey()}) at nodeOffset ${l}. Original targetIndex: ${e}, current currentIndex: ${i}.`), s -= u, c -= u);
      }
      i += c;
    } else if (Nt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (At(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && At(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Ht(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const f = a.getNextSibling();
          if (f && ve(f)) {
            let g = i + 1;
            const h = f.getChildren();
            for (const k of h) {
              if (s <= 0)
                break;
              const _ = i;
              if (i = g, o(k)) {
                i = _;
                break;
              }
              Er(k) ? g += k.getTextContentSize() : Nt(k) && (g += 1), i = _;
            }
            const y = f.getChildren();
            for (const k of y)
              k.remove(), a.append(k);
            f.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Ht(), !0);
        } else le(a) ? a.replace(Ht(), !0) : a.remove();
      }
      i += 1;
    } else if (L(a)) {
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
function eC(e, t, r, n, i) {
  if (t === os)
    return ld(e, r, n, i);
  if (t.endsWith(os) && !ml(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Qr(r))
        throw new Error("Text + LF should not have char attributes");
      o += Zs(e, s, r, i);
    }
    return o += ld(e + o, r, n, i), o;
  } else return Qr(r) ? tC(e, t, r, n, i) : Zs(e, t, r, i);
}
function tC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = he(t === "" ? Ut : t);
  Rt(r, s);
  let o;
  {
    let y = function(k) {
      if (Er(k)) {
        const _ = k.getTextContentSize();
        if (e >= h && e < h + _) {
          const C = k.getParent();
          return I(C) && (o = C), !0;
        }
        h += _;
      } else if (Nt(k))
        h += 1;
      else if (I(k)) {
        const _ = k.getChildren();
        for (const C of _)
          if (y(C))
            return !0;
      } else if (L(k)) {
        const _ = k.getChildren();
        for (const C of _)
          if (y(C))
            return !0;
        At(k) && (h += 1);
      }
      return !1;
    };
    const g = Ke();
    let h = 0;
    y(g);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const g = a[0];
      g && Cn(g, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (Cn(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = ki(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(I);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), Zs(e, t, void 0, i);
  const p = {};
  for (const [g, h] of Object.entries(r))
    g !== "char" && g !== "segment" && typeof h == "string" && (p[g] = h);
  Object.keys(p).length > 0 && u.setUnknownAttributes(p);
  let f = !0;
  for (const g of d)
    if (!Kh(e, g, i)) {
      f = !1;
      break;
    }
  return f ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), Zs(e, t, void 0, i));
}
function Zs(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Ke();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Er(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = he(t);
        if (Rt(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const p = c.getParent();
          I(p) && !Qr(r) ? p.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, p] = c.splitText(d);
          p.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (Nt(c))
      s += 1;
    else if (I(c)) {
      if (!o && e === s) {
        const u = he(t);
        Rt(r, u);
        const p = c.getFirstChild();
        return p ? p.insertBefore(u) : c.append(u), n?.debug(`Inserted text "${t}" at beginning of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const d = c.getChildren();
      for (const u of d) {
        if (a(u))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const u = he(t);
        return Rt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (At(c)) {
      if (!o && e === s) {
        const u = he(t);
        Rt(r, u);
        const p = c.getFirstChild();
        return p ? p.insertBefore(u) : c.append(u), n?.debug(`Inserted text "${t}" at beginning of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const d = c.getChildren();
      for (const u of d) {
        if (a(u))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const u = he(t);
        return Rt(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      s += 1;
    } else if (L(c)) {
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
    const c = he(t);
    Rt(r, c);
    const l = Ht().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Kh(e, t, r) {
  const n = Ke();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (ve(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Ht().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Er(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [p] = l.splitText(u);
          return p.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (Nt(l))
        i += 1;
      else if (I(l)) {
        if (o(l))
          return !0;
      } else if (At(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (fr(d) && At(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Ht().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      ve(a) ? fr(a) && le(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ve(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (I(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ve(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function rC(e, t, r, n, i) {
  let s;
  return jr("chapter", t) ? s = iC(t.insert.chapter, r) : jr("verse", t) ? s = sC(t.insert.verse, r) : jr("ms", t) ? s = oC(t.insert.ms) : jr("note", t) ? s = Bh(t, r, n, i) : jr("unknown", t) ? s = Vh(t, r, n, i) : jr("unmatched", t) && (s = cC(t.insert.unmatched, r)), s ? Kh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function ld(e, t, r, n) {
  let i;
  ml(t) ? i = jh(t.para, r) : uC(t) && (i = nC(t.book)), i ??= Ht();
  const s = i, o = le(s), a = fr(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Er(u)) {
      const p = u.getTextContentSize();
      if (e >= c && e <= c + p) {
        const f = u.getParent();
        if (le(f) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${f.getMarker()}) with LF attributes at targetIndex ${e}`);
          const g = e - c, [h] = g > 0 ? u.splitText(g) : [void 0];
          let y, k = h?.getPreviousSibling();
          for (; k; ) {
            const _ = k;
            k = k.getPreviousSibling(), y ? y.insertBefore(_) : s.append(_), y = _;
          }
          return h && s.append(h), f.insertBefore(s), l = !0, !0;
        }
      }
      c += p;
    } else if (Nt(u))
      c += 1;
    else if (At(u)) {
      const p = u.getChildren();
      for (const f of p) {
        if (d(f))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (fr(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (le(u) && s) {
          const f = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${f.getMarker()}) at targetIndex ${e}`), f.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && le(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (L(u)) {
      const p = u.getChildren();
      for (const f of p) {
        if (d(f))
          return !0;
        if (l)
          break;
      }
    }
    return l;
  }
  return d(Ke()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function nC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== Qi || !r || !Ft.isValidBookCode(r))
    return;
  const n = ze(e, Nx);
  return mp(r, n);
}
function jh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = ze(e, Px), i = Zi(r, n);
  if (!bi(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), To());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = Re(r) + R;
    i.append(t.hasGutterParaMarkers ? Qb(s) : Sr("marker", s));
  }
  return i;
}
function iC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = ze(e, Ox);
  let a;
  if (t.markerMode === "editable")
    a = kp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Ic(r, c, n, i, s, o);
  }
  return a;
}
function sC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = ze(e, wx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Dt(r, n);
    c = Pp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = el(n, l, i, s, o, a);
  }
  return c;
}
function oC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = ze(e, qx);
  return tp(t, r, n, s, i);
}
function Bh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = ze(i.note, Rx), d = typeof l?.closed == "string" ? l.closed : void 0, u = e.attributes?.segment;
  let p;
  u && typeof u == "string" && (p = u);
  const f = [];
  for (const h of c?.ops ?? [])
    if (typeof h.insert == "string")
      if (Qr(h.attributes)) {
        const y = ki(h.attributes.char, t, he(h.insert), void 0, Wh(h.attributes.char, f), !1, t.markerMode === "editable");
        f.push(...y);
      } else
        f.push(he(h.insert));
  return qh(s, o, f, t, r, p, d).setCategory(a).setUnknownAttributes(l);
}
function Vh(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = ze(i, $x), l = Lc(s, o, c), d = a?.ops ?? [];
  d.length > 0 && aC(d, t, r, n).forEach((f) => l.append(f));
  const u = e.attributes?.segment;
  return typeof u == "string" && kt(l, Yr, () => u), l;
}
function aC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Qr(s.attributes)) {
        const o = he(s.insert), a = ki(s.attributes.char, t, o, void 0, Wh(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(he(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (jr("unknown", s)) {
        const o = Vh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (jr("note", s)) {
        const o = Bh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function cC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = Jc(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function Wh(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function Ja(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function ki(e, t, r, n, i, s = !1, o = !1) {
  S(r) && r.getTextContentSize() === 0 && r.setTextContent(Ut);
  const a = () => {
    o && S(r) && r.getTextContent() !== Ut && r.setTextContent(R + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(Ja), l = c[0], d = i?.[i.length - 1];
    if (I(d) && Cn(l, d))
      return c.length > 1 ? ki(c.slice(1), t, r, void 0, void 0, !0, o).forEach((f) => d.append(f)) : r && d.append(r), [];
    a();
    const u = c.reduceRight((p, f, g) => {
      const h = Mr(f.style, ze(f, Xs));
      if (typeof f.cid == "string" && kt(h, _n, () => f.cid), n && g === c.length - 1 && kt(h, Yr, () => n), p)
        if (I(p)) {
          const y = p.getMarker(), k = [];
          da(y, k, t, !0), k.forEach((C) => h.append(C)), h.append(p);
          const _ = [];
          ua(p, _, t, !0), _.forEach((C) => h.append(C));
        } else
          h.append(p);
      return h;
    }, r);
    return da(l.style, u, t, s), ua(u, u, t, s), [u];
  } else {
    const c = Ja(e), l = i?.[i.length - 1];
    if (I(l) && Cn(c, l))
      return r && l.append(r), [];
    a();
    const d = Mr(c.style, ze(c, Xs));
    return typeof c.cid == "string" && kt(d, _n, () => c.cid), n && kt(d, Yr, () => n), r && d.append(r), da(c.style, d, t, s), ua(d, d, t, s), [d];
  }
}
function ua(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && lC(e.getMarker(), t, r, !1, n);
}
function da(e, t, r, n = !1) {
  let i;
  if (r?.markerMode === "editable" ? i = lt(e, "opening", n) : r?.markerMode === "visible" && (i = Sr("marker", Re(e, n))), i)
    if (Array.isArray(t))
      t.push(i);
    else {
      const s = t.getFirstChild();
      s ? s.insertBefore(i) : t.append(i);
    }
}
function lC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = Sr("marker", n ? ot("") : ot(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function uC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function ml(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Qr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function dC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Rt(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        kt(t, Yr, () => n);
        continue;
      }
      if (fC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const Hh = [
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
function fC(e) {
  return Hh.includes(e);
}
function pC() {
  const [e] = ce();
  return F(() => e.registerCommand(mo, (t) => (hC(t), !1), kn), [e]), null;
}
function hC(e) {
  if (gC(e.target))
    return;
  const t = w();
  P(t) && mC(t);
}
function Ti(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (zt(t))
      r++, t = t.getNextSibling(), S(t) && t.getTextContent() === R && (r++, t = t.getNextSibling());
    else if (me(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Qt(e, r), !0);
}
function gC(e) {
  if (!wf(e))
    return !1;
  const t = fi(e);
  if (!Zb(t))
    return !1;
  const r = t.getParent();
  return r ? ve(r) ? Ti(r) : (Qt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function mC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = oe(t.key);
  if (!ve(r))
    return !1;
  const n = r.getFirstChild();
  return !Rr(n) && !$n(n) ? !1 : Ti(r);
}
function yC() {
  const [e] = ce();
  return F(() => {
    const t = (r) => r instanceof KeyboardEvent && !bC(r) || !qo() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return Fe(
      e.registerCommand(Nr, t, qe),
      e.registerCommand(Mc, t, qe),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(_r, t, tt),
      e.registerCommand(Wt, t, tt),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Ec, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = fi(r.target);
        return !n || !Zr(n) ? !1 : (r.preventDefault(), !0);
      }, qe),
      e.registerCommand(Py, t, qe),
      e.registerCommand(Ny, t, qe),
      e.registerCommand(Oy, t, qe)
    );
  }, [e]), null;
}
function bC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Zr(e) {
  return rt(e, Gh) ?? void 0;
}
function Gh(e) {
  return Ue(e) || uh(e);
}
function qo() {
  const e = w();
  return P(e) ? Zr(e.anchor.getNode()) !== void 0 || Zr(e.focus.getNode()) !== void 0 : !1;
}
function kC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function TC(e, t) {
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
      const p = document.createRange();
      if (p.selectNode(u), o.compareBoundaryPoints(Range.START_TO_START, p) > 0)
        c = u;
      else {
        l = u;
        break;
      }
    }
    if (!c)
      return !1;
    const d = document.createRange();
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), kC(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function xC(e, t, r, n) {
  if (!$C(t) || TC(e, r))
    return !1;
  const i = r === "up" ? Ax(t) : Ex(t);
  return i && n.preventDefault(), i;
}
function _C({ viewOptions: e }) {
  const [t] = ce();
  return CC(t, e), null;
}
function CC(e, t) {
  F(() => {
    if (!e.hasNodes([hr, vt, Pe]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = w();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = ud(o), u = NC(i, dd(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return xC(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = ud(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return dd(a, n.key) ? l = !c && hd(i, "next") || !c && SC(i) || qC(i) || !c && s && pd(i, "next") : vC(a, n.key) && (l = !c && hd(i, "previous") || !c && MC(i) || RC(i, t) || !c && s && pd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Nr, r, qe);
  }, [e, t]);
}
function ud(e) {
  return e.dir || "ltr";
}
function dd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function vC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function Ya(e) {
  if (!I(e) || e.getMarker() !== "fp")
    return;
  const t = Xt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function SC(e) {
  const t = Ya(Rp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Qt(t, 0), !0);
}
function MC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = Ya(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : fd(n);
  }
  if (t.offset === 0) {
    const n = Ya(r);
    return n ? fd(n) : !1;
  }
  return !1;
}
function fd(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (S(t))
    return t.select(), !0;
  if (L(t)) {
    const i = t.getLastDescendant();
    return S(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const eo = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function EC(e) {
  if (eo)
    for (const { segment: r } of eo.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function AC(e) {
  if (eo) {
    let n = 0;
    for (const { index: i } of eo.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function Jh(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function Yh(e) {
  return !!e && O(e) && Zr(e) !== void 0;
}
function ai(e) {
  return S(e) && !e.isToken() && !Yh(e) && e.getTextContentSize() > 0;
}
function Xh(e) {
  return di(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : S(e) ? (e.isToken() || Yh(e)) && e.getTextContentSize() > 0 : ms(e) ? !He(e) : !1;
}
function ci(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Ro(e, t, r) {
  for (let n = e; n; ) {
    if (Xh(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? ci(n, t, r);
      continue;
    }
    if (ai(n))
      return n;
    n = ci(n, t, r);
  }
}
function yl(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? ci(e, n, i) : r === "text" && Xh(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : ci(e, n, i);
}
function fa(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = yl(e.node, e.offset, e.kind, "previous", t), n = Ro(r, "previous", t);
  if (!n)
    return e;
  if (ai(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function PC(e, t) {
  const r = e.getNode(), n = Jh(r);
  if (!n)
    return;
  if (e.type === "text" && ai(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return fa({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = yl(r, e.offset, e.type, t, n), s = Ro(i, t, n);
  if (!s)
    return;
  if (ai(s)) {
    const c = s.getTextContent(), l = t === "next" ? EC(c) : AC(c);
    return fa({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return fa({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function Qh(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = PC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function pd(e, t) {
  return Qh(e, t, "collapse");
}
function NC(e, t) {
  return Qh(e, t, "extend");
}
function OC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && ai(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = yl(n, e.offset, e.type, t, r);
  return Ro(i, t, r) === void 0;
}
function wC(e, t) {
  const r = Ke();
  for (let n = e; n; ) {
    const i = ci(n, t, r), s = i && Ro(i, t, r);
    if (!s)
      return;
    if (n = Zr(s), !n)
      return s;
  }
}
function hd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Zr(n))
    return !1;
  const i = Jh(n);
  if (!i || !OC(r, t, i))
    return !1;
  const s = ci(i, t, Ke()), o = s && Zr(s);
  if (!o)
    return !1;
  const a = wC(o, t);
  if (!a)
    return !0;
  if (ai(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
  }
  const c = a.getParent();
  if (!c)
    return !0;
  const l = a.getIndexWithinParent() + (t === "next" ? 0 : 1);
  return c.select(l, l), !0;
}
function gd(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function qC(e) {
  const t = e.anchor.getNode(), r = Rp(e);
  if (K(r) && !O(r.getFirstChild())) {
    if (ve(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(ve(i) && Ti(i)) && i.selectStart(), !0;
      }
    } else return Yt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (ve(t) && K(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : gd(r), !0;
  }
  const n = r?.getParent();
  if (Yt(r) && K(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? gd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function RC(e, t) {
  const r = Rk(e);
  if (ys(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (ht(i.getParent()))
    return !0;
  if (K(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!$n(o))
      return !1;
    const a = r.getParent();
    if (!a)
      return !1;
    const c = r.getIndexWithinParent();
    return a.select(c, c), !0;
  }
  if (ve(r) && t?.noteMode === "collapsed") {
    const o = r.getLastChild();
    if (!o)
      return !1;
    const a = rt(o, (c) => K(c));
    if (K(a) && a.getIsCollapsed()) {
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
  if (St(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function $C(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return me(t) && ms(t);
}
function LC() {
  const [e] = ce();
  return IC(e), null;
}
function IC(e) {
  F(() => {
    if (!e.hasNodes([be]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return Fe(
      e.registerNodeTransform(be, FC),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(be, tT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(be, Zp),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(be, (t) => is(vn("char"), t)),
      e.registerNodeTransform(Be, zC)
    );
  }, [e]);
}
function pa(e) {
  return e.getChildren().some(O);
}
function DC(e, t) {
  const r = t.getFirstChild();
  if (!O(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (vo(n)) {
    const i = n.getTextContent();
    i.startsWith(R) && (i === R ? n.remove() : n.setTextContent(i.slice(R.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function UC(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  O(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function FC(e) {
  if (!I(e))
    return;
  if (e.isEmpty()) {
    e.remove();
    return;
  }
  if (pa(e))
    return;
  const t = e.getMarker();
  if (t === "fp")
    return;
  const r = ie(e, _n), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (I(i) && Cn({ style: t, cid: r }, i) && qt(n, i.getUnknownAttributes()))
    if (pa(i)) {
      if (DC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  I(s) && Cn({ style: t, cid: r }, s) && qt(n, s.getUnknownAttributes()) && (pa(s) ? UC(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function zC(e) {
  const t = e.getParent();
  if (!I(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Ut) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function Zh(e) {
  return e.replaceAll("	", " ");
}
function eg() {
  const e = w();
  return !!e && !e.isCollapsed();
}
function tg(e) {
  const t = () => !eg();
  return Fe(e.registerCommand(Hr, t, xt), e.registerCommand(Wt, t, xt));
}
const bl = (e) => {
  e.dispatchCommand(Hr, null);
}, kl = (e) => {
  e.dispatchCommand(Wt, null);
}, Tl = (e) => {
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
      n.setData(o, Zh(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(_r, s);
  });
}, xl = (e) => {
  navigator.clipboard.read().then(async () => {
    if ((await navigator.permissions.query({
      // @ts-expect-error These types are incorrect.
      name: "clipboard-read"
    })).state === "denied") {
      alert("Not allowed to paste from clipboard.");
      return;
    }
    const r = new DataTransfer(), n = await navigator.clipboard.readText();
    r.setData("text/plain", Zh(n));
    const i = new ClipboardEvent("paste", {
      clipboardData: r
    });
    e.dispatchCommand(_r, i);
  });
};
function KC() {
  const [e] = ce();
  return F(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(ri ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), bl(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), kl(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? xl(e) : Tl(e)));
    };
    return Fe(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      tg(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function jC({ logger: e }) {
  const [t] = ce();
  return F(() => Fe(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Nr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Wr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(_r, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Wr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Ec, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Wr)
  ), [t, e]), null;
}
function BC({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), v("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: v("span", { className: "text", children: i.title }) });
}
function VC({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return v("div", { className: "typeahead-popover", children: v("ul", { children: e.map((i, s) => v(BC, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let WC = 0;
class Oi {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${WC++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function HC({ options: e } = {}) {
  const [t] = ce(), [r, n] = fe(() => !t.isEditable()), [i, s] = fe({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = fe(void 0), c = je(() => {
    const u = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new Oi("Cut", {
        onSelect: () => {
          kl(t);
        },
        isDisabled: r
      }),
      new Oi("Copy", {
        onSelect: () => {
          bl(t);
        }
      }),
      new Oi("Paste", {
        onSelect: () => {
          Tl(t);
        },
        isDisabled: r
      }),
      new Oi("Paste as Plain Text", {
        onSelect: () => {
          xl(t);
        },
        isDisabled: r
      })
    ], p = (e ?? []).map((f) => new Oi(f.title, { onSelect: f.onSelect, isDisabled: f.isDisabled }));
    return [...u, ...p];
  }, [t, r, e]), l = ge(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  F(() => tg(t), [t]), F(() => {
    const u = (p) => {
      const f = p.target;
      t.getRootElement() === f || Sp(f) || (p.preventDefault(), s({ isOpen: !0, x: p.clientX, y: p.clientY }), a(void 0));
    };
    return t.registerRootListener((p, f) => {
      f?.removeEventListener("contextmenu", u), p && p.addEventListener("contextmenu", u);
    });
  }, [t]), F(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return globalThis.addEventListener("scroll", u, !0), () => globalThis.removeEventListener("scroll", u, !0);
  }, [i.isOpen, l]), F(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return document.addEventListener("pointerdown", u), () => document.removeEventListener("pointerdown", u);
  }, [i.isOpen, l]), F(() => {
    if (!i.isOpen)
      return;
    const u = (p) => {
      if (p.key === "Escape")
        l();
      else if (p.key === "ArrowDown")
        p.preventDefault(), p.stopPropagation(), a((f) => f === void 0 ? 0 : (f + 1) % c.length);
      else if (p.key === "ArrowUp")
        p.preventDefault(), p.stopPropagation(), a((f) => f === void 0 ? c.length - 1 : (f - 1 + c.length) % c.length);
      else if (p.key === "Enter" && o !== void 0) {
        p.preventDefault(), p.stopPropagation();
        const f = c[o];
        f && !f.isDisabled && (t.update(() => {
          f.onSelect();
        }), l());
      }
    };
    return document.addEventListener("keydown", u, !0), () => document.removeEventListener("keydown", u, !0);
  }, [i.isOpen, l, c, o, t]), F(() => t.registerEditableListener((u) => {
    n(!u);
  }), [t]);
  const d = Q(null);
  return ps(() => {
    const u = d.current;
    if (!u)
      return;
    const { width: p, height: f } = u.getBoundingClientRect(), g = Math.max(0, Math.min(i.x, globalThis.innerWidth - p)), h = Math.max(0, Math.min(i.y, globalThis.innerHeight - f));
    u.style.left = `${g}px`, u.style.top = `${h}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? nb.createPortal(v("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: v(VC, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function GC(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function JC(e) {
  if (!$y(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function YC(e) {
  return St(e);
}
function ha(e, t, r) {
  const n = fi(t.node);
  if (!ms(n) || YC(n))
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
function XC(e, t) {
  if (w())
    return !1;
  const r = e.getRootElement(), n = wy(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !qy(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let d, u;
  if (n.isCollapsed)
    d = ha(e, c, JC(c)), u = d;
  else {
    const y = GC(n.getRangeAt(0), c);
    d = ha(e, c, y ? "before" : "after"), u = ha(e, l, y ? "after" : "before");
  }
  if (!d && !u)
    return !1;
  const p = d ?? c, f = u ?? l, g = {
    anchorNode: p.node,
    anchorOffset: p.offset,
    focusNode: f.node,
    focusOffset: f.offset
  }, h = Ry(g, e);
  return h ? (Tn(h), h.dirty = !t, t) : !1;
}
function QC() {
  const [e] = ce(), t = Q(!1), r = Q(!1);
  return F(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = w();
        P(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), F(() => e.registerCommand(dr, () => (XC(e, t.current) && (r.current = !0), !1), tt), [e]), null;
}
function ZC() {
  const [e] = ce();
  return F(() => e.registerCommand(Nr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(ri ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, tt), [e]), null;
}
function ev({ isEditable: e }) {
  const [t] = ce();
  return ps(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function md(e) {
  return !!e && Uc(oe(e));
}
function rg(e) {
  const [t] = ce(), r = Q(void 0), n = ge((i) => {
    const s = w(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = md(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, p = Mo(d, u);
      if (p)
        r.current = p.getKey(), l = p.getKey();
      else {
        const f = Nk();
        i.insertAfter(f), r.current = f.getKey(), l = f.getKey();
      }
      Qt(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = oe(a);
      S(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return F(() => {
    const i = () => {
      const a = e(), c = w(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (Gr(Jr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (bs(c) || !c.includes(ni))
        return;
      const l = w(), d = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Ok(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(ni).length - 1, p = Math.max(0, d - u);
        a.select(p, p);
      }
    }, o = Fe(t.registerCommand(dr, () => (i(), !1), kn), t.registerCommand(Ac, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = md(a);
      }), c && t.update(() => {
        const l = oe(a);
        S(l) && l.remove();
      }, { tag: Jr }), r.current = void 0, !1;
    }, kn), t.registerNodeTransform(Be, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function tv() {
  const e = w();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!me(i) || Mo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || me(s))
    return i;
}
function rv() {
  return rg(tv), null;
}
function nv({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ce();
  return F(() => {
    n.initialize?.(r, s);
  }, [n, s, r]), F(() => {
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
        const d = o.getRootElement(), u = d?.ownerDocument.activeElement, p = d != null && u != null && (d === u || d.contains(u));
        o.update(() => {
          p || Gr(Ly), o.setEditorState(l), o.dispatchCommand(Iy, void 0);
        }, { tag: Yf });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function iv({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ce();
  return sv(t, n), ov(i, e, r, n), null;
}
function sv(e, t) {
  const r = Q(void 0), n = Q(void 0), i = e.noteCallers, s = e.crossRefCallers;
  F(() => {
    let o = i;
    (!o || o.length <= 0) && (o = p_), r.current !== o && (r.current = o, yd("note-callers", o, t));
  }, [t, i]), F(() => {
    let o = s;
    (!o || o.length <= 0) && (o = h_), n.current !== o && (n.current = o, yd("cross-ref-callers", o, t));
  }, [t, s]);
}
function ov(e, t, r, n) {
  F(() => {
    if (!e.hasNodes([be, Pe, Gt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => pv(s));
    return Fe(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Pe, (s) => av(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(be, cv),
      e.registerNodeTransform(Be, lv),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Gt, uv),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Gt, (s, { prevEditorState: o }) => dv(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(dr, () => fv(e, t, r, n), xt),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function av(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => St(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    S(i) && !O(i) && i.getTextContent() !== Pt(e.getCaller()) && e.insertBefore(i);
  }
}
function cv(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => St(o));
  if (!I(e) || !K(t) || !n)
    return;
  const i = Fc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  S(s) ? s.getTextContent() !== R && s.setTextContent(R) : e.insertAfter(he(R));
}
function lv(e) {
  const t = Xt(e), r = t?.getChildren(), n = r?.find((o) => St(o));
  if (!S(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!O(e) && K(i) && e.getTextContent() !== R && (e.setTextContent(R), e.selectEnd()), I(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Ut) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Fc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function uv(e) {
  if (!St(e))
    return;
  const t = e.getNextSibling();
  !S(t) || O(t) ? e.insertAfter(he(R)) : t.getTextContent() !== R && t.setTextContent(R);
}
function dv(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = oe(r), a = o?.getParent();
      return St(o) && K(a) && a.getCaller() === Gi;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function fv(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = rt(o, (c) => K(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = oe(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), wi(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, wi(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, wi(e, c, n);
    } else if (!a) {
      const c = rt(o, (l) => K(l));
      if (c && c.getIsCollapsed() && ve(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, wi(e, l, n);
      }
    }
  }
  if (ve(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if ($n(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, wi(e, l, n);
    }
  }
  return !1;
}
function wi(e, t, r) {
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
function pv(e) {
  const t = w();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && S(s)) {
    e.preventDefault();
    const o = vc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), Tn(o);
  }
}
function yd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (hv(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function hv(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function $o(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!O(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = ts(e);
  return r && t.push(r), t.length > 0 && t.every((n) => S(n) && n.getMode() === "token") ? t : [];
}
function gv(e) {
  const t = e.getParent();
  if (K(t))
    return $o(t).some((r) => r.is(e)) ? t : void 0;
}
function to(e) {
  const t = $o(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function mv(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function yv(e) {
  const t = Dy();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= to(e);
  const i = mv(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= to(e);
}
function Xa(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = gv(t);
  if (r)
    return bv(r, t, e.offset) ? void 0 : r;
}
function bv(e, t, r) {
  const n = $o(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function kv(e) {
  const t = $o(e), r = t[t.length - 1];
  S(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Qt(e, to(e));
}
function Tv(e = !1) {
  const t = w();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return xv(t.anchor, t.focus);
  const r = Xa(t.anchor);
  if (!r)
    return !1;
  if (!e && yv(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Qt(n, r.getIndexWithinParent());
  } else
    kv(r);
  return !0;
}
function xv(e, t) {
  const r = Xa(e), n = Xa(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && bd(e, r, i), n && bd(t, n, !i), !0;
}
function bd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), to(t), "element");
}
function _v() {
  const [e] = ce(), t = Q(!1);
  return F(() => {
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
  }, [e]), F(() => e.registerCommand(dr, () => (Tv(t.current) && Gr(Jr), !1), kn), [e]), null;
}
function Cv({ onChange: e }) {
  const [t] = ce();
  return F(() => t.registerCommand(dr, () => {
    const r = al();
    return e?.(r), !1;
  }, xt), [t, e]), null;
}
function vv() {
  const [e] = ce();
  return Sv(e), null;
}
function Sv(e) {
  F(() => {
    if (!e.hasNodes([nt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(nt, (t) => Mv(t, e));
  }, [e]);
}
function Mv(e, t) {
  Va(t, e.getKey()) && Sh(e.getFirstChild()), !(!le(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = oe(e.getKey());
    return le(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function ng({ onStateChange: e }) {
  const [t] = ce(), [r, n] = fe(t), i = Q(!1), s = Q(!1), o = Q(void 0), a = Q(void 0), c = ge(() => {
    const l = w();
    let d;
    if (P(l)) {
      const u = l.anchor.getNode(), p = l.focus.getNode();
      let f = u.getKey() === "root" ? u : rt(u, (k) => {
        const _ = k.getParent();
        return _ !== null && Uy(_);
      });
      f === null && (f = u.getTopLevelElementOrThrow()), ss(f) && (f = rt(u, le) ?? f);
      const g = f.getKey(), h = r.getElementByKey(g), y = Lk(u, p);
      if (y && Mx(y) && (d = y.getMarker()), h !== null && (le(f) || ht(f) || ys(f))) {
        o.current = f.getMarker(), a.current = d, e?.({
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
  return F(() => t.registerCommand(dr, (l, d) => (c(), n(d), !1), tt), [t, c]), F(() => Fe(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(Fy, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), tt), r.registerCommand(zy, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), tt)), [c, r, e]), null;
}
function ig(e) {
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
  return e ? ve(e) ? e : rt(e, (r) => ve(r)) ?? void 0 : void 0;
}
function sg(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = en(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function _l(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !go(e) ? !1 : e.getNodes().some((t) => me(t));
}
function og(e) {
  if (!P(e) || !e.isCollapsed())
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
function ag(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = en(r);
  if (!n)
    return !1;
  if (L(r)) {
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
function kd(e, t) {
  return !!Qa(e, t);
}
function Qa(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && L(n)) {
    const s = n.getChildren(), o = t === "backward" ? r.offset - 1 : r.offset;
    if (o < 0)
      return;
    const a = s[o];
    return me(a) ? a : void 0;
  }
  if (t === "backward") {
    if (r.offset !== 0)
      return;
    const s = n.getPreviousSibling();
    return me(s) ? s : void 0;
  }
  if (r.offset !== n.getTextContentSize())
    return;
  const i = n.getNextSibling();
  return me(i) ? i : void 0;
}
function ro(e, t) {
  if (!P(e))
    return !1;
  const r = en(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ei(e) {
  return _l(e) || sg(e);
}
function cg(e, t) {
  if (_l(e) || sg(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return og(e) && ro(e, "backward") || kd(e, "backward");
    case "deleteForward":
      return ag(e) && ro(e, "forward") || kd(e, "forward");
    case "insertText":
      return !1;
  }
}
function Ev(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = Qa(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (og(e) && ro(e, "backward")) {
        const n = en(e.anchor.getNode());
        if (ve(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = Qa(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (ag(e) && ro(e, "forward")) {
        const i = en(e.anchor.getNode())?.getNextSibling();
        if (ve(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Td(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return go(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!P(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!P(e) || e.isCollapsed())
    return !1;
  const r = en(e.anchor.getNode()), n = en(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function lg(e) {
  if (S(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function Av(e) {
  const t = e.getPreviousSibling();
  if (!ve(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? lg(r) : Ti(t) || t.selectStart();
}
function ug(e) {
  return me(e) || Je(e) ? [] : ve(e) ? e.getChildren().flatMap(ug) : [e];
}
function Pv(e) {
  const t = [];
  for (const r of e) {
    const n = ug(r);
    n.length !== 0 && (ve(r) && t.length > 0 && t.push(he(" ")), t.push(...n));
  }
  return t;
}
function xd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Nv(e) {
  if (Array.isArray(e)) return e;
}
function Ov(e, t) {
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
function wv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qv(e, t) {
  return Nv(e) || Ov(e, t) || Rv(e, t) || wv();
}
function Rv(e, t) {
  if (e) {
    if (typeof e == "string") return xd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? xd(e, t) : void 0;
  }
}
const dg = Object.entries, _d = Object.setPrototypeOf, $v = Object.isFrozen, Lv = Object.getPrototypeOf, Iv = Object.getOwnPropertyDescriptor;
let it = Object.freeze, at = Object.seal, Yn = Object.create, fg = typeof Reflect < "u" && Reflect, Za = fg.apply, ec = fg.construct;
it || (it = function(t) {
  return t;
});
at || (at = function(t) {
  return t;
});
Za || (Za = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
ec || (ec = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Hn = Ye(Array.prototype.forEach), Dv = Ye(Array.prototype.lastIndexOf), Cd = Ye(Array.prototype.pop), Gn = Ye(Array.prototype.push), Uv = Ye(Array.prototype.splice), Br = Array.isArray, Ui = Ye(String.prototype.toLowerCase), ga = Ye(String.prototype.toString), vd = Ye(String.prototype.match), qi = Ye(String.prototype.replace), Sd = Ye(String.prototype.indexOf), Fv = Ye(String.prototype.trim), zv = Ye(Number.prototype.toString), Kv = Ye(Boolean.prototype.toString), Md = typeof BigInt > "u" ? null : Ye(BigInt.prototype.toString), Ed = typeof Symbol > "u" ? null : Ye(Symbol.prototype.toString), Ze = Ye(Object.prototype.hasOwnProperty), Ri = Ye(Object.prototype.toString), Qe = Ye(RegExp.prototype.test), hn = jv(TypeError);
function Ye(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Za(e, t, n);
  };
}
function jv(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ec(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ui;
  if (_d && _d(e, null), !Br(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && ($v(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Bv(e) {
  for (let t = 0; t < e.length; t++)
    Ze(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = Yn(null);
  for (const n of dg(e)) {
    var r = qv(n, 2);
    const i = r[0], s = r[1];
    Ze(e, i) && (Br(s) ? t[i] = Bv(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function Vv(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return zv(e);
    case "boolean":
      return Kv(e);
    case "bigint":
      return Md ? Md(e) : "0";
    case "symbol":
      return Ed ? Ed(e) : "Symbol()";
    case "undefined":
      return Ri(e);
    case "function":
    case "object": {
      if (e === null)
        return Ri(e);
      const t = e, r = jt(t, "toString");
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
function jt(e, t) {
  for (; e !== null; ) {
    const n = Iv(e, t);
    if (n) {
      if (n.get)
        return Ye(n.get);
      if (typeof n.value == "function")
        return Ye(n.value);
    }
    e = Lv(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Wv(e) {
  try {
    return Qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ad = it(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ma = it(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ya = it(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Hv = it(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ba = it(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Gv = it(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Pd = it(["#text"]), Nd = it(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ka = it(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Od = it(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ns = it(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Jv = at(/{{[\w\W]*|^[\w\W]*}}/g), Yv = at(/<%[\w\W]*|^[\w\W]*%>/g), Xv = at(/\${[\w\W]*/g), Qv = at(/^data-[\-\w.\u00B7-\uFFFF]+$/), Zv = at(/^aria-[\-\w]+$/), wd = at(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), eS = at(/^(?:\w+script|data):/i), tS = at(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), rS = at(/^html$/i), nS = at(/^[a-z][.\w]*(-[.\w]+)+$/i), qd = at(/<[/\w!]/g), Rd = at(/<[/\w]/g), iS = at(/<\/no(script|embed|frames)/i), sS = at(/\/>/i), Et = {
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
}, oS = function() {
  return typeof window > "u" ? null : window;
}, aS = function(t, r) {
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
}, $d = function() {
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
  return Ze(t, r) && Br(t[r]) ? pe(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function pg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : oS();
  const t = (D) => pg(D);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== Et.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, p = a.prototype, f = jt(p, "cloneNode"), g = jt(p, "remove"), h = jt(p, "nextSibling"), y = jt(p, "childNodes"), k = jt(p, "parentNode"), _ = jt(p, "shadowRoot"), C = jt(p, "attributes"), M = o && o.prototype ? jt(o.prototype, "nodeType") : null, E = o && o.prototype ? jt(o.prototype, "nodeName") : null, z = o && o.prototype ? jt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const D = r.createElement("template");
    D.content && D.content.ownerDocument && (r = D.content.ownerDocument);
  }
  let W, j = "", U, N = !1, B = 0;
  const re = function() {
    if (B > 0)
      throw hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, X = function(m) {
    re(), B++;
    try {
      return W.createHTML(m);
    } finally {
      B--;
    }
  }, ye = function(m) {
    re(), B++;
    try {
      return W.createScriptURL(m);
    } finally {
      B--;
    }
  }, ke = function() {
    return N || (U = aS(u, i), N = !0), U;
  }, tr = r, $e = tr.implementation, sn = tr.createNodeIterator, mr = tr.createDocumentFragment, Mt = tr.getElementsByTagName, ne = n.importNode;
  let A = $d();
  t.isSupported = typeof dg == "function" && typeof k == "function" && $e && $e.createHTMLDocument !== void 0;
  const G = Jv, de = Yv, Ee = Xv, ee = Qv, Se = Zv, yr = eS, wt = tS, on = nS;
  let We = wd, ue = null;
  const gt = pe({}, [...Ad, ...ma, ...ya, ...ba, ...Pd]);
  let _e = null;
  const br = pe({}, [...Nd, ...ka, ...Od, ...Ns]);
  let Oe = Object.seal(Yn(null, {
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
  const mt = Object.seal(Yn(null, {
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
  let xs = !0, Tr = !0, In = !1, vi = !0, rr = !1, Kt = !0, q = !1, V = !1, J = null, Z = null, Me = !1, Xe = !1, nr = !1, an = !1, Si = !0, Yl = !1;
  const Xl = "user-content-";
  let zo = !0, _s = !1, Dn = {}, ir = null;
  const Ko = pe({}, [
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
  let Ql = null;
  const Zl = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let jo = null;
  const eu = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Cs = "http://www.w3.org/1998/Math/MathML", vs = "http://www.w3.org/2000/svg", sr = "http://www.w3.org/1999/xhtml";
  let Un = sr, Bo = !1, Vo = null;
  const Xm = pe({}, [Cs, vs, sr], ga), tu = it(["mi", "mo", "mn", "ms", "mtext"]);
  let Wo = pe({}, tu);
  const ru = it(["annotation-xml"]);
  let Ho = pe({}, ru);
  const Qm = pe({}, ["title", "style", "font", "a", "script"]);
  let Mi = null;
  const Zm = ["application/xhtml+xml", "text/html"], ey = "text/html";
  let Le = null, Fn = null;
  const ty = r.createElement("form"), nu = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Go = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Fn && Fn === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = ct(m), Mi = // eslint-disable-next-line unicorn/prefer-includes
    Zm.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? ey : m.PARSER_MEDIA_TYPE, Le = Mi === "application/xhtml+xml" ? ga : Ui, ue = zr(m, "ALLOWED_TAGS", gt, {
      transform: Le
    }), _e = zr(m, "ALLOWED_ATTR", br, {
      transform: Le
    }), Vo = zr(m, "ALLOWED_NAMESPACES", Xm, {
      transform: ga
    }), jo = zr(m, "ADD_URI_SAFE_ATTR", eu, {
      transform: Le,
      base: eu
    }), Ql = zr(m, "ADD_DATA_URI_TAGS", Zl, {
      transform: Le,
      base: Zl
    }), ir = zr(m, "FORBID_CONTENTS", Ko, {
      transform: Le
    }), kr = zr(m, "FORBID_TAGS", ct({}), {
      transform: Le
    }), Ci = zr(m, "FORBID_ATTR", ct({}), {
      transform: Le
    }), Dn = Ze(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? ct(m.USE_PROFILES) : m.USE_PROFILES : !1, xs = m.ALLOW_ARIA_ATTR !== !1, Tr = m.ALLOW_DATA_ATTR !== !1, In = m.ALLOW_UNKNOWN_PROTOCOLS || !1, vi = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, rr = m.SAFE_FOR_TEMPLATES || !1, Kt = m.SAFE_FOR_XML !== !1, q = m.WHOLE_DOCUMENT || !1, Xe = m.RETURN_DOM || !1, nr = m.RETURN_DOM_FRAGMENT || !1, an = m.RETURN_TRUSTED_TYPE || !1, Me = m.FORCE_BODY || !1, Si = m.SANITIZE_DOM !== !1, Yl = m.SANITIZE_NAMED_PROPS || !1, zo = m.KEEP_CONTENT !== !1, _s = m.IN_PLACE || !1, We = Wv(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : wd, Un = typeof m.NAMESPACE == "string" ? m.NAMESPACE : sr, Wo = Ze(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(m.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, tu), Ho = Ze(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? ct(m.HTML_INTEGRATION_POINTS) : pe({}, ru);
    const x = Ze(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? ct(m.CUSTOM_ELEMENT_HANDLING) : Yn(null);
    if (Oe = Yn(null), Ze(x, "tagNameCheck") && nu(x.tagNameCheck) && (Oe.tagNameCheck = x.tagNameCheck), Ze(x, "attributeNameCheck") && nu(x.attributeNameCheck) && (Oe.attributeNameCheck = x.attributeNameCheck), Ze(x, "allowCustomizedBuiltInElements") && typeof x.allowCustomizedBuiltInElements == "boolean" && (Oe.allowCustomizedBuiltInElements = x.allowCustomizedBuiltInElements), at(Oe), rr && (Tr = !1), nr && (Xe = !0), Dn && (ue = pe({}, Pd), _e = Yn(null), Dn.html === !0 && (pe(ue, Ad), pe(_e, Nd)), Dn.svg === !0 && (pe(ue, ma), pe(_e, ka), pe(_e, Ns)), Dn.svgFilters === !0 && (pe(ue, ya), pe(_e, ka), pe(_e, Ns)), Dn.mathMl === !0 && (pe(ue, ba), pe(_e, Od), pe(_e, Ns))), mt.tagCheck = null, mt.attributeCheck = null, Ze(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? mt.tagCheck = m.ADD_TAGS : Br(m.ADD_TAGS) && (ue === gt && (ue = ct(ue)), pe(ue, m.ADD_TAGS, Le))), Ze(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? mt.attributeCheck = m.ADD_ATTR : Br(m.ADD_ATTR) && (_e === br && (_e = ct(_e)), pe(_e, m.ADD_ATTR, Le))), Ze(m, "ADD_URI_SAFE_ATTR") && Br(m.ADD_URI_SAFE_ATTR) && pe(jo, m.ADD_URI_SAFE_ATTR, Le), Ze(m, "FORBID_CONTENTS") && Br(m.FORBID_CONTENTS) && (ir === Ko && (ir = ct(ir)), pe(ir, m.FORBID_CONTENTS, Le)), Ze(m, "ADD_FORBID_CONTENTS") && Br(m.ADD_FORBID_CONTENTS) && (ir === Ko && (ir = ct(ir)), pe(ir, m.ADD_FORBID_CONTENTS, Le)), zo && (ue["#text"] = !0), q && pe(ue, ["html", "head", "body"]), ue.table && (pe(ue, ["tbody"]), delete kr.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const $ = W;
      W = m.TRUSTED_TYPES_POLICY;
      try {
        j = X("");
      } catch (H) {
        throw W = $, H;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (W = void 0, j = "") : (W === void 0 && (W = ke()), W && typeof j == "string" && (j = X("")));
    it && it(m), Fn = m;
  }, iu = pe({}, [...ma, ...ya, ...Hv]), su = pe({}, [...ba, ...Gv]), ry = function(m, x, $) {
    return x.namespaceURI === sr ? m === "svg" : x.namespaceURI === Cs ? m === "svg" && ($ === "annotation-xml" || Wo[$]) : !!iu[m];
  }, ny = function(m, x, $) {
    return x.namespaceURI === sr ? m === "math" : x.namespaceURI === vs ? m === "math" && Ho[$] : !!su[m];
  }, iy = function(m, x, $) {
    return x.namespaceURI === vs && !Ho[$] || x.namespaceURI === Cs && !Wo[$] ? !1 : !su[m] && (Qm[m] || !iu[m]);
  }, sy = function(m) {
    let x = k(m);
    (!x || !x.tagName) && (x = {
      namespaceURI: Un,
      tagName: "template"
    });
    const $ = Ui(m.tagName), H = Ui(x.tagName);
    return Vo[m.namespaceURI] ? m.namespaceURI === vs ? ry($, x, H) : m.namespaceURI === Cs ? ny($, x, H) : m.namespaceURI === sr ? iy($, x, H) : !!(Mi === "application/xhtml+xml" && Vo[m.namespaceURI]) : !1;
  }, Dr = function(m) {
    Gn(t.removed, {
      element: m
    });
    try {
      k(m).removeChild(m);
    } catch {
      if (g(m), !k(m))
        throw hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ss = function(m) {
    Ei(m);
    const x = y(m);
    if (x) {
      const H = [];
      Hn(x, (Y) => {
        Gn(H, Y);
      }), Hn(H, (Y) => {
        try {
          g(Y);
        } catch {
        }
      });
    }
    const $ = C(m);
    if ($)
      for (let H = $.length - 1; H >= 0; --H) {
        const Y = $[H], se = Y && Y.name;
        if (typeof se == "string")
          try {
            m.removeAttribute(se);
          } catch {
          }
      }
  }, cn = function(m, x) {
    try {
      Gn(t.removed, {
        attribute: x.getAttributeNode(m),
        from: x
      });
    } catch {
      Gn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(m), m === "is")
      if (Xe || nr)
        try {
          Dr(x);
        } catch {
        }
      else
        try {
          x.setAttribute(m, "");
        } catch {
        }
  }, oy = function(m) {
    const x = C(m);
    if (x)
      for (let $ = x.length - 1; $ >= 0; --$) {
        const H = x[$], Y = H && H.name;
        if (!(typeof Y != "string" || _e[Le(Y)]))
          try {
            m.removeAttribute(Y);
          } catch {
          }
      }
  }, Ei = function(m) {
    const x = [m];
    for (; x.length > 0; ) {
      const $ = x.pop();
      (M ? M($) : $.nodeType) === Et.element && oy($);
      const Y = y($);
      if (Y)
        for (let se = Y.length - 1; se >= 0; --se)
          x.push(Y[se]);
    }
  }, ay = function(m) {
    if (!Kt)
      return;
    const x = [m];
    for (; x.length > 0; ) {
      const $ = x.pop(), H = M ? M($) : $.nodeType;
      if (H === Et.processingInstruction || H === Et.comment && Qe(Rd, $.data)) {
        try {
          g($);
        } catch {
        }
        continue;
      }
      if (H === Et.element) {
        const se = $, Te = Le(E ? E($) : $.nodeName);
        try {
          se.hasAttribute && se.hasAttribute("patchsrc") && se.removeAttribute("patchsrc"), se.hasAttribute && se.hasAttribute("for") && Te !== "label" && Te !== "output" && se.removeAttribute("for");
        } catch {
        }
      }
      const Y = y($);
      if (Y)
        for (let se = Y.length - 1; se >= 0; --se)
          x.push(Y[se]);
    }
  }, ou = function(m) {
    let x = null, $ = null;
    if (Me)
      m = "<remove></remove>" + m;
    else {
      const se = vd(m, /^[\r\n\t ]+/);
      $ = se && se[0];
    }
    Mi === "application/xhtml+xml" && Un === sr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const H = W ? X(m) : m;
    if (Un === sr)
      try {
        x = new d().parseFromString(H, Mi);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = $e.createDocument(Un, "template", null);
      try {
        x.documentElement.innerHTML = Bo ? j : H;
      } catch {
      }
    }
    const Y = x.body || x.documentElement;
    return m && $ && Y.insertBefore(r.createTextNode($), Y.childNodes[0] || null), Un === sr ? Mt.call(x, q ? "html" : "body")[0] : q ? x.documentElement : Y;
  }, au = function(m) {
    const x = z ? z(m) : m.ownerDocument;
    return sn.call(
      x || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ms = function(m) {
    return m = qi(m, G, " "), m = qi(m, de, " "), m = qi(m, Ee, " "), m;
  }, Jo = function(m) {
    var x;
    m.normalize();
    const $ = z ? z(m) : m.ownerDocument, H = sn.call(
      $ || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = H.nextNode();
    for (; Y; )
      Y.data = Ms(Y.data), Y = H.nextNode();
    const se = (x = m.querySelectorAll) === null || x === void 0 ? void 0 : x.call(m, "template");
    se && Hn(se, (Te) => {
      zn(Te.content) && Jo(Te.content);
    });
  }, Es = function(m) {
    const x = E ? E(m) : null;
    return typeof x != "string" || Le(x) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    m.attributes !== C(m) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    m.nodeType !== M(m) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    m.childNodes !== y(m);
  }, zn = function(m) {
    if (!M || typeof m != "object" || m === null)
      return !1;
    try {
      return M(m) === Et.documentFragment;
    } catch {
      return !1;
    }
  }, Ai = function(m) {
    if (!M || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof M(m) == "number";
    } catch {
      return !1;
    }
  };
  function or(D, m, x) {
    D.length !== 0 && Hn(D, ($) => {
      $.call(t, m, x, Fn);
    });
  }
  const cy = function(m, x) {
    return !!(Kt && m.hasChildNodes() && !Ai(m.firstElementChild) && Qe(qd, m.textContent) && Qe(qd, m.innerHTML) || Kt && m.namespaceURI === sr && x === "style" && Ai(m.firstElementChild) || m.nodeType === Et.processingInstruction || Kt && m.nodeType === Et.comment && Qe(Rd, m.data));
  }, ly = function(m, x, $) {
    if (!kr[x] && du(x) && (Oe.tagNameCheck instanceof RegExp && Qe(Oe.tagNameCheck, x) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(x)))
      return !1;
    if (zo && !ir[x]) {
      const H = k(m), Y = y(m);
      if (Y && H) {
        const se = Y.length;
        for (let Te = se - 1; Te >= 0; --Te) {
          const Ie = m === $ ? f(Y[Te], !0) : Y[Te];
          H.insertBefore(Ie, h(m));
        }
      }
    }
    return Dr(m), !0;
  }, cu = function(m, x, $, H) {
    return m.length === 0 ? x : x === $ || x === H ? ct(x) : x;
  }, lu = function(m, x) {
    if (or(A.beforeSanitizeElements, m, null), m !== x && k(m) === null)
      return _s && Ei(m), !0;
    if (Es(m))
      return Dr(m), !0;
    const $ = Le(E ? E(m) : m.nodeName);
    if (ue = cu(A.uponSanitizeElement, ue, gt, J), or(A.uponSanitizeElement, m, {
      tagName: $,
      allowedTags: ue
    }), m !== x && k(m) === null)
      return _s && Ei(m), !0;
    if (cy(m, $))
      return Dr(m), !0;
    if (kr[$] || !(mt.tagCheck instanceof Function && mt.tagCheck($)) && !ue[$]) {
      const Y = ly(m, $, x);
      return Y === !1 && or(A.afterSanitizeElements, m, null), Y;
    }
    if ((M ? M(m) : m.nodeType) === Et.element && !sy(m) || ($ === "noscript" || $ === "noembed" || $ === "noframes") && Qe(iS, m.innerHTML))
      return Dr(m), !0;
    if (rr && m.nodeType === Et.text) {
      const Y = Ms(m.textContent);
      m.textContent !== Y && (Gn(t.removed, {
        element: m.cloneNode()
      }), m.textContent = Y);
    }
    return or(A.afterSanitizeElements, m, null), !1;
  }, uu = function(m, x, $) {
    if (Ci[x] || Kt && x === "patchsrc" || Kt && x === "for" && m !== "label" && m !== "output" || Si && (x === "id" || x === "name") && ($ in r || $ in ty))
      return !1;
    const H = _e[x] || mt.attributeCheck instanceof Function && mt.attributeCheck(x, m);
    if (!(Tr && Qe(ee, x))) {
      if (!(xs && Qe(Se, x))) {
        if (H) {
          if (!jo[x]) {
            if (!Qe(We, qi($, wt, ""))) {
              if (!((x === "src" || x === "xlink:href" || x === "href") && m !== "script" && Sd($, "data:") === 0 && Ql[m])) {
                if (!(In && !Qe(yr, qi($, wt, "")))) {
                  if ($)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(du(m) && (Oe.tagNameCheck instanceof RegExp && Qe(Oe.tagNameCheck, m) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck(m)) && (Oe.attributeNameCheck instanceof RegExp && Qe(Oe.attributeNameCheck, x) || Oe.attributeNameCheck instanceof Function && Oe.attributeNameCheck(x, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && Oe.allowCustomizedBuiltInElements && (Oe.tagNameCheck instanceof RegExp && Qe(Oe.tagNameCheck, $) || Oe.tagNameCheck instanceof Function && Oe.tagNameCheck($)))
        ) return !1;
      }
    }
    return !0;
  }, uy = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), du = function(m) {
    return !uy[Ui(m)] && Qe(on, m);
  }, dy = function(m, x, $, H) {
    if (W && typeof u == "object" && typeof u.getAttributeType == "function" && !$)
      switch (u.getAttributeType(m, x)) {
        case "TrustedHTML":
          return X(H);
        case "TrustedScriptURL":
          return ye(H);
      }
    return H;
  }, fy = function(m, x, $, H) {
    try {
      $ ? m.setAttributeNS($, x, H) : m.setAttribute(x, H), Es(m) ? Dr(m) : Cd(t.removed);
    } catch {
      cn(x, m);
    }
  }, fu = function(m) {
    or(A.beforeSanitizeAttributes, m, null);
    const x = m.attributes;
    if (!x || Es(m))
      return;
    _e = cu(A.uponSanitizeAttribute, _e, br, Z);
    const $ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _e,
      forceKeepAttr: void 0
    };
    let H = x.length;
    const Y = Le(m.nodeName);
    for (; H--; ) {
      const se = x[H], Te = se.name, Ie = se.namespaceURI, yt = se.value, bt = Le(Te), Xo = yt;
      let dt = Te === "value" ? Xo : Fv(Xo);
      if ($.attrName = bt, $.attrValue = dt, $.keepAttr = !0, $.forceKeepAttr = void 0, or(A.uponSanitizeAttribute, m, $), dt = $.attrValue, Yl && (bt === "id" || bt === "name") && Sd(dt, Xl) !== 0 && (cn(Te, m), dt = Xl + dt), Kt && Qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        cn(Te, m);
        continue;
      }
      if (bt === "attributename" && vd(dt, "href")) {
        cn(Te, m);
        continue;
      }
      if (!$.forceKeepAttr) {
        if (!$.keepAttr) {
          cn(Te, m);
          continue;
        }
        if (!vi && Qe(sS, dt)) {
          cn(Te, m);
          continue;
        }
        if (rr && (dt = Ms(dt)), !uu(Y, bt, dt)) {
          cn(Te, m);
          continue;
        }
        dt = dy(Y, bt, Ie, dt), dt !== Xo && fy(m, Te, Ie, dt);
      }
    }
    or(A.afterSanitizeAttributes, m, null);
  }, As = function(m) {
    let x = null;
    const $ = au(m);
    for (or(A.beforeSanitizeShadowDOM, m, null); x = $.nextNode(); )
      if (or(A.uponSanitizeShadowNode, x, null), lu(x, m), fu(x), zn(x.content) && As(x.content), (M ? M(x) : x.nodeType) === Et.element) {
        const Y = _(x);
        zn(Y) && (Yo(Y), As(Y));
      }
    or(A.afterSanitizeShadowDOM, m, null);
  }, Yo = function(m) {
    const x = [{
      node: m,
      shadow: null
    }];
    for (; x.length > 0; ) {
      const $ = x.pop();
      if ($.shadow) {
        As($.shadow);
        continue;
      }
      const H = $.node, se = (M ? M(H) : H.nodeType) === Et.element, Te = y(H);
      if (Te)
        for (let Ie = Te.length - 1; Ie >= 0; --Ie)
          x.push({
            node: Te[Ie],
            shadow: null
          });
      if (se) {
        const Ie = E ? E(H) : null;
        if (typeof Ie == "string" && Le(Ie) === "template") {
          const yt = H.content;
          zn(yt) && x.push({
            node: yt,
            shadow: null
          });
        }
      }
      if (se) {
        const Ie = _(H);
        zn(Ie) && x.push({
          node: null,
          shadow: Ie
        }, {
          node: Ie,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, x = null, $ = null, H = null, Y = null;
    if (Bo = !D, Bo && (D = "<!-->"), typeof D != "string" && !Ai(D) && (D = Vv(D), typeof D != "string"))
      throw hn("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    V ? (ue = J, _e = Z) : Go(m), (A.uponSanitizeElement.length > 0 || A.uponSanitizeAttribute.length > 0) && (ue = ct(ue)), A.uponSanitizeAttribute.length > 0 && (_e = ct(_e)), t.removed = [];
    const se = _s && typeof D != "string" && Ai(D);
    if (se) {
      ay(D);
      const yt = E ? E(D) : D.nodeName;
      if (typeof yt == "string") {
        const bt = Le(yt);
        if (!ue[bt] || kr[bt])
          throw Ss(D), hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Es(D))
        throw Ss(D), hn("root node is clobbered and cannot be sanitized in-place");
      try {
        Yo(D);
      } catch (bt) {
        throw Ss(D), bt;
      }
    } else if (Ai(D))
      x = ou("<!---->"), $ = x.ownerDocument.importNode(D, !0), $.nodeType === Et.element && $.nodeName === "BODY" || $.nodeName === "HTML" ? x = $ : x.appendChild($), Yo($);
    else {
      if (!Xe && !rr && !q && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return W && an ? X(D) : D;
      if (x = ou(D), !x)
        return Xe ? null : an ? j : "";
    }
    x && Me && Dr(x.firstChild);
    const Te = se ? D : x;
    try {
      const yt = au(Te);
      for (; H = yt.nextNode(); )
        lu(H, Te), fu(H), zn(H.content) && As(H.content);
    } catch (yt) {
      throw se && (Ss(D), Hn(t.removed, (bt) => {
        bt.element && Ei(bt.element);
      })), yt;
    }
    if (se)
      return Hn(t.removed, (yt) => {
        yt.element && Ei(yt.element);
      }), rr && Jo(D), D;
    if (Xe) {
      if (rr && Jo(x), nr)
        for (Y = mr.call(x.ownerDocument); x.firstChild; )
          Y.appendChild(x.firstChild);
      else
        Y = x;
      return (_e.shadowroot || _e.shadowrootmode) && (Y = ne.call(n, Y, !0)), Y;
    }
    let Ie = q ? x.outerHTML : x.innerHTML;
    return q && ue["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && Qe(rS, x.ownerDocument.doctype.name) && (Ie = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Ie), rr && (Ie = Ms(Ie)), W && an ? X(Ie) : Ie;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Go(D), V = !0, J = ue, Z = _e;
  }, t.clearConfig = function() {
    Fn = null, V = !1, J = null, Z = null, W = U, j = "";
  }, t.isValidAttribute = function(D, m, x) {
    Fn || Go({});
    const $ = Le(D), H = Le(m);
    return uu($, H, x);
  }, t.addHook = function(D, m) {
    typeof m == "function" && Ze(A, D) && Gn(A[D], m);
  }, t.removeHook = function(D, m) {
    if (Ze(A, D)) {
      if (m !== void 0) {
        const x = Dv(A[D], m);
        return x === -1 ? void 0 : Uv(A[D], x, 1)[0];
      }
      return Cd(A[D]);
    }
  }, t.removeHooks = function(D) {
    Ze(A, D) && (A[D] = []);
  }, t.removeAllHooks = function() {
    A = $d();
  }, t;
}
var cS = pg();
function lS({ structureProtectionMode: e = "off" }) {
  const [t] = ce(), r = Q(void 0), [n, i] = fe(void 0), s = ge((o) => {
    r.current = o, i(o);
  }, []);
  return F(() => {
    if (e === "off")
      return;
    const o = (f) => {
      const g = ig(f);
      if (!g)
        return !1;
      const h = w();
      return e === "protected" ? h && cg(h, g) ? (f.preventDefault(), !0) : !1 : g !== "deleteBackward" && g !== "deleteForward" ? !1 : a(g, f);
    }, a = (f, g) => {
      const h = w(), y = r.current;
      if (y && h && Td(h, y)) {
        if (s(void 0), g.preventDefault(), f !== y.intent)
          return !0;
        const _ = oe(y.key) ?? void 0;
        if (y.kind === "verse") {
          if (_) {
            const C = _.getParent(), M = _.getPreviousSibling(), E = _.getNextSibling();
            _.remove(), M ? lg(M) : E && S(E) ? E.select(0, 0) : C?.selectStart();
          }
        } else y.kind === "selection" ? P(h) && h.removeText() : ve(_) && Av(_);
        return !0;
      }
      if (!h)
        return !1;
      const k = Ev(h, f);
      if (k) {
        if (k.kind === "verse") {
          const _ = qf();
          _.add(k.node.getKey()), Tn(_);
        } else {
          const _ = vc();
          _.anchor.set(k.node.getKey(), 0, "element"), _.focus.set(k.node.getKey(), k.node.getChildrenSize(), "element"), Tn(_);
        }
        return s({ key: k.node.getKey(), kind: k.kind, intent: f }), g.preventDefault(), !0;
      }
      if (P(h) && !h.isCollapsed() && _l(h)) {
        const _ = h.getNodes().filter(me).map((E) => E.getKey()), { anchor: C, focus: M } = h;
        return s({
          kind: "selection",
          intent: f,
          key: _[0],
          anchor: { key: C.key, offset: C.offset, type: C.type },
          focus: { key: M.key, offset: M.offset, type: M.type }
        }), g.preventDefault(), !0;
      }
      return !1;
    }, c = (f) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return !g || !ei(g) ? !1 : (f instanceof Event && f.preventDefault(), !0);
    }, l = (f, g) => {
      if (!f)
        return !1;
      const h = cS.sanitize(f), y = new DOMParser().parseFromString(h, "text/html"), k = Pv(fb(t, y)), _ = w();
      return P(_) && _.insertNodes(k), g.preventDefault(), !0;
    }, d = (f) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return g && ei(g) ? (f.preventDefault(), !0) : l(f.clipboardData?.getData("text/html"), f);
    }, u = (f) => {
      if (e !== "protected")
        return !1;
      const g = w();
      return g && ei(g) ? (f.preventDefault(), !0) : l(f.dataTransfer?.getData("text/html"), f);
    }, p = () => {
      const f = r.current;
      f && t.getEditorState().read(() => {
        Td(w(), f) || s(void 0);
      });
    };
    return Fe(
      t.registerCommand(Nr, o, qe),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(Wt, c, tt),
      t.registerCommand(_r, d, qe),
      t.registerCommand(Ky, c, qe),
      t.registerCommand(Ec, u, qe),
      t.registerCommand(Mc, c, qe),
      t.registerUpdateListener(p)
    );
  }, [t, e, s]), F(() => {
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
function uS({ textDirection: e }) {
  const [t] = ce();
  return dS(t, e), null;
}
function dS(e, t) {
  F(() => (Ld(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
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
function fS() {
  const [e] = ce();
  return pS(e), null;
}
function pS(e) {
  F(() => {
    if (!e.hasNodes([be, vt, Pe, Be, ft]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return Fe(
      e.registerNodeTransform(Be, hS),
      e.registerNodeTransform(Be, (t) => gS(t, e)),
      e.registerNodeTransform(ft, Id),
      e.registerNodeTransform(vt, Id),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(ft, (t) => {
        is(vn("va"), t), is(vn("vp"), t);
      })
    );
  }, [e]);
}
function hS(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || K(r) || I(n) || I(r) || Ce(n) || Ce(r) || Ue(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  ie(e, ae) === "attribute" || // When a verse's/milestone's run rides inside an AttributeRunNode wrapper (AttributeRunNode.ts,
  // the shape the adaptor always builds now), its glyph children (MarkerNode, never textType
  // "attribute") need the same exemption the state-tagged value already gets above — a glyph is
  // a plain TextNode here, invisible to the state check, but is exactly as much engine-owned
  // presentation. The transform still exempts whichever shape — loose attribute text or a
  // wrapper's children — is actually in the tree, so a pre-flip loose editor state stays exempt
  // too.
  De(n))
    return;
  if (me(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  me(r) && tl(e);
}
function gS(e, t) {
  const r = e.getParent();
  !Ue(r) || !e.isAttached() || Va(t, e.getKey()) && !Va(t, r.getKey()) && r.insertAfter(e);
}
function Id(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ce(t); )
    t = t.getLastChild();
  (I(t) || S(t) && Ce(t.getParent())) && e.insertBefore(he(" "));
}
function Cl(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Uc(n)) ? void 0 : e;
}
function mS(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function yS() {
  const e = w();
  if (!(!P(e) || !e.isCollapsed()))
    return Cl(mS(e.anchor));
}
function bS(e) {
  const t = w();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = hg(e.target)), r ? Cl(rt(r, K)) : void 0;
}
function hg(e) {
  const t = jy(e)?.anchorNode;
  if (wf(t))
    return fi(t) ?? void 0;
}
function kS(e) {
  if (w())
    return;
  const t = hg(e);
  return t ? Cl(rt(t, K)) : void 0;
}
function TS() {
  const [e] = ce(), t = rg(yS);
  return F(() => {
    const r = (n) => {
      Gr(Jr), t(n);
    };
    return Fe(e.registerCommand(dr, () => {
      const n = kS(e.getRootElement());
      return n && r(n), !1;
    }, kn), e.registerCommand(mo, (n) => {
      const i = bS(n);
      return i && r(i), !1;
    }, kn));
  }, [e, t]), null;
}
function xS({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = U_({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return v(D_, { trigger: e, items: i });
}
function _S({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = je(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? v(SS, { trigger: e, harness: i }) : v(xS, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const CS = [" ", "*"];
function vS(e, t) {
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
function SS({ trigger: e, harness: t }) {
  const [r] = ce(), [n, i] = fe(void 0), s = Q({ query: "", options: [] }), o = Q(0), a = ge((p, f, g) => {
    const h = f.find((y) => y.kind === "note" && y.marker === p);
    if (h) {
      t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const y = w();
      P(y) && y.insertText(`${e}${p}${g ? " " : ""}`);
    });
  }, [r, t, e]);
  F(() => Fe(r.registerCommand(Nr, (p) => {
    if (n) {
      if ((p.key === "Enter" || p.key === "Tab") && s.current.options.length === 0)
        return p.preventDefault(), p.stopPropagation(), !0;
      if (p.key === "*" && n.trigger === "backslash")
        return p.preventDefault(), p.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (p.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        p.preventDefault(), p.stopPropagation();
        const h = s.current.query;
        return h ? (a(h, n.items, !1), By(() => {
          const y = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(y ? {
            trigger: "backslash",
            hasTextSelection: y.hasTextSelection,
            items: t.getItems(y),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const y = w();
          P(y) && y.insertText(e);
        }), !0);
      }
      if (p.key !== " " || n.trigger !== "backslash")
        return !1;
      p.preventDefault(), p.stopPropagation(), i(void 0);
      const g = s.current.query;
      if (n.hasTextSelection) {
        const h = n.items.find((y) => y.marker === g);
        return h && t.apply(h, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(g, n.items, !0), !0;
    }
    if (p.key !== e)
      return !1;
    const f = t.getContext();
    return f ? (p.preventDefault(), s.current = { query: "", options: [] }, o.current += 1, i({
      trigger: "backslash",
      hasTextSelection: f.hasTextSelection,
      items: t.getItems(f),
      session: o.current
    }), !0) : !1;
  }, qe), r.registerCommand(Rf, (p) => {
    if (n || p === null || p.shiftKey)
      return !1;
    const f = t.getContext();
    return !f || f.noteMarker || f.inMarkerText ? !1 : (p.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(f),
      session: o.current
    }), !0);
  }, Wr)), [r, e, t, n, a]);
  const c = ge(() => i(void 0), []), l = ge((p, f) => {
    s.current = { query: p, options: f };
  }, []), d = ge((p) => {
    const { markerMenuItem: f, applyOpts: g } = p;
    t.apply(f, g);
  }, [t]), u = je(() => n?.items.map((p) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    vS(p, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && v(Rh, { isOpen: !0, children: ({ placement: p }) => v(
    Ih,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: p === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? CS : void 0 },
    n.session
  ) });
}
function gg(e) {
  return e.replaceAll(R, "~").replace(/ {2,}/g, (r) => R.repeat(r.length));
}
function MS(e) {
  return e.replaceAll(R, " ").replaceAll("~", R);
}
function ES(e) {
  return e.replace(/ {2,}/g, " ");
}
let no;
function AS(e) {
  e && (no = e);
}
function mg(e) {
  return wo(e);
}
function PS(e, t) {
  return e.isEmpty() ? Nf : yg(e.toJSON(), t);
}
function yg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && ko(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Nf;
  if (r.some(cx)) {
    no?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = bg(r), i = Bt(n, t);
  return i ? { type: vr, version: Cr, content: i } : void 0;
}
function NS(e, t) {
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
function OS(e) {
  const { marker: t, number: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e;
  return Ne({
    type: Ot.getType(),
    marker: t,
    number: r,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function wS(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = $p(r, a, c), Ne({
    type: Ot.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function qS(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = $p(t, o, a), Ne({
    type: ft.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function RS(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !mg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(R) && (t[0] = a.slice(1));
  }
  return Ne({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function $S(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Ne({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function LS(e, t) {
  const { unknownAttributes: r } = e;
  return Ne({ type: ch, ...r, content: t });
}
function IS(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Ne({ type: dh, marker: r, ...n, content: t });
}
function DS(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Ne({
    type: ph,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function US(e, t) {
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
function Xn(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Ne({
    type: t,
    marker: r === "" ? void 0 : r,
    ...jp({ sid: n, eid: i, ...s }, o)
  });
}
function FS(e) {
  return e.text;
}
function zS(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Ne({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function KS(e) {
  const { marker: t } = e;
  return {
    type: Hs,
    marker: t === "" ? void 0 : t
  };
}
function Dd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function jS(e, t, r, n, i) {
  const s = Jt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = Xn({
      type: s,
      marker: Qn,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = Xn({
      type: s,
      marker: xn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = Xn({
      type: s,
      marker: xn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = Xn({
      type: s,
      marker: Qn
    });
    i.push(l);
  }
  (!n || !up(n)) && t.forEach((l) => {
    const d = Xn({
      type: s,
      marker: Qn,
      eid: l
    });
    i.push(d);
  });
}
function Bt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, p = a, f = a, g = a, h = a, y = a;
    switch (a.type) {
      case Ft.getType():
        i.push(
          NS(
            l,
            Bt(l.children, t)
          )
        );
        break;
      case hr.getType():
        i.push(OS(a));
        break;
      case Ot.getType():
        i.push(
          wS(
            d,
            Bt(d.children, t)
          )
        );
        break;
      case vt.getType():
      case ft.getType():
        i.push(qS(a));
        break;
      case be.getType():
        i.push(
          RS(
            u,
            Bt(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case nt.getType():
        i.push(
          $S(
            p,
            Bt(p.children, t)
          )
        );
        break;
      case Rn.getType():
        i.push(
          LS(
            a,
            Bt(a.children, t)
          )
        );
        break;
      case gi.getType():
        i.push(
          IS(
            a,
            Bt(a.children, t)
          )
        );
        break;
      case mi.getType():
        i.push(
          DS(
            a,
            Bt(a.children, t)
          )
        );
        break;
      case Pe.getType():
        i.push(
          US(
            f,
            Bt(f.children, t, f.caller)
          )
        );
        break;
      case qr.getType():
      case wr.getType():
      case Gt.getType():
      case $f.getType():
      case gr.getType():
        break;
      case et.getType():
        if (s = Bt(
          h.children,
          t,
          r,
          n
        ), s) {
          const k = h.typedIDs[Vr];
          if (k)
            jS(s, k, o, e[c + 1], i), o = k;
          else {
            const _ = s.shift();
            _ && (typeof _ == "string" ? Dd(i, _) : i.push(_)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Jt.getType():
        i.push(Xn(a));
        break;
      case Be.getType():
        if (g.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !bs(g.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        g.text !== R && !g.text.startsWith(Nc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        g[gs]?.textType !== "attribute" && (!r || g.text !== Pt(r))) {
          let k = FS(g);
          mg(t) && (n && k.startsWith(R) && (k = k.slice(1)), k = ES(MS(k))), Dd(i, k);
        }
        break;
      case wn.getType():
        i.push(
          zS(
            y,
            Bt(y.children, t)
          )
        );
        break;
      case Lr.getType():
        i.push(KS(a));
        break;
      case yi.getType():
        no?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        no?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function bg(e) {
  const t = e.findIndex((r) => ko(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = bg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Ls = {
  initialize: AS,
  deserializeEditorState: PS
}, BS = /^sd\d*$/, VS = /* @__PURE__ */ new Set([
  ...Object.entries(Oa).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === b.Paragraph && !BS.test(e)
  ).map(([e]) => e),
  "qa"
]);
function WS(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (yp(i) || Op(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!$k(i)) {
      t && io(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Dc(i) && VS.has(i.marker) && !io(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    kg(i.children, t).forEach((s) => {
      const o = HS(i, s.nodes);
      if (!s.verse) {
        if (!o) return;
        n ? n.children.push(o) : r.push(o);
        return;
      }
      n = GS(s.verse), r.push(n), o && n.children.push(o);
    });
  }
  return r;
}
function kg(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Tg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (up(i)) {
      const s = kg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Ud(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Ud(i, c.nodes)] });
      });
      return;
    }
    t && io(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Ud(e, t) {
  return { ...e, children: t };
}
function Tg(e) {
  return Ch(e) && e.number !== "";
}
function io(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Tg(r) || io(r)) : !1;
}
function HS(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function GS(e) {
  return {
    type: Gs,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Th
  };
}
const Fd = _g([]), JS = {
  type: $f.getType(),
  version: 1
};
let vl = [], te, En, xg, Ct;
function YS(e, t) {
  vl = [], ZS(e), eM(t);
}
function XS(e = 0) {
}
function QS(e, t) {
  te = t ?? Oo();
  let r;
  return e ? (e.type !== vr && Ct?.warn(`This USJ type '${e.type}' didn't match the expected type '${vr}'.`), e.version !== Cr && Ct?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${Cr}'.`
  ), e.content.length > 0 ? (r = ic(Kr(e.content)), as(te) && (r = WS(r, Ct))) : r = [Fd]) : r = [Fd], xg?.(vl), {
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
function ZS(e) {
  e && (En = e), e?.addMissingComments && (xg = e.addMissingComments);
}
function eM(e) {
  e && (Ct = e);
}
function Sl() {
  return wo(te);
}
function tM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function rM(e) {
  let { marker: t } = e;
  t !== Qi && Ct?.warn(`Unexpected book marker '${t}'!`), t = t ?? Qi;
  const { code: r } = e;
  (!r || !Ft.isValidBookCode(r)) && Ct?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  te?.markerMode === "editable" || te?.markerMode === "visible" ? n.push(
    Tt("marker", Re(t) + " " + r + R)
  ) : te?.hasGutterParaMarkers && n.push(Tt("marker", Re(t) + R, !0));
  const i = tM(e.content);
  i && n.push(ut(Sl() ? gg(i) : i));
  const s = ze(e, hk);
  return Ne({
    type: Ft.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: gp
  });
}
function nM(e) {
  let { marker: t } = e;
  t !== Bs && Ct?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Bs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = ze(e, gk);
  let a;
  te?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Dt(t, r) ?? "")
  ];
  return te?.markerMode === "editable" && TM(i, s, c), te?.markerMode === "editable" ? Ne({
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
    version: bp
  }) : Ne({
    type: hr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Cp
  });
}
function iM(e) {
  let { marker: t } = e;
  t !== Vs && Ct?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Vs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (G_(te) ?? vt).getType(), c = te?.markerMode === "editable" ? Ap : _h;
  let l, d;
  te?.markerMode === "editable" ? l = Dt(t, r) : te?.markerMode === "visible" && (d = !0);
  const u = ze(e, Ak);
  return Ne({
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
function sM(e, t = [], r = !1) {
  let { marker: n } = e;
  be.isValidMarker(n, En?.extraValidMarkers) || Ct?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (te?.markerMode === "editable") {
    const [a] = t;
    ii(a) ? a.text = R + a.text : a && t.unshift(ut(R));
  }
  t.length === 0 && t.push(ut(Ut)), tc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = ze(e, bk);
  return s || mM(n, o, i), s || rc(e.marker ?? "", i, !1, r), Ne({
    type: be.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: _p
  });
}
function _g(e) {
  return {
    type: Xr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Mp
  };
}
function oM(e, t = []) {
  let { marker: r } = e;
  nt.isValidMarker(r, En?.extraValidMarkers) || Ct?.warn(`Unexpected para marker '${r}'!`), r = r ?? lr;
  const n = [];
  if (bi(te) && (te?.markerMode === "editable" ? n.push(
    pt(r),
    ut(R, pr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && n.push(
    Tt(
      "marker",
      Re(r) + R,
      te?.hasGutterParaMarkers
    )
  )), n.push(...t), Sl()) {
    const s = n.find(
      (o) => !Bc(o) && !(ii(o) && o.text === R)
    );
    ii(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => R.repeat(o.length)));
  }
  const i = ze(e, Mk);
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
    version: Ep
  });
}
function Ml() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function aM(e, t = []) {
  const r = ze(e, NT);
  return Ne({
    ...Ml(),
    type: Rn.getType(),
    unknownAttributes: r,
    children: t,
    version: lh
  });
}
function cM(e, t = []) {
  const r = ze(e, qT), n = e.marker ?? Fa, i = [];
  return te?.markerMode === "editable" ? i.push(
    pt(n),
    ut(R, pr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && i.push(
    Tt(
      "marker",
      Re(n) + R,
      te?.hasGutterParaMarkers
    )
  ), i.push(...t), Ne({
    ...Ml(),
    type: gi.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: fh
  });
}
function lM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? za, a = th(o, i) ?? o;
  te?.markerMode === "editable" ? s.push(
    pt(a),
    ut(R, pr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && s.push(
    Tt(
      "marker",
      Re(a) + R,
      te?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = ze(
    e,
    $T
  );
  return Ne({
    ...Ml(),
    type: mi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: hh
  });
}
function uM(e, t) {
  const r = zk(t);
  let n = () => {
  };
  return En?.noteCallerOnClick && (n = En.noteCallerOnClick), Ne({
    type: Gt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Nh
  });
}
function dM(e, t) {
  let { marker: r } = e;
  Pe.isValidMarker(r, En?.extraValidMarkers) || Ct?.warn(`Unexpected note marker '${r}'!`), r = r ?? wc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : cl(te?.noteMode), a = ze(e, Ob), c = te?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  te?.markerMode === "editable" ? (l = pt(r, "opening", !1, c), s || (d = pt(r, "closing"))) : te?.markerMode === "visible" && (l = Tt("marker", Re(r) + " "), s || (d = Tt("marker", ot(r))));
  const u = [];
  let p;
  if (l && u.push(l), te?.markerMode === "editable" && !o)
    p = ut(Pt(i), void 0, c), u.push(p), kM(n, u), u.push(...t);
  else {
    const f = ut(R, pr, "token");
    p = uM(i, t), u.push(p, f, ...t.flatMap(fM(f)));
  }
  return d && u.push(d), Ne({
    type: Pe.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: rp
  });
}
function fM(e) {
  return (t) => cp(t) ? [t] : [t, e];
}
function pM(e) {
  let { marker: t } = e;
  (!t || !Jt.isValidMarker(t, En?.extraValidMarkers)) && Ct?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = ze(e, Oc), s = Bp(e);
  return Ne({
    type: Jt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: Zf
  });
}
function zd(e, t = []) {
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
function hM(e, t) {
  const { marker: r } = e, n = e.type, i = ze(e, lk), s = [];
  if (te?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = rh(
      n,
      r,
      i
    );
    o && s.push(Tt("marker", o)), a && s.push(Tt("attribute", a)), s.push(...t), c && s.push(Tt("attribute", c)), l && s.push(Tt("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    ii(o) && (o.mode = "token");
  }), Ne({
    type: wn.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: fp
  });
}
function gM(e) {
  return {
    type: Lr.getType(),
    marker: e,
    text: ji(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: te?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: oh
  };
}
function pt(e, t = "opening", r = !1, n = "normal") {
  return {
    type: gr.getType(),
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
  return t !== void 0 && (n[gs] = { textType: t }), n;
}
function Tt(e, t, r = !1) {
  const n = {
    type: wr.getType(),
    text: t,
    textType: e,
    version: ap
  };
  return r && (n[gs] = { [$c.key]: !0 }), n;
}
function cs(e, t) {
  return {
    type: qr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: pp
  };
}
function tc(e, t, r = !1) {
  te?.markerMode === "editable" ? t.push(pt(e, "opening", r)) : te?.markerMode === "visible" && t.push(Tt("marker", Re(e, r)));
}
function rc(e, t, r = !1, n = !1) {
  te?.markerMode === "editable" ? r ? t.push(pt("", "selfClosing")) : t.push(pt(e, "closing", n)) : te?.markerMode === "visible" && t.push(
    Tt(
      "marker",
      r ? ot("") : ot(e, n)
    )
  );
}
function mM(e, t, r) {
  if (te?.markerMode !== "editable" || !t) return;
  const n = cr(t, yo(e));
  n && r.push(ut(n, "attribute"));
}
function Kd(e, t) {
  if (e.type !== "ms" || te?.markerMode !== "editable" && te?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = ze(e, Oc), o = Vp(
    n,
    i,
    s,
    Bp(e)
  ), a = cr(o, bo(r ?? ""));
  if (!a) return;
  const c = R + a;
  te?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(Tt("attribute", c));
}
function yM(e, t) {
  const r = e.marker ?? "";
  if (te?.markerMode === "editable") {
    const n = [];
    tc(r, n), Kd(e, n), rc(r, n, !0), t.push(cs("milestone", n));
  } else
    tc(r, t), Kd(e, t), rc(r, t, !0);
}
function jd(e, t, r) {
  t !== void 0 && r.push(
    cs(e, [
      pt(e, "opening"),
      ut(R + t, "attribute"),
      pt(e, "closing")
    ])
  );
}
function bM(e, t) {
  te?.markerMode === "editable" && (jd("va", e.altnumber, t), jd("vp", e.pubnumber, t));
}
function kM(e, t) {
  e !== void 0 && t.push(
    cs("cat", [
      pt("cat", "opening"),
      ut(R + e, "attribute"),
      pt("cat", "closing")
    ])
  );
}
function TM(e, t, r) {
  e !== void 0 && r.push(
    cs("ca", [
      pt("ca", "opening"),
      ut(R + e, "attribute"),
      pt("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    cs("cp", [
      pt("cp", "opening"),
      ut(R + t, "attribute")
    ])
  );
}
function Bd(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function xM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function Vd(e, t) {
  t.marker === xn && t.sid !== void 0 && e.push(t.sid), t.marker === Qn && t.eid !== void 0 && xM(e, t.eid);
}
function nc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [zd(o, [...n])] : o, c = e[i];
  Vd(n, c);
  const l = nc(
    e.slice(i + 1, s),
    Bd(t, i + 1),
    c.marker === xn,
    n
  ), d = zd(l, [...n]), u = e[s];
  Vd(n, u);
  const p = nc(
    e.slice(s + 1),
    Bd(t, s + 1),
    u.marker === xn,
    n
  );
  return [...a, d, ...p];
}
function Kr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(Sl() ? gg(i) : i));
    else if (!i.type)
      Ct?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Ft.getType():
          n.push(rM(i));
          break;
        case Ot.getType():
          n.push(nM(i));
          break;
        case ft.getType():
          te?.hasSpacing || n.push(JS), n.push(iM(i)), bM(i, n);
          break;
        case be.getType():
          n.push(
            sM(i, Kr(i.content, !0), t)
          );
          break;
        case nt.getType():
          n.push(oM(i, Kr(i.content)));
          break;
        case Pe.getType():
          n.push(dM(i, Kr(i.content)));
          break;
        case Jt.getType():
          ep(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && vl?.push(i.sid)), n.push(pM(i)), yM(i, n);
          break;
        case Lr.getType():
          n.push(gM(i.marker ?? ""));
          break;
        case ch:
          n.push(aM(i, Kr(i.content)));
          break;
        case dh:
          n.push(cM(i, Kr(i.content)));
          break;
        case ph:
          n.push(lM(i, Kr(i.content)));
          break;
        default:
          Ct?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(hM(i, Kr(i.content)));
      }
  }), nc(n, r);
}
function ic(e) {
  const t = e.findIndex(
    (n) => yp(n) || Op(n) || Dc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    wT(n)
  );
  if (t >= 0) {
    const n = ic(e.slice(0, t)), i = e[t], s = ic(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || Ch(n)))
    return [_g(e)];
  return e;
}
const Ar = {
  initialize: YS,
  reset: XS,
  serializeEditorState: QS
};
function Cg(e) {
  if (e && !O(e)) {
    if (S(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = Cg(t);
        if (r) return r;
      }
  }
}
function _M() {
  const e = w();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((S(t) && !O(t) ? Mn(t) : void 0) && S(t)) {
      const i = he(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      si(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Cg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(R) ? R : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return S(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of vg(e)) {
    if (!Mn(t)) continue;
    si(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(R) && r.setTextContent(n.slice(R.length));
  }
  return !0;
}
function vg(e) {
  const [t, r] = Sc(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!S(a) || O(a) || ie(a, ae) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const p = a.splitText(d, u), f = p.length === 3 ? p[1] : u === l ? p[p.length - 1] : p[0];
    f && o.push(f);
  }), o;
}
function CM() {
  const e = w();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return Mn(t) ? ve(Yc(t)) : !1;
}
function Sg() {
  let e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (O(t) && !Zc(t, e.anchor.offset)) {
    const c = t.getParent();
    if (I(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = w(), !P(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!S(t) || O(t) || !Mn(t)) return !1;
  const r = Yc(t);
  if (!ve(r)) return !1;
  const n = he(""), i = e.anchor.offset;
  if (i <= 0) t.insertBefore(n);
  else if (i >= t.getTextContentSize()) t.insertAfter(n);
  else {
    const [, c] = t.splitText(i);
    c.insertBefore(n);
  }
  si(n, { renderGlyphs: !0 });
  const s = n.getNextSiblings();
  n.remove();
  const o = r.insertNewAfter(e, !1);
  o.append(...s);
  const [a] = s;
  return I(a) ? Xc(a) : o.select(0, 0), !0;
}
const Mg = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${wp(Ke().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = w(), t = zc(e), r = nl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = jk(0, o);
        const a = xx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Up(c) && Kc(parseInt(n, 10), c);
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
function sc(e, t) {
  return Pe.isValidMarker(e, t) || !!Mg[e] || nt.isValidMarker(e, t) || be.isValidMarker(e, t);
}
function vM(e, t) {
  return be.isNoteContentMarker(e) ? !1 : be.isValidMarker(e, t);
}
function Eg(e, t, r, n, i, s) {
  const o = wh(
    e,
    void 0,
    void 0,
    t,
    n ?? Oo(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function oc(e, t, r, n, i, s, o) {
  if (Pe.isValidMarker(e, n?.extraValidMarkers)) {
    let l;
    return { action: (u) => {
      u.editor.update(() => {
        l = Eg(
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
  const a = NM(e, n?.extraValidMarkers);
  return a ? { action: (l) => {
    l.editor.update(() => {
      const d = w();
      P(d) && (kh(d), l.noteText = d.getTextContent());
      const { content: u, highlightInserted: p } = a.action(l), f = Hu(u, Ar, r), g = Zo(f);
      if (P(d)) {
        const h = d.anchor.getNode(), y = h.getParent(), k = Mn(h), _ = d.anchor.key === d.focus.key;
        if (I(g) && k && _ && !Ta(g, o))
          EM(
            d,
            g,
            h,
            r?.markerMode === "editable"
          );
        else if (I(g) && !_ && !Ta(g, o) && AM(d))
          PM(d, g, r?.markerMode === "editable");
        else if (d.getTextContent().length > 0)
          OM(
            d,
            () => Zo(f)
          );
        else if (L(g) && !g.isInline()) {
          const C = d.insertParagraph();
          if (C) {
            const M = C.getChildren();
            g.append(...M), C.replace(g), ve(g) && Ti(g) || g.selectStart();
          }
        } else if (I(g) && S(h) && !O(h) && I(h.getParent()) && d.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Ta(g, o)) {
          const C = h.getParent();
          if (I(C)) {
            const M = d.anchor.offset;
            if (M === 0) h.insertBefore(g);
            else if (M >= h.getTextContentSize()) h.insertAfter(g);
            else {
              const [z] = h.splitText(M);
              z.insertAfter(g);
            }
            g.getChildren().forEach((z) => {
              O(z) && z.setNested(!0);
            });
            const E = g.getChildren().find((z) => S(z) && !O(z));
            E && S(E) ? E.select(
              E.getTextContentSize(),
              E.getTextContentSize()
            ) : g.selectEnd();
          }
        } else if (S(h) && !O(h) && d.isCollapsed() && (K(y) || I(y) && K(y.getParent()))) {
          const C = I(y) ? y : void 0, M = C ? SM(h, d.anchor.offset) : [];
          let z = (C ?? h).insertAfter(g);
          if (Rr(g)) {
            const W = {
              ...r || Oo(),
              markerMode: "hidden"
            }, j = Hu(
              u,
              Ar,
              W
            ), U = Zo(j);
            z = z.insertAfter(U);
          }
          if (M.length > 0 && C) {
            const W = so(C).append(...M);
            z.insertAfter(W), C.isEmpty() && C.remove();
          } else S(z.getNextSibling()) || z.insertAfter(he(R));
          L(z) && z.selectEnd();
        } else if (d.insertNodes([g]), zM(g), p) {
          const C = qf();
          C.add(g.getKey()), Tn(C);
        } else if (I(g)) {
          const C = g.getChildren().find((M) => S(M) && !O(M));
          C && S(C) ? C.select(
            C.getTextContentSize(),
            C.getTextContentSize()
          ) : g.selectEnd();
        } else {
          const C = g.getNextSibling();
          C ? C.selectStart() : g.selectStart();
        }
      } else
        d?.insertNodes([g]);
    }, s);
  }, label: a?.label } : { action: () => {
  }, label: void 0 };
}
function SM(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Ta(e, t) {
  return ((t ?? Js).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function MM(e, t) {
  t && e.getChildren().forEach((i) => {
    O(i) && i.setNested(!0);
  }), e.getChildren().some((i) => O(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function EM(e, t, r, n) {
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
    const [o, a] = li(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (si(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), S(i) && !i.getTextContent().startsWith(R) && i.setTextContent(R + i.getTextContent());
    const o = t.getChildren().find((a) => S(a) && !O(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => S(o) && !O(o));
  S(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function AM(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (O(n) || I(n)) continue;
    if (!S(n) || n.getType() !== Be.getType() || ie(n, ae) === "attribute") return !1;
    const i = Yc(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Mn(n) && (r = !0);
  }
  return r;
}
function PM(e, t, r) {
  const n = vg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Mn(a)) return;
    si(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(R) && c.setTextContent(l.slice(R.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(R) || i.setTextContent(R + i.getTextContent());
  const s = t.getChildren().find((a) => S(a) && !O(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function NM(e, t) {
  let r = Mg[e];
  return r || (nt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: nt.getType(), marker: e, content: [] }] })
  } : be.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: be.getType(), marker: e };
      return (be.isValidFootnoteMarker(e) || be.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function OM(e, t) {
  const r = e.getNodes(), [n, i] = li(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = Ag(
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
    s || (s = t(), c.insertBefore(s), l = !0, I(s) && s.getChildren().some((u) => O(u) && u.getMarkerSyntax() === "opening") && MM(s, I(s.getParent()))), qM(c, s, l);
  }), (S(s) || L(s)) && s.selectEnd();
}
function li(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function El(e) {
  return Ce(e) || K(e) || K(e.getParent());
}
function Ag(e, t, r, n, i) {
  if (!El(e)) {
    if (S(e))
      return wM(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function wM(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function qM(e, t, r) {
  if (S(t)) {
    const n = ac(e, t);
    t.setTextContent(n), e.remove();
  } else if (L(t)) {
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
    ac(e, t), r && I(t) && t.getChildren().some((s) => O(s)) && S(e) && !O(e) && !e.getTextContent().startsWith(R) && e.setTextContent(R + e.getTextContent());
  }
}
function ac(e, t) {
  let r = e.getTextContent();
  if (S(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    tl(n), S(n) || t.insertBefore(he(" "));
  }
  return r;
}
function Pg(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, p = An(d, t);
    if (!p) return !1;
    const f = S(d) ? d.getTextContentSize() : 0;
    if (Wd(p, r), S(d) && d.isAttached()) {
      const g = d.getTextContentSize(), h = Math.max(f - g, 0), y = Math.max(0, Math.min(u - h, g)), k = w();
      P(k) && k.setTextNodeRange(d, y, d, y);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = li(e);
  if (!Pl(n, t, s, o)) return !1;
  const a = Al(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = An(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const p = qg(u, a);
    p && (Wd(p, r), l = !0);
  }), Rg(a, i), l;
}
function Wd(e, t) {
  e.getChildren().forEach((n) => {
    zt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Ut) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    S(n) && i.startsWith(R) && n.setTextContent(i.slice(R.length));
  }), Aa(e);
}
function Al(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = Ag(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    S(o) && n.push(o);
  }), n;
}
function An(e, t) {
  let r = e, n;
  for (; r && !ve(r); ) {
    if (K(r)) return;
    !n && I(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Ng(e) {
  const t = rt(
    e,
    (r) => K(r) || ve(r)
  );
  return K(t);
}
function Og(e) {
  return e.filter(
    (t) => !El(t) && (S(t) || L(t) && t.isInline())
  );
}
function RM(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!S(i) || El(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function $M(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !wg(n, r)
  );
}
function Pl(e, t, r, n, i) {
  const s = Og(e), o = RM(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = An(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !$M(l, s, o);
  });
}
function wg(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || zt(r));
}
function qg(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (L(d) && t.some((u) => d.isParentOf(u))) {
      if (!wg(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && zt(n[s - 1]) && (s -= 1), o < n.length - 1 && zt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(so(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(so(e).append(...c)), e;
}
function so(e) {
  return Vy(e);
}
function Rg(e, t) {
  const r = w(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function LM(e, t, r) {
  if (e.isCollapsed()) {
    const l = An(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (wu(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = li(e);
  if (!Pl(n, r, i, s, t)) return !1;
  const o = Al(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = An(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = qg(d, o);
    u && (wu(u, t), c = !0);
  }), c;
}
function IM(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (y) => y !== t
  ), s = e.getNodes(), [o, a] = li(e);
  if (!!!i?.some(
    (y) => Pl(s, y, o, a)
  ) && !DM(s, t)) return !1;
  let l = !1;
  i?.forEach((y) => {
    const k = w();
    P(k) && Pg(k, y, n) && (l = !0);
  });
  const d = w();
  if (!P(d)) return l;
  const u = d.isBackward(), [p, f] = li(d), g = Al(
    d.getNodes(),
    p,
    f
  );
  if (g.length === 0) return l;
  const h = g.filter(
    (y) => !Ng(y) && !An(y, t)
  );
  return h.length > 0 && (UM(h).forEach((y) => FM(y, t)), l = !0), Rg(g, u), l;
}
function DM(e, t) {
  return Og(e).some(
    (r) => !Ng(r) && !An(r, t)
  );
}
function UM(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function FM(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => I(a) && a.getMarker() === t
  ), s = i ? so(i) : Mr(t);
  e[0].insertBefore(s), s.append(...e), i === r || ac(e[0], s);
}
function zM(e) {
  me(e) && (tl(e.getPreviousSibling()), Sh(e.getNextSibling()));
}
const $g = {
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
}, Hd = "psc-active-text", Os = "psc-empty-text";
function KM({ viewOptions: e }) {
  const [t] = ce(), r = Q(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return F(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(Hd), r.current = o, o && t.getElementByKey(o)?.classList.add(Hd);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        mo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Os}`);
          if (!c) return !1;
          const l = fi(c);
          if (!me(l)) return !1;
          const d = l.getParent();
          if (!L(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        xt
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = xa(), p = jM(), f = [], g = [];
          return Ke().getChildren().forEach((h) => {
            if (!L(h)) return;
            const { emptyKeys: y, nonEmptyKeys: k } = VM(h);
            f.push(...y), g.push(...k);
          }), { newActiveKey: u, activeVerseKey: p, emptyKeys: f, nonEmptyKeys: g };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(Os) : t.getElementByKey(u)?.classList.add(Os);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(Os));
      }),
      t.registerCommand(
        Ac,
        () => (i(void 0), !1),
        xt
      ),
      t.registerCommand(
        Wy,
        () => {
          const o = t.getEditorState().read(xa);
          return o !== r.current && i(o), !1;
        },
        xt
      )
    ];
    return i(t.getEditorState().read(xa)), Fe(...s);
  }, [t, n]), null;
}
function xa() {
  return BM(w() ?? void 0)?.getKey();
}
function jM() {
  const e = w();
  if (!P(e)) return;
  const t = e.anchor, r = t.getNode(), n = r.getTopLevelElement();
  if (!L(n)) return;
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
    me(s[a]) && (o = s[a].getKey());
  return o;
}
function BM(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function VM(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!me(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (me(c)) break;
      if (!(Yt(c) || O(c)) && c.getTextContent().replaceAll(Fs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function ls(e) {
  if (e !== void 0)
    return Number.isNaN(e) ? 0 : Math.max(0, Math.floor(e));
}
function Lg(e, t) {
  return e.length <= t ? e : e.slice(0, Nl(e, t));
}
function Nl(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of Zy(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const WM = 16;
function Ol(e, t = (r) => r.getTextContent().length) {
  const r = w();
  if (!P(r) || r.isCollapsed() || t(r) <= e) return !1;
  const [n, i] = r.isBackward() ? [r.focus, r.anchor] : [r.anchor, r.focus], s = { key: n.key, offset: n.offset, type: n.type }, o = Gd(n), a = Gd(i), c = r.getNodes(), l = new Map(c.map((g) => [g.getKey(), JM(g)])), d = (g) => {
    const h = g > 0 ? GM(c, l, o, a, g) : void 0;
    return r.anchor.set(s.key, s.offset, s.type), h ? r.focus.set(h.node.getKey(), h.offset, "text") : r.focus.set(s.key, s.offset, s.type), !!h;
  };
  let u = Math.min(e, r.getTextContent().length);
  if (d(u) && t(r) <= e) return !0;
  let p = 0, f = 0;
  u -= 1;
  for (let g = 0; g < WM && p <= u; g++) {
    const h = Math.floor((p + u) / 2);
    d(h) && t(r) <= e ? (f = h, p = h + 1) : u = h - 1;
  }
  return d(f), !0;
}
function HM(e, t) {
  const r = ls(e);
  if (r === void 0 || r <= 0 || !Ol(r, t)) return !1;
  const n = w();
  return P(n) && n.isCollapsed();
}
function Ig(e, t, r) {
  return HM(t, r) ? (e?.preventDefault(), !0) : !1;
}
function cc(e) {
  return e.isToken() || O(e) || Ae(e) || Ir(e);
}
function GM(e, t, r, n, i) {
  const s = e.length - 1;
  let o = 0, a = !0, c, l;
  const d = (p) => YM(l ? l.endBefore : p, e, r), u = e.length > 0 ? t.get(e[0].getKey()) : void 0;
  for (let p = 0; p <= s; p++) {
    const f = e[p], g = t.get(f.getKey()), h = g && u?.is(g) ? void 0 : g;
    if (l && !l.node.is(h) && (c && l.node.isParentOf(c.node) && (c = l.endBefore), l = void 0), h && !l && (l = { node: h, endBefore: c }), L(f) && !f.isInline()) {
      if (!a) {
        if (o + 1 > i) return d(c);
        o += 1;
      }
      a = !f.isEmpty();
      continue;
    }
    if (a = !1, S(f)) {
      const y = p === 0 ? r : 0, k = p === s ? n : f.getTextContentSize(), _ = k - y, C = cc(f);
      if (C && o + _ > i) return d(c);
      if (!C && o + _ >= i) {
        const M = Nl(f.getTextContent(), y + (i - o));
        return d({ node: f, offset: Math.max(y, M) });
      }
      o += _, c = { node: f, offset: k };
    } else if (ms(f) || di(f)) {
      const y = f.getTextContentSize();
      if (o + y > i) return d(c);
      o += y;
    }
  }
  return d(c);
}
function JM(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (K(r) || Gh(r)) && (t = r);
  return t;
}
function YM(e, t, r) {
  if (!e) return e;
  const n = rt(e.node, (y) => L(y) && !y.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((y) => y.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let y = o; y <= a; y++)
    l.push(c.length), c += i[y].getTextContent();
  const d = l[s - o], u = d + e.offset, p = Nl(c, u);
  if (p === u) return e;
  const f = (y) => t[0]?.is(y) ?? !1;
  if (cc(e.node)) return { ...e, offset: f(e.node) ? r : 0 };
  if (p >= d) {
    const y = p - d;
    return y >= (f(e.node) ? r : 0) ? { ...e, offset: y } : void 0;
  }
  const g = s > o ? i[s - 1] : void 0;
  if (!g || !t.some((y) => y.is(g))) return;
  if (cc(g))
    return { node: g, offset: f(g) ? r : 0 };
  const h = p - l[0];
  return h >= (f(g) ? r : 0) ? { node: g, offset: h } : void 0;
}
function Gd(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const er = String.raw`\w-`, Dg = "a-z0-9", XM = `[a-z][${Dg}]*`, QM = new RegExp(
  String.raw`^\\(\+?[${er}]+)[ \u00A0]$`
), Ug = new RegExp(String.raw`^\\(\+?[${er}]+)$`), ZM = new RegExp(String.raw`^\\\+?[${er}]*\*$`), eE = new RegExp(
  String.raw`^\\(\+?[${er}]+)(?:[ \u00A0]|$)`
), tE = new RegExp(
  String.raw`^\\(\+?)([${er}]+)`
), rE = new RegExp(
  String.raw`\\\+?[${er}]+(?:\\?\*|[ \u00A0])`
), nE = new RegExp(
  String.raw`\\\+?[${er}]*$`
), iE = new RegExp(
  String.raw`^\\(${XM})( |$)`
), sE = new RegExp(
  String.raw`\\[${Dg}+*]*$`,
  "i"
), oo = "usfm:", Fg = "usfmopen", zg = "usfmclosed";
function oE(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const aE = new RegExp(
  [oo, Fg, zg].map(oE).join("|")
), cE = "\uFEFF", lE = /^usfm_(.+)$/;
function uE(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function dE(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function fE(e) {
  return e.startsWith(oo) ? dE(e.slice(oo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function Kg(e) {
  for (const t of e.classList) {
    const r = lE.exec(t);
    if (r) return r[1];
  }
}
function pE(e) {
  const t = Kg(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function hE(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(oo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(Fg) && !n.contains(zg)) && Kg(r) !== void 0)
      return !0;
  }
  return !1;
}
function jg(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(fE(e.nodeValue ?? ""));
    return;
  }
  if (!uE(e)) return;
  const { classList: n } = e, i = (d) => e.childNodes.forEach((u) => jg(u, d, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? pE(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function gE(e) {
  if (!aE.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !hE(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => jg(n, !1, r)), r.join("").replaceAll(cE, "").replaceAll(R, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function mE(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ie(e, ae);
  if (r === "attribute" || r === pr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (ht(o) || we(o) || Ue(o)) return;
  const n = t.startsWith(R) && I(e.getParent()), i = n ? t.slice(1) : t, s = (n ? R : "") + i.replace(/ (?=[ \u00A0])/g, R).replace(new RegExp("(?<=\\u00A0) ", "g"), R);
  s !== t && e.setTextContent(s);
}
function yE(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function bE(e, t) {
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
function lc(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (!r) return;
  const n = (a) => a.replace(/\r\n?/g, `
`), i = n(r.getData("text/plain")), s = r.getData("text/html"), o = s ? gE(s) : void 0;
  return {
    text: o ? n(o) : i || (s ? n(yE(s)) : ""),
    isInternal: bE(
      r.getData("application/x-lexical-editor"),
      t
    )
  };
}
const Jd = String.raw`\\(?:\+?[${er}]+\*?|\*)`, kE = new RegExp(
  String.raw`(?<=${Jd})\u00A0|\u00A0(?=${Jd})`,
  "g"
);
function wl(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(kE, " ").replaceAll(R, "~");
}
const Bg = new RegExp(
  String.raw`\\c(?![${er}])[ \u00A0]*[^\s\\]*`,
  "g"
), Vg = new RegExp(String.raw`\\id(?![${er}])[^\n\\]*`, "g"), TE = new RegExp(
  String.raw`^(?:${Bg.source}|${Vg.source})`
);
function ql(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(Bg, "").replace(Vg, "");
    return TE.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
function uc(e) {
  if (S(e) && ie(e, ae) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (De(t)) return !0;
  return !1;
}
function xE(e) {
  return uc(e.anchor.getNode()) || uc(e.focus.getNode());
}
function _E(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && uc(t.getNode());
}
function CE(e, t) {
  const n = _E(e) ? t : wl(ql(t));
  n && e.insertText(n.replace(/\n/g, " "));
}
function vE(e, t = !1, r = () => {
}) {
  const n = lc(e, ti()._config.namespace);
  if (!n) return !1;
  const i = w(), s = P(i) && xE(i);
  if (!s && n.isInternal || t && P(i) && ei(i))
    return !1;
  const { text: o } = n;
  if (!o || !P(i)) return !1;
  if (e?.preventDefault(), s)
    return CE(i, o), !0;
  const a = wl(ql(o));
  if (!a) return !0;
  const c = a.split(`
`);
  if (t)
    return i.insertText(c.join(" ")), !0;
  if (c.length < 2)
    return i.insertText(a), !0;
  r(), i.isCollapsed() || i.removeText();
  const l = ti();
  return c.forEach((d, u) => {
    if (u > 0 && l.dispatchCommand(Us, void 0), d === "") return;
    const p = w();
    P(p) && p.insertText(d);
  }), !0;
}
function SE(e) {
  if (e.getTextContent() !== R) return !1;
  const t = e.getParent();
  return K(t) ? !St(e.getPreviousSibling()) : !1;
}
function ME(e, t) {
  if (t || e.getTextContent() !== R) return "";
  const r = e.getParent();
  if (!K(r) || !St(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function EE(e) {
  const t = e.getParent();
  return (K(t) ? t.getCaller() : void 0) || Gi;
}
function AE(e) {
  const t = e.getParent();
  return !t || Zr(t) === void 0;
}
function Lo(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = Sc(e);
  let l = "", d = !0;
  for (const u of t) {
    if (L(u) && !u.isInline()) {
      !d && AE(u) && (l += `
`), d = !u.isEmpty();
      continue;
    }
    if (d = !1, St(u))
      (u !== n || !e.isCollapsed()) && (l += (u === r ? "" : " ") + EE(u));
    else if (S(u)) {
      let p = u.getTextContent();
      u === r ? u === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (p = a < c ? p.slice(a, c) : p.slice(c, a)) : p = o ? p.slice(a) : p.slice(c) : u === n && (p = o ? p.slice(0, c) : p.slice(0, a)), l += SE(u) ? "" : p.replaceAll(R, " ") + ME(u, u === n);
    } else (ms(u) || di(u)) && (u !== n || !e.isCollapsed()) && (l += u.getTextContent().replaceAll(R, " "));
  }
  return l;
}
function ao(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function PE(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => ht(r) || we(r)
    )
  );
}
function Yd(e) {
  const t = w();
  if (!P(t) || t.isCollapsed()) return;
  const r = Lo(t), n = {
    "text/plain": r,
    "text/html": ao(r)
  };
  if (qo() || PE(t)) return n;
  const i = tb(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function Xd(e, t, r, n) {
  const i = w();
  if (!P(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !eg();
  const s = Yd(t);
  return s ? Rl(e, t, i, s, r, {
    copyLimit: n,
    $payloadFor: () => Yd(t) ?? { "text/plain": "" },
    $measure: (o) => Lo(o).length
  }) : !1;
}
function Rl(e, t, r, n, i, s = {}) {
  const { copyLimit: o } = s, a = s.$payloadFor ?? ((p) => ({ "text/plain": p.getTextContent() })), c = s.$measure ?? ((p) => a(p)["text/plain"]?.length ?? 0);
  let l = Qd(n, o);
  const d = i && t.isEditable(), u = ls(o);
  return l !== n && u !== void 0 && (Tn(r), Ol(u, c), l = Qd(a(r), o)), Wg(
    e,
    t,
    l,
    d ? () => r.removeText() : void 0
  );
}
function Wg(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || eb(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function Qd(e, t) {
  const r = e["text/plain"], n = ls(t);
  if (r === void 0 || n === void 0 || r.length <= n) return e;
  const i = Lg(r, n);
  return e["text/html"] === void 0 ? { "text/plain": i } : { "text/plain": i, "text/html": ao(i) };
}
const Zd = /* @__PURE__ */ new WeakMap();
function NE({ limit: e }) {
  const [t] = ce(), r = Q(ls(e)), n = Q(void 0);
  return F(() => {
    r.current = ls(e), n.current?.();
  }, [e]), F(() => {
    let i, s;
    const o = (f) => {
      const g = r.current;
      if (g === void 0) return;
      const h = Zd.get(f);
      if (f.defaultPrevented && !h) return;
      const y = t.getRootElement();
      if (!y) return;
      const k = y.ownerDocument.getSelection();
      if (!k || k.rangeCount === 0 || k.isCollapsed || !k.containsNode(y, !0)) return;
      f.preventDefault();
      const _ = Math.min(h?.limit ?? g, g), C = Lg(h?.text ?? k.toString(), _);
      Zd.set(f, { limit: _, text: C });
      const M = f.clipboardData;
      if (M) {
        if (!C) {
          h && M.clearData();
          return;
        }
        M.setData("text/plain", C);
      }
    }, a = (f) => {
      r.current !== void 0 && Gy(f, "a", { ctrlKey: !ri, metaKey: ri }) && (wE(s?.activeElement, t.getRootElement()) || f.preventDefault());
    }, c = () => {
      s?.removeEventListener("copy", o), s?.removeEventListener("keydown", a, !0), s = void 0;
    }, l = () => {
      const f = r.current === void 0 ? void 0 : i;
      f !== s && (c(), s = f, s?.addEventListener("copy", o), s?.addEventListener("keydown", a, !0));
    };
    n.current = l;
    const d = (f) => {
      const g = r.current;
      if (g === void 0) return !1;
      if (g > 0) {
        const h = w(), y = P(h) && h.isCollapsed();
        if (Ol(g), y || !P(h) || !h.isCollapsed()) return !1;
      }
      return f?.preventDefault(), !0;
    }, u = (f, g) => {
      const h = r.current;
      if (h === void 0) return !1;
      const y = f && typeof f == "object" && "clipboardData" in f ? f : null, k = w();
      if (go(k)) {
        const _ = k.getTextContent(), C = _.length <= h, M = C ? _ : "", E = C && g && t.isEditable();
        return Wg(
          y,
          t,
          { "text/plain": M },
          E ? () => {
            for (const z of k.getNodes()) z.remove();
          } : void 0
        );
      }
      return !P(k) || k.isCollapsed() ? !1 : Rl(
        y,
        t,
        k,
        { "text/plain": k.getTextContent() },
        g,
        { copyLimit: h }
      );
    }, p = Fe(
      t.registerCommand(Hr, d, tt),
      t.registerCommand(Wt, d, tt),
      t.registerCommand(
        Hr,
        (f) => u(f, !1),
        Wr
      ),
      t.registerCommand(
        Wt,
        (f) => u(f, !0),
        Wr
      ),
      // A read-only editor never dispatches this — the document key-down listener covers it.
      t.registerCommand(
        Hy,
        (f) => r.current === void 0 ? !1 : (f?.preventDefault(), !0),
        tt
      ),
      t.registerRootListener((f) => {
        i = f?.ownerDocument ?? void 0, l();
      })
    );
    return () => {
      p(), n.current = void 0, c();
    };
  }, [t]), null;
}
const OE = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function wE(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? OE.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const qE = /^\+/;
function $l(e, t) {
  const r = t.replace(qE, "");
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
function dc(e, t) {
  const r = Hg(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function co(e, t, r) {
  const n = L(e) ? e.getChildren().filter(O) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function RE(e, t, r, n, i) {
  const s = $l(n, t);
  if (!s) {
    co(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && co(e, "invalid", i);
}
function Vi(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (I(s)) {
      const o = s.getMarker();
      i || RE(s, o, t, r, n), Vi(s, t, r, n, i || o === "xq");
    } else if (me(s)) {
      if (i) continue;
      const o = $l(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? Vi(s, s.getMarker(), r, n, i) : Ue(s) || L(s) && Vi(s, t, r, n, i);
}
function $E(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = $l(e, a);
    if (!c) {
      co(o, "unknown", r), dc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    dc(n, l) || co(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Ke().getChildren())
    Ue(o) || (ht(o) || Je(o) ? i(o, o.getMarker()) : le(o) ? (i(o, o.getMarker()), s(o) && Vi(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && Vi(o, "p", e, r, !1));
  return r;
}
function LE(e) {
  return !!e?.includes("(basic)");
}
function IE(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Jg(e, t) {
  return !e.startsWith("zpa") && e !== "c" && sc(e, t);
}
function Ll(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Yg(e, t) {
  const r = [];
  for (const n of t) {
    const i = Ll(e, n);
    i && dc(r, i);
  }
  return r;
}
function Is(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: IE(e.description),
    isBasic: LE(e.description)
  };
}
function DE(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function fc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : DE(e.marker, t.marker);
}
function pc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Yg(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Jg(i.marker, r)
  ).filter((i) => {
    const s = Ll(e, i.marker);
    return s !== void 0 && Gg(n, s);
  }).map((i) => Is(i, "paragraph")).sort(fc);
}
function UE(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Jg(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Is(c, "character")).sort(fc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Is(c, "character")),
    ...a.map((c) => Is(c, "note"))
  ].sort(fc);
}
function FE(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function zE(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function KE(e, t, r) {
  return [
    ...FE(e, t.openCharMarkers),
    ...UE(e, t, r)
  ].sort(zE);
}
function jE(e, t, r) {
  if (t.source === "paragraph") return pc(e, t, r);
  const n = KE(e, t, r);
  return n.length > 0 ? n : pc(e, t, r);
}
function BE(e, t, r) {
  const n = pc(e, t, r), i = Yg(e, t.previousParaMarkers), s = Ll(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Gg(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
const st = "￼";
function Xg(e) {
  return e.length > 1 && e.startsWith(R) && e.charAt(1) !== st ? e.slice(1) : e;
}
function ef(e) {
  return Bc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Qg(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Ar.serializeEditorState(
    {
      type: vr,
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
  for (; ef(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Pt(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && ef(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
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
  nE.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += st;
}
function It(e) {
  return e.replaceAll(R, " ");
}
function VE(e, t, r = !1) {
  if (wo(t)) return It(e);
  if (e === R) return " ";
  const n = r && e.startsWith(R), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(R, "~");
}
function Wi(e) {
  const t = e.getTextContent();
  return qn(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Il(e, t) {
  const r = e[t];
  if (!He(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = Co(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!O(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Zg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Dl(e, t) {
  const r = [];
  let n = e[t];
  for (const i of ["va", "vp"]) {
    const { opener: s, value: o, closer: a, wrapper: c } = es(n, i);
    if (c)
      r.push(c), n = c;
    else if (s && o && a)
      r.push(s, o, a), n = a;
    else if (s || o || a)
      break;
  }
  return r;
}
function Ul(e) {
  return !!e.getUnknownAttributes();
}
function Io(e, t) {
  const r = t(e)?.type;
  return r === b.Milestone || r === void 0 && Rc(e);
}
function em(e, t) {
  return He(e) ? !Io(e.getMarker(), t) : K(e) || Ue(e) ? !0 : Ae(e) ? Ul(e) : I(e) ? tm(e, t) : !1;
}
function tm(e, t) {
  if (Zk(e)) return !0;
  const r = e.getMarker();
  return !zb(r) && t(r) === void 0;
}
const $t = "", Lt = "";
function tf(e) {
  return e.flatMap((t) => De(t) ? t.getChildren() : [t]);
}
function Fi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (He(s)) {
      const o = Il(e, i);
      Io(s.getMarker(), r) && Zg(o) ? (t.push(
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
      ), Fi(tf(o), t, r), t.push(Lt)) : t.push(st), i += o.length;
    } else if (Ae(s)) {
      const o = Dl(e, i);
      Ul(s) ? t.push(st) : (t.push(
        $t,
        "verse",
        It(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Fi(tf(o), t, r), t.push(Lt)), i += o.length;
    } else O(s) ? t.push($t, "marker", It(s.getTextContent()), Lt) : Ir(s) ? t.push($t, "unmatched", It(s.getTextContent()), Lt) : em(s, r) ? t.push(st) : di(s) ? t.push(" ") : S(s) ? t.push(
      It(
        n ? Xg(Wi(s)) : Wi(s)
      )
    ) : I(s) ? (t.push($t, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Fi(s.getChildren(), t, r, !0), t.push(Lt)) : L(s) ? (t.push($t, s.getType()), Fi(s.getChildren(), t, r), t.push(Lt)) : t.push(st);
  }
}
function xi(e, t) {
  const r = [];
  return Fi(e, r, t), r.join("");
}
function Pr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function ui(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Fl(e) {
  return e.type ?? "";
}
function rm(e, t, r) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : Re(e, r);
}
function _a(e, t) {
  const r = e[t];
  if (!(!r || Fl(r) !== "attribute-run"))
    return Pr(r) ?? [];
}
function _i(e, t) {
  const r = [];
  return zi(e, r, t), r.join("");
}
function zi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Fl(s);
    if (o === "ms") {
      const l = s, d = _a(e, i + 1);
      d && Io(l.marker ?? "", r) ? (t.push(
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
      ), zi(d, t, r), t.push(Lt), i += 1) : t.push(st);
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
        It(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = _a(e, i + 1 + d);
      for (; u; )
        zi(u, t, r), d++, u = _a(e, i + 1 + d);
      t.push(Lt), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        $t,
        "marker",
        It(
          rm(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push($t, "char", JSON.stringify(l.unknownAttributes ?? null)), zi(Pr(s) ?? [], t, r, !0), t.push(Lt);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(st);
      continue;
    }
    if (o === "unmatched") {
      t.push($t, "unmatched", It(ui(s) ?? "")), t.push(Lt);
      continue;
    }
    const a = ui(s);
    if (a !== void 0) {
      t.push(It(n ? Xg(a) : a));
      continue;
    }
    const c = Pr(s);
    c ? (t.push($t, o), zi(c, t, r), t.push(Lt)) : t.push(st);
  }
}
function Do(e) {
  let t = 0;
  for (const r of e) {
    const n = Pr(r);
    if (n) {
      t += Do(n);
      continue;
    }
    const i = ui(r);
    if (i !== void 0)
      for (const s of i) s === st && t++;
  }
  return t;
}
function us(e, t, r, n, i) {
  Pn(e.getChildren(), t, r, n, i);
}
function Pn(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (O(a))
      ws(t, a, It(a.getTextContent()));
    else if (He(a)) {
      s();
      const c = Il(e, o);
      Io(a.getMarker(), r) && Zg(c) ? Pn(c, t, r, n) : $i(t, [a, ...c]), o += c.length;
    } else if (K(a) || Ue(a))
      s(), $i(t, [a]);
    else if (Ae(a)) {
      s();
      const c = Dl(e, o);
      Ul(a) ? $i(t, [a, ...c]) : (ws(t, a, It(Wi(a))), Pn(c, t, r, n)), o += c.length;
    } else if (I(a))
      s(), tm(a, r) ? $i(t, [a]) : us(a, t, r, n, { pending: !0 });
    else if (di(a))
      s(), ws(t, a, " ");
    else if (S(a)) {
      const c = qn(a) || ie(a, ae) === "attribute", l = s() && !c;
      ws(
        t,
        a,
        c ? It(Wi(a)) : VE(Wi(a), n, l)
      );
    } else L(a) ? us(a, t, r, n, i) : (s(), $i(t, [a]));
  }
}
function zl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown && n !== b.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Ue(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return us(e, i, t, r), i;
}
function nm(e, t) {
  let r = 0;
  const n = (i) => {
    if (S(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(st);
        if (a < 0) break;
        let c = s, l;
        a > 0 && ([, c] = s.splitText(a)), c.getTextContent().length > 1 && ([c, l] = c.splitText(1));
        const d = t[r++];
        if (d && d.length > 0) {
          let u = c;
          for (const p of d)
            u.insertAfter(p), u = p;
        }
        c.remove(), s = l;
      }
    } else L(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function hc(e, t = []) {
  for (const r of e)
    Ae(r) ? t.push(r) : L(r) && hc(r.getChildren(), t);
  return t;
}
function im(e) {
  let t = 0;
  const r = (n) => {
    if (S(n))
      for (const i of n.getTextContent()) i === st && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Ln(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === st && t++;
    else r.content && (t += Ln(r.content));
  return t;
}
function WE(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), L(i) && us(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const ds = /\s/;
function sm(e) {
  return e.filter(Uo).length;
}
function Uo(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return S(t) && !O(t) && ie(t, ae) === "attribute";
}
function HE(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return O(t) || Uo(e);
}
function rf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Uo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      ds.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Kl(e, t, r) {
  const n = rf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !HE(i) ? rf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: sm(e.spans) };
}
function Ca(e) {
  if (e.isSentinel) return !1;
  const t = oe(e.key);
  return O(t) && t.getMarkerSyntax() !== "opening";
}
function GE(e) {
  const t = oe(e.key);
  if (!O(t)) return !1;
  const r = t.getParent();
  return I(r) ? (r.selectNext(0, 0), !0) : !1;
}
function JE(e) {
  const t = oe(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = Ae(t) ? Dl(r, n) : He(t) ? Il(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function om(e, t, r) {
  const { text: n, spans: i } = e, s = sm(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const p = u.end - u.start, f = !u.isSentinel && !Ca(u);
    if (!(o && Uo(u))) {
      if (d) {
        if (!f) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let g = 0; g < p; g++) {
        const h = n[u.start + g];
        if (c === 0 && (l === 0 || !ds.test(h))) {
          if (f) {
            a = { key: u.key, offset: g };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? ds.test(h) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (f) {
          a = { key: u.key, offset: p };
          break;
        }
        d = !0;
      }
    }
  }
  if (!a) {
    const u = i[i.length - 1];
    if (u && Ca(u) && GE(u) || u?.isSentinel && JE(u)) return;
    const p = [...i].reverse().find((f) => !f.isSentinel && !Ca(f));
    p && (a = { key: p.key, offset: p.end - p.start });
  }
  if (a) {
    const u = oe(a.key);
    if (u && S(u)) {
      u.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function am(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    om(WE(e, n, i), t, e);
  }
}
function YE(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(L)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  Pn(e, s, n, i), om({ text: s.text, spans: s.spans }, t, e);
}
function cm(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const h of e) {
    const y = zl(h, n, r);
    if (!y)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const k = s.text.length;
    y.spans.forEach(
      (_) => s.spans.push({ ..._, start: _.start + k, end: _.end + k })
    ), s.sentinels.push(...y.sentinels), s.text += y.text;
  }
  let o, a = !1;
  const c = w();
  if (P(c)) {
    for (let h = c.anchor.getNode(); h; h = h.getParent())
      if (e.some((y) => y.is(h))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = Kl(s, c.anchor.key, c.anchor.offset));
  }
  const l = Or(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Ln(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = Ar.serializeEditorState(
    { type: vr, version: Cr, content: l },
    r
  );
  if (_i(d.root.children, n) === xi(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((h) => po(h));
  if (im(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const p = hc(e).map((h) => ({
    number: h.getNumber(),
    sid: h.getSid()
  })), f = e[0];
  u.forEach((h) => f.insertBefore(h)), nm(u, s.sentinels), e.forEach((h) => h.remove());
  const g = hc(u);
  for (let h = 0; h < p.length && h < g.length; h++)
    g[h].getNumber() === p[h].number && g[h].setSid(p[h].sid);
  return am(u, o, a, n, r), !0;
}
function lm(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Pe.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!O(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(St(s) || S(s) && s.getTextContent() === Pt(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const d = n[a - 1];
    if (!O(d) || d.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return Pn(c, l, t, r), { out: l, contentNodes: c };
}
function um(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(st)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function XE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = lm(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = w();
  if (P(d)) {
    for (let M = d.anchor.getNode(); M; M = M.getParent())
      if (e.is(M)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = Kl(o, d.anchor.key, d.anchor.offset));
  }
  const u = Or(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Ln(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [p] = u;
  if (u.length !== 1 || typeof p != "object" || p.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const f = p.content ?? [], g = um(f), h = Qg(e, f, g, r);
  if (h.failure !== void 0)
    return h.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      h.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Do(h.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const y = e.getCategory() !== g;
  if (y && e.setCategory(g), _i(h.children, n) === xi(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  const k = h.children.map((M) => po(M));
  if (im(k) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), y;
  const _ = a[0];
  if (_)
    k.forEach((M) => _.insertBefore(M));
  else {
    const M = e.getChildren().find((E) => O(E) && E.getMarkerSyntax() === "closing");
    k.forEach((E) => M ? M.insertBefore(E) : e.append(E));
  }
  nm(k, o.sentinels);
  const C = new Set(o.sentinels.flat().map((M) => M.getKey()));
  return a.forEach((M) => {
    C.has(M.getKey()) || M.remove();
  }), YE(k, c, l, n, r), !0;
}
const dm = /* @__PURE__ */ new Set(["ca", "cp"]), jl = "cp";
function fm(e) {
  if (!fr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (us(e, t, ur, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Or(r, { getMarker: ur }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === jl)
  );
}
function Fo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (I(r) && dm.has(r.getMarker()) || fm(r)) {
      t.push(r);
      continue;
    }
    le(r) && r.getMarker() === jl && t.push(r);
    break;
  }
  return t;
}
function QE(e) {
  const t = (n) => I(n) && dm.has(n.getMarker()) || fm(n);
  if (t(e) || le(e) && e.getMarker() === jl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n)) return n;
      if (!t(n)) return;
    }
}
function pm(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Fo(e);
  if (n.some((s) => le(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (Pn(e.getChildren(), i, t, r), Pn(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function ZE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Fo(e)], o = pm(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = w();
  if (P(l)) {
    for (let g = l.anchor.getNode(); g; g = g.getParent())
      if (s.some((h) => h.is(g))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Kl(o, l.anchor.key, l.anchor.offset));
  }
  const d = Or(o.text, { getMarker: n }), [u] = d;
  if (d.length === 0 || typeof u != "object" || u.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Ln(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (u.sid = e.getSid());
  const p = Ar.serializeEditorState(
    { type: vr, version: Cr, content: d },
    r
  );
  if (_i(p.root.children, n) === xi(s, n)) {
    let g = !1;
    return e.getNumber() !== (u.number ?? "") && (e.setNumber(u.number ?? ""), g = !0), e.getAltnumber() !== u.altnumber && (e.setAltnumber(u.altnumber), g = !0), e.getPubnumber() !== u.pubnumber && (e.setPubnumber(u.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const f = p.root.children.map((g) => po(g));
  return we(f[0]) ? (f.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), am(f, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function fs(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Ue(n)) return;
    !t && (K(n) || le(n) || we(n)) && (t = n), Jy(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? QE(r) : void 0) ?? t;
}
function Vt(e, t) {
  const r = fs(e);
  return r ? K(r) ? XE(r, t) : we(r) ? ZE(r, t) : cm([r], t) : !1;
}
const eA = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function nf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !eA.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function Ds(e, t) {
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
          t.push(`\\${n} `), Ds(r.content, t), nf(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), Ds(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), Ds(r.content, t);
      }
    }
}
function sf(e, t, r) {
  const n = fs(e);
  if (!le(n)) return !1;
  const i = w();
  if (!P(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = zl(n, t, r);
  if (!o) return !1;
  const a = Or(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    ds.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  Ds(a, l);
  for (const d of l.join("").replaceAll(R, "~")) {
    if (ds.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function Bl(e, t) {
  return hm(e, t, b.Paragraph);
}
function tA(e, t) {
  return hm(e, t, b.Character);
}
function hm(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== b.Unknown ? i === r : !(Pe.isValidMarker(n) || Rc(n));
}
function rA(e) {
  return [lt(e), To()];
}
function Vl(e) {
  Qt(e, 2);
}
function nA(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function Wl(e) {
  const t = nA(e);
  e.splice(0, 0, rA(e.getMarker())), t && Vl(e);
}
function lo(e, t) {
  e.setMarker(t), Wl(e), Vl(e);
}
function iA(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!qn(n)) {
    if (S(n) && !O(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(R), kt(n, ae, pr), n.setMode("token");
      return;
    }
    if (zp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(To());
  }
}
function of(e, t, r) {
  const n = e.getNode();
  if (n.is(t))
    return r === "start" ? e.offset === 0 : e.offset === t.getChildrenSize();
  const i = e.type === "text" ? n.getTextContentSize() : L(n) ? n.getChildrenSize() : 0;
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
    if (le(t)) return t;
}
function sA(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = Hi(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = Hi(r.getNode())?.is(s) ?? !1, a = Hi(n.getNode())?.is(s) ?? !1;
    return !(o && !of(r, s, "start") || a && !of(n, s, "end"));
  });
}
function gc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = w();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of sA(r)) t.add(n.getKey());
}
function oA(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = w();
  if (!P(r) || !r.isCollapsed()) return;
  const n = Hi(r.focus.getNode());
  n && t.add(n.getKey());
}
function aA(e) {
  const t = w();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => O(r)) && (gc(e), t.removeText());
}
const cA = new RegExp(
  String.raw`^\\\+?([${er}]+)(?:[ \u00A0]|$)`
);
function lA(e, t) {
  const r = cA.exec(e.getTextContent());
  return !!r && Bl(r[1], t);
}
function uA(e, t) {
  if (!bi(t.viewOptions)) return;
  if (zt(e.getFirstChild())) {
    iA(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (lA(e, t.getMarker)) return;
    Wl(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => le(o) && !o.is(e))) {
      lo(e, lr), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (le(r)) {
    const n = e.getChildren().filter((a) => !qn(a)), i = w();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : Hi(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Qt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  lo(e, lr);
}
function dA(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = cr(t, yo(e.getMarker()));
  return r === "" ? void 0 : r;
}
function fA(e) {
  const t = e.getChildren().filter((s) => !O(s) && ie(s, ae) !== "attribute"), r = t[0];
  r && S(r) && r.getTextContent().startsWith(R) && r.setTextContent(r.getTextContent().slice(1));
  const n = dA(e);
  n && t.push(he(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function pA(e, t) {
  const r = e.getChildren(), n = r.some((s) => O(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => S(c) && !O(c) && c.getTextContent() === Pt(s)
    ), a = pi(e).some(({ node: c }) => O(c));
    if (!o && !a) return;
    r.forEach((c) => {
      O(c) || (S(c) && c.getTextContent() === Pt(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => O(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function hA(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(O(r) && r.getMarkerSyntax() === "opening")) {
    fA(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => O(o) && o.getMarkerSyntax() === "closing");
  i && !s && Vt(e, t);
}
function gm(e, t, r) {
  if (!O(e.getFirstChild()) && r?.markerMode === "editable" && bi(r)) {
    lo(e, t);
    return;
  }
  zh(e, t);
}
function mm() {
  const e = w();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = ym(e);
    return t !== "removed" ? t : (mc(), "handled");
  }
  return mc() ? "handled" : "declined";
}
function gA(e, t) {
  if (!t) return e;
  const r = iE.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== b.Paragraph ? e : e.slice(r[0].length);
}
function af(e, t) {
  const r = w();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!bm())
      return "declined";
  } else {
    const s = ym(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => gA(s, t)
  );
  cf(n ?? "");
  for (const s of i)
    mc(), cf(s);
  return "handled";
}
function mA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = fi(n);
  if (!i) return !1;
  const s = Xt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !S(i) || O(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function ym(e) {
  const t = Xt(e.anchor.getNode()), r = Xt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), yA() ? "removed" : "needs-plain-split");
}
function cf(e) {
  if (e === "") return;
  const t = w();
  P(t) && t.insertText(e);
}
function yA() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Xt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => O(r) && r.getMarkerSyntax() === "opening");
}
function bm() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Xt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function mc() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = bm();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Mr("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = S(t) && !O(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
  if (s && !c) {
    if (o <= 0) s.insertBefore(i);
    else if (o >= a) s.insertAfter(i);
    else {
      const [, l] = s.splitText(o);
      l.insertBefore(i);
    }
    si(i, { renderGlyphs: !0 });
  } else {
    const l = s && o < a ? [o === 0 ? s : s.splitText(o)[1]] : [];
    n.insertAfter(i);
    const [d] = l;
    d && (Bk(d), i.append(d));
  }
  return i.getChildren().every(O) && i.append(he(Ut)), km(i), !0;
}
function km(e) {
  const t = e.getChildren().find((r) => !O(r));
  if (S(t)) {
    const r = t.getTextContent().startsWith(R) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (L(t)) {
    km(t);
    return;
  }
  e.selectEnd();
}
function bA(e) {
  const t = [];
  let r = e;
  for (; r; )
    I(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function kA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Ke().getChildren()) {
    if (t && n.is(t)) break;
    (ht(n) || Je(n) || le(n)) && r.push(n.getMarker());
  }
  return r;
}
function TA(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function xA(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (zt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && qn(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(TA(i)) && r === 0 : !1;
}
function _A(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !zt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && qn(i) && t.is(i) && r === 0;
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
function vA() {
  const e = w();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = rt(t, le), s = !n && (!i || _A(i, t, r)) ? "paragraph" : "character", o = Xt(t);
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
    inMarkerText: Zc(t, r),
    anchorRect: CA()
  };
}
function SA() {
  const e = w();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!S(t) || O(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = sE.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function MA(e, t, r) {
  gm(e, t, r), Vl(e);
}
function EA(e, t, r) {
  const n = w();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = rt(i, le);
  if (t === "backslash" && s && xA(s, i, n.focus.offset)) {
    MA(s, e, r);
    return;
  }
  xm(e, r);
}
function AA(e, t) {
  const r = w();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Tm(e) {
  const t = w();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function PA(e, t, r, n) {
  if (P(w()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && SA(), e.kind === "closeTag") {
    Tm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && mm() !== "declined") return;
  if (e.kind === "paragraph" && nt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    EA(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Pe.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return Eg(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    );
  oc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: ti(), reference: r });
}
function xm(e, t) {
  const r = w();
  if (!P(r)) return;
  const n = bi(t);
  if (Sg()) {
    const s = w();
    if (!P(s)) return;
    const o = rt(s.anchor.getNode(), le);
    if (!o) return;
    o.setMarker(e), n && Wl(o);
    return;
  }
  const i = r.insertParagraph();
  le(i) && (n ? lo(i, e) : i.setMarker(e));
}
function NA() {
  const [e] = ce();
  return F(() => e.registerCommand(Lf, () => !0, xt), [e]), null;
}
function OA(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = eE.exec(e)?.[1];
  return r === void 0 ? !1 : !Bl(r, t);
}
function _m(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !OA(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!le(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== b.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (le(i))
    return [i, r];
}
function Cm(e, t) {
  const r = _m(e, t.getMarker);
  return r !== void 0 && cm(r, t);
}
function wA(e, t) {
  const r = w();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function vm(e) {
  const t = tE.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function qA(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = vm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function RA(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && S(r)) {
    const n = r.getNextSibling();
    if (I(n)) {
      Xc(n);
      return;
    }
  }
  S(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function lf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = vm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  RA(e);
}
function uf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Sm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Vt(e, r);
  const n = qA(e), i = e.getParent();
  if (le(i)) {
    if (!Bl(t, r.getMarker))
      return Cm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Vt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), uf(s, t) && lf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (I(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(I(i) ? tA(t, r.getMarker) : Pe.isValidMarker(s)))
      return Vt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Vt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(O).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (wA(c, ot(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), uf(a, s) && lf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Vt(e, r);
}
function $A(e) {
  const t = w();
  if (!P(t)) return !1;
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
  if (rn(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (De(e.getParent()) && Vc(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !$A(e)) {
    Xk(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = QM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Sm(e, n[1], t);
      return;
    }
    if (ZM.test(r)) {
      t.pendingKeys.delete(e.getKey()), Vt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ot(e.getMarker(), e.getNested());
    if (I(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = w(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = he(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function IA(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (ah(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Mm(e) {
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
const Li = Mm("v"), DA = Mm("c"), df = /^[ \u00A0]*$/;
function ff(e, t, r) {
  const n = e.getNextSibling();
  if (S(n) && n.getType() === Be.getType() && n.getMode() === "normal" && ie(n, ae) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = he(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function UA(e, t) {
  const r = e.getTextContent(), n = Dt("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Li.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Li.valueAndRest.exec(c);
    if (l && df.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Li.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Li.valueAndRest.exec(r);
  if (!s) {
    const c = Li.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, p = w(), f = P(p) && p.isCollapsed() && p.anchor.key === e.getKey() ? p.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(Dt("v", d));
      const g = f !== void 0 && f >= l.length ? Math.min(f - l.length, u.length) : void 0;
      ff(e, u, g);
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
  if (t.pendingKeys.delete(e.getKey()), df.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Dt("v", o)), a && ff(e, a, a.length);
}
const FA = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function zA(e, t) {
  const r = e.getParent();
  if (!K(r) || r.getIsCollapsed() !== !1 || !Gf(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!O(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Pt(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = FA.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Pt(a)), !0;
}
function KA(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!S(t)) return;
  const r = Dt("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = DA.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Em(e) {
  if (He(e)) {
    const { wrapper: t } = Co(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = Hp(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (we(e)) {
    const t = [], r = Gp(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = Yp(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (Ae(e)) {
    const t = [], r = es(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = es(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function jA(e) {
  const t = w();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Em(e).some((n) => r.is(n));
}
function BA(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && le(e) && zp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of rs)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ts(l, e) && (i || jA(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Em(e))
    l.remove(), n = !0;
  let s = !1;
  if (I(e)) {
    const l = rT(e);
    l !== void 0 && Ib(l) && (Zp(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of rs)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (YT(l, e)) {
        is(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && mh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Eo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function pf(e) {
  return S(e) && e.getType() === Be.getType() && e.getMode() === "normal" && ie(e, ae) !== "attribute";
}
function VA(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = oe(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && pf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && pf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function qs(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = VA(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = oe(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (O(c)) {
      e.pendingKeys.delete(a);
      const f = c.getTextContent();
      if (rn(c)) continue;
      const g = Ug.exec(f);
      c.getMarkerSyntax() === "opening" && g ? n = Sm(c, g[1], e) || n : r === "idle" && sf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Cm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Vt(c, e) || n;
      continue;
    }
    const l = Sn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const p = BA(d, e, r);
    if (n = p.mutated || n, !p.handled) {
      if (r === "idle" && sf(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = Vt(d, e) || n;
    }
  }
  return n;
}
function Am(e) {
  if (Ir(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (I(t)) return Ki(t) !== void 0;
  return !1;
}
function WA(e) {
  const t = Sn(e);
  if (!t) return !1;
  const r = vn(t.kind);
  return !Eo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function hf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (ht(t) || Ue(t) || uh(t)) return !0;
  return !1;
}
function HA(e, t) {
  const r = e.getTextContent(), n = ie(e, ae), i = e.getParent();
  if (n !== "attribute" && we(i)) {
    r.replace(/^[ \u00A0]+/, "") === Dt("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (zA(e, t)) return;
  if (n === "attribute") {
    WA(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Am(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !hf(e))
      t.pendingKeys.add(e.getKey());
    else if (Xp(e)) t.pendingKeys.add(e.getKey());
    else if (we(fs(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      I(a) && eh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (hf(e)) return;
  const s = w(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (rE.test(o)) {
    if (Wb(r)) {
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
function GA(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : mh(e, t);
}
function JA(e) {
  const t = (r) => {
    if (O(r)) {
      rn(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (Ir(r)) {
      ah(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of rs)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ts(n, r) || GA(n, r)) && e.pendingKeys.add(r.getKey());
    if (Ae(r)) {
      r.getTextContent() !== Dt("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (S(r)) {
      if (r.getType() !== Be.getType() || ie(r, ae) === "attribute") return;
      const n = r.getParent();
      if (we(n)) {
        r.getTextContent() !== Dt("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Am(r) || i.includes("//") || Xp(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (I(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Ue(r) && !ht(r)) {
      if (De(r) && r.getChildrenSize() === 0) {
        const n = Sn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Ke().getChildren().forEach(t);
}
const Pm = If(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function va(e) {
  const t = e();
  return Gr(Of), Gr(Qf), t;
}
const gf = 8, YA = 1e3;
function Jn(e, t) {
  const r = Ae(e) ? ["va", "vp"] : He(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    tx(vn(n), e, t.pendingKeys);
}
function XA(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Pc) || i.updateTags.has(Ji)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = oe(o);
        if (!c) continue;
        const l = Sn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = oe(o.getKey());
        c?.isAttached() && vn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(Be, r),
    e.registerMutationListener(gr, r),
    e.registerMutationListener(wr, r),
    e.registerMutationListener(qr, r)
  );
}
const QA = (e) => Lo(e).length;
function yc(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = w();
  return r ? t ? cg(r, t) : P(r) && ei(r) : !1;
}
function ZA(e, t, r) {
  return Fe(
    e.registerCommand(
      _r,
      (n) => {
        if (qo() || yc(t)) return !1;
        const i = lc(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? wl(ql(i.text)) : i.text;
        if (s.includes(`
`)) {
          const o = s.split(`
`);
          let a = af(o, t.getMarker);
          if (a === "declined" && mA(e) && (a = af(o, t.getMarker)), a === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      tt
    ),
    e.registerCommand(
      _r,
      (n) => {
        const i = lc(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !CM()) return !1;
        const o = w();
        return t.structureProtectionMode === "protected" && P(o) && ei(o) ? !1 : (n?.preventDefault(), P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Us, void 0), a === "") return;
          const l = w();
          P(l) && l.insertText(a);
        }), !0);
      },
      qe
    ),
    e.registerCommand(
      _r,
      () => (t.splitExpected.current = !0, !1),
      xt
    )
  );
}
function e1({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = ce(), a = e?.markerMode === "editable", c = !!e && wo(e), l = Q(void 0), d = Q(n), u = Q(s), p = Q(a && c);
  return F(() => {
    d.current = n, u.current = s, p.current = a && c;
    const f = l.current;
    f && (e && (f.viewOptions = e), f.getMarker = t ?? ur, f.logger = r, f.structureProtectionMode = i);
  }, [
    e,
    t,
    r,
    n,
    i,
    s,
    a,
    c
  ]), F(() => {
    const f = (g) => p.current && Ig(g, u.current, QA);
    return Fe(
      o.registerCommand(Hr, f, tt),
      o.registerCommand(Wt, f, tt)
    );
  }, [o]), F(() => {
    if (!a || !e) return;
    const f = {
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
    l.current = f;
    const g = WT(o, f.pendingKeys);
    let h, y = !1, k, _ = !1, C = !1, M = 0;
    const E = () => M < gf ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${gf} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), z = (N, B = "departure") => {
      o.update(() => {
        M = va(
          () => qs(f, N, B)
        ) ? M + 1 : 0;
      });
    };
    let W;
    const j = () => {
      if (W !== void 0 && clearTimeout(W), W = void 0, C || f.pendingKeys.size === 0) return;
      const N = d.current ?? YA;
      N < 0 || (W = setTimeout(() => {
        W = void 0, !(C || f.pendingKeys.size === 0) && (y || E() || z(void 0, "idle"));
      }, N));
    }, U = Fe(
      o.registerNodeTransform(gr, (N) => {
        if (o.isComposing()) return;
        LA(N, f);
        const B = Sn(N);
        B && (Ae(B.owner) || K(B.owner) || we(B.owner) || He(B.owner) && Co(B.owner).wrapper === void 0) && Jn(B.owner, f);
      }),
      o.registerNodeTransform(ft, (N) => {
        o.isComposing() || (UA(N, f), Jn(N, f));
      }),
      o.registerNodeTransform(Ot, (N) => {
        o.isComposing() || (KA(N), N.isAttached() && Jn(N, f));
      }),
      o.registerNodeTransform(nt, (N) => {
        o.isComposing() || uA(N, f);
      }),
      o.registerNodeTransform(be, (N) => {
        if (!o.isComposing()) {
          hA(N, f);
          for (const B of ["separator", "char"])
            N.isAttached() && Ts(vn(B), N) && f.pendingKeys.add(N.getKey());
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
      o.registerNodeTransform(Jt, (N) => {
        o.isComposing() || Jn(N, f);
      }),
      o.registerNodeTransform(qr, (N) => {
        if (o.isComposing()) return;
        const B = Sn(N);
        B && (He(B.owner) || Ae(B.owner) || K(B.owner) || we(B.owner)) && Jn(B.owner, f);
      }),
      o.registerNodeTransform(Pe, (N) => {
        o.isComposing() || (pA(N, f), Jn(N, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(Lr, (N) => {
        o.isComposing() || IA(N, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(Be, (N) => {
        o.isComposing() || HA(N, f);
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
      o.registerMutationListener(
        Be,
        (N) => {
          o.getEditorState().read(() => {
            for (const [B, re] of N) {
              if (re === "destroyed") continue;
              const X = oe(B);
              !X || ie(X, ae) !== "attribute" || De(X.getParent()) || o.getElementByKey(B)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      XA(o, f),
      ...c ? [
        o.registerNodeTransform(Be, (N) => {
          o.isComposing() || mE(N);
        }),
        o.registerCommand(
          Hr,
          (N) => Xd(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            N && typeof N == "object" && "clipboardData" in N ? N : null,
            o,
            !1,
            u.current
          ),
          qe
        ),
        o.registerCommand(
          Wt,
          (N) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            Xd(
              N && typeof N == "object" && "clipboardData" in N ? N : null,
              o,
              !0,
              u.current
            )
          ),
          qe
        ),
        o.registerCommand(
          _r,
          (N) => vE(
            // Same jsdom-safe duck-check as COPY above.
            N && typeof N == "object" && "clipboardData" in N ? N : null,
            f.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              f.splitExpected.current = !0;
            }
          ),
          qe
        )
      ] : [],
      o.registerCommand(
        Wt,
        () => (!yc(f) && !qo() && gc(f), !1),
        tt
      ),
      o.registerCommand(
        Mc,
        () => (o.isComposing() || aA(f), !1),
        Wr
      ),
      o.registerCommand(
        mo,
        () => (y = !1, M = 0, j(), !1),
        xt
      ),
      o.registerCommand(
        Nr,
        (N) => (y = !1, M = 0, j(), (N.key === "Backspace" || N.key === "Delete") && !yc(f, ig(N)) && (gc(f), oA(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !N.ctrlKey || N.altKey || N.shiftKey || N.metaKey || N.key !== " " && N.code !== "Space" || !_M() ? !1 : (N.preventDefault(), !0)),
        qe
      ),
      o.registerCommand(
        Rf,
        (N) => {
          const B = mm();
          B === "needs-plain-split" && o.dispatchCommand(Us, void 0);
          const re = B !== "declined" || rx();
          return re && N?.preventDefault(), qs(f), re;
        },
        qe
      ),
      o.registerCommand(
        Us,
        () => (f.splitExpected.current = !0, Sg()),
        qe
      ),
      ZA(o, f, c),
      o.registerCommand(
        Pm,
        () => {
          if (y) return !0;
          const N = o.getRootElement(), B = N?.ownerDocument, re = !!N && !!B && B.hasFocus() && N.contains(B.activeElement);
          let X;
          if (re) {
            const ye = w();
            X = P(ye) ? ye.focus.key : h;
          }
          return va(() => qs(f, X)), !0;
        },
        xt
      ),
      o.registerCommand(
        Ac,
        () => {
          if (y) return !1;
          const N = w(), B = P(N) ? N.focus.key : h;
          return va(() => qs(f, B)), !1;
        },
        xt
      ),
      o.registerUpdateListener(({ editorState: N, tags: B }) => {
        f.splitExpected.current = !1, f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear(), f.rebuildAttempted.clear();
        const re = N.read(() => {
          const ye = w();
          return P(ye) ? ye.focus.key : void 0;
        }), X = k;
        if (re !== void 0 && (k = re), B.has(Pc)) {
          f.pendingKeys.clear(), N.read(() => JA(f)), y = !0, re !== void 0 && (h = re);
          return;
        }
        if (B.has(Jr)) {
          re !== void 0 && re !== X && (y = !0);
          return;
        }
        y || (re !== void 0 && (h = re), j(), !(_ || re === void 0) && [...f.pendingKeys].some((ye) => ye !== re) && (_ = !0, queueMicrotask(() => {
          _ = !1, !C && (E() || z(h));
        })));
      })
    );
    return () => {
      C = !0, W !== void 0 && clearTimeout(W), W = void 0, g(), U(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const t1 = ["status_unknown", "status_invalid"], Nm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, r1 = Object.values(Nm);
function n1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Nm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function mf(e) {
  e.classList.remove(...t1), e.removeAttribute("aria-description"), r1.includes(e.title) && e.removeAttribute("title");
}
function i1(e, t, r, n) {
  const i = (a) => a.read(() => Ke().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const d = oe(l)?.getTopLevelElement();
        d && a.add(d.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function s1(e) {
  const t = oe(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : O(t) && t.getParent()?.getKey() === r.getKey();
}
function o1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ce(), i = e?.markerMode === "editable";
  return F(() => {
    if (!i) return;
    const s = t ?? Js;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = $E(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [p, f] of o) {
            if (u.has(p) || s1(p)) continue;
            const g = oe(p)?.getTopLevelElement();
            !g || l.has(g.getKey()) || u.set(p, f);
          }
        }
        for (const [p] of o) {
          if (u.has(p)) continue;
          const f = n.getElementByKey(p);
          f && mf(f);
        }
        for (const [p, f] of u) {
          const g = n.getElementByKey(p);
          g && n1(g, f);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: p }) => {
        u.size === 0 && p.size === 0 || a(
          i1(l, d, u, p)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && mf(d);
      }
    };
  }, [n, i, t, r]), null;
}
function Sa(e, t) {
  const r = gl(fl), n = al();
  if (!r || !n?.end) return;
  const i = Ls.deserializeEditorState(e.getEditorState(), t);
  if (!i) return;
  const s = Yy({
    namespace: "markers-view-copy",
    nodes: [et, ...ll],
    onError: (a) => {
      throw a;
    }
  });
  return s.parseEditorState(
    Ar.serializeEditorState(i, r)
  ).read(
    () => {
      const a = No(n);
      return a ? Lo(a) : void 0;
    },
    { editor: s }
  );
}
function a1({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = ce(), n = Q(t), i = Q(e);
  return F(() => {
    n.current = t, i.current = e;
  }, [t, e]), F(() => {
    const s = () => {
      const c = i.current;
      return c?.markerMode === "visible" ? c : void 0;
    }, o = (c, l) => {
      const d = s();
      if (!d) return !1;
      const u = w();
      if (!P(u) || u.isCollapsed()) return !1;
      const p = Sa(r, d);
      return p === void 0 ? !1 : Rl(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        c && typeof c == "object" && "clipboardData" in c ? c : null,
        r,
        u,
        { "text/plain": p, "text/html": ao(p) },
        l,
        {
          copyLimit: n.current,
          $payloadFor: () => {
            const f = Sa(r, d) ?? "";
            return { "text/plain": f, "text/html": ao(f) };
          }
        }
      );
    }, a = (c) => {
      const l = s();
      return l ? Ig(c, n.current, (d) => {
        const u = Sa(r, l);
        return u === void 0 ? d.getTextContent().length : u.length;
      }) : !1;
    };
    return Fe(
      r.registerCommand(Hr, a, tt),
      r.registerCommand(Wt, a, tt),
      r.registerCommand(Hr, (c) => o(c, !1), qe),
      r.registerCommand(Wt, (c) => o(c, !0), qe)
    );
  }, [r]), null;
}
function Om(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Pr(o);
    a && L(s) && Om(s.getChildren(), a, r);
  }
}
function wm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Pr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = ui(o);
      if (c === void 0 || !c.includes(st)) continue;
      const l = c.split(st), d = [];
      for (let u = 0; u < l.length; u++) {
        const p = l[u];
        if (u > 0 && d.push(...t[r++] ?? []), p.length > 0) {
          const f = {
            ...o,
            text: p
          };
          d.push(f);
        }
      }
      i.splice(s, 1, ...d), s += d.length - 1;
    }
  };
  n(e);
}
function qm(e, t, r) {
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
function Rm(e, t) {
  const r = [];
  for (const n of e)
    em(n, t) || ((le(n) || I(n)) && r.push(n.getMarker()), L(n) && r.push(...Rm(n.getChildren(), t)));
  return r;
}
function $m(e) {
  const t = [];
  for (const r of e) {
    const n = Fl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Pr(r);
    i && t.push(...$m(i));
  }
  return t;
}
function Hl(e, t, r) {
  const n = Rm(e, r), i = $m(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function c1(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = w();
  let n, i;
  if (P(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = oe(t.key), i = t.offset;
  else
    return;
  if (!(!S(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function Gl(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function l1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const y of e) {
    const k = zl(y, o, s);
    if (!k) return;
    c.text.length > 0 && (c.text += " ");
    const _ = c.text.length;
    k.spans.forEach(
      (C) => c.spans.push({ ...C, start: C.start + _, end: C.end + _ })
    ), c.sentinels.push(...k.sentinels), c.text += k.text;
  }
  const l = i ? Gl(c, i) : c.text, d = Or(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (Ln(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = Ar.serializeEditorState(
    { type: vr, version: Cr, content: d },
    s
  ).root.children;
  if (Do(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const p = qm(c, t, n);
  if (!p) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (_i(u, o) === xi(e, o) && Hl(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  wm(u, p);
  const g = u1(e), h = Lm(u);
  for (let y = 0; y < g.length && y < h.length; y++)
    g[y].sid !== void 0 && h[y].number === g[y].number && (h[y].sid = g[y].sid);
  return u;
}
function u1(e) {
  const t = [], r = (n) => {
    Ae(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Lm(e) {
  const t = [];
  for (const r of e) {
    Np(r) && t.push(r);
    const n = Pr(r);
    n && t.push(...Lm(n));
  }
  return t;
}
function d1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = lm(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? Gl(l, i) : l.text, p = Or(u, {
    getMarker: o,
    isNoteContext: !0
  });
  if (p.length === 0) return;
  if (Ln(p) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [f] = p;
  if (p.length !== 1 || typeof f != "object" || f.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const g = f.content ?? [], h = um(g), y = e.getCategory() !== h, k = Qg(e, g, h, s);
  if (k.failure !== void 0) {
    k.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : k.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const _ = k.children;
  if (Do(_) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const C = qm(l, t, n);
  if (!C) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (_i(_, o) === xi(d, o) && Hl(d, _, o)) {
    if (y)
      return { rebuilt: void 0, contentNodes: d, category: h, categoryChanged: y };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return wm(_, C), { rebuilt: _, contentNodes: d, category: h, categoryChanged: y };
}
function yf(e) {
  return e.$?.textType;
}
function f1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && yf(e) === yf(t);
}
function p1(e) {
  const t = [];
  for (const r of e) {
    const n = oe(r);
    n?.isAttached() && Ue(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function h1(e) {
  if (!O(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
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
function bf(e, t) {
  const r = e;
  r.marker = t, r.text = rm(t, r.markerSyntax, r.nested);
}
function g1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Pe.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && bf(a.node, s);
  const c = n.getChildren().filter(O).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && bf(l.node, s);
}
function m1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = pm(e, i, n);
  if (!o) return;
  const a = r ? Gl(o, r) : o.text, c = Or(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Ln(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = Ar.serializeEditorState(
    { type: vr, version: Cr, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...Fo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && _i(d, i) === xi(u, i) && Hl(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function y1(e, t, r, n, i) {
  const s = c1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = (y) => {
    K(y) ? c.set(y.getKey(), y) : we(y) ? l.set(y.getKey(), y) : o.set(y.getKey(), [y]);
  };
  for (const y of t) {
    const k = oe(y);
    if (!k?.isAttached()) continue;
    const _ = fs(k);
    if (_) {
      if (u(_), O(k)) {
        const C = _m(k, r.getMarker);
        C && a.push(C);
      }
      if (K(_)) {
        const C = h1(k);
        C && d.set(_.getKey(), C);
      }
    }
  }
  const p = /* @__PURE__ */ new Set();
  for (const y of a)
    y.some((k) => p.has(k.getKey())) || (y.forEach((k) => {
      p.add(k.getKey()), o.delete(k.getKey());
    }), o.set(y[0].getKey(), y));
  if (s) {
    const y = fs(s.node);
    y && u(y);
  }
  const f = p1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && f.length === 0)
    return;
  const g = new Set(f.map((y) => y.getKey())), h = /* @__PURE__ */ new Map();
  Om(Ke().getChildren(), e.root.children, h);
  for (const y of d.values()) g1(y, h);
  for (const y of c.values()) {
    const k = h.get(y.getKey()), _ = k ? Pr(k.node) : void 0;
    if (!k || !_) continue;
    const C = d1(y, h, r, g, s);
    if (!C) continue;
    if (C.categoryChanged) {
      const z = k.node;
      C.category === void 0 ? delete z.category : z.category = C.category;
    }
    if (!C.rebuilt) continue;
    const M = h.get(C.contentNodes[0].getKey());
    if (!M) continue;
    const E = _.indexOf(M.node);
    E < 0 || _.splice(E, C.contentNodes.length, ...C.rebuilt);
  }
  for (const y of o.values()) {
    const k = h.get(y[0].getKey());
    if (!k) continue;
    const _ = l1(y, h, r, g, s);
    if (!_) continue;
    const C = k.siblings.indexOf(k.node);
    C < 0 || k.siblings.splice(C, y.length, ..._);
  }
  for (const y of l.values()) {
    const k = h.get(y.getKey());
    if (!k) continue;
    const _ = 1 + Fo(y).length, C = m1(y, r, s);
    if (!C) continue;
    const M = k.siblings.indexOf(k.node);
    M < 0 || k.siblings.splice(M, _, ...C);
  }
  for (const y of f) {
    const k = h.get(y.getKey());
    if (!k) continue;
    const _ = k.siblings.indexOf(k.node);
    if (_ < 0) continue;
    k.siblings.splice(_, 1);
    const C = k.siblings[_ - 1], M = k.siblings[_], E = C && ui(C), z = M && ui(M);
    C && M && E !== void 0 && z !== void 0 && f1(C, M) && (C.text = E + z, k.siblings.splice(_, 1));
  }
  return yg(e, r.viewOptions);
}
function b1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ce(), n = bi(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return F(() => {
    if (n)
      return r.registerNodeTransform(
        nt,
        (i) => k1(i, t)
      );
  }, [r, n, t]), null;
}
function k1(e, t) {
  e.getMarker() !== lr && (e.isEmpty() || zt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${lr}" (key ${e.getKey()})`
  ), e.setMarker(lr)));
}
function T1({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ce(), n = Q({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return F(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, uo(s, e) || x1(i, r, e);
  }, [r, e, t]), F(
    () => r.registerMutationListener(
      Ft,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = bc(r);
        kf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Rs(s) === Rs(r.getEditorState())
        });
      },
      { skipInitialization: !1 }
    ),
    [r]
  ), F(() => {
    const i = (a) => a.read(
      () => new Set(
        Ke().getChildren().filter(Je).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), p = [...u].some((f) => !d.has(f));
      p && (bc(r) || kf(n.current, r, void 0, {
        hasCreated: p,
        hasDestroyed: [...d].some((f) => !u.has(f)),
        isSameDocumentReload: Rs(a) === Rs(c)
      }));
    };
    return Fe(
      ...[Ot, hr].map(
        (a) => r.registerMutationListener(
          a,
          (c, { prevEditorState: l }) => o(l),
          { skipInitialization: !1 }
        )
      )
    );
  }, [r]), F(
    () => r.registerCommand(
      dr,
      () => {
        const i = n.current;
        return i.phase === "idle" && S1(i, C1()), !1;
      },
      xt
    ),
    [r]
  ), F(() => {
    const i = (s) => {
      [...s.values()].some(
        (a) => a === "created" || a === "destroyed"
      ) && queueMicrotask(() => r.dispatchCommand(dr, void 0));
    };
    return Fe(
      r.registerMutationListener(vt, i),
      r.registerMutationListener(ft, i)
    );
  }, [r]), F(() => {
    const i = () => P1(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function x1(e, t, r) {
  if (_1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = bc(t);
  (!n || n === r.book) && t.update(() => Im(r.chapterNum, r.verseNum), {
    tag: Jr
  });
}
function _1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => uo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function C1() {
  const e = w(), t = zc(e);
  if (!t) return;
  const r = Jl(), n = qp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = rl(t, e), { verseNum: o, verse: a } = Sx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function bc(e) {
  return e.getEditorState().read(() => Jl()?.getCode() || void 0);
}
function Jl() {
  return Ke().getChildren().find(ht);
}
function kf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && Ma(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || Ma(e, t), e.phase = "navigating") : i && Ma(e, t), r && r !== e.scrRef.book && Fm(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function Ma(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Im(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Jr }
    );
  });
}
function Im(e, t) {
  const r = zc(w()), n = nl(r)?.getNumber(), i = qp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Up(n) ? Um(t, n) : parseInt(n, 10) === t))
    return;
  const o = Ke().getChildren(), a = wp(o, e);
  if (!a) return;
  const c = Uk(o, a), l = wk(c, !0);
  Dk(c, l);
  let d;
  try {
    d = Tx(c, t);
  } catch {
    return;
  }
  d && (le(d) ? !S(d.getFirstChild()) && Ti(d) || Qt(d, 0) : v1(d));
}
function v1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || me(n)) {
    Qt(t, r);
    return;
  }
  const i = Mo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (S(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = L(n) && !K(n) ? Dm(n) : void 0;
  s ? s.select(0, 0) : Qt(t, r);
}
function Dm(e) {
  const t = e.getFirstChild();
  if (S(t)) return t;
  if (L(t) && !K(t)) return Dm(t);
}
function Rs(e) {
  return e.read(() => {
    const t = Ke().getChildren().find(Je);
    return `${Jl()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function S1(e, t) {
  e.phase !== "navigating" && t && (M1(t, e.scrRef) || Fm(e, E1(t, e.scrRef)));
}
function M1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? Um(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function Um(e, t) {
  try {
    return Kc(e, t);
  } catch {
    return !1;
  }
}
function E1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const A1 = 8;
function Fm(e, t) {
  return uo(t, e.scrRef) || e.pendingEchoes.some((r) => uo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > A1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function uo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function P1(e) {
  e.phase = "idle";
}
function N1(e) {
  return ht(e) ? `${e.__code}` : we(e) ? `${e.__marker} "${e.__number}"` : I(e) ? `${e.__marker}` : ys(e) ? `${e.__marker} "${e.__number}"` : St(e) ? `${e.__caller}` : $n(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : le(e) ? `${e.__marker}` : S(e) ? `"${e.__text}"${O1(e)}` : Ce(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : Ae(e) ? `${e.__marker} "${e.__number}"` : "";
}
function O1(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[gs]) : "";
}
function w1() {
  const [e] = ce();
  return /* @__PURE__ */ v(
    rb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: N1,
      editor: e
    }
  );
}
const zm = Ef(null), Tf = 4;
function q1({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = Q(null), s = Af(zm);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return F(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ v("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function R1({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = fe(), [s, o] = fe(), a = ge(
    (d) => {
      i((u) => u ? [...u, d] : [d]);
    },
    [i]
  ), c = (d) => {
    if (!n) return;
    const u = d.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(u) && d.preventDefault(), u === "Escape" || u === "Tab" ? r() : u === "ArrowUp" ? o((p) => {
      if (!p) return n[0];
      const f = n.indexOf(p) - 1;
      return n[f === -1 ? n.length - 1 : f];
    }) : u === "ArrowDown" && o((p) => p ? n[n.indexOf(p) + 1] : n[0]);
  }, l = je(() => ({ registerItem: a }), [a]);
  return F(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ v(zm.Provider, { value: l, children: /* @__PURE__ */ v("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function $1({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = Q(null), c = Q(null), [l, d] = fe(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return F(() => {
    const p = c.current, f = a.current;
    if (l && p !== null && f !== null) {
      const { top: g, left: h } = p.getBoundingClientRect();
      f.style.top = `${g + p.offsetHeight + Tf}px`, f.style.left = `${Math.min(h, window.innerWidth - f.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), F(() => {
    const p = c.current;
    if (p !== null && l) {
      const f = (g) => {
        const h = g.target;
        o && a.current && a.current.contains(h) || p.contains(h) || d(!1);
      };
      return document.addEventListener("click", f), () => {
        document.removeEventListener("click", f);
      };
    }
    return () => {
    };
  }, [a, c, l, o]), F(() => {
    const p = () => {
      if (l) {
        const f = c.current, g = a.current;
        if (f !== null && g !== null) {
          const { top: h } = f.getBoundingClientRect(), y = h + f.offsetHeight + Tf;
          y !== g.getBoundingClientRect().top && (g.style.top = `${y}px`);
        }
      }
    };
    return document.addEventListener("scroll", p), () => {
      document.removeEventListener("scroll", p);
    };
  }, [c, a, l]), /* @__PURE__ */ xe(bn, { children: [
    /* @__PURE__ */ xe(
      "button",
      {
        type: "button",
        disabled: e,
        "aria-label": r || t,
        className: n,
        onClick: () => d(!l),
        ref: c,
        children: [
          i && /* @__PURE__ */ v("span", { className: i }),
          t && /* @__PURE__ */ v("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ v("i", { className: "chevron-down" })
        ]
      }
    ),
    l && yn(
      /* @__PURE__ */ v(R1, { dropDownRef: a, onClose: u, children: s }),
      document.body
    )
  ] });
}
const kc = {
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
}, Tc = {
  ...kc,
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
  return /* @__PURE__ */ v(
    $1,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + I1(t),
      buttonLabel: D1(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(kc).map((n) => /* @__PURE__ */ xe(
        q1,
        {
          className: "item block-marker " + U1(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ v("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ v("span", { className: "text usfm_" + n, children: kc[n] })
          ]
        },
        n
      ))
    }
  );
}
function I1(e) {
  return e && e in Tc ? e : "ban";
}
function D1(e) {
  return e && e in Tc ? Tc[e] : "No Style";
}
function U1(e) {
  return e ? "active dropdown-item-active" : "";
}
function xf() {
  return /* @__PURE__ */ v("div", { className: "divider" });
}
const F1 = Nn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ce(), [o, a] = fe(s), [c, l] = fe(), [d, u] = fe(!1), [p, f] = fe(!1), g = ge(
    ({
      canUndo: h,
      canRedo: y,
      blockMarker: k,
      contextMarker: _
    }) => {
      u(h), f(y), l(k), n?.({
        canUndo: h,
        canRedo: y,
        blockMarker: k,
        contextMarker: _
      });
    },
    [n]
  );
  return F(() => s.registerCommand(
    dr,
    (h, y) => (a(y), !1),
    tt
  ), [s]), /* @__PURE__ */ xe(bn, { children: [
    /* @__PURE__ */ v(ng, { onStateChange: g }),
    /* @__PURE__ */ xe("div", { className: "toolbar", children: [
      /* @__PURE__ */ v(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(Df, void 0);
          },
          title: ri ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ v("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ v(
        "button",
        {
          disabled: !p || r,
          onClick: () => {
            o.dispatchCommand(Uf, void 0);
          },
          title: ri ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ v("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ v(xf, {}),
      o === s && /* @__PURE__ */ xe(bn, { children: [
        /* @__PURE__ */ v(
          L1,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ v(xf, {})
      ] }),
      /* @__PURE__ */ v("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), z1 = Oo(), K1 = {}, j1 = {};
function B1() {
  return /* @__PURE__ */ v("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const Km = Nn(function({
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
  const u = Q(null), p = Q(null), f = Q(null), g = Q(t), h = Q(void 0), y = Q(void 0), k = Q(void 0), _ = Q(void 0), C = Q(!1), [M, E] = fe(t), [z, W] = fe(0), [j, U] = fe(), {
    isReadonly: N = !1,
    structureProtectionMode: B = "off",
    hasExternalUI: re = !1,
    hasSpellCheck: X = !1,
    textDirection: ye = "ltr",
    markerMenuTrigger: ke = "\\",
    view: tr,
    nodes: $e,
    debug: sn = !1,
    contextMenu: mr,
    styleInfo: Mt,
    markerSettleDelayMs: ne,
    copyLimit: A
  } = a ?? j1, G = tr ?? z1, de = as(G) && (G.markerMode !== "hidden" || !G.hasSpacing || G.hasGutterParaMarkers || G.hasActiveTextFocusBox) ? {
    ...G,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : G, Ee = Q(de);
  qt(Ee.current, de) || (Ee.current = de);
  const ee = Ee.current, Se = je(() => $e ?? K1, [$e]), yr = je(() => mr, [mr]), wt = je(
    () => dx(Mt ?? Js),
    [Mt]
  ), on = Q(c);
  qt(on.current, c) || (on.current = c);
  const We = on.current, ue = as(ee), gt = N || ue, _e = de !== G;
  F(() => {
    ue && !N && We?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), _e && We?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), ee?.markerMode === "visible" && !N && We?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [ue, N, _e, We, ee?.markerMode]);
  const br = Q(null), Oe = je(() => {
    if (ee.markerMode !== "editable") return;
    const q = Mt ?? Js;
    return {
      getContext: () => br.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (V) => jE(
        q,
        V,
        Se.extraValidMarkers
      ),
      getEnterItems: (V) => BE(
        q,
        V,
        Se.extraValidMarkers
      ),
      apply: (V, J) => {
        const Z = br.current;
        Z && (J.trigger === "enter" ? Z.splitParagraphWithMarker(V.marker) : Z.applyMarkerMenuSelection(V, J));
      },
      commitTypedCloser: (V) => {
        br.current?.commitTypedCloser(V);
      }
    };
  }, [ee, Mt, Se.extraValidMarkers]), kr = (q) => {
    C.current || (C.current = !0, on.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ci = (q) => {
    if (ue)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, mt = (q) => {
    if (Ci(q), gt) throw new Error(`Cannot ${q} in readonly mode`);
  }, xs = je(
    () => ({
      namespace: "platformEditor",
      theme: { ...$g, showCharMarkerTitles: ee.showCharMarkerTitles },
      editable: !gt,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [et, ...ue ? C_ : ll]
    }),
    [gt, ue, ee.showCharMarkerTitles]
  );
  Ls.initialize(We);
  function Tr(q) {
    if (q !== void 0 && !vM(q, Se.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const In = ge(() => {
    const q = u.current;
    if (!q) return g.current;
    const V = Uu(q), J = y.current;
    if ((!V || V.size === 0) && !J) return g.current;
    const Z = q.getEditorState(), Me = Z.toJSON();
    return Z.read(
      () => y1(
        Me,
        V ?? /* @__PURE__ */ new Set(),
        { viewOptions: ee, getMarker: wt, logger: We },
        J,
        k.current
      )
    ) ?? g.current;
  }, [ee, wt, We]), vi = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const q = u.current?.getRootElement();
      return !!q && q.ownerDocument.activeElement === q;
    },
    undo() {
      u.current?.dispatchCommand(Df, void 0);
    },
    redo() {
      u.current?.dispatchCommand(Uf, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      mt("cut"), u.current && kl(u.current);
    },
    copy() {
      u.current && bl(u.current);
    },
    paste() {
      mt("paste"), u.current && Tl(u.current);
    },
    pastePlainText() {
      mt("paste as plain text"), u.current && xl(u.current);
    },
    getUsj() {
      return In();
    },
    commitPendingMarkerEdits() {
      u.current?.update(
        () => {
          u.current?.dispatchCommand(Pm, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(q) {
      if (!q) {
        y.current = void 0;
        return;
      }
      const V = u.current?.getEditorState().read(() => {
        const J = w();
        return P(J) && J.isCollapsed() ? J.focus.key : void 0;
      });
      y.current = { input: q, nodeKey: V ?? k.current?.key };
    },
    setUsj(q) {
      if (!qt(g.current, q)) {
        g.current = q, y.current = void 0;
        const V = qt(M, q);
        E(q), V && W((J) => J + 1);
      }
    },
    applyUpdate(q, V = "remote") {
      if (ue && V === "remote") {
        on.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Ci("apply an update"), u.current?.update(
        () => {
          V === "remote" && Gr(Ji), Y_(q, ee, Se, We);
        },
        { discrete: !0 }
      );
      const J = u.current?.getEditorState();
      if (!J) return;
      const Z = Ls.deserializeEditorState(J, ee);
      if (Z) {
        const Me = !qt(g.current, Z);
        if (Me && (g.current = Z), Me || !qt(M, Z)) {
          const Xe = Xu(q, J, "apply");
          _.current = Z, s?.(Z, q, V, Xe);
        }
      }
    },
    replaceEmbedUpdate(q, V) {
      const J = u.current?.read(() => Ix(q, V));
      J ? this.applyUpdate(J) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (ue) {
        kr("get the selection");
        return;
      }
      return u.current?.read(al);
    },
    setSelection(q) {
      if (ue) {
        kr("set the selection");
        return;
      }
      u.current?.update(() => {
        const V = No(q);
        V !== void 0 && (Tn(V), Gr(Xf));
      });
    },
    setAnnotation(q, V, J, Z, Me) {
      if (ue) {
        kr("set an annotation");
        return;
      }
      let Xe, nr, an, Si;
      typeof Z == "function" || Z === void 0 ? (Xe = Z, nr = Me) : (Xe = Z.onClick, nr = Z.onRemove, an = Z.onMouseEnter, Si = Z.onMouseLeave), p.current?.setAnnotation(
        q,
        Eu(V),
        J,
        Xe,
        nr,
        an,
        Si
      );
    },
    removeAnnotation(q, V) {
      p.current?.removeAnnotation(Eu(q), V);
    },
    formatPara(q) {
      mt("format a paragraph"), u.current?.update(
        () => {
          const V = w();
          if (!P(V)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${q}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          sb(V, () => Zi(q));
          const J = w();
          if (!P(J)) return;
          const Z = /* @__PURE__ */ new Set();
          J.getNodes().forEach((Me) => {
            const Xe = Me.getTopLevelElement();
            le(Xe) && Z.add(Xe);
          }), Z.forEach((Me) => gm(Me, q, ee));
        },
        { discrete: !0 }
      );
    },
    getElementByKey(q) {
      return u.current?.read(
        () => u.current?.getElementByKey(q) ?? void 0
      );
    },
    removeCharacterMarker(q) {
      if (gt) throw new Error("Cannot remove character marker in readonly mode");
      Tr(q);
      let V = !1;
      return u.current?.update(
        () => {
          const J = w();
          P(J) && (V = Pg(J, q, ee));
        },
        { discrete: !0 }
      ), V;
    },
    replaceCharacterMarker(q, V) {
      if (gt) throw new Error("Cannot replace character marker in readonly mode");
      Tr(q), Tr(V);
      let J = !1;
      return u.current?.update(
        () => {
          const Z = w();
          P(Z) && (J = LM(Z, q, V));
        },
        { discrete: !0 }
      ), J;
    },
    extendCharacterMarker(q, V) {
      if (gt) throw new Error("Cannot extend character marker in readonly mode");
      Tr(q), V?.forEach(
        (Z) => Tr(Z)
      );
      let J = !1;
      return u.current?.update(
        () => {
          const Z = w();
          P(Z) && (J = IM(
            Z,
            q,
            V,
            ee
          ));
        },
        { discrete: !0 }
      ), J;
    },
    insertMarker(q) {
      if (gt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!sc(q, Se.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const V = oc(
        q,
        h,
        ee,
        Se,
        We,
        void 0,
        Mt
      );
      return V.action({ editor: u.current, reference: r }), V.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!N)
        return u.current?.getEditorState().read(() => vA());
    },
    applyMarkerMenuSelection(q, V) {
      if (N) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (q.kind !== "closeTag" && !sc(q.marker, Se.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let J;
      return u.current.update(() => {
        J = PA(q, V, r, {
          expandedNoteKeyRef: h,
          viewOptions: ee,
          nodeOptions: Se,
          logger: c,
          styleInfo: Mt
        });
      }), J;
    },
    splitParagraphWithMarker(q) {
      if (N) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        xm(q, ee);
      });
    },
    commitTypedMarker(q, V) {
      if (N) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let J = !1;
      return u.current.update(() => {
        J = AA(q, V), J || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), J;
    },
    commitTypedCloser(q) {
      if (N) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let V = !1;
      return u.current.update(() => {
        V = Tm(q), V || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), V;
    },
    insertNote(q, V, J) {
      mt("insert a note"), u.current?.update(
        () => {
          const Z = wh(
            q,
            V,
            J,
            r,
            ee,
            Se,
            We
          );
          Z && !Z.getIsCollapsed() && (h.current = Z.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      u.current?.update(() => {
        const V = nd(q);
        V && (T_(V, ee), V.getIsCollapsed() || (h.current = V.getKey()));
      });
    },
    getNoteOps(q) {
      return u.current?.read(() => {
        const V = nd(q);
        if (V)
          return sl(V);
      });
    },
    get toolbarEndRef() {
      return f;
    }
  };
  br.current = vi, _c(d, () => vi), F(() => {
    const q = u.current;
    if (q)
      return q.registerUpdateListener(({ editorState: V }) => {
        V.read(() => {
          const J = w();
          if (!P(J) || !J.isCollapsed()) return;
          const Z = J.focus.getNode();
          S(Z) && (k.current = { key: Z.getKey(), offset: J.focus.offset });
        });
      });
  }, []);
  const rr = ge(
    (q, V, J, Z) => {
      if (ue) return;
      const Me = Ls.deserializeEditorState(q, ee);
      if (Me) {
        const Xe = !qt(g.current, Me);
        if (Xe && (g.current = Me), Xe || !qt(M, Me)) {
          const nr = Xu(Z, q);
          _.current = Me, s?.(Me, Z, "local", nr);
        }
      }
    },
    [M, s, ee, ue]
  );
  F(() => {
    const q = u.current;
    if (!(!q || !s))
      return q.registerUpdateListener(({ tags: V, dirtyElements: J, dirtyLeaves: Z }) => {
        !V.has(Pc) && (J.size === 0 && Z.size === 0 || V.has(Ji) || !Uu(q)?.size) || queueMicrotask(() => {
          const Me = In();
          !Me || qt(_.current, Me) || (_.current = Me, s(Me, void 0, "local", void 0));
        });
      });
  }, [s, In]);
  const Kt = ge(
    (q) => {
      U(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ xe(Kf, { initialConfig: xs, children: [
      /* @__PURE__ */ v(ev, { isEditable: !gt }),
      /* @__PURE__ */ xe("div", { className: "editor-container", children: [
        re ? /* @__PURE__ */ v(ng, { onStateChange: Kt }) : /* @__PURE__ */ v(
          "div",
          {
            className: "editor-toolbar-container" + (gt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ v(
              F1,
              {
                ref: f,
                editorRef: br,
                isReadonly: gt,
                onStateChange: Kt
              }
            )
          }
        ),
        /* @__PURE__ */ xe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ v(Bf, { editorRef: u }),
          /* @__PURE__ */ v(
            ib,
            {
              contentEditable: /* @__PURE__ */ v(
                jf,
                {
                  className: `editor-input usfm ${J_(ee).join(" ")}${ee.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${ee.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: X
                }
              ),
              placeholder: /* @__PURE__ */ v(B1, {}),
              ErrorBoundary: Vf
            }
          ),
          re && /* @__PURE__ */ v(ZC, {}),
          /* @__PURE__ */ v(Wf, {}),
          r && n && /* @__PURE__ */ v(T1, { scrRef: r, onScrRefChange: n }),
          r && !re && /* @__PURE__ */ v(
            _S,
            {
              trigger: ke,
              scrRef: r,
              contextMarker: j,
              getMarkerAction: (q) => oc(
                q,
                h,
                ee,
                Se,
                We,
                void 0,
                Mt
              ),
              editableHarness: Oe
            }
          ),
          /* @__PURE__ */ v(
            nv,
            {
              scripture: M,
              scriptureRef: g,
              nodeOptions: Se,
              editorAdaptor: Ar,
              viewOptions: ee,
              logger: We
            },
            z
          ),
          /* @__PURE__ */ v(Cv, { onChange: i }),
          /* @__PURE__ */ v(
            j_,
            {
              onChange: rr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Mb
            }
          ),
          /* @__PURE__ */ v(KM, { viewOptions: ee }),
          /* @__PURE__ */ v(z_, { ref: p, logger: We }),
          /* @__PURE__ */ v(_C, { viewOptions: ee }),
          /* @__PURE__ */ v(LC, {}),
          /* @__PURE__ */ v(KC, {}),
          ee?.markerMode !== "editable" && /* @__PURE__ */ v(jC, { logger: We }),
          /* @__PURE__ */ v(HC, { options: yr }),
          /* @__PURE__ */ v(NE, { limit: A }),
          /* @__PURE__ */ v(QC, {}),
          /* @__PURE__ */ v(rv, {}),
          /* @__PURE__ */ v(NA, {}),
          /* @__PURE__ */ v(
            e1,
            {
              viewOptions: ee,
              getMarker: wt,
              logger: We,
              markerSettleDelayMs: ne,
              structureProtectionMode: B,
              copyLimit: A
            }
          ),
          /* @__PURE__ */ v(a1, { viewOptions: ee, copyLimit: A }),
          /* @__PURE__ */ v(
            o1,
            {
              styleInfo: Mt,
              viewOptions: ee,
              logger: We
            }
          ),
          /* @__PURE__ */ v(
            iv,
            {
              expandedNoteKeyRef: h,
              nodeOptions: Se,
              viewOptions: ee,
              logger: We
            }
          ),
          /* @__PURE__ */ v(_v, {}),
          /* @__PURE__ */ v(yC, {}),
          /* @__PURE__ */ v(pC, {}),
          /* @__PURE__ */ v(b1, { viewOptions: ee, logger: We }),
          /* @__PURE__ */ v(vv, {}),
          /* @__PURE__ */ v(lS, { structureProtectionMode: B }),
          /* @__PURE__ */ v(uS, { textDirection: ye }),
          /* @__PURE__ */ v(fS, {}),
          /* @__PURE__ */ v(TS, {}),
          l
        ] }),
        sn && /* @__PURE__ */ v(w1, {})
      ] })
    ] }, ee.verseLayout ?? "inline")
  );
}), ZP = Nn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ v(Km, { ref: r, ...i });
});
function jm() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function fo(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? jm() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function Bm(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? jm() : r,
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
function V1(e) {
  return {
    author: e.author,
    content: "[Deleted Comment]",
    deleted: !0,
    id: e.id,
    timeStamp: e.timeStamp,
    type: "comment"
  };
}
function Ea(e) {
  const t = e._changeListeners;
  for (const r of t)
    r();
}
class W1 {
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
    this._comments = t, Ea(this);
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
    this._comments = i, Ea(this);
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
    return this._comments = n, Ea(this), t.type === "comment" ? {
      index: s,
      markedComment: V1(t)
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
    return t !== null ? t.doc.get("comments", hu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new gu(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new hu();
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
      xt
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof xb) {
            const d = l.target, u = l.delta;
            let p = 0;
            for (const f of u) {
              const g = f.insert, h = f.retain, y = f.delete, k = d.parent, _ = d === r ? void 0 : k instanceof gu && this._comments.find((C) => C.id === k.get("id"));
              if (Array.isArray(g)) {
                const C = p;
                g.slice().reverse().forEach((M) => {
                  const E = M.get("id"), W = M.get("type") === "thread" ? Bm(
                    M.get("quote"),
                    M.get("comments").toArray().map(
                      (j) => fo(
                        j.get("content"),
                        j.get("author"),
                        j.get("id"),
                        j.get("timeStamp"),
                        j.get("deleted")
                      )
                    ),
                    E
                  ) : fo(
                    M.get("content"),
                    M.get("author"),
                    E,
                    M.get("timeStamp"),
                    M.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(W, _, C);
                  });
                });
              } else if (typeof h == "number")
                p += h;
              else if (typeof y == "number")
                for (let C = 0; C < y; C++) {
                  const M = _ === void 0 || _ === !1 ? this._comments[p] : _.comments[p];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(M, _);
                  }), p++;
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
function H1(e) {
  const [t, r] = fe(e.getComments());
  return F(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function G1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = Q(null);
  return F(() => {
    i.current !== null && i.current.focus();
  }, []), F(() => {
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
  }, [n, e]), /* @__PURE__ */ v("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ xe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ v("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ v(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ v("div", { className: "Modal__content", children: t })
  ] }) });
}
function J1({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return yn(
    /* @__PURE__ */ v(G1, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function Vm() {
  const [e, t] = fe(null), r = ge(() => {
    t(null);
  }, []), n = je(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ v(J1, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const Y1 = {
  ...$g,
  paragraph: "CommentEditorTheme__paragraph"
};
function X1(...e) {
  return e.filter(Boolean).join(" ");
}
function tn({
  "data-test-id": e,
  children: t,
  className: r,
  onClick: n,
  disabled: i,
  small: s,
  title: o
}) {
  return /* @__PURE__ */ v(
    "button",
    {
      disabled: i,
      className: X1(
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
function Q1({
  className: e
}) {
  return /* @__PURE__ */ v(jf, { className: e || "ContentEditable__root" });
}
function Z1({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ v("div", { className: t || "Placeholder__root", children: e });
}
const Cf = If("INSERT_INLINE_COMMAND");
function eP({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = Q(null), s = ge(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return F(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), ps(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ v("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ v("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ v("i", { className: "icon add-comment" }) }) });
}
function tP({ onEscape: e }) {
  const [t] = ce();
  return F(() => t.registerCommand(
    Lf,
    (r) => e(r),
    Wr
  ), [t, e]), null;
}
function Wm({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ v(Kf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: Y1
  }, children: /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ v(
      yb,
      {
        contentEditable: /* @__PURE__ */ v(Q1, { className: e }),
        placeholder: /* @__PURE__ */ v(Z1, { children: s }),
        ErrorBoundary: Vf
      }
    ),
    /* @__PURE__ */ v(mb, { onChange: n }),
    /* @__PURE__ */ v(Wf, {}),
    t !== !1 && /* @__PURE__ */ v(pb, {}),
    /* @__PURE__ */ v(tP, { onEscape: r }),
    /* @__PURE__ */ v(hb, {}),
    i !== void 0 && /* @__PURE__ */ v(Bf, { editorRef: i })
  ] }) });
}
function Hm(e, t) {
  return ge(
    (r, n) => {
      r.read(() => {
        e(bb()), t(!kb(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function rP({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Q(null), c = je(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = Q(null), d = Jm(), u = ge(() => {
    e.getEditorState().read(() => {
      const h = w();
      if (P(h)) {
        l.current = h.clone();
        const y = h.anchor, k = h.focus, _ = ob(
          e,
          y.getNode(),
          y.offset,
          k.getNode(),
          k.offset
        ), C = a.current;
        if (_ !== null && C !== null) {
          const { left: M, bottom: E, width: z } = _.getBoundingClientRect(), W = ab(e, _);
          let j = W.length === 1 ? M + z / 2 - 125 : M - 125;
          j < 10 && (j = 10), C.style.left = `${j}px`, C.style.top = `${E + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const U = W.length, { container: N } = c, B = c.elements, re = B.length;
          for (let X = 0; X < U; X++) {
            const ye = W[X];
            let ke = B[X];
            ke === void 0 && (ke = document.createElement("span"), B[X] = ke, N.appendChild(ke));
            const $e = `position:absolute;top:${ye.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${ye.left}px;height:${ye.height}px;width:${ye.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            ke.style.cssText = $e;
          }
          for (let X = re - 1; X >= U; X--) {
            const ye = B[X];
            N.removeChild(ye), B.pop();
          }
        }
      }
    });
  }, [e, c]);
  ps(() => {
    u();
    const h = c.container, y = document.body;
    return y !== null ? (y.appendChild(h), () => {
      y.removeChild(h);
    }) : () => {
    };
  }, [c.container, u]), F(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const p = (h) => (h.preventDefault(), t(), !0), f = () => {
    if (s) {
      let h = e.getEditorState().read(() => {
        const y = l.current;
        return y ? y.getTextContent() : "";
      });
      h.length > 100 && (h = h.slice(0, 99) + "…"), r(
        Bm(h, [fo(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, g = Hm(i, o);
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ v(
      Wm,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: p,
        onChange: g
      }
    ),
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ v(tn, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ v(
        tn,
        {
          onClick: f,
          disabled: !s,
          className: "CommentPlugin_CommentInputBox_Button primary",
          children: "Comment"
        }
      )
    ] })
  ] });
}
function nP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = fe(""), [s, o] = fe(!1), a = Q(null), c = Jm(), l = Hm(i, o);
  return /* @__PURE__ */ xe(bn, { children: [
    /* @__PURE__ */ v(
      Wm,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ v(
      tn,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(fo(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(Xy, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ v("i", { className: "send" })
      }
    )
  ] });
}
function Gm({
  commentOrThread: e,
  deleteCommentOrThread: t,
  onClose: r,
  thread: n = void 0
}) {
  return /* @__PURE__ */ xe(bn, { children: [
    "Are you sure you want to delete this ",
    e.type,
    "?",
    /* @__PURE__ */ xe("div", { className: "Modal__content", children: [
      /* @__PURE__ */ v(
        tn,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ v(
        tn,
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
  const [i, s] = fe(0);
  F(() => {
    const d = () => {
      s(performance.timeOrigin + performance.now());
    };
    d();
    const u = window.setInterval(d, 6e4);
    return () => {
      window.clearInterval(u);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = Vm();
  return /* @__PURE__ */ xe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ v("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ xe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ v("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ xe(bn, { children: [
      /* @__PURE__ */ v(
        tn,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ v(
              Gm,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ v("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function iP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ce(), [a, c] = fe(0), [l, d] = Vm(), u = je(
    () => new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "auto",
      style: "short"
    }),
    []
  );
  return F(() => {
    const p = setTimeout(() => {
      c(a + 1);
    }, 1e4);
    return () => {
      clearTimeout(p);
    };
  }, [a]), /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((p) => {
    const f = p.id;
    return p.type === "thread" ? /* @__PURE__ */ xe(
      "li",
      {
        onClick: () => {
          const h = s.get(f);
          if (h !== void 0 && (e === null || e.indexOf(f) === -1)) {
            const y = document.activeElement;
            o.update(
              () => {
                const k = Array.from(h)[0], _ = oe(k);
                Ce(_) && _.selectStart();
              },
              {
                onUpdate() {
                  y !== null && y.focus();
                }
              }
            );
          }
        },
        className: `CommentPlugin_CommentsPanel_List_Thread ${s.has(f) ? "interactive" : ""} ${e.indexOf(f) === -1 ? "" : "active"}`,
        children: [
          /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ xe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ v("span", { children: p.quote })
            ] }),
            /* @__PURE__ */ v(
              tn,
              {
                onClick: () => {
                  d("Delete Thread", (h) => /* @__PURE__ */ v(
                    Gm,
                    {
                      commentOrThread: p,
                      deleteCommentOrThread: r,
                      onClose: h
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ v("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ v("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: p.comments.map((h) => /* @__PURE__ */ v(
            vf,
            {
              comment: h,
              deleteComment: r,
              thread: p,
              rtf: u
            },
            h.id
          )) }),
          /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ v(
            nP,
            {
              submitAddComment: i,
              thread: p,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      f
    ) : /* @__PURE__ */ v(
      vf,
      {
        comment: p,
        deleteComment: r,
        rtf: u
      },
      f
    );
  }) });
}
function sP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = Q(null), o = r.length === 0;
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ v("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ v("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ v(
      iP,
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
function Jm() {
  const e = Hf(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function oP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = Hf(), [a] = ce(), c = je(() => {
    const j = new W1(a, s);
    return r && j.registerOnChange(r), t?.(j), j;
  }, [a, s, r, t]), l = H1(c), d = je(() => /* @__PURE__ */ new Map(), []), [u, p] = fe(), [f, g] = fe([]), [h, y] = fe(!1), [k, _] = fe(!1), { yjsDocMap: C } = o;
  F(() => {
    if (e) {
      const j = e("comments", C);
      return c.registerCollaboration(j);
    }
    return () => {
    };
  }, [c, e, C]);
  const M = ge(() => {
    a.update(() => {
      const j = w();
      j !== null && (j.dirty = !0);
    }), y(!1);
  }, [a]), E = ge(
    (j, U) => {
      if (j.type === "comment") {
        const N = c.deleteCommentOrThread(j, U);
        if (!N)
          return;
        const { markedComment: B, index: re } = N;
        c.addComment(B, U, re);
      } else {
        c.deleteCommentOrThread(j);
        const N = U !== void 0 ? U.id : j.id, B = d.get(N);
        B !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const re of B) {
              const X = oe(re);
              Ce(X) && (X.deleteID(Vr, N), X.hasNoIDsForEveryType() && js(X));
            }
          });
        });
      }
    },
    [c, a, d]
  ), z = ge(
    (j, U, N, B) => {
      c.addComment(j, N), U && (a.update(() => {
        P(B) && dp(B, Vr, j.id);
      }), y(!1));
    },
    [c, a]
  );
  F(() => {
    const j = [];
    let U;
    for (const N of f) {
      const B = d.get(N);
      if (B !== void 0)
        for (const re of B) {
          const X = a.getElementByKey(re);
          X !== null && (X.classList.add("selected"), j.push(X), U = window.setTimeout(() => {
            _(!0);
          }, 0));
        }
    }
    return () => {
      U !== void 0 && window.clearTimeout(U);
      for (const N of j)
        N.classList.remove("selected");
    };
  }, [f, a, d]), F(() => {
    if (!a.hasNodes([et]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const j = /* @__PURE__ */ new Map();
    return Fe(
      zf(
        a,
        et,
        (U) => Xi(U.getTypedIDs()),
        (U, N) => {
          for (const [B, re] of Object.entries(U.getTypedIDs()))
            re.forEach((X) => {
              N.addID(B, X);
            });
        }
      ),
      a.registerMutationListener(
        et,
        (U) => {
          a.getEditorState().read(() => {
            for (const [N, B] of U) {
              const re = oe(N);
              let X = [];
              B === "destroyed" ? X = j.get(N) ?? [] : Ce(re) && (X = re.getTypedIDs()[Vr] ?? []);
              for (const ye of X) {
                let ke = d.get(ye);
                j.set(N, X), B === "destroyed" ? ke !== void 0 && (ke.delete(N), ke.size === 0 && d.delete(ye)) : (ke === void 0 && (ke = /* @__PURE__ */ new Set(), d.set(ye, ke)), ke.has(N) || ke.add(N));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: U, tags: N }) => {
        U.read(() => {
          const B = w();
          let re = !1, X = !1;
          if (P(B)) {
            const ye = B.anchor.getNode();
            if (S(ye)) {
              const ke = ck(ye, Vr, B.anchor.offset) ?? [];
              ke !== null && (g(ke), re = !0), B.isCollapsed() || (p(ye.getKey()), X = !0);
            }
          }
          re || g((ye) => ye.length === 0 ? ye : []), X || p(null), !N.has("collaboration") && P(B) && y(!1);
        });
      }),
      a.registerCommand(
        Cf,
        () => {
          const U = window.getSelection();
          return U !== null && U.removeAllRanges(), y(!0), !0;
        },
        kn
      )
    );
  }, [a, d]);
  const W = () => {
    a.dispatchCommand(Cf, void 0);
  };
  return /* @__PURE__ */ xe(bn, { children: [
    h && yn(
      /* @__PURE__ */ v(
        rP,
        {
          editor: a,
          cancelAddComment: M,
          submitAddComment: z
        }
      ),
      document.body
    ),
    u != null && !h && yn(
      /* @__PURE__ */ v(
        eP,
        {
          anchorKey: u,
          editor: a,
          showComments: k,
          onAddComment: W
        }
      ),
      document.body
    ),
    n !== null && yn(
      /* @__PURE__ */ v(
        tn,
        {
          className: `CommentPlugin_ShowCommentsButton ${k ? "active" : ""}`,
          onClick: () => _(!k),
          title: k ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ v("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    k && yn(
      /* @__PURE__ */ v(
        sP,
        {
          comments: l,
          submitAddComment: z,
          deleteCommentOrThread: E,
          activeIDs: f,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function aP() {
  const e = Q(void 0), t = ge((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function cP(e, t) {
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
function lP(e, t) {
  F(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      cP(r, t);
    };
  }, [t, e]);
}
const eN = Nn(function(t, r) {
  const n = Q(null), i = Q(!0), s = Q(null), [o, a] = fe(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...p } = t, { logger: f, options: { isReadonly: g, view: h } = {} } = t, y = (g ?? !1) || as(h), [k, _] = aP();
  lP(p, k), F(() => {
    if (process.env.NODE_ENV !== "production") {
      const E = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      f?.warn(E), f || console.warn(E);
    }
  }, [f]), _c(r, () => ({
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
    applyUpdate(E, z) {
      n.current?.applyUpdate(E, z);
    },
    replaceEmbedUpdate(E, z) {
      return n.current?.replaceEmbedUpdate(E, z);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(E) {
      n.current?.setSelection(E);
    },
    setAnnotation(E, z, W, j, U) {
      typeof j == "function" || j === void 0 ? n.current?.setAnnotation(E, z, W, j, U) : n.current?.setAnnotation(E, z, W, j);
    },
    removeAnnotation(E, z) {
      n.current?.removeAnnotation(E, z);
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
    replaceCharacterMarker(E, z) {
      return n.current?.replaceCharacterMarker(E, z) ?? !1;
    },
    extendCharacterMarker(E, z) {
      return n.current?.extendCharacterMarker(E, z) ?? !1;
    },
    insertMarker(E) {
      return n.current?.insertMarker(E);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(E, z) {
      return n.current?.applyMarkerMenuSelection(E, z);
    },
    splitParagraphWithMarker(E) {
      n.current?.splitParagraphWithMarker(E);
    },
    commitTypedMarker(E, z) {
      return n.current?.commitTypedMarker(E, z) ?? !1;
    },
    commitTypedCloser(E) {
      return n.current?.commitTypedCloser(E) ?? !1;
    },
    insertNote(E, z, W) {
      n.current?.insertNote(E, z, W);
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
  const C = ge(
    (E, z, W, j) => {
      if (!d) return;
      const U = k.current?.getComments();
      d(E, U, z, W, j);
    },
    [k, d]
  ), M = ge(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const E = k.current?.getComments();
    l(E);
  }, [k, i, l]);
  return F(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ v(gb, { children: /* @__PURE__ */ xe(Km, { ref: n, onUsjChange: C, ...p, children: [
    /* @__PURE__ */ v(
      oP,
      {
        setCommentStore: _,
        onChange: M,
        showCommentsContainerRef: y ? null : u ?? o,
        commentContainerRef: s,
        logger: p.logger
      }
    ),
    /* @__PURE__ */ v("div", { ref: s, className: "comment-container" })
  ] }) });
});
function mn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function uP(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function dP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const fP = /^[#\w().,%/\s-]+$/;
function xr(e) {
  return e != null;
}
const pP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, hP = {
  left: "right",
  right: "left"
}, gP = "var(--usj-font-fallback, serif)";
function Ym(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${uP(i)}"`).join(", ")}, ${gP}`;
}
const xc = ".editor-input.usfm", mP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function yP(e) {
  return mP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${xc}".`
  ), xc);
}
function bP(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(Ym(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (fP.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), xr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), xr(t.firstLineIndent) && s.push(`text-indent: ${mn(t.firstLineIndent * 20 * r)}vw`), xr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${mn(t.leftMargin * 20 * r)}vw`), xr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${mn(t.rightMargin * 20 * r)}vw`
  ), xr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${mn(t.spaceBefore * r)}pt`), xr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${mn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = pP[n ? hP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Sf = { c: 150, ca: 133, cp: 150 };
function Mf(e, t) {
  return e && xr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function kP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && xr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Mf(e.markers.c, Sf.c);
  return ["ca", "cp"].map((i) => {
    const s = Mf(
      e.markers[i],
      Sf[i]
    ), o = mn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function tN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = xc } = t, s = yP(i), o = [], a = [];
  e.defaultFont && a.push(Ym(e.defaultFont)), xr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${mn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = bP(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${dP(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...kP(e, s)), o.join(`
`);
}
export {
  Fh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  ZP as Editorial,
  Gi as GENERATOR_NOTE_CALLER,
  Jf as HIDDEN_NOTE_CALLER,
  eN as Marginal,
  b as MarkerType,
  Uh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  fl as STANDARD_VIEW_MODE,
  Js as defaultStyleInfo,
  QP as directionToNames,
  w_ as filterAndRankItems,
  tN as generateUsjCss,
  YP as getDefaultViewMode,
  Oo as getDefaultViewOptions,
  BE as getEnterMenuItems,
  jE as getMarkerMenuItems,
  XP as getViewMode,
  gl as getViewOptions,
  as as isBlockVerseLayout,
  jr as isInsertEmbedOpOfType,
  V_ as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
