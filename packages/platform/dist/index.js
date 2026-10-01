import { jsx as S, jsxs as xe, Fragment as bn } from "react/jsx-runtime";
import { forwardRef as Nn, useState as de, useRef as ee, useCallback as me, useEffect as z, useMemo as Ke, memo as Py, createContext as $f, useContext as Lf, Children as Ny, isValidElement as Oy, cloneElement as wy, useImperativeHandle as wc, useLayoutEffect as Ts } from "react";
import { assertSafeKey as Je, isValidBookCode as qy, MARKER_OBJECT_PROPS as Ry, USJ_VERSION as _r, USJ_TYPE as Cr, isUsjTextContentLocation as $y, indexesFromUsjJsonPath as If, isUsjAttributeKeyLocation as Ly, isUsjAttributeMarkerLocation as Iy, isUsjClosingAttributeMarkerLocation as Dy, isUsjMarkerLocation as Uy, isUsjClosingMarkerLocation as Fy, isUsjPropertyValueLocation as zy, getUsjDocumentLocationTypeName as Ky, usjJsonPathFromIndexes as ln, EMPTY_USJ as Df } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ve, $parseSerializedNode as Co, DecoratorNode as xs, ElementNode as er, isHTMLElement as On, createState as vo, $getState as ne, $setState as xt, $isRangeSelection as P, $isElementNode as L, $isTextNode as E, $getSelection as O, $isNodeSelection as So, ParagraphNode as qc, TextNode as Be, $createTextNode as ge, $getCommonAncestor as By, $isLineBreakNode as wn, NODE_STATE_KEY as _s, $getEditor as bi, $hasUpdateTag as jy, $getNodeByKey as se, $getRoot as Re, $createRangeSelection as Rc, $createPoint as Ra, $getCharacterOffsets as $c, KEY_DOWN_COMMAND as Nr, COMMAND_PRIORITY_HIGH as Oe, HISTORY_MERGE_TAG as Uf, CLICK_COMMAND as Mo, COMMAND_PRIORITY_EDITOR as kn, isDOMNode as Ff, $getNearestNodeFromDOMNode as ki, CONTROLLED_TEXT_INSERTION_COMMAND as Hs, PASTE_COMMAND as cr, COMMAND_PRIORITY_CRITICAL as st, CUT_COMMAND as vr, DROP_COMMAND as Lc, DELETE_CHARACTER_COMMAND as Vy, DELETE_WORD_COMMAND as Wy, DELETE_LINE_COMMAND as Hy, $isDecoratorNode as qn, COPY_COMMAND as ii, COMMAND_PRIORITY_LOW as ft, COMMAND_PRIORITY_NORMAL as Vr, SELECTION_CHANGE_COMMAND as dr, getDOMSelection as Gy, isSelectionWithinEditor as zf, $createRangeSelectionFromDom as Jy, $setSelection as si, isDOMTextNode as Yy, BLUR_COMMAND as Ic, $addUpdateTag as Wr, SKIP_DOM_SELECTION_TAG as Xy, CLEAR_HISTORY_COMMAND as Qy, $getPreviousSelection as Zy, $isRootOrShadowRoot as eb, CAN_UNDO_COMMAND as tb, CAN_REDO_COMMAND as rb, DRAGSTART_COMMAND as nb, $createNodeSelection as Kf, getDOMSelectionFromTarget as ib, $onUpdate as Bf, KEY_ENTER_COMMAND as jf, LineBreakNode as Vf, $isRootNode as sb, INSERT_PARAGRAPH_COMMAND as Ji, $copyNode as ob, FOCUS_COMMAND as ab, createEditor as cb, SELECT_ALL_COMMAND as lb, isExactShortcutMatch as ub, getDOMTextNode as db, KEY_ESCAPE_COMMAND as Wf, createCommand as Hf, INSERT_LINE_BREAK_COMMAND as fb, HISTORIC_TAG as Dc, UNDO_COMMAND as Gf, REDO_COMMAND as Jf, CLEAR_EDITOR_COMMAND as pb } from "lexical";
import { addClassNamesToElement as Vn, removeClassNamesFromElement as ia, $findMatchingParent as Ye, $dfsIterator as Yf, $dfs as Rn, mergeRegister as je, registerNestedElementResolver as Xf, $unwrapNode as $a, IS_APPLE as oi } from "@lexical/utils";
import { useLexicalNodeSelection as hb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Pt } from "fast-equals";
import ji from "quill-delta";
import { copyToClipboard as gb, $getLexicalContent as mb } from "@lexical/clipboard";
import { graphemeSegments as yb } from "unicode-segmenter/grapheme";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { TreeView as bb } from "@lexical/react/LexicalTreeView";
import * as kb from "react-dom";
import { createPortal as yn } from "react-dom";
import { LexicalComposer as Qf } from "@lexical/react/LexicalComposer";
import { ContentEditable as Zf } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as ep } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as tp } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as rp } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as Tb } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as xb, createDOMRange as _b, createRectsFromDOMRange as Cb } from "@lexical/selection";
import { autoUpdate as vb, computePosition as Sb, shift as Mb, flip as Eb } from "@floating-ui/dom";
import { $generateNodesFromDOM as Ab } from "@lexical/html";
import { AutoFocusPlugin as Pb } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as Nb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as np, LexicalCollaboration as Ob } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as wb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as qb } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Rb, $isRootTextContentEmpty as $b } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Lb } from "@lexical/yjs";
import { Array as vu, Map as Su, YArrayEvent as Ib } from "yjs";
const sa = (e) => Ve(Co(e)), Db = {
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
function ip(e) {
  return Db[e];
}
const R = " ", Gs = "​", Ft = R, Uc = `${R}|`, Ht = "p", rs = "+", sp = "-", Js = "chapter", La = "verse", Mu = "invalid", Ub = "text-spacing", Fb = "formatted-font", zb = "marker-", op = "external-usj-mutation", ap = "selection-change", Hr = "cursor-change", Ia = "annotation-change", ns = "delta-change", cp = "marker-settle", Kb = [
  op,
  ap,
  Hr,
  Ia,
  ns
], Tn = "zmsc-s", ti = "zmsc-e", Bb = [Tn, ti], jb = [
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
  Tn,
  ti
], lp = 1, Fc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Vb = Fc.filter((e) => e !== "sid" && e !== "eid");
class Yt extends xs {
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
    return new Yt(r, n, i, s, a, o);
  }
  static importJSON(t) {
    return dp().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (jb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: lp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function up(e) {
  return Bb.includes(e);
}
function dp(e, t, r, n, i) {
  return Ve(new Yt(e, t, r, n, void 0, i));
}
function He(e) {
  return e instanceof Yt;
}
const zc = "f", Wb = [
  // Footnote
  zc,
  "fe",
  "ef",
  "efe",
  // Cross Reference
  "x",
  "ex"
];
function Vi(e) {
  return e.startsWith("f") || e.startsWith("ef") ? "footnote" : "crossref";
}
const Hb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], fp = 1;
class Ae extends er {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = zc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Vi(t) === "crossref" ? sp : rs), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Jb(t) ? {
        conversion: Gb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Wb.includes(t) || (r?.includes(t) ?? !1));
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(this.__type, `usfm_${this.__marker}`, this.__isCollapsed ? "collapsed" : "expanded"), t.setAttribute("data-caller", this.__caller), t.setAttribute("data-note-kind", Vi(this.__marker)), t;
  }
  updateDOM(t, r) {
    return t.__isCollapsed !== this.__isCollapsed ? !0 : (t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.classList.remove(`usfm_${t.__marker}`), r.classList.add(`usfm_${this.__marker}`), r.setAttribute("data-note-kind", Vi(this.__marker))), t.__caller !== this.__caller && r.setAttribute("data-caller", this.__caller), !1);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && On(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(this.getType(), `usfm_${this.getMarker()}`, this.getIsCollapsed() ? "collapsed" : "expanded"), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-note-kind", Vi(this.getMarker()))), { element: r };
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
      version: fp
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
function Gb(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Kc(t, r, n) };
}
function Kc(e, t, r, n, i) {
  return Ve(new Ae(e, t, r, n, i));
}
function Jb(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return Ae.isValidMarker(t) && e.classList.contains(Ae.getType());
}
function K(e) {
  return e instanceof Ae;
}
var T;
(function(e) {
  e.FileIdentification = "FileIdentification", e.Headers = "Headers", e.Remarks = "Remarks", e.Introduction = "Introduction", e.DivisionMarks = "DivisionMarks", e.Paragraphs = "Paragraphs", e.Poetry = "Poetry", e.TitlesHeadings = "TitlesHeadings", e.Tables = "Tables", e.CenterTables = "CenterTables", e.RightTables = "RightTables", e.Lists = "Lists", e.Footnotes = "Footnotes", e.CrossReferences = "CrossReferences", e.SpecialText = "SpecialText", e.CharacterStyling = "CharacterStyling", e.Breaks = "Breaks", e.SpecialFeatures = "SpecialFeatures", e.PeripheralReferences = "PeripheralReferences", e.PeripheralMaterials = "PeripheralMaterials", e.Uncategorized = "Uncategorized";
})(T || (T = {}));
var k;
(function(e) {
  e.Paragraph = "Paragraph", e.Character = "Character", e.Note = "Note", e.Milestone = "Milestone", e.Unknown = "Unknown";
})(k || (k = {}));
const Da = {
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
}, Eu = {
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
  const t = Object.hasOwn(Da, e) ? Da[e] : void 0, r = Object.hasOwn(Eu, e) ? Eu[e] : void 0;
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
const pp = "v", hp = "c", dn = "fig", Au = "tr", Ua = "esb", gp = "esbe", Pu = "periph", Nu = "alt", Ou = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Yb = {
  "": "start",
  c: "center",
  r: "end"
};
function wu(e) {
  const [, , t, r] = e;
  return r ? /^[1-5]$/.test(t) && /^[2-5]$/.test(r) && Number(r) > Number(t) : /^(?:[1-9]|1[0-2])$/.test(t);
}
function qu(e) {
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
const Xb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function Qb(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Gs && s + 1 < e.length && qu(e[s + 1]) || (qu(o) ? (r || (i = t.length, t += o), r = !0) : Xb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function Zb(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function ek(e, t) {
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
const tk = /^(?:qt[1-5]?|ts)-[se]$/;
function Bc(e) {
  return tk.test(e) || up(e);
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
function rk(e, t, r) {
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
      const p = e.indexOf("\\", i), g = p === -1 ? e.length : p;
      a(Qb(e.slice(i, g))), i = g;
      continue;
    }
    const c = i, { name: l, next: d } = ek(e, i + 1);
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
    if (l === pp) {
      const { word: p, next: g } = oa(e, i);
      i = g, n.push({ kind: "verse", number: p });
      continue;
    }
    if (l === hp) {
      const { word: p, next: g } = oa(e, i);
      i = g, s = void 0, n.push({ kind: "chapter", number: p });
      continue;
    }
    const f = l.startsWith("+"), h = f ? l.slice(1) : l, y = t(h)?.type;
    if (y === k.Note || y === void 0 && Ae.isValidMarker(l)) {
      const { word: p, next: g } = oa(e, i);
      i = g, s = l, n.push({ kind: "note", marker: l, caller: p || "+" });
      continue;
    }
    if (y === k.Milestone || y === void 0 && Bc(l)) {
      const p = uk(e, c, l, i);
      if (p)
        n.push(p.token), p.ejectedText && o(p.ejectedText), i = p.next;
      else {
        const g = e.indexOf("\\", i), b = g === -1 ? e.length : g;
        o(e.slice(c, b)), i = b;
      }
      continue;
    }
    y === k.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : y === k.Character ? (u(), n.push({ kind: "charOpen", marker: h, isNested: f })) : Ys(h) ? (u(), Ys(h)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: h, isNested: f })) : (u(), !(r || s !== void 0) || l === Ua || l === gp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: h, isNested: f }));
  }
  return n;
}
const Ru = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Ys(e) {
  return Object.hasOwn(Ru, e) ? Ru[e] : void 0;
}
function nk(e) {
  return Ys(e) !== void 0;
}
const ik = /([-\w]+)\s*=\s*"(.*?)"/g, sk = /[\s\u200B]*[\n\r][\s\u200B]*/g, mp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Eo(e) {
  return mp[e];
}
const ok = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function ak(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function is(e, t, r = mp[t]) {
  const n = e.replace(sk, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(ik)];
  if (s.length > 0) {
    if (!ak(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      ok.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Ao(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function ck(e) {
  const t = Or(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function lk(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = is(e.slice(n + 1, i), r, Ao(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function uk(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = is(s.slice(o + 1), r, Ao(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = lk(e, i + 2, r);
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
function Dr(e) {
  return e.content || (e.content = []), e.content;
}
function Or(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d, u;
  const f = () => d ? Dr(d) : u ? Dr(u) : r;
  let h = !1;
  const y = () => {
    if (s)
      return o.length > a ? Dr(o[o.length - 1].object) : Dr(s);
    if (o.length > 0)
      return Dr(o[o.length - 1].object);
    if (!i) {
      if (h && !n)
        return f();
      i = { type: "para", marker: Ht, content: [] }, f().push(i);
    }
    return Dr(i);
  }, p = (re) => {
    const N = y();
    typeof re == "string" && typeof N[N.length - 1] == "string" ? N[N.length - 1] = N[N.length - 1] + re : N.push(re);
  }, g = (re) => {
    for (let N = re; N < o.length; N += 1) {
      const G = o[N].object;
      G.closed = "false";
    }
  }, b = () => {
    g(0), o.length = 0;
  }, x = (re) => {
    s && (o.length > a && (g(a), o.length = a), a = 0, re || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, M = (re, N, G) => {
    b();
    const [, ue, Ee, Z] = G, Me = {
      type: "table:cell",
      marker: Z ? N.slice(0, N.indexOf("-")) : N,
      align: Yb[ue],
      content: []
    };
    Z && (Me.colspan = String(Number(Z) + 1 - Number(Ee))), Dr(re).push(Me), i = Me;
  }, A = (re) => {
    d && (re || (d.closed = "false"), d = void 0);
  }, F = () => {
    u = void 0;
  };
  let B, j = "", _;
  const U = () => {
    j && p(ar(j)), j = "";
  }, W = (re = !1) => {
    B?.type === "sidebar" ? j = "" : re && j.endsWith(`
`) && (j = j.slice(0, -1)), B = void 0, U();
  }, fe = () => {
    if (!_)
      return;
    const re = { type: "char", marker: _.marker, content: [] };
    _.value && (re.content = [ar(_.value)]), y().push(re), o.push({ object: re }), _ = void 0;
  }, Q = (re, N) => {
    h = !1, v(), b(), x(!1), i = { type: "para", marker: re, content: [] }, N && (i.content = [ar(N)]), f().push(i);
  }, $e = () => {
    _ && (Q(_.marker, _.value), _ = void 0);
  };
  let be;
  const tr = (re) => {
    if (!be)
      return;
    let { value: N } = be;
    be = void 0, re && N.endsWith(`
`) && (N = N.slice(0, -1));
    const G = N.indexOf("|"), ue = G >= 0 ? is(N.slice(G + 1), Pu) : void 0, Ee = G >= 0 ? N.slice(0, G) : N, Z = G >= 0 && (!ue || !!Ee && !!ue[Nu]), Me = Z ? void 0 : ue, yr = Z ? N : Ee, Rt = {
      type: "periph",
      ...yr ? { [Nu]: ar(yr) } : {},
      ...Me
    };
    Rt.content = [], f().push(Rt), u = Rt, i = void 0;
  };
  let Le;
  const nn = () => {
    if (Le) {
      if (Le.shape === "para")
        Q(dn, Le.value);
      else {
        const re = { type: "char", marker: dn, content: [] };
        Le.value && (re.content = [ar(Le.value)]), y().push(re), o.push({ object: re });
      }
      Le = void 0;
    }
  }, mr = rk(e, t?.getMarker ?? ur, n);
  for (let re = 0; re < mr.length; re++) {
    const N = mr[re];
    if (_) {
      if (N.kind === "text") {
        _.value += N.text;
        continue;
      }
      if (_.shape === "char" && N.kind === "end" && N.marker.replace(/^\+/, "") === _.marker) {
        if (_.value.trim() === "") {
          y().push({ type: "char", marker: _.marker, content: [] }), _ = void 0, W();
          continue;
        }
        Object.assign(_.target, {
          [_.attrName]: ar(_.value.trim())
        });
        const G = _.marker;
        if (_ = void 0, G === "ca") {
          const ue = mr[re + 1];
          ue?.kind === "text" && /^[\s\u200B]*$/.test(ue.text) && re++;
        }
        continue;
      }
      if (_.shape === "para" && (N.kind === "para" || N.kind === "chapter")) {
        const G = _.value.replace(/[\s\u200B]+$/, "");
        G === "" ? (Q(_.marker), _ = void 0) : (Object.assign(_.target, { [_.attrName]: ar(G) }), _ = void 0);
      } else {
        B = void 0, (N.kind === "para" || N.kind === "chapter") && _.value.endsWith(`
`) && (_.value = _.value.slice(0, -1)), _.shape === "para" ? $e() : fe(), re--;
        continue;
      }
    }
    if (be) {
      if (N.kind === "text" || N.kind === "optbreak") {
        be.value += N.kind === "text" ? N.text : "//";
        continue;
      }
      tr(N.kind === "para" || N.kind === "chapter"), re--;
      continue;
    }
    if (Le) {
      if (N.kind === "text" || N.kind === "optbreak") {
        Le.value += N.kind === "text" ? N.text : "//";
        continue;
      }
      if (N.kind === "end" && N.marker.replace(/^\+/, "") === dn) {
        const G = Le.value.indexOf("|"), ue = G >= 0 ? is(Le.value.slice(G + 1), dn) : void 0;
        if (ue) {
          const Ee = {};
          for (const [yr, Rt] of Object.entries(ue))
            Ee[yr === "src" ? "file" : yr] = Rt;
          const Z = {
            type: "figure",
            marker: dn,
            ...Ee
          }, Me = Le.value.slice(0, G);
          Me && (Z.content = [ar(Me)]), p(Z), Le = void 0;
          continue;
        }
      }
      nn(), re--;
      continue;
    }
    if (B)
      if (N.kind === "text") {
        if (N.text.includes(`
`) && /^[\s\u200B]*$/.test(N.text)) {
          j += N.text;
          continue;
        }
        W();
      } else if (N.kind === "charOpen" || N.kind === "para") {
        const G = N.kind === "para" || !N.isNested ? Ys(N.marker) : void 0;
        if (G && G.targetTypes.includes(B.type)) {
          j = "", _ = {
            target: B,
            attrName: G.attrName,
            marker: N.marker,
            shape: G.shape,
            value: ""
          };
          continue;
        }
        W(N.kind === "para");
      } else
        W(N.kind === "chapter");
    if (!s && !n && (N.kind === "charOpen" && !N.isNested && N.marker === dn || N.kind === "para" && N.marker === dn)) {
      b(), Le = { shape: N.kind === "charOpen" ? "char" : "para", value: "" };
      continue;
    }
    switch (N.kind) {
      case "text": {
        let G = N.text;
        if (!s && G.endsWith(`
`)) {
          const ue = mr[re + 1];
          (ue === void 0 || ue.kind === "para" || ue.kind === "chapter") && (G = G.slice(0, -1));
        }
        G && p(ar(G));
        break;
      }
      case "para": {
        const G = !s && !n;
        if (G && N.marker === Au) {
          b(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Au, content: [] }, Dr(c).push(l), i = l, h = !1;
          break;
        }
        if (G && l) {
          const ue = Ou.exec(N.marker);
          if (ue && wu(ue)) {
            M(l, N.marker, ue);
            break;
          }
        }
        if (v(), !n && N.marker === Ua) {
          b(), x(!1), A(!1);
          const ue = {
            type: "sidebar",
            marker: Ua,
            content: []
          };
          f().push(ue), d = ue, i = void 0, B = d, h = !1;
          break;
        }
        if (N.marker === gp && d) {
          b(), x(!1), A(!0), i = void 0;
          break;
        }
        if (!n && N.marker === Pu) {
          b(), x(!1), A(!1), F(), be = { value: "" }, i = void 0, h = !1;
          break;
        }
        Q(N.marker);
        break;
      }
      case "verse": {
        x(!1);
        const G = { type: "verse", marker: pp, number: N.number };
        p(G), B = G;
        break;
      }
      case "chapter": {
        b(), x(!1), v(), A(!1), F(), i = void 0;
        const G = {
          type: "chapter",
          marker: hp,
          number: N.number
        };
        r.push(G), B = G, h = !0;
        break;
      }
      case "note": {
        x(!1);
        const G = y();
        s = { type: "note", marker: N.marker, caller: N.caller, content: [] }, a = o.length, G.push(s), B = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !N.isNested) {
          const Ee = Ou.exec(N.marker);
          if (Ee && wu(Ee)) {
            M(l, N.marker, Ee);
            break;
          }
        }
        if (!N.isNested) {
          const Ee = s ? a : 0;
          g(Ee), o.length = Ee;
        }
        const G = y(), ue = { type: "char", marker: N.marker, content: [] };
        G.push(ue), o.push({ object: ue });
        break;
      }
      case "end": {
        const G = N.marker.replace(/^\+/, ""), ue = s ? a : 0, Ee = o.findLastIndex((Z, Me) => Me >= ue && Z.object.marker === G);
        Ee >= 0 ? (dk(o[Ee].object), g(Ee + 1), o.length = Ee) : s && s.marker === G ? x(!0) : (g(ue), o.length = ue, p({ type: "unmatched", marker: `${N.marker}*` }));
        break;
      }
      case "milestone":
        p({ type: "ms", marker: N.marker, ...N.attributes });
        break;
      case "optbreak":
        p({ type: "optbreak" });
        break;
    }
  }
  if (be && tr(!0), Le && nn(), _)
    if (_.shape === "para") {
      const re = _.value.replace(/[\s\u200B]+$/, "");
      re === "" ? Q(_.marker) : Object.assign(_.target, { [_.attrName]: ar(re) }), _ = void 0;
    } else
      _.value.endsWith(`
`) && (_.value = _.value.slice(0, -1)), fe();
  b(), x(!1), A(!1);
  const Et = (re) => {
    for (const N of re)
      typeof N != "string" && N.content && (Et(N.content), N.content.length === 0 && delete N.content);
  };
  return Et(r), r;
}
function dk(e) {
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
  const i = t.slice(n).map((c) => typeof c == "string" ? c : "//").join(""), s = i.indexOf("|"), o = is(i.slice(s + 1), e.marker ?? "");
  if (!o)
    return;
  const a = i.slice(0, s);
  t.length = n, a && t.push(a), Object.assign(e, o);
}
const xn = vo("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Gr = vo("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = vo("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), pr = "marker-trailing-space", yp = 1, fk = "marker", jc = vo("isGutterMarker", {
  parse: (e) => e === !0
});
class wr extends xs {
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
      span: (t) => mk(t) ? {
        conversion: pk,
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
      version: yp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function pk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Sr(t, r) };
}
function Sr(e, t) {
  return Ve(new wr(e, t));
}
function hk(e) {
  return xt(Sr(fk, e), jc, !0);
}
function gk(e) {
  return Xt(e) && ne(e, jc);
}
function mk(e) {
  return e?.tagName === "span";
}
function Xt(e) {
  return e instanceof wr;
}
function bp(e) {
  return e?.type === wr.getType();
}
const jr = "internal-comment", yk = [jr], kp = Object.freeze({}), Fa = Object.freeze({}), za = Object.freeze({}), Ka = Object.freeze({}), Ba = Object.freeze({}), bk = 1, Wn = /* @__PURE__ */ new Map(), $i = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map();
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
  constructor(t = kp, r, n, i, s, o) {
    super(o), this.__typedIDs = Ls(t), this.__typedOnClicks = aa(r), this.__typedOnRemoves = ca(n), this.__typedOnMouseEnters = la(i), this.__typedOnMouseLeaves = ua(s), this.pruneTypedOnClicks(), this.pruneTypedOnRemoves(), this.pruneTypedOnMouseEnters(), this.pruneTypedOnMouseLeaves(), this.syncTypedOnClicksToRegistry(), this.syncTypedOnRemovesToRegistry(), this.syncTypedOnMouseEntersToRegistry(), this.syncTypedOnMouseLeavesToRegistry();
  }
  static getType() {
    return "typed-mark";
  }
  static clone(t) {
    const r = Ls(t.__typedIDs), n = aa(t.__typedOnClicks), i = ca(t.__typedOnRemoves), s = la(t.__typedOnMouseEnters), o = ua(t.__typedOnMouseLeaves);
    return new tt(r, n, i, s, o, t.__key);
  }
  static isReservedType(t) {
    return yk.includes(t);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    return ss().updateFromJSON(t);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      typedIDs: this.getTypedIDs(),
      version: bk
    };
  }
  createDOM(t, r) {
    const n = document.createElement("mark");
    for (const [a, c] of Object.entries(this.__typedIDs)) {
      Vn(n, fn(t.theme.typedMark, a)), c.length > 1 && Vn(n, fn(t.theme.typedMarkOverlap, a));
      for (const l of c)
        Vn(n, fn("annotationId", l));
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
      c !== l && (c === 0 ? l === 1 && Vn(r, d) : l === 0 && ia(r, d), c === 1 ? l === 2 && Vn(r, u) : l === 1 && ia(r, u));
      const f = new Set(o), h = new Set(a);
      for (const y of o)
        h.has(y) || ia(r, fn("annotationId", y));
      for (const y of a)
        f.has(y) || Vn(r, fn("annotationId", y));
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
    const r = this.getWritable(), n = Ls(r.__typedIDs);
    r.__typedIDs = Ls(t), r.dispatchRemovedIDs(n, r.__typedIDs, "removed"), r.pruneTypedOnClicks(), r.pruneTypedOnRemoves(), r.pruneTypedOnMouseEnters(), r.pruneTypedOnMouseLeaves(), r.syncTypedOnClicksToRegistry(), r.syncTypedOnRemovesToRegistry(), r.syncTypedOnMouseEntersToRegistry(), r.syncTypedOnMouseLeavesToRegistry();
    const i = r.mergeWithAdjacentTypedMarks();
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Xs(i), i;
  }
  setTypedOnClicks(t) {
    const r = this.getWritable();
    return r.__typedOnClicks = aa(t), r.pruneTypedOnClicks(), r.syncTypedOnClicksToRegistry(), r;
  }
  getTypedOnClicks() {
    const t = this.getLatest();
    return Ce(t) ? Wn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnRemoves(t) {
    const r = this.getWritable();
    return r.__typedOnRemoves = ca(t), r.pruneTypedOnRemoves(), r.syncTypedOnRemovesToRegistry(), r;
  }
  getTypedOnRemoves() {
    const t = this.getLatest();
    return Ce(t) ? $i.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseEnters(t) {
    const r = this.getWritable();
    return r.__typedOnMouseEnters = la(t), r.pruneTypedOnMouseEnters(), r.syncTypedOnMouseEntersToRegistry(), r;
  }
  getTypedOnMouseEnters() {
    const t = this.getLatest();
    return Ce(t) ? Hn.get(t.getKey()) ?? {} : {};
  }
  setTypedOnMouseLeaves(t) {
    const r = this.getWritable();
    return r.__typedOnMouseLeaves = ua(t), r.pruneTypedOnMouseLeaves(), r.syncTypedOnMouseLeavesToRegistry(), r;
  }
  getTypedOnMouseLeaves() {
    const t = this.getLatest();
    return Ce(t) ? Gn.get(t.getKey()) ?? {} : {};
  }
  addID(t, r, n, i, s, o) {
    const a = this.getWritable();
    if (!Ce(a))
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Xs(s);
  }
  hasNoIDsForEveryType() {
    return Object.values(this.getTypedIDs()).every((t) => t === void 0 || t.length === 0);
  }
  insertNewAfter(t, r = !0) {
    const n = ss(this.__typedIDs, this.getTypedOnClicks());
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Wn.delete(r.getKey()), $i.delete(r.getKey()), Hn.delete(r.getKey()), Gn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    if (this.__typedOnClicks === void 0 || this.__typedOnClicks === Fa) {
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
    if (!this.__typedOnClicks || this.__typedOnClicks === Fa) {
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
      const t = $i.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      $i.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    $i.set(this.getKey(), this.__typedOnRemoves);
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
    if (this.__typedOnMouseLeaves === void 0 || this.__typedOnMouseLeaves === Ba) {
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
    const i = kk(t, r);
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
    for (; Ce(t) && Lu(t.getTypedIDs(), this.getTypedIDs()); )
      this.mergeWithPreviousTypedMark(t), t = this.getPreviousSibling();
    let r = this.getNextSibling();
    for (; Ce(r) && Lu(this.getTypedIDs(), r.getTypedIDs()); )
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
    const r = Tk(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = xk(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = _k(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ck(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Ls(e = kp) {
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
function Ur(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function $u(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function kk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Lu(e, t) {
  const r = $u(e), n = $u(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function Tk(e, t) {
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
function xk(e, t) {
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
function _k(e, t) {
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
function Ck(e, t) {
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
function Iu(e) {
  return `external-${e}`;
}
function ss(e, t, r, n, i) {
  return Ve(new tt(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof tt;
}
function Tp(e) {
  return e?.type === tt.getType();
}
function Xs(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function xp(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, h = u ? c : l;
  let y, p;
  for (let g = 0; g < d; g++) {
    const b = a[g];
    if (L(p) && p.isParentOf(b))
      continue;
    const x = g === 0, v = g === d - 1;
    let M = null;
    if (E(b)) {
      const A = b.getTextContentSize(), F = x ? f : 0, B = v ? h : A;
      if (F === 0 && B === 0)
        continue;
      const j = b.splitText(F, B);
      M = j.length > 1 && (j.length === 3 || x && !v || B === A) ? j[1] : j[0];
    } else {
      if (Ce(b))
        continue;
      L(b) && b.isInline() && (M = b);
    }
    if (M !== null) {
      if (M && M.is(y))
        continue;
      const A = M.getParent();
      (A == null || !A.is(y)) && (p = void 0), y = A, p === void 0 && (p = ss(), p.addID(t, r, n, i, s, o), M.insertBefore(p)), p.append(M);
    } else
      y = void 0, p = void 0;
  }
  t === jr && L(p) && (u ? p.selectStart() : p.selectEnd());
}
function vk(e, t, r) {
  let n = e;
  for (; n !== null; ) {
    if (Ce(n))
      return n.getTypedIDs()[t];
    if (E(n) && r === n.getTextContentSize()) {
      const i = n.getNextSibling();
      if (Ce(i))
        return i.getTypedIDs()[t];
    }
    n = n.getParent();
  }
}
const Sk = ["type", "marker", "content"], ja = "unknown", _p = 1, Mk = /* @__PURE__ */ new Set(["optbreak", "ref"]);
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
      [ja]: (t) => Ak(t) ? {
        conversion: Ek,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Vc().updateFromJSON(t);
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
    return Mk.has(this.getTag());
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
      version: _p
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
    if (So(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function Ek(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Vc(t, r) };
}
function Vc(e, t, r) {
  return Ve(new $n(e, t, r));
}
function Ak(e) {
  return e?.tagName.toLowerCase() === ja;
}
function Fe(e) {
  return e instanceof $n;
}
const Cp = 1, Pk = "attribute-run";
function da(e) {
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
    return vp(t.runKind).updateFromJSON(t);
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
    t.classList.add(Pk);
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
      version: Cp
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
function vp(e) {
  return Ve(new qr(e));
}
function Ue(e) {
  return e instanceof qr;
}
const os = "id", Sp = 1, Nk = [
  "type",
  "marker",
  "code",
  "content"
];
class zt extends er {
  __marker = os;
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
    return new zt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Mp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return qy(t);
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
      version: Sp
    };
  }
}
function Mp(e, t) {
  return Ve(new zt(e, t));
}
function gt(e) {
  return e instanceof zt;
}
function Ep(e) {
  return e?.type === zt.getType();
}
const Qs = "c", Ap = 1, Ok = [
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
  /**
   * A chapter holds its own marker bytes and nothing else, and serializes as its number alone, so
   * it must never take in another block's content: whatever landed in it would stay on screen and
   * be dropped on save. Reporting that it cannot be empty is what keeps Lexical from treating it as
   * a block to merge a following paragraph into when a deletion starts on the chapter line, and
   * what removes the chapter once every byte of its marker is deleted. Editors that let the caret
   * into a chapter must handle splits there themselves, since Lexical then has no block to split
   * (see the platform editor's `chapterLine.utils.ts`).
   */
  canBeEmpty() {
    return !1;
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
      version: Ap
    };
  }
}
function Pp(e, t, r, n, i) {
  return Ve(new qt(e, t, r, n, i));
}
function ve(e) {
  return e instanceof qt;
}
function wk(e) {
  return e?.type === qt.getType();
}
const Np = [
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
], Op = [
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
], qk = [
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
  ...Np,
  ...Op
], wp = 1, Rk = ["type", "marker", "content"];
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
    return t !== void 0 && (qk.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && Np.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Op.includes(t);
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
      span: (t) => Lk(t) ? {
        conversion: $k,
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
    return Du(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Du(r, this.__marker, n)), !1;
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
function Du(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function $k(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Mr(t) };
}
function Mr(e, t) {
  return Ve(new ye(e, t));
}
function Lk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ye.isValidMarker(t) && e.classList.contains(ye.getType());
}
function I(e) {
  return e instanceof ye;
}
function Ik(e) {
  return e?.type === ye.getType();
}
const qp = 1, Dk = "c", Rp = "span";
class hr extends xs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Dk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => $p(t) ? {
        conversion: Uk,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Wc().updateFromJSON(t);
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
    const t = document.createElement(Rp);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Js, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && On(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Js, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: qp
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
function Uk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Wc(t) };
}
function Wc(e, t, r, n, i, s) {
  return Ve(new hr(e, t, r, n, i, s));
}
function $p(e) {
  return e ? e.classList.contains(Js) && e.tagName.toLowerCase() === Rp : !1;
}
function Cs(e) {
  return e instanceof hr;
}
function Fk(e) {
  return e?.type === hr.getType();
}
const Lp = 1;
class Jr extends qc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Jr(t.__key);
  }
  static importJSON(t) {
    return Gt().updateFromJSON(t);
  }
  getMarker() {
    return Ht;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Lp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Gt();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Gt() {
  return Ve(new Jr());
}
function fr(e) {
  return e instanceof Jr;
}
function Po(e) {
  return e?.type === Jr.getType();
}
const zk = [
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
  Ht,
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
], Ip = 1, Kk = ["type", "marker", "content"];
class rt extends qc {
  __marker;
  __unknownAttributes;
  constructor(t = Ht, r, n) {
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
    return t !== void 0 && (zk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Bk,
        priority: 1
      })
    };
  }
  static importJSON(t) {
    return ai().updateFromJSON(t);
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
      version: Ip
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ai(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Bk(e) {
  const t = e.getAttribute("data-marker") ?? void 0, r = ai(t);
  if (e.style) {
    r.setFormat(e.style.textAlign);
    const n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && r.setIndent(n);
  }
  return { node: r };
}
function ai(e, t) {
  return Ve(new rt(e, t));
}
function ce(e) {
  return e instanceof rt;
}
function Hc(e) {
  return e?.type === rt.getType();
}
const Zs = "v", Dp = 1, jk = [
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
    return Up().updateFromJSON(t);
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
      version: Dp
    };
  }
}
function Up(e, t, r, n, i, s) {
  return Ve(new pt(e, t, r, n, i, s));
}
function we(e) {
  return e instanceof pt;
}
function Fp(e) {
  return e?.type === pt.getType();
}
const Vk = "​", ci = Vk;
var Uu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(Uu || (Uu = {}));
var Fu;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Fu || (Fu = {}));
function Wk() {
  return ge(ci);
}
function Hk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ci, ""));
}
function vs(e) {
  return e.length > 0 && e.includes(ci) && e.replaceAll(ci, "") === "";
}
function Gc(e) {
  return E(e) && vs(e.getTextContent());
}
function zp(e) {
  return wk(e) || Fk(e);
}
function Ge(e) {
  return ve(e) || Cs(e);
}
function Kp(e, t) {
  return e.find((r) => Ge(r) && r.getNumber() === t.toString());
}
function Gk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ge(r));
}
function zu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Bp(e) {
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
function Qt(e) {
  return Ye(e, K) ?? void 0;
}
function Jk(e) {
  return gt(e) || ve(e) || I(e) || Cs(e) || fr(e) || He(e) || ce(e) || K(e) || we(e) || Fe(e);
}
function jp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Yk(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Nt(e) {
  return Se(e) || gt(e);
}
function Se(e) {
  return ce(e) || fr(e);
}
function Xk(e) {
  return Hc(e) || Po(e);
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
function _n(e, t) {
  const r = ne(t, xn), n = !!(e.cid && r), i = !e.cid && !r;
  return e.style === t.getMarker() && (i || n && e.cid === r);
}
function Qk(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? By(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function Zk(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function li(e) {
  return e?.type === Be.getType();
}
function eT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function tT(e, t) {
  if (!t)
    return e;
  const r = t.getIndexWithinParent();
  return e.splice(r + 1, e.length - r - 1);
}
function qe(e, t = !1) {
  return `\\${t ? "+" : ""}${e}`;
}
function ot(e, t = !1) {
  return `\\${t ? "+" : ""}${e}*`;
}
function Vp(e, t, r) {
  const n = qe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Ut(e, t) {
  let r = qe(e);
  return t && (r += `${R}${t}`), r += " ", r;
}
function rT(e) {
  const t = e[_s];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Wp(e) {
  return Zc(e) || bp(e) && e.textType === "marker" || li(e) && rT(e) === "attribute" ? "" : li(e) && e.text !== R ? e.text : Ik(e) ? e.children.map((t) => Wp(t)).join("") : "";
}
function nT(e) {
  return e.map((r) => Wp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Ot(e) {
  return " " + e + R;
}
function Jc(e) {
  const t = [];
  for (const r of e) {
    if (!I(r))
      continue;
    const n = Hp(r);
    n !== Ft && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Hp(e) {
  return w(e) || Rr(e) || E(e) && ne(e, oe) === "attribute" ? "" : E(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => Hp(t)).join("") : "";
}
function Rr(e) {
  return Xt(e) && e.getTextType() === "marker";
}
function Kt(e) {
  return w(e) || Rr(e);
}
function Ku(e, t) {
  iT(e, t), e.setMarker(t);
}
function iT(e, t) {
  const r = e.getMarker(), n = qe(r), i = qe(r, !0), s = ot(r), o = ot(r, !0), a = ye.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Kt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (w(c))
        c.setMarker(t);
      else if (Rr(c)) {
        const f = l.startsWith(qe("", !0));
        c.setTextContent(d ? qe(t, f) : ot(t, f));
      }
    }
  });
}
function ze(e, t = Ry) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Pe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Gp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Yc(e) {
  if (!P(e))
    return Bu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return Bu(e) ?? t ?? void 0;
  } catch (n) {
    if (Gp(n))
      return t ?? void 0;
    throw n;
  }
}
function sT(e, t) {
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
function Jp(e) {
  return !!e && e.includes("-");
}
function Yp(e) {
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
function Qc(e) {
  if (!e)
    return !1;
  if (wn(e) || w(e) || Rr(e) || Ue(e) || Xt(e) && e.getTextType() === "attribute")
    return !0;
  if (E(e)) {
    const t = ne(e, oe);
    if (t === pr || t === "attribute")
      return !0;
    const r = e.getTextContent();
    if (r === "" || r === R || vs(r))
      return !0;
  }
  return !1;
}
function No() {
  const e = ge(R);
  return xt(e, oe, pr), e.setMode("token"), e;
}
function oT(e) {
  const t = e.getTextContent();
  t.startsWith(R) || e.setTextContent(R + t);
}
function Ln(e) {
  return E(e) && ne(e, oe) === pr;
}
function Xp(e) {
  const t = e.getFirstChild();
  if (!Kt(t) || t === null || Ln(t.getNextSibling()))
    return !1;
  const r = O();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(t) || n.is(e))
    return !0;
  const i = t.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function Ti(e) {
  const t = [];
  let r;
  const n = () => {
    r && (t.push({ type: "text", segments: r.segments, length: r.length }), r = void 0);
  }, i = (s) => {
    if (!Qc(s)) {
      if (Ce(s)) {
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
function Oo(e) {
  let t = e.getParent();
  for (; t && Ce(t); )
    t = t.getParent();
  return t;
}
function aT(e, t) {
  return Ti(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function cT(e, t) {
  const r = Oo(e);
  if (!r)
    return;
  const n = Ti(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function lT(e, t) {
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
function Qp(e, t) {
  const r = Ti(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Qc(n))
    return Qp(e, t + 1);
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
function uT(e, t) {
  if (t <= 0)
    return 0;
  const r = Ti(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? dT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function dT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const fT = 1;
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
      version: fT
    };
  }
}
function lt(e, t, r) {
  return Ve(new gr(e, t, void 0, r));
}
function w(e) {
  return e instanceof gr;
}
function Zc(e) {
  return e?.type === gr.getType();
}
function en(e) {
  return e.getTextContent() === gn(e.getMarker(), e.getMarkerSyntax(), e.getNested());
}
function pT(e) {
  e.setTextContent(gn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function gn(e, t, r = !1) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : qe(e, r);
}
const hT = /* @__PURE__ */ new Set(["closed"]);
function lr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !hT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function Zp(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function eh(e) {
  const t = Object.keys(e).filter((n) => !Vb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function th(e, t, r, n) {
  return Zp(
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
  return e.getChildren().find((t) => w(t) && t.getMarkerSyntax() === "closing" && t.getMarker() === e.getMarker());
}
function gT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Yi(e) === void 0 && rh(e) === void 0;
}
function rh(e) {
  return e.getChildren().find((t) => E(t) && ne(t, oe) === "attribute");
}
function as(e, t) {
  return Ss(e.getNextSibling(), t);
}
const mT = /^[ \u00A0]+$/;
function el(e) {
  if (en(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = qe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && mT.test(r.slice(t.length));
}
function Ss(e, t) {
  let r, n, i, s;
  return Ue(e) && e.getRunKind() === t && (s = e, e = e.getFirstChild()), w(e) && e.getMarkerSyntax() === "opening" && e.getMarker() === t && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  el(e) && (r = e, e = e.getNextSibling()), E(e) && ne(e, oe) === "attribute" && (n = e, e = e.getNextSibling()), w(e) && e.getMarkerSyntax() === "closing" && e.getMarker() === t && en(e) && (i = e), { opener: r, value: n, closer: i, wrapper: s };
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
  if (E(n) && n.getTextContent() === Ot(e.getCaller()))
    return n;
}
function nh(e) {
  const t = cs(e);
  return t ? Ss(t.getNextSibling(), "cat") : {};
}
function xi(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || w(t)) && ne(t, oe) !== "attribute")
    return t;
}
function ih(e) {
  const t = xi(e);
  return t ? Ss(t.getNextSibling(), "ca") : {};
}
function sh(e) {
  const t = xi(e);
  if (!t)
    return;
  const r = Ss(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function oh(e) {
  const t = sh(e);
  return t ? Ss(t.getNextSibling(), "cp") : {};
}
function ah(e) {
  const t = e.getParent();
  if (!I(t))
    return;
  const r = t.getMarker();
  if (!(r !== "va" && r !== "vp"))
    for (let n = t.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (we(n))
        return n;
      if (!(w(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || E(n) && ne(n, oe) === "attribute" || I(n) && (n.getMarker() === "va" || n.getMarker() === "vp") || Ue(n)))
        return;
    }
}
function wo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ue(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), w(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  el(s) && (t = s, s = s.getNextSibling()), E(s) && ne(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), w(s) && s.getMarkerSyntax() === "selfClosing" && en(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function tl(e) {
  return I(Oo(e));
}
function Va(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? tl(t) : t.getChildren().some((i) => I(i) && i.getMarker() === r) ? !0 : void 0;
}
function yT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = Va(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function qo(e) {
  return E(e) && e.getType() === Be.getType() && ne(e, oe) !== "attribute";
}
function rl(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Va(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return w(r) ? Va(r, t) === !0 ? "spacer" : void 0 : qo(r) ? r.getTextContent().startsWith(R) ? void 0 : "prefix" : "spacer";
}
function bT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (w(t) && rl(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function ch(e, t) {
  const r = O();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function lh(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = rl(t, e);
    if (r !== void 0 && !ch(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(R + n.getTextContent());
      } else
        t.insertAfter(ge(R));
  });
}
function uh(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && rl(t, e) !== void 0 && ch(t, e)) : !1;
}
const kT = "file", TT = "src", xT = "colspan", _T = "category", CT = "alt", vT = "closed", ST = "false";
function MT(e) {
  return e[vT] !== ST;
}
function ET(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === kT ? TT : t,
    r
  ]));
}
function dh(e, t) {
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
function fh(e, t, r) {
  const n = r ?? {}, i = MT(n);
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
        opening: `\\${dh(t, n[xT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: lr(ET(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [_T]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + lr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [CT]: s, ...o } = n;
      return {
        opening: `\\periph ${s ?? ""}`,
        attributes: lr(o, void 0),
        closingAttributes: "",
        closing: ""
      };
    }
    default:
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: lr(n, void 0),
        closing: i ? `\\${t}*` : ""
      };
  }
}
const Ct = { wantsRun: !1, valueText: void 0 }, $r = {};
function fa(e, t) {
  if (t === "va")
    return e;
  const r = as(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function nl(e) {
  const t = O();
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
function Ro(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = O();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function AT(e) {
  return Ue(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : w(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && ne(e, oe) === "attribute";
}
function PT(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "va" || n === "vp" ? n : void 0;
  }
  if (!E(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "va" || r === "vp" ? r : void 0;
}
function pa(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (we(t))
      return t;
    if (!AT(t))
      return;
  }
}
function ju(e) {
  return {
    kind: e,
    ownerPredicate: (t) => we(t),
    ownerOf: (t) => {
      if (Ue(t))
        return t.getRunKind() === e ? pa(t) : void 0;
      const r = t.getParent();
      return Ue(r) ? r.getRunKind() === e ? pa(r) : void 0 : PT(t) === e ? pa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!we(t))
        return Ct;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Ct : { wantsRun: !0, valueText: R + r };
    },
    scanPieces: (t) => we(t) ? as(fa(t, e), e) : $r,
    graceSite: (t, r) => we(t) ? !r.opener && !r.closer ? nl(fa(t, e)) : Ro(r) : !1,
    settleScope: "owner",
    deletionPolicy: "retokenize",
    byteFormat: {
      writer: "wrapper",
      runKind: e,
      glyphs: "with-value",
      glyphMarker: () => e,
      closerSyntax: "closing",
      insertRunAfter: (t) => we(t) ? fa(t, e) : void 0
    }
  };
}
const NT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => Ct,
  scanPieces: () => $r,
  graceSite: (e) => I(e) && uh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, OT = {
  kind: "char",
  ownerPredicate: (e) => I(e),
  ownerOf: (e) => {
    if (!E(e) || ne(e, oe) !== "attribute")
      return;
    const t = e.getParent();
    return I(t) ? t : void 0;
  },
  expectedPieces: (e) => {
    if (!I(e) || Yi(e) === void 0)
      return Ct;
    const t = lr(e.getUnknownAttributes() ?? {}, Eo(e.getMarker()));
    return t === "" ? Ct : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => I(e) ? { value: rh(e) } : $r,
  graceSite: (e, t) => {
    if (!I(e) || t.value)
      return !1;
    const r = Yi(e);
    if (!r)
      return !1;
    const n = O();
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
    insertRunBefore: (e) => I(e) ? Yi(e) : void 0
  }
};
function ph(e) {
  if (w(e))
    return e.getMarker() === "cat";
  if (!E(e) || ne(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return w(t) && t.getMarker() === "cat";
}
function wT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = cs(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!ph(n))
        return;
    }
}
const qT = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (Ue(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ue(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : ph(e) ? wT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return Ct;
    const t = e.getCategory();
    return t === void 0 ? Ct : { wantsRun: !0, valueText: R + t };
  },
  scanPieces: (e) => K(e) ? nh(e) : $r,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = cs(e);
      return r !== void 0 && nl(r);
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
    insertRunAfter: (e) => K(e) ? cs(e) : void 0
  }
};
function RT(e) {
  return Ue(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : w(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && ne(e, oe) === "attribute";
}
function $T(e) {
  if (w(e)) {
    const n = e.getMarker();
    return n === "ca" || n === "cp" ? n : void 0;
  }
  if (!E(e) || ne(e, oe) !== "attribute")
    return;
  const t = e.getPreviousSibling();
  if (!w(t))
    return;
  const r = t.getMarker();
  return r === "ca" || r === "cp" ? r : void 0;
}
function LT(e) {
  const t = e.getParent();
  if (!ve(t))
    return;
  const r = xi(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!RT(n))
        return;
    }
}
function Vu(e) {
  const t = (r) => ve(r) ? e === "ca" ? xi(r) : sh(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => ve(r),
    ownerOf: (r) => {
      if (Ue(r))
        return r.getRunKind() === e && ve(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ue(n) ? n.getRunKind() === e && ve(n.getParent()) ? n.getParent() ?? void 0 : void 0 : $T(r) === e ? LT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!ve(r))
        return Ct;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Ct : { wantsRun: !0, valueText: R + n };
    },
    scanPieces: (r) => ve(r) ? e === "ca" ? ih(r) : oh(r) : $r,
    graceSite: (r, n) => {
      if (!ve(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && nl(i);
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
function hh(e) {
  if (w(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && ne(e, oe) === "attribute";
}
function IT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (He(t)) {
      const r = w(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!hh(t))
      return;
  }
}
const DT = {
  kind: "milestone",
  ownerPredicate: (e) => He(e),
  ownerOf: (e) => {
    const t = Ue(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ue(e.getParent()) ? e.getParent() : hh(e) ? e : void 0;
    if (!t || Ue(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ue(t) ? He(r) ? r : void 0 : IT(t);
  },
  expectedPieces: (e) => {
    if (!He(e))
      return Ct;
    const t = th(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = lr(t, Ao(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : R + r };
  },
  scanPieces: (e) => {
    if (!He(e))
      return $r;
    const { opening: t, attribute: r, closing: n, wrapper: i } = wo(e);
    return { opener: t, value: r, closer: n, wrapper: i };
  },
  graceSite: (e, t) => {
    if (!He(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = O();
      if (!P(r) || !r.isCollapsed())
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
    glyphMarker: (e) => He(e) ? e.getMarker() : "",
    closerSyntax: "selfClosing",
    insertRunAfter: (e) => e
  }
}, UT = fh("optbreak", void 0, void 0).opening, FT = {
  kind: "optbreak",
  ownerPredicate: (e) => Fe(e) && e.getTag() === "optbreak",
  ownerOf: (e) => {
    const t = e.getParent();
    if (!(!Fe(t) || t.getTag() !== "optbreak"))
      return E(e) || Xt(e) ? t : void 0;
  },
  // `valueText` is the RENDERED BYTES the kind owes — so `$runDiverges`'s value-byte comparison
  // classifies the scanned token by what it actually spells: a canonical `//` is at rest, a
  // byte-damaged or deleted token diverges. With `valueText: undefined` (the pre-audit shape)
  // both answers were backwards: a canonical token's text never equalled `undefined`, so a
  // CANONICAL optbreak read as diverged while a GUTTED one read as at rest. Nothing ever WRITES
  // from this (the `"read-only"` writer returns before any sync write), so the value is purely
  // classificatory.
  expectedPieces: () => ({ wantsRun: !0, valueText: UT }),
  scanPieces: (e) => Fe(e) ? { value: e.getFirstChild() ?? void 0 } : $r,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, zT = {
  kind: "opaqueUnknown",
  // Scope is every UnknownNode kind EXCEPT optbreak — `ownerPredicate` excludes it explicitly, so
  // `optbreakDescriptor` above is the sole owner of that kind. A non-optbreak UnknownNode is a
  // permanent Tier-2 sentinel whose bytes are read-only rendering, never re-tokenized: it owns no
  // display run, but is recognized so the settle reports it handled and the caller never routes one
  // through a rebuild that would bail. (A pended optbreak that does NOT match `optbreakDescriptor`'s
  // `remove-owner` shape — i.e. isn't entirely absent — falls through unhandled by either
  // descriptor instead; harmlessly inert, since `$settleScopeForNode` refuses every `UnknownNode`
  // outright, so the caller's `$requestTier2ForNode` fallback always bails on it too.)
  ownerPredicate: (e) => Fe(e) && e.getTag() !== "optbreak",
  ownerOf: () => {
  },
  expectedPieces: () => Ct,
  scanPieces: () => $r,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, KT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => Ct,
  scanPieces: () => $r,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, ls = [
  NT,
  OT,
  ju("va"),
  ju("vp"),
  qT,
  Vu("ca"),
  Vu("cp"),
  DT,
  FT,
  zT,
  KT
], BT = new Map(ls.map((e) => [e.kind, e]));
function Cn(e) {
  const t = BT.get(e);
  if (!t)
    throw new Error(`No display-run descriptor registered for kind "${e}"`);
  return t;
}
function vn(e) {
  for (const t of ls) {
    const r = t.ownerOf(e);
    if (r)
      return { owner: r, kind: t.kind };
  }
}
function gh(e) {
  return vn(e) !== void 0;
}
const to = "unmatched", mh = 2;
function Xi(e) {
  return `\\${e}`;
}
class Lr extends Be {
  __marker;
  constructor(t = "", r) {
    super(Xi(t), r), this.__marker = t, this.__mode = 1;
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
      [to]: (t) => VT(t) ? {
        conversion: jT,
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Mu), r.title = Wu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Wu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(to);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Mu), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: mh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function yh(e) {
  return e.getTextContent() === Xi(e.getMarker());
}
function Wu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function jT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: il(t) };
}
function il(e) {
  return Ve(new Lr(e));
}
function VT(e) {
  return e?.tagName.toLowerCase() === to;
}
function tn(e) {
  return e instanceof Lr;
}
const bh = "table", Wa = "immutable-table", kh = 1, WT = ["type", "marker", "content"];
class In extends er {
  __unknownAttributes;
  constructor(t, r) {
    super(r), this.__unknownAttributes = t;
  }
  static getType() {
    return Wa;
  }
  static clone(t) {
    return new In(t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return HT().updateFromJSON(t);
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
      type: Wa,
      ...t !== void 0 && { unknownAttributes: t },
      version: kh
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function HT(e) {
  return Ve(new In(e));
}
function Th(e) {
  return e instanceof In;
}
function GT(e) {
  return e?.type === Wa;
}
const xh = "table:row", Hu = "immutable-table-row", _h = 1, Ha = "tr", JT = ["type", "marker", "content"];
class _i extends er {
  __marker;
  __unknownAttributes;
  constructor(t = Ha, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Hu;
  }
  static clone(t) {
    return new _i(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return YT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ha).setUnknownAttributes(t.unknownAttributes);
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
      type: Hu,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: _h
    };
  }
}
function YT(e, t) {
  return Ve(new _i(e, t));
}
const Ch = "table:cell", Gu = "immutable-table-cell", vh = 1, Ga = "tc1", XT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function QT(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class Ci extends er {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Ga, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Gu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new Ci(r, n, i, s, o);
  }
  static importJSON(t) {
    return ZT().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setMarker(t.marker ?? Ga).setAlign(t.align).setColspan(t.colspan).setUnknownAttributes(t.unknownAttributes);
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
    const n = QT(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Gu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: vh
    };
  }
}
function ZT(e, t, r, n) {
  return Ve(new Ci(e, t, r, n));
}
function $o(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Zt(e, t) {
  const r = $o(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function us(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function ex(e) {
  return e.getChildren().some((t) => w(t) && t.getMarkerSyntax() === "closing");
}
function tx(e) {
  return us(e) ? void 0 : { closed: "false" };
}
function rx(e, t, r, n) {
  const i = t.getMarker(), s = tl(t), o = ex(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    qo(a) && !a.getTextContent().startsWith(R) && a.setTextContent(R + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function Sn(e) {
  return Ye(e, I) ?? void 0;
}
function sl(e) {
  let t = e.getParent();
  for (; I(t); )
    t = t.getParent();
  return t;
}
function Ja(e) {
  const t = Sh(e);
  return e.getChildren().every((r) => w(r) || t && ne(r, oe) === "attribute" || E(r) && r.getTextContent().replaceAll(R, "") === "");
}
function Sh(e) {
  return us(e);
}
function nx(e, t) {
  const r = e.getUnknownAttributes(), n = r ? lr(r, Eo(e.getMarker())) : "";
  n !== "" && t.insertAfter(ge(n)), e.remove();
}
function ix(e, t) {
  if (us(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", tl(e)));
}
function sx(e, t) {
  return I(e) && !us(e) && !us(t);
}
function ox(e, t, r) {
  Ja(e) && e.getChildren().forEach((i) => {
    w(i) || i.remove();
  });
  const [n] = t;
  r && qo(n) && !n.getTextContent().startsWith(R) && n.setTextContent(R + n.getTextContent()), e.append(...t);
}
function ax(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Sh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = w(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, oe) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = sx(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      ox(e, o, n);
    else {
      const l = Mr(t.getMarker(), tx(t));
      rx(l, t, o, n), e.insertAfter(l), Ja(l) ? l.remove() : c = l;
    }
  i && !a && ix(t, n), Ja(t) && nx(t, c);
}
function ui(e, t) {
  let r = e.getParent();
  for (; I(r); )
    ax(e, r, t), r = e.getParent();
}
function ol(e) {
  if (E(e) && !w(e)) {
    const t = e.getTextContent().startsWith(R) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !w(r));
    if (t) {
      ol(t);
      return;
    }
    e.selectEnd();
  }
}
const ri = /* @__PURE__ */ new WeakMap();
function cx(e, t) {
  return ri.set(e, t), () => {
    ri.get(e) === t && ri.delete(e);
  };
}
function Ju(e) {
  return ri.get(e);
}
function lx(e) {
  return ri.get(bi())?.has(e.getKey()) ?? !1;
}
function ux(e) {
  ri.get(bi())?.add(e.getKey());
}
function dx(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ya(e) {
  return !!(e.opener || e.value || e.closer);
}
function Yu(e) {
  return /^\s/.test(e);
}
function al(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Yu(t) || !Yu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Lo(e, t, r) {
  return r.wantsRun ? al(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : dx(t);
}
function fx(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return al(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Mh(e, t) {
  return !Ya(e.scanPieces(t));
}
function Ms(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Lo(e, n, r))
    return !1;
  const i = O();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || eo(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function px(e, t, r, n) {
  return !r.wantsRun || Ya(n) || jy(ns) ? !1 : bi().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ya(e.scanPieces(i));
  });
}
function hx(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Xu(e) {
  const t = ge(e);
  return xt(t, oe, "attribute"), t;
}
function gx(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = vp(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function mx(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Xu(n.valueText));
    return;
  }
  const l = gx(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = lt(o(t), "opening"), h = l.getFirstChild();
    return h ? h.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : E(u) ? al(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Xu(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function ds(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Lo(e, i, n) && !lx(t)) {
    if (px(e, t, n, i)) {
      ux(t);
      return;
    }
    if (!Ms(e, t)) {
      if (!n.wantsRun) {
        hx(i);
        return;
      }
      mx(e, t, i, n);
    }
  }
}
function yx(e, t, r) {
  ds(e, t), t.isAttached() && Ms(e, t) && r.add(t.getKey());
}
function cl(e) {
  if (!E(e))
    return !1;
  if (w(e) || we(e) || tn(e))
    return !0;
  const t = ne(e, oe);
  return t === "attribute" || t === pr;
}
function ll(e, t) {
  return w(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && en(e) && I(e.getParent())) : !1;
}
function bx() {
  const e = O();
  return P(e) ? ll(e.focus.getNode(), e.focus.offset) : !1;
}
function Eh(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && cl(t) ? t : void 0;
}
function kx(e) {
  const t = Eh(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function Tx(e) {
  const t = Eh(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function Qu(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function Zu(e, t) {
  e.set(t.key, t.offset, t.type);
}
function xx(e, t) {
  let r = Tx(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!cl(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function ed(e, t) {
  const r = xx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Ah(e) {
  if (e.isCollapsed()) {
    const a = kx(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [Qu(r), Qu(n)], s = ed(r, "next"), o = ed(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (Zu(r, i[0]), Zu(n, i[1]), !1) : !0;
}
const ro = "verse-block", Ph = 1, _x = "verse-block";
class vi extends er {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return ro;
  }
  static clone(t) {
    return new vi(t.__number, t.__key);
  }
  static importJSON(t) {
    return Cx().updateFromJSON(t);
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
    return Yp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(_x), td(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && td(r, this.__number), !1;
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
      version: Ph
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function td(e, t) {
  const { start: r, end: n } = Yp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), rd(e, "data-verse-start", i ? r : NaN), rd(e, "data-verse-end", i ? n : NaN);
}
function rd(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function Cx(e) {
  return Ve(new vi(e));
}
function fs(e) {
  return e instanceof vi;
}
function vx(e) {
  return e?.type === ro;
}
const Sx = [
  zt,
  hr,
  qt,
  pt,
  ye,
  Ae,
  Yt,
  gr,
  $n,
  wr,
  Lr,
  rt,
  Jr,
  In,
  _i,
  Ci,
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
    with: () => Gt(),
    withKlass: Jr
  }
], di = {
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
}, Mx = {
  paragraph: k.Paragraph,
  character: k.Character,
  note: k.Note,
  milestone: k.Milestone
};
function ul(e) {
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
      type: Mx[n.styleType] ?? k.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ur(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function nd(e, t, r) {
  const n = {
    type: Cr,
    version: _r,
    content: e
  }, i = t.serializeEditorState(n, r);
  return Po(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Nh = "v", Oh = 1, Ex = "verse-selected";
class St extends xs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Nh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Nx(t) ? {
        conversion: Px,
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
    const t = this.getShowMarker() ? Ut(this.getMarker(), this.getNumber()) : (
      // ZWSP added so double click word selection works without including this number.
      Gs + this.getNumber() + Gs
    );
    return S(Ax, { nodeKey: this.getKey(), text: t });
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
      version: Oh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Gp(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Ax({ nodeKey: e, text: t }) {
  const [r] = hb(e);
  return S("span", { className: r ? Ex : void 0, children: t });
}
function Px(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: dl(t) };
}
function dl(e, t, r, n, i, s) {
  return Ve(new St(e, t, r, n, i, s));
}
function Nx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Nh;
}
function Dn(e) {
  return e instanceof St;
}
function Ox(e) {
  return e?.type === St.getType();
}
function he(e) {
  return we(e) || Dn(e);
}
function wh(e) {
  return Fp(e) || Ox(e);
}
function wx(e) {
  return qx(e).find((t) => ce(t));
}
function qx(e) {
  return e.some(fs) ? e.flatMap((t) => fs(t) ? t.getChildren() : t) : e;
}
function Io(e) {
  return L(e) ? fs(e) ? e.getChildren().flatMap(Io) : e.getChildren() : [];
}
function Rx(e, t) {
  return Io(e).find((i) => he(i) && Xc(t, i.getNumber()));
}
function $x(e, t) {
  return t === 0 ? wx(e) : e.map((r) => Rx(r, t)).filter((r) => r)[0];
}
function no(e) {
  return Io(e).find((r) => he(r));
}
function qh(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (he(i))
      return i;
  }
}
function Lx(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (he(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ge(r); ) {
    const n = no(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Xa(e) {
  return Io(e).findLast((t) => he(t));
}
function Ix(e) {
  if (!we(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Dx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function Ux(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Dx(t, e, r);
  if (E(e)) {
    const n = Ix(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function id(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Fx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return id(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return Ux(e, t) ? { verseNum: n } : id(e);
}
function zx(e) {
  return Jk(e) || Dn(e);
}
function fl(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(R) && e.setTextContent(`${t} `);
  }
}
function Rh(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Qa(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function Kx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = pl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && L(i) && L(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && L(i)) {
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
      let s = sd(i);
      for (; s && !Ge(s); ) {
        const o = no(s);
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
      const o = no(s);
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
function Bx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = pl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = qh(i, r.getIndexWithinParent())), !n && i) {
      let o = od(i);
      for (; o && !Ge(o); ) {
        const a = Xa(o);
        if (a) {
          n = a;
          break;
        }
        o = od(o);
      }
    }
  } else {
    let s = t.getTopLevelElement()?.getPreviousSibling() ?? null;
    for (; s && !Ge(s); ) {
      const o = Xa(s);
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
function pl(e, t) {
  if (L(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && he(n))
      return n;
    const i = qh(e, t.anchor.offset);
    if (i)
      return i;
    const s = no(e);
    if (s)
      return s;
  }
  return hl(e);
}
function hl(e) {
  if (!e || Ge(e))
    return;
  if (he(e))
    return e;
  let t = zu(e);
  for (; t; ) {
    if (Ge(t))
      return;
    if (he(t))
      return t;
    const r = Xa(t);
    if (r)
      return r;
    t = zu(t);
  }
}
const jx = ["style"], Vx = ["style", "code"], io = ["style", "cid"], Wx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Hx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Gx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], Jx = ["style", "caller", "category", "contents"], Yx = ["tag", "marker", "contents"], Xx = [
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
function Qx(e, t) {
  const r = se(e);
  if (!wt(r))
    return;
  const n = $h(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function $h(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Yf();
  let n = 0;
  const i = [], s = [], o = e.getKey();
  let a;
  for (const c of r) {
    const l = c.node;
    for (let u = i.length - 1; u >= 0; u--)
      if (fi(i[u], c)) {
        const f = i[u];
        if (i.splice(u, 1), n += 1, a && f.getKey() === a.getKey())
          return n - 1;
      }
    for (let u = s.length - 1; u >= 0; u--)
      fi(s[u].node, c) && s.splice(u, 1);
    const d = s[s.length - 1];
    if (d) {
      if (l.getKey() === o)
        return d.position;
      continue;
    }
    if (l.getKey() === o) {
      if (Er(l) || wt(l))
        return n;
      Nt(l) && (a = l);
    }
    if (Nt(l) && (i.includes(l) || i.push(l)), Lh(l, t)) {
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
function ad(e, t, r = "delta-doc") {
  if (e.length < 2 || !t_(e[0]) || !e_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => Zx(n, r)?.getKey());
}
function Zx(e, t = "delta-doc") {
  const r = Yf();
  let n = 0;
  const i = [], s = [];
  for (const o of r) {
    const a = o.node;
    for (let d = i.length - 1; d >= 0; d--)
      if (fi(i[d], o)) {
        const u = i[d];
        if (i.splice(d, 1), n === e)
          return u;
        n += 1;
      }
    for (let d = s.length - 1; d >= 0; d--)
      fi(s[d].node, o) && s.splice(d, 1);
    const c = s[s.length - 1];
    if (c) {
      if (c.position === e)
        return c.node;
      continue;
    }
    if (Nt(a) && (i.includes(a) || i.push(a)), Lh(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = gl(a, t);
    if (Er(a) && l > 0 && e >= n && e < n + l || wt(a) && n === e)
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
function Er(e) {
  return E(e) && !wt(e);
}
function wt(e) {
  return Ge(e) || he(e) || He(e) || K(e) || Fe(e) || tn(e);
}
function Kr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function e_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Xx.includes(t);
}
function t_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Lh(e, t) {
  return K(e) || Fe(e) ? !0 : t === "apply" && L(e) && wt(e);
}
function Ih(e) {
  const t = e.getParent();
  return Kt(e) && ce(t) && t.getFirstChild() === e;
}
function Za(e) {
  const t = e.getParent();
  return t !== null && Ye(t, Ue) !== null;
}
function r_(e) {
  const t = e.getParent();
  return I(t) && e.getTextContent() === Ft && t.getChildrenSize() === 1;
}
function n_(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return w(r) && r === t.getFirstChild() && e.getTextContent() === Ot(t.getCaller());
}
function i_(e) {
  return !gh(e) && gl(e, "delta-doc") === e.getTextContentSize();
}
function gl(e, t) {
  if (wt(e))
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
    (Gc(e) || Ih(e) || ne(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
    // TextNode child of the span, never wrapped (`displayRunRegistry.ts`'s char descriptor
    // writes "owner-children"), so `$hasAttributeRunAncestor` cannot see it. That shape is at
    // rest on every `\w …|strong="…"\w*`, and the ops stream already omits those bytes
    // (`isNodeAttributeText` in editor-delta.adaptor.ts), so counting them here would put this
    // side out of step with the op stream on ordinary Scripture.
    ne(e, oe) === "attribute" || Za(e) || // The remaining ops-stream exclusions, so this side and $handleTextNodes count the same
    // bytes (docs/standard-view-invariants.md §II — extend the shared list, never fork it):
    // the legacy NBSP-`|` byte-prefixed attribute text the ops stream still honors for
    // pre-state-tag peers and persisted deltas, the empty-char placeholder, and the
    // editable-mode note caller in caller position.
    r.startsWith(Uc) || r_(e) || n_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function ec(e, t) {
  const r = { insert: e.__text }, n = ne(e, Gr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Dh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function cd(e) {
  const t = new ji();
  return e.isEmpty() || e.read(() => {
    const r = Re();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && fr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = s_();
    for (const s of i)
      t.push(s);
  }), t;
}
function ml(e, t) {
  const r = [], n = Rn(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...ld(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...ld(c, n.length, n, i, s, o, a));
  return r;
}
function s_() {
  return ml();
}
function ld(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return o_(e, a, n), a_(e, a, i, s, o), c_(e, t, r, i, o, s, a), Ge(e) && a.push(f_(e)), he(e) && a.push(h_(e)), He(e) && a.push(g_(e)), tn(e) && a.push(m_(e)), u_(e, a, s), l_(e, a, s), T_(c, s), a;
}
function o_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    gt(n) ? t.push(d_(n)) : ce(n) ? t.push(p_(n)) : fr(n) && t.push({ insert: ps });
  }
  Nt(e) && (r.includes(e) || r.push(e));
}
function a_(e, t, r, n, i) {
  if (!E(e) || we(e) || tn(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = Qt(e) !== void 0;
  if (w(e) && (o || Ih(e) || Za(e) || gh(e)) || ne(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (vs(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && w(c) && c === s.getFirstChild() && a === Ot(s.getCaller()))
    return;
  const l = I(s) ? s : void 0, d = l?.getFirstChild();
  o && l && w(d) && c === d && a.startsWith(R) && (a = a.slice(1));
  const u = a.startsWith(Uc) || ne(e, oe) === "attribute" || Za(e), f = !!l && a === Ft && l.getChildrenSize() === 1, h = Do(e, n), y = h ? r.filter((b) => h.children.includes(b)) : r, p = ec(e, y);
  if (p.insert = a, h) {
    if (!a || a === R || u)
      return;
    h.contentsOps?.push(p);
  } else
    f || u || t.push(p);
  const g = a !== "" && !f && !(u && l);
  if (r.length > 0 && g)
    for (const b of r)
      i.add(b);
}
function c_(e, t, r, n, i, s, o) {
  I(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (fi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = b_(c), d = Do(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function l_(e, t, r) {
  if (!K(e))
    return;
  const n = y_(e), i = Do(e, r), s = {
    node: e,
    children: Rn(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function u_(e, t, r) {
  if (!Fe(e))
    return;
  const n = k_(e), i = Do(e, r), s = {
    node: e,
    children: Rn(e).map((o) => o.node),
    contentsOps: n.insert.unknown?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function rn(e, t) {
  const r = t.getUnknownAttributes();
  r && Object.assign(e, r);
}
function d_(e) {
  const t = { style: os, code: e.__code };
  return rn(t, e), { insert: ps, attributes: { book: t } };
}
function f_(e) {
  const t = { style: Qs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), rn(t, e), { insert: { chapter: t } };
}
function p_(e) {
  const t = { style: e.__marker };
  return rn(t, e), { insert: ps, attributes: { para: t } };
}
function h_(e) {
  const t = { style: Zs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), rn(t, e), { insert: { verse: t } };
}
function g_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), rn(t, e), { insert: { milestone: t } };
}
function m_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function y_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), rn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, Gr);
  return n && (r.attributes = { segment: n }), r;
}
function b_(e) {
  const t = { insert: "" }, r = Dh([e]);
  return r && (t.attributes = { char: r }), t;
}
function k_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), rn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Do(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function T_(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    fi(t[r].node, e) && t.splice(r, 1);
}
function Dh(e) {
  if (e.length === 0)
    return;
  const t = e.map(x_);
  return t.length === 1 ? t[0] : t;
}
function x_(e) {
  const t = { style: e.__marker }, r = ne(e, xn);
  return r && (t.cid = r), rn(t, e), t;
}
const Uh = 1;
class Jt extends xs {
  __caller;
  __previewText;
  __onClick;
  constructor(t = rs, r = "", n, i) {
    super(i), this.__caller = t, this.__previewText = r, this.__onClick = n ?? (() => {
    });
  }
  static getType() {
    return "immutable-note-caller";
  }
  static clone(t) {
    const { __caller: r, __previewText: n, __onClick: i, __key: s } = t;
    return new Jt(r, n, i, s);
  }
  static importDOM() {
    return {
      span: (t) => C_(t) ? {
        conversion: __,
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
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => v_(t, n), (l) => S_(t, n, s, l), () => M_(t, n), () => E_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return S("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === rs && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === sp && i ? (
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
      version: Uh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function __(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: yl(t, r) };
}
function yl(e, t, r) {
  return Ve(new Jt(e, t, r));
}
function C_(e) {
  return e ? e.classList.contains(Jt.getType()) : !1;
}
function mt(e) {
  return e instanceof Jt;
}
function v_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function S_(e, t, r, n) {
  e.update(() => {
    const i = se(t);
    if (!K(i))
      throw new Error(`setNoteCaller: Note node not found: ${t}`);
    i.setCaller(n);
    const s = se(r);
    if (!mt(s))
      throw new Error(`setNoteCaller: Caller node not found: ${r}`);
    s.setCaller(n);
  });
}
function M_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return ml(r);
  });
}
function E_(e, t) {
  return e.getEditorState().read(() => {
    let r = 0;
    for (const { node: n } of Rn())
      if (K(n)) {
        if (n.getKey() === t)
          return r;
        r += 1;
      }
  });
}
const A_ = [
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
], P_ = ["†"];
function Uo(e) {
  if (Fh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = ud(t), [s, o] = ud(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = dd(n, i), [s, o] = dd(s, o);
  const a = Rc();
  return a.anchor = Ra(n.getKey(), i, fd(n)), a.focus = Ra(s.getKey(), o, fd(s)), a;
}
function bl() {
  if (Fh())
    return;
  const e = O();
  if (!e || !P(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = so(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = so(i, s);
  return { start: n, end: o };
}
function ud(e) {
  if ($y(e)) {
    const t = If(e.jsonPath);
    let r = Re();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = Ti(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : lT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, uT(r, e.offset)] : [void 0, void 0];
  }
  if (Ly(e) || Iy(e)) {
    const t = Li(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (Dy(e)) {
    const t = Li(e.jsonPath);
    if (!t)
      return [void 0, void 0];
    if (L(t)) {
      const n = t.getLastChild();
      if (n && E(n))
        return [n, n.getTextContent().length];
    }
    const r = t.getNextSibling();
    return r && L(r) ? [r, 0] : [void 0, void 0];
  }
  if (Uy(e)) {
    const t = Li(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ha(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (Fy(e)) {
    const t = Li(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ha(t, "closing");
    if (r) {
      const i = r.getTextContent(), s = Math.min(e.closingMarkerOffset, i.length);
      return [r, s];
    }
    const n = t.getLastChild();
    return n && E(n) ? [n, n.getTextContent().length] : [void 0, void 0];
  }
  if (zy(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Li(e.jsonPath);
    if (!n || !L(n))
      return [void 0, void 0];
    if (r === "marker") {
      const s = ha(n, "opening");
      if (s) {
        const o = e.propertyOffset + 1, a = s.getTextContent();
        return [s, Math.min(o, a.length)];
      }
    }
    const i = n.getFirstChild();
    return i && E(i) ? [i, 0] : [void 0, void 0];
  }
  throw new Error(`Unsupported UsjDocumentLocation type: ${Ky(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function dd(e, t) {
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
function fd(e) {
  return L(e) ? "element" : "text";
}
function ha(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (w(n) && n.getMarkerSyntax() === t || t === "closing" && w(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (Rr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Li(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = If(r);
  let i = Re();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = Ti(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function so(e, t) {
  if (w(e)) {
    const r = e.getMarkerSyntax(), n = N_(e), i = n ? ln(pn(n)) : ln(pn(e));
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
    if (E(n)) {
      const s = t >= r ? n.getTextContentSize() : 0;
      return so(n, s);
    }
    const i = Oo(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return so(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (Rr(r)) {
      const i = r.getTextContent().endsWith("*"), s = ln(pn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = Qp(e, t);
    return n.type === "text" ? {
      jsonPath: ln([...pn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: ln(pn(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = cT(e, t);
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
function N_(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = O_(e);
  return r && !Nt(r) && !E(r) && !Ce(r) ? r : t;
}
function O_(e) {
  let t = e.getPreviousSibling();
  for (; t; ) {
    if (!Qc(t))
      return t;
    t = t.getPreviousSibling();
  }
}
function pn(e) {
  const t = [];
  let r = e;
  for (; r; ) {
    const n = Oo(r);
    if (!n)
      break;
    const i = aT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function Fh() {
  for (let e = Re().getFirstChild(); e; e = e.getNextSibling())
    if (fs(e))
      return !0;
  return !1;
}
function zh(e, t, r, n, i, s, o) {
  if (!Ae.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Uo(r) : O();
  if (!P(a))
    return;
  const c = R_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Vi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = Kh(e, l, c, i, s, void 0, void 0);
  return q_(d, a, i), d;
}
function kl(e) {
  return e !== "expanded";
}
function w_(e) {
  if (!e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "text")
    return;
  const r = t.getNode();
  if (!E(r) || !I(r.getParent()))
    return;
  if (w(r))
    return t.offset === 0 && r.getMarkerSyntax() === "closing" ? r : void 0;
  if (t.offset !== r.getTextContentSize())
    return;
  const n = r.getNextSibling();
  return w(n) && n.getMarkerSyntax() === "closing" ? n : void 0;
}
function q_(e, t, r) {
  const n = kl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || Zk(t), Ah(t);
  const i = w_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(I)?.selectEnd();
}
function Jn(e, t, r) {
  const n = Mr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(Sr("marker", qe(e)));
  const s = t === "" ? Ft : i ? R + t : t;
  return n.append(ge(s)), n;
}
function R_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Jn("fr", f, n)), !e.isCollapsed()) {
        const h = hd(e);
        h.length > 0 && o.push(Jn("fq", h, n));
      }
      o.push(Jn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Jn("xo", f, n)), !e.isCollapsed()) {
        const h = hd(e);
        h.length > 0 && o.push(Jn("xq", h, n));
      }
      o.push(Jn("xt", "", n));
      break;
    default:
      s?.warn(`$createNoteChildren: Unsupported note marker '${t}'`);
      return;
  }
  return o;
}
function Kh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : kl(n?.noteMode), l = Kc(e, t, c);
  s && xt(l, Gr, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = lt(e), d && u.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (u = Sr("marker", qe(e) + " "), a || (f = Sr("marker", ot(e))));
  let h;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (h = ge(Ot(l.__caller)), d && h.setMode("token"), l.append(h, ...r));
  else {
    const y = () => No(), p = r.flatMap(L_(y));
    if (t === "")
      l.append(...p);
    else {
      const g = Jc(r);
      let b = () => {
      };
      i?.noteCallerOnClick && (b = i.noteCallerOnClick), h = yl(l.__caller, g, b), l.append(h, y(), ...p);
    }
  }
  return f && l.append(f), l;
}
function pd(e) {
  if (typeof e == "string") {
    const i = se(e);
    return K(i) ? i : void 0;
  }
  const t = Rn();
  if (t.length <= 0)
    return;
  const n = t.filter((i) => K(i.node))[e]?.node;
  if (K(n))
    return n;
}
function $_(e, t) {
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
function L_(e) {
  return (t) => Xt(t) ? [t] : [t, e()];
}
function I_(e) {
  const t = e.getParent();
  return t !== null && Ye(t, K) !== null;
}
function hd(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = $c(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || mt(c) || I_(c)) && !w(c) && !tn(c) && ne(c, oe) !== "attribute") {
      if (he(c)) {
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
  Jt,
  St,
  ...Sx
], D_ = [
  vi,
  ...Tl
], U_ = Nn((e, t) => {
  const { coords: r, children: n, style: i, ...s } = e, o = r !== void 0;
  return S("div", { ref: t, className: "floating-box", "aria-hidden": !o, style: {
    ...i,
    position: "absolute",
    zIndex: 1e3,
    top: r?.y,
    left: r?.x,
    visibility: o ? "visible" : "hidden",
    opacity: o ? 1 : 0
  }, ...s, children: n });
});
function F_() {
  const [e, t] = de(void 0), [r, n] = de(), i = ee(null), s = me((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = vb(l, c, () => {
      Sb(l, c, {
        placement: "bottom-start",
        middleware: [Mb(), Eb()]
      }).then((d) => {
        n(d.placement), t((u) => u?.x === d.x && u?.y === d.y ? u : { x: d.x, y: d.y });
      }).catch(() => {
        t(void 0);
      });
    });
  }, []), o = me(() => {
    i.current && (t(void 0), i.current(), i.current = null);
  }, []);
  return z(() => o, [o]), { coords: e, placement: r, updatePosition: s, cleanup: o };
}
function z_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = F_();
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
const K_ = Py(U_);
function Bh({ isOpen: e = !1, children: t }) {
  const r = ee(null), { coords: n, placement: i } = z_({ isOpen: e, floatingBoxRef: r }), s = Ke(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return yn(
    S(K_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const jh = $f(void 0);
function xl() {
  const e = Lf(jh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function B_(e, t) {
  const [r, n] = de(0), [i, s] = de(-1), o = Ke(() => e ?? [], [e]), a = {
    menuItems: o,
    activeIndex: r,
    selectedIndex: i,
    onSelectOption: t ?? (() => {
    })
  }, c = me(() => {
    n((u) => {
      const f = o.length;
      return f ? (u - 1 + f) % f : 0;
    });
  }, [o.length]), l = me(() => {
    n((u) => {
      const f = o.length;
      return f ? (u + 1) % f : 0;
    });
  }, [o.length]), d = me(() => {
    const u = o.length;
    if (r >= 0 && r < u) {
      const f = o[r];
      t?.(f), s(r);
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
function j_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = B_(t, r);
  return S(jh.Provider, { value: i, children: S("div", { ...n, children: e }) });
}
const Vh = Nn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = xl(), d = me((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = me((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return S("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function V_({ children: e, autoIndex: t = !0, ...r }) {
  const n = ee(null), { state: { activeIndex: i, menuItems: s } } = xl(), o = Ke(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ke(() => {
    const c = o(s);
    return t ? Ny.map(c, (l, d) => Oy(l) && l.type === Vh && l.props.index === void 0 ? wy(l, { index: d }) : l) : c;
  }, [o, t, s]);
  return z(() => {
    if (n.current) {
      const c = n.current, l = c.children[i];
      if (l) {
        const d = c.getBoundingClientRect(), u = l.getBoundingClientRect();
        u.bottom > d.bottom ? c.scrollTop += u.bottom - d.bottom : u.top < d.top && (c.scrollTop -= d.top - u.top);
      }
    }
  }, [i]), S("div", { ref: n, role: "menu", ...r, children: a });
}
const W_ = (e, t, r) => Ks(e, r).toLowerCase().includes(t.toLowerCase()), gd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Ks = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function H_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? gd(r[0]) : "") : (d = n || (r.length > 0 ? gd(r[0]) : ""), u = (y, p) => W_(y, p, d));
  const f = s || d, h = /* @__PURE__ */ new Map();
  return r.filter((y) => {
    try {
      return u(y, t);
    } catch (p) {
      return console.warn("Error filtering item:", y, p), !1;
    }
  }).sort((y, p) => {
    const g = (v) => (h.has(v) || h.set(v, Ks(v, f).toLowerCase()), h.get(v) ?? ""), b = a ? Ks(y, f) : g(y), x = a ? Ks(p, f) : g(p);
    for (const v of c)
      switch (v) {
        case "exact":
          if (b === l && x !== l)
            return -1;
          if (x === l && b !== l)
            return 1;
          break;
        case "startsWith":
          if (b.startsWith(l) && !x.startsWith(l))
            return -1;
          if (x.startsWith(l) && !b.startsWith(l))
            return 1;
          break;
        case "contains": {
          const M = b.indexOf(l), A = x.indexOf(l);
          if (M !== -1 && A === -1)
            return -1;
          if (A !== -1 && M === -1)
            return 1;
          if (M !== -1 && A !== -1)
            return M - A;
          break;
        }
      }
    return b.localeCompare(x);
  });
}
const ga = {
  Root: j_,
  Options: V_,
  Option: Vh
};
function G_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ke(() => H_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function J_() {
  const { moveUp: e, moveDown: t, select: r } = xl();
  return Ke(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const Y_ = () => {
  const e = J_(), [t] = ae();
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
    return t.registerCommand(Nr, r, Oe);
  }, [t, e]);
};
function X_() {
  return Y_(), null;
}
const Q_ = ["Shift", "Control", "Alt", "Meta"];
function Wh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), d = s !== void 0, [u, f] = de(""), h = d ? s ?? "" : u, y = G_({ query: h, items: t, filterBy: "name" }), p = (g) => {
    n?.(), r ? r(g) : g.action(l);
  };
  return z(() => {
    a?.(h, y);
  }, [a, h, y]), z(() => l.registerCommand(Nr, (g) => {
    if (d || c?.includes(g.key) || Q_.includes(g.key))
      return !1;
    if ((g.ctrlKey || g.metaKey || g.altKey) && !g.getModifierState("AltGraph"))
      return n?.(), !1;
    const x = {
      Escape: () => n?.(),
      Backspace: () => {
        h.length === 0 ? n?.() : f((v) => v.slice(0, -1));
      }
    }[g.key];
    return x ? (g.stopPropagation(), g.preventDefault(), x(), !0) : g.key.length === 1 ? (g.stopPropagation(), g.preventDefault(), g.key !== o && f((v) => v + g.key), !0) : !1;
  }, Oe), [l, d, h, o, n, c]), xe(ga.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: y, onSelectOption: (g) => p(g), children: [!d && S("input", { value: h, type: "text", disabled: !0 }), S(X_, {}), S(ga.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (g) => g.map((x, v) => xe(ga.Option, { index: v, children: [S("span", { className: "label", children: x.label ?? x.name }), S("span", { className: "description", children: x.description })] }, x.name)) })] });
}
function Z_({ trigger: e, items: t }) {
  const [r] = ae(), [n, i] = de(!1), s = me((o) => {
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
      if (P(l))
        return l;
    });
    a.read(() => {
      const l = O();
      !P(l) || c?.is(l) || i(!1);
    });
  }), [r]), t && S(Bh, { isOpen: n, children: ({ placement: o }) => S(Wh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function eC({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
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
function Qi(e, t) {
  return `${e}:${t}`;
}
function tC(e, t) {
  z(() => {
    if (!e.hasNodes([tt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return je(Xf(e, tt, (n) => ss(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], h = o[l]?.[u], y = a[l]?.[u], p = c[l]?.[u];
          i.addID(l, u, f, h, y, p);
        });
      n.getWritable().__suppressOnRemoveCallbacks = !0;
    }), e.registerMutationListener(tt, (n) => {
      e.getEditorState().read(() => {
        for (const [i, s] of n) {
          const o = se(i);
          let a = {};
          s === "destroyed" ? a = r.get(i) ?? {} : Ce(o) && (a = o.getTypedIDs());
          for (const [c, l] of Object.entries(a))
            if (!tt.isReservedType(c))
              for (const d of l) {
                let u = t.get(Qi(c, d));
                a[c] = l, r.set(i, a), s === "destroyed" ? u !== void 0 && (u.delete(i), u.size === 0 && t.delete(Qi(c, d))) : (u === void 0 && (u = /* @__PURE__ */ new Set(), t.set(Qi(c, d), u)), u.has(i) || u.add(i));
              }
        }
      });
    }, { skipInitialization: !0 }));
  }, [e, t]);
}
const rC = Nn(function({ logger: t }, r) {
  const [n] = ae(), i = Ke(() => /* @__PURE__ */ new Map(), []);
  tC(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Qi(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = se(d);
        Ce(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && Xs(u));
      }
  };
  return wc(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (tt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const h = Uo(o);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), xp(h, a, c, l, d, u, f);
      }, { tag: Ia });
    },
    removeAnnotation(o, a) {
      if (tt.isReservedType(o))
        throw new Error(`removeAnnotation: Can't directly remove this reserved annotation type '${o}'. Use the appropriate plugin instead.`);
      const c = i.get(Qi(o, a));
      c === void 0 || c.size === 0 || n.update(() => {
        s(o, a, c);
      }, { tag: Ia });
    }
  })), null;
}), nC = [];
function iC({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = nC, onChange: n }) {
  const [i] = ae();
  return Ts(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(Uf) && !d.has(cp) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = sC(i, s);
        u.length !== 0 && n(o, i, d, u);
      });
  }, [i, e, t, r, n]), null;
}
function sC(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new ji();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && Qt(s) !== void 0;
    if (t.size === 1 && E(s) && !o && i_(s)) {
      const a = $h(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = se(i);
          return new ji([E(u) ? ec(u) : { insert: "" }]);
        }), l = new ji([ec(s)]), d = new ji(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = cd(r), c = cd(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const _l = "formatted", Hh = "unformatted", Gh = "paragraph-structure", Cl = "standard", Jh = "block-verse", oC = {
  [_l]: "Formatted",
  [Hh]: "Unformatted",
  [Gh]: "Paragraph Structure",
  [Cl]: "Standard",
  [Jh]: "Block Verse"
};
function Un(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let vl, Sl;
function aC(e) {
  const t = Ml(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  vl = e, Sl = t;
}
aC(_l);
const xN = () => vl, pi = () => Sl;
function Ml(e) {
  let t;
  switch (e ?? vl) {
    case _l:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Hh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Gh:
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
    case Jh:
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
function _N(e) {
  if (!e)
    return;
  const t = md(e);
  return Object.keys(oC).find((r) => Pt(md(Ml(r)), t));
}
const cC = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function md(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...cC, ...t };
}
function Es(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function lC(e) {
  if (e)
    return hs(e) ? St : e.markerMode === "editable" ? pt : St;
}
function hs(e) {
  return e?.verseLayout === "block";
}
function uC(e) {
  const t = [], r = e ?? Sl;
  return r && (t.push(`${zb}${r.markerMode}`), r.hasSpacing && t.push(Ub), r.isFormattedFont && t.push(Fb)), t;
}
function dC(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += fC(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), hC(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += gC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), yC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function fC(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), pC(t, e.retain, e.attributes, r, n)), e.retain);
}
function pC(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Re();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Er(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), h = u - f, y = Math.min(s, h);
        if (y > 0) {
          let p = d;
          const g = f > 0, b = y < u - f;
          if (g && b) {
            const [, x] = d.splitText(f);
            [p] = x.splitText(y);
          } else g ? [, p] = d.splitText(f) : b && ([p] = d.splitText(y));
          if (Yr(r)) {
            const x = p.getParent();
            if (I(x)) {
              const v = r.char;
              let M;
              Array.isArray(v) ? a >= 0 && a <= v.length - 1 && (M = v[a]) : a === 0 && (M = v);
              const A = M ? _n(M, x) : !1;
              if (A && Array.isArray(v) && v.length > 1) {
                const F = ge("");
                p.replace(F);
                const B = typeof r.segment == "string" ? r.segment : void 0, j = Si(v.slice(1), n, p, B);
                let _ = F;
                for (const U of j)
                  _.insertAfter(U), _ = U;
                F.remove(), $t(r, p);
              } else if (A)
                $t(r, p);
              else {
                p.remove();
                const F = yd(p, r, n, i);
                if (F && F.length > 0) {
                  let B = x;
                  for (const j of F)
                    B.insertAfter(j), B = j;
                }
              }
            } else {
              const v = ge("");
              p.replace(v);
              const M = yd(p, r, n, i);
              if (M && M.length > 0) {
                let A = v;
                for (const F of M)
                  A.insertAfter(F), A = F;
                v.remove();
              } else
                v.replace(p);
            }
          } else
            $t(r, p);
          s -= y;
        }
      }
      o += u;
    } else if (wt(d))
      e <= o && o < e + t && s > 0 && (bd(d, r), s -= 1), o += 1;
    else if (I(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (Yr(r)) {
          const f = r.char;
          let h;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (h = f[a]) : a === 0 && (h = f), h) {
            tc(d, h.style), typeof h.cid == "string" && xt(d, xn, () => h.cid);
            const y = ze(h, io);
            y && Object.keys(y).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...y
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || MC(r.char)) && (u = !0);
      if (s > 0) {
        const f = d.getChildren();
        for (const h of f) {
          if (s <= 0)
            break;
          if (l(h) && s <= 0)
            return u && $a(d), !0;
        }
      }
      u && $a(d), a -= 1;
    } else if (Nt(d)) {
      const u = d.getChildren();
      for (const h of u) {
        if (s <= 0)
          break;
        if (l(h) && s <= 0)
          return !0;
      }
      const f = 1;
      if (e <= o && o < e + s && s > 0) {
        if (!fr(d))
          bd(d, r);
        else if (El(r)) {
          const h = Qh(r.para, n);
          h && d.replace(h, !0);
        }
        s -= f;
      }
      o += f;
    } else if (L(d)) {
      const u = d.getChildren();
      for (const f of u) {
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
function yd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Si(t.char, r, e, i), o = s.find(I);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), $t(t, e);
    return;
  }
  const a = {};
  rg.forEach((d) => {
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
  return Object.keys(l).length > 0 && o.setUnknownAttributes(l), $t(t, e), s;
}
function Yh(e, t) {
  e.setMarker(t);
  const r = e.getFirstChild();
  w(r) ? (r.setMarker(t), r.setTextContent(qe(t))) : Xt(r) && r.getTextType() === "marker" && r.setTextContent(qe(t) + R);
}
function tc(e, t) {
  const r = e.getMarker();
  if (e.setMarker(t), t === r)
    return;
  e.getChildren().forEach((o) => {
    w(o) && o.getMarker() === r && o.setMarker(t);
  });
  const n = I(e.getParent()), i = e.getFirstChild();
  Xt(i) && i.getTextType() === "marker" && i.getTextContent() === qe(r, n) && i.setTextContent(qe(t, n));
  const s = e.getLastChild();
  Xt(s) && s.getTextType() === "marker" && s.getTextContent() === ot(r, n) && s.setTextContent(ot(t, n));
}
function bd(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && I(e) && Yr(t)) {
      const i = rc(n);
      if (tc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        xt(e, xn, () => o);
      }
      const s = ze(i, io);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ge(e) || he(e) || He(e) || K(e) || Fe(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (gt(e) || ce(e) || I(e)) && (r === "style" && ce(e) ? Yh(e, n) : r === "style" && I(e) ? tc(e, n) : r === "code" && gt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && xt(e, Gr, () => n));
  }
}
function hC(e, t, r) {
  if (t <= 0)
    return;
  const n = Re();
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
    } else if (wt(a))
      e <= i && i < e + s ? (a.remove(), r?.debug(`Deleted embed node (key: ${a.getKey()}) at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`), s -= 1) : i += 1;
    else if (Nt(a)) {
      const c = a.getChildren().slice(), l = a.getChildren();
      for (const d of l) {
        if (s <= 0)
          break;
        if (o(d) && s <= 0)
          return !0;
      }
      if (e <= i && i < e + s && Nt(a)) {
        s -= 1;
        const d = a.getChildren().length;
        if (c.length > 0 && d === 0)
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Gt(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const h = a.getNextSibling();
          if (h && Se(h)) {
            let y = i + 1;
            const p = h.getChildren();
            for (const b of p) {
              if (s <= 0)
                break;
              const x = i;
              if (i = y, o(b)) {
                i = x;
                break;
              }
              Er(b) ? y += b.getTextContentSize() : wt(b) && (y += 1), i = x;
            }
            const g = h.getChildren();
            for (const b of g)
              b.remove(), a.append(b);
            h.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Gt(), !0);
        } else ce(a) ? a.replace(Gt(), !0) : a.remove();
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
function gC(e, t, r, n, i) {
  if (t === ps)
    return kd(e, r, n, i);
  if (t.endsWith(ps) && !El(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Yr(r))
        throw new Error("Text + LF should not have char attributes");
      o += oo(e, s, r, i);
    }
    return o += kd(e + o, r, n, i), o;
  } else return Yr(r) ? mC(e, t, r, n, i) : oo(e, t, r, i);
}
function mC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = ge(t === "" ? Ft : t);
  $t(r, s);
  let o;
  {
    let g = function(b) {
      if (Er(b)) {
        const x = b.getTextContentSize();
        if (e >= p && e < p + x) {
          const v = b.getParent();
          return I(v) && (o = v), !0;
        }
        p += x;
      } else if (wt(b))
        p += 1;
      else if (I(b)) {
        const x = b.getChildren();
        for (const v of x)
          if (g(v))
            return !0;
      } else if (L(b)) {
        const x = b.getChildren();
        for (const v of x)
          if (g(v))
            return !0;
        Nt(b) && (p += 1);
      }
      return !1;
    };
    const y = Re();
    let p = 0;
    g(y);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const y = a[0];
      y && _n(y, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (_n(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Si(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(I);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), oo(e, t, void 0, i);
  const f = {};
  for (const [y, p] of Object.entries(r))
    y !== "char" && y !== "segment" && typeof p == "string" && (f[y] = p);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let h = !0;
  for (const y of d)
    if (!Xh(e, y, i)) {
      h = !1;
      break;
    }
  return h ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), oo(e, t, void 0, i));
}
function oo(e, t, r, n) {
  if (t.length <= 0)
    return n?.debug("Attempted to insert empty string. No action taken."), 0;
  const i = Re();
  let s = 0, o = !1;
  function a(c) {
    if (o)
      return !0;
    if (Er(c)) {
      const l = c.getTextContentSize();
      if (e >= s && e <= s + l) {
        const d = e - s, u = ge(t);
        if ($t(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          I(f) && !Yr(r) ? f.insertAfter(u) : c.insertAfter(u);
        } else {
          const [, f] = c.splitText(d);
          f.insertBefore(u);
        }
        return n?.debug(`Inserted text "${t}" in/around TextNode (key: ${c.getKey()}) at nodeOffset ${d}. Original targetIndex: ${e}, currentIndex at node start: ${s}.`), o = !0, !0;
      }
      s += l;
    } else if (wt(c))
      s += 1;
    else if (I(c)) {
      if (!o && e === s) {
        const u = ge(t);
        $t(r, u);
        const f = c.getFirstChild();
        return f ? f.insertBefore(u) : c.append(u), n?.debug(`Inserted text "${t}" at beginning of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const d = c.getChildren();
      for (const u of d) {
        if (a(u))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const u = ge(t);
        return $t(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Nt(c)) {
      if (!o && e === s) {
        const u = ge(t);
        $t(r, u);
        const f = c.getFirstChild();
        return f ? f.insertBefore(u) : c.append(u), n?.debug(`Inserted text "${t}" at beginning of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
      const d = c.getChildren();
      for (const u of d) {
        if (a(u))
          return !0;
        if (o)
          break;
      }
      if (!o && e === s) {
        const u = ge(t);
        return $t(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of container ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
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
    const c = ge(t);
    $t(r, c);
    const l = Gt().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Xh(e, t, r) {
  const n = Re();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Gt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
    if (!L(a))
      return !1;
    const c = a.getChildren();
    for (const l of c) {
      if (e === i && !s) {
        if (a === n && t.isInline())
          if (Se(l)) {
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into existing ${l.getType()} at beginning. targetIndex: ${e}`);
            const d = l.getFirstChild();
            d ? d.insertBefore(t) : l.append(t);
          } else
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Gt().append(t));
        else
          l.insertBefore(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) before child ${l.getType()} (key: ${l.getKey()}) in ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, currentIndex: ${i}`);
        return s = !0, !0;
      }
      if (Er(l)) {
        const d = l.getTextContentSize();
        if (!s && e > i && e < i + d) {
          const u = e - i, [f] = l.splitText(u);
          return f.insertAfter(t), r?.debug(`$insertNodeAtCharacterOffset: Inserted node ${t.getType()} (key: ${t.getKey()}) by splitting TextNode (key: ${l.getKey()}) at offset ${u}. targetIndex: ${e}, currentIndex at node start: ${i}`), s = !0, !0;
        }
        i += d;
      } else if (wt(l))
        i += 1;
      else if (I(l)) {
        if (o(l))
          return !0;
      } else if (Nt(l)) {
        const d = l;
        if (o(d))
          return !0;
        const u = i;
        if (fr(d) && Nt(t) && // Target is at the ImpliedPara's implicit newline
        e === u && !s)
          return r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode (key: ${d.getKey()}) with block node '${t.getType()}' (key: ${t.getKey()}) at OT index ${e}.`), l.replace(t, !0), i = u + 1, s = !0, !0;
        i += 1;
      } else if (L(l) && o(l))
        return !0;
      if (s)
        return !0;
    }
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Gt().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      Se(a) ? fr(a) && ce(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !Se(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (I(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !Se(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function yC(e, t, r, n, i) {
  let s;
  return Kr("chapter", t) ? s = kC(t.insert.chapter, r) : Kr("verse", t) ? s = TC(t.insert.verse, r) : Kr("ms", t) ? s = xC(t.insert.ms) : Kr("note", t) ? s = Zh(t, r, n, i) : Kr("unknown", t) ? s = eg(t, r, n, i) : Kr("unmatched", t) && (s = CC(t.insert.unmatched, r)), s ? Xh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function kd(e, t, r, n) {
  let i;
  El(t) ? i = Qh(t.para, r) : SC(t) && (i = bC(t.book)), i ??= Gt();
  const s = i, o = ce(s), a = fr(s);
  let c = 0, l = !1;
  function d(u) {
    if (l)
      return !0;
    if (Er(u)) {
      const f = u.getTextContentSize();
      if (e >= c && e <= c + f) {
        const h = u.getParent();
        if (ce(h) && (o || a)) {
          n?.debug(`Splitting ParaNode (marker: ${h.getMarker()}) with LF attributes at targetIndex ${e}`);
          const y = e - c, [p] = y > 0 ? u.splitText(y) : [void 0];
          let g, b = p?.getPreviousSibling();
          for (; b; ) {
            const x = b;
            b = b.getPreviousSibling(), g ? g.insertBefore(x) : s.append(x), g = x;
          }
          return p && s.append(p), h.insertBefore(s), l = !0, !0;
        }
      }
      c += f;
    } else if (wt(u))
      c += 1;
    else if (Nt(u)) {
      const f = u.getChildren();
      for (const h of f) {
        if (d(h))
          return !0;
        if (l)
          break;
      }
      if (e === c) {
        if (fr(u) && s)
          return n?.debug(`Replacing ImpliedParaNode (key: ${u.getKey()}) with ParaNode at targetIndex ${e}`), u.replace(s, !0), l = !0, !0;
        if (ce(u) && s) {
          const h = u;
          return n?.debug(`Creating new block node with LF attributes after existing ParaNode (marker: ${h.getMarker()}) at targetIndex ${e}`), h.insertAfter(s), l = !0, !0;
        }
      }
      if (c += 1, e === c && ce(u) && s)
        return n?.debug(`Creating new block node after existing ParaNode (marker: ${u.getMarker()}) at targetIndex ${e}`), u.insertAfter(s), l = !0, !0;
    } else if (L(u)) {
      const f = u.getChildren();
      for (const h of f) {
        if (d(h))
          return !0;
        if (l)
          break;
      }
    }
    return l;
  }
  return d(Re()), l || n?.warn(`Could not find location to handle newline with para attributes at targetIndex ${e}. Final currentIndex: ${c}.`), 1;
}
function bC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== os || !r || !zt.isValidBookCode(r))
    return;
  const n = ze(e, Vx);
  return Mp(r, n);
}
function Qh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = ze(e, jx), i = ai(r, n);
  if (!Un(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), No());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = qe(r) + R;
    i.append(t.hasGutterParaMarkers ? hk(s) : Sr("marker", s));
  }
  return i;
}
function kC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = ze(e, Wx);
  let a;
  if (t.markerMode === "editable")
    a = Pp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Wc(r, c, n, i, s, o);
  }
  return a;
}
function TC(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = ze(e, Hx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Ut(r, n);
    c = Up(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = dl(n, l, i, s, o, a);
  }
  return c;
}
function xC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = ze(e, Gx);
  return dp(t, r, n, s, i);
}
function Zh(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = ze(i.note, Jx), d = typeof l?.closed == "string" ? l.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const h = [];
  for (const p of c?.ops ?? [])
    if (typeof p.insert == "string")
      if (Yr(p.attributes)) {
        const g = Si(p.attributes.char, t, ge(p.insert), void 0, tg(p.attributes.char, h), !1, t.markerMode === "editable");
        h.push(...g);
      } else
        h.push(ge(p.insert));
  return Kh(s, o, h, t, r, f, d).setCategory(a).setUnknownAttributes(l);
}
function eg(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = ze(i, Yx), l = Vc(s, o, c), d = a?.ops ?? [];
  d.length > 0 && _C(d, t, r, n).forEach((h) => l.append(h));
  const u = e.attributes?.segment;
  return typeof u == "string" && xt(l, Gr, () => u), l;
}
function _C(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Yr(s.attributes)) {
        const o = ge(s.insert), a = Si(s.attributes.char, t, o, void 0, tg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(ge(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (Kr("unknown", s)) {
        const o = eg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (Kr("note", s)) {
        const o = Zh(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function CC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = il(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function tg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function rc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Si(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(Ft);
  const a = () => {
    o && E(r) && r.getTextContent() !== Ft && r.setTextContent(R + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(rc), l = c[0], d = i?.[i.length - 1];
    if (I(d) && _n(l, d))
      return c.length > 1 ? Si(c.slice(1), t, r, void 0, void 0, !0, o).forEach((h) => d.append(h)) : r && d.append(r), [];
    a();
    const u = c.reduceRight((f, h, y) => {
      const p = Mr(h.style, ze(h, io));
      if (typeof h.cid == "string" && xt(p, xn, () => h.cid), n && y === c.length - 1 && xt(p, Gr, () => n), f)
        if (I(f)) {
          const g = f.getMarker(), b = [];
          ya(g, b, t, !0), b.forEach((v) => p.append(v)), p.append(f);
          const x = [];
          ma(f, x, t, !0), x.forEach((v) => p.append(v));
        } else
          p.append(f);
      return p;
    }, r);
    return ya(l.style, u, t, s), ma(u, u, t, s), [u];
  } else {
    const c = rc(e), l = i?.[i.length - 1];
    if (I(l) && _n(c, l))
      return r && l.append(r), [];
    a();
    const d = Mr(c.style, ze(c, io));
    return typeof c.cid == "string" && xt(d, xn, () => c.cid), n && xt(d, Gr, () => n), r && d.append(r), ya(c.style, d, t, s), ma(d, d, t, s), [d];
  }
}
function ma(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && vC(e.getMarker(), t, r, !1, n);
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
function vC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = Sr("marker", n ? ot("") : ot(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function SC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function El(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Yr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function MC(e) {
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
      if (EC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const rg = [
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
function EC(e) {
  return rg.includes(e);
}
function AC() {
  const [e] = ae();
  return z(() => e.registerCommand(Mo, (t) => (PC(t), !1), kn), [e]), null;
}
function PC(e) {
  if (NC(e.target))
    return;
  const t = O();
  P(t) && OC(t);
}
function Mi(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Kt(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === R && (r++, t = t.getNextSibling());
    else if (he(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Zt(e, r), !0);
}
function NC(e) {
  if (!Ff(e))
    return !1;
  const t = ki(e);
  if (!gk(t))
    return !1;
  const r = t.getParent();
  return r ? Se(r) ? Mi(r) : (Zt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function OC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!Se(r))
    return !1;
  const n = r.getFirstChild();
  return !Rr(n) && !Dn(n) ? !1 : Mi(r);
}
function wC() {
  const [e] = ae();
  return z(() => {
    const t = (r) => r instanceof KeyboardEvent && !qC(r) || !gs() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return je(
      e.registerCommand(Nr, t, Oe),
      e.registerCommand(Hs, t, Oe),
      // CUT and PASTE run at CRITICAL because their standard-view handlers — the ones that
      // actually copy and then remove — are themselves registered at HIGH, where the winner is
      // decided by registration order rather than by intent. A refusal has to outrank the actor it
      // refuses, not tie with it. The engine's own CRITICAL cut arm, which records what a cut would
      // cover, TIES with this refusal, so it consults `$selectionReachesIntoOpaqueBlock` itself
      // rather than relying on order: an arm this refusal leaves behind would outlive the gesture.
      e.registerCommand(cr, t, st),
      e.registerCommand(vr, t, st),
      // DROP is judged by the drop TARGET, not the live selection: Lexical dispatches
      // DROP_COMMAND straight from the DOM handler with no selection update, so at drop time
      // `$getSelection()` still holds whatever was selected when the drag STARTED. Testing that
      // inverted both promises above — dragging a caption OUT of a figure was refused (source
      // inside), while dragging outside text INTO a caption was allowed (source outside).
      e.registerCommand(Lc, (r) => {
        if (!(r instanceof Event) || !(r.target instanceof Node))
          return !1;
        const n = ki(r.target);
        return !n || !Xr(n) ? !1 : (r.preventDefault(), !0);
      }, Oe),
      e.registerCommand(Vy, t, Oe),
      e.registerCommand(Wy, t, Oe),
      e.registerCommand(Hy, t, Oe)
    );
  }, [e]), null;
}
function qC(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Xr(e) {
  return Ye(e, Al) ?? void 0;
}
function Al(e) {
  return Fe(e) || Th(e);
}
function gs() {
  const e = O();
  return P(e) ? Xr(e.anchor.getNode()) !== void 0 || Xr(e.focus.getNode()) !== void 0 : !1;
}
function RC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function $C(e, t) {
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
      const f = document.createRange();
      if (f.selectNode(u), o.compareBoundaryPoints(Range.START_TO_START, f) > 0)
        c = u;
      else {
        l = u;
        break;
      }
    }
    if (!c)
      return !1;
    const d = document.createRange();
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), RC(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function LC(e, t, r, n) {
  if (!YC(t) || $C(e, r))
    return !1;
  const i = r === "up" ? Bx(t) : Kx(t);
  return i && n.preventDefault(), i;
}
function IC({ viewOptions: e }) {
  const [t] = ae();
  return DC(t, e), null;
}
function DC(e, t) {
  z(() => {
    if (!e.hasNodes([hr, St, Ae]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = O();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = Td(o), u = VC(i, xd(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return LC(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = Td(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return xd(a, n.key) ? l = !c && vd(i, "next") || !c && FC(i) || GC(i) || !c && s && Cd(i, "next") : UC(a, n.key) && (l = !c && vd(i, "previous") || !c && zC(i) || JC(i, t) || !c && s && Cd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Nr, r, Oe);
  }, [e, t]);
}
function Td(e) {
  return e.dir || "ltr";
}
function xd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function UC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function nc(e) {
  if (!I(e) || e.getMarker() !== "fp")
    return;
  const t = Qt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function FC(e) {
  const t = nc(jp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Zt(t, 0), !0);
}
function zC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = nc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : _d(n);
  }
  if (t.offset === 0) {
    const n = nc(r);
    return n ? _d(n) : !1;
  }
  return !1;
}
function _d(e) {
  const t = e.getPreviousSibling();
  if (!t)
    return !1;
  if (E(t))
    return t.select(), !0;
  if (L(t)) {
    const i = t.getLastDescendant();
    return E(i) ? i.select() : t.selectEnd(), !0;
  }
  const r = e.getParent();
  if (!r)
    return !1;
  const n = e.getIndexWithinParent();
  return r.select(n, n), !0;
}
const ao = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function KC(e) {
  if (ao)
    for (const { segment: r } of ao.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function BC(e) {
  if (ao) {
    let n = 0;
    for (const { index: i } of ao.segment(e))
      n = i;
    return n;
  }
  const t = e.codePointAt(Math.max(0, e.length - 2)), r = t !== void 0 && t > 65535;
  return Math.max(0, e.length - (r ? 2 : 1));
}
function ng(e) {
  for (let t = e; t; t = t.getParent())
    if (L(t) && !t.isInline())
      return t;
}
function ig(e) {
  return !!e && w(e) && Xr(e) !== void 0;
}
function hi(e) {
  return E(e) && !e.isToken() && !ig(e) && e.getTextContentSize() > 0;
}
function sg(e) {
  return wn(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || ig(e)) && e.getTextContentSize() > 0 : qn(e) ? !He(e) : !1;
}
function gi(e, t, r) {
  for (let n = e; n && !n.is(r); ) {
    const i = t === "next" ? n.getNextSibling() : n.getPreviousSibling();
    if (i)
      return i;
    n = n.getParent();
  }
}
function Fo(e, t, r) {
  for (let n = e; n; ) {
    if (sg(n))
      return n;
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? gi(n, t, r);
      continue;
    }
    if (hi(n))
      return n;
    n = gi(n, t, r);
  }
}
function Pl(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? gi(e, n, i) : r === "text" && sg(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : gi(e, n, i);
}
function ba(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Pl(e.node, e.offset, e.kind, "previous", t), n = Fo(r, "previous", t);
  if (!n)
    return e;
  if (hi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function jC(e, t) {
  const r = e.getNode(), n = ng(r);
  if (!n)
    return;
  if (e.type === "text" && hi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ba({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Pl(r, e.offset, e.type, t, n), s = Fo(i, t, n);
  if (!s)
    return;
  if (hi(s)) {
    const c = s.getTextContent(), l = t === "next" ? KC(c) : BC(c);
    return ba({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ba({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function og(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = jC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Cd(e, t) {
  return og(e, t, "collapse");
}
function VC(e, t) {
  return og(e, t, "extend");
}
function WC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && hi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Pl(n, e.offset, e.type, t, r);
  return Fo(i, t, r) === void 0;
}
function HC(e, t) {
  const r = Re();
  for (let n = e; n; ) {
    const i = gi(n, t, r), s = i && Fo(i, t, r);
    if (!s)
      return;
    if (n = Xr(s), !n)
      return s;
  }
}
function vd(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Xr(n))
    return !1;
  const i = ng(n);
  if (!i || !WC(r, t, i))
    return !1;
  const s = gi(i, t, Re()), o = s && Xr(s);
  if (!o)
    return !1;
  const a = HC(o, t);
  if (!a)
    return !0;
  if (hi(a)) {
    const d = t === "next" ? 0 : a.getTextContentSize();
    return a.select(d, d), !0;
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
function GC(e) {
  const t = e.anchor.getNode(), r = jp(e);
  if (K(r) && !w(r.getFirstChild())) {
    if (Se(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(Se(i) && Mi(i)) && i.selectStart(), !0;
      }
    } else return Xt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (Se(t) && K(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Sd(r), !0;
  }
  const n = r?.getParent();
  if (Xt(r) && K(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Sd(n) : n.selectEnd(), !0;
  }
  return !1;
}
function JC(e, t) {
  const r = Yk(e);
  if (Cs(r) && !r.getPreviousSibling())
    return !0;
  if (!(e.anchor.offset === 0))
    return !1;
  const i = e.anchor.getNode();
  if (gt(i.getParent()))
    return !0;
  if (K(r) && r.getIsCollapsed()) {
    const o = r.getPreviousSibling();
    if (!Dn(o))
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
    const a = Ye(o, (c) => K(c));
    if (K(a) && a.getIsCollapsed()) {
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
  if (mt(r)) {
    const o = s.getParent();
    if (!o)
      return !1;
    const a = s.getIndexWithinParent();
    return o.select(a, a), !0;
  }
  return !1;
}
function YC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return he(t) && qn(t);
}
function XC() {
  const [e] = ae();
  return QC(e), null;
}
function QC(e) {
  z(() => {
    if (!e.hasNodes([ye]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return je(
      e.registerNodeTransform(ye, tv),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ye, yT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ye, lh),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ye, (t) => ds(Cn("char"), t)),
      e.registerNodeTransform(Be, rv)
    );
  }, [e]);
}
function ka(e) {
  return e.getChildren().some(w);
}
function ZC(e, t) {
  const r = t.getFirstChild();
  if (!w(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (qo(n)) {
    const i = n.getTextContent();
    i.startsWith(R) && (i === R ? n.remove() : n.setTextContent(i.slice(R.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function ev(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  w(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function tv(e) {
  if (!I(e))
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
  const r = ne(e, xn), n = e.getUnknownAttributes(), i = e.getNextSibling();
  if (I(i) && _n({ style: t, cid: r }, i) && Pt(n, i.getUnknownAttributes()))
    if (ka(i)) {
      if (ZC(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  I(s) && _n({ style: t, cid: r }, s) && Pt(n, s.getUnknownAttributes()) && (ka(s) ? ev(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function rv(e) {
  const t = e.getParent();
  if (!I(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(Ft) && (e.setTextContent(r.slice(1)), e.selectEnd());
}
function ag(e) {
  return e.replaceAll("	", " ");
}
function cg() {
  const e = O();
  return !!e && !e.isCollapsed();
}
function lg(e) {
  const t = () => !cg();
  return je(e.registerCommand(ii, t, ft), e.registerCommand(vr, t, ft));
}
const Nl = (e) => {
  e.dispatchCommand(ii, null);
}, Ol = (e) => {
  e.dispatchCommand(vr, null);
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
      n.setData(o, ag(a));
    }
    const s = new ClipboardEvent("paste", {
      clipboardData: n
    });
    e.dispatchCommand(cr, s);
  });
}, ql = (e) => {
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
    e.dispatchCommand(cr, i);
  });
};
function nv() {
  const [e] = ae();
  return z(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(oi ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), Nl(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), Ol(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? ql(e) : wl(e)));
    };
    return je(
      // Every copy/cut this plugin's shortcuts synthesize — and every one the context menu or an
      // editor ref synthesizes against the same editor — passes through this guard.
      lg(e),
      e.registerRootListener((r, n) => {
        n !== null && n.removeEventListener("keydown", t), r !== null && r.addEventListener("keydown", t);
      })
    );
  }, [e]), null;
}
function iv({ logger: e }) {
  const [t] = ae();
  return z(() => je(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Nr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), Vr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(cr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Vr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Lc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, Vr)
  ), [t, e]), null;
}
function sv({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), S("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: S("span", { className: "text", children: i.title }) });
}
function ov({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return S("div", { className: "typeahead-popover", children: S("ul", { children: e.map((i, s) => S(sv, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let av = 0;
class Ii {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${av++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function cv({ options: e } = {}) {
  const [t] = ae(), [r, n] = de(() => !t.isEditable()), [i, s] = de({
    isOpen: !1,
    x: 0,
    y: 0
  }), [o, a] = de(void 0), c = Ke(() => {
    const u = [
      // Cut/Copy with nothing selected leave the clipboard alone rather than writing a placeholder
      // over it — `registerEmptyCopyGuard` (mounted below) claims the command, so no selection
      // check is needed here. They are not disabled in that case, because this option list is
      // built once per editor rather than per menu opening, so its `isDisabled` flags cannot track
      // the live selection.
      new Ii("Cut", {
        onSelect: () => {
          Ol(t);
        },
        isDisabled: r
      }),
      new Ii("Copy", {
        onSelect: () => {
          Nl(t);
        }
      }),
      new Ii("Paste", {
        onSelect: () => {
          wl(t);
        },
        isDisabled: r
      }),
      new Ii("Paste as Plain Text", {
        onSelect: () => {
          ql(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((h) => new Ii(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = me(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  z(() => lg(t), [t]), z(() => {
    const u = (f) => {
      const h = f.target;
      t.getRootElement() === h || $p(h) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
    };
    return t.registerRootListener((f, h) => {
      h?.removeEventListener("contextmenu", u), f && f.addEventListener("contextmenu", u);
    });
  }, [t]), z(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return globalThis.addEventListener("scroll", u, !0), () => globalThis.removeEventListener("scroll", u, !0);
  }, [i.isOpen, l]), z(() => {
    if (!i.isOpen)
      return;
    const u = () => {
      l();
    };
    return document.addEventListener("pointerdown", u), () => document.removeEventListener("pointerdown", u);
  }, [i.isOpen, l]), z(() => {
    if (!i.isOpen)
      return;
    const u = (f) => {
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
    return document.addEventListener("keydown", u, !0), () => document.removeEventListener("keydown", u, !0);
  }, [i.isOpen, l, c, o, t]), z(() => t.registerEditableListener((u) => {
    n(!u);
  }), [t]);
  const d = ee(null);
  return Ts(() => {
    const u = d.current;
    if (!u)
      return;
    const { width: f, height: h } = u.getBoundingClientRect(), y = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), p = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    u.style.left = `${y}px`, u.style.top = `${p}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? kb.createPortal(S("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: S(ov, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function lv(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function uv(e) {
  if (!Yy(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function dv(e) {
  return mt(e);
}
function Ta(e, t, r) {
  const n = ki(t.node);
  if (!qn(n) || dv(n))
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
function fv(e, t) {
  if (O())
    return !1;
  const r = e.getRootElement(), n = Gy(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !zf(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let d, u;
  if (n.isCollapsed)
    d = Ta(e, c, uv(c)), u = d;
  else {
    const g = lv(n.getRangeAt(0), c);
    d = Ta(e, c, g ? "before" : "after"), u = Ta(e, l, g ? "after" : "before");
  }
  if (!d && !u)
    return !1;
  const f = d ?? c, h = u ?? l, y = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: h.node,
    focusOffset: h.offset
  }, p = Jy(y, e);
  return p ? (si(p), p.dirty = !t, t) : !1;
}
function pv() {
  const [e] = ae(), t = ee(!1), r = ee(!1);
  return z(() => {
    const n = (s) => {
      "button" in s && s.button !== 0 || (t.current = !0);
    }, i = () => {
      t.current = !1, r.current && (r.current = !1, e.update(() => {
        const s = O();
        P(s) && (s.dirty = !0);
      }));
    };
    return e.registerRootListener((s, o) => {
      const a = o?.ownerDocument;
      a?.removeEventListener("pointerdown", n, !0), a?.removeEventListener("pointerup", i, !0), a?.removeEventListener("pointercancel", i, !0), t.current = !1, r.current = !1;
      const c = s?.ownerDocument;
      c?.addEventListener("pointerdown", n, !0), c?.addEventListener("pointerup", i, !0), c?.addEventListener("pointercancel", i, !0);
    });
  }, [e]), z(() => e.registerCommand(dr, () => (fv(e, t.current) && (r.current = !0), !1), st), [e]), null;
}
function hv() {
  const [e] = ae();
  return z(() => e.registerCommand(Nr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(oi ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, st), [e]), null;
}
function gv({ isEditable: e }) {
  const [t] = ae();
  return Ts(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Md(e) {
  return !!e && Gc(se(e));
}
function ug(e) {
  const [t] = ae(), r = ee(void 0), n = me((i) => {
    const s = O(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Md(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = $o(d, u);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const h = Wk();
        i.insertAfter(h), r.current = h.getKey(), l = h.getKey();
      }
      Zt(d, u);
    }
    if (a && c && a !== o && a !== l) {
      const d = se(a);
      E(d) && d.remove(), r.current === a && (r.current = void 0);
    }
  }, []);
  return z(() => {
    const i = () => {
      const a = e(), c = O(), l = P(c) && c.isCollapsed() ? c.anchor.key : void 0, d = r.current;
      (a || d && d !== l) && (Wr(Hr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (vs(c) || !c.includes(ci))
        return;
      const l = O(), d = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Hk(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(ci).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = je(t.registerCommand(dr, () => (i(), !1), kn), t.registerCommand(Ic, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Md(a);
      }), c && t.update(() => {
        const l = se(a);
        E(l) && l.remove();
      }, { tag: Hr }), r.current = void 0, !1;
    }, kn), t.registerNodeTransform(Be, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function mv() {
  const e = O();
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: t } = e;
  if (t.type !== "element")
    return;
  const r = t.getNode();
  if (!L(r))
    return;
  const n = r.getChildren(), i = n[t.offset - 1];
  if (!he(i) || $o(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || he(s))
    return i;
}
function yv() {
  return ug(mv), null;
}
function bv({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
  const [o] = ae();
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
        const d = o.getRootElement(), u = d?.ownerDocument.activeElement, f = d != null && u != null && (d === u || d.contains(u));
        o.update(() => {
          f || Wr(Xy), o.setEditorState(l), o.dispatchCommand(Qy, void 0);
        }, { tag: op });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function kv({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return Tv(t, n), xv(i, e, r, n), null;
}
function Tv(e, t) {
  const r = ee(void 0), n = ee(void 0), i = e.noteCallers, s = e.crossRefCallers;
  z(() => {
    let o = i;
    (!o || o.length <= 0) && (o = A_), r.current !== o && (r.current = o, Ed("note-callers", o, t));
  }, [t, i]), z(() => {
    let o = s;
    (!o || o.length <= 0) && (o = P_), n.current !== o && (n.current = o, Ed("cross-ref-callers", o, t));
  }, [t, s]);
}
function xv(e, t, r, n) {
  z(() => {
    if (!e.hasNodes([ye, Ae, Jt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => Av(s));
    return je(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ae, (s) => _v(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ye, Cv),
      e.registerNodeTransform(Be, vv),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Jt, Sv),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Jt, (s, { prevEditorState: o }) => Mv(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(dr, () => Ev(e, t, r, n), ft),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function _v(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => mt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !w(i) && i.getTextContent() !== Ot(e.getCaller()) && e.insertBefore(i);
  }
}
function Cv(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => mt(o));
  if (!I(e) || !K(t) || !n)
    return;
  const i = Jc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  E(s) ? s.getTextContent() !== R && s.setTextContent(R) : e.insertAfter(ge(R));
}
function vv(e) {
  const t = Qt(e), r = t?.getChildren(), n = r?.find((o) => mt(o));
  if (!E(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!w(e) && K(i) && e.getTextContent() !== R && (e.setTextContent(R), e.selectEnd()), I(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(Ft) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Jc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function Sv(e) {
  if (!mt(e))
    return;
  const t = e.getNextSibling();
  !E(t) || w(t) ? e.insertAfter(ge(R)) : t.getTextContent() !== R && t.setTextContent(R);
}
function Mv(e, t) {
  for (const [r, n] of e) {
    if (n !== "destroyed")
      continue;
    const i = t.read(() => {
      const o = se(r), a = o?.getParent();
      return mt(o) && K(a) && a.getCaller() === rs;
    }), s = document.querySelector(".editor-input");
    !i || !s || (s.classList.add("reset-counters"), s.offsetHeight, s.classList.remove("reset-counters"));
  }
}
function Ev(e, t, r, n) {
  if (r?.noteMode !== "expandInline")
    return !1;
  const i = O();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor, o = s.getNode();
  if (t.current) {
    const a = Ye(o, (c) => K(c));
    if (a)
      t.current !== a.getKey() && (t.current = a.getKey());
    else {
      const c = se(t.current);
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Di(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Di(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Di(e, c, n);
    } else if (!a) {
      const c = Ye(o, (l) => K(l));
      if (c && c.getIsCollapsed() && Se(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Di(e, l, n);
      }
    }
  }
  if (Se(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Dn(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Di(e, l, n);
    }
  }
  return !1;
}
function Di(e, t, r) {
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
function Av(e) {
  const t = O();
  if (!P(t))
    return;
  const r = t.anchor, n = t.focus, i = r.getNode(), s = n.getNode();
  if (K(i) && E(s)) {
    e.preventDefault();
    const o = Rc();
    o.anchor.set(s.getKey(), 0, "text"), o.focus.set(s.getKey(), n.offset, "text"), si(o);
  }
}
function Ed(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (Pv(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function Pv(e, t) {
  return (
    // This check could be simpler but as is also works for test mocks.
    typeof e == "object" && e !== null && "name" in e && e.name === t && "symbols" in e && typeof e.symbols == "string"
  );
}
function zo(e) {
  if (e.getIsCollapsed() !== !1)
    return [];
  const t = [];
  for (const n of e.getChildren()) {
    if (!w(n) || n.getMarkerSyntax() !== "opening")
      break;
    t.push(n);
  }
  const r = cs(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function Nv(e) {
  const t = e.getParent();
  if (K(t))
    return zo(t).some((r) => r.is(e)) ? t : void 0;
}
function co(e) {
  const t = zo(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function Ov(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function wv(e) {
  const t = Zy();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= co(e);
  const i = Ov(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= co(e);
}
function ic(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = Nv(t);
  if (r)
    return qv(r, t, e.offset) ? void 0 : r;
}
function qv(e, t, r) {
  const n = zo(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function Rv(e) {
  const t = zo(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Zt(e, co(e));
}
function $v(e = !1) {
  const t = O();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return Lv(t.anchor, t.focus);
  const r = ic(t.anchor);
  if (!r)
    return !1;
  if (!e && wv(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Zt(n, r.getIndexWithinParent());
  } else
    Rv(r);
  return !0;
}
function Lv(e, t) {
  const r = ic(e), n = ic(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Ad(e, r, i), n && Ad(t, n, !i), !0;
}
function Ad(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), co(t), "element");
}
function Iv() {
  const [e] = ae(), t = ee(!1);
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
  }, [e]), z(() => e.registerCommand(dr, () => ($v(t.current) && Wr(Hr), !1), kn), [e]), null;
}
function Dv({ onChange: e }) {
  const [t] = ae();
  return z(() => t.registerCommand(dr, () => {
    const r = bl();
    return e?.(r), !1;
  }, ft), [t, e]), null;
}
function Uv() {
  const [e] = ae();
  return Fv(e), null;
}
function Fv(e) {
  z(() => {
    if (!e.hasNodes([rt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(rt, (t) => zv(t, e));
  }, [e]);
}
function zv(e, t) {
  Qa(t, e.getKey()) && Rh(e.getFirstChild()), !(!ce(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return ce(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function dg({ onStateChange: e }) {
  const [t] = ae(), [r, n] = de(t), i = ee(!1), s = ee(!1), o = ee(void 0), a = ee(void 0), c = me(() => {
    const l = O();
    let d;
    if (P(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let h = u.getKey() === "root" ? u : Ye(u, (b) => {
        const x = b.getParent();
        return x !== null && eb(x);
      });
      h === null && (h = u.getTopLevelElementOrThrow()), fs(h) && (h = Ye(u, ce) ?? h);
      const y = h.getKey(), p = r.getElementByKey(y), g = Qk(u, f);
      if (g && zx(g) && (d = g.getMarker()), p !== null && (ce(h) || gt(h) || Cs(h))) {
        o.current = h.getMarker(), a.current = d, e?.({
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
  return z(() => t.registerCommand(dr, (l, d) => (c(), n(d), !1), st), [t, c]), z(() => je(r.registerUpdateListener(({ editorState: l }) => {
    l.read(() => {
      c();
    });
  }), r.registerCommand(tb, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), st), r.registerCommand(rb, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), st)), [c, r, e]), null;
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
function Qr(e) {
  return e ? Se(e) ? e : Ye(e, (r) => Se(r)) ?? void 0 : void 0;
}
function pg(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Qr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Rl(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !So(e) ? !1 : e.getNodes().some((t) => he(t));
}
function hg(e) {
  if (!P(e) || !e.isCollapsed())
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
function gg(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Qr(r);
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
function Pd(e, t) {
  return !!sc(e, t);
}
function sc(e, t) {
  if (!P(e) || !e.isCollapsed())
    return;
  const { anchor: r } = e, n = r.getNode();
  if (r.type === "element" && L(n)) {
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
  if (!P(e))
    return !1;
  const r = Qr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ni(e) {
  return Rl(e) || pg(e);
}
function mg(e, t) {
  if (Rl(e) || pg(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return hg(e) && lo(e, "backward") || Pd(e, "backward");
    case "deleteForward":
      return gg(e) && lo(e, "forward") || Pd(e, "forward");
    case "insertText":
      return !1;
  }
}
function Kv(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = sc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (hg(e) && lo(e, "backward")) {
        const n = Qr(e.anchor.getNode());
        if (Se(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = sc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (gg(e) && lo(e, "forward")) {
        const i = Qr(e.anchor.getNode())?.getNextSibling();
        if (Se(i))
          return { kind: "para", node: i };
      }
      return;
    }
  }
}
function Nd(e, t) {
  if (!e)
    return !1;
  if (t.kind === "verse")
    return So(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!P(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!P(e) || e.isCollapsed())
    return !1;
  const r = Qr(e.anchor.getNode()), n = Qr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function yg(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function Bv(e) {
  const t = e.getPreviousSibling();
  if (!Se(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? yg(r) : Mi(t) || t.selectStart();
}
function bg(e) {
  return he(e) || Ge(e) ? [] : Se(e) ? e.getChildren().flatMap(bg) : [e];
}
function jv(e) {
  const t = [];
  for (const r of e) {
    const n = bg(r);
    n.length !== 0 && (Se(r) && t.length > 0 && t.push(ge(" ")), t.push(...n));
  }
  return t;
}
function Od(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Vv(e) {
  if (Array.isArray(e)) return e;
}
function Wv(e, t) {
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
function Hv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gv(e, t) {
  return Vv(e) || Wv(e, t) || Jv(e, t) || Hv();
}
function Jv(e, t) {
  if (e) {
    if (typeof e == "string") return Od(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Od(e, t) : void 0;
  }
}
const kg = Object.entries, wd = Object.setPrototypeOf, Yv = Object.isFrozen, Xv = Object.getPrototypeOf, Qv = Object.getOwnPropertyDescriptor;
let nt = Object.freeze, at = Object.seal, Zn = Object.create, Tg = typeof Reflect < "u" && Reflect, oc = Tg.apply, ac = Tg.construct;
nt || (nt = function(t) {
  return t;
});
at || (at = function(t) {
  return t;
});
oc || (oc = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    i[s - 2] = arguments[s];
  return t.apply(r, i);
});
ac || (ac = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const Yn = Xe(Array.prototype.forEach), Zv = Xe(Array.prototype.lastIndexOf), qd = Xe(Array.prototype.pop), Xn = Xe(Array.prototype.push), eS = Xe(Array.prototype.splice), Br = Array.isArray, Wi = Xe(String.prototype.toLowerCase), xa = Xe(String.prototype.toString), Rd = Xe(String.prototype.match), Ui = Xe(String.prototype.replace), $d = Xe(String.prototype.indexOf), tS = Xe(String.prototype.trim), rS = Xe(Number.prototype.toString), nS = Xe(Boolean.prototype.toString), Ld = typeof BigInt > "u" ? null : Xe(BigInt.prototype.toString), Id = typeof Symbol > "u" ? null : Xe(Symbol.prototype.toString), et = Xe(Object.prototype.hasOwnProperty), Fi = Xe(Object.prototype.toString), Ze = Xe(RegExp.prototype.test), hn = iS(TypeError);
function Xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return oc(e, t, n);
  };
}
function iS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ac(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wi;
  if (wd && wd(e, null), !Br(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (Yv(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function sS(e) {
  for (let t = 0; t < e.length; t++)
    et(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = Zn(null);
  for (const n of kg(e)) {
    var r = Gv(n, 2);
    const i = r[0], s = r[1];
    et(e, i) && (Br(s) ? t[i] = sS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function oS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return rS(e);
    case "boolean":
      return nS(e);
    case "bigint":
      return Ld ? Ld(e) : "0";
    case "symbol":
      return Id ? Id(e) : "Symbol()";
    case "undefined":
      return Fi(e);
    case "function":
    case "object": {
      if (e === null)
        return Fi(e);
      const t = e, r = jt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Fi(n);
      }
      return Fi(e);
    }
    default:
      return Fi(e);
  }
}
function jt(e, t) {
  for (; e !== null; ) {
    const n = Qv(e, t);
    if (n) {
      if (n.get)
        return Xe(n.get);
      if (typeof n.value == "function")
        return Xe(n.value);
    }
    e = Xv(e);
  }
  function r() {
    return null;
  }
  return r;
}
function aS(e) {
  try {
    return Ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const Dd = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), _a = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ca = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), cS = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), va = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), lS = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ud = nt(["#text"]), Fd = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Sa = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), zd = nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Is = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), uS = at(/{{[\w\W]*|^[\w\W]*}}/g), dS = at(/<%[\w\W]*|^[\w\W]*%>/g), fS = at(/\${[\w\W]*/g), pS = at(/^data-[\-\w.\u00B7-\uFFFF]+$/), hS = at(/^aria-[\-\w]+$/), Kd = at(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), gS = at(/^(?:\w+script|data):/i), mS = at(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), yS = at(/^html$/i), bS = at(/^[a-z][.\w]*(-[.\w]+)+$/i), Bd = at(/<[/\w!]/g), jd = at(/<[/\w]/g), kS = at(/<\/no(script|embed|frames)/i), TS = at(/\/>/i), At = {
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
}, xS = function() {
  return typeof window > "u" ? null : window;
}, _S = function(t, r) {
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
}, Vd = function() {
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
  return et(t, r) && Br(t[r]) ? pe(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function xg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xS();
  const t = (D) => xg(D);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== At.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, h = jt(f, "cloneNode"), y = jt(f, "remove"), p = jt(f, "nextSibling"), g = jt(f, "childNodes"), b = jt(f, "parentNode"), x = jt(f, "shadowRoot"), v = jt(f, "attributes"), M = o && o.prototype ? jt(o.prototype, "nodeType") : null, A = o && o.prototype ? jt(o.prototype, "nodeName") : null, F = o && o.prototype ? jt(o.prototype, "ownerDocument") : null;
  if (typeof s == "function") {
    const D = r.createElement("template");
    D.content && D.content.ownerDocument && (r = D.content.ownerDocument);
  }
  let B, j = "", _, U = !1, W = 0;
  const fe = function() {
    if (W > 0)
      throw hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Q = function(m) {
    fe(), W++;
    try {
      return B.createHTML(m);
    } finally {
      W--;
    }
  }, $e = function(m) {
    fe(), W++;
    try {
      return B.createScriptURL(m);
    } finally {
      W--;
    }
  }, be = function() {
    return U || (_ = _S(u, i), U = !0), _;
  }, tr = r, Le = tr.implementation, nn = tr.createNodeIterator, mr = tr.createDocumentFragment, Et = tr.getElementsByTagName, re = n.importNode;
  let N = Vd();
  t.isSupported = typeof kg == "function" && typeof b == "function" && Le && Le.createHTMLDocument !== void 0;
  const G = uS, ue = dS, Ee = fS, Z = pS, Me = hS, yr = gS, Rt = mS, sn = bS;
  let We = Kd, le = null;
  const yt = pe({}, [...Dd, ..._a, ...Ca, ...va, ...Ud]);
  let _e = null;
  const br = pe({}, [...Fd, ...Sa, ...zd, ...Is]);
  let Ne = Object.seal(Zn(null, {
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
  })), kr = null, Pi = null;
  const bt = Object.seal(Zn(null, {
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
  let As = !0, Tr = !0, on = !1, Ni = !0, rr = !1, Bt = !0, q = !1, V = !1, J = null, X = null, ke = !1, Qe = !1, nr = !1, an = !1, Oi = !0, au = !1;
  const cu = "user-content-";
  let Ho = !0, Ps = !1, zn = {}, ir = null;
  const Go = pe({}, [
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
  let lu = null;
  const uu = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Jo = null;
  const du = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ns = "http://www.w3.org/1998/Math/MathML", Os = "http://www.w3.org/2000/svg", sr = "http://www.w3.org/1999/xhtml";
  let Kn = sr, Yo = !1, Xo = null;
  const py = pe({}, [Ns, Os, sr], xa), fu = nt(["mi", "mo", "mn", "ms", "mtext"]);
  let Qo = pe({}, fu);
  const pu = nt(["annotation-xml"]);
  let Zo = pe({}, pu);
  const hy = pe({}, ["title", "style", "font", "a", "script"]);
  let wi = null;
  const gy = ["application/xhtml+xml", "text/html"], my = "text/html";
  let Ie = null, Bn = null;
  const yy = r.createElement("form"), hu = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, ea = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Bn && Bn === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = ct(m), wi = // eslint-disable-next-line unicorn/prefer-includes
    gy.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? my : m.PARSER_MEDIA_TYPE, Ie = wi === "application/xhtml+xml" ? xa : Wi, le = Fr(m, "ALLOWED_TAGS", yt, {
      transform: Ie
    }), _e = Fr(m, "ALLOWED_ATTR", br, {
      transform: Ie
    }), Xo = Fr(m, "ALLOWED_NAMESPACES", py, {
      transform: xa
    }), Jo = Fr(m, "ADD_URI_SAFE_ATTR", du, {
      transform: Ie,
      base: du
    }), lu = Fr(m, "ADD_DATA_URI_TAGS", uu, {
      transform: Ie,
      base: uu
    }), ir = Fr(m, "FORBID_CONTENTS", Go, {
      transform: Ie
    }), kr = Fr(m, "FORBID_TAGS", ct({}), {
      transform: Ie
    }), Pi = Fr(m, "FORBID_ATTR", ct({}), {
      transform: Ie
    }), zn = et(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? ct(m.USE_PROFILES) : m.USE_PROFILES : !1, As = m.ALLOW_ARIA_ATTR !== !1, Tr = m.ALLOW_DATA_ATTR !== !1, on = m.ALLOW_UNKNOWN_PROTOCOLS || !1, Ni = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, rr = m.SAFE_FOR_TEMPLATES || !1, Bt = m.SAFE_FOR_XML !== !1, q = m.WHOLE_DOCUMENT || !1, Qe = m.RETURN_DOM || !1, nr = m.RETURN_DOM_FRAGMENT || !1, an = m.RETURN_TRUSTED_TYPE || !1, ke = m.FORCE_BODY || !1, Oi = m.SANITIZE_DOM !== !1, au = m.SANITIZE_NAMED_PROPS || !1, Ho = m.KEEP_CONTENT !== !1, Ps = m.IN_PLACE || !1, We = aS(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Kd, Kn = typeof m.NAMESPACE == "string" ? m.NAMESPACE : sr, Qo = et(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(m.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, fu), Zo = et(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? ct(m.HTML_INTEGRATION_POINTS) : pe({}, pu);
    const C = et(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? ct(m.CUSTOM_ELEMENT_HANDLING) : Zn(null);
    if (Ne = Zn(null), et(C, "tagNameCheck") && hu(C.tagNameCheck) && (Ne.tagNameCheck = C.tagNameCheck), et(C, "attributeNameCheck") && hu(C.attributeNameCheck) && (Ne.attributeNameCheck = C.attributeNameCheck), et(C, "allowCustomizedBuiltInElements") && typeof C.allowCustomizedBuiltInElements == "boolean" && (Ne.allowCustomizedBuiltInElements = C.allowCustomizedBuiltInElements), at(Ne), rr && (Tr = !1), nr && (Qe = !0), zn && (le = pe({}, Ud), _e = Zn(null), zn.html === !0 && (pe(le, Dd), pe(_e, Fd)), zn.svg === !0 && (pe(le, _a), pe(_e, Sa), pe(_e, Is)), zn.svgFilters === !0 && (pe(le, Ca), pe(_e, Sa), pe(_e, Is)), zn.mathMl === !0 && (pe(le, va), pe(_e, zd), pe(_e, Is))), bt.tagCheck = null, bt.attributeCheck = null, et(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? bt.tagCheck = m.ADD_TAGS : Br(m.ADD_TAGS) && (le === yt && (le = ct(le)), pe(le, m.ADD_TAGS, Ie))), et(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? bt.attributeCheck = m.ADD_ATTR : Br(m.ADD_ATTR) && (_e === br && (_e = ct(_e)), pe(_e, m.ADD_ATTR, Ie))), et(m, "ADD_URI_SAFE_ATTR") && Br(m.ADD_URI_SAFE_ATTR) && pe(Jo, m.ADD_URI_SAFE_ATTR, Ie), et(m, "FORBID_CONTENTS") && Br(m.FORBID_CONTENTS) && (ir === Go && (ir = ct(ir)), pe(ir, m.FORBID_CONTENTS, Ie)), et(m, "ADD_FORBID_CONTENTS") && Br(m.ADD_FORBID_CONTENTS) && (ir === Go && (ir = ct(ir)), pe(ir, m.ADD_FORBID_CONTENTS, Ie)), Ho && (le["#text"] = !0), q && pe(le, ["html", "head", "body"]), le.table && (pe(le, ["tbody"]), delete kr.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const $ = B;
      B = m.TRUSTED_TYPES_POLICY;
      try {
        j = Q("");
      } catch (H) {
        throw B = $, H;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (B = void 0, j = "") : (B === void 0 && (B = be()), B && typeof j == "string" && (j = Q("")));
    nt && nt(m), Bn = m;
  }, gu = pe({}, [..._a, ...Ca, ...cS]), mu = pe({}, [...va, ...lS]), by = function(m, C, $) {
    return C.namespaceURI === sr ? m === "svg" : C.namespaceURI === Ns ? m === "svg" && ($ === "annotation-xml" || Qo[$]) : !!gu[m];
  }, ky = function(m, C, $) {
    return C.namespaceURI === sr ? m === "math" : C.namespaceURI === Os ? m === "math" && Zo[$] : !!mu[m];
  }, Ty = function(m, C, $) {
    return C.namespaceURI === Os && !Zo[$] || C.namespaceURI === Ns && !Qo[$] ? !1 : !mu[m] && (hy[m] || !gu[m]);
  }, xy = function(m) {
    let C = b(m);
    (!C || !C.tagName) && (C = {
      namespaceURI: Kn,
      tagName: "template"
    });
    const $ = Wi(m.tagName), H = Wi(C.tagName);
    return Xo[m.namespaceURI] ? m.namespaceURI === Os ? by($, C, H) : m.namespaceURI === Ns ? ky($, C, H) : m.namespaceURI === sr ? Ty($, C, H) : !!(wi === "application/xhtml+xml" && Xo[m.namespaceURI]) : !1;
  }, Ir = function(m) {
    Xn(t.removed, {
      element: m
    });
    try {
      b(m).removeChild(m);
    } catch {
      if (y(m), !b(m))
        throw hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ws = function(m) {
    qi(m);
    const C = g(m);
    if (C) {
      const H = [];
      Yn(C, (Y) => {
        Xn(H, Y);
      }), Yn(H, (Y) => {
        try {
          y(Y);
        } catch {
        }
      });
    }
    const $ = v(m);
    if ($)
      for (let H = $.length - 1; H >= 0; --H) {
        const Y = $[H], ie = Y && Y.name;
        if (typeof ie == "string")
          try {
            m.removeAttribute(ie);
          } catch {
          }
      }
  }, cn = function(m, C) {
    try {
      Xn(t.removed, {
        attribute: C.getAttributeNode(m),
        from: C
      });
    } catch {
      Xn(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(m), m === "is")
      if (Qe || nr)
        try {
          Ir(C);
        } catch {
        }
      else
        try {
          C.setAttribute(m, "");
        } catch {
        }
  }, _y = function(m) {
    const C = v(m);
    if (C)
      for (let $ = C.length - 1; $ >= 0; --$) {
        const H = C[$], Y = H && H.name;
        if (!(typeof Y != "string" || _e[Ie(Y)]))
          try {
            m.removeAttribute(Y);
          } catch {
          }
      }
  }, qi = function(m) {
    const C = [m];
    for (; C.length > 0; ) {
      const $ = C.pop();
      (M ? M($) : $.nodeType) === At.element && _y($);
      const Y = g($);
      if (Y)
        for (let ie = Y.length - 1; ie >= 0; --ie)
          C.push(Y[ie]);
    }
  }, Cy = function(m) {
    if (!Bt)
      return;
    const C = [m];
    for (; C.length > 0; ) {
      const $ = C.pop(), H = M ? M($) : $.nodeType;
      if (H === At.processingInstruction || H === At.comment && Ze(jd, $.data)) {
        try {
          y($);
        } catch {
        }
        continue;
      }
      if (H === At.element) {
        const ie = $, Te = Ie(A ? A($) : $.nodeName);
        try {
          ie.hasAttribute && ie.hasAttribute("patchsrc") && ie.removeAttribute("patchsrc"), ie.hasAttribute && ie.hasAttribute("for") && Te !== "label" && Te !== "output" && ie.removeAttribute("for");
        } catch {
        }
      }
      const Y = g($);
      if (Y)
        for (let ie = Y.length - 1; ie >= 0; --ie)
          C.push(Y[ie]);
    }
  }, yu = function(m) {
    let C = null, $ = null;
    if (ke)
      m = "<remove></remove>" + m;
    else {
      const ie = Rd(m, /^[\r\n\t ]+/);
      $ = ie && ie[0];
    }
    wi === "application/xhtml+xml" && Kn === sr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const H = B ? Q(m) : m;
    if (Kn === sr)
      try {
        C = new d().parseFromString(H, wi);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = Le.createDocument(Kn, "template", null);
      try {
        C.documentElement.innerHTML = Yo ? j : H;
      } catch {
      }
    }
    const Y = C.body || C.documentElement;
    return m && $ && Y.insertBefore(r.createTextNode($), Y.childNodes[0] || null), Kn === sr ? Et.call(C, q ? "html" : "body")[0] : q ? C.documentElement : Y;
  }, bu = function(m) {
    const C = F ? F(m) : m.ownerDocument;
    return nn.call(
      C || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, qs = function(m) {
    return m = Ui(m, G, " "), m = Ui(m, ue, " "), m = Ui(m, Ee, " "), m;
  }, ta = function(m) {
    var C;
    m.normalize();
    const $ = F ? F(m) : m.ownerDocument, H = nn.call(
      $ || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = H.nextNode();
    for (; Y; )
      Y.data = qs(Y.data), Y = H.nextNode();
    const ie = (C = m.querySelectorAll) === null || C === void 0 ? void 0 : C.call(m, "template");
    ie && Yn(ie, (Te) => {
      jn(Te.content) && ta(Te.content);
    });
  }, Rs = function(m) {
    const C = A ? A(m) : null;
    return typeof C != "string" || Ie(C) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    m.childNodes !== g(m);
  }, jn = function(m) {
    if (!M || typeof m != "object" || m === null)
      return !1;
    try {
      return M(m) === At.documentFragment;
    } catch {
      return !1;
    }
  }, Ri = function(m) {
    if (!M || typeof m != "object" || m === null)
      return !1;
    try {
      return typeof M(m) == "number";
    } catch {
      return !1;
    }
  };
  function or(D, m, C) {
    D.length !== 0 && Yn(D, ($) => {
      $.call(t, m, C, Bn);
    });
  }
  const vy = function(m, C) {
    return !!(Bt && m.hasChildNodes() && !Ri(m.firstElementChild) && Ze(Bd, m.textContent) && Ze(Bd, m.innerHTML) || Bt && m.namespaceURI === sr && C === "style" && Ri(m.firstElementChild) || m.nodeType === At.processingInstruction || Bt && m.nodeType === At.comment && Ze(jd, m.data));
  }, Sy = function(m, C, $) {
    if (!kr[C] && _u(C) && (Ne.tagNameCheck instanceof RegExp && Ze(Ne.tagNameCheck, C) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(C)))
      return !1;
    if (Ho && !ir[C]) {
      const H = b(m), Y = g(m);
      if (Y && H) {
        const ie = Y.length;
        for (let Te = ie - 1; Te >= 0; --Te) {
          const De = m === $ ? h(Y[Te], !0) : Y[Te];
          H.insertBefore(De, p(m));
        }
      }
    }
    return Ir(m), !0;
  }, ku = function(m, C, $, H) {
    return m.length === 0 ? C : C === $ || C === H ? ct(C) : C;
  }, Tu = function(m, C) {
    if (or(N.beforeSanitizeElements, m, null), m !== C && b(m) === null)
      return Ps && qi(m), !0;
    if (Rs(m))
      return Ir(m), !0;
    const $ = Ie(A ? A(m) : m.nodeName);
    if (le = ku(N.uponSanitizeElement, le, yt, J), or(N.uponSanitizeElement, m, {
      tagName: $,
      allowedTags: le
    }), m !== C && b(m) === null)
      return Ps && qi(m), !0;
    if (vy(m, $))
      return Ir(m), !0;
    if (kr[$] || !(bt.tagCheck instanceof Function && bt.tagCheck($)) && !le[$]) {
      const Y = Sy(m, $, C);
      return Y === !1 && or(N.afterSanitizeElements, m, null), Y;
    }
    if ((M ? M(m) : m.nodeType) === At.element && !xy(m) || ($ === "noscript" || $ === "noembed" || $ === "noframes") && Ze(kS, m.innerHTML))
      return Ir(m), !0;
    if (rr && m.nodeType === At.text) {
      const Y = qs(m.textContent);
      m.textContent !== Y && (Xn(t.removed, {
        element: m.cloneNode()
      }), m.textContent = Y);
    }
    return or(N.afterSanitizeElements, m, null), !1;
  }, xu = function(m, C, $) {
    if (Pi[C] || Bt && C === "patchsrc" || Bt && C === "for" && m !== "label" && m !== "output" || Oi && (C === "id" || C === "name") && ($ in r || $ in yy))
      return !1;
    const H = _e[C] || bt.attributeCheck instanceof Function && bt.attributeCheck(C, m);
    if (!(Tr && Ze(Z, C))) {
      if (!(As && Ze(Me, C))) {
        if (H) {
          if (!Jo[C]) {
            if (!Ze(We, Ui($, Rt, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && m !== "script" && $d($, "data:") === 0 && lu[m])) {
                if (!(on && !Ze(yr, Ui($, Rt, "")))) {
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
          !(_u(m) && (Ne.tagNameCheck instanceof RegExp && Ze(Ne.tagNameCheck, m) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(m)) && (Ne.attributeNameCheck instanceof RegExp && Ze(Ne.attributeNameCheck, C) || Ne.attributeNameCheck instanceof Function && Ne.attributeNameCheck(C, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          C === "is" && Ne.allowCustomizedBuiltInElements && (Ne.tagNameCheck instanceof RegExp && Ze(Ne.tagNameCheck, $) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck($)))
        ) return !1;
      }
    }
    return !0;
  }, My = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), _u = function(m) {
    return !My[Wi(m)] && Ze(sn, m);
  }, Ey = function(m, C, $, H) {
    if (B && typeof u == "object" && typeof u.getAttributeType == "function" && !$)
      switch (u.getAttributeType(m, C)) {
        case "TrustedHTML":
          return Q(H);
        case "TrustedScriptURL":
          return $e(H);
      }
    return H;
  }, Ay = function(m, C, $, H) {
    try {
      $ ? m.setAttributeNS($, C, H) : m.setAttribute(C, H), Rs(m) ? Ir(m) : qd(t.removed);
    } catch {
      cn(C, m);
    }
  }, Cu = function(m) {
    or(N.beforeSanitizeAttributes, m, null);
    const C = m.attributes;
    if (!C || Rs(m))
      return;
    _e = ku(N.uponSanitizeAttribute, _e, br, X);
    const $ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _e,
      forceKeepAttr: void 0
    };
    let H = C.length;
    const Y = Ie(m.nodeName);
    for (; H--; ) {
      const ie = C[H], Te = ie.name, De = ie.namespaceURI, kt = ie.value, Tt = Ie(Te), na = kt;
      let dt = Te === "value" ? na : tS(na);
      if ($.attrName = Tt, $.attrValue = dt, $.keepAttr = !0, $.forceKeepAttr = void 0, or(N.uponSanitizeAttribute, m, $), dt = $.attrValue, au && (Tt === "id" || Tt === "name") && $d(dt, cu) !== 0 && (cn(Te, m), dt = cu + dt), Bt && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        cn(Te, m);
        continue;
      }
      if (Tt === "attributename" && Rd(dt, "href")) {
        cn(Te, m);
        continue;
      }
      if (!$.forceKeepAttr) {
        if (!$.keepAttr) {
          cn(Te, m);
          continue;
        }
        if (!Ni && Ze(TS, dt)) {
          cn(Te, m);
          continue;
        }
        if (rr && (dt = qs(dt)), !xu(Y, Tt, dt)) {
          cn(Te, m);
          continue;
        }
        dt = Ey(Y, Tt, De, dt), dt !== na && Ay(m, Te, De, dt);
      }
    }
    or(N.afterSanitizeAttributes, m, null);
  }, $s = function(m) {
    let C = null;
    const $ = bu(m);
    for (or(N.beforeSanitizeShadowDOM, m, null); C = $.nextNode(); )
      if (or(N.uponSanitizeShadowNode, C, null), Tu(C, m), Cu(C), jn(C.content) && $s(C.content), (M ? M(C) : C.nodeType) === At.element) {
        const Y = x(C);
        jn(Y) && (ra(Y), $s(Y));
      }
    or(N.afterSanitizeShadowDOM, m, null);
  }, ra = function(m) {
    const C = [{
      node: m,
      shadow: null
    }];
    for (; C.length > 0; ) {
      const $ = C.pop();
      if ($.shadow) {
        $s($.shadow);
        continue;
      }
      const H = $.node, ie = (M ? M(H) : H.nodeType) === At.element, Te = g(H);
      if (Te)
        for (let De = Te.length - 1; De >= 0; --De)
          C.push({
            node: Te[De],
            shadow: null
          });
      if (ie) {
        const De = A ? A(H) : null;
        if (typeof De == "string" && Ie(De) === "template") {
          const kt = H.content;
          jn(kt) && C.push({
            node: kt,
            shadow: null
          });
        }
      }
      if (ie) {
        const De = x(H);
        jn(De) && C.push({
          node: null,
          shadow: De
        }, {
          node: De,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(D) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, $ = null, H = null, Y = null;
    if (Yo = !D, Yo && (D = "<!-->"), typeof D != "string" && !Ri(D) && (D = oS(D), typeof D != "string"))
      throw hn("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    V ? (le = J, _e = X) : ea(m), (N.uponSanitizeElement.length > 0 || N.uponSanitizeAttribute.length > 0) && (le = ct(le)), N.uponSanitizeAttribute.length > 0 && (_e = ct(_e)), t.removed = [];
    const ie = Ps && typeof D != "string" && Ri(D);
    if (ie) {
      Cy(D);
      const kt = A ? A(D) : D.nodeName;
      if (typeof kt == "string") {
        const Tt = Ie(kt);
        if (!le[Tt] || kr[Tt])
          throw ws(D), hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Rs(D))
        throw ws(D), hn("root node is clobbered and cannot be sanitized in-place");
      try {
        ra(D);
      } catch (Tt) {
        throw ws(D), Tt;
      }
    } else if (Ri(D))
      C = yu("<!---->"), $ = C.ownerDocument.importNode(D, !0), $.nodeType === At.element && $.nodeName === "BODY" || $.nodeName === "HTML" ? C = $ : C.appendChild($), ra($);
    else {
      if (!Qe && !rr && !q && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return B && an ? Q(D) : D;
      if (C = yu(D), !C)
        return Qe ? null : an ? j : "";
    }
    C && ke && Ir(C.firstChild);
    const Te = ie ? D : C;
    try {
      const kt = bu(Te);
      for (; H = kt.nextNode(); )
        Tu(H, Te), Cu(H), jn(H.content) && $s(H.content);
    } catch (kt) {
      throw ie && (ws(D), Yn(t.removed, (Tt) => {
        Tt.element && qi(Tt.element);
      })), kt;
    }
    if (ie)
      return Yn(t.removed, (kt) => {
        kt.element && qi(kt.element);
      }), rr && ta(D), D;
    if (Qe) {
      if (rr && ta(C), nr)
        for (Y = mr.call(C.ownerDocument); C.firstChild; )
          Y.appendChild(C.firstChild);
      else
        Y = C;
      return (_e.shadowroot || _e.shadowrootmode) && (Y = re.call(n, Y, !0)), Y;
    }
    let De = q ? C.outerHTML : C.innerHTML;
    return q && le["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && Ze(yS, C.ownerDocument.doctype.name) && (De = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + De), rr && (De = qs(De)), B && an ? Q(De) : De;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ea(D), V = !0, J = le, X = _e;
  }, t.clearConfig = function() {
    Bn = null, V = !1, J = null, X = null, B = _, j = "";
  }, t.isValidAttribute = function(D, m, C) {
    Bn || ea({});
    const $ = Ie(D), H = Ie(m);
    return xu($, H, C);
  }, t.addHook = function(D, m) {
    typeof m == "function" && et(N, D) && Xn(N[D], m);
  }, t.removeHook = function(D, m) {
    if (et(N, D)) {
      if (m !== void 0) {
        const C = Zv(N[D], m);
        return C === -1 ? void 0 : eS(N[D], C, 1)[0];
      }
      return qd(N[D]);
    }
  }, t.removeHooks = function(D) {
    et(N, D) && (N[D] = []);
  }, t.removeAllHooks = function() {
    N = Vd();
  }, t;
}
var CS = xg();
function vS({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = ee(void 0), [n, i] = de(void 0), s = me((o) => {
    r.current = o, i(o);
  }, []);
  return z(() => {
    if (e === "off")
      return;
    const o = (h) => {
      const y = fg(h);
      if (!y)
        return !1;
      const p = O();
      return e === "protected" ? p && mg(p, y) ? (h.preventDefault(), !0) : !1 : y !== "deleteBackward" && y !== "deleteForward" ? !1 : a(y, h);
    }, a = (h, y) => {
      const p = O(), g = r.current;
      if (g && p && Nd(p, g)) {
        if (s(void 0), y.preventDefault(), h !== g.intent)
          return !0;
        const x = se(g.key) ?? void 0;
        if (g.kind === "verse") {
          if (x) {
            const v = x.getParent(), M = x.getPreviousSibling(), A = x.getNextSibling();
            x.remove(), M ? yg(M) : A && E(A) ? A.select(0, 0) : v?.selectStart();
          }
        } else g.kind === "selection" ? P(p) && p.removeText() : Se(x) && Bv(x);
        return !0;
      }
      if (!p)
        return !1;
      const b = Kv(p, h);
      if (b) {
        if (b.kind === "verse") {
          const x = Kf();
          x.add(b.node.getKey()), si(x);
        } else {
          const x = Rc();
          x.anchor.set(b.node.getKey(), 0, "element"), x.focus.set(b.node.getKey(), b.node.getChildrenSize(), "element"), si(x);
        }
        return s({ key: b.node.getKey(), kind: b.kind, intent: h }), y.preventDefault(), !0;
      }
      if (P(p) && !p.isCollapsed() && Rl(p)) {
        const x = p.getNodes().filter(he).map((A) => A.getKey()), { anchor: v, focus: M } = p;
        return s({
          kind: "selection",
          intent: h,
          key: x[0],
          anchor: { key: v.key, offset: v.offset, type: v.type },
          focus: { key: M.key, offset: M.offset, type: M.type }
        }), y.preventDefault(), !0;
      }
      return !1;
    }, c = (h) => {
      if (e !== "protected")
        return !1;
      const y = O();
      return !y || !ni(y) ? !1 : (h instanceof Event && h.preventDefault(), !0);
    }, l = (h, y) => {
      if (!h)
        return !1;
      const p = CS.sanitize(h), g = new DOMParser().parseFromString(p, "text/html"), b = jv(Ab(t, g)), x = O();
      return P(x) && x.insertNodes(b), y.preventDefault(), !0;
    }, d = (h) => {
      if (e !== "protected")
        return !1;
      const y = O();
      return y && ni(y) ? (h.preventDefault(), !0) : l(h.clipboardData?.getData("text/html"), h);
    }, u = (h) => {
      if (e !== "protected")
        return !1;
      const y = O();
      return y && ni(y) ? (h.preventDefault(), !0) : l(h.dataTransfer?.getData("text/html"), h);
    }, f = () => {
      const h = r.current;
      h && t.getEditorState().read(() => {
        Nd(O(), h) || s(void 0);
      });
    };
    return je(
      t.registerCommand(Nr, o, Oe),
      // CUT at CRITICAL, unlike KEY_DOWN above: a refusal has to outrank the actor it refuses,
      // not tie with it. The handlers that PERFORM a cut (the Standard-view and Markers-view
      // clipboard claims) register at HIGH, and at equal rank the winner is mount order — an
      // incidental property of where a plugin sits in the JSX, which would silently invert if a
      // plugin were added between them. `OpaqueBlockGuardPlugin` states the same rule for the same
      // reason. KEY_DOWN stays at HIGH: it has no same-priority actor to outrank, and
      // `MarkerEditPlugin`'s KEY_DOWN handler must keep running ahead of it on every keystroke.
      t.registerCommand(vr, c, st),
      t.registerCommand(cr, d, Oe),
      t.registerCommand(nb, c, Oe),
      t.registerCommand(Lc, u, Oe),
      t.registerCommand(Hs, c, Oe),
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
const CN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function SS({ textDirection: e }) {
  const [t] = ae();
  return MS(t, e), null;
}
function MS(e, t) {
  z(() => (Wd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Wd(e, t);
  })), [e, t]);
}
function Wd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function ES() {
  const [e] = ae();
  return AS(e), null;
}
function AS(e) {
  z(() => {
    if (!e.hasNodes([ye, St, Ae, Be, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return je(
      e.registerNodeTransform(Be, PS),
      e.registerNodeTransform(Be, (t) => NS(t, e)),
      e.registerNodeTransform(pt, Hd),
      e.registerNodeTransform(St, Hd),
      // Self-healing \va/\vp display runs: re-derive them from altnumber/pubnumber whenever
      // a verse is dirtied — heals remote collab updates (delta-apply only calls setAltnumber/
      // setPubnumber) and structure surgery. Registered here (not a dedicated VerseNodePlugin,
      // which doesn't exist) because this is already the shared-react home that registers
      // VerseNode transforms (the spacing transform above) — same one-node-type-owns-its-syncs
      // shape CharNodePlugin uses for chars. $syncDisplayRun (displayRunSync.utils.ts, `shared`),
      // driven `\va` first so `\vp`'s scan and insertion anchor find the healed `\va` wrapper
      // already in place.
      e.registerNodeTransform(pt, (t) => {
        ds(Cn("va"), t), ds(Cn("vp"), t);
      })
    );
  }, [e]);
}
function PS(e) {
  if (!e.isAttached())
    return;
  const t = e.getTextContent(), r = e.getNextSibling(), n = e.getParent();
  if (e.getMode() !== "normal" || t.endsWith(" ") && t.length > 1 || K(r) || I(n) || I(r) || Ce(n) || Ce(r) || Fe(n) || // An adjacent TextNode is the same logical text run (IME composition and annotation-wrap
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
  Fe(r) && r.isInlineTag() || // An attribute display run (char/milestone/verse — attributeDisplay.utils.ts) is engine-owned
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
  Ue(n))
    return;
  if (he(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  he(r) && fl(e);
}
function NS(e, t) {
  const r = e.getParent();
  !Fe(r) || !e.isAttached() || Qa(t, e.getKey()) && !Qa(t, r.getKey()) && r.insertAfter(e);
}
function Hd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ce(t); )
    t = t.getLastChild();
  (I(t) || E(t) && Ce(t.getParent())) && e.insertBefore(ge(" "));
}
function $l(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Gc(n)) ? void 0 : e;
}
function OS(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function wS() {
  const e = O();
  if (!(!P(e) || !e.isCollapsed()))
    return $l(OS(e.anchor));
}
function qS(e) {
  const t = O();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = _g(e.target)), r ? $l(Ye(r, K)) : void 0;
}
function _g(e) {
  const t = ib(e)?.anchorNode;
  if (Ff(t))
    return ki(t) ?? void 0;
}
function RS(e) {
  if (O())
    return;
  const t = _g(e);
  return t ? $l(Ye(t, K)) : void 0;
}
function $S() {
  const [e] = ae(), t = ug(wS);
  return z(() => {
    const r = (n) => {
      Wr(Hr), t(n);
    };
    return je(e.registerCommand(dr, () => {
      const n = RS(e.getRootElement());
      return n && r(n), !1;
    }, kn), e.registerCommand(Mo, (n) => {
      const i = qS(n);
      return i && r(i), !1;
    }, kn));
  }, [e, t]), null;
}
function LS({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = eC({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return S(Z_, { trigger: e, items: i });
}
function IS({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = Ke(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? S(FS, { trigger: e, harness: i }) : S(LS, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const DS = [" ", "*"];
function US(e, t) {
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
function FS({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = de(void 0), s = ee({ query: "", options: [] }), o = ee(0), a = me((f, h, y) => {
    const p = h.find((g) => g.kind === "note" && g.marker === f);
    if (p) {
      t.apply(p, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const g = O();
      P(g) && g.insertText(`${e}${f}${y ? " " : ""}`);
    });
  }, [r, t, e]);
  z(() => je(r.registerCommand(Nr, (f) => {
    if (n) {
      if ((f.key === "Enter" || f.key === "Tab") && s.current.options.length === 0)
        return f.preventDefault(), f.stopPropagation(), !0;
      if (f.key === "*" && n.trigger === "backslash")
        return f.preventDefault(), f.stopPropagation(), i(void 0), t.commitTypedCloser(s.current.query), !0;
      if (f.key === e && n.trigger === "backslash" && !n.hasTextSelection) {
        f.preventDefault(), f.stopPropagation();
        const p = s.current.query;
        return p ? (a(p, n.items, !1), Bf(() => {
          const g = t.getContext();
          s.current = { query: "", options: [] }, o.current += 1, i(g ? {
            trigger: "backslash",
            hasTextSelection: g.hasTextSelection,
            items: t.getItems(g),
            session: o.current
          } : void 0);
        }), !0) : (i(void 0), r.update(() => {
          const g = O();
          P(g) && g.insertText(e);
        }), !0);
      }
      if (f.key !== " " || n.trigger !== "backslash")
        return !1;
      f.preventDefault(), f.stopPropagation(), i(void 0);
      const y = s.current.query;
      if (n.hasTextSelection) {
        const p = n.items.find((g) => g.marker === y);
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
  }, Oe), r.registerCommand(jf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const h = t.getContext();
    return !h || h.noteMarker || h.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(h),
      session: o.current
    }), !0);
  }, Vr)), [r, e, t, n, a]);
  const c = me(() => i(void 0), []), l = me((f, h) => {
    s.current = { query: f, options: h };
  }, []), d = me((f) => {
    const { markerMenuItem: h, applyOpts: y } = f;
    t.apply(h, y);
  }, [t]), u = Ke(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    US(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && S(Bh, { isOpen: !0, children: ({ placement: f }) => S(
    Wh,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? DS : void 0 },
    n.session
  ) });
}
function Cg(e) {
  return e.replaceAll(R, "~").replace(/ {2,}/g, (r) => R.repeat(r.length));
}
function zS(e) {
  return e.replaceAll(R, " ").replaceAll("~", R);
}
function KS(e) {
  return e.replace(/ {2,}/g, " ");
}
let uo;
function BS(e) {
  e && (uo = e);
}
function vg(e) {
  return Es(e);
}
function jS(e, t) {
  return e.isEmpty() ? Df : Sg(e.toJSON(), t);
}
function Sg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && Po(r[0]) && (!r[0].children || r[0].children.length === 0))
    return Df;
  if (r.some(vx)) {
    uo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Mg(r), i = Vt(n, t);
  return i ? { type: Cr, version: _r, content: i } : void 0;
}
function VS(e, t) {
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
function WS(e) {
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
function HS(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Vp(r, a, c), Pe({
    type: qt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function GS(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Vp(t, o, a), Pe({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function JS(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !vg(r) && t) {
    const [a] = t;
    typeof a == "string" && a.startsWith(R) && (t[0] = a.slice(1));
  }
  return Pe({
    type: n,
    marker: o,
    ...s,
    content: t
  });
}
function YS(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function XS(e, t) {
  const { unknownAttributes: r } = e;
  return Pe({ type: bh, ...r, content: t });
}
function QS(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Pe({ type: xh, marker: r, ...n, content: t });
}
function ZS(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Pe({
    type: Ch,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function eM(e, t) {
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
function ei(e) {
  const { type: t, marker: r, sid: n, eid: i, unknownAttributes: s, attributeOrder: o } = e;
  return Pe({
    type: t,
    marker: r === "" ? void 0 : r,
    ...Zp({ sid: n, eid: i, ...s }, o)
  });
}
function tM(e) {
  return e.text;
}
function rM(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function nM(e) {
  const { marker: t } = e;
  return {
    type: to,
    marker: t === "" ? void 0 : t
  };
}
function Gd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function iM(e, t, r, n, i) {
  const s = Yt.getType(), o = t.filter((l) => !r.includes(l));
  if (r.filter((l) => !t.includes(l)).forEach((l) => {
    const d = ei({
      type: s,
      marker: ti,
      eid: l
    });
    i.push(d);
  }), o.forEach((l) => {
    const d = ei({
      type: s,
      marker: Tn,
      sid: l
    });
    i.push(d);
  }), t.length === 0) {
    const l = ei({
      type: s,
      marker: Tn
    });
    i.push(l);
  }
  if (i.push(...e), t.length === 0) {
    const l = ei({
      type: s,
      marker: ti
    });
    i.push(l);
  }
  (!n || !Tp(n)) && t.forEach((l) => {
    const d = ei({
      type: s,
      marker: ti,
      eid: l
    });
    i.push(d);
  });
}
function Vt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, h = a, y = a, p = a, g = a;
    switch (a.type) {
      case zt.getType():
        i.push(
          VS(
            l,
            Vt(l.children, t)
          )
        );
        break;
      case hr.getType():
        i.push(WS(a));
        break;
      case qt.getType():
        i.push(
          HS(
            d,
            Vt(d.children, t)
          )
        );
        break;
      case St.getType():
      case pt.getType():
        i.push(GS(a));
        break;
      case ye.getType():
        i.push(
          JS(
            u,
            Vt(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case rt.getType():
        i.push(
          YS(
            f,
            Vt(f.children, t)
          )
        );
        break;
      case In.getType():
        i.push(
          XS(
            a,
            Vt(a.children, t)
          )
        );
        break;
      case _i.getType():
        i.push(
          QS(
            a,
            Vt(a.children, t)
          )
        );
        break;
      case Ci.getType():
        i.push(
          ZS(
            a,
            Vt(a.children, t)
          )
        );
        break;
      case Ae.getType():
        i.push(
          eM(
            h,
            Vt(h.children, t, h.caller)
          )
        );
        break;
      case qr.getType():
      case wr.getType():
      case Jt.getType():
      case Vf.getType():
      case gr.getType():
        break;
      case tt.getType():
        if (s = Vt(
          p.children,
          t,
          r,
          n
        ), s) {
          const b = p.typedIDs[jr];
          if (b)
            iM(s, b, o, e[c + 1], i), o = b;
          else {
            const x = s.shift();
            x && (typeof x == "string" ? Gd(i, x) : i.push(x)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Yt.getType():
        i.push(ei(a));
        break;
      case Be.getType():
        if (y.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !vs(y.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        y.text !== R && !y.text.startsWith(Uc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        y[_s]?.textType !== "attribute" && (!r || y.text !== Ot(r))) {
          let b = tM(y);
          vg(t) && (n && b.startsWith(R) && (b = b.slice(1)), b = KS(zS(b))), Gd(i, b);
        }
        break;
      case $n.getType():
        i.push(
          rM(
            g,
            Vt(g.children, t)
          )
        );
        break;
      case Lr.getType():
        i.push(nM(a));
        break;
      case vi.getType():
        uo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        uo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Mg(e) {
  const t = e.findIndex((r) => Po(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Mg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const Bs = {
  initialize: BS,
  deserializeEditorState: jS
}, sM = /^sd\d*$/, oM = /* @__PURE__ */ new Set([
  ...Object.entries(Da).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === k.Paragraph && !sM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function aM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Ep(i) || zp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Xk(i)) {
      t && fo(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Hc(i) && oM.has(i.marker) && !fo(i)) {
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
    if (Tp(i)) {
      const s = Eg(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Jd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Jd(i, c.nodes)] });
      });
      return;
    }
    t && fo(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Jd(e, t) {
  return { ...e, children: t };
}
function Ag(e) {
  return wh(e) && e.number !== "";
}
function fo(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Ag(r) || fo(r)) : !1;
}
function cM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function lM(e) {
  return {
    type: ro,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Ph
  };
}
const Yd = Ng([]), uM = {
  type: Vf.getType(),
  version: 1
};
let Ll = [], te, Mn, Pg, vt;
function dM(e, t) {
  Ll = [], hM(e), gM(t);
}
function fM(e = 0) {
}
function pM(e, t) {
  te = t ?? pi();
  let r;
  return e ? (e.type !== Cr && vt?.warn(`This USJ type '${e.type}' didn't match the expected type '${Cr}'.`), e.version !== _r && vt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${_r}'.`
  ), e.content.length > 0 ? (r = dc(zr(e.content)), hs(te) && (r = aM(r, vt))) : r = [Yd]) : r = [Yd], Pg?.(Ll), {
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
  e && (Mn = e), e?.addMissingComments && (Pg = e.addMissingComments);
}
function gM(e) {
  e && (vt = e);
}
function Il() {
  return Es(te);
}
function mM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function yM(e) {
  let { marker: t } = e;
  t !== os && vt?.warn(`Unexpected book marker '${t}'!`), t = t ?? os;
  const { code: r } = e;
  (!r || !zt.isValidBookCode(r)) && vt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  te?.markerMode === "editable" || te?.markerMode === "visible" ? n.push(
    _t("marker", qe(t) + " " + r + R)
  ) : te?.hasGutterParaMarkers && n.push(_t("marker", qe(t) + R, !0));
  const i = mM(e.content);
  i && n.push(ut(Il() ? Cg(i) : i));
  const s = ze(e, Nk);
  return Pe({
    type: zt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Sp
  });
}
function bM(e) {
  let { marker: t } = e;
  t !== Qs && vt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Qs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = ze(e, Ok);
  let a;
  te?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Ut(t, r) ?? "")
  ];
  return te?.markerMode === "editable" && $M(i, s, c), te?.markerMode === "editable" ? Pe({
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
    version: Ap
  }) : Pe({
    type: hr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: qp
  });
}
function kM(e) {
  let { marker: t } = e;
  t !== Zs && vt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? Zs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (lC(te) ?? St).getType(), c = te?.markerMode === "editable" ? Dp : Oh;
  let l, d;
  te?.markerMode === "editable" ? l = Ut(t, r) : te?.markerMode === "visible" && (d = !0);
  const u = ze(e, jk);
  return Pe({
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
function TM(e, t = [], r = !1) {
  let { marker: n } = e;
  ye.isValidMarker(n, Mn?.extraValidMarkers) || vt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (te?.markerMode === "editable") {
    const [a] = t;
    li(a) ? a.text = R + a.text : a && t.unshift(ut(R));
  }
  t.length === 0 && t.push(ut(Ft)), cc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = ze(e, Rk);
  return s || OM(n, o, i), s || lc(e.marker ?? "", i, !1, r), Pe({
    type: ye.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: wp
  });
}
function Ng(e) {
  return {
    type: Jr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Lp
  };
}
function xM(e, t = []) {
  let { marker: r } = e;
  rt.isValidMarker(r, Mn?.extraValidMarkers) || vt?.warn(`Unexpected para marker '${r}'!`), r = r ?? Ht;
  const n = [];
  if (Un(te) && (te?.markerMode === "editable" ? n.push(
    ht(r),
    ut(R, pr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && n.push(
    _t(
      "marker",
      qe(r) + R,
      te?.hasGutterParaMarkers
    )
  )), n.push(...t), Il()) {
    const s = n.find(
      (o) => !Zc(o) && !(li(o) && o.text === R)
    );
    li(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => R.repeat(o.length)));
  }
  const i = ze(e, Kk);
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
    version: Ip
  });
}
function Dl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function _M(e, t = []) {
  const r = ze(e, WT);
  return Pe({
    ...Dl(),
    type: In.getType(),
    unknownAttributes: r,
    children: t,
    version: kh
  });
}
function CM(e, t = []) {
  const r = ze(e, JT), n = e.marker ?? Ha, i = [];
  return te?.markerMode === "editable" ? i.push(
    ht(n),
    ut(R, pr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && i.push(
    _t(
      "marker",
      qe(n) + R,
      te?.hasGutterParaMarkers
    )
  ), i.push(...t), Pe({
    ...Dl(),
    type: _i.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: _h
  });
}
function vM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Ga, a = dh(o, i) ?? o;
  te?.markerMode === "editable" ? s.push(
    ht(a),
    ut(R, pr, "token")
  ) : (te?.markerMode === "visible" || te?.hasGutterParaMarkers) && s.push(
    _t(
      "marker",
      qe(a) + R,
      te?.hasGutterParaMarkers
    )
  ), s.push(...t);
  const c = ze(
    e,
    XT
  );
  return Pe({
    ...Dl(),
    type: Ci.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: vh
  });
}
function SM(e, t) {
  const r = nT(t);
  let n = () => {
  };
  return Mn?.noteCallerOnClick && (n = Mn.noteCallerOnClick), Pe({
    type: Jt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Uh
  });
}
function MM(e, t) {
  let { marker: r } = e;
  Ae.isValidMarker(r, Mn?.extraValidMarkers) || vt?.warn(`Unexpected note marker '${r}'!`), r = r ?? zc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : kl(te?.noteMode), a = ze(e, Hb), c = te?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  te?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (d = ht(r, "closing"))) : te?.markerMode === "visible" && (l = _t("marker", qe(r) + " "), s || (d = _t("marker", ot(r))));
  const u = [];
  let f;
  if (l && u.push(l), te?.markerMode === "editable" && !o)
    f = ut(Ot(i), void 0, c), u.push(f), RM(n, u), u.push(...t);
  else {
    const h = ut(R, pr, "token");
    f = SM(i, t), u.push(f, h, ...t.flatMap(EM(h)));
  }
  return d && u.push(d), Pe({
    type: Ae.getType(),
    marker: r,
    caller: i,
    isCollapsed: o,
    category: n,
    unknownAttributes: a,
    children: u,
    direction: null,
    format: "",
    indent: 0,
    version: fp
  });
}
function EM(e) {
  return (t) => bp(t) ? [t] : [t, e];
}
function AM(e) {
  let { marker: t } = e;
  (!t || !Yt.isValidMarker(t, Mn?.extraValidMarkers)) && vt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = ze(e, Fc), s = eh(e);
  return Pe({
    type: Yt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: lp
  });
}
function Xd(e, t = []) {
  return {
    type: tt.getType(),
    typedIDs: { [jr]: t },
    children: e,
    direction: null,
    format: "",
    indent: 0,
    version: 1
  };
}
function PM(e, t) {
  const { marker: r } = e, n = e.type, i = ze(e, Sk), s = [];
  if (te?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = fh(
      n,
      r,
      i
    );
    o && s.push(_t("marker", o)), a && s.push(_t("attribute", a)), s.push(...t), c && s.push(_t("attribute", c)), l && s.push(_t("marker", l));
  } else
    s.push(...t);
  return s.forEach((o) => {
    li(o) && (o.mode = "token");
  }), Pe({
    type: $n.getType(),
    tag: n,
    marker: r,
    unknownAttributes: i,
    children: s,
    direction: null,
    format: "",
    indent: 0,
    version: _p
  });
}
function NM(e) {
  return {
    type: Lr.getType(),
    marker: e,
    text: Xi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: te?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: mh
  };
}
function ht(e, t = "opening", r = !1, n = "normal") {
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
  return t !== void 0 && (n[_s] = { textType: t }), n;
}
function _t(e, t, r = !1) {
  const n = {
    type: wr.getType(),
    text: t,
    textType: e,
    version: yp
  };
  return r && (n[_s] = { [jc.key]: !0 }), n;
}
function ms(e, t) {
  return {
    type: qr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Cp
  };
}
function cc(e, t, r = !1) {
  te?.markerMode === "editable" ? t.push(ht(e, "opening", r)) : te?.markerMode === "visible" && t.push(_t("marker", qe(e, r)));
}
function lc(e, t, r = !1, n = !1) {
  te?.markerMode === "editable" ? r ? t.push(ht("", "selfClosing")) : t.push(ht(e, "closing", n)) : te?.markerMode === "visible" && t.push(
    _t(
      "marker",
      r ? ot("") : ot(e, n)
    )
  );
}
function OM(e, t, r) {
  if (te?.markerMode !== "editable" || !t) return;
  const n = lr(t, Eo(e));
  n && r.push(ut(n, "attribute"));
}
function Qd(e, t) {
  if (e.type !== "ms" || te?.markerMode !== "editable" && te?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = ze(e, Fc), o = th(
    n,
    i,
    s,
    eh(e)
  ), a = lr(o, Ao(r ?? ""));
  if (!a) return;
  const c = R + a;
  te?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(_t("attribute", c));
}
function wM(e, t) {
  const r = e.marker ?? "";
  if (te?.markerMode === "editable") {
    const n = [];
    cc(r, n), Qd(e, n), lc(r, n, !0), t.push(ms("milestone", n));
  } else
    cc(r, t), Qd(e, t), lc(r, t, !0);
}
function Zd(e, t, r) {
  t !== void 0 && r.push(
    ms(e, [
      ht(e, "opening"),
      ut(R + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function qM(e, t) {
  te?.markerMode === "editable" && (Zd("va", e.altnumber, t), Zd("vp", e.pubnumber, t));
}
function RM(e, t) {
  e !== void 0 && t.push(
    ms("cat", [
      ht("cat", "opening"),
      ut(R + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function $M(e, t, r) {
  e !== void 0 && r.push(
    ms("ca", [
      ht("ca", "opening"),
      ut(R + e, "attribute"),
      ht("ca", "closing")
    ])
  ), t !== void 0 && r.push(
    ms("cp", [
      ht("cp", "opening"),
      ut(R + t, "attribute")
    ])
  );
}
function ef(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function LM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function tf(e, t) {
  t.marker === Tn && t.sid !== void 0 && e.push(t.sid), t.marker === ti && t.eid !== void 0 && LM(e, t.eid);
}
function uc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Xd(o, [...n])] : o, c = e[i];
  tf(n, c);
  const l = uc(
    e.slice(i + 1, s),
    ef(t, i + 1),
    c.marker === Tn,
    n
  ), d = Xd(l, [...n]), u = e[s];
  tf(n, u);
  const f = uc(
    e.slice(s + 1),
    ef(t, s + 1),
    u.marker === Tn,
    n
  );
  return [...a, d, ...f];
}
function zr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(Il() ? Cg(i) : i));
    else if (!i.type)
      vt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case zt.getType():
          n.push(yM(i));
          break;
        case qt.getType():
          n.push(bM(i));
          break;
        case pt.getType():
          te?.hasSpacing || n.push(uM), n.push(kM(i)), qM(i, n);
          break;
        case ye.getType():
          n.push(
            TM(i, zr(i.content, !0), t)
          );
          break;
        case rt.getType():
          n.push(xM(i, zr(i.content)));
          break;
        case Ae.getType():
          n.push(MM(i, zr(i.content)));
          break;
        case Yt.getType():
          up(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Ll?.push(i.sid)), n.push(AM(i)), wM(i, n);
          break;
        case Lr.getType():
          n.push(NM(i.marker ?? ""));
          break;
        case bh:
          n.push(_M(i, zr(i.content)));
          break;
        case xh:
          n.push(CM(i, zr(i.content)));
          break;
        case Ch:
          n.push(vM(i, zr(i.content)));
          break;
        default:
          vt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(PM(i, zr(i.content)));
      }
  }), uc(n, r);
}
function dc(e) {
  const t = e.findIndex(
    (n) => Ep(n) || zp(n) || Hc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    GT(n)
  );
  if (t >= 0) {
    const n = dc(e.slice(0, t)), i = e[t], s = dc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || wh(n)))
    return [Ng(e)];
  return e;
}
const Ar = {
  initialize: dM,
  reset: fM,
  serializeEditorState: pM
};
function Og(e) {
  if (e && !w(e)) {
    if (E(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = Og(t);
        if (r) return r;
      }
  }
}
function IM() {
  const e = O();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !w(t) ? Sn(t) : void 0) && E(t)) {
      const i = ge(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ui(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = Og(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(R) ? R : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of wg(e)) {
    if (!Sn(t)) continue;
    ui(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(R) && r.setTextContent(n.slice(R.length));
  }
  return !0;
}
function wg(e) {
  const [t, r] = $c(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || w(a) || ne(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), h = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    h && o.push(h);
  }), o;
}
function DM() {
  const e = O();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return Sn(t) ? Se(sl(t)) : !1;
}
function qg() {
  let e = O();
  if (!P(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (w(t) && !ll(t, e.anchor.offset)) {
    const c = t.getParent();
    if (I(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = O(), !P(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!E(t) || w(t) || !Sn(t)) return !1;
  const r = sl(t);
  if (!Se(r)) return !1;
  const n = ge(""), i = e.anchor.offset;
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
  return I(a) ? ol(a) : o.select(0, 0), !0;
}
const Mt = String.raw`\w-`, Rg = "a-z0-9", UM = `[a-z][${Rg}]*`, FM = new RegExp(
  String.raw`^\\(\+?[${Mt}]+)[ \u00A0]$`
), $g = new RegExp(String.raw`^\\(\+?[${Mt}]+)$`), zM = new RegExp(String.raw`^\\\+?[${Mt}]*\*$`), KM = new RegExp(
  String.raw`^\\(\+?[${Mt}]+)(?:[ \u00A0]|$)`
), BM = new RegExp(
  String.raw`^\\(\+?)([${Mt}]+)`
), jM = new RegExp(
  String.raw`\\\+?[${Mt}]+(?:\\?\*|[ \u00A0])`
), VM = new RegExp(
  String.raw`\\\+?[${Mt}]*$`
), WM = new RegExp(
  String.raw`^\\(${UM})( |$)`
), HM = new RegExp(
  String.raw`\\[${Rg}+*]*$`,
  "i"
), it = "￼";
function Lg(e) {
  return e.length > 1 && e.startsWith(R) && e.charAt(1) !== it ? e.slice(1) : e;
}
function rf(e) {
  return Zc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Ig(e, t, r, n) {
  const i = { ...n, noteMode: "expanded" }, s = Ar.serializeEditorState(
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
  for (; rf(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Ot(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && rf(a[d - 1]) === "closing"; )
    d--;
  const u = a.slice(c, d);
  return u.length === 0 ? { failure: "empty" } : { children: u };
}
function Ds(e, t, r) {
  e.spans.push({
    key: t.getKey(),
    start: e.text.length,
    end: e.text.length + r.length,
    isSentinel: !1
  }), e.text += r;
}
function zi(e, t) {
  VM.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += it;
}
function Dt(e) {
  return e.replaceAll(R, " ");
}
function GM(e, t, r = !1) {
  if (Es(t)) return Dt(e);
  if (e === R) return " ";
  const n = r && e.startsWith(R), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(R, "~");
}
function Zi(e) {
  const t = e.getTextContent();
  return Ln(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function Ul(e, t) {
  const r = e[t];
  if (!He(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = wo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Dg(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Fl(e, t) {
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
function zl(e) {
  return !!e.getUnknownAttributes();
}
function Ko(e, t) {
  const r = t(e)?.type;
  return r === k.Milestone || r === void 0 && Bc(e);
}
function Ug(e, t) {
  return He(e) ? !Ko(e.getMarker(), t) : K(e) || Fe(e) ? !0 : we(e) ? zl(e) : I(e) ? Fg(e, t) : !1;
}
function Fg(e, t) {
  if (gT(e)) return !0;
  const r = e.getMarker();
  return !nk(r) && t(r) === void 0;
}
const Lt = "", It = "";
function nf(e) {
  return e.flatMap((t) => Ue(t) ? t.getChildren() : [t]);
}
function Hi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (He(s)) {
      const o = Ul(e, i);
      Ko(s.getMarker(), r) && Dg(o) ? (t.push(
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
      ), Hi(nf(o), t, r), t.push(It)) : t.push(it), i += o.length;
    } else if (we(s)) {
      const o = Fl(e, i);
      zl(s) ? t.push(it) : (t.push(
        Lt,
        "verse",
        Dt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Hi(nf(o), t, r), t.push(It)), i += o.length;
    } else w(s) ? t.push(Lt, "marker", Dt(s.getTextContent()), It) : tn(s) ? t.push(Lt, "unmatched", Dt(s.getTextContent()), It) : Ug(s, r) ? t.push(it) : wn(s) ? t.push(" ") : E(s) ? t.push(
      Dt(
        n ? Lg(Zi(s)) : Zi(s)
      )
    ) : I(s) ? (t.push(Lt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Hi(s.getChildren(), t, r, !0), t.push(It)) : L(s) ? (t.push(Lt, s.getType()), Hi(s.getChildren(), t, r), t.push(It)) : t.push(it);
  }
}
function Ei(e, t) {
  const r = [];
  return Hi(e, r, t), r.join("");
}
function Pr(e) {
  const { children: t } = e;
  return Array.isArray(t) ? t : void 0;
}
function mi(e) {
  const { text: t } = e;
  return typeof t == "string" ? t : void 0;
}
function Kl(e) {
  return e.type ?? "";
}
function zg(e, t, r) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : qe(e, r);
}
function Ma(e, t) {
  const r = e[t];
  if (!(!r || Kl(r) !== "attribute-run"))
    return Pr(r) ?? [];
}
function Ai(e, t) {
  const r = [];
  return Gi(e, r, t), r.join("");
}
function Gi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = Kl(s);
    if (o === "ms") {
      const l = s, d = Ma(e, i + 1);
      d && Ko(l.marker ?? "", r) ? (t.push(
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
      ), Gi(d, t, r), t.push(It), i += 1) : t.push(it);
      continue;
    }
    if (o === "verse") {
      const l = s;
      if (l.unknownAttributes) {
        t.push(it);
        continue;
      }
      t.push(
        Lt,
        "verse",
        Dt(l.text ?? ""),
        JSON.stringify({
          number: l.number ?? null,
          altnumber: l.altnumber ?? null,
          pubnumber: l.pubnumber ?? null
        })
      );
      let d = 0, u = Ma(e, i + 1 + d);
      for (; u; )
        Gi(u, t, r), d++, u = Ma(e, i + 1 + d);
      t.push(It), i += d;
      continue;
    }
    if (o === "marker") {
      const l = s;
      t.push(
        Lt,
        "marker",
        Dt(
          zg(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(Lt, "char", JSON.stringify(l.unknownAttributes ?? null)), Gi(Pr(s) ?? [], t, r, !0), t.push(It);
      continue;
    }
    if (o === "note" || o === "unknown") {
      t.push(it);
      continue;
    }
    if (o === "unmatched") {
      t.push(Lt, "unmatched", Dt(mi(s) ?? "")), t.push(It);
      continue;
    }
    const a = mi(s);
    if (a !== void 0) {
      t.push(Dt(n ? Lg(a) : a));
      continue;
    }
    const c = Pr(s);
    c ? (t.push(Lt, o), Gi(c, t, r), t.push(It)) : t.push(it);
  }
}
function Bo(e) {
  let t = 0;
  for (const r of e) {
    const n = Pr(r);
    if (n) {
      t += Bo(n);
      continue;
    }
    const i = mi(r);
    if (i !== void 0)
      for (const s of i) s === it && t++;
  }
  return t;
}
function ys(e, t, r, n, i) {
  En(e.getChildren(), t, r, n, i);
}
function En(e, t, r, n, i) {
  const s = () => {
    const o = i?.pending === !0;
    return i && (i.pending = !1), o;
  };
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (w(a))
      Ds(t, a, Dt(a.getTextContent()));
    else if (He(a)) {
      s();
      const c = Ul(e, o);
      Ko(a.getMarker(), r) && Dg(c) ? En(c, t, r, n) : zi(t, [a, ...c]), o += c.length;
    } else if (K(a) || Fe(a))
      s(), zi(t, [a]);
    else if (we(a)) {
      s();
      const c = Fl(e, o);
      zl(a) ? zi(t, [a, ...c]) : (Ds(t, a, Dt(Zi(a))), En(c, t, r, n)), o += c.length;
    } else if (I(a))
      s(), Fg(a, r) ? zi(t, [a]) : ys(a, t, r, n, { pending: !0 });
    else if (wn(a))
      s(), Ds(t, a, " ");
    else if (E(a)) {
      const c = Ln(a) || ne(a, oe) === "attribute", l = s() && !c;
      Ds(
        t,
        a,
        c ? Dt(Zi(a)) : GM(Zi(a), n, l)
      );
    } else L(a) ? ys(a, t, r, n, i) : (s(), zi(t, [a]));
  }
}
function Bl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== k.Unknown && n !== k.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Fe(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ys(e, i, t, r), i;
}
function Kg(e, t) {
  let r = 0;
  const n = (i) => {
    if (E(i)) {
      let s = i;
      for (; s; ) {
        const a = s.getTextContent().indexOf(it);
        if (a < 0) break;
        let c = s, l;
        a > 0 && ([, c] = s.splitText(a)), c.getTextContent().length > 1 && ([c, l] = c.splitText(1));
        const d = t[r++];
        if (d && d.length > 0) {
          let u = c;
          for (const f of d)
            u.insertAfter(f), u = f;
        }
        c.remove(), s = l;
      }
    } else L(i) && [...i.getChildren()].forEach(n);
  };
  e.forEach(n);
}
function fc(e, t = []) {
  for (const r of e)
    we(r) ? t.push(r) : L(r) && fc(r.getChildren(), t);
  return t;
}
function Bg(e) {
  let t = 0;
  const r = (n) => {
    if (E(n))
      for (const i of n.getTextContent()) i === it && t++;
    else L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Fn(e) {
  let t = 0;
  for (const r of e)
    if (typeof r == "string")
      for (const n of r) n === it && t++;
    else r.content && (t += Fn(r.content));
  return t;
}
function JM(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), L(i) && ys(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const bs = /\s/;
function jg(e) {
  return e.filter(jo).length;
}
function jo(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return E(t) && !w(t) && ne(t, oe) === "attribute";
}
function YM(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return w(t) || jo(e);
}
function sf(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && jo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      bs.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function jl(e, t, r) {
  const n = sf(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !YM(i) ? sf(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: jg(e.spans) };
}
function Ea(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return w(t) && t.getMarkerSyntax() !== "opening";
}
function XM(e) {
  const t = se(e.key);
  if (!w(t)) return !1;
  const r = t.getParent();
  return I(r) ? (r.selectNext(0, 0), !0) : !1;
}
function QM(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = we(t) ? Fl(r, n) : He(t) ? Ul(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Vg(e, t, r) {
  const { text: n, spans: i } = e, s = jg(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, h = !u.isSentinel && !Ea(u);
    if (!(o && jo(u))) {
      if (d) {
        if (!h) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let y = 0; y < f; y++) {
        const p = n[u.start + y];
        if (c === 0 && (l === 0 || !bs.test(p))) {
          if (h) {
            a = { key: u.key, offset: y };
            break e;
          }
          d = !0;
          continue e;
        }
        c > 0 ? bs.test(p) || c-- : l--;
      }
      if (c === 0 && l === 0) {
        if (h) {
          a = { key: u.key, offset: f };
          break;
        }
        d = !0;
      }
    }
  }
  if (!a) {
    const u = i[i.length - 1];
    if (u && Ea(u) && XM(u) || u?.isSentinel && QM(u)) return;
    const f = [...i].reverse().find((h) => !h.isSentinel && !Ea(h));
    f && (a = { key: f.key, offset: f.end - f.start });
  }
  if (a) {
    const u = se(a.key);
    if (u && E(u)) {
      u.select(a.offset, a.offset);
      return;
    }
  }
  r.find(L)?.selectStart();
}
function Wg(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    Vg(JM(e, n, i), t, e);
  }
}
function ZM(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(L)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  En(e, s, n, i), Vg({ text: s.text, spans: s.spans }, t, e);
}
function Hg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const p of e) {
    const g = Bl(p, n, r);
    if (!g)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const b = s.text.length;
    g.spans.forEach(
      (x) => s.spans.push({ ...x, start: x.start + b, end: x.end + b })
    ), s.sentinels.push(...g.sentinels), s.text += g.text;
  }
  let o, a = !1;
  const c = O();
  if (P(c)) {
    for (let p = c.anchor.getNode(); p; p = p.getParent())
      if (e.some((g) => g.is(p))) {
        a = !0;
        break;
      }
    c.isCollapsed() && (o = jl(s, c.anchor.key, c.anchor.offset));
  }
  const l = Or(s.text, {
    getMarker: n
  });
  if (l.length === 0)
    return i?.debug("[MarkerEdit] Tier 2 skipped: tokenizer produced no content"), !1;
  if (Fn(l) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const d = Ar.serializeEditorState(
    { type: Cr, version: _r, content: l },
    r
  );
  if (Ai(d.root.children, n) === Ei(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((p) => Co(p));
  if (Bg(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = fc(e).map((p) => ({
    number: p.getNumber(),
    sid: p.getSid()
  })), h = e[0];
  u.forEach((p) => h.insertBefore(p)), Kg(u, s.sentinels), e.forEach((p) => p.remove());
  const y = fc(u);
  for (let p = 0; p < f.length && p < y.length; p++)
    y[p].getNumber() === f[p].number && y[p].setSid(f[p].sid);
  return Wg(u, o, a, n, r), !0;
}
function Gg(e, t, r) {
  if (e.getIsCollapsed() !== !1 || !Ae.isValidMarker(e.getMarker())) return;
  const n = e.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const d = n[i];
    if (!w(d) || d.getMarkerSyntax() !== "opening") break;
    i++;
  }
  const s = n[i];
  if (!s || !(mt(s) || E(s) && s.getTextContent() === Ot(e.getCaller()))) return;
  i++;
  let a = n.length;
  for (; a > i; ) {
    const d = n[a - 1];
    if (!w(d) || d.getMarkerSyntax() !== "closing") break;
    a--;
  }
  const c = n.slice(i, a), l = { text: "", spans: [], sentinels: [] };
  return En(c, l, t, r), { out: l, contentNodes: c };
}
function Jg(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(it)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function eE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Gg(e, n, r);
  if (!s)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: note excluded by guard rails"), !1;
  const { out: o, contentNodes: a } = s;
  let c, l = !1;
  const d = O();
  if (P(d)) {
    for (let M = d.anchor.getNode(); M; M = M.getParent())
      if (e.is(M)) {
        l = !0;
        break;
      }
    d.isCollapsed() && (c = jl(o, d.anchor.key, d.anchor.offset));
  }
  const u = Or(o.text, {
    getMarker: n,
    isNoteContext: !0
  });
  if (u.length === 0)
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: tokenizer produced no content"), !1;
  if (Fn(u) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: sentinel/preserved-node count mismatch"), !1;
  const [f] = u;
  if (u.length !== 1 || typeof f != "object" || f.type !== "para")
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: unexpected tokenized shape"), !1;
  const h = f.content ?? [], y = Jg(h), p = Ig(e, h, y, r);
  if (p.failure !== void 0)
    return p.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      p.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (Bo(p.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const g = e.getCategory() !== y;
  if (g && e.setCategory(y), Ai(p.children, n) === Ei(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  const b = p.children.map((M) => Co(M));
  if (Bg(b) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), g;
  const x = a[0];
  if (x)
    b.forEach((M) => x.insertBefore(M));
  else {
    const M = e.getChildren().find((A) => w(A) && A.getMarkerSyntax() === "closing");
    b.forEach((A) => M ? M.insertBefore(A) : e.append(A));
  }
  Kg(b, o.sentinels);
  const v = new Set(o.sentinels.flat().map((M) => M.getKey()));
  return a.forEach((M) => {
    v.has(M.getKey()) || M.remove();
  }), ZM(b, c, l, n, r), !0;
}
const Yg = /* @__PURE__ */ new Set(["ca", "cp"]), Vl = "cp";
function Xg(e) {
  if (!fr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ys(e, t, ur, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Or(r, { getMarker: ur }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Vl)
  );
}
function Vo(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (I(r) && Yg.has(r.getMarker()) || Xg(r)) {
      t.push(r);
      continue;
    }
    ce(r) && r.getMarker() === Vl && t.push(r);
    break;
  }
  return t;
}
function tE(e) {
  const t = (n) => I(n) && Yg.has(n.getMarker()) || Xg(n);
  if (t(e) || ce(e) && e.getMarker() === Vl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (ve(n)) return n;
      if (!t(n)) return;
    }
}
function Qg(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = Vo(e);
  if (n.some((s) => ce(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (En(e.getChildren(), i, t, r), En(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
function Zg(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...Vo(e)], o = Qg(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = O();
  if (P(l)) {
    for (let y = l.anchor.getNode(); y; y = y.getParent())
      if (s.some((p) => p.is(y))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = jl(o, l.anchor.key, l.anchor.offset));
  }
  const d = Or(o.text, { getMarker: n }), [u] = d;
  if (d.length === 0 || typeof u != "object" || u.type !== "chapter")
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: bytes no longer tokenize as a chapter"), !1;
  if (Fn(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  e.getSid() !== void 0 && (u.sid = e.getSid());
  const f = Ar.serializeEditorState(
    { type: Cr, version: _r, content: d },
    r
  );
  if (Ai(f.root.children, n) === Ei(s, n)) {
    let y = !1;
    return e.getNumber() !== (u.number ?? "") && (e.setNumber(u.number ?? ""), y = !0), e.getAltnumber() !== u.altnumber && (e.setAltnumber(u.altnumber), y = !0), e.getPubnumber() !== u.pubnumber && (e.setPubnumber(u.pubnumber), y = !0), y || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), y;
  }
  const h = f.root.children.map((y) => Co(y));
  return ve(h[0]) ? (h.forEach((y) => e.insertBefore(y)), s.forEach((y) => y.remove()), Wg(h, a, c, n, r), !0) : (i?.warn("[MarkerEdit] Chapter Tier 2 aborted: serialized output is not a chapter"), !1);
}
function ks(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Fe(n)) return;
    !t && (K(n) || ce(n) || ve(n)) && (t = n), sb(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? tE(r) : void 0) ?? t;
}
function Wt(e, t) {
  const r = ks(e);
  return r ? K(r) ? eE(r, t) : ve(r) ? Zg(r, t) : Hg([r], t) : !1;
}
const rE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function of(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !rE.has(n[0])
  );
  if (r.length !== 0) {
    t.push("|");
    for (const [n, i] of r) t.push(`${n}="${i}"`);
  }
}
function js(e, t) {
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
          t.push(`\\${n}`), of(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), js(r.content, t), of(r, t), i !== "false" && t.push(`\\${n}*`);
          break;
        case "note": {
          const s = r.caller, o = r.category;
          t.push(`\\${n} ${s ?? ""}`), o !== void 0 && t.push(`\\cat ${o}\\cat*`), js(r.content, t), i !== "false" && t.push(`\\${n}*`);
          break;
        }
        default:
          t.push(`\\${n} `), js(r.content, t);
      }
    }
}
function af(e, t, r) {
  const n = ks(e);
  if (!ce(n)) return !1;
  const i = O();
  if (!P(i) || !i.isCollapsed()) return !1;
  let s = !1;
  for (let d = i.anchor.getNode(); d; d = d.getParent())
    if (n.is(d)) {
      s = !0;
      break;
    }
  if (!s) return !1;
  const o = Bl(n, t, r);
  if (!o) return !1;
  const a = Or(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    bs.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  js(a, l);
  for (const d of l.join("").replaceAll(R, "~")) {
    if (bs.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function Wl(e, t) {
  return em(e, t, k.Paragraph);
}
function nE(e, t) {
  return em(e, t, k.Character);
}
function em(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== k.Unknown ? i === r : !(Ae.isValidMarker(n) || Bc(n));
}
function iE(e) {
  return [lt(e), No()];
}
function Hl(e) {
  Zt(e, 2);
}
function sE(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function po(e) {
  const t = sE(e);
  e.splice(0, 0, iE(e.getMarker())), t && Hl(e);
}
function Wo(e, t) {
  e.setMarker(t), po(e), Hl(e);
}
function oE(e, t) {
  const r = e.getFirstChild();
  if (!r) return;
  const n = r.getNextSibling();
  if (!Ln(n)) {
    if (E(n) && !w(n) && /^[ \u00A0]$/.test(n.getTextContent())) {
      if (t.collapsedDeleteCaretParas?.has(e.getKey())) {
        t.pendingKeys.add(e.getKey());
        return;
      }
      n.setTextContent(R), xt(n, oe, pr), n.setMode("token");
      return;
    }
    if (Xp(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(No());
  }
}
function cf(e, t, r) {
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
function es(e) {
  for (let t = e; t; t = t.getParent())
    if (ce(t)) return t;
}
function aE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = es(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = es(r.getNode())?.is(s) ?? !1, a = es(n.getNode())?.is(s) ?? !1;
    return !(o && !cf(r, s, "start") || a && !cf(n, s, "end"));
  });
}
function pc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = O();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of aE(r)) t.add(n.getKey());
}
function cE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = O();
  if (!P(r) || !r.isCollapsed()) return;
  const n = es(r.focus.getNode());
  n && t.add(n.getKey());
}
function lE(e) {
  const t = O();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => w(r)) && (pc(e), t.removeText());
}
const uE = new RegExp(
  String.raw`^\\\+?([${Mt}]+)(?:[ \u00A0]|$)`
);
function dE(e, t) {
  const r = uE.exec(e.getTextContent());
  return !!r && Wl(r[1], t);
}
function fE(e, t) {
  if (!Un(t.viewOptions)) return;
  if (Kt(e.getFirstChild())) {
    oE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (dE(e, t.getMarker)) return;
    po(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ce(o) && !o.is(e))) {
      Wo(e, Ht), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
      return;
    }
    e.remove(), t.logger?.debug("[MarkerEdit] removed para whose whole representation was deleted");
    return;
  }
  const r = e.getPreviousSibling();
  if (ce(r)) {
    const n = e.getChildren().filter((a) => !Ln(a)), i = O();
    let s = !1;
    if (P(i) && i.isCollapsed()) {
      const a = i.anchor.getNode();
      a.is(e) ? s = !0 : es(a)?.is(e) && (s = !n.some(
        (c) => a.is(c) || L(c) && a.getParents().some((l) => l.is(c))
      ));
    }
    const o = r.getChildrenSize();
    r.append(...n), e.remove(), s && Zt(r, o), t.logger?.debug("[MarkerEdit] merged marker-deleted para into previous");
    return;
  }
  e.setMarker(Ht), po(e);
}
function pE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = lr(t, Eo(e.getMarker()));
  return r === "" ? void 0 : r;
}
function hE(e) {
  const t = e.getChildren().filter((s) => !w(s) && ne(s, oe) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(R) && r.setTextContent(r.getTextContent().slice(1));
  const n = pE(e);
  n && t.push(ge(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function gE(e, t) {
  const r = e.getChildren(), n = r.some((s) => w(s) && s.getMarkerSyntax() === "opening");
  if (e.getIsCollapsed() !== !0) {
    if (n) return;
    const s = e.getCaller(), o = s !== "" && r.some(
      (c) => E(c) && !w(c) && c.getTextContent() === Ot(s)
    ), a = Rn(e).some(({ node: c }) => w(c));
    if (!o && !a) return;
    r.forEach((c) => {
      w(c) || (E(c) && c.getTextContent() === Ot(s) && c.setTextContent(` ${s} `), e.insertBefore(c));
    }), e.remove(), t.logger?.debug(
      "[MarkerEdit] unwrapped expanded note whose opening glyph was deleted (content preserved)"
    );
    return;
  }
  const i = r.some((s) => w(s) && s.getMarkerSyntax() === "closing");
  n !== i && (e.remove(), t.logger?.debug("[MarkerEdit] removed collapsed note with damaged glyph pair"));
}
function mE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(w(r) && r.getMarkerSyntax() === "opening")) {
    hE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => w(o) && o.getMarkerSyntax() === "closing");
  i && !s && Wt(e, t);
}
function hc(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function tm(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !zf(e, n, i);
}
function rm(e, t) {
  return e.length <= t ? e : e.slice(0, Gl(e, t));
}
function Gl(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of yb(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const yE = 16;
function bE(e, { $isHidden: t, $measure: r } = {}) {
  const n = (x) => t ? Jl(x, t).length : x.getTextContent().length;
  r ??= n;
  const i = O();
  if (!P(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = ho(s), l = ho(o), d = i.getNodes(), u = new Map(d.map((x) => [x.getKey(), xE(x)])), f = d.length > 0 ? u.get(d[0].getKey()) : void 0, h = f && kE(s, f) ? f : void 0, y = (x) => {
    const v = x > 0 ? TE(d, u, h, c, l, x, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), v ? i.focus.set(v.node.getKey(), v.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!v;
  };
  let p = Math.min(e, n(i));
  if (y(p) && r(i) <= e) return !0;
  let g = 0, b = 0;
  p -= 1;
  for (let x = 0; x < yE && g <= p; x++) {
    const v = Math.floor((g + p) / 2);
    y(v) && r(i) <= e ? (b = v, g = v + 1) : p = v - 1;
  }
  return y(b), !0;
}
function gc(e) {
  return e.isToken() || cl(e) || ve(e.getParent());
}
function kE(e, t) {
  const r = L(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && Ra(r.getKey(), 0, "text").isBefore(e);
}
function TE(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, d, u;
  const f = /* @__PURE__ */ new Map(), h = (p) => {
    const g = t.get(p.getKey());
    return g && r?.is(g) ? void 0 : g;
  }, y = (p) => {
    let g = u ? u.endBefore : p;
    for (; ; ) {
      const b = _E(g, e, n);
      if (!b || !g || b.node.is(g.node)) return b;
      const x = h(b.node);
      if (!x || x.is(h(g.node))) return b;
      g = f.get(x.getKey());
    }
  };
  for (let p = 0; p <= a; p++) {
    const g = e[p], b = h(g);
    if (u && !u.node.is(b) && (d && u.node.isParentOf(d.node) && (d = u.endBefore), u = void 0), b && !u && (u = { node: b, endBefore: d }, f.set(b.getKey(), d)), !o?.(g)) {
      if (L(g) && !g.isInline()) {
        if (!l) {
          if (c + 1 > s) return y(d);
          c += 1;
        }
        l = !g.isEmpty();
        continue;
      }
      if (l = !1, E(g)) {
        const x = p === 0 ? n : 0, v = p === a ? i : g.getTextContentSize(), M = v - x, A = gc(g);
        if (A && c + M > s) return y(d);
        if (!A && c + M >= s) {
          const F = Gl(g.getTextContent(), x + (s - c));
          return y({ node: g, offset: Math.max(x, F) });
        }
        c += M, d = { node: g, offset: v };
      } else if (qn(g) || wn(g)) {
        const x = g.getTextContentSize();
        if (c + x > s) return y(d);
        c += x;
      }
    }
  }
  return y(d);
}
function xE(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (K(r) || Al(r)) && (t = r);
  return t;
}
function _E(e, t, r) {
  if (!e) return e;
  const n = Ye(e.node, (g) => L(g) && !g.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((g) => g.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let g = o; g <= a; g++)
    l.push(c.length), c += i[g].getTextContent();
  const d = l[s - o], u = d + e.offset, f = Gl(c, u);
  if (f === u) return e;
  const h = (g) => t[0]?.is(g) ?? !1;
  if (gc(e.node)) return { ...e, offset: h(e.node) ? r : 0 };
  if (f >= d) {
    const g = f - d;
    return g >= (h(e.node) ? r : 0) ? { ...e, offset: g } : void 0;
  }
  const y = s > o ? i[s - 1] : void 0;
  if (!y || !t.some((g) => g.is(y))) return;
  if (gc(y))
    return { node: y, offset: h(y) ? r : 0 };
  const p = f - l[0];
  return p >= (h(y) ? r : 0) ? { node: y, offset: p } : void 0;
}
function Jl(e, t) {
  const r = e.getNodes(), n = r.length - 1, [i, s] = e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus], o = n === 0 && i.type === "element" && s.type === "element" && i.offset !== s.offset;
  let a = "", c = !0;
  return r.forEach((l, d) => {
    if (!t(l)) {
      if (L(l) && !l.isInline()) {
        c || (a += `
`), c = !l.isEmpty();
        return;
      }
      if (c = !1, E(l)) {
        const u = l.getTextContent();
        o ? a += u : a += u.slice(
          d === 0 ? ho(i) : 0,
          d === n ? ho(s) : u.length
        );
      } else (qn(l) || wn(l)) && (d !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function mc(e) {
  const t = e.getParent();
  return !!t && Ye(t, (r) => K(r) && !!r.getIsCollapsed()) !== null;
}
function nm(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    mt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), L(i)) for (const { node: s } of Rn(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function CE(e) {
  return e.getNodes().some(
    (t) => qn(t) || K(t) || he(t) || Ge(t) || Al(t)
  );
}
function ho(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const go = "usfm:", im = "usfmopen", sm = "usfmclosed";
function vE(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const SE = new RegExp(
  [go, im, sm].map(vE).join("|")
), ME = "\uFEFF", EE = /^usfm_(.+)$/;
function AE(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function PE(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function NE(e) {
  return e.startsWith(go) ? PE(e.slice(go.length)).replace(/\r\n?|\n/g, " ") : "";
}
function om(e) {
  for (const t of e.classList) {
    const r = EE.exec(t);
    if (r) return r[1];
  }
}
function OE(e) {
  const t = om(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function wE(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(go)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(im) && !n.contains(sm)) && om(r) !== void 0)
      return !0;
  }
  return !1;
}
function am(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(NE(e.nodeValue ?? ""));
    return;
  }
  if (!AE(e)) return;
  const { classList: n } = e, i = (d) => e.childNodes.forEach((u) => am(u, d, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? OE(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function qE(e) {
  if (!SE.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !wE(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => am(n, !1, r)), r.join("").replaceAll(ME, "").replaceAll(R, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function RE(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, oe);
  if (r === "attribute" || r === pr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (gt(o) || ve(o) || Fe(o)) return;
  const n = t.startsWith(R) && I(e.getParent()), i = n ? t.slice(1) : t, s = (n ? R : "") + i.replace(/ (?=[ \u00A0])/g, R).replace(new RegExp("(?<=\\u00A0) ", "g"), R);
  s !== t && e.setTextContent(s);
}
function $E(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function LE(e, t) {
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
function Vs(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (r)
    return cm(r, t);
}
function cm(e, t) {
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(e.getData("text/plain")), i = e.getData("text/html"), s = i ? qE(i) : void 0;
  return {
    text: s ? r(s) : n || (i ? r($E(i)) : ""),
    isInternal: LE(
      e.getData("application/x-lexical-editor"),
      t
    )
  };
}
const lf = String.raw`\\(?:\+?[${Mt}]+\*?|\*)`, IE = new RegExp(
  String.raw`(?<=${lf})\u00A0|\u00A0(?=${lf})`,
  "g"
);
function Yl(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(IE, " ").replaceAll(R, "~");
}
const lm = new RegExp(
  String.raw`\\c(?![${Mt}])[ \u00A0]*[^\s\\]*`,
  "g"
), um = new RegExp(String.raw`\\id(?![${Mt}])[^\n\\]*`, "g"), DE = new RegExp(
  String.raw`^(?:${lm.source}|${um.source})`
);
function mo(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(lm, "").replace(um, "");
    return DE.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
const UE = new RegExp(
  String.raw`\\v(?![${Mt}*])[ \u00A0]*[^\s\\]*[ \u00A0]?`,
  "g"
), FE = new RegExp(
  String.raw`\\([${Mt}]+)(?![${Mt}*])[ \u00A0]?`,
  "g"
);
function yo(e, t) {
  return e.replace(UE, "").replace(
    FE,
    (r, n) => t(n)?.type === k.Paragraph ? "" : r
  );
}
function yc(e) {
  if (E(e) && ne(e, oe) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Ue(t)) return !0;
  return !1;
}
function zE(e) {
  return yc(e.anchor.getNode()) || yc(e.focus.getNode());
}
function KE(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && yc(t.getNode());
}
function BE(e, t, r, n) {
  const s = KE(e) ? r ? yo(t, n) : t : Yl(
    r ? yo(mo(t), n) : mo(t)
  );
  s && e.insertText(s.replace(/\n/g, " "));
}
function jE(e, t = !1, r = () => {
}, n = () => {
}) {
  const i = Vs(e, bi()._config.namespace);
  if (!i) return !1;
  const s = O(), o = P(s) && zE(s);
  if (!o && i.isInternal && !t || t && P(s) && ni(s))
    return !1;
  const { text: a } = i;
  return !a || !P(s) ? !1 : (e?.preventDefault(), o ? (BE(s, a, t, n), !0) : (dm(s, a, t, r, n), !0));
}
function dm(e, t, r, n, i) {
  const s = mo(t), o = Yl(
    r ? yo(s, i) : s
  );
  if (!o) return;
  const a = o.split(`
`);
  if (r) {
    e.insertText(a.join(" "));
    return;
  }
  if (a.length < 2) {
    e.insertText(o);
    return;
  }
  n(), e.isCollapsed() || e.removeText();
  const c = bi();
  a.forEach((l, d) => {
    if (d > 0 && c.dispatchCommand(Ji, void 0), l === "") return;
    const u = O();
    P(u) && u.insertText(l);
  });
}
function VE(e) {
  if (e.getTextContent() !== R) return !1;
  const t = e.getParent();
  return K(t) ? !mt(e.getPreviousSibling()) : !1;
}
function WE(e, t) {
  if (t || e.getTextContent() !== R) return "";
  const r = e.getParent();
  if (!K(r) || !mt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function HE(e) {
  const t = e.getParent();
  return (K(t) ? t.getCaller() : void 0) || rs;
}
function GE(e) {
  const t = e.getParent();
  return !t || Xr(t) === void 0;
}
function Xl(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = $c(e);
  let l = "", d = !0;
  for (const u of t) {
    if (L(u) && !u.isInline()) {
      !d && GE(u) && (l += `
`), d = !u.isEmpty();
      continue;
    }
    if (d = !1, mt(u))
      (u !== n || !e.isCollapsed()) && (l += (u === r ? "" : " ") + HE(u));
    else if (E(u)) {
      let f = u.getTextContent();
      u === r ? u === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : u === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += VE(u) ? "" : f.replaceAll(R, " ") + WE(u, u === n);
    } else (qn(u) || wn(u)) && (u !== n || !e.isCollapsed()) && (l += u.getTextContent().replaceAll(R, " "));
  }
  return l;
}
function fm(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function JE(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => gt(r) || ve(r)
    )
  );
}
function YE(e) {
  const t = O();
  if (!P(t) || t.isCollapsed()) return;
  const r = Xl(t), n = {
    "text/plain": r,
    "text/html": fm(r)
  };
  if (gs() || JE(t)) return n;
  const i = mb(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function uf(e, t, r, n) {
  const i = O();
  if (!P(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !cg();
  const s = YE(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], pm(e, t, i, s, r, n)) : !1;
}
function pm(e, t, r, n, i, s) {
  const o = hc(s);
  if (o !== void 0 && tm(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), bc(e, t, { "text/plain": rm(a, o) })) : bc(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function bc(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || gb(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function An(e) {
  return Ye(e, ve) ?? void 0;
}
function hm(e) {
  return [e.anchor.getNode(), e.focus.getNode(), ...e.getNodes()].some(
    (t) => An(t) !== void 0
  );
}
function Ql() {
  const e = O();
  if (!P(e)) return;
  if (!e.isCollapsed()) {
    if (!hm(e)) return;
    e.removeText();
  }
  const t = O();
  return P(t) ? An(t.focus.getNode()) : void 0;
}
function gm(e, t) {
  const r = Ql();
  if (!r) return !1;
  const n = ai(e);
  return r.insertAfter(n), Un(t) ? Wo(n, e) : n.selectStart(), !0;
}
function XE() {
  const e = O();
  return P(e) && !e.isCollapsed() && An(e.anchor.getNode())?.is(An(e.focus.getNode())) ? !0 : Ql() !== void 0;
}
function QE(e) {
  if (!hm(e)) return !1;
  if (!e.isCollapsed()) return !0;
  const t = e.focus.getNode(), r = An(t), n = r && xi(r);
  return !(n?.is(t) && e.focus.offset === n.getTextContentSize());
}
function mm(e, t, r, n) {
  const i = O();
  if (t && P(i) && QE(i))
    return !0;
  if (!Ql()) return !1;
  const s = O();
  return e && P(s) && dm(s, e, t, r, n), !0;
}
const Ki = "";
function kc(e) {
  const t = O();
  if (!P(t)) return !0;
  const r = An(t.focus.getNode());
  if (!r || !r.is(An(t.anchor.getNode()))) return !0;
  const n = xi(r);
  if (!n) return !1;
  if (n.setTextContent(n.getTextContent() + Ki), !Zg(r, e))
    return n.setTextContent(n.getTextContent().slice(0, -Ki.length)), !1;
  const i = Re().getAllTextNodes().find((o) => o.getTextContent().includes(Ki));
  if (!i) return !1;
  const s = i.getTextContent().indexOf(Ki);
  return i.setTextContent(i.getTextContent().replace(Ki, "")), i.select(s, s), !0;
}
const ym = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Kp(Re().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = O(), t = Yc(e), r = hl(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = sT(0, o);
        const a = Lx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Jp(c) && Xc(parseInt(n, 10), c);
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
  return Ae.isValidMarker(e, t) || !!ym[e] || rt.isValidMarker(e, t) || ye.isValidMarker(e, t);
}
function ZE(e, t) {
  return ye.isNoteContentMarker(e) ? !1 : ye.isValidMarker(e, t);
}
function bm(e, t, r, n, i, s) {
  const o = zh(
    e,
    void 0,
    void 0,
    t,
    n ?? pi(),
    i ?? {},
    s
  );
  return o && !o.getIsCollapsed() && (r.current = o.getKey()), o?.getKey();
}
function xc(e, t, r, n, i, s, o) {
  const a = {
    viewOptions: r ?? pi(),
    getMarker: ul(o ?? di),
    logger: i
  };
  if (Ae.isValidMarker(e, n?.extraValidMarkers)) {
    let d;
    return { action: (f) => {
      f.editor.update(() => {
        kc(a) && (d = bm(
          e,
          f.reference,
          t,
          r,
          n,
          i
        ));
      }, s);
    }, label: void 0, getInsertedNoteKey: () => d };
  }
  const c = sA(e, n?.extraValidMarkers);
  return c ? { action: (d) => {
    d.editor.update(() => {
      if (!kc(a)) return;
      const u = O();
      P(u) && (Ah(u), d.noteText = u.getTextContent());
      const { content: f, highlightInserted: h } = c.action(d), y = nd(f, Ar, r), p = sa(y);
      if (P(u)) {
        const g = u.anchor.getNode(), b = g.getParent(), x = Sn(g), v = u.anchor.key === u.focus.key;
        if (I(p) && x && v && !Aa(p, o))
          rA(
            u,
            p,
            g,
            r?.markerMode === "editable"
          );
        else if (I(p) && !v && !Aa(p, o) && nA(u))
          iA(u, p, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          oA(
            u,
            () => sa(y)
          );
        else if (L(p) && !p.isInline()) {
          const M = u.insertParagraph();
          if (M) {
            const A = M.getChildren();
            p.append(...A), M.replace(p), Se(p) && Mi(p) || p.selectStart();
          }
        } else if (I(p) && E(g) && !w(g) && I(g.getParent()) && u.isCollapsed() && // NEST-able only. A non-NEST style at a caret inside ANY char span — nested or note-level
        // — is already claimed by the `$applyNonNestInsideChar` branch above, whose guard is this
        // one minus this test. Stating it here rather than branching on it inside keeps that
        // division visible at the guard instead of implying a second non-NEST path exists.
        Aa(p, o)) {
          const M = g.getParent();
          if (I(M)) {
            const A = u.anchor.offset;
            if (A === 0) g.insertBefore(p);
            else if (A >= g.getTextContentSize()) g.insertAfter(p);
            else {
              const [B] = g.splitText(A);
              B.insertAfter(p);
            }
            p.getChildren().forEach((B) => {
              w(B) && B.setNested(!0);
            });
            const F = p.getChildren().find((B) => E(B) && !w(B));
            F && E(F) ? F.select(
              F.getTextContentSize(),
              F.getTextContentSize()
            ) : p.selectEnd();
          }
        } else if (E(g) && !w(g) && u.isCollapsed() && (K(b) || I(b) && K(b.getParent()))) {
          const M = I(b) ? b : void 0, A = M ? eA(g, u.anchor.offset) : [];
          let B = (M ?? g).insertAfter(p);
          if (Rr(p)) {
            const j = {
              ...r || pi(),
              markerMode: "hidden"
            }, _ = nd(
              f,
              Ar,
              j
            ), U = sa(_);
            B = B.insertAfter(U);
          }
          if (A.length > 0 && M) {
            const j = bo(M).append(...A);
            B.insertAfter(j), M.isEmpty() && M.remove();
          } else E(B.getNextSibling()) || B.insertAfter(ge(R));
          L(B) && B.selectEnd();
        } else if (u.insertNodes([p]), mA(p), h) {
          const M = Kf();
          M.add(p.getKey()), si(M);
        } else if (I(p)) {
          const M = p.getChildren().find((A) => E(A) && !w(A));
          M && E(M) ? M.select(
            M.getTextContentSize(),
            M.getTextContentSize()
          ) : p.selectEnd();
        } else {
          const M = p.getNextSibling();
          M ? M.selectStart() : p.selectStart();
        }
      } else
        u?.insertNodes([p]);
    }, s);
  }, label: c?.label } : { action: () => {
  }, label: void 0 };
}
function eA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Aa(e, t) {
  return ((t ?? di).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function tA(e, t) {
  t && e.getChildren().forEach((i) => {
    w(i) && i.setNested(!0);
  }), e.getChildren().some((i) => w(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function rA(e, t, r, n) {
  let i = t;
  if (e.anchor.type === "element" && I(r)) {
    const o = r.getChildren(), a = o[e.anchor.offset - 1], c = o[e.anchor.offset];
    a ? a.insertAfter(t) : c ? c.insertBefore(t) : r.append(t);
  } else if (e.isCollapsed() || !E(r)) {
    const o = e.anchor.offset;
    if (E(r) && o > 0 && o < r.getTextContentSize()) {
      const [a] = r.splitText(o);
      a.insertAfter(t);
    } else E(r) && o >= r.getTextContentSize() ? r.insertAfter(t) : r.insertBefore(t);
  } else {
    const [o, a] = yi(e);
    let c = r;
    if (o > 0) {
      const l = c.splitText(o);
      c = l[l.length - 1];
    }
    c.getTextContentSize() > a - o && (c = c.splitText(a - o)[0]), i = c;
  }
  if (ui(i, { renderGlyphs: n }), i !== t) {
    i.insertBefore(t), E(i) && !i.getTextContent().startsWith(R) && i.setTextContent(R + i.getTextContent());
    const o = t.getChildren().find((a) => E(a) && !w(a));
    o ? o.replace(i) : t.append(i);
  }
  const s = t.getChildren().find((o) => E(o) && !w(o));
  E(s) ? s.select(s.getTextContentSize(), s.getTextContentSize()) : t.selectEnd();
}
function nA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (w(n) || I(n)) continue;
    if (!E(n) || n.getType() !== Be.getType() || ne(n, oe) === "attribute") return !1;
    const i = sl(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Sn(n) && (r = !0);
  }
  return r;
}
function iA(e, t, r) {
  const n = wg(e);
  if (n.length === 0) return;
  n.forEach((a) => {
    if (!Sn(a)) return;
    ui(a, { renderGlyphs: r });
    const c = a.getLatest(), l = c.getTextContent();
    l.startsWith(R) && c.setTextContent(l.slice(R.length));
  });
  const i = n[0].getLatest();
  i.insertBefore(t), i.getTextContent().startsWith(R) || i.setTextContent(R + i.getTextContent());
  const s = t.getChildren().find((a) => E(a) && !w(a));
  s ? s.replace(i) : t.append(i);
  let o = i.getLatest();
  n.slice(1).forEach((a) => {
    const c = a.getLatest();
    o.insertAfter(c), o = c;
  }), o.select(o.getTextContentSize(), o.getTextContentSize());
}
function sA(e, t) {
  let r = ym[e];
  return r || (rt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: rt.getType(), marker: e, content: [] }] })
  } : ye.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ye.getType(), marker: e };
      return (ye.isValidFootnoteMarker(e) || ye.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function oA(e, t) {
  const r = e.getNodes(), [n, i] = yi(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = km(
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
    s || (s = t(), c.insertBefore(s), l = !0, I(s) && s.getChildren().some((u) => w(u) && u.getMarkerSyntax() === "opening") && tA(s, I(s.getParent()))), cA(c, s, l);
  }), (E(s) || L(s)) && s.selectEnd();
}
function yi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function Zl(e) {
  return Ce(e) || K(e) || K(e.getParent());
}
function km(e, t, r, n, i) {
  if (!Zl(e)) {
    if (E(e))
      return aA(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function aA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function cA(e, t, r) {
  if (E(t)) {
    const n = _c(e, t);
    t.setTextContent(n), e.remove();
  } else if (L(t)) {
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
    _c(e, t), r && I(t) && t.getChildren().some((s) => w(s)) && E(e) && !w(e) && !e.getTextContent().startsWith(R) && e.setTextContent(R + e.getTextContent());
  }
}
function _c(e, t) {
  let r = e.getTextContent();
  if (E(e) && t.isInline() && r.startsWith(" ") && r.trimStart() !== "") {
    r = r.trimStart(), e.setTextContent(r);
    const n = t.getPreviousSibling();
    fl(n), E(n) || t.insertBefore(ge(" "));
  }
  return r;
}
function Tm(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = Pn(d, t);
    if (!f) return !1;
    const h = E(d) ? d.getTextContentSize() : 0;
    if (df(f, r), E(d) && d.isAttached()) {
      const y = d.getTextContentSize(), p = Math.max(h - y, 0), g = Math.max(0, Math.min(u - p, y)), b = O();
      P(b) && b.setTextNodeRange(d, g, d, g);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = yi(e);
  if (!tu(n, t, s, o)) return !1;
  const a = eu(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = Pn(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = vm(u, a);
    f && (df(f, r), l = !0);
  }), Sm(a, i), l;
}
function df(e, t) {
  e.getChildren().forEach((n) => {
    Kt(n) && n.remove();
  });
  const r = e.getChildren();
  if (r.length === 0 || e.getTextContent() === Ft) {
    e.remove();
    return;
  }
  t?.markerMode === "editable" && r.forEach((n) => {
    const i = n.getTextContent();
    E(n) && i.startsWith(R) && n.setTextContent(i.slice(R.length));
  }), $a(e);
}
function eu(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = km(
      i,
      s === 0,
      s === e.length - 1,
      t,
      r
    );
    E(o) && n.push(o);
  }), n;
}
function Pn(e, t) {
  let r = e, n;
  for (; r && !Se(r); ) {
    if (K(r)) return;
    !n && I(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function xm(e) {
  const t = Ye(
    e,
    (r) => K(r) || Se(r)
  );
  return K(t);
}
function _m(e) {
  return e.filter(
    (t) => !Zl(t) && (E(t) || L(t) && t.isInline())
  );
}
function lA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || Zl(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function uA(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !Cm(n, r)
  );
}
function tu(e, t, r, n, i) {
  const s = _m(e), o = lA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Pn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !uA(l, s, o);
  });
}
function Cm(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Kt(r));
}
function vm(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (L(d) && t.some((u) => d.isParentOf(u))) {
      if (!Cm(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Kt(n[s - 1]) && (s -= 1), o < n.length - 1 && Kt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(bo(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(bo(e).append(...c)), e;
}
function bo(e) {
  return ob(e);
}
function Sm(e, t) {
  const r = O(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function dA(e, t, r) {
  if (e.isCollapsed()) {
    const l = Pn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (Ku(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = yi(e);
  if (!tu(n, r, i, s, t)) return !1;
  const o = eu(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = Pn(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = vm(d, o);
    u && (Ku(u, t), c = !0);
  }), c;
}
function fA(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (g) => g !== t
  ), s = e.getNodes(), [o, a] = yi(e);
  if (!!!i?.some(
    (g) => tu(s, g, o, a)
  ) && !pA(s, t)) return !1;
  let l = !1;
  i?.forEach((g) => {
    const b = O();
    P(b) && Tm(b, g, n) && (l = !0);
  });
  const d = O();
  if (!P(d)) return l;
  const u = d.isBackward(), [f, h] = yi(d), y = eu(
    d.getNodes(),
    f,
    h
  );
  if (y.length === 0) return l;
  const p = y.filter(
    (g) => !xm(g) && !Pn(g, t)
  );
  return p.length > 0 && (hA(p).forEach((g) => gA(g, t)), l = !0), Sm(y, u), l;
}
function pA(e, t) {
  return _m(e).some(
    (r) => !xm(r) && !Pn(r, t)
  );
}
function hA(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function gA(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => I(a) && a.getMarker() === t
  ), s = i ? bo(i) : Mr(t);
  e[0].insertBefore(s), s.append(...e), i === r || _c(e[0], s);
}
function mA(e) {
  he(e) && (fl(e.getPreviousSibling()), Rh(e.getNextSibling()));
}
const Mm = {
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
}, ff = "psc-active-text", Us = "psc-empty-text";
function yA({ viewOptions: e }) {
  const [t] = ae(), r = ee(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return z(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(ff), r.current = o, o && t.getElementByKey(o)?.classList.add(ff);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Mo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Us}`);
          if (!c) return !1;
          const l = ki(c);
          if (!he(l)) return !1;
          const d = l.getParent();
          if (!L(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        ft
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = Pa(), f = bA(), h = [], y = [];
          return Re().getChildren().forEach((p) => {
            if (!L(p)) return;
            const { emptyKeys: g, nonEmptyKeys: b } = TA(p);
            h.push(...g), y.push(...b);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: h, nonEmptyKeys: y };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(Us) : t.getElementByKey(u)?.classList.add(Us);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(Us));
      }),
      t.registerCommand(
        Ic,
        () => (i(void 0), !1),
        ft
      ),
      t.registerCommand(
        ab,
        () => {
          const o = t.getEditorState().read(Pa);
          return o !== r.current && i(o), !1;
        },
        ft
      )
    ];
    return i(t.getEditorState().read(Pa)), je(...s);
  }, [t, n]), null;
}
function Pa() {
  return kA(O() ?? void 0)?.getKey();
}
function bA() {
  const e = O();
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
    he(s[a]) && (o = s[a].getKey());
  return o;
}
function kA(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function TA(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!he(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (he(c)) break;
      if (!(Xt(c) || w(c)) && c.getTextContent().replaceAll(Gs, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function Cc(e, t) {
  const r = bl();
  if (!r?.end) return;
  const n = xA(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = Uo(r);
        return i ? Xl(i) : void 0;
      },
      { editor: n.editor }
    );
}
const Na = /* @__PURE__ */ new WeakMap();
function xA(e, t) {
  const r = e.getEditorState();
  if (Na.has(r)) {
    const i = Na.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = _A(r, t);
  return Na.set(r, n), n;
}
function _A(e, t) {
  const r = Ml(Cl);
  if (!r) return;
  const n = Bs.deserializeEditorState(e, t);
  if (!n) return;
  const i = cb({
    namespace: "markers-view-copy",
    nodes: [tt, ...Tl],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    Ar.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function CA({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = ae();
  return z(() => {
    const n = (i, s) => {
      const o = O();
      if (!P(o) || o.isCollapsed()) return !1;
      const a = Cc(r, e);
      return a === void 0 ? !1 : pm(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": fm(a) },
        s,
        t
      );
    };
    return je(
      r.registerCommand(ii, (i) => n(i, !1), Oe),
      r.registerCommand(vr, (i) => n(i, !0), Oe)
    );
  }, [r, e, t]), null;
}
const pf = /* @__PURE__ */ new WeakMap();
function vA({
  limit: e,
  viewOptions: t
}) {
  const [r] = ae(), n = ee(hc(e)), i = ee(t), s = ee(!1), o = ee(void 0);
  return z(() => {
    n.current = hc(e), i.current = t, o.current?.();
  }, [e, t]), z(() => {
    let a, c;
    const l = (b) => {
      const x = n.current;
      if (x === void 0) return;
      const v = pf.get(b);
      if (b.defaultPrevented && v === void 0) return;
      const M = r.getRootElement();
      if (!M) return;
      const A = M.ownerDocument.getSelection();
      if (!A || !EA(A, M)) return;
      b.preventDefault();
      const F = rm(
        v ?? A.toString().replaceAll(R, " "),
        x
      );
      pf.set(b, F);
      const B = b.clipboardData;
      if (B) {
        if (!F) {
          v !== void 0 && B.clearData();
          return;
        }
        B.setData("text/plain", F);
      }
    }, d = (b) => {
      n.current !== void 0 && ub(b, "a", { ctrlKey: !oi, metaKey: oi }) && (PA(c?.activeElement, r.getRootElement()) || b.preventDefault());
    }, u = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", d, !0), c = void 0;
    }, f = () => {
      const b = n.current === void 0 ? void 0 : a;
      b !== c && (u(), c = b, c?.addEventListener("copy", l), c?.addEventListener("keydown", d, !0));
    };
    o.current = f;
    const h = (b) => (b?.preventDefault(), !0), y = (b) => {
      const x = n.current;
      if (x === void 0 || (s.current = !1, tm(r, b))) return !1;
      if (x <= 0) return h(b);
      const v = O();
      if (So(v))
        return v.getTextContent().length + nm(v.getNodes()) <= x ? !1 : h(b);
      if (!P(v) || v.isCollapsed()) return !1;
      const M = SA(r, i.current);
      return M.$size(v) <= x ? !1 : (bE(x, M.options), v.isCollapsed() ? h(b) : (r.isEditable() || Bf(() => MA(r)), s.current = !0, !1));
    }, p = (b, x) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const v = O();
      if (!P(v) || v.isCollapsed()) return !1;
      const M = x && r.isEditable() && !CE(v);
      return bc(
        b && typeof b == "object" && "clipboardData" in b ? b : null,
        r,
        { "text/plain": Jl(v, mc) },
        M ? () => v.removeText() : void 0
      );
    }, g = je(
      r.registerCommand(ii, y, st),
      r.registerCommand(vr, y, st),
      r.registerCommand(
        ii,
        (b) => p(b, !1),
        Vr
      ),
      r.registerCommand(
        vr,
        (b) => p(b, !0),
        Vr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        lb,
        (b) => n.current === void 0 ? !1 : (b?.preventDefault(), !0),
        st
      ),
      r.registerRootListener((b) => {
        a = b?.ownerDocument ?? void 0, f();
      })
    );
    return () => {
      g(), o.current = void 0, u();
    };
  }, [r]), null;
}
function SA(e, t) {
  if (Es(t)) {
    const n = (i) => Xl(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && Cc(e, r) !== void 0) {
    const n = (i) => Cc(e, r)?.length ?? Jl(i, mc).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + nm(n.getNodes()),
    options: { $isHidden: mc }
  };
}
function MA(e) {
  e.getEditorState().read(() => {
    const t = O(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!P(t) || !r) return;
    const n = hf(e, t.anchor), i = hf(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function hf(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = db(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = L(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function EA(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const AA = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function PA(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? AA.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const NA = /^\+/;
function ru(e, t) {
  const r = t.replace(NA, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Em(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Am(e, t) {
  return Em(e, t) !== void 0;
}
function vc(e, t) {
  const r = Em(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function ko(e, t, r) {
  const n = L(e) ? e.getChildren().filter(w) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function OA(e, t, r, n, i) {
  const s = ru(n, t);
  if (!s) {
    ko(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && ko(e, "invalid", i);
}
function ts(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (I(s)) {
      const o = s.getMarker();
      i || OA(s, o, t, r, n), ts(s, t, r, n, i || o === "xq");
    } else if (he(s)) {
      if (i) continue;
      const o = ru(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? ts(s, s.getMarker(), r, n, i) : Fe(s) || L(s) && ts(s, t, r, n, i);
}
function wA(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = ru(e, a);
    if (!c) {
      ko(o, "unknown", r), vc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    vc(n, l) || ko(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Re().getChildren())
    Fe(o) || (gt(o) || Ge(o) ? i(o, o.getMarker()) : ce(o) ? (i(o, o.getMarker()), s(o) && ts(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && ts(o, "p", e, r, !1));
  return r;
}
function qA(e) {
  return !!e?.includes("(basic)");
}
function RA(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Pm(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Tc(e, t);
}
function nu(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function Nm(e, t) {
  const r = [];
  for (const n of t) {
    const i = nu(e, n);
    i && vc(r, i);
  }
  return r;
}
function Ws(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: RA(e.description),
    isBasic: qA(e.description)
  };
}
function $A(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Sc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : $A(e.marker, t.marker);
}
function Mc(e, t, r) {
  if (t.noteMarker) return [];
  const n = Nm(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Pm(i.marker, r)
  ).filter((i) => {
    const s = nu(e, i.marker);
    return s !== void 0 && Am(n, s);
  }).map((i) => Ws(i, "paragraph")).sort(Sc);
}
function LA(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Pm(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Ws(c, "character")).sort(Sc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Ws(c, "character")),
    ...a.map((c) => Ws(c, "note"))
  ].sort(Sc);
}
function IA(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function DA(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function UA(e, t, r) {
  return [
    ...IA(e, t.openCharMarkers),
    ...LA(e, t, r)
  ].sort(DA);
}
function FA(e, t, r) {
  if (t.source === "paragraph") return Mc(e, t, r);
  const n = UA(e, t, r);
  return n.length > 0 ? n : Mc(e, t, r);
}
function zA(e, t, r) {
  const n = Mc(e, t, r), i = Nm(e, t.previousParaMarkers), s = nu(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Am(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
function Om(e, t, r) {
  if (!w(e.getFirstChild()) && r?.markerMode === "editable" && Un(r)) {
    Wo(e, t);
    return;
  }
  Yh(e, t);
}
function wm() {
  const e = O();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = qm(e);
    return t !== "removed" ? t : (Ec(), "handled");
  }
  return Ec() ? "handled" : "declined";
}
function KA(e, t) {
  if (!t) return e;
  const r = WM.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== k.Paragraph ? e : e.slice(r[0].length);
}
function gf(e, t) {
  const r = O();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Rm())
      return "declined";
  } else {
    const s = qm(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => KA(s, t)
  );
  mf(n ?? "");
  for (const s of i)
    Ec(), mf(s);
  return "handled";
}
function BA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = ki(n);
  if (!i) return !1;
  const s = Qt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || w(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function qm(e) {
  const t = Qt(e.anchor.getNode()), r = Qt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), jA() ? "removed" : "needs-plain-split");
}
function mf(e) {
  if (e === "") return;
  const t = O();
  P(t) && t.insertText(e);
}
function jA() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Qt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => w(r) && r.getMarkerSyntax() === "opening");
}
function Rm() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Qt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Ec() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Rm();
  if (!r) return !1;
  let n = t;
  for (; !r.is(n.getParent()); ) {
    const l = n.getParent();
    if (!l) return !1;
    n = l;
  }
  const i = Mr("fp", { closed: "false" });
  i.append(lt("fp"));
  const s = E(t) && !w(t) ? t : void 0, o = e.anchor.offset, a = s?.getTextContentSize() ?? 0, c = s !== void 0 && s.is(n);
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
    const [d] = l;
    d && (oT(d), i.append(d));
  }
  return i.getChildren().every(w) && i.append(ge(Ft)), $m(i), !0;
}
function $m(e) {
  const t = e.getChildren().find((r) => !w(r));
  if (E(t)) {
    const r = t.getTextContent().startsWith(R) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (L(t)) {
    $m(t);
    return;
  }
  e.selectEnd();
}
function VA(e) {
  const t = [];
  let r = e;
  for (; r; )
    I(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function WA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Re().getChildren()) {
    if (t && n.is(t)) {
      ve(n) && r.push(n.getMarker());
      break;
    }
    (gt(n) || Ge(n) || ce(n)) && r.push(n.getMarker());
  }
  return r;
}
function HA(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function GA(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Kt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Ln(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(HA(i)) && r === 0 : !1;
}
function JA(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Kt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Ln(i) && t.is(i) && r === 0;
}
function YA() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function XA() {
  const e = O();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Ye(t, ce), s = !n && (!i || JA(i, t, r)) ? "paragraph" : "character", o = Qt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: WA(t),
    openCharMarkers: VA(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: ll(t, r),
    anchorRect: YA()
  };
}
function QA() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || w(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = HM.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function ZA(e, t, r) {
  Om(e, t, r), Hl(e);
}
function e1(e, t, r) {
  const n = O();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = Ye(i, ce);
  if (t === "backslash" && s && GA(s, i, n.focus.offset)) {
    ZA(s, e, r);
    return;
  }
  Im(e, r);
}
function t1(e, t) {
  const r = O();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Lm(e) {
  const t = O();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function r1(e, t, r, n) {
  if (P(O()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && QA(), e.kind === "closeTag") {
    Lm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && wm() !== "declined") return;
  if (e.kind === "paragraph" && rt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    e1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ae.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return kc({
      viewOptions: n.viewOptions ?? pi(),
      getMarker: ul(n.styleInfo ?? di),
      logger: n.logger
    }) ? bm(
      e.marker,
      r,
      n.expandedNoteKeyRef,
      n.viewOptions,
      n.nodeOptions,
      n.logger
    ) : void 0;
  xc(
    e.marker,
    n.expandedNoteKeyRef,
    n.viewOptions,
    n.nodeOptions,
    n.logger,
    void 0,
    n.styleInfo
  ).action({ editor: bi(), reference: r });
}
function Im(e, t) {
  if (gm(e, t)) return;
  const r = O();
  if (!P(r)) return;
  const n = Un(t);
  if (qg()) {
    const s = O();
    if (!P(s)) return;
    const o = Ye(s.anchor.getNode(), ce);
    if (!o) return;
    o.setMarker(e), n && po(o);
    return;
  }
  const i = r.insertParagraph();
  ce(i) && (n ? Wo(i, e) : i.setMarker(e));
}
function n1() {
  const [e] = ae();
  return z(() => e.registerCommand(Wf, () => !0, ft), [e]), null;
}
function i1(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = KM.exec(e)?.[1];
  return r === void 0 ? !1 : !Wl(r, t);
}
function Dm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !i1(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ce(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== k.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ce(i))
    return [i, r];
}
function Um(e, t) {
  const r = Dm(e, t.getMarker);
  return r !== void 0 && Hg(r, t);
}
function s1(e, t) {
  const r = O();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Fm(e) {
  const t = BM.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function o1(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Fm(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function a1(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if (I(n)) {
      ol(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function yf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Fm(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  a1(e);
}
function bf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function zm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Wt(e, r);
  const n = o1(e), i = e.getParent();
  if (ce(i)) {
    if (!Wl(t, r.getMarker))
      return Um(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Wt(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), bf(s, t) && yf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (I(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(I(i) ? nE(t, r.getMarker) : Ae.isValidMarker(s)))
      return Wt(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Wt(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(w).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (s1(c, ot(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), bf(a, s) && yf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Wt(e, r);
}
function c1(e) {
  const t = O();
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
function l1(e, t) {
  const r = e.getTextContent();
  if (en(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ue(e.getParent()) && el(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !c1(e)) {
    pT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = FM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), zm(e, n[1], t);
      return;
    }
    if (zM.test(r)) {
      t.pendingKeys.delete(e.getKey()), Wt(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ot(e.getMarker(), e.getNested());
    if (I(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = O(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = ge(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function u1(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (yh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function Km(e) {
  if (!ip(e)?.length)
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
const Bi = Km("v"), d1 = Km("c"), kf = /^[ \u00A0]*$/;
function Tf(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === Be.getType() && n.getMode() === "normal" && ne(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = ge(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function f1(e, t) {
  const r = e.getTextContent(), n = Ut("v", e.getNumber());
  if (r === n) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  const i = /^[ \u00A0]+/.exec(r);
  if (i) {
    const c = r.slice(i[0].length);
    if (Bi.midEdit.test(c)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    const l = Bi.valueAndRest.exec(c);
    if (l && kf.test(l[2] ?? "")) {
      t.pendingKeys.delete(e.getKey()), l[1] !== e.getNumber() && e.setNumber(l[1]);
      return;
    }
  }
  if (Bi.midEdit.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  const s = Bi.valueAndRest.exec(r);
  if (!s) {
    const c = Bi.markerRest.exec(r);
    if (c) {
      const [, l, d, u] = c, f = O(), h = P(f) && f.isCollapsed() && f.anchor.key === e.getKey() ? f.anchor.offset : void 0;
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(Ut("v", d));
      const y = h !== void 0 && h >= l.length ? Math.min(h - l.length, u.length) : void 0;
      Tf(e, u, y);
      return;
    }
    t.pendingKeys.delete(e.getKey()), Wt(e, t);
    return;
  }
  const [, o, a] = s;
  if (a === void 0 && !/[ \u00A0]$/.test(r)) {
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (t.pendingKeys.delete(e.getKey()), kf.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Ut("v", o)), a && Tf(e, a, a.length);
}
const p1 = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function h1(e, t) {
  const r = e.getParent();
  if (!K(r) || r.getIsCollapsed() !== !1 || !ip(r.getMarker())?.includes("caller")) return !1;
  const n = r.getChildren();
  let i = 0;
  for (; i < n.length; ) {
    const c = n[i];
    if (!w(c) || c.getMarkerSyntax() !== "opening") break;
    i++;
  }
  if (!e.is(n[i])) return !1;
  const s = e.getTextContent();
  if (s === Ot(r.getCaller()))
    return t.pendingKeys.delete(e.getKey()), !0;
  const o = p1.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Ot(a)), !0;
}
function g1(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = Ut("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = d1.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Bm(e) {
  if (He(e)) {
    const { wrapper: t } = wo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = nh(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (ve(e)) {
    const t = [], r = ih(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = oh(e);
    return n.wrapper && n.wrapper.getChildrenSize() === 0 && t.push(n.wrapper), t;
  }
  if (we(e)) {
    const t = [], r = as(e, "va");
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = r.wrapper ?? r.closer ?? e, i = as(n, "vp");
    return i.wrapper && i.wrapper.getChildrenSize() === 0 && t.push(i.wrapper), t;
  }
  return [];
}
function m1(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Bm(e).some((n) => r.is(n));
}
function y1(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ce(e) && Xp(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ls)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ms(l, e) && (i || m1(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Bm(e))
    l.remove(), n = !0;
  let s = !1;
  if (I(e)) {
    const l = bT(e);
    l !== void 0 && Zb(l) && (lh(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of ls)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (fx(l, e)) {
        ds(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Mh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Lo(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function xf(e) {
  return E(e) && e.getType() === Be.getType() && e.getMode() === "normal" && ne(e, oe) !== "attribute";
}
function b1(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && xf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && xf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function Fs(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = b1(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
  for (const a of s) {
    const c = se(a);
    if (!c?.isAttached()) {
      e.pendingKeys.delete(a);
      continue;
    }
    if (w(c)) {
      e.pendingKeys.delete(a);
      const h = c.getTextContent();
      if (en(c)) continue;
      const y = $g.exec(h);
      c.getMarkerSyntax() === "opening" && y ? n = zm(c, y[1], e) || n : r === "idle" && af(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : Um(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Wt(c, e) || n;
      continue;
    }
    const l = vn(c)?.owner, d = l?.isAttached() ? l : c, u = d.getKey();
    if (o.has(u)) {
      a !== u && e.pendingKeys.delete(a);
      continue;
    }
    if (i.has(u)) {
      e.pendingKeys.delete(a), e.pendingKeys.add(u);
      continue;
    }
    e.pendingKeys.delete(a), a !== u && e.pendingKeys.delete(u), o.add(u);
    const f = y1(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && af(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = Wt(d, e) || n;
    }
  }
  return n;
}
function jm(e) {
  if (tn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (I(t)) return Yi(t) !== void 0;
  return !1;
}
function k1(e) {
  const t = vn(e);
  if (!t) return !1;
  const r = Cn(t.kind);
  return !Lo(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function _f(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (gt(t) || Fe(t) || Th(t)) return !0;
  return !1;
}
function T1(e, t) {
  const r = e.getTextContent(), n = ne(e, oe), i = e.getParent();
  if (n !== "attribute" && ve(i)) {
    r.replace(/^[ \u00A0]+/, "") === Ut("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (h1(e, t)) return;
  if (n === "attribute") {
    k1(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && jm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !_f(e))
      t.pendingKeys.add(e.getKey());
    else if (ah(e)) t.pendingKeys.add(e.getKey());
    else if (ve(ks(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      I(a) && uh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (_f(e)) return;
  const s = O(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (jM.test(o)) {
    if (ck(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    if (t.pendingKeys.delete(e.getKey()), t.rebuildAttempted.has(r)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    t.rebuildAttempted.add(r), Wt(e, t);
  } else
    t.pendingKeys.add(e.getKey());
}
function x1(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Mh(e, t);
}
function _1(e) {
  const t = (r) => {
    if (w(r)) {
      en(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (tn(r)) {
      yh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of ls)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ms(n, r) || x1(n, r)) && e.pendingKeys.add(r.getKey());
    if (we(r)) {
      r.getTextContent() !== Ut("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== Be.getType() || ne(r, oe) === "attribute") return;
      const n = r.getParent();
      if (ve(n)) {
        r.getTextContent() !== Ut("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && jm(r) || i.includes("//") || ah(r) !== void 0) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (I(r)) {
      r.getChildren().forEach(t);
      return;
    }
    if (!Fe(r) && !gt(r)) {
      if (Ue(r) && r.getChildrenSize() === 0) {
        const n = vn(r)?.owner;
        n && e.pendingKeys.add(n.getKey());
        return;
      }
      L(r) && r.getChildren().forEach(t);
    }
  };
  Re().getChildren().forEach(t);
}
const Vm = Hf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Oa(e) {
  const t = e();
  return Wr(Uf), Wr(cp), t;
}
const Cf = 8, C1 = 1e3;
function Qn(e, t) {
  const r = we(e) ? ["va", "vp"] : He(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    yx(Cn(n), e, t.pendingKeys);
}
function v1(e, t) {
  const r = (n, i) => {
    if (i.updateTags.has(Dc) || i.updateTags.has(ns)) return;
    const s = [];
    i.prevEditorState.read(() => {
      for (const [o, a] of n) {
        if (a !== "destroyed") continue;
        const c = se(o);
        if (!c) continue;
        const l = vn(c);
        l && s.push({ owner: l.owner, kind: l.kind });
      }
    }), s.length !== 0 && e.getEditorState().read(() => {
      for (const { owner: o, kind: a } of s) {
        const c = se(o.getKey());
        c?.isAttached() && Cn(a).expectedPieces(c).wantsRun && t.pendingKeys.add(c.getKey());
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
    e.registerMutationListener(Be, r),
    e.registerMutationListener(gr, r),
    e.registerMutationListener(wr, r),
    e.registerMutationListener(qr, r)
  );
}
function To(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = O();
  return r ? t ? mg(r, t) : P(r) && ni(r) : !1;
}
function S1(e, t, r) {
  return je(
    e.registerCommand(
      cr,
      (n) => {
        if (gs() || To(t)) return !1;
        const i = Vs(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? mo(i.text) : i.text, o = r && t.structureProtectionMode === "protected" ? yo(s, t.getMarker) : s, a = r ? Yl(o) : o;
        if (a.includes(`
`)) {
          const c = a.split(`
`);
          let l = gf(c, t.getMarker);
          if (l === "declined" && BA(e) && (l = gf(c, t.getMarker)), l === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      st
    ),
    e.registerCommand(
      cr,
      (n) => {
        if (gs() || To(t)) return !1;
        const i = Vs(n, e._config.namespace);
        if (!i) return !1;
        const s = mm(
          i.text,
          t.structureProtectionMode === "protected",
          () => {
            t.splitExpected.current = !0;
          },
          t.getMarker
        );
        return s && n?.preventDefault(), s;
      },
      st
    ),
    e.registerCommand(
      cr,
      (n) => {
        const i = Vs(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !DM()) return !1;
        const o = O();
        return t.structureProtectionMode === "protected" && P(o) && ni(o) ? !1 : (n?.preventDefault(), P(o) && !o.isCollapsed() && o.removeText(), s.forEach((a, c) => {
          if (c > 0 && e.dispatchCommand(Ji, void 0), a === "") return;
          const l = O();
          P(l) && l.insertText(a);
        }), !0);
      },
      Oe
    ),
    e.registerCommand(
      cr,
      () => (t.splitExpected.current = !0, !1),
      ft
    )
  );
}
function M1({
  viewOptions: e,
  getMarker: t,
  logger: r,
  markerSettleDelayMs: n,
  structureProtectionMode: i = "off",
  copyLimit: s
}) {
  const [o] = ae(), a = e?.markerMode === "editable", c = !!e && Es(e), l = ee(void 0), d = ee(n), u = ee(s);
  return z(() => {
    d.current = n, u.current = s;
    const f = l.current;
    f && (e && (f.viewOptions = e), f.getMarker = t ?? ur, f.logger = r, f.structureProtectionMode = i);
  }, [e, t, r, n, i, s]), z(() => {
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
    const h = cx(o, f.pendingKeys);
    let y, p = !1, g, b = !1, x = !1, v = 0;
    const M = () => v < Cf ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Cf} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), A = (_, U = "departure") => {
      o.update(() => {
        v = Oa(
          () => Fs(f, _, U)
        ) ? v + 1 : 0;
      });
    };
    let F;
    const B = () => {
      if (F !== void 0 && clearTimeout(F), F = void 0, x || f.pendingKeys.size === 0) return;
      const _ = d.current ?? C1;
      _ < 0 || (F = setTimeout(() => {
        F = void 0, !(x || f.pendingKeys.size === 0) && (p || M() || A(void 0, "idle"));
      }, _));
    }, j = je(
      o.registerNodeTransform(gr, (_) => {
        if (o.isComposing()) return;
        l1(_, f);
        const U = vn(_);
        U && (we(U.owner) || K(U.owner) || ve(U.owner) || He(U.owner) && wo(U.owner).wrapper === void 0) && Qn(U.owner, f);
      }),
      o.registerNodeTransform(pt, (_) => {
        o.isComposing() || (f1(_, f), Qn(_, f));
      }),
      o.registerNodeTransform(qt, (_) => {
        o.isComposing() || (g1(_), _.isAttached() && Qn(_, f));
      }),
      o.registerNodeTransform(rt, (_) => {
        o.isComposing() || fE(_, f);
      }),
      o.registerNodeTransform(ye, (_) => {
        if (!o.isComposing()) {
          mE(_, f);
          for (const U of ["separator", "char"])
            _.isAttached() && Ms(Cn(U), _) && f.pendingKeys.add(_.getKey());
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
      o.registerNodeTransform(Yt, (_) => {
        o.isComposing() || Qn(_, f);
      }),
      o.registerNodeTransform(qr, (_) => {
        if (o.isComposing()) return;
        const U = vn(_);
        U && (He(U.owner) || we(U.owner) || K(U.owner) || ve(U.owner)) && Qn(U.owner, f);
      }),
      o.registerNodeTransform(Ae, (_) => {
        o.isComposing() || (gE(_, f), Qn(_, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform(Lr, (_) => {
        o.isComposing() || u1(_, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(Be, (_) => {
        o.isComposing() || T1(_, f);
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
        (_) => {
          o.getEditorState().read(() => {
            for (const [U, W] of _) {
              if (W === "destroyed") continue;
              const fe = se(U);
              !fe || ne(fe, oe) !== "attribute" || Ue(fe.getParent()) || o.getElementByKey(U)?.classList.add("attribute");
            }
          });
        },
        { skipInitialization: !1 }
      ),
      v1(o, f),
      ...c ? [
        o.registerNodeTransform(Be, (_) => {
          o.isComposing() || RE(_);
        }),
        o.registerCommand(
          ii,
          (_) => uf(
            // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`. A plain
            // `event instanceof ClipboardEvent` narrows this correctly in real browsers,
            // but jsdom (our test environment) doesn't implement `ClipboardEvent` at all —
            // `instanceof` against the undefined global throws — so this duck-checks the
            // one property `$handleCopyForStandardView` actually needs instead.
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
            o,
            !1,
            u.current
          ),
          Oe
        ),
        o.registerCommand(
          vr,
          (_) => (
            // A structure-protected document's cut of a selection `StructureKeyboardPlugin`
            // refuses to replace is that plugin's to refuse: it registers CUT at CRITICAL for
            // exactly that reason, so it has already had its turn by the time this claim runs
            // and a selection reaching here is one it allowed.
            uf(
              _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
              o,
              !0,
              u.current
            )
          ),
          Oe
        ),
        o.registerCommand(
          cr,
          (_) => jE(
            // Same jsdom-safe duck-check as COPY above.
            _ && typeof _ == "object" && "clipboardData" in _ ? _ : null,
            f.structureProtectionMode === "protected",
            // Consumed by $paraMarkerDeletionTransform below, same as the
            // INSERT_PARAGRAPH_COMMAND and LOW-priority PASTE_COMMAND handlers arm it for
            // the paste paths that reach them — this HIGH-priority claim reaches the
            // former only from its second line on, and the latter never.
            () => {
              f.splitExpected.current = !0;
            },
            f.getMarker
          ),
          Oe
        )
      ] : [],
      o.registerCommand(
        vr,
        () => (!To(f) && !gs() && pc(f), !1),
        st
      ),
      o.registerCommand(
        Hs,
        () => (o.isComposing() || lE(f), !1),
        Vr
      ),
      o.registerCommand(
        Mo,
        () => (p = !1, v = 0, B(), !1),
        ft
      ),
      o.registerCommand(
        Nr,
        (_) => (p = !1, v = 0, B(), (_.key === "Backspace" || _.key === "Delete") && !To(f, fg(_)) && (pc(f), cE(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !_.ctrlKey || _.altKey || _.shiftKey || _.metaKey || _.key !== " " && _.code !== "Space" || !IM() ? !1 : (_.preventDefault(), !0)),
        Oe
      ),
      o.registerCommand(
        jf,
        (_) => {
          const U = wm();
          U === "needs-plain-split" && o.dispatchCommand(Ji, void 0);
          const W = U !== "declined" || bx();
          return W && _?.preventDefault(), Fs(f), W;
        },
        Oe
      ),
      // A chapter line cannot be split: Enter there starts a `\p` after it and a line break is
      // refused (see chapterLine.utils.ts). CRITICAL so both run ahead of every split, including
      // this plugin's own char-stack split below.
      o.registerCommand(
        Ji,
        () => gm(Ht, f.viewOptions),
        st
      ),
      o.registerCommand(
        fb,
        () => XE(),
        st
      ),
      // A drop inserts through Lexical's clipboard path, which splits at every line break without
      // going through INSERT_PARAGRAPH_COMMAND, so a drop on a chapter line is claimed and goes in
      // as a paste there does. LOW: below structure protection's HIGH block and the NORMAL
      // replace-selection delete, above Lexical's own insertion at EDITOR.
      o.registerCommand(
        Hs,
        (_) => {
          if (typeof _ == "string" || !_.dataTransfer) return !1;
          const { text: U } = cm(_.dataTransfer, o._config.namespace);
          return !!U && mm(
            U,
            f.structureProtectionMode === "protected",
            () => {
              f.splitExpected.current = !0;
            },
            f.getMarker
          );
        },
        ft
      ),
      o.registerCommand(
        Ji,
        () => (f.splitExpected.current = !0, qg()),
        Oe
      ),
      S1(o, f, c),
      o.registerCommand(
        Vm,
        () => {
          if (p) return !0;
          const _ = o.getRootElement(), U = _?.ownerDocument, W = !!_ && !!U && U.hasFocus() && _.contains(U.activeElement);
          let fe;
          if (W) {
            const Q = O();
            fe = P(Q) ? Q.focus.key : y;
          }
          return Oa(() => Fs(f, fe)), !0;
        },
        ft
      ),
      o.registerCommand(
        Ic,
        () => {
          if (p) return !1;
          const _ = O(), U = P(_) ? _.focus.key : y;
          return Oa(() => Fs(f, U)), !1;
        },
        ft
      ),
      o.registerUpdateListener(({ editorState: _, tags: U }) => {
        f.splitExpected.current = !1, f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear(), f.rebuildAttempted.clear();
        const W = _.read(() => {
          const Q = O();
          return P(Q) ? Q.focus.key : void 0;
        }), fe = g;
        if (W !== void 0 && (g = W), U.has(Dc)) {
          f.pendingKeys.clear(), _.read(() => _1(f)), p = !0, W !== void 0 && (y = W);
          return;
        }
        if (U.has(Hr)) {
          W !== void 0 && W !== fe && (p = !0);
          return;
        }
        p || (W !== void 0 && (y = W), B(), !(b || W === void 0) && [...f.pendingKeys].some((Q) => Q !== W) && (b = !0, queueMicrotask(() => {
          b = !1, !x && (M() || A(y));
        })));
      })
    );
    return () => {
      x = !0, F !== void 0 && clearTimeout(F), F = void 0, h(), j(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const E1 = ["status_unknown", "status_invalid"], Wm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, A1 = Object.values(Wm);
function P1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Wm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function vf(e) {
  e.classList.remove(...E1), e.removeAttribute("aria-description"), A1.includes(e.title) && e.removeAttribute("title");
}
function N1(e, t, r, n) {
  const i = (a) => a.read(() => Re().getChildrenKeys()), s = i(t), o = i(e);
  if (!(s.length !== o.length || s.some((a, c) => a !== o[c])))
    return e.read(() => {
      const a = /* @__PURE__ */ new Set(), c = (l) => {
        const d = se(l)?.getTopLevelElement();
        d && a.add(d.getKey());
      };
      for (const l of r.keys()) c(l);
      for (const l of n) c(l);
      return a;
    });
}
function O1(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : w(t) && t.getParent()?.getKey() === r.getKey();
}
function w1({
  viewOptions: e,
  styleInfo: t,
  logger: r
}) {
  const [n] = ae(), i = e?.markerMode === "editable";
  return z(() => {
    if (!i) return;
    const s = t ?? di;
    let o = /* @__PURE__ */ new Map();
    const a = (l) => {
      n.isComposing() || n.getEditorState().read(() => {
        const d = wA(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, h] of o) {
            if (u.has(f) || O1(f)) continue;
            const y = se(f)?.getTopLevelElement();
            !y || l.has(y.getKey()) || u.set(f, h);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const h = n.getElementByKey(f);
          h && vf(h);
        }
        for (const [f, h] of u) {
          const y = n.getElementByKey(f);
          y && P1(y, h);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          N1(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && vf(d);
      }
    };
  }, [n, i, t, r]), null;
}
function Hm(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Pr(o);
    a && L(s) && Hm(s.getChildren(), a, r);
  }
}
function Gm(e, t) {
  let r = 0;
  const n = (i) => {
    for (let s = 0; s < i.length; s++) {
      const o = i[s], a = Pr(o);
      if (a) {
        n(a);
        continue;
      }
      const c = mi(o);
      if (c === void 0 || !c.includes(it)) continue;
      const l = c.split(it), d = [];
      for (let u = 0; u < l.length; u++) {
        const f = l[u];
        if (u > 0 && d.push(...t[r++] ?? []), f.length > 0) {
          const h = {
            ...o,
            text: f
          };
          d.push(h);
        }
      }
      i.splice(s, 1, ...d), s += d.length - 1;
    }
  };
  n(e);
}
function Jm(e, t, r) {
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
function Ym(e, t) {
  const r = [];
  for (const n of e)
    Ug(n, t) || ((ce(n) || I(n)) && r.push(n.getMarker()), L(n) && r.push(...Ym(n.getChildren(), t)));
  return r;
}
function Xm(e) {
  const t = [];
  for (const r of e) {
    const n = Kl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Pr(r);
    i && t.push(...Xm(i));
  }
  return t;
}
function iu(e, t, r) {
  const n = Ym(e, r), i = Xm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function q1(e, t) {
  if (!e || e.input.run.length === 0) return;
  const r = O();
  let n, i;
  if (P(r)) {
    if (!r.isCollapsed()) return;
    n = r.focus.getNode(), i = r.focus.offset;
  } else if (t)
    n = se(t.key), i = t.offset;
  else
    return;
  if (!(!E(n) || !n.isAttached()) && !(e.nodeKey !== void 0 && n.getKey() !== e.nodeKey) && n.getTextContent().slice(0, i).endsWith(e.input.run))
    return { node: n, caretOffset: i, run: e.input.run };
}
function su(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function R1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const b = Bl(g, o, s);
    if (!b) return;
    c.text.length > 0 && (c.text += " ");
    const x = c.text.length;
    b.spans.forEach(
      (v) => c.spans.push({ ...v, start: v.start + x, end: v.end + x })
    ), c.sentinels.push(...b.sentinels), c.text += b.text;
  }
  const l = i ? su(c, i) : c.text, d = Or(l, {
    getMarker: o
  });
  if (d.length === 0) return;
  if (Fn(d) !== c.sentinels.length) {
    a?.warn("[MarkerEdit] Settled USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const u = Ar.serializeEditorState(
    { type: Cr, version: _r, content: d },
    s
  ).root.children;
  if (Bo(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Jm(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ai(u, o) === Ei(e, o) && iu(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Gm(u, f);
  const y = $1(e), p = Qm(u);
  for (let g = 0; g < y.length && g < p.length; g++)
    y[g].sid !== void 0 && p[g].number === y[g].number && (p[g].sid = y[g].sid);
  return u;
}
function $1(e) {
  const t = [], r = (n) => {
    we(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function Qm(e) {
  const t = [];
  for (const r of e) {
    Fp(r) && t.push(r);
    const n = Pr(r);
    n && t.push(...Qm(n));
  }
  return t;
}
function L1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Gg(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? su(l, i) : l.text, f = Or(u, {
    getMarker: o,
    isNoteContext: !0
  });
  if (f.length === 0) return;
  if (Fn(f) !== l.sentinels.length) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: sentinel/preserved-node count mismatch");
    return;
  }
  const [h] = f;
  if (f.length !== 1 || typeof h != "object" || h.type !== "para") {
    a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected tokenized shape");
    return;
  }
  const y = h.content ?? [], p = Jg(y), g = e.getCategory() !== p, b = Ig(e, y, p, s);
  if (b.failure !== void 0) {
    b.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : b.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const x = b.children;
  if (Bo(x) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const v = Jm(l, t, n);
  if (!v) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Ai(x, o) === Ei(d, o) && iu(d, x, o)) {
    if (g)
      return { rebuilt: void 0, contentNodes: d, category: p, categoryChanged: g };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Gm(x, v), { rebuilt: x, contentNodes: d, category: p, categoryChanged: g };
}
function Sf(e) {
  return e.$?.textType;
}
function I1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Sf(e) === Sf(t);
}
function D1(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && Fe(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function U1(e) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (en(e)) return;
  const n = $g.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Mf(e, t) {
  const r = e;
  r.marker = t, r.text = zg(t, r.markerSyntax, r.nested);
}
function F1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ae.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Mf(a.node, s);
  const c = n.getChildren().filter(w).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Mf(l.node, s);
}
function z1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Qg(e, i, n);
  if (!o) return;
  const a = r ? su(o, r) : o.text, c = Or(a, {
    getMarker: i
  }), [l] = c;
  if (c.length === 0 || typeof l != "object" || l.type !== "chapter")
    return;
  if (Fn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = Ar.serializeEditorState(
    { type: Cr, version: _r, content: c },
    n
  ).root.children;
  if (d.length === 0) return;
  const u = [e, ...Vo(e)];
  if (!(e.getNumber() !== (l.number ?? "") || e.getAltnumber() !== l.altnumber || e.getPubnumber() !== l.pubnumber) && Ai(d, i) === Ei(u, i) && iu(u, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function K1(e, t, r, n, i) {
  const s = q1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = (g) => {
    K(g) ? c.set(g.getKey(), g) : ve(g) ? l.set(g.getKey(), g) : o.set(g.getKey(), [g]);
  };
  for (const g of t) {
    const b = se(g);
    if (!b?.isAttached()) continue;
    const x = ks(b);
    if (x) {
      if (u(x), w(b)) {
        const v = Dm(b, r.getMarker);
        v && a.push(v);
      }
      if (K(x)) {
        const v = U1(b);
        v && d.set(x.getKey(), v);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const g of a)
    g.some((b) => f.has(b.getKey())) || (g.forEach((b) => {
      f.add(b.getKey()), o.delete(b.getKey());
    }), o.set(g[0].getKey(), g));
  if (s) {
    const g = ks(s.node);
    g && u(g);
  }
  const h = D1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && h.length === 0)
    return;
  const y = new Set(h.map((g) => g.getKey())), p = /* @__PURE__ */ new Map();
  Hm(Re().getChildren(), e.root.children, p);
  for (const g of d.values()) F1(g, p);
  for (const g of c.values()) {
    const b = p.get(g.getKey()), x = b ? Pr(b.node) : void 0;
    if (!b || !x) continue;
    const v = L1(g, p, r, y, s);
    if (!v) continue;
    if (v.categoryChanged) {
      const F = b.node;
      v.category === void 0 ? delete F.category : F.category = v.category;
    }
    if (!v.rebuilt) continue;
    const M = p.get(v.contentNodes[0].getKey());
    if (!M) continue;
    const A = x.indexOf(M.node);
    A < 0 || x.splice(A, v.contentNodes.length, ...v.rebuilt);
  }
  for (const g of o.values()) {
    const b = p.get(g[0].getKey());
    if (!b) continue;
    const x = R1(g, p, r, y, s);
    if (!x) continue;
    const v = b.siblings.indexOf(b.node);
    v < 0 || b.siblings.splice(v, g.length, ...x);
  }
  for (const g of l.values()) {
    const b = p.get(g.getKey());
    if (!b) continue;
    const x = 1 + Vo(g).length, v = z1(g, r, s);
    if (!v) continue;
    const M = b.siblings.indexOf(b.node);
    M < 0 || b.siblings.splice(M, x, ...v);
  }
  for (const g of h) {
    const b = p.get(g.getKey());
    if (!b) continue;
    const x = b.siblings.indexOf(b.node);
    if (x < 0) continue;
    b.siblings.splice(x, 1);
    const v = b.siblings[x - 1], M = b.siblings[x], A = v && mi(v), F = M && mi(M);
    v && M && A !== void 0 && F !== void 0 && I1(v, M) && (v.text = A + F, b.siblings.splice(x, 1));
  }
  return Sg(e, r.viewOptions);
}
function B1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = Un(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return z(() => {
    if (n)
      return r.registerNodeTransform(
        rt,
        (i) => j1(i, t)
      );
  }, [r, n, t]), null;
}
function j1(e, t) {
  e.getMarker() !== Ht && (e.isEmpty() || Kt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Ht}" (key ${e.getKey()})`
  ), e.setMarker(Ht)));
}
function V1({
  scrRef: e,
  onScrRefChange: t
}) {
  const [r] = ae(), n = ee({
    phase: "idle",
    pendingEchoes: [],
    scrRef: e,
    onScrRefChange: t,
    sawDocument: !1
  });
  return z(() => {
    const i = n.current, s = i.scrRef;
    i.scrRef = e, i.onScrRefChange = t, xo(s, e) || W1(i, r, e);
  }, [r, e, t]), z(
    () => r.registerMutationListener(
      zt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Ac(r);
        Ef(n.current, r, a, {
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
        Re().getChildren().filter(Ge).map((c) => c.getKey())
      )
    );
    let s;
    const o = (a) => {
      const c = r.getEditorState();
      if (s === c) return;
      s = c;
      const d = a === c ? /* @__PURE__ */ new Set() : i(a), u = i(c), f = [...u].some((h) => !d.has(h));
      f && (Ac(r) || Ef(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((h) => !u.has(h)),
        isSameDocumentReload: zs(a) === zs(c)
      }));
    };
    return je(
      ...[qt, hr].map(
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
        return i.phase === "idle" && Y1(i, G1()), !1;
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
    return je(
      r.registerMutationListener(St, i),
      r.registerMutationListener(pt, i)
    );
  }, [r]), z(() => {
    const i = () => eP(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function W1(e, t, r) {
  if (H1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Ac(t);
  (!n || n === r.book) && t.update(() => Zm(r.chapterNum, r.verseNum), {
    tag: Hr
  });
}
function H1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => xo(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function G1() {
  const e = O(), t = Yc(e);
  if (!t) return;
  const r = ou(), n = Bp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = pl(t, e), { verseNum: o, verse: a } = Fx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Ac(e) {
  return e.getEditorState().read(() => ou()?.getCode() || void 0);
}
function ou() {
  return Re().getChildren().find(gt);
}
function Ef(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && wa(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || wa(e, t), e.phase = "navigating") : i && wa(e, t), r && r !== e.scrRef.book && ry(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function wa(e, t) {
  queueMicrotask(() => {
    t.update(
      () => Zm(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Hr }
    );
  });
}
function Zm(e, t) {
  const r = Yc(O()), n = hl(r)?.getNumber(), i = Bp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Jp(n) ? ty(t, n) : parseInt(n, 10) === t))
    return;
  const o = Re().getChildren(), a = Kp(o, e);
  if (!a) return;
  const c = tT(o, a), l = Gk(c, !0);
  eT(c, l);
  let d;
  try {
    d = $x(c, t);
  } catch {
    return;
  }
  d && (ce(d) ? !E(d.getFirstChild()) && Mi(d) || Zt(d, 0) : J1(d));
}
function J1(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || he(n)) {
    Zt(t, r);
    return;
  }
  const i = $o(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = L(n) && !K(n) ? ey(n) : void 0;
  s ? s.select(0, 0) : Zt(t, r);
}
function ey(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (L(t) && !K(t)) return ey(t);
}
function zs(e) {
  return e.read(() => {
    const t = Re().getChildren().find(Ge);
    return `${ou()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function Y1(e, t) {
  e.phase !== "navigating" && t && (X1(t, e.scrRef) || ry(e, Q1(t, e.scrRef)));
}
function X1(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? ty(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function ty(e, t) {
  try {
    return Xc(e, t);
  } catch {
    return !1;
  }
}
function Q1(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const Z1 = 8;
function ry(e, t) {
  return xo(t, e.scrRef) || e.pendingEchoes.some((r) => xo(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > Z1 && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function xo(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function eP(e) {
  e.phase = "idle";
}
function tP(e) {
  return gt(e) ? `${e.__code}` : ve(e) ? `${e.__marker} "${e.__number}"` : I(e) ? `${e.__marker}` : Cs(e) ? `${e.__marker} "${e.__number}"` : mt(e) ? `${e.__caller}` : Dn(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ce(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${rP(e)}` : Ce(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : we(e) ? `${e.__marker} "${e.__number}"` : "";
}
function rP(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[_s]) : "";
}
function nP() {
  const [e] = ae();
  return /* @__PURE__ */ S(
    bb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: tP,
      editor: e
    }
  );
}
const ny = $f(null), Af = 4;
function iP({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = ee(null), s = Lf(ny);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return z(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ S("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function sP({
  children: e,
  dropDownRef: t,
  onClose: r
}) {
  const [n, i] = de(), [s, o] = de(), a = me(
    (d) => {
      i((u) => u ? [...u, d] : [d]);
    },
    [i]
  ), c = (d) => {
    if (!n) return;
    const u = d.key;
    ["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(u) && d.preventDefault(), u === "Escape" || u === "Tab" ? r() : u === "ArrowUp" ? o((f) => {
      if (!f) return n[0];
      const h = n.indexOf(f) - 1;
      return n[h === -1 ? n.length - 1 : h];
    }) : u === "ArrowDown" && o((f) => f ? n[n.indexOf(f) + 1] : n[0]);
  }, l = Ke(() => ({ registerItem: a }), [a]);
  return z(() => {
    const d = s ?? n?.[0];
    d?.current && d.current.focus();
  }, [n, s]), /* @__PURE__ */ S(ny.Provider, { value: l, children: /* @__PURE__ */ S("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function oP({
  disabled: e = !1,
  buttonLabel: t,
  buttonAriaLabel: r,
  buttonClassName: n,
  buttonIconClassName: i,
  children: s,
  stopCloseOnClickSelf: o
}) {
  const a = ee(null), c = ee(null), [l, d] = de(!1), u = () => {
    d(!1), c && c.current && c.current.focus();
  };
  return z(() => {
    const f = c.current, h = a.current;
    if (l && f !== null && h !== null) {
      const { top: y, left: p } = f.getBoundingClientRect();
      h.style.top = `${y + f.offsetHeight + Af}px`, h.style.left = `${Math.min(p, window.innerWidth - h.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), z(() => {
    const f = c.current;
    if (f !== null && l) {
      const h = (y) => {
        const p = y.target;
        o && a.current && a.current.contains(p) || f.contains(p) || d(!1);
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
          const { top: p } = h.getBoundingClientRect(), g = p + h.offsetHeight + Af;
          g !== y.getBoundingClientRect().top && (y.style.top = `${g}px`);
        }
      }
    };
    return document.addEventListener("scroll", f), () => {
      document.removeEventListener("scroll", f);
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
          i && /* @__PURE__ */ S("span", { className: i }),
          t && /* @__PURE__ */ S("span", { className: "text dropdown-button-text", children: t }),
          /* @__PURE__ */ S("i", { className: "chevron-down" })
        ]
      }
    ),
    l && yn(
      /* @__PURE__ */ S(sP, { dropDownRef: a, onClose: u, children: s }),
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
function aP({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ S(
    oP,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + cP(t),
      buttonLabel: lP(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Pc).map((n) => /* @__PURE__ */ xe(
        iP,
        {
          className: "item block-marker " + uP(t === n),
          onClick: () => e.current?.formatPara(n),
          children: [
            /* @__PURE__ */ S("i", { className: "icon block-marker " + n }),
            /* @__PURE__ */ S("span", { className: "text usfm_" + n, children: Pc[n] })
          ]
        },
        n
      ))
    }
  );
}
function cP(e) {
  return e && e in Nc ? e : "ban";
}
function lP(e) {
  return e && e in Nc ? Nc[e] : "No Style";
}
function uP(e) {
  return e ? "active dropdown-item-active" : "";
}
function Pf() {
  return /* @__PURE__ */ S("div", { className: "divider" });
}
const dP = Nn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ae(), [o, a] = de(s), [c, l] = de(), [d, u] = de(!1), [f, h] = de(!1), y = me(
    ({
      canUndo: p,
      canRedo: g,
      blockMarker: b,
      contextMarker: x
    }) => {
      u(p), h(g), l(b), n?.({
        canUndo: p,
        canRedo: g,
        blockMarker: b,
        contextMarker: x
      });
    },
    [n]
  );
  return z(() => s.registerCommand(
    dr,
    (p, g) => (a(g), !1),
    st
  ), [s]), /* @__PURE__ */ xe(bn, { children: [
    /* @__PURE__ */ S(dg, { onStateChange: y }),
    /* @__PURE__ */ xe("div", { className: "toolbar", children: [
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(Gf, void 0);
          },
          title: oi ? "Undo (⌘Z)" : "Undo (Ctrl+Z)",
          type: "button",
          className: "toolbar-item spaced",
          "aria-label": "Undo",
          children: /* @__PURE__ */ S("i", { className: "format undo" })
        }
      ),
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !f || r,
          onClick: () => {
            o.dispatchCommand(Jf, void 0);
          },
          title: oi ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ S("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ S(Pf, {}),
      o === s && /* @__PURE__ */ xe(bn, { children: [
        /* @__PURE__ */ S(
          aP,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ S(Pf, {})
      ] }),
      /* @__PURE__ */ S("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), fP = pi(), pP = {}, hP = {};
function gP() {
  return /* @__PURE__ */ S("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const iy = Nn(function({
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
  const u = ee(null), f = ee(null), h = ee(null), y = ee(t), p = ee(void 0), g = ee(void 0), b = ee(void 0), x = ee(void 0), v = ee(!1), [M, A] = de(t), [F, B] = de(0), [j, _] = de(), {
    isReadonly: U = !1,
    structureProtectionMode: W = "off",
    hasExternalUI: fe = !1,
    hasSpellCheck: Q = !1,
    textDirection: $e = "ltr",
    markerMenuTrigger: be = "\\",
    view: tr,
    nodes: Le,
    debug: nn = !1,
    contextMenu: mr,
    styleInfo: Et,
    markerSettleDelayMs: re,
    copyLimit: N
  } = a ?? hP, G = tr ?? fP, ue = hs(G) && (G.markerMode !== "hidden" || !G.hasSpacing || G.hasGutterParaMarkers || G.hasActiveTextFocusBox) ? {
    ...G,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : G, Ee = ee(ue);
  Pt(Ee.current, ue) || (Ee.current = ue);
  const Z = Ee.current, Me = Ke(() => Le ?? pP, [Le]), yr = Ke(() => mr, [mr]), Rt = Ke(
    () => ul(Et ?? di),
    [Et]
  ), sn = ee(c);
  Pt(sn.current, c) || (sn.current = c);
  const We = sn.current, le = hs(Z), yt = U || le, _e = ue !== G;
  z(() => {
    le && !U && We?.error(
      "Editor: the block verse layout is read-only; ignoring `isReadonly: false`. Set `isReadonly: true` alongside `verseLayout: 'block'`."
    ), _e && We?.warn(
      "Editor: a visible `markerMode`, `hasSpacing: false`, `hasGutterParaMarkers` and `hasActiveTextFocusBox` are not supported with the block verse layout and are ignored."
    ), Z?.markerMode === "visible" && !U && We?.warn(
      "Editor: `markerMode: 'visible'` renders markers as read-only glyphs, but the editor is editable and no marker repair runs there. Pass `isReadonly: true` alongside it."
    );
  }, [le, U, _e, We, Z?.markerMode]);
  const br = ee(null), Ne = Ke(() => {
    if (Z.markerMode !== "editable") return;
    const q = Et ?? di;
    return {
      getContext: () => br.current?.getMarkerMenuContext(),
      // The context object is always one this same harness produced via `getContext()` above
      // (never externally supplied), so it really is a full `MarkerMenuContext` at runtime -
      // the cast bridges shared-react's structural `MarkerMenuContextLike` back to it.
      getItems: (V) => FA(
        q,
        V,
        Me.extraValidMarkers
      ),
      getEnterItems: (V) => zA(
        q,
        V,
        Me.extraValidMarkers
      ),
      apply: (V, J) => {
        const X = br.current;
        X && (J.trigger === "enter" ? X.splitParagraphWithMarker(V.marker) : X.applyMarkerMenuSelection(V, J));
      },
      commitTypedCloser: (V) => {
        br.current?.commitTypedCloser(V);
      }
    };
  }, [Z, Et, Me.extraValidMarkers]), kr = (q) => {
    v.current || (v.current = !0, sn.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Pi = (q) => {
    if (le)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, bt = (q) => {
    if (Pi(q), yt) throw new Error(`Cannot ${q} in readonly mode`);
  }, As = Ke(
    () => ({
      namespace: "platformEditor",
      theme: { ...Mm, showCharMarkerTitles: Z.showCharMarkerTitles },
      editable: !yt,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [tt, ...le ? D_ : Tl]
    }),
    [yt, le, Z.showCharMarkerTitles]
  );
  Bs.initialize(We);
  function Tr(q) {
    if (q !== void 0 && !ZE(q, Me.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const on = me(() => {
    const q = u.current;
    if (!q) return y.current;
    const V = Ju(q), J = g.current;
    if ((!V || V.size === 0) && !J) return y.current;
    const X = q.getEditorState(), ke = X.toJSON();
    return X.read(
      () => K1(
        ke,
        V ?? /* @__PURE__ */ new Set(),
        { viewOptions: Z, getMarker: Rt, logger: We },
        J,
        b.current
      )
    ) ?? y.current;
  }, [Z, Rt, We]), Ni = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const q = u.current?.getRootElement();
      return !!q && q.ownerDocument.activeElement === q;
    },
    undo() {
      u.current?.dispatchCommand(Gf, void 0);
    },
    redo() {
      u.current?.dispatchCommand(Jf, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      bt("cut"), u.current && Ol(u.current);
    },
    copy() {
      u.current && Nl(u.current);
    },
    paste() {
      bt("paste"), u.current && wl(u.current);
    },
    pastePlainText() {
      bt("paste as plain text"), u.current && ql(u.current);
    },
    getUsj() {
      return on();
    },
    commitPendingMarkerEdits() {
      u.current?.update(
        () => {
          u.current?.dispatchCommand(Vm, void 0);
        },
        { discrete: !0 }
      );
    },
    setTransientInput(q) {
      if (!q) {
        g.current = void 0;
        return;
      }
      const V = u.current?.getEditorState().read(() => {
        const J = O();
        return P(J) && J.isCollapsed() ? J.focus.key : void 0;
      });
      g.current = { input: q, nodeKey: V ?? b.current?.key };
    },
    setUsj(q, V) {
      const J = Pt(y.current, q) || Pt(on(), q);
      if (V?.force || !J) {
        y.current = q, g.current = void 0;
        const X = Pt(M, q);
        A(q), X && B((ke) => ke + 1);
      }
    },
    applyUpdate(q, V = "remote") {
      if (le && V === "remote") {
        sn.current?.error(
          "Editor: ignoring a remote update in the block verse layout; reload the view with the new USJ instead."
        );
        return;
      }
      Pi("apply an update"), u.current?.update(
        () => {
          V === "remote" && Wr(ns), dC(q, Z, Me, We);
        },
        { discrete: !0 }
      );
      const J = u.current?.getEditorState();
      if (!J) return;
      const X = Bs.deserializeEditorState(J, Z);
      if (X) {
        const ke = !Pt(y.current, X);
        if (ke && (y.current = X), ke || !Pt(M, X)) {
          const Qe = ad(q, J, "apply");
          x.current = X, s?.(X, q, V, Qe);
        }
      }
    },
    replaceEmbedUpdate(q, V) {
      const J = u.current?.read(() => Qx(q, V));
      J ? this.applyUpdate(J) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (le) {
        kr("get the selection");
        return;
      }
      return u.current?.read(bl);
    },
    setSelection(q) {
      if (le) {
        kr("set the selection");
        return;
      }
      u.current?.update(() => {
        const V = Uo(q);
        V !== void 0 && (si(V), Wr(ap));
      });
    },
    setAnnotation(q, V, J, X, ke) {
      if (le) {
        kr("set an annotation");
        return;
      }
      let Qe, nr, an, Oi;
      typeof X == "function" || X === void 0 ? (Qe = X, nr = ke) : (Qe = X.onClick, nr = X.onRemove, an = X.onMouseEnter, Oi = X.onMouseLeave), f.current?.setAnnotation(
        q,
        Iu(V),
        J,
        Qe,
        nr,
        an,
        Oi
      );
    },
    removeAnnotation(q, V) {
      f.current?.removeAnnotation(Iu(q), V);
    },
    formatPara(q) {
      bt("format a paragraph"), u.current?.update(
        () => {
          const V = O();
          if (!P(V)) {
            c?.warn(
              `formatPara refused: no range selection to retag with "${q}" (restore the caret before applying, as the marker palettes do)`
            );
            return;
          }
          xb(V, () => ai(q));
          const J = O();
          if (!P(J)) return;
          const X = /* @__PURE__ */ new Set();
          J.getNodes().forEach((ke) => {
            const Qe = ke.getTopLevelElement();
            ce(Qe) && X.add(Qe);
          }), X.forEach((ke) => Om(ke, q, Z));
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
      if (yt) throw new Error("Cannot remove character marker in readonly mode");
      Tr(q);
      let V = !1;
      return u.current?.update(
        () => {
          const J = O();
          P(J) && (V = Tm(J, q, Z));
        },
        { discrete: !0 }
      ), V;
    },
    replaceCharacterMarker(q, V) {
      if (yt) throw new Error("Cannot replace character marker in readonly mode");
      Tr(q), Tr(V);
      let J = !1;
      return u.current?.update(
        () => {
          const X = O();
          P(X) && (J = dA(X, q, V));
        },
        { discrete: !0 }
      ), J;
    },
    extendCharacterMarker(q, V) {
      if (yt) throw new Error("Cannot extend character marker in readonly mode");
      Tr(q), V?.forEach(
        (X) => Tr(X)
      );
      let J = !1;
      return u.current?.update(
        () => {
          const X = O();
          P(X) && (J = fA(
            X,
            q,
            V,
            Z
          ));
        },
        { discrete: !0 }
      ), J;
    },
    insertMarker(q) {
      if (yt) throw new Error("Cannot insert marker in readonly mode");
      if (!r) throw new Error("Cannot insert marker without a scripture reference (scrRef)");
      if (!u.current) return;
      if (!Tc(q, Me.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const V = xc(
        q,
        p,
        Z,
        Me,
        We,
        void 0,
        Et
      );
      return V.action({ editor: u.current, reference: r }), V.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!U)
        return u.current?.getEditorState().read(() => XA());
    },
    applyMarkerMenuSelection(q, V) {
      if (U) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (q.kind !== "closeTag" && !Tc(q.marker, Me.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let J;
      return u.current.update(() => {
        J = r1(q, V, r, {
          expandedNoteKeyRef: p,
          viewOptions: Z,
          nodeOptions: Me,
          logger: c,
          styleInfo: Et
        });
      }), J;
    },
    splitParagraphWithMarker(q) {
      if (U) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        Im(q, Z);
      });
    },
    commitTypedMarker(q, V) {
      if (U) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let J = !1;
      return u.current.update(() => {
        J = t1(q, V), J || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), J;
    },
    commitTypedCloser(q) {
      if (U) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let V = !1;
      return u.current.update(() => {
        V = Lm(q), V || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), V;
    },
    insertNote(q, V, J) {
      bt("insert a note"), u.current?.update(
        () => {
          const X = zh(
            q,
            V,
            J,
            r,
            Z,
            Me,
            We
          );
          X && !X.getIsCollapsed() && (p.current = X.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      u.current?.update(() => {
        const V = pd(q);
        V && ($_(V, Z), V.getIsCollapsed() || (p.current = V.getKey()));
      });
    },
    getNoteOps(q) {
      return u.current?.read(() => {
        const V = pd(q);
        if (V)
          return ml(V);
      });
    },
    get toolbarEndRef() {
      return h;
    }
  };
  br.current = Ni, wc(d, () => Ni), z(() => {
    const q = u.current;
    if (q)
      return q.registerUpdateListener(({ editorState: V }) => {
        V.read(() => {
          const J = O();
          if (!P(J) || !J.isCollapsed()) return;
          const X = J.focus.getNode();
          E(X) && (b.current = { key: X.getKey(), offset: J.focus.offset });
        });
      });
  }, []);
  const rr = me(
    (q, V, J, X) => {
      if (le) return;
      const ke = Bs.deserializeEditorState(q, Z);
      if (ke) {
        const Qe = !Pt(y.current, ke);
        if (Qe && (y.current = ke), Qe || !Pt(M, ke)) {
          const nr = ad(X, q);
          x.current = ke, s?.(ke, X, "local", nr);
        }
      }
    },
    [M, s, Z, le]
  );
  z(() => {
    const q = u.current;
    if (!(!q || !s))
      return q.registerUpdateListener(({ tags: V, dirtyElements: J, dirtyLeaves: X }) => {
        !V.has(Dc) && (J.size === 0 && X.size === 0 || V.has(ns) || !Ju(q)?.size) || queueMicrotask(() => {
          const ke = on();
          !ke || Pt(x.current, ke) || (x.current = ke, s(ke, void 0, "local", void 0));
        });
      });
  }, [s, on]);
  const Bt = me(
    (q) => {
      _(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ xe(Qf, { initialConfig: As, children: [
      /* @__PURE__ */ S(gv, { isEditable: !yt }),
      /* @__PURE__ */ xe("div", { className: "editor-container", children: [
        fe ? /* @__PURE__ */ S(dg, { onStateChange: Bt }) : /* @__PURE__ */ S(
          "div",
          {
            className: "editor-toolbar-container" + (yt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ S(
              dP,
              {
                ref: h,
                editorRef: br,
                isReadonly: yt,
                onStateChange: Bt
              }
            )
          }
        ),
        /* @__PURE__ */ xe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ S(ep, { editorRef: u }),
          /* @__PURE__ */ S(
            Tb,
            {
              contentEditable: /* @__PURE__ */ S(
                Zf,
                {
                  className: `editor-input usfm ${uC(Z).join(" ")}${Z.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${Z.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Q
                }
              ),
              placeholder: /* @__PURE__ */ S(gP, {}),
              ErrorBoundary: tp
            }
          ),
          fe && /* @__PURE__ */ S(hv, {}),
          /* @__PURE__ */ S(rp, {}),
          r && n && /* @__PURE__ */ S(V1, { scrRef: r, onScrRefChange: n }),
          r && !fe && /* @__PURE__ */ S(
            IS,
            {
              trigger: be,
              scrRef: r,
              contextMarker: j,
              getMarkerAction: (q) => xc(
                q,
                p,
                Z,
                Me,
                We,
                void 0,
                Et
              ),
              editableHarness: Ne
            }
          ),
          /* @__PURE__ */ S(
            bv,
            {
              scripture: M,
              scriptureRef: y,
              nodeOptions: Me,
              editorAdaptor: Ar,
              viewOptions: Z,
              logger: We
            },
            F
          ),
          /* @__PURE__ */ S(Dv, { onChange: i }),
          /* @__PURE__ */ S(
            iC,
            {
              onChange: rr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: Kb
            }
          ),
          /* @__PURE__ */ S(yA, { viewOptions: Z }),
          /* @__PURE__ */ S(rC, { ref: f, logger: We }),
          /* @__PURE__ */ S(IC, { viewOptions: Z }),
          /* @__PURE__ */ S(XC, {}),
          /* @__PURE__ */ S(nv, {}),
          Z?.markerMode !== "editable" && /* @__PURE__ */ S(iv, { logger: We }),
          /* @__PURE__ */ S(cv, { options: yr }),
          /* @__PURE__ */ S(vA, { limit: N, viewOptions: Z }),
          /* @__PURE__ */ S(pv, {}),
          /* @__PURE__ */ S(yv, {}),
          /* @__PURE__ */ S(n1, {}),
          /* @__PURE__ */ S(
            M1,
            {
              viewOptions: Z,
              getMarker: Rt,
              logger: We,
              markerSettleDelayMs: re,
              structureProtectionMode: W,
              copyLimit: N
            }
          ),
          Z?.markerMode === "visible" && /* @__PURE__ */ S(CA, { viewOptions: Z, copyLimit: N }),
          /* @__PURE__ */ S(
            w1,
            {
              styleInfo: Et,
              viewOptions: Z,
              logger: We
            }
          ),
          /* @__PURE__ */ S(
            kv,
            {
              expandedNoteKeyRef: p,
              nodeOptions: Me,
              viewOptions: Z,
              logger: We
            }
          ),
          /* @__PURE__ */ S(Iv, {}),
          /* @__PURE__ */ S(wC, {}),
          /* @__PURE__ */ S(AC, {}),
          /* @__PURE__ */ S(B1, { viewOptions: Z, logger: We }),
          /* @__PURE__ */ S(Uv, {}),
          /* @__PURE__ */ S(vS, { structureProtectionMode: W }),
          /* @__PURE__ */ S(SS, { textDirection: $e }),
          /* @__PURE__ */ S(ES, {}),
          /* @__PURE__ */ S($S, {}),
          l
        ] }),
        nn && /* @__PURE__ */ S(nP, {})
      ] })
    ] }, Z.verseLayout ?? "inline")
  );
}), vN = Nn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ S(iy, { ref: r, ...i });
});
function sy() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function _o(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? sy() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function oy(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? sy() : r,
    quote: e,
    type: "thread"
  };
}
function Nf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function mP(e) {
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
class yP {
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
          const c = Nf(a);
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
          const c = Nf(a);
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
    return this._comments = n, qa(this), t.type === "comment" ? {
      index: s,
      markedComment: mP(t)
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
    return t !== null ? t.doc.get("comments", vu) : null;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _createCollabSharedMap(t) {
    const r = new Su(), n = t.type, i = t.id;
    if (r.set("type", n), r.set("id", i), n === "comment")
      r.set("author", t.author), r.set("content", t.content), r.set("deleted", t.deleted), r.set("timeStamp", t.timeStamp);
    else {
      r.set("quote", t.quote);
      const s = new vu();
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
      Lb,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      ft
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Ib) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const h of u) {
              const y = h.insert, p = h.retain, g = h.delete, b = d.parent, x = d === r ? void 0 : b instanceof Su && this._comments.find((v) => v.id === b.get("id"));
              if (Array.isArray(y)) {
                const v = f;
                y.slice().reverse().forEach((M) => {
                  const A = M.get("id"), B = M.get("type") === "thread" ? oy(
                    M.get("quote"),
                    M.get("comments").toArray().map(
                      (j) => _o(
                        j.get("content"),
                        j.get("author"),
                        j.get("id"),
                        j.get("timeStamp"),
                        j.get("deleted")
                      )
                    ),
                    A
                  ) : _o(
                    M.get("content"),
                    M.get("author"),
                    A,
                    M.get("timeStamp"),
                    M.get("deleted")
                  );
                  this._withLocalTransaction(() => {
                    this.addComment(B, x, v);
                  });
                });
              } else if (typeof p == "number")
                f += p;
              else if (typeof g == "number")
                for (let v = 0; v < g; v++) {
                  const M = x === void 0 || x === !1 ? this._comments[f] : x.comments[f];
                  this._withLocalTransaction(() => {
                    this.deleteCommentOrThread(M, x);
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
function bP(e) {
  const [t, r] = de(e.getComments());
  return z(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function kP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n
}) {
  const i = ee(null);
  return z(() => {
    i.current !== null && i.current.focus();
  }, []), z(() => {
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
  }, [n, e]), /* @__PURE__ */ S("div", { className: "Modal__overlay", role: "dialog", children: /* @__PURE__ */ xe("div", { className: "Modal__modal", tabIndex: -1, ref: i, children: [
    /* @__PURE__ */ S("h2", { className: "Modal__title", children: r }),
    /* @__PURE__ */ S(
      "button",
      {
        className: "Modal__closeButton",
        "aria-label": "Close modal",
        type: "button",
        onClick: e,
        children: "X"
      }
    ),
    /* @__PURE__ */ S("div", { className: "Modal__content", children: t })
  ] }) });
}
function TP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return yn(
    /* @__PURE__ */ S(kP, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function ay() {
  const [e, t] = de(null), r = me(() => {
    t(null);
  }, []), n = Ke(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ S(TP, { onClose: r, title: s, closeOnClickOutside: a, children: o });
  }, [e, r]), i = me(
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
const xP = {
  ...Mm,
  paragraph: "CommentEditorTheme__paragraph"
};
function _P(...e) {
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
  return /* @__PURE__ */ S(
    "button",
    {
      disabled: i,
      className: _P(
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
function CP({
  className: e
}) {
  return /* @__PURE__ */ S(Zf, { className: e || "ContentEditable__root" });
}
function vP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ S("div", { className: t || "Placeholder__root", children: e });
}
const Of = Hf("INSERT_INLINE_COMMAND");
function SP({
  anchorKey: e,
  editor: t,
  showComments: r,
  onAddComment: n
}) {
  const i = ee(null), s = me(() => {
    const o = i.current, a = t.getRootElement(), c = t.getElementByKey(e);
    if (o !== null && a !== null && c !== null) {
      const { right: l } = a.getBoundingClientRect(), { top: d } = c.getBoundingClientRect();
      o.style.left = `${l - 20}px`, o.style.top = `${d - 30}px`;
    }
  }, [e, t]);
  return z(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s);
  }), [t, s]), Ts(() => {
    s();
  }, [e, t, r, s]), /* @__PURE__ */ S("div", { className: "CommentPlugin_AddCommentBox", ref: i, children: /* @__PURE__ */ S("button", { className: "CommentPlugin_AddCommentBox_button", onClick: n, children: /* @__PURE__ */ S("i", { className: "icon add-comment" }) }) });
}
function MP({ onEscape: e }) {
  const [t] = ae();
  return z(() => t.registerCommand(
    Wf,
    (r) => e(r),
    Vr
  ), [t, e]), null;
}
function cy({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ S(Qf, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: xP
  }, children: /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ S(
      qb,
      {
        contentEditable: /* @__PURE__ */ S(CP, { className: e }),
        placeholder: /* @__PURE__ */ S(vP, { children: s }),
        ErrorBoundary: tp
      }
    ),
    /* @__PURE__ */ S(wb, { onChange: n }),
    /* @__PURE__ */ S(rp, {}),
    t !== !1 && /* @__PURE__ */ S(Pb, {}),
    /* @__PURE__ */ S(MP, { onEscape: r }),
    /* @__PURE__ */ S(Nb, {}),
    i !== void 0 && /* @__PURE__ */ S(ep, { editorRef: i })
  ] }) });
}
function ly(e, t) {
  return me(
    (r, n) => {
      r.read(() => {
        e(Rb()), t(!$b(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function EP({
  editor: e,
  cancelAddComment: t,
  submitAddComment: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = ee(null), c = Ke(
    () => ({
      container: document.createElement("div"),
      elements: []
    }),
    []
  ), l = ee(null), d = dy(), u = me(() => {
    e.getEditorState().read(() => {
      const p = O();
      if (P(p)) {
        l.current = p.clone();
        const g = p.anchor, b = p.focus, x = _b(
          e,
          g.getNode(),
          g.offset,
          b.getNode(),
          b.offset
        ), v = a.current;
        if (x !== null && v !== null) {
          const { left: M, bottom: A, width: F } = x.getBoundingClientRect(), B = Cb(e, x);
          let j = B.length === 1 ? M + F / 2 - 125 : M - 125;
          j < 10 && (j = 10), v.style.left = `${j}px`, v.style.top = `${A + 20 + (window.pageYOffset || document.documentElement.scrollTop)}px`;
          const _ = B.length, { container: U } = c, W = c.elements, fe = W.length;
          for (let Q = 0; Q < _; Q++) {
            const $e = B[Q];
            let be = W[Q];
            be === void 0 && (be = document.createElement("span"), W[Q] = be, U.appendChild(be));
            const Le = `position:absolute;top:${$e.top + (window.pageYOffset || document.documentElement.scrollTop)}px;left:${$e.left}px;height:${$e.height}px;width:${$e.width}px;background-color:rgba(255, 212, 0, 0.3);pointer-events:none;z-index:5;`;
            be.style.cssText = Le;
          }
          for (let Q = fe - 1; Q >= _; Q--) {
            const $e = W[Q];
            U.removeChild($e), W.pop();
          }
        }
      }
    });
  }, [e, c]);
  Ts(() => {
    u();
    const p = c.container, g = document.body;
    return g !== null ? (g.appendChild(p), () => {
      g.removeChild(p);
    }) : () => {
    };
  }, [c.container, u]), z(() => (window.addEventListener("resize", u), () => {
    window.removeEventListener("resize", u);
  }), [u]);
  const f = (p) => (p.preventDefault(), t(), !0), h = () => {
    if (s) {
      let p = e.getEditorState().read(() => {
        const g = l.current;
        return g ? g.getTextContent() : "";
      });
      p.length > 100 && (p = p.slice(0, 99) + "…"), r(
        oy(p, [_o(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, y = ly(i, o);
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ S(
      cy,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: y
      }
    ),
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ S(Zr, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ S(
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
function AP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = ee(null), c = dy(), l = ly(i, o);
  return /* @__PURE__ */ xe(bn, { children: [
    /* @__PURE__ */ S(
      cy,
      {
        className: "CommentPlugin_CommentsPanel_Editor",
        autoFocus: !1,
        onEscape: () => !0,
        onChange: l,
        editorRef: a,
        placeholder: r
      }
    ),
    /* @__PURE__ */ S(
      Zr,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(_o(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(pb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ S("i", { className: "send" })
      }
    )
  ] });
}
function uy({
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
      /* @__PURE__ */ S(
        Zr,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ S(
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
    const d = () => {
      s(performance.timeOrigin + performance.now());
    };
    d();
    const u = window.setInterval(d, 6e4);
    return () => {
      window.clearInterval(u);
    };
  }, []);
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = ay();
  return /* @__PURE__ */ xe("li", { className: "CommentPlugin_CommentsPanel_List_Comment", children: [
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel_List_Details", children: [
      /* @__PURE__ */ S("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Author", children: e.author }),
      /* @__PURE__ */ xe("span", { className: "CommentPlugin_CommentsPanel_List_Comment_Time", children: [
        "· ",
        o > -10 ? "Just now" : n.format(a, "minute")
      ] })
    ] }),
    /* @__PURE__ */ S("p", { className: e.deleted ? "CommentPlugin_CommentsPanel_DeletedComment" : "", children: e.content }),
    !e.deleted && /* @__PURE__ */ xe(bn, { children: [
      /* @__PURE__ */ S(
        Zr,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ S(
              uy,
              {
                commentOrThread: e,
                deleteCommentOrThread: t,
                thread: r,
                onClose: d
              }
            ));
          },
          className: "CommentPlugin_CommentsPanel_List_DeleteButton",
          children: /* @__PURE__ */ S("i", { className: "delete" })
        }
      ),
      c
    ] })
  ] });
}
function PP({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = de(0), [l, d] = ay(), u = Ke(
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
  }, [a]), /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List", ref: n, children: t.map((f) => {
    const h = f.id;
    return f.type === "thread" ? /* @__PURE__ */ xe(
      "li",
      {
        onClick: () => {
          const p = s.get(h);
          if (p !== void 0 && (e === null || e.indexOf(h) === -1)) {
            const g = document.activeElement;
            o.update(
              () => {
                const b = Array.from(p)[0], x = se(b);
                Ce(x) && x.selectStart();
              },
              {
                onUpdate() {
                  g !== null && g.focus();
                }
              }
            );
          }
        },
        className: `CommentPlugin_CommentsPanel_List_Thread ${s.has(h) ? "interactive" : ""} ${e.indexOf(h) === -1 ? "" : "active"}`,
        children: [
          /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel_List_Thread_QuoteBox", children: [
            /* @__PURE__ */ xe("blockquote", { className: "CommentPlugin_CommentsPanel_List_Thread_Quote", children: [
              "> ",
              /* @__PURE__ */ S("span", { children: f.quote })
            ] }),
            /* @__PURE__ */ S(
              Zr,
              {
                onClick: () => {
                  d("Delete Thread", (p) => /* @__PURE__ */ S(
                    uy,
                    {
                      commentOrThread: f,
                      deleteCommentOrThread: r,
                      onClose: p
                    }
                  ));
                },
                className: "CommentPlugin_CommentsPanel_List_DeleteButton",
                children: /* @__PURE__ */ S("i", { className: "delete" })
              }
            ),
            l
          ] }),
          /* @__PURE__ */ S("ul", { className: "CommentPlugin_CommentsPanel_List_Thread_Comments", children: f.comments.map((p) => /* @__PURE__ */ S(
            wf,
            {
              comment: p,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            p.id
          )) }),
          /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ S(
            AP,
            {
              submitAddComment: i,
              thread: f,
              placeholder: "Reply to comment..."
            }
          ) })
        ]
      },
      h
    ) : /* @__PURE__ */ S(
      wf,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      h
    );
  }) });
}
function NP({
  activeIDs: e,
  deleteCommentOrThread: t,
  comments: r,
  submitAddComment: n,
  markNodeMap: i
}) {
  const s = ee(null), o = r.length === 0;
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentsPanel", children: [
    /* @__PURE__ */ S("h2", { className: "CommentPlugin_CommentsPanel_Heading", children: "Comments" }),
    o ? /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_Empty", children: "No Comments" }) : /* @__PURE__ */ S(
      PP,
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
function dy() {
  const e = np(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function OP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = np(), [a] = ae(), c = Ke(() => {
    const j = new yP(a, s);
    return r && j.registerOnChange(r), t?.(j), j;
  }, [a, s, r, t]), l = bP(c), d = Ke(() => /* @__PURE__ */ new Map(), []), [u, f] = de(), [h, y] = de([]), [p, g] = de(!1), [b, x] = de(!1), { yjsDocMap: v } = o;
  z(() => {
    if (e) {
      const j = e("comments", v);
      return c.registerCollaboration(j);
    }
    return () => {
    };
  }, [c, e, v]);
  const M = me(() => {
    a.update(() => {
      const j = O();
      j !== null && (j.dirty = !0);
    }), g(!1);
  }, [a]), A = me(
    (j, _) => {
      if (j.type === "comment") {
        const U = c.deleteCommentOrThread(j, _);
        if (!U)
          return;
        const { markedComment: W, index: fe } = U;
        c.addComment(W, _, fe);
      } else {
        c.deleteCommentOrThread(j);
        const U = _ !== void 0 ? _.id : j.id, W = d.get(U);
        W !== void 0 && setTimeout(() => {
          a.update(() => {
            for (const fe of W) {
              const Q = se(fe);
              Ce(Q) && (Q.deleteID(jr, U), Q.hasNoIDsForEveryType() && Xs(Q));
            }
          });
        });
      }
    },
    [c, a, d]
  ), F = me(
    (j, _, U, W) => {
      c.addComment(j, U), _ && (a.update(() => {
        P(W) && xp(W, jr, j.id);
      }), g(!1));
    },
    [c, a]
  );
  z(() => {
    const j = [];
    let _;
    for (const U of h) {
      const W = d.get(U);
      if (W !== void 0)
        for (const fe of W) {
          const Q = a.getElementByKey(fe);
          Q !== null && (Q.classList.add("selected"), j.push(Q), _ = window.setTimeout(() => {
            x(!0);
          }, 0));
        }
    }
    return () => {
      _ !== void 0 && window.clearTimeout(_);
      for (const U of j)
        U.classList.remove("selected");
    };
  }, [h, a, d]), z(() => {
    if (!a.hasNodes([tt]))
      throw new Error("CommentPlugin: TypedMarkNode not registered on editor!");
    const j = /* @__PURE__ */ new Map();
    return je(
      Xf(
        a,
        tt,
        (_) => ss(_.getTypedIDs()),
        (_, U) => {
          for (const [W, fe] of Object.entries(_.getTypedIDs()))
            fe.forEach((Q) => {
              U.addID(W, Q);
            });
        }
      ),
      a.registerMutationListener(
        tt,
        (_) => {
          a.getEditorState().read(() => {
            for (const [U, W] of _) {
              const fe = se(U);
              let Q = [];
              W === "destroyed" ? Q = j.get(U) ?? [] : Ce(fe) && (Q = fe.getTypedIDs()[jr] ?? []);
              for (const $e of Q) {
                let be = d.get($e);
                j.set(U, Q), W === "destroyed" ? be !== void 0 && (be.delete(U), be.size === 0 && d.delete($e)) : (be === void 0 && (be = /* @__PURE__ */ new Set(), d.set($e, be)), be.has(U) || be.add(U));
              }
            }
          });
        },
        { skipInitialization: !1 }
      ),
      a.registerUpdateListener(({ editorState: _, tags: U }) => {
        _.read(() => {
          const W = O();
          let fe = !1, Q = !1;
          if (P(W)) {
            const $e = W.anchor.getNode();
            if (E($e)) {
              const be = vk($e, jr, W.anchor.offset) ?? [];
              be !== null && (y(be), fe = !0), W.isCollapsed() || (f($e.getKey()), Q = !0);
            }
          }
          fe || y(($e) => $e.length === 0 ? $e : []), Q || f(null), !U.has("collaboration") && P(W) && g(!1);
        });
      }),
      a.registerCommand(
        Of,
        () => {
          const _ = window.getSelection();
          return _ !== null && _.removeAllRanges(), g(!0), !0;
        },
        kn
      )
    );
  }, [a, d]);
  const B = () => {
    a.dispatchCommand(Of, void 0);
  };
  return /* @__PURE__ */ xe(bn, { children: [
    p && yn(
      /* @__PURE__ */ S(
        EP,
        {
          editor: a,
          cancelAddComment: M,
          submitAddComment: F
        }
      ),
      document.body
    ),
    u != null && !p && yn(
      /* @__PURE__ */ S(
        SP,
        {
          anchorKey: u,
          editor: a,
          showComments: b,
          onAddComment: B
        }
      ),
      document.body
    ),
    n !== null && yn(
      /* @__PURE__ */ S(
        Zr,
        {
          className: `CommentPlugin_ShowCommentsButton ${b ? "active" : ""}`,
          onClick: () => x(!b),
          title: b ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ S("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    b && yn(
      /* @__PURE__ */ S(
        NP,
        {
          comments: l,
          submitAddComment: F,
          deleteCommentOrThread: A,
          activeIDs: h,
          markNodeMap: d
        }
      ),
      i?.current ?? document.body
    )
  ] });
}
function wP() {
  const e = ee(void 0), t = me((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function qP(e, t) {
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
function RP(e, t) {
  z(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      qP(r, t);
    };
  }, [t, e]);
}
const SN = Nn(function(t, r) {
  const n = ee(null), i = ee(!0), s = ee(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: h, options: { isReadonly: y, view: p } = {} } = t, g = (y ?? !1) || hs(p), [b, x] = wP();
  RP(f, b), z(() => {
    if (process.env.NODE_ENV !== "production") {
      const A = "@eten-tech-foundation/platform-editor: Marginal is deprecated and will be removed in a future release.";
      h?.warn(A), h || console.warn(A);
    }
  }, [h]), wc(r, () => ({
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
    setTransientInput(A) {
      n.current?.setTransientInput(A);
    },
    setUsj(A, F) {
      n.current?.setUsj(A, F);
    },
    applyUpdate(A, F) {
      n.current?.applyUpdate(A, F);
    },
    replaceEmbedUpdate(A, F) {
      return n.current?.replaceEmbedUpdate(A, F);
    },
    getSelection() {
      return n.current?.getSelection();
    },
    setSelection(A) {
      n.current?.setSelection(A);
    },
    setAnnotation(A, F, B, j, _) {
      typeof j == "function" || j === void 0 ? n.current?.setAnnotation(A, F, B, j, _) : n.current?.setAnnotation(A, F, B, j);
    },
    removeAnnotation(A, F) {
      n.current?.removeAnnotation(A, F);
    },
    formatPara(A) {
      n.current?.formatPara(A);
    },
    getElementByKey(A) {
      return n.current?.getElementByKey(A);
    },
    removeCharacterMarker(A) {
      return n.current?.removeCharacterMarker(A) ?? !1;
    },
    replaceCharacterMarker(A, F) {
      return n.current?.replaceCharacterMarker(A, F) ?? !1;
    },
    extendCharacterMarker(A, F) {
      return n.current?.extendCharacterMarker(A, F) ?? !1;
    },
    insertMarker(A) {
      return n.current?.insertMarker(A);
    },
    getMarkerMenuContext() {
      return n.current?.getMarkerMenuContext();
    },
    applyMarkerMenuSelection(A, F) {
      return n.current?.applyMarkerMenuSelection(A, F);
    },
    splitParagraphWithMarker(A) {
      n.current?.splitParagraphWithMarker(A);
    },
    commitTypedMarker(A, F) {
      return n.current?.commitTypedMarker(A, F) ?? !1;
    },
    commitTypedCloser(A) {
      return n.current?.commitTypedCloser(A) ?? !1;
    },
    insertNote(A, F, B) {
      n.current?.insertNote(A, F, B);
    },
    selectNote(A) {
      n.current?.selectNote(A);
    },
    getNoteOps(A) {
      return n.current?.getNoteOps(A);
    },
    setComments(A) {
      b.current?.setComments(A), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const v = me(
    (A, F, B, j) => {
      if (!d) return;
      const _ = b.current?.getComments();
      d(A, _, F, B, j);
    },
    [b, d]
  ), M = me(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = b.current?.getComments();
    l(A);
  }, [b, i, l]);
  return z(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ S(Ob, { children: /* @__PURE__ */ xe(iy, { ref: n, onUsjChange: v, ...f, children: [
    /* @__PURE__ */ S(
      OP,
      {
        setCommentStore: x,
        onChange: M,
        showCommentsContainerRef: g ? null : u ?? o,
        commentContainerRef: s,
        logger: f.logger
      }
    ),
    /* @__PURE__ */ S("div", { ref: s, className: "comment-container" })
  ] }) });
});
function mn(e) {
  return e.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}
function $P(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function LP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const IP = /^[#\w().,%/\s-]+$/;
function xr(e) {
  return e != null;
}
const DP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, UP = {
  left: "right",
  right: "left"
}, FP = "var(--usj-font-fallback, serif)";
function fy(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${$P(i)}"`).join(", ")}, ${FP}`;
}
const Oc = ".editor-input.usfm", zP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function KP(e) {
  return zP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Oc}".`
  ), Oc);
}
function BP(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(fy(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (IP.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), xr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), xr(t.firstLineIndent) && s.push(`text-indent: ${mn(t.firstLineIndent * 20 * r)}vw`), xr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${mn(t.leftMargin * 20 * r)}vw`), xr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${mn(t.rightMargin * 20 * r)}vw`
  ), xr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${mn(t.spaceBefore * r)}pt`), xr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${mn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = DP[n ? UP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const qf = { c: 150, ca: 133, cp: 150 };
function Rf(e, t) {
  return e && xr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function jP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && xr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = Rf(e.markers.c, qf.c);
  return ["ca", "cp"].map((i) => {
    const s = Rf(
      e.markers[i],
      qf[i]
    ), o = mn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function MN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Oc } = t, s = KP(i), o = [], a = [];
  e.defaultFont && a.push(fy(e.defaultFont)), xr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${mn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = BP(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${LP(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...jP(e, s)), o.join(`
`);
}
export {
  Jh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  vN as Editorial,
  rs as GENERATOR_NOTE_CALLER,
  sp as HIDDEN_NOTE_CALLER,
  SN as Marginal,
  k as MarkerType,
  Gh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Cl as STANDARD_VIEW_MODE,
  di as defaultStyleInfo,
  CN as directionToNames,
  H_ as filterAndRankItems,
  MN as generateUsjCss,
  xN as getDefaultViewMode,
  pi as getDefaultViewOptions,
  zA as getEnterMenuItems,
  FA as getMarkerMenuItems,
  _N as getViewMode,
  Ml as getViewOptions,
  hs as isBlockVerseLayout,
  Kr as isInsertEmbedOpOfType,
  oC as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
