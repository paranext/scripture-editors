import { jsx as S, jsxs as xe, Fragment as bn } from "react/jsx-runtime";
import { forwardRef as Nn, useState as de, useRef as ee, useCallback as me, useEffect as z, useMemo as Ke, memo as Oy, createContext as Df, useContext as Uf, Children as wy, isValidElement as qy, cloneElement as Ry, useImperativeHandle as wc, useLayoutEffect as Ts } from "react";
import { assertSafeKey as Je, isValidBookCode as $y, MARKER_OBJECT_PROPS as Ly, USJ_VERSION as _r, USJ_TYPE as Cr, isUsjTextContentLocation as Iy, indexesFromUsjJsonPath as Ff, isUsjAttributeKeyLocation as Dy, isUsjAttributeMarkerLocation as Uy, isUsjClosingAttributeMarkerLocation as Fy, isUsjMarkerLocation as zy, isUsjClosingMarkerLocation as Ky, isUsjPropertyValueLocation as By, getUsjDocumentLocationTypeName as jy, usjJsonPathFromIndexes as ln, EMPTY_USJ as zf } from "@eten-tech-foundation/scripture-utilities";
import { $applyNodeReplacement as Ve, $parseSerializedNode as vo, DecoratorNode as xs, ElementNode as er, isHTMLElement as On, createState as So, $getState as ne, $setState as xt, $isRangeSelection as P, $isElementNode as L, $isTextNode as E, $getSelection as O, $isNodeSelection as Mo, ParagraphNode as qc, TextNode as Be, $createTextNode as he, $getCommonAncestor as Vy, $isLineBreakNode as wn, NODE_STATE_KEY as _s, $getEditor as ki, $hasUpdateTag as Wy, $getNodeByKey as se, $getRoot as Re, $createRangeSelection as Rc, $createPoint as Ra, $getCharacterOffsets as $c, KEY_DOWN_COMMAND as Nr, COMMAND_PRIORITY_HIGH as Oe, HISTORY_MERGE_TAG as Kf, CLICK_COMMAND as Eo, COMMAND_PRIORITY_EDITOR as kn, isDOMNode as Bf, $getNearestNodeFromDOMNode as Ti, CONTROLLED_TEXT_INSERTION_COMMAND as Gs, PASTE_COMMAND as cr, COMMAND_PRIORITY_CRITICAL as st, CUT_COMMAND as vr, DROP_COMMAND as Lc, DELETE_CHARACTER_COMMAND as Hy, DELETE_WORD_COMMAND as Gy, DELETE_LINE_COMMAND as Jy, $isDecoratorNode as qn, COPY_COMMAND as ii, COMMAND_PRIORITY_LOW as ft, COMMAND_PRIORITY_NORMAL as jr, SELECTION_CHANGE_COMMAND as dr, getDOMSelection as Yy, isSelectionWithinEditor as jf, $createRangeSelectionFromDom as Xy, $setSelection as si, isDOMTextNode as Qy, BLUR_COMMAND as Ic, $addUpdateTag as Vr, SKIP_DOM_SELECTION_TAG as Zy, CLEAR_HISTORY_COMMAND as eb, $getPreviousSelection as tb, $isRootOrShadowRoot as rb, CAN_UNDO_COMMAND as nb, CAN_REDO_COMMAND as ib, DRAGSTART_COMMAND as sb, $createNodeSelection as Vf, getDOMSelectionFromTarget as ob, $onUpdate as Wf, KEY_ENTER_COMMAND as Hf, LineBreakNode as Gf, $isRootNode as ab, INSERT_PARAGRAPH_COMMAND as Ji, $copyNode as cb, FOCUS_COMMAND as lb, createEditor as ub, SELECT_ALL_COMMAND as db, isExactShortcutMatch as fb, getDOMTextNode as pb, KEY_ESCAPE_COMMAND as Jf, createCommand as Yf, INSERT_LINE_BREAK_COMMAND as hb, HISTORIC_TAG as Dc, UNDO_COMMAND as Xf, REDO_COMMAND as Qf, CLEAR_EDITOR_COMMAND as gb } from "lexical";
import { addClassNamesToElement as Vn, removeClassNamesFromElement as ia, $findMatchingParent as Ye, $dfsIterator as Zf, $dfs as Rn, mergeRegister as je, registerNestedElementResolver as ep, $unwrapNode as $a, IS_APPLE as oi } from "@lexical/utils";
import { useLexicalNodeSelection as mb } from "@lexical/react/useLexicalNodeSelection";
import { deepEqual as Pt } from "fast-equals";
import ji from "quill-delta";
import { copyToClipboard as yb, $getLexicalContent as bb } from "@lexical/clipboard";
import { graphemeSegments as kb } from "unicode-segmenter/grapheme";
import { useLexicalComposerContext as ae } from "@lexical/react/LexicalComposerContext";
import { TreeView as Tb } from "@lexical/react/LexicalTreeView";
import * as xb from "react-dom";
import { createPortal as yn } from "react-dom";
import { LexicalComposer as tp } from "@lexical/react/LexicalComposer";
import { ContentEditable as rp } from "@lexical/react/LexicalContentEditable";
import { EditorRefPlugin as np } from "@lexical/react/LexicalEditorRefPlugin";
import { LexicalErrorBoundary as ip } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin as sp } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin as _b } from "@lexical/react/LexicalRichTextPlugin";
import { $setBlocksType as Cb, createDOMRange as vb, createRectsFromDOMRange as Sb } from "@lexical/selection";
import { autoUpdate as Mb, computePosition as Eb, shift as Ab, flip as Pb } from "@floating-ui/dom";
import { $generateNodesFromDOM as Nb } from "@lexical/html";
import { AutoFocusPlugin as Ob } from "@lexical/react/LexicalAutoFocusPlugin";
import { ClearEditorPlugin as wb } from "@lexical/react/LexicalClearEditorPlugin";
import { useCollaborationContext as op, LexicalCollaboration as qb } from "@lexical/react/LexicalCollaborationContext";
import { OnChangePlugin as Rb } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin as $b } from "@lexical/react/LexicalPlainTextPlugin";
import { $rootTextContent as Lb, $isRootTextContentEmpty as Ib } from "@lexical/text";
import { TOGGLE_CONNECT_COMMAND as Db } from "@lexical/yjs";
import { Array as Mu, Map as Eu, YArrayEvent as Ub } from "yjs";
const sa = (e) => Ve(vo(e)), Fb = {
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
function ap(e) {
  return Fb[e];
}
const R = " ", Js = "​", zt = R, Uc = `${R}|`, Gt = "p", rs = "+", cp = "-", Ys = "chapter", La = "verse", Au = "invalid", zb = "text-spacing", Kb = "formatted-font", Bb = "marker-", lp = "external-usj-mutation", up = "selection-change", Wr = "cursor-change", Ia = "annotation-change", ns = "delta-change", dp = "marker-settle", jb = [
  lp,
  up,
  Wr,
  Ia,
  ns
], Tn = "zmsc-s", ti = "zmsc-e", Vb = [Tn, ti], Wb = [
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
], fp = 1, Fc = [
  "type",
  "marker",
  "sid",
  "eid",
  "content"
], Hb = Fc.filter((e) => e !== "sid" && e !== "eid");
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
    return hp().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Wb.includes(t) || t.startsWith("z") || (r?.includes(t) ?? !1));
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
      version: fp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function pp(e) {
  return Vb.includes(e);
}
function hp(e, t, r, n, i) {
  return Ve(new Yt(e, t, r, n, void 0, i));
}
function He(e) {
  return e instanceof Yt;
}
const zc = "f", Gb = [
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
const Jb = [
  "type",
  "marker",
  "caller",
  "category",
  "content"
], gp = 1;
class Ae extends er {
  __marker;
  __caller;
  __isCollapsed;
  __category;
  __unknownAttributes;
  constructor(t = zc, r, n = !0, i, s, o) {
    super(o), this.__marker = t, this.__caller = r ?? (Vi(t) === "crossref" ? cp : rs), this.__isCollapsed = n, this.__category = i, this.__unknownAttributes = s;
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
      span: (t) => Xb(t) ? {
        conversion: Yb,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return Kc().updateFromJSON(t);
  }
  static isValidMarker(t, r) {
    return t !== void 0 && (Gb.includes(t) || (r?.includes(t) ?? !1));
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
      version: gp
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
function Yb(e) {
  const t = e.getAttribute("data-marker") ?? "f", r = e.getAttribute("data-caller") ?? "", n = e.classList.contains("collapsed");
  return { node: Kc(t, r, n) };
}
function Kc(e, t, r, n, i) {
  return Ve(new Ae(e, t, r, n, i));
}
function Xb(e) {
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
}, Pu = {
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
  const t = Object.hasOwn(Da, e) ? Da[e] : void 0, r = Object.hasOwn(Pu, e) ? Pu[e] : void 0;
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
const mp = "v", yp = "c", dn = "fig", Nu = "tr", Ua = "esb", bp = "esbe", Ou = "periph", wu = "alt", qu = /^t[hc]([rc]?)(\d+)(?:-(\d+))?$/, Qb = {
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
const Zb = /[\u200D\u2003\u2002\u0020\u00A0\u202F\u2009\u200A\u3000\u200B\u200C\u2060\u200E\u200F]/;
function ek(e) {
  let t = "", r = !1, n = "\0", i = -1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    o.charCodeAt(0) < 32 ? (r || (i = t.length, t += " "), r = !0) : !r && o === Js && s + 1 < e.length && $u(e[s + 1]) || ($u(o) ? (r || (i = t.length, t += o), r = !0) : Zb.test(o) && o === n || (t += o, r = !1, i = -1)), (o === `
` || o === "\r") && i >= 0 && (t = `${t.slice(0, i)}
${t.slice(i + 1)}`), n = o;
  }
  return t;
}
function tk(e) {
  if (e.length === 0)
    return !0;
  const t = e[0];
  return t === "*" ? !1 : !!(t === "\\" || t === "|" || /[\s\u200B]/.test(t));
}
function rk(e, t) {
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
const nk = /^(?:qt[1-5]?|ts)-[se]$/;
function Bc(e) {
  return nk.test(e) || pp(e);
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
function ik(e, t, r) {
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
      a(ek(e.slice(i, g))), i = g;
      continue;
    }
    const c = i, { name: l, next: d } = rk(e, i + 1);
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
    if (l === mp) {
      const { word: p, next: g } = oa(e, i);
      i = g, n.push({ kind: "verse", number: p });
      continue;
    }
    if (l === yp) {
      const { word: p, next: g } = oa(e, i);
      i = g, s = void 0, n.push({ kind: "chapter", number: p });
      continue;
    }
    const f = l.startsWith("+"), h = f ? l.slice(1) : l, b = t(h)?.type;
    if (b === k.Note || b === void 0 && Ae.isValidMarker(l)) {
      const { word: p, next: g } = oa(e, i);
      i = g, s = l, n.push({ kind: "note", marker: l, caller: p || "+" });
      continue;
    }
    if (b === k.Milestone || b === void 0 && Bc(l)) {
      const p = fk(e, c, l, i);
      if (p)
        n.push(p.token), p.ejectedText && o(p.ejectedText), i = p.next;
      else {
        const g = e.indexOf("\\", i), y = g === -1 ? e.length : g;
        o(e.slice(c, y)), i = y;
      }
      continue;
    }
    b === k.Paragraph ? (u(), n.push({ kind: "para", marker: l })) : b === k.Character ? (u(), n.push({ kind: "charOpen", marker: h, isNested: f })) : Xs(h) ? (u(), Xs(h)?.shape === "para" ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: h, isNested: f })) : (u(), !(r || s !== void 0) || l === Ua || l === bp ? n.push({ kind: "para", marker: l }) : n.push({ kind: "charOpen", marker: h, isNested: f }));
  }
  return n;
}
const Lu = {
  ca: { attrName: "altnumber", targetTypes: ["chapter"], shape: "char" },
  cp: { attrName: "pubnumber", targetTypes: ["chapter"], shape: "para" },
  va: { attrName: "altnumber", targetTypes: ["verse"], shape: "char" },
  vp: { attrName: "pubnumber", targetTypes: ["verse"], shape: "char" },
  cat: { attrName: "category", targetTypes: ["note", "sidebar"], shape: "char" }
};
function Xs(e) {
  return Object.hasOwn(Lu, e) ? Lu[e] : void 0;
}
function sk(e) {
  return Xs(e) !== void 0;
}
const ok = /([-\w]+)\s*=\s*"(.*?)"/g, ak = /[\s\u200B]*[\n\r][\s\u200B]*/g, kp = {
  w: "lemma",
  rb: "gloss",
  xt: "link-href",
  jmp: "link-href"
};
function Ao(e) {
  return kp[e];
}
const ck = /* @__PURE__ */ new Set(["type", "marker", "content"]);
function lk(e, t) {
  let r = 0;
  for (const n of t) {
    const i = n.index;
    if (i === void 0 || e.slice(r, i).trim() !== "")
      return !1;
    r = i + n[0].length;
  }
  return e.slice(r).trim() === "";
}
function is(e, t, r = kp[t]) {
  const n = e.replace(ak, " "), i = /* @__PURE__ */ Object.create(null), s = [...n.matchAll(ok)];
  if (s.length > 0) {
    if (!lk(n, s) || s.some((o) => o[2] === ""))
      return;
    for (const [, o, a] of s)
      ck.has(o) || (i[o] = a);
    return Object.keys(i).length > 0 ? i : void 0;
  }
  if (n.trim() && r)
    return { [r]: n };
}
function Po(e) {
  return e.endsWith("-e") ? "eid" : e.startsWith("qt") ? "who" : "sid";
}
function uk(e) {
  const t = Zr(e)[0], r = typeof t == "object" && "content" in t ? t.content : void 0;
  return r ? r.some((n, i) => typeof n != "object" || n.type !== "ms" || typeof r[i + 1] != "string" ? !1 : r.slice(i + 2).some((s) => typeof s != "string" && s.type === "unmatched" && s.marker === "*")) : !1;
}
function dk(e, t, r) {
  let n = t;
  for (; n < e.length && /[\s\u00A0\u200B]/.test(e[n]); )
    n++;
  if (e[n] !== "|")
    return;
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = is(e.slice(n + 1, i), r, Po(r));
  if (s)
    return { attributes: s, next: i + 2 };
}
function fk(e, t, r, n) {
  const i = e.indexOf("\\", n);
  if (i === -1 || e.slice(i, i + 2) !== "\\*")
    return;
  const s = e.slice(n, i), o = s.indexOf("|");
  let a;
  if (o >= 0 && (a = is(s.slice(o + 1), r, Po(r)), !a && s.slice(o + 1).trim() !== "")) {
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
  const l = dk(e, i + 2, r);
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
function Ir(e) {
  return e.content || (e.content = []), e.content;
}
function Zr(e, t) {
  const r = [], n = t?.isNoteContext ?? !1;
  let i, s;
  const o = [];
  let a = 0, c, l, d, u;
  const f = () => d ? Ir(d) : u ? Ir(u) : r;
  let h = !1;
  const b = () => {
    if (s)
      return o.length > a ? Ir(o[o.length - 1].object) : Ir(s);
    if (o.length > 0)
      return Ir(o[o.length - 1].object);
    if (!i) {
      if (h && !n)
        return f();
      i = { type: "para", marker: Gt, content: [] }, f().push(i);
    }
    return Ir(i);
  }, p = (re) => {
    const N = b();
    typeof re == "string" && typeof N[N.length - 1] == "string" ? N[N.length - 1] = N[N.length - 1] + re : N.push(re);
  }, g = (re) => {
    for (let N = re; N < o.length; N += 1) {
      const G = o[N].object;
      G.closed = "false";
    }
  }, y = () => {
    g(0), o.length = 0;
  }, x = (re) => {
    s && (o.length > a && (g(a), o.length = a), a = 0, re || (s.closed = "false"), s = void 0);
  }, v = () => {
    c = void 0, l = void 0;
  }, M = (re, N, G) => {
    y();
    const [, ue, Ee, Z] = G, Se = {
      type: "table:cell",
      marker: Z ? N.slice(0, N.indexOf("-")) : N,
      align: Qb[ue],
      content: []
    };
    Z && (Se.colspan = String(Number(Z) + 1 - Number(Ee))), Ir(re).push(Se), i = Se;
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
    _.value && (re.content = [ar(_.value)]), b().push(re), o.push({ object: re }), _ = void 0;
  }, Q = (re, N) => {
    h = !1, v(), y(), x(!1), i = { type: "para", marker: re, content: [] }, N && (i.content = [ar(N)]), f().push(i);
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
    const G = N.indexOf("|"), ue = G >= 0 ? is(N.slice(G + 1), Ou) : void 0, Ee = G >= 0 ? N.slice(0, G) : N, Z = G >= 0 && (!ue || !!Ee && !!ue[wu]), Se = Z ? void 0 : ue, yr = Z ? N : Ee, Rt = {
      type: "periph",
      ...yr ? { [wu]: ar(yr) } : {},
      ...Se
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
        Le.value && (re.content = [ar(Le.value)]), b().push(re), o.push({ object: re });
      }
      Le = void 0;
    }
  }, mr = ik(e, t?.getMarker ?? ur, n);
  for (let re = 0; re < mr.length; re++) {
    const N = mr[re];
    if (_) {
      if (N.kind === "text") {
        _.value += N.text;
        continue;
      }
      if (_.shape === "char" && N.kind === "end" && N.marker.replace(/^\+/, "") === _.marker) {
        if (_.value.trim() === "") {
          b().push({ type: "char", marker: _.marker, content: [] }), _ = void 0, W();
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
          }, Se = Le.value.slice(0, G);
          Se && (Z.content = [ar(Se)]), p(Z), Le = void 0;
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
        const G = N.kind === "para" || !N.isNested ? Xs(N.marker) : void 0;
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
      y(), Le = { shape: N.kind === "charOpen" ? "char" : "para", value: "" };
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
        if (G && N.marker === Nu) {
          y(), c || (c = { type: "table", content: [] }, f().push(c)), l = { type: "table:row", marker: Nu, content: [] }, Ir(c).push(l), i = l, h = !1;
          break;
        }
        if (G && l) {
          const ue = qu.exec(N.marker);
          if (ue && Ru(ue)) {
            M(l, N.marker, ue);
            break;
          }
        }
        if (v(), !n && N.marker === Ua) {
          y(), x(!1), A(!1);
          const ue = {
            type: "sidebar",
            marker: Ua,
            content: []
          };
          f().push(ue), d = ue, i = void 0, B = d, h = !1;
          break;
        }
        if (N.marker === bp && d) {
          y(), x(!1), A(!0), i = void 0;
          break;
        }
        if (!n && N.marker === Ou) {
          y(), x(!1), A(!1), F(), be = { value: "" }, i = void 0, h = !1;
          break;
        }
        Q(N.marker);
        break;
      }
      case "verse": {
        x(!1);
        const G = { type: "verse", marker: mp, number: N.number };
        p(G), B = G;
        break;
      }
      case "chapter": {
        y(), x(!1), v(), A(!1), F(), i = void 0;
        const G = {
          type: "chapter",
          marker: yp,
          number: N.number
        };
        r.push(G), B = G, h = !0;
        break;
      }
      case "note": {
        x(!1);
        const G = b();
        s = { type: "note", marker: N.marker, caller: N.caller, content: [] }, a = o.length, G.push(s), B = s;
        break;
      }
      case "charOpen": {
        if (!s && !n && l && !N.isNested) {
          const Ee = qu.exec(N.marker);
          if (Ee && Ru(Ee)) {
            M(l, N.marker, Ee);
            break;
          }
        }
        if (!N.isNested) {
          const Ee = s ? a : 0;
          g(Ee), o.length = Ee;
        }
        const G = b(), ue = { type: "char", marker: N.marker, content: [] };
        G.push(ue), o.push({ object: ue });
        break;
      }
      case "end": {
        const G = N.marker.replace(/^\+/, ""), ue = s ? a : 0, Ee = o.findLastIndex((Z, Se) => Se >= ue && Z.object.marker === G);
        Ee >= 0 ? (pk(o[Ee].object), g(Ee + 1), o.length = Ee) : s && s.marker === G ? x(!0) : (g(ue), o.length = ue, p({ type: "unmatched", marker: `${N.marker}*` }));
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
  y(), x(!1), A(!1);
  const Et = (re) => {
    for (const N of re)
      typeof N != "string" && N.content && (Et(N.content), N.content.length === 0 && delete N.content);
  };
  return Et(r), r;
}
function pk(e) {
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
const xn = So("cid", {
  parse: (e) => typeof e == "string" ? e : void 0
}), Hr = So("segment", {
  parse: (e) => typeof e == "string" ? e : void 0
}), oe = So("textType", {
  parse: (e) => typeof e == "string" ? e : void 0
}), pr = "marker-trailing-space", Tp = 1, hk = "marker", jc = So("isGutterMarker", {
  parse: (e) => e === !0
});
class Or extends xs {
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
      span: (t) => bk(t) ? {
        conversion: gk,
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
      version: Tp
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function gk(e) {
  const t = e.getAttribute("data-text-type") ?? "", r = e.textContent ?? "";
  return { node: Sr(t, r) };
}
function Sr(e, t) {
  return Ve(new Or(e, t));
}
function mk(e) {
  return xt(Sr(hk, e), jc, !0);
}
function yk(e) {
  return Xt(e) && ne(e, jc);
}
function bk(e) {
  return e?.tagName === "span";
}
function Xt(e) {
  return e instanceof Or;
}
function xp(e) {
  return e?.type === Or.getType();
}
const Br = "internal-comment", kk = [Br], _p = Object.freeze({}), Fa = Object.freeze({}), za = Object.freeze({}), Ka = Object.freeze({}), Ba = Object.freeze({}), Tk = 1, Wn = /* @__PURE__ */ new Map(), Li = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map();
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
  constructor(t = _p, r, n, i, s, o) {
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
    return kk.includes(t);
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
      version: Tk
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
      for (const b of o)
        h.has(b) || ia(r, fn("annotationId", b));
      for (const b of a)
        f.has(b) || Vn(r, fn("annotationId", b));
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
    return i.hasNoIDsForEveryType() && i.getParent() !== null && Qs(i), i;
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
    return Ce(t) ? Li.get(t.getKey()) ?? {} : {};
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
    s.hasNoIDsForEveryType() && s.getParent() !== null && Qs(s);
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
    r.__suppressOnRemoveCallbacks ? r.__suppressOnRemoveCallbacks = void 0 : r.dispatchOnRemoveForTypedIDs(n, "destroyed"), Wn.delete(r.getKey()), Li.delete(r.getKey()), Hn.delete(r.getKey()), Gn.delete(r.getKey()), r.__typedOnClicks = void 0, r.__typedOnRemoves = void 0, r.__typedOnMouseEnters = void 0, r.__typedOnMouseLeaves = void 0, super.remove.call(r, t);
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
    const i = Dr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnClicks = {
        ...this.__typedOnClicks,
        [t]: i
      };
    else {
      const o = Dr(this.__typedOnClicks, t);
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
      const t = Li.get(this.getKey());
      this.__typedOnRemoves = t ?? {};
    }
    return this.__typedOnRemoves;
  }
  syncTypedOnRemovesToRegistry() {
    if (!this.__typedOnRemoves || Object.keys(this.__typedOnRemoves).length === 0) {
      Li.delete(this.getKey()), this.__typedOnRemoves && Object.keys(this.__typedOnRemoves).length === 0 && (this.__typedOnRemoves = void 0);
      return;
    }
    Li.set(this.getKey(), this.__typedOnRemoves);
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
    const i = Dr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnRemoves = {
        ...this.__typedOnRemoves,
        [t]: i
      };
    else {
      const o = Dr(this.__typedOnRemoves, t);
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
    const i = Dr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseEnters = {
        ...this.__typedOnMouseEnters,
        [t]: i
      };
    else {
      const o = Dr(this.__typedOnMouseEnters, t);
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
    const i = Dr(n, r);
    if (Object.keys(i).length > 0)
      this.__typedOnMouseLeaves = {
        ...this.__typedOnMouseLeaves,
        [t]: i
      };
    else {
      const o = Dr(this.__typedOnMouseLeaves, t);
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
    const i = xk(t, r);
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
    const r = _k(this.getTypedOnClicks(), t);
    Object.keys(r).length !== 0 && this.setTypedOnClicks(r);
  }
  mergeOnRemovesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Ck(this.getTypedOnRemoves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnRemoves(r);
  }
  mergeOnMouseEntersFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = vk(this.getTypedOnMouseEnters(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseEnters(r);
  }
  mergeOnMouseLeavesFrom(t) {
    if (!t || Object.keys(t).length === 0)
      return;
    const r = Sk(this.getTypedOnMouseLeaves(), t);
    Object.keys(r).length !== 0 && this.setTypedOnMouseLeaves(r);
  }
}
function Ls(e = _p) {
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
function Dr(e, t) {
  const r = {};
  for (const [n, i] of Object.entries(e))
    n !== t && (r[n] = i);
  return r;
}
function Iu(e) {
  const t = {};
  for (const [r, n] of Object.entries(e))
    !n || n.length === 0 || (t[r] = [...n].sort());
  return t;
}
function xk(e, t) {
  const r = [];
  for (const [n, i] of Object.entries(e)) {
    const s = new Set(t[n] ?? []);
    for (const o of i ?? [])
      s.has(o) || r.push([n, o]);
  }
  return r;
}
function Du(e, t) {
  const r = Iu(e), n = Iu(t), i = Object.keys(r).sort(), s = Object.keys(n).sort();
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
function vk(e, t) {
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
function Sk(e, t) {
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
function Uu(e) {
  return `external-${e}`;
}
function ss(e, t, r, n, i) {
  return Ve(new tt(e, t, r, n, i));
}
function Ce(e) {
  return e instanceof tt;
}
function Cp(e) {
  return e?.type === tt.getType();
}
function Qs(e) {
  const t = e.getChildren();
  let r = null;
  for (const n of t)
    r === null ? e.insertBefore(n) : r.insertAfter(n), r = n;
  e.remove();
}
function vp(e, t, r, n, i, s, o) {
  const a = e.getNodes(), c = e.anchor.offset, l = e.focus.offset, d = a.length, u = e.isBackward(), f = u ? l : c, h = u ? c : l;
  let b, p;
  for (let g = 0; g < d; g++) {
    const y = a[g];
    if (L(p) && p.isParentOf(y))
      continue;
    const x = g === 0, v = g === d - 1;
    let M = null;
    if (E(y)) {
      const A = y.getTextContentSize(), F = x ? f : 0, B = v ? h : A;
      if (F === 0 && B === 0)
        continue;
      const j = y.splitText(F, B);
      M = j.length > 1 && (j.length === 3 || x && !v || B === A) ? j[1] : j[0];
    } else {
      if (Ce(y))
        continue;
      L(y) && y.isInline() && (M = y);
    }
    if (M !== null) {
      if (M && M.is(b))
        continue;
      const A = M.getParent();
      (A == null || !A.is(b)) && (p = void 0), b = A, p === void 0 && (p = ss(), p.addID(t, r, n, i, s, o), M.insertBefore(p)), p.append(M);
    } else
      b = void 0, p = void 0;
  }
  t === Br && L(p) && (u ? p.selectStart() : p.selectEnd());
}
function Mk(e, t, r) {
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
const Ek = ["type", "marker", "content"], ja = "unknown", Sp = 1, Ak = /* @__PURE__ */ new Set(["optbreak", "ref"]);
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
      [ja]: (t) => Nk(t) ? {
        conversion: Pk,
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
    return Ak.has(this.getTag());
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
      version: Sp
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
    if (Mo(r) && super.isSelected(r))
      return !0;
    if (r.isCollapsed())
      return !1;
    const n = r.getNodes();
    return this.getChildren().some((i) => n.some((s) => s.is(i)));
  }
}
function Pk(e) {
  const t = e.getAttribute("data-tag") ?? "", r = e.getAttribute("data-marker") ?? "";
  return { node: Vc(t, r) };
}
function Vc(e, t, r) {
  return Ve(new $n(e, t, r));
}
function Nk(e) {
  return e?.tagName.toLowerCase() === ja;
}
function Fe(e) {
  return e instanceof $n;
}
const Mp = 1, Ok = "attribute-run";
function da(e) {
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
    return Ep(t.runKind).updateFromJSON(t);
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
    t.classList.add(Ok);
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
      version: Mp
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
function Ep(e) {
  return Ve(new wr(e));
}
function Ue(e) {
  return e instanceof wr;
}
const os = "id", Ap = 1, wk = [
  "type",
  "marker",
  "code",
  "content"
];
class Kt extends er {
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
    return new Kt(r, n, i);
  }
  static importJSON(t) {
    const { code: r } = t;
    return Pp(r).updateFromJSON(t);
  }
  static isValidBookCode(t) {
    return $y(t);
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
      version: Ap
    };
  }
}
function Pp(e, t) {
  return Ve(new Kt(e, t));
}
function gt(e) {
  return e instanceof Kt;
}
function Np(e) {
  return e?.type === Kt.getType();
}
const Zs = "c", Op = 1, qk = [
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
    super(o), this.__marker = Zs, this.__number = t, this.__sid = r, this.__altnumber = n, this.__pubnumber = i, this.__unknownAttributes = s;
  }
  static getType() {
    return "chapter";
  }
  static clone(t) {
    const { __number: r, __sid: n, __altnumber: i, __pubnumber: s, __unknownAttributes: o, __key: a } = t;
    return new qt(r, n, i, s, o, a);
  }
  static importJSON(t) {
    return wp().updateFromJSON(t);
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
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ys, `usfm_${this.__marker}`), t.setAttribute("data-number", this.__number), t;
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
      version: Op
    };
  }
}
function wp(e, t, r, n, i) {
  return Ve(new qt(e, t, r, n, i));
}
function Me(e) {
  return e instanceof qt;
}
function Rk(e) {
  return e?.type === qt.getType();
}
const qp = [
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
], Rp = [
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
], $k = [
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
  ...qp,
  ...Rp
], $p = 1, Lk = ["type", "marker", "content"];
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
    return t !== void 0 && ($k.includes(t) || (r?.includes(t) ?? !1));
  }
  static isValidFootnoteMarker(t) {
    return t !== void 0 && qp.includes(t);
  }
  static isValidCrossReferenceMarker(t) {
    return t !== void 0 && Rp.includes(t);
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
      span: (t) => Dk(t) ? {
        conversion: Ik,
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
    return Fu(r, this.__marker, t), r.classList.add(this.__type), r;
  }
  updateDOM(t, r, n) {
    return t.__marker !== this.__marker && (r.classList.remove(`usfm_${t.__marker}`), Fu(r, this.__marker, n)), !1;
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
      version: $p
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
function Fu(e, t, r) {
  e.setAttribute("data-marker", t), r.theme?.showCharMarkerTitles !== !1 ? e.setAttribute("title", t) : e.removeAttribute("title"), e.classList.add(`usfm_${t}`);
}
function Ik(e) {
  const t = e.getAttribute("data-marker") ?? "f";
  return { node: Mr(t) };
}
function Mr(e, t) {
  return Ve(new ye(e, t));
}
function Dk(e) {
  if (!e)
    return !1;
  const t = e.getAttribute("data-marker") ?? "";
  return ye.isValidMarker(t) && e.classList.contains(ye.getType());
}
function I(e) {
  return e instanceof ye;
}
function Uk(e) {
  return e?.type === ye.getType();
}
const Lp = 1, Fk = "c", Ip = "span";
class hr extends xs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Fk, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => Dp(t) ? {
        conversion: zk,
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
    const t = document.createElement(Ip);
    return t.setAttribute("data-marker", this.__marker), t.classList.add(Ys, `usfm_${this.__marker}`), this.__showMarker && t.classList.add("marker"), t.setAttribute("data-number", this.__number), t;
  }
  updateDOM() {
    return !1;
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    return r && On(r) && (r.setAttribute("data-marker", this.getMarker()), r.classList.add(Ys, `usfm_${this.getMarker()}`), r.setAttribute("data-number", this.getNumber())), { element: r };
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
      version: Lp
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
function zk(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: Wc(t) };
}
function Wc(e, t, r, n, i, s) {
  return Ve(new hr(e, t, r, n, i, s));
}
function Dp(e) {
  return e ? e.classList.contains(Ys) && e.tagName.toLowerCase() === Ip : !1;
}
function Cs(e) {
  return e instanceof hr;
}
function Kk(e) {
  return e?.type === hr.getType();
}
const Up = 1;
class Gr extends qc {
  static getType() {
    return "implied-para";
  }
  static clone(t) {
    return new Gr(t.__key);
  }
  static importJSON(t) {
    return Ut().updateFromJSON(t);
  }
  getMarker() {
    return Gt;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: Up
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = Ut();
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Ut() {
  return Ve(new Gr());
}
function fr(e) {
  return e instanceof Gr;
}
function No(e) {
  return e?.type === Gr.getType();
}
const Bk = [
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
  Gt,
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
], Fp = 1, jk = ["type", "marker", "content"];
class rt extends qc {
  __marker;
  __unknownAttributes;
  constructor(t = Gt, r, n) {
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
    return t !== void 0 && (Bk.includes(t) || (r?.includes(t) ?? !1));
  }
  static importDOM() {
    return {
      p: () => ({
        conversion: Vk,
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
      version: Fp
    };
  }
  // Mutation
  insertNewAfter(t, r) {
    const n = ai(this.getMarker());
    return n.setTextFormat(t.format), n.setTextStyle(t.style), n.setDirection(this.getDirection()), n.setFormat(this.getFormatType()), n.setStyle(this.getTextStyle()), this.insertAfter(n, r), n;
  }
}
function Vk(e) {
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
const eo = "v", zp = 1, Wk = [
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
    super(r ?? t, a), this.__marker = eo, this.__number = t, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
  }
  static getType() {
    return "verse";
  }
  static clone(t) {
    const { __number: r, __text: n, __sid: i, __altnumber: s, __pubnumber: o, __unknownAttributes: a, __key: c } = t;
    return new pt(r, n, i, s, o, a, c);
  }
  static importJSON(t) {
    return Kp().updateFromJSON(t);
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
      version: zp
    };
  }
}
function Kp(e, t, r, n, i, s) {
  return Ve(new pt(e, t, r, n, i, s));
}
function we(e) {
  return e instanceof pt;
}
function Bp(e) {
  return e?.type === pt.getType();
}
const Hk = "​", ci = Hk;
var zu;
(function(e) {
  e.LEFT = "left", e.RIGHT = "right";
})(zu || (zu = {}));
var Ku;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Ku || (Ku = {}));
function Gk() {
  return he(ci);
}
function Jk(e) {
  const t = e.getTextContent();
  e.setTextContent(t.replaceAll(ci, ""));
}
function vs(e) {
  return e.length > 0 && e.includes(ci) && e.replaceAll(ci, "") === "";
}
function Gc(e) {
  return E(e) && vs(e.getTextContent());
}
function jp(e) {
  return Rk(e) || Kk(e);
}
function Ge(e) {
  return Me(e) || Cs(e);
}
function Vp(e, t) {
  return e.find((r) => Ge(r) && r.getNumber() === t.toString());
}
function Yk(e, t = !1) {
  return e.find((r, n) => (!t || n > 0) && Ge(r));
}
function Bu(e) {
  let t = e;
  for (; t && t.getParent() !== null; ) {
    const r = t.getPreviousSibling();
    if (r)
      return r;
    t = t.getParent();
  }
}
function Wp(e) {
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
function Xk(e) {
  return gt(e) || Me(e) || I(e) || Cs(e) || fr(e) || He(e) || ce(e) || K(e) || we(e) || Fe(e);
}
function Hp(e) {
  if (e.anchor.type === "element") {
    const r = e.anchor.getNode(), n = e.anchor.offset;
    if (n < r.getChildrenSize())
      return r.getChildAtIndex(n);
  }
  const t = e.anchor.getNode();
  return t.getNextSibling() ?? t.getParent()?.getNextSibling() ?? null;
}
function Qk(e) {
  const t = e.anchor.offset;
  if (e.anchor.type === "element" && t > 0)
    return e.anchor.getNode().getChildAtIndex(t - 1);
  const r = e.anchor.getNode();
  return r.getPreviousSibling() ?? r.getParent()?.getPreviousSibling() ?? null;
}
function Nt(e) {
  return ve(e) || gt(e);
}
function ve(e) {
  return ce(e) || fr(e);
}
function Zk(e) {
  return Hc(e) || No(e);
}
function to(e, t) {
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
function eT(e, t) {
  const r = L(e) ? e : e.getParent(), n = L(t) ? t : t.getParent(), i = r && n ? Vy(r, n) : void 0;
  return i ? i.commonAncestor : void 0;
}
function tT(e) {
  const t = e.getStartEndPoints();
  if (!t)
    return;
  const [r, n] = t, i = e.isBackward() ? r : n;
  e.focus.set(i.key, i.offset, i.type), e.anchor.set(i.key, i.offset, i.type);
}
function li(e) {
  return e?.type === Be.getType();
}
function rT(e, t) {
  if (!t)
    return;
  const r = e.findIndex((n) => n === t);
  r && (e.length = r);
}
function nT(e, t) {
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
function Gp(e, t, r) {
  const n = qe(e);
  if (t?.startsWith(n)) {
    const i = t.slice(n.length).replace(/^[\s ]+/, ""), s = /^([^ \u00A0\\]+)/.exec(i);
    s && (r = s[1]);
  }
  return r;
}
function Ft(e, t) {
  let r = qe(e);
  return t && (r += `${R}${t}`), r += " ", r;
}
function iT(e) {
  const t = e[_s];
  if (t && typeof t == "object" && "textType" in t) {
    const r = t.textType;
    if (typeof r == "string")
      return r;
  }
}
function Jp(e) {
  return Zc(e) || xp(e) && e.textType === "marker" || li(e) && iT(e) === "attribute" ? "" : li(e) && e.text !== R ? e.text : Uk(e) ? e.children.map((t) => Jp(t)).join("") : "";
}
function sT(e) {
  return e.map((r) => Jp(r)).filter((r) => r.length > 0).join(" ").trim();
}
function Ot(e) {
  return " " + e + R;
}
function Jc(e) {
  const t = [];
  for (const r of e) {
    if (!I(r))
      continue;
    const n = Yp(r);
    n !== zt && n.length > 0 && t.push(n);
  }
  return t.join(" ").trim();
}
function Yp(e) {
  return w(e) || qr(e) || E(e) && ne(e, oe) === "attribute" ? "" : E(e) ? e.getTextContent() : L(e) ? e.getChildren().map((t) => Yp(t)).join("") : "";
}
function qr(e) {
  return Xt(e) && e.getTextType() === "marker";
}
function Bt(e) {
  return w(e) || qr(e);
}
function ju(e, t) {
  oT(e, t), e.setMarker(t);
}
function oT(e, t) {
  const r = e.getMarker(), n = qe(r), i = qe(r, !0), s = ot(r), o = ot(r, !0), a = ye.isNoteContentMarker(t);
  e.getChildren().forEach((c) => {
    if (!Bt(c))
      return;
    const l = c.getTextContent(), d = l === n || l === i, u = !d && (l === s || l === o);
    if (!(!d && !u)) {
      if (u && a) {
        c.remove();
        return;
      }
      if (w(c))
        c.setMarker(t);
      else if (qr(c)) {
        const f = l.startsWith(qe("", !0));
        c.setTextContent(d ? qe(t, f) : ot(t, f));
      }
    }
  });
}
function ze(e, t = Ly) {
  const r = { ...e };
  return t.forEach((n) => {
    Reflect.deleteProperty(r, n);
  }), Object.keys(r).length === 0 ? void 0 : r;
}
function Pe(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Xp(e) {
  const t = e instanceof Error ? e.message : String(e);
  return t.includes("$caretFromPoint") && (t.includes("does not inherit from ElementNode") || t.includes("does not inherit from TextNode"));
}
function Yc(e) {
  if (!P(e))
    return Vu(e);
  const t = e.anchor.getNode();
  if (t && (e.anchor.type === "element" && !L(t) || e.anchor.type === "text" && !E(t)))
    return t ?? void 0;
  try {
    return Vu(e) ?? t ?? void 0;
  } catch (n) {
    if (Xp(n))
      return t ?? void 0;
    throw n;
  }
}
function aT(e, t) {
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
function Qp(e) {
  return !!e && e.includes("-");
}
function Zp(e) {
  const t = e.split("-"), r = parseInt(t[0], 10), n = t.length > 1 ? parseInt(t[t.length - 1], 10) : r;
  return { start: r, end: n };
}
function Vu(e) {
  if (!e)
    return;
  const t = e.getNodes();
  if (t.length > 0)
    return e.isBackward() ? t[t.length - 1] : t[0];
}
function Qc(e) {
  if (!e)
    return !1;
  if (wn(e) || w(e) || qr(e) || Ue(e) || Xt(e) && e.getTextType() === "attribute")
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
function Oo() {
  const e = he(R);
  return xt(e, oe, pr), e.setMode("token"), e;
}
function cT(e) {
  const t = e.getTextContent();
  t.startsWith(R) || e.setTextContent(R + t);
}
function Ln(e) {
  return E(e) && ne(e, oe) === pr;
}
function eh(e) {
  const t = e.getFirstChild();
  if (!Bt(t) || t === null || Ln(t.getNextSibling()))
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
function xi(e) {
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
function wo(e) {
  let t = e.getParent();
  for (; t && Ce(t); )
    t = t.getParent();
  return t;
}
function lT(e, t) {
  return xi(e).findIndex((r) => r.type === "element" ? r.node.is(t) : r.segments.some((n) => n.node.is(t)));
}
function uT(e, t) {
  const r = wo(e);
  if (!r)
    return;
  const n = xi(r);
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (s.type !== "text")
      continue;
    const o = s.segments.find((a) => a.node.is(e));
    if (o)
      return { parent: r, index: i, offset: o.start + t };
  }
}
function dT(e, t) {
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
function th(e, t) {
  const r = xi(e), n = e.getChildAtIndex(t);
  if (!n)
    return { type: "index", index: r.length };
  if (Qc(n))
    return th(e, t + 1);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s.type === "element") {
      if (s.node.is(n) || to(s.node, n.getKey()))
        return { type: "index", index: i };
      continue;
    }
    for (const o of s.segments)
      if (o.node.is(n) || to(o.node, n.getKey()))
        return o.start === 0 ? { type: "index", index: i } : { type: "text", index: i, offset: o.start };
  }
  return { type: "index", index: r.length };
}
function fT(e, t) {
  if (t <= 0)
    return 0;
  const r = xi(e);
  if (r.length === 0 || t > r.length)
    return e.getChildrenSize();
  const n = r[t - 1], i = n.type === "element" ? n.node : n.segments[n.segments.length - 1]?.node, s = i ? pT(e, i) : void 0;
  return s ? s.getIndexWithinParent() + 1 : e.getChildrenSize();
}
function pT(e, t) {
  let r = t;
  for (; r; ) {
    const n = r.getParent();
    if (n?.is(e))
      return r;
    r = n;
  }
}
const hT = 1;
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
      version: hT
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
function gT(e) {
  e.setTextContent(gn(e.getMarker(), e.getMarkerSyntax(), e.getNested()));
}
function gn(e, t, r = !1) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : qe(e, r);
}
const mT = /* @__PURE__ */ new Set(["closed"]);
function lr(e, t) {
  const r = Object.entries(e).filter(([n, i]) => i !== void 0 && !mT.has(n));
  return r.length === 0 ? "" : r.length === 1 && r[0][0] === t && r[0][1] !== "" ? `|${r[0][1]}` : `|${r.map(([n, i]) => `${n}="${i}"`).join(" ")}`;
}
function rh(e, t) {
  if (!t || t.length === 0)
    return e;
  const r = {};
  return t.forEach((n) => {
    Object.hasOwn(e, n) && (r[n] = e[n]);
  }), Object.entries(e).forEach(([n, i]) => {
    Object.hasOwn(r, n) || (r[n] = i);
  }), r;
}
function nh(e) {
  const t = Object.keys(e).filter((n) => !Hb.includes(n)), r = [
    ...t.filter((n) => n === "sid"),
    ...t.filter((n) => n === "eid"),
    ...t.filter((n) => n !== "sid" && n !== "eid")
  ];
  return t.every((n, i) => n === r[i]) ? void 0 : t;
}
function ih(e, t, r, n) {
  return rh(
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
function yT(e) {
  const t = e.getUnknownAttributes();
  return !t || !Object.keys(t).some((n) => n !== "closed") ? !1 : Yi(e) === void 0 && sh(e) === void 0;
}
function sh(e) {
  return e.getChildren().find((t) => E(t) && ne(t, oe) === "attribute");
}
function as(e, t) {
  return Ss(e.getNextSibling(), t);
}
const bT = /^[ \u00A0]+$/;
function el(e) {
  if (en(e))
    return !0;
  if (e.getMarkerSyntax() !== "opening")
    return !1;
  const t = qe(e.getMarker(), e.getNested()), r = e.getTextContent();
  return r.startsWith(t) && bT.test(r.slice(t.length));
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
function oh(e) {
  const t = cs(e);
  return t ? Ss(t.getNextSibling(), "cat") : {};
}
function _i(e) {
  const t = e.getFirstChild();
  if (!(!E(t) || w(t)) && ne(t, oe) !== "attribute")
    return t;
}
function tl(e) {
  const t = _i(e);
  return t ? Ss(t.getNextSibling(), "ca") : {};
}
function ah(e) {
  const t = _i(e);
  if (!t)
    return;
  const r = Ss(t.getNextSibling(), "ca");
  return r.wrapper ?? r.closer ?? t;
}
function rl(e) {
  const t = ah(e);
  return t ? Ss(t.getNextSibling(), "cp") : {};
}
function ch(e) {
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
function qo(e) {
  let t, r, n, i, s = e.getNextSibling();
  return Ue(s) && s.getRunKind() === "milestone" && (i = s, s = s.getFirstChild()), w(s) && s.getMarkerSyntax() === "opening" && s.getMarker() === e.getMarker() && // Typed-spacing licensed ({@link $isCanonicalRunOpenerGlyph}): a trailing space typed on the
  // opener is at rest, not byte damage.
  el(s) && (t = s, s = s.getNextSibling()), E(s) && ne(s, oe) === "attribute" && (r = s, s = s.getNextSibling()), w(s) && s.getMarkerSyntax() === "selfClosing" && en(s) && (n = s), { opening: t, attribute: r, closing: n, wrapper: i };
}
function nl(e) {
  return I(wo(e));
}
function Va(e, t) {
  if (e.getMarkerSyntax() === "selfClosing")
    return;
  const r = e.getMarker();
  return r === t.getMarker() ? nl(t) : t.getChildren().some((i) => I(i) && i.getMarker() === r) ? !0 : void 0;
}
function kT(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = Va(t, e);
    r !== void 0 && t.setNested(r);
  });
}
function Ro(e) {
  return E(e) && e.getType() === Be.getType() && ne(e, oe) !== "attribute";
}
function il(e, t) {
  if (e.getMarkerSyntax() !== "opening" || Va(e, t) === void 0)
    return;
  const r = e.getNextSibling();
  if (r !== null)
    return w(r) ? Va(r, t) === !0 ? "spacer" : void 0 : Ro(r) ? r.getTextContent().startsWith(R) ? void 0 : "prefix" : "spacer";
}
function TT(e) {
  if (e.isAttached()) {
    for (const t of e.getChildren())
      if (w(t) && il(t, e) !== void 0)
        return t.getNextSibling()?.getTextContent() ?? "";
  }
}
function lh(e, t) {
  const r = O();
  if (!P(r) || !r.isCollapsed())
    return !1;
  const n = r.anchor.getNode();
  if (n.is(e) || n.is(t))
    return !0;
  const i = e.getNextSibling();
  return i !== null && n.is(i) && r.anchor.offset === 0;
}
function uh(e) {
  e.isAttached() && e.getChildren().forEach((t) => {
    if (!w(t))
      return;
    const r = il(t, e);
    if (r !== void 0 && !lh(t, e))
      if (r === "prefix") {
        const n = t.getNextSibling();
        E(n) && n.setTextContent(R + n.getTextContent());
      } else
        t.insertAfter(he(R));
  });
}
function dh(e) {
  return e.isAttached() ? e.getChildren().some((t) => w(t) && il(t, e) !== void 0 && lh(t, e)) : !1;
}
const xT = "file", _T = "src", CT = "colspan", vT = "category", ST = "alt", MT = "closed", ET = "false";
function AT(e) {
  return e[MT] !== ET;
}
function PT(e) {
  return Object.fromEntries(Object.entries(e).map(([t, r]) => [
    t === xT ? _T : t,
    r
  ]));
}
function fh(e, t) {
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
function ph(e, t, r) {
  const n = r ?? {}, i = AT(n);
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
        opening: `\\${fh(t, n[CT])} `,
        attributes: "",
        closingAttributes: "",
        closing: ""
      };
    case "figure":
      return {
        opening: `\\${t} `,
        attributes: "",
        closingAttributes: lr(PT(n), void 0),
        closing: i ? `\\${t}*` : ""
      };
    case "sidebar": {
      const { [vT]: s, ...o } = n;
      return {
        opening: "\\esb",
        attributes: (s === void 0 ? "" : ` \\cat ${s}\\cat*`) + lr(o, void 0),
        closingAttributes: "",
        closing: i ? "\\esbe" : ""
      };
    }
    case "periph": {
      const { [ST]: s, ...o } = n;
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
const Ct = { wantsRun: !1, valueText: void 0 }, Rr = {};
function fa(e, t) {
  if (t === "va")
    return e;
  const r = as(e, "va");
  return r.wrapper ?? r.closer ?? e;
}
function sl(e) {
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
function $o(e) {
  const { opener: t, closer: r } = e;
  if (!t)
    return !1;
  const n = O();
  if (!P(n) || !n.isCollapsed())
    return !1;
  const i = n.anchor.getNode(), s = i.is(t) && n.anchor.offset === t.getTextContentSize();
  return r ? s || i.is(r) : s;
}
function NT(e) {
  return Ue(e) ? e.getRunKind() === "va" || e.getRunKind() === "vp" : w(e) ? e.getMarker() === "va" || e.getMarker() === "vp" : E(e) && ne(e, oe) === "attribute";
}
function OT(e) {
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
    if (!NT(t))
      return;
  }
}
function Wu(e) {
  return {
    kind: e,
    ownerPredicate: (t) => we(t),
    ownerOf: (t) => {
      if (Ue(t))
        return t.getRunKind() === e ? pa(t) : void 0;
      const r = t.getParent();
      return Ue(r) ? r.getRunKind() === e ? pa(r) : void 0 : OT(t) === e ? pa(t) : void 0;
    },
    expectedPieces: (t) => {
      if (!we(t))
        return Ct;
      const r = e === "va" ? t.getAltnumber() : t.getPubnumber();
      return r === void 0 ? Ct : { wantsRun: !0, valueText: R + r };
    },
    scanPieces: (t) => we(t) ? as(fa(t, e), e) : Rr,
    graceSite: (t, r) => we(t) ? !r.opener && !r.closer ? sl(fa(t, e)) : $o(r) : !1,
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
const wT = {
  kind: "separator",
  // The NBSP a char span shows after its opening glyph. Its "deletion" is a TEXT mutation (an NBSP
  // prefix edit), not node destruction, so it has no owner walk and no destruction pend — its
  // caret-grace path is what settles it, exactly as before joining the registry.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => Ct,
  scanPieces: () => Rr,
  graceSite: (e) => I(e) && dh(e),
  settleScope: "owner",
  deletionPolicy: "retokenize",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, qT = {
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
    const t = lr(e.getUnknownAttributes() ?? {}, Ao(e.getMarker()));
    return t === "" ? Ct : { wantsRun: !0, valueText: t };
  },
  scanPieces: (e) => I(e) ? { value: sh(e) } : Rr,
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
function hh(e) {
  if (w(e))
    return e.getMarker() === "cat";
  if (!E(e) || ne(e, oe) !== "attribute")
    return !1;
  const t = e.getPreviousSibling();
  return w(t) && t.getMarker() === "cat";
}
function RT(e) {
  const t = e.getParent();
  if (!K(t))
    return;
  const r = cs(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!hh(n))
        return;
    }
}
const $T = {
  kind: "cat",
  ownerPredicate: (e) => K(e),
  ownerOf: (e) => {
    if (Ue(e))
      return e.getRunKind() === "cat" && K(e.getParent()) ? e.getParent() ?? void 0 : void 0;
    const t = e.getParent();
    return Ue(t) ? t.getRunKind() === "cat" && K(t.getParent()) ? t.getParent() ?? void 0 : void 0 : hh(e) ? RT(e) : void 0;
  },
  expectedPieces: (e) => {
    if (!K(e) || e.getIsCollapsed() !== !1)
      return Ct;
    const t = e.getCategory();
    return t === void 0 ? Ct : { wantsRun: !0, valueText: R + t };
  },
  scanPieces: (e) => K(e) ? oh(e) : Rr,
  graceSite: (e, t) => {
    if (!K(e))
      return !1;
    if (!t.opener && !t.closer) {
      const r = cs(e);
      return r !== void 0 && sl(r);
    }
    return $o(t);
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
function LT(e) {
  return Ue(e) ? e.getRunKind() === "ca" || e.getRunKind() === "cp" : w(e) ? e.getMarker() === "ca" || e.getMarker() === "cp" : E(e) && ne(e, oe) === "attribute";
}
function IT(e) {
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
function DT(e) {
  const t = e.getParent();
  if (!Me(t))
    return;
  const r = _i(t);
  if (r)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (n.is(r))
        return t;
      if (!LT(n))
        return;
    }
}
function Hu(e) {
  const t = (r) => Me(r) ? e === "ca" ? _i(r) : ah(r) : void 0;
  return {
    kind: e,
    ownerPredicate: (r) => Me(r),
    ownerOf: (r) => {
      if (Ue(r))
        return r.getRunKind() === e && Me(r.getParent()) ? r.getParent() ?? void 0 : void 0;
      const n = r.getParent();
      return Ue(n) ? n.getRunKind() === e && Me(n.getParent()) ? n.getParent() ?? void 0 : void 0 : IT(r) === e ? DT(r) : void 0;
    },
    expectedPieces: (r) => {
      if (!Me(r))
        return Ct;
      const n = e === "ca" ? r.getAltnumber() : r.getPubnumber();
      return n === void 0 ? Ct : { wantsRun: !0, valueText: R + n };
    },
    scanPieces: (r) => Me(r) ? e === "ca" ? tl(r) : rl(r) : Rr,
    graceSite: (r, n) => {
      if (!Me(r))
        return !1;
      if (!n.opener && !n.closer) {
        const i = t(r);
        return i !== void 0 && sl(i);
      }
      return $o(n);
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
function gh(e) {
  if (w(e)) {
    const t = e.getMarkerSyntax();
    return t === "selfClosing" || t === "opening";
  }
  return E(e) && ne(e, oe) === "attribute";
}
function UT(e) {
  for (let t = e.getPreviousSibling(); t; t = t.getPreviousSibling()) {
    if (He(t)) {
      const r = w(e) && e.getMarkerSyntax() === "opening" ? e : void 0;
      return !r || r.getMarker() === t.getMarker() ? t : void 0;
    }
    if (!gh(t))
      return;
  }
}
const FT = {
  kind: "milestone",
  ownerPredicate: (e) => He(e),
  ownerOf: (e) => {
    const t = Ue(e) ? e.getRunKind() === "milestone" ? e : void 0 : Ue(e.getParent()) ? e.getParent() : gh(e) ? e : void 0;
    if (!t || Ue(t) && t.getRunKind() !== "milestone")
      return;
    const r = t.getPreviousSibling();
    return Ue(t) ? He(r) ? r : void 0 : UT(t);
  },
  expectedPieces: (e) => {
    if (!He(e))
      return Ct;
    const t = ih(e.getSid(), e.getEid(), e.getUnknownAttributes(), e.getAttributeOrder()), r = lr(t, Po(e.getMarker()));
    return { wantsRun: !0, valueText: r === "" ? void 0 : R + r };
  },
  scanPieces: (e) => {
    if (!He(e))
      return Rr;
    const { opening: t, attribute: r, closing: n, wrapper: i } = qo(e);
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
    return $o(t);
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
}, zT = ph("optbreak", void 0, void 0).opening, KT = {
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
  expectedPieces: () => ({ wantsRun: !0, valueText: zT }),
  scanPieces: (e) => Fe(e) ? { value: e.getFirstChild() ?? void 0 } : Rr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "remove-owner",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, BT = {
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
  scanPieces: () => Rr,
  graceSite: () => !1,
  settleScope: "owner",
  deletionPolicy: "none",
  byteFormat: { writer: "read-only", glyphs: "none" }
}, jT = {
  kind: "nestedGlyph",
  // The `+` on a nested span's glyphs. Purely tree-derived and rewritten in place by its own sync;
  // there is no state a user edit can leave half-finished, so it owes no pend or deletion duty.
  ownerPredicate: (e) => I(e),
  ownerOf: () => {
  },
  expectedPieces: () => Ct,
  scanPieces: () => Rr,
  graceSite: () => !1,
  settleScope: "none",
  deletionPolicy: "none",
  byteFormat: { writer: "kind-owned", glyphs: "none" }
}, ls = [
  wT,
  qT,
  Wu("va"),
  Wu("vp"),
  $T,
  Hu("ca"),
  Hu("cp"),
  FT,
  KT,
  BT,
  jT
], VT = new Map(ls.map((e) => [e.kind, e]));
function Cn(e) {
  const t = VT.get(e);
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
function mh(e) {
  return vn(e) !== void 0;
}
const ro = "unmatched", yh = 2;
function Xi(e) {
  return `\\${e}`;
}
class $r extends Be {
  __marker;
  constructor(t = "", r) {
    super(Xi(t), r), this.__marker = t, this.__mode = 1;
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
      [ro]: (t) => HT(t) ? {
        conversion: WT,
        priority: 1
      } : null
    };
  }
  static importJSON(t) {
    return ol().updateFromJSON(t);
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
    return r.setAttribute("data-marker", this.__marker), r.classList.add(Au), r.title = Gu(this.__marker), r;
  }
  updateDOM(t, r, n) {
    const i = super.updateDOM(t, r, n);
    return t.__marker !== this.__marker && (r.setAttribute("data-marker", this.__marker), r.title = Gu(this.__marker)), i;
  }
  exportDOM() {
    const t = document.createElement(ro);
    return t.setAttribute("data-marker", this.getMarker()), t.classList.add(Au), t.textContent = this.getTextContent(), { element: t };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      marker: this.getMarker(),
      version: yh
    };
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function bh(e) {
  return e.getTextContent() === Xi(e.getMarker());
}
function Gu(e) {
  return e.endsWith("*") ? "This closing marker has no matching opening marker!" : "This opening marker has no matching closing marker!";
}
function WT(e) {
  const t = e.getAttribute("data-marker") ?? "";
  return { node: ol(t) };
}
function ol(e) {
  return Ve(new $r(e));
}
function HT(e) {
  return e?.tagName.toLowerCase() === ro;
}
function tn(e) {
  return e instanceof $r;
}
const kh = "table", Wa = "immutable-table", Th = 1, GT = ["type", "marker", "content"];
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
    return JT().updateFromJSON(t);
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
      version: Th
    };
  }
  // Shadow root: isolate selection so content doesn't merge across the table boundary.
  isShadowRoot() {
    return !0;
  }
}
function JT(e) {
  return Ve(new In(e));
}
function xh(e) {
  return e instanceof In;
}
function YT(e) {
  return e?.type === Wa;
}
const _h = "table:row", Ju = "immutable-table-row", Ch = 1, Ha = "tr", XT = ["type", "marker", "content"];
class Ci extends er {
  __marker;
  __unknownAttributes;
  constructor(t = Ha, r, n) {
    super(n), this.__marker = t, this.__unknownAttributes = r;
  }
  static getType() {
    return Ju;
  }
  static clone(t) {
    return new Ci(t.__marker, t.__unknownAttributes, t.__key);
  }
  static importJSON(t) {
    return QT().updateFromJSON(t);
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
      type: Ju,
      marker: this.getMarker(),
      ...t !== void 0 && { unknownAttributes: t },
      version: Ch
    };
  }
}
function QT(e, t) {
  return Ve(new Ci(e, t));
}
const vh = "table:cell", Yu = "immutable-table-cell", Sh = 1, Ga = "tc1", ZT = [
  "type",
  "marker",
  "align",
  "colspan",
  "content"
];
function ex(e) {
  return e === "start" || e === "center" || e === "end" ? e : void 0;
}
class vi extends er {
  __marker;
  __align;
  __colspan;
  __unknownAttributes;
  constructor(t = Ga, r, n, i, s) {
    super(s), this.__marker = t, this.__align = r, this.__colspan = n, this.__unknownAttributes = i;
  }
  static getType() {
    return Yu;
  }
  static clone(t) {
    const { __marker: r, __align: n, __colspan: i, __unknownAttributes: s, __key: o } = t;
    return new vi(r, n, i, s, o);
  }
  static importJSON(t) {
    return tx().updateFromJSON(t);
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
    const n = ex(this.__align);
    return n && (r.style.textAlign = n), this.__colspan && r.setAttribute("colspan", this.__colspan), r;
  }
  updateDOM(t) {
    return t.__marker !== this.__marker || t.__align !== this.__align || t.__colspan !== this.__colspan;
  }
  exportJSON() {
    const t = this.getAlign(), r = this.getColspan(), n = this.getUnknownAttributes();
    return {
      ...super.exportJSON(),
      type: Yu,
      marker: this.getMarker(),
      ...t !== void 0 && { align: t },
      ...r !== void 0 && { colspan: r },
      ...n !== void 0 && { unknownAttributes: n },
      version: Sh
    };
  }
}
function tx(e, t, r, n) {
  return Ve(new vi(e, t, r, n));
}
function Lo(e, t) {
  const r = e.getChildAtIndex(t);
  return E(r) ? r : void 0;
}
function Zt(e, t) {
  const r = Lo(e, t);
  r ? r.select(0, 0) : e.select(t, t);
}
function us(e) {
  return e.getUnknownAttributes()?.closed !== "false";
}
function rx(e) {
  return e.getChildren().some((t) => w(t) && t.getMarkerSyntax() === "closing");
}
function nx(e) {
  return us(e) ? void 0 : { closed: "false" };
}
function ix(e, t, r, n) {
  const i = t.getMarker(), s = nl(t), o = rx(t);
  if (n) {
    e.append(lt(i, "opening", s));
    const [a] = r;
    Ro(a) && !a.getTextContent().startsWith(R) && a.setTextContent(R + a.getTextContent());
  }
  e.append(...r), o && e.append(lt(i, "closing", s));
}
function Sn(e) {
  return Ye(e, I) ?? void 0;
}
function al(e) {
  let t = e.getParent();
  for (; I(t); )
    t = t.getParent();
  return t;
}
function Ja(e) {
  const t = Mh(e);
  return e.getChildren().every((r) => w(r) || t && ne(r, oe) === "attribute" || E(r) && r.getTextContent().replaceAll(R, "") === "");
}
function Mh(e) {
  return us(e);
}
function sx(e, t) {
  const r = e.getUnknownAttributes(), n = r ? lr(r, Ao(e.getMarker())) : "";
  n !== "" && t.insertAfter(he(n)), e.remove();
}
function ox(e, t) {
  if (us(e))
    return;
  const r = e.getUnknownAttributes();
  if (r) {
    const n = { ...r };
    delete n.closed, e.setUnknownAttributes(Object.keys(n).length > 0 ? n : void 0);
  }
  t && e.append(lt(e.getMarker(), "closing", nl(e)));
}
function ax(e, t) {
  return I(e) && !us(e) && !us(t);
}
function cx(e, t, r) {
  Ja(e) && e.getChildren().forEach((i) => {
    w(i) || i.remove();
  });
  const [n] = t;
  r && Ro(n) && !n.getTextContent().startsWith(R) && n.setTextContent(R + n.getTextContent()), e.append(...t);
}
function lx(e, t, r) {
  const { renderGlyphs: n, closeImplicitSpans: i = !1 } = r, s = Mh(t), o = [];
  for (let l = e.getNextSibling(); l; ) {
    const d = l.getNextSibling(), u = w(l) && l.getMarkerSyntax() === "closing", f = s && ne(l, oe) === "attribute";
    !u && !f && o.push(l), l = d;
  }
  const a = ax(e, t);
  t.insertAfter(e);
  let c = e;
  if (o.length > 0)
    if (a)
      cx(e, o, n);
    else {
      const l = Mr(t.getMarker(), nx(t));
      ix(l, t, o, n), e.insertAfter(l), Ja(l) ? l.remove() : c = l;
    }
  i && !a && ox(t, n), Ja(t) && sx(t, c);
}
function ui(e, t) {
  let r = e.getParent();
  for (; I(r); )
    lx(e, r, t), r = e.getParent();
}
function cl(e) {
  if (E(e) && !w(e)) {
    const t = e.getTextContent().startsWith(R) ? 1 : 0;
    e.select(t, t);
    return;
  }
  if (L(e)) {
    const t = e.getChildren().find((r) => !w(r));
    if (t) {
      cl(t);
      return;
    }
    e.selectEnd();
  }
}
const ri = /* @__PURE__ */ new WeakMap();
function ux(e, t) {
  return ri.set(e, t), () => {
    ri.get(e) === t && ri.delete(e);
  };
}
function Xu(e) {
  return ri.get(e);
}
function dx(e) {
  return ri.get(ki())?.has(e.getKey()) ?? !1;
}
function fx(e) {
  ri.get(ki())?.add(e.getKey());
}
function px(e) {
  return !!(e.opener || e.value || e.closer || e.wrapper);
}
function Ya(e) {
  return !!(e.opener || e.value || e.closer);
}
function Qu(e) {
  return /^\s/.test(e);
}
function ll(e, t) {
  if (e === t)
    return !1;
  if (e === void 0 || t === void 0 || !Qu(t) || !Qu(e))
    return !0;
  const r = t.trim();
  return r === "" || e.trim() !== r;
}
function Io(e, t, r) {
  return r.wantsRun ? ll(t.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!t.opener || e.byteFormat.closerSyntax !== "none" && !t.closer) ? !0 : e.byteFormat.writer === "wrapper" && t.wrapper === void 0 : px(t);
}
function hx(e, t) {
  if (e.byteFormat.writer !== "wrapper")
    return !1;
  const r = e.expectedPieces(t);
  if (!r.wantsRun)
    return !1;
  const n = e.scanPieces(t);
  return ll(n.value?.getTextContent(), r.valueText) || e.byteFormat.glyphs !== "none" && (!n.opener || e.byteFormat.closerSyntax !== "none" && !n.closer) ? !1 : n.wrapper === void 0;
}
function Eh(e, t) {
  return !Ya(e.scanPieces(t));
}
function Ms(e, t) {
  if (!t.isAttached())
    return !1;
  if (e.byteFormat.writer === "kind-owned")
    return e.graceSite(t, {});
  const r = e.expectedPieces(t), n = e.scanPieces(t);
  if (!Io(e, n, r))
    return !1;
  const i = O();
  if (!P(i) || !i.isCollapsed())
    return !1;
  const s = i.anchor.getNode(), { wrapper: o, value: a } = n;
  return o && (s.is(o) || to(s, o.getKey())) ? !0 : a ? s.is(a) : e.graceSite(t, n);
}
function gx(e, t, r, n) {
  return !r.wantsRun || Ya(n) || Wy(ns) ? !1 : ki().getEditorState().read(() => {
    const i = se(t.getKey());
    return !i || !e.ownerPredicate(i) ? !1 : Ya(e.scanPieces(i));
  });
}
function mx(e) {
  e.opener?.remove(), e.value?.remove(), e.closer?.remove();
}
function Zu(e) {
  const t = he(e);
  return xt(t, oe, "attribute"), t;
}
function yx(e, t, r) {
  if (r.wrapper)
    return r.wrapper;
  const { runKind: n, insertRunAfter: i } = e.byteFormat, s = i?.(t);
  if (!n || !s)
    return;
  const o = Ep(n);
  return s.insertAfter(o), r.opener && o.append(r.opener), r.value && o.append(r.value), r.closer && o.append(r.closer), o;
}
function bx(e, t, r, n) {
  const { writer: i, glyphs: s, glyphMarker: o, closerSyntax: a, insertRunBefore: c } = e.byteFormat;
  if (i === "owner-children") {
    const f = c?.(t);
    if (!f || n.valueText === void 0)
      return;
    E(r.value) ? r.value.setTextContent(n.valueText) : f.insertBefore(Zu(n.valueText));
    return;
  }
  const l = yx(e, t, r);
  if (!l || s === "none" || !o || !a)
    return;
  const d = r.opener ?? (() => {
    const f = lt(o(t), "opening"), h = l.getFirstChild();
    return h ? h.insertBefore(f) : l.append(f), f;
  })();
  let u = r.value;
  n.valueText === void 0 ? (u?.remove(), u = void 0) : E(u) ? ll(u.getTextContent(), n.valueText) && u.setTextContent(n.valueText) : (u = Zu(n.valueText), d.insertAfter(u)), a !== "none" && !r.closer && (u ?? d).insertAfter(lt(a === "selfClosing" ? "" : o(t), a));
}
function ds(e, t) {
  const { writer: r } = e.byteFormat;
  if (r === "kind-owned" || r === "read-only" || !t.isAttached())
    return;
  const n = e.expectedPieces(t), i = e.scanPieces(t);
  if (Io(e, i, n) && !dx(t)) {
    if (gx(e, t, n, i)) {
      fx(t);
      return;
    }
    if (!Ms(e, t)) {
      if (!n.wantsRun) {
        mx(i);
        return;
      }
      bx(e, t, i, n);
    }
  }
}
function kx(e, t, r) {
  ds(e, t), t.isAttached() && Ms(e, t) && r.add(t.getKey());
}
function ul(e) {
  if (!E(e))
    return !1;
  if (w(e) || we(e) || tn(e))
    return !0;
  const t = ne(e, oe);
  return t === "attribute" || t === pr;
}
function dl(e, t) {
  return w(e) ? !(t === e.getTextContentSize() && e.getMarkerSyntax() !== "opening" && en(e) && I(e.getParent())) : !1;
}
function Tx() {
  const e = O();
  return P(e) ? dl(e.focus.getNode(), e.focus.offset) : !1;
}
function Ah(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode();
  return E(t) && ul(t) ? t : void 0;
}
function xx(e) {
  const t = Ah(e);
  if (t)
    return e.offset > 0 && e.offset < t.getTextContentSize() ? t : void 0;
}
function _x(e) {
  const t = Ah(e);
  if (t)
    return e.offset === 0 || e.offset === t.getTextContentSize() ? t : void 0;
}
function ed(e) {
  return { key: e.key, offset: e.offset, type: e.type };
}
function td(e, t) {
  e.set(t.key, t.offset, t.type);
}
function Cx(e, t) {
  let r = _x(e);
  for (; r; ) {
    const n = t === "next" ? r.getNextSibling() : r.getPreviousSibling();
    if (!E(n))
      return;
    if (!ul(n))
      return { node: n, offset: t === "next" ? 0 : n.getTextContentSize() };
    r = n;
  }
}
function rd(e, t) {
  const r = Cx(e, t);
  return r ? (e.set(r.node.getKey(), r.offset, "text"), !0) : !1;
}
function Ph(e) {
  if (e.isCollapsed()) {
    const a = xx(e.anchor);
    if (!a)
      return !1;
    const c = a.getTextContentSize();
    return e.anchor.set(a.getKey(), c, "text"), e.focus.set(a.getKey(), c, "text"), !0;
  }
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = [ed(r), ed(n)], s = rd(r, "next"), o = rd(n, "previous");
  return !s && !o ? !1 : e.isCollapsed() || e.isBackward() !== t ? (td(r, i[0]), td(n, i[1]), !1) : !0;
}
const no = "verse-block", Nh = 1, vx = "verse-block";
class Si extends er {
  /** The verse marker verbatim. Authoritative: the range is derived from it, never stored. */
  __number;
  constructor(t = "", r) {
    super(r), this.__number = t;
  }
  static getType() {
    return no;
  }
  static clone(t) {
    return new Si(t.__number, t.__key);
  }
  static importJSON(t) {
    return Sx().updateFromJSON(t);
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
    return Zp(this.getNumber());
  }
  createDOM() {
    const t = document.createElement("div");
    return t.classList.add(vx), nd(t, this.__number), t;
  }
  updateDOM(t, r) {
    return t.__number !== this.__number && nd(r, this.__number), !1;
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
      type: no,
      number: this.getNumber(),
      version: Nh
    };
  }
  canBeEmpty() {
    return !1;
  }
}
function nd(e, t) {
  const { start: r, end: n } = Zp(t), i = !isNaN(r) && !isNaN(n) && r <= n;
  e.setAttribute("data-verse-number", t), id(e, "data-verse-start", i ? r : NaN), id(e, "data-verse-end", i ? n : NaN);
}
function id(e, t, r) {
  isNaN(r) ? e.removeAttribute(t) : e.setAttribute(t, r.toString());
}
function Sx(e) {
  return Ve(new Si(e));
}
function fs(e) {
  return e instanceof Si;
}
function Mx(e) {
  return e?.type === no;
}
const Ex = [
  Kt,
  hr,
  qt,
  pt,
  ye,
  Ae,
  Yt,
  gr,
  $n,
  Or,
  $r,
  rt,
  Gr,
  In,
  Ci,
  vi,
  // The forward adaptor (usj-editor.adaptor.ts, platform) serializes editable-mode verse/milestone
  // display runs as AttributeRunNode wrappers, and this package's own self-healing sync
  // (displayRunSync.utils.ts's shared $syncDisplayRun driver, parameterized by each kind's own
  // descriptor) constructs one whenever it heals a run forward from a loose or missing shape —
  // every USJ-shaped editor needs the class registered, not only shared-react's (a non-react host,
  // e.g. packages/scribe's NoteEditor, builds its editor straight from usjBaseNodes with no
  // react-specific node list).
  wr,
  {
    replace: qc,
    with: () => Ut(),
    withKlass: Gr
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
}, Ax = {
  paragraph: k.Paragraph,
  character: k.Character,
  note: k.Note,
  milestone: k.Milestone
};
function fl(e) {
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
      type: Ax[n.styleType] ?? k.Unknown,
      description: n.description ?? "",
      hasEndMarker: !!n.endMarker,
      children: ur(r)?.children
    } : void 0;
    return t.set(r, i), i;
  };
}
function sd(e, t, r) {
  const n = {
    type: Cr,
    version: _r,
    content: e
  }, i = t.serializeEditorState(n, r);
  return No(i.root.children[0]) ? i.root.children[0].children[0] : i.root.children[0];
}
const Oh = "v", wh = 1, Px = "verse-selected";
class St extends xs {
  __marker;
  __number;
  __showMarker;
  __sid;
  __altnumber;
  __pubnumber;
  __unknownAttributes;
  constructor(t = "", r = !1, n, i, s, o, a) {
    super(a), this.__marker = Oh, this.__number = t, this.__showMarker = r, this.__sid = n, this.__altnumber = i, this.__pubnumber = s, this.__unknownAttributes = o;
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
      span: (t) => wx(t) ? {
        conversion: Ox,
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
      Js + this.getNumber() + Js
    );
    return S(Nx, { nodeKey: this.getKey(), text: t });
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
      version: wh
    };
  }
  isSelected(t) {
    try {
      return super.isSelected(t);
    } catch (r) {
      if (Xp(r))
        return !1;
      throw r;
    }
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function Nx({ nodeKey: e, text: t }) {
  const [r] = mb(e);
  return S("span", { className: r ? Px : void 0, children: t });
}
function Ox(e) {
  const t = e.getAttribute("data-number") ?? "0";
  return { node: pl(t) };
}
function pl(e, t, r, n, i, s) {
  return Ve(new St(e, t, r, n, i, s));
}
function wx(e) {
  return (e?.getAttribute("data-marker") ?? void 0) === Oh;
}
function Dn(e) {
  return e instanceof St;
}
function qx(e) {
  return e?.type === St.getType();
}
function ge(e) {
  return we(e) || Dn(e);
}
function qh(e) {
  return Bp(e) || qx(e);
}
function Rx(e) {
  return $x(e).find((t) => ce(t));
}
function $x(e) {
  return e.some(fs) ? e.flatMap((t) => fs(t) ? t.getChildren() : t) : e;
}
function Do(e) {
  return L(e) ? fs(e) ? e.getChildren().flatMap(Do) : e.getChildren() : [];
}
function Lx(e, t) {
  return Do(e).find((i) => ge(i) && Xc(t, i.getNumber()));
}
function Ix(e, t) {
  return t === 0 ? Rx(e) : e.map((r) => Lx(r, t)).filter((r) => r)[0];
}
function io(e) {
  return Do(e).find((r) => ge(r));
}
function Rh(e, t) {
  if (!L(e) || t <= 0)
    return;
  const r = e.getChildren();
  for (let n = t - 1; n >= 0; n--) {
    const i = r[n];
    if (ge(i))
      return i;
  }
}
function Dx(e) {
  const t = e.getParent();
  if (t && L(t)) {
    const n = t.getChildren();
    for (let i = e.getIndexWithinParent() + 1; i < n.length; i++) {
      const s = n[i];
      if (ge(s))
        return s;
    }
  }
  let r = t?.getNextSibling();
  for (; r && !Ge(r); ) {
    const n = io(r);
    if (n)
      return n;
    r = r.getNextSibling();
  }
}
function Xa(e) {
  return Do(e).findLast((t) => ge(t));
}
function Ux(e) {
  if (!we(e))
    return 0;
  const t = e.getNumber();
  return e.getTextContent().startsWith(t) ? t.length : 0;
}
function Fx(e, t, r) {
  if (!r)
    return !1;
  const n = t.getParent();
  if (r === n && L(r)) {
    const i = t.getIndexWithinParent();
    return e.anchor.offset <= i;
  }
  return r.getNextSibling() === t;
}
function zx(e, t) {
  const r = t.anchor.getNode();
  if (r !== e)
    return Fx(t, e, r);
  if (E(e)) {
    const n = Ux(e);
    return t.anchor.offset < n;
  }
  return !0;
}
function od(e) {
  const t = e.getNumber(), r = Number.parseInt(t ?? "0", 10);
  return {
    verseNum: r,
    verse: t != null && r.toString() !== t ? t : void 0
  };
}
function Kx(e, t) {
  if (!e)
    return { verseNum: 0 };
  if (!P(t))
    return od(e);
  const r = Number.parseInt(e.getNumber() ?? "0", 10), n = r <= 1 ? 0 : r - 1;
  return zx(e, t) ? { verseNum: n } : od(e);
}
function Bx(e) {
  return Xk(e) || Dn(e);
}
function hl(e) {
  if (E(e)) {
    const t = e.getTextContent();
    !t.endsWith(" ") && !t.endsWith(R) && e.setTextContent(`${t} `);
  }
}
function $h(e) {
  if (E(e)) {
    const t = e.getTextContent();
    t.startsWith(" ") && e.setTextContent(t.trimStart());
  }
}
function Qa(e, t) {
  return e.getEditorState().read(() => !se(t));
}
function jx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = gl(t, e);
  let n;
  if (r) {
    const i = r.getParent();
    if (i && L(i) && L(t) && t === i && e.anchor.offset < r.getIndexWithinParent() && (n = r), !n && i && L(i)) {
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
      let s = ad(i);
      for (; s && !Ge(s); ) {
        const o = io(s);
        if (o) {
          n = o;
          break;
        }
        s = ad(s);
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
      if (s = s.getNextSibling(), s && Ge(s))
        break;
    }
  }
  return n ? (n.selectNext(0, 0), !0) : !1;
}
function Vx(e) {
  if (!e.isCollapsed())
    return !1;
  const t = e.anchor.getNode(), r = gl(t, e);
  let n;
  if (r) {
    const i = r.getParent(), s = t.getTopLevelElement();
    if (i && s && s !== i.getTopLevelElement() && (n = r), !n && i && L(i) && (n = Rh(i, r.getIndexWithinParent())), !n && i) {
      let o = cd(i);
      for (; o && !Ge(o); ) {
        const a = Xa(o);
        if (a) {
          n = a;
          break;
        }
        o = cd(o);
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
function ad(e) {
  const t = e.getNextSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getNextSibling() : null;
}
function cd(e) {
  const t = e.getPreviousSibling();
  if (t)
    return t;
  const r = e.getTopLevelElement();
  return r && r !== e ? r.getPreviousSibling() : null;
}
function gl(e, t) {
  if (L(e) && P(t) && t.anchor.key === e.getKey()) {
    const n = e.getChildAtIndex(t.anchor.offset);
    if (n && ge(n))
      return n;
    const i = Rh(e, t.anchor.offset);
    if (i)
      return i;
    const s = io(e);
    if (s)
      return s;
  }
  return ml(e);
}
function ml(e) {
  if (!e || Ge(e))
    return;
  if (ge(e))
    return e;
  let t = Bu(e);
  for (; t; ) {
    if (Ge(t))
      return;
    if (ge(t))
      return t;
    const r = Xa(t);
    if (r)
      return r;
    t = Bu(t);
  }
}
const Wx = ["style"], Hx = ["style", "code"], so = ["style", "cid"], Gx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Jx = [
  "style",
  "number",
  "sid",
  "altnumber",
  "pubnumber"
], Yx = [
  "style",
  "sid",
  "eid",
  "attributeOrder"
], Xx = ["style", "caller", "category", "contents"], Qx = ["tag", "marker", "contents"], Zx = [
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
function e_(e, t) {
  const r = se(e);
  if (!wt(r))
    return;
  const n = Lh(r, "apply");
  return n === void 0 ? void 0 : [{ retain: n }, ...t, { delete: 1 }];
}
function Lh(e, t = "delta-doc") {
  if (!e)
    return;
  const r = Zf();
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
    if (Nt(l) && (i.includes(l) || i.push(l)), Ih(l, t)) {
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
function ld(e, t, r = "delta-doc") {
  if (e.length < 2 || !n_(e[0]) || !r_(e[1]))
    return;
  const n = e[0].retain;
  return t.read(() => t_(n, r)?.getKey());
}
function t_(e, t = "delta-doc") {
  const r = Zf();
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
    if (Nt(a) && (i.includes(a) || i.push(a)), Ih(a, t)) {
      if (n === e)
        return a;
      s.push({ node: a, position: n }), n += 1;
      continue;
    }
    const l = yl(a, t);
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
  return e ? t ? !to(t.node, e.getKey()) : !0 : !1;
}
function Er(e) {
  return E(e) && !wt(e);
}
function wt(e) {
  return Ge(e) || ge(e) || He(e) || K(e) || Fe(e) || tn(e);
}
function zr(e, t) {
  return t?.insert != null && typeof t.insert == "object" && e in t.insert;
}
function r_(e) {
  if (e.insert == null || typeof e.insert != "object")
    return !1;
  const t = Object.keys(e.insert)[0];
  return e.insert != null && typeof e.insert == "object" && t in e.insert && Zx.includes(t);
}
function n_(e) {
  return e.retain != null && typeof e.retain == "number";
}
function Ih(e, t) {
  return K(e) || Fe(e) ? !0 : t === "apply" && L(e) && wt(e);
}
function Dh(e) {
  const t = e.getParent();
  return Bt(e) && ce(t) && t.getFirstChild() === e;
}
function Za(e) {
  const t = e.getParent();
  return t !== null && Ye(t, Ue) !== null;
}
function i_(e) {
  const t = e.getParent();
  return I(t) && e.getTextContent() === zt && t.getChildrenSize() === 1;
}
function s_(e) {
  const t = e.getParent();
  if (!K(t))
    return !1;
  const r = e.getPreviousSibling();
  return w(r) && r === t.getFirstChild() && e.getTextContent() === Ot(t.getCaller());
}
function o_(e) {
  return !mh(e) && yl(e, "delta-doc") === e.getTextContentSize();
}
function yl(e, t) {
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
    (Gc(e) || Dh(e) || ne(e, oe) === "marker-trailing-space" || // An attribute value keyed by its own state, not by ancestry: a CHAR span's run is a direct
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
    r.startsWith(Uc) || i_(e) || s_(e)) ? 0 : e.getTextContentSize();
  }
  return 0;
}
function ec(e, t) {
  const r = { insert: e.__text }, n = ne(e, Hr);
  if (n && (r.attributes = { segment: n }), t && t.length > 0) {
    const i = Uh(t);
    i && (r.attributes = {
      ...r.attributes,
      char: i
    });
  }
  return r;
}
function ud(e) {
  const t = new ji();
  return e.isEmpty() || e.read(() => {
    const r = Re();
    if (!r || r.isEmpty())
      return;
    const n = r.getChildren();
    if (n.length === 1 && fr(n[0]) && (!n[0].getChildren() || n[0].getChildrenSize() === 0))
      return;
    const i = a_();
    for (const s of i)
      t.push(s);
  }), t;
}
function bl(e, t) {
  const r = [], n = Rn(e, t), i = [], s = [], o = [], a = /* @__PURE__ */ new Set();
  for (let c = 0; c < n.length; c++) {
    const l = n[c].node;
    r.push(...dd(l, c, n, i, s, o, a));
  }
  for (const c of i)
    r.push(...dd(c, n.length, n, i, s, o, a));
  return r;
}
function a_() {
  return bl();
}
function dd(e, t, r, n, i, s, o) {
  if (!e)
    return [];
  const a = [], c = r[t + 1];
  return c_(e, a, n), l_(e, a, i, s, o), u_(e, t, r, i, o, s, a), Ge(e) && a.push(h_(e)), ge(e) && a.push(m_(e)), He(e) && a.push(y_(e)), tn(e) && a.push(b_(e)), f_(e, a, s), d_(e, a, s), __(c, s), a;
}
function c_(e, t, r) {
  if (!e.isInline()) {
    const n = r.pop();
    gt(n) ? t.push(p_(n)) : ce(n) ? t.push(g_(n)) : fr(n) && t.push({ insert: ps });
  }
  Nt(e) && (r.includes(e) || r.push(e));
}
function l_(e, t, r, n, i) {
  if (!E(e) || we(e) || tn(e))
    return;
  const s = e.getParent();
  if (K(s) && s.getFirstChild() === e)
    return;
  const o = Qt(e) !== void 0;
  if (w(e) && (o || Dh(e) || Za(e) || mh(e)) || ne(e, oe) === "marker-trailing-space")
    return;
  let a = e.getTextContent();
  if (vs(a))
    return;
  const c = e.getPreviousSibling();
  if (K(s) && w(c) && c === s.getFirstChild() && a === Ot(s.getCaller()))
    return;
  const l = I(s) ? s : void 0, d = l?.getFirstChild();
  o && l && w(d) && c === d && a.startsWith(R) && (a = a.slice(1));
  const u = a.startsWith(Uc) || ne(e, oe) === "attribute" || Za(e), f = !!l && a === zt && l.getChildrenSize() === 1, h = Uo(e, n), b = h ? r.filter((y) => h.children.includes(y)) : r, p = ec(e, b);
  if (p.insert = a, h) {
    if (!a || a === R || u)
      return;
    h.contentsOps?.push(p);
  } else
    f || u || t.push(p);
  const g = a !== "" && !f && !(u && l);
  if (r.length > 0 && g)
    for (const y of r)
      i.add(y);
}
function u_(e, t, r, n, i, s, o) {
  I(e) && !n.includes(e) && n.push(e);
  const a = r[t + 1];
  for (const c of n.toReversed())
    if (fi(c, a)) {
      if (n.pop(), !i.has(c)) {
        const l = T_(c), d = Uo(c, s);
        d ? d.contentsOps?.push(l) : o.push(l);
      }
      i.delete(c);
    }
}
function d_(e, t, r) {
  if (!K(e))
    return;
  const n = k_(e), i = Uo(e, r), s = {
    node: e,
    children: Rn(e).map((o) => o.node),
    contentsOps: n.insert.note?.contents?.ops
  };
  r.push(s), i?.contentsOps ? i.contentsOps.push(n) : t.push(n);
}
function f_(e, t, r) {
  if (!Fe(e))
    return;
  const n = x_(e), i = Uo(e, r), s = {
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
function p_(e) {
  const t = { style: os, code: e.__code };
  return rn(t, e), { insert: ps, attributes: { book: t } };
}
function h_(e) {
  const t = { style: Zs, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), rn(t, e), { insert: { chapter: t } };
}
function g_(e) {
  const t = { style: e.__marker };
  return rn(t, e), { insert: ps, attributes: { para: t } };
}
function m_(e) {
  const t = { style: eo, number: e.__number };
  return e.__sid && (t.sid = e.__sid), e.__altnumber && (t.altnumber = e.__altnumber), e.__pubnumber && (t.pubnumber = e.__pubnumber), rn(t, e), { insert: { verse: t } };
}
function y_(e) {
  const t = { style: e.__marker };
  return e.__sid && (t.sid = e.__sid), e.__eid && (t.eid = e.__eid), e.__attributeOrder && (t.attributeOrder = e.__attributeOrder), rn(t, e), { insert: { milestone: t } };
}
function b_(e) {
  return { insert: { unmatched: { marker: e.__marker } } };
}
function k_(e) {
  const t = {
    style: e.__marker,
    caller: e.__caller
  };
  e.__category && (t.category = e.__category), rn(t, e), e.getChildrenSize() > 1 && (t.contents = { ops: [] });
  const r = { insert: { note: t } }, n = ne(e, Hr);
  return n && (r.attributes = { segment: n }), r;
}
function T_(e) {
  const t = { insert: "" }, r = Uh([e]);
  return r && (t.attributes = { char: r }), t;
}
function x_(e) {
  const t = { tag: e.getTag() }, r = e.getMarker();
  return r && (t.marker = r), rn(t, e), e.getChildrenSize() > 0 && (t.contents = { ops: [] }), { insert: { unknown: t } };
}
function Uo(e, t) {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.children.includes(e))
      return n;
  }
}
function __(e, t) {
  for (let r = t.length - 1; r >= 0; r--)
    fi(t[r].node, e) && t.splice(r, 1);
}
function Uh(e) {
  if (e.length === 0)
    return;
  const t = e.map(C_);
  return t.length === 1 ? t[0] : t;
}
function C_(e) {
  const t = { style: e.__marker }, r = ne(e, xn);
  return r && (t.cid = r), rn(t, e), t;
}
const Fh = 1;
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
      span: (t) => S_(t) ? {
        conversion: v_,
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
    return r && On(r) && (r.classList.add(this.getType()), r.setAttribute("data-caller", this.getCaller()), r.setAttribute("data-preview-text", this.getPreviewText())), { element: r };
  }
  decorate(t) {
    const r = this.getParent();
    if (!r)
      return null;
    const n = r.getKey(), i = r.getIsCollapsed(), s = this.__key, o = (c) => this.__onClick?.(c, n, i, () => M_(t, n), (l) => E_(t, n, s, l), () => A_(t, n), () => P_(t, n)), a = `${this.__caller}_${this.__previewText}}`.replace(/\s+/g, "").substring(0, 25);
    return S("button", { onClick: o, title: this.__previewText, "data-caller-id": a, children: this.__caller === rs && i ? (
      // Caller is generated by CSS (footnote or cross-reference sequence, per note marker)
      ""
    ) : this.__caller === cp && i ? (
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
      version: Fh
    };
  }
  // Mutation
  isKeyboardSelectable() {
    return !1;
  }
}
function v_(e) {
  const t = e.getAttribute("data-caller") ?? "", r = e.getAttribute("data-preview-text") ?? "";
  return { node: kl(t, r) };
}
function kl(e, t, r) {
  return Ve(new Jt(e, t, r));
}
function S_(e) {
  return e ? e.classList.contains(Jt.getType()) : !1;
}
function mt(e) {
  return e instanceof Jt;
}
function M_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!K(r))
      throw new Error(`getNoteCaller: Note node not found: ${t}`);
    return r.getCaller();
  });
}
function E_(e, t, r, n) {
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
function A_(e, t) {
  return e.getEditorState().read(() => {
    const r = se(t);
    if (!K(r))
      throw new Error(`getNoteOps: Note node not found: ${t}`);
    return bl(r);
  });
}
function P_(e, t) {
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
const N_ = [
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
], O_ = ["†"];
function Fo(e) {
  if (zh())
    return;
  const { start: t } = e;
  let { end: r } = e;
  r ??= t;
  let [n, i] = fd(t), [s, o] = fd(r);
  if (!n || !s || i === void 0 || o === void 0)
    return;
  [n, i] = pd(n, i), [s, o] = pd(s, o);
  const a = Rc();
  return a.anchor = Ra(n.getKey(), i, hd(n)), a.focus = Ra(s.getKey(), o, hd(s)), a;
}
function Tl() {
  if (zh())
    return;
  const e = O();
  if (!e || !P(e))
    return;
  const t = e.isBackward() ? e.focus.getNode() : e.anchor.getNode(), r = e.isBackward() ? e.focus.offset : e.anchor.offset, n = oo(t, r);
  if (e.isCollapsed())
    return { start: n };
  const i = e.isBackward() ? e.anchor.getNode() : e.focus.getNode(), s = e.isBackward() ? e.anchor.offset : e.focus.offset, o = oo(i, s);
  return { start: n, end: o };
}
function fd(e) {
  if (Iy(e)) {
    const t = Ff(e.jsonPath);
    let r = Re();
    for (let n = 0; n < t.length; n++) {
      if (!r || !L(r))
        return [void 0, void 0];
      const i = xi(r)[t[n]];
      if (!i)
        return [void 0, void 0];
      if (i.type === "text")
        return n !== t.length - 1 ? [void 0, void 0] : dT(i, e.offset) ?? [void 0, void 0];
      r = i.node;
    }
    return r && L(r) ? [r, fT(r, e.offset)] : [void 0, void 0];
  }
  if (Dy(e) || Uy(e)) {
    const t = Ii(e.jsonPath);
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
  if (Fy(e)) {
    const t = Ii(e.jsonPath);
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
  if (zy(e)) {
    const t = Ii(e.jsonPath);
    if (!t || !L(t))
      return [void 0, void 0];
    const r = ha(t, "opening");
    if (r)
      return [r, 0];
    const n = t.getFirstChild();
    return n && E(n) ? [n, 0] : [void 0, void 0];
  }
  if (Ky(e)) {
    const t = Ii(e.jsonPath);
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
  if (By(e)) {
    const t = e.jsonPath.match(/\.(\w+)$|^\$\.(\w+)$|\['([^']+)'\]$/), r = t?.[1] ?? t?.[2] ?? t?.[3], n = Ii(e.jsonPath);
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
  throw new Error(`Unsupported UsjDocumentLocation type: ${jy(e)}. All UsjDocumentLocation subtypes should be supported: UsjMarkerLocation, UsjClosingMarkerLocation, UsjTextContentLocation, UsjPropertyValueLocation, UsjAttributeKeyLocation, UsjAttributeMarkerLocation, andUsjClosingAttributeMarkerLocation. Received: ${JSON.stringify(e)}`);
}
function pd(e, t) {
  if (!qr(e))
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
function hd(e) {
  return L(e) ? "element" : "text";
}
function ha(e, t) {
  const r = e.getChildren();
  for (const n of r) {
    if (w(n) && n.getMarkerSyntax() === t || t === "closing" && w(n) && n.getMarkerSyntax() === "selfClosing")
      return n;
    if (qr(n)) {
      const s = n.getTextContent().endsWith("*");
      if (t === "opening" && !s || t === "closing" && s)
        return n;
    }
  }
}
function Ii(e) {
  const t = new RegExp(/^(\$(?:\.content\[\d+\])*)(?:\.|$|\[)/).exec(e), r = t ? t[1] : e, n = Ff(r);
  let i = Re();
  for (const s of n) {
    if (!i || !L(i))
      return;
    const o = xi(i)[s];
    i = o?.type === "element" ? o.node : void 0;
  }
  return i;
}
function oo(e, t) {
  if (w(e)) {
    const r = e.getMarkerSyntax(), n = w_(e), i = n ? ln(pn(n)) : ln(pn(e));
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
      return oo(n, s);
    }
    const i = wo(e);
    if (i?.is(e.getParent())) {
      const s = e.getIndexWithinParent(), o = t >= r ? s + 1 : s;
      return oo(i, o);
    }
  }
  if (L(e)) {
    const r = e.getChildAtIndex(t);
    if (qr(r)) {
      const i = r.getTextContent().endsWith("*"), s = ln(pn(e));
      return i ? { jsonPath: s, closingMarkerOffset: 0 } : { jsonPath: s };
    }
    const n = th(e, t);
    return n.type === "text" ? {
      jsonPath: ln([...pn(e), n.index]),
      offset: n.offset
    } : {
      jsonPath: ln(pn(e)),
      offset: n.index
    };
  }
  if (E(e)) {
    const r = uT(e, t);
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
function w_(e) {
  const t = e.getParent();
  if (!t || !L(t))
    return;
  const r = q_(e);
  return r && !Nt(r) && !E(r) && !Ce(r) ? r : t;
}
function q_(e) {
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
    const n = wo(r);
    if (!n)
      break;
    const i = lT(n, r);
    i >= 0 && t.unshift(i), r = n;
  }
  return t;
}
function zh() {
  for (let e = Re().getFirstChild(); e; e = e.getNextSibling())
    if (fs(e))
      return !0;
  return !1;
}
function Kh(e, t, r, n, i, s, o) {
  if (!Ae.isValidMarker(e))
    throw new Error(`$insertNote: Invalid note marker '${e}'`);
  const a = r ? Fo(r) : O();
  if (!P(a))
    return;
  const c = L_(a, e, n, i, s, o);
  if (c === void 0)
    return;
  const l = t ?? (Vi(e) === "crossref" ? s.defaultCrossRefCaller ?? "-" : s.defaultFootnoteCaller ?? "+"), d = Bh(e, l, c, i, s, void 0, void 0);
  return $_(d, a, i), d;
}
function xl(e) {
  return e !== "expanded";
}
function R_(e) {
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
function $_(e, t, r) {
  const n = xl(r?.noteMode);
  e.setIsCollapsed(n), t.isCollapsed() || tT(t), Ph(t);
  const i = R_(t);
  i ? (i.insertBefore(e), e.selectNext(0, 0)) : t.insertNodes([e]), n || e.getChildren().reverse().find(I)?.selectEnd();
}
function Jn(e, t, r) {
  const n = Mr(e);
  n.setUnknownAttributes({ closed: "false" });
  const i = r?.markerMode === "editable";
  i ? n.append(lt(e)) : r?.markerMode === "visible" && n.append(Sr("marker", qe(e)));
  const s = t === "" ? zt : i ? R + t : t;
  return n.append(he(s)), n;
}
function L_(e, t, r, n, i, s) {
  const o = [], { chapterNum: a, verseNum: c, verse: l } = r ?? {}, d = i.chapterVerseSeparator ?? ":", u = i.verseRangeSeparator ?? "-", f = a !== void 0 && c !== void 0 ? `${a}${d}${(l ?? `${c}`).replace(/-/g, () => u)} ` : void 0;
  switch (t) {
    case "f":
    case "fe":
    case "ef":
    case "efe":
      if (f !== void 0 && o.push(Jn("fr", f, n)), !e.isCollapsed()) {
        const h = md(e);
        h.length > 0 && o.push(Jn("fq", h, n));
      }
      o.push(Jn("ft", "", n));
      break;
    case "x":
    case "ex":
      if (f !== void 0 && o.push(Jn("xo", f, n)), !e.isCollapsed()) {
        const h = md(e);
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
function Bh(e, t, r, n, i, s, o) {
  const a = o === "false", c = a ? !1 : xl(n?.noteMode), l = Kc(e, t, c);
  s && xt(l, Hr, () => s);
  const d = n?.isNoteShellEditable === !1;
  let u, f;
  n?.markerMode === "editable" ? (u = lt(e), d && u.setMode("token"), a || (f = lt(e, "closing"))) : n?.markerMode === "visible" && (u = Sr("marker", qe(e) + " "), a || (f = Sr("marker", ot(e))));
  let h;
  if (u && l.append(u), n?.markerMode === "editable" && !c)
    t === "" ? l.append(...r) : (h = he(Ot(l.__caller)), d && h.setMode("token"), l.append(h, ...r));
  else {
    const b = () => Oo(), p = r.flatMap(D_(b));
    if (t === "")
      l.append(...p);
    else {
      const g = Jc(r);
      let y = () => {
      };
      i?.noteCallerOnClick && (y = i.noteCallerOnClick), h = kl(l.__caller, g, y), l.append(h, b(), ...p);
    }
  }
  return f && l.append(f), l;
}
function gd(e) {
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
function I_(e, t) {
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
function D_(e) {
  return (t) => Xt(t) ? [t] : [t, e()];
}
function U_(e) {
  const t = e.getParent();
  return t !== null && Ye(t, K) !== null;
}
function md(e) {
  if (!P(e))
    return "";
  const t = e.getNodes();
  if (t.length === 0)
    return "";
  const r = t[0], n = t[t.length - 1], i = e.anchor.isBefore(e.focus), [s, o] = $c(e);
  let a = "";
  for (const c of t)
    if (!(K(c) || mt(c) || U_(c)) && !w(c) && !tn(c) && ne(c, oe) !== "attribute") {
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
const _l = [
  Jt,
  St,
  ...Ex
], F_ = [
  Si,
  ..._l
], z_ = Nn((e, t) => {
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
function K_() {
  const [e, t] = de(void 0), [r, n] = de(), i = ee(null), s = me((a, c) => {
    i.current && i.current();
    const l = a.commonAncestorContainer.nodeType === a.commonAncestorContainer.TEXT_NODE ? a : a.commonAncestorContainer;
    i.current = Mb(l, c, () => {
      Eb(l, c, {
        placement: "bottom-start",
        middleware: [Ab(), Pb()]
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
function B_({ isOpen: e, floatingBoxRef: t }) {
  const { coords: r, updatePosition: n, cleanup: i, placement: s } = K_();
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
const j_ = Oy(z_);
function jh({ isOpen: e = !1, children: t }) {
  const r = ee(null), { coords: n, placement: i } = B_({ isOpen: e, floatingBoxRef: r }), s = Ke(() => n ? typeof t == "function" ? t : () => t : () => null, [t, n]);
  return yn(
    S(j_, { ref: r, coords: n, style: n ? void 0 : { display: "none" }, children: s({ isOpen: e, placement: i }) }),
    // Read at render rather than at module scope: this module sits in the import graph of the
    // package's utility entry points, so touching `document` on load throws for any consumer that
    // imports one of them outside a DOM environment (a Node-environment unit test, SSR).
    document.body
  );
}
const Vh = Df(void 0);
function Cl() {
  const e = Uf(Vh);
  if (!e)
    throw new Error("useMenuContext must be used within a MenuProvider");
  return e;
}
function V_(e, t) {
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
function W_({ children: e, menuItems: t, onSelectOption: r, ...n }) {
  const i = V_(t, r);
  return S(Vh.Provider, { value: i, children: S("div", { ...n, children: e }) });
}
const Wh = Nn(({ index: e, children: t, onMouseEnter: r, onClick: n, ...i }, s) => {
  const { state: { activeIndex: o }, setActiveIndex: a, setSelectedIndex: c, select: l } = Cl(), d = me((f) => {
    l(), c(-1), n?.(f);
  }, [n, l, c]), u = me((f) => {
    a(e), r?.(f);
  }, [e, a, r]);
  return S("button", { ref: s, role: "menuitem", ...i, onClick: d, onMouseEnter: u, "aria-selected": e !== void 0 && o === e ? "true" : void 0, tabIndex: -1, children: t });
});
function H_({ children: e, autoIndex: t = !0, ...r }) {
  const n = ee(null), { state: { activeIndex: i, menuItems: s } } = Cl(), o = Ke(() => s ? typeof e == "function" ? e : () => e : () => null, [e, s]), a = Ke(() => {
    const c = o(s);
    return t ? wy.map(c, (l, d) => qy(l) && l.type === Wh && l.props.index === void 0 ? Ry(l, { index: d }) : l) : c;
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
const G_ = (e, t, r) => Bs(e, r).toLowerCase().includes(t.toLowerCase()), yd = (e) => Object.keys(e).find((t) => typeof e[t] == "string") || "", Bs = (e, t) => {
  const r = e[t];
  return typeof r == "string" ? r : String(r);
};
function J_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e, { caseSensitive: a = !1, priorityOrder: c = ["exact", "startsWith", "contains"] } = o || {}, l = a ? t : t.toLowerCase();
  let d, u;
  i ? (u = i, d = r.length > 0 ? yd(r[0]) : "") : (d = n || (r.length > 0 ? yd(r[0]) : ""), u = (b, p) => G_(b, p, d));
  const f = s || d, h = /* @__PURE__ */ new Map();
  return r.filter((b) => {
    try {
      return u(b, t);
    } catch (p) {
      return console.warn("Error filtering item:", b, p), !1;
    }
  }).sort((b, p) => {
    const g = (v) => (h.has(v) || h.set(v, Bs(v, f).toLowerCase()), h.get(v) ?? ""), y = a ? Bs(b, f) : g(b), x = a ? Bs(p, f) : g(p);
    for (const v of c)
      switch (v) {
        case "exact":
          if (y === l && x !== l)
            return -1;
          if (x === l && y !== l)
            return 1;
          break;
        case "startsWith":
          if (y.startsWith(l) && !x.startsWith(l))
            return -1;
          if (x.startsWith(l) && !y.startsWith(l))
            return 1;
          break;
        case "contains": {
          const M = y.indexOf(l), A = x.indexOf(l);
          if (M !== -1 && A === -1)
            return -1;
          if (A !== -1 && M === -1)
            return 1;
          if (M !== -1 && A !== -1)
            return M - A;
          break;
        }
      }
    return y.localeCompare(x);
  });
}
const ga = {
  Root: W_,
  Options: H_,
  Option: Wh
};
function Y_(e) {
  const { query: t, items: r, filterBy: n, filter: i, sortBy: s, sortingOptions: o } = e;
  return Ke(() => J_({
    query: t,
    items: r,
    filterBy: n,
    filter: i,
    sortBy: s,
    sortingOptions: o
  }), [t, r, n, i, s, o]);
}
function X_() {
  const { moveUp: e, moveDown: t, select: r } = Cl();
  return Ke(() => ({
    moveUp: e,
    moveDown: t,
    select: r
  }), [e, t, r]);
}
const Q_ = () => {
  const e = X_(), [t] = ae();
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
function Z_() {
  return Q_(), null;
}
const eC = ["Shift", "Control", "Alt", "Meta"];
function Hh(e) {
  const { options: t, onSelectOption: r, onClose: n, inverse: i, query: s, menuOpenKey: o, onFilterChange: a, passthroughKeys: c } = e, [l] = ae(), d = s !== void 0, [u, f] = de(""), h = d ? s ?? "" : u, b = Y_({ query: h, items: t, filterBy: "name" }), p = (g) => {
    n?.(), r ? r(g) : g.action(l);
  };
  return z(() => {
    a?.(h, b);
  }, [a, h, b]), z(() => l.registerCommand(Nr, (g) => {
    if (d || c?.includes(g.key) || eC.includes(g.key))
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
  }, Oe), [l, d, h, o, n, c]), xe(ga.Root, { className: `autocomplete-menu-container ${i ? "inverse" : ""}`, menuItems: b, onSelectOption: (g) => p(g), children: [!d && S("input", { value: h, type: "text", disabled: !0 }), S(Z_, {}), S(ga.Options, { className: "autocomplete-menu-options", autoIndex: !1, children: (g) => g.map((x, v) => xe(ga.Option, { index: v, children: [S("span", { className: "label", children: x.label ?? x.name }), S("span", { className: "description", children: x.description })] }, x.name)) })] });
}
function tC({ trigger: e, items: t }) {
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
  }), [r]), t && S(jh, { isOpen: n, children: ({ placement: o }) => S(Hh, { options: t, onClose: () => i(!1), inverse: o === "top-start", menuOpenKey: e }) });
}
function rC({ scriptureReference: e, contextMarker: t, getMarkerAction: r }) {
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
function nC(e, t) {
  z(() => {
    if (!e.hasNodes([tt]))
      throw new Error("AnnotationPlugin: TypedMarkNode not registered on editor!");
    const r = /* @__PURE__ */ new Map();
    return je(ep(e, tt, (n) => ss(n.getTypedIDs(), n.getTypedOnClicks(), n.getTypedOnRemoves(), n.getTypedOnMouseEnters(), n.getTypedOnMouseLeaves()), (n, i) => {
      const s = n.getTypedOnClicks(), o = n.getTypedOnRemoves(), a = n.getTypedOnMouseEnters(), c = n.getTypedOnMouseLeaves();
      for (const [l, d] of Object.entries(n.getTypedIDs()))
        d.forEach((u) => {
          const f = s[l]?.[u], h = o[l]?.[u], b = a[l]?.[u], p = c[l]?.[u];
          i.addID(l, u, f, h, b, p);
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
const iC = Nn(function({ logger: t }, r) {
  const [n] = ae(), i = Ke(() => /* @__PURE__ */ new Map(), []);
  nC(n, i);
  const s = (o, a, c) => {
    const l = Array.from(c ?? i.get(Qi(o, a)) ?? []);
    if (l.length !== 0)
      for (const d of l) {
        const u = se(d);
        Ce(u) && (u.deleteID(o, a), u.hasNoIDsForEveryType() && Qs(u));
      }
  };
  return wc(r, () => ({
    setAnnotation(o, a, c, l, d, u, f) {
      if (tt.isReservedType(a))
        throw new Error(`setAnnotation: Can't directly set this reserved annotation type '${a}'. Use the appropriate plugin instead.`);
      n.update(() => {
        const h = Fo(o);
        if (h === void 0) {
          t?.error("Failed to find start or end node of the annotation.");
          return;
        }
        s(a, c), vp(h, a, c, l, d, u, f);
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
}), sC = [];
function oC({ ignoreHistoryMergeTagChange: e = !0, ignoreSelectionChange: t = !1, ignoreTags: r = sC, onChange: n }) {
  const [i] = ae();
  return Ts(() => {
    if (n)
      return i.registerUpdateListener((s) => {
        const { editorState: o, dirtyElements: a, dirtyLeaves: c, prevEditorState: l, tags: d } = s;
        if (t && a.size === 0 && c.size === 0 || // A `MARKER_SETTLE_TAG` commit carries the merge tag only to stay out of the undo
        // stack — its bytes really did change, so it must reach `onChange` like any edit.
        // Without this exemption the cached USJ and the emitted delta both keep showing the
        // pre-settle bytes, and the host saves a document the editor is no longer displaying.
        e && d.has(Kf) && !d.has(dp) || r.some((f) => d.has(f)) || l.isEmpty())
          return;
        const u = aC(i, s);
        u.length !== 0 && n(o, i, d, u);
      });
  }, [i, e, t, r, n]), null;
}
function aC(e, { dirtyLeaves: t, prevEditorState: r }) {
  let n = new ji();
  return e.getEditorState().read(() => {
    const i = t.values().next().value ?? "", s = se(i), o = s !== null && Qt(s) !== void 0;
    if (t.size === 1 && E(s) && !o && o_(s)) {
      const a = Lh(s);
      if (a !== void 0) {
        const c = r.read(() => {
          const u = se(i);
          return new ji([E(u) ? ec(u) : { insert: "" }]);
        }), l = new ji([ec(s)]), d = new ji(a > 0 ? [{ retain: a }] : []);
        n = n.concat(d).concat(c.diff(l));
      }
    } else {
      const a = ud(r), c = ud(e.getEditorState());
      n = a.diff(c);
    }
  }), n.ops;
}
const vl = "formatted", Gh = "unformatted", Jh = "paragraph-structure", Sl = "standard", Yh = "block-verse", cC = {
  [vl]: "Formatted",
  [Gh]: "Unformatted",
  [Jh]: "Paragraph Structure",
  [Sl]: "Standard",
  [Yh]: "Block Verse"
};
function Un(e) {
  return e?.showParaMarkerPrefixes !== !1;
}
let Ml, El;
function lC(e) {
  const t = Al(e);
  if (!t)
    throw new Error(`Invalid view mode: ${e}`);
  Ml = e, El = t;
}
lC(vl);
const EN = () => Ml, pi = () => El;
function Al(e) {
  let t;
  switch (e ?? Ml) {
    case vl:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Gh:
      t = {
        markerMode: "editable",
        noteMode: "expanded",
        hasSpacing: !1,
        isFormattedFont: !1
      };
      break;
    case Jh:
      t = {
        markerMode: "hidden",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0,
        hasGutterParaMarkers: !0,
        hasActiveTextFocusBox: !0
      };
      break;
    case Sl:
      t = {
        markerMode: "editable",
        noteMode: "collapsed",
        hasSpacing: !0,
        isFormattedFont: !0
      };
      break;
    case Yh:
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
function AN(e) {
  if (!e)
    return;
  const t = bd(e);
  return Object.keys(cC).find((r) => Pt(bd(Al(r)), t));
}
const uC = {
  showCharMarkerTitles: !0,
  hasGutterParaMarkers: !1,
  hasActiveTextFocusBox: !1,
  verseLayout: "inline"
};
function bd(e) {
  if (!e)
    return e;
  const t = Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0));
  return { ...uC, ...t };
}
function Es(e) {
  if (!e)
    return !1;
  const { markerMode: t, hasSpacing: r, isFormattedFont: n, hasGutterParaMarkers: i, hasActiveTextFocusBox: s } = e;
  return t === "editable" && r && n && !i && !s;
}
function dC(e) {
  if (e)
    return hs(e) ? St : e.markerMode === "editable" ? pt : St;
}
function hs(e) {
  return e?.verseLayout === "block";
}
function fC(e) {
  const t = [], r = e ?? El;
  return r && (t.push(`${Bb}${r.markerMode}`), r.hasSpacing && t.push(zb), r.isFormattedFont && t.push(Kb)), t;
}
function pC(e, t, r, n) {
  let i = 0;
  e.forEach((s) => {
    if ("retain" in s)
      i += hC(s, i, t, n);
    else if ("delete" in s) {
      if (typeof s.delete != "number" || s.delete <= 0) {
        n?.error(`Invalid delete operation: ${JSON.stringify(s)}`);
        return;
      }
      n?.debug(`Delete: ${s.delete}`), mC(i, s.delete, n);
    } else "insert" in s ? typeof s.insert == "string" ? (n?.debug(`Insert: '${s.insert}'`), i += yC(i, s.insert, s.attributes, t, n)) : typeof s.insert == "object" && s.insert !== null ? (n?.debug(`Insert embed: ${JSON.stringify(s.insert)}`), kC(i, s, t, r, n) ? i += 1 : n?.error(`Failed to process insert embed operation: ${JSON.stringify(s.insert)} at index ${i}. Document may be inconsistent.`)) : n?.error(`Insert of unknown type: ${JSON.stringify(s.insert)}`) : n?.error(`Unknown operation: ${JSON.stringify(s)}`);
  });
}
function hC(e, t, r, n) {
  return typeof e.retain != "number" || e.retain < 0 ? (n?.error(`Invalid retain operation: ${JSON.stringify(e)}`), 0) : (n?.debug(`Retain: ${e.retain}`), e.attributes && (n?.debug(`Retain attributes: ${JSON.stringify(e.attributes)}`), gC(t, e.retain, e.attributes, r, n)), e.retain);
}
function gC(e, t, r, n, i) {
  i?.debug(`Applying attributes for range [${e}, ${e + t - 1}] with attributes: ${JSON.stringify(r)}`);
  let s = t, o = 0, a = -1;
  const c = Re();
  function l(d) {
    if (s <= 0)
      return !0;
    if (Er(d)) {
      const u = d.getTextContentSize();
      if (e < o + u && o < e + t) {
        const f = Math.max(0, e - o), h = u - f, b = Math.min(s, h);
        if (b > 0) {
          let p = d;
          const g = f > 0, y = b < u - f;
          if (g && y) {
            const [, x] = d.splitText(f);
            [p] = x.splitText(b);
          } else g ? [, p] = d.splitText(f) : y && ([p] = d.splitText(b));
          if (Jr(r)) {
            const x = p.getParent();
            if (I(x)) {
              const v = r.char;
              let M;
              Array.isArray(v) ? a >= 0 && a <= v.length - 1 && (M = v[a]) : a === 0 && (M = v);
              const A = M ? _n(M, x) : !1;
              if (A && Array.isArray(v) && v.length > 1) {
                const F = he("");
                p.replace(F);
                const B = typeof r.segment == "string" ? r.segment : void 0, j = Mi(v.slice(1), n, p, B);
                let _ = F;
                for (const U of j)
                  _.insertAfter(U), _ = U;
                F.remove(), $t(r, p);
              } else if (A)
                $t(r, p);
              else {
                p.remove();
                const F = kd(p, r, n, i);
                if (F && F.length > 0) {
                  let B = x;
                  for (const j of F)
                    B.insertAfter(j), B = j;
                }
              }
            } else {
              const v = he("");
              p.replace(v);
              const M = kd(p, r, n, i);
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
          s -= b;
        }
      }
      o += u;
    } else if (wt(d))
      e <= o && o < e + t && s > 0 && (Td(d, r), s -= 1), o += 1;
    else if (I(d)) {
      a += 1;
      let u = !1;
      if (e <= o && o < e + t && s > 0)
        if (Jr(r)) {
          const f = r.char;
          let h;
          if (Array.isArray(f) ? a >= 0 && a <= f.length - 1 && (h = f[a]) : a === 0 && (h = f), h) {
            tc(d, h.style), typeof h.cid == "string" && xt(d, xn, () => h.cid);
            const b = ze(h, so);
            b && Object.keys(b).length > 0 ? d.setUnknownAttributes({
              ...d.getUnknownAttributes() ?? {},
              ...b
            }) : d.setUnknownAttributes(void 0);
          }
        } else (r.char === !1 || r.char === null || AC(r.char)) && (u = !0);
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
          Td(d, r);
        else if (Pl(r)) {
          const h = Zh(r.para, n);
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
function kd(e, t, r, n) {
  const i = typeof t.segment == "string" ? t.segment : void 0, s = Mi(t.char, r, e, i), o = s.find(I);
  if (!o) {
    n?.error(`Failed to create CharNode for text transformation. Style: ${Array.isArray(t.char) ? t.char[0].style : t.char?.style}. Falling back to standard text attributes.`), $t(t, e);
    return;
  }
  const a = {};
  ng.forEach((d) => {
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
function Xh(e, t) {
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
function Td(e, t) {
  for (const r of Object.keys(t)) {
    const n = t[r];
    if (r === "char" && I(e) && Jr(t)) {
      const i = rc(n);
      if (tc(e, i.style), typeof i.cid == "string") {
        const o = i.cid;
        xt(e, xn, () => o);
      }
      const s = ze(i, so);
      s && Object.keys(s).length > 0 && e.setUnknownAttributes({
        ...e.getUnknownAttributes() ?? {},
        ...s
      });
      continue;
    }
    typeof n == "string" && (Ge(e) || ge(e) || He(e) || K(e) || Fe(e) ? e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    }) : (gt(e) || ce(e) || I(e)) && (r === "style" && ce(e) ? Xh(e, n) : r === "style" && I(e) ? tc(e, n) : r === "code" && gt(e) ? e.setCode(n) : e.setUnknownAttributes({
      ...e.getUnknownAttributes() ?? {},
      [r]: n
    })), r === "segment" && xt(e, Hr, () => n));
  }
}
function mC(e, t, r) {
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
          (a.getParent()?.getChildren() ?? []).length > 1 ? (a.remove(), r?.debug(`Removed entire ParaNode that had all its content deleted at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`)) : (a.replace(Ut(), !0), r?.debug(`Replaced last ParaNode with ImpliedParaNode at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`));
        else if (s > 0) {
          const h = a.getNextSibling();
          if (h && ve(h)) {
            let b = i + 1;
            const p = h.getChildren();
            for (const y of p) {
              if (s <= 0)
                break;
              const x = i;
              if (i = b, o(y)) {
                i = x;
                break;
              }
              Er(y) ? b += y.getTextContentSize() : wt(y) && (b += 1), i = x;
            }
            const g = h.getChildren();
            for (const y of g)
              y.remove(), a.append(y);
            h.remove(), r?.debug(`Merged next paragraph into current one after deleting symbolic close at currentIndex: ${i}. Original targetIndex: ${e}, remainingToDelete: ${s}.`);
          } else
            a.replace(Ut(), !0);
        } else ce(a) ? a.replace(Ut(), !0) : a.remove();
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
function yC(e, t, r, n, i) {
  if (t === ps)
    return xd(e, r, n, i);
  if (t.endsWith(ps) && !Pl(r)) {
    const s = t.slice(0, -1);
    let o = 0;
    if (s.length > 0) {
      if (Jr(r))
        throw new Error("Text + LF should not have char attributes");
      o += ao(e, s, r, i);
    }
    return o += xd(e + o, r, n, i), o;
  } else return Jr(r) ? bC(e, t, r, n, i) : ao(e, t, r, i);
}
function bC(e, t, r, n, i) {
  i?.debug(`Attempting to insert CharNode with text "${t}" and attributes ${JSON.stringify(r.char)} at index ${e}`);
  const s = he(t === "" ? zt : t);
  $t(r, s);
  let o;
  {
    let g = function(y) {
      if (Er(y)) {
        const x = y.getTextContentSize();
        if (e >= p && e < p + x) {
          const v = y.getParent();
          return I(v) && (o = v), !0;
        }
        p += x;
      } else if (wt(y))
        p += 1;
      else if (I(y)) {
        const x = y.getChildren();
        for (const v of x)
          if (g(v))
            return !0;
      } else if (L(y)) {
        const x = y.getChildren();
        for (const v of x)
          if (g(v))
            return !0;
        Nt(y) && (p += 1);
      }
      return !1;
    };
    const b = Re();
    let p = 0;
    g(b);
  }
  let a = r.char;
  if (Array.isArray(a)) {
    if (o) {
      const b = a[0];
      b && _n(b, o) ? (a = a.slice(1), a.length === 1 && (a = a[0])) : o = void 0;
    }
  } else o && (_n(a, o) || (o = void 0));
  const c = typeof r.segment == "string" ? r.segment : void 0, d = Mi(a, n, s, c, o ? [o] : void 0);
  if (d.length === 0)
    return t.length;
  const u = d.find(I);
  if (!u)
    return i?.error(`CharNode style is missing for text "${t}". Attributes: ${JSON.stringify(r.char)}. Falling back to rich text insertion.`), ao(e, t, void 0, i);
  const f = {};
  for (const [b, p] of Object.entries(r))
    b !== "char" && b !== "segment" && typeof p == "string" && (f[b] = p);
  Object.keys(f).length > 0 && u.setUnknownAttributes(f);
  let h = !0;
  for (const b of d)
    if (!Qh(e, b, i)) {
      h = !1;
      break;
    }
  return h ? t.length : (i?.error(`Failed to insert CharNode with text "${t}" at index ${e}. Falling back to rich text.`), ao(e, t, void 0, i));
}
function ao(e, t, r, n) {
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
        const d = e - s, u = he(t);
        if ($t(r, u), d === 0)
          c.insertBefore(u);
        else if (d === l) {
          const f = c.getParent();
          I(f) && !Jr(r) ? f.insertAfter(u) : c.insertAfter(u);
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
        const u = he(t);
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
        const u = he(t);
        return $t(r, u), c.append(u), n?.debug(`Appended text "${t}" to end of CharNode ${c.getType()} (key: ${c.getKey()}).`), o = !0, !0;
      }
    } else if (Nt(c)) {
      if (!o && e === s) {
        const u = he(t);
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
        const u = he(t);
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
    const c = he(t);
    $t(r, c);
    const l = Ut().append(c);
    i.append(l), o = !0;
  }
  return o ? t.length : (n?.warn(`$insertRichText: Could not find insertion point for text "${t}" at targetIndex ${e}. Final currentIndex: ${s}. Text not inserted.`), 0);
}
function Qh(e, t, r) {
  const n = Re();
  let i = 0, s = !1;
  function o(a) {
    if (s)
      return !0;
    if (a === n && e === 0 && !n.getFirstChild())
      return t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into empty root, wrapped in ImpliedParaNode. targetIndex: ${e}`), n.append(Ut().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} directly into empty root. targetIndex: ${e}`), n.append(t)), s = !0, !0;
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
            r?.debug(`$insertNodeAtCharacterOffset: Inserting inline node ${t.getType()} into root before ${l.getType()}, wrapping in ImpliedParaNode. targetIndex: ${e}`), l.insertBefore(Ut().append(t));
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
    return L(a) && !s && (e === i || a === n && e > i) ? a === n ? (t.isInline() ? (r?.debug(`$insertNodeAtCharacterOffset: Appending inline node ${t.getType()} to root. Wrapping in new ImpliedParaNode. targetIndex: ${e}, current document OT length: ${i}.`), n.append(Ut().append(t))) : (r?.debug(`$insertNodeAtCharacterOffset: Appending block node ${t.getType()} to root. targetIndex: ${e}, current document OT length: ${i}.`), n.append(t)), s = !0, !0) : (
      // Appending to an existing container (ParaNode, ImpliedParaNode)
      // currentNode here is the container itself. currentIndex is at the point of currentNode's
      // closing marker. targetIndex === currentIndex means we are inserting at the conceptual end
      // of this container.
      ve(a) ? fr(a) && ce(t) && e === i ? (r?.debug(`$insertNodeAtCharacterOffset: Replacing ImpliedParaNode container (key: ${a.getKey()}) with ParaNode ${t.getType()} (key: ${t.getKey()}) via append logic. targetIndex: ${e}`), a.replace(t, !0), s = !0, !0) : t.isInline() || !ve(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to existing container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.append(t), s = !0, !0) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after container ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, container end OT index: ${i}.`), a.insertAfter(t), s = !0, !0) : (I(a) ? (r?.debug(`$insertNodeAtCharacterOffset: Inserting node ${t.getType()} after CharNode (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)) : t.isInline() || !ve(t) ? (r?.debug(`$insertNodeAtCharacterOffset: Appending node ${t.getType()} to generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.append(t)) : (r?.debug(`$insertNodeAtCharacterOffset: Inserting block node ${t.getType()} after generic element ${a.getType()} (key: ${a.getKey()}). targetIndex: ${e}, element end OT index: ${i}.`), a.insertAfter(t)), s = !0, !0)
    ) : s;
  }
  return o(n), s || r?.warn(`$insertNodeAtCharacterOffset: Could not find insertion point for node ${t.getType()} (key: ${t.getKey()}) at targetIndex ${e}. Final currentIndex: ${i}. Node not inserted.`), s;
}
function kC(e, t, r, n, i) {
  let s;
  return zr("chapter", t) ? s = xC(t.insert.chapter, r) : zr("verse", t) ? s = _C(t.insert.verse, r) : zr("ms", t) ? s = CC(t.insert.ms) : zr("note", t) ? s = eg(t, r, n, i) : zr("unknown", t) ? s = tg(t, r, n, i) : zr("unmatched", t) && (s = SC(t.insert.unmatched, r)), s ? Qh(e, s, i) : (i?.error(`$insertEmbedAtCurrentIndex: Cannot create LexicalNode for embed object: ${JSON.stringify(t.insert)}`), !1);
}
function xd(e, t, r, n) {
  let i;
  Pl(t) ? i = Zh(t.para, r) : EC(t) && (i = TC(t.book)), i ??= Ut();
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
          const b = e - c, [p] = b > 0 ? u.splitText(b) : [void 0];
          let g, y = p?.getPreviousSibling();
          for (; y; ) {
            const x = y;
            y = y.getPreviousSibling(), g ? g.insertBefore(x) : s.append(x), g = x;
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
function TC(e) {
  const { style: t, code: r } = e;
  if (!t || t !== os || !r || !Kt.isValidBookCode(r))
    return;
  const n = ze(e, Hx);
  return Pp(r, n);
}
function Zh(e, t) {
  const { style: r } = e;
  if (!r)
    return;
  const n = ze(e, Wx), i = ai(r, n);
  if (!Un(t))
    return i;
  if (t.markerMode === "editable")
    i.append(lt(r), Oo());
  else if (t.markerMode === "visible" || t.hasGutterParaMarkers) {
    const s = qe(r) + R;
    i.append(t.hasGutterParaMarkers ? mk(s) : Sr("marker", s));
  }
  return i;
}
function xC(e, t) {
  if (!e)
    return;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e;
  if (!r)
    return;
  const o = ze(e, Gx);
  let a;
  if (t.markerMode === "editable")
    a = wp(r, n, i, s, o);
  else {
    const c = t.markerMode === "visible";
    a = Wc(r, c, n, i, s, o);
  }
  return a;
}
function _C(e, t) {
  if (!e)
    return;
  const { style: r, number: n, sid: i, altnumber: s, pubnumber: o } = e;
  if (!n)
    return;
  const a = ze(e, Jx);
  let c;
  if (t.markerMode === "editable") {
    if (!r)
      return;
    const l = Ft(r, n);
    c = Kp(n, l, i, s, o, a);
  } else {
    const l = t.markerMode === "visible";
    c = pl(n, l, i, s, o, a);
  }
  return c;
}
function CC(e) {
  if (!e)
    return;
  const { style: t, sid: r, eid: n, attributeOrder: i } = e;
  if (!t)
    return;
  const s = ze(e, Yx);
  return hp(t, r, n, s, i);
}
function eg(e, t, r, n) {
  const i = e.insert;
  if (!i.note)
    return;
  const { style: s, caller: o, category: a, contents: c } = i.note;
  if (!s || o == null)
    return;
  o === "" && n?.warn("Note has empty caller. Only use for note editing.");
  const l = ze(i.note, Xx), d = typeof l?.closed == "string" ? l.closed : void 0, u = e.attributes?.segment;
  let f;
  u && typeof u == "string" && (f = u);
  const h = [];
  for (const p of c?.ops ?? [])
    if (typeof p.insert == "string")
      if (Jr(p.attributes)) {
        const g = Mi(p.attributes.char, t, he(p.insert), void 0, rg(p.attributes.char, h), !1, t.markerMode === "editable");
        h.push(...g);
      } else
        h.push(he(p.insert));
  return Bh(s, o, h, t, r, f, d).setCategory(a).setUnknownAttributes(l);
}
function tg(e, t, r, n) {
  const i = e.insert.unknown;
  if (!i)
    return;
  const { tag: s, marker: o, contents: a } = i;
  if (!s)
    return;
  const c = ze(i, Qx), l = Vc(s, o, c), d = a?.ops ?? [];
  d.length > 0 && vC(d, t, r, n).forEach((h) => l.append(h));
  const u = e.attributes?.segment;
  return typeof u == "string" && xt(l, Hr, () => u), l;
}
function vC(e, t, r, n) {
  const i = [];
  for (const s of e) {
    if (typeof s.insert == "string") {
      if (Jr(s.attributes)) {
        const o = he(s.insert), a = Mi(s.attributes.char, t, o, void 0, rg(s.attributes.char, i));
        i.push(...a);
      } else
        i.push(he(s.insert));
      continue;
    }
    if (!(!s.insert || typeof s.insert != "object")) {
      if (zr("unknown", s)) {
        const o = tg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      if (zr("note", s)) {
        const o = eg(s, t, r, n);
        o && i.push(o);
        continue;
      }
      n?.warn(`$createInlineNodesFromOps: Unsupported embed inside unknown contents: ${JSON.stringify(s.insert)}`);
    }
  }
  return i;
}
function SC(e, t) {
  if (!e)
    return;
  const { marker: r } = e;
  if (!r)
    return;
  const n = ol(r);
  return t.markerMode === "editable" && n.setMode("normal"), n;
}
function rg(e, t) {
  if (!(!Array.isArray(e) && e.style === "fp" && !e.cid))
    return t;
}
function rc(e) {
  return e.style.startsWith("+") ? { ...e, style: e.style.slice(1) } : e;
}
function Mi(e, t, r, n, i, s = !1, o = !1) {
  E(r) && r.getTextContentSize() === 0 && r.setTextContent(zt);
  const a = () => {
    o && E(r) && r.getTextContent() !== zt && r.setTextContent(R + r.getTextContent());
  };
  if (Array.isArray(e)) {
    if (e.length === 0)
      throw new Error("Empty charAttr array");
    const c = e.map(rc), l = c[0], d = i?.[i.length - 1];
    if (I(d) && _n(l, d))
      return c.length > 1 ? Mi(c.slice(1), t, r, void 0, void 0, !0, o).forEach((h) => d.append(h)) : r && d.append(r), [];
    a();
    const u = c.reduceRight((f, h, b) => {
      const p = Mr(h.style, ze(h, so));
      if (typeof h.cid == "string" && xt(p, xn, () => h.cid), n && b === c.length - 1 && xt(p, Hr, () => n), f)
        if (I(f)) {
          const g = f.getMarker(), y = [];
          ya(g, y, t, !0), y.forEach((v) => p.append(v)), p.append(f);
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
    const d = Mr(c.style, ze(c, so));
    return typeof c.cid == "string" && xt(d, xn, () => c.cid), n && xt(d, Hr, () => n), r && d.append(r), ya(c.style, d, t, s), ma(d, d, t, s), [d];
  }
}
function ma(e, t, r, n = !1) {
  e.getUnknownAttributes()?.closed !== "false" && MC(e.getMarker(), t, r, !1, n);
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
function MC(e, t, r, n = !1, i = !1) {
  let s;
  r?.markerMode === "editable" ? n ? s = lt("", "selfClosing") : s = lt(e, "closing", i) : r?.markerMode === "visible" && (s = Sr("marker", n ? ot("") : ot(e, i))), s && (Array.isArray(t) ? t.push(s) : t.append(s));
}
function EC(e) {
  return !!e && !!e.book && typeof e.book == "object" && e.book !== null && "style" in e.book && typeof e.book.style == "string" && "code" in e.book && typeof e.book.code == "string";
}
function Pl(e) {
  return !!e && !!e.para && typeof e.para == "object" && e.para !== null && "style" in e.para && typeof e.para.style == "string";
}
function Jr(e) {
  return !!e && !!e.char && typeof e.char == "object" && e.char !== null && (!Array.isArray(e.char) && "style" in e.char && typeof e.char.style == "string" || Array.isArray(e.char) && e.char.length > 0 && "style" in e.char[0] && typeof e.char[0].style == "string");
}
function AC(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && Object.keys(e).length === 0;
}
function $t(e, t) {
  if (e)
    for (const r of Object.keys(e)) {
      if (r === "segment" && typeof e[r] == "string") {
        const n = e[r];
        xt(t, Hr, () => n);
        continue;
      }
      if (PC(r)) {
        const n = !!e[r], i = r, s = t.hasFormat(i);
        (n && !s || !n && s) && t.toggleFormat(i);
      }
    }
}
const ng = [
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
function PC(e) {
  return ng.includes(e);
}
function NC() {
  const [e] = ae();
  return z(() => e.registerCommand(Eo, (t) => (OC(t), !1), kn), [e]), null;
}
function OC(e) {
  if (wC(e.target))
    return;
  const t = O();
  P(t) && qC(t);
}
function Ei(e) {
  let t = e.getFirstChild(), r = 0;
  for (; t !== null; )
    if (Bt(t))
      r++, t = t.getNextSibling(), E(t) && t.getTextContent() === R && (r++, t = t.getNextSibling());
    else if (ge(t))
      r++, t = t.getNextSibling();
    else
      break;
  return r === 0 ? !1 : (Zt(e, r), !0);
}
function wC(e) {
  if (!Bf(e))
    return !1;
  const t = Ti(e);
  if (!yk(t))
    return !1;
  const r = t.getParent();
  return r ? ve(r) ? Ei(r) : (Zt(r, t.getIndexWithinParent() + 1), !0) : !1;
}
function qC(e) {
  if (!e.isCollapsed())
    return !1;
  const { anchor: t } = e;
  if (t.type !== "element" || t.offset !== 0)
    return !1;
  const r = se(t.key);
  if (!ve(r))
    return !1;
  const n = r.getFirstChild();
  return !qr(n) && !Dn(n) ? !1 : Ei(r);
}
function RC() {
  const [e] = ae();
  return z(() => {
    const t = (r) => r instanceof KeyboardEvent && !$C(r) || !gs() ? !1 : (r instanceof Event && r.preventDefault(), !0);
    return je(
      e.registerCommand(Nr, t, Oe),
      e.registerCommand(Gs, t, Oe),
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
        const n = Ti(r.target);
        return !n || !Yr(n) ? !1 : (r.preventDefault(), !0);
      }, Oe),
      e.registerCommand(Hy, t, Oe),
      e.registerCommand(Gy, t, Oe),
      e.registerCommand(Jy, t, Oe)
    );
  }, [e]), null;
}
function $C(e) {
  return e.isComposing || e.keyCode === 229 ? !0 : !(typeof e.getModifierState == "function" && e.getModifierState("AltGraph")) && (e.ctrlKey || e.metaKey || e.altKey) ? !1 : e.key.length === 1 || e.key === "Backspace" || e.key === "Delete" || e.key === "Enter";
}
function Yr(e) {
  return Ye(e, Nl) ?? void 0;
}
function Nl(e) {
  return Fe(e) || xh(e);
}
function gs() {
  const e = O();
  return P(e) ? Yr(e.anchor.getNode()) !== void 0 || Yr(e.focus.getNode()) !== void 0 : !1;
}
function LC(e, t, r) {
  if (e.height === 0)
    return !1;
  const n = e.height / 4;
  return t.some((i) => r === "down" ? i.top >= e.bottom - n : i.bottom <= e.top + n);
}
function IC(e, t) {
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
    return d.setStartAfter(c), l ? d.setEndBefore(l) : d.setEnd(n, n.childNodes.length), LC(s, Array.from(d.getClientRects()), t);
  } catch {
    return !1;
  }
}
function DC(e, t, r, n) {
  if (!QC(t) || IC(e, r))
    return !1;
  const i = r === "up" ? Vx(t) : jx(t);
  return i && n.preventDefault(), i;
}
function UC({ viewOptions: e }) {
  const [t] = ae();
  return FC(t, e), null;
}
function FC(e, t) {
  z(() => {
    if (!e.hasNodes([hr, St, Ae]))
      throw new Error("ArrowNavigationPlugin: ImmutableChapterNode, ImmutableVerseNode or NoteNode not registered on editor!");
    const r = (n) => {
      const i = O();
      if (!P(i))
        return !1;
      const s = t?.markerMode === "editable", o = e.getRootElement();
      if (s && o && (n.key === "ArrowLeft" || n.key === "ArrowRight") && n.shiftKey && !n.altKey && !n.ctrlKey && !n.metaKey) {
        const d = _d(o), u = HC(i, Cd(d, n.key) ? "next" : "previous");
        return u && n.preventDefault(), u;
      }
      if (!i.isCollapsed())
        return !1;
      if (n.key === "ArrowUp" || n.key === "ArrowDown") {
        if (n.shiftKey || n.altKey || n.ctrlKey || n.metaKey)
          return !1;
        const d = n.key === "ArrowUp" ? "up" : "down";
        return DC(e, i, d, n);
      }
      if (n.key !== "ArrowLeft" && n.key !== "ArrowRight" || !o)
        return !1;
      const a = _d(o), c = n.shiftKey || n.altKey || n.ctrlKey || n.metaKey;
      let l = !1;
      return Cd(a, n.key) ? l = !c && Md(i, "next") || !c && KC(i) || YC(i) || !c && s && Sd(i, "next") : zC(a, n.key) && (l = !c && Md(i, "previous") || !c && BC(i) || XC(i, t) || !c && s && Sd(i, "previous")), l && n.preventDefault(), l;
    };
    return e.registerCommand(Nr, r, Oe);
  }, [e, t]);
}
function _d(e) {
  return e.dir || "ltr";
}
function Cd(e, t) {
  return e === "ltr" && t === "ArrowRight" || e === "rtl" && t === "ArrowLeft";
}
function zC(e, t) {
  return e === "ltr" && t === "ArrowLeft" || e === "rtl" && t === "ArrowRight";
}
function nc(e) {
  if (!I(e) || e.getMarker() !== "fp")
    return;
  const t = Qt(e);
  if (!(!t || t.getIsCollapsed()))
    return e;
}
function KC(e) {
  const t = nc(Hp(e));
  if (!t)
    return !1;
  const r = e.anchor;
  return r.type === "text" && r.offset !== r.getNode().getTextContentSize() ? !1 : (Zt(t, 0), !0);
}
function BC(e) {
  const t = e.anchor, r = t.getNode();
  if (t.type === "text") {
    const n = nc(r.getParent());
    return !n || !r.is(n.getFirstChild()) ? !1 : t.offset === 1 ? (r.select(0, 0), !0) : t.offset !== 0 ? !1 : vd(n);
  }
  if (t.offset === 0) {
    const n = nc(r);
    return n ? vd(n) : !1;
  }
  return !1;
}
function vd(e) {
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
const co = typeof Intl.Segmenter > "u" ? void 0 : new Intl.Segmenter(void 0, { granularity: "grapheme" });
function jC(e) {
  if (co)
    for (const { segment: r } of co.segment(e))
      return r.length;
  const t = e.codePointAt(0);
  return t === void 0 ? 0 : String.fromCodePoint(t).length;
}
function VC(e) {
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
    if (L(t) && !t.isInline())
      return t;
}
function sg(e) {
  return !!e && w(e) && Yr(e) !== void 0;
}
function hi(e) {
  return E(e) && !e.isToken() && !sg(e) && e.getTextContentSize() > 0;
}
function og(e) {
  return wn(e) ? !0 : K(e) ? e.getIsCollapsed() === !0 : E(e) ? (e.isToken() || sg(e)) && e.getTextContentSize() > 0 : qn(e) ? !He(e) : !1;
}
function gi(e, t, r) {
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
    if (L(n)) {
      n = (t === "next" ? n.getFirstChild() : n.getLastChild()) ?? gi(n, t, r);
      continue;
    }
    if (hi(n))
      return n;
    n = gi(n, t, r);
  }
}
function Ol(e, t, r, n, i) {
  return r === "element" && L(e) ? e.getChildAtIndex(n === "next" ? t : t - 1) ?? gi(e, n, i) : r === "text" && og(e) && (n === "next" ? t < e.getTextContentSize() : t > 0) ? e : gi(e, n, i);
}
function ba(e, t) {
  if (e.kind === "text" && e.offset > 0)
    return e;
  const r = Ol(e.node, e.offset, e.kind, "previous", t), n = zo(r, "previous", t);
  if (!n)
    return e;
  if (hi(n))
    return { kind: "text", node: n, offset: n.getTextContentSize() };
  const i = n.getParent();
  return i ? { kind: "element", node: i, offset: n.getIndexWithinParent() + 1 } : e;
}
function WC(e, t) {
  const r = e.getNode(), n = ig(r);
  if (!n)
    return;
  if (e.type === "text" && hi(r)) {
    if (t === "next" && e.offset < r.getTextContentSize() || t === "previous" && e.offset > 1)
      return;
    if (t === "previous" && e.offset === 1)
      return ba({ kind: "text", node: r, offset: 0 }, n);
  }
  const i = Ol(r, e.offset, e.type, t, n), s = zo(i, t, n);
  if (!s)
    return;
  if (hi(s)) {
    const c = s.getTextContent(), l = t === "next" ? jC(c) : VC(c);
    return ba({ kind: "text", node: s, offset: l }, n);
  }
  const o = s.getParent();
  if (!o)
    return;
  const a = s.getIndexWithinParent();
  return ba({ kind: "element", node: o, offset: t === "next" ? a + 1 : a }, n);
}
function ag(e, t, r) {
  const n = r === "collapse" ? e.anchor : e.focus, i = WC(n, t);
  return !i || i.node.is(n.getNode()) && i.offset === n.offset && i.kind === n.type ? !1 : r === "collapse" ? (i.node.select(i.offset, i.offset), !0) : (e.focus.set(i.node.getKey(), i.offset, i.kind), !0);
}
function Sd(e, t) {
  return ag(e, t, "collapse");
}
function HC(e, t) {
  return ag(e, t, "extend");
}
function GC(e, t, r) {
  const n = e.getNode();
  if (e.type === "text" && hi(n) && (t === "next" ? e.offset < n.getTextContentSize() : e.offset > 0))
    return !1;
  const i = Ol(n, e.offset, e.type, t, r);
  return zo(i, t, r) === void 0;
}
function JC(e, t) {
  const r = Re();
  for (let n = e; n; ) {
    const i = gi(n, t, r), s = i && zo(i, t, r);
    if (!s)
      return;
    if (n = Yr(s), !n)
      return s;
  }
}
function Md(e, t) {
  const r = e.anchor, n = r.getNode();
  if (Yr(n))
    return !1;
  const i = ig(n);
  if (!i || !GC(r, t, i))
    return !1;
  const s = gi(i, t, Re()), o = s && Yr(s);
  if (!o)
    return !1;
  const a = JC(o, t);
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
function Ed(e) {
  const t = e.getParent();
  if (!t)
    return;
  const r = e.getIndexWithinParent() + 1;
  t.select(r, r);
}
function YC(e) {
  const t = e.anchor.getNode(), r = Hp(e);
  if (K(r) && !w(r.getFirstChild())) {
    if (ve(t)) {
      if (e.anchor.offset === t.getChildrenSize())
        return !1;
    } else if (!(e.anchor.offset === t.getTextContentSize()))
      return !1;
    if (r.getIsCollapsed()) {
      if (r.is(r.getParent()?.getLastChild())) {
        const i = r.getParent()?.getNextSibling();
        return i && !(ve(i) && Ei(i)) && i.selectStart(), !0;
      }
    } else return Xt(r.getFirstChild()) ? r.select(2, 2) : r.select(1, 1), !0;
  }
  if (ve(t) && K(r) && r.getIsCollapsed()) {
    const i = r.getNextSibling();
    return i ? i.selectStart() : Ed(r), !0;
  }
  const n = r?.getParent();
  if (Xt(r) && K(n) && r.is(n?.getLastChild())) {
    const i = n.getNextSibling();
    return i ? i.selectStart() : n.getIsCollapsed() ? Ed(n) : n.selectEnd(), !0;
  }
  return !1;
}
function XC(e, t) {
  const r = Qk(e);
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
  if (ve(r) && t?.noteMode === "collapsed") {
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
function QC(e) {
  if (e.anchor.type === "element")
    return !0;
  if (e.anchor.offset !== 0)
    return !1;
  const t = e.anchor.getNode().getPreviousSibling();
  return ge(t) && qn(t);
}
function ZC() {
  const [e] = ae();
  return ev(e), null;
}
function ev(e) {
  z(() => {
    if (!e.hasNodes([ye]))
      throw new Error("CharNodePlugin: CharNode not registered on editor!");
    return je(
      e.registerNodeTransform(ye, nv),
      // Self-healing nested glyphs: whenever a char span is dirtied (created, moved, merged,
      // unwrapped), re-derive its glyphs' `+` from tree position — see nestedGlyphs.utils.ts
      // (`shared`) for the full representation rules this enforces.
      e.registerNodeTransform(ye, kT),
      // Self-healing display separators: every opening char glyph is followed by its NBSP
      // separator (text prefix or standalone spacer) — see markerSeparators.utils.ts (`shared`).
      e.registerNodeTransform(ye, uh),
      // Self-healing attribute display run: re-derive the `|…` run from unknownAttributes
      // whenever a span is dirtied — heals remote collab updates (delta-apply only calls
      // setUnknownAttributes) and structure surgery. $syncDisplayRun (displayRunSync.utils.ts,
      // `shared`), driven here with the char descriptor from displayRunRegistry.ts (`shared`).
      e.registerNodeTransform(ye, (t) => ds(Cn("char"), t)),
      e.registerNodeTransform(Be, iv)
    );
  }, [e]);
}
function ka(e) {
  return e.getChildren().some(w);
}
function tv(e, t) {
  const r = t.getFirstChild();
  if (!w(r) || r.getMarkerSyntax() !== "opening")
    return !1;
  const n = r.getNextSibling();
  if (Ro(n)) {
    const i = n.getTextContent();
    i.startsWith(R) && (i === R ? n.remove() : n.setTextContent(i.slice(R.length)));
  }
  return t.splice(1, 0, e.getChildren()), e.remove(), !0;
}
function rv(e, t) {
  const r = t.getLastChild(), n = e.getChildren();
  w(r) && r.getMarkerSyntax() === "closing" ? n.forEach((i) => r.insertBefore(i)) : t.append(...n), e.remove();
}
function nv(e) {
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
      if (tv(e, i))
        return;
    } else
      e.append(...i.getChildren()), i.remove();
  const s = e.getPreviousSibling();
  I(s) && _n({ style: t, cid: r }, s) && Pt(n, s.getUnknownAttributes()) && (ka(s) ? rv(e, s) : (s.append(...e.getChildren()), e.remove()));
}
function iv(e) {
  const t = e.getParent();
  if (!I(t) || t.getChildrenSize() !== 1)
    return;
  const r = e.getTextContent();
  r.length > 1 && r.startsWith(zt) && (e.setTextContent(r.slice(1)), e.selectEnd());
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
  return je(e.registerCommand(ii, t, ft), e.registerCommand(vr, t, ft));
}
const wl = (e) => {
  e.dispatchCommand(ii, null);
}, ql = (e) => {
  e.dispatchCommand(vr, null);
}, Rl = (e) => {
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
    e.dispatchCommand(cr, s);
  });
}, $l = (e) => {
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
    e.dispatchCommand(cr, i);
  });
};
function sv() {
  const [e] = ae();
  return z(() => {
    const t = (r) => {
      const { key: n, shiftKey: i, metaKey: s, ctrlKey: o, altKey: a } = r;
      !(oi ? s : o) || a || (!i && n.toLowerCase() === "c" ? (r.preventDefault(), wl(e)) : !i && n.toLowerCase() === "x" ? (r.preventDefault(), ql(e)) : n.toLowerCase() === "v" && (r.preventDefault(), i ? $l(e) : Rl(e)));
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
function ov({ logger: e }) {
  const [t] = ae();
  return z(() => je(
    // When the backslash or forward slash key is typed.
    t.registerCommand(Nr, (r) => r.key !== "\\" && r.key !== "/" ? !1 : (r.preventDefault(), !0), jr),
    // When the backslash or forward slash character is pasted into the editor.
    t.registerCommand(cr, (r) => {
      const n = r.clipboardData?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: paste containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, jr),
    // When the backslash or forward slash character is dragged into the editor.
    t.registerCommand(Lc, (r) => {
      const n = r.dataTransfer?.getData("text/plain");
      return !n || !n.includes("\\") && !n.includes("/") ? !1 : (e?.info("CommandMenuPlugin: drag containing backslash or forward slash ignored."), r.preventDefault(), !0);
    }, jr)
  ), [t, e]), null;
}
function av({ index: e, isSelected: t, onClick: r, onMouseEnter: n, option: i }) {
  let s = "item";
  return t && (s += " selected"), i.isDisabled && (s += " disabled"), S("li", { tabIndex: -1, className: s, role: "option", "aria-selected": t, "aria-disabled": i.isDisabled, id: "typeahead-item-" + e, onMouseEnter: n, onClick: i.isDisabled ? void 0 : r, children: S("span", { className: "text", children: i.title }) });
}
function cv({ options: e, selectedItemIndex: t, onOptionClick: r, onOptionMouseEnter: n }) {
  return S("div", { className: "typeahead-popover", children: S("ul", { children: e.map((i, s) => S(av, { index: s, isSelected: t === s, onClick: () => r(i, s), onMouseEnter: () => n(s), option: i }, i.key)) }) });
}
let lv = 0;
class Di {
  key;
  title;
  onSelect;
  isDisabled;
  constructor(t, r) {
    this.key = `context-menu-option-${lv++}`, this.title = t, this.onSelect = r.onSelect.bind(this), this.isDisabled = r.isDisabled || !1;
  }
}
function uv({ options: e } = {}) {
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
      new Di("Cut", {
        onSelect: () => {
          ql(t);
        },
        isDisabled: r
      }),
      new Di("Copy", {
        onSelect: () => {
          wl(t);
        }
      }),
      new Di("Paste", {
        onSelect: () => {
          Rl(t);
        },
        isDisabled: r
      }),
      new Di("Paste as Plain Text", {
        onSelect: () => {
          $l(t);
        },
        isDisabled: r
      })
    ], f = (e ?? []).map((h) => new Di(h.title, { onSelect: h.onSelect, isDisabled: h.isDisabled }));
    return [...u, ...f];
  }, [t, r, e]), l = me(() => {
    s((u) => ({ ...u, isOpen: !1 })), a(void 0);
  }, []);
  z(() => ug(t), [t]), z(() => {
    const u = (f) => {
      const h = f.target;
      t.getRootElement() === h || Dp(h) || (f.preventDefault(), s({ isOpen: !0, x: f.clientX, y: f.clientY }), a(void 0));
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
    const { width: f, height: h } = u.getBoundingClientRect(), b = Math.max(0, Math.min(i.x, globalThis.innerWidth - f)), p = Math.max(0, Math.min(i.y, globalThis.innerHeight - h));
    u.style.left = `${b}px`, u.style.top = `${p}px`, u.style.visibility = "visible";
  }, [i.isOpen, i.x, i.y]), i.isOpen ? xb.createPortal(S("div", { ref: d, className: "typeahead-popover auto-embed-menu", style: {
    left: i.x,
    position: "fixed",
    top: i.y,
    userSelect: "none",
    visibility: "hidden",
    width: 200,
    zIndex: 9999
  }, onPointerDown: (u) => u.stopPropagation(), children: S(cv, { options: c, selectedItemIndex: o, onOptionClick: (u) => {
    u.isDisabled || (t.update(() => {
      u.onSelect();
    }), l());
  }, onOptionMouseEnter: (u) => {
    a(u);
  } }) }), document.body) : null;
}
function dv(e, t) {
  return e.startContainer === t.node && e.startOffset === t.offset;
}
function fv(e) {
  if (!Qy(e.node))
    return "before";
  const t = e.node.nodeValue?.length ?? 0;
  return e.offset * 2 < t ? "before" : "after";
}
function pv(e) {
  return mt(e);
}
function Ta(e, t, r) {
  const n = Ti(t.node);
  if (!qn(n) || pv(n))
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
function hv(e, t) {
  if (O())
    return !1;
  const r = e.getRootElement(), n = Yy(r?.ownerDocument.defaultView ?? null);
  if (!n || n.rangeCount === 0)
    return !1;
  const { anchorNode: i, anchorOffset: s, focusNode: o, focusOffset: a } = n;
  if (!i || !o || !jf(e, i, o))
    return !1;
  const c = { node: i, offset: s }, l = { node: o, offset: a };
  let d, u;
  if (n.isCollapsed)
    d = Ta(e, c, fv(c)), u = d;
  else {
    const g = dv(n.getRangeAt(0), c);
    d = Ta(e, c, g ? "before" : "after"), u = Ta(e, l, g ? "after" : "before");
  }
  if (!d && !u)
    return !1;
  const f = d ?? c, h = u ?? l, b = {
    anchorNode: f.node,
    anchorOffset: f.offset,
    focusNode: h.node,
    focusOffset: h.offset
  }, p = Xy(b, e);
  return p ? (si(p), p.dirty = !t, t) : !1;
}
function gv() {
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
  }, [e]), z(() => e.registerCommand(dr, () => (hv(e, t.current) && (r.current = !0), !1), st), [e]), null;
}
function mv() {
  const [e] = ae();
  return z(() => e.registerCommand(Nr, (t) => {
    const { key: r, shiftKey: n, metaKey: i, ctrlKey: s, altKey: o } = t;
    if (!(oi ? i : s) || o)
      return !1;
    const a = r.toLowerCase();
    return !(a === "z" && !n) && !(a === "y" || a === "z" && n) ? !1 : (t.preventDefault(), !0);
  }, st), [e]), null;
}
function yv({ isEditable: e }) {
  const [t] = ae();
  return Ts(() => {
    t.setEditable(e);
  }, [t, e]), null;
}
function Ad(e) {
  return !!e && Gc(se(e));
}
function dg(e) {
  const [t] = ae(), r = ee(void 0), n = me((i) => {
    const s = O(), o = P(s) && s.isCollapsed() ? s.anchor.key : void 0, a = r.current, c = Ad(a);
    a && !c && (r.current = void 0);
    let l;
    if (i) {
      const d = i.getParentOrThrow(), u = i.getIndexWithinParent() + 1, f = Lo(d, u);
      if (f)
        r.current = f.getKey(), l = f.getKey();
      else {
        const h = Gk();
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
      (a || d && d !== l) && (Vr(Wr), n(a));
    }, s = (a) => {
      if (a.getKey() !== r.current)
        return;
      const c = a.getTextContent();
      if (vs(c) || !c.includes(ci))
        return;
      const l = O(), d = P(l) && l.isCollapsed() && l.anchor.key === a.getKey() ? l.anchor.offset : void 0;
      if (Jk(a), r.current = void 0, d !== void 0) {
        const u = c.slice(0, d).split(ci).length - 1, f = Math.max(0, d - u);
        a.select(f, f);
      }
    }, o = je(t.registerCommand(dr, () => (i(), !1), kn), t.registerCommand(Ic, () => {
      const a = r.current;
      if (!a)
        return !1;
      let c = !1;
      return t.getEditorState().read(() => {
        c = Ad(a);
      }), c && t.update(() => {
        const l = se(a);
        E(l) && l.remove();
      }, { tag: Wr }), r.current = void 0, !1;
    }, kn), t.registerNodeTransform(Be, s));
    return () => {
      o(), r.current = void 0;
    };
  }, [t, e, n]), n;
}
function bv() {
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
  if (!ge(i) || Lo(r, t.offset))
    return;
  const s = n[t.offset];
  if (s === void 0 || ge(s))
    return i;
}
function kv() {
  return dg(bv), null;
}
function Tv({ scripture: e, scriptureRef: t, nodeOptions: r, editorAdaptor: n, viewOptions: i, logger: s }) {
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
          f || Vr(Zy), o.setEditorState(l), o.dispatchCommand(eb, void 0);
        }, { tag: lp });
      });
    } catch {
      s?.error("LoadStatePlugin: error parsing or setting editor state.");
    }
  }, [o, n, s, e, t, i]), null;
}
function xv({ expandedNoteKeyRef: e, nodeOptions: t, viewOptions: r, logger: n }) {
  const [i] = ae();
  return _v(t, n), Cv(i, e, r, n), null;
}
function _v(e, t) {
  const r = ee(void 0), n = ee(void 0), i = e.noteCallers, s = e.crossRefCallers;
  z(() => {
    let o = i;
    (!o || o.length <= 0) && (o = N_), r.current !== o && (r.current = o, Pd("note-callers", o, t));
  }, [t, i]), z(() => {
    let o = s;
    (!o || o.length <= 0) && (o = O_), n.current !== o && (n.current = o, Pd("cross-ref-callers", o, t));
  }, [t, s]);
}
function Cv(e, t, r, n) {
  z(() => {
    if (!e.hasNodes([ye, Ae, Jt]))
      throw new Error("NoteNodePlugin: CharNode, NoteNode or ImmutableNoteCallerNode not registered on editor!");
    const i = (s) => e.update(() => Nv(s));
    return je(
      // Remove NoteNode if it doesn't contain a caller node and ensure typed text goes before it.
      e.registerNodeTransform(Ae, (s) => vv(s, r)),
      // Update NoteNodeCaller preview text when NoteNode children text is changed.
      e.registerNodeTransform(ye, Sv),
      e.registerNodeTransform(Be, Mv),
      // Ensure NBSP after caller.
      e.registerNodeTransform(Jt, Ev),
      // Re-generate all note callers when a note is removed.
      e.registerMutationListener(Jt, (s, { prevEditorState: o }) => Av(s, o)),
      // Handle the cursor moving next to a NoteNode. NoteNode arrow key navigation when note is
      // after a verse node is handled in the ArrowNavigationPlugin.
      e.registerCommand(dr, () => Pv(e, t, r, n), ft),
      // Handle double-click of a word immediately following a NoteNode (no space between).
      e.registerRootListener((s, o) => {
        o !== null && o.removeEventListener("dblclick", i), s !== null && s.addEventListener("dblclick", i);
      })
    );
  }, [e, t, n, r]);
}
function vv(e, t) {
  const r = e.getChildren();
  if (!r.some((i) => mt(i)) && t?.markerMode !== "editable" && e.getCaller() !== "" && e.remove(), r.length > 0) {
    const i = r[0];
    E(i) && !w(i) && i.getTextContent() !== Ot(e.getCaller()) && e.insertBefore(i);
  }
}
function Sv(e) {
  const t = e.getParentOrThrow(), r = t.getChildren(), n = r.find((o) => mt(o));
  if (!I(e) || !K(t) || !n)
    return;
  const i = Jc(r);
  n.getPreviewText() !== i && n.setPreviewText(i);
  const s = e.getNextSibling();
  E(s) ? s.getTextContent() !== R && s.setTextContent(R) : e.insertAfter(he(R));
}
function Mv(e) {
  const t = Qt(e), r = t?.getChildren(), n = r?.find((o) => mt(o));
  if (!E(e) || !K(t) || !n || !r)
    return;
  const i = e.getParent();
  if (!w(e) && K(i) && e.getTextContent() !== R && (e.setTextContent(R), e.selectEnd()), I(i) && i.getChildrenSize() === 1) {
    const o = e.getTextContent();
    o.length > 1 && o.startsWith(zt) && (e.setTextContent(o.slice(1)), e.selectEnd());
  }
  const s = Jc(r);
  n.getPreviewText() !== s && n.setPreviewText(s);
}
function Ev(e) {
  if (!mt(e))
    return;
  const t = e.getNextSibling();
  !E(t) || w(t) ? e.insertAfter(he(R)) : t.getTextContent() !== R && t.setTextContent(R);
}
function Av(e, t) {
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
function Pv(e, t, r, n) {
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
      c && !c.getIsCollapsed() && (n?.debug("Cursor moved away from NoteNode, collapsing it"), Ui(e, t.current, n)), t.current = void 0;
    }
  }
  if (s.offset === 0) {
    const a = o.getPreviousSibling();
    if (K(a)) {
      n?.debug("Cursor is just after a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ui(e, c, n);
    }
  }
  if (s.offset === o.getTextContentSize()) {
    const a = o.getNextSibling();
    if (K(a)) {
      n?.debug("Cursor is just before a NoteNode");
      const c = a.getKey();
      a.getIsCollapsed() ? t.current = c : t.current = void 0, Ui(e, c, n);
    } else if (!a) {
      const c = Ye(o, (l) => K(l));
      if (c && c.getIsCollapsed() && ve(c.getParent()) && c.is(c.getParent()?.getLastChild())) {
        n?.debug("Cursor is at end of note at end of para");
        const l = c.getKey();
        t.current = l, Ui(e, l, n);
      }
    }
  }
  if (ve(o)) {
    const a = o.getChildAtIndex(s.offset), c = a?.getPreviousSibling();
    if (Dn(c) && K(a)) {
      n?.debug("Cursor is between verse and NoteNode");
      const l = a.getKey();
      a.getIsCollapsed() ? t.current = l : t.current = void 0, Ui(e, l, n);
    }
  }
  return !1;
}
function Ui(e, t, r) {
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
function Nv(e) {
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
function Pd(e, t, r) {
  for (const n of document.styleSheets)
    try {
      const i = n.cssRules || n.rules;
      for (const s of i)
        if (Ov(s, e)) {
          const o = t.map((a) => `"${a}"`).join(" ");
          s.symbols = o;
          return;
        }
    } catch {
      continue;
    }
  r?.warn(`Editor: counter style "${e}" not found.`);
}
function Ov(e, t) {
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
  const r = cs(e);
  return r && t.push(r), t.length > 0 && t.every((n) => E(n) && n.getMode() === "token") ? t : [];
}
function wv(e) {
  const t = e.getParent();
  if (K(t))
    return Ko(t).some((r) => r.is(e)) ? t : void 0;
}
function lo(e) {
  const t = Ko(e), r = t[t.length - 1];
  return r ? r.getIndexWithinParent() + 1 : 0;
}
function qv(e, t) {
  for (let r = t; r; r = r.getParent())
    if (e.is(r.getParent()))
      return r;
}
function Rv(e) {
  const t = tb();
  if (!P(t))
    return !1;
  const { anchor: r } = t, n = r.getNode();
  if (e.is(n))
    return r.offset >= lo(e);
  const i = qv(e, n);
  return i !== void 0 && i.getIndexWithinParent() >= lo(e);
}
function ic(e) {
  if (e.type !== "text")
    return;
  const t = e.getNode(), r = wv(t);
  if (r)
    return $v(r, t, e.offset) ? void 0 : r;
}
function $v(e, t, r) {
  const n = Ko(e), i = n[n.length - 1];
  return i !== void 0 && i.is(t) && r === i.getTextContentSize();
}
function Lv(e) {
  const t = Ko(e), r = t[t.length - 1];
  E(r) ? r.select(r.getTextContentSize(), r.getTextContentSize()) : Zt(e, lo(e));
}
function Iv(e = !1) {
  const t = O();
  if (!P(t))
    return !1;
  if (!t.isCollapsed())
    return Dv(t.anchor, t.focus);
  const r = ic(t.anchor);
  if (!r)
    return !1;
  if (!e && Rv(r)) {
    const n = r.getParent();
    if (!n)
      return !1;
    Zt(n, r.getIndexWithinParent());
  } else
    Lv(r);
  return !0;
}
function Dv(e, t) {
  const r = ic(e), n = ic(t);
  if (!r && !n)
    return !1;
  const i = e.isBefore(t);
  return r && Nd(e, r, i), n && Nd(t, n, !i), !0;
}
function Nd(e, t, r) {
  const n = t.getParent();
  r && n ? e.set(n.getKey(), t.getIndexWithinParent(), "element") : e.set(t.getKey(), lo(t), "element");
}
function Uv() {
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
  }, [e]), z(() => e.registerCommand(dr, () => (Iv(t.current) && Vr(Wr), !1), kn), [e]), null;
}
function Fv({ onChange: e }) {
  const [t] = ae();
  return z(() => t.registerCommand(dr, () => {
    const r = Tl();
    return e?.(r), !1;
  }, ft), [t, e]), null;
}
function zv() {
  const [e] = ae();
  return Kv(e), null;
}
function Kv(e) {
  z(() => {
    if (!e.hasNodes([rt]))
      throw new Error("ParaNodePlugin: ParaNode not registered on editor!");
    return e.registerNodeTransform(rt, (t) => Bv(t, e));
  }, [e]);
}
function Bv(e, t) {
  Qa(t, e.getKey()) && $h(e.getFirstChild()), !(!ce(e) || e.getMarker() !== "b" || e.isEmpty() || !t.getEditorState().read(() => {
    const i = se(e.getKey());
    return ce(i) && (i?.isEmpty() ?? !1);
  })) && e.clear();
}
function fg({ onStateChange: e }) {
  const [t] = ae(), [r, n] = de(t), i = ee(!1), s = ee(!1), o = ee(void 0), a = ee(void 0), c = me(() => {
    const l = O();
    let d;
    if (P(l)) {
      const u = l.anchor.getNode(), f = l.focus.getNode();
      let h = u.getKey() === "root" ? u : Ye(u, (y) => {
        const x = y.getParent();
        return x !== null && rb(x);
      });
      h === null && (h = u.getTopLevelElementOrThrow()), fs(h) && (h = Ye(u, ce) ?? h);
      const b = h.getKey(), p = r.getElementByKey(b), g = eT(u, f);
      if (g && Bx(g) && (d = g.getMarker()), p !== null && (ce(h) || gt(h) || Cs(h))) {
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
  }), r.registerCommand(nb, (l) => (i.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), st), r.registerCommand(ib, (l) => (s.current = l, e?.({
    canUndo: i.current,
    canRedo: s.current,
    blockMarker: o.current,
    contextMarker: a.current
  }), !1), st)), [c, r, e]), null;
}
function pg(e) {
  if (e.key === "Enter" && !e.shiftKey)
    return "insertParagraph";
  if (e.key === "Backspace")
    return "deleteBackward";
  if (e.key === "Delete")
    return "deleteForward";
  if (e.key.length === 1 && !e.ctrlKey && !e.metaKey)
    return "insertText";
}
function Xr(e) {
  return e ? ve(e) ? e : Ye(e, (r) => ve(r)) ?? void 0 : void 0;
}
function hg(e) {
  if (!P(e))
    return !1;
  const t = /* @__PURE__ */ new Set();
  for (const r of e.getNodes()) {
    const n = Xr(r);
    n && t.add(n.getKey());
  }
  return t.size > 1;
}
function Ll(e) {
  return P(e) && e.isCollapsed() && e.anchor.type === "element" || !P(e) && !Mo(e) ? !1 : e.getNodes().some((t) => ge(t));
}
function gg(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Xr(r);
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
function mg(e) {
  if (!P(e) || !e.isCollapsed())
    return !1;
  const { anchor: t } = e, r = t.getNode(), n = Xr(r);
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
function Od(e, t) {
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
function uo(e, t) {
  if (!P(e))
    return !1;
  const r = Xr(e.anchor.getNode());
  return r ? !!(t === "backward" ? r.getPreviousSibling() : r.getNextSibling()) : !1;
}
function ni(e) {
  return Ll(e) || hg(e);
}
function yg(e, t) {
  if (Ll(e) || hg(e))
    return !0;
  if (!P(e) || !e.isCollapsed())
    return !1;
  switch (t) {
    case "insertParagraph":
      return !0;
    case "deleteBackward":
      return gg(e) && uo(e, "backward") || Od(e, "backward");
    case "deleteForward":
      return mg(e) && uo(e, "forward") || Od(e, "forward");
    case "insertText":
      return !1;
  }
}
function jv(e, t) {
  if (!(!P(e) || !e.isCollapsed())) {
    if (t === "deleteBackward") {
      const r = sc(e, "backward");
      if (r)
        return { kind: "verse", node: r };
      if (gg(e) && uo(e, "backward")) {
        const n = Xr(e.anchor.getNode());
        if (ve(n))
          return { kind: "para", node: n };
      }
      return;
    }
    if (t === "deleteForward") {
      const r = sc(e, "forward");
      if (r)
        return { kind: "verse", node: r };
      if (mg(e) && uo(e, "forward")) {
        const i = Xr(e.anchor.getNode())?.getNextSibling();
        if (ve(i))
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
    return Mo(e) && e.has(t.key);
  if (t.kind === "selection") {
    if (!P(e) || e.isCollapsed() || !t.anchor || !t.focus)
      return !1;
    const { anchor: i, focus: s } = e;
    return i.key === t.anchor.key && i.offset === t.anchor.offset && i.type === t.anchor.type && s.key === t.focus.key && s.offset === t.focus.offset && s.type === t.focus.type;
  }
  if (!P(e) || e.isCollapsed())
    return !1;
  const r = Xr(e.anchor.getNode()), n = Xr(e.focus.getNode());
  return !!r && r.getKey() === t.key && !!n && n.getKey() === t.key;
}
function bg(e) {
  if (E(e)) {
    const t = e.getTextContentSize();
    e.select(t, t);
  } else L(e) ? e.selectEnd() : e.selectNext(0, 0);
}
function Vv(e) {
  const t = e.getPreviousSibling();
  if (!ve(t))
    return;
  const r = t.getLastChild(), n = e.getChildren();
  t.append(...n), e.remove(), r ? bg(r) : Ei(t) || t.selectStart();
}
function kg(e) {
  return ge(e) || Ge(e) ? [] : ve(e) ? e.getChildren().flatMap(kg) : [e];
}
function Wv(e) {
  const t = [];
  for (const r of e) {
    const n = kg(r);
    n.length !== 0 && (ve(r) && t.length > 0 && t.push(he(" ")), t.push(...n));
  }
  return t;
}
function qd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Hv(e) {
  if (Array.isArray(e)) return e;
}
function Gv(e, t) {
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
function Jv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yv(e, t) {
  return Hv(e) || Gv(e, t) || Xv(e, t) || Jv();
}
function Xv(e, t) {
  if (e) {
    if (typeof e == "string") return qd(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? qd(e, t) : void 0;
  }
}
const Tg = Object.entries, Rd = Object.setPrototypeOf, Qv = Object.isFrozen, Zv = Object.getPrototypeOf, eS = Object.getOwnPropertyDescriptor;
let nt = Object.freeze, at = Object.seal, Zn = Object.create, xg = typeof Reflect < "u" && Reflect, oc = xg.apply, ac = xg.construct;
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
const Yn = Xe(Array.prototype.forEach), tS = Xe(Array.prototype.lastIndexOf), $d = Xe(Array.prototype.pop), Xn = Xe(Array.prototype.push), rS = Xe(Array.prototype.splice), Kr = Array.isArray, Wi = Xe(String.prototype.toLowerCase), xa = Xe(String.prototype.toString), Ld = Xe(String.prototype.match), Fi = Xe(String.prototype.replace), Id = Xe(String.prototype.indexOf), nS = Xe(String.prototype.trim), iS = Xe(Number.prototype.toString), sS = Xe(Boolean.prototype.toString), Dd = typeof BigInt > "u" ? null : Xe(BigInt.prototype.toString), Ud = typeof Symbol > "u" ? null : Xe(Symbol.prototype.toString), et = Xe(Object.prototype.hasOwnProperty), zi = Xe(Object.prototype.toString), Ze = Xe(RegExp.prototype.test), hn = oS(TypeError);
function Xe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return oc(e, t, n);
  };
}
function oS(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ac(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wi;
  if (Rd && Rd(e, null), !Kr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const s = r(i);
      s !== i && (Qv(t) || (t[n] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function aS(e) {
  for (let t = 0; t < e.length; t++)
    et(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = Zn(null);
  for (const n of Tg(e)) {
    var r = Yv(n, 2);
    const i = r[0], s = r[1];
    et(e, i) && (Kr(s) ? t[i] = aS(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function cS(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return iS(e);
    case "boolean":
      return sS(e);
    case "bigint":
      return Dd ? Dd(e) : "0";
    case "symbol":
      return Ud ? Ud(e) : "Symbol()";
    case "undefined":
      return zi(e);
    case "function":
    case "object": {
      if (e === null)
        return zi(e);
      const t = e, r = Vt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : zi(n);
      }
      return zi(e);
    }
    default:
      return zi(e);
  }
}
function Vt(e, t) {
  for (; e !== null; ) {
    const n = eS(e, t);
    if (n) {
      if (n.get)
        return Xe(n.get);
      if (typeof n.value == "function")
        return Xe(n.value);
    }
    e = Zv(e);
  }
  function r() {
    return null;
  }
  return r;
}
function lS(e) {
  try {
    return Ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const Fd = nt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), _a = nt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ca = nt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), uS = nt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), va = nt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), dS = nt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), zd = nt(["#text"]), Kd = nt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Sa = nt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Bd = nt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Is = nt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), fS = at(/{{[\w\W]*|^[\w\W]*}}/g), pS = at(/<%[\w\W]*|^[\w\W]*%>/g), hS = at(/\${[\w\W]*/g), gS = at(/^data-[\-\w.\u00B7-\uFFFF]+$/), mS = at(/^aria-[\-\w]+$/), jd = at(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), yS = at(/^(?:\w+script|data):/i), bS = at(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), kS = at(/^html$/i), TS = at(/^[a-z][.\w]*(-[.\w]+)+$/i), Vd = at(/<[/\w!]/g), Wd = at(/<[/\w]/g), xS = at(/<\/no(script|embed|frames)/i), _S = at(/\/>/i), At = {
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
}, vS = function(t, r) {
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
}, Hd = function() {
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
}, Ur = function(t, r, n, i) {
  return et(t, r) && Kr(t[r]) ? pe(i.base ? ct(i.base) : {}, t[r], i.transform) : n;
};
function _g() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : CS();
  const t = (D) => _g(D);
  if (t.version = "3.4.13", t.removed = [], !e || !e.document || e.document.nodeType !== At.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, a = e.Element, c = e.NodeFilter, l = e.NamedNodeMap;
  l === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, u = e.trustedTypes, f = a.prototype, h = Vt(f, "cloneNode"), b = Vt(f, "remove"), p = Vt(f, "nextSibling"), g = Vt(f, "childNodes"), y = Vt(f, "parentNode"), x = Vt(f, "shadowRoot"), v = Vt(f, "attributes"), M = o && o.prototype ? Vt(o.prototype, "nodeType") : null, A = o && o.prototype ? Vt(o.prototype, "nodeName") : null, F = o && o.prototype ? Vt(o.prototype, "ownerDocument") : null;
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
    return U || (_ = vS(u, i), U = !0), _;
  }, tr = r, Le = tr.implementation, nn = tr.createNodeIterator, mr = tr.createDocumentFragment, Et = tr.getElementsByTagName, re = n.importNode;
  let N = Hd();
  t.isSupported = typeof Tg == "function" && typeof y == "function" && Le && Le.createHTMLDocument !== void 0;
  const G = fS, ue = pS, Ee = hS, Z = gS, Se = mS, yr = yS, Rt = bS, sn = TS;
  let We = jd, le = null;
  const yt = pe({}, [...Fd, ..._a, ...Ca, ...va, ...zd]);
  let _e = null;
  const br = pe({}, [...Kd, ...Sa, ...Bd, ...Is]);
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
  })), kr = null, Ni = null;
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
  let As = !0, Tr = !0, on = !1, Oi = !0, rr = !1, jt = !0, q = !1, V = !1, J = null, X = null, ke = !1, Qe = !1, nr = !1, an = !1, wi = !0, lu = !1;
  const uu = "user-content-";
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
  let du = null;
  const fu = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Jo = null;
  const pu = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ns = "http://www.w3.org/1998/Math/MathML", Os = "http://www.w3.org/2000/svg", sr = "http://www.w3.org/1999/xhtml";
  let Kn = sr, Yo = !1, Xo = null;
  const gy = pe({}, [Ns, Os, sr], xa), hu = nt(["mi", "mo", "mn", "ms", "mtext"]);
  let Qo = pe({}, hu);
  const gu = nt(["annotation-xml"]);
  let Zo = pe({}, gu);
  const my = pe({}, ["title", "style", "font", "a", "script"]);
  let qi = null;
  const yy = ["application/xhtml+xml", "text/html"], by = "text/html";
  let Ie = null, Bn = null;
  const ky = r.createElement("form"), mu = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, ea = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Bn && Bn === m)
      return;
    (!m || typeof m != "object") && (m = {}), m = ct(m), qi = // eslint-disable-next-line unicorn/prefer-includes
    yy.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? by : m.PARSER_MEDIA_TYPE, Ie = qi === "application/xhtml+xml" ? xa : Wi, le = Ur(m, "ALLOWED_TAGS", yt, {
      transform: Ie
    }), _e = Ur(m, "ALLOWED_ATTR", br, {
      transform: Ie
    }), Xo = Ur(m, "ALLOWED_NAMESPACES", gy, {
      transform: xa
    }), Jo = Ur(m, "ADD_URI_SAFE_ATTR", pu, {
      transform: Ie,
      base: pu
    }), du = Ur(m, "ADD_DATA_URI_TAGS", fu, {
      transform: Ie,
      base: fu
    }), ir = Ur(m, "FORBID_CONTENTS", Go, {
      transform: Ie
    }), kr = Ur(m, "FORBID_TAGS", ct({}), {
      transform: Ie
    }), Ni = Ur(m, "FORBID_ATTR", ct({}), {
      transform: Ie
    }), zn = et(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? ct(m.USE_PROFILES) : m.USE_PROFILES : !1, As = m.ALLOW_ARIA_ATTR !== !1, Tr = m.ALLOW_DATA_ATTR !== !1, on = m.ALLOW_UNKNOWN_PROTOCOLS || !1, Oi = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, rr = m.SAFE_FOR_TEMPLATES || !1, jt = m.SAFE_FOR_XML !== !1, q = m.WHOLE_DOCUMENT || !1, Qe = m.RETURN_DOM || !1, nr = m.RETURN_DOM_FRAGMENT || !1, an = m.RETURN_TRUSTED_TYPE || !1, ke = m.FORCE_BODY || !1, wi = m.SANITIZE_DOM !== !1, lu = m.SANITIZE_NAMED_PROPS || !1, Ho = m.KEEP_CONTENT !== !1, Ps = m.IN_PLACE || !1, We = lS(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : jd, Kn = typeof m.NAMESPACE == "string" ? m.NAMESPACE : sr, Qo = et(m, "MATHML_TEXT_INTEGRATION_POINTS") && m.MATHML_TEXT_INTEGRATION_POINTS && typeof m.MATHML_TEXT_INTEGRATION_POINTS == "object" ? ct(m.MATHML_TEXT_INTEGRATION_POINTS) : pe({}, hu), Zo = et(m, "HTML_INTEGRATION_POINTS") && m.HTML_INTEGRATION_POINTS && typeof m.HTML_INTEGRATION_POINTS == "object" ? ct(m.HTML_INTEGRATION_POINTS) : pe({}, gu);
    const C = et(m, "CUSTOM_ELEMENT_HANDLING") && m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING == "object" ? ct(m.CUSTOM_ELEMENT_HANDLING) : Zn(null);
    if (Ne = Zn(null), et(C, "tagNameCheck") && mu(C.tagNameCheck) && (Ne.tagNameCheck = C.tagNameCheck), et(C, "attributeNameCheck") && mu(C.attributeNameCheck) && (Ne.attributeNameCheck = C.attributeNameCheck), et(C, "allowCustomizedBuiltInElements") && typeof C.allowCustomizedBuiltInElements == "boolean" && (Ne.allowCustomizedBuiltInElements = C.allowCustomizedBuiltInElements), at(Ne), rr && (Tr = !1), nr && (Qe = !0), zn && (le = pe({}, zd), _e = Zn(null), zn.html === !0 && (pe(le, Fd), pe(_e, Kd)), zn.svg === !0 && (pe(le, _a), pe(_e, Sa), pe(_e, Is)), zn.svgFilters === !0 && (pe(le, Ca), pe(_e, Sa), pe(_e, Is)), zn.mathMl === !0 && (pe(le, va), pe(_e, Bd), pe(_e, Is))), bt.tagCheck = null, bt.attributeCheck = null, et(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? bt.tagCheck = m.ADD_TAGS : Kr(m.ADD_TAGS) && (le === yt && (le = ct(le)), pe(le, m.ADD_TAGS, Ie))), et(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? bt.attributeCheck = m.ADD_ATTR : Kr(m.ADD_ATTR) && (_e === br && (_e = ct(_e)), pe(_e, m.ADD_ATTR, Ie))), et(m, "ADD_URI_SAFE_ATTR") && Kr(m.ADD_URI_SAFE_ATTR) && pe(Jo, m.ADD_URI_SAFE_ATTR, Ie), et(m, "FORBID_CONTENTS") && Kr(m.FORBID_CONTENTS) && (ir === Go && (ir = ct(ir)), pe(ir, m.FORBID_CONTENTS, Ie)), et(m, "ADD_FORBID_CONTENTS") && Kr(m.ADD_FORBID_CONTENTS) && (ir === Go && (ir = ct(ir)), pe(ir, m.ADD_FORBID_CONTENTS, Ie)), Ho && (le["#text"] = !0), q && pe(le, ["html", "head", "body"]), le.table && (pe(le, ["tbody"]), delete kr.tbody), m.TRUSTED_TYPES_POLICY) {
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
  }, yu = pe({}, [..._a, ...Ca, ...uS]), bu = pe({}, [...va, ...dS]), Ty = function(m, C, $) {
    return C.namespaceURI === sr ? m === "svg" : C.namespaceURI === Ns ? m === "svg" && ($ === "annotation-xml" || Qo[$]) : !!yu[m];
  }, xy = function(m, C, $) {
    return C.namespaceURI === sr ? m === "math" : C.namespaceURI === Os ? m === "math" && Zo[$] : !!bu[m];
  }, _y = function(m, C, $) {
    return C.namespaceURI === Os && !Zo[$] || C.namespaceURI === Ns && !Qo[$] ? !1 : !bu[m] && (my[m] || !yu[m]);
  }, Cy = function(m) {
    let C = y(m);
    (!C || !C.tagName) && (C = {
      namespaceURI: Kn,
      tagName: "template"
    });
    const $ = Wi(m.tagName), H = Wi(C.tagName);
    return Xo[m.namespaceURI] ? m.namespaceURI === Os ? Ty($, C, H) : m.namespaceURI === Ns ? xy($, C, H) : m.namespaceURI === sr ? _y($, C, H) : !!(qi === "application/xhtml+xml" && Xo[m.namespaceURI]) : !1;
  }, Lr = function(m) {
    Xn(t.removed, {
      element: m
    });
    try {
      y(m).removeChild(m);
    } catch {
      if (b(m), !y(m))
        throw hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ws = function(m) {
    Ri(m);
    const C = g(m);
    if (C) {
      const H = [];
      Yn(C, (Y) => {
        Xn(H, Y);
      }), Yn(H, (Y) => {
        try {
          b(Y);
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
          Lr(C);
        } catch {
        }
      else
        try {
          C.setAttribute(m, "");
        } catch {
        }
  }, vy = function(m) {
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
  }, Ri = function(m) {
    const C = [m];
    for (; C.length > 0; ) {
      const $ = C.pop();
      (M ? M($) : $.nodeType) === At.element && vy($);
      const Y = g($);
      if (Y)
        for (let ie = Y.length - 1; ie >= 0; --ie)
          C.push(Y[ie]);
    }
  }, Sy = function(m) {
    if (!jt)
      return;
    const C = [m];
    for (; C.length > 0; ) {
      const $ = C.pop(), H = M ? M($) : $.nodeType;
      if (H === At.processingInstruction || H === At.comment && Ze(Wd, $.data)) {
        try {
          b($);
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
  }, ku = function(m) {
    let C = null, $ = null;
    if (ke)
      m = "<remove></remove>" + m;
    else {
      const ie = Ld(m, /^[\r\n\t ]+/);
      $ = ie && ie[0];
    }
    qi === "application/xhtml+xml" && Kn === sr && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const H = B ? Q(m) : m;
    if (Kn === sr)
      try {
        C = new d().parseFromString(H, qi);
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
  }, Tu = function(m) {
    const C = F ? F(m) : m.ownerDocument;
    return nn.call(
      C || m,
      m,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, qs = function(m) {
    return m = Fi(m, G, " "), m = Fi(m, ue, " "), m = Fi(m, Ee, " "), m;
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
  }, $i = function(m) {
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
  const My = function(m, C) {
    return !!(jt && m.hasChildNodes() && !$i(m.firstElementChild) && Ze(Vd, m.textContent) && Ze(Vd, m.innerHTML) || jt && m.namespaceURI === sr && C === "style" && $i(m.firstElementChild) || m.nodeType === At.processingInstruction || jt && m.nodeType === At.comment && Ze(Wd, m.data));
  }, Ey = function(m, C, $) {
    if (!kr[C] && vu(C) && (Ne.tagNameCheck instanceof RegExp && Ze(Ne.tagNameCheck, C) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(C)))
      return !1;
    if (Ho && !ir[C]) {
      const H = y(m), Y = g(m);
      if (Y && H) {
        const ie = Y.length;
        for (let Te = ie - 1; Te >= 0; --Te) {
          const De = m === $ ? h(Y[Te], !0) : Y[Te];
          H.insertBefore(De, p(m));
        }
      }
    }
    return Lr(m), !0;
  }, xu = function(m, C, $, H) {
    return m.length === 0 ? C : C === $ || C === H ? ct(C) : C;
  }, _u = function(m, C) {
    if (or(N.beforeSanitizeElements, m, null), m !== C && y(m) === null)
      return Ps && Ri(m), !0;
    if (Rs(m))
      return Lr(m), !0;
    const $ = Ie(A ? A(m) : m.nodeName);
    if (le = xu(N.uponSanitizeElement, le, yt, J), or(N.uponSanitizeElement, m, {
      tagName: $,
      allowedTags: le
    }), m !== C && y(m) === null)
      return Ps && Ri(m), !0;
    if (My(m, $))
      return Lr(m), !0;
    if (kr[$] || !(bt.tagCheck instanceof Function && bt.tagCheck($)) && !le[$]) {
      const Y = Ey(m, $, C);
      return Y === !1 && or(N.afterSanitizeElements, m, null), Y;
    }
    if ((M ? M(m) : m.nodeType) === At.element && !Cy(m) || ($ === "noscript" || $ === "noembed" || $ === "noframes") && Ze(xS, m.innerHTML))
      return Lr(m), !0;
    if (rr && m.nodeType === At.text) {
      const Y = qs(m.textContent);
      m.textContent !== Y && (Xn(t.removed, {
        element: m.cloneNode()
      }), m.textContent = Y);
    }
    return or(N.afterSanitizeElements, m, null), !1;
  }, Cu = function(m, C, $) {
    if (Ni[C] || jt && C === "patchsrc" || jt && C === "for" && m !== "label" && m !== "output" || wi && (C === "id" || C === "name") && ($ in r || $ in ky))
      return !1;
    const H = _e[C] || bt.attributeCheck instanceof Function && bt.attributeCheck(C, m);
    if (!(Tr && Ze(Z, C))) {
      if (!(As && Ze(Se, C))) {
        if (H) {
          if (!Jo[C]) {
            if (!Ze(We, Fi($, Rt, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && m !== "script" && Id($, "data:") === 0 && du[m])) {
                if (!(on && !Ze(yr, Fi($, Rt, "")))) {
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
          !(vu(m) && (Ne.tagNameCheck instanceof RegExp && Ze(Ne.tagNameCheck, m) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(m)) && (Ne.attributeNameCheck instanceof RegExp && Ze(Ne.attributeNameCheck, C) || Ne.attributeNameCheck instanceof Function && Ne.attributeNameCheck(C, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          C === "is" && Ne.allowCustomizedBuiltInElements && (Ne.tagNameCheck instanceof RegExp && Ze(Ne.tagNameCheck, $) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck($)))
        ) return !1;
      }
    }
    return !0;
  }, Ay = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), vu = function(m) {
    return !Ay[Wi(m)] && Ze(sn, m);
  }, Py = function(m, C, $, H) {
    if (B && typeof u == "object" && typeof u.getAttributeType == "function" && !$)
      switch (u.getAttributeType(m, C)) {
        case "TrustedHTML":
          return Q(H);
        case "TrustedScriptURL":
          return $e(H);
      }
    return H;
  }, Ny = function(m, C, $, H) {
    try {
      $ ? m.setAttributeNS($, C, H) : m.setAttribute(C, H), Rs(m) ? Lr(m) : $d(t.removed);
    } catch {
      cn(C, m);
    }
  }, Su = function(m) {
    or(N.beforeSanitizeAttributes, m, null);
    const C = m.attributes;
    if (!C || Rs(m))
      return;
    _e = xu(N.uponSanitizeAttribute, _e, br, X);
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
      let dt = Te === "value" ? na : nS(na);
      if ($.attrName = Tt, $.attrValue = dt, $.keepAttr = !0, $.forceKeepAttr = void 0, or(N.uponSanitizeAttribute, m, $), dt = $.attrValue, lu && (Tt === "id" || Tt === "name") && Id(dt, uu) !== 0 && (cn(Te, m), dt = uu + dt), jt && Ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        cn(Te, m);
        continue;
      }
      if (Tt === "attributename" && Ld(dt, "href")) {
        cn(Te, m);
        continue;
      }
      if (!$.forceKeepAttr) {
        if (!$.keepAttr) {
          cn(Te, m);
          continue;
        }
        if (!Oi && Ze(_S, dt)) {
          cn(Te, m);
          continue;
        }
        if (rr && (dt = qs(dt)), !Cu(Y, Tt, dt)) {
          cn(Te, m);
          continue;
        }
        dt = Py(Y, Tt, De, dt), dt !== na && Ny(m, Te, De, dt);
      }
    }
    or(N.afterSanitizeAttributes, m, null);
  }, $s = function(m) {
    let C = null;
    const $ = Tu(m);
    for (or(N.beforeSanitizeShadowDOM, m, null); C = $.nextNode(); )
      if (or(N.uponSanitizeShadowNode, C, null), _u(C, m), Su(C), jn(C.content) && $s(C.content), (M ? M(C) : C.nodeType) === At.element) {
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
    if (Yo = !D, Yo && (D = "<!-->"), typeof D != "string" && !$i(D) && (D = cS(D), typeof D != "string"))
      throw hn("dirty is not a string, aborting");
    if (!t.isSupported)
      return D;
    V ? (le = J, _e = X) : ea(m), (N.uponSanitizeElement.length > 0 || N.uponSanitizeAttribute.length > 0) && (le = ct(le)), N.uponSanitizeAttribute.length > 0 && (_e = ct(_e)), t.removed = [];
    const ie = Ps && typeof D != "string" && $i(D);
    if (ie) {
      Sy(D);
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
    } else if ($i(D))
      C = ku("<!---->"), $ = C.ownerDocument.importNode(D, !0), $.nodeType === At.element && $.nodeName === "BODY" || $.nodeName === "HTML" ? C = $ : C.appendChild($), ra($);
    else {
      if (!Qe && !rr && !q && // eslint-disable-next-line unicorn/prefer-includes
      D.indexOf("<") === -1)
        return B && an ? Q(D) : D;
      if (C = ku(D), !C)
        return Qe ? null : an ? j : "";
    }
    C && ke && Lr(C.firstChild);
    const Te = ie ? D : C;
    try {
      const kt = Tu(Te);
      for (; H = kt.nextNode(); )
        _u(H, Te), Su(H), jn(H.content) && $s(H.content);
    } catch (kt) {
      throw ie && (ws(D), Yn(t.removed, (Tt) => {
        Tt.element && Ri(Tt.element);
      })), kt;
    }
    if (ie)
      return Yn(t.removed, (kt) => {
        kt.element && Ri(kt.element);
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
    return q && le["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && Ze(kS, C.ownerDocument.doctype.name) && (De = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + De), rr && (De = qs(De)), B && an ? Q(De) : De;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ea(D), V = !0, J = le, X = _e;
  }, t.clearConfig = function() {
    Bn = null, V = !1, J = null, X = null, B = _, j = "";
  }, t.isValidAttribute = function(D, m, C) {
    Bn || ea({});
    const $ = Ie(D), H = Ie(m);
    return Cu($, H, C);
  }, t.addHook = function(D, m) {
    typeof m == "function" && et(N, D) && Xn(N[D], m);
  }, t.removeHook = function(D, m) {
    if (et(N, D)) {
      if (m !== void 0) {
        const C = tS(N[D], m);
        return C === -1 ? void 0 : rS(N[D], C, 1)[0];
      }
      return $d(N[D]);
    }
  }, t.removeHooks = function(D) {
    et(N, D) && (N[D] = []);
  }, t.removeAllHooks = function() {
    N = Hd();
  }, t;
}
var SS = _g();
function MS({ structureProtectionMode: e = "off" }) {
  const [t] = ae(), r = ee(void 0), [n, i] = de(void 0), s = me((o) => {
    r.current = o, i(o);
  }, []);
  return z(() => {
    if (e === "off")
      return;
    const o = (h) => {
      const b = pg(h);
      if (!b)
        return !1;
      const p = O();
      return e === "protected" ? p && yg(p, b) ? (h.preventDefault(), !0) : !1 : b !== "deleteBackward" && b !== "deleteForward" ? !1 : a(b, h);
    }, a = (h, b) => {
      const p = O(), g = r.current;
      if (g && p && wd(p, g)) {
        if (s(void 0), b.preventDefault(), h !== g.intent)
          return !0;
        const x = se(g.key) ?? void 0;
        if (g.kind === "verse") {
          if (x) {
            const v = x.getParent(), M = x.getPreviousSibling(), A = x.getNextSibling();
            x.remove(), M ? bg(M) : A && E(A) ? A.select(0, 0) : v?.selectStart();
          }
        } else g.kind === "selection" ? P(p) && p.removeText() : ve(x) && Vv(x);
        return !0;
      }
      if (!p)
        return !1;
      const y = jv(p, h);
      if (y) {
        if (y.kind === "verse") {
          const x = Vf();
          x.add(y.node.getKey()), si(x);
        } else {
          const x = Rc();
          x.anchor.set(y.node.getKey(), 0, "element"), x.focus.set(y.node.getKey(), y.node.getChildrenSize(), "element"), si(x);
        }
        return s({ key: y.node.getKey(), kind: y.kind, intent: h }), b.preventDefault(), !0;
      }
      if (P(p) && !p.isCollapsed() && Ll(p)) {
        const x = p.getNodes().filter(ge).map((A) => A.getKey()), { anchor: v, focus: M } = p;
        return s({
          kind: "selection",
          intent: h,
          key: x[0],
          anchor: { key: v.key, offset: v.offset, type: v.type },
          focus: { key: M.key, offset: M.offset, type: M.type }
        }), b.preventDefault(), !0;
      }
      return !1;
    }, c = (h) => {
      if (e !== "protected")
        return !1;
      const b = O();
      return !b || !ni(b) ? !1 : (h instanceof Event && h.preventDefault(), !0);
    }, l = (h, b) => {
      if (!h)
        return !1;
      const p = SS.sanitize(h), g = new DOMParser().parseFromString(p, "text/html"), y = Wv(Nb(t, g)), x = O();
      return P(x) && x.insertNodes(y), b.preventDefault(), !0;
    }, d = (h) => {
      if (e !== "protected")
        return !1;
      const b = O();
      return b && ni(b) ? (h.preventDefault(), !0) : l(h.clipboardData?.getData("text/html"), h);
    }, u = (h) => {
      if (e !== "protected")
        return !1;
      const b = O();
      return b && ni(b) ? (h.preventDefault(), !0) : l(h.dataTransfer?.getData("text/html"), h);
    }, f = () => {
      const h = r.current;
      h && t.getEditorState().read(() => {
        wd(O(), h) || s(void 0);
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
      t.registerCommand(sb, c, Oe),
      t.registerCommand(Lc, u, Oe),
      t.registerCommand(Gs, c, Oe),
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
const PN = {
  ltr: "Left-to-right",
  rtl: "Right-to-left",
  auto: "Automatic"
};
function ES({ textDirection: e }) {
  const [t] = ae();
  return AS(t, e), null;
}
function AS(e, t) {
  z(() => (Gd(e, t), e.registerUpdateListener(({ dirtyElements: r }) => {
    r.size > 0 && Gd(e, t);
  })), [e, t]);
}
function Gd(e, t) {
  if (t === "auto")
    return;
  const r = e.getRootElement();
  r && (r.dir = t);
  const n = e._config.theme.placeholder, i = document.getElementsByClassName(n)[0];
  i && (i.dir = t);
}
function PS() {
  const [e] = ae();
  return NS(e), null;
}
function NS(e) {
  z(() => {
    if (!e.hasNodes([ye, St, Ae, Be, pt]))
      throw new Error("TextSpacingPlugin: CharNode, ImmutableVerseNode, NoteNode, TextNode or VerseNode not registered on editor!");
    return je(
      e.registerNodeTransform(Be, OS),
      e.registerNodeTransform(Be, (t) => wS(t, e)),
      e.registerNodeTransform(pt, Jd),
      e.registerNodeTransform(St, Jd),
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
function OS(e) {
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
  if (ge(e.getPreviousSibling()) && (t === "" || t === " ")) {
    t !== "" && e.setTextContent("");
    return;
  }
  ge(r) && hl(e);
}
function wS(e, t) {
  const r = e.getParent();
  !Fe(r) || !e.isAttached() || Qa(t, e.getKey()) && !Qa(t, r.getKey()) && r.insertAfter(e);
}
function Jd(e) {
  if (!e.isAttached())
    return;
  let t = e.getPreviousSibling();
  for (; Ce(t); )
    t = t.getLastChild();
  (I(t) || E(t) && Ce(t.getParent())) && e.insertBefore(he(" "));
}
function Il(e) {
  if (!K(e) || e.getIsCollapsed() !== !0)
    return;
  const t = e.getParent();
  return !t || t.isInline() || e.getNextSiblings().some((n) => !Gc(n)) ? void 0 : e;
}
function qS(e) {
  if (e.type !== "element")
    return;
  const t = e.getNode();
  if (L(t))
    return t.getChildAtIndex(e.offset - 1) ?? void 0;
}
function RS() {
  const e = O();
  if (!(!P(e) || !e.isCollapsed()))
    return Il(qS(e.anchor));
}
function $S(e) {
  const t = O();
  let r;
  return P(t) ? t.isCollapsed() && (r = t.anchor.getNode()) : t || (r = Cg(e.target)), r ? Il(Ye(r, K)) : void 0;
}
function Cg(e) {
  const t = ob(e)?.anchorNode;
  if (Bf(t))
    return Ti(t) ?? void 0;
}
function LS(e) {
  if (O())
    return;
  const t = Cg(e);
  return t ? Il(Ye(t, K)) : void 0;
}
function IS() {
  const [e] = ae(), t = dg(RS);
  return z(() => {
    const r = (n) => {
      Vr(Wr), t(n);
    };
    return je(e.registerCommand(dr, () => {
      const n = LS(e.getRootElement());
      return n && r(n), !1;
    }, kn), e.registerCommand(Eo, (n) => {
      const i = $S(n);
      return i && r(i), !1;
    }, kn));
  }, [e, t]), null;
}
function DS({ trigger: e, scriptureReference: t, contextMarker: r, getMarkerAction: n }) {
  const { markersMenuItems: i } = rC({
    scriptureReference: t,
    contextMarker: r,
    getMarkerAction: n
  });
  return S(tC, { trigger: e, items: i });
}
function US({ trigger: e, scrRef: t, contextMarker: r, getMarkerAction: n, editableHarness: i }) {
  const { book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l } = t, d = Ke(() => ({ book: s, chapterNum: o, verseNum: a, verse: c, versificationStr: l }), [s, o, a, c, l]);
  return i ? S(KS, { trigger: e, harness: i }) : S(DS, { trigger: e, scriptureReference: d, contextMarker: r, getMarkerAction: n });
}
const FS = [" ", "*"];
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
function KS({ trigger: e, harness: t }) {
  const [r] = ae(), [n, i] = de(void 0), s = ee({ query: "", options: [] }), o = ee(0), a = me((f, h, b) => {
    const p = h.find((g) => g.kind === "note" && g.marker === f);
    if (p) {
      t.apply(p, { trigger: "backslash", literalPrefixLanded: !1 });
      return;
    }
    r.update(() => {
      const g = O();
      P(g) && g.insertText(`${e}${f}${b ? " " : ""}`);
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
        return p ? (a(p, n.items, !1), Wf(() => {
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
      const b = s.current.query;
      if (n.hasTextSelection) {
        const p = n.items.find((g) => g.marker === b);
        return p && t.apply(p, { trigger: "backslash", literalPrefixLanded: !1 }), !0;
      }
      return a(b, n.items, !0), !0;
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
  }, Oe), r.registerCommand(Hf, (f) => {
    if (n || f === null || f.shiftKey)
      return !1;
    const h = t.getContext();
    return !h || h.noteMarker || h.inMarkerText ? !1 : (f.preventDefault(), o.current += 1, i({
      trigger: "enter",
      hasTextSelection: !1,
      items: t.getEnterItems(h),
      session: o.current
    }), !0);
  }, jr)), [r, e, t, n, a]);
  const c = me(() => i(void 0), []), l = me((f, h) => {
    s.current = { query: f, options: h };
  }, []), d = me((f) => {
    const { markerMenuItem: h, applyOpts: b } = f;
    t.apply(h, b);
  }, [t]), u = Ke(() => n?.items.map((f) => (
    // `literalPrefixLanded` is constant `false` under the active palette: the trigger never
    // lands, so an item commit never has a literal prefix to clean up. The field stays in
    // the apply contract because hosts whose own palettes DO land literals still pass true.
    zS(f, { trigger: n.trigger, literalPrefixLanded: !1 })
  )), [n]);
  return n && S(jh, { isOpen: !0, children: ({ placement: f }) => S(
    Hh,
    { options: u ?? [], onSelectOption: d, onClose: c, onFilterChange: l, inverse: f === "top-start", menuOpenKey: e, passthroughKeys: n.trigger === "backslash" ? FS : void 0 },
    n.session
  ) });
}
function vg(e) {
  return e.replaceAll(R, "~").replace(/ {2,}/g, (r) => R.repeat(r.length));
}
function BS(e) {
  return e.replaceAll(R, " ").replaceAll("~", R);
}
function jS(e) {
  return e.replace(/ {2,}/g, " ");
}
let fo;
function VS(e) {
  e && (fo = e);
}
function Sg(e) {
  return Es(e);
}
function WS(e, t) {
  return e.isEmpty() ? zf : Mg(e.toJSON(), t);
}
function Mg(e, t) {
  if (!e.root || !e.root.children) return;
  const r = e.root.children;
  if (r.length === 1 && No(r[0]) && (!r[0].children || r[0].children.length === 0))
    return zf;
  if (r.some(Mx)) {
    fo?.error(
      "Block verse layout is not round-trippable to USJ. VerseBlockNode is read-only view state; use the source USJ instead."
    );
    return;
  }
  const n = Eg(r), i = Wt(n, t);
  return i ? { type: Cr, version: _r, content: i } : void 0;
}
function HS(e, t) {
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
function GS(e) {
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
function JS(e, t) {
  const { marker: r, sid: n, altnumber: i, pubnumber: s, unknownAttributes: o } = e, a = t && typeof t[0] == "string" ? t[0] : void 0;
  let { number: c } = e;
  return c = Gp(r, a, c), Pe({
    type: qt.getType(),
    marker: r,
    number: c,
    sid: n,
    altnumber: i,
    pubnumber: s,
    ...o
  });
}
function YS(e) {
  const { marker: t, sid: r, altnumber: n, pubnumber: i, unknownAttributes: s } = e, { text: o } = e;
  let { number: a } = e;
  return a = Gp(t, o, a), Pe({
    type: pt.getType(),
    marker: t,
    number: a,
    sid: r,
    altnumber: n,
    pubnumber: i,
    ...s
  });
}
function XS(e, t, r) {
  const { type: n, marker: i, unknownAttributes: s } = e, o = i === "" ? void 0 : i;
  if (r?.markerMode === "editable" && !Sg(r) && t) {
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
function QS(e, t) {
  const { type: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function ZS(e, t) {
  const { unknownAttributes: r } = e;
  return Pe({ type: kh, ...r, content: t });
}
function eM(e, t) {
  const { marker: r, unknownAttributes: n } = e;
  return Pe({ type: _h, marker: r, ...n, content: t });
}
function tM(e, t) {
  const { marker: r, align: n, colspan: i, unknownAttributes: s } = e;
  return Pe({
    type: vh,
    marker: r,
    align: n,
    colspan: i,
    ...s,
    content: t
  });
}
function rM(e, t) {
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
    ...rh({ sid: n, eid: i, ...s }, o)
  });
}
function nM(e) {
  return e.text;
}
function iM(e, t) {
  const { tag: r, marker: n, unknownAttributes: i } = e;
  return Pe({
    type: r,
    marker: n,
    ...i,
    content: t
  });
}
function sM(e) {
  const { marker: t } = e;
  return {
    type: ro,
    marker: t === "" ? void 0 : t
  };
}
function Yd(e, t) {
  const r = e[e.length - 1];
  r && typeof r == "string" ? e[e.length - 1] = r + t : e.push(t);
}
function oM(e, t, r, n, i) {
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
  (!n || !Cp(n)) && t.forEach((l) => {
    const d = ei({
      type: s,
      marker: ti,
      eid: l
    });
    i.push(d);
  });
}
function Wt(e, t, r, n = !1) {
  const i = [];
  let s, o = [];
  return e.forEach((a, c) => {
    const l = a, d = a, u = a, f = a, h = a, b = a, p = a, g = a;
    switch (a.type) {
      case Kt.getType():
        i.push(
          HS(
            l,
            Wt(l.children, t)
          )
        );
        break;
      case hr.getType():
        i.push(GS(a));
        break;
      case qt.getType():
        i.push(
          JS(
            d,
            Wt(d.children, t)
          )
        );
        break;
      case St.getType():
      case pt.getType():
        i.push(YS(a));
        break;
      case ye.getType():
        i.push(
          XS(
            u,
            Wt(u.children, t, void 0, !0),
            t
          )
        );
        break;
      case rt.getType():
        i.push(
          QS(
            f,
            Wt(f.children, t)
          )
        );
        break;
      case In.getType():
        i.push(
          ZS(
            a,
            Wt(a.children, t)
          )
        );
        break;
      case Ci.getType():
        i.push(
          eM(
            a,
            Wt(a.children, t)
          )
        );
        break;
      case vi.getType():
        i.push(
          tM(
            a,
            Wt(a.children, t)
          )
        );
        break;
      case Ae.getType():
        i.push(
          rM(
            h,
            Wt(h.children, t, h.caller)
          )
        );
        break;
      case wr.getType():
      case Or.getType():
      case Jt.getType():
      case Gf.getType():
      case gr.getType():
        break;
      case tt.getType():
        if (s = Wt(
          p.children,
          t,
          r,
          n
        ), s) {
          const y = p.typedIDs[Br];
          if (y)
            oM(s, y, o, e[c + 1], i), o = y;
          else {
            const x = s.shift();
            x && (typeof x == "string" ? Yd(i, x) : i.push(x)), s.length > 0 && i.push(...s);
          }
        }
        break;
      case Yt.getType():
        i.push(ei(a));
        break;
      case Be.getType():
        if (b.text && // Drop a bare caret host (EmptyVerseCaretGuardPlugin). A legitimate ZWSP inside real text
        // (Thai/Khmer line breaks) is not placeholder-only, so it still passes and is preserved.
        !vs(b.text) && // A byte test, not (only) the separator state tag, and deliberately so: a lone-NBSP
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
        b.text !== R && !b.text.startsWith(Uc) && // Char-span attribute display runs (bare `|…`, no NBSP prefix — see
        // usj-editor.adaptor's `addCharAttributes`) carry no NBSP prefix to strip against, so
        // the prefix check above can't catch them; the textType state tag is the only signal.
        b[_s]?.textType !== "attribute" && (!r || b.text !== Ot(r))) {
          let y = nM(b);
          Sg(t) && (n && y.startsWith(R) && (y = y.slice(1)), y = jS(BS(y))), Yd(i, y);
        }
        break;
      case $n.getType():
        i.push(
          iM(
            g,
            Wt(g.children, t)
          )
        );
        break;
      case $r.getType():
        i.push(sM(a));
        break;
      case Si.getType():
        fo?.error("Block verse layout is not round-trippable to USJ; skipping the block.");
        break;
      default:
        fo?.error(`Unexpected node type '${a.type}'!`);
    }
  }), i && i.length > 0 ? i : void 0;
}
function Eg(e) {
  const t = e.findIndex((r) => No(r));
  if (t >= 0) {
    const r = e.slice(0, t), n = e[t].children, i = Eg(e.slice(t + 1));
    e = [...r, ...n, ...i];
  }
  return e;
}
const js = {
  initialize: VS,
  deserializeEditorState: WS
}, aM = /^sd\d*$/, cM = /* @__PURE__ */ new Set([
  ...Object.entries(Da).filter(
    ([e, t]) => t.category === T.TitlesHeadings && t.type === k.Paragraph && !aM.test(e)
  ).map(([e]) => e),
  "qa"
]);
function lM(e, t) {
  const r = [];
  let n;
  for (const i of e) {
    if (Np(i) || jp(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (!Zk(i)) {
      t && po(i) && t.warn(
        `Verses inside a '${i.type}' are not grouped into blocks; the whole node stays with the surrounding verse.`
      ), n ? n.children.push(i) : r.push(i);
      continue;
    }
    if (Hc(i) && cM.has(i.marker) && !po(i)) {
      n = void 0, r.push(i);
      continue;
    }
    if (i.children.length === 0) {
      n ? n.children.push(i) : r.push(i);
      continue;
    }
    Ag(i.children, t).forEach((s) => {
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
function Ag(e, t) {
  const r = [{ nodes: [] }], n = (i) => r[r.length - 1].nodes.push(i);
  return e.forEach((i) => {
    if (Pg(i)) {
      r.push({ verse: i, nodes: [i] });
      return;
    }
    if (Cp(i)) {
      const s = Ag(i.children, t), [o, ...a] = s;
      o.nodes.length > 0 && n(Xd(i, o.nodes)), a.forEach((c) => {
        r.push({ verse: c.verse, nodes: [Xd(i, c.nodes)] });
      });
      return;
    }
    t && po(i) && t?.warn(
      `Verse marker nested inside a '${i.type}' node was not grouped into a block.`
    ), n(i);
  }), r;
}
function Xd(e, t) {
  return { ...e, children: t };
}
function Pg(e) {
  return qh(e) && e.number !== "";
}
function po(e) {
  const t = e.children;
  return Array.isArray(t) ? t.some((r) => Pg(r) || po(r)) : !1;
}
function uM(e, t) {
  if (t.length !== 0)
    return { ...e, children: t };
}
function dM(e) {
  return {
    type: no,
    number: e.number,
    children: [],
    direction: null,
    format: "",
    indent: 0,
    version: Nh
  };
}
const Qd = Og([]), fM = {
  type: Gf.getType(),
  version: 1
};
let Dl = [], te, Mn, Ng, vt;
function pM(e, t) {
  Dl = [], mM(e), yM(t);
}
function hM(e = 0) {
}
function gM(e, t) {
  te = t ?? pi();
  let r;
  return e ? (e.type !== Cr && vt?.warn(`This USJ type '${e.type}' didn't match the expected type '${Cr}'.`), e.version !== _r && vt?.warn(
    `This USJ version '${e.version}' didn't match the expected version '${_r}'.`
  ), e.content.length > 0 ? (r = dc(Fr(e.content)), hs(te) && (r = lM(r, vt))) : r = [Qd]) : r = [Qd], Ng?.(Dl), {
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
  e && (Mn = e), e?.addMissingComments && (Ng = e.addMissingComments);
}
function yM(e) {
  e && (vt = e);
}
function Ul() {
  return Es(te);
}
function bM(e) {
  return !e || e.length !== 1 || typeof e[0] != "string" ? "" : e[0];
}
function kM(e) {
  let { marker: t } = e;
  t !== os && vt?.warn(`Unexpected book marker '${t}'!`), t = t ?? os;
  const { code: r } = e;
  (!r || !Kt.isValidBookCode(r)) && vt?.warn(`Unexpected book code '${r}'!`);
  const n = [];
  te?.markerMode === "editable" || te?.markerMode === "visible" ? n.push(
    _t("marker", qe(t) + " " + r + R)
  ) : te?.hasGutterParaMarkers && n.push(_t("marker", qe(t) + R, !0));
  const i = bM(e.content);
  i && n.push(ut(Ul() ? vg(i) : i));
  const s = ze(e, wk);
  return Pe({
    type: Kt.getType(),
    marker: t,
    code: r ?? "",
    unknownAttributes: s,
    children: n,
    direction: null,
    format: "",
    indent: 0,
    version: Ap
  });
}
function TM(e) {
  let { marker: t } = e;
  t !== Zs && vt?.warn(`Unexpected chapter marker '${t}'!`), t = t ?? Zs;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, o = ze(e, qk);
  let a;
  te?.markerMode === "visible" && (a = !0);
  const c = [
    ut(Ft(t, r) ?? "")
  ];
  return te?.markerMode === "editable" && IM(i, s, c), te?.markerMode === "editable" ? Pe({
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
    version: Op
  }) : Pe({
    type: hr.getType(),
    marker: t,
    number: r ?? "",
    showMarker: a,
    sid: n,
    altnumber: i,
    pubnumber: s,
    unknownAttributes: o,
    version: Lp
  });
}
function xM(e) {
  let { marker: t } = e;
  t !== eo && vt?.warn(`Unexpected verse marker '${t}'!`), t = t ?? eo;
  const { number: r, sid: n, altnumber: i, pubnumber: s } = e, a = (dC(te) ?? St).getType(), c = te?.markerMode === "editable" ? zp : wh;
  let l, d;
  te?.markerMode === "editable" ? l = Ft(t, r) : te?.markerMode === "visible" && (d = !0);
  const u = ze(e, Wk);
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
function _M(e, t = [], r = !1) {
  let { marker: n } = e;
  ye.isValidMarker(n, Mn?.extraValidMarkers) || vt?.warn(`Unexpected char marker '${n}'!`), n = n ?? "";
  const i = [];
  if (te?.markerMode === "editable") {
    const [a] = t;
    li(a) ? a.text = R + a.text : a && t.unshift(ut(R));
  }
  t.length === 0 && t.push(ut(zt)), cc(e.marker ?? "", i, r), i.push(...t);
  const s = e.closed === "false", o = ze(e, Lk);
  return s || qM(n, o, i), s || lc(e.marker ?? "", i, !1, r), Pe({
    type: ye.getType(),
    marker: n,
    unknownAttributes: o,
    children: i,
    direction: null,
    format: "",
    indent: 0,
    version: $p
  });
}
function Og(e) {
  return {
    type: Gr.getType(),
    children: e,
    direction: null,
    format: "",
    indent: 0,
    textFormat: 0,
    textStyle: "",
    version: Up
  };
}
function CM(e, t = []) {
  let { marker: r } = e;
  rt.isValidMarker(r, Mn?.extraValidMarkers) || vt?.warn(`Unexpected para marker '${r}'!`), r = r ?? Gt;
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
  )), n.push(...t), Ul()) {
    const s = n.find(
      (o) => !Zc(o) && !(li(o) && o.text === R)
    );
    li(s) && !/^ +$/.test(s.text) && (s.text = s.text.replace(/^ +/, (o) => R.repeat(o.length)));
  }
  const i = ze(e, jk);
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
    version: Fp
  });
}
function Fl() {
  return {
    direction: null,
    format: "",
    indent: 0
  };
}
function vM(e, t = []) {
  const r = ze(e, GT);
  return Pe({
    ...Fl(),
    type: In.getType(),
    unknownAttributes: r,
    children: t,
    version: Th
  });
}
function SM(e, t = []) {
  const r = ze(e, XT), n = e.marker ?? Ha, i = [];
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
    ...Fl(),
    type: Ci.getType(),
    marker: n,
    unknownAttributes: r,
    children: i,
    version: Ch
  });
}
function MM(e, t = []) {
  const { marker: r, align: n, colspan: i } = e, s = [], o = r ?? Ga, a = fh(o, i) ?? o;
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
    ZT
  );
  return Pe({
    ...Fl(),
    type: vi.getType(),
    marker: o,
    align: n,
    colspan: i,
    unknownAttributes: c,
    children: s,
    version: Sh
  });
}
function EM(e, t) {
  const r = sT(t);
  let n = () => {
  };
  return Mn?.noteCallerOnClick && (n = Mn.noteCallerOnClick), Pe({
    type: Jt.getType(),
    caller: e,
    previewText: r,
    onClick: n,
    version: Fh
  });
}
function AM(e, t) {
  let { marker: r } = e;
  Ae.isValidMarker(r, Mn?.extraValidMarkers) || vt?.warn(`Unexpected note marker '${r}'!`), r = r ?? zc;
  const { category: n } = e, i = e.caller ?? "*", s = e.closed === "false", o = s ? !1 : xl(te?.noteMode), a = ze(e, Jb), c = te?.isNoteShellEditable === !1 ? "token" : "normal";
  let l, d;
  te?.markerMode === "editable" ? (l = ht(r, "opening", !1, c), s || (d = ht(r, "closing"))) : te?.markerMode === "visible" && (l = _t("marker", qe(r) + " "), s || (d = _t("marker", ot(r))));
  const u = [];
  let f;
  if (l && u.push(l), te?.markerMode === "editable" && !o)
    f = ut(Ot(i), void 0, c), u.push(f), LM(n, u), u.push(...t);
  else {
    const h = ut(R, pr, "token");
    f = EM(i, t), u.push(f, h, ...t.flatMap(PM(h)));
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
    version: gp
  });
}
function PM(e) {
  return (t) => xp(t) ? [t] : [t, e];
}
function NM(e) {
  let { marker: t } = e;
  (!t || !Yt.isValidMarker(t, Mn?.extraValidMarkers)) && vt?.warn(`Unexpected milestone marker '${t}'!`), t = t ?? "";
  const { sid: r, eid: n } = e, i = ze(e, Fc), s = nh(e);
  return Pe({
    type: Yt.getType(),
    marker: t,
    sid: r,
    eid: n,
    unknownAttributes: i,
    attributeOrder: s,
    version: fp
  });
}
function Zd(e, t = []) {
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
function OM(e, t) {
  const { marker: r } = e, n = e.type, i = ze(e, Ek), s = [];
  if (te?.markerMode === "editable") {
    const { opening: o, attributes: a, closingAttributes: c, closing: l } = ph(
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
    version: Sp
  });
}
function wM(e) {
  return {
    type: $r.getType(),
    marker: e,
    text: Xi(e),
    detail: 0,
    format: 0,
    // Editable marker mode edits the flagged bytes in place (the marker-edit engine pends and
    // settles them); every other mode has no engine to settle such an edit, so the node stays
    // atomic "token" text there — steppable and deletable whole, but not editable inside.
    mode: te?.markerMode === "editable" ? "normal" : "token",
    style: "",
    version: yh
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
    type: Or.getType(),
    text: t,
    textType: e,
    version: Tp
  };
  return r && (n[_s] = { [jc.key]: !0 }), n;
}
function ms(e, t) {
  return {
    type: wr.getType(),
    runKind: e,
    children: t,
    direction: null,
    format: "",
    indent: 0,
    version: Mp
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
function qM(e, t, r) {
  if (te?.markerMode !== "editable" || !t) return;
  const n = lr(t, Ao(e));
  n && r.push(ut(n, "attribute"));
}
function ef(e, t) {
  if (e.type !== "ms" || te?.markerMode !== "editable" && te?.markerMode !== "visible") return;
  const { marker: r, sid: n, eid: i } = e, s = ze(e, Fc), o = ih(
    n,
    i,
    s,
    nh(e)
  ), a = lr(o, Po(r ?? ""));
  if (!a) return;
  const c = R + a;
  te?.markerMode === "editable" ? t.push(ut(c, "attribute")) : t.push(_t("attribute", c));
}
function RM(e, t) {
  const r = e.marker ?? "";
  if (te?.markerMode === "editable") {
    const n = [];
    cc(r, n), ef(e, n), lc(r, n, !0), t.push(ms("milestone", n));
  } else
    cc(r, t), ef(e, t), lc(r, t, !0);
}
function tf(e, t, r) {
  t !== void 0 && r.push(
    ms(e, [
      ht(e, "opening"),
      ut(R + t, "attribute"),
      ht(e, "closing")
    ])
  );
}
function $M(e, t) {
  te?.markerMode === "editable" && (tf("va", e.altnumber, t), tf("vp", e.pubnumber, t));
}
function LM(e, t) {
  e !== void 0 && t.push(
    ms("cat", [
      ht("cat", "opening"),
      ut(R + e, "attribute"),
      ht("cat", "closing")
    ])
  );
}
function IM(e, t, r) {
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
function rf(e, t) {
  return e.length <= 0 || t === 0 ? e : e.map((r) => r - t);
}
function DM(e, t) {
  const r = e.indexOf(t, 0);
  r > -1 && e.splice(r, 1);
}
function nf(e, t) {
  t.marker === Tn && t.sid !== void 0 && e.push(t.sid), t.marker === ti && t.eid !== void 0 && DM(e, t.eid);
}
function uc(e, t, r = !1, n = []) {
  if (t.length <= 0 || t[0] >= e.length) return e;
  const i = t.shift(), s = t.length > 0 ? t.shift() : e.length - 1;
  if (i === void 0 || s === void 0 || s >= e.length || e.length <= 0)
    return e;
  const o = e.slice(0, i), a = r ? [Zd(o, [...n])] : o, c = e[i];
  nf(n, c);
  const l = uc(
    e.slice(i + 1, s),
    rf(t, i + 1),
    c.marker === Tn,
    n
  ), d = Zd(l, [...n]), u = e[s];
  nf(n, u);
  const f = uc(
    e.slice(s + 1),
    rf(t, s + 1),
    u.marker === Tn,
    n
  );
  return [...a, d, ...f];
}
function Fr(e, t = !1) {
  const r = [], n = [];
  return e?.forEach((i) => {
    if (typeof i == "string")
      i && n.push(ut(Ul() ? vg(i) : i));
    else if (!i.type)
      vt?.error("Marker type is missing!");
    else
      switch (i.type) {
        case Kt.getType():
          n.push(kM(i));
          break;
        case qt.getType():
          n.push(TM(i));
          break;
        case pt.getType():
          te?.hasSpacing || n.push(fM), n.push(xM(i)), $M(i, n);
          break;
        case ye.getType():
          n.push(
            _M(i, Fr(i.content, !0), t)
          );
          break;
        case rt.getType():
          n.push(CM(i, Fr(i.content)));
          break;
        case Ae.getType():
          n.push(AM(i, Fr(i.content)));
          break;
        case Yt.getType():
          pp(i.marker ?? "") && (r.push(n.length), i.sid !== void 0 && Dl?.push(i.sid)), n.push(NM(i)), RM(i, n);
          break;
        case $r.getType():
          n.push(wM(i.marker ?? ""));
          break;
        case kh:
          n.push(vM(i, Fr(i.content)));
          break;
        case _h:
          n.push(SM(i, Fr(i.content)));
          break;
        case vh:
          n.push(MM(i, Fr(i.content)));
          break;
        default:
          vt?.warn(`Unknown type-marker '${i.type}-${i.marker}'!`), n.push(OM(i, Fr(i.content)));
      }
  }), uc(n, r);
}
function dc(e) {
  const t = e.findIndex(
    (n) => Np(n) || jp(n) || Hc(n) || // A table is a block root in its own right; without this it would be swept into an implied
    // para alongside any sibling text/verse nodes.
    YT(n)
  );
  if (t >= 0) {
    const n = dc(e.slice(0, t)), i = e[t], s = dc(e.slice(t + 1));
    return [...n, i, ...s];
  } else if (e.some((n) => "text" in n && "mode" in n || qh(n)))
    return [Og(e)];
  return e;
}
const Ar = {
  initialize: pM,
  reset: hM,
  serializeEditorState: gM
};
function wg(e) {
  if (e && !w(e)) {
    if (E(e)) return e;
    if (L(e))
      for (const t of e.getChildren()) {
        const r = wg(t);
        if (r) return r;
      }
  }
}
function UM() {
  const e = O();
  if (!P(e)) return !1;
  if (e.isCollapsed()) {
    const t = e.anchor.getNode(), r = e.anchor.offset;
    if ((E(t) && !w(t) ? Sn(t) : void 0) && E(t)) {
      const i = he(" ");
      if (r <= 0) t.insertBefore(i);
      else if (r >= t.getTextContentSize()) t.insertAfter(i);
      else {
        const [o] = t.splitText(r);
        o.insertAfter(i);
      }
      ui(i, { renderGlyphs: !0, closeImplicitSpans: !0 });
      const s = wg(i.getNextSibling());
      if (s) {
        const o = s.getTextContent(), a = o.startsWith(R) ? R : "", c = o.slice(a.length);
        c.startsWith(" ") && s.setTextContent(a + c.slice(1));
      }
      return i.select(1, 1), !0;
    }
    return E(t) && t.getTextContent()[r] === " " ? (t.select(r + 1, r + 1), !0) : (e.insertText(" "), !0);
  }
  for (const t of qg(e)) {
    if (!Sn(t)) continue;
    ui(t, { renderGlyphs: !0, closeImplicitSpans: !0 });
    const r = t.getLatest(), n = r.getTextContent();
    n.startsWith(R) && r.setTextContent(n.slice(R.length));
  }
  return !0;
}
function qg(e) {
  const [t, r] = $c(e), [n, i] = e.isBackward() ? [r, t] : [t, r], s = e.getNodes(), o = [];
  return s.forEach((a, c) => {
    if (!E(a) || w(a) || ne(a, oe) === "attribute") return;
    const l = a.getTextContentSize(), d = c === 0 ? n : 0, u = c === s.length - 1 ? Math.min(i, l) : l;
    if (d >= u) return;
    const f = a.splitText(d, u), h = f.length === 3 ? f[1] : u === l ? f[f.length - 1] : f[0];
    h && o.push(h);
  }), o;
}
function FM() {
  const e = O();
  if (!P(e)) return !1;
  const t = e.focus.getNode();
  return Sn(t) ? ve(al(t)) : !1;
}
function Rg() {
  let e = O();
  if (!P(e) || !e.isCollapsed()) return !1;
  let t = e.anchor.getNode();
  if (w(t) && !dl(t, e.anchor.offset)) {
    const c = t.getParent();
    if (I(c) && t.is(c.getLastChild())) {
      if (c.selectNext(0, 0), e = O(), !P(e) || !e.isCollapsed()) return !1;
      t = e.anchor.getNode();
    }
  }
  if (!E(t) || w(t) || !Sn(t)) return !1;
  const r = al(t);
  if (!ve(r)) return !1;
  const n = he(""), i = e.anchor.offset;
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
  return I(a) ? cl(a) : o.select(0, 0), !0;
}
const Mt = String.raw`\w-`, $g = "a-z0-9", zM = `[a-z][${$g}]*`, KM = new RegExp(
  String.raw`^\\(\+?[${Mt}]+)[ \u00A0]$`
), Lg = new RegExp(String.raw`^\\(\+?[${Mt}]+)$`), BM = new RegExp(String.raw`^\\\+?[${Mt}]*\*$`), jM = new RegExp(
  String.raw`^\\(\+?[${Mt}]+)(?:[ \u00A0]|$)`
), VM = new RegExp(
  String.raw`^\\(\+?)([${Mt}]+)`
), WM = new RegExp(
  String.raw`\\\+?[${Mt}]+(?:\\?\*|[ \u00A0])`
), HM = new RegExp(
  String.raw`\\\+?[${Mt}]*$`
), GM = new RegExp(
  String.raw`^\\(${zM})( |$)`
), JM = new RegExp(
  String.raw`\\[${$g}+*]*$`,
  "i"
), it = "￼";
function Ig(e) {
  return e.length > 1 && e.startsWith(R) && e.charAt(1) !== it ? e.slice(1) : e;
}
function sf(e) {
  return Zc(e) ? e.markerSyntax ?? "opening" : void 0;
}
function Dg(e, t, r, n) {
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
  for (; sf(a[c]) === "opening"; ) c++;
  if (a[c]?.text !== Ot(e.getCaller())) return { failure: "caller" };
  c++;
  let d = a.length;
  for (; d > c && sf(a[d - 1]) === "closing"; )
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
function Ki(e, t) {
  HM.test(e.text) && (e.text += " "), e.spans.push({
    key: t[0].getKey(),
    start: e.text.length,
    end: e.text.length + 1,
    isSentinel: !0
  }), e.sentinels.push(t), e.text += it;
}
function Dt(e) {
  return e.replaceAll(R, " ");
}
function YM(e, t, r = !1) {
  if (Es(t)) return Dt(e);
  if (e === R) return " ";
  const n = r && e.startsWith(R), i = n ? e.slice(1) : e;
  return (n ? " " : "") + i.replaceAll(R, "~");
}
function Zi(e) {
  const t = e.getTextContent();
  return Ln(e) && /^[\s\u00A0]*$/.test(t) ? " " : t;
}
function zl(e, t) {
  const r = e[t];
  if (!He(r)) return [];
  const { attribute: n, closing: i, wrapper: s } = qo(r);
  if (s) return [s];
  const o = r.getNextSibling();
  if (!w(o) || o.getMarkerSyntax() !== "opening" || o.getMarker() !== r.getMarker())
    return [];
  const a = [o];
  return n && a.push(n), i && a.push(i), a;
}
function Ug(e) {
  return e.some((t) => t.getTextContent().length > 0);
}
function Kl(e, t) {
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
function Bl(e) {
  return !!e.getUnknownAttributes();
}
function Bo(e, t) {
  const r = t(e)?.type;
  return r === k.Milestone || r === void 0 && Bc(e);
}
function Fg(e, t) {
  return He(e) ? !Bo(e.getMarker(), t) : K(e) || Fe(e) ? !0 : we(e) ? Bl(e) : I(e) ? zg(e, t) : !1;
}
function zg(e, t) {
  if (yT(e)) return !0;
  const r = e.getMarker();
  return !sk(r) && t(r) === void 0;
}
const Lt = "", It = "";
function of(e) {
  return e.flatMap((t) => Ue(t) ? t.getChildren() : [t]);
}
function Hi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (He(s)) {
      const o = zl(e, i);
      Bo(s.getMarker(), r) && Ug(o) ? (t.push(
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
      ), Hi(of(o), t, r), t.push(It)) : t.push(it), i += o.length;
    } else if (we(s)) {
      const o = Kl(e, i);
      Bl(s) ? t.push(it) : (t.push(
        Lt,
        "verse",
        Dt(s.getTextContent()),
        JSON.stringify({
          number: s.getNumber(),
          altnumber: s.getAltnumber() ?? null,
          pubnumber: s.getPubnumber() ?? null
        })
      ), Hi(of(o), t, r), t.push(It)), i += o.length;
    } else w(s) ? t.push(Lt, "marker", Dt(s.getTextContent()), It) : tn(s) ? t.push(Lt, "unmatched", Dt(s.getTextContent()), It) : Fg(s, r) ? t.push(it) : wn(s) ? t.push(" ") : E(s) ? t.push(
      Dt(
        n ? Ig(Zi(s)) : Zi(s)
      )
    ) : I(s) ? (t.push(Lt, "char", JSON.stringify(s.getUnknownAttributes() ?? null)), Hi(s.getChildren(), t, r, !0), t.push(It)) : L(s) ? (t.push(Lt, s.getType()), Hi(s.getChildren(), t, r), t.push(It)) : t.push(it);
  }
}
function Ai(e, t) {
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
function jl(e) {
  return e.type ?? "";
}
function Kg(e, t, r) {
  return t === "closing" ? ot(e, r) : t === "selfClosing" ? ot("") : qe(e, r);
}
function Ma(e, t) {
  const r = e[t];
  if (!(!r || jl(r) !== "attribute-run"))
    return Pr(r) ?? [];
}
function Pi(e, t) {
  const r = [];
  return Gi(e, r, t), r.join("");
}
function Gi(e, t, r, n = !1) {
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = jl(s);
    if (o === "ms") {
      const l = s, d = Ma(e, i + 1);
      d && Bo(l.marker ?? "", r) ? (t.push(
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
          Kg(l.marker ?? "", l.markerSyntax, l.nested)
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
      t.push(Dt(n ? Ig(a) : a));
      continue;
    }
    const c = Pr(s);
    c ? (t.push(Lt, o), Gi(c, t, r), t.push(It)) : t.push(it);
  }
}
function jo(e) {
  let t = 0;
  for (const r of e) {
    const n = Pr(r);
    if (n) {
      t += jo(n);
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
      const c = zl(e, o);
      Bo(a.getMarker(), r) && Ug(c) ? En(c, t, r, n) : Ki(t, [a, ...c]), o += c.length;
    } else if (K(a) || Fe(a))
      s(), Ki(t, [a]);
    else if (we(a)) {
      s();
      const c = Kl(e, o);
      Bl(a) ? Ki(t, [a, ...c]) : (Ds(t, a, Dt(Zi(a))), En(c, t, r, n)), o += c.length;
    } else if (I(a))
      s(), zg(a, r) ? Ki(t, [a]) : ys(a, t, r, n, { pending: !0 });
    else if (wn(a))
      s(), Ds(t, a, " ");
    else if (E(a)) {
      const c = Ln(a) || ne(a, oe) === "attribute", l = s() && !c;
      Ds(
        t,
        a,
        c ? Dt(Zi(a)) : YM(Zi(a), n, l)
      );
    } else L(a) ? ys(a, t, r, n, i) : (s(), Ki(t, [a]));
  }
}
function Vl(e, t, r) {
  if (e.getUnknownAttributes()) return;
  const n = t(e.getMarker())?.type;
  if (n !== void 0 && n !== k.Unknown && n !== k.Paragraph)
    return;
  for (let s = e.getParent(); s !== null; s = s.getParent())
    if (Fe(s)) return;
  const i = { text: "", spans: [], sentinels: [] };
  return ys(e, i, t, r), i;
}
function Bg(e, t) {
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
function jg(e) {
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
function XM(e, t, r) {
  const n = { text: "", spans: [], sentinels: [] };
  for (const i of e)
    n.text.length > 0 && (n.text += " "), L(i) && ys(i, n, t, r);
  return { text: n.text, spans: n.spans };
}
const bs = /\s/;
function Vg(e) {
  return e.filter(Vo).length;
}
function Vo(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return E(t) && !w(t) && ne(t, oe) === "attribute";
}
function QM(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return w(t) || Vo(e);
}
function af(e, t, r, n) {
  let i = 0, s = 0;
  for (const o of e.spans) {
    const a = o.end - o.start, c = o.key === t;
    if (!c && n && Vo(o)) continue;
    const l = c ? Math.min(o.isSentinel ? 1 : r, a) : a;
    for (let d = 0; d < l; d++)
      bs.test(e.text[o.start + d]) ? s++ : (i++, s = 0);
    if (c) return { nonWsBefore: i, wsRun: s };
  }
}
function Wl(e, t, r) {
  const n = af(e, t, r, !1);
  if (!n) return;
  const i = e.spans.find((o) => o.key === t), s = i && !QM(i) ? af(e, t, r, !0) : void 0;
  return { ...n, documentCoords: s, attributeRunSpans: Vg(e.spans) };
}
function Ea(e) {
  if (e.isSentinel) return !1;
  const t = se(e.key);
  return w(t) && t.getMarkerSyntax() !== "opening";
}
function ZM(e) {
  const t = se(e.key);
  if (!w(t)) return !1;
  const r = t.getParent();
  return I(r) ? (r.selectNext(0, 0), !0) : !1;
}
function eE(e) {
  const t = se(e.key), r = t?.getParent()?.getChildren();
  if (!t || !r) return !1;
  const n = r.findIndex((s) => s.is(t));
  if (n < 0) return !1;
  const i = we(t) ? Kl(r, n) : He(t) ? zl(r, n) : [];
  return (i[i.length - 1] ?? t).selectNext(0, 0), !0;
}
function Wg(e, t, r) {
  const { text: n, spans: i } = e, s = Vg(i) === t.attributeRunSpans ? t.documentCoords : void 0, o = s !== void 0;
  let a, c = (s ?? t).nonWsBefore, l = (s ?? t).wsRun, d = !1;
  e: for (const u of i) {
    const f = u.end - u.start, h = !u.isSentinel && !Ea(u);
    if (!(o && Vo(u))) {
      if (d) {
        if (!h) continue;
        a = { key: u.key, offset: 0 };
        break;
      }
      for (let b = 0; b < f; b++) {
        const p = n[u.start + b];
        if (c === 0 && (l === 0 || !bs.test(p))) {
          if (h) {
            a = { key: u.key, offset: b };
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
    if (u && Ea(u) && ZM(u) || u?.isSentinel && eE(u)) return;
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
function Hg(e, t, r, n, i) {
  if (r) {
    if (t === void 0) {
      e.find(L)?.selectStart();
      return;
    }
    Wg(XM(e, n, i), t, e);
  }
}
function tE(e, t, r, n, i) {
  if (!r) return;
  if (t === void 0) {
    e.find(L)?.selectStart();
    return;
  }
  const s = { text: "", spans: [], sentinels: [] };
  En(e, s, n, i), Wg({ text: s.text, spans: s.spans }, t, e);
}
function Gg(e, t) {
  if (e.length === 0) return !1;
  const { viewOptions: r, getMarker: n, logger: i } = t, s = { text: "", spans: [], sentinels: [] };
  for (const p of e) {
    const g = Vl(p, n, r);
    if (!g)
      return i?.debug("[MarkerEdit] Tier 2 skipped: paragraph excluded by guard rails"), !1;
    s.text.length > 0 && (s.text += " ");
    const y = s.text.length;
    g.spans.forEach(
      (x) => s.spans.push({ ...x, start: x.start + y, end: x.end + y })
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
    c.isCollapsed() && (o = Wl(s, c.anchor.key, c.anchor.offset));
  }
  const l = Zr(s.text, {
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
  if (Pi(d.root.children, n) === Ai(e, n))
    return i?.debug("[MarkerEdit] Tier 2 skipped: rebuild is a no-op (fixed point)"), !1;
  const u = d.root.children.map((p) => vo(p));
  if (jg(u) !== s.sentinels.length)
    return i?.warn("[MarkerEdit] Tier 2 aborted: serialized sentinel/preserved-node count mismatch"), !1;
  const f = fc(e).map((p) => ({
    number: p.getNumber(),
    sid: p.getSid()
  })), h = e[0];
  u.forEach((p) => h.insertBefore(p)), Bg(u, s.sentinels), e.forEach((p) => p.remove());
  const b = fc(u);
  for (let p = 0; p < f.length && p < b.length; p++)
    b[p].getNumber() === f[p].number && b[p].setSid(f[p].sid);
  return Hg(u, o, a, n, r), !0;
}
function Jg(e, t, r) {
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
function Yg(e) {
  const t = e[0];
  if (typeof t != "object" || t.type !== "char" || t.marker !== "cat" || !Object.keys(t).every((s) => s === "type" || s === "marker" || s === "content") || !t.content || t.content.length !== 1) return;
  const n = t.content[0];
  if (typeof n != "string" || n.includes(it)) return;
  const i = n.trim();
  if (i !== "")
    return e.shift(), i;
}
function rE(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = Jg(e, n, r);
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
    d.isCollapsed() && (c = Wl(o, d.anchor.key, d.anchor.offset));
  }
  const u = Zr(o.text, {
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
  const h = f.content ?? [], b = Yg(h), p = Dg(e, h, b, r);
  if (p.failure !== void 0)
    return p.failure === "empty" ? i?.debug("[MarkerEdit] Note Tier 2 skipped: no content nodes after unwrap") : i?.warn(
      p.failure === "caller" ? "[MarkerEdit] Note Tier 2 aborted: serialized note lacks the editable caller" : "[MarkerEdit] Note Tier 2 aborted: unexpected serialized shape"
    ), !1;
  if (jo(p.children) !== o.sentinels.length)
    return i?.warn(
      "[MarkerEdit] Note Tier 2 aborted: serialized sentinel/preserved-node count mismatch"
    ), !1;
  const g = e.getCategory() !== b;
  if (g && e.setCategory(b), Pi(p.children, n) === Ai(a, n))
    return i?.debug("[MarkerEdit] Note Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  const y = p.children.map((M) => vo(M));
  if (jg(y) !== o.sentinels.length)
    return i?.warn("[MarkerEdit] Note Tier 2 aborted: parsed sentinel/preserved-node count mismatch"), g;
  const x = a[0];
  if (x)
    y.forEach((M) => x.insertBefore(M));
  else {
    const M = e.getChildren().find((A) => w(A) && A.getMarkerSyntax() === "closing");
    y.forEach((A) => M ? M.insertBefore(A) : e.append(A));
  }
  Bg(y, o.sentinels);
  const v = new Set(o.sentinels.flat().map((M) => M.getKey()));
  return a.forEach((M) => {
    v.has(M.getKey()) || M.remove();
  }), tE(y, c, l, n, r), !0;
}
const Xg = /* @__PURE__ */ new Set(["ca", "cp"]), Hl = "cp";
function Qg(e) {
  if (!fr(e)) return !1;
  const t = { text: "", spans: [], sentinels: [] };
  if (ys(e, t, ur, void 0), t.sentinels.length > 0) return !1;
  const r = t.text;
  if (r.trim() === "") return !1;
  const n = Zr(r, { getMarker: ur }), [i] = n, s = n.length === 1 && typeof i == "object" && i.type === "para" && i.marker === "p" && !/^\s*\\p\s/.test(r) ? i.content ?? [] : n;
  return s.length === 0 ? !1 : s.every(
    (o) => typeof o == "string" ? o.trim() === "" : (o.type === "char" || o.type === "para") && (o.marker === "ca" || o.marker === Hl)
  );
}
function yi(e) {
  const t = [];
  for (let r = e.getNextSibling(); r; r = r.getNextSibling()) {
    if (I(r) && Xg.has(r.getMarker()) || Qg(r)) {
      t.push(r);
      continue;
    }
    ce(r) && r.getMarker() === Hl && t.push(r);
    break;
  }
  return t;
}
function nE(e) {
  const t = (n) => I(n) && Xg.has(n.getMarker()) || Qg(n);
  if (t(e) || ce(e) && e.getMarker() === Hl)
    for (let n = e.getPreviousSibling(); n; n = n.getPreviousSibling()) {
      if (Me(n)) return n;
      if (!t(n)) return;
    }
}
function Zg(e, t, r) {
  if (Object.keys(e.getUnknownAttributes() ?? {}).length > 0) return;
  const n = yi(e);
  if (n.some((s) => ce(s) && s.getUnknownAttributes())) return;
  const i = { text: "", spans: [], sentinels: [] };
  if (En(e.getChildren(), i, t, r), En(n, i, t, r), !(i.sentinels.length > 0))
    return i;
}
const iE = /^\s*\\p(?:\s|$)/;
function em(e, t) {
  const r = Zr(e, { getMarker: t }), [n, ...i] = r;
  if (typeof n != "object" || n.type !== "para" || n.marker !== "p" || iE.test(e))
    return r;
  const s = [...n.content ?? []], o = s.at(-1);
  if (typeof o == "string") {
    const a = o.trimEnd();
    a ? s[s.length - 1] = a : s.pop();
  }
  return [...s, ...i];
}
function cf(e) {
  return typeof e == "object" && e.type === "chapter";
}
function tm(e, t) {
  const { viewOptions: r, getMarker: n, logger: i } = t, s = [e, ...yi(e)], o = Zg(e, n, r);
  if (!o)
    return i?.debug("[MarkerEdit] Chapter Tier 2 skipped: chapter excluded by guard rails"), !1;
  let a, c = !1;
  const l = O();
  if (P(l)) {
    for (let g = l.anchor.getNode(); g; g = g.getParent())
      if (s.some((y) => y.is(g))) {
        c = !0;
        break;
      }
    l.isCollapsed() && (a = Wl(o, l.anchor.key, l.anchor.offset));
  }
  const d = em(o.text, n);
  if (d.length === 0 && c)
    return i?.debug("[MarkerEdit] Chapter Tier 2 deferred: emptied chapter line holds the caret"), !1;
  if (Fn(d) !== 0)
    return i?.warn("[MarkerEdit] Chapter Tier 2 aborted: unexpected preserved-node placeholder"), !1;
  const [u] = d, f = cf(u) ? u : void 0, h = d.find(cf);
  h && e.getSid() !== void 0 && (h.sid = e.getSid());
  const b = Ar.serializeEditorState(
    { type: Cr, version: _r, content: d },
    r
  );
  if (f && Pi(b.root.children, n) === Ai(s, n)) {
    let g = !1;
    return e.getNumber() !== (f.number ?? "") && (e.setNumber(f.number ?? ""), g = !0), e.getAltnumber() !== f.altnumber && (e.setAltnumber(f.altnumber), g = !0), e.getPubnumber() !== f.pubnumber && (e.setPubnumber(f.pubnumber), g = !0), g || i?.debug("[MarkerEdit] Chapter Tier 2 skipped: rebuild is a no-op (fixed point)"), g;
  }
  const p = b.root.children.map((g) => vo(g));
  return p.forEach((g) => e.insertBefore(g)), s.forEach((g) => g.remove()), Hg(p, a, c, n, r), !0;
}
function ks(e) {
  let t, r;
  for (let n = e; n; n = n.getParent()) {
    if (Fe(n)) return;
    !t && (K(n) || ce(n) || Me(n)) && (t = n), ab(n.getParent()) && (r = n);
  }
  return t && !t.is(r) ? t : (r ? nE(r) : void 0) ?? t;
}
function Ht(e, t) {
  const r = ks(e);
  return r ? K(r) ? rE(r, t) : Me(r) ? tm(r, t) : Gg([r], t) : !1;
}
const sE = /* @__PURE__ */ new Set(["type", "marker", "content", "closed"]);
function lf(e, t) {
  const r = Object.entries(e).filter(
    (n) => typeof n[1] == "string" && !sE.has(n[0])
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
          t.push(`\\${n}`), lf(r, t), t.push("\\*");
          break;
        case "unmatched":
          t.push(`\\${n}`);
          break;
        case "char":
          t.push(`\\${n} `), Vs(r.content, t), lf(r, t), i !== "false" && t.push(`\\${n}*`);
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
function uf(e, t, r) {
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
  const o = Vl(n, t, r);
  if (!o) return !1;
  const a = Zr(o.text, { getMarker: t });
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Map();
  for (const d of o.text)
    bs.test(d) || c.set(d, (c.get(d) ?? 0) + 1);
  const l = [];
  Vs(a, l);
  for (const d of l.join("").replaceAll(R, "~")) {
    if (bs.test(d)) continue;
    const u = c.get(d);
    u !== void 0 && u > 0 && c.set(d, u - 1);
  }
  for (const d of c.values()) if (d > 0) return !0;
  return !1;
}
function Gl(e, t) {
  return rm(e, t, k.Paragraph);
}
function oE(e, t) {
  return rm(e, t, k.Character);
}
function rm(e, t, r) {
  const n = e.replace(/^\+/, "");
  if (n === "v" || n === "c") return !1;
  const i = t(n)?.type;
  return i !== void 0 && i !== k.Unknown ? i === r : !(Ae.isValidMarker(n) || Bc(n));
}
function aE(e) {
  return [lt(e), Oo()];
}
function Jl(e) {
  Zt(e, 2);
}
function cE(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed()) return !1;
  const { anchor: r } = t;
  if (r.type === "element") return r.key === e.getKey() && r.offset === 0;
  const n = e.getFirstChild();
  return n !== null && r.key === n.getKey() && r.offset === 0;
}
function ho(e) {
  const t = cE(e);
  e.splice(0, 0, aE(e.getMarker())), t && Jl(e);
}
function Wo(e, t) {
  e.setMarker(t), ho(e), Jl(e);
}
function lE(e, t) {
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
    if (eh(e)) {
      t.pendingKeys.add(e.getKey());
      return;
    }
    r.insertAfter(Oo());
  }
}
function df(e, t, r) {
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
function uE(e) {
  const t = e.isBackward(), r = t ? e.focus : e.anchor, n = t ? e.anchor : e.focus, i = /* @__PURE__ */ new Set();
  for (const s of e.getNodes()) {
    const o = es(s);
    o && i.add(o);
  }
  return [...i].filter((s) => {
    const o = es(r.getNode())?.is(s) ?? !1, a = es(n.getNode())?.is(s) ?? !1;
    return !(o && !df(r, s, "start") || a && !df(n, s, "end"));
  });
}
function pc(e) {
  const t = e.wholeParaDeleteExpected;
  if (!t) return;
  const r = O();
  if (!(!P(r) || r.isCollapsed()))
    for (const n of uE(r)) t.add(n.getKey());
}
function dE(e) {
  const t = e.collapsedDeleteCaretParas;
  if (!t) return;
  const r = O();
  if (!P(r) || !r.isCollapsed()) return;
  const n = es(r.focus.getNode());
  n && t.add(n.getKey());
}
function fE(e) {
  const t = O();
  !P(t) || t.isCollapsed() || t.getNodes().some((r) => w(r)) && (pc(e), t.removeText());
}
const pE = new RegExp(
  String.raw`^\\\+?([${Mt}]+)(?:[ \u00A0]|$)`
);
function hE(e, t) {
  const r = pE.exec(e.getTextContent());
  return !!r && Gl(r[1], t);
}
function gE(e, t) {
  if (!Un(t.viewOptions)) return;
  if (Bt(e.getFirstChild())) {
    lE(e, t);
    return;
  }
  if (t.splitExpected.current) {
    if (hE(e, t.getMarker)) return;
    ho(e), t.logger?.debug(`[MarkerEdit] injected prefix for split para "${e.getMarker()}"`);
    return;
  }
  if (e.isEmpty()) {
    const n = t.wholeParaDeleteExpected?.has(e.getKey()) ?? !1, i = t.collapsedDeleteCaretParas?.has(e.getKey()) ?? !1;
    if (!n && !i) return;
    if (t.wholeParaDeleteExpected?.delete(e.getKey()), t.collapsedDeleteCaretParas?.delete(e.getKey()), !e.getParent()?.getChildren().some((o) => ce(o) && !o.is(e))) {
      Wo(e, Gt), t.logger?.debug("[MarkerEdit] whole-para delete of the last para: reset to \\p");
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
  e.setMarker(Gt), ho(e);
}
function mE(e) {
  const t = e.getUnknownAttributes();
  if (!t) return;
  const r = lr(t, Ao(e.getMarker()));
  return r === "" ? void 0 : r;
}
function yE(e) {
  const t = e.getChildren().filter((s) => !w(s) && ne(s, oe) !== "attribute"), r = t[0];
  r && E(r) && r.getTextContent().startsWith(R) && r.setTextContent(r.getTextContent().slice(1));
  const n = mE(e);
  n && t.push(he(n));
  let i = e;
  for (const s of t)
    i.insertAfter(s), i = s;
  e.remove();
}
function bE(e, t) {
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
function kE(e, t) {
  if (e.isEmpty()) return;
  const r = e.getFirstChild();
  if (!(w(r) && r.getMarkerSyntax() === "opening")) {
    yE(e), t.logger?.debug(`[MarkerEdit] unwrapped char span "${e.getMarker()}"`);
    return;
  }
  const i = e.getUnknownAttributes()?.closed !== "false", s = e.getChildren().some((o) => w(o) && o.getMarkerSyntax() === "closing");
  i && !s && Ht(e, t);
}
function hc(e) {
  if (e === void 0) return;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(0, Math.floor(t)) : 0;
}
function nm(e, t) {
  if (!t || !("clipboardData" in t)) return !1;
  const r = e.getRootElement()?.ownerDocument.getSelection(), n = r?.anchorNode, i = r?.focusNode;
  return !!n && !!i && !jf(e, n, i);
}
function im(e, t) {
  return e.length <= t ? e : e.slice(0, Yl(e, t));
}
function Yl(e, t) {
  if (t >= e.length) return e.length;
  let r = 0;
  for (const { index: n, segment: i } of kb(e)) {
    if (n + i.length > t) break;
    r = n + i.length;
  }
  return r;
}
const TE = 16;
function xE(e, { $isHidden: t, $measure: r } = {}) {
  const n = (x) => t ? Xl(x, t).length : x.getTextContent().length;
  r ??= n;
  const i = O();
  if (!P(i) || i.isCollapsed() || r(i) <= e) return !1;
  const [s, o] = i.isBackward() ? [i.focus, i.anchor] : [i.anchor, i.focus], a = { key: s.key, offset: s.offset, type: s.type }, c = go(s), l = go(o), d = i.getNodes(), u = new Map(d.map((x) => [x.getKey(), vE(x)])), f = d.length > 0 ? u.get(d[0].getKey()) : void 0, h = f && _E(s, f) ? f : void 0, b = (x) => {
    const v = x > 0 ? CE(d, u, h, c, l, x, t) : void 0;
    return i.anchor.set(a.key, a.offset, a.type), v ? i.focus.set(v.node.getKey(), v.offset, "text") : i.focus.set(a.key, a.offset, a.type), i.setCachedNodes(null), !!v;
  };
  let p = Math.min(e, n(i));
  if (b(p) && r(i) <= e) return !0;
  let g = 0, y = 0;
  p -= 1;
  for (let x = 0; x < TE && g <= p; x++) {
    const v = Math.floor((g + p) / 2);
    b(v) && r(i) <= e ? (y = v, g = v + 1) : p = v - 1;
  }
  return b(y), !0;
}
function gc(e) {
  return e.isToken() || ul(e) || Me(e.getParent());
}
function _E(e, t) {
  const r = L(t) ? t.getAllTextNodes()[0] : void 0;
  return !!r && Ra(r.getKey(), 0, "text").isBefore(e);
}
function CE(e, t, r, n, i, s, o) {
  const a = e.length - 1;
  let c = 0, l = !0, d, u;
  const f = /* @__PURE__ */ new Map(), h = (p) => {
    const g = t.get(p.getKey());
    return g && r?.is(g) ? void 0 : g;
  }, b = (p) => {
    let g = u ? u.endBefore : p;
    for (; ; ) {
      const y = SE(g, e, n);
      if (!y || !g || y.node.is(g.node)) return y;
      const x = h(y.node);
      if (!x || x.is(h(g.node))) return y;
      g = f.get(x.getKey());
    }
  };
  for (let p = 0; p <= a; p++) {
    const g = e[p], y = h(g);
    if (u && !u.node.is(y) && (d && u.node.isParentOf(d.node) && (d = u.endBefore), u = void 0), y && !u && (u = { node: y, endBefore: d }, f.set(y.getKey(), d)), !o?.(g)) {
      if (L(g) && !g.isInline()) {
        if (!l) {
          if (c + 1 > s) return b(d);
          c += 1;
        }
        l = !g.isEmpty();
        continue;
      }
      if (l = !1, E(g)) {
        const x = p === 0 ? n : 0, v = p === a ? i : g.getTextContentSize(), M = v - x, A = gc(g);
        if (A && c + M > s) return b(d);
        if (!A && c + M >= s) {
          const F = Yl(g.getTextContent(), x + (s - c));
          return b({ node: g, offset: Math.max(x, F) });
        }
        c += M, d = { node: g, offset: v };
      } else if (qn(g) || wn(g)) {
        const x = g.getTextContentSize();
        if (c + x > s) return b(d);
        c += x;
      }
    }
  }
  return b(d);
}
function vE(e) {
  let t;
  for (let r = e; r; r = r.getParent())
    (K(r) || Nl(r)) && (t = r);
  return t;
}
function SE(e, t, r) {
  if (!e) return e;
  const n = Ye(e.node, (g) => L(g) && !g.isInline()), i = L(n) ? n.getAllTextNodes() : [e.node], s = i.findIndex((g) => g.is(e.node));
  if (s < 0) return e;
  const o = Math.max(0, s - 1), a = Math.min(i.length - 1, s + 1);
  let c = "";
  const l = [];
  for (let g = o; g <= a; g++)
    l.push(c.length), c += i[g].getTextContent();
  const d = l[s - o], u = d + e.offset, f = Yl(c, u);
  if (f === u) return e;
  const h = (g) => t[0]?.is(g) ?? !1;
  if (gc(e.node)) return { ...e, offset: h(e.node) ? r : 0 };
  if (f >= d) {
    const g = f - d;
    return g >= (h(e.node) ? r : 0) ? { ...e, offset: g } : void 0;
  }
  const b = s > o ? i[s - 1] : void 0;
  if (!b || !t.some((g) => g.is(b))) return;
  if (gc(b))
    return { node: b, offset: h(b) ? r : 0 };
  const p = f - l[0];
  return p >= (h(b) ? r : 0) ? { node: b, offset: p } : void 0;
}
function Xl(e, t) {
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
          d === 0 ? go(i) : 0,
          d === n ? go(s) : u.length
        );
      } else (qn(l) || wn(l)) && (d !== n || !e.isCollapsed()) && (a += l.getTextContent());
    }
  }), a;
}
function mc(e) {
  const t = e.getParent();
  return !!t && Ye(t, (r) => K(r) && !!r.getIsCollapsed()) !== null;
}
function sm(e) {
  const t = /* @__PURE__ */ new Map(), r = (i) => {
    mt(i) && t.set(i.getKey(), i.getPreviewText().length);
  };
  for (const i of e)
    if (r(i), L(i)) for (const { node: s } of Rn(i)) r(s);
  let n = 0;
  for (const i of t.values()) n += i;
  return n;
}
function ME(e) {
  return e.getNodes().some(
    (t) => qn(t) || K(t) || ge(t) || Ge(t) || Nl(t)
  );
}
function go(e) {
  if (e.type === "text") return e.offset;
  const t = e.getNode();
  return L(t) && e.offset === t.getChildrenSize() ? t.getTextContent().length : 0;
}
const mo = "usfm:", om = "usfmopen", am = "usfmclosed";
function EE(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const AE = new RegExp(
  [mo, om, am].map(EE).join("|")
), PE = "\uFEFF", NE = /^usfm_(.+)$/;
function OE(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function wE(e) {
  return e.replace(
    /%([0-9a-fA-F]{4})/g,
    (t, r) => String.fromCharCode(Number.parseInt(r, 16))
  );
}
function qE(e) {
  return e.startsWith(mo) ? wE(e.slice(mo.length)).replace(/\r\n?|\n/g, " ") : "";
}
function cm(e) {
  for (const t of e.classList) {
    const r = NE.exec(t);
    if (r) return r[1];
  }
}
function RE(e) {
  const t = cm(e);
  if (t !== void 0)
    return e.classList.contains("nested") ? `+${t}` : t;
}
function $E(e) {
  const t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_COMMENT);
  for (let r = t.nextNode(); r; r = t.nextNode())
    if ((r.nodeValue ?? "").startsWith(mo)) return !0;
  for (const r of e.querySelectorAll("*")) {
    const { classList: n } = r;
    if (!(!n.contains(om) && !n.contains(am)) && cm(r) !== void 0)
      return !0;
  }
  return !1;
}
function lm(e, t, r) {
  if (e.nodeType === Node.TEXT_NODE) {
    t || r.push(e.nodeValue ?? "");
    return;
  }
  if (e.nodeType === Node.COMMENT_NODE) {
    r.push(qE(e.nodeValue ?? ""));
    return;
  }
  if (!OE(e)) return;
  const { classList: n } = e, i = (d) => e.childNodes.forEach((u) => lm(u, d, r));
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
  const o = s === "div" || s === "tr", a = o || s === "span" || s === "th" || s === "td" ? RE(e) : void 0, c = a !== void 0 && n.contains("usfmopen"), l = a !== void 0 && n.contains("usfmclosed");
  o && r.push(`
`), (c || l) && r.push(`\\${a} `), i(!1), l && r.push(`\\${a}*`), o && r.push(`
`);
}
function LE(e) {
  if (!AE.test(e)) return;
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  if (t.querySelectorAll("script,style,template").forEach((n) => n.remove()), !$E(t)) return;
  const r = [];
  return t.childNodes.forEach((n) => lm(n, !1, r)), r.join("").replaceAll(PE, "").replaceAll(R, " ").replace(/\r\n?/g, `
`).replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function IE(e) {
  const t = e.getTextContent();
  if (!t.includes(" ")) return;
  const r = ne(e, oe);
  if (r === "attribute" || r === pr) return;
  for (let o = e.getParent(); o; o = o.getParent())
    if (gt(o) || Me(o) || Fe(o)) return;
  const n = t.startsWith(R) && I(e.getParent()), i = n ? t.slice(1) : t, s = (n ? R : "") + i.replace(/ (?=[ \u00A0])/g, R).replace(new RegExp("(?<=\\u00A0) ", "g"), R);
  s !== t && e.setTextContent(s);
}
function DE(e) {
  const { body: t } = new DOMParser().parseFromString(e, "text/html");
  return t.querySelectorAll("script,style,template").forEach((r) => r.remove()), t.querySelectorAll("br").forEach((r) => r.replaceWith(`
`)), t.querySelectorAll("p,div,li,td,th,tr,h1,h2,h3,h4,h5,h6,blockquote,pre").forEach((r) => r.after(`
`)), (t.textContent ?? "").replace(/\n+/g, `
`).replace(/^\n|\n$/g, "");
}
function UE(e, t) {
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
function Ws(e, t) {
  const r = e && typeof e == "object" && "clipboardData" in e ? e.clipboardData : void 0;
  if (r)
    return um(r, t);
}
function um(e, t) {
  const r = (o) => o.replace(/\r\n?/g, `
`), n = r(e.getData("text/plain")), i = e.getData("text/html"), s = i ? LE(i) : void 0;
  return {
    text: s ? r(s) : n || (i ? r(DE(i)) : ""),
    isInternal: UE(
      e.getData("application/x-lexical-editor"),
      t
    )
  };
}
const ff = String.raw`\\(?:\+?[${Mt}]+\*?|\*)`, FE = new RegExp(
  String.raw`(?<=${ff})\u00A0|\u00A0(?=${ff})`,
  "g"
);
function Ql(e) {
  return e.replace(/^\u00A0+/gm, (t) => " ".repeat(t.length)).replace(FE, " ").replaceAll(R, "~");
}
const dm = new RegExp(
  String.raw`\\c(?![${Mt}])[ \u00A0]*[^\s\\]*`,
  "g"
), fm = new RegExp(String.raw`\\id(?![${Mt}])[^\n\\]*`, "g"), zE = new RegExp(
  String.raw`^(?:${dm.source}|${fm.source})`
);
function yo(e) {
  return e.split(`
`).map((t) => {
    const r = t.replace(dm, "").replace(fm, "");
    return zE.test(t) && r.trim() === "" && t.trim() !== "" ? void 0 : r;
  }).filter((t) => t !== void 0).join(`
`);
}
const KE = new RegExp(
  String.raw`\\v(?![${Mt}*])[ \u00A0]*[^\s\\]*[ \u00A0]?`,
  "g"
), BE = new RegExp(
  String.raw`\\([${Mt}]+)(?![${Mt}*])[ \u00A0]?`,
  "g"
);
function bo(e, t) {
  return e.replace(KE, "").replace(
    BE,
    (r, n) => t(n)?.type === k.Paragraph ? "" : r
  );
}
function yc(e) {
  if (E(e) && ne(e, oe) === "attribute") return !0;
  for (let t = e; t; t = t.getParent())
    if (Ue(t)) return !0;
  return !1;
}
function jE(e) {
  return yc(e.anchor.getNode()) || yc(e.focus.getNode());
}
function VE(e) {
  const { anchor: t, focus: r } = e;
  return t.key === r.key && yc(t.getNode());
}
function WE(e, t, r, n) {
  const s = VE(e) ? r ? bo(t, n) : t : Ql(
    r ? bo(yo(t), n) : yo(t)
  );
  s && e.insertText(s.replace(/\n/g, " "));
}
function HE(e, t = !1, r = () => {
}, n = () => {
}) {
  const i = Ws(e, ki()._config.namespace);
  if (!i) return !1;
  const s = O(), o = P(s) && jE(s);
  if (!o && i.isInternal && !t || t && P(s) && ni(s))
    return !1;
  const { text: a } = i;
  return !a || !P(s) ? !1 : (e?.preventDefault(), o ? (WE(s, a, t, n), !0) : (pm(s, a, t, r, n), !0));
}
function pm(e, t, r, n, i) {
  const s = yo(t), o = Ql(
    r ? bo(s, i) : s
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
  const c = ki();
  a.forEach((l, d) => {
    if (d > 0 && c.dispatchCommand(Ji, void 0), l === "") return;
    const u = O();
    P(u) && u.insertText(l);
  });
}
function GE(e) {
  if (e.getTextContent() !== R) return !1;
  const t = e.getParent();
  return K(t) ? !mt(e.getPreviousSibling()) : !1;
}
function JE(e, t) {
  if (t || e.getTextContent() !== R) return "";
  const r = e.getParent();
  if (!K(r) || !mt(e.getPreviousSibling())) return "";
  const n = r.getCategory();
  return n ? `\\cat ${n}\\cat*` : "";
}
function YE(e) {
  const t = e.getParent();
  return (K(t) ? t.getCaller() : void 0) || rs;
}
function XE(e) {
  const t = e.getParent();
  return !t || Yr(t) === void 0;
}
function Zl(e) {
  const t = e.getNodes();
  if (t.length === 0) return "";
  const r = t[0], n = t[t.length - 1], { anchor: i, focus: s } = e, o = i.isBefore(s), [a, c] = $c(e);
  let l = "", d = !0;
  for (const u of t) {
    if (L(u) && !u.isInline()) {
      !d && XE(u) && (l += `
`), d = !u.isEmpty();
      continue;
    }
    if (d = !1, mt(u))
      (u !== n || !e.isCollapsed()) && (l += (u === r ? "" : " ") + YE(u));
    else if (E(u)) {
      let f = u.getTextContent();
      u === r ? u === n ? (i.type !== "element" || s.type !== "element" || s.offset === i.offset) && (f = a < c ? f.slice(a, c) : f.slice(c, a)) : f = o ? f.slice(a) : f.slice(c) : u === n && (f = o ? f.slice(0, c) : f.slice(0, a)), l += GE(u) ? "" : f.replaceAll(R, " ") + JE(u, u === n);
    } else (qn(u) || wn(u)) && (u !== n || !e.isCollapsed()) && (l += u.getTextContent().replaceAll(R, " "));
  }
  return l;
}
function hm(e) {
  return e.split(`
`).map((t) => t.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")).map(
    (t) => t ? `<p><span style="white-space: pre-wrap;">${t}</span></p>` : "<p></p>"
  ).join("");
}
function QE(e) {
  return e.getNodes().some(
    (t) => [t, ...t.getParents()].some(
      (r) => gt(r) || Me(r)
    )
  );
}
function ZE(e) {
  const t = O();
  if (!P(t) || t.isCollapsed()) return;
  const r = Zl(t), n = {
    "text/plain": r,
    "text/html": hm(r)
  };
  if (gs() || QE(t)) return n;
  const i = bb(e);
  return i && (n["application/x-lexical-editor"] = i), n;
}
function pf(e, t, r, n) {
  const i = O();
  if (!P(i) || i.isCollapsed())
    return (!e || !("clipboardData" in e)) && !lg();
  const s = ZE(t);
  return s ? (n !== void 0 && delete s["application/x-lexical-editor"], gm(e, t, i, s, r, n)) : !1;
}
function gm(e, t, r, n, i, s) {
  const o = hc(s);
  if (o !== void 0 && nm(t, e)) return !1;
  const a = n["text/plain"] ?? "";
  return o !== void 0 && a.length > o ? (process.env.NODE_ENV !== "production" && console.warn(
    "@eten-tech-foundation/platform-editor: a copy reached the clipboard over its copy limit; writing shortened plain text only."
  ), bc(e, t, { "text/plain": im(a, o) })) : bc(
    e,
    t,
    n,
    i && t.isEditable() ? () => r.removeText() : void 0
  );
}
function bc(e, t, r, n) {
  const i = !r["text/plain"];
  if (!e || !("clipboardData" in e))
    return i || yb(t, null, r), n?.(), !0;
  if (e.clipboardData == null) return !1;
  if (e.preventDefault(), !i)
    for (const [s, o] of Object.entries(r)) e.clipboardData.setData(s, o);
  return n?.(), !0;
}
function An(e) {
  return Ye(e, Me) ?? void 0;
}
function mm(e) {
  return [e.anchor.getNode(), e.focus.getNode(), ...e.getNodes()].some(
    (t) => An(t) !== void 0
  );
}
function eu() {
  const e = O();
  if (!P(e)) return;
  if (!e.isCollapsed()) {
    if (!mm(e)) return;
    e.removeText();
  }
  const t = O();
  return P(t) ? An(t.focus.getNode()) : void 0;
}
function ym(e, t) {
  const r = eu();
  if (!r) return !1;
  const n = ai(e);
  return r.insertAfter(n), Un(t) ? Wo(n, e) : n.selectStart(), !0;
}
function eA() {
  const e = O();
  return P(e) && !e.isCollapsed() && An(e.anchor.getNode())?.is(An(e.focus.getNode())) ? !0 : eu() !== void 0;
}
function tA(e) {
  if (!mm(e)) return !1;
  if (!e.isCollapsed()) return !0;
  const t = e.focus.getNode(), r = An(t), n = r && _i(r);
  return !(n?.is(t) && e.focus.offset === n.getTextContentSize());
}
function bm(e, t, r, n) {
  const i = O();
  if (t && P(i) && tA(i))
    return !0;
  if (!eu()) return !1;
  const s = O();
  return e && P(s) && pm(s, e, t, r, n), !0;
}
const Us = "﷐";
function rA(e, t) {
  const { opener: r, value: n, wrapper: i } = rl(e), s = i ?? r;
  if (!s) return !1;
  const o = t.focus.getNode();
  return o.is(e) ? t.focus.offset > s.getIndexWithinParent() : [i, r, n].some(
    (a) => a && (a.is(o) || a.isParentOf(o))
  );
}
function nA(e, t, r) {
  const { closer: n, wrapper: i } = tl(e), s = i ?? n;
  if (!s) return t;
  const o = r.focus.getNode();
  return (o.is(e) ? r.focus.offset > t.getIndexWithinParent() + 1 : !o.is(t)) ? s : t;
}
function kc(e) {
  const t = O();
  if (!P(t)) return !0;
  const r = An(t.focus.getNode());
  if (!r || !r.is(An(t.anchor.getNode()))) return !0;
  const n = _i(r);
  if (!n) return !1;
  if (rA(r, t)) {
    const u = he("");
    return (yi(r).at(-1) ?? r).insertAfter(
      Ut().append(u)
    ), u.select(0, 0), !0;
  }
  const i = r.getPreviousSibling(), s = (yi(r).at(-1) ?? r).getNextSibling(), o = nA(r, n, t), a = o.is(n) && !/\s$/.test(n.getTextContent()) ? " " : "", c = he(a + Us);
  if (o.insertAfter(c), !tm(r, e))
    return c.remove(), !1;
  const l = iA(i, s).flatMap((u) => L(u) ? u.getAllTextNodes() : [u]).find((u) => E(u) && u.getTextContent().includes(Us));
  if (!E(l)) return !1;
  const d = l.getTextContent().indexOf(Us);
  return l.setTextContent(l.getTextContent().replace(Us, "")), l.select(d, d), !0;
}
function iA(e, t) {
  const r = [];
  for (let n = e ? e.getNextSibling() : Re().getFirstChild(); n && !n.is(t); n = n.getNextSibling())
    r.push(n);
  return r;
}
const km = {
  c: {
    // Deliberately still trusts reference.chapterNum, unlike `v` below - the chapter-number
    // reinstatement work (a separate branch/PR) owns rewriting this action to scan the tree.
    action: (e) => {
      const { chapterNum: t } = e.reference;
      return { content: [{
        type: "chapter",
        marker: "c",
        number: `${Vp(Re().getChildren(), t) !== void 0 ? t + 1 : t}`
      }] };
    }
  },
  v: {
    action: () => {
      const e = O(), t = Yc(e), r = ml(t);
      let n, i = !1;
      if (!r)
        n = "1";
      else {
        const o = r.getNumber();
        n = aT(0, o);
        const a = Dx(r);
        if (a) {
          const c = a.getNumber();
          i = n === c || Qp(c) && Xc(parseInt(n, 10), c);
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
  return Ae.isValidMarker(e, t) || !!km[e] || rt.isValidMarker(e, t) || ye.isValidMarker(e, t);
}
function sA(e, t) {
  return ye.isNoteContentMarker(e) ? !1 : ye.isValidMarker(e, t);
}
function Tm(e, t, r, n, i, s) {
  const o = Kh(
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
    getMarker: fl(o ?? di),
    logger: i
  };
  if (Ae.isValidMarker(e, n?.extraValidMarkers)) {
    let d;
    return { action: (f) => {
      f.editor.update(() => {
        kc(a) && (d = Tm(
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
  const c = dA(e, n?.extraValidMarkers);
  return c ? { action: (d) => {
    d.editor.update(() => {
      if (!kc(a)) return;
      const u = O();
      P(u) && (Ph(u), d.noteText = u.getTextContent());
      const { content: f, highlightInserted: h } = c.action(d), b = sd(f, Ar, r), p = sa(b);
      if (P(u)) {
        const g = u.anchor.getNode(), y = g.getParent(), x = Sn(g), v = u.anchor.key === u.focus.key;
        if (I(p) && x && v && !Aa(p, o))
          cA(
            u,
            p,
            g,
            r?.markerMode === "editable"
          );
        else if (I(p) && !v && !Aa(p, o) && lA(u))
          uA(u, p, r?.markerMode === "editable");
        else if (u.getTextContent().length > 0)
          fA(
            u,
            () => sa(b)
          );
        else if (L(p) && !p.isInline()) {
          const M = u.insertParagraph();
          if (M) {
            const A = M.getChildren();
            p.append(...A), M.replace(p), ve(p) && Ei(p) || p.selectStart();
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
        } else if (E(g) && !w(g) && u.isCollapsed() && (K(y) || I(y) && K(y.getParent()))) {
          const M = I(y) ? y : void 0, A = M ? oA(g, u.anchor.offset) : [];
          let B = (M ?? g).insertAfter(p);
          if (qr(p)) {
            const j = {
              ...r || pi(),
              markerMode: "hidden"
            }, _ = sd(
              f,
              Ar,
              j
            ), U = sa(_);
            B = B.insertAfter(U);
          }
          if (A.length > 0 && M) {
            const j = ko(M).append(...A);
            B.insertAfter(j), M.isEmpty() && M.remove();
          } else E(B.getNextSibling()) || B.insertAfter(he(R));
          L(B) && B.selectEnd();
        } else if (u.insertNodes([p]), _A(p), h) {
          const M = Vf();
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
function oA(e, t) {
  const r = e.getTextContentSize();
  let n;
  return t <= 0 ? n = e : t >= r ? n = e.getNextSibling() : n = e.splitText(t)[1] ?? e.getNextSibling(), n ? [n, ...n.getNextSiblings()] : [];
}
function Aa(e, t) {
  return ((t ?? di).markers[e.getMarker()]?.occursUnder ?? []).includes("NEST") && e.getUnknownAttributes()?.closed !== "false";
}
function aA(e, t) {
  t && e.getChildren().forEach((i) => {
    w(i) && i.setNested(!0);
  }), e.getChildren().some((i) => w(i) && i.getMarkerSyntax() === "closing") || e.append(lt(e.getMarker(), "closing", t));
  const n = e.getUnknownAttributes();
  if (n?.closed === "false") {
    const i = { ...n };
    delete i.closed, e.setUnknownAttributes(Object.keys(i).length > 0 ? i : void 0);
  }
}
function cA(e, t, r, n) {
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
    const [o, a] = bi(e);
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
function lA(e) {
  let t, r = !1;
  for (const n of e.getNodes()) {
    if (w(n) || I(n)) continue;
    if (!E(n) || n.getType() !== Be.getType() || ne(n, oe) === "attribute") return !1;
    const i = al(n);
    if (!i) return !1;
    if (t === void 0) t = i;
    else if (!t.is(i)) return !1;
    Sn(n) && (r = !0);
  }
  return r;
}
function uA(e, t, r) {
  const n = qg(e);
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
function dA(e, t) {
  let r = km[e];
  return r || (rt.isValidMarker(e, t) ? r = {
    action: () => ({ content: [{ type: rt.getType(), marker: e, content: [] }] })
  } : ye.isValidMarker(e, t) && (r = {
    action: () => {
      const n = { type: ye.getType(), marker: e };
      return (ye.isValidFootnoteMarker(e) || ye.isValidCrossReferenceMarker(e)) && (n.closed = "false"), { content: [n] };
    }
  })), r;
}
function fA(e, t) {
  const r = e.getNodes(), [n, i] = bi(e);
  let s;
  r.forEach((o, a) => {
    if (L(s) && s.isParentOf(o))
      return;
    const c = xm(
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
    s || (s = t(), c.insertBefore(s), l = !0, I(s) && s.getChildren().some((u) => w(u) && u.getMarkerSyntax() === "opening") && aA(s, I(s.getParent()))), hA(c, s, l);
  }), (E(s) || L(s)) && s.selectEnd();
}
function bi(e) {
  const t = e.anchor.offset, r = e.focus.offset;
  return e.isBackward() ? [r, t] : [t, r];
}
function tu(e) {
  return Ce(e) || K(e) || K(e.getParent());
}
function xm(e, t, r, n, i) {
  if (!tu(e)) {
    if (E(e))
      return pA(e, t, r, n, i);
    if (L(e) && e.isInline())
      return e;
  }
}
function pA(e, t, r, n, i) {
  const s = e.getTextContentSize(), o = t ? n : 0, a = r ? i : s;
  if (o === 0 && a === 0) return;
  const c = e.splitText(o, a);
  return c.length === 1 ? c[0] : c.length === 3 || a === s ? c[1] : c[0];
}
function hA(e, t, r) {
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
    hl(n), E(n) || t.insertBefore(he(" "));
  }
  return r;
}
function _m(e, t, r) {
  if (e.isCollapsed()) {
    const d = e.anchor.getNode(), u = e.anchor.offset, f = Pn(d, t);
    if (!f) return !1;
    const h = E(d) ? d.getTextContentSize() : 0;
    if (hf(f, r), E(d) && d.isAttached()) {
      const b = d.getTextContentSize(), p = Math.max(h - b, 0), g = Math.max(0, Math.min(u - p, b)), y = O();
      P(y) && y.setTextNodeRange(d, g, d, g);
    }
    return !0;
  }
  const n = e.getNodes(), i = e.isBackward(), [s, o] = bi(e);
  if (!nu(n, t, s, o)) return !1;
  const a = ru(n, s, o);
  if (a.length === 0) return !1;
  const c = /* @__PURE__ */ new Set();
  let l = !1;
  return a.forEach((d) => {
    const u = Pn(d, t);
    if (!u || c.has(u.getKey())) return;
    c.add(u.getKey());
    const f = Mm(u, a);
    f && (hf(f, r), l = !0);
  }), Em(a, i), l;
}
function hf(e, t) {
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
    E(n) && i.startsWith(R) && n.setTextContent(i.slice(R.length));
  }), $a(e);
}
function ru(e, t, r) {
  const n = [];
  return e.forEach((i, s) => {
    const o = xm(
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
  for (; r && !ve(r); ) {
    if (K(r)) return;
    !n && I(r) && (t === void 0 || r.getMarker() === t) && (n = r), r = r.getParent();
  }
  return n;
}
function Cm(e) {
  const t = Ye(
    e,
    (r) => K(r) || ve(r)
  );
  return K(t);
}
function vm(e) {
  return e.filter(
    (t) => !tu(t) && (E(t) || L(t) && t.isInline())
  );
}
function gA(e, t, r) {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((i, s) => {
    if (!E(i) || tu(i)) return;
    const o = i.getTextContentSize(), a = s === 0 ? t : 0, c = s === e.length - 1 ? r : o;
    a === 0 && c === o && n.add(i.getKey());
  }), n;
}
function mA(e, t, r) {
  return e.getChildren().some(
    (n) => L(n) && t.some((i) => n.isParentOf(i)) && !Sm(n, r)
  );
}
function nu(e, t, r, n, i) {
  const s = vm(e), o = gA(e, r, n), a = /* @__PURE__ */ new Set();
  return s.some((c) => {
    const l = Pn(c, t);
    return !l || a.has(l.getKey()) || (a.add(l.getKey()), l.getMarker() === i) ? !1 : !mA(l, s, o);
  });
}
function Sm(e, t) {
  return e.getAllTextNodes().every((r) => t.has(r.getKey()) || Bt(r));
}
function Mm(e, t) {
  const r = new Set(t.map((l) => l.getKey())), n = e.getChildren(), i = [];
  for (const [l, d] of n.entries())
    if (r.has(d.getKey()))
      i.push(l);
    else if (L(d) && t.some((u) => d.isParentOf(u))) {
      if (!Sm(d, r)) return;
      i.push(l);
    }
  if (i.length === 0) return;
  let s = i[0], o = i[i.length - 1];
  if (s > 0 && Bt(n[s - 1]) && (s -= 1), o < n.length - 1 && Bt(n[o + 1]) && (o += 1), s === 0 && o === n.length - 1) return e;
  const a = n.slice(o + 1);
  a.length > 0 && e.insertAfter(ko(e).append(...a));
  const c = n.slice(0, s);
  return c.length > 0 && e.insertBefore(ko(e).append(...c)), e;
}
function ko(e) {
  return cb(e);
}
function Em(e, t) {
  const r = O(), n = e[0], i = e[e.length - 1];
  if (!P(r) || !n.isAttached() || !i.isAttached())
    return;
  const s = i.getTextContentSize();
  t ? r.setTextNodeRange(i, s, n, 0) : r.setTextNodeRange(n, 0, i, s);
}
function yA(e, t, r) {
  if (e.isCollapsed()) {
    const l = Pn(e.anchor.getNode(), r);
    return !l || l.getMarker() === t ? !1 : (ju(l, t), !0);
  }
  const n = e.getNodes(), [i, s] = bi(e);
  if (!nu(n, r, i, s, t)) return !1;
  const o = ru(n, i, s);
  if (o.length === 0) return !1;
  const a = /* @__PURE__ */ new Set();
  let c = !1;
  return o.forEach((l) => {
    const d = Pn(l, r);
    if (!d || a.has(d.getKey()) || (a.add(d.getKey()), d.getMarker() === t)) return;
    const u = Mm(d, o);
    u && (ju(u, t), c = !0);
  }), c;
}
function bA(e, t, r, n) {
  if (e.isCollapsed()) return !1;
  const i = r?.filter(
    (g) => g !== t
  ), s = e.getNodes(), [o, a] = bi(e);
  if (!!!i?.some(
    (g) => nu(s, g, o, a)
  ) && !kA(s, t)) return !1;
  let l = !1;
  i?.forEach((g) => {
    const y = O();
    P(y) && _m(y, g, n) && (l = !0);
  });
  const d = O();
  if (!P(d)) return l;
  const u = d.isBackward(), [f, h] = bi(d), b = ru(
    d.getNodes(),
    f,
    h
  );
  if (b.length === 0) return l;
  const p = b.filter(
    (g) => !Cm(g) && !Pn(g, t)
  );
  return p.length > 0 && (TA(p).forEach((g) => xA(g, t)), l = !0), Em(b, u), l;
}
function kA(e, t) {
  return vm(e).some(
    (r) => !Cm(r) && !Pn(r, t)
  );
}
function TA(e) {
  const t = [];
  let r;
  return e.forEach((n) => {
    const i = r?.[r.length - 1];
    r && i?.getNextSibling()?.is(n) ? r.push(n) : (r = [n], t.push(r));
  }), t;
}
function xA(e, t) {
  const r = e[0].getPreviousSibling(), n = e[e.length - 1].getNextSibling(), i = [r, n].find(
    (a) => I(a) && a.getMarker() === t
  ), s = i ? ko(i) : Mr(t);
  e[0].insertBefore(s), s.append(...e), i === r || _c(e[0], s);
}
function _A(e) {
  ge(e) && (hl(e.getPreviousSibling()), $h(e.getNextSibling()));
}
const Am = {
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
}, gf = "psc-active-text", Fs = "psc-empty-text";
function CA({ viewOptions: e }) {
  const [t] = ae(), r = ee(void 0), n = e?.hasActiveTextFocusBox ?? !1;
  return z(() => {
    if (!n) return;
    function i(o) {
      r.current && t.getElementByKey(r.current)?.classList.remove(gf), r.current = o, o && t.getElementByKey(o)?.classList.add(gf);
    }
    const s = [
      // Clicking the ellipsis placeholder (rendered as ::after on the empty verse span) hits the
      // verse element itself, which is a decorator node — Lexical's default cursor placement leaves
      // the user with no obvious caret inside the empty verse's section. Move the caret to the slot
      // immediately after the verse in its paragraph so typing extends the empty verse. CLICK_COMMAND
      // handlers already run inside an editor update, so we set selection directly here rather than
      // calling editor.update() from a DOM listener.
      t.registerCommand(
        Eo,
        (o) => {
          const a = o.target;
          if (!(a instanceof Element)) return !1;
          const c = a.closest(`.${Fs}`);
          if (!c) return !1;
          const l = Ti(c);
          if (!ge(l)) return !1;
          const d = l.getParent();
          if (!L(d)) return !1;
          const u = l.getIndexWithinParent() + 1;
          return d.select(u, u), !1;
        },
        ft
      ),
      t.registerUpdateListener(({ editorState: o }) => {
        const { newActiveKey: a, activeVerseKey: c, emptyKeys: l, nonEmptyKeys: d } = o.read(() => {
          const u = Pa(), f = vA(), h = [], b = [];
          return Re().getChildren().forEach((p) => {
            if (!L(p)) return;
            const { emptyKeys: g, nonEmptyKeys: y } = MA(p);
            h.push(...g), b.push(...y);
          }), { newActiveKey: u, activeVerseKey: f, emptyKeys: h, nonEmptyKeys: b };
        });
        a !== r.current && i(a), l.forEach((u) => {
          u === c ? t.getElementByKey(u)?.classList.remove(Fs) : t.getElementByKey(u)?.classList.add(Fs);
        }), d.forEach((u) => t.getElementByKey(u)?.classList.remove(Fs));
      }),
      t.registerCommand(
        Ic,
        () => (i(void 0), !1),
        ft
      ),
      t.registerCommand(
        lb,
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
  return SA(O() ?? void 0)?.getKey();
}
function vA() {
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
    ge(s[a]) && (o = s[a].getKey());
  return o;
}
function SA(e) {
  if (P(e))
    return e.anchor.getNode().getTopLevelElement() ?? void 0;
}
function MA(e) {
  const t = e.getChildren(), r = [], n = [];
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (!ge(s)) continue;
    let o = !1;
    for (let a = i + 1; a < t.length; a++) {
      const c = t[a];
      if (ge(c)) break;
      if (!(Xt(c) || w(c)) && c.getTextContent().replaceAll(Js, "").trim() !== "") {
        o = !0;
        break;
      }
    }
    (o ? n : r).push(s.getKey());
  }
  return { emptyKeys: r, nonEmptyKeys: n };
}
function Cc(e, t) {
  const r = Tl();
  if (!r?.end) return;
  const n = EA(e, t);
  if (n)
    return n.state.read(
      () => {
        const i = Fo(r);
        return i ? Zl(i) : void 0;
      },
      { editor: n.editor }
    );
}
const Na = /* @__PURE__ */ new WeakMap();
function EA(e, t) {
  const r = e.getEditorState();
  if (Na.has(r)) {
    const i = Na.get(r);
    if (!i || i.viewOptions === t) return i;
  }
  const n = AA(r, t);
  return Na.set(r, n), n;
}
function AA(e, t) {
  const r = Al(Sl);
  if (!r) return;
  const n = js.deserializeEditorState(e, t);
  if (!n) return;
  const i = ub({
    namespace: "markers-view-copy",
    nodes: [tt, ..._l],
    onError: (o) => {
      throw o;
    }
  }), s = i.parseEditorState(
    Ar.serializeEditorState(n, r)
  );
  return { viewOptions: t, editor: i, state: s };
}
function PA({
  viewOptions: e,
  copyLimit: t
}) {
  const [r] = ae();
  return z(() => {
    const n = (i, s) => {
      const o = O();
      if (!P(o) || o.isCollapsed()) return !1;
      const a = Cc(r, e);
      return a === void 0 ? !1 : gm(
        // COPY_COMMAND's payload is `ClipboardEvent | KeyboardEvent | null`, and jsdom (our test
        // environment) has no `ClipboardEvent` for `instanceof` to narrow against, so this
        // duck-checks the one property `$writeCopyPayload` needs. `in` throws on a non-object, so
        // the type check comes first.
        i && typeof i == "object" && "clipboardData" in i ? i : null,
        r,
        o,
        { "text/plain": a, "text/html": hm(a) },
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
const mf = /* @__PURE__ */ new WeakMap();
function NA({
  limit: e,
  viewOptions: t
}) {
  const [r] = ae(), n = ee(hc(e)), i = ee(t), s = ee(!1), o = ee(void 0);
  return z(() => {
    n.current = hc(e), i.current = t, o.current?.();
  }, [e, t]), z(() => {
    let a, c;
    const l = (y) => {
      const x = n.current;
      if (x === void 0) return;
      const v = mf.get(y);
      if (y.defaultPrevented && v === void 0) return;
      const M = r.getRootElement();
      if (!M) return;
      const A = M.ownerDocument.getSelection();
      if (!A || !qA(A, M)) return;
      y.preventDefault();
      const F = im(
        v ?? A.toString().replaceAll(R, " "),
        x
      );
      mf.set(y, F);
      const B = y.clipboardData;
      if (B) {
        if (!F) {
          v !== void 0 && B.clearData();
          return;
        }
        B.setData("text/plain", F);
      }
    }, d = (y) => {
      n.current !== void 0 && fb(y, "a", { ctrlKey: !oi, metaKey: oi }) && ($A(c?.activeElement, r.getRootElement()) || y.preventDefault());
    }, u = () => {
      c?.removeEventListener("copy", l), c?.removeEventListener("keydown", d, !0), c = void 0;
    }, f = () => {
      const y = n.current === void 0 ? void 0 : a;
      y !== c && (u(), c = y, c?.addEventListener("copy", l), c?.addEventListener("keydown", d, !0));
    };
    o.current = f;
    const h = (y) => (y?.preventDefault(), !0), b = (y) => {
      const x = n.current;
      if (x === void 0 || (s.current = !1, nm(r, y))) return !1;
      if (x <= 0) return h(y);
      const v = O();
      if (Mo(v))
        return v.getTextContent().length + sm(v.getNodes()) <= x ? !1 : h(y);
      if (!P(v) || v.isCollapsed()) return !1;
      const M = OA(r, i.current);
      return M.$size(v) <= x ? !1 : (xE(x, M.options), v.isCollapsed() ? h(y) : (r.isEditable() || Wf(() => wA(r)), s.current = !0, !1));
    }, p = (y, x) => {
      if (n.current === void 0 || !s.current) return !1;
      s.current = !1;
      const v = O();
      if (!P(v) || v.isCollapsed()) return !1;
      const M = x && r.isEditable() && !ME(v);
      return bc(
        y && typeof y == "object" && "clipboardData" in y ? y : null,
        r,
        { "text/plain": Xl(v, mc) },
        M ? () => v.removeText() : void 0
      );
    }, g = je(
      r.registerCommand(ii, b, st),
      r.registerCommand(vr, b, st),
      r.registerCommand(
        ii,
        (y) => p(y, !1),
        jr
      ),
      r.registerCommand(
        vr,
        (y) => p(y, !0),
        jr
      ),
      // The page key-down listener's `preventDefault` does not stop an editable editor from
      // dispatching its own Select All, so this swallows it. A read-only editor never dispatches it.
      r.registerCommand(
        db,
        (y) => n.current === void 0 ? !1 : (y?.preventDefault(), !0),
        st
      ),
      r.registerRootListener((y) => {
        a = y?.ownerDocument ?? void 0, f();
      })
    );
    return () => {
      g(), o.current = void 0, u();
    };
  }, [r]), null;
}
function OA(e, t) {
  if (Es(t)) {
    const n = (i) => Zl(i).length;
    return { $size: n, options: { $measure: n } };
  }
  const r = t?.markerMode === "visible" ? t : void 0;
  if (r && Cc(e, r) !== void 0) {
    const n = (i) => Cc(e, r)?.length ?? Xl(i, mc).length;
    return { $size: n, options: { $measure: n } };
  }
  return {
    $size: (n) => n.getTextContent().length + sm(n.getNodes()),
    options: { $isHidden: mc }
  };
}
function wA(e) {
  e.getEditorState().read(() => {
    const t = O(), r = e.getRootElement()?.ownerDocument.getSelection();
    if (!P(t) || !r) return;
    const n = yf(e, t.anchor), i = yf(e, t.focus);
    n && i && r.setBaseAndExtent(...n, ...i);
  });
}
function yf(e, t) {
  const r = e.getElementByKey(t.key);
  if (!r) return;
  if (t.type === "text") {
    const a = pb(r);
    return a ? [a, t.offset] : void 0;
  }
  const n = t.getNode(), i = L(n) ? n.getChildAtIndex(t.offset) : null, s = i ? e.getElementByKey(i.getKey()) : null, o = s?.parentNode;
  return !s || !o ? [r, r.childNodes.length] : [o, Array.prototype.indexOf.call(o.childNodes, s)];
}
function qA(e, t) {
  const r = t.ownerDocument.createRange();
  r.selectNodeContents(t);
  for (let n = 0; n < e.rangeCount; n++) {
    const i = e.getRangeAt(n), s = i.cloneRange();
    if (i.compareBoundaryPoints(i.START_TO_START, r) < 0 && s.setStart(r.startContainer, r.startOffset), i.compareBoundaryPoints(i.END_TO_END, r) > 0 && s.setEnd(r.endContainer, r.endOffset), !s.collapsed) return !0;
  }
  return !1;
}
const RA = /* @__PURE__ */ new Set(["text", "search", "email", "url", "tel", "password", "number"]);
function $A(e, t) {
  return e ? e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? RA.has(e.type) : !(e instanceof HTMLElement) || !e.isContentEditable ? !1 : !t?.contains(e) : !1;
}
const LA = /^\+/;
function iu(e, t) {
  const r = t.replace(LA, "");
  return Object.hasOwn(e.markers, r) ? e.markers[r] : void 0;
}
function Pm(e, t) {
  if (e.length === 0) return { keep: 0, joins: !0 };
  if (t.occursUnder.length === 0) return { keep: e.length, joins: !1 };
  for (let r = e.length - 1; r >= 0; r--)
    if (t.occursUnder.includes(e[r].marker) && (r === e.length - 1 || t.rank === 0 || e[r + 1].rank <= t.rank))
      return { keep: r + 1, joins: !0 };
}
function Nm(e, t) {
  return Pm(e, t) !== void 0;
}
function vc(e, t) {
  const r = Pm(e, t);
  return r ? (r.joins && (e.length = r.keep, e.push(t)), !0) : !1;
}
function To(e, t, r) {
  const n = L(e) ? e.getChildren().filter(w) : [];
  if (n.length === 0) {
    r.set(e.getKey(), t);
    return;
  }
  for (const i of n) r.set(i.getKey(), t);
}
function IA(e, t, r, n, i) {
  const s = iu(n, t);
  if (!s) {
    To(e, "unknown", i);
    return;
  }
  const o = s.occursUnder ?? [];
  o.length > 0 && !o.includes(r) && To(e, "invalid", i);
}
function ts(e, t, r, n, i) {
  for (const s of e.getChildren())
    if (I(s)) {
      const o = s.getMarker();
      i || IA(s, o, t, r, n), ts(s, t, r, n, i || o === "xq");
    } else if (ge(s)) {
      if (i) continue;
      const o = iu(r, "v");
      o ? (o.occursUnder ?? []).length > 0 && !(o.occursUnder ?? []).includes(t) && n.set(s.getKey(), "invalid") : n.set(s.getKey(), "unknown");
    } else K(s) ? ts(s, s.getMarker(), r, n, i) : Fe(s) || L(s) && ts(s, t, r, n, i);
}
function DA(e, t) {
  const r = /* @__PURE__ */ new Map(), n = [], i = (o, a) => {
    const c = iu(e, a);
    if (!c) {
      To(o, "unknown", r), vc(n, { marker: a, rank: 0, occursUnder: [] });
      return;
    }
    const l = {
      marker: a,
      rank: c.rank ?? 0,
      occursUnder: c.occursUnder ?? []
    };
    vc(n, l) || To(o, "invalid", r);
  }, s = (o) => !t || t.has(o.getKey());
  for (const o of Re().getChildren())
    Fe(o) || (gt(o) || Ge(o) ? i(o, o.getMarker()) : ce(o) ? (i(o, o.getMarker()), s(o) && ts(o, o.getMarker(), e, r, !1)) : L(o) && s(o) && ts(o, "p", e, r, !1));
  return r;
}
function UA(e) {
  return !!e?.includes("(basic)");
}
function FA(e) {
  if (e !== void 0)
    return e.replace(/\s*\(basic\)/g, "").trim();
}
function Om(e, t) {
  return !e.startsWith("zpa") && e !== "c" && Tc(e, t);
}
function su(e, t) {
  const r = Object.hasOwn(e.markers, t) ? e.markers[t] : void 0;
  if (r)
    return { marker: t, rank: r.rank ?? 0, occursUnder: r.occursUnder ?? [] };
}
function wm(e, t) {
  const r = [];
  for (const n of t) {
    const i = su(e, n);
    i && vc(r, i);
  }
  return r;
}
function Hs(e, t) {
  return {
    marker: e.marker,
    kind: t,
    // `isBasic` reads the ORIGINAL description; the emitted one has the token removed.
    description: FA(e.description),
    isBasic: UA(e.description)
  };
}
function zA(e, t) {
  const r = (s) => {
    const o = /^(.*?)(\d+)$/.exec(s);
    return o ? { prefix: o[1], digits: Number(o[2]) } : { prefix: s };
  }, n = r(e), i = r(t);
  return n.prefix !== i.prefix ? n.prefix < i.prefix ? -1 : 1 : n.digits === void 0 ? i.digits === void 0 ? 0 : -1 : i.digits === void 0 ? 1 : n.digits - i.digits;
}
function Sc(e, t) {
  return e.isBasic !== t.isBasic ? e.isBasic ? -1 : 1 : zA(e.marker, t.marker);
}
function Mc(e, t, r) {
  if (t.noteMarker) return [];
  const n = wm(e, t.previousParaMarkers);
  return Object.values(e.markers).filter(
    (i) => i.styleType === "paragraph" && Om(i.marker, r)
  ).filter((i) => {
    const s = su(e, i.marker);
    return s !== void 0 && Nm(n, s);
  }).map((i) => Hs(i, "paragraph")).sort(Sc);
}
function KA(e, t, r) {
  const { noteMarker: n, paraMarker: i } = t, s = Object.values(e.markers).filter(
    (c) => Om(c.marker, r)
  );
  if (n)
    return s.filter(
      (c) => c.styleType === "character" && (c.occursUnder ?? []).includes(n)
    ).map((c) => Hs(c, "character")).sort(Sc);
  if (!i) return [];
  const o = s.filter((c) => {
    if (c.styleType !== "character") return !1;
    const l = c.occursUnder ?? [];
    return l.length === 0 || l.includes(i);
  }), a = s.filter((c) => c.styleType === "note");
  return [
    ...o.map((c) => Hs(c, "character")),
    ...a.map((c) => Hs(c, "note"))
  ].sort(Sc);
}
function BA(e, t) {
  return t.map((r, n) => {
    const i = e.markers[r]?.endMarker ?? `${r}*`;
    return { marker: `${n === t.length - 1 ? "" : "+"}${i}`, kind: "closeTag", isBasic: !1 };
  });
}
function jA(e, t) {
  return e.isBasic === t.isBasic ? 0 : e.isBasic ? -1 : 1;
}
function VA(e, t, r) {
  return [
    ...BA(e, t.openCharMarkers),
    ...KA(e, t, r)
  ].sort(jA);
}
function WA(e, t, r) {
  if (t.source === "paragraph") return Mc(e, t, r);
  const n = VA(e, t, r);
  return n.length > 0 ? n : Mc(e, t, r);
}
function HA(e, t, r) {
  const n = Mc(e, t, r), i = wm(e, t.previousParaMarkers), s = su(e, "ip"), a = !t.previousParaMarkers.includes("c") && s && Nm(i, s) ? "ip" : "p", c = n.findIndex((d) => d.marker === a);
  if (c <= 0) return n;
  const [l] = n.splice(c, 1);
  return [l, ...n];
}
function qm(e, t, r) {
  if (!w(e.getFirstChild()) && r?.markerMode === "editable" && Un(r)) {
    Wo(e, t);
    return;
  }
  Xh(e, t);
}
function Rm() {
  const e = O();
  if (!P(e)) return "declined";
  if (!e.isCollapsed()) {
    const t = $m(e);
    return t !== "removed" ? t : (Ec(), "handled");
  }
  return Ec() ? "handled" : "declined";
}
function GA(e, t) {
  if (!t) return e;
  const r = GM.exec(e);
  if (!r) return e;
  const n = r[1];
  return n === "c" || n === "v" || t(n)?.type !== k.Paragraph ? e : e.slice(r[0].length);
}
function bf(e, t) {
  const r = O();
  if (!P(r)) return "declined";
  if (r.isCollapsed()) {
    if (!Lm())
      return "declined";
  } else {
    const s = $m(r);
    if (s !== "removed") return s;
  }
  const [n, ...i] = e.map(
    (s) => GA(s, t)
  );
  kf(n ?? "");
  for (const s of i)
    Ec(), kf(s);
  return "handled";
}
function JA(e) {
  const t = e.getRootElement(), r = t?.ownerDocument.getSelection(), n = r?.anchorNode;
  if (!t || !r || !n || !t.contains(n)) return !1;
  const i = Ti(n);
  if (!i) return !1;
  const s = Qt(i);
  if (!s || s.getIsCollapsed() !== !1 || s.is(i) || !E(i) || w(i)) return !1;
  const o = Math.min(r.anchorOffset, i.getTextContentSize());
  return i.select(o, o), !0;
}
function $m(e) {
  const t = Qt(e.anchor.getNode()), r = Qt(e.focus.getNode()), n = t?.getIsCollapsed() === !1, i = r?.getIsCollapsed() === !1;
  return !n && !i ? "declined" : (e.removeText(), YA() ? "removed" : "needs-plain-split");
}
function kf(e) {
  if (e === "") return;
  const t = O();
  P(t) && t.insertText(e);
}
function YA() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = Qt(e.anchor.getNode());
  return !t || t.getIsCollapsed() !== !1 ? !1 : t.getChildren().some((r) => w(r) && r.getMarkerSyntax() === "opening");
}
function Lm() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode(), r = Qt(t);
  if (!(!r || r.getIsCollapsed() !== !1 || r.is(t)))
    return r;
}
function Ec() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return !1;
  const t = e.anchor.getNode(), r = Lm();
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
    d && (cT(d), i.append(d));
  }
  return i.getChildren().every(w) && i.append(he(zt)), Im(i), !0;
}
function Im(e) {
  const t = e.getChildren().find((r) => !w(r));
  if (E(t)) {
    const r = t.getTextContent().startsWith(R) ? 1 : 0;
    t.select(r, r);
    return;
  }
  if (L(t)) {
    Im(t);
    return;
  }
  e.selectEnd();
}
function XA(e) {
  const t = [];
  let r = e;
  for (; r; )
    I(r) && t.push(r.getMarker()), r = r.getParent();
  return t;
}
function QA(e) {
  const t = e.getTopLevelElement(), r = [];
  for (const n of Re().getChildren()) {
    if (t && n.is(t)) {
      Me(n) && r.push(n.getMarker());
      break;
    }
    (gt(n) || Ge(n) || ce(n)) && r.push(n.getMarker());
  }
  return r;
}
function ZA(e) {
  let t = e;
  for (; L(t); ) {
    const r = t.getFirstChild();
    if (!r) break;
    t = r;
  }
  return t;
}
function e1(e, t, r) {
  const n = e.getFirstChild();
  if (!n) return !1;
  let i = n;
  if (Bt(n)) {
    if (t.is(n)) return !0;
    if (i = n.getNextSibling(), i && Ln(i)) {
      if (t.is(i)) return !0;
      i = i.getNextSibling();
    }
  }
  return i ? t.is(ZA(i)) && r === 0 : !1;
}
function t1(e, t, r) {
  const n = e.getFirstChild();
  if (!n || !Bt(n)) return !1;
  if (t.is(n)) return !0;
  const i = n.getNextSibling();
  return i !== null && Ln(i) && t.is(i) && r === 0;
}
function r1() {
  if (typeof window > "u" || typeof window.getSelection != "function") return;
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) return;
  const t = e.getRangeAt(0);
  if (typeof t.getBoundingClientRect != "function") return;
  const { x: r, y: n, width: i, height: s } = t.getBoundingClientRect();
  return { x: r, y: n, width: i, height: s };
}
function n1() {
  const e = O();
  if (!P(e)) return;
  const t = e.focus.getNode(), r = e.focus.offset, n = !e.isCollapsed(), i = Ye(t, ce), s = !n && (!i || t1(i, t, r)) ? "paragraph" : "character", o = Qt(t);
  return {
    source: s,
    paraMarker: i?.getMarker(),
    previousParaMarkers: QA(t),
    openCharMarkers: XA(t),
    noteMarker: o?.getMarker(),
    hasTextSelection: n,
    // The trailing edge of a canonical closing glyph counts as AFTER the marker, not inside it
    // (see $isPointInMarkerGlyphText) — Enter there opens the paragraph menu exactly as at the
    // end of a plain-text paragraph.
    inMarkerText: dl(t, r),
    anchorRect: r1()
  };
}
function i1() {
  const e = O();
  if (!P(e) || !e.isCollapsed()) return;
  const t = e.anchor.getNode();
  if (!E(t) || w(t)) return;
  const r = e.anchor.offset, n = t.getTextContent().slice(0, r), i = JM.exec(n);
  i && t.spliceText(r - i[0].length, i[0].length, "", !0);
}
function s1(e, t, r) {
  qm(e, t, r), Jl(e);
}
function o1(e, t, r) {
  const n = O();
  if (!P(n)) return;
  const i = n.focus.getNode(), s = Ye(i, ce);
  if (t === "backslash" && s && e1(s, i, n.focus.offset)) {
    s1(s, e, r);
    return;
  }
  Um(e, r);
}
function a1(e, t) {
  const r = O();
  return !P(r) || !r.isCollapsed() ? !1 : (r.insertText(`\\${e}${t?.trailingSpace === !1 ? "" : " "}`), !0);
}
function Dm(e) {
  const t = O();
  return P(t) ? (t.insertText(`\\${e}*`), !0) : !1;
}
function c1(e, t, r, n) {
  if (P(O()) || n.logger?.warn(
    "$applyMarkerMenuSelection: no range selection — cleanup/insert will no-op (editor blurred?)"
  ), t.literalPrefixLanded && i1(), e.kind === "closeTag") {
    Dm(e.marker.replace(/\*$/, ""));
    return;
  }
  if (e.marker === "fp" && Rm() !== "declined") return;
  if (e.kind === "paragraph" && rt.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers)) {
    o1(e.marker, t.trigger, n.viewOptions);
    return;
  }
  if (Ae.isValidMarker(e.marker, n.nodeOptions?.extraValidMarkers))
    return kc({
      viewOptions: n.viewOptions ?? pi(),
      getMarker: fl(n.styleInfo ?? di),
      logger: n.logger
    }) ? Tm(
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
  ).action({ editor: ki(), reference: r });
}
function Um(e, t) {
  if (ym(e, t)) return;
  const r = O();
  if (!P(r)) return;
  const n = Un(t);
  if (Rg()) {
    const s = O();
    if (!P(s)) return;
    const o = Ye(s.anchor.getNode(), ce);
    if (!o) return;
    o.setMarker(e), n && ho(o);
    return;
  }
  const i = r.insertParagraph();
  ce(i) && (n ? Wo(i, e) : i.setMarker(e));
}
function l1() {
  const [e] = ae();
  return z(() => e.registerCommand(Jf, () => !0, ft), [e]), null;
}
function u1(e, t) {
  if (!e.startsWith("\\")) return !0;
  const r = jM.exec(e)?.[1];
  return r === void 0 ? !1 : !Gl(r, t);
}
function Fm(e, t) {
  if (e.getMarkerSyntax() !== "opening" || !u1(e.getTextContent(), t)) return;
  const r = e.getParent();
  if (!ce(r)) return;
  const n = t(r.getMarker())?.type;
  if (n !== void 0 && n !== k.Unknown || r.getFirstChild()?.is(e) !== !0) return;
  const i = r.getPreviousSibling();
  if (ce(i))
    return [i, r];
}
function zm(e, t) {
  const r = Fm(e, t.getMarker);
  return r !== void 0 && Gg(r, t);
}
function d1(e, t) {
  const r = O();
  P(r) && [r.anchor, r.focus].forEach((n) => {
    n.key === e.getKey() && n.offset > t && n.set(e.getKey(), t, "text");
  });
}
function Km(e) {
  const t = VM.exec(e);
  if (!t) return;
  const r = 1 + t[1].length;
  return { start: r, end: r + t[2].length };
}
function f1(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = Km(e.getTextContent());
  if (!r) return;
  const { offset: n } = t.anchor;
  if (!(n < r.start || n > r.end))
    return n - r.start;
}
function p1(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed() || t.anchor.key !== e.getKey()) return;
  const r = e.getNextSibling();
  if (K(e.getParent()) && E(r)) {
    const n = r.getNextSibling();
    if (I(n)) {
      cl(n);
      return;
    }
  }
  E(r) ? r.select(1, 1) : e.select(e.getTextContentSize(), e.getTextContentSize());
}
function Tf(e, t) {
  if (t !== void 0) {
    const r = e.getLatest(), n = Km(r.getTextContent());
    if (n) {
      const i = Math.min(n.start + t, n.end);
      r.select(i, i);
      return;
    }
  }
  p1(e);
}
function xf(e, t) {
  return e.replace(/^\+/, "") !== t.replace(/^\+/, "");
}
function Bm(e, t, r) {
  if (t.startsWith("+") !== e.getNested())
    return Ht(e, r);
  const n = f1(e), i = e.getParent();
  if (ce(i)) {
    if (!Gl(t, r.getMarker))
      return zm(e, r) ? (r.logger?.debug(
        `[MarkerEdit] unknown-split paragraph rejoined its predecessor on rename to "${t}"`
      ), !0) : Ht(e, r);
    const s = e.getMarker();
    return i.setMarker(t), e.setMarker(t), xf(s, t) && Tf(e, n), r.logger?.debug(`[MarkerEdit] para marker renamed to "${t}"`), !0;
  }
  if (I(i) || K(i)) {
    const s = t.replace(/^\+/, "");
    if (!(I(i) ? oE(t, r.getMarker) : Ae.isValidMarker(s)))
      return Ht(e, r);
    const a = e.getMarker();
    if (i.getMarker() !== a)
      return Ht(e, r);
    i.setMarker(s);
    const c = i.getChildren().filter(w).filter((l) => l.getMarkerSyntax() === "closing" && l.getMarker() === a).at(-1);
    return c && (d1(c, ot(s, c.getNested()).length), c.setMarker(s)), e.setMarker(s), xf(a, s) && Tf(e, n), r.logger?.debug(`[MarkerEdit] ${i.getType()} marker renamed to "${s}"`), !0;
  }
  return Ht(e, r);
}
function h1(e) {
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
function g1(e, t) {
  const r = e.getTextContent();
  if (en(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (Ue(e.getParent()) && el(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  if (!t.pendingKeys.has(e.getKey()) && !h1(e)) {
    gT(e), t.logger?.debug(
      `[MarkerEdit] healed machine-drifted glyph bytes back to "${e.getTextContent()}"`
    );
    return;
  }
  if (e.getMarkerSyntax() === "opening") {
    const n = KM.exec(r);
    if (n) {
      t.pendingKeys.delete(e.getKey()), Bm(e, n[1], t);
      return;
    }
    if (BM.test(r)) {
      t.pendingKeys.delete(e.getKey()), Ht(e, t);
      return;
    }
    t.pendingKeys.add(e.getKey());
    return;
  }
  if (e.getMarkerSyntax() === "closing") {
    const n = e.getParent(), i = ot(e.getMarker(), e.getNested());
    if (I(n) && e.getMarker() === n.getMarker() && n.getLastChild()?.is(e) && r.startsWith(i) && r.length > i.length) {
      const s = O(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() && s.anchor.offset > i.length ? s.anchor.offset - i.length : void 0, a = he(r.slice(i.length));
      e.setTextContent(i), n.insertAfter(a), o !== void 0 && a.select(o, o), t.pendingKeys.delete(e.getKey());
      return;
    }
  }
  t.pendingKeys.add(e.getKey());
}
function m1(e, t) {
  if (e.getTextContent() === "") {
    t.pendingKeys.delete(e.getKey()), e.remove();
    return;
  }
  if (bh(e)) {
    t.pendingKeys.delete(e.getKey());
    return;
  }
  t.pendingKeys.add(e.getKey());
}
function jm(e) {
  if (!ap(e)?.length)
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
const Bi = jm("v"), y1 = jm("c"), _f = /^[ \u00A0]*$/;
function Cf(e, t, r) {
  const n = e.getNextSibling();
  if (E(n) && n.getType() === Be.getType() && n.getMode() === "normal" && ne(n, oe) !== "attribute") {
    n.setTextContent(t + n.getTextContent()), r !== void 0 && n.select(r, r);
    return;
  }
  const i = he(t);
  e.insertAfter(i), r !== void 0 && i.select(r, r);
}
function b1(e, t) {
  const r = e.getTextContent(), n = Ft("v", e.getNumber());
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
    if (l && _f.test(l[2] ?? "")) {
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
      t.pendingKeys.delete(e.getKey()), e.setNumber(d), e.setTextContent(Ft("v", d));
      const b = h !== void 0 && h >= l.length ? Math.min(h - l.length, u.length) : void 0;
      Cf(e, u, b);
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
  if (t.pendingKeys.delete(e.getKey()), _f.test(a ?? "")) {
    o !== e.getNumber() && e.setNumber(o);
    return;
  }
  e.setNumber(o), e.setTextContent(Ft("v", o)), a && Cf(e, a, a.length);
}
const k1 = /^[ \u00A0]+([^ \u00A0\\]+)[ \u00A0]+$/;
function T1(e, t) {
  const r = e.getParent();
  if (!K(r) || r.getIsCollapsed() !== !1 || !ap(r.getMarker())?.includes("caller")) return !1;
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
  const o = k1.exec(s);
  if (!o) return !1;
  const [, a] = o;
  return t.pendingKeys.delete(e.getKey()), r.setCaller(a), e.setTextContent(Ot(a)), !0;
}
function x1(e) {
  if (e.getChildrenSize() === 0) {
    e.remove();
    return;
  }
  const t = e.getFirstChild();
  if (!E(t)) return;
  const r = Ft("c", e.getNumber()), n = t.getTextContent();
  if (n === r) return;
  const i = /^[ \u00A0]+/.exec(n), s = i ? n.slice(i[0].length) : n, o = y1.valueTerminated.exec(s);
  o && o[1] !== e.getNumber() && e.setNumber(o[1]);
}
function Vm(e) {
  if (He(e)) {
    const { wrapper: t } = qo(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (K(e)) {
    const { wrapper: t } = oh(e);
    return t && t.getChildrenSize() === 0 ? [t] : [];
  }
  if (Me(e)) {
    const t = [], r = tl(e);
    r.wrapper && r.wrapper.getChildrenSize() === 0 && t.push(r.wrapper);
    const n = rl(e);
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
function _1(e) {
  const t = O();
  if (!P(t) || !t.isCollapsed()) return !1;
  const r = t.anchor.getNode();
  return Vm(e).some((n) => r.is(n));
}
function C1(e, t, r = "departure") {
  let n = !1;
  const i = r === "departure";
  if (i && ce(e) && eh(e))
    return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of ls)
    if (l.settleScope !== "none" && l.ownerPredicate(e) && Ms(l, e) && (i || _1(e)))
      return t.pendingKeys.add(e.getKey()), { handled: !0, mutated: !1 };
  for (const l of Vm(e))
    l.remove(), n = !0;
  let s = !1;
  if (I(e)) {
    const l = TT(e);
    l !== void 0 && tk(l) && (uh(e), s = !0, n = !0);
  }
  let o = !1, a = !1, c = !1;
  for (const l of ls)
    if (l.settleScope !== "none" && l.ownerPredicate(e)) {
      if (hx(l, e)) {
        ds(l, e), a = !0, n = !0;
        continue;
      }
      if (l.deletionPolicy === "none") {
        o = !0;
        continue;
      }
      if (l.deletionPolicy === "remove-owner" && Eh(l, e))
        return e.remove(), { handled: !0, mutated: !0 };
      Io(l, l.scanPieces(e), l.expectedPieces(e)) && (c = !0);
    }
  return (a || s) && !c ? { handled: !0, mutated: n } : { handled: o, mutated: n };
}
function vf(e) {
  return E(e) && e.getType() === Be.getType() && e.getMode() === "normal" && ne(e, oe) !== "attribute";
}
function v1(e) {
  const t = /* @__PURE__ */ new Set();
  if (e === void 0) return t;
  t.add(e);
  const r = se(e);
  if (!r?.isAttached()) return t;
  for (let n = r.getPreviousSibling(); n && vf(n); n = n.getPreviousSibling())
    t.add(n.getKey());
  for (let n = r.getNextSibling(); n && vf(n); n = n.getNextSibling())
    t.add(n.getKey());
  return t;
}
function zs(e, t, r = "departure") {
  let n = !1;
  if (e.pendingKeys.size === 0) return n;
  const i = v1(t), s = [...e.pendingKeys].filter((a) => !i.has(a)), o = /* @__PURE__ */ new Set();
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
      const b = Lg.exec(h);
      c.getMarkerSyntax() === "opening" && b ? n = Bm(c, b[1], e) || n : r === "idle" && uf(c, e.getMarker, e.viewOptions) ? e.pendingKeys.add(a) : zm(c, e) ? (n = !0, e.logger?.debug(
        "[MarkerEdit] unknown-split paragraph rejoined its predecessor on marker degradation"
      )) : n = Ht(c, e) || n;
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
    const f = C1(d, e, r);
    if (n = f.mutated || n, !f.handled) {
      if (r === "idle" && uf(d, e.getMarker, e.viewOptions)) {
        e.pendingKeys.add(u);
        continue;
      }
      n = Ht(d, e) || n;
    }
  }
  return n;
}
function Wm(e) {
  if (tn(e.getNextSibling())) return !0;
  for (let t = e.getParent(); t; t = t.getParent())
    if (I(t)) return Yi(t) !== void 0;
  return !1;
}
function S1(e) {
  const t = vn(e);
  if (!t) return !1;
  const r = Cn(t.kind);
  return !Io(
    r,
    r.scanPieces(t.owner),
    r.expectedPieces(t.owner)
  );
}
function Sf(e) {
  for (let t = e.getParent(); t; t = t.getParent())
    if (gt(t) || Fe(t) || xh(t)) return !0;
  return !1;
}
function M1(e, t) {
  const r = e.getTextContent(), n = ne(e, oe), i = e.getParent();
  if (n !== "attribute" && Me(i)) {
    r.replace(/^[ \u00A0]+/, "") === Ft("c", i.getNumber()) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (T1(e, t)) return;
  if (n === "attribute") {
    S1(e) ? t.pendingKeys.delete(e.getKey()) : t.pendingKeys.add(e.getKey());
    return;
  }
  if (!r.includes("\\")) {
    if (r.includes("|") && Wm(e)) t.pendingKeys.add(e.getKey());
    else if (r.includes("//") && !Sf(e))
      t.pendingKeys.add(e.getKey());
    else if (ch(e)) t.pendingKeys.add(e.getKey());
    else if (Me(ks(e))) t.pendingKeys.add(e.getKey());
    else {
      const a = e.getParent();
      I(a) && dh(a) && t.pendingKeys.add(a.getKey()), t.pendingKeys.delete(e.getKey());
    }
    return;
  }
  if (Sf(e)) return;
  const s = O(), o = P(s) && s.isCollapsed() && s.anchor.key === e.getKey() ? r.slice(0, s.anchor.offset) : r;
  if (WM.test(o)) {
    if (uk(r)) {
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
function E1(e, t) {
  return e.deletionPolicy !== "remove-owner" || e.byteFormat.writer !== "read-only" ? !1 : Eh(e, t);
}
function A1(e) {
  const t = (r) => {
    if (w(r)) {
      en(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    if (tn(r)) {
      bh(r) || e.pendingKeys.add(r.getKey());
      return;
    }
    for (const n of ls)
      n.settleScope !== "none" && n.ownerPredicate(r) && (Ms(n, r) || E1(n, r)) && e.pendingKeys.add(r.getKey());
    if (we(r)) {
      r.getTextContent() !== Ft("v", r.getNumber()) && e.pendingKeys.add(r.getKey());
      return;
    }
    if (E(r)) {
      if (r.getType() !== Be.getType() || ne(r, oe) === "attribute") return;
      const n = r.getParent();
      if (Me(n)) {
        r.getTextContent() !== Ft("c", n.getNumber()) && e.pendingKeys.add(r.getKey());
        return;
      }
      const i = r.getTextContent();
      (i.includes("\\") || i.includes("|") && Wm(r) || i.includes("//") || ch(r) !== void 0) && e.pendingKeys.add(r.getKey());
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
const Hm = Yf(
  "COMMIT_PENDING_MARKERS_COMMAND"
);
function Oa(e) {
  const t = e();
  return Vr(Kf), Vr(dp), t;
}
const Mf = 8, P1 = 1e3;
function Qn(e, t) {
  const r = we(e) ? ["va", "vp"] : He(e) ? ["milestone"] : K(e) ? ["cat"] : (
    // A chapter's two runs must be driven in this order — `\cp`'s scan and insertion
    // anchor both depend on `\ca`'s wrapper already being in place, the same dependency
    // a verse's `\vp` has on `\va`.
    ["ca", "cp"]
  );
  for (const n of r)
    kx(Cn(n), e, t.pendingKeys);
}
function N1(e, t) {
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
    e.registerMutationListener(Or, r),
    e.registerMutationListener(wr, r)
  );
}
function xo(e, t) {
  if (e.structureProtectionMode !== "protected") return !1;
  const r = O();
  return r ? t ? yg(r, t) : P(r) && ni(r) : !1;
}
function O1(e, t, r) {
  return je(
    e.registerCommand(
      cr,
      (n) => {
        if (gs() || xo(t)) return !1;
        const i = Ws(n, e._config.namespace);
        if (!i || !i.text.includes(`
`)) return !1;
        const s = r ? yo(i.text) : i.text, o = r && t.structureProtectionMode === "protected" ? bo(s, t.getMarker) : s, a = r ? Ql(o) : o;
        if (a.includes(`
`)) {
          const c = a.split(`
`);
          let l = bf(c, t.getMarker);
          if (l === "declined" && JA(e) && (l = bf(c, t.getMarker)), l === "handled")
            return n?.preventDefault(), !0;
        }
        return !1;
      },
      st
    ),
    e.registerCommand(
      cr,
      (n) => {
        if (gs() || xo(t)) return !1;
        const i = Ws(n, e._config.namespace);
        if (!i) return !1;
        const s = bm(
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
        const i = Ws(n, e._config.namespace);
        if (!i || i.isInternal || !i.text) return !1;
        const s = i.text.split(`
`);
        if (s.length < 2 || !FM()) return !1;
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
function w1({
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
    const h = ux(o, f.pendingKeys);
    let b, p = !1, g, y = !1, x = !1, v = 0;
    const M = () => v < Mf ? !1 : (f.logger?.warn(
      `[MarkerEdit] settle cascade exceeded ${Mf} consecutive mutating passes; leaving ${f.pendingKeys.size} node(s) pending. This is a rebuild that never reaches a fixed point — pending keys: ${[...f.pendingKeys].join(", ")}`
    ), !0), A = (_, U = "departure") => {
      o.update(() => {
        v = Oa(
          () => zs(f, _, U)
        ) ? v + 1 : 0;
      });
    };
    let F;
    const B = () => {
      if (F !== void 0 && clearTimeout(F), F = void 0, x || f.pendingKeys.size === 0) return;
      const _ = d.current ?? P1;
      _ < 0 || (F = setTimeout(() => {
        F = void 0, !(x || f.pendingKeys.size === 0) && (p || M() || A(void 0, "idle"));
      }, _));
    }, j = je(
      o.registerNodeTransform(gr, (_) => {
        if (o.isComposing()) return;
        g1(_, f);
        const U = vn(_);
        U && (we(U.owner) || K(U.owner) || Me(U.owner) || He(U.owner) && qo(U.owner).wrapper === void 0) && Qn(U.owner, f);
      }),
      o.registerNodeTransform(pt, (_) => {
        o.isComposing() || (b1(_, f), Qn(_, f));
      }),
      o.registerNodeTransform(qt, (_) => {
        o.isComposing() || (x1(_), _.isAttached() && Qn(_, f));
      }),
      o.registerNodeTransform(rt, (_) => {
        o.isComposing() || gE(_, f);
      }),
      o.registerNodeTransform(ye, (_) => {
        if (!o.isComposing()) {
          kE(_, f);
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
      o.registerNodeTransform(wr, (_) => {
        if (o.isComposing()) return;
        const U = vn(_);
        U && (He(U.owner) || we(U.owner) || K(U.owner) || Me(U.owner)) && Qn(U.owner, f);
      }),
      o.registerNodeTransform(Ae, (_) => {
        o.isComposing() || (bE(_, f), Qn(_, f));
      }),
      // Unmatched-marker bytes are editable text in this mode; their edits pend and settle
      // exactly like closer-glyph edits (see $unmatchedNodeTransform). Its own registration —
      // Lexical dispatches transforms by exact node type, so neither the TextNode catch-all
      // below nor the MarkerNode transform above ever fires for this subclass.
      o.registerNodeTransform($r, (_) => {
        o.isComposing() || m1(_, f);
      }),
      // Plain-TextNode catch-all for typed/pasted literal backslash sequences (Tier 2).
      // Lexical dispatches transforms by exact node type, so this never fires for
      // MarkerNode/VerseNode subclasses — TextSpacingPlugin relies on the same fact.
      o.registerNodeTransform(Be, (_) => {
        o.isComposing() || M1(_, f);
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
      N1(o, f),
      ...c ? [
        o.registerNodeTransform(Be, (_) => {
          o.isComposing() || IE(_);
        }),
        o.registerCommand(
          ii,
          (_) => pf(
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
            pf(
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
          (_) => HE(
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
        () => (!xo(f) && !gs() && pc(f), !1),
        st
      ),
      o.registerCommand(
        Gs,
        () => (o.isComposing() || fE(f), !1),
        jr
      ),
      o.registerCommand(
        Eo,
        () => (p = !1, v = 0, B(), !1),
        ft
      ),
      o.registerCommand(
        Nr,
        (_) => (p = !1, v = 0, B(), (_.key === "Backspace" || _.key === "Delete") && !xo(f, pg(_)) && (pc(f), dE(f), queueMicrotask(() => {
          f.wholeParaDeleteExpected?.clear(), f.collapsedDeleteCaretParas?.clear();
        })), o.isComposing() || !_.ctrlKey || _.altKey || _.shiftKey || _.metaKey || _.key !== " " && _.code !== "Space" || !UM() ? !1 : (_.preventDefault(), !0)),
        Oe
      ),
      o.registerCommand(
        Hf,
        (_) => {
          const U = Rm();
          U === "needs-plain-split" && o.dispatchCommand(Ji, void 0);
          const W = U !== "declined" || Tx();
          return W && _?.preventDefault(), zs(f), W;
        },
        Oe
      ),
      // A chapter line cannot be split: Enter there starts a `\p` after it and a line break is
      // refused (see chapterLine.utils.ts). CRITICAL so both run ahead of every split, including
      // this plugin's own char-stack split below.
      o.registerCommand(
        Ji,
        () => ym(Gt, f.viewOptions),
        st
      ),
      o.registerCommand(
        hb,
        () => eA(),
        st
      ),
      // A drop inserts through Lexical's clipboard path, which splits at every line break without
      // going through INSERT_PARAGRAPH_COMMAND, so a drop on a chapter line is claimed and goes in
      // as a paste there does. LOW: below structure protection's HIGH block and the NORMAL
      // replace-selection delete, above Lexical's own insertion at EDITOR.
      o.registerCommand(
        Gs,
        (_) => {
          if (typeof _ == "string" || !_.dataTransfer) return !1;
          const { text: U } = um(_.dataTransfer, o._config.namespace);
          return !!U && bm(
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
        () => (f.splitExpected.current = !0, Rg()),
        Oe
      ),
      O1(o, f, c),
      o.registerCommand(
        Hm,
        () => {
          if (p) return !0;
          const _ = o.getRootElement(), U = _?.ownerDocument, W = !!_ && !!U && U.hasFocus() && _.contains(U.activeElement);
          let fe;
          if (W) {
            const Q = O();
            fe = P(Q) ? Q.focus.key : b;
          }
          return Oa(() => zs(f, fe)), !0;
        },
        ft
      ),
      o.registerCommand(
        Ic,
        () => {
          if (p) return !1;
          const _ = O(), U = P(_) ? _.focus.key : b;
          return Oa(() => zs(f, U)), !1;
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
          f.pendingKeys.clear(), _.read(() => A1(f)), p = !0, W !== void 0 && (b = W);
          return;
        }
        if (U.has(Wr)) {
          W !== void 0 && W !== fe && (p = !0);
          return;
        }
        p || (W !== void 0 && (b = W), B(), !(y || W === void 0) && [...f.pendingKeys].some((Q) => Q !== W) && (y = !0, queueMicrotask(() => {
          y = !1, !x && (M() || A(b));
        })));
      })
    );
    return () => {
      x = !0, F !== void 0 && clearTimeout(F), F = void 0, h(), j(), l.current = void 0;
    };
  }, [o, a, c]), null;
}
const q1 = ["status_unknown", "status_invalid"], Gm = {
  unknown: "This marker is not in the stylesheet!",
  invalid: "This marker is not valid here!"
}, R1 = Object.values(Gm);
function $1(e, t) {
  e.classList.toggle("status_unknown", t === "unknown"), e.classList.toggle("status_invalid", t === "invalid");
  const r = Gm[t];
  e.getAttribute("aria-description") !== r && (e.setAttribute("aria-description", r), e.title = r);
}
function Ef(e) {
  e.classList.remove(...q1), e.removeAttribute("aria-description"), R1.includes(e.title) && e.removeAttribute("title");
}
function L1(e, t, r, n) {
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
function I1(e) {
  const t = se(e), r = t?.getTopLevelElement();
  return !t || !r ? !1 : t.getKey() === r.getKey() ? !0 : w(t) && t.getParent()?.getKey() === r.getKey();
}
function D1({
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
        const d = DA(s, l);
        let u = d;
        if (l) {
          u = new Map(d);
          for (const [f, h] of o) {
            if (u.has(f) || I1(f)) continue;
            const b = se(f)?.getTopLevelElement();
            !b || l.has(b.getKey()) || u.set(f, h);
          }
        }
        for (const [f] of o) {
          if (u.has(f)) continue;
          const h = n.getElementByKey(f);
          h && Ef(h);
        }
        for (const [f, h] of u) {
          const b = n.getElementByKey(f);
          b && $1(b, h);
        }
        o = u, r?.debug(`[MarkerValidation] pass: ${u.size} flagged`);
      });
    };
    a();
    const c = n.registerUpdateListener(
      ({ editorState: l, prevEditorState: d, dirtyElements: u, dirtyLeaves: f }) => {
        u.size === 0 && f.size === 0 || a(
          L1(l, d, u, f)
        );
      }
    );
    return () => {
      c();
      for (const [l] of o) {
        const d = n.getElementByKey(l);
        d && Ef(d);
      }
    };
  }, [n, i, t, r]), null;
}
function Jm(e, t, r) {
  const n = Math.min(e.length, t.length);
  for (let i = 0; i < n; i++) {
    const s = e[i], o = t[i];
    r.set(s.getKey(), { node: o, siblings: t });
    const a = Pr(o);
    a && L(s) && Jm(s.getChildren(), a, r);
  }
}
function Ym(e, t) {
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
function Xm(e, t, r) {
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
function Qm(e, t) {
  const r = [];
  for (const n of e)
    Fg(n, t) || ((ce(n) || I(n)) && r.push(n.getMarker()), L(n) && r.push(...Qm(n.getChildren(), t)));
  return r;
}
function Zm(e) {
  const t = [];
  for (const r of e) {
    const n = jl(r);
    (n === "para" || n === "char") && t.push(r.marker ?? "");
    const i = Pr(r);
    i && t.push(...Zm(i));
  }
  return t;
}
function ou(e, t, r) {
  const n = Qm(e, r), i = Zm(t);
  return n.length === i.length && n.every((s, o) => s === i[o]);
}
function U1(e, t) {
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
function au(e, t) {
  const r = t.node.getKey(), n = e.spans.find(
    (o) => !o.isSentinel && o.key === r
  );
  if (!n || n.end - n.start !== t.node.getTextContentSize()) return e.text;
  const i = n.start + t.caretOffset, s = i - t.run.length;
  return s < n.start || e.text.slice(s, i) !== t.run ? e.text : e.text.slice(0, s) + e.text.slice(i);
}
function F1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r;
  if (e.length === 0) return;
  const c = { text: "", spans: [], sentinels: [] };
  for (const g of e) {
    const y = Vl(g, o, s);
    if (!y) return;
    c.text.length > 0 && (c.text += " ");
    const x = c.text.length;
    y.spans.forEach(
      (v) => c.spans.push({ ...v, start: v.start + x, end: v.end + x })
    ), c.sentinels.push(...y.sentinels), c.text += y.text;
  }
  const l = i ? au(c, i) : c.text, d = Zr(l, {
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
  if (jo(u) !== c.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const f = Xm(c, t, n);
  if (!f) {
    a?.warn("[MarkerEdit] Settled USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Pi(u, o) === Ai(e, o) && ou(e, u, o)) {
    a?.debug("[MarkerEdit] Settled USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  Ym(u, f);
  const b = z1(e), p = ey(u);
  for (let g = 0; g < b.length && g < p.length; g++)
    b[g].sid !== void 0 && p[g].number === b[g].number && (p[g].sid = b[g].sid);
  return u;
}
function z1(e) {
  const t = [], r = (n) => {
    we(n) ? t.push({ number: n.getNumber(), sid: n.getSid() }) : L(n) && n.getChildren().forEach(r);
  };
  return e.forEach(r), t;
}
function ey(e) {
  const t = [];
  for (const r of e) {
    Bp(r) && t.push(r);
    const n = Pr(r);
    n && t.push(...ey(n));
  }
  return t;
}
function K1(e, t, r, n, i) {
  const { viewOptions: s, getMarker: o, logger: a } = r, c = Jg(e, o, s);
  if (!c) return;
  const { out: l, contentNodes: d } = c;
  if (d.length === 0) return;
  const u = i ? au(l, i) : l.text, f = Zr(u, {
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
  const b = h.content ?? [], p = Yg(b), g = e.getCategory() !== p, y = Dg(e, b, p, s);
  if (y.failure !== void 0) {
    y.failure === "shape" ? a?.warn("[MarkerEdit] Settled note USJ skipped: unexpected serialized shape") : y.failure === "caller" && a?.warn("[MarkerEdit] Settled note USJ skipped: serialized note lacks the caller");
    return;
  }
  const x = y.children;
  if (jo(x) !== l.sentinels.length) {
    a?.warn(
      "[MarkerEdit] Settled note USJ skipped: serialized sentinel/preserved-node count mismatch"
    );
    return;
  }
  const v = Xm(l, t, n);
  if (!v) {
    a?.warn("[MarkerEdit] Settled note USJ skipped: a preserved node had no serialized form");
    return;
  }
  if (Pi(x, o) === Ai(d, o) && ou(d, x, o)) {
    if (g)
      return { rebuilt: void 0, contentNodes: d, category: p, categoryChanged: g };
    a?.debug("[MarkerEdit] Settled note USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return Ym(x, v), { rebuilt: x, contentNodes: d, category: p, categoryChanged: g };
}
function Af(e) {
  return e.$?.textType;
}
function B1(e, t) {
  const r = e, n = t;
  return r.type === "text" && n.type === "text" && r.format === n.format && r.style === n.style && r.mode === n.mode && r.detail === n.detail && Af(e) === Af(t);
}
function j1(e) {
  const t = [];
  for (const r of e) {
    const n = se(r);
    n?.isAttached() && Fe(n) && n.getTag() === "optbreak" && n.getChildrenSize() === 0 && t.push(n);
  }
  return t;
}
function V1(e) {
  if (!w(e) || e.getMarkerSyntax() !== "opening") return;
  const t = e.getParent();
  if (!K(t)) return;
  const r = e.getTextContent();
  if (en(e)) return;
  const n = Lg.exec(r);
  if (!n) return;
  const i = n[1];
  if (i.startsWith("+")) return;
  const s = e.getMarker();
  if (t.getMarker() === s)
    return { glyph: e, note: t, oldMarker: s, newMarker: i };
}
function Pf(e, t) {
  const r = e;
  r.marker = t, r.text = Kg(t, r.markerSyntax, r.nested);
}
function W1(e, t) {
  const { glyph: r, note: n, oldMarker: i, newMarker: s } = e;
  if (!Ae.isValidMarker(s)) return;
  const o = t.get(n.getKey());
  o && (o.node.marker = s);
  const a = t.get(r.getKey());
  a && Pf(a.node, s);
  const c = n.getChildren().filter(w).filter((d) => d.getMarkerSyntax() === "closing" && d.getMarker() === i).at(-1), l = c && t.get(c.getKey());
  l && Pf(l.node, s);
}
function H1(e, t, r) {
  const { viewOptions: n, getMarker: i, logger: s } = t, o = Zg(e, i, n);
  if (!o) return;
  const a = r ? au(o, r) : o.text, c = em(a, i);
  if (Fn(c) !== 0) {
    s?.warn("[MarkerEdit] Settled chapter USJ skipped: unexpected preserved-node placeholder");
    return;
  }
  const l = c.find(
    (b) => typeof b == "object" && b.type === "chapter"
  );
  l && e.getSid() !== void 0 && (l.sid = e.getSid());
  const d = Ar.serializeEditorState(
    { type: Cr, version: _r, content: c },
    n
  ).root.children, [u] = c;
  if (typeof u != "object" || u.type !== "chapter") return d;
  const f = [e, ...yi(e)];
  if (!(e.getNumber() !== (u.number ?? "") || e.getAltnumber() !== u.altnumber || e.getPubnumber() !== u.pubnumber) && Pi(d, i) === Ai(f, i) && ou(f, d, i)) {
    s?.debug("[MarkerEdit] Settled chapter USJ skipped: rebuild is a no-op (fixed point)");
    return;
  }
  return d;
}
function G1(e, t, r, n, i) {
  const s = U1(n, i);
  if (t.size === 0 && !s) return;
  const o = /* @__PURE__ */ new Map(), a = [], c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = (g) => {
    K(g) ? c.set(g.getKey(), g) : Me(g) ? l.set(g.getKey(), g) : o.set(g.getKey(), [g]);
  };
  for (const g of t) {
    const y = se(g);
    if (!y?.isAttached()) continue;
    const x = ks(y);
    if (x) {
      if (u(x), w(y)) {
        const v = Fm(y, r.getMarker);
        v && a.push(v);
      }
      if (K(x)) {
        const v = V1(y);
        v && d.set(x.getKey(), v);
      }
    }
  }
  const f = /* @__PURE__ */ new Set();
  for (const g of a)
    g.some((y) => f.has(y.getKey())) || (g.forEach((y) => {
      f.add(y.getKey()), o.delete(y.getKey());
    }), o.set(g[0].getKey(), g));
  if (s) {
    const g = ks(s.node);
    g && u(g);
  }
  const h = j1(t);
  if (o.size === 0 && c.size === 0 && l.size === 0 && h.length === 0)
    return;
  const b = new Set(h.map((g) => g.getKey())), p = /* @__PURE__ */ new Map();
  Jm(Re().getChildren(), e.root.children, p);
  for (const g of d.values()) W1(g, p);
  for (const g of c.values()) {
    const y = p.get(g.getKey()), x = y ? Pr(y.node) : void 0;
    if (!y || !x) continue;
    const v = K1(g, p, r, b, s);
    if (!v) continue;
    if (v.categoryChanged) {
      const F = y.node;
      v.category === void 0 ? delete F.category : F.category = v.category;
    }
    if (!v.rebuilt) continue;
    const M = p.get(v.contentNodes[0].getKey());
    if (!M) continue;
    const A = x.indexOf(M.node);
    A < 0 || x.splice(A, v.contentNodes.length, ...v.rebuilt);
  }
  for (const g of o.values()) {
    const y = p.get(g[0].getKey());
    if (!y) continue;
    const x = F1(g, p, r, b, s);
    if (!x) continue;
    const v = y.siblings.indexOf(y.node);
    v < 0 || y.siblings.splice(v, g.length, ...x);
  }
  for (const g of l.values()) {
    const y = p.get(g.getKey());
    if (!y) continue;
    const x = 1 + yi(g).length, v = H1(g, r, s);
    if (!v) continue;
    const M = y.siblings.indexOf(y.node);
    M < 0 || y.siblings.splice(M, x, ...v);
  }
  for (const g of h) {
    const y = p.get(g.getKey());
    if (!y) continue;
    const x = y.siblings.indexOf(y.node);
    if (x < 0) continue;
    y.siblings.splice(x, 1);
    const v = y.siblings[x - 1], M = y.siblings[x], A = v && mi(v), F = M && mi(M);
    v && M && A !== void 0 && F !== void 0 && B1(v, M) && (v.text = A + F, y.siblings.splice(x, 1));
  }
  return Mg(e, r.viewOptions);
}
function J1({
  viewOptions: e,
  logger: t
}) {
  const [r] = ae(), n = Un(e) && (e?.markerMode === "visible" || (e?.hasGutterParaMarkers ?? !1));
  return z(() => {
    if (n)
      return r.registerNodeTransform(
        rt,
        (i) => Y1(i, t)
      );
  }, [r, n, t]), null;
}
function Y1(e, t) {
  e.getMarker() !== Gt && (e.isEmpty() || Bt(e.getFirstChild()) || (t?.debug(
    `[ParaMarkerPrefixGuard] Resetting paragraph "${e.getMarker()}" → "${Gt}" (key ${e.getKey()})`
  ), e.setMarker(Gt)));
}
function X1({
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
    i.scrRef = e, i.onScrRefChange = t, _o(s, e) || Q1(i, r, e);
  }, [r, e, t]), z(
    () => r.registerMutationListener(
      Kt,
      (i, { prevEditorState: s }) => {
        const o = [...i.values()];
        if (o.every((c) => c === "destroyed")) return;
        const a = Ac(r);
        Nf(n.current, r, a, {
          hasCreated: o.includes("created"),
          hasDestroyed: o.includes("destroyed"),
          isSameDocumentReload: Ks(s) === Ks(r.getEditorState())
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
      f && (Ac(r) || Nf(n.current, r, void 0, {
        hasCreated: f,
        hasDestroyed: [...d].some((h) => !u.has(h)),
        isSameDocumentReload: Ks(a) === Ks(c)
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
        return i.phase === "idle" && rP(i, eP()), !1;
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
    const i = () => oP(n.current);
    return r.registerRootListener((s, o) => {
      o?.removeEventListener("pointerdown", i), o?.removeEventListener("keydown", i), o?.removeEventListener("beforeinput", i), s?.addEventListener("pointerdown", i), s?.addEventListener("keydown", i), s?.addEventListener("beforeinput", i);
    });
  }, [r]), null;
}
function Q1(e, t, r) {
  if (Z1(e, r)) return;
  e.phase = "navigating", e.pendingEchoes.length = 0;
  const n = Ac(t);
  (!n || n === r.book) && t.update(() => ty(r.chapterNum, r.verseNum), {
    tag: Wr
  });
}
function Z1(e, t) {
  const r = e.pendingEchoes.findIndex((n) => _o(n, t));
  return r < 0 ? !1 : (e.pendingEchoes.splice(0, r + 1), e.phase = "idle", !0);
}
function eP() {
  const e = O(), t = Yc(e);
  if (!t) return;
  const r = cu(), n = Wp(t);
  if (!n && !r) return;
  const i = n ? parseInt(n.getNumber() ?? "1", 10) : 1;
  if (Number.isNaN(i)) return;
  const s = gl(t, e), { verseNum: o, verse: a } = Kx(s ?? void 0, e);
  if (!Number.isNaN(o))
    return { book: r?.getCode() || void 0, chapterNum: i, verseNum: o, verse: a };
}
function Ac(e) {
  return e.getEditorState().read(() => cu()?.getCode() || void 0);
}
function cu() {
  return Re().getChildren().find(gt);
}
function Nf(e, t, r, n) {
  const i = n.hasCreated && !e.sawDocument;
  if (n.hasCreated && (e.sawDocument = !0), e.phase === "navigating") {
    n.hasCreated && (!r || r === e.scrRef.book) && wa(e, t);
    return;
  }
  n.hasCreated && n.hasDestroyed ? (n.isSameDocumentReload || wa(e, t), e.phase = "navigating") : i && wa(e, t), r && r !== e.scrRef.book && iy(e, { ...e.scrRef, book: r }) && (e.phase = "navigating");
}
function wa(e, t) {
  queueMicrotask(() => {
    t.update(
      () => ty(e.scrRef.chapterNum, e.scrRef.verseNum),
      { tag: Wr }
    );
  });
}
function ty(e, t) {
  const r = Yc(O()), n = ml(r)?.getNumber(), i = Wp(r);
  if ((i ? parseInt(i.getNumber() ?? "1", 10) : 1) === e && n && (Qp(n) ? ny(t, n) : parseInt(n, 10) === t))
    return;
  const o = Re().getChildren(), a = Vp(o, e);
  if (!a) return;
  const c = nT(o, a), l = Yk(c, !0);
  rT(c, l);
  let d;
  try {
    d = Ix(c, t);
  } catch {
    return;
  }
  d && (ce(d) ? !E(d.getFirstChild()) && Ei(d) || Zt(d, 0) : tP(d));
}
function tP(e) {
  const t = e.getParent();
  if (!t) return;
  const r = e.getIndexWithinParent() + 1, n = t.getChildAtIndex(r);
  if (!n || ge(n)) {
    Zt(t, r);
    return;
  }
  const i = Lo(t, r);
  if (i) {
    i.select(0, 0);
    return;
  }
  if (E(e)) {
    const o = e.getTextContentSize();
    e.select(o, o);
    return;
  }
  const s = L(n) && !K(n) ? ry(n) : void 0;
  s ? s.select(0, 0) : Zt(t, r);
}
function ry(e) {
  const t = e.getFirstChild();
  if (E(t)) return t;
  if (L(t) && !K(t)) return ry(t);
}
function Ks(e) {
  return e.read(() => {
    const t = Re().getChildren().find(Ge);
    return `${cu()?.getCode() ?? ""}|${t?.getNumber() ?? ""}`;
  });
}
function rP(e, t) {
  e.phase !== "navigating" && t && (nP(t, e.scrRef) || iy(e, iP(t, e.scrRef)));
}
function nP(e, t) {
  return e.book && e.book !== t.book || e.chapterNum !== t.chapterNum ? !1 : e.verse ? ny(t.verseNum, e.verse) : t.verseNum === e.verseNum;
}
function ny(e, t) {
  try {
    return Xc(e, t);
  } catch {
    return !1;
  }
}
function iP(e, t) {
  const r = {
    book: e.book || t.book,
    chapterNum: e.chapterNum,
    verseNum: e.verseNum
  };
  return e.verse != null && (r.verse = e.verse), t.versificationStr != null && (r.versificationStr = t.versificationStr), r;
}
const sP = 8;
function iy(e, t) {
  return _o(t, e.scrRef) || e.pendingEchoes.some((r) => _o(r, t)) ? !1 : (e.pendingEchoes.push(t), e.pendingEchoes.length > sP && e.pendingEchoes.shift(), e.onScrRefChange(t), !0);
}
function _o(e, t) {
  return e.book === t.book && e.chapterNum === t.chapterNum && e.verseNum === t.verseNum && (e.verse ?? void 0) === (t.verse ?? void 0);
}
function oP(e) {
  e.phase = "idle";
}
function aP(e) {
  return gt(e) ? `${e.__code}` : Me(e) ? `${e.__marker} "${e.__number}"` : I(e) ? `${e.__marker}` : Cs(e) ? `${e.__marker} "${e.__number}"` : mt(e) ? `${e.__caller}` : Dn(e) ? `${e.__marker} "${e.__number}"` : K(e) ? `${e.__marker} "${e.__caller}"` + (e.__isCollapsed ? " (collapsed)" : " (expanded)") : ce(e) ? `${e.__marker}` : E(e) ? `"${e.__text}"${cP(e)}` : Ce(e) ? `ids: [ ${JSON.stringify(e.getTypedIDs())} ]` : we(e) ? `${e.__marker} "${e.__number}"` : "";
}
function cP(e) {
  return e.__state ? " " + JSON.stringify(e.__state.toJSON()[_s]) : "";
}
function lP() {
  const [e] = ae();
  return /* @__PURE__ */ S(
    Tb,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      customPrintNode: aP,
      editor: e
    }
  );
}
const sy = Df(null), Of = 4;
function uP({
  children: e,
  className: t,
  onClick: r,
  title: n
}) {
  const i = ee(null), s = Uf(sy);
  if (s === null)
    throw new Error("DropDownItem must be used within a DropDown");
  const { registerItem: o } = s;
  return z(() => {
    i && i.current && o(i);
  }, [i, o]), /* @__PURE__ */ S("button", { className: t, onClick: r, ref: i, title: n, type: "button", children: e });
}
function dP({
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
  }, [n, s]), /* @__PURE__ */ S(sy.Provider, { value: l, children: /* @__PURE__ */ S("div", { className: "dropdown", ref: t, onKeyDown: c, children: e }) });
}
function fP({
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
      const { top: b, left: p } = f.getBoundingClientRect();
      h.style.top = `${b + f.offsetHeight + Of}px`, h.style.left = `${Math.min(p, window.innerWidth - h.offsetWidth - 20)}px`;
    }
  }, [a, c, l]), z(() => {
    const f = c.current;
    if (f !== null && l) {
      const h = (b) => {
        const p = b.target;
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
        const h = c.current, b = a.current;
        if (h !== null && b !== null) {
          const { top: p } = h.getBoundingClientRect(), g = p + h.offsetHeight + Of;
          g !== b.getBoundingClientRect().top && (b.style.top = `${g}px`);
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
      /* @__PURE__ */ S(dP, { dropDownRef: a, onClose: u, children: s }),
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
function pP({
  editorRef: e,
  blockMarker: t,
  disabled: r = !1
}) {
  return /* @__PURE__ */ S(
    fP,
    {
      disabled: r,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-marker " + hP(t),
      buttonLabel: gP(t),
      buttonAriaLabel: "Formatting options for block type",
      children: Object.keys(Pc).map((n) => /* @__PURE__ */ xe(
        uP,
        {
          className: "item block-marker " + mP(t === n),
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
function hP(e) {
  return e && e in Nc ? e : "ban";
}
function gP(e) {
  return e && e in Nc ? Nc[e] : "No Style";
}
function mP(e) {
  return e ? "active dropdown-item-active" : "";
}
function wf() {
  return /* @__PURE__ */ S("div", { className: "divider" });
}
const yP = Nn(function({ editorRef: t, isReadonly: r = !1, onStateChange: n }, i) {
  const [s] = ae(), [o, a] = de(s), [c, l] = de(), [d, u] = de(!1), [f, h] = de(!1), b = me(
    ({
      canUndo: p,
      canRedo: g,
      blockMarker: y,
      contextMarker: x
    }) => {
      u(p), h(g), l(y), n?.({
        canUndo: p,
        canRedo: g,
        blockMarker: y,
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
    /* @__PURE__ */ S(fg, { onStateChange: b }),
    /* @__PURE__ */ xe("div", { className: "toolbar", children: [
      /* @__PURE__ */ S(
        "button",
        {
          disabled: !d || r,
          onClick: () => {
            o.dispatchCommand(Xf, void 0);
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
            o.dispatchCommand(Qf, void 0);
          },
          title: oi ? "Redo (⌘Y)" : "Redo (Ctrl+Y)",
          type: "button",
          className: "toolbar-item",
          "aria-label": "Redo",
          children: /* @__PURE__ */ S("i", { className: "format redo" })
        }
      ),
      /* @__PURE__ */ S(wf, {}),
      o === s && /* @__PURE__ */ xe(bn, { children: [
        /* @__PURE__ */ S(
          pP,
          {
            editorRef: t,
            blockMarker: c,
            disabled: r
          }
        ),
        /* @__PURE__ */ S(wf, {})
      ] }),
      /* @__PURE__ */ S("div", { ref: i, className: "end-container" })
    ] })
  ] });
}), bP = pi(), kP = {}, TP = {};
function xP() {
  return /* @__PURE__ */ S("div", { className: "editor-placeholder", children: "Enter some Scripture..." });
}
const oy = Nn(function({
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
  const u = ee(null), f = ee(null), h = ee(null), b = ee(t), p = ee(void 0), g = ee(void 0), y = ee(void 0), x = ee(void 0), v = ee(!1), [M, A] = de(t), [F, B] = de(0), [j, _] = de(), {
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
  } = a ?? TP, G = tr ?? bP, ue = hs(G) && (G.markerMode !== "hidden" || !G.hasSpacing || G.hasGutterParaMarkers || G.hasActiveTextFocusBox) ? {
    ...G,
    markerMode: "hidden",
    hasSpacing: !0,
    hasGutterParaMarkers: !1,
    hasActiveTextFocusBox: !1
  } : G, Ee = ee(ue);
  Pt(Ee.current, ue) || (Ee.current = ue);
  const Z = Ee.current, Se = Ke(() => Le ?? kP, [Le]), yr = Ke(() => mr, [mr]), Rt = Ke(
    () => fl(Et ?? di),
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
      getItems: (V) => WA(
        q,
        V,
        Se.extraValidMarkers
      ),
      getEnterItems: (V) => HA(
        q,
        V,
        Se.extraValidMarkers
      ),
      apply: (V, J) => {
        const X = br.current;
        X && (J.trigger === "enter" ? X.splitParagraphWithMarker(V.marker) : X.applyMarkerMenuSelection(V, J));
      },
      commitTypedCloser: (V) => {
        br.current?.commitTypedCloser(V);
      }
    };
  }, [Z, Et, Se.extraValidMarkers]), kr = (q) => {
    v.current || (v.current = !0, sn.current?.warn(
      `Editor: cannot ${q} in the block verse layout; its paragraphs are split across verse blocks, so editor content indexes do not match the source USJ.`
    ));
  }, Ni = (q) => {
    if (le)
      throw new Error(
        `Cannot ${q} in the block verse layout; it is a read-only view whose structure does not match the source USJ.`
      );
  }, bt = (q) => {
    if (Ni(q), yt) throw new Error(`Cannot ${q} in readonly mode`);
  }, As = Ke(
    () => ({
      namespace: "platformEditor",
      theme: { ...Am, showCharMarkerTitles: Z.showCharMarkerTitles },
      editable: !yt,
      editorState: void 0,
      // Handling of errors during update
      onError(q) {
        throw q;
      },
      // Registered per layout so an editor that isn't using block verse never holds its node.
      nodes: [tt, ...le ? F_ : _l]
    }),
    [yt, le, Z.showCharMarkerTitles]
  );
  js.initialize(We);
  function Tr(q) {
    if (q !== void 0 && !sA(q, Se.extraValidMarkers))
      throw new Error(`Unsupported character marker '${q}'`);
  }
  const on = me(() => {
    const q = u.current;
    if (!q) return b.current;
    const V = Xu(q), J = g.current;
    if ((!V || V.size === 0) && !J) return b.current;
    const X = q.getEditorState(), ke = X.toJSON();
    return X.read(
      () => G1(
        ke,
        V ?? /* @__PURE__ */ new Set(),
        { viewOptions: Z, getMarker: Rt, logger: We },
        J,
        y.current
      )
    ) ?? b.current;
  }, [Z, Rt, We]), Oi = {
    focus() {
      u.current?.focus();
    },
    isFocused() {
      const q = u.current?.getRootElement();
      return !!q && q.ownerDocument.activeElement === q;
    },
    undo() {
      u.current?.dispatchCommand(Xf, void 0);
    },
    redo() {
      u.current?.dispatchCommand(Qf, void 0);
    },
    // Both leave the clipboard untouched when nothing is selected, rather than writing a
    // placeholder over it — `ClipboardPlugin`'s guard claims the command (shared-react's
    // `registerEmptyCopyGuard`). Going through `copySelection`/`cutSelection` rather than
    // dispatching here keeps that one seam named.
    cut() {
      bt("cut"), u.current && ql(u.current);
    },
    copy() {
      u.current && wl(u.current);
    },
    paste() {
      bt("paste"), u.current && Rl(u.current);
    },
    pastePlainText() {
      bt("paste as plain text"), u.current && $l(u.current);
    },
    getUsj() {
      return on();
    },
    commitPendingMarkerEdits() {
      u.current?.update(
        () => {
          u.current?.dispatchCommand(Hm, void 0);
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
      g.current = { input: q, nodeKey: V ?? y.current?.key };
    },
    setUsj(q, V) {
      const J = Pt(b.current, q) || Pt(on(), q);
      if (V?.force || !J) {
        b.current = q, g.current = void 0;
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
      Ni("apply an update"), u.current?.update(
        () => {
          V === "remote" && Vr(ns), pC(q, Z, Se, We);
        },
        { discrete: !0 }
      );
      const J = u.current?.getEditorState();
      if (!J) return;
      const X = js.deserializeEditorState(J, Z);
      if (X) {
        const ke = !Pt(b.current, X);
        if (ke && (b.current = X), ke || !Pt(M, X)) {
          const Qe = ld(q, J, "apply");
          x.current = X, s?.(X, q, V, Qe);
        }
      }
    },
    replaceEmbedUpdate(q, V) {
      const J = u.current?.read(() => e_(q, V));
      J ? this.applyUpdate(J) : c?.warn(
        `replaceEmbedUpdate: no embed found for key "${q}" — update dropped (stale key after a setUsj reload?)`
      );
    },
    getSelection() {
      if (le) {
        kr("get the selection");
        return;
      }
      return u.current?.read(Tl);
    },
    setSelection(q) {
      if (le) {
        kr("set the selection");
        return;
      }
      u.current?.update(() => {
        const V = Fo(q);
        V !== void 0 && (si(V), Vr(up));
      });
    },
    setAnnotation(q, V, J, X, ke) {
      if (le) {
        kr("set an annotation");
        return;
      }
      let Qe, nr, an, wi;
      typeof X == "function" || X === void 0 ? (Qe = X, nr = ke) : (Qe = X.onClick, nr = X.onRemove, an = X.onMouseEnter, wi = X.onMouseLeave), f.current?.setAnnotation(
        q,
        Uu(V),
        J,
        Qe,
        nr,
        an,
        wi
      );
    },
    removeAnnotation(q, V) {
      f.current?.removeAnnotation(Uu(q), V);
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
          Cb(V, () => ai(q));
          const J = O();
          if (!P(J)) return;
          const X = /* @__PURE__ */ new Set();
          J.getNodes().forEach((ke) => {
            const Qe = ke.getTopLevelElement();
            ce(Qe) && X.add(Qe);
          }), X.forEach((ke) => qm(ke, q, Z));
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
          P(J) && (V = _m(J, q, Z));
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
          P(X) && (J = yA(X, q, V));
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
          P(X) && (J = bA(
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
      if (!Tc(q, Se.extraValidMarkers))
        throw new Error(`Unsupported marker '${q}'`);
      const V = xc(
        q,
        p,
        Z,
        Se,
        We,
        void 0,
        Et
      );
      return V.action({ editor: u.current, reference: r }), V.getInsertedNoteKey?.();
    },
    getMarkerMenuContext() {
      if (!U)
        return u.current?.getEditorState().read(() => n1());
    },
    applyMarkerMenuSelection(q, V) {
      if (U) throw new Error("Cannot apply marker menu selection in readonly mode");
      if (!r)
        throw new Error(
          "Cannot apply marker menu selection without a scripture reference (scrRef)"
        );
      if (!u.current) return;
      if (q.kind !== "closeTag" && !Tc(q.marker, Se.extraValidMarkers))
        throw new Error(`Unsupported marker '${q.marker}'`);
      let J;
      return u.current.update(() => {
        J = c1(q, V, r, {
          expandedNoteKeyRef: p,
          viewOptions: Z,
          nodeOptions: Se,
          logger: c,
          styleInfo: Et
        });
      }), J;
    },
    splitParagraphWithMarker(q) {
      if (U) throw new Error("Cannot split paragraph in readonly mode");
      u.current && u.current.update(() => {
        Um(q, Z);
      });
    },
    commitTypedMarker(q, V) {
      if (U) throw new Error("Cannot commit a typed marker in readonly mode");
      if (!u.current) return !1;
      let J = !1;
      return u.current.update(() => {
        J = a1(q, V), J || c?.warn(
          "commitTypedMarker refused: requires a collapsed range selection (wrap a selection via applyMarkerMenuSelection instead)"
        );
      }), J;
    },
    commitTypedCloser(q) {
      if (U) throw new Error("Cannot commit a typed closing marker in readonly mode");
      if (!u.current) return !1;
      let V = !1;
      return u.current.update(() => {
        V = Dm(q), V || c?.warn(
          "commitTypedCloser refused: requires a range selection to commit the closer at"
        );
      }), V;
    },
    insertNote(q, V, J) {
      bt("insert a note"), u.current?.update(
        () => {
          const X = Kh(
            q,
            V,
            J,
            r,
            Z,
            Se,
            We
          );
          X && !X.getIsCollapsed() && (p.current = X.getKey());
        },
        { discrete: !0 }
      );
    },
    selectNote(q) {
      u.current?.update(() => {
        const V = gd(q);
        V && (I_(V, Z), V.getIsCollapsed() || (p.current = V.getKey()));
      });
    },
    getNoteOps(q) {
      return u.current?.read(() => {
        const V = gd(q);
        if (V)
          return bl(V);
      });
    },
    get toolbarEndRef() {
      return h;
    }
  };
  br.current = Oi, wc(d, () => Oi), z(() => {
    const q = u.current;
    if (q)
      return q.registerUpdateListener(({ editorState: V }) => {
        V.read(() => {
          const J = O();
          if (!P(J) || !J.isCollapsed()) return;
          const X = J.focus.getNode();
          E(X) && (y.current = { key: X.getKey(), offset: J.focus.offset });
        });
      });
  }, []);
  const rr = me(
    (q, V, J, X) => {
      if (le) return;
      const ke = js.deserializeEditorState(q, Z);
      if (ke) {
        const Qe = !Pt(b.current, ke);
        if (Qe && (b.current = ke), Qe || !Pt(M, ke)) {
          const nr = ld(X, q);
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
        !V.has(Dc) && (J.size === 0 && X.size === 0 || V.has(ns) || !Xu(q)?.size) || queueMicrotask(() => {
          const ke = on();
          !ke || Pt(x.current, ke) || (x.current = ke, s(ke, void 0, "local", void 0));
        });
      });
  }, [s, on]);
  const jt = me(
    (q) => {
      _(q.contextMarker), o?.(q);
    },
    [o]
  );
  return (
    // A Lexical editor's node types are fixed when it is created, so switching layouts has to
    // recreate it. The key never changes for the inline layouts, which leave `verseLayout` unset.
    /* @__PURE__ */ xe(tp, { initialConfig: As, children: [
      /* @__PURE__ */ S(yv, { isEditable: !yt }),
      /* @__PURE__ */ xe("div", { className: "editor-container", children: [
        fe ? /* @__PURE__ */ S(fg, { onStateChange: jt }) : /* @__PURE__ */ S(
          "div",
          {
            className: "editor-toolbar-container" + (yt ? "-readonly" : "-editable"),
            children: /* @__PURE__ */ S(
              yP,
              {
                ref: h,
                editorRef: br,
                isReadonly: yt,
                onStateChange: jt
              }
            )
          }
        ),
        /* @__PURE__ */ xe("div", { className: "editor-inner", children: [
          /* @__PURE__ */ S(np, { editorRef: u }),
          /* @__PURE__ */ S(
            _b,
            {
              contentEditable: /* @__PURE__ */ S(
                rp,
                {
                  className: `editor-input usfm ${fC(Z).join(" ")}${Z.hasGutterParaMarkers ? " psc-gutter-markers" : ""}${Z.hasActiveTextFocusBox ? " psc-active-focus" : ""}`,
                  spellCheck: Q
                }
              ),
              placeholder: /* @__PURE__ */ S(xP, {}),
              ErrorBoundary: ip
            }
          ),
          fe && /* @__PURE__ */ S(mv, {}),
          /* @__PURE__ */ S(sp, {}),
          r && n && /* @__PURE__ */ S(X1, { scrRef: r, onScrRefChange: n }),
          r && !fe && /* @__PURE__ */ S(
            US,
            {
              trigger: be,
              scrRef: r,
              contextMarker: j,
              getMarkerAction: (q) => xc(
                q,
                p,
                Z,
                Se,
                We,
                void 0,
                Et
              ),
              editableHarness: Ne
            }
          ),
          /* @__PURE__ */ S(
            Tv,
            {
              scripture: M,
              scriptureRef: b,
              nodeOptions: Se,
              editorAdaptor: Ar,
              viewOptions: Z,
              logger: We
            },
            F
          ),
          /* @__PURE__ */ S(Fv, { onChange: i }),
          /* @__PURE__ */ S(
            oC,
            {
              onChange: rr,
              ignoreSelectionChange: !0,
              ignoreHistoryMergeTagChange: !0,
              ignoreTags: jb
            }
          ),
          /* @__PURE__ */ S(CA, { viewOptions: Z }),
          /* @__PURE__ */ S(iC, { ref: f, logger: We }),
          /* @__PURE__ */ S(UC, { viewOptions: Z }),
          /* @__PURE__ */ S(ZC, {}),
          /* @__PURE__ */ S(sv, {}),
          Z?.markerMode !== "editable" && /* @__PURE__ */ S(ov, { logger: We }),
          /* @__PURE__ */ S(uv, { options: yr }),
          /* @__PURE__ */ S(NA, { limit: N, viewOptions: Z }),
          /* @__PURE__ */ S(gv, {}),
          /* @__PURE__ */ S(kv, {}),
          /* @__PURE__ */ S(l1, {}),
          /* @__PURE__ */ S(
            w1,
            {
              viewOptions: Z,
              getMarker: Rt,
              logger: We,
              markerSettleDelayMs: re,
              structureProtectionMode: W,
              copyLimit: N
            }
          ),
          Z?.markerMode === "visible" && /* @__PURE__ */ S(PA, { viewOptions: Z, copyLimit: N }),
          /* @__PURE__ */ S(
            D1,
            {
              styleInfo: Et,
              viewOptions: Z,
              logger: We
            }
          ),
          /* @__PURE__ */ S(
            xv,
            {
              expandedNoteKeyRef: p,
              nodeOptions: Se,
              viewOptions: Z,
              logger: We
            }
          ),
          /* @__PURE__ */ S(Uv, {}),
          /* @__PURE__ */ S(RC, {}),
          /* @__PURE__ */ S(NC, {}),
          /* @__PURE__ */ S(J1, { viewOptions: Z, logger: We }),
          /* @__PURE__ */ S(zv, {}),
          /* @__PURE__ */ S(MS, { structureProtectionMode: W }),
          /* @__PURE__ */ S(ES, { textDirection: $e }),
          /* @__PURE__ */ S(PS, {}),
          /* @__PURE__ */ S(IS, {}),
          l
        ] }),
        nn && /* @__PURE__ */ S(lP, {})
      ] })
    ] }, Z.verseLayout ?? "inline")
  );
}), NN = Nn(function(t, r) {
  const { children: n, ...i } = t;
  return /* @__PURE__ */ S(oy, { ref: r, ...i });
});
function ay() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function Co(e, t, r, n, i) {
  return {
    author: t,
    content: e,
    deleted: i === void 0 ? !1 : i,
    id: r === void 0 ? ay() : r,
    timeStamp: n === void 0 ? performance.timeOrigin + performance.now() : n,
    type: "comment"
  };
}
function cy(e, t, r) {
  return {
    comments: t,
    id: r === void 0 ? ay() : r,
    quote: e,
    type: "thread"
  };
}
function qf(e) {
  return {
    comments: Array.from(e.comments),
    id: e.id,
    quote: e.quote,
    type: "thread"
  };
}
function _P(e) {
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
class CP {
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
          const c = qf(a);
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
          const c = qf(a);
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
      markedComment: _P(t)
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
      Db,
      (a) => (n !== void 0 && i !== void 0 && (a ? (this.logger?.info("Comments connected!"), n()) : (this.logger?.info("Comments disconnected!"), i())), !1),
      ft
    ), o = (a, c) => {
      if (c.origin !== this) {
        for (const l of a)
          if (l instanceof Ub) {
            const d = l.target, u = l.delta;
            let f = 0;
            for (const h of u) {
              const b = h.insert, p = h.retain, g = h.delete, y = d.parent, x = d === r ? void 0 : y instanceof Eu && this._comments.find((v) => v.id === y.get("id"));
              if (Array.isArray(b)) {
                const v = f;
                b.slice().reverse().forEach((M) => {
                  const A = M.get("id"), B = M.get("type") === "thread" ? cy(
                    M.get("quote"),
                    M.get("comments").toArray().map(
                      (j) => Co(
                        j.get("content"),
                        j.get("author"),
                        j.get("id"),
                        j.get("timeStamp"),
                        j.get("deleted")
                      )
                    ),
                    A
                  ) : Co(
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
function vP(e) {
  const [t, r] = de(e.getComments());
  return z(() => e.registerOnChange(() => {
    r(e.getComments());
  }), [e]), t;
}
function SP({
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
function MP({
  onClose: e,
  children: t,
  title: r,
  closeOnClickOutside: n = !1
}) {
  return yn(
    /* @__PURE__ */ S(SP, { onClose: e, title: r, closeOnClickOutside: n, children: t }),
    document.body
  );
}
function ly() {
  const [e, t] = de(null), r = me(() => {
    t(null);
  }, []), n = Ke(() => {
    if (e === null)
      return null;
    const { title: s, content: o, closeOnClickOutside: a } = e;
    return /* @__PURE__ */ S(MP, { onClose: r, title: s, closeOnClickOutside: a, children: o });
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
const EP = {
  ...Am,
  paragraph: "CommentEditorTheme__paragraph"
};
function AP(...e) {
  return e.filter(Boolean).join(" ");
}
function Qr({
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
      className: AP(
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
function PP({
  className: e
}) {
  return /* @__PURE__ */ S(rp, { className: e || "ContentEditable__root" });
}
function NP({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ S("div", { className: t || "Placeholder__root", children: e });
}
const Rf = Yf("INSERT_INLINE_COMMAND");
function OP({
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
function wP({ onEscape: e }) {
  const [t] = ae();
  return z(() => t.registerCommand(
    Jf,
    (r) => e(r),
    jr
  ), [t, e]), null;
}
function uy({
  className: e,
  autoFocus: t,
  onEscape: r,
  onChange: n,
  editorRef: i,
  placeholder: s = "Type a comment..."
}) {
  return /* @__PURE__ */ S(tp, { initialConfig: {
    namespace: "Commenting",
    nodes: [],
    onError: (a) => {
      throw a;
    },
    theme: EP
  }, children: /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_EditorContainer", children: [
    /* @__PURE__ */ S(
      $b,
      {
        contentEditable: /* @__PURE__ */ S(PP, { className: e }),
        placeholder: /* @__PURE__ */ S(NP, { children: s }),
        ErrorBoundary: ip
      }
    ),
    /* @__PURE__ */ S(Rb, { onChange: n }),
    /* @__PURE__ */ S(sp, {}),
    t !== !1 && /* @__PURE__ */ S(Ob, {}),
    /* @__PURE__ */ S(wP, { onEscape: r }),
    /* @__PURE__ */ S(wb, {}),
    i !== void 0 && /* @__PURE__ */ S(np, { editorRef: i })
  ] }) });
}
function dy(e, t) {
  return me(
    (r, n) => {
      r.read(() => {
        e(Lb()), t(!Ib(n.isComposing(), !0));
      });
    },
    [t, e]
  );
}
function qP({
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
  ), l = ee(null), d = py(), u = me(() => {
    e.getEditorState().read(() => {
      const p = O();
      if (P(p)) {
        l.current = p.clone();
        const g = p.anchor, y = p.focus, x = vb(
          e,
          g.getNode(),
          g.offset,
          y.getNode(),
          y.offset
        ), v = a.current;
        if (x !== null && v !== null) {
          const { left: M, bottom: A, width: F } = x.getBoundingClientRect(), B = Sb(e, x);
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
        cy(p, [Co(n, d)]),
        !0,
        void 0,
        l.current
      ), l.current = null;
    }
  }, b = dy(i, o);
  return /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox", ref: a, children: [
    /* @__PURE__ */ S(
      uy,
      {
        className: "CommentPlugin_CommentInputBox_Editor",
        onEscape: f,
        onChange: b
      }
    ),
    /* @__PURE__ */ xe("div", { className: "CommentPlugin_CommentInputBox_Buttons", children: [
      /* @__PURE__ */ S(Qr, { onClick: t, className: "CommentPlugin_CommentInputBox_Button", children: "Cancel" }),
      /* @__PURE__ */ S(
        Qr,
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
function RP({
  submitAddComment: e,
  thread: t,
  placeholder: r
}) {
  const [n, i] = de(""), [s, o] = de(!1), a = ee(null), c = py(), l = dy(i, o);
  return /* @__PURE__ */ xe(bn, { children: [
    /* @__PURE__ */ S(
      uy,
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
      Qr,
      {
        className: "CommentPlugin_CommentsPanel_SendButton",
        onClick: () => {
          if (s) {
            e(Co(n, c), !1, t);
            const u = a.current;
            u !== null && u.dispatchCommand(gb, void 0);
          }
        },
        disabled: !s,
        children: /* @__PURE__ */ S("i", { className: "send" })
      }
    )
  ] });
}
function fy({
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
        Qr,
        {
          onClick: () => {
            t(e, n), r();
          },
          children: "Delete"
        }
      ),
      " ",
      /* @__PURE__ */ S(
        Qr,
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
function $f({
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
  const o = Math.round((e.timeStamp - i) / 1e3), a = Math.round(o / 60), [c, l] = ly();
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
        Qr,
        {
          onClick: () => {
            l("Delete Comment", (d) => /* @__PURE__ */ S(
              fy,
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
function $P({
  activeIDs: e,
  comments: t,
  deleteCommentOrThread: r,
  listRef: n,
  submitAddComment: i,
  markNodeMap: s
}) {
  const [o] = ae(), [a, c] = de(0), [l, d] = ly(), u = Ke(
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
                const y = Array.from(p)[0], x = se(y);
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
              Qr,
              {
                onClick: () => {
                  d("Delete Thread", (p) => /* @__PURE__ */ S(
                    fy,
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
            $f,
            {
              comment: p,
              deleteComment: r,
              thread: f,
              rtf: u
            },
            p.id
          )) }),
          /* @__PURE__ */ S("div", { className: "CommentPlugin_CommentsPanel_List_Thread_Editor", children: /* @__PURE__ */ S(
            RP,
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
      $f,
      {
        comment: f,
        deleteComment: r,
        rtf: u
      },
      h
    );
  }) });
}
function LP({
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
      $P,
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
function py() {
  const e = op(), { yjsDocMap: t, name: r } = e;
  return t.has("comments") ? r : "Scripture User";
}
function IP({
  providerFactory: e,
  setCommentStore: t,
  onChange: r,
  showCommentsContainerRef: n,
  commentContainerRef: i,
  logger: s
}) {
  const o = op(), [a] = ae(), c = Ke(() => {
    const j = new CP(a, s);
    return r && j.registerOnChange(r), t?.(j), j;
  }, [a, s, r, t]), l = vP(c), d = Ke(() => /* @__PURE__ */ new Map(), []), [u, f] = de(), [h, b] = de([]), [p, g] = de(!1), [y, x] = de(!1), { yjsDocMap: v } = o;
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
              Ce(Q) && (Q.deleteID(Br, U), Q.hasNoIDsForEveryType() && Qs(Q));
            }
          });
        });
      }
    },
    [c, a, d]
  ), F = me(
    (j, _, U, W) => {
      c.addComment(j, U), _ && (a.update(() => {
        P(W) && vp(W, Br, j.id);
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
      ep(
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
              W === "destroyed" ? Q = j.get(U) ?? [] : Ce(fe) && (Q = fe.getTypedIDs()[Br] ?? []);
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
              const be = Mk($e, Br, W.anchor.offset) ?? [];
              be !== null && (b(be), fe = !0), W.isCollapsed() || (f($e.getKey()), Q = !0);
            }
          }
          fe || b(($e) => $e.length === 0 ? $e : []), Q || f(null), !U.has("collaboration") && P(W) && g(!1);
        });
      }),
      a.registerCommand(
        Rf,
        () => {
          const _ = window.getSelection();
          return _ !== null && _.removeAllRanges(), g(!0), !0;
        },
        kn
      )
    );
  }, [a, d]);
  const B = () => {
    a.dispatchCommand(Rf, void 0);
  };
  return /* @__PURE__ */ xe(bn, { children: [
    p && yn(
      /* @__PURE__ */ S(
        qP,
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
        OP,
        {
          anchorKey: u,
          editor: a,
          showComments: y,
          onAddComment: B
        }
      ),
      document.body
    ),
    n !== null && yn(
      /* @__PURE__ */ S(
        Qr,
        {
          className: `CommentPlugin_ShowCommentsButton ${y ? "active" : ""}`,
          onClick: () => x(!y),
          title: y ? "Hide Comments" : "Show Comments",
          children: /* @__PURE__ */ S("i", { className: "comments" })
        }
      ),
      n?.current ?? document.body
    ),
    y && yn(
      /* @__PURE__ */ S(
        LP,
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
function DP() {
  const e = ee(void 0), t = me((r) => {
    e.current = r;
  }, []);
  return [e, t];
}
function UP(e, t) {
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
function FP(e, t) {
  z(() => {
    e.options ??= {}, e.options.nodes ??= {}, e.options.nodes.addMissingComments = (r) => {
      UP(r, t);
    };
  }, [t, e]);
}
const ON = Nn(function(t, r) {
  const n = ee(null), i = ee(!0), s = ee(null), [o, a] = de(null), { children: c, onCommentChange: l, onUsjChange: d, showCommentsContainerRef: u, ...f } = t, { logger: h, options: { isReadonly: b, view: p } = {} } = t, g = (b ?? !1) || hs(p), [y, x] = DP();
  FP(f, y), z(() => {
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
      y.current?.setComments(A), i.current = !0;
    },
    get toolbarEndRef() {
      return o;
    }
  }));
  const v = me(
    (A, F, B, j) => {
      if (!d) return;
      const _ = y.current?.getComments();
      d(A, _, F, B, j);
    },
    [y, d]
  ), M = me(() => {
    if (!l || i.current) {
      i.current = !1;
      return;
    }
    const A = y.current?.getComments();
    l(A);
  }, [y, i, l]);
  return z(() => (a(n.current?.toolbarEndRef ?? null), () => a(null)), []), /* @__PURE__ */ S(qb, { children: /* @__PURE__ */ xe(oy, { ref: n, onUsjChange: v, ...f, children: [
    /* @__PURE__ */ S(
      IP,
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
function zP(e) {
  return e.replace(/["\\\n\r\f<>]/g, (t) => t === `
` ? "\\a " : t === "\r" ? "\\d " : t === "\f" ? "\\c " : t === "<" ? "\\3C " : t === ">" ? "\\3E " : `\\${t}`);
}
function KP(e) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/[^\w-]/g, (t) => `\\${t}`);
}
const BP = /^[#\w().,%/\s-]+$/;
function xr(e) {
  return e != null;
}
const jP = {
  left: "left",
  right: "right",
  center: "center",
  both: "justify"
}, VP = {
  left: "right",
  right: "left"
}, WP = "var(--usj-font-fallback, serif)";
function hy(e, t) {
  const r = [e];
  return t && t !== e && r.push(t), `font-family: ${r.map((i) => `"${zP(i)}"`).join(", ")}, ${WP}`;
}
const Oc = ".editor-input.usfm", HP = /^[\w.#[\]="':()>+~*,\s-]+$/;
function GP(e) {
  return HP.test(e) ? e : (console.warn(
    `[generateUsjCss] Ignoring unsafe containerSelector "${e}"; using "${Oc}".`
  ), Oc);
}
function JP(e, t, r, n, i) {
  const s = [];
  if (t.fontName && s.push(hy(t.fontName, i)), t.bold && s.push("font-weight: bold"), t.italic && s.push("font-style: italic"), t.color && (BP.test(t.color) ? s.push(`color: ${t.color}`) : console.warn(
    `[generateUsjCss] Skipping unsafe color "${t.color}" for marker "${e}".`
  )), xr(t.fontSize) && t.fontSize > 0 && s.push(`font-size: ${Math.floor(t.fontSize * 100 / 12)}%`), xr(t.firstLineIndent) && s.push(`text-indent: ${mn(t.firstLineIndent * 20 * r)}vw`), xr(t.leftMargin) && t.leftMargin >= 0 && s.push(`margin-${n ? "right" : "left"}: ${mn(t.leftMargin * 20 * r)}vw`), xr(t.rightMargin) && t.rightMargin >= 0 && s.push(
    `margin-${n ? "left" : "right"}: ${mn(t.rightMargin * 20 * r)}vw`
  ), xr(t.spaceBefore) && t.spaceBefore >= 0 && s.push(`margin-top: ${mn(t.spaceBefore * r)}pt`), xr(t.spaceAfter) && t.spaceAfter >= 0 && s.push(`margin-bottom: ${mn(t.spaceAfter * r)}pt`), t.lineSpacing === 1 ? s.push("line-height: 1.5") : t.lineSpacing === 2 && s.push("line-height: 2"), t.subscript ? s.push("vertical-align: text-bottom", "font-size: 66%") : t.superscript && s.push("vertical-align: text-top", "font-size: 66%"), t.underline && s.push("text-decoration: underline"), t.smallCaps && s.push("font-variant: small-caps"), t.justification) {
    const o = jP[n ? VP[t.justification] ?? t.justification : t.justification];
    o && s.push(`text-align: ${o}`);
  }
  return t.textProperties?.includes("verse") && s.push("white-space: nowrap", "unicode-bidi: embed"), s;
}
const Lf = { c: 150, ca: 133, cp: 150 };
function If(e, t) {
  return e && xr(e.fontSize) && e.fontSize > 0 ? Math.floor(e.fontSize * 100 / 12) : t;
}
function YP(e, t) {
  if (["c", "ca", "cp"].filter((i) => {
    const s = e.markers[i];
    return s && xr(s.fontSize) && s.fontSize > 0;
  }).length === 0) return [];
  const n = If(e.markers.c, Lf.c);
  return ["ca", "cp"].map((i) => {
    const s = If(
      e.markers[i],
      Lf[i]
    ), o = mn(s * 100 / n);
    return `${t} .usfm_c .usfm_${i}.usfm_${i} { font-size: ${o}%; }`;
  });
}
function wN(e, t = {}) {
  const { zoom: r = 1, rtl: n = !1, containerSelector: i = Oc } = t, s = GP(i), o = [], a = [];
  e.defaultFont && a.push(hy(e.defaultFont)), xr(e.defaultFontSize) && e.defaultFontSize > 0 && a.push(`font-size: ${mn(e.defaultFontSize * r)}pt`), a.length > 0 && o.push(`${s} { ${a.join("; ")}; }`);
  for (const [c, l] of Object.entries(e.markers)) {
    const d = JP(c, l, r, n, e.defaultFont);
    d.length > 0 && o.push(`${s} .usfm_${KP(c)} { ${d.join("; ")}; }`);
  }
  return o.push(...YP(e, s)), o.join(`
`);
}
export {
  Yh as BLOCK_VERSE_VIEW_MODE,
  T as CategoryType,
  NN as Editorial,
  rs as GENERATOR_NOTE_CALLER,
  cp as HIDDEN_NOTE_CALLER,
  ON as Marginal,
  k as MarkerType,
  Jh as PARAGRAPH_STRUCTURE_VIEW_MODE,
  Sl as STANDARD_VIEW_MODE,
  di as defaultStyleInfo,
  PN as directionToNames,
  J_ as filterAndRankItems,
  wN as generateUsjCss,
  EN as getDefaultViewMode,
  pi as getDefaultViewOptions,
  HA as getEnterMenuItems,
  WA as getMarkerMenuItems,
  AN as getViewMode,
  Al as getViewOptions,
  hs as isBlockVerseLayout,
  zr as isInsertEmbedOpOfType,
  cC as viewModeToViewNames
};
//# sourceMappingURL=index.js.map
